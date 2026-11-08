import { REVIEW_MODE } from "../constant/devFlags";
import {
  DailyStreakRow,
  nextDailyStreak,
  streakToShow,
} from "../utils/dailyStreak";
import { supabase } from "./supabase";

// Day streak (daily_streaks). Rules: utils/dailyStreak.ts.
// - getDailyStreak: read only, for the Dashboard and Profile.
// - recordDailyActivity: called when a lesson or story is finished
//   (services/practiceService.ts, services/lessonCompletionService.ts).

export type DailyStreak = {
  current_streak: number;
  longest_streak: number;
  last_activity: string | null;
};

async function fetchRow(userId: string): Promise<DailyStreakRow | null> {
  const { data, error } = await supabase
    .from("daily_streaks")
    .select("current_streak, longest_streak, last_activity")
    .eq("user_id", userId)
    .maybeSingle();
  if (error) throw error;
  return data;
}

// The streak to show now: 0 once a whole day was missed.
export async function getDailyStreak(userId: string): Promise<number> {
  try {
    return streakToShow(await fetchRow(userId), new Date());
  } catch (error: any) {
    console.log("🔥 Streak fetch error:", error?.message ?? error);
    return 0;
  }
}

// Counts today for the streak. Safe to call after every lesson or story:
// only the first one each day changes it. Never throws, so a streak
// problem can't block saving a result.
export async function recordDailyActivity(
  userId: string,
): Promise<DailyStreak | null> {
  // Review mode saves nothing (constant/devFlags.ts).
  if (REVIEW_MODE) return null;

  try {
    const existing = await fetchRow(userId);
    const now = new Date();
    const next = nextDailyStreak(existing, now);

    if (!next.changed && existing) {
      return {
        current_streak: next.current,
        longest_streak: next.longest,
        last_activity: existing.last_activity,
      };
    }

    const values = {
      current_streak: next.current,
      longest_streak: next.longest,
      last_activity: now.toISOString(),
    };

    const query = existing
      ? supabase.from("daily_streaks").update(values).eq("user_id", userId)
      : supabase.from("daily_streaks").insert({ ...values, user_id: userId });

    const { data, error } = await query
      .select("current_streak, longest_streak, last_activity")
      .single();
    if (error) throw error;
    return data;
  } catch (error: any) {
    console.log("🔥 Streak update error:", error?.message ?? error);
    return null;
  }
}
