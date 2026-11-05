import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { LessonDialogueLine } from "../../types/structuredLesson";
import ExampleDialogue from "./ExampleDialogue";
import { LESSON_COLORS, lessonStyles, MIN_TOUCH } from "./lessonStyles";
import SpeakerButton from "./SpeakerButton";

type Props = {
  term: string;
  meaning: string;
  usage?: string;
  pronunciation?: string;
  example?: LessonDialogueLine[];
  open: boolean;
  onToggle: () => void;
  playing: boolean;
  onPlay: () => void;
};

// Word / greeting card on the greetings step: word, meaning, then the
// usage line (or the pronunciation when there is no usage). Cards with an
// example expand to show it; the speaker button is separate and never
// toggles the card.
export default function WordCard({
  term,
  meaning,
  usage,
  pronunciation,
  example,
  open,
  onToggle,
  playing,
  onPlay,
}: Props) {
  const hasExample = example?.some((line) => line.text.trim()) ?? false;
  const isOpen = hasExample && open;
  const detail = usage?.trim() || pronunciation?.trim();

  return (
    <View style={[lessonStyles.card, isOpen && lessonStyles.cardHighlighted]}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.textGroup}
          disabled={!hasExample}
          onPress={onToggle}
          accessibilityRole={hasExample ? "button" : "text"}
          accessibilityState={hasExample ? { expanded: isOpen } : undefined}
          accessibilityLabel={`${term}, ${meaning}`}
        >
          <Text style={lessonStyles.term}>{term}</Text>
          <Text style={styles.meaning}>{meaning}</Text>
          {detail ? <Text style={lessonStyles.meaning}>{detail}</Text> : null}
        </TouchableOpacity>
        <SpeakerButton
          playing={playing}
          onPress={onPlay}
          label={`Play ${term}`}
        />
        {hasExample ? (
          <TouchableOpacity
            style={styles.chevron}
            onPress={onToggle}
            accessibilityRole="button"
            accessibilityLabel={isOpen ? "Hide example" : "Show example"}
          >
            <Ionicons
              name={isOpen ? "chevron-up" : "chevron-down"}
              size={20}
              color={LESSON_COLORS.purple}
            />
          </TouchableOpacity>
        ) : null}
      </View>

      {isOpen && example ? (
        <View style={styles.example}>
          <ExampleDialogue lines={example} />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", gap: 6 },
  textGroup: { flex: 1, minHeight: MIN_TOUCH, justifyContent: "center" },
  meaning: {
    marginTop: 2,
    color: LESSON_COLORS.text,
    fontSize: 14,
    fontWeight: "700",
  },
  chevron: {
    width: MIN_TOUCH,
    height: MIN_TOUCH,
    alignItems: "center",
    justifyContent: "center",
  },
  example: { marginTop: 12 },
});
