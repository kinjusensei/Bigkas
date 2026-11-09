// Shared, app-free logic for the trained FER model (services/FERInferenceService.ts)
// and its training data (components/fer). No React Native imports, so
// utils/fer.test.ts runs with plain `node --test`.

// The learner's self-report after an activity, used as the training label.
// The collector, the exporter and the model all use exactly this list.
export type FERLabel = "engaged" | "neutral" | "confused" | "frustrated";

export const FER_SELF_REPORT_OPTIONS: {
  label: FERLabel;
  emoji: string;
  text: string;
}[] = [
  { label: "engaged", emoji: "😊", text: "Easy / Fun" },
  { label: "neutral", emoji: "😐", text: "Okay" },
  { label: "confused", emoji: "😕", text: "Confusing" },
  { label: "frustrated", emoji: "😤", text: "Difficult" },
];

// MediaPipe Model Maker numbers classes in alphabetical folder order. Check
// fer_model_output/model_metadata.json → "classes" after training; if it
// differs, change this list to match it.
export const FER_MODEL_CLASSES: readonly FERLabel[] = [
  "confused",
  "engaged",
  "frustrated",
  "neutral",
];

// Labels that suggest the learner is struggling (offer help, never grade).
export const FER_DIFFICULTY_LABELS: readonly FERLabel[] = [
  "confused",
  "frustrated",
];

export const FER_INPUT_SIZE = 224;
export const FER_CONFIDENCE_THRESHOLD = 0.6;
export const FER_CONFIRMATION_COUNT = 3;

export type FERPrediction = {
  emotion: FERLabel;
  confidence: number;
  allScores: Record<FERLabel, number>;
};

// Top class of a softmax output, or null when the output doesn't match the
// classes or no class is confident enough.
export function interpretScores(
  scores: ArrayLike<number>,
  classes: readonly FERLabel[] = FER_MODEL_CLASSES,
  threshold = FER_CONFIDENCE_THRESHOLD,
): FERPrediction | null {
  if (scores.length !== classes.length) return null;
  let top = 0;
  for (let i = 1; i < scores.length; i++) if (scores[i] > scores[top]) top = i;
  if (!(scores[top] >= threshold)) return null;
  const allScores = {} as Record<FERLabel, number>;
  classes.forEach((label, i) => {
    allScores[label] = scores[i];
  });
  return { emotion: classes[top], confidence: scores[top], allScores };
}

// Adds a prediction to the recent ones; confirmed once the last `count` agree.
export function pushConfirmation(
  recent: FERLabel[],
  emotion: FERLabel,
  count = FER_CONFIRMATION_COUNT,
): { recent: FERLabel[]; confirmed: boolean } {
  const next = [...recent, emotion].slice(-count);
  return {
    recent: next,
    confirmed: next.length === count && next.every((e) => e === emotion),
  };
}

// Raw pixels (4 bytes per pixel in the given order, or 3 for RGB/BGR) →
// float32 RGB in 0–1, the input a Model Maker MobileNetV2 classifier expects.
export function pixelsToFloatRgb(
  pixels: Uint8Array,
  width: number,
  height: number,
  pixelFormat: string,
): Float32Array {
  const channels = pixelFormat.length === 3 ? 3 : 4;
  const order = pixelFormat.toUpperCase();
  const r = order.indexOf("R");
  const g = order.indexOf("G");
  const b = order.indexOf("B");
  if (r < 0 || g < 0 || b < 0) {
    throw new Error(`Unsupported pixel format: ${pixelFormat}`);
  }
  const count = width * height;
  if (pixels.length < count * channels) {
    throw new Error("Pixel buffer is smaller than width × height");
  }
  const out = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const p = i * channels;
    out[i * 3] = pixels[p + r] / 255;
    out[i * 3 + 1] = pixels[p + g] / 255;
    out[i * 3 + 2] = pixels[p + b] / 255;
  }
  return out;
}

// Frames saved by the collector, grouped by label, for the exporter.
export type FERFrameMeta = {
  path: string;
  sessionId: string;
  timestamp: number;
  label?: FERLabel;
};

export function countByLabel(frames: FERFrameMeta[]): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const frame of frames) {
    const key = frame.label ?? "unlabeled";
    counts[key] = (counts[key] ?? 0) + 1;
  }
  return counts;
}

// Filesystem path from a file:// URI (zip and image saving need paths).
export function uriToPath(uri: string): string {
  return decodeURIComponent(uri.replace(/^file:\/\//, ""));
}
