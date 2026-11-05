import { PracticeLevel, PracticePhrase } from "../types/practice";

// NOTE: expectedTone values below are PLACEHOLDER GUESSES based on general
// sentence-type intonation patterns (questions ~ rising/high, statements ~
// medium, short farewells ~ falling/low) ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â they are NOT verified against
// real Tagalog/Kapampangan/Waray pronunciation. Please review and correct
// each one before relying on them for grading.
//
// LESSON BOARD: app/lessons.tsx renders these levels in order as the
// lesson board. `subtitle` and each phrase's `words` breakdown are only
// used there. Lessons unlock in sequence ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â lesson N opens only once every
// lesson before it is complete (see isLessonComplete in
// hooks/useLessonProgress.ts).

const tagalogPracticeLevels: PracticeLevel[] = [
  {
    id: 1,
    lessonId: "tagalog_1",
    title: "Basic Greetings and Politeness",
    subtitle: "Learn how to greet people in Tagalog.",
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Magandang Umaga",
        example: "Good Morning",
        howToUse: "Magandang Umaga po aling Teresita",
        howToUseTranslation: "Good Morning Ms. Teresita",
        expectedExpression: "happy",
        expectedTone: "medium", // TODO: verify ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â greeting, fairly level
        words: [
          { word: "Maganda", meaning: "Good" },
          { word: "Umaga", meaning: "morning" },
        ],
      },
      {
        id: 2,
        text: "Kamusta Ka?",
        example: "How are you?",
        howToUse: "Kamusta ka Tatay",
        howToUseTranslation: "How are you Father",
        expectedExpression: "happy",
        expectedTone: "medium", // TODO: verify ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â question, rising intonation
        words: [
          { word: "Kamusta", meaning: "how are you / how" },
          { word: "Ka", meaning: "you" },
        ],
      },
      {
        id: 3,
        text: "Paalam",
        example: "Good bye",
        howToUse: "Paalam na mama papasok na po ako ng school",
        howToUseTranslation: "Goodbye, Mom. I am going to school now.",
        expectedExpression: "sad",
        expectedTone: "low", // TODO: verify ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â short farewell, falling
        words: [{ word: "Paalam", meaning: "goodbye" }],
      },
    ],
  },

  {
    id: 2,
    lessonId: "tagalog_2",
    title: "Family and Relatives",
    subtitle: "Say who you are and where you're from.",
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Nanay",
        example: "Mother",
        howToUse: "Siya ang nanay ko",
        howToUseTranslation: "She is my mother",
        expectedExpression: "happy",
        expectedTone: "medium", // TODO: verify ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â statement
        words: [{ word: "Ako si Juan", meaning: "I / me" }],
      },
      {
        id: 2,
        text: "Tatay",
        example: "Father",
        howToUse: "Siya ang tatay ko",
        howToUseTranslation: "He is my Father",
        expectedExpression: "happy",
        expectedTone: "medium", // TODO: verify ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â statement
        words: [
          { word: "Ikinagagalak", meaning: "I am glad / pleased" },
          { word: "kitang", meaning: "you (I ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ you)" },
          { word: "makilala", meaning: "to meet / to know" },
        ],
      },
      {
        id: 3,
        text: "Kapatid",
        example: "Siblings",
        howToUse: "Siya ay kapatid ko",
        howToUseTranslation: "This is my Sibling",
        expectedExpression: "neutral",
        expectedTone: "medium", // TODO: verify ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â statement
        words: [
          { word: "Ako", meaning: "I / me" },
          { word: "ay", meaning: "is / am (linking word)" },
          { word: "Pilipino", meaning: "Filipino" },
        ],
      },
    ],
  },

  {
    id: 3,
    lessonId: "tagalog_3",
    title: "Numbers and Counting",
    subtitle: "Simple words to count numbers.",
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Lima",
        example: "Five",
        howToUse: "Meron ako limang daliri",
        howToUseTranslation: "I have five fingers",
        expectedExpression: "happy",
        expectedTone: "medium", // TODO: verify ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â statement
        words: [{ word: "Lima", meaning: "Five" }],
      },
      {
        id: 2,
        text: "Sampu",
        example: "Ten",
        howToUse: "Meron ako sampung libro",
        howToUseTranslation: "I have ten books",
        expectedExpression: "happy",
        expectedTone: "medium", // TODO: verify ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â statement
        words: [{ word: "Sampu", meaning: "Ten" }],
      },
      {
        id: 3,
        text: "Isa, Dalawa, Tatlo, Apat, Lima, Anim, Pito, Walo, Siyam, Sampu",
        example: "One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten",
        howToUse: "Meron ako isang alagang manok at Tatlong Ibon",
        howToUseTranslation: "I have one chicken and three birds",
        expectedExpression: "neutral",
        expectedTone: "medium", // TODO: verify ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â statement
        words: [
          { word: "Tatlo", meaning: "Three" },
          { word: "Anim", meaning: "Six" },
        ],
      },
    ],
  },

  {
    id: 4,
    lessonId: "tagalog_4",
    title: "Simple Questions and Pronouns",
    subtitle: "Ask simple questions and talk about yourself.",
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Ano",
        example: "What",
        howToUse: "Ano ang pangalan mo?",
        howToUseTranslation: "What is your name?",
        expectedExpression: "neutral",
        expectedTone: "high", // TODO: verify
        words: [{ word: "Ano", meaning: "What" }],
      },
      {
        id: 2,
        text: "Saan",
        example: "Where",
        howToUse: "Saan ka pupunta?",
        howToUseTranslation: "Where are you going?",
        expectedExpression: "neutral",
        expectedTone: "high", // TODO: verify
        words: [{ word: "Saan", meaning: "Where" }],
      },
      {
        id: 3,
        text: "Ako",
        example: "I / Me",
        howToUse: "Ako si Maria.",
        howToUseTranslation: "I am Maria.",
        expectedExpression: "happy",
        expectedTone: "medium", // TODO: verify
        words: [{ word: "Ako", meaning: "I / Me" }],
      },
    ],
  },

  {
    id: 5,
    lessonId: "tagalog_5",
    title: "Common Foods and Dining",
    subtitle: "Name common foods and ask for things at the table.",
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Kanin",
        example: "Rice (cooked)",
        howToUse: "Kumain ako ng kanin.",
        howToUseTranslation: "I ate rice.",
        expectedExpression: "happy",
        expectedTone: "medium", // TODO: verify
        words: [{ word: "Kanin", meaning: "Rice (cooked)" }],
      },
      {
        id: 2,
        text: "Isda",
        example: "Fish",
        howToUse: "Masarap ang isda.",
        howToUseTranslation: "The fish is delicious.",
        expectedExpression: "happy",
        expectedTone: "medium", // TODO: verify
        words: [{ word: "Isda", meaning: "Fish" }],
      },
      {
        id: 3,
        text: "Tubig",
        example: "Water",
        howToUse: "Pahingi po ng tubig.",
        howToUseTranslation: "May I have some water, please?",
        expectedExpression: "neutral",
        expectedTone: "medium", // TODO: verify
        words: [{ word: "Tubig", meaning: "Water" }],
      },
    ],
  },

  {
    id: 6,
    lessonId: "tagalog_6",
    title: "Colors & Descriptions",
    subtitle: "Describe the colors and look of things around you.",
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Pula",
        example: "Red",
        howToUse: "Pula ang mansanas.",
        howToUseTranslation: "The apple is red.",
        expectedExpression: "happy",
        expectedTone: "medium", // TODO: verify
        words: [{ word: "Pula", meaning: "Red" }],
      },
      {
        id: 2,
        text: "Asul",
        example: "Blue",
        howToUse: "Asul ang langit.",
        howToUseTranslation: "The sky is blue.",
        expectedExpression: "happy",
        expectedTone: "medium", // TODO: verify
        words: [{ word: "Asul", meaning: "Blue" }],
      },
      {
        id: 3,
        text: "Maganda",
        example: "Beautiful",
        howToUse: "Maganda ang bulaklak.",
        howToUseTranslation: "The flower is beautiful.",
        expectedExpression: "happy",
        expectedTone: "medium", // TODO: verify
        words: [{ word: "Maganda", meaning: "Beautiful" }],
      },
    ],
  },

  {
    id: 7,
    lessonId: "tagalog_7",
    title: "Days of the Week & Time",
    subtitle: "Talk about the days of the week and the time.",
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Lunes",
        example: "Monday",
        howToUse: "May pasok ako sa Lunes.",
        howToUseTranslation: "I have school on Monday.",
        expectedExpression: "neutral",
        expectedTone: "medium", // TODO: verify
        words: [{ word: "Lunes", meaning: "Monday" }],
      },
      {
        id: 2,
        text: "Linggo",
        example: "Sunday",
        howToUse: "Nagsisimba kami tuwing Linggo.",
        howToUseTranslation: "We go to church every Sunday.",
        expectedExpression: "happy",
        expectedTone: "medium", // TODO: verify
        words: [{ word: "Linggo", meaning: "Sunday" }],
      },
      {
        id: 3,
        text: "Oras",
        example: "Time / Hour",
        howToUse: "Anong oras na?",
        howToUseTranslation: "What time is it?",
        expectedExpression: "neutral",
        expectedTone: "high", // TODO: verify
        words: [{ word: "Oras", meaning: "Time / Hour" }],
      },
    ],
  },

  {
    id: 8,
    lessonId: "tagalog_8",
    title: "Navigation & Directions",
    subtitle: "Tell someone which way to go.",
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Kanan",
        example: "Right",
        howToUse: "Kumanan ka sa kanto.",
        howToUseTranslation: "Turn right at the corner.",
        expectedExpression: "neutral",
        expectedTone: "medium", // TODO: verify
        words: [{ word: "Kanan", meaning: "Right" }],
      },
      {
        id: 2,
        text: "Kaliwa",
        example: "Left",
        howToUse: "Nasa kaliwa ang paaralan.",
        howToUseTranslation: "The school is on the left.",
        expectedExpression: "neutral",
        expectedTone: "medium", // TODO: verify
        words: [{ word: "Kaliwa", meaning: "Left" }],
      },
      {
        id: 3,
        text: "Diretso",
        example: "Straight ahead",
        howToUse: "Diretso lang po kayo.",
        howToUseTranslation: "Just go straight ahead.",
        expectedExpression: "neutral",
        expectedTone: "medium", // TODO: verify
        words: [{ word: "Diretso", meaning: "Straight ahead" }],
      },
    ],
  },

  {
    id: 9,
    lessonId: "tagalog_9",
    title: "Shopping & Haggling",
    subtitle: "Ask prices and bargain at the market.",
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Magkano",
        example: "How much",
        howToUse: "Magkano po ito?",
        howToUseTranslation: "How much is this?",
        expectedExpression: "neutral",
        expectedTone: "high", // TODO: verify
        words: [{ word: "Magkano", meaning: "How much" }],
      },
      {
        id: 2,
        text: "Mura",
        example: "Cheap",
        howToUse: "Mura ang mga gulay dito.",
        howToUseTranslation: "The vegetables here are cheap.",
        expectedExpression: "happy",
        expectedTone: "medium", // TODO: verify
        words: [{ word: "Mura", meaning: "Cheap" }],
      },
      {
        id: 3,
        text: "Tawad",
        example: "Discount / Bargain",
        howToUse: "Pwede po bang tumawad?",
        howToUseTranslation: "May I ask for a discount?",
        expectedExpression: "neutral",
        expectedTone: "high", // TODO: verify
        words: [{ word: "Tawad", meaning: "Discount / Bargain" }],
      },
    ],
  },

  {
    id: 10,
    lessonId: "tagalog_10",
    title: "Weather & Nature",
    subtitle: "Talk about the weather and the world outside.",
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Ulan",
        example: "Rain",
        howToUse: "Malakas ang ulan ngayon.",
        howToUseTranslation: "The rain is heavy today.",
        expectedExpression: "sad",
        expectedTone: "low", // TODO: verify
        words: [{ word: "Ulan", meaning: "Rain" }],
      },
      {
        id: 2,
        text: "Araw",
        example: "Sun / Day",
        howToUse: "Mainit ang araw.",
        howToUseTranslation: "The sun is hot.",
        expectedExpression: "neutral",
        expectedTone: "medium", // TODO: verify
        words: [{ word: "Araw", meaning: "Sun / Day" }],
      },
      {
        id: 3,
        text: "Puno",
        example: "Tree",
        howToUse: "Mataas ang puno.",
        howToUseTranslation: "The tree is tall.",
        expectedExpression: "neutral",
        expectedTone: "medium", // TODO: verify
        words: [{ word: "Puno", meaning: "Tree" }],
      },
    ],
  },

  {
    id: 11,
    lessonId: "tagalog_11",
    title: "Common Daily Conversations",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },

  {
    id: 12,
    lessonId: "tagalog_12",
    title: "Giving Directions and Locations",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },

  {
    id: 13,
    lessonId: "tagalog_13",
    title: "Asking for Information",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },

  {
    id: 14,
    lessonId: "tagalog_14",
    title: "Pronouns and Common Verbs",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },

  {
    id: 15,
    lessonId: "tagalog_15",
    title: "Basic Sentence Structure",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },

  {
    id: 16,
    lessonId: "tagalog_16",
    title: "Constructing More Complex Sentences",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },

  {
    id: 17,
    lessonId: "tagalog_17",
    title: "Ordering Food",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },

  {
    id: 18,
    lessonId: "tagalog_18",
    title: "Shopping and Buying",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },

  {
    id: 19,
    lessonId: "tagalog_19",
    title: "Talking About Daily Activities",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },

  {
    id: 20,
    lessonId: "tagalog_20",
    title: "Describing People, Places, and Things",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },
  {
    id: 21,
    lessonId: "tagalog_21",
    title: "Expressing Opinions and Feelings",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },
  {
    id: 22,
    lessonId: "tagalog_22",
    title: "Giving Explanations and Reasons",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },
  {
    id: 23,
    lessonId: "tagalog_23",
    title: "Agreeing and Disagreeing",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },
  {
    id: 24,
    lessonId: "tagalog_24",
    title: "Advanced Sentence Construction",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },
  {
    id: 25,
    lessonId: "tagalog_25",
    title: "Verb Forms and Tenses",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },
  {
    id: 26,
    lessonId: "tagalog_26",
    title: "Idiomatic Expressions and Common Sayings",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },
  {
    id: 27,
    lessonId: "tagalog_27",
    title: "Workplace and School Conversations",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },
  {
    id: 28,
    lessonId: "tagalog_28",
    title: "Storytelling and Narration",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },
  {
    id: 29,
    lessonId: "tagalog_29",
    title: "Situational Dialogues and Role-Playing",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },
  {
    id: 30,
    lessonId: "tagalog_30",
    title: "Comprehensive Language Assessment",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },
];

type PracticeLevelOutline = Pick<PracticeLevel, "id" | "title" | "subtitle">;

const dialectLevelOutlines: PracticeLevelOutline[] = [
  {
    id: 1,
    title: "Basic Greetings and Politeness",
    subtitle: "Learn how to greet people.",
  },
  {
    id: 2,
    title: "Family & Relatives",
    subtitle: "Talk about your family.",
  },
  {
    id: 3,
    title: "Numbers & Counting (1–10)",
    subtitle: "Count from 1 to 10.",
  },
  {
    id: 4,
    title: "Simple Questions & Pronouns",
    subtitle: "Ask and answer simple questions.",
  },
  {
    id: 5,
    title: "Common Foods & Dining",
    subtitle: "Talk about food and meals.",
  },
  {
    id: 6,
    title: "Colors and Descriptions",
    subtitle: "Greet people at different times.",
  },
  {
    id: 7,
    title: "Days and Time",
    subtitle: "Continue counting to twenty.",
  },
  {
    id: 8,
    title: "Navigation and Directions",
    subtitle: "Ask about another person.",
  },
  {
    id: 9,
    title: "Shopping and Haggling",
    subtitle: "Say how you feel.",
  },
  {
    id: 10,
    title: "Weather and Nature",
    subtitle: "Name places and things at home.",
  },
  {
    id: 11,
    title: "Daily Verbs and Actions",
    subtitle: "Describe colors around you.",
  },
  {
    id: 12,
    title: "Emotions and Feelings",
    subtitle: "Talk about the weather.",
  },
  {
    id: 13,
    title: "Body Parts and Health",
    subtitle: "Ask prices and buy things.",
  },
  {
    id: 14,
    title: "Home and Objects",
    subtitle: "Ask for and give directions.",
  },
  {
    id: 15,
    title: "Verb Tenses",
    subtitle: "Talk about days and time.",
  },
  {
    id: 16,
    title: "Compound Words and Expressions",
    subtitle: "Use phrases when you need help.",
  },
  {
    id: 17,
    title: "Honorifics and Social Courtesy",
    subtitle: "Talk about activities you enjoy.",
  },
  {
    id: 18,
    title: "Idiomatic Expressions",
    subtitle: "Talk about destinations and travel.",
  },
  {
    id: 19,
    title: "Storytelling and Linking Words",
    subtitle: "Practice respectful conversation.",
  },
  {
    id: 20,
    title: "Kapampangan Mastery Boss",
    subtitle: "End a conversation warmly.",
  },
];

const kapampanganPracticePhrases: Record<number, PracticePhrase[]> = {};

const kapampanganPdfPhrase = (
  id: number,
  text: string,
  meaning: string,
  expectedExpression: PracticePhrase["expectedExpression"] = "neutral",
): PracticePhrase => ({
  id,
  text,
  // Placeholders for every PDF phrase. To fill one in, override it at the
  // call site: { ...kapampanganPdfPhrase(1, "Ima", "..."), example: "...", howToUse: "...", howToUseTranslation: "..." }
  example: "",
  howToUse: "",
  howToUseTranslation: "",
  meaning,
  exampleSentence: text,
  expectedExpression,
  expectedTone: "medium",
  words: [{ word: text, meaning }],
});

const kapampanganPdfPracticePhrases: Record<number, PracticePhrase[]> = {
  1: [
    kapampanganPdfPhrase(1, "abak", "Mayap a abak pu."),
    kapampanganPdfPhrase(1, "", ""),
    kapampanganPdfPhrase(1, "", ""),
  ],
  2: [
    kapampanganPdfPhrase(1, "Ima", "Ini pala ing ima ku"),
    kapampanganPdfPhrase(2, "Tatang", "Oyni pala ing tatang ku", "happy"),
    kapampanganPdfPhrase(3, "Kapatad", "Pitu kami magkakapatad", "happy"),
  ],
  3: [
    kapampanganPdfPhrase(1, "Metung", "metung a lapis"),
    kapampanganPdfPhrase(2, "Adwa", "Adwa la reng kapatad ku"),
    kapampanganPdfPhrase(
      3,
      "Mag bilang tamu",
      "Metung, Adwa, Atlu, Apat, Lima, Anam, Pitu, Walu, Siyam, Apulu",
    ),
  ],
  4: [
    kapampanganPdfPhrase(1, "Nanu", "Nanu ya ing lagyu mu’"),
    kapampanganPdfPhrase(2, "Ninu", "Ninu ya ing kayabe mu"),
    kapampanganPdfPhrase(3, "Nokarin", "Nokarin ka munta"),
  ],
  5: [
    kapampanganPdfPhrase(1, "Mangan", "Mangan bap"),
    kapampanganPdfPhrase(2, "Pakisuyo", "Pakisuyo ing danum."),
    kapampanganPdfPhrase(3, "Manyaman", "Manyaman ya ing Pamangan", "happy"),
  ],
  6: [
    kapampanganPdfPhrase(1, "Malutu", "Malutu ya ing bag ku"),
    kapampanganPdfPhrase(2, "Asul", "Asul yan ing banua"),
    kapampanganPdfPhrase(3, "Maputi", "Maputi yan ing malan ku"),
  ],
  7: [
    kapampanganPdfPhrase(1, "Lunes", "Today is Monday."),
    kapampanganPdfPhrase(2, "Bukas", "Bukas tanamu mikit"),
    kapampanganPdfPhrase(3, "Kapilan", "Kapilan mu buri mikit"),
  ],
  8: [
    kapampanganPdfPhrase(1, "Nokarin", "Nokarin ya ing pisamban"),
    kapampanganPdfPhrase(2, "Wanan", "Mag wanan ka para akit me ing iskwela"),
    kapampanganPdfPhrase(
      3,
      "Diretsu",
      "Diretsu nakamu pu para akit me ing iskwela.",
    ),
  ],
  9: [
    kapampanganPdfPhrase(1, "Magkanu", "Magkanu ya ini"),
    kapampanganPdfPhrase(2, "Pakibye", "Pakibye naman ing sukli ku"),
    kapampanganPdfPhrase(3, "bawas?", "Atin yapa bawas"),
  ],
  10: [
    kapampanganPdfPhrase(1, "Mamuran", "Mumuran ngeni"),
    kapampanganPdfPhrase(2, "Mapali", "Mapali ya ing aldo ngeni"),
    kapampanganPdfPhrase(3, "Mayangin", "Mayangin ya ing bagyu ngeni"),
  ],
  11: [
    kapampanganPdfPhrase(1, "Maglakad ku", "Maglakad ku papuntang bale"),
    kapampanganPdfPhrase(2, "Mangan tana", "Matangan tana bap", "happy"),
    kapampanganPdfPhrase(3, "Iinuman", "Iinuman ke ing gamut ku"),
  ],
  12: [
    kapampanganPdfPhrase(1, "Masaya", "Masaya ka ngeni", "happy"),
    kapampanganPdfPhrase(2, "Malungkut", "Malungkut ya ngeni.", "sad"),
    kapampanganPdfPhrase(3, "Masosora", "Masosora ku king malyayari", "angry"),
  ],
  13: [
    kapampanganPdfPhrase(1, "Masakit ing ulu ku.", "My head hurts."),
    kapampanganPdfPhrase(2, "Manos naka gamat mu.", "Wash your hand."),
    kapampanganPdfPhrase(
      3,
      "Masakit ya ing bitis ku.",
      "Foot or leg, depending on context.",
      "sad",
    ),
  ],
  14: [
    kapampanganPdfPhrase(1, "Atiu ku king bale.", "Are you home?"),
    kapampanganPdfPhrase(
      2,
      "Pakisara me ing pintu.",
      "Can you please close the door.",
    ),
    kapampanganPdfPhrase(
      3,
      "Buksan me ing bintana.",
      "Can you please open the window.",
    ),
  ],
  15: [
    kapampanganPdfPhrase(1, "Mengan naku nandin.", "I have already eaten"),
    kapampanganPdfPhrase(2, "Mengan", "Mengan yapa pu i bapa ku"),
    kapampanganPdfPhrase(3, "Mangan", "Mangan kami pa"),
  ],
  16: [
    kapampanganPdfPhrase(1, "Pananari", "Ating pananari kayari ning bagyu"),
    kapampanganPdfPhrase(
      2,
      "Muklat sumala",
      "Mag balik ya ing muklat sumala bukas",
    ),
    kapampanganPdfPhrase(3, "Aldo-aldo kung mag-aral.", "Every day; daily."),
  ],
  17: [
    kapampanganPdfPhrase(1, "Opu", "Opu Tikdo naku keni", "happy"),
    kapampanganPdfPhrase(2, "Pasensya", "Pasensya  na pu king abala.", "sad"),
    kapampanganPdfPhrase(3, "pu", "Makilabas ko pu", "happy"),
  ],
  18: [
    kapampanganPdfPhrase(
      1,
      "E ka maging ningas-kugon king pamagaral.",
      "Starting eagerly but failing to continue or finish.",
    ),
    kapampanganPdfPhrase(
      2,
      "Maluya ing loob na king pamagsalita.",
      "Timid or lacking confidence.",
      "sad",
    ),
    kapampanganPdfPhrase(
      3,
      "Mag-ingat king taong matamis ing dila.",
      "Flattering or persuasive speech; can imply insincerity.",
    ),
  ],
  19: [
    kapampanganPdfPhrase(1, "uling", "Magdala kung payung uling mumuran"),
    kapampanganPdfPhrase(2, "atiu", "Mumuran, kaya atiu kami king bale."),
    kapampanganPdfPhrase(3, "Oneng", "Bisa ku tuki oneng atin kung klasi."),
  ],
  20: [
    kapampanganPdfPhrase(
      1,
      "Magtulungin",
      "Matulungin la reng kapampangan",
      "happy",
    ),
    kapampanganPdfPhrase(2, "ing", "Mahalaga ing katarungan king balen."),
    kapampanganPdfPhrase(
      3,
      "ya",
      "Pakamalan tamu ya ring kekatamung kalayaan.",
      "happy",
    ),
  ],
};

const warayPdfPhrase = (
  id: number,
  text: string,
  meaning: string,
  expectedExpression: PracticePhrase["expectedExpression"] = "neutral",
): PracticePhrase => ({
  id,
  text,
  // Placeholders for every PDF phrase. To fill one in, override it at the
  // call site: { ...warayPdfPhrase(1, "Nanay", "..."), example: "...", howToUse: "...", howToUseTranslation: "..." }
  example: "",
  howToUse: "",
  howToUseTranslation: "",
  meaning,
  exampleSentence: text,
  expectedExpression,
  expectedTone: "medium",
  words: [{ word: text, meaning }],
});

const warayPdfPracticePhrases: Record<number, PracticePhrase[]> = {
  1: [
    warayPdfPhrase(1, "Nanay", "Hiya an akon nanay.", "happy"),
    warayPdfPhrase(2, "Tatay", "Hiya an akon tatay.", "happy"),
    warayPdfPhrase(3, "Bugto", "Pito kami nga magburugto.", "happy"),
  ],
  2: [
    warayPdfPhrase(1, "Nanay", "Hiya an akon nanay.", "happy"),
    warayPdfPhrase(2, "Tatay", "Hiya an akon tatay.", "happy"),
    warayPdfPhrase(3, "Bugto", "Pito kami nga magburugto.", "happy"),
  ],
  3: [
    warayPdfPhrase(1, "Usa", "Usa nga lapis."),
    warayPdfPhrase(2, "Duha", "Duha an akon bugto."),
    warayPdfPhrase(
      3,
      "Pag-ihap",
      "Usa, duha, tulo, upat, lima, unom, pito, walo, siyam, napulo.",
    ),
  ],
  4: [
    warayPdfPhrase(1, "Ano", "Ano an imo ngaran?"),
    warayPdfPhrase(2, "Hin-o", "Hin-o an imo kaupod?"),
    warayPdfPhrase(3, "Diin", "Diin ka makadto?"),
  ],
  5: [
    warayPdfPhrase(1, "Kaon", "Kaon na kita.", "happy"),
    warayPdfPhrase(2, "Tubig", "Tagi ako hin tubig."),
    warayPdfPhrase(3, "Marasa", "Marasa gud an pagkaon.", "happy"),
  ],
  6: [
    warayPdfPhrase(1, "Pula", "Pula an kolor."),
    warayPdfPhrase(2, "Asul", "Asul an langit."),
    warayPdfPhrase(3, "Busag", "Busag an akon bado."),
  ],
  7: [
    warayPdfPhrase(1, "Lunes", "Lunes yana."),
    warayPdfPhrase(2, "Buwas", "Buwas kita magkikita."),
    warayPdfPhrase(3, "Kakano", "Kakano ka makadto?"),
  ],
  8: [
    warayPdfPhrase(1, "Hain", "Hain an simbahan?"),
    warayPdfPhrase(2, "Kanan", "Liko ha kanan."),
    warayPdfPhrase(3, "Diretso", "Diretso la ngadto."),
  ],
  9: [
    warayPdfPhrase(1, "Pira", "Pira ini?"),
    warayPdfPhrase(2, "Barato", "Barato la ini."),
    warayPdfPhrase(3, "Mahal", "Mahal ini."),
  ],
  10: [
    warayPdfPhrase(1, "Uran", "Nag-uuran yana.", "sad"),
    warayPdfPhrase(2, "Adlaw", "Maupay an sirak han adlaw.", "happy"),
    warayPdfPhrase(3, "Hangin", "Makusog an hangin."),
  ],
  11: [
    warayPdfPhrase(1, "Malakat", "Malakat ako tikadto ha merkado."),
    warayPdfPhrase(2, "Kaon", "Nakaon ako hin pamahaw.", "happy"),
    warayPdfPhrase(3, "Inom", "Inom hin tubig."),
  ],
  12: [
    warayPdfPhrase(1, "Malipayon", "Malipayon ako yana.", "happy"),
    warayPdfPhrase(2, "Masulob-on", "Masurob-on hiya yana.", "sad"),
    warayPdfPhrase(3, "Nasisina", "Nasisina hiya.", "angry"),
  ],
  13: [
    warayPdfPhrase(1, "Ulo", "Masakit an akon ulo.", "sad"),
    warayPdfPhrase(2, "Kamot", "Hugasi an imo kamot."),
    warayPdfPhrase(3, "Tiil", "Masakit an akon tiil.", "sad"),
  ],
  14: [
    warayPdfPhrase(1, "Balay", "Aadi ako ha balay."),
    warayPdfPhrase(2, "Purtahan", "Alayon pagsara han purtahan."),
    warayPdfPhrase(3, "Bintana", "Abrihi an bintana."),
  ],
  15: [
    warayPdfPhrase(1, "Nakaon na", "Nakaon na ako."),
    warayPdfPhrase(2, "Nakaon", "Nakaon ako hin isda."),
    warayPdfPhrase(3, "Mangaon", "Mangaon kita."),
  ],
  16: [
    warayPdfPhrase(1, "Buligi ako", "Buligi ako, alayon."),
    warayPdfPhrase(2, "Diri ako maaram", "Diri ako maaram hini."),
    warayPdfPhrase(3, "Paalayon", "Paalayon paghulat."),
  ],
  17: [
    warayPdfPhrase(1, "Salamat", "Salamat ha imo bulig.", "happy"),
    warayPdfPhrase(2, "Maupay nga aga", "Maupay nga aga ha iyo.", "happy"),
    warayPdfPhrase(3, "Pasayloa ako", "Pasayloa ako ha akon sayop.", "sad"),
  ],
  18: [
    warayPdfPhrase(1, "Ayaw kabaraka", "Ayaw kabaraka, aadi ako."),
    warayPdfPhrase(2, "Padayon la", "Padayon la ha imo pag-aram.", "happy"),
    warayPdfPhrase(3, "Maupay an imo buhat", "Maupay an imo buhat.", "happy"),
  ],
  19: [
    warayPdfPhrase(1, "Kay", "Kinanhi ako kay kinahanglan ko ikaw."),
    warayPdfPhrase(2, "Pero", "Karuyag ko kumadto, pero nag-uuran."),
    warayPdfPhrase(3, "Sanglit", "Nag-uran, sanglit nagpabilin ako ha balay."),
  ],
  20: [
    warayPdfPhrase(1, "Maupay nga adlaw", "Maupay nga adlaw ha iyo.", "happy"),
    warayPdfPhrase(2, "Makadto na ako", "Makadto na ako yana."),
    warayPdfPhrase(3, "Kitaay kita liwat", "Kita-ay kita liwat.", "happy"),
  ],
};

const emptyKapampanganPracticePhrases: Record<number, PracticePhrase[]> =
  Object.fromEntries(
    Array.from({ length: 18 }, (_, index) => {
      const id = index + 3;
      return [
        id,
        [1, 2, 3].map((phraseId) => ({
          id: phraseId,
          text: "",
          example: "",
          howToUse: "",
          howToUseTranslation: "",
          meaning: "",
          exampleSentence: "",
          expectedExpression: "neutral",
          expectedTone: "medium",
          words: [{ word: "", meaning: "" }],
        })),
      ];
    }),
  ) as Record<number, PracticePhrase[]>;

function createDialectPracticeLevels(
  dialect: "kapampangan" | "waray",
): PracticeLevel[] {
  return dialectLevelOutlines.map((outline) => ({
    ...outline,
    lessonId: `${dialect}_${outline.id}`,
    requiredCorrect: 3,
    // Keep the level structure in place until the dialect-specific phrases
    // have been reviewed by a fluent speaker. Empty levels are not playable
    // yet, but their IDs can already be used consistently by the lesson flow.
    phrases:
      dialect === "kapampangan"
        ? outline.id >= 3
          ? emptyKapampanganPracticePhrases[outline.id]
          : (kapampanganPdfPracticePhrases[outline.id] ??
            kapampanganPracticePhrases[outline.id] ??
            [])
        : (warayPdfPracticePhrases[outline.id] ?? []),
  }));
}

export const kapampanganPracticeLevels: PracticeLevel[] = [
  {
    id: 1,
    lessonId: "kapampangan_1",
    title: "Basic Greetings and Politeness",
    subtitle: "Learn how to greet people in Kapampangan.",
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Mayap a abak",
        example: "Good Morning",
        howToUse: "Mayap a abak pu apung Teresita",
        howToUseTranslation: "Good Morning Ms. Teresita",
        expectedExpression: "happy",
        expectedTone: "medium",
      },
      {
        id: 2,
        text: "Komusta ka",
        example: "How are you?",
        howToUse: "Komusta ka pu, Tatang?",
        howToUseTranslation: "How are you Father",
        expectedExpression: "happy",
        expectedTone: "medium",
      },
      {
        id: 3,
        text: "Mako na ku",
        example: "Good bye",
        howToUse: "Mako na ku pu Ima munta naku pu keng school ",
        howToUseTranslation: "Goodbye, Mom. I am going to school now.",
        expectedExpression: "sad",
        expectedTone: "low",
      },
    ],
  },

  {
    id: 2,
    lessonId: "kapampangan_2",
    title: "Family and Relatives",
    subtitle: "Say who you are and where you're from.",
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Ima",
        example: "Mother",
        howToUse: "Iya ing ima ku",
        howToUseTranslation: "She is my mother",
        expectedExpression: "happy",
        expectedTone: "medium",
      },
      {
        id: 2,
        text: "Tatang",
        example: "Father",
        howToUse: "Iya ing tatang ku",
        howToUseTranslation: "He is my Father",
        expectedExpression: "happy",
        expectedTone: "medium",
      },
      {
        id: 3,
        text: "Kapatad",
        subTranslation: "Kóya, Átse",
        example: "Siblings",
        howToUse: "Ing kapatad ku",
        howToUseTranslation: "This is my Sibling",
        expectedExpression: "neutral",
        expectedTone: "medium",
      },
    ],
  },

  {
    id: 3,
    lessonId: "kapampangan_3",
    title: "Numbers and Counting",
    subtitle: "Simple words to count numbers.",
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Lima",
        example: "Five",
        howToUse: "Atin kung Limang Daliri",
        howToUseTranslation: "I have five fingers",
        expectedExpression: "happy",
        expectedTone: "medium",
      },
      {
        id: 2,
        text: "Apulu",
        example: "Ten",
        howToUse: "Atin kung apulung libru",
        howToUseTranslation: "I have ten books",
        expectedExpression: "happy",
        expectedTone: "medium",
      },
      {
        id: 3,
        text: "Metung, Adwa, Atlu, Apat, Lima, Anam, Pitu, Walu, Siyam, Apulu",
        example: "One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten",
        howToUse: "Atin kung metung a manuk ampo atlung ayup.",
        howToUseTranslation: "I have one chicken and three birds",
        expectedExpression: "neutral",
        expectedTone: "medium",
      },
    ],
  },

  {
    id: 4,
    lessonId: "kapampangan_4",
    title: "Simple Questions and Pronouns",
    subtitle: "Ask simple questions and talk about yourself.",
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Nanu",
        example: "What",
        howToUse: "Nanu ya ing lagyu mu?",
        howToUseTranslation: "What is your name?",
        expectedExpression: "neutral",
        expectedTone: "high",
      },
      {
        id: 2,
        text: "Nokarin",
        example: "Where",
        howToUse: "Nokarin ka munta?",
        howToUseTranslation: "Where are you going?",
        expectedExpression: "neutral",
        expectedTone: "high",
      },
      {
        id: 3,
        text: "Aku",
        example: "I / Me",
        howToUse: "Aku i Maria.",
        howToUseTranslation: "I am Maria.",
        expectedExpression: "happy",
        expectedTone: "medium",
      },
    ],
  },

  {
    id: 5,
    lessonId: "kapampangan_5",
    title: "Common Foods and Dining",
    subtitle: "Name common foods and ask for things at the table.",
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Nasi",
        example: "Rice (cooked)",
        howToUse: "Mengan ku nasi.",
        howToUseTranslation: "I ate rice.",
        expectedExpression: "happy",
        expectedTone: "medium",
      },
      {
        id: 2,
        text: "Asan",
        example: "Fish",
        howToUse: "Manyaman ya ing asan.",
        howToUseTranslation: "The fish is delicious.",
        expectedExpression: "happy",
        expectedTone: "medium",
      },
      {
        id: 3,
        text: "Danum",
        example: "Water",
        howToUse: "Pakisuyu pu ing danum.",
        howToUseTranslation: "May I have some water, please?",
        expectedExpression: "neutral",
        expectedTone: "medium",
      },
    ],
  },

  {
    id: 6,
    lessonId: "kapampangan_6",
    title: "Colors & Descriptions",
    subtitle: "Describe the colors and look of things around you.",
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Malutu", // TODO: check
        example: "Red",
        howToUse: "Malutu ya ing mansanas.", // TODO: check
        howToUseTranslation: "The apple is red.",
        expectedExpression: "happy",
        expectedTone: "medium",
      },
      {
        id: 2,
        text: "Asul",
        example: "Blue",
        howToUse: "Asul ya ing banua.",
        howToUseTranslation: "The sky is blue.",
        expectedExpression: "happy",
        expectedTone: "medium",
      },
      {
        id: 3,
        text: "Malagu",
        example: "Beautiful",
        howToUse: "Malagu ya ing sampaga.",
        howToUseTranslation: "The flower is beautiful.",
        expectedExpression: "happy",
        expectedTone: "medium",
      },
    ],
  },

  {
    id: 7,
    lessonId: "kapampangan_7",
    title: "Days of the Week & Time",
    subtitle: "Talk about the days of the week and the time.",
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Lunes",
        example: "Monday",
        howToUse: "Atin kung klasi king Lunes.",
        howToUseTranslation: "I have school on Monday.",
        expectedExpression: "neutral",
        expectedTone: "medium",
      },
      {
        id: 2,
        text: "Domingu",
        example: "Sunday",
        howToUse: "Misimba kami balang Domingu.",
        howToUseTranslation: "We go to church every Sunday.",
        expectedExpression: "happy",
        expectedTone: "medium",
      },
      {
        id: 3,
        text: "Oras",
        example: "Time / Hour",
        howToUse: "Nanung oras na?",
        howToUseTranslation: "What time is it?",
        expectedExpression: "neutral",
        expectedTone: "high",
      },
    ],
  },

  {
    id: 8,
    lessonId: "kapampangan_8",
    title: "Navigation & Directions",
    subtitle: "Tell someone which way to go.",
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Wanan",
        example: "Right",
        howToUse: "Mag-wanan ka king kanto.",
        howToUseTranslation: "Turn right at the corner.",
        expectedExpression: "neutral",
        expectedTone: "medium",
      },
      {
        id: 2,
        text: "Kayli",
        example: "Left",
        howToUse: "Atyu ya king kayli ing iskwela.",
        howToUseTranslation: "The school is on the left.",
        expectedExpression: "neutral",
        expectedTone: "medium",
      },
      {
        id: 3,
        text: "Diretsu",
        example: "Straight ahead",
        howToUse: "Diretsu mu pu.",
        howToUseTranslation: "Just go straight ahead.",
        expectedExpression: "neutral",
        expectedTone: "medium",
      },
    ],
  },

  {
    id: 9,
    lessonId: "kapampangan_9",
    title: "Shopping & Haggling",
    subtitle: "Ask prices and bargain at the market.",
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Magkanu",
        example: "How much",
        howToUse: "Magkanu ya ini pu?",
        howToUseTranslation: "How much is this?",
        expectedExpression: "neutral",
        expectedTone: "high",
      },
      {
        id: 2,
        text: "Mura",
        example: "Cheap",
        howToUse: "Mura la reng gule keni.",
        howToUseTranslation: "The vegetables here are cheap.",
        expectedExpression: "happy",
        expectedTone: "medium",
      },
      {
        id: 3,
        text: "Bawas",
        example: "Discount / Bargain",
        howToUse: "Atin yapa bawas pu?",
        howToUseTranslation: "May I ask for a discount?",
        expectedExpression: "neutral",
        expectedTone: "high",
      },
    ],
  },

  {
    id: 10,
    lessonId: "kapampangan_10",
    title: "Weather & Nature",
    subtitle: "Talk about the weather and the world outside.",
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Uran",
        example: "Rain",
        howToUse: "Makusog ya ing uran ngeni.",
        howToUseTranslation: "The rain is heavy today.",
        expectedExpression: "sad",
        expectedTone: "low",
      },
      {
        id: 2,
        text: "Aldo",
        example: "Sun / Day",
        howToUse: "Mapali ya ing aldo.",
        howToUseTranslation: "The sun is hot.",
        expectedExpression: "neutral",
        expectedTone: "medium",
      },
      {
        id: 3,
        text: "Dutung",
        example: "Tree",
        howToUse: "Matas ya ing dutung.",
        howToUseTranslation: "The tree is tall.",
        expectedExpression: "neutral",
        expectedTone: "medium",
      },
    ],
  },

  {
    id: 11,
    lessonId: "kapampangan_11",
    title: "Daily Verbs & Actions",
    subtitle: "Say what you do every day.",
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Matudtud",
        example: "To sleep",
        howToUse: "Matudtud ka na.",
        howToUseTranslation: "Go to sleep now.",
        expectedExpression: "neutral",
        expectedTone: "low",
      },
      {
        id: 2,
        text: "Maglaru", // TODO: check
        example: "To play",
        howToUse: "Maglaru tamu king lual.", // TODO: check
        howToUseTranslation: "Let's play outside.",
        expectedExpression: "happy",
        expectedTone: "high",
      },
      {
        id: 3,
        text: "Magbasa",
        example: "To read",
        howToUse: "Magbasa tamu libru.",
        howToUseTranslation: "Let's read a book.",
        expectedExpression: "happy",
        expectedTone: "medium",
      },
    ],
  },

  {
    id: 12,
    lessonId: "kapampangan_12",
    title: "Emotions & Feelings",
    subtitle: "Say how you feel, and show it on your face.",
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Masaya",
        example: "Happy",
        howToUse: "Masaya ku ngeni.",
        howToUseTranslation: "I am happy today.",
        expectedExpression: "happy",
        expectedTone: "medium",
      },
      {
        id: 2,
        text: "Malungkut",
        example: "Sad",
        howToUse: "Malungkut ya.",
        howToUseTranslation: "He / She is sad.",
        expectedExpression: "sad",
        expectedTone: "low",
      },
      {
        id: 3,
        text: "Muwa", // TODO: check
        example: "Angry",
        howToUse: "Muwa ya i Ima kanaku.", // TODO: check
        howToUseTranslation: "Mom is angry at me.",
        expectedExpression: "angry",
        expectedTone: "high",
      },
    ],
  },

  {
    id: 13,
    lessonId: "kapampangan_13",
    title: "Body Parts & Health",
    subtitle: "Name parts of the body and say what hurts.",
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Ulu",
        example: "Head",
        howToUse: "Masakit ya ing ulu ku.",
        howToUseTranslation: "My head hurts.",
        expectedExpression: "sad",
        expectedTone: "low",
      },
      {
        id: 2,
        text: "Gamat",
        example: "Hand",
        howToUse: "Manos naka gamat mu.",
        howToUseTranslation: "Wash your hands.",
        expectedExpression: "neutral",
        expectedTone: "medium",
      },
      {
        id: 3,
        text: "Mata",
        example: "Eye",
        howToUse: "Maragul ya ing mata ning pusa.",
        howToUseTranslation: "The cat's eyes are big.",
        expectedExpression: "neutral",
        expectedTone: "medium",
      },
    ],
  },

  {
    id: 14,
    lessonId: "kapampangan_14",
    title: "Home & Objects",
    subtitle: "Name the places and things at home.",
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Bale",
        example: "House",
        howToUse: "Maragul ya ing bale mi.",
        howToUseTranslation: "Our house is big.",
        expectedExpression: "happy",
        expectedTone: "medium",
      },
      {
        id: 2,
        text: "Pintu",
        example: "Door",
        howToUse: "Isara me ing pintu.",
        howToUseTranslation: "Close the door.",
        expectedExpression: "neutral",
        expectedTone: "medium",
      },
      {
        id: 3,
        text: "Silya",
        example: "Chair",
        howToUse: "Lukluk ka king silya.",
        howToUseTranslation: "Sit on the chair.",
        expectedExpression: "neutral",
        expectedTone: "medium",
      },
    ],
  },

  {
    id: 15,
    lessonId: "kapampangan_15",
    title: "Kapampangan Verb Tenses (Past, Present, Future)",
    subtitle: "See how one verb changes for past, present and future.",
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Mengan",
        example: "Ate (past)",
        howToUse: "Mengan ku adobo napun.",
        howToUseTranslation: "I ate adobo yesterday.",
        expectedExpression: "neutral",
        expectedTone: "medium",
      },
      {
        id: 2,
        text: "Mamangan",
        example: "Eating (present)",
        howToUse: "Mamangan ku ngeni.",
        howToUseTranslation: "I am eating now.",
        expectedExpression: "happy",
        expectedTone: "medium",
      },
      {
        id: 3,
        text: "Mangan", // TODO: check
        example: "Will eat (future)",
        howToUse: "Mangan ku mamaya.", // TODO: check
        howToUseTranslation: "I will eat later.",
        expectedExpression: "neutral",
        expectedTone: "medium",
      },
    ],
  },

  {
    id: 16,
    lessonId: "kapampangan_16",
    title: "Compound Words & Expressions",
    subtitle: "Learn words made by joining two words.",
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Bulalu", // TODO: check
        example: "Rainbow",
        howToUse: "Atin bulalu king banua.", // TODO: check
        howToUseTranslation: "There is a rainbow in the sky.",
        expectedExpression: "happy",
        expectedTone: "medium",
      },
      {
        id: 2,
        text: "Gatpanapun", // TODO: check
        example: "Dusk / Twilight",
        howToUse: "Mumuli kami balang gatpanapun.", // TODO: check
        howToUseTranslation: "We go home every dusk.",
        expectedExpression: "neutral",
        expectedTone: "low",
      },
      {
        id: 3,
        text: "Balikbayan",
        example: "A Filipino returning home from abroad",
        howToUse: "Balikbayan ya ing dara ku.",
        howToUseTranslation:
          "My aunt is a balikbayan (she came home from abroad).",
        expectedExpression: "happy",
        expectedTone: "medium",
      },
    ],
  },

  {
    id: 17,
    lessonId: "kapampangan_17",
    title: "Honorifics & Social Courtesy",
    subtitle: "Show respect to elders and strangers.",
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Pu",
        example: "Respect word (for elders and strangers)",
        howToUse: "Salamat pu.",
        howToUseTranslation: "Thank you (said respectfully).",
        expectedExpression: "happy",
        expectedTone: "medium",
      },
      {
        id: 2,
        text: "Wa pu",
        example: "Yes (respectful)",
        howToUse: "Wa pu, mengan na ku pu.",
        howToUseTranslation: "Yes, I have already eaten.",
        expectedExpression: "neutral",
        expectedTone: "medium",
      },
      {
        id: 3,
        text: "Mano pu",
        example: "Asking an elder for a blessing",
        howToUse: "Mano pu, Apu.",
        howToUseTranslation: "Your blessing, please, Grandma.",
        expectedExpression: "happy",
        expectedTone: "medium",
      },
    ],
  },

  {
    id: 18,
    lessonId: "kapampangan_18",
    title: "Idiomatic Kapampangan Expressions",
    subtitle: "Learn sayings that don't mean exactly what they say.",
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Bahala na", // TODO: check
        example: "Come what may",
        howToUse: "Bahala na nanu man ing malyari.", // TODO: check
        howToUseTranslation: "Come what may, whatever happens.",
        expectedExpression: "neutral",
        expectedTone: "low",
      },
      {
        id: 2,
        text: "Mababo ing lua", // TODO: check
        example: "Easily moved to tears",
        howToUse: "Mababo ya ing lua ning Atsi ku.", // TODO: check
        howToUseTranslation: "My older sister cries easily.",
        expectedExpression: "sad",
        expectedTone: "low",
      },
      {
        id: 3,
        text: "Mamilang poste", // TODO: check
        example: "Jobless (literally: counting lamp posts)",
        howToUse: "Mamilang ya pang poste.", // TODO: check
        howToUseTranslation: "He / She still doesn't have a job.",
        expectedExpression: "sad",
        expectedTone: "low",
      },
    ],
  },

  {
    id: 19,
    lessonId: "kapampangan_19",
    title: "Storytelling & Linking Words",
    subtitle: "Connect your ideas to tell a story.",
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Kanita pang minuna", // TODO: check
        example: "Once upon a time",
        howToUse: "Kanita pang minuna, atin metung a ari.", // TODO: check
        howToUseTranslation: "Once upon a time, there was a king.",
        expectedExpression: "happy",
        expectedTone: "medium",
      },
      {
        id: 2,
        text: "Kaybat",
        example: "After that / Then",
        howToUse: "Kaybat, mibalik la king bale.",
        howToUseTranslation: "After that, they went home.",
        expectedExpression: "neutral",
        expectedTone: "medium",
      },
      {
        id: 3,
        text: "Kaya",
        example: "So / Therefore",
        howToUse: "Muran, kaya e kami linual.",
        howToUseTranslation: "It rained, so we didn't go out.",
        expectedExpression: "neutral",
        expectedTone: "medium",
      },
    ],
  },

  {
    id: 20,
    lessonId: "kapampangan_20",
    title: "Kapampangan Mastery Boss",
    subtitle: "Put everything together in one final challenge.",
    requiredCorrect: 3,

    phrases: [
      {
        id: 1,
        text: "Masaya kung akilala daka", // TODO: check
        example: "Nice to meet you",
        howToUse: "Masaya kung akilala daka, Ana.", // TODO: check
        howToUseTranslation: "Nice to meet you, Ana.",
        expectedExpression: "happy",
        expectedTone: "medium",
      },
      {
        id: 2,
        text: "Mag-ingat ka",
        example: "Take care",
        howToUse: "Mag-ingat ka king biyahe mu.",
        howToUseTranslation: "Take care on your trip.",
        expectedExpression: "happy",
        expectedTone: "low",
      },
      {
        id: 3,
        text: "Kitan tamu pa",
        example: "Until next time",
        howToUse: "Mako na ku, kitan tamu pa!",
        howToUseTranslation: "Goodbye, until next time!",
        expectedExpression: "sad",
        expectedTone: "low",
      },
    ],
  },
];

export const warayPracticeLevels: PracticeLevel[] = [
  {
    id: 1,
    lessonId: "waray_1",
    title: "Basic Greetings and Self-Introduction",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },

  {
    id: 2,
    lessonId: "waray_2",
    title: "Common Expressions and Responses",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },

  {
    id: 3,
    lessonId: "waray_3",
    title: "Numbers and Counting",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },

  {
    id: 4,
    lessonId: "waray_4",
    title: "Days, Months, and Time",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },

  {
    id: 5,
    lessonId: "waray_5",
    title: "Family Members and Relationships",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },

  {
    id: 6,
    lessonId: "waray_6",
    title: "Food and Drinks",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },

  {
    id: 7,
    lessonId: "waray_7",
    title: "Colors and Shapes",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },

  {
    id: 8,
    lessonId: "waray_8",
    title: "Animals and Nature",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },

  {
    id: 9,
    lessonId: "waray_9",
    title: "Asking and Answering Simple Questions",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },

  {
    id: 10,
    lessonId: "waray_10",
    title: "Introducing Other People",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },

  {
    id: 11,
    lessonId: "waray_11",
    title: "Common Daily Conversations",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },

  {
    id: 12,
    lessonId: "waray_12",
    title: "Giving Directions and Locations",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },

  {
    id: 13,
    lessonId: "waray_13",
    title: "Asking for Information",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },

  {
    id: 14,
    lessonId: "waray_14",
    title: "Pronouns and Common Verbs",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },

  {
    id: 15,
    lessonId: "waray_15",
    title: "Basic Sentence Structure",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },

  {
    id: 16,
    lessonId: "waray_16",
    title: "Constructing More Complex Sentences",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },

  {
    id: 17,
    lessonId: "waray_17",
    title: "Ordering Food",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },

  {
    id: 18,
    lessonId: "waray_18",
    title: "Shopping and Buying",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },

  {
    id: 19,
    lessonId: "waray_19",
    title: "Talking About Daily Activities",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },

  {
    id: 20,
    lessonId: "waray_20",
    title: "Describing People, Places, and Things",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },
  {
    id: 21,
    lessonId: "waray_21",
    title: "Expressing Opinions and Feelings",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },
  {
    id: 22,
    lessonId: "waray_22",
    title: "Giving Explanations and Reasons",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },
  {
    id: 23,
    lessonId: "waray_23",
    title: "Agreeing and Disagreeing",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },
  {
    id: 24,
    lessonId: "waray_24",
    title: "Advanced Sentence Construction",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },
  {
    id: 25,
    lessonId: "waray_25",
    title: "Verb Forms and Tenses",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/, with no practice game.
    phrases: [],
  },
];

export const practiceLevels: PracticeLevel[] = [
  ...tagalogPracticeLevels,
  ...kapampanganPracticeLevels,
  ...warayPracticeLevels,
];
