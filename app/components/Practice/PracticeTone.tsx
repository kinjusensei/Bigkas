import { Buffer } from "buffer";
import * as FileSystem from "expo-file-system/legacy";
import { ExpoSpeechRecognitionModule } from "expo-speech-recognition";
import Pitchfinder from "pitchfinder";
import { useCallback, useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import LiveAudioStream from "react-native-live-audio-stream";

const SAMPLE_RATE = 16000;
const FRAME_SIZE = 2048; // samples per pitch-detection window
const HOP_SIZE = FRAME_SIZE / 2; // 50% overlap between frames

// Voice activity detection thresholds — tune against real usage.
const SPEECH_AMPLITUDE_THRESHOLD = 0.12; // above this = someone is talking
const SILENCE_TIMEOUT_MS = 800; // pause length that ends an utterance
const MIN_SPEECH_DURATION_MS = 300; // ignore blips shorter than this

// Pitch bands used by the current lesson data. These are broad speaking
// intonation bands, not lexical-tone rules.
const LOW_MAX_HZ = 140;
const MEDIUM_MAX_HZ = 220;
const MIN_PITCH_HZ = 60;
const MAX_PITCH_HZ = 450;

// Pilot-only acoustic categories. These are provisional speaking-pitch
// boundaries, not validated Tagalog, Kapampangan, or Waray references.
export const PITCH_PILOT_LOW_MAX_HZ = 140;
export const PITCH_PILOT_MEDIUM_MAX_HZ = 220;

// Vowel-length threshold — an utterance at or below this is "short",
// above it is "long". This is a rough starting point (same caveat as the
// pitch bands above): tune it against real recordings of your target
// dialect's short vs. long vowels before relying on it.
const SHORT_VOWEL_MAX_MS = 450;
const PILOT_SAMPLE_RATE = SAMPLE_RATE;
const PILOT_BUFFER_SIZE = 1024;
const PILOT_MIN_RMS = 0.015;
const PILOT_NOISE_MULTIPLIER = 3;
const PILOT_STOP_NOISE_MULTIPLIER = 2;
const PILOT_HANGOVER_MS = 120;
const PILOT_MIN_ACTIVE_MS = 120;
const PILOT_MAX_ACTIVE_MS = 2500;

export type ToneLevel = "low" | "medium" | "high" | "unknown";
export type VowelLength = "short" | "long" | "unknown";

export type PitchContourPoint = {
  timeMs: number;
  hz: number;
};

export type PitchPilotMeasurement = {
  activeDurationMs: number;
  meanIntensityRms: number;
  f0MedianHz: number | null;
  pitchContour: PitchContourPoint[];
  pitchPointCount: number;
  noiseFloorRms: number;
  activityThresholdRms: number;
  reliable: boolean;
  referenceDataAvailable: false;
};

export type PitchPilotClassification =
  | "Low Pitch"
  | "Medium Pitch"
  | "High Pitch"
  | "Insufficient Data";

type PracticeToneProps = {
  expectedTone: ToneLevel;
  pitchPilotMode?: boolean;
  // Optional: only needed for words/screens that also care about vowel length.
  expectedVowelLength?: VowelLength;
  onUnavailable?: () => void;
  onPitchUpdate?: (frequencyHz: number) => void;
  onPitchMeasured?: (measurement: PitchPilotMeasurement) => void;
  onToneConfirmed: (result: {
    tone: ToneLevel;
    averagePitch: number;
    vowelLength: VowelLength;
    durationMs: number;
    reliable: boolean;
  }) => void;
};

const detectPitch = Pitchfinder.YIN({ sampleRate: SAMPLE_RATE });

/**
 * Classify the average pitch of an utterance into Low / Medium / High.
 */
function classifyPitchLevel(pitchPoints: number[]): {
  tone: ToneLevel;
  averagePitch: number;
} {
  const finitePoints = pitchPoints.filter(
    (pitch) => Number.isFinite(pitch) && pitch > 0,
  );

  if (finitePoints.length < 5) {
    return { tone: "unknown", averagePitch: 0 };
  }

  const sorted = [...finitePoints].sort((a, b) => a - b);
  const median = sorted[Math.floor(sorted.length / 2)];

  // YIN can occasionally return octave errors or other isolated outliers.
  // Reject only points far from the speaker's current utterance cluster,
  // then classify the remaining median. This keeps natural voice variation
  // while preventing one bad frame from changing the result.
  const deviations = sorted.map((pitch) => Math.abs(pitch - median));
  const deviationMedian =
    [...deviations].sort((a, b) => a - b)[
      Math.floor(deviations.length / 2)
    ];
  const outlierDistance = Math.max(35, deviationMedian * 3.5);
  const stablePoints = finitePoints.filter(
    (pitch) => Math.abs(pitch - median) <= outlierDistance,
  );

  if (stablePoints.length < 5) {
    return { tone: "unknown", averagePitch: 0 };
  }

  const stableSorted = [...stablePoints].sort((a, b) => a - b);
  const stableMedian =
    stableSorted[Math.floor(stableSorted.length / 2)];

  if (stableMedian <= LOW_MAX_HZ) {
    return { tone: "low", averagePitch: stableMedian };
  }

  if (stableMedian <= MEDIUM_MAX_HZ) {
    return { tone: "medium", averagePitch: stableMedian };
  }

  return { tone: "high", averagePitch: stableMedian };
}

export function classifyPitchPilotMeasurement(
  measurement: Pick<
    PitchPilotMeasurement,
    "pitchContour" | "pitchPointCount" | "reliable"
  >,
): PitchPilotClassification {
  const validPoints = measurement.pitchContour
    .map((point) => point.hz)
    .filter(
      (pitch) => Number.isFinite(pitch) && pitch > 0,
    );

  if (
    !measurement.reliable ||
    measurement.pitchPointCount < 5 ||
    validPoints.length < 5
  ) {
    return "Insufficient Data";
  }

  const summary = classifyPitchLevel(validPoints);
  if (summary.tone === "unknown") {
    return "Insufficient Data";
  }

  if (summary.averagePitch <= PITCH_PILOT_LOW_MAX_HZ) {
    return "Low Pitch";
  }

  if (summary.averagePitch <= PITCH_PILOT_MEDIUM_MAX_HZ) {
    return "Medium Pitch";
  }

  return "High Pitch";
}

/**
 * Classify how long the utterance was held into Short / Long.
 * This is independent of pitch — a vowel can be short or long regardless
 * of whether it was spoken in a low, medium, or high pitch.
 */
function classifyVowelLength(durationMs: number): VowelLength {
  if (durationMs <= 0) {
    return "unknown";
  }

  return durationMs <= SHORT_VOWEL_MAX_MS ? "short" : "long";
}

/**
 * Encode raw float samples (-1..1) as a base64-encoded 16-bit PCM WAV file,
 * useful for debugging by listening to exactly what was captured.
 */
function pcmToWav(samples: number[], sampleRate: number): string {
  const startedAt = Date.now();
  const sampleCount = samples.length;
  const inputBytes = sampleCount * 2;
  console.log("[PracticeTone][WAV] conversion start", {
    timestampMs: startedAt,
    sampleCount,
    inputBytes,
    sampleRate,
  });
  const buffer = new ArrayBuffer(44 + samples.length * 2);
  const view = new DataView(buffer);

  function writeString(offset: number, str: string) {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i));
    }
  }

  writeString(0, "RIFF");
  view.setUint32(4, 36 + samples.length * 2, true);
  writeString(8, "WAVE");
  writeString(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeString(36, "data");
  view.setUint32(40, samples.length * 2, true);

  let offset = 44;
  for (const sample of samples) {
    const s = Math.max(-1, Math.min(1, sample));
    view.setInt16(offset, s < 0 ? s * 32768 : s * 32767, true);
    offset += 2;
  }

  let binary = "";
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  const result = btoa(binary);
  console.log("[PracticeTone][WAV] conversion end", {
    timestampMs: Date.now(),
    durationMs: Date.now() - startedAt,
    sampleCount,
    inputBytes,
    outputBytes: buffer.byteLength,
    base64Chars: result.length,
  });
  return result;
}

export default function PracticeTone({
  expectedTone,
  pitchPilotMode = false,
  expectedVowelLength,
  onUnavailable,
  onPitchUpdate,
  onPitchMeasured,
  onToneConfirmed,
}: PracticeToneProps) {
  const [detectedTone, setDetectedTone] = useState<ToneLevel>("unknown");
  const [detectedVowelLength, setDetectedVowelLength] =
    useState<VowelLength>("unknown");
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const pitchPointsRef = useRef<number[]>([]);
  const pitchContourRef = useRef<PitchContourPoint[]>([]);
  const pcmBufferRef = useRef<number[]>([]);
  const utteranceSamplesRef = useRef<number[]>([]);

  const isSpeakingRef = useRef(false);
  const speechStartTimeRef = useRef(0);
  const lastVoiceTimeRef = useRef(0);

  // Guards against a leaked "data" listener: react-native-live-audio-stream
  // doesn't expose a reliable way to remove the listener added via .on(),
  // so if a previous instance's listener is still attached when a new one
  // mounts, this flag stops the stale instance from processing/reporting
  // anything once it's unmounted.
  const isActiveRef = useRef(true);
  const hasFinalizedRef = useRef(false);
  const audioSubscriptionRef = useRef<{ remove?: () => void } | null>(null);

  // Vowel-length timing, based on when the pitch detector actually finds a
  // voice (not on loudness). This is what classifyVowelLength() uses.
  const framesConsumedRef = useRef(0);
  const firstVoicedFrameMsRef = useRef<number | null>(null);
  const lastVoicedFrameMsRef = useRef<number | null>(null);
  const pilotElapsedSamplesRef = useRef(0);
  const pilotActivityStartSampleRef = useRef<number | null>(null);
  const pilotLastActiveSampleRef = useRef<number | null>(null);
  const pilotNoiseFloorRmsRef = useRef(PILOT_MIN_RMS);
  const pilotNoiseSampleCountRef = useRef(0);
  const pilotIntensitySumRef = useRef(0);
  const pilotIntensityFrameCountRef = useRef(0);

  /**
   * Called when a pause after speech confirms the utterance is complete.
   * Classifies what was collected, reports it, then resets for the next one.
   */
  const finalizeUtterance = useCallback(() => {
    if (!isActiveRef.current || hasFinalizedRef.current) {
      return;
    }
    hasFinalizedRef.current = true;

    // Loudness-based duration — kept only as the noise gate it was always
    // meant to be (was this even real speech, or a blip?). It is NOT used
    // for vowel-length classification anymore.
    const loudnessDuration =
      lastVoiceTimeRef.current - speechStartTimeRef.current;

    isSpeakingRef.current = false;
    setIsSpeaking(false);

    if (pitchPilotMode) {
      const startSample = pilotActivityStartSampleRef.current;
      const endSample = pilotLastActiveSampleRef.current;
      const activeDurationMs =
        startSample !== null && endSample !== null
          ? ((endSample - startSample) * 1000) / PILOT_SAMPLE_RATE
          : 0;
      const activityThresholdRms = Math.max(
        PILOT_MIN_RMS,
        pilotNoiseFloorRmsRef.current * PILOT_NOISE_MULTIPLIER,
      );
      const meanIntensityRms =
        pilotIntensityFrameCountRef.current > 0
          ? pilotIntensitySumRef.current /
            pilotIntensityFrameCountRef.current
          : 0;
      const pitchSummary = classifyPitchLevel(pitchPointsRef.current);
      const reliableMeasurement =
        activeDurationMs >= PILOT_MIN_ACTIVE_MS &&
        activeDurationMs <= PILOT_MAX_ACTIVE_MS &&
        meanIntensityRms > 0 &&
        pitchPointsRef.current.length >= 5 &&
        pitchSummary.tone !== "unknown";
      const classificationReasons: string[] = [];
      if (!reliableMeasurement) {
        classificationReasons.push("final measurement is not reliable");
      }
      if (pitchPointsRef.current.length < 5) {
        classificationReasons.push(
          `final pitch point count ${pitchPointsRef.current.length} is below 5`,
        );
      }
      if (pitchSummary.tone === "unknown") {
        classificationReasons.push("robust F0 summary is unavailable");
      }
      const measurement: PitchPilotMeasurement = {
        activeDurationMs,
        meanIntensityRms,
        f0MedianHz:
          pitchSummary.tone === "unknown" ? null : pitchSummary.averagePitch,
        pitchContour: [...pitchContourRef.current],
        pitchPointCount: pitchPointsRef.current.length,
        noiseFloorRms: pilotNoiseFloorRmsRef.current,
        activityThresholdRms,
        reliable: reliableMeasurement,
        referenceDataAvailable: false,
      };

      console.log("[PracticeTone][PitchPilot] measurement", measurement);
      console.log("[PracticeTone][PitchPilot] classification diagnostic", {
        finalPitchPointCount: measurement.pitchPointCount,
        reliable: measurement.reliable,
        classificationReasons:
          classificationReasons.length > 0 ? classificationReasons : ["eligible"],
      });
      onPitchMeasured?.(measurement);
      onToneConfirmed({
        tone: pitchSummary.tone,
        averagePitch: pitchSummary.averagePitch,
        vowelLength: classifyVowelLength(activeDurationMs),
        durationMs: activeDurationMs,
        reliable: reliableMeasurement,
      });
      pitchPointsRef.current = [];
      pitchContourRef.current = [];
      utteranceSamplesRef.current = [];
      pcmBufferRef.current = [];
      pilotElapsedSamplesRef.current = 0;
      pilotActivityStartSampleRef.current = null;
      pilotLastActiveSampleRef.current = null;
      pilotNoiseSampleCountRef.current = 0;
      pilotNoiseFloorRmsRef.current = PILOT_MIN_RMS;
      pilotIntensitySumRef.current = 0;
      pilotIntensityFrameCountRef.current = 0;
      hasFinalizedRef.current = false;
      return;
    }

    if (loudnessDuration < MIN_SPEECH_DURATION_MS) {
      // Too short to be reliable speech. Report an unclear result so the
      // practice screen can ask for a calm retry instead of calling it wrong.
      const callbackStartedAt = Date.now();
      console.log("[PracticeTone][ToneCallback] before onToneConfirmed", {
        timestampMs: callbackStartedAt,
      });
      onToneConfirmed({
        tone: "unknown",
        averagePitch: 0,
        vowelLength: "unknown",
        durationMs: 0,
        reliable: false,
      });
      console.log("[PracticeTone][ToneCallback] after onToneConfirmed", {
        timestampMs: Date.now(),
        durationMs: Date.now() - callbackStartedAt,
      });
      pitchPointsRef.current = [];
      utteranceSamplesRef.current = [];
      framesConsumedRef.current = 0;
      firstVoicedFrameMsRef.current = null;
      lastVoicedFrameMsRef.current = null;
      return;
    }

    const { tone, averagePitch } = classifyPitchLevel(pitchPointsRef.current);

    // Vowel-length duration — measured from when the pitch detector found a
    // real voice to when it last found one, NOT from loudness. This is what
    // decouples the length result from how loud the person spoke.
    const voicedDurationMs =
      firstVoicedFrameMsRef.current !== null &&
      lastVoicedFrameMsRef.current !== null
        ? lastVoicedFrameMsRef.current - firstVoicedFrameMsRef.current
        : 0;

    const vowelLength = classifyVowelLength(voicedDurationMs);

    console.log(
      "Utterance finished. Tone:",
      tone,
      "Average pitch (Hz):",
      averagePitch,
      "Pitch points:",
      pitchPointsRef.current.length,
      "Voiced duration (ms):",
      voicedDurationMs,
      "Vowel length:",
      vowelLength,
    );

    // Optional debug WAV of just this utterance.
    const wavInvocationStartedAt = Date.now();
    const wavSampleCount = utteranceSamplesRef.current.length;
    const wavInputBytes = wavSampleCount * 2;
    console.log("[PracticeTone][WAV] invocation start", {
      timestampMs: wavInvocationStartedAt,
      sampleCount: wavSampleCount,
      inputBytes: wavInputBytes,
    });
    const wavBase64 = pcmToWav(utteranceSamplesRef.current, SAMPLE_RATE);
    console.log("[PracticeTone][WAV] invocation end", {
      timestampMs: Date.now(),
      durationMs: Date.now() - wavInvocationStartedAt,
      sampleCount: wavSampleCount,
      inputBytes: wavInputBytes,
      base64Chars: wavBase64.length,
    });
    FileSystem.writeAsStringAsync(
      FileSystem.documentDirectory + "last-utterance.wav",
      wavBase64,
      { encoding: FileSystem.EncodingType.Base64 },
    ).catch((error) => console.log("Failed to save debug WAV:", error));

    setDetectedTone(tone);
    setDetectedVowelLength(vowelLength);
    const callbackStartedAt = Date.now();
    console.log("[PracticeTone][ToneCallback] before onToneConfirmed", {
      timestampMs: callbackStartedAt,
    });
    onToneConfirmed({
      tone,
      averagePitch,
      vowelLength,
      durationMs: voicedDurationMs,
      reliable: pitchPointsRef.current.length >= 5 && tone !== "unknown",
    });
    console.log("[PracticeTone][ToneCallback] after onToneConfirmed", {
      timestampMs: Date.now(),
      durationMs: Date.now() - callbackStartedAt,
    });

    pitchPointsRef.current = [];
    utteranceSamplesRef.current = [];
    framesConsumedRef.current = 0;
    firstVoicedFrameMsRef.current = null;
    lastVoicedFrameMsRef.current = null;
    hasFinalizedRef.current = false;
  }, [onPitchMeasured, onToneConfirmed, pitchPilotMode]);

  const processChunk = useCallback(
    (base64Chunk: string) => {
      if (!isActiveRef.current || hasFinalizedRef.current) {
        return;
      }

      const raw = Buffer.from(base64Chunk, "base64");

      const samples: number[] = [];
      let sumSquares = 0;

      for (let i = 0; i + 1 < raw.length; i += 2) {
        const int16 = raw.readInt16LE(i);
        const sample = int16 / 32768;
        samples.push(sample);
        sumSquares += sample * sample;
      }

      if (samples.length === 0) {
        return;
      }

      const rms = Math.sqrt(sumSquares / samples.length);
      const chunkStartSample = pilotElapsedSamplesRef.current;
      const chunkEndSample = chunkStartSample + samples.length;
      const pilotThreshold = Math.max(
        PILOT_MIN_RMS,
        pilotNoiseFloorRmsRef.current * PILOT_NOISE_MULTIPLIER,
      );
      const pilotStopThreshold = Math.max(
        PILOT_MIN_RMS * 0.75,
        pilotNoiseFloorRmsRef.current * PILOT_STOP_NOISE_MULTIPLIER,
      );
      const pilotHasActivity = pitchPilotMode
        ? rms >=
          (isSpeakingRef.current ? pilotStopThreshold : pilotThreshold)
        : false;

      if (pitchPilotMode) {
        if (
          !pilotHasActivity &&
          pilotNoiseSampleCountRef.current < SAMPLE_RATE * 0.5
        ) {
          pilotNoiseFloorRmsRef.current =
            pilotNoiseFloorRmsRef.current * 0.9 + rms * 0.1;
          pilotNoiseSampleCountRef.current += samples.length;
        }

        if (pilotHasActivity) {
          if (pilotActivityStartSampleRef.current === null) {
            pilotActivityStartSampleRef.current = chunkStartSample;
          }
          pilotLastActiveSampleRef.current = chunkEndSample;
          pilotIntensitySumRef.current += rms;
          pilotIntensityFrameCountRef.current += 1;
        }

        pilotElapsedSamplesRef.current = chunkEndSample;
      }

      const maxAmplitude = pitchPilotMode
        ? rms
        : Math.max(...samples.map(Math.abs));
      const now = Date.now();
      const hasVoice = pitchPilotMode
        ? pilotHasActivity
        : maxAmplitude >= SPEECH_AMPLITUDE_THRESHOLD;

      if (hasVoice) {
        lastVoiceTimeRef.current = now;

        if (!isSpeakingRef.current) {
          // Speech just started.
          isSpeakingRef.current = true;
          speechStartTimeRef.current = now;
          setIsSpeaking(true);
          setDetectedTone("unknown");
          setDetectedVowelLength("unknown");
          framesConsumedRef.current = 0;
          firstVoicedFrameMsRef.current = null;
          lastVoicedFrameMsRef.current = null;
        }
      }

      if (isSpeakingRef.current) {
        utteranceSamplesRef.current.push(...samples);
        pcmBufferRef.current.push(...samples);

        while (pcmBufferRef.current.length >= FRAME_SIZE) {
          const frame = pcmBufferRef.current.slice(0, FRAME_SIZE);
          const freq = detectPitch(Float32Array.from(frame));

          // Where this frame sits in time, counted from samples consumed
          // since the utterance began — NOT from wall-clock/loudness, so
          // it stays accurate regardless of how loud any given moment was.
          const frameStartMs =
            (framesConsumedRef.current * HOP_SIZE * 1000) / SAMPLE_RATE;
          const frameEndMs = frameStartMs + (FRAME_SIZE * 1000) / SAMPLE_RATE;

          if (
            freq != null &&
            Number.isFinite(freq) &&
            freq >= MIN_PITCH_HZ &&
            freq <= MAX_PITCH_HZ
          ) {
            pitchPointsRef.current.push(freq);
            if (pitchPilotMode) {
              pitchContourRef.current.push({ timeMs: frameStartMs, hz: freq });
              onPitchUpdate?.(freq);
            }

            if (firstVoicedFrameMsRef.current === null) {
              firstVoicedFrameMsRef.current = frameStartMs;
            }
            lastVoicedFrameMsRef.current = frameEndMs;
          }

          framesConsumedRef.current += 1;
          pcmBufferRef.current.splice(0, HOP_SIZE);
        }

        // If enough silence has passed since the last voiced frame,
        // the utterance is over.
        const silenceTimeoutMs = pitchPilotMode
          ? PILOT_HANGOVER_MS
          : SILENCE_TIMEOUT_MS;
        if (now - lastVoiceTimeRef.current >= silenceTimeoutMs) {
          finalizeUtterance();
          pcmBufferRef.current = [];
        }
      }
    },
    [finalizeUtterance, onPitchUpdate, pitchPilotMode],
  );

  useEffect(() => {
    let cancelled = false;
    isActiveRef.current = true;

    async function startListening() {
      try {
        const { granted } =
          await ExpoSpeechRecognitionModule.requestPermissionsAsync();

        if (!granted || cancelled) {
          if (!cancelled) onUnavailable?.();
          return;
        }

        const audioOptions = {
          sampleRate: SAMPLE_RATE,
          channels: 1,
          bitsPerSample: 16,
          audioSource: 1, // Android: MIC source (raw, no processing)
          bufferSize: pitchPilotMode ? PILOT_BUFFER_SIZE : 4096,
        } as any; // the library's bundled types don't declare all valid fields

        LiveAudioStream.init(audioOptions);
        audioSubscriptionRef.current = (LiveAudioStream as any).on(
          "data",
          processChunk,
        );
        LiveAudioStream.start();
        if (!cancelled) setIsListening(true);
      } catch (error) {
        console.error("Failed to start tone microphone:", error);
        if (!cancelled) onUnavailable?.();
      }
    }

    startListening();

    return () => {
      cancelled = true;
      isActiveRef.current = false;
      hasFinalizedRef.current = true;
      const stopStartedAt = Date.now();
      console.log("[PracticeTone][Cleanup] before LiveAudioStream.stop", {
        timestampMs: stopStartedAt,
      });
      LiveAudioStream.stop();
      console.log("[PracticeTone][Cleanup] after LiveAudioStream.stop", {
        timestampMs: Date.now(),
        durationMs: Date.now() - stopStartedAt,
      });
      audioSubscriptionRef.current?.remove?.();
      audioSubscriptionRef.current = null;
      // Defensive: some versions of this library expose an unsubscribe
      // method, some don't. Call it if present; the isActiveRef guard above
      // is what actually protects against the leak either way.
      (LiveAudioStream as any).off?.("data", processChunk);
      (LiveAudioStream as any).removeListener?.("data", processChunk);
      setIsListening(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.indicator,
          isSpeaking && styles.indicatorActive,
          !isListening && styles.indicatorOff,
        ]}
      />

      <Text style={styles.statusText}>
        {!isListening
          ? "Starting microphone..."
          : isSpeaking
            ? "Listening..."
            : "Ready — just start talking"}
      </Text>

      {detectedTone !== "unknown" && (
        <Text style={styles.result}>
          Detected: {detectedTone}
          {detectedTone !== expectedTone && ` (expected: ${expectedTone})`}
        </Text>
      )}

      {expectedVowelLength && detectedVowelLength !== "unknown" && (
        <Text style={styles.result}>
          Vowel: {detectedVowelLength}
          {detectedVowelLength !== expectedVowelLength &&
            ` (expected: ${expectedVowelLength})`}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", padding: 20, gap: 10 },
  indicator: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#DDD8EA",
  },
  indicatorActive: {
    backgroundColor: "#22C55E",
  },
  indicatorOff: {
    backgroundColor: "#EF4444",
  },
  statusText: { fontWeight: "700", fontSize: 15, color: "#410FA3" },
  result: { marginTop: 6, fontWeight: "700", textTransform: "capitalize" },
});
