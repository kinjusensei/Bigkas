// components/SpeechPractice.tsx
// Optional speaking practice: record the learner, show what was heard.
// Does not affect scores or grading.
import {
    AudioModule,
    RecordingPresets,
    setAudioModeAsync,
    useAudioRecorder,
} from "expo-audio";
import { useState } from "react";
import {
    ActivityIndicator,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import {
    checkSpeech,
    type Dialect,
    type SpeechResult,
} from "../../utils/speech";
type Props = {
  language: Dialect; // the dialect of the current lesson
  target: string; // the word or phrase the learner should say
};

type State = "idle" | "recording" | "checking";

export default function SpeechPractice({ language, target }: Props) {
  const recorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
  const [state, setState] = useState<State>("idle");
  const [result, setResult] = useState<SpeechResult | null>(null);
  const [error, setError] = useState("");

  async function start() {
    setError("");
    setResult(null);
    const permission = await AudioModule.requestRecordingPermissionsAsync();
    if (!permission.granted) {
      setError("Microphone permission is needed for speaking practice.");
      return;
    }
    await setAudioModeAsync({ allowsRecording: true, playsInSilentMode: true });
    await recorder.prepareToRecordAsync();
    recorder.record();
    setState("recording");
  }

  async function stop() {
    setState("checking");
    try {
      await recorder.stop();
      const uri = recorder.uri;
      if (!uri) throw new Error("No recording was made.");
      setResult(await checkSpeech(uri, language, target));
    } catch (e: any) {
      setError(e?.message ?? "Something went wrong.");
    } finally {
      setState("idle");
    }
  }

  return (
    <View style={styles.card}>
      <Text style={styles.label}>Say this</Text>
      <Text style={styles.target}>{target}</Text>

      <Pressable
        style={[styles.button, state === "recording" && styles.buttonRecording]}
        onPress={state === "recording" ? stop : start}
        disabled={state === "checking"}
      >
        {state === "checking" ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={styles.buttonText}>
            {state === "recording" ? "Stop" : "Tap to speak"}
          </Text>
        )}
      </Pressable>

      {!!error && <Text style={styles.error}>{error}</Text>}

      {result && (
        <View style={styles.result}>
          <Text style={styles.label}>I heard</Text>
          <Text style={styles.heard}>{result.transcript || "(nothing)"}</Text>
          <Text style={result.matched ? styles.good : styles.try}>
            {result.matched
              ? "Nice! That sounds right."
              : "Not quite. Try again."}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 16,
    padding: 20,
    gap: 10,
  },
  label: { fontSize: 13, color: "rgba(255,255,255,0.7)" },
  target: { fontSize: 28, fontWeight: "800", color: "#FFFFFF" },
  button: {
    backgroundColor: "#5DCAA5",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 6,
  },
  buttonRecording: { backgroundColor: "#E24B4A" },
  buttonText: { fontSize: 17, fontWeight: "800", color: "#FFFFFF" },
  error: { color: "#F0997B", fontSize: 14 },
  result: { gap: 4, marginTop: 6 },
  heard: { fontSize: 22, fontWeight: "700", color: "#FFFFFF" },
  good: { fontSize: 15, fontWeight: "700", color: "#5DCAA5" },
  try: { fontSize: 15, fontWeight: "700", color: "#F0997B" },
});
