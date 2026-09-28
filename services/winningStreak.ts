import { supabase } from "./supabase";

export async function updateWinningStreak(userId: string, won: boolean) {
  const { data: existing, error: fetchError } = await supabase
    .from("winning_streaks")
    .select("current_streak, longest_streak")
    .eq("user_id", userId)
    .maybeSingle();

  if (fetchError) {
    console.error("🏆 Winning streak fetch error:", fetchError);
    return null;
  }

  const currentStreak = existing?.current_streak ?? 0;
  const longestStreak = existing?.longest_streak ?? 0;

  const newStreak = won ? currentStreak + 1 : 0;

  const newLongest = Math.max(longestStreak, newStreak);

  const { data, error } = await supabase
    .from("winning_streaks")
    .upsert({
      user_id: userId,
      current_streak: newStreak,
      longest_streak: newLongest,
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
