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

// Tagalog Lesson 6 — copied from "Tagalog 6.pdf". The PDF's tables lost
// their columns, so each Tagalog line was paired with the English and
// pronunciation lines in the same position (the counts match in every
// table). Nothing in the Tagalog was changed.

export const tagalogLesson6ReviewItems = [
  'Speaking: "Gusto ko ng adobo at kanin." has no English in the document; "I want adobo and rice." is inferred.',
  'Speaking: "Umiinom ako ng malamig na tubig." has no English in the document; "I am drinking cold water." is inferred.',
  'Speaking: "Masarap ang nilutong pagkain." has no English in the document; "The cooked food is delicious." is inferred.',
];

// 4. Vocabulary
const expressionGroups: LessonExpressionGroup[] = [
  {
    title: "A. Common Filipino Dishes",
    items: words([
      ["Adobo", "Adobo", "ah-DOH-boh"],
      ["Sinigang", "Sour soup", "see-NEE-gang"],
      ["Tinola", "Chicken ginger soup", "tee-NOH-lah"],
      ["Kare-kare", "Peanut-based stew", "kah-reh-KAH-reh"],
      ["Sisig", "Chopped and seasoned meat dish", "SEE-seeg"],
      ["Pancit", "Noodle dish", "PAHN-seet"],
      ["Lumpia", "Spring roll", "loom-PEE-yah"],
      ["Lechon", "Roasted pig", "LEH-chon"],
      ["Tapsilog", "Beef tapa, fried rice, and egg", "tahp-see-LOG"],
      ["Longganisa", "Filipino sausage", "long-gah-NEE-sah"],
      ["Pinakbet", "Mixed vegetable dish", "pee-NAHK-bet"],
      ["Menudo", "Pork and vegetable stew", "meh-NOO-doh"],
      ["Dinuguan", "Pork blood stew", "dee-noo-GOO-ahn"],
      ["Laing", "Taro leaves cooked in coconut milk", "LAH-eeng"],
      ["Bicol Express", "Spicy coconut milk-based dish", "BEE-kol ehk-SPREHS"],
    ]),
  },
  {
    title: "B. Common Food Items",
    items: words([
      ["Kanin", "Cooked rice", "KAH-neen"],
      ["Bigas", "Uncooked rice", "BEE-gas"],
      ["Tinapay", "Bread", "tee-NAH-pie"],
      ["Itlog", "Egg", "EET-log"],
      ["Karne", "Meat", "KAR-neh"],
      ["Baboy", "Pork / Pig", "BAH-boy"],
      ["Manok", "Chicken", "MAH-nok"],
      ["Baka", "Beef / Cow", "BAH-kah"],
      ["Isda", "Fish", "EES-dah"],
      ["Gulay", "Vegetables", "GOO-lie"],
      ["Prutas", "Fruits", "PROO-tas"],
      ["Keso", "Cheese", "KEH-soh"],
      ["Gatas", "Milk", "GAH-tas"],
      ["Asin", "Salt", "AH-seen"],
      ["Asukal", "Sugar", "ah-SOO-kal"],
      ["Mantika", "Cooking oil", "mahn-TEE-kah"],
    ]),
  },
  {
    title: "C. Fruits and Vegetables",
    items: words([
      ["Saging", "Banana"],
      ["Mangga", "Mango"],
      ["Mansanas", "Apple"],
      ["Pakwan", "Watermelon"],
      ["Pinya", "Pineapple"],
      ["Papaya", "Papaya"],
      ["Ubas", "Grapes"],
      ["Bayabas", "Guava"],
      ["Kamatis", "Tomato"],
      ["Talong", "Eggplant"],
      ["Kalabasa", "Squash"],
      ["Sitaw", "String beans"],
      ["Repolyo", "Cabbage"],
      ["Karot", "Carrot"],
      ["Patatas", "Potato"],
      ["Sibuyas", "Onion"],
      ["Bawang", "Garlic"],
      ["Kangkong", "Water spinach"],
    ]),
  },
  {
    title: "D. Drinks",
    items: words([
      ["Tubig", "Water", "TOO-beeg"],
      ["Gatas", "Milk", "GAH-tas"],
      ["Kape", "Coffee", "KAH-peh"],
      ["Tsaa", "Tea", "CHAH-ah"],
      ["Katas", "Juice", "KAH-tas"],
      ["Kalamansi juice", "Calamansi juice", "kah-lah-MAHN-see"],
      ["Buko juice", "Coconut water", "BOO-koh"],
      ["Soft drinks", "Soft drinks", "soft drinks"],
      [
        "Mainit na tsokolate",
        "Hot chocolate",
        "mah-EE-neet nah choh-koh-LAH-teh",
      ],
      ["Salabat", "Ginger tea", "sah-LAH-bat"],
    ]),
  },
  {
    title: "E. Meals and Food-Related Vocabulary",
    items: words([
      ["Almusal", "Breakfast"],
      ["Tanghalian", "Lunch"],
      ["Hapunan", "Dinner"],
      ["Meryenda", "Snack"],
      ["Pagkain", "Food"],
      ["Inumin", "Drink / Beverage"],
      ["Ulam", "Main dish eaten with rice"],
      ["Sahog", "Ingredient"],
      ["Sangkap", "Ingredient"],
      ["Plato", "Plate"],
      ["Kutsara", "Spoon"],
      ["Tinidor", "Fork"],
      ["Kutsilyo", "Knife"],
      ["Baso", "Drinking glass"],
      ["Mangkok", "Bowl"],
      ["Mesa", "Table"],
      ["Resibo", "Receipt"],
      ["Menu", "Menu"],
      ["Presyo", "Price"],
    ]),
  },
  {
    title: "F. Food-Related Expressions",
    items: words([
      ["Gutom", "Hunger"],
      ["Uhaw", "Thirst"],
      ["Busog", "Full / Satisfied after eating"],
      ["Masarap", "Delicious"],
      ["Matamis", "Sweet"],
      ["Maasim", "Sour"],
      ["Maalat", "Salty"],
      ["Mapait", "Bitter"],
      ["Maanghang", "Spicy"],
      ["Mainit", "Hot"],
      ["Malamig", "Cold"],
      ["Sariwa", "Fresh"],
      ["Luto", "Cooked"],
      ["Hilaw", "Raw / Uncooked"],
    ]),
  },
];

// 5. Useful Phrases and Sentences
const situationGroups: LessonExpressionGroup[] = [
  {
    title: "A. Talking About Food",
    items: words([
      ["Ano ang gusto mong kainin?", "What do you want to eat?"],
      ["Gusto ko ng adobo.", "I want adobo."],
      ["Ano ang paborito mong pagkain?", "What is your favorite food?"],
      ["Paborito ko ang sinigang.", "Sinigang is my favorite."],
      ["Masarap ang pagkain.", "The food is delicious."],
      ["Ayoko ng maanghang na pagkain.", "I don't like spicy food."],
      ["Mahilig akong kumain ng prutas.", "I like eating fruits."],
      ["Kumain na tayo.", "Let's eat."],
    ]),
  },
  {
    title: "B. Talking About Drinks",
    items: words([
      ["Ano ang gusto mong inumin?", "What do you want to drink?"],
      ["Gusto ko ng tubig.", "I want water."],
      ["Uhaw na ako.", "I'm thirsty."],
      ["Maaari bang makahingi ng tubig?", "May I have some water?"],
      ["Gusto mo ba ng kape?", "Would you like coffee?"],
      ["Ayoko ng malamig na inumin.", "I don't like cold drinks."],
    ]),
  },
  {
    title: "C. Talking About Hunger and Fullness",
    items: words([
      ["Gutom na ako.", "I'm hungry."],
      ["Busog na ako.", "I'm already full."],
      ["Hindi pa ako kumakain.", "I haven't eaten yet."],
      ["Kumain ka na ba?", "Have you eaten?"],
      ["Kakatapos ko lang kumain.", "I just finished eating."],
      ["Masarap ang niluto mo.", "What you cooked is delicious."],
    ]),
  },
  {
    title: "D. Offering and Requesting Food",
    items: words([
      ["Gusto mo ba nito?", "Do you want this?"],
      ["Tikman mo ito.", "Try this."],
      ["Maaari ba akong humingi ng pagkain?", "May I ask for some food?"],
      ["Pahingi ng isang basong tubig.", "Please give me a glass of water."],
      ["Puwede bang dagdagan ang kanin?", "Can I have more rice?"],
      ["Pakidala na lang ang menu.", "Please bring the menu."],
    ]),
  },
];

export const tagalogLesson6: StructuredLesson = {
  lessonId: "tagalog_6",
  dialect: "tagalog",
  dialectLabel: "Tagalog",
  lessonNumber: 6,
  title: "Food and Drinks",
  level: "Beginner",
  unit: "Everyday Vocabulary",

  // 3. Lesson Introduction
  intro: [
    "Food is an important part of Filipino culture. Rice, vegetables, meat, fish, fruits, and various traditional dishes are commonly found in Filipino meals.",
    "People also use food-related expressions in everyday conversations, such as asking what someone wants to eat, offering food, or describing their favorite dishes.",
    "Examples: Ano ang gusto mong kainin? – What do you want to eat? Gusto ko ng adobo. – I want adobo. Gutom na ako. – I'm hungry. Busog na ako. – I'm already full. Masarap ang pagkain. – The food is delicious.",
    "In this lesson, learners will explore common food and drink vocabulary and practice using these expressions in everyday situations.",
  ],

  // 2. Learning Objectives
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify common Filipino food and drinks using their Tagalog names.",
    "Recognize vocabulary related to meals, ingredients, and eating.",
    "Express basic food preferences using simple Tagalog sentences.",
    "Ask and answer questions about food and drinks.",
    "Participate in simple conversations about meals and ordering food.",
  ],

  expressionsIntro:
    "Tap the speaker to hear each word. Read each syllable clearly.",
  expressionGroups,

  // 6. Lesson Proper
  languageNotes: [
    {
      title: "A. Understanding Common Filipino Meals",
      body: [
        "Filipino meals often include rice and a main dish called ulam. The meal may also include vegetables, soup, or other side dishes.",
        "The three common meals are: Almusal – Breakfast, Tanghalian – Lunch, Hapunan – Dinner.",
      ],
      examples: sentences([
        [
          "Kumakain ako ng itlog at tinapay tuwing almusal.",
          "I eat eggs and bread for breakfast.",
        ],
        [
          "Kanin at adobo ang tanghalian namin.",
          "We have rice and adobo for lunch.",
        ],
        [
          "Isda at gulay ang hapunan namin.",
          "We have fish and vegetables for dinner.",
        ],
      ]),
      remember:
        "Ulam does not have a direct one-word English equivalent. It usually refers to the dish eaten alongside rice.",
    },
    {
      title: "B. Expressing Food Preferences",
      body: [
        'Gusto ko ng + food or drink: this means "I want" or "I like" something, depending on the context.',
        'Ayoko ng + food or drink: this means "I don\'t like" or "I don\'t want" something.',
        'Paborito ko ang + food: this means "My favorite is..."',
      ],
      examples: sentences([
        ["Gusto ko ng mangga.", "I want mangoes."],
        ["Gusto ko ng gatas.", "I want milk."],
        ["Gusto ko ng adobo.", "I want adobo."],
        ["Ayoko ng kape.", "I don't like coffee."],
        ["Ayoko ng maanghang na pagkain.", "I don't like spicy food."],
        ["Ayoko ng mapait na gulay.", "I don't like bitter vegetables."],
        ["Paborito ko ang sinigang.", "My favorite is sinigang."],
        ["Paborito ko ang mangga.", "My favorite is mango."],
        ["Paborito ko ang adobo.", "My favorite is adobo."],
      ]),
    },
    {
      title: "C. Describing the Taste of Food",
      body: [
        "Learners can use descriptive words to talk about how food tastes: Matamis – Sweet, Maasim – Sour, Maalat – Salty, Mapait – Bitter, Maanghang – Spicy, Masarap – Delicious.",
      ],
      examples: sentences([
        ["Matamis ang mangga.", "The mango is sweet."],
        ["Maasim ang sinigang.", "The sinigang is sour."],
        ["Maanghang ang pagkain.", "The food is spicy."],
        ["Masarap ang adobo.", "The adobo is delicious."],
      ]),
    },
    {
      title: "D. Ordering Food",
      body: [
        "When ordering food, learners can use polite expressions such as Puwede bang... or Paki-.",
      ],
      examples: sentences([
        ["Puwede bang umorder?", "May I order?"],
        ["Isang order ng adobo, pakiusap.", "One order of adobo, please."],
        ["Pahingi ng isang basong tubig.", "May I have a glass of water?"],
        ["Magkano ang pagkain na ito?", "How much is this food?"],
        ["Puwede na po ang bill.", "May I have the bill, please?"],
      ]),
    },
    {
      title: "E. Talking About Cooking and Eating",
      body: ["Some common verbs related to food include:"],
      table: {
        leftHeading: "Tagalog",
        rightHeading: "English",
        rows: [
          { left: "Kumain", right: "To eat" },
          { left: "Uminom", right: "To drink" },
          { left: "Magluto", right: "To cook" },
          { left: "Maghanda", right: "To prepare" },
          { left: "Tikman", right: "To taste / Try" },
          { left: "Maghugas", right: "To wash" },
          { left: "Bumili", right: "To buy" },
          { left: "Mag-order", right: "To order" },
        ],
      },
      examples: sentences([
        ["Nagluluto si Nanay ng adobo.", "Mother is cooking adobo."],
        ["Kumakain kami ng hapunan.", "We are eating dinner."],
        ["Umiinom ako ng tubig.", "I am drinking water."],
        ["Tumikim ka ng bagong luto.", "Try the freshly cooked food."],
      ]),
    },
  ],

  situationsTitle: "Useful phrases and sentences",
  situationGroups,

  // 7. Guided Conversations
  conversations: [
    {
      situation: "Conversation 1: Talking About Favorite Food",
      lines: dialogue([
        [
          "Person A",
          "Ano ang paborito mong pagkain?",
          "What is your favorite food?",
        ],
        ["Person B", "Paborito ko ang adobo.", "My favorite is adobo."],
        ["Person A", "Bakit mo gusto ang adobo?", "Why do you like adobo?"],
        [
          "Person B",
          "Dahil masarap ito at gusto ko ang lasa nito.",
          "Because it is delicious and I like its taste.",
        ],
        [
          "Person A",
          "Mahilig ka rin ba sa sinigang?",
          "Do you also like sinigang?",
        ],
        [
          "Person B",
          "Oo, gusto ko rin ang sinigang.",
          "Yes, I also like sinigang.",
        ],
      ]),
    },
    {
      situation: "Conversation 2: Eating at Home",
      lines: dialogue([
        ["Person A", "Kumain ka na ba?", "Have you eaten?"],
        [
          "Person B",
          "Hindi pa. Ano ang ulam natin?",
          "Not yet. What is our main dish?",
        ],
        [
          "Person A",
          "May adobo at gulay tayo.",
          "We have adobo and vegetables.",
        ],
        ["Person B", "Ang sarap naman!", "That sounds delicious!"],
        ["Person A", "Kumuha ka na ng kanin.", "Go ahead and get some rice."],
      ]),
    },
    {
      situation: "Conversation 3: Ordering at a Restaurant",
      lines: dialogue([
        [
          "Customer",
          "Magandang hapon po. Maaari bang makita ang menu?",
          "Good afternoon. May I see the menu?",
        ],
        ["Server", "Opo. Heto po ang menu.", "Certainly. Here is the menu."],
        [
          "Customer",
          "Magkano po ang isang order ng pancit?",
          "How much is one order of pancit?",
        ],
        [
          "Server",
          "Isang daan at dalawampung piso po.",
          "It is one hundred twenty pesos.",
        ],
        [
          "Customer",
          "Sige po. Isang order ng pancit at isang basong tubig.",
          "All right. One order of pancit and one glass of water.",
        ],
        ["Server", "Opo. Sandali lang po.", "Certainly. Just a moment."],
      ]),
    },
    {
      situation: "Conversation 4: Offering Drinks",
      lines: dialogue([
        ["Person A", "Uhaw ka ba?", "Are you thirsty?"],
        [
          "Person B",
          "Oo, medyo uhaw na ako.",
          "Yes, I'm a little thirsty.",
        ],
        [
          "Person A",
          "Gusto mo ba ng tubig o katas ng mangga?",
          "Would you like water or mango juice?",
        ],
        ["Person B", "Tubig na lang, salamat.", "Just water, thank you."],
        ["Person A", "Heto ang tubig mo.", "Here is your water."],
        ["Person B", "Maraming salamat!", "Thank you very much!"],
      ]),
    },
  ],

  // 8. Activity 1 (answer key: 1 B, 2 A, 3 D, 4 C, 5 E)
  matchActivity: {
    title: "Matching Type",
    instructions:
      "Match the Tagalog words in Column A with their English meanings in Column B.",
    pairs: matchPairs(
      ["Kanin", "Tubig", "Manok", "Tinapay", "Saging"],
      ["Water", "Cooked rice", "Bread", "Chicken", "Banana"],
      "B A D C E",
    ),
  },

  // 8. Activity 2 (answer key: 1 B, 2 C, 3 C, 4 C, 5 B)
  choiceActivity: {
    title: "Multiple Choice",
    instructions: "Choose the correct answer.",
    questions: [
      choice(
        1,
        "What is the Tagalog word for breakfast?",
        ["Hapunan", "Almusal", "Tanghalian", "Meryenda"],
        "B",
      ),
      choice(
        2,
        "Which word means vegetables?",
        ["Prutas", "Karne", "Gulay", "Isda"],
        "C",
      ),
      choice(
        3,
        "What does masarap mean?",
        ["Bitter", "Sour", "Delicious", "Salty"],
        "C",
      ),
      choice(
        4,
        "Which of the following means water?",
        ["Gatas", "Kape", "Tubig", "Tsaa"],
        "C",
      ),
      choice(
        5,
        "What does Gusto ko ng adobo mean?",
        ["I dislike adobo.", "I want adobo.", "I cooked adobo.", "I bought adobo."],
        "B",
      ),
    ],
  },

  // 8. Activities 3 and 5 share the fill-in step (answers from the
  // document's answer key).
  fillInBlanks: {
    title: "Fill in the Blanks",
    items: [
      ...fills(
        "fill",
        [
          ["Ang Tagalog word for rice is ________.", "Kanin"],
          ["Ang pagkain sa umaga ay tinatawag na ________.", "Almusal"],
          ["Ang Tagalog word for fish is ________.", "Isda"],
          [
            "Kapag nauuhaw ka, kailangan mong uminom ng ________.",
            "Tubig",
          ],
          ["Ang Tagalog word for delicious is ________.", "Masarap"],
        ],
        {
          title: "Fill in the Blanks",
          instructions: "Complete each sentence using the correct Tagalog word.",
        },
      ),
      ...fills(
        "taste",
        [
          ["A candy that tastes sweet. ________", "Matamis"],
          ["A lemon that tastes sour. ________", "Maasim"],
          ["A dish with too much salt. ________", "Maalat"],
          ["A spicy chili dish. ________", "Maanghang"],
          ["A bitter vegetable. ________", "Mapait"],
        ],
        {
          title: "Identify the Taste",
          instructions:
            "Choose the correct Tagalog word that describes each food.",
          wordBank: ["Matamis", "Maasim", "Maalat", "Maanghang", "Mapait"],
        },
      ),
    ],
  },

  // 8. Activity 4
  arrangeWords: {
    title: "Arrange the Words",
    instructions: "Arrange the words to form a correct Tagalog sentence.",
    items: [
      arrange("1", "ko / adobo / gusto / ng", "Gusto ko ng adobo."),
      arrange("2", "masarap / ang / pagkain", "Masarap ang pagkain."),
      arrange("3", "ako / na / gutom", "Gutom na ako."),
      arrange(
        "4",
        "tubig / basong / isang / ng / pahingi",
        "Pahingi ng isang basong tubig.",
      ),
      arrange("5", "paborito / sinigang / ko / ang", "Paborito ko ang sinigang."),
    ],
  },

  // 9. Lesson Assessment (answer key: 1 B, 2 A, 3 C, 4 B, 5 D, 6 A, 7 C,
  // 8 C, 9 B, 10 B)
  assessment: {
    instructions: "Choose the correct answer.",
    passPercent: 70,
    questions: [
      choice(
        1,
        "What is the Tagalog word for cooked rice?",
        ["Bigas", "Kanin", "Tinapay", "Gulay"],
        "B",
      ),
      choice(
        2,
        "What does almusal mean?",
        ["Breakfast", "Lunch", "Dinner", "Snack"],
        "A",
      ),
      choice(
        3,
        "What is the Tagalog word for fruit?",
        ["Gulay", "Karne", "Prutas", "Isda"],
        "C",
      ),
      choice(
        4,
        "What does uhaw mean?",
        ["Hungry", "Thirsty", "Full", "Tired"],
        "B",
      ),
      choice(
        5,
        "Which word means spicy?",
        ["Matamis", "Maasim", "Maalat", "Maanghang"],
        "D",
      ),
      choice(
        6,
        'How do you say "I want water" in Tagalog?',
        [
          "Gusto ko ng tubig.",
          "Ayoko ng tubig.",
          "Umiinom ako ng gatas.",
          "Masarap ang tubig.",
        ],
        "A",
      ),
      choice(
        7,
        "What does Busog na ako mean?",
        ["I am hungry.", "I am thirsty.", "I am already full.", "I am cooking."],
        "C",
      ),
      choice(
        8,
        "Which of the following means dinner?",
        ["Almusal", "Tanghalian", "Hapunan", "Meryenda"],
        "C",
      ),
      choice(
        9,
        "What does Paborito ko ang mangga mean?",
        [
          "I don't like mangoes.",
          "Mango is my favorite.",
          "I am eating mangoes.",
          "I am buying mangoes.",
        ],
        "B",
      ),
      choice(
        10,
        "What does Ano ang gusto mong inumin? mean?",
        [
          "What do you want to eat?",
          "What do you want to drink?",
          "What is your favorite food?",
          "Have you eaten?",
        ],
        "B",
      ),
    ],
  },

  // 8. Activity 6: Listening and Pronunciation (Parts A–D). English
  // meanings are from the vocabulary and phrase tables; three are
  // inferred (see the review items).
  speaking: {
    title: "Listening and Pronunciation",
    instructions: "Listen to the recorded words and repeat them aloud.",
    phrases: phrases([
      ["Kanin", "Cooked rice"],
      ["Tinapay", "Bread"],
      ["Itlog", "Egg"],
      ["Manok", "Chicken"],
      ["Isda", "Fish"],
      ["Gulay", "Vegetables"],
      ["Prutas", "Fruits"],
      ["Tubig", "Water"],
      ["Gatas", "Milk"],
      ["Kape", "Coffee"],
      ["Tsaa", "Tea"],
      ["Katas", "Juice"],
      ["Buko juice", "Coconut water"],
      ["Salabat", "Ginger tea"],
      ["Ano ang gusto mong kainin?", "What do you want to eat?"],
      ["Ano ang gusto mong inumin?", "What do you want to drink?"],
      ["Gutom na ako.", "I'm hungry."],
      ["Busog na ako.", "I'm already full."],
      ["Masarap ang pagkain.", "The food is delicious."],
      ["Gusto ko ng adobo at kanin.", "I want adobo and rice."],
      ["Paborito ko ang sinigang.", "My favorite is sinigang."],
      ["Umiinom ako ng malamig na tubig.", "I am drinking cold water."],
      ["Masarap ang nilutong pagkain.", "The cooked food is delicious."],
      ["Kumakain kami ng hapunan.", "We are eating dinner."],
    ]),
  },

  // 10. Gamification Integration. The document's rows are given to the
  // matching parts of the lesson: food and drinks practice = the matching
  // activity; food preference practice = the multiple choice, fill-in and
  // arrange exercises.
  rewards: {
    items: [
      { section: "vocabulary", label: "Vocabulary Review", xp: 10 },
      { section: "match", label: "Food and Drinks Practice", xp: 10 },
      { section: "sentences", label: "Food Preference Practice", xp: 10 },
      { section: "conversation", label: "Guided Conversation", xp: 10 },
      { section: "assessment", label: "Lesson Assessment", xp: 20 },
    ],
    total: 60,
    badge: {
      name: "Food Explorer Badge",
      description:
        "Unlock this badge after successfully completing the lesson assessment with a score of at least 70%.",
    },
    completionRequirement:
      "Finish the vocabulary review, complete the practice activities, and obtain at least 70% in the lesson assessment. Learners who do not reach the passing score may review the lesson and retake the assessment.",
  },
};
