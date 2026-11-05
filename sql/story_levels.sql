-- Story levels: server-side gate. NOT RUN YET. Run once in the Supabase SQL
-- editor, after lesson_tiers.sql, if you want it. Safe to run again.
--
-- Same rules as utils/storyLevels.ts in the app, for Story practice saved in
-- lesson_progress:
-- - Deshawn (Easy) is always open.
-- - Old House (Intermediate) needs all 10 Easy lessons passed.
-- - Whispers (Hard) needs all 10 Intermediate lessons passed.
-- - Waray has no locks while its lessons have no content.
-- - A learner with a saved attempt in that story and language keeps it.
--
-- Story text ships inside the app, so reading can't be blocked here. What is
-- blocked: saving a practice result for a story in a locked level.
--
-- "Passed" also accepts a lesson_progress row with at least 3 correct,
-- because the app completes a lesson with no pretest through its practice
-- game alone, and every board lesson requires 3 correct.

create or replace function public.story_lesson_passed_by(p_user uuid, p_lesson_id text)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select public.lesson_passed_by(p_user, p_lesson_id) or exists (
    select 1 from public.lesson_progress
    where user_id = p_user and lesson_id = p_lesson_id and correct_answers >= 3
  );
$$;

create or replace function public.enforce_story_level()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  v_match    text[];
  v_language text;
  v_story    text;
  v_tier     integer;
  v_first    integer;
  v_passed   integer;
begin
  -- Admin tools using the service role are not gated.
  if coalesce(auth.role(), '') = 'service_role' then
    return new;
  end if;

  v_match := regexp_match(
    new.lesson_id,
    '^story_(tagalog|kapampangan|waray)_(?:(deshawn|oldhouse)_)?[0-9]+$'
  );
  if v_match is null then
    return new; -- not Story practice
  end if;
  v_language := v_match[1];
  v_story    := v_match[2]; -- null = Whispers
  v_tier := case v_story when 'deshawn' then 0 when 'oldhouse' then 1 else 2 end;

  if v_tier = 0 or v_language = 'waray' then
    return new;
  end if;

  -- Already started this story in this language: keep it.
  if exists (
    select 1 from public.lesson_progress
    where user_id = new.user_id
      and lesson_id ~ case
        when v_story is null then '^story_' || v_language || '_[0-9]+$'
        else '^story_' || v_language || '_' || v_story || '_[0-9]+$'
      end
  ) then
    return new;
  end if;

  v_first := (v_tier - 1) * 10 + 1;
  select count(*) into v_passed
  from generate_series(v_first, v_first + 9) as n
  where public.story_lesson_passed_by(new.user_id, v_language || '_' || n);

  if v_passed < 10 then
    raise exception 'Story % is in a locked level', new.lesson_id
      using errcode = '42501';
  end if;
  return new;
end;
$$;

drop trigger if exists enforce_story_level on public.lesson_progress;
create trigger enforce_story_level
  before insert or update on public.lesson_progress
  for each row execute function public.enforce_story_level();
