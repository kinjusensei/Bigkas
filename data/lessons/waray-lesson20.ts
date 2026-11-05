import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 20 — imported from "Lesson Plan.pdf", pages 942–964.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
// Fields not given by the plan are INFERRED from this lesson's own content and
// listed in docs/waray-inferred-keys.md: usage, example, pattern, fill-in, arrange, speaking phrase, target pitch and mood, respelling, example situation, unit, pronunciation tip, badge description, completion requirement.
// The practice answers are INFERRED drafts, not from the PDF. See
// docs/waray-draft-answer-keys.md for each answer and how it was found.

export const warayLesson20: StructuredLesson = {
  lessonId: "waray_20",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 20,
  title: "Describing People, Places, and Things",
  level: "Intermediate",
  estimatedDuration: "45–60 minutes",
  prerequisite: "Lesson 19 – Talking About Daily Activities",
  languageVariety: "Descriptive vocabulary, adjectives, physical characteristics, personality traits, places, objects, and comparisons.",
  intro: [
    "Describing people, places, and things is an important part of everyday communication. People use descriptive words to explain what someone looks like, describe a location, identify an object's characteristics, or compare two different things.",
    "In this lesson, learners will develop their ability to describe people, places, and objects using common Waray vocabulary and expressions. They will also practice asking descriptive questions and constructing sentences that communicate details more clearly.",
    "Imagine that someone asks you to describe your best friend, your hometown, or your favorite object.",
    "You might explain that your friend is kind, your hometown is peaceful, or your favorite bag is small and colorful.",
    "In Waray, you can use descriptive words to communicate these ideas.",
    "Examples:",
    "• Buotan hiya. – He/She is kind.",
    "• Dako an balay. – The house is big.",
    "• Matahom an lugar. – The place is beautiful.",
    "• Gutiay ini nga libro. – This is a small book.",
    "• Mas dako ini kay han usa. – This is bigger than the other one.",
    "Learning these expressions will help you communicate more detailed information in everyday conversations.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify common Waray adjectives and descriptive expressions.",
    "Describe the physical appearance and personality of people.",
    "Describe familiar places and their characteristics.",
    "Identify and explain the characteristics of everyday objects.",
    "Compare two people, places, or things using simple descriptive expressions.",
    "Participate in conversations involving descriptions and comparisons.",
  ],
  assessment: {
    instructions: "Choose the correct answer for each question.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What does \"Buotan\" mean?",
        options: [
          {
            key: "A",
            text: "Beautiful",
          },
          {
            key: "B",
            text: "Kind",
          },
          {
            key: "C",
            text: "Expensive",
          },
          {
            key: "D",
            text: "Small",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "Which Waray word means \"big\"?",
        options: [
          {
            key: "A",
            text: "Gutiay",
          },
          {
            key: "B",
            text: "Dako",
          },
          {
            key: "C",
            text: "Halipot",
          },
          {
            key: "D",
            text: "Hilom",
          },
        ],
        answerKey: "B",
      },
      {
        id: 3,
        prompt: "What does \"Matahom an lugar\" mean?",
        options: [
          {
            key: "A",
            text: "The place is noisy.",
          },
          {
            key: "B",
            text: "The place is far.",
          },
          {
            key: "C",
            text: "The place is beautiful.",
          },
          {
            key: "D",
            text: "The place is crowded.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 4,
        prompt: "Which word means \"heavy\"?",
        options: [
          {
            key: "A",
            text: "Mabug-at",
          },
          {
            key: "B",
            text: "Magaan",
          },
          {
            key: "C",
            text: "Barato",
          },
          {
            key: "D",
            text: "Bag-o",
          },
        ],
        answerKey: "A",
      },
      {
        id: 5,
        prompt: "What does \"Mas dako ini\" mean?",
        options: [
          {
            key: "A",
            text: "This is smaller.",
          },
          {
            key: "B",
            text: "This is newer.",
          },
          {
            key: "C",
            text: "This is bigger.",
          },
          {
            key: "D",
            text: "This is more expensive.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 6,
        prompt: "Which word describes someone who is hardworking?",
        options: [
          {
            key: "A",
            text: "Hubya",
          },
          {
            key: "B",
            text: "Maduruto",
          },
          {
            key: "C",
            text: "Awawon",
          },
          {
            key: "D",
            text: "Hilom",
          },
        ],
        answerKey: "B",
      },
      {
        id: 7,
        prompt: "What does \"Hirani\" mean?",
        options: [
          {
            key: "A",
            text: "Far",
          },
          {
            key: "B",
            text: "Near",
          },
          {
            key: "C",
            text: "Wide",
          },
          {
            key: "D",
            text: "Narrow",
          },
        ],
        answerKey: "B",
      },
      {
        id: 8,
        prompt: "Which word means \"inexpensive\"?",
        options: [
          {
            key: "A",
            text: "Mahal",
          },
          {
            key: "B",
            text: "Daan",
          },
          {
            key: "C",
            text: "Barato",
          },
          {
            key: "D",
            text: "Mabug-at",
          },
        ],
        answerKey: "C",
      },
      {
        id: 9,
        prompt: "What does \"Magkaiba hira\" mean?",
        options: [
          {
            key: "A",
            text: "They are alike.",
          },
          {
            key: "B",
            text: "They are different.",
          },
          {
            key: "C",
            text: "They are friendly.",
          },
          {
            key: "D",
            text: "They are hardworking.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 10,
        prompt: "Which question asks \"What does this look like?\"",
        options: [
          {
            key: "A",
            text: "Pira ini?",
          },
          {
            key: "B",
            text: "Hain ka makadto?",
          },
          {
            key: "C",
            text: "Ano an hitsura hini?",
          },
          {
            key: "D",
            text: "Ano an imo ngaran?",
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
      instructions: "Translate each English sentence into Waray.",
      items: [
        "My friend is friendly.",
        "The house is big.",
        "This book is small.",
        "This bag is expensive.",
        "The place is beautiful.",
      ],
    },
    {
      title: "Describe a Person, Place, or Object",
      kind: "open",
      instructions: "Choose one person, one place, or one object. Write five sentences describing your chosen subject in Waray.\nYour description should include:",
      items: [
        "At least three descriptive words.",
        "At least one sentence about appearance or condition.",
        "At least one sentence about personality or usefulness, depending on your chosen subject.",
        "At least one comparison.",
      ],
    },
    {
      title: "Pair Description Challenge",
      kind: "open",
      instructions: "Work with a partner.",
      items: [
        "Learner A describes a person, place, or object without naming it.",
        "Learner B listens carefully and guesses what is being described.",
        "Switch roles after each round.",
        "Use Waray descriptive vocabulary as much as possible.",
      ],
      note: "Challenge: Give at least three descriptive clues before your partner makes a guess.",
    },
  ],
  matchActivity: {
    title: "Vocabulary Matching",
    instructions: "Match each Waray word with its correct English meaning.",
    pairs: [
      {
        id: "1",
        term: "Buotan",
        answer: "Kind",
      },
      {
        id: "2",
        term: "Matahom",
        answer: "Beautiful",
      },
      {
        id: "3",
        term: "Mahal",
        answer: "Expensive",
      },
      {
        id: "4",
        term: "Mabug-at",
        answer: "Heavy",
      },
      {
        id: "5",
        term: "Halapad",
        answer: "Wide",
      },
    ],
  },
  choiceActivity: {
    title: "Complete the Sentences",
    instructions: "Choose the correct word from the word bank to complete each sentence.",
    questions: [
      {
        id: 1,
        prompt: "______ hiya.",
        options: [
          {
            key: "A",
            text: "buotan",
          },
          {
            key: "B",
            text: "dako",
          },
          {
            key: "C",
            text: "matahom",
          },
          {
            key: "D",
            text: "mahal",
          },
          {
            key: "E",
            text: "limpyo",
          },
        ],
        answerKey: "A",
      },
      {
        id: 2,
        prompt: "______ an balay. (The house is big.)",
        options: [
          {
            key: "A",
            text: "buotan",
          },
          {
            key: "B",
            text: "dako",
          },
          {
            key: "C",
            text: "matahom",
          },
          {
            key: "D",
            text: "mahal",
          },
          {
            key: "E",
            text: "limpyo",
          },
        ],
        answerKey: "B",
      },
      {
        id: 3,
        prompt: "______ an lugar. (The place is beautiful.)",
        options: [
          {
            key: "A",
            text: "buotan",
          },
          {
            key: "B",
            text: "dako",
          },
          {
            key: "C",
            text: "matahom",
          },
          {
            key: "D",
            text: "mahal",
          },
          {
            key: "E",
            text: "limpyo",
          },
        ],
        answerKey: "C",
      },
      {
        id: 4,
        prompt: "______ ini nga bag. (This bag is expensive.)",
        options: [
          {
            key: "A",
            text: "buotan",
          },
          {
            key: "B",
            text: "dako",
          },
          {
            key: "C",
            text: "matahom",
          },
          {
            key: "D",
            text: "mahal",
          },
          {
            key: "E",
            text: "limpyo",
          },
        ],
        answerKey: "D",
      },
      {
        id: 5,
        prompt: "______ an eskwelahan. (The school is clean.)",
        options: [
          {
            key: "A",
            text: "buotan",
          },
          {
            key: "B",
            text: "dako",
          },
          {
            key: "C",
            text: "matahom",
          },
          {
            key: "D",
            text: "mahal",
          },
          {
            key: "E",
            text: "limpyo",
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
        section: "sentences",
        label: "Complete the Sentences + Practice Activities",
        xp: 25,
      },
      {
        section: "conversation",
        label: "Guided Conversation",
        xp: 10,
      },
      {
        section: "assessment",
        label: "Lesson Assessment",
        xp: 15,
      },
    ],
    total: 60,
    badge: {
      name: "Description Expert Badge",
      description: "Awarded after successfully completing Lesson 20.",
    },
    completionRequirement: "Obtain at least 70% in the lesson assessment. Learners may repeat the activities and assessment if they do not meet the requirement.",
  },
  expectedOutcomes: [
    "Before proceeding to the Advanced Level, learners should be able to:",
    "Recognize common descriptive vocabulary.",
    "Describe a person's appearance and personality.",
    "Describe familiar places.",
    "Explain the characteristics of everyday objects.",
    "Compare two people, places, or things.",
    "Ask and answer descriptive questions.",
    "Achieve at least 70% in the lesson assessment.",
    "Congratulations! You have completed the Intermediate Level (Lessons 11–20).",
    "You have practiced everyday conversations, asking for information, constructing sentences, ordering food, shopping, describing routines, and expressing descriptions.",
  ],
  fillInBlanks: {
    title: "Fill in the Blanks",
    instructions: "Complete each sentence using the appropriate Waray word.",
    items: [
      {
        id: "1",
        sentence: "___ an akon sangkay.",
        hint: "My friend is hardworking.",
        answer: "Maduruto",
        wordBank: [
          "Hirayo",
          "Maduruto",
          "Halipot",
          "Matinumanon",
        ],
      },
      {
        id: "2",
        sentence: "___ an akon bugto nga lalaki.",
        hint: "My brother is tall.",
        answer: "Hataas",
        wordBank: [
          "Maluya",
          "Hilom",
          "Hataas",
          "Matahom",
        ],
      },
      {
        id: "3",
        sentence: "___ pa an akon bugto nga babaye.",
        hint: "My sister is young.",
        answer: "Bata",
        wordBank: [
          "Makusog",
          "Matig-a",
          "Makolor",
          "Bata",
        ],
      },
      {
        id: "4",
        sentence: "___ an balay.",
        hint: "The house is big.",
        answer: "Dako",
        wordBank: [
          "Dako",
          "Mabug-at",
          "Matahom",
          "Mapailubon",
        ],
      },
      {
        id: "5",
        sentence: "___ an lugar.",
        hint: "The place is beautiful.",
        answer: "Matahom",
        wordBank: [
          "Matahom",
          "Makusog",
          "Mahigalaon",
          "Mapailubon",
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
          "sangkay",
          "akon",
          "an",
          "Maduruto",
        ],
        answer: [
          "Maduruto",
          "an",
          "akon",
          "sangkay",
        ],
        display: "Maduruto an akon sangkay.",
      },
      {
        id: "2",
        words: [
          "nga",
          "an",
          "akon",
          "bugto",
          "Hataas",
          "lalaki",
        ],
        answer: [
          "Hataas",
          "an",
          "akon",
          "bugto",
          "nga",
          "lalaki",
        ],
        display: "Hataas an akon bugto nga lalaki.",
      },
      {
        id: "3",
        words: [
          "bugto",
          "akon",
          "pa",
          "an",
          "Bata",
          "babaye",
          "nga",
        ],
        answer: [
          "Bata",
          "pa",
          "an",
          "akon",
          "bugto",
          "nga",
          "babaye",
        ],
        display: "Bata pa an akon bugto nga babaye.",
      },
      {
        id: "4",
        words: [
          "Dako",
          "balay",
          "an",
        ],
        answer: [
          "Dako",
          "an",
          "balay",
        ],
        display: "Dako an balay.",
      },
      {
        id: "5",
        words: [
          "Matahom",
          "lugar",
          "an",
        ],
        answer: [
          "Matahom",
          "an",
          "lugar",
        ],
        display: "Matahom an lugar.",
      },
    ],
  },
  speaking: {
    title: "Speaking Practice",
    instructions: "Read the following sentences aloud.",
    note: "Learners should listen to the model pronunciation before recording their own voice.",
    practiceLessonId: "waray_20",
    phrases: [
      {
        id: "1",
        text: "Buotan hiya.",
        respelling: "boo-OH-tahn HEE-yah",
        meaning: "He is kind. / He/She is kind.",
      },
      {
        id: "2",
        text: "Matawo an merkado.",
        respelling: "ma-ta-wo an mehr-kah-doh",
        meaning: "The market is crowded.",
      },
      {
        id: "3",
        text: "Magkaiba hira.",
        respelling: "mag-ka-i-ba hi-ra",
        meaning: "They are different.",
      },
      {
        id: "4",
        text: "Maisog hiya.",
        respelling: "ma-i-sog hee-yah",
        meaning: "He/She is brave.",
      },
      {
        id: "5",
        text: "Hirayo an merkado.",
        respelling: "hee-rah-yoh an mehr-kah-doh",
        meaning: "The market is far.",
      },
      {
        id: "6",
        text: "Magaan ini nga kahon.",
        respelling: "ma-ga-an i-ni nga ka-hon",
        meaning: "This box is light.",
      },
      {
        id: "7",
        text: "Pariho an ira kolor.",
        respelling: "pah-ree-hoh an ee-rah ko-lor",
        meaning: "Their colors are the same.",
      },
    ],
  },
  exampleSituation: {
    description: "Imagine this situation from the lesson: Describing a Friend.",
    lead: "You can begin by saying:",
    line: "Hin-o an imo bag-o nga sangkay?",
    translation: "Who is your new friend?",
  },
  unit: "Practical Conversations",
  vocabularyIntro: "Learn the following words and expressions before proceeding to the activities.",
  pronunciationTip: "Read each syllable clearly. Avoid rushing through longer expressions.",
  selfIntroIntro: "Use these patterns and phrases from the lesson.",
  vocabulary: [
    {
      term: "Hataas",
      meaning: "Tall",
      pronunciation: "ha-ta-as",
      usage: "From this lesson's word list: physical appearance.",
      example: [
        {
          speaker: "A",
          text: "Ano an iya hitsura?",
          translation: "What does he look like?",
        },
        {
          speaker: "B",
          text: "Hataas hiya ngan matahom an iya buhok.",
          translation: "He is tall and has beautiful hair.",
        },
      ],
    },
    {
      term: "Halipot",
      meaning: "Short (height)",
      pronunciation: "ha-li-pot",
      usage: "From this lesson's word list: physical appearance.",
    },
    {
      term: "Dako",
      meaning: "Big",
      pronunciation: "da-ko",
      usage: "From this lesson's word list: physical appearance.",
      example: [
        {
          speaker: "A",
          text: "Mas barato ini nga bag.",
          translation: "This bag is less expensive.",
        },
        {
          speaker: "B",
          text: "Hain man an mas dako?",
          translation: "Which one is bigger?",
        },
      ],
    },
    {
      term: "Gutiay",
      meaning: "Small",
      pronunciation: "gu-ti-ay",
      usage: "From this lesson's word list: physical appearance.",
      example: [
        {
          speaker: "",
          text: "Gutiay ini nga libro.",
          translation: "This book is small.",
        },
      ],
    },
    {
      term: "Matahom",
      meaning: "Beautiful / Handsome",
      pronunciation: "ma-ta-hom",
      usage: "From this lesson's word list: physical appearance.",
      example: [
        {
          speaker: "A",
          text: "Hataas hiya ngan matahom an iya buhok.",
          translation: "He is tall and has beautiful hair.",
        },
        {
          speaker: "B",
          text: "Ano man an iya batasan?",
          translation: "What is his personality like?",
        },
      ],
    },
    {
      term: "Matahom",
      meaning: "Pretty",
      pronunciation: "ma-ta-hom",
      usage: "From this lesson's word list: physical appearance.",
      example: [
        {
          speaker: "A",
          text: "Ano an hitsura hini nga lugar?",
          translation: "What is this place like?",
        },
        {
          speaker: "B",
          text: "Matahom ngan mahimyang an amon baryo.",
          translation: "Our village is beautiful and peaceful.",
        },
      ],
    },
    {
      term: "Bata",
      meaning: "Young",
      pronunciation: "ba-ta",
      usage: "From this lesson's word list: physical appearance.",
      example: [
        {
          speaker: "",
          text: "Bata pa an akon bugto nga babaye.",
          translation: "My sister is young.",
        },
      ],
    },
    {
      term: "Lagas",
      meaning: "Old / Elderly",
      pronunciation: "la-gas",
      usage: "From this lesson's word list: physical appearance.",
    },
    {
      term: "Payat",
      meaning: "Thin",
      pronunciation: "pa-yat",
      usage: "From this lesson's word list: physical appearance.",
    },
    {
      term: "Tambok",
      meaning: "Fat / Plump",
      pronunciation: "tam-bok",
      usage: "From this lesson's word list: physical appearance.",
    },
    {
      term: "Makusog",
      meaning: "Strong",
      pronunciation: "ma-ku-sog",
      usage: "From this lesson's word list: physical appearance.",
    },
    {
      term: "Maluya",
      meaning: "Weak",
      pronunciation: "ma-lu-ya",
      usage: "From this lesson's word list: physical appearance.",
    },
    {
      term: "Hilaba",
      meaning: "Long",
      pronunciation: "hi-la-ba",
      usage: "From this lesson's word list: physical appearance.",
    },
    {
      term: "Kulot",
      meaning: "Curly",
      pronunciation: "ku-lot",
      usage: "From this lesson's word list: physical appearance.",
    },
    {
      term: "Tul-id",
      meaning: "Straight",
      pronunciation: "tu-lid",
      usage: "From this lesson's word list: physical appearance.",
    },
    {
      term: "Buotan",
      meaning: "Kind",
      pronunciation: "bu-o-tan",
      usage: "From this lesson's word list: personality and character.",
      example: [
        {
          speaker: "A",
          text: "Ano man an iya batasan?",
          translation: "What is his personality like?",
        },
        {
          speaker: "B",
          text: "Buotan ngan mahigalaon hiya.",
          translation: "He is kind and friendly.",
        },
      ],
    },
    {
      term: "Mahigalaon",
      meaning: "Friendly",
      pronunciation: "ma-hi-ga-la-on",
      usage: "From this lesson's word list: personality and character.",
      example: [
        {
          speaker: "A",
          text: "Buotan ngan mahigalaon hiya.",
          translation: "He is kind and friendly.",
        },
        {
          speaker: "B",
          text: "Maupay ito nga klase hin sangkay.",
          translation: "That is a good kind of friend.",
        },
      ],
    },
    {
      term: "Matinabangon",
      meaning: "Helpful",
      pronunciation: "ma-ti-na-ba-ngon",
      usage: "From this lesson's word list: personality and character.",
    },
    {
      term: "Maduruto",
      meaning: "Hardworking",
      pronunciation: "ma-du-ru-to",
      usage: "From this lesson's word list: personality and character.",
      example: [
        {
          speaker: "A",
          text: "Maupay ito nga klase hin sangkay.",
          translation: "That is a good kind of friend.",
        },
        {
          speaker: "B",
          text: "Oo, maduruto liwat hiya ha pag-adal.",
          translation: "Yes, he is also hardworking in his studies.",
        },
      ],
    },
    {
      term: "Maaram",
      meaning: "Intelligent",
      pronunciation: "ma-a-ram",
      usage: "From this lesson's word list: personality and character.",
    },
    {
      term: "Mapailubon",
      meaning: "Patient",
      pronunciation: "ma-pa-i-lu-bon",
      usage: "From this lesson's word list: personality and character.",
    },
    {
      term: "Matinumanon",
      meaning: "Honest",
      pronunciation: "ma-ti-nu-ma-non",
      usage: "From this lesson's word list: personality and character.",
    },
    {
      term: "Maalwan",
      meaning: "Generous",
      pronunciation: "ma-al-wan",
      usage: "From this lesson's word list: personality and character.",
    },
    {
      term: "Malipayon",
      meaning: "Cheerful",
      pronunciation: "ma-li-pa-yon",
      usage: "From this lesson's word list: personality and character.",
    },
    {
      term: "Hilom",
      meaning: "Quiet",
      pronunciation: "hi-lom",
      usage: "From this lesson's word list: personality and character.",
      example: [
        {
          speaker: "",
          text: "Hilom an baryo.",
          translation: "The village is quiet.",
        },
      ],
    },
    {
      term: "Awawon",
      meaning: "Shy",
      pronunciation: "a-wa-won",
      usage: "From this lesson's word list: personality and character.",
    },
    {
      term: "Maisog",
      meaning: "Brave",
      pronunciation: "ma-i-sog",
      usage: "From this lesson's word list: personality and character.",
      example: [
        {
          speaker: "",
          text: "Maisog hiya.",
          translation: "He/She is brave.",
        },
      ],
    },
    {
      term: "Mahinay",
      meaning: "Careful",
      pronunciation: "ma-hi-nay",
      usage: "From this lesson's word list: personality and character.",
    },
    {
      term: "Hubya",
      meaning: "Lazy",
      pronunciation: "hub-ya",
      usage: "From this lesson's word list: personality and character.",
    },
    {
      term: "Matahom",
      meaning: "Beautiful",
      pronunciation: "ma-ta-hom",
      usage: "From this lesson's word list: describing places.",
      example: [
        {
          speaker: "A",
          text: "Matahom ngan mahimyang an amon baryo.",
          translation: "Our village is beautiful and peaceful.",
        },
        {
          speaker: "B",
          text: "Damo ba an mga tawo dinhi?",
          translation: "Are there many people here?",
        },
      ],
    },
    {
      term: "Mahimyang",
      meaning: "Peaceful",
      pronunciation: "ma-him-yang",
      usage: "From this lesson's word list: describing places.",
      example: [
        {
          speaker: "A",
          text: "Ano an hitsura hini nga lugar?",
          translation: "What is this place like?",
        },
        {
          speaker: "B",
          text: "Matahom ngan mahimyang an amon baryo.",
          translation: "Our village is beautiful and peaceful.",
        },
      ],
    },
    {
      term: "Limpyo",
      meaning: "Clean",
      pronunciation: "lim-pyo",
      usage: "From this lesson's word list: describing places.",
      example: [
        {
          speaker: "",
          text: "Limpyo an sulod-klase.",
          translation: "The classroom is clean.",
        },
      ],
    },
    {
      term: "Mahugaw",
      meaning: "Dirty",
      pronunciation: "ma-hu-gaw",
      usage: "From this lesson's word list: describing places.",
    },
    {
      term: "Matawo",
      meaning: "Crowded",
      pronunciation: "ma-ta-wo",
      usage: "From this lesson's word list: describing places.",
      example: [
        {
          speaker: "",
          text: "Matawo an merkado.",
          translation: "The market is crowded.",
        },
      ],
    },
    {
      term: "Samok",
      meaning: "Noisy",
      pronunciation: "sa-mok",
      usage: "From this lesson's word list: describing places.",
      example: [
        {
          speaker: "",
          text: "Samok an kalsada.",
          translation: "The street is noisy or chaotic.",
        },
      ],
    },
    {
      term: "Halapad",
      meaning: "Wide",
      pronunciation: "ha-la-pad",
      usage: "From this lesson's word list: describing places.",
      example: [
        {
          speaker: "",
          text: "Halapad an dalan.",
          translation: "The road is wide.",
        },
      ],
    },
    {
      term: "Halipot",
      meaning: "Narrow",
      pronunciation: "ha-li-pot",
      usage: "From this lesson's word list: describing places.",
    },
    {
      term: "Hirayo",
      meaning: "Far",
      pronunciation: "hi-ra-yo",
      usage: "From this lesson's word list: describing places.",
      example: [
        {
          speaker: "",
          text: "Hirayo an merkado.",
          translation: "The market is far.",
        },
      ],
    },
    {
      term: "Hirani",
      meaning: "Near",
      pronunciation: "hi-ra-ni",
      usage: "From this lesson's word list: describing places.",
      example: [
        {
          speaker: "A",
          text: "Diri man. Diri duro kadamo an mga tawo.",
          translation: "Not really. There are not too many people.",
        },
        {
          speaker: "B",
          text: "May baybayon ba hirani?",
          translation: "Is there a beach nearby?",
        },
      ],
    },
    {
      term: "Mapaso",
      meaning: "Hot",
      pronunciation: "ma-pa-so",
      usage: "From this lesson's word list: describing places.",
    },
    {
      term: "Matugnaw",
      meaning: "Cold",
      pronunciation: "ma-tug-naw",
      usage: "From this lesson's word list: describing places.",
    },
    {
      term: "Berde",
      meaning: "Green",
      pronunciation: "ber-de",
      usage: "From this lesson's word list: describing places.",
    },
    {
      term: "Mabuhi",
      meaning: "Lively",
      pronunciation: "ma-bu-hi",
      usage: "From this lesson's word list: describing places.",
    },
    {
      term: "Bag-o",
      meaning: "New",
      pronunciation: "ba-go",
      usage: "From this lesson's word list: describing objects.",
      example: [
        {
          speaker: "A",
          text: "Hin-o an imo bag-o nga sangkay?",
          translation: "Who is your new friend?",
        },
        {
          speaker: "B",
          text: "Hi Mark.",
          translation: "Mark.",
        },
      ],
    },
    {
      term: "Daan",
      meaning: "Old",
      pronunciation: "da-an",
      usage: "From this lesson's word list: describing objects.",
      example: [
        {
          speaker: "",
          text: "Daan ito nga silya.",
          translation: "That chair is old.",
        },
      ],
    },
    {
      term: "Mahal",
      meaning: "Expensive",
      pronunciation: "ma-hal",
      usage: "From this lesson's word list: describing objects.",
      example: [
        {
          speaker: "",
          text: "Mahal ini nga bag.",
          translation: "This bag is expensive.",
        },
      ],
    },
    {
      term: "Barato",
      meaning: "Inexpensive",
      pronunciation: "ba-ra-to",
      usage: "From this lesson's word list: describing objects.",
      example: [
        {
          speaker: "A",
          text: "Hain an mas barato hini nga duha?",
          translation: "Which of these two is less expensive?",
        },
        {
          speaker: "B",
          text: "Mas barato ini nga bag.",
          translation: "This bag is less expensive.",
        },
      ],
    },
    {
      term: "Mabug-at",
      meaning: "Heavy",
      pronunciation: "ma-bug-at",
      usage: "From this lesson's word list: describing objects.",
      example: [
        {
          speaker: "",
          text: "Mabug-at ini nga bag.",
          translation: "This bag is heavy.",
        },
      ],
    },
    {
      term: "Magaan",
      meaning: "Light (weight)",
      pronunciation: "ma-ga-an",
      usage: "From this lesson's word list: describing objects.",
      example: [
        {
          speaker: "",
          text: "Magaan ini nga kahon.",
          translation: "This box is light.",
        },
      ],
    },
    {
      term: "Malumo",
      meaning: "Soft",
      pronunciation: "ma-lu-mo",
      usage: "From this lesson's word list: describing objects.",
    },
    {
      term: "Matig-a",
      meaning: "Hard",
      pronunciation: "ma-tig-a",
      usage: "From this lesson's word list: describing objects.",
    },
    {
      term: "Hamis",
      meaning: "Smooth",
      pronunciation: "ha-mis",
      usage: "From this lesson's word list: describing objects.",
    },
    {
      term: "Magaspang",
      meaning: "Rough",
      pronunciation: "ma-gas-pang",
      usage: "From this lesson's word list: describing objects.",
    },
    {
      term: "Guba",
      meaning: "Broken",
      pronunciation: "gu-ba",
      usage: "From this lesson's word list: describing objects.",
      example: [
        {
          speaker: "",
          text: "Guba an lingkoran.",
          translation: "The chair is broken.",
        },
      ],
    },
    {
      term: "Mapulsanon",
      meaning: "Useful",
      pronunciation: "ma-pul-sa-non",
      usage: "From this lesson's word list: describing objects.",
    },
    {
      term: "Makolor",
      meaning: "Colorful",
      pronunciation: "ma-ko-lor",
      usage: "From this lesson's word list: describing objects.",
    },
    {
      term: "Lingin",
      meaning: "Round",
      pronunciation: "li-ngin",
      usage: "From this lesson's word list: describing objects.",
    },
    {
      term: "Ano nga klase?",
      meaning: "What kind?",
      pronunciation: "a-no nga kla-se",
      usage: "A descriptive question words and expression.",
      example: [
        {
          speaker: "",
          text: "Ano nga klase nga lugar ini?",
          translation: "What kind of place is this?",
        },
      ],
    },
    {
      term: "Hain?",
      meaning: "Which one?",
      pronunciation: "ha-in",
      usage: "A descriptive question words and expression.",
      example: [
        {
          speaker: "A",
          text: "Hain man an mas dako?",
          translation: "Which one is bigger?",
        },
        {
          speaker: "B",
          text: "Mas dako ito nga bag.",
          translation: "That bag is bigger.",
        },
      ],
    },
    {
      term: "Ano an hitsura hini?",
      meaning: "What does it look like?",
      pronunciation: "a-no an hit-su-ra hi-ni",
      usage: "A descriptive question words and expression.",
      example: [
        {
          speaker: "A",
          text: "Ano an hitsura hini nga lugar?",
          translation: "What is this place like?",
        },
        {
          speaker: "B",
          text: "Matahom ngan mahimyang an amon baryo.",
          translation: "Our village is beautiful and peaceful.",
        },
      ],
    },
    {
      term: "Gaano kadako?",
      meaning: "How big?",
      pronunciation: "ga-a-no ka-da-ko",
      usage: "A descriptive question words and expression.",
    },
    {
      term: "Gaano kagutiay?",
      meaning: "How small?",
      pronunciation: "ga-a-no ka-gu-ti-ay",
      usage: "A descriptive question words and expression.",
    },
    {
      term: "Sugad",
      meaning: "Like / Similar",
      pronunciation: "su-gad",
      usage: "A descriptive question words and expression.",
    },
    {
      term: "Iba",
      meaning: "Different",
      pronunciation: "i-ba",
      usage: "A descriptive question words and expression.",
      example: [
        {
          speaker: "A",
          text: "Ano an kaibahan nira?",
          translation: "What is the difference between them?",
        },
        {
          speaker: "B",
          text: "Iba an ira kadako ngan kolor.",
          translation: "Their sizes and colors are different.",
        },
      ],
    },
    {
      term: "Pariho",
      meaning: "Same",
      pronunciation: "pa-ri-ho",
      usage: "A descriptive question words and expression.",
      example: [
        {
          speaker: "",
          text: "Pariho hira.",
          translation: "They are similar. / They are alike.",
        },
      ],
    },
    {
      term: "Mas",
      meaning: "More",
      pronunciation: "mas",
      usage: "A descriptive question words and expression.",
      example: [
        {
          speaker: "A",
          text: "Mas dako ito nga bag.",
          translation: "That bag is bigger.",
        },
        {
          speaker: "B",
          text: "Ano an kaibahan nira?",
          translation: "What is the difference between them?",
        },
      ],
    },
    {
      term: "Gud / Kaayo",
      meaning: "Very",
      pronunciation: "gud / ka-a-yo",
      usage: "A descriptive question words and expression.",
      example: [
        {
          speaker: "A",
          text: "Oo, hirani la an baybayon.",
          translation: "Yes, the beach is nearby.",
        },
        {
          speaker: "B",
          text: "Maupay gud ini nga lugar.",
          translation: "This is really a nice place.",
        },
      ],
    },
  ],
  greetings: [
    {
      term: "Matahom",
      meaning: "Beautiful",
      pronunciation: "ma-ta-hom",
      usage: "From this lesson's word list: describing places.",
      example: [
        {
          speaker: "A",
          text: "Matahom ngan mahimyang an amon baryo.",
          translation: "Our village is beautiful and peaceful.",
        },
        {
          speaker: "B",
          text: "Damo ba an mga tawo dinhi?",
          translation: "Are there many people here?",
        },
      ],
    },
    {
      term: "Mahimyang",
      meaning: "Peaceful",
      pronunciation: "ma-him-yang",
      usage: "From this lesson's word list: describing places.",
      example: [
        {
          speaker: "A",
          text: "Ano an hitsura hini nga lugar?",
          translation: "What is this place like?",
        },
        {
          speaker: "B",
          text: "Matahom ngan mahimyang an amon baryo.",
          translation: "Our village is beautiful and peaceful.",
        },
      ],
    },
    {
      term: "Limpyo",
      meaning: "Clean",
      pronunciation: "lim-pyo",
      usage: "From this lesson's word list: describing places.",
      example: [
        {
          speaker: "",
          text: "Limpyo an sulod-klase.",
          translation: "The classroom is clean.",
        },
      ],
    },
    {
      term: "Mahugaw",
      meaning: "Dirty",
      pronunciation: "ma-hu-gaw",
      usage: "From this lesson's word list: describing places.",
    },
    {
      term: "Matawo",
      meaning: "Crowded",
      pronunciation: "ma-ta-wo",
      usage: "From this lesson's word list: describing places.",
      example: [
        {
          speaker: "",
          text: "Matawo an merkado.",
          translation: "The market is crowded.",
        },
      ],
    },
    {
      term: "Samok",
      meaning: "Noisy",
      pronunciation: "sa-mok",
      usage: "From this lesson's word list: describing places.",
      example: [
        {
          speaker: "",
          text: "Samok an kalsada.",
          translation: "The street is noisy or chaotic.",
        },
      ],
    },
    {
      term: "Halapad",
      meaning: "Wide",
      pronunciation: "ha-la-pad",
      usage: "From this lesson's word list: describing places.",
      example: [
        {
          speaker: "",
          text: "Halapad an dalan.",
          translation: "The road is wide.",
        },
      ],
    },
    {
      term: "Halipot",
      meaning: "Narrow",
      pronunciation: "ha-li-pot",
      usage: "From this lesson's word list: describing places.",
    },
    {
      term: "Hirayo",
      meaning: "Far",
      pronunciation: "hi-ra-yo",
      usage: "From this lesson's word list: describing places.",
      example: [
        {
          speaker: "",
          text: "Hirayo an merkado.",
          translation: "The market is far.",
        },
      ],
    },
    {
      term: "Hirani",
      meaning: "Near",
      pronunciation: "hi-ra-ni",
      usage: "From this lesson's word list: describing places.",
      example: [
        {
          speaker: "A",
          text: "Diri man. Diri duro kadamo an mga tawo.",
          translation: "Not really. There are not too many people.",
        },
        {
          speaker: "B",
          text: "May baybayon ba hirani?",
          translation: "Is there a beach nearby?",
        },
      ],
    },
    {
      term: "Mapaso",
      meaning: "Hot",
      pronunciation: "ma-pa-so",
      usage: "From this lesson's word list: describing places.",
    },
    {
      term: "Matugnaw",
      meaning: "Cold",
      pronunciation: "ma-tug-naw",
      usage: "From this lesson's word list: describing places.",
    },
    {
      term: "Berde",
      meaning: "Green",
      pronunciation: "ber-de",
      usage: "From this lesson's word list: describing places.",
    },
    {
      term: "Mabuhi",
      meaning: "Lively",
      pronunciation: "ma-bu-hi",
      usage: "From this lesson's word list: describing places.",
    },
    {
      term: "Bag-o",
      meaning: "New",
      pronunciation: "ba-go",
      usage: "From this lesson's word list: describing objects.",
      example: [
        {
          speaker: "A",
          text: "Hin-o an imo bag-o nga sangkay?",
          translation: "Who is your new friend?",
        },
        {
          speaker: "B",
          text: "Hi Mark.",
          translation: "Mark.",
        },
      ],
    },
    {
      term: "Daan",
      meaning: "Old",
      pronunciation: "da-an",
      usage: "From this lesson's word list: describing objects.",
      example: [
        {
          speaker: "",
          text: "Daan ito nga silya.",
          translation: "That chair is old.",
        },
      ],
    },
    {
      term: "Mahal",
      meaning: "Expensive",
      pronunciation: "ma-hal",
      usage: "From this lesson's word list: describing objects.",
      example: [
        {
          speaker: "",
          text: "Mahal ini nga bag.",
          translation: "This bag is expensive.",
        },
      ],
    },
    {
      term: "Barato",
      meaning: "Inexpensive",
      pronunciation: "ba-ra-to",
      usage: "From this lesson's word list: describing objects.",
      example: [
        {
          speaker: "A",
          text: "Hain an mas barato hini nga duha?",
          translation: "Which of these two is less expensive?",
        },
        {
          speaker: "B",
          text: "Mas barato ini nga bag.",
          translation: "This bag is less expensive.",
        },
      ],
    },
    {
      term: "Mabug-at",
      meaning: "Heavy",
      pronunciation: "ma-bug-at",
      usage: "From this lesson's word list: describing objects.",
      example: [
        {
          speaker: "",
          text: "Mabug-at ini nga bag.",
          translation: "This bag is heavy.",
        },
      ],
    },
    {
      term: "Magaan",
      meaning: "Light (weight)",
      pronunciation: "ma-ga-an",
      usage: "From this lesson's word list: describing objects.",
      example: [
        {
          speaker: "",
          text: "Magaan ini nga kahon.",
          translation: "This box is light.",
        },
      ],
    },
    {
      term: "Malumo",
      meaning: "Soft",
      pronunciation: "ma-lu-mo",
      usage: "From this lesson's word list: describing objects.",
    },
    {
      term: "Matig-a",
      meaning: "Hard",
      pronunciation: "ma-tig-a",
      usage: "From this lesson's word list: describing objects.",
    },
    {
      term: "Hamis",
      meaning: "Smooth",
      pronunciation: "ha-mis",
      usage: "From this lesson's word list: describing objects.",
    },
    {
      term: "Magaspang",
      meaning: "Rough",
      pronunciation: "ma-gas-pang",
      usage: "From this lesson's word list: describing objects.",
    },
    {
      term: "Guba",
      meaning: "Broken",
      pronunciation: "gu-ba",
      usage: "From this lesson's word list: describing objects.",
      example: [
        {
          speaker: "",
          text: "Guba an lingkoran.",
          translation: "The chair is broken.",
        },
      ],
    },
    {
      term: "Mapulsanon",
      meaning: "Useful",
      pronunciation: "ma-pul-sa-non",
      usage: "From this lesson's word list: describing objects.",
    },
    {
      term: "Makolor",
      meaning: "Colorful",
      pronunciation: "ma-ko-lor",
      usage: "From this lesson's word list: describing objects.",
    },
    {
      term: "Lingin",
      meaning: "Round",
      pronunciation: "li-ngin",
      usage: "From this lesson's word list: describing objects.",
    },
    {
      term: "Ano nga klase?",
      meaning: "What kind?",
      pronunciation: "a-no nga kla-se",
      usage: "A descriptive question words and expression.",
      example: [
        {
          speaker: "",
          text: "Ano nga klase nga lugar ini?",
          translation: "What kind of place is this?",
        },
      ],
    },
    {
      term: "Hain?",
      meaning: "Which one?",
      pronunciation: "ha-in",
      usage: "A descriptive question words and expression.",
      example: [
        {
          speaker: "A",
          text: "Hain man an mas dako?",
          translation: "Which one is bigger?",
        },
        {
          speaker: "B",
          text: "Mas dako ito nga bag.",
          translation: "That bag is bigger.",
        },
      ],
    },
    {
      term: "Ano an hitsura hini?",
      meaning: "What does it look like?",
      pronunciation: "a-no an hit-su-ra hi-ni",
      usage: "A descriptive question words and expression.",
      example: [
        {
          speaker: "A",
          text: "Ano an hitsura hini nga lugar?",
          translation: "What is this place like?",
        },
        {
          speaker: "B",
          text: "Matahom ngan mahimyang an amon baryo.",
          translation: "Our village is beautiful and peaceful.",
        },
      ],
    },
    {
      term: "Gaano kadako?",
      meaning: "How big?",
      pronunciation: "ga-a-no ka-da-ko",
      usage: "A descriptive question words and expression.",
    },
    {
      term: "Gaano kagutiay?",
      meaning: "How small?",
      pronunciation: "ga-a-no ka-gu-ti-ay",
      usage: "A descriptive question words and expression.",
    },
    {
      term: "Sugad",
      meaning: "Like / Similar",
      pronunciation: "su-gad",
      usage: "A descriptive question words and expression.",
    },
    {
      term: "Iba",
      meaning: "Different",
      pronunciation: "i-ba",
      usage: "A descriptive question words and expression.",
      example: [
        {
          speaker: "A",
          text: "Ano an kaibahan nira?",
          translation: "What is the difference between them?",
        },
        {
          speaker: "B",
          text: "Iba an ira kadako ngan kolor.",
          translation: "Their sizes and colors are different.",
        },
      ],
    },
    {
      term: "Pariho",
      meaning: "Same",
      pronunciation: "pa-ri-ho",
      usage: "A descriptive question words and expression.",
      example: [
        {
          speaker: "",
          text: "Pariho hira.",
          translation: "They are similar. / They are alike.",
        },
      ],
    },
    {
      term: "Mas",
      meaning: "More",
      pronunciation: "mas",
      usage: "A descriptive question words and expression.",
      example: [
        {
          speaker: "A",
          text: "Mas dako ito nga bag.",
          translation: "That bag is bigger.",
        },
        {
          speaker: "B",
          text: "Ano an kaibahan nira?",
          translation: "What is the difference between them?",
        },
      ],
    },
    {
      term: "Gud / Kaayo",
      meaning: "Very",
      pronunciation: "gud / ka-a-yo",
      usage: "A descriptive question words and expression.",
      example: [
        {
          speaker: "A",
          text: "Oo, hirani la an baybayon.",
          translation: "Yes, the beach is nearby.",
        },
        {
          speaker: "B",
          text: "Maupay gud ini nga lugar.",
          translation: "This is really a nice place.",
        },
      ],
    },
  ],
  patterns: [
    {
      label: "Pattern 1: Describing Someone",
      pattern: "Description + hiya.",
      examples: [
        "Buotan hiya.",
        "Mahigalaon hiya.",
        "Hataas hiya.",
      ],
    },
    {
      label: "Pattern 2: Comparing Things",
      pattern: "Mas + Description + ini nga bag.",
      examples: [
        "Mas mahal ini nga bag.",
        "Mas barato ini nga bag.",
      ],
    },
    {
      label: "Pattern 3: Describing a Friend",
      pattern: "Description + an akon sangkay.",
      examples: [
        "Maduruto an akon sangkay.",
        "Buotan an akon sangkay.",
      ],
    },
  ],
  sentences: [
    {
      text: "Buotan hiya.",
      meaning: "He is kind. / He/She is kind.",
    },
    {
      text: "Mahigalaon hiya.",
      meaning: "She is friendly. / He/She is friendly.",
    },
    {
      text: "Maduruto an akon sangkay.",
      meaning: "My friend is hardworking.",
    },
    {
      text: "Hataas an akon bugto nga lalaki.",
      meaning: "My brother is tall.",
    },
    {
      text: "Bata pa an akon bugto nga babaye.",
      meaning: "My sister is young.",
    },
    {
      text: "Dako an balay.",
      meaning: "The house is big.",
    },
    {
      text: "Matahom an lugar.",
      meaning: "The place is beautiful.",
    },
    {
      text: "Matawo an merkado.",
      meaning: "The market is crowded.",
    },
    {
      text: "Limpyo an sulod-klase.",
      meaning: "The classroom is clean.",
    },
    {
      text: "Gutiay ini nga libro.",
      meaning: "This book is small.",
    },
    {
      text: "Mahal ini nga bag.",
      meaning: "This bag is expensive.",
    },
    {
      text: "Daan ito nga silya.",
      meaning: "That chair is old.",
    },
    {
      text: "Mas dako ini.",
      meaning: "This one is bigger. / This is bigger.",
    },
    {
      text: "Mas gutiay ito.",
      meaning: "That one is smaller. / That is smaller.",
    },
    {
      text: "Magkaiba hira.",
      meaning: "They are different.",
    },
    {
      text: "Pariho hira.",
      meaning: "They are similar. / They are alike.",
    },
    {
      text: "Ano an hitsura han iyo balay?",
      meaning: "What does your house look like?",
    },
    {
      text: "Ano ini nga klase nga lugar?",
      meaning: "What kind of place is this?",
    },
    {
      text: "Maduruto hiya.",
      meaning: "He/She is hardworking.",
    },
    {
      text: "Hataas hiya.",
      meaning: "He/She is tall.",
    },
    {
      text: "Bata pa hiya.",
      meaning: "He/She is still young.",
    },
    {
      text: "Maisog hiya.",
      meaning: "He/She is brave.",
    },
    {
      text: "Buotan an akon sangkay.",
      meaning: "My friend is kind.",
    },
    {
      text: "Maduruto an akon bugto.",
      meaning: "My sibling is hardworking.",
    },
    {
      text: "Mahigalaon an amon maestra.",
      meaning: "Our teacher is friendly.",
    },
    {
      text: "Matahom an baybayon.",
      meaning: "The beach is beautiful.",
    },
    {
      text: "Limpyo an eskwelahan.",
      meaning: "The school is clean.",
    },
    {
      text: "Halapad an dalan.",
      meaning: "The road is wide.",
    },
    {
      text: "Hirayo an merkado.",
      meaning: "The market is far.",
    },
    {
      text: "Hirani an botika.",
      meaning: "The pharmacy is near.",
    },
    {
      text: "Hilom an baryo.",
      meaning: "The village is quiet.",
    },
    {
      text: "Samok an kalsada.",
      meaning: "The street is noisy or chaotic.",
    },
    {
      text: "Mahimyang an lugar.",
      meaning: "The place is peaceful.",
    },
    {
      text: "Bag-o ini nga libro.",
      meaning: "This is a new book.",
    },
    {
      text: "Mabug-at ini nga bag.",
      meaning: "This bag is heavy.",
    },
    {
      text: "Magaan ini nga kahon.",
      meaning: "This box is light.",
    },
    {
      text: "Guba an lingkoran.",
      meaning: "The chair is broken.",
    },
    {
      text: "Mahal ini nga relo.",
      meaning: "This watch is expensive.",
    },
    {
      text: "Barato ini nga lapis.",
      meaning: "This pencil is inexpensive.",
    },
    {
      text: "Mas mahal ini nga bag.",
      meaning: "This bag is more expensive.",
    },
    {
      text: "Mas halapad ini nga dalan.",
      meaning: "This road is wider.",
    },
    {
      text: "Mas hirani an eskwelahan.",
      meaning: "The school is nearer.",
    },
    {
      text: "Pariho an ira kolor.",
      meaning: "Their colors are the same.",
    },
    {
      text: "Iba an kolor hini.",
      meaning: "This has a different color.",
    },
    {
      text: "Magkaiba an duha nga butang.",
      meaning: "The two objects are different.",
    },
    {
      text: "Ano an hitsura niya?",
      meaning: "What does he/she look like?",
    },
    {
      text: "Ano nga klase nga lugar ini?",
      meaning: "What kind of place is this?",
    },
    {
      text: "Dako ba an balay?",
      meaning: "Is the house big?",
    },
    {
      text: "Mahal ba ini?",
      meaning: "Is this expensive?",
    },
    {
      text: "Hain an mas barato?",
      meaning: "Which one is less expensive?",
    },
  ],
  conversations: [
    {
      title: "Conversation 1: Describing a Friend",
      situation: "Two classmates talk about a friend they both know.",
      lines: [
        {
          speaker: "Ana",
          text: "Hin-o an imo bag-o nga sangkay?",
          translation: "Who is your new friend?",
        },
        {
          speaker: "Ben",
          text: "Hi Mark.",
          translation: "Mark.",
        },
        {
          speaker: "Ana",
          text: "Ano an iya hitsura?",
          translation: "What does he look like?",
        },
        {
          speaker: "Ben",
          text: "Hataas hiya ngan matahom an iya buhok.",
          translation: "He is tall and has beautiful hair.",
        },
        {
          speaker: "Ana",
          text: "Ano man an iya batasan?",
          translation: "What is his personality like?",
        },
        {
          speaker: "Ben",
          text: "Buotan ngan mahigalaon hiya.",
          translation: "He is kind and friendly.",
        },
        {
          speaker: "Ana",
          text: "Maupay ito nga klase hin sangkay.",
          translation: "That is a good kind of friend.",
        },
        {
          speaker: "Ben",
          text: "Oo, maduruto liwat hiya ha pag-adal.",
          translation: "Yes, he is also hardworking in his studies.",
        },
      ],
    },
    {
      title: "Conversation 2: Describing a Hometown",
      situation: "A visitor asks a local resident about their hometown.",
      lines: [
        {
          speaker: "Visitor",
          text: "Ano an hitsura hini nga lugar?",
          translation: "What is this place like?",
        },
        {
          speaker: "Resident",
          text: "Matahom ngan mahimyang an amon baryo.",
          translation: "Our village is beautiful and peaceful.",
        },
        {
          speaker: "Visitor",
          text: "Damo ba an mga tawo dinhi?",
          translation: "Are there many people here?",
        },
        {
          speaker: "Resident",
          text: "Diri man. Diri duro kadamo an mga tawo.",
          translation: "Not really. There are not too many people.",
        },
        {
          speaker: "Visitor",
          text: "May baybayon ba hirani?",
          translation: "Is there a beach nearby?",
        },
        {
          speaker: "Resident",
          text: "Oo, hirani la an baybayon.",
          translation: "Yes, the beach is nearby.",
        },
        {
          speaker: "Visitor",
          text: "Maupay gud ini nga lugar.",
          translation: "This is really a nice place.",
        },
        {
          speaker: "Resident",
          text: "Salamat.",
          translation: "Thank you.",
        },
      ],
    },
    {
      title: "Conversation 3: Comparing Two Products",
      situation: "A customer compares two bags before purchasing one.",
      lines: [
        {
          speaker: "Customer",
          text: "Hain an mas barato hini nga duha?",
          translation: "Which of these two is less expensive?",
        },
        {
          speaker: "Seller",
          text: "Mas barato ini nga bag.",
          translation: "This bag is less expensive.",
        },
        {
          speaker: "Customer",
          text: "Hain man an mas dako?",
          translation: "Which one is bigger?",
        },
        {
          speaker: "Seller",
          text: "Mas dako ito nga bag.",
          translation: "That bag is bigger.",
        },
        {
          speaker: "Customer",
          text: "Ano an kaibahan nira?",
          translation: "What is the difference between them?",
        },
        {
          speaker: "Seller",
          text: "Iba an ira kadako ngan kolor.",
          translation: "Their sizes and colors are different.",
        },
        {
          speaker: "Customer",
          text: "Sige, ini na la an akon paliton.",
          translation: "All right, I will buy this one instead.",
        },
        {
          speaker: "Seller",
          text: "Salamat ha imo pagpalit.",
          translation: "Thank you for your purchase.",
        },
      ],
    },
  ],
  languageNotes: [
    {
      title: "A. Describing People",
      body: [
        "When describing people, you may talk about their physical appearance, personality, or other characteristics.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Buotan hiya.",
            right: "He/She is kind.",
          },
          {
            left: "Mahigalaon hiya.",
            right: "He/She is friendly.",
          },
          {
            left: "Maduruto hiya.",
            right: "He/She is hardworking.",
          },
          {
            left: "Hataas hiya.",
            right: "He/She is tall.",
          },
          {
            left: "Bata pa hiya.",
            right: "He/She is still young.",
          },
          {
            left: "Maisog hiya.",
            right: "He/She is brave.",
          },
        ],
      },
    },
    {
      title: "A. Describing People",
      body: [
        "You can also include a person's relationship to you.",
      ],
      examples: [
        {
          text: "Buotan an akon sangkay.",
          meaning: "My friend is kind.",
        },
        {
          text: "Maduruto an akon bugto.",
          meaning: "My sibling is hardworking.",
        },
        {
          text: "Mahigalaon an amon maestra.",
          meaning: "Our teacher is friendly.",
        },
      ],
    },
    {
      title: "B. Describing Places",
      body: [
        "When describing a place, you can talk about its appearance, size, condition, or surroundings.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Matahom an baybayon.",
            right: "The beach is beautiful.",
          },
          {
            left: "Limpyo an eskwelahan.",
            right: "The school is clean.",
          },
          {
            left: "Halapad an dalan.",
            right: "The road is wide.",
          },
          {
            left: "Hirayo an merkado.",
            right: "The market is far.",
          },
          {
            left: "Hirani an botika.",
            right: "The pharmacy is near.",
          },
          {
            left: "Matawo an merkado.",
            right: "The market is crowded.",
          },
        ],
      },
    },
    {
      title: "B. Describing Places",
      body: [
        "You can also describe the atmosphere of a place.",
      ],
      examples: [
        {
          text: "Hilom an baryo.",
          meaning: "The village is quiet.",
        },
        {
          text: "Samok an kalsada.",
          meaning: "The street is noisy or chaotic.",
        },
        {
          text: "Mahimyang an lugar.",
          meaning: "The place is peaceful.",
        },
      ],
    },
    {
      title: "C. Describing Objects",
      body: [
        "Descriptive words help identify objects and explain their characteristics.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Bag-o ini nga libro.",
            right: "This is a new book.",
          },
          {
            left: "Mabug-at ini nga bag.",
            right: "This bag is heavy.",
          },
          {
            left: "Magaan ini nga kahon.",
            right: "This box is light.",
          },
          {
            left: "Guba an lingkoran.",
            right: "The chair is broken.",
          },
          {
            left: "Mahal ini nga relo.",
            right: "This watch is expensive.",
          },
          {
            left: "Barato ini nga lapis.",
            right: "This pencil is inexpensive.",
          },
        ],
      },
    },
    {
      title: "C. Describing Objects",
      body: [
        "When describing an object, you can mention its size, color, condition, or usefulness.",
      ],
    },
    {
      title: "D. Making Comparisons",
      body: [
        "Comparisons allow learners to explain similarities and differences.",
        "The word mas can be used to express a greater degree of a characteristic.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Mas dako ini.",
            right: "This is bigger.",
          },
          {
            left: "Mas gutiay ito.",
            right: "That is smaller.",
          },
          {
            left: "Mas mahal ini nga bag.",
            right: "This bag is more expensive.",
          },
          {
            left: "Mas halapad ini nga dalan.",
            right: "This road is wider.",
          },
          {
            left: "Mas hirani an eskwelahan.",
            right: "The school is nearer.",
          },
        ],
      },
    },
    {
      title: "D. Making Comparisons",
      body: [
        "To express similarity, you may use pariho.",
      ],
      examples: [
        {
          text: "Pariho hira.",
          meaning: "They are alike.",
        },
        {
          text: "Pariho an ira kolor.",
          meaning: "Their colors are the same.",
        },
      ],
    },
    {
      title: "D. Making Comparisons",
      body: [
        "To express difference, you may use iba or magkaiba.",
      ],
      examples: [
        {
          text: "Iba an kolor hini.",
          meaning: "This has a different color.",
        },
        {
          text: "Magkaiba an duha nga butang.",
          meaning: "The two objects are different.",
        },
      ],
    },
    {
      title: "E. Asking for Descriptions",
      body: [
        "You can ask questions to obtain more information about a person, place, or object.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Ano an hitsura niya?",
            right: "What does he/she look like?",
          },
          {
            left: "Ano an hitsura hini?",
            right: "What does this look like?",
          },
          {
            left: "Ano an hitsura han iyo balay?",
            right: "What does your house look like?",
          },
          {
            left: "Ano nga klase nga lugar ini?",
            right: "What kind of place is this?",
          },
          {
            left: "Dako ba an balay?",
            right: "Is the house big?",
          },
          {
            left: "Mahal ba ini?",
            right: "Is this expensive?",
          },
          {
            left: "Hain an mas barato?",
            right: "Which one is less expensive?",
          },
        ],
      },
    },
    {
      title: "B. Personality and Character",
      body: [
        "Some personality words may have different shades of meaning depending on context and community usage.",
      ],
    },
    {
      title: "USEFUL PHRASES AND SENTENCES",
      body: [
        "The following expressions can help learners describe people, places, and objects.",
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
