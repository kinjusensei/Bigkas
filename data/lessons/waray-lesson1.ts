import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 1 — imported from "Lesson Plan.pdf", pages 632–649.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
// Fields not given by the plan are INFERRED from this lesson's own content and
// listed in docs/waray-inferred-keys.md: usage, example, pronunciation, pattern, speaking phrase, respelling, target pitch and mood, example situation, pronunciation tip, badge description, completion requirement.
// The practice answers are INFERRED drafts, not from the PDF. See
// docs/waray-draft-answer-keys.md for each answer and how it was found.

export const warayLesson1: StructuredLesson = {
  lessonId: "waray_1",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 1,
  title: "Basic Greetings and Self-Introduction",
  level: "Beginner",
  unit: "Unit 1 – Fundamentals",
  estimatedDuration: "25–30 minutes",
  prerequisite: "None",
  languageVariety: "Western Samar Waray",
  intro: [
    "Lesson Description:",
    "In this lesson, learners will become familiar with basic Waray greetings and expressions used when meeting and interacting with other people. They will learn how to greet someone, ask how they are, introduce themselves, and ask for another person's name and place of origin.",
    "These expressions are useful in everyday situations, especially when meeting new people, talking with friends, or introducing oneself to members of a community where Waray is spoken.",
    "A. Why Learn Greetings and Self-Introduction?",
    "Greetings are among the first expressions people learn when studying a new language. They allow individuals to begin conversations, show politeness, and establish connections with others.",
    "In Waray-speaking communities, greetings and introductions are commonly used when meeting someone for the first time, visiting another person's home, or starting a conversation with friends and acquaintances.",
    "Learning these expressions will help you become more comfortable communicating with Waray speakers.",
    "B. What You Will Learn",
    "In this lesson, you will learn how to say:",
    "• Good morning.",
    "• Good afternoon.",
    "• Good evening.",
    "• How are you?",
    "• I am fine.",
    "• What is your name?",
    "• My name is...",
    "• Where are you from?",
    "• I am from...",
    "By the end of the lesson, you should be able to introduce yourself and exchange basic greetings in Waray.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Recognize and understand common Waray greetings.",
    "Use appropriate greetings depending on the time of day.",
    "Ask and respond to simple questions about someone's well-being.",
    "Introduce themselves using basic Waray expressions.",
    "Ask another person's name and place of origin.",
    "Participate in a short introductory conversation in Waray.",
    "Recognize and practice the pronunciation of basic Waray words and phrases.",
  ],
  assessment: {
    instructions: "Choose the best answer. Each question is worth one point.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What is the Waray translation of \"Good morning\"?",
        options: [
          {
            key: "A",
            text: "Maupay nga gab-i",
          },
          {
            key: "B",
            text: "Maupay nga aga",
          },
          {
            key: "C",
            text: "Waray sapayan",
          },
          {
            key: "D",
            text: "Damo nga salamat",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "What does \"Kumusta ka?\" mean?",
        options: [
          {
            key: "A",
            text: "What is your name?",
          },
          {
            key: "B",
            text: "Where are you from?",
          },
          {
            key: "C",
            text: "How are you?",
          },
          {
            key: "D",
            text: "How old are you?",
          },
        ],
        answerKey: "C",
      },
      {
        id: 3,
        prompt: "Which expression means \"My name is Ana\"?",
        options: [
          {
            key: "A",
            text: "An imo ngaran hi Ana.",
          },
          {
            key: "B",
            text: "An akon ngaran hi Ana.",
          },
          {
            key: "C",
            text: "Taga Ana ako.",
          },
          {
            key: "D",
            text: "Kumusta hi Ana?",
          },
        ],
        answerKey: "B",
      },
      {
        id: 4,
        prompt: "What is the correct response when someone asks \"Taga diin ka?\"",
        options: [
          {
            key: "A",
            text: "Maupay man.",
          },
          {
            key: "B",
            text: "Salamat.",
          },
          {
            key: "C",
            text: "Taga Samar ako.",
          },
          {
            key: "D",
            text: "An akon ngaran hi Juan.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 5,
        prompt: "What does \"Damo nga salamat\" mean?",
        options: [
          {
            key: "A",
            text: "Good afternoon.",
          },
          {
            key: "B",
            text: "Thank you very much.",
          },
          {
            key: "C",
            text: "You're welcome.",
          },
          {
            key: "D",
            text: "Goodbye.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 6,
        prompt: "Which Waray word means \"I\" or \"me\"?",
        options: [
          {
            key: "A",
            text: "Hira",
          },
          {
            key: "B",
            text: "Kamo",
          },
          {
            key: "C",
            text: "Ako",
          },
          {
            key: "D",
            text: "Hiya",
          },
        ],
        answerKey: "C",
      },
      {
        id: 7,
        prompt: "What is the correct Waray expression for \"Good evening\"?",
        options: [
          {
            key: "A",
            text: "Maupay nga kulop",
          },
          {
            key: "B",
            text: "Maupay nga gab-i",
          },
          {
            key: "C",
            text: "Maupay nga aga",
          },
          {
            key: "D",
            text: "Salamat",
          },
        ],
        answerKey: "B",
      },
      {
        id: 8,
        prompt: "Which pronoun refers to \"they\"?",
        options: [
          {
            key: "A",
            text: "Hira",
          },
          {
            key: "B",
            text: "Kami",
          },
          {
            key: "C",
            text: "Kita",
          },
          {
            key: "D",
            text: "Ikaw",
          },
        ],
        answerKey: "A",
      },
      {
        id: 9,
        prompt: "What does \"Waray sapayan\" mean?",
        options: [
          {
            key: "A",
            text: "Thank you.",
          },
          {
            key: "B",
            text: "Please.",
          },
          {
            key: "C",
            text: "You're welcome.",
          },
          {
            key: "D",
            text: "I'm sorry.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 10,
        prompt: "Which sentence correctly introduces someone named Pedro?",
        options: [
          {
            key: "A",
            text: "Taga Pedro ako.",
          },
          {
            key: "B",
            text: "An akon ngaran hi Pedro.",
          },
          {
            key: "C",
            text: "Kumusta hi Pedro?",
          },
          {
            key: "D",
            text: "Maupay nga Pedro.",
          },
        ],
        answerKey: "B",
      },
    ],
  },
  extraActivities: [
    {
      title: "Self-Introduction Practice",
      kind: "other",
      instructions: "Complete the following introduction using your own information. Practice reading your answers aloud.",
      items: [
        "Greeting: __________________________",
        "Name: __________________________",
        "Place of origin: __________________________",
        "Response to \"Kumusta ka?\": __________________________",
        "Expression of gratitude: __________________________",
      ],
      note: "Example:\nMaupay nga aga!\nAn akon ngaran hi Maria.\nTaga Samar ako.\nMaupay man ako.\nSalamat!",
    },
  ],
  matchActivity: {
    title: "Vocabulary Matching",
    instructions: "Match each English expression in Column A with its correct Waray translation in Column B.",
    pairs: [
      {
        id: "1",
        term: "Good morning",
        answer: "Maupay nga aga",
      },
      {
        id: "2",
        term: "Thank you",
        answer: "Salamat",
      },
      {
        id: "3",
        term: "How are you?",
        answer: "Kumusta ka?",
      },
      {
        id: "4",
        term: "Yes",
        answer: "Oo",
      },
      {
        id: "5",
        term: "Goodbye",
        answer: "Babay",
      },
    ],
  },
  choiceActivity: {
    title: "Multiple Choice",
    instructions: "Choose the correct answer for each question.",
    questions: [
      {
        id: 1,
        prompt: "How do you say \"Good evening\" in Waray?",
        options: [
          {
            key: "A",
            text: "Maupay nga aga",
          },
          {
            key: "B",
            text: "Maupay nga gab-i",
          },
          {
            key: "C",
            text: "Salamat",
          },
          {
            key: "D",
            text: "Kumusta ka",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "What does \"Ano an imo ngaran?\" mean?",
        options: [
          {
            key: "A",
            text: "Where are you from?",
          },
          {
            key: "B",
            text: "How are you?",
          },
          {
            key: "C",
            text: "What is your name?",
          },
          {
            key: "D",
            text: "How old are you?",
          },
        ],
        answerKey: "C",
      },
      {
        id: 3,
        prompt: "Which Waray word means \"Thank you\"?",
        options: [
          {
            key: "A",
            text: "Diri",
          },
          {
            key: "B",
            text: "Salamat",
          },
          {
            key: "C",
            text: "Ako",
          },
          {
            key: "D",
            text: "Diin",
          },
        ],
        answerKey: "B",
      },
      {
        id: 4,
        prompt: "How do you say \"I am from Samar\"?",
        options: [
          {
            key: "A",
            text: "Taga Samar ako.",
          },
          {
            key: "B",
            text: "Ano an imo ngaran?",
          },
          {
            key: "C",
            text: "Maupay man.",
          },
          {
            key: "D",
            text: "Kumusta ka?",
          },
        ],
        answerKey: "A",
      },
      {
        id: 5,
        prompt: "Which pronoun means \"we, including the person being addressed\"?",
        options: [
          {
            key: "A",
            text: "Kami",
          },
          {
            key: "B",
            text: "Hira",
          },
          {
            key: "C",
            text: "Kita",
          },
          {
            key: "D",
            text: "Hiya",
          },
        ],
        answerKey: "C",
      },
    ],
  },
  fillInBlanks: {
    title: "Fill in the Blanks",
    instructions: "Complete each Waray sentence using the correct word from the choices.",
    items: [
      {
        id: "1",
        sentence: "Ano an _____ ngaran?",
        answer: "Imo",
        title: "Fill in the Blanks",
        instructions: "Complete each Waray sentence using the correct word from the choices.",
        wordBank: [
          "Akon",
          "Imo",
          "Oo",
          "Salamat",
          "Diin",
        ],
      },
      {
        id: "2",
        sentence: "An _____ ngaran hi Maria.",
        answer: "Akon",
        title: "Fill in the Blanks",
        instructions: "Complete each Waray sentence using the correct word from the choices.",
        wordBank: [
          "Akon",
          "Imo",
          "Oo",
          "Salamat",
          "Diin",
        ],
      },
      {
        id: "3",
        sentence: "Taga _____ ka?",
        answer: "Diin",
        title: "Fill in the Blanks",
        instructions: "Complete each Waray sentence using the correct word from the choices.",
        wordBank: [
          "Akon",
          "Imo",
          "Oo",
          "Salamat",
          "Diin",
        ],
      },
      {
        id: "4",
        sentence: "_____, maupay man ako.",
        answer: "Oo",
        title: "Fill in the Blanks",
        instructions: "Complete each Waray sentence using the correct word from the choices.",
        wordBank: [
          "Akon",
          "Imo",
          "Oo",
          "Salamat",
          "Diin",
        ],
      },
      {
        id: "5",
        sentence: "Damo nga _____.",
        answer: "Salamat",
        title: "Fill in the Blanks",
        instructions: "Complete each Waray sentence using the correct word from the choices.",
        wordBank: [
          "Akon",
          "Imo",
          "Oo",
          "Salamat",
          "Diin",
        ],
      },
    ],
  },
  arrangeWords: {
    title: "Sentence Arrangement",
    instructions: "Arrange the words to form a correct Waray sentence.",
    items: [
      {
        id: "1",
        words: [
          "Samar",
          "ako",
          "Taga",
        ],
        answer: [
          "Taga",
          "Samar",
          "ako",
        ],
        display: "Taga Samar ako.",
      },
      {
        id: "2",
        words: [
          "ngaran",
          "imo",
          "Ano",
          "an",
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
        id: "3",
        words: [
          "hi",
          "akon",
          "Maria",
          "ngaran",
          "An",
        ],
        answer: [
          "An",
          "akon",
          "ngaran",
          "hi",
          "Maria",
        ],
        display: "An akon ngaran hi Maria.",
      },
      {
        id: "4",
        words: [
          "ka",
          "Kumusta",
        ],
        answer: [
          "Kumusta",
          "ka",
        ],
        display: "Kumusta ka?",
      },
      {
        id: "5",
        words: [
          "aga",
          "Maupay",
          "nga",
        ],
        answer: [
          "Maupay",
          "nga",
          "aga",
        ],
        display: "Maupay nga aga",
      },
    ],
  },
  answerKeysInferred: true,
  rewards: {
    items: [
      {
        section: "vocabulary",
        label: "Vocabulary Practice + Useful Phrases Practice",
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
      name: "Maupay nga Pakigkilala Badge",
      description: "Awarded after successfully completing Lesson 1.",
    },
    completionRequirement: "Obtain at least 70% in the lesson assessment. Learners may repeat the activities and assessment if they do not meet the requirement.",
  },
  expectedOutcomes: [
    "To complete Lesson 1, learners should:",
    "Review the vocabulary list.",
    "Complete the useful phrases practice.",
    "Read and understand the guided conversations.",
    "Finish all required practice activities.",
    "Achieve at least 70% in the lesson assessment.",
    "In this lesson, you learned basic Waray greetings and expressions used when meeting other people.",
    "You learned how to:",
    "Greet someone in the morning, afternoon, and evening.",
    "Ask and answer \"How are you?\"",
    "Introduce yourself.",
    "Ask for someone's name.",
    "Ask where someone is from.",
    "Express gratitude and respond politely.",
    "They should also be able to recognize common introductory phrases and understand their meanings when used in everyday conversations.",
  ],
  speaking: {
    title: "Speaking Practice",
    instructions: "Read the following sentences aloud.",
    note: "Learners should listen to the model pronunciation before recording their own voice.",
    practiceLessonId: "waray_1",
    phrases: [
      {
        id: "1",
        text: "An akon ngaran hi Ana.",
        respelling: "an a-kon nga-ran hi ah-nah",
        meaning: "My name is Ana.",
      },
      {
        id: "2",
        text: "Taga Pilipinas ako.",
        respelling: "ta-ga pi-li-pi-nas a-ko",
        meaning: "I am from the Philippines.",
      },
      {
        id: "3",
        text: "Ano an imo ngaran?",
        respelling: "AH-noh ahn EE-moh NGAH-rahn",
        meaning: "What is your name?",
      },
      {
        id: "4",
        text: "Pira na an imo edad?",
        respelling: "PEE-rah nah ahn EE-moh eh-DAHD",
        meaning: "How old are you?",
      },
      {
        id: "5",
        text: "An akon ngaran hi Juan.",
        respelling: "an a-kon nga-ran hi hoo-ahn",
        meaning: "My name is Juan.",
      },
      {
        id: "6",
        text: "Oo, maupay man.",
        respelling: "o-o ma-u-pay man",
        meaning: "Yes, I am fine.",
      },
      {
        id: "7",
        text: "Taga Tacloban ako.",
        respelling: "ta-ga tac-lo-ban a-ko",
        meaning: "I am from Tacloban.",
      },
    ],
  },
  exampleSituation: {
    description: "Imagine this situation from the lesson: Meeting Someone in the Morning.",
    lead: "You can begin by saying:",
    line: "Maupay nga aga!",
    translation: "Good morning!",
  },
  vocabularyIntro: "Learn the following words and expressions before proceeding to the activities.",
  pronunciationTip: "Read each syllable clearly. Avoid rushing through longer expressions.",
  selfIntroIntro: "Use these patterns and phrases from the lesson.",
  vocabulary: [
    {
      term: "Maupay nga aga",
      meaning: "Good morning",
      pronunciation: "ma-u-pay nga a-ga",
      usage: "A common greeting.",
      example: [
        {
          speaker: "A",
          text: "Maupay nga aga!",
          translation: "Good morning!",
        },
        {
          speaker: "B",
          text: "Maupay nga aga!",
          translation: "Good morning!",
        },
      ],
    },
    {
      term: "Maupay nga kulop",
      meaning: "Good afternoon",
      pronunciation: "ma-u-pay nga ku-lop",
      usage: "A common greeting.",
    },
    {
      term: "Maupay nga gab-i",
      meaning: "Good evening",
      pronunciation: "ma-u-pay nga gab-i",
      usage: "A common greeting.",
    },
    {
      term: "Kumusta",
      meaning: "Hello",
      pronunciation: "ku-mus-ta",
      usage: "A common greeting.",
      example: [
        {
          speaker: "A",
          text: "Maupay nga aga!",
          translation: "Good morning!",
        },
        {
          speaker: "B",
          text: "Kumusta ka?",
          translation: "How are you?",
        },
      ],
    },
    {
      term: "Kumusta ka?",
      meaning: "How are you?",
      pronunciation: "ku-mus-ta ka",
      usage: "A common greeting.",
      example: [
        {
          speaker: "A",
          text: "Kumusta ka?",
          translation: "How are you?",
        },
        {
          speaker: "B",
          text: "Maupay man. Salamat. Ikaw?",
          translation: "I'm fine. Thank you. And you?",
        },
      ],
    },
    {
      term: "Maupay man.",
      meaning: "I am fine.",
      pronunciation: "ma-u-pay man",
      usage: "A common greeting.",
      example: [
        {
          speaker: "A",
          text: "Maupay man. Salamat. Ikaw?",
          translation: "I'm fine. Thank you. And you?",
        },
        {
          speaker: "B",
          text: "Maupay man liwat.",
          translation: "I'm fine too.",
        },
      ],
    },
    {
      term: "Salamat.",
      meaning: "Thank you.",
      pronunciation: "sa-la-mat",
      usage: "A common greeting.",
      example: [
        {
          speaker: "A",
          text: "Kumusta ka?",
          translation: "How are you?",
        },
        {
          speaker: "B",
          text: "Maupay man. Salamat. Ikaw?",
          translation: "I'm fine. Thank you. And you?",
        },
      ],
    },
    {
      term: "Damo nga salamat.",
      meaning: "Thank you very much.",
      pronunciation: "da-mo nga sa-la-mat",
      usage: "A common greeting.",
    },
    {
      term: "Waray sapayan.",
      meaning: "You're welcome.",
      pronunciation: "wa-ray sa-pa-yan",
      usage: "A common greeting.",
    },
    {
      term: "Oo",
      meaning: "Yes",
      pronunciation: "o-o",
      usage: "A common responses and expression.",
      example: [
        {
          speaker: "",
          text: "Oo, maupay man.",
          translation: "Yes, I am fine.",
        },
      ],
    },
    {
      term: "Diri",
      meaning: "No",
      pronunciation: "di-ri",
      usage: "A common responses and expression.",
      example: [
        {
          speaker: "",
          text: "Diri, diri ako okay.",
          translation: "No, I am not okay.",
        },
      ],
    },
    {
      term: "Alayon",
      meaning: "Please",
      pronunciation: "a-la-yon",
      usage: "A common responses and expression.",
    },
    {
      term: "Pasayloa ako.",
      meaning: "I'm sorry.",
      pronunciation: "pa-say-lo-a a-ko",
      usage: "A common responses and expression.",
    },
    {
      term: "Pasaylo.",
      meaning: "Excuse me.",
      pronunciation: "pa-say-lo",
      usage: "A common responses and expression.",
    },
    {
      term: "Okay la.",
      meaning: "That's okay.",
      pronunciation: "o-key la",
      usage: "A common responses and expression.",
    },
    {
      term: "Babay.",
      meaning: "Goodbye.",
      pronunciation: "ba-bay",
      usage: "A common responses and expression.",
    },
    {
      term: "Kitaay kita utro.",
      meaning: "See you again.",
      pronunciation: "ki-ta-ay ki-ta ut-ro",
      usage: "A common responses and expression.",
    },
    {
      term: "Ako",
      meaning: "I / Me",
      pronunciation: "A-ko",
      usage: "Refers to the speaker",
      example: [
        {
          speaker: "A",
          text: "An akon ngaran hi Juan.",
          translation: "My name is Juan.",
        },
        {
          speaker: "B",
          text: "Nalilipay ako nga makilala ka.",
          translation: "I am happy to meet you.",
        },
      ],
    },
    {
      term: "Ikaw / Ka",
      meaning: "You (singular)",
      pronunciation: "I-kaw / Ka",
      usage: "Refers to one person being addressed",
      example: [
        {
          speaker: "A",
          text: "Hello! Ano an imo ngaran?",
          translation: "Hello! What is your name?",
        },
        {
          speaker: "B",
          text: "An akon ngaran hi Pedro. Ikaw?",
          translation: "My name is Pedro. And you?",
        },
      ],
    },
    {
      term: "Hiya",
      meaning: "He / She",
      pronunciation: "HEE-yah",
      usage: "Refers to another person",
    },
    {
      term: "Kami",
      meaning: "We (excluding the listener)",
      pronunciation: "Ka-mi",
      usage: "Refers to the speaker and others, but not the listener",
    },
    {
      term: "Kita",
      meaning: "We (including the listener)",
      pronunciation: "ki-ta",
      usage: "Includes both the speaker and listener",
    },
    {
      term: "Kamo",
      meaning: "You (plural)",
      pronunciation: "Ka-mo",
      usage: "Refers to two or more people",
    },
    {
      term: "Hira",
      meaning: "They",
      pronunciation: "Hi-ra",
      usage: "Refers to other people",
    },
    {
      term: "Kami",
      meaning: "We, but not you.",
      pronunciation: "Ka-mi",
      usage: "From this lesson's word list: personal pronouns.",
    },
    {
      term: "Kita",
      meaning: "We, including you.",
      pronunciation: "ki-ta",
      usage: "From this lesson's word list: personal pronouns.",
    },
    {
      term: "Ngaran",
      meaning: "Name",
      pronunciation: "nga-ran",
      usage: "Used in self-introduction.",
      example: [
        {
          speaker: "A",
          text: "An akon ngaran hi Pedro. Ikaw?",
          translation: "My name is Pedro. And you?",
        },
        {
          speaker: "B",
          text: "An akon ngaran hi Juan.",
          translation: "My name is Juan.",
        },
      ],
    },
    {
      term: "Taga",
      meaning: "From",
      pronunciation: "ta-ga",
      usage: "Used in self-introduction.",
      example: [
        {
          speaker: "A",
          text: "Maupay man.",
          translation: "I'm fine.",
        },
        {
          speaker: "B",
          text: "Taga diin ka?",
          translation: "Where are you from?",
        },
      ],
    },
    {
      term: "Diin",
      meaning: "Where",
      pronunciation: "di-in",
      usage: "Used in self-introduction.",
      example: [
        {
          speaker: "A",
          text: "Taga diin ka?",
          translation: "Where are you from?",
        },
        {
          speaker: "B",
          text: "Taga Samar ako. Ikaw?",
          translation: "I am from Samar. And you?",
        },
      ],
    },
    {
      term: "Ano",
      meaning: "What",
      pronunciation: "a-no",
      usage: "Used in self-introduction.",
      example: [
        {
          speaker: "A",
          text: "Hello! Ano an imo ngaran?",
          translation: "Hello! What is your name?",
        },
        {
          speaker: "B",
          text: "An akon ngaran hi Pedro. Ikaw?",
          translation: "My name is Pedro. And you?",
        },
      ],
    },
    {
      term: "Akon",
      meaning: "My",
      pronunciation: "a-kon",
      usage: "Used in self-introduction.",
      example: [
        {
          speaker: "A",
          text: "Hello! Ano an imo ngaran?",
          translation: "Hello! What is your name?",
        },
        {
          speaker: "B",
          text: "An akon ngaran hi Pedro. Ikaw?",
          translation: "My name is Pedro. And you?",
        },
      ],
    },
    {
      term: "Imo",
      meaning: "Your",
      pronunciation: "i-mo",
      usage: "Used in self-introduction.",
      example: [
        {
          speaker: "A",
          text: "Hello! Ano an imo ngaran?",
          translation: "Hello! What is your name?",
        },
        {
          speaker: "B",
          text: "An akon ngaran hi Pedro. Ikaw?",
          translation: "My name is Pedro. And you?",
        },
      ],
    },
    {
      term: "Yana",
      meaning: "Today",
      pronunciation: "ya-na",
      usage: "Used in self-introduction.",
    },
    {
      term: "Edad",
      meaning: "Age",
      pronunciation: "e-dad",
      usage: "Used in self-introduction.",
      example: [
        {
          speaker: "",
          text: "Pira na an imo edad?",
          translation: "How old are you?",
        },
      ],
    },
    {
      term: "Anyos",
      meaning: "Year / Years",
      pronunciation: "an-yos",
      usage: "Used in self-introduction.",
      example: [
        {
          speaker: "",
          text: "Disiotso anyos ako.",
          translation: "I am eighteen years old.",
        },
      ],
    },
  ],
  greetings: [
    {
      term: "Maupay nga aga",
      meaning: "Good morning",
      pronunciation: "ma-u-pay nga a-ga",
      usage: "A common greeting.",
      example: [
        {
          speaker: "A",
          text: "Maupay nga aga!",
          translation: "Good morning!",
        },
        {
          speaker: "B",
          text: "Maupay nga aga!",
          translation: "Good morning!",
        },
      ],
    },
    {
      term: "Maupay nga kulop",
      meaning: "Good afternoon",
      pronunciation: "ma-u-pay nga ku-lop",
      usage: "A common greeting.",
    },
    {
      term: "Maupay nga gab-i",
      meaning: "Good evening",
      pronunciation: "ma-u-pay nga gab-i",
      usage: "A common greeting.",
    },
    {
      term: "Kumusta",
      meaning: "Hello",
      pronunciation: "ku-mus-ta",
      usage: "A common greeting.",
      example: [
        {
          speaker: "A",
          text: "Maupay nga aga!",
          translation: "Good morning!",
        },
        {
          speaker: "B",
          text: "Kumusta ka?",
          translation: "How are you?",
        },
      ],
    },
    {
      term: "Kumusta ka?",
      meaning: "How are you?",
      pronunciation: "ku-mus-ta ka",
      usage: "A common greeting.",
      example: [
        {
          speaker: "A",
          text: "Kumusta ka?",
          translation: "How are you?",
        },
        {
          speaker: "B",
          text: "Maupay man. Salamat. Ikaw?",
          translation: "I'm fine. Thank you. And you?",
        },
      ],
    },
    {
      term: "Maupay man.",
      meaning: "I am fine.",
      pronunciation: "ma-u-pay man",
      usage: "A common greeting.",
      example: [
        {
          speaker: "A",
          text: "Maupay man. Salamat. Ikaw?",
          translation: "I'm fine. Thank you. And you?",
        },
        {
          speaker: "B",
          text: "Maupay man liwat.",
          translation: "I'm fine too.",
        },
      ],
    },
    {
      term: "Salamat.",
      meaning: "Thank you.",
      pronunciation: "sa-la-mat",
      usage: "A common greeting.",
      example: [
        {
          speaker: "A",
          text: "Kumusta ka?",
          translation: "How are you?",
        },
        {
          speaker: "B",
          text: "Maupay man. Salamat. Ikaw?",
          translation: "I'm fine. Thank you. And you?",
        },
      ],
    },
    {
      term: "Damo nga salamat.",
      meaning: "Thank you very much.",
      pronunciation: "da-mo nga sa-la-mat",
      usage: "A common greeting.",
    },
    {
      term: "Waray sapayan.",
      meaning: "You're welcome.",
      pronunciation: "wa-ray sa-pa-yan",
      usage: "A common greeting.",
    },
    {
      term: "Oo",
      meaning: "Yes",
      pronunciation: "o-o",
      usage: "A common responses and expression.",
      example: [
        {
          speaker: "",
          text: "Oo, maupay man.",
          translation: "Yes, I am fine.",
        },
      ],
    },
    {
      term: "Diri",
      meaning: "No",
      pronunciation: "di-ri",
      usage: "A common responses and expression.",
      example: [
        {
          speaker: "",
          text: "Diri, diri ako okay.",
          translation: "No, I am not okay.",
        },
      ],
    },
    {
      term: "Alayon",
      meaning: "Please",
      pronunciation: "a-la-yon",
      usage: "A common responses and expression.",
    },
    {
      term: "Pasayloa ako.",
      meaning: "I'm sorry.",
      pronunciation: "pa-say-lo-a a-ko",
      usage: "A common responses and expression.",
    },
    {
      term: "Pasaylo.",
      meaning: "Excuse me.",
      pronunciation: "pa-say-lo",
      usage: "A common responses and expression.",
    },
    {
      term: "Okay la.",
      meaning: "That's okay.",
      pronunciation: "o-key la",
      usage: "A common responses and expression.",
    },
    {
      term: "Babay.",
      meaning: "Goodbye.",
      pronunciation: "ba-bay",
      usage: "A common responses and expression.",
    },
    {
      term: "Kitaay kita utro.",
      meaning: "See you again.",
      pronunciation: "ki-ta-ay ki-ta ut-ro",
      usage: "A common responses and expression.",
    },
    {
      term: "Ngaran",
      meaning: "Name",
      pronunciation: "nga-ran",
      usage: "Used in self-introduction.",
      example: [
        {
          speaker: "A",
          text: "An akon ngaran hi Pedro. Ikaw?",
          translation: "My name is Pedro. And you?",
        },
        {
          speaker: "B",
          text: "An akon ngaran hi Juan.",
          translation: "My name is Juan.",
        },
      ],
    },
    {
      term: "Taga",
      meaning: "From",
      pronunciation: "ta-ga",
      usage: "Used in self-introduction.",
      example: [
        {
          speaker: "A",
          text: "Maupay man.",
          translation: "I'm fine.",
        },
        {
          speaker: "B",
          text: "Taga diin ka?",
          translation: "Where are you from?",
        },
      ],
    },
    {
      term: "Diin",
      meaning: "Where",
      pronunciation: "di-in",
      usage: "Used in self-introduction.",
      example: [
        {
          speaker: "A",
          text: "Taga diin ka?",
          translation: "Where are you from?",
        },
        {
          speaker: "B",
          text: "Taga Samar ako. Ikaw?",
          translation: "I am from Samar. And you?",
        },
      ],
    },
    {
      term: "Ano",
      meaning: "What",
      pronunciation: "a-no",
      usage: "Used in self-introduction.",
      example: [
        {
          speaker: "A",
          text: "Hello! Ano an imo ngaran?",
          translation: "Hello! What is your name?",
        },
        {
          speaker: "B",
          text: "An akon ngaran hi Pedro. Ikaw?",
          translation: "My name is Pedro. And you?",
        },
      ],
    },
    {
      term: "Akon",
      meaning: "My",
      pronunciation: "a-kon",
      usage: "Used in self-introduction.",
      example: [
        {
          speaker: "A",
          text: "Hello! Ano an imo ngaran?",
          translation: "Hello! What is your name?",
        },
        {
          speaker: "B",
          text: "An akon ngaran hi Pedro. Ikaw?",
          translation: "My name is Pedro. And you?",
        },
      ],
    },
    {
      term: "Imo",
      meaning: "Your",
      pronunciation: "i-mo",
      usage: "Used in self-introduction.",
      example: [
        {
          speaker: "A",
          text: "Hello! Ano an imo ngaran?",
          translation: "Hello! What is your name?",
        },
        {
          speaker: "B",
          text: "An akon ngaran hi Pedro. Ikaw?",
          translation: "My name is Pedro. And you?",
        },
      ],
    },
    {
      term: "Yana",
      meaning: "Today",
      pronunciation: "ya-na",
      usage: "Used in self-introduction.",
    },
    {
      term: "Edad",
      meaning: "Age",
      pronunciation: "e-dad",
      usage: "Used in self-introduction.",
      example: [
        {
          speaker: "",
          text: "Pira na an imo edad?",
          translation: "How old are you?",
        },
      ],
    },
    {
      term: "Anyos",
      meaning: "Year / Years",
      pronunciation: "an-yos",
      usage: "Used in self-introduction.",
      example: [
        {
          speaker: "",
          text: "Disiotso anyos ako.",
          translation: "I am eighteen years old.",
        },
      ],
    },
  ],
  patterns: [
    {
      label: "Pattern 1: Introducing Your Name",
      pattern: "An akon ngaran hi + Name.",
      examples: [
        "An akon ngaran hi Ana.",
        "An akon ngaran hi Juan.",
      ],
    },
    {
      label: "Pattern 2: Saying Where You Are From",
      pattern: "Taga + Place + ako.",
      examples: [
        "Taga Samar ako.",
        "Taga Tacloban ako.",
        "Taga Catbalogan ako.",
      ],
    },
    {
      label: "Pattern 3: Greeting by Time of Day",
      pattern: "Maupay nga + Time of day!",
      examples: [
        "Maupay nga aga!",
        "Maupay nga kulop!",
        "Maupay nga gab-i!",
      ],
    },
  ],
  sentences: [
    {
      text: "Ako hi...",
      meaning: "I am...",
    },
    {
      text: "An akon ngaran hi Ana.",
      meaning: "My name is Ana.",
    },
    {
      text: "Taga Samar ako.",
      meaning: "I am from Samar. / I am from Western Samar.",
    },
    {
      text: "Taga Pilipinas ako.",
      meaning: "I am from the Philippines.",
    },
    {
      text: "Nalilipay ako nga makilala ka.",
      meaning: "I am happy to meet you.",
    },
    {
      text: "Ano an imo ngaran?",
      meaning: "What is your name?",
    },
    {
      text: "Kumusta ka?",
      meaning: "How are you?",
    },
    {
      text: "Taga diin ka?",
      meaning: "Where are you from?",
    },
    {
      text: "Pira na an imo edad?",
      meaning: "How old are you?",
    },
    {
      text: "Okay ka la?",
      meaning: "Are you okay?",
    },
    {
      text: "An akon ngaran hi Juan.",
      meaning: "My name is Juan.",
    },
    {
      text: "Maupay man.",
      meaning: "I am fine.",
    },
    {
      text: "Disiotso anyos ako.",
      meaning: "I am eighteen years old.",
    },
    {
      text: "Oo, maupay man.",
      meaning: "Yes, I am fine.",
    },
    {
      text: "Diri, diri ako okay.",
      meaning: "No, I am not okay.",
    },
    {
      text: "Taga Tacloban ako.",
      meaning: "I am from Tacloban.",
    },
    {
      text: "Taga Catbalogan ako.",
      meaning: "I am from Catbalogan.",
    },
    {
      text: "Taga Calbayog ako.",
      meaning: "I am from Calbayog.",
    },
  ],
  conversations: [
    {
      title: "Conversation 1: Meeting Someone in the Morning",
      lines: [
        {
          speaker: "Ana",
          text: "Maupay nga aga!",
          translation: "Good morning!",
        },
        {
          speaker: "Maria",
          text: "Maupay nga aga!",
          translation: "Good morning!",
        },
        {
          speaker: "Ana",
          text: "Kumusta ka?",
          translation: "How are you?",
        },
        {
          speaker: "Maria",
          text: "Maupay man. Salamat. Ikaw?",
          translation: "I'm fine. Thank you. And you?",
        },
        {
          speaker: "Ana",
          text: "Maupay man liwat.",
          translation: "I'm fine too.",
        },
      ],
      situation: "Greeting someone in the morning. Asking how someone is doing. Responding politely.",
    },
    {
      title: "Conversation 2: Introducing Yourself",
      lines: [
        {
          speaker: "Juan",
          text: "Hello! Ano an imo ngaran?",
          translation: "Hello! What is your name?",
        },
        {
          speaker: "Pedro",
          text: "An akon ngaran hi Pedro. Ikaw?",
          translation: "My name is Pedro. And you?",
        },
        {
          speaker: "Juan",
          text: "An akon ngaran hi Juan.",
          translation: "My name is Juan.",
        },
        {
          speaker: "Pedro",
          text: "Nalilipay ako nga makilala ka.",
          translation: "I am happy to meet you.",
        },
        {
          speaker: "Juan",
          text: "Nalilipay liwat ako nga makilala ka.",
          translation: "I am happy to meet you too.",
        },
      ],
      situation: "Asking for someone's name. Introducing yourself. Expressing happiness about meeting someone.",
    },
    {
      title: "Conversation 3: Asking Where Someone Is From",
      lines: [
        {
          speaker: "Maria",
          text: "Kumusta ka?",
          translation: "How are you?",
        },
        {
          speaker: "Ana",
          text: "Maupay man.",
          translation: "I'm fine.",
        },
        {
          speaker: "Maria",
          text: "Taga diin ka?",
          translation: "Where are you from?",
        },
        {
          speaker: "Ana",
          text: "Taga Samar ako. Ikaw?",
          translation: "I am from Samar. And you?",
        },
        {
          speaker: "Maria",
          text: "Taga Samar liwat ako.",
          translation: "I am also from Samar.",
        },
      ],
      situation: "Asking about someone's place of origin. Answering where you are from. Using liwat to express \"also\" or \"too.\"",
    },
  ],
  savedLanguageNotes: [
    {
      title: "A. Greeting Someone",
      body: [
        "Greetings are used to acknowledge someone and begin a conversation. In Waray, some greetings depend on the time of day.",
      ],
      table: {
        leftHeading: "English",
        rightHeading: "Waray",
        rows: [
          {
            left: "Good morning!",
            right: "Maupay nga aga!",
          },
          {
            left: "Good afternoon!",
            right: "Maupay nga kulop!",
          },
          {
            left: "Good evening!",
            right: "Maupay nga gab-i!",
          },
        ],
      },
    },
    {
      title: "A. Greeting Someone",
      body: [
        "• When meeting someone in the morning: A: Maupay nga aga! B: Maupay nga aga! English: A: Good morning! B: Good morning!",
        "• When meeting someone in the evening: A: Maupay nga gab-i! B: Maupay nga gab-i!",
        "English:",
        "A: Good evening!",
        "B: Good evening!",
      ],
    },
    {
      title: "B. Asking How Someone Is",
      body: [
        "After greeting someone, you can ask how they are doing.",
        "Question:",
        "Kumusta ka?",
        "English Translation:",
        "How are you?",
        "Possible Response:",
        "Maupay man.",
        "English Translation:",
        "I'm fine.",
        "You may also express gratitude after receiving a response.",
        "A: Kumusta ka?",
        "B: Maupay man. Salamat.",
        "English:",
        "A: How are you?",
        "B: I'm fine. Thank you.",
      ],
    },
    {
      title: "C. Asking for Someone's Name",
      body: [
        "When meeting someone for the first time, it is common to ask for their name.",
        "Question:",
        "Ano an imo ngaran?",
        "English Translation:",
        "What is your name?",
        "Response:",
        "An akon ngaran hi Ana.",
        "English Translation:",
        "My name is Ana.",
        "Remember:",
        "• Ano = What",
        "• Imo = Your",
        "• Ngaran = Name",
        "• Akon = My",
      ],
    },
    {
      title: "D. Asking Where Someone Is From",
      body: [
        "You can also ask someone about their hometown or place of origin.",
        "Question:",
        "Taga diin ka?",
        "English Translation:",
        "Where are you from?",
        "Response:",
        "Taga Samar ako.",
        "English Translation:",
        "I am from Samar.",
        "You can replace Samar with the name of another place.",
      ],
      examples: [
        {
          text: "Taga Tacloban ako.",
          meaning: "I am from Tacloban.",
        },
        {
          text: "Taga Catbalogan ako.",
          meaning: "I am from Catbalogan.",
        },
        {
          text: "Taga Calbayog ako.",
          meaning: "I am from Calbayog.",
        },
      ],
    },
    {
      title: "E. Expressing Gratitude",
      body: [
        "When someone helps you or gives you something, you can express appreciation.",
      ],
      table: {
        leftHeading: "Situation",
        rightHeading: "Waray Expression · English",
        rows: [
          {
            left: "Saying thank you",
            right: "Salamat. · Thank you.",
          },
          {
            left: "Showing greater appreciation",
            right: "Damo nga salamat. · Thank you very much.",
          },
          {
            left: "Responding to thanks",
            right: "Waray sapayan. · You're welcome.",
          },
        ],
      },
    },
    {
      title: "E. Expressing Gratitude",
      body: [
        "A: Salamat!",
        "B: Waray sapayan.",
        "English:",
        "A: Thank you!",
        "B: You're welcome.",
      ],
    },
    {
      title: "A. Common Greetings",
      body: [
        "The following words and expressions will help you form basic greetings and introductions.",
      ],
    },
    {
      title: "C. Personal Pronouns",
      body: [
        "Personal pronouns are words used to refer to people. They are important when introducing yourself and talking about other individuals.",
        "Important Note:",
        "Waray distinguishes between kami and kita.",
        "Understanding this distinction will help learners use pronouns correctly in future lessons.",
      ],
    },
    {
      title: "A. Introducing Yourself",
      body: [
        "The following expressions will help you introduce yourself and ask simple questions.",
        "Pattern to Remember:",
        "To introduce your name:",
        "An akon ngaran hi + Name.",
        "Example:",
        "• English: My name is Maria.",
        "• Waray: An akon ngaran hi Maria.",
        "To introduce your place of origin:",
        "Taga + Place + ako.",
        "Example:",
        "• English: I am from Samar.",
        "• Waray: Taga Samar ako.",
      ],
    },
    {
      title: "C. Giving Simple Responses",
      body: [
        "Learning Tip:",
        "Pay attention to the words akon and imo.",
        "• Akon means \"my\" or \"mine.\"",
        "• Imo means \"your\" or \"yours.\"",
        "These words will appear frequently in conversations and introductions.",
      ],
    },
  ],
  inferredFields: [
    "usage",
    "example",
    "pronunciation",
    "pattern",
    "speaking phrase",
    "respelling",
    "target pitch and mood",
    "example situation",
    "pronunciation tip",
    "badge description",
    "completion requirement",
  ],
};
