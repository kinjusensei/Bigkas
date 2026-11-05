import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 6 — imported from "Lesson Plan.pdf", pages 729–743.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.

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
  expressionGroups: [
    {
      title: "A. Common Foods",
      items: [
        {
          term: "Kan-on",
          meaning: "Rice (cooked)",
          pronunciation: "kan-ON",
        },
        {
          term: "Bugas",
          meaning: "Uncooked rice",
          pronunciation: "BU-gas",
        },
        {
          term: "Tinapay",
          meaning: "Bread",
          pronunciation: "ti-NA-pay",
        },
        {
          term: "Isda",
          meaning: "Fish",
          pronunciation: "IS-da",
        },
        {
          term: "Karne",
          meaning: "Meat",
          pronunciation: "KAR-ne",
        },
        {
          term: "Manok",
          meaning: "Chicken",
          pronunciation: "MA-nok",
        },
        {
          term: "Baboy",
          meaning: "Pork",
          pronunciation: "BA-boy",
        },
        {
          term: "Karne han baka",
          meaning: "Beef",
          pronunciation: "KAR-ne han BA-ka",
        },
        {
          term: "Itlog",
          meaning: "Egg",
          pronunciation: "IT-log",
        },
        {
          term: "Sabaw",
          meaning: "Soup",
          pronunciation: "SA-baw",
        },
        {
          term: "Utanon",
          meaning: "Vegetable",
          pronunciation: "u-TA-non",
        },
        {
          term: "Asin",
          meaning: "Salt",
          pronunciation: "A-sin",
        },
        {
          term: "Asukar",
          meaning: "Sugar",
          pronunciation: "a-SU-kar",
        },
        {
          term: "Lana",
          meaning: "Oil",
          pronunciation: "LA-na",
        },
      ],
    },
    {
      title: "B. Fruits",
      items: [
        {
          term: "Saging",
          meaning: "Banana",
          pronunciation: "SA-ging",
        },
        {
          term: "Mangga",
          meaning: "Mango",
          pronunciation: "MANG-ga",
        },
        {
          term: "Lubi",
          meaning: "Coconut",
          pronunciation: "LU-bi",
        },
        {
          term: "Kapayas",
          meaning: "Papaya",
          pronunciation: "ka-PA-yas",
        },
        {
          term: "Pinya",
          meaning: "Pineapple",
          pronunciation: "PIN-ya",
        },
        {
          term: "Pakwan",
          meaning: "Watermelon",
          pronunciation: "PAK-wan",
        },
        {
          term: "Bayabas",
          meaning: "Guava",
          pronunciation: "ba-YA-bas",
        },
        {
          term: "Kahel",
          meaning: "Orange",
          pronunciation: "ka-HEL",
        },
        {
          term: "Kalamansi",
          meaning: "Calamansi",
          pronunciation: "ka-la-MAN-si",
        },
        {
          term: "Nangka",
          meaning: "Jackfruit",
          pronunciation: "NANG-ka",
        },
      ],
    },
    {
      title: "C. Vegetables",
      items: [
        {
          term: "Talong",
          meaning: "Eggplant",
          pronunciation: "TA-long",
        },
        {
          term: "Kamatis",
          meaning: "Tomato",
          pronunciation: "ka-MA-tis",
        },
        {
          term: "Sibuyas",
          meaning: "Onion",
          pronunciation: "si-BU-yas",
        },
        {
          term: "Ahos",
          meaning: "Garlic",
          pronunciation: "A-hos",
        },
        {
          term: "Luya",
          meaning: "Ginger",
          pronunciation: "LU-ya",
        },
        {
          term: "Kalabasa",
          meaning: "Squash",
          pronunciation: "ka-la-BA-sa",
        },
        {
          term: "Kamote",
          meaning: "Sweet potato",
          pronunciation: "ka-MO-te",
        },
        {
          term: "Ampalaya",
          meaning: "Bitter gourd",
          pronunciation: "am-pa-LA-ya",
        },
        {
          term: "Sitaw",
          meaning: "String beans",
          pronunciation: "SI-taw",
        },
        {
          term: "Repolyo",
          meaning: "Cabbage",
          pronunciation: "re-POL-yo",
        },
      ],
    },
    {
      title: "D. Drinks",
      intro: [
        "Note: Some drink names may be borrowed or expressed differently in everyday speech. Use the terms familiar to your local evaluator and intended learners.",
      ],
      items: [
        {
          term: "Tubig",
          meaning: "Water",
          pronunciation: "TU-big",
        },
        {
          term: "Gatas",
          meaning: "Milk",
          pronunciation: "GA-tas",
        },
        {
          term: "Kape",
          meaning: "Coffee",
          pronunciation: "KA-pe",
        },
        {
          term: "Tsaa",
          meaning: "Tea",
          pronunciation: "TSA-a",
        },
        {
          term: "Dyus",
          meaning: "Juice",
          pronunciation: "DYUS",
        },
        {
          term: "Tuba han lubi / Tubig han lubi",
          meaning: "Coconut water",
          pronunciation: "TU-big han LU-bi",
        },
        {
          term: "Siday",
          meaning: "Soft drink",
          pronunciation: "si-DAY",
        },
      ],
    },
    {
      title: "E. Meals and Eating Expressions",
      items: [
        {
          term: "Pamahaw",
          meaning: "Breakfast",
          pronunciation: "pa-MA-haw",
        },
        {
          term: "Paniudto",
          meaning: "Lunch",
          pronunciation: "pa-ni-UD-to",
        },
        {
          term: "Panihapon",
          meaning: "Dinner",
          pronunciation: "pa-ni-HA-pon",
        },
        {
          term: "Pagkaon",
          meaning: "Food",
          pronunciation: "pag-ka-ON",
        },
        {
          term: "Kumaon",
          meaning: "To eat",
          pronunciation: "ku-ma-ON",
        },
        {
          term: "Uminom",
          meaning: "To drink",
          pronunciation: "u-mi-NOM",
        },
        {
          term: "Lami",
          meaning: "Delicious",
          pronunciation: "LA-mi",
        },
        {
          term: "Gutom",
          meaning: "Hungry",
          pronunciation: "GU-tom",
        },
        {
          term: "Uhaw",
          meaning: "Thirsty",
          pronunciation: "U-haw",
        },
        {
          term: "Busog",
          meaning: "Full (after eating)",
          pronunciation: "BU-sog",
        },
      ],
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
  ],
  situationsTitle: "Useful Phrases and Sentences",
  situationGroups: [
    {
      title: "Useful Phrases and Sentences",
      items: [
        {
          term: "Gutom ako.",
          meaning: "I am hungry.",
          pronunciation: "GU-tom A-ko",
        },
        {
          term: "Uhaw ako.",
          meaning: "I am thirsty.",
          pronunciation: "U-haw A-ko",
        },
        {
          term: "Karuyag ko kumaon.",
          meaning: "I want to eat.",
          pronunciation: "ka-ru-YAG ko ku-ma-ON",
        },
        {
          term: "Karuyag ko uminom hin tubig.",
          meaning: "I want to drink water.",
          pronunciation: "ka-ru-YAG ko u-mi-NOM hin TU-big",
        },
        {
          term: "Naruruyag ako hin isda.",
          meaning: "I like fish.",
          pronunciation: "na-ru-RU-yag A-ko hin IS-da",
        },
        {
          term: "Naruruyag ako hin mangga.",
          meaning: "I like mangoes.",
          pronunciation: "na-ru-RU-yag A-ko hin MANG-ga",
        },
        {
          term: "Lami an pagkaon.",
          meaning: "The food is delicious.",
          pronunciation: "LA-mi an pag-ka-ON",
        },
        {
          term: "Ano an karuyag mo kumaon?",
          meaning: "What do you want to eat?",
          pronunciation: "A-no an ka-ru-YAG mo ku-ma-ON?",
        },
        {
          term: "Ano an karuyag mo imnon?",
          meaning: "What do you want to drink?",
          pronunciation: "A-no an ka-ru-YAG mo IM-non?",
        },
        {
          term: "Alayon, tagi ako hin tubig.",
          meaning: "Please give me water.",
          pronunciation: "A-la-yon, TA-gi A-ko hin TU-big",
        },
        {
          term: "Diri ako naruruyag hin maanghang nga pagkaon.",
          meaning: "I do not like spicy food.",
          pronunciation: "DI-ri A-ko na-ru-RU-yag hin ma-ang-HANG nga pag-ka-ON",
        },
        {
          term: "Busog na ako.",
          meaning: "I am already full.",
          pronunciation: "BU-sog na A-ko",
        },
      ],
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
    },
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
        ],
        answerKey: "B",
      },
    ],
  },
  extraActivities: [
    {
      title: "Match the Food",
      kind: "match",
      instructions: "Match each English word with its correct Waray equivalent.",
      items: [
        "Rice (cooked)",
        "Fish",
        "Chicken",
        "Banana",
        "Water",
      ],
      choices: [
        "Tubig",
        "Saging",
        "Manok",
        "Kan-on",
        "Isda",
      ],
    },
    {
      title: "Identify the Correct Translation",
      kind: "rewrite",
      instructions: "Choose the correct Waray word.",
      items: [
        "What is the Waray word for mango?\nA. Mangga\nB. Nangka\nC. Lubi",
        "What is the Waray word for egg?\nA. Asin\nB. Itlog\nC. Lana",
        "What is the Waray word for milk?\nA. Kape\nB. Tsaa\nC. Gatas",
        "What does busog mean?\nA. Hungry\nB. Full\nC. Thirsty",
      ],
    },
    {
      title: "Complete the Sentences",
      kind: "fill",
      instructions: "Choose the correct word to complete each sentence.",
      items: [
        "______ ako. (I am hungry.)\nA. Gutom\nB. Uhaw\nC. Busog",
        "Karuyag ko hin ______. (I want water.)\nA. tubig\nB. mangga\nC. manok",
        "Lami an ______. (The food is delicious.)\nA. oras\nB. pagkaon\nC. adlaw",
      ],
    },
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
  rewards: {
    items: [
      {
        section: "vocabulary",
        label: "Vocabulary Practice + Phrase Recognition",
        xp: 20,
      },
      {
        section: "conversation",
        label: "Guided Conversation + Practice Activities",
        xp: 25,
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
  },
  expectedOutcomes: [
    "Identify common foods, fruits, vegetables, and drinks in Waray.",
    "Recognize words associated with meals and eating.",
    "Express basic food preferences.",
    "Ask and answer simple questions about food.",
    "Use basic expressions when ordering food or requesting drinks.",
  ],
};
