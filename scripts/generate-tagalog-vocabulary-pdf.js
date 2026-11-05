const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const root = path.resolve(__dirname, "..");

function loadTypeScript(file, provided = {}) {
  let source = fs.readFileSync(path.join(root, file), "utf8");
  if (Object.keys(provided).length) {
    source = source.replace(/import .*?;\r?\n/g, "");
  }
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  }).outputText;
  const module = { exports: {} };
  new Function(
    "exports",
    "module",
    ...Object.keys(provided),
    output,
  )(module.exports, module, ...Object.values(provided));
  return module.exports;
}

const vocabulary = loadTypeScript(
  "app/Whispers_Tagalo_Terms_Chapters_2-31.ts",
).tagalogTermsByChapter;
const practice = loadTypeScript("data/story-practice/tagalog.ts");
const storyData = loadTypeScript("data/storyData.ts", {
  tagalogTermsByChapter: vocabulary,
  tagalogStoryPracticeChapters: practice.tagalogStoryPracticeChapters,
});
const chapters = storyData.getChaptersForDialect("tagalog");

const entriesByChapter = {};
for (const chapter of chapters) {
  entriesByChapter[chapter.id] = chapter.terms ?? [];
}

function ascii(value) {
  return String(value ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\x20-\x7e]/g, "?");
}

function pdfText(value) {
  return ascii(value).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function wrap(value, max = 82) {
  const words = ascii(value).split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > max && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines.length ? lines : [""];
}

const pages = [];
for (let chapter = 1; chapter <= 31; chapter += 1) {
  const terms = entriesByChapter[chapter] ?? [];
  const lines = [];
  lines.push({ text: `BIGKAS - TAGALOG STORY VOCABULARY`, bold: true, size: 16 });
  lines.push({ text: `Chapter ${chapter} | ${terms.length} highlighted terms`, bold: true, size: 11 });
  lines.push({ text: "English source phrase and highlighted Tagalog equivalent", size: 9 });
  lines.push({ text: "", size: 7 });

  terms.forEach((term, index) => {
    const english = term.match;
    const tagalog = term.dialectMatch ?? term.dialect;
    const explanation = term.explanation;
    lines.push({ text: `${index + 1}. English: ${english}`, bold: true, size: 9 });
    lines.push({ text: `Tagalog: ${tagalog}`, highlight: true, size: 10 });
    if (term.practiceQuestionIds?.length) {
      lines.push({
        text: `Practice question(s): ${term.practiceQuestionIds.join(", ")}`,
        size: 8,
      });
    }
    for (const note of wrap(`Note: ${explanation}`, 92)) {
      lines.push({ text: note, size: 8 });
    }
    lines.push({ text: "", size: 5 });
  });

  pages.push(lines);
}

const objects = [];
const addObject = (value) => {
  objects.push(value);
  return objects.length;
};

const catalogId = addObject("");
const pagesId = addObject("");
const regularFontId = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
const boldFontId = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");

const pageIds = [];
for (const lines of pages) {
  let y = 742;
  const commands = [];
  for (const line of lines) {
    const leading = line.size >= 16 ? 22 : line.size >= 10 ? 16 : 12;
    if (line.highlight) {
      commands.push(`q 1 0.88 0.25 rg 48 ${y - 3} 516 14 re f Q`);
    }
    commands.push(
      `BT /${line.bold ? "F2" : "F1"} ${line.size} Tf 54 ${y} Td (${pdfText(line.text)}) Tj ET`,
    );
    y -= leading;
  }
  const stream = commands.join("\n");
  const contentId = addObject(`<< /Length ${Buffer.byteLength(stream, "binary")} >>\nstream\n${stream}\nendstream`);
  const pageId = addObject(
    `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 ${regularFontId} 0 R /F2 ${boldFontId} 0 R >> >> /Contents ${contentId} 0 R >>`,
  );
  pageIds.push(pageId);
}

objects[catalogId - 1] = `<< /Type /Catalog /Pages ${pagesId} 0 R >>`;
objects[pagesId - 1] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`;

let pdf = "%PDF-1.4\n%\xE2\xE3\xCF\xD3\n";
const offsets = [0];
objects.forEach((object, index) => {
  offsets.push(Buffer.byteLength(pdf, "binary"));
  pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
});
const xrefOffset = Buffer.byteLength(pdf, "binary");
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (let i = 1; i < offsets.length; i += 1) {
  pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

const outputDir = path.join(root, "docs");
fs.mkdirSync(outputDir, { recursive: true });
const outputFile = path.join(outputDir, "Tagalog_Story_Vocabulary_Highlighted.pdf");
fs.writeFileSync(outputFile, Buffer.from(pdf, "binary"));
console.log(`Wrote ${outputFile} (${pages.length} pages, ${Object.values(entriesByChapter).flat().length} terms).`);
