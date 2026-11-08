import { Redirect, useLocalSearchParams, useRouter } from "expo-router";
import {
  ExpoSpeechRecognitionModule,
  useSpeechRecognitionEvent,
} from "expo-speech-recognition";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Alert,
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { FaceDetectionProvider } from "@infinitered/react-native-mlkit-face-detection";

import LessonGate from "../../components/lesson/LessonGate";
import { practiceLevels } from "../../data/practiceData";
import { findStoryForLesson } from "../../data/storyData";
import { useLogLessonStart } from "../../hooks/useLogLessonStart";
import { usePractice } from "../../hooks/usePractice";
import {
  savePracticeResult,
  type SavePracticeResult,
} from "../../services/practiceService";
import {
  PracticeExpressionResult,
  PracticeLevel,
} from "../../types/practice";
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

type PracticeStage = "voice" | "expression" | "tone";

type StageResults = {
  voiceCorrect: boolean | null;
  expressionCorrect: boolean | null;
  toneCorrect: boolean | null;
};

const EMPTY_STAGE_RESULTS: StageResults = {
  voiceCorrect: null,
  expressionCorrect: null,
  toneCorrect: null,
};

const STAGE_TIMEOUT_MS = 10000;

const UNAVAILABLE_PRACTICE_LEVEL: PracticeLevel = {
  id: -1,
  lessonId: "unavailable",
  title: "Practice unavailable",
  subtitle: "Practice content is not available for this dialect yet.",
  requiredCorrect: 0,
  phrases: [],
};

const DASHBOARD_ROUTE = "/dashboard" as const;

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

// A locked lesson (previous one not complete) doesn't open. Story practice
// has its own screen, so a story id here (an old link) goes there.
export default function PracticeRoute() {
  const { lessonId, storyLessonId } = useLocalSearchParams<{
    lessonId?: string;
    storyLessonId?: string;
  }>();
  const storyId =
    storyLessonId ?? (lessonId?.startsWith("story_") ? lessonId : undefined);
  if (storyId) {
    const found = findStoryForLesson(storyId);
    const chapter = found?.story.chapters.find(
      (item) => item.lessonId === storyId,
    );
    return (
      <Redirect
        href={{
          pathname: "/lesson/pretest",
          params: {
            storyLessonId: storyId,
            dialect: found?.dialect ?? "",
            chapterId: chapter ? String(chapter.id) : "",
          },
        }}
      />
    );
  }
  return (
    <LessonGate lessonId={lessonId}>
      <PracticeScreen />
    </LessonGate>
  );
}

function PracticeScreen() {
  const router = useRouter();

  const { lessonId, cameraHints } = useLocalSearchParams<{
    lessonId?: string;
    cameraHints?: string;
  }>();
  useLogLessonStart(lessonId, "practice");

  // Set by the structured lesson flow (components/lesson): there the
  // facial-expression check is an optional hint that never affects the
  // score — "off" skips the camera stage, "on" shows it ungraded. Without
  // the param (every other entry point) expression stays a graded stage.
  const expressionOptional = cameraHints === "on" || cameraHints === "off";
  const skipExpressionStage = cameraHints === "off";

  const resultLessonId = lessonId;

  const selectedLesson = practiceLevels.find(
    (level) => level.lessonId === lessonId,
  );
  const hasPracticeContent = Boolean(selectedLesson);

  const { state, dispatch, currentPhrase } = usePractice(
    selectedLesson ?? UNAVAILABLE_PRACTICE_LEVEL,
  );

  const [stage, setStage] = useState<PracticeStage>("voice");
  const [stageResults, setStageResults] =
    useState<StageResults>(EMPTY_STAGE_RESULTS);
  const stageRef = useRef<PracticeStage>("voice");
  const stageResolvedRef = useRef(false);
  const completedPhraseRef = useRef<number | null>(null);
  const recognitionActiveRef = useRef(false);
  const recognitionStartingRef = useRef(false);
  const stageTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const voiceRetryTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stoppingVoiceRef = useRef(false);
  const savingResultRef = useRef(false);
  const resultSavedRef = useRef(false);
  const resultSnapshotRef = useRef<SavePracticeResult | null>(null);
  const resultWonRef = useRef<boolean | null>(null);
  const attemptFrozenRef = useRef(false);

  const [wordStates, setWordStates] = useState<WordState[]>([]);
  // Camera-hints mode only: a gentle, dismissible offer shown when the
  // camera sees signs of difficulty. Never affects the score.
  const [showComfortHint, setShowComfortHint] = useState(false);

  // Tone/vowel-length is checked as one added step AFTER all words are
  // speech-correct — not simultaneously, since PracticeTone's raw mic
  // capture and expo-speech-recognition can't both hold the microphone at
  // once, and PracticeTone only classifies one whole utterance at a time
  // (no per-word breakdown), so it fits the whole phrase as a single check.
  const [toneFeedback, setToneFeedback] = useState<{
    tone: ToneLevel;
    vowelLength: VowelLength;
    unclear?: boolean;
  } | null>(null);
  const [latestPitchHz, setLatestPitchHz] = useState<number | null>(null);
  const [saveError, setSaveError] = useState(false);
  const [savingResult, setSavingResult] = useState(false);
  const [attemptFrozen, setAttemptFrozen] = useState(false);

  const handleStartSpeechRecognition = useCallback(async () => {
    if (
      stageRef.current !== "voice" ||
      recognitionActiveRef.current ||
      recognitionStartingRef.current ||
      attemptFrozenRef.current
    ) {
      return;
    }

    recognitionStartingRef.current = true;

    try {
      const permission =
        await ExpoSpeechRecognitionModule.requestPermissionsAsync();

      if (!permission.granted) {
        console.log("🎤 Microphone permission was not granted.");
        recognitionStartingRef.current = false;
        return;
      }

      ExpoSpeechRecognitionModule.start({
        lang: "fil-PH",
        interimResults: true,
        continuous: true,
      });

      recognitionActiveRef.current = true;
      recognitionStartingRef.current = false;
      stoppingVoiceRef.current = false;

      console.log("🎤 Speech recognition started.");
    } catch (error) {
      recognitionActiveRef.current = false;
      recognitionStartingRef.current = false;
      console.error("🎤 Failed to start speech recognition:", error);
    }
  }, []);

  const finishStage = useCallback(
    (finishedStage: PracticeStage, passed: boolean) => {
      console.log("[Practice][Diagnostic] stage result received", {
        questionIndex: state.currentPhraseIndex,
        stage: finishedStage,
        passed,
      });
      if (finishedStage === "tone") {
        console.log("[Practice][Transition] finishStage tone entry", {
          timestampMs: Date.now(),
          phraseId: currentPhrase?.id ?? null,
          passed,
          currentStage: stageRef.current,
          status: state.status,
        });
      }
      if (
        state.status !== "RUNNING" ||
        attemptFrozenRef.current ||
        !currentPhrase ||
        stageRef.current !== finishedStage ||
        stageResolvedRef.current
      ) {
        return;
      }

      stageResolvedRef.current = true;
      if (stageTimeoutRef.current) {
        clearTimeout(stageTimeoutRef.current);
        stageTimeoutRef.current = null;
      }

      if (finishedStage === "voice") {
        stoppingVoiceRef.current = true;
        recognitionActiveRef.current = false;
        ExpoSpeechRecognitionModule.abort();
      }

      const nextResults = {
        ...stageResults,
        [`${finishedStage}Correct`]: passed,
      } as StageResults;
      setStageResults(nextResults);

      if (!passed) {
        // A failed stage stays active until the learner passes it.
        stageResolvedRef.current = false;

        if (finishedStage === "voice") {
          stoppingVoiceRef.current = true;
          recognitionActiveRef.current = false;
          ExpoSpeechRecognitionModule.abort();

          // Restart voice recognition so the learner can immediately try
          // the same phrase again without advancing the stage.
          if (voiceRetryTimeoutRef.current) {
            clearTimeout(voiceRetryTimeoutRef.current);
          }
          voiceRetryTimeoutRef.current = setTimeout(() => {
            voiceRetryTimeoutRef.current = null;
            if (
              state.status === "RUNNING" &&
              stageRef.current === "voice" &&
              !attemptFrozenRef.current
            ) {
              stoppingVoiceRef.current = false;
              handleStartSpeechRecognition();
            }
          }, 600);
        }

        return;
      }

      if (finishedStage === "voice") {
        const nextStage = skipExpressionStage ? "tone" : "expression";
        stageRef.current = nextStage;
        setStage(nextStage);
        stageResolvedRef.current = false;
        return;
      }

      if (finishedStage === "expression") {
        stageRef.current = "tone";
        setStage("tone");
        stageResolvedRef.current = false;
        return;
      }

      if (completedPhraseRef.current === currentPhrase.id) {
        return;
      }

      completedPhraseRef.current = currentPhrase.id;
      const wordCorrect =
        nextResults.voiceCorrect &&
        (expressionOptional || nextResults.expressionCorrect) &&
        nextResults.toneCorrect;

      console.log("[Practice][Diagnostic] word result evaluated", {
        questionIndex: state.currentPhraseIndex,
        voiceCorrect: nextResults.voiceCorrect,
        expressionCorrect: nextResults.expressionCorrect,
        toneCorrect: nextResults.toneCorrect,
        wordCorrect,
      });

      if (wordCorrect) {
        dispatch({ type: "CORRECT_ANSWER" });
      }
      stageRef.current = "voice";
      setStage("voice");
      console.log("[Practice][Transition] before NEXT_PHRASE dispatch", {
        timestampMs: Date.now(),
        phraseId: currentPhrase.id,
        wordCorrect,
      });
      dispatch({ type: "NEXT_PHRASE" });
      console.log("[Practice][Transition] after NEXT_PHRASE dispatch", {
        timestampMs: Date.now(),
        phraseId: currentPhrase.id,
      });
    },
    [
      currentPhrase,
      dispatch,
      expressionOptional,
      handleStartSpeechRecognition,
      skipExpressionStage,
      stageResults,
      state.status,
    ],
  );

  useSpeechRecognitionEvent("result", (event) => {
    const transcript = event.results[0]?.transcript?.trim() ?? "";
    // Fall back to "true" if this build's event shape doesn't expose isFinal,
    // preserving the previous behavior of evaluating every result event.
    const isFinal = (event as any).isFinal ?? true;

    if (
      !transcript ||
      state.status !== "RUNNING" ||
      attemptFrozenRef.current ||
      stoppingVoiceRef.current ||
      !currentPhrase ||
      stageRef.current !== "voice" ||
      wordStates.length === 0
    ) {
      return;
    }

    const voiceStageStates = alignFullPhrase(
      transcript,
      wordStates.map((w) => w.text),
    );
    const allCorrect = voiceStageStates.every((w) => w.status === "correct");

    // Android can keep a result "not final" for as long as the mic is on,
    // so a full match counts as soon as it's heard; only a miss waits for
    // the final result.
    if (!isFinal && !allCorrect) {
      return;
    }

    console.log("🎤 SPEECH RESULT:", transcript);

    setWordStates(voiceStageStates);
    finishStage("voice", allCorrect);
    return;

  });

  useSpeechRecognitionEvent("error", (event) => {
    recognitionActiveRef.current = false;

    // abort() intentionally emits an "aborted" error on some platforms.
    // Ignore only that expected cleanup event; keep logging other errors.
    console.log("🎤 SPEECH ERROR:", event.error, event.message);
    if (stoppingVoiceRef.current && event.error === "aborted") {
      console.log("🎤 Ignoring intentional speech abort.");
      return;
    }

    // A non-aborted event during an intentional reset is logged above, but
    // must not resolve the same voice stage a second time.
    if (stoppingVoiceRef.current) {
      return;
    }

    finishStage("voice", false);
  });

  useSpeechRecognitionEvent("end", () => {
    recognitionActiveRef.current = false;

    if (
      state.status !== "RUNNING" ||
      stageRef.current !== "voice" ||
      !currentPhrase ||
      stoppingVoiceRef.current
    ) {
      return;
    }

    finishStage("voice", false);
  });

  useEffect(() => {
    stageRef.current = "voice";
    stageResolvedRef.current = false;
    stoppingVoiceRef.current = false;
    completedPhraseRef.current = null;

    setStage("voice");
    setStageResults(EMPTY_STAGE_RESULTS);
    setToneFeedback(null);
    setLatestPitchHz(null);

    if (stageTimeoutRef.current) {
      clearTimeout(stageTimeoutRef.current);
      stageTimeoutRef.current = null;
    }

    if (currentPhrase) {
      console.log("[Practice][Transition] phrase initialized", {
        timestampMs: Date.now(),
        phraseId: currentPhrase.id,
        phraseIndex: state.currentPhraseIndex,
      });
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

    if (state.status !== "RUNNING" || !currentPhrase) {
      return;
    }

    const timeout = setTimeout(() => {
      handleStartSpeechRecognition();
    }, 250);

    return () => {
      clearTimeout(timeout);

      if (stageTimeoutRef.current) {
        clearTimeout(stageTimeoutRef.current);
        stageTimeoutRef.current = null;
      }

      if (voiceRetryTimeoutRef.current) {
        clearTimeout(voiceRetryTimeoutRef.current);
        voiceRetryTimeoutRef.current = null;
      }

      stoppingVoiceRef.current = true;
      recognitionActiveRef.current = false;
      recognitionStartingRef.current = false;
      ExpoSpeechRecognitionModule.abort();
    };
  }, [state.status, currentPhrase?.id, handleStartSpeechRecognition]);

  useEffect(() => {
    let previousAt = Date.now();
    const heartbeat = setInterval(() => {
      const now = Date.now();
      console.log("[Practice][Heartbeat] JavaScript scheduling", {
        timestampMs: now,
        schedulingLagMs: now - previousAt - 1000,
      });
      previousAt = now;
    }, 1000);

    return () => clearInterval(heartbeat);
  }, []);

  useEffect(() => {
    if (stageTimeoutRef.current) {
      clearTimeout(stageTimeoutRef.current);
      stageTimeoutRef.current = null;
    }

    if (state.status !== "RUNNING" || !currentPhrase) {
      return;
    }

    stageTimeoutRef.current = setTimeout(() => {
      console.log("[Practice][Diagnostic] stage timeout", {
        questionIndex: state.currentPhraseIndex,
        stage: stageRef.current,
      });
      finishStage(stageRef.current, false);
    }, STAGE_TIMEOUT_MS);

    return () => {
      if (stageTimeoutRef.current) {
        clearTimeout(stageTimeoutRef.current);
        stageTimeoutRef.current = null;
      }
    };
  }, [currentPhrase?.id, finishStage, stage, state.status]);

  // =========================================================
  // SAVE PRACTICE RESULT
  // =========================================================

  // Shared by the normal FINISHED flow and Surrender — both should show the
  // same result screen using whatever was actually completed so far.
  const goToResultScreen = useCallback(async () => {
    if (savingResultRef.current || resultSavedRef.current) {
      return;
    }

    const result =
      resultSnapshotRef.current ??
      ({
        lessonId: resultLessonId ?? state.level.lessonId,
        score: state.score,
        correctAnswers: state.correctAnswers,
        totalQuestions: state.totalQuestions,
        accuracy: state.accuracy,
        xpEarned: state.xpEarned,
        stars: state.stars,
        badge: state.badge,
      } satisfies SavePracticeResult);

    if (!resultSnapshotRef.current) {
      resultSnapshotRef.current = result;
      resultWonRef.current =
        result.correctAnswers >= state.level.requiredCorrect;
    }

    attemptFrozenRef.current = true;
    setAttemptFrozen(true);
    savingResultRef.current = true;
    setSavingResult(true);
    setSaveError(false);

    try {
      await savePracticeResult(result);

      resultSavedRef.current = true;
      router.replace({
        pathname: "/lesson/result",
        params: {
          score: result.score.toString(),
          correct: result.correctAnswers.toString(),
          total: result.totalQuestions.toString(),
          accuracy: result.accuracy.toString(),
          xp: result.xpEarned.toString(),
          won: String(resultWonRef.current),
          // For the win-streak bonus on the leaderboard score.
          lessonId: result.lessonId,
          // Opened from a structured lesson: the result screen asks for
          // the learner's self-rating.
          ...(expressionOptional ? { selfRatingLessonId: result.lessonId } : {}),
        },
      });
    } catch (error) {
      console.error("Failed to save practice result:", error);
      setSaveError(true);
    } finally {
      savingResultRef.current = false;
      setSavingResult(false);
    }
  }, [
    expressionOptional,
    router,
    resultLessonId,
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
    if (
      attemptFrozenRef.current ||
      savingResultRef.current ||
      resultSavedRef.current
    ) {
      return;
    }

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
            attemptFrozenRef.current = true;
            setAttemptFrozen(true);
            dispatch({ type: "PAUSE" });
            stoppingVoiceRef.current = true;
            recognitionActiveRef.current = false;
            ExpoSpeechRecognitionModule.abort();
            void goToResultScreen();
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
    // Hints mode: the expression is never graded. Signs that may mean
    // difficulty only offer help; the stage always passes.
    if (expressionOptional) {
      if (
        state.status !== "RUNNING" ||
        stageRef.current !== "expression" ||
        attemptFrozenRef.current
      ) {
        return;
      }
      if (
        expression === "sad" ||
        expression === "confused" ||
        expression === "angry"
      ) {
        setShowComfortHint(true);
      }
      finishStage("expression", true);
      return;
    }

    if (
      state.status !== "RUNNING" ||
      stageRef.current !== "expression" ||
      attemptFrozenRef.current ||
      !currentPhrase ||
      expression !== currentPhrase.expectedExpression
    ) {
      return;
    }

    // NOTE: this used to dispatch NEXT_PHRASE directly, which meant the
    // phrase advanced on facial expression alone — voice (and now tone)
    // were never actually required. Routing through completeCurrentPhrase
    // makes expression one of three gates, same as voice and tone.
    finishStage("expression", true);
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
      reliable: boolean;
    }) => {
      if (
        state.status !== "RUNNING" ||
        stageRef.current !== "tone" ||
        attemptFrozenRef.current ||
        !currentPhrase ||
        stageResolvedRef.current
      ) {
        return;
      }

      // Phrase data now declares `expectedTone` (required) and
      // `expectedVowelLength` (optional) directly on PracticePhrase —
      // see types/practice.ts. No more defensive casting needed here.
      const expectedTone = currentPhrase.expectedTone;
      const expectedVowelLength = currentPhrase.expectedVowelLength;
      setLatestPitchHz(
        result.averagePitch > 0 ? result.averagePitch : null,
      );

      const unclear =
        !result.reliable ||
        (!!expectedVowelLength && result.vowelLength === "unknown");

      if (unclear) {
        setToneFeedback({
          tone: result.tone,
          vowelLength: result.vowelLength,
          unclear: true,
        });
        finishStage("tone", false);
        return;
      }

      const toneMatches = result.tone === expectedTone;
      const vowelMatches =
        !expectedVowelLength || result.vowelLength === expectedVowelLength;

      setToneFeedback({
        tone: result.tone,
        vowelLength: result.vowelLength,
      });

      if (toneMatches && vowelMatches) {
        console.log("✅ Tone/vowel length matched!");
        finishStage("tone", true);
      } else {
        finishStage("tone", false);
        console.log(
          "❌ Tone/vowel length mismatch.",
          `expected tone="${expectedTone}" heard="${result.tone}"`,
          `expected vowel="${expectedVowelLength ?? "n/a"}" heard="${result.vowelLength}"`,
        );
      }
    },
    [currentPhrase, finishStage, state.status],
  );

  // =========================================================
  // UI
  // =========================================================

  if (!hasPracticeContent) {
    const handleUnavailableBack = () => {
      router.dismissTo(DASHBOARD_ROUTE);
    };

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.unavailableContainer}>
          <Text style={styles.unavailableTitle}>Practice unavailable</Text>
          <Text style={styles.unavailableText}>
            Practice is unavailable. The questions for this lesson have not
            been added yet.
          </Text>
          <TouchableOpacity
            style={styles.unavailableButton}
            onPress={handleUnavailableBack}
          >
            <Text style={styles.unavailableButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.surrenderButton}
            onPress={handleSurrender}
            disabled={attemptFrozen || savingResult}
            activeOpacity={0.8}
          >
            <Text style={styles.surrenderButtonText}>Surrender</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Practice</Text>

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
          {stage === "tone" && currentPhrase && (
            <View style={styles.toneSection}>
              <Text style={styles.toneLabel}>
                &quot;Now say it again with the right tone&quot;
              </Text>

              <PracticeTone
                expectedTone={currentPhrase.expectedTone}
                expectedVowelLength={currentPhrase.expectedVowelLength}
                pitchPilotMode
                onPitchUpdate={setLatestPitchHz}
                onToneConfirmed={handleToneConfirmed}
                onUnavailable={() => finishStage("tone", false)}
              />

              <Text style={styles.pitchHzText}>
                Measured pitch:{" "}
                {latestPitchHz === null
                  ? "Waiting for pitch..."
                  : latestPitchHz.toFixed(1) + " Hz"}
              </Text>

              {toneFeedback && (
                <Text style={styles.toneMismatch}>
                  {toneFeedback.unclear
                    ? "I couldn't hear a stable pitch. Try again in a clear, steady voice."
                    : "Heard: " +
                      toneFeedback.tone +
                      " tone" +
                      (toneFeedback.vowelLength !== "unknown"
                        ? ", " + toneFeedback.vowelLength + " vowel"
                        : "") +
                      " — try again with a little more " +
                      currentPhrase.expectedTone +
                      " pitch."}
                </Text>
              )}
            </View>
          )}

          {/* Camera */}
          {stage === "expression" && <FaceDetectionProvider
            options={{
              performanceMode: "fast",
              classificationMode: true,
            }}
          >
            {currentPhrase && (
              <PracticeCamera
                expectedExpression={
                  expressionOptional
                    ? undefined
                    : currentPhrase.expectedExpression
                }
                phraseId={currentPhrase.id}
                onExpressionConfirmed={handleExpressionConfirmed}
                onUnavailable={() => finishStage("expression", false)}
              />
            )}
          </FaceDetectionProvider>}
        </View>

        {showComfortHint && (
          <View style={styles.comfortHint}>
            <Text style={styles.comfortHintTitle}>
              Need a little help? That&apos;s okay.
            </Text>
            {currentPhrase?.example || currentPhrase?.meaning ? (
              <Text style={styles.comfortHintText}>
                Hint: &quot;{currentPhrase.text}&quot; means &quot;
                {currentPhrase.example || currentPhrase.meaning}&quot;.
              </Text>
            ) : null}
            <View style={styles.comfortHintActions}>
              {isRunning && (
                <TouchableOpacity
                  style={styles.comfortHintButton}
                  onPress={() => {
                    setShowComfortHint(false);
                    stoppingVoiceRef.current = true;
                    recognitionActiveRef.current = false;
                    ExpoSpeechRecognitionModule.stop();
                    dispatch({ type: "PAUSE" });
                  }}
                >
                  <Text style={styles.comfortHintButtonText}>Take a break</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={styles.comfortHintButton}
                onPress={() => {
                  setShowComfortHint(false);
                  if (router.canGoBack()) router.back();
                  else router.replace("/lessons");
                }}
              >
                <Text style={styles.comfortHintButtonText}>Review lesson</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.comfortHintButton}
                onPress={() => setShowComfortHint(false)}
              >
                <Text style={styles.comfortHintButtonText}>Dismiss</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

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
        {saveError && (
          <View style={styles.saveErrorContainer}>
            <Text style={styles.saveErrorText}>
              Your result was not saved. Check your connection and try again.
            </Text>

            <TouchableOpacity
              style={styles.saveRetryButton}
              onPress={() => {
                void goToResultScreen();
              }}
              disabled={savingResult}
            >
              {savingResult ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text style={styles.saveRetryButtonText}>Retry Saving</Text>
              )}
            </TouchableOpacity>
          </View>
        )}

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
            disabled={attemptFrozen || savingResult}
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
            disabled={attemptFrozen || savingResult}
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
              stoppingVoiceRef.current = true;
              recognitionActiveRef.current = false;
              ExpoSpeechRecognitionModule.stop();
              dispatch({ type: "PAUSE" });
            }}
            disabled={attemptFrozen || savingResult}
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

  comfortHint: {
    marginTop: 12,
    padding: 14,
    borderRadius: 16,
    backgroundColor: "#FFF7DB",
  },

  comfortHintTitle: {
    color: "#8A5A1E",
    fontSize: 15,
    fontWeight: "800",
  },

  comfortHintText: {
    marginTop: 6,
    color: "#6B5532",
    fontSize: 14,
    lineHeight: 20,
  },

  comfortHintActions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 10,
  },

  comfortHintButton: {
    minHeight: 44,
    justifyContent: "center",
    paddingHorizontal: 14,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#8A5A1E",
  },

  comfortHintButtonText: {
    color: "#8A5A1E",
    fontSize: 14,
    fontWeight: "800",
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },

  unavailableContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  unavailableTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#222",
    textAlign: "center",
  },

  unavailableText: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 23,
    color: "#666",
    textAlign: "center",
  },

  unavailableButton: {
    marginTop: 22,
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: "#5E3BEE",
  },

  unavailableButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
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
    fontSize: 15,
    fontWeight: "700",
    color: "#EF4444",
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#222",
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
    fontSize: 15,
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
    fontSize: 15,
    fontWeight: "700",
    color: "#555",
  },

  progressCount: {
    fontSize: 15,
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
    fontSize: 15,
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
    fontSize: 15,
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
    fontSize: 15,
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
    fontSize: 15,
    fontWeight: "700",
    color: "#5E3BEE",
    marginBottom: 4,
    textAlign: "center",
  },

  pitchHzText: {
    marginTop: 4,
    fontSize: 15,
    fontWeight: "700",
    color: "#410FA3",
    textAlign: "center",
  },

  toneMismatch: {
    fontSize: 15,
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
    fontSize: 15,
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

  saveErrorContainer: {
    backgroundColor: "#FEF2F2",
    borderColor: "#FECACA",
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 12,
    padding: 12,
  },

  saveErrorText: {
    color: "#B91C1C",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },

  saveRetryButton: {
    alignItems: "center",
    backgroundColor: "#5E3BEE",
    borderRadius: 12,
    marginTop: 10,
    paddingVertical: 10,
  },

  saveRetryButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
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
    fontSize: 15,
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
    fontSize: 18,
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
    fontSize: 18,
    fontWeight: "800",
  },
});
