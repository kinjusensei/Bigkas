// Generates data/lessons/kapampangan-lesson21.ts … kapampangan-lesson30.ts
// from Part 1 of docs/Bigkas-missing-questionnaires-draft.md.
//
//   node scripts/import-kapampangan-lessons-21-30.mjs          (check only)
//   node scripts/import-kapampangan-lessons-21-30.mjs --write  (write files)
//
// Each lesson becomes a structured lesson (same format as Kapampangan
// Lessons 1–10), marked draftForReview:
//   pretest items 1–4  → vocabulary and Match the Vocabulary
//   pretest item 5     → speaking (may be skipped, as in every lesson)
//   pretest items 6, 8 → Choose the Correct Answer
//   pretest items 7, 9 → Fill in the Blanks
//   pretest item 10    → left out: the FER item is a suggestion, not scored
//   lesson assessment  → assessment (Lessons 26 and 29 have none in the
//                        draft: 26 is still to be written, 29 is a role-play
//                        scored by a teacher)
// Lesson 30's assessment is Parts A–D (Part E is scored by a teacher).
// Phrases the draft marks "(?)" are shown without the mark and listed in
// each file's reviewItems.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const draftPath = path.join(root, "docs/Bigkas-missing-questionnaires-draft.md");

const LETTERS = ["A", "B", "C", "D"];

export function parseDraft(markdown) {
  const md = markdown.replace(/\r\n/g, "\n");
  const start = md.indexOf("## Part 1:");
  const end = md.indexOf("\n## Part 2:");
  if (start < 0 || end < 0) throw new Error("Part 1 not found");
  const sections = md.slice(start, end).split(/^### /m).slice(1);
  return sections.map(parseLesson);
}

const unquote = (line) =>
  [...line.matchAll(/[“"]([^”"]+)[”"]/g)].map((match) => match[1]);
const unescape = (text) => text.replace(/\\([[\]_*])/g, "$1");
const REVIEW = /\s*\(\?\)\s*$/;

function splitOptions(text, n, where) {
  // "prompt A. x · **B. y** · C. z · D. w" or "A. x  B. y  C. z  D. w"
  const match = text.match(/^(.*?)\s*A\.\s*(.+?)\s*(?:·\s*)?B\.\s*(.+?)\s*(?:·\s*)?C\.\s*(.+?)\s*(?:·\s*)?D\.\s*(.+?)\s*$/);
  if (!match) throw new Error(`${where}: can't read options in "${text}"`);
  const raw = match.slice(2).map((option) => option.trim());
  // The draft bolds the right option: "**B. For me**".
  const bold = text.match(/\*\*([A-D])\./)?.[1] ?? null;
  const prompt = unescape(match[1].replace(/\*\*\s*$/, "").trim());
  const options = raw.map((option) => unescape(option.replace(/\*\*/g, "").trim()));
  return { prompt, options, bold };
}

function parseKey(text) {
  return Object.fromEntries(
    [...text.matchAll(/(\d+)-([A-D])/g)].map((m) => [Number(m[1]), m[2]]),
  );
}

function parseLesson(section) {
  const lines = section.split("\n");
  const head = lines[0].match(/^Lesson (\d+): (.+)$/);
  if (!head) throw new Error(`bad heading: ${lines[0]}`);
  const number = Number(head[1]);
  const title = head[2].trim();
  const where = `Lesson ${number}`;

  const words = lines
    .filter((line) => /^\| /.test(line))
    .slice(0, 6)
    .map((line) => line.split("|").slice(1, 3).map((cell) => cell.trim()))
    .filter(([a]) => a && !/^Kapampangan word$|^-+$/.test(a));
  const vocab = words.slice(0, 4);
  if (vocab.length !== 4) throw new Error(`${where}: ${vocab.length} words`);
  const meaningOf = Object.fromEntries(vocab);
  const wordOf = Object.fromEntries(vocab.map(([w, m]) => [m, w]));

  const pretestEnd = lines.findIndex((line) => line.startsWith("*Answer key:* 1."));
  if (pretestEnd < 0) throw new Error(`${where}: no pretest answer key`);
  const item = (n) => {
    const line = lines.slice(0, pretestEnd).find((l) => l.startsWith(`${n}. **`));
    if (!line) throw new Error(`${where}: no pretest item ${n}`);
    return line;
  };
  for (let n = 1; n <= 4; n++) {
    if (unquote(item(n))[0] !== vocab[n - 1][0]) throw new Error(`${where}: item ${n} word`);
  }
  const speakWord = unquote(item(5))[0];
  const mc6 = splitOptions(item(6).replace(/^.*?mean\?\s*/, "x "), 4, where);
  const mc6Word = unquote(item(6))[0];
  const fill7 = unquote(item(7))[0];
  const mc8 = splitOptions(item(8).replace(/^.*?means “[^”]+”\?\s*/, "x "), 4, where);
  const mc8Meaning = unquote(item(8))[0];
  const fill9 = unquote(item(9))[0];

  // Check every pretest item against the word table and the answer key.
  const key = lines[pretestEnd]
    .replace("*Answer key:*", "")
    .split("·")
    .map((part) => part.replace(/^\s*\d+\.\s*/, "").trim());
  const expected = [
    ...vocab.map(([, m]) => m),
    null,
    LETTERS[mc6.options.indexOf(meaningOf[mc6Word])],
    meaningOf[fill7],
    LETTERS[mc8.options.indexOf(wordOf[mc8Meaning])],
    meaningOf[fill9],
  ];
  expected.forEach((answer, i) => {
    if (answer !== null && key[i] !== answer) {
      throw new Error(`${where}: pretest key ${i + 1} is "${key[i]}", expected "${answer}"`);
    }
  });
  for (const w of [speakWord, mc6Word, fill7, fill9]) {
    if (!(w in meaningOf)) throw new Error(`${where}: "${w}" not in word table`);
  }

  const lesson = {
    number,
    title,
    vocab,
    speak: [speakWord, meaningOf[speakWord]],
    choices: [
      { prompt: `What does "${mc6Word}" mean?`, options: mc6.options, answer: expected[5] },
      { prompt: `Which Kapampangan word means "${mc8Meaning}"?`, options: mc8.options, answer: expected[7] },
    ],
    fills: [
      [`"${fill7}" in English is __.`, meaningOf[fill7]],
      [`The English meaning of "${fill9}" is __.`, meaningOf[fill9]],
    ],
    assessment: [],
    passPercent: 70,
    reviewItems: [],
    note: null,
  };

  const after = lines.slice(pretestEnd + 1);
  if (number === 30) {
    parseFinal(after, lesson);
  } else {
    const keyLine = after.find((line) => /^\*Answer key: 1-/.test(line));
    if (keyLine) {
      const answers = parseKey(keyLine);
      after
        .filter((line) => /^\d+\. /.test(line))
        .forEach((line) => {
          const n = Number(line.match(/^(\d+)\./)[1]);
          const q = splitOptions(line.replace(/^\d+\.\s*/, ""), 4, `${where} Q${n}`);
          if (q.bold !== answers[n]) {
            throw new Error(`${where} Q${n}: bold ${q.bold}, key ${answers[n]}`);
          }
          lesson.assessment.push({ prompt: q.prompt, options: q.options, answer: answers[n] });
        });
      if (lesson.assessment.length !== Object.keys(answers).length) {
        throw new Error(`${where}: ${lesson.assessment.length} questions, key has ${Object.keys(answers).length}`);
      }
    } else {
      lesson.note = after
        .filter((line) => line.trim() && !/^\|/.test(line))
        .map((line) => line.replace(/\*\*/g, "").replace(/\*/g, "").trim())
        .join(" ");
    }
  }
  return lesson;
}

function parseFinal(lines, lesson) {
  const keyStart = lines.findIndex((line) => line.startsWith("#### Answer key"));
  const keys = {};
  lines.slice(keyStart).forEach((line) => {
    const m = line.match(/^\| ([A-D]) \| (.+) \|$/);
    if (m) keys[m[1]] = parseKey(m[2]);
  });
  let part = null;
  let passage = null;
  const partTitles = {};
  for (const line of lines.slice(0, keyStart)) {
    const head = line.match(/^#### Part ([A-E]) — (.+?)(?: \(.+\))?$/);
    if (head) {
      part = head[1];
      partTitles[part] = head[2];
      passage = null;
      continue;
    }
    if (part === "C" && /^\*I Maria/.test(line)) {
      const text = line.replace(/^\*|\*\s*(\(\?\))?\s*$/g, "").replace(/\*\s*$/, "").trim();
      if (REVIEW.test(line)) lesson.reviewItems.push(text);
      passage = text;
      continue;
    }
    if (part === "C" && /^\*English:\*/.test(line)) {
      passage += `\n\n${line.replace("*English:*", "English:").trim()}`;
      continue;
    }
    const where = `Lesson 30 Part ${part}`;
    if (["A", "B", "C"].includes(part) && /^\d+\. /.test(line)) {
      const n = Number(line.match(/^(\d+)\./)[1]);
      const q = splitOptions(line.replace(/^\d+\.\s*/, ""), 4, `${where} Q${n}`);
      lesson.assessment.push({
        prompt: q.prompt,
        options: q.options,
        answer: keys[part][n],
        title: `Part ${part}: ${partTitles[part]}`,
        passage: part === "C" ? passage : undefined,
      });
    }
    if (part === "D") {
      const m = line.match(/^\| (\d+) \| (.+?) \| (.+?) \| (.+?) \| (.+?) \| (.+?) \|$/);
      if (m) {
        const n = Number(m[1]);
        const script = m[2].replace(REVIEW, "").trim();
        if (REVIEW.test(m[2])) lesson.reviewItems.push(script);
        lesson.assessment.push({
          prompt: `What does "${script}" mean?`,
          options: m.slice(3, 7).map((o) => o.trim()),
          answer: keys.D[n],
          title: `Part D: ${partTitles.D}`,
        });
      }
    }
  }
  for (const part of ["A", "B", "C", "D"]) {
    const count = lesson.assessment.filter((q) => q.title.startsWith(`Part ${part}`)).length;
    if (count !== Object.keys(keys[part]).length) {
      throw new Error(`Lesson 30 Part ${part}: ${count} questions, key has ${Object.keys(keys[part]).length}`);
    }
  }
  for (const q of lesson.assessment) {
    if (!q.answer) throw new Error(`Lesson 30: no answer for "${q.prompt}"`);
  }
  // 20 of 25 in Parts A–D.
  lesson.passPercent = 80;
  lesson.note =
    "Part D is meant to be heard: its lines need recordings, so for now the learner reads them. Part E (speaking and writing, 16 points) is scored by a teacher and is not in the app.";
}

const q = (value) => JSON.stringify(value);

export function renderLesson(lesson) {
  const n = lesson.number;
  const name = `kapampanganLesson${n}`;
  const meanings = lesson.vocab.map(([, m]) => m);
  const choice = (id, item, indent) => {
    const pad = " ".repeat(indent);
    const extra =
      (item.title ? `\n${pad}  title: ${q(item.title)},` : "") +
      (item.passage ? `\n${pad}  passage: ${q(item.passage)},` : "");
    return `${pad}{\n${pad}  ...choice(\n${pad}    ${id},\n${pad}    ${q(item.prompt)},\n${pad}    ${q(item.options)},\n${pad}    ${q(item.answer)},\n${pad}  ),${extra}\n${pad}},`;
  };
  const assessment = lesson.assessment.length
    ? `
  // Lesson assessment from the draft (answer key: ${lesson.assessment.map((a, i) => `${i + 1} ${a.answer}`).join(", ")}).
  assessment: {
    instructions: "Choose the correct answer.",
    passPercent: ${lesson.passPercent},
    questions: [
${lesson.assessment.map((item, i) => choice(i + 1, item, 6)).join("\n")}
    ],
  },
`
    : `
  // No assessment: ${lesson.note}
`;
  const rewards = [
    ["vocabulary", "Complete Vocabulary Learning", 10],
    ["match", "Complete Match the Vocabulary", 10],
    ["sentences", "Complete Practice Activities", 15],
    ["speaking", "Complete Speaking Practice", 10],
    ...(lesson.assessment.length ? [["assessment", "Pass Lesson Assessment", 15]] : []),
  ];
  return `// GENERATED by scripts/import-kapampangan-lessons-21-30.mjs from Part 1 of
// docs/Bigkas-missing-questionnaires-draft.md. Don't edit by hand: fix the
// draft and run the script again.
//
// DRAFT FOR REVIEW: the words, meanings and answers are not yet checked by a
// native Kapampangan speaker.${lesson.note && lesson.assessment.length ? `\n// ${lesson.note}` : ""}
import { StructuredLesson } from "../../types/structuredLesson";
import { choice, fills, matchPairs, phrases } from "./lessonHelpers";

// Phrases the draft marks "(?)", without the mark, for the native speaker.
export const ${name}ReviewItems: string[] = ${q(lesson.reviewItems)};

export const ${name}: StructuredLesson = {
  lessonId: "kapampangan_${n}",
  dialect: "kapampangan",
  dialectLabel: "Kapampangan",
  lessonNumber: ${n},
  title: ${q(lesson.title)},
  level: "Advanced",
  draftForReview: true,

  vocabularyIntro: "Learn these Kapampangan words.",
  vocabulary: [
${lesson.vocab.map(([term, meaning]) => `    { term: ${q(term)}, meaning: ${q(meaning)} },`).join("\n")}
  ],

  matchActivity: {
    title: "Match the Vocabulary",
    instructions: "Match each Kapampangan word with its English meaning.",
    pairs: matchPairs(
      ${q(lesson.vocab.map(([term]) => term))},
      ${q(meanings)},
      "A B C D",
    ),
  },

  choiceActivity: {
    title: "Choose the Correct Answer",
    questions: [
${lesson.choices.map((item, i) => choice(i + 1, item, 6)).join("\n")}
    ],
  },

  fillInBlanks: {
    title: "Fill in the Blanks",
    items: fills(
      "fill",
      [
${lesson.fills.map(([sentence, answer]) => `        [${q(sentence)}, ${q(answer)}],`).join("\n")}
      ],
      {
        title: "Fill in the Blanks",
        instructions: "Write the English meaning.",
        wordBank: ${q(meanings)},
      },
    ),
  },

  speaking: {
    title: "Speaking Practice",
    instructions: "Read the Kapampangan word aloud.",
    phrases: phrases([[${q(lesson.speak[0])}, ${q(lesson.speak[1])}]]),
  },
${assessment}
  rewards: {
    items: [
${rewards.map(([section, label, xp]) => `      { section: ${q(section)}, label: ${q(label)}, xp: ${xp} },`).join("\n")}
    ],
    total: ${rewards.reduce((sum, row) => sum + row[2], 0)},
  },
};
`;
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const lessons = parseDraft(fs.readFileSync(draftPath, "utf8"));
  if (lessons.map((l) => l.number).join() !== "21,22,23,24,25,26,27,28,29,30") {
    throw new Error(`expected lessons 21–30, got ${lessons.map((l) => l.number)}`);
  }
  for (const lesson of lessons) {
    console.log(
      `Lesson ${lesson.number}: ${lesson.vocab.length} words, ${lesson.choices.length} choice, ${lesson.fills.length} fill-in, 1 speaking, ${lesson.assessment.length} assessment${lesson.reviewItems.length ? `, ${lesson.reviewItems.length} to review` : ""}`,
    );
  }
  if (process.argv.includes("--write")) {
    for (const lesson of lessons) {
      const file = path.join(root, `data/lessons/kapampangan-lesson${lesson.number}.ts`);
      fs.writeFileSync(file, renderLesson(lesson));
    }
    console.log("wrote 10 lesson files");
  }
}
