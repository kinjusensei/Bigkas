// app/speech-check.tsx
// Test screen for the speech pipeline: says what the phone's recognizer
// (Google, fil-PH) heard and what Sapin-sapin AI heard for the same
// recording, side by side. Records exactly like Story Speak It does.
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  ExpoSpeechRecognitionModule,
  useSpeechRecognitionEvent,
} from "expo-speech-recognition";
import { useCallback, useRef, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  checkSpeech,
  scoreTranscript,
  SPEECH_API_URL,
  type Dialect,
  type SpeechResult,
} from "../utils/speech";

const LANGUAGES: { key: Dialect; label: string; sample: string }[] = [
  { key: "tagalog", label: "Tagalog", sample: "magandang umaga" },
  { key: "kapampangan", label: "Kapampangan", sample: "mayap a bengi" },
  { key: "waray", label: "Waray", sample: "maupay nga aga" },
];

type Phase = "idle" | "listening" | "checking";

export default function SpeechCheckScreen() {
  const router = useRouter();
  const [language, setLanguage] = useState<Dialect>("tagalog");
  const [target, setTarget] = useState(LANGUAGES[0].sample);
  const [phase, setPhase] = useState<Phase>("idle");
  const [google, setGoogle] = useState<string | null>(null);
  const [sapin, setSapin] = useState<SpeechResult | null>(null);
  const [sapinSeconds, setSapinSeconds] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  const uriRef = useRef<string | null>(null);
  const endedRef = useRef(false);
  const checkedRef = useRef(false);

  const runSapinSapin = useCallback(async () => {
    const uri = uriRef.current;
    if (!endedRef.current || checkedRef.current) return;
    checkedRef.current = true;
    if (!uri) {
      setPhase("idle");
      setMessage(
        "This phone didn't save the recording, so Sapin-sapin can't check it (needs Android 13 or newer).",
      );
      return;
    }
    setPhase("checking");
    const started = Date.now();
    try {
      setSapin(await checkSpeech(uri, language, target));
      setSapinSeconds((Date.now() - started) / 1000);
    } catch (error) {
      setMessage((error as Error)?.message ?? "Sapin-sapin check failed.");
    } finally {
      setPhase("idle");
    }
  }, [language, target]);

  const start = useCallback(async () => {
    setGoogle(null);
    setSapin(null);
    setSapinSeconds(null);
    setMessage("");
    uriRef.current = null;
    endedRef.current = false;
    checkedRef.current = false;

    const permission =
      await ExpoSpeechRecognitionModule.requestPermissionsAsync();
    if (!permission.granted) {
      setMessage("Microphone permission is needed.");
      return;
    }
    try {
      ExpoSpeechRecognitionModule.start({
        lang: "fil-PH",
        interimResults: true,
        continuous: false,
        recordingOptions: { persist: true },
      });
      setPhase("listening");
    } catch (error) {
      setMessage(`Couldn't start the microphone: ${String(error)}`);
    }
  }, []);

  useSpeechRecognitionEvent("result", (event) => {
    const text = event.results?.[0]?.transcript?.trim();
    if (text) setGoogle(text);
  });

  useSpeechRecognitionEvent("error", (event) => {
    // "no-speech" just means Google heard nothing; Sapin-sapin still checks.
    if (event.error !== "no-speech" && event.error !== "aborted") {
      setMessage(`Phone recognizer: ${event.error}`);
    }
  });

  useSpeechRecognitionEvent("audioend", (event) => {
    uriRef.current = event.uri ?? null;
    void runSapinSapin();
  });

  useSpeechRecognitionEvent("end", () => {
    endedRef.current = true;
    // audioend usually comes first; give it a moment if it hasn't.
    setTimeout(() => void runSapinSapin(), uriRef.current ? 0 : 800);
  });

  const googleResult =
    google !== null && target.trim()
      ? scoreTranscript(google, target, language)
      : null;

  return (
    <SafeAreaView style={styles.screen} edges={["top", "left", "right"]}>
      <View style={styles.header}>
        <Pressable
          onPress={() =>
            router.canGoBack() ? router.back() : router.replace("/")
          }
          style={styles.back}
          accessibilityRole="button"
          accessibilityLabel="Go back"
        >
          <Ionicons name="chevron-back" size={24} color="#1F2A5C" />
        </Pressable>
        <Text style={styles.title} accessibilityRole="header">
          Voice check
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.label}>Language</Text>
        <View style={styles.chips}>
          {LANGUAGES.map((l) => (
            <Pressable
              key={l.key}
              onPress={() => {
                setLanguage(l.key);
                setTarget(l.sample);
              }}
              style={[styles.chip, language === l.key && styles.chipOn]}
              accessibilityRole="button"
              accessibilityState={{ selected: language === l.key }}
            >
              <Text
                style={[styles.chipText, language === l.key && styles.chipTextOn]}
              >
                {l.label}
              </Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.label}>Word or phrase to say</Text>
        <TextInput
          value={target}
          onChangeText={setTarget}
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          accessibilityLabel="Word or phrase to say"
        />

        <Pressable
          onPress={
            phase === "listening"
              ? () => ExpoSpeechRecognitionModule.stop()
              : start
          }
          disabled={phase === "checking"}
          style={[styles.mic, phase === "listening" && styles.micOn]}
          accessibilityRole="button"
          accessibilityLabel={phase === "listening" ? "Stop" : "Tap to speak"}
        >
          {phase === "checking" ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Ionicons
              name={phase === "listening" ? "stop" : "mic-outline"}
              size={34}
              color="#FFFFFF"
            />
          )}
        </Pressable>
        <Text style={styles.status} accessibilityLiveRegion="polite">
          {phase === "listening"
            ? "Listening... say the word"
            : phase === "checking"
              ? "Asking Sapin-sapin..."
              : "Tap the mic and speak"}
        </Text>

        <ResultCard
          title="Phone (Google, fil-PH)"
          text={google}
          result={googleResult}
          waiting={phase === "listening"}
        />
        <ResultCard
          title="Sapin-sapin AI"
          text={sapin ? sapin.transcript : null}
          result={target.trim() ? sapin : null}
          waiting={phase !== "idle"}
          note={sapinSeconds !== null ? `${sapinSeconds.toFixed(1)} s` : undefined}
        />

        {message ? <Text style={styles.message}>{message}</Text> : null}
        <Text style={styles.server}>Server: {SPEECH_API_URL}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

function ResultCard({
  title,
  text,
  result,
  waiting,
  note,
}: {
  title: string;
  text: string | null;
  result: SpeechResult | null;
  waiting: boolean;
  note?: string;
}) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHead}>
        <Text style={styles.cardTitle}>{title}</Text>
        {note ? <Text style={styles.cardNote}>{note}</Text> : null}
      </View>
      <Text style={styles.heard}>
        {text !== null ? text || "(nothing)" : waiting ? "…" : "—"}
      </Text>
      {result && text !== null ? (
        <Text style={result.matched ? styles.good : styles.bad}>
          {result.matched ? "Match" : "No match"} · similarity{" "}
          {Math.round(result.score * 100)}%
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#FFFFFF" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#EEF0F6",
  },
  back: { width: 44, height: 44, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 17, fontWeight: "700", color: "#1F2A5C" },
  content: { padding: 20, gap: 8 },
  label: { fontSize: 13, fontWeight: "700", color: "#5B6275", marginTop: 8 },
  chips: { flexDirection: "row", gap: 8, flexWrap: "wrap" },
  chip: {
    minHeight: 40,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#D5D9E6",
    justifyContent: "center",
  },
  chipOn: { backgroundColor: "#5B50B0", borderColor: "#5B50B0" },
  chipText: { fontSize: 14, fontWeight: "700", color: "#1F2A5C" },
  chipTextOn: { color: "#FFFFFF" },
  input: {
    borderWidth: 1,
    borderColor: "#D5D9E6",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 17,
    color: "#1F2A5C",
  },
  mic: {
    alignSelf: "center",
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: "#5B50B0",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  micOn: { backgroundColor: "#E24B4A" },
  status: { textAlign: "center", fontSize: 14, color: "#5B6275", marginBottom: 8 },
  card: { borderRadius: 14, backgroundColor: "#F5F6FB", padding: 16, gap: 6 },
  cardHead: { flexDirection: "row", justifyContent: "space-between" },
  cardTitle: { fontSize: 13, fontWeight: "700", color: "#5B6275" },
  cardNote: { fontSize: 13, color: "#8A90A2" },
  heard: { fontSize: 22, fontWeight: "800", color: "#1F2A5C" },
  good: { fontSize: 14, fontWeight: "700", color: "#1F8A5B" },
  bad: { fontSize: 14, fontWeight: "700", color: "#C0392B" },
  message: { fontSize: 14, color: "#C0392B", marginTop: 8 },
  server: { fontSize: 12, color: "#8A90A2", marginTop: 12 },
});
