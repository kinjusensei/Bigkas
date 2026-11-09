/**
 * FERInferenceService.ts
 * -------------------------------------------------------------------
 * Runs the trained FER model (react-native-fast-tflite) on face photos
 * from the speaking camera. Supplementary only: like the existing FER in
 * PracticeCamera, it never affects a score; "confused" or "frustrated"
 * only lets the screen offer help.
 *
 * Adapted for Bigkas:
 * - VisionCamera v5 has no frame processors for fast-tflite yet, so the
 *   model runs on a photo every FER_INFERENCE_INTERVAL_MS taken from the
 *   camera already on screen (services/ferCapture.ts), not on every frame.
 * - The model is assets/models/fer_bigkas.tflite (bundled by Metro, see
 *   metro.config.js). It's an empty placeholder until one is trained, so
 *   FER_MODEL_ENABLED (constant/fer.ts) stays off until then.
 * - Labels come from utils/fer.ts, shared with the collector and exporter.
 * -------------------------------------------------------------------
 */
import { useCallback, useEffect, useRef, useState } from "react";
import { loadTensorflowModel, type TensorflowModel } from "react-native-fast-tflite";
import type { CameraPhotoOutput } from "react-native-vision-camera";

import { FER_INFERENCE_INTERVAL_MS } from "../constant/fer";
import {
  FER_DIFFICULTY_LABELS,
  FER_MODEL_CLASSES,
  type FERLabel,
  type FERPrediction,
  interpretScores,
  pixelsToFloatRgb,
  pushConfirmation,
} from "../utils/fer";
import { captureFaceImage, type FERImage } from "./ferCapture";

export type { FERLabel as EmotionLabel } from "../utils/fer";

export type EmotionResult = FERPrediction & { timestamp: number };

// ── Model loader ───────────────────────────────────────────────────────────

let modelPromise: Promise<TensorflowModel> | null = null;

export function loadFERModel(): Promise<TensorflowModel> {
  if (!modelPromise) {
    modelPromise = loadTensorflowModel(
      // eslint-disable-next-line @typescript-eslint/no-require-imports -- Metro asset
      require("../assets/models/fer_bigkas.tflite"),
      [],
    ).catch((error) => {
      modelPromise = null; // allow a retry after a new model is added
      throw error;
    });
  }
  return modelPromise;
}

// Runs the model on one square face image and returns its class scores.
export async function classifyFaceImage(
  model: TensorflowModel,
  image: FERImage,
): Promise<number[]> {
  const raw = await image.toRawPixelDataAsync();
  const pixels = new Uint8Array(raw.buffer);
  const input = model.inputs[0];
  let buffer: ArrayBuffer;
  if (input?.dataType === "uint8") {
    // Quantized model: 0–255 RGB bytes.
    const floats = pixelsToFloatRgb(pixels, raw.width, raw.height, raw.pixelFormat);
    buffer = Uint8Array.from(floats, (value) => Math.round(value * 255)).buffer;
  } else {
    buffer = pixelsToFloatRgb(pixels, raw.width, raw.height, raw.pixelFormat).buffer as ArrayBuffer;
  }
  const [output] = await model.run([buffer]);
  const outputType = model.outputs[0]?.dataType;
  return outputType === "uint8"
    ? Array.from(new Uint8Array(output), (value) => value / 255)
    : Array.from(new Float32Array(output));
}

// ── Hook ───────────────────────────────────────────────────────────────────

interface UseFEROptions {
  enabled: boolean;
  // The photo output attached to the speaking camera (PracticeCamera extraOutputs).
  photoOutput: CameraPhotoOutput;
  onEmotionConfirmed?: (result: EmotionResult) => void;
  // "confused" or "frustrated" confirmed: offer a review or a break.
  onDifficultyDetected?: () => void;
}

export function useFERInference({
  enabled,
  photoOutput,
  onEmotionConfirmed,
  onDifficultyDetected,
}: UseFEROptions) {
  const [currentEmotion, setCurrentEmotion] = useState<EmotionResult | null>(null);
  const [modelReady, setModelReady] = useState(false);
  const modelRef = useRef<TensorflowModel | null>(null);
  const recentRef = useRef<FERLabel[]>([]);
  const callbacksRef = useRef({ onEmotionConfirmed, onDifficultyDetected });
  callbacksRef.current = { onEmotionConfirmed, onDifficultyDetected };

  // Load the model once enabled.
  useEffect(() => {
    if (!enabled) return;
    let cancelled = false;
    loadFERModel()
      .then((model) => {
        if (cancelled) return;
        modelRef.current = model;
        setModelReady(true);
      })
      .catch((error) => console.warn("[FER] Model load failed:", error));
    return () => {
      cancelled = true;
    };
  }, [enabled]);

  const handleScores = useCallback((scores: number[]) => {
    const prediction = interpretScores(scores, FER_MODEL_CLASSES);
    if (!prediction) return;
    const { recent, confirmed } = pushConfirmation(recentRef.current, prediction.emotion);
    recentRef.current = recent;
    if (!confirmed) return;
    const result = { ...prediction, timestamp: Date.now() };
    setCurrentEmotion(result);
    callbacksRef.current.onEmotionConfirmed?.(result);
    if (FER_DIFFICULTY_LABELS.includes(prediction.emotion)) {
      callbacksRef.current.onDifficultyDetected?.();
    }
  }, []);

  // Classify a face photo every FER_INFERENCE_INTERVAL_MS while enabled.
  useEffect(() => {
    if (!enabled || !modelReady) return;
    recentRef.current = [];
    let running = false;
    const timer = setInterval(async () => {
      const model = modelRef.current;
      if (running || !model) return;
      running = true;
      try {
        const image = await captureFaceImage(photoOutput);
        if (image) handleScores(await classifyFaceImage(model, image));
      } catch {
        // silent: FER is supplementary
      } finally {
        running = false;
      }
    }, FER_INFERENCE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [enabled, modelReady, photoOutput, handleScores]);

  return { currentEmotion, modelReady: enabled && modelReady };
}
