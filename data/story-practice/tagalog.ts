import type { StoryPracticeChapter, StoryPracticeQuestion } from "./types";

// Source: app/Tagalog questionare.pdf. Draft equivalents are preserved exactly.
// Chapters 3–6: the PDF has no draft equivalents for them, so they use the English
// meanings its items give (see the note above each one).
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

// Chapter 3: the PDF gives each word's English meaning but no Tagalog draft
// equivalent, so the cards and fill-ins ask for the English meaning.
const chapter03Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "reputasyon",
    correctMeaning: "reputation",
    options: ["reputation", "contempt", "charity", "volunteer"],
  },
  {
    id: 2,
    type: "card_match",
    word: "paghamak",
    correctMeaning: "contempt",
    options: ["reputation", "contempt", "charity", "volunteer"],
  },
  {
    id: 3,
    type: "card_match",
    word: "kawanggawa",
    correctMeaning: "charity",
    options: ["reputation", "contempt", "charity", "volunteer"],
  },
  {
    id: 4,
    type: "card_match",
    word: "boluntaryo",
    correctMeaning: "volunteer",
    options: ["reputation", "contempt", "charity", "volunteer"],
  },
  { id: 5, type: "speak", word: "reputasyon", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "paghamak" mean?',
    correctMeaning: "contempt",
    options: ["contempt", "charity", "volunteer", "reputation"],
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
    word: 'Which Tagalog word means "volunteer"?',
    correctMeaning: "boluntaryo",
    options: ["reputasyon", "paghamak", "boluntaryo", "kawanggawa"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: 'The English meaning of "reputasyon"',
    correctWord: "reputation",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "paghamak". The detected expression is recorded for review.',
    countsAsCompleted: true,
  },
];

// Chapter 4: the PDF gives each word's English meaning but no Tagalog draft
// equivalent, so the cards and fill-ins ask for the English meaning.
const chapter04Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "bulong",
    correctMeaning: "whisper",
    options: ["whisper", "debt", "fear", "kitchen"],
  },
  {
    id: 2,
    type: "card_match",
    word: "utang",
    correctMeaning: "debt",
    options: ["whisper", "debt", "fear", "kitchen"],
  },
  {
    id: 3,
    type: "card_match",
    word: "takot",
    correctMeaning: "fear",
    options: ["whisper", "debt", "fear", "kitchen"],
  },
  {
    id: 4,
    type: "card_match",
    word: "kusina",
    correctMeaning: "kitchen",
    options: ["whisper", "debt", "fear", "kitchen"],
  },
  { id: 5, type: "speak", word: "bulong", micOptional: true },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "utang" mean?',
    correctMeaning: "debt",
    options: ["debt", "fear", "kitchen", "whisper"],
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
    word: 'Which Tagalog word means "kitchen"?',
    correctMeaning: "kusina",
    options: ["bulong", "utang", "kusina", "takot"],
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

// Chapter 5: the PDF gives each word's English meaning but no Tagalog draft
// equivalent, so the cards and fill-ins ask for the English meaning.
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
    word: "sulatan-kamay",
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
    word: 'What does "sulatan-kamay" mean?',
    correctMeaning: "handwriting",
    options: ["handwriting", "evidence", "mirror", "journal"],
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
    options: ["talaarawan", "sulatan-kamay", "salamin", "ebidensya"],
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
      'Show the facial expression associated with "sulatan-kamay". The detected expression is recorded for review.',
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

const chapter08Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "kasinungalingan",
    correctMeaning: "kasinungalingan",
    options: ["kasinungalingan", "katutuan", "interpretasyon", "panganib"],
  },
  {
    id: 2,
    type: "card_match",
    word: "katotohanan",
    correctMeaning: "katutuan",
    options: ["kasinungalingan", "katutuan", "interpretasyon", "panganib"],
  },
  {
    id: 3,
    type: "card_match",
    word: "interpretasyon",
    correctMeaning: "interpretasyon",
    options: ["kasinungalingan", "katutuan", "interpretasyon", "panganib"],
  },
  {
    id: 4,
    type: "card_match",
    word: "panganib",
    correctMeaning: "panganib",
    options: ["kasinungalingan", "katutuan", "interpretasyon", "panganib"],
  },
  { id: 5, type: "speak", word: "kasinungalingan" },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "katotohanan" mean?',
    correctMeaning: "truth",
    options: ["truth", "interpretation", "danger", "lie"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The Tagalog equivalent of "interpretasyon"',
    correctWord: "interpretasyon",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "danger"?',
    correctMeaning: "panganib",
    options: ["kasinungalingan", "katotohanan", "panganib", "interpretasyon"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: '"kasinungalingan" in Tagalog is',
    correctWord: "kasinungalingan",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "katotohanan". The detected expression is recorded for review.',
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

const chapter10Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "larawan",
    correctMeaning: "larawan",
    options: ["larawan", "anino", "mata", "galaw"],
  },
  {
    id: 2,
    type: "card_match",
    word: "anino",
    correctMeaning: "anino",
    options: ["larawan", "anino", "mata", "galaw"],
  },
  {
    id: 3,
    type: "card_match",
    word: "mata",
    correctMeaning: "mata",
    options: ["larawan", "anino", "mata", "galaw"],
  },
  {
    id: 4,
    type: "card_match",
    word: "galaw",
    correctMeaning: "galaw",
    options: ["larawan", "anino", "mata", "galaw"],
  },
  { id: 5, type: "speak", word: "larawan" },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "anino" mean?',
    correctMeaning: "shadow",
    options: ["shadow", "eyes", "movement", "painting/portrait"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The Tagalog equivalent of "mata"',
    correctWord: "mata",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "movement"?',
    correctMeaning: "galaw",
    options: ["larawan", "anino", "galaw", "mata"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: '"larawan" in Tagalog is',
    correctWord: "larawan",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "anino". The detected expression is recorded for review.',
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

const chapter17Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "dokumento",
    correctMeaning: "dokumento",
    options: ["dokumento", "utang", "kabangisan", "ebidensya"],
  },
  {
    id: 2,
    type: "card_match",
    word: "utang",
    correctMeaning: "utang",
    options: ["dokumento", "utang", "kabangisan", "ebidensya"],
  },
  {
    id: 3,
    type: "card_match",
    word: "takot",
    correctMeaning: "kabangisan",
    options: ["dokumento", "utang", "kabangisan", "ebidensya"],
  },
  {
    id: 4,
    type: "card_match",
    word: "ebidensya",
    correctMeaning: "ebidensya",
    options: ["dokumento", "utang", "kabangisan", "ebidensya"],
  },
  { id: 5, type: "speak", word: "dokumento" },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "utang" mean?',
    correctMeaning: "debt",
    options: ["debt", "fear", "evidence", "document"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The Tagalog equivalent of "takot"',
    correctWord: "kabangisan",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "evidence"?',
    correctMeaning: "ebidensya",
    options: ["dokumento", "utang", "ebidensya", "takot"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: '"dokumento" in Tagalog is',
    correctWord: "dokumento",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "utang". The detected expression is recorded for review.',
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

const chapter21Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "paglilitis",
    correctMeaning: "paglilitis",
    options: ["paglilitis", "publiku", "pahayag", "akusasyon"],
  },
  {
    id: 2,
    type: "card_match",
    word: "publiko",
    correctMeaning: "publiku",
    options: ["paglilitis", "publiku", "pahayag", "akusasyon"],
  },
  {
    id: 3,
    type: "card_match",
    word: "pahayag",
    correctMeaning: "pahayag",
    options: ["paglilitis", "publiku", "pahayag", "akusasyon"],
  },
  {
    id: 4,
    type: "card_match",
    word: "akusasyon",
    correctMeaning: "akusasyon",
    options: ["paglilitis", "publiku", "pahayag", "akusasyon"],
  },
  { id: 5, type: "speak", word: "paglilitis" },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "publiko" mean?',
    correctMeaning: "public",
    options: ["public", "statement", "accusation", "trial"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The Tagalog equivalent of "pahayag"',
    correctWord: "pahayag",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "accusation"?',
    correctMeaning: "akusasyon",
    options: ["paglilitis", "publiko", "akusasyon", "pahayag"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: '"paglilitis" in Tagalog is',
    correctWord: "paglilitis",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "publiko". The detected expression is recorded for review.',
  },
];

const chapter22Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "ninuno",
    correctMeaning: "ninunu",
    options: ["ninunu", "katutuan", "kasaysayan", "lihim"],
  },
  {
    id: 2,
    type: "card_match",
    word: "katotohanan",
    correctMeaning: "katutuan",
    options: ["ninunu", "katutuan", "kasaysayan", "lihim"],
  },
  {
    id: 3,
    type: "card_match",
    word: "kasaysayan",
    correctMeaning: "kasaysayan",
    options: ["ninunu", "katutuan", "kasaysayan", "lihim"],
  },
  {
    id: 4,
    type: "card_match",
    word: "lihim",
    correctMeaning: "lihim",
    options: ["ninunu", "katutuan", "kasaysayan", "lihim"],
  },
  { id: 5, type: "speak", word: "ninuno" },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "katotohanan" mean?',
    correctMeaning: "truth",
    options: ["truth", "history", "secret", "ancestor"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The Tagalog equivalent of "kasaysayan"',
    correctWord: "kasaysayan",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "secret"?',
    correctMeaning: "lihim",
    options: ["ninuno", "katotohanan", "lihim", "kasaysayan"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: '"ninuno" in Tagalog is',
    correctWord: "ninunu",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "katotohanan". The detected expression is recorded for review.',
  },
];

const chapter23Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "binaligtad",
    correctMeaning: "binaligtad",
    options: ["binaligtad", "planu", "pagtataksil", "pamili"],
  },
  {
    id: 2,
    type: "card_match",
    word: "plano",
    correctMeaning: "planu",
    options: ["binaligtad", "planu", "pagtataksil", "pamili"],
  },
  {
    id: 3,
    type: "card_match",
    word: "pagtataksil",
    correctMeaning: "pagtataksil",
    options: ["binaligtad", "planu", "pagtataksil", "pamili"],
  },
  {
    id: 4,
    type: "card_match",
    word: "pagpili",
    correctMeaning: "pamili",
    options: ["binaligtad", "planu", "pagtataksil", "pamili"],
  },
  { id: 5, type: "speak", word: "binaligtad" },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "plano" mean?',
    correctMeaning: "plan",
    options: ["plan", "betrayal", "choice", "turned around/reversed"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The Tagalog equivalent of "pagtataksil"',
    correctWord: "pagtataksil",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "choice"?',
    correctMeaning: "pagpili",
    options: ["binaligtad", "plano", "pagpili", "pagtataksil"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: '"binaligtad" in Tagalog is',
    correctWord: "binaligtad",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "plano". The detected expression is recorded for review.',
  },
];

const chapter24Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "koro",
    correctMeaning: "koro",
    options: ["koro", "bulung", "tinig", "tunog"],
  },
  {
    id: 2,
    type: "card_match",
    word: "bulong",
    correctMeaning: "bulung",
    options: ["koro", "bulung", "tinig", "tunog"],
  },
  {
    id: 3,
    type: "card_match",
    word: "tinig",
    correctMeaning: "tinig",
    options: ["koro", "bulung", "tinig", "tunog"],
  },
  {
    id: 4,
    type: "card_match",
    word: "tunog",
    correctMeaning: "tunog",
    options: ["koro", "bulung", "tinig", "tunog"],
  },
  { id: 5, type: "speak", word: "koro" },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "bulong" mean?',
    correctMeaning: "whisper",
    options: ["whisper", "voice", "sound", "chorus"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The Tagalog equivalent of "tinig"',
    correctWord: "tinig",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "sound"?',
    correctMeaning: "tunog",
    options: ["koro", "bulong", "tunog", "tinig"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: '"koro" in Tagalog is',
    correctWord: "koro",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "bulong". The detected expression is recorded for review.',
  },
];

const chapter25Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "kasunduan",
    correctMeaning: "kasunduan",
    options: ["kasunduan", "nakatago", "pangaku", "mana"],
  },
  {
    id: 2,
    type: "card_match",
    word: "nakatago",
    correctMeaning: "nakatago",
    options: ["kasunduan", "nakatago", "pangaku", "mana"],
  },
  {
    id: 3,
    type: "card_match",
    word: "pangako",
    correctMeaning: "pangaku",
    options: ["kasunduan", "nakatago", "pangaku", "mana"],
  },
  {
    id: 4,
    type: "card_match",
    word: "pamana",
    correctMeaning: "mana",
    options: ["kasunduan", "nakatago", "pangaku", "mana"],
  },
  { id: 5, type: "speak", word: "kasunduan" },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "nakatago" mean?',
    correctMeaning: "hidden",
    options: ["hidden", "promise", "inheritance", "agreement"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The Tagalog equivalent of "pangako"',
    correctWord: "pangaku",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "inheritance"?',
    correctMeaning: "pamana",
    options: ["kasunduan", "nakatago", "pamana", "pangako"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: '"kasunduan" in Tagalog is',
    correctWord: "kasunduan",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "nakatago". The detected expression is recorded for review.',
  },
];

const chapter26Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "tinanggap",
    correctMeaning: "tinanggap",
    options: ["tinanggap", "ninunu", "pag-amin", "kabangisan"],
  },
  {
    id: 2,
    type: "card_match",
    word: "ninuno",
    correctMeaning: "ninunu",
    options: ["tinanggap", "ninunu", "pag-amin", "kabangisan"],
  },
  {
    id: 3,
    type: "card_match",
    word: "pag-amin",
    correctMeaning: "pag-amin",
    options: ["tinanggap", "ninunu", "pag-amin", "kabangisan"],
  },
  {
    id: 4,
    type: "card_match",
    word: "takot",
    correctMeaning: "kabangisan",
    options: ["tinanggap", "ninunu", "pag-amin", "kabangisan"],
  },
  { id: 5, type: "speak", word: "tinanggap" },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "ninuno" mean?',
    correctMeaning: "ancestor",
    options: ["ancestor", "admission", "fear", "accepted"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The Tagalog equivalent of "pag-amin"',
    correctWord: "pag-amin",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "fear"?',
    correctMeaning: "takot",
    options: ["tinanggap", "ninuno", "takot", "pag-amin"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: '"tinanggap" in Tagalog is',
    correctWord: "tinanggap",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "ninuno". The detected expression is recorded for review.',
  },
];

const chapter27Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "pag-aalsa",
    correctMeaning: "pag-aalsa",
    options: ["pag-aalsa", "bayan", "amu", "pagkakaisa"],
  },
  {
    id: 2,
    type: "card_match",
    word: "bayan",
    correctMeaning: "bayan",
    options: ["pag-aalsa", "bayan", "amu", "pagkakaisa"],
  },
  {
    id: 3,
    type: "card_match",
    word: "galit",
    correctMeaning: "amu",
    options: ["pag-aalsa", "bayan", "amu", "pagkakaisa"],
  },
  {
    id: 4,
    type: "card_match",
    word: "pagkakaisa",
    correctMeaning: "pagkakaisa",
    options: ["pag-aalsa", "bayan", "amu", "pagkakaisa"],
  },
  { id: 5, type: "speak", word: "pag-aalsa" },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "bayan" mean?',
    correctMeaning: "town/community",
    options: ["town/community", "anger", "unity", "uprising"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The Tagalog equivalent of "galit"',
    correctWord: "amu",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "unity"?',
    correctMeaning: "pagkakaisa",
    options: ["pag-aalsa", "bayan", "pagkakaisa", "galit"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: '"pag-aalsa" in Tagalog is',
    correctWord: "pag-aalsa",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "bayan". The detected expression is recorded for review.',
  },
];

const chapter28Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "pagtatangka",
    correctMeaning: "pagtatangka",
    options: ["pagtatangka", "huling", "desisyon", "panganib"],
  },
  {
    id: 2,
    type: "card_match",
    word: "huling",
    correctMeaning: "huling",
    options: ["pagtatangka", "huling", "desisyon", "panganib"],
  },
  {
    id: 3,
    type: "card_match",
    word: "desisyon",
    correctMeaning: "desisyon",
    options: ["pagtatangka", "huling", "desisyon", "panganib"],
  },
  {
    id: 4,
    type: "card_match",
    word: "panganib",
    correctMeaning: "panganib",
    options: ["pagtatangka", "huling", "desisyon", "panganib"],
  },
  { id: 5, type: "speak", word: "pagtatangka" },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "huling" mean?',
    correctMeaning: "final/last",
    options: ["final/last", "decision", "danger", "attempt"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The Tagalog equivalent of "desisyon"',
    correctWord: "desisyon",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "danger"?',
    correctMeaning: "panganib",
    options: ["pagtatangka", "huling", "panganib", "desisyon"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: '"pagtatangka" in Tagalog is',
    correctWord: "pagtatangka",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "huling". The detected expression is recorded for review.',
  },
];

const chapter29Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "nawala sa katinuan",
    correctMeaning: "nawala sa katinuan",
    options: ["nawala sa katinuan", "alaala", "pagkalito", "katutuan"],
  },
  {
    id: 2,
    type: "card_match",
    word: "alaala",
    correctMeaning: "alaala",
    options: ["nawala sa katinuan", "alaala", "pagkalito", "katutuan"],
  },
  {
    id: 3,
    type: "card_match",
    word: "pagkalito",
    correctMeaning: "pagkalito",
    options: ["nawala sa katinuan", "alaala", "pagkalito", "katutuan"],
  },
  {
    id: 4,
    type: "card_match",
    word: "katotohanan",
    correctMeaning: "katutuan",
    options: ["nawala sa katinuan", "alaala", "pagkalito", "katutuan"],
  },
  { id: 5, type: "speak", word: "nawala sa katinuan" },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "alaala" mean?',
    correctMeaning: "memory",
    options: ["memory", "confusion", "truth", "lost sanity"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The Tagalog equivalent of "pagkalito"',
    correctWord: "pagkalito",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "truth"?',
    correctMeaning: "katotohanan",
    options: ["nawala sa katinuan", "alaala", "katotohanan", "pagkalito"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: '"nawala sa katinuan" in Tagalog is',
    correctWord: "nawala sa katinuan",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "alaala". The detected expression is recorded for review.',
  },
];

const chapter30Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "pagpipilian",
    correctMeaning: "pamili",
    options: ["pamili", "mana", "lagyu", "kinabukasan"],
  },
  {
    id: 2,
    type: "card_match",
    word: "pamana",
    correctMeaning: "mana",
    options: ["pamili", "mana", "lagyu", "kinabukasan"],
  },
  {
    id: 3,
    type: "card_match",
    word: "pangalan",
    correctMeaning: "lagyu",
    options: ["pamili", "mana", "lagyu", "kinabukasan"],
  },
  {
    id: 4,
    type: "card_match",
    word: "kinabukasan",
    correctMeaning: "kinabukasan",
    options: ["pamili", "mana", "lagyu", "kinabukasan"],
  },
  { id: 5, type: "speak", word: "pagpipilian" },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "pamana" mean?',
    correctMeaning: "inheritance",
    options: ["inheritance", "name", "future", "choice"],
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
    word: 'Which Tagalog word means "future"?',
    correctMeaning: "kinabukasan",
    options: ["pagpipilian", "pamana", "kinabukasan", "pangalan"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: '"pagpipilian" in Tagalog is',
    correctWord: "pamili",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "pamana". The detected expression is recorded for review.',
  },
];

const chapter31Questions: StoryPracticeQuestion[] = [
  {
    id: 1,
    type: "card_match",
    word: "huling bulong",
    correctMeaning: "huling bulung",
    options: ["huling bulung", "katahimikan", "pag-asa", "pagpapasya"],
  },
  {
    id: 2,
    type: "card_match",
    word: "katahimikan",
    correctMeaning: "katahimikan",
    options: ["huling bulung", "katahimikan", "pag-asa", "pagpapasya"],
  },
  {
    id: 3,
    type: "card_match",
    word: "pag-asa",
    correctMeaning: "pag-asa",
    options: ["huling bulung", "katahimikan", "pag-asa", "pagpapasya"],
  },
  {
    id: 4,
    type: "card_match",
    word: "pagpapasya",
    correctMeaning: "pagpapasya",
    options: ["huling bulung", "katahimikan", "pag-asa", "pagpapasya"],
  },
  { id: 5, type: "speak", word: "huling bulong" },
  {
    id: 6,
    type: "multiple_choice",
    word: 'What does "katahimikan" mean?',
    correctMeaning: "silence",
    options: ["silence", "hope", "decision", "final whisper"],
  },
  {
    id: 7,
    type: "fill_blank",
    meaning: 'The Tagalog equivalent of "pag-asa"',
    correctWord: "pag-asa",
  },
  {
    id: 8,
    type: "multiple_choice",
    word: 'Which Tagalog word means "decision"?',
    correctMeaning: "pagpapasya",
    options: ["huling bulong", "katahimikan", "pagpapasya", "pag-asa"],
  },
  {
    id: 9,
    type: "fill_blank",
    meaning: '"huling bulong" in Tagalog is',
    correctWord: "huling bulung",
  },
  {
    id: 10,
    type: "expression",
    prompt:
      'Show the facial expression associated with "katahimikan". The detected expression is recorded for review.',
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
