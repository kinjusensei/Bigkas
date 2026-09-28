// =========================================================
// IMPORT PATH WARNING: I don't know your actual Supabase client's
// export name/path (practiceService.ts presumably imports it from
// somewhere like "./supabase" or "../lib/supabase"). Fix this import
// to match whatever practiceService.ts uses at the top of that file.
// =========================================================
import { supabase } from "./supabase";

export type PretestResult = {
  score: number;
  totalQuestions: number;
  passed: boolean;
};

/**
 * Saves (upserts) a user's pretest result for a lesson — one current
 * row per (user, lesson), same pattern as lesson_progress. Call this
 * once, at the point pretest.tsx currently just displays the final
 * score.
 */
export async function savePretestResult(
  lessonId: string,
  score: number,
  totalQuestions: number,
  passingScore: number,
): Promise<void> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("No authenticated user — cannot save pretest result.");
  }

  const passed = score >= passingScore;

  const { error } = await supabase.from("pretest_progress").upsert(
    {
      user_id: user.id,
      lesson_id: lessonId,
      score,
      total_questions: totalQuestions,
      passed,
      completed_at: new Date().toISOString(),
    },
    { onConflict: "user_id,lesson_id" },
  );

  if (error) {
    throw error;
  }
}

/**
 * Fetches all of the current user's pretest results in one query, keyed
 * by lesson_id — same shape/purpose as getAllLessonProgress in
 * practiceService.ts, built for the same kind of locking check.
 */
export async function getAllPretestProgress(): Promise<
  Record<string, PretestResult>
> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {};
  }

  const { data, error } = await supabase
    .from("pretest_progress")
    .select("lesson_id, score, total_questions, passed")
    .eq("user_id", user.id);

  if (error) {
    throw error;
  }

  const map: Record<string, PretestResult> = {};
  (data ?? []).forEach((row) => {
    map[row.lesson_id] = {
      score: row.score,
      totalQuestions: row.total_questions,
      passed: row.passed,
    };
  });

  return map;
}
