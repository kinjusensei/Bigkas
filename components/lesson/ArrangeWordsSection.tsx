import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { LessonArrangeWords } from "../../types/structuredLesson";
import { ExerciseFeedback, ExerciseStatus } from "./FillBlanksSection";
import { LESSON_COLORS, lessonStyles, MIN_TOUCH } from "./lessonStyles";

export type ArrangeState = {
  index: number;
  // Indexes into the current item's `words`, in tapped order.
  placed: number[];
  status: ExerciseStatus;
};

export const initialArrangeState: ArrangeState = {
  index: 0,
  placed: [],
  status: "idle",
};

// Tiles ending in "-" (e.g. "Taga-") attach to the next word.
export const joinTiles = (tiles: string[]) =>
  tiles.reduce(
    (sentence, tile) =>
      !sentence ? tile : sentence.endsWith("-") ? sentence + tile : `${sentence} ${tile}`,
    "",
  );

export const isArrangeComplete = (
  activity: LessonArrangeWords,
  state: ArrangeState,
) => {
  const item = activity.items[state.index];
  return !!item && state.placed.length === item.words.length;
};

export const isArrangeCorrect = (
  activity: LessonArrangeWords,
  state: ArrangeState,
) => {
  const item = activity.items[state.index];
  if (!item || state.placed.length !== item.answer.length) return false;
  return state.placed.every(
    (wordIndex, position) =>
      item.words[wordIndex]?.toLowerCase() ===
      item.answer[position]?.toLowerCase(),
  );
};

type Props = {
  activity: LessonArrangeWords;
  state: ArrangeState;
  onChange: (state: ArrangeState) => void;
  // Easy only: a wrong order can be fixed and checked again.
  retry?: boolean;
};

// Activity 3 — tap tiles in order to build the sentence; tap a placed
// tile to send it back. Check is in the bottom bar.
export default function ArrangeWordsSection({
  activity,
  state,
  onChange,
  retry = true,
}: Props) {
  const item = activity.items[state.index];
  if (!item) return null;

  const locked =
    state.status === "correct" || (!retry && state.status === "wrong");
  const placedWords = state.placed.map((wordIndex) => item.words[wordIndex]);

  const place = (wordIndex: number) => {
    if (locked || state.placed.includes(wordIndex)) return;
    onChange({ ...state, placed: [...state.placed, wordIndex], status: "idle" });
  };

  const remove = (position: number) => {
    if (locked) return;
    onChange({
      ...state,
      placed: state.placed.filter((_, index) => index !== position),
      status: "idle",
    });
  };

  return (
    <>
      <View>
        <Text style={lessonStyles.sectionTitle}>{activity.title}</Text>
        {activity.instructions ? (
          <Text style={lessonStyles.sectionIntro}>{activity.instructions}</Text>
        ) : null}
      </View>

      <Text style={lessonStyles.label}>
        SENTENCE {state.index + 1} OF {activity.items.length}
      </Text>

      <View
        style={[
          lessonStyles.card,
          lessonStyles.cardHighlighted,
          styles.answerArea,
          state.status === "correct" && styles.cardCorrect,
          state.status === "wrong" && styles.cardWrong,
        ]}
      >
        {locked ? (
          <Text style={styles.finished}>{item.display}</Text>
        ) : placedWords.length > 0 ? (
          <View style={styles.tileRow}>
            {placedWords.map((word, position) => (
              <TouchableOpacity
                key={`${word}-${position}`}
                style={[styles.tile, styles.tilePlaced]}
                onPress={() => remove(position)}
                accessibilityRole="button"
                accessibilityLabel={`${word}, placed. Tap to remove.`}
              >
                <Text style={[styles.tileText, styles.tileTextPlaced]}>
                  {word}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <Text style={styles.placeholder}>Tap the words below in order</Text>
        )}
        {!locked && placedWords.length > 0 ? (
          <Text style={styles.preview}>{joinTiles(placedWords)}</Text>
        ) : null}
      </View>

      <View>
        <Text style={lessonStyles.label}>WORDS</Text>
        <View style={styles.tileRow}>
          {item.words.map((word, wordIndex) => {
            const used = state.placed.includes(wordIndex);
            return (
              <TouchableOpacity
                key={`${word}-${wordIndex}`}
                style={[styles.tile, (used || locked) && styles.tileUsed]}
                disabled={used || locked}
                onPress={() => place(wordIndex)}
                accessibilityRole="button"
                accessibilityState={{ disabled: used || locked }}
                accessibilityLabel={word}
              >
                <Text style={styles.tileText}>{word}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <ExerciseFeedback
        status={state.status}
        wrongText={
          retry
            ? "Not quite. Tap a placed word to remove it and try again."
            : `Not quite. The correct order is “${item.answer.join(" ")}”.`
        }
      />
    </>
  );
}

const styles = StyleSheet.create({
  answerArea: { minHeight: 96, justifyContent: "center" },
  cardCorrect: {
    borderColor: LESSON_COLORS.green,
    backgroundColor: LESSON_COLORS.greenSoft,
  },
  cardWrong: {
    borderColor: LESSON_COLORS.red,
    backgroundColor: LESSON_COLORS.redSoft,
  },
  finished: {
    color: LESSON_COLORS.darkPurple,
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
  },
  placeholder: {
    color: LESSON_COLORS.textSecondary,
    fontSize: 14,
    textAlign: "center",
  },
  preview: {
    marginTop: 10,
    color: LESSON_COLORS.textSecondary,
    fontSize: 14,
    fontStyle: "italic",
  },
  tileRow: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 8 },
  tile: {
    minHeight: MIN_TOUCH,
    minWidth: MIN_TOUCH,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 14,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: LESSON_COLORS.purple,
    backgroundColor: LESSON_COLORS.surface,
  },
  tilePlaced: { backgroundColor: LESSON_COLORS.purple },
  tileUsed: { opacity: 0.3 },
  tileText: {
    color: LESSON_COLORS.purple,
    fontSize: 15,
    fontWeight: "800",
  },
  tileTextPlaced: { color: "#FFFFFF" },
});
