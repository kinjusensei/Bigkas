import assert from "node:assert/strict";
import { describe, test } from "node:test";

import type { CompletionAttempt } from "./lessonCompletion.ts";
import {
  breakWinStreak,
  isLessonUnlocked,
  levelForXp,
  levelProgress,
  mergeCompletion,
  nextWinStreak,
  REQUIRED_ACTIVITIES,
  scoreWithStreakBonus,
  streakBonusPercent,
} from "./lessonCompletion.ts";

// Run with: npm test

const REWARDS = {
  vocabulary: 10,
  conversation: 10,
  match: 5,
  sentences: 10,
  speaking: 10,
  assessment: 15,
};
const ALL = [...REQUIRED_ACTIVITIES];

const attempt = (
  scorePercent: number,
  overrides: Partial<CompletionAttempt> = {},
): CompletionAttempt => ({
  scorePercent,
  passPercent: 70,
  activitiesDone: ALL,
  xpEligible: [...ALL, "assessment"],
  rewards: REWARDS,
  nowIso: "2026-11-02T09:00:00.000Z",
  ...overrides,
});

describe("mergeCompletion", () => {
  test("first completion awards all 60 XP and completes the lesson", () => {
    const result = mergeCompletion(null, attempt(80));
    assert.equal(result.xpToAdd, 60);
    assert.equal(result.passedThisAttempt, true);
    assert.equal(result.lessonComplete, true);
    assert.equal(result.justCompleted, true);
    assert.equal(result.record.bestScore, 80);
    assert.equal(result.record.completedAt, "2026-11-02T09:00:00.000Z");
  });

  test("retry with a higher score keeps the best score and adds no XP", () => {
    const first = mergeCompletion(null, attempt(80));
    const retry = mergeCompletion(
      first.record,
      attempt(100, { nowIso: "2026-11-03T09:00:00.000Z" }),
    );
    assert.equal(retry.xpToAdd, 0);
    assert.equal(retry.record.bestScore, 100);
    assert.equal(retry.justCompleted, false);
    assert.equal(retry.record.completedAt, "2026-11-02T09:00:00.000Z");
  });

  test("retry with the same score adds no XP", () => {
    const first = mergeCompletion(null, attempt(80));
    const retry = mergeCompletion(first.record, attempt(80));
    assert.equal(retry.xpToAdd, 0);
    assert.deepEqual(retry.newlyAwarded, []);
    assert.equal(retry.record.bestScore, 80);
  });

  test("a lower retry score never lowers the best score or the pass", () => {
    const first = mergeCompletion(null, attempt(80));
    const retry = mergeCompletion(first.record, attempt(40));
    assert.equal(retry.record.bestScore, 80);
    assert.equal(retry.record.passed, true);
    assert.equal(retry.lessonComplete, true);
  });

  test("failing below 70% saves activity XP and the score but doesn't complete", () => {
    const result = mergeCompletion(null, attempt(60));
    assert.equal(result.passedThisAttempt, false);
    assert.equal(result.xpToAdd, 45); // everything except the assessment
    assert.equal(result.record.xpAwarded.includes("assessment"), false);
    assert.equal(result.record.bestScore, 60);
    assert.equal(result.lessonComplete, false);
    assert.equal(result.record.completedAt, null);
  });

  test("passing after a fail adds only the assessment XP", () => {
    const failed = mergeCompletion(null, attempt(60));
    const passed = mergeCompletion(failed.record, attempt(80));
    assert.equal(passed.xpToAdd, 15);
    assert.equal(passed.justCompleted, true);
  });

  test("missing a required activity keeps the lesson incomplete", () => {
    const result = mergeCompletion(
      null,
      attempt(90, {
        activitiesDone: ALL.filter((activity) => activity !== "speaking"),
        xpEligible: ["vocabulary", "assessment"],
      }),
    );
    assert.equal(result.record.passed, true);
    assert.equal(result.lessonComplete, false);
    assert.equal(result.xpToAdd, 25);
  });
});

describe("isLessonUnlocked", () => {
  test("lesson 1 is open, the next opens after completion, nothing past the end", () => {
    const complete = new Set([0]);
    const isComplete = (index: number) => complete.has(index);
    assert.equal(isLessonUnlocked(0, 3, isComplete), true);
    assert.equal(isLessonUnlocked(1, 3, isComplete), true);
    assert.equal(isLessonUnlocked(2, 3, isComplete), false);
    assert.equal(isLessonUnlocked(3, 3, isComplete), false);
  });
});

describe("level", () => {
  test("100 XP per level", () => {
    assert.equal(levelForXp(0), 1);
    assert.equal(levelForXp(99), 1);
    assert.equal(levelForXp(100), 2);
    assert.deepEqual(levelProgress(160), {
      level: 2,
      intoLevel: 60,
      perLevel: 100,
      fraction: 0.6,
    });
  });

  test("lesson XP can level a learner up", () => {
    assert.equal(levelForXp(50), 1);
    assert.equal(levelForXp(50 + 60), 2);
  });
});

describe("nextWinStreak", () => {
  test("first win starts at 1", () => {
    assert.deepEqual(nextWinStreak(null, true, "2026-11-02"), {
      current: 1,
      longest: 1,
      lastDate: "2026-11-02",
    });
  });

  test("every win adds 1, even on the same day", () => {
    let state = nextWinStreak(null, true, "2026-11-02");
    state = nextWinStreak(state, true, "2026-11-02");
    state = nextWinStreak(state, true, "2026-11-05");
    assert.equal(state.current, 3);
    assert.equal(state.longest, 3);
  });

  test("a loss resets to 0 and keeps the longest and last win day", () => {
    let state = nextWinStreak(null, true, "2026-11-01");
    state = nextWinStreak(state, true, "2026-11-02");
    state = nextWinStreak(state, false, "2026-11-03");
    assert.deepEqual(state, { current: 0, longest: 2, lastDate: "2026-11-02" });
    state = nextWinStreak(state, true, "2026-11-03");
    assert.equal(state.current, 1);
  });

  test("surrendering breaks the streak to 0 and keeps the longest", () => {
    let state = nextWinStreak(null, true, "2026-11-01");
    state = nextWinStreak(state, true, "2026-11-02");
    state = breakWinStreak(state, "2026-11-03");
    assert.deepEqual(state, { current: 0, longest: 2, lastDate: "2026-11-02" });
  });
});

describe("streak bonus", () => {
  test("adds 10% per win: 3 wins turn 80 into 104", () => {
    assert.equal(scoreWithStreakBonus(80, 3), 104);
    assert.equal(streakBonusPercent(3), 30);
  });

  test("no streak, no bonus", () => {
    assert.equal(scoreWithStreakBonus(80, 0), 80);
    assert.equal(streakBonusPercent(0), 0);
  });

  test("rounds to whole points", () => {
    assert.equal(scoreWithStreakBonus(75, 1), 83); // 82.5
  });
});
