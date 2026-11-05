import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 17 — imported from "Lesson Plan.pdf", pages 884–899.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
// Fields not given by the plan are INFERRED from this lesson's own content and
// listed in docs/waray-inferred-keys.md: situation, usage, example, pattern, choice, arrange, wrong options, pass mark, speaking phrase, target pitch and mood, respelling, example situation, pronunciation tip, badge description, completion requirement.
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
      description: "Awarded after successfully completing Lesson 17.",
    },
    completionRequirement: "Obtain at least 70% in the lesson assessment. Learners may repeat the activities and assessment if they do not meet the requirement.",
  },
  expectedOutcomes: [
    "Recognize common food and restaurant vocabulary.",
    "Ask about available meals and beverages.",
    "Order food using simple Waray expressions.",
    "Ask about prices and quantities.",
    "Make polite requests and communicate with restaurant staff.",
    "Participate in basic restaurant conversations.",
  ],
  choiceActivity: {
    title: "Choose the Correct Meaning",
    instructions: "Choose the correct English meaning.",
    questions: [
      {
        id: 1,
        prompt: "What does “Mangga” mean?",
        options: [
          {
            key: "A",
            text: "Eatery",
          },
          {
            key: "B",
            text: "Mango",
          },
          {
            key: "C",
            text: "I'm sorry",
          },
          {
            key: "D",
            text: "Beef",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "What does “Gutiay” mean?",
        options: [
          {
            key: "A",
            text: "Fried chicken",
          },
          {
            key: "B",
            text: "Restaurant",
          },
          {
            key: "C",
            text: "A little",
          },
          {
            key: "D",
            text: "Soft drink",
          },
        ],
        answerKey: "C",
      },
      {
        id: 3,
        prompt: "What does “Dyus” mean?",
        options: [
          {
            key: "A",
            text: "Coffee",
          },
          {
            key: "B",
            text: "Eatery",
          },
          {
            key: "C",
            text: "Table",
          },
          {
            key: "D",
            text: "Juice",
          },
        ],
        answerKey: "D",
      },
      {
        id: 4,
        prompt: "What does “Usa” mean?",
        options: [
          {
            key: "A",
            text: "One",
          },
          {
            key: "B",
            text: "Bread",
          },
          {
            key: "C",
            text: "Please",
          },
          {
            key: "D",
            text: "Coffee",
          },
        ],
        answerKey: "A",
      },
      {
        id: 5,
        prompt: "What does “Tsaa” mean?",
        options: [
          {
            key: "A",
            text: "Vegetables",
          },
          {
            key: "B",
            text: "Tea",
          },
          {
            key: "C",
            text: "Fish",
          },
          {
            key: "D",
            text: "Noodles",
          },
        ],
        answerKey: "B",
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
          "iyo",
          "Ano",
          "pagkaon",
          "an",
        ],
        answer: [
          "Ano",
          "an",
          "iyo",
          "pagkaon",
        ],
        display: "Ano an iyo pagkaon?",
      },
      {
        id: "2",
        words: [
          "yana",
          "aada",
          "Ano",
          "an",
        ],
        answer: [
          "Ano",
          "an",
          "aada",
          "yana",
        ],
        display: "Ano an aada yana?",
      },
      {
        id: "3",
        words: [
          "kamo",
          "isda",
          "ba",
          "May",
        ],
        answer: [
          "May",
          "isda",
          "ba",
          "kamo",
        ],
        display: "May isda ba kamo?",
      },
      {
        id: "4",
        words: [
          "kamo",
          "ba",
          "manok",
          "May",
        ],
        answer: [
          "May",
          "manok",
          "ba",
          "kamo",
        ],
        display: "May manok ba kamo?",
      },
      {
        id: "5",
        words: [
          "ini",
          "ba",
          "Aada",
        ],
        answer: [
          "Aada",
          "ba",
          "ini",
        ],
        display: "Aada ba ini?",
      },
    ],
  },
  assessment: {
    instructions: "Choose the correct answer for each question.",
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
            text: "Isda",
          },
          {
            key: "D",
            text: "Tubig",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "What does Pira ini? mean?",
        options: [
          {
            key: "A",
            text: "Do you have fish?",
          },
          {
            key: "B",
            text: "That is all.",
          },
          {
            key: "C",
            text: "How much is this?",
          },
          {
            key: "D",
            text: "I am full.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 3,
        prompt: "Translate: \"I would like fish.\"",
        options: [
          {
            key: "A",
            text: "Karuyag ko hin manok.",
          },
          {
            key: "B",
            text: "Karuyag ko hin kan-on.",
          },
          {
            key: "C",
            text: "Karuyag ko hin tubig.",
          },
          {
            key: "D",
            text: "Karuyag ko hin isda.",
          },
        ],
        answerKey: "D",
      },
      {
        id: 4,
        prompt: "What does Tubig la, alayon mean?",
        options: [
          {
            key: "A",
            text: "Just water, please.",
          },
          {
            key: "B",
            text: "No ice, please.",
          },
          {
            key: "C",
            text: "Without sugar, please.",
          },
          {
            key: "D",
            text: "One serving, please.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 5,
        prompt: "What is the Waray word for restaurant?",
        options: [
          {
            key: "A",
            text: "Merkado",
          },
          {
            key: "B",
            text: "Restawran",
          },
          {
            key: "C",
            text: "Tindahan",
          },
          {
            key: "D",
            text: "Lamisa",
          },
        ],
        answerKey: "B",
      },
      {
        id: 6,
        prompt: "Translate: \"The food is delicious.\"",
        options: [
          {
            key: "A",
            text: "Mainit an pagkaon.",
          },
          {
            key: "B",
            text: "Matugnaw an pagkaon.",
          },
          {
            key: "C",
            text: "Lami an pagkaon.",
          },
          {
            key: "D",
            text: "Busog na ako.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 7,
        prompt: "What does Busog na ako mean?",
        options: [
          {
            key: "A",
            text: "That is all.",
          },
          {
            key: "B",
            text: "The food is hot.",
          },
          {
            key: "C",
            text: "Just water, please.",
          },
          {
            key: "D",
            text: "I am already full.",
          },
        ],
        answerKey: "D",
      },
      {
        id: 8,
        prompt: "How would you politely ask for the bill using the expression introduced in this lesson?",
        options: [
          {
            key: "A",
            text: "Mahimo ba ako mangaro han bayranan?",
          },
          {
            key: "B",
            text: "Pira an pagkaon?",
          },
          {
            key: "C",
            text: "Amo la ito.",
          },
          {
            key: "D",
            text: "Tubig la, alayon.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 9,
        prompt: "What does May isda ba kamo? mean?",
        options: [
          {
            key: "A",
            text: "I would like fish.",
          },
          {
            key: "B",
            text: "Do you have fish?",
          },
          {
            key: "C",
            text: "What food do you have?",
          },
          {
            key: "D",
            text: "What do you recommend?",
          },
        ],
        answerKey: "B",
      },
      {
        id: 10,
        prompt: "What does Amo la ito mean?",
        options: [
          {
            key: "A",
            text: "I am full.",
          },
          {
            key: "B",
            text: "Just water, please.",
          },
          {
            key: "C",
            text: "That's all.",
          },
          {
            key: "D",
            text: "The food is delicious.",
          },
        ],
        answerKey: "C",
      },
    ],
  },
  speaking: {
    title: "Speaking Practice",
    instructions: "Read the following sentences aloud.",
    note: "Learners should listen to the model pronunciation before recording their own voice.",
    practiceLessonId: "waray_17",
    phrases: [
      {
        id: "1",
        text: "Ano an iyo pagkaon?",
        respelling: "A-no an i-yo pag-ka-on",
        meaning: "What food do you have?",
      },
      {
        id: "2",
        text: "Ano an iyo mairerekomendar?",
        respelling: "A-no an i-yo ma-i-re-re-ko-men-dar",
        meaning: "What do you recommend?",
      },
      {
        id: "3",
        text: "Duha nga serving, alayon.",
        respelling: "Du-ha nga ser-ving, a-la-yon",
        meaning: "Two servings, please.",
      },
      {
        id: "4",
        text: "Dugangi pa an kan-on, alayon.",
        respelling: "Du-gan-gi pa an kan-on, a-la-yon",
        meaning: "More rice, please.",
      },
      {
        id: "5",
        text: "Pira an usa nga serving?",
        respelling: "Pi-ra an u-sa nga ser-ving",
        meaning: "How much is one serving?",
      },
      {
        id: "6",
        text: "May iba pa ba nga pagkaon?",
        respelling: "may ee-bah pah ba? nga pag-ka-on",
        meaning: "Is there any other food?",
      },
      {
        id: "7",
        text: "Matugnaw an pagkaon.",
        respelling: "ma-tug-naw an pag-ka-on",
        meaning: "The food is cold.",
      },
    ],
  },
  exampleSituation: {
    description: "Imagine this situation from the lesson: Ordering at a Local Eatery.",
    lead: "You can begin by saying:",
    line: "Maupay nga aga.",
    translation: "Good morning.",
  },
  vocabularyIntro: "Learn the following words and expressions before proceeding to the activities.",
  pronunciationTip: "Read each syllable clearly. Avoid rushing through longer expressions.",
  selfIntroIntro: "Use these patterns and phrases from the lesson.",
  vocabulary: [
    {
      term: "Restawran",
      meaning: "Restaurant",
      pronunciation: "Res-taw-ran",
      usage: "From this lesson's word list: places and people.",
    },
    {
      term: "Kan-anan",
      meaning: "Eatery",
      pronunciation: "Ka-na-nan",
      usage: "From this lesson's word list: places and people.",
    },
    {
      term: "Baroto han pagkaon / puwesto han pagkaon (descriptive)",
      meaning: "Food stall",
      pronunciation: "Pu-wes-to han pag-ka-on",
      usage: "From this lesson's word list: places and people.",
    },
    {
      term: "Merkado",
      meaning: "Market",
      pronunciation: "Mer-ka-do",
      usage: "From this lesson's word list: places and people.",
    },
    {
      term: "Tindahan",
      meaning: "Store",
      pronunciation: "Tin-da-han",
      usage: "From this lesson's word list: places and people.",
    },
    {
      term: "Kustomer",
      meaning: "Customer",
      pronunciation: "Kus-to-mer",
      usage: "From this lesson's word list: places and people.",
    },
    {
      term: "Serbidora / serbidor",
      meaning: "Server / Waiter",
      pronunciation: "Ser-bi-do-ra / ser-bi-dor",
      usage: "From this lesson's word list: places and people.",
    },
    {
      term: "Paraluto",
      meaning: "Cook",
      pronunciation: "Pa-ra-lu-to",
      usage: "From this lesson's word list: places and people.",
    },
    {
      term: "Menu",
      meaning: "Menu",
      pronunciation: "Me-nu",
      usage: "From this lesson's word list: places and people.",
      example: [
        {
          speaker: "A",
          text: "Alayon, mahimo ba ako mangaro han menu?",
          translation: "Excuse me, may I have the menu?",
        },
        {
          speaker: "B",
          text: "Oo, ini an menu.",
          translation: "Yes, here is the menu.",
        },
      ],
    },
    {
      term: "Lamisa",
      meaning: "Table",
      pronunciation: "La-mi-sa",
      usage: "From this lesson's word list: places and people.",
    },
    {
      term: "Silya",
      meaning: "Chair",
      pronunciation: "Sil-ya",
      usage: "From this lesson's word list: places and people.",
    },
    {
      term: "Bayranan",
      meaning: "Bill",
      pronunciation: "Bay-ra-nan",
      usage: "From this lesson's word list: places and people.",
      example: [
        {
          speaker: "A",
          text: "Oo, lami gud.",
          translation: "Yes, it really is delicious.",
        },
        {
          speaker: "B",
          text: "Alayon, mahimo ba kami mangaro han bayranan?",
          translation: "Excuse us, may we have the bill?",
        },
      ],
    },
    {
      term: "Kan-on",
      meaning: "Cooked rice",
      pronunciation: "Kan-on",
      usage: "A common food item.",
      example: [
        {
          speaker: "A",
          text: "Maupay nga aga. Ano an iyo karuyag?",
          translation: "Good morning. What would you like?",
        },
        {
          speaker: "B",
          text: "Karuyag ko hin kan-on ngan isda.",
          translation: "I would like rice and fish.",
        },
      ],
    },
    {
      term: "Bugas",
      meaning: "Uncooked rice",
      pronunciation: "Bu-gas",
      usage: "A common food item.",
    },
    {
      term: "Isda",
      meaning: "Fish",
      pronunciation: "Is-da",
      usage: "A common food item.",
      example: [
        {
          speaker: "A",
          text: "Karuyag ko hin kan-on ngan isda.",
          translation: "I would like rice and fish.",
        },
        {
          speaker: "B",
          text: "May ada kami sinugbang isda yana.",
          translation: "We have grilled fish today.",
        },
      ],
    },
    {
      term: "Manok",
      meaning: "Chicken",
      pronunciation: "Ma-nok",
      usage: "A common food item.",
      example: [
        {
          speaker: "A",
          text: "Oo, ini an menu.",
          translation: "Yes, here is the menu.",
        },
        {
          speaker: "B",
          text: "May manok ba kamo?",
          translation: "Do you have chicken?",
        },
      ],
    },
    {
      term: "Baboy",
      meaning: "Pork",
      pronunciation: "Ba-boy",
      usage: "A common food item.",
    },
    {
      term: "Karne han baka",
      meaning: "Beef",
      pronunciation: "Kar-ne han ba-ka",
      usage: "A common food item.",
    },
    {
      term: "Itlog",
      meaning: "Egg",
      pronunciation: "It-log",
      usage: "A common food item.",
    },
    {
      term: "Utanon",
      meaning: "Vegetables",
      pronunciation: "U-ta-non",
      usage: "A common food item.",
    },
    {
      term: "Sabaw",
      meaning: "Soup",
      pronunciation: "Sa-baw",
      usage: "A common food item.",
    },
    {
      term: "Tinapay",
      meaning: "Bread",
      pronunciation: "Ti-na-pay",
      usage: "A common food item.",
    },
    {
      term: "Pancit",
      meaning: "Noodles",
      pronunciation: "Pan-sit",
      usage: "A common food item.",
    },
    {
      term: "Piniritong isda",
      meaning: "Fried fish",
      pronunciation: "Pi-ni-ri-tong is-da",
      usage: "A common food item.",
    },
    {
      term: "Piniritong manok",
      meaning: "Fried chicken",
      pronunciation: "Pi-ni-ri-tong ma-nok",
      usage: "A common food item.",
      example: [
        {
          speaker: "A",
          text: "May manok ba kamo?",
          translation: "Do you have chicken?",
        },
        {
          speaker: "B",
          text: "Oo, may piniritong manok kami.",
          translation: "Yes, we have fried chicken.",
        },
      ],
    },
    {
      term: "Sinugbang isda",
      meaning: "Grilled fish",
      pronunciation: "Si-nug-bang is-da",
      usage: "A common food item.",
      example: [
        {
          speaker: "A",
          text: "May ada kami sinugbang isda yana.",
          translation: "We have grilled fish today.",
        },
        {
          speaker: "B",
          text: "Sige, usa nga serving, alayon.",
          translation: "Okay, one serving, please.",
        },
      ],
    },
    {
      term: "Tubig",
      meaning: "Water",
      pronunciation: "Tu-big",
      usage: "From this lesson's word list: drinks and desserts.",
      example: [
        {
          speaker: "A",
          text: "Ano an iyo iinumon?",
          translation: "What would you like to drink?",
        },
        {
          speaker: "B",
          text: "Tubig la, alayon.",
          translation: "Just water, please.",
        },
      ],
    },
    {
      term: "Gatas",
      meaning: "Milk",
      pronunciation: "Ga-tas",
      usage: "From this lesson's word list: drinks and desserts.",
    },
    {
      term: "Kape",
      meaning: "Coffee",
      pronunciation: "Ka-pe",
      usage: "From this lesson's word list: drinks and desserts.",
    },
    {
      term: "Tsaa",
      meaning: "Tea",
      pronunciation: "Tsaa",
      usage: "From this lesson's word list: drinks and desserts.",
    },
    {
      term: "Dyus",
      meaning: "Juice",
      pronunciation: "Dyus",
      usage: "From this lesson's word list: drinks and desserts.",
    },
    {
      term: "Tubig han lubi",
      meaning: "Coconut water",
      pronunciation: "Tu-big han lu-bi",
      usage: "From this lesson's word list: drinks and desserts.",
    },
    {
      term: "Softdrinks",
      meaning: "Soft drink",
      pronunciation: "Soft-drinks",
      usage: "From this lesson's word list: drinks and desserts.",
    },
    {
      term: "Yelo",
      meaning: "Ice",
      pronunciation: "Ye-lo",
      usage: "From this lesson's word list: drinks and desserts.",
      example: [
        {
          speaker: "",
          text: "Waray yelo, alayon.",
          translation: "No ice, please.",
        },
      ],
    },
    {
      term: "Asukar",
      meaning: "Sugar",
      pronunciation: "A-su-kar",
      usage: "From this lesson's word list: drinks and desserts.",
      example: [
        {
          speaker: "",
          text: "Waray asukar, alayon.",
          translation: "Without sugar, please.",
        },
      ],
    },
    {
      term: "Panghimagas",
      meaning: "Dessert",
      pronunciation: "Pang-hi-ma-gas",
      usage: "From this lesson's word list: drinks and desserts.",
    },
    {
      term: "Saging",
      meaning: "Banana",
      pronunciation: "Sa-ging",
      usage: "From this lesson's word list: drinks and desserts.",
    },
    {
      term: "Mangga",
      meaning: "Mango",
      pronunciation: "Mang-ga",
      usage: "From this lesson's word list: drinks and desserts.",
    },
    {
      term: "Usa",
      meaning: "One",
      pronunciation: "U-sa",
      usage: "From this lesson's word list: asking about quantities.",
      example: [
        {
          speaker: "A",
          text: "Sige, usa nga serving, alayon.",
          translation: "Okay, one serving, please.",
        },
        {
          speaker: "B",
          text: "Ano an iyo iinumon?",
          translation: "What would you like to drink?",
        },
      ],
    },
    {
      term: "Duha",
      meaning: "Two",
      pronunciation: "Du-ha",
      usage: "From this lesson's word list: asking about quantities.",
      example: [
        {
          speaker: "",
          text: "Duha nga serving, alayon.",
          translation: "Two servings, please.",
        },
      ],
    },
    {
      term: "Tulo",
      meaning: "Three",
      pronunciation: "Tu-lo",
      usage: "From this lesson's word list: asking about quantities.",
    },
    {
      term: "Gutiay",
      meaning: "A little",
      pronunciation: "Gu-ti-ay",
      usage: "From this lesson's word list: asking about quantities.",
      example: [
        {
          speaker: "",
          text: "Gutiay la nga asin, alayon.",
          translation: "Less salt, please.",
        },
      ],
    },
    {
      term: "Damo",
      meaning: "A lot / Many",
      pronunciation: "Da-mo",
      usage: "From this lesson's word list: asking about quantities.",
      example: [
        {
          speaker: "A",
          text: "Oo, makadiyot la.",
          translation: "Yes, just a moment.",
        },
        {
          speaker: "B",
          text: "Damo nga salamat.",
          translation: "Thank you very much.",
        },
      ],
    },
    {
      term: "Dugang",
      meaning: "More",
      pronunciation: "Du-gang",
      usage: "From this lesson's word list: asking about quantities.",
    },
    {
      term: "Igo",
      meaning: "Enough",
      pronunciation: "I-go",
      usage: "From this lesson's word list: asking about quantities.",
    },
    {
      term: "Alayon",
      meaning: "Please",
      pronunciation: "A-la-yon",
      usage: "A common expression.",
      example: [
        {
          speaker: "A",
          text: "Tubig la, alayon.",
          translation: "Just water, please.",
        },
        {
          speaker: "B",
          text: "Sige.",
          translation: "Okay.",
        },
      ],
    },
    {
      term: "Salamat",
      meaning: "Thank you",
      pronunciation: "Sa-la-mat",
      usage: "A common expression.",
      example: [
        {
          speaker: "A",
          text: "Damo nga salamat.",
          translation: "Thank you very much.",
        },
        {
          speaker: "B",
          text: "Waray sapayan.",
          translation: "You're welcome.",
        },
      ],
    },
    {
      term: "Waray sapayan",
      meaning: "You're welcome",
      pronunciation: "Wa-ray sa-pa-yan",
      usage: "A common expression.",
      example: [
        {
          speaker: "A",
          text: "Damo nga salamat.",
          translation: "Thank you very much.",
        },
        {
          speaker: "B",
          text: "Waray sapayan.",
          translation: "You're welcome.",
        },
      ],
    },
    {
      term: "Pasayloa ako",
      meaning: "I'm sorry",
      pronunciation: "Pa-say-lo-a a-ko",
      usage: "A common expression.",
    },
  ],
  greetings: [
    {
      term: "Tubig",
      meaning: "Water",
      pronunciation: "Tu-big",
      usage: "From this lesson's word list: drinks and desserts.",
      example: [
        {
          speaker: "A",
          text: "Ano an iyo iinumon?",
          translation: "What would you like to drink?",
        },
        {
          speaker: "B",
          text: "Tubig la, alayon.",
          translation: "Just water, please.",
        },
      ],
    },
    {
      term: "Gatas",
      meaning: "Milk",
      pronunciation: "Ga-tas",
      usage: "From this lesson's word list: drinks and desserts.",
    },
    {
      term: "Kape",
      meaning: "Coffee",
      pronunciation: "Ka-pe",
      usage: "From this lesson's word list: drinks and desserts.",
    },
    {
      term: "Tsaa",
      meaning: "Tea",
      pronunciation: "Tsaa",
      usage: "From this lesson's word list: drinks and desserts.",
    },
    {
      term: "Dyus",
      meaning: "Juice",
      pronunciation: "Dyus",
      usage: "From this lesson's word list: drinks and desserts.",
    },
    {
      term: "Tubig han lubi",
      meaning: "Coconut water",
      pronunciation: "Tu-big han lu-bi",
      usage: "From this lesson's word list: drinks and desserts.",
    },
    {
      term: "Softdrinks",
      meaning: "Soft drink",
      pronunciation: "Soft-drinks",
      usage: "From this lesson's word list: drinks and desserts.",
    },
    {
      term: "Yelo",
      meaning: "Ice",
      pronunciation: "Ye-lo",
      usage: "From this lesson's word list: drinks and desserts.",
      example: [
        {
          speaker: "",
          text: "Waray yelo, alayon.",
          translation: "No ice, please.",
        },
      ],
    },
    {
      term: "Asukar",
      meaning: "Sugar",
      pronunciation: "A-su-kar",
      usage: "From this lesson's word list: drinks and desserts.",
      example: [
        {
          speaker: "",
          text: "Waray asukar, alayon.",
          translation: "Without sugar, please.",
        },
      ],
    },
    {
      term: "Panghimagas",
      meaning: "Dessert",
      pronunciation: "Pang-hi-ma-gas",
      usage: "From this lesson's word list: drinks and desserts.",
    },
    {
      term: "Saging",
      meaning: "Banana",
      pronunciation: "Sa-ging",
      usage: "From this lesson's word list: drinks and desserts.",
    },
    {
      term: "Mangga",
      meaning: "Mango",
      pronunciation: "Mang-ga",
      usage: "From this lesson's word list: drinks and desserts.",
    },
  ],
  patterns: [
    {
      label: "Pattern 1: Ordering Food",
      pattern: "Karuyag ko hin + Food.",
      examples: [
        "Karuyag ko hin kan-on.",
        "Karuyag ko hin isda.",
        "Karuyag ko hin manok.",
      ],
    },
    {
      label: "Pattern 2: Saying How Many Servings",
      pattern: "Number + nga serving, alayon.",
      examples: [
        "Usa nga serving, alayon.",
        "Duha nga serving, alayon.",
      ],
    },
    {
      label: "Pattern 3: Making a Special Request",
      pattern: "Waray + Item, alayon.",
      examples: [
        "Waray asukar, alayon.",
        "Waray yelo, alayon.",
      ],
    },
  ],
  sentences: [
    {
      text: "Ano an iyo pagkaon?",
      meaning: "What food do you have?",
      pronunciation: "A-no an i-yo pag-ka-on",
    },
    {
      text: "Ano an aada yana?",
      meaning: "What is available today?",
      pronunciation: "A-no an a-a-da ya-na",
    },
    {
      text: "May isda ba kamo?",
      meaning: "Do you have fish?",
      pronunciation: "May is-da ba ka-mo",
    },
    {
      text: "May manok ba kamo?",
      meaning: "Do you have chicken?",
      pronunciation: "May ma-nok ba ka-mo",
    },
    {
      text: "Aada ba ini?",
      meaning: "Is this available?",
      pronunciation: "A-a-da ba i-ni",
    },
    {
      text: "Ano an iyo mairerekomendar?",
      meaning: "What do you recommend?",
      pronunciation: "A-no an i-yo ma-i-re-re-ko-men-dar",
    },
    {
      text: "Karuyag ko hin kan-on.",
      meaning: "I would like rice.",
      pronunciation: "Ka-ru-yag ko hin kan-on",
    },
    {
      text: "Karuyag ko hin isda.",
      meaning: "I would like fish.",
      pronunciation: "Ka-ru-yag ko hin is-da",
    },
    {
      text: "Karuyag ko hin manok.",
      meaning: "I would like chicken.",
      pronunciation: "Ka-ru-yag ko hin ma-nok",
    },
    {
      text: "Karuyag ko hin tubig.",
      meaning: "I want water.",
      pronunciation: "Ka-ru-yag ko hin tu-big",
    },
    {
      text: "Usa nga serving, alayon.",
      meaning: "One serving, please.",
      pronunciation: "U-sa nga ser-ving, a-la-yon",
    },
    {
      text: "Duha nga serving, alayon.",
      meaning: "Two servings, please.",
      pronunciation: "Du-ha nga ser-ving, a-la-yon",
    },
    {
      text: "Amo la ito.",
      meaning: "That is all. / That's all",
      pronunciation: "A-mo la i-to",
    },
    {
      text: "Alayon, ihatag ha akon an menu.",
      meaning: "Please give me the menu.",
      pronunciation: "A-la-yon, i-ha-tag ha a-kon an me-nu",
    },
    {
      text: "Waray asukar, alayon.",
      meaning: "Without sugar, please.",
      pronunciation: "Wa-ray a-su-kar, a-la-yon",
    },
    {
      text: "Gutiay la nga asin, alayon.",
      meaning: "Less salt, please.",
      pronunciation: "Gu-ti-ay la nga a-sin, a-la-yon",
    },
    {
      text: "Dugangi pa an kan-on, alayon.",
      meaning: "More rice, please.",
      pronunciation: "Du-gan-gi pa an kan-on, a-la-yon",
    },
    {
      text: "Waray yelo, alayon.",
      meaning: "No ice, please.",
      pronunciation: "Wa-ray ye-lo, a-la-yon",
    },
    {
      text: "Alayon, ipainit ini.",
      meaning: "Please make it hot.",
      pronunciation: "A-la-yon, i-pa-i-nit i-ni",
    },
    {
      text: "Mahimo ba ako mangaro hin tubig?",
      meaning: "Can I have some water?",
      pronunciation: "Ma-hi-mo ba a-ko mang-a-ro hin tu-big",
    },
    {
      text: "Pira ini?",
      meaning: "How much is this?",
    },
    {
      text: "Pira an pagkaon?",
      meaning: "How much is the meal?",
    },
    {
      text: "Pira an usa nga serving?",
      meaning: "How much is one serving?",
    },
    {
      text: "Mahal ba ini?",
      meaning: "Is this expensive?",
    },
    {
      text: "May mas barato ba hini?",
      meaning: "Is there a cheaper one?",
    },
    {
      text: "Pira?",
      meaning: "How many?",
    },
    {
      text: "Pira ini nga pagkaon?",
      meaning: "How much is this food?",
    },
    {
      text: "Singkwenta pesos.",
      meaning: "Fifty pesos.",
    },
    {
      text: "May iba pa ba nga pagkaon?",
      meaning: "Is there any other food?",
    },
    {
      text: "Oo, may manok ngan isda pa.",
      meaning: "Yes, there is also chicken and fish.",
    },
    {
      text: "Damo nga salamat",
      meaning: "Thank you very much",
    },
    {
      text: "Hulat anay, alayon",
      meaning: "Please wait",
    },
    {
      text: "Lami an pagkaon.",
      meaning: "The food is delicious.",
    },
    {
      text: "Mainit an pagkaon.",
      meaning: "The food is hot.",
    },
    {
      text: "Matugnaw an pagkaon.",
      meaning: "The food is cold.",
    },
    {
      text: "Busog na ako.",
      meaning: "I am full.",
    },
    {
      text: "Gutom ako.",
      meaning: "I am hungry.",
    },
    {
      text: "Uhaw ako.",
      meaning: "I am thirsty.",
    },
    {
      text: "Mahimo ba ako mangaro han bayranan?",
      meaning: "Can I have the bill?",
    },
    {
      text: "Salamat ha pagkaon.",
      meaning: "Thank you for the food.",
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
      situation: "Customer and Server: Ordering at a Local Eatery.",
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
      situation: "Maria and Server: Asking About the Menu.",
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
      situation: "Carlo and Mark and Server: Asking for the Bill.",
    },
  ],
  savedLanguageNotes: [
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
  inferredFields: [
    "situation",
    "usage",
    "example",
    "pattern",
    "choice",
    "arrange",
    "wrong options",
    "pass mark",
    "speaking phrase",
    "target pitch and mood",
    "respelling",
    "example situation",
    "pronunciation tip",
    "badge description",
    "completion requirement",
  ],
};
