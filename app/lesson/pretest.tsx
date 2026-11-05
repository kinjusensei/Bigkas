import { useLocalSearchParams, useRouter } from "expo-router";
import {
    ExpoSpeechRecognitionModule,
    useSpeechRecognitionEvent,
} from "expo-speech-recognition";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
    ActivityIndicator,
    Alert,
    Animated,
    BackHandler,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { FaceDetectionProvider } from "@infinitered/react-native-mlkit-face-detection";

import LessonGate from "../../components/lesson/LessonGate";
import StoryGate from "../../components/story/StoryGate";
import ChoiceQuestion from "../../components/story-practice/ChoiceQuestion";
import FillQuestion from "../../components/story-practice/FillQuestion";
import PracticeBottomBar from "../../components/story-practice/PracticeBottomBar";
import PracticeHeader from "../../components/story-practice/PracticeHeader";
import PracticeProgress from "../../components/story-practice/PracticeProgress";
import { FLOW } from "../../components/story-practice/practiceTheme";
import ShowItQuestion from "../../components/story-practice/ShowItQuestion";
import StoryPracticeResult from "../../components/story-practice/StoryPracticeResult";
import SpeakQuestion from "../../components/story-practice/SpeakQuestion";
import { pretestByLessonId, PretestQuestion } from "../../data/pretestData";
import { findStoryForLesson } from "../../data/storyData";
import {
  getStoryPracticeRequiredCorrect,
  prepareStoryPracticeQuestions,
} from "../../data/storyPracticeData";
import {
  matchCardsCaption,
  matchesFillAnswer,
  PRACTICE_TYPE_LABELS,
  practiceTypeLabel,
  storyChoiceInstruction,
  storyFillInstruction,
  summarizePracticeByType,
} from "../../utils/storyPractice";
import { PracticeExpressionResult } from "../../types/practice";
import { useLogLessonStart } from "../../hooks/useLogLessonStart";
import { savePretestResult } from "../../services/Pretestservice";
import { savePracticeResultWithXp } from "../../services/practiceService";
import {
  calculateAccuracy,
  calculateBadge,
  calculateStars,
  calculateXP,
} from "../../utils/practiceUtils";
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

const TYPE_LABELS: Record<PretestQuestion["type"], string> = PRACTICE_TYPE_LABELS;

// Speech errors that mean the mic can't be used at all, as opposed to
// "didn't catch that" (no-speech), which just listens again.
const MIC_UNAVAILABLE_ERRORS = [
  "not-allowed",
  "service-not-allowed",
  "audio-capture",
  "language-not-supported",
  "network",
];

const DIALECT_LABELS: Record<string, string> = {
  tagalog: "Tagalog",
  kapampangan: "Kapampangan",
  waray: "Waray",
};

// A locked lesson (previous one not complete) doesn't open; story pretests
// (storyLessonId) aren't gated.
export default function PretestRoute() {
  const { lessonId, storyLessonId } = useLocalSearchParams<{
    lessonId?: string;
    storyLessonId?: string;
  }>();
  return (
    <StoryGate lessonId={storyLessonId}>
      <LessonGate lessonId={storyLessonId ? undefined : lessonId}>
        <PretestScreen />
      </LessonGate>
    </StoryGate>
  );
}

function PretestScreen() {
  const router = useRouter();
  const { lessonId, storyLessonId, dialect, chapterId } = useLocalSearchParams<{
    lessonId?: string;
    storyLessonId?: string;
    chapterId?: string;
    dialect?: string;
  }>();

  // The root layout can restore this screen on launch with nothing under
  // it in the stack, so fall back to the matching board instead of back().
  const goBack = useCallback(() => {
    if (router.canGoBack()) router.back();
    else router.replace(storyLessonId ? "/story" : "/lessons");
  }, [router, storyLessonId]);

  const isStoryPractice = Boolean(storyLessonId);
  // Story practice looks like docs/story-practice-mockups: tap the mic to
  // speak, check answers with a button. Lesson pre-tests keep their screen.
  const storyChapterNumber = useMemo(() => {
    if (!storyLessonId) return 0;
    const chapters = findStoryForLesson(storyLessonId)?.story.chapters ?? [];
    return (
      chapters.findIndex((chapter) => chapter.lessonId === storyLessonId) + 1
    );
  }, [storyLessonId]);

  const activeLessonId = storyLessonId ?? lessonId;
  // This screen also runs story practice, which saves as a practice result.
  useLogLessonStart(activeLessonId, isStoryPractice ? "practice" : "pretest");

  const dialectKey = dialect ?? lessonId?.split("_")[0] ?? "";
  const dialectLabel =
    DIALECT_LABELS[dialectKey] ?? "the selected dialect";

  // Memoized: Story options may be shuffled, once per attempt.
  const questions: PretestQuestion[] = useMemo(
    () =>
      isStoryPractice
        ? prepareStoryPracticeQuestions(storyLessonId)
        : activeLessonId
          ? (pretestByLessonId[activeLessonId] ?? [])
          : [],
    [isStoryPractice, storyLessonId, activeLessonId],
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctIds, setCorrectIds] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);
  const pretestSaveStartedRef = useRef(false);
  const [saveFailed, setSaveFailed] = useState(false);
  const [saveAttempt, setSaveAttempt] = useState(0);

  // Multiple choice
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Fill in the blank
  const [fillAnswer, setFillAnswer] = useState("");
  const [fillSubmitted, setFillSubmitted] = useState(false);

  // Speak
  const [speakMatched, setSpeakMatched] = useState(false);
  const [speakHeard, setSpeakHeard] = useState<string | null>(null);
  const [micUnavailable, setMicUnavailable] = useState(false);
  const micUnavailableRef = useRef(false);
  const [speakListening, setSpeakListening] = useState(false);
  const speakMatchedRef = useRef(false);
  const recognitionActiveRef = useRef(false);
  const restartTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Expression
  const [expressionMatched, setExpressionMatched] = useState(false);

  const currentQuestion = questions[currentIndex];

  const creditCurrentQuestion = useCallback(() => {
    setScore((s) => s + 1);
    if (currentQuestion) {
      setCorrectIds((ids) => [...ids, currentQuestion.id]);
    }
  }, [currentQuestion]);

  // ------- Animated progress bar -------
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (
      !finished ||
      !activeLessonId ||
      questions.length === 0 ||
      pretestSaveStartedRef.current
    ) {
      return;
    }

    pretestSaveStartedRef.current = true;
    if (isStoryPractice) {
      setSaveFailed(false);
      const accuracy = calculateAccuracy(score, questions.length);
      const requiredCorrect =
        getStoryPracticeRequiredCorrect(activeLessonId) ??
        Math.ceil(questions.length * 0.6);
      void savePracticeResultWithXp({
        lessonId: activeLessonId,
        score: score * 10,
        correctAnswers: score,
        totalQuestions: questions.length,
        accuracy,
        xpEarned: calculateXP(score),
        stars: calculateStars(accuracy),
        badge: calculateBadge(accuracy),
      })
        .then(({ xpEarned }) =>
          router.replace({
            pathname: "/lesson/result",
            params: {
              score: String(score * 10),
              correct: String(score),
              total: String(questions.length),
              accuracy: String(accuracy),
              xp: String(xpEarned),
              won: String(score >= requiredCorrect),
              storyLessonId: activeLessonId,
              dialect: dialect ?? "",
              chapterId: chapterId ?? "",
              passMark: String(requiredCorrect),
              byType: JSON.stringify(
                summarizePracticeByType(questions, correctIds),
              ),
            },
          }),
        )
        .catch((error) => {
          console.error("Failed to save Story Practice result:", error);
          pretestSaveStartedRef.current = false;
          setSaveFailed(true);
        });
    } else {
      void savePretestResult(
        activeLessonId,
        score,
        questions.length,
        Math.ceil(questions.length * 0.6),
      ).catch((error) => {
        console.error("Failed to save pretest result:", error);
      });
    }
  }, [
    finished,
    activeLessonId,
    isStoryPractice,
    questions,
    correctIds,
    score,
    router,
    dialect,
    chapterId,
    saveAttempt,
  ]);

  useEffect(() => {
    const target = questions.length
      ? finished
        ? 1
        : isStoryPractice
          ? currentIndex / questions.length
          : (currentIndex +
            (selectedOption || fillSubmitted || speakMatched || expressionMatched
              ? 1
              : 0)) /
          questions.length
      : 0;

    Animated.timing(progressAnim, {
      toValue: target,
      duration: 350,
      useNativeDriver: false,
    }).start();
  }, [
    isStoryPractice,
    currentIndex,
    finished,
    selectedOption,
    fillSubmitted,
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
    // Whatever the camera saw (or didn't): attempted or skipped, it counts.
    if (
      currentQuestion?.type === "expression" &&
      currentQuestion.countsAsCompleted
    ) {
      creditCurrentQuestion();
    }

    setMicUnavailable(false);
    micUnavailableRef.current = false;
    setSpeakListening(false);
    setSelectedOption(null);
    setFillAnswer("");
    setFillSubmitted(false);
    setSpeakMatched(false);
    setSpeakHeard(null);
    speakMatchedRef.current = false;
    setExpressionMatched(false);

    if (currentIndex + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  }, [currentIndex, currentQuestion, questions.length, creditCurrentQuestion]);

  // Cleanly stop the mic before leaving/advancing — matters specifically
  // for the speak question, harmless as a no-op otherwise.
  const stopListeningIfActive = useCallback(() => {
    if (currentQuestion?.type === "speak") {
      ExpoSpeechRecognitionModule.abort();
    }
  }, [currentQuestion]);

  const handleBack = useCallback(() => {
    stopListeningIfActive();
    goBack();
  }, [stopListeningIfActive, goBack]);

  const confirmLeave = useCallback(() => {
    Alert.alert("Leave practice?", "Your answers so far won't be saved.", [
      { text: "Stay", style: "cancel" },
      { text: "Leave", style: "destructive", onPress: handleBack },
    ]);
  }, [handleBack]);

  // The phone's back button asks too.
  useEffect(() => {
    if (!isStoryPractice || finished) return;
    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        confirmLeave();
        return true;
      },
    );
    return () => subscription.remove();
  }, [isStoryPractice, finished, confirmLeave]);

  const handleSkip = useCallback(() => {
    stopListeningIfActive();
    // Never lose a point because the mic can't be used.
    if (
      currentQuestion?.type === "speak" &&
      currentQuestion.micOptional &&
      micUnavailable
    ) {
      creditCurrentQuestion();
    }
    goToNextQuestion();
  }, [
    stopListeningIfActive,
    goToNextQuestion,
    currentQuestion,
    micUnavailable,
    creditCurrentQuestion,
  ]);

  const handleContinueFromSpeak = useCallback(() => {
    stopListeningIfActive();
    goToNextQuestion();
  }, [stopListeningIfActive, goToNextQuestion]);

  const markMicUnavailable = useCallback(() => {
    micUnavailableRef.current = true;
    setMicUnavailable(true);
  }, []);

  // Skip is only useful before the question is already answered — once
  // answered, "Next"/"Finish" is the way forward.
  const isAnswered =
    selectedOption !== null ||
    fillSubmitted ||
    speakMatched ||
    expressionMatched;

  // =========================================================
  // MULTIPLE CHOICE
  // =========================================================

  const handleSelectOption = (option: string) => {
    if (
      selectedOption ||
      (currentQuestion?.type !== "multiple_choice" &&
        currentQuestion?.type !== "card_match")
    ) {
      return;
    }

    setSelectedOption(option);

    if (option === currentQuestion.correctMeaning) {
      creditCurrentQuestion();
    }
  };

  const handleSubmitFillBlank = () => {
    if (
      fillSubmitted ||
      currentQuestion?.type !== "fill_blank" ||
      !fillAnswer.trim()
    ) {
      return;
    }

    setFillSubmitted(true);
    if (
      currentQuestion.acceptedAnswers
        ? matchesFillAnswer(fillAnswer, currentQuestion.acceptedAnswers)
        : normalizeWord(fillAnswer) === normalizeWord(currentQuestion.correctWord)
    ) {
      creditCurrentQuestion();
    }
  };

  // =========================================================
  // SPEAK
  // =========================================================

  const handleStartListening = useCallback(async () => {
    if (
      recognitionActiveRef.current ||
      speakMatchedRef.current ||
      micUnavailableRef.current
    ) {
      return;
    }

    try {
      const permission =
        await ExpoSpeechRecognitionModule.requestPermissionsAsync();

      if (!permission.granted) {
        console.log("🎤 Pretest: microphone permission not granted.");
        markMicUnavailable();
        return;
      }

      ExpoSpeechRecognitionModule.start({
        lang: "fil-PH",
        interimResults: true,
        continuous: true,
      });

      recognitionActiveRef.current = true;
      setSpeakListening(true);
    } catch (error) {
      recognitionActiveRef.current = false;
      setSpeakListening(false);
      console.error("🎤 Pretest speech start failed:", error);
      markMicUnavailable();
    }
  }, [markMicUnavailable]);

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

    if (transcript && isStoryPractice) {
      setSpeakHeard(transcript);
    }

    if (!transcript || !isFinal) {
      return;
    }

    const spokenWords = transcript.trim().split(/\s+/).map(normalizeWord);
    const spoken = normalizeWord(transcript);
    const spokenLastWord = spokenWords[spokenWords.length - 1] ?? "";
    const expected = normalizeWord(currentQuestion.word);
    const expectedIsSingleWord = currentQuestion.word.trim().split(/\s+/).length === 1;

    setSpeakHeard(transcript);

    if (spoken === expected || (expectedIsSingleWord && spokenLastWord === expected)) {
      speakMatchedRef.current = true;
      setSpeakMatched(true);
      creditCurrentQuestion();
      ExpoSpeechRecognitionModule.abort();
    } else if (isStoryPractice) {
      // Show what was heard; the learner chooses Try again or Continue.
      ExpoSpeechRecognitionModule.abort();
    }
  });

  useSpeechRecognitionEvent("error", (event) => {
    if (isStoryPractice) {
      recognitionActiveRef.current = false;
      setSpeakListening(false);
    }
    if (MIC_UNAVAILABLE_ERRORS.includes(event.error)) {
      markMicUnavailable();
    }
  });

  useSpeechRecognitionEvent("end", () => {
    recognitionActiveRef.current = false;
    setSpeakListening(false);

    // The lesson flow listens once per tap.
    if (isStoryPractice) return;

    if (
      !currentQuestion ||
      currentQuestion.type !== "speak" ||
      speakMatchedRef.current ||
      micUnavailableRef.current
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
    // The lesson flow starts on a tap, so find out up front if a mic is
    // impossible: then its Skip counts without having to tap first.
    if (isStoryPractice) {
      try {
        if (!ExpoSpeechRecognitionModule.isRecognitionAvailable()) {
          markMicUnavailable();
        }
        ExpoSpeechRecognitionModule.getPermissionsAsync()
          .then((permission) => {
            if (!permission.granted && !permission.canAskAgain) {
              markMicUnavailable();
            }
          })
          .catch(() => markMicUnavailable());
      } catch {
        markMicUnavailable();
      }
    }
    const timeout = isStoryPractice
      ? undefined
      : setTimeout(() => handleStartListening(), 250);

    return () => {
      if (timeout) clearTimeout(timeout);

      if (restartTimeoutRef.current) {
        clearTimeout(restartTimeoutRef.current);
        restartTimeoutRef.current = null;
      }

      recognitionActiveRef.current = false;
      ExpoSpeechRecognitionModule.abort();
    };
  }, [
    currentQuestion?.id,
    currentQuestion?.type,
    handleStartListening,
    isStoryPractice,
    markMicUnavailable,
  ]);

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
      (currentQuestion.expectedExpression &&
        expression !== currentQuestion.expectedExpression)
    ) {
      return;
    }

    setExpressionMatched(true);
    // Questionnaire FER items may be observational: the source asks the
    // researcher to record the detected expression but does not provide a
    // correct expression label. Such items advance without affecting score.
    if (currentQuestion.expectedExpression && !currentQuestion.countsAsCompleted) {
      creditCurrentQuestion();
    }
  };

  const storyTitle = storyChapterNumber
    ? `${dialectLabel} · Chapter ${storyChapterNumber}`
    : dialectLabel;

  // =========================================================
  // NO CONTENT FALLBACK
  // =========================================================

  if (isStoryPractice && questions.length === 0) {
    return (
      <View style={styles.flowRoot}>
        <PracticeHeader
          title={storyTitle}
          onBack={goBack}
          backLabel="Back to the story"
        />
        <View style={styles.flowEmpty}>
          <Text style={styles.flowEmptyTitle} accessibilityRole="header">
            Story Practice unavailable
          </Text>
          <Text style={styles.flowEmptyText}>
            The practice questions for this story chapter have not been added
            yet.
          </Text>
        </View>
        <PracticeBottomBar label="Back to the story" onPress={goBack} />
      </View>
    );
  }

  if (!activeLessonId || questions.length === 0) {
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
            onPress={goBack}
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

  if (finished && isStoryPractice) {
    if (saveFailed) {
      const passMark =
        getStoryPracticeRequiredCorrect(storyLessonId ?? "") ??
        Math.ceil(questions.length * 0.6);
      return (
        <StoryPracticeResult
          storyLessonId={storyLessonId ?? ""}
          dialect={dialect ?? ""}
          chapterId={chapterId ?? ""}
          correct={score}
          total={questions.length}
          passMark={passMark}
          passed={score >= passMark}
          rows={summarizePracticeByType(questions, correctIds)}
          onRetrySave={() => setSaveAttempt((attempt) => attempt + 1)}
        />
      );
    }
    return (
      <View style={styles.flowCentered}>
        <ActivityIndicator size="large" color={FLOW.purple} />
      </View>
    );
  }

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
                params: { lessonId: activeLessonId },
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

  if (isStoryPractice) {
    return (
      <View style={styles.flowRoot}>
        <PracticeHeader
          title={storyTitle}
          onBack={confirmLeave}
          backLabel="Leave practice"
        />
        <PracticeProgress
          index={currentIndex}
          total={questions.length}
          barWidth={progressWidth}
        />

        <KeyboardAvoidingView
          style={styles.flowBody}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {(currentQuestion.type === "multiple_choice" ||
            currentQuestion.type === "card_match") && (
            <ChoiceQuestion
              key={currentQuestion.id}
              label={practiceTypeLabel(currentQuestion)}
              instruction={
                currentQuestion.type === "card_match"
                  ? matchCardsCaption(dialectLabel)
                  : storyChoiceInstruction(currentQuestion.word)
              }
              word={currentQuestion.word}
              options={currentQuestion.options}
              correctMeaning={currentQuestion.correctMeaning}
              checkedOption={selectedOption}
              onCheck={handleSelectOption}
              onContinue={goToNextQuestion}
            />
          )}

          {currentQuestion.type === "fill_blank" && (
            <FillQuestion
              key={currentQuestion.id}
              label={TYPE_LABELS.fill_blank}
              instruction={storyFillInstruction(currentQuestion.meaning)}
              word={currentQuestion.meaning}
              languageLabel={dialectLabel}
              answer={fillAnswer}
              onChangeAnswer={setFillAnswer}
              checked={fillSubmitted}
              isCorrect={matchesFillAnswer(
                fillAnswer,
                currentQuestion.acceptedAnswers ?? [currentQuestion.correctWord],
              )}
              correctAnswer={currentQuestion.correctWord}
              onCheck={handleSubmitFillBlank}
              onContinue={goToNextQuestion}
            />
          )}

          {currentQuestion.type === "speak" && (
            <SpeakQuestion
              key={currentQuestion.id}
              label={TYPE_LABELS.speak}
              instruction="Say this word out loud"
              word={currentQuestion.word}
              dialect={dialectKey}
              listening={speakListening}
              heard={speakHeard}
              matched={speakMatched}
              micUnavailable={micUnavailable}
              skipStillCounts={!!currentQuestion.micOptional}
              onStart={() => {
                setSpeakHeard(null);
                void handleStartListening();
              }}
              onStop={() => ExpoSpeechRecognitionModule.abort()}
              onContinue={handleContinueFromSpeak}
              onSkip={handleSkip}
            />
          )}

          {currentQuestion.type === "expression" && (
            <ShowItQuestion
              key={currentQuestion.id}
              label={TYPE_LABELS.expression}
              prompt={currentQuestion.prompt}
              questionId={currentQuestion.id}
              expectedExpression={currentQuestion.expectedExpression}
              onExpressionConfirmed={handleExpressionConfirmed}
              onDone={goToNextQuestion}
              onSkip={goToNextQuestion}
            />
          )}
        </KeyboardAvoidingView>
      </View>
    );
  }

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
            {practiceTypeLabel(currentQuestion)}
          </Text>
        </View>

        {(currentQuestion.type === "multiple_choice" ||
          currentQuestion.type === "card_match") && (
          <View style={styles.card}>
            <Text style={styles.caption}>
              {currentQuestion.type === "card_match"
                ? matchCardsCaption("Tagalog")
                : "What does this word mean?"}
            </Text>
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

        {currentQuestion.type === "fill_blank" && (
          <View style={styles.card}>
            <Text style={styles.caption}>
              Translate this English meaning into {dialectLabel}
            </Text>
            <Text style={styles.inputLabel}>
              {currentQuestion.acceptedAnswers
                ? `${dialectLabel} word`
                : "English meaning"}
            </Text>
            <Text style={styles.wordDisplay}>{currentQuestion.meaning}</Text>

            <TextInput
              value={fillAnswer}
              onChangeText={setFillAnswer}
              placeholder={`Type the ${dialectLabel} word`}
              autoCapitalize="sentences"
              editable={!fillSubmitted}
              style={styles.fillInput}
            />

            {fillSubmitted && (
              <Text style={styles.statusText}>
                {(currentQuestion.acceptedAnswers
                  ? matchesFillAnswer(fillAnswer, currentQuestion.acceptedAnswers)
                  : normalizeWord(fillAnswer) ===
                    normalizeWord(currentQuestion.correctWord))
                  ? "Correct!"
                  : `Correct answer: ${currentQuestion.correctWord}`}
              </Text>
            )}

            {!fillSubmitted ? (
              <TouchableOpacity
                style={styles.primaryButton}
                onPress={handleSubmitFillBlank}
                disabled={!fillAnswer.trim()}
                activeOpacity={0.85}
              >
                <Text style={styles.primaryButtonText}>Check Answer</Text>
              </TouchableOpacity>
            ) : (
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
                : currentQuestion.micOptional && micUnavailable
                  ? "The microphone isn't available. You can skip this word."
                  : speakHeard
                    ? `Heard: "${speakHeard}" — try again`
                    : "Listening..."}
            </Text>

            {currentQuestion.micOptional && micUnavailable && !speakMatched && (
              <TouchableOpacity
                style={styles.primaryButton}
                onPress={handleSkip}
                activeOpacity={0.85}
              >
                <Text style={styles.primaryButtonText}>Skip</Text>
              </TouchableOpacity>
            )}

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
              {currentQuestion.countsAsCompleted
                ? expressionMatched
                  ? "Nice work!"
                  : "Try it, or tap Continue. The camera is optional."
                : expressionMatched
                  ? "Correct!"
                  : "Show the expression above"}
            </Text>

            {(expressionMatched || currentQuestion.countsAsCompleted) && (
              <TouchableOpacity
                style={styles.primaryButton}
                onPress={goToNextQuestion}
                activeOpacity={0.85}
              >
                <Text style={styles.primaryButtonText}>
                  {expressionMatched ? "Finish" : "Continue"}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flowRoot: { flex: 1, backgroundColor: FLOW.page },

  flowBody: { flex: 1 },

  flowEmpty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: 24,
  },

  flowEmptyTitle: {
    fontSize: 21,
    fontWeight: "800",
    color: FLOW.deepPurple,
    textAlign: "center",
  },

  flowEmptyText: {
    fontSize: 15,
    lineHeight: 21,
    color: FLOW.muted,
    textAlign: "center",
  },

  flowCentered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: FLOW.page,
  },

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
    fontSize: 15,
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
    fontSize: 15,
    fontWeight: "800",
    letterSpacing: 1,
    color: "#5E3BEE",
    textTransform: "uppercase",
  },

  progressCount: {
    fontSize: 15,
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
    fontSize: 15,
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
    fontSize: 18,
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

  fillInput: {
    borderColor: "#D8D0EA",
    borderRadius: 10,
    borderWidth: 1,
    color: "#333",
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  inputLabel: {
    color: "#666",
    fontSize: 13,
    fontWeight: "700",
    marginBottom: -4,
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
    fontSize: 18,
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
    fontSize: 15,
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
    fontSize: 15,
    fontWeight: "700",
    color: "#5E3BEE",
    marginTop: 2,
  },

  summaryMessage: {
    fontSize: 18,
    fontWeight: "800",
    color: "#222",
    textAlign: "center",
    marginBottom: 8,
    paddingHorizontal: 10,
  },

  summarySubtitle: {
    fontSize: 15,
    color: "#888",
    textAlign: "center",
    marginBottom: 28,
  },
});
