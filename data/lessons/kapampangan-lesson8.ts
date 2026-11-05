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

// Kapampangan Lesson 8 — copied from "Kapampangan_Lesson_8.docx", a
// translation of the Tagalog Lesson 8. The animal and nature words and
// sentences are working translations, not checked by a native speaker.
// Nothing was corrected. Instructions, activities and the assessment keep
// the document's English.
//
// The document marks some phrases "(?)" — the least certain ones, to be
// checked by a native Kapampangan speaker. The marks are left out of what
// learners see; the phrases are listed in kapampanganReviewItems below.

// Phrases the document marks "(?)", exactly as written (without the mark),
// in the document's order.
export const kapampanganReviewItems: string[] = [
  "Ding animal at kalikasan bayu la ning aldo-aldo a bie. Makakit tamu ning animal king bale, king bukid, king kagubatan, at king aliwang kapaligiran. Ing pamag-aral king lagyu da king Kapampangan makatulung bang ilawe ya ing mundung kaluguran tamu.",
  "Ayup",
  "Sdâ",
  "Pagung",
  "Paru-paru",
  "Bubuyog",
  "Lagam / Langgam",
  "Alagang ayup",
  "Alagang aso",
  "Kakawan / Punu",
  "Sampaga / Bulaklak",
  "Gamat",
  "Aldo",
  "Mabanglu",
  "Maragasang",
  "Nanung ayup ini?",
  "Nanu ing tawag keni?",
  "Atin kang alagang ayup?",
  "Nanu ing paburitu mung ayup?",
  "Pilan a ayup ing makikit mu?",
  "Nokarin matira ding ibon?",
  "Nanu ing kakanan ning aso?",
  "Maragul ya ing elepante.",
  "Maliit ya ing lagam.",
  "Mabilis ya tumakbu ing kabayu.",
  "Lumipad ya ing ibon king langit.",
  "Lumangoy ya ing sdâ king danum.",
  "Mahaba ya ing buntut ning unggoy.",
  "Atin yang pakpak ing paru-paru.",
  "Dakal a punu king kagubatan.",
  "Maganda la ding bulaklak.",
  "Malinis ya ing danum king ilug.",
  "Matas ya ing bunduk a ita.",
  "Dakal a sdâ king dagat.",
  "Makulimlim ya ing langit.",
  "Umulan ya ngeni.",
  "To identify an animal, learners can use: Nanung ayup ini? – What animal is this?",
  "Answer: Metung ya ining aso. – This is a dog.",
  "Metung ya ining pusa. – This is a cat.",
  "Metung ya ining ibon. – This is a bird.",
  "Metung ya ining kabayu. – This is a horse.",
  "Metung ya ining pagung. – This is a turtle.",
  "Maragul a aso – Big dog",
  "Maliit a pusa – Small cat",
  "Mabilis a kabayu – Fast horse",
  "Maamung ayup – Gentle animal",
  "Maragul ya ing aso. – The dog is big.",
  "Mabilis ya ing kabayu. – The horse is fast.",
  "Maamu ya ing pusa. – The cat is gentle.",
  "Ibon",
  "Unggoy",
  "Palaka",
  "Leon",
  "Matira – Lives / Resides",
  "Danum – Water",
  "Mangan ya ning damu ing baka. – The cow eats grass.",
  "Mangan ya ning sdâ ing pusa. – The cat eats fish.",
  "Mangan ya ning butil ing manuk. – The chicken eats grains.",
  "Mangan ya ning dahun ing kambing. – The goat eats leaves.",
  "Atin yang buntut ing aso. – The dog has a tail.",
  "Atin yang pakpak ing ibon. – The bird has wings.",
  "Atin yang kaliskis ing sdâ. – The fish has scales.",
  "Atin yang sungay ing kambing. – The goat has horns.",
  "Metung ya ining aso. – This is a dog.",
  "Atin yang punu king bandi ning aso. – There is a tree beside the dog.",
  "Maliit ya ing aso. – The dog is small.",
];

// Not marked in the document, but worth checking too.
export const kapampanganLesson8Notes: string[] = [
  "Activity 3: the word bank is lowercase (punu, sdâ, lumipad, bulaklak, baka), so the answers use the word bank's spelling; the answer key capitalizes them.",
  'Vocabulary: "Ayup" (Animal) is listed in both A. Common Animals and B. Animal-Related Vocabulary.',
  'Vocabulary: the document says sources for the nature words are limited, and that aldo means both "day" and "sun" and bulan both "moon" and "month".',
];

// 4. Vocabulary
const expressionGroups: LessonExpressionGroup[] = [
  {
    title: "A. Common Animals",
    items: words([
      ["Aso", "Dog", "a-so"],
      ["Pusa", "Cat", "pu-sa"],
      ["Ayup", "Animal", "a-yup"],
      ["Ibon", "Bird", "i-bon"],
      ["Sdâ", "Fish", "sda"],
      ["Kabayu", "Horse", "ka-ba-yu"],
      ["Baka", "Cow", "ba-ka"],
      ["Damulag", "Carabao / Water buffalo", "da-mu-lag"],
      ["Kambing", "Goat", "kam-bing"],
      ["Babi", "Pig", "ba-bi"],
      ["Manuk", "Chicken", "ma-nuk"],
      ["Patu", "Duck", "pa-tu"],
      ["Ahas", "Snake", "a-has"],
      ["Pagung", "Turtle", "pa-gung"],
      ["Palaka", "Frog", "pa-la-ka"],
      ["Paru-paru", "Butterfly", "pa-ru-pa-ru"],
      ["Bubuyog", "Bee", "bu-bu-yog"],
      ["Lagam / Langgam", "Ant", "lang-gam"],
      ["Unggoy", "Monkey", "ung-goy"],
      ["Leon", "Lion", "le-yon"],
      ["Elepante", "Elephant", "e-le-pan-te"],
    ]),
  },
  {
    title: "B. Animal-Related Vocabulary",
    items: words([
      ["Alaga", "Pet / Animal under one's care", "a-la-ga"],
      ["Ayup", "Animal", "a-yup"],
      ["Alagang ayup", "Pet", "a-la-gang a-yup"],
      ["Alagang aso", "Pet dog", "a-la-gang a-so"],
      ["Pakpak", "Wing", "pak-pak"],
      ["Buntut", "Tail", "bun-tut"],
      ["Balahibu", "Fur / Feathers", "ba-la-hi-bu"],
      ["Kaliskis", "Scales", "ka-lis-kis"],
      ["Sungay", "Horn", "su-ngay"],
      ["Kuku", "Claw / Nail", "ku-ku"],
      ["Tuka", "Beak", "tu-ka"],
      ["Paa", "Foot / Leg", "pa-a"],
    ]),
  },
  {
    title: "C. Nature and the Environment",
    intro: [
      'Aldo means both "day" and "sun" in Kapampangan, bulan means both "moon" and "month", and ulan means "rain". Animal words ending in -o in Tagalog often end in -u in Kapampangan spelling.',
    ],
    items: words([
      ["Kalikasan", "Nature", "ka-li-ka-san"],
      ["Kakawan / Punu", "Tree", "ka-ka-wan / pu-nu"],
      ["Halaman", "Plant", "ha-la-man"],
      ["Sampaga / Bulaklak", "Flower", "sam-pa-ga / bu-lak-lak"],
      ["Dahun", "Leaf", "da-hun"],
      ["Sanga", "Branch", "sa-nga"],
      ["Gamat", "Root", "ga-mat"],
      ["Damu", "Grass", "da-mu"],
      ["Kagubatan", "Forest", "ka-gu-ba-tan"],
      ["Bunduk", "Mountain", "bun-duk"],
      ["Ilug", "River", "i-lug"],
      ["Lawa", "Lake", "la-wa"],
      ["Dagat", "Sea", "da-gat"],
      ["Talun", "Waterfall", "ta-lun"],
      ["Buhangin", "Sand", "bu-ha-ngin"],
      ["Batu", "Stone / Rock", "ba-tu"],
      ["Lupa", "Soil / Ground", "lu-pa"],
      ["Langit", "Sky", "la-ngit"],
      ["Ulap", "Cloud", "u-lap"],
      ["Aldo", "Sun", "al-do"],
      ["Bulan", "Moon", "bu-lan"],
      ["Bituin", "Star", "bi-tu-in"],
      ["Ulan", "Rain", "u-lan"],
      ["Angin", "Wind / Air", "a-ngin"],
    ]),
  },
  {
    title: "D. Describing Animals and Nature",
    items: words([
      ["Maragul", "Big", "ma-ra-gul"],
      ["Maliit", "Small", "ma-li-it"],
      ["Mahaba", "Long", "ma-ha-ba"],
      ["Maikli", "Short", "ma-ik-li"],
      ["Mabilis", "Fast", "ma-bi-lis"],
      ["Mabagal", "Slow", "ma-ba-gal"],
      ["Matangkad", "Tall", "ma-tang-kad"],
      ["Mababa", "Low / Short", "ma-ba-ba"],
      ["Maganda", "Beautiful", "ma-gan-da"],
      ["Mabanglu", "Fragrant", "ma-bang-lu"],
      ["Mayap", "Kind / Good", "ma-yap"],
      ["Mapanganib", "Dangerous", "ma-pa-nga-nib"],
      ["Maamu", "Gentle / Tame", "ma-a-mu"],
      ["Maragasang", "Noisy", "ma-ra-ga-sang"],
      ["Tahimik", "Quiet", "ta-hi-mik"],
    ]),
  },
  {
    title: "E. Actions Related to Animals and Nature",
    items: words([
      ["Mangan", "To eat", "ma-ngan"],
      ["Minum", "To drink", "mi-num"],
      ["Tumakbu", "To run", "tu-mak-bu"],
      ["Lumipad", "To fly", "lu-mi-pad"],
      ["Lumangoy", "To swim", "lu-ma-ngoy"],
      ["Gumapang", "To crawl", "gu-ma-pang"],
      ["Tumalun", "To jump", "tu-ma-lun"],
      ["Matulug", "To sleep", "ma-tu-lug"],
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
      ["Nanung ayup ini?", "What animal is this?"],
      ["Nanu ing tawag keni?", "What is this called?"],
      ["Atin kang alagang ayup?", "Do you have a pet?"],
      ["Nanu ing paburitu mung ayup?", "What is your favorite animal?"],
      ["Pilan a ayup ing makikit mu?", "How many animals can you see?"],
      ["Nokarin matira ding ibon?", "Where do birds live?"],
      ["Nanu ing kakanan ning aso?", "What does a dog eat?"],
    ]),
  },
  {
    title: "B. Describing Animals",
    items: words([
      ["Maragul ya ing elepante.", "The elephant is big."],
      ["Maliit ya ing lagam.", "The ant is small."],
      ["Mabilis ya tumakbu ing kabayu.", "The horse runs fast."],
      ["Lumipad ya ing ibon king langit.", "The bird flies in the sky."],
      ["Lumangoy ya ing sdâ king danum.", "The fish swims in the water."],
      ["Mahaba ya ing buntut ning unggoy.", "The monkey has a long tail."],
      ["Atin yang pakpak ing paru-paru.", "The butterfly has wings."],
    ]),
  },
  {
    title: "C. Talking About Nature",
    items: words([
      ["Dakal a punu king kagubatan.", "There are many trees in the forest."],
      ["Maganda la ding bulaklak.", "The flowers are beautiful."],
      ["Malinis ya ing danum king ilug.", "The water in the river is clean."],
      ["Matas ya ing bunduk a ita.", "That mountain is tall."],
      ["Dakal a sdâ king dagat.", "There are many fish in the sea."],
      ["Makulimlim ya ing langit.", "The sky is cloudy."],
      ["Umulan ya ngeni.", "It is raining now."],
    ]),
  },
];

export const kapampanganLesson8: StructuredLesson = {
  lessonId: "kapampangan_8",
  dialect: "kapampangan",
  dialectLabel: "Kapampangan",
  lessonNumber: 8,
  title: "Animals and Nature",
  level: "Beginner",
  unit: "Everyday Vocabulary",

  // 3. Lesson Introduction
  intro: [
    "Ding animal at kalikasan bayu la ning aldo-aldo a bie. Makakit tamu ning animal king bale, king bukid, king kagubatan, at king aliwang kapaligiran. Ing pamag-aral king lagyu da king Kapampangan makatulung bang ilawe ya ing mundung kaluguran tamu.",
    "Keng leksyun a ini, makaklaman da ding lagyu ning animal, halaman, lugar, at bagay king kalikasan. Magpraktis la mu ding maglawe ning animal, magsabi nung nokarin la matira, at gumawa ning simple a pangungusap.",
    "Real-life applications: naming animals seen at home or outside, talking about pets and farm animals, describing animals and their characteristics, identifying natural places such as mountains, rivers, and forests, and talking about the weather and surroundings.",
  ],

  // 2. Learning Objectives
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify and name common animals in Kapampangan.",
    "Recognize common words related to nature and the environment.",
    "Describe animals using simple Kapampangan words and sentences.",
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
        "To identify an animal, learners can use: Nanung ayup ini? – What animal is this? Metung ya ining aso. – This is a dog.",
      ],
      examples: sentences([
        ["Metung ya ining pusa.", "This is a cat."],
        ["Metung ya ining ibon.", "This is a bird."],
        ["Metung ya ining kabayu.", "This is a horse."],
        ["Metung ya ining pagung.", "This is a turtle."],
      ]),
      remember:
        'The word ini refers to something near the speaker. The word metung means "one" or "a/an" when introducing a singular countable noun.',
    },
    {
      title: "B. Describing Animals",
      body: [
        "Kapampangan descriptions often place the describing word before the noun, joined by the linker a or -ng: Maragul a aso – Big dog, Maliit a pusa – Small cat, Mabilis a kabayu – Fast horse, Maamung ayup – Gentle animal.",
        "Learners can also describe an animal using a complete sentence.",
      ],
      examples: sentences([
        ["Maragul ya ing aso.", "The dog is big."],
        ["Mabilis ya ing kabayu.", "The horse is fast."],
        ["Maamu ya ing pusa.", "The cat is gentle."],
      ]),
    },
    {
      title: "C. Talking About Animal Habitats",
      body: [
        "A habitat is the natural place where an animal lives.",
        "Important vocabulary: Matira – Lives / Resides, Keng / King – In / At / On, Malapit king – Near, Danum – Water, Punu – Tree, Kagubatan – Forest.",
      ],
      examples: sentences([
        ["Matira ya ing ibon king punu.", "The bird lives in a tree."],
        ["Matira ya ing sdâ king danum.", "The fish lives in water."],
        [
          "Matira ya ing unggoy king kagubatan.",
          "The monkey lives in the forest.",
        ],
        [
          "Matira ya ing palaka malapit king danum.",
          "The frog lives near water.",
        ],
        ["Matira ya ing leon king damuhan.", "The lion lives in grasslands."],
      ]),
    },
    {
      title: "D. Talking About What Animals Eat",
      body: [
        'The word mangan means "to eat". The marker ning introduces the thing being eaten.',
      ],
      examples: sentences([
        ["Mangan ya ning damu ing baka.", "The cow eats grass."],
        ["Mangan ya ning sdâ ing pusa.", "The cat eats fish."],
        ["Mangan ya ning butil ing manuk.", "The chicken eats grains."],
        ["Mangan ya ning dahun ing kambing.", "The goat eats leaves."],
      ]),
    },
    {
      title: 'E. Using "Atin" to Describe What Something Has',
      body: [
        "The word atin is used to indicate that something has or possesses something.",
      ],
      examples: sentences([
        ["Atin yang buntut ing aso.", "The dog has a tail."],
        ["Atin yang pakpak ing ibon.", "The bird has wings."],
        ["Atin yang kaliskis ing sdâ.", "The fish has scales."],
        ["Atin yang sungay ing kambing.", "The goat has horns."],
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
        ["Ana", "Atin kang alagang ayup?", "Do you have a pet?"],
        ["Ben", "Wa, atin kung alagang aso.", "Yes, I have a dog."],
        ["Ana", "Nanu ing lagyu na?", "What is its name?"],
        ["Ben", "Ing lagyu na ya Bantay.", "Its name is Bantay."],
        ["Ana", "Maragul ya ba?", "Is it big?"],
        [
          "Ben",
          "Ali. Maliit ya pero mabilis yang tumakbu.",
          "No. It is small, but it runs fast.",
        ],
      ]),
    },
    {
      situation: "Dialogue 2: Visiting a Farm",
      lines: dialogue([
        [
          "Lara",
          "Nanung ayup ing makikit mu king bukid?",
          "What animals can you see on the farm?",
        ],
        [
          "Marco",
          "Makikit ku ding baka, kambing, at manuk.",
          "I can see cows, goats, and chickens.",
        ],
        ["Lara", "Nanu ing kakanan da ding baka?", "What do cows eat?"],
        ["Marco", "Mangan la ning damu.", "They eat grass."],
        [
          "Lara",
          "At nokarin matira ding manuk?",
          "And where do chickens live?",
        ],
        ["Marco", "Matira la king kulungan da.", "They live in a chicken coop."],
      ]),
    },
    {
      situation: "Dialogue 3: Exploring Nature",
      lines: dialogue([
        ["Mia", "Maganda ya ing lugar a ini!", "This place is beautiful!"],
        [
          "Paolo",
          "Wa. Dakal a punu at bulaklak keni.",
          "Yes. There are many trees and flowers here.",
        ],
        ["Mia", "Atin yang ilug keni?", "Is there also a river here?"],
        [
          "Paolo",
          "Wa, atin yang ilug king likuran ning bunduk.",
          "Yes, there is a river behind the mountain.",
        ],
        ["Mia", "Buri kung akit ing talun.", "I want to see the waterfall."],
        ["Paolo", "Tara! Ibatan tamu ya.", "Come on! Let's go there."],
      ]),
    },
  ],

  // 8. Activity 1 (answer key: 1 D, 2 E, 3 C, 4 A, 5 B)
  matchActivity: {
    title: "Match the Animal",
    instructions:
      "Match each Kapampangan word with its correct English meaning.",
    pairs: matchPairs(
      ["Aso", "Pagung", "Kambing", "Paru-paru", "Damulag"],
      ["Butterfly", "Carabao", "Goat", "Dog", "Turtle"],
      "D E C A B",
    ),
  },

  // 8. Activity 2 (answer key: 1 B, 2 A, 3 C, 4 B, 5 C)
  choiceActivity: {
    title: "Choose the Correct Answer",
    instructions: "Choose the correct answer.",
    questions: [
      choice(
        1,
        'What is the Kapampangan word for "bird"?',
        ["Sdâ", "Ibon", "Aso", "Pusa"],
        "B",
      ),
      choice(
        2,
        'Which word means "forest"?',
        ["Kagubatan", "Bunduk", "Ilug", "Lawa"],
        "A",
      ),
      choice(
        3,
        'What is the Kapampangan word for "flower"?',
        ["Dahun", "Sanga", "Bulaklak", "Gamat"],
        "C",
      ),
      choice(
        4,
        "Which animal is commonly associated with swimming in water?",
        ["Kabayu", "Sdâ", "Manuk", "Unggoy"],
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

  // 8. Activity 3 (answers from the document's answer key, in the word
  // bank's spelling)
  fillInBlanks: {
    title: "Fill in the Blanks",
    items: fills(
      "fill",
      [
        ["__ ya ing ibon king langit.", "lumipad", "The bird flies in the sky."],
        ["Mangan ya ning damu ing __.", "baka", "The cow eats grass."],
        [
          "Dakal a __ king kagubatan.",
          "punu",
          "There are many trees in the forest.",
        ],
        [
          "Lumangoy ya ing __ king danum.",
          "sdâ",
          "The fish swims in the water.",
        ],
        ["Maganda la ding __.", "bulaklak", "The flowers are beautiful."],
      ],
      {
        title: "Fill in the Blanks",
        instructions:
          "Choose the correct Kapampangan word to complete each sentence.",
        wordBank: ["punu", "sdâ", "lumipad", "bulaklak", "baka"],
      },
    ),
  },

  // 8. Activity 4
  arrangeWords: {
    title: "Arrange the Words",
    instructions: "Arrange the words to form a correct Kapampangan sentence.",
    items: [
      arrange(
        "1",
        "ing / Maragul / elepante / ya",
        "Maragul ya ing elepante.",
      ),
      arrange(
        "2",
        "king / Lumangoy / sdâ / danum / ya / ing",
        "Lumangoy ya ing sdâ king danum.",
      ),
      arrange(
        "3",
        "punu / Dakal / kagubatan / king / a",
        "Dakal a punu king kagubatan.",
      ),
      arrange(
        "4",
        "ing / Mabilis / kabayu / tumakbu / ya",
        "Mabilis ya tumakbu ing kabayu.",
      ),
      arrange(
        "5",
        "pakpak / yang / Atin / ibon / ing",
        "Atin yang pakpak ing ibon.",
      ),
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
        'What is the Kapampangan word for "turtle"?',
        ["Pagung", "Palaka", "Ahas", "Patu"],
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
          "Lumangoy ya ing ibon king danum.",
          "Mangan ya ing ibon ning damu.",
          "Lumipad ya ing ibon king langit.",
          "Matulug ya ing ibon king lupa.",
        ],
        "C",
      ),
      choice(
        4,
        'What is the Kapampangan word for "branch"?',
        ["Gamat", "Dahun", "Sanga", "Batu"],
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
        'Which animal is called "damulag" in Kapampangan?',
        ["Horse", "Cow", "Carabao", "Goat"],
        "C",
      ),
      choice(
        7,
        'Complete the sentence: "Atin yang __ ing ibon."',
        ["pakpak", "kaliskis", "sungay", "gamat"],
        "A",
      ),
      choice(
        8,
        'What does "Matira" mean?',
        ["Eats", "Sleeps", "Lives", "Runs"],
        "C",
      ),
      choice(
        9,
        'Which sentence means "There are many flowers"?',
        ["Dakal a punu.", "Dakal a bulaklak.", "Dakal a ayup.", "Dakal a batu."],
        "B",
      ),
      choice(
        10,
        'Complete the sentence: "Mangan ya ning damu ing __."',
        ["sdâ", "baka", "ibon", "ahas"],
        "B",
      ),
    ],
  },

  // 8. Activity 5: Listening and Pronunciation. English meanings are from
  // the vocabulary tables and the Lesson Proper.
  speaking: {
    title: "Listening and Pronunciation",
    instructions:
      "Listen to the recorded Kapampangan words and repeat them aloud.",
    note: "Pronounce each syllable clearly, avoid omitted or added syllables, and repeat the complete word at a natural speaking pace.",
    phrases: phrases([
      ["Kagubatan", "Forest"],
      ["Paru-paru", "Butterfly"],
      ["Damulag", "Carabao / Water buffalo"],
      ["Bulaklak", "Flower"],
      ["Bituin", "Star"],
      ["Mapanganib", "Dangerous"],
      ["Lumangoy", "To swim"],
      ["Matira", "Lives / Resides"],
    ]),
  },

  // 8. Activity 6 (needs a picture; no screen yet).
  extraActivities: [
    {
      title: "Describe the Picture",
      instructions:
        "Display an image of an animal or natural environment. Ask learners to describe what they see using at least two Kapampangan sentences.",
      items: [
        "Metung ya ining aso. – This is a dog.",
        "Atin yang punu king bandi ning aso. – There is a tree beside the dog.",
        "Maliit ya ing aso. – The dog is small.",
      ],
      note: "Example image: A dog standing beside a tree. The items are the document's possible answers.",
    },
  ],

  // 10. Gamification Integration. Same mapping as the Tagalog Lesson 8:
  // practice activities = the multiple choice, fill-in and arrange
  // exercises; the matching activity has no XP row in the document.
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
