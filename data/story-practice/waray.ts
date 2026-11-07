import type { StoryPracticeChapter, StoryPracticeQuestion } from "./types";

// Waray Whispers practice: 10 questions a chapter, in the same format as the
// Tagalog chapters (data/story-practice/tagalog.ts). Generated from Part 3 of
// docs/Bigkas-missing-questionnaires-draft.md. Every word appears in its chapter
// of docs/Whisper Waray Translation.pdf. DRAFT: a Waray speaker should review the
// English meanings before the Waray Hard story level is unlocked.
// The mic is optional and Show It is never scored.

const chapter01Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "lubong",
    correctMeaning: "funeral",
    options: ["funeral", "grief", "mist / fog", "heir"],
  },
  {
    id: 2,
    type: "card_match",
    word: "kasurob-on",
    correctMeaning: "grief",
    options: ["funeral", "grief", "mist / fog", "heir"],
  },
  {
    id: 3,
    type: "card_match",
    word: "dampog",
    correctMeaning: "mist / fog",
    options: ["funeral", "grief", "mist / fog", "heir"],
  },
  {
    id: 4,
    type: "card_match",
    word: "manurunod",
    correctMeaning: "heir",
    options: ["funeral", "grief", "mist / fog", "heir"],
  },
  { id: 5, type: "speak", word: "lubong", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"kasurob-on\" mean?",
    correctMeaning: "grief",
    options: ["funeral", "grief", "mist / fog", "heir"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"dampog\"",
    correctWord: "mist / fog",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Waray word means \"heir\"?",
    correctMeaning: "manurunod",
    options: ["lubong", "kasurob-on", "dampog", "manurunod"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"lubong\"",
    correctWord: "funeral",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"kasurob-on\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter02Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "nakatrangka",
    correctMeaning: "locked",
    options: ["locked", "journal", "picture / portrait", "fear"],
  },
  {
    id: 2,
    type: "card_match",
    word: "journal",
    correctMeaning: "journal",
    options: ["locked", "journal", "picture / portrait", "fear"],
  },
  {
    id: 3,
    type: "card_match",
    word: "letrato",
    correctMeaning: "picture / portrait",
    options: ["locked", "journal", "picture / portrait", "fear"],
  },
  {
    id: 4,
    type: "card_match",
    word: "kahadlok",
    correctMeaning: "fear",
    options: ["locked", "journal", "picture / portrait", "fear"],
  },
  { id: 5, type: "speak", word: "nakatrangka", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"journal\" mean?",
    correctMeaning: "journal",
    options: ["locked", "journal", "picture / portrait", "fear"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"letrato\"",
    correctWord: "picture / portrait",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Waray word means \"fear\"?",
    correctMeaning: "kahadlok",
    options: ["nakatrangka", "journal", "letrato", "kahadlok"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"nakatrangka\"",
    correctWord: "locked",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"kahadlok\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter03Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "bungto",
    correctMeaning: "town",
    options: ["town", "documents", "money", "people"],
  },
  {
    id: 2,
    type: "card_match",
    word: "dokumento",
    correctMeaning: "documents",
    options: ["town", "documents", "money", "people"],
  },
  {
    id: 3,
    type: "card_match",
    word: "kwarta",
    correctMeaning: "money",
    options: ["town", "documents", "money", "people"],
  },
  {
    id: 4,
    type: "card_match",
    word: "tawo",
    correctMeaning: "people",
    options: ["town", "documents", "money", "people"],
  },
  { id: 5, type: "speak", word: "bungto", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"dokumento\" mean?",
    correctMeaning: "documents",
    options: ["town", "documents", "money", "people"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"kwarta\"",
    correctWord: "money",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Waray word means \"people\"?",
    correctMeaning: "tawo",
    options: ["bungto", "dokumento", "kwarta", "tawo"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"bungto\"",
    correctWord: "town",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"bungto\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter04Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "kusina",
    correctMeaning: "kitchen",
    options: ["kitchen", "voice", "debt", "flame"],
  },
  {
    id: 2,
    type: "card_match",
    word: "tingog",
    correctMeaning: "voice",
    options: ["kitchen", "voice", "debt", "flame"],
  },
  {
    id: 3,
    type: "card_match",
    word: "utang",
    correctMeaning: "debt",
    options: ["kitchen", "voice", "debt", "flame"],
  },
  {
    id: 4,
    type: "card_match",
    word: "siga",
    correctMeaning: "flame",
    options: ["kitchen", "voice", "debt", "flame"],
  },
  { id: 5, type: "speak", word: "kusina", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"tingog\" mean?",
    correctMeaning: "voice",
    options: ["kitchen", "voice", "debt", "flame"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"utang\"",
    correctWord: "debt",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Waray word means \"flame\"?",
    correctMeaning: "siga",
    options: ["kusina", "tingog", "utang", "siga"],
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
    word: "journal",
    correctMeaning: "journal",
    options: ["journal", "evidence", "blood", "plan"],
  },
  {
    id: 2,
    type: "card_match",
    word: "ebidensya",
    correctMeaning: "evidence",
    options: ["journal", "evidence", "blood", "plan"],
  },
  {
    id: 3,
    type: "card_match",
    word: "dugo",
    correctMeaning: "blood",
    options: ["journal", "evidence", "blood", "plan"],
  },
  {
    id: 4,
    type: "card_match",
    word: "plano",
    correctMeaning: "plan",
    options: ["journal", "evidence", "blood", "plan"],
  },
  { id: 5, type: "speak", word: "journal", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"ebidensya\" mean?",
    correctMeaning: "evidence",
    options: ["journal", "evidence", "blood", "plan"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"dugo\"",
    correctWord: "blood",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Waray word means \"plan\"?",
    correctMeaning: "plano",
    options: ["journal", "ebidensya", "dugo", "plano"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"journal\"",
    correctWord: "journal",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"dugo\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter06Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "bino",
    correctMeaning: "wine",
    options: ["wine", "guest", "ghost", "candle"],
  },
  {
    id: 2,
    type: "card_match",
    word: "bisita",
    correctMeaning: "guest",
    options: ["wine", "guest", "ghost", "candle"],
  },
  {
    id: 3,
    type: "card_match",
    word: "multo",
    correctMeaning: "ghost",
    options: ["wine", "guest", "ghost", "candle"],
  },
  {
    id: 4,
    type: "card_match",
    word: "kandila",
    correctMeaning: "candle",
    options: ["wine", "guest", "ghost", "candle"],
  },
  { id: 5, type: "speak", word: "bino", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"bisita\" mean?",
    correctMeaning: "guest",
    options: ["wine", "guest", "ghost", "candle"],
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
    word: "Which Waray word means \"candle\"?",
    correctMeaning: "kandila",
    options: ["bino", "bisita", "multo", "kandila"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"bino\"",
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
    word: "kapilya",
    correctMeaning: "chapel",
    options: ["chapel", "stone", "stairs", "name"],
  },
  {
    id: 2,
    type: "card_match",
    word: "bato",
    correctMeaning: "stone",
    options: ["chapel", "stone", "stairs", "name"],
  },
  {
    id: 3,
    type: "card_match",
    word: "hagdan",
    correctMeaning: "stairs",
    options: ["chapel", "stone", "stairs", "name"],
  },
  {
    id: 4,
    type: "card_match",
    word: "ngaran",
    correctMeaning: "name",
    options: ["chapel", "stone", "stairs", "name"],
  },
  { id: 5, type: "speak", word: "kapilya", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"bato\" mean?",
    correctMeaning: "stone",
    options: ["chapel", "stone", "stairs", "name"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"hagdan\"",
    correctWord: "stairs",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Waray word means \"name\"?",
    correctMeaning: "ngaran",
    options: ["kapilya", "bato", "hagdan", "ngaran"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"kapilya\"",
    correctWord: "chapel",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"hagdan\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter08Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "buwa",
    correctMeaning: "lie",
    options: ["lie", "truth", "voice", "whisper"],
  },
  {
    id: 2,
    type: "card_match",
    word: "kamatuoran",
    correctMeaning: "truth",
    options: ["lie", "truth", "voice", "whisper"],
  },
  {
    id: 3,
    type: "card_match",
    word: "tingog",
    correctMeaning: "voice",
    options: ["lie", "truth", "voice", "whisper"],
  },
  {
    id: 4,
    type: "card_match",
    word: "huring",
    correctMeaning: "whisper",
    options: ["lie", "truth", "voice", "whisper"],
  },
  { id: 5, type: "speak", word: "buwa", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"kamatuoran\" mean?",
    correctMeaning: "truth",
    options: ["lie", "truth", "voice", "whisper"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"tingog\"",
    correctWord: "voice",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Waray word means \"whisper\"?",
    correctMeaning: "huring",
    options: ["buwa", "kamatuoran", "tingog", "huring"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"buwa\"",
    correctWord: "lie",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"buwa\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter09Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "ladawan",
    correctMeaning: "effigies / images",
    options: ["effigies / images", "crowd", "anger", "window"],
  },
  {
    id: 2,
    type: "card_match",
    word: "kadam-an",
    correctMeaning: "crowd",
    options: ["effigies / images", "crowd", "anger", "window"],
  },
  {
    id: 3,
    type: "card_match",
    word: "kasina",
    correctMeaning: "anger",
    options: ["effigies / images", "crowd", "anger", "window"],
  },
  {
    id: 4,
    type: "card_match",
    word: "bintana",
    correctMeaning: "window",
    options: ["effigies / images", "crowd", "anger", "window"],
  },
  { id: 5, type: "speak", word: "ladawan", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"kadam-an\" mean?",
    correctMeaning: "crowd",
    options: ["effigies / images", "crowd", "anger", "window"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"kasina\"",
    correctWord: "anger",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Waray word means \"window\"?",
    correctMeaning: "bintana",
    options: ["ladawan", "kadam-an", "kasina", "bintana"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"ladawan\"",
    correctWord: "effigies / images",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"kasina\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter10Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "letrato",
    correctMeaning: "portrait",
    options: ["portrait", "eyes", "voice", "curse"],
  },
  {
    id: 2,
    type: "card_match",
    word: "mata",
    correctMeaning: "eyes",
    options: ["portrait", "eyes", "voice", "curse"],
  },
  {
    id: 3,
    type: "card_match",
    word: "tingog",
    correctMeaning: "voice",
    options: ["portrait", "eyes", "voice", "curse"],
  },
  {
    id: 4,
    type: "card_match",
    word: "sumpa",
    correctMeaning: "curse",
    options: ["portrait", "eyes", "voice", "curse"],
  },
  { id: 5, type: "speak", word: "letrato", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"mata\" mean?",
    correctMeaning: "eyes",
    options: ["portrait", "eyes", "voice", "curse"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"tingog\"",
    correctWord: "voice",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Waray word means \"curse\"?",
    correctMeaning: "sumpa",
    options: ["letrato", "mata", "tingog", "sumpa"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"letrato\"",
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
    word: "rekord",
    correctMeaning: "records",
    options: ["records", "heir", "baptism", "lawyer"],
  },
  {
    id: 2,
    type: "card_match",
    word: "manurunod",
    correctMeaning: "heir",
    options: ["records", "heir", "baptism", "lawyer"],
  },
  {
    id: 3,
    type: "card_match",
    word: "bunyag",
    correctMeaning: "baptism",
    options: ["records", "heir", "baptism", "lawyer"],
  },
  {
    id: 4,
    type: "card_match",
    word: "abogado",
    correctMeaning: "lawyer",
    options: ["records", "heir", "baptism", "lawyer"],
  },
  { id: 5, type: "speak", word: "rekord", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"manurunod\" mean?",
    correctMeaning: "heir",
    options: ["records", "heir", "baptism", "lawyer"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"bunyag\"",
    correctWord: "baptism",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Waray word means \"lawyer\"?",
    correctMeaning: "abogado",
    options: ["rekord", "manurunod", "bunyag", "abogado"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"rekord\"",
    correctWord: "records",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"rekord\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter12Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "kalayo",
    correctMeaning: "fire",
    options: ["fire", "alarm", "archive", "wind"],
  },
  {
    id: 2,
    type: "card_match",
    word: "alarma",
    correctMeaning: "alarm",
    options: ["fire", "alarm", "archive", "wind"],
  },
  {
    id: 3,
    type: "card_match",
    word: "arkibo",
    correctMeaning: "archive",
    options: ["fire", "alarm", "archive", "wind"],
  },
  {
    id: 4,
    type: "card_match",
    word: "hangin",
    correctMeaning: "wind",
    options: ["fire", "alarm", "archive", "wind"],
  },
  { id: 5, type: "speak", word: "kalayo", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"alarma\" mean?",
    correctMeaning: "alarm",
    options: ["fire", "alarm", "archive", "wind"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"arkibo\"",
    correctWord: "archive",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Waray word means \"wind\"?",
    correctMeaning: "hangin",
    options: ["kalayo", "alarma", "arkibo", "hangin"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"kalayo\"",
    correctWord: "fire",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"kalayo\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter13Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "patron",
    correctMeaning: "town festival",
    options: ["town festival", "town", "parents", "blood"],
  },
  {
    id: 2,
    type: "card_match",
    word: "bungto",
    correctMeaning: "town",
    options: ["town festival", "town", "parents", "blood"],
  },
  {
    id: 3,
    type: "card_match",
    word: "kag-anak",
    correctMeaning: "parents",
    options: ["town festival", "town", "parents", "blood"],
  },
  {
    id: 4,
    type: "card_match",
    word: "dugo",
    correctMeaning: "blood",
    options: ["town festival", "town", "parents", "blood"],
  },
  { id: 5, type: "speak", word: "patron", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"bungto\" mean?",
    correctMeaning: "town",
    options: ["town festival", "town", "parents", "blood"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"kag-anak\"",
    correctWord: "parents",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Waray word means \"blood\"?",
    correctMeaning: "dugo",
    options: ["patron", "bungto", "kag-anak", "dugo"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"patron\"",
    correctWord: "town festival",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"dugo\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter14Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "dugo",
    correctMeaning: "blood",
    options: ["blood", "journal", "voice", "whisper"],
  },
  {
    id: 2,
    type: "card_match",
    word: "journal",
    correctMeaning: "journal",
    options: ["blood", "journal", "voice", "whisper"],
  },
  {
    id: 3,
    type: "card_match",
    word: "tingog",
    correctMeaning: "voice",
    options: ["blood", "journal", "voice", "whisper"],
  },
  {
    id: 4,
    type: "card_match",
    word: "huring",
    correctMeaning: "whisper",
    options: ["blood", "journal", "voice", "whisper"],
  },
  { id: 5, type: "speak", word: "dugo", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"journal\" mean?",
    correctMeaning: "journal",
    options: ["blood", "journal", "voice", "whisper"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"tingog\"",
    correctWord: "voice",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Waray word means \"whisper\"?",
    correctMeaning: "huring",
    options: ["dugo", "journal", "tingog", "huring"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"dugo\"",
    correctWord: "blood",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"dugo\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter15Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "kripta",
    correctMeaning: "crypt",
    options: ["crypt", "chain", "stone", "lake"],
  },
  {
    id: 2,
    type: "card_match",
    word: "kadena",
    correctMeaning: "chain",
    options: ["crypt", "chain", "stone", "lake"],
  },
  {
    id: 3,
    type: "card_match",
    word: "bato",
    correctMeaning: "stone",
    options: ["crypt", "chain", "stone", "lake"],
  },
  {
    id: 4,
    type: "card_match",
    word: "danaw",
    correctMeaning: "lake",
    options: ["crypt", "chain", "stone", "lake"],
  },
  { id: 5, type: "speak", word: "kripta", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"kadena\" mean?",
    correctMeaning: "chain",
    options: ["crypt", "chain", "stone", "lake"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"bato\"",
    correctWord: "stone",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Waray word means \"lake\"?",
    correctMeaning: "danaw",
    options: ["kripta", "kadena", "bato", "danaw"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"kripta\"",
    correctWord: "crypt",
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
    word: "padi",
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
    word: "huring",
    correctMeaning: "whisper",
    options: ["priest", "curse", "whisper", "inheritance"],
  },
  {
    id: 4,
    type: "card_match",
    word: "panurundon",
    correctMeaning: "inheritance",
    options: ["priest", "curse", "whisper", "inheritance"],
  },
  { id: 5, type: "speak", word: "padi", micOptional: true },
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
    meaning: "The English meaning of \"huring\"",
    correctWord: "whisper",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Waray word means \"inheritance\"?",
    correctMeaning: "panurundon",
    options: ["padi", "sumpa", "huring", "panurundon"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"padi\"",
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
    word: "dokumento",
    correctMeaning: "documents",
    options: ["documents", "debt", "fear", "pictures"],
  },
  {
    id: 2,
    type: "card_match",
    word: "utang",
    correctMeaning: "debt",
    options: ["documents", "debt", "fear", "pictures"],
  },
  {
    id: 3,
    type: "card_match",
    word: "kahadlok",
    correctMeaning: "fear",
    options: ["documents", "debt", "fear", "pictures"],
  },
  {
    id: 4,
    type: "card_match",
    word: "letrato",
    correctMeaning: "pictures",
    options: ["documents", "debt", "fear", "pictures"],
  },
  { id: 5, type: "speak", word: "dokumento", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"utang\" mean?",
    correctMeaning: "debt",
    options: ["documents", "debt", "fear", "pictures"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"kahadlok\"",
    correctWord: "fear",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Waray word means \"pictures\"?",
    correctMeaning: "letrato",
    options: ["dokumento", "utang", "kahadlok", "letrato"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"dokumento\"",
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
    word: "halusinasyon",
    correctMeaning: "hallucinations",
    options: ["hallucinations", "room", "picture", "window"],
  },
  {
    id: 2,
    type: "card_match",
    word: "kwarto",
    correctMeaning: "room",
    options: ["hallucinations", "room", "picture", "window"],
  },
  {
    id: 3,
    type: "card_match",
    word: "letrato",
    correctMeaning: "picture",
    options: ["hallucinations", "room", "picture", "window"],
  },
  {
    id: 4,
    type: "card_match",
    word: "bintana",
    correctMeaning: "window",
    options: ["hallucinations", "room", "picture", "window"],
  },
  { id: 5, type: "speak", word: "halusinasyon", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"kwarto\" mean?",
    correctMeaning: "room",
    options: ["hallucinations", "room", "picture", "window"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"letrato\"",
    correctWord: "picture",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Waray word means \"window\"?",
    correctMeaning: "bintana",
    options: ["halusinasyon", "kwarto", "letrato", "bintana"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"halusinasyon\"",
    correctWord: "hallucinations",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"halusinasyon\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter19Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "imbestigador",
    correctMeaning: "investigator",
    options: ["investigator", "accident", "stairs", "secret"],
  },
  {
    id: 2,
    type: "card_match",
    word: "aksidente",
    correctMeaning: "accident",
    options: ["investigator", "accident", "stairs", "secret"],
  },
  {
    id: 3,
    type: "card_match",
    word: "hagdan",
    correctMeaning: "stairs",
    options: ["investigator", "accident", "stairs", "secret"],
  },
  {
    id: 4,
    type: "card_match",
    word: "sekreto",
    correctMeaning: "secret",
    options: ["investigator", "accident", "stairs", "secret"],
  },
  { id: 5, type: "speak", word: "imbestigador", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"aksidente\" mean?",
    correctMeaning: "accident",
    options: ["investigator", "accident", "stairs", "secret"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"hagdan\"",
    correctWord: "stairs",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Waray word means \"secret\"?",
    correctMeaning: "sekreto",
    options: ["imbestigador", "aksidente", "hagdan", "sekreto"],
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
    word: "danaw",
    correctMeaning: "lake",
    options: ["lake", "record", "voice", "contract"],
  },
  {
    id: 2,
    type: "card_match",
    word: "rekord",
    correctMeaning: "record",
    options: ["lake", "record", "voice", "contract"],
  },
  {
    id: 3,
    type: "card_match",
    word: "tingog",
    correctMeaning: "voice",
    options: ["lake", "record", "voice", "contract"],
  },
  {
    id: 4,
    type: "card_match",
    word: "kontrata",
    correctMeaning: "contract",
    options: ["lake", "record", "voice", "contract"],
  },
  { id: 5, type: "speak", word: "danaw", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"rekord\" mean?",
    correctMeaning: "record",
    options: ["lake", "record", "voice", "contract"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"tingog\"",
    correctWord: "voice",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Waray word means \"contract\"?",
    correctMeaning: "kontrata",
    options: ["danaw", "rekord", "tingog", "kontrata"],
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
      "Show the facial expression associated with \"tingog\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter21Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "pagbista",
    correctMeaning: "trial / hearing",
    options: ["trial / hearing", "public", "evidence", "truth"],
  },
  {
    id: 2,
    type: "card_match",
    word: "publiko",
    correctMeaning: "public",
    options: ["trial / hearing", "public", "evidence", "truth"],
  },
  {
    id: 3,
    type: "card_match",
    word: "ebidensya",
    correctMeaning: "evidence",
    options: ["trial / hearing", "public", "evidence", "truth"],
  },
  {
    id: 4,
    type: "card_match",
    word: "kamatuoran",
    correctMeaning: "truth",
    options: ["trial / hearing", "public", "evidence", "truth"],
  },
  { id: 5, type: "speak", word: "pagbista", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"publiko\" mean?",
    correctMeaning: "public",
    options: ["trial / hearing", "public", "evidence", "truth"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"ebidensya\"",
    correctWord: "evidence",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Waray word means \"truth\"?",
    correctMeaning: "kamatuoran",
    options: ["pagbista", "publiko", "ebidensya", "kamatuoran"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"pagbista\"",
    correctWord: "trial / hearing",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"publiko\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter22Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "kaapoy-apoyan",
    correctMeaning: "ancestors",
    options: ["ancestors", "truth", "curse", "letter"],
  },
  {
    id: 2,
    type: "card_match",
    word: "kamatuoran",
    correctMeaning: "truth",
    options: ["ancestors", "truth", "curse", "letter"],
  },
  {
    id: 3,
    type: "card_match",
    word: "sumpa",
    correctMeaning: "curse",
    options: ["ancestors", "truth", "curse", "letter"],
  },
  {
    id: 4,
    type: "card_match",
    word: "surat",
    correctMeaning: "letter",
    options: ["ancestors", "truth", "curse", "letter"],
  },
  { id: 5, type: "speak", word: "kaapoy-apoyan", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"kamatuoran\" mean?",
    correctMeaning: "truth",
    options: ["ancestors", "truth", "curse", "letter"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"sumpa\"",
    correctWord: "curse",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Waray word means \"letter\"?",
    correctMeaning: "surat",
    options: ["kaapoy-apoyan", "kamatuoran", "sumpa", "surat"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"kaapoy-apoyan\"",
    correctWord: "ancestors",
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
    word: "tingog",
    correctMeaning: "voice",
    options: ["voice", "anger", "decision", "records"],
  },
  {
    id: 2,
    type: "card_match",
    word: "kasina",
    correctMeaning: "anger",
    options: ["voice", "anger", "decision", "records"],
  },
  {
    id: 3,
    type: "card_match",
    word: "desisyon",
    correctMeaning: "decision",
    options: ["voice", "anger", "decision", "records"],
  },
  {
    id: 4,
    type: "card_match",
    word: "rekord",
    correctMeaning: "records",
    options: ["voice", "anger", "decision", "records"],
  },
  { id: 5, type: "speak", word: "tingog", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"kasina\" mean?",
    correctMeaning: "anger",
    options: ["voice", "anger", "decision", "records"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"desisyon\"",
    correctWord: "decision",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Waray word means \"records\"?",
    correctMeaning: "rekord",
    options: ["tingog", "kasina", "desisyon", "rekord"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"tingog\"",
    correctWord: "voice",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"kasina\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter24Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "koro",
    correctMeaning: "chorus",
    options: ["chorus", "voices", "whisper", "kitchen"],
  },
  {
    id: 2,
    type: "card_match",
    word: "tingog",
    correctMeaning: "voices",
    options: ["chorus", "voices", "whisper", "kitchen"],
  },
  {
    id: 3,
    type: "card_match",
    word: "huring",
    correctMeaning: "whisper",
    options: ["chorus", "voices", "whisper", "kitchen"],
  },
  {
    id: 4,
    type: "card_match",
    word: "kusina",
    correctMeaning: "kitchen",
    options: ["chorus", "voices", "whisper", "kitchen"],
  },
  { id: 5, type: "speak", word: "koro", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"tingog\" mean?",
    correctMeaning: "voices",
    options: ["chorus", "voices", "whisper", "kitchen"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"huring\"",
    correctWord: "whisper",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Waray word means \"kitchen\"?",
    correctMeaning: "kusina",
    options: ["koro", "tingog", "huring", "kusina"],
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
      "Show the facial expression associated with \"huring\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter25Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "kontrata",
    correctMeaning: "contract",
    options: ["contract", "chapel", "inheritance", "grandmother"],
  },
  {
    id: 2,
    type: "card_match",
    word: "kapilya",
    correctMeaning: "chapel",
    options: ["contract", "chapel", "inheritance", "grandmother"],
  },
  {
    id: 3,
    type: "card_match",
    word: "panurundon",
    correctMeaning: "inheritance",
    options: ["contract", "chapel", "inheritance", "grandmother"],
  },
  {
    id: 4,
    type: "card_match",
    word: "lola",
    correctMeaning: "grandmother",
    options: ["contract", "chapel", "inheritance", "grandmother"],
  },
  { id: 5, type: "speak", word: "kontrata", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"kapilya\" mean?",
    correctMeaning: "chapel",
    options: ["contract", "chapel", "inheritance", "grandmother"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"panurundon\"",
    correctWord: "inheritance",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Waray word means \"grandmother\"?",
    correctMeaning: "lola",
    options: ["kontrata", "kapilya", "panurundon", "lola"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"kontrata\"",
    correctWord: "contract",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"kontrata\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter26Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "kahadlok",
    correctMeaning: "fear",
    options: ["fear", "inheritance", "kitchen", "letter"],
  },
  {
    id: 2,
    type: "card_match",
    word: "panurundon",
    correctMeaning: "inheritance",
    options: ["fear", "inheritance", "kitchen", "letter"],
  },
  {
    id: 3,
    type: "card_match",
    word: "kusina",
    correctMeaning: "kitchen",
    options: ["fear", "inheritance", "kitchen", "letter"],
  },
  {
    id: 4,
    type: "card_match",
    word: "surat",
    correctMeaning: "letter",
    options: ["fear", "inheritance", "kitchen", "letter"],
  },
  { id: 5, type: "speak", word: "kahadlok", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"panurundon\" mean?",
    correctMeaning: "inheritance",
    options: ["fear", "inheritance", "kitchen", "letter"],
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
    word: "Which Waray word means \"letter\"?",
    correctMeaning: "surat",
    options: ["kahadlok", "panurundon", "kusina", "surat"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"kahadlok\"",
    correctWord: "fear",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"kahadlok\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter27Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "kalayo",
    correctMeaning: "fire",
    options: ["fire", "crowd", "police", "window"],
  },
  {
    id: 2,
    type: "card_match",
    word: "kadam-an",
    correctMeaning: "crowd",
    options: ["fire", "crowd", "police", "window"],
  },
  {
    id: 3,
    type: "card_match",
    word: "pulis",
    correctMeaning: "police",
    options: ["fire", "crowd", "police", "window"],
  },
  {
    id: 4,
    type: "card_match",
    word: "bintana",
    correctMeaning: "window",
    options: ["fire", "crowd", "police", "window"],
  },
  { id: 5, type: "speak", word: "kalayo", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"kadam-an\" mean?",
    correctMeaning: "crowd",
    options: ["fire", "crowd", "police", "window"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"pulis\"",
    correctWord: "police",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Waray word means \"window\"?",
    correctMeaning: "bintana",
    options: ["kalayo", "kadam-an", "pulis", "bintana"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"kalayo\"",
    correctWord: "fire",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"kalayo\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter28Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "sumpa",
    correctMeaning: "curse",
    options: ["curse", "chapel", "ancestors", "attempt"],
  },
  {
    id: 2,
    type: "card_match",
    word: "kapilya",
    correctMeaning: "chapel",
    options: ["curse", "chapel", "ancestors", "attempt"],
  },
  {
    id: 3,
    type: "card_match",
    word: "kaapoy-apoyan",
    correctMeaning: "ancestors",
    options: ["curse", "chapel", "ancestors", "attempt"],
  },
  {
    id: 4,
    type: "card_match",
    word: "pagsari",
    correctMeaning: "attempt",
    options: ["curse", "chapel", "ancestors", "attempt"],
  },
  { id: 5, type: "speak", word: "sumpa", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"kapilya\" mean?",
    correctMeaning: "chapel",
    options: ["curse", "chapel", "ancestors", "attempt"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"kaapoy-apoyan\"",
    correctWord: "ancestors",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Waray word means \"attempt\"?",
    correctMeaning: "pagsari",
    options: ["sumpa", "kapilya", "kaapoy-apoyan", "pagsari"],
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
      "Show the facial expression associated with \"pagsari\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter29Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "kwarto",
    correctMeaning: "room",
    options: ["room", "fire", "plan", "firefighters"],
  },
  {
    id: 2,
    type: "card_match",
    word: "kalayo",
    correctMeaning: "fire",
    options: ["room", "fire", "plan", "firefighters"],
  },
  {
    id: 3,
    type: "card_match",
    word: "plano",
    correctMeaning: "plan",
    options: ["room", "fire", "plan", "firefighters"],
  },
  {
    id: 4,
    type: "card_match",
    word: "bombero",
    correctMeaning: "firefighters",
    options: ["room", "fire", "plan", "firefighters"],
  },
  { id: 5, type: "speak", word: "kwarto", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"kalayo\" mean?",
    correctMeaning: "fire",
    options: ["room", "fire", "plan", "firefighters"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"plano\"",
    correctWord: "plan",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Waray word means \"firefighters\"?",
    correctMeaning: "bombero",
    options: ["kwarto", "kalayo", "plano", "bombero"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"kwarto\"",
    correctWord: "room",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"kalayo\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter30Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "pagpili",
    correctMeaning: "choice",
    options: ["choice", "inheritance", "debt", "truth"],
  },
  {
    id: 2,
    type: "card_match",
    word: "panurundon",
    correctMeaning: "inheritance",
    options: ["choice", "inheritance", "debt", "truth"],
  },
  {
    id: 3,
    type: "card_match",
    word: "utang",
    correctMeaning: "debt",
    options: ["choice", "inheritance", "debt", "truth"],
  },
  {
    id: 4,
    type: "card_match",
    word: "kamatuoran",
    correctMeaning: "truth",
    options: ["choice", "inheritance", "debt", "truth"],
  },
  { id: 5, type: "speak", word: "pagpili", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"panurundon\" mean?",
    correctMeaning: "inheritance",
    options: ["choice", "inheritance", "debt", "truth"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"utang\"",
    correctWord: "debt",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Waray word means \"truth\"?",
    correctMeaning: "kamatuoran",
    options: ["pagpili", "panurundon", "utang", "kamatuoran"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"pagpili\"",
    correctWord: "choice",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"pagpili\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

const chapter31Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "huring",
    correctMeaning: "whisper",
    options: ["whisper", "truth", "fire", "name"],
  },
  {
    id: 2,
    type: "card_match",
    word: "kamatuoran",
    correctMeaning: "truth",
    options: ["whisper", "truth", "fire", "name"],
  },
  {
    id: 3,
    type: "card_match",
    word: "kalayo",
    correctMeaning: "fire",
    options: ["whisper", "truth", "fire", "name"],
  },
  {
    id: 4,
    type: "card_match",
    word: "ngaran",
    correctMeaning: "name",
    options: ["whisper", "truth", "fire", "name"],
  },
  { id: 5, type: "speak", word: "huring", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: "What does \"kamatuoran\" mean?",
    correctMeaning: "truth",
    options: ["whisper", "truth", "fire", "name"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: "The English meaning of \"kalayo\"",
    correctWord: "fire",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: "Which Waray word means \"name\"?",
    correctMeaning: "ngaran",
    options: ["huring", "kamatuoran", "kalayo", "ngaran"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: "The English meaning of \"huring\"",
    correctWord: "whisper",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      "Show the facial expression associated with \"huring\". The detected expression is recorded for review.",
    countsAsCompleted: true,
  },
];

export const warayStoryPracticeChapters: StoryPracticeChapter[] = [
  { dialect: "waray", chapter: 1, lessonId: "story_waray_1", questions: chapter01Questions },
  { dialect: "waray", chapter: 2, lessonId: "story_waray_2", questions: chapter02Questions },
  { dialect: "waray", chapter: 3, lessonId: "story_waray_3", questions: chapter03Questions },
  { dialect: "waray", chapter: 4, lessonId: "story_waray_4", questions: chapter04Questions },
  { dialect: "waray", chapter: 5, lessonId: "story_waray_5", questions: chapter05Questions },
  { dialect: "waray", chapter: 6, lessonId: "story_waray_6", questions: chapter06Questions },
  { dialect: "waray", chapter: 7, lessonId: "story_waray_7", questions: chapter07Questions },
  { dialect: "waray", chapter: 8, lessonId: "story_waray_8", questions: chapter08Questions },
  { dialect: "waray", chapter: 9, lessonId: "story_waray_9", questions: chapter09Questions },
  { dialect: "waray", chapter: 10, lessonId: "story_waray_10", questions: chapter10Questions },
  { dialect: "waray", chapter: 11, lessonId: "story_waray_11", questions: chapter11Questions },
  { dialect: "waray", chapter: 12, lessonId: "story_waray_12", questions: chapter12Questions },
  { dialect: "waray", chapter: 13, lessonId: "story_waray_13", questions: chapter13Questions },
  { dialect: "waray", chapter: 14, lessonId: "story_waray_14", questions: chapter14Questions },
  { dialect: "waray", chapter: 15, lessonId: "story_waray_15", questions: chapter15Questions },
  { dialect: "waray", chapter: 16, lessonId: "story_waray_16", questions: chapter16Questions },
  { dialect: "waray", chapter: 17, lessonId: "story_waray_17", questions: chapter17Questions },
  { dialect: "waray", chapter: 18, lessonId: "story_waray_18", questions: chapter18Questions },
  { dialect: "waray", chapter: 19, lessonId: "story_waray_19", questions: chapter19Questions },
  { dialect: "waray", chapter: 20, lessonId: "story_waray_20", questions: chapter20Questions },
  { dialect: "waray", chapter: 21, lessonId: "story_waray_21", questions: chapter21Questions },
  { dialect: "waray", chapter: 22, lessonId: "story_waray_22", questions: chapter22Questions },
  { dialect: "waray", chapter: 23, lessonId: "story_waray_23", questions: chapter23Questions },
  { dialect: "waray", chapter: 24, lessonId: "story_waray_24", questions: chapter24Questions },
  { dialect: "waray", chapter: 25, lessonId: "story_waray_25", questions: chapter25Questions },
  { dialect: "waray", chapter: 26, lessonId: "story_waray_26", questions: chapter26Questions },
  { dialect: "waray", chapter: 27, lessonId: "story_waray_27", questions: chapter27Questions },
  { dialect: "waray", chapter: 28, lessonId: "story_waray_28", questions: chapter28Questions },
  { dialect: "waray", chapter: 29, lessonId: "story_waray_29", questions: chapter29Questions },
  { dialect: "waray", chapter: 30, lessonId: "story_waray_30", questions: chapter30Questions },
  { dialect: "waray", chapter: 31, lessonId: "story_waray_31", questions: chapter31Questions },
];
