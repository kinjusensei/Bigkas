// =========================================================
// PRE-TEST CONTENT — scalable pattern for many levels × dialects.
//
// Fixed 10-item pattern (per project spec), unchanged from before:
//   1–4: multiple choice (dialect word -> pick correct English meaning)
//   5:   speak (say the word aloud)
//   6–9: multiple choice (same format as 1–4)
//   10:  facial expression recognition (reuses PracticeCamera)
//
// WHAT CHANGED vs the single-lesson version:
// Content (word/meaning/distractors) is now separated from structure
// (ids, "type" tags, option shuffling). You only ever write plain
// { word, correctMeaning } content per level — the builder below does
// the rest, including generating plausible wrong-answer options from a
// shared per-dialect distractor pool when you don't specify your own.
//
// This means adding level 21 or a 4th dialect is just adding one more
// entry to a levels object — no id/type/options boilerplate to copy.
// =========================================================

import { ExpectedPracticeExpression } from "../types/practice";

// ---------- Public question shapes (unchanged) ----------

export type PretestMultipleChoiceQuestion = {
  id: number;
  type: "multiple_choice";
  word: string;
  correctMeaning: string;
  options: string[];
};

export type PretestSpeakQuestion = {
  id: number;
  type: "speak";
  word: string;
};

export type PretestExpressionQuestion = {
  id: number;
  type: "expression";
  prompt: string;
  expectedExpression: ExpectedPracticeExpression;
};

export type PretestQuestion =
  | PretestMultipleChoiceQuestion
  | PretestSpeakQuestion
  | PretestExpressionQuestion;

// ---------- Content shapes (this is what you actually write per level) ----------

export type Dialect = "tagalog" | "kapampangan" | "waray";

/**
 * One vocab item. `distractors` is optional — if you leave it out, the
 * builder picks 3 wrong-but-plausible meanings from that dialect's
 * distractor pool (excluding the correct meaning and any duplicates).
 * Specify them manually when the auto-pick would be too easy/weird
 * for a specific word (e.g. "Pogi" vs "Maganda" are close enough that
 * you might want them adjacent as real distractors).
 */
export type WordEntry = {
  word: string;
  correctMeaning: string;
  distractors?: [string, string, string];
};

export type ExpressionEntry = {
  prompt: string;
  expectedExpression: ExpectedPracticeExpression;
};

/**
 * Exactly 9 word entries, in the same order they'll appear:
 * indices 0–3 -> items 1–4 (MC), index 4 -> item 5 (speak),
 * indices 5–8 -> items 6–9 (MC). Index 4's correctMeaning/distractors
 * are ignored (speak items don't show a meaning), but keep them filled
 * in for consistency / in case you want to show a hint later.
 */
export type LevelContent = {
  words: [
    WordEntry,
    WordEntry,
    WordEntry,
    WordEntry,
    WordEntry, // speak slot
    WordEntry,
    WordEntry,
    WordEntry,
    WordEntry,
  ];
  expression: ExpressionEntry;
};

// ---------- Builder ----------

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickDistractors(
  correctMeaning: string,
  pool: string[],
  count: number,
): string[] {
  const candidates = pool.filter((m) => m !== correctMeaning);
  return shuffle(candidates).slice(0, count);
}

export function buildPretest(
  content: LevelContent,
  distractorPool: string[],
): PretestQuestion[] {
  const { words, expression } = content;
  const questions: PretestQuestion[] = [];

  words.forEach((entry, idx) => {
    const id = idx + 1;
    if (idx === 4) {
      questions.push({ id, type: "speak", word: entry.word });
      return;
    }
    const distractors =
      entry.distractors ??
      pickDistractors(entry.correctMeaning, distractorPool, 3);
    questions.push({
      id,
      type: "multiple_choice",
      word: entry.word,
      correctMeaning: entry.correctMeaning,
      options: shuffle([entry.correctMeaning, ...distractors]),
    });
  });

  questions.push({
    id: 10,
    type: "expression",
    prompt: expression.prompt,
    expectedExpression: expression.expectedExpression,
  });

  return questions;
}

// ---------- Per-dialect distractor pools ----------
// A grab-bag of plausible-but-wrong English meanings for that dialect's
// vocab, used only when a WordEntry doesn't specify its own distractors.
// Keep these reasonably large (15-30+ items) so auto-pick doesn't feel
// repetitive across levels. Expand as you add more real vocabulary.

const distractorPools: Record<Dialect, string[]> = {
  tagalog: [
    "Ugly",
    "Evening",
    "Tired",
    "Night",
    "Afternoon",
    "Yesterday",
    "Goodbye",
    "Thank you",
    "My name is",
    "Hello",
    "Please",
    "Sorry",
    "We",
    "They",
    "He / She",
    "Spanish",
    "American",
    "Chinese",
    "Angry",
    "Small",
    "Slow",
    "Hungry",
    "Cold",
    "Late",
  ],
  kapampangan: [
    // TODO: fill with real Kapampangan-context distractor meanings
    "Ugly",
    "Evening",
    "Tired",
    "Goodbye",
    "Thank you",
    "Hello",
  ],
  waray: [
    // TODO: fill with real Waray-context distractor meanings
    "Ugly",
    "Evening",
    "Tired",
    "Goodbye",
    "Thank you",
    "Hello",
  ],
};

// ---------- Level content ----------
// One object per dialect, keyed by level number. This is the ONLY place
// you add real content — everything above is fixed machinery.

const tagalogLevels: Record<number, LevelContent> = {
  1: {
    words: [
      { word: "Magandang", correctMeaning: "Good / Beautiful" },
      { word: "Umaga", correctMeaning: "Morning" },
      { word: "Kumusta", correctMeaning: "How are you" },
      { word: "Paalam", correctMeaning: "Goodbye" },
      { word: "Ako", correctMeaning: "I / Me" }, // speak slot
      { word: "Ka", correctMeaning: "You" },
      { word: "Pilipino", correctMeaning: "Filipino" },
      { word: "Maganda", correctMeaning: "Beautiful" },
      { word: "Pogi", correctMeaning: "Handsome" },
    ],
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },
  // 2: { words: [...], expression: {...} },
  // ...continue up to 20
};

const kapampanganLevels: Record<number, LevelContent> = {
  // 1: { words: [...], expression: {...} },
};

const warayLevels: Record<number, LevelContent> = {
  // 1: { words: [...], expression: {...} },
};

// ---------- Assembly: builds pretestByLessonId for every dialect/level ----------
// lessonId convention matches your existing practiceData.ts naming:
// "tagalog_1", "kapampangan_3", "waray_12", etc.

const allLevels: Record<Dialect, Record<number, LevelContent>> = {
  tagalog: tagalogLevels,
  kapampangan: kapampanganLevels,
  waray: warayLevels,
};

function buildAllPretests(): Record<string, PretestQuestion[]> {
  const result: Record<string, PretestQuestion[]> = {};
  (Object.keys(allLevels) as Dialect[]).forEach((dialect) => {
    const levels = allLevels[dialect];
    Object.keys(levels).forEach((levelKey) => {
      const levelNum = Number(levelKey);
      const lessonId = `${dialect}_${levelNum}`;
      result[lessonId] = buildPretest(
        levels[levelNum],
        distractorPools[dialect],
      );
    });
  });
  return result;
}

export const pretestByLessonId: Record<string, PretestQuestion[]> =
  buildAllPretests();
