-- Run this migration in the Supabase SQL editor.
-- Profiles are created by the auth trigger exactly once. The client does not
-- insert profiles, which is required when email confirmation is enabled and
-- signUp() returns a user without an authenticated session.

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

alter table public.profiles enable row level security;

drop policy if exists "Authenticated users can view profiles" on public.profiles;
create policy "Authenticated users can view profiles"
  on public.profiles
  for select
  to authenticated
  using (true);

drop policy if exists "Users can update their own profile" on public.profiles;
create policy "Users can update their own profile"
  on public.profiles
  for update
  to authenticated
  using (id = auth.uid())
  with check (id = auth.uid());
