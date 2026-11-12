// Lesson levels (tiers) per language: Easy = lessons 1–10, Intermediate
// = 11–20, Hard = 21–30 (the lesson documents number lessons "N of 30"
// and call 1–10 the Beginner level).
//
// Rules (also enforced on the server, sql/lesson_tiers.sql):
// - Easy is always open.
// - A level opens only when every lesson of the level before it is
//   complete, in the same language.
// - Inside an open level, its first lesson is open and lesson N+1 opens
//   once lesson N is complete.
// Progress is per lesson id ("tagalog_12"), so each language is separate.
//
// No imports: the tests run this file directly with node.

export type TierKey = "easy" | "intermediate" | "hard";

export const LESSONS_PER_TIER = 10;

export const TIERS: { key: TierKey; name: string; bars: 1 | 2 | 3 }[] = [
  { key: "easy", name: "Easy", bars: 1 },
  { key: "intermediate", name: "Intermediate", bars: 2 },
  { key: "hard", name: "Hard", bars: 3 },
];

export const TIER_LANGUAGES = ["tagalog", "kapampangan", "waray"] as const;
export type TierLanguage = (typeof TIER_LANGUAGES)[number];

// "kapampangan_12" → { language: "kapampangan", number: 12 }; null for
// ids that aren't board lessons (e.g. story lessons).
export function parseLessonId(
  lessonId: string,
): { language: TierLanguage; number: number } | null {
  const match = lessonId.match(/^(tagalog|kapampangan|waray)_(\d+)$/);
  if (!match) return null;
  const number = Number(match[2]);
  if (!Number.isInteger(number) || number < 1) return null;
  return { language: match[1] as TierLanguage, number };
}

// 0 = Easy, 1 = Intermediate, 2 = Hard.
export function tierIndexForNumber(lessonNumber: number): number {
  return Math.floor((lessonNumber - 1) / LESSONS_PER_TIER);
}

// The 10 lesson ids of a level, in order.
export function tierLessonIds(
  language: TierLanguage,
  tierIndex: number,
): string[] {
  const first = tierIndex * LESSONS_PER_TIER + 1;
  return Array.from(
    { length: LESSONS_PER_TIER },
    (_, offset) => `${language}_${first + offset}`,
  );
}

export function countCompleteInTier(
  language: TierLanguage,
  tierIndex: number,
  isComplete: (lessonId: string) => boolean,
): number {
  return tierLessonIds(language, tierIndex).filter(isComplete).length;
}

export function isTierUnlocked(
  language: TierLanguage,
  tierIndex: number,
  isComplete: (lessonId: string) => boolean,
): boolean {
  if (tierIndex <= 0) return true;
  if (tierIndex >= TIERS.length) return false;
  return (
    countCompleteInTier(language, tierIndex - 1, isComplete) ===
    LESSONS_PER_TIER
  );
}

// Whether a board lesson may be opened. Ids that aren't board lessons are
// never locked here.
export function isTieredLessonUnlocked(
  lessonId: string,
  isComplete: (lessonId: string) => boolean,
): boolean {
  const parsed = parseLessonId(lessonId);
  if (!parsed) return true;
  const tierIndex = tierIndexForNumber(parsed.number);
  if (!isTierUnlocked(parsed.language, tierIndex, isComplete)) return false;
  const firstInTier = tierIndex * LESSONS_PER_TIER + 1;
  if (parsed.number === firstInTier) return true;
  return isComplete(`${parsed.language}_${parsed.number - 1}`);
}

// The highest open level: where a learner who finished Easy continues.
export function currentTierIndex(
  language: TierLanguage,
  isComplete: (lessonId: string) => boolean,
): number {
  let tier = 0;
  while (
    tier + 1 < TIERS.length &&
    isTierUnlocked(language, tier + 1, isComplete)
  ) {
    tier += 1;
  }
  return tier;
}

// Retry rules per level.
// - In the lesson: the "Try again" buttons (and fixing a wrong answer) are
//   Easy only. In Intermediate and Hard a wrong answer shows the right one
//   and the learner moves on.
// - Results screen after a failed assessment or practice game: Easy and
//   Intermediate can replay it straight away; Hard goes back to the first
//   part of the lesson ("Restart lesson") to review everything first.
export type RetryRules = {
  inLessonRetry: boolean;
  onFailure: "replay" | "restart-lesson";
};

export function retryRulesForTier(tierIndex: number): RetryRules {
  return {
    inLessonRetry: tierIndex <= 0,
    onFailure: tierIndex >= 2 ? "restart-lesson" : "replay",
  };
}

// By lesson number (1–10 Easy, 11–20 Intermediate, 21–30 Hard).
export function retryRulesForLessonNumber(lessonNumber: number): RetryRules {
  return retryRulesForTier(tierIndexForNumber(lessonNumber));
}

// By lesson id ("waray_23"); ids that aren't board lessons use Easy's rules.
export function retryRulesForLessonId(lessonId: string | null | undefined): RetryRules {
  const parsed = lessonId ? parseLessonId(lessonId) : null;
  return retryRulesForTier(parsed ? tierIndexForNumber(parsed.number) : 0);
}
