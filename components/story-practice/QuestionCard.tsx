import { StyleSheet, Text, View } from "react-native";

import { FLOW } from "./practiceTheme";

type Props = {
  label: string;
  instruction?: string;
  // A word, or the question text for comprehension-style questions.
  word?: string;
  // Small line under the word ("Tagalog word").
  caption?: string;
};

const isFullQuestion = (text: string) =>
  /\s/.test(text.trim()) && text.length > 24;

// The lavender card with the type label, instruction and word.
export default function QuestionCard({
  label,
  instruction,
  word,
  caption,
}: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.pill}>
        <Text style={styles.label}>{label}</Text>
      </View>
      {instruction ? <Text style={styles.instruction}>{instruction}</Text> : null}
      {word ? (
        isFullQuestion(word) ? (
          <Text style={styles.question}>{word}</Text>
        ) : (
          <Text style={styles.word} numberOfLines={2} adjustsFontSizeToFit>
            {word}
          </Text>
        )
      ) : null}
      {caption ? <Text style={styles.caption}>{caption}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    paddingVertical: 22,
    paddingHorizontal: 20,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: FLOW.purple,
    backgroundColor: FLOW.tint,
  },

  pill: {
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: FLOW.pillBorder,
    backgroundColor: FLOW.white,
  },

  label: { fontSize: 14, lineHeight: 18, fontWeight: "800", color: FLOW.deepPurple },

  instruction: {
    marginTop: 12,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "600",
    color: FLOW.muted,
    textAlign: "center",
  },

  word: {
    marginTop: 8,
    fontSize: 36,
    lineHeight: 42,
    fontWeight: "800",
    color: FLOW.deepPurple,
    textAlign: "center",
  },

  question: {
    marginTop: 10,
    fontSize: 21,
    lineHeight: 28,
    fontWeight: "800",
    color: FLOW.deepPurple,
    textAlign: "center",
  },

  caption: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: "600",
    color: FLOW.mutedLight,
    textAlign: "center",
  },
});
