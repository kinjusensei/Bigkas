import type { PracticeLevel } from "../../types/practice";
import { shuffled } from "../../utils/storyPractice";
import { deshawnStoryPracticeChapters } from "./deshawn";
import { kapampanganStoryPracticeChapters } from "./kapampangan";
import { oldHouseStoryPracticeChapters } from "./oldHouse";
import { tagalogStoryPracticeChapters } from "./tagalog";
import type { StoryPracticeChapter, StoryPracticeQuestion } from "./types";
import { warayStoryPracticeChapters } from "./waray";

export type { StoryPracticeChapter } from "./types";

export const storyPracticeChapters: StoryPracticeChapter[] = [
  ...tagalogStoryPracticeChapters,
  ...kapampanganStoryPracticeChapters,
  ...warayStoryPracticeChapters,
  ...deshawnStoryPracticeChapters,
  ...oldHouseStoryPracticeChapters,
];

function hasUsableQuestions(lesson: PracticeLevel): boolean {
  return lesson.phrases.length > 0;
}

export function findStoryPracticeLevel(
  lessonId: string | undefined,
): PracticeLevel | undefined {
  if (!lessonId) return undefined;

  const chapter = storyPracticeChapters.find(
    (item) => item.lessonId === lessonId,
  );
  const lesson = chapter?.lesson;

  return lesson && hasUsableQuestions(lesson) ? lesson : undefined;
}

export function findStoryPracticeQuestions(
  lessonId: string | undefined,
): StoryPracticeQuestion[] | undefined {
  if (!lessonId) return undefined;

  const chapter = storyPracticeChapters.find(
    (item) => item.lessonId === lessonId,
  );

  return chapter?.questions && chapter.questions.length > 0
    ? chapter.questions
    : undefined;
}

export function findStoryPracticeChapter(
  lessonId: string | undefined,
): StoryPracticeChapter | undefined {
  return storyPracticeChapters.find((item) => item.lessonId === lessonId);
}

// The questions for one attempt: call once per attempt.
export function prepareStoryPracticeQuestions(
  lessonId: string | undefined,
): StoryPracticeQuestion[] {
  const questions = findStoryPracticeQuestions(lessonId) ?? [];
  const chapter = storyPracticeChapters.find(
    (item) => item.lessonId === lessonId,
  );
  if (!chapter?.shuffleOptions) return questions;

  return questions.map((question) =>
    question.type === "card_match" || question.type === "multiple_choice"
      ? { ...question, options: shuffled(question.options) }
      : question,
  );
}

export function getStoryPracticeRequiredCorrect(
  lessonId: string,
): number | null {
  const chapter = storyPracticeChapters.find(
    (item) => item.lessonId === lessonId,
  );
  return chapter?.questions?.length
    ? (chapter.requiredCorrect ?? Math.ceil(chapter.questions.length * 0.7))
    : null;
}

/** Only playable Story lessons are exposed to practice and progress logic. */
export const storyPracticeLevels: PracticeLevel[] =
  storyPracticeChapters.flatMap((chapter) =>
    chapter.lesson && hasUsableQuestions(chapter.lesson)
      ? [chapter.lesson]
      : [],
  );
