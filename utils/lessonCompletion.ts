// Pure lesson-completion rules: XP once per activity, best score, unlock,
// level, the win streak and its leaderboard bonus. No imports, so the
// unit tests in lessonCompletion.test.ts run with plain `node --test`.

export type CompletionActivity =
  | "vocabulary"
  | "conversation"
  | "match"
  | "sentences"
  | "speaking"
  | "assessment";

// Activities a learner must have done (besides passing the assessment)
// for the next lesson to unlock.
export const REQUIRED_ACTIVITIES: CompletionActivity[] = [
  "vocabulary",
  "conversation",
  "match",
  "sentences",
  "speaking",
];

export type CompletionRecord = {
  bestScore: number; // percent, 0–100
  passed: boolean; // never goes back to false
  activities: string[]; // done at least once
  xpAwarded: string[]; // activities whose XP was already added
  completedAt: string | null; // first time the lesson was completed
};

export type CompletionAttempt = {
  scorePercent: number;
  passPercent: number;
  // Activities done in this run of the lesson.
  activitiesDone: string[];
  // Activities that earned XP in this run (e.g. speaking only with a
  // recording). "assessment" XP is only given when this attempt passed.
  xpEligible: string[];
  rewards: Record<string, number>;
  // Activities required for completion; defaults to REQUIRED_ACTIVITIES
  // limited to the ones the lesson actually has.
  required?: string[];
  nowIso: string;
};

export type CompletionResult = {
  record: CompletionRecord;
  xpToAdd: number;
  newlyAwarded: string[];
  passedThisAttempt: boolean;
  lessonComplete: boolean;
  justCompleted: boolean; // complete now, wasn't before
};

const unique = (values: string[]) => [...new Set(values)];

export function isRecordComplete(
  record: CompletionRecord | null | undefined,
  required: string[] = REQUIRED_ACTIVITIES,
): boolean {
  if (!record?.passed) return false;
  return required.every((activity) => record.activities.includes(activity));
}

export function mergeCompletion(
  previous: CompletionRecord | null | undefined,
  attempt: CompletionAttempt,
): CompletionResult {
  const before: CompletionRecord = previous ?? {
    bestScore: 0,
    passed: false,
    activities: [],
    xpAwarded: [],
    completedAt: null,
  };
  const required = attempt.required ?? REQUIRED_ACTIVITIES;
  const passedThisAttempt = attempt.scorePercent >= attempt.passPercent;

  const eligible = attempt.xpEligible.filter(
    (activity) => activity !== "assessment" || passedThisAttempt,
  );
  const newlyAwarded = unique(eligible).filter(
    (activity) =>
      !before.xpAwarded.includes(activity) &&
      (attempt.rewards[activity] ?? 0) > 0,
  );
  const xpToAdd = newlyAwarded.reduce(
    (sum, activity) => sum + (attempt.rewards[activity] ?? 0),
    0,
  );

  const activities = unique([
    ...before.activities,
    ...attempt.activitiesDone,
    ...(passedThisAttempt ? ["assessment"] : []),
  ]);
  const passed = before.passed || passedThisAttempt;
  const wasComplete = isRecordComplete(before, required);
  const draft: CompletionRecord = {
    bestScore: Math.max(before.bestScore, attempt.scorePercent),
    passed,
    activities,
    xpAwarded: unique([...before.xpAwarded, ...newlyAwarded]),
    completedAt: before.completedAt,
  };
  const lessonComplete = isRecordComplete(draft, required);
  if (lessonComplete && !draft.completedAt) draft.completedAt = attempt.nowIso;

  return {
    record: draft,
    xpToAdd,
    newlyAwarded,
    passedThisAttempt,
    lessonComplete,
    justCompleted: lessonComplete && !wasComplete,
  };
}

// Lesson N+1 is open when lesson N is complete. Lesson 1 is always open,
// and nothing is open past the last lesson that exists.
export function isLessonUnlocked(
  index: number,
  lessonCount: number,
  isComplete: (index: number) => boolean,
): boolean {
  if (index < 0 || index >= lessonCount) return false;
  if (index === 0) return true;
  return isComplete(index - 1);
}

// Same formula as constant/gameConstants.ts (100 XP per level, max 100).
export const XP_PER_LEVEL = 100;
export const MAX_LEVEL = 100;

export function levelForXp(
  xp: number,
  perLevel = XP_PER_LEVEL,
  maxLevel = MAX_LEVEL,
): number {
  return Math.min(Math.floor(Math.max(0, xp) / perLevel) + 1, maxLevel);
}

export function levelProgress(xp: number, perLevel = XP_PER_LEVEL) {
  const level = levelForXp(xp, perLevel);
  const levelStart = (level - 1) * perLevel;
  const intoLevel = Math.max(0, xp - levelStart);
  return {
    level,
    intoLevel,
    perLevel,
    fraction: Math.min(1, intoLevel / perLevel),
  };
}

export type StreakState = {
  current: number;
  longest: number;
  lastDate: string | null; // local "YYYY-MM-DD"
};

export function localDateString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// Win streak: +1 for every win (a practice game won, or a lesson
// assessment passed), back to 0 on a loss. `lastDate` is the day of the
// last win, for information only.
export function nextWinStreak(
  previous: StreakState | null | undefined,
  won: boolean,
  today: string,
): StreakState {
  const current = won ? (previous?.current ?? 0) + 1 : 0;
  return {
    current,
    longest: Math.max(previous?.longest ?? 0, current),
    lastDate: won ? today : (previous?.lastDate ?? null),
  };
}

// Surrendering a lesson breaks the win streak: back to 0, like a loss.
// The longest streak and the day of the last win are kept.
export function breakWinStreak(
  previous: StreakState | null | undefined,
  today: string,
): StreakState {
  return nextWinStreak(previous, false, today);
}

// Each win in the current streak adds 10% to the score that goes on the
// leaderboard: a 3-win streak turns 80 into 80 + 30% = 104.
export const STREAK_BONUS_PER_WIN = 0.1;

export function streakBonusPercent(streak: number): number {
  return Math.round(Math.max(0, streak) * STREAK_BONUS_PER_WIN * 100);
}

export function scoreWithStreakBonus(score: number, streak: number): number {
  return Math.round(
    Math.max(0, score) * (1 + Math.max(0, streak) * STREAK_BONUS_PER_WIN),
  );
}
