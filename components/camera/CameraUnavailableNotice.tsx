import { Ionicons } from "@expo/vector-icons";
import { Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { CAMERA_PROBLEM_TEXT, type CameraProblem } from "../../utils/cameraErrors";

type Props = {
  problem: CameraProblem;
  onRetry: () => void;
  // Shown as "Continue without camera" when given; the camera is never
  // required to keep learning.
  onContinue?: () => void;
  dark?: boolean;
};

// Shown in place of the camera when it can't run. Explains why, and offers
// Retry, Open Settings and (optionally) continuing without the camera.
export default function CameraUnavailableNotice({
  problem,
  onRetry,
  onContinue,
  dark = false,
}: Props) {
  const text = CAMERA_PROBLEM_TEXT[problem];
  const canFixInSettings = problem !== "no-device";
  const color = dark ? "#F9FAFB" : "#1F1A3D";
  const muted = dark ? "#D1D5DB" : "#4A4766";

  return (
    <View
      style={[styles.card, dark && styles.cardDark]}
      accessibilityLiveRegion="polite"
    >
      <Ionicons name="videocam-off-outline" size={28} color={dark ? "#C4B5FD" : "#5B4BA8"} />
      <Text style={[styles.title, { color }]} accessibilityRole="header">
        {text.title}
      </Text>
      <Text style={[styles.body, { color: muted }]}>{text.body}</Text>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, styles.primary]}
          onPress={onRetry}
          accessibilityRole="button"
        >
          <Text style={styles.primaryText}>Retry</Text>
        </TouchableOpacity>
        {canFixInSettings ? (
          <TouchableOpacity
            style={[styles.button, styles.secondary]}
            onPress={() => {
              Linking.openSettings().catch(() => {});
            }}
            accessibilityRole="button"
            accessibilityHint="Opens Bigkas in your phone's settings"
          >
            <Text style={styles.secondaryText}>Open Settings</Text>
          </TouchableOpacity>
        ) : null}
      </View>

      {onContinue ? (
        <TouchableOpacity
          onPress={onContinue}
          style={styles.link}
          accessibilityRole="button"
        >
          <Text style={[styles.linkText, { color: dark ? "#C4B5FD" : "#4B2FB0" }]}>
            Continue without camera
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    gap: 8,
    padding: 20,
    borderRadius: 16,
    backgroundColor: "#F4F3FA",
    borderWidth: 1,
    borderColor: "#E4E1F3",
  },
  cardDark: { backgroundColor: "#1F1F2B", borderColor: "#33334A" },
  title: { fontSize: 17, fontWeight: "800", textAlign: "center" },
  body: { fontSize: 14, lineHeight: 20, textAlign: "center" },
  row: { flexDirection: "row", gap: 10, marginTop: 8, flexWrap: "wrap", justifyContent: "center" },
  button: {
    minHeight: 44,
    minWidth: 120,
    paddingHorizontal: 18,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  primary: { backgroundColor: "#4B2FB0" },
  primaryText: { color: "#FFFFFF", fontWeight: "800", fontSize: 15 },
  secondary: { borderWidth: 1.5, borderColor: "#8E7FD9", backgroundColor: "transparent" },
  secondaryText: { color: "#8E7FD9", fontWeight: "800", fontSize: 15 },
  link: { minHeight: 44, justifyContent: "center", paddingHorizontal: 12 },
  linkText: { fontWeight: "700", fontSize: 14 },
});
