import { StyleSheet, Text, View } from "react-native";

import { LessonDialogueLine } from "../../types/structuredLesson";
import { LESSON_COLORS, lessonStyles } from "./lessonStyles";

// "EXAMPLE" block with A/B lines (or a single sentence with its English
// translation), shared by the vocabulary card and the expanded word card.
export default function ExampleDialogue({
  lines,
}: {
  lines: LessonDialogueLine[];
}) {
  const filled = lines.filter((line) => line.text.trim());
  if (filled.length === 0) return null;

  return (
    <View style={styles.block}>
      <Text style={lessonStyles.label}>EXAMPLE</Text>
      {filled.map((line, index) => {
        const speaker = line.speaker.trim();
        const translation = line.translation?.trim();
        return (
          <View key={`${speaker}-${index}`}>
            <Text style={styles.line}>
              {speaker ? <Text style={styles.speaker}>{speaker}: </Text> : null}
              {line.text}
            </Text>
            {translation ? (
              <Text style={styles.translation}>{translation}</Text>
            ) : null}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    gap: 6,
    padding: 14,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: LESSON_COLORS.purple,
    backgroundColor: LESSON_COLORS.surface,
  },
  line: {
    color: LESSON_COLORS.darkPurple,
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 22,
  },
  speaker: { color: LESSON_COLORS.text, fontWeight: "800" },
  translation: {
    color: LESSON_COLORS.textSecondary,
    fontSize: 14,
    fontStyle: "italic",
    lineHeight: 20,
  },
});
