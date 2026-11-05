import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 9 — imported from "Lesson Plan.pdf", pages 774–788.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
// Fields not given by the plan are INFERRED from this lesson's own content and
// listed in docs/waray-inferred-keys.md: situation, usage, example, pattern, fill-in, arrange, speaking phrase, target pitch and mood, respelling, example situation, pronunciation tip, completion requirement.
// The practice answers are INFERRED drafts, not from the PDF. See
// docs/waray-draft-answer-keys.md for each answer and how it was found.

export const warayLesson9: StructuredLesson = {
  lessonId: "waray_9",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 9,
  title: "Asking and Answering Simple Questions",
  level: "Beginner",
  unit: "Unit 3 – Basic Communication",
  estimatedDuration: "35–45 minutes",
  prerequisite: "Lessons 1–8",
  languageVariety: "Waray-Waray",
  intro: [
    "Questions are important when communicating with other people. They allow us to learn information, clarify unfamiliar things, and maintain conversations.",
    "In Waray, questions can begin with words such as ano (what), hin-o (who), diin (where), and san-o (when). Learning these expressions will help you communicate in everyday situations.",
    "In this lesson, you will practice asking questions and responding with simple Waray sentences.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify common Waray question words and understand their meanings.",
    "Ask simple questions about people, places, things, time, and quantities.",
    "Give appropriate short answers to common questions.",
    "Construct basic questions using familiar Waray vocabulary.",
    "Participate in a short everyday conversation using simple questions and responses.",
  ],
  assessment: {
    instructions: "Answer the following questions to test your understanding of the lesson. Choose the best answer for each item.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What is the Waray equivalent of \"What\"?",
        options: [
          {
            key: "A",
            text: "Hin-o",
          },
          {
            key: "B",
            text: "Ano",
          },
          {
            key: "C",
            text: "Diin",
          },
          {
            key: "D",
            text: "San-o",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "Which question word is used to ask about a person?",
        options: [
          {
            key: "A",
            text: "Pira",
          },
          {
            key: "B",
            text: "Kay ano",
          },
          {
            key: "C",
            text: "Hin-o",
          },
          {
            key: "D",
            text: "Ano",
          },
        ],
        answerKey: "C",
      },
      {
        id: 3,
        prompt: "What does \"Taga diin ka?\" mean?",
        options: [
          {
            key: "A",
            text: "Where are you going?",
          },
          {
            key: "B",
            text: "Where are you from?",
          },
          {
            key: "C",
            text: "Who are you?",
          },
          {
            key: "D",
            text: "How old are you?",
          },
        ],
        answerKey: "B",
      },
      {
        id: 4,
        prompt: "Which Waray word means \"When\"?",
        options: [
          {
            key: "A",
            text: "San-o",
          },
          {
            key: "B",
            text: "Ano",
          },
          {
            key: "C",
            text: "Pira",
          },
          {
            key: "D",
            text: "Hin-o",
          },
        ],
        answerKey: "A",
      },
      {
        id: 5,
        prompt: "What does \"Pira ini?\" mean?",
        options: [
          {
            key: "A",
            text: "What is this?",
          },
          {
            key: "B",
            text: "Who owns this?",
          },
          {
            key: "C",
            text: "How much is this?",
          },
          {
            key: "D",
            text: "Where is this?",
          },
        ],
        answerKey: "C",
      },
      {
        id: 6,
        prompt: "What is the correct Waray translation of \"How old are you?\"",
        options: [
          {
            key: "A",
            text: "Hin-o ka?",
          },
          {
            key: "B",
            text: "Pira na an imo edad?",
          },
          {
            key: "C",
            text: "Ano an imo ngaran?",
          },
          {
            key: "D",
            text: "Taga diin ka?",
          },
        ],
        answerKey: "B",
      },
      {
        id: 7,
        prompt: "Which expression means \"Why\"?",
        options: [
          {
            key: "A",
            text: "Paonan-o",
          },
          {
            key: "B",
            text: "San-o",
          },
          {
            key: "C",
            text: "Kay ano",
          },
          {
            key: "D",
            text: "Hain",
          },
        ],
        answerKey: "C",
      },
      {
        id: 8,
        prompt: "What does \"Ano ini?\" mean?",
        options: [
          {
            key: "A",
            text: "What is this?",
          },
          {
            key: "B",
            text: "Where is this?",
          },
          {
            key: "C",
            text: "Who is this?",
          },
          {
            key: "D",
            text: "When is this?",
          },
        ],
        answerKey: "A",
      },
      {
        id: 9,
        prompt: "Which question asks about the way something is done?",
        options: [
          {
            key: "A",
            text: "Hin-o ini?",
          },
          {
            key: "B",
            text: "Paonan-o ini buhaton?",
          },
          {
            key: "C",
            text: "San-o ini?",
          },
          {
            key: "D",
            text: "Pira ini?",
          },
        ],
        answerKey: "B",
      },
      {
        id: 10,
        prompt: "What is the best Waray response to \"Taga diin ka?\" if you are from Samar?",
        options: [
          {
            key: "A",
            text: "Disiotso anyos ako.",
          },
          {
            key: "B",
            text: "An akon ngaran hi Ana.",
          },
          {
            key: "C",
            text: "Taga Samar ako.",
          },
          {
            key: "D",
            text: "Maupay ako.",
          },
        ],
        answerKey: "C",
      },
    ],
  },
  extraActivities: [
    {
      title: "Translate the Questions",
      kind: "translate",
      instructions: "Translate the following English questions into Waray.",
      items: [
        "What is your name?",
        "Where are you from?",
        "Who is your friend?",
        "How old are you?",
        "When will you go to school?",
      ],
    },
    {
      title: "Build Your Own Conversation",
      kind: "roleplay",
      instructions: "Imagine that you are meeting someone for the first time. Create a short conversation in Waray that includes at least four questions and their corresponding answers.\nYour conversation should include:",
      items: [
        "Asking someone's name.",
        "Asking where someone is from.",
        "Asking about someone's age.",
        "Asking about a person's interests or activities.",
      ],
    },
  ],
  matchActivity: {
    title: "Match the Question Words",
    instructions: "Match each Waray question word with its correct English meaning.",
    pairs: [
      {
        id: "1",
        term: "Ano",
        answer: "What",
      },
      {
        id: "2",
        term: "Hin-o",
        answer: "Who",
      },
      {
        id: "3",
        term: "Diin",
        answer: "Where",
      },
      {
        id: "4",
        term: "San-o",
        answer: "When",
      },
      {
        id: "5",
        term: "Pira",
        answer: "How many / How much",
      },
    ],
  },
  choiceActivity: {
    title: "Complete the Questions",
    instructions: "Choose the correct Waray question word to complete each sentence.",
    questions: [
      {
        id: 1,
        prompt: "______ an imo ngaran?",
        options: [
          {
            key: "A",
            text: "Ano",
          },
          {
            key: "B",
            text: "Hin-o",
          },
          {
            key: "C",
            text: "Diin",
          },
          {
            key: "D",
            text: "San-o",
          },
          {
            key: "E",
            text: "Pira",
          },
        ],
        answerKey: "A",
      },
      {
        id: 2,
        prompt: "______ ka?",
        options: [
          {
            key: "A",
            text: "Ano",
          },
          {
            key: "B",
            text: "Hin-o",
          },
          {
            key: "C",
            text: "Diin",
          },
          {
            key: "D",
            text: "San-o",
          },
          {
            key: "E",
            text: "Pira",
          },
        ],
        answerKey: "B",
      },
      {
        id: 3,
        prompt: "Taga ______ ka?",
        options: [
          {
            key: "A",
            text: "Ano",
          },
          {
            key: "B",
            text: "Hin-o",
          },
          {
            key: "C",
            text: "Diin",
          },
          {
            key: "D",
            text: "San-o",
          },
          {
            key: "E",
            text: "Pira",
          },
        ],
        answerKey: "C",
      },
      {
        id: 4,
        prompt: "______ ka makadto?",
        options: [
          {
            key: "A",
            text: "Ano",
          },
          {
            key: "B",
            text: "Hin-o",
          },
          {
            key: "C",
            text: "Diin",
          },
          {
            key: "D",
            text: "San-o",
          },
          {
            key: "E",
            text: "Pira",
          },
        ],
        answerKey: "D",
      },
      {
        id: 5,
        prompt: "______ ini?",
        options: [
          {
            key: "A",
            text: "Ano",
          },
          {
            key: "B",
            text: "Hin-o",
          },
          {
            key: "C",
            text: "Diin",
          },
          {
            key: "D",
            text: "San-o",
          },
          {
            key: "E",
            text: "Pira",
          },
        ],
        answerKey: "E",
      },
    ],
  },
  answerKeysInferred: true,
  rewards: {
    items: [
      {
        section: "vocabulary",
        label: "Vocabulary Review + Useful Phrases",
        xp: 20,
      },
      {
        section: "conversation",
        label: "Guided Conversations",
        xp: 10,
      },
      {
        section: "sentences",
        label: "Practice Activities",
        xp: 15,
      },
      {
        section: "assessment",
        label: "Lesson Assessment",
        xp: 15,
      },
    ],
    total: 60,
    badge: {
      name: "Question Master Badge",
      description: "Awarded after successfully completing the lesson assessment with at least 70%.",
    },
    completionRequirement: "Obtain at least 70% in the lesson assessment. Learners may repeat the activities and assessment if they do not meet the requirement.",
  },
  expectedOutcomes: [
    "Recognize common Waray question words.",
    "Ask basic questions about people, places, objects, time, and quantities.",
    "Respond to simple questions using appropriate Waray expressions.",
    "Participate in short conversations involving everyday questions.",
    "Lesson Completion Requirements:",
    "Finish the vocabulary and useful phrases activities.",
    "Complete the guided conversation exercises.",
    "Take the lesson assessment.",
    "Obtain a score of at least 70% to pass.",
  ],
  fillInBlanks: {
    title: "Fill in the Blanks",
    instructions: "Complete each sentence using the appropriate Waray word.",
    items: [
      {
        id: "1",
        sentence: "___ an imo ngaran?",
        hint: "What is your name?",
        answer: "Ano",
        wordBank: [
          "Paonan-o",
          "Dinhi",
          "Balay",
          "Ano",
        ],
      },
      {
        id: "2",
        sentence: "Taga ___ ka?",
        hint: "Where are you from?",
        answer: "diin",
        wordBank: [
          "Yana",
          "Dinhi",
          "Pagkaon",
          "diin",
        ],
      },
      {
        id: "3",
        sentence: "___ an iyo balay?",
        hint: "Where is your house?",
        answer: "Hain",
        wordBank: [
          "Pagkaon",
          "Balay",
          "Hain",
          "Tubig",
        ],
      },
      {
        id: "4",
        sentence: "___ ka makadto?",
        hint: "When will you go?",
        answer: "San-o",
        wordBank: [
          "Didto",
          "Yana",
          "San-o",
          "Balay",
        ],
      },
      {
        id: "5",
        sentence: "Kay ano nga aada ka ___?",
        hint: "Why are you here?",
        answer: "dinhi",
        wordBank: [
          "dinhi",
          "Tubig",
          "Estudyante",
          "Lugar",
        ],
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
          "Ano",
          "ngaran",
          "an",
          "imo",
        ],
        answer: [
          "Ano",
          "an",
          "imo",
          "ngaran",
        ],
        display: "Ano an imo ngaran?",
      },
      {
        id: "2",
        words: [
          "ka",
          "Taga",
          "diin",
        ],
        answer: [
          "Taga",
          "diin",
          "ka",
        ],
        display: "Taga diin ka?",
      },
      {
        id: "3",
        words: [
          "an",
          "iyo",
          "balay",
          "Hain",
        ],
        answer: [
          "Hain",
          "an",
          "iyo",
          "balay",
        ],
        display: "Hain an iyo balay?",
      },
      {
        id: "4",
        words: [
          "ka",
          "makadto",
          "San-o",
        ],
        answer: [
          "San-o",
          "ka",
          "makadto",
        ],
        display: "San-o ka makadto?",
      },
      {
        id: "5",
        words: [
          "nga",
          "ano",
          "Kay",
          "aada",
          "ka",
          "dinhi",
        ],
        answer: [
          "Kay",
          "ano",
          "nga",
          "aada",
          "ka",
          "dinhi",
        ],
        display: "Kay ano nga aada ka dinhi?",
      },
    ],
  },
  speaking: {
    title: "Speaking Practice",
    instructions: "Read the following sentences aloud.",
    note: "Learners should listen to the model pronunciation before recording their own voice.",
    practiceLessonId: "waray_9",
    phrases: [
      {
        id: "1",
        text: "Ano an imo ngaran?",
        respelling: "AH-noh ahn EE-moh NGAH-rahn",
        meaning: "What is your name?",
      },
      {
        id: "2",
        text: "Kay ano nga aada ka dinhi?",
        respelling: "KAI AH-noh ngah ah-AH-dah kah DEEN-hee",
        meaning: "Why are you here?",
      },
      {
        id: "3",
        text: "Nasasabtan mo ba?",
        respelling: "nah-sah-SAHB-tahn moh bah",
        meaning: "Do you understand?",
      },
      {
        id: "4",
        text: "Ano ini?",
        respelling: "a-no i-ni",
        meaning: "What is this?",
      },
      {
        id: "5",
        text: "Taga Samar ako.",
        respelling: "ta-ga sa-mar a-ko",
        meaning: "I am from Samar.",
      },
      {
        id: "6",
        text: "Yana an akon klase.",
        respelling: "ya-na an a-kon klah-seh",
        meaning: "My class is today.",
      },
      {
        id: "7",
        text: "Nasakay ako hin dyip.",
        respelling: "na-sa-kay a-ko hin dyip",
        meaning: "I ride a jeepney.",
      },
    ],
  },
  exampleSituation: {
    description: "Imagine this situation from the lesson: Meeting a New Friend.",
    lead: "You can begin by saying:",
    line: "Maupay nga aga!",
    translation: "Good morning!",
  },
  vocabularyIntro: "Learn the following words and expressions before proceeding to the activities.",
  pronunciationTip: "Read each syllable clearly. Avoid rushing through longer expressions.",
  selfIntroIntro: "Use these patterns and phrases from the lesson.",
  vocabulary: [
    {
      term: "Ano",
      meaning: "What",
      pronunciation: "AH-noh",
      usage: "A common question word.",
      example: [
        {
          speaker: "A",
          text: "Maupay nga aga!",
          translation: "Good morning!",
        },
        {
          speaker: "B",
          text: "Ano an imo ngaran?",
          translation: "What is your name?",
        },
      ],
    },
    {
      term: "Hin-o",
      meaning: "Who",
      pronunciation: "HIN-oh",
      usage: "A common question word.",
      example: [
        {
          speaker: "",
          text: "Hin-o ka?",
          translation: "Who are you?",
        },
      ],
    },
    {
      term: "Diin",
      meaning: "Where",
      pronunciation: "DEE-in",
      usage: "A common question word.",
      example: [
        {
          speaker: "A",
          text: "Ana an akon ngaran.",
          translation: "My name is Ana.",
        },
        {
          speaker: "B",
          text: "Taga diin ka?",
          translation: "Where are you from?",
        },
      ],
    },
    {
      term: "San-o",
      meaning: "When",
      pronunciation: "SAHN-oh",
      usage: "A common question word.",
      example: [
        {
          speaker: "A",
          text: "San-o ka makadto ha eskwelahan?",
          translation: "When will you go to school?",
        },
        {
          speaker: "B",
          text: "Buwas ako makadto.",
          translation: "I will go tomorrow.",
        },
      ],
    },
    {
      term: "Kay ano",
      meaning: "Why",
      pronunciation: "KAI AH-noh",
      usage: "A common question word.",
      example: [
        {
          speaker: "A",
          text: "Buwas ako makadto.",
          translation: "I will go tomorrow.",
        },
        {
          speaker: "B",
          text: "Kay ano nga diri ka makadto yana?",
          translation: "Why aren't you going today?",
        },
      ],
    },
    {
      term: "Paonan-o",
      meaning: "How",
      pronunciation: "pah-oh-NAHN-oh",
      usage: "A common question word.",
      example: [
        {
          speaker: "A",
          text: "Aada ito hirani ha simbahan.",
          translation: "It is near the church.",
        },
        {
          speaker: "B",
          text: "Paonan-o ako makadto didto?",
          translation: "How can I get there?",
        },
      ],
    },
    {
      term: "Pira",
      meaning: "How many / How much",
      pronunciation: "PEE-rah",
      usage: "A common question word.",
      example: [
        {
          speaker: "",
          text: "Pira na an imo edad?",
          translation: "How old are you?",
        },
      ],
    },
    {
      term: "Hain",
      meaning: "Which",
      pronunciation: "HAH-in",
      usage: "A common question word.",
      example: [
        {
          speaker: "A",
          text: "Pasayloa ako. Hain an eskwelahan?",
          translation: "Excuse me. Where is the school?",
        },
        {
          speaker: "B",
          text: "Aada ito hirani ha simbahan.",
          translation: "It is near the church.",
        },
      ],
    },
    {
      term: "Ngaran",
      meaning: "Name",
      pronunciation: "NGAH-rahn",
      usage: "A common words used in question.",
      example: [
        {
          speaker: "A",
          text: "Ano an imo ngaran?",
          translation: "What is your name?",
        },
        {
          speaker: "B",
          text: "Ben an akon ngaran. Ikaw?",
          translation: "My name is Ben. And you?",
        },
      ],
    },
    {
      term: "Edad",
      meaning: "Age",
      pronunciation: "eh-DAHD",
      usage: "A common words used in question.",
      example: [
        {
          speaker: "",
          text: "Pira na an imo edad?",
          translation: "How old are you?",
        },
      ],
    },
    {
      term: "Lugar",
      meaning: "Place",
      pronunciation: "loo-GAHR",
      usage: "A common words used in question.",
    },
    {
      term: "Balay",
      meaning: "House / Home",
      pronunciation: "BAH-lai",
      usage: "A common words used in question.",
      example: [
        {
          speaker: "A",
          text: "Kay ano nga diri ka makadto yana?",
          translation: "Why aren't you going today?",
        },
        {
          speaker: "B",
          text: "Kay may buruhaton ako ha balay.",
          translation: "Because I have something to do at home.",
        },
      ],
    },
    {
      term: "Eskwelahan",
      meaning: "School",
      pronunciation: "es-kweh-LAH-hahn",
      usage: "A common words used in question.",
      example: [
        {
          speaker: "A",
          text: "Pasayloa ako. Hain an eskwelahan?",
          translation: "Excuse me. Where is the school?",
        },
        {
          speaker: "B",
          text: "Aada ito hirani ha simbahan.",
          translation: "It is near the church.",
        },
      ],
    },
    {
      term: "Sangkay",
      meaning: "Friend",
      pronunciation: "SAHNG-kai",
      usage: "A common words used in question.",
      example: [
        {
          speaker: "",
          text: "Hin-o an imo sangkay?",
          translation: "Who is your friend?",
        },
      ],
    },
    {
      term: "Maestra / Maestro",
      meaning: "Teacher",
      pronunciation: "mah-ES-trah / mah-ES-troh",
      usage: "A common words used in question.",
    },
    {
      term: "Estudyante",
      meaning: "Student",
      pronunciation: "es-too-DYAHN-teh",
      usage: "A common words used in question.",
    },
    {
      term: "Pagkaon",
      meaning: "Food",
      pronunciation: "pahg-kah-OHN",
      usage: "A common words used in question.",
    },
    {
      term: "Tubig",
      meaning: "Water",
      pronunciation: "TOO-big",
      usage: "A common words used in question.",
    },
    {
      term: "Yana",
      meaning: "Today",
      pronunciation: "YAH-nah",
      usage: "A common words used in question.",
      example: [
        {
          speaker: "A",
          text: "Buwas ako makadto.",
          translation: "I will go tomorrow.",
        },
        {
          speaker: "B",
          text: "Kay ano nga diri ka makadto yana?",
          translation: "Why aren't you going today?",
        },
      ],
    },
    {
      term: "Buwas",
      meaning: "Tomorrow",
      pronunciation: "BOO-wahs",
      usage: "A common words used in question.",
      example: [
        {
          speaker: "A",
          text: "Kay may buruhaton ako ha balay.",
          translation: "Because I have something to do at home.",
        },
        {
          speaker: "B",
          text: "Sige, magkitaay kita buwas.",
          translation: "Okay, see you tomorrow.",
        },
      ],
    },
    {
      term: "Dinhi",
      meaning: "Here",
      pronunciation: "DEEN-hee",
      usage: "A common words used in question.",
      example: [
        {
          speaker: "",
          text: "Kay ano nga aada ka dinhi?",
          translation: "Why are you here?",
        },
      ],
    },
    {
      term: "Didto",
      meaning: "There",
      pronunciation: "DEED-toh",
      usage: "A common words used in question.",
      example: [
        {
          speaker: "A",
          text: "Paonan-o ako makadto didto?",
          translation: "How can I get there?",
        },
        {
          speaker: "B",
          text: "Diretso la, katapos liko ha tuo.",
          translation: "Just go straight, then turn right.",
        },
      ],
    },
    {
      term: "Oo",
      meaning: "Yes",
      pronunciation: "oh-OH",
      usage: "From this lesson's word list: short answers and responses.",
    },
    {
      term: "Diri",
      meaning: "No",
      pronunciation: "DEE-ree",
      usage: "From this lesson's word list: short answers and responses.",
      example: [
        {
          speaker: "A",
          text: "Buwas ako makadto.",
          translation: "I will go tomorrow.",
        },
        {
          speaker: "B",
          text: "Kay ano nga diri ka makadto yana?",
          translation: "Why aren't you going today?",
        },
      ],
    },
    {
      term: "Maaram ako",
      meaning: "I know",
      pronunciation: "mah-AH-rahm AH-koh",
      usage: "From this lesson's word list: short answers and responses.",
    },
    {
      term: "Diri ako maaram",
      meaning: "I don't know",
      pronunciation: "DEE-ree AH-koh mah-AH-rahm",
      usage: "From this lesson's word list: short answers and responses.",
    },
    {
      term: "Nasasabtan ko",
      meaning: "I understand",
      pronunciation: "nah-sah-SAHB-tahn koh",
      usage: "From this lesson's word list: short answers and responses.",
    },
    {
      term: "Diri ko nasasabtan",
      meaning: "I don't understand",
      pronunciation: "DEE-ree koh nah-sah-SAHB-tahn",
      usage: "From this lesson's word list: short answers and responses.",
    },
  ],
  greetings: [
    {
      term: "Ano",
      meaning: "What",
      pronunciation: "AH-noh",
      usage: "A common question word.",
      example: [
        {
          speaker: "A",
          text: "Maupay nga aga!",
          translation: "Good morning!",
        },
        {
          speaker: "B",
          text: "Ano an imo ngaran?",
          translation: "What is your name?",
        },
      ],
    },
    {
      term: "Hin-o",
      meaning: "Who",
      pronunciation: "HIN-oh",
      usage: "A common question word.",
      example: [
        {
          speaker: "",
          text: "Hin-o ka?",
          translation: "Who are you?",
        },
      ],
    },
    {
      term: "Diin",
      meaning: "Where",
      pronunciation: "DEE-in",
      usage: "A common question word.",
      example: [
        {
          speaker: "A",
          text: "Ana an akon ngaran.",
          translation: "My name is Ana.",
        },
        {
          speaker: "B",
          text: "Taga diin ka?",
          translation: "Where are you from?",
        },
      ],
    },
    {
      term: "San-o",
      meaning: "When",
      pronunciation: "SAHN-oh",
      usage: "A common question word.",
      example: [
        {
          speaker: "A",
          text: "San-o ka makadto ha eskwelahan?",
          translation: "When will you go to school?",
        },
        {
          speaker: "B",
          text: "Buwas ako makadto.",
          translation: "I will go tomorrow.",
        },
      ],
    },
    {
      term: "Kay ano",
      meaning: "Why",
      pronunciation: "KAI AH-noh",
      usage: "A common question word.",
      example: [
        {
          speaker: "A",
          text: "Buwas ako makadto.",
          translation: "I will go tomorrow.",
        },
        {
          speaker: "B",
          text: "Kay ano nga diri ka makadto yana?",
          translation: "Why aren't you going today?",
        },
      ],
    },
    {
      term: "Paonan-o",
      meaning: "How",
      pronunciation: "pah-oh-NAHN-oh",
      usage: "A common question word.",
      example: [
        {
          speaker: "A",
          text: "Aada ito hirani ha simbahan.",
          translation: "It is near the church.",
        },
        {
          speaker: "B",
          text: "Paonan-o ako makadto didto?",
          translation: "How can I get there?",
        },
      ],
    },
    {
      term: "Pira",
      meaning: "How many / How much",
      pronunciation: "PEE-rah",
      usage: "A common question word.",
      example: [
        {
          speaker: "",
          text: "Pira na an imo edad?",
          translation: "How old are you?",
        },
      ],
    },
    {
      term: "Hain",
      meaning: "Which",
      pronunciation: "HAH-in",
      usage: "A common question word.",
      example: [
        {
          speaker: "A",
          text: "Pasayloa ako. Hain an eskwelahan?",
          translation: "Excuse me. Where is the school?",
        },
        {
          speaker: "B",
          text: "Aada ito hirani ha simbahan.",
          translation: "It is near the church.",
        },
      ],
    },
    {
      term: "Ngaran",
      meaning: "Name",
      pronunciation: "NGAH-rahn",
      usage: "A common words used in question.",
      example: [
        {
          speaker: "A",
          text: "Ano an imo ngaran?",
          translation: "What is your name?",
        },
        {
          speaker: "B",
          text: "Ben an akon ngaran. Ikaw?",
          translation: "My name is Ben. And you?",
        },
      ],
    },
    {
      term: "Edad",
      meaning: "Age",
      pronunciation: "eh-DAHD",
      usage: "A common words used in question.",
      example: [
        {
          speaker: "",
          text: "Pira na an imo edad?",
          translation: "How old are you?",
        },
      ],
    },
    {
      term: "Lugar",
      meaning: "Place",
      pronunciation: "loo-GAHR",
      usage: "A common words used in question.",
    },
    {
      term: "Balay",
      meaning: "House / Home",
      pronunciation: "BAH-lai",
      usage: "A common words used in question.",
      example: [
        {
          speaker: "A",
          text: "Kay ano nga diri ka makadto yana?",
          translation: "Why aren't you going today?",
        },
        {
          speaker: "B",
          text: "Kay may buruhaton ako ha balay.",
          translation: "Because I have something to do at home.",
        },
      ],
    },
    {
      term: "Eskwelahan",
      meaning: "School",
      pronunciation: "es-kweh-LAH-hahn",
      usage: "A common words used in question.",
      example: [
        {
          speaker: "A",
          text: "Pasayloa ako. Hain an eskwelahan?",
          translation: "Excuse me. Where is the school?",
        },
        {
          speaker: "B",
          text: "Aada ito hirani ha simbahan.",
          translation: "It is near the church.",
        },
      ],
    },
    {
      term: "Sangkay",
      meaning: "Friend",
      pronunciation: "SAHNG-kai",
      usage: "A common words used in question.",
      example: [
        {
          speaker: "",
          text: "Hin-o an imo sangkay?",
          translation: "Who is your friend?",
        },
      ],
    },
    {
      term: "Maestra / Maestro",
      meaning: "Teacher",
      pronunciation: "mah-ES-trah / mah-ES-troh",
      usage: "A common words used in question.",
    },
    {
      term: "Estudyante",
      meaning: "Student",
      pronunciation: "es-too-DYAHN-teh",
      usage: "A common words used in question.",
    },
    {
      term: "Pagkaon",
      meaning: "Food",
      pronunciation: "pahg-kah-OHN",
      usage: "A common words used in question.",
    },
    {
      term: "Tubig",
      meaning: "Water",
      pronunciation: "TOO-big",
      usage: "A common words used in question.",
    },
    {
      term: "Yana",
      meaning: "Today",
      pronunciation: "YAH-nah",
      usage: "A common words used in question.",
      example: [
        {
          speaker: "A",
          text: "Buwas ako makadto.",
          translation: "I will go tomorrow.",
        },
        {
          speaker: "B",
          text: "Kay ano nga diri ka makadto yana?",
          translation: "Why aren't you going today?",
        },
      ],
    },
    {
      term: "Buwas",
      meaning: "Tomorrow",
      pronunciation: "BOO-wahs",
      usage: "A common words used in question.",
      example: [
        {
          speaker: "A",
          text: "Kay may buruhaton ako ha balay.",
          translation: "Because I have something to do at home.",
        },
        {
          speaker: "B",
          text: "Sige, magkitaay kita buwas.",
          translation: "Okay, see you tomorrow.",
        },
      ],
    },
    {
      term: "Dinhi",
      meaning: "Here",
      pronunciation: "DEEN-hee",
      usage: "A common words used in question.",
      example: [
        {
          speaker: "",
          text: "Kay ano nga aada ka dinhi?",
          translation: "Why are you here?",
        },
      ],
    },
    {
      term: "Didto",
      meaning: "There",
      pronunciation: "DEED-toh",
      usage: "A common words used in question.",
      example: [
        {
          speaker: "A",
          text: "Paonan-o ako makadto didto?",
          translation: "How can I get there?",
        },
        {
          speaker: "B",
          text: "Diretso la, katapos liko ha tuo.",
          translation: "Just go straight, then turn right.",
        },
      ],
    },
    {
      term: "Oo",
      meaning: "Yes",
      pronunciation: "oh-OH",
      usage: "From this lesson's word list: short answers and responses.",
    },
    {
      term: "Diri",
      meaning: "No",
      pronunciation: "DEE-ree",
      usage: "From this lesson's word list: short answers and responses.",
      example: [
        {
          speaker: "A",
          text: "Buwas ako makadto.",
          translation: "I will go tomorrow.",
        },
        {
          speaker: "B",
          text: "Kay ano nga diri ka makadto yana?",
          translation: "Why aren't you going today?",
        },
      ],
    },
    {
      term: "Maaram ako",
      meaning: "I know",
      pronunciation: "mah-AH-rahm AH-koh",
      usage: "From this lesson's word list: short answers and responses.",
    },
    {
      term: "Diri ako maaram",
      meaning: "I don't know",
      pronunciation: "DEE-ree AH-koh mah-AH-rahm",
      usage: "From this lesson's word list: short answers and responses.",
    },
    {
      term: "Nasasabtan ko",
      meaning: "I understand",
      pronunciation: "nah-sah-SAHB-tahn koh",
      usage: "From this lesson's word list: short answers and responses.",
    },
    {
      term: "Diri ko nasasabtan",
      meaning: "I don't understand",
      pronunciation: "DEE-ree koh nah-sah-SAHB-tahn",
      usage: "From this lesson's word list: short answers and responses.",
    },
  ],
  patterns: [
    {
      label: "Pattern 1: Asking About Someone",
      pattern: "Ano an imo + Thing?",
      examples: [
        "Ano an imo ngaran?",
        "Ano an imo karuyag?",
      ],
    },
    {
      label: "Pattern 2: Asking How or When",
      pattern: "Question word + ka makadto ha eskwelahan?",
      examples: [
        "Paonan-o ka makadto ha eskwelahan?",
        "San-o ka makadto ha eskwelahan?",
      ],
    },
  ],
  sentences: [
    {
      text: "Ano an imo ngaran?",
      meaning: "What is your name?",
      pronunciation: "AH-noh ahn EE-moh NGAH-rahn",
    },
    {
      text: "Hin-o ka?",
      meaning: "Who are you?",
      pronunciation: "HIN-oh kah",
    },
    {
      text: "Taga diin ka?",
      meaning: "Where are you from?",
      pronunciation: "tah-gah DEE-in kah",
    },
    {
      text: "Hain an iyo balay?",
      meaning: "Where is your house?",
      pronunciation: "HAH-in ahn EE-yoh BAH-lai",
    },
    {
      text: "San-o ka makadto?",
      meaning: "When will you go?",
      pronunciation: "SAHN-oh kah mah-kahd-TOH",
    },
    {
      text: "Kay ano nga aada ka dinhi?",
      meaning: "Why are you here?",
      pronunciation: "KAI AH-noh ngah ah-AH-dah kah DEEN-hee",
    },
    {
      text: "Kumusta ka?",
      meaning: "How are you?",
      pronunciation: "koo-MOOS-tah kah",
    },
    {
      text: "Pira na an imo edad?",
      meaning: "How old are you?",
      pronunciation: "PEE-rah nah ahn EE-moh eh-DAHD",
    },
    {
      text: "Pira ini?",
      meaning: "How much is this?",
      pronunciation: "PEE-rah EE-nee",
    },
    {
      text: "Ano an imo karuyag?",
      meaning: "What do you want?",
      pronunciation: "AH-noh ahn EE-moh kah-roo-YAHG",
    },
    {
      text: "Ngain ka makadto?",
      meaning: "Where are you going?",
      pronunciation: "NGAH-in kah mah-kahd-TOH",
    },
    {
      text: "Nasasabtan mo ba?",
      meaning: "Do you understand?",
      pronunciation: "nah-sah-SAHB-tahn moh bah",
    },
    {
      text: "Hin-o hiya?",
      meaning: "Who is he or she?",
    },
    {
      text: "Hin-o an imo sangkay?",
      meaning: "Who is your friend?",
    },
    {
      text: "Ako hi Ana.",
      meaning: "I am Ana.",
    },
    {
      text: "Hiya hi Maria.",
      meaning: "She is Maria.",
    },
    {
      text: "Hi Juan an akon sangkay.",
      meaning: "Juan is my friend.",
    },
    {
      text: "Ano ini?",
      meaning: "What is this?",
    },
    {
      text: "Libro ini.",
      meaning: "This is a book.",
    },
    {
      text: "An akon ngaran hi Ana.",
      meaning: "My name is Ana.",
    },
    {
      text: "Karuyag ko kumaon.",
      meaning: "I want to eat.",
    },
    {
      text: "Hain an imo balay?",
      meaning: "Where is your house?",
    },
    {
      text: "Taga Samar ako.",
      meaning: "I am from Samar.",
    },
    {
      text: "Aada ha Samar an amon balay.",
      meaning: "Our house is in Samar.",
    },
    {
      text: "Makadto ako ha eskwelahan.",
      meaning: "I am going to school.",
    },
    {
      text: "San-o an imo klase?",
      meaning: "When is your class?",
    },
    {
      text: "San-o kita magkikita?",
      meaning: "When will we meet?",
    },
    {
      text: "Buwas ako makadto.",
      meaning: "I will go tomorrow.",
    },
    {
      text: "Yana an akon klase.",
      meaning: "My class is today.",
    },
    {
      text: "Buwas kita magkikita.",
      meaning: "We will meet tomorrow.",
    },
    {
      text: "Kay ano nga nalipay ka?",
      meaning: "Why are you happy?",
    },
    {
      text: "Paonan-o ini buhaton?",
      meaning: "How is this done?",
    },
    {
      text: "Paonan-o ka makadto ha eskwelahan?",
      meaning: "How do you go to school?",
    },
    {
      text: "Nalipay ako kay nakita ko an akon sangkay.",
      meaning: "I am happy because I saw my friend.",
    },
    {
      text: "Buhata ini hin hinay-hinay.",
      meaning: "Do this slowly.",
    },
    {
      text: "Nasakay ako hin dyip.",
      meaning: "I ride a jeepney.",
    },
    {
      text: "Pira an imo edad?",
      meaning: "How old are you?",
    },
    {
      text: "Pira an imo mga libro?",
      meaning: "How many books do you have?",
    },
    {
      text: "Disiotso anyos ako.",
      meaning: "I am eighteen years old.",
    },
    {
      text: "Baynte pesos ini.",
      meaning: "This costs twenty pesos.",
    },
    {
      text: "Tulo an akon libro.",
      meaning: "I have three books.",
    },
  ],
  conversations: [
    {
      title: "Conversation A: Meeting a New Friend",
      lines: [
        {
          speaker: "Ana",
          text: "Maupay nga aga!",
          translation: "Good morning!",
        },
        {
          speaker: "Ben",
          text: "Maupay nga aga!",
          translation: "Good morning!",
        },
        {
          speaker: "Ana",
          text: "Ano an imo ngaran?",
          translation: "What is your name?",
        },
        {
          speaker: "Ben",
          text: "Ben an akon ngaran. Ikaw?",
          translation: "My name is Ben. And you?",
        },
        {
          speaker: "Ana",
          text: "Ana an akon ngaran.",
          translation: "My name is Ana.",
        },
        {
          speaker: "Ben",
          text: "Taga diin ka?",
          translation: "Where are you from?",
        },
        {
          speaker: "Ana",
          text: "Taga Samar ako.",
          translation: "I am from Samar.",
        },
      ],
      situation: "Ana and Ben: Meeting a New Friend.",
    },
    {
      title: "Conversation B: Asking for Directions",
      lines: [
        {
          speaker: "Mark",
          text: "Pasayloa ako. Hain an eskwelahan?",
          translation: "Excuse me. Where is the school?",
        },
        {
          speaker: "Liza",
          text: "Aada ito hirani ha simbahan.",
          translation: "It is near the church.",
        },
        {
          speaker: "Mark",
          text: "Paonan-o ako makadto didto?",
          translation: "How can I get there?",
        },
        {
          speaker: "Liza",
          text: "Diretso la, katapos liko ha tuo.",
          translation: "Just go straight, then turn right.",
        },
        {
          speaker: "Mark",
          text: "Salamat ha imo bulig!",
          translation: "Thank you for your help!",
        },
        {
          speaker: "Liza",
          text: "Waray sapayan!",
          translation: "You're welcome!",
        },
      ],
      situation: "Mark and Liza: Asking for Directions.",
    },
    {
      title: "Conversation C: Asking About Daily Activities",
      lines: [
        {
          speaker: "Carlo",
          text: "San-o ka makadto ha eskwelahan?",
          translation: "When will you go to school?",
        },
        {
          speaker: "Mia",
          text: "Buwas ako makadto.",
          translation: "I will go tomorrow.",
        },
        {
          speaker: "Carlo",
          text: "Kay ano nga diri ka makadto yana?",
          translation: "Why aren't you going today?",
        },
        {
          speaker: "Mia",
          text: "Kay may buruhaton ako ha balay.",
          translation: "Because I have something to do at home.",
        },
        {
          speaker: "Carlo",
          text: "Sige, magkitaay kita buwas.",
          translation: "Okay, see you tomorrow.",
        },
        {
          speaker: "Mia",
          text: "Sige, magkitaay kita!",
          translation: "Okay, see you!",
        },
      ],
      situation: "Carlo and Mia: Asking About Daily Activities.",
    },
  ],
  languageNotes: [
    {
      title: "A. Asking About People",
      body: [
        "Use hin-o when asking about a person or someone's identity.",
      ],
      examples: [
        {
          text: "Hin-o ka?",
          meaning: "Who are you?",
        },
        {
          text: "Hin-o hiya?",
          meaning: "Who is he or she?",
        },
        {
          text: "Hin-o an imo sangkay?",
          meaning: "Who is your friend?",
        },
      ],
    },
    {
      title: "A. Asking About People",
      body: [
        "Possible responses:",
      ],
      examples: [
        {
          text: "Ako hi Ana.",
          meaning: "I am Ana.",
        },
        {
          text: "Hiya hi Maria.",
          meaning: "She is Maria.",
        },
        {
          text: "Hi Juan an akon sangkay.",
          meaning: "Juan is my friend.",
        },
      ],
    },
    {
      title: "B. Asking About Things",
      body: [
        "Use ano when asking about an object, name, activity, or information.",
      ],
      examples: [
        {
          text: "Ano ini?",
          meaning: "What is this?",
        },
        {
          text: "Ano an imo ngaran?",
          meaning: "What is your name?",
        },
        {
          text: "Ano an imo karuyag?",
          meaning: "What do you want?",
        },
      ],
    },
    {
      title: "B. Asking About Things",
      body: [
        "Possible responses:",
      ],
      examples: [
        {
          text: "Libro ini.",
          meaning: "This is a book.",
        },
        {
          text: "An akon ngaran hi Ana.",
          meaning: "My name is Ana.",
        },
        {
          text: "Karuyag ko kumaon.",
          meaning: "I want to eat.",
        },
      ],
    },
    {
      title: "C. Asking About Places",
      body: [
        "Use location-related question words to ask where someone or something is located.",
      ],
      examples: [
        {
          text: "Taga diin ka?",
          meaning: "Where are you from?",
        },
        {
          text: "Hain an imo balay?",
          meaning: "Where is your house?",
        },
        {
          text: "Ngain ka makadto?",
          meaning: "Where are you going?",
        },
      ],
    },
    {
      title: "C. Asking About Places",
      body: [
        "Possible responses:",
      ],
      examples: [
        {
          text: "Taga Samar ako.",
          meaning: "I am from Samar.",
        },
        {
          text: "Aada ha Samar an amon balay.",
          meaning: "Our house is in Samar.",
        },
        {
          text: "Makadto ako ha eskwelahan.",
          meaning: "I am going to school.",
        },
      ],
    },
    {
      title: "D. Asking About Time",
      body: [
        "Use san-o when asking when something will happen or happened.",
      ],
      examples: [
        {
          text: "San-o ka makadto?",
          meaning: "When will you go?",
        },
        {
          text: "San-o an imo klase?",
          meaning: "When is your class?",
        },
        {
          text: "San-o kita magkikita?",
          meaning: "When will we meet?",
        },
      ],
    },
    {
      title: "D. Asking About Time",
      body: [
        "Possible responses:",
      ],
      examples: [
        {
          text: "Buwas ako makadto.",
          meaning: "I will go tomorrow.",
        },
        {
          text: "Yana an akon klase.",
          meaning: "My class is today.",
        },
        {
          text: "Buwas kita magkikita.",
          meaning: "We will meet tomorrow.",
        },
      ],
    },
    {
      title: "E. Asking About Reasons and Methods",
      body: [
        "Use kay ano to ask why and paonan-o to ask how something is done.",
      ],
      examples: [
        {
          text: "Kay ano nga nalipay ka?",
          meaning: "Why are you happy?",
        },
        {
          text: "Paonan-o ini buhaton?",
          meaning: "How is this done?",
        },
        {
          text: "Paonan-o ka makadto ha eskwelahan?",
          meaning: "How do you go to school?",
        },
      ],
    },
    {
      title: "E. Asking About Reasons and Methods",
      body: [
        "Possible responses:",
      ],
      examples: [
        {
          text: "Nalipay ako kay nakita ko an akon sangkay.",
          meaning: "I am happy because I saw my friend.",
        },
        {
          text: "Buhata ini hin hinay-hinay.",
          meaning: "Do this slowly.",
        },
        {
          text: "Nasakay ako hin dyip.",
          meaning: "I ride a jeepney.",
        },
      ],
    },
    {
      title: "F. Asking About Quantity",
      body: [
        "Use pira when asking about amounts, quantities, prices, or age.",
      ],
      examples: [
        {
          text: "Pira an imo edad?",
          meaning: "How old are you?",
        },
        {
          text: "Pira ini?",
          meaning: "How much is this?",
        },
        {
          text: "Pira an imo mga libro?",
          meaning: "How many books do you have?",
        },
      ],
    },
    {
      title: "F. Asking About Quantity",
      body: [
        "Possible responses:",
      ],
      examples: [
        {
          text: "Disiotso anyos ako.",
          meaning: "I am eighteen years old.",
        },
        {
          text: "Baynte pesos ini.",
          meaning: "This costs twenty pesos.",
        },
        {
          text: "Tulo an akon libro.",
          meaning: "I have three books.",
        },
      ],
    },
    {
      title: "Useful Phrases and Sentences",
      body: [
        "Study the following questions and their possible answers.",
        "Note: Some question forms have more than one natural way of being expressed. For example, diin, hain, and ngain can appear in different location-related questions. Their exact usage should be checked with a Western Samar Waray language evaluator.",
      ],
    },
  ],
  inferredFields: [
    "situation",
    "usage",
    "example",
    "pattern",
    "fill-in",
    "arrange",
    "speaking phrase",
    "target pitch and mood",
    "respelling",
    "example situation",
    "pronunciation tip",
    "completion requirement",
  ],
};
