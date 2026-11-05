import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import {
  ActivityIndicator,
  BackHandler,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { bigkas } from "../constant/bigkasTheme";
import { structuredLessonsById } from "../data/lessons/structuredLessons";
import { practiceLevels } from "../data/practiceData";
import { useStoryProgress } from "../hooks/useStoryProgress";
import { LESSONS_PER_TIER, TierLanguage, TIERS } from "../utils/lessonTiers";

// "New level unlocked" — opened once per unlock by
// hooks/useLevelUnlockCelebration.ts. Checks the level really is open;
// otherwise goes to the Lessons screen.

export default function LevelUnlockedScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<{ dialect?: string; tier?: string }>();
  const { loading, isTierOpen, isLessonComplete, getCompletion, getAwardedXp } =
    useStoryProgress();

  const languageName = params.dialect ?? "Tagalog";
  const language = languageName.toLowerCase() as TierLanguage;
  const newTier = Math.max(
    1,
    TIERS.findIndex((tier) => tier.key === params.tier),
  );
  const finishedTier = TIERS[newTier - 1];
  const nextTier = TIERS[newTier];
  const lastLessonId = `${language}_${newTier * LESSONS_PER_TIER}`;
  const firstNewLessonId = `${language}_${newTier * LESSONS_PER_TIER + 1}`;
  const valid = !loading && !!nextTier && isTierOpen(language, newTier);

  useEffect(() => {
    if (!loading && !valid) router.replace("/lessons");
  }, [loading, valid, router]);

  // Android back goes to the dashboard, like the secondary button.
  useEffect(() => {
    const sub = BackHandler.addEventListener("hardwareBackPress", () => {
      router.replace("/dashboard");
      return true;
    });
    return () => sub.remove();
  }, [router]);

  if (!valid) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={bigkas.primary} />
      </View>
    );
  }

  // The last lesson's results: a structured lesson has a saved score and
  // the XP it gave; a practice-only lesson just shows as passed.
  const completion = getCompletion(lastLessonId);
  const xpEarned = structuredLessonsById[lastLessonId]
    ? getAwardedXp(lastLessonId)
    : null;
  const doneCount = Array.from(
    { length: LESSONS_PER_TIER },
    (_, offset) =>
      `${language}_${(newTier - 1) * LESSONS_PER_TIER + offset + 1}`,
  ).filter(isLessonComplete).length;
  const nextHasContent = practiceLevels.some(
    (level) => level.lessonId === firstNewLessonId,
  );

  function startNext() {
    if (nextHasContent) {
      router.replace({
        pathname: "/lesson/[lessonId]",
        params: { lessonId: firstNewLessonId },
      } as any);
    } else {
      router.replace({
        pathname: "/lessons",
        params: { dialect: languageName, tier: nextTier.key },
      } as any);
    }
  }

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={[
        styles.content,
        { paddingTop: insets.top + 20, paddingBottom: insets.bottom + 24 },
      ]}
    >
      <Text style={styles.eyebrow}>
        {languageName} · {finishedTier.name} · Lesson{" "}
        {newTier * LESSONS_PER_TIER}
      </Text>
      <Text style={styles.complete} accessibilityRole="header">
        Lesson complete
      </Text>
      {xpEarned !== null && (
        <View style={styles.xpPill}>
          <Ionicons name="star" size={14} color={bigkas.ink} />
          <Text style={styles.xpText}>+{xpEarned} XP</Text>
        </View>
      )}

      <View style={styles.hero}>
        <View style={styles.heroCircle} />
        <View style={styles.lockCircle}>
          <Ionicons name="lock-open" size={34} color={bigkas.gold} />
        </View>
        <Text style={styles.heroEyebrow}>NEW LEVEL UNLOCKED</Text>
        <Text style={styles.heroTitle}>{nextTier.name}</Text>
        <Text style={styles.heroBody}>
          You finished all {LESSONS_PER_TIER} {finishedTier.name} lessons in{" "}
          {languageName}. {nextTier.name} lessons are now open.
        </Text>
      </View>

      {/* TIER TRACK */}
      <View
        style={styles.track}
        accessible
        accessibilityLabel={TIERS.map(
          (tier, index) =>
            `${tier.name} ${index < newTier ? "done" : index === newTier ? "open" : "locked"}`,
        ).join(", ")}
      >
        {TIERS.map((tier, index) => {
          const state =
            index < newTier ? "done" : index === newTier ? "open" : "locked";
          return (
            <View key={tier.key} style={styles.trackItem}>
              {index > 0 && (
                <View
                  style={[
                    styles.trackLine,
                    index <= newTier && styles.trackLineOn,
                  ]}
                />
              )}
              <View
                style={[
                  styles.trackDot,
                  state === "done" && styles.trackDotDone,
                  state === "open" && styles.trackDotOpen,
                ]}
              >
                <Ionicons
                  name={
                    state === "done"
                      ? "checkmark"
                      : state === "open"
                        ? "lock-open"
                        : "lock-closed"
                  }
                  size={14}
                  color={state === "locked" ? bigkas.muted : bigkas.white}
                />
              </View>
              <Text style={styles.trackName}>{tier.name}</Text>
              <Text style={styles.trackState}>
                {state === "done"
                  ? "Done"
                  : state === "open"
                    ? "Open"
                    : "Locked"}
              </Text>
            </View>
          );
        })}
      </View>

      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>
            {completion ? `${completion.bestScore}%` : "Passed"}
          </Text>
          <Text style={styles.statLabel}>Assessment score</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>
            {doneCount} / {LESSONS_PER_TIER}
          </Text>
          <Text style={styles.statLabel}>{finishedTier.name} lessons</Text>
        </View>
      </View>

      <Pressable
        onPress={startNext}
        style={({ pressed }) => [styles.primary, pressed && styles.pressed]}
        accessibilityRole="button"
        accessibilityLabel={`Start ${nextTier.name}`}
      >
        <Text style={styles.primaryText}>Start {nextTier.name}</Text>
      </Pressable>
      <Pressable
        onPress={() => router.replace("/dashboard")}
        style={({ pressed }) => [styles.outlined, pressed && styles.pressed]}
        accessibilityRole="button"
        accessibilityLabel="Back to dashboard"
      >
        <Text style={styles.outlinedText}>Back to dashboard</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: bigkas.background,
  },

  root: { flex: 1, backgroundColor: bigkas.background },

  content: { paddingHorizontal: 20, alignItems: "center" },

  eyebrow: {
    fontSize: 13,
    fontWeight: "700",
    color: bigkas.muted,
  },

  complete: {
    marginTop: 4,
    fontSize: 24,
    fontWeight: "800",
    color: bigkas.ink,
  },

  xpPill: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 999,
    backgroundColor: bigkas.gold,
  },

  xpText: { fontSize: 13, fontWeight: "800", color: bigkas.ink },

  hero: {
    alignSelf: "stretch",
    marginTop: 20,
    padding: 24,
    borderRadius: 24,
    backgroundColor: bigkas.primary,
    alignItems: "center",
    overflow: "hidden",
  },

  heroCircle: {
    position: "absolute",
    top: -70,
    right: -60,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: bigkas.accent,
  },

  lockCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "rgba(255,255,255,0.15)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  heroEyebrow: {
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1.2,
    color: bigkas.gold,
  },

  heroTitle: {
    marginTop: 4,
    fontSize: 28,
    fontWeight: "800",
    color: bigkas.white,
  },

  heroBody: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
    color: "rgba(255,255,255,0.88)",
    textAlign: "center",
  },

  track: {
    alignSelf: "stretch",
    flexDirection: "row",
    marginTop: 20,
    padding: 16,
    borderRadius: 18,
    backgroundColor: bigkas.white,
  },

  trackItem: { flex: 1, alignItems: "center", gap: 4 },

  trackLine: {
    position: "absolute",
    top: 14,
    right: "50%",
    width: "100%",
    height: 3,
    backgroundColor: bigkas.border,
  },

  trackLineOn: { backgroundColor: bigkas.primary },

  trackDot: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: bigkas.locked,
    alignItems: "center",
    justifyContent: "center",
  },

  trackDotDone: { backgroundColor: bigkas.success },

  trackDotOpen: { backgroundColor: bigkas.primary },

  trackName: { fontSize: 13, fontWeight: "800", color: bigkas.ink },

  trackState: { fontSize: 11, color: bigkas.muted },

  stats: {
    alignSelf: "stretch",
    flexDirection: "row",
    gap: 10,
    marginTop: 12,
    marginBottom: 20,
  },

  stat: {
    flex: 1,
    padding: 14,
    borderRadius: 16,
    backgroundColor: bigkas.white,
    alignItems: "center",
  },

  statValue: { fontSize: 20, fontWeight: "800", color: bigkas.primary },

  statLabel: { marginTop: 2, fontSize: 12, color: bigkas.muted },

  primary: {
    alignSelf: "stretch",
    height: 54,
    borderRadius: 14,
    backgroundColor: bigkas.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  primaryText: { fontSize: 16, fontWeight: "800", color: bigkas.white },

  outlined: {
    alignSelf: "stretch",
    height: 54,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: bigkas.primary,
    backgroundColor: bigkas.white,
    alignItems: "center",
    justifyContent: "center",
  },

  outlinedText: { fontSize: 16, fontWeight: "800", color: bigkas.primary },

  pressed: { opacity: 0.85 },
});
