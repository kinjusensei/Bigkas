import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps, ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { FLOW, FLOW_MIN_TAP } from "./practiceTheme";

type Props = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  // Green after a correct answer.
  success?: boolean;
  // Shown after the label (Next chapter, Try again).
  icon?: ComponentProps<typeof Ionicons>["name"];
  // Small text button under the primary one (Skip).
  textLabel?: string;
  onTextPress?: () => void;
  textAccessibilityLabel?: string;
  // Shown under the primary button (the result's secondary button).
  children?: ReactNode;
};

export default function PracticeBottomBar({
  label,
  onPress,
  disabled = false,
  success = false,
  icon,
  textLabel,
  onTextPress,
  textAccessibilityLabel,
  children,
}: Props) {
  const insets = useSafeAreaInsets();
  const hasTextButton = !!textLabel && !!onTextPress;

  return (
    <View
      style={[
        styles.bar,
        { paddingBottom: insets.bottom + (hasTextButton ? 4 : 14) },
      ]}
    >
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={({ pressed }) => [
          styles.primary,
          success && styles.success,
          disabled && styles.disabled,
          pressed && styles.pressed,
        ]}
        accessibilityRole="button"
        accessibilityLabel={label}
        accessibilityState={{ disabled }}
      >
        <Text style={styles.primaryLabel}>{label}</Text>
        {icon ? (
          <View style={icon === "refresh" ? styles.flipped : undefined}>
            <Ionicons name={icon} size={22} color={FLOW.white} />
          </View>
        ) : null}
      </Pressable>

      {hasTextButton ? (
        <Pressable
          onPress={onTextPress}
          style={styles.textButton}
          accessibilityRole="button"
          accessibilityLabel={textAccessibilityLabel ?? textLabel}
        >
          <Text style={styles.textButtonLabel}>{textLabel}</Text>
        </Pressable>
      ) : null}

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    gap: 10,
    paddingTop: 14,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: FLOW.border,
    backgroundColor: FLOW.white,
  },

  primary: {
    height: 52,
    flexDirection: "row",
    gap: 10,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: FLOW.purple,
  },

  success: { backgroundColor: FLOW.success },

  disabled: { backgroundColor: FLOW.disabled },

  pressed: { opacity: 0.85 },

  flipped: { transform: [{ scaleX: -1 }] },

  primaryLabel: { fontSize: 17, fontWeight: "800", color: FLOW.white },

  textButton: {
    alignSelf: "center",
    minHeight: FLOW_MIN_TAP,
    minWidth: 88,
    alignItems: "center",
    justifyContent: "center",
  },

  textButtonLabel: { fontSize: 15, fontWeight: "800", color: FLOW.purple },
});
