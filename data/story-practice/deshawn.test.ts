import assert from "node:assert/strict";
import { describe, test } from "node:test";

import {
  isStoryFillWord,
  matchCardsCaption,
  matchesFillAnswer,
  PRACTICE_TYPE_LABELS,
  practiceTypeLabel,
  storyChoiceInstruction,
  storyFillInstruction,
  summarizePracticeByType,
} from "../../utils/storyPractice.ts";
import {
  deshawnChapters,
  deshawnDialectText,
  deshawnTermRows,
  deshawnTerms,
} from "../stories/deshawn.ts";
import {
  buildDeshawnQuestions,
  DESHAWN_REQUIRED_CORRECT,
  deshawnCardWord,
  deshawnPractice,
  deshawnStoryPracticeChapters,
  deshawnWordRow,
  deshawnWrittenWord,
} from "./deshawn.ts";

// Run with: npm test

const LANGUAGES = ["tagalog", "kapampangan", "waray"] as const;

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

const SUPPORTED_EXPRESSIONS = [
  "happy",
  "angry",
  "sad",
  "neutral",
  "shocked",
  "confused",
];

const lower = (value: string) => value.toLocaleLowerCase();

// The first exact-case occurrence is the one the reader highlights, so that one
// must be the whole word. A hyphen counts as a boundary: "pakpak" is the word
// in Kapampangan "maki-pakpak".
const firstIsWholeWord = (text: string, word: string) => {
  const start = text.indexOf(word);
  if (start < 0) return false;
  const letter = /[\p{L}\p{N}]/u;
  return (
    !letter.test(text[start - 1] ?? " ") &&
    !letter.test(text[start + word.length] ?? " ")
  );
};

// Every word that can't be found in its chapter's aligned sentence, for each
// chapter and language. Empty means all of them matched.
const findUnmatchedWords = () => {
  const unmatched: string[] = [];
  for (const practice of deshawnPractice) {
    const { chapter } = practice;
    for (const word of practice.words) {
      const row = deshawnWordRow(chapter, word.english);
      if (!row) {
        unmatched.push(`chapter ${chapter}: no row for "${word.english}"`);
        continue;
      }
      const english = deshawnChapters[chapter - 1].body[row[0]];
      if (!firstIsWholeWord(english, row[1])) {
        unmatched.push(`chapter ${chapter} english: "${row[1]}"`);
      }
      for (const language of LANGUAGES) {
        const written = deshawnWrittenWord(chapter, word, language);
        const sentence = deshawnDialectText[language][chapter].sentences[row[0]];
        if (!firstIsWholeWord(sentence, written)) {
          unmatched.push(`chapter ${chapter} ${language}: "${written}"`);
        }
      }
    }
  }
  return unmatched;
};

describe("Deshawn practice words", () => {
  test("15 chapters of 9 words, the same 9 the reader highlights", () => {
    assert.equal(deshawnPractice.length, 15);
    for (const { chapter, words } of deshawnPractice) {
      assert.equal(words.length, 9, `chapter ${chapter}`);
      assert.deepEqual(
        words.map((word) => word.english).sort(),
        deshawnTermRows[chapter].map((row) => row[1]).sort(),
        `chapter ${chapter}`,
      );
      for (const language of LANGUAGES) {
        assert.deepEqual(
          deshawnTerms[language][chapter].map((term) => term.dialectMatch).sort(),
          words.map((word) => deshawnWrittenWord(chapter, word, language)).sort(),
        );
      }
    }
  });

  test("every word was matched as a whole word in its aligned sentence", () => {
    const unmatched = findUnmatchedWords();
    if (unmatched.length) console.log("Unmatched words:\n" + unmatched.join("\n"));
    assert.deepEqual(unmatched, []);
  });

  test("no word repeats within a chapter, in any language", () => {
    for (const { chapter, words } of deshawnPractice) {
      assert.equal(
        new Set(words.map((word) => lower(word.english))).size,
        9,
        `chapter ${chapter} english`,
      );
      for (const language of LANGUAGES) {
        const shown = words.map((word) => deshawnCardWord(chapter, word, language));
        const written = words.map((word) =>
          lower(deshawnWrittenWord(chapter, word, language)),
        );
        assert.equal(new Set(shown.map(lower)).size, 9, `${language} ${chapter}`);
        assert.equal(new Set(written).size, 9, `${language} ${chapter}`);
      }
    }
  });

  test("a card's plain form only drops a linker, mga or capitals", () => {
    for (const { chapter, words } of deshawnPractice) {
      for (const word of words) {
        for (const language of LANGUAGES) {
          const written = lower(deshawnWrittenWord(chapter, word, language));
          const shown = lower(deshawnCardWord(chapter, word, language));
          assert.ok(
            written === shown ||
              written === `${shown}ng` ||
              written === `mga ${shown}`,
            `${language} ${chapter}: ${written} -> ${shown}`,
          );
        }
      }
    }
  });

  test("only Q1-5 can show more than one word", () => {
    for (const { chapter, words } of deshawnPractice) {
      for (const word of words.slice(5)) {
        for (const language of LANGUAGES) {
          const shown = deshawnCardWord(chapter, word, language);
          assert.ok(isStoryFillWord(shown), `${language} ${chapter}: ${shown}`);
        }
      }
    }
  });
});

describe("Deshawn practice questions", () => {
  test("every chapter has 10 questions in order, in all three languages", () => {
    assert.equal(deshawnStoryPracticeChapters.length, 45);
    for (const language of LANGUAGES) {
      const list = deshawnStoryPracticeChapters.filter(
        (chapter) => chapter.dialect === language,
      );
      assert.equal(list.length, 15);
      list.forEach((chapter, index) => {
        assert.equal(chapter.chapter, index + 1);
        assert.equal(
          chapter.lessonId,
          `story_${language}_deshawn_${index + 1}`,
        );
        const questions = chapter.questions ?? [];
        assert.deepEqual(
          questions.map((question) => question.id),
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        );
        assert.deepEqual(
          questions.map((question) => PRACTICE_TYPE_LABELS[question.type]),
          EXPECTED_LABELS,
        );
        assert.deepEqual(questions.map(practiceTypeLabel), EXPECTED_LABELS);
      });
    }
  });

  test("the instructions are the Old House ones", () => {
    assert.equal(
      matchCardsCaption("Waray"),
      "Match the Waray card with its equivalent",
    );
    for (const chapter of deshawnStoryPracticeChapters) {
      const questions = chapter.questions ?? [];
      for (const question of questions) {
        if (question.type === "multiple_choice") {
          assert.equal(
            storyChoiceInstruction(question.word),
            "What does this word mean?",
            question.word,
          );
        }
        if (question.type === "fill_blank") {
          assert.equal(
            storyFillInstruction(question.meaning),
            "Enter the English meaning",
            question.meaning,
          );
        }
      }
    }
  });

  test("the pass mark and the result rows are the Old House ones", () => {
    assert.equal(DESHAWN_REQUIRED_CORRECT, 7);
    for (const chapter of deshawnStoryPracticeChapters) {
      assert.equal(chapter.requiredCorrect, 7);
      assert.equal(chapter.shuffleOptions, true);
      const questions = chapter.questions ?? [];
      assert.deepEqual(
        summarizePracticeByType(questions, [1, 5, 10]).map((row) => [
          row.name,
          row.got,
          row.total,
        ]),
        [
          ["Match Cards", 1, 4],
          ["Speak It", 1, 1],
          ["Translate", 0, 2],
          ["Fill It In", 0, 2],
          ["Show It", 1, 1],
        ],
      );
    }
  });

  test("no question has two correct options", () => {
    // Meanings that any language gives this same spelling elsewhere in the story.
    const meaningsOf = new Map<string, Set<string>>();
    for (const rows of Object.values(deshawnTermRows)) {
      for (const row of rows) {
        for (const word of [row[2], row[3], row[4]]) {
          const key = lower(word);
          const set = meaningsOf.get(key) ?? new Set<string>();
          set.add(lower(row[1]));
          meaningsOf.set(key, set);
        }
      }
    }
    for (const { chapter, words } of deshawnPractice) {
      for (const word of words) {
        const row = deshawnWordRow(chapter, word.english);
        assert.ok(row);
        const options = [word.english, ...word.distractors].map(lower);
        assert.equal(new Set(options).size, 4, `${chapter}: ${word.english}`);
        for (const distractor of word.distractors.map(lower)) {
          assert.ok(
            !word.acceptedAnswers.map(lower).includes(distractor),
            `${chapter}: ${word.english} accepts ${distractor}`,
          );
          for (const text of [row[2], row[3], row[4]]) {
            assert.ok(
              !meaningsOf.get(lower(text))?.has(distractor),
              `${chapter}: "${text}" also means ${distractor}`,
            );
          }
        }
      }
    }
  });

  test("distractors are words from the story", () => {
    const story = lower(
      deshawnChapters.flatMap((chapter) => chapter.body).join(" "),
    );
    for (const { chapter, words } of deshawnPractice) {
      for (const word of words) {
        assert.equal(word.distractors.length, 3);
        for (const distractor of word.distractors) {
          // Anywhere in the story: "hand" first appears after "hands".
          const wholeWord = new RegExp(
            `(?<![\\p{L}\\p{N}])${lower(distractor)}(?![\\p{L}\\p{N}])`,
            "u",
          );
          assert.ok(wholeWord.test(story), `${chapter}: ${distractor}`);
        }
      }
    }
  });

  test("Choice questions show 4 options including the correct one", () => {
    for (const chapter of deshawnStoryPracticeChapters) {
      for (const question of chapter.questions ?? []) {
        if (
          question.type !== "card_match" &&
          question.type !== "multiple_choice"
        ) {
          continue;
        }
        assert.equal(question.options.length, 4);
        assert.ok(question.options.includes(question.correctMeaning));
      }
    }
  });

  test("fill-in answers accept the alternates and refuse a wrong word", () => {
    const fills = deshawnStoryPracticeChapters
      .flatMap((chapter) => chapter.questions ?? [])
      .filter((question) => question.type === "fill_blank");
    assert.equal(fills.length, 90);
    for (const question of fills) {
      if (question.type !== "fill_blank") continue;
      const accepted = question.acceptedAnswers ?? [];
      assert.ok(accepted.includes(lower(question.correctWord)));
      for (const answer of accepted) {
        assert.ok(matchesFillAnswer(`  ${answer.toUpperCase()} `, accepted));
      }
      assert.equal(matchesFillAnswer("zzz", accepted), false);
    }
    const flowers = deshawnPractice[14].words.find(
      (word) => word.english === "flowers",
    );
    assert.ok(flowers);
    assert.ok(matchesFillAnswer("Flower", flowers.acceptedAnswers));
    assert.ok(matchesFillAnswer(" flowers ", flowers.acceptedAnswers));
  });

  test("Speak It is mic-optional and Show It never affects the score", () => {
    for (const practice of deshawnPractice) {
      assert.ok(
        SUPPORTED_EXPRESSIONS.includes(practice.showIt.expectedExpression),
      );
      for (const language of LANGUAGES) {
        const questions = buildDeshawnQuestions(practice, language);
        const speak = questions[4];
        const show = questions[9];
        assert.ok(speak.type === "speak" && speak.micOptional === true);
        assert.ok(show.type === "expression" && show.countsAsCompleted === true);
        assert.equal(show.prompt, practice.showIt.prompt);
      }
    }
  });
});
