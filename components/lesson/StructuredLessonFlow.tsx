import { useNavigation, useRouter } from "expo-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BackHandler, StyleSheet, Text, View } from "react-native";

import { requiredActivitiesFor } from "../../data/lessons/structuredLessons";
import { practiceLevels } from "../../data/practiceData";
import { PracticeExpression } from "../../types/practice";
import { useStoryProgress } from "../../hooks/useLessonProgress";
import { REVIEW_MODE } from "../../constant/devFlags";
import {
  LessonCompletionInput,
  LessonCompletionOutcome,
  saveLessonCompletion,
} from "../../services/lessonCompletionService";
import { savePretestResult } from "../../services/Pretestservice";
import {
  LessonRewardSection,
  StructuredLesson,
} from "../../types/structuredLesson";
import ArrangeWordsSection, {
  ArrangeState,
  initialArrangeState,
  isArrangeComplete,
  isArrangeCorrect,
} from "./ArrangeWordsSection";
import AssessmentSection, {
  AssessmentState,
  getAssessmentScore,
  initialAssessmentState,
} from "./AssessmentSection";
import CompleteSection from "./CompleteSection";
import ConversationSection from "./ConversationSection";
import ExpressionsSection from "./ExpressionsSection";
import LanguageNotesSection from "./LanguageNotesSection";
import FillBlanksSection, {
  FillBlanksState,
  initialFillBlanksState,
  isFillBlankCorrect,
} from "./FillBlanksSection";
import GreetingsSection from "./GreetingsSection";
import { LESSON_COLORS, lessonStyles } from "./lessonStyles";
import LessonShell, { LessonFooterButton } from "./LessonShell";
import MatchSection, {
  initialMatchState,
  isMatchComplete,
  isMatchCorrect,
  MatchState,
} from "./MatchSection";
import OverviewSection, { LessonMood } from "./OverviewSection";
import SelfIntroSection from "./SelfIntroSection";
import SpeakingSection, { SpeakingPhase } from "./speaking/SpeakingSection";
import SurrenderDialog from "./SurrenderDialog";
import SurrenderedSection, { SurrenderScore } from "./SurrenderedSection";
import { useSpeakingSession } from "./speaking/useSpeakingSession";
import { buildRespellingMap, normalizeWord } from "./speaking/wordMatch";
import { useLessonAudio } from "./useLessonAudio";
import VocabularySection from "./VocabularySection";

// The step-by-step lesson (overview → … → complete) for lessons listed in
// data/lessons/structuredLessons.ts. Steps without data are skipped.
//
// Completion (services/lessonCompletionService.ts): saved once when the
// Complete step opens, and once for each failed assessment attempt. The
// lesson is complete when the assessment was passed (>= passPercent) and
// every activity was done; speaking counts as done once gone through, even
// if skipped, but its XP needs at least one recorded phrase. Each
// activity's XP is given once per lesson. Mood and camera hints are
// optional and never affect any score; the hints setting is shared by the
// Overview toggle and the speaking setup, and is not saved.

type StepKey =
  | "overview"
  | "vocabulary"
  | "greetings"
  | "expressions"
  | "notes"
  | "situations"
  | "selfIntro"
  | "conversation"
  | "match"
  | "choice"
  | "fillBlanks"
  | "arrange"
  | "assessment"
  | "speaking"
  | "complete";

const SPEAKING_PHASE_LABELS: Record<SpeakingPhase, string> = {
  setup: "Speaking setup",
  recording: "Recording",
  feedback: "Speaking feedback",
};

const STEP_LABELS: Record<StepKey, string> = {
  overview: "Overview",
  vocabulary: "Vocabulary",
  greetings: "Common greetings",
  expressions: "Common expressions",
  notes: "Language notes",
  situations: "Everyday situations",
  selfIntro: "Self-introduction",
  conversation: "Guided conversation",
  match: "Matching",
  choice: "Choose the response",
  fillBlanks: "Fill in the blanks",
  arrange: "Arrange the words",
  assessment: "Assessment",
  speaking: "Speaking practice",
  complete: "Complete",
};

type Props = {
  lesson: StructuredLesson;
  onExit: () => void;
};

export default function StructuredLessonFlow({ lesson, onExit }: Props) {
  const router = useRouter();
  const navigation = useNavigation();
  const audio = useLessonAudio(lesson.dialect);
  const { getCompletion, isLessonComplete } = useStoryProgress();

  const vocabulary = useMemo(
    () => lesson.vocabulary?.filter((item) => item.term.trim()) ?? [],
    [lesson],
  );
  const greetings = useMemo(
    () => lesson.greetings?.filter((item) => item.term.trim()) ?? [],
    [lesson],
  );
  // Vocabulary that isn't already a greeting card (matched ignoring case).
  const moreWords = useMemo(() => {
    const greetingTerms = new Set(
      greetings.map((item) => item.term.trim().toLowerCase()),
    );
    return vocabulary.filter(
      (item) => !greetingTerms.has(item.term.trim().toLowerCase()),
    );
  }, [vocabulary, greetings]);
  const patterns = useMemo(
    () => lesson.patterns?.filter((item) => item.pattern.trim()) ?? [],
    [lesson],
  );
  const sentences = useMemo(
    () => lesson.sentences?.filter((item) => item.text.trim()) ?? [],
    [lesson],
  );
  const expressionGroups = useMemo(
    () =>
      lesson.expressionGroups?.filter((group) =>
        group.items.some((item) => item.term.trim()),
      ) ?? [],
    [lesson],
  );
  const languageNotes = useMemo(() => lesson.languageNotes ?? [], [lesson]);
  const situationGroups = useMemo(
    () =>
      lesson.situationGroups?.filter((group) =>
        group.items.some((item) => item.term.trim()),
      ) ?? [],
    [lesson],
  );
  // One or several conversations, shown one at a time.
  const conversations = useMemo(
    () =>
      (lesson.conversations?.length
        ? lesson.conversations
        : lesson.conversation
          ? [lesson.conversation]
          : []
      ).filter((item) => item.lines.some((line) => line.text.trim())),
    [lesson],
  );
  const hasConversation = conversations.length > 0;
  const choiceActivity =
    lesson.choiceActivity && lesson.choiceActivity.questions.length > 0
      ? lesson.choiceActivity
      : undefined;
  // The choice activity uses the assessment screen, without a pass mark.
  const choiceAsAssessment = useMemo(
    () =>
      choiceActivity
        ? { passPercent: 0, questions: choiceActivity.questions }
        : undefined,
    [choiceActivity],
  );
  const matchActivity =
    lesson.matchActivity && lesson.matchActivity.pairs.length > 0
      ? lesson.matchActivity
      : undefined;
  const fillInBlanks =
    lesson.fillInBlanks && lesson.fillInBlanks.items.length > 0
      ? lesson.fillInBlanks
      : undefined;
  const arrangeWords =
    lesson.arrangeWords && lesson.arrangeWords.items.length > 0
      ? lesson.arrangeWords
      : undefined;
  const assessment =
    lesson.assessment && lesson.assessment.questions.length > 0
      ? lesson.assessment
      : undefined;
  const speakingPhrases = useMemo(
    () => lesson.speaking?.phrases.filter((item) => item.text.trim()) ?? [],
    [lesson],
  );
  // Target pitch / mood from the practice data, only for phrases whose
  // text matches a practice phrase (ignoring case and punctuation).
  const speakingTargets = useMemo(() => {
    const level = practiceLevels.find(
      (item) => item.lessonId === lesson.speaking?.practiceLessonId,
    );
    const key = (text: string) =>
      text.split(/\s+/).map(normalizeWord).join(" ").trim();
    return speakingPhrases.map((phrase) =>
      level?.phrases.find((item) => key(item.text) === key(phrase.text)),
    );
  }, [lesson, speakingPhrases]);
  const respellings = useMemo(
    () => buildRespellingMap(vocabulary),
    [vocabulary],
  );

  const steps = useMemo(() => {
    const list: StepKey[] = ["overview"];
    if (vocabulary.length > 0) list.push("vocabulary");
    if (greetings.length > 0) list.push("greetings");
    if (expressionGroups.length > 0) list.push("expressions");
    if (languageNotes.length > 0) list.push("notes");
    if (situationGroups.length > 0) list.push("situations");
    if (patterns.length > 0 || sentences.length > 0) list.push("selfIntro");
    if (hasConversation) list.push("conversation");
    if (matchActivity) list.push("match");
    if (choiceActivity) list.push("choice");
    if (fillInBlanks) list.push("fillBlanks");
    if (arrangeWords) list.push("arrange");
    if (assessment) list.push("assessment");
    if (speakingPhrases.length > 0) list.push("speaking");
    list.push("complete");
    return list;
  }, [
    speakingPhrases.length,
    vocabulary.length,
    greetings.length,
    expressionGroups.length,
    languageNotes.length,
    situationGroups.length,
    patterns.length,
    sentences.length,
    hasConversation,
    matchActivity,
    choiceActivity,
    fillInBlanks,
    arrangeWords,
    assessment,
  ]);

  const [stepIndex, setStepIndex] = useState(0);
  const [vocabIndex, setVocabIndex] = useState(0);
  const [conversationIndex, setConversationIndex] = useState(0);
  const [choiceState, setChoiceState] = useState<AssessmentState>(
    initialAssessmentState,
  );
  const [choiceDone, setChoiceDone] = useState(false);
  const [mood, setMood] = useState<LessonMood | null>(null);
  const [cameraHints, setCameraHints] = useState(false);
  const [matchState, setMatchState] = useState<MatchState>(() =>
    initialMatchState(lesson.matchActivity),
  );
  const [fillState, setFillState] = useState<FillBlanksState>(
    initialFillBlanksState,
  );
  const [arrangeState, setArrangeState] =
    useState<ArrangeState>(initialArrangeState);
  const [fillDone, setFillDone] = useState(false);
  const [arrangeDone, setArrangeDone] = useState(false);
  const speaking = useSpeakingSession();
  const [speakingIndex, setSpeakingIndex] = useState(0);
  const [speakingPhase, setSpeakingPhase] = useState<SpeakingPhase>("setup");
  const [micEnabled, setMicEnabled] = useState(true);
  const [speakingExpression, setSpeakingExpression] =
    useState<PracticeExpression | null>(null);
  const [takeKey, setTakeKey] = useState(0);
  // Phrases recorded at least once; all of them earns the speaking XP.
  const [spokenIds, setSpokenIds] = useState<Set<string>>(() => new Set());
  const [assessmentState, setAssessmentState] = useState<AssessmentState>(
    initialAssessmentState,
  );
  // Activities done in this run, and the ones that earned their XP (the
  // same, except speaking needs a recording and assessment a pass).
  const [doneThisRun, setDoneThisRun] = useState<Set<LessonRewardSection>>(
    () => new Set(),
  );
  const [xpThisRun, setXpThisRun] = useState<Set<LessonRewardSection>>(
    () => new Set(),
  );
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  // One id per visit plus a count of assessment attempts, so each attempt
  // is saved once (services/lessonCompletionService.ts).
  const [runId] = useState(() => `${Date.now()}`);
  const [assessmentAttempt, setAssessmentAttempt] = useState(0);
  const [completion, setCompletion] = useState<{
    status: "idle" | "saving" | "saved" | "error";
    outcome?: LessonCompletionOutcome;
  }>({ status: "idle" });

  const step = steps[stepIndex] ?? "overview";

  // XP already given on an earlier visit plus what this run earned.
  const savedRecord = getCompletion(lesson.lessonId);
  const earned = useMemo(() => {
    const set = new Set<LessonRewardSection>(xpThisRun);
    (savedRecord?.xpAwarded ?? []).forEach((section) =>
      set.add(section as LessonRewardSection),
    );
    return set;
  }, [xpThisRun, savedRecord]);

  const xpEarned = (lesson.rewards?.items ?? [])
    .filter((item) => earned.has(item.section))
    .reduce((sum, item) => sum + item.xp, 0);

  const addTo = (setter: typeof setDoneThisRun, section: LessonRewardSection) =>
    setter((current) => {
      if (current.has(section)) return current;
      const next = new Set(current);
      next.add(section);
      return next;
    });

  // Marks an activity done; `withXp` false = done without its XP.
  const earn = (section: LessonRewardSection, withXp = true) => {
    if (section !== "assessment") addTo(setDoneThisRun, section);
    if (withXp) addTo(setXpThisRun, section);
  };

  const goToStep = (index: number) => {
    audio.stop();
    // Leaving the speaking activity ends any take and deletes recordings.
    speaking.reset();
    speaking.discardRecordings();
    setSpeakingPhase("setup");
    setStepIndex(Math.min(Math.max(index, 0), steps.length - 1));
  };

  const goNextStep = () => goToStep(stepIndex + 1);
  const goPreviousStep = () => {
    const previousKey = steps[stepIndex - 1];
    // Coming back to a paged step lands on its last page.
    if (previousKey === "vocabulary") setVocabIndex(vocabulary.length - 1);
    if (previousKey === "conversation") {
      setConversationIndex(conversations.length - 1);
    }
    goToStep(stepIndex - 1);
  };

  const reviewLesson = () => {
    setVocabIndex(0);
    setConversationIndex(0);
    goToStep(0);
  };

  const assessmentScore = assessment
    ? getAssessmentScore(assessment, assessmentState)
    : null;

  const finishAssessment = async () => {
    if (!assessment || !assessmentScore?.passed) return;
    setSaving(true);
    setSaveError(null);
    try {
      await savePretestResult(
        lesson.lessonId,
        assessmentScore.correct,
        assessmentScore.total,
        assessmentScore.passingCorrect,
      );
      earn("assessment");
      goNextStep();
    } catch (error) {
      console.error("Failed to save lesson assessment:", error);
      setSaveError(
        "Couldn't save your result. Check your connection and try again.",
      );
    } finally {
      setSaving(false);
    }
  };

  const scorePercent =
    assessment && assessmentState.finished && assessmentScore
      ? assessmentScore.percent
      : assessment
        ? 0
        : 100;

  const saveAttempt = useCallback(
    (key: string) => {
      const rewards: Record<string, number> = {};
      (lesson.rewards?.items ?? []).forEach((item) => {
        rewards[item.section] = item.xp;
      });
      const done = [...doneThisRun].sort().join(",");
      const withXp = [...xpThisRun].sort().join(",");
      return saveLessonCompletion(
        {
          lessonId: lesson.lessonId,
          dialect: lesson.dialect,
          scorePercent,
          passPercent: assessment?.passPercent ?? 0,
          activitiesDone: [...doneThisRun],
          xpEligible: [...xpThisRun],
          rewards,
          required: requiredActivitiesFor(lesson),
          streakKey: `${runId}:${assessmentAttempt}`,
        },
        `${runId}:${assessmentAttempt}:${key}:${done}:${withXp}`,
      );
    },
    [
      lesson,
      scorePercent,
      assessment,
      doneThisRun,
      xpThisRun,
      runId,
      assessmentAttempt,
    ],
  );

  // A failed attempt still keeps the best score and the activities' XP (no
  // unlock); it is a loss, so the win streak goes back to 0. Saved once per
  // attempt, in the background.
  const failedAttempt =
    step === "assessment" &&
    assessmentState.finished &&
    !!assessmentScore &&
    !assessmentScore.passed;
  useEffect(() => {
    if (!failedAttempt) return;
    saveAttempt("failed").catch((error) =>
      console.warn("Failed to save lesson attempt:", error),
    );
  }, [failedAttempt, saveAttempt]);

  // Saved once when the Complete step first opens; retried on request.
  const saveCompletion = useCallback(async () => {
    setCompletion((current) => ({ ...current, status: "saving" }));
    try {
      const outcome = await saveAttempt("complete");
      setCompletion({ status: "saved", outcome });
      return outcome;
    } catch (error) {
      console.error("Failed to save lesson completion:", error);
      setCompletion((current) => ({ ...current, status: "error" }));
      return null;
    }
  }, [saveAttempt]);

  const isCompleteStep = step === "complete";
  useEffect(() => {
    if (isCompleteStep) void saveCompletion();
  }, [isCompleteStep, saveCompletion]);

  const goToDashboard = useCallback(() => {
    audio.stop();
    // Back to the dashboard already in the stack (or replaced by it).
    router.dismissTo("/dashboard" as any);
  }, [audio, router]);

  // Android back on the Complete step goes to the dashboard too.
  useEffect(() => {
    if (!isCompleteStep) return;
    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        goToDashboard();
        return true;
      },
    );
    return () => subscription.remove();
  }, [isCompleteStep, goToDashboard]);

  const finishLesson = async () => {
    const outcome =
      completion.status === "saved"
        ? completion.outcome
        : await saveCompletion();
    if (outcome) goToDashboard();
  };

  // ---------------------------------------------------------------
  // Surrender
  // ---------------------------------------------------------------
  // From the first step after the overview until the Complete step, the
  // header back button is "Surrender", and Android back / the back gesture
  // ask the same question. A surrender keeps the XP earned so far, saves
  // the score so far (none if the assessment wasn't reached), completes
  // and unlocks nothing (unless the assessment was already passed) and
  // breaks the win streak. The daily streak isn't touched.
  const [started, setStarted] = useState(false);
  const [reachedComplete, setReachedComplete] = useState(false);
  useEffect(() => {
    if (stepIndex > 0) setStarted(true);
  }, [stepIndex]);
  useEffect(() => {
    if (isCompleteStep) setReachedComplete(true);
  }, [isCompleteStep]);
  const [surrenderAsked, setSurrenderAsked] = useState(false);
  const [surrender, setSurrender] = useState<{
    status: "saving" | "saved" | "error";
    outcome?: LessonCompletionOutcome;
    score: SurrenderScore | null;
  } | null>(null);
  // The save, built once when surrendering, so a double tap or a retry
  // sends the same attempt (saveLessonCompletion saves each key once).
  const surrenderSave = useRef<{
    input: LessonCompletionInput;
    key: string;
  } | null>(null);
  const surrenderActive = started && !reachedComplete && !surrender;

  // Score so far: correct answers out of all the questions, so unanswered
  // questions count as wrong. No answer yet = no score.
  const answeredCount = assessment
    ? assessment.questions.filter(
        (question) => assessmentState.answers[question.id] !== undefined,
      ).length
    : 0;
  const surrenderScore: SurrenderScore | null =
    assessment && assessmentScore && answeredCount > 0
      ? {
          percent: assessmentScore.percent,
          correct: assessmentScore.correct,
          answered: answeredCount,
          total: assessmentScore.total,
        }
      : null;
  const passedThisRun =
    xpThisRun.has("assessment") ||
    (assessmentState.finished && !!assessmentScore?.passed);

  // Saves in the background, retrying a few times like a flaky network
  // needs; after that the screen offers "Try saving again".
  const runSurrenderSave = useCallback(async () => {
    const pending = surrenderSave.current;
    if (!pending) return;
    setSurrender((current) => current && { ...current, status: "saving" });
    for (let tryNumber = 1; tryNumber <= 3; tryNumber++) {
      try {
        const outcome = await saveLessonCompletion(pending.input, pending.key);
        setSurrender(
          (current) => current && { ...current, status: "saved", outcome },
        );
        return;
      } catch (error) {
        console.warn(`Failed to save surrender (try ${tryNumber}):`, error);
        if (tryNumber < 3) {
          await new Promise((resolve) => setTimeout(resolve, 1500 * tryNumber));
        }
      }
    }
    setSurrender((current) => current && { ...current, status: "error" });
  }, []);

  const confirmSurrender = () => {
    setSurrenderAsked(false);
    if (surrenderSave.current) return;
    // Stop everything and delete any recordings.
    audio.stop();
    speaking.reset();
    speaking.discardRecordings();
    setSpeakingPhase("setup");

    const rewards: Record<string, number> = {};
    (lesson.rewards?.items ?? []).forEach((item) => {
      rewards[item.section] = item.xp;
    });
    const required = requiredActivitiesFor(lesson);
    const activitiesDone = new Set<string>(doneThisRun);
    const xpEligible = new Set<string>(xpThisRun);
    if (passedThisRun) {
      // Already passed: completed as usual (speaking counts as skipped).
      if (required.includes("speaking")) activitiesDone.add("speaking");
      xpEligible.add("assessment");
      if (!xpThisRun.has("assessment") && assessmentScore) {
        savePretestResult(
          lesson.lessonId,
          assessmentScore.correct,
          assessmentScore.total,
          assessmentScore.passingCorrect,
        ).catch((error) =>
          console.warn("Failed to save lesson assessment:", error),
        );
      }
    }
    surrenderSave.current = {
      input: {
        lessonId: lesson.lessonId,
        dialect: lesson.dialect,
        // Not passed: a pass mark nobody can reach, so the lesson can't
        // pass, complete or unlock; best_score only ever goes up.
        scorePercent: surrenderScore?.percent ?? 0,
        passPercent: passedThisRun ? (assessment?.passPercent ?? 0) : 101,
        activitiesDone: [...activitiesDone],
        xpEligible: [...xpEligible],
        rewards,
        required,
        streakKey: `${runId}:surrender`,
        surrendered: true,
      },
      key: `${runId}:surrender`,
    };
    setSurrender({ status: "saving", score: surrenderScore });
    void runSurrenderSave();
  };

  const askSurrender = useCallback(() => setSurrenderAsked(true), []);

  // While the lesson is in progress, Android back and the back gesture ask
  // to surrender instead of leaving.
  useEffect(() => {
    if (!surrenderActive) return;
    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        setSurrenderAsked(true);
        return true;
      },
    );
    return () => subscription.remove();
  }, [surrenderActive]);
  useEffect(() => {
    (navigation as any).setOptions({ gestureEnabled: !surrenderActive });
    if (!surrenderActive) return;
    return navigation.addListener("beforeRemove", (event) => {
      event.preventDefault();
      setSurrenderAsked(true);
    });
  }, [navigation, surrenderActive]);

  // "Lesson ended early": back goes to the dashboard.
  const hasSurrendered = !!surrender;
  useEffect(() => {
    if (!hasSurrendered) return;
    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        goToDashboard();
        return true;
      },
    );
    return () => subscription.remove();
  }, [hasSurrendered, goToDashboard]);

  const nextLesson = useMemo(() => {
    const index = practiceLevels.findIndex(
      (level) => level.lessonId === lesson.lessonId,
    );
    const next = index >= 0 ? practiceLevels[index + 1] : undefined;
    return next && next.lessonId.startsWith(`${lesson.dialect}_`)
      ? next
      : undefined;
  }, [lesson.lessonId, lesson.dialect]);

  // Sentence-exercise XP needs every exercise that exists to be finished
  // (choose the response, fill in the blanks, arrange the words).
  const finishSentenceExercise = (exercise: "choice" | "fill" | "arrange") => {
    const done = {
      choice: choiceDone || !choiceActivity || exercise === "choice",
      fill: fillDone || !fillInBlanks || exercise === "fill",
      arrange: arrangeDone || !arrangeWords || exercise === "arrange",
    };
    if (exercise === "choice") setChoiceDone(true);
    if (exercise === "fill") setFillDone(true);
    if (exercise === "arrange") setArrangeDone(true);
    if (done.choice && done.fill && done.arrange) earn("sentences");
  };
  const finishFillBlanks = () => finishSentenceExercise("fill");
  const finishArrange = () => finishSentenceExercise("arrange");

  // ---------------------------------------------------------------
  // Speaking practice
  // ---------------------------------------------------------------
  const speakingPhrase = speakingPhrases[speakingIndex];
  const speakingTarget = speakingTargets[speakingIndex];

  // A take ends (Stop, silence or an error) → show the feedback.
  useEffect(() => {
    if (speakingPhase === "recording" && speaking.status === "done") {
      setSpeakingPhase("feedback");
    }
  }, [speakingPhase, speaking.status]);

  const startRecording = async () => {
    if (!speakingPhrase) return;
    audio.stop();
    setSpeakingExpression(null);
    setTakeKey((key) => key + 1);
    const started = await speaking.start();
    if (started) {
      setSpeakingPhase("recording");
      setSpokenIds((current) => new Set(current).add(speakingPhrase.id));
    } else {
      setSpeakingPhase("setup");
    }
  };

  // Next phrase, or on to the next step after the last one. Skipping never
  // blocks: going through the section counts as done, and its XP needs at
  // least one recorded phrase.
  const nextSpeakingPhrase = () => {
    audio.stop();
    speaking.reset();
    setSpeakingExpression(null);
    if (speakingIndex < speakingPhrases.length - 1) {
      setSpeakingIndex(speakingIndex + 1);
      setSpeakingPhase("setup");
      return;
    }
    earn("speaking", spokenIds.size > 0);
    goNextStep();
  };

  // ---------------------------------------------------------------
  // Bottom bar per step
  // ---------------------------------------------------------------
  let previous: LessonFooterButton | undefined = {
    label: "Previous",
    onPress: goPreviousStep,
  };
  let primary: LessonFooterButton = { label: "Next →", onPress: goNextStep };

  switch (step) {
    case "overview":
      previous = undefined;
      primary = { label: "Start lesson", onPress: goNextStep };
      break;
    case "vocabulary":
      previous = {
        label: "Previous",
        onPress: () => {
          if (vocabIndex > 0) {
            audio.stop();
            setVocabIndex(vocabIndex - 1);
          } else {
            goPreviousStep();
          }
        },
      };
      primary = {
        label: "Next →",
        onPress: () => {
          if (vocabIndex < vocabulary.length - 1) {
            audio.stop();
            setVocabIndex(vocabIndex + 1);
          } else {
            earn("vocabulary");
            goNextStep();
          }
        },
      };
      break;
    case "expressions":
      primary = {
        label: "Next →",
        onPress: () => {
          earn("vocabulary");
          goNextStep();
        },
      };
      break;
    case "notes":
      primary = {
        label: "Next →",
        onPress: () => {
          earn("notes");
          goNextStep();
        },
      };
      break;
    case "conversation":
      previous = {
        label: "Previous",
        onPress: () => {
          if (conversationIndex > 0) {
            audio.stop();
            setConversationIndex(conversationIndex - 1);
          } else {
            goPreviousStep();
          }
        },
      };
      primary =
        conversationIndex < conversations.length - 1
          ? {
              label: "Next conversation →",
              onPress: () => {
                audio.stop();
                setConversationIndex(conversationIndex + 1);
              },
            }
          : {
              label: "Next →",
              onPress: () => {
                earn("conversation");
                goNextStep();
              },
            };
      break;
    case "choice":
      if (choiceActivity) {
        const { index, selected, revealed, finished } = choiceState;
        const question = choiceActivity.questions[index];
        const isLast = index >= choiceActivity.questions.length - 1;
        if (finished) {
          primary = {
            label: "Next →",
            onPress: () => {
              finishSentenceExercise("choice");
              goNextStep();
            },
          };
        } else if (!revealed) {
          primary = {
            label: "Check answer",
            disabled: !selected,
            onPress: () => {
              if (!selected || !question) return;
              setChoiceState({
                ...choiceState,
                revealed: true,
                answers: { ...choiceState.answers, [question.id]: selected },
              });
            },
          };
        } else {
          primary = {
            label: isLast ? "See results" : "Next question →",
            onPress: () =>
              setChoiceState({
                ...choiceState,
                index: isLast ? index : index + 1,
                selected: null,
                revealed: false,
                finished: isLast,
              }),
          };
        }
      }
      break;
    case "match":
      if (matchActivity) {
        const correct =
          matchState.checked && isMatchCorrect(matchActivity, matchState);
        primary = correct
          ? { label: "Next →", onPress: goNextStep }
          : {
              label: "Check answers",
              disabled: !isMatchComplete(matchActivity, matchState),
              onPress: () => {
                setMatchState({ ...matchState, checked: true });
                if (isMatchCorrect(matchActivity, matchState)) earn("match");
              },
            };
      }
      break;
    case "fillBlanks":
      if (fillInBlanks) {
        const isLast = fillState.index >= fillInBlanks.items.length - 1;
        if (fillState.status === "correct") {
          primary = isLast
            ? {
                label: "Next →",
                onPress: () => {
                  finishFillBlanks();
                  goNextStep();
                },
              }
            : {
                label: "Next sentence →",
                onPress: () =>
                  setFillState({
                    index: fillState.index + 1,
                    selected: null,
                    status: "idle",
                  }),
              };
        } else if (fillState.status === "wrong") {
          primary = {
            label: "Try again",
            onPress: () =>
              setFillState({ ...fillState, selected: null, status: "idle" }),
          };
        } else {
          primary = {
            label: "Check",
            disabled: !fillState.selected,
            onPress: () =>
              setFillState({
                ...fillState,
                status: isFillBlankCorrect(fillInBlanks, fillState)
                  ? "correct"
                  : "wrong",
              }),
          };
        }
      }
      break;
    case "arrange":
      if (arrangeWords) {
        const isLast = arrangeState.index >= arrangeWords.items.length - 1;
        if (arrangeState.status === "correct") {
          primary = isLast
            ? {
                label: "Next →",
                onPress: () => {
                  finishArrange();
                  goNextStep();
                },
              }
            : {
                label: "Next sentence →",
                onPress: () =>
                  setArrangeState({
                    index: arrangeState.index + 1,
                    placed: [],
                    status: "idle",
                  }),
              };
        } else if (arrangeState.status === "wrong") {
          primary = {
            label: "Try again",
            onPress: () =>
              setArrangeState({ ...arrangeState, placed: [], status: "idle" }),
          };
        } else {
          primary = {
            label: "Check",
            disabled: !isArrangeComplete(arrangeWords, arrangeState),
            onPress: () =>
              setArrangeState({
                ...arrangeState,
                status: isArrangeCorrect(arrangeWords, arrangeState)
                  ? "correct"
                  : "wrong",
              }),
          };
        }
      }
      break;
    case "assessment":
      if (assessment) {
        const { index, selected, revealed, finished } = assessmentState;
        const question = assessment.questions[index];
        const isLast = index >= assessment.questions.length - 1;
        if (finished) {
          if (assessmentScore?.passed) {
            primary = {
              label: saving
                ? "Saving…"
                : saveError
                  ? "Try saving again"
                  : "Continue →",
              disabled: saving,
              onPress: finishAssessment,
            };
          } else {
            previous = { label: "Review", onPress: reviewLesson };
            primary = {
              label: "Try again",
              onPress: () => {
                setAssessmentAttempt((count) => count + 1);
                setAssessmentState(initialAssessmentState);
              },
            };
          }
        } else if (!revealed) {
          previous = undefined;
          primary = {
            label: "Check answer",
            disabled: !selected,
            onPress: () => {
              if (!selected || !question) return;
              setAssessmentState({
                ...assessmentState,
                revealed: true,
                answers: {
                  ...assessmentState.answers,
                  [question.id]: selected,
                },
              });
            },
          };
        } else {
          previous = undefined;
          primary = {
            label: isLast ? "See results" : "Next question →",
            onPress: () =>
              setAssessmentState({
                ...assessmentState,
                index: isLast ? index : index + 1,
                selected: null,
                revealed: false,
                finished: isLast,
              }),
          };
        }
      }
      break;
    case "speaking":
      if (speakingPhase === "setup") {
        previous = { label: "Skip", onPress: nextSpeakingPhrase };
        primary = micEnabled
          ? {
              label:
                speaking.status === "starting"
                  ? "Starting…"
                  : "Start recording",
              disabled: speaking.status === "starting",
              onPress: () => void startRecording(),
            }
          : { label: "Continue without mic →", onPress: nextSpeakingPhrase };
      } else if (speakingPhase === "recording") {
        previous = undefined;
        primary = {
          label:
            speaking.status === "processing" ? "Checking…" : "Stop recording",
          disabled: speaking.status !== "recording",
          onPress: speaking.stop,
        };
      } else {
        previous = {
          label: "Try again",
          onPress: () => void startRecording(),
        };
        primary = { label: "Continue →", onPress: nextSpeakingPhrase };
      }
      break;
    case "complete":
      previous = { label: "Review lesson", onPress: reviewLesson };
      primary = {
        label:
          completion.status === "saving"
            ? "Saving…"
            : completion.status === "error"
              ? "Try saving again"
              : "Finish and go to lessons",
        disabled: completion.status === "saving",
        onPress: () => void finishLesson(),
      };
      break;
  }

  const stepProgress =
    step === "vocabulary" && vocabulary.length > 0
      ? (vocabIndex + 1) / vocabulary.length
      : step === "conversation" && conversations.length > 0
        ? (conversationIndex + 1) / conversations.length
        : 1;
  const progress = (stepIndex + stepProgress) / steps.length;

  if (surrender) {
    return (
      <LessonShell
        title={`${lesson.dialectLabel} · Lesson ${lesson.lessonNumber}`}
        subtitle="Lesson ended early"
        progress={progress}
        xpEarned={xpEarned}
        xpTotal={lesson.rewards?.total}
        onBack={goToDashboard}
        scrollKey="surrendered"
        primary={{
          label:
            surrender.status === "saving" ? "Saving…" : "Back to dashboard",
          disabled: surrender.status === "saving",
          onPress: goToDashboard,
        }}
      >
        <SurrenderedSection
          score={surrender.score}
          saveStatus={surrender.status}
          outcome={surrender.outcome}
          onRetrySave={() => void runSurrenderSave()}
        />
      </LessonShell>
    );
  }

  return (
    <LessonShell
      title={`${lesson.dialectLabel} · Lesson ${lesson.lessonNumber}`}
      subtitle={`${
        step === "speaking"
          ? SPEAKING_PHASE_LABELS[speakingPhase]
          : STEP_LABELS[step]
      } · ${stepIndex + 1} of ${steps.length}`}
      progress={progress}
      xpEarned={xpEarned}
      xpTotal={lesson.rewards?.total}
      onBack={step === "complete" ? goToDashboard : onExit}
      onSurrender={surrenderActive ? askSurrender : undefined}
      scrollKey={`${step}-${vocabIndex}-${conversationIndex}-${choiceState.index}-${choiceState.finished}-${fillState.index}-${arrangeState.index}-${assessmentState.index}-${assessmentState.finished}-${speakingIndex}-${speakingPhase}`}
      previous={previous}
      primary={primary}
    >
      {step === "overview" ? (
        <OverviewSection
          lesson={lesson}
          mood={mood}
          onMoodChange={setMood}
          cameraHints={cameraHints}
          onCameraHintsChange={setCameraHints}
        />
      ) : null}

      {step === "vocabulary" && vocabulary[vocabIndex] ? (
        <VocabularySection
          item={vocabulary[vocabIndex]}
          index={vocabIndex}
          total={vocabulary.length}
          intro={lesson.vocabularyIntro}
          pronunciationTip={lesson.pronunciationTip}
          audio={audio}
        />
      ) : null}

      {step === "greetings" ? (
        <GreetingsSection
          greetings={greetings}
          moreWords={moreWords}
          audio={audio}
        />
      ) : null}

      {step === "selfIntro" ? (
        <SelfIntroSection
          intro={lesson.selfIntroIntro}
          patterns={patterns}
          sentences={sentences}
          audio={audio}
        />
      ) : null}

      {step === "expressions" ? (
        <ExpressionsSection
          intro={lesson.expressionsIntro}
          groups={expressionGroups}
          audio={audio}
        />
      ) : null}

      {step === "notes" ? (
        <LanguageNotesSection notes={languageNotes} audio={audio} />
      ) : null}

      {step === "situations" ? (
        <ExpressionsSection
          title={lesson.situationsTitle ?? "Everyday situations"}
          intro={lesson.situationsIntro}
          groups={situationGroups}
          audio={audio}
          keyPrefix="situation"
        />
      ) : null}

      {step === "conversation" && conversations[conversationIndex] ? (
        <ConversationSection
          conversation={conversations[conversationIndex]}
          audio={audio}
          position={{ index: conversationIndex, total: conversations.length }}
        />
      ) : null}

      {step === "choice" && choiceActivity && choiceAsAssessment ? (
        <>
          <View>
            <Text style={lessonStyles.sectionTitle}>
              {choiceActivity.title}
            </Text>
            {choiceActivity.instructions ? (
              <Text style={lessonStyles.sectionIntro}>
                {choiceActivity.instructions}
              </Text>
            ) : null}
          </View>
          <AssessmentSection
            assessment={choiceAsAssessment}
            state={choiceState}
            practice
            onSelect={(key) =>
              setChoiceState({ ...choiceState, selected: key })
            }
          />
        </>
      ) : null}

      {step === "match" && matchActivity ? (
        <MatchSection
          activity={matchActivity}
          state={matchState}
          onChange={setMatchState}
        />
      ) : null}

      {step === "fillBlanks" && fillInBlanks ? (
        <FillBlanksSection
          activity={fillInBlanks}
          state={fillState}
          onSelect={(word) =>
            setFillState({ ...fillState, selected: word, status: "idle" })
          }
        />
      ) : null}

      {step === "arrange" && arrangeWords ? (
        <ArrangeWordsSection
          activity={arrangeWords}
          state={arrangeState}
          onChange={setArrangeState}
        />
      ) : null}

      {step === "assessment" && assessment ? (
        <>
          <AssessmentSection
            assessment={assessment}
            state={assessmentState}
            onSelect={(key) =>
              setAssessmentState({ ...assessmentState, selected: key })
            }
          />
          {saveError ? <Text style={styles.error}>{saveError}</Text> : null}
        </>
      ) : null}

      {step === "speaking" && speakingPhrase ? (
        <SpeakingSection
          lessonId={lesson.lessonId}
          phase={speakingPhase}
          phrase={speakingPhrase}
          index={speakingIndex}
          total={speakingPhrases.length}
          targetTone={speakingTarget?.expectedTone}
          targetExpression={speakingTarget?.expectedExpression}
          respellings={respellings}
          session={speaking}
          audio={audio}
          micEnabled={micEnabled}
          onMicEnabledChange={setMicEnabled}
          cameraHints={cameraHints}
          onCameraHintsChange={setCameraHints}
          expression={speakingExpression}
          onExpression={setSpeakingExpression}
          takeKey={takeKey}
        />
      ) : null}

      {step === "complete" ? (
        <CompleteSection
          rewards={lesson.rewards}
          scorePercent={
            assessmentState.finished && assessmentScore
              ? assessmentScore.percent
              : null
          }
          passPercent={assessment?.passPercent}
          earned={earned}
          saveStatus={completion.status}
          outcome={completion.outcome}
          onRetrySave={() => void saveCompletion()}
          nextLesson={
            nextLesson
              ? {
                  number: nextLesson.id,
                  unlocked:
                    REVIEW_MODE ||
                    !!completion.outcome?.lessonComplete ||
                    isLessonComplete(lesson.lessonId),
                  onOpen: () => {
                    audio.stop();
                    router.replace({
                      pathname: "/lesson/[lessonId]",
                      params: { lessonId: nextLesson.lessonId },
                    } as any);
                  },
                }
              : null
          }
        />
      ) : null}

      <SurrenderDialog
        visible={surrenderAsked}
        onKeepPlaying={() => setSurrenderAsked(false)}
        onSurrender={confirmSurrender}
      />
    </LessonShell>
  );
}

const styles = StyleSheet.create({
  error: {
    color: LESSON_COLORS.red,
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
  },
});
