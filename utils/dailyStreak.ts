// Day streak rules. The streak goes up on the first lesson or story the
// learner finishes each day (services/streak.ts records it). Just opening
// the app doesn't count.
//
// Dates are the phone's local calendar day, "YYYY-MM-DD".
// No imports: the tests run this file directly with node.

export type DailyStreakRow = {
  current_streak: number | null;
  longest_streak: number | null;
  last_activity: string | null;
};

export function localDay(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function dayBefore(date: Date): string {
  const yesterday = new Date(date);
  yesterday.setDate(yesterday.getDate() - 1);
  return localDay(yesterday);
}

// The streak to show. Played today or yesterday: still alive. Missed a
// whole day: 0, even though the saved number only resets on the next play.
export function streakToShow(row: DailyStreakRow | null, now: Date): number {
  if (!row?.last_activity) return 0;
  const last = localDay(new Date(row.last_activity));
  if (last === localDay(now) || last === dayBefore(now)) {
    return row.current_streak ?? 0;
  }
  return 0;
}

// The streak after finishing a lesson or story now. changed is false when
// today was already counted.
export function nextDailyStreak(
  row: DailyStreakRow | null,
  now: Date,
): { current: number; longest: number; changed: boolean } {
  const current = row?.current_streak ?? 0;
  const longest = row?.longest_streak ?? 0;
  const last = row?.last_activity
    ? localDay(new Date(row.last_activity))
    : null;

  if (last === localDay(now)) {
    return { current: Math.max(current, 1), longest: Math.max(longest, current, 1), changed: false };
  }
  const next = last === dayBefore(now) ? current + 1 : 1;
  return { current: next, longest: Math.max(longest, next), changed: true };
}
