-- ============================================================================
-- Bigkas — Bug report reply functions (fix for the live database)
--
-- Extracted verbatim from sql/report_messages.sql, in this order:
--   1. respond_to_bug_report (new version)
--   2. reply_to_bug_report
--   3. backfill of old report_response notifications
-- The backfill runs last so it can't race the function replacement.
--
-- Deliberately excluded: CREATE TABLE, all policy statements, the
-- needs_admin_reply ALTER and the notification_id column (both already
-- applied live) and the realtime setup.
-- ============================================================================


-- 1. Admin reply (replaces the version in notifications.sql) ------------------
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


-- 2. User follow-up -----------------------------------------------------------
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


-- 3. Backfill existing admin replies ------------------------------------------
insert into public.bug_report_messages
  (report_id, sender_id, sender_role, body, notification_id, created_at)
select n.report_id, n.created_by, 'admin', n.body, n.id, n.created_at
from public.notifications n
where n.kind = 'report_response'
  and n.report_id is not null
on conflict (notification_id) do nothing;
