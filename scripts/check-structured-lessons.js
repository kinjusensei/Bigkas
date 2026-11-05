// Loads structured lesson data files and prints what each one holds, so a
// new lesson can be checked without opening the app.
//
//   node scripts/check-structured-lessons.js kapampangan-lesson2 kapampangan-lesson3
//
// The data files are TypeScript with extensionless imports, so they are
// transpiled to CommonJS in a temp folder first (types only, no app code).

/* global __dirname */

const fs = require("fs");
const os = require("os");
const path = require("path");
const ts = require("typescript");

const root = path.resolve(__dirname, "..");
const outDir = fs.mkdtempSync(path.join(os.tmpdir(), "bigkas-lessons-"));

// Lessons require() their recordings; only the app can load those.
const Module = require("module");
const originalRequire = Module.prototype.require;
Module.prototype.require = function (id) {
  return id.endsWith(".aac") ? 0 : originalRequire.apply(this, arguments);
};

function transpile(relativePath) {
  const source = fs.readFileSync(path.join(root, relativePath), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  });
  const target = path.join(outDir, relativePath.replace(/\.ts$/, ".js"));
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, outputText);
  return target;
}

const names = process.argv.slice(2);
if (names.length === 0) {
  console.error("Usage: node scripts/check-structured-lessons.js <file> ...");
  process.exit(1);
}

transpile("types/structuredLesson.ts");
transpile("data/lessons/lessonHelpers.ts");
let failed = false;

for (const name of names) {
  const lessonModule = require(transpile(`data/lessons/${name}.ts`));
  const lesson = Object.values(lessonModule).find(
    (value) => value && typeof value === "object" && "lessonId" in value,
  );
  if (!lesson) {
    console.error(`${name}: no lesson exported`);
    failed = true;
    continue;
  }

  const vocabulary =
    lesson.vocabulary?.length ??
    (lesson.expressionGroups ?? []).reduce(
      (sum, group) => sum + group.items.length,
      0,
    );
  const situations = (lesson.situationGroups ?? []).reduce(
    (sum, group) => sum + group.items.length,
    0,
  );
  const conversations =
    lesson.conversations?.length ?? (lesson.conversation ? 1 : 0);
  const fillTitles = new Set(
    (lesson.fillInBlanks?.items ?? []).map((item) => item.title),
  );
  const activities = [
    lesson.matchActivity && "match",
    lesson.choiceActivity && "choice",
    ...(lesson.fillInBlanks
      ? [...fillTitles].map(
          (title) => `fill: ${title ?? lesson.fillInBlanks.title}`,
        )
      : []),
    lesson.arrangeWords && "arrange",
    lesson.speaking && "speaking",
    ...(lesson.extraActivities ?? []).map((extra) => `extra: ${extra.title}`),
  ].filter(Boolean);
  const questions = lesson.assessment?.questions ?? [];
  const xpSum = (lesson.rewards?.items ?? []).reduce(
    (sum, item) => sum + item.xp,
    0,
  );

  // Every answer key must name one of the question's options.
  const badKeys = [
    ...questions,
    ...(lesson.choiceActivity?.questions ?? []),
  ].filter(
    (question) =>
      !question.options.some((option) => option.key === question.answerKey),
  );
  // Every fill-in answer must be offered in its word bank.
  const badFills = (lesson.fillInBlanks?.items ?? []).filter((item) => {
    const bank =
      item.wordBank ??
      lesson.fillInBlanks.wordBank ??
      lesson.fillInBlanks.items.map((entry) => entry.answer);
    return !bank.includes(item.answer);
  });
  // Every arrange answer must use each tile exactly once.
  const badArranges = (lesson.arrangeWords?.items ?? []).filter((item) => {
    const tiles = item.words.map((word) => word.toLowerCase()).sort();
    const answer = item.answer.map((word) => word.toLowerCase()).sort();
    return tiles.join("|") !== answer.join("|");
  });
  // Every match answer must be a real choice.
  const badPairs = (lesson.matchActivity?.pairs ?? []).filter(
    (pair) => !pair.answer,
  );
  const reviewItems =
    Object.entries(lessonModule).find(([key]) =>
      key.endsWith("ReviewItems"),
    )?.[1] ?? [];
  const markLeft = JSON.stringify(lesson).includes("(?)");

  console.log(`\n${lesson.lessonId} — ${lesson.title}`);
  console.log(`  vocabulary items:      ${vocabulary}`);
  console.log(`  situation expressions: ${situations}`);
  console.log(`  language notes:        ${lesson.languageNotes?.length ?? 0}`);
  console.log(`  conversations:         ${conversations}`);
  console.log(
    `  activities (${activities.length}):        ${activities.join(", ")}`,
  );
  console.log(
    `  speaking phrases:      ${lesson.speaking?.phrases.length ?? 0}`,
  );
  console.log(`  assessment questions:  ${questions.length}`);
  console.log(
    `  answer key:            ${questions.map((q) => `${q.id}${q.answerKey}`).join(" ")}`,
  );
  console.log(
    `  total XP:              ${lesson.rewards?.total} (rows add up to ${xpSum})`,
  );
  console.log(`  badge:                 ${lesson.rewards?.badge?.name}`);
  console.log(`  review items:          ${reviewItems.length}`);

  const problems = [
    xpSum !== lesson.rewards?.total && "XP rows don't add up to the total",
    badKeys.length && `answer keys not in options: ${badKeys.map((q) => q.id)}`,
    badFills.length &&
      `fill answers not in word bank: ${badFills.map((i) => i.id)}`,
    markLeft && 'a "(?)" mark is still in learner-facing text',
    badArranges.length &&
      `arrange answers don't match their tiles: ${badArranges.map((i) => i.id)}`,
    badPairs.length &&
      `match pairs without an answer: ${badPairs.map((p) => p.id)}`,
  ].filter(Boolean);
  for (const problem of problems) console.error(`  PROBLEM: ${problem}`);
  if (problems.length) failed = true;
}

fs.rmSync(outDir, { recursive: true, force: true });
process.exit(failed ? 1 : 0);
