import type { StoryDialect } from "../storyData";
import type { PracticeLevel } from "../../types/practice";
import type { PretestQuestion } from "../pretestData";

export type StoryPracticeQuestion = PretestQuestion;

export type StoryPracticeChapter = {
  dialect: StoryDialect;
  chapter: number;
  lessonId: string;
  /** Add a PracticeLevel here only after its Story questions are authored. */
  lesson?: PracticeLevel;
  /** Story comprehension questions, kept separate from regular lessons. */
  questions?: StoryPracticeQuestion[];
  requiredCorrect?: number;
  /** New option order on every attempt; the words stay the same. */
  shuffleOptions?: boolean;
};
