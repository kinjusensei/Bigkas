import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { LessonAssessment } from "../../types/structuredLesson";
import { LESSON_COLORS, lessonStyles } from "./lessonStyles";

export type AssessmentState = {
  index: number;
  selected: string | null;
  // True once "Check answer" was pressed for the current question.
  revealed: boolean;
  // question id → chosen option key
  answers: Record<number, string>;
  finished: boolean;
};

export const initialAssessmentState: AssessmentState = {
  index: 0,
  selected: null,
  revealed: false,
  answers: {},
  finished: false,
};

export const getAssessmentScore = (
  assessment: LessonAssessment,
  state: AssessmentState,
) => {
  const total = assessment.questions.length;
  const correct = assessment.questions.filter(
    (question) => state.answers[question.id] === question.answerKey,
  ).length;
  const percent = total > 0 ? Math.round((correct / total) * 100) : 0;
  return {
    correct,
    total,
    percent,
    passed: percent >= assessment.passPercent,
    // Smallest number of correct answers that reaches passPercent.
    passingCorrect: Math.ceil((assessment.passPercent / 100) * total),
  };
};

type Props = {
  assessment: LessonAssessment;
  state: AssessmentState;
  onSelect: (key: string) => void;
  // Practice activity (e.g. "Choose the Appropriate Response"): no pass
  // mark is shown.
  practice?: boolean;
};

// Splits 'Which expression means "Good morning"?' so the quoted part can
// be shown large; prompts without quotes render as one line.
const splitPrompt = (prompt: string) => {
  const match = prompt.match(/^(.*?)"([^"]+)"(.*)$/);
  if (!match) return null;
  return { before: match[1].trim(), quoted: match[2], after: match[3].trim() };
};

// Step 7 — one multiple-choice question at a time.
export default function AssessmentSection({
  assessment,
  state,
  onSelect,
  practice = false,
}: Props) {
  const total = assessment.questions.length;

  if (state.finished && practice) {
    const score = getAssessmentScore(assessment, state);
    return (
      <View
        style={[lessonStyles.card, styles.resultCard]}
        accessibilityLiveRegion="polite"
      >
        <Ionicons
          name="checkmark-done-circle"
          size={48}
          color={LESSON_COLORS.purple}
        />
        <Text style={lessonStyles.cardTitle}>
          {score.correct} of {score.total} correct
        </Text>
        <Text style={[lessonStyles.body, styles.center]}>
          Activity complete. Go on when you are ready.
        </Text>
      </View>
    );
  }

  if (state.finished) {
    const score = getAssessmentScore(assessment, state);
    return (
      <View
        style={[lessonStyles.card, styles.resultCard]}
        accessibilityLiveRegion="polite"
      >
        <Ionicons
          name={score.passed ? "checkmark-circle" : "refresh-circle"}
          size={48}
          color={score.passed ? LESSON_COLORS.green : LESSON_COLORS.red}
        />
        <Text style={styles.resultPercent}>{score.percent}%</Text>
        <Text style={lessonStyles.cardTitle}>
          {score.correct} of {score.total} correct
        </Text>
        <Text style={[lessonStyles.body, styles.center]}>
          {score.passed
            ? "You passed the assessment!"
            : `You need at least ${assessment.passPercent}% to pass. Review the lesson and try again.`}
        </Text>
      </View>
    );
  }

  const question = assessment.questions[state.index];
  if (!question) return null;
  const prompt = splitPrompt(question.prompt);

  return (
    <>
      <View style={styles.progressRow}>
        {assessment.questions.map((item, index) => (
          <View
            key={item.id}
            style={[
              styles.progressSegment,
              index <= state.index && styles.progressSegmentActive,
            ]}
          />
        ))}
      </View>

      <Text style={lessonStyles.label}>
        QUESTION {state.index + 1} OF {total}
      </Text>

      <View style={[lessonStyles.card, lessonStyles.cardHighlighted]}>
        {prompt ? (
          <>
            {prompt.before ? (
              <Text style={[lessonStyles.body, styles.center]}>
                {prompt.before}
              </Text>
            ) : null}
            <Text style={styles.quoted}>“{prompt.quoted}”</Text>
            {prompt.after ? (
              <Text style={[lessonStyles.body, styles.center]}>
                {prompt.after}
              </Text>
            ) : null}
          </>
        ) : (
          <Text style={styles.prompt}>{question.prompt}</Text>
        )}
      </View>

      <View style={styles.options} accessibilityRole="radiogroup">
        {question.options.map((option) => {
          const selected = state.selected === option.key;
          const isAnswer = option.key === question.answerKey;
          const showCorrect = state.revealed && isAnswer;
          const showWrong = state.revealed && selected && !isAnswer;
          return (
            <TouchableOpacity
              key={option.key}
              style={[
                styles.option,
                selected && styles.optionSelected,
                showCorrect && styles.optionCorrect,
                showWrong && styles.optionWrong,
              ]}
              disabled={state.revealed}
              onPress={() => onSelect(option.key)}
              accessibilityRole="radio"
              accessibilityState={{ selected, disabled: state.revealed }}
              accessibilityLabel={`${option.key}. ${option.text}`}
            >
              <View
                style={[styles.optionKey, selected && styles.optionKeySelected]}
              >
                <Text
                  style={[
                    styles.optionKeyText,
                    selected && styles.optionKeyTextSelected,
                  ]}
                >
                  {option.key}
                </Text>
              </View>
              <Text style={styles.optionText}>{option.text}</Text>
              {showCorrect ? (
                <Ionicons
                  name="checkmark-circle"
                  size={20}
                  color={LESSON_COLORS.green}
                />
              ) : null}
              {showWrong ? (
                <Ionicons
                  name="close-circle"
                  size={20}
                  color={LESSON_COLORS.red}
                />
              ) : null}
            </TouchableOpacity>
          );
        })}
      </View>

      {practice ? null : (
        <Text style={lessonStyles.notice}>
          Pass at least {assessment.passPercent}% to complete the lesson. You
          can review and try again if needed.
        </Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  progressRow: { flexDirection: "row", gap: 6 },
  progressSegment: {
    flex: 1,
    height: 6,
    borderRadius: 3,
    backgroundColor: LESSON_COLORS.borderPurple,
  },
  progressSegmentActive: { backgroundColor: LESSON_COLORS.purple },
  center: { textAlign: "center" },
  quoted: {
    marginTop: 6,
    color: LESSON_COLORS.darkPurple,
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center",
  },
  prompt: {
    color: LESSON_COLORS.text,
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 25,
    textAlign: "center",
  },
  options: { gap: 10 },
  option: {
    minHeight: 56,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 14,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: LESSON_COLORS.border,
    backgroundColor: LESSON_COLORS.surface,
  },
  optionSelected: {
    borderColor: LESSON_COLORS.purple,
    backgroundColor: LESSON_COLORS.lavender,
  },
  optionCorrect: {
    borderColor: LESSON_COLORS.green,
    backgroundColor: LESSON_COLORS.greenSoft,
  },
  optionWrong: {
    borderColor: LESSON_COLORS.red,
    backgroundColor: LESSON_COLORS.redSoft,
  },
  optionKey: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: LESSON_COLORS.lavender,
  },
  optionKeySelected: { backgroundColor: LESSON_COLORS.purple },
  optionKeyText: {
    color: LESSON_COLORS.purple,
    fontSize: 14,
    fontWeight: "800",
  },
  optionKeyTextSelected: { color: "#FFFFFF" },
  optionText: {
    flex: 1,
    color: LESSON_COLORS.text,
    fontSize: 15,
    fontWeight: "700",
  },
  resultCard: { alignItems: "center", gap: 8, paddingVertical: 28 },
  resultPercent: {
    color: LESSON_COLORS.text,
    fontSize: 40,
    fontWeight: "800",
  },
});
