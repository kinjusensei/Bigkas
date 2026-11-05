import type { DialectTermAnnotation } from "../storyData";
import type { StoryPracticeChapter, StoryPracticeQuestion } from "./types";

type Entry = { word: string; meaning: string; match: string; paragraphIndex?: number; dialectMatch?: string; explanation: string };

const entries: Record<number, Entry> = {
  1: { word: "Abak", meaning: "Morning", match: "morning", paragraphIndex: 4, dialectMatch: "abak", explanation: 'The source uses "abak" for morning.' },
  2: { word: "Bale", meaning: "House", match: "house", dialectMatch: "bale", explanation: 'The source uses "bale" for house.' },
  3: { word: "Pamagsalpant", meaning: "Fall / decline", match: "fall", dialectMatch: "pamagsalpant", explanation: 'The source uses "pamagsalpant" for the family\'s fall.' },
  4: { word: "Boses", meaning: "Voice", match: "voice", dialectMatch: "boses", explanation: 'The source uses "boses" for voice.' },
  5: { word: "Diary", meaning: "Journal / diary", match: "journal", paragraphIndex: 2, explanation: 'The chapter heading identifies this as a diary; the body translation is missing.' },
  6: { word: "Wine", meaning: "Wine", match: "wine", dialectMatch: "wine", explanation: 'The source retains "wine" in the Kapampangan passage.' },
  7: { word: "Capilla", meaning: "Chapel", match: "chapel", dialectMatch: "capilla", explanation: 'The source uses "capilla" for chapel.' },
  8: { word: "Lagyu", meaning: "Name", match: "named", dialectMatch: "lagyu", explanation: 'The source uses "lagyu" for name.' },
  9: { word: "Tau-tau-tawan", meaning: "Effigies", match: "effigies", dialectMatch: "tau-tau-tawan", explanation: 'The source uses "tau-tau-tawan" for the effigies.' },
  10: { word: "Larawan", meaning: "Portrait", match: "portrait", dialectMatch: "larawan", explanation: 'The source uses "larawan" for portrait.' },
  11: { word: "Kasulatan", meaning: "Records / documents", match: "records", dialectMatch: "kasulatan", explanation: 'The source uses "kasulatan" for records.' },
  12: { word: "Silbungan", meaning: "Burned / burning", match: "burned", dialectMatch: "silbungan", explanation: 'The source uses "silbungan" in the burned archive passage.' },
  13: { word: "Fiesta", meaning: "Festival", match: "festival", dialectMatch: "fiesta", explanation: 'The source uses "fiesta" for festival.' },
  14: { word: "Pamag-salita", meaning: "Phrasing / speech", match: "phrasing", explanation: 'The source discusses phrasing; the first Kapampangan translation entry is missing.' },
  15: { word: "Danaw", meaning: "Lake", match: "lake", dialectMatch: "danaw", explanation: 'The source uses "danaw" for lake.' },
  16: { word: "Pare", meaning: "Priest", match: "priest", dialectMatch: "pare", explanation: 'The source uses "pare" for priest.' },
  17: { word: "Dokumentu", meaning: "Documents", match: "documents", dialectMatch: "dokumentu", explanation: 'The source uses "dokumentu" for documents.' },
  18: { word: "Disyembri", meaning: "December", match: "December", dialectMatch: "Disyembri", explanation: 'The source uses "Disyembri" for December.' },
  19: { word: "Imbestigador", meaning: "Investigator", match: "investigator", dialectMatch: "imbestigador", explanation: 'The source uses "imbestigador" for investigator.' },
  20: { word: "Kasulatan", meaning: "Record / document", match: "record", dialectMatch: "kasulatan", explanation: 'The source uses "kasulatan" for the record.' },
  21: { word: "Periodista", meaning: "Journalist", match: "journalist", dialectMatch: "periodista", explanation: 'The source uses "periodista" for journalist.' },
  22: { word: "Dyornal", meaning: "Journal", match: "journal", dialectMatch: "dyornal", explanation: 'The source uses "dyornal" for journal.' },
  23: { word: "Kasulatan", meaning: "Files / documents", match: "files", dialectMatch: "kasulatan", explanation: 'The source uses "kasulatan" for files.' },
  24: { word: "Bulong", meaning: "Whispers", match: "whispers", dialectMatch: "bulong", explanation: 'The source uses "bulong" for whispers.' },
  25: { word: "Kasunduan", meaning: "Contract", match: "contract", dialectMatch: "kasunduan", explanation: 'The source uses "kasunduan" for contract.' },
  26: { word: "Pamag-bayyu", meaning: "Change", match: "change", dialectMatch: "pamag-bayyu", explanation: 'The source uses "pamag-bayyu" for change.' },
  27: { word: "Balen", meaning: "Town", match: "townspeople", dialectMatch: "balen", explanation: 'The source uses "balen" for town.' },
  28: { word: "Sumpa", meaning: "Curse", match: "curse", paragraphIndex: 1, dialectMatch: "sumpa", explanation: 'The source uses "sumpa" for curse.' },
  29: { word: "Bosis", meaning: "Voice", match: "voices", paragraphIndex: 1, explanation: 'The source uses "bosis" for the voices.' },
  30: { word: "Bosis", meaning: "Voice", match: "voice", dialectMatch: "bosis", explanation: 'The source uses "bosis" for voice.' },
  31: { word: "Api", meaning: "Fire", match: "fire", dialectMatch: "api", explanation: 'The source uses "api" for fire.' },
};

export const kapampanganVocabularyByChapter: Record<number, DialectTermAnnotation[]> = Object.fromEntries(
  Object.entries(entries).map(([chapter, entry]) => [Number(chapter), [{
    paragraphIndex: entry.paragraphIndex ?? 0,
    match: entry.match,
    ...(entry.dialectMatch ? { dialectMatch: entry.dialectMatch } : {}),
    dialect: entry.word,
    explanation: entry.explanation,
    practiceQuestionIds: [1],
  }]]),
) as Record<number, DialectTermAnnotation[]>;

function question(chapter: number): StoryPracticeQuestion[] {
  const entry = entries[chapter];
  return [{
    id: 1,
    type: "card_match",
    word: entry.word,
    correctMeaning: entry.meaning,
    options: [entry.meaning, "House", "Water", "Night"].filter((value, index, values) => values.indexOf(value) === index).slice(0, 4),
  }];
}

export const kapampanganStoryPracticeChapters: StoryPracticeChapter[] = Array.from(
  { length: 31 },
  (_, index) => ({
    dialect: "kapampangan" as const,
    chapter: index + 1,
    lessonId: `story_kapampangan_${index + 1}`,
    questions: question(index + 1),
  }),
);
