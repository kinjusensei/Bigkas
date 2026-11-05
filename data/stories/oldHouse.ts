import {
  type OldHouseDialect,
  oldHousePractice,
} from "../story-practice/oldHouse";
import type {
  DialectTermAnnotation,
  SharedChapter,
  StoryDialect,
} from "../storyData";
import { findPracticeHighlights } from "../../utils/storyPractice";
import {
  englishSentences,
  kapampanganSentences,
  OLD_HOUSE_KAPAMPANGAN_TITLE,
  OLD_HOUSE_STORY_TITLE,
  OLD_HOUSE_TAGALOG_TITLE,
  tagalogSentences,
} from "./oldHouseText";

// "The Secret Behind the Old House" — Intermediate story. The text is in
// oldHouseText.ts and the chapter practice in story-practice/oldHouse.ts.
export {
  OLD_HOUSE_KAPAMPANGAN_TITLE,
  OLD_HOUSE_STORY_TITLE,
  OLD_HOUSE_TAGALOG_TITLE,
};
export { OLD_HOUSE_DIALECTS } from "../story-practice/oldHouse";

export const OLD_HOUSE_STORY_ID = "old-house";

// Chapter ids must be unique across ALL stories (Whispers 1–31, Deshawn
// 101–115), so this story uses 201–224.
const FIRST_CHAPTER_ID = 201;

const DIALECTS: StoryDialect[] = ["tagalog", "kapampangan", "waray"];

const textByDialect: Record<OldHouseDialect, string[][]> = {
  tagalog: tagalogSentences,
  kapampangan: kapampanganSentences,
};

// Each chapter's 9 practice words, highlighted in the reader wherever they
// occur in the chapter's dialect text.
function termsFor(
  dialect: OldHouseDialect,
  chapterIndex: number,
): DialectTermAnnotation[] {
  const { words } = oldHousePractice[chapterIndex];

  return findPracticeHighlights(
    textByDialect[dialect][chapterIndex],
    words.map((word) => word[dialect]),
  ).map(({ sentenceIndex, start, text, wordIndex }) => ({
    paragraphIndex: sentenceIndex,
    match: words[wordIndex].english,
    dialectMatch: text,
    dialectStart: start,
    practiceWord: true,
    dialect: words[wordIndex][dialect],
    explanation: `"${words[wordIndex][dialect]}" means "${words[wordIndex].english}" in this chapter.`,
    practiceQuestionIds: [wordIndex + 1],
  }));
}

export const oldHouseChapters: SharedChapter[] = englishSentences.map(
  (sentences, index) => {
    const number = index + 1;

    return {
      id: FIRST_CHAPTER_ID + index,
      title: `Chapter ${number}`,
      body: sentences,
      byDialect: Object.fromEntries(
        DIALECTS.map((dialect) => [
          dialect,
          {
            // Stored as story_<dialect>_oldhouse_<n> (see getChaptersForDialect).
            lessonId: `${dialect}_oldhouse_${number}`,
            ...(dialect === "waray"
              ? { translations: [] }
              : {
                  title: `Kabanata ${number}`,
                  terms: termsFor(dialect, index),
                  translations: textByDialect[dialect][index],
                }),
          },
        ]),
      ) as SharedChapter["byDialect"],
    };
  },
);
