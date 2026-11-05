import { Ionicons } from "@expo/vector-icons";
import type { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { FLOW } from "./practiceTheme";

type Props = {
  title: string;
  subtitle?: string;
  onBack: () => void;
  backLabel?: string;
  // Chips on the result screen.
  right?: ReactNode;
};

// Purple bar on top of every practice screen and the result.
export default function PracticeHeader({
  title,
  subtitle = "Practice",
  onBack,
  backLabel = "Go back",
  right,
}: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.bar, { paddingTop: insets.top + 20 }]}>
      <Pressable
        onPress={onBack}
        hitSlop={4}
        style={({ pressed }) => [styles.back, pressed && styles.pressed]}
        accessibilityRole="button"
        accessibilityLabel={backLabel}
      >
        <Ionicons name="chevron-back" size={24} color={FLOW.white} />
      </Pressable>

      <View style={styles.titles}>
        <Text style={styles.title} numberOfLines={1} accessibilityRole="header">
          {title}
        </Text>
        <Text style={styles.subtitle} numberOfLines={1}>
          {subtitle}
        </Text>
      </View>

      {right}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 20,
    paddingBottom: 16,
    backgroundColor: FLOW.purple,
  },

  // 40px circle; hitSlop brings the tap area to 48px.
  back: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.18)",
  },

  pressed: { opacity: 0.8 },

  titles: { flex: 1 },

  title: { fontSize: 18, lineHeight: 22, fontWeight: "800", color: FLOW.white },

  subtitle: { fontSize: 14, lineHeight: 18, color: FLOW.lightPurple },
});
