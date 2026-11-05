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
    // Structured lesson: its content is in data/lessons/. These phrases only
    // give the speaking screen its target pitch and mood (inferred).
    phrases: [
      {
        id: 1,
        text: "An akon ngaran hi Ana.",
        meaning: "My name is Ana.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "An akon ngaran hi Ana.",
            meaning: "My name is Ana.",
          },
        ],
      },
      {
        id: 2,
        text: "Taga Pilipinas ako.",
        meaning: "I am from the Philippines.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Taga Pilipinas ako.",
            meaning: "I am from the Philippines.",
          },
        ],
      },
      {
        id: 3,
        text: "Ano an imo ngaran?",
        meaning: "What is your name?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Ano an imo ngaran?",
            meaning: "What is your name?",
          },
        ],
      },
      {
        id: 4,
        text: "Pira na an imo edad?",
        meaning: "How old are you?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Pira na an imo edad?",
            meaning: "How old are you?",
          },
        ],
      },
      {
        id: 5,
        text: "An akon ngaran hi Juan.",
        meaning: "My name is Juan.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "An akon ngaran hi Juan.",
            meaning: "My name is Juan.",
          },
        ],
      },
      {
        id: 6,
        text: "Oo, maupay man.",
        meaning: "Yes, I am fine.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Oo, maupay man.",
            meaning: "Yes, I am fine.",
          },
        ],
      },
      {
        id: 7,
        text: "Taga Tacloban ako.",
        meaning: "I am from Tacloban.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Taga Tacloban ako.",
            meaning: "I am from Tacloban.",
          },
        ],
      },
    ],
  },

  {
    id: 2,
    lessonId: "waray_2",
    title: "Common Expressions and Responses",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/. These phrases only
    // give the speaking screen its target pitch and mood (inferred).
    phrases: [
      {
        id: 1,
        text: "Oo, husto ito.",
        meaning: "Yes, that's right.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Oo, husto ito.",
            meaning: "Yes, that's right.",
          },
        ],
      },
      {
        id: 2,
        text: "Tinuod ito.",
        meaning: "That's true.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Tinuod ito.",
            meaning: "That's true.",
          },
        ],
      },
      {
        id: 3,
        text: "Oo, kaya ko.",
        meaning: "Yes, I can.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Oo, kaya ko.",
            meaning: "Yes, I can.",
          },
        ],
      },
      {
        id: 4,
        text: "Pwede mo ba ito utrohon?",
        meaning: "Can you repeat that?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Pwede mo ba ito utrohon?",
            meaning: "Can you repeat that?",
          },
        ],
      },
      {
        id: 5,
        text: "Pwede mo ba ito isaysay?",
        meaning: "Can you explain it?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Pwede mo ba ito isaysay?",
            meaning: "Can you explain it?",
          },
        ],
      },
      {
        id: 6,
        text: "Pwede mo ba ipakita ha akon?",
        meaning: "Can you show me?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Pwede mo ba ipakita ha akon?",
            meaning: "Can you show me?",
          },
        ],
      },
      {
        id: 7,
        text: "Diri pa.",
        meaning: "Not yet.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Diri pa.",
            meaning: "Not yet.",
          },
        ],
      },
    ],
  },

  {
    id: 3,
    lessonId: "waray_3",
    title: "Numbers and Counting",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/. These phrases only
    // give the speaking screen its target pitch and mood (inferred).
    phrases: [
      {
        id: 1,
        text: "Pira hira?",
        meaning: "How many are there?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Pira hira?",
            meaning: "How many are there?",
          },
        ],
      },
      {
        id: 2,
        text: "Pira kamo?",
        meaning: "How many are you?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Pira kamo?",
            meaning: "How many are you?",
          },
        ],
      },
      {
        id: 3,
        text: "Disiotso anyos ako.",
        meaning: "I am eighteen years old.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Disiotso anyos ako.",
            meaning: "I am eighteen years old.",
          },
        ],
      },
      {
        id: 4,
        text: "Usa nga libro",
        meaning: "One book",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Usa nga libro",
            meaning: "One book",
          },
        ],
      },
      {
        id: 5,
        text: "Upat nga tawo",
        meaning: "Four people",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Upat nga tawo",
            meaning: "Four people",
          },
        ],
      },
      {
        id: 6,
        text: "Napulo ka pesos.",
        meaning: "It costs ten pesos.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Napulo ka pesos.",
            meaning: "It costs ten pesos.",
          },
        ],
      },
      {
        id: 7,
        text: "May-ada ako usa ka gatos nga pesos.",
        meaning: "I have one hundred pesos.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "May-ada ako usa ka gatos nga pesos.",
            meaning: "I have one hundred pesos.",
          },
        ],
      },
    ],
  },

  {
    id: 4,
    lessonId: "waray_4",
    title: "Days, Months, and Time",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/. These phrases only
    // give the speaking screen its target pitch and mood (inferred).
    phrases: [
      {
        id: 1,
        text: "Ano nga adlaw yana?",
        meaning: "What day is it today?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Ano nga adlaw yana?",
            meaning: "What day is it today?",
          },
        ],
      },
      {
        id: 2,
        text: "Enero yana.",
        meaning: "It is January.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Enero yana.",
            meaning: "It is January.",
          },
        ],
      },
      {
        id: 3,
        text: "Kitaay kita buwas.",
        meaning: "See you tomorrow.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Kitaay kita buwas.",
            meaning: "See you tomorrow.",
          },
        ],
      },
      {
        id: 4,
        text: "Ano nga adlaw kita magkikita?",
        meaning: "What day will we meet?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Ano nga adlaw kita magkikita?",
            meaning: "What day will we meet?",
          },
        ],
      },
      {
        id: 5,
        text: "Magkikita kita ha Biyernes.",
        meaning: "We will meet on Friday.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Magkikita kita ha Biyernes.",
            meaning: "We will meet on Friday.",
          },
        ],
      },
      {
        id: 6,
        text: "Mayo an akon paborito nga bulan.",
        meaning: "May is my favorite month.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Mayo an akon paborito nga bulan.",
            meaning: "May is my favorite month.",
          },
        ],
      },
      {
        id: 7,
        text: "May klase kami kahapon.",
        meaning: "We had class yesterday.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "May klase kami kahapon.",
            meaning: "We had class yesterday.",
          },
        ],
      },
    ],
  },

  {
    id: 5,
    lessonId: "waray_5",
    title: "Family Members and Relationships",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/. These phrases only
    // give the speaking screen its target pitch and mood (inferred).
    phrases: [
      {
        id: 1,
        text: "Amo ini an akon pamilya.",
        meaning: "This is my family.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Amo ini an akon pamilya.",
            meaning: "This is my family.",
          },
        ],
      },
      {
        id: 2,
        text: "May usa ako nga bugto nga lalaki.",
        meaning: "I have one brother.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "May usa ako nga bugto nga lalaki.",
            meaning: "I have one brother.",
          },
        ],
      },
      {
        id: 3,
        text: "May bugto ka ba?",
        meaning: "Do you have brothers or sisters?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "May bugto ka ba?",
            meaning: "Do you have brothers or sisters?",
          },
        ],
      },
      {
        id: 4,
        text: "Hinigugma ko an akon pamilya.",
        meaning: "I love my family.",
        expectedExpression: "happy",
        expectedTone: "medium",
        words: [
          {
            word: "Hinigugma ko an akon pamilya.",
            meaning: "I love my family.",
          },
        ],
      },
      {
        id: 5,
        text: "May bugto ako nga lalaki.",
        meaning: "I have a brother.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "May bugto ako nga lalaki.",
            meaning: "I have a brother.",
          },
        ],
      },
      {
        id: 6,
        text: "Nag-uukoy kami ha Samar.",
        meaning: "We live in Samar.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Nag-uukoy kami ha Samar.",
            meaning: "We live in Samar.",
          },
        ],
      },
      {
        id: 7,
        text: "Iya bugto",
        meaning: "His/Her sibling",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Iya bugto",
            meaning: "His/Her sibling",
          },
        ],
      },
    ],
  },

  {
    id: 6,
    lessonId: "waray_6",
    title: "Food and Drinks",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/. These phrases only
    // give the speaking screen its target pitch and mood (inferred).
    phrases: [
      {
        id: 1,
        text: "Gutom ako.",
        meaning: "I am hungry.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Gutom ako.",
            meaning: "I am hungry.",
          },
        ],
      },
      {
        id: 2,
        text: "Karuyag ko uminom hin tubig.",
        meaning: "I want to drink water.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Karuyag ko uminom hin tubig.",
            meaning: "I want to drink water.",
          },
        ],
      },
      {
        id: 3,
        text: "Ano an karuyag mo kumaon?",
        meaning: "What do you want to eat?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Ano an karuyag mo kumaon?",
            meaning: "What do you want to eat?",
          },
        ],
      },
      {
        id: 4,
        text: "Diri ako naruruyag hin maanghang nga pagkaon.",
        meaning: "I do not like spicy food.",
        expectedExpression: "happy",
        expectedTone: "medium",
        words: [
          {
            word: "Diri ako naruruyag hin maanghang nga pagkaon.",
            meaning: "I do not like spicy food.",
          },
        ],
      },
      {
        id: 5,
        text: "May mangga kami.",
        meaning: "We have mangoes.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "May mangga kami.",
            meaning: "We have mangoes.",
          },
        ],
      },
      {
        id: 6,
        text: "Karuyag ko hin tubig.",
        meaning: "I want water.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Karuyag ko hin tubig.",
            meaning: "I want water.",
          },
        ],
      },
      {
        id: 7,
        text: "Lami an mangga.",
        meaning: "Mangoes are delicious.",
        expectedExpression: "happy",
        expectedTone: "medium",
        words: [
          {
            word: "Lami an mangga.",
            meaning: "Mangoes are delicious.",
          },
        ],
      },
    ],
  },

  {
    id: 7,
    lessonId: "waray_7",
    title: "Colors and Shapes",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/. These phrases only
    // give the speaking screen its target pitch and mood (inferred).
    phrases: [
      {
        id: 1,
        text: "Ano nga kolor ini?",
        meaning: "What color is this?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Ano nga kolor ini?",
            meaning: "What color is this?",
          },
        ],
      },
      {
        id: 2,
        text: "Berde an banwa.",
        meaning: "The grass is green.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Berde an banwa.",
            meaning: "The grass is green.",
          },
        ],
      },
      {
        id: 3,
        text: "Kuwadrado ini.",
        meaning: "This is a square.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Kuwadrado ini.",
            meaning: "This is a square.",
          },
        ],
      },
      {
        id: 4,
        text: "Puti an akon baro.",
        meaning: "My shirt is white.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Puti an akon baro.",
            meaning: "My shirt is white.",
          },
        ],
      },
      {
        id: 5,
        text: "Trayanggulo ini.",
        meaning: "This is a triangle.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Trayanggulo ini.",
            meaning: "This is a triangle.",
          },
        ],
      },
      {
        id: 6,
        text: "Puti an silya.",
        meaning: "The chair is white.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Puti an silya.",
            meaning: "The chair is white.",
          },
        ],
      },
      {
        id: 7,
        text: "Mga bola",
        meaning: "Balls",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Mga bola",
            meaning: "Balls",
          },
        ],
      },
    ],
  },

  {
    id: 8,
    lessonId: "waray_8",
    title: "Animals and Nature",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/. These phrases only
    // give the speaking screen its target pitch and mood (inferred).
    phrases: [
      {
        id: 1,
        text: "Ano ini nga hayop?",
        meaning: "What animal is this?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Ano ini nga hayop?",
            meaning: "What animal is this?",
          },
        ],
      },
      {
        id: 2,
        text: "Naglupad an tamsi.",
        meaning: "The bird is flying.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Naglupad an tamsi.",
            meaning: "The bird is flying.",
          },
        ],
      },
      {
        id: 3,
        text: "Naruruyag ako hin mga hayop.",
        meaning: "I like animals.",
        expectedExpression: "happy",
        expectedTone: "medium",
        words: [
          {
            word: "Naruruyag ako hin mga hayop.",
            meaning: "I like animals.",
          },
        ],
      },
      {
        id: 4,
        text: "Nasirang an adlaw.",
        meaning: "The sun is shining.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Nasirang an adlaw.",
            meaning: "The sun is shining.",
          },
        ],
      },
      {
        id: 5,
        text: "Nadalagan an aso.",
        meaning: "The dog is running.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Nadalagan an aso.",
            meaning: "The dog is running.",
          },
        ],
      },
      {
        id: 6,
        text: "May mga bulak ha hardin.",
        meaning: "There are flowers in the garden.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "May mga bulak ha hardin.",
            meaning: "There are flowers in the garden.",
          },
        ],
      },
      {
        id: 7,
        text: "Dako an bukid.",
        meaning: "The mountain is big.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Dako an bukid.",
            meaning: "The mountain is big.",
          },
        ],
      },
    ],
  },

  {
    id: 9,
    lessonId: "waray_9",
    title: "Asking and Answering Simple Questions",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/. These phrases only
    // give the speaking screen its target pitch and mood (inferred).
    phrases: [
      {
        id: 1,
        text: "Ano an imo ngaran?",
        meaning: "What is your name?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Ano an imo ngaran?",
            meaning: "What is your name?",
          },
        ],
      },
      {
        id: 2,
        text: "Kay ano nga aada ka dinhi?",
        meaning: "Why are you here?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Kay ano nga aada ka dinhi?",
            meaning: "Why are you here?",
          },
        ],
      },
      {
        id: 3,
        text: "Nasasabtan mo ba?",
        meaning: "Do you understand?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Nasasabtan mo ba?",
            meaning: "Do you understand?",
          },
        ],
      },
      {
        id: 4,
        text: "Ano ini?",
        meaning: "What is this?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Ano ini?",
            meaning: "What is this?",
          },
        ],
      },
      {
        id: 5,
        text: "Taga Samar ako.",
        meaning: "I am from Samar.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Taga Samar ako.",
            meaning: "I am from Samar.",
          },
        ],
      },
      {
        id: 6,
        text: "Yana an akon klase.",
        meaning: "My class is today.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Yana an akon klase.",
            meaning: "My class is today.",
          },
        ],
      },
      {
        id: 7,
        text: "Nasakay ako hin dyip.",
        meaning: "I ride a jeepney.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Nasakay ako hin dyip.",
            meaning: "I ride a jeepney.",
          },
        ],
      },
    ],
  },

  {
    id: 10,
    lessonId: "waray_10",
    title: "Introducing Other People",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/. These phrases only
    // give the speaking screen its target pitch and mood (inferred).
    phrases: [
      {
        id: 1,
        text: "Sangkay ko ini.",
        meaning: "This is my friend.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Sangkay ko ini.",
            meaning: "This is my friend.",
          },
        ],
      },
      {
        id: 2,
        text: "Bugto ko ini.",
        meaning: "This is my brother/sister. / This is my brother or sister.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Bugto ko ini.",
            meaning: "This is my brother/sister. / This is my brother or sister.",
          },
        ],
      },
      {
        id: 3,
        text: "Juan an iya ngaran.",
        meaning: "His name is Juan.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Juan an iya ngaran.",
            meaning: "His name is Juan.",
          },
        ],
      },
      {
        id: 4,
        text: "Maestra ko hiya.",
        meaning: "She is my teacher.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Maestra ko hiya.",
            meaning: "She is my teacher.",
          },
        ],
      },
      {
        id: 5,
        text: "Kilala mo ba hiya?",
        meaning: "Do you know him/her? / Do you know him or her?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Kilala mo ba hiya?",
            meaning: "Do you know him/her? / Do you know him or her?",
          },
        ],
      },
      {
        id: 6,
        text: "Nalilipay ako nga makilala ka.",
        meaning: "Nice to meet you.",
        expectedExpression: "happy",
        expectedTone: "medium",
        words: [
          {
            word: "Nalilipay ako nga makilala ka.",
            meaning: "Nice to meet you.",
          },
        ],
      },
      {
        id: 7,
        text: "Malipayon hiya.",
        meaning: "He or she is happy.",
        expectedExpression: "happy",
        expectedTone: "medium",
        words: [
          {
            word: "Malipayon hiya.",
            meaning: "He or she is happy.",
          },
        ],
      },
    ],
  },

  {
    id: 11,
    lessonId: "waray_11",
    title: "Common Daily Conversations",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/. These phrases only
    // give the speaking screen its target pitch and mood (inferred).
    phrases: [
      {
        id: 1,
        text: "Kumusta an imo adlaw?",
        meaning: "How was your day?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Kumusta an imo adlaw?",
            meaning: "How was your day?",
          },
        ],
      },
      {
        id: 2,
        text: "Nagluluto ako.",
        meaning: "I am cooking.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Nagluluto ako.",
            meaning: "I am cooking.",
          },
        ],
      },
      {
        id: 3,
        text: "Oo, kinaon na ako.",
        meaning: "Yes, I have already eaten.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Oo, kinaon na ako.",
            meaning: "Yes, I have already eaten.",
          },
        ],
      },
      {
        id: 4,
        text: "Salamat ha pag-imbitar ha akon.",
        meaning: "Thank you for inviting me.",
        expectedExpression: "happy",
        expectedTone: "medium",
        words: [
          {
            word: "Salamat ha pag-imbitar ha akon.",
            meaning: "Thank you for inviting me.",
          },
        ],
      },
      {
        id: 5,
        text: "Nakamata ako hin temprano.",
        meaning: "I woke up early.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Nakamata ako hin temprano.",
            meaning: "I woke up early.",
          },
        ],
      },
      {
        id: 6,
        text: "Nahuman mo na an imo buruhaton?",
        meaning: "Have you finished your task?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Nahuman mo na an imo buruhaton?",
            meaning: "Have you finished your task?",
          },
        ],
      },
      {
        id: 7,
        text: "Pasayloa ako, busy ako yana.",
        meaning: "Sorry, I am busy right now.",
        expectedExpression: "sad",
        expectedTone: "medium",
        words: [
          {
            word: "Pasayloa ako, busy ako yana.",
            meaning: "Sorry, I am busy right now.",
          },
        ],
      },
    ],
  },

  {
    id: 12,
    lessonId: "waray_12",
    title: "Giving Directions and Locations",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/. These phrases only
    // give the speaking screen its target pitch and mood (inferred).
    phrases: [
      {
        id: 1,
        text: "Hain an eskwelahan?",
        meaning: "Where is the school?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Hain an eskwelahan?",
            meaning: "Where is the school?",
          },
        ],
      },
      {
        id: 2,
        text: "Hirani ba ito?",
        meaning: "Is it near?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Hirani ba ito?",
            meaning: "Is it near?",
          },
        ],
      },
      {
        id: 3,
        text: "Aada ito ha sapit han singbahan.",
        meaning: "It is beside the church.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Aada ito ha sapit han singbahan.",
            meaning: "It is beside the church.",
          },
        ],
      },
      {
        id: 4,
        text: "Ginbibiling ko an ospital.",
        meaning: "I am looking for the hospital.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Ginbibiling ko an ospital.",
            meaning: "I am looking for the hospital.",
          },
        ],
      },
      {
        id: 5,
        text: "Aada an tindahan ha sapit han merkado.",
        meaning: "The store is beside the market.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Aada an tindahan ha sapit han merkado.",
            meaning: "The store is beside the market.",
          },
        ],
      },
      {
        id: 6,
        text: "Kadto ha atubangan han eskwelahan.",
        meaning: "Go to the front of the school.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Kadto ha atubangan han eskwelahan.",
            meaning: "Go to the front of the school.",
          },
        ],
      },
      {
        id: 7,
        text: "Diri ito hirayo tikang dinhi.",
        meaning: "It is not far from here.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Diri ito hirayo tikang dinhi.",
            meaning: "It is not far from here.",
          },
        ],
      },
    ],
  },

  {
    id: 13,
    lessonId: "waray_13",
    title: "Asking for Information",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/. These phrases only
    // give the speaking screen its target pitch and mood (inferred).
    phrases: [
      {
        id: 1,
        text: "May pakiana ako.",
        meaning: "I have a question.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "May pakiana ako.",
            meaning: "I have a question.",
          },
        ],
      },
      {
        id: 2,
        text: "Ano an kahulogan hini?",
        meaning: "What does this mean?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Ano an kahulogan hini?",
            meaning: "What does this mean?",
          },
        ],
      },
      {
        id: 3,
        text: "Alayon, hinay-hinay la an pagyakan.",
        meaning: "Please speak slowly.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Alayon, hinay-hinay la an pagyakan.",
            meaning: "Please speak slowly.",
          },
        ],
      },
      {
        id: 4,
        text: "Diin ako makakakuha hin dugang nga impormasyon?",
        meaning: "Where can I get more information?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Diin ako makakakuha hin dugang nga impormasyon?",
            meaning: "Where can I get more information?",
          },
        ],
      },
      {
        id: 5,
        text: "Ano ini?",
        meaning: "What is this?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Ano ini?",
            meaning: "What is this?",
          },
        ],
      },
      {
        id: 6,
        text: "Pira an bayad?",
        meaning: "How much is the payment?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Pira an bayad?",
            meaning: "How much is the payment?",
          },
        ],
      },
      {
        id: 7,
        text: "Ano an karuyag mo sidngon?",
        meaning: "What do you mean?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Ano an karuyag mo sidngon?",
            meaning: "What do you mean?",
          },
        ],
      },
    ],
  },

  {
    id: 14,
    lessonId: "waray_14",
    title: "Pronouns and Common Verbs",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/. These phrases only
    // give the speaking screen its target pitch and mood (inferred).
    phrases: [
      {
        id: 1,
        text: "Nagbabasa ka.",
        meaning: "You are reading.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Nagbabasa ka.",
            meaning: "You are reading.",
          },
        ],
      },
      {
        id: 2,
        text: "Nagsusurat hiya.",
        meaning: "He/She is writing.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Nagsusurat hiya.",
            meaning: "He/She is writing.",
          },
        ],
      },
      {
        id: 3,
        text: "Nagtatrabaho kamo.",
        meaning: "You are working.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Nagtatrabaho kamo.",
            meaning: "You are working.",
          },
        ],
      },
      {
        id: 4,
        text: "Nag-uuyag hira.",
        meaning: "They are playing.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Nag-uuyag hira.",
            meaning: "They are playing.",
          },
        ],
      },
      {
        id: 5,
        text: "Diri hiya nagluluto.",
        meaning: "He/She is not cooking.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Diri hiya nagluluto.",
            meaning: "He/She is not cooking.",
          },
        ],
      },
      {
        id: 6,
        text: "Diri kami nag-uuyag.",
        meaning: "We are not playing.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Diri kami nag-uuyag.",
            meaning: "We are not playing.",
          },
        ],
      },
      {
        id: 7,
        text: "Karuyag ko magbasa.",
        meaning: "I want to read.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Karuyag ko magbasa.",
            meaning: "I want to read.",
          },
        ],
      },
    ],
  },

  {
    id: 15,
    lessonId: "waray_15",
    title: "Basic Sentence Structure",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/. These phrases only
    // give the speaking screen its target pitch and mood (inferred).
    phrases: [
      {
        id: 1,
        text: "Nagbabasa ako ngan nagsusurat.",
        meaning: "I am reading and writing.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Nagbabasa ako ngan nagsusurat.",
            meaning: "I am reading and writing.",
          },
        ],
      },
      {
        id: 2,
        text: "Makadto kami buwas.",
        meaning: "We will go tomorrow.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Makadto kami buwas.",
            meaning: "We will go tomorrow.",
          },
        ],
      },
      {
        id: 3,
        text: "Malipayon ako.",
        meaning: "I am happy.",
        expectedExpression: "happy",
        expectedTone: "medium",
        words: [
          {
            word: "Malipayon ako.",
            meaning: "I am happy.",
          },
        ],
      },
      {
        id: 4,
        text: "Maestra hiya.",
        meaning: "He/She is a teacher.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Maestra hiya.",
            meaning: "He/She is a teacher.",
          },
        ],
      },
      {
        id: 5,
        text: "Nagkadto kami ha merkado kahapon.",
        meaning: "We went to the market yesterday.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Nagkadto kami ha merkado kahapon.",
            meaning: "We went to the market yesterday.",
          },
        ],
      },
      {
        id: 6,
        text: "Diri hira nag-uuyag.",
        meaning: "They are not playing.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Diri hira nag-uuyag.",
            meaning: "They are not playing.",
          },
        ],
      },
      {
        id: 7,
        text: "Karuyag mo ba kumaon?",
        meaning: "Do you want to eat?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Karuyag mo ba kumaon?",
            meaning: "Do you want to eat?",
          },
        ],
      },
    ],
  },

  {
    id: 16,
    lessonId: "waray_16",
    title: "Constructing More Complex Sentences",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/. These phrases only
    // give the speaking screen its target pitch and mood (inferred).
    phrases: [
      {
        id: 1,
        text: "Nagbabasa ako ngan nagsusurat.",
        meaning: "I am reading and writing.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Nagbabasa ako ngan nagsusurat.",
            meaning: "I am reading and writing.",
          },
        ],
      },
      {
        id: 2,
        text: "Kapoy ako, pero magtatrabaho ako gihapon.",
        meaning: "I am tired, but I will still work.",
        expectedExpression: "sad",
        expectedTone: "medium",
        words: [
          {
            word: "Kapoy ako, pero magtatrabaho ako gihapon.",
            meaning: "I am tired, but I will still work.",
          },
        ],
      },
      {
        id: 3,
        text: "Kay ano nga nag-aadal ka?",
        meaning: "Why are you studying?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Kay ano nga nag-aadal ka?",
            meaning: "Why are you studying?",
          },
        ],
      },
      {
        id: 4,
        text: "Gutiay an balay, pero komportable.",
        meaning: "The house is small, but it is comfortable.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Gutiay an balay, pero komportable.",
            meaning: "The house is small, but it is comfortable.",
          },
        ],
      },
      {
        id: 5,
        text: "Nag-aadal ako, pero kapoy ako.",
        meaning: "I am studying, but I am tired.",
        expectedExpression: "sad",
        expectedTone: "medium",
        words: [
          {
            word: "Nag-aadal ako, pero kapoy ako.",
            meaning: "I am studying, but I am tired.",
          },
        ],
      },
      {
        id: 6,
        text: "Bisan kon uran, makadto ako.",
        meaning: "Even if it rains, I will go.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Bisan kon uran, makadto ako.",
            meaning: "Even if it rains, I will go.",
          },
        ],
      },
      {
        id: 7,
        text: "Nagkadto kami ha merkado kakulop.",
        meaning: "We went to the market yesterday afternoon.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Nagkadto kami ha merkado kakulop.",
            meaning: "We went to the market yesterday afternoon.",
          },
        ],
      },
    ],
  },

  {
    id: 17,
    lessonId: "waray_17",
    title: "Ordering Food",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/. These phrases only
    // give the speaking screen its target pitch and mood (inferred).
    phrases: [
      {
        id: 1,
        text: "Ano an iyo pagkaon?",
        meaning: "What food do you have?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Ano an iyo pagkaon?",
            meaning: "What food do you have?",
          },
        ],
      },
      {
        id: 2,
        text: "Ano an iyo mairerekomendar?",
        meaning: "What do you recommend?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Ano an iyo mairerekomendar?",
            meaning: "What do you recommend?",
          },
        ],
      },
      {
        id: 3,
        text: "Duha nga serving, alayon.",
        meaning: "Two servings, please.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Duha nga serving, alayon.",
            meaning: "Two servings, please.",
          },
        ],
      },
      {
        id: 4,
        text: "Dugangi pa an kan-on, alayon.",
        meaning: "More rice, please.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Dugangi pa an kan-on, alayon.",
            meaning: "More rice, please.",
          },
        ],
      },
      {
        id: 5,
        text: "Pira an usa nga serving?",
        meaning: "How much is one serving?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Pira an usa nga serving?",
            meaning: "How much is one serving?",
          },
        ],
      },
      {
        id: 6,
        text: "May iba pa ba nga pagkaon?",
        meaning: "Is there any other food?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "May iba pa ba nga pagkaon?",
            meaning: "Is there any other food?",
          },
        ],
      },
      {
        id: 7,
        text: "Matugnaw an pagkaon.",
        meaning: "The food is cold.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Matugnaw an pagkaon.",
            meaning: "The food is cold.",
          },
        ],
      },
    ],
  },

  {
    id: 18,
    lessonId: "waray_18",
    title: "Shopping and Buying",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/. These phrases only
    // give the speaking screen its target pitch and mood (inferred).
    phrases: [
      {
        id: 1,
        text: "Pira ini?",
        meaning: "How much is this?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Pira ini?",
            meaning: "How much is this?",
          },
        ],
      },
      {
        id: 2,
        text: "May iba pa kamo?",
        meaning: "Do you have another one?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "May iba pa kamo?",
            meaning: "Do you have another one?",
          },
        ],
      },
      {
        id: 3,
        text: "Barato ini.",
        meaning: "This is inexpensive.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Barato ini.",
            meaning: "This is inexpensive.",
          },
        ],
      },
      {
        id: 4,
        text: "Ini an akon bayad.",
        meaning: "Here is the payment. / This is my payment.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Ini an akon bayad.",
            meaning: "Here is the payment. / This is my payment.",
          },
        ],
      },
      {
        id: 5,
        text: "Pira an presyo hini nga sapatos?",
        meaning: "How much are these shoes?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Pira an presyo hini nga sapatos?",
            meaning: "How much are these shoes?",
          },
        ],
      },
      {
        id: 6,
        text: "Karuyag ko hin pula.",
        meaning: "I want a red one.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Karuyag ko hin pula.",
            meaning: "I want a red one.",
          },
        ],
      },
      {
        id: 7,
        text: "Bag-o ini.",
        meaning: "This is new.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Bag-o ini.",
            meaning: "This is new.",
          },
        ],
      },
    ],
  },

  {
    id: 19,
    lessonId: "waray_19",
    title: "Talking About Daily Activities",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/. These phrases only
    // give the speaking screen its target pitch and mood (inferred).
    phrases: [
      {
        id: 1,
        text: "Ano an imo ginbubuhat kada adlaw?",
        meaning: "What do you do every day?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Ano an imo ginbubuhat kada adlaw?",
            meaning: "What do you do every day?",
          },
        ],
      },
      {
        id: 2,
        text: "Nagbabasa ako hin libro.",
        meaning: "I read a book.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Nagbabasa ako hin libro.",
            meaning: "I read a book.",
          },
        ],
      },
      {
        id: 3,
        text: "Napahuway ako ha kulop.",
        meaning: "I rest in the afternoon.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Napahuway ako ha kulop.",
            meaning: "I rest in the afternoon.",
          },
        ],
      },
      {
        id: 4,
        text: "Nag-aadal ako.",
        meaning: "I am studying.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Nag-aadal ako.",
            meaning: "I am studying.",
          },
        ],
      },
      {
        id: 5,
        text: "Nag-aadal ako ha aga.",
        meaning: "I study in the morning.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Nag-aadal ako ha aga.",
            meaning: "I study in the morning.",
          },
        ],
      },
      {
        id: 6,
        text: "Ha gab-i",
        meaning: "In the evening",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Ha gab-i",
            meaning: "In the evening",
          },
        ],
      },
      {
        id: 7,
        text: "Diri gud ako nag-aabyan.",
        meaning: "I never skip.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Diri gud ako nag-aabyan.",
            meaning: "I never skip.",
          },
        ],
      },
    ],
  },

  {
    id: 20,
    lessonId: "waray_20",
    title: "Describing People, Places, and Things",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/. These phrases only
    // give the speaking screen its target pitch and mood (inferred).
    phrases: [
      {
        id: 1,
        text: "Buotan hiya.",
        meaning: "He is kind. / He/She is kind.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Buotan hiya.",
            meaning: "He is kind. / He/She is kind.",
          },
        ],
      },
      {
        id: 2,
        text: "Matawo an merkado.",
        meaning: "The market is crowded.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Matawo an merkado.",
            meaning: "The market is crowded.",
          },
        ],
      },
      {
        id: 3,
        text: "Magkaiba hira.",
        meaning: "They are different.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Magkaiba hira.",
            meaning: "They are different.",
          },
        ],
      },
      {
        id: 4,
        text: "Maisog hiya.",
        meaning: "He/She is brave.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Maisog hiya.",
            meaning: "He/She is brave.",
          },
        ],
      },
      {
        id: 5,
        text: "Hirayo an merkado.",
        meaning: "The market is far.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Hirayo an merkado.",
            meaning: "The market is far.",
          },
        ],
      },
      {
        id: 6,
        text: "Magaan ini nga kahon.",
        meaning: "This box is light.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Magaan ini nga kahon.",
            meaning: "This box is light.",
          },
        ],
      },
      {
        id: 7,
        text: "Pariho an ira kolor.",
        meaning: "Their colors are the same.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Pariho an ira kolor.",
            meaning: "Their colors are the same.",
          },
        ],
      },
    ],
  },
  {
    id: 21,
    lessonId: "waray_21",
    title: "Expressing Opinions and Feelings",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/. These phrases only
    // give the speaking screen its target pitch and mood (inferred).
    phrases: [
      {
        id: 1,
        text: "Para ha akon, maupay ini.",
        meaning: "In my opinion, this is good.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Para ha akon, maupay ini.",
            meaning: "In my opinion, this is good.",
          },
        ],
      },
      {
        id: 2,
        text: "Diri ko karuyag ini nga ideya.",
        meaning: "I do not like this idea.",
        expectedExpression: "happy",
        expectedTone: "medium",
        words: [
          {
            word: "Diri ko karuyag ini nga ideya.",
            meaning: "I do not like this idea.",
          },
        ],
      },
      {
        id: 3,
        text: "Eksitado ako.",
        meaning: "I am excited.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Eksitado ako.",
            meaning: "I am excited.",
          },
        ],
      },
      {
        id: 4,
        text: "Diri ako nauyon.",
        meaning: "I disagree.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Diri ako nauyon.",
            meaning: "I disagree.",
          },
        ],
      },
      {
        id: 5,
        text: "Magkaiba an aton mga opinyon.",
        meaning: "We have different opinions.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Magkaiba an aton mga opinyon.",
            meaning: "We have different opinions.",
          },
        ],
      },
      {
        id: 6,
        text: "Amo ito an akon rason.",
        meaning: "That is my reason.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Amo ito an akon rason.",
            meaning: "That is my reason.",
          },
        ],
      },
      {
        id: 7,
        text: "Nabababaraka ako ha akon eksam.",
        meaning: "I am worried about my examination.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Nabababaraka ako ha akon eksam.",
            meaning: "I am worried about my examination.",
          },
        ],
      },
    ],
  },
  {
    id: 22,
    lessonId: "waray_22",
    title: "Giving Explanations and Reasons",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/. These phrases only
    // give the speaking screen its target pitch and mood (inferred).
    phrases: [
      {
        id: 1,
        text: "Nagpabilin ako ha balay kay masakit ako.",
        meaning: "I stayed at home because I was sick.",
        expectedExpression: "sad",
        expectedTone: "medium",
        words: [
          {
            word: "Nagpabilin ako ha balay kay masakit ako.",
            meaning: "I stayed at home because I was sick.",
          },
        ],
      },
      {
        id: 2,
        text: "Diri ako makakadto kay sagipo ako.",
        meaning: "I cannot go because I am busy.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Diri ako makakadto kay sagipo ako.",
            meaning: "I cannot go because I am busy.",
          },
        ],
      },
      {
        id: 3,
        text: "Pananglitan, mahimo kita magbasa hin mga libro.",
        meaning: "For example, we can read books.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Pananglitan, mahimo kita magbasa hin mga libro.",
            meaning: "For example, we can read books.",
          },
        ],
      },
      {
        id: 4,
        text: "Nasasabtan ko an imo pagsaysay.",
        meaning: "I understand your explanation.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Nasasabtan ko an imo pagsaysay.",
            meaning: "I understand your explanation.",
          },
        ],
      },
      {
        id: 5,
        text: "Alayon, igsaysay utro.",
        meaning: "Please explain it again.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Alayon, igsaysay utro.",
            meaning: "Please explain it again.",
          },
        ],
      },
      {
        id: 6,
        text: "Tugoti ako nga magsaysay.",
        meaning: "Let me explain.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Tugoti ako nga magsaysay.",
            meaning: "Let me explain.",
          },
        ],
      },
      {
        id: 7,
        text: "Diri ako nakadto kay urhi na ako.",
        meaning: "I did not go because I was already late.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Diri ako nakadto kay urhi na ako.",
            meaning: "I did not go because I was already late.",
          },
        ],
      },
    ],
  },
  {
    id: 23,
    lessonId: "waray_23",
    title: "Agreeing and Disagreeing",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/. These phrases only
    // give the speaking screen its target pitch and mood (inferred).
    phrases: [
      {
        id: 1,
        text: "Nauyon ako ha imo opinyon.",
        meaning: "I agree with your opinion.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Nauyon ako ha imo opinyon.",
            meaning: "I agree with your opinion.",
          },
        ],
      },
      {
        id: 2,
        text: "Tinuod ito.",
        meaning: "That is true.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Tinuod ito.",
            meaning: "That is true.",
          },
        ],
      },
      {
        id: 3,
        text: "Pariho an akon panhunahuna.",
        meaning: "I have the same opinion.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Pariho an akon panhunahuna.",
            meaning: "I have the same opinion.",
          },
        ],
      },
      {
        id: 4,
        text: "Diri ako nauyon hito nga ideya.",
        meaning: "I do not agree with that idea.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Diri ako nauyon hito nga ideya.",
            meaning: "I do not agree with that idea.",
          },
        ],
      },
      {
        id: 5,
        text: "Bangin diri ito pirme tinuod.",
        meaning: "That may not always be true.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Bangin diri ito pirme tinuod.",
            meaning: "That may not always be true.",
          },
        ],
      },
      {
        id: 6,
        text: "Nauyon ako hito nga ideya.",
        meaning: "I agree with that idea.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Nauyon ako hito nga ideya.",
            meaning: "I agree with that idea.",
          },
        ],
      },
      {
        id: 7,
        text: "Diri ako nauyon hito.",
        meaning: "I do not agree with that.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Diri ako nauyon hito.",
            meaning: "I do not agree with that.",
          },
        ],
      },
    ],
  },
  {
    id: 24,
    lessonId: "waray_24",
    title: "Advanced Sentence Construction",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/. These phrases only
    // give the speaking screen its target pitch and mood (inferred).
    phrases: [
      {
        id: 1,
        text: "Kapoy hiya, pero nagpapadayon hiya ha pagtrabaho.",
        meaning: "He is tired, but he continues working.",
        expectedExpression: "sad",
        expectedTone: "medium",
        words: [
          {
            word: "Kapoy hiya, pero nagpapadayon hiya ha pagtrabaho.",
            meaning: "He is tired, but he continues working.",
          },
        ],
      },
      {
        id: 2,
        text: "Dako ngan matahom an eskwelahan.",
        meaning: "The school is large and beautiful.",
        expectedExpression: "happy",
        expectedTone: "medium",
        words: [
          {
            word: "Dako ngan matahom an eskwelahan.",
            meaning: "The school is large and beautiful.",
          },
        ],
      },
      {
        id: 3,
        text: "Makapainteres an libro nga akon ginpalit kahapon.",
        meaning: "The book that I bought yesterday is interesting.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Makapainteres an libro nga akon ginpalit kahapon.",
            meaning: "The book that I bought yesterday is interesting.",
          },
        ],
      },
      {
        id: 4,
        text: "Kon mag-uran, magpapabilin kita ha balay.",
        meaning: "If it rains, we will stay at home.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Kon mag-uran, magpapabilin kita ha balay.",
            meaning: "If it rains, we will stay at home.",
          },
        ],
      },
      {
        id: 5,
        text: "Kon magbubuligay kita, matatapos naton an proyekto.",
        meaning: "If we work together, we can finish the project.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Kon magbubuligay kita, matatapos naton an proyekto.",
            meaning: "If we work together, we can finish the project.",
          },
        ],
      },
      {
        id: 6,
        text: "Matahom an lugar ngan mahimyang liwat ito.",
        meaning: "The place is beautiful, and it is also peaceful.",
        expectedExpression: "happy",
        expectedTone: "medium",
        words: [
          {
            word: "Matahom an lugar ngan mahimyang liwat ito.",
            meaning: "The place is beautiful, and it is also peaceful.",
          },
        ],
      },
      {
        id: 7,
        text: "Kon mag-uran, diri kami makakadto.",
        meaning: "If it rains, we cannot go.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Kon mag-uran, diri kami makakadto.",
            meaning: "If it rains, we cannot go.",
          },
        ],
      },
    ],
  },
  {
    id: 25,
    lessonId: "waray_25",
    title: "Verb Forms and Tenses",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/. These phrases only
    // give the speaking screen its target pitch and mood (inferred).
    phrases: [
      {
        id: 1,
        text: "Nagbasa ako hin libro kahapon.",
        meaning: "I read a book yesterday.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Nagbasa ako hin libro kahapon.",
            meaning: "I read a book yesterday.",
          },
        ],
      },
      {
        id: 2,
        text: "Nagbabasa ako hin libro.",
        meaning: "I am reading a book.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Nagbabasa ako hin libro.",
            meaning: "I am reading a book.",
          },
        ],
      },
      {
        id: 3,
        text: "Magbabasa ako buwas.",
        meaning: "I will read tomorrow.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Magbabasa ako buwas.",
            meaning: "I will read tomorrow.",
          },
        ],
      },
      {
        id: 4,
        text: "Ano an imo ginbuhat kahapon?",
        meaning: "What did you do yesterday?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Ano an imo ginbuhat kahapon?",
            meaning: "What did you do yesterday?",
          },
        ],
      },
      {
        id: 5,
        text: "Nagbasa ako kahapon.",
        meaning: "I read yesterday.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Nagbasa ako kahapon.",
            meaning: "I read yesterday.",
          },
        ],
      },
      {
        id: 6,
        text: "Nagluluto hi Nanay.",
        meaning: "Mother is cooking.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Nagluluto hi Nanay.",
            meaning: "Mother is cooking.",
          },
        ],
      },
      {
        id: 7,
        text: "Nagtrabaho hiya han naglabay nga semana.",
        meaning: "He/She worked last week.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Nagtrabaho hiya han naglabay nga semana.",
            meaning: "He/She worked last week.",
          },
        ],
      },
    ],
  },
  {
    id: 26,
    lessonId: "waray_26",
    title: "Idiomatic Expressions and Common Sayings",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/. These phrases only
    // give the speaking screen its target pitch and mood (inferred).
    phrases: [
      {
        id: 1,
        text: "Maupay an buot niya.",
        meaning: "He/She is kind-hearted.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Maupay an buot niya.",
            meaning: "He/She is kind-hearted.",
          },
        ],
      },
      {
        id: 2,
        text: "Marig-on an iya buot.",
        meaning: "He/She is strong-willed.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Marig-on an iya buot.",
            meaning: "He/She is strong-willed.",
          },
        ],
      },
      {
        id: 3,
        text: "Maluya an iya buot.",
        meaning: "He/She feels discouraged.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Maluya an iya buot.",
            meaning: "He/She feels discouraged.",
          },
        ],
      },
      {
        id: 4,
        text: "Mapailubon hiya.",
        meaning: "He/She is patient.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Mapailubon hiya.",
            meaning: "He/She is patient.",
          },
        ],
      },
      {
        id: 5,
        text: "Diri hiya basta-basta nawawad-an hin paglaom.",
        meaning: "He/She does not easily lose hope.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Diri hiya basta-basta nawawad-an hin paglaom.",
            meaning: "He/She does not easily lose hope.",
          },
        ],
      },
      {
        id: 6,
        text: "Damo an iya naeksperyensyahan.",
        meaning: "He/She has experienced many things.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Damo an iya naeksperyensyahan.",
            meaning: "He/She has experienced many things.",
          },
        ],
      },
      {
        id: 7,
        text: "May rason hiya ha iya ginhimo.",
        meaning: "He/She has a reason for what was done.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "May rason hiya ha iya ginhimo.",
            meaning: "He/She has a reason for what was done.",
          },
        ],
      },
    ],
  },
  {
    id: 27,
    lessonId: "waray_27",
    title: "Workplace and School Conversations",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/. These phrases only
    // give the speaking screen its target pitch and mood (inferred).
    phrases: [
      {
        id: 1,
        text: "Pwede mo ba ako buligan?",
        meaning: "Can you help me?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Pwede mo ba ako buligan?",
            meaning: "Can you help me?",
          },
        ],
      },
      {
        id: 2,
        text: "Alayon, hinay-hinay la pagyakan.",
        meaning: "Please speak slowly.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Alayon, hinay-hinay la pagyakan.",
            meaning: "Please speak slowly.",
          },
        ],
      },
      {
        id: 3,
        text: "Ipasa ko ito buwas.",
        meaning: "I will submit it tomorrow.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Ipasa ko ito buwas.",
            meaning: "I will submit it tomorrow.",
          },
        ],
      },
      {
        id: 4,
        text: "San-o magtitikang an mitin?",
        meaning: "When will the meeting start?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "San-o magtitikang an mitin?",
            meaning: "When will the meeting start?",
          },
        ],
      },
      {
        id: 5,
        text: "Alayon, hulat anay hin madaliay.",
        meaning: "Please wait for a moment.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Alayon, hulat anay hin madaliay.",
            meaning: "Please wait for a moment.",
          },
        ],
      },
      {
        id: 6,
        text: "Ano an akon buruhaton yana?",
        meaning: "What is my task today?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Ano an akon buruhaton yana?",
            meaning: "What is my task today?",
          },
        ],
      },
      {
        id: 7,
        text: "Natapos ko na an akon buruhaton.",
        meaning: "I have finished my task.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Natapos ko na an akon buruhaton.",
            meaning: "I have finished my task.",
          },
        ],
      },
    ],
  },
  {
    id: 28,
    lessonId: "waray_28",
    title: "Storytelling and Narration",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/. These phrases only
    // give the speaking screen its target pitch and mood (inferred).
    phrases: [
      {
        id: 1,
        text: "Karuyag ko magsumat ha imo hin istorya.",
        meaning: "I want to tell you a story.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Karuyag ko magsumat ha imo hin istorya.",
            meaning: "I want to tell you a story.",
          },
        ],
      },
      {
        id: 2,
        text: "Nahitabo ini ha akon hadto.",
        meaning: "This happened to me before.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Nahitabo ini ha akon hadto.",
            meaning: "This happened to me before.",
          },
        ],
      },
      {
        id: 3,
        text: "Amo ito an paagi han pagkahitabo hito.",
        meaning: "That was how it happened.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Amo ito an paagi han pagkahitabo hito.",
            meaning: "That was how it happened.",
          },
        ],
      },
      {
        id: 4,
        text: "Nalipay gud ako.",
        meaning: "I was very happy.",
        expectedExpression: "happy",
        expectedTone: "medium",
        words: [
          {
            word: "Nalipay gud ako.",
            meaning: "I was very happy.",
          },
        ],
      },
      {
        id: 5,
        text: "Waray ko laoman nga mahitatabo ito.",
        meaning: "I did not expect that to happen.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Waray ko laoman nga mahitatabo ito.",
            meaning: "I did not expect that to happen.",
          },
        ],
      },
      {
        id: 6,
        text: "Diri ko ito hingangalimtan nga eksperyensya.",
        meaning: "It was a memorable experience.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Diri ko ito hingangalimtan nga eksperyensya.",
            meaning: "It was a memorable experience.",
          },
        ],
      },
      {
        id: 7,
        text: "Makuri adto nga adlaw.",
        meaning: "It was a difficult day.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Makuri adto nga adlaw.",
            meaning: "It was a difficult day.",
          },
        ],
      },
    ],
  },
  {
    id: 29,
    lessonId: "waray_29",
    title: "Situational Dialogues and Role-Playing",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/. These phrases only
    // give the speaking screen its target pitch and mood (inferred).
    phrases: [
      {
        id: 1,
        text: "Hain an terminal?",
        meaning: "Where is the terminal?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Hain an terminal?",
            meaning: "Where is the terminal?",
          },
        ],
      },
      {
        id: 2,
        text: "Alayon, sumati ako kon makaabot na kita.",
        meaning: "Please tell me when we arrive.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Alayon, sumati ako kon makaabot na kita.",
            meaning: "Please tell me when we arrive.",
          },
        ],
      },
      {
        id: 3,
        text: "May aksidente nga nahitabo.",
        meaning: "There has been an accident.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "May aksidente nga nahitabo.",
            meaning: "There has been an accident.",
          },
        ],
      },
      {
        id: 4,
        text: "Nawara ako.",
        meaning: "I am lost.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Nawara ako.",
            meaning: "I am lost.",
          },
        ],
      },
      {
        id: 5,
        text: "Kay ano nga aanhi ka?",
        meaning: "What brings you here?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Kay ano nga aanhi ka?",
            meaning: "What brings you here?",
          },
        ],
      },
      {
        id: 6,
        text: "Sulod la, alayon.",
        meaning: "Please come in.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Sulod la, alayon.",
            meaning: "Please come in.",
          },
        ],
      },
      {
        id: 7,
        text: "Kinahanglan namon hin mga boluntaryo.",
        meaning: "We need volunteers.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Kinahanglan namon hin mga boluntaryo.",
            meaning: "We need volunteers.",
          },
        ],
      },
    ],
  },
  {
    id: 30,
    lessonId: "waray_30",
    title: "Comprehensive Language Assessment",
    requiredCorrect: 0,
    // Structured lesson: its content is in data/lessons/. These phrases only
    // give the speaking screen its target pitch and mood (inferred).
    phrases: [
      {
        id: 1,
        text: "Kumusta ka?",
        meaning: "How are you?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Kumusta ka?",
            meaning: "How are you?",
          },
        ],
      },
      {
        id: 2,
        text: "Diri ako maaram.",
        meaning: "I do not know.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Diri ako maaram.",
            meaning: "I do not know.",
          },
        ],
      },
      {
        id: 3,
        text: "Hain an eskwelahan?",
        meaning: "Where is the school?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Hain an eskwelahan?",
            meaning: "Where is the school?",
          },
        ],
      },
      {
        id: 4,
        text: "Nauyon ako.",
        meaning: "I agree.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Nauyon ako.",
            meaning: "I agree.",
          },
        ],
      },
      {
        id: 5,
        text: "Ayaw kawad-i hin paglaom.",
        meaning: "Do not lose hope.",
        expectedExpression: "neutral",
        expectedTone: "medium",
        words: [
          {
            word: "Ayaw kawad-i hin paglaom.",
            meaning: "Do not lose hope.",
          },
        ],
      },
      {
        id: 6,
        text: "Nalilipay ako nga makilala ka.",
        meaning: "I am happy to meet you.",
        expectedExpression: "happy",
        expectedTone: "medium",
        words: [
          {
            word: "Nalilipay ako nga makilala ka.",
            meaning: "I am happy to meet you.",
          },
        ],
      },
      {
        id: 7,
        text: "Pira an plete?",
        meaning: "How much is the fare?",
        expectedExpression: "neutral",
        expectedTone: "high",
        words: [
          {
            word: "Pira an plete?",
            meaning: "How much is the fare?",
          },
        ],
      },
    ],
  },
];

export const practiceLevels: PracticeLevel[] = [
  ...tagalogPracticeLevels,
  ...kapampanganPracticeLevels,
  ...warayPracticeLevels,
];
