import { REVIEW_MODE } from "../constant/devFlags";
import { supabase } from "./supabase";

// Records when a learner opens a lesson, so the admin Activity page can show
// the start next to the finish (needs sql/activity_logs_lesson_start.sql).

export type LessonStartKind = "lesson" | "pretest" | "practice";

const lessonName = (lessonId: string) =>
  lessonId.replace(/_/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());

const DESCRIPTIONS: Record<LessonStartKind, (name: string) => string> = {
  lesson: (name) => `Started ${name}`,
  pretest: (name) => `Started the pretest for ${name}`,
  practice: (name) => `Started practicing ${name}`,
};

// Best effort: a failed log must never get in the way of the lesson.
export async function logLessonStart(
  lessonId: string,
  kind: LessonStartKind,
): Promise<void> {
  // Review mode saves nothing (constant/devFlags.ts).
  if (REVIEW_MODE) return;

  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session?.user) return;

    const { error } = await supabase.from("activity_logs").insert({
      user_id: session.user.id,
      action: "lesson_start",
      description: DESCRIPTIONS[kind](lessonName(lessonId)),
    });
    if (error) throw error;
  } catch (error) {
    console.warn("Lesson start not logged:", error);
  }
}
