import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 7 — imported from "Lesson Plan.pdf", pages 744–757.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
// Fields not given by the plan are INFERRED from this lesson's own content and
// listed in docs/waray-inferred-keys.md: situation, usage, example, pattern, fill-in, arrange, fourth option, speaking phrase, target pitch and mood, respelling, example situation, pronunciation tip, completion requirement.
// The practice answers are INFERRED drafts, not from the PDF. See
// docs/waray-draft-answer-keys.md for each answer and how it was found.

export const warayLesson7: StructuredLesson = {
  lessonId: "waray_7",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 7,
  title: "Colors and Shapes",
  level: "Beginner",
  unit: "Unit 2 – Everyday Vocabulary",
  estimatedDuration: "30–40 minutes",
  prerequisite: "Lessons 1–6",
  intro: [
    "Colors and shapes help us describe the things we see every day. We use them when identifying objects, describing clothing, choosing items, and explaining what something looks like.",
    "In this lesson, you will learn common Waray words for colors and basic shapes. You will also practice describing objects using simple Waray sentences.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify common colors in Waray.",
    "Recognize basic geometric shapes and their Waray equivalents.",
    "Ask and answer simple questions about the color of an object.",
    "Describe familiar objects using color and shape vocabulary.",
    "Construct simple sentences describing objects around them.",
  ],
  assessment: {
    instructions: "Choose the correct answer. Each question is worth one point.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What is the Waray word for red?",
        options: [
          {
            key: "A",
            text: "Pula",
          },
          {
            key: "B",
            text: "Puti",
          },
          {
            key: "C",
            text: "Itom",
          },
          {
            key: "D",
            text: "My shirt is red.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 2,
        prompt: "What does berde mean?",
        options: [
          {
            key: "A",
            text: "Yellow",
          },
          {
            key: "B",
            text: "Green",
          },
          {
            key: "C",
            text: "Blue",
          },
          {
            key: "D",
            text: "Bulak",
          },
        ],
        answerKey: "B",
      },
      {
        id: 3,
        prompt: "What is the Waray word for black?",
        options: [
          {
            key: "A",
            text: "Asul",
          },
          {
            key: "B",
            text: "Pula",
          },
          {
            key: "C",
            text: "Itom",
          },
          {
            key: "D",
            text: "Green",
          },
        ],
        answerKey: "C",
      },
      {
        id: 4,
        prompt: "What does sirkulo mean?",
        options: [
          {
            key: "A",
            text: "Circle",
          },
          {
            key: "B",
            text: "Square",
          },
          {
            key: "C",
            text: "Triangle",
          },
          {
            key: "D",
            text: "Big",
          },
        ],
        answerKey: "A",
      },
      {
        id: 5,
        prompt: "What is the Waray word for triangle?",
        options: [
          {
            key: "A",
            text: "Ovalo",
          },
          {
            key: "B",
            text: "Trayanggulo",
          },
          {
            key: "C",
            text: "Kuwadrado",
          },
          {
            key: "D",
            text: "Big",
          },
        ],
        answerKey: "B",
      },
      {
        id: 6,
        prompt: "What does dako mean?",
        options: [
          {
            key: "A",
            text: "Small",
          },
          {
            key: "B",
            text: "Old",
          },
          {
            key: "C",
            text: "Big",
          },
          {
            key: "D",
            text: "My shirt is white.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 7,
        prompt: "How do you ask, \"What color is this?\"",
        options: [
          {
            key: "A",
            text: "Ano nga kolor ini?",
          },
          {
            key: "B",
            text: "Ano nga adlaw yana?",
          },
          {
            key: "C",
            text: "Pira na an oras?",
          },
          {
            key: "D",
            text: "Puti",
          },
        ],
        answerKey: "A",
      },
      {
        id: 8,
        prompt: "What does Puti an akon baro mean?",
        options: [
          {
            key: "A",
            text: "My shirt is black.",
          },
          {
            key: "B",
            text: "My shirt is white.",
          },
          {
            key: "C",
            text: "My shirt is red.",
          },
          {
            key: "D",
            text: "Green",
          },
        ],
        answerKey: "B",
      },
      {
        id: 9,
        prompt: "What is the Waray word for flower?",
        options: [
          {
            key: "A",
            text: "Bulak",
          },
          {
            key: "B",
            text: "Bitoon",
          },
          {
            key: "C",
            text: "Butang",
          },
          {
            key: "D",
            text: "Trayanggulo",
          },
        ],
        answerKey: "A",
      },
      {
        id: 10,
        prompt: "What does Gutiay an libro mean?",
        options: [
          {
            key: "A",
            text: "The book is big.",
          },
          {
            key: "B",
            text: "The book is new.",
          },
          {
            key: "C",
            text: "The book is small.",
          },
          {
            key: "D",
            text: "Pula",
          },
        ],
        answerKey: "C",
      },
    ],
  },
  extraActivities: [
    {
      title: "Translate into Waray",
      kind: "translate",
      instructions: "Translate the following sentences into Waray.",
      items: [
        "This is red.",
        "What color is this?",
        "The ball is round.",
        "The book is small.",
        "The sky is blue.",
      ],
    },
    {
      title: "Describe the Objects Around You",
      kind: "open",
      instructions: "Look around your room or classroom. Choose three objects and describe each one in Waray.\nFor each object, provide:",
      items: [
        "Object name",
        "Color",
        "Shape, if applicable",
        "One complete descriptive sentence",
      ],
      note: "Example:\nObject: Ball\nColor: Pula\nShape: Sirkulo\nSentence: Pula an bola.",
    },
  ],
  matchActivity: {
    title: "Match the Colors",
    instructions: "Match each English color with its correct Waray equivalent.",
    pairs: [
      {
        id: "1",
        term: "Red",
        answer: "Pula",
      },
      {
        id: "2",
        term: "Blue",
        answer: "Asul",
      },
      {
        id: "3",
        term: "Green",
        answer: "Berde",
      },
      {
        id: "4",
        term: "Black",
        answer: "Itom",
      },
      {
        id: "5",
        term: "White",
        answer: "Puti",
      },
    ],
  },
  choiceActivity: {
    title: "Identify the Shape",
    questions: [
      {
        id: 1,
        prompt: "Circle",
        options: [
          {
            key: "A",
            text: "Sirkulo",
          },
          {
            key: "B",
            text: "Kuwadrado",
          },
          {
            key: "C",
            text: "Trayanggulo",
          },
        ],
        answerKey: "A",
        title: "Identify the Shape",
        instructions: "Choose the correct Waray equivalent.",
      },
      {
        id: 2,
        prompt: "Square",
        options: [
          {
            key: "A",
            text: "Ovalo",
          },
          {
            key: "B",
            text: "Kuwadrado",
          },
          {
            key: "C",
            text: "Rektanggulo",
          },
        ],
        answerKey: "B",
        title: "Identify the Shape",
        instructions: "Choose the correct Waray equivalent.",
      },
      {
        id: 3,
        prompt: "Triangle",
        options: [
          {
            key: "A",
            text: "Sirkulo",
          },
          {
            key: "B",
            text: "Ovalo",
          },
          {
            key: "C",
            text: "Trayanggulo",
          },
        ],
        answerKey: "C",
        title: "Identify the Shape",
        instructions: "Choose the correct Waray equivalent.",
      },
      {
        id: 4,
        prompt: "Rectangle",
        options: [
          {
            key: "A",
            text: "Rektanggulo",
          },
          {
            key: "B",
            text: "Bitoon",
          },
          {
            key: "C",
            text: "Kasingkasing",
          },
        ],
        answerKey: "A",
        title: "Identify the Shape",
        instructions: "Choose the correct Waray equivalent.",
      },
      {
        id: 5,
        prompt: "______ an bag. (The bag is black.)",
        options: [
          {
            key: "A",
            text: "Itom",
          },
          {
            key: "B",
            text: "Puti",
          },
          {
            key: "C",
            text: "Pula",
          },
        ],
        answerKey: "A",
        title: "Complete the Sentences",
        instructions: "Choose the correct word to complete each sentence.",
      },
      {
        id: 6,
        prompt: "______ an libro. (The book is small.)",
        options: [
          {
            key: "A",
            text: "Dako",
          },
          {
            key: "B",
            text: "Gutiay",
          },
          {
            key: "C",
            text: "Bag-o",
          },
        ],
        answerKey: "B",
        title: "Complete the Sentences",
        instructions: "Choose the correct word to complete each sentence.",
      },
      {
        id: 7,
        prompt: "______ ini? (What shape is this?)",
        options: [
          {
            key: "A",
            text: "Ano nga porma",
          },
          {
            key: "B",
            text: "Pira na",
          },
          {
            key: "C",
            text: "Ano nga adlaw",
          },
        ],
        answerKey: "A",
        title: "Complete the Sentences",
        instructions: "Choose the correct word to complete each sentence.",
      },
    ],
  },
  answerKeysInferred: true,
  rewards: {
    items: [
      {
        section: "vocabulary",
        label: "Vocabulary Practice + Phrase Recognition",
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
      name: "Color and Shape Explorer Badge",
      description: "Awarded to learners who successfully identify common colors and shapes and use them to describe familiar objects in Waray.",
    },
    completionRequirement: "Obtain at least 70% in the lesson assessment. Learners may repeat the activities and assessment if they do not meet the requirement.",
  },
  expectedOutcomes: [
    "Identify common colors in Waray.",
    "Recognize basic geometric shapes.",
    "Ask and answer questions about colors and shapes.",
    "Describe familiar objects using simple Waray sentences.",
    "Use basic descriptive vocabulary in everyday communication.",
  ],
  fillInBlanks: {
    title: "Fill in the Blanks",
    instructions: "Complete each sentence using the appropriate Waray word.",
    items: [
      {
        id: "1",
        sentence: "Ano nga ___ ini?",
        hint: "What color is this?",
        answer: "kolor",
        wordBank: [
          "Butang",
          "Silya",
          "kolor",
          "Berde",
        ],
      },
      {
        id: "2",
        sentence: "___ an langit.",
        hint: "The sky is blue.",
        answer: "Asul",
        wordBank: [
          "Lamisa",
          "Asul",
          "Puti",
          "Rosas",
        ],
      },
      {
        id: "3",
        sentence: "___ an banwa.",
        hint: "The grass is green.",
        answer: "Berde",
        wordBank: [
          "Baro",
          "Daan",
          "Bola",
          "Berde",
        ],
      },
      {
        id: "4",
        sentence: "___ an bulak.",
        hint: "The flower is yellow.",
        answer: "Dilaw",
        wordBank: [
          "Daan",
          "Rosas",
          "Libro",
          "Dilaw",
        ],
      },
      {
        id: "5",
        sentence: "Ano nga ___ ini?",
        hint: "What shape is this?",
        answer: "porma",
        wordBank: [
          "Bag-o",
          "Kahel",
          "porma",
          "Silya",
        ],
      },
    ],
  },
  arrangeWords: {
    title: "Arrange the Words",
    instructions: "Arrange the words to form a correct Waray sentence.",
    items: [
      {
        id: "1",
        words: [
          "nga",
          "Ano",
          "kolor",
          "ini",
        ],
        answer: [
          "Ano",
          "nga",
          "kolor",
          "ini",
        ],
        display: "Ano nga kolor ini?",
      },
      {
        id: "2",
        words: [
          "Asul",
          "langit",
          "an",
        ],
        answer: [
          "Asul",
          "an",
          "langit",
        ],
        display: "Asul an langit.",
      },
      {
        id: "3",
        words: [
          "Berde",
          "banwa",
          "an",
        ],
        answer: [
          "Berde",
          "an",
          "banwa",
        ],
        display: "Berde an banwa.",
      },
      {
        id: "4",
        words: [
          "an",
          "bulak",
          "Dilaw",
        ],
        answer: [
          "Dilaw",
          "an",
          "bulak",
        ],
        display: "Dilaw an bulak.",
      },
      {
        id: "5",
        words: [
          "nga",
          "porma",
          "ini",
          "Ano",
        ],
        answer: [
          "Ano",
          "nga",
          "porma",
          "ini",
        ],
        display: "Ano nga porma ini?",
      },
    ],
  },
  speaking: {
    title: "Speaking Practice",
    instructions: "Read the following sentences aloud.",
    note: "Learners should listen to the model pronunciation before recording their own voice.",
    practiceLessonId: "waray_7",
    phrases: [
      {
        id: "1",
        text: "Ano nga kolor ini?",
        respelling: "A-no nga ko-LOR I-ni?",
        meaning: "What color is this?",
      },
      {
        id: "2",
        text: "Berde an banwa.",
        respelling: "BER-de an BAN-wa",
        meaning: "The grass is green.",
      },
      {
        id: "3",
        text: "Kuwadrado ini.",
        respelling: "kwa-dra-DO I-ni",
        meaning: "This is a square.",
      },
      {
        id: "4",
        text: "Puti an akon baro.",
        respelling: "PU-ti an A-kon BA-ro",
        meaning: "My shirt is white.",
      },
      {
        id: "5",
        text: "Trayanggulo ini.",
        respelling: "tra-yang-gu-lo i-ni",
        meaning: "This is a triangle.",
      },
      {
        id: "6",
        text: "Puti an silya.",
        respelling: "pu-ti an sil-ya",
        meaning: "The chair is white.",
      },
      {
        id: "7",
        text: "Mga bola",
        respelling: "ma-nga bo-la",
        meaning: "Balls",
      },
    ],
  },
  exampleSituation: {
    description: "Imagine this situation from the lesson: Asking About Colors.",
    lead: "You can begin by saying:",
    line: "Ano nga kolor ini?",
    translation: "What color is this?",
  },
  vocabularyIntro: "Learn the following words and expressions before proceeding to the activities.",
  pronunciationTip: "Read each syllable clearly. Avoid rushing through longer expressions.",
  selfIntroIntro: "Use these patterns and phrases from the lesson.",
  vocabulary: [
    {
      term: "Kolor",
      meaning: "Color",
      pronunciation: "ko-LOR",
      usage: "From this lesson's word list: colors.",
      example: [
        {
          speaker: "A",
          text: "Ano nga kolor ini?",
          translation: "What color is this?",
        },
        {
          speaker: "B",
          text: "Pula ini.",
          translation: "This is red.",
        },
      ],
    },
    {
      term: "Pula",
      meaning: "Red",
      pronunciation: "PU-la",
      usage: "From this lesson's word list: colors.",
      example: [
        {
          speaker: "A",
          text: "Pula ini.",
          translation: "This is red.",
        },
        {
          speaker: "B",
          text: "Ngan ini?",
          translation: "And this one?",
        },
      ],
    },
    {
      term: "Asul",
      meaning: "Blue",
      pronunciation: "A-sul",
      usage: "From this lesson's word list: colors.",
      example: [
        {
          speaker: "A",
          text: "Ngan ini?",
          translation: "And this one?",
        },
        {
          speaker: "B",
          text: "Asul ini.",
          translation: "This is blue.",
        },
      ],
    },
    {
      term: "Dilaw",
      meaning: "Yellow",
      pronunciation: "di-LAW",
      usage: "From this lesson's word list: colors.",
      example: [
        {
          speaker: "",
          text: "Dilaw an bulak.",
          translation: "The flower is yellow.",
        },
      ],
    },
    {
      term: "Berde",
      meaning: "Green",
      pronunciation: "BER-de",
      usage: "From this lesson's word list: colors.",
      example: [
        {
          speaker: "",
          text: "Berde an banwa.",
          translation: "The grass is green.",
        },
      ],
    },
    {
      term: "Itom",
      meaning: "Black",
      pronunciation: "I-tom",
      usage: "From this lesson's word list: colors.",
      example: [
        {
          speaker: "A",
          text: "Ano an kolor han imo bag?",
          translation: "What is the color of your bag?",
        },
        {
          speaker: "B",
          text: "Itom an akon bag.",
          translation: "My bag is black.",
        },
      ],
    },
    {
      term: "Puti",
      meaning: "White",
      pronunciation: "PU-ti",
      usage: "From this lesson's word list: colors.",
      example: [
        {
          speaker: "",
          text: "Puti an akon baro.",
          translation: "My shirt is white.",
        },
      ],
    },
    {
      term: "Kayumanggi",
      meaning: "Brown",
      pronunciation: "ka-yu-MANG-gi",
      usage: "From this lesson's word list: colors.",
    },
    {
      term: "Kahel",
      meaning: "Orange",
      pronunciation: "ka-HEL",
      usage: "From this lesson's word list: colors.",
    },
    {
      term: "Rosas",
      meaning: "Pink",
      pronunciation: "RO-sas",
      usage: "From this lesson's word list: colors.",
    },
    {
      term: "Lila",
      meaning: "Purple",
      pronunciation: "LI-la",
      usage: "From this lesson's word list: colors.",
    },
    {
      term: "Abuhin",
      meaning: "Gray",
      pronunciation: "a-BU-hin",
      usage: "From this lesson's word list: colors.",
    },
    {
      term: "Porma",
      meaning: "Shape",
      pronunciation: "POR-ma",
      usage: "From this lesson's word list: basic shapes.",
      example: [
        {
          speaker: "A",
          text: "Ano nga porma ini?",
          translation: "What shape is this?",
        },
        {
          speaker: "B",
          text: "Sirkulo ini.",
          translation: "This is a circle.",
        },
      ],
    },
    {
      term: "Sirkulo",
      meaning: "Circle",
      pronunciation: "sir-KU-lo",
      usage: "From this lesson's word list: basic shapes.",
      example: [
        {
          speaker: "A",
          text: "Sirkulo ini.",
          translation: "This is a circle.",
        },
        {
          speaker: "B",
          text: "Ngan ini nga usa?",
          translation: "And this one?",
        },
      ],
    },
    {
      term: "Kuwadrado",
      meaning: "Square",
      pronunciation: "kwa-dra-DO",
      usage: "From this lesson's word list: basic shapes.",
      example: [
        {
          speaker: "",
          text: "Kuwadrado ini.",
          translation: "This is a square.",
        },
      ],
    },
    {
      term: "Rektanggulo",
      meaning: "Rectangle",
      pronunciation: "rek-tang-GU-lo",
      usage: "From this lesson's word list: basic shapes.",
    },
    {
      term: "Trayanggulo",
      meaning: "Triangle",
      pronunciation: "tra-yang-GU-lo",
      usage: "From this lesson's word list: basic shapes.",
      example: [
        {
          speaker: "A",
          text: "Ngan ini nga usa?",
          translation: "And this one?",
        },
        {
          speaker: "B",
          text: "Trayanggulo ini.",
          translation: "This is a triangle.",
        },
      ],
    },
    {
      term: "Ovalo",
      meaning: "Oval",
      pronunciation: "o-VA-lo",
      usage: "From this lesson's word list: basic shapes.",
    },
    {
      term: "Bitoon",
      meaning: "Star",
      pronunciation: "bi-TO-on",
      usage: "From this lesson's word list: basic shapes.",
    },
    {
      term: "Kasingkasing",
      meaning: "Heart",
      pronunciation: "ka-sing-KA-sing",
      usage: "From this lesson's word list: basic shapes.",
    },
    {
      term: "Linya",
      meaning: "Line",
      pronunciation: "LIN-ya",
      usage: "From this lesson's word list: basic shapes.",
    },
    {
      term: "Punto",
      meaning: "Point",
      pronunciation: "PUN-to",
      usage: "From this lesson's word list: basic shapes.",
    },
    {
      term: "Butang",
      meaning: "Object / Thing",
      pronunciation: "BU-tang",
      usage: "A common objects and describing word.",
    },
    {
      term: "Bola",
      meaning: "Ball",
      pronunciation: "BO-la",
      usage: "A common objects and describing word.",
      example: [
        {
          speaker: "",
          text: "Lingin an bola.",
          translation: "The ball is round.",
        },
      ],
    },
    {
      term: "Libro",
      meaning: "Book",
      pronunciation: "LIB-ro",
      usage: "A common objects and describing word.",
      example: [
        {
          speaker: "",
          text: "Gutiay an libro.",
          translation: "The book is small.",
        },
      ],
    },
    {
      term: "Bag",
      meaning: "Bag",
      pronunciation: "BAG",
      usage: "A common objects and describing word.",
      example: [
        {
          speaker: "A",
          text: "Itom an akon bag.",
          translation: "My bag is black.",
        },
        {
          speaker: "B",
          text: "Dako ba an imo bag?",
          translation: "Is your bag big?",
        },
      ],
    },
    {
      term: "Baro",
      meaning: "Shirt",
      pronunciation: "BA-ro",
      usage: "A common objects and describing word.",
      example: [
        {
          speaker: "",
          text: "Puti an akon baro.",
          translation: "My shirt is white.",
        },
      ],
    },
    {
      term: "Bulak",
      meaning: "Flower",
      pronunciation: "BU-lak",
      usage: "A common objects and describing word.",
      example: [
        {
          speaker: "",
          text: "Dilaw an bulak.",
          translation: "The flower is yellow.",
        },
      ],
    },
    {
      term: "Lamisa",
      meaning: "Table",
      pronunciation: "la-MI-sa",
      usage: "A common objects and describing word.",
      example: [
        {
          speaker: "",
          text: "Dako an lamisa.",
          translation: "The table is big.",
        },
      ],
    },
    {
      term: "Silya",
      meaning: "Chair",
      pronunciation: "SIL-ya",
      usage: "A common objects and describing word.",
      example: [
        {
          speaker: "",
          text: "Puti an silya.",
          translation: "The chair is white.",
        },
      ],
    },
    {
      term: "Dako",
      meaning: "Big",
      pronunciation: "DA-ko",
      usage: "A common objects and describing word.",
      example: [
        {
          speaker: "A",
          text: "Dako ba an imo bag?",
          translation: "Is your bag big?",
        },
        {
          speaker: "B",
          text: "Diri, gutiay la.",
          translation: "No, it is small.",
        },
      ],
    },
    {
      term: "Gutiay",
      meaning: "Small",
      pronunciation: "gu-TI-ay",
      usage: "A common objects and describing word.",
      example: [
        {
          speaker: "A",
          text: "Diri, gutiay la.",
          translation: "No, it is small.",
        },
        {
          speaker: "B",
          text: "Maupay!",
          translation: "Nice!",
        },
      ],
    },
    {
      term: "Bag-o",
      meaning: "New",
      pronunciation: "ba-GO",
      usage: "A common objects and describing word.",
    },
    {
      term: "Daan",
      meaning: "Old",
      pronunciation: "da-AN",
      usage: "A common objects and describing word.",
    },
  ],
  greetings: [
    {
      term: "Butang",
      meaning: "Object / Thing",
      pronunciation: "BU-tang",
      usage: "A common objects and describing word.",
    },
    {
      term: "Bola",
      meaning: "Ball",
      pronunciation: "BO-la",
      usage: "A common objects and describing word.",
      example: [
        {
          speaker: "",
          text: "Lingin an bola.",
          translation: "The ball is round.",
        },
      ],
    },
    {
      term: "Libro",
      meaning: "Book",
      pronunciation: "LIB-ro",
      usage: "A common objects and describing word.",
      example: [
        {
          speaker: "",
          text: "Gutiay an libro.",
          translation: "The book is small.",
        },
      ],
    },
    {
      term: "Bag",
      meaning: "Bag",
      pronunciation: "BAG",
      usage: "A common objects and describing word.",
      example: [
        {
          speaker: "A",
          text: "Itom an akon bag.",
          translation: "My bag is black.",
        },
        {
          speaker: "B",
          text: "Dako ba an imo bag?",
          translation: "Is your bag big?",
        },
      ],
    },
    {
      term: "Baro",
      meaning: "Shirt",
      pronunciation: "BA-ro",
      usage: "A common objects and describing word.",
      example: [
        {
          speaker: "",
          text: "Puti an akon baro.",
          translation: "My shirt is white.",
        },
      ],
    },
    {
      term: "Bulak",
      meaning: "Flower",
      pronunciation: "BU-lak",
      usage: "A common objects and describing word.",
      example: [
        {
          speaker: "",
          text: "Dilaw an bulak.",
          translation: "The flower is yellow.",
        },
      ],
    },
    {
      term: "Lamisa",
      meaning: "Table",
      pronunciation: "la-MI-sa",
      usage: "A common objects and describing word.",
      example: [
        {
          speaker: "",
          text: "Dako an lamisa.",
          translation: "The table is big.",
        },
      ],
    },
    {
      term: "Silya",
      meaning: "Chair",
      pronunciation: "SIL-ya",
      usage: "A common objects and describing word.",
      example: [
        {
          speaker: "",
          text: "Puti an silya.",
          translation: "The chair is white.",
        },
      ],
    },
    {
      term: "Dako",
      meaning: "Big",
      pronunciation: "DA-ko",
      usage: "A common objects and describing word.",
      example: [
        {
          speaker: "A",
          text: "Dako ba an imo bag?",
          translation: "Is your bag big?",
        },
        {
          speaker: "B",
          text: "Diri, gutiay la.",
          translation: "No, it is small.",
        },
      ],
    },
    {
      term: "Gutiay",
      meaning: "Small",
      pronunciation: "gu-TI-ay",
      usage: "A common objects and describing word.",
      example: [
        {
          speaker: "A",
          text: "Diri, gutiay la.",
          translation: "No, it is small.",
        },
        {
          speaker: "B",
          text: "Maupay!",
          translation: "Nice!",
        },
      ],
    },
    {
      term: "Bag-o",
      meaning: "New",
      pronunciation: "ba-GO",
      usage: "A common objects and describing word.",
    },
    {
      term: "Daan",
      meaning: "Old",
      pronunciation: "da-AN",
      usage: "A common objects and describing word.",
    },
  ],
  patterns: [
    {
      label: "Pattern 1: Naming a Color or Shape",
      pattern: "Color or shape + ini.",
      examples: [
        "Pula ini.",
        "Sirkulo ini.",
        "Kuwadrado ini.",
      ],
    },
    {
      label: "Pattern 2: Asking About a Color or Shape",
      pattern: "Ano nga + kolor / porma + ini?",
      examples: [
        "Ano nga kolor ini?",
        "Ano nga porma ini?",
      ],
    },
    {
      label: "Pattern 3: Describing an Object",
      pattern: "Gutiay an + Object.",
      examples: [
        "Gutiay an libro.",
        "Gutiay an bag.",
      ],
    },
  ],
  sentences: [
    {
      text: "Ano nga kolor ini?",
      meaning: "What color is this?",
      pronunciation: "A-no nga ko-LOR I-ni?",
    },
    {
      text: "Pula ini.",
      meaning: "This is red.",
      pronunciation: "PU-la I-ni",
    },
    {
      text: "Asul an langit.",
      meaning: "The sky is blue.",
      pronunciation: "A-sul an LA-ngit",
    },
    {
      text: "Berde an banwa.",
      meaning: "The grass is green.",
      pronunciation: "BER-de an BAN-wa",
    },
    {
      text: "Dilaw an bulak.",
      meaning: "The flower is yellow.",
      pronunciation: "di-LAW an BU-lak",
    },
    {
      text: "Ano nga porma ini?",
      meaning: "What shape is this?",
      pronunciation: "A-no nga POR-ma I-ni?",
    },
    {
      text: "Sirkulo ini.",
      meaning: "This is a circle.",
      pronunciation: "sir-KU-lo I-ni",
    },
    {
      text: "Kuwadrado ini.",
      meaning: "This is a square.",
      pronunciation: "kwa-dra-DO I-ni",
    },
    {
      text: "Lingin an bola.",
      meaning: "The ball is round.",
      pronunciation: "LI-ngin an BO-la",
    },
    {
      text: "Itom an bag.",
      meaning: "The bag is black.",
      pronunciation: "I-tom an BAG",
    },
    {
      text: "Puti an akon baro.",
      meaning: "My shirt is white.",
      pronunciation: "PU-ti an A-kon BA-ro",
    },
    {
      text: "Gutiay an libro.",
      meaning: "The book is small.",
      pronunciation: "gu-TI-ay an LIB-ro",
    },
    {
      text: "Puti an papel.",
      meaning: "The paper is white.",
    },
    {
      text: "Berde an dahon.",
      meaning: "The leaf is green.",
    },
    {
      text: "Trayanggulo ini.",
      meaning: "This is a triangle.",
    },
    {
      text: "Pula an bola.",
      meaning: "The ball is red.",
    },
    {
      text: "Asul an libro.",
      meaning: "The book is blue.",
    },
    {
      text: "Puti an silya.",
      meaning: "The chair is white.",
    },
    {
      text: "Dako an lamisa.",
      meaning: "The table is big.",
    },
    {
      text: "Gutiay an bag.",
      meaning: "The bag is small.",
    },
    {
      text: "Mga libro",
      meaning: "Books",
    },
    {
      text: "Mga bola",
      meaning: "Balls",
    },
    {
      text: "Mga bulak",
      meaning: "Flowers",
    },
    {
      text: "Mga silya",
      meaning: "Chairs",
    },
    {
      text: "Pula an mga bola.",
      meaning: "The balls are red.",
    },
  ],
  conversations: [
    {
      title: "Conversation 1: Asking About Colors",
      lines: [
        {
          speaker: "Ana",
          text: "Ano nga kolor ini?",
          translation: "What color is this?",
        },
        {
          speaker: "Ben",
          text: "Pula ini.",
          translation: "This is red.",
        },
        {
          speaker: "Ana",
          text: "Ngan ini?",
          translation: "And this one?",
        },
        {
          speaker: "Ben",
          text: "Asul ini.",
          translation: "This is blue.",
        },
        {
          speaker: "Ana",
          text: "Salamat!",
          translation: "Thank you!",
        },
      ],
      situation: "Ana and Ben: Asking About Colors.",
    },
    {
      title: "Conversation 2: Identifying Shapes",
      lines: [
        {
          speaker: "Mia",
          text: "Ano nga porma ini?",
          translation: "What shape is this?",
        },
        {
          speaker: "Carlo",
          text: "Sirkulo ini.",
          translation: "This is a circle.",
        },
        {
          speaker: "Mia",
          text: "Ngan ini nga usa?",
          translation: "And this one?",
        },
        {
          speaker: "Carlo",
          text: "Trayanggulo ini.",
          translation: "This is a triangle.",
        },
        {
          speaker: "Mia",
          text: "Nasasabtan ko na.",
          translation: "I understand now.",
        },
      ],
      situation: "Mia and Carlo: Identifying Shapes.",
    },
    {
      title: "Conversation 3: Describing Objects",
      lines: [
        {
          speaker: "Liza",
          text: "Ano an kolor han imo bag?",
          translation: "What is the color of your bag?",
        },
        {
          speaker: "Mark",
          text: "Itom an akon bag.",
          translation: "My bag is black.",
        },
        {
          speaker: "Liza",
          text: "Dako ba an imo bag?",
          translation: "Is your bag big?",
        },
        {
          speaker: "Mark",
          text: "Diri, gutiay la.",
          translation: "No, it is small.",
        },
        {
          speaker: "Liza",
          text: "Maupay!",
          translation: "Nice!",
        },
      ],
      situation: "Liza and Mark: Describing Objects.",
    },
  ],
  savedLanguageNotes: [
    {
      title: "A. Identifying Colors",
      body: [
        "Colors are used to describe the appearance of objects, clothing, food, and things around us.",
      ],
      examples: [
        {
          text: "Pula",
          meaning: "Red",
        },
        {
          text: "Asul",
          meaning: "Blue",
        },
        {
          text: "Dilaw",
          meaning: "Yellow",
        },
        {
          text: "Berde",
          meaning: "Green",
        },
        {
          text: "Itom",
          meaning: "Black",
        },
        {
          text: "Puti",
          meaning: "White",
        },
      ],
    },
    {
      title: "A. Identifying Colors",
      body: [
        "To ask about an object's color, use:",
      ],
      examples: [
        {
          text: "Ano nga kolor ini?",
          meaning: "What color is this?",
        },
      ],
    },
    {
      title: "A. Identifying Colors",
      body: [
        "You can answer by naming the color:",
      ],
      examples: [
        {
          text: "Pula ini.",
          meaning: "This is red.",
        },
      ],
    },
    {
      title: "A. Identifying Colors",
      body: [
        "Other examples:",
      ],
      examples: [
        {
          text: "Itom an bag.",
          meaning: "The bag is black.",
        },
        {
          text: "Puti an papel.",
          meaning: "The paper is white.",
        },
        {
          text: "Berde an dahon.",
          meaning: "The leaf is green.",
        },
      ],
    },
    {
      title: "B. Identifying Shapes",
      body: [
        "Shapes help us describe the form or outline of objects.",
      ],
      examples: [
        {
          text: "Sirkulo",
          meaning: "Circle",
        },
        {
          text: "Kuwadrado",
          meaning: "Square",
        },
        {
          text: "Rektanggulo",
          meaning: "Rectangle",
        },
        {
          text: "Trayanggulo",
          meaning: "Triangle",
        },
        {
          text: "Ovalo",
          meaning: "Oval",
        },
      ],
    },
    {
      title: "B. Identifying Shapes",
      body: [
        "To ask about the shape of an object, use:",
      ],
      examples: [
        {
          text: "Ano nga porma ini?",
          meaning: "What shape is this?",
        },
        {
          text: "Sirkulo ini.",
          meaning: "This is a circle.",
        },
        {
          text: "Trayanggulo ini.",
          meaning: "This is a triangle.",
        },
        {
          text: "Kuwadrado ini.",
          meaning: "This is a square.",
        },
      ],
    },
    {
      title: "C. Describing Objects",
      body: [
        "You can combine colors and object names to describe things around you.",
      ],
      examples: [
        {
          text: "Pula an bola.",
          meaning: "The ball is red.",
        },
        {
          text: "Asul an libro.",
          meaning: "The book is blue.",
        },
        {
          text: "Puti an silya.",
          meaning: "The chair is white.",
        },
        {
          text: "Dako an lamisa.",
          meaning: "The table is big.",
        },
        {
          text: "Gutiay an bag.",
          meaning: "The bag is small.",
        },
      ],
    },
    {
      title: "D. Describing More Than One Object",
      body: [
        "You can use mga before a noun to indicate that you are talking about more than one item.",
      ],
      examples: [
        {
          text: "Mga libro",
          meaning: "Books",
        },
        {
          text: "Mga bola",
          meaning: "Balls",
        },
        {
          text: "Mga bulak",
          meaning: "Flowers",
        },
        {
          text: "Mga silya",
          meaning: "Chairs",
        },
      ],
    },
    {
      title: "D. Describing More Than One Object",
      body: [
        "Example sentence:",
      ],
      examples: [
        {
          text: "Pula an mga bola.",
          meaning: "The balls are red.",
        },
      ],
    },
    {
      title: "A. Colors",
      body: [
        "Note: Some color names are shared with Filipino or Spanish-derived vocabulary. Local speakers may use alternative terms or pronunciations.",
      ],
    },
  ],
  inferredFields: [
    "situation",
    "usage",
    "example",
    "pattern",
    "fill-in",
    "arrange",
    "fourth option",
    "speaking phrase",
    "target pitch and mood",
    "respelling",
    "example situation",
    "pronunciation tip",
    "completion requirement",
  ],
};
