import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useCameraPermission } from "react-native-vision-camera";

import { LESSON_COLORS, MIN_TOUCH } from "./lessonStyles";

type Props = {
  visible: boolean;
  // The current setting (Overview toggle); Enable is highlighted when on.
  suggested: boolean;
  // Set when the learner picked "Nervous" on the Overview.
  nervous: boolean;
  onDecide: (enabled: boolean) => void;
  onCancel: () => void;
};

// Shown before speaking practice. Camera permission is requested only
// when the learner taps Enable; if it's denied, practice continues
// without the camera. Hints never affect scores.
export default function CameraHintsPrompt({
  visible,
  suggested,
  nervous,
  onDecide,
  onCancel,
}: Props) {
  const insets = useSafeAreaInsets();
  const { hasPermission, requestPermission } = useCameraPermission();
  const [phase, setPhase] = useState<"ask" | "requesting" | "denied">("ask");

  useEffect(() => {
    if (visible) setPhase("ask");
  }, [visible]);

  const handleEnable = async () => {
    if (hasPermission) {
      onDecide(true);
      return;
    }
    setPhase("requesting");
    let granted = false;
    try {
      granted = await requestPermission();
    } catch (error) {
      console.warn("Camera permission request failed:", error);
    }
    if (granted) onDecide(true);
    else setPhase("denied");
  };

  const enableHighlighted = suggested || nervous;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
      statusBarTranslucent
    >
      <View style={styles.backdrop}>
        <View
          style={[styles.sheet, { paddingBottom: Math.max(insets.bottom, 16) + 8 }]}
        >
          <View style={styles.iconCircle}>
            <Ionicons name="camera-outline" size={26} color={LESSON_COLORS.purple} />
          </View>

          {phase === "denied" ? (
            <>
              <Text style={styles.title}>Camera not allowed</Text>
              <Text style={styles.body}>
                That&apos;s okay — you can do the speaking practice without the
                camera. You can allow it later in your phone&apos;s settings.
              </Text>
              <Pressable
                style={[styles.button, styles.primary]}
                onPress={() => onDecide(false)}
                accessibilityRole="button"
              >
                <Text style={styles.primaryText}>Continue without camera</Text>
              </Pressable>
            </>
          ) : (
            <>
              <Text style={styles.title}>Turn on camera hints?</Text>
              <Text style={styles.body}>
                {nervous
                  ? "You mentioned feeling nervous. "
                  : ""}
                If you seem stuck, the app can offer a hint, a review or a
                short break. Your camera is only used on this phone — nothing
                is recorded or uploaded, and it never changes your score.
              </Text>
              <View style={styles.buttonRow}>
                <Pressable
                  style={[
                    styles.button,
                    styles.flex,
                    enableHighlighted ? styles.secondary : styles.primary,
                  ]}
                  onPress={() => onDecide(false)}
                  disabled={phase === "requesting"}
                  accessibilityRole="button"
                >
                  <Text
                    style={
                      enableHighlighted ? styles.secondaryText : styles.primaryText
                    }
                  >
                    Skip
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    styles.button,
                    styles.flex,
                    enableHighlighted ? styles.primary : styles.secondary,
                    phase === "requesting" && styles.disabled,
                  ]}
                  onPress={handleEnable}
                  disabled={phase === "requesting"}
                  accessibilityRole="button"
                >
                  <Text
                    style={
                      enableHighlighted ? styles.primaryText : styles.secondaryText
                    }
                  >
                    {phase === "requesting" ? "Asking…" : "Enable"}
                  </Text>
                </Pressable>
              </View>
            </>
          )}

          <Pressable
            style={styles.cancel}
            onPress={onCancel}
            accessibilityRole="button"
            accessibilityLabel="Close"
          >
            <Text style={styles.cancelText}>Not now</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(20,16,40,0.45)",
  },
  sheet: {
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 20,
    paddingTop: 24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: LESSON_COLORS.surface,
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: LESSON_COLORS.lavender,
  },
  title: {
    color: LESSON_COLORS.text,
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center",
  },
  body: {
    color: LESSON_COLORS.textSecondary,
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
  },
  buttonRow: { flexDirection: "row", gap: 10, alignSelf: "stretch" },
  flex: { flex: 1 },
  button: {
    minHeight: 50,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    borderRadius: 13,
  },
  primary: { backgroundColor: LESSON_COLORS.purple },
  secondary: { borderWidth: 1.5, borderColor: LESSON_COLORS.purple },
  disabled: { opacity: 0.5 },
  primaryText: { color: "#FFFFFF", fontSize: 16, fontWeight: "800" },
  secondaryText: {
    color: LESSON_COLORS.purple,
    fontSize: 16,
    fontWeight: "800",
  },
  cancel: {
    minHeight: MIN_TOUCH,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  cancelText: {
    color: LESSON_COLORS.textSecondary,
    fontSize: 14,
    fontWeight: "700",
  },
});
