import { REVIEW_MODE } from "../constant/devFlags";
import {
  MAX_LEVEL,
  REPLAY_XP_PERCENTAGE,
  XP_PER_LEVEL,
} from "../constant/gameConstants";
import { scoreWithStreakBonus } from "../utils/lessonCompletion";
import { retryOnJwtIssuedAtFuture, supabase } from "./supabase";

export interface SavePracticeResult {
  lessonId: string;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  accuracy: number;
  xpEarned: number;
  stars: number;
  badge: string;
}

interface LessonProgress {
  id: string;
  score: number;
  accuracy: number;
  stars: number;
  badge: string;
}

// Minimal shape needed to check "did the user meet requiredCorrect for this
// lesson" — used for chapter-locking in story.tsx, not for the score-merge
// logic below (that's what the existing LessonProgress/getLessonProgress
// are for; left untouched).
export interface LessonCompletionSummary {
  correctAnswers: number;
  totalQuestions: number;
}

// Reads the session already stored on the device instead of asking the
// auth server (getUser), which saves a network round trip on every call.
// The database still checks the token on each query.
async function getCurrentUser() {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();
  const user = session?.user;

  if (error || !user) {
    throw new Error("User not authenticated.");
  }

  return user;
}

async function getLessonProgress(
  userId: string,
  lessonId: string,
): Promise<LessonProgress | null> {
  const { data, error } = await supabase
    .from("lesson_progress")
    .select("id, score, accuracy, stars, badge")
    .eq("user_id", userId)
    .eq("lesson_id", lessonId)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}

// ------------------------------------
// All lesson progress for the current user (story chapter locking)
// ------------------------------------
// Fetches every lesson_progress row for the current user in one query,
// keyed by lesson_id, so a screen with several lessons (e.g. story.tsx's
// chapters) only needs one round-trip instead of one per lesson.
export async function getAllLessonProgress(): Promise<
  Record<string, LessonCompletionSummary>
> {
  const user = await getCurrentUser();

  return retryOnJwtIssuedAtFuture(async () => {
    const { data, error } = await supabase
      .from("lesson_progress")
      .select("lesson_id, correct_answers, total_questions")
      .eq("user_id", user.id);

    if (error) {
      throw error;
    }

    const progressByLessonId: Record<string, LessonCompletionSummary> = {};

    (data ?? []).forEach((row) => {
      progressByLessonId[row.lesson_id] = {
        correctAnswers: row.correct_answers,
        totalQuestions: row.total_questions,
      };
    });

    return progressByLessonId;
  });
}

function calculateReplayXP(originalXP: number): number {
  return Math.floor(originalXP * REPLAY_XP_PERCENTAGE);
}

// ------------------------------------
// Add XP to user's profile
// ------------------------------------

async function addProfileXP(userId: string, xpToAdd: number): Promise<number> {
  const { data: profile, error: fetchError } = await supabase
    .from("profiles")
    .select("xp, level")
    .eq("id", userId)
    .single();

  if (fetchError) {
    throw fetchError;
  }

  const currentXP = profile?.xp ?? 0;
  const newXP = currentXP + xpToAdd;

  const calculatedLevel = Math.min(
    Math.floor(newXP / XP_PER_LEVEL) + 1,
    MAX_LEVEL,
  );

  const { error: updateError } = await supabase
    .from("profiles")
    .update({
      xp: newXP,
      level: calculatedLevel,
    })
    .eq("id", userId);

  if (updateError) {
    throw updateError;
  }

  return newXP;
}

// ------------------------------------
// First attempt
// ------------------------------------

async function insertLessonProgress(
  userId: string,
  result: SavePracticeResult,
): Promise<number> {
  const now = new Date().toISOString();

  const { error } = await supabase.from("lesson_progress").insert({
    user_id: userId,
    lesson_id: result.lessonId,

    score: result.score,
    correct_answers: result.correctAnswers,
    total_questions: result.totalQuestions,
    accuracy: result.accuracy,

    xp_earned: result.xpEarned,
    stars: result.stars,
    badge: result.badge,

    repetitions: 1,
    completed_at: now,
    last_review: now,
  });

  if (error) {
    throw error;
  }

  return result.xpEarned;
}

// ------------------------------------
// Replay
// ------------------------------------

async function updateLessonProgress(
  progress: LessonProgress,
  result: SavePracticeResult,
): Promise<number> {
  const replayXP = calculateReplayXP(result.xpEarned);

  const bestScore = Math.max(progress.score, result.score);
  const bestAccuracy = Math.max(progress.accuracy, result.accuracy);
  const bestStars = Math.max(progress.stars, result.stars);
  const achievedNewBest = result.score > progress.score;

  const bestBadge =
    achievedNewBest ? result.badge : progress.badge;

  // The chapter-locking query uses these counters to decide whether the
  // lesson's required score has been reached. Keep them in sync with the
  // best result; otherwise a successful replay can still leave the chapter
  // locked because the first attempt's counters remain stored.
  const bestCorrectAnswers = achievedNewBest
    ? result.correctAnswers
    : undefined;
  const bestTotalQuestions = achievedNewBest
    ? result.totalQuestions
    : undefined;

  const { error } = await supabase
    .from("lesson_progress")
    .update({
      score: bestScore,
      ...(bestCorrectAnswers !== undefined && {
        correct_answers: bestCorrectAnswers,
        total_questions: bestTotalQuestions,
      }),
      accuracy: bestAccuracy,
      stars: bestStars,
      badge: bestBadge,

      xp_earned: replayXP,

      completed_at: new Date().toISOString(),
      last_review: new Date().toISOString(),
    })
    .eq("id", progress.id);

  if (error) {
    throw error;
  }

  return replayXP;
}

// ------------------------------------
// Main save function
// ------------------------------------

export async function savePracticeResult(
  result: SavePracticeResult,
): Promise<number> {
  return (await savePracticeResultWithXp(result)).newXp;
}

// Same save; also says how much this attempt earned (a replay earns less).
export async function savePracticeResultWithXp(
  result: SavePracticeResult,
): Promise<{ newXp: number; xpEarned: number }> {
  // Review mode saves nothing (constant/devFlags.ts).
  if (REVIEW_MODE) return { newXp: 0, xpEarned: 0 };

  const user = await getCurrentUser();

  const existingProgress = await getLessonProgress(user.id, result.lessonId);

  let xpToAdd: number;

  if (!existingProgress) {
    xpToAdd = await insertLessonProgress(user.id, result);
  } else {
    xpToAdd = await updateLessonProgress(existingProgress, result);
  }

  // Record every completed practice attempt. The history row and the
  // profile XP don't depend on each other, so save them at the same time.
  const [{ error: historyError }, newXp] = await Promise.all([
    supabase.from("practice_history").insert({
      user_id: user.id,
      lesson_id: result.lessonId,

      score: result.score,
      correct_answers: result.correctAnswers,
      total_questions: result.totalQuestions,
      accuracy: result.accuracy,

      xp_earned: xpToAdd,
      stars: result.stars,
      badge: result.badge,

      played_at: new Date().toISOString(),
    }),
    addProfileXP(user.id, xpToAdd),
  ]);

  if (historyError) {
    throw historyError;
  }

  return { newXp, xpEarned: xpToAdd };
}

// ------------------------------------
// Leaderboard score with the win-streak bonus
// ------------------------------------
// After a won game, keeps the lesson's best leaderboard score: the game
// score plus 10% per win in the streak (utils/lessonCompletion.ts
// scoreWithStreakBonus). Saved once, so it stays if the streak later
// breaks. Needs lesson_progress.leaderboard_score
// (sql/lesson_completions.sql); returns null on any error.
export async function saveLeaderboardBonus(
  userId: string,
  lessonId: string,
  score: number,
  streak: number,
): Promise<number | null> {
  // Review mode saves nothing (constant/devFlags.ts).
  if (REVIEW_MODE) return null;

  try {
    const { data: row, error } = await supabase
      .from("lesson_progress")
      .select("id, score, leaderboard_score")
      .eq("user_id", userId)
      .eq("lesson_id", lessonId)
      .maybeSingle();
    if (error) throw error;
    if (!row) return null;

    const bonusScore = scoreWithStreakBonus(score, streak);
    const best = Math.max(row.leaderboard_score ?? 0, row.score ?? 0);
    if (bonusScore > best) {
      const { error: updateError } = await supabase
        .from("lesson_progress")
        .update({ leaderboard_score: bonusScore })
        .eq("id", row.id);
      if (updateError) throw updateError;
    }
    return bonusScore;
  } catch (error) {
    console.warn("Unable to save the streak bonus score:", error);
    return null;
  }
}
