import type { SupabaseClient } from "@supabase/supabase-js";

export type TutorialUser = {
  id: string;
  email?: string | null;
  user_metadata?: Record<string, unknown> | null;
};

// Same values the sign-up trigger saves (sql/new_account_profile_fix.sql), for
// an account that reached the tutorial without a profile row.
function profileRowFor(user: TutorialUser) {
  const metadata = user.user_metadata ?? {};
  const text = (value: unknown) => (typeof value === "string" ? value : null);

  return {
    id: user.id,
    email: user.email ?? null,
    display_name: text(metadata.display_name) ?? "",
    privacy_accepted_at: text(metadata.privacy_accepted_at),
    privacy_version: text(metadata.privacy_version),
    age_confirmed: metadata.age_confirmed === true,
  };
}

// Creates the user's profile row if it doesn't exist. An existing row, and
// whatever progress it holds, is left alone.
export async function ensureProfileRow(
  client: SupabaseClient,
  user: TutorialUser,
): Promise<void> {
  const { data: existing, error: readError } = await client
    .from("profiles")
    .select("id")
    .eq("id", user.id)
    .maybeSingle();

  if (readError) throw readError;
  if (existing) return;

  const { error: insertError } = await client
    .from("profiles")
    .insert(profileRowFor(user));

  if (insertError) throw insertError;
}

// Saves tutorial completion and returns only once the saved value has been read
// back. Throws otherwise, because an update that matches no rows is not an
// error to Supabase: a missing profile row or an RLS block both look like
// success, and the dashboard would then send the user back to step 1.
export async function saveTutorialCompleted(
  client: SupabaseClient,
  user: TutorialUser,
): Promise<void> {
  const { data: updatedRows, error: updateError } = await client
    .from("profiles")
    .update({ tutorial_completed: true })
    .eq("id", user.id)
    .select("id");

  if (updateError) throw updateError;

  if (!updatedRows || updatedRows.length === 0) {
    const { error: insertError } = await client
      .from("profiles")
      .insert({ ...profileRowFor(user), tutorial_completed: true });

    if (insertError?.code === "23505") {
      throw new Error("Your profile exists but could not be updated.");
    }
    if (insertError) throw insertError;
  }

  const { data: saved, error: readError } = await client
    .from("profiles")
    .select("tutorial_completed")
    .eq("id", user.id)
    .maybeSingle();

  if (readError) throw readError;
  if (saved?.tutorial_completed !== true) {
    throw new Error("Your tutorial progress did not save.");
  }
}
