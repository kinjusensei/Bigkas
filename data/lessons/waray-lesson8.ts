import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 8 — imported from "Lesson Plan.pdf", pages 758–773.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
// Fields not given by the plan are INFERRED from this lesson's own content and
// listed in docs/waray-inferred-keys.md: situation, usage, example, pattern, fill-in, arrange, fourth option, speaking phrase, target pitch and mood, respelling, example situation, pronunciation tip, completion requirement.
// The practice answers are INFERRED drafts, not from the PDF. See
// docs/waray-draft-answer-keys.md for each answer and how it was found.

export const warayLesson8: StructuredLesson = {
  lessonId: "waray_8",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 8,
  title: "Animals and Nature",
  level: "Beginner",
  unit: "Unit 2 – Everyday Vocabulary",
  estimatedDuration: "30–40 minutes",
  prerequisite: "Lessons 1–7",
  intro: [
    "Animals and nature are part of our everyday surroundings. We see birds in trees, fish in rivers and seas, and different plants and flowers around our homes and communities.",
    "In this lesson, you will learn common Waray words for animals, plants, and natural elements. You will also practice describing animals and talking about the environment using simple sentences.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify common animals in Waray.",
    "Recognize words for plants and elements of nature.",
    "Describe familiar animals using simple Waray sentences.",
    "Ask and answer basic questions about animals and nature.",
    "Use common nature-related vocabulary in everyday conversations.",
  ],
  assessment: {
    instructions: "Choose the correct answer. Each question is worth one point.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What is the Waray word for dog?",
        options: [
          {
            key: "A",
            text: "Kuring",
          },
          {
            key: "B",
            text: "Aso",
          },
          {
            key: "C",
            text: "Baka",
          },
          {
            key: "D",
            text: "Leaf",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "What does tamsi mean?",
        options: [
          {
            key: "A",
            text: "Bird",
          },
          {
            key: "B",
            text: "Fish",
          },
          {
            key: "C",
            text: "Goat",
          },
          {
            key: "D",
            text: "Kuring",
          },
        ],
        answerKey: "A",
      },
      {
        id: 3,
        prompt: "What is the Waray word for tree?",
        options: [
          {
            key: "A",
            text: "Bulak",
          },
          {
            key: "B",
            text: "Dahon",
          },
          {
            key: "C",
            text: "Kahoy",
          },
          {
            key: "D",
            text: "Kuring",
          },
        ],
        answerKey: "C",
      },
      {
        id: 4,
        prompt: "What does ulan mean?",
        options: [
          {
            key: "A",
            text: "Wind",
          },
          {
            key: "B",
            text: "Rain",
          },
          {
            key: "C",
            text: "Sun",
          },
          {
            key: "D",
            text: "Kuring",
          },
        ],
        answerKey: "B",
      },
      {
        id: 5,
        prompt: "What is the Waray word for mountain?",
        options: [
          {
            key: "A",
            text: "Bukid",
          },
          {
            key: "B",
            text: "Dagat",
          },
          {
            key: "C",
            text: "Salog",
          },
          {
            key: "D",
            text: "Kuring",
          },
        ],
        answerKey: "A",
      },
      {
        id: 6,
        prompt: "What does kanding mean?",
        options: [
          {
            key: "A",
            text: "Cow",
          },
          {
            key: "B",
            text: "Goat",
          },
          {
            key: "C",
            text: "Horse",
          },
          {
            key: "D",
            text: "Bulak",
          },
        ],
        answerKey: "B",
      },
      {
        id: 7,
        prompt: "How do you say \"The bird is flying\"?",
        options: [
          {
            key: "A",
            text: "Naglupad an tamsi.",
          },
          {
            key: "B",
            text: "Dako an aso.",
          },
          {
            key: "C",
            text: "Gutiay an kuring.",
          },
          {
            key: "D",
            text: "Kuring",
          },
        ],
        answerKey: "A",
      },
      {
        id: 8,
        prompt: "What does dahon mean?",
        options: [
          {
            key: "A",
            text: "Flower",
          },
          {
            key: "B",
            text: "Leaf",
          },
          {
            key: "C",
            text: "Root",
          },
          {
            key: "D",
            text: "Bukid",
          },
        ],
        answerKey: "B",
      },
      {
        id: 9,
        prompt: "What is the Waray word for sea?",
        options: [
          {
            key: "A",
            text: "Langit",
          },
          {
            key: "B",
            text: "Dagat",
          },
          {
            key: "C",
            text: "Bukid",
          },
          {
            key: "D",
            text: "Kuring",
          },
        ],
        answerKey: "B",
      },
      {
        id: 10,
        prompt: "What does Nag-uuran mean?",
        options: [
          {
            key: "A",
            text: "It is raining.",
          },
          {
            key: "B",
            text: "It is windy.",
          },
          {
            key: "C",
            text: "It is sunny.",
          },
          {
            key: "D",
            text: "Leaf",
          },
        ],
        answerKey: "A",
      },
    ],
  },
  extraActivities: [
    {
      title: "Translate into Waray",
      kind: "translate",
      instructions: "Translate the following sentences into Waray.",
      items: [
        "This is a dog.",
        "I like animals.",
        "The bird is flying.",
        "The flower is beautiful.",
        "It is raining.",
      ],
    },
    {
      title: "Describe an Animal",
      kind: "open",
      instructions: "Choose an animal and describe it using at least three Waray expressions.\nExample:",
      items: [
        "Animal: Aso",
        "Size: Dako",
        "Action: Nagdadalagan",
        "Sentence: Dako an aso. Nagdadalagan an aso.",
      ],
      note: "You may choose a pet, farm animal, or wild animal.",
    },
  ],
  matchActivity: {
    title: "Match the Animals",
    instructions: "Match each English animal with its correct Waray equivalent.",
    pairs: [
      {
        id: "1",
        term: "Dog",
        answer: "Aso",
      },
      {
        id: "2",
        term: "Cat",
        answer: "Kuring",
      },
      {
        id: "3",
        term: "Bird",
        answer: "Tamsi",
      },
      {
        id: "4",
        term: "Cow",
        answer: "Baka",
      },
      {
        id: "5",
        term: "Goat",
        answer: "Kanding",
      },
    ],
  },
  choiceActivity: {
    title: "Identify the Nature Vocabulary",
    questions: [
      {
        id: 1,
        prompt: "Tree",
        options: [
          {
            key: "A",
            text: "Kahoy",
          },
          {
            key: "B",
            text: "Bulak",
          },
          {
            key: "C",
            text: "Dahon",
          },
        ],
        answerKey: "A",
        title: "Identify the Nature Vocabulary",
        instructions: "Choose the correct Waray translation.",
      },
      {
        id: 2,
        prompt: "Rain",
        options: [
          {
            key: "A",
            text: "Hangin",
          },
          {
            key: "B",
            text: "Ulan",
          },
          {
            key: "C",
            text: "Dagat",
          },
        ],
        answerKey: "B",
        title: "Identify the Nature Vocabulary",
        instructions: "Choose the correct Waray translation.",
      },
      {
        id: 3,
        prompt: "Mountain",
        options: [
          {
            key: "A",
            text: "Salog",
          },
          {
            key: "B",
            text: "Langit",
          },
          {
            key: "C",
            text: "Bukid",
          },
        ],
        answerKey: "C",
        title: "Identify the Nature Vocabulary",
        instructions: "Choose the correct Waray translation.",
      },
      {
        id: 4,
        prompt: "Flower",
        options: [
          {
            key: "A",
            text: "Bulak",
          },
          {
            key: "B",
            text: "Liso",
          },
          {
            key: "C",
            text: "Gamut",
          },
        ],
        answerKey: "A",
        title: "Identify the Nature Vocabulary",
        instructions: "Choose the correct Waray translation.",
      },
      {
        id: 5,
        prompt: "Dako an ______. (The dog is big.)",
        options: [
          {
            key: "A",
            text: "aso",
          },
          {
            key: "B",
            text: "ulan",
          },
          {
            key: "C",
            text: "bulak",
          },
        ],
        answerKey: "A",
        title: "Complete the Sentences",
        instructions: "Choose the correct word to complete each sentence.",
      },
      {
        id: 6,
        prompt: "Berde an ______. (The leaf is green.)",
        options: [
          {
            key: "A",
            text: "dagat",
          },
          {
            key: "B",
            text: "dahon",
          },
          {
            key: "C",
            text: "bato",
          },
        ],
        answerKey: "B",
        title: "Complete the Sentences",
        instructions: "Choose the correct word to complete each sentence.",
      },
      {
        id: 7,
        prompt: "Nag-uuran. (It is ______.)",
        options: [
          {
            key: "A",
            text: "windy",
          },
          {
            key: "B",
            text: "raining",
          },
          {
            key: "C",
            text: "sunny",
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
      name: "Nature Explorer Badge",
      description: "Awarded to learners who successfully identify common animals and elements of nature and use basic Waray expressions to describe their surroundings.",
    },
    completionRequirement: "Obtain at least 70% in the lesson assessment. Learners may repeat the activities and assessment if they do not meet the requirement.",
  },
  expectedOutcomes: [
    "Identify common animals in Waray.",
    "Recognize vocabulary related to plants and nature.",
    "Describe familiar animals using simple sentences.",
    "Identify common natural elements such as the sun, rain, sea, and mountains.",
    "Use basic nature-related expressions in everyday conversations.",
  ],
  fillInBlanks: {
    title: "Fill in the Blanks",
    instructions: "Complete each sentence using the appropriate Waray word.",
    items: [
      {
        id: "1",
        sentence: "Ano ini nga ___?",
        hint: "What animal is this?",
        answer: "hayop",
        wordBank: [
          "Makusog",
          "hayop",
          "Dagat",
          "Kagurangan",
        ],
      },
      {
        id: "2",
        sentence: "May ___ ako.",
        hint: "I have a cat.",
        answer: "kuring",
        wordBank: [
          "Gamut",
          "Hulmigas",
          "Kabayo",
          "kuring",
        ],
      },
      {
        id: "3",
        sentence: "Naglupad an ___.",
        hint: "The bird is flying.",
        answer: "tamsi",
        wordBank: [
          "Pasayan",
          "Baka",
          "Tuna",
          "tamsi",
        ],
      },
      {
        id: "4",
        sentence: "Aada ha tubig an ___.",
        hint: "The fish is in the water.",
        answer: "isda",
        wordBank: [
          "Halas",
          "Ihalas",
          "isda",
          "Malaksi",
        ],
      },
      {
        id: "5",
        sentence: "Dako an ___.",
        hint: "The dog is big.",
        answer: "aso",
        wordBank: [
          "Bulan",
          "Alimango",
          "aso",
          "Bitoon",
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
          "ini",
          "hayop",
          "Ano",
          "nga",
        ],
        answer: [
          "Ano",
          "ini",
          "nga",
          "hayop",
        ],
        display: "Ano ini nga hayop?",
      },
      {
        id: "2",
        words: [
          "ako",
          "May",
          "kuring",
        ],
        answer: [
          "May",
          "kuring",
          "ako",
        ],
        display: "May kuring ako.",
      },
      {
        id: "3",
        words: [
          "tamsi",
          "an",
          "Naglupad",
        ],
        answer: [
          "Naglupad",
          "an",
          "tamsi",
        ],
        display: "Naglupad an tamsi.",
      },
      {
        id: "4",
        words: [
          "ha",
          "isda",
          "an",
          "tubig",
          "Aada",
        ],
        answer: [
          "Aada",
          "ha",
          "tubig",
          "an",
          "isda",
        ],
        display: "Aada ha tubig an isda.",
      },
      {
        id: "5",
        words: [
          "an",
          "Dako",
          "aso",
        ],
        answer: [
          "Dako",
          "an",
          "aso",
        ],
        display: "Dako an aso.",
      },
    ],
  },
  speaking: {
    title: "Speaking Practice",
    instructions: "Read the following sentences aloud.",
    note: "Learners should listen to the model pronunciation before recording their own voice.",
    practiceLessonId: "waray_8",
    phrases: [
      {
        id: "1",
        text: "Ano ini nga hayop?",
        respelling: "A-no I-ni nga HA-yop?",
        meaning: "What animal is this?",
      },
      {
        id: "2",
        text: "Naglupad an tamsi.",
        respelling: "nag-LU-pad an TAM-si",
        meaning: "The bird is flying.",
      },
      {
        id: "3",
        text: "Naruruyag ako hin mga hayop.",
        respelling: "na-ru-RU-yag A-ko hin ma-NGA HA-yop",
        meaning: "I like animals.",
      },
      {
        id: "4",
        text: "Nasirang an adlaw.",
        respelling: "na-SI-rang an AD-law",
        meaning: "The sun is shining.",
      },
      {
        id: "5",
        text: "Nadalagan an aso.",
        respelling: "na-da-la-gan an a-so",
        meaning: "The dog is running.",
      },
      {
        id: "6",
        text: "May mga bulak ha hardin.",
        respelling: "may ma-nga bu-lak ha har-din",
        meaning: "There are flowers in the garden.",
      },
      {
        id: "7",
        text: "Dako an bukid.",
        respelling: "da-ko an bu-kid",
        meaning: "The mountain is big.",
      },
    ],
  },
  exampleSituation: {
    description: "Imagine this situation from the lesson: Talking About Pets.",
    lead: "You can begin by saying:",
    line: "May hayop ka ba ha balay?",
    translation: "Do you have an animal at home?",
  },
  vocabularyIntro: "Learn the following words and expressions before proceeding to the activities.",
  pronunciationTip: "Read each syllable clearly. Avoid rushing through longer expressions.",
  selfIntroIntro: "Use these patterns and phrases from the lesson.",
  vocabulary: [
    {
      term: "Hayop",
      meaning: "Animal",
      pronunciation: "HA-yop",
      usage: "A common animal.",
      example: [
        {
          speaker: "A",
          text: "May hayop ka ba ha balay?",
          translation: "Do you have an animal at home?",
        },
        {
          speaker: "B",
          text: "Oo, may kuring ako.",
          translation: "Yes, I have a cat.",
        },
      ],
    },
    {
      term: "Aso",
      meaning: "Dog",
      pronunciation: "A-so",
      usage: "A common animal.",
      example: [
        {
          speaker: "",
          text: "Aso ini.",
          translation: "This is a dog.",
        },
      ],
    },
    {
      term: "Kuring",
      meaning: "Cat",
      pronunciation: "KU-ring",
      usage: "A common animal.",
      example: [
        {
          speaker: "A",
          text: "Oo, may kuring ako.",
          translation: "Yes, I have a cat.",
        },
        {
          speaker: "B",
          text: "Ano an kolor han imo kuring?",
          translation: "What is the color of your cat?",
        },
      ],
    },
    {
      term: "Tamsi",
      meaning: "Bird",
      pronunciation: "TAM-si",
      usage: "A common animal.",
      example: [
        {
          speaker: "",
          text: "Naglupad an tamsi.",
          translation: "The bird is flying.",
        },
      ],
    },
    {
      term: "Manok",
      meaning: "Chicken",
      pronunciation: "MA-nok",
      usage: "A common animal.",
    },
    {
      term: "Pato",
      meaning: "Duck",
      pronunciation: "PA-to",
      usage: "A common animal.",
    },
    {
      term: "Baboy",
      meaning: "Pig",
      pronunciation: "BA-boy",
      usage: "A common animal.",
    },
    {
      term: "Baka",
      meaning: "Cow",
      pronunciation: "BA-ka",
      usage: "A common animal.",
      example: [
        {
          speaker: "",
          text: "Dako an baka.",
          translation: "The cow is big.",
        },
      ],
    },
    {
      term: "Kanding",
      meaning: "Goat",
      pronunciation: "KAN-ding",
      usage: "A common animal.",
    },
    {
      term: "Kabayo",
      meaning: "Horse",
      pronunciation: "ka-BA-yo",
      usage: "A common animal.",
      example: [
        {
          speaker: "A",
          text: "Ano ito nga hayop?",
          translation: "What animal is that?",
        },
        {
          speaker: "B",
          text: "Kabayo ito.",
          translation: "That is a horse.",
        },
      ],
    },
    {
      term: "Kabaw",
      meaning: "Carabao",
      pronunciation: "KA-baw",
      usage: "A common animal.",
      example: [
        {
          speaker: "",
          text: "Makusog an kabaw.",
          translation: "The carabao is strong.",
        },
      ],
    },
    {
      term: "Unggoy",
      meaning: "Monkey",
      pronunciation: "UN-goy",
      usage: "A common animal.",
    },
    {
      term: "Halas",
      meaning: "Snake",
      pronunciation: "HA-las",
      usage: "A common animal.",
    },
    {
      term: "Pakô",
      meaning: "Frog",
      pronunciation: "pa-KO",
      usage: "A common animal.",
    },
    {
      term: "Alibangbang",
      meaning: "Butterfly",
      pronunciation: "a-li-bang-BANG",
      usage: "A common animal.",
    },
    {
      term: "Putyukan",
      meaning: "Bee",
      pronunciation: "put-YU-kan",
      usage: "A common animal.",
    },
    {
      term: "Hulmigas",
      meaning: "Ant",
      pronunciation: "hul-MI-gas",
      usage: "A common animal.",
    },
    {
      term: "Ilaga",
      meaning: "Rat",
      pronunciation: "i-LA-ga",
      usage: "A common animal.",
    },
    {
      term: "Isda",
      meaning: "Fish",
      pronunciation: "IS-da",
      usage: "From this lesson's word list: sea and water animals.",
      example: [
        {
          speaker: "",
          text: "Aada ha tubig an isda.",
          translation: "The fish is in the water.",
        },
      ],
    },
    {
      term: "Pating",
      meaning: "Shark",
      pronunciation: "PA-ting",
      usage: "From this lesson's word list: sea and water animals.",
    },
    {
      term: "Alimango",
      meaning: "Crab",
      pronunciation: "a-li-MANG-go",
      usage: "From this lesson's word list: sea and water animals.",
    },
    {
      term: "Pasayan",
      meaning: "Shrimp",
      pronunciation: "pa-SA-yan",
      usage: "From this lesson's word list: sea and water animals.",
    },
    {
      term: "Kugita",
      meaning: "Octopus",
      pronunciation: "ku-GI-ta",
      usage: "From this lesson's word list: sea and water animals.",
    },
    {
      term: "Bao",
      meaning: "Turtle",
      pronunciation: "BA-o",
      usage: "From this lesson's word list: sea and water animals.",
    },
    {
      term: "Balyena",
      meaning: "Whale",
      pronunciation: "bal-YE-na",
      usage: "From this lesson's word list: sea and water animals.",
    },
    {
      term: "Dolpin",
      meaning: "Dolphin",
      pronunciation: "DOL-pin",
      usage: "From this lesson's word list: sea and water animals.",
    },
    {
      term: "Dikya",
      meaning: "Jellyfish",
      pronunciation: "DIK-ya",
      usage: "From this lesson's word list: sea and water animals.",
    },
    {
      term: "Kabhang",
      meaning: "Shell",
      pronunciation: "KAB-hang",
      usage: "From this lesson's word list: sea and water animals.",
    },
    {
      term: "Tanom",
      meaning: "Plant",
      pronunciation: "TA-nom",
      usage: "From this lesson's word list: plants and flowers.",
      example: [
        {
          speaker: "",
          text: "Ano ito nga tanom?",
          translation: "What is that plant?",
        },
      ],
    },
    {
      term: "Kahoy",
      meaning: "Tree",
      pronunciation: "KA-hoy",
      usage: "From this lesson's word list: plants and flowers.",
      example: [
        {
          speaker: "A",
          text: "Mahusay an aton palibot.",
          translation: "Our surroundings are beautiful.",
        },
        {
          speaker: "B",
          text: "Oo, damo an mga kahoy ngan bulak.",
          translation: "Yes, there are many trees and flowers.",
        },
      ],
    },
    {
      term: "Bulak",
      meaning: "Flower",
      pronunciation: "BU-lak",
      usage: "From this lesson's word list: plants and flowers.",
      example: [
        {
          speaker: "A",
          text: "Oo, damo an mga kahoy ngan bulak.",
          translation: "Yes, there are many trees and flowers.",
        },
        {
          speaker: "B",
          text: "Nag-uuran ba yana?",
          translation: "Is it raining now?",
        },
      ],
    },
    {
      term: "Dahon",
      meaning: "Leaf",
      pronunciation: "DA-hon",
      usage: "From this lesson's word list: plants and flowers.",
      example: [
        {
          speaker: "",
          text: "Berde an dahon.",
          translation: "The leaf is green.",
        },
      ],
    },
    {
      term: "Sagbot",
      meaning: "Grass",
      pronunciation: "SAG-bot",
      usage: "From this lesson's word list: plants and flowers.",
    },
    {
      term: "Gamut",
      meaning: "Root",
      pronunciation: "GA-mut",
      usage: "From this lesson's word list: plants and flowers.",
    },
    {
      term: "Prutas",
      meaning: "Fruit",
      pronunciation: "PRU-tas",
      usage: "From this lesson's word list: plants and flowers.",
    },
    {
      term: "Liso",
      meaning: "Seed",
      pronunciation: "LI-so",
      usage: "From this lesson's word list: plants and flowers.",
    },
    {
      term: "Puno han lubi",
      meaning: "Coconut tree",
      pronunciation: "PU-no han LU-bi",
      usage: "From this lesson's word list: plants and flowers.",
    },
    {
      term: "Kawayan",
      meaning: "Bamboo",
      pronunciation: "ka-WA-yan",
      usage: "From this lesson's word list: plants and flowers.",
    },
    {
      term: "Kinaiyahan",
      meaning: "Nature",
      pronunciation: "ki-na-i-YA-han",
      usage: "From this lesson's word list: elements of nature.",
    },
    {
      term: "Adlaw",
      meaning: "Sun",
      pronunciation: "AD-law",
      usage: "From this lesson's word list: elements of nature.",
      example: [
        {
          speaker: "",
          text: "Nasirang an adlaw.",
          translation: "The sun is shining.",
        },
      ],
    },
    {
      term: "Bulan",
      meaning: "Moon",
      pronunciation: "BU-lan",
      usage: "From this lesson's word list: elements of nature.",
    },
    {
      term: "Bitoon",
      meaning: "Star",
      pronunciation: "bi-TO-on",
      usage: "From this lesson's word list: elements of nature.",
    },
    {
      term: "Langit",
      meaning: "Sky",
      pronunciation: "LA-ngit",
      usage: "From this lesson's word list: elements of nature.",
    },
    {
      term: "Panganod",
      meaning: "Cloud",
      pronunciation: "pa-NGA-nod",
      usage: "From this lesson's word list: elements of nature.",
    },
    {
      term: "Ulan",
      meaning: "Rain",
      pronunciation: "U-lan",
      usage: "From this lesson's word list: elements of nature.",
    },
    {
      term: "Hangin",
      meaning: "Wind",
      pronunciation: "HA-ngin",
      usage: "From this lesson's word list: elements of nature.",
    },
    {
      term: "Dagat",
      meaning: "Sea",
      pronunciation: "DA-gat",
      usage: "From this lesson's word list: elements of nature.",
      example: [
        {
          speaker: "",
          text: "Mahusay an dagat.",
          translation: "The sea is beautiful.",
        },
      ],
    },
    {
      term: "Salog",
      meaning: "River",
      pronunciation: "SA-log",
      usage: "From this lesson's word list: elements of nature.",
    },
    {
      term: "Bukid",
      meaning: "Mountain",
      pronunciation: "BU-kid",
      usage: "From this lesson's word list: elements of nature.",
      example: [
        {
          speaker: "",
          text: "Dako an bukid.",
          translation: "The mountain is big.",
        },
      ],
    },
    {
      term: "Kagurangan",
      meaning: "Forest",
      pronunciation: "ka-gu-RANG-an",
      usage: "From this lesson's word list: elements of nature.",
    },
    {
      term: "Tuna",
      meaning: "Land / Ground",
      pronunciation: "TU-na",
      usage: "From this lesson's word list: elements of nature.",
    },
    {
      term: "Bato",
      meaning: "Stone",
      pronunciation: "BA-to",
      usage: "From this lesson's word list: elements of nature.",
    },
    {
      term: "Kalayo",
      meaning: "Fire",
      pronunciation: "ka-LA-yo",
      usage: "From this lesson's word list: elements of nature.",
    },
    {
      term: "Dako",
      meaning: "Big",
      pronunciation: "DA-ko",
      usage: "From this lesson's word list: describing animals and nature.",
      example: [
        {
          speaker: "",
          text: "Dako an aso.",
          translation: "The dog is big.",
        },
      ],
    },
    {
      term: "Gutiay",
      meaning: "Small",
      pronunciation: "gu-TI-ay",
      usage: "From this lesson's word list: describing animals and nature.",
      example: [
        {
          speaker: "A",
          text: "Itom an iya kolor.",
          translation: "Its color is black.",
        },
        {
          speaker: "B",
          text: "Gutiay ba hiya?",
          translation: "Is it small?",
        },
      ],
    },
    {
      term: "Malaksi",
      meaning: "Fast",
      pronunciation: "ma-LAK-si",
      usage: "From this lesson's word list: describing animals and nature.",
      example: [
        {
          speaker: "A",
          text: "Kabayo ito.",
          translation: "That is a horse.",
        },
        {
          speaker: "B",
          text: "Malaksi ba ito?",
          translation: "Is it fast?",
        },
      ],
    },
    {
      term: "Hinay",
      meaning: "Slow",
      pronunciation: "HI-nay",
      usage: "From this lesson's word list: describing animals and nature.",
    },
    {
      term: "Mahusay",
      meaning: "Beautiful",
      pronunciation: "ma-HU-say",
      usage: "From this lesson's word list: describing animals and nature.",
      example: [
        {
          speaker: "A",
          text: "Oo, malaksi ito.",
          translation: "Yes, it is fast.",
        },
        {
          speaker: "B",
          text: "Mahusay ito nga hayop.",
          translation: "It is a beautiful animal.",
        },
      ],
    },
    {
      term: "Makusog",
      meaning: "Strong",
      pronunciation: "ma-KU-sog",
      usage: "From this lesson's word list: describing animals and nature.",
      example: [
        {
          speaker: "",
          text: "Makusog an kabaw.",
          translation: "The carabao is strong.",
        },
      ],
    },
    {
      term: "Ihalas",
      meaning: "Wild",
      pronunciation: "i-HA-las",
      usage: "From this lesson's word list: describing animals and nature.",
    },
    {
      term: "Amoon",
      meaning: "Domestic / Tame",
      pronunciation: "a-MO-on",
      usage: "From this lesson's word list: describing animals and nature.",
    },
    {
      term: "Berde",
      meaning: "Green",
      pronunciation: "BER-de",
      usage: "From this lesson's word list: describing animals and nature.",
      example: [
        {
          speaker: "",
          text: "Berde an dahon.",
          translation: "The leaf is green.",
        },
      ],
    },
    {
      term: "Limpyo",
      meaning: "Clean",
      pronunciation: "LIM-pyo",
      usage: "From this lesson's word list: describing animals and nature.",
    },
  ],
  greetings: [
    {
      term: "Dako",
      meaning: "Big",
      pronunciation: "DA-ko",
      usage: "From this lesson's word list: describing animals and nature.",
      example: [
        {
          speaker: "",
          text: "Dako an aso.",
          translation: "The dog is big.",
        },
      ],
    },
    {
      term: "Gutiay",
      meaning: "Small",
      pronunciation: "gu-TI-ay",
      usage: "From this lesson's word list: describing animals and nature.",
      example: [
        {
          speaker: "A",
          text: "Itom an iya kolor.",
          translation: "Its color is black.",
        },
        {
          speaker: "B",
          text: "Gutiay ba hiya?",
          translation: "Is it small?",
        },
      ],
    },
    {
      term: "Malaksi",
      meaning: "Fast",
      pronunciation: "ma-LAK-si",
      usage: "From this lesson's word list: describing animals and nature.",
      example: [
        {
          speaker: "A",
          text: "Kabayo ito.",
          translation: "That is a horse.",
        },
        {
          speaker: "B",
          text: "Malaksi ba ito?",
          translation: "Is it fast?",
        },
      ],
    },
    {
      term: "Hinay",
      meaning: "Slow",
      pronunciation: "HI-nay",
      usage: "From this lesson's word list: describing animals and nature.",
    },
    {
      term: "Mahusay",
      meaning: "Beautiful",
      pronunciation: "ma-HU-say",
      usage: "From this lesson's word list: describing animals and nature.",
      example: [
        {
          speaker: "A",
          text: "Oo, malaksi ito.",
          translation: "Yes, it is fast.",
        },
        {
          speaker: "B",
          text: "Mahusay ito nga hayop.",
          translation: "It is a beautiful animal.",
        },
      ],
    },
    {
      term: "Makusog",
      meaning: "Strong",
      pronunciation: "ma-KU-sog",
      usage: "From this lesson's word list: describing animals and nature.",
      example: [
        {
          speaker: "",
          text: "Makusog an kabaw.",
          translation: "The carabao is strong.",
        },
      ],
    },
    {
      term: "Ihalas",
      meaning: "Wild",
      pronunciation: "i-HA-las",
      usage: "From this lesson's word list: describing animals and nature.",
    },
    {
      term: "Amoon",
      meaning: "Domestic / Tame",
      pronunciation: "a-MO-on",
      usage: "From this lesson's word list: describing animals and nature.",
    },
    {
      term: "Berde",
      meaning: "Green",
      pronunciation: "BER-de",
      usage: "From this lesson's word list: describing animals and nature.",
      example: [
        {
          speaker: "",
          text: "Berde an dahon.",
          translation: "The leaf is green.",
        },
      ],
    },
    {
      term: "Limpyo",
      meaning: "Clean",
      pronunciation: "LIM-pyo",
      usage: "From this lesson's word list: describing animals and nature.",
    },
  ],
  patterns: [
    {
      label: "Pattern 1: Saying Something Is Big",
      pattern: "Dako an + Animal or thing.",
      examples: [
        "Dako an aso.",
        "Dako an bukid.",
        "Dako an baka.",
      ],
    },
    {
      label: "Pattern 2: Saying Something Is Beautiful",
      pattern: "Mahusay an + Thing.",
      examples: [
        "Mahusay an bulak.",
        "Mahusay an dagat.",
      ],
    },
    {
      label: "Pattern 3: Asking About an Animal or Plant",
      pattern: "Ano ito nga + hayop / tanom?",
      examples: [
        "Ano ito nga hayop?",
        "Ano ito nga tanom?",
      ],
    },
  ],
  sentences: [
    {
      text: "Ano ini nga hayop?",
      meaning: "What animal is this?",
      pronunciation: "A-no I-ni nga HA-yop?",
    },
    {
      text: "Aso ini.",
      meaning: "This is a dog.",
      pronunciation: "A-so I-ni",
    },
    {
      text: "May kuring ako.",
      meaning: "I have a cat.",
      pronunciation: "May KU-ring A-ko",
    },
    {
      text: "Naglupad an tamsi.",
      meaning: "The bird is flying.",
      pronunciation: "nag-LU-pad an TAM-si",
    },
    {
      text: "Aada ha tubig an isda.",
      meaning: "The fish is in the water.",
      pronunciation: "A-a-da ha TU-big an IS-da",
    },
    {
      text: "Dako an aso.",
      meaning: "The dog is big.",
      pronunciation: "DA-ko an A-so",
    },
    {
      text: "Gutiay an kuring.",
      meaning: "The cat is small.",
      pronunciation: "gu-TI-ay an KU-ring",
    },
    {
      text: "Naruruyag ako hin mga hayop.",
      meaning: "I like animals.",
      pronunciation: "na-ru-RU-yag A-ko hin ma-NGA HA-yop",
    },
    {
      text: "Ano ito nga tanom?",
      meaning: "What is that plant?",
      pronunciation: "A-no I-to nga TA-nom?",
    },
    {
      text: "Mahusay an bulak.",
      meaning: "The flower is beautiful.",
      pronunciation: "ma-HU-say an BU-lak",
    },
    {
      text: "Nag-uuran.",
      meaning: "It is raining.",
      pronunciation: "nag-U-u-ran",
    },
    {
      text: "Nasirang an adlaw.",
      meaning: "The sun is shining.",
      pronunciation: "na-SI-rang an AD-law",
    },
    {
      text: "Mahusay an dagat.",
      meaning: "The sea is beautiful.",
      pronunciation: "ma-HU-say an DA-gat",
    },
    {
      text: "Damo an mga kahoy.",
      meaning: "There are many trees.",
      pronunciation: "DA-mo an ma-NGA KA-hoy",
    },
    {
      text: "Nalanguy an isda.",
      meaning: "The fish is swimming.",
    },
    {
      text: "Nadalagan an aso.",
      meaning: "The dog is running.",
    },
    {
      text: "Nakaturog an kuring.",
      meaning: "The cat is sleeping.",
    },
    {
      text: "Damo nga kahoy ha amon lugar.",
      meaning: "There are many trees in our area.",
    },
    {
      text: "May mga bulak ha hardin.",
      meaning: "There are flowers in the garden.",
    },
    {
      text: "Berde an dahon.",
      meaning: "The leaf is green.",
    },
    {
      text: "Mahangin yana.",
      meaning: "It is windy today.",
    },
    {
      text: "Madaop an adlaw.",
      meaning: "The sun is hot.",
    },
    {
      text: "Dako an bukid.",
      meaning: "The mountain is big.",
    },
    {
      text: "Dako an baka.",
      meaning: "The cow is big.",
    },
    {
      text: "Makusog an kabaw.",
      meaning: "The carabao is strong.",
    },
    {
      text: "Malaksi an kabayo.",
      meaning: "The horse is fast.",
    },
  ],
  conversations: [
    {
      title: "Conversation 1: Talking About Pets",
      lines: [
        {
          speaker: "Ana",
          text: "May hayop ka ba ha balay?",
          translation: "Do you have an animal at home?",
        },
        {
          speaker: "Ben",
          text: "Oo, may kuring ako.",
          translation: "Yes, I have a cat.",
        },
        {
          speaker: "Ana",
          text: "Ano an kolor han imo kuring?",
          translation: "What is the color of your cat?",
        },
        {
          speaker: "Ben",
          text: "Itom an iya kolor.",
          translation: "Its color is black.",
        },
        {
          speaker: "Ana",
          text: "Gutiay ba hiya?",
          translation: "Is it small?",
        },
        {
          speaker: "Ben",
          text: "Oo, gutiay pa hiya.",
          translation: "Yes, it is still small.",
        },
      ],
      situation: "Ana and Ben: Talking About Pets.",
    },
    {
      title: "Conversation 2: Seeing Animals",
      lines: [
        {
          speaker: "Mia",
          text: "Ano ito nga hayop?",
          translation: "What animal is that?",
        },
        {
          speaker: "Carlo",
          text: "Kabayo ito.",
          translation: "That is a horse.",
        },
        {
          speaker: "Mia",
          text: "Malaksi ba ito?",
          translation: "Is it fast?",
        },
        {
          speaker: "Carlo",
          text: "Oo, malaksi ito.",
          translation: "Yes, it is fast.",
        },
        {
          speaker: "Mia",
          text: "Mahusay ito nga hayop.",
          translation: "It is a beautiful animal.",
        },
      ],
      situation: "Mia and Carlo: Seeing Animals.",
    },
    {
      title: "Conversation 3: Talking About Nature",
      lines: [
        {
          speaker: "Liza",
          text: "Mahusay an aton palibot.",
          translation: "Our surroundings are beautiful.",
        },
        {
          speaker: "Mark",
          text: "Oo, damo an mga kahoy ngan bulak.",
          translation: "Yes, there are many trees and flowers.",
        },
        {
          speaker: "Liza",
          text: "Nag-uuran ba yana?",
          translation: "Is it raining now?",
        },
        {
          speaker: "Mark",
          text: "Diri, mahangin la.",
          translation: "No, it is only windy.",
        },
        {
          speaker: "Liza",
          text: "Karuyag ko maglakat ha gawas.",
          translation: "I want to walk outside.",
        },
      ],
      situation: "Liza and Mark: Talking About Nature.",
    },
  ],
  languageNotes: [
    {
      title: "A. Identifying Animals",
      body: [
        "Animals are commonly found in homes, farms, forests, and bodies of water.",
      ],
      examples: [
        {
          text: "Aso",
          meaning: "Dog",
        },
        {
          text: "Kuring",
          meaning: "Cat",
        },
        {
          text: "Manok",
          meaning: "Chicken",
        },
        {
          text: "Baka",
          meaning: "Cow",
        },
        {
          text: "Kanding",
          meaning: "Goat",
        },
        {
          text: "Kabaw",
          meaning: "Carabao",
        },
        {
          text: "Isda",
          meaning: "Fish",
        },
        {
          text: "Tamsi",
          meaning: "Bird",
        },
      ],
    },
    {
      title: "A. Identifying Animals",
      body: [
        "To ask what animal someone is looking at, use:",
      ],
      examples: [
        {
          text: "Ano ini nga hayop?",
          meaning: "What animal is this?",
        },
      ],
    },
    {
      title: "A. Identifying Animals",
      body: [
        "You can answer by naming the animal:",
      ],
      examples: [
        {
          text: "Aso ini.",
          meaning: "This is a dog.",
        },
      ],
    },
    {
      title: "B. Talking About Animal Actions",
      body: [
        "You can describe what an animal is doing using simple action sentences.",
      ],
      examples: [
        {
          text: "Naglupad an tamsi.",
          meaning: "The bird is flying.",
        },
        {
          text: "Nalanguy an isda.",
          meaning: "The fish is swimming.",
        },
        {
          text: "Nadalagan an aso.",
          meaning: "The dog is running.",
        },
        {
          text: "Nakaturog an kuring.",
          meaning: "The cat is sleeping.",
        },
      ],
    },
    {
      title: "C. Identifying Plants and Flowers",
      body: [
        "Plants are an important part of the environment. They provide food, shade, and shelter for different living things.",
      ],
      examples: [
        {
          text: "Kahoy",
          meaning: "Tree",
        },
        {
          text: "Bulak",
          meaning: "Flower",
        },
        {
          text: "Dahon",
          meaning: "Leaf",
        },
        {
          text: "Tanom",
          meaning: "Plant",
        },
        {
          text: "Sagbot",
          meaning: "Grass",
        },
        {
          text: "Lubi",
          meaning: "Coconut",
        },
        {
          text: "Damo nga kahoy ha amon lugar.",
          meaning: "There are many trees in our area.",
        },
        {
          text: "May mga bulak ha hardin.",
          meaning: "There are flowers in the garden.",
        },
        {
          text: "Berde an dahon.",
          meaning: "The leaf is green.",
        },
      ],
    },
    {
      title: "D. Talking About the Weather and Environment",
      body: [
        "You can use nature vocabulary to describe your surroundings and the weather.",
      ],
      examples: [
        {
          text: "Nag-uuran.",
          meaning: "It is raining.",
        },
        {
          text: "Mahangin yana.",
          meaning: "It is windy today.",
        },
        {
          text: "Madaop an adlaw.",
          meaning: "The sun is hot.",
        },
        {
          text: "Mahusay an dagat.",
          meaning: "The sea is beautiful.",
        },
        {
          text: "Dako an bukid.",
          meaning: "The mountain is big.",
        },
      ],
    },
    {
      title: "E. Describing Animals and Their Characteristics",
      body: [
        "You can combine animal names with descriptive words.",
      ],
      examples: [
        {
          text: "Dako an baka.",
          meaning: "The cow is big.",
        },
        {
          text: "Gutiay an kuring.",
          meaning: "The cat is small.",
        },
        {
          text: "Makusog an kabaw.",
          meaning: "The carabao is strong.",
        },
        {
          text: "Malaksi an kabayo.",
          meaning: "The horse is fast.",
        },
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
