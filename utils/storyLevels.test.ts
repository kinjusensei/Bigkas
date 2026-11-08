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
  canOpenStoryInLevel,
  highestOpenLevel,
  isStoryComingSoon,
  isStoryLevelLocked,
  isStoryLevelOpen,
  LOCKED_STORY_LEVELS,
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

  for (const language of ["tagalog", "kapampangan", "waray"] as const) {
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

    // Waray Hard is switched off; see "the locked story levels switch".
    if (language === "waray") continue;
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

  test("Waray Hard stays switched off even with every lesson passed", () => {
    assert.deepEqual(
      openLevels("waray", [...easy("waray"), ...intermediate("waray")]),
      [true, true, false],
    );
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

  test("without the switch, Waray Hard opens from lessons alone", () => {
    assert.equal(isStoryLevelOpen("waray", 2, () => true, []), true);
    assert.equal(isStoryLevelOpen("waray", 2, () => false, []), false);
  });

  // The lesson rule asks only about lessons, so no story can hold Hard back.
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

  test("the server rule matches: Waray is gated too, Hard checks lessons only", () => {
    const sql = readFileSync("sql/story_levels.sql", "utf8");
    assert.match(sql, /if v_tier = 0 then\s+return new;/);
    assert.doesNotMatch(sql, /v_language = 'waray'/);
    assert.match(
      sql,
      /story_lesson_passed_by\(new\.user_id, v_language \|\| '_' \|\| n\)/,
    );
    assert.equal(sql.match(/story_lesson_passed_by\(new\./g)?.length, 1);
  });
});

describe("the locked story levels switch", () => {
  const everythingPassed = () => true;

  test("only Waray Hard is switched off", () => {
    assert.deepEqual(LOCKED_STORY_LEVELS, [{ language: "waray", tierIndex: 2 }]);
  });

  test("it stays closed even with every lesson level open", () => {
    // The same result review mode gives in a development build.
    assert.equal(isStoryLevelOpen("waray", 2, everythingPassed), false);
  });

  test("review mode can't get around it", () => {
    const hook = readFileSync("hooks/useStoryProgress.ts", "utf8");
    assert.doesNotMatch(hook, /REVIEW_MODE \|\|\s+isStoryLevelOpenByRule/);
    assert.match(hook, /canOpenStoryInLevel\(/);
  });

  test("a learner who already started it can't open it", () => {
    assert.equal(canOpenStoryInLevel("waray", 2, false, true), false);
    assert.equal(canOpenStoryInLevel("waray", 2, true, true), false);
  });

  test("a learner who started another locked level keeps it", () => {
    assert.equal(canOpenStoryInLevel("tagalog", 2, false, true), true);
  });

  test("Waray Easy and Intermediate stories still open", () => {
    assert.equal(canOpenStoryInLevel("waray", 0, true, false), true);
    assert.equal(canOpenStoryInLevel("waray", 1, true, false), true);
  });

  test("Tagalog and Kapampangan stories aren't affected", () => {
    for (const language of ["tagalog", "kapampangan"] as const) {
      for (const tier of [0, 1, 2]) {
        assert.equal(isStoryLevelLocked(language, tier), false);
      }
      assert.equal(isStoryLevelOpen(language, 2, everythingPassed), true);
    }
  });

  test("Waray Hard lessons aren't affected", () => {
    assert.equal(isTierUnlocked("waray", 2, everythingPassed), true);
  });

  test("the Story page opens on the highest level still open", () => {
    const passed = [...tierLessonIds("waray", 0), ...tierLessonIds("waray", 1)];
    const states = openLevels("waray", passed).map((unlocked) => ({ unlocked }));
    assert.equal(highestOpenLevel(states), 1);
  });

  test("removing the line opens the level again", () => {
    assert.equal(isStoryLevelOpen("waray", 2, everythingPassed, []), true);
    assert.equal(canOpenStoryInLevel("waray", 2, true, false, []), true);
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
