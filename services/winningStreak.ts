import { REVIEW_MODE } from "../constant/devFlags";
import { localDateString, nextWinStreak } from "../utils/lessonCompletion";
import { supabase } from "./supabase";

// Win streak (utils/lessonCompletion.ts nextWinStreak): +1 for every win,
// back to 0 on a loss. Returns the saved row, or null on an error.
export async function updateWinningStreak(userId: string, won: boolean) {
  // Review mode saves nothing (constant/devFlags.ts).
  if (REVIEW_MODE) return null;

  const { data: existing, error: fetchError } = await supabase
    .from("winning_streaks")
    .select("current_streak, longest_streak, last_win_date")
    .eq("user_id", userId)
    .maybeSingle();

  if (fetchError) {
    console.error("🏆 Winning streak fetch error:", fetchError);
    return null;
  }

  const updated = nextWinStreak(
    {
      current: existing?.current_streak ?? 0,
      longest: existing?.longest_streak ?? 0,
      lastDate: existing?.last_win_date ?? null,
    },
    won,
    localDateString(new Date()),
  );

  const { data, error } = await supabase
    .from("winning_streaks")
    .upsert({
      user_id: userId,
      current_streak: updated.current,
      longest_streak: updated.longest,
      last_win_date: updated.lastDate,
      updated_at: new Date().toISOString(),
    })
    .select()
    .single();

  if (error) {
    console.error("🏆 Winning streak update error:", error);
    return null;
  }

  return data;
}
