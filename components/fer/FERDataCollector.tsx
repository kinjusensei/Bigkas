/**
 * FERDataCollector.tsx
 * -------------------------------------------------------------------
 * Collects face photos for training the FER model during speaking
 * practice, then asks the learner how the activity felt and uses that
 * answer as the photos' label.
 *
 * Adapted for Bigkas:
 * - No hidden camera. It takes photos from the speaking camera the learner
 *   can already see (pass PracticeCamera's photo output).
 * - Nothing is saved until the learner agrees on the "Help train" card,
 *   and a banner shows while photos are being saved. "Stop" ends it.
 * - Photos are cropped to a 224×224 square and stay on this phone until
 *   someone exports them from the dev-only FER data screen (/fer-data).
 * - Off unless dataCollectionMode (FER_DATA_COLLECTION_ENABLED: dev builds).
 *
 * Usage:
 *   <FERDataCollector
 *     sessionId={lesson.lessonId}
 *     active={cameraOn}
 *     photoOutput={photoOutput}
 *     dataCollectionMode={FER_DATA_COLLECTION_ENABLED}
 *   />
 * -------------------------------------------------------------------
 */
import { File } from "expo-file-system";
import { useCallback, useEffect, useRef, useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import type { CameraPhotoOutput } from "react-native-vision-camera";

import { FER_COLLECT_INTERVAL_MS } from "../../constant/fer";
import { captureFaceImage } from "../../services/ferCapture";
import {
  FER_SELF_REPORT_OPTIONS,
  type FERFrameMeta,
  type FERLabel,
  uriToPath,
} from "../../utils/fer";
import { ferDataDirectory, writeFrameMeta } from "./ferStorage";

export type { FERLabel as EmotionLabel } from "../../utils/fer";

type Props = {
  sessionId: string;
  // Collect only while true (the camera is on screen).
  active: boolean;
  photoOutput: CameraPhotoOutput;
  onEmotionSelfReport?: (label: FERLabel, frames: FERFrameMeta[]) => void;
  showSelfReportAfterSeconds?: number;
  // false = renders nothing and saves nothing.
  dataCollectionMode?: boolean;
};

// The learner's answer to the "Help train" card, asked once per app run.
let consentThisRun: boolean | null = null;

export function FERDataCollector({
  sessionId,
  active,
  photoOutput,
  onEmotionSelfReport,
  showSelfReportAfterSeconds = 30,
  dataCollectionMode = false,
}: Props) {
  const [consent, setConsent] = useState<boolean | null>(consentThisRun);
  const [showReport, setShowReport] = useState(false);
  const [saved, setSaved] = useState(0);
  const framesRef = useRef<FERFrameMeta[]>([]);

  const answer = (value: boolean) => {
    consentThisRun = value;
    setConsent(value);
  };

  const collecting = dataCollectionMode && active && consent === true;

  const captureFrame = useCallback(async () => {
    try {
      const image = await captureFaceImage(photoOutput);
      if (!image) return;
      const timestamp = Date.now();
      const path = uriToPath(
        new File(ferDataDirectory(), `${sessionId}_${timestamp}.jpg`).uri,
      );
      await image.saveToFileAsync(path, "jpg", 90);
      framesRef.current.push({ path, sessionId, timestamp });
      setSaved((count) => count + 1);
    } catch {
      // best-effort: a missed photo doesn't matter
    }
  }, [photoOutput, sessionId]);

  useEffect(() => {
    if (!collecting) return;
    const interval = setInterval(captureFrame, FER_COLLECT_INTERVAL_MS);
    const reportTimer = setTimeout(
      () => setShowReport(true),
      showSelfReportAfterSeconds * 1000,
    );
    return () => {
      clearInterval(interval);
      clearTimeout(reportTimer);
    };
  }, [collecting, captureFrame, showSelfReportAfterSeconds]);

  const finishWith = useCallback(
    (label: FERLabel | null) => {
      setShowReport(false);
      const frames = framesRef.current;
      framesRef.current = [];
      if (!frames.length) return;
      // Skipped: keep the photos unlabeled so they can be labeled later.
      const labeled = frames.map((frame) => (label ? { ...frame, label } : frame));
      try {
        writeFrameMeta(sessionId, labeled);
      } catch (error) {
        console.warn("[FER] Couldn't save labels:", error);
      }
      if (label) onEmotionSelfReport?.(label, labeled);
    },
    [sessionId, onEmotionSelfReport],
  );

  // Save what was collected when the activity ends.
  useEffect(() => {
    if (!collecting) return;
    return () => {
      if (framesRef.current.length) finishWith(null);
    };
  }, [collecting, finishWith]);

  if (!dataCollectionMode || !active || consent === false) return null;

  if (consent === null) {
    return (
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Help train Bigkas FER?</Text>
        <Text style={styles.cardSub}>
          While you practise, the camera saves a photo of your face every 2
          seconds on this phone. They only leave the phone if they are
          exported. You can stop at any time.
        </Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.primary} onPress={() => answer(true)}>
            <Text style={styles.primaryText}>Yes, help</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondary} onPress={() => answer(false)}>
            <Text style={styles.secondaryText}>No thanks</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>
          ● Saving face photos for FER training ({saved})
        </Text>
        <TouchableOpacity
          onPress={() => {
            finishWith(null);
            answer(false);
          }}
          accessibilityRole="button"
        >
          <Text style={styles.stop}>Stop</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={showReport} transparent animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.modalCard}>
            <Text style={styles.cardTitle}>How was that activity?</Text>
            <Text style={styles.cardSub}>
              Tap the emoji that best matches how you felt.
            </Text>
            <View style={styles.emojiRow}>
              {FER_SELF_REPORT_OPTIONS.map(({ label, emoji, text }) => (
                <TouchableOpacity
                  key={label}
                  style={styles.emojiBtn}
                  onPress={() => finishWith(label)}
                >
                  <Text style={styles.emoji}>{emoji}</Text>
                  <Text style={styles.emojiLabel}>{text}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity onPress={() => finishWith(null)}>
              <Text style={styles.skip}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#E3E3E3",
  },
  row: { flexDirection: "row", gap: 10, marginTop: 4 },
  primary: {
    flex: 1,
    backgroundColor: "#1a73e8",
    borderRadius: 10,
    minHeight: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryText: { color: "#FFFFFF", fontWeight: "700" },
  secondary: {
    flex: 1,
    borderRadius: 10,
    minHeight: 44,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#BDBDBD",
  },
  secondaryText: { color: "#333333", fontWeight: "600" },
  banner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FDECEA",
    borderRadius: 10,
    paddingHorizontal: 12,
    minHeight: 44,
    marginTop: 8,
  },
  bannerText: { color: "#B3261E", fontSize: 13, fontWeight: "600", flex: 1 },
  stop: { color: "#B3261E", fontWeight: "700", padding: 8 },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 24,
    width: "85%",
    alignItems: "center",
  },
  cardTitle: { fontSize: 18, fontWeight: "700", marginBottom: 6, textAlign: "center" },
  cardSub: { fontSize: 13, color: "#666666", marginBottom: 16, textAlign: "center" },
  emojiRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 16,
  },
  emojiBtn: { alignItems: "center", padding: 8, minWidth: 44 },
  emoji: { fontSize: 36, marginBottom: 4 },
  emojiLabel: { fontSize: 11, color: "#444444", textAlign: "center" },
  skip: { fontSize: 13, color: "#999999", marginTop: 4, padding: 8 },
});
