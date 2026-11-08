import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, test } from "node:test";

import { nextDailyStreak, streakToShow } from "./dailyStreak.ts";

const at = (day: string, time = "10:00") => new Date(`${day}T${time}:00`);
const row = (current: number, longest: number, lastDay: string | null) => ({
  current_streak: current,
  longest_streak: longest,
  last_activity: lastDay ? at(lastDay).toISOString() : null,
});

describe("day streak", () => {
  test("the first lesson or story ever starts it at 1", () => {
    assert.deepEqual(nextDailyStreak(null, at("2026-11-08")), {
      current: 1,
      longest: 1,
      changed: true,
    });
  });

  test("playing the day after adds 1", () => {
    assert.deepEqual(
      nextDailyStreak(row(3, 5, "2026-11-07"), at("2026-11-08")),
      { current: 4, longest: 5, changed: true },
    );
  });

  test("a second play on the same day changes nothing", () => {
    const result = nextDailyStreak(row(4, 5, "2026-11-08"), at("2026-11-08", "21:00"));
    assert.equal(result.changed, false);
    assert.equal(result.current, 4);
  });

  test("missing a day starts again at 1 and keeps the longest", () => {
    assert.deepEqual(
      nextDailyStreak(row(6, 6, "2026-11-05"), at("2026-11-08")),
      { current: 1, longest: 6, changed: true },
    );
  });

  test("a new longest streak is saved", () => {
    assert.equal(nextDailyStreak(row(5, 5, "2026-11-07"), at("2026-11-08")).longest, 6);
  });

  test("the shown streak stays until a whole day is missed", () => {
    assert.equal(streakToShow(row(4, 4, "2026-11-08"), at("2026-11-08")), 4);
    assert.equal(streakToShow(row(4, 4, "2026-11-07"), at("2026-11-08")), 4);
    assert.equal(streakToShow(row(4, 4, "2026-11-06"), at("2026-11-08")), 0);
    assert.equal(streakToShow(null, at("2026-11-08")), 0);
  });

  test("opening the dashboard only reads the streak", () => {
    const dashboard = readFileSync("app/dashboard.tsx", "utf8");
    assert.doesNotMatch(dashboard, /recordDailyActivity|updateDailyStreak/);
    assert.match(dashboard, /getDailyStreak\(/);
  });

  test("finishing a lesson or a story records the day", () => {
    for (const file of [
      "services/practiceService.ts",
      "services/lessonCompletionService.ts",
    ]) {
      assert.match(readFileSync(file, "utf8"), /recordDailyActivity\(/, file);
    }
  });
});
