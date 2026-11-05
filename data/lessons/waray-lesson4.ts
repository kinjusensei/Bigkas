import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 4 — imported from "Lesson Plan.pdf", pages 700–714.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
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
  expressionGroups: [
    {
      title: "A. Days of the Week",
      intro: [
        "Remember: These day names are commonly used in everyday speech. Listen to local speakers to become familiar with their natural pronunciation.",
      ],
      items: [
        {
          term: "Domingo",
          meaning: "Sunday",
          pronunciation: "do-MING-go",
        },
        {
          term: "Lunes",
          meaning: "Monday",
          pronunciation: "LOO-nes",
        },
        {
          term: "Martes",
          meaning: "Tuesday",
          pronunciation: "MAR-tes",
        },
        {
          term: "Miyerkoles",
          meaning: "Wednesday",
          pronunciation: "mi-YER-ko-les",
        },
        {
          term: "Huwebes",
          meaning: "Thursday",
          pronunciation: "hwe-BES",
        },
        {
          term: "Biyernes",
          meaning: "Friday",
          pronunciation: "bi-YER-nes",
        },
        {
          term: "Sabado",
          meaning: "Saturday",
          pronunciation: "sa-BA-do",
        },
      ],
    },
    {
      title: "B. Months of the Year",
      items: [
        {
          term: "Enero",
          meaning: "January",
          pronunciation: "e-NE-ro",
        },
        {
          term: "Pebrero",
          meaning: "February",
          pronunciation: "pe-BRE-ro",
        },
        {
          term: "Marso",
          meaning: "March",
          pronunciation: "MAR-so",
        },
        {
          term: "Abril",
          meaning: "April",
          pronunciation: "A-bril",
        },
        {
          term: "Mayo",
          meaning: "May",
          pronunciation: "MA-yo",
        },
        {
          term: "Hunyo",
          meaning: "June",
          pronunciation: "HUN-yo",
        },
        {
          term: "Hulyo",
          meaning: "July",
          pronunciation: "HUL-yo",
        },
        {
          term: "Agosto",
          meaning: "August",
          pronunciation: "a-GOS-to",
        },
        {
          term: "Setyembre",
          meaning: "September",
          pronunciation: "set-YEM-bre",
        },
        {
          term: "Oktubre",
          meaning: "October",
          pronunciation: "ok-TU-bre",
        },
        {
          term: "Nobyembre",
          meaning: "November",
          pronunciation: "no-BYEM-bre",
        },
        {
          term: "Disyembre",
          meaning: "December",
          pronunciation: "dis-YEM-bre",
        },
      ],
    },
    {
      title: "C. Common Calendar Expressions",
      items: [
        {
          term: "Adlaw",
          meaning: "Day",
          pronunciation: "AD-law",
        },
        {
          term: "Semana",
          meaning: "Week",
          pronunciation: "se-MA-na",
        },
        {
          term: "Bulan",
          meaning: "Month",
          pronunciation: "BU-lan",
        },
        {
          term: "Tuig",
          meaning: "Year",
          pronunciation: "TOO-ig",
        },
        {
          term: "Yana",
          meaning: "Today",
          pronunciation: "YA-na",
        },
        {
          term: "Buwas",
          meaning: "Tomorrow",
          pronunciation: "BU-was",
        },
        {
          term: "Kahapon",
          meaning: "Yesterday",
          pronunciation: "ka-HA-pon",
        },
        {
          term: "Yana nga aga",
          meaning: "This morning",
          pronunciation: "YA-na nga A-ga",
        },
        {
          term: "Yana nga kulop",
          meaning: "This afternoon",
          pronunciation: "YA-na nga KU-lop",
        },
        {
          term: "Yana nga gab-i",
          meaning: "Tonight",
          pronunciation: "YA-na nga GAB-i",
        },
        {
          term: "Sunod nga semana",
          meaning: "Next week",
          pronunciation: "SO-nod nga se-MA-na",
        },
        {
          term: "Sunod nga bulan",
          meaning: "Next month",
          pronunciation: "SO-nod nga BU-lan",
        },
        {
          term: "Kada adlaw",
          meaning: "Every day",
          pronunciation: "KA-da AD-law",
        },
      ],
    },
    {
      title: "D. Time Vocabulary",
      items: [
        {
          term: "Oras",
          meaning: "Time / Hour",
          pronunciation: "O-ras",
        },
        {
          term: "Minuto",
          meaning: "Minute",
          pronunciation: "mi-NU-to",
        },
        {
          term: "Aga",
          meaning: "Morning",
          pronunciation: "A-ga",
        },
        {
          term: "Kulop",
          meaning: "Afternoon",
          pronunciation: "KU-lop",
        },
        {
          term: "Gab-i",
          meaning: "Evening / Night",
          pronunciation: "GAB-i",
        },
        {
          term: "Sayo",
          meaning: "Early",
          pronunciation: "SA-yo",
        },
        {
          term: "Urhi",
          meaning: "Late",
          pronunciation: "UR-hi",
        },
        {
          term: "Yana",
          meaning: "Now",
          pronunciation: "YA-na",
        },
        {
          term: "Ha urhi",
          meaning: "Later",
          pronunciation: "ha UR-hi",
        },
        {
          term: "Antes",
          meaning: "Before",
          pronunciation: "AN-tes",
        },
        {
          term: "Katapos",
          meaning: "After",
          pronunciation: "ka-TA-pos",
        },
        {
          term: "Iskedyul",
          meaning: "Schedule",
          pronunciation: "is-ke-DYUL",
        },
      ],
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
  ],
  situationsTitle: "Useful Phrases and Sentences",
  situationGroups: [
    {
      title: "Useful Phrases and Sentences",
      items: [
        {
          term: "Ano nga adlaw yana?",
          meaning: "What day is it today?",
          pronunciation: "A-no nga AD-law YA-na?",
        },
        {
          term: "Lunes yana.",
          meaning: "Today is Monday.",
          pronunciation: "LOO-nes YA-na.",
        },
        {
          term: "Ano nga bulan yana?",
          meaning: "What month is it?",
          pronunciation: "A-no nga BU-lan YA-na?",
        },
        {
          term: "Enero yana.",
          meaning: "It is January.",
          pronunciation: "e-NE-ro YA-na.",
        },
        {
          term: "Pira na an oras?",
          meaning: "What time is it?",
          pronunciation: "PI-ra na an O-ras?",
        },
        {
          term: "Alas-tres na.",
          meaning: "It is three o'clock.",
          pronunciation: "A-las-TRES na.",
        },
        {
          term: "Aga na.",
          meaning: "It is morning.",
          pronunciation: "A-ga na.",
        },
        {
          term: "Kitaay kita buwas.",
          meaning: "See you tomorrow.",
          pronunciation: "ki-TA-ay KI-ta BU-was",
        },
        {
          term: "Makadto ako buwas.",
          meaning: "I will go tomorrow.",
          pronunciation: "ma-KAD-to A-ko BU-was",
        },
        {
          term: "Kinadto ako kahapon.",
          meaning: "I went yesterday.",
          pronunciation: "ki-NAD-to A-ko ka-HA-pon",
        },
        {
          term: "Ano nga adlaw kita magkikita?",
          meaning: "What day will we meet?",
          pronunciation: "A-no nga AD-law KI-ta mag-ki-KI-ta?",
        },
        {
          term: "Bakante ako buwas.",
          meaning: "I am available tomorrow.",
          pronunciation: "ba-KAN-te A-ko BU-was",
        },
      ],
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
    },
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
  },
  expectedOutcomes: [
    "Recognize the seven days of the week in Waray.",
    "Identify the twelve months of the year.",
    "Understand basic expressions for today, tomorrow, and yesterday.",
    "Ask and answer simple questions about dates and time.",
    "Recognize common whole-hour expressions.",
  ],
};
