// =========================================================
// BIGKAS TAGALOG PRE-TEST CONTENT
// English prompts/words are stored in `word`; Tagalog answers in `correctMeaning`.
// Each level generates 9 vocabulary questions plus 1 facial-expression question.
// =========================================================
import type { ExpectedPracticeExpression } from "../types/practice";

export type PretestMultipleChoiceQuestion = {
  id: number;
  type: "multiple_choice";
  word: string;
  correctMeaning: string;
  options: string[];
  // A question about the story, not a word's meaning.
  comprehension?: boolean;
};

export type PretestCardQuestion = {
  id: number;
  type: "card_match";
  word: string;
  correctMeaning: string;
  options: string[];
};

export type PretestSpeakQuestion = {
  id: number;
  type: "speak";
  word: string;
  // No mic (denied or unavailable): offer Skip, and the word still counts.
  micOptional?: boolean;
};

export type PretestExpressionQuestion = {
  id: number;
  type: "expression";
  prompt: string;
  expectedExpression?: ExpectedPracticeExpression;
  // Counts once attempted or skipped, whatever the camera detects.
  countsAsCompleted?: boolean;
};

export type PretestFillBlankQuestion = {
  id: number;
  type: "fill_blank";
  meaning: string;
  correctWord: string;
  // When set, any of these is right (see utils/storyPractice.ts).
  acceptedAnswers?: string[];
};

export type PretestQuestion =
  | PretestMultipleChoiceQuestion
  | PretestCardQuestion
  | PretestSpeakQuestion
  | PretestFillBlankQuestion
  | PretestExpressionQuestion;

export type Dialect = "tagalog" | "kapampangan" | "waray";

export type WordEntry = {
  word: string;
  correctMeaning: string;
  distractors?: [string, string, string];
};

export type ExpressionEntry = {
  prompt: string;
  expectedExpression: ExpectedPracticeExpression;
};

export type LevelContent = {
  words: [
    WordEntry,
    WordEntry,
    WordEntry,
    WordEntry,
    WordEntry,
    WordEntry,
    WordEntry,
    WordEntry,
    WordEntry,
  ];
  expression: ExpressionEntry;
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickDistractors(
  correctMeaning: string,
  pool: string[],
  count: number,
): string[] {
  return shuffle([
    ...new Set(pool.filter((meaning) => meaning !== correctMeaning)),
  ]).slice(0, count);
}

export function buildPretest(
  content: LevelContent,
  distractorPool: string[],
): PretestQuestion[] {
  const questions: PretestQuestion[] = [];

  content.words.forEach((entry, idx) => {
    const id = idx + 1;

    if (idx === 4) {
      questions.push({
        id,
        type: "speak",
        word: entry.correctMeaning,
      });
      return;
    }

    if (idx === 6 || idx === 8) {
      questions.push({
        id,
        type: "fill_blank",
        meaning: entry.word,
        correctWord: entry.correctMeaning,
      });
      return;
    }

    const distractors =
      entry.distractors ??
      pickDistractors(entry.correctMeaning, distractorPool, 3);

    questions.push({
      id,
      type: "multiple_choice",
      word: entry.word,
      correctMeaning: entry.correctMeaning,
      options: shuffle([entry.correctMeaning, ...distractors]),
    });
  });

  questions.push({
    id: 10,
    type: "expression",
    prompt: content.expression.prompt,
    expectedExpression: content.expression.expectedExpression,
  });

  return questions;
}

// Tagalog answers used as multiple-choice distractors.
const tagalogDistractors = [
  "Pangit",
  "Gabi",
  "Pagod",
  "Hapon",
  "Kahapon",
  "Paalam",
  "Salamat",
  "Pakiusap",
  "Pasensya na",
  "Tayo",
  "Sila",
  "Siya",
  "Galit",
  "Maliit",
  "Mabagal",
  "Gutom",
  "Malamig",
  "Bukas",
  "Araw",
  "Bahay",
  "Kaibigan",
  "Tubig",
  "Pagkain",
  "Masaya",
  "Malungkot",
  "Takot",
  "Pula",
  "Sampu",
];

const tagalogLevels: Record<number, LevelContent> = {
  1: {
    words: [
      { word: "Good morning", correctMeaning: "Magandang umaga" },
      { word: "Thank you", correctMeaning: "Salamat" },
      { word: "How are you?", correctMeaning: "Kumusta ka?" },
      { word: "Yes", correctMeaning: "Oo" },
      { word: "Good day", correctMeaning: "Magandang araw po" },
      { word: "Politeness marker", correctMeaning: "Po" },
      { word: "I am fine", correctMeaning: "Mabuti po ako" },
      { word: "Goodbye", correctMeaning: "Paalam" },
      { word: "Good afternoon", correctMeaning: "Magandang hapon" },
    ],
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },

  2: {
    words: [
      { word: "Mother", correctMeaning: "Nanay" },
      { word: "Father", correctMeaning: "Tatay" },
      { word: "Sibling", correctMeaning: "Kapatid" },
      { word: "Friend", correctMeaning: "Kaibigan" },
      { word: "I love my family", correctMeaning: "Mahal ko ang pamilya ko" },
      { word: "Older brother", correctMeaning: "Kuya" },
      { word: "Older sister", correctMeaning: "Ate" },
      { word: "Youngest child", correctMeaning: "Bunso" },
      { word: "My child", correctMeaning: "Anak" },
    ],
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },

  3: {
    words: [
      { word: "One", correctMeaning: "Isa" },
      { word: "Two", correctMeaning: "Dalawa" },
      { word: "Three", correctMeaning: "Tatlo" },
      { word: "Four", correctMeaning: "Apat" },
      {
        word: "Five, six, seven, eight",
        correctMeaning: "Lima, anim, pito, walo",
      },
      { word: "Nine", correctMeaning: "Siyam" },
      {
        word: "I have two hands",
        correctMeaning: "Dalawa ang aking mga kamay",
      },
      { word: "Ten", correctMeaning: "Sampu" },
      {
        word: "There are five people here",
        correctMeaning: "May limang tao dito",
      },
    ],
    expression: {
      prompt: "Show a surprised expression",
      expectedExpression: "shocked",
    },
  },

  4: {
    words: [
      { word: "What", correctMeaning: "Ano" },
      { word: "Who", correctMeaning: "Sino" },
      { word: "Where", correctMeaning: "Saan" },
      { word: "When", correctMeaning: "Kailan" },
      { word: "Who is with you?", correctMeaning: "Sino ang kasama mo?" },
      { word: "Why", correctMeaning: "Bakit" },
      { word: "What is your name?", correctMeaning: "Ano ang pangalan mo?" },
      { word: "Where are you going?", correctMeaning: "Saan ka pupunta?" },
      { word: "When did you arrive?", correctMeaning: "Kailan ka dumating?" },
    ],
    expression: {
      prompt: "Show a puzzled or confused expression",
      expectedExpression: "confused",
    },
  },

  5: {
    words: [
      { word: "Cooked rice", correctMeaning: "Kanin" },
      { word: "Water", correctMeaning: "Tubig" },
      { word: "Main dish", correctMeaning: "Ulam" },
      { word: "Table", correctMeaning: "Mesa" },
      { word: "Let's eat now", correctMeaning: "Kain na tayo" },
      { word: "Delicious", correctMeaning: "Masarap" },
      { word: "I want water", correctMeaning: "Gusto ko ng tubig" },
      { word: "I am hungry", correctMeaning: "Nagugutom ako" },
      { word: "I am full", correctMeaning: "Busog na ako" },
    ],
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },

  6: {
    words: [
      { word: "Red", correctMeaning: "Pula" },
      { word: "Blue", correctMeaning: "Asul" },
      { word: "White", correctMeaning: "Puti" },
      { word: "Black", correctMeaning: "Itim" },
      { word: "The color is beautiful", correctMeaning: "Maganda ang kulay" },
      { word: "Yellow", correctMeaning: "Dilaw" },
      { word: "The grass is green", correctMeaning: "Luntian ang damo" },
      { word: "Big", correctMeaning: "Malaki" },
      { word: "The house is small", correctMeaning: "Maliit ang bahay" },
    ],
    expression: {
      prompt: "Show a surprised expression",
      expectedExpression: "shocked",
    },
  },

  7: {
    words: [
      { word: "Monday", correctMeaning: "Lunes" },
      { word: "Today", correctMeaning: "Ngayon" },
      { word: "Tomorrow", correctMeaning: "Bukas" },
      { word: "Yesterday", correctMeaning: "Kahapon" },
      { word: "What time is it?", correctMeaning: "Anong oras na?" },
      { word: "Night", correctMeaning: "Gabi" },
      { word: "My class is tomorrow", correctMeaning: "Bukas ang pasok ko" },
      { word: "Sunday / week", correctMeaning: "Linggo" },
      { word: "Good night", correctMeaning: "Magandang gabi" },
    ],
    expression: {
      prompt: "Show a sad or worried expression",
      expectedExpression: "sad",
    },
  },

  8: {
    words: [
      { word: "Left", correctMeaning: "Kaliwa" },
      { word: "Right", correctMeaning: "Kanan" },
      { word: "Straight ahead", correctMeaning: "Diretso" },
      { word: "Beside", correctMeaning: "Tabi" },
      {
        word: "Where is the loading station?",
        correctMeaning: "Saan ang sakayan?",
      },
      { word: "Far", correctMeaning: "Malayo" },
      { word: "Turn right", correctMeaning: "Liko sa kanan" },
      { word: "It's nearby / almost there", correctMeaning: "Malapit na" },
      { word: "Stop on the side", correctMeaning: "Para sa tabi" },
    ],
    expression: {
      prompt: "Show a puzzled or confused expression",
      expectedExpression: "confused",
    },
  },

  9: {
    words: [
      { word: "Buy", correctMeaning: "Bili" },
      { word: "Sell", correctMeaning: "Tinda" },
      { word: "Price", correctMeaning: "Presyo" },
      { word: "Change (money)", correctMeaning: "Sukli" },
      { word: "How much is this?", correctMeaning: "Magkano po ito?" },
      { word: "Discount", correctMeaning: "Bawas" },
      { word: "Too expensive", correctMeaning: "Masyadong mahal" },
      { word: "Cheap", correctMeaning: "Mura" },
      { word: "Where is my change?", correctMeaning: "Nasaan ang sukli ko?" },
    ],
    expression: {
      prompt: "Show a puzzled or confused expression",
      expectedExpression: "confused",
    },
  },

  10: {
    words: [
      { word: "Rain", correctMeaning: "Ulan" },
      { word: "Sun", correctMeaning: "Araw" },
      { word: "Wind", correctMeaning: "Hangin" },
      { word: "Ground", correctMeaning: "Lupa" },
      {
        word: "The weather is hot today",
        correctMeaning: "Mainit ang panahon ngayon",
      },
      { word: "Cold", correctMeaning: "Malamig" },
      { word: "The rain is heavy", correctMeaning: "Malakas ang ulan" },
      { word: "Typhoon", correctMeaning: "Bagyo" },
      { word: "The sky is bright", correctMeaning: "Maliwanag ang langit" },
    ],
    expression: {
      prompt: "Show a sad or worried expression",
      expectedExpression: "sad",
    },
  },

  11: {
    words: [
      { word: "Walk", correctMeaning: "Lakad" },
      { word: "Run", correctMeaning: "Takbo" },
      { word: "Eat", correctMeaning: "Kain" },
      { word: "Drink", correctMeaning: "Inom" },
      { word: "I want to sleep", correctMeaning: "Gusto kong matulog" },
      { word: "Cooking", correctMeaning: "Nagluluto" },
      { word: "I am reading a book", correctMeaning: "Nagbabasa ako ng libro" },
      { word: "Writing", correctMeaning: "Nagsusulat" },
      { word: "Did you bathe already?", correctMeaning: "Naligo ka na ba?" },
    ],
    expression: {
      prompt: "Show a calm, focused expression",
      expectedExpression: "neutral",
    },
  },

  12: {
    words: [
      { word: "Happy", correctMeaning: "Masaya" },
      { word: "Sad", correctMeaning: "Malungkot" },
      { word: "Angry", correctMeaning: "Galit" },
      { word: "Scared", correctMeaning: "Takot" },
      {
        word: "I am happy to be with you",
        correctMeaning: "Masaya ako na kasama ka",
      },
      { word: "Surprised", correctMeaning: "Nagugulat" },
      { word: "Do not be sad", correctMeaning: "Huwag kang malungkot" },
      { word: "Annoyed", correctMeaning: "Inis" },
      {
        word: "I am afraid of the dark",
        correctMeaning: "Natatakot ako sa dilim",
      },
    ],
    expression: {
      prompt: "Show a sad or worried expression",
      expectedExpression: "sad",
    },
  },

  13: {
    words: [
      { word: "Head", correctMeaning: "Ulo" },
      { word: "Hand", correctMeaning: "Kamay" },
      { word: "Foot", correctMeaning: "Paa" },
      { word: "Eye", correctMeaning: "Mata" },
      { word: "My stomach hurts", correctMeaning: "Masakit ang tiyan ko" },
      { word: "Nose", correctMeaning: "Ilong" },
      { word: "I have a headache", correctMeaning: "Masakit ang ulo ko" },
      { word: "Fever", correctMeaning: "Lagnat" },
      { word: "Drink medicine", correctMeaning: "Uminom ka ng gamot" },
    ],
    expression: {
      prompt: "Show a sad or worried expression",
      expectedExpression: "sad",
    },
  },

  14: {
    words: [
      { word: "House", correctMeaning: "Bahay" },
      { word: "Door", correctMeaning: "Pinto" },
      { word: "Window", correctMeaning: "Bintana" },
      { word: "Bed", correctMeaning: "Kama" },
      { word: "Close the door", correctMeaning: "Isara mo ang pinto" },
      { word: "Chair", correctMeaning: "Silya" },
      { word: "Open the window", correctMeaning: "Buksan mo ang bintana" },
      { word: "Kitchen", correctMeaning: "Kusina" },
      { word: "I am in the bedroom", correctMeaning: "Nasa silid ako" },
    ],
    expression: {
      prompt: "Show a calm, focused expression",
      expectedExpression: "neutral",
    },
  },

  15: {
    words: [
      { word: "Ate (completed)", correctMeaning: "Kumain" },
      { word: "Eating (ongoing)", correctMeaning: "Kumakain" },
      { word: "Will eat", correctMeaning: "Kakain" },
      { word: "Root word: eat", correctMeaning: "Kain" },
      { word: "I will eat later", correctMeaning: "Kakain ako mamaya" },
      { word: "Wrote (past)", correctMeaning: "Nagsulat" },
      { word: "I ran yesterday", correctMeaning: "Tumakbo ako kahapon" },
      { word: "Will walk", correctMeaning: "Maglalakad" },
      {
        word: "He/she is reading now",
        correctMeaning: "Nagbabasa siya ngayon",
      },
    ],
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },

  16: {
    words: [
      { word: "Worker / laborer", correctMeaning: "Anak-pawis" },
      { word: "Rainbow", correctMeaning: "Bahag-hari" },
      { word: "Sensitive person", correctMeaning: "Balat-sibuyas" },
      { word: "Stomachache", correctMeaning: "Sakit-tiyan" },
      {
        word: "I will look at the rainbow",
        correctMeaning: "Titingnan ko ang bahag-hari",
      },
      { word: "Dawn / sunrise", correctMeaning: "Bukang-liwayway" },
      { word: "Midnight", correctMeaning: "Hatinggabi" },
      { word: "Unity / cooperation", correctMeaning: "Kapit-bisig" },
      { word: "Daytime", correctMeaning: "Araw" },
    ],
    expression: {
      prompt: "Show a surprised expression",
      expectedExpression: "shocked",
    },
  },

  17: {
    words: [
      { word: "Respectful yes", correctMeaning: "Opo" },
      { word: "Respectful no", correctMeaning: "Hindi po" },
      { word: "Request politely", correctMeaning: "Makisuyo" },
      { word: "Apology / excuse me", correctMeaning: "Paumanhin" },
      { word: "Please forgive me", correctMeaning: "Ipagpaumanhin niyo po" },
      { word: "A polite call when entering a house", correctMeaning: "Tao po" },
      {
        word: "Thank you for the help",
        correctMeaning: "Salamat po sa tulong",
      },
      { word: "Excuse me / may I pass", correctMeaning: "Makikidaan po" },
      { word: "Just a moment please", correctMeaning: "Sandali lang po" },
    ],
    expression: {
      prompt: "Show a sad or worried expression",
      expectedExpression: "sad",
    },
  },

  18: {
    words: [
      { word: "Starting strong then quitting", correctMeaning: "Ningas-kugon" },
      { word: "Barely surviving", correctMeaning: "Isang tuka, isang tuka" },
      { word: "Evil-hearted", correctMeaning: "Maitim ang dugo" },
      {
        word: "Flattering / smooth-talking",
        correctMeaning: "Matamis ang dila",
      },
      {
        word: "Do not quit easily",
        correctMeaning: "Huwag maging ningas-kugon",
      },
      { word: "Easily hits / generous", correctMeaning: "Magaan ang kamay" },
      { word: "Prone to stealing", correctMeaning: "Malikot ang kamay" },
      { word: "Shameless", correctMeaning: "Makapal ang mukha" },
      { word: "Cowardly", correctMeaning: "Mahina ang loob" },
    ],
    expression: {
      prompt: "Show an angry expression",
      expectedExpression: "angry",
    },
  },

  19: {
    words: [
      { word: "Because", correctMeaning: "Kasi / Dahil" },
      { word: "Therefore / so", correctMeaning: "Kaya" },
      { word: "But / however", correctMeaning: "Ngunit / Subalit" },
      { word: "While", correctMeaning: "Habang" },
      {
        word: "I want to go, but it is raining",
        correctMeaning: "Gusto ko pumunta, subalit umuulan",
      },
      { word: "If", correctMeaning: "Kung" },
      {
        word: "I ate because I was hungry",
        correctMeaning: "Kumain ako dahil nagugutom ako",
      },
      { word: "In addition to", correctMeaning: "Bukod dito" },
      {
        word: "After eating, I washed dishes",
        correctMeaning: "Pagkatapos kumain, naghugas ako ng plato",
      },
    ],
    expression: {
      prompt: "Show a calm, focused expression",
      expectedExpression: "neutral",
    },
  },

  20: {
    words: [
      { word: "Communal unity and cooperation", correctMeaning: "Bayanihan" },
      { word: "Traditional serenade", correctMeaning: "Harana" },
      { word: "Justice", correctMeaning: "Katarungan" },
      { word: "Freedom / independence", correctMeaning: "Kalayaan" },
      {
        word: "Love your native language quote",
        correctMeaning:
          "Ang hindi magmahal sa sariling wika ay higit sa hayop at malansang isda",
      },
      { word: "Jose Rizal", correctMeaning: "Jose Rizal" },
      {
        word: "Long live the Filipino language",
        correctMeaning: "Mabuhay ang wikang Filipino",
      },
      {
        word: "Austronesian alignment / focus system",
        correctMeaning: "Sistema ng pokus",
      },
      {
        word: "One nation, one spirit",
        correctMeaning: "Isang bansa, isang diwa",
      },
    ],
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },
};

const kapampanganLevels: Record<number, LevelContent> = {
  1: {
    words: [
      {
        word: "Good morning everyone",
        correctMeaning: "Mayap a abak pu",
      },
      {
        word: "Goodmorning uncle nardo",
        correctMeaning: "Mayap a abak pu bapang nardo",
      },
      {
        word: "Thank you so much mom",
        correctMeaning: "Dakal pu salamat ma",
      },
      {
        word: "Thank you so much Tita",
        correctMeaning: "Dakal pu salamat Dara",
      },
      {
        word: "Dakal pu salamat",
        correctMeaning: "Dakal po salamat",
      },
      {
        word: "Goodafternoon",
        correctMeaning: "Mayap a gatpanapun",
      },
      {
        word: "Goodmorning everyone",
        correctMeaning: "Mayap a abak pu kekayu ngan",
      },
      {
        word: "Goodevening",
        correctMeaning: "Mayap a bengi",
      },
      {
        word: "Goodafternoon",
        correctMeaning: "Mayap a gatpanapun",
      },
    ],
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },
  2: {
    words: [
      //1
      {
        word: "Mother",
        correctMeaning: "Ima",
      },
      {
        //2
        word: "Father",
        correctMeaning: "Tatang",
      },
      {
        //3
        word: "Siblings",
        correctMeaning: "Kapatad",
      },
      {
        //4
        word: "She was my mother",
        correctMeaning: "Oyni ing ima ku pala",
      },
      {
        //5
        word: "Pamilya",
        correctMeaning: "Pamilya",
      },
      {
        //6
        word: "He was my father",
        correctMeaning: "I tatang ku pala",
      },
      {
        //7
        word: "Siblings",
        correctMeaning: "Siblings",
      },
      {
        //8
        word: "my mother is beutiful",
        correctMeaning: "kalagu nang mama ko",
      },
      {
        //9
        word: "Where is my 'Daddy",
        correctMeaning: "Father",
      },
    ],
    expression: {
      prompt: "Happy",
      expectedExpression: "happy",
    },
  },
  3: {
    words: [
      {
        word: "i have one pencil and how many is it",
        correctMeaning: "Metung",
      },
      {
        word: "I have one baby",
        correctMeaning: "metung yamu ing anak ku",
      },
      {
        word: "i have two pieces of book",
        correctMeaning: "ating kung adwang libru",
      },
      {
        word: "i have two fried chicken ",
        correctMeaning: "atin kung adwang piritung manuk",
      },
      {
        word: "numbers",
        correctMeaning: "numero",
      },
      {
        word: "i have 3 chicken",
        correctMeaning: "atin kung atlung manuk",
      },
      {
        word: "What is the kapampangan of Ten",
        correctMeaning: "Apulu",
      },
      {
        word: "1 2 3 4 5 6 7 8 9 10",
        correctMeaning:
          "Metung, Adwa, Atlu, Apat, Lima, Anam, Pitu, Walu, Siyam, Apulu",
      },
      {
        word: "Number",
        correctMeaning: "Numeru",
      },
    ],
    expression: {
      prompt: "happy",
      expectedExpression: "happy",
    },
  },
  4: {
    words: [
      // Cards 1–4: Flashcards
      {
        word: "What is your name?",
        correctMeaning: "Nanu ya ing lagyu mu’",
      },
      {
        word: "What is the Kapampangan word for 'what'?",
        correctMeaning: "Nanu",
      },
      {
        word: "Who is your companion?",
        correctMeaning: "Ninu ya ing kayabe mu",
      },
      {
        word: "Where are you going?",
        correctMeaning: "Nokarin ka munta",
      },

      // Card 5: Speaking
      {
        word: "Say in Kapampangan: What is your name?",
        correctMeaning: "Nanu ya ing lagyu mu’",
      },

      // Card 6: Multiple choice
      {
        word: "Which Kapampangan word means 'what'?",
        correctMeaning: "Nanu",
      },

      // Card 7: Fill in the blank
      {
        word: "_____ ya ing lagyu mu’",
        correctMeaning: "Nanu",
      },

      // Card 8: Multiple choice
      {
        word: "Which word asks 'Where are you going?'",
        correctMeaning: "Nokarin",
      },

      // Card 9: Fill in the blank
      {
        word: "_____ ka munta",
        correctMeaning: "Nokarin",
      },
    ],

    // Card 10: Facial Expression Recognition (FER)
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },
  5: {
    words: [
      // Cards 1–4: Flashcards
      { word: "Eat", correctMeaning: "Mangan" },
      { word: "Please get the water", correctMeaning: "Pakisuyo ing danum." },
      { word: "Delicious", correctMeaning: "Manyaman" },
      {
        word: "The food is delicious",
        correctMeaning: "Manyaman ya ing Pamangan",
      },

      // Card 5: Speaking
      {
        word: "Say in Kapampangan: The food is delicious",
        correctMeaning: "Manyaman ya ing Pamangan",
      },

      // Card 6: Multiple choice
      {
        word: "What is the Kapampangan word for 'delicious'?",
        correctMeaning: "Manyaman",
      },

      // Card 7: Fill in the blank
      { word: "_____ ya ing Pamangan", correctMeaning: "Manyaman" },

      // Card 8: Multiple choice
      {
        word: "Which phrase asks politely for water?",
        correctMeaning: "Pakisuyo ing danum.",
      },

      // Card 9: Fill in the blank
      { word: "Pakisuyo ing _____", correctMeaning: "danum" },
    ],
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },

  6: {
    words: [
      { word: "Red", correctMeaning: "Malutu" },
      { word: "Blue", correctMeaning: "Asul" },
      { word: "White", correctMeaning: "Maputi" },
      { word: "My bag is red", correctMeaning: "Malutu ya ing bag ku" },
      {
        word: "Say in Kapampangan: My bag is red",
        correctMeaning: "Malutu ya ing bag ku",
      },
      {
        word: "What is the Kapampangan word for blue?",
        correctMeaning: "Asul",
      },
      { word: "_____ yan ing banua", correctMeaning: "Asul" },
      { word: "Which word means white?", correctMeaning: "Maputi" },
      { word: "Maputi yan ing _____ ku", correctMeaning: "malan" },
    ],
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },

  7: {
    words: [
      { word: "Monday", correctMeaning: "Lunes" },
      { word: "Tomorrow", correctMeaning: "Bukas" },
      { word: "When?", correctMeaning: "Kapilan" },
      { word: "Today is Monday", correctMeaning: "Today is Monday." },
      {
        word: "Say in Kapampangan: Tomorrow we will meet",
        correctMeaning: "Bukas tanamu mikit",
      },
      {
        word: "What is the Kapampangan word for Monday?",
        correctMeaning: "Lunes",
      },
      { word: "_____ tanamu mikit", correctMeaning: "Bukas" },
      { word: "Which word asks 'When?'", correctMeaning: "Kapilan" },
      { word: "_____ mu buri mikit", correctMeaning: "Kapilan" },
    ],
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },

  8: {
    words: [
      {
        word: "Where is the church?",
        correctMeaning: "Nokarin ya ing pisamban",
      },
      { word: "Right", correctMeaning: "Wanan" },
      { word: "Go straight", correctMeaning: "Diretsu" },
      {
        word: "Turn right to see the school",
        correctMeaning: "Mag wanan ka para akit me ing iskwela",
      },
      {
        word: "Say in Kapampangan: Go straight to see the school",
        correctMeaning: "Diretsu nakamu pu para akit me ing iskwela.",
      },
      { word: "Which word means right?", correctMeaning: "Wanan" },
      { word: "Nokarin ya ing _____", correctMeaning: "pisamban" },
      { word: "Which word means go straight?", correctMeaning: "Diretsu" },
      {
        word: "Mag _____ ka para akit me ing iskwela",
        correctMeaning: "wanan",
      },
    ],
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },

  9: {
    words: [
      { word: "How much is this?", correctMeaning: "Magkanu ya ini" },
      {
        word: "Please give me my change",
        correctMeaning: "Pakibye naman ing sukli ku",
      },
      { word: "Discount", correctMeaning: "Bawas" },
      { word: "Is there any discount?", correctMeaning: "Atin yapa bawas" },
      {
        word: "Say in Kapampangan: Please give me my change",
        correctMeaning: "Pakibye naman ing sukli ku",
      },
      { word: "Which word means discount?", correctMeaning: "Bawas" },
      { word: "Pakibye naman ing _____ ku", correctMeaning: "sukli" },
      {
        word: "What phrase asks how much something costs?",
        correctMeaning: "Magkanu ya ini",
      },
      { word: "Atin yapa _____", correctMeaning: "bawas" },
    ],
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },

  10: {
    words: [
      { word: "Rain / to rain", correctMeaning: "Mamuran" },
      { word: "Hot", correctMeaning: "Mapali" },
      { word: "Windy", correctMeaning: "Mayangin" },
      { word: "It is raining now", correctMeaning: "Mumuran ngeni" },
      {
        word: "Say in Kapampangan: It is hot today",
        correctMeaning: "Mapali ya ing aldo ngeni",
      },
      { word: "Which word means windy?", correctMeaning: "Mayangin" },
      { word: "_____ ya ing aldo ngeni", correctMeaning: "Mapali" },
      { word: "Which word relates to rain?", correctMeaning: "Mamuran" },
      { word: "Mayangin ya ing _____ ngeni", correctMeaning: "bagyu" },
    ],
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },

  11: {
    words: [
      { word: "I walk", correctMeaning: "Maglakad ku" },
      { word: "Let's eat", correctMeaning: "Mangan tana" },
      { word: "Medicine", correctMeaning: "Gamut" },
      { word: "I walk home", correctMeaning: "Maglakad ku papuntang bale" },
      { word: "Say in Kapampangan: Let's eat", correctMeaning: "Mangan tana" },
      { word: "Which phrase means 'I walk'?", correctMeaning: "Maglakad ku" },
      { word: "Iinuman ke ing _____ ku", correctMeaning: "gamut" },
      {
        word: "Which phrase means 'Let's eat'?",
        correctMeaning: "Mangan tana",
      },
      { word: "Maglakad ku papuntang _____", correctMeaning: "bale" },
    ],
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },

  12: {
    words: [
      { word: "Happy", correctMeaning: "Masaya" },
      { word: "Sad", correctMeaning: "Malungkut" },
      { word: "Angry", correctMeaning: "Masosora" },
      { word: "You are happy today", correctMeaning: "Masaya ka ngeni" },
      { word: "Say in Kapampangan: I am happy", correctMeaning: "Masaya" },
      { word: "Which word means sad?", correctMeaning: "Malungkut" },
      { word: "_____ ya ngeni", correctMeaning: "Malungkut" },
      { word: "Which word means angry?", correctMeaning: "Masosora" },
      { word: "Masaya ka _____", correctMeaning: "ngeni" },
    ],
    expression: {
      prompt: "Show the described expression",
      expectedExpression: "happy",
    },
  },

  13: {
    words: [
      { word: "My head hurts", correctMeaning: "Masakit ing ulu ku." },
      { word: "Wash your hands", correctMeaning: "Manos naka gamat mu." },
      { word: "My leg hurts", correctMeaning: "Masakit ya ing bitis ku." },
      { word: "Head", correctMeaning: "Ulu" },
      {
        word: "Say in Kapampangan: Wash your hands",
        correctMeaning: "Manos naka gamat mu.",
      },
      {
        word: "Which phrase means 'My head hurts'?",
        correctMeaning: "Masakit ing ulu ku.",
      },
      { word: "Masakit ing _____ ku", correctMeaning: "ulu" },
      {
        word: "Which word refers to the leg or foot?",
        correctMeaning: "Bitis",
      },
      { word: "Manos naka _____ mu", correctMeaning: "gamat" },
    ],
    expression: { prompt: "Show a sad expression", expectedExpression: "sad" },
  },

  14: {
    words: [
      { word: "Home / house", correctMeaning: "Bale" },
      {
        word: "Please close the door",
        correctMeaning: "Pakisara me ing pintu.",
      },
      {
        word: "Please open the window",
        correctMeaning: "Buksan me ing bintana.",
      },
      { word: "Door", correctMeaning: "Pintu" },
      {
        word: "Say in Kapampangan: Please close the door",
        correctMeaning: "Pakisara me ing pintu.",
      },
      { word: "Which word means window?", correctMeaning: "Bintana" },
      { word: "Pakisara me ing _____", correctMeaning: "pintu" },
      {
        word: "Which phrase asks someone to open the window?",
        correctMeaning: "Buksan me ing bintana.",
      },
      { word: "Buksan me ing _____", correctMeaning: "bintana" },
    ],
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },

  15: {
    words: [
      { word: "I have already eaten", correctMeaning: "Mengan naku nandin." },
      {
        word: "My father is still eating",
        correctMeaning: "Mengan yapa pu i bapa ku",
      },
      { word: "We are still eating", correctMeaning: "Mangan kami pa" },
      { word: "Eat / eating", correctMeaning: "Mangan" },
      {
        word: "Say in Kapampangan: I have already eaten",
        correctMeaning: "Mengan naku nandin.",
      },
      {
        word: "Which phrase means 'We are still eating'?",
        correctMeaning: "Mangan kami pa",
      },
      { word: "Mengan yapa pu i _____ ku", correctMeaning: "bapa" },
      {
        word: "Which phrase means 'I have already eaten'?",
        correctMeaning: "Mengan naku nandin.",
      },
      { word: "Mangan _____ pa", correctMeaning: "kami" },
    ],
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },

  16: {
    words: [
      { word: "Rainbow (source term; verify)", correctMeaning: "Pananari" },
      {
        word: "It will return tomorrow",
        correctMeaning: "Mag balik ya ing muklat sumala bukas",
      },
      { word: "Every day / daily", correctMeaning: "Aldo-aldo kung mag-aral." },
      { word: "Tomorrow", correctMeaning: "Bukas" },
      {
        word: "Say in Kapampangan: It will return tomorrow",
        correctMeaning: "Mag balik ya ing muklat sumala bukas",
      },
      {
        word: "Which phrase means 'Every day'?",
        correctMeaning: "Aldo-aldo kung mag-aral.",
      },
      { word: "Mag balik ya ing muklat sumala _____", correctMeaning: "bukas" },
      {
        word: "Which phrase describes a daily activity?",
        correctMeaning: "Aldo-aldo kung mag-aral.",
      },
      { word: "Aldo-aldo kung _____", correctMeaning: "mag-aral" },
    ],
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },

  17: {
    words: [
      { word: "Yes / respectful response", correctMeaning: "Opu" },
      { word: "Sorry", correctMeaning: "Pasensya" },
      { word: "Polite expression", correctMeaning: "Pu" },
      { word: "Please excuse me", correctMeaning: "Makilabas ko pu" },
      {
        word: "Say in Kapampangan: Sorry for the inconvenience",
        correctMeaning: "Pasensya na pu king abala.",
      },
      { word: "Which is a respectful response?", correctMeaning: "Opu" },
      { word: "Makilabas ko _____", correctMeaning: "pu" },
      { word: "Which word expresses an apology?", correctMeaning: "Pasensya" },
      { word: "Pasensya na pu king _____", correctMeaning: "abala" },
    ],
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },

  18: {
    words: [
      {
        word: "Starting eagerly but failing to finish",
        correctMeaning: "E ka maging ningas-kugon king pamagaral.",
      },
      {
        word: "Timid or lacking confidence",
        correctMeaning: "Maluya ing loob na king pamagsalita.",
      },
      {
        word: "Beware of someone with a flattering tongue",
        correctMeaning: "Mag-ingat king taong matamis ing dila.",
      },
      {
        word: "Ningas-kugon",
        correctMeaning: "Starting eagerly but failing to continue or finish",
      },
      {
        word: "Say the phrase about lacking confidence",
        correctMeaning: "Maluya ing loob na king pamagsalita.",
      },
      {
        word: "Which phrase warns about insincere flattery?",
        correctMeaning: "Mag-ingat king taong matamis ing dila.",
      },
      {
        word: "E ka maging ningas-kugon king _____",
        correctMeaning: "pamagaral",
      },
      {
        word: "Which phrase describes timidity?",
        correctMeaning: "Maluya ing loob na king pamagsalita.",
      },
      {
        word: "Mag-ingat king taong matamis ing _____",
        correctMeaning: "dila",
      },
    ],
    expression: { prompt: "Show a sad expression", expectedExpression: "sad" },
  },

  19: {
    words: [
      { word: "Because", correctMeaning: "Uling" },
      { word: "There is / located at", correctMeaning: "Atiu" },
      { word: "But", correctMeaning: "Oneng" },
      {
        word: "Bring an umbrella because it is raining",
        correctMeaning: "Magdala kung payung uling mumuran",
      },
      {
        word: "Say in Kapampangan: But I have class",
        correctMeaning: "Bisa ku tuki oneng atin kung klasi.",
      },
      { word: "Which word means 'because'?", correctMeaning: "Uling" },
      { word: "Magdala kung payung _____ mumuran", correctMeaning: "uling" },
      { word: "Which word means 'but'?", correctMeaning: "Oneng" },
      { word: "Mumuran, kaya _____ kami king bale", correctMeaning: "atiu" },
    ],
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },

  20: {
    words: [
      { word: "Helpful / cooperative", correctMeaning: "Magtulungin" },
      {
        word: "Justice is important in the community",
        correctMeaning: "Mahalaga ing katarungan king balen.",
      },
      {
        word: "Let us protect our freedom",
        correctMeaning: "Pakamalan tamu ya ring kekatamung kalayaan.",
      },
      { word: "Community cooperation", correctMeaning: "Magtulungin" },
      {
        word: "Say in Kapampangan: Justice is important in the community",
        correctMeaning: "Mahalaga ing katarungan king balen.",
      },
      {
        word: "Which phrase refers to justice?",
        correctMeaning: "Mahalaga ing katarungan king balen.",
      },
      {
        word: "Pakamalan tamu ya ring kekatamung _____",
        correctMeaning: "kalayaan",
      },
      {
        word: "Which word describes being helpful?",
        correctMeaning: "Magtulungin",
      },
      { word: "Mahalaga ing katarungan king _____", correctMeaning: "balen" },
    ],
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },
  // Add Kapampangan levels here when their reference content is ready.
};

const warayLevels: Record<number, LevelContent> = {
  1: {
    words: [
      {
        // card
        word: "Mother",
        correctMeaning: "Nanay",
      },
      {
        // card
        word: "She is my mother.",
        correctMeaning: "Hiya an akon nanay",
      },
      {
        // card
        word: "He is my Father",
        correctMeaning: "Hiya an akon tatay",
      },
      {
        // card
        word: "He was my brother",
        correctMeaning: "Hiya an akon bugto",
      },
      {
        // speak
        word: "Pamilya",
        correctMeaning: "Pamilya",
      },
      {
        // multiple choice
        word: "Who is the head of the family",
        correctMeaning: "Tatay",
      },
      {
        // fill in the blank
        word: "My _____ is the head of the family",
        correctMeaning: "Tatay",
      },
      {
        // multiple choice
        word: "My _____ is the ",
        correctMeaning: "Nanay",
      },
      {
        // fill in the blank
        word: "Goodafternoon",
        correctMeaning: "Maupay nga kulop",
      },
    ], // fer
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },
  2: {
    words: [
      {
        // card
        word: "Mother",
        correctMeaning: "Nanay",
      },
      {
        // card
        word: "She is my mother.",
        correctMeaning: "Hiya an akon nanay",
      },
      {
        // card
        word: "He is my Father",
        correctMeaning: "Hiya an akon tatay",
      },
      {
        // card
        word: "",
        correctMeaning: "",
      },
      {
        // speak
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "",
        correctMeaning: "",
      },
      {
        // fill in the blank
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "Goodevening",
        correctMeaning: "Maupay nga gab-i",
      },
      {
        // fill in the blank
        word: "Goodafternoon",
        correctMeaning: "Maupay nga kulop",
      },
    ], // fer
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },
  3: {
    words: [
      {
        // card
        word: "Mother",
        correctMeaning: "Nanay",
      },
      {
        // card
        word: "She is my mother.",
        correctMeaning: "Hiya an akon nanay",
      },
      {
        // card
        word: "He is my Father",
        correctMeaning: "Hiya an akon tatay",
      },
      {
        // card
        word: "",
        correctMeaning: "",
      },
      {
        // speak
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "",
        correctMeaning: "",
      },
      {
        // fill in the blank
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "Goodevening",
        correctMeaning: "Maupay nga gab-i",
      },
      {
        // fill in the blank
        word: "Goodafternoon",
        correctMeaning: "Maupay nga kulop",
      },
    ], // fer
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },
  4: {
    words: [
      {
        // card
        word: "Mother",
        correctMeaning: "Nanay",
      },
      {
        // card
        word: "She is my mother.",
        correctMeaning: "Hiya an akon nanay",
      },
      {
        // card
        word: "He is my Father",
        correctMeaning: "Hiya an akon tatay",
      },
      {
        // card
        word: "",
        correctMeaning: "",
      },
      {
        // speak
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "",
        correctMeaning: "",
      },
      {
        // fill in the blank
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "Goodevening",
        correctMeaning: "Maupay nga gab-i",
      },
      {
        // fill in the blank
        word: "Goodafternoon",
        correctMeaning: "Maupay nga kulop",
      },
    ], // fer
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },
  5: {
    words: [
      {
        // card
        word: "Mother",
        correctMeaning: "Nanay",
      },
      {
        // card
        word: "She is my mother.",
        correctMeaning: "Hiya an akon nanay",
      },
      {
        // card
        word: "He is my Father",
        correctMeaning: "Hiya an akon tatay",
      },
      {
        // card
        word: "",
        correctMeaning: "",
      },
      {
        // speak
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "",
        correctMeaning: "",
      },
      {
        // fill in the blank
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "Goodevening",
        correctMeaning: "Maupay nga gab-i",
      },
      {
        // fill in the blank
        word: "Goodafternoon",
        correctMeaning: "Maupay nga kulop",
      },
    ], // fer
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },
  6: {
    words: [
      {
        // card
        word: "Mother",
        correctMeaning: "Nanay",
      },
      {
        // card
        word: "She is my mother.",
        correctMeaning: "Hiya an akon nanay",
      },
      {
        // card
        word: "He is my Father",
        correctMeaning: "Hiya an akon tatay",
      },
      {
        // card
        word: "",
        correctMeaning: "",
      },
      {
        // speak
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "",
        correctMeaning: "",
      },
      {
        // fill in the blank
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "Goodevening",
        correctMeaning: "Maupay nga gab-i",
      },
      {
        // fill in the blank
        word: "Goodafternoon",
        correctMeaning: "Maupay nga kulop",
      },
    ], // fer
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },
  7: {
    words: [
      {
        // card
        word: "Mother",
        correctMeaning: "Nanay",
      },
      {
        // card
        word: "She is my mother.",
        correctMeaning: "Hiya an akon nanay",
      },
      {
        // card
        word: "He is my Father",
        correctMeaning: "Hiya an akon tatay",
      },
      {
        // card
        word: "",
        correctMeaning: "",
      },
      {
        // speak
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "",
        correctMeaning: "",
      },
      {
        // fill in the blank
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "Goodevening",
        correctMeaning: "Maupay nga gab-i",
      },
      {
        // fill in the blank
        word: "Goodafternoon",
        correctMeaning: "Maupay nga kulop",
      },
    ], // fer
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },
  8: {
    words: [
      {
        // card
        word: "Mother",
        correctMeaning: "Nanay",
      },
      {
        // card
        word: "She is my mother.",
        correctMeaning: "Hiya an akon nanay",
      },
      {
        // card
        word: "He is my Father",
        correctMeaning: "Hiya an akon tatay",
      },
      {
        // card
        word: "",
        correctMeaning: "",
      },
      {
        // speak
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "",
        correctMeaning: "",
      },
      {
        // fill in the blank
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "Goodevening",
        correctMeaning: "Maupay nga gab-i",
      },
      {
        // fill in the blank
        word: "Goodafternoon",
        correctMeaning: "Maupay nga kulop",
      },
    ], // fer
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },
  9: {
    words: [
      {
        // card
        word: "Mother",
        correctMeaning: "Nanay",
      },
      {
        // card
        word: "She is my mother.",
        correctMeaning: "Hiya an akon nanay",
      },
      {
        // card
        word: "He is my Father",
        correctMeaning: "Hiya an akon tatay",
      },
      {
        // card
        word: "",
        correctMeaning: "",
      },
      {
        // speak
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "",
        correctMeaning: "",
      },
      {
        // fill in the blank
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "Goodevening",
        correctMeaning: "Maupay nga gab-i",
      },
      {
        // fill in the blank
        word: "Goodafternoon",
        correctMeaning: "Maupay nga kulop",
      },
    ], // fer
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },
  10: {
    words: [
      {
        // card
        word: "Mother",
        correctMeaning: "Nanay",
      },
      {
        // card
        word: "She is my mother.",
        correctMeaning: "Hiya an akon nanay",
      },
      {
        // card
        word: "He is my Father",
        correctMeaning: "Hiya an akon tatay",
      },
      {
        // card
        word: "",
        correctMeaning: "",
      },
      {
        // speak
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "",
        correctMeaning: "",
      },
      {
        // fill in the blank
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "Goodevening",
        correctMeaning: "Maupay nga gab-i",
      },
      {
        // fill in the blank
        word: "Goodafternoon",
        correctMeaning: "Maupay nga kulop",
      },
    ], // fer
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },
  11: {
    words: [
      {
        // card
        word: "Mother",
        correctMeaning: "Nanay",
      },
      {
        // card
        word: "She is my mother.",
        correctMeaning: "Hiya an akon nanay",
      },
      {
        // card
        word: "He is my Father",
        correctMeaning: "Hiya an akon tatay",
      },
      {
        // card
        word: "",
        correctMeaning: "",
      },
      {
        // speak
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "",
        correctMeaning: "",
      },
      {
        // fill in the blank
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "Goodevening",
        correctMeaning: "Maupay nga gab-i",
      },
      {
        // fill in the blank
        word: "Goodafternoon",
        correctMeaning: "Maupay nga kulop",
      },
    ], // fer
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },
  12: {
    words: [
      {
        // card
        word: "Mother",
        correctMeaning: "Nanay",
      },
      {
        // card
        word: "She is my mother.",
        correctMeaning: "Hiya an akon nanay",
      },
      {
        // card
        word: "He is my Father",
        correctMeaning: "Hiya an akon tatay",
      },
      {
        // card
        word: "",
        correctMeaning: "",
      },
      {
        // speak
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "",
        correctMeaning: "",
      },
      {
        // fill in the blank
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "Goodevening",
        correctMeaning: "Maupay nga gab-i",
      },
      {
        // fill in the blank
        word: "Goodafternoon",
        correctMeaning: "Maupay nga kulop",
      },
    ], // fer
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },
  13: {
    words: [
      {
        // card
        word: "Mother",
        correctMeaning: "Nanay",
      },
      {
        // card
        word: "She is my mother.",
        correctMeaning: "Hiya an akon nanay",
      },
      {
        // card
        word: "He is my Father",
        correctMeaning: "Hiya an akon tatay",
      },
      {
        // card
        word: "",
        correctMeaning: "",
      },
      {
        // speak
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "",
        correctMeaning: "",
      },
      {
        // fill in the blank
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "Goodevening",
        correctMeaning: "Maupay nga gab-i",
      },
      {
        // fill in the blank
        word: "Goodafternoon",
        correctMeaning: "Maupay nga kulop",
      },
    ], // fer
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },
  14: {
    words: [
      {
        // card
        word: "Mother",
        correctMeaning: "Nanay",
      },
      {
        // card
        word: "She is my mother.",
        correctMeaning: "Hiya an akon nanay",
      },
      {
        // card
        word: "He is my Father",
        correctMeaning: "Hiya an akon tatay",
      },
      {
        // card
        word: "",
        correctMeaning: "",
      },
      {
        // speak
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "",
        correctMeaning: "",
      },
      {
        // fill in the blank
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "Goodevening",
        correctMeaning: "Maupay nga gab-i",
      },
      {
        // fill in the blank
        word: "Goodafternoon",
        correctMeaning: "Maupay nga kulop",
      },
    ], // fer
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },
  15: {
    words: [
      {
        // card
        word: "Mother",
        correctMeaning: "Nanay",
      },
      {
        // card
        word: "She is my mother.",
        correctMeaning: "Hiya an akon nanay",
      },
      {
        // card
        word: "He is my Father",
        correctMeaning: "Hiya an akon tatay",
      },
      {
        // card
        word: "",
        correctMeaning: "",
      },
      {
        // speak
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "",
        correctMeaning: "",
      },
      {
        // fill in the blank
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "Goodevening",
        correctMeaning: "Maupay nga gab-i",
      },
      {
        // fill in the blank
        word: "Goodafternoon",
        correctMeaning: "Maupay nga kulop",
      },
    ], // fer
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },
  16: {
    words: [
      {
        // card
        word: "Mother",
        correctMeaning: "Nanay",
      },
      {
        // card
        word: "She is my mother.",
        correctMeaning: "Hiya an akon nanay",
      },
      {
        // card
        word: "He is my Father",
        correctMeaning: "Hiya an akon tatay",
      },
      {
        // card
        word: "",
        correctMeaning: "",
      },
      {
        // speak
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "",
        correctMeaning: "",
      },
      {
        // fill in the blank
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "Goodevening",
        correctMeaning: "Maupay nga gab-i",
      },
      {
        // fill in the blank
        word: "Goodafternoon",
        correctMeaning: "Maupay nga kulop",
      },
    ], // fer
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },
  17: {
    words: [
      {
        // card
        word: "Mother",
        correctMeaning: "Nanay",
      },
      {
        // card
        word: "She is my mother.",
        correctMeaning: "Hiya an akon nanay",
      },
      {
        // card
        word: "He is my Father",
        correctMeaning: "Hiya an akon tatay",
      },
      {
        // card
        word: "",
        correctMeaning: "",
      },
      {
        // speak
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "",
        correctMeaning: "",
      },
      {
        // fill in the blank
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "Goodevening",
        correctMeaning: "Maupay nga gab-i",
      },
      {
        // fill in the blank
        word: "Goodafternoon",
        correctMeaning: "Maupay nga kulop",
      },
    ], // fer
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },
  18: {
    words: [
      {
        // card
        word: "Mother",
        correctMeaning: "Nanay",
      },
      {
        // card
        word: "She is my mother.",
        correctMeaning: "Hiya an akon nanay",
      },
      {
        // card
        word: "He is my Father",
        correctMeaning: "Hiya an akon tatay",
      },
      {
        // card
        word: "",
        correctMeaning: "",
      },
      {
        // speak
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "",
        correctMeaning: "",
      },
      {
        // fill in the blank
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "Goodevening",
        correctMeaning: "Maupay nga gab-i",
      },
      {
        // fill in the blank
        word: "Goodafternoon",
        correctMeaning: "Maupay nga kulop",
      },
    ], // fer
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },
  19: {
    words: [
      {
        // card
        word: "Mother",
        correctMeaning: "Nanay",
      },
      {
        // card
        word: "She is my mother.",
        correctMeaning: "Hiya an akon nanay",
      },
      {
        // card
        word: "He is my Father",
        correctMeaning: "Hiya an akon tatay",
      },
      {
        // card
        word: "",
        correctMeaning: "",
      },
      {
        // speak
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "",
        correctMeaning: "",
      },
      {
        // fill in the blank
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "Goodevening",
        correctMeaning: "Maupay nga gab-i",
      },
      {
        // fill in the blank
        word: "Goodafternoon",
        correctMeaning: "Maupay nga kulop",
      },
    ], // fer
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },
  20: {
    words: [
      {
        // card
        word: "Mother",
        correctMeaning: "Nanay",
      },
      {
        // card
        word: "She is my mother.",
        correctMeaning: "Hiya an akon nanay",
      },
      {
        // card
        word: "He is my Father",
        correctMeaning: "Hiya an akon tatay",
      },
      {
        // card
        word: "",
        correctMeaning: "",
      },
      {
        // speak
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "",
        correctMeaning: "",
      },
      {
        // fill in the blank
        word: "",
        correctMeaning: "",
      },
      {
        // multiple choice
        word: "Goodevening",
        correctMeaning: "Maupay nga gab-i",
      },
      {
        // fill in the blank
        word: "Goodafternoon",
        correctMeaning: "Maupay nga kulop",
      },
    ], // fer
    expression: {
      prompt: "Show a happy expression",
      expectedExpression: "happy",
    },
  },
  // Add Waray levels here when their reference content is ready.
};

const allLevels: Record<Dialect, Record<number, LevelContent>> = {
  tagalog: tagalogLevels,
  kapampangan: kapampanganLevels,
  waray: warayLevels,
};

// Every non-empty answer written for a dialect. Wrong choices must be in the
// same dialect as the right one — English distractors give the answer away.
function collectAnswers(levels: Record<number, LevelContent>): string[] {
  return Object.values(levels)
    .flatMap((level) => level.words.map((entry) => entry.correctMeaning.trim()))
    .filter((answer) => answer !== "");
}

function buildAllPretests(): Record<string, PretestQuestion[]> {
  const result: Record<string, PretestQuestion[]> = {};

  (Object.keys(allLevels) as Dialect[]).forEach((dialect) => {
    const levels = allLevels[dialect];
    const distractorPool =
      dialect === "tagalog" ? tagalogDistractors : collectAnswers(levels);

    Object.keys(levels).forEach((levelKey) => {
      const levelNum = Number(levelKey);

      result[`${dialect}_${levelNum}`] = buildPretest(
        levels[levelNum],
        distractorPool,
      );
    });
  });

  return result;
}

export const pretestByLessonId: Record<string, PretestQuestion[]> =
  buildAllPretests();
