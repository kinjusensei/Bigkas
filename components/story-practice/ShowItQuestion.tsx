import { FaceDetectionProvider } from "@infinitered/react-native-mlkit-face-detection";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useCameraDevice, useCameraPermission } from "react-native-vision-camera";

import PracticeCamera from "../../app/components/Practice/PracticeCamera";
import type {
  ExpectedPracticeExpression,
  PracticeExpression,
  PracticeExpressionResult,
} from "../../types/practice";
import PracticeBottomBar from "./PracticeBottomBar";
import { FLOW, FLOW_MIN_TAP } from "./practiceTheme";
import QuestionCard from "./QuestionCard";

type Props = {
  label: string;
  prompt: string;
  questionId: number;
  expectedExpression?: ExpectedPracticeExpression;
  onExpressionConfirmed: (result: PracticeExpressionResult) => void;
  // "I'm done" and Skip both complete the question.
  onDone: () => void;
  onSkip: () => void;
};

// Show It. The camera is optional and what it sees is never scored or saved.
export default function ShowItQuestion({
  label,
  prompt,
  questionId,
  expectedExpression,
  onExpressionConfirmed,
  onDone,
  onSkip,
}: Props) {
  const device = useCameraDevice("front");
  const { hasPermission, requestPermission } = useCameraPermission();
  const [cameraOn, setCameraOn] = useState(true);
  const [failed, setFailed] = useState(false);
  const [checking, setChecking] = useState(!hasPermission);
  const [detected, setDetected] = useState<PracticeExpression>("unknown");

  useEffect(() => {
    if (hasPermission) {
      setChecking(false);
      return;
    }
    let cancelled = false;
    requestPermission()
      .catch(() => false)
      .finally(() => {
        if (!cancelled) setChecking(false);
      });
    return () => {
      cancelled = true;
    };
  }, [hasPermission, requestPermission]);

  const canUseCamera = hasPermission && !!device && !failed;
  const showCamera = canUseCamera && cameraOn;

  return (
    <>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <QuestionCard
          label={label}
          instruction="Show how you would feel. Hold the expression, then tap done."
        />

        <Text style={[styles.prompt, prompt.length > 70 && styles.promptLong]}>
          {prompt}
        </Text>

        {showCamera ? (
          <View style={styles.cameraArea}>
            <View style={styles.hintRow}>
              <View style={styles.pill}>
                <Text style={styles.pillText} numberOfLines={1}>
                  Camera hints on · stays on this phone
                </Text>
              </View>
              <Pressable
                onPress={() => {
                  setCameraOn(false);
                  setDetected("unknown");
                }}
                style={styles.link}
                accessibilityRole="button"
                accessibilityLabel="Turn off camera"
              >
                <Text style={styles.linkText}>Turn off</Text>
              </Pressable>
            </View>

            <View style={styles.preview}>
              <View style={styles.placeholder} pointerEvents="none">
                <Ionicons
                  name="sad-outline"
                  size={88}
                  color={FLOW.cameraFace}
                />
              </View>
              <FaceDetectionProvider
                options={{
                  performanceMode: "fast",
                  classificationMode: true,
                }}
              >
                <PracticeCamera
                  expectedExpression={expectedExpression}
                  phraseId={questionId}
                  onExpressionConfirmed={onExpressionConfirmed}
                  onUnavailable={() => setFailed(true)}
                  onExpressionChange={setDetected}
                  hideOverlays
                  height={210}
                />
              </FaceDetectionProvider>

              {detected !== "unknown" ? (
                <View
                  pointerEvents="none"
                  style={styles.detected}
                  accessibilityLiveRegion="polite"
                >
                  <Text style={styles.detectedText}>
                    Looks {detected} · Not scored
                  </Text>
                </View>
              ) : null}
            </View>
          </View>
        ) : checking ? null : (
          <View style={styles.offCard}>
            <Ionicons name="videocam-off-outline" size={24} color={FLOW.purple} />
            <Text style={styles.offText}>
              Camera is off. You can still continue.
            </Text>
            {canUseCamera ? (
              <Pressable
                onPress={() => setCameraOn(true)}
                style={styles.link}
                accessibilityRole="button"
                accessibilityLabel="Turn on camera"
              >
                <Text style={styles.linkText}>Turn on</Text>
              </Pressable>
            ) : null}
          </View>
        )}

        <Text style={styles.privacy}>
          Your expression never changes your score. No photos or video are saved.
        </Text>
      </ScrollView>

      <PracticeBottomBar
        label="I'm done"
        onPress={onDone}
        textLabel="Skip"
        onTextPress={onSkip}
        textAccessibilityLabel="Skip this question"
      />
    </>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1 },

  content: { padding: 20, paddingTop: 16 },

  prompt: {
    marginTop: 12,
    fontSize: 23,
    lineHeight: 29,
    fontWeight: "800",
    color: FLOW.deepPurple,
    textAlign: "center",
  },

  promptLong: { fontSize: 18, lineHeight: 25 },

  cameraArea: { marginTop: 14 },

  hintRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },

  pill: {
    flexShrink: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: FLOW.tint,
  },

  pillText: {
    flexShrink: 1,
    fontSize: 13,
    fontWeight: "700",
    color: FLOW.deepPurple,
  },

  link: {
    minHeight: FLOW_MIN_TAP,
    minWidth: FLOW_MIN_TAP,
    alignItems: "center",
    justifyContent: "center",
  },

  linkText: { fontSize: 14, fontWeight: "800", color: FLOW.purple },

  preview: {
    marginTop: 6,
    borderRadius: 22,
    overflow: "hidden",
    backgroundColor: FLOW.cameraBackground,
  },

  // Behind the camera, so it shows only until the preview starts.
  placeholder: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },

  detected: {
    position: "absolute",
    left: 12,
    bottom: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.92)",
  },

  detectedText: { fontSize: 13, fontWeight: "800", color: FLOW.deepPurple },

  offCard: {
    alignItems: "center",
    gap: 8,
    marginTop: 14,
    padding: 20,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: FLOW.border,
    backgroundColor: FLOW.white,
  },

  offText: {
    fontSize: 15,
    lineHeight: 21,
    color: FLOW.muted,
    textAlign: "center",
  },

  privacy: {
    marginTop: 14,
    fontSize: 14,
    lineHeight: 19,
    color: FLOW.mutedLight,
    textAlign: "center",
  },
});
