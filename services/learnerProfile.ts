import { supabase } from "./supabase";

// Fills profiles.active_dialect and profiles.studying_dialects, which the
// admin website reads (Learning Analytics: Learners by Dialect).
// - active_dialect: the language the learner last picked or studied
//   ("tagalog" | "kapampangan" | "waray", the format useActiveDialect reads).
// - studying_dialects: every language they've finished a lesson or story
//   chapter in, comma-separated and sorted, e.g. "kapampangan,tagalog".
// Never throws: a profile problem must not block learning.

export type LearnerDialect = "tagalog" | "kapampangan" | "waray";
const DIALECTS: LearnerDialect[] = ["tagalog", "kapampangan", "waray"];

// tagalog_3, story_waray_5, story_kapampangan_oldhouse_2 → the language.
export function dialectOfLessonId(lessonId: string): LearnerDialect | null {
  const match = lessonId.match(/^(?:story_)?(tagalog|kapampangan|waray)_/);
  return (match?.[1] as LearnerDialect | undefined) ?? null;
}

export function toLearnerDialect(value: string | null | undefined) {
  const lower = (value ?? "").toLowerCase().trim();
  return (DIALECTS as string[]).includes(lower) ? (lower as LearnerDialect) : null;
}

export function addStudiedDialect(
  saved: string | null | undefined,
  dialect: LearnerDialect,
): string {
  const set = new Set(
    (saved ?? "")
      .split(",")
      .map((item) => toLearnerDialect(item))
      .filter((item): item is LearnerDialect => item !== null),
  );
  set.add(dialect);
  return DIALECTS.filter((item) => set.has(item)).join(",");
}

async function currentUserId(): Promise<string | null> {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return session?.user?.id ?? null;
}

let lastSavedActive: string | null = null;

// The learner switched language (e.g. the Dashboard's language cards).
export async function saveActiveDialect(dialect: LearnerDialect): Promise<void> {
  try {
    const userId = await currentUserId();
    if (!userId || lastSavedActive === `${userId}:${dialect}`) return;
    const { error } = await supabase
      .from("profiles")
      .update({ active_dialect: dialect })
      .eq("id", userId);
    if (error) throw error;
    lastSavedActive = `${userId}:${dialect}`;
  } catch (error: any) {
    console.log("Active language not saved:", error?.message ?? error);
  }
}

// A lesson or story chapter in this language was finished.
export async function noteStudiedDialect(
  userId: string,
  lessonIdOrDialect: string,
): Promise<void> {
  try {
    const dialect =
      toLearnerDialect(lessonIdOrDialect) ?? dialectOfLessonId(lessonIdOrDialect);
    if (!dialect) return;
    const { data, error: readError } = await supabase
      .from("profiles")
      .select("studying_dialects")
      .eq("id", userId)
      .maybeSingle();
    if (readError) throw readError;
    const { error } = await supabase
      .from("profiles")
      .update({
        active_dialect: dialect,
        studying_dialects: addStudiedDialect(data?.studying_dialects, dialect),
      })
      .eq("id", userId);
    if (error) throw error;
    lastSavedActive = `${userId}:${dialect}`;
  } catch (error: any) {
    console.log("Studied language not saved:", error?.message ?? error);
  }
}
