-- ============================================================================
-- Bigkas — Lesson completion (structured lessons, e.g. Tagalog Lesson 1)
--
-- Safe to re-run. Run once in the Supabase SQL editor.
--
-- Used by services/lessonCompletionService.ts:
--   lesson_completions: one row per (user, lesson) with the best assessment
--     score, whether it was ever passed (never goes back to false), which
--     activities were done, and which activities' XP was already added to
--     profiles.xp (so XP is never given twice).
--   winning_streaks.last_win_date: the phone's local date of the last
--     completed lesson, for the daily win streak.
-- ============================================================================


-- 1. Lesson completions -------------------------------------------------------
create table if not exists public.lesson_completions (
  user_id      uuid        not null references auth.users (id) on delete cascade,
  lesson_id    text        not null,
  dialect      text        not null,
  best_score   integer     not null default 0,      -- percent 0..100
  passed       boolean     not null default false,
  activities   text[]      not null default '{}',
  xp_awarded   text[]      not null default '{}',
  completed_at timestamptz,
  updated_at   timestamptz not null default now(),
  primary key (user_id, lesson_id)
);

alter table public.lesson_completions enable row level security;

drop policy if exists "lesson_completions_select_own" on public.lesson_completions;
create policy "lesson_completions_select_own"
  on public.lesson_completions for select
  using (auth.uid() = user_id);

drop policy if exists "lesson_completions_insert_own" on public.lesson_completions;
create policy "lesson_completions_insert_own"
  on public.lesson_completions for insert
  with check (auth.uid() = user_id);

drop policy if exists "lesson_completions_update_own" on public.lesson_completions;
create policy "lesson_completions_update_own"
  on public.lesson_completions for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);


-- 2. Daily win streak ---------------------------------------------------------
alter table public.winning_streaks
  add column if not exists last_win_date date;


-- 3. Leaderboard score with the win-streak bonus -----------------------------
-- Best score + 10% per win in the streak at the time it was earned
-- (utils/lessonCompletion.ts scoreWithStreakBonus). The leaderboard adds
-- up these per lesson; rows without one count their plain score.
alter table public.lesson_progress
  add column if not exists leaderboard_score integer;

alter table public.lesson_completions
  add column if not exists leaderboard_score integer not null default 0;

-- The leaderboard reads every learner's lesson scores (lesson_progress is
-- already readable that way), so signed-in users may read completions.
drop policy if exists "lesson_completions_select_leaderboard" on public.lesson_completions;
create policy "lesson_completions_select_leaderboard"
  on public.lesson_completions for select
  to authenticated
  using (true);


-- 4. Latest attempt status -------------------------------------------------
-- 'passed', 'failed' or 'surrendered' (services/lessonCompletionService.ts
-- saveAttemptStatus). Optional: the app skips it while it's missing.
alter table public.lesson_completions
  add column if not exists status text;


-- 5. Let the API see the new tables and columns right away ------------------
notify pgrst, 'reload schema';
