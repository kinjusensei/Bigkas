import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, test } from "node:test";

import {
  isTierUnlocked,
  tierLessonIds,
  TIERS,
  type TierLanguage,
} from "./lessonTiers.ts";
import {
  canOpenStory,
  highestOpenLevel,
  isStoryLevelOpen,
  STORY_TIER_INDEX,
  storyTierIndex,
} from "./storyLevels.ts";

const levelName = (storyId: string) => TIERS[storyTierIndex(storyId)].name;

// Open/locked for Easy, Intermediate and Hard, using the real Lessons rule.
function openLevels(language: TierLanguage, completed: string[]) {
  const isComplete = (lessonId: string) => completed.includes(lessonId);
  return [0, 1, 2].map((tierIndex) =>
    isStoryLevelOpen(language, tierIndex, (tier) =>
      isTierUnlocked(language, tier, isComplete),
    ),
  );
}

describe("story levels", () => {
  test("each story has its level", () => {
    assert.equal(levelName("deshawn"), "Easy");
    assert.equal(levelName("old-house"), "Intermediate");
    assert.equal(levelName("whispers"), "Hard");
    assert.equal(Object.keys(STORY_TIER_INDEX).length, 3);
  });

  test("the ids match the story files", () => {
    const deshawn = readFileSync("data/stories/deshawn.ts", "utf8");
    const oldHouse = readFileSync("data/stories/oldHouse.ts", "utf8");
    const stories = readFileSync("data/storyData.ts", "utf8");
    assert.match(deshawn, /DESHAWN_STORY_ID = "deshawn"/);
    assert.match(oldHouse, /OLD_HOUSE_STORY_ID = "old-house"/);
    assert.match(stories, /id: "whispers"/);
  });
});

describe("which levels are open", () => {
  const easy = (language: TierLanguage) => tierLessonIds(language, 0);
  const intermediate = (language: TierLanguage) => tierLessonIds(language, 1);

  for (const language of ["tagalog", "kapampangan"] as const) {
    test(`${language}: Easy incomplete opens Easy only`, () => {
      assert.deepEqual(openLevels(language, []), [true, false, false]);
      assert.deepEqual(openLevels(language, easy(language).slice(0, 9)), [
        true,
        false,
        false,
      ]);
    });

    test(`${language}: Easy complete opens Intermediate`, () => {
      assert.deepEqual(openLevels(language, easy(language)), [
        true,
        true,
        false,
      ]);
    });

    test(`${language}: Easy and Intermediate complete opens Hard`, () => {
      assert.deepEqual(
        openLevels(language, [...easy(language), ...intermediate(language)]),
        [true, true, true],
      );
    });
  }

  test("progress is separate per language", () => {
    assert.deepEqual(openLevels("kapampangan", easy("tagalog")), [
      true,
      false,
      false,
    ]);
  });

  test("Waray has no locks while its lessons have no content", () => {
    assert.deepEqual(openLevels("waray", []), [true, true, true]);
  });
});

describe("opening a story", () => {
  test("a locked level keeps a story closed for a new learner", () => {
    assert.equal(canOpenStory(false, false), false);
  });

  test("a learner who already started the story keeps it", () => {
    assert.equal(canOpenStory(false, true), true);
  });

  test("an open level opens the story", () => {
    assert.equal(canOpenStory(true, false), true);
  });
});

describe("default level", () => {
  const states = (...unlocked: boolean[]) =>
    unlocked.map((value) => ({ unlocked: value }));

  test("picks the highest open level", () => {
    assert.equal(highestOpenLevel(states(true, false, false)), 0);
    assert.equal(highestOpenLevel(states(true, true, false)), 1);
    assert.equal(highestOpenLevel(states(true, true, true)), 2);
  });

  test("a started Hard story counts as open", () => {
    assert.equal(highestOpenLevel(states(true, false, true)), 2);
  });

  test("falls back to Easy while nothing is loaded", () => {
    assert.equal(highestOpenLevel(states(false, false, false)), 0);
  });
});
