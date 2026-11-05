import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 4 — imported from "Lesson Plan.pdf", pages 700–714.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
// Fields not given by the plan are INFERRED from this lesson's own content and
// listed in docs/waray-inferred-keys.md: situation, usage, example, pronunciation, pattern, fill-in, arrange, fourth option, speaking phrase, target pitch and mood, respelling, example situation, pronunciation tip, completion requirement.
// The practice answers are INFERRED drafts, not from the PDF. See
// docs/waray-draft-answer-keys.md for each answer and how it was found.

export const warayLesson4: StructuredLesson = {
  lessonId: "waray_4",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 4,
  title: "Days, Months, and Time",
  level: "Beginner",
  unit: "Unit 1 – Fundamentals",
  estimatedDuration: "30–40 minutes",
  prerequisite: "Lessons 1–3 – Basic Greetings and Self-Introduction, Common Expressions and Responses, and Numbers and Counting",
  intro: [
    "People talk about days, dates, and time when making plans, attending school, going to work, or arranging meetings. Learning these expressions will help you understand schedules and communicate when an event will happen.",
    "In this lesson, you will learn how to say the days of the week, months of the year, and common time expressions in Waray.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify and understand the Waray names of the days of the week.",
    "Recognize and use the Waray names of the months.",
    "Understand basic expressions related to today, tomorrow, and yesterday.",
    "Ask and answer simple questions about dates and time.",
    "Use basic time expressions in everyday conversations.",
  ],
  assessment: {
    instructions: "Choose or provide the correct Waray answer. Each question is worth one point.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What is the Waray word for Monday?",
        options: [
          {
            key: "A",
            text: "Lunes",
          },
          {
            key: "B",
            text: "Domingo",
          },
          {
            key: "C",
            text: "Sabado",
          },
          {
            key: "D",
            text: "Ano nga bulan yana?",
          },
        ],
        answerKey: "A",
      },
      {
        id: 2,
        prompt: "What is the Waray word for Wednesday?",
        options: [
          {
            key: "A",
            text: "Huwebes",
          },
          {
            key: "B",
            text: "Miyerkoles",
          },
          {
            key: "C",
            text: "Martes",
          },
          {
            key: "D",
            text: "Buwas an Lunes.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 3,
        prompt: "What is the Waray word for December?",
        options: [
          {
            key: "A",
            text: "Hunyo",
          },
          {
            key: "B",
            text: "Oktubre",
          },
          {
            key: "C",
            text: "Disyembre",
          },
          {
            key: "D",
            text: "Martes",
          },
        ],
        answerKey: "C",
      },
      {
        id: 4,
        prompt: "What does buwas mean?",
        options: [
          {
            key: "A",
            text: "Yesterday",
          },
          {
            key: "B",
            text: "Tomorrow",
          },
          {
            key: "C",
            text: "Today",
          },
          {
            key: "D",
            text: "Semana",
          },
        ],
        answerKey: "B",
      },
      {
        id: 5,
        prompt: "What does bulan mean?",
        options: [
          {
            key: "A",
            text: "Month",
          },
          {
            key: "B",
            text: "Day",
          },
          {
            key: "C",
            text: "Hour",
          },
          {
            key: "D",
            text: "Semana",
          },
        ],
        answerKey: "A",
      },
      {
        id: 6,
        prompt: "How do you ask, \"What time is it?\"",
        options: [
          {
            key: "A",
            text: "Ano nga adlaw yana?",
          },
          {
            key: "B",
            text: "Pira na an oras?",
          },
          {
            key: "C",
            text: "Ano nga bulan yana?",
          },
          {
            key: "D",
            text: "Lunes",
          },
        ],
        answerKey: "B",
      },
      {
        id: 7,
        prompt: "What does Alas-tres na mean?",
        options: [
          {
            key: "A",
            text: "It is three o'clock.",
          },
          {
            key: "B",
            text: "It is five o'clock.",
          },
          {
            key: "C",
            text: "It is twelve o'clock.",
          },
          {
            key: "D",
            text: "Tuig",
          },
        ],
        answerKey: "A",
      },
      {
        id: 8,
        prompt: "Translate: \"Today is Monday.\"",
        options: [
          {
            key: "A",
            text: "Lunes yana.",
          },
          {
            key: "B",
            text: "Buwas an Lunes.",
          },
          {
            key: "C",
            text: "Kahapon an Lunes.",
          },
          {
            key: "D",
            text: "Semana",
          },
        ],
        answerKey: "A",
      },
      {
        id: 9,
        prompt: "Translate: \"See you tomorrow.\"",
        options: [
          {
            key: "A",
            text: "Kitaay kita buwas.",
          },
          {
            key: "B",
            text: "Pira na an oras?",
          },
          {
            key: "C",
            text: "Domingo yana.",
          },
          {
            key: "D",
            text: "Ano nga bulan yana?",
          },
        ],
        answerKey: "A",
      },
      {
        id: 10,
        prompt: "What is the Waray word for year?",
        options: [
          {
            key: "A",
            text: "Semana",
          },
          {
            key: "B",
            text: "Tuig",
          },
          {
            key: "C",
            text: "Minuto",
          },
          {
            key: "D",
            text: "It is five o'clock.",
          },
        ],
        answerKey: "B",
      },
    ],
  },
  extraActivities: [
    {
      title: "Translate the Expressions",
      kind: "translate",
      instructions: "Translate the following expressions into Waray.",
      items: [
        "What day is it today?",
        "What month is it now?",
        "See you tomorrow.",
        "It is three o'clock.",
        "I will go tomorrow.",
      ],
    },
    {
      title: "Arrange Your Schedule",
      kind: "arrange",
      instructions: "Imagine that you are planning a meeting with a friend. Complete the following information using Waray expressions.",
      items: [
        "Day of the meeting: __________",
        "Month: __________",
        "Time: __________",
        "Your response to your friend: __________",
      ],
    },
  ],
  matchActivity: {
    title: "Match the Days",
    instructions: "Match each English day with its correct Waray equivalent.",
    pairs: [
      {
        id: "1",
        term: "Monday",
        answer: "Lunes",
      },
      {
        id: "2",
        term: "Wednesday",
        answer: "Miyerkoles",
      },
      {
        id: "3",
        term: "Friday",
        answer: "Biyernes",
      },
      {
        id: "4",
        term: "Sunday",
        answer: "Domingo",
      },
      {
        id: "5",
        term: "Saturday",
        answer: "Sabado",
      },
    ],
  },
  choiceActivity: {
    title: "Identify the Month",
    questions: [
      {
        id: 1,
        prompt: "February",
        options: [
          {
            key: "A",
            text: "Pebrero",
          },
          {
            key: "B",
            text: "Agosto",
          },
          {
            key: "C",
            text: "Abril",
          },
        ],
        answerKey: "A",
        title: "Identify the Month",
        instructions: "Choose the correct Waray month.",
      },
      {
        id: 2,
        prompt: "June",
        options: [
          {
            key: "A",
            text: "Marso",
          },
          {
            key: "B",
            text: "Hunyo",
          },
          {
            key: "C",
            text: "Enero",
          },
        ],
        answerKey: "B",
        title: "Identify the Month",
        instructions: "Choose the correct Waray month.",
      },
      {
        id: 3,
        prompt: "December",
        options: [
          {
            key: "A",
            text: "Mayo",
          },
          {
            key: "B",
            text: "Setyembre",
          },
          {
            key: "C",
            text: "Disyembre",
          },
        ],
        answerKey: "C",
        title: "Identify the Month",
        instructions: "Choose the correct Waray month.",
      },
      {
        id: 4,
        prompt: "______ yana. (Today)",
        options: [
          {
            key: "A",
            text: "Yana",
          },
          {
            key: "B",
            text: "Buwas",
          },
          {
            key: "C",
            text: "Kahapon",
          },
        ],
        answerKey: "A",
        title: "Complete the Sentence",
        instructions: "Select the correct word to complete each sentence.",
      },
      {
        id: 5,
        prompt: "Makadto ako ______. (I will go tomorrow.)",
        options: [
          {
            key: "A",
            text: "kahapon",
          },
          {
            key: "B",
            text: "buwas",
          },
          {
            key: "C",
            text: "Domingo",
          },
        ],
        answerKey: "B",
        title: "Complete the Sentence",
        instructions: "Select the correct word to complete each sentence.",
      },
      {
        id: 6,
        prompt: "Pira na an ______? (What time is it?)",
        options: [
          {
            key: "A",
            text: "adlaw",
          },
          {
            key: "B",
            text: "bulan",
          },
          {
            key: "C",
            text: "oras",
          },
        ],
        answerKey: "C",
        title: "Complete the Sentence",
        instructions: "Select the correct word to complete each sentence.",
      },
    ],
  },
  answerKeysInferred: true,
  rewards: {
    items: [
      {
        section: "vocabulary",
        label: "Vocabulary Practice + Phrase Recognition",
        xp: 20,
      },
      {
        section: "conversation",
        label: "Guided Conversation",
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
      name: "Calendar Explorer Badge",
      description: "Awarded to learners who successfully complete the lesson and demonstrate knowledge of days, months, and basic time expressions.",
    },
    completionRequirement: "Obtain at least 70% in the lesson assessment. Learners may repeat the activities and assessment if they do not meet the requirement.",
  },
  expectedOutcomes: [
    "Recognize the seven days of the week in Waray.",
    "Identify the twelve months of the year.",
    "Understand basic expressions for today, tomorrow, and yesterday.",
    "Ask and answer simple questions about dates and time.",
    "Recognize common whole-hour expressions.",
  ],
  fillInBlanks: {
    title: "Fill in the Blanks",
    instructions: "Complete each sentence using the appropriate Waray word.",
    items: [
      {
        id: "1",
        sentence: "Ano nga ___ yana?",
        hint: "What day is it today?",
        answer: "adlaw",
        wordBank: [
          "Kulop",
          "Buwas",
          "Setyembre",
          "adlaw",
        ],
      },
      {
        id: "2",
        sentence: "Ano nga ___ yana?",
        hint: "What month is it? / What month is it now?",
        answer: "bulan",
        wordBank: [
          "bulan",
          "Tuig",
          "Oktubre",
          "Martes",
        ],
      },
      {
        id: "3",
        sentence: "Pira na an ___?",
        hint: "What time is it?",
        answer: "oras",
        wordBank: [
          "Lunes",
          "Sabado",
          "oras",
          "Buwas",
        ],
      },
      {
        id: "4",
        sentence: "Kitaay kita ___.",
        hint: "See you tomorrow.",
        answer: "buwas",
        wordBank: [
          "Gab-i",
          "Bulan",
          "buwas",
          "Agosto",
        ],
      },
      {
        id: "5",
        sentence: "Kinadto ako ___.",
        hint: "I went yesterday.",
        answer: "kahapon",
        wordBank: [
          "Minuto",
          "kahapon",
          "Buwas",
          "Yana",
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
          "yana",
          "nga",
          "adlaw",
          "Ano",
        ],
        answer: [
          "Ano",
          "nga",
          "adlaw",
          "yana",
        ],
        display: "Ano nga adlaw yana?",
      },
      {
        id: "2",
        words: [
          "nga",
          "yana",
          "bulan",
          "Ano",
        ],
        answer: [
          "Ano",
          "nga",
          "bulan",
          "yana",
        ],
        display: "Ano nga bulan yana?",
      },
      {
        id: "3",
        words: [
          "an",
          "Pira",
          "na",
          "oras",
        ],
        answer: [
          "Pira",
          "na",
          "an",
          "oras",
        ],
        display: "Pira na an oras?",
      },
      {
        id: "4",
        words: [
          "kita",
          "Kitaay",
          "buwas",
        ],
        answer: [
          "Kitaay",
          "kita",
          "buwas",
        ],
        display: "Kitaay kita buwas.",
      },
      {
        id: "5",
        words: [
          "buwas",
          "Makadto",
          "ako",
        ],
        answer: [
          "Makadto",
          "ako",
          "buwas",
        ],
        display: "Makadto ako buwas.",
      },
    ],
  },
  speaking: {
    title: "Speaking Practice",
    instructions: "Read the following sentences aloud.",
    note: "Learners should listen to the model pronunciation before recording their own voice.",
    practiceLessonId: "waray_4",
    phrases: [
      {
        id: "1",
        text: "Ano nga adlaw yana?",
        respelling: "A-no nga AD-law YA-na?",
        meaning: "What day is it today?",
      },
      {
        id: "2",
        text: "Enero yana.",
        respelling: "e-NE-ro YA-na.",
        meaning: "It is January.",
      },
      {
        id: "3",
        text: "Kitaay kita buwas.",
        respelling: "ki-TA-ay KI-ta BU-was",
        meaning: "See you tomorrow.",
      },
      {
        id: "4",
        text: "Ano nga adlaw kita magkikita?",
        respelling: "A-no nga AD-law KI-ta mag-ki-KI-ta?",
        meaning: "What day will we meet?",
      },
      {
        id: "5",
        text: "Magkikita kita ha Biyernes.",
        respelling: "mag-ki-ki-ta? ki-ta ha bi-yer-nes",
        meaning: "We will meet on Friday.",
      },
      {
        id: "6",
        text: "Mayo an akon paborito nga bulan.",
        respelling: "ma-yo an a-kon pa-bo-ri-to nga bu-lan",
        meaning: "May is my favorite month.",
      },
      {
        id: "7",
        text: "May klase kami kahapon.",
        respelling: "may klah-seh ka-mi ka-ha-pon",
        meaning: "We had class yesterday.",
      },
    ],
  },
  exampleSituation: {
    description: "Imagine this situation from the lesson: Asking About the Day.",
    lead: "You can begin by saying:",
    line: "Ano nga adlaw yana?",
    translation: "What day is it today?",
  },
  vocabularyIntro: "Learn the following words and expressions before proceeding to the activities.",
  pronunciationTip: "Read each syllable clearly. Avoid rushing through longer expressions.",
  selfIntroIntro: "Use these patterns and phrases from the lesson.",
  vocabulary: [
    {
      term: "Domingo",
      meaning: "Sunday",
      pronunciation: "do-MING-go",
      usage: "From this lesson's word list: days of the week.",
      example: [
        {
          speaker: "",
          text: "Domingo an amon adlaw hin pagpahuway.",
          translation: "Sunday is our rest day.",
        },
      ],
    },
    {
      term: "Lunes",
      meaning: "Monday",
      pronunciation: "LOO-nes",
      usage: "From this lesson's word list: days of the week.",
      example: [
        {
          speaker: "A",
          text: "Ano nga adlaw yana?",
          translation: "What day is it today?",
        },
        {
          speaker: "B",
          text: "Lunes yana.",
          translation: "It is Monday today.",
        },
      ],
    },
    {
      term: "Martes",
      meaning: "Tuesday",
      pronunciation: "MAR-tes",
      usage: "From this lesson's word list: days of the week.",
      example: [
        {
          speaker: "",
          text: "Martes yana.",
          translation: "It is Tuesday today.",
        },
      ],
    },
    {
      term: "Miyerkoles",
      meaning: "Wednesday",
      pronunciation: "mi-YER-ko-les",
      usage: "From this lesson's word list: days of the week.",
    },
    {
      term: "Huwebes",
      meaning: "Thursday",
      pronunciation: "hwe-BES",
      usage: "From this lesson's word list: days of the week.",
    },
    {
      term: "Biyernes",
      meaning: "Friday",
      pronunciation: "bi-YER-nes",
      usage: "From this lesson's word list: days of the week.",
      example: [
        {
          speaker: "A",
          text: "Ano nga adlaw kita magkikita?",
          translation: "What day will we meet?",
        },
        {
          speaker: "B",
          text: "Ha Biyernes.",
          translation: "On Friday.",
        },
      ],
    },
    {
      term: "Sabado",
      meaning: "Saturday",
      pronunciation: "sa-BA-do",
      usage: "From this lesson's word list: days of the week.",
    },
    {
      term: "Enero",
      meaning: "January",
      pronunciation: "e-NE-ro",
      usage: "From this lesson's word list: months of the year.",
      example: [
        {
          speaker: "",
          text: "Enero yana.",
          translation: "It is January.",
        },
      ],
    },
    {
      term: "Pebrero",
      meaning: "February",
      pronunciation: "pe-BRE-ro",
      usage: "From this lesson's word list: months of the year.",
    },
    {
      term: "Marso",
      meaning: "March",
      pronunciation: "MAR-so",
      usage: "From this lesson's word list: months of the year.",
    },
    {
      term: "Abril",
      meaning: "April",
      pronunciation: "A-bril",
      usage: "From this lesson's word list: months of the year.",
    },
    {
      term: "Mayo",
      meaning: "May",
      pronunciation: "MA-yo",
      usage: "From this lesson's word list: months of the year.",
      example: [
        {
          speaker: "",
          text: "Mayo an akon paborito nga bulan.",
          translation: "May is my favorite month.",
        },
      ],
    },
    {
      term: "Hunyo",
      meaning: "June",
      pronunciation: "HUN-yo",
      usage: "From this lesson's word list: months of the year.",
    },
    {
      term: "Hulyo",
      meaning: "July",
      pronunciation: "HUL-yo",
      usage: "From this lesson's word list: months of the year.",
    },
    {
      term: "Agosto",
      meaning: "August",
      pronunciation: "a-GOS-to",
      usage: "From this lesson's word list: months of the year.",
    },
    {
      term: "Setyembre",
      meaning: "September",
      pronunciation: "set-YEM-bre",
      usage: "From this lesson's word list: months of the year.",
    },
    {
      term: "Oktubre",
      meaning: "October",
      pronunciation: "ok-TU-bre",
      usage: "From this lesson's word list: months of the year.",
    },
    {
      term: "Nobyembre",
      meaning: "November",
      pronunciation: "no-BYEM-bre",
      usage: "From this lesson's word list: months of the year.",
    },
    {
      term: "Disyembre",
      meaning: "December",
      pronunciation: "dis-YEM-bre",
      usage: "From this lesson's word list: months of the year.",
      example: [
        {
          speaker: "",
          text: "Disyembre an kataposan nga bulan han tuig.",
          translation: "December is the last month of the year.",
        },
      ],
    },
    {
      term: "Adlaw",
      meaning: "Day",
      pronunciation: "AD-law",
      usage: "A common calendar expression.",
      example: [
        {
          speaker: "A",
          text: "Ano nga adlaw yana?",
          translation: "What day is it today?",
        },
        {
          speaker: "B",
          text: "Lunes yana.",
          translation: "It is Monday today.",
        },
      ],
    },
    {
      term: "Semana",
      meaning: "Week",
      pronunciation: "se-MA-na",
      usage: "A common calendar expression.",
    },
    {
      term: "Bulan",
      meaning: "Month",
      pronunciation: "BU-lan",
      usage: "A common calendar expression.",
      example: [
        {
          speaker: "",
          text: "Ano nga bulan yana?",
          translation: "What month is it? / What month is it now?",
        },
      ],
    },
    {
      term: "Tuig",
      meaning: "Year",
      pronunciation: "TOO-ig",
      usage: "A common calendar expression.",
      example: [
        {
          speaker: "",
          text: "Enero an siyahan nga bulan han tuig.",
          translation: "January is the first month of the year.",
        },
      ],
    },
    {
      term: "Yana",
      meaning: "Today",
      pronunciation: "YA-na",
      usage: "A common calendar expression.",
      example: [
        {
          speaker: "A",
          text: "Lunes yana.",
          translation: "It is Monday today.",
        },
        {
          speaker: "B",
          text: "May klase ba kita yana?",
          translation: "Do we have class today?",
        },
      ],
    },
    {
      term: "Buwas",
      meaning: "Tomorrow",
      pronunciation: "BU-was",
      usage: "A common calendar expression.",
      example: [
        {
          speaker: "A",
          text: "Makadto ka ba ha eskwelahan buwas?",
          translation: "Will you go to school tomorrow?",
        },
        {
          speaker: "B",
          text: "Oo, makadto ako.",
          translation: "Yes, I will go.",
        },
      ],
    },
    {
      term: "Kahapon",
      meaning: "Yesterday",
      pronunciation: "ka-HA-pon",
      usage: "A common calendar expression.",
      example: [
        {
          speaker: "",
          text: "Kinadto ako kahapon.",
          translation: "I went yesterday.",
        },
      ],
    },
    {
      term: "Yana nga aga",
      meaning: "This morning",
      pronunciation: "YA-na nga A-ga",
      usage: "A common calendar expression.",
    },
    {
      term: "Yana nga kulop",
      meaning: "This afternoon",
      pronunciation: "YA-na nga KU-lop",
      usage: "A common calendar expression.",
    },
    {
      term: "Yana nga gab-i",
      meaning: "Tonight",
      pronunciation: "YA-na nga GAB-i",
      usage: "A common calendar expression.",
    },
    {
      term: "Sunod nga semana",
      meaning: "Next week",
      pronunciation: "SO-nod nga se-MA-na",
      usage: "A common calendar expression.",
    },
    {
      term: "Sunod nga bulan",
      meaning: "Next month",
      pronunciation: "SO-nod nga BU-lan",
      usage: "A common calendar expression.",
    },
    {
      term: "Kada adlaw",
      meaning: "Every day",
      pronunciation: "KA-da AD-law",
      usage: "A common calendar expression.",
    },
    {
      term: "Oras",
      meaning: "Time / Hour",
      pronunciation: "O-ras",
      usage: "From this lesson's word list: time vocabulary.",
      example: [
        {
          speaker: "A",
          text: "Ha Biyernes.",
          translation: "On Friday.",
        },
        {
          speaker: "B",
          text: "Pira na an oras?",
          translation: "What time is it?",
        },
      ],
    },
    {
      term: "Minuto",
      meaning: "Minute",
      pronunciation: "mi-NU-to",
      usage: "From this lesson's word list: time vocabulary.",
    },
    {
      term: "Aga",
      meaning: "Morning",
      pronunciation: "A-ga",
      usage: "From this lesson's word list: time vocabulary.",
      example: [
        {
          speaker: "A",
          text: "Ano nga oras ka makadto?",
          translation: "What time will you go?",
        },
        {
          speaker: "B",
          text: "Alas-siyete han aga.",
          translation: "At seven in the morning.",
        },
      ],
    },
    {
      term: "Kulop",
      meaning: "Afternoon",
      pronunciation: "KU-lop",
      usage: "From this lesson's word list: time vocabulary.",
      example: [
        {
          speaker: "A",
          text: "Pira na an oras?",
          translation: "What time is it?",
        },
        {
          speaker: "B",
          text: "Alas-tres han kulop.",
          translation: "At three in the afternoon.",
        },
      ],
    },
    {
      term: "Gab-i",
      meaning: "Evening / Night",
      pronunciation: "GAB-i",
      usage: "From this lesson's word list: time vocabulary.",
    },
    {
      term: "Sayo",
      meaning: "Early",
      pronunciation: "SA-yo",
      usage: "From this lesson's word list: time vocabulary.",
    },
    {
      term: "Urhi",
      meaning: "Late",
      pronunciation: "UR-hi",
      usage: "From this lesson's word list: time vocabulary.",
    },
    {
      term: "Yana",
      meaning: "Now",
      pronunciation: "YA-na",
      usage: "From this lesson's word list: time vocabulary.",
      example: [
        {
          speaker: "A",
          text: "May klase ba kita yana?",
          translation: "Do we have class today?",
        },
        {
          speaker: "B",
          text: "Oo, may klase kita.",
          translation: "Yes, we have class.",
        },
      ],
    },
    {
      term: "Ha urhi",
      meaning: "Later",
      pronunciation: "ha UR-hi",
      usage: "From this lesson's word list: time vocabulary.",
    },
    {
      term: "Antes",
      meaning: "Before",
      pronunciation: "AN-tes",
      usage: "From this lesson's word list: time vocabulary.",
    },
    {
      term: "Katapos",
      meaning: "After",
      pronunciation: "ka-TA-pos",
      usage: "From this lesson's word list: time vocabulary.",
    },
    {
      term: "Iskedyul",
      meaning: "Schedule",
      pronunciation: "is-ke-DYUL",
      usage: "From this lesson's word list: time vocabulary.",
    },
    {
      term: "Yana",
      meaning: "Today / Now",
      pronunciation: "ya-na",
      usage: "From the language note \"Talking About Today, Tomorrow, and Yesterday\".",
      example: [
        {
          speaker: "A",
          text: "Ano nga adlaw yana?",
          translation: "What day is it today?",
        },
        {
          speaker: "B",
          text: "Lunes yana.",
          translation: "It is Monday today.",
        },
      ],
    },
    {
      term: "Alas-una",
      meaning: "1:00",
      pronunciation: "a-las-u-na",
      usage: "From the language note \"Telling Time\".",
    },
    {
      term: "Alas-dos",
      meaning: "2:00",
      pronunciation: "a-las-dos",
      usage: "From the language note \"Telling Time\".",
    },
    {
      term: "Alas-tres",
      meaning: "3:00",
      pronunciation: "a-las-tres",
      usage: "From the language note \"Telling Time\".",
      example: [
        {
          speaker: "A",
          text: "Pira na an oras?",
          translation: "What time is it?",
        },
        {
          speaker: "B",
          text: "Alas-tres han kulop.",
          translation: "At three in the afternoon.",
        },
      ],
    },
    {
      term: "Alas-kuwatro",
      meaning: "4:00",
      pronunciation: "a-las-ku-wat-ro",
      usage: "From the language note \"Telling Time\".",
    },
    {
      term: "Alas-singko",
      meaning: "5:00",
      pronunciation: "a-las-sing-ko",
      usage: "From the language note \"Telling Time\".",
      example: [
        {
          speaker: "",
          text: "Alas-singko na.",
          translation: "It is five o'clock.",
        },
      ],
    },
    {
      term: "Alas-sais",
      meaning: "6:00",
      pronunciation: "a-las-sa-is",
      usage: "From the language note \"Telling Time\".",
    },
    {
      term: "Alas-siyete",
      meaning: "7:00",
      pronunciation: "a-las-si-ye-te",
      usage: "From the language note \"Telling Time\".",
      example: [
        {
          speaker: "A",
          text: "Ano nga oras ka makadto?",
          translation: "What time will you go?",
        },
        {
          speaker: "B",
          text: "Alas-siyete han aga.",
          translation: "At seven in the morning.",
        },
      ],
    },
    {
      term: "Alas-otso",
      meaning: "8:00",
      pronunciation: "a-las-ot-so",
      usage: "From the language note \"Telling Time\".",
    },
    {
      term: "Alas-nuwebe",
      meaning: "9:00",
      pronunciation: "a-las-nu-we-be",
      usage: "From the language note \"Telling Time\".",
    },
    {
      term: "Alas-diyes",
      meaning: "10:00",
      pronunciation: "a-las-di-yes",
      usage: "From the language note \"Telling Time\".",
    },
    {
      term: "Alas-onse",
      meaning: "11:00",
      pronunciation: "a-las-on-se",
      usage: "From the language note \"Telling Time\".",
    },
    {
      term: "Alas-dose",
      meaning: "12:00",
      pronunciation: "a-las-do-se",
      usage: "From the language note \"Telling Time\".",
      example: [
        {
          speaker: "",
          text: "Alas-dose na.",
          translation: "It is twelve o'clock.",
        },
      ],
    },
  ],
  greetings: [
    {
      term: "Adlaw",
      meaning: "Day",
      pronunciation: "AD-law",
      usage: "A common calendar expression.",
      example: [
        {
          speaker: "A",
          text: "Ano nga adlaw yana?",
          translation: "What day is it today?",
        },
        {
          speaker: "B",
          text: "Lunes yana.",
          translation: "It is Monday today.",
        },
      ],
    },
    {
      term: "Semana",
      meaning: "Week",
      pronunciation: "se-MA-na",
      usage: "A common calendar expression.",
    },
    {
      term: "Bulan",
      meaning: "Month",
      pronunciation: "BU-lan",
      usage: "A common calendar expression.",
      example: [
        {
          speaker: "",
          text: "Ano nga bulan yana?",
          translation: "What month is it? / What month is it now?",
        },
      ],
    },
    {
      term: "Tuig",
      meaning: "Year",
      pronunciation: "TOO-ig",
      usage: "A common calendar expression.",
      example: [
        {
          speaker: "",
          text: "Enero an siyahan nga bulan han tuig.",
          translation: "January is the first month of the year.",
        },
      ],
    },
    {
      term: "Yana",
      meaning: "Today",
      pronunciation: "YA-na",
      usage: "A common calendar expression.",
      example: [
        {
          speaker: "A",
          text: "Lunes yana.",
          translation: "It is Monday today.",
        },
        {
          speaker: "B",
          text: "May klase ba kita yana?",
          translation: "Do we have class today?",
        },
      ],
    },
    {
      term: "Buwas",
      meaning: "Tomorrow",
      pronunciation: "BU-was",
      usage: "A common calendar expression.",
      example: [
        {
          speaker: "A",
          text: "Makadto ka ba ha eskwelahan buwas?",
          translation: "Will you go to school tomorrow?",
        },
        {
          speaker: "B",
          text: "Oo, makadto ako.",
          translation: "Yes, I will go.",
        },
      ],
    },
    {
      term: "Kahapon",
      meaning: "Yesterday",
      pronunciation: "ka-HA-pon",
      usage: "A common calendar expression.",
      example: [
        {
          speaker: "",
          text: "Kinadto ako kahapon.",
          translation: "I went yesterday.",
        },
      ],
    },
    {
      term: "Yana nga aga",
      meaning: "This morning",
      pronunciation: "YA-na nga A-ga",
      usage: "A common calendar expression.",
    },
    {
      term: "Yana nga kulop",
      meaning: "This afternoon",
      pronunciation: "YA-na nga KU-lop",
      usage: "A common calendar expression.",
    },
    {
      term: "Yana nga gab-i",
      meaning: "Tonight",
      pronunciation: "YA-na nga GAB-i",
      usage: "A common calendar expression.",
    },
    {
      term: "Sunod nga semana",
      meaning: "Next week",
      pronunciation: "SO-nod nga se-MA-na",
      usage: "A common calendar expression.",
    },
    {
      term: "Sunod nga bulan",
      meaning: "Next month",
      pronunciation: "SO-nod nga BU-lan",
      usage: "A common calendar expression.",
    },
    {
      term: "Kada adlaw",
      meaning: "Every day",
      pronunciation: "KA-da AD-law",
      usage: "A common calendar expression.",
    },
  ],
  patterns: [
    {
      label: "Pattern 1: Saying the Day",
      pattern: "Day + yana.",
      examples: [
        "Lunes yana.",
        "Martes yana.",
      ],
    },
    {
      label: "Pattern 2: Asking the Day or Month",
      pattern: "Ano nga + adlaw / bulan + yana?",
      examples: [
        "Ano nga adlaw yana?",
        "Ano nga bulan yana?",
      ],
    },
    {
      label: "Pattern 3: Saying the Time",
      pattern: "Time + na.",
      examples: [
        "Alas-uno na.",
        "Alas-tres na.",
        "Alas-singko na.",
      ],
    },
  ],
  sentences: [
    {
      text: "Ano nga adlaw yana?",
      meaning: "What day is it today?",
      pronunciation: "A-no nga AD-law YA-na?",
    },
    {
      text: "Lunes yana.",
      meaning: "Today is Monday.",
      pronunciation: "LOO-nes YA-na.",
    },
    {
      text: "Ano nga bulan yana?",
      meaning: "What month is it? / What month is it now?",
      pronunciation: "A-no nga BU-lan YA-na?",
    },
    {
      text: "Enero yana.",
      meaning: "It is January.",
      pronunciation: "e-NE-ro YA-na.",
    },
    {
      text: "Pira na an oras?",
      meaning: "What time is it?",
      pronunciation: "PI-ra na an O-ras?",
    },
    {
      text: "Alas-tres na.",
      meaning: "It is three o'clock.",
      pronunciation: "A-las-TRES na.",
    },
    {
      text: "Aga na.",
      meaning: "It is morning.",
      pronunciation: "A-ga na.",
    },
    {
      text: "Kitaay kita buwas.",
      meaning: "See you tomorrow.",
      pronunciation: "ki-TA-ay KI-ta BU-was",
    },
    {
      text: "Makadto ako buwas.",
      meaning: "I will go tomorrow.",
      pronunciation: "ma-KAD-to A-ko BU-was",
    },
    {
      text: "Kinadto ako kahapon.",
      meaning: "I went yesterday.",
      pronunciation: "ki-NAD-to A-ko ka-HA-pon",
    },
    {
      text: "Ano nga adlaw kita magkikita?",
      meaning: "What day will we meet?",
      pronunciation: "A-no nga AD-law KI-ta mag-ki-KI-ta?",
    },
    {
      text: "Bakante ako buwas.",
      meaning: "I am available tomorrow.",
      pronunciation: "ba-KAN-te A-ko BU-was",
    },
    {
      text: "Domingo an amon adlaw hin pagpahuway.",
      meaning: "Sunday is our rest day.",
    },
    {
      text: "May klase ako ha Lunes.",
      meaning: "I have class on Monday.",
    },
    {
      text: "Magkikita kita ha Biyernes.",
      meaning: "We will meet on Friday.",
    },
    {
      text: "Martes yana.",
      meaning: "It is Tuesday today.",
    },
    {
      text: "Enero an siyahan nga bulan han tuig.",
      meaning: "January is the first month of the year.",
    },
    {
      text: "Mayo an akon paborito nga bulan.",
      meaning: "May is my favorite month.",
    },
    {
      text: "Disyembre an kataposan nga bulan han tuig.",
      meaning: "December is the last month of the year.",
    },
    {
      text: "Aada ako yana ha balay.",
      meaning: "I am at home today.",
    },
    {
      text: "Makadto ako ha eskwelahan buwas.",
      meaning: "I will go to school tomorrow.",
    },
    {
      text: "May klase kami kahapon.",
      meaning: "We had class yesterday.",
    },
    {
      text: "Alas-uno na.",
      meaning: "It is one o'clock.",
    },
    {
      text: "Alas-singko na.",
      meaning: "It is five o'clock.",
    },
    {
      text: "Alas-dose na.",
      meaning: "It is twelve o'clock.",
    },
  ],
  conversations: [
    {
      title: "Conversation 1: Asking About the Day",
      lines: [
        {
          speaker: "Ana",
          text: "Ano nga adlaw yana?",
          translation: "What day is it today?",
        },
        {
          speaker: "Ben",
          text: "Lunes yana.",
          translation: "It is Monday today.",
        },
        {
          speaker: "Ana",
          text: "May klase ba kita yana?",
          translation: "Do we have class today?",
        },
        {
          speaker: "Ben",
          text: "Oo, may klase kita.",
          translation: "Yes, we have class.",
        },
      ],
      situation: "Ana and Ben: Asking About the Day.",
    },
    {
      title: "Conversation 2: Asking About a Schedule",
      lines: [
        {
          speaker: "Mia",
          text: "Ano nga adlaw kita magkikita?",
          translation: "What day will we meet?",
        },
        {
          speaker: "Carlo",
          text: "Ha Biyernes.",
          translation: "On Friday.",
        },
        {
          speaker: "Mia",
          text: "Pira na an oras?",
          translation: "What time is it?",
        },
        {
          speaker: "Carlo",
          text: "Alas-tres han kulop.",
          translation: "At three in the afternoon.",
        },
      ],
      situation: "Mia and Carlo: Asking About a Schedule.",
    },
    {
      title: "Conversation 3: Talking About Tomorrow",
      lines: [
        {
          speaker: "Liza",
          text: "Makadto ka ba ha eskwelahan buwas?",
          translation: "Will you go to school tomorrow?",
        },
        {
          speaker: "Mark",
          text: "Oo, makadto ako.",
          translation: "Yes, I will go.",
        },
        {
          speaker: "Liza",
          text: "Ano nga oras ka makadto?",
          translation: "What time will you go?",
        },
        {
          speaker: "Mark",
          text: "Alas-siyete han aga.",
          translation: "At seven in the morning.",
        },
      ],
      situation: "Liza and Mark: Talking About Tomorrow.",
    },
  ],
  languageNotes: [
    {
      title: "A. Talking About Days",
      body: [
        "The days of the week are useful when discussing school schedules, workdays, appointments, and special events.",
      ],
      examples: [
        {
          text: "Domingo an amon adlaw hin pagpahuway.",
          meaning: "Sunday is our rest day.",
        },
        {
          text: "May klase ako ha Lunes.",
          meaning: "I have class on Monday.",
        },
        {
          text: "Magkikita kita ha Biyernes.",
          meaning: "We will meet on Friday.",
        },
      ],
    },
    {
      title: "A. Talking About Days",
      body: [
        "To ask someone what day it is, use:",
      ],
      examples: [
        {
          text: "Ano nga adlaw yana?",
          meaning: "What day is it today?",
        },
      ],
    },
    {
      title: "A. Talking About Days",
      body: [
        "You can answer by naming the day:",
      ],
      examples: [
        {
          text: "Martes yana.",
          meaning: "It is Tuesday today.",
        },
      ],
    },
    {
      title: "B. Talking About Months",
      body: [
        "Months are used when discussing birthdays, holidays, school activities, and important events.",
      ],
      examples: [
        {
          text: "Enero an siyahan nga bulan han tuig.",
          meaning: "January is the first month of the year.",
        },
        {
          text: "Mayo an akon paborito nga bulan.",
          meaning: "May is my favorite month.",
        },
        {
          text: "Disyembre an kataposan nga bulan han tuig.",
          meaning: "December is the last month of the year.",
        },
      ],
    },
    {
      title: "B. Talking About Months",
      body: [
        "To ask about the current month:",
      ],
      examples: [
        {
          text: "Ano nga bulan yana?",
          meaning: "What month is it now?",
        },
      ],
    },
    {
      title: "C. Talking About Today, Tomorrow, and Yesterday",
      body: [
        "These expressions help learners describe when something happens.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Yana",
            right: "Today / Now",
          },
          {
            left: "Buwas",
            right: "Tomorrow",
          },
          {
            left: "Kahapon",
            right: "Yesterday",
          },
          {
            left: "Yana nga aga",
            right: "This morning",
          },
          {
            left: "Yana nga kulop",
            right: "This afternoon",
          },
          {
            left: "Yana nga gab-i",
            right: "Tonight",
          },
        ],
      },
      examples: [
        {
          text: "Aada ako yana ha balay.",
          meaning: "I am at home today.",
        },
        {
          text: "Makadto ako ha eskwelahan buwas.",
          meaning: "I will go to school tomorrow.",
        },
        {
          text: "May klase kami kahapon.",
          meaning: "We had class yesterday.",
        },
      ],
    },
    {
      title: "D. Telling Time",
      body: [
        "Waray speakers commonly use Spanish-derived time expressions in everyday conversation.",
        "The following are common examples:",
      ],
      table: {
        leftHeading: "English Time",
        rightHeading: "Waray Expression",
        rows: [
          {
            left: "1:00",
            right: "Alas-una",
          },
          {
            left: "2:00",
            right: "Alas-dos",
          },
          {
            left: "3:00",
            right: "Alas-tres",
          },
          {
            left: "4:00",
            right: "Alas-kuwatro",
          },
          {
            left: "5:00",
            right: "Alas-singko",
          },
          {
            left: "6:00",
            right: "Alas-sais",
          },
          {
            left: "7:00",
            right: "Alas-siyete",
          },
          {
            left: "8:00",
            right: "Alas-otso",
          },
          {
            left: "9:00",
            right: "Alas-nuwebe",
          },
          {
            left: "10:00",
            right: "Alas-diyes",
          },
          {
            left: "11:00",
            right: "Alas-onse",
          },
          {
            left: "12:00",
            right: "Alas-dose",
          },
        ],
      },
    },
    {
      title: "D. Telling Time",
      body: [
        "For this beginner lesson, focus first on recognizing whole-hour expressions.",
      ],
      examples: [
        {
          text: "Alas-uno na.",
          meaning: "It is one o'clock.",
        },
        {
          text: "Alas-singko na.",
          meaning: "It is five o'clock.",
        },
        {
          text: "Alas-dose na.",
          meaning: "It is twelve o'clock.",
        },
      ],
    },
    {
      title: "D. Telling Time",
      body: [
        "To ask what time it is:",
      ],
      examples: [
        {
          text: "Pira na an oras?",
          meaning: "What time is it?",
        },
      ],
    },
    {
      title: "D. Telling Time",
      body: [
        "To specify morning or evening, include the appropriate time-of-day expression when needed.",
      ],
    },
    {
      title: "A. Days of the Week",
      body: [
        "Remember: These day names are commonly used in everyday speech. Listen to local speakers to become familiar with their natural pronunciation.",
      ],
    },
  ],
  inferredFields: [
    "situation",
    "usage",
    "example",
    "pronunciation",
    "pattern",
    "fill-in",
    "arrange",
    "fourth option",
    "speaking phrase",
    "target pitch and mood",
    "respelling",
    "example situation",
    "pronunciation tip",
    "completion requirement",
  ],
};
