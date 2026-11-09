import { FaceDetectionProvider } from "@infinitered/react-native-mlkit-face-detection";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, usePathname, useRouter } from "expo-router";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { supabase } from "../services/supabase";

// Older versions saved the last screen here to reopen it on launch.
const OLD_LAST_ROUTE_KEY = "@bigkas_last_route";

// Screens a cold start is allowed to stay on (the sign-in flow). Any other
// screen sends a signed-in user to the Dashboard.
const SIGNED_OUT_ROUTES = [
  "/",
  "/login",
  "/create-account",
  "/forgot-password",
  "/otp-verify",
  "/reset-password",
  "/intro-slides",
  "/privacy",
];

// Runs once when the app starts fresh, e.g. after it was swiped away from the
// recent apps. Signed in: open the Dashboard (it sends new users on to the
// tutorial). Signed out: open the start screen. The last screen is never
// reopened, so a learner doesn't land back in the middle of a lesson.
function StartupRoute() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    let cancelled = false;

    async function routeOnLaunch() {
      AsyncStorage.removeItem(OLD_LAST_ROUTE_KEY).catch(() => {});

      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();
        if (error) throw error;
        if (cancelled) return;

        if (session) {
          if (pathname !== "/dashboard") router.replace("/dashboard" as any);
        } else if (!SIGNED_OUT_ROUTES.includes(pathname)) {
          router.replace("/" as any);
        }
      } catch (error) {
        console.error("Failed to check the session on launch:", error);
      }
    }

    routeOnLaunch();

    return () => {
      cancelled = true;
    };
    // Only on launch: later navigation is left alone.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

export default function RootLayout() {
  return (
    // Gesture-handler gestures (e.g. the Story screen's dialect swipe) only
    // work inside this root view.
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FaceDetectionProvider>
        <StartupRoute />

        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen
            name="create-account"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="forgot-password"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="otp-verify" options={{ headerShown: false }} />
          <Stack.Screen name="dashboard" options={{ headerShown: false }} />
          <Stack.Screen name="leaderboard" options={{ headerShown: false }} />
          <Stack.Screen name="intro-slides" options={{ headerShown: false }} />
          <Stack.Screen name="user-profile" options={{ headerShown: false }} />
          <Stack.Screen name="users/[id]" options={{ headerShown: false }} />
          <Stack.Screen
            name="reset-password"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="lessons" options={{ headerShown: false }} />
          <Stack.Screen name="story" options={{ headerShown: false }} />
          <Stack.Screen name="tutorial" options={{ headerShown: false }} />
          <Stack.Screen name="lesson" options={{ headerShown: false }} />
          <Stack.Screen name="game-history" options={{ headerShown: false }} />
          <Stack.Screen name="profile" options={{ headerShown: false }} />
          <Stack.Screen
            name="lesson-history"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="report" options={{ headerShown: false }} />
          <Stack.Screen
            name="level-unlocked"
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="story-chapters/[storyId]"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="story/[chapterId]"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="notifications" options={{ headerShown: false }} />
          <Stack.Screen name="privacy" options={{ headerShown: false }} />
          {/* Dev-only (app/fer-data.tsx redirects in release builds). */}
          <Stack.Screen
            name="fer-data"
            options={{ headerShown: true, title: "FER data (dev)" }}
          />
          <Stack.Screen name="fer-collect" options={{ headerShown: false }} />
          <Stack.Screen
            name="report-thread/[id]"
            options={{ headerShown: false }}
          />
        </Stack>
      </FaceDetectionProvider>
    </GestureHandlerRootView>
  );
}
