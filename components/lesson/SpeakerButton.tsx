import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";

import { LESSON_COLORS, MIN_TOUCH } from "./lessonStyles";

type Props = {
  playing: boolean;
  onPress: () => void;
  label: string;
};

// Round speaker button used on every lesson card.
export default function SpeakerButton({ playing, onPress, label }: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, playing && styles.buttonActive]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ busy: playing }}
    >
      <Ionicons
        name={playing ? "volume-high" : "volume-high-outline"}
        size={20}
        color={playing ? "#FFFFFF" : LESSON_COLORS.purple}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: MIN_TOUCH,
    height: MIN_TOUCH,
    borderRadius: MIN_TOUCH / 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: LESSON_COLORS.lavender,
  },
  buttonActive: { backgroundColor: LESSON_COLORS.purple },
});
