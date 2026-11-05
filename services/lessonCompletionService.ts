import { REVIEW_MODE } from "../constant/devFlags";
import {
  breakWinStreak,
  CompletionRecord,
  levelForXp,
  localDateString,
  mergeCompletion,
  nextWinStreak,
  scoreWithStreakBonus,
  StreakState,
} from "../utils/lessonCompletion";
import { retryOnJwtIssuedAtFuture, supabase } from "./supabase";

// Saves a structured lesson's result (sql/lesson_completions.sql): best
// score, activities done, XP for each activity once (added to
// profiles.xp / level), the win streak (+1 for a passed assessment, 0 for
// a failed one) and the best leaderboard score (assessment score + 10% per
// streak win). The rules themselves are pure functions in
// utils/lessonCompletion.ts.

export type LessonCompletionInput = {
  lessonId: string;
  dialect: string;
  scorePercent: number;
  passPercent: number;
  activitiesDone: string[];
  xpEligible: string[];
  rewards: Record<string, number>;
  required: string[];
  // One assessment attempt: the win streak changes once per key, however
  // many times that attempt is saved (e.g. after reviewing the lesson).
  streakKey: string;
  // The learner surrendered mid-lesson: the XP earned so far is kept, the
  // win streak breaks (0) and the attempt is recorded as surrendered.
  surrendered?: boolean;
};

// Latest attempt per lesson, in lesson_completions.status when that
// column exists (sql/lesson_completions.sql, section 4).
export type LessonAttemptStatus = "passed" | "failed" | "surrendered";

export type LessonCompletionOutcome = {
  xpAdded: number;
  totalXpBefore: number;
  totalXp: number;
  levelBefore: number;
  level: number;
  streak: number;
  // This attempt's score with the streak bonus (0 if it failed) and the
  // best one kept for the leaderboard.
  bonusScore: number;
  leaderboardScore: number;
  passed: boolean;
  lessonComplete: boolean;
  justCompleted: boolean;
  bestScore: number;
};

type CompletionRow = {
  lesson_id: string;
  best_score: number;
  passed: boolean;
  activities: string[] | null;
  xp_awarded: string[] | null;
  completed_at: string | null;
  leaderboard_score?: number | null;
};

const toRecord = (row: CompletionRow): CompletionRecord => ({
  bestScore: row.best_score ?? 0,
  passed: !!row.passed,
  activities: row.activities ?? [],
  xpAwarded: row.xp_awarded ?? [],
  completedAt: row.completed_at,
});

async function getUserId(): Promise<string> {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session?.user) throw new Error("User not authenticated.");
  return session.user.id;
}

// All of the current user's lesson completions, keyed by lesson id.
// Returns {} on any error (e.g. the table hasn't been created yet) so other
// progress keeps working.
export async function getAllLessonCompletions(): Promise<
  Record<string, CompletionRecord>
> {
  try {
    const userId = await getUserId();
    return await retryOnJwtIssuedAtFuture(async () => {
      const { data, error } = await supabase
        .from("lesson_completions")
        .select("lesson_id, best_score, passed, activities, xp_awarded, completed_at")
        .eq("user_id", userId);
      if (error) throw error;
      const map: Record<string, CompletionRecord> = {};
      (data ?? []).forEach((row: CompletionRow) => {
        map[row.lesson_id] = toRecord(row);
      });
      return map;
    });
  } catch (error) {
    console.warn("Unable to load lesson completions:", error);
    return {};
  }
}

// lesson_completions.status is optional: until the column is added
// (sql/lesson_completions.sql, section 4) the write fails and is skipped
// for the rest of the session. Never blocks the save itself.
let statusColumnMissing = false;

async function saveAttemptStatus(
  userId: string,
  lessonId: string,
  status: LessonAttemptStatus,
) {
  if (statusColumnMissing) return;
  const { error } = await supabase
    .from("lesson_completions")
    .update({ status })
    .eq("user_id", userId)
    .eq("lesson_id", lessonId);
  if (error) {
    statusColumnMissing = true;
    console.warn(
      "lesson_completions.status not saved (run sql/lesson_completions.sql section 4):",
      error.message,
    );
  }
}

// Win streak after each attempt already counted (see streakKey).
const countedStreaks = new Map<string, number>();

async function doSave(
  input: LessonCompletionInput,
): Promise<LessonCompletionOutcome> {
  const userId = await getUserId();

  const { data: existing, error: fetchError } = await supabase
    .from("lesson_completions")
    .select(
      "lesson_id, best_score, passed, activities, xp_awarded, completed_at, leaderboard_score",
    )
    .eq("user_id", userId)
    .eq("lesson_id", input.lessonId)
    .maybeSingle();
  if (fetchError) throw fetchError;

  const now = new Date();
  // Review mode (constant/devFlags.ts) works out this attempt's result to show,
  // but skips every write below.
  const result = mergeCompletion(existing ? toRecord(existing) : null, {
    scorePercent: input.scorePercent,
    passPercent: input.passPercent,
    activitiesDone: input.activitiesDone,
    xpEligible: input.xpEligible,
    rewards: input.rewards,
    required: input.required,
    nowIso: now.toISOString(),
  });

  // Win streak: worked out once per attempt, saved after the row below.
  const streakId = `${input.lessonId}:${input.streakKey}`;
  const alreadyCounted = countedStreaks.get(streakId);
  let newStreak: StreakState | null = null;
  let streak: number;
  if (alreadyCounted !== undefined) {
    streak = alreadyCounted;
  } else {
    const { data: streakRow, error: streakFetchError } = await supabase
      .from("winning_streaks")
      .select("current_streak, longest_streak, last_win_date")
      .eq("user_id", userId)
      .maybeSingle();
    if (streakFetchError) throw streakFetchError;
    const previousStreak = {
      current: streakRow?.current_streak ?? 0,
      longest: streakRow?.longest_streak ?? 0,
      lastDate: streakRow?.last_win_date ?? null,
    };
    newStreak = input.surrendered
      ? breakWinStreak(previousStreak, localDateString(now))
      : nextWinStreak(
          previousStreak,
          result.passedThisAttempt,
          localDateString(now),
        );
    streak = newStreak.current;
  }

  // Leaderboard: a passed attempt's score + 10% per streak win; the best
  // one is kept, so it stays if the streak later breaks.
  const bonusScore = result.passedThisAttempt
    ? scoreWithStreakBonus(input.scorePercent, streak)
    : 0;
  const leaderboardScore = Math.max(
    existing?.leaderboard_score ?? 0,
    bonusScore,
  );

  // The row (with the XP marked as given) is written before the XP is
  // added, so a failure part-way can never give the same XP twice.
  if (!REVIEW_MODE) {
    const { error: upsertError } = await supabase
      .from("lesson_completions")
      .upsert(
        {
          user_id: userId,
          lesson_id: input.lessonId,
          dialect: input.dialect,
          best_score: result.record.bestScore,
          passed: result.record.passed,
          activities: result.record.activities,
          xp_awarded: result.record.xpAwarded,
          completed_at: result.record.completedAt,
          leaderboard_score: leaderboardScore,
          updated_at: now.toISOString(),
        },
        { onConflict: "user_id,lesson_id" },
      );
    if (upsertError) throw upsertError;

    await saveAttemptStatus(
      userId,
      input.lessonId,
      input.surrendered
        ? "surrendered"
        : result.passedThisAttempt
          ? "passed"
          : "failed",
    );
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("xp")
    .eq("id", userId)
    .single();
  if (profileError) throw profileError;

  const totalXpBefore = profile?.xp ?? 0;
  const totalXp = totalXpBefore + result.xpToAdd;
  if (!REVIEW_MODE && result.xpToAdd > 0) {
    const { error: xpError } = await supabase
      .from("profiles")
      .update({ xp: totalXp, level: levelForXp(totalXp) })
      .eq("id", userId);
    if (xpError) throw xpError;
  }

  if (!REVIEW_MODE && newStreak) {
    const { error: streakError } = await supabase
      .from("winning_streaks")
      .upsert({
        user_id: userId,
        current_streak: newStreak.current,
        longest_streak: newStreak.longest,
        last_win_date: newStreak.lastDate,
        updated_at: now.toISOString(),
      });
    if (streakError) throw streakError;
    countedStreaks.set(streakId, newStreak.current);
  }

  return {
    xpAdded: result.xpToAdd,
    totalXpBefore,
    totalXp,
    levelBefore: levelForXp(totalXpBefore),
    level: levelForXp(totalXp),
    streak,
    bonusScore,
    leaderboardScore,
    passed: result.record.passed,
    lessonComplete: result.lessonComplete,
    justCompleted: result.justCompleted,
    bestScore: result.record.bestScore,
  };
}

// One save per attempt: calling again with the same key (re-render, back
// button, double tap) returns the same result instead of saving twice. A
// failed save can be retried.
const saves = new Map<string, Promise<LessonCompletionOutcome>>();

export function saveLessonCompletion(
  input: LessonCompletionInput,
  attemptKey: string,
): Promise<LessonCompletionOutcome> {
  const key = `${input.lessonId}:${attemptKey}`;
  const existing = saves.get(key);
  if (existing) return existing;
  const promise = doSave(input).catch((error) => {
    saves.delete(key);
    throw error;
  });
  saves.set(key, promise);
  return promise;
}
