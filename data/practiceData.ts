import { PracticeLevel } from "../types/practice";

// NOTE: expectedTone values below are PLACEHOLDER GUESSES based on general
// sentence-type intonation patterns (questions ~ rising/high, statements ~
// medium, short farewells ~ falling/low) — they are NOT verified against
// real Tagalog/Kapampangan/Waray pronunciation. Please review and correct
// each one before relying on them for grading.

export const practiceLevels: PracticeLevel[] = [
  {
    id: 1,
    lessonId: "tagalog_1",
    title: "Basic Greetings",
    timeLimit: 60,
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Magandang Umaga",
        expectedExpression: "happy",
        expectedTone: "medium", // TODO: verify — greeting, fairly level
      },
      {
        id: 2,
        text: "Kumusta Ka?",
        expectedExpression: "happy",
        expectedTone: "high", // TODO: verify — question, rising intonation
      },
      {
        id: 3,
        text: "Paalam",
        expectedExpression: "neutral",
        expectedTone: "low", // TODO: verify — short farewell, falling
      },
    ],
  },

  {
    id: 2,
    lessonId: "tagalog_2",
    title: "Introducing Yourself",
    timeLimit: 60,
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Ako si Juan.",
        expectedExpression: "happy",
        expectedTone: "medium", // TODO: verify — statement
      },
      {
        id: 2,
        text: "Ikinagagalak kitang makilala.",
        expectedExpression: "happy",
        expectedTone: "medium", // TODO: verify — statement
      },
      {
        id: 3,
        text: "Ako ay Pilipino.",
        expectedExpression: "neutral",
        expectedTone: "medium", // TODO: verify — statement
      },
    ],
  },

  // LEVEL 3 GOES HERE
  {
    id: 3,
    lessonId: "tagalog_3",
    title: "Something",
    timeLimit: 60,
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Pogi ka.",
        expectedExpression: "happy",
        expectedTone: "medium", // TODO: verify — statement
      },
      {
        id: 2,
        text: "Maganda ka.",
        expectedExpression: "happy",
        expectedTone: "medium", // TODO: verify — statement
      },
      {
        id: 3,
        text: "Pangit ka",
        expectedExpression: "neutral",
        expectedTone: "medium", // TODO: verify — statement
      },
    ],
  },
];
