// One expression reading for lessons and stories, from the best FER
// available right now:
//   1. LibreFace on the Bigkas server (services/libreFace.ts)
//   2. the trained on-phone model, while the server is offline
//      (services/FERInferenceService.ts)
//   3. ML Kit, when the on-phone model can't load: the caller passes
//      PracticeCamera's ML Kit expression through (source "mlkit").
// Readings are practice insights only; they never change a score.
import type { CameraPhotoOutput } from "react-native-vision-camera";

import { FER_MODEL_ENABLED, LIBREFACE_ENABLED } from "../constant/fer";
import type { FERReading } from "../utils/fer";
import { useFERInference } from "./FERInferenceService";
import { useLibreFace } from "./libreFace";

export type ExpressionSource = "libreface" | "phone-model" | "mlkit";

type Options = {
  enabled: boolean;
  photoOutput: CameraPhotoOutput;
};

export function useExpressionReader({ enabled, photoOutput }: Options) {
  const libre = useLibreFace({
    enabled: enabled && LIBREFACE_ENABLED,
    photoOutput,
  });
  // Until LibreFace has answered once, and whenever it's unreachable, the
  // phone covers for it (both share the camera; captures never overlap).
  const libreAnswering = LIBREFACE_ENABLED && libre.online === true;
  const backupOn = enabled && !libreAnswering;
  const fer = useFERInference({
    enabled: backupOn && FER_MODEL_ENABLED,
    photoOutput,
  });
  const phoneModelWorks = FER_MODEL_ENABLED && !fer.loadError;

  const source: ExpressionSource | null = !enabled
    ? null
    : libreAnswering
      ? "libreface"
      : phoneModelWorks
        ? "phone-model"
        : "mlkit";

  const reading: FERReading | null =
    source === "libreface"
      ? libre.reading
      : source === "phone-model"
        ? (fer.currentEmotion?.emotion ?? null)
        : null;
  const timestamp =
    source === "libreface" ? libre.timestamp : (fer.currentEmotion?.timestamp ?? 0);

  return {
    source,
    reading,
    timestamp,
    // The server answered at least once while this was on.
    serverOnline: libre.online,
    unauthorized: libre.unauthorized,
  };
}

/** Short label for the camera bar. */
export function sourceLabel(source: ExpressionSource | null): string {
  if (source === "libreface") return "LibreFace on · until you turn it off";
  if (source === "phone-model") return "Phone FER on (server offline)";
  if (source === "mlkit") return "Camera hints on (server offline)";
  return "Camera hints off";
}
