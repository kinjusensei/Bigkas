import { useEffect, useReducer } from "react";
import {
  createInitialState,
  practiceReducer,
} from "../reducers/practiceReducer";
import { PracticeLevel } from "../types/practice";

export function usePractice(level: PracticeLevel) {
  const [state, dispatch] = useReducer(
    practiceReducer,
    level,
    createInitialState,
  );

  // Timer
  useEffect(() => {
    if (state.status !== "RUNNING") return;

    const interval = setInterval(() => {
      dispatch({ type: "TICK" });
    }, 1000);

    return () => clearInterval(interval);
  }, [state.status]);

  // Auto finish when timer reaches zero
  useEffect(() => {
    if (state.timeLeft <= 0) {
      dispatch({ type: "FINISH" });
    }
  }, [state.timeLeft]);

  const currentPhrase = state.level.phrases[state.currentPhraseIndex];

  return {
    state,
    dispatch,
    currentPhrase,
  };
}
