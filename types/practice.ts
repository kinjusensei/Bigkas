export type GameStatus = "READY" | "RUNNING" | "PAUSED" | "FINISHED";

export type PracticeExpression =
  | "happy"
  | "angry"
  | "sad"
  | "neutral"
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

export interface PracticePhrase {
  id: number;
  text: string;
  expectedExpression: ExpectedPracticeExpression;
  expectedTone: ExpectedTone;
  expectedVowelLength?: ExpectedVowelLength;
}

export interface PracticeLevel {
  id: number;
  lessonId: string;
  title: string;
  timeLimit: number;
  requiredCorrect: number;
  phrases: PracticePhrase[];
}

export interface PracticeState {
  status: GameStatus;
  level: PracticeLevel;
  timeLeft: number;
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
