import assert from "node:assert/strict";
import { describe, test } from "node:test";

import {
  findEnglishInSentence,
  findPracticeHighlights,
  findWordInSentence,
  matchCardsCaption,
  matchesFillAnswer,
  PRACTICE_TYPE_LABELS,
  shuffled,
} from "../../utils/storyPractice.ts";
import {
  englishSentences,
  kapampanganSentences,
  tagalogSentences,
} from "../stories/oldHouseText.ts";
import { OLD_HOUSE_WARAY } from "../stories/oldHouseWaray.ts";
import {
  buildOldHouseQuestions,
  OLD_HOUSE_DIALECTS,
  OLD_HOUSE_REQUIRED_CORRECT,
  oldHousePractice,
  oldHouseStoryPracticeChapters,
  type OldHouseDialect,
} from "./oldHouse.ts";

// Run with: npm test

const LANGUAGES = [
  { key: "tagalog", text: tagalogSentences },
  { key: "kapampangan", text: kapampanganSentences },
  // Every check below covers Waray too, once its text is imported.
  ...(OLD_HOUSE_WARAY
    ? [{ key: "waray", text: OLD_HOUSE_WARAY.sentences }]
    : []),
] as { key: OldHouseDialect; text: string[][] }[];

const EXPECTED_LABELS = [
  "🃏 Match Cards",
  "🃏 Match Cards",
  "🃏 Match Cards",
  "🃏 Match Cards",
  "🎤 Speak It",
  "🗨️ Translate",
  "✍️ Fill It In",
  "🗨️ Translate",
  "✍️ Fill It In",
  "😊 Show It",
];

describe("Old House story text", () => {
  test("24 chapters, paired sentence by sentence", () => {
    assert.equal(englishSentences.length, 24);
    englishSentences.forEach((english, chapter) => {
      assert.equal(tagalogSentences[chapter].length, english.length);
      assert.equal(kapampanganSentences[chapter].length, english.length);
      if (OLD_HOUSE_WARAY) {
        assert.equal(OLD_HOUSE_WARAY.sentences[chapter].length, english.length);
      }
    });
  });
});

describe("Old House practice", () => {
  test("one entry per chapter and per language", () => {
    assert.equal(
      oldHouseStoryPracticeChapters.length,
      24 * OLD_HOUSE_DIALECTS.length,
    );
    for (const entry of oldHouseStoryPracticeChapters) {
      assert.equal(
        entry.lessonId,
        `story_${entry.dialect}_oldhouse_${entry.chapter}`,
      );
      assert.equal(entry.requiredCorrect, OLD_HOUSE_REQUIRED_CORRECT);
    }
  });

  test("every chapter has 10 questions in order with the right labels", () => {
    for (const entry of oldHouseStoryPracticeChapters) {
      const questions = entry.questions ?? [];
      assert.equal(questions.length, 10);
      assert.deepEqual(
        questions.map((question) => question.id),
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      );
      assert.deepEqual(
        questions.map((question) => PRACTICE_TYPE_LABELS[question.type]),
        EXPECTED_LABELS,
      );
    }
  });

  test("match cards caption names the page's language", () => {
    assert.equal(
      matchCardsCaption("Kapampangan"),
      "Match the Kapampangan card with its equivalent",
    );
  });

  test("every word appears in its aligned sentence of the chapter", () => {
    for (const practice of oldHousePractice) {
      const chapter = practice.chapter - 1;
      for (const word of practice.words) {
        const english = englishSentences[chapter][word.sentence];
        assert.ok(
          findEnglishInSentence(english, word.english),
          `chapter ${practice.chapter}: "${word.english}" not in "${english}"`,
        );
        for (const { key, text } of LANGUAGES) {
          const sentence = text[chapter][word.sentence];
          assert.ok(
            findWordInSentence(sentence, word[key]),
            `chapter ${practice.chapter}: "${word[key]}" not in "${sentence}"`,
          );
        }
      }
    }
  });

  test("the reader highlights the whole word, not part of another", () => {
    // The reader highlights the first exact occurrence (indexOf).
    for (const practice of oldHousePractice) {
      const chapter = practice.chapter - 1;
      for (const word of practice.words) {
        for (const { key, text } of LANGUAGES) {
          const sentence = text[chapter][word.sentence];
          const surface = findWordInSentence(sentence, word[key]) as string;
          const before = sentence[sentence.indexOf(surface) - 1] ?? " ";
          assert.ok(
            !/[\p{L}\p{N}'’-]/u.test(before),
            `chapter ${practice.chapter}: "${surface}" in "${sentence}"`,
          );
        }
      }
    }
  });

  test("no word repeats within a chapter", () => {
    for (const practice of oldHousePractice) {
      assert.equal(practice.words.length, 9);
      for (const key of [...LANGUAGES.map((l) => l.key), "english" as const]) {
        const words = practice.words.map((word) => word[key].toLowerCase());
        assert.equal(
          new Set(words).size,
          words.length,
          `chapter ${practice.chapter} repeats a ${key} word`,
        );
      }
    }
  });

  test("distractors are other meanings from the story", () => {
    const meanings = new Set(
      oldHousePractice.flatMap((practice) =>
        practice.words.map((word) => word.english),
      ),
    );
    for (const practice of oldHousePractice) {
      for (const word of practice.words) {
        assert.equal(word.distractors.length, 3);
        assert.equal(new Set(word.distractors).size, 3);
        for (const distractor of word.distractors) {
          assert.ok(meanings.has(distractor), distractor);
          assert.notEqual(distractor, word.english);
          assert.ok(!word.acceptedAnswers.includes(distractor), distractor);
        }
      }
    }
  });

  test("Show It uses a supported expression and always counts", () => {
    const supported = ["happy", "angry", "sad", "neutral", "shocked", "confused"];
    for (const practice of oldHousePractice) {
      assert.ok(supported.includes(practice.showIt.expectedExpression));
      const last = buildOldHouseQuestions(practice, "tagalog")[9];
      assert.ok(last.type === "expression" && last.countsAsCompleted === true);
    }
  });

  test("Speak It is mic-optional", () => {
    const speak = buildOldHouseQuestions(oldHousePractice[0], "kapampangan")[4];
    assert.ok(speak.type === "speak" && speak.micOptional === true);
  });

  test("both languages share the same English meanings", () => {
    for (const practice of oldHousePractice) {
      const meanings = (language: "tagalog" | "kapampangan") =>
        buildOldHouseQuestions(practice, language).flatMap((question) =>
          question.type === "fill_blank"
            ? [question.correctWord]
            : question.type === "card_match" ||
                question.type === "multiple_choice"
              ? [question.correctMeaning]
              : [],
        );
      assert.deepEqual(meanings("tagalog"), meanings("kapampangan"));
    }
  });
});

describe("Old House highlights", () => {
  const WORD_CHAR = /[\p{L}\p{N}'’-]/u;

  test("every practice word is highlighted in its source sentence", () => {
    const unmatched: string[] = [];
    for (const practice of oldHousePractice) {
      const chapter = practice.chapter - 1;
      for (const { key, text } of LANGUAGES) {
        const highlights = findPracticeHighlights(
          text[chapter],
          practice.words.map((word) => word[key]),
        );
        practice.words.forEach((word, wordIndex) => {
          const found = highlights.some(
            (h) => h.wordIndex === wordIndex && h.sentenceIndex === word.sentence,
          );
          if (!found) {
            unmatched.push(`chapter ${practice.chapter} ${key}: ${word[key]}`);
          }
        });
      }
    }
    assert.deepEqual(unmatched, []);
  });

  test("highlights are whole words at the right place, never overlapping", () => {
    for (const practice of oldHousePractice) {
      const chapter = practice.chapter - 1;
      for (const { key, text } of LANGUAGES) {
        const highlights = findPracticeHighlights(
          text[chapter],
          practice.words.map((word) => word[key]),
        );
        let lastEnd = -1;
        let lastSentence = -1;
        for (const h of highlights) {
          const sentence = text[chapter][h.sentenceIndex];
          const end = h.start + h.text.length;
          assert.equal(sentence.slice(h.start, end), h.text);
          assert.ok(!WORD_CHAR.test(sentence[h.start - 1] ?? " "), h.text);
          assert.ok(!WORD_CHAR.test(sentence[end] ?? " "), h.text);
          if (h.sentenceIndex === lastSentence) {
            assert.ok(h.start >= lastEnd, h.text);
          }
          lastSentence = h.sentenceIndex;
          lastEnd = end;
        }
      }
    }
  });

  test("a different word that looks like a linker form is not matched", () => {
    const highlights = findPracticeHighlights(
      ["Patunayan ya itang binalu king itan."],
      ["itan"],
    );
    assert.deepEqual(
      highlights.map((h) => h.text),
      ["itan"],
    );
  });

  test("matches every occurrence, linkers and capitals, not longer words", () => {
    const sentences = [
      "Ang bintana at Bintana.",
      "May bintanang basag sa pibintana-bintana.",
      "Ang pangalang Lily.",
      "Walang bintanahan dito.",
    ];
    const highlights = findPracticeHighlights(sentences, ["bintana", "pangalan"]);
    assert.deepEqual(
      highlights.map((h) => [h.sentenceIndex, h.text, h.wordIndex]),
      [
        [0, "bintana", 0],
        [0, "Bintana", 0],
        [1, "bintanang", 0],
        [2, "pangalang", 1],
      ],
    );
  });
});

describe("Fill It In matching", () => {
  test("accepts alternates", () => {
    assert.equal(matchesFillAnswer("home", ["house", "home"]), true);
    assert.equal(matchesFillAnswer("house", ["house", "home"]), true);
    assert.equal(matchesFillAnswer("window", ["house", "home"]), false);
  });

  test("ignores case, spaces and punctuation", () => {
    assert.equal(matchesFillAnswer("  HoUsE. ", ["house"]), true);
    assert.equal(matchesFillAnswer("living  room!", ["living room"]), true);
    assert.equal(matchesFillAnswer("LivingRoom", ["living room"]), true);
  });

  test("an empty answer never matches", () => {
    assert.equal(matchesFillAnswer("  ", ["house"]), false);
    assert.equal(matchesFillAnswer("...", ["house"]), false);
  });
});

describe("Retry shuffle", () => {
  test("keeps the same options", () => {
    const options = ["a", "b", "c", "d"];
    const result = shuffled(options);
    assert.deepEqual([...result].sort(), options);
    assert.deepEqual(options, ["a", "b", "c", "d"]);
  });
});
