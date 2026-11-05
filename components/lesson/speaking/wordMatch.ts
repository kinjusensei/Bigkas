// Word-by-word comparison of what the recognizer heard with the target
// phrase. Forgiving on purpose: accents, o/u and e/i swaps, missing
// hyphens and small spelling differences still count. Practice feedback
// only — never a score.

export type WordStatus = "matched" | "close" | "missed";

export type WordResult = {
  word: string;
  status: WordStatus;
  heard?: string;
};

const MATCHED_SIMILARITY = 0.75;
const CLOSE_SIMILARITY = 0.45;

export const normalizeWord = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z]/g, "");

// Sounds Tagalog speakers and recognizers swap freely.
const fold = (value: string) =>
  value.replace(/o/g, "u").replace(/e/g, "i").replace(/(.)\1+/g, "$1");

const splitWords = (text: string) =>
  text.split(/\s+/).map((word) => word.trim()).filter(Boolean);

function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  let previous = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let i = 1; i <= a.length; i += 1) {
    const current = [i];
    for (let j = 1; j <= b.length; j += 1) {
      current[j] = Math.min(
        previous[j] + 1,
        current[j - 1] + 1,
        previous[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
    }
    previous = current;
  }
  return previous[b.length];
}

export function wordSimilarity(target: string, heard: string): number {
  const a = fold(normalizeWord(target));
  const b = fold(normalizeWord(heard));
  if (!a || !b) return 0;
  return 1 - levenshtein(a, b) / Math.max(a.length, b.length);
}

export function matchWords(target: string, heard: string): WordResult[] {
  const targetWords = splitWords(target);
  const heardWords = splitWords(heard).filter((word) => normalizeWord(word));
  let pointer = 0;

  return targetWords.map((word) => {
    let best = { similarity: 0, index: -1, span: 1, heard: "" };
    // Look a few words ahead; also try two heard words joined, for
    // hyphenated targets like "Taga-Pampanga" heard as "taga pampanga".
    for (let index = pointer; index < Math.min(pointer + 3, heardWords.length); index += 1) {
      for (const span of [1, 2]) {
        if (index + span > heardWords.length) continue;
        const candidate = heardWords.slice(index, index + span).join("");
        const similarity = wordSimilarity(word, candidate);
        if (similarity > best.similarity) {
          best = {
            similarity,
            index,
            span,
            heard: heardWords.slice(index, index + span).join(" "),
          };
        }
      }
    }

    if (best.index >= 0 && best.similarity >= CLOSE_SIMILARITY) {
      pointer = best.index + best.span;
      return {
        word,
        status: best.similarity >= MATCHED_SIMILARITY ? "matched" : "close",
        heard: best.heard,
      };
    }
    return { word, status: "missed" };
  });
}

// Splits a word into syllables with the simple Tagalog CV / CVC pattern
// ("ng" counts as one consonant). Used for tips when the lesson has no
// authored respelling for the word.
export function syllabify(word: string): string {
  const letters = normalizeWord(word);
  if (!letters) return word;

  const units: string[] = [];
  for (let index = 0; index < letters.length; index += 1) {
    if (letters[index] === "n" && letters[index + 1] === "g") {
      units.push("ng");
      index += 1;
    } else {
      units.push(letters[index]);
    }
  }

  const isVowel = (unit: string) => "aeiou".includes(unit);
  const vowelIndexes = units
    .map((unit, index) => (isVowel(unit) ? index : -1))
    .filter((index) => index >= 0);
  if (vowelIndexes.length <= 1) return letters;

  const syllables: string[] = [];
  let start = 0;
  for (let v = 0; v < vowelIndexes.length - 1; v += 1) {
    const current = vowelIndexes[v];
    const next = vowelIndexes[v + 1];
    const consonants = next - current - 1;
    // One consonant starts the next syllable; with two or more, the first
    // closes this syllable.
    const end = consonants <= 1 ? current + 1 : current + 2;
    syllables.push(units.slice(start, end).join(""));
    start = end;
  }
  syllables.push(units.slice(start).join(""));
  return syllables.join("-");
}

// word (normalized) → respelling, from vocabulary entries whose
// respelling has one group per word.
export function buildRespellingMap(
  entries: { term: string; pronunciation?: string }[],
): Record<string, string> {
  const map: Record<string, string> = {};
  entries.forEach((entry) => {
    const pronunciation = entry.pronunciation?.trim();
    if (!pronunciation) return;
    const words = splitWords(entry.term);
    const groups = splitWords(pronunciation);
    if (words.length !== groups.length) return;
    words.forEach((word, index) => {
      const key = normalizeWord(word);
      if (key && !map[key]) map[key] = groups[index];
    });
  });
  return map;
}
