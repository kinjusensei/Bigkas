// Shared rules of the Story practice screen (app/lesson/pretest.tsx).
//
// No imports: the tests run this file directly with node.

export const PRACTICE_TYPE_LABELS = {
  multiple_choice: "🗨️ Translate",
  card_match: "🃏 Match Cards",
  speak: "🎤 Speak It",
  fill_blank: "✍️ Fill It In",
  expression: "😊 Show It",
} as const;

// Story questions asking about the story itself, not a word.
export const COMPREHENSION_LABEL = "💬 Comprehension";

export const practiceTypeLabel = (question: {
  type: keyof typeof PRACTICE_TYPE_LABELS;
  comprehension?: boolean;
}) =>
  question.comprehension
    ? COMPREHENSION_LABEL
    : PRACTICE_TYPE_LABELS[question.type];

const showsSingleWord = (text: string) => !/\s/.test(text.trim());

// "What does this word mean?" only fits when one word is on the card.
export const storyChoiceInstruction = (shown: string) =>
  showsSingleWord(shown) ? "What does this word mean?" : "Choose the best answer";

export const storyFillInstruction = (shown: string) =>
  showsSingleWord(shown) ? "Enter the English meaning" : "Type your answer";

export const storyFillPlaceholder = (shown: string) =>
  showsSingleWord(shown) ? "Type the English meaning" : "Type your answer";

export const isStoryFillWord = showsSingleWord;

// "How you did" on the result: one row per kind of question, in this order.
export type PracticeTypeResult = {
  type: string;
  name: string;
  got: number;
  total: number;
};

const SUMMARY_ROWS = [
  ["card_match", "Match Cards"],
  ["speak", "Speak It"],
  ["multiple_choice", "Translate"],
  ["comprehension", "Comprehension"],
  ["fill_blank", "Fill It In"],
  ["expression", "Show It"],
] as const;

export function summarizePracticeByType(
  questions: readonly {
    id: number;
    type: keyof typeof PRACTICE_TYPE_LABELS;
    comprehension?: boolean;
  }[],
  correctIds: readonly number[],
): PracticeTypeResult[] {
  const correct = new Set(correctIds);
  return SUMMARY_ROWS.flatMap(([type, name]) => {
    const ofType = questions.filter(
      (question) =>
        (question.comprehension ? "comprehension" : question.type) === type,
    );
    if (ofType.length === 0) return [];
    return [
      {
        type,
        name,
        got: ofType.filter((question) => correct.has(question.id)).length,
        total: ofType.length,
      },
    ];
  });
}

// Back from the route param; anything unreadable shows no rows.
export function parsePracticeByType(value: unknown): PracticeTypeResult[] {
  if (typeof value !== "string") return [];
  try {
    const rows = JSON.parse(value);
    return Array.isArray(rows)
      ? rows.filter(
          (row) =>
            typeof row?.type === "string" &&
            typeof row?.name === "string" &&
            Number.isFinite(row?.got) &&
            Number.isFinite(row?.total),
        )
      : [];
  } catch {
    return [];
  }
}

export const percentOf = (part: number, whole: number) =>
  whole > 0 ? Math.round((part / whole) * 100) : 0;

export const matchCardsCaption = (languageLabel: string) =>
  `Match the ${languageLabel} card with its equivalent`;

// Ignores case, accents, spaces and punctuation.
export const normalizeAnswer = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]/g, "");

export function matchesFillAnswer(input: string, accepted: string[]): boolean {
  const answer = normalizeAnswer(input);
  return answer.length > 0 && accepted.some((a) => normalizeAnswer(a) === answer);
}

export function shuffled<T>(items: readonly T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const WORD_CHARS = "\\p{L}\\p{N}'’-";
const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// The word as written in the sentence (its exact casing), matching whole
// words only, so "bale" doesn't match inside "pibale-bale". Null if absent.
export function findWordInSentence(
  sentence: string,
  word: string,
): string | null {
  const match = new RegExp(
    `(?<![${WORD_CHARS}])${escapeRegExp(word)}(?![${WORD_CHARS}])`,
    "iu",
  ).exec(sentence);
  return match ? match[0] : null;
}

// The full English word a meaning sits in: "window" in "broken windows"
// gives "windows". Null if the sentence has no word starting with it.
export function findEnglishInSentence(
  sentence: string,
  meaning: string,
): string | null {
  const match = new RegExp(
    `(?<![${WORD_CHARS}])${escapeRegExp(meaning)}[${WORD_CHARS}]*`,
    "iu",
  ).exec(sentence);
  return match ? match[0] : null;
}

export type PracticeHighlight = {
  sentenceIndex: number;
  start: number;
  text: string; // as written in the sentence
  wordIndex: number;
};

// Look like a word plus a linker, but are different words: "itang" is
// "that" in Kapampangan, not a form of "itan" (garden).
const NOT_WORD_FORMS = ["itang"];

// A word as it can be written in the text: as stored, with a linker or
// ending added (bintana → bintanang, pangalan → pangalang), or stored with
// a linker the text may drop (kalawanging → kalawangin).
function wordFormsPattern(word: string): string {
  const forms = [word];
  if (/[aeiou]$/i.test(word)) forms.push(`${word}ng`);
  else if (/n$/i.test(word)) forms.push(`${word}g`, `${word}ing`, `${word}ang`);
  else forms.push(`${word}ing`, `${word}ang`);
  if (/ng$/i.test(word)) forms.push(word.slice(0, -1), word.slice(0, -2));
  return forms
    .sort((a, b) => b.length - a.length)
    .map(escapeRegExp)
    .join("|");
}

// Every occurrence of a chapter's practice words, whole words only, so
// "bale" never lands inside "pibale-bale". Where two words claim the same
// text, the exact form wins, then the earlier word in the list.
export function findPracticeHighlights(
  sentences: string[],
  words: string[],
): PracticeHighlight[] {
  return sentences.flatMap((sentence, sentenceIndex) => {
    const found = words.flatMap((word, wordIndex) =>
      Array.from(
        sentence.matchAll(
          new RegExp(
            `(?<![${WORD_CHARS}])(?:${wordFormsPattern(word)})(?![${WORD_CHARS}])`,
            "giu",
          ),
        ),
        (match) => ({
          sentenceIndex,
          start: match.index,
          text: match[0],
          wordIndex,
          exact: match[0].toLowerCase() === word.toLowerCase(),
        }),
      ).filter(
        (item) =>
          item.exact || !NOT_WORD_FORMS.includes(item.text.toLowerCase()),
      ),
    );

    found.sort(
      (a, b) =>
        Number(b.exact) - Number(a.exact) ||
        a.start - b.start ||
        a.wordIndex - b.wordIndex,
    );

    const kept: typeof found = [];
    for (const item of found) {
      const overlaps = kept.some(
        (other) =>
          item.start < other.start + other.text.length &&
          other.start < item.start + item.text.length,
      );
      if (!overlaps) kept.push(item);
    }

    return kept
      .sort((a, b) => a.start - b.start)
      .map(({ sentenceIndex, start, text, wordIndex }) => ({
        sentenceIndex,
        start,
        text,
        wordIndex,
      }));
  });
}
