import assert from "node:assert/strict";
import { describe, test } from "node:test";

import { kapampanganStoryPracticeChapters } from "./kapampangan.ts";
import { warayStoryPracticeChapters } from "./waray.ts";

// Run with: npm test

for (const [name, chapters] of [
  ["Kapampangan", kapampanganStoryPracticeChapters],
  ["Waray", warayStoryPracticeChapters],
] as const) {
  describe(`${name} Whispers practice`, () => {
    test("every chapter has 10 questions, so no chapter blocks the next", () => {
      assert.equal(chapters.length, 31);
      chapters.forEach((chapter, index) => {
        assert.equal(chapter.chapter, index + 1);
        assert.deepEqual(
          chapter.questions?.map((question) => question.id),
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          `chapter ${chapter.chapter}`,
        );
      });
    });

    test("every choice includes its right answer", () => {
      for (const chapter of chapters) {
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

    test("the mic and camera stay optional", () => {
      for (const chapter of chapters) {
        const [speak, showIt] = [chapter.questions?.[4], chapter.questions?.[9]];
        assert.ok(speak?.type === "speak" && speak.micOptional === true);
        assert.ok(showIt?.type === "expression" && showIt.countsAsCompleted === true);
      }
    });
  });
}
