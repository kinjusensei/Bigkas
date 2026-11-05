import { useReducer } from "react";
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

  const currentPhrase = state.level.phrases[state.currentPhraseIndex];

  return {
    state,
    dispatch,
    currentPhrase,
  };
}
