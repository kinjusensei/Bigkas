/**
 * app/fer-collect.tsx
 * Direct FER photo collection screen — dev only.
 * Open camera, pick an emotion label, tap Capture to save labeled photos.
 *
 * Navigate to this with:  router.push('/fer-collect')
 *
 * Adapted for Bigkas:
 * - VisionCamera v5: photos come from usePhotoOutput().capturePhoto
 *   (services/ferCapture.ts), cropped to the same 224×224 square the
 *   Speaking collector saves.
 * - Each photo is saved to fer_data/ with a label file next to it
 *   (components/fer/ferStorage.ts), so the FER data screen's counts and
 *   Export ZIP include these photos.
 * - Labels come from utils/fer.ts, shared with the model and exporter.
 * - Release builds redirect to the start screen.
 */
import { File } from "expo-file-system";
import { Redirect, router } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  usePhotoOutput,
} from "react-native-vision-camera";

import {
  ferDataDirectory,
  readAllFrameMeta,
  writeFrameMeta,
} from "../components/fer/ferStorage";
import { FER_COLLECT_INTERVAL_MS, FER_MODEL_ENABLED } from "../constant/fer";
import { useFERInference } from "../services/FERInferenceService";
import { captureFaceImage } from "../services/ferCapture";
import {
  countByLabel,
  FER_SELF_REPORT_OPTIONS,
  type FERLabel,
  uriToPath,
} from "../utils/fer";

const COLORS: Record<FERLabel, string> = {
  engaged: "#4CAF50",
  neutral: "#9E9E9E",
  confused: "#FF9800",
  frustrated: "#F44336",
};

const EMPTY_COUNTS: Record<FERLabel, number> = {
  engaged: 0,
  neutral: 0,
  confused: 0,
  frustrated: 0,
};

const SESSION_ID = "collect";

export default function FERCollectScreen() {
  const device = useCameraDevice("front");
  const { hasPermission, requestPermission } = useCameraPermission();
  const photoOutput = usePhotoOutput({ qualityPrioritization: "speed" });

  const [selectedLabel, setSelectedLabel] = useState<FERLabel>("engaged");
  const [counts, setCounts] = useState<Record<FERLabel, number>>(EMPTY_COUNTS);
  const [capturing, setCapturing] = useState(false);
  const [autoMode, setAutoMode] = useState(false);
  const capturingRef = useRef(false);

  // Live test of the trained model on this camera (dev screen only).
  // Paused while auto-capture runs, so the two don't compete for photos.
  const fer = useFERInference({
    enabled: __DEV__ && FER_MODEL_ENABLED && !autoMode,
    photoOutput,
  });

  // Counts of labeled photos already on the phone (both collectors).
  useEffect(() => {
    if (!__DEV__) return;
    readAllFrameMeta()
      .then((frames) => setCounts({ ...EMPTY_COUNTS, ...countByLabel(frames) }))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (__DEV__ && !hasPermission) requestPermission();
  }, [hasPermission, requestPermission]);

  const captureOne = useCallback(
    async (label: FERLabel) => {
      if (capturingRef.current) return;
      capturingRef.current = true;
      setCapturing(true);
      try {
        const image = await captureFaceImage(photoOutput);
        if (!image) return;
        const timestamp = Date.now();
        const path = uriToPath(
          new File(ferDataDirectory(), `${label}_${timestamp}.jpg`).uri,
        );
        await image.saveToFileAsync(path, "jpg", 90);
        writeFrameMeta(SESSION_ID, [
          { path, sessionId: SESSION_ID, timestamp, label },
        ]);
        setCounts((prev) => ({ ...prev, [label]: prev[label] + 1 }));
      } catch (error) {
        setAutoMode(false);
        Alert.alert("Capture failed", String(error));
      } finally {
        capturingRef.current = false;
        setCapturing(false);
      }
    },
    [photoOutput],
  );

  // Auto-capture every FER_COLLECT_INTERVAL_MS (2 s).
  useEffect(() => {
    if (!autoMode) return;
    const timer = setInterval(
      () => captureOne(selectedLabel),
      FER_COLLECT_INTERVAL_MS,
    );
    return () => clearInterval(timer);
  }, [autoMode, selectedLabel, captureOne]);

  if (!__DEV__) return <Redirect href="/" />;

  if (!hasPermission || !device) {
    return (
      <SafeAreaView style={styles.center}>
        <Text style={styles.err}>
          {!hasPermission ? "Camera access is needed to collect photos." : "No front camera found."}
        </Text>
        {!hasPermission ? (
          <TouchableOpacity style={styles.permissionBtn} onPress={requestPermission}>
            <Text style={styles.captureBtnText}>Allow camera</Text>
          </TouchableOpacity>
        ) : null}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.root}>
      {/* Camera preview */}
      <Camera
        style={styles.camera}
        device={device}
        isActive={true}
        outputs={[photoOutput]}
      />

      {/* Trained model's live guess */}
      {FER_MODEL_ENABLED ? (
        <View style={styles.modelBar}>
          <Text style={styles.modelText}>
            {autoMode
              ? "🧪 Model test paused while Auto is on"
              : fer.loadError
                ? `🧪 Model failed to load: ${fer.loadError}`
                : !fer.modelReady
                  ? "🧪 Loading model…"
                  : fer.latestGuess
                    ? `🧪 Model sees: ${fer.latestGuess.emotion} ${Math.round(fer.latestGuess.confidence * 100)}%` +
                      (fer.currentEmotion ? `  ·  confirmed: ${fer.currentEmotion.emotion}` : "")
                    : "🧪 Model: show your face to the camera"}
          </Text>
        </View>
      ) : null}

      {/* Counts bar */}
      <View style={styles.countsRow}>
        {FER_SELF_REPORT_OPTIONS.map(({ label, emoji }) => (
          <View
            key={label}
            style={[
              styles.countBadge,
              { borderColor: COLORS[label], borderWidth: selectedLabel === label ? 2 : 0 },
            ]}
          >
            <Text style={styles.countNum}>{counts[label]}</Text>
            <Text style={styles.countEmoji}>{emoji}</Text>
          </View>
        ))}
      </View>

      {/* Label selector */}
      <View style={styles.labelRow}>
        {FER_SELF_REPORT_OPTIONS.map(({ label, emoji }) => (
          <TouchableOpacity
            key={label}
            style={[
              styles.labelBtn,
              { backgroundColor: selectedLabel === label ? COLORS[label] : "#222" },
            ]}
            onPress={() => setSelectedLabel(label)}
            accessibilityRole="button"
            accessibilityState={{ selected: selectedLabel === label }}
          >
            <Text style={styles.labelEmoji}>{emoji}</Text>
            <Text style={styles.labelText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Capture buttons */}
      <View style={styles.btnRow}>
        <TouchableOpacity
          style={[
            styles.captureBtn,
            { backgroundColor: COLORS[selectedLabel], opacity: capturing ? 0.5 : 1 },
          ]}
          onPress={() => captureOne(selectedLabel)}
          disabled={capturing}
        >
          <Text style={styles.captureBtnText}>
            {capturing ? "Saving…" : `📸 Capture as ${selectedLabel}`}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.autoBtn, { backgroundColor: autoMode ? "#f44336" : "#333" }]}
          onPress={() => setAutoMode((value) => !value)}
        >
          <Text style={styles.autoBtnText}>
            {autoMode ? "⏹ Stop Auto" : "▶ Auto (2s)"}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Text style={styles.backText}>← Back to FER Data</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#111" },
  camera: { flex: 1 },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
    padding: 24,
  },
  err: { color: "#fff", fontSize: 16, textAlign: "center" },
  permissionBtn: {
    marginTop: 16,
    backgroundColor: "#4f46e5",
    borderRadius: 12,
    minHeight: 48,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  modelBar: { backgroundColor: "#0B3D2E", paddingVertical: 10, paddingHorizontal: 12 },
  modelText: { color: "#D1FAE5", fontSize: 15, fontWeight: "700", textAlign: "center" },
  countsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1a1a1a",
    paddingVertical: 10,
  },
  countBadge: { alignItems: "center", borderRadius: 8, padding: 6, minWidth: 64 },
  countNum: { color: "#fff", fontSize: 22, fontWeight: "700" },
  countEmoji: { fontSize: 18 },
  labelRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#111",
  },
  labelBtn: {
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    minWidth: 72,
    minHeight: 44,
  },
  labelEmoji: { fontSize: 22 },
  labelText: { color: "#fff", fontSize: 10, marginTop: 2 },
  btnRow: { padding: 12, gap: 10, backgroundColor: "#111" },
  captureBtn: { borderRadius: 12, paddingVertical: 14, alignItems: "center" },
  captureBtnText: { color: "#fff", fontWeight: "700", fontSize: 16 },
  autoBtn: { borderRadius: 12, paddingVertical: 12, alignItems: "center" },
  autoBtnText: { color: "#fff", fontWeight: "600", fontSize: 15 },
  backBtn: { alignItems: "center", paddingVertical: 14, backgroundColor: "#111" },
  backText: { color: "#888", fontSize: 14 },
});
