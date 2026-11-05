import {
  LessonGreeting,
  LessonVocabularyItem,
  StructuredLesson,
} from "../../types/structuredLesson";
import { tagalogLesson1Speaking } from "./tagalog-lesson1-speaking";

// Tagalog Lesson 1 — copied from docs/Lesson content.pdf. Only these
// typos were corrected: "Panganlan" → "Pangalan", "Ikanagagalak" →
// "Ikinagagalak", "Magandang araw1" → "Magandang araw!". Everything else
// is as written in the document.

// IV. Common Greetings and Their Usage
const greetings: LessonGreeting[] = [
  {
    term: "Magandang Umaga",
    meaning: "Good morning",
    usage: "Used when greeting someone in the morning.",
    example: [
      { speaker: "A", text: "Magandang umaga!" },
      { speaker: "B", text: "Magandang umaga rin!" },
    ],
    audioUrl: require("../../assets/audio/Tagalog/magandang umaga.aac"),
  },
  {
    term: "Magandang Hapon",
    meaning: "Good afternoon",
    usage: "Used when greeting someone during the afternoon.",
    example: [
      { speaker: "A", text: "Magandang hapon po, Guro!" },
      { speaker: "B", text: "Magandang hapon din sa iyo!" },
    ],
    audioUrl: require("../../assets/audio/Tagalog/magandang hapon.aac"),
  },
  {
    term: "Magandang Gabi",
    meaning: "Good evening",
    usage: "Used when greeting someone in the evening.",
    example: [
      { speaker: "A", text: "Magandang gabi!" },
      { speaker: "B", text: "Magandang gabi rin!" },
    ],
    audioUrl: require("../../assets/audio/Tagalog/magandang gabi.aac"),
  },
  {
    term: "Kamusta?",
    meaning: "How are you?",
    usage: "Used to ask someone how they are doing.",
    example: [
      { speaker: "A", text: "Kamusta ka?" },
      { speaker: "B", text: "Mabuti naman. Ikaw?" },
      { speaker: "A", text: "Mabuti rin, salamat!" },
    ],
    audioUrl: require("../../assets/audio/Tagalog/kamusta.aac"),
  },
  {
    term: "Paalam",
    meaning: "Goodbye",
    usage: "Used when leaving or ending a conversation.",
    example: [
      { speaker: "A", text: "Paalam! Magkita tayo bukas." },
      { speaker: "B", text: "Sige! Ingat Ka!" },
    ],
    audioUrl: require("../../assets/audio/Tagalog/paalay.aac"),
  },
];

// The vocabulary card reuses the greeting's usage and example for the
// words that also appear in section IV.
const fromGreeting = (term: string) => {
  const greeting = greetings.find(
    (item) => item.term.toLowerCase() === term.toLowerCase(),
  );
  return greeting ? { usage: greeting.usage, example: greeting.example } : {};
};

// III. Vocabulary + Pronunciation Guide
const vocabulary: LessonVocabularyItem[] = [
  {
    term: "Kamusta?",
    meaning: "How are you?",
    pronunciation: "ka-mus-ta",
    ...fromGreeting("Kamusta?"),
    audioUrl: require("../../assets/audio/Tagalog/kamusta.aac"),
  },
  {
    term: "Magandang umaga",
    meaning: "Good morning",
    pronunciation: "ma-gan-dang u-ma-ga",
    ...fromGreeting("Magandang umaga"),
    audioUrl: require("../../assets/audio/Tagalog/magandang umaga.aac"),
  },
  {
    term: "Magandang hapon",
    meaning: "Good afternoon",
    pronunciation: "ma-gan-dang ha-pon",
    ...fromGreeting("Magandang hapon"),
    audioUrl: require("../../assets/audio/Tagalog/magandang hapon.aac"),
  },
  {
    term: "Magandang gabi",
    meaning: "Good evening",
    pronunciation: "ma-gan-dang ga-bi",
    ...fromGreeting("Magandang gabi"),
    audioUrl: require("../../assets/audio/Tagalog/magandang gabi.aac"),
  },
  {
    term: "Paalam",
    meaning: "Goodbye",
    pronunciation: "pa-a-lam",
    ...fromGreeting("Paalam"),
    audioUrl: require("../../assets/audio/Tagalog/paalay.aac"),
  },
  // Examples for Salamat, Ako, Ikaw and Mabuti come from elsewhere in
  // Lesson 1: Activity 4 (Salamat), the self-introduction table (Ako) and
  // the Kamusta? dialogue (Ikaw, Mabuti). Usage and examples for Oo,
  // Hindi, Pangalan, Kaibigan and Oo naman were supplied by the content
  // author separately, copied as given. Pasensya na has no example yet.
  {
    term: "Salamat",
    meaning: "Thank you",
    pronunciation: "sa-la-mat",
    example: [{ speaker: "", text: "Salamat sa iyong tulong." }],
    audioUrl: require("../../assets/audio/Tagalog/Salamat.aac"),
  },
  {
    term: "Oo",
    meaning: "Yes",
    usage: "Used when answering a conversation.",
    example: [
      { speaker: "A", text: "Oo ako ang iyong kausap" },
      { speaker: "B", text: "Oo ako ay pupunta na" },
    ],
    audioUrl: require("../../assets/audio/Tagalog/oo.aac"),
  },
  {
    term: "Hindi",
    meaning: "No",
    usage: "Used when you don't agree to the conversation.",
    example: [
      { speaker: "A", text: "Hindi ako ang nakasira ng gamit na yan" },
      { speaker: "B", text: "Hindi ako ang nakakita" },
    ],
    audioUrl: require("../../assets/audio/Tagalog/hindi.aac"),
  },
  {
    term: "Ako",
    meaning: "I / Me",
    example: [{ speaker: "", text: "Ako si Ana.", translation: "I am Ana." }],
    audioUrl: require("../../assets/audio/Tagalog/ako.aac"),
  },
  {
    term: "Ikaw",
    meaning: "You",
    example: fromGreeting("Kamusta?").example,
    audioUrl: require("../../assets/audio/Tagalog/ikaw.aac"),
  },
  {
    term: "Pangalan",
    meaning: "Name",
    pronunciation: "pa-nga-lan",
    example: [
      { speaker: "A", text: "Ano ang pangalan mo?" },
      { speaker: "B", text: "Ano ang pangalan ng kaibigan mo?" },
    ],
    audioUrl: require("../../assets/audio/Tagalog/pangalan.aac"),
  },
  {
    term: "Kaibigan",
    meaning: "Friend",
    pronunciation: "ka-i-bi-gan",
    example: [
      { speaker: "A", text: "Ang ganda naman ng kaibigan" },
      { speaker: "B", text: "Sino yung kaibigan na kasama mo?" },
    ],
    audioUrl: require("../../assets/audio/Tagalog/kaibigan.aac"),
  },
  {
    term: "Mabuti",
    meaning: "Good / Fine",
    pronunciation: "ma-bu-ti",
    example: fromGreeting("Kamusta?").example,
    audioUrl: require("../../assets/audio/Tagalog/mabuti.aac"),
  },
  {
    term: "Oo naman",
    meaning: "Of course / Certainly",
    usage: "Used when you are sure of your answer.",
    example: [
      { speaker: "A", text: "Oo naman pupunta ako" },
      { speaker: "B", text: "Oo naman makakapunta ako bago magsimula" },
    ],
    audioUrl: require("../../assets/audio/Tagalog/oo naman.aac"),
  },
  {
    term: "Pasensya na",
    meaning: "I'm sorry / Excuse me",
    pronunciation: "pa-sen-sya na",
    audioUrl: require("../../assets/audio/Tagalog/pasensya na.aac"),
  },
];

export const tagalogLesson1: StructuredLesson = {
  lessonId: "tagalog_1",
  dialect: "tagalog",
  dialectLabel: "Tagalog",
  lessonNumber: 1,
  title: "Basic Greetings and Self-Introduction",
  level: "Beginner",
  unit: "Fundamentals",

  // II. Lesson Introduction
  intro: [
    "Greetings are commonly used when meeting someone, starting a conversation, or showing politeness. In Filipino culture, greetings and respectful expectations are important when communicating with family members, friends, teachers, and unfamiliar people.",
    "In this lesson, you will learn how to greet someone, introduce yourself, and respond to simple questions in Tagalog.",
  ],
  exampleSituation: {
    description:
      "Imagine that you are meeting a new classmate for the first time. You want to greet them, introduce yourself, and ask for their name.",
    lead: "You can begin by saying:",
    line: "Magandang araw! Ako si Ana. Ano ang pangalan mo?",
    translation: "Good day! I am Ana. What is your name?",
  },

  // I. Learning Objectives
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify and understand common Tagalog greetings.",
    "Use appropriate greetings depending on the time of day and situation.",
    "Introduce themselves using simple Tagalog sentences.",
    "Ask and answer basic questions about names and personal information.",
    "Use common polite expressions when interacting with others.",
  ],

  vocabularyIntro:
    "Learn the following words and expressions before proceeding to the activities.",
  vocabulary,
  pronunciationTip:
    "Read each syllable clearly. Avoid rushing through longer expressions.",

  greetings,

  // V. Self-Introduction
  selfIntroIntro:
    "A self-introduction is a way of telling someone basic information about yourself.",
  patterns: [
    {
      label: "Pattern 1: Introducing Your Name",
      pattern: "Ako si + Name.",
      examples: ["Ako si Maria.", "Ako si Juan.", "Ako si Carlos."],
    },
    {
      label: "Pattern 2: Asking Someone's Name",
      pattern: "Ano ang pangalan mo?",
    },
    {
      label: "Pattern 3: Saying Where You Are From",
      pattern: "Taga- + Place + ako.",
      examples: ["Taga-Manila ako.", "Taga-Pampanga ako.", "Taga-Cebu ako."],
    },
    {
      label: "Pattern 4: Asking Where Someone Is From",
      pattern: "Taga-saan ka?",
    },
  ],
  sentences: [
    { text: "Ako si Ana.", meaning: "I am Ana." },
    { text: "Ang pangalan ko ay Ana.", meaning: "My name is Ana." },
    { text: "Ano ang pangalan mo?", meaning: "What is your name?" },
    { text: "Taga-saan ka?", meaning: "Where are you from?" },
    { text: "Taga-Angeles City ako.", meaning: "I am from Angeles City." },
    { text: "Ikinagagalak kitang makilala.", meaning: "Nice to meet you." },
    { text: "Ilang taon ka na?", meaning: "How old are you?" },
    { text: "Ako ay 19 taong gulang.", meaning: "I am 19 years old." },
  ],

  // VI. Guided Conversation
  conversation: {
    instructions:
      "Read the conversation below. Pay attention to how the speakers greet each other and introduce themselves.",
    situation: "Two students meet for the first time at school.",
    lines: [
      { speaker: "Ana", text: "Magandang umaga!", audioUrl: require("../../assets/audio/Tagalog/magandang umaga.aac") },
      { speaker: "Mark", text: "Magandang umaga rin!" },
      { speaker: "Ana", text: "Ako si Ana. Ano ang pangalan mo?" },
      { speaker: "Mark", text: "Ako si Mark. Ikinagagalak kitang makilala." },
      {
        speaker: "Ana",
        text: "Ikinagagalak din kitang makilala! Taga-saan ka?",
      },
      { speaker: "Mark", text: "Kamusta ka naman?" },
      { speaker: "Ana", text: "Mabuti naman, salamat. Ikaw?" },
      { speaker: "Mark", text: "Mabuti rin!" },
      { speaker: "Ana", text: "Sige, magkita na lang tayo mamaya. Paalam!" },
      { speaker: "Mark", text: "Paalam! Ingat ka!" },
    ],
    comprehensionQuestions: [
      "What greeting did Ana use?",
      "What is the name of the second student?",
      "Where is Mark from?",
      "How did Ana respond when Mark asked how she was?",
      "What expression did they use when ending their conversation?",
    ],
  },

  // VII. Activity 1
  matchActivity: {
    title: "Match the Greeting",
    instructions: "Match the Tagalog expression with its English meaning",
    pairs: [
      { id: "1", term: "Magandang umaga", answer: "Good morning" },
      { id: "2", term: "Salamat", answer: "Thank you" },
      { id: "3", term: "Paalam", answer: "Goodbye" },
      { id: "4", term: "Magandang gabi", answer: "Good evening" },
      { id: "5", term: "Kamusta?", answer: "How are you?" },
    ],
  },

  // VIII. Lesson Assessment (answer key: 1 B, 2 C, 3 A, 4 B, 5 C)
  assessment: {
    instructions: "Choose the correct answer for each question.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: 'Which expression means "Good morning"?',
        options: [
          { key: "A", text: "Magandang gabi" },
          { key: "B", text: "Magandang umaga" },
          { key: "C", text: "Paalam" },
          { key: "D", text: "Salamat" },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: 'What does "Ano ang pangalan mo?" mean?',
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
          { key: "A", text: "Ako si Maria." },
          { key: "B", text: "Kamusta si Maria?" },
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
          { key: "A", text: "Kamusta?" },
          { key: "B", text: "Magandang hapon" },
          { key: "C", text: "Paalam" },
          { key: "D", text: "Ano ang pangalan mo?" },
        ],
        answerKey: "C",
      },
    ],
  },

  // IX. Gamification and Rewards
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

  // VII. Activity 2 — sentences and hints as in the document.
  // Answers inferred, to be confirmed by the lesson author (the document
  // has no answer key for Activities 2 and 3).
  fillInBlanks: {
    title: "Fill in the Blanks",
    instructions: "Complete each sentence using the appropriate Tagalog word.",
    items: [
      {
        id: "1",
        sentence: "____________! Ako si Maria.",
        hint: "Good morning",
        answer: "Magandang umaga",
      },
      {
        id: "2",
        sentence: "Ano ang __________ mo?",
        hint: "Name",
        answer: "pangalan",
      },
      {
        id: "3",
        sentence: "___________ Juan.",
        hint: "I am",
        answer: "Ako si",
      },
      {
        id: "4",
        sentence: "___________ naman. Salamat!",
        hint: "Fine",
        answer: "Mabuti",
      },
      {
        id: "5",
        sentence: "___________! Magkita tayo bukas.",
        hint: "Goodbye",
        answer: "Paalam",
      },
    ],
  },

  // VII. Activity 3 — tiles as listed in the document.
  // Answers inferred, to be confirmed by the lesson author. The finished
  // sentence's capitals and punctuation ("Kamusta ka?") are also inferred.
  arrangeWords: {
    title: "Arrange the Words",
    instructions: "Arrange the words to form a correct Tagalog sentence.",
    items: [
      {
        id: "1",
        words: ["si", "Ako", "Pedro"],
        answer: ["Ako", "si", "Pedro"],
        display: "Ako si Pedro.",
      },
      {
        id: "2",
        words: ["pangalan", "Ano", "mo", "ang"],
        answer: ["Ano", "ang", "pangalan", "mo"],
        display: "Ano ang pangalan mo?",
      },
      {
        id: "3",
        words: ["ako", "Pampanga", "Taga-"],
        answer: ["Taga-", "Pampanga", "ako"],
        display: "Taga-Pampanga ako.",
      },
      {
        id: "4",
        words: ["ka", "kamusta"],
        answer: ["kamusta", "ka"],
        display: "Kamusta ka?",
      },
      {
        id: "5",
        words: ["makilala", "Ikinagagalak", "kitang"],
        answer: ["Ikinagagalak", "kitang", "makilala"],
        display: "Ikinagagalak kitang makilala.",
      },
    ],
  },

  // VII. Activity 4 — see tagalog-lesson1-speaking.ts.
  speaking: tagalogLesson1Speaking,

  // VII. Activity 5 — no screen yet.

  extraActivities: [
    {
      title: "Introduce Yourself",
      instructions:
        "Complete the following self-introduction using your own information.",
      items: [
        "Magandang araw!",
        "Ako si _______.",
        "Taga-_______ ako.",
        "_________ taong gulang ako.",
        "Ikinagagalak ko kayong makilala!",
      ],
      note: "Record your introduction using the application's speaking activity.",
    },
  ],
};
