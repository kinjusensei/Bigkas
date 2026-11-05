import { Ionicons } from "@expo/vector-icons";
import { ComponentProps, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { LESSON_COLORS, MIN_TOUCH } from "./lessonStyles";
import { LessonSelfRating, saveLessonSelfRating } from "./selfRating";

const OPTIONS: {
  value: LessonSelfRating;
  label: string;
  icon: ComponentProps<typeof Ionicons>["name"];
}[] = [
  { value: "easy", label: "Easy", icon: "checkmark-done-outline" },
  { value: "difficult", label: "Difficult", icon: "barbell-outline" },
  { value: "enjoyable", label: "Enjoyable", icon: "happy-outline" },
];

// Shown on the result screen after speaking practice opened from a
// structured lesson. Optional; the choice is saved on the device only.
export default function SelfRatingCard({ lessonId }: { lessonId: string }) {
  const [rating, setRating] = useState<LessonSelfRating | null>(null);
  const [saveFailed, setSaveFailed] = useState(false);

  const choose = (value: LessonSelfRating) => {
    setRating(value);
    setSaveFailed(false);
    saveLessonSelfRating(lessonId, value).catch((error) => {
      console.warn("Unable to save self-rating:", error);
      setSaveFailed(true);
    });
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>How was the speaking activity?</Text>
      <Text style={styles.subtitle}>
        Optional. This doesn&apos;t affect your score.
      </Text>
      <View style={styles.row} accessibilityRole="radiogroup">
        {OPTIONS.map((option) => {
          const selected = rating === option.value;
          return (
            <TouchableOpacity
              key={option.value}
              style={[styles.option, selected && styles.optionSelected]}
              onPress={() => choose(option.value)}
              accessibilityRole="radio"
              accessibilityState={{ selected }}
              accessibilityLabel={option.label}
            >
              <Ionicons
                name={option.icon}
                size={22}
                color={selected ? "#FFFFFF" : LESSON_COLORS.purple}
              />
              <Text style={[styles.label, selected && styles.labelSelected]}>
                {option.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {rating ? (
        <Text style={styles.note}>
          {saveFailed ? "Couldn't save your answer." : "Thanks for telling us!"}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    marginTop: 16,
    padding: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: LESSON_COLORS.border,
    backgroundColor: LESSON_COLORS.surface,
  },
  title: { color: LESSON_COLORS.text, fontSize: 16, fontWeight: "800" },
  subtitle: {
    marginTop: 4,
    color: LESSON_COLORS.textSecondary,
    fontSize: 13,
  },
  row: { flexDirection: "row", gap: 8, marginTop: 12 },
  option: {
    flex: 1,
    minHeight: 64,
    minWidth: MIN_TOUCH,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: LESSON_COLORS.borderPurple,
  },
  optionSelected: {
    backgroundColor: LESSON_COLORS.purple,
    borderColor: LESSON_COLORS.purple,
  },
  label: { color: LESSON_COLORS.text, fontSize: 13, fontWeight: "700" },
  labelSelected: { color: "#FFFFFF" },
  note: {
    marginTop: 10,
    color: LESSON_COLORS.textSecondary,
    fontSize: 12,
    textAlign: "center",
  },
});
