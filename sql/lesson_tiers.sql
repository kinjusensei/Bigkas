-- Lesson levels (tiers): server-side gate. Run once in the Supabase SQL
-- editor, after lesson_completions.sql. Safe to run again.
--
-- Easy = lessons 1–10, Intermediate = 11–20, Hard = 21–30, per language
-- (tagalog_N, kapampangan_N, waray_N). A level is open only when all 10
-- lessons of the level before are passed in the same language. Same rule
-- as utils/lessonTiers.ts in the app.
--
-- "Passed" here = an assessment of at least 70% was saved for the lesson:
-- lesson_completions.passed (structured lessons) or pretest_progress.passed
-- (the pretest, which structured lessons also write). The app's rule is a
-- little stricter (it also needs the lesson's activities / practice game);
-- this is the safety net against writes made outside the app.
--
-- Lessons don't load from the server, so "starting" a locked lesson can't
-- be blocked here. What is blocked: saving any progress, score or
-- completion for a lesson in a locked level, so a locked lesson can't be
-- recorded (or unlock the next level) through the API or a deep link.
-- The app itself sends locked deep links back to the Lessons screen.

-- 1. Was this lesson passed by this user? ------------------------------------
create or replace function public.lesson_passed_by(p_user uuid, p_lesson_id text)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.lesson_completions
    where user_id = p_user and lesson_id = p_lesson_id and passed
  ) or exists (
    select 1 from public.pretest_progress
    where user_id = p_user and lesson_id = p_lesson_id and passed
  );
$$;

-- 2. Is the level of this lesson open for this user? -------------------------
create or replace function public.lesson_tier_open(p_user uuid, p_lesson_id text)
returns boolean
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  v_match    text[];
  v_language text;
  v_number   integer;
  v_tier     integer;
  v_first    integer;
  v_passed   integer;
begin
  v_match := regexp_match(p_lesson_id, '^(tagalog|kapampangan|waray)_([0-9]+)$');
  if v_match is null then
    return true; -- not a board lesson (e.g. story lessons)
  end if;
  v_language := v_match[1];
  v_number   := v_match[2]::integer;
  v_tier     := (v_number - 1) / 10; -- 0 Easy, 1 Intermediate, 2 Hard
  if v_tier <= 0 then
    return true;
  end if;
  if v_tier > 2 then
    return false;
  end if;

  v_first := (v_tier - 1) * 10 + 1;
  select count(*) into v_passed
  from generate_series(v_first, v_first + 9) as n
  where public.lesson_passed_by(p_user, v_language || '_' || n);

  return v_passed = 10;
end;
$$;

grant execute on function public.lesson_tier_open(uuid, text) to authenticated;

-- 3. Reject progress writes for locked levels ---------------------------------
create or replace function public.enforce_lesson_tier()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  -- Admin tools using the service role are not gated.
  if coalesce(auth.role(), '') = 'service_role' then
    return new;
  end if;
  if not public.lesson_tier_open(new.user_id, new.lesson_id) then
    raise exception 'Lesson % is in a locked level', new.lesson_id
      using errcode = '42501';
  end if;
  return new;
end;
$$;

drop trigger if exists enforce_lesson_tier on public.lesson_completions;
create trigger enforce_lesson_tier
  before insert or update on public.lesson_completions
  for each row execute function public.enforce_lesson_tier();

drop trigger if exists enforce_lesson_tier on public.pretest_progress;
create trigger enforce_lesson_tier
  before insert or update on public.pretest_progress
  for each row execute function public.enforce_lesson_tier();

drop trigger if exists enforce_lesson_tier on public.lesson_progress;
create trigger enforce_lesson_tier
  before insert or update on public.lesson_progress
  for each row execute function public.enforce_lesson_tier();
