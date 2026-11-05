-- ============================================================================
-- Bigkas — "Seen" receipts on bug report conversations
--
-- Run AFTER sql/report_messages.sql (or fix_reply_functions.sql). Safe to re-run.
--
-- admin_seen_at: last time an admin opened the report. The app shows "Seen by
--                the Bigkas team" under the user's messages sent before it.
-- user_seen_at:  last time the reporter opened the thread. The admin website
--                shows "Seen" under admin replies sent before it.
--
-- The first time an admin opens a report, the reporter also gets a
-- notification, so they know someone is looking at it.
-- ============================================================================


-- 1. Columns ------------------------------------------------------------------
alter table public.bug_reports
  add column if not exists admin_seen_at timestamptz,
  add column if not exists user_seen_at  timestamptz;


-- 2. New notification kind ----------------------------------------------------
alter table public.notifications drop constraint if exists notifications_kind_check;
alter table public.notifications
  add constraint notifications_kind_check
  check (kind in ('global', 'report_response', 'report_seen'));

alter table public.notifications drop constraint if exists notifications_recipient_matches_kind;
alter table public.notifications
  add constraint notifications_recipient_matches_kind check (
    (kind = 'global' and recipient_id is null) or
    (kind in ('report_response', 'report_seen') and recipient_id is not null)
  );


-- 3. Admin opened the report --------------------------------------------------
create or replace function public.mark_bug_report_seen_by_admin(p_report_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_owner     uuid;
  v_title     text;
  v_seen_at   timestamptz;
begin
  if not public.is_admin() then
    raise exception 'Only admins can mark reports as seen' using errcode = '42501';
  end if;

  select br.user_id, br.title, br.admin_seen_at
  into v_owner, v_title, v_seen_at
  from public.bug_reports br
  where br.id = p_report_id
  for update;

  if v_owner is null then
    raise exception 'Report % not found', p_report_id;
  end if;

  update public.bug_reports
  set admin_seen_at = now()
  where bug_reports.id = p_report_id;

  -- Only the first view sends a notification; later views just move the receipt.
  if v_seen_at is null then
    insert into public.notifications
      (recipient_id, kind, title, body, report_id, created_by)
    values
      (v_owner,
       'report_seen',
       'We''ve seen your report: ' || left(coalesce(v_title, 'Bug report'), 80),
       'The Bigkas team has read your report and is looking into it. We''ll reply here.',
       p_report_id,
       auth.uid());
  end if;
end;
$$;


-- 4. Reporter opened the thread -----------------------------------------------
create or replace function public.mark_bug_report_seen_by_user(p_report_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.bug_reports
  set user_seen_at = now()
  where bug_reports.id = p_report_id
    and bug_reports.user_id = auth.uid();

  if not found then
    raise exception 'Report not found' using errcode = '42501';
  end if;
end;
$$;


-- 5. Realtime -----------------------------------------------------------------
-- Lets each side see the other's receipt move without a refresh.
do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'bug_reports'
  ) then
    alter publication supabase_realtime add table public.bug_reports;
  end if;
end $$;
