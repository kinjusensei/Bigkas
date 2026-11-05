import { StyleSheet, Text, View } from "react-native";

import {
  LessonSentence,
  LessonSentencePattern,
} from "../../types/structuredLesson";
import { LESSON_COLORS, lessonStyles } from "./lessonStyles";
import SpeakerButton from "./SpeakerButton";
import { LessonAudio } from "./useLessonAudio";

type Props = {
  intro?: string;
  patterns: LessonSentencePattern[];
  sentences: LessonSentence[];
  audio: LessonAudio;
};

// Step 4 — sentence pattern cards, then the sentence list.
export default function SelfIntroSection({
  intro,
  patterns,
  sentences,
  audio,
}: Props) {
  return (
    <>
      <View>
        <Text style={lessonStyles.sectionTitle}>Introduce yourself</Text>
        {intro ? (
          <Text style={lessonStyles.sectionIntro}>{intro}</Text>
        ) : null}
      </View>

      {patterns.map((pattern) => {
        const examples =
          pattern.examples?.filter((example) => example.trim()) ?? [];
        return (
          <View
            key={pattern.label}
            style={[lessonStyles.card, lessonStyles.cardHighlighted]}
          >
            <Text style={lessonStyles.label}>
              {pattern.label.toUpperCase()}
            </Text>
            <Text style={styles.pattern}>{pattern.pattern}</Text>
            {examples.length > 0 ? (
              <View style={styles.chipRow}>
                {examples.map((example) => (
                  <View key={example} style={styles.chip}>
                    <Text style={styles.chipText}>{example}</Text>
                  </View>
                ))}
              </View>
            ) : null}
          </View>
        );
      })}

      {audio.notice ? (
        <Text style={lessonStyles.notice}>{audio.notice}</Text>
      ) : null}

      {sentences.length > 0 ? (
        <View style={[lessonStyles.card, styles.list]}>
          {sentences.map((sentence, index) => {
            const audioKey = `sentence-${index}`;
            return (
              <View
                key={sentence.text}
                style={[styles.sentenceRow, index > 0 && styles.rowDivider]}
              >
                <View style={styles.sentenceText}>
                  <Text style={lessonStyles.term}>{sentence.text}</Text>
                  <Text style={lessonStyles.meaning}>{sentence.meaning}</Text>
                </View>
                <SpeakerButton
                  playing={audio.playingKey === audioKey}
                  onPress={() =>
                    audio.play(audioKey, {
                      text: sentence.text,
                      audioUrl: sentence.audioUrl,
                    })
                  }
                  label={`Play ${sentence.text}`}
                />
              </View>
            );
          })}
        </View>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  pattern: {
    marginTop: 8,
    color: LESSON_COLORS.darkPurple,
    fontSize: 22,
    fontWeight: "800",
  },
  chipRow: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 12 },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: LESSON_COLORS.surface,
    borderWidth: 1,
    borderColor: LESSON_COLORS.borderPurple,
  },
  chipText: {
    color: LESSON_COLORS.text,
    fontSize: 13,
    fontWeight: "700",
  },
  list: { paddingVertical: 4 },
  sentenceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 10,
  },
  rowDivider: { borderTopWidth: 1, borderTopColor: LESSON_COLORS.border },
  sentenceText: { flex: 1 },
});
