import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { describe, test } from "node:test";

import { englishSentences } from "../data/stories/oldHouseText.ts";
import { oldHousePractice } from "../data/story-practice/oldHouse.ts";
import {
  checkFilledFile,
  decodeFile,
  parseFilledFile,
  renderOutput,
  renderTemplate,
} from "./import-old-house-waray.mjs";

// Made-up words, not Waray: these tests are about the file format.
const fakeWord = (chapter, index) => `zz${chapter}w${index}`;

function fakeSentence(chapter, sentence) {
  const words = oldHousePractice[chapter].words.flatMap((word, index) =>
    word.sentence === sentence ? [fakeWord(chapter, index)] : [],
  );
  return ["Fake", `c${chapter}s${sentence}`, ...words].join(" ");
}

function filledFile() {
  return renderTemplate()
    .split("\n")
    .map((line) => {
      if (line === "TITLE WAR: ") return "TITLE WAR: Fake Title";
      if (line === "CHAPTER WAR: ") return "CHAPTER WAR: Fakechapter";
      const word = line.match(/^W(\d+)\.(\d+) WAR: $/);
      if (word) return `${line}${fakeWord(+word[1] - 1, +word[2] - 1)}`;
      const sentence = line.match(/^(\d+)\.(\d+) WAR: $/);
      if (sentence) return `${line}${fakeSentence(+sentence[1] - 1, +sentence[2] - 1)}`;
      return line;
    })
    .join("\n");
}

const errorsFor = (text) => checkFilledFile(parseFilledFile(text)).errors;
const replaceLine = (text, id, value) => {
  const prefix = `${id} WAR: `;
  const line = text.split("\n").find((item) => item.startsWith(prefix));
  return text.replace(line, `${prefix}${value}`);
};

describe("Waray template", () => {
  test("lists every sentence and practice word", () => {
    const lines = renderTemplate().split("\n");
    const count = (pattern) => lines.filter((line) => pattern.test(line)).length;
    assert.equal(count(/^\d+\.\d+ WAR: $/), englishSentences.flat().length);
    assert.equal(count(/^W\d+\.\d+ WAR: $/), 24 * 9);
    assert.equal(count(/^=== CHAPTER/), 24);
  });

  test("the copy in docs is up to date", () => {
    const saved = fs.readFileSync("docs/old-house-waray-template.txt", "utf8");
    assert.equal(saved.replace(/\r\n/g, "\n"), renderTemplate());
  });

  test("an untouched template is rejected", () => {
    const errors = errorsFor(renderTemplate());
    assert.ok(errors.includes("TITLE WAR is blank"));
    assert.ok(errors.includes("1.1: blank"));
  });
});

describe("Waray import", () => {
  test("a complete file passes and pairs up with the English", () => {
    const { errors, text } = checkFilledFile(parseFilledFile(filledFile()));
    assert.deepEqual(errors, []);
    assert.equal(text.title, "Fake Title");
    assert.equal(text.chapterWord, "Fakechapter");
    text.sentences.forEach((chapter, index) =>
      assert.equal(chapter.length, englishSentences[index].length),
    );
    assert.equal(text.words.flat().length, 24 * 9);
  });

  test("the written file loads back with the same text", async () => {
    const { text } = checkFilledFile(parseFilledFile(filledFile()));
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "bigkas-waray-"));
    const file = path.join(dir, "oldHouseWaray.ts");
    fs.writeFileSync(file, renderOutput(text));
    const { OLD_HOUSE_WARAY } = await import(`file://${file.replace(/\\/g, "/")}`);
    assert.deepEqual(OLD_HOUSE_WARAY, text);
    fs.rmSync(dir, { recursive: true });
  });

  test("the English story passed off as Waray is rejected", () => {
    let text = filledFile();
    englishSentences.forEach((chapter, c) =>
      chapter.forEach((sentence, s) => {
        text = replaceLine(text, `${c + 1}.${s + 1}`, sentence);
      }),
    );
    const errors = errorsFor(text);
    assert.ok(errors.includes("1.1: still the English sentence"));
    assert.equal(
      errors.filter((error) => error.endsWith("still the English sentence")).length,
      englishSentences.flat().length,
    );
  });

  test("names a blank or missing sentence", () => {
    assert.ok(errorsFor(replaceLine(filledFile(), "3.2", "")).includes("3.2: blank"));
    const removed = filledFile()
      .split("\n")
      .filter((line) => !line.startsWith("3.2 WAR:"))
      .join("\n");
    assert.ok(errorsFor(removed).includes("3.2: missing"));
  });

  test("rejects a sentence that isn't in the English", () => {
    const text = `${filledFile()}\n1.99 WAR: Fake`;
    assert.ok(errorsFor(text).includes("1.99: no such sentence in the English"));
  });

  test("rejects a sentence listed twice", () => {
    const text = `${filledFile()}\n1.1 WAR: Fake`;
    assert.ok(errorsFor(text).some((error) => error.endsWith("1.1 appears twice")));
  });

  test("rejects a sentence that wrapped onto a second line", () => {
    const text = filledFile().replace("1.1 WAR: Fake", "1.1 WAR: Fake\nwrapped words");
    assert.ok(errorsFor(text).some((error) => error.includes("not understood")));
  });

  test("rejects a word that isn't in its sentence", () => {
    const errors = errorsFor(replaceLine(filledFile(), "W1.1", "elsewhere"));
    assert.ok(errors.some((error) => error.startsWith('W1.1: "elsewhere" is not in sentence 1.6')));
  });

  test("rejects a word used twice in a chapter", () => {
    const errors = errorsFor(replaceLine(filledFile(), "W1.2", fakeWord(0, 0)));
    assert.ok(errors.some((error) => error.includes("is used twice in chapter 1")));
  });

  test("rejects a chapter pasted over another", () => {
    let text = filledFile();
    englishSentences[0].forEach((_, s) => {
      if (englishSentences[1].length > s) {
        text = replaceLine(text, `2.${s + 1}`, fakeSentence(0, s));
      }
    });
    // Chapters 1 and 2 both have 16 sentences.
    assert.ok(errorsFor(text).includes("chapter 2: same text as chapter 1"));
  });

  test("reads Notepad's UTF-16 and UTF-8 with a byte order mark", () => {
    assert.equal(decodeFile(Buffer.from("﻿ñ", "utf16le")), "ñ");
    assert.equal(decodeFile(Buffer.from("﻿ñ", "utf8")), "ñ");
  });

  test("tidies stray spaces and no-break spaces", () => {
    const parsed = parseFilledFile("1.1 WAR:   Fake  text  ");
    assert.equal(parsed.sentences.get("1.1"), "Fake text");
  });
});
