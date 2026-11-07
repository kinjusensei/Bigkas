import assert from "node:assert/strict";
import { describe, test } from "node:test";

import { tagalogStoryPracticeChapters } from "./tagalog.ts";

// Run with: npm test

describe("Tagalog Whispers practice", () => {
  test("every chapter has 10 questions, so no chapter blocks the next", () => {
    assert.equal(tagalogStoryPracticeChapters.length, 31);
    for (const chapter of tagalogStoryPracticeChapters) {
      assert.equal(chapter.questions?.length, 10, `chapter ${chapter.chapter}`);
      assert.deepEqual(
        chapter.questions.map((question) => question.id),
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        `chapter ${chapter.chapter}`,
      );
    }
  });

  test("every choice includes its right answer", () => {
    for (const chapter of tagalogStoryPracticeChapters) {
      for (const question of chapter.questions ?? []) {
        if (question.type === "card_match" || question.type === "multiple_choice") {
          assert.ok(
            question.options.includes(question.correctMeaning),
            `chapter ${chapter.chapter} question ${question.id}`,
          );
        }
      }
    }
  });

  test("rebuilt chapters keep the mic and camera optional", () => {
    const rebuilt = [3, 4, 5, 6, 8, 10, 17, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const chapters = tagalogStoryPracticeChapters.filter((c) =>
      rebuilt.includes(c.chapter),
    );
    assert.equal(chapters.length, rebuilt.length);
    for (const chapter of chapters) {
      const [speak, showIt] = [chapter.questions?.[4], chapter.questions?.[9]];
      assert.ok(speak?.type === "speak" && speak.micOptional === true);
      assert.ok(showIt?.type === "expression" && showIt.countsAsCompleted === true);
    }
  });
});
