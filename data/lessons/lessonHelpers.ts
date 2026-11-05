import {
  LessonArrangeItem,
  LessonAssessmentQuestion,
  LessonAudioSource,
  LessonDialogueLine,
  LessonFillBlankItem,
  LessonGreeting,
  LessonSentence,
  LessonSpeakingPhrase,
} from "../../types/structuredLesson";

// Builders for lesson data files (Tagalog Lessons 4–10): the rows copied
// from a lesson document's tables, turned into the shapes in
// types/structuredLesson.ts. Content only, no app code, so
// scripts/check-structured-lessons.js can load them.

// [term, meaning, pronunciation?, recording?] → word cards.
export const words = (
  rows: [
    term: string,
    meaning: string,
    pronunciation?: string,
    audioUrl?: LessonAudioSource,
  ][],
): LessonGreeting[] =>
  rows.map(([term, meaning, pronunciation, audioUrl]) => ({
    term,
    meaning,
    pronunciation,
    audioUrl,
  }));

// [text, meaning] → example sentences.
export const sentences = (
  rows: [text: string, meaning: string][],
): LessonSentence[] => rows.map(([text, meaning]) => ({ text, meaning }));

// [speaker, text, translation] → dialogue lines.
export const dialogue = (
  rows: [speaker: string, text: string, translation?: string][],
): LessonDialogueLine[] =>
  rows.map(([speaker, text, translation]) => ({ speaker, text, translation }));

const OPTION_KEYS = ["A", "B", "C", "D", "E"];

// Multiple choice: options in the document's order, the answer as its
// letter from the document's answer key.
export const choice = (
  id: number,
  prompt: string,
  options: string[],
  answerKey: string,
): LessonAssessmentQuestion => ({
  id,
  prompt,
  options: options.map((text, index) => ({ key: OPTION_KEYS[index], text })),
  answerKey,
});

// Matching: Column A terms, Column B choices (lettered A, B, …) and the
// answer key's letters, one per term ("C D A B E").
export const matchPairs = (terms: string[], choices: string[], key: string) => {
  const letters = key.split(" ");
  return terms.map((term, index) => ({
    id: `${index + 1}`,
    term,
    answer: choices["ABCDEFGH".indexOf(letters[index])],
  }));
};

// Arrange the Words: tiles as the document lists them ("a / b / c") and
// the answer key's sentence. The tile order is the sentence's words in
// order (case and end punctuation ignored).
export const arrange = (
  id: string,
  tiles: string,
  display: string,
): LessonArrangeItem => {
  const tileWords = tiles.split(" / ").map((word) => word.trim());
  const answerWords = display.replace(/[.?!]$/, "").split(" ");
  const answer = answerWords.map(
    (word) =>
      tileWords.find((tile) => tile.toLowerCase() === word.toLowerCase()) ??
      word,
  );
  return { id, words: tileWords, answer, display };
};

// Fill in the blanks sharing one heading and word bank.
export const fills = (
  prefix: string,
  rows: [sentence: string, answer: string, hint?: string][],
  heading: { title: string; instructions?: string; wordBank?: string[] },
): LessonFillBlankItem[] =>
  rows.map(([sentence, answer, hint], index) => ({
    id: `${prefix}-${index + 1}`,
    sentence,
    answer,
    hint,
    title: heading.title,
    instructions: heading.instructions,
    wordBank: heading.wordBank ?? [...new Set(rows.map((row) => row[1]))],
  }));

// [text, meaning?] → speaking phrases numbered in order.
export const phrases = (
  rows: [text: string, meaning?: string][],
): LessonSpeakingPhrase[] =>
  rows.map(([text, meaning], index) => ({
    id: `${index + 1}`,
    text,
    meaning,
  }));
