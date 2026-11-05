import * as Linking from "expo-linking";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "../services/supabase";
import { parseAuthCallbackUrl } from "../utils/authCallback";

const LINK_PROBLEM =
  "This confirmation link has expired or was already used. Try logging in. If your email still isn't confirmed, you can ask for a new link there.";

// The sign-up confirmation email opens the app here. Supabase has already
// confirmed the email by this point; this screen only signs the user in.
export default function AuthCallbackScreen() {
  const router = useRouter();
  // Read from the raw link: Expo Router drops the part after # for app links.
  const linkingUrl = Linking.useLinkingURL();
  const [problem, setProblem] = useState<string | null>(null);
  const handled = useRef(false);

  useEffect(() => {
    if (handled.current) return;

    const result = parseAuthCallbackUrl(linkingUrl);

    if (result.kind === "none") {
      setProblem(LINK_PROBLEM);
      return;
    }

    handled.current = true;
    setProblem(null);

    if (result.kind === "error") {
      console.warn("Confirmation link error:", result.code, result.description);
      setProblem(LINK_PROBLEM);
      return;
    }

    const showSignInProblem = (reason: string) =>
      setProblem(
        `Your email is confirmed, but we couldn't sign you in (${reason}). Please log in.`,
      );

    supabase.auth
      .setSession({
        access_token: result.accessToken,
        refresh_token: result.refreshToken,
      })
      .then(({ error }) => {
        if (error) {
          showSignInProblem(error.message);
          return;
        }
        router.replace("/dashboard" as any);
      })
      .catch((error: unknown) => {
        showSignInProblem(
          error instanceof Error ? error.message : "unknown error",
        );
      });
  }, [linkingUrl, router]);

  return (
    <SafeAreaView style={styles.container}>
      {problem ? (
        <View style={styles.content}>
          <Text style={styles.heading}>Couldn&apos;t open that link</Text>
          <Text style={styles.message}>{problem}</Text>
          <Pressable
            style={styles.button}
            onPress={() => router.replace("/login" as any)}
          >
            <Text style={styles.buttonText}>Go to log in</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.content}>
          <ActivityIndicator size="large" color="#410FA3" />
          <Text style={styles.message}>Confirming your account...</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  content: { flex: 1, justifyContent: "center", padding: 24, gap: 16 },
  heading: {
    fontSize: 24,
    fontWeight: "800",
    color: "#1a1a1a",
    textAlign: "center",
  },
  message: {
    fontSize: 16,
    color: "#4B5563",
    textAlign: "center",
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#410FA3",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: { color: "#FFFFFF", fontSize: 18, fontWeight: "700" },
});
