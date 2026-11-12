import { Ionicons } from "@expo/vector-icons";
import { useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { LessonFillBlanks } from "../../types/structuredLesson";
import { LESSON_COLORS, lessonStyles, MIN_TOUCH } from "./lessonStyles";

export type ExerciseStatus = "idle" | "correct" | "wrong";

export type FillBlanksState = {
  index: number;
  selected: string | null;
  status: ExerciseStatus;
};

export const initialFillBlanksState: FillBlanksState = {
  index: 0,
  selected: null,
  status: "idle",
};

const normalize = (value: string) => value.trim().toLowerCase();

export const isFillBlankCorrect = (
  activity: LessonFillBlanks,
  state: FillBlanksState,
) => {
  const item = activity.items[state.index];
  return (
    !!item &&
    !!state.selected &&
    normalize(state.selected) === normalize(item.answer)
  );
};

type Props = {
  activity: LessonFillBlanks;
  state: FillBlanksState;
  onSelect: (word: string) => void;
  // Easy lets a wrong answer be changed and checked again; Intermediate and
  // Hard lock it and show the right answer (utils/lessonTiers.ts).
  retry?: boolean;
};

// Activity 2 — one sentence at a time; tap a chip to fill the blank, then
// Check in the bottom bar. A wrong answer can be retried.
export default function FillBlanksSection({
  activity,
  state,
  onSelect,
  retry = true,
}: Props) {
  const item = activity.items[state.index];
  // Word bank sorted so the order doesn't match the sentences (numbers in
  // numeric order). An item's own bank replaces the activity's.
  const wordBank = useMemo(
    () =>
      [
        ...new Set(
          item?.wordBank ??
            activity.wordBank ??
            activity.items.map((entry) => entry.answer),
        ),
      ].sort((a, b) => a.localeCompare(b, undefined, { numeric: true })),
    [activity, item],
  );

  if (!item) return null;

  // Items with their own title (several activities in one step) are
  // numbered within that title.
  const title = item.title ?? activity.title;
  const instructions = item.title ? item.instructions : activity.instructions;
  const group = item.title
    ? activity.items.filter((entry) => entry.title === item.title)
    : activity.items;
  const position = group.indexOf(item);

  // Split around the first run of underscores.
  const match = item.sentence.match(/^(.*?)_{2,}(.*)$/);
  const before = match ? match[1] : item.sentence;
  const after = match ? match[2] : "";
  const locked =
    state.status === "correct" || (!retry && state.status === "wrong");

  return (
    <>
      <View>
        <Text style={lessonStyles.sectionTitle}>{title}</Text>
        {instructions ? (
          <Text style={lessonStyles.sectionIntro}>{instructions}</Text>
        ) : null}
      </View>

      <Text style={lessonStyles.label}>
        {item.title ? "ITEM" : "SENTENCE"} {position + 1} OF {group.length}
      </Text>

      <View
        style={[
          lessonStyles.card,
          lessonStyles.cardHighlighted,
          state.status === "correct" && styles.cardCorrect,
          state.status === "wrong" && styles.cardWrong,
        ]}
      >
        <Text style={styles.sentence}>
          {before}
          <Text style={[styles.blank, state.selected && styles.blankFilled]}>
            {state.selected ? ` ${state.selected} ` : " ________ "}
          </Text>
          {after}
        </Text>
        {item.hint ? <Text style={styles.hint}>({item.hint})</Text> : null}
      </View>

      <View>
        <Text style={lessonStyles.label}>WORD BANK</Text>
        <View style={styles.chipRow}>
          {wordBank.map((word) => {
            const selected = state.selected === word;
            return (
              <TouchableOpacity
                key={word}
                style={[
                  styles.chip,
                  selected && styles.chipSelected,
                  locked && !selected && styles.chipDisabled,
                ]}
                disabled={locked}
                onPress={() => onSelect(word)}
                accessibilityRole="button"
                accessibilityState={{ selected, disabled: locked }}
                accessibilityLabel={word}
              >
                <Text
                  style={[styles.chipText, selected && styles.chipTextSelected]}
                >
                  {word}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <ExerciseFeedback
        status={state.status}
        wrongText={
          retry
            ? undefined
            : `Not quite. The answer is “${item.answer}”.`
        }
      />
    </>
  );
}

export function ExerciseFeedback({
  status,
  correctText = "Correct!",
  wrongText: wrongTextProp,
}: {
  status: ExerciseStatus;
  correctText?: string;
  wrongText?: string;
}) {
  if (status === "idle") return null;
  const wrongText = wrongTextProp ?? "Not quite. Try again.";
  const correct = status === "correct";
  return (
    <View
      style={[styles.feedback, correct ? styles.good : styles.bad]}
      accessibilityLiveRegion="polite"
    >
      <Ionicons
        name={correct ? "checkmark-circle" : "close-circle"}
        size={20}
        color={correct ? LESSON_COLORS.green : LESSON_COLORS.red}
      />
      <Text style={styles.feedbackText}>
        {correct ? correctText : wrongText}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardCorrect: {
    borderColor: LESSON_COLORS.green,
    backgroundColor: LESSON_COLORS.greenSoft,
  },
  cardWrong: {
    borderColor: LESSON_COLORS.red,
    backgroundColor: LESSON_COLORS.redSoft,
  },
  sentence: {
    color: LESSON_COLORS.text,
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 32,
  },
  blank: { color: LESSON_COLORS.textSecondary },
  blankFilled: {
    color: LESSON_COLORS.darkPurple,
    fontWeight: "800",
    textDecorationLine: "underline",
  },
  hint: {
    marginTop: 6,
    color: LESSON_COLORS.textSecondary,
    fontSize: 14,
    fontStyle: "italic",
  },
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
  chipSelected: { backgroundColor: LESSON_COLORS.purple },
  chipDisabled: { opacity: 0.35 },
  chipText: {
    color: LESSON_COLORS.purple,
    fontSize: 14,
    fontWeight: "800",
  },
  chipTextSelected: { color: "#FFFFFF" },
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
