import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { report } from "./reportTheme";

export type PickedScreenshot = {
  uri: string;
  base64: string;
  fileName: string;
  sizeBytes: number;
};

type Props = {
  screenshot: PickedScreenshot | null;
  disabled?: boolean;
  onChoose: () => void;
  onTake: () => void;
  onRemove: () => void;
};

function formatSize(bytes: number): string {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

// Attached screenshot card (when there is one) plus the Choose / Take
// buttons, which stay so the picture can be replaced.
export default function ScreenshotPicker({
  screenshot,
  disabled,
  onChoose,
  onTake,
  onRemove,
}: Props) {
  return (
    <View style={styles.wrap}>
      {screenshot && (
        <View style={styles.attached}>
          <Image source={{ uri: screenshot.uri }} style={styles.thumb} />
          <View style={styles.attachedText}>
            <Text style={styles.fileName} numberOfLines={1}>
              {screenshot.fileName}
            </Text>
            <View style={styles.attachedRow}>
              <Ionicons
                name="checkmark-circle"
                size={14}
                color={report.green}
              />
              <Text style={styles.attachedSize}>
                Attached · {formatSize(screenshot.sizeBytes)}
              </Text>
            </View>
          </View>
          <Pressable
            onPress={onRemove}
            disabled={disabled}
            style={styles.removeButton}
            accessibilityRole="button"
            accessibilityLabel="Remove screenshot"
          >
            <Ionicons name="close" size={20} color={report.red} />
          </Pressable>
        </View>
      )}

      <View style={styles.pickRow}>
        <PickButton
          icon="images-outline"
          label={screenshot ? "Choose another" : "Choose photo"}
          disabled={disabled}
          onPress={onChoose}
        />
        <PickButton
          icon="camera-outline"
          label={screenshot ? "Retake photo" : "Take photo"}
          disabled={disabled}
          onPress={onTake}
        />
      </View>
    </View>
  );
}

function PickButton({
  icon,
  label,
  disabled,
  onPress,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  disabled?: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.pickButton,
        pressed && styles.pickPressed,
        disabled && styles.pickDisabled,
      ]}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled }}
    >
      <Ionicons name={icon} size={20} color={report.primary} />
      <Text style={styles.pickText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: {
    gap: 10,
  },

  attached: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 10,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: report.border,
    backgroundColor: report.white,
  },

  thumb: {
    width: 64,
    height: 64,
    borderRadius: 10,
    backgroundColor: report.chip,
  },

  attachedText: {
    flex: 1,
    gap: 4,
  },

  fileName: {
    fontSize: 14,
    fontWeight: "700",
    color: report.ink,
  },

  attachedRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  attachedSize: {
    fontSize: 12,
    fontWeight: "600",
    color: report.green,
  },

  removeButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: report.redBg,
    alignItems: "center",
    justifyContent: "center",
  },

  pickRow: {
    flexDirection: "row",
    gap: 10,
  },

  pickButton: {
    flex: 1,
    minHeight: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 14,
    borderWidth: 1.5,
    borderStyle: "dashed",
    borderColor: report.primary,
    backgroundColor: report.white,
  },

  pickPressed: {
    backgroundColor: report.chip,
  },

  pickDisabled: {
    opacity: 0.5,
  },

  pickText: {
    fontSize: 14,
    fontWeight: "700",
    color: report.primary,
  },
});
