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
  isStoryComingSoon,
  isStoryLevelOpen,
  STORY_TIER_INDEX,
  storyLevelContent,
  storyTierIndex,
} from "./storyLevels.ts";
import { OLD_HOUSE_WARAY } from "../data/stories/oldHouseWaray.ts";
import { OLD_HOUSE_DIALECTS } from "../data/story-practice/oldHouse.ts";

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

describe("a story with no Waray text yet", () => {
  const easy = (language: TierLanguage) => tierLessonIds(language, 0);
  const intermediate = (language: TierLanguage) => tierLessonIds(language, 1);

  test("Old House is listed in Waray only once its text is imported", () => {
    assert.equal(OLD_HOUSE_DIALECTS.includes("waray"), OLD_HOUSE_WARAY !== null);
    assert.equal(
      isStoryComingSoon(OLD_HOUSE_DIALECTS, "waray"),
      OLD_HOUSE_WARAY === null,
    );
    assert.equal(isStoryComingSoon(OLD_HOUSE_DIALECTS, "tagalog"), false);
    assert.equal(isStoryComingSoon(OLD_HOUSE_DIALECTS, "kapampangan"), false);
  });

  test("a story without a language list is never coming soon", () => {
    assert.equal(isStoryComingSoon(undefined, "waray"), false);
  });

  test("the level shows coming soon, not an empty list", () => {
    assert.equal(storyLevelContent(0, 1), "coming-soon");
    assert.equal(storyLevelContent(0, 0), "empty");
    assert.equal(storyLevelContent(1, 1), "stories");
    assert.equal(storyLevelContent(1, 0), "stories");
  });

  test("Waray Hard is open with the Intermediate story unread", () => {
    assert.equal(openLevels("waray", [])[2], true);
  });

  test("the Story page can still open on Waray Hard", () => {
    const states = openLevels("waray", []).map((unlocked) => ({ unlocked }));
    assert.equal(highestOpenLevel(states), 2);
  });

  // For when Waray leaves LANGUAGES_WITHOUT_LESSON_PATH: the lesson rule it
  // moves to asks only about lessons, so no story can hold Hard back.
  test("the level rule asks about lessons, never story chapters", () => {
    const asked: string[] = [];
    const passed = [...easy("waray"), ...intermediate("waray")];
    const open = isTierUnlocked("waray", 2, (lessonId) => {
      asked.push(lessonId);
      return passed.includes(lessonId);
    });
    assert.equal(open, true);
    assert.ok(asked.length > 0);
    for (const lessonId of asked) assert.match(lessonId, /^waray_\d+$/);
  });

  test("the server rule matches: Waray isn't gated, Hard checks lessons only", () => {
    const sql = readFileSync("sql/story_levels.sql", "utf8");
    assert.match(sql, /if v_tier = 0 or v_language = 'waray' then\s+return new;/);
    assert.match(
      sql,
      /story_lesson_passed_by\(new\.user_id, v_language \|\| '_' \|\| n\)/,
    );
    assert.equal(sql.match(/story_lesson_passed_by\(new\./g)?.length, 1);
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
