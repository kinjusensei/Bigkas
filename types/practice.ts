export type GameStatus = "READY" | "RUNNING" | "PAUSED" | "FINISHED";

export type PracticeExpression =
  | "happy"
  | "angry"
  | "sad"
  | "neutral"
  | "shocked"
  | "confused"
  | "unknown";

export type ExpectedPracticeExpression = Exclude<PracticeExpression, "unknown">;
// The pitch-level tone a phrase is expected to be said in. Note this
// intentionally excludes "unknown" — that's a valid *detection* result
// (from PracticeTone) when nothing usable was captured, but never a valid
// *expected* value for a phrase to grade against.
export type ExpectedTone = "low" | "medium" | "high";

// Vowel length (short vs. long) — only meaningful for dialects/words where
// this is phonemic (e.g. Kapampangan). Optional on PracticePhrase because
// most phrases won't need it.
export type ExpectedVowelLength = "short" | "long";

export interface PracticeExpressionResult {
  expression: PracticeExpression;
  smilingProbability: number;
}

// One word of a phrase with its English meaning — shown on the lesson
// board (app/lessons.tsx) before the learner starts practice.
export interface PracticeWord {
  word: string;
  meaning: string;
  audioUrl?: string;
}

export interface PracticePhrase {
  id: number;
  text: string;
  meaning?: string;
  exampleSentence?: string;
  // Optional reading-screen extras (app/lesson/[lessonId].tsx). Cards for
  // these stay hidden until a phrase has them.
  // `example` is the bold line under the divider in the word card (falls
  // back to the meaning); `howToUse` is the "How to use it" card text
  // (falls back to the word list). Empty strings count as unset.
  example?: string;
  // Small gray line under the big word in the word card. Hidden when empty.
  subTranslation?: string;
  howToUse?: string;
  // English translation shown under `howToUse` in the "How to use it" card.
  howToUseTranslation?: string;
  pronunciation?: string;
  exampleTranslation?: string;
  pronunciationTip?: string;
  expectedExpression: ExpectedPracticeExpression;
  expectedTone: ExpectedTone;
  expectedVowelLength?: ExpectedVowelLength;
  audioUrl?: string | number;
  words?: PracticeWord[];
}

export interface PracticeLevel {
  id: number;
  lessonId: string;
  title: string;
  subtitle?: string;
  requiredCorrect: number;
  phrases: PracticePhrase[];
}

export interface PracticeState {
  status: GameStatus;
  level: PracticeLevel;
  currentPhraseIndex: number;
  correctAnswers: number;
  score: number;
  faceDetected: boolean;
  pauseReason?: "NO_FACE" | "MANUAL";
  totalQuestions: number;
  accuracy: number;
  xpEarned: number;
  stars: number;
  badge: string;
}
