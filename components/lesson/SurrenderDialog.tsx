import { Ionicons } from "@expo/vector-icons";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

import { LESSON_COLORS, MIN_TOUCH } from "./lessonStyles";
import { SURRENDER_RED } from "./LessonShell";

type Props = {
  visible: boolean;
  onKeepPlaying: () => void;
  onSurrender: () => void;
};

// Confirmation for the header "Surrender" button, Android back and the
// back gesture while a lesson is in progress.
export default function SurrenderDialog({
  visible,
  onKeepPlaying,
  onSurrender,
}: Props) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onKeepPlaying}
    >
      <View style={styles.backdrop}>
        <View style={styles.card} accessibilityViewIsModal>
          <View style={styles.iconCircle}>
            <Ionicons name="flag-outline" size={26} color={SURRENDER_RED} />
          </View>
          <Text style={styles.title} accessibilityRole="header">
            Surrender this lesson?
          </Text>
          <Text style={styles.body}>
            You will keep the score and XP you earned so far, but your win
            streak will be broken.
          </Text>
          <Pressable
            style={styles.keepButton}
            onPress={onKeepPlaying}
            accessibilityRole="button"
            accessibilityLabel="Keep playing"
          >
            <Text style={styles.keepText}>Keep playing</Text>
          </Pressable>
          <Pressable
            style={styles.surrenderButton}
            onPress={onSurrender}
            accessibilityRole="button"
            accessibilityLabel="Surrender"
          >
            <Text style={styles.surrenderText}>Surrender</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "rgba(20,16,40,0.55)",
  },
  card: {
    padding: 22,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: LESSON_COLORS.surface,
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: LESSON_COLORS.redSoft,
  },
  title: {
    marginTop: 12,
    color: LESSON_COLORS.text,
    fontSize: 19,
    fontWeight: "800",
    textAlign: "center",
  },
  body: {
    marginTop: 8,
    color: LESSON_COLORS.textSecondary,
    fontSize: 15,
    lineHeight: 21,
    textAlign: "center",
  },
  keepButton: {
    alignSelf: "stretch",
    minHeight: Math.max(MIN_TOUCH, 50),
    marginTop: 20,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: LESSON_COLORS.purple,
  },
  keepText: { color: "#FFFFFF", fontSize: 16, fontWeight: "800" },
  surrenderButton: {
    alignSelf: "stretch",
    minHeight: Math.max(MIN_TOUCH, 50),
    marginTop: 10,
    borderRadius: 13,
    borderWidth: 1.5,
    borderColor: SURRENDER_RED,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: LESSON_COLORS.surface,
  },
  surrenderText: { color: SURRENDER_RED, fontSize: 16, fontWeight: "800" },
});
