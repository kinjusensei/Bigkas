import { useLocalSearchParams, useRouter } from "expo-router";
import {
  ExpoSpeechRecognitionModule,
  useSpeechRecognitionEvent,
} from "expo-speech-recognition";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { FaceDetectionProvider } from "@infinitered/react-native-mlkit-face-detection";

import { practiceLevels } from "../../data/practiceData";
import { usePractice } from "../../hooks/usePractice";
import { savePracticeResult } from "../../services/practiceService";
import { PracticeExpressionResult } from "../../types/practice";
import PracticeCamera from "../components/Practice/PracticeCamera";
import PracticeTone, {
  ToneLevel,
  VowelLength,
} from "../components/Practice/PracticeTone";

// =========================================================
// PER-WORD SPEECH TRACKING
// =========================================================

type WordStatus = "pending" | "correct" | "wrong";

interface WordState {
  text: string;
  status: WordStatus;
  heardAs?: string;
}

const normalizeWord = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "")
    .trim();

/**
 * First attempt on a phrase: align the whole spoken transcript against the
 * whole expected phrase, word by word, position by position.
 */
const alignFullPhrase = (
  transcript: string,
  expectedWords: string[],
): WordState[] => {
  const spokenWords = transcript
    .trim()
    .split(/\s+/)
    .map(normalizeWord)
    .filter(Boolean);

  return expectedWords.map((expected, index) => {
    const expectedNorm = normalizeWord(expected);
    const spoken = spokenWords[index];

    if (spoken && spoken === expectedNorm) {
      return { text: expected, status: "correct" };
    }

    return {
      text: expected,
      status: "wrong",
      heardAs: spoken ?? "",
    };
  });
};

/**
 * Retry attempt: only the single active (leftmost non-correct) word needs
 * to be re-said, not the whole phrase.
 */
const evaluateActiveWord = (transcript: string, expectedWord: string) => {
  const spokenWords = transcript
    .trim()
    .split(/\s+/)
    .map(normalizeWord)
    .filter(Boolean);

  // Take the last spoken token in case of leading filler noise.
  const spoken = spokenWords[spokenWords.length - 1] ?? "";
  const expectedNorm = normalizeWord(expectedWord);

  return { matched: spoken === expectedNorm, heardAs: spoken };
};

export default function PracticeScreen() {
  const router = useRouter();

  const { lessonId } = useLocalSearchParams<{
    lessonId?: string;
  }>();

  const selectedLesson =
    practiceLevels.find((level) => level.lessonId === lessonId) ??
    practiceLevels[0];

  const { state, dispatch, currentPhrase } = usePractice(selectedLesson);

  const voiceCorrectRef = useRef(false);
  const expressionCorrectRef = useRef(false);
  const toneCorrectRef = useRef(false);
  const completedPhraseRef = useRef<number | null>(null);
  const recognitionActiveRef = useRef(false);
  const restartTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const toneMountTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const [wordStates, setWordStates] = useState<WordState[]>([]);

  // Tone/vowel-length is checked as one added step AFTER all words are
  // speech-correct — not simultaneously, since PracticeTone's raw mic
  // capture and expo-speech-recognition can't both hold the microphone at
  // once, and PracticeTone only classifies one whole utterance at a time
  // (no per-word breakdown), so it fits the whole phrase as a single check.
  const [showToneStep, setShowToneStep] = useState(false);
  const [toneCorrect, setToneCorrect] = useState(false);
  const [toneFeedback, setToneFeedback] = useState<{
    tone: ToneLevel;
    vowelLength: VowelLength;
  } | null>(null);

  const handleStartSpeechRecognition = useCallback(async () => {
    if (recognitionActiveRef.current || voiceCorrectRef.current) {
      return;
    }

    try {
      const permission =
        await ExpoSpeechRecognitionModule.requestPermissionsAsync();

      if (!permission.granted) {
        console.log("🎤 Microphone permission was not granted.");
        return;
      }

      ExpoSpeechRecognitionModule.start({
        lang: "fil-PH",
        interimResults: true,
        continuous: true,
      });

      recognitionActiveRef.current = true;

      console.log("🎤 Speech recognition started.");
    } catch (error) {
      recognitionActiveRef.current = false;
      console.error("🎤 Failed to start speech recognition:", error);
    }
  }, []);

  const completeCurrentPhrase = useCallback(() => {
    if (
      state.status !== "RUNNING" ||
      !currentPhrase ||
      !voiceCorrectRef.current ||
      !expressionCorrectRef.current ||
      !toneCorrectRef.current
    ) {
      return;
    }

    if (completedPhraseRef.current === currentPhrase.id) {
      return;
    }

    completedPhraseRef.current = currentPhrase.id;

    ExpoSpeechRecognitionModule.abort();

    dispatch({ type: "CORRECT_ANSWER" });
    dispatch({ type: "NEXT_PHRASE" });
  }, [state.status, currentPhrase?.id, dispatch]);

  useSpeechRecognitionEvent("result", (event) => {
    const transcript = event.results[0]?.transcript?.trim() ?? "";
    // Fall back to "true" if this build's event shape doesn't expose isFinal,
    // preserving the previous behavior of evaluating every result event.
    const isFinal = (event as any).isFinal ?? true;

    if (
      !transcript ||
      !isFinal ||
      state.status !== "RUNNING" ||
      !currentPhrase ||
      voiceCorrectRef.current ||
      wordStates.length === 0
    ) {
      return;
    }

    console.log("🎤 SPEECH RESULT:", transcript);

    const activeIndex = wordStates.findIndex((w) => w.status !== "correct");

    if (activeIndex === -1) {
      // Everything already correct; shouldn't normally happen, but guard anyway.
      voiceCorrectRef.current = true;
      ExpoSpeechRecognitionModule.abort();
      completeCurrentPhrase();
      return;
    }

    const hasAnyProgress = wordStates.some((w) => w.status !== "pending");

    let nextWordStates: WordState[];

    if (!hasAnyProgress) {
      // First attempt on this phrase: align the whole spoken phrase.
      nextWordStates = alignFullPhrase(
        transcript,
        wordStates.map((w) => w.text),
      );
      console.log(
        "🎯 First-pass alignment:",
        nextWordStates.map((w) => `${w.text}:${w.status}`).join(" "),
      );
    } else {
      // Retry: only the active wrong word needs to be re-said.
      const { matched, heardAs } = evaluateActiveWord(
        transcript,
        wordStates[activeIndex].text,
      );

      console.log(
        matched ? "✅ Retry word matched!" : "❌ Retry word still wrong.",
        `expected="${wordStates[activeIndex].text}" heard="${heardAs}"`,
      );

      nextWordStates = wordStates.map((w, index) =>
        index === activeIndex
          ? matched
            ? { text: w.text, status: "correct" as const }
            : { text: w.text, status: "wrong" as const, heardAs }
          : w,
      );
    }

    setWordStates(nextWordStates);

    const allCorrect = nextWordStates.every((w) => w.status === "correct");

    if (allCorrect) {
      console.log("✅ All words matched! Handing off mic to tone check.");
      voiceCorrectRef.current = true;
      ExpoSpeechRecognitionModule.abort();

      // Give Android a moment to fully release the mic from speech
      // recognition before PracticeTone's raw audio capture starts —
      // starting both at once is what risks the near-silent-audio bug.
      if (toneMountTimeoutRef.current) {
        clearTimeout(toneMountTimeoutRef.current);
      }
      toneMountTimeoutRef.current = setTimeout(() => {
        toneMountTimeoutRef.current = null;
        setShowToneStep(true);
      }, 400);

      completeCurrentPhrase();
    }
  });

  useSpeechRecognitionEvent("error", (event) => {
    recognitionActiveRef.current = false;

    console.log("🎤 SPEECH ERROR:", event.error, event.message);
  });

  useSpeechRecognitionEvent("end", () => {
    recognitionActiveRef.current = false;

    if (
      state.status !== "RUNNING" ||
      !currentPhrase ||
      voiceCorrectRef.current
    ) {
      return;
    }

    if (restartTimeoutRef.current) {
      return;
    }

    restartTimeoutRef.current = setTimeout(() => {
      restartTimeoutRef.current = null;

      if (
        state.status === "RUNNING" &&
        currentPhrase &&
        !voiceCorrectRef.current
      ) {
        handleStartSpeechRecognition();
      }
    }, 250);
  });

  useEffect(() => {
    voiceCorrectRef.current = false;
    expressionCorrectRef.current = false;
    toneCorrectRef.current = false;
    completedPhraseRef.current = null;

    setShowToneStep(false);
    setToneCorrect(false);
    setToneFeedback(null);

    if (toneMountTimeoutRef.current) {
      clearTimeout(toneMountTimeoutRef.current);
      toneMountTimeoutRef.current = null;
    }

    if (currentPhrase) {
      setWordStates(
        currentPhrase.text
          .trim()
          .split(/\s+/)
          .filter(Boolean)
          .map((word) => ({ text: word, status: "pending" as const })),
      );
    } else {
      setWordStates([]);
    }

    if (restartTimeoutRef.current) {
      clearTimeout(restartTimeoutRef.current);
      restartTimeoutRef.current = null;
    }

    if (state.status !== "RUNNING" || !currentPhrase) {
      return;
    }

    const timeout = setTimeout(() => {
      handleStartSpeechRecognition();
    }, 250);

    return () => {
      clearTimeout(timeout);

      if (restartTimeoutRef.current) {
        clearTimeout(restartTimeoutRef.current);
        restartTimeoutRef.current = null;
      }

      if (toneMountTimeoutRef.current) {
        clearTimeout(toneMountTimeoutRef.current);
        toneMountTimeoutRef.current = null;
      }

      recognitionActiveRef.current = false;
      ExpoSpeechRecognitionModule.abort();
    };
  }, [state.status, currentPhrase?.id, handleStartSpeechRecognition]);

  // =========================================================
  // SAVE PRACTICE RESULT
  // =========================================================

  // Shared by the normal FINISHED flow and Surrender — both should show the
  // same result screen using whatever was actually completed so far.
  const goToResultScreen = useCallback(async () => {
    try {
      await savePracticeResult({
        lessonId: state.level.lessonId,
        score: state.score,
        correctAnswers: state.correctAnswers,
        totalQuestions: state.totalQuestions,
        accuracy: state.accuracy,
        xpEarned: state.xpEarned,
        stars: state.stars,
        badge: state.badge,
      });
    } catch (error) {
      console.error("Failed to save practice result:", error);
    }

    router.replace({
      pathname: "/lesson/result",
      params: {
        score: state.score.toString(),
        correct: state.correctAnswers.toString(),
        total: state.totalQuestions.toString(),
        accuracy: state.accuracy.toString(),
        xp: state.xpEarned.toString(),
        won: (state.correctAnswers >= state.level.requiredCorrect).toString(),
      },
    });
  }, [
    router,
    state.level.lessonId,
    state.level.requiredCorrect,
    state.score,
    state.correctAnswers,
    state.totalQuestions,
    state.accuracy,
    state.xpEarned,
    state.stars,
    state.badge,
  ]);

  useEffect(() => {
    if (state.status !== "FINISHED") return;
    goToResultScreen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.status]);

  // =========================================================
  // SURRENDER
  // =========================================================

  const handleSurrender = () => {
    Alert.alert(
      "Surrender Practice?",
      "Are you sure you want to surrender? You'll see your results based on what you've completed so far.",
      [
        {
          text: "Continue Practice",
          style: "cancel",
        },
        {
          text: "Surrender",
          style: "destructive",
          onPress: () => {
            ExpoSpeechRecognitionModule.abort();
            goToResultScreen();
          },
        },
      ],
    );
  };

  // =========================================================
  // PRACTICE STATE
  // =========================================================

  const isReady = state.status === "READY";
  const isRunning = state.status === "RUNNING";
  const isPaused = state.status === "PAUSED";

  // Guard against a stale wordStates render (e.g. right after the phrase
  // changes but before the reset effect has run) by falling back to a
  // freshly-derived pending list for the current phrase text.
  const displayWords: WordState[] = currentPhrase
    ? wordStates.length > 0 &&
      wordStates.map((w) => w.text).join(" ") === currentPhrase.text.trim()
      ? wordStates
      : currentPhrase.text
          .trim()
          .split(/\s+/)
          .filter(Boolean)
          .map((word) => ({ text: word, status: "pending" as const }))
    : [];

  // =========================================================
  // EXPRESSION CONFIRMATION
  // =========================================================

  const handleExpressionConfirmed = ({
    expression,
  }: PracticeExpressionResult) => {
    if (
      state.status !== "RUNNING" ||
      !currentPhrase ||
      expression !== currentPhrase.expectedExpression ||
      expressionCorrectRef.current
    ) {
      return;
    }

    // NOTE: this used to dispatch NEXT_PHRASE directly, which meant the
    // phrase advanced on facial expression alone — voice (and now tone)
    // were never actually required. Routing through completeCurrentPhrase
    // makes expression one of three gates, same as voice and tone.
    expressionCorrectRef.current = true;
    completeCurrentPhrase();
  };

  // =========================================================
  // TONE / VOWEL-LENGTH CONFIRMATION
  // =========================================================

  const handleToneConfirmed = useCallback(
    (result: {
      tone: ToneLevel;
      averagePitch: number;
      vowelLength: VowelLength;
      durationMs: number;
    }) => {
      if (
        state.status !== "RUNNING" ||
        !currentPhrase ||
        toneCorrectRef.current
      ) {
        return;
      }

      // Phrase data now declares `expectedTone` (required) and
      // `expectedVowelLength` (optional) directly on PracticePhrase —
      // see types/practice.ts. No more defensive casting needed here.
      const expectedTone = currentPhrase.expectedTone;
      const expectedVowelLength = currentPhrase.expectedVowelLength;

      const toneMatches = result.tone === expectedTone;
      const vowelMatches =
        !expectedVowelLength || result.vowelLength === expectedVowelLength;

      setToneFeedback({ tone: result.tone, vowelLength: result.vowelLength });

      if (toneMatches && vowelMatches) {
        console.log("✅ Tone/vowel length matched!");
        toneCorrectRef.current = true;
        setToneCorrect(true);
        completeCurrentPhrase();
      } else {
        console.log(
          "❌ Tone/vowel length mismatch.",
          `expected tone="${expectedTone}" heard="${result.tone}"`,
          `expected vowel="${expectedVowelLength ?? "n/a"}" heard="${result.vowelLength}"`,
        );
      }
    },
    [state.status, currentPhrase, completeCurrentPhrase],
  );

  // =========================================================
  // UI
  // =========================================================

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.surrenderButton}
            onPress={handleSurrender}
            activeOpacity={0.8}
          >
            <Text style={styles.surrenderButtonText}>Surrender</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Practice</Text>

          <View style={styles.timerContainer}>
            <Text style={styles.timerIcon}>⏱</Text>

            <Text style={styles.timer}>{state.timeLeft}s</Text>
          </View>
        </View>

        {/* Lesson Information */}
        <View style={styles.lessonInfo}>
          <Text style={styles.lessonTitle}>{state.level.title}</Text>

          <Text style={styles.lessonId}>{state.level.lessonId}</Text>
        </View>

        {/* Progress */}
        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>Progress</Text>

            <Text style={styles.progressCount}>
              {state.currentPhraseIndex + 1} / {state.level.phrases.length}
            </Text>
          </View>

          <View style={styles.progressBarBackground}>
            <View
              style={[
                styles.progressBar,
                {
                  width: `${
                    ((state.currentPhraseIndex + 1) /
                      state.level.phrases.length) *
                    100
                  }%`,
                },
              ]}
            />
          </View>
        </View>

        {/* Phrase Card */}
        <View style={styles.phraseCard}>
          <Text style={styles.phraseLabel}>Say this phrase</Text>

          <View style={styles.phraseWordsRow}>
            {displayWords.map((word, index) => (
              <View key={`${word.text}-${index}`} style={styles.wordWrapper}>
                {word.status === "wrong" && (
                  <Text style={styles.heardText} numberOfLines={1}>
                    {word.heardAs ? `"${word.heardAs}"` : "—"}
                  </Text>
                )}

                <Text
                  style={[
                    styles.phraseWord,
                    word.status === "correct" && styles.phraseWordCorrect,
                    word.status === "wrong" && styles.phraseWordWrong,
                  ]}
                >
                  {word.text}
                </Text>
              </View>
            ))}
          </View>

          {displayWords.some((w) => w.status === "wrong") && (
            <Text style={styles.retryHint}>
              Say the highlighted word(s) again
            </Text>
          )}

          {/* Tone / vowel-length step — only appears once every word is
              speech-correct, since it takes over the mic from speech
              recognition (see handoff notes on the mic-conflict fix). */}
          {showToneStep && currentPhrase && (
            <View style={styles.toneSection}>
              <Text style={styles.toneLabel}>
                {toneCorrect
                  ? "Tone confirmed!"
                  : "Now say it again with the right tone"}
              </Text>

              {!toneCorrect && (
                <PracticeTone
                  expectedTone={currentPhrase.expectedTone}
                  expectedVowelLength={currentPhrase.expectedVowelLength}
                  onToneConfirmed={handleToneConfirmed}
                />
              )}

              {toneFeedback && !toneCorrect && (
                <Text style={styles.toneMismatch}>
                  Heard: {toneFeedback.tone} tone
                  {toneFeedback.vowelLength !== "unknown"
                    ? `, ${toneFeedback.vowelLength} vowel`
                    : ""}{" "}
                  — try again
                </Text>
              )}
            </View>
          )}

          {/* Camera */}
          <FaceDetectionProvider
            options={{
              performanceMode: "fast",
              classificationMode: true,
            }}
          >
            {currentPhrase && (
              <PracticeCamera
                expectedExpression={currentPhrase.expectedExpression}
                phraseId={currentPhrase.id}
                onExpressionConfirmed={handleExpressionConfirmed}
              />
            )}
          </FaceDetectionProvider>
        </View>

        {/* Score */}
        <View style={styles.scoreRow}>
          <View style={styles.scoreBox}>
            <Text style={styles.scoreLabel}>Score</Text>

            <Text style={styles.scoreValue}>{state.score}</Text>
          </View>

          <View style={styles.scoreBox}>
            <Text style={styles.scoreLabel}>Correct</Text>

            <Text style={styles.scoreValue}>
              {state.correctAnswers}/{state.totalQuestions}
            </Text>
          </View>
        </View>

        {/* Status */}
        <View style={styles.statusContainer}>
          <View
            style={[
              styles.statusDot,
              isRunning && styles.statusRunning,
              isPaused && styles.statusPaused,
            ]}
          />

          <Text style={styles.statusText}>
            {isReady && "Ready to begin"}
            {isRunning && "Practice in progress"}
            {isPaused && "Practice paused"}
          </Text>
        </View>

        {/* Start Button */}
        {isReady && (
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => {
              dispatch({ type: "START" });
              handleStartSpeechRecognition();
            }}
            activeOpacity={0.85}
          >
            <Text style={styles.primaryButtonText}>Start Practice</Text>
          </TouchableOpacity>
        )}

        {/* Resume Button */}
        {isPaused && (
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => dispatch({ type: "RESUME" })}
            activeOpacity={0.85}
          >
            <Text style={styles.primaryButtonText}>Resume Practice</Text>
          </TouchableOpacity>
        )}

        {/* Pause Button */}
        {isRunning && (
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => {
              ExpoSpeechRecognitionModule.stop();
              dispatch({ type: "PAUSE" });
            }}
            activeOpacity={0.85}
          >
            <Text style={styles.secondaryButtonText}>Pause</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8F8FC",
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },

  /* =========================
     HEADER
  ========================= */

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  surrenderButton: {
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  surrenderButtonText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#EF4444",
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#222",
  },

  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ECEBFF",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 14,
  },

  timerIcon: {
    fontSize: 16,
    marginRight: 5,
  },

  timer: {
    fontSize: 16,
    fontWeight: "800",
    color: "#5E3BEE",
  },

  /* =========================
     LESSON INFO
  ========================= */

  lessonInfo: {
    alignItems: "center",
    marginBottom: 18,
  },

  lessonTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#222",
    textAlign: "center",
  },

  lessonId: {
    marginTop: 4,
    fontSize: 13,
    color: "#888",
  },

  /* =========================
     PROGRESS
  ========================= */

  progressSection: {
    marginBottom: 18,
  },

  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  progressLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#555",
  },

  progressCount: {
    fontSize: 14,
    fontWeight: "700",
    color: "#5E3BEE",
  },

  progressBarBackground: {
    height: 8,
    backgroundColor: "#E5E7EB",
    borderRadius: 10,
    overflow: "hidden",
  },

  progressBar: {
    height: "100%",
    backgroundColor: "#5E3BEE",
    borderRadius: 10,
  },

  /* =========================
     PHRASE CARD
  ========================= */

  phraseCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 22,
    alignItems: "center",
    marginBottom: 16,

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 4,
  },

  phraseLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#888",
    marginBottom: 12,
  },

  phrase: {
    fontSize: 30,
    fontWeight: "800",
    textAlign: "center",
    color: "#333",
    marginBottom: 18,
  },

  /* =========================
     PER-WORD SPEECH FEEDBACK
  ========================= */

  phraseWordsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 14,
  },

  wordWrapper: {
    alignItems: "center",
    marginHorizontal: 5,
    marginBottom: 10,
    minWidth: 40,
  },

  heardText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#EF4444",
    marginBottom: 2,
  },

  phraseWord: {
    fontSize: 30,
    fontWeight: "800",
    textAlign: "center",
    color: "#333",
  },

  phraseWordCorrect: {
    color: "#22C55E",
  },

  phraseWordWrong: {
    color: "#EF4444",
    textDecorationLine: "underline",
  },

  retryHint: {
    fontSize: 13,
    fontWeight: "600",
    color: "#EF4444",
    marginBottom: 4,
  },

  /* =========================
     TONE / VOWEL-LENGTH STEP
  ========================= */

  toneSection: {
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
    paddingTop: 6,
    borderTopWidth: 1,
    borderTopColor: "#EEEAFB",
  },

  toneLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#5E3BEE",
    marginBottom: 4,
    textAlign: "center",
  },

  toneMismatch: {
    fontSize: 13,
    fontWeight: "600",
    color: "#EF4444",
    marginTop: 4,
    textAlign: "center",
  },

  /* =========================
     SCORE
  ========================= */

  scoreRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 14,
  },

  scoreBox: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 12,
    alignItems: "center",
  },

  scoreLabel: {
    fontSize: 13,
    color: "#777",
    fontWeight: "600",
  },

  scoreValue: {
    fontSize: 22,
    fontWeight: "800",
    color: "#5E3BEE",
    marginTop: 3,
  },

  /* =========================
     STATUS
  ========================= */

  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  statusDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: "#9CA3AF",
    marginRight: 7,
  },

  statusRunning: {
    backgroundColor: "#22C55E",
  },

  statusPaused: {
    backgroundColor: "#F59E0B",
  },

  statusText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
  },

  /* =========================
     BUTTONS
  ========================= */

  primaryButton: {
    height: 54,
    backgroundColor: "#5E3BEE",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "800",
  },

  secondaryButton: {
    height: 54,
    borderWidth: 2,
    borderColor: "#5E3BEE",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  secondaryButtonText: {
    color: "#5E3BEE",
    fontSize: 17,
    fontWeight: "800",
  },
});
