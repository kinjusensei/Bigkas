import { PracticeLevel, PracticeState } from "../types/practice";
import {
  calculateAccuracy,
  calculateBadge,
  calculateStars,
  calculateXP,
} from "../utils/practiceUtils";

export type PracticeAction =
  | { type: "START" }
  | { type: "PAUSE" }
  | { type: "RESUME" }
  | { type: "TICK" }
  | { type: "CORRECT_ANSWER" }
  | { type: "WRONG_ANSWER" }
  | { type: "NEXT_PHRASE" }
  | { type: "FINISH" }
  | { type: "RESTART"; level: PracticeLevel };

export function createInitialState(level: PracticeLevel): PracticeState {
  return {
    status: "READY",

    level,

    timeLeft: level.timeLimit,

    currentPhraseIndex: 0,

    correctAnswers: 0,

    score: 0,

    faceDetected: false,

    pauseReason: undefined,

    totalQuestions: level.phrases.length,

    accuracy: 0,

    xpEarned: 0,

    stars: 0,

    badge: "",
  };
}

function finishPractice(state: PracticeState): PracticeState {
  const accuracy = calculateAccuracy(
    state.correctAnswers,
    state.totalQuestions,
  );

  const xpEarned = calculateXP(state.correctAnswers);

  const stars = calculateStars(accuracy);

  const badge = calculateBadge(accuracy);

  return {
    ...state,
    status: "FINISHED",
    accuracy,
    xpEarned,
    stars,
    badge,
    timeLeft: 0,
  };
}

export function practiceReducer(
  state: PracticeState,
  action: PracticeAction,
): PracticeState {
  switch (action.type) {
    case "START":
      return {
        ...state,
        status: "RUNNING",
      };

    case "PAUSE":
      return {
        ...state,
        status: "PAUSED",
      };

    case "RESUME":
      return {
        ...state,
        status: "RUNNING",
      };

    case "TICK":
      return {
        ...state,
        timeLeft: Math.max(state.timeLeft - 1, 0),
      };

    case "CORRECT_ANSWER":
      return {
        ...state,
        score: state.score + 10,
        correctAnswers: state.correctAnswers + 1,
      };

    case "WRONG_ANSWER":
      return state;

    case "NEXT_PHRASE": {
      const nextIndex = state.currentPhraseIndex + 1;

      if (nextIndex >= state.level.phrases.length) {
        return finishPractice(state);
      }

      return {
        ...state,
        currentPhraseIndex: nextIndex,
      };
    }

    case "FINISH":
      return finishPractice(state);

    case "RESTART":
      return createInitialState(action.level);

    default:
      return state;
  }
}
