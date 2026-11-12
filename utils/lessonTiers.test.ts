import assert from "node:assert/strict";
import { describe, test } from "node:test";

import {
  currentTierIndex,
  isTieredLessonUnlocked,
  isTierUnlocked,
  parseLessonId,
  tierLessonIds,
  retryRulesForLessonId,
  retryRulesForLessonNumber,
} from "./lessonTiers.ts";

// Run with: npm test

function progress(done: string[]) {
  const set = new Set(done);
  return (lessonId: string) => set.has(lessonId);
}

const range = (language: string, from: number, to: number) =>
  Array.from({ length: to - from + 1 }, (_, i) => `${language}_${from + i}`);

describe("lesson tiers", () => {
  test("parses board lesson ids only", () => {
    assert.deepEqual(parseLessonId("waray_12"), {
      language: "waray",
      number: 12,
    });
    assert.equal(parseLessonId("story_tagalog_3"), null);
    assert.equal(parseLessonId("tagalog_0"), null);
  });

  test("(a) fewer than 10 Easy done: only Easy is open", () => {
    const done = progress(range("tagalog", 1, 3));
    assert.equal(isTierUnlocked("tagalog", 0, done), true);
    assert.equal(isTierUnlocked("tagalog", 1, done), false);
    assert.equal(isTierUnlocked("tagalog", 2, done), false);
    assert.equal(isTieredLessonUnlocked("tagalog_4", done), true);
    assert.equal(isTieredLessonUnlocked("tagalog_5", done), false);
    assert.equal(isTieredLessonUnlocked("tagalog_11", done), false);
    assert.equal(currentTierIndex("tagalog", done), 0);
  });

  test("(b) all 10 Easy done: Intermediate opens, Hard stays locked", () => {
    const done = progress(range("tagalog", 1, 10));
    assert.equal(isTierUnlocked("tagalog", 1, done), true);
    assert.equal(isTierUnlocked("tagalog", 2, done), false);
    assert.equal(isTieredLessonUnlocked("tagalog_11", done), true);
    assert.equal(isTieredLessonUnlocked("tagalog_12", done), false);
    assert.equal(isTieredLessonUnlocked("tagalog_21", done), false);
    assert.equal(currentTierIndex("tagalog", done), 1);
  });

  test("(c) Easy and Intermediate done: Hard opens", () => {
    const done = progress(range("tagalog", 1, 20));
    assert.equal(isTierUnlocked("tagalog", 2, done), true);
    assert.equal(isTieredLessonUnlocked("tagalog_21", done), true);
    assert.equal(currentTierIndex("tagalog", done), 2);
  });

  test("each language is tracked separately", () => {
    const done = progress(range("tagalog", 1, 20));
    for (const language of ["kapampangan", "waray"] as const) {
      assert.equal(isTierUnlocked(language, 1, done), false);
      assert.equal(isTieredLessonUnlocked(`${language}_1`, done), true);
      assert.equal(isTieredLessonUnlocked(`${language}_11`, done), false);
      assert.equal(currentTierIndex(language, done), 0);
    }
  });

  test("a gap in Easy keeps Intermediate locked", () => {
    // e.g. lessons opened in review mode out of order
    const done = progress([
      ...range("tagalog", 1, 9),
      ...range("tagalog", 11, 12),
    ]);
    assert.equal(isTierUnlocked("tagalog", 1, done), false);
    assert.equal(isTieredLessonUnlocked("tagalog_12", done), false);
  });

  test("tierLessonIds lists the 10 lessons of a level", () => {
    assert.deepEqual(tierLessonIds("waray", 1), range("waray", 11, 20));
  });
});

describe("retry rules", () => {
  const easy = { inLessonRetry: true, onFailure: "replay" };
  const intermediate = { inLessonRetry: false, onFailure: "replay" };
  const hard = { inLessonRetry: false, onFailure: "restart-lesson" };

  test("Easy (1–10): Try again in the lesson, replay after a failure", () => {
    assert.deepEqual(retryRulesForLessonNumber(1), easy);
    assert.deepEqual(retryRulesForLessonNumber(10), easy);
  });

  test("Intermediate (11–20): no Try again in the lesson, replay after a failure", () => {
    assert.deepEqual(retryRulesForLessonNumber(11), intermediate);
    assert.deepEqual(retryRulesForLessonNumber(20), intermediate);
  });

  test("Hard (21–30): no Try again, restart the lesson after a failure", () => {
    assert.deepEqual(retryRulesForLessonNumber(21), hard);
    assert.deepEqual(retryRulesForLessonNumber(30), hard);
  });

  test("by lesson id, in every language", () => {
    assert.deepEqual(retryRulesForLessonId("tagalog_3"), easy);
    assert.deepEqual(retryRulesForLessonId("kapampangan_15"), intermediate);
    assert.deepEqual(retryRulesForLessonId("waray_23"), hard);
  });

  test("unknown ids use Easy's rules", () => {
    assert.deepEqual(retryRulesForLessonId("story_1"), easy);
    assert.deepEqual(retryRulesForLessonId(undefined), easy);
  });
});
