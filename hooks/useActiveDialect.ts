import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";

import { StoryDialect } from "../data/storyData";
import { supabase } from "../services/supabase";

// Reads the user's currently-selected dialect from profiles.active_dialect.
// Story screens need this because chapter content is now shared across
// dialects (see data/storyData.ts) and resolved per-dialect at runtime.
//
// Falls back to "tagalog" if the column is empty, unrecognized, or the
// fetch fails — so the story screen always renders something rather
// than blanking out.

const VALID_DIALECTS: StoryDialect[] = ["tagalog", "kapampangan", "waray"];
const DEFAULT_DIALECT: StoryDialect = "tagalog";

function normalize(value: string | null | undefined): StoryDialect {
  if (!value) return DEFAULT_DIALECT;
  const lower = value.toLowerCase().trim();
  return (VALID_DIALECTS as string[]).includes(lower)
    ? (lower as StoryDialect)
    : DEFAULT_DIALECT;
}

export function useActiveDialect() {
  const [dialect, setDialect] = useState<StoryDialect>(DEFAULT_DIALECT);
  const [loading, setLoading] = useState(true);

  // Re-read on focus so switching dialects elsewhere (e.g. the dialect
  // carousel on the dashboard) is reflected when returning here.
  useFocusEffect(
    useCallback(() => {
      let cancelled = false;

      async function loadDialect() {
        setLoading(true);
        try {
          const {
            data: { user },
          } = await supabase.auth.getUser();

          if (!user) {
            if (!cancelled) setDialect(DEFAULT_DIALECT);
            return;
          }

          const { data, error } = await supabase
            .from("profiles")
            .select("active_dialect")
            .eq("id", user.id)
            .single();

          if (error) throw error;

          if (!cancelled) {
            setDialect(normalize(data?.active_dialect));
          }
        } catch (error) {
          console.error("Failed to load active dialect:", error);
          if (!cancelled) setDialect(DEFAULT_DIALECT);
        } finally {
          if (!cancelled) setLoading(false);
        }
      }

      loadDialect();

      return () => {
        cancelled = true;
      };
    }, []),
  );

  return { dialect, loading };
}
