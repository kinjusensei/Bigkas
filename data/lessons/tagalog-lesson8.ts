import {
  LessonExpressionGroup,
  StructuredLesson,
} from "../../types/structuredLesson";
import {
  arrange,
  choice,
  dialogue,
  fills,
  matchPairs,
  phrases,
  sentences,
  words,
} from "./lessonHelpers";

// Tagalog Lesson 8 — copied from "Tagalog 8.pdf". The PDF's tables lost
// some of their columns, so each Filipino line was paired with the
// English and pronunciation lines in the same position (the counts match
// in every table). The dialogues' English translations are listed after
// each dialogue in the document and were paired line by line. Nothing in
// the Filipino was changed.

export const tagalogLesson8ReviewItems = [
  'Activity 4 item 3: the tile "ang" is not in the answer key\'s sentence ("Maraming puno sa kagubatan."), so it was left out.',
  'Activity 3: the word bank is lowercase (puno, isda, lumilipad, bulaklak, baka), so the answers use the word bank\'s spelling; the answer key capitalizes them.',
  'Speaking: "Lumalangoy" has no English in the vocabulary tables; "Swims / Is swimming" is inferred from "Lumalangoy ang isda sa tubig. – The fish swims in the water."',
];

// 4. Vocabulary
const expressionGroups: LessonExpressionGroup[] = [
  {
    title: "A. Common Animals",
    items: words([
      ["Aso", "Dog", "a-so"],
      ["Pusa", "Cat", "pu-sa"],
      ["Ibon", "Bird", "i-bon"],
      ["Isda", "Fish", "is-da"],
      ["Kabayo", "Horse", "ka-ba-yo"],
      ["Baka", "Cow", "ba-ka"],
      ["Kalabaw", "Carabao / Water buffalo", "ka-la-baw"],
      ["Kambing", "Goat", "kam-bing"],
      ["Baboy", "Pig", "ba-boy"],
      ["Manok", "Chicken", "ma-nok"],
      ["Pato", "Duck", "pa-to"],
      ["Ahas", "Snake", "a-has"],
      ["Pagong", "Turtle", "pa-gong"],
      ["Palaka", "Frog", "pa-la-ka"],
      ["Paru-paro", "Butterfly", "pa-ru-pa-ro"],
      ["Bubuyog", "Bee", "bu-bu-yog"],
      ["Langgam", "Ant", "lang-gam"],
      ["Unggoy", "Monkey", "ung-goy"],
      ["Leon", "Lion", "le-yon"],
      ["Elepante", "Elephant", "e-le-pan-te"],
    ]),
  },
  {
    title: "B. Animal-Related Vocabulary",
    items: words([
      ["Alaga", "Pet / Animal under one's care", "a-la-ga"],
      ["Hayop", "Animal", "ha-yop"],
      ["Alagang hayop", "Pet", "a-la-gang ha-yop"],
      ["Alagang aso", "Pet dog", "a-la-gang a-so"],
      ["Pakpak", "Wing", "pak-pak"],
      ["Buntot", "Tail", "bun-tot"],
      ["Balahibo", "Fur / Feathers", "ba-la-hi-bo"],
      ["Kaliskis", "Scales", "ka-lis-kis"],
      ["Sungay", "Horn", "su-ngay"],
      ["Kuko", "Claw / Nail", "ku-ko"],
      ["Tuka", "Beak", "tu-ka"],
      ["Paa", "Foot / Leg", "pa-a"],
    ]),
  },
  {
    title: "C. Nature and the Environment",
    items: words([
      ["Kalikasan", "Nature", "ka-li-ka-san"],
      ["Puno", "Tree", "pu-no"],
      ["Halaman", "Plant", "ha-la-man"],
      ["Bulaklak", "Flower", "bu-lak-lak"],
      ["Dahon", "Leaf", "da-hon"],
      ["Sanga", "Branch", "sa-nga"],
      ["Ugat", "Root", "u-gat"],
      ["Damo", "Grass", "da-mo"],
      ["Kagubatan", "Forest", "ka-gu-ba-tan"],
      ["Bundok", "Mountain", "bun-dok"],
      ["Ilog", "River", "i-log"],
      ["Lawa", "Lake", "la-wa"],
      ["Dagat", "Sea", "da-gat"],
      ["Talon", "Waterfall", "ta-lon"],
      ["Buhangin", "Sand", "bu-ha-ngin"],
      ["Bato", "Stone / Rock", "ba-to"],
      ["Lupa", "Soil / Ground", "lu-pa"],
      ["Langit", "Sky", "la-ngit"],
      ["Ulap", "Cloud", "u-lap"],
      ["Araw", "Sun", "a-raw"],
      ["Buwan", "Moon", "bu-wan"],
      ["Bituin", "Star", "bi-tu-in"],
      ["Ulan", "Rain", "u-lan"],
      ["Hangin", "Wind / Air", "ha-ngin"],
    ]),
  },
  {
    title: "D. Describing Animals and Nature",
    items: words([
      ["Malaki", "Big", "ma-la-ki"],
      ["Maliit", "Small", "ma-li-it"],
      ["Mahaba", "Long", "ma-ha-ba"],
      ["Maikli", "Short", "ma-ik-li"],
      ["Mabilis", "Fast", "ma-bi-lis"],
      ["Mabagal", "Slow", "ma-ba-gal"],
      ["Matangkad", "Tall", "ma-tang-kad"],
      ["Mababa", "Low / Short", "ma-ba-ba"],
      ["Maganda", "Beautiful", "ma-gan-da"],
      ["Mabango", "Fragrant", "ma-ba-ngo"],
      ["Mabait", "Kind / Good", "ma-ba-it"],
      ["Mapanganib", "Dangerous", "ma-pa-nga-nib"],
      ["Maamo", "Gentle / Tame", "ma-a-mo"],
      ["Maingay", "Noisy", "ma-i-ngay"],
      ["Tahimik", "Quiet", "ta-hi-mik"],
    ]),
  },
  {
    title: "E. Actions Related to Animals and Nature",
    items: words([
      ["Kumain", "To eat", "ku-ma-in"],
      ["Uminom", "To drink", "u-mi-nom"],
      ["Tumakbo", "To run", "tu-mak-bo"],
      ["Lumipad", "To fly", "lu-mi-pad"],
      ["Lumangoy", "To swim", "lu-ma-ngoy"],
      ["Gumapang", "To crawl", "gu-ma-pang"],
      ["Tumalon", "To jump", "tu-ma-lon"],
      ["Matulog", "To sleep", "ma-tu-log"],
      ["Lumaki", "To grow", "lu-ma-ki"],
      ["Mamuhay", "To live", "ma-mu-hay"],
    ]),
  },
];

// 5. Useful Phrases and Sentences
const situationGroups: LessonExpressionGroup[] = [
  {
    title: "A. Asking About Animals",
    items: words([
      ["Ano ang hayop na ito?", "What animal is this?"],
      ["Ano ang tawag dito?", "What is this called?"],
      ["May alaga ka bang hayop?", "Do you have a pet?"],
      ["Ano ang paborito mong hayop?", "What is your favorite animal?"],
      ["Ilang hayop ang nakikita mo?", "How many animals can you see?"],
      ["Saan nakatira ang mga ibon?", "Where do birds live?"],
      ["Ano ang kinakain ng aso?", "What does a dog eat?"],
    ]),
  },
  {
    title: "B. Describing Animals",
    items: words([
      ["Malaki ang elepante.", "The elephant is big."],
      ["Maliit ang langgam.", "The ant is small."],
      ["Mabilis tumakbo ang kabayo.", "The horse runs fast."],
      ["Lumilipad ang ibon sa langit.", "The bird flies in the sky."],
      ["Lumalangoy ang isda sa tubig.", "The fish swims in the water."],
      ["Mahaba ang buntot ng unggoy.", "The monkey has a long tail."],
      ["May pakpak ang paru-paro.", "The butterfly has wings."],
    ]),
  },
  {
    title: "C. Talking About Nature",
    items: words([
      ["Maraming puno sa kagubatan.", "There are many trees in the forest."],
      ["Maganda ang mga bulaklak.", "The flowers are beautiful."],
      ["Malinis ang tubig sa ilog.", "The water in the river is clean."],
      ["Mataas ang bundok na iyon.", "That mountain is tall."],
      ["Maraming isda sa dagat.", "There are many fish in the sea."],
      ["Makulimlim ang langit.", "The sky is cloudy."],
      ["Umuulan ngayon.", "It is raining now."],
    ]),
  },
];

export const tagalogLesson8: StructuredLesson = {
  lessonId: "tagalog_8",
  dialect: "tagalog",
  dialectLabel: "Tagalog",
  lessonNumber: 8,
  title: "Animals and Nature",
  level: "Beginner",
  unit: "Everyday Vocabulary",

  // 3. Lesson Introduction
  intro: [
    "Animals and nature are part of everyday life. We encounter animals at home, on farms, in forests, and in different natural environments. Learning their Filipino names helps us describe the world around us and communicate about familiar things.",
    "In this lesson, learners will discover the Filipino names of common animals, plants, landforms, and natural elements. They will also practice describing animals, identifying their habitats, and constructing simple sentences.",
    "Real-life applications: naming animals seen at home or outside, talking about pets and farm animals, describing animals and their characteristics, identifying natural places such as mountains, rivers, and forests, and talking about the weather and surroundings.",
  ],

  // 2. Learning Objectives
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify and name common animals in Filipino.",
    "Recognize common words related to nature and the environment.",
    "Describe animals using simple Filipino words and sentences.",
    "Identify where common animals live.",
    "Construct simple sentences about animals and nature.",
    "Participate in short conversations about animals and the natural environment.",
  ],

  expressionsIntro:
    "Tap the speaker to hear each word. Read each syllable clearly.",
  expressionGroups,

  // 6. Lesson Proper
  languageNotes: [
    {
      title: "A. Naming Animals",
      body: [
        "To identify an animal, learners can use: Ano ang hayop na ito? – What animal is this? Ito ay isang aso. – This is a dog.",
      ],
      examples: sentences([
        ["Ito ay isang pusa.", "This is a cat."],
        ["Ito ay isang ibon.", "This is a bird."],
        ["Ito ay isang kabayo.", "This is a horse."],
        ["Ito ay isang pagong.", "This is a turtle."],
      ]),
      remember:
        "The word ito refers to something near the speaker. The phrase isang means one or a/an when introducing a singular countable noun.",
    },
    {
      title: "B. Describing Animals",
      body: [
        "Filipino descriptions often place the describing word before the noun, but the sentence structure can vary: Malaking aso – Big dog, Maliit na pusa – Small cat, Mabilis na kabayo – Fast horse, Maamong hayop – Gentle animal.",
        "Learners can also describe an animal using a complete sentence.",
      ],
      examples: sentences([
        ["Malaki ang aso.", "The dog is big."],
        ["Mabilis ang kabayo.", "The horse is fast."],
        ["Maamo ang pusa.", "The cat is gentle."],
      ]),
    },
    {
      title: "C. Talking About Animal Habitats",
      body: [
        "A habitat is the natural place where an animal lives.",
        "Important vocabulary: Nakatira – Lives / Resides, Sa – In / At / On, Malapit sa – Near, Tubig – Water, Puno – Tree, Kagubatan – Forest.",
      ],
      examples: sentences([
        ["Nakatira ang ibon sa puno.", "The bird lives in a tree."],
        ["Nakatira ang isda sa tubig.", "The fish lives in water."],
        [
          "Nakatira ang unggoy sa kagubatan.",
          "The monkey lives in the forest.",
        ],
        [
          "Nakatira ang palaka malapit sa tubig.",
          "The frog lives near water.",
        ],
        ["Nakatira ang leon sa damuhan.", "The lion lives in grasslands."],
      ]),
    },
    {
      title: "D. Talking About What Animals Eat",
      body: [
        "The word kumakain means eating or is eating, depending on context.",
      ],
      examples: sentences([
        ["Kumakain ng damo ang baka.", "The cow eats grass."],
        ["Kumakain ng isda ang pusa.", "The cat eats fish."],
        ["Kumakain ng butil ang manok.", "The chicken eats grains."],
        ["Kumakain ng dahon ang kambing.", "The goat eats leaves."],
      ]),
      remember:
        "The word ng introduces the object being eaten in these sentences.",
    },
    {
      title: 'E. Using "May" to Describe What Something Has',
      body: [
        "The word may can be used to indicate that something has or possesses something.",
      ],
      examples: sentences([
        ["May buntot ang aso.", "The dog has a tail."],
        ["May pakpak ang ibon.", "The bird has wings."],
        ["May kaliskis ang isda.", "The fish has scales."],
        ["May sungay ang kambing.", "The goat has horns."],
      ]),
    },
  ],

  situationsTitle: "Useful phrases and sentences",
  situationGroups,

  // 7. Guided Conversations
  conversations: [
    {
      situation: "Dialogue 1: Talking About Pets",
      lines: dialogue([
        ["Ana", "May alaga ka bang hayop?", "Do you have a pet?"],
        ["Ben", "Oo, may alaga akong aso.", "Yes, I have a dog."],
        ["Ana", "Ano ang pangalan niya?", "What is its name?"],
        ["Ben", "Ang pangalan niya ay Bantay.", "Its name is Bantay."],
        ["Ana", "Malaki ba siya?", "Is it big?"],
        [
          "Ben",
          "Hindi. Maliit siya pero mabilis tumakbo.",
          "No. It is small, but it runs fast.",
        ],
      ]),
    },
    {
      situation: "Dialogue 2: Visiting a Farm",
      lines: dialogue([
        [
          "Lara",
          "Anong mga hayop ang nakikita mo sa bukid?",
          "What animals can you see on the farm?",
        ],
        [
          "Marco",
          "Nakikita ko ang mga baka, kambing, at manok.",
          "I can see cows, goats, and chickens.",
        ],
        ["Lara", "Ano ang kinakain ng mga baka?", "What do cows eat?"],
        ["Marco", "Kumakain sila ng damo.", "They eat grass."],
        [
          "Lara",
          "At saan nakatira ang mga manok?",
          "And where do chickens live?",
        ],
        [
          "Marco",
          "Nakatira sila sa kulungan ng mga manok.",
          "They live in a chicken coop.",
        ],
      ]),
    },
    {
      situation: "Dialogue 3: Exploring Nature",
      lines: dialogue([
        ["Mia", "Ang ganda ng lugar na ito!", "This place is beautiful!"],
        [
          "Paolo",
          "Oo. Maraming puno at bulaklak dito.",
          "Yes. There are many trees and flowers here.",
        ],
        ["Mia", "May ilog din ba rito?", "Is there also a river here?"],
        [
          "Paolo",
          "Oo, may ilog sa likod ng bundok.",
          "Yes, there is a river behind the mountain.",
        ],
        ["Mia", "Gusto kong makita ang talon.", "I want to see the waterfall."],
        ["Paolo", "Tara! Puntahan natin ito.", "Come on! Let's go there."],
      ]),
    },
  ],

  // 8. Activity 1 (answer key: 1 D, 2 E, 3 C, 4 A, 5 B)
  matchActivity: {
    title: "Match the Animal",
    instructions: "Match each Filipino word with its correct English meaning.",
    pairs: matchPairs(
      ["Aso", "Pagong", "Kambing", "Paru-paro", "Kalabaw"],
      ["Butterfly", "Carabao", "Goat", "Dog", "Turtle"],
      "D E C A B",
    ),
  },

  // 8. Activity 2 (answer key: 1 B, 2 A, 3 C, 4 B, 5 C)
  choiceActivity: {
    title: "Choose the Correct Answer",
    questions: [
      choice(
        1,
        'What is the Filipino word for "bird"?',
        ["Isda", "Ibon", "Aso", "Pusa"],
        "B",
      ),
      choice(
        2,
        'Which word means "forest"?',
        ["Kagubatan", "Bundok", "Ilog", "Lawa"],
        "A",
      ),
      choice(
        3,
        'What is the Filipino word for "flower"?',
        ["Dahon", "Sanga", "Bulaklak", "Ugat"],
        "C",
      ),
      choice(
        4,
        "Which animal is commonly associated with swimming in water?",
        ["Kabayo", "Isda", "Manok", "Unggoy"],
        "B",
      ),
      choice(
        5,
        'What does "Maliit" mean?',
        ["Big", "Fast", "Small", "Tall"],
        "C",
      ),
    ],
  },

  // 8. Activity 3 (answers from the document's answer key)
  fillInBlanks: {
    title: "Fill in the Blanks",
    items: fills(
      "fill",
      [
        ["______ ang ibon sa langit.", "lumilipad", "The bird flies in the sky."],
        ["Kumakain ng damo ang ______.", "baka", "The cow eats grass."],
        [
          "Maraming ______ sa kagubatan.",
          "puno",
          "There are many trees in the forest.",
        ],
        [
          "Lumalangoy ang ______ sa tubig.",
          "isda",
          "The fish swims in the water.",
        ],
        ["Maganda ang mga ______.", "bulaklak", "The flowers are beautiful."],
      ],
      {
        title: "Fill in the Blanks",
        instructions:
          "Choose the correct Filipino word to complete each sentence.",
        wordBank: ["puno", "isda", "lumilipad", "bulaklak", "baka"],
      },
    ),
  },

  // 8. Activity 4 (see the review items for the left-out tile)
  arrangeWords: {
    title: "Arrange the Words",
    instructions: "Arrange the words to form a correct Filipino sentence.",
    items: [
      arrange("1", "ang / Malaki / elepante", "Malaki ang elepante."),
      arrange(
        "2",
        "sa / Lumalangoy / isda / tubig / ang",
        "Lumalangoy ang isda sa tubig.",
      ),
      arrange(
        "3",
        "puno / Maraming / kagubatan / sa",
        "Maraming puno sa kagubatan.",
      ),
      arrange(
        "4",
        "ang / Mabilis / kabayo / tumakbo",
        "Mabilis tumakbo ang kabayo.",
      ),
      arrange("5", "pakpak / ang / May / ibon", "May pakpak ang ibon."),
    ],
  },

  // 9. Lesson Assessment (answer key: 1 A, 2 B, 3 C, 4 C, 5 B, 6 C, 7 A,
  // 8 C, 9 B, 10 B)
  assessment: {
    instructions: "Choose the correct answer.",
    passPercent: 70,
    questions: [
      choice(
        1,
        'What is the Filipino word for "turtle"?',
        ["Pagong", "Palaka", "Ahas", "Pato"],
        "A",
      ),
      choice(
        2,
        'What does "Kalikasan" mean?',
        ["Animal", "Nature", "Forest", "Weather"],
        "B",
      ),
      choice(
        3,
        'Which sentence means "The bird flies in the sky"?',
        [
          "Lumalangoy ang ibon sa tubig.",
          "Kumakain ang ibon ng damo.",
          "Lumilipad ang ibon sa langit.",
          "Natutulog ang ibon sa lupa.",
        ],
        "C",
      ),
      choice(
        4,
        'What is the Filipino word for "branch"?',
        ["Ugat", "Dahon", "Sanga", "Bato"],
        "C",
      ),
      choice(
        5,
        'What does "Mapanganib" mean?',
        ["Gentle", "Dangerous", "Beautiful", "Small"],
        "B",
      ),
      choice(
        6,
        'Which animal is called "kalabaw" in Filipino?',
        ["Horse", "Cow", "Carabao", "Goat"],
        "C",
      ),
      choice(
        7,
        'Complete the sentence: "May ______ ang ibon."',
        ["pakpak", "kaliskis", "sungay", "ugat"],
        "A",
      ),
      choice(
        8,
        'What does "Nakatira" mean?',
        ["Eats", "Sleeps", "Lives", "Runs"],
        "C",
      ),
      choice(
        9,
        'Which sentence means "There are many flowers"?',
        [
          "Maraming puno.",
          "Maraming bulaklak.",
          "Maraming hayop.",
          "Maraming bato.",
        ],
        "B",
      ),
      choice(
        10,
        'Complete the sentence: "Kumakain ng damo ang ______."',
        ["isda", "baka", "ibon", "ahas"],
        "B",
      ),
    ],
  },

  // 8. Activity 5: Listening and Pronunciation. English meanings are from
  // the vocabulary tables and the Lesson Proper; one is inferred (see the
  // review items).
  speaking: {
    title: "Listening and Pronunciation",
    instructions:
      "Listen to the recorded Filipino words and repeat them aloud.",
    note: "Pronounce each syllable clearly, avoid omitted or added syllables, and repeat the complete word at a natural speaking pace.",
    phrases: phrases([
      ["Kagubatan", "Forest"],
      ["Paru-paro", "Butterfly"],
      ["Kalabaw", "Carabao / Water buffalo"],
      ["Bulaklak", "Flower"],
      ["Bituin", "Star"],
      ["Mapanganib", "Dangerous"],
      ["Lumalangoy", "Swims / Is swimming"],
      ["Nakatira", "Lives / Resides"],
    ]),
  },

  // 8. Activity 6 (needs a picture; no screen yet).
  extraActivities: [
    {
      title: "Describe the Picture",
      instructions:
        "Display an image of an animal or natural environment. Ask learners to describe what they see using at least two Filipino sentences.",
      items: [
        "Ito ay isang aso. – This is a dog.",
        "May puno sa tabi ng aso. – There is a tree beside the dog.",
        "Maliit ang aso. – The dog is small.",
      ],
      note: "Example image: A dog standing beside a tree. The items are the document's possible answers.",
    },
  ],

  // 10. Gamification Integration. Practice activities = the multiple
  // choice, fill-in and arrange exercises; the matching activity has no
  // XP row in the document.
  rewards: {
    items: [
      { section: "vocabulary", label: "Complete Vocabulary Learning", xp: 10 },
      {
        section: "conversation",
        label: "Complete Guided Conversations",
        xp: 10,
      },
      { section: "sentences", label: "Complete Practice Activities", xp: 15 },
      {
        section: "speaking",
        label: "Complete Pronunciation Practice",
        xp: 10,
      },
      { section: "assessment", label: "Pass Lesson Assessment", xp: 15 },
    ],
    total: 60,
    badge: {
      name: "Nature Explorer Badge",
      description:
        "Awarded to learners who successfully complete the Animals and Nature lesson.",
    },
    completionRequirement:
      "Finish the vocabulary section, complete the guided conversations, complete the practice activities, and obtain at least 70% in the lesson assessment.",
  },
};
