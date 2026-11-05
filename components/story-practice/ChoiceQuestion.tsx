import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { isStoryFillWord } from "../../utils/storyPractice";
import AnswerOption, { AnswerOptionState } from "./AnswerOption";
import FeedbackStrip, { FeedbackBold } from "./FeedbackStrip";
import PracticeBottomBar from "./PracticeBottomBar";
import QuestionCard from "./QuestionCard";

const LETTERS = ["A", "B", "C", "D"];

type Props = {
  label: string;
  instruction: string;
  word: string;
  options: string[];
  correctMeaning: string;
  // The checked answer; null until "Check answer".
  checkedOption: string | null;
  onCheck: (option: string) => void;
  onContinue: () => void;
};

// Match Cards and Translate: pick an option, then check it.
export default function ChoiceQuestion({
  label,
  instruction,
  word,
  options,
  correctMeaning,
  checkedOption,
  onCheck,
  onContinue,
}: Props) {
  const [picked, setPicked] = useState<string | null>(null);
  const checked = checkedOption !== null;
  const isCorrect = checkedOption === correctMeaning;

  const stateOf = (option: string): AnswerOptionState => {
    if (!checked) return option === picked ? "selected" : "idle";
    if (option === correctMeaning) return "correct";
    return option === checkedOption ? "wrong" : "idle";
  };

  return (
    <>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <QuestionCard label={label} instruction={instruction} word={word} />

        <View style={styles.options}>
          {options.map((option, index) => (
            <AnswerOption
              key={`${index}-${option}`}
              letter={LETTERS[index] ?? String(index + 1)}
              text={option}
              state={stateOf(option)}
              disabled={checked}
              onPress={() => setPicked(option)}
            />
          ))}
        </View>

        {checked ? (
          <FeedbackStrip correct={isCorrect}>
            {isCorrect ? (
              "Correct!"
            ) : isStoryFillWord(word) ? (
              <>
                Not quite. <FeedbackBold>{word}</FeedbackBold> means{" "}
                <FeedbackBold>{correctMeaning}</FeedbackBold>.
              </>
            ) : (
              <>
                Not quite. Answer: <FeedbackBold>{correctMeaning}</FeedbackBold>
              </>
            )}
          </FeedbackStrip>
        ) : null}
      </ScrollView>

      <PracticeBottomBar
        label={checked ? "Continue" : "Check answer"}
        disabled={!checked && picked === null}
        success={checked && isCorrect}
        onPress={() => {
          if (checked) onContinue();
          else if (picked !== null) onCheck(picked);
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1 },

  content: { padding: 20, paddingTop: 16 },

  options: { gap: 10, marginTop: 15 },
});
