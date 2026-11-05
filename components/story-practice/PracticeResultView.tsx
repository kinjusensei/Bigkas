import { Ionicons } from "@expo/vector-icons";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { percentOf, PracticeTypeResult } from "../../utils/storyPractice";
import PracticeBottomBar from "./PracticeBottomBar";
import PracticeHeader from "./PracticeHeader";
import { FLOW, FLOW_MIN_TAP } from "./practiceTheme";

type Props = {
  title: string;
  chapterNumber: number;
  // The chapter still locked after this result, when there is one.
  lockedChapterNumber?: number;
  correct: number;
  total: number;
  passMark: number;
  passed: boolean;
  isLastChapter: boolean;
  rows: PracticeTypeResult[];
  xpEarned?: number;
  // Set when the result couldn't be saved: shows the retry strip.
  onRetrySave?: () => void;
  onNextChapter: () => void;
  onBackToChapters: () => void;
  onTryAgain: () => void;
  onReviewStory: () => void;
};

// Result of every story practice: docs/story-practice-mockups/09 and 10.
export default function PracticeResultView({
  title,
  chapterNumber,
  lockedChapterNumber,
  correct,
  total,
  passMark,
  passed,
  isLastChapter,
  rows,
  xpEarned,
  onRetrySave,
  onNextChapter,
  onBackToChapters,
  onTryAgain,
  onReviewStory,
}: Props) {
  const nextChapterNumber = chapterNumber + 1;
  const unsaved = !!onRetrySave;

  const hero = !passed
    ? {
        label: "ALMOST THERE",
        title: "Not passed yet",
        line: isLastChapter
          ? `You need ${passMark} of ${total} to finish the story. Review the story and try again.`
          : `You need ${passMark} of ${total} to unlock Chapter ${nextChapterNumber}. Review the story and try again.`,
      }
    : unsaved
      ? {
          label: "YOU PASSED",
          title: isLastChapter
            ? "You finished the story"
            : `Chapter ${nextChapterNumber}`,
          line: isLastChapter
            ? "Your result still needs to be saved."
            : `Chapter ${nextChapterNumber} unlocks once your result is saved.`,
        }
      : isLastChapter
        ? {
            label: "STORY COMPLETE",
            title: "You finished the story",
            line: `Awarded after passing Chapter ${chapterNumber} practice.`,
          }
        : {
            label: "NEXT CHAPTER UNLOCKED",
            title: `Chapter ${nextChapterNumber}`,
            line: `Awarded after passing Chapter ${chapterNumber} practice.`,
          };

  const heroIcon = !passed
    ? "refresh"
    : unsaved
      ? "lock-closed-outline"
      : isLastChapter
        ? "trophy-outline"
        : "lock-open-outline";

  return (
    <View style={styles.root}>
      <PracticeHeader
        title={title}
        subtitle={passed ? "Chapter practice complete" : "Practice complete"}
        onBack={onBackToChapters}
        backLabel="Back to chapters"
        right={
          <View style={styles.chips}>
            <View style={styles.scoreChip}>
              <Text style={styles.scoreChipText}>
                {correct} / {total}
              </Text>
            </View>
            {xpEarned ? (
              <View style={styles.xpChip}>
                <Text style={styles.xpChipText}>+{xpEarned} XP</Text>
              </View>
            ) : null}
          </View>
        }
      />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.hero, !passed && styles.heroRetry]}>
          <View style={[styles.heroCircle, !passed && styles.heroCircleRetry]}>
            <View style={!passed ? styles.flipped : undefined}>
              <Ionicons name={heroIcon} size={32} color={FLOW.white} />
            </View>
          </View>
          <Text style={[styles.heroLabel, !passed && styles.heroLabelRetry]}>
            {hero.label}
          </Text>
          <Text style={styles.heroTitle} accessibilityRole="header">
            {hero.title}
          </Text>
          <Text style={styles.heroLine}>{hero.line}</Text>
        </View>

        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statLabel}>Practice score</Text>
            <Text
              style={[
                styles.statValue,
                { color: passed ? FLOW.successDark : FLOW.error },
              ]}
            >
              {percentOf(correct, total)}%
            </Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statLabel}>Needed to pass</Text>
            <Text style={styles.statValue}>{percentOf(passMark, total)}%</Text>
          </View>
        </View>

        {rows.length > 0 ? (
          <View style={styles.summary}>
            <Text style={styles.summaryTitle}>How you did</Text>
            {rows.map((row) => {
              const allRight = row.got === row.total;
              return (
                <View
                  key={row.type}
                  style={styles.row}
                  accessible
                  accessibilityLabel={`${row.name}, ${row.got} of ${row.total} correct`}
                >
                  <View
                    style={[
                      styles.rowIcon,
                      { backgroundColor: allRight ? FLOW.success : FLOW.error },
                    ]}
                  >
                    <Ionicons
                      name={allRight ? "checkmark" : "close"}
                      size={13}
                      color={FLOW.white}
                    />
                  </View>
                  <Text style={styles.rowName}>
                    {row.total > 1 ? `${row.name} (${row.total})` : row.name}
                  </Text>
                  <Text style={styles.rowCount}>
                    {row.got} / {row.total}
                  </Text>
                </View>
              );
            })}
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalCount}>
                {correct} / {total}
              </Text>
            </View>
          </View>
        ) : null}
      </ScrollView>

      {onRetrySave ? (
        <View style={styles.errorStrip} accessibilityLiveRegion="polite">
          <Ionicons name="alert-circle" size={20} color={FLOW.error} />
          <Text style={styles.errorText}>
            Your result couldn&apos;t be saved. Check your connection.
          </Text>
          <Pressable
            onPress={onRetrySave}
            style={styles.errorButton}
            accessibilityRole="button"
            accessibilityLabel="Try saving again"
          >
            <Text style={styles.errorButtonText}>Save again</Text>
          </Pressable>
        </View>
      ) : null}

      <PracticeBottomBar
        label={
          !passed ? "Try again" : isLastChapter ? "Back to chapters" : "Next chapter"
        }
        icon={!passed ? "refresh" : isLastChapter ? undefined : "arrow-forward"}
        // A passing result must be saved before the next chapter can open.
        disabled={passed && unsaved}
        onPress={
          !passed ? onTryAgain : isLastChapter ? onBackToChapters : onNextChapter
        }
      >
        <View style={styles.secondaryRow}>
          <Pressable
            onPress={onReviewStory}
            style={({ pressed }) => [styles.review, pressed && styles.pressed]}
            accessibilityRole="button"
            accessibilityLabel="Review the story"
          >
            <Text style={styles.reviewText}>Review story</Text>
          </Pressable>

          {lockedChapterNumber ? (
            <View
              style={styles.locked}
              accessible
              accessibilityLabel={`Chapter ${lockedChapterNumber} is locked`}
            >
              <Ionicons
                name="lock-closed-outline"
                size={16}
                color={FLOW.muted}
              />
              <Text
                style={styles.lockedText}
                numberOfLines={1}
                adjustsFontSizeToFit
              >
                Chapter {lockedChapterNumber} · Locked
              </Text>
            </View>
          ) : null}
        </View>
      </PracticeBottomBar>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: FLOW.page },

  scroll: { flex: 1 },

  content: { padding: 20, paddingTop: 18 },

  chips: { alignItems: "flex-end", gap: 3 },

  scoreChip: {
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.18)",
  },

  scoreChipText: { fontSize: 14, lineHeight: 18, fontWeight: "800", color: FLOW.white },

  xpChip: {
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.18)",
  },

  xpChipText: { fontSize: 11, lineHeight: 14, fontWeight: "800", color: FLOW.white },

  hero: {
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: FLOW.purple,
    backgroundColor: FLOW.tint,
  },

  heroRetry: { borderColor: FLOW.amber, backgroundColor: FLOW.amberTint },

  heroCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: FLOW.purple,
  },

  heroCircleRetry: { backgroundColor: FLOW.amber },

  flipped: { transform: [{ scaleX: -1 }] },

  heroLabel: {
    marginTop: 10,
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "800",
    letterSpacing: 1.4,
    color: FLOW.purple,
    textAlign: "center",
  },

  heroLabelRetry: { color: FLOW.amberDark },

  heroTitle: {
    marginTop: 2,
    fontSize: 26,
    lineHeight: 31,
    fontWeight: "800",
    color: FLOW.deepPurple,
    textAlign: "center",
  },

  heroLine: {
    marginTop: 4,
    fontSize: 15,
    lineHeight: 20,
    color: FLOW.muted,
    textAlign: "center",
  },

  stats: { flexDirection: "row", gap: 12, marginTop: 15 },

  stat: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: FLOW.border,
    backgroundColor: FLOW.white,
  },

  statLabel: { fontSize: 13, lineHeight: 18, fontWeight: "700", color: FLOW.mutedLight },

  statValue: {
    fontSize: 27,
    lineHeight: 34,
    fontWeight: "800",
    color: FLOW.deepPurple,
  },

  summary: {
    marginTop: 15,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: FLOW.border,
    backgroundColor: FLOW.white,
  },

  summaryTitle: {
    marginBottom: 2,
    fontSize: 16,
    fontWeight: "800",
    color: FLOW.ink,
  },

  row: {
    minHeight: 32,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  rowIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  rowName: { flex: 1, fontSize: 15, color: FLOW.ink },

  rowCount: { fontSize: 15, fontWeight: "800", color: FLOW.deepPurple },

  totalRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 6,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: FLOW.border,
  },

  totalLabel: { fontSize: 16, fontWeight: "800", color: FLOW.ink },

  totalCount: { fontSize: 16, fontWeight: "800", color: FLOW.deepPurple },

  errorStrip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingLeft: 20,
    paddingRight: 12,
    paddingVertical: 4,
    backgroundColor: FLOW.errorTint,
  },

  errorText: { flex: 1, fontSize: 13, lineHeight: 18, color: FLOW.errorText },

  errorButton: {
    minHeight: FLOW_MIN_TAP,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  errorButtonText: { fontSize: 14, fontWeight: "800", color: FLOW.error },

  secondaryRow: { flexDirection: "row", gap: 10 },

  review: {
    flex: 1,
    minWidth: 0,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: FLOW.purple,
    backgroundColor: FLOW.white,
  },

  pressed: { opacity: 0.8 },

  reviewText: { fontSize: 15, fontWeight: "800", color: FLOW.purple },

  locked: {
    flex: 1,
    minWidth: 0,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingHorizontal: 8,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: FLOW.border,
    backgroundColor: FLOW.tint,
  },

  lockedText: {
    flexShrink: 1,
    fontSize: 15,
    fontWeight: "700",
    color: FLOW.muted,
  },
});
