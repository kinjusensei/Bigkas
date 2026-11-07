// Imports the Waray translation of "The Secret Behind the Old House".
// The format is explained in docs/old-house-waray-format.md.
//
//   node scripts/import-old-house-waray.mjs --template
//     Rewrites docs/old-house-waray-template.txt, the file a speaker fills in.
//   node scripts/import-old-house-waray.mjs <filled file>
//     Checks the file and changes nothing.
//   node scripts/import-old-house-waray.mjs <filled file> --write
//     Checks it and, only if every check passes, writes
//     data/stories/oldHouseWaray.ts. That lists the story in Waray and removes
//     the "Waray version coming soon" state; no other file needs editing.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  englishSentences,
  kapampanganSentences,
  tagalogSentences,
} from "../data/stories/oldHouseText.ts";
import { oldHousePractice } from "../data/story-practice/oldHouse.ts";
import {
  findPracticeHighlights,
  findWordInSentence,
} from "../utils/storyPractice.ts";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const TEMPLATE_PATH = path.join(ROOT, "docs/old-house-waray-template.txt");
const OUTPUT_PATH = path.join(ROOT, "data/stories/oldHouseWaray.ts");

// Everything the importer knows about the story comes from the app's own data.
const defaultSource = {
  english: englishSentences,
  otherLanguages: { Tagalog: tagalogSentences, Kapampangan: kapampanganSentences },
  practice: oldHousePractice,
};

export function renderTemplate(source = defaultSource) {
  const lines = [
    "# The Secret Behind the Old House: Waray translation",
    "# Write only after WAR: on each line. Keep each sentence on one line.",
    "# Instructions: docs/old-house-waray-format.md",
    "",
    "TITLE EN: The Secret Behind the Old House",
    "TITLE WAR: ",
    "CHAPTER EN: Chapter",
    "CHAPTER WAR: ",
  ];
  source.english.forEach((sentences, chapter) => {
    const number = chapter + 1;
    lines.push("", `=== CHAPTER ${number} ===`, "");
    sentences.forEach((sentence, index) => {
      lines.push(`${number}.${index + 1} EN: ${sentence}`);
      lines.push(`${number}.${index + 1} WAR: `);
    });
    lines.push("", `--- CHAPTER ${number} WORDS ---`);
    source.practice[chapter].words.forEach((word, index) => {
      lines.push(
        `W${number}.${index + 1} EN: ${word.english} (in sentence ${number}.${word.sentence + 1})`,
      );
      lines.push(`W${number}.${index + 1} WAR: `);
    });
  });
  return `${lines.join("\n")}\n`;
}

// Notepad's "Unicode" is UTF-16; anything else is read as UTF-8.
export function decodeFile(buffer) {
  const text =
    buffer[0] === 0xff && buffer[1] === 0xfe
      ? buffer.toString("utf16le")
      : buffer.toString("utf8");
  return text.replace(/^\uFEFF/, "");
}

const clean = (value) =>
  value
    .replace(/[\u200B\uFEFF]/g, "")
    .replace(/\u00A0/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .normalize("NFC");

const ENTRY = /^(W?)(\d+)\.(\d+) WAR:(.*)$/;
const IGNORED = /^(#|===|---|TITLE EN:|CHAPTER EN:|W?\d+\.\d+ EN:)/;

export function parseFilledFile(text) {
  const parsed = {
    title: "",
    chapterWord: "",
    sentences: new Map(),
    words: new Map(),
    errors: [],
  };
  const put = (map, id, value, lineNumber) => {
    if (map.has(id)) parsed.errors.push(`line ${lineNumber}: ${id} appears twice`);
    map.set(id, value);
  };

  text.split(/\r?\n/).forEach((raw, index) => {
    const line = raw.trim();
    const lineNumber = index + 1;
    if (!line || IGNORED.test(line)) return;
    if (line.startsWith("TITLE WAR:")) {
      parsed.title = clean(line.slice("TITLE WAR:".length));
    } else if (line.startsWith("CHAPTER WAR:")) {
      parsed.chapterWord = clean(line.slice("CHAPTER WAR:".length));
    } else {
      const match = line.match(ENTRY);
      if (match) {
        const [, isWord, chapter, item, value] = match;
        if (isWord) put(parsed.words, `W${chapter}.${item}`, clean(value), lineNumber);
        else put(parsed.sentences, `${chapter}.${item}`, clean(value), lineNumber);
      } else {
        // Usually a sentence that wrapped onto a second line.
        parsed.errors.push(
          `line ${lineNumber}: not understood, keep each sentence on its own WAR: line: "${line.slice(0, 60)}"`,
        );
      }
    }
  });
  return parsed;
}

const sameText = (a, b) => clean(a).toLowerCase() === clean(b).toLowerCase();

export function checkFilledFile(parsed, source = defaultSource) {
  const errors = [...parsed.errors];
  if (!parsed.title) errors.push("TITLE WAR is blank");
  if (!parsed.chapterWord) errors.push("CHAPTER WAR is blank");

  const expectedSentences = new Set();
  const expectedWords = new Set();

  const sentences = source.english.map((english, chapter) =>
    english.map((sentence, index) => {
      const id = `${chapter + 1}.${index + 1}`;
      expectedSentences.add(id);
      const value = parsed.sentences.get(id);
      if (value === undefined) {
        errors.push(`${id}: missing`);
      } else if (!value) {
        errors.push(`${id}: blank`);
      } else if (sameText(value, sentence)) {
        errors.push(`${id}: still the English sentence`);
      } else {
        for (const [language, text] of Object.entries(source.otherLanguages)) {
          if (sameText(value, text[chapter][index])) {
            errors.push(`${id}: same as the ${language} sentence`);
          }
        }
      }
      return value ?? "";
    }),
  );

  const words = source.practice.map((practice, chapter) =>
    practice.words.map((word, index) => {
      const id = `W${chapter + 1}.${index + 1}`;
      expectedWords.add(id);
      const value = parsed.words.get(id);
      if (value === undefined) errors.push(`${id} (${word.english}): missing`);
      else if (!value) errors.push(`${id} (${word.english}): blank`);
      return value ?? "";
    }),
  );

  for (const id of parsed.sentences.keys()) {
    if (!expectedSentences.has(id)) errors.push(`${id}: no such sentence in the English`);
  }
  for (const id of parsed.words.keys()) {
    if (!expectedWords.has(id)) errors.push(`${id}: no such word in the list`);
  }

  // A pasted-twice chapter: Whispers has one in Waray and Kapampangan.
  const firstWithText = new Map();
  sentences.forEach((chapter, index) => {
    const key = chapter.join("\n");
    if (!chapter.every(Boolean)) return;
    if (firstWithText.has(key)) {
      errors.push(`chapter ${index + 1}: same text as chapter ${firstWithText.get(key) + 1}`);
    } else firstWithText.set(key, index);
  });

  // The same checks data/story-practice/oldHouse.test.ts runs on the app.
  source.practice.forEach((practice, chapter) => {
    const chapterWords = words[chapter];
    const chapterText = sentences[chapter];
    const seen = new Set();
    const highlights = findPracticeHighlights(
      chapterText,
      chapterWords.map((word) => word || "\uFFFF"),
    );
    practice.words.forEach((word, index) => {
      const value = chapterWords[index];
      const id = `W${chapter + 1}.${index + 1}`;
      const sentenceId = `${chapter + 1}.${word.sentence + 1}`;
      const sentence = chapterText[word.sentence];
      if (!value || !sentence) return;
      if (seen.has(value.toLowerCase())) {
        errors.push(`${id}: "${value}" is used twice in chapter ${chapter + 1}`);
      }
      seen.add(value.toLowerCase());
      const surface = findWordInSentence(sentence, value);
      if (!surface) {
        errors.push(`${id}: "${value}" is not in sentence ${sentenceId} as a whole word`);
        return;
      }
      const before = sentence[sentence.indexOf(surface) - 1] ?? " ";
      if (/[\p{L}\p{N}'’-]/u.test(before)) {
        errors.push(`${id}: "${value}" first appears inside a longer word in ${sentenceId}`);
      } else if (
        !highlights.some(
          (item) => item.wordIndex === index && item.sentenceIndex === word.sentence,
        )
      ) {
        errors.push(`${id}: "${value}" overlaps another listed word in ${sentenceId}`);
      }
    });
  });

  return {
    errors,
    text: { title: parsed.title, chapterWord: parsed.chapterWord, sentences, words },
  };
}

export function renderOutput(text) {
  const list = (rows, indent) =>
    rows.map((row) => `${indent}${JSON.stringify(row)},`).join("\n");
  const chapters = (table) =>
    table.map((row) => `    [\n${list(row, "      ")}\n    ],`).join("\n");
  const stub = fs.readFileSync(OUTPUT_PATH, "utf8").replace(/\r\n/g, "\n");
  const head = stub.slice(0, stub.indexOf("export const OLD_HOUSE_WARAY"));
  return `${head}export const OLD_HOUSE_WARAY: OldHouseWarayText | null = {
  title: ${JSON.stringify(text.title)},
  chapterWord: ${JSON.stringify(text.chapterWord)},
  sentences: [
${chapters(text.sentences)}
  ],
  words: [
${chapters(text.words)}
  ],
};
`;
}

function main(args) {
  if (args[0] === "--template") {
    fs.writeFileSync(TEMPLATE_PATH, renderTemplate());
    console.log(`Wrote ${path.relative(ROOT, TEMPLATE_PATH)}`);
    return 0;
  }

  const file = args.find((arg) => !arg.startsWith("--"));
  if (!file) {
    console.error("Usage: node scripts/import-old-house-waray.mjs <filled file> [--write]");
    console.error("       node scripts/import-old-house-waray.mjs --template");
    return 2;
  }

  const { errors, text } = checkFilledFile(
    parseFilledFile(decodeFile(fs.readFileSync(file))),
  );
  if (errors.length > 0) {
    for (const error of errors) console.error(error);
    console.error(`\n${errors.length} problem(s). Nothing was written.`);
    return 1;
  }

  const sentenceCount = text.sentences.flat().length;
  const wordCount = text.words.flat().length;
  const summary = `${text.sentences.length} chapters, ${sentenceCount} sentences, ${wordCount} words`;
  if (!args.includes("--write")) {
    console.log(`OK: ${summary}. Nothing written; add --write to import.`);
    return 0;
  }
  fs.writeFileSync(OUTPUT_PATH, renderOutput(text));
  console.log(`Wrote ${path.relative(ROOT, OUTPUT_PATH)}: ${summary}.`);
  console.log("Next: npm test, npx tsc --noEmit, then a new preview build.");
  return 0;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  process.exitCode = main(process.argv.slice(2));
}
