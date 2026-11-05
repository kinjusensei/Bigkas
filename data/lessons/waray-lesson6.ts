import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 6 — imported from "Lesson Plan.pdf", pages 729–743.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
// Fields not given by the plan are INFERRED from this lesson's own content and
// listed in docs/waray-inferred-keys.md: situation, usage, example, pattern, fill-in, arrange, fourth option, speaking phrase, target pitch and mood, respelling, example situation, pronunciation tip, completion requirement.
// The practice answers are INFERRED drafts, not from the PDF. See
// docs/waray-draft-answer-keys.md for each answer and how it was found.

export const warayLesson6: StructuredLesson = {
  lessonId: "waray_6",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 6,
  title: "Food and Drinks",
  level: "Beginner",
  unit: "Unit 2 – Everyday Vocabulary",
  estimatedDuration: "30–40 minutes",
  prerequisite: "Lessons 1–5",
  intro: [
    "Food is an important part of everyday communication. People talk about what they eat, what they like, and what they want to order when sharing meals with family and friends.",
    "In this lesson, you will learn common Waray words for food, drinks, fruits, vegetables, and meals. You will also practice simple conversations that you might use at home, in a restaurant, or at a local food stall.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify common food and drink vocabulary in Waray.",
    "Recognize words related to meals and eating.",
    "Express basic food preferences.",
    "Ask and answer simple questions about food and drinks.",
    "Use basic Waray expressions when ordering food.",
  ],
  assessment: {
    instructions: "Choose the correct answer. Each question is worth one point.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What is the Waray word for cooked rice?",
        options: [
          {
            key: "A",
            text: "Bugas",
          },
          {
            key: "B",
            text: "Kan-on",
          },
          {
            key: "C",
            text: "Tinapay",
          },
          {
            key: "D",
            text: "Karuyag ko kumaon.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "What does isda mean?",
        options: [
          {
            key: "A",
            text: "Fish",
          },
          {
            key: "B",
            text: "Chicken",
          },
          {
            key: "C",
            text: "Pork",
          },
          {
            key: "D",
            text: "Uhaw ako.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 3,
        prompt: "What is the Waray word for water?",
        options: [
          {
            key: "A",
            text: "Gatas",
          },
          {
            key: "B",
            text: "Kape",
          },
          {
            key: "C",
            text: "Tubig",
          },
          {
            key: "D",
            text: "Breakfast",
          },
        ],
        answerKey: "C",
      },
      {
        id: 4,
        prompt: "What does gutom mean?",
        options: [
          {
            key: "A",
            text: "Thirsty",
          },
          {
            key: "B",
            text: "Hungry",
          },
          {
            key: "C",
            text: "Full",
          },
          {
            key: "D",
            text: "Uhaw ako.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 5,
        prompt: "What is the Waray word for banana?",
        options: [
          {
            key: "A",
            text: "Saging",
          },
          {
            key: "B",
            text: "Mangga",
          },
          {
            key: "C",
            text: "Nangka",
          },
          {
            key: "D",
            text: "Karuyag ko kumaon.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 6,
        prompt: "What does pamahaw mean?",
        options: [
          {
            key: "A",
            text: "Dinner",
          },
          {
            key: "B",
            text: "Lunch",
          },
          {
            key: "C",
            text: "Breakfast",
          },
          {
            key: "D",
            text: "Kan-on",
          },
        ],
        answerKey: "C",
      },
      {
        id: 7,
        prompt: "How do you say \"I am thirsty\"?",
        options: [
          {
            key: "A",
            text: "Busog ako.",
          },
          {
            key: "B",
            text: "Uhaw ako.",
          },
          {
            key: "C",
            text: "Gutom ako.",
          },
          {
            key: "D",
            text: "Tinapay",
          },
        ],
        answerKey: "B",
      },
      {
        id: 8,
        prompt: "What does Lami an pagkaon mean?",
        options: [
          {
            key: "A",
            text: "The food is delicious.",
          },
          {
            key: "B",
            text: "I want to eat.",
          },
          {
            key: "C",
            text: "I am hungry.",
          },
          {
            key: "D",
            text: "Breakfast",
          },
        ],
        answerKey: "A",
      },
      {
        id: 9,
        prompt: "What is the Waray word for egg?",
        options: [
          {
            key: "A",
            text: "Itlog",
          },
          {
            key: "B",
            text: "Ahos",
          },
          {
            key: "C",
            text: "Kamatis",
          },
          {
            key: "D",
            text: "Chicken",
          },
        ],
        answerKey: "A",
      },
      {
        id: 10,
        prompt: "How do you say \"I want to drink water\"?",
        options: [
          {
            key: "A",
            text: "Karuyag ko kumaon.",
          },
          {
            key: "B",
            text: "Karuyag ko uminom hin tubig.",
          },
          {
            key: "C",
            text: "Diri ako naruruyag hin isda.",
          },
          {
            key: "D",
            text: "Chicken",
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
      instructions: "Translate the following sentences into Waray.",
      items: [
        "I am thirsty.",
        "I want to eat.",
        "I like fish.",
        "The food is delicious.",
        "Please give me water.",
      ],
    },
    {
      title: "Create Your Own Food Order",
      kind: "open",
      instructions: "Imagine that you are ordering food at a local food stall. Complete the following statements in Waray.",
      items: [
        "I want to eat: __________",
        "I want to drink: __________",
        "I like: __________",
        "I do not like: __________",
        "The food is delicious: __________",
      ],
    },
  ],
  matchActivity: {
    title: "Match the Food",
    instructions: "Match each English word with its correct Waray equivalent.",
    pairs: [
      {
        id: "1",
        term: "Rice (cooked)",
        answer: "Kan-on",
      },
      {
        id: "2",
        term: "Fish",
        answer: "Isda",
      },
      {
        id: "3",
        term: "Chicken",
        answer: "Manok",
      },
      {
        id: "4",
        term: "Banana",
        answer: "Saging",
      },
      {
        id: "5",
        term: "Water",
        answer: "Tubig",
      },
    ],
  },
  choiceActivity: {
    title: "Identify the Correct Translation",
    questions: [
      {
        id: 1,
        prompt: "What is the Waray word for mango?",
        options: [
          {
            key: "A",
            text: "Mangga",
          },
          {
            key: "B",
            text: "Nangka",
          },
          {
            key: "C",
            text: "Lubi",
          },
        ],
        answerKey: "A",
        title: "Identify the Correct Translation",
        instructions: "Choose the correct Waray word.",
      },
      {
        id: 2,
        prompt: "What is the Waray word for egg?",
        options: [
          {
            key: "A",
            text: "Asin",
          },
          {
            key: "B",
            text: "Itlog",
          },
          {
            key: "C",
            text: "Lana",
          },
        ],
        answerKey: "B",
        title: "Identify the Correct Translation",
        instructions: "Choose the correct Waray word.",
      },
      {
        id: 3,
        prompt: "What is the Waray word for milk?",
        options: [
          {
            key: "A",
            text: "Kape",
          },
          {
            key: "B",
            text: "Tsaa",
          },
          {
            key: "C",
            text: "Gatas",
          },
        ],
        answerKey: "C",
        title: "Identify the Correct Translation",
        instructions: "Choose the correct Waray word.",
      },
      {
        id: 4,
        prompt: "What does busog mean?",
        options: [
          {
            key: "A",
            text: "Hungry",
          },
          {
            key: "B",
            text: "Full",
          },
          {
            key: "C",
            text: "Thirsty",
          },
        ],
        answerKey: "B",
        title: "Identify the Correct Translation",
        instructions: "Choose the correct Waray word.",
      },
      {
        id: 5,
        prompt: "______ ako. (I am hungry.)",
        options: [
          {
            key: "A",
            text: "Gutom",
          },
          {
            key: "B",
            text: "Uhaw",
          },
          {
            key: "C",
            text: "Busog",
          },
        ],
        answerKey: "A",
        title: "Complete the Sentences",
        instructions: "Choose the correct word to complete each sentence.",
      },
      {
        id: 6,
        prompt: "Karuyag ko hin ______. (I want water.)",
        options: [
          {
            key: "A",
            text: "tubig",
          },
          {
            key: "B",
            text: "mangga",
          },
          {
            key: "C",
            text: "manok",
          },
        ],
        answerKey: "A",
        title: "Complete the Sentences",
        instructions: "Choose the correct word to complete each sentence.",
      },
      {
        id: 7,
        prompt: "Lami an ______. (The food is delicious.)",
        options: [
          {
            key: "A",
            text: "oras",
          },
          {
            key: "B",
            text: "pagkaon",
          },
          {
            key: "C",
            text: "adlaw",
          },
        ],
        answerKey: "B",
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
      name: "Food Explorer Badge",
      description: "Awarded to learners who successfully identify common foods and drinks and use basic Waray expressions related to eating and ordering food.",
    },
    completionRequirement: "Obtain at least 70% in the lesson assessment. Learners may repeat the activities and assessment if they do not meet the requirement.",
  },
  expectedOutcomes: [
    "Identify common foods, fruits, vegetables, and drinks in Waray.",
    "Recognize words associated with meals and eating.",
    "Express basic food preferences.",
    "Ask and answer simple questions about food.",
    "Use basic expressions when ordering food or requesting drinks.",
  ],
  fillInBlanks: {
    title: "Fill in the Blanks",
    instructions: "Complete each sentence using the appropriate Waray word.",
    items: [
      {
        id: "1",
        sentence: "Karuyag ko ___.",
        hint: "I want to eat.",
        answer: "kumaon",
        wordBank: [
          "Repolyo",
          "Asukar",
          "kumaon",
          "Asin",
        ],
      },
      {
        id: "2",
        sentence: "Karuyag ko uminom hin ___.",
        hint: "I want to drink water.",
        answer: "tubig",
        wordBank: [
          "Utanon",
          "Saging",
          "tubig",
          "Talong",
        ],
      },
      {
        id: "3",
        sentence: "Naruruyag ako hin ___.",
        hint: "I like fish.",
        answer: "isda",
        wordBank: [
          "Sabaw",
          "isda",
          "Lana",
          "Repolyo",
        ],
      },
      {
        id: "4",
        sentence: "Naruruyag ako hin ___.",
        hint: "I like mangoes.",
        answer: "mangga",
        wordBank: [
          "Sitaw",
          "Lana",
          "Sibuyas",
          "mangga",
        ],
      },
      {
        id: "5",
        sentence: "Lami an ___.",
        hint: "The food is delicious.",
        answer: "pagkaon",
        wordBank: [
          "Pakwan",
          "Sabaw",
          "Repolyo",
          "pagkaon",
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
          "kumaon",
          "ko",
          "Karuyag",
        ],
        answer: [
          "Karuyag",
          "ko",
          "kumaon",
        ],
        display: "Karuyag ko kumaon.",
      },
      {
        id: "2",
        words: [
          "Karuyag",
          "tubig",
          "uminom",
          "ko",
          "hin",
        ],
        answer: [
          "Karuyag",
          "ko",
          "uminom",
          "hin",
          "tubig",
        ],
        display: "Karuyag ko uminom hin tubig.",
      },
      {
        id: "3",
        words: [
          "isda",
          "ako",
          "Naruruyag",
          "hin",
        ],
        answer: [
          "Naruruyag",
          "ako",
          "hin",
          "isda",
        ],
        display: "Naruruyag ako hin isda.",
      },
      {
        id: "4",
        words: [
          "mangga",
          "Naruruyag",
          "hin",
          "ako",
        ],
        answer: [
          "Naruruyag",
          "ako",
          "hin",
          "mangga",
        ],
        display: "Naruruyag ako hin mangga.",
      },
      {
        id: "5",
        words: [
          "pagkaon",
          "an",
          "Lami",
        ],
        answer: [
          "Lami",
          "an",
          "pagkaon",
        ],
        display: "Lami an pagkaon.",
      },
    ],
  },
  speaking: {
    title: "Speaking Practice",
    instructions: "Read the following sentences aloud.",
    note: "Learners should listen to the model pronunciation before recording their own voice.",
    practiceLessonId: "waray_6",
    phrases: [
      {
        id: "1",
        text: "Gutom ako.",
        respelling: "GU-tom A-ko",
        meaning: "I am hungry.",
      },
      {
        id: "2",
        text: "Karuyag ko uminom hin tubig.",
        respelling: "ka-ru-YAG ko u-mi-NOM hin TU-big",
        meaning: "I want to drink water.",
      },
      {
        id: "3",
        text: "Ano an karuyag mo kumaon?",
        respelling: "A-no an ka-ru-YAG mo ku-ma-ON?",
        meaning: "What do you want to eat?",
      },
      {
        id: "4",
        text: "Diri ako naruruyag hin maanghang nga pagkaon.",
        respelling: "DI-ri A-ko na-ru-RU-yag hin ma-ang-HANG nga pag-ka-ON",
        meaning: "I do not like spicy food.",
      },
      {
        id: "5",
        text: "May mangga kami.",
        respelling: "may mang-ga ka-mi",
        meaning: "We have mangoes.",
      },
      {
        id: "6",
        text: "Karuyag ko hin tubig.",
        respelling: "Ka-ru-yag ko hin tu-big",
        meaning: "I want water.",
      },
      {
        id: "7",
        text: "Lami an mangga.",
        respelling: "la-mi an mang-ga",
        meaning: "Mangoes are delicious.",
      },
    ],
  },
  exampleSituation: {
    description: "Imagine this situation from the lesson: Talking About Food.",
    lead: "You can begin by saying:",
    line: "Ano an imo karuyag kumaon?",
    translation: "What do you want to eat?",
  },
  vocabularyIntro: "Learn the following words and expressions before proceeding to the activities.",
  pronunciationTip: "Read each syllable clearly. Avoid rushing through longer expressions.",
  selfIntroIntro: "Use these patterns and phrases from the lesson.",
  vocabulary: [
    {
      term: "Kan-on",
      meaning: "Rice (cooked)",
      pronunciation: "kan-ON",
      usage: "A common food.",
      example: [
        {
          speaker: "A",
          text: "Ano an imo karuyag kumaon?",
          translation: "What do you want to eat?",
        },
        {
          speaker: "B",
          text: "Karuyag ko hin kan-on ngan isda.",
          translation: "I want rice and fish.",
        },
      ],
    },
    {
      term: "Bugas",
      meaning: "Uncooked rice",
      pronunciation: "BU-gas",
      usage: "A common food.",
    },
    {
      term: "Tinapay",
      meaning: "Bread",
      pronunciation: "ti-NA-pay",
      usage: "A common food.",
    },
    {
      term: "Isda",
      meaning: "Fish",
      pronunciation: "IS-da",
      usage: "A common food.",
      example: [
        {
          speaker: "A",
          text: "Karuyag ko hin kan-on ngan isda.",
          translation: "I want rice and fish.",
        },
        {
          speaker: "B",
          text: "Karuyag mo liwat hin utanon?",
          translation: "Do you also want vegetables?",
        },
      ],
    },
    {
      term: "Karne",
      meaning: "Meat",
      pronunciation: "KAR-ne",
      usage: "A common food.",
    },
    {
      term: "Manok",
      meaning: "Chicken",
      pronunciation: "MA-nok",
      usage: "A common food.",
      example: [
        {
          speaker: "A",
          text: "Alayon, may pagkaon pa ba?",
          translation: "Excuse me, is there still food available?",
        },
        {
          speaker: "B",
          text: "Oo, may kan-on ngan manok pa.",
          translation: "Yes, there is still rice and chicken.",
        },
      ],
    },
    {
      term: "Baboy",
      meaning: "Pork",
      pronunciation: "BA-boy",
      usage: "A common food.",
      example: [
        {
          speaker: "",
          text: "Diri ako naruruyag hin baboy.",
          translation: "I do not like pork.",
        },
      ],
    },
    {
      term: "Karne han baka",
      meaning: "Beef",
      pronunciation: "KAR-ne han BA-ka",
      usage: "A common food.",
    },
    {
      term: "Itlog",
      meaning: "Egg",
      pronunciation: "IT-log",
      usage: "A common food.",
    },
    {
      term: "Sabaw",
      meaning: "Soup",
      pronunciation: "SA-baw",
      usage: "A common food.",
    },
    {
      term: "Utanon",
      meaning: "Vegetable",
      pronunciation: "u-TA-non",
      usage: "A common food.",
      example: [
        {
          speaker: "A",
          text: "Karuyag mo liwat hin utanon?",
          translation: "Do you also want vegetables?",
        },
        {
          speaker: "B",
          text: "Oo, karuyag ko hin utanon.",
          translation: "Yes, I want vegetables.",
        },
      ],
    },
    {
      term: "Asin",
      meaning: "Salt",
      pronunciation: "A-sin",
      usage: "A common food.",
    },
    {
      term: "Asukar",
      meaning: "Sugar",
      pronunciation: "a-SU-kar",
      usage: "A common food.",
    },
    {
      term: "Lana",
      meaning: "Oil",
      pronunciation: "LA-na",
      usage: "A common food.",
    },
    {
      term: "Saging",
      meaning: "Banana",
      pronunciation: "SA-ging",
      usage: "From this lesson's word list: fruits.",
      example: [
        {
          speaker: "",
          text: "Karuyag ko hin saging.",
          translation: "I want a banana.",
        },
      ],
    },
    {
      term: "Mangga",
      meaning: "Mango",
      pronunciation: "MANG-ga",
      usage: "From this lesson's word list: fruits.",
      example: [
        {
          speaker: "",
          text: "Naruruyag ako hin mangga.",
          translation: "I like mangoes.",
        },
      ],
    },
    {
      term: "Lubi",
      meaning: "Coconut",
      pronunciation: "LU-bi",
      usage: "From this lesson's word list: fruits.",
    },
    {
      term: "Kapayas",
      meaning: "Papaya",
      pronunciation: "ka-PA-yas",
      usage: "From this lesson's word list: fruits.",
    },
    {
      term: "Pinya",
      meaning: "Pineapple",
      pronunciation: "PIN-ya",
      usage: "From this lesson's word list: fruits.",
    },
    {
      term: "Pakwan",
      meaning: "Watermelon",
      pronunciation: "PAK-wan",
      usage: "From this lesson's word list: fruits.",
    },
    {
      term: "Bayabas",
      meaning: "Guava",
      pronunciation: "ba-YA-bas",
      usage: "From this lesson's word list: fruits.",
    },
    {
      term: "Kahel",
      meaning: "Orange",
      pronunciation: "ka-HEL",
      usage: "From this lesson's word list: fruits.",
    },
    {
      term: "Kalamansi",
      meaning: "Calamansi",
      pronunciation: "ka-la-MAN-si",
      usage: "From this lesson's word list: fruits.",
    },
    {
      term: "Nangka",
      meaning: "Jackfruit",
      pronunciation: "NANG-ka",
      usage: "From this lesson's word list: fruits.",
    },
    {
      term: "Talong",
      meaning: "Eggplant",
      pronunciation: "TA-long",
      usage: "From this lesson's word list: vegetables.",
    },
    {
      term: "Kamatis",
      meaning: "Tomato",
      pronunciation: "ka-MA-tis",
      usage: "From this lesson's word list: vegetables.",
      example: [
        {
          speaker: "",
          text: "Napalit ako hin kamatis.",
          translation: "I bought tomatoes.",
        },
      ],
    },
    {
      term: "Sibuyas",
      meaning: "Onion",
      pronunciation: "si-BU-yas",
      usage: "From this lesson's word list: vegetables.",
    },
    {
      term: "Ahos",
      meaning: "Garlic",
      pronunciation: "A-hos",
      usage: "From this lesson's word list: vegetables.",
    },
    {
      term: "Luya",
      meaning: "Ginger",
      pronunciation: "LU-ya",
      usage: "From this lesson's word list: vegetables.",
    },
    {
      term: "Kalabasa",
      meaning: "Squash",
      pronunciation: "ka-la-BA-sa",
      usage: "From this lesson's word list: vegetables.",
    },
    {
      term: "Kamote",
      meaning: "Sweet potato",
      pronunciation: "ka-MO-te",
      usage: "From this lesson's word list: vegetables.",
    },
    {
      term: "Ampalaya",
      meaning: "Bitter gourd",
      pronunciation: "am-pa-LA-ya",
      usage: "From this lesson's word list: vegetables.",
    },
    {
      term: "Sitaw",
      meaning: "String beans",
      pronunciation: "SI-taw",
      usage: "From this lesson's word list: vegetables.",
    },
    {
      term: "Repolyo",
      meaning: "Cabbage",
      pronunciation: "re-POL-yo",
      usage: "From this lesson's word list: vegetables.",
    },
    {
      term: "Tubig",
      meaning: "Water",
      pronunciation: "TU-big",
      usage: "From this lesson's word list: drinks.",
      example: [
        {
          speaker: "A",
          text: "Ano an karuyag mo imnon?",
          translation: "What do you want to drink?",
        },
        {
          speaker: "B",
          text: "Karuyag ko hin tubig.",
          translation: "I want water.",
        },
      ],
    },
    {
      term: "Gatas",
      meaning: "Milk",
      pronunciation: "GA-tas",
      usage: "From this lesson's word list: drinks.",
      example: [
        {
          speaker: "",
          text: "Karuyag ko uminom hin gatas.",
          translation: "I want to drink milk.",
        },
      ],
    },
    {
      term: "Kape",
      meaning: "Coffee",
      pronunciation: "KA-pe",
      usage: "From this lesson's word list: drinks.",
      example: [
        {
          speaker: "",
          text: "Nainom ako hin kape.",
          translation: "I drank coffee.",
        },
      ],
    },
    {
      term: "Tsaa",
      meaning: "Tea",
      pronunciation: "TSA-a",
      usage: "From this lesson's word list: drinks.",
    },
    {
      term: "Dyus",
      meaning: "Juice",
      pronunciation: "DYUS",
      usage: "From this lesson's word list: drinks.",
    },
    {
      term: "Tuba han lubi / Tubig han lubi",
      meaning: "Coconut water",
      pronunciation: "TU-big han LU-bi",
      usage: "From this lesson's word list: drinks.",
    },
    {
      term: "Siday",
      meaning: "Soft drink",
      pronunciation: "si-DAY",
      usage: "From this lesson's word list: drinks.",
    },
    {
      term: "Pamahaw",
      meaning: "Breakfast",
      pronunciation: "pa-MA-haw",
      usage: "A meals and eating expression.",
      example: [
        {
          speaker: "",
          text: "Ano an imo pamahaw?",
          translation: "What is your breakfast?",
        },
      ],
    },
    {
      term: "Paniudto",
      meaning: "Lunch",
      pronunciation: "pa-ni-UD-to",
      usage: "A meals and eating expression.",
      example: [
        {
          speaker: "",
          text: "Nakaon kami hin paniudto.",
          translation: "We ate lunch.",
        },
      ],
    },
    {
      term: "Panihapon",
      meaning: "Dinner",
      pronunciation: "pa-ni-HA-pon",
      usage: "A meals and eating expression.",
      example: [
        {
          speaker: "",
          text: "Panihapon na.",
          translation: "It is time for dinner.",
        },
      ],
    },
    {
      term: "Pagkaon",
      meaning: "Food",
      pronunciation: "pag-ka-ON",
      usage: "A meals and eating expression.",
      example: [
        {
          speaker: "A",
          text: "Oo, karuyag ko hin utanon.",
          translation: "Yes, I want vegetables.",
        },
        {
          speaker: "B",
          text: "Lami an aton pagkaon.",
          translation: "Our food is delicious.",
        },
      ],
    },
    {
      term: "Kumaon",
      meaning: "To eat",
      pronunciation: "ku-ma-ON",
      usage: "A meals and eating expression.",
      example: [
        {
          speaker: "A",
          text: "Ano an imo karuyag kumaon?",
          translation: "What do you want to eat?",
        },
        {
          speaker: "B",
          text: "Karuyag ko hin kan-on ngan isda.",
          translation: "I want rice and fish.",
        },
      ],
    },
    {
      term: "Uminom",
      meaning: "To drink",
      pronunciation: "u-mi-NOM",
      usage: "A meals and eating expression.",
      example: [
        {
          speaker: "",
          text: "Karuyag ko uminom hin tubig.",
          translation: "I want to drink water.",
        },
      ],
    },
    {
      term: "Lami",
      meaning: "Delicious",
      pronunciation: "LA-mi",
      usage: "A meals and eating expression.",
      example: [
        {
          speaker: "A",
          text: "Oo, karuyag ko hin utanon.",
          translation: "Yes, I want vegetables.",
        },
        {
          speaker: "B",
          text: "Lami an aton pagkaon.",
          translation: "Our food is delicious.",
        },
      ],
    },
    {
      term: "Gutom",
      meaning: "Hungry",
      pronunciation: "GU-tom",
      usage: "A meals and eating expression.",
      example: [
        {
          speaker: "",
          text: "Gutom ako.",
          translation: "I am hungry.",
        },
      ],
    },
    {
      term: "Uhaw",
      meaning: "Thirsty",
      pronunciation: "U-haw",
      usage: "A meals and eating expression.",
      example: [
        {
          speaker: "A",
          text: "Uhaw ka ba?",
          translation: "Are you thirsty?",
        },
        {
          speaker: "B",
          text: "Oo, uhaw ako.",
          translation: "Yes, I am thirsty.",
        },
      ],
    },
    {
      term: "Busog",
      meaning: "Full (after eating)",
      pronunciation: "BU-sog",
      usage: "A meals and eating expression.",
      example: [
        {
          speaker: "",
          text: "Busog na ako.",
          translation: "I am already full.",
        },
      ],
    },
  ],
  greetings: [
    {
      term: "Pamahaw",
      meaning: "Breakfast",
      pronunciation: "pa-MA-haw",
      usage: "A meals and eating expression.",
      example: [
        {
          speaker: "",
          text: "Ano an imo pamahaw?",
          translation: "What is your breakfast?",
        },
      ],
    },
    {
      term: "Paniudto",
      meaning: "Lunch",
      pronunciation: "pa-ni-UD-to",
      usage: "A meals and eating expression.",
      example: [
        {
          speaker: "",
          text: "Nakaon kami hin paniudto.",
          translation: "We ate lunch.",
        },
      ],
    },
    {
      term: "Panihapon",
      meaning: "Dinner",
      pronunciation: "pa-ni-HA-pon",
      usage: "A meals and eating expression.",
      example: [
        {
          speaker: "",
          text: "Panihapon na.",
          translation: "It is time for dinner.",
        },
      ],
    },
    {
      term: "Pagkaon",
      meaning: "Food",
      pronunciation: "pag-ka-ON",
      usage: "A meals and eating expression.",
      example: [
        {
          speaker: "A",
          text: "Oo, karuyag ko hin utanon.",
          translation: "Yes, I want vegetables.",
        },
        {
          speaker: "B",
          text: "Lami an aton pagkaon.",
          translation: "Our food is delicious.",
        },
      ],
    },
    {
      term: "Kumaon",
      meaning: "To eat",
      pronunciation: "ku-ma-ON",
      usage: "A meals and eating expression.",
      example: [
        {
          speaker: "A",
          text: "Ano an imo karuyag kumaon?",
          translation: "What do you want to eat?",
        },
        {
          speaker: "B",
          text: "Karuyag ko hin kan-on ngan isda.",
          translation: "I want rice and fish.",
        },
      ],
    },
    {
      term: "Uminom",
      meaning: "To drink",
      pronunciation: "u-mi-NOM",
      usage: "A meals and eating expression.",
      example: [
        {
          speaker: "",
          text: "Karuyag ko uminom hin tubig.",
          translation: "I want to drink water.",
        },
      ],
    },
    {
      term: "Lami",
      meaning: "Delicious",
      pronunciation: "LA-mi",
      usage: "A meals and eating expression.",
      example: [
        {
          speaker: "A",
          text: "Oo, karuyag ko hin utanon.",
          translation: "Yes, I want vegetables.",
        },
        {
          speaker: "B",
          text: "Lami an aton pagkaon.",
          translation: "Our food is delicious.",
        },
      ],
    },
    {
      term: "Gutom",
      meaning: "Hungry",
      pronunciation: "GU-tom",
      usage: "A meals and eating expression.",
      example: [
        {
          speaker: "",
          text: "Gutom ako.",
          translation: "I am hungry.",
        },
      ],
    },
    {
      term: "Uhaw",
      meaning: "Thirsty",
      pronunciation: "U-haw",
      usage: "A meals and eating expression.",
      example: [
        {
          speaker: "A",
          text: "Uhaw ka ba?",
          translation: "Are you thirsty?",
        },
        {
          speaker: "B",
          text: "Oo, uhaw ako.",
          translation: "Yes, I am thirsty.",
        },
      ],
    },
    {
      term: "Busog",
      meaning: "Full (after eating)",
      pronunciation: "BU-sog",
      usage: "A meals and eating expression.",
      example: [
        {
          speaker: "",
          text: "Busog na ako.",
          translation: "I am already full.",
        },
      ],
    },
  ],
  patterns: [
    {
      label: "Pattern 1: Saying What You Want",
      pattern: "Karuyag ko hin + Food.",
      examples: [
        "Karuyag ko hin saging.",
        "Karuyag ko hin utanon.",
        "Karuyag ko hin tubig.",
      ],
    },
    {
      label: "Pattern 2: Saying What You Want to Drink",
      pattern: "Karuyag ko uminom hin + Drink.",
      examples: [
        "Karuyag ko uminom hin tubig.",
        "Karuyag ko uminom hin gatas.",
      ],
    },
    {
      label: "Pattern 3: Saying What You Like",
      pattern: "Naruruyag ako hin + Food.",
      examples: [
        "Naruruyag ako hin isda.",
        "Naruruyag ako hin mangga.",
      ],
    },
  ],
  sentences: [
    {
      text: "Gutom ako.",
      meaning: "I am hungry.",
      pronunciation: "GU-tom A-ko",
    },
    {
      text: "Uhaw ako.",
      meaning: "I am thirsty.",
      pronunciation: "U-haw A-ko",
    },
    {
      text: "Karuyag ko kumaon.",
      meaning: "I want to eat.",
      pronunciation: "ka-ru-YAG ko ku-ma-ON",
    },
    {
      text: "Karuyag ko uminom hin tubig.",
      meaning: "I want to drink water.",
      pronunciation: "ka-ru-YAG ko u-mi-NOM hin TU-big",
    },
    {
      text: "Naruruyag ako hin isda.",
      meaning: "I like fish.",
      pronunciation: "na-ru-RU-yag A-ko hin IS-da",
    },
    {
      text: "Naruruyag ako hin mangga.",
      meaning: "I like mangoes.",
      pronunciation: "na-ru-RU-yag A-ko hin MANG-ga",
    },
    {
      text: "Lami an pagkaon.",
      meaning: "The food is delicious.",
      pronunciation: "LA-mi an pag-ka-ON",
    },
    {
      text: "Ano an karuyag mo kumaon?",
      meaning: "What do you want to eat?",
      pronunciation: "A-no an ka-ru-YAG mo ku-ma-ON?",
    },
    {
      text: "Ano an karuyag mo imnon?",
      meaning: "What do you want to drink?",
      pronunciation: "A-no an ka-ru-YAG mo IM-non?",
    },
    {
      text: "Alayon, tagi ako hin tubig.",
      meaning: "Please give me water.",
      pronunciation: "A-la-yon, TA-gi A-ko hin TU-big",
    },
    {
      text: "Diri ako naruruyag hin maanghang nga pagkaon.",
      meaning: "I do not like spicy food.",
      pronunciation: "DI-ri A-ko na-ru-RU-yag hin ma-ang-HANG nga pag-ka-ON",
    },
    {
      text: "Busog na ako.",
      meaning: "I am already full.",
      pronunciation: "BU-sog na A-ko",
    },
    {
      text: "Nakaon ako hin kan-on ngan isda.",
      meaning: "I ate rice and fish.",
    },
    {
      text: "Karuyag ko hin saging.",
      meaning: "I want a banana.",
    },
    {
      text: "May mangga kami.",
      meaning: "We have mangoes.",
    },
    {
      text: "Napalit ako hin kamatis.",
      meaning: "I bought tomatoes.",
    },
    {
      text: "Karuyag ko hin utanon.",
      meaning: "I want vegetables.",
    },
    {
      text: "Karuyag ko hin tubig.",
      meaning: "I want water.",
    },
    {
      text: "Karuyag ko uminom hin gatas.",
      meaning: "I want to drink milk.",
    },
    {
      text: "Nainom ako hin kape.",
      meaning: "I drank coffee.",
    },
    {
      text: "Diri ako naruruyag hin baboy.",
      meaning: "I do not like pork.",
    },
    {
      text: "Lami an mangga.",
      meaning: "Mangoes are delicious.",
    },
    {
      text: "Ano an imo pamahaw?",
      meaning: "What is your breakfast?",
    },
    {
      text: "Nakaon kami hin paniudto.",
      meaning: "We ate lunch.",
    },
    {
      text: "Panihapon na.",
      meaning: "It is time for dinner.",
    },
  ],
  conversations: [
    {
      title: "Conversation 1: Talking About Food",
      lines: [
        {
          speaker: "Ana",
          text: "Ano an imo karuyag kumaon?",
          translation: "What do you want to eat?",
        },
        {
          speaker: "Ben",
          text: "Karuyag ko hin kan-on ngan isda.",
          translation: "I want rice and fish.",
        },
        {
          speaker: "Ana",
          text: "Karuyag mo liwat hin utanon?",
          translation: "Do you also want vegetables?",
        },
        {
          speaker: "Ben",
          text: "Oo, karuyag ko hin utanon.",
          translation: "Yes, I want vegetables.",
        },
        {
          speaker: "Ana",
          text: "Lami an aton pagkaon.",
          translation: "Our food is delicious.",
        },
      ],
      situation: "Ana and Ben: Talking About Food.",
    },
    {
      title: "Conversation 2: Asking for a Drink",
      lines: [
        {
          speaker: "Mia",
          text: "Uhaw ka ba?",
          translation: "Are you thirsty?",
        },
        {
          speaker: "Carlo",
          text: "Oo, uhaw ako.",
          translation: "Yes, I am thirsty.",
        },
        {
          speaker: "Mia",
          text: "Ano an karuyag mo imnon?",
          translation: "What do you want to drink?",
        },
        {
          speaker: "Carlo",
          text: "Karuyag ko hin tubig.",
          translation: "I want water.",
        },
        {
          speaker: "Mia",
          text: "Tagi ko ikaw hin tubig.",
          translation: "I will give you water.",
        },
      ],
      situation: "Mia and Carlo: Asking for a Drink.",
    },
    {
      title: "Conversation 3: At a Food Stall",
      lines: [
        {
          speaker: "Customer",
          text: "Alayon, may pagkaon pa ba?",
          translation: "Excuse me, is there still food available?",
        },
        {
          speaker: "Vendor",
          text: "Oo, may kan-on ngan manok pa.",
          translation: "Yes, there is still rice and chicken.",
        },
        {
          speaker: "Customer",
          text: "Pira ini?",
          translation: "How much is this?",
          audioUrl: require("../../assets/audio/Lesson Waray/pira ini.aac"),
        },
        {
          speaker: "Vendor",
          text: "Singkwenta pesos.",
          translation: "Fifty pesos.",
        },
        {
          speaker: "Customer",
          text: "Sige, paliton ko ini.",
          translation: "Okay, I will buy this.",
        },
      ],
      situation: "Customer and Vendor: At a Food Stall.",
    },
  ],
  languageNotes: [
    {
      title: "A. Naming Common Foods",
      body: [
        "Start by learning the names of foods commonly found in Filipino households and local markets.",
      ],
      examples: [
        {
          text: "Kan-on",
          meaning: "Cooked rice",
        },
        {
          text: "Isda",
          meaning: "Fish",
        },
        {
          text: "Manok",
          meaning: "Chicken",
        },
        {
          text: "Itlog",
          meaning: "Egg",
        },
        {
          text: "Utanon",
          meaning: "Vegetables",
        },
        {
          text: "Tinapay",
          meaning: "Bread",
        },
      ],
    },
    {
      title: "A. Naming Common Foods",
      body: [
        "Remember the difference between bugas and kan-on:",
        "• Bugas refers to uncooked rice.",
        "• Kan-on refers to cooked rice.",
      ],
      examples: [
        {
          text: "Nakaon ako hin kan-on ngan isda.",
          meaning: "I ate rice and fish.",
        },
      ],
    },
    {
      title: "B. Talking About Fruits and Vegetables",
      body: [
        "Fruits and vegetables are common topics when talking about meals and food preferences.",
      ],
      examples: [
        {
          text: "Karuyag ko hin saging.",
          meaning: "I want a banana.",
        },
        {
          text: "May mangga kami.",
          meaning: "We have mangoes.",
        },
        {
          text: "Napalit ako hin kamatis.",
          meaning: "I bought tomatoes.",
        },
        {
          text: "Karuyag ko hin utanon.",
          meaning: "I want vegetables.",
        },
      ],
    },
    {
      title: "C. Talking About Drinks",
      body: [
        "You can use simple expressions to ask for or talk about drinks.",
      ],
      examples: [
        {
          text: "Karuyag ko hin tubig.",
          meaning: "I want water.",
        },
        {
          text: "Karuyag ko uminom hin gatas.",
          meaning: "I want to drink milk.",
        },
        {
          text: "Nainom ako hin kape.",
          meaning: "I drank coffee.",
        },
      ],
    },
    {
      title: "C. Talking About Drinks",
      body: [
        "To ask someone what they want to drink, say:",
      ],
      examples: [
        {
          text: "Ano an karuyag mo imnon?",
          meaning: "What do you want to drink?",
        },
      ],
    },
    {
      title: "D. Expressing Food Preferences",
      body: [
        "You can talk about the food you like or do not like.",
      ],
      examples: [
        {
          text: "Naruruyag ako hin isda.",
          meaning: "I like fish.",
        },
        {
          text: "Diri ako naruruyag hin baboy.",
          meaning: "I do not like pork.",
        },
        {
          text: "Lami an mangga.",
          meaning: "Mangoes are delicious.",
        },
        {
          text: "Lami an pagkaon.",
          meaning: "The food is delicious.",
        },
      ],
    },
    {
      title: "E. Talking About Meals",
      body: [
        "The following words refer to common meals:",
      ],
      examples: [
        {
          text: "Pamahaw",
          meaning: "Breakfast",
        },
        {
          text: "Paniudto",
          meaning: "Lunch",
        },
        {
          text: "Panihapon",
          meaning: "Dinner",
        },
        {
          text: "Ano an imo pamahaw?",
          meaning: "What is your breakfast?",
        },
        {
          text: "Nakaon kami hin paniudto.",
          meaning: "We ate lunch.",
        },
        {
          text: "Panihapon na.",
          meaning: "It is time for dinner.",
        },
      ],
    },
    {
      title: "D. Drinks",
      body: [
        "Note: Some drink names may be borrowed or expressed differently in everyday speech. Use the terms familiar to your local evaluator and intended learners.",
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
