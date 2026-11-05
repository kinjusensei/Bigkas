import { Ionicons } from "@expo/vector-icons";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { bigkas } from "../constant/bigkasTheme";

// Asks before logging out. "Stay logged in" is the primary action.

type Props = {
  visible: boolean;
  onStay: () => void;
  onLogout: () => void;
};

const DANGER = "#B3261E";
const DANGER_BG = "#FDECEC";

export default function LogoutConfirmSheet({
  visible,
  onStay,
  onLogout,
}: Props) {
  const insets = useSafeAreaInsets();

  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      statusBarTranslucent
      onRequestClose={onStay}
    >
      <View style={styles.root}>
        <Pressable
          style={StyleSheet.absoluteFill}
          onPress={onStay}
          accessibilityRole="button"
          accessibilityLabel="Stay logged in"
        />
        <View
          style={[styles.sheet, { paddingBottom: insets.bottom + 20 }]}
          accessibilityViewIsModal
        >
          <View style={styles.handle} />

          <View style={styles.iconCircle}>
            <Ionicons name="log-out-outline" size={30} color={DANGER} />
          </View>

          <Text style={styles.title} accessibilityRole="header">
            Log out of Bigkas?
          </Text>
          <Text style={styles.body}>
            Your XP, badges and lesson progress are saved to your account. Log
            back in anytime to continue.
          </Text>

          <Pressable
            onPress={onStay}
            style={({ pressed }) => [
              styles.button,
              styles.stayButton,
              pressed && styles.pressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel="Stay logged in"
          >
            <Text style={styles.stayText}>Stay logged in</Text>
          </Pressable>

          <Pressable
            onPress={onLogout}
            style={({ pressed }) => [
              styles.button,
              styles.logoutButton,
              pressed && styles.pressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel="Log out"
          >
            <Text style={styles.logoutText}>Log out</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(27,19,64,0.55)",
  },

  sheet: {
    backgroundColor: bigkas.white,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 10,
    alignItems: "center",
  },

  handle: {
    width: 40,
    height: 5,
    borderRadius: 3,
    backgroundColor: bigkas.border,
    marginBottom: 20,
  },

  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: DANGER_BG,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },

  title: {
    fontSize: 20,
    fontWeight: "800",
    color: bigkas.ink,
    textAlign: "center",
  },

  body: {
    fontSize: 14,
    lineHeight: 20,
    color: bigkas.muted,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 22,
  },

  button: {
    alignSelf: "stretch",
    height: 52,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  stayButton: {
    backgroundColor: bigkas.primary,
    marginBottom: 10,
  },

  stayText: {
    fontSize: 16,
    fontWeight: "700",
    color: bigkas.white,
  },

  logoutButton: {
    borderWidth: 1.5,
    borderColor: DANGER,
    backgroundColor: bigkas.white,
  },

  logoutText: {
    fontSize: 16,
    fontWeight: "700",
    color: DANGER,
  },

  pressed: {
    opacity: 0.85,
  },
});
