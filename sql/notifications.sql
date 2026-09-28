-- ============================================================================
-- Bigkas — Notifications (global announcements + bug report replies)
--
-- Run AFTER sql/bug_reports.sql. Safe to re-run.
--
-- Assumes:
--   profiles.id   = auth.users.id
--   profiles.role = 'admin' for admins
--   bug_reports has: id uuid, user_id uuid, title text, status text, created_at
--   (matches what services/reportService.ts reads and writes)
-- Adjust the column names below if yours differ.
-- ============================================================================


-- 1. Admin check --------------------------------------------------------------
-- SECURITY DEFINER so RLS policies can call it without recursing into
-- profiles' own policies.
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;


-- 2. Bug report status + admin access -----------------------------------------
-- bug_reports.status already exists (reportService.ts reads it), so this is a
-- no-op for you. No CHECK constraint is added here on purpose: your existing
-- rows may use different values. Decide the allowed statuses when you build
-- the admin website, then add a constraint that matches them.
alter table public.bug_reports
  add column if not exists status text not null default 'open';

-- Replaces the commented-out admin policy in bug_reports.sql.
drop policy if exists "Admins can read all bug reports" on public.bug_reports;
create policy "Admins can read all bug reports"
  on public.bug_reports for select
  using (public.is_admin());

drop policy if exists "Admins can update bug reports" on public.bug_reports;
create policy "Admins can update bug reports"
  on public.bug_reports for update
  using (public.is_admin())
  with check (public.is_admin());

-- Admins need to see the screenshots in the private bucket.
drop policy if exists "Admins can read bug report screenshots" on storage.objects;
create policy "Admins can read bug report screenshots"
  on storage.objects for select
  using (bucket_id = 'bug-reports' and public.is_admin());


-- 3. Notifications ------------------------------------------------------------
-- recipient_id NULL  = global announcement (everyone sees it)
-- recipient_id set   = personal (e.g. a reply to that user's report)
create table if not exists public.notifications (
  id           uuid primary key default gen_random_uuid(),
  recipient_id uuid references auth.users (id) on delete cascade,
  kind         text not null check (kind in ('global', 'report_response')),
  title        text not null check (char_length(title) between 1 and 120),
  body         text not null check (char_length(body) between 1 and 2000),
  report_id    uuid references public.bug_reports (id) on delete set null,
  created_by   uuid references auth.users (id) on delete set null,
  created_at   timestamptz not null default now(),
  constraint notifications_recipient_matches_kind check (
    (kind = 'global' and recipient_id is null) or
    (kind = 'report_response' and recipient_id is not null)
  )
);

create index if not exists notifications_recipient_created_idx
  on public.notifications (recipient_id, created_at desc);
create index if not exists notifications_global_created_idx
  on public.notifications (created_at desc) where recipient_id is null;
create index if not exists notifications_report_idx
  on public.notifications (report_id);

-- Read state lives in its own table, because a global notification is one row
-- shared by every user — it can't hold a single is_read flag.
create table if not exists public.notification_reads (
  notification_id uuid not null references public.notifications (id) on delete cascade,
  user_id         uuid not null default auth.uid() references auth.users (id) on delete cascade,
  read_at         timestamptz not null default now(),
  primary key (notification_id, user_id)
);

alter table public.notifications      enable row level security;
alter table public.notification_reads enable row level security;

drop policy if exists "Users see their own and global notifications" on public.notifications;
create policy "Users see their own and global notifications"
  on public.notifications for select
  using (recipient_id is null or recipient_id = auth.uid() or public.is_admin());

-- No INSERT policy on purpose: all writes go through the functions below,
-- which check is_admin() themselves.

drop policy if exists "Admins can delete notifications" on public.notifications;
create policy "Admins can delete notifications"
  on public.notifications for delete
  using (public.is_admin());

drop policy if exists "Users see their own reads" on public.notification_reads;
create policy "Users see their own reads"
  on public.notification_reads for select
  using (user_id = auth.uid());

drop policy if exists "Users mark their own reads" on public.notification_reads;
create policy "Users mark their own reads"
  on public.notification_reads for insert
  with check (user_id = auth.uid());


-- 4. Reading ------------------------------------------------------------------
create or replace function public.get_my_notifications(p_limit int default 50)
returns table (
  id         uuid,
  kind       text,
  title      text,
  body       text,
  report_id  uuid,
  created_at timestamptz,
  is_read    boolean
)
language sql
stable
security invoker
set search_path = public
as $$
  select n.id, n.kind, n.title, n.body, n.report_id, n.created_at,
         (r.notification_id is not null) as is_read
  from public.notifications n
  left join public.notification_reads r
    on r.notification_id = n.id and r.user_id = auth.uid()
  -- Explicit filter: admins can SELECT everything via RLS, but their inbox
  -- should still only show what's addressed to them.
  where n.recipient_id is null or n.recipient_id = auth.uid()
  order by n.created_at desc
  limit p_limit;
$$;

create or replace function public.mark_notifications_read(p_ids uuid[])
returns void
language sql
security invoker
set search_path = public
as $$
  insert into public.notification_reads (notification_id, user_id)
  select n.id, auth.uid()
  from public.notifications n
  where n.id = any (p_ids)
    and (n.recipient_id is null or n.recipient_id = auth.uid())
  on conflict do nothing;
$$;

create or replace function public.mark_all_notifications_read()
returns void
language sql
security invoker
set search_path = public
as $$
  insert into public.notification_reads (notification_id, user_id)
  select n.id, auth.uid()
  from public.notifications n
  where n.recipient_id is null or n.recipient_id = auth.uid()
  on conflict do nothing;
$$;


-- 5. Admin actions ------------------------------------------------------------
create or replace function public.send_global_notification(p_title text, p_body text)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_id uuid;
begin
  if not public.is_admin() then
    raise exception 'Only admins can send announcements' using errcode = '42501';
  end if;

  insert into public.notifications (recipient_id, kind, title, body, created_by)
  values (null, 'global', trim(p_title), trim(p_body), auth.uid())
  returning notifications.id into v_id;

  return v_id;
end;
$$;

-- Sends the reply AND (optionally) updates the report's status in one
-- transaction, so a reply never goes out with a stale status or vice versa.
create or replace function public.respond_to_bug_report(
  p_report_id uuid,
  p_message   text,
  p_status    text default null
)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_owner   uuid;
  v_title   text;
  v_id      uuid;
begin
  if not public.is_admin() then
    raise exception 'Only admins can reply to reports' using errcode = '42501';
  end if;

  select br.user_id, br.title into v_owner, v_title
  from public.bug_reports br
  where br.id = p_report_id;

  if v_owner is null then
    raise exception 'Report % not found', p_report_id;
  end if;

  if p_status is not null then
    update public.bug_reports set status = p_status where bug_reports.id = p_report_id;
  end if;

  insert into public.notifications
    (recipient_id, kind, title, body, report_id, created_by)
  values
    (v_owner,
     'report_response',
     'Reply to your report: ' || left(coalesce(v_title, 'Bug report'), 80),
     trim(p_message),
     p_report_id,
     auth.uid())
  returning notifications.id into v_id;

  return v_id;
end;
$$;


-- 6. Realtime -----------------------------------------------------------------
-- Lets the app's bell badge update without a refresh. Realtime respects the
-- SELECT policy above, so users only receive rows they're allowed to see.
do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'notifications'
  ) then
    alter publication supabase_realtime add table public.notifications;
  end if;
end $$;


-- 7. Make yourself an admin (edit the email, run once) ------------------------
-- update public.profiles set role = 'admin'
-- where id = (select id from auth.users where email = 'you@example.com');
