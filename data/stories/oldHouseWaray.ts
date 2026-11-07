// "The Secret Behind the Old House" in Waray. Written by
// scripts/import-old-house-waray.mjs: don't edit by hand. Format of the source
// file: docs/old-house-waray-format.md.
//
// null = no Waray text yet, so the Story page shows "Waray version coming soon".
//
// No imports: the tests run this file directly with node.

export type OldHouseWarayText = {
  title: string;
  // The word for "Chapter", shown as "<word> 1".
  chapterWord: string;
  // [chapter][sentence], paired with englishSentences in oldHouseText.ts.
  sentences: string[][];
  // [chapter][word], paired with oldHousePractice in story-practice/oldHouse.ts.
  words: string[][];
};

export const OLD_HOUSE_WARAY: OldHouseWarayText | null = null;
