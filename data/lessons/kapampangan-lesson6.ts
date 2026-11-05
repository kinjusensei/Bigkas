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

// Kapampangan Lesson 6 — copied from "Kapampangan_Lesson_6.docx", a
// translation of the Tagalog Lesson 6. The words and sentences are
// working translations. Nothing was corrected. Instructions, activities
// and the assessment keep the document's English.
//
// The document marks some phrases "(?)" — to be checked by a native
// Kapampangan speaker. The marks are left out of what learners see; the
// phrases are listed in kapampanganReviewItems below.

// Phrases the document marks "(?)", exactly as written (without the mark),
// in the document's order.
export const kapampanganReviewItems: string[] = [
  "Maragul a bagay ing pamangan king kultura ning Pilipinas, lalu na king Pampanga. Ing nasi, gulay, karne, i-sdâ, bunga, at aliwang tradisyunal a pamangan ila ing makaiktan keng pamangan.",
  "Nanu ing buri mung kanan? – What do you want to eat?",
  "Buri ku ing adobo. – I want adobo.",
  "Mabayat na ku. – I'm hungry.",
  "Mabusug na ku. – I'm already full.",
  "Masalui ing pamangan. – The food is delicious.",
  "Nasi",
  "Pale",
  "Pitlog",
  "Sdâ",
  "Bunga",
  "Talung",
  "Lasona",
  "Danum",
  "Mainit a tsokolate",
  "Pananghali",
  "Pamamanawan / Hapunan",
  "Mabayat",
  "Mauhaw",
  "Mabusug",
  "Masalui",
  "Nanu ing buri mung kanan?",
  "Buri ku ing adobo.",
  "Nanu ing paburitu mung pamangan?",
  "Paburitu ku ing sinigang.",
  "Masalui ing pamangan.",
  "Ali ku buri ing maanghang a pamangan.",
  "Mikakaluguran ku king bunga.",
  "Kakanan tamu na.",
  "Nanu ing buri mung inumen?",
  "Buri ku ing danum.",
  "Mauhaw na ku.",
  "Makasaup ku nung danum, pu?",
  "Buri mu bang kape?",
  "Ali ku buri ing malamig a inumen.",
  "Mabayat na ku.",
  "Mabusug na ku.",
  "Alang pa ku mikan.",
  "Mikan ka na?",
  "Mitapus ku pa mu mikan.",
  "Masalui ing lutu mu.",
  "Buri mu ba ini?",
  "Makasaup ku bang pamangan, pu?",
  "Pasaup ku ning metung a baso a danum.",
  "Pwede bang dagdagan ing nasi?",
  "Paki-sapat ya ing menu.",
  "Ing pamangan ning Pilipinu lagi yang atin nasi at metung a ulam. Pwedeng atin yang gulay, sabaw, o aliwang kayabe.",
  "Pananghali – Lunch",
  "Hapunan – Dinner",
  "Mamangan ku ning pitlog at tinapay istung almusal. – I eat eggs and bread for breakfast.",
  "Nasi at adobo ing pananghali mi. – We have rice and adobo for lunch.",
  "Sdâ at gulay ing hapunan mi. – We have fish and vegetables for dinner.",
  "Buri ku ing + food or drink",
  "Buri ku ing mangga. – I want mangoes.",
  "Buri ku ing gatas. – I want milk.",
  "Ali ku buri ing + food or drink",
  "Ali ku buri ing kape. – I don't like coffee.",
  "Ali ku buri ing maanghang a pamangan. – I don't like spicy food.",
  "Ali ku buri ing mapait a gulay. – I don't like bitter vegetables.",
  "Paburitu ku ing sinigang. – My favorite is sinigang.",
  "Paburitu ku ing mangga. – My favorite is mango.",
  "Paburitu ku ing adobo. – My favorite is adobo.",
  "Matamis ya ing mangga. – The mango is sweet.",
  "Maslam ya ing sinigang. – The sinigang is sour.",
  "Maanghang ya ing pamangan. – The food is spicy.",
  "Masalui ya ing adobo. – The adobo is delicious.",
  "Pwede bang mag-order, pu? – May I order?",
  "Metung a order ning adobo, pu. – One order of adobo, please.",
  "Pasaup ku ning metung a baso a danum. – May I have a glass of water?",
  "Magkanu ya ini a pamangan? – How much is this food?",
  "Pwede na ing bill, pu. – May I have the bill, please?",
  "Mangan",
  "Minum",
  "Magluluto ya ing ima ning adobo. – Mother is cooking adobo.",
  "Mamangan kami ning hapunan. – We are eating dinner.",
  "Minum ku ning danum. – I am drinking water.",
  "Tikman mu ing bayung lutu. – Try the freshly cooked food.",
];

// Not marked in the document, but worth checking too.
export const kapampanganLesson6Notes: string[] = [
  'Activity 4 item 4: the tiles are "danum / baso / metung / ning / pasaup" but the answer key is "Pasaup ku ning metung a baso a danum.", so tiles "ku", "a" and "a" were added.',
  'Speaking: "Buri ku ing adobo at nasi." has no English in the document; "I want adobo and rice." is inferred.',
  'Speaking: "Minum ku ning malamig a danum." has no English in the document; "I am drinking cold water." is inferred.',
  'Speaking: "Masalui ing lutung pamangan." has no English in the document; "The cooked food is delicious." is inferred.',
];

// 4. Vocabulary
const expressionGroups: LessonExpressionGroup[] = [
  {
    title: "A. Common Filipino Dishes",
    intro: [
      "Most dish names are the same in Kapampangan. Pampanga is known as the culinary capital of the Philippines, with famous dishes such as sisig, tocino and morcon.",
    ],
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
      ["Nasi", "Cooked rice", "NA-si"],
      ["Pale", "Uncooked rice (palay)", "PA-le"],
      ["Tinapay", "Bread", "ti-NA-pay"],
      ["Pitlog", "Egg", "PIT-log"],
      ["Karne", "Meat", "KAR-ne"],
      ["Babi", "Pork / Pig", "BA-bi"],
      ["Manuk", "Chicken", "MA-nuk"],
      ["Baka", "Beef / Cow", "BA-ka"],
      ["Sdâ", "Fish", "sda"],
      ["Gulay", "Vegetables", "GU-lay"],
      ["Bunga", "Fruits", "BU-nga"],
      ["Keso", "Cheese", "KE-so"],
      ["Gatas", "Milk", "GA-tas"],
      ["Asin", "Salt", "A-sin"],
      ["Asukal", "Sugar", "a-SU-kal"],
      ["Mantika", "Cooking oil", "man-TI-ka"],
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
      ["Talung", "Eggplant"],
      ["Kalabasa", "Squash"],
      ["Sitaw", "String beans"],
      ["Repolyo", "Cabbage"],
      ["Karot", "Carrot"],
      ["Patatas", "Potato"],
      ["Lasona", "Onion"],
      ["Bawang", "Garlic"],
      ["Kangkung", "Water spinach"],
    ]),
  },
  {
    title: "D. Drinks",
    items: words([
      ["Danum", "Water", "DA-num"],
      ["Gatas", "Milk", "GA-tas"],
      ["Kape", "Coffee", "KA-pe"],
      ["Tsa", "Tea", "tsa"],
      ["Katas", "Juice", "KA-tas"],
      ["Kalamansi juice", "Calamansi juice", "ka-la-MAN-si"],
      ["Buko juice", "Coconut water", "BU-ko"],
      ["Soft drinks", "Soft drinks", "soft drinks"],
      ["Mainit a tsokolate", "Hot chocolate", "ma-I-nit a tso-ko-LA-te"],
      ["Salabat", "Ginger tea", "sa-LA-bat"],
    ]),
  },
  {
    title: "E. Meals and Food-Related Vocabulary",
    items: words([
      ["Almusal", "Breakfast"],
      ["Pananghali", "Lunch"],
      ["Pamamanawan / Hapunan", "Dinner"],
      ["Meryenda", "Snack"],
      ["Pamangan", "Food"],
      ["Inumin", "Drink / Beverage"],
      ["Ulam", "Main dish eaten with rice"],
      ["Sahog", "Ingredient"],
      ["Sangkap", "Ingredient"],
      ["Plato", "Plate"],
      ["Kutsara", "Spoon"],
      ["Tinidor", "Fork"],
      ["Kutsilyo", "Knife"],
      ["Baso", "Drinking glass"],
      ["Mangkuk", "Bowl"],
      ["Mesa", "Table"],
      ["Resibo", "Receipt"],
      ["Menu", "Menu"],
      ["Presyu", "Price"],
    ]),
  },
  {
    title: "F. Food-Related Expressions",
    items: words([
      ["Mabayat", "Hunger / Hungry"],
      ["Mauhaw", "Thirst / Thirsty"],
      ["Mabusug", "Full / Satisfied after eating"],
      ["Masalui", "Delicious"],
      ["Matamis", "Sweet"],
      ["Maslam", "Sour"],
      ["Maalat", "Salty"],
      ["Mapait", "Bitter"],
      ["Maanghang", "Spicy"],
      ["Mainit", "Hot"],
      ["Malamig", "Cold"],
      ["Sariwa", "Fresh"],
      ["Lutu", "Cooked"],
      ["Hilaw", "Raw / Uncooked"],
    ]),
  },
];

// 5. Useful Phrases and Sentences
const situationGroups: LessonExpressionGroup[] = [
  {
    title: "A. Talking About Food",
    items: words([
      ["Nanu ing buri mung kanan?", "What do you want to eat?"],
      ["Buri ku ing adobo.", "I want adobo."],
      ["Nanu ing paburitu mung pamangan?", "What is your favorite food?"],
      ["Paburitu ku ing sinigang.", "Sinigang is my favorite."],
      ["Masalui ing pamangan.", "The food is delicious."],
      ["Ali ku buri ing maanghang a pamangan.", "I don't like spicy food."],
      ["Mikakaluguran ku king bunga.", "I like eating fruits."],
      ["Kakanan tamu na.", "Let's eat."],
    ]),
  },
  {
    title: "B. Talking About Drinks",
    items: words([
      ["Nanu ing buri mung inumen?", "What do you want to drink?"],
      ["Buri ku ing danum.", "I want water."],
      ["Mauhaw na ku.", "I'm thirsty."],
      ["Makasaup ku nung danum, pu?", "May I have some water?"],
      ["Buri mu bang kape?", "Would you like coffee?"],
      ["Ali ku buri ing malamig a inumen.", "I don't like cold drinks."],
    ]),
  },
  {
    title: "C. Talking About Hunger and Fullness",
    items: words([
      ["Mabayat na ku.", "I'm hungry."],
      ["Mabusug na ku.", "I'm already full."],
      ["Alang pa ku mikan.", "I haven't eaten yet."],
      ["Mikan ka na?", "Have you eaten?"],
      ["Mitapus ku pa mu mikan.", "I just finished eating."],
      ["Masalui ing lutu mu.", "What you cooked is delicious."],
    ]),
  },
  {
    title: "D. Offering and Requesting Food",
    items: words([
      ["Buri mu ba ini?", "Do you want this?"],
      ["Tikman mu ini.", "Try this."],
      ["Makasaup ku bang pamangan, pu?", "May I ask for some food?"],
      [
        "Pasaup ku ning metung a baso a danum.",
        "Please give me a glass of water.",
      ],
      ["Pwede bang dagdagan ing nasi?", "Can I have more rice?"],
      ["Paki-sapat ya ing menu.", "Please bring the menu."],
    ]),
  },
];

export const kapampanganLesson6: StructuredLesson = {
  lessonId: "kapampangan_6",
  dialect: "kapampangan",
  dialectLabel: "Kapampangan",
  lessonNumber: 6,
  title: "Food and Drinks",
  level: "Beginner",
  unit: "Everyday Vocabulary",

  // 3. Lesson Introduction
  intro: [
    "Maragul a bagay ing pamangan king kultura ning Pilipinas, lalu na king Pampanga. Ing nasi, gulay, karne, i-sdâ, bunga, at aliwang tradisyunal a pamangan ila ing makaiktan keng pamangan.",
    "Gagamit uli ding tau ning mapuntayan a pamamagsalita istung magtalakad tungkul king pamangan, kaibat ning bage, o pagsalita king paburitu da.",
    "For example: Nanu ing buri mung kanan? – What do you want to eat? Buri ku ing adobo. – I want adobo. Mabayat na ku. – I'm hungry. Mabusug na ku. – I'm already full. Masalui ing pamangan. – The food is delicious.",
    "Keng leksyun a ini, magaral kayu ning bukabulari tungkul king pamangan at inumin at magpraktis kayung gamitan ya keng aldo-aldo a pamagsalita.",
  ],

  // 2. Learning Objectives (as in the Tagalog Lesson 6, in Kapampangan)
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify common Filipino food and drinks using their Kapampangan names.",
    "Recognize vocabulary related to meals, ingredients, and eating.",
    "Express basic food preferences using simple Kapampangan sentences.",
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
        "Ing pamangan ning Pilipinu lagi yang atin nasi at metung a ulam. Pwedeng atin yang gulay, sabaw, o aliwang kayabe.",
        "Ing tatlung pekamadalas a pamangan ila: Almusal – Breakfast, Pananghali – Lunch, Hapunan – Dinner.",
      ],
      examples: sentences([
        [
          "Mamangan ku ning pitlog at tinapay istung almusal.",
          "I eat eggs and bread for breakfast.",
        ],
        ["Nasi at adobo ing pananghali mi.", "We have rice and adobo for lunch."],
        [
          "Sdâ at gulay ing hapunan mi.",
          "We have fish and vegetables for dinner.",
        ],
      ]),
      remember:
        "Ulam does not have a direct one-word English equivalent. It usually refers to the dish eaten alongside rice.",
    },
    {
      title: "B. Expressing Food Preferences",
      body: [
        "Gamitan ing mumunang salita para sabian nung nanu ing buri o ali mung kanan.",
        'Buri ku ing + food or drink: this means "I want" or "I like" something, depending on the context.',
        'Ali ku buri ing + food or drink: this means "I don\'t like" or "I don\'t want" something.',
        'Paburitu ku ing + food: this means "My favorite is..."',
      ],
      examples: sentences([
        ["Buri ku ing mangga.", "I want mangoes."],
        ["Buri ku ing gatas.", "I want milk."],
        ["Buri ku ing adobo.", "I want adobo."],
        ["Ali ku buri ing kape.", "I don't like coffee."],
        ["Ali ku buri ing maanghang a pamangan.", "I don't like spicy food."],
        ["Ali ku buri ing mapait a gulay.", "I don't like bitter vegetables."],
        ["Paburitu ku ing sinigang.", "My favorite is sinigang."],
        ["Paburitu ku ing mangga.", "My favorite is mango."],
        ["Paburitu ku ing adobo.", "My favorite is adobo."],
      ]),
    },
    {
      title: "C. Describing the Taste of Food",
      body: [
        "Matamis – Sweet, Maslam – Sour, Maalat – Salty, Mapait – Bitter, Maanghang – Spicy, Masalui – Delicious.",
      ],
      examples: sentences([
        ["Matamis ya ing mangga.", "The mango is sweet."],
        ["Maslam ya ing sinigang.", "The sinigang is sour."],
        ["Maanghang ya ing pamangan.", "The food is spicy."],
        ["Masalui ya ing adobo.", "The adobo is delicious."],
      ]),
    },
    {
      title: "D. Ordering Food",
      body: ["Istung mag-order, gamitan ing magalang a salita (pu, paki-)."],
      examples: sentences([
        ["Pwede bang mag-order, pu?", "May I order?"],
        ["Metung a order ning adobo, pu.", "One order of adobo, please."],
        [
          "Pasaup ku ning metung a baso a danum.",
          "May I have a glass of water?",
        ],
        ["Magkanu ya ini a pamangan?", "How much is this food?"],
        ["Pwede na ing bill, pu.", "May I have the bill, please?"],
      ]),
    },
    {
      title: "E. Talking About Cooking and Eating",
      body: ["Some common verbs related to food include:"],
      table: {
        leftHeading: "Kapampangan",
        rightHeading: "English",
        rows: [
          { left: "Mangan", right: "To eat" },
          { left: "Minum", right: "To drink" },
          { left: "Magluto", right: "To cook" },
          { left: "Maghanda", right: "To prepare" },
          { left: "Tikman", right: "To taste / Try" },
          { left: "Maglinis / Maghugas", right: "To wash" },
          { left: "Magbili", right: "To buy" },
          { left: "Mag-order", right: "To order" },
        ],
      },
      examples: sentences([
        ["Magluluto ya ing ima ning adobo.", "Mother is cooking adobo."],
        ["Mamangan kami ning hapunan.", "We are eating dinner."],
        ["Minum ku ning danum.", "I am drinking water."],
        ["Tikman mu ing bayung lutu.", "Try the freshly cooked food."],
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
          "Nanu ing paburitu mung pamangan?",
          "What is your favorite food?",
        ],
        ["Person B", "Paburitu ku ing adobo.", "My favorite is adobo."],
        [
          "Person A",
          "Nanung dahilan buri mu ing adobo?",
          "Why do you like adobo?",
        ],
        [
          "Person B",
          "Uling masalui ya at buri ku ing lasa na.",
          "Because it is delicious and I like its taste.",
        ],
        ["Person A", "Buri mu mu ing sinigang?", "Do you also like sinigang?"],
        [
          "Person B",
          "Wa, buri ku mu ing sinigang.",
          "Yes, I also like sinigang.",
        ],
      ]),
    },
    {
      situation: "Conversation 2: Eating at Home",
      lines: dialogue([
        ["Person A", "Mikan ka na?", "Have you eaten?"],
        [
          "Person B",
          "Alang pa. Nanu ing ulam tamu?",
          "Not yet. What is our main dish?",
        ],
        [
          "Person A",
          "Atin tamung adobo at gulay.",
          "We have adobo and vegetables.",
        ],
        ["Person B", "Masalui naman!", "That sounds delicious!"],
        ["Person A", "Mangaru ka na ning nasi.", "Go ahead and get some rice."],
      ]),
    },
    {
      situation: "Conversation 3: Ordering at a Restaurant",
      lines: dialogue([
        [
          "Customer",
          "Mayap a gatpanapun, pu. Makasaup ku bang tamung ing menu?",
          "Good afternoon. May I see the menu?",
        ],
        ["Server", "Wa, pu. Oyni ya ing menu.", "Certainly. Here is the menu."],
        [
          "Customer",
          "Magkanu ya ing metung a order ning pancit?",
          "How much is one order of pancit?",
        ],
        [
          "Server",
          "Metung a dinalan at duang pulu pesu, pu.",
          "It is one hundred twenty pesos.",
        ],
        [
          "Customer",
          "Sige, pu. Metung a order ning pancit at metung a baso a danum.",
          "All right. One order of pancit and one glass of water.",
        ],
        ["Server", "Wa, pu. Antabayan yu pu.", "Certainly. Just a moment."],
      ]),
    },
    {
      situation: "Conversation 4: Offering Drinks",
      lines: dialogue([
        ["Person A", "Mauhaw ka ba?", "Are you thirsty?"],
        [
          "Person B",
          "Wa, medyu mauhaw na ku.",
          "Yes, I'm a little thirsty.",
        ],
        [
          "Person A",
          "Buri mu bang danum o katas ning mangga?",
          "Would you like water or mango juice?",
        ],
        ["Person B", "Danum namu, salamat.", "Just water, thank you."],
        ["Person A", "Oyni ya ing danum mu.", "Here is your water."],
        ["Person B", "Dakal a salamat!", "Thank you very much!"],
      ]),
    },
  ],

  // 8. Activity 1 (answer key: 1 B, 2 A, 3 D, 4 C, 5 E)
  matchActivity: {
    title: "Matching Type",
    instructions:
      "Match the Kapampangan words in Column A with their English meanings in Column B.",
    pairs: matchPairs(
      ["Nasi", "Danum", "Manuk", "Tinapay", "Saging"],
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
        "What is the Kapampangan word for breakfast?",
        ["Hapunan", "Almusal", "Pananghali", "Meryenda"],
        "B",
      ),
      choice(
        2,
        "Which word means vegetables?",
        ["Bunga", "Karne", "Gulay", "Sdâ"],
        "C",
      ),
      choice(
        3,
        "What does masalui mean?",
        ["Bitter", "Sour", "Delicious", "Salty"],
        "C",
      ),
      choice(
        4,
        "Which of the following means water?",
        ["Gatas", "Kape", "Danum", "Tsa"],
        "C",
      ),
      choice(
        5,
        "What does Buri ku ing adobo mean?",
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
          ["Ing Kapampangan word para king cooked rice ya ing ____.", "Nasi"],
          ["Ing pamangan king abak ya ing sasabyan a ____.", "Almusal"],
          ["Ing Kapampangan word para king fish ya ing ____.", "Sdâ"],
          ["Istung mauhaw ka, kailangan mung uminum ning ____.", "Danum"],
          ["Ing Kapampangan word para king delicious ya ing ____.", "Masalui"],
        ],
        {
          title: "Fill in the Blanks",
          instructions:
            "Complete each sentence using the correct Kapampangan word.",
        },
      ),
      ...fills(
        "taste",
        [
          ["A candy that tastes sweet. ________", "Matamis"],
          ["A lemon that tastes sour. ________", "Maslam"],
          ["A dish with too much salt. ________", "Maalat"],
          ["A spicy chili dish. ________", "Maanghang"],
          ["A bitter vegetable. ________", "Mapait"],
        ],
        {
          title: "Identify the Taste",
          instructions:
            "Choose the correct Kapampangan word that describes each food.",
          wordBank: ["Matamis", "Maslam", "Maalat", "Maanghang", "Mapait"],
        },
      ),
    ],
  },

  // 8. Activity 4 (see kapampanganLesson6Notes for item 4)
  arrangeWords: {
    title: "Arrange the Words",
    instructions: "Arrange the words to form a correct Kapampangan sentence.",
    items: [
      arrange("1", "ku / adobo / buri / ing", "Buri ku ing adobo."),
      arrange("2", "masalui / ing / pamangan", "Masalui ing pamangan."),
      arrange("3", "ku / na / mabayat", "Mabayat na ku."),
      arrange(
        "4",
        "danum / baso / metung / ning / pasaup / ku / a / a",
        "Pasaup ku ning metung a baso a danum.",
      ),
      arrange("5", "paburitu / sinigang / ku / ing", "Paburitu ku ing sinigang."),
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
        "What is the Kapampangan word for cooked rice?",
        ["Pale", "Nasi", "Tinapay", "Gulay"],
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
        "What is the Kapampangan word for fruit?",
        ["Gulay", "Karne", "Bunga", "Sdâ"],
        "C",
      ),
      choice(
        4,
        "What does mauhaw mean?",
        ["Hungry", "Thirsty", "Full", "Tired"],
        "B",
      ),
      choice(
        5,
        "Which word means spicy?",
        ["Matamis", "Maslam", "Maalat", "Maanghang"],
        "D",
      ),
      choice(
        6,
        'How do you say "I want water" in Kapampangan?',
        [
          "Buri ku ing danum.",
          "Ali ku buri ing danum.",
          "Minum ku ning gatas.",
          "Masalui ing danum.",
        ],
        "A",
      ),
      choice(
        7,
        "What does Mabusug na ku mean?",
        ["I am hungry.", "I am thirsty.", "I am already full.", "I am cooking."],
        "C",
      ),
      choice(
        8,
        "Which of the following means dinner?",
        ["Almusal", "Pananghali", "Hapunan", "Meryenda"],
        "C",
      ),
      choice(
        9,
        "What does Paburitu ku ing mangga mean?",
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
        "What does Nanu ing buri mung inumen? mean?",
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
  // inferred (see kapampanganLesson6Notes).
  speaking: {
    title: "Listening and Pronunciation",
    instructions: "Listen to the recorded words and repeat them aloud.",
    phrases: phrases([
      ["Nasi", "Cooked rice"],
      ["Tinapay", "Bread"],
      ["Pitlog", "Egg"],
      ["Manuk", "Chicken"],
      ["Sdâ", "Fish"],
      ["Gulay", "Vegetables"],
      ["Bunga", "Fruits"],
      ["Danum", "Water"],
      ["Gatas", "Milk"],
      ["Kape", "Coffee"],
      ["Tsa", "Tea"],
      ["Katas", "Juice"],
      ["Buko juice", "Coconut water"],
      ["Salabat", "Ginger tea"],
      ["Nanu ing buri mung kanan?", "What do you want to eat?"],
      ["Nanu ing buri mung inumen?", "What do you want to drink?"],
      ["Mabayat na ku.", "I'm hungry."],
      ["Mabusug na ku.", "I'm already full."],
      ["Masalui ing pamangan.", "The food is delicious."],
      ["Buri ku ing adobo at nasi.", "I want adobo and rice."],
      ["Paburitu ku ing sinigang.", "My favorite is sinigang."],
      ["Minum ku ning malamig a danum.", "I am drinking cold water."],
      ["Masalui ing lutung pamangan.", "The cooked food is delicious."],
      ["Mamangan kami ning hapunan.", "We are eating dinner."],
    ]),
  },

  // 10. Gamification Integration. Same mapping as the Tagalog Lesson 6:
  // food and drinks practice = the matching activity; food preference
  // practice = the multiple choice, fill-in and arrange exercises.
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
