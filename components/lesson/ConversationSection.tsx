import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { LessonConversation } from "../../types/structuredLesson";
import { LESSON_COLORS, lessonStyles, MIN_TOUCH } from "./lessonStyles";
import { LessonAudio } from "./useLessonAudio";

type Props = {
  conversation: LessonConversation;
  audio: LessonAudio;
  // Which of several conversations this is (Lesson 2 has four).
  position?: { index: number; total: number };
};

// Step 5 — chat bubbles: the first speaker on the left, everyone else on
// the right. Play reads the whole conversation in order.
export default function ConversationSection({
  conversation,
  audio,
  position,
}: Props) {
  const lines = conversation.lines.filter((line) => line.text.trim());
  const leftSpeaker = lines[0]?.speaker;
  const playAllKey = `conversation-all-${position?.index ?? 0}`;
  const playingAll = audio.playingKey === playAllKey;

  return (
    <>
      <View>
        <Text style={lessonStyles.sectionTitle}>
          {position && position.total > 1
            ? `Guided conversation ${position.index + 1} of ${position.total}`
            : "Guided conversation"}
        </Text>
        {conversation.title ? (
          <Text style={[lessonStyles.cardTitle, styles.title]}>
            {conversation.title}
          </Text>
        ) : null}
        {conversation.instructions ? (
          <Text style={lessonStyles.sectionIntro}>
            {conversation.instructions}
          </Text>
        ) : null}
      </View>

      <View style={[lessonStyles.card, styles.situationRow]}>
        <View style={styles.situationText}>
          {conversation.situation ? (
            <>
              <Text style={lessonStyles.label}>SITUATION</Text>
              <Text style={[lessonStyles.body, styles.situationBody]}>
                {conversation.situation}
              </Text>
            </>
          ) : null}
        </View>
        <TouchableOpacity
          style={styles.playButton}
          onPress={() => audio.playSequence(playAllKey, lines)}
          accessibilityRole="button"
          accessibilityLabel={
            playingAll ? "Stop conversation" : "Play whole conversation"
          }
        >
          <Ionicons
            name={playingAll ? "stop" : "play"}
            size={18}
            color="#FFFFFF"
          />
          <Text style={styles.playText}>{playingAll ? "Stop" : "Play"}</Text>
        </TouchableOpacity>
      </View>

      {audio.notice ? (
        <Text style={lessonStyles.notice}>{audio.notice}</Text>
      ) : null}

      <View style={styles.chat}>
        {lines.map((line, index) => {
          const isLeft = line.speaker === leftSpeaker;
          return (
            <View
              key={`${line.speaker}-${index}`}
              style={[styles.bubbleRow, isLeft ? styles.left : styles.right]}
            >
              <Text style={[styles.speaker, !isLeft && styles.speakerRight]}>
                {line.speaker}
              </Text>
              <View
                style={[
                  styles.bubble,
                  isLeft ? styles.bubbleLeft : styles.bubbleRight,
                ]}
              >
                <Text
                  style={[styles.bubbleText, !isLeft && styles.bubbleTextRight]}
                >
                  {line.text}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: { marginTop: 4, color: LESSON_COLORS.purple },
  situationRow: { flexDirection: "row", alignItems: "center", gap: 12 },
  situationText: { flex: 1 },
  situationBody: { marginTop: 4, color: LESSON_COLORS.text },
  playButton: {
    minHeight: MIN_TOUCH,
    minWidth: 88,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: LESSON_COLORS.purple,
  },
  playText: { color: "#FFFFFF", fontSize: 15, fontWeight: "800" },
  chat: { gap: 10 },
  bubbleRow: { maxWidth: "82%" },
  left: { alignSelf: "flex-start" },
  right: { alignSelf: "flex-end" },
  speaker: {
    marginBottom: 3,
    color: LESSON_COLORS.textSecondary,
    fontSize: 12,
    fontWeight: "800",
  },
  speakerRight: { textAlign: "right" },
  bubble: { paddingHorizontal: 14, paddingVertical: 10, borderRadius: 16 },
  bubbleLeft: {
    borderTopLeftRadius: 4,
    backgroundColor: LESSON_COLORS.surface,
    borderWidth: 1,
    borderColor: LESSON_COLORS.border,
  },
  bubbleRight: {
    borderTopRightRadius: 4,
    backgroundColor: LESSON_COLORS.purple,
  },
  bubbleText: {
    color: LESSON_COLORS.text,
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "600",
  },
  bubbleTextRight: { color: "#FFFFFF" },
});
