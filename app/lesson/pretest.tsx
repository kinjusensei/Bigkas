import { useLocalSearchParams, useRouter } from "expo-router";
import {
    ExpoSpeechRecognitionModule,
    useSpeechRecognitionEvent,
} from "expo-speech-recognition";
import { useCallback, useEffect, useRef, useState } from "react";
import {
    Animated,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { FaceDetectionProvider } from "@infinitered/react-native-mlkit-face-detection";

import { pretestByLessonId, PretestQuestion } from "../../data/pretestData";
import { PracticeExpressionResult } from "../../types/practice";
import PracticeCamera from "../components/Practice/PracticeCamera";

// =========================================================
// ASSUMPTIONS — confirm/adjust if wrong:
// - File lives at app/lesson/pretest.tsx (same folder as practice.tsx),
//   so the route is /lesson/pretest.
// - Nothing currently navigates here yet — you'll need to point a button
//   (e.g. in story.tsx or lessons.tsx) at this screen with a lessonId param
//   before this is reachable in the app.
// - Diagnostic only: score is shown at the end but never saved to Supabase
//   and doesn't gate anything, per "just for fun."
// - The speak item (#5) only checks the word itself — no tone/vowel-length
//   checking here, unlike practice.tsx. Flag if that should be added.
// =========================================================

const normalizeWord = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "")
    .trim();

const TYPE_LABELS: Record<PretestQuestion["type"], string> = {
  multiple_choice: "🗨️ Translate",
  speak: "🎤 Speak It",
  expression: "😊 Show It",
};

export default function PretestScreen() {
  const router = useRouter();
  const { lessonId } = useLocalSearchParams<{ lessonId?: string }>();

  const questions: PretestQuestion[] = lessonId
    ? (pretestByLessonId[lessonId] ?? [])
    : [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  // Multiple choice
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Speak
  const [speakMatched, setSpeakMatched] = useState(false);
  const [speakHeard, setSpeakHeard] = useState<string | null>(null);
  const speakMatchedRef = useRef(false);
  const recognitionActiveRef = useRef(false);
  const restartTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Expression
  const [expressionMatched, setExpressionMatched] = useState(false);

  const currentQuestion = questions[currentIndex];

  // ------- Animated progress bar -------
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const target = questions.length
      ? finished
        ? 1
        : (currentIndex +
            (selectedOption || speakMatched || expressionMatched ? 1 : 0)) /
          questions.length
      : 0;

    Animated.timing(progressAnim, {
      toValue: target,
      duration: 350,
      useNativeDriver: false,
    }).start();
  }, [
    currentIndex,
    finished,
    selectedOption,
    speakMatched,
    expressionMatched,
    questions.length,
    progressAnim,
  ]);

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  // ------- Pulsing indicator for the "listening" / "watching" moments -------
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const isWaiting =
      (currentQuestion?.type === "speak" && !speakMatched) ||
      (currentQuestion?.type === "expression" && !expressionMatched);

    if (!isWaiting) {
      pulseAnim.setValue(1);
      return;
    }

    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.12,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
      ]),
    );

    loop.start();

    return () => loop.stop();
  }, [
    currentQuestion?.id,
    currentQuestion?.type,
    speakMatched,
    expressionMatched,
    pulseAnim,
  ]);

  const goToNextQuestion = useCallback(() => {
    setSelectedOption(null);
    setSpeakMatched(false);
    setSpeakHeard(null);
    speakMatchedRef.current = false;
    setExpressionMatched(false);

    if (currentIndex + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  }, [currentIndex, questions.length]);

  // Cleanly stop the mic before leaving/advancing — matters specifically
  // for the speak question, harmless as a no-op otherwise.
  const stopListeningIfActive = useCallback(() => {
    if (currentQuestion?.type === "speak") {
      ExpoSpeechRecognitionModule.abort();
    }
  }, [currentQuestion]);

  const handleBack = useCallback(() => {
    stopListeningIfActive();
    router.back();
  }, [stopListeningIfActive, router]);

  const handleSkip = useCallback(() => {
    stopListeningIfActive();
    goToNextQuestion();
  }, [stopListeningIfActive, goToNextQuestion]);

  // Skip is only useful before the question is already answered — once
  // answered, "Next"/"Finish" is the way forward.
  const isAnswered =
    selectedOption !== null || speakMatched || expressionMatched;

  // =========================================================
  // MULTIPLE CHOICE
  // =========================================================

  const handleSelectOption = (option: string) => {
    if (selectedOption || currentQuestion?.type !== "multiple_choice") {
      return;
    }

    setSelectedOption(option);

    if (option === currentQuestion.correctMeaning) {
      setScore((s) => s + 1);
    }
  };

  // =========================================================
  // SPEAK
  // =========================================================

  const handleStartListening = useCallback(async () => {
    if (recognitionActiveRef.current || speakMatchedRef.current) {
      return;
    }

    try {
      const permission =
        await ExpoSpeechRecognitionModule.requestPermissionsAsync();

      if (!permission.granted) {
        console.log("🎤 Pretest: microphone permission not granted.");
        return;
      }

      ExpoSpeechRecognitionModule.start({
        lang: "fil-PH",
        interimResults: true,
        continuous: true,
      });

      recognitionActiveRef.current = true;
    } catch (error) {
      recognitionActiveRef.current = false;
      console.error("🎤 Pretest speech start failed:", error);
    }
  }, []);

  useSpeechRecognitionEvent("result", (event) => {
    if (
      !currentQuestion ||
      currentQuestion.type !== "speak" ||
      speakMatchedRef.current
    ) {
      return;
    }

    const transcript = event.results[0]?.transcript?.trim() ?? "";
    const isFinal = (event as any).isFinal ?? true;

    if (!transcript || !isFinal) {
      return;
    }

    const spokenWords = transcript.trim().split(/\s+/).map(normalizeWord);
    const spoken = spokenWords[spokenWords.length - 1] ?? "";
    const expected = normalizeWord(currentQuestion.word);

    setSpeakHeard(spoken);

    if (spoken === expected) {
      speakMatchedRef.current = true;
      setSpeakMatched(true);
      setScore((s) => s + 1);
      ExpoSpeechRecognitionModule.abort();
    }
  });

  useSpeechRecognitionEvent("end", () => {
    recognitionActiveRef.current = false;

    if (
      !currentQuestion ||
      currentQuestion.type !== "speak" ||
      speakMatchedRef.current
    ) {
      return;
    }

    if (restartTimeoutRef.current) {
      return;
    }

    restartTimeoutRef.current = setTimeout(() => {
      restartTimeoutRef.current = null;

      if (currentQuestion?.type === "speak" && !speakMatchedRef.current) {
        handleStartListening();
      }
    }, 250);
  });

  useEffect(() => {
    if (currentQuestion?.type !== "speak") {
      return;
    }

    speakMatchedRef.current = false;
    const timeout = setTimeout(() => handleStartListening(), 250);

    return () => {
      clearTimeout(timeout);

      if (restartTimeoutRef.current) {
        clearTimeout(restartTimeoutRef.current);
        restartTimeoutRef.current = null;
      }

      recognitionActiveRef.current = false;
      ExpoSpeechRecognitionModule.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestion?.id, currentQuestion?.type, handleStartListening]);

  // =========================================================
  // FACIAL EXPRESSION (item 10)
  // =========================================================

  const handleExpressionConfirmed = ({
    expression,
  }: PracticeExpressionResult) => {
    if (
      !currentQuestion ||
      currentQuestion.type !== "expression" ||
      expressionMatched ||
      expression !== currentQuestion.expectedExpression
    ) {
      return;
    }

    setExpressionMatched(true);
    setScore((s) => s + 1);
  };

  // =========================================================
  // NO CONTENT FALLBACK
  // =========================================================

  if (!lessonId || questions.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.centered}>
          <Text style={styles.emptyIcon}>🧩</Text>
          <Text style={styles.emptyTitle}>No pre-test yet</Text>
          <Text style={styles.emptyText}>
            This lesson doesn&apos;t have a pre-test ready. You can head back and
            jump straight into practice instead.
          </Text>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => router.back()}
            activeOpacity={0.85}
          >
            <Text style={styles.primaryButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // =========================================================
  // SUMMARY
  // =========================================================

  if (finished) {
    const ratio = score / questions.length;
    const summaryMessage =
      ratio === 1
        ? "Perfect run — you're warmed up and ready."
        : ratio >= 0.6
          ? "Nice work — you've got a good sense of this already."
          : "Good warm-up — the lesson will fill in the rest.";

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.centered}>
          <Text style={styles.summaryEyebrow}>QUICK CHECK COMPLETE</Text>

          <View style={styles.scoreCircle}>
            <Text style={styles.scoreNumber}>{score}</Text>
            <Text style={styles.scoreDenominator}>
              out of {questions.length}
            </Text>
          </View>

          <Text style={styles.summaryMessage}>{summaryMessage}</Text>
          <Text style={styles.summarySubtitle}>
            This is just a check-in — it doesn&apos;t affect your progress.
          </Text>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() =>
              router.replace({
                pathname: "/lesson/practice",
                params: { lessonId },
              })
            }
            activeOpacity={0.85}
          >
            <Text style={styles.primaryButtonText}>Continue to Lesson</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // =========================================================
  // QUESTION UI
  // =========================================================

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* BACK / SKIP */}
        <View style={styles.headerRow}>
          <TouchableOpacity
            style={styles.headerButton}
            onPress={handleBack}
            activeOpacity={0.8}
          >
            <Text style={styles.headerButtonText}>‹ Back</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.headerButton,
              isAnswered && styles.headerButtonDisabled,
            ]}
            onPress={handleSkip}
            disabled={isAnswered}
            activeOpacity={0.8}
          >
            <Text style={styles.headerButtonText}>Skip ›</Text>
          </TouchableOpacity>
        </View>

        {/* PROGRESS */}
        <View style={styles.progressHeader}>
          <Text style={styles.progressLabel}>Quick Check</Text>
          <Text style={styles.progressCount}>
            {currentIndex + 1} / {questions.length}
          </Text>
        </View>

        <View style={styles.progressBarBackground}>
          <Animated.View
            style={[styles.progressBarFill, { width: progressWidth }]}
          />
        </View>

        {/* TYPE BADGE */}
        <View style={styles.typeBadge}>
          <Text style={styles.typeBadgeText}>
            {TYPE_LABELS[currentQuestion.type]}
          </Text>
        </View>

        {currentQuestion.type === "multiple_choice" && (
          <View style={styles.card}>
            <Text style={styles.caption}>What does this word mean?</Text>
            <Text style={styles.wordDisplay}>{currentQuestion.word}</Text>

            <View style={styles.optionsGroup}>
              {currentQuestion.options.map((option) => {
                const isSelected = selectedOption === option;
                const isCorrectOption =
                  option === currentQuestion.correctMeaning;
                const showFeedback = selectedOption !== null;

                return (
                  <TouchableOpacity
                    key={option}
                    style={[
                      styles.optionButton,
                      showFeedback &&
                        isCorrectOption &&
                        styles.optionButtonCorrect,
                      showFeedback &&
                        isSelected &&
                        !isCorrectOption &&
                        styles.optionButtonWrong,
                    ]}
                    onPress={() => handleSelectOption(option)}
                    disabled={selectedOption !== null}
                    activeOpacity={0.85}
                  >
                    <Text
                      style={[
                        styles.optionText,
                        showFeedback &&
                          isCorrectOption &&
                          styles.optionTextCorrect,
                        showFeedback &&
                          isSelected &&
                          !isCorrectOption &&
                          styles.optionTextWrong,
                      ]}
                    >
                      {showFeedback && isCorrectOption
                        ? "✓  "
                        : showFeedback && isSelected
                          ? "✕  "
                          : ""}
                      {option}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            {selectedOption !== null && (
              <TouchableOpacity
                style={styles.primaryButton}
                onPress={goToNextQuestion}
                activeOpacity={0.85}
              >
                <Text style={styles.primaryButtonText}>
                  {currentIndex + 1 >= questions.length ? "Finish" : "Next"}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        )}

        {currentQuestion.type === "speak" && (
          <View style={styles.card}>
            <Text style={styles.caption}>Say this word out loud</Text>

            <View style={styles.speakHero}>
              <Animated.View
                style={[
                  styles.pulseCircle,
                  speakMatched && styles.pulseCircleDone,
                  { transform: [{ scale: pulseAnim }] },
                ]}
              >
                <Text style={styles.pulseIcon}>
                  {speakMatched ? "✓" : "🎤"}
                </Text>
              </Animated.View>
            </View>

            <Text style={styles.wordDisplay}>{currentQuestion.word}</Text>

            <Text style={styles.statusText}>
              {speakMatched
                ? "Correct!"
                : speakHeard
                  ? `Heard: "${speakHeard}" — try again`
                  : "Listening..."}
            </Text>

            {speakMatched && (
              <TouchableOpacity
                style={styles.primaryButton}
                onPress={goToNextQuestion}
                activeOpacity={0.85}
              >
                <Text style={styles.primaryButtonText}>
                  {currentIndex + 1 >= questions.length ? "Finish" : "Next"}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        )}

        {currentQuestion.type === "expression" && (
          <View style={styles.card}>
            <Text style={styles.caption}>{currentQuestion.prompt}</Text>

            <Animated.View
              style={[
                styles.cameraFrame,
                expressionMatched && styles.cameraFrameDone,
                { transform: [{ scale: pulseAnim }] },
              ]}
            >
              <FaceDetectionProvider
                options={{
                  performanceMode: "fast",
                  classificationMode: true,
                }}
              >
                <PracticeCamera
                  expectedExpression={currentQuestion.expectedExpression}
                  phraseId={currentQuestion.id}
                  onExpressionConfirmed={handleExpressionConfirmed}
                />
              </FaceDetectionProvider>
            </Animated.View>

            <Text style={styles.statusText}>
              {expressionMatched ? "Correct!" : "Show the expression above"}
            </Text>

            {expressionMatched && (
              <TouchableOpacity
                style={styles.primaryButton}
                onPress={goToNextQuestion}
                activeOpacity={0.85}
              >
                <Text style={styles.primaryButtonText}>Finish</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },

  content: {
    padding: 20,
    paddingBottom: 60,
  },

  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },

  /* =========================
     HEADER (BACK / SKIP)
  ========================= */

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  headerButton: {
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  headerButtonDisabled: {
    opacity: 0.35,
  },

  headerButtonText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#5E3BEE",
  },

  /* =========================
     PROGRESS
  ========================= */

  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },

  progressLabel: {
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 1,
    color: "#5E3BEE",
    textTransform: "uppercase",
  },

  progressCount: {
    fontSize: 13,
    fontWeight: "800",
    color: "#5E3BEE",
    backgroundColor: "#ECEBFF",
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 10,
  },

  progressBarBackground: {
    height: 8,
    backgroundColor: "#E5E7EB",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 18,
  },

  progressBarFill: {
    height: "100%",
    backgroundColor: "#5E3BEE",
    borderRadius: 10,
  },

  /* =========================
     TYPE BADGE
  ========================= */

  typeBadge: {
    alignSelf: "center",
    backgroundColor: "#F3F2FA",
    borderWidth: 1,
    borderColor: "#E4E0FA",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 14,
  },

  typeBadgeText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#5E3BEE",
  },

  /* =========================
     CARD
  ========================= */

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 24,
    alignItems: "center",

    shadowColor: "#2D1B69",
    shadowOpacity: 0.06,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },

  caption: {
    fontSize: 15,
    fontWeight: "600",
    color: "#6B7280",
    marginBottom: 10,
    textAlign: "center",
    lineHeight: 21,
  },

  wordDisplay: {
    fontSize: 32,
    fontWeight: "800",
    color: "#410FA3",
    textAlign: "center",
    marginBottom: 22,
    letterSpacing: 0.3,
  },

  /* =========================
     MULTIPLE CHOICE OPTIONS
  ========================= */

  optionsGroup: {
    width: "100%",
    gap: 10,
  },

  optionButton: {
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
    backgroundColor: "#FAFAFB",
    borderRadius: 16,
    paddingVertical: 15,
    paddingHorizontal: 16,
  },

  optionButtonCorrect: {
    borderColor: "#22C55E",
    backgroundColor: "#ECFDF5",
  },

  optionButtonWrong: {
    borderColor: "#EF4444",
    backgroundColor: "#FEF2F2",
  },

  optionText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
    textAlign: "center",
    lineHeight: 22,
  },

  optionTextCorrect: {
    color: "#15803D",
  },

  optionTextWrong: {
    color: "#B91C1C",
  },

  /* =========================
     SPEAK
  ========================= */

  speakHero: {
    alignItems: "center",
    marginBottom: 10,
  },

  pulseCircle: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: "#ECEBFF",
    borderWidth: 2,
    borderColor: "#5E3BEE",
    alignItems: "center",
    justifyContent: "center",
  },

  pulseCircleDone: {
    backgroundColor: "#ECFDF5",
    borderColor: "#22C55E",
  },

  pulseIcon: {
    fontSize: 32,
  },

  statusText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#4B5563",
    textAlign: "center",
    marginTop: 4,
    marginBottom: 6,
    lineHeight: 21,
  },

  /* =========================
     EXPRESSION
  ========================= */

  cameraFrame: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#5E3BEE",
    overflow: "hidden",
    marginBottom: 10,
  },

  cameraFrameDone: {
    borderColor: "#22C55E",
  },

  /* =========================
     BUTTONS
  ========================= */

  primaryButton: {
    marginTop: 16,
    height: 52,
    width: "100%",
    borderRadius: 16,
    backgroundColor: "#5E3BEE",
    justifyContent: "center",
    alignItems: "center",
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },

  /* =========================
     EMPTY STATE
  ========================= */

  emptyIcon: {
    fontSize: 44,
    marginBottom: 12,
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#222",
    marginBottom: 8,
  },

  emptyText: {
    fontSize: 15,
    color: "#5B5B66",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 22,
  },

  /* =========================
     SUMMARY
  ========================= */

  summaryEyebrow: {
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 1.5,
    color: "#5E3BEE",
    textTransform: "uppercase",
    marginBottom: 20,
  },

  scoreCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "#ECEBFF",
    borderWidth: 4,
    borderColor: "#5E3BEE",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },

  scoreNumber: {
    fontSize: 48,
    fontWeight: "900",
    color: "#410FA3",
    lineHeight: 52,
  },

  scoreDenominator: {
    fontSize: 13,
    fontWeight: "700",
    color: "#5E3BEE",
    marginTop: 2,
  },

  summaryMessage: {
    fontSize: 17,
    fontWeight: "800",
    color: "#222",
    textAlign: "center",
    marginBottom: 8,
    paddingHorizontal: 10,
  },

  summarySubtitle: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginBottom: 28,
  },
});
