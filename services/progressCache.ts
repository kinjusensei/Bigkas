// The learner's progress (lesson practice, pretests, structured lesson
// completions), kept in memory so Home, Lessons and Story open straight away
// instead of downloading everything again on each switch. hooks/useStoryProgress.ts
// still refreshes it in the background every time a screen comes into view.
//
// Every save that changes progress calls invalidateProgress(), so the next
// screen waits for fresh data instead of showing an old lock state.

import { supabase } from "./supabase";

let version = 0;
let cached: unknown = null;

export function invalidateProgress(): void {
  version += 1;
  cached = null;
}

export function progressVersion(): number {
  return version;
}

export function getCachedProgress<T>(): T | null {
  return cached as T | null;
}

// Keeps a result only if nothing was saved while it was loading.
export function setCachedProgress<T>(value: T, loadedAtVersion: number): void {
  if (loadedAtVersion === version) cached = value;
}

// Signing out or into another account starts empty, so one account never
// sees another's progress.
supabase.auth.onAuthStateChange((event) => {
  if (event === "SIGNED_OUT" || event === "SIGNED_IN" || event === "USER_UPDATED") {
    invalidateProgress();
  }
});
