import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 3 — imported from "Lesson Plan.pdf", pages 675–699.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
// Fields not given by the plan are INFERRED from this lesson's own content and
// listed in docs/waray-inferred-keys.md: example, pronunciation, usage, pattern, arrange, speaking phrase, respelling, target pitch and mood, example situation, pronunciation tip, badge description, completion requirement.
// The practice answers are INFERRED drafts, not from the PDF. See
// docs/waray-draft-answer-keys.md for each answer and how it was found.

export const warayLesson3: StructuredLesson = {
  lessonId: "waray_3",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 3,
  title: "Numbers and Counting",
  level: "Beginner",
  unit: "Unit 1 – Fundamentals",
  estimatedDuration: "25–35 minutes",
  prerequisite: "Lesson 2 – Common Expressions and Responses",
  languageVariety: "Western Samar Waray",
  intro: [
    "Lesson Description:",
    "In this lesson, learners will become familiar with basic Waray numbers and counting expressions. They will learn how to count from one to twenty, recognize commonly used larger numbers, and use numbers in simple everyday conversations.",
    "Numbers are important in daily communication. They are used when telling someone's age, counting objects, asking about quantities, giving prices, and sharing numerical information.",
    "A. Why Learn Numbers and Counting?",
    "Numbers are part of everyday communication. People use them when shopping, counting objects, telling time, discussing age, and sharing information.",
    "For example, you may need to tell someone how old you are, ask how many items they have, or understand the price of something.",
    "Learning numbers in Waray will help you understand and participate in these everyday situations.",
    "B. What You Will Learn",
    "In this lesson, you will learn:",
    "• Basic numbers from one to ten.",
    "• Numbers from eleven to twenty.",
    "• Commonly used tens and larger numbers.",
    "• How to ask how many or how much.",
    "• How to express your age.",
    "• How to use numbers when discussing quantities and prices.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Recognize and pronounce basic Waray numbers.",
    "Count from one to twenty in Waray.",
    "Identify commonly used tens and larger numbers.",
    "Ask and answer questions involving quantities.",
    "Express their age using Waray numbers.",
    "Use numbers when discussing prices and quantities.",
    "Participate in simple conversations involving numbers.",
  ],
  assessment: {
    instructions: "Choose the best answer. Each question is worth one point.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What is the Waray word for \"One\"?",
        options: [
          {
            key: "A",
            text: "Duha",
          },
          {
            key: "B",
            text: "Usa",
          },
          {
            key: "C",
            text: "Lima",
          },
          {
            key: "D",
            text: "Tulo",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "What does \"Upat\" mean?",
        options: [
          {
            key: "A",
            text: "Three",
          },
          {
            key: "B",
            text: "Four",
          },
          {
            key: "C",
            text: "Five",
          },
          {
            key: "D",
            text: "Six",
          },
        ],
        answerKey: "B",
      },
      {
        id: 3,
        prompt: "Which Waray number means \"Ten\"?",
        options: [
          {
            key: "A",
            text: "Napulo",
          },
          {
            key: "B",
            text: "Siyam",
          },
          {
            key: "C",
            text: "Walo",
          },
          {
            key: "D",
            text: "Pito",
          },
        ],
        answerKey: "A",
      },
      {
        id: 4,
        prompt: "What does \"Kinse\" mean?",
        options: [
          {
            key: "A",
            text: "Twelve",
          },
          {
            key: "B",
            text: "Thirteen",
          },
          {
            key: "C",
            text: "Fifteen",
          },
          {
            key: "D",
            text: "Eighteen",
          },
        ],
        answerKey: "C",
      },
      {
        id: 5,
        prompt: "What is the English meaning of \"Baynte\"?",
        options: [
          {
            key: "A",
            text: "Ten",
          },
          {
            key: "B",
            text: "Twenty",
          },
          {
            key: "C",
            text: "Thirty",
          },
          {
            key: "D",
            text: "Forty",
          },
        ],
        answerKey: "B",
      },
      {
        id: 6,
        prompt: "Which expression asks someone about their age?",
        options: [
          {
            key: "A",
            text: "Kumusta ka?",
          },
          {
            key: "B",
            text: "Ano an imo ngaran?",
          },
          {
            key: "C",
            text: "Pira na an imo edad?",
          },
          {
            key: "D",
            text: "Taga diin ka?",
          },
        ],
        answerKey: "C",
      },
      {
        id: 7,
        prompt: "What does \"Damo\" mean?",
        options: [
          {
            key: "A",
            text: "Few",
          },
          {
            key: "B",
            text: "Many",
          },
          {
            key: "C",
            text: "Less",
          },
          {
            key: "D",
            text: "One",
          },
        ],
        answerKey: "B",
      },
      {
        id: 8,
        prompt: "How do you say \"I am eighteen years old\" using the number form taught in this lesson?",
        options: [
          {
            key: "A",
            text: "Disiotso anyos ako.",
          },
          {
            key: "B",
            text: "Kinse anyos ako.",
          },
          {
            key: "C",
            text: "Baynte anyos ako.",
          },
          {
            key: "D",
            text: "Disisais anyos ako.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 9,
        prompt: "What does \"Pira ini?\" mean when asking about an item's price?",
        options: [
          {
            key: "A",
            text: "Where is this?",
          },
          {
            key: "B",
            text: "What is this?",
          },
          {
            key: "C",
            text: "How much is this?",
          },
          {
            key: "D",
            text: "Who owns this?",
          },
        ],
        answerKey: "C",
      },
      {
        id: 10,
        prompt: "Which Waray number means \"Seven\"?",
        options: [
          {
            key: "A",
            text: "Walo",
          },
          {
            key: "B",
            text: "Unom",
          },
          {
            key: "C",
            text: "Pito",
          },
          {
            key: "D",
            text: "Siyam",
          },
        ],
        answerKey: "C",
      },
    ],
  },
  extraActivities: [
    {
      title: "Translate the Sentences",
      kind: "translate",
      instructions: "Translate the following English sentences into Waray.",
      items: [
        "I am eighteen years old.",
        "I have two books.",
        "There are five students.",
        "How old are you?",
        "How much is this?",
      ],
    },
    {
      title: "Number Practice",
      kind: "other",
      instructions: "Write the Waray equivalent of each number.",
      items: [
        "Number | Your Answer",
        "1 | __________",
        "4 | __________",
        "6 | __________",
        "8 | __________",
        "10 | __________",
        "12 | __________",
        "15 | __________",
        "18 | __________",
        "20 | __________",
        "30 | __________",
      ],
    },
    {
      title: "Personal Practice",
      kind: "other",
      instructions: "Answer the following questions using your own information.",
      items: [
        "Pira na an imo edad?",
        "Pira an libro nga aada ha imo?",
        "Pira an tawo ha iyo panimalay?",
      ],
      note: "Try answering each question in Waray using the numbers you learned.",
    },
  ],
  matchActivity: {
    title: "Number Matching",
    instructions: "Match each number with its correct Waray equivalent.",
    pairs: [
      {
        id: "1",
        term: "Three",
        answer: "Tulo",
      },
      {
        id: "2",
        term: "Five",
        answer: "Lima",
      },
      {
        id: "3",
        term: "Seven",
        answer: "Pito",
      },
      {
        id: "4",
        term: "Nine",
        answer: "Siyam",
      },
      {
        id: "5",
        term: "Ten",
        answer: "Napulo",
      },
    ],
  },
  choiceActivity: {
    title: "Multiple Choice",
    instructions: "Choose the correct Waray number.",
    questions: [
      {
        id: 1,
        prompt: "What is the Waray word for \"Two\"?",
        options: [
          {
            key: "A",
            text: "Usa",
          },
          {
            key: "B",
            text: "Duha",
          },
          {
            key: "C",
            text: "Tulo",
          },
          {
            key: "D",
            text: "Upat",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "What does \"Unom\" mean?",
        options: [
          {
            key: "A",
            text: "Four",
          },
          {
            key: "B",
            text: "Five",
          },
          {
            key: "C",
            text: "Six",
          },
          {
            key: "D",
            text: "Seven",
          },
        ],
        answerKey: "C",
      },
      {
        id: 3,
        prompt: "Which Waray word means \"Eight\"?",
        options: [
          {
            key: "A",
            text: "Walo",
          },
          {
            key: "B",
            text: "Siyam",
          },
          {
            key: "C",
            text: "Pito",
          },
          {
            key: "D",
            text: "Lima",
          },
        ],
        answerKey: "A",
      },
      {
        id: 4,
        prompt: "What is the Waray form of \"Fifteen\" in the number list?",
        options: [
          {
            key: "A",
            text: "Trese",
          },
          {
            key: "B",
            text: "Katorse",
          },
          {
            key: "C",
            text: "Kinse",
          },
          {
            key: "D",
            text: "Dose",
          },
        ],
        answerKey: "C",
      },
      {
        id: 5,
        prompt: "What does \"Baynte\" mean?",
        options: [
          {
            key: "A",
            text: "Ten",
          },
          {
            key: "B",
            text: "Fifteen",
          },
          {
            key: "C",
            text: "Twenty",
          },
          {
            key: "D",
            text: "Thirty",
          },
        ],
        answerKey: "C",
      },
    ],
  },
  fillInBlanks: {
    title: "Fill in the Blanks",
    instructions: "Complete the sentences using the correct Waray number.",
    items: [
      {
        id: "1",
        sentence: "One is usa. Two is _____.",
        answer: "Duha",
        title: "Fill in the Blanks",
        instructions: "Complete the sentences using the correct Waray number.",
        wordBank: [
          "Duha",
          "Lima",
          "Napulo",
          "Siyam",
          "Pito",
        ],
      },
      {
        id: "2",
        sentence: "Five is _____.",
        answer: "Lima",
        title: "Fill in the Blanks",
        instructions: "Complete the sentences using the correct Waray number.",
        wordBank: [
          "Duha",
          "Lima",
          "Napulo",
          "Siyam",
          "Pito",
        ],
      },
      {
        id: "3",
        sentence: "Ten is _____.",
        answer: "Napulo",
        title: "Fill in the Blanks",
        instructions: "Complete the sentences using the correct Waray number.",
        wordBank: [
          "Duha",
          "Lima",
          "Napulo",
          "Siyam",
          "Pito",
        ],
      },
      {
        id: "4",
        sentence: "Nine is _____.",
        answer: "Siyam",
        title: "Fill in the Blanks",
        instructions: "Complete the sentences using the correct Waray number.",
        wordBank: [
          "Duha",
          "Lima",
          "Napulo",
          "Siyam",
          "Pito",
        ],
      },
      {
        id: "5",
        sentence: "Seven is _____.",
        answer: "Pito",
        title: "Fill in the Blanks",
        instructions: "Complete the sentences using the correct Waray number.",
        wordBank: [
          "Duha",
          "Lima",
          "Napulo",
          "Siyam",
          "Pito",
        ],
      },
    ],
  },
  answerKeysInferred: true,
  rewards: {
    items: [
      {
        section: "vocabulary",
        label: "Number Vocabulary Practice + Useful Phrases Practice",
        xp: 20,
      },
      {
        section: "conversation",
        label: "Guided Conversation",
        xp: 10,
      },
      {
        section: "sentences",
        label: "Practice Activities",
        xp: 15,
      },
      {
        section: "assessment",
        label: "Lesson Assessment",
        xp: 15,
      },
    ],
    total: 60,
    badge: {
      name: "Waray Number Explorer Badge",
      description: "Awarded after successfully completing Lesson 3.",
    },
    completionRequirement: "Obtain at least 70% in the lesson assessment. Learners may repeat the activities and assessment if they do not meet the requirement.",
  },
  expectedOutcomes: [
    "To complete Lesson 3, learners should:",
    "Review the number vocabulary.",
    "Practice counting from one to twenty.",
    "Complete the useful phrases exercises.",
    "Read and understand the guided conversations.",
    "Complete all required practice activities.",
    "Achieve at least 70% in the lesson assessment.",
    "In this lesson, you learned basic Waray numbers and counting expressions.",
    "You learned how to:",
    "Count from one to ten.",
    "Recognize numbers from eleven to twenty.",
    "Identify commonly used larger numbers.",
    "Ask about age and quantities.",
    "Express your age.",
    "Use numbers when discussing prices and everyday objects.",
  ],
  arrangeWords: {
    title: "Arrange the Words",
    instructions: "Arrange the words to form a correct Waray sentence.",
    items: [
      {
        id: "1",
        words: [
          "imo",
          "Pira",
          "aada",
          "an",
        ],
        answer: [
          "Pira",
          "an",
          "imo",
          "aada",
        ],
        display: "Pira an imo aada?",
      },
      {
        id: "2",
        words: [
          "an",
          "tawo",
          "Pira",
        ],
        answer: [
          "Pira",
          "an",
          "tawo",
        ],
        display: "Pira an tawo?",
      },
      {
        id: "3",
        words: [
          "imo",
          "an",
          "na",
          "Pira",
          "edad",
        ],
        answer: [
          "Pira",
          "na",
          "an",
          "imo",
          "edad",
        ],
        display: "Pira na an imo edad?",
      },
      {
        id: "4",
        words: [
          "ako",
          "anyos",
          "Disiotso",
        ],
        answer: [
          "Disiotso",
          "anyos",
          "ako",
        ],
        display: "Disiotso anyos ako.",
      },
      {
        id: "5",
        words: [
          "Baynte",
          "ako",
          "anyos",
        ],
        answer: [
          "Baynte",
          "anyos",
          "ako",
        ],
        display: "Baynte anyos ako.",
      },
    ],
  },
  speaking: {
    title: "Speaking Practice",
    instructions: "Read the following sentences aloud.",
    note: "Learners should listen to the model pronunciation before recording their own voice.",
    practiceLessonId: "waray_3",
    phrases: [
      {
        id: "1",
        text: "Pira hira?",
        respelling: "pi-ra hi-ra",
        meaning: "How many are there?",
      },
      {
        id: "2",
        text: "Pira kamo?",
        respelling: "pi-ra ka-mo",
        meaning: "How many are you?",
      },
      {
        id: "3",
        text: "Disiotso anyos ako.",
        respelling: "di-syot-so an-yos a-ko",
        meaning: "I am eighteen years old.",
      },
      {
        id: "4",
        text: "Usa nga libro",
        respelling: "u-sa nga lib-ro",
        meaning: "One book",
      },
      {
        id: "5",
        text: "Upat nga tawo",
        respelling: "u-pat nga tah-woh",
        meaning: "Four people",
      },
      {
        id: "6",
        text: "Napulo ka pesos.",
        respelling: "na-pu-lo ka pe-sos",
        meaning: "It costs ten pesos.",
      },
      {
        id: "7",
        text: "May-ada ako usa ka gatos nga pesos.",
        respelling: "mah-yah-dah a-ko u-sa ka ga-tos nga pe-sos",
        meaning: "I have one hundred pesos.",
      },
    ],
  },
  exampleSituation: {
    description: "Imagine this situation from the lesson: Asking Someone's Age.",
    lead: "You can begin by saying:",
    line: "Pira na an imo edad?",
    translation: "How old are you?",
  },
  vocabularyIntro: "Learn the following words and expressions before proceeding to the activities.",
  pronunciationTip: "Read each syllable clearly. Avoid rushing through longer expressions.",
  selfIntroIntro: "Use these patterns and phrases from the lesson.",
  vocabulary: [
    {
      term: "Usa",
      meaning: "One",
      pronunciation: "u-sa",
      usage: "Number: 1",
      example: [
        {
          speaker: "A",
          text: "May-ada, kinse pesos.",
          translation: "Yes, there is one for fifteen pesos.",
        },
        {
          speaker: "B",
          text: "Sige, usa la.",
          translation: "Okay, just one.",
        },
      ],
    },
    {
      term: "Duha",
      meaning: "Two",
      pronunciation: "du-ha",
      usage: "Number: 2",
      example: [
        {
          speaker: "A",
          text: "Disisais anyos ako.",
          translation: "I am sixteen years old.",
        },
        {
          speaker: "B",
          text: "Ah, duha ka tuig an aton diperensya.",
          translation: "Ah, there is a two-year difference between us.",
        },
      ],
    },
    {
      term: "Tulo",
      meaning: "Three",
      pronunciation: "tu-lo",
      usage: "Number: 3",
      example: [
        {
          speaker: "",
          text: "Tulo nga libro",
          translation: "Three books",
        },
      ],
    },
    {
      term: "Upat",
      meaning: "Four",
      pronunciation: "u-pat",
      usage: "Number: 4",
      example: [
        {
          speaker: "",
          text: "Upat nga tawo",
          translation: "Four people",
        },
      ],
    },
    {
      term: "Lima",
      meaning: "Five",
      pronunciation: "li-ma",
      usage: "Number: 5",
      example: [
        {
          speaker: "A",
          text: "Pira an lapis ha lamesa?",
          translation: "How many pencils are on the table?",
        },
        {
          speaker: "B",
          text: "Lima an lapis.",
          translation: "There are five pencils.",
        },
      ],
    },
    {
      term: "Unom",
      meaning: "Six",
      pronunciation: "u-nom",
      usage: "Number: 6",
    },
    {
      term: "Pito",
      meaning: "Seven",
      pronunciation: "pi-to",
      usage: "Number: 7",
    },
    {
      term: "Walo",
      meaning: "Eight",
      pronunciation: "wa-lo",
      usage: "Number: 8",
    },
    {
      term: "Siyam",
      meaning: "Nine",
      pronunciation: "si-yam",
      usage: "Number: 9",
    },
    {
      term: "Napulo",
      meaning: "Ten",
      pronunciation: "na-pu-lo",
      usage: "Number: 10",
      example: [
        {
          speaker: "",
          text: "Napulo nga estudyante",
          translation: "Ten students",
        },
      ],
    },
    {
      term: "Onse",
      meaning: "Eleven",
      pronunciation: "on-se",
      usage: "Number: 11",
    },
    {
      term: "Dose",
      meaning: "Twelve",
      pronunciation: "do-se",
      usage: "Number: 12",
    },
    {
      term: "Trese",
      meaning: "Thirteen",
      pronunciation: "tre-se",
      usage: "Number: 13",
    },
    {
      term: "Katorse",
      meaning: "Fourteen",
      pronunciation: "ka-tor-se",
      usage: "Number: 14",
    },
    {
      term: "Kinse",
      meaning: "Fifteen",
      pronunciation: "kin-se",
      usage: "Number: 15",
      example: [
        {
          speaker: "A",
          text: "May-ada ka mas barato?",
          translation: "Do you have something cheaper?",
        },
        {
          speaker: "B",
          text: "May-ada, kinse pesos.",
          translation: "Yes, there is one for fifteen pesos.",
        },
      ],
    },
    {
      term: "Disisais",
      meaning: "Sixteen",
      pronunciation: "di-si-sais",
      usage: "Number: 16",
      example: [
        {
          speaker: "A",
          text: "Disiotso anyos ako. Ikaw?",
          translation: "I am eighteen years old. And you?",
        },
        {
          speaker: "B",
          text: "Disisais anyos ako.",
          translation: "I am sixteen years old.",
        },
      ],
    },
    {
      term: "Disisiete",
      meaning: "Seventeen",
      pronunciation: "di-si-sye-te",
      usage: "Number: 17",
    },
    {
      term: "Disiotso",
      meaning: "Eighteen",
      pronunciation: "di-syot-so",
      usage: "Number: 18",
      example: [
        {
          speaker: "A",
          text: "Pira na an imo edad?",
          translation: "How old are you?",
        },
        {
          speaker: "B",
          text: "Disiotso anyos ako. Ikaw?",
          translation: "I am eighteen years old. And you?",
        },
      ],
    },
    {
      term: "Disinuebe",
      meaning: "Nineteen",
      pronunciation: "di-si-nwe-be",
      usage: "Number: 19",
    },
    {
      term: "Baynte",
      meaning: "Twenty",
      pronunciation: "bayn-te",
      usage: "Number: 20",
      example: [
        {
          speaker: "A",
          text: "Pira ini nga notebook?",
          translation: "How much is this notebook?",
        },
        {
          speaker: "B",
          text: "Baynte pesos.",
          translation: "Twenty pesos.",
        },
      ],
    },
    {
      term: "Traynta",
      meaning: "Thirty",
      pronunciation: "tray-nta",
      usage: "Number: 30",
    },
    {
      term: "Kwarenta",
      meaning: "Forty",
      pronunciation: "kwa-ren-ta",
      usage: "Number: 40",
    },
    {
      term: "Singkwenta",
      meaning: "Fifty",
      pronunciation: "sing-kwen-ta",
      usage: "Number: 50",
      example: [
        {
          speaker: "",
          text: "May-ada ako singkwenta pesos.",
          translation: "I have fifty pesos.",
        },
      ],
    },
    {
      term: "Saisenta",
      meaning: "Sixty",
      pronunciation: "sa-i-sen-ta",
      usage: "Number: 60",
    },
    {
      term: "Sitenta",
      meaning: "Seventy",
      pronunciation: "si-ten-ta",
      usage: "Number: 70",
    },
    {
      term: "Otsenta",
      meaning: "Eighty",
      pronunciation: "ot-sen-ta",
      usage: "Number: 80",
    },
    {
      term: "Nobenta",
      meaning: "Ninety",
      pronunciation: "no-ben-ta",
      usage: "Number: 90",
    },
    {
      term: "Usa ka gatos",
      meaning: "One hundred",
      pronunciation: "u-sa ka ga-tos",
      usage: "Number: 100",
      example: [
        {
          speaker: "",
          text: "May-ada ako usa ka gatos nga pesos.",
          translation: "I have one hundred pesos.",
        },
      ],
    },
    {
      term: "Usa ka yukot",
      meaning: "One thousand",
      pronunciation: "u-sa ka yu-kot",
      usage: "Number: 1,000",
    },
    {
      term: "Numero",
      meaning: "Number",
      pronunciation: "nu-me-ro",
      usage: "Used when counting.",
    },
    {
      term: "Pira?",
      meaning: "How many?",
      pronunciation: "pi-ra",
      usage: "Used when counting.",
      example: [
        {
          speaker: "A",
          text: "Pira na an imo edad?",
          translation: "How old are you?",
        },
        {
          speaker: "B",
          text: "Disiotso anyos ako. Ikaw?",
          translation: "I am eighteen years old. And you?",
        },
      ],
    },
    {
      term: "Pira?",
      meaning: "How much?",
      pronunciation: "pi-ra",
      usage: "Used when counting.",
      example: [
        {
          speaker: "A",
          text: "Pira na an imo edad?",
          translation: "How old are you?",
        },
        {
          speaker: "B",
          text: "Disiotso anyos ako. Ikaw?",
          translation: "I am eighteen years old. And you?",
        },
      ],
    },
    {
      term: "Edad",
      meaning: "Age",
      pronunciation: "e-dad",
      usage: "Used when counting.",
      example: [
        {
          speaker: "A",
          text: "Pira na an imo edad?",
          translation: "How old are you?",
        },
        {
          speaker: "B",
          text: "Disiotso anyos ako. Ikaw?",
          translation: "I am eighteen years old. And you?",
        },
      ],
    },
    {
      term: "Anyos",
      meaning: "Years old",
      pronunciation: "an-yos",
      usage: "Used when counting.",
      example: [
        {
          speaker: "A",
          text: "Pira na an imo edad?",
          translation: "How old are you?",
        },
        {
          speaker: "B",
          text: "Disiotso anyos ako. Ikaw?",
          translation: "I am eighteen years old. And you?",
        },
      ],
    },
    {
      term: "Damo",
      meaning: "Many",
      pronunciation: "da-mo",
      usage: "Used when counting.",
    },
    {
      term: "Pipira",
      meaning: "Few",
      pronunciation: "pi-pi-ra",
      usage: "Used when counting.",
    },
    {
      term: "Ngatanan",
      meaning: "All",
      pronunciation: "nga-ta-nan",
      usage: "Used when counting.",
    },
    {
      term: "Kada",
      meaning: "Each",
      pronunciation: "ka-da",
      usage: "Used when counting.",
    },
    {
      term: "Dugang",
      meaning: "More",
      pronunciation: "du-gang",
      usage: "Used when counting.",
    },
    {
      term: "Kulang",
      meaning: "Less",
      pronunciation: "ku-lang",
      usage: "Used when counting.",
    },
  ],
  greetings: [
    {
      term: "Numero",
      meaning: "Number",
      pronunciation: "nu-me-ro",
      usage: "Used when counting.",
    },
    {
      term: "Pira?",
      meaning: "How many?",
      pronunciation: "pi-ra",
      usage: "Used when counting.",
      example: [
        {
          speaker: "A",
          text: "Pira na an imo edad?",
          translation: "How old are you?",
        },
        {
          speaker: "B",
          text: "Disiotso anyos ako. Ikaw?",
          translation: "I am eighteen years old. And you?",
        },
      ],
    },
    {
      term: "Pira?",
      meaning: "How much?",
      pronunciation: "pi-ra",
      usage: "Used when counting.",
      example: [
        {
          speaker: "A",
          text: "Pira na an imo edad?",
          translation: "How old are you?",
        },
        {
          speaker: "B",
          text: "Disiotso anyos ako. Ikaw?",
          translation: "I am eighteen years old. And you?",
        },
      ],
    },
    {
      term: "Edad",
      meaning: "Age",
      pronunciation: "e-dad",
      usage: "Used when counting.",
      example: [
        {
          speaker: "A",
          text: "Pira na an imo edad?",
          translation: "How old are you?",
        },
        {
          speaker: "B",
          text: "Disiotso anyos ako. Ikaw?",
          translation: "I am eighteen years old. And you?",
        },
      ],
    },
    {
      term: "Anyos",
      meaning: "Years old",
      pronunciation: "an-yos",
      usage: "Used when counting.",
      example: [
        {
          speaker: "A",
          text: "Pira na an imo edad?",
          translation: "How old are you?",
        },
        {
          speaker: "B",
          text: "Disiotso anyos ako. Ikaw?",
          translation: "I am eighteen years old. And you?",
        },
      ],
    },
    {
      term: "Damo",
      meaning: "Many",
      pronunciation: "da-mo",
      usage: "Used when counting.",
    },
    {
      term: "Pipira",
      meaning: "Few",
      pronunciation: "pi-pi-ra",
      usage: "Used when counting.",
    },
    {
      term: "Ngatanan",
      meaning: "All",
      pronunciation: "nga-ta-nan",
      usage: "Used when counting.",
    },
    {
      term: "Kada",
      meaning: "Each",
      pronunciation: "ka-da",
      usage: "Used when counting.",
    },
    {
      term: "Dugang",
      meaning: "More",
      pronunciation: "du-gang",
      usage: "Used when counting.",
    },
    {
      term: "Kulang",
      meaning: "Less",
      pronunciation: "ku-lang",
      usage: "Used when counting.",
    },
  ],
  patterns: [
    {
      label: "Pattern 1: Saying Your Age",
      pattern: "Number + anyos ako.",
      examples: [
        "Kinse anyos ako.",
        "Disisais anyos ako.",
        "Baynte anyos ako.",
      ],
    },
    {
      label: "Pattern 2: Counting Objects",
      pattern: "Number + nga libro",
      examples: [
        "Usa nga libro",
        "Duha nga libro",
        "Tulo nga libro",
      ],
    },
    {
      label: "Pattern 3: Asking How Many",
      pattern: "Pira + Who or what?",
      examples: [
        "Pira hira?",
        "Pira ini?",
        "Pira kamo?",
      ],
    },
  ],
  sentences: [
    {
      text: "Pira?",
      meaning: "How many?",
    },
    {
      text: "Pira hira?",
      meaning: "How many are there?",
    },
    {
      text: "Pira an imo aada?",
      meaning: "How many do you have?",
    },
    {
      text: "Pira ini?",
      meaning: "How much is this?",
    },
    {
      text: "Pira kamo?",
      meaning: "How many are you?",
    },
    {
      text: "Pira an tawo?",
      meaning: "How many people are there?",
    },
    {
      text: "Pira na an imo edad?",
      meaning: "How old are you?",
    },
    {
      text: "Disiotso anyos ako.",
      meaning: "I am eighteen years old.",
    },
    {
      text: "Baynte anyos ako.",
      meaning: "I am twenty years old.",
    },
    {
      text: "Kinse anyos ako.",
      meaning: "I am fifteen years old.",
    },
    {
      text: "Usa nga libro",
      meaning: "One book",
    },
    {
      text: "Duha nga libro",
      meaning: "Two books",
    },
    {
      text: "Tulo nga libro",
      meaning: "Three books",
    },
    {
      text: "Upat nga tawo",
      meaning: "Four people",
    },
    {
      text: "Lima nga bata",
      meaning: "Five children",
    },
    {
      text: "Napulo nga estudyante",
      meaning: "Ten students",
    },
    {
      text: "Napulo ka pesos.",
      meaning: "It costs ten pesos.",
    },
    {
      text: "Baynte pesos.",
      meaning: "It costs twenty pesos.",
    },
    {
      text: "May-ada ako singkwenta pesos.",
      meaning: "I have fifty pesos.",
    },
    {
      text: "May-ada ako usa ka gatos nga pesos.",
      meaning: "I have one hundred pesos.",
    },
    {
      text: "Upat nga libro",
      meaning: "Four books",
    },
    {
      text: "Lima nga libro",
      meaning: "Five books",
    },
    {
      text: "Disisais anyos ako.",
      meaning: "I am sixteen years old.",
    },
  ],
  conversations: [
    {
      title: "Conversation 1: Asking Someone's Age",
      lines: [
        {
          speaker: "Ana",
          text: "Pira na an imo edad?",
          translation: "How old are you?",
        },
        {
          speaker: "Maria",
          text: "Disiotso anyos ako. Ikaw?",
          translation: "I am eighteen years old. And you?",
        },
        {
          speaker: "Ana",
          text: "Disisais anyos ako.",
          translation: "I am sixteen years old.",
        },
        {
          speaker: "Maria",
          text: "Ah, duha ka tuig an aton diperensya.",
          translation: "Ah, there is a two-year difference between us.",
        },
      ],
      situation: "Asking about someone's age. Expressing age using numbers. Understanding simple numerical differences.",
    },
    {
      title: "Conversation 2: Counting Objects",
      lines: [
        {
          speaker: "Juan",
          text: "Pira an lapis ha lamesa?",
          translation: "How many pencils are on the table?",
        },
        {
          speaker: "Pedro",
          text: "Lima an lapis.",
          translation: "There are five pencils.",
        },
        {
          speaker: "Juan",
          text: "May-ada ka pa iba?",
          translation: "Do you have more?",
        },
        {
          speaker: "Pedro",
          text: "Oo, may-ada pa ako duha.",
          translation: "Yes, I have two more.",
        },
        {
          speaker: "Juan",
          text: "Salamat!",
          translation: "Thank you!",
        },
      ],
      situation: "Asking about quantities. Counting objects. Using numbers in simple exchanges.",
    },
    {
      title: "Conversation 3: Buying Something",
      lines: [
        {
          speaker: "Maria",
          text: "Pira ini nga notebook?",
          translation: "How much is this notebook?",
        },
        {
          speaker: "Vendor",
          text: "Baynte pesos.",
          translation: "Twenty pesos.",
        },
        {
          speaker: "Maria",
          text: "May-ada ka mas barato?",
          translation: "Do you have something cheaper?",
        },
        {
          speaker: "Vendor",
          text: "May-ada, kinse pesos.",
          translation: "Yes, there is one for fifteen pesos.",
        },
        {
          speaker: "Maria",
          text: "Sige, usa la.",
          translation: "Okay, just one.",
        },
        {
          speaker: "Vendor",
          text: "Salamat!",
          translation: "Thank you!",
        },
      ],
      situation: "Asking about prices. Understanding number expressions. Using numbers while shopping.",
    },
  ],
  languageNotes: [
    {
      title: "A. Counting from One to Ten",
      body: [
        "The first step in learning Waray numbers is memorizing the numbers from one to ten.",
      ],
      table: {
        leftHeading: "English",
        rightHeading: "Waray",
        rows: [
          {
            left: "One",
            right: "Usa",
          },
          {
            left: "Two",
            right: "Duha",
          },
          {
            left: "Three",
            right: "Tulo",
          },
          {
            left: "Four",
            right: "Upat",
          },
          {
            left: "Five",
            right: "Lima",
          },
          {
            left: "Six",
            right: "Unom",
          },
          {
            left: "Seven",
            right: "Pito",
          },
          {
            left: "Eight",
            right: "Walo",
          },
          {
            left: "Nine",
            right: "Siyam",
          },
          {
            left: "Ten",
            right: "Napulo",
          },
        ],
      },
    },
    {
      title: "A. Counting from One to Ten",
      body: [
        "Example: Counting Everyday Objects",
        "Imagine that you have several objects in front of you.",
      ],
      examples: [
        {
          text: "One book",
          meaning: "Usa nga libro",
        },
        {
          text: "Two books",
          meaning: "Duha nga libro",
        },
        {
          text: "Three books",
          meaning: "Tulo nga libro",
        },
        {
          text: "Four books",
          meaning: "Upat nga libro",
        },
        {
          text: "Five books",
          meaning: "Lima nga libro",
        },
      ],
    },
    {
      title: "A. Counting from One to Ten",
      body: [
        "Practice:",
        "Look around your surroundings and count five different objects using Waray numbers.",
      ],
    },
    {
      title: "B. Counting from Eleven to Twenty",
      body: [
        "After learning the basic numbers, practice counting from eleven to twenty.",
      ],
      table: {
        leftHeading: "Number",
        rightHeading: "Waray",
        rows: [
          {
            left: "11",
            right: "Onse",
          },
          {
            left: "12",
            right: "Dose",
          },
          {
            left: "13",
            right: "Trese",
          },
          {
            left: "14",
            right: "Katorse",
          },
          {
            left: "15",
            right: "Kinse",
          },
          {
            left: "16",
            right: "Disisais",
          },
          {
            left: "17",
            right: "Disisiete",
          },
          {
            left: "18",
            right: "Disiotso",
          },
          {
            left: "19",
            right: "Disinuebe",
          },
          {
            left: "20",
            right: "Baynte",
          },
        ],
      },
    },
    {
      title: "B. Counting from Eleven to Twenty",
      body: [
        "A: Pira an libro nga aada ha lamesa?",
        "B: Kinse nga libro.",
        "English:",
        "A: How many books are on the table?",
        "B: Fifteen books.",
      ],
    },
    {
      title: "C. Asking and Answering About Age",
      body: [
        "Numbers are often used when introducing yourself and asking other people about their age.",
        "Question:",
        "Pira na an imo edad?",
        "English Translation:",
        "How old are you?",
        "Response:",
        "Disiotso anyos ako.",
        "English Translation:",
        "I am eighteen years old.",
        "Additional Examples:",
      ],
      examples: [
        {
          text: "Kinse anyos ako.",
          meaning: "I am fifteen years old.",
        },
        {
          text: "Baynte anyos ako.",
          meaning: "I am twenty years old.",
        },
        {
          text: "Disisais anyos ako.",
          meaning: "I am sixteen years old.",
        },
      ],
    },
    {
      title: "D. Asking About Quantities",
      body: [
        "You can use pira to ask how many or how much something is, depending on the context.",
      ],
      examples: [
        {
          text: "Example 1",
          meaning: "Counting People",
        },
      ],
    },
    {
      title: "D. Asking About Quantities",
      body: [
        "A: Pira kamo?",
        "B: Duha kami.",
        "English:",
        "A: How many are you?",
        "B: There are two of us.",
      ],
      examples: [
        {
          text: "Example 2",
          meaning: "Counting Objects",
        },
      ],
    },
    {
      title: "D. Asking About Quantities",
      body: [
        "A: Pira an mansanas?",
        "B: Lima.",
        "English:",
        "A: How many apples are there?",
        "B: Five.",
      ],
    },
    {
      title: "E. Using Numbers When Shopping",
      body: [
        "Numbers are useful when buying things because they help you understand prices and quantities.",
        "A: Pira ini?",
        "B: Baynte pesos.",
        "A: Sige, usa la.",
        "English:",
        "A: How much is this?",
        "B: Twenty pesos.",
        "A: Okay, just one.",
      ],
    },
    {
      title: "A. Numbers from One to Ten",
      body: [
        "Start by learning the basic Waray numbers. These are the foundation for counting.",
        "Learning Tip:",
        "Practice saying the numbers in order several times. Once you can remember them, try counting objects around you using Waray.",
      ],
    },
    {
      title: "B. Numbers from Eleven to Twenty",
      body: [
        "The following forms are commonly encountered in everyday Philippine speech. Some are Spanish-derived number words used in Waray conversations.",
        "Learning Tip:",
        "Listen carefully to the syllables when practicing these numbers. Some number words may have spelling or pronunciation variations in different communities.",
      ],
    },
    {
      title: "C. Commonly Used Larger Numbers",
      body: [
        "The following forms are useful when discussing larger quantities. Waray speakers may also use Spanish-derived or other familiar number forms depending on context.",
        "Important Note:",
        "Number systems and everyday number usage can vary among Waray-speaking communities. The larger-number forms above are candidate teaching forms and should be checked by a Western Samar language evaluator, especially before teaching compound numbers as fixed patterns.",
      ],
    },
    {
      title: "B. Expressing Your Age",
      body: [
        "Pattern to Remember:",
        "To express your age:",
        "[Number] + anyos ako.",
        "Examples:",
        "• English: I am sixteen years old.",
        "• Waray: Disisais anyos ako.",
        "• English: I am eighteen years old.",
        "• Waray: Disiotso anyos ako.",
      ],
    },
    {
      title: "C. Counting Objects",
      body: [
        "Learning Tip:",
        "The word nga connects a number with the noun being counted in these examples.",
      ],
    },
    {
      title: "D. Talking About Prices",
      body: [
        "These examples introduce common price expressions. Actual sentence construction may vary depending on the speaker and situation.",
      ],
    },
  ],
  inferredFields: [
    "example",
    "pronunciation",
    "usage",
    "pattern",
    "arrange",
    "speaking phrase",
    "respelling",
    "target pitch and mood",
    "example situation",
    "pronunciation tip",
    "badge description",
    "completion requirement",
  ],
};
