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

// Whispers practice: 10 questions a chapter, in the same format as the Tagalog
// chapters (data/story-practice/tagalog.ts). Generated from Part 2 of
// docs/Bigkas-missing-questionnaires-draft.md. Every word appears in its chapter
// of docs/Whispers Kapampangan.pdf. DRAFT: a Kapampangan speaker should review
// the English meanings. Chapters 23-25 use the same source text (the PDF repeats
// it), so their words need updating once the correct translation is available.
// The mic is optional and Show It is never scored.

const chapter01Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "punerarya",
    correctMeaning: "funeral",
    options: ["funeral", "mourning / grief", "grandmother", "year"],
  },
  {
    id: 2,
    type: "card_match",
    word: "pamanangis",
    correctMeaning: "mourning / grief",
    options: ["funeral", "mourning / grief", "grandmother", "year"],
  },
  {
    id: 3,
    type: "card_match",
    word: "lola",
    correctMeaning: "grandmother",
    options: ["funeral", "mourning / grief", "grandmother", "year"],
  },
  {
    id: 4,
    type: "card_match",
    word: "banua",
    correctMeaning: "year",
    options: ["funeral", "mourning / grief", "grandmother", "year"],
  },
  { id: 5, type: "speak", word: "punerarya", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"pamanangis\" mean?",
    correctMeaning: "mourning / grief",
    options: ["funeral", "mourning / grief", "grandmother", "year"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"lola\"",
    correctWord: "grandmother",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Kapampangan word means \"year\"?",
    correctMeaning: "banua",
    options: ["punerarya", "pamanangis", "lola", "banua"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"punerarya\"",
    correctWord: "funeral",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"pamanangis\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter02Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "aslagang pakpak",
    correctMeaning: "east wing",
    options: ["east wing", "whisper", "photo / picture", "night"],
  },
  {
    id: 2,
    type: "card_match",
    word: "bulong",
    correctMeaning: "whisper",
    options: ["east wing", "whisper", "photo / picture", "night"],
  },
  {
    id: 3,
    type: "card_match",
    word: "litratu",
    correctMeaning: "photo / picture",
    options: ["east wing", "whisper", "photo / picture", "night"],
  },
  {
    id: 4,
    type: "card_match",
    word: "bengi",
    correctMeaning: "night",
    options: ["east wing", "whisper", "photo / picture", "night"],
  },
  { id: 5, type: "speak", word: "aslagang pakpak", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"bulong\" mean?",
    correctMeaning: "whisper",
    options: ["east wing", "whisper", "photo / picture", "night"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"litratu\"",
    correctWord: "photo / picture",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Kapampangan word means \"night\"?",
    correctMeaning: "bengi",
    options: ["aslagang pakpak", "bulong", "litratu", "bengi"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"aslagang pakpak\"",
    correctWord: "east wing",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"bulong\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter03Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "pabor",
    correctMeaning: "favor",
    options: ["favor", "town", "money", "documents"],
  },
  {
    id: 2,
    type: "card_match",
    word: "balen",
    correctMeaning: "town",
    options: ["favor", "town", "money", "documents"],
  },
  {
    id: 3,
    type: "card_match",
    word: "pera",
    correctMeaning: "money",
    options: ["favor", "town", "money", "documents"],
  },
  {
    id: 4,
    type: "card_match",
    word: "dokumentu",
    correctMeaning: "documents",
    options: ["favor", "town", "money", "documents"],
  },
  { id: 5, type: "speak", word: "pabor", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"balen\" mean?",
    correctMeaning: "town",
    options: ["favor", "town", "money", "documents"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"pera\"",
    correctWord: "money",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Kapampangan word means \"documents\"?",
    correctMeaning: "dokumentu",
    options: ["pabor", "balen", "pera", "dokumentu"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"pabor\"",
    correctWord: "favor",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"pabor\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter04Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "kusina",
    correctMeaning: "kitchen",
    options: ["kitchen", "debt", "voice", "night"],
  },
  {
    id: 2,
    type: "card_match",
    word: "utang",
    correctMeaning: "debt",
    options: ["kitchen", "debt", "voice", "night"],
  },
  {
    id: 3,
    type: "card_match",
    word: "boses",
    correctMeaning: "voice",
    options: ["kitchen", "debt", "voice", "night"],
  },
  {
    id: 4,
    type: "card_match",
    word: "bengi",
    correctMeaning: "night",
    options: ["kitchen", "debt", "voice", "night"],
  },
  { id: 5, type: "speak", word: "kusina", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"utang\" mean?",
    correctMeaning: "debt",
    options: ["kitchen", "debt", "voice", "night"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"boses\"",
    correctWord: "voice",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Kapampangan word means \"night\"?",
    correctMeaning: "bengi",
    options: ["kusina", "utang", "boses", "bengi"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"kusina\"",
    correctWord: "kitchen",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"utang\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter05Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "diary",
    correctMeaning: "diary / journal",
    options: ["diary / journal", "mirror", "kitchen", "voice"],
  },
  {
    id: 2,
    type: "card_match",
    word: "salamin",
    correctMeaning: "mirror",
    options: ["diary / journal", "mirror", "kitchen", "voice"],
  },
  {
    id: 3,
    type: "card_match",
    word: "kusina",
    correctMeaning: "kitchen",
    options: ["diary / journal", "mirror", "kitchen", "voice"],
  },
  {
    id: 4,
    type: "card_match",
    word: "boses",
    correctMeaning: "voice",
    options: ["diary / journal", "mirror", "kitchen", "voice"],
  },
  { id: 5, type: "speak", word: "diary", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"salamin\" mean?",
    correctMeaning: "mirror",
    options: ["diary / journal", "mirror", "kitchen", "voice"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"kusina\"",
    correctWord: "kitchen",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Kapampangan word means \"voice\"?",
    correctMeaning: "boses",
    options: ["diary", "salamin", "kusina", "boses"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"diary\"",
    correctWord: "diary / journal",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"salamin\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter06Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "wine",
    correctMeaning: "wine",
    options: ["wine", "guest", "ghost", "meal / dinner"],
  },
  {
    id: 2,
    type: "card_match",
    word: "bisita",
    correctMeaning: "guest",
    options: ["wine", "guest", "ghost", "meal / dinner"],
  },
  {
    id: 3,
    type: "card_match",
    word: "multo",
    correctMeaning: "ghost",
    options: ["wine", "guest", "ghost", "meal / dinner"],
  },
  {
    id: 4,
    type: "card_match",
    word: "pamangan",
    correctMeaning: "meal / dinner",
    options: ["wine", "guest", "ghost", "meal / dinner"],
  },
  { id: 5, type: "speak", word: "wine", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"bisita\" mean?",
    correctMeaning: "guest",
    options: ["wine", "guest", "ghost", "meal / dinner"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"multo\"",
    correctWord: "ghost",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Kapampangan word means \"meal / dinner\"?",
    correctMeaning: "pamangan",
    options: ["wine", "bisita", "multo", "pamangan"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"wine\"",
    correctWord: "wine",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"multo\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter07Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "kapilla",
    correctMeaning: "chapel",
    options: ["chapel", "stone", "record / document", "hand"],
  },
  {
    id: 2,
    type: "card_match",
    word: "batu",
    correctMeaning: "stone",
    options: ["chapel", "stone", "record / document", "hand"],
  },
  {
    id: 3,
    type: "card_match",
    word: "kasulatan",
    correctMeaning: "record / document",
    options: ["chapel", "stone", "record / document", "hand"],
  },
  {
    id: 4,
    type: "card_match",
    word: "gamat",
    correctMeaning: "hand",
    options: ["chapel", "stone", "record / document", "hand"],
  },
  { id: 5, type: "speak", word: "kapilla", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"batu\" mean?",
    correctMeaning: "stone",
    options: ["chapel", "stone", "record / document", "hand"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"kasulatan\"",
    correctWord: "record / document",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Kapampangan word means \"hand\"?",
    correctMeaning: "gamat",
    options: ["kapilla", "batu", "kasulatan", "gamat"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"kapilla\"",
    correctWord: "chapel",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"kapilla\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter08Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "lagyu",
    correctMeaning: "name",
    options: ["name", "voice", "inheritance", "reputation"],
  },
  {
    id: 2,
    type: "card_match",
    word: "bosis",
    correctMeaning: "voice",
    options: ["name", "voice", "inheritance", "reputation"],
  },
  {
    id: 3,
    type: "card_match",
    word: "pamana",
    correctMeaning: "inheritance",
    options: ["name", "voice", "inheritance", "reputation"],
  },
  {
    id: 4,
    type: "card_match",
    word: "reputasyun",
    correctMeaning: "reputation",
    options: ["name", "voice", "inheritance", "reputation"],
  },
  { id: 5, type: "speak", word: "lagyu", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"bosis\" mean?",
    correctMeaning: "voice",
    options: ["name", "voice", "inheritance", "reputation"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"pamana\"",
    correctWord: "inheritance",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Kapampangan word means \"reputation\"?",
    correctMeaning: "reputasyun",
    options: ["lagyu", "bosis", "pamana", "reputasyun"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"lagyu\"",
    correctWord: "name",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"bosis\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter09Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "tau-tau-tawan",
    correctMeaning: "effigies",
    options: ["effigies", "fence", "hand", "door"],
  },
  {
    id: 2,
    type: "card_match",
    word: "bakod",
    correctMeaning: "fence",
    options: ["effigies", "fence", "hand", "door"],
  },
  {
    id: 3,
    type: "card_match",
    word: "gamat",
    correctMeaning: "hand",
    options: ["effigies", "fence", "hand", "door"],
  },
  {
    id: 4,
    type: "card_match",
    word: "pinto",
    correctMeaning: "door",
    options: ["effigies", "fence", "hand", "door"],
  },
  { id: 5, type: "speak", word: "tau-tau-tawan", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"bakod\" mean?",
    correctMeaning: "fence",
    options: ["effigies", "fence", "hand", "door"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"gamat\"",
    correctWord: "hand",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Kapampangan word means \"door\"?",
    correctMeaning: "pinto",
    options: ["tau-tau-tawan", "bakod", "gamat", "pinto"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"tau-tau-tawan\"",
    correctWord: "effigies",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"tau-tau-tawan\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter10Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "larawan",
    correctMeaning: "portrait",
    options: ["portrait", "painting", "eyes", "curse"],
  },
  {
    id: 2,
    type: "card_match",
    word: "pintura",
    correctMeaning: "painting",
    options: ["portrait", "painting", "eyes", "curse"],
  },
  {
    id: 3,
    type: "card_match",
    word: "mata",
    correctMeaning: "eyes",
    options: ["portrait", "painting", "eyes", "curse"],
  },
  {
    id: 4,
    type: "card_match",
    word: "sumpa",
    correctMeaning: "curse",
    options: ["portrait", "painting", "eyes", "curse"],
  },
  { id: 5, type: "speak", word: "larawan", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"pintura\" mean?",
    correctMeaning: "painting",
    options: ["portrait", "painting", "eyes", "curse"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"mata\"",
    correctWord: "eyes",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Kapampangan word means \"curse\"?",
    correctMeaning: "sumpa",
    options: ["larawan", "pintura", "mata", "sumpa"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"larawan\"",
    correctWord: "portrait",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"sumpa\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter11Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "kasulatan",
    correctMeaning: "records / documents",
    options: ["records / documents", "church", "baptism", "lawyer"],
  },
  {
    id: 2,
    type: "card_match",
    word: "pisamban",
    correctMeaning: "church",
    options: ["records / documents", "church", "baptism", "lawyer"],
  },
  {
    id: 3,
    type: "card_match",
    word: "bautismu",
    correctMeaning: "baptism",
    options: ["records / documents", "church", "baptism", "lawyer"],
  },
  {
    id: 4,
    type: "card_match",
    word: "abogado",
    correctMeaning: "lawyer",
    options: ["records / documents", "church", "baptism", "lawyer"],
  },
  { id: 5, type: "speak", word: "kasulatan", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"pisamban\" mean?",
    correctMeaning: "church",
    options: ["records / documents", "church", "baptism", "lawyer"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"bautismu\"",
    correctWord: "baptism",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Kapampangan word means \"lawyer\"?",
    correctMeaning: "abogado",
    options: ["kasulatan", "pisamban", "bautismu", "abogado"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"kasulatan\"",
    correctWord: "records / documents",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"kasulatan\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter12Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "apui",
    correctMeaning: "fire",
    options: ["fire", "burning", "wind", "night"],
  },
  {
    id: 2,
    type: "card_match",
    word: "silbungan",
    correctMeaning: "burning",
    options: ["fire", "burning", "wind", "night"],
  },
  {
    id: 3,
    type: "card_match",
    word: "angin",
    correctMeaning: "wind",
    options: ["fire", "burning", "wind", "night"],
  },
  {
    id: 4,
    type: "card_match",
    word: "bengi",
    correctMeaning: "night",
    options: ["fire", "burning", "wind", "night"],
  },
  { id: 5, type: "speak", word: "apui", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"silbungan\" mean?",
    correctMeaning: "burning",
    options: ["fire", "burning", "wind", "night"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"angin\"",
    correctWord: "wind",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Kapampangan word means \"night\"?",
    correctMeaning: "bengi",
    options: ["apui", "silbungan", "angin", "bengi"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"apui\"",
    correctWord: "fire",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"apui\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter13Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "fiesta",
    correctMeaning: "festival",
    options: ["festival", "town", "blood", "fence"],
  },
  {
    id: 2,
    type: "card_match",
    word: "bayan",
    correctMeaning: "town",
    options: ["festival", "town", "blood", "fence"],
  },
  {
    id: 3,
    type: "card_match",
    word: "daya",
    correctMeaning: "blood",
    options: ["festival", "town", "blood", "fence"],
  },
  {
    id: 4,
    type: "card_match",
    word: "bakod",
    correctMeaning: "fence",
    options: ["festival", "town", "blood", "fence"],
  },
  { id: 5, type: "speak", word: "fiesta", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"bayan\" mean?",
    correctMeaning: "town",
    options: ["festival", "town", "blood", "fence"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"daya\"",
    correctWord: "blood",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Kapampangan word means \"fence\"?",
    correctMeaning: "bakod",
    options: ["fiesta", "bayan", "daya", "bakod"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"fiesta\"",
    correctWord: "festival",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"daya\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter14Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "sulat",
    correctMeaning: "handwriting / writing",
    options: ["handwriting / writing", "blood", "whisper", "voice"],
  },
  {
    id: 2,
    type: "card_match",
    word: "daya",
    correctMeaning: "blood",
    options: ["handwriting / writing", "blood", "whisper", "voice"],
  },
  {
    id: 3,
    type: "card_match",
    word: "bulong",
    correctMeaning: "whisper",
    options: ["handwriting / writing", "blood", "whisper", "voice"],
  },
  {
    id: 4,
    type: "card_match",
    word: "boses",
    correctMeaning: "voice",
    options: ["handwriting / writing", "blood", "whisper", "voice"],
  },
  { id: 5, type: "speak", word: "sulat", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"daya\" mean?",
    correctMeaning: "blood",
    options: ["handwriting / writing", "blood", "whisper", "voice"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"bulong\"",
    correctWord: "whisper",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Kapampangan word means \"voice\"?",
    correctMeaning: "boses",
    options: ["sulat", "daya", "bulong", "boses"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"sulat\"",
    correctWord: "handwriting / writing",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"daya\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter15Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "danaw",
    correctMeaning: "lake",
    options: ["lake", "crypt", "stone", "body"],
  },
  {
    id: 2,
    type: "card_match",
    word: "kripta",
    correctMeaning: "crypt",
    options: ["lake", "crypt", "stone", "body"],
  },
  {
    id: 3,
    type: "card_match",
    word: "batu",
    correctMeaning: "stone",
    options: ["lake", "crypt", "stone", "body"],
  },
  {
    id: 4,
    type: "card_match",
    word: "katawan",
    correctMeaning: "body",
    options: ["lake", "crypt", "stone", "body"],
  },
  { id: 5, type: "speak", word: "danaw", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"kripta\" mean?",
    correctMeaning: "crypt",
    options: ["lake", "crypt", "stone", "body"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"batu\"",
    correctWord: "stone",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Kapampangan word means \"body\"?",
    correctMeaning: "katawan",
    options: ["danaw", "kripta", "batu", "katawan"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"danaw\"",
    correctWord: "lake",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"kripta\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter16Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "pare",
    correctMeaning: "priest",
    options: ["priest", "curse", "whisper", "inheritance"],
  },
  {
    id: 2,
    type: "card_match",
    word: "sumpa",
    correctMeaning: "curse",
    options: ["priest", "curse", "whisper", "inheritance"],
  },
  {
    id: 3,
    type: "card_match",
    word: "bulong",
    correctMeaning: "whisper",
    options: ["priest", "curse", "whisper", "inheritance"],
  },
  {
    id: 4,
    type: "card_match",
    word: "pamana",
    correctMeaning: "inheritance",
    options: ["priest", "curse", "whisper", "inheritance"],
  },
  { id: 5, type: "speak", word: "pare", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"sumpa\" mean?",
    correctMeaning: "curse",
    options: ["priest", "curse", "whisper", "inheritance"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"bulong\"",
    correctWord: "whisper",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Kapampangan word means \"inheritance\"?",
    correctMeaning: "pamana",
    options: ["pare", "sumpa", "bulong", "pamana"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"pare\"",
    correctWord: "priest",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"sumpa\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter17Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "dokumentu",
    correctMeaning: "documents",
    options: ["documents", "debt", "photo / picture", "wall"],
  },
  {
    id: 2,
    type: "card_match",
    word: "utang",
    correctMeaning: "debt",
    options: ["documents", "debt", "photo / picture", "wall"],
  },
  {
    id: 3,
    type: "card_match",
    word: "litratu",
    correctMeaning: "photo / picture",
    options: ["documents", "debt", "photo / picture", "wall"],
  },
  {
    id: 4,
    type: "card_match",
    word: "pader",
    correctMeaning: "wall",
    options: ["documents", "debt", "photo / picture", "wall"],
  },
  { id: 5, type: "speak", word: "dokumentu", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"utang\" mean?",
    correctMeaning: "debt",
    options: ["documents", "debt", "photo / picture", "wall"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"litratu\"",
    correctWord: "photo / picture",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Kapampangan word means \"wall\"?",
    correctMeaning: "pader",
    options: ["dokumentu", "utang", "litratu", "pader"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"dokumentu\"",
    correctWord: "documents",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"utang\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter18Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "alusinasyun",
    correctMeaning: "hallucinations",
    options: ["hallucinations", "December", "window", "table"],
  },
  {
    id: 2,
    type: "card_match",
    word: "Disyembri",
    correctMeaning: "December",
    options: ["hallucinations", "December", "window", "table"],
  },
  {
    id: 3,
    type: "card_match",
    word: "bintana",
    correctMeaning: "window",
    options: ["hallucinations", "December", "window", "table"],
  },
  {
    id: 4,
    type: "card_match",
    word: "lamesa",
    correctMeaning: "table",
    options: ["hallucinations", "December", "window", "table"],
  },
  { id: 5, type: "speak", word: "alusinasyun", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"Disyembri\" mean?",
    correctMeaning: "December",
    options: ["hallucinations", "December", "window", "table"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"bintana\"",
    correctWord: "window",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Kapampangan word means \"table\"?",
    correctMeaning: "lamesa",
    options: ["alusinasyun", "Disyembri", "bintana", "lamesa"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"alusinasyun\"",
    correctWord: "hallucinations",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"alusinasyun\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter19Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "imbestigador",
    correctMeaning: "investigator",
    options: ["investigator", "accident", "journalist", "secret"],
  },
  {
    id: 2,
    type: "card_match",
    word: "aksidente",
    correctMeaning: "accident",
    options: ["investigator", "accident", "journalist", "secret"],
  },
  {
    id: 3,
    type: "card_match",
    word: "periodista",
    correctMeaning: "journalist",
    options: ["investigator", "accident", "journalist", "secret"],
  },
  {
    id: 4,
    type: "card_match",
    word: "lihim",
    correctMeaning: "secret",
    options: ["investigator", "accident", "journalist", "secret"],
  },
  { id: 5, type: "speak", word: "imbestigador", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"aksidente\" mean?",
    correctMeaning: "accident",
    options: ["investigator", "accident", "journalist", "secret"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"periodista\"",
    correctWord: "journalist",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Kapampangan word means \"secret\"?",
    correctMeaning: "lihim",
    options: ["imbestigador", "aksidente", "periodista", "lihim"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"imbestigador\"",
    correctWord: "investigator",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"aksidente\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter20Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "danum",
    correctMeaning: "water",
    options: ["water", "records", "voice", "contract"],
  },
  {
    id: 2,
    type: "card_match",
    word: "kasulatan",
    correctMeaning: "records",
    options: ["water", "records", "voice", "contract"],
  },
  {
    id: 3,
    type: "card_match",
    word: "boses",
    correctMeaning: "voice",
    options: ["water", "records", "voice", "contract"],
  },
  {
    id: 4,
    type: "card_match",
    word: "kasunduan",
    correctMeaning: "contract",
    options: ["water", "records", "voice", "contract"],
  },
  { id: 5, type: "speak", word: "danum", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"kasulatan\" mean?",
    correctMeaning: "records",
    options: ["water", "records", "voice", "contract"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"boses\"",
    correctWord: "voice",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Kapampangan word means \"contract\"?",
    correctMeaning: "kasunduan",
    options: ["danum", "kasulatan", "boses", "kasunduan"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"danum\"",
    correctWord: "water",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"boses\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter21Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "katutuan",
    correctMeaning: "truth",
    options: ["truth", "journalist", "public", "family"],
  },
  {
    id: 2,
    type: "card_match",
    word: "periodista",
    correctMeaning: "journalist",
    options: ["truth", "journalist", "public", "family"],
  },
  {
    id: 3,
    type: "card_match",
    word: "publiku",
    correctMeaning: "public",
    options: ["truth", "journalist", "public", "family"],
  },
  {
    id: 4,
    type: "card_match",
    word: "pamilya",
    correctMeaning: "family",
    options: ["truth", "journalist", "public", "family"],
  },
  { id: 5, type: "speak", word: "katutuan", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"periodista\" mean?",
    correctMeaning: "journalist",
    options: ["truth", "journalist", "public", "family"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"publiku\"",
    correctWord: "public",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Kapampangan word means \"family\"?",
    correctMeaning: "pamilya",
    options: ["katutuan", "periodista", "publiku", "pamilya"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"katutuan\"",
    correctWord: "truth",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"publiku\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter22Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "dyornal",
    correctMeaning: "journal",
    options: ["journal", "curse", "parish priest", "blood"],
  },
  {
    id: 2,
    type: "card_match",
    word: "sumpa",
    correctMeaning: "curse",
    options: ["journal", "curse", "parish priest", "blood"],
  },
  {
    id: 3,
    type: "card_match",
    word: "kura",
    correctMeaning: "parish priest",
    options: ["journal", "curse", "parish priest", "blood"],
  },
  {
    id: 4,
    type: "card_match",
    word: "daya",
    correctMeaning: "blood",
    options: ["journal", "curse", "parish priest", "blood"],
  },
  { id: 5, type: "speak", word: "dyornal", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"sumpa\" mean?",
    correctMeaning: "curse",
    options: ["journal", "curse", "parish priest", "blood"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"kura\"",
    correctWord: "parish priest",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Kapampangan word means \"blood\"?",
    correctMeaning: "daya",
    options: ["dyornal", "sumpa", "kura", "daya"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"dyornal\"",
    correctWord: "journal",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"sumpa\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter23Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "sikretu",
    correctMeaning: "secret",
    options: ["secret", "whisper", "fear", "public"],
  },
  {
    id: 2,
    type: "card_match",
    word: "bulong",
    correctMeaning: "whisper",
    options: ["secret", "whisper", "fear", "public"],
  },
  {
    id: 3,
    type: "card_match",
    word: "takut",
    correctMeaning: "fear",
    options: ["secret", "whisper", "fear", "public"],
  },
  {
    id: 4,
    type: "card_match",
    word: "publiku",
    correctMeaning: "public",
    options: ["secret", "whisper", "fear", "public"],
  },
  { id: 5, type: "speak", word: "sikretu", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"bulong\" mean?",
    correctMeaning: "whisper",
    options: ["secret", "whisper", "fear", "public"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"takut\"",
    correctWord: "fear",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Kapampangan word means \"public\"?",
    correctMeaning: "publiku",
    options: ["sikretu", "bulong", "takut", "publiku"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"sikretu\"",
    correctWord: "secret",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"takut\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter24Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "koro",
    correctMeaning: "chorus",
    options: ["chorus", "voice", "kitchen", "contract"],
  },
  {
    id: 2,
    type: "card_match",
    word: "boses",
    correctMeaning: "voice",
    options: ["chorus", "voice", "kitchen", "contract"],
  },
  {
    id: 3,
    type: "card_match",
    word: "kusina",
    correctMeaning: "kitchen",
    options: ["chorus", "voice", "kitchen", "contract"],
  },
  {
    id: 4,
    type: "card_match",
    word: "kasunduan",
    correctMeaning: "contract",
    options: ["chorus", "voice", "kitchen", "contract"],
  },
  { id: 5, type: "speak", word: "koro", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"boses\" mean?",
    correctMeaning: "voice",
    options: ["chorus", "voice", "kitchen", "contract"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"kusina\"",
    correctWord: "kitchen",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Kapampangan word means \"contract\"?",
    correctMeaning: "kasunduan",
    options: ["koro", "boses", "kusina", "kasunduan"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"koro\"",
    correctWord: "chorus",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"koro\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter25Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "kasunduan",
    correctMeaning: "contract",
    options: ["contract", "lake", "garden", "photo / picture"],
  },
  {
    id: 2,
    type: "card_match",
    word: "danaw",
    correctMeaning: "lake",
    options: ["contract", "lake", "garden", "photo / picture"],
  },
  {
    id: 3,
    type: "card_match",
    word: "tanaman",
    correctMeaning: "garden",
    options: ["contract", "lake", "garden", "photo / picture"],
  },
  {
    id: 4,
    type: "card_match",
    word: "litratu",
    correctMeaning: "photo / picture",
    options: ["contract", "lake", "garden", "photo / picture"],
  },
  { id: 5, type: "speak", word: "kasunduan", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"danaw\" mean?",
    correctMeaning: "lake",
    options: ["contract", "lake", "garden", "photo / picture"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"tanaman\"",
    correctWord: "garden",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Kapampangan word means \"photo / picture\"?",
    correctMeaning: "litratu",
    options: ["kasunduan", "danaw", "tanaman", "litratu"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"kasunduan\"",
    correctWord: "contract",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"kasunduan\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter26Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "pamana",
    correctMeaning: "inheritance",
    options: ["inheritance", "fear", "silence", "letter"],
  },
  {
    id: 2,
    type: "card_match",
    word: "katakutan",
    correctMeaning: "fear",
    options: ["inheritance", "fear", "silence", "letter"],
  },
  {
    id: 3,
    type: "card_match",
    word: "katahimikan",
    correctMeaning: "silence",
    options: ["inheritance", "fear", "silence", "letter"],
  },
  {
    id: 4,
    type: "card_match",
    word: "sulat",
    correctMeaning: "letter",
    options: ["inheritance", "fear", "silence", "letter"],
  },
  { id: 5, type: "speak", word: "pamana", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"katakutan\" mean?",
    correctMeaning: "fear",
    options: ["inheritance", "fear", "silence", "letter"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"katahimikan\"",
    correctWord: "silence",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Kapampangan word means \"letter\"?",
    correctMeaning: "sulat",
    options: ["pamana", "katakutan", "katahimikan", "sulat"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"pamana\"",
    correctWord: "inheritance",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"katakutan\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter27Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "api",
    correctMeaning: "fire",
    options: ["fire", "police", "body", "town"],
  },
  {
    id: 2,
    type: "card_match",
    word: "pulis",
    correctMeaning: "police",
    options: ["fire", "police", "body", "town"],
  },
  {
    id: 3,
    type: "card_match",
    word: "katawan",
    correctMeaning: "body",
    options: ["fire", "police", "body", "town"],
  },
  {
    id: 4,
    type: "card_match",
    word: "balen",
    correctMeaning: "town",
    options: ["fire", "police", "body", "town"],
  },
  { id: 5, type: "speak", word: "api", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"pulis\" mean?",
    correctMeaning: "police",
    options: ["fire", "police", "body", "town"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"katawan\"",
    correctWord: "body",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Kapampangan word means \"town\"?",
    correctMeaning: "balen",
    options: ["api", "pulis", "katawan", "balen"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"api\"",
    correctWord: "fire",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"api\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter28Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "sumpa",
    correctMeaning: "curse",
    options: ["curse", "ancestors", "chapel", "painting"],
  },
  {
    id: 2,
    type: "card_match",
    word: "ninuno",
    correctMeaning: "ancestors",
    options: ["curse", "ancestors", "chapel", "painting"],
  },
  {
    id: 3,
    type: "card_match",
    word: "kapilya",
    correctMeaning: "chapel",
    options: ["curse", "ancestors", "chapel", "painting"],
  },
  {
    id: 4,
    type: "card_match",
    word: "pintura",
    correctMeaning: "painting",
    options: ["curse", "ancestors", "chapel", "painting"],
  },
  { id: 5, type: "speak", word: "sumpa", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"ninuno\" mean?",
    correctMeaning: "ancestors",
    options: ["curse", "ancestors", "chapel", "painting"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"kapilya\"",
    correctWord: "chapel",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Kapampangan word means \"painting\"?",
    correctMeaning: "pintura",
    options: ["sumpa", "ninuno", "kapilya", "pintura"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"sumpa\"",
    correctWord: "curse",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"sumpa\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter29Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "api",
    correctMeaning: "fire",
    options: ["fire", "room", "afraid / fear", "morning"],
  },
  {
    id: 2,
    type: "card_match",
    word: "kuartu",
    correctMeaning: "room",
    options: ["fire", "room", "afraid / fear", "morning"],
  },
  {
    id: 3,
    type: "card_match",
    word: "takut",
    correctMeaning: "afraid / fear",
    options: ["fire", "room", "afraid / fear", "morning"],
  },
  {
    id: 4,
    type: "card_match",
    word: "abak",
    correctMeaning: "morning",
    options: ["fire", "room", "afraid / fear", "morning"],
  },
  { id: 5, type: "speak", word: "api", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"kuartu\" mean?",
    correctMeaning: "room",
    options: ["fire", "room", "afraid / fear", "morning"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"takut\"",
    correctWord: "afraid / fear",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Kapampangan word means \"morning\"?",
    correctMeaning: "abak",
    options: ["api", "kuartu", "takut", "abak"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"api\"",
    correctWord: "fire",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"takut\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter30Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "utang",
    correctMeaning: "debt",
    options: ["debt", "truth", "ancestor", "chorus"],
  },
  {
    id: 2,
    type: "card_match",
    word: "katutuan",
    correctMeaning: "truth",
    options: ["debt", "truth", "ancestor", "chorus"],
  },
  {
    id: 3,
    type: "card_match",
    word: "ninunu",
    correctMeaning: "ancestor",
    options: ["debt", "truth", "ancestor", "chorus"],
  },
  {
    id: 4,
    type: "card_match",
    word: "koro",
    correctMeaning: "chorus",
    options: ["debt", "truth", "ancestor", "chorus"],
  },
  { id: 5, type: "speak", word: "utang", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"katutuan\" mean?",
    correctMeaning: "truth",
    options: ["debt", "truth", "ancestor", "chorus"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"ninunu\"",
    correctWord: "ancestor",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Kapampangan word means \"chorus\"?",
    correctMeaning: "koro",
    options: ["utang", "katutuan", "ninunu", "koro"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"utang\"",
    correctWord: "debt",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"katutuan\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter31Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "api",
    correctMeaning: "fire",
    options: ["fire", "name", "truth", "whisper"],
  },
  {
    id: 2,
    type: "card_match",
    word: "lagyu",
    correctMeaning: "name",
    options: ["fire", "name", "truth", "whisper"],
  },
  {
    id: 3,
    type: "card_match",
    word: "katutuan",
    correctMeaning: "truth",
    options: ["fire", "name", "truth", "whisper"],
  },
  {
    id: 4,
    type: "card_match",
    word: "bulong",
    correctMeaning: "whisper",
    options: ["fire", "name", "truth", "whisper"],
  },
  { id: 5, type: "speak", word: "api", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"lagyu\" mean?",
    correctMeaning: "name",
    options: ["fire", "name", "truth", "whisper"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"katutuan\"",
    correctWord: "truth",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Kapampangan word means \"whisper\"?",
    correctMeaning: "bulong",
    options: ["api", "lagyu", "katutuan", "bulong"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"api\"",
    correctWord: "fire",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"bulong\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

export const kapampanganStoryPracticeChapters: StoryPracticeChapter[] = [
  { dialect: "kapampangan", chapter: 1, lessonId: "story_kapampangan_1", questions: chapter01Questions },
  { dialect: "kapampangan", chapter: 2, lessonId: "story_kapampangan_2", questions: chapter02Questions },
  { dialect: "kapampangan", chapter: 3, lessonId: "story_kapampangan_3", questions: chapter03Questions },
  { dialect: "kapampangan", chapter: 4, lessonId: "story_kapampangan_4", questions: chapter04Questions },
  { dialect: "kapampangan", chapter: 5, lessonId: "story_kapampangan_5", questions: chapter05Questions },
  { dialect: "kapampangan", chapter: 6, lessonId: "story_kapampangan_6", questions: chapter06Questions },
  { dialect: "kapampangan", chapter: 7, lessonId: "story_kapampangan_7", questions: chapter07Questions },
  { dialect: "kapampangan", chapter: 8, lessonId: "story_kapampangan_8", questions: chapter08Questions },
  { dialect: "kapampangan", chapter: 9, lessonId: "story_kapampangan_9", questions: chapter09Questions },
  { dialect: "kapampangan", chapter: 10, lessonId: "story_kapampangan_10", questions: chapter10Questions },
  { dialect: "kapampangan", chapter: 11, lessonId: "story_kapampangan_11", questions: chapter11Questions },
  { dialect: "kapampangan", chapter: 12, lessonId: "story_kapampangan_12", questions: chapter12Questions },
  { dialect: "kapampangan", chapter: 13, lessonId: "story_kapampangan_13", questions: chapter13Questions },
  { dialect: "kapampangan", chapter: 14, lessonId: "story_kapampangan_14", questions: chapter14Questions },
  { dialect: "kapampangan", chapter: 15, lessonId: "story_kapampangan_15", questions: chapter15Questions },
  { dialect: "kapampangan", chapter: 16, lessonId: "story_kapampangan_16", questions: chapter16Questions },
  { dialect: "kapampangan", chapter: 17, lessonId: "story_kapampangan_17", questions: chapter17Questions },
  { dialect: "kapampangan", chapter: 18, lessonId: "story_kapampangan_18", questions: chapter18Questions },
  { dialect: "kapampangan", chapter: 19, lessonId: "story_kapampangan_19", questions: chapter19Questions },
  { dialect: "kapampangan", chapter: 20, lessonId: "story_kapampangan_20", questions: chapter20Questions },
  { dialect: "kapampangan", chapter: 21, lessonId: "story_kapampangan_21", questions: chapter21Questions },
  { dialect: "kapampangan", chapter: 22, lessonId: "story_kapampangan_22", questions: chapter22Questions },
  { dialect: "kapampangan", chapter: 23, lessonId: "story_kapampangan_23", questions: chapter23Questions },
  { dialect: "kapampangan", chapter: 24, lessonId: "story_kapampangan_24", questions: chapter24Questions },
  { dialect: "kapampangan", chapter: 25, lessonId: "story_kapampangan_25", questions: chapter25Questions },
  { dialect: "kapampangan", chapter: 26, lessonId: "story_kapampangan_26", questions: chapter26Questions },
  { dialect: "kapampangan", chapter: 27, lessonId: "story_kapampangan_27", questions: chapter27Questions },
  { dialect: "kapampangan", chapter: 28, lessonId: "story_kapampangan_28", questions: chapter28Questions },
  { dialect: "kapampangan", chapter: 29, lessonId: "story_kapampangan_29", questions: chapter29Questions },
  { dialect: "kapampangan", chapter: 30, lessonId: "story_kapampangan_30", questions: chapter30Questions },
  { dialect: "kapampangan", chapter: 31, lessonId: "story_kapampangan_31", questions: chapter31Questions },
];
