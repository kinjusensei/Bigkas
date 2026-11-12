import { Ionicons } from "@expo/vector-icons";
import { useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { LessonMatchActivity } from "../../types/structuredLesson";
import { LESSON_COLORS, lessonStyles, MIN_TOUCH } from "./lessonStyles";

export type MatchState = {
  // pair id → chosen answer
  matches: Record<string, string>;
  selectedId: string | null;
  // Set by "Check answers"; cleared when any row changes.
  checked: boolean;
};

export const initialMatchState = (
  activity?: LessonMatchActivity,
): MatchState => ({
  matches: {},
  selectedId: activity?.pairs[0]?.id ?? null,
  checked: false,
});

export const isMatchComplete = (
  activity: LessonMatchActivity,
  state: MatchState,
) => activity.pairs.every((pair) => state.matches[pair.id]);

export const isMatchCorrect = (
  activity: LessonMatchActivity,
  state: MatchState,
) => activity.pairs.every((pair) => state.matches[pair.id] === pair.answer);

type Props = {
  activity: LessonMatchActivity;
  state: MatchState;
  onChange: (state: MatchState) => void;
  // Easy only: wrong rows can be cleared and matched again. Otherwise a
  // checked activity locks and shows the right answers.
  retry?: boolean;
};

// Step 6 — tap a Tagalog row, then an answer chip. Used chips are
// disabled; tapping a matched row clears it so it can be redone.
export default function MatchSection({
  activity,
  state,
  onChange,
  retry = true,
}: Props) {
  // Answers listed alphabetically so the order doesn't give away pairs.
  const answers = useMemo(
    () => activity.pairs.map((pair) => pair.answer).sort(),
    [activity],
  );
  const used = new Set(Object.values(state.matches));
  const allCorrect = state.checked && isMatchCorrect(activity, state);
  // Checked with mistakes and no retry in this level: read-only.
  const lockedWrong = !retry && state.checked && !allCorrect;
  const done = allCorrect || lockedWrong;
  const matchedCount = Object.keys(state.matches).length;

  const nextUnmatched = (matches: Record<string, string>, after?: string) => {
    const startIndex = after
      ? activity.pairs.findIndex((pair) => pair.id === after) + 1
      : 0;
    const ordered = [
      ...activity.pairs.slice(startIndex),
      ...activity.pairs.slice(0, startIndex),
    ];
    return ordered.find((pair) => !matches[pair.id])?.id ?? null;
  };

  const handleRowPress = (pairId: string) => {
    if (done) return;
    if (state.matches[pairId]) {
      const matches = { ...state.matches };
      delete matches[pairId];
      onChange({ matches, selectedId: pairId, checked: false });
      return;
    }
    onChange({ ...state, selectedId: pairId });
  };

  const handleAnswerPress = (answer: string) => {
    if (done || used.has(answer)) return;
    const targetId = state.selectedId ?? nextUnmatched(state.matches);
    if (!targetId) return;
    const matches = { ...state.matches, [targetId]: answer };
    onChange({
      matches,
      selectedId: nextUnmatched(matches, targetId),
      checked: false,
    });
  };

  return (
    <>
      <View>
        <Text style={lessonStyles.sectionTitle}>{activity.title}</Text>
        {activity.instructions ? (
          <Text style={lessonStyles.sectionIntro}>
            {activity.instructions}
          </Text>
        ) : null}
      </View>

      <View style={styles.rows}>
        {activity.pairs.map((pair) => {
          const answer = state.matches[pair.id];
          const selected = state.selectedId === pair.id && !answer;
          const wrong = state.checked && !!answer && answer !== pair.answer;
          return (
            <TouchableOpacity
              key={pair.id}
              style={[
                styles.row,
                answer && styles.rowMatched,
                wrong && styles.rowWrong,
                selected && styles.rowSelected,
              ]}
              onPress={() => handleRowPress(pair.id)}
              disabled={done}
              accessibilityRole="button"
              accessibilityState={{ selected, disabled: done }}
              accessibilityLabel={
                answer
                  ? `${pair.term} matched with ${answer}${
                      wrong
                        ? lockedWrong
                          ? `, incorrect. The answer is ${pair.answer}.`
                          : ", incorrect"
                        : ""
                    }${done ? "" : ". Tap to clear."}`
                  : `${pair.term}, not matched`
              }
            >
              <Text style={styles.rowTerm}>{pair.term}</Text>
              {answer ? (
                <View style={[styles.answerTag, wrong && styles.answerTagWrong]}>
                  <Ionicons
                    name={wrong ? "close" : "checkmark"}
                    size={14}
                    color={wrong ? LESSON_COLORS.red : LESSON_COLORS.green}
                  />
                  <Text
                    style={[styles.answerTagText, wrong && styles.answerWrongText]}
                  >
                    {answer}
                  </Text>
                  {wrong && lockedWrong ? (
                    <Text style={styles.answerTagText}> → {pair.answer}</Text>
                  ) : null}
                </View>
              ) : (
                <Text style={styles.placeholder}>
                  {selected ? "Pick an answer" : "Tap to select"}
                </Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      <View>
        <Text style={lessonStyles.label}>ANSWERS</Text>
        <View style={styles.chipRow}>
          {answers.map((answer) => {
            const disabled = used.has(answer) || done;
            return (
              <TouchableOpacity
                key={answer}
                style={[styles.chip, disabled && styles.chipDisabled]}
                disabled={disabled}
                onPress={() => handleAnswerPress(answer)}
                accessibilityRole="button"
                accessibilityState={{ disabled }}
                accessibilityLabel={answer}
              >
                <Text style={styles.chipText}>{answer}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {state.checked ? (
        <View
          style={[styles.feedback, allCorrect ? styles.good : styles.bad]}
          accessibilityLiveRegion="polite"
        >
          <Ionicons
            name={allCorrect ? "checkmark-circle" : "refresh-circle"}
            size={20}
            color={allCorrect ? LESSON_COLORS.green : LESSON_COLORS.red}
          />
          <Text style={styles.feedbackText}>
            {allCorrect
              ? "All matched correctly!"
              : retry
                ? "Some matches are wrong. Tap a red row to clear it and try again."
                : "Some matches were wrong. The right answer is shown after each arrow."}
          </Text>
        </View>
      ) : (
        <Text style={lessonStyles.notice}>
          {matchedCount} of {activity.pairs.length} matched
        </Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  rows: { gap: 10 },
  row: {
    minHeight: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: LESSON_COLORS.border,
    backgroundColor: LESSON_COLORS.surface,
  },
  rowSelected: {
    borderColor: LESSON_COLORS.purple,
    backgroundColor: LESSON_COLORS.lavender,
  },
  rowMatched: {
    borderColor: LESSON_COLORS.green,
    backgroundColor: LESSON_COLORS.greenSoft,
  },
  rowWrong: {
    borderColor: LESSON_COLORS.red,
    backgroundColor: LESSON_COLORS.redSoft,
  },
  rowTerm: {
    flex: 1,
    color: LESSON_COLORS.text,
    fontSize: 15,
    fontWeight: "800",
  },
  placeholder: { color: LESSON_COLORS.textSecondary, fontSize: 13 },
  answerTag: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: LESSON_COLORS.surface,
  },
  answerTagWrong: { backgroundColor: LESSON_COLORS.surface },
  answerTagText: {
    color: LESSON_COLORS.green,
    fontSize: 13,
    fontWeight: "800",
  },
  answerWrongText: { color: LESSON_COLORS.red },
  chipRow: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 8 },
  chip: {
    minHeight: MIN_TOUCH,
    justifyContent: "center",
    paddingHorizontal: 14,
    borderRadius: 999,
    borderWidth: 1.5,
    borderColor: LESSON_COLORS.purple,
    backgroundColor: LESSON_COLORS.surface,
  },
  chipDisabled: { opacity: 0.35 },
  chipText: {
    color: LESSON_COLORS.purple,
    fontSize: 14,
    fontWeight: "800",
  },
  feedback: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 14,
    borderRadius: 12,
  },
  good: { backgroundColor: LESSON_COLORS.greenSoft },
  bad: { backgroundColor: LESSON_COLORS.redSoft },
  feedbackText: {
    flex: 1,
    color: LESSON_COLORS.text,
    fontSize: 14,
    fontWeight: "700",
  },
});
