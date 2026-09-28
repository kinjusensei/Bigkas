import { PracticeLevel } from "../../types/practice";

export const tagalogLessons: PracticeLevel[] = [
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
];
