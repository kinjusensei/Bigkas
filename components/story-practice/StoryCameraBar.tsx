import { Ionicons } from "@expo/vector-icons";
import { FaceDetectionProvider } from "@infinitered/react-native-mlkit-face-detection";
import { useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useCameraPermission, usePhotoOutput } from "react-native-vision-camera";

import PracticeCamera from "../../app/components/Practice/PracticeCamera";
import { useCameraHintsPreference } from "../../services/cameraPreference";
import { sourceLabel, useExpressionReader } from "../../services/expressionReader";
import { describeReading, type FERReading, readingNeedsHelp } from "../../utils/fer";
import { FLOW, FLOW_MIN_TAP } from "./practiceTheme";

// Camera hints across a whole story practice: a small live camera above
// every question, on until the learner turns it off (the same remembered
// setting as the lessons). LibreFace reads the expression; the phone's FER
// takes over while the server is offline. Never scored. Show It hides this
// bar because it uses the camera itself.
export default function StoryCameraBar() {
  const [cameraHints, setCameraHints] = useCameraHintsPreference();
  const { hasPermission, requestPermission } = useCameraPermission();
  const [notice, setNotice] = useState<string | null>(null);

  const turnOn = async () => {
    setNotice(null);
    let granted = hasPermission;
    if (!granted) {
      try {
        granted = await requestPermission();
      } catch {
        granted = false;
      }
    }
    if (granted) setCameraHints(true);
    else setNotice("Camera not allowed — that's fine, you can practise without it.");
  };

  if (!cameraHints || !hasPermission) {
    return (
      <View style={styles.offRow}>
        <Pressable
          onPress={turnOn}
          style={styles.offButton}
          accessibilityRole="button"
          accessibilityLabel="Turn on camera hints"
        >
          <Ionicons name="videocam-outline" size={16} color={FLOW.deepPurple} />
          <Text style={styles.offText}>Camera hints off · Turn on</Text>
        </Pressable>
        {notice ? <Text style={styles.notice}>{notice}</Text> : null}
      </View>
    );
  }
  return <LiveBar onTurnOff={() => setCameraHints(false)} />;
}

function LiveBar({ onTurnOff }: { onTurnOff: () => void }) {
  const photoOutput = usePhotoOutput({ qualityPrioritization: "speed" });
  const extraOutputs = useMemo(() => [photoOutput], [photoOutput]);
  const [cameraBlocked, setCameraBlocked] = useState(false);
  const [mlkit, setMlkit] = useState<FERReading | null>(null);
  const reader = useExpressionReader({ enabled: !cameraBlocked, photoOutput });
  const reading = reader.source === "mlkit" ? mlkit : reader.reading;
  const live = reader.source === "libreface";

  return (
    <View style={styles.bar}>
      <View style={styles.thumb}>
        <FaceDetectionProvider
          options={{ performanceMode: "fast", classificationMode: true }}
        >
          <PracticeCamera
            phraseId={0}
            onExpressionConfirmed={(result) => setMlkit(result.expression)}
            onUnavailable={() => setCameraBlocked(true)}
            onReady={() => setCameraBlocked(false)}
            onContinueWithoutCamera={onTurnOff}
            extraOutputs={extraOutputs}
            hideOverlays
            height={56}
          />
        </FaceDetectionProvider>
      </View>
      <View style={styles.text}>
        <View style={styles.titleRow}>
          <View style={[styles.dot, live ? styles.dotLive : styles.dotBackup]} />
          <Text style={styles.title} numberOfLines={1}>
            {cameraBlocked ? "Camera unavailable right now" : sourceLabel(reader.source)}
          </Text>
        </View>
        <Text style={styles.sub} numberOfLines={2} accessibilityLiveRegion="polite">
          {reading && reading !== "unknown"
            ? readingNeedsHelp(reading)
              ? `Looks ${describeReading(reading)} · take your time`
              : `Looks ${describeReading(reading)} · not scored`
            : "Reading expression… · not scored"}
        </Text>
      </View>
      <Pressable
        onPress={onTurnOff}
        style={styles.turnOff}
        accessibilityRole="button"
        accessibilityLabel="Turn off camera hints"
      >
        <Text style={styles.turnOffText}>Turn off</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  offRow: { paddingHorizontal: 20, paddingTop: 8 },
  offButton: {
    alignSelf: "flex-start",
    minHeight: FLOW_MIN_TAP,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 12,
    borderRadius: 22,
    backgroundColor: FLOW.tint,
  },
  offText: { fontSize: 13, fontWeight: "700", color: FLOW.deepPurple },
  notice: { marginTop: 6, fontSize: 13, color: FLOW.muted },
  bar: {
    marginHorizontal: 20,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 8,
    paddingRight: 4,
    borderRadius: 16,
    backgroundColor: FLOW.cameraBackground,
  },
  thumb: { width: 56, height: 56, borderRadius: 12, overflow: "hidden" },
  text: { flex: 1, minWidth: 0 },
  titleRow: { flexDirection: "row", alignItems: "center", gap: 6 },
  dot: { width: 8, height: 8, borderRadius: 4 },
  dotLive: { backgroundColor: "#7BE0A4" },
  dotBackup: { backgroundColor: "#F3C969" },
  title: { flexShrink: 1, fontSize: 13, fontWeight: "800", color: FLOW.white },
  sub: { marginTop: 2, fontSize: 12, color: FLOW.lightPurple },
  turnOff: {
    minHeight: FLOW_MIN_TAP,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  turnOffText: { fontSize: 13, fontWeight: "700", color: FLOW.lightPurple },
});
