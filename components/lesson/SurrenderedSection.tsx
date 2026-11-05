import { Ionicons } from "@expo/vector-icons";
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from "react-native";

import { LessonCompletionOutcome } from "../../services/lessonCompletionService";
import { LESSON_COLORS, lessonStyles, MIN_TOUCH } from "./lessonStyles";
import { SURRENDER_RED } from "./LessonShell";

export type SurrenderScore = {
  percent: number;
  correct: number;
  answered: number;
  total: number;
};

type Props = {
  // null = the assessment wasn't reached, so there is no score.
  score: SurrenderScore | null;
  saveStatus: "saving" | "saved" | "error";
  outcome?: LessonCompletionOutcome;
  onRetrySave: () => void;
};

// "Lesson ended early" after a surrender: XP kept, the score so far and
// the broken win streak.
export default function SurrenderedSection({
  score,
  saveStatus,
  outcome,
  onRetrySave,
}: Props) {
  return (
    <>
      <View style={styles.hero}>
        <View style={styles.iconCircle}>
          <Ionicons name="flag" size={34} color={SURRENDER_RED} />
        </View>
        <Text style={styles.title} accessibilityRole="header">
          Lesson ended early
        </Text>
        <Text style={styles.subtitle}>
          This lesson isn&apos;t complete. You can start it again any time.
        </Text>
      </View>

      {saveStatus === "saving" ? (
        <View style={[lessonStyles.card, styles.savingRow]}>
          <ActivityIndicator color={LESSON_COLORS.purple} />
          <Text style={styles.rowText}>Saving your progress…</Text>
        </View>
      ) : null}

      {saveStatus === "error" ? (
        <View style={[lessonStyles.card, styles.errorCard]}>
          <Text style={styles.errorText}>
            Couldn&apos;t save your progress. Check your connection and try
            again.
          </Text>
          <Pressable
            style={styles.retryButton}
            onPress={onRetrySave}
            accessibilityRole="button"
            accessibilityLabel="Try saving again"
          >
            <Ionicons name="refresh" size={16} color={LESSON_COLORS.purple} />
            <Text style={styles.retryText}>Try saving again</Text>
          </Pressable>
        </View>
      ) : null}

      <View style={lessonStyles.card}>
        <View style={styles.statRow}>
          <Ionicons name="star-outline" size={20} color={LESSON_COLORS.purple} />
          <Text style={styles.statLabel}>XP earned</Text>
          <Text style={styles.statValue}>
            {outcome ? `+${outcome.xpAdded} XP` : "—"}
          </Text>
        </View>
        {outcome ? (
          <Text style={styles.statNote}>
            Total {outcome.totalXp} XP · Level {outcome.level}
          </Text>
        ) : null}

        <View style={[styles.statRow, styles.statRowSpaced]}>
          <Ionicons
            name="checkmark-circle-outline"
            size={20}
            color={LESSON_COLORS.purple}
          />
          <Text style={styles.statLabel}>Score so far</Text>
          <Text style={styles.statValue}>
            {score ? `${score.percent}%` : "—"}
          </Text>
        </View>
        <Text style={styles.statNote}>
          {score
            ? `${score.correct} correct of ${score.answered} answered, out of ${score.total} questions. Unanswered questions count as wrong.`
            : "The assessment wasn't reached, so no score was saved."}
        </Text>

        <View style={[styles.statRow, styles.statRowSpaced]}>
          <Ionicons name="flame-outline" size={20} color={SURRENDER_RED} />
          <Text style={styles.statLabel}>Win streak reset to 0</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  hero: { alignItems: "center", paddingVertical: 12 },
  iconCircle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: LESSON_COLORS.redSoft,
  },
  title: {
    marginTop: 14,
    color: LESSON_COLORS.text,
    fontSize: 22,
    fontWeight: "800",
  },
  subtitle: {
    marginTop: 6,
    color: LESSON_COLORS.textSecondary,
    fontSize: 14,
    textAlign: "center",
  },
  savingRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  rowText: { color: LESSON_COLORS.text, fontSize: 14, fontWeight: "600" },
  errorCard: { borderColor: SURRENDER_RED, gap: 10 },
  errorText: { color: SURRENDER_RED, fontSize: 14, fontWeight: "700" },
  retryButton: {
    minHeight: MIN_TOUCH,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: LESSON_COLORS.purple,
  },
  retryText: { color: LESSON_COLORS.purple, fontSize: 15, fontWeight: "800" },
  statRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  statRowSpaced: { marginTop: 16 },
  statLabel: {
    flex: 1,
    color: LESSON_COLORS.text,
    fontSize: 15,
    fontWeight: "700",
  },
  statValue: { color: LESSON_COLORS.text, fontSize: 16, fontWeight: "800" },
  statNote: {
    marginTop: 4,
    marginLeft: 30,
    color: LESSON_COLORS.textSecondary,
    fontSize: 13,
    lineHeight: 18,
  },
});
