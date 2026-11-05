import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { bigkas } from "../../constant/bigkasTheme";
import { LESSONS_PER_TIER } from "../../utils/lessonTiers";

type Props = {
  levelName: string;
  // Replaces "<level> is locked".
  title?: string;
  previousLevelName: string;
  // One entry per lesson of the previous level: done or not.
  previousDone: boolean[];
  onGoToPrevious: () => void;
};

// Shown instead of the lesson list when a locked level is selected.
export default function LockedLevelPanel({
  levelName,
  title,
  previousLevelName,
  previousDone,
  onGoToPrevious,
}: Props) {
  const doneCount = previousDone.filter(Boolean).length;

  return (
    <View style={styles.card}>
      <View style={styles.lockCircle}>
        <Ionicons name="lock-closed" size={28} color={bigkas.gold} />
      </View>
      <Text style={styles.title} accessibilityRole="header">
        {title ?? `${levelName} is locked`}
      </Text>
      <Text style={styles.body}>
        Finish all {LESSONS_PER_TIER} {previousLevelName} lessons to unlock it.
      </Text>

      <View
        style={styles.progress}
        accessible
        accessibilityLabel={`${previousLevelName} lessons, ${doneCount} of ${previousDone.length} done`}
      >
        <View style={styles.progressTop}>
          <Text style={styles.progressLabel}>{previousLevelName} lessons</Text>
          <Text style={styles.progressCount}>
            {doneCount} of {previousDone.length}
          </Text>
        </View>
        <View style={styles.segments}>
          {previousDone.map((done, index) => (
            <View
              key={index}
              style={[styles.segment, done && styles.segmentDone]}
            />
          ))}
        </View>
        <Text style={styles.progressHint}>
          Pass each lesson with at least 70% to count it.
        </Text>
      </View>

      <Pressable
        onPress={onGoToPrevious}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        accessibilityRole="button"
        accessibilityLabel={`Go to ${previousLevelName} lessons`}
      >
        <Text style={styles.buttonText}>Go to {previousLevelName} lessons</Text>
      </Pressable>

      <View style={styles.note}>
        <Ionicons
          name="information-circle-outline"
          size={16}
          color={bigkas.primary}
        />
        <Text style={styles.noteText}>
          Hard unlocks after you finish all 10 Intermediate lessons. Your
          progress is tracked separately for Tagalog, Kapampangan and Waray.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 14,
    backgroundColor: bigkas.white,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: bigkas.border,
    padding: 20,
    alignItems: "center",
  },

  lockCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: bigkas.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  title: {
    fontSize: 19,
    fontWeight: "800",
    color: bigkas.ink,
    textAlign: "center",
  },

  body: {
    marginTop: 6,
    fontSize: 14,
    lineHeight: 20,
    color: bigkas.muted,
    textAlign: "center",
  },

  progress: {
    alignSelf: "stretch",
    marginTop: 16,
    padding: 14,
    borderRadius: 16,
    backgroundColor: bigkas.background,
    gap: 8,
  },

  progressTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  progressLabel: {
    fontSize: 13,
    fontWeight: "700",
    color: bigkas.ink,
  },

  progressCount: {
    fontSize: 13,
    fontWeight: "800",
    color: bigkas.primary,
  },

  segments: {
    flexDirection: "row",
    gap: 4,
  },

  segment: {
    flex: 1,
    height: 8,
    borderRadius: 4,
    backgroundColor: bigkas.chip,
  },

  segmentDone: {
    backgroundColor: bigkas.success,
  },

  progressHint: {
    fontSize: 12,
    color: bigkas.muted,
  },

  button: {
    alignSelf: "stretch",
    marginTop: 16,
    height: 52,
    borderRadius: 14,
    backgroundColor: bigkas.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "800",
    color: bigkas.white,
  },

  pressed: {
    opacity: 0.85,
  },

  note: {
    alignSelf: "stretch",
    flexDirection: "row",
    gap: 8,
    marginTop: 14,
    padding: 12,
    borderRadius: 12,
    backgroundColor: bigkas.chip,
  },

  noteText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 17,
    color: bigkas.ink,
  },
});
