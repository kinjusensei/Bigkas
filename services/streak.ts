import { supabase } from "./supabase";

export type DailyStreak = {
  current_streak: number;
  longest_streak: number;
  last_activity: string | null;
};

function getLocalDateString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getYesterdayDateString(date: Date): string {
  const yesterday = new Date(date);

  yesterday.setDate(yesterday.getDate() - 1);

  return getLocalDateString(yesterday);
}

export async function updateDailyStreak(
  userId: string,
): Promise<DailyStreak | null> {
  try {
    const { data: existingStreak, error: fetchError } = await supabase
      .from("daily_streaks")
      .select("current_streak, longest_streak, last_activity")
      .eq("user_id", userId)
      .maybeSingle();

    if (fetchError) {
      console.log("🔥 Streak fetch error:", fetchError.message);
      return null;
    }

    const now = new Date();
    const today = getLocalDateString(now);
    const yesterday = getYesterdayDateString(now);

    // First login / no streak record yet.
    if (!existingStreak) {
      const newStreak = {
        current_streak: 1,
        longest_streak: 1,
        last_activity: now.toISOString(),
        user_id: userId,
      };

      const { data, error } = await supabase
        .from("daily_streaks")
        .insert(newStreak)
        .select("current_streak, longest_streak, last_activity")
        .single();

      if (error) {
        console.log("🔥 Streak insert error:", error.message);
        return null;
      }

      return data;
    }

    const lastActivity = existingStreak.last_activity;

    if (!lastActivity) {
      const { data, error } = await supabase
        .from("daily_streaks")
        .update({
          current_streak: 1,
          longest_streak: Math.max(existingStreak.longest_streak ?? 0, 1),
          last_activity: now.toISOString(),
        })
        .eq("user_id", userId)
        .select("current_streak, longest_streak, last_activity")
        .single();

      if (error) {
        console.log("🔥 Streak reset error:", error.message);
        return null;
      }

      return data;
    }

    const lastActivityDate = getLocalDateString(new Date(lastActivity));

    // Already logged in today.
    if (lastActivityDate === today) {
      return {
        current_streak: existingStreak.current_streak ?? 1,
        longest_streak: existingStreak.longest_streak ?? 1,
        last_activity: existingStreak.last_activity,
      };
    }

    let newCurrentStreak: number;

    // Logged in yesterday → continue streak.
    if (lastActivityDate === yesterday) {
      newCurrentStreak = (existingStreak.current_streak ?? 0) + 1;
    } else {
      // Missed at least one day → restart.
      newCurrentStreak = 1;
    }

    const newLongestStreak = Math.max(
      existingStreak.longest_streak ?? 0,
      newCurrentStreak,
    );

    const { data, error } = await supabase
      .from("daily_streaks")
      .update({
        current_streak: newCurrentStreak,
        longest_streak: newLongestStreak,
        last_activity: now.toISOString(),
      })
      .eq("user_id", userId)
      .select("current_streak, longest_streak, last_activity")
      .single();

    if (error) {
      console.log("🔥 Streak update error:", error.message);
      return null;
    }

    return data;
  } catch (error: any) {
    console.log("🔥 Streak error:", error?.message ?? error);

    return null;
  }
}
