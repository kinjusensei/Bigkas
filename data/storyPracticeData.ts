/**
 * Compatibility entry point for Story-specific practice data.
 *
 * Add completed chapters under data/story-practice/<dialect>.ts. Regular
 * lesson questions are intentionally not imported here.
 */
export {
  findStoryPracticeLevel,
  storyPracticeChapters,
  storyPracticeLevels,
  findStoryPracticeChapter,
  findStoryPracticeQuestions,
  prepareStoryPracticeQuestions,
  getStoryPracticeRequiredCorrect,
} from "./story-practice";
export type { StoryPracticeChapter } from "./story-practice";
