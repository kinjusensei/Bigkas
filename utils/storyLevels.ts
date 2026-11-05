// Story levels. Each story belongs to one level, using the same levels as
// Lessons (utils/lessonTiers.ts): 0 Easy, 1 Intermediate, 2 Hard.
//
// Rules:
// - Easy stories are always open.
// - Intermediate and Hard open with the same result the Lessons screen
//   uses for that level in that language. It's passed in as
//   isLessonTierOpen, so the rule itself lives only in lessonTiers.ts.
// - A learner who already saved a practice attempt in a story keeps it.
// - Languages in LANGUAGES_WITHOUT_LESSON_PATH have no locks.
//
// Type imports only: the tests run this file directly with node.

import type { TierLanguage } from "./lessonTiers";

export const STORY_TIER_INDEX: Record<string, number> = {
  deshawn: 0,
  "old-house": 1,
  whispers: 2,
};

// Waray lessons 2-20 have no content yet, so its levels can't be earned.
// Remove Waray here once they do, and its stories lock like the others.
export const LANGUAGES_WITHOUT_LESSON_PATH: readonly TierLanguage[] = ["waray"];

export function storyTierIndex(storyId: string): number {
  return STORY_TIER_INDEX[storyId] ?? 0;
}

export function isStoryLevelOpen(
  language: TierLanguage,
  tierIndex: number,
  isLessonTierOpen: (tierIndex: number) => boolean,
): boolean {
  if (tierIndex <= 0) return true;
  if (LANGUAGES_WITHOUT_LESSON_PATH.includes(language)) return true;
  return isLessonTierOpen(tierIndex);
}

export function canOpenStory(
  levelOpen: boolean,
  startedBefore: boolean,
): boolean {
  return levelOpen || startedBefore;
}

// The level the Story page opens on: the highest open one.
export function highestOpenLevel(states: { unlocked: boolean }[]): number {
  for (let index = states.length - 1; index > 0; index -= 1) {
    if (states[index].unlocked) return index;
  }
  return 0;
}
