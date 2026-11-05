import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { report } from "./reportTheme";

type Props = {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  selected: boolean;
  disabled?: boolean;
  onPress: () => void;
};

// One card in the "What kind of problem?" grid.
export default function ProblemTypeCard({
  label,
  icon,
  selected,
  disabled,
  onPress,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.card,
        selected && styles.cardSelected,
        pressed && !selected && styles.cardPressed,
      ]}
      accessibilityRole="radio"
      accessibilityLabel={label}
      accessibilityState={{ selected, checked: selected, disabled }}
    >
      {selected && (
        <View style={styles.check}>
          <Ionicons name="checkmark" size={12} color={report.white} />
        </View>
      )}
      <Ionicons
        name={icon}
        size={24}
        color={selected ? report.primary : report.muted}
      />
      <Text
        style={[styles.label, selected && styles.labelSelected]}
        numberOfLines={2}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minHeight: 84,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: report.border,
    backgroundColor: report.white,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 6,
    paddingVertical: 10,
    gap: 6,
  },

  cardSelected: {
    backgroundColor: report.chip,
    borderWidth: 2,
    borderColor: report.primary,
  },

  cardPressed: {
    backgroundColor: report.background,
  },

  check: {
    position: "absolute",
    top: 6,
    right: 6,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: report.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  label: {
    fontSize: 13,
    fontWeight: "700",
    color: report.ink,
    textAlign: "center",
  },

  labelSelected: {
    color: report.primary,
  },
});
