import { FaceDetectionProvider } from "@infinitered/react-native-mlkit-face-detection";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Linking from "expo-linking";
import {
  Stack,
  useGlobalSearchParams,
  usePathname,
  useRouter,
  useSegments,
} from "expo-router";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { supabase } from "../services/supabase";

const LAST_ROUTE_KEY = "@bigkas_last_route";

const RESTORABLE_ROUTES = [
  "/dashboard",
  "/leaderboard",
  "/user-profile",
  "/lessons",
  "/story",
  "/tutorial",
  "/lesson",
  "/lesson/practice",
  "/lesson/result",
  "/game-history",
  "/profile",
  "/lesson-history",
];

function isRestorableRoute(route: string) {
  const pathname = route.split("?")[0];
  return RESTORABLE_ROUTES.some(
    (restorable) =>
      pathname === restorable || pathname.startsWith(`${restorable}/`),
  );
}

function RoutePersistence() {
  const pathname = usePathname();
  const router = useRouter();
  const params = useGlobalSearchParams();
  const segments = useSegments();

  // The saved route keeps its query params (e.g. the Story reader's
  // ?dialect=kapampangan); without them a restored screen falls back to
  // defaults. Params that are part of the path ([chapterId]) are skipped.
  const pathParamNames = new Set(
    (segments as string[])
      .filter((segment) => segment.startsWith("[") && segment.endsWith("]"))
      .map((segment) => segment.replace(/^\[\.{0,3}|\]$/g, "")),
  );
  const query = Object.entries(params)
    .filter(([key, value]) => !pathParamNames.has(key) && value !== undefined)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`,
    )
    .join("&");
  const currentRoute = query ? `${pathname}?${query}` : pathname;

  const [restored, setRestored] = useState(false);
  const [pendingRestoreTarget, setPendingRestoreTarget] = useState<
    string | null
  >(null);

  useEffect(() => {
    let cancelled = false;

    async function restoreLastRoute() {
      // A confirmation link started the app. Leave it on its screen, which signs
      // the user in and moves on by itself. On Android the router resolves the
      // launch link after this first render, so check the link itself too.
      if (
        pathname === "/auth-callback" ||
        Linking.getLinkingURL()?.includes("://auth-callback")
      ) {
        setRestored(true);
        return;
      }

      try {
        const lastRoute = await AsyncStorage.getItem(LAST_ROUTE_KEY);

        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();

        if (error) {
          throw error;
        }

        if (cancelled) return;

        if (!session) {
          await AsyncStorage.removeItem(LAST_ROUTE_KEY);

          if (!cancelled) {
            if (pathname !== "/") {
              router.replace("/" as any);
            }
            setRestored(true);
          }
          return;
        }

        if (lastRoute && isRestorableRoute(lastRoute)) {
          if (lastRoute !== pathname) {
            setPendingRestoreTarget(lastRoute);
            router.replace(lastRoute as any);
          }
        } else {
          if (lastRoute) {
            await AsyncStorage.removeItem(LAST_ROUTE_KEY);
          }

          if (!cancelled) {
            setPendingRestoreTarget("/dashboard");
            if (pathname !== "/dashboard") {
              router.replace("/dashboard" as any);
            }
          }
        }

        if (!cancelled) {
          setRestored(true);
        }
      } catch (error) {
        console.error("Failed to restore last route:", error);
        if (!cancelled) {
          setRestored(true);
        }
      }
    }

    restoreLastRoute();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!restored || !isRestorableRoute(pathname)) {
      return;
    }

    if (pendingRestoreTarget !== null) {
      if (pathname !== pendingRestoreTarget.split("?")[0]) {
        return;
      }

      setPendingRestoreTarget(null);
      return;
    }

    AsyncStorage.setItem(LAST_ROUTE_KEY, currentRoute).catch((error) => {
      console.error("Failed to save last route:", error);
    });
  }, [pathname, currentRoute, restored, pendingRestoreTarget]);

  return null;
}

export default function RootLayout() {
  return (
    // Gesture-handler gestures (e.g. the Story screen's dialect swipe) only
    // work inside this root view.
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FaceDetectionProvider>
        <RoutePersistence />

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
          <Stack.Screen name="auth-callback" options={{ headerShown: false }} />
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
          <Stack.Screen
            name="report-thread/[id]"
            options={{ headerShown: false }}
          />
        </Stack>
      </FaceDetectionProvider>
    </GestureHandlerRootView>
  );
}
