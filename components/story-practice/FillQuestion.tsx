import { useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput } from "react-native";

import { isStoryFillWord, storyFillPlaceholder } from "../../utils/storyPractice";
import FeedbackStrip, { FeedbackBold } from "./FeedbackStrip";
import PracticeBottomBar from "./PracticeBottomBar";
import { FLOW } from "./practiceTheme";
import QuestionCard from "./QuestionCard";

type Props = {
  label: string;
  instruction: string;
  word: string;
  languageLabel: string;
  answer: string;
  onChangeAnswer: (value: string) => void;
  checked: boolean;
  isCorrect: boolean;
  correctAnswer: string;
  onCheck: () => void;
  onContinue: () => void;
};

// Fill It In: type the answer, then check it.
export default function FillQuestion({
  label,
  instruction,
  word,
  languageLabel,
  answer,
  onChangeAnswer,
  checked,
  isCorrect,
  correctAnswer,
  onCheck,
  onContinue,
}: Props) {
  const [focused, setFocused] = useState(false);
  const scrollRef = useRef<ScrollView>(null);

  return (
    <>
      <ScrollView
        ref={scrollRef}
        style={styles.scroll}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <QuestionCard
          label={label}
          instruction={instruction}
          word={word}
          caption={isStoryFillWord(word) ? `${languageLabel} word` : undefined}
        />

        <Text style={styles.inputLabel}>Your answer</Text>
        <TextInput
          value={answer}
          onChangeText={onChangeAnswer}
          placeholder={storyFillPlaceholder(word)}
          placeholderTextColor={FLOW.mutedLight}
          editable={!checked}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="done"
          onSubmitEditing={() => {
            if (!checked && answer.trim()) onCheck();
          }}
          onFocus={() => {
            setFocused(true);
            // Keeps the input in view once the keyboard has opened.
            setTimeout(() => scrollRef.current?.scrollToEnd(), 250);
          }}
          onBlur={() => setFocused(false)}
          accessibilityLabel={
            isStoryFillWord(word) ? `English meaning of ${word}` : "Your answer"
          }
          style={[
            styles.input,
            focused && !checked && styles.inputFocused,
            checked && (isCorrect ? styles.inputGood : styles.inputBad),
          ]}
        />

        {checked ? (
          <FeedbackStrip correct={isCorrect}>
            {isCorrect ? (
              "Correct!"
            ) : (
              <>
                Not quite. Answer: <FeedbackBold>{correctAnswer}</FeedbackBold>
              </>
            )}
          </FeedbackStrip>
        ) : null}
      </ScrollView>

      <PracticeBottomBar
        label={checked ? "Continue" : "Check answer"}
        disabled={!checked && !answer.trim()}
        success={checked && isCorrect}
        onPress={checked ? onContinue : onCheck}
      />
    </>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1 },

  content: { padding: 20, paddingTop: 16 },

  inputLabel: {
    marginTop: 14,
    marginBottom: 8,
    fontSize: 14,
    fontWeight: "700",
    color: FLOW.mutedLight,
  },

  input: {
    height: 56,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: FLOW.optionBorder,
    backgroundColor: FLOW.white,
    fontSize: 18,
    fontWeight: "600",
    color: FLOW.ink,
  },

  inputFocused: { borderWidth: 2, borderColor: FLOW.purple },

  inputGood: { borderWidth: 2, borderColor: FLOW.success },

  inputBad: { borderWidth: 2, borderColor: FLOW.error, color: FLOW.errorText },
});
