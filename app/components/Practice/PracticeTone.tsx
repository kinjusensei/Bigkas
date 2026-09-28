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

// Pitch bands covering typical human speaking voice (70–400 Hz).
// Tune these after testing against real voices/phrases.
const LOW_MAX_HZ = 140;
const MEDIUM_MAX_HZ = 220;

// Vowel-length threshold — an utterance at or below this is "short",
// above it is "long". This is a rough starting point (same caveat as the
// pitch bands above): tune it against real recordings of your target
// dialect's short vs. long vowels before relying on it.
const SHORT_VOWEL_MAX_MS = 450;

export type ToneLevel = "low" | "medium" | "high" | "unknown";
export type VowelLength = "short" | "long" | "unknown";

type PracticeToneProps = {
  expectedTone: ToneLevel;
  // Optional: only needed for words/screens that also care about vowel length.
  expectedVowelLength?: VowelLength;
  onToneConfirmed: (result: {
    tone: ToneLevel;
    averagePitch: number;
    vowelLength: VowelLength;
    durationMs: number;
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
  if (pitchPoints.length < 5) {
    return { tone: "unknown", averagePitch: 0 };
  }

  const sorted = [...pitchPoints].sort((a, b) => a - b);
  const average = sorted[Math.floor(sorted.length / 2)]; // median

  if (average <= LOW_MAX_HZ) {
    return { tone: "low", averagePitch: average };
  }

  if (average <= MEDIUM_MAX_HZ) {
    return { tone: "medium", averagePitch: average };
  }

  return { tone: "high", averagePitch: average };
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
  return btoa(binary);
}

export default function PracticeTone({
  expectedTone,
  expectedVowelLength,
  onToneConfirmed,
}: PracticeToneProps) {
  const [detectedTone, setDetectedTone] = useState<ToneLevel>("unknown");
  const [detectedVowelLength, setDetectedVowelLength] =
    useState<VowelLength>("unknown");
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const pitchPointsRef = useRef<number[]>([]);
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

  // Vowel-length timing, based on when the pitch detector actually finds a
  // voice (not on loudness). This is what classifyVowelLength() uses.
  const framesConsumedRef = useRef(0);
  const firstVoicedFrameMsRef = useRef<number | null>(null);
  const lastVoicedFrameMsRef = useRef<number | null>(null);

  /**
   * Called when a pause after speech confirms the utterance is complete.
   * Classifies what was collected, reports it, then resets for the next one.
   */
  const finalizeUtterance = useCallback(() => {
    if (!isActiveRef.current) {
      return;
    }

    // Loudness-based duration — kept only as the noise gate it was always
    // meant to be (was this even real speech, or a blip?). It is NOT used
    // for vowel-length classification anymore.
    const loudnessDuration =
      lastVoiceTimeRef.current - speechStartTimeRef.current;

    isSpeakingRef.current = false;
    setIsSpeaking(false);

    if (loudnessDuration < MIN_SPEECH_DURATION_MS) {
      // Too short to be real speech — discard and keep listening.
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
    FileSystem.writeAsStringAsync(
      FileSystem.documentDirectory + "last-utterance.wav",
      pcmToWav(utteranceSamplesRef.current, SAMPLE_RATE),
      { encoding: FileSystem.EncodingType.Base64 },
    ).catch((error) => console.log("Failed to save debug WAV:", error));

    setDetectedTone(tone);
    setDetectedVowelLength(vowelLength);
    onToneConfirmed({
      tone,
      averagePitch,
      vowelLength,
      durationMs: voicedDurationMs,
    });

    pitchPointsRef.current = [];
    utteranceSamplesRef.current = [];
    framesConsumedRef.current = 0;
    firstVoicedFrameMsRef.current = null;
    lastVoicedFrameMsRef.current = null;
  }, [onToneConfirmed]);

  const processChunk = useCallback(
    (base64Chunk: string) => {
      if (!isActiveRef.current) {
        return;
      }

      const raw = Buffer.from(base64Chunk, "base64");

      const samples: number[] = [];

      for (let i = 0; i + 1 < raw.length; i += 2) {
        const int16 = raw.readInt16LE(i);
        samples.push(int16 / 32768);
      }

      const maxAmplitude = Math.max(...samples.map(Math.abs));
      const now = Date.now();
      const hasVoice = maxAmplitude >= SPEECH_AMPLITUDE_THRESHOLD;

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

          if (freq != null && freq >= 70 && freq <= 400) {
            pitchPointsRef.current.push(freq);

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
        if (now - lastVoiceTimeRef.current >= SILENCE_TIMEOUT_MS) {
          finalizeUtterance();
          pcmBufferRef.current = [];
        }
      }
    },
    [finalizeUtterance],
  );

  useEffect(() => {
    let cancelled = false;
    isActiveRef.current = true;

    async function startListening() {
      const { granted } =
        await ExpoSpeechRecognitionModule.requestPermissionsAsync();

      if (!granted || cancelled) return;

      const audioOptions = {
        sampleRate: SAMPLE_RATE,
        channels: 1,
        bitsPerSample: 16,
        audioSource: 1, // Android: MIC source (raw, no processing)
        bufferSize: 4096,
      } as any; // the library's bundled types don't declare all valid fields

      LiveAudioStream.init(audioOptions);
      LiveAudioStream.on("data", processChunk);
      LiveAudioStream.start();
      setIsListening(true);
    }

    startListening();

    return () => {
      cancelled = true;
      isActiveRef.current = false;
      LiveAudioStream.stop();
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
