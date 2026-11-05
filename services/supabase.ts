import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import * as Linking from "expo-linking";
import { AppState, Platform } from "react-native";

const SUPABASE_URL = "https://oxqanjedmcjwlevvbjnc.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_SzK1UUsO9raG5UPLTOyO_w_IbMveRao";

// Where confirmation emails send the user back to (app/auth-callback.tsx).
// bigkas://auth-callback in an installed build. Must be allowed in Supabase ->
// Authentication -> URL Configuration -> Redirect URLs.
export const AUTH_REDIRECT_URL = Linking.createURL("auth-callback");

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

function isJwtIssuedAtFuture(error: unknown): boolean {
  if (!error || typeof error !== "object") {
    return false;
  }

  const candidate = error as { code?: unknown; message?: unknown };
  return (
    candidate.code === "PGRST303" &&
    candidate.message === "JWT issued at future"
  );
}

// A hosted PostgREST validator can briefly lag the Auth service that issued
// a fresh token. Refresh the session, then retry only this specific validation
// response; all other errors still fail immediately and JWT validation remains
// enabled.
export async function retryOnJwtIssuedAtFuture<T>(
  operation: () => Promise<T>,
): Promise<T> {
  try {
    return await operation();
  } catch (error) {
    if (!isJwtIssuedAtFuture(error)) {
      throw error;
    }

    const { error: refreshError } = await supabase.auth.refreshSession();
    if (refreshError) {
      console.warn(
        "Supabase session refresh failed while recovering from JWT clock skew:",
        refreshError,
      );
    }

    await new Promise((resolve) => setTimeout(resolve, 1500));
    return operation();
  }
}

// React Native can suspend JavaScript while the app is backgrounded. Keep
// Supabase's refresh loop aligned with the app lifecycle so a stale session
// is refreshed as soon as the app returns to the foreground.
if (Platform.OS !== "web") {
  AppState.addEventListener("change", (state) => {
    if (state === "active") {
      supabase.auth.startAutoRefresh();
    } else {
      supabase.auth.stopAutoRefresh();
    }
  });
}
