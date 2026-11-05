import { StructuredLesson } from "../../types/structuredLesson";
import { kapampanganLesson1 } from "./kapampangan-lesson1";
import { kapampanganLesson2 } from "./kapampangan-lesson2";
import { kapampanganLesson3 } from "./kapampangan-lesson3";
import { kapampanganLesson4 } from "./kapampangan-lesson4";
import { kapampanganLesson5 } from "./kapampangan-lesson5";
import { kapampanganLesson6 } from "./kapampangan-lesson6";
import { kapampanganLesson7 } from "./kapampangan-lesson7";
import { kapampanganLesson8 } from "./kapampangan-lesson8";
import { kapampanganLesson9 } from "./kapampangan-lesson9";
import { kapampanganLesson10 } from "./kapampangan-lesson10";
import { tagalogLesson1 } from "./tagalog-lesson1";
import { tagalogLesson2 } from "./tagalog-lesson2";
import { tagalogLesson3 } from "./tagalog-lesson3";
import { tagalogLesson4 } from "./tagalog-lesson4";
import { tagalogLesson5 } from "./tagalog-lesson5";
import { tagalogLesson6 } from "./tagalog-lesson6";
import { tagalogLesson7 } from "./tagalog-lesson7";
import { tagalogLesson8 } from "./tagalog-lesson8";
import { tagalogLesson9 } from "./tagalog-lesson9";
import { tagalogLesson10 } from "./tagalog-lesson10";
import { tagalogLesson11 } from "./tagalog-lesson11";
import { tagalogLesson12 } from "./tagalog-lesson12";
import { tagalogLesson13 } from "./tagalog-lesson13";
import { tagalogLesson14 } from "./tagalog-lesson14";
import { tagalogLesson15 } from "./tagalog-lesson15";
import { tagalogLesson16 } from "./tagalog-lesson16";
import { tagalogLesson17 } from "./tagalog-lesson17";
import { tagalogLesson18 } from "./tagalog-lesson18";
import { tagalogLesson19 } from "./tagalog-lesson19";
import { tagalogLesson20 } from "./tagalog-lesson20";

// Lessons with the step-by-step flow (components/lesson). Lessons not
// listed here keep the phrase reading screen in app/lesson/[lessonId].tsx.
export const structuredLessonsById: Record<string, StructuredLesson> = {
  [tagalogLesson1.lessonId]: tagalogLesson1,
  [tagalogLesson2.lessonId]: tagalogLesson2,
  [tagalogLesson3.lessonId]: tagalogLesson3,
  [tagalogLesson4.lessonId]: tagalogLesson4,
  [tagalogLesson5.lessonId]: tagalogLesson5,
  [tagalogLesson6.lessonId]: tagalogLesson6,
  [tagalogLesson7.lessonId]: tagalogLesson7,
  [tagalogLesson8.lessonId]: tagalogLesson8,
  [tagalogLesson9.lessonId]: tagalogLesson9,
  [tagalogLesson10.lessonId]: tagalogLesson10,
  [kapampanganLesson1.lessonId]: kapampanganLesson1,
  [kapampanganLesson2.lessonId]: kapampanganLesson2,
  [kapampanganLesson3.lessonId]: kapampanganLesson3,
  [kapampanganLesson4.lessonId]: kapampanganLesson4,
  [kapampanganLesson5.lessonId]: kapampanganLesson5,
  [kapampanganLesson6.lessonId]: kapampanganLesson6,
  [kapampanganLesson7.lessonId]: kapampanganLesson7,
  [kapampanganLesson8.lessonId]: kapampanganLesson8,
  [kapampanganLesson9.lessonId]: kapampanganLesson9,
  [kapampanganLesson10.lessonId]: kapampanganLesson10,
  [tagalogLesson11.lessonId]: tagalogLesson11,
  [tagalogLesson12.lessonId]: tagalogLesson12,
  [tagalogLesson13.lessonId]: tagalogLesson13,
  [tagalogLesson14.lessonId]: tagalogLesson14,
  [tagalogLesson15.lessonId]: tagalogLesson15,
  [tagalogLesson16.lessonId]: tagalogLesson16,
  [tagalogLesson17.lessonId]: tagalogLesson17,
  [tagalogLesson18.lessonId]: tagalogLesson18,
  [tagalogLesson19.lessonId]: tagalogLesson19,
  [tagalogLesson20.lessonId]: tagalogLesson20,
};

// Activities a learner must have done (besides passing the assessment) to
// complete the lesson — only the ones this lesson has content for.
export function requiredActivitiesFor(lesson: StructuredLesson): string[] {
  const required: string[] = [];
  if (lesson.vocabulary?.length || lesson.expressionGroups?.length) {
    required.push("vocabulary");
  }
  if (lesson.languageNotes?.length) required.push("notes");
  if (lesson.conversation?.lines.length || lesson.conversations?.length) {
    required.push("conversation");
  }
  if (lesson.matchActivity?.pairs.length) required.push("match");
  if (
    lesson.choiceActivity?.questions.length ||
    lesson.fillInBlanks?.items.length ||
    lesson.arrangeWords?.items.length
  ) {
    required.push("sentences");
  }
  if (lesson.speaking?.phrases.length) required.push("speaking");
  return required;
}
