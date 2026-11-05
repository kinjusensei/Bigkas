// Writes docs/deshawn-practice-review.md from data/story-practice/deshawn.ts.
// Run from the repo root: node scripts/generate-deshawn-practice-review.mjs
import fs from "node:fs";

import { deshawnChapters, deshawnDialectText } from "../data/stories/deshawn.ts";
import {
  deshawnCardWord,
  deshawnPractice,
  deshawnWordRow,
  deshawnWrittenWord,
} from "../data/story-practice/deshawn.ts";

const TYPES = [
  "Match Cards",
  "Match Cards",
  "Match Cards",
  "Match Cards",
  "Speak It",
  "Translate",
  "Fill It In",
  "Translate",
  "Fill It In",
];
const USES_DISTRACTORS = new Set(["Match Cards", "Translate"]);

// "<chapter>:<english>" => why a reviewer should look at this one first.
const CHECK_FIRST = {
  "2:crying": 'Kapampangan "mag-gaga" follows "gulisak": the pairing may belong to the phrase.',
  "2:trees": 'Kapampangan "tanaman" also means plants in general.',
  "3:golden": 'Plain form "ginto" (Tagalog) comes from dropping the linker of "gintong".',
  "4:search": 'Kapampangan "paintunan" and Waray "pagbiling" were paired by position in the sentence.',
  "6:broken": 'Kapampangan "makasira" looks like "can break" rather than "broken".',
  "6:long": 'Waray "hataas" also means tall. Kapampangan plain form "makaba" drops the linker of "makabang".',
  "6:wooden": 'All three words mean "wood"; the story uses them for "wooden" ("tulay na kahoy").',
  "8:shiny": 'Kapampangan "masalang" is also this story\'s word for "bright".',
  "9:loud": 'Kapampangan "maragul" usually means big ("maki-maragul a boses").',
  "10:angry": 'Kapampangan "mimua" was paired by position in the sentence.',
  "10:lonely": 'Tagalog "nag-iisa" and Waray "nag-iinusara" lean toward "alone".',
  "10:sad": 'Kapampangan "Malungkot" reads like the Tagalog word.',
  "10:shaking": 'Kapampangan "Gagalgal" was paired by position in the sentence.',
  "11:asked": 'Kapampangan "Kitang" is a form of "to ask": confirm it stands alone.',
  "12:joy": 'Kapampangan "tula" was paired by position in the sentence.',
  "12:colorful": 'Kapampangan "maki-kuleng" was paired by position in the sentence.',
  "12:beautiful flowers": 'Kapampangan "masampagang sampaga" is literally close to "flowery flowers".',
  "13:journey": 'Kapampangan "panyalungat" appears in this story for several ideas (journey, rising, mission).',
  "14:hugged": 'Kapampangan "Pengulutan" was paired by position in the sentence.',
  "15:planted": 'Kapampangan "tinalam" was paired by position in the sentence.',
};

const cell = (value) => (value ? String(value).replace(/\|/g, "\\|") : "—");

const wordCell = (chapter, word, language) => {
  const shown = deshawnCardWord(chapter, word, language);
  const written = deshawnWrittenWord(chapter, word, language);
  return shown.toLowerCase() === written.toLowerCase()
    ? shown
    : `${shown} (in text: ${written})`;
};

const lines = [
  "# Story for Deshawn: practice review",
  "",
  "**Every pairing below is a DRAFT** and needs a native speaker's review. Generated from `data/story-practice/deshawn.ts` and `data/stories/deshawn.ts`; make corrections there, then run `node scripts/generate-deshawn-practice-review.mjs`.",
  "",
  "- The Kapampangan story text is reviewed, but matching its words to English meanings is inferred. The Tagalog and Waray story text are also drafts.",
  "- Each word comes from the chapter's own text. The meaning comes from the aligned English sentence (shown as \"Sentence\").",
  "- The word column shows what the question card shows. \"(in text: ...)\" gives the form in the story when it differs, for example with a linker.",
  "- **Accepted answers** apply to Fill It In. Matching ignores case, spaces and punctuation.",
  "- **Distractors** are the wrong options on Match Cards and Translate. Speak It and Fill It In don't use them.",
  "- The pass mark is 7 of 10. Q10 counts once attempted or skipped, and the camera never affects the score.",
  "",
  "## Check these first",
  "",
  "| Chapter | Meaning | Why |",
  "|---|---|---|",
  ...Object.entries(CHECK_FIRST).map(([key, why]) => {
    const [chapter, english] = key.split(":");
    return `| ${chapter} | ${english} | ${cell(why)} |`;
  }),
  "",
];

for (const practice of deshawnPractice) {
  const { chapter, words, showIt } = practice;
  const title = deshawnChapters[chapter - 1].title;
  lines.push(
    `## Chapter ${chapter}: ${title}`,
    "",
    `Kapampangan title: ${deshawnDialectText.kapampangan[chapter].title}. Tagalog: ${deshawnDialectText.tagalog[chapter].title}. Waray: ${deshawnDialectText.waray[chapter].title}.`,
    "",
    "| Q | Type | Tagalog | Kapampangan | Waray | English meaning | Accepted answers | Distractors | Sentence | Status |",
    "|---|---|---|---|---|---|---|---|---|---|",
  );
  words.forEach((word, index) => {
    const type = TYPES[index];
    const row = deshawnWordRow(chapter, word.english);
    const sentence = deshawnChapters[chapter - 1].body[row[0]];
    const status = CHECK_FIRST[`${chapter}:${word.english}`]
      ? "Draft, check first"
      : "Draft";
    lines.push(
      `| ${index + 1} | ${type} | ${cell(wordCell(chapter, word, "tagalog"))} | ${cell(wordCell(chapter, word, "kapampangan"))} | ${cell(wordCell(chapter, word, "waray"))} | ${cell(word.english)} | ${type === "Fill It In" ? cell(word.acceptedAnswers.join(", ")) : "—"} | ${USES_DISTRACTORS.has(type) ? cell(word.distractors.join(", ")) : "—"} | ${cell(sentence)} | ${status} |`,
    );
  });
  lines.push(
    "| 10 | Show It | — | — | — | — | — | — | — | Draft |",
    "",
    `**Q10 prompt:** ${showIt.prompt} (expected expression: ${showIt.expectedExpression}; never affects the score or unlocking)`,
    "",
  );
}

fs.writeFileSync("docs/deshawn-practice-review.md", lines.join("\n"));
console.log(`Wrote docs/deshawn-practice-review.md (${deshawnPractice.length} chapters)`);
