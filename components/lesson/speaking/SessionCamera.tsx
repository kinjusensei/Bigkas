import { Ionicons } from "@expo/vector-icons";
import { FaceDetectionProvider } from "@infinitered/react-native-mlkit-face-detection";
import { useEffect, useMemo, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { usePhotoOutput } from "react-native-vision-camera";

import PracticeCamera from "../../../app/components/Practice/PracticeCamera";
import { FER_DATA_COLLECTION_ENABLED } from "../../../constant/fer";
import { sourceLabel, useExpressionReader } from "../../../services/expressionReader";
import { describeReading, FERReading, readingNeedsHelp } from "../../../utils/fer";
import { FERDataCollector } from "../../fer/FERDataCollector";
import { LESSON_COLORS, MIN_TOUCH } from "../lessonStyles";

type Props = {
  // Small preview in setup and feedback, larger while recording.
  compact: boolean;
  // Changes per take so ML Kit starts a fresh reading.
  takeKey: number;
  // Names the FER training photos (dev only, components/fer).
  sessionId: string;
  expression: FERReading | null;
  onExpression: (expression: FERReading) => void;
  onTurnOff: () => void;
};

// The speaking activity's one camera, kept on for every phase until the
// learner turns it off. LibreFace on the Bigkas server reads the expression;
// while it's offline the trained on-phone model does, and ML Kit if that
// can't load. Practice insight only, never scored.
export default function SessionCamera({
  compact,
  takeKey,
  sessionId,
  expression,
  onExpression,
  onTurnOff,
}: Props) {
  const photoOutput = usePhotoOutput({ qualityPrioritization: "speed" });
  // Same array between renders, so the camera isn't reconfigured each time.
  const extraOutputs = useMemo(() => [photoOutput], [photoOutput]);
  const [cameraBlocked, setCameraBlocked] = useState(false);
  const reader = useExpressionReader({ enabled: !cameraBlocked, photoOutput });

  useEffect(() => {
    if (reader.reading) onExpression(reader.reading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reader.reading, reader.timestamp]);

  const live = reader.source === "libreface";
  const needsHelp = readingNeedsHelp(expression);

  return (
    <View style={styles.wrap}>
      <View>
        <FaceDetectionProvider
          options={{ performanceMode: "fast", classificationMode: true }}
        >
          <PracticeCamera
            phraseId={takeKey}
            onExpressionConfirmed={(result) => {
              // ML Kit counts only when neither LibreFace nor the model can.
              if (reader.source === "mlkit") onExpression(result.expression);
            }}
            onUnavailable={() => setCameraBlocked(true)}
            onReady={() => setCameraBlocked(false)}
            onContinueWithoutCamera={onTurnOff}
            extraOutputs={extraOutputs}
            hideOverlays
            height={compact ? 120 : 220}
          />
        </FaceDetectionProvider>
        {!compact ? <View style={styles.faceGuide} pointerEvents="none" /> : null}
      </View>

      <View style={styles.barRow}>
        <View style={[styles.dot, live ? styles.dotLive : styles.dotBackup]} />
        <Text style={styles.barText} numberOfLines={1}>
          {sourceLabel(reader.source)}
        </Text>
        <TouchableOpacity
          onPress={onTurnOff}
          style={styles.turnOff}
          accessibilityRole="button"
          accessibilityLabel="Turn off camera hints"
        >
          <Text style={styles.turnOffText}>Turn off</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.expressionChip} accessibilityLiveRegion="polite">
        <Ionicons name="happy-outline" size={14} color={LESSON_COLORS.textSecondary} />
        <Text style={styles.expressionChipText}>
          {expression && expression !== "unknown"
            ? `Looks ${describeReading(expression)}`
            : "Reading expression…"}
        </Text>
        <View style={styles.notScored}>
          <Text style={styles.notScoredText}>Not scored</Text>
        </View>
      </View>

      {needsHelp ? (
        <Text style={styles.help}>
          Take your time. You can listen to the phrase again before you try.
        </Text>
      ) : null}
      {reader.unauthorized ? (
        <Text style={styles.help}>
          The Bigkas server rejected the access key, so your phone is reading
          your expression instead.
        </Text>
      ) : null}
      {__DEV__ ? (
        <Text style={styles.debug}>
          FER (dev): {reader.source ?? "off"} · server{" "}
          {reader.serverOnline === null ? "checking" : reader.serverOnline ? "online" : "offline"}
          {reader.reading ? ` · ${reader.reading}` : ""}
        </Text>
      ) : null}

      <FERDataCollector
        sessionId={sessionId}
        active={!cameraBlocked}
        photoOutput={photoOutput}
        dataCollectionMode={FER_DATA_COLLECTION_ENABLED}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginBottom: 12 },
  faceGuide: {
    position: "absolute",
    top: 24,
    alignSelf: "center",
    width: 130,
    height: 170,
    borderRadius: 85,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "rgba(255,255,255,0.7)",
  },
  barRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 6,
  },
  dot: { width: 8, height: 8, borderRadius: 4 },
  dotLive: { backgroundColor: "#1F8A5B" },
  dotBackup: { backgroundColor: "#C98A00" },
  barText: {
    flex: 1,
    fontSize: 13,
    fontWeight: "700",
    color: LESSON_COLORS.textSecondary,
  },
  turnOff: {
    minHeight: MIN_TOUCH,
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  turnOffText: { fontSize: 14, fontWeight: "800", color: LESSON_COLORS.purple },
  expressionChip: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "#F3F4F6",
  },
  expressionChipText: {
    fontSize: 13,
    fontWeight: "700",
    color: LESSON_COLORS.textSecondary,
  },
  notScored: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    backgroundColor: "#FFFFFF",
  },
  notScoredText: { fontSize: 11, fontWeight: "700", color: LESSON_COLORS.textSecondary },
  help: { marginTop: 8, fontSize: 13, color: LESSON_COLORS.textSecondary },
  debug: {
    marginTop: 6,
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: "#111827",
    color: "#F9FAFB",
    fontSize: 12,
  },
});
