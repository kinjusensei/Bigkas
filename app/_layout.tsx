import { FaceDetectionProvider } from "@infinitered/react-native-mlkit-face-detection";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, usePathname, useRouter } from "expo-router";
import { useEffect, useState } from "react";
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
];

function RoutePersistence() {
  const pathname = usePathname();
  const router = useRouter();
  const [restored, setRestored] = useState(false);

  useEffect(() => {
    restoreLastRoute();
  }, []);

  useEffect(() => {
    if (!restored) {
      return;
    }

    if (RESTORABLE_ROUTES.includes(pathname)) {
      AsyncStorage.setItem(LAST_ROUTE_KEY, pathname).catch((error) => {
        console.error("Failed to save last route:", error);
      });
    }
  }, [pathname, restored]);

  async function restoreLastRoute() {
    try {
      const lastRoute = await AsyncStorage.getItem(LAST_ROUTE_KEY);
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        if (lastRoute) {
          await AsyncStorage.removeItem(LAST_ROUTE_KEY);
        }

        if (pathname !== "/") {
          router.replace("/" as any);
        }

        return;
      }

      if (lastRoute && RESTORABLE_ROUTES.includes(lastRoute)) {
        if (lastRoute !== pathname) {
          router.replace(lastRoute as any);
        }
      } else if (lastRoute) {
        await AsyncStorage.removeItem(LAST_ROUTE_KEY);
        router.replace("/dashboard" as any);
      }
    } catch (error) {
      console.error("Failed to restore last route:", error);
    } finally {
      setRestored(true);
    }
  }

  return null;
}

export default function RootLayout() {
  return (
    <FaceDetectionProvider>
      <RoutePersistence />

      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="create-account" options={{ headerShown: false }} />
        <Stack.Screen name="forgot-password" options={{ headerShown: false }} />
        <Stack.Screen name="dashboard" options={{ headerShown: false }} />
        <Stack.Screen name="leaderboard" options={{ headerShown: false }} />
        <Stack.Screen name="intro-slides" options={{ headerShown: false }} />
        <Stack.Screen name="user-profile" options={{ headerShown: false }} />
        <Stack.Screen name="users/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="reset-password" options={{ headerShown: false }} />
        <Stack.Screen name="lessons" options={{ headerShown: false }} />
        <Stack.Screen name="story" options={{ headerShown: false }} />
        <Stack.Screen name="tutorial" options={{ headerShown: false }} />
        <Stack.Screen name="lesson" options={{ headerShown: false }} />
        <Stack.Screen name="game-history" options={{ headerShown: false }} />
        <Stack.Screen name="report" options={{ headerShown: false }} />
        <Stack.Screen
          name="story/[chapterId]"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="notifications" options={{ headerShown: false }} />
        <Stack.Screen name="privacy" options={{ headerShown: false }} />
      </Stack>
    </FaceDetectionProvider>
  );
}
