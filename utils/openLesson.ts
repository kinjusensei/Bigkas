import { useRouter } from "expo-router";
import { Alert } from "react-native";

import { LOCKED_LESSON_MESSAGE } from "../components/lesson/LessonGate";
import { REVIEW_MODE } from "../constant/devFlags";
import { LESSONS_PER_TIER, tierIndexForNumber, TIERS } from "./lessonTiers";

// Opens every lesson from the lessons board and the dashboard while review
// mode is on. Set it in constant/devFlags.ts.
export const UNLOCK_ALL_LESSONS = REVIEW_MODE;

export type LessonLanguage = "Tagalog" | "Kapampangan" | "Waray";

// "Kapampangan", 2 → "kapampangan_2" (the id used in data/practiceData.ts
// and data/lessons/structuredLessons.ts).
export function lessonIdFor(language: LessonLanguage, lessonNumber: number) {
  return `${language.toLowerCase()}_${lessonNumber}`;
}

// The one way into a lesson. /lesson/[lessonId] decides the flow: the
// structured lesson (StructuredLessonFlow) when the lesson has structured
// data, otherwise the phrase reading screen that leads to the pretest and
// practice game. A locked lesson shows the lock message and doesn't open.
// Returns whether the lesson was opened.
export function openLesson(
  router: ReturnType<typeof useRouter>,
  lessonId: string,
  { unlocked }: { unlocked: boolean },
): boolean {
  if (!unlocked && !UNLOCK_ALL_LESSONS) {
    const lessonNumber = Number(lessonId.split("_")[1]) || 1;
    const tierIndex = tierIndexForNumber(lessonNumber);
    // First lesson of Intermediate/Hard: the whole level is what's locked.
    if (tierIndex > 0 && (lessonNumber - 1) % LESSONS_PER_TIER === 0) {
      Alert.alert(
        `${TIERS[tierIndex]?.name ?? "This level"} is locked`,
        `Finish all ${LESSONS_PER_TIER} ${TIERS[tierIndex - 1].name} lessons to unlock it.`,
      );
      return false;
    }
    Alert.alert(
      "Lesson locked",
      `${LOCKED_LESSON_MESSAGE}: complete Lesson ${Math.max(
        lessonNumber - 1,
        1,
      )} to unlock Lesson ${lessonNumber}.`,
    );
    return false;
  }

  router.push({
    pathname: "/lesson/[lessonId]",
    params: { lessonId },
  } as any);
  return true;
}
