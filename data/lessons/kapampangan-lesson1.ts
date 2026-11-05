import {
  LessonGreeting,
  LessonSpeaking,
  LessonVocabularyItem,
  StructuredLesson,
} from "../../types/structuredLesson";

// Kapampangan Lesson 1 — copied from "Kapampangan_Lesson_1.pdf", a
// translation of the Tagalog Lesson 1. Nothing was corrected.
//
// The document marks these phrases "(?)" — to be checked by a native
// Kapampangan speaker. The marks are left out of what learners see:
//   - Intro: "Keng kultura ning Filipinu, mapilan ya ing bati at respetu
//     nung kayabe mu ding pamilya, kaibigan, guru, at e mu kilala."
//   - Paalam (Goodbye)
//   - Alì examples: "Alì, e ku ya ing sira ning bage a iyan.",
//     "Alì, e ku ya ing mikit."
//   - Kaluguran example: "Malagu ya ing kaibigan mu!"
//   - Wa naman example: "Wa naman, makamunta ku bayu ya mamulang."
//   - "Masaya ku a makilala daka." (Nice to meet you)
//   - "Pilan na kang banua?" (How old are you?)
//   - "Labinsiyam a banua ku na." (I am 19 years old.)

// Common Greetings and Their Usage
const greetings: LessonGreeting[] = [
  {
    term: "Mayap a abak",
    meaning: "Good morning",
    usage: "Used when greeting someone in the morning.",
    example: [
      { speaker: "A", text: "Mayap a abak!" },
      { speaker: "B", text: "Mayap a abak din!" },
    ],
  },
  {
    term: "Mayap a gatpanapun",
    meaning: "Good afternoon",
    usage: "Used when greeting someone during the afternoon.",
    example: [
      { speaker: "A", text: "Mayap a gatpanapun pu, Guru!" },
      { speaker: "B", text: "Mayap a gatpanapun din keka!" },
    ],
  },
  {
    term: "Mayap a bengi",
    meaning: "Good evening",
    usage: "Used when greeting someone in the evening.",
    example: [
      { speaker: "A", text: "Mayap a bengi!" },
      { speaker: "B", text: "Mayap a bengi din!" },
    ],
  },
  {
    term: "Kumusta?",
    meaning: "How are you?",
    usage: "Used to ask someone how they are doing.",
    example: [
      { speaker: "A", text: "Kumusta ka?" },
      { speaker: "B", text: "Mayap naman. Ika?" },
      { speaker: "A", text: "Mayap din, salamat!" },
    ],
  },
  {
    term: "Paalam",
    meaning: "Goodbye",
    usage: "Used when leaving or ending a conversation.",
    example: [
      { speaker: "A", text: "Paalam! Mikit tapa bukas." },
      { speaker: "B", text: "Sige! Mag-ingat ka!" },
    ],
  },
];

const fromGreeting = (term: string) => {
  const greeting = greetings.find(
    (item) => item.term.toLowerCase() === term.toLowerCase(),
  );
  return greeting ? { usage: greeting.usage, example: greeting.example } : {};
};

// Vocabulary + Pronunciation Guide. Usage and examples for Wa, Alì,
// Lagyu, Kaluguran and Wa naman are from the greetings section of the
// document; Ika and Mayap reuse the Kumusta? dialogue and Aku the
// self-introduction, as in the Tagalog lesson.
const vocabulary: LessonVocabularyItem[] = [
  {
    term: "Kumusta?",
    meaning: "How are you?",
    pronunciation: "ku-mus-ta",
    ...fromGreeting("Kumusta?"),
  },
  {
    term: "Mayap a abak",
    meaning: "Good morning",
    pronunciation: "ma-yap a a-bak",
    ...fromGreeting("Mayap a abak"),
  },
  {
    term: "Mayap a gatpanapun",
    meaning: "Good afternoon",
    pronunciation: "ma-yap a gat-pa-na-pun",
    ...fromGreeting("Mayap a gatpanapun"),
  },
  {
    term: "Mayap a bengi",
    meaning: "Good evening",
    pronunciation: "ma-yap a be-ngi",
    ...fromGreeting("Mayap a bengi"),
  },
  {
    term: "Paalam",
    meaning: "Goodbye",
    pronunciation: "a-di-yos",
    ...fromGreeting("Paalam"),
  },
  {
    term: "Salamat",
    meaning: "Thank you",
    pronunciation: "sa-la-mat",
    example: [{ speaker: "", text: "Salamat king saup mu." }],
  },
  {
    term: "Wa",
    meaning: "Yes",
    usage: "Used when answering a question or agreeing.",
    example: [
      { speaker: "A", text: "Wa, aku ya ing kausap mu." },
      { speaker: "B", text: "Wa, mamunta na ku." },
    ],
  },
  {
    term: "Alì",
    meaning: "No",
    usage: "Used when you do not agree.",
    example: [
      { speaker: "A", text: "Alì, e ku ya ing sira ning bage a iyan." },
      { speaker: "B", text: "Alì, e ku ya ing mikit." },
    ],
  },
  {
    term: "Aku",
    meaning: "I / Me",
    example: [{ speaker: "", text: "Aku si Ana.", translation: "I am Ana." }],
  },
  {
    term: "Ika",
    meaning: "You",
    example: fromGreeting("Kumusta?").example,
  },
  {
    term: "Lagyu",
    meaning: "Name",
    pronunciation: "lag-yu",
    example: [
      { speaker: "A", text: "Nanu ya ing lagyu mu?" },
      { speaker: "B", text: "Nanu ya ing lagyu ning kaibigan mu?" },
    ],
  },
  {
    term: "Kaluguran",
    meaning: "Friend",
    pronunciation: "ka-lu-gu-ran",
    example: [
      { speaker: "A", text: "Malagu ya ing kaibigan mu!" },
      { speaker: "B", text: "Sinu ya ing kaibigan a kayabe mu?" },
    ],
  },
  {
    term: "Mayap",
    meaning: "Good / Fine",
    pronunciation: "ma-yap",
    example: fromGreeting("Kumusta?").example,
  },
  {
    term: "Wa naman",
    meaning: "Of course / Certainly",
    usage: "Used when you are sure of your answer.",
    example: [
      { speaker: "A", text: "Wa naman, mamunta ku." },
      { speaker: "B", text: "Wa naman, makamunta ku bayu ya mamulang." },
    ],
  },
  {
    term: "Pasensya na",
    meaning: "I'm sorry / Excuse me",
    pronunciation: "pa-sen-sya na",
  },
];

// Activity 4: Speaking Practice. English meanings are from the lesson
// where it gives them; "Salamat king saup mu." and "Paalam! Mag-ingat
// ka!" follow the Tagalog lesson's meanings, to be confirmed.
const speaking: LessonSpeaking = {
  title: "Speaking Practice",
  instructions: "Read the following sentences aloud.",
  note: "Learners should listen to the model pronunciation before recording their own voices.",
  practiceLessonId: "kapampangan_1",
  phrases: [
    {
      id: "1",
      text: "Mayap a abak!",
      respelling: "ma-yap a a-bak",
      meaning: "Good morning",
    },
    { id: "2", text: "Kumusta ka?", meaning: "How are you?" },
    { id: "3", text: "Aku si Maria.", meaning: "I am Maria." },
    { id: "4", text: "Taga Pampanga ku.", meaning: "I am from Pampanga." },
    {
      id: "5",
      text: "Masaya ku akilala daka.",
      meaning: "Nice to meet you.",
    },
    {
      id: "6",
      text: "Salamat king saup mu.",
      meaning: "Thank you for your help.",
    },
    { id: "7", text: "Paalam! Mag-ingat ka!", meaning: "Goodbye! Take care!" },
  ],
};

export const kapampanganLesson1: StructuredLesson = {
  lessonId: "kapampangan_1",
  dialect: "kapampangan",
  dialectLabel: "Kapampangan",
  lessonNumber: 1,
  title: "Basic Greetings and Self-Introduction",
  level: "Beginner",
  unit: "Fundamentals",

  // Lesson Introduction
  intro: [
    "Ing bati ya ing gamit nung mikilala ka keng aliwa, nung mamagumpisa ka king pamagsalita, o nung magpakit ka ning respetu. Keng kultura ning Filipinu, mapilan ya ing bati at respetu nung kayabe mu ding pamilya, kaibigan, guru, at e mu kilala.",
    "Keng leksyun a ini, mamamag-aral ka nung makananu kang magbati, magpakilala, at sumagut king simple a tanung king Kapampangan.",
  ],
  exampleSituation: {
    description:
      "Isipan mu a mikilala ka king bayung kaklase. Gustu mu yang batiin, magpakilala, at itanung ing lagyu na.",
    lead: "Pwede kang magumpisa ing:",
    line: "Mayap a aldo! ing lagyu ku Ana. Nanu ya ing lagyu mu?",
    translation: "Good day! I am Ana. What is your name?",
  },

  // Learning Objectives
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify and understand common Kapampangan greetings.",
    "Use appropriate greetings depending on the time of day and situation.",
    "Introduce themselves using simple Kapampangan sentences.",
    "Ask and answer basic questions about names and personal information.",
    "Use common polite expressions when interacting with others.",
  ],

  vocabularyIntro:
    "Learn the following words and expressions before proceeding to the activities.",
  vocabulary,
  pronunciationTip:
    "Read each syllable clearly. Avoid rushing through longer expressions.",

  greetings,

  // Self-Introduction
  selfIntroIntro:
    "A self-introduction is a way of telling someone basic information about yourself.",
  patterns: [
    {
      label: "Pattern 1: Introducing Your Name",
      pattern: "Aku si + Name.",
      examples: ["Aku si Maria.", "Aku si Juan.", "Aku si Carlos."],
    },
    {
      label: "Pattern 2: Asking Someone's Name",
      pattern: "Nanu ya ing lagyu mu?",
    },
    {
      label: "Pattern 3: Saying Where You Are From",
      pattern: "Taga + Place + ku.",
      examples: ["Taga Manila ku.", "Taga Pampanga ku.", "Taga Cebu ku."],
    },
    {
      label: "Pattern 4: Asking Where Someone Is From",
      pattern: "Taga nokarin ka?",
    },
  ],
  sentences: [
    { text: "Aku si Ana.", meaning: "I am Ana." },
    { text: "Ing lagyu ku ay Ana.", meaning: "My name is Ana." },
    { text: "Nanu ya ing lagyu mu?", meaning: "What is your name?" },
    { text: "Taga nokarin ka?", meaning: "Where are you from?" },
    { text: "Taga Angeles City ku.", meaning: "I am from Angeles City." },
    { text: "Masaya ku akilala daka.", meaning: "Nice to meet you." },
    { text: "Pilan na kang banua?", meaning: "How old are you?" },
    { text: "Labinsiyam a banua ku na.", meaning: "I am 19 years old." },
  ],

  // Guided Conversation
  conversation: {
    instructions:
      "Read the conversation below. Pay attention to how the speakers greet each other and introduce themselves.",
    situation: "Two students meet for the first time at school.",
    lines: [
      { speaker: "Ana", text: "Mayap a abak!" },
      { speaker: "Mark", text: "Mayap a abak din!" },
      { speaker: "Ana", text: "Aku si Ana. Nanu ya ing lagyu mu?" },
      { speaker: "Mark", text: "Aku si Mark. Masaya ku akilala daka." },
      {
        speaker: "Ana",
        text: "Masaya ku din a makilala daka! Taga nokarin ka?",
      },
      { speaker: "Mark", text: "Taga Pampanga ku. Kumusta ka naman?" },
      { speaker: "Ana", text: "Mayap naman, salamat. Ika?" },
      { speaker: "Mark", text: "Mayap din!" },
      { speaker: "Ana", text: "Sige, mikit tana mu pota. paalam!" },
      { speaker: "Mark", text: "Paalam! mimingat ka!" },
    ],
    comprehensionQuestions: [
      "What greeting did Ana use?",
      "What is the name of the second student?",
      "Where is Mark from?",
      "How did Ana respond when Mark asked how she was?",
      "What expression did they use when ending their conversation?",
    ],
  },

  // Activity 1 (answers from the document's lettering)
  matchActivity: {
    title: "Match the Greeting",
    instructions: "Match the Kapampangan expression with its English meaning.",
    pairs: [
      { id: "1", term: "Mayap a abak", answer: "Good morning" },
      { id: "2", term: "Salamat", answer: "Thank you" },
      { id: "3", term: "Paalaam", answer: "Goodbye" },
      { id: "4", term: "Mayap a bengi", answer: "Good evening" },
      { id: "5", term: "Kumusta?", answer: "How are you?" },
    ],
  },

  // Activity 2 — sentences and hints as in the document. Answers inferred
  // (no answer key), to be confirmed by the lesson author.
  fillInBlanks: {
    title: "Fill in the Blanks",
    instructions:
      "Complete each sentence using the appropriate Kapampangan word.",
    items: [
      {
        id: "1",
        sentence: "____________! Aku si Maria.",
        hint: "Good morning",
        answer: "Mayap a abak",
      },
      {
        id: "2",
        sentence: "Nanu ya ing __________ mu?",
        hint: "Name",
        answer: "lagyu",
      },
      {
        id: "3",
        sentence: "___________ si Juan.",
        hint: "I am",
        answer: "Aku",
      },
      {
        id: "4",
        sentence: "___________ naman. Salamat!",
        hint: "Fine",
        answer: "Mayap",
      },
      {
        id: "5",
        sentence: "___________! Mikit tapa bukas.",
        hint: "Goodbye",
        answer: "Paalam",
      },
    ],
  },

  // Activity 3 — tiles as listed in the document. Answers and the finished
  // sentences' capitals and punctuation are inferred from the lesson's own
  // sentences, to be confirmed by the lesson author.
  arrangeWords: {
    title: "Arrange the Words",
    instructions: "Arrange the words to form a correct Kapampangan sentence.",
    items: [
      {
        id: "1",
        words: ["si", "Aku", "Pedro"],
        answer: ["Aku", "si", "Pedro"],
        display: "Aku si Pedro.",
      },
      {
        id: "2",
        words: ["lagyu", "Nanu", "mu", "ing", "ya"],
        answer: ["Nanu", "ya", "ing", "lagyu", "mu"],
        display: "Nanu ya ing lagyu mu?",
      },
      {
        id: "3",
        words: ["ku", "Pampanga", "Taga"],
        answer: ["Taga", "Pampanga", "ku"],
        display: "Taga Pampanga ku.",
      },
      {
        id: "4",
        words: ["ka", "kumusta"],
        answer: ["kumusta", "ka"],
        display: "Kumusta ka?",
      },
      {
        id: "5",
        words: ["akilala", "Masaya", "daka", "ku"],
        answer: ["Masaya", "ku", "akilala", "daka"],
        display: "Masaya ku akilala daka.",
      },
    ],
  },

  speaking,

  // Lesson Assessment (answer key: 1 B, 2 C, 3 A, 4 B, 5 C)
  assessment: {
    instructions: "Choose the correct answer for each question.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: 'Which expression means "Good morning"?',
        options: [
          { key: "A", text: "Mayap a bengi" },
          { key: "B", text: "Mayap a abak" },
          { key: "C", text: "Paalam" },
          { key: "D", text: "Salamat" },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: 'What does "Nanu ya ing lagyu mu?" mean?',
        options: [
          { key: "A", text: "Where are you from?" },
          { key: "B", text: "How old are you?" },
          { key: "C", text: "What is your name?" },
          { key: "D", text: "How are you?" },
        ],
        answerKey: "C",
      },
      {
        id: 3,
        prompt: "Which sentence correctly introduces your name?",
        options: [
          { key: "A", text: "Aku si Maria." },
          { key: "B", text: "Kumusta si Maria?" },
          { key: "C", text: "Paalam si Maria." },
          { key: "D", text: "Salamat si Maria." },
        ],
        answerKey: "A",
      },
      {
        id: 4,
        prompt: 'What is the meaning of "Salamat"?',
        options: [
          { key: "A", text: "Goodbye" },
          { key: "B", text: "Thank you" },
          { key: "C", text: "Good morning" },
          { key: "D", text: "Excuse me" },
        ],
        answerKey: "B",
      },
      {
        id: 5,
        prompt: "Which expression is appropriate when ending a conversation?",
        options: [
          { key: "A", text: "Kumusta?" },
          { key: "B", text: "Mayap a gatpanapun" },
          { key: "C", text: "Paalam" },
          { key: "D", text: "Nanu ya ing lagyu mu?" },
        ],
        answerKey: "C",
      },
    ],
  },

  // Gamification and Rewards
  rewards: {
    items: [
      { section: "vocabulary", label: "Complete vocabulary learning", xp: 10 },
      { section: "conversation", label: "Finish guided conversation", xp: 10 },
      { section: "match", label: "Complete matching activity", xp: 5 },
      { section: "sentences", label: "Complete sentence exercises", xp: 10 },
      { section: "speaking", label: "Complete speaking practice", xp: 10 },
      { section: "assessment", label: "Pass lesson assessment", xp: 15 },
    ],
    total: 60,
    badge: {
      name: "First Words Badge",
      description: "Awarded after successfully completing the first lesson.",
    },
    completionRequirement:
      "Obtain at least 70% in the lesson assessment. Learners may repeat the activities and assessment if they do not meet the requirement.",
  },

  // Activity 5 — no screen yet (same as the Tagalog lesson).
  extraActivities: [
    {
      title: "Introduce Yourself",
      instructions:
        "Complete the following self-introduction using your own information.",
      items: [
        "Mayap a aldo!",
        "Aku si _______.",
        "Taga _______ ku.",
        "_________ a banua ku na.",
        "Masaya ku a makilala kayu!",
      ],
      note: "Record your introduction using the application's speaking activity.",
    },
  ],
};
