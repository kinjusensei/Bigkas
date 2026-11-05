import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ReactNode, useEffect, useRef } from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useStoryProgress } from "../../hooks/useLessonProgress";
import {
  parseLessonId,
  tierIndexForNumber,
  TIERS,
} from "../../utils/lessonTiers";
import { LESSON_COLORS, MIN_TOUCH } from "./lessonStyles";

export const LOCKED_LESSON_MESSAGE = "Finish the previous lesson first";

type Props = {
  // Without an id (or for a lesson that isn't on the lessons board) the
  // children are shown as they are.
  lessonId?: string;
  children: ReactNode;
};

// Guards a lesson route (app/lesson/[lessonId], pretest, practice): a
// locked lesson shows "Finish the previous lesson first" instead of
// opening, however it was reached (lessons board, a restored route, a
// link). Waits for saved progress first so an unlocked lesson never
// flashes as locked.
export default function LessonGate({ lessonId, children }: Props) {
  const router = useRouter();
  const { loading, isLessonUnlocked, isTierOpen } = useStoryProgress();
  // Progress reloads each time the screen comes back into view; once the
  // lesson has opened it stays open, so its place isn't lost.
  const openedRef = useRef<string | null>(null);

  // A lesson in a locked level (Intermediate/Hard) goes back to the
  // Lessons screen with that level's locked panel instead.
  const parsed = lessonId ? parseLessonId(lessonId) : null;
  const tierIndex = parsed ? tierIndexForNumber(parsed.number) : 0;
  const tierLocked =
    !!parsed &&
    !loading &&
    openedRef.current !== lessonId &&
    !isTierOpen(parsed.language, tierIndex);
  useEffect(() => {
    if (!tierLocked || !parsed) return;
    const language =
      parsed.language.charAt(0).toUpperCase() + parsed.language.slice(1);
    router.replace({
      pathname: "/lessons",
      params: { dialect: language, tier: TIERS[tierIndex]?.key ?? "easy" },
    } as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tierLocked]);

  if (!lessonId || openedRef.current === lessonId) return <>{children}</>;

  if (loading || tierLocked) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={LESSON_COLORS.purple} />
      </View>
    );
  }

  if (isLessonUnlocked(lessonId)) {
    openedRef.current = lessonId;
    return <>{children}</>;
  }

  return (
    <SafeAreaView style={styles.center}>
      <View style={styles.lockCircle}>
        <Ionicons name="lock-closed" size={36} color={LESSON_COLORS.purple} />
      </View>
      <Text style={styles.title} accessibilityRole="header">
        {LOCKED_LESSON_MESSAGE}
      </Text>
      <Text style={styles.body}>
        Complete the lesson before this one, with at least 70% on its
        assessment, to unlock it.
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => router.replace("/lessons")}
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>Go to lessons</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    padding: 24,
    backgroundColor: LESSON_COLORS.page,
  },
  lockCircle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: LESSON_COLORS.lavender,
  },
  title: {
    color: LESSON_COLORS.text,
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center",
  },
  body: {
    color: LESSON_COLORS.textSecondary,
    fontSize: 15,
    lineHeight: 21,
    textAlign: "center",
  },
  button: {
    marginTop: 8,
    minHeight: MIN_TOUCH,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    backgroundColor: LESSON_COLORS.purple,
  },
  buttonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "800" },
});
