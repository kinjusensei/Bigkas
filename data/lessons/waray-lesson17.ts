import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 17 — imported from "Lesson Plan.pdf", pages 884–899.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
// The practice answers are INFERRED drafts, not from the PDF. See
// docs/waray-draft-answer-keys.md for each answer and how it was found.

export const warayLesson17: StructuredLesson = {
  lessonId: "waray_17",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 17,
  title: "Ordering Food",
  level: "Intermediate",
  unit: "Practical Conversations",
  estimatedDuration: "40–50 minutes",
  prerequisite: "Lessons 1–16",
  intro: [
    "Food is an important part of everyday communication. Whether eating at a restaurant, ordering at a local eatery, or buying food from a small food stall, knowing how to communicate your preferences is useful.",
    "In this lesson, learners will practice common expressions used when ordering food in Waray.",
    "For example:",
    "• Ano an iyo pagkaon yana? – What food do you have today?",
    "• Karuyag ko hin kan-on ngan isda. – I would like rice and fish.",
    "• Pira ini? – How much is this?",
    "• Tubig la, alayon. – Just water, please.",
    "Learners will also practice asking questions, making requests, and responding to restaurant staff.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify common Waray vocabulary related to restaurants, food, and beverages.",
    "Ask about available meals and drinks.",
    "Order food and make simple requests in Waray.",
    "Ask about prices and quantities.",
    "Participate in short restaurant conversations using polite expressions.",
  ],
  expressionGroups: [
    {
      title: "A. Places and People",
      items: [
        {
          term: "Restawran",
          meaning: "Restaurant",
          pronunciation: "Res-taw-ran",
        },
        {
          term: "Kan-anan",
          meaning: "Eatery",
          pronunciation: "Ka-na-nan",
        },
        {
          term: "Baroto han pagkaon / puwesto han pagkaon (descriptive)",
          meaning: "Food stall",
          pronunciation: "Pu-wes-to han pag-ka-on",
        },
        {
          term: "Merkado",
          meaning: "Market",
          pronunciation: "Mer-ka-do",
        },
        {
          term: "Tindahan",
          meaning: "Store",
          pronunciation: "Tin-da-han",
        },
        {
          term: "Kustomer",
          meaning: "Customer",
          pronunciation: "Kus-to-mer",
        },
        {
          term: "Serbidora / serbidor",
          meaning: "Server / Waiter",
          pronunciation: "Ser-bi-do-ra / ser-bi-dor",
        },
        {
          term: "Paraluto",
          meaning: "Cook",
          pronunciation: "Pa-ra-lu-to",
        },
        {
          term: "Menu",
          meaning: "Menu",
          pronunciation: "Me-nu",
        },
        {
          term: "Lamisa",
          meaning: "Table",
          pronunciation: "La-mi-sa",
        },
        {
          term: "Silya",
          meaning: "Chair",
          pronunciation: "Sil-ya",
        },
        {
          term: "Bayranan",
          meaning: "Bill",
          pronunciation: "Bay-ra-nan",
        },
      ],
    },
    {
      title: "B. Common Food Items",
      items: [
        {
          term: "Kan-on",
          meaning: "Cooked rice",
          pronunciation: "Kan-on",
        },
        {
          term: "Bugas",
          meaning: "Uncooked rice",
          pronunciation: "Bu-gas",
        },
        {
          term: "Isda",
          meaning: "Fish",
          pronunciation: "Is-da",
        },
        {
          term: "Manok",
          meaning: "Chicken",
          pronunciation: "Ma-nok",
        },
        {
          term: "Baboy",
          meaning: "Pork",
          pronunciation: "Ba-boy",
        },
        {
          term: "Karne han baka",
          meaning: "Beef",
          pronunciation: "Kar-ne han ba-ka",
        },
        {
          term: "Itlog",
          meaning: "Egg",
          pronunciation: "It-log",
        },
        {
          term: "Utanon",
          meaning: "Vegetables",
          pronunciation: "U-ta-non",
        },
        {
          term: "Sabaw",
          meaning: "Soup",
          pronunciation: "Sa-baw",
        },
        {
          term: "Tinapay",
          meaning: "Bread",
          pronunciation: "Ti-na-pay",
        },
        {
          term: "Pancit",
          meaning: "Noodles",
          pronunciation: "Pan-sit",
        },
        {
          term: "Piniritong isda",
          meaning: "Fried fish",
          pronunciation: "Pi-ni-ri-tong is-da",
        },
        {
          term: "Piniritong manok",
          meaning: "Fried chicken",
          pronunciation: "Pi-ni-ri-tong ma-nok",
        },
        {
          term: "Sinugbang isda",
          meaning: "Grilled fish",
          pronunciation: "Si-nug-bang is-da",
        },
      ],
    },
    {
      title: "C. Drinks and Desserts",
      items: [
        {
          term: "Tubig",
          meaning: "Water",
          pronunciation: "Tu-big",
        },
        {
          term: "Gatas",
          meaning: "Milk",
          pronunciation: "Ga-tas",
        },
        {
          term: "Kape",
          meaning: "Coffee",
          pronunciation: "Ka-pe",
        },
        {
          term: "Tsaa",
          meaning: "Tea",
          pronunciation: "Tsaa",
        },
        {
          term: "Dyus",
          meaning: "Juice",
          pronunciation: "Dyus",
        },
        {
          term: "Tubig han lubi",
          meaning: "Coconut water",
          pronunciation: "Tu-big han lu-bi",
        },
        {
          term: "Softdrinks",
          meaning: "Soft drink",
          pronunciation: "Soft-drinks",
        },
        {
          term: "Yelo",
          meaning: "Ice",
          pronunciation: "Ye-lo",
        },
        {
          term: "Asukar",
          meaning: "Sugar",
          pronunciation: "A-su-kar",
        },
        {
          term: "Panghimagas",
          meaning: "Dessert",
          pronunciation: "Pang-hi-ma-gas",
        },
        {
          term: "Saging",
          meaning: "Banana",
          pronunciation: "Sa-ging",
        },
        {
          term: "Mangga",
          meaning: "Mango",
          pronunciation: "Mang-ga",
        },
      ],
    },
    {
      title: "A. Asking About Available Food",
      items: [
        {
          term: "Ano an iyo pagkaon?",
          meaning: "What food do you have?",
          pronunciation: "A-no an i-yo pag-ka-on",
        },
        {
          term: "Ano an aada yana?",
          meaning: "What is available today?",
          pronunciation: "A-no an a-a-da ya-na",
        },
        {
          term: "May isda ba kamo?",
          meaning: "Do you have fish?",
          pronunciation: "May is-da ba ka-mo",
        },
        {
          term: "May manok ba kamo?",
          meaning: "Do you have chicken?",
          pronunciation: "May ma-nok ba ka-mo",
        },
        {
          term: "Aada ba ini?",
          meaning: "Is this available?",
          pronunciation: "A-a-da ba i-ni",
        },
        {
          term: "Ano an iyo mairerekomendar?",
          meaning: "What do you recommend?",
          pronunciation: "A-no an i-yo ma-i-re-re-ko-men-dar",
        },
      ],
    },
    {
      title: "B. Ordering Food",
      items: [
        {
          term: "Karuyag ko hin kan-on.",
          meaning: "I would like rice.",
          pronunciation: "Ka-ru-yag ko hin kan-on",
        },
        {
          term: "Karuyag ko hin isda.",
          meaning: "I would like fish.",
          pronunciation: "Ka-ru-yag ko hin is-da",
        },
        {
          term: "Karuyag ko hin manok.",
          meaning: "I would like chicken.",
          pronunciation: "Ka-ru-yag ko hin ma-nok",
        },
        {
          term: "Karuyag ko hin tubig.",
          meaning: "I want water.",
          pronunciation: "Ka-ru-yag ko hin tu-big",
        },
        {
          term: "Usa nga serving, alayon.",
          meaning: "One serving, please.",
          pronunciation: "U-sa nga ser-ving, a-la-yon",
        },
        {
          term: "Duha nga serving, alayon.",
          meaning: "Two servings, please.",
          pronunciation: "Du-ha nga ser-ving, a-la-yon",
        },
        {
          term: "Amo la ito.",
          meaning: "That is all.",
          pronunciation: "A-mo la i-to",
        },
        {
          term: "Alayon, ihatag ha akon an menu.",
          meaning: "Please give me the menu.",
          pronunciation: "A-la-yon, i-ha-tag ha a-kon an me-nu",
        },
      ],
    },
    {
      title: "C. Making Special Requests",
      items: [
        {
          term: "Waray asukar, alayon.",
          meaning: "Without sugar, please.",
          pronunciation: "Wa-ray a-su-kar, a-la-yon",
        },
        {
          term: "Gutiay la nga asin, alayon.",
          meaning: "Less salt, please.",
          pronunciation: "Gu-ti-ay la nga a-sin, a-la-yon",
        },
        {
          term: "Dugangi pa an kan-on, alayon.",
          meaning: "More rice, please.",
          pronunciation: "Du-gan-gi pa an kan-on, a-la-yon",
        },
        {
          term: "Waray yelo, alayon.",
          meaning: "No ice, please.",
          pronunciation: "Wa-ray ye-lo, a-la-yon",
        },
        {
          term: "Alayon, ipainit ini.",
          meaning: "Please make it hot.",
          pronunciation: "A-la-yon, i-pa-i-nit i-ni",
        },
        {
          term: "Mahimo ba ako mangaro hin tubig?",
          meaning: "Can I have some water?",
          pronunciation: "Ma-hi-mo ba a-ko mang-a-ro hin tu-big",
        },
      ],
    },
  ],
  languageNotes: [
    {
      title: "Asking About Prices and Quantities",
      body: [
        "Knowing how to ask about prices and quantities is useful when ordering food.",
      ],
    },
    {
      title: "A. Asking About Prices",
      table: {
        leftHeading: "English",
        rightHeading: "Waray · Pronunciation Guide",
        rows: [
          {
            left: "How much is this?",
            right: "Pira ini? · Pi-ra i-ni",
          },
          {
            left: "How much is the meal?",
            right: "Pira an pagkaon? · Pi-ra an pag-ka-on",
          },
          {
            left: "How much is one serving?",
            right: "Pira an usa nga serving? · Pi-ra an u-sa nga ser-ving",
          },
          {
            left: "Is this expensive?",
            right: "Mahal ba ini? · Ma-hal ba i-ni",
          },
          {
            left: "Is there a cheaper one?",
            right: "May mas barato ba hini? · May mas ba-ra-to ba hi-ni",
          },
        ],
      },
    },
    {
      title: "B. Asking About Quantities",
      table: {
        leftHeading: "English",
        rightHeading: "Waray · Pronunciation Guide",
        rows: [
          {
            left: "One",
            right: "Usa · U-sa",
          },
          {
            left: "Two",
            right: "Duha · Du-ha",
          },
          {
            left: "Three",
            right: "Tulo · Tu-lo",
          },
          {
            left: "How many?",
            right: "Pira? · Pi-ra",
          },
          {
            left: "A little",
            right: "Gutiay · Gu-ti-ay",
          },
          {
            left: "A lot / Many",
            right: "Damo · Da-mo",
          },
          {
            left: "More",
            right: "Dugang · Du-gang",
          },
          {
            left: "Enough",
            right: "Igo · I-go",
          },
        ],
      },
    },
    {
      title: "C. Sample Exchanges",
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Pira ini nga pagkaon?",
            right: "How much is this food?",
          },
          {
            left: "Singkwenta pesos.",
            right: "Fifty pesos.",
          },
          {
            left: "May iba pa ba nga pagkaon?",
            right: "Is there any other food?",
          },
          {
            left: "Oo, may manok ngan isda pa.",
            right: "Yes, there is also chicken and fish.",
          },
        ],
      },
    },
    {
      title: "Polite Expressions and Restaurant Etiquette",
      body: [
        "Polite expressions help make conversations more respectful and comfortable.",
      ],
    },
    {
      title: "A. Common Expressions",
      table: {
        leftHeading: "English",
        rightHeading: "Waray · Pronunciation Guide",
        rows: [
          {
            left: "Please",
            right: "Alayon · A-la-yon",
          },
          {
            left: "Thank you",
            right: "Salamat · Sa-la-mat",
          },
          {
            left: "Thank you very much",
            right: "Damo nga salamat · Da-mo nga sa-la-mat",
          },
          {
            left: "You're welcome",
            right: "Waray sapayan · Wa-ray sa-pa-yan",
          },
          {
            left: "Excuse me",
            right: "Pasayloa ako / Alayon · Pa-say-lo-a a-ko / A-la-yon",
          },
          {
            left: "I'm sorry",
            right: "Pasayloa ako · Pa-say-lo-a a-ko",
          },
          {
            left: "Please wait",
            right: "Hulat anay, alayon · Hu-lat a-nay, a-la-yon",
          },
          {
            left: "That's all",
            right: "Amo la ito · A-mo la i-to",
          },
        ],
      },
    },
    {
      title: "B. Useful Restaurant Expressions",
      table: {
        leftHeading: "English",
        rightHeading: "Waray",
        rows: [
          {
            left: "The food is delicious.",
            right: "Lami an pagkaon.",
          },
          {
            left: "The food is hot.",
            right: "Mainit an pagkaon.",
          },
          {
            left: "The food is cold.",
            right: "Matugnaw an pagkaon.",
          },
          {
            left: "I am full.",
            right: "Busog na ako.",
          },
          {
            left: "I am hungry.",
            right: "Gutom ako.",
          },
          {
            left: "I am thirsty.",
            right: "Uhaw ako.",
          },
          {
            left: "Can I have the bill?",
            right: "Mahimo ba ako mangaro han bayranan?",
          },
          {
            left: "Thank you for the food.",
            right: "Salamat ha pagkaon.",
          },
        ],
      },
    },
  ],
  conversations: [
    {
      title: "Conversation A: Ordering at a Local Eatery",
      lines: [
        {
          speaker: "Customer",
          text: "Maupay nga aga.",
          translation: "Good morning.",
        },
        {
          speaker: "Server",
          text: "Maupay nga aga. Ano an iyo karuyag?",
          translation: "Good morning. What would you like?",
        },
        {
          speaker: "Customer",
          text: "Karuyag ko hin kan-on ngan isda.",
          translation: "I would like rice and fish.",
        },
        {
          speaker: "Server",
          text: "May ada kami sinugbang isda yana.",
          translation: "We have grilled fish today.",
        },
        {
          speaker: "Customer",
          text: "Sige, usa nga serving, alayon.",
          translation: "Okay, one serving, please.",
        },
        {
          speaker: "Server",
          text: "Ano an iyo iinumon?",
          translation: "What would you like to drink?",
        },
        {
          speaker: "Customer",
          text: "Tubig la, alayon.",
          translation: "Just water, please.",
        },
        {
          speaker: "Server",
          text: "Sige.",
          translation: "Okay.",
        },
      ],
    },
    {
      title: "Conversation B: Asking About the Menu",
      lines: [
        {
          speaker: "Maria",
          text: "Alayon, mahimo ba ako mangaro han menu?",
          translation: "Excuse me, may I have the menu?",
        },
        {
          speaker: "Server",
          text: "Oo, ini an menu.",
          translation: "Yes, here is the menu.",
        },
        {
          speaker: "Maria",
          text: "May manok ba kamo?",
          translation: "Do you have chicken?",
        },
        {
          speaker: "Server",
          text: "Oo, may piniritong manok kami.",
          translation: "Yes, we have fried chicken.",
        },
        {
          speaker: "Maria",
          text: "Pira an usa nga serving?",
          translation: "How much is one serving?",
        },
        {
          speaker: "Server",
          text: "Usa ka gatos pesos.",
          translation: "One hundred pesos.",
        },
        {
          speaker: "Maria",
          text: "Sige, usa nga serving, alayon.",
          translation: "Okay, one serving, please.",
        },
      ],
    },
    {
      title: "Conversation C: Asking for the Bill",
      lines: [
        {
          speaker: "Carlo",
          text: "Busog na ako.",
          translation: "I am full.",
        },
        {
          speaker: "Mark",
          text: "Lami an pagkaon, diri ba?",
          translation: "The food is delicious, isn't it?",
        },
        {
          speaker: "Carlo",
          text: "Oo, lami gud.",
          translation: "Yes, it really is delicious.",
        },
        {
          speaker: "Mark",
          text: "Alayon, mahimo ba kami mangaro han bayranan?",
          translation: "Excuse us, may we have the bill?",
        },
        {
          speaker: "Server",
          text: "Oo, makadiyot la.",
          translation: "Yes, just a moment.",
        },
        {
          speaker: "Carlo",
          text: "Damo nga salamat.",
          translation: "Thank you very much.",
        },
        {
          speaker: "Server",
          text: "Waray sapayan.",
          translation: "You're welcome.",
        },
      ],
    },
  ],
  extraActivities: [
    {
      title: "Translate into Waray",
      kind: "translate",
      instructions: "Translate the following expressions into Waray.",
      items: [
        "I would like rice and chicken.",
        "How much is this?",
        "Do you have fish?",
        "Water, please.",
        "May I have the bill?",
        "The food is delicious.",
        "I am full.",
        "What food do you have today?",
      ],
    },
    {
      title: "Choose the Appropriate Response",
      kind: "choice",
      instructions: "Read each situation and choose an appropriate Waray response.",
      items: [
        "A server asks what you would like to drink.",
        "You want to know the price of a meal.",
        "You want to request the menu.",
        "You have finished eating and want to pay.",
        "Someone thanks you for ordering.",
      ],
    },
    {
      title: "Restaurant Role-Play",
      kind: "roleplay",
      instructions: "Work with a partner. One learner acts as a customer, while the other acts as a restaurant server.\nYour conversation must include:",
      items: [
        "A greeting.",
        "Asking about available food.",
        "Ordering at least two food items.",
        "Ordering a drink.",
        "Asking about the price.",
        "Requesting the bill.",
        "A polite expression of thanks.",
      ],
      note: "Use the vocabulary and phrases from the lesson to create your own dialogue.",
    },
    {
      title: "Lesson Assessment",
      kind: "assessment",
      items: [
        "What is the Waray word for cooked rice?",
        "What does Pira ini? mean?",
        "Translate: \"I would like fish.\"",
        "What does Tubig la, alayon mean?",
        "What is the Waray word for restaurant?",
        "Translate: \"The food is delicious.\"",
        "What does Busog na ako mean?",
        "How would you politely ask for the bill using the expression introduced in this lesson?",
        "What does May isda ba kamo? mean?",
        "What does Amo la ito mean?",
      ],
      answers: [
        "Kan-on",
        "How much is this?",
        "Karuyag ko hin isda.",
        "Just water, please.",
        "Restawran",
        "Lami an pagkaon.",
        "I am already full.",
        "Mahimo ba ako mangaro han bayranan?",
        "Do you have fish?",
        "That's all.",
      ],
    },
  ],
  matchActivity: {
    title: "Vocabulary Matching",
    instructions: "Match each English word with its corresponding Waray equivalent.",
    pairs: [
      {
        id: "1",
        term: "Cooked rice",
        answer: "Kan-on",
      },
      {
        id: "2",
        term: "Fish",
        answer: "Isda",
      },
      {
        id: "3",
        term: "Water",
        answer: "Tubig",
      },
      {
        id: "4",
        term: "Restaurant",
        answer: "Restawran",
      },
      {
        id: "5",
        term: "Menu",
        answer: "Menu",
      },
      {
        id: "6",
        term: "Chicken",
        answer: "Manok",
      },
      {
        id: "7",
        term: "Bill",
        answer: "Bayranan",
      },
      {
        id: "8",
        term: "Bread",
        answer: "Tinapay",
      },
    ],
  },
  fillInBlanks: {
    title: "Complete the Order",
    instructions: "Complete each expression using the appropriate Waray word.",
    items: [
      {
        id: "1",
        sentence: "Karuyag ko hin ______.",
        hint: "water",
        answer: "tubig",
        title: "Complete the Order",
        instructions: "Complete each expression using the appropriate Waray word.",
        wordBank: [
          "tubig",
          "isda",
          "serving",
          "Amo",
          "bayranan",
        ],
      },
      {
        id: "2",
        sentence: "May ______ ba kamo?",
        hint: "fish",
        answer: "isda",
        title: "Complete the Order",
        instructions: "Complete each expression using the appropriate Waray word.",
        wordBank: [
          "tubig",
          "isda",
          "serving",
          "Amo",
          "bayranan",
        ],
      },
      {
        id: "3",
        sentence: "Pira an usa nga ______?",
        hint: "serving",
        answer: "serving",
        title: "Complete the Order",
        instructions: "Complete each expression using the appropriate Waray word.",
        wordBank: [
          "tubig",
          "isda",
          "serving",
          "Amo",
          "bayranan",
        ],
      },
      {
        id: "4",
        sentence: "______ la ito.",
        hint: "That is all.",
        answer: "Amo",
        title: "Complete the Order",
        instructions: "Complete each expression using the appropriate Waray word.",
        wordBank: [
          "tubig",
          "isda",
          "serving",
          "Amo",
          "bayranan",
        ],
      },
      {
        id: "5",
        sentence: "Mahimo ba ako mangaro han ______?",
        hint: "bill",
        answer: "bayranan",
        title: "Complete the Order",
        instructions: "Complete each expression using the appropriate Waray word.",
        wordBank: [
          "tubig",
          "isda",
          "serving",
          "Amo",
          "bayranan",
        ],
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
        label: "Complete the Order + Translation Activity",
        xp: 20,
      },
      {
        section: "conversation",
        label: "Restaurant Role-Play + Lesson Assessment",
        xp: 30,
      },
    ],
    total: 60,
    badge: {
      name: "Restaurant Communicator Badge",
    },
  },
  expectedOutcomes: [
    "Recognize common food and restaurant vocabulary.",
    "Ask about available meals and beverages.",
    "Order food using simple Waray expressions.",
    "Ask about prices and quantities.",
    "Make polite requests and communicate with restaurant staff.",
    "Participate in basic restaurant conversations.",
  ],
};
