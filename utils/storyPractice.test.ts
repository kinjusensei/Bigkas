import assert from "node:assert/strict";
import { describe, test } from "node:test";

import {
  deshawnChapters,
  deshawnDialectText,
  deshawnTerms,
} from "../data/stories/deshawn.ts";
import { deshawnStoryPracticeChapters } from "../data/story-practice/deshawn.ts";
import {
  deshawnComprehensionChapters,
  deshawnQuestions,
} from "../data/story-practice/deshawnComprehension.ts";
import { oldHouseStoryPracticeChapters } from "../data/story-practice/oldHouse.ts";
import {
  COMPREHENSION_LABEL,
  parsePracticeByType,
  percentOf,
  PRACTICE_TYPE_LABELS,
  practiceTypeLabel,
  storyChoiceInstruction,
  storyFillInstruction,
  storyFillPlaceholder,
  summarizePracticeByType,
} from "./storyPractice.ts";

describe("Story for Deshawn in each language", () => {
  const dialects = ["tagalog", "kapampangan", "waray"] as const;
  const chaptersOf = (dialect: (typeof dialects)[number]) =>
    deshawnComprehensionChapters.filter((item) => item.dialect === dialect);

  test("every language has all 15 chapters of story text", () => {
    for (const dialect of dialects) {
      for (let number = 1; number <= 15; number++) {
        const chapter = deshawnDialectText[dialect][number];
        assert.ok(chapter?.title, `${dialect} ${number} title`);
        assert.equal(chapter.sentences.length, 5, `${dialect} ${number}`);
        assert.equal(
          chapter.sentences.filter((sentence) => !sentence.trim()).length,
          0,
        );
      }
    }
  });

  test("every tappable word is a whole word in its sentence", () => {
    const isWhole = (text: string, word: string) => {
      const start = text.indexOf(word);
      if (start < 0) return false;
      const letter = /[\p{L}\p{N}]/u;
      return (
        !letter.test(text[start - 1] ?? " ") &&
        !letter.test(text[start + word.length] ?? " ")
      );
    };
    for (const dialect of dialects) {
      for (let number = 1; number <= 15; number++) {
        const terms = deshawnTerms[dialect][number] ?? [];
        assert.equal(terms.length, 9, `${dialect} ${number}`);
        for (const term of terms) {
          const sentence =
            deshawnDialectText[dialect][number].sentences[term.paragraphIndex];
          assert.ok(
            isWhole(sentence, term.dialectMatch ?? ""),
            `${dialect} ${number}: ${term.dialectMatch} in "${sentence}"`,
          );
          const english = deshawnChapters[number - 1].body[term.paragraphIndex];
          assert.ok(
            isWhole(english, term.match),
            `${number}: ${term.match} in "${english}"`,
          );
        }
      }
    }
  });

  test("only the reviewed Kapampangan text skips review", () => {
    assert.equal(deshawnDialectText.kapampangan[1].needsReview, false);
    assert.equal(deshawnDialectText.tagalog[1].needsReview, true);
    assert.equal(deshawnDialectText.waray[1].needsReview, true);
  });

  test("kept comprehension questions have 4 different answers", () => {
    for (const chapter of deshawnComprehensionChapters) {
      assert.equal(chapter.questions?.length, 3);
      for (const question of chapter.questions ?? []) {
        if (question.type !== "multiple_choice") continue;
        assert.equal(question.options.length, 4);
        assert.equal(new Set(question.options).size, 4, question.word);
        assert.ok(question.options.includes(question.correctMeaning));
      }
    }
  });

  test("kept comprehension answers are in the page's language", () => {
    const english = new Set(
      deshawnQuestions.flat().flatMap((question) =>
        question.answers.map((row) => row[0]),
      ),
    );
    // Names and loanwords are spelled the same in every language.
    const same = new Set(["Stella", "Lily", "Luna", "Rosa", "Asul"]);
    for (const dialect of dialects) {
      for (const chapter of chaptersOf(dialect)) {
        for (const question of chapter.questions ?? []) {
          if (question.type !== "multiple_choice") continue;
          for (const option of question.options) {
            assert.ok(same.has(option) || !english.has(option), option);
          }
        }
      }
    }
    const firstAnswer = (dialect: (typeof dialects)[number]) => {
      const question = chaptersOf(dialect)[0].questions?.[0];
      return question?.type === "multiple_choice" ? question.correctMeaning : "";
    };
    assert.equal(firstAnswer("tagalog"), "Malapit sa mahiwagang gubat");
    assert.equal(firstAnswer("kapampangan"), "Malapit king gubat a maki-madyik");
    assert.equal(firstAnswer("waray"), "Hirani ha mahika nga kagurangan");
  });
});

describe("story practice result", () => {
  const questions = [
    { id: 1, type: "card_match" },
    { id: 2, type: "card_match" },
    { id: 3, type: "speak" },
    { id: 4, type: "multiple_choice" },
    { id: 5, type: "fill_blank" },
    { id: 6, type: "expression" },
  ] as const;

  test("rows follow the mockup order with real counts", () => {
    assert.deepEqual(summarizePracticeByType(questions, [1, 3, 6]), [
      { type: "card_match", name: "Match Cards", got: 1, total: 2 },
      { type: "speak", name: "Speak It", got: 1, total: 1 },
      { type: "multiple_choice", name: "Translate", got: 0, total: 1 },
      { type: "fill_blank", name: "Fill It In", got: 0, total: 1 },
      { type: "expression", name: "Show It", got: 1, total: 1 },
    ]);
  });

  test("kept Deshawn comprehension shows one row of 3 in every chapter", () => {
    for (const chapter of deshawnComprehensionChapters) {
      const ids = (chapter.questions ?? []).map((question) => question.id);
      assert.deepEqual(
        summarizePracticeByType(chapter.questions ?? [], ids.slice(0, 2)),
        [{ type: "comprehension", name: "Comprehension", got: 2, total: 3 }],
      );
    }
  });

  test("question ids are unique in a chapter, so rows add up to the score", () => {
    const chapters = [
      ...deshawnStoryPracticeChapters,
      ...oldHouseStoryPracticeChapters,
    ];
    for (const chapter of chapters) {
      const list = chapter.questions ?? [];
      const ids = list.map((question) => question.id);
      assert.equal(new Set(ids).size, ids.length);
      const rows = summarizePracticeByType(list, ids);
      assert.equal(
        rows.reduce((sum, row) => sum + row.got, 0),
        list.length,
      );
    }
  });

  test("rows survive the route param, and bad values show none", () => {
    const rows = summarizePracticeByType(questions, [1]);
    assert.deepEqual(parsePracticeByType(JSON.stringify(rows)), rows);
    assert.deepEqual(parsePracticeByType("not json"), []);
    assert.deepEqual(parsePracticeByType(undefined), []);
    assert.deepEqual(parsePracticeByType('[{"type":1}]'), []);
  });

  test("percentages match the result cards", () => {
    assert.equal(percentOf(8, 10), 80);
    assert.equal(percentOf(2, 3), 67);
    assert.equal(percentOf(0, 0), 0);
  });
});

describe("story practice instructions", () => {
  test("a single word keeps the word instruction", () => {
    assert.equal(storyChoiceInstruction("hamog"), "What does this word mean?");
    assert.equal(storyFillInstruction("hamog"), "Enter the English meaning");
    assert.equal(storyFillPlaceholder("hamog"), "Type the English meaning");
  });

  test("a question or sentence gets the general instruction", () => {
    const shown = "Where was the little village?";
    assert.equal(storyChoiceInstruction(shown), "Choose the best answer");
    assert.equal(storyFillInstruction(shown), "Type your answer");
    assert.equal(storyFillPlaceholder(shown), "Type your answer");
  });

  test("kept Deshawn comprehension is labeled and worded as comprehension", () => {
    assert.equal(deshawnComprehensionChapters.length, 45);
    for (const chapter of deshawnComprehensionChapters) {
      for (const question of chapter.questions ?? []) {
        assert.equal(practiceTypeLabel(question), COMPREHENSION_LABEL);
        assert.equal(question.type, "multiple_choice");
        if (question.type === "multiple_choice") {
          assert.equal(
            storyChoiceInstruction(question.word),
            "Choose the best answer",
          );
        }
      }
    }
  });

  test("Old House keeps its labels and word instructions", () => {
    for (const chapter of oldHouseStoryPracticeChapters) {
      for (const question of chapter.questions ?? []) {
        assert.equal(
          practiceTypeLabel(question),
          PRACTICE_TYPE_LABELS[question.type],
        );
        if (question.type === "multiple_choice") {
          assert.equal(
            storyChoiceInstruction(question.word),
            "What does this word mean?",
          );
        }
        if (question.type === "fill_blank") {
          assert.equal(
            storyFillInstruction(question.meaning),
            "Enter the English meaning",
          );
        }
      }
    }
  });
});
