import {
  ExpoSpeechRecognitionModule,
  useSpeechRecognitionEvent,
} from "expo-speech-recognition";
import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import PracticeTone, {
  classifyPitchPilotMeasurement,
  type PitchContourPoint,
  type PitchPilotMeasurement,
} from "../components/Practice/PracticeTone";

const PILOT_LANGUAGES = ["Tagalog", "Kapampangan", "Waray"] as const;
type PilotLanguage = (typeof PILOT_LANGUAGES)[number];
type RecognitionStatus =
  | "idle"
  | "listening"
  | "successful"
  | "no_result"
  | "unavailable"
  | "failed";

const SPEECH_LOCALES: Record<PilotLanguage, string | null> = {
  Tagalog: "fil-PH",
  Kapampangan: null,
  Waray: null,
};

function PitchContour({ points }: { points: PitchContourPoint[] }) {
  if (points.length === 0) {
    return <Text style={styles.emptyContour}>No usable pitch frames detected.</Text>;
  }

  const frequencies = points.map((point) => point.hz);
  const minHz = Math.min(...frequencies);
  const maxHz = Math.max(...frequencies);
  const rangeHz = Math.max(maxHz - minHz, 1);

  return (
    <View style={styles.contourTrack} accessibilityLabel="Pitch contour">
      {points.map((point, index) => (
        <View
          key={`${point.timeMs}-${index}`}
          style={[
            styles.contourBar,
            { height: 8 + ((point.hz - minHz) / rangeHz) * 44 },
          ]}
        />
      ))}
    </View>
  );
}

function formatPitchHz(frequencyHz: number): string {
  const rounded = Math.round(frequencyHz * 10) / 10;
  return `${Number.isInteger(rounded) ? rounded : rounded.toFixed(1)} Hz`;
}

export default function PitchAnalysisScreen() {
  const [language, setLanguage] = useState<PilotLanguage>("Tagalog");
  const [expectedWord, setExpectedWord] = useState("");
  const [detectedWord, setDetectedWord] = useState<string | null>(null);
  const [recognitionStatus, setRecognitionStatus] =
    useState<RecognitionStatus>("idle");
  const [pitchRecording, setPitchRecording] = useState(false);
  const [latestPitchHz, setLatestPitchHz] = useState<number | null>(null);
  const [measurement, setMeasurement] =
    useState<PitchPilotMeasurement | null>(null);
  const recognitionActiveRef = useRef(false);
  const pitchClassification = measurement
    ? classifyPitchPilotMeasurement(measurement)
    : null;

  useSpeechRecognitionEvent("result", (event) => {
    if (!recognitionActiveRef.current) return;

    recognitionActiveRef.current = false;
    const transcript = event.results[0]?.transcript?.trim() ?? "";

    if (!transcript) {
      setDetectedWord(null);
      setRecognitionStatus("no_result");
    } else {
      setDetectedWord(transcript);
      setRecognitionStatus("successful");
    }

    ExpoSpeechRecognitionModule.abort();
  });

  useSpeechRecognitionEvent("error", () => {
    if (!recognitionActiveRef.current) return;

    recognitionActiveRef.current = false;
    setRecognitionStatus("failed");
  });

  useSpeechRecognitionEvent("end", () => {
    if (!recognitionActiveRef.current) return;

    recognitionActiveRef.current = false;
    setRecognitionStatus("no_result");
  });

  useEffect(() => {
    return () => {
      recognitionActiveRef.current = false;
      ExpoSpeechRecognitionModule.abort();
    };
  }, []);

  const recognizeWord = async () => {
    const locale = SPEECH_LOCALES[language];

    if (!locale) {
      setDetectedWord(null);
      setRecognitionStatus("unavailable");
      return;
    }

    setDetectedWord(null);
    setRecognitionStatus("listening");
    recognitionActiveRef.current = true;

    try {
      const { granted } =
        await ExpoSpeechRecognitionModule.requestPermissionsAsync();

      if (!granted || !recognitionActiveRef.current) {
        recognitionActiveRef.current = false;
        setRecognitionStatus("unavailable");
        return;
      }

      ExpoSpeechRecognitionModule.start({
        lang: locale,
        interimResults: false,
        continuous: false,
      });
    } catch {
      recognitionActiveRef.current = false;
      setRecognitionStatus("failed");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Pitch Recognition Pilot</Text>
        <Text style={styles.description}>
          This isolated pilot measures fundamental frequency over time. It does
          not classify linguistic tone or stress, or affect lesson scoring, XP,
          progress, or saved results.
        </Text>

        <Text style={styles.label}>Reference language context</Text>
        <View style={styles.languageRow}>
          {PILOT_LANGUAGES.map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.languageButton,
                language === item && styles.languageButtonSelected,
              ]}
              onPress={() => {
                setLanguage(item);
                setMeasurement(null);
              }}
              disabled={recognitionStatus === "listening" || pitchRecording}
            >
              <Text
                style={[
                  styles.languageButtonText,
                  language === item && styles.languageButtonTextSelected,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.referenceWarning}>
          No validated language-specific pitch reference labels or recordings
          are currently loaded for {language}. Provide reference recordings
          from proficient speakers before interpreting pitch patterns.
        </Text>

        <Text style={styles.label}>Expected word (optional)</Text>
        <TextInput
          value={expectedWord}
          onChangeText={setExpectedWord}
          placeholder="Enter the word you plan to say"
          autoCapitalize="none"
          style={styles.expectedWordInput}
          editable={recognitionStatus !== "listening" && !pitchRecording}
        />

        <View style={styles.recognitionCard}>
          <Text style={styles.resultTitle}>Speech recognition</Text>
          <Text>
            Expected word: {expectedWord.trim() || "Not provided"}
          </Text>
          <Text>
            Detected word: {detectedWord || "No word detected. Please try again."}
          </Text>
          <Text>
            Recognition status: {recognitionStatus.replace("_", " ")}
          </Text>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={recognizeWord}
            disabled={recognitionStatus === "listening" || pitchRecording}
          >
            <Text style={styles.primaryButtonText}>Recognize spoken word</Text>
          </TouchableOpacity>
          {language !== "Tagalog" && (
            <Text style={styles.note}>
              No locale is configured for {language} in the current project.
              Speech recognition is unavailable for this selection, but pitch
              measurement remains available.
            </Text>
          )}
        </View>

        <Text style={styles.instruction}>
          After recognition finishes, start the separate pitch sample. The
          current architecture cannot safely share one microphone session.
        </Text>

        {!pitchRecording ? (
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => {
              setMeasurement(null);
              setLatestPitchHz(null);
              setPitchRecording(true);
            }}
            disabled={recognitionStatus === "listening"}
          >
            <Text style={styles.primaryButtonText}>Record pitch sample</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => setPitchRecording(false)}
          >
            <Text style={styles.secondaryButtonText}>Stop pitch analysis</Text>
          </TouchableOpacity>
        )}

        {pitchRecording && (
          <View style={styles.livePitchCard}>
            <Text style={styles.livePitchText}>
              Current Pitch: {latestPitchHz === null
                ? "Waiting for pitch..."
                : formatPitchHz(latestPitchHz)}
            </Text>
            <PracticeTone
              expectedTone="unknown"
              pitchPilotMode
              onToneConfirmed={() => undefined}
              onPitchUpdate={setLatestPitchHz}
              onPitchMeasured={(result) => {
                setMeasurement(result);
                setPitchRecording(false);
              }}
            />
          </View>
        )}

        {measurement && (
          <View style={styles.resultCard}>
            <Text style={styles.resultTitle}>Pitch analysis</Text>
            <Text>Language context: {language}</Text>
            <Text style={styles.classification}>
              Classification: {pitchClassification}
            </Text>
            <Text style={styles.currentPitchResult}>
              Current Pitch: {latestPitchHz === null
                ? "Waiting for pitch..."
                : formatPitchHz(latestPitchHz)}
            </Text>
            <Text style={styles.measurementLabel}>Pitch contour over time</Text>
            <PitchContour points={measurement.pitchContour} />
            <Text>
              Median Pitch: {measurement.f0MedianHz === null
                ? "Insufficient Data"
                : formatPitchHz(measurement.f0MedianHz)}
            </Text>
            <Text>
              Mean intensity RMS: {measurement.meanIntensityRms.toFixed(4)}
            </Text>
            <Text>
              Active duration: {Math.round(measurement.activeDurationMs)} ms
            </Text>
            <Text>Pitch frames: {measurement.pitchPointCount}</Text>
            <Text>
              Noise floor RMS: {measurement.noiseFloorRms.toFixed(4)}
            </Text>
            <Text>
              Activity threshold RMS: {measurement.activityThresholdRms.toFixed(4)}
            </Text>
            <Text>
              Feature measurement reliable: {measurement.reliable ? "yes" : "no"}
            </Text>
            <Text style={styles.note}>
              The category describes measured vocal pitch only. The provisional
              boundaries are not validated for any selected language and do
              not identify pronunciation correctness, word stress, or
              linguistic tone.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#FFFFFF" },
  container: { padding: 20, gap: 16 },
  title: { color: "#410FA3", fontSize: 24, fontWeight: "800" },
  description: { color: "#555", lineHeight: 21 },
  label: { color: "#333", fontWeight: "700" },
  languageRow: { flexDirection: "row", gap: 8 },
  languageButton: {
    alignItems: "center",
    borderColor: "#D8D0EA",
    borderRadius: 10,
    borderWidth: 1,
    flex: 1,
    paddingVertical: 12,
  },
  languageButtonSelected: {
    backgroundColor: "#5E3BEE",
    borderColor: "#5E3BEE",
  },
  languageButtonText: { color: "#410FA3", fontWeight: "700" },
  languageButtonTextSelected: { color: "#FFFFFF" },
  expectedWordInput: {
    borderColor: "#D8D0EA",
    borderRadius: 10,
    borderWidth: 1,
    color: "#333",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  recognitionCard: {
    backgroundColor: "#F7F4FC",
    borderRadius: 12,
    gap: 8,
    padding: 16,
  },
  referenceWarning: {
    backgroundColor: "#FFF7ED",
    borderColor: "#FED7AA",
    borderRadius: 10,
    borderWidth: 1,
    color: "#9A3412",
    lineHeight: 20,
    padding: 12,
  },
  instruction: { color: "#555", lineHeight: 21 },
  primaryButton: {
    alignItems: "center",
    backgroundColor: "#5E3BEE",
    borderRadius: 12,
    paddingVertical: 14,
  },
  primaryButtonText: { color: "#FFFFFF", fontWeight: "800" },
  secondaryButton: {
    alignItems: "center",
    borderColor: "#5E3BEE",
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: 14,
  },
  secondaryButtonText: { color: "#5E3BEE", fontWeight: "800" },
  resultCard: {
    backgroundColor: "#F7F4FC",
    borderRadius: 12,
    gap: 6,
    padding: 16,
  },
  resultTitle: { color: "#410FA3", fontWeight: "800" },
  currentPitchResult: { color: "#410FA3", fontSize: 16, fontWeight: "700" },
  livePitchCard: {
    backgroundColor: "#F7F4FC",
    borderRadius: 12,
    padding: 16,
  },
  livePitchText: { color: "#410FA3", fontSize: 18, fontWeight: "800" },
  classification: { color: "#410FA3", fontSize: 18, fontWeight: "800" },
  measurementLabel: { color: "#333", fontWeight: "700", marginTop: 4 },
  contourTrack: {
    alignItems: "flex-end",
    backgroundColor: "#E9E2F8",
    borderRadius: 8,
    flexDirection: "row",
    gap: 2,
    height: 60,
    paddingHorizontal: 6,
    paddingVertical: 6,
  },
  contourBar: {
    backgroundColor: "#5E3BEE",
    borderRadius: 2,
    flex: 1,
    maxWidth: 8,
    minWidth: 2,
  },
  emptyContour: { color: "#666", fontStyle: "italic" },
  note: { color: "#666", fontSize: 13, lineHeight: 18, marginTop: 6 },
});
