import { useCallback, useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  useCameraDevice,
  useCameraPermission,
} from "react-native-vision-camera";
import type { Face } from "react-native-vision-camera-face-detector";
import { Camera } from "react-native-vision-camera-face-detector";
import {
  ExpectedPracticeExpression,
  PracticeExpression,
  PracticeExpressionResult,
} from "../../../types/practice";

const HAPPY_SMILE_THRESHOLD = 0.7;
const NEUTRAL_SMILE_THRESHOLD = 0.35;
const CONFIRMATION_SAMPLE_COUNT = 3;
const FRAME_THROTTLE_MS = 175; // process at most ~5-6 frames/sec instead of 30+

/**
 * Get the average X coordinate of contour points.
 */
function averageX(points: { x: number; y: number }[]): number {
  if (!points.length) return 0;

  return points.reduce((sum, point) => sum + point.x, 0) / points.length;
}

/**
 * Get the average Y coordinate of contour points.
 */
function averageY(points: { x: number; y: number }[]): number {
  if (!points.length) return 0;

  return points.reduce((sum, point) => sum + point.y, 0) / points.length;
}

/**
 * Distance between two points.
 */
function distance(
  a: { x: number; y: number },
  b: { x: number; y: number },
): number {
  const dx = a.x - b.x;
  const dy = a.y - b.y;

  return Math.sqrt(dx * dx + dy * dy);
}

function isAngryFace(face: Face): boolean {
  const contours = face.contours;

  if (!contours) {
    return false;
  }

  const leftEyebrow = contours.LEFT_EYEBROW_BOTTOM;
  const rightEyebrow = contours.RIGHT_EYEBROW_BOTTOM;
  const leftEye = contours.LEFT_EYE;
  const rightEye = contours.RIGHT_EYE;

  if (
    !leftEyebrow?.length ||
    !rightEyebrow?.length ||
    !leftEye?.length ||
    !rightEye?.length
  ) {
    return false;
  }

  const leftBrowY = averageY(leftEyebrow);
  const rightBrowY = averageY(rightEyebrow);

  const leftEyeY = averageY(leftEye);
  const rightEyeY = averageY(rightEye);

  const leftDistance = Math.abs(leftBrowY - leftEyeY);
  const rightDistance = Math.abs(rightBrowY - rightEyeY);

  const averageBrowEyeDistance = (leftDistance + rightDistance) / 2;

  return averageBrowEyeDistance < 55;
}

function isSadFace(face: Face): boolean {
  const contours = face.contours;

  if (!contours) {
    return false;
  }

  const upperLip = contours.UPPER_LIP_TOP;
  const lowerLip = contours.LOWER_LIP_BOTTOM;
  const leftEyebrow = contours.LEFT_EYEBROW_BOTTOM;
  const rightEyebrow = contours.RIGHT_EYEBROW_BOTTOM;
  const leftEye = contours.LEFT_EYE;
  const rightEye = contours.RIGHT_EYE;

  if (
    !upperLip?.length ||
    !lowerLip?.length ||
    !leftEyebrow?.length ||
    !rightEyebrow?.length ||
    !leftEye?.length ||
    !rightEye?.length
  ) {
    return false;
  }

  const leftEyeCenter = {
    x: averageX(leftEye),
    y: averageY(leftEye),
  };

  const rightEyeCenter = {
    x: averageX(rightEye),
    y: averageY(rightEye),
  };

  const eyeDistance = distance(leftEyeCenter, rightEyeCenter);

  if (eyeDistance === 0) {
    return false;
  }

  const mouthTopY = averageY(upperLip);
  const mouthBottomY = averageY(lowerLip);

  const mouthHeight = Math.abs(mouthBottomY - mouthTopY);

  const normalizedMouthHeight = mouthHeight / eyeDistance;

  const leftBrowY = averageY(leftEyebrow);
  const rightBrowY = averageY(rightEyebrow);

  const leftEyeY = leftEyeCenter.y;
  const rightEyeY = rightEyeCenter.y;

  const leftBrowEyeRatio = Math.abs(leftBrowY - leftEyeY) / eyeDistance;

  const rightBrowEyeRatio = Math.abs(rightBrowY - rightEyeY) / eyeDistance;

  const averageBrowEyeRatio = (leftBrowEyeRatio + rightBrowEyeRatio) / 2;

  return normalizedMouthHeight < 0.55 && averageBrowEyeRatio > 0.2;
}

function classifyExpression(face: Face): PracticeExpression {
  const smilingProbability = face.smilingProbability;

  if (smilingProbability == null) {
    return "unknown";
  }

  if (smilingProbability >= HAPPY_SMILE_THRESHOLD) {
    return "happy";
  }

  if (isAngryFace(face)) {
    return "angry";
  }

  if (isSadFace(face)) {
    return "sad";
  }

  if (smilingProbability <= NEUTRAL_SMILE_THRESHOLD) {
    return "neutral";
  }

  return "unknown";
}

type PracticeCameraProps = {
  expectedExpression: ExpectedPracticeExpression;
  phraseId: number;
  onExpressionConfirmed: (result: PracticeExpressionResult) => void;
};

type DetectionState = {
  faceDetected: boolean;
  expressionStatus: PracticeExpression;
};

export default function PracticeCamera({
  expectedExpression,
  phraseId,
  onExpressionConfirmed,
}: PracticeCameraProps) {
  const device = useCameraDevice("front");
  const { hasPermission, requestPermission } = useCameraPermission();

  const [cameraReady, setCameraReady] = useState(false);
  const [detectionState, setDetectionState] = useState<DetectionState>({
    faceDetected: false,
    expressionStatus: "unknown",
  });
  const [detectionError, setDetectionError] = useState<Error | undefined>();

  const expressionSamplesRef = useRef<PracticeExpression[]>([]);
  const expressionConfirmedRef = useRef(false);
  const lastProcessedAtRef = useRef(0);

  const { faceDetected, expressionStatus } = detectionState;

  const handleFacesDetected = useCallback(
    (detectedFaces: Face[]) => {
      const now = Date.now();

      if (now - lastProcessedAtRef.current < FRAME_THROTTLE_MS) {
        return;
      }

      lastProcessedAtRef.current = now;

      if (detectedFaces.length === 0) {
        expressionSamplesRef.current = [];

        setDetectionState((prev) =>
          prev.faceDetected || prev.expressionStatus !== "unknown"
            ? { faceDetected: false, expressionStatus: "unknown" }
            : prev,
        );

        return;
      }

      const primaryFace = detectedFaces.reduce((largestFace, face) => {
        const largestArea =
          largestFace.bounds.width * largestFace.bounds.height;

        const faceArea = face.bounds.width * face.bounds.height;

        return faceArea > largestArea ? face : largestFace;
      });

      const expression = classifyExpression(primaryFace);

      setDetectionState({ faceDetected: true, expressionStatus: expression });

      if (expression === "unknown" || expressionConfirmedRef.current) {
        return;
      }

      const samples = [...expressionSamplesRef.current, expression].slice(
        -CONFIRMATION_SAMPLE_COUNT,
      );

      expressionSamplesRef.current = samples;

      const matchingSamples = samples.filter(
        (sample) => sample === expectedExpression,
      ).length;

      if (matchingSamples < 2) {
        return;
      }

      expressionConfirmedRef.current = true;

      onExpressionConfirmed({
        expression: expectedExpression,
        smilingProbability: primaryFace.smilingProbability ?? 0,
      });
    },
    [expectedExpression, onExpressionConfirmed],
  );

  const handleDetectionError = useCallback((cameraError: Error) => {
    setDetectionError(cameraError);
  }, []);

  useEffect(() => {
    expressionSamplesRef.current = [];
    expressionConfirmedRef.current = false;
    setDetectionState((prev) => ({ ...prev, expressionStatus: "unknown" }));
  }, [phraseId]);

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);

  if (!hasPermission && !device) {
    return (
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>Checking camera permission...</Text>
      </View>
    );
  }

  if (!hasPermission) {
    return (
      <View style={styles.messageContainer}>
        <Text style={styles.icon}>📷</Text>

        <Text style={styles.title}>Camera Permission</Text>

        <Text style={styles.message}>
          Camera access is needed to detect your face during practice.
        </Text>

        <TouchableOpacity style={styles.button} onPress={requestPermission}>
          <Text style={styles.buttonText}>Allow Camera</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!device) {
    return (
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>Starting camera...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.cameraWrapper}>
        <Camera
          style={styles.camera}
          device={device}
          isActive={true}
          cameraFacing="front"
          performanceMode="fast"
          runClassifications
          runLandmarks
          runContours
          outputResolution="preview"
          onFacesDetected={handleFacesDetected}
          onError={handleDetectionError}
          onStarted={() => {
            console.log("📷 Camera ready");
            setCameraReady(true);
          }}
        />

        <View style={styles.overlay}>
          <View
            style={[
              styles.statusIndicator,
              faceDetected ? styles.faceDetected : styles.faceNotDetected,
            ]}
          />

          <Text style={styles.statusText}>
            {faceDetected ? "Face Detected" : "No Face Detected"}
          </Text>
        </View>

        {faceDetected && (
          <View style={styles.expressionOverlay}>
            <Text style={styles.expressionText}>
              {expressionStatus === "unknown"
                ? "Checking expression..."
                : `Expression: ${expressionStatus}`}
            </Text>

            {expressionStatus !== "unknown" &&
              expressionStatus !== expectedExpression && (
                <Text style={styles.expressionHint}>
                  Try a {expectedExpression} expression
                </Text>
              )}
          </View>
        )}

        {!cameraReady && (
          <View style={styles.loadingOverlay}>
            <Text style={styles.loadingText}>Starting camera...</Text>
          </View>
        )}

        {detectionError && (
          <View style={styles.errorBox}>
            <Text style={styles.errorText}>Face detection error</Text>

            <Text style={styles.errorDetails}>{String(detectionError)}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  cameraWrapper: {
    width: "100%",
    height: 280,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#111",
  },

  camera: {
    flex: 1,
  },

  messageContainer: {
    width: "100%",
    minHeight: 220,
    borderRadius: 20,
    backgroundColor: "#F5F3FF",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  icon: {
    fontSize: 36,
    marginBottom: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "800",
    color: "#333",
    marginBottom: 8,
  },

  message: {
    fontSize: 13,
    color: "#777",
    textAlign: "center",
    lineHeight: 19,
    marginBottom: 15,
  },

  messageText: {
    fontSize: 14,
    color: "#555",
    fontWeight: "600",
  },

  button: {
    backgroundColor: "#5E3BEE",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },

  overlay: {
    position: "absolute",
    left: 15,
    right: 15,
    bottom: 15,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "rgba(0,0,0,0.65)",
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 20,
  },

  statusIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },

  faceDetected: {
    backgroundColor: "#22C55E",
  },

  faceNotDetected: {
    backgroundColor: "#EF4444",
  },

  statusText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },

  expressionOverlay: {
    position: "absolute",
    top: 15,
    alignSelf: "center",
    backgroundColor: "rgba(0,0,0,0.65)",
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 14,
    alignItems: "center",
  },

  expressionText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
    textTransform: "capitalize",
  },

  expressionHint: {
    color: "#FDE68A",
    fontSize: 11,
    fontWeight: "600",
    marginTop: 2,
    textTransform: "capitalize",
  },

  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  loadingText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },

  errorBox: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
    backgroundColor: "rgba(220,38,38,0.9)",
    padding: 10,
    borderRadius: 8,
  },

  errorText: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 12,
  },

  errorDetails: {
    color: "#FFFFFF",
    fontSize: 10,
    marginTop: 3,
  },
});
