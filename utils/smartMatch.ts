// Smart matching for spoken answers. Step 1: normalize words so that
// differences that never change meaning (capitals, accents, punctuation,
// spaces) don't make a correct answer look wrong.

export function normalizeWord(value: string): string {
  return (
    value
      // 1. Lowercase: "Kumusta" → "kumusta"
      .toLowerCase()
      // 2. Split letters from their accents: "á" → "a" + "´"
      .normalize("NFD")
      // 3. Delete the accent marks (Unicode range U+0300–U+036F)
      .replace(/[\u0300-\u036f]/g, "")
      // 4. Delete anything that isn't a letter, number or space
      //    (punctuation, hyphens, apostrophes): "kasurob-on" → "kasurobon"
      .replace(/[^a-z0-9\s]/g, "")
      // 5. Turn runs of spaces/tabs into one space
      .replace(/\s+/g, " ")
      // 6. Remove spaces at the start and end
      .trim()
  );
}

// Step 2: a "sound key" — sound-alike letters become one letter, so
// spellings the speech service mixes up compare as equal.
// Order matters: two-letter groups, then single letters, then doubles.
export function soundKey(value: string): string {
  return (
    normalizeWord(value)
      // Two-letter groups first
      .replace(/ch/g, "ts") // chinelas → tsinelas
      .replace(/qu/g, "k") //  queso → keso
      // Single letters
      .replace(/c/g, "k") //   cumusta → kumusta
      .replace(/f/g, "p") //   familia → pamilia
      .replace(/v/g, "b") //   vaca → baka
      .replace(/z/g, "s") //   zapatos → sapatos
      .replace(/u/g, "o") //   kumusta → komosta
      .replace(/e/g, "i") //   bengi → bingi
      // Collapse doubled letters last: maaga → maga, uo → oo → o
      .replace(/(.)\1+/g, "$1")
  );
}

// Step 3: the smallest number of single-letter edits (insert, delete,
// substitute) that turn `a` into `b` — the Levenshtein distance.
export function editDistance(a: string, b: string): number {
  // previous[j] = edits to turn the first i-1 letters of a into the first j of b
  let previous = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    const current = [i]; // turning i letters into 0 letters = i deletions
    for (let j = 1; j <= b.length; j++) {
      const substitute = previous[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1);
      const del = previous[j] + 1;
      const insert = current[j - 1] + 1;
      current[j] = Math.min(substitute, del, insert);
    }
    previous = current;
  }
  return previous[b.length];
}

// How many mistakes a word of this length may have and still count.
export function allowedMistakes(length: number): number {
  if (length <= 5) return 0;
  if (length <= 9) return 1;
  return 2;
}

// Does what the learner said (heard) match the expected word?
export function wordsMatch(heard: string, expected: string): boolean {
  const a = soundKey(heard);
  const b = soundKey(expected);
  if (!a || !b) return false;
  if (a === b) return true;
  return editDistance(a, b) <= allowedMistakes(b.length);
}

// Step 4a: accepted variants, one list per language. The key is the expected
// word; the list holds other forms that also count. Native speakers of each
// language add entries here — no logic changes needed.
//
// Only add forms a native speaker has confirmed. A wrong entry makes the app
// accept a wrong word.
export type SpeechLanguage = "tagalog" | "kapampangan" | "waray";

export const ACCEPTED_VARIANTS: Record<
  SpeechLanguage,
  Record<string, string[]>
> = {
  tagalog: {
    kumusta: ["kamusta", "musta"],
    // salamat: [],
  },
  kapampangan: {
    // The fil-PH speech service often writes the Tagalog spelling.
    kumusta: ["kamusta"],
    // add Kapampangan words here after a native speaker checks them
  },
  waray: {
    // add Waray words here after a native speaker checks them
  },
};

// wordsMatch, plus the accepted variants of the expected word in this language.
export function wordMatchesWithVariants(
  heard: string,
  expected: string,
  language: SpeechLanguage,
): boolean {
  if (wordsMatch(heard, expected)) return true;
  const variants = ACCEPTED_VARIANTS[language][normalizeWord(expected)] ?? [];
  return variants.some((variant) => wordsMatch(heard, variant));
}

// One expected word and whether the learner said it.
export type WordResult = { word: string; matched: boolean };

// Step 4b: match a phrase word by word, in order. Extra heard words
// (like "po") are allowed. `matched` is true when every expected word was found.
export function matchPhrase(
  heard: string,
  expected: string,
  language: SpeechLanguage,
): { matched: boolean; words: WordResult[] } {
  const heardWords = normalizeWord(heard).split(" ").filter(Boolean);
  const expectedWords = expected.trim().split(/\s+/).filter(Boolean);

  let searchFrom = 0; // keeps the order: only look after the last match
  const words = expectedWords.map((word) => {
    for (let i = searchFrom; i < heardWords.length; i++) {
      if (wordMatchesWithVariants(heardWords[i], word, language)) {
        searchFrom = i + 1;
        return { word, matched: true };
      }
    }
    return { word, matched: false };
  });

  return { matched: words.length > 0 && words.every((w) => w.matched), words };
}
