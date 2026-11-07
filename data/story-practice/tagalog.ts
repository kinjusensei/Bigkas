import type { StoryPracticeChapter, StoryPracticeQuestion } from "./types";

// Source: app/Tagalog questionare.pdf. Draft equivalents are preserved exactly.
// Chapters 3–6, 8, 10, 17 and 21–31 use English meanings instead (see the note
// above each one).
// FER items are observational because the PDF does not provide expected labels.

const chapter01Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "dahan-dahan",
    correctMeaning: "Slowly",
    options: ["Slowly", "Grief", "Mist", "Inheritance"],
  },
  {
    id: 2,
    type: "card_match",
    word: "Nayon",
    correctMeaning: "Village",
    options: ["Village", "Affliction", "Mist", "Inheritance"],
  },
  {
    id: 3,
    type: "card_match",
    word: "hamog",
    correctMeaning: "Mist",
    options: ["Slowly", "Mist", "Drizzle", "Inheritance"],
  },
  {
    id: 4,
    type: "card_match",
    word: "pamana",
    correctMeaning: "Inheritance",
    options: ["Village", "Sorrow", "Mist", "Inheritance"],
  },
  { id: 5, type: "speak", word: "libing" },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "pumanaw" mean?',
    correctMeaning: "Passed away",
    options: ["Passed away", "Mist", "Inheritance", "Funeral"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The Tagalog equivalent of "hamog"',
    correctWord: "Mist",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "Reputasyon"?',
    correctMeaning: "Reputation",
    options: ["Funeral", "Sorrow", "Reputation", "Mist"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: '"Libing" in Tagalog is',
    correctWord: "Funeral",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "pighati". The detected expression is recorded for review.',
  },
];

const chapter02Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "east wing",
    correctMeaning: "silangang pakpak",
    options: ["silangang pakpak", "kandadu", "talaarawan", "mantsa"],
  },
  {
    id: 2,
    type: "card_match",
    word: "padlock",
    correctMeaning: "kandadu",
    options: ["silangang pakpak", "kandadu", "talaarawan", "mantsa"],
  },
  {
    id: 3,
    type: "card_match",
    word: "talaarawan",
    correctMeaning: "diary",
    options: ["east wing", "padlock", "diary", "stain"],
  },
  {
    id: 4,
    type: "card_match",
    word: "mantsa",
    correctMeaning: "stain",
    options: ["east wing", "padlock", "diary", "stain"],
  },
  { id: 5, type: "speak", word: "silangang pakpak" },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "padlock" mean?',
    correctMeaning: "padlock",
    options: ["padlock", "journal", "stain", "east wing"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The Tagalog equivalent of "talaarawan"',
    correctWord: "talaarawan",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "mantsa"?',
    correctMeaning: "stain",
    options: ["east wing", "padlock", "stain", "diary"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: '"East wing" in Tagalog is',
    correctWord: "silangang pakpak",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "padlock". The detected expression is recorded for review.',
  },
];

// Chapter 3: from Part 4 of docs/Bigkas-missing-questionnaires-draft.md.
// Every word appears in its chapter of docs/Whispers Tagalog.pdf; the cards and
// fill-ins ask for the English meaning.
const chapter03Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "iskandalo",
    correctMeaning: "scandal",
    options: ["scandal", "contempt", "charity", "volunteered"],
  },
  {
    id: 2,
    type: "card_match",
    word: "paghamak",
    correctMeaning: "contempt",
    options: ["scandal", "contempt", "charity", "volunteered"],
  },
  {
    id: 3,
    type: "card_match",
    word: "kawanggawa",
    correctMeaning: "charity",
    options: ["scandal", "contempt", "charity", "volunteered"],
  },
  {
    id: 4,
    type: "card_match",
    word: "nagboluntaryo",
    correctMeaning: "volunteered",
    options: ["scandal", "contempt", "charity", "volunteered"],
  },
  { id: 5, type: "speak", word: "iskandalo", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "paghamak" mean?',
    correctMeaning: "contempt",
    options: ["scandal", "charity", "volunteered", "contempt"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The English meaning of "kawanggawa"',
    correctWord: "charity",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "volunteered"?',
    correctMeaning: "nagboluntaryo",
    options: ["iskandalo", "nagboluntaryo", "paghamak", "kawanggawa"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: 'The English meaning of "iskandalo"',
    correctWord: "scandal",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "iskandalo". The detected expression is recorded for review.',
    countsAsCompleted: true,
  },
];

// Chapter 4: from Part 4 of docs/Bigkas-missing-questionnaires-draft.md.
// Every word appears in its chapter of docs/Whispers Tagalog.pdf; the cards and
// fill-ins ask for the English meaning.
const chapter04Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "bulong",
    correctMeaning: "whisper",
    options: ["whisper", "debt", "illusion", "kitchen"],
  },
  {
    id: 2,
    type: "card_match",
    word: "utang",
    correctMeaning: "debt",
    options: ["whisper", "debt", "illusion", "kitchen"],
  },
  {
    id: 3,
    type: "card_match",
    word: "ilusyon",
    correctMeaning: "illusion",
    options: ["whisper", "debt", "illusion", "kitchen"],
  },
  {
    id: 4,
    type: "card_match",
    word: "kusina",
    correctMeaning: "kitchen",
    options: ["whisper", "debt", "illusion", "kitchen"],
  },
  { id: 5, type: "speak", word: "bulong", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "utang" mean?',
    correctMeaning: "debt",
    options: ["debt", "whisper", "illusion", "kitchen"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The English meaning of "ilusyon"',
    correctWord: "illusion",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "kitchen"?',
    correctMeaning: "kusina",
    options: ["bulong", "utang", "kusina", "ilusyon"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: 'The English meaning of "bulong"',
    correctWord: "whisper",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "utang". The detected expression is recorded for review.',
    countsAsCompleted: true,
  },
];

// Chapter 5: from Part 4 of docs/Bigkas-missing-questionnaires-draft.md.
// Every word appears in its chapter of docs/Whispers Tagalog.pdf; the cards and
// fill-ins ask for the English meaning.
const chapter05Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "talaarawan",
    correctMeaning: "journal",
    options: ["journal", "handwriting", "evidence", "mirror"],
  },
  {
    id: 2,
    type: "card_match",
    word: "sulat-kamay",
    correctMeaning: "handwriting",
    options: ["journal", "handwriting", "evidence", "mirror"],
  },
  {
    id: 3,
    type: "card_match",
    word: "ebidensya",
    correctMeaning: "evidence",
    options: ["journal", "handwriting", "evidence", "mirror"],
  },
  {
    id: 4,
    type: "card_match",
    word: "salamin",
    correctMeaning: "mirror",
    options: ["journal", "handwriting", "evidence", "mirror"],
  },
  { id: 5, type: "speak", word: "talaarawan", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "sulat-kamay" mean?',
    correctMeaning: "handwriting",
    options: ["journal", "handwriting", "evidence", "mirror"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The English meaning of "ebidensya"',
    correctWord: "evidence",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "mirror"?',
    correctMeaning: "salamin",
    options: ["talaarawan", "sulat-kamay", "ebidensya", "salamin"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: 'The English meaning of "talaarawan"',
    correctWord: "journal",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "sulat-kamay". The detected expression is recorded for review.',
    countsAsCompleted: true,
  },
];

// Chapter 6: the PDF gives each word's English meaning but no Tagalog draft
// equivalent, so the cards and fill-ins ask for the English meaning.
const chapter06Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "hapunan",
    correctMeaning: "dinner",
    options: ["dinner", "guest", "wine", "confusion"],
  },
  {
    id: 2,
    type: "card_match",
    word: "panauhin",
    correctMeaning: "guest",
    options: ["dinner", "guest", "wine", "confusion"],
  },
  {
    id: 3,
    type: "card_match",
    word: "alak",
    correctMeaning: "wine",
    options: ["dinner", "guest", "wine", "confusion"],
  },
  {
    id: 4,
    type: "card_match",
    word: "kalituhan",
    correctMeaning: "confusion",
    options: ["dinner", "guest", "wine", "confusion"],
  },
  { id: 5, type: "speak", word: "hapunan", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "panauhin" mean?',
    correctMeaning: "guest",
    options: ["guest", "wine", "confusion", "dinner"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The English meaning of "alak"',
    correctWord: "wine",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "confusion"?',
    correctMeaning: "kalituhan",
    options: ["hapunan", "panauhin", "kalituhan", "alak"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: 'The English meaning of "hapunan"',
    correctWord: "dinner",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "panauhin". The detected expression is recorded for review.',
    countsAsCompleted: true,
  },
];

const chapter07Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "kapilya",
    correctMeaning: "kapilya",
    options: ["kapilya", "hagdan", "lagyu", "mana"],
  },
  {
    id: 2,
    type: "card_match",
    word: "hagdan",
    correctMeaning: "hagdan",
    options: ["kapilya", "hagdan", "lagyu", "mana"],
  },
  {
    id: 3,
    type: "card_match",
    word: "pangalan",
    correctMeaning: "lagyu",
    options: ["kapilya", "hagdan", "lagyu", "mana"],
  },
  {
    id: 4,
    type: "card_match",
    word: "pamana",
    correctMeaning: "mana",
    options: ["kapilya", "hagdan", "lagyu", "mana"],
  },
  { id: 5, type: "speak", word: "kapilya" },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "hagdan" mean?',
    correctMeaning: "stairs",
    options: ["stairs", "name", "inheritance", "chapel"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The Tagalog equivalent of "pangalan"',
    correctWord: "lagyu",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "inheritance"?',
    correctMeaning: "pamana",
    options: ["kapilya", "hagdan", "pamana", "pangalan"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: '"kapilya" in Tagalog is',
    correctWord: "kapilya",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "hagdan". The detected expression is recorded for review.',
  },
];

// Chapter 8: from Part 4 of docs/Bigkas-missing-questionnaires-draft.md.
// Every word appears in its chapter of docs/Whispers Tagalog.pdf; the cards and
// fill-ins ask for the English meaning.
const chapter08Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "kasinungalingan",
    correctMeaning: "lie",
    options: ["lie", "truth", "interpretation", "dangerous"],
  },
  {
    id: 2,
    type: "card_match",
    word: "katotohanan",
    correctMeaning: "truth",
    options: ["lie", "truth", "interpretation", "dangerous"],
  },
  {
    id: 3,
    type: "card_match",
    word: "interpretasyon",
    correctMeaning: "interpretation",
    options: ["lie", "truth", "interpretation", "dangerous"],
  },
  {
    id: 4,
    type: "card_match",
    word: "mapanganib",
    correctMeaning: "dangerous",
    options: ["lie", "truth", "interpretation", "dangerous"],
  },
  { id: 5, type: "speak", word: "kasinungalingan", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "katotohanan" mean?',
    correctMeaning: "truth",
    options: ["truth", "lie", "interpretation", "dangerous"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The English meaning of "interpretasyon"',
    correctWord: "interpretation",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "dangerous"?',
    correctMeaning: "mapanganib",
    options: ["kasinungalingan", "katotohanan", "mapanganib", "interpretasyon"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: 'The English meaning of "kasinungalingan"',
    correctWord: "lie",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "mapanganib". The detected expression is recorded for review.',
    countsAsCompleted: true,
  },
];

const chapter09Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "manyika",
    correctMeaning: "manyika",
    options: ["manyika", "bakud", "karamihan", "pang-insulto"],
  },
  {
    id: 2,
    type: "card_match",
    word: "bakod",
    correctMeaning: "bakud",
    options: ["manyika", "bakud", "karamihan", "pang-insulto"],
  },
  {
    id: 3,
    type: "card_match",
    word: "karamihan",
    correctMeaning: "karamihan",
    options: ["manyika", "bakud", "karamihan", "pang-insulto"],
  },
  {
    id: 4,
    type: "card_match",
    word: "paghamak",
    correctMeaning: "pang-insulto",
    options: ["manyika", "bakud", "karamihan", "pang-insulto"],
  },
  { id: 5, type: "speak", word: "manyika" },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "bakod" mean?',
    correctMeaning: "fence",
    options: ["fence", "crowd", "contempt", "effigy/doll"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The Tagalog equivalent of "karamihan"',
    correctWord: "karamihan",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "contempt"?',
    correctMeaning: "paghamak",
    options: ["manyika", "bakod", "paghamak", "karamihan"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: '"manyika" in Tagalog is',
    correctWord: "manyika",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "bakod". The detected expression is recorded for review.',
  },
];

// Chapter 10: from Part 4 of docs/Bigkas-missing-questionnaires-draft.md.
// Every word appears in its chapter of docs/Whispers Tagalog.pdf; the cards and
// fill-ins ask for the English meaning.
const chapter10Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "larawan",
    correctMeaning: "painting/portrait",
    options: ["painting/portrait", "shadow", "eyes", "moving"],
  },
  {
    id: 2,
    type: "card_match",
    word: "anino",
    correctMeaning: "shadow",
    options: ["painting/portrait", "shadow", "eyes", "moving"],
  },
  {
    id: 3,
    type: "card_match",
    word: "mata",
    correctMeaning: "eyes",
    options: ["painting/portrait", "shadow", "eyes", "moving"],
  },
  {
    id: 4,
    type: "card_match",
    word: "gumagalaw",
    correctMeaning: "moving",
    options: ["painting/portrait", "shadow", "eyes", "moving"],
  },
  { id: 5, type: "speak", word: "larawan", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "anino" mean?',
    correctMeaning: "shadow",
    options: ["painting/portrait", "eyes", "shadow", "moving"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The English meaning of "mata"',
    correctWord: "eyes",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "moving"?',
    correctMeaning: "gumagalaw",
    options: ["gumagalaw", "larawan", "anino", "mata"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: 'The English meaning of "larawan"',
    correctWord: "painting/portrait",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "anino". The detected expression is recorded for review.',
    countsAsCompleted: true,
  },
];

const chapter11Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "tagapagmana",
    correctMeaning: "tagapagmana",
    options: ["tagapagmana", "talaan", "sanga", "binyag"],
  },
  {
    id: 2,
    type: "card_match",
    word: "talaan",
    correctMeaning: "talaan",
    options: ["tagapagmana", "talaan", "sanga", "binyag"],
  },
  {
    id: 3,
    type: "card_match",
    word: "sangay",
    correctMeaning: "sanga",
    options: ["tagapagmana", "talaan", "sanga", "binyag"],
  },
  {
    id: 4,
    type: "card_match",
    word: "binyag",
    correctMeaning: "binyag",
    options: ["tagapagmana", "talaan", "sanga", "binyag"],
  },
  { id: 5, type: "speak", word: "tagapagmana" },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "talaan" mean?',
    correctMeaning: "record",
    options: ["record", "branch", "baptism", "heir"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The Tagalog equivalent of "sangay"',
    correctWord: "sanga",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "baptism"?',
    correctMeaning: "binyag",
    options: ["tagapagmana", "talaan", "binyag", "sangay"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: '"tagapagmana" in Tagalog is',
    correctWord: "tagapagmana",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "talaan". The detected expression is recorded for review.',
  },
];

const chapter12Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "sunog",
    correctMeaning: "apoy",
    options: ["liyabyab", "apoy", "pinsala", "alarma"],
  },
  {
    id: 2,
    type: "card_match",
    word: "apoy",
    correctMeaning: "apoy",
    options: ["apoy", "apoy", "pinsala", "alarma"],
  },
  {
    id: 3,
    type: "card_match",
    word: "pinsala",
    correctMeaning: "pinsala",
    options: ["apoy", "apoy", "pinsala", "alarma"],
  },
  {
    id: 4,
    type: "card_match",
    word: "alarma",
    correctMeaning: "alarma",
    options: ["apoy", "apoy", "pinsala", "alarma"],
  },
  { id: 5, type: "speak", word: "sunog" },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "apoy" mean?',
    correctMeaning: "flame",
    options: ["flame", "damage", "alarm", "fire"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The Tagalog equivalent of "pinsala"',
    correctWord: "pinsala",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "alarm"?',
    correctMeaning: "alarma",
    options: ["sunog", "apoy", "alarma", "pinsala"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: '"sunog" in Tagalog is',
    correctWord: "apoy",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "apoy". The detected expression is recorded for review.',
  },
];

const chapter13Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "pista",
    correctMeaning: "pista",
    options: ["pista", "plasa", "indung", "sinumpa"],
  },
  {
    id: 2,
    type: "card_match",
    word: "plasa",
    correctMeaning: "plasa",
    options: ["pista", "plasa", "indung", "sinumpa"],
  },
  {
    id: 3,
    type: "card_match",
    word: "magulang",
    correctMeaning: "indung",
    options: ["pista", "plasa", "indung", "sinumpa"],
  },
  {
    id: 4,
    type: "card_match",
    word: "isinumpa",
    correctMeaning: "sinumpa",
    options: ["pista", "plasa", "indung", "sinumpa"],
  },
  { id: 5, type: "speak", word: "pista" },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "plasa" mean?',
    correctMeaning: "town square",
    options: ["town square", "parent", "cursed", "festival"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The Tagalog equivalent of "magulang"',
    correctWord: "indung",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "cursed"?',
    correctMeaning: "isinumpa",
    options: ["pista", "plasa", "isinumpa", "magulang"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: '"pista" in Tagalog is',
    correctWord: "pista",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "plasa". The detected expression is recorded for review.',
  },
];

const chapter14Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "sulat-kamay",
    correctMeaning: "sulat-kamay",
    options: ["sulat-kamay", "duga", "mana", "bulung"],
  },
  {
    id: 2,
    type: "card_match",
    word: "dugo",
    correctMeaning: "duga",
    options: ["sulat-kamay", "duga", "mana", "bulung"],
  },
  {
    id: 3,
    type: "card_match",
    word: "pamana",
    correctMeaning: "mana",
    options: ["sulat-kamay", "duga", "mana", "bulung"],
  },
  {
    id: 4,
    type: "card_match",
    word: "bulong",
    correctMeaning: "bulung",
    options: ["sulat-kamay", "duga", "mana", "bulung"],
  },
  { id: 5, type: "speak", word: "sulat-kamay" },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "dugo" mean?',
    correctMeaning: "blood",
    options: ["blood", "legacy", "whisper", "handwriting"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The Tagalog equivalent of "pamana"',
    correctWord: "mana",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "whisper"?',
    correctMeaning: "bulong",
    options: ["sulat-kamay", "dugo", "bulong", "pamana"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: '"sulat-kamay" in Tagalog is',
    correctWord: "sulat-kamay",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "dugo". The detected expression is recorded for review.',
  },
];

const chapter15Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "lawa",
    correctMeaning: "danum",
    options: ["danum", "libingan", "kadena", "batu"],
  },
  {
    id: 2,
    type: "card_match",
    word: "libingan",
    correctMeaning: "libingan",
    options: ["danum", "libingan", "kadena", "batu"],
  },
  {
    id: 3,
    type: "card_match",
    word: "kadena",
    correctMeaning: "kadena",
    options: ["danum", "libingan", "kadena", "batu"],
  },
  {
    id: 4,
    type: "card_match",
    word: "bato",
    correctMeaning: "batu",
    options: ["danum", "libingan", "kadena", "batu"],
  },
  { id: 5, type: "speak", word: "lawa" },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "libingan" mean?',
    correctMeaning: "crypt/tomb",
    options: ["crypt/tomb", "chain", "stone", "lake"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The Tagalog equivalent of "kadena"',
    correctWord: "kadena",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "stone"?',
    correctMeaning: "bato",
    options: ["lawa", "libingan", "bato", "kadena"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: '"lawa" in Tagalog is',
    correctWord: "danum",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "libingan". The detected expression is recorded for review.',
  },
];

const chapter16Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "pari",
    correctMeaning: "pari",
    options: ["pari", "sumpa", "layunin", "katapatan"],
  },
  {
    id: 2,
    type: "card_match",
    word: "sumpa",
    correctMeaning: "sumpa",
    options: ["pari", "sumpa", "layunin", "katapatan"],
  },
  {
    id: 3,
    type: "card_match",
    word: "layunin",
    correctMeaning: "layunin",
    options: ["pari", "sumpa", "layunin", "katapatan"],
  },
  {
    id: 4,
    type: "card_match",
    word: "katapatan",
    correctMeaning: "katapatan",
    options: ["pari", "sumpa", "layunin", "katapatan"],
  },
  { id: 5, type: "speak", word: "pari" },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "sumpa" mean?',
    correctMeaning: "curse",
    options: ["curse", "intention", "loyalty", "priest"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The Tagalog equivalent of "layunin"',
    correctWord: "layunin",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "loyalty"?',
    correctMeaning: "katapatan",
    options: ["pari", "sumpa", "katapatan", "layunin"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: '"pari" in Tagalog is',
    correctWord: "pari",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "sumpa". The detected expression is recorded for review.',
  },
];

// Chapter 17: from Part 4 of docs/Bigkas-missing-questionnaires-draft.md.
// Every word appears in its chapter of docs/Whispers Tagalog.pdf; the cards and
// fill-ins ask for the English meaning.
const chapter17Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "dokumento",
    correctMeaning: "document",
    options: ["document", "debt", "fear", "information"],
  },
  {
    id: 2,
    type: "card_match",
    word: "utang",
    correctMeaning: "debt",
    options: ["document", "debt", "fear", "information"],
  },
  {
    id: 3,
    type: "card_match",
    word: "takot",
    correctMeaning: "fear",
    options: ["document", "debt", "fear", "information"],
  },
  {
    id: 4,
    type: "card_match",
    word: "impormasyon",
    correctMeaning: "information",
    options: ["document", "debt", "fear", "information"],
  },
  { id: 5, type: "speak", word: "dokumento", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "utang" mean?',
    correctMeaning: "debt",
    options: ["document", "debt", "fear", "information"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The English meaning of "takot"',
    correctWord: "fear",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "information"?',
    correctMeaning: "impormasyon",
    options: ["dokumento", "utang", "takot", "impormasyon"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: 'The English meaning of "dokumento"',
    correctWord: "document",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "utang". The detected expression is recorded for review.',
    countsAsCompleted: true,
  },
];

const chapter18Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "guni-guni",
    correctMeaning: "guni-guni",
    options: ["guni-guni", "silid", "paningin", "tala"],
  },
  {
    id: 2,
    type: "card_match",
    word: "silid",
    correctMeaning: "silid",
    options: ["guni-guni", "silid", "paningin", "tala"],
  },
  {
    id: 3,
    type: "card_match",
    word: "paningin",
    correctMeaning: "paningin",
    options: ["guni-guni", "silid", "paningin", "tala"],
  },
  {
    id: 4,
    type: "card_match",
    word: "tala",
    correctMeaning: "tala",
    options: ["guni-guni", "silid", "paningin", "tala"],
  },
  { id: 5, type: "speak", word: "guni-guni" },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "silid" mean?',
    correctMeaning: "room",
    options: ["room", "vision/sight", "note/record", "hallucination"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The Tagalog equivalent of "paningin"',
    correctWord: "paningin",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "note/record"?',
    correctMeaning: "tala",
    options: ["guni-guni", "silid", "tala", "paningin"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: '"guni-guni" in Tagalog is',
    correctWord: "guni-guni",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "silid". The detected expression is recorded for review.',
  },
];

const chapter19Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "imbestigador",
    correctMeaning: "imbestigador",
    options: ["imbestigador", "aksidente", "alaala", "budhi"],
  },
  {
    id: 2,
    type: "card_match",
    word: "aksidente",
    correctMeaning: "aksidente",
    options: ["imbestigador", "aksidente", "alaala", "budhi"],
  },
  {
    id: 3,
    type: "card_match",
    word: "alaala",
    correctMeaning: "alaala",
    options: ["imbestigador", "aksidente", "alaala", "budhi"],
  },
  {
    id: 4,
    type: "card_match",
    word: "budhi",
    correctMeaning: "budhi",
    options: ["imbestigador", "aksidente", "alaala", "budhi"],
  },
  { id: 5, type: "speak", word: "imbestigador" },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "aksidente" mean?',
    correctMeaning: "accident",
    options: ["accident", "memory", "conscience", "investigator"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The Tagalog equivalent of "alaala"',
    correctWord: "alaala",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "conscience"?',
    correctMeaning: "budhi",
    options: ["imbestigador", "aksidente", "budhi", "alaala"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: '"imbestigador" in Tagalog is',
    correctWord: "imbestigador",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "aksidente". The detected expression is recorded for review.',
  },
];

const chapter20Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "tinig",
    correctMeaning: "tinig",
    options: ["tinig", "rekord", "labi", "kadena"],
  },
  {
    id: 2,
    type: "card_match",
    word: "rekord",
    correctMeaning: "rekord",
    options: ["tinig", "rekord", "labi", "kadena"],
  },
  {
    id: 3,
    type: "card_match",
    word: "labi",
    correctMeaning: "labi",
    options: ["tinig", "rekord", "labi", "kadena"],
  },
  {
    id: 4,
    type: "card_match",
    word: "kadena",
    correctMeaning: "kadena",
    options: ["tinig", "rekord", "labi", "kadena"],
  },
  { id: 5, type: "speak", word: "tinig" },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "rekord" mean?',
    correctMeaning: "record",
    options: ["record", "remains", "chain", "voice"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The Tagalog equivalent of "labi"',
    correctWord: "labi",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "chain"?',
    correctMeaning: "kadena",
    options: ["tinig", "rekord", "kadena", "labi"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: '"tinig" in Tagalog is',
    correctWord: "tinig",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "rekord". The detected expression is recorded for review.',
  },
];

// Chapter 21: from Part 4 of docs/Bigkas-missing-questionnaires-draft.md.
// Every word appears in its chapter of docs/Whispers Tagalog.pdf; the cards and
// fill-ins ask for the English meaning.
const chapter21Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "paglilitis",
    correctMeaning: "trial",
    options: ["trial", "public", "statement", "journalist"],
  },
  {
    id: 2,
    type: "card_match",
    word: "publiko",
    correctMeaning: "public",
    options: ["trial", "public", "statement", "journalist"],
  },
  {
    id: 3,
    type: "card_match",
    word: "pahayag",
    correctMeaning: "statement",
    options: ["trial", "public", "statement", "journalist"],
  },
  {
    id: 4,
    type: "card_match",
    word: "mamamahayag",
    correctMeaning: "journalist",
    options: ["trial", "public", "statement", "journalist"],
  },
  { id: 5, type: "speak", word: "paglilitis", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "publiko" mean?',
    correctMeaning: "public",
    options: ["trial", "public", "statement", "journalist"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The English meaning of "pahayag"',
    correctWord: "statement",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "journalist"?',
    correctMeaning: "mamamahayag",
    options: ["paglilitis", "publiko", "pahayag", "mamamahayag"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: 'The English meaning of "paglilitis"',
    correctWord: "trial",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "publiko". The detected expression is recorded for review.',
    countsAsCompleted: true,
  },
];

// Chapter 22: from Part 4 of docs/Bigkas-missing-questionnaires-draft.md.
// Every word appears in its chapter of docs/Whispers Tagalog.pdf; the cards and
// fill-ins ask for the English meaning.
const chapter22Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "ninuno",
    correctMeaning: "ancestor",
    options: ["ancestor", "truth", "historical", "secretary"],
  },
  {
    id: 2,
    type: "card_match",
    word: "katotohanan",
    correctMeaning: "truth",
    options: ["ancestor", "truth", "historical", "secretary"],
  },
  {
    id: 3,
    type: "card_match",
    word: "makasaysayang",
    correctMeaning: "historical",
    options: ["ancestor", "truth", "historical", "secretary"],
  },
  {
    id: 4,
    type: "card_match",
    word: "kalihim",
    correctMeaning: "secretary",
    options: ["ancestor", "truth", "historical", "secretary"],
  },
  { id: 5, type: "speak", word: "ninuno", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "katotohanan" mean?',
    correctMeaning: "truth",
    options: ["ancestor", "historical", "truth", "secretary"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The English meaning of "makasaysayang"',
    correctWord: "historical",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "secretary"?',
    correctMeaning: "kalihim",
    options: ["kalihim", "ninuno", "katotohanan", "makasaysayang"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: 'The English meaning of "ninuno"',
    correctWord: "ancestor",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "makasaysayang". The detected expression is recorded for review.',
    countsAsCompleted: true,
  },
];

// Chapter 23: from Part 4 of docs/Bigkas-missing-questionnaires-draft.md.
// Every word appears in its chapter of docs/Whispers Tagalog.pdf; the cards and
// fill-ins ask for the English meaning.
const chapter23Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "binaligtad",
    correctMeaning: "turned around/reversed",
    options: ["turned around/reversed", "fraud / deception", "anger", "answer"],
  },
  {
    id: 2,
    type: "card_match",
    word: "panloloko",
    correctMeaning: "fraud / deception",
    options: ["turned around/reversed", "fraud / deception", "anger", "answer"],
  },
  {
    id: 3,
    type: "card_match",
    word: "galit",
    correctMeaning: "anger",
    options: ["turned around/reversed", "fraud / deception", "anger", "answer"],
  },
  {
    id: 4,
    type: "card_match",
    word: "sagot",
    correctMeaning: "answer",
    options: ["turned around/reversed", "fraud / deception", "anger", "answer"],
  },
  { id: 5, type: "speak", word: "binaligtad", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "panloloko" mean?',
    correctMeaning: "fraud / deception",
    options: ["turned around/reversed", "anger", "answer", "fraud / deception"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The English meaning of "galit"',
    correctWord: "anger",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "answer"?',
    correctMeaning: "sagot",
    options: ["binaligtad", "sagot", "panloloko", "galit"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: 'The English meaning of "binaligtad"',
    correctWord: "turned around/reversed",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "panloloko". The detected expression is recorded for review.',
    countsAsCompleted: true,
  },
];

// Chapter 24: from Part 4 of docs/Bigkas-missing-questionnaires-draft.md.
// Every word appears in its chapter of docs/Whispers Tagalog.pdf; the cards and
// fill-ins ask for the English meaning.
const chapter24Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "koro",
    correctMeaning: "chorus",
    options: ["chorus", "whisper", "voice", "afraid"],
  },
  {
    id: 2,
    type: "card_match",
    word: "bulong",
    correctMeaning: "whisper",
    options: ["chorus", "whisper", "voice", "afraid"],
  },
  {
    id: 3,
    type: "card_match",
    word: "tinig",
    correctMeaning: "voice",
    options: ["chorus", "whisper", "voice", "afraid"],
  },
  {
    id: 4,
    type: "card_match",
    word: "natatakot",
    correctMeaning: "afraid",
    options: ["chorus", "whisper", "voice", "afraid"],
  },
  { id: 5, type: "speak", word: "koro", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "bulong" mean?',
    correctMeaning: "whisper",
    options: ["whisper", "chorus", "voice", "afraid"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The English meaning of "tinig"',
    correctWord: "voice",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "afraid"?',
    correctMeaning: "natatakot",
    options: ["koro", "bulong", "natatakot", "tinig"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: 'The English meaning of "koro"',
    correctWord: "chorus",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "bulong". The detected expression is recorded for review.',
    countsAsCompleted: true,
  },
];

// Chapter 25: from Part 4 of docs/Bigkas-missing-questionnaires-draft.md.
// Every word appears in its chapter of docs/Whispers Tagalog.pdf; the cards and
// fill-ins ask for the English meaning.
const chapter25Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "kasunduan",
    correctMeaning: "agreement",
    options: ["agreement", "hidden", "signature", "inheritance"],
  },
  {
    id: 2,
    type: "card_match",
    word: "nakatago",
    correctMeaning: "hidden",
    options: ["agreement", "hidden", "signature", "inheritance"],
  },
  {
    id: 3,
    type: "card_match",
    word: "lagda",
    correctMeaning: "signature",
    options: ["agreement", "hidden", "signature", "inheritance"],
  },
  {
    id: 4,
    type: "card_match",
    word: "pamana",
    correctMeaning: "inheritance",
    options: ["agreement", "hidden", "signature", "inheritance"],
  },
  { id: 5, type: "speak", word: "kasunduan", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "nakatago" mean?',
    correctMeaning: "hidden",
    options: ["agreement", "hidden", "signature", "inheritance"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The English meaning of "lagda"',
    correctWord: "signature",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "inheritance"?',
    correctMeaning: "pamana",
    options: ["kasunduan", "nakatago", "lagda", "pamana"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: 'The English meaning of "kasunduan"',
    correctWord: "agreement",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "lagda". The detected expression is recorded for review.',
    countsAsCompleted: true,
  },
];

// Chapter 26: from Part 4 of docs/Bigkas-missing-questionnaires-draft.md.
// Every word appears in its chapter of docs/Whispers Tagalog.pdf; the cards and
// fill-ins ask for the English meaning.
const chapter26Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "tinanggap",
    correctMeaning: "accepted",
    options: ["accepted", "generation", "change", "fear"],
  },
  {
    id: 2,
    type: "card_match",
    word: "henerasyon",
    correctMeaning: "generation",
    options: ["accepted", "generation", "change", "fear"],
  },
  {
    id: 3,
    type: "card_match",
    word: "pagbabago",
    correctMeaning: "change",
    options: ["accepted", "generation", "change", "fear"],
  },
  {
    id: 4,
    type: "card_match",
    word: "takot",
    correctMeaning: "fear",
    options: ["accepted", "generation", "change", "fear"],
  },
  { id: 5, type: "speak", word: "tinanggap", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "henerasyon" mean?',
    correctMeaning: "generation",
    options: ["accepted", "change", "generation", "fear"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The English meaning of "pagbabago"',
    correctWord: "change",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "fear"?',
    correctMeaning: "takot",
    options: ["takot", "tinanggap", "henerasyon", "pagbabago"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: 'The English meaning of "tinanggap"',
    correctWord: "accepted",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "henerasyon". The detected expression is recorded for review.',
    countsAsCompleted: true,
  },
];

// Chapter 27: from Part 4 of docs/Bigkas-missing-questionnaires-draft.md.
// Every word appears in its chapter of docs/Whispers Tagalog.pdf; the cards and
// fill-ins ask for the English meaning.
const chapter27Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "pag-aalsa",
    correctMeaning: "uprising",
    options: ["uprising", "town/community", "violent", "agreement / harmony"],
  },
  {
    id: 2,
    type: "card_match",
    word: "bayan",
    correctMeaning: "town/community",
    options: ["uprising", "town/community", "violent", "agreement / harmony"],
  },
  {
    id: 3,
    type: "card_match",
    word: "marahas",
    correctMeaning: "violent",
    options: ["uprising", "town/community", "violent", "agreement / harmony"],
  },
  {
    id: 4,
    type: "card_match",
    word: "pagkakasundo",
    correctMeaning: "agreement / harmony",
    options: ["uprising", "town/community", "violent", "agreement / harmony"],
  },
  { id: 5, type: "speak", word: "pag-aalsa", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "bayan" mean?',
    correctMeaning: "town/community",
    options: ["uprising", "violent", "agreement / harmony", "town/community"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The English meaning of "marahas"',
    correctWord: "violent",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "agreement / harmony"?',
    correctMeaning: "pagkakasundo",
    options: ["pag-aalsa", "pagkakasundo", "bayan", "marahas"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: 'The English meaning of "pag-aalsa"',
    correctWord: "uprising",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "bayan". The detected expression is recorded for review.',
    countsAsCompleted: true,
  },
];

// Chapter 28: from Part 4 of docs/Bigkas-missing-questionnaires-draft.md.
// Every word appears in its chapter of docs/Whispers Tagalog.pdf; the cards and
// fill-ins ask for the English meaning.
const chapter28Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "pagtatangka",
    correctMeaning: "attempt",
    options: ["attempt", "final/last", "decided", "hammer"],
  },
  {
    id: 2,
    type: "card_match",
    word: "huling",
    correctMeaning: "final/last",
    options: ["attempt", "final/last", "decided", "hammer"],
  },
  {
    id: 3,
    type: "card_match",
    word: "napagpasyahan",
    correctMeaning: "decided",
    options: ["attempt", "final/last", "decided", "hammer"],
  },
  {
    id: 4,
    type: "card_match",
    word: "martilyo",
    correctMeaning: "hammer",
    options: ["attempt", "final/last", "decided", "hammer"],
  },
  { id: 5, type: "speak", word: "pagtatangka", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "huling" mean?',
    correctMeaning: "final/last",
    options: ["final/last", "attempt", "decided", "hammer"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The English meaning of "napagpasyahan"',
    correctWord: "decided",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "hammer"?',
    correctMeaning: "martilyo",
    options: ["pagtatangka", "huling", "martilyo", "napagpasyahan"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: 'The English meaning of "pagtatangka"',
    correctWord: "attempt",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "huling". The detected expression is recorded for review.',
    countsAsCompleted: true,
  },
];

// Chapter 29: from Part 4 of docs/Bigkas-missing-questionnaires-draft.md.
// Every word appears in its chapter of docs/Whispers Tagalog.pdf; the cards and
// fill-ins ask for the English meaning.
const chapter29Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "nabaliw",
    correctMeaning: "went mad",
    options: ["went mad", "firefighters", "household helpers", "sound"],
  },
  {
    id: 2,
    type: "card_match",
    word: "bumbero",
    correctMeaning: "firefighters",
    options: ["went mad", "firefighters", "household helpers", "sound"],
  },
  {
    id: 3,
    type: "card_match",
    word: "katulong",
    correctMeaning: "household helpers",
    options: ["went mad", "firefighters", "household helpers", "sound"],
  },
  {
    id: 4,
    type: "card_match",
    word: "tunog",
    correctMeaning: "sound",
    options: ["went mad", "firefighters", "household helpers", "sound"],
  },
  { id: 5, type: "speak", word: "nabaliw", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "bumbero" mean?',
    correctMeaning: "firefighters",
    options: ["went mad", "firefighters", "household helpers", "sound"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The English meaning of "katulong"',
    correctWord: "household helpers",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "sound"?',
    correctMeaning: "tunog",
    options: ["nabaliw", "bumbero", "katulong", "tunog"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: 'The English meaning of "nabaliw"',
    correctWord: "went mad",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "nabaliw". The detected expression is recorded for review.',
    countsAsCompleted: true,
  },
];

// Chapter 30: from Part 4 of docs/Bigkas-missing-questionnaires-draft.md.
// Every word appears in its chapter of docs/Whispers Tagalog.pdf; the cards and
// fill-ins ask for the English meaning.
const chapter30Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "pagpipilian",
    correctMeaning: "choice",
    options: ["choice", "inheritance", "to be named", "safety"],
  },
  {
    id: 2,
    type: "card_match",
    word: "pamana",
    correctMeaning: "inheritance",
    options: ["choice", "inheritance", "to be named", "safety"],
  },
  {
    id: 3,
    type: "card_match",
    word: "mapangalanan",
    correctMeaning: "to be named",
    options: ["choice", "inheritance", "to be named", "safety"],
  },
  {
    id: 4,
    type: "card_match",
    word: "kaligtasan",
    correctMeaning: "safety",
    options: ["choice", "inheritance", "to be named", "safety"],
  },
  { id: 5, type: "speak", word: "pagpipilian", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "pamana" mean?',
    correctMeaning: "inheritance",
    options: ["choice", "to be named", "inheritance", "safety"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The English meaning of "mapangalanan"',
    correctWord: "to be named",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "safety"?',
    correctMeaning: "kaligtasan",
    options: ["kaligtasan", "pagpipilian", "pamana", "mapangalanan"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: 'The English meaning of "pagpipilian"',
    correctWord: "choice",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "pamana". The detected expression is recorded for review.',
    countsAsCompleted: true,
  },
];

// Chapter 31: from Part 4 of docs/Bigkas-missing-questionnaires-draft.md.
// Every word appears in its chapter of docs/Whispers Tagalog.pdf; the cards and
// fill-ins ask for the English meaning.
const chapter31Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "huling bulong",
    correctMeaning: "final whisper",
    options: ["final whisper", "quiet / silent", "fire", "solved / resolved"],
  },
  {
    id: 2,
    type: "card_match",
    word: "tahimik",
    correctMeaning: "quiet / silent",
    options: ["final whisper", "quiet / silent", "fire", "solved / resolved"],
  },
  {
    id: 3,
    type: "card_match",
    word: "sunog",
    correctMeaning: "fire",
    options: ["final whisper", "quiet / silent", "fire", "solved / resolved"],
  },
  {
    id: 4,
    type: "card_match",
    word: "nalutas",
    correctMeaning: "solved / resolved",
    options: ["final whisper", "quiet / silent", "fire", "solved / resolved"],
  },
  { id: 5, type: "speak", word: "huling bulong", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "tahimik" mean?',
    correctMeaning: "quiet / silent",
    options: ["final whisper", "fire", "solved / resolved", "quiet / silent"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The English meaning of "sunog"',
    correctWord: "fire",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "solved / resolved"?',
    correctMeaning: "nalutas",
    options: ["huling bulong", "nalutas", "tahimik", "sunog"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: 'The English meaning of "huling bulong"',
    correctWord: "final whisper",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "tahimik". The detected expression is recorded for review.',
    countsAsCompleted: true,
  },
];

export const tagalogStoryPracticeChapters: StoryPracticeChapter[] = [
  {
    dialect: "tagalog",
    chapter: 1,
    lessonId: "story_tagalog_1",
    questions: chapter01Questions,
  },
  {
    dialect: "tagalog",
    chapter: 2,
    lessonId: "story_tagalog_2",
    questions: chapter02Questions,
  },
  {
    dialect: "tagalog",
    chapter: 3,
    lessonId: "story_tagalog_3",
    questions: chapter03Questions,
  },
  {
    dialect: "tagalog",
    chapter: 4,
    lessonId: "story_tagalog_4",
    questions: chapter04Questions,
  },
  {
    dialect: "tagalog",
    chapter: 5,
    lessonId: "story_tagalog_5",
    questions: chapter05Questions,
  },
  {
    dialect: "tagalog",
    chapter: 6,
    lessonId: "story_tagalog_6",
    questions: chapter06Questions,
  },
  {
    dialect: "tagalog",
    chapter: 7,
    lessonId: "story_tagalog_7",
    questions: chapter07Questions,
  },
  {
    dialect: "tagalog",
    chapter: 8,
    lessonId: "story_tagalog_8",
    questions: chapter08Questions,
  },
  {
    dialect: "tagalog",
    chapter: 9,
    lessonId: "story_tagalog_9",
    questions: chapter09Questions,
  },
  {
    dialect: "tagalog",
    chapter: 10,
    lessonId: "story_tagalog_10",
    questions: chapter10Questions,
  },
  {
    dialect: "tagalog",
    chapter: 11,
    lessonId: "story_tagalog_11",
    questions: chapter11Questions,
  },
  {
    dialect: "tagalog",
    chapter: 12,
    lessonId: "story_tagalog_12",
    questions: chapter12Questions,
  },
  {
    dialect: "tagalog",
    chapter: 13,
    lessonId: "story_tagalog_13",
    questions: chapter13Questions,
  },
  {
    dialect: "tagalog",
    chapter: 14,
    lessonId: "story_tagalog_14",
    questions: chapter14Questions,
  },
  {
    dialect: "tagalog",
    chapter: 15,
    lessonId: "story_tagalog_15",
    questions: chapter15Questions,
  },
  {
    dialect: "tagalog",
    chapter: 16,
    lessonId: "story_tagalog_16",
    questions: chapter16Questions,
  },
  {
    dialect: "tagalog",
    chapter: 17,
    lessonId: "story_tagalog_17",
    questions: chapter17Questions,
  },
  {
    dialect: "tagalog",
    chapter: 18,
    lessonId: "story_tagalog_18",
    questions: chapter18Questions,
  },
  {
    dialect: "tagalog",
    chapter: 19,
    lessonId: "story_tagalog_19",
    questions: chapter19Questions,
  },
  {
    dialect: "tagalog",
    chapter: 20,
    lessonId: "story_tagalog_20",
    questions: chapter20Questions,
  },
  {
    dialect: "tagalog",
    chapter: 21,
    lessonId: "story_tagalog_21",
    questions: chapter21Questions,
  },
  {
    dialect: "tagalog",
    chapter: 22,
    lessonId: "story_tagalog_22",
    questions: chapter22Questions,
  },
  {
    dialect: "tagalog",
    chapter: 23,
    lessonId: "story_tagalog_23",
    questions: chapter23Questions,
  },
  {
    dialect: "tagalog",
    chapter: 24,
    lessonId: "story_tagalog_24",
    questions: chapter24Questions,
  },
  {
    dialect: "tagalog",
    chapter: 25,
    lessonId: "story_tagalog_25",
    questions: chapter25Questions,
  },
  {
    dialect: "tagalog",
    chapter: 26,
    lessonId: "story_tagalog_26",
    questions: chapter26Questions,
  },
  {
    dialect: "tagalog",
    chapter: 27,
    lessonId: "story_tagalog_27",
    questions: chapter27Questions,
  },
  {
    dialect: "tagalog",
    chapter: 28,
    lessonId: "story_tagalog_28",
    questions: chapter28Questions,
  },
  {
    dialect: "tagalog",
    chapter: 29,
    lessonId: "story_tagalog_29",
    questions: chapter29Questions,
  },
  {
    dialect: "tagalog",
    chapter: 30,
    lessonId: "story_tagalog_30",
    questions: chapter30Questions,
  },
  {
    dialect: "tagalog",
    chapter: 31,
    lessonId: "story_tagalog_31",
    questions: chapter31Questions,
  },
];
