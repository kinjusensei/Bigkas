import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 7 — imported from "Lesson Plan.pdf", pages 744–757.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
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
  expressionGroups: [
    {
      title: "A. Colors",
      intro: [
        "Note: Some color names are shared with Filipino or Spanish-derived vocabulary. Local speakers may use alternative terms or pronunciations.",
      ],
      items: [
        {
          term: "Kolor",
          meaning: "Color",
          pronunciation: "ko-LOR",
        },
        {
          term: "Pula",
          meaning: "Red",
          pronunciation: "PU-la",
        },
        {
          term: "Asul",
          meaning: "Blue",
          pronunciation: "A-sul",
        },
        {
          term: "Dilaw",
          meaning: "Yellow",
          pronunciation: "di-LAW",
        },
        {
          term: "Berde",
          meaning: "Green",
          pronunciation: "BER-de",
        },
        {
          term: "Itom",
          meaning: "Black",
          pronunciation: "I-tom",
        },
        {
          term: "Puti",
          meaning: "White",
          pronunciation: "PU-ti",
        },
        {
          term: "Kayumanggi",
          meaning: "Brown",
          pronunciation: "ka-yu-MANG-gi",
        },
        {
          term: "Kahel",
          meaning: "Orange",
          pronunciation: "ka-HEL",
        },
        {
          term: "Rosas",
          meaning: "Pink",
          pronunciation: "RO-sas",
        },
        {
          term: "Lila",
          meaning: "Purple",
          pronunciation: "LI-la",
        },
        {
          term: "Abuhin",
          meaning: "Gray",
          pronunciation: "a-BU-hin",
        },
      ],
    },
    {
      title: "B. Basic Shapes",
      items: [
        {
          term: "Porma",
          meaning: "Shape",
          pronunciation: "POR-ma",
        },
        {
          term: "Sirkulo",
          meaning: "Circle",
          pronunciation: "sir-KU-lo",
        },
        {
          term: "Kuwadrado",
          meaning: "Square",
          pronunciation: "kwa-dra-DO",
        },
        {
          term: "Rektanggulo",
          meaning: "Rectangle",
          pronunciation: "rek-tang-GU-lo",
        },
        {
          term: "Trayanggulo",
          meaning: "Triangle",
          pronunciation: "tra-yang-GU-lo",
        },
        {
          term: "Ovalo",
          meaning: "Oval",
          pronunciation: "o-VA-lo",
        },
        {
          term: "Bitoon",
          meaning: "Star",
          pronunciation: "bi-TO-on",
        },
        {
          term: "Kasingkasing",
          meaning: "Heart",
          pronunciation: "ka-sing-KA-sing",
        },
        {
          term: "Linya",
          meaning: "Line",
          pronunciation: "LIN-ya",
        },
        {
          term: "Punto",
          meaning: "Point",
          pronunciation: "PUN-to",
        },
      ],
    },
    {
      title: "C. Common Objects and Describing Words",
      items: [
        {
          term: "Butang",
          meaning: "Object / Thing",
          pronunciation: "BU-tang",
        },
        {
          term: "Bola",
          meaning: "Ball",
          pronunciation: "BO-la",
        },
        {
          term: "Libro",
          meaning: "Book",
          pronunciation: "LIB-ro",
        },
        {
          term: "Bag",
          meaning: "Bag",
          pronunciation: "BAG",
        },
        {
          term: "Baro",
          meaning: "Shirt",
          pronunciation: "BA-ro",
        },
        {
          term: "Bulak",
          meaning: "Flower",
          pronunciation: "BU-lak",
        },
        {
          term: "Lamisa",
          meaning: "Table",
          pronunciation: "la-MI-sa",
        },
        {
          term: "Silya",
          meaning: "Chair",
          pronunciation: "SIL-ya",
        },
        {
          term: "Dako",
          meaning: "Big",
          pronunciation: "DA-ko",
        },
        {
          term: "Gutiay",
          meaning: "Small",
          pronunciation: "gu-TI-ay",
        },
        {
          term: "Bag-o",
          meaning: "New",
          pronunciation: "ba-GO",
        },
        {
          term: "Daan",
          meaning: "Old",
          pronunciation: "da-AN",
        },
      ],
    },
  ],
  languageNotes: [
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
  ],
  situationsTitle: "Useful Phrases and Sentences",
  situationGroups: [
    {
      title: "Useful Phrases and Sentences",
      items: [
        {
          term: "Ano nga kolor ini?",
          meaning: "What color is this?",
          pronunciation: "A-no nga ko-LOR I-ni?",
        },
        {
          term: "Pula ini.",
          meaning: "This is red.",
          pronunciation: "PU-la I-ni",
        },
        {
          term: "Asul an langit.",
          meaning: "The sky is blue.",
          pronunciation: "A-sul an LA-ngit",
        },
        {
          term: "Berde an banwa.",
          meaning: "The grass is green.",
          pronunciation: "BER-de an BAN-wa",
        },
        {
          term: "Dilaw an bulak.",
          meaning: "The flower is yellow.",
          pronunciation: "di-LAW an BU-lak",
        },
        {
          term: "Ano nga porma ini?",
          meaning: "What shape is this?",
          pronunciation: "A-no nga POR-ma I-ni?",
        },
        {
          term: "Sirkulo ini.",
          meaning: "This is a circle.",
          pronunciation: "sir-KU-lo I-ni",
        },
        {
          term: "Kuwadrado ini.",
          meaning: "This is a square.",
          pronunciation: "kwa-dra-DO I-ni",
        },
        {
          term: "Lingin an bola.",
          meaning: "The ball is round.",
          pronunciation: "LI-ngin an BO-la",
        },
        {
          term: "Itom an bag.",
          meaning: "The bag is black.",
          pronunciation: "I-tom an BAG",
        },
        {
          term: "Puti an akon baro.",
          meaning: "My shirt is white.",
          pronunciation: "PU-ti an A-kon BA-ro",
        },
        {
          term: "Gutiay an libro.",
          meaning: "The book is small.",
          pronunciation: "gu-TI-ay an LIB-ro",
        },
      ],
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
    },
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
  },
  expectedOutcomes: [
    "Identify common colors in Waray.",
    "Recognize basic geometric shapes.",
    "Ask and answer questions about colors and shapes.",
    "Describe familiar objects using simple Waray sentences.",
    "Use basic descriptive vocabulary in everyday communication.",
  ],
};
