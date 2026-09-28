import {
  MAX_LEVEL,
  REPLAY_XP_PERCENTAGE,
  XP_PER_LEVEL,
} from "../constant/gameConstants";
import { supabase } from "./supabase";

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

async function getCurrentUser() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

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

  const bestBadge =
    result.score > progress.score ? result.badge : progress.badge;

  const { error } = await supabase
    .from("lesson_progress")
    .update({
      score: bestScore,
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
  const user = await getCurrentUser();

  const existingProgress = await getLessonProgress(user.id, result.lessonId);

  let xpToAdd: number;

  if (!existingProgress) {
    xpToAdd = await insertLessonProgress(user.id, result);
  } else {
    xpToAdd = await updateLessonProgress(existingProgress, result);
  }

  // Record every completed practice attempt
  const { error: historyError } = await supabase
    .from("practice_history")
    .insert({
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
    });

  if (historyError) {
    throw historyError;
  }

  return await addProfileXP(user.id, xpToAdd);
}
