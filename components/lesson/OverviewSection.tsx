import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

import { StructuredLesson } from "../../types/structuredLesson";
import { LESSON_COLORS, lessonStyles, MIN_TOUCH } from "./lessonStyles";

export type LessonMood = "excited" | "okay" | "nervous";

const MOODS: {
  value: LessonMood;
  label: string;
  icon: ComponentProps<typeof Ionicons>["name"];
}[] = [
  { value: "excited", label: "Excited", icon: "happy-outline" },
  { value: "okay", label: "Okay", icon: "thumbs-up-outline" },
  { value: "nervous", label: "Nervous", icon: "alert-circle-outline" },
];

type Props = {
  lesson: StructuredLesson;
  mood: LessonMood | null;
  onMoodChange: (mood: LessonMood | null) => void;
  cameraHints: boolean;
  onCameraHintsChange: (value: boolean) => void;
};

// Step 1. The mood check and camera hints are optional and never scored.
export default function OverviewSection({
  lesson,
  mood,
  onMoodChange,
  cameraHints,
  onCameraHintsChange,
}: Props) {
  const chips = [lesson.level, lesson.unit].filter(
    (chip): chip is string => !!chip?.trim(),
  );
  const objectives = lesson.objectives?.filter((item) => item.trim()) ?? [];
  const intro = lesson.intro?.filter((item) => item.trim()) ?? [];
  const situations = [
    lesson.exampleSituation,
    ...(lesson.moreExampleSituations ?? []),
  ].filter((item) => !!item?.line.trim());

  return (
    <>
      <View>
        {chips.length > 0 ? (
          <View style={styles.chipRow}>
            {chips.map((chip) => (
              <View key={chip} style={styles.chip}>
                <Text style={styles.chipText}>{chip}</Text>
              </View>
            ))}
          </View>
        ) : null}
        <Text style={styles.title}>{lesson.title}</Text>
        {intro.map((paragraph) => (
          <Text key={paragraph} style={[lessonStyles.body, styles.paragraph]}>
            {paragraph}
          </Text>
        ))}
      </View>

      {objectives.length > 0 ? (
        <View style={[lessonStyles.card, lessonStyles.cardHighlighted]}>
          <Text style={lessonStyles.cardTitle}>
            {lesson.objectivesIntro ?? "Learning objectives"}
          </Text>
          <View style={styles.objectiveList}>
            {objectives.map((objective) => (
              <View key={objective} style={styles.objectiveRow}>
                <Ionicons
                  name="checkmark-circle"
                  size={20}
                  color={LESSON_COLORS.purple}
                />
                <Text style={[lessonStyles.body, styles.objectiveText]}>
                  {objective}
                </Text>
              </View>
            ))}
          </View>
        </View>
      ) : null}

      {situations.map((situation) =>
        situation ? (
          <View key={situation.line} style={lessonStyles.card}>
            <Text style={lessonStyles.label}>EXAMPLE SITUATION</Text>
            {situation.description.trim() ? (
              <Text style={[lessonStyles.body, styles.situationText]}>
                {situation.description}
              </Text>
            ) : null}
            {situation.lead ? (
              <Text style={[lessonStyles.body, styles.situationText]}>
                {situation.lead}
              </Text>
            ) : null}
            <Text style={styles.situationLine}>“{situation.line}”</Text>
            {situation.translation ? (
              <Text style={styles.situationTranslation}>
                “{situation.translation}”
              </Text>
            ) : null}
          </View>
        ) : null,
      )}

      <View style={lessonStyles.card}>
        <Text style={lessonStyles.cardTitle}>
          How do you feel about starting?
        </Text>
        <Text style={lessonStyles.sectionIntro}>
          Optional. This doesn&apos;t affect your score.
        </Text>
        <View style={styles.moodRow}>
          {MOODS.map((item) => {
            const selected = mood === item.value;
            return (
              <TouchableOpacity
                key={item.value}
                style={[styles.moodButton, selected && styles.moodSelected]}
                onPress={() => onMoodChange(selected ? null : item.value)}
                accessibilityRole="radio"
                accessibilityState={{ selected }}
                accessibilityLabel={item.label}
              >
                <Ionicons
                  name={item.icon}
                  size={22}
                  color={selected ? "#FFFFFF" : LESSON_COLORS.purple}
                />
                <Text
                  style={[styles.moodText, selected && styles.moodTextSelected]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.toggleRow}>
          <Ionicons
            name="camera-outline"
            size={20}
            color={LESSON_COLORS.textSecondary}
          />
          <View style={styles.toggleTextGroup}>
            <Text style={styles.toggleTitle}>Camera hints</Text>
            <Text style={styles.toggleBody}>
              Use the camera for expression hints in speaking practice. Never
              affects your score. You can finish the lesson without it.
            </Text>
          </View>
          <Switch
            value={cameraHints}
            onValueChange={onCameraHintsChange}
            trackColor={{ true: LESSON_COLORS.purple, false: "#D1D5DB" }}
            thumbColor="#FFFFFF"
            accessibilityLabel="Camera hints"
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  chipRow: { flexDirection: "row", gap: 8, marginBottom: 10 },
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: LESSON_COLORS.lavender,
  },
  chipText: {
    color: LESSON_COLORS.purple,
    fontSize: 12,
    fontWeight: "800",
  },
  title: {
    color: LESSON_COLORS.text,
    fontSize: 24,
    fontWeight: "800",
    lineHeight: 30,
  },
  paragraph: { marginTop: 8 },
  objectiveList: { marginTop: 10, gap: 10 },
  objectiveRow: { flexDirection: "row", alignItems: "flex-start", gap: 10 },
  objectiveText: { flex: 1, color: LESSON_COLORS.text },
  situationText: { marginTop: 8 },
  situationLine: {
    marginTop: 10,
    color: LESSON_COLORS.darkPurple,
    fontSize: 17,
    fontWeight: "800",
    lineHeight: 24,
  },
  situationTranslation: {
    marginTop: 4,
    color: LESSON_COLORS.textSecondary,
    fontSize: 14,
    fontStyle: "italic",
  },
  moodRow: { flexDirection: "row", gap: 8, marginTop: 12 },
  moodButton: {
    flex: 1,
    minHeight: 64,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: LESSON_COLORS.borderPurple,
  },
  moodSelected: {
    backgroundColor: LESSON_COLORS.purple,
    borderColor: LESSON_COLORS.purple,
  },
  moodText: {
    color: LESSON_COLORS.text,
    fontSize: 13,
    fontWeight: "700",
  },
  moodTextSelected: { color: "#FFFFFF" },
  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 14,
    paddingTop: 14,
    minHeight: MIN_TOUCH,
    borderTopWidth: 1,
    borderTopColor: LESSON_COLORS.border,
  },
  toggleTextGroup: { flex: 1 },
  toggleTitle: {
    color: LESSON_COLORS.text,
    fontSize: 15,
    fontWeight: "800",
  },
  toggleBody: {
    marginTop: 2,
    color: LESSON_COLORS.textSecondary,
    fontSize: 12,
    lineHeight: 17,
  },
});
