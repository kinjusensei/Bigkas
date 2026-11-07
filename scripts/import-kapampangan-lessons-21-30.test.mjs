import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { describe, test } from "node:test";
import { fileURLToPath } from "node:url";

import { parseDraft } from "./import-kapampangan-lessons-21-30.mjs";

// Run with: npm test

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const lessons = parseDraft(read("docs/Bigkas-missing-questionnaires-draft.md"));

describe("Kapampangan Lessons 21–30 draft", () => {
  test("reads all ten lessons with their answer keys", () => {
    assert.deepEqual(
      lessons.map((lesson) => lesson.number),
      [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    );
    for (const lesson of lessons) {
      assert.equal(lesson.vocab.length, 4);
      for (const item of [...lesson.choices, ...lesson.assessment]) {
        assert.match(item.answer, /^[A-D]$/, `lesson ${lesson.number}: ${item.prompt}`);
        assert.equal(item.options.length, 4);
      }
    }
    const counts = Object.fromEntries(lessons.map((l) => [l.number, l.assessment.length]));
    assert.deepEqual(counts, { 21: 5, 22: 5, 23: 5, 24: 5, 25: 5, 26: 0, 27: 5, 28: 5, 29: 0, 30: 25 });
  });

  test("the choice answers are the word table's", () => {
    for (const lesson of lessons) {
      const [mc6, mc8] = lesson.choices;
      const meaningOf = Object.fromEntries(lesson.vocab);
      const word = mc6.prompt.match(/"(.+)"/)[1];
      assert.equal(mc6.options["ABCD".indexOf(mc6.answer)], meaningOf[word]);
      const meaning = mc8.prompt.match(/"(.+)"/)[1];
      assert.equal(meaningOf[mc8.options["ABCD".indexOf(mc8.answer)]], meaning);
    }
  });

  test("each lesson is generated, marked as a draft and on the lesson board", () => {
    const registry = read("data/lessons/structuredLessons.ts");
    const practice = read("data/practiceData.ts");
    for (const { number } of lessons) {
      const source = read(`data/lessons/kapampangan-lesson${number}.ts`);
      assert.match(source, /draftForReview: true/);
      assert.match(source, new RegExp(`lessonId: "kapampangan_${number}"`));
      assert.match(registry, new RegExp(`\\[kapampanganLesson${number}\\.lessonId\\]`));
      assert.match(practice, new RegExp(`lessonId: "kapampangan_${number}"`));
    }
  });
});
