import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

import { LessonLanguageNote } from "../../types/structuredLesson";
import SpeakerButton from "./SpeakerButton";
import { LESSON_COLORS, lessonStyles } from "./lessonStyles";
import { LessonAudio } from "./useLessonAudio";

type Props = {
  notes: LessonLanguageNote[];
  audio: LessonAudio;
};

// Important language notes (Lesson 2): paragraphs, an ordinary →
// respectful table, examples with their meaning, and a "Remember" tip.
export default function LanguageNotesSection({ notes, audio }: Props) {
  return (
    <>
      <View>
        <Text style={lessonStyles.sectionTitle}>Important language notes</Text>
        <Text style={lessonStyles.sectionIntro}>
          Read each note before going on to the conversations.
        </Text>
      </View>

      {audio.notice ? (
        <Text style={lessonStyles.notice}>{audio.notice}</Text>
      ) : null}

      {notes.map((note, noteIndex) => (
        <View key={note.title} style={lessonStyles.card}>
          <Text style={lessonStyles.cardTitle}>{note.title}</Text>

          {note.body?.map((paragraph, index) => (
            <Text key={index} style={[lessonStyles.body, styles.paragraph]}>
              {paragraph}
            </Text>
          ))}

          {note.table ? (
            <View style={styles.table}>
              <View style={[styles.row, styles.headRow]}>
                <Text style={[styles.cell, styles.headCell]}>
                  {note.table.leftHeading}
                </Text>
                <Text style={[styles.cell, styles.headCell]}>
                  {note.table.rightHeading}
                </Text>
              </View>
              {note.table.rows.map((row, index) => (
                <View key={index} style={styles.row}>
                  <Text style={styles.cell}>{row.left}</Text>
                  <Ionicons
                    name="arrow-forward"
                    size={14}
                    color={LESSON_COLORS.textSecondary}
                  />
                  <Text style={[styles.cell, styles.strongCell]}>
                    {row.right}
                  </Text>
                </View>
              ))}
            </View>
          ) : null}

          {note.examples?.map((example, index) => {
            const key = `note-${noteIndex}-${index}`;
            return (
              <View key={key} style={styles.example}>
                <View style={styles.exampleText}>
                  <Text style={lessonStyles.term}>{example.text}</Text>
                  {example.meaning ? (
                    <Text style={lessonStyles.meaning}>{example.meaning}</Text>
                  ) : null}
                </View>
                <SpeakerButton
                  playing={audio.playingKey === key}
                  onPress={() =>
                    audio.play(key, {
                      text: example.text,
                      audioUrl: example.audioUrl,
                    })
                  }
                  label={example.text}
                />
              </View>
            );
          })}

          {note.remember ? (
            <View style={[lessonStyles.tipCard, styles.remember]}>
              <Text style={lessonStyles.tipTitle}>Remember</Text>
              <Text style={lessonStyles.tipBody}>{note.remember}</Text>
            </View>
          ) : null}
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  paragraph: { marginTop: 6 },
  table: {
    marginTop: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: LESSON_COLORS.border,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderTopWidth: 1,
    borderTopColor: LESSON_COLORS.border,
  },
  headRow: { borderTopWidth: 0, backgroundColor: LESSON_COLORS.lavender },
  cell: { flex: 1, color: LESSON_COLORS.text, fontSize: 14 },
  headCell: {
    color: LESSON_COLORS.textSecondary,
    fontSize: 12,
    fontWeight: "800",
  },
  strongCell: { color: LESSON_COLORS.purple, fontWeight: "800" },
  example: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  exampleText: { flex: 1 },
  remember: { marginTop: 12 },
});
