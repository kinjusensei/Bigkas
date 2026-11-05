-- ============================================================================
-- Bigkas — Let the app record when a learner starts a lesson
--
-- Safe to re-run. Run once in the Supabase SQL editor.
--
-- Used by services/activityLogService.ts. The admin Activity page reads these
-- rows through admin_activity_feed() (sql/admin_activity_feed.sql in the admin
-- repo), which doesn't depend on the policies here.
--
-- Learners can only add their own 'lesson_start' rows, so nobody can add fake
-- sign-ins or other actions to the admin feed. They can't read these rows.
-- ============================================================================

alter table public.activity_logs enable row level security;

-- The app leaves the time to the database, not the phone's clock.
alter table public.activity_logs
  alter column created_at set default now();

grant insert on public.activity_logs to authenticated;

drop policy if exists "activity_logs_insert_own_lesson_start" on public.activity_logs;
create policy "activity_logs_insert_own_lesson_start"
  on public.activity_logs for insert
  to authenticated
  with check (auth.uid() = user_id and action = 'lesson_start');

notify pgrst, 'reload schema';
