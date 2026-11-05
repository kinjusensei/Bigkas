-- New accounts: make sure every user has a profile row they can save to.
-- NOT RUN YET. Run in the Supabase SQL editor after reviewing.

-- ---------------------------------------------------------------------
-- PART 1: read-only checks. These change nothing and show the actual cause.
-- ---------------------------------------------------------------------

-- Is the sign-up trigger installed? Expect a row with tgenabled = 'O'.
select tgname, tgenabled
from pg_trigger
where tgrelid = 'auth.users'::regclass and not tgisinternal;

-- Which profile policies exist? Expect SELECT and UPDATE; INSERT is added below.
select policyname, cmd, roles, qual, with_check
from pg_policies
where schemaname = 'public' and tablename = 'profiles';

-- Accounts with no profile row. A non-zero count points at the trigger.
select u.id, u.email, u.created_at, u.email_confirmed_at
from auth.users u
left join public.profiles p on p.id = u.id
where p.id is null
order by u.created_at desc;

-- ---------------------------------------------------------------------
-- PART 2: the fix. Safe to run more than once.
-- ---------------------------------------------------------------------

-- Creates the profile on sign-up (same as sql/profiles_registration.sql).
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (
    id,
    email,
    display_name,
    privacy_accepted_at,
    privacy_version,
    age_confirmed
  )
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'display_name', ''),
    nullif(new.raw_user_meta_data ->> 'privacy_accepted_at', '')::timestamptz,
    new.raw_user_meta_data ->> 'privacy_version',
    coalesce((new.raw_user_meta_data ->> 'age_confirmed')::boolean, false)
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

revoke all on function public.handle_new_user() from public;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Lets the app update a user's own row.
drop policy if exists "Users can update their own profile" on public.profiles;
create policy "Users can update their own profile"
  on public.profiles
  for update
  to authenticated
  using (id = auth.uid())
  with check (id = auth.uid());

-- New: lets the app create a user's own row if it is missing.
drop policy if exists "Users can insert their own profile" on public.profiles;
create policy "Users can insert their own profile"
  on public.profiles
  for insert
  to authenticated
  with check (id = auth.uid());

-- Gives accounts already missing a row a profile, so they can finish the
-- tutorial. Does not change any existing row.
insert into public.profiles (
  id,
  email,
  display_name,
  privacy_accepted_at,
  privacy_version,
  age_confirmed
)
select
  u.id,
  u.email,
  coalesce(u.raw_user_meta_data ->> 'display_name', ''),
  nullif(u.raw_user_meta_data ->> 'privacy_accepted_at', '')::timestamptz,
  u.raw_user_meta_data ->> 'privacy_version',
  coalesce((u.raw_user_meta_data ->> 'age_confirmed')::boolean, false)
from auth.users u
left join public.profiles p on p.id = u.id
where p.id is null
on conflict (id) do nothing;
