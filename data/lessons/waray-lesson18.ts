import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 18 — imported from "Lesson Plan.pdf", pages 900–920.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
// Fields not given by the plan are INFERRED from this lesson's own content and
// listed in docs/waray-inferred-keys.md: usage, example, pattern, fill-in, arrange, speaking phrase, target pitch and mood, respelling, example situation, unit, pronunciation tip, badge description, completion requirement.
// The practice answers are INFERRED drafts, not from the PDF. See
// docs/waray-draft-answer-keys.md for each answer and how it was found.

export const warayLesson18: StructuredLesson = {
  lessonId: "waray_18",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 18,
  title: "Shopping and Buying",
  level: "Intermediate",
  estimatedDuration: "45–60 minutes",
  prerequisite: "Lesson 17 – Ordering Food",
  languageVariety: "Shopping vocabulary, asking about prices, describing products, quantities, and completing a purchase.",
  intro: [
    "Shopping is a common activity that requires learners to understand prices, ask questions about products, compare choices, and communicate with sellers.",
    "In this lesson, learners will practice useful Waray expressions for shopping in markets, stores, and other places where goods are sold. They will learn how to ask how much an item costs, inquire about available sizes and colors, express preferences, and complete a simple purchase.",
    "Imagine that you are visiting a local market to buy a shirt, some fruits, or other household necessities. You see something you want to purchase, but you need to ask the seller about its price, size, or availability.",
    "Knowing basic shopping expressions helps you communicate more confidently and understand everyday conversations.",
    "In Waray, some useful questions include:",
    "• Pira ini? – How much is this?",
    "• May iba pa kamo nga kolor? – Do you have other colors?",
    "• May mas dako pa hini? – Is there a bigger one?",
    "• Karuyag ko ini. – I want this.",
    "• Pwede ko ba ini paliton? – Can I buy this?",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify common Waray vocabulary related to shopping and buying.",
    "Ask and answer questions about product prices.",
    "Express preferences when choosing products.",
    "Describe basic product characteristics, such as color, size, and quantity.",
    "Use polite expressions when communicating with sellers.",
    "Participate in a simple shopping conversation in Waray.",
  ],
  assessment: {
    instructions: "Choose the correct answer for each question.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What does \"Pira ini?\" mean?",
        options: [
          {
            key: "A",
            text: "Where is this?",
          },
          {
            key: "B",
            text: "How much is this?",
          },
          {
            key: "C",
            text: "What is this?",
          },
          {
            key: "D",
            text: "Who owns this?",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "What is the Waray word for \"market\"?",
        options: [
          {
            key: "A",
            text: "Merkado",
          },
          {
            key: "B",
            text: "Presyo",
          },
          {
            key: "C",
            text: "Tindahan",
          },
          {
            key: "D",
            text: "Sukli",
          },
        ],
        answerKey: "A",
      },
      {
        id: 3,
        prompt: "What does \"Barato ini\" mean?",
        options: [
          {
            key: "A",
            text: "This is expensive.",
          },
          {
            key: "B",
            text: "This is new.",
          },
          {
            key: "C",
            text: "This is inexpensive.",
          },
          {
            key: "D",
            text: "This is big.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 4,
        prompt: "Which expression means \"I want to buy this\"?",
        options: [
          {
            key: "A",
            text: "Mahal ini.",
          },
          {
            key: "B",
            text: "Karuyag ko paliton ini.",
          },
          {
            key: "C",
            text: "Pira ini?",
          },
          {
            key: "D",
            text: "May iba pa kamo?",
          },
        ],
        answerKey: "B",
      },
      {
        id: 5,
        prompt: "What is the Waray word for \"change\" in a payment transaction?",
        options: [
          {
            key: "A",
            text: "Bayad",
          },
          {
            key: "B",
            text: "Kwarta",
          },
          {
            key: "C",
            text: "Presyo",
          },
          {
            key: "D",
            text: "Sukli",
          },
        ],
        answerKey: "D",
      },
      {
        id: 6,
        prompt: "Which expression asks whether a seller has other colors?",
        options: [
          {
            key: "A",
            text: "May iba pa kamo nga kolor?",
          },
          {
            key: "B",
            text: "Pira ini?",
          },
          {
            key: "C",
            text: "Mahal ba ini?",
          },
          {
            key: "D",
            text: "Karuyag mo ba ini?",
          },
        ],
        answerKey: "A",
      },
      {
        id: 7,
        prompt: "What does \"Duha an akon paliton\" mean?",
        options: [
          {
            key: "A",
            text: "I have two items.",
          },
          {
            key: "B",
            text: "I will buy two.",
          },
          {
            key: "C",
            text: "I want another one.",
          },
          {
            key: "D",
            text: "I paid two pesos.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 8,
        prompt: "What is the meaning of \"Mahal ini\"?",
        options: [
          {
            key: "A",
            text: "This is inexpensive.",
          },
          {
            key: "B",
            text: "This is small.",
          },
          {
            key: "C",
            text: "This is expensive.",
          },
          {
            key: "D",
            text: "This is new.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 9,
        prompt: "Which word means \"price\"?",
        options: [
          {
            key: "A",
            text: "Presyo",
          },
          {
            key: "B",
            text: "Sukli",
          },
          {
            key: "C",
            text: "Supot",
          },
          {
            key: "D",
            text: "Bayad",
          },
        ],
        answerKey: "A",
      },
      {
        id: 10,
        prompt: "Which expression is appropriate when telling a seller that you want a particular item?",
        options: [
          {
            key: "A",
            text: "Diri ako maaram.",
          },
          {
            key: "B",
            text: "Karuyag ko ini.",
          },
          {
            key: "C",
            text: "Hain an eskwelahan?",
          },
          {
            key: "D",
            text: "Ano an imo ngaran?",
          },
        ],
        answerKey: "B",
      },
    ],
  },
  extraActivities: [
    {
      title: "Translate into Waray",
      kind: "translate",
      instructions: "Translate each English sentence into Waray.",
      items: [
        "How much is this?",
        "I want to buy this.",
        "This is expensive.",
        "Do you have another color?",
        "I will buy two.",
      ],
    },
    {
      title: "Shopping Role-Play",
      kind: "roleplay",
      instructions: "Work with a partner. One learner will act as the seller, while the other will act as the customer.\nYour conversation must include:",
      items: [
        "A greeting.",
        "A question about the price.",
        "A question about product availability, size, or color.",
        "A statement expressing what you want to buy.",
        "A payment-related expression.",
        "A polite closing.",
      ],
      note: "Challenge: Complete the conversation using Waray without reading the sample dialogues.",
    },
  ],
  matchActivity: {
    title: "Vocabulary Matching",
    instructions: "Match each Waray word with its correct English meaning.",
    pairs: [
      {
        id: "1",
        term: "Merkado",
        answer: "Market",
      },
      {
        id: "2",
        term: "Sukli",
        answer: "Change",
      },
      {
        id: "3",
        term: "Barato",
        answer: "Inexpensive",
      },
      {
        id: "4",
        term: "Mahal",
        answer: "Expensive",
      },
      {
        id: "5",
        term: "Presyo",
        answer: "Price",
      },
    ],
  },
  choiceActivity: {
    title: "Complete the Shopping Expressions",
    instructions: "Fill in the blanks using the correct Waray word from the choices.",
    questions: [
      {
        id: 1,
        prompt: "______ ini? (How much is this?)",
        options: [
          {
            key: "A",
            text: "pira",
          },
          {
            key: "B",
            text: "karuyag",
          },
          {
            key: "C",
            text: "mahal",
          },
          {
            key: "D",
            text: "barato",
          },
          {
            key: "E",
            text: "paliton",
          },
        ],
        answerKey: "A",
      },
      {
        id: 2,
        prompt: "______ ko ini. (I want this.)",
        options: [
          {
            key: "A",
            text: "pira",
          },
          {
            key: "B",
            text: "karuyag",
          },
          {
            key: "C",
            text: "mahal",
          },
          {
            key: "D",
            text: "barato",
          },
          {
            key: "E",
            text: "paliton",
          },
        ],
        answerKey: "B",
      },
      {
        id: 3,
        prompt: "______ ini. (This is expensive.)",
        options: [
          {
            key: "A",
            text: "pira",
          },
          {
            key: "B",
            text: "karuyag",
          },
          {
            key: "C",
            text: "mahal",
          },
          {
            key: "D",
            text: "barato",
          },
          {
            key: "E",
            text: "paliton",
          },
        ],
        answerKey: "C",
      },
      {
        id: 4,
        prompt: "______ ini. (This is inexpensive.)",
        options: [
          {
            key: "A",
            text: "pira",
          },
          {
            key: "B",
            text: "karuyag",
          },
          {
            key: "C",
            text: "mahal",
          },
          {
            key: "D",
            text: "barato",
          },
          {
            key: "E",
            text: "paliton",
          },
        ],
        answerKey: "D",
      },
      {
        id: 5,
        prompt: "Karuyag ko ______ ini. (I want to buy this.)",
        options: [
          {
            key: "A",
            text: "pira",
          },
          {
            key: "B",
            text: "karuyag",
          },
          {
            key: "C",
            text: "mahal",
          },
          {
            key: "D",
            text: "barato",
          },
          {
            key: "E",
            text: "paliton",
          },
        ],
        answerKey: "E",
      },
    ],
  },
  answerKeysInferred: true,
  rewards: {
    items: [
      {
        section: "match",
        label: "Vocabulary Matching",
        xp: 10,
      },
      {
        section: "vocabulary",
        label: "Shopping Expressions",
        xp: 10,
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
      name: "Smart Shopper Badge",
      description: "Awarded after successfully completing Lesson 18.",
    },
    completionRequirement: "Obtain at least 70% in the lesson assessment. Learners may repeat the activities and assessment if they do not meet the requirement.",
  },
  expectedOutcomes: [
    "Before proceeding to the next lesson, learners should be able to:",
    "Recognize common shopping-related vocabulary.",
    "Ask how much an item costs.",
    "Express what they want to purchase.",
    "Ask about available colors and sizes.",
    "Describe whether an item is expensive or inexpensive.",
    "Participate in a simple shopping conversation.",
    "Achieve at least 70% in the lesson assessment.",
  ],
  fillInBlanks: {
    title: "Fill in the Blanks",
    instructions: "Complete each sentence using the appropriate Waray word.",
    items: [
      {
        id: "1",
        sentence: "___ ini nga butang?",
        hint: "How much is this item?",
        answer: "Pira",
        wordBank: [
          "Pira",
          "Supot",
          "Parabaligya",
          "Kwarta",
        ],
      },
      {
        id: "2",
        sentence: "Pira an ___ hini?",
        hint: "What is the price of this?",
        answer: "presyo",
        wordBank: [
          "presyo",
          "Pares",
          "Sabon",
          "Dako",
        ],
      },
      {
        id: "3",
        sentence: "Karuyag ko paliton ___.",
        hint: "I want to buy this.",
        answer: "ini",
        wordBank: [
          "Daan",
          "ini",
          "Dako",
          "Pamamalit",
        ],
      },
      {
        id: "4",
        sentence: "___ ko ini.",
        hint: "I want this one. / I want this. / I want this. / I want this.",
        answer: "Karuyag",
        wordBank: [
          "Utanon",
          "Hatag",
          "Karuyag",
          "Bugas",
        ],
      },
      {
        id: "5",
        sentence: "___ iba pa kamo?",
        hint: "Do you have another one?",
        answer: "May",
        wordBank: [
          "Bag-o",
          "Kan-on",
          "Prutas",
          "May",
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
          "butang",
          "Pira",
          "nga",
          "ini",
        ],
        answer: [
          "Pira",
          "ini",
          "nga",
          "butang",
        ],
        display: "Pira ini nga butang?",
      },
      {
        id: "2",
        words: [
          "presyo",
          "hini",
          "an",
          "Pira",
        ],
        answer: [
          "Pira",
          "an",
          "presyo",
          "hini",
        ],
        display: "Pira an presyo hini?",
      },
      {
        id: "3",
        words: [
          "ko",
          "paliton",
          "Karuyag",
          "ini",
        ],
        answer: [
          "Karuyag",
          "ko",
          "paliton",
          "ini",
        ],
        display: "Karuyag ko paliton ini.",
      },
      {
        id: "4",
        words: [
          "ko",
          "Karuyag",
          "ini",
        ],
        answer: [
          "Karuyag",
          "ko",
          "ini",
        ],
        display: "Karuyag ko ini.",
      },
      {
        id: "5",
        words: [
          "May",
          "iba",
          "kamo",
          "pa",
        ],
        answer: [
          "May",
          "iba",
          "pa",
          "kamo",
        ],
        display: "May iba pa kamo?",
      },
    ],
  },
  speaking: {
    title: "Speaking Practice",
    instructions: "Read the following sentences aloud.",
    note: "Learners should listen to the model pronunciation before recording their own voice.",
    practiceLessonId: "waray_18",
    phrases: [
      {
        id: "1",
        text: "Pira ini?",
        respelling: "PEE-rah EE-nee",
        meaning: "How much is this?",
      },
      {
        id: "2",
        text: "May iba pa kamo?",
        respelling: "may ee-bah pah ka-mo",
        meaning: "Do you have another one?",
      },
      {
        id: "3",
        text: "Barato ini.",
        respelling: "ba-ra-to i-ni",
        meaning: "This is inexpensive.",
      },
      {
        id: "4",
        text: "Ini an akon bayad.",
        respelling: "i-ni an a-kon ba-yad",
        meaning: "Here is the payment. / This is my payment.",
      },
      {
        id: "5",
        text: "Pira an presyo hini nga sapatos?",
        respelling: "pi-ra an prehs-yoh hee-nee nga sa-pa-tos",
        meaning: "How much are these shoes?",
      },
      {
        id: "6",
        text: "Karuyag ko hin pula.",
        respelling: "ka-ru-yag ko hin pu-la",
        meaning: "I want a red one.",
      },
      {
        id: "7",
        text: "Bag-o ini.",
        respelling: "ba-go i-ni",
        meaning: "This is new.",
      },
    ],
  },
  exampleSituation: {
    description: "Imagine this situation from the lesson: Buying a Shirt.",
    lead: "You can begin by saying:",
    line: "Maupay nga aga.",
    translation: "Good morning.",
  },
  unit: "Practical Conversations",
  vocabularyIntro: "Learn the following words and expressions before proceeding to the activities.",
  pronunciationTip: "Read each syllable clearly. Avoid rushing through longer expressions.",
  selfIntroIntro: "Use these patterns and phrases from the lesson.",
  vocabulary: [
    {
      term: "Pamamalit",
      meaning: "Shopping",
      pronunciation: "pa-ma-ma-lit",
      usage: "From this lesson's word list: shopping and store vocabulary.",
    },
    {
      term: "Merkado",
      meaning: "Market",
      pronunciation: "mer-ka-do",
      usage: "From this lesson's word list: shopping and store vocabulary.",
    },
    {
      term: "Tindahan",
      meaning: "Store / Shop",
      pronunciation: "tin-da-han",
      usage: "From this lesson's word list: shopping and store vocabulary.",
    },
    {
      term: "Parabaligya",
      meaning: "Seller",
      pronunciation: "pa-ra-ba-lig-ya",
      usage: "From this lesson's word list: shopping and store vocabulary.",
    },
    {
      term: "Parapamalit",
      meaning: "Buyer",
      pronunciation: "pa-ra-pa-ma-lit",
      usage: "From this lesson's word list: shopping and store vocabulary.",
    },
    {
      term: "Produkto / Butang",
      meaning: "Product / Item",
      pronunciation: "pro-duk-to / bu-tang",
      usage: "From this lesson's word list: shopping and store vocabulary.",
      example: [
        {
          speaker: "",
          text: "Pira ini nga butang?",
          translation: "How much is this item?",
        },
      ],
    },
    {
      term: "Kwarta",
      meaning: "Money",
      pronunciation: "kwar-ta",
      usage: "From this lesson's word list: shopping and store vocabulary.",
    },
    {
      term: "Presyo",
      meaning: "Price",
      pronunciation: "pres-yo",
      usage: "From this lesson's word list: shopping and store vocabulary.",
      example: [
        {
          speaker: "",
          text: "Pira an presyo hini?",
          translation: "What is the price of this?",
        },
      ],
    },
    {
      term: "Bayad",
      meaning: "Payment",
      pronunciation: "ba-yad",
      usage: "From this lesson's word list: shopping and store vocabulary.",
      example: [
        {
          speaker: "A",
          text: "Sige.",
          translation: "All right.",
        },
        {
          speaker: "B",
          text: "Ini an akon bayad.",
          translation: "Here is my payment.",
        },
      ],
    },
    {
      term: "Sukli",
      meaning: "Change (money)",
      pronunciation: "suk-li",
      usage: "From this lesson's word list: shopping and store vocabulary.",
      example: [
        {
          speaker: "",
          text: "Iyo na an sukli.",
          translation: "Keep the change.",
        },
      ],
    },
    {
      term: "Resibo",
      meaning: "Receipt",
      pronunciation: "re-si-bo",
      usage: "From this lesson's word list: shopping and store vocabulary.",
    },
    {
      term: "Supot",
      meaning: "Shopping bag",
      pronunciation: "su-pot",
      usage: "From this lesson's word list: shopping and store vocabulary.",
    },
    {
      term: "Bado / Baro",
      meaning: "Clothes",
      pronunciation: "ba-do / ba-ro",
      usage: "From this lesson's word list: products and goods.",
      example: [
        {
          speaker: "A",
          text: "Maupay nga aga. Ano an imo kinahanglan?",
          translation: "Good morning. What do you need?",
        },
        {
          speaker: "B",
          text: "Pira ini nga bado?",
          translation: "How much is this shirt?",
        },
      ],
    },
    {
      term: "T-shirt / Baro",
      meaning: "Shirt",
      pronunciation: "ti-shert / ba-ro",
      usage: "From this lesson's word list: products and goods.",
    },
    {
      term: "Pantalon",
      meaning: "Pants",
      pronunciation: "pan-ta-lon",
      usage: "From this lesson's word list: products and goods.",
    },
    {
      term: "Sapatos",
      meaning: "Shoes",
      pronunciation: "sa-pa-tos",
      usage: "From this lesson's word list: products and goods.",
      example: [
        {
          speaker: "",
          text: "Pira an presyo hini nga sapatos?",
          translation: "How much are these shoes?",
        },
      ],
    },
    {
      term: "Tsinelas",
      meaning: "Slippers",
      pronunciation: "tsi-ne-las",
      usage: "From this lesson's word list: products and goods.",
    },
    {
      term: "Bag",
      meaning: "Bag",
      pronunciation: "bag",
      usage: "From this lesson's word list: products and goods.",
      example: [
        {
          speaker: "A",
          text: "Pira ini nga bag?",
          translation: "How much is this bag?",
        },
        {
          speaker: "B",
          text: "Tulo ka gatos pesos.",
          translation: "Three hundred pesos.",
        },
      ],
    },
    {
      term: "Libro",
      meaning: "Book",
      pronunciation: "lib-ro",
      usage: "From this lesson's word list: products and goods.",
      example: [
        {
          speaker: "",
          text: "Pira ini nga libro?",
          translation: "How much is this book?",
        },
      ],
    },
    {
      term: "Bugas",
      meaning: "Rice",
      pronunciation: "bu-gas",
      usage: "From this lesson's word list: products and goods.",
      example: [
        {
          speaker: "",
          text: "Pira an usa ka kilo nga bugas?",
          translation: "How much is one kilo of rice?",
        },
      ],
    },
    {
      term: "Kan-on",
      meaning: "Cooked rice",
      pronunciation: "kan-on",
      usage: "From this lesson's word list: products and goods.",
    },
    {
      term: "Isda",
      meaning: "Fish",
      pronunciation: "is-da",
      usage: "From this lesson's word list: products and goods.",
    },
    {
      term: "Utanon",
      meaning: "Vegetables",
      pronunciation: "u-ta-non",
      usage: "From this lesson's word list: products and goods.",
    },
    {
      term: "Prutas",
      meaning: "Fruits",
      pronunciation: "pru-tas",
      usage: "From this lesson's word list: products and goods.",
    },
    {
      term: "Sabon",
      meaning: "Soap",
      pronunciation: "sa-bon",
      usage: "From this lesson's word list: products and goods.",
    },
    {
      term: "Tubig",
      meaning: "Water",
      pronunciation: "tu-big",
      usage: "From this lesson's word list: products and goods.",
    },
    {
      term: "Barato",
      meaning: "Cheap / Inexpensive",
      pronunciation: "ba-ra-to",
      usage: "From this lesson's word list: price, quantity, and product descriptions.",
      example: [
        {
          speaker: "A",
          text: "Duha ka gatos ngan singkwenta pesos.",
          translation: "Two hundred and fifty pesos.",
        },
        {
          speaker: "B",
          text: "Mas barato ito.",
          translation: "That one is less expensive.",
        },
      ],
    },
    {
      term: "Mahal",
      meaning: "Expensive",
      pronunciation: "ma-hal",
      usage: "From this lesson's word list: price, quantity, and product descriptions.",
      example: [
        {
          speaker: "",
          text: "Mahal ini.",
          translation: "This is expensive.",
        },
      ],
    },
    {
      term: "Bag-o",
      meaning: "New",
      pronunciation: "ba-go",
      usage: "From this lesson's word list: price, quantity, and product descriptions.",
      example: [
        {
          speaker: "",
          text: "Karuyag ko hin bag-o nga sapatos.",
          translation: "I want new shoes.",
        },
      ],
    },
    {
      term: "Daan",
      meaning: "Old",
      pronunciation: "da-an",
      usage: "From this lesson's word list: price, quantity, and product descriptions.",
      example: [
        {
          speaker: "",
          text: "Daan ito.",
          translation: "That is old.",
        },
      ],
    },
    {
      term: "Dako",
      meaning: "Big",
      pronunciation: "da-ko",
      usage: "From this lesson's word list: price, quantity, and product descriptions.",
      example: [
        {
          speaker: "A",
          text: "Mas barato ito.",
          translation: "That one is less expensive.",
        },
        {
          speaker: "B",
          text: "Oo, pero mas dako ini.",
          translation: "Yes, but this one is bigger.",
        },
      ],
    },
    {
      term: "Gutiay",
      meaning: "Small",
      pronunciation: "gu-ti-ay",
      usage: "From this lesson's word list: price, quantity, and product descriptions.",
      example: [
        {
          speaker: "",
          text: "May mas gutiay pa hini?",
          translation: "Do you have a smaller one? / Is there a smaller one?",
        },
      ],
    },
    {
      term: "Hilaba",
      meaning: "Long",
      pronunciation: "hi-la-ba",
      usage: "From this lesson's word list: price, quantity, and product descriptions.",
    },
    {
      term: "Halipot",
      meaning: "Short",
      pronunciation: "ha-li-pot",
      usage: "From this lesson's word list: price, quantity, and product descriptions.",
    },
    {
      term: "Damo",
      meaning: "Many / Much",
      pronunciation: "da-mo",
      usage: "From this lesson's word list: price, quantity, and product descriptions.",
    },
    {
      term: "Pipira",
      meaning: "Few / A little",
      pronunciation: "pi-pi-ra",
      usage: "From this lesson's word list: price, quantity, and product descriptions.",
    },
    {
      term: "Usa ka piraso",
      meaning: "One piece",
      pronunciation: "u-sa ka pi-ra-so",
      usage: "From this lesson's word list: price, quantity, and product descriptions.",
    },
    {
      term: "Usa ka kilo",
      meaning: "One kilo",
      pronunciation: "u-sa ka ki-lo",
      usage: "From this lesson's word list: price, quantity, and product descriptions.",
      example: [
        {
          speaker: "A",
          text: "Maupay nga aga. Ano an imo papaliton?",
          translation: "Good morning. What would you like to buy?",
        },
        {
          speaker: "B",
          text: "Pira an usa ka kilo nga mangga?",
          translation: "How much is one kilo of mangoes?",
        },
      ],
    },
    {
      term: "Kalahati nga kilo",
      meaning: "Half kilo",
      pronunciation: "ka-la-ha-ti nga ki-lo",
      usage: "From this lesson's word list: price, quantity, and product descriptions.",
    },
    {
      term: "Pares",
      meaning: "Pair",
      pronunciation: "pa-res",
      usage: "From this lesson's word list: price, quantity, and product descriptions.",
    },
    {
      term: "Pira?",
      meaning: "How much?",
      pronunciation: "pi-ra",
      usage: "From this lesson's word list: useful shopping words.",
      example: [
        {
          speaker: "A",
          text: "Pira ini nga bado?",
          translation: "How much is this shirt?",
        },
        {
          speaker: "B",
          text: "Dos syentos pesos ini.",
          translation: "This is two hundred pesos.",
        },
      ],
    },
    {
      term: "Ini",
      meaning: "This",
      pronunciation: "i-ni",
      usage: "From this lesson's word list: useful shopping words.",
      example: [
        {
          speaker: "A",
          text: "Dos syentos pesos ini.",
          translation: "This is two hundred pesos.",
        },
        {
          speaker: "B",
          text: "May iba pa kamo nga kolor?",
          translation: "Do you have other colors?",
        },
      ],
    },
    {
      term: "Ito",
      meaning: "That",
      pronunciation: "i-to",
      usage: "From this lesson's word list: useful shopping words.",
      example: [
        {
          speaker: "A",
          text: "Tulo ka gatos pesos.",
          translation: "Three hundred pesos.",
        },
        {
          speaker: "B",
          text: "Pira man ito?",
          translation: "How much is that one?",
        },
      ],
    },
    {
      term: "Dinhi",
      meaning: "Here",
      pronunciation: "din-hi",
      usage: "From this lesson's word list: useful shopping words.",
    },
    {
      term: "Didto",
      meaning: "There",
      pronunciation: "did-to",
      usage: "From this lesson's word list: useful shopping words.",
    },
    {
      term: "Karuyag",
      meaning: "Want",
      pronunciation: "ka-ru-yag",
      usage: "From this lesson's word list: useful shopping words.",
      example: [
        {
          speaker: "A",
          text: "Oo, may asul ngan pula pa kami.",
          translation: "Yes, we still have blue and red.",
        },
        {
          speaker: "B",
          text: "Karuyag ko an asul.",
          translation: "I want the blue one.",
        },
      ],
    },
    {
      term: "Palit",
      meaning: "Buy",
      pronunciation: "pa-lit",
      usage: "From this lesson's word list: useful shopping words.",
    },
    {
      term: "Baligya",
      meaning: "Sell",
      pronunciation: "ba-lig-ya",
      usage: "From this lesson's word list: useful shopping words.",
    },
    {
      term: "Pagpili",
      meaning: "Choose",
      pronunciation: "pag-pi-li",
      usage: "From this lesson's word list: useful shopping words.",
    },
    {
      term: "Hatag",
      meaning: "Give",
      pronunciation: "ha-tag",
      usage: "From this lesson's word list: useful shopping words.",
    },
    {
      term: "May",
      meaning: "Have / There is",
      pronunciation: "may",
      usage: "From this lesson's word list: useful shopping words.",
      example: [
        {
          speaker: "A",
          text: "May iba pa kamo nga kolor?",
          translation: "Do you have other colors?",
        },
        {
          speaker: "B",
          text: "Oo, may asul ngan pula pa kami.",
          translation: "Yes, we still have blue and red.",
        },
      ],
    },
    {
      term: "Waray",
      meaning: "No / None",
      pronunciation: "wa-ray",
      usage: "From this lesson's word list: useful shopping words.",
    },
  ],
  greetings: [
    {
      term: "Pira?",
      meaning: "How much?",
      pronunciation: "pi-ra",
      usage: "From this lesson's word list: useful shopping words.",
      example: [
        {
          speaker: "A",
          text: "Pira ini nga bado?",
          translation: "How much is this shirt?",
        },
        {
          speaker: "B",
          text: "Dos syentos pesos ini.",
          translation: "This is two hundred pesos.",
        },
      ],
    },
    {
      term: "Ini",
      meaning: "This",
      pronunciation: "i-ni",
      usage: "From this lesson's word list: useful shopping words.",
      example: [
        {
          speaker: "A",
          text: "Dos syentos pesos ini.",
          translation: "This is two hundred pesos.",
        },
        {
          speaker: "B",
          text: "May iba pa kamo nga kolor?",
          translation: "Do you have other colors?",
        },
      ],
    },
    {
      term: "Ito",
      meaning: "That",
      pronunciation: "i-to",
      usage: "From this lesson's word list: useful shopping words.",
      example: [
        {
          speaker: "A",
          text: "Tulo ka gatos pesos.",
          translation: "Three hundred pesos.",
        },
        {
          speaker: "B",
          text: "Pira man ito?",
          translation: "How much is that one?",
        },
      ],
    },
    {
      term: "Dinhi",
      meaning: "Here",
      pronunciation: "din-hi",
      usage: "From this lesson's word list: useful shopping words.",
    },
    {
      term: "Didto",
      meaning: "There",
      pronunciation: "did-to",
      usage: "From this lesson's word list: useful shopping words.",
    },
    {
      term: "Karuyag",
      meaning: "Want",
      pronunciation: "ka-ru-yag",
      usage: "From this lesson's word list: useful shopping words.",
      example: [
        {
          speaker: "A",
          text: "Oo, may asul ngan pula pa kami.",
          translation: "Yes, we still have blue and red.",
        },
        {
          speaker: "B",
          text: "Karuyag ko an asul.",
          translation: "I want the blue one.",
        },
      ],
    },
    {
      term: "Palit",
      meaning: "Buy",
      pronunciation: "pa-lit",
      usage: "From this lesson's word list: useful shopping words.",
    },
    {
      term: "Baligya",
      meaning: "Sell",
      pronunciation: "ba-lig-ya",
      usage: "From this lesson's word list: useful shopping words.",
    },
    {
      term: "Pagpili",
      meaning: "Choose",
      pronunciation: "pag-pi-li",
      usage: "From this lesson's word list: useful shopping words.",
    },
    {
      term: "Hatag",
      meaning: "Give",
      pronunciation: "ha-tag",
      usage: "From this lesson's word list: useful shopping words.",
    },
    {
      term: "May",
      meaning: "Have / There is",
      pronunciation: "may",
      usage: "From this lesson's word list: useful shopping words.",
      example: [
        {
          speaker: "A",
          text: "May iba pa kamo nga kolor?",
          translation: "Do you have other colors?",
        },
        {
          speaker: "B",
          text: "Oo, may asul ngan pula pa kami.",
          translation: "Yes, we still have blue and red.",
        },
      ],
    },
    {
      term: "Waray",
      meaning: "No / None",
      pronunciation: "wa-ray",
      usage: "From this lesson's word list: useful shopping words.",
    },
  ],
  patterns: [
    {
      label: "Pattern 1: Asking the Price",
      pattern: "Pira ini nga + Item?",
      examples: [
        "Pira ini nga libro?",
        "Pira ini nga bado?",
        "Pira ini nga bag?",
      ],
    },
    {
      label: "Pattern 2: Saying What You Want",
      pattern: "Karuyag ko hin + Choice.",
      examples: [
        "Karuyag ko hin duha.",
        "Karuyag ko hin pula.",
        "Karuyag ko hin gutiay.",
      ],
    },
    {
      label: "Pattern 3: Describing an Item",
      pattern: "Description + ini.",
      examples: [
        "Mahal ini.",
        "Barato ini.",
        "Bag-o ini.",
      ],
    },
  ],
  sentences: [
    {
      text: "Pira ini?",
      meaning: "How much is this?",
    },
    {
      text: "Pira ini nga butang?",
      meaning: "How much is this item?",
    },
    {
      text: "Pira an presyo hini?",
      meaning: "What is the price of this?",
    },
    {
      text: "Karuyag ko paliton ini.",
      meaning: "I want to buy this.",
    },
    {
      text: "Karuyag ko ini.",
      meaning: "I want this one. / I want this. / I want this. / I want this.",
    },
    {
      text: "May iba pa kamo?",
      meaning: "Do you have another one?",
    },
    {
      text: "May iba pa kamo nga kolor?",
      meaning: "Do you have another color? / Do you have other colors? / Do you have other colors?",
    },
    {
      text: "May mas dako pa hini?",
      meaning: "Do you have a bigger one? / Is there a bigger one?",
    },
    {
      text: "May mas gutiay pa hini?",
      meaning: "Do you have a smaller one? / Is there a smaller one?",
    },
    {
      text: "Mahal ini.",
      meaning: "This is expensive.",
    },
    {
      text: "Barato ini.",
      meaning: "This is inexpensive.",
    },
    {
      text: "Duha an akon paliton.",
      meaning: "I will buy two.",
    },
    {
      text: "Usa ka kilo an akon paliton.",
      meaning: "I will buy one kilo.",
    },
    {
      text: "Pwede ko ba ini paliton?",
      meaning: "Can I buy this?",
    },
    {
      text: "Alayon, ihatag ha akon ini.",
      meaning: "Please give me this one.",
    },
    {
      text: "Ini an akon bayad.",
      meaning: "Here is the payment. / This is my payment.",
    },
    {
      text: "Iyo na an sukli.",
      meaning: "Keep the change.",
    },
    {
      text: "Salamat.",
      meaning: "Thank you.",
    },
    {
      text: "Pira an presyo hini nga bado?",
      meaning: "How much is this shirt?",
    },
    {
      text: "Karuyag ko hin duha.",
      meaning: "I want two.",
    },
    {
      text: "Pira ini nga libro?",
      meaning: "How much is this book?",
    },
    {
      text: "Pira an presyo hini nga sapatos?",
      meaning: "How much are these shoes?",
    },
    {
      text: "Pira an usa ka kilo nga bugas?",
      meaning: "How much is one kilo of rice?",
    },
    {
      text: "Karuyag ko hin bag-o nga sapatos.",
      meaning: "I want new shoes.",
    },
    {
      text: "Usa an akon paliton.",
      meaning: "I will buy one.",
    },
    {
      text: "May iba pa kamo nga sugad hini?",
      meaning: "Do you have another one like this?",
    },
    {
      text: "Karuyag ko hin pula.",
      meaning: "I want a red one.",
    },
    {
      text: "Karuyag ko hin mas dako.",
      meaning: "I want a bigger one.",
    },
    {
      text: "Karuyag ko hin gutiay.",
      meaning: "I want a small one.",
    },
    {
      text: "Mas mahal ini.",
      meaning: "This is more expensive.",
    },
    {
      text: "Mas barato ito.",
      meaning: "That is less expensive.",
    },
    {
      text: "Bag-o ini.",
      meaning: "This is new.",
    },
    {
      text: "Daan ito.",
      meaning: "That is old.",
    },
    {
      text: "Dako ini.",
      meaning: "This is big.",
    },
    {
      text: "Gutiay ito.",
      meaning: "That is small.",
    },
    {
      text: "Paliton ko ini.",
      meaning: "I will buy this.",
    },
    {
      text: "Ihatag ha akon an sukli, alayon.",
      meaning: "Please give me my change.",
    },
  ],
  conversations: [
    {
      title: "Conversation 1: Buying a Shirt",
      situation: "A customer visits a clothing store and asks about the price of a shirt.",
      lines: [
        {
          speaker: "Customer",
          text: "Maupay nga aga.",
          translation: "Good morning.",
        },
        {
          speaker: "Seller",
          text: "Maupay nga aga. Ano an imo kinahanglan?",
          translation: "Good morning. What do you need?",
        },
        {
          speaker: "Customer",
          text: "Pira ini nga bado?",
          translation: "How much is this shirt?",
        },
        {
          speaker: "Seller",
          text: "Dos syentos pesos ini.",
          translation: "This is two hundred pesos.",
        },
        {
          speaker: "Customer",
          text: "May iba pa kamo nga kolor?",
          translation: "Do you have other colors?",
        },
        {
          speaker: "Seller",
          text: "Oo, may asul ngan pula pa kami.",
          translation: "Yes, we still have blue and red.",
        },
        {
          speaker: "Customer",
          text: "Karuyag ko an asul.",
          translation: "I want the blue one.",
        },
        {
          speaker: "Seller",
          text: "Sige.",
          translation: "All right.",
        },
        {
          speaker: "Customer",
          text: "Ini an akon bayad.",
          translation: "Here is my payment.",
        },
        {
          speaker: "Seller",
          text: "Salamat.",
          translation: "Thank you.",
        },
      ],
    },
    {
      title: "Conversation 2: Buying Fruits at the Market",
      situation: "A customer wants to buy mangoes and bananas at a local market.",
      lines: [
        {
          speaker: "Customer",
          text: "Maupay nga aga.",
          translation: "Good morning.",
        },
        {
          speaker: "Seller",
          text: "Maupay nga aga. Ano an imo papaliton?",
          translation: "Good morning. What would you like to buy?",
        },
        {
          speaker: "Customer",
          text: "Pira an usa ka kilo nga mangga?",
          translation: "How much is one kilo of mangoes?",
        },
        {
          speaker: "Seller",
          text: "Usa ka gatos pesos an kilo.",
          translation: "One hundred pesos per kilo.",
        },
        {
          speaker: "Customer",
          text: "Sige, usa ka kilo la.",
          translation: "All right, just one kilo.",
        },
        {
          speaker: "Seller",
          text: "May iba ka pa nga papaliton?",
          translation: "Do you have anything else to buy?",
        },
        {
          speaker: "Customer",
          text: "Oo, karuyag ko liwat hin saging.",
          translation: "Yes, I also want bananas.",
        },
        {
          speaker: "Seller",
          text: "Pira nga saging?",
          translation: "How many bananas?",
        },
        {
          speaker: "Customer",
          text: "Lima la, alayon.",
          translation: "Just five, please.",
        },
        {
          speaker: "Seller",
          text: "Sige.",
          translation: "All right.",
        },
        {
          speaker: "Customer",
          text: "Salamat.",
          translation: "Thank you.",
        },
      ],
    },
    {
      title: "Conversation 3: Comparing Products",
      situation: "A customer is choosing between two bags.",
      lines: [
        {
          speaker: "Customer",
          text: "Pira ini nga bag?",
          translation: "How much is this bag?",
        },
        {
          speaker: "Seller",
          text: "Tulo ka gatos pesos.",
          translation: "Three hundred pesos.",
        },
        {
          speaker: "Customer",
          text: "Pira man ito?",
          translation: "How much is that one?",
        },
        {
          speaker: "Seller",
          text: "Duha ka gatos ngan singkwenta pesos.",
          translation: "Two hundred and fifty pesos.",
        },
        {
          speaker: "Customer",
          text: "Mas barato ito.",
          translation: "That one is less expensive.",
        },
        {
          speaker: "Seller",
          text: "Oo, pero mas dako ini.",
          translation: "Yes, but this one is bigger.",
        },
        {
          speaker: "Customer",
          text: "Karuyag ko an mas dako.",
          translation: "I want the bigger one.",
        },
        {
          speaker: "Seller",
          text: "Sige, ini an imo bag.",
          translation: "All right, here is your bag.",
        },
        {
          speaker: "Customer",
          text: "Salamat.",
          translation: "Thank you.",
        },
      ],
      instructions: "The number expressions in these dialogues are examples. Learners should also recognize that prices and number forms may be expressed differently by individual speakers.",
    },
  ],
  languageNotes: [
    {
      title: "A. Asking About Prices",
      body: [
        "One of the most important things to know when shopping is how to ask about prices.",
        "You can use:",
        "• Pira ini?",
        "• Pira an presyo hini?",
        "The word pira is used when asking about quantity or amount. In shopping conversations, it is commonly used to ask how much something costs.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Pira ini nga libro?",
            right: "How much is this book?",
          },
          {
            left: "Pira an presyo hini nga sapatos?",
            right: "How much are these shoes?",
          },
          {
            left: "Pira an usa ka kilo nga bugas?",
            right: "How much is one kilo of rice?",
          },
        ],
      },
    },
    {
      title: "B. Expressing What You Want to Buy",
      body: [
        "Use Karuyag ko when expressing what you want.",
      ],
      examples: [
        {
          text: "Karuyag ko ini.",
          meaning: "I want this.",
        },
        {
          text: "Karuyag ko paliton ini.",
          meaning: "I want to buy this.",
        },
        {
          text: "Karuyag ko hin bag-o nga sapatos.",
          meaning: "I want new shoes.",
        },
      ],
    },
    {
      title: "B. Expressing What You Want to Buy",
      body: [
        "You may also mention the quantity of the items you want.",
      ],
      examples: [
        {
          text: "Usa an akon paliton.",
          meaning: "I will buy one.",
        },
        {
          text: "Duha an akon paliton.",
          meaning: "I will buy two.",
        },
        {
          text: "Usa ka kilo an akon paliton.",
          meaning: "I will buy one kilo.",
        },
      ],
    },
    {
      title: "C. Asking About Sizes and Colors",
      body: [
        "When buying clothes, shoes, or other products, you may need to ask about available sizes and colors.",
        "Useful expressions include:",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "May iba pa kamo nga kolor?",
            right: "Do you have other colors?",
          },
          {
            left: "May mas dako pa hini?",
            right: "Is there a bigger one?",
          },
          {
            left: "May mas gutiay pa hini?",
            right: "Is there a smaller one?",
          },
          {
            left: "May iba pa kamo nga sugad hini?",
            right: "Do you have another one like this?",
          },
        ],
      },
    },
    {
      title: "C. Asking About Sizes and Colors",
      body: [
        "You can also describe what you prefer:",
      ],
      examples: [
        {
          text: "Karuyag ko hin pula.",
          meaning: "I want a red one.",
        },
        {
          text: "Karuyag ko hin mas dako.",
          meaning: "I want a bigger one.",
        },
        {
          text: "Karuyag ko hin gutiay.",
          meaning: "I want a small one.",
        },
      ],
    },
    {
      title: "D. Comparing Prices and Products",
      body: [
        "Sometimes, buyers compare products before deciding what to purchase.",
        "You can use the following expressions:",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Mahal ini.",
            right: "This is expensive.",
          },
          {
            left: "Barato ini.",
            right: "This is inexpensive.",
          },
          {
            left: "Mas mahal ini.",
            right: "This is more expensive.",
          },
          {
            left: "Mas barato ito.",
            right: "That is less expensive.",
          },
          {
            left: "Bag-o ini.",
            right: "This is new.",
          },
          {
            left: "Daan ito.",
            right: "That is old.",
          },
          {
            left: "Dako ini.",
            right: "This is big.",
          },
          {
            left: "Gutiay ito.",
            right: "That is small.",
          },
        ],
      },
    },
    {
      title: "D. Comparing Prices and Products",
      body: [
        "Remember that comparing products does not only involve their prices. Buyers may also consider their size, quality, appearance, and usefulness.",
      ],
    },
    {
      title: "E. Completing a Purchase",
      body: [
        "After choosing a product, you need to communicate your decision and pay the seller.",
        "Useful expressions:",
      ],
      examples: [
        {
          text: "Karuyag ko ini.",
          meaning: "I want this.",
        },
        {
          text: "Paliton ko ini.",
          meaning: "I will buy this.",
        },
        {
          text: "Ini an akon bayad.",
          meaning: "This is my payment.",
        },
        {
          text: "Ihatag ha akon an sukli, alayon.",
          meaning: "Please give me my change.",
        },
        {
          text: "Salamat.",
          meaning: "Thank you.",
        },
      ],
    },
    {
      title: "E. Completing a Purchase",
      body: [
        "A simple shopping conversation usually follows this order:",
        "• Greet the seller.",
        "• Ask about the product.",
        "• Ask about its price.",
        "• Choose the item.",
        "• Tell the seller how many you want.",
        "• Pay for the purchase.",
        "• Receive your change, if applicable.",
        "• Thank the seller.",
      ],
    },
    {
      title: "D. Useful Shopping Words",
      body: [
        "Note: Some shopping terms are borrowed words commonly encountered in everyday speech. Local word choices may differ between speakers and communities.",
      ],
    },
    {
      title: "USEFUL PHRASES AND SENTENCES",
      body: [
        "The following expressions can help learners communicate when shopping.",
      ],
    },
    {
      title: "Important Expression Patterns",
      body: [
        "• Asking about prices",
        "Use Pira ini? or Pira an presyo hini? when asking how much an item costs.",
        "Examples:",
        "• Expressing preferences",
        "Use Karuyag ko... to express what you want.",
        "Examples:",
        "• Asking about available choices",
        "Use May... pa kamo? to ask whether the seller has more options or additional items.",
        "Examples:",
        "• Describing prices",
        "Use these expressions when comparing prices:",
      ],
    },
  ],
  inferredFields: [
    "usage",
    "example",
    "pattern",
    "fill-in",
    "arrange",
    "speaking phrase",
    "target pitch and mood",
    "respelling",
    "example situation",
    "unit",
    "pronunciation tip",
    "badge description",
    "completion requirement",
  ],
};
