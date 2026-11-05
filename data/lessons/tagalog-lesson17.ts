import { StructuredLesson } from "../../types/structuredLesson";

// Tagalog Lesson 17 — imported from "Lesson Plan.pdf", pages 291–313.
// The Tagalog and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.

export const tagalogLesson17: StructuredLesson = {
  lessonId: "tagalog_17",
  dialect: "tagalog",
  dialectLabel: "Tagalog",
  lessonNumber: 17,
  title: "Ordering Food",
  level: "Intermediate",
  unit: "Unit 3 – Practical Conversations",
  estimatedDuration: "40–50 minutes",
  prerequisite: "Lessons 1–16",
  intro: [
    "This lesson teaches learners how to communicate when ordering food and drinks in restaurants, cafés, and local eateries. Learners will practice asking for menus, choosing meals, requesting modifications, asking about prices, and responding to restaurant staff.",
    "They will also learn useful expressions for making polite requests, explaining food preferences, and handling common situations when dining out.",
    "Imagine visiting a Filipino restaurant or karinderya. You want to order food, but you need to communicate with the staff.",
    "You might want to ask:",
    "• What food is available?",
    "• How much does a particular meal cost?",
    "• Can you order rice with your meal?",
    "• Can you request less spicy food?",
    "• Can you ask for the bill?",
    "In this lesson, you will learn how to handle these situations using Filipino.",
    "Example Situation",
    "Customer: Magandang hapon po. May menu po ba kayo?",
    "Staff: Opo. Narito po ang menu.",
    "Customer: Ano po ang mairerekomenda ninyo?",
    "Staff: Subukan po ninyo ang aming sinigang na baboy.",
    "Customer: Sige po. Isang order ng sinigang na baboy at isang kanin, pakiusap.",
    "English Translation:",
    "Customer: Good afternoon. Do you have a menu?",
    "Staff: Yes. Here is the menu.",
    "Customer: What would you recommend?",
    "Staff: You can try our pork sinigang.",
    "Customer: All right. One order of pork sinigang and one rice, please.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify common Filipino words and expressions used when ordering food.",
    "Ask for menus and inquire about available meals and drinks.",
    "Order food and beverages using polite Filipino expressions.",
    "Express food preferences and request modifications to an order.",
    "Ask about prices, quantities, and payment.",
    "Participate in simple restaurant conversations.",
  ],
  expressionGroups: [
    {
      title: "A. Restaurant and Dining Vocabulary",
      items: [
        {
          term: "restawran",
          meaning: "restaurant",
          pronunciation: "res-taw-rahn",
        },
        {
          term: "kainan",
          meaning: "eating place",
        },
        {
          term: "karinderya",
          meaning: "small local eatery",
          pronunciation: "kah-rin-deh-ryah",
        },
        {
          term: "café / kapihan",
          meaning: "café / coffee shop",
        },
        {
          term: "mesa",
          meaning: "table",
        },
        {
          term: "upuan",
          meaning: "chair",
        },
        {
          term: "menu",
          meaning: "menu",
        },
        {
          term: "pagkain",
          meaning: "food",
          pronunciation: "pahg-kah-een",
        },
        {
          term: "inumin",
          meaning: "drink",
          pronunciation: "ee-noo-meen",
        },
        {
          term: "putahe",
          meaning: "dish",
          pronunciation: "poo-tah-heh",
        },
        {
          term: "ulam",
          meaning: "viand",
        },
        {
          term: "kanin",
          meaning: "cooked rice",
        },
        {
          term: "kutsara",
          meaning: "spoon",
          pronunciation: "koot-sah-rah",
        },
        {
          term: "tinidor",
          meaning: "fork",
          pronunciation: "tee-nee-dor",
        },
        {
          term: "kutsilyo",
          meaning: "knife",
        },
        {
          term: "baso",
          meaning: "drinking glass",
        },
        {
          term: "plato",
          meaning: "plate",
        },
        {
          term: "mangkok",
          meaning: "bowl",
        },
        {
          term: "resibo",
          meaning: "receipt",
          pronunciation: "reh-see-boh",
        },
        {
          term: "bayarin",
          meaning: "bill/payment due",
          pronunciation: "bah-yah-reen",
        },
      ],
    },
    {
      title: "B. Common Food and Drinks",
      items: [
        {
          term: "adobo",
          meaning: "adobo",
        },
        {
          term: "sinigang",
          meaning: "sour soup",
        },
        {
          term: "tinola",
          meaning: "ginger-based chicken soup",
        },
        {
          term: "kare-kare",
          meaning: "peanut-based stew",
        },
        {
          term: "sisig",
          meaning: "sizzling chopped meat dish",
        },
        {
          term: "pancit",
          meaning: "noodle dish",
        },
        {
          term: "lumpia",
          meaning: "spring roll",
        },
        {
          term: "lechon",
          meaning: "roasted pig",
        },
        {
          term: "tapsilog",
          meaning: "beef tapa, fried rice, and egg",
        },
        {
          term: "longganisa",
          meaning: "Filipino sausage",
        },
        {
          term: "pritong isda",
          meaning: "fried fish",
        },
        {
          term: "pritong manok",
          meaning: "fried chicken",
        },
        {
          term: "gulay",
          meaning: "vegetables",
        },
        {
          term: "sabaw",
          meaning: "soup or broth",
        },
        {
          term: "tubig",
          meaning: "water",
        },
        {
          term: "katas ng prutas",
          meaning: "fruit juice",
        },
        {
          term: "gatas",
          meaning: "milk",
        },
        {
          term: "kape",
          meaning: "coffee",
        },
        {
          term: "tsaa",
          meaning: "tea",
        },
        {
          term: "malamig na inumin",
          meaning: "cold drink",
        },
      ],
    },
    {
      title: "C. Words for Taste and Food Preferences",
      items: [
        {
          term: "masarap",
          meaning: "delicious",
          pronunciation: "mah-sah-rahp",
        },
        {
          term: "matamis",
          meaning: "sweet",
        },
        {
          term: "maalat",
          meaning: "salty",
        },
        {
          term: "maasim",
          meaning: "sour",
          pronunciation: "mah-ah-seem",
        },
        {
          term: "mapait",
          meaning: "bitter",
        },
        {
          term: "maanghang",
          meaning: "spicy",
          pronunciation: "mah-ahng-hahng",
        },
        {
          term: "malinamnam",
          meaning: "savory/flavorful",
          pronunciation: "mah-lee-nahm-nahm",
        },
        {
          term: "mainit",
          meaning: "hot",
        },
        {
          term: "malamig",
          meaning: "cold",
        },
        {
          term: "sariwa",
          meaning: "fresh",
        },
        {
          term: "malutong",
          meaning: "crispy",
        },
        {
          term: "malambot",
          meaning: "soft",
        },
        {
          term: "matigas",
          meaning: "hard",
        },
        {
          term: "kulang sa luto",
          meaning: "undercooked",
        },
        {
          term: "sobrang luto",
          meaning: "overcooked",
        },
      ],
    },
    {
      title: "D. Ordering and Request Expressions",
      items: [
        {
          term: "Gusto ko po ng...",
          meaning: "I would like...",
        },
        {
          term: "Maaari po bang umorder?",
          meaning: "May I order?",
        },
        {
          term: "Puwede po bang humingi ng...?",
          meaning: "May I ask for...?",
        },
        {
          term: "Pahingi po ng...",
          meaning: "May I have...?",
        },
        {
          term: "Pakiabot po ng...",
          meaning: "Please pass me...",
        },
        {
          term: "Ano po ang available?",
          meaning: "What is available?",
        },
        {
          term: "Ano po ang mairerekomenda ninyo?",
          meaning: "What would you recommend?",
        },
        {
          term: "Wala po ba kayong...?",
          meaning: "Don't you have...?",
        },
        {
          term: "Pakibalot na lang po.",
          meaning: "Please pack it to go.",
        },
        {
          term: "Dito na lang po.",
          meaning: "For here, please.",
        },
        {
          term: "Takeout po.",
          meaning: "Takeout, please.",
        },
        {
          term: "Maaari na po bang magbayad?",
          meaning: "May I pay now?",
        },
        {
          term: "Pakibigay na lang po ang bill.",
          meaning: "Please give me the bill.",
        },
      ],
    },
  ],
  pronunciationTip: "These are simplified pronunciation guides for practice. Audio recordings reviewed by Filipino speakers should be used in the final application.",
  languageNotes: [
    {
      title: "A. Asking for a Menu",
      body: [
        "When entering a restaurant, you may ask whether a menu is available.",
        "Useful expressions:",
      ],
      examples: [
        {
          text: "May menu po ba kayo?",
          meaning: "Do you have a menu?",
        },
        {
          text: "Maaari ko po bang makita ang menu?",
          meaning: "May I see the menu?",
        },
        {
          text: "Ano po ang mga pagkain ninyo ngayon?",
          meaning: "What food do you have today?",
        },
        {
          text: "Ano po ang available na ulam?",
          meaning: "What viands are available?",
        },
      ],
    },
    {
      title: "A. Asking for a Menu",
      body: [
        "Customer: Magandang umaga po. Maaari ko po bang makita ang menu?",
        "Staff: Opo. Narito po.",
        "Customer: Salamat po.",
      ],
    },
    {
      title: "B. Ordering Food",
      body: [
        "A common and polite way to order is to use Gusto ko po ng... or Pahingi po ng...",
      ],
      examples: [
        {
          text: "Gusto ko po ng isang order ng adobo.",
          meaning: "I would like one order of adobo.",
        },
        {
          text: "Pahingi po ng isang basong tubig.",
          meaning: "May I have a glass of water?",
        },
        {
          text: "Isang order po ng pancit.",
          meaning: "One order of pancit, please.",
        },
        {
          text: "Maaari po bang umorder ng dalawang tapsilog?",
          meaning: "May I order two servings of tapsilog?",
        },
      ],
    },
    {
      title: "B. Ordering Food",
      body: [
        "Remember:",
        "• Gusto ko po ng... expresses what you would like.",
        "• Pahingi po ng... is a common way to request something.",
        "• Isang order po ng... is a concise way to place an order.",
      ],
    },
    {
      title: "C. Asking for Recommendations",
      body: [
        "When you are unsure what to order, you can ask the staff for suggestions.",
        "Useful expressions:",
      ],
      examples: [
        {
          text: "Ano po ang mairerekomenda ninyo?",
          meaning: "What would you recommend?",
        },
        {
          text: "Ano po ang pinakasikat na pagkain dito?",
          meaning: "What is the most popular food here?",
        },
        {
          text: "Ano po ang espesyalidad ninyo?",
          meaning: "What is your specialty?",
        },
        {
          text: "Ano po ang masarap dito?",
          meaning: "What is good here?",
        },
      ],
    },
    {
      title: "C. Asking for Recommendations",
      body: [
        "Customer: Ano po ang espesyalidad ninyo?",
        "Staff: Ang aming espesyalidad ay kare-kare.",
        "Customer: Sige po. Susubukan ko iyon.",
      ],
    },
    {
      title: "D. Requesting Changes to Your Order",
      body: [
        "Sometimes you may want to request a change to your food.",
      ],
      examples: [
        {
          text: "Puwede po bang hindi masyadong maanghang?",
          meaning: "Could it be not too spicy?",
        },
        {
          text: "Puwede po bang walang sibuyas?",
          meaning: "Could it be without onions?",
        },
        {
          text: "Dagdagan po sana ng kanin.",
          meaning: "I would like additional rice, please.",
        },
        {
          text: "Puwede po bang palitan ang inumin?",
          meaning: "Could I change the drink?",
        },
        {
          text: "Pakiwalay na lang po ang sarsa.",
          meaning: "Please put the sauce separately.",
        },
      ],
    },
    {
      title: "E. Asking About Prices",
      body: [
        "Use these expressions when checking the price of a meal or drink.",
      ],
      examples: [
        {
          text: "Magkano po ito?",
          meaning: "How much is this?",
        },
        {
          text: "Magkano po ang isang order?",
          meaning: "How much is one order?",
        },
        {
          text: "Kasama na po ba ang kanin?",
          meaning: "Is rice already included?",
        },
        {
          text: "May dagdag bayad po ba?",
          meaning: "Is there an additional charge?",
        },
        {
          text: "Magkano po lahat?",
          meaning: "How much is everything?",
        },
      ],
    },
    {
      title: "E. Asking About Prices",
      body: [
        "Customer: Magkano po ang isang order ng sinigang?",
        "Staff: Isang daan at dalawampung piso po.",
        "Customer: Kasama na po ba ang kanin?",
        "Staff: Hindi pa po. May karagdagang bayad po ang kanin.",
      ],
    },
    {
      title: "F. Dining In or Ordering Takeout",
      body: [
        "You can specify whether you will eat at the restaurant or take the food home.",
      ],
      table: {
        leftHeading: "Filipino Expression",
        rightHeading: "English Meaning",
        rows: [
          {
            left: "Dito na lang po.",
            right: "For here, please.",
          },
          {
            left: "Takeout po.",
            right: "Takeout, please.",
          },
          {
            left: "Ipapabalot ko na lang po.",
            right: "I'll have it packed to go.",
          },
          {
            left: "Dito po kami kakain.",
            right: "We will eat here.",
          },
          {
            left: "Dadalhin ko na lang po.",
            right: "I'll take it with me.",
          },
        ],
      },
    },
    {
      title: "G. Asking for the Bill and Paying",
      body: [
        "When you finish eating, you can ask for the bill.",
        "Useful expressions:",
      ],
      examples: [
        {
          text: "Bill na po.",
          meaning: "The bill, please.",
        },
        {
          text: "Maaari na po bang magbayad?",
          meaning: "May I pay now?",
        },
        {
          text: "Magkano po lahat?",
          meaning: "How much is everything?",
        },
        {
          text: "Puwede po bang magbayad gamit ang card?",
          meaning: "Can I pay using a card?",
        },
        {
          text: "May sukli pa po ba ako?",
          meaning: "Do I still have change coming?",
        },
      ],
    },
    {
      title: "G. Asking for the Bill and Paying",
      body: [
        "Customer: Bill na po.",
        "Staff: Tatlong daan at limampung piso po lahat.",
        "Customer: Heto po ang bayad.",
        "Staff: Salamat po!",
      ],
    },
    {
      title: "H. Important Grammar: Using \"Ng\" and \"Ang\" When Ordering",
      body: [
        "The words ng and ang have different grammatical functions.",
        "Compare:",
      ],
      examples: [
        {
          text: "Gusto ko ng adobo.",
          meaning: "I want some adobo.",
        },
        {
          text: "Ang adobo ang gusto ko.",
          meaning: "Adobo is what I want.",
        },
      ],
    },
    {
      title: "H. Important Grammar: Using \"Ng\" and \"Ang\" When Ordering",
      body: [
        "In the first sentence, ng marks the thing being requested after gusto ko. In the second, ang marks the focused item in the sentence.",
        "More examples:",
      ],
      examples: [
        {
          text: "Bibili ako ng tubig.",
          meaning: "I will buy water.",
        },
        {
          text: "Ang tubig ay malamig.",
          meaning: "The water is cold.",
        },
        {
          text: "Gusto niya ng kape.",
          meaning: "He/She wants coffee.",
        },
        {
          text: "Masarap ang kape.",
          meaning: "The coffee is delicious.",
        },
      ],
    },
    {
      title: "I. Important Grammar: Polite Requests",
      body: [
        "The expressions po and opo are commonly used to show respect, especially when speaking with older people, unfamiliar people, or service staff.",
        "Compare:",
      ],
      examples: [
        {
          text: "Pahingi ng tubig.",
          meaning: "Give me some water.",
        },
        {
          text: "Pahingi po ng tubig.",
          meaning: "May I have some water, please?",
        },
      ],
    },
    {
      title: "I. Important Grammar: Polite Requests",
      body: [
        "The second expression sounds more polite.",
        "Learners should practice using respectful expressions naturally, without feeling that every sentence must contain po.",
      ],
    },
    {
      title: "Lesson Summary",
      body: [
        "This lesson introduced practical Filipino expressions used in restaurants and local eateries.",
      ],
      table: {
        leftHeading: "Expression",
        rightHeading: "Purpose",
        rows: [
          {
            left: "May menu po ba kayo?",
            right: "Asking for a menu",
          },
          {
            left: "Ano po ang mairerekomenda ninyo?",
            right: "Asking for recommendations",
          },
          {
            left: "Gusto ko po ng...",
            right: "Ordering food",
          },
          {
            left: "Pahingi po ng...",
            right: "Requesting something",
          },
          {
            left: "Magkano po ito?",
            right: "Asking for the price",
          },
          {
            left: "Kasama na po ba ang kanin?",
            right: "Asking whether rice is included",
          },
          {
            left: "Dito na lang po.",
            right: "Dining in",
          },
          {
            left: "Ipapabalot ko na lang po.",
            right: "Requesting takeout",
          },
          {
            left: "Bill na po.",
            right: "Asking for the bill",
          },
          {
            left: "Maaari na po bang magbayad?",
            right: "Asking to pay",
          },
        ],
      },
      remember: "When ordering food, use clear and polite expressions. Adding po where appropriate can make your requests sound more respectful and natural.",
    },
  ],
  conversations: [
    {
      title: "Conversation 1: Ordering at a Karinderya",
      lines: [
        {
          speaker: "Customer",
          text: "Magandang tanghali po. Ano po ang available na ulam?",
          translation: "Good afternoon. What viands are available?",
        },
        {
          speaker: "Staff",
          text: "May adobo, pritong isda, at ginisang gulay po.",
          translation: "We have adobo, fried fish, and sautéed vegetables.",
        },
        {
          speaker: "Customer",
          text: "Magkano po ang adobo?",
          translation: "How much is the adobo?",
        },
        {
          speaker: "Staff",
          text: "Walumpung piso po, kasama na ang kanin.",
          translation: "Eighty pesos, including rice.",
        },
        {
          speaker: "Customer",
          text: "Sige po. Isang adobo po at isang basong tubig.",
          translation: "All right. One adobo and a glass of water, please.",
        },
        {
          speaker: "Staff",
          text: "Dito na lang po ba o takeout?",
          translation: "For here or takeout?",
        },
        {
          speaker: "Customer",
          text: "Dito na lang po. Salamat.",
          translation: "For here, please. Thank you.",
        },
      ],
    },
    {
      title: "Conversation 2: Ordering at a Restaurant",
      lines: [
        {
          speaker: "Customer",
          text: "Magandang gabi po. May bakante po ba kayong mesa para sa dalawa?",
          translation: "Good evening. Do you have an available table for two?",
        },
        {
          speaker: "Staff",
          text: "Opo. Dito po kayo.",
          translation: "Yes. Please come this way.",
        },
        {
          speaker: "Customer",
          text: "Salamat. Maaari po bang makita ang menu?",
          translation: "Thank you. May I see the menu?",
        },
        {
          speaker: "Staff",
          text: "Opo. Narito po ang menu.",
          translation: "Yes. Here is the menu.",
        },
        {
          speaker: "Customer",
          text: "Ano po ang mairerekomenda ninyo?",
          translation: "What would you recommend?",
        },
        {
          speaker: "Staff",
          text: "Sikat po ang aming sinigang na baboy at kare-kare.",
          translation: "Our pork sinigang and kare-kare are popular.",
        },
        {
          speaker: "Customer",
          text: "Isang sinigang na baboy at isang kare-kare po. Dalawang kanin din po.",
          translation: "One pork sinigang and one kare-kare, please. Two servings of rice as well.",
        },
        {
          speaker: "Staff",
          text: "Ano pong inumin ninyo?",
          translation: "What would you like to drink?",
        },
        {
          speaker: "Customer",
          text: "Dalawang malamig na tubig po.",
          translation: "Two glasses of cold water, please.",
        },
      ],
    },
    {
      title: "Conversation 3: Requesting a Food Modification",
      lines: [
        {
          speaker: "Customer",
          text: "Maaari po bang mag-order ng chicken adobo?",
          translation: "May I order chicken adobo?",
        },
        {
          speaker: "Staff",
          text: "Opo. Isang order po?",
          translation: "Yes. One order?",
        },
        {
          speaker: "Customer",
          text: "Opo. Puwede po bang huwag masyadong maalat?",
          translation: "Yes. Could you make it not too salty?",
        },
        {
          speaker: "Staff",
          text: "Susubukan po namin.",
          translation: "We will try.",
        },
        {
          speaker: "Customer",
          text: "Salamat po. Maaari rin po bang humingi ng dagdag na sabaw?",
          translation: "Thank you. May I also ask for additional broth?",
        },
        {
          speaker: "Staff",
          text: "Opo. Ihahanda na po namin.",
          translation: "Yes. We will prepare it.",
        },
      ],
    },
  ],
  assessment: {
    instructions: "Answer all 15 questions. The assessment checks vocabulary, expressions, and practical ordering skills.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What does Pahingi po ng tubig mean?",
        options: [
          {
            key: "A",
            text: "I want to sell water.",
          },
          {
            key: "B",
            text: "May I have some water, please?",
          },
          {
            key: "C",
            text: "Where is the water?",
          },
          {
            key: "D",
            text: "The water is cold.",
          },
        ],
        answerKey: "B",
        title: "Part A: Multiple Choice",
      },
      {
        id: 2,
        prompt: "Which expression asks for the price?",
        options: [
          {
            key: "A",
            text: "Ano po ito?",
          },
          {
            key: "B",
            text: "Magkano po ito?",
          },
          {
            key: "C",
            text: "Saan po ito?",
          },
          {
            key: "D",
            text: "Kailan po ito?",
          },
        ],
        answerKey: "B",
        title: "Part A: Multiple Choice",
      },
      {
        id: 3,
        prompt: "What does Ipabalot ko na lang po or Ipapabalot ko na lang po mean in this context?",
        options: [
          {
            key: "A",
            text: "I will eat here.",
          },
          {
            key: "B",
            text: "I will have it packed to go.",
          },
          {
            key: "C",
            text: "I will cook it myself.",
          },
          {
            key: "D",
            text: "I will return it.",
          },
        ],
        answerKey: "B",
        title: "Part A: Multiple Choice",
      },
      {
        id: 4,
        prompt: "Which word means \"spoon\"?",
        options: [
          {
            key: "A",
            text: "Tinidor",
          },
          {
            key: "B",
            text: "Kutsilyo",
          },
          {
            key: "C",
            text: "Kutsara",
          },
          {
            key: "D",
            text: "Plato",
          },
        ],
        answerKey: "C",
        title: "Part A: Multiple Choice",
      },
      {
        id: 5,
        prompt: "Which expression is used to ask for a recommendation?",
        options: [
          {
            key: "A",
            text: "Ano po ang mairerekomenda ninyo?",
          },
          {
            key: "B",
            text: "Magkano po lahat?",
          },
          {
            key: "C",
            text: "Bill na po.",
          },
          {
            key: "D",
            text: "Dito na lang po.",
          },
        ],
        answerKey: "A",
        title: "Part A: Multiple Choice",
      },
    ],
  },
  extraActivities: [
    {
      title: "Match the Vocabulary",
      kind: "match",
      instructions: "Match the Filipino words with their English meanings.",
      items: [
        "Kutsara",
        "Resibo",
        "Menu",
        "Bayarin",
        "Inumin",
      ],
      choices: [
        "Bill",
        "Spoon",
        "Receipt",
        "Menu",
        "Drink",
      ],
    },
    {
      title: "Choose the Correct Expression",
      kind: "rewrite",
      instructions: "Choose the most appropriate Filipino expression for each situation.",
      items: [
        "You want to ask for a menu.\nA. Magkano po ito?\nB. Maaari ko po bang makita ang menu?\nC. Bill na po.",
        "You want to order a glass of water.\nA. Pahingi po ng isang basong tubig.\nB. Masarap po ang tubig.\nC. Saan po ang tubig?",
        "You want to ask how much the food costs.\nA. Ano po ang pangalan ninyo?\nB. Magkano po ito?\nC. Ano po ang oras?",
        "You want to request takeout.\nA. Dito na lang po.\nB. Ipapabalot ko na lang po.\nC. Kumain na po ako.",
        "You want to ask for the bill.\nA. Bill na po.\nB. Menu na po.\nC. Tubig na po.",
      ],
    },
    {
      title: "Fill in the Blanks",
      kind: "fill",
      instructions: "Choose the correct word or expression.",
      items: [
        "Maaari ko po bang makita ang ______?",
        "______ po ang isang order ng adobo?",
        "Hindi po ako mahilig sa ______ na pagkain.",
        "______ po ang order ko. Ipapauwi ko ang pagkain.",
        "______ na po. Tapos na kaming kumain.",
      ],
      choices: [
        "menu",
        "magkano",
        "takeout",
        "bill",
        "maanghang",
      ],
    },
    {
      title: "Arrange the Words",
      kind: "arrange",
      instructions: "Arrange the words to form a correct sentence.",
      items: [
        "po / Gusto / ng / ako / sinigang",
        "ito / po / Magkano",
        "menu / makita / bang / Maaari / ang / ko / po",
        "po / isang / tubig / basong / Pahingi / ng",
        "na / po / Bill",
      ],
    },
    {
      title: "Translate into Filipino",
      kind: "translate",
      instructions: "Translate the following sentences.",
      items: [
        "I would like one order of fried chicken.",
        "How much is the rice?",
        "May I have a glass of water?",
        "Please make it less spicy.",
        "Can I have the bill, please?",
      ],
    },
    {
      title: "Restaurant Role-Playing",
      kind: "roleplay",
      instructions: "Pair up with another learner.\nOne learner will act as the customer, and the other will act as the restaurant staff.\nCustomer's task:",
      items: [
        "Ask for a menu.",
        "Ask for a recommendation.",
        "Order one meal and one drink.",
        "Ask about the total price.",
        "Request the bill.",
        "Welcome the customer.",
        "Present the available meals.",
        "Recommend a dish.",
        "Explain the price.",
        "Confirm the order.",
      ],
      note: "Staff's task:\nLearners should use at least five expressions from the lesson.",
    },
    {
      title: "Lesson Assessment – Part B: Fill in the Blanks",
      kind: "assessment",
      items: [
        "______ po ang isang order ng pancit?",
        "Pahingi po ng isang basong ______.",
        "______ na po. Tapos na kaming kumain.",
        "Puwede po bang hindi masyadong ______?",
        "Maaari ko po bang makita ang ______?",
      ],
      answers: [
        "Magkano",
        "tubig",
        "Bill",
        "maanghang",
        "menu",
      ],
    },
    {
      title: "Lesson Assessment – Part C: Situational Responses",
      kind: "assessment",
      items: [
        "You are entering a restaurant. Write a polite Filipino expression to ask for a table for two.",
        "You want to order one serving of adobo and one rice. Write your order in Filipino.",
        "You want to ask whether rice is included in the meal. Write the question in Filipino.",
        "You want your food packed to take home. What would you say?",
        "You have finished eating and want to pay. Write an appropriate Filipino expression.",
      ],
      answers: [
        "May bakante po ba kayong mesa para sa dalawa?",
        "Isang order po ng adobo at isang kanin.",
        "Kasama na po ba ang kanin?",
        "Ipapabalot ko na lang po.",
        "Maaari na po ba akong magbayad? or Bill na po.",
      ],
    },
  ],
  rewards: {
    items: [
      {
        section: "vocabulary",
        label: "Complete the vocabulary lesson + Complete the ordering expression exercises",
        xp: 25,
      },
      {
        section: "conversation",
        label: "Finish the guided conversation activity + Complete the restaurant role-playing activity",
        xp: 25,
      },
      {
        section: "assessment",
        label: "Pass the lesson assessment",
        xp: 20,
      },
    ],
    total: 70,
    badge: {
      name: "Restaurant Ready Badge",
      description: "Awarded when the learner completes the lesson and successfully performs a restaurant-ordering role-play using appropriate Filipino expressions.",
    },
    completionRequirement: "Finish the vocabulary and lesson sections. Complete the required practice activities. Obtain at least 70% in the assessment. Complete the restaurant role-playing activity.",
  },
  expectedOutcomes: [
    "Recognize common restaurant-related vocabulary.",
    "Ask for a menu and food recommendations.",
    "Order meals and drinks politely.",
    "Request changes to food orders.",
    "Ask about food prices and payment.",
    "Participate in basic restaurant conversations.",
    "The learner can independently construct and use common Filipino expressions when ordering food and interacting with restaurant staff in familiar dining situations.",
  ],
};
