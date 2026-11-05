import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import {
  ActivityIndicator,
  Animated,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { LessonCompletionOutcome } from "../../services/lessonCompletionService";
import {
  LessonRewards,
  LessonRewardSection,
} from "../../types/structuredLesson";
import {
  levelProgress,
  streakBonusPercent,
} from "../../utils/lessonCompletion";
import { LESSON_COLORS, lessonStyles, MIN_TOUCH } from "./lessonStyles";

type Props = {
  rewards?: LessonRewards;
  scorePercent: number | null;
  passPercent?: number;
  earned: Set<LessonRewardSection>;
  saveStatus: "idle" | "saving" | "saved" | "error";
  outcome?: LessonCompletionOutcome;
  onRetrySave: () => void;
  // null = there is no next lesson yet ("Coming soon").
  nextLesson: { number: number; unlocked: boolean; onOpen: () => void } | null;
};

// Step 8 — badge, what this save added (XP, level, win streak), the next
// lesson, assessment score vs. the pass mark, and the XP list.
export default function CompleteSection({
  rewards,
  scorePercent,
  passPercent,
  earned,
  saveStatus,
  outcome,
  onRetrySave,
  nextLesson,
}: Props) {
  const items = rewards?.items ?? [];
  const earnedXp = items
    .filter((item) => earned.has(item.section))
    .reduce((sum, item) => sum + item.xp, 0);

  return (
    <>
      <View style={styles.hero}>
        <View style={styles.badgeCircle}>
          <Ionicons name="star" size={40} color="#FFFFFF" />
        </View>
        {rewards?.badge ? (
          <>
            <Text style={styles.badgeLabel}>BADGE EARNED</Text>
            <Text style={styles.badgeName}>{rewards.badge.name}</Text>
            {rewards.badge.description ? (
              <Text style={styles.badgeDescription}>
                {rewards.badge.description}
              </Text>
            ) : null}
          </>
        ) : (
          <Text style={styles.badgeName}>Lesson complete</Text>
        )}
      </View>

      <ProgressCard
        saveStatus={saveStatus}
        outcome={outcome}
        onRetrySave={onRetrySave}
      />

      <NextLessonCard nextLesson={nextLesson} />

      {scorePercent !== null || passPercent !== undefined ? (
        <View style={styles.statRow}>
          {scorePercent !== null ? (
            <View style={[lessonStyles.card, styles.stat]}>
              <Text style={styles.statLabel}>Assessment score</Text>
              <Text style={styles.statValue}>{scorePercent}%</Text>
            </View>
          ) : null}
          {passPercent !== undefined ? (
            <View style={[lessonStyles.card, styles.stat]}>
              <Text style={styles.statLabel}>Needed to pass</Text>
              <Text style={styles.statValue}>{passPercent}%</Text>
            </View>
          ) : null}
        </View>
      ) : null}

      {items.length > 0 ? (
        <View style={lessonStyles.card}>
          <Text style={lessonStyles.cardTitle}>XP earned</Text>
          {items.map((item) => {
            const done = earned.has(item.section);
            return (
              <View key={item.section} style={styles.xpRow}>
                <Ionicons
                  name={done ? "checkmark-circle" : "ellipse-outline"}
                  size={18}
                  color={done ? LESSON_COLORS.green : LESSON_COLORS.textSecondary}
                />
                <Text style={styles.xpLabel}>{item.label}</Text>
                <Text style={[styles.xpValue, !done && styles.xpPending]}>
                  {done ? `${item.xp} XP` : "Not yet"}
                </Text>
              </View>
            );
          })}
          <View style={[styles.xpRow, styles.totalRow]}>
            <Text style={[styles.xpLabel, styles.totalLabel]}>Total</Text>
            <Text style={styles.xpValue}>
              {earnedXp} / {rewards?.total ?? earnedXp} XP
            </Text>
          </View>
        </View>
      ) : null}

      {rewards?.completionRequirement ? (
        <Text style={lessonStyles.notice}>{rewards.completionRequirement}</Text>
      ) : null}
    </>
  );
}

// XP added by this save, the level bar (filling from where it was to where
// it is now, with "Level up" when the level went up) and the win streak.
function ProgressCard({
  saveStatus,
  outcome,
  onRetrySave,
}: {
  saveStatus: Props["saveStatus"];
  outcome?: LessonCompletionOutcome;
  onRetrySave: () => void;
}) {
  const fill = useRef(new Animated.Value(0)).current;
  const after = outcome ? levelProgress(outcome.totalXp) : null;
  const leveledUp = !!outcome && outcome.level > outcome.levelBefore;

  useEffect(() => {
    if (!outcome || !after) return;
    const before = levelProgress(outcome.totalXpBefore);
    // After a level up the bar starts empty at the new level.
    fill.setValue(leveledUp ? 0 : before.fraction);
    Animated.timing(fill, {
      toValue: after.fraction,
      duration: 900,
      useNativeDriver: false,
    }).start();
    // `after` is derived from outcome.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [outcome, leveledUp, fill]);

  if (saveStatus === "error") {
    return (
      <View style={[lessonStyles.card, styles.errorCard]}>
        <View style={lessonStyles.iconTitleRow}>
          <Ionicons
            name="cloud-offline-outline"
            size={20}
            color={LESSON_COLORS.red}
          />
          <Text style={[lessonStyles.cardTitle, styles.errorTitle]}>
            Couldn&apos;t save your progress
          </Text>
        </View>
        <Text style={lessonStyles.body}>
          Check your connection and try again. Your XP is only added once.
        </Text>
        <Pressable
          style={styles.retryButton}
          onPress={onRetrySave}
          accessibilityRole="button"
        >
          <Ionicons name="refresh" size={18} color={LESSON_COLORS.purple} />
          <Text style={styles.retryText}>Try again</Text>
        </Pressable>
      </View>
    );
  }

  if (!outcome || !after) {
    return (
      <View style={[lessonStyles.card, styles.savingCard]}>
        <ActivityIndicator color={LESSON_COLORS.purple} />
        <Text style={lessonStyles.body}>Saving your progress…</Text>
      </View>
    );
  }

  return (
    <View style={lessonStyles.card}>
      <View style={styles.progressStats}>
        <View style={styles.progressStat}>
          <Ionicons name="flash" size={20} color={LESSON_COLORS.purple} />
          <Text style={styles.progressValue}>+{outcome.xpAdded} XP</Text>
          <Text style={styles.statLabel}>
            {outcome.xpAdded > 0 ? "Earned now" : "Already earned"}
          </Text>
        </View>
        <View style={styles.progressStat}>
          <Ionicons name="trophy" size={20} color="#F59E0B" />
          <Text style={styles.progressValue}>{outcome.streak}</Text>
          <Text style={styles.statLabel}>
            {outcome.streak === 1 ? "Win streak" : "Wins in a row"}
          </Text>
        </View>
      </View>

      {outcome.bonusScore > 0 ? (
        <View style={styles.bonusRow}>
          <Ionicons name="flame" size={18} color="#F97316" />
          <Text style={styles.bonusText}>
            Streak bonus +{streakBonusPercent(outcome.streak)}%:{" "}
            <Text style={styles.bonusValue}>
              {outcome.bonusScore} leaderboard points
            </Text>
          </Text>
        </View>
      ) : null}

      {leveledUp ? (
        <View style={styles.levelUp} accessibilityLiveRegion="polite">
          <Ionicons name="arrow-up-circle" size={20} color="#FFFFFF" />
          <Text style={styles.levelUpText}>Level up! You reached level {outcome.level}</Text>
        </View>
      ) : null}

      <View style={styles.levelHeader}>
        <Text style={styles.levelLabel}>Level {after.level}</Text>
        <Text style={styles.statLabel}>
          {after.intoLevel} / {after.perLevel} XP · {outcome.totalXp} total
        </Text>
      </View>
      <View
        style={styles.levelTrack}
        accessibilityLabel={`Level ${after.level}, ${after.intoLevel} of ${after.perLevel} XP`}
      >
        <Animated.View
          style={[
            styles.levelFill,
            {
              width: fill.interpolate({
                inputRange: [0, 1],
                outputRange: ["0%", "100%"],
              }),
            },
          ]}
        />
      </View>
    </View>
  );
}

function NextLessonCard({ nextLesson }: { nextLesson: Props["nextLesson"] }) {
  const enabled = !!nextLesson?.unlocked;
  const status = !nextLesson ? "Coming soon" : enabled ? "Unlocked" : "Soon";
  return (
    <Pressable
      style={[styles.nextCard, !enabled && styles.nextCardDisabled]}
      onPress={nextLesson?.onOpen}
      disabled={!enabled}
      accessibilityRole="button"
      accessibilityState={{ disabled: !enabled }}
      accessibilityLabel={
        nextLesson
          ? `Lesson ${nextLesson.number}, ${status}`
          : "Next lesson, coming soon"
      }
    >
      <Ionicons
        name={enabled ? "lock-open" : "lock-closed"}
        size={20}
        color={enabled ? LESSON_COLORS.purple : LESSON_COLORS.textSecondary}
      />
      <Text style={[styles.nextTitle, !enabled && styles.nextTitleDisabled]}>
        {nextLesson ? `Lesson ${nextLesson.number}` : "Next lesson"}
      </Text>
      <View style={[styles.chip, enabled ? styles.chipOn : styles.chipOff]}>
        <Text style={[styles.chipText, enabled && styles.chipTextOn]}>
          {status}
        </Text>
      </View>
      {enabled ? (
        <Ionicons
          name="chevron-forward"
          size={18}
          color={LESSON_COLORS.purple}
        />
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  savingCard: { flexDirection: "row", alignItems: "center", gap: 10 },
  errorCard: { borderColor: LESSON_COLORS.red },
  errorTitle: { color: LESSON_COLORS.red },
  retryButton: {
    marginTop: 10,
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
  progressStats: { flexDirection: "row", gap: 10 },
  progressStat: {
    flex: 1,
    alignItems: "center",
    gap: 2,
    paddingVertical: 8,
    borderRadius: 14,
    backgroundColor: LESSON_COLORS.lavender,
  },
  progressValue: {
    color: LESSON_COLORS.text,
    fontSize: 22,
    fontWeight: "800",
  },
  bonusRow: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  bonusText: { flex: 1, color: LESSON_COLORS.text, fontSize: 14 },
  bonusValue: { color: LESSON_COLORS.purple, fontWeight: "800" },
  levelUp: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 10,
    borderRadius: 12,
    backgroundColor: LESSON_COLORS.purple,
  },
  levelUpText: { flex: 1, color: "#FFFFFF", fontSize: 15, fontWeight: "800" },
  levelHeader: {
    marginTop: 14,
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  levelLabel: { color: LESSON_COLORS.text, fontSize: 16, fontWeight: "800" },
  levelTrack: {
    marginTop: 8,
    height: 10,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: LESSON_COLORS.lavender,
  },
  levelFill: {
    height: "100%",
    borderRadius: 5,
    backgroundColor: LESSON_COLORS.purple,
  },
  nextCard: {
    minHeight: 56,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: LESSON_COLORS.borderPurple,
    backgroundColor: LESSON_COLORS.surface,
  },
  nextCardDisabled: {
    borderColor: LESSON_COLORS.border,
    backgroundColor: LESSON_COLORS.page,
  },
  nextTitle: {
    flex: 1,
    color: LESSON_COLORS.text,
    fontSize: 16,
    fontWeight: "800",
  },
  nextTitleDisabled: { color: LESSON_COLORS.textSecondary },
  chip: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 999 },
  chipOn: { backgroundColor: LESSON_COLORS.greenSoft },
  chipOff: { backgroundColor: LESSON_COLORS.lavender },
  chipText: {
    color: LESSON_COLORS.textSecondary,
    fontSize: 12,
    fontWeight: "800",
  },
  chipTextOn: { color: LESSON_COLORS.green },
  hero: {
    alignItems: "center",
    padding: 24,
    borderRadius: 22,
    backgroundColor: LESSON_COLORS.purple,
  },
  badgeCircle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F59E0B",
    borderWidth: 4,
    borderColor: "rgba(255,255,255,0.6)",
  },
  badgeLabel: {
    marginTop: 14,
    color: "rgba(255,255,255,0.8)",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.2,
  },
  badgeName: {
    marginTop: 4,
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
  },
  badgeDescription: {
    marginTop: 6,
    color: "rgba(255,255,255,0.85)",
    fontSize: 14,
    textAlign: "center",
  },
  statRow: { flexDirection: "row", gap: 10 },
  stat: { flex: 1 },
  statLabel: {
    color: LESSON_COLORS.textSecondary,
    fontSize: 12,
    fontWeight: "700",
  },
  statValue: {
    marginTop: 4,
    color: LESSON_COLORS.text,
    fontSize: 26,
    fontWeight: "800",
  },
  xpRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 8,
  },
  xpLabel: { flex: 1, color: LESSON_COLORS.text, fontSize: 14 },
  xpValue: {
    color: LESSON_COLORS.purple,
    fontSize: 14,
    fontWeight: "800",
  },
  xpPending: { color: LESSON_COLORS.textSecondary, fontWeight: "600" },
  totalRow: {
    marginTop: 4,
    borderTopWidth: 1,
    borderTopColor: LESSON_COLORS.border,
  },
  totalLabel: { fontWeight: "800" },
});
