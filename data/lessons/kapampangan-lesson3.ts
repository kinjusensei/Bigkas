import {
  LessonAssessmentQuestion,
  LessonExpressionGroup,
  LessonFillBlankItem,
  LessonSpeaking,
  StructuredLesson,
} from "../../types/structuredLesson";

// Kapampangan Lesson 3 — copied from "Kapampangan_Lesson_3.pdf", a
// translation of the Tagalog Lesson 3. Per the document, numbers 1–20 and
// the tens follow published Kapampangan references (Omniglot); everything
// else is a working translation. Nothing was corrected. Instructions,
// activities and the assessment keep the document's English.
//
// The document marks some phrases "(?)" — to be checked by a native
// Kapampangan speaker. The marks are left out of what learners see; the
// phrases are listed in kapampanganReviewItems below.

// Phrases the document marks "(?)", exactly as written (without the mark).
export const kapampanganReviewItems: string[] = [
  // II. Lesson Introduction
  "Ing numeru ya ing mapilan a bage king aldo-aldo a pamagkomunikasyun. Gamit tamu ya nung mamagbilang tamu ning bage, mamagbili, mamagsabi ning banua, mamagtingin ning oras, at mamagbigay ning dami.",
  "Keng Kapampangan, ding numeru ay mapagpapahayag gamit ding sariling salita at ding salitang hinalaw king Espanyul a gamit king aldo-aldo a pamagsalita.",
  "Pwede mung masalubung ding salitang dos, tres, at kuwatro king casual a pamagsalita, ngan pa man ing leksyun a ini ay mamagtutuun king gamit a Kapampangan a anyu.",
  // III. Vocabulary: Basic Numbers
  "Siyam a pulu",
  "Dinalan",
  // IV. 3. Hundreds
  "Ing salitang dinalan ay mamalent na hundred.",
  "Metung a dinalan",
  "Adwang dinalan",
  "Atlung dinalan",
  "Apat a dinalan",
  "Limang dinalan",
  "Metung a dinalan at adwampulu't lima",
  "Adwang dinalan at limang pulu",
  "Atlung dinalan at pitung pulu't lima",
  // V. Numbers in Everyday Situations
  "Pilan na kang banua?",
  "Pilan na yang banua ya?",
  "Labing walung banua ku na.",
  "Adwampulung banua ku na.",
  "Pilan ini?",
  "Pilan la ding libro ing atin ka?",
  "Atin kung atlung lapis.",
  "Atin limang upuan king kuartu.",
  "Pilan la ding lapis ing atin ka?",
  "Mapalyari ku ba kung manghiram ning metung?",
  "Magkanu ya ing kabuuan?",
  "Limang pulung pisu ya ini.",
  "Masiadung mahal.",
  "Atin ba kung sukli?",
  "Adwa kabilugan.",
  "Kalahati ning kilu.",
  "Kaunti.",
  // VI. Guided Conversation
  "Labing pitung banua ku.",
  "Aku naman ay labing walung banua.",
  "Magkalapit lang pala ing banua tamu!",
  "Limang pulung pisu kabuuan.",
  "Pilan a libro ing dala mu?",
  "Pilan ing kailangan tamu para king grupu?",
  "Kailangan tamu ning apulung libro.",
  "Sige, manghiram pa tamu ning lima.",
];

// Lesson details the StructuredLesson type has no field for, kept here so
// they are in the code with the lesson.
export const kapampanganLesson3Details = {
  prerequisite: "Lesson 2 – Common Expressions and Responses",
  completionCriteria: [
    "Complete the vocabulary section.",
    "Study number patterns from 1 to 100.",
    "Complete all number exercises.",
    "Finish the guided conversations.",
    "Attempt speaking practice.",
    "Obtain at least 70% in the lesson assessment.",
  ],
  learningOutcome:
    "After completing this lesson, learners should be able to recognize, pronounce, and use basic Kapampangan numbers from 1 to 100, form simple numerical expressions, and apply numbers when discussing age, quantity, prices, and everyday situations.",
};

const numbers = (
  rows: [number: string, kapampangan: string, pronunciation?: string][],
) =>
  rows.map(([number, kapampangan, pronunciation]) => ({
    term: kapampangan,
    meaning: number,
    pronunciation,
  }));

// III. Vocabulary: Basic Numbers
const expressionGroups: LessonExpressionGroup[] = [
  {
    title: "A. Numbers 1–10",
    items: numbers([
      ["1", "Metung", "me-tung"],
      ["2", "Adwa", "ad-wa"],
      ["3", "Atlu", "at-lu"],
      ["4", "Apat", "a-pat"],
      ["5", "Lima", "li-ma"],
      ["6", "Anam", "a-nam"],
      ["7", "Pitu", "pi-tu"],
      ["8", "Walu", "wa-lu"],
      ["9", "Siyam", "si-yam"],
      ["10", "Apulu", "a-pu-lu"],
    ]),
  },
  {
    title: "B. Numbers 11–20",
    items: numbers([
      ["11", "Labing metung", "la-bing-me-tung"],
      ["12", "Labing adwa", "la-bing-ad-wa"],
      ["13", "Labing atlu", "la-bing-at-lu"],
      ["14", "Labing apat", "la-bing-a-pat"],
      ["15", "Labing lima", "la-bing-li-ma"],
      ["16", "Labing anam", "la-bing-a-nam"],
      ["17", "Labing pitu", "la-bing-pi-tu"],
      ["18", "Labing walu", "la-bing-wa-lu"],
      ["19", "Labing siyam", "la-bing-si-yam"],
      ["20", "Adwang pulu", "ad-wang-pu-lu"],
    ]),
  },
  {
    title: "C. Numbers 21–29",
    intro: ["The numbers 21–29 follow the pattern: Adwampulu't + number"],
    items: numbers([
      ["21", "Adwampulu't metung"],
      ["22", "Adwampulu't adwa"],
      ["23", "Adwampulu't atlu"],
      ["24", "Adwampulu't apat"],
      ["25", "Adwampulu't lima"],
      ["26", "Adwampulu't anam"],
      ["27", "Adwampulu't pitu"],
      ["28", "Adwampulu't walu"],
      ["29", "Adwampulu't siyam"],
    ]),
  },
  {
    title: "D. Tens: 30–100",
    intro: [
      "Important: Ding numeru 30–90 ay mabuo gamit ing numeru a sinundan ning pulu (-ng pulu o a pulu, depende king numeru).",
    ],
    items: numbers([
      ["30", "Atlung pulu"],
      ["40", "Apat a pulu"],
      ["50", "Limang pulu"],
      ["60", "Anam a pulu"],
      ["70", "Pitung pulu"],
      ["80", "Walung pulu"],
      ["90", "Siyam a pulu"],
      ["100", "Dinalan"],
    ]),
  },
  {
    title: "E. Examples of Numbers 31–99",
    intro: [
      "Para mabuo ing kalabasan ning numeru 31 anggang 99, pagsamahan ing sampulu ampo ing salitang 't a sinundan ning unit.",
    ],
    items: numbers([
      ["31", "Atlung pulu't metung"],
      ["35", "Atlung pulu't lima"],
      ["42", "Apat a pulu't adwa"],
      ["56", "Limang pulu't anam"],
      ["67", "Anam a pulu't pitu"],
      ["78", "Pitung pulu't walu"],
      ["89", "Walung pulu't siyam"],
      ["94", "Siyam a pulu't apat"],
      ["99", "Siyam a pulu't siyam"],
    ]),
  },
];

// V. Numbers in Everyday Situations
const situationGroups: LessonExpressionGroup[] = [
  {
    title: "A. Asking About Age",
    items: [
      { term: "Pilan na kang banua?", meaning: "How old are you?", audioUrl: require("../../assets/audio/kapampangan/Pilian nalang banua.m4a") },
      { term: "Pilan na yang banua ya?", meaning: "How old is he/she?" },
      {
        term: "Labing walung banua ku na.",
        meaning: "I am eighteen years old.",
      },
      { term: "Adwampulung banua ku na.", meaning: "I am twenty years old." },
    ],
    examples: [
      [
        { speaker: "A", text: "Pilan na kang banua?", audioUrl: require("../../assets/audio/kapampangan/Pilian nalang banua.m4a") },
        { speaker: "B", text: "Labing walung banua ku na. Ika?" },
        { speaker: "A", text: "Adwampulung banua ku na." },
      ],
    ],
  },
  {
    title: "B. Counting Objects",
    items: [
      { term: "Pilan ini?", meaning: "How many are these?" },
      {
        term: "Pilan la ding libro ing atin ka?",
        meaning: "How many books do you have?",
      },
      { term: "Atin kung atlung lapis.", meaning: "I have three pencils." },
      {
        term: "Atin limang upuan king kuartu.",
        meaning: "There are five chairs in the room.",
      },
    ],
    examples: [
      [
        { speaker: "A", text: "Pilan la ding lapis ing atin ka?" },
        { speaker: "B", text: "Atin kung apat a lapis." },
        { speaker: "A", text: "Mapalyari ku ba kung manghiram ning metung?" },
        { speaker: "B", text: "Wa naman!", audioUrl: require("../../assets/audio/kapampangan/Wa naman.m4a") },
      ],
    ],
  },
  {
    title: "C. Asking About Prices",
    items: [
      { term: "Magkanu ya ini?", meaning: "How much is this?" },
      { term: "Magkanu ya ing kabuuan?", meaning: "How much is everything?" },
      {
        term: "Limang pulung pisu ya ini.",
        meaning: "This costs fifty pesos.",
      },
      { term: "Masiadung mahal.", meaning: "Too expensive." },
      { term: "Atin ba kung sukli?", meaning: "Do I have change?" },
    ],
    examples: [
      [
        { speaker: "A", text: "Magkanu pu ing kwaderno?" },
        { speaker: "B", text: "Adwampulung pisu pu." },
        { speaker: "A", text: "Oyni pu ing adwampulung pisu." },
        { speaker: "B", text: "Salamat pu!" },
      ],
    ],
  },
  {
    title: "D. Giving Quantities",
    items: [
      { term: "Metung lang.", meaning: "Just one." },
      { term: "Adwa kabilugan.", meaning: "Two in total." },
      { term: "Atlung piraso.", meaning: "Three pieces." },
      { term: "Metung a kilu.", meaning: "One kilogram." },
      { term: "Kalahati ning kilu.", meaning: "Half a kilogram." },
      { term: "Dakal.", meaning: "Many / A lot." },
      { term: "Kaunti.", meaning: "Few / A little." },
    ],
  },
];

// VII. Activities 2–5 share the fill-in step, each with its own heading
// and word bank. The document has no answer key for them: answers are
// taken from the lesson's own number tables, to be confirmed by the
// lesson author. "Apat a pulu't lima" (45) follows the 31–99 pattern but
// isn't listed in the document; 100 uses "Dinalan" (table D and
// assessment question 6).
const WRITE_TITLE = "Write the Number in Kapampangan";
const WRITE_INSTRUCTIONS = "Write the Kapampangan equivalent of each number.";
const writeBank = [
  "Apat",
  "Pitu",
  "Labing adwa",
  "Labing lima",
  "Adwang pulu",
  "Adwampulu't lima",
  "Atlung pulu",
  "Apat a pulu't lima",
  "Anam a pulu",
  "Dinalan",
];
const writeItems: LessonFillBlankItem[] = [
  ["4", "Apat"],
  ["7", "Pitu"],
  ["12", "Labing adwa"],
  ["15", "Labing lima"],
  ["20", "Adwang pulu"],
  ["25", "Adwampulu't lima"],
  ["30", "Atlung pulu"],
  ["45", "Apat a pulu't lima"],
  ["60", "Anam a pulu"],
  ["100", "Dinalan"],
].map(([number, answer], index) => ({
  id: `write-${index + 1}`,
  sentence: `${number} = ________`,
  answer,
  title: WRITE_TITLE,
  instructions: WRITE_INSTRUCTIONS,
  wordBank: writeBank,
}));

const CONVERT_TITLE = "Convert Numbers";
const CONVERT_INSTRUCTIONS =
  "Convert the following Kapampangan numbers into numerical form.";
const convertBank = ["3", "11", "25", "48", "60", "99", "100", "56"];
const convertItems: LessonFillBlankItem[] = [
  ["Atlu", "3"],
  ["Labing metung", "11"],
  ["Adwampulu't lima", "25"],
  ["Apat a pulu't walu", "48"],
  ["Anam a pulu", "60"],
  ["Siyam a pulu't siyam", "99"],
  ["Dinalan", "100"],
  ["Limang pulu't anam", "56"],
].map(([kapampangan, answer], index) => ({
  id: `convert-${index + 1}`,
  sentence: `${kapampangan} = ________`,
  answer,
  title: CONVERT_TITLE,
  instructions: CONVERT_INSTRUCTIONS,
  wordBank: convertBank,
}));

// Activity 4: the blanks in items 1 and 5 are followed by "a", so they
// take the plain number word; items 3 and 4 use the linked forms the
// lesson itself uses ("adwampulung pisu", "apulung libro"). Inferred.
const FILL_TITLE = "Fill in the Blanks";
const FILL_INSTRUCTIONS =
  "Complete each sentence using the correct Kapampangan number.";
const fillBank = ["lima", "labing walu", "adwampulung", "apulung", "atlu"];
const fillItems: LessonFillBlankItem[] = [
  ["Atin kung ________ a lapis.", "5", "lima"],
  ["Ing banua ku ya ________.", "18", "labing walu"],
  ["Ing kwaderno ya mangabayaran ning _______ pisu.", "20", "adwampulung"],
  ["Atin ________ mag-aaral king kuartu.", "10", "apulung"],
  ["Kailangan ku ning ________ a libro.", "3", "atlu"],
].map(([sentence, hint, answer], index) => ({
  id: `fill-${index + 1}`,
  sentence,
  hint,
  answer,
  title: FILL_TITLE,
  instructions: FILL_INSTRUCTIONS,
  wordBank: fillBank,
}));

const MATH_TITLE = "Solve the Simple Math Problems";
const MATH_INSTRUCTIONS =
  "Read each problem and provide the answer in Kapampangan.";
const mathBank = ["Atlu", "Apulu", "Pitu", "Atlung pulu"];
const mathItems: LessonFillBlankItem[] = [
  ["Metung + adwa = ________", "Atlu"],
  ["Lima + lima = ________", "Apulu"],
  ["Apulu - atlu = ________", "Pitu"],
  ["Apat + anam = ________", "Apulu"],
  ["Adwang pulu + apulu = _________", "Atlung pulu"],
].map(([sentence, answer], index) => ({
  id: `math-${index + 1}`,
  sentence,
  answer,
  title: MATH_TITLE,
  instructions: MATH_INSTRUCTIONS,
  wordBank: mathBank,
}));

// XII. Suggested interactive activity: Number recognition (choices as in
// the document; correct answers from the number tables).
const recognition = (
  id: number,
  number: string,
  choices: string[],
  answer: string,
): LessonAssessmentQuestion => {
  const keys = ["A", "B", "C", "D"];
  return {
    id,
    prompt: `What is ${number} in Kapampangan?`,
    options: choices.map((text, index) => ({ key: keys[index], text })),
    answerKey: keys[choices.indexOf(answer)],
  };
};

// VII. Activity 6: Speaking Practice. Meanings and respellings are from
// the number tables and section V ("Magkanu pu ini?" is as written in the
// activity; the table has "Magkanu ya ini?").
const speaking: LessonSpeaking = {
  title: "Speaking Practice",
  instructions: "Listen to the audio pronunciation and repeat the following:",
  note: "Speaking challenge: Count from 1 to 20 aloud without looking at the vocabulary table. Then record yourself asking and answering a question about someone's age.",
  phrases: [
    {
      id: "1",
      text: "Metung, adwa, atlu, apat, lima.",
      respelling: "me-tung, ad-wa, at-lu, a-pat, li-ma",
      meaning: "1, 2, 3, 4, 5",
    },
    {
      id: "2",
      text: "Anam, pitu, walu, siyam, apulu.",
      respelling: "a-nam, pi-tu, wa-lu, si-yam, a-pu-lu",
      meaning: "6, 7, 8, 9, 10",
    },
    {
      id: "3",
      text: "Labing metung, labing adwa, labing atlu.",
      respelling: "la-bing-me-tung, la-bing-ad-wa, la-bing-at-lu",
      meaning: "11, 12, 13",
    },
    {
      id: "4",
      text: "Adwampulu't metung, adwampulu't adwa.",
      meaning: "21, 22",
    },
    {
      id: "5",
      text: "Atlung pulu, apat a pulu, limang pulu.",
      meaning: "30, 40, 50",
    },
    { id: "6", text: "Metung a dinalan.", meaning: "100" },
    { id: "7", text: "Pilan na kang banua?", meaning: "How old are you?", audioUrl: require("../../assets/audio/kapampangan/Pilian nalang banua.m4a") },
    { id: "8", text: "Magkanu pu ini?", meaning: "How much is this?" },
  ],
};

export const kapampanganLesson3: StructuredLesson = {
  lessonId: "kapampangan_3",
  dialect: "kapampangan",
  dialectLabel: "Kapampangan",
  lessonNumber: 3,
  title: "Numbers and Counting",
  level: "Beginner",
  unit: "Fundamentals",

  // II. Lesson Introduction
  intro: [
    "Ing numeru ya ing mapilan a bage king aldo-aldo a pamagkomunikasyun. Gamit tamu ya nung mamagbilang tamu ning bage, mamagbili, mamagsabi ning banua, mamagtingin ning oras, at mamagbigay ning dami.",
    "Keng Kapampangan, ding numeru ay mapagpapahayag gamit ding sariling salita at ding salitang hinalaw king Espanyul a gamit king aldo-aldo a pamagsalita.",
    "For example: Metung – One, Adwa – Two, Atlu – Three, Apulu – Ten, Adwang pulu – Twenty.",
    "Pwede mung masalubung ding salitang dos, tres, at kuwatro king casual a pamagsalita, ngan pa man ing leksyun a ini ay mamagtutuun king gamit a Kapampangan a anyu.",
  ],

  // I. Learning Objectives
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Recognize and pronounce basic numbers in Kapampangan.",
    "Count from 1 to 100 using Kapampangan number words.",
    "Understand how to form numbers using tens and units.",
    "Ask and answer questions involving age, quantity, and prices.",
    "Use Kapampangan numbers in simple everyday conversations.",
  ],

  expressionsIntro:
    "Tap the speaker to hear each number. Read each syllable clearly.",
  expressionGroups,

  // IV. Understanding Number Patterns
  languageNotes: [
    {
      title: "1. Numbers 11–19",
      body: [
        "Ding numeru 11–19 ay gamitan ning prefix na labing- a sinundan ning numeru.",
      ],
      examples: [
        { text: "Labing metung", meaning: "11" },
        { text: "Labing adwa", meaning: "12" },
        { text: "Labing atlu", meaning: "13" },
        { text: "Labing apat", meaning: "14" },
        { text: "Labing lima", meaning: "15" },
      ],
    },
    {
      title: "2. Numbers 21–99",
      body: ["Pagsamahan ing sampulu at ing unit gamit ing 't."],
      examples: [
        { text: "Adwampulu't adwa", meaning: "22" },
        { text: "Atlung pulu't apat", meaning: "34" },
        { text: "Apat a pulu't pitu", meaning: "47" },
        { text: "Limang pulu't walu", meaning: "58" },
      ],
    },
    {
      title: "3. Hundreds",
      body: ["Ing salitang dinalan ay mamalent na hundred."],
      table: {
        leftHeading: "Number",
        rightHeading: "Kapampangan",
        rows: [
          { left: "100", right: "Metung a dinalan" },
          { left: "200", right: "Adwang dinalan" },
          { left: "300", right: "Atlung dinalan" },
          { left: "400", right: "Apat a dinalan" },
          { left: "500", right: "Limang dinalan" },
          { left: "1,000", right: "Metung a libu" },
        ],
      },
      examples: [
        { text: "Metung a dinalan at adwampulu't lima", meaning: "125" },
        { text: "Adwang dinalan at limang pulu", meaning: "250" },
        { text: "Atlung dinalan at pitung pulu't lima", meaning: "375" },
      ],
    },
  ],

  situationsTitle: "Numbers in everyday situations",
  situationsIntro:
    "Ding numeru ay e mu mu gamit para magbilang. Makatulung la rin king aldo-aldo a pamagsalita.",
  situationGroups,

  // VI. Guided Conversation
  conversations: [
    {
      situation: "Situation 1: Asking About Age",
      lines: [
        { speaker: "Maria", text: "Pilan na kang banua?", audioUrl: require("../../assets/audio/kapampangan/Pilian nalang banua.m4a") },
        { speaker: "Ana", text: "Labing pitung banua ku." },
        { speaker: "Maria", text: "Aku naman ay labing walung banua." },
        { speaker: "Ana", text: "Magkalapit lang pala ing banua tamu!" },
      ],
    },
    {
      situation: "Situation 2: Buying School Supplies",
      lines: [
        { speaker: "Juan", text: "Magkanu pu ing metung a kwaderno?" },
        { speaker: "Tindera", text: "Adwampulu't limang pisu." },
        { speaker: "Juan", text: "Bili ku pu ning adwa." },
        { speaker: "Tindera", text: "Limang pulung pisu kabuuan." },
        { speaker: "Juan", text: "Oyni pu ing pera." },
        { speaker: "Tindera", text: "Salamat pu!" },
      ],
    },
    {
      situation: "Situation 3: Counting Objects",
      lines: [
        { speaker: "Mark", text: "Pilan a libro ing dala mu?" },
        { speaker: "Pedro", text: "Atin kung limang libro." },
        { speaker: "Mark", text: "Pilan ing kailangan tamu para king grupu?" },
        { speaker: "Pedro", text: "Kailangan tamu ning apulung libro." },
        { speaker: "Mark", text: "Sige, manghiram pa tamu ning lima." },
      ],
    },
  ],

  // VII. Activity 1 (answers from the document's lettering:
  // 1 C, 2 A, 3 D, 4 B, 5 E)
  matchActivity: {
    title: "Match the Numbers",
    instructions: "Match each number with its correct Kapampangan translation.",
    pairs: [
      { id: "1", term: "5", answer: "Lima" },
      { id: "2", term: "10", answer: "Apulu" },
      { id: "3", term: "3", answer: "Atlu" },
      { id: "4", term: "8", answer: "Walu" },
      { id: "5", term: "2", answer: "Adwa" },
    ],
  },

  choiceActivity: {
    title: "Number Recognition",
    instructions: "Choose the correct Kapampangan word for each number.",
    questions: [
      recognition(1, "5", ["Atlu", "Lima", "Pitu", "Walu"], "Lima"),
      recognition(
        2,
        "12",
        ["Labing adwa", "Labing lima", "Labing metung", "Labing atlu"],
        "Labing adwa",
      ),
      recognition(
        3,
        "25",
        [
          "Adwampulu't lima",
          "Atlung pulu't lima",
          "Adwampulu't atlu",
          "Labing lima",
        ],
        "Adwampulu't lima",
      ),
      recognition(
        4,
        "70",
        ["Anam a pulu", "Walung pulu", "Pitung pulu", "Siyam a pulu"],
        "Pitung pulu",
      ),
      recognition(
        5,
        "100",
        ["Metung a libu", "Dinalan", "Apulu", "Limang pulu"],
        "Dinalan",
      ),
    ],
  },

  // VII. Activities 2–5 in one step (see above).
  fillInBlanks: {
    title: FILL_TITLE,
    items: [...writeItems, ...convertItems, ...fillItems, ...mathItems],
  },

  // VIII. Lesson Assessment (answer key: 1 B, 2 C, 3 B, 4 D, 5 C, 6 B,
  // 7 A, 8 C, 9 B, 10 C)
  assessment: {
    instructions: "Choose the correct answer.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What is the Kapampangan word for the number 6?",
        options: [
          { key: "A", text: "Pitu" },
          { key: "B", text: "Anam" },
          { key: "C", text: "Lima" },
          { key: "D", text: "Walu" },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "What is the correct Kapampangan translation of 15?",
        options: [
          { key: "A", text: "Labing apat" },
          { key: "B", text: "Labing anam" },
          { key: "C", text: "Labing lima" },
          { key: "D", text: "Labing atlu" },
        ],
        answerKey: "C",
      },
      {
        id: 3,
        prompt: 'What number does "Adwampulu\'t lima" represent?',
        options: [
          { key: "A", text: "20" },
          { key: "B", text: "25" },
          { key: "C", text: "35" },
          { key: "D", text: "45" },
        ],
        answerKey: "B",
      },
      {
        id: 4,
        prompt: "What is the Kapampangan word for 70?",
        options: [
          { key: "A", text: "Anam a pulu" },
          { key: "B", text: "Walung pulu" },
          { key: "C", text: "Siyam a pulu" },
          { key: "D", text: "Pitung pulu" },
        ],
        answerKey: "D",
      },
      {
        id: 5,
        prompt: "Which expression asks about the price of an item?",
        options: [
          { key: "A", text: "Pilan na kang banua?" },
          { key: "B", text: "Pilan ini?" },
          { key: "C", text: "Magkanu ya ini?" },
          { key: "D", text: "Kumusta ka?" },
        ],
        answerKey: "C",
      },
      {
        id: 6,
        prompt: "What is the correct Kapampangan translation of 100?",
        options: [
          { key: "A", text: "Metung a libu" },
          { key: "B", text: "Dinalan" },
          { key: "C", text: "Apulu" },
          { key: "D", text: "Limang pulu" },
        ],
        answerKey: "B",
      },
      {
        id: 7,
        prompt: "What is the Kapampangan translation of 42?",
        options: [
          { key: "A", text: "Apat a pulu't adwa" },
          { key: "B", text: "Adwang pulu't apat" },
          { key: "C", text: "Atlung pulu't adwa" },
          { key: "D", text: "Apat a pulu't apat" },
        ],
        answerKey: "A",
      },
      {
        id: 8,
        prompt: 'What does "Pilan na kang banua?" mean?',
        options: [
          { key: "A", text: "How much is this?" },
          { key: "B", text: "How many do you have?" },
          { key: "C", text: "How old are you?" },
          { key: "D", text: "Where are you from?" },
        ],
        answerKey: "C",
      },
      {
        id: 9,
        prompt: "What is the correct Kapampangan translation of 89?",
        options: [
          { key: "A", text: "Siyam a pulu't walu" },
          { key: "B", text: "Walung pulu't siyam" },
          { key: "C", text: "Pitung pulu't siyam" },
          { key: "D", text: "Walung pulu't walu" },
        ],
        answerKey: "B",
      },
      {
        id: 10,
        prompt: "What is the sum of lima and lima?",
        options: [
          { key: "A", text: "Walu" },
          { key: "B", text: "Siyam" },
          { key: "C", text: "Apulu" },
          { key: "D", text: "Labing metung" },
        ],
        answerKey: "C",
      },
    ],
  },

  speaking,

  // IX. Gamification and Rewards. The document's rows are given to the
  // matching parts of the lesson, as in Tagalog Lesson 3: number-pattern
  // exercises = the number recognition and fill-in exercises; everyday
  // situation activities = the guided conversations.
  rewards: {
    items: [
      { section: "vocabulary", label: "Complete vocabulary learning", xp: 10 },
      {
        section: "sentences",
        label: "Finish number-pattern exercises",
        xp: 10,
      },
      {
        section: "conversation",
        label: "Complete everyday situation activities",
        xp: 10,
      },
      { section: "speaking", label: "Complete speaking practice", xp: 10 },
      { section: "assessment", label: "Pass lesson assessment", xp: 20 },
    ],
    total: 60,
    badge: {
      name: "Number Master Badge",
      description:
        "Awarded after completing the lesson and passing the assessment.",
    },
    completionRequirement:
      "At least 70% in the lesson assessment. Learners may repeat the number exercises and vocabulary practice before retaking the assessment.",
  },
};
