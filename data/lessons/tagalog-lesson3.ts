import {
  LessonAssessmentQuestion,
  LessonExpressionGroup,
  LessonFillBlankItem,
  LessonSpeaking,
  StructuredLesson,
} from "../../types/structuredLesson";

// Tagalog Lesson 3 — copied from "Tagalog 3.pdf". The Tagalog is as
// written in the document; only the English typo "followng" →
// "following" was corrected.
//
// The PDF's two-column tables lost their layout, so each Tagalog line was
// paired with the English line in the same position (the counts match in
// every table).

const numbers = (
  rows: [number: string, tagalog: string, pronunciation?: string][],
) =>
  rows.map(([number, tagalog, pronunciation]) => ({
    term: tagalog,
    meaning: number,
    pronunciation,
  }));

// III. Vocabulary: Basic Numbers
const expressionGroups: LessonExpressionGroup[] = [
  {
    title: "A. Numbers 1–10",
    items: numbers([
      ["1", "Isa", "i-sa"],
      ["2", "Dalawa", "da-la-wa"],
      ["3", "Tatlo", "tat-lo"],
      ["4", "Apat", "a-pat"],
      ["5", "Lima", "li-ma"],
      ["6", "Anim", "a-nim"],
      ["7", "Pito", "pi-to"],
      ["8", "Walo", "wa-lo"],
      ["9", "Siyam", "si-yam"],
      ["10", "Sampu", "sam-pu"],
    ]),
  },
  {
    title: "B. Numbers 11–20",
    items: numbers([
      ["11", "Labing-isa", "la-bing-i-sa"],
      ["12", "Labindalawa", "la-bin-da-la-wa"],
      ["13", "Labintatlo", "la-bin-tat-lo"],
      ["14", "Labing-apat", "la-bing-a-pat"],
      ["15", "Labinlima", "la-bin-li-ma"],
      ["16", "Labing-anim", "la-bing-a-nim"],
      ["17", "Labingpito", "la-bim-pi-to"],
      ["18", "Labingwalo", "la-bing-wa-lo"],
      ["19", "Labinsiyam", "la-bin-si-yam"],
      ["20", "Dalawampu", "da-la-wam-pu"],
    ]),
  },
  {
    title: "C. Numbers 21–29",
    intro: ["The numbers 21–29 follow the pattern: Dalawampu't + numbers"],
    items: numbers([
      ["21", "Dalawampu't isa"],
      ["22", "Dalawampu't dalawa"],
      ["23", "Dalawampu't tatlo"],
      ["24", "Dalawampu't apat"],
      ["25", "Dalawampu't lima"],
      ["26", "Dalawampu't anim"],
      ["27", "Dalawampu't pito"],
      ["28", "Dalawampu't walo"],
      ["29", "Dalawampu't siyam"],
    ]),
  },
  {
    title: "D. Tens: 30–100",
    intro: [
      "Important: The number words for 30–90 are formed using the number root followed by -napu or -lumpu, depending on the number.",
    ],
    items: numbers([
      ["30", "Tatlumpu"],
      ["40", "Apatnapu"],
      ["50", "Limampu"],
      ["60", "Animnapu"],
      ["70", "Pitumpu"],
      ["80", "Walumpu"],
      ["90", "Siyamnapu"],
      ["100", "Isang daan"],
    ]),
  },
  {
    title: "E. Examples of Numbers 31–99",
    intro: [
      "To form most numbers between 31 and 99, combine the tens with the word 't followed by the unit.",
    ],
    items: numbers([
      ["31", "Tatlumpu't isa"],
      ["35", "Tatlumpu't lima"],
      ["42", "Apatnapu't dalawa"],
      ["56", "Limampu't anim"],
      ["67", "Animnapu't pito"],
      ["78", "Pitumpu't walo"],
      ["89", "Walumpu't siyam"],
      ["94", "Siyamnapu't apat"],
      ["99", "Siyamnapu't siyam"],
    ]),
  },
];

// V. Numbers in Everyday Situations
const situationGroups: LessonExpressionGroup[] = [
  {
    title: "A. Asking About Age",
    items: [
      { term: "Ilang taon ka na?", meaning: "How old are you?" },
      { term: "Ilang taon na siya?", meaning: "How old is he/she?" },
      {
        term: "Ako ay labingwalong taong gulang.",
        meaning: "I am eighteen years old.",
      },
      { term: "Dalawampung taon na ako.", meaning: "I am twenty years old." },
    ],
    examples: [
      [
        { speaker: "A", text: "Ilang taon ka na?" },
        { speaker: "B", text: "Labingwalong taong gulang na ako. Ikaw?" },
        { speaker: "A", text: "Dalawampung taong gulang na ako." },
      ],
    ],
  },
  {
    title: "B. Counting Objects",
    items: [
      { term: "Ilan ito?", meaning: "How many are these?" },
      {
        term: "Ilang libro ang mayroon ka?",
        meaning: "How many books do you have?",
      },
      { term: "May tatlong lapis ako.", meaning: "I have three pencils." },
      {
        term: "May limang upuan sa silid.",
        meaning: "There are five chairs in the room.",
      },
    ],
    examples: [
      [
        { speaker: "A", text: "Ilang lapis ang mayroon ka?" },
        { speaker: "B", text: "May apat akong lapis." },
        { speaker: "A", text: "Puwede bang makahiram ng isa?" },
        { speaker: "B", text: "Oo naman!" },
      ],
    ],
  },
  {
    title: "C. Asking About Prices",
    items: [
      { term: "Magkano ito?", meaning: "How much is this?" },
      { term: "Magkano lahat?", meaning: "How much is everything?" },
      { term: "Limampung piso ito.", meaning: "This costs fifty pesos." },
      { term: "Masyadong mahal.", meaning: "Too expensive." },
      { term: "May sukli ba ako?", meaning: "Do I have a change?" },
    ],
    examples: [
      [
        { speaker: "A", text: "Magkano po ang kuwaderno?" },
        { speaker: "B", text: "Dalawampung piso po." },
        { speaker: "A", text: "Heto po ang dalawampung piso." },
        { speaker: "B", text: "Salamat po!" },
      ],
    ],
  },
  {
    title: "D. Giving Quantities",
    items: [
      { term: "Isa lang.", meaning: "Just one." },
      { term: "Dalawa lahat.", meaning: "Two in total." },
      { term: "Tatlong piraso.", meaning: "Three pieces." },
      { term: "Isang kilo.", meaning: "One kilogram." },
      { term: "Kalahating kilo.", meaning: "Half a kilogram." },
      { term: "Marami.", meaning: "Many / A lot." },
      { term: "Kaunti.", meaning: "Few / A little." },
    ],
  },
];

// VII. Activities 2–5 share the fill-in step, each with its own heading
// and word bank. The document has no answer key for them: answers are
// taken from the lesson's own number tables, to be confirmed by the
// lesson author. "Apatnapu't lima" (45) follows the 31–99 pattern but
// isn't listed in the document. Activity 4's linked forms (limang,
// labingwalong, dalawampung, sampung, tatlong) follow the lesson's
// examples ("May limang upuan", "labingwalong taong gulang").
const WRITE_TITLE = "Write the Number in Tagalog";
const WRITE_INSTRUCTIONS = "Write the Tagalog equivalent of each number.";
const writeBank = [
  "Apat",
  "Pito",
  "Labindalawa",
  "Labinlima",
  "Dalawampu",
  "Dalawampu't lima",
  "Tatlumpu",
  "Apatnapu't lima",
  "Animnapu",
  "Isang daan",
];
const writeItems: LessonFillBlankItem[] = [
  ["4", "Apat"],
  ["7", "Pito"],
  ["12", "Labindalawa"],
  ["15", "Labinlima"],
  ["20", "Dalawampu"],
  ["25", "Dalawampu't lima"],
  ["30", "Tatlumpu"],
  ["45", "Apatnapu't lima"],
  ["60", "Animnapu"],
  ["100", "Isang daan"],
].map(([number, answer], index) => ({
  id: `write-${index + 1}`,
  sentence: `${number} = ________`,
  answer,
  title: WRITE_TITLE,
  instructions: WRITE_INSTRUCTIONS,
  wordBank: writeBank,
}));

const CONVERT_TITLE = "Convert to Numbers";
const CONVERT_INSTRUCTIONS =
  "Convert the following Tagalog numbers into numerical form.";
const convertBank = ["3", "11", "25", "48", "60", "99", "100", "56"];
const convertItems: LessonFillBlankItem[] = [
  ["Tatlo", "3"],
  ["Labing-isa", "11"],
  ["Dalawampu't lima", "25"],
  ["Apatnapu't walo", "48"],
  ["Animnapu", "60"],
  ["Siyamnapu't siyam", "99"],
  ["Isang daan", "100"],
  ["Limampu't anim", "56"],
].map(([tagalog, answer], index) => ({
  id: `convert-${index + 1}`,
  sentence: `${tagalog} = ________`,
  answer,
  title: CONVERT_TITLE,
  instructions: CONVERT_INSTRUCTIONS,
  wordBank: convertBank,
}));

const FILL_TITLE = "Fill in the Blanks";
const FILL_INSTRUCTIONS =
  "Complete each sentence using the correct Tagalog number.";
const fillBank = [
  "limang",
  "labingwalong",
  "dalawampung",
  "sampung",
  "tatlong",
];
const fillItems: LessonFillBlankItem[] = [
  ["Mayroon akong ________ lapis.", "5", "limang"],
  ["Ang edad ko ay ________ taon.", "18", "labingwalong"],
  ["Ang kuwaderno ay nagkakahalaga ng _______ piso.", "20", "dalawampung"],
  ["May ________ mag-aaral sa silid.", "10", "sampung"],
  ["Kailangan ko ng ________ libro.", "3", "tatlong"],
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
  "Read each problem and provide the answer in Tagalog.";
const mathBank = ["Tatlo", "Sampu", "Pito", "Tatlumpu", "Lima"];
const mathItems: LessonFillBlankItem[] = [
  ["Isa + dalawa = ________", "Tatlo"],
  ["Lima + lima = ________", "Sampu"],
  ["Sampu - tatlo = ________", "Pito"],
  ["Apat + anim = ________", "Sampu"],
  ["Dalawampu + sampu = _________", "Tatlumpu"],
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
    prompt: `What is ${number} in Tagalog?`,
    options: choices.map((text, index) => ({ key: keys[index], text })),
    answerKey: keys[choices.indexOf(answer)],
  };
};

// VII. Activity 6: Speaking Practice. English meanings are from the number
// tables and section V ("Magkano po ito?" adds the respectful "po").
const speaking: LessonSpeaking = {
  title: "Speaking Practice",
  instructions: "Listen to the audio pronunciation and repeat the following:",
  note: "Speaking challenge: Count from 1 to 20 aloud without looking at the vocabulary table. Then record yourself asking and answering a question about someone's age.",
  phrases: [
    {
      id: "1",
      text: "Isa, dalawa, tatlo, apat, lima.",
      respelling: "i-sa, da-la-wa, tat-lo, a-pat, li-ma",
      meaning: "1, 2, 3, 4, 5",
    },
    {
      id: "2",
      text: "Anim, pito, walo, siyam, sampu.",
      respelling: "a-nim, pi-to, wa-lo, si-yam, sam-pu",
      meaning: "6, 7, 8, 9, 10",
    },
    {
      id: "3",
      text: "Labing-isa, labindalawa, labintatlo.",
      respelling: "la-bing-i-sa, la-bin-da-la-wa, la-bin-tat-lo",
      meaning: "11, 12, 13",
    },
    {
      id: "4",
      text: "Dalawampu't isa, dalawampu't dalawa.",
      meaning: "21, 22",
    },
    { id: "5", text: "Tatlumpu, apatnapu, limampu.", meaning: "30, 40, 50" },
    { id: "6", text: "Isang daan.", meaning: "100" },
    { id: "7", text: "Ilang taon ka na?", meaning: "How old are you?" },
    { id: "8", text: "Magkano po ito?", meaning: "How much is this?" },
  ],
};

export const tagalogLesson3: StructuredLesson = {
  lessonId: "tagalog_3",
  dialect: "tagalog",
  dialectLabel: "Tagalog",
  lessonNumber: 3,
  title: "Numbers and Counting",
  level: "Beginner",
  unit: "Fundamentals",

  // II. Lesson Introduction
  intro: [
    "Numbers are an important part of everyday communication. We use them when counting objects, buying things, telling our age, checking the time, and giving quantities.",
    "In Tagalog, numbers can be expressed using both native Filipino number words and Spanish-derived forms that are commonly used in everyday conversations.",
    "For example: Isa – One, Dalawa – Two, Tatlo – Three, Sampu – Ten, Dalawampu – Twenty.",
    "You may also encounter words such as dos, tres, and kuwatro in casual conversations, but this lesson will focus on the commonly taught Filipino forms.",
  ],

  // I. Learning Objectives
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Recognize and pronounce basic numbers in Tagalog.",
    "Count from 1 to 100 using Tagalog number words.",
    "Understand how to form numbers using tens and units.",
    "Ask and answer questions involving age, quantity, and prices.",
    "Use Tagalog numbers in simple everyday conversations.",
  ],

  expressionsIntro:
    "Tap the speaker to hear each number. Read each syllable clearly.",
  expressionGroups,

  // IV. Understanding Number Patterns
  languageNotes: [
    {
      title: "1. Numbers 11–19",
      body: [
        "Numbers 11–19 generally use the prefix labin- or labing-, depending on the number that follows.",
      ],
      examples: [
        { text: "Labing-isa", meaning: "11" },
        { text: "Labindalawa", meaning: "12" },
        { text: "Labintatlo", meaning: "13" },
        { text: "Labing-apat", meaning: "14" },
        { text: "Labinlima", meaning: "15" },
      ],
    },
    {
      title: "2. Numbers 21–99",
      body: ["Combine the tens and the unit using 't."],
      examples: [
        { text: "Dalawampu't dalawa", meaning: "22" },
        { text: "Tatlumpu't apat", meaning: "34" },
        { text: "Apatnapu't pito", meaning: "47" },
        { text: "Limampu't walo", meaning: "58" },
      ],
    },
    {
      title: "3. Hundreds",
      body: ["The word daan means hundred."],
      table: {
        leftHeading: "Number",
        rightHeading: "Tagalog",
        rows: [
          { left: "100", right: "Isang daan" },
          { left: "200", right: "Dalawang daan" },
          { left: "300", right: "Tatlong daan" },
          { left: "400", right: "Apat na raan" },
          { left: "500", right: "Limang daan" },
          { left: "1,000", right: "Isang libo" },
        ],
      },
      examples: [
        { text: "Isang daan at dalawampu't lima", meaning: "125" },
        { text: "Dalawang daan at limampu", meaning: "250" },
        { text: "Tatlong daan at pitumpu't lima", meaning: "375" },
      ],
    },
  ],

  situationsTitle: "Numbers in everyday situations",
  situationsIntro:
    "Numbers are not only used for counting. They are also useful in everyday conversations.",
  situationGroups,

  // VI. Guided Conversation
  conversations: [
    {
      situation: "Situation 1: Asking About Age",
      lines: [
        { speaker: "Maria", text: "Ilang taon ka na?" },
        { speaker: "Ana", text: "Labingpitong taong gulang ako." },
        { speaker: "Maria", text: "Ako naman ay labingwalong taong gulang." },
        { speaker: "Ana", text: "Magkalapit lang pala ang edad natin!" },
      ],
    },
    {
      situation: "Situation 2: Buying School Supplies",
      lines: [
        { speaker: "Juan", text: "Magkano po ang isang kuwaderno?" },
        { speaker: "Tindera", text: "Dalawampu't limang piso." },
        { speaker: "Juan", text: "Pabili po ako ng dalawa." },
        { speaker: "Tindera", text: "Limampung piso lahat." },
        { speaker: "Juan", text: "Heto po ang pera." },
        { speaker: "Tindera", text: "Salamat po!" },
      ],
    },
    {
      situation: "Situation 3: Counting Objects",
      lines: [
        { speaker: "Mark", text: "Ilang libro ang dala mo?" },
        { speaker: "Pedro", text: "Mayroon akong limang libro." },
        { speaker: "Mark", text: "Ilan ang kailangan natin para sa grupo?" },
        { speaker: "Pedro", text: "Kailangan natin ng sampung libro." },
        { speaker: "Mark", text: "Sige, humiram pa tayo ng lima." },
      ],
    },
  ],

  // VII. Activity 1 (answers from the document's lettering)
  matchActivity: {
    title: "Match the Numbers",
    instructions: "Match each number with its correct Tagalog translation.",
    pairs: [
      { id: "1", term: "5", answer: "Lima" },
      { id: "2", term: "10", answer: "Sampu" },
      { id: "3", term: "3", answer: "Tatlo" },
      { id: "4", term: "8", answer: "Walo" },
      { id: "5", term: "2", answer: "Dalawa" },
    ],
  },

  choiceActivity: {
    title: "Number Recognition",
    instructions: "Choose the correct Tagalog word for each number.",
    questions: [
      recognition(1, "5", ["Tatlo", "Lima", "Pito", "Walo"], "Lima"),
      recognition(
        2,
        "12",
        ["Labindalawa", "Labinlima", "Labing-isa", "Labintatlo"],
        "Labindalawa",
      ),
      recognition(
        3,
        "25",
        [
          "Dalawampu't lima",
          "Tatlumpu't lima",
          "Dalawampu't tatlo",
          "Labinlima",
        ],
        "Dalawampu't lima",
      ),
      recognition(
        4,
        "70",
        ["Animnapu", "Walumpu", "Pitumpu", "Siyamnapu"],
        "Pitumpu",
      ),
      recognition(
        5,
        "100",
        ["Isang libo", "Isang daan", "Sampu", "Limampu"],
        "Isang daan",
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
        prompt: "What is the Tagalog word for the number 6?",
        options: [
          { key: "A", text: "Pito" },
          { key: "B", text: "Anim" },
          { key: "C", text: "Lima" },
          { key: "D", text: "Walo" },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "What is the correct Tagalog translation of 15?",
        options: [
          { key: "A", text: "Labing-apat" },
          { key: "B", text: "Labing-anim" },
          { key: "C", text: "Labinlima" },
          { key: "D", text: "Labintatlo" },
        ],
        answerKey: "C",
      },
      {
        id: 3,
        prompt: 'What number does "Dalawampu\'t lima" represent?',
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
        prompt: "What is the Tagalog word for 70?",
        options: [
          { key: "A", text: "Animnapu" },
          { key: "B", text: "Walumpu" },
          { key: "C", text: "Siyamnapu" },
          { key: "D", text: "Pitumpu" },
        ],
        answerKey: "D",
      },
      {
        id: 5,
        prompt: "Which expression asks about the price of an item?",
        options: [
          { key: "A", text: "Ilang taon ka na?" },
          { key: "B", text: "Ilan ito?" },
          { key: "C", text: "Magkano ito?" },
          { key: "D", text: "Kamusta ka?" },
        ],
        answerKey: "C",
      },
      {
        id: 6,
        prompt: "What is the correct Tagalog translation of 100?",
        options: [
          { key: "A", text: "Isang libo" },
          { key: "B", text: "Isang daan" },
          { key: "C", text: "Sampu" },
          { key: "D", text: "Limampu" },
        ],
        answerKey: "B",
      },
      {
        id: 7,
        prompt: "What is the Tagalog translation of 42?",
        options: [
          { key: "A", text: "Apatnapu't dalawa" },
          { key: "B", text: "Dalawampu't apat" },
          { key: "C", text: "Tatlumpu't dalawa" },
          { key: "D", text: "Apatnapu't apat" },
        ],
        answerKey: "A",
      },
      {
        id: 8,
        prompt: 'What does "Ilang taon ka na?" mean?',
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
        prompt: "What is the correct Tagalog translation of 89?",
        options: [
          { key: "A", text: "Siyamnapu't walo" },
          { key: "B", text: "Walumpu't siyam" },
          { key: "C", text: "Pitumpu't siyam" },
          { key: "D", text: "Walumpu't walo" },
        ],
        answerKey: "B",
      },
      {
        id: 10,
        prompt: "What is the sum of lima and lima?",
        options: [
          { key: "A", text: "Walo" },
          { key: "B", text: "Siyam" },
          { key: "C", text: "Sampu" },
          { key: "D", text: "Labing-isa" },
        ],
        answerKey: "C",
      },
    ],
  },

  speaking,

  // IX. Gamification and Rewards. The document's rows are given to the
  // matching parts of the lesson: number-pattern exercises = the number
  // recognition and fill-in exercises; everyday situation activities =
  // the guided conversations.
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
