import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { LessonVocabularyItem } from "../../types/structuredLesson";
import ExampleDialogue from "./ExampleDialogue";
import { LESSON_COLORS, lessonStyles } from "./lessonStyles";
import { LessonAudio } from "./useLessonAudio";

type Props = {
  item: LessonVocabularyItem;
  index: number;
  total: number;
  intro?: string;
  pronunciationTip?: string;
  audio: LessonAudio;
};

// Step 2 — one word at a time, same card as the reading screen's
// "WORD x OF N" card.
export default function VocabularySection({
  item,
  index,
  total,
  intro,
  pronunciationTip,
  audio,
}: Props) {
  const audioKey = `vocab-${index}`;
  const playing = audio.playingKey === audioKey;
  const pronunciation = item.pronunciation?.trim();
  const usage = item.usage?.trim();
  const tip = pronunciationTip?.trim();

  return (
    <>
      {intro && index === 0 ? (
        <Text style={lessonStyles.sectionIntro}>{intro}</Text>
      ) : null}

      <View style={styles.wordCard}>
        <Text style={lessonStyles.label}>
          WORD {index + 1} OF {total}
        </Text>
        <Text style={styles.wordText}>{item.term}</Text>

        <TouchableOpacity
          style={styles.pronunciationButton}
          onPress={() =>
            audio.play(audioKey, { text: item.term, audioUrl: item.audioUrl })
          }
          accessibilityRole="button"
          accessibilityLabel={`Play pronunciation for ${item.term}`}
        >
          <Ionicons
            name={playing ? "volume-high" : "volume-high-outline"}
            size={22}
            color={LESSON_COLORS.purple}
          />
          <Text style={styles.pronunciationText}>
            {pronunciation || "Listen to pronunciation"}
          </Text>
        </TouchableOpacity>

        {audio.notice ? (
          <Text style={lessonStyles.notice}>{audio.notice}</Text>
        ) : null}

        {item.meaning.trim() ? (
          <>
            <View style={styles.divider} />
            <Text style={styles.meaning}>{item.meaning}</Text>
          </>
        ) : null}
      </View>

      {usage ? (
        <View style={styles.usageCard}>
          <View style={lessonStyles.iconTitleRow}>
            <Ionicons
              name="bulb-outline"
              size={18}
              color={LESSON_COLORS.text}
            />
            <Text style={lessonStyles.cardTitle}>How to use it</Text>
          </View>
          <Text style={[lessonStyles.body, styles.usageBody]}>{usage}</Text>
        </View>
      ) : null}

      {item.example ? <ExampleDialogue lines={item.example} /> : null}

      {tip ? (
        <View style={lessonStyles.tipCard}>
          <View style={lessonStyles.iconTitleRow}>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={18}
              color={LESSON_COLORS.tipTitle}
            />
            <Text style={lessonStyles.tipTitle}>Pronunciation tip</Text>
          </View>
          <Text style={lessonStyles.tipBody}>{tip}</Text>
        </View>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  wordCard: {
    alignItems: "center",
    paddingHorizontal: 22,
    paddingVertical: 28,
    borderRadius: 22,
    borderWidth: 1.5,
    borderColor: LESSON_COLORS.purple,
    backgroundColor: LESSON_COLORS.lavender,
  },
  wordText: {
    marginTop: 14,
    color: LESSON_COLORS.darkPurple,
    fontSize: 32,
    fontWeight: "800",
    textAlign: "center",
  },
  pronunciationButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    minHeight: 44,
    marginTop: 8,
    paddingHorizontal: 10,
  },
  pronunciationText: {
    color: LESSON_COLORS.textSecondary,
    fontSize: 15,
    fontWeight: "600",
  },
  divider: {
    width: "100%",
    height: 1,
    marginVertical: 18,
    backgroundColor: LESSON_COLORS.borderPurple,
  },
  meaning: {
    color: LESSON_COLORS.text,
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
  },
  usageCard: {
    padding: 18,
    borderRadius: 16,
    backgroundColor: "#F1F1F4",
  },
  usageBody: { marginTop: 8 },
});
