import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { FLOW } from "./practiceTheme";

export type AnswerOptionState = "idle" | "selected" | "correct" | "wrong";

type Props = {
  letter: string;
  text: string;
  state: AnswerOptionState;
  disabled: boolean;
  onPress: () => void;
};

const STATE_WORDS: Record<AnswerOptionState, string> = {
  idle: "",
  selected: ", selected",
  correct: ", correct answer",
  wrong: ", your answer, wrong",
};

export default function AnswerOption({
  letter,
  text,
  state,
  disabled,
  onPress,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.option,
        state === "selected" && styles.selected,
        state === "correct" && styles.correct,
        state === "wrong" && styles.wrong,
      ]}
      accessibilityRole="button"
      accessibilityLabel={`Option ${letter}, ${text}${STATE_WORDS[state]}`}
      accessibilityState={{ disabled, selected: state === "selected" }}
    >
      <View
        style={[
          styles.badge,
          state === "selected" && styles.badgeSelected,
          state === "correct" && styles.badgeCorrect,
          state === "wrong" && styles.badgeWrong,
        ]}
      >
        <Text style={[styles.letter, state !== "idle" && styles.letterOn]}>
          {letter}
        </Text>
      </View>

      <Text
        style={[
          styles.text,
          state === "selected" && styles.textSelected,
          state === "correct" && styles.textCorrect,
          state === "wrong" && styles.textWrong,
        ]}
      >
        {text}
      </Text>

      {state === "correct" ? (
        <Ionicons name="checkmark" size={24} color={FLOW.success} />
      ) : state === "wrong" ? (
        <Ionicons name="close" size={24} color={FLOW.error} />
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  option: {
    minHeight: 60,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: FLOW.optionBorder,
    backgroundColor: FLOW.white,
  },

  selected: {
    borderWidth: 2,
    borderColor: FLOW.purple,
    backgroundColor: FLOW.tint,
  },

  correct: {
    borderWidth: 2,
    borderColor: FLOW.success,
    backgroundColor: FLOW.successTint,
  },

  wrong: {
    borderWidth: 2,
    borderColor: FLOW.error,
    backgroundColor: FLOW.errorTint,
  },

  badge: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: FLOW.badge,
  },

  badgeSelected: { backgroundColor: FLOW.purple },

  badgeCorrect: { backgroundColor: FLOW.success },

  badgeWrong: { backgroundColor: FLOW.error },

  letter: { fontSize: 14, fontWeight: "800", color: FLOW.muted },

  letterOn: { color: FLOW.white },

  text: { flex: 1, fontSize: 17, fontWeight: "700", color: FLOW.ink },

  textSelected: { fontWeight: "800", color: FLOW.deepPurple },

  textCorrect: { fontWeight: "800", color: FLOW.successText },

  textWrong: { fontWeight: "800", color: FLOW.errorText },
});
