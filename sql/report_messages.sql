-- ============================================================================
-- Bigkas — Bug report conversations (user follow-ups to admin replies)
--
-- Run AFTER sql/notifications.sql. Safe to re-run.
--
-- Every message on a report (admin reply or user follow-up) is a row in
-- bug_report_messages. Admin replies still create a notification as before,
-- so the bell keeps working; the notification now also links to the thread.
-- ============================================================================


-- 1. Messages -----------------------------------------------------------------
create table if not exists public.bug_report_messages (
  id              uuid primary key default gen_random_uuid(),
  report_id       uuid not null references public.bug_reports (id) on delete cascade,
  sender_id       uuid references auth.users (id) on delete set null,
  sender_role     text not null check (sender_role in ('user', 'admin')),
  body            text not null check (char_length(body) between 1 and 2000),
  -- Set for admin replies that also went out as a notification. Unique so the
  -- backfill below can be re-run without duplicating messages.
  notification_id uuid unique references public.notifications (id) on delete set null,
  created_at      timestamptz not null default now()
);

create index if not exists bug_report_messages_report_created_idx
  on public.bug_report_messages (report_id, created_at);

alter table public.bug_report_messages enable row level security;

drop policy if exists "Owners and admins read report messages" on public.bug_report_messages;
create policy "Owners and admins read report messages"
  on public.bug_report_messages for select
  using (
    public.is_admin() or exists (
      select 1 from public.bug_reports br
      where br.id = report_id and br.user_id = auth.uid()
    )
  );

-- No INSERT policy on purpose: writes go through the functions below.


-- 2. "Waiting for admin" flag -------------------------------------------------
-- True when the user has followed up and no admin has answered since. Lets the
-- admin website sort/filter reports that need attention.
alter table public.bug_reports
  add column if not exists needs_admin_reply boolean not null default false;


-- 3. Backfill existing admin replies ------------------------------------------
insert into public.bug_report_messages
  (report_id, sender_id, sender_role, body, notification_id, created_at)
select n.report_id, n.created_by, 'admin', n.body, n.id, n.created_at
from public.notifications n
where n.kind = 'report_response'
  and n.report_id is not null
on conflict (notification_id) do nothing;


-- 4. Admin reply (replaces the version in notifications.sql) ------------------
-- Same signature and behaviour as before, plus it records the message in the
-- thread and clears needs_admin_reply.
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

  update public.bug_reports
  set status = coalesce(p_status, status),
      needs_admin_reply = false
  where bug_reports.id = p_report_id;

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

  insert into public.bug_report_messages
    (report_id, sender_id, sender_role, body, notification_id)
  values
    (p_report_id, auth.uid(), 'admin', trim(p_message), v_id);

  return v_id;
end;
$$;


-- 5. User follow-up -----------------------------------------------------------
-- Only the report's owner can call this. A follow-up on a resolved or closed
-- report reopens it, so it shows up again in the admins' open list.
create or replace function public.reply_to_bug_report(
  p_report_id uuid,
  p_message   text
)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_owner uuid;
  v_body  text := trim(coalesce(p_message, ''));
  v_id    uuid;
begin
  select br.user_id into v_owner
  from public.bug_reports br
  where br.id = p_report_id;

  if v_owner is null or v_owner <> auth.uid() then
    raise exception 'Report not found' using errcode = '42501';
  end if;

  if char_length(v_body) = 0 then
    raise exception 'Message cannot be empty';
  end if;

  if char_length(v_body) > 2000 then
    raise exception 'Message is too long (2000 characters max)';
  end if;

  insert into public.bug_report_messages (report_id, sender_id, sender_role, body)
  values (p_report_id, auth.uid(), 'user', v_body)
  returning bug_report_messages.id into v_id;

  update public.bug_reports
  set needs_admin_reply = true,
      status = case when status in ('resolved', 'closed') then 'open' else status end
  where bug_reports.id = p_report_id;

  return v_id;
end;
$$;


-- 6. Realtime -----------------------------------------------------------------
-- Lets an open conversation show new admin replies without a refresh.
do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'bug_report_messages'
  ) then
    alter publication supabase_realtime add table public.bug_report_messages;
  end if;
end $$;
