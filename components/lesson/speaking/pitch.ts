import { Buffer } from "buffer";
import * as FileSystem from "expo-file-system/legacy";
import Pitchfinder from "pitchfinder";

import {
  PITCH_PILOT_LOW_MAX_HZ,
  PITCH_PILOT_MEDIUM_MAX_HZ,
} from "../../../app/components/Practice/PracticeTone";
import { ExpectedTone } from "../../../types/practice";

// Pitch over time from the recording saved by speech recognition, all on
// the phone. Compares the overall level and the ending shape (rise / fall
// / level) with a guide shape — never exact notes, since voices differ.
// Same YIN detector and pitch bands as PracticeTone.

export type PitchPoint = { t: number; hz: number }; // t: 0..1 of the utterance
export type PitchShape = "rise" | "fall" | "level";

export type PitchAnalysis = {
  points: PitchPoint[];
  medianHz: number;
  level: ExpectedTone;
  shape: PitchShape;
};

export type PitchComparison = {
  levelMatches: boolean | null; // null when the phrase has no target tone
  shapeMatches: boolean;
  comment: string;
};

const MIN_HZ = 60;
const MAX_HZ = 450;
const MAX_SECONDS = 10; // keeps the analysis quick on long recordings
const SHAPE_SEMITONES = 1.5;

// Band centres and edges for drawing the target band.
export const TONE_BANDS: Record<ExpectedTone, { min: number; max: number }> = {
  low: { min: MIN_HZ, max: PITCH_PILOT_LOW_MAX_HZ },
  medium: { min: PITCH_PILOT_LOW_MAX_HZ, max: PITCH_PILOT_MEDIUM_MAX_HZ },
  high: { min: PITCH_PILOT_MEDIUM_MAX_HZ, max: 320 },
};

const semitones = (hz: number, reference: number) =>
  12 * Math.log2(hz / reference);

const median = (values: number[]) => {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)] ?? 0;
};

export const levelForHz = (hz: number): ExpectedTone =>
  hz <= PITCH_PILOT_LOW_MAX_HZ
    ? "low"
    : hz <= PITCH_PILOT_MEDIUM_MAX_HZ
      ? "medium"
      : "high";

// Reads a 16-bit PCM WAV file (what expo-speech-recognition saves on
// Android) into mono float samples.
async function readWav(
  uri: string,
): Promise<{ samples: Float32Array; sampleRate: number } | null> {
  const base64 = await FileSystem.readAsStringAsync(uri, {
    encoding: FileSystem.EncodingType.Base64,
  });
  const bytes = Buffer.from(base64, "base64");
  if (bytes.length < 44 || bytes.toString("ascii", 0, 4) !== "RIFF") {
    return null;
  }

  let offset = 12;
  let sampleRate = 16000;
  let channels = 1;
  let bitsPerSample = 16;
  while (offset + 8 <= bytes.length) {
    const id = bytes.toString("ascii", offset, offset + 4);
    const size = bytes.readUInt32LE(offset + 4);
    const body = offset + 8;
    if (id === "fmt ") {
      channels = bytes.readUInt16LE(body + 2);
      sampleRate = bytes.readUInt32LE(body + 4);
      bitsPerSample = bytes.readUInt16LE(body + 14);
    } else if (id === "data") {
      if (bitsPerSample !== 16) return null;
      const frameBytes = 2 * channels;
      const available = Math.min(size, bytes.length - body);
      const frameCount = Math.min(
        Math.floor(available / frameBytes),
        sampleRate * MAX_SECONDS,
      );
      const samples = new Float32Array(frameCount);
      for (let i = 0; i < frameCount; i += 1) {
        samples[i] = bytes.readInt16LE(body + i * frameBytes) / 32768;
      }
      return { samples, sampleRate };
    }
    offset = body + size + (size % 2);
  }
  return null;
}

function shapeOf(points: PitchPoint[]): PitchShape {
  if (points.length < 6) return "level";
  const reference = median(points.map((point) => point.hz));
  const middle = points.filter((point) => point.t >= 0.2 && point.t < 0.65);
  const end = points.filter((point) => point.t >= 0.7);
  if (middle.length < 2 || end.length < 2) return "level";
  const change =
    semitones(median(end.map((p) => p.hz)), reference) -
    semitones(median(middle.map((p) => p.hz)), reference);
  if (change > SHAPE_SEMITONES) return "rise";
  if (change < -SHAPE_SEMITONES) return "fall";
  return "level";
}

export async function analyzeRecording(
  uri: string,
): Promise<PitchAnalysis | null> {
  const wav = await readWav(uri);
  if (!wav) return null;
  const { samples, sampleRate } = wav;

  const frameSize = sampleRate >= 32000 ? 2048 : 1024;
  const hop = frameSize / 2;
  const detect = Pitchfinder.YIN({ sampleRate });

  const frames: { index: number; rms: number }[] = [];
  for (let start = 0; start + frameSize <= samples.length; start += hop) {
    let sum = 0;
    for (let i = start; i < start + frameSize; i += 1) {
      sum += samples[i] * samples[i];
    }
    frames.push({ index: start, rms: Math.sqrt(sum / frameSize) });
  }
  if (frames.length === 0) return null;

  // Skip quiet frames: well above the room's noise floor.
  const noiseFloor = median(frames.map((frame) => frame.rms)) * 0.5;
  const threshold = Math.max(0.01, noiseFloor * 3);

  const raw: { index: number; hz: number }[] = [];
  frames.forEach((frame) => {
    if (frame.rms < threshold) return;
    const hz = detect(samples.subarray(frame.index, frame.index + frameSize));
    if (hz && Number.isFinite(hz) && hz >= MIN_HZ && hz <= MAX_HZ) {
      raw.push({ index: frame.index, hz });
    }
  });
  if (raw.length < 5) return null;

  // Drop octave jumps and other outliers far from the speaker's middle.
  const center = median(raw.map((point) => point.hz));
  const stable = raw.filter(
    (point) => Math.abs(semitones(point.hz, center)) <= 7,
  );
  if (stable.length < 5) return null;

  const first = stable[0].index;
  const last = stable[stable.length - 1].index;
  const span = Math.max(1, last - first);
  const points = stable.map((point) => ({
    t: (point.index - first) / span,
    hz: point.hz,
  }));
  const medianHz = median(points.map((point) => point.hz));

  return {
    points,
    medianHz,
    level: levelForHz(medianHz),
    shape: shapeOf(points),
  };
}

// A simple guide line, not a recording: level at the target band (or a
// neutral middle), ending with a fall for statements and a rise for
// questions.
export function guideShapeFor(text: string): PitchShape {
  const trimmed = text.trim();
  if (trimmed.endsWith("?")) return "rise";
  return "fall";
}

export function guideContour(
  text: string,
  tone?: ExpectedTone,
): PitchPoint[] {
  const base = tone
    ? (TONE_BANDS[tone].min + TONE_BANDS[tone].max) / 2
    : 180;
  const shape = guideShapeFor(text);
  const endChange = shape === "rise" ? 4 : -3; // semitones
  const points: PitchPoint[] = [];
  for (let i = 0; i <= 20; i += 1) {
    const t = i / 20;
    const ending = t <= 0.65 ? 0 : (t - 0.65) / 0.35;
    const st = endChange * ending;
    points.push({ t, hz: base * Math.pow(2, st / 12) });
  }
  return points;
}

const SHAPE_WORDS: Record<PitchShape, string> = {
  rise: "rising",
  fall: "falling",
  level: "staying level",
};

export function comparePitch(
  analysis: PitchAnalysis,
  text: string,
  tone?: ExpectedTone,
): PitchComparison {
  const guideShape = guideShapeFor(text);
  const shapeMatches = analysis.shape === guideShape;
  const levelMatches = tone ? analysis.level === tone : null;

  const parts: string[] = [];
  if (shapeMatches) {
    parts.push(`Nice — your voice ended ${SHAPE_WORDS[analysis.shape]}, like the guide.`);
  } else {
    parts.push(
      `Your voice ended ${SHAPE_WORDS[analysis.shape]}; the guide ends ${SHAPE_WORDS[guideShape]}.`,
    );
  }
  if (levelMatches === false && tone) {
    parts.push(
      `It sat in a ${analysis.level} range; this phrase is usually said at a ${tone} level.`,
    );
  }
  parts.push("This is only a guide — every voice is different.");

  return { levelMatches, shapeMatches, comment: parts.join(" ") };
}

export async function deleteRecording(uri: string | null | undefined) {
  if (!uri) return;
  try {
    await FileSystem.deleteAsync(uri, { idempotent: true });
  } catch (error) {
    console.warn("Unable to delete practice recording:", error);
  }
}
