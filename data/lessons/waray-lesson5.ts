import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 5 — imported from "Lesson Plan.pdf", pages 715–728.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
// Fields not given by the plan are INFERRED from this lesson's own content and
// listed in docs/waray-inferred-keys.md: situation, usage, example, pronunciation, pattern, fill-in, arrange, fourth option, speaking phrase, target pitch and mood, respelling, example situation, pronunciation tip, completion requirement.
// The practice answers are INFERRED drafts, not from the PDF. See
// docs/waray-draft-answer-keys.md for each answer and how it was found.

export const warayLesson5: StructuredLesson = {
  lessonId: "waray_5",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 5,
  title: "Family Members and Relationships",
  level: "Beginner",
  unit: "Unit 2 – Everyday Vocabulary",
  estimatedDuration: "30–40 minutes",
  prerequisite: "Lessons 1–4",
  intro: [
    "Family is an important part of everyday life. When meeting someone, people often talk about their parents, siblings, grandparents, and other relatives.",
    "In this lesson, you will learn common Waray words for family members and practice using them in simple conversations. You will also learn how to introduce your relatives and explain how they are related to you.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify common family members in Waray.",
    "Recognize words used to describe family relationships.",
    "Introduce family members using simple Waray sentences.",
    "Ask and answer basic questions about someone's family.",
    "Describe the size and relationships of their family.",
  ],
  assessment: {
    instructions: "Choose the correct answer. Each question is worth one point.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What is the Waray word for father?",
        options: [
          {
            key: "A",
            text: "Tatay",
          },
          {
            key: "B",
            text: "Nanay",
          },
          {
            key: "C",
            text: "Lola",
          },
          {
            key: "D",
            text: "How many siblings do you have?",
          },
        ],
        answerKey: "A",
      },
      {
        id: 2,
        prompt: "What does bugto mean?",
        options: [
          {
            key: "A",
            text: "Parent",
          },
          {
            key: "B",
            text: "Sibling",
          },
          {
            key: "C",
            text: "Cousin",
          },
          {
            key: "D",
            text: "Pira na an oras?",
          },
        ],
        answerKey: "B",
      },
      {
        id: 3,
        prompt: "What is the Waray word for younger sibling?",
        options: [
          {
            key: "A",
            text: "Magurang",
          },
          {
            key: "B",
            text: "Manghod",
          },
          {
            key: "C",
            text: "Apo",
          },
          {
            key: "D",
            text: "Tatay",
          },
        ],
        answerKey: "B",
      },
      {
        id: 4,
        prompt: "What does akon mean?",
        options: [
          {
            key: "A",
            text: "My",
          },
          {
            key: "B",
            text: "Your",
          },
          {
            key: "C",
            text: "Their",
          },
          {
            key: "D",
            text: "Tatay",
          },
        ],
        answerKey: "A",
      },
      {
        id: 5,
        prompt: "What is the Waray word for grandmother?",
        options: [
          {
            key: "A",
            text: "Tiya",
          },
          {
            key: "B",
            text: "Lola",
          },
          {
            key: "C",
            text: "Tiyo",
          },
          {
            key: "D",
            text: "Cousin",
          },
        ],
        answerKey: "B",
      },
      {
        id: 6,
        prompt: "How do you say \"This is my family\"?",
        options: [
          {
            key: "A",
            text: "Amo ini an akon pamilya.",
          },
          {
            key: "B",
            text: "Pira na an oras?",
          },
          {
            key: "C",
            text: "Ano nga adlaw yana?",
          },
          {
            key: "D",
            text: "Where is your family?",
          },
        ],
        answerKey: "A",
      },
      {
        id: 7,
        prompt: "What does Pira an imo bugto? mean?",
        options: [
          {
            key: "A",
            text: "Who is your father?",
          },
          {
            key: "B",
            text: "How many siblings do you have?",
          },
          {
            key: "C",
            text: "Where is your family?",
          },
          {
            key: "D",
            text: "Hinigugma ko an akon pamilya.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 8,
        prompt: "What does iya mean?",
        options: [
          {
            key: "A",
            text: "His / Her",
          },
          {
            key: "B",
            text: "My",
          },
          {
            key: "C",
            text: "Our",
          },
          {
            key: "D",
            text: "Apo",
          },
        ],
        answerKey: "A",
      },
      {
        id: 9,
        prompt: "What is the Waray word for home or house?",
        options: [
          {
            key: "A",
            text: "Balay",
          },
          {
            key: "B",
            text: "Bulan",
          },
          {
            key: "C",
            text: "Tuig",
          },
          {
            key: "D",
            text: "Lola",
          },
        ],
        answerKey: "A",
      },
      {
        id: 10,
        prompt: "How do you say \"I love my family\"?",
        options: [
          {
            key: "A",
            text: "Hinigugma ko an akon pamilya.",
          },
          {
            key: "B",
            text: "Makadto ako buwas.",
          },
          {
            key: "C",
            text: "Pira na an oras?",
          },
          {
            key: "D",
            text: "Lola",
          },
        ],
        answerKey: "A",
      },
    ],
  },
  extraActivities: [
    {
      title: "Translate into Waray",
      kind: "translate",
      instructions: "Translate the following sentences into Waray.",
      items: [
        "This is my mother.",
        "I have one brother.",
        "Do you have siblings?",
        "My family lives in Samar.",
        "I love my family.",
      ],
    },
    {
      title: "Introduce Your Family",
      kind: "open",
      instructions: "Imagine that you are introducing your family to a new friend. Complete the following statements in Waray.",
      items: [
        "This is my family: __________",
        "This is my father: __________",
        "This is my mother: __________",
        "I have __________ siblings.",
        "My family lives in __________.",
      ],
      note: "You may use your actual family information or create an imaginary family for this activity.",
    },
  ],
  matchActivity: {
    title: "Match the Family Members",
    instructions: "Match each English word with its correct Waray equivalent.",
    pairs: [
      {
        id: "1",
        term: "Father",
        answer: "Tatay",
      },
      {
        id: "2",
        term: "Mother",
        answer: "Nanay",
      },
      {
        id: "3",
        term: "Brother",
        answer: "Bugto nga lalaki",
      },
      {
        id: "4",
        term: "Grandmother",
        answer: "Lola",
      },
      {
        id: "5",
        term: "Younger sibling",
        answer: "Manghod",
      },
    ],
  },
  choiceActivity: {
    title: "Choose the Correct Answer",
    questions: [
      {
        id: 1,
        prompt: "What is the Waray word for family?",
        options: [
          {
            key: "A",
            text: "Balay",
          },
          {
            key: "B",
            text: "Pamilya",
          },
          {
            key: "C",
            text: "Bugto",
          },
        ],
        answerKey: "B",
        title: "Choose the Correct Answer",
        instructions: "Select the correct Waray word.",
      },
      {
        id: 2,
        prompt: "What does magurang mean?",
        options: [
          {
            key: "A",
            text: "Older sibling",
          },
          {
            key: "B",
            text: "Younger sibling",
          },
          {
            key: "C",
            text: "Grandfather",
          },
        ],
        answerKey: "A",
        title: "Choose the Correct Answer",
        instructions: "Select the correct Waray word.",
      },
      {
        id: 3,
        prompt: "What is the Waray word for grandmother?",
        options: [
          {
            key: "A",
            text: "Tiya",
          },
          {
            key: "B",
            text: "Lola",
          },
          {
            key: "C",
            text: "Nanay",
          },
        ],
        answerKey: "B",
        title: "Choose the Correct Answer",
        instructions: "Select the correct Waray word.",
      },
      {
        id: 4,
        prompt: "What does akon mean?",
        options: [
          {
            key: "A",
            text: "Your",
          },
          {
            key: "B",
            text: "Their",
          },
          {
            key: "C",
            text: "My",
          },
        ],
        answerKey: "C",
        title: "Choose the Correct Answer",
        instructions: "Select the correct Waray word.",
      },
      {
        id: 5,
        prompt: "Amo ini an ______ tatay.",
        options: [
          {
            key: "A",
            text: "akon",
          },
          {
            key: "B",
            text: "imo",
          },
          {
            key: "C",
            text: "ira",
          },
        ],
        answerKey: "A",
        title: "Complete the Sentences",
        instructions: "Choose the correct word to complete each sentence.",
      },
      {
        id: 6,
        prompt: "May duha ako nga ______.",
        options: [
          {
            key: "A",
            text: "bulan",
          },
          {
            key: "B",
            text: "bugto",
          },
          {
            key: "C",
            text: "adlaw",
          },
        ],
        answerKey: "B",
        title: "Complete the Sentences",
        instructions: "Choose the correct word to complete each sentence.",
      },
      {
        id: 7,
        prompt: "Hinigugma ko an akon ______.",
        options: [
          {
            key: "A",
            text: "pamilya",
          },
          {
            key: "B",
            text: "oras",
          },
          {
            key: "C",
            text: "semana",
          },
        ],
        answerKey: "A",
        title: "Complete the Sentences",
        instructions: "Choose the correct word to complete each sentence.",
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
      name: "Family Explorer Badge",
      description: "Awarded to learners who successfully identify family members and use basic Waray expressions to describe family relationships.",
    },
    completionRequirement: "Obtain at least 70% in the lesson assessment. Learners may repeat the activities and assessment if they do not meet the requirement.",
  },
  expectedOutcomes: [
    "Identify common immediate and extended family members in Waray.",
    "Recognize basic family relationship vocabulary.",
    "Introduce their parents, siblings, and relatives.",
    "Ask and answer simple questions about family members.",
    "Use possessive words such as akon, imo, and iya in basic sentences.",
  ],
  fillInBlanks: {
    title: "Fill in the Blanks",
    instructions: "Complete each sentence using the appropriate Waray word.",
    items: [
      {
        id: "1",
        sentence: "Amo ini an akon ___.",
        hint: "This is my family.",
        answer: "pamilya",
        wordBank: [
          "pamilya",
          "Tiya",
          "Lola",
          "Ira",
        ],
      },
      {
        id: "2",
        sentence: "Amo ini an akon ___.",
        hint: "This is my father.",
        answer: "tatay",
        wordBank: [
          "Sobrino",
          "Lolo",
          "tatay",
          "Manghod",
        ],
      },
      {
        id: "3",
        sentence: "Amo ini an akon ___.",
        hint: "This is my mother.",
        answer: "nanay",
        wordBank: [
          "Akon",
          "Kag-anak",
          "nanay",
          "Ig-agaw",
        ],
      },
      {
        id: "4",
        sentence: "May usa ako nga ___ nga lalaki.",
        hint: "I have one brother.",
        answer: "bugto",
        wordBank: [
          "Ira",
          "bugto",
          "Anak",
          "Asawa",
        ],
      },
      {
        id: "5",
        sentence: "Pira an ___ bugto?",
        hint: "How many siblings do you have?",
        answer: "imo",
        wordBank: [
          "Tiyo",
          "Nanay",
          "Asawa",
          "imo",
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
          "akon",
          "pamilya",
          "an",
          "ini",
          "Amo",
        ],
        answer: [
          "Amo",
          "ini",
          "an",
          "akon",
          "pamilya",
        ],
        display: "Amo ini an akon pamilya.",
      },
      {
        id: "2",
        words: [
          "ini",
          "akon",
          "an",
          "Amo",
          "tatay",
        ],
        answer: [
          "Amo",
          "ini",
          "an",
          "akon",
          "tatay",
        ],
        display: "Amo ini an akon tatay.",
      },
      {
        id: "3",
        words: [
          "ini",
          "an",
          "Amo",
          "nanay",
          "akon",
        ],
        answer: [
          "Amo",
          "ini",
          "an",
          "akon",
          "nanay",
        ],
        display: "Amo ini an akon nanay.",
      },
      {
        id: "4",
        words: [
          "bugto",
          "Pira",
          "an",
          "imo",
        ],
        answer: [
          "Pira",
          "an",
          "imo",
          "bugto",
        ],
        display: "Pira an imo bugto?",
      },
      {
        id: "5",
        words: [
          "Duha",
          "akon",
          "bugto",
          "an",
        ],
        answer: [
          "Duha",
          "an",
          "akon",
          "bugto",
        ],
        display: "Duha an akon bugto.",
      },
    ],
  },
  speaking: {
    title: "Speaking Practice",
    instructions: "Read the following sentences aloud.",
    note: "Learners should listen to the model pronunciation before recording their own voice.",
    practiceLessonId: "waray_5",
    phrases: [
      {
        id: "1",
        text: "Amo ini an akon pamilya.",
        respelling: "A-mo I-ni an A-kon pa-MIL-ya",
        meaning: "This is my family.",
      },
      {
        id: "2",
        text: "May usa ako nga bugto nga lalaki.",
        respelling: "May U-sa A-ko nga BUG-to nga la-LA-ki",
        meaning: "I have one brother.",
      },
      {
        id: "3",
        text: "May bugto ka ba?",
        respelling: "May BUG-to ka ba?",
        meaning: "Do you have brothers or sisters?",
      },
      {
        id: "4",
        text: "Hinigugma ko an akon pamilya.",
        respelling: "hi-ni-GUG-ma ko an A-kon pa-MIL-ya",
        meaning: "I love my family.",
      },
      {
        id: "5",
        text: "May bugto ako nga lalaki.",
        respelling: "may bug-to a-ko nga la-la-ki",
        meaning: "I have a brother.",
      },
      {
        id: "6",
        text: "Nag-uukoy kami ha Samar.",
        respelling: "nag-u-u-koy ka-mi ha sa-mar",
        meaning: "We live in Samar.",
      },
      {
        id: "7",
        text: "Iya bugto",
        respelling: "ee-yah bug-to",
        meaning: "His/Her sibling",
      },
    ],
  },
  exampleSituation: {
    description: "Imagine this situation from the lesson: Introducing Family Members.",
    lead: "You can begin by saying:",
    line: "Hin-o ini?",
    translation: "Who is this?",
  },
  vocabularyIntro: "Learn the following words and expressions before proceeding to the activities.",
  pronunciationTip: "Read each syllable clearly. Avoid rushing through longer expressions.",
  selfIntroIntro: "Use these patterns and phrases from the lesson.",
  vocabulary: [
    {
      term: "Pamilya",
      meaning: "Family",
      pronunciation: "pa-MIL-ya",
      usage: "From this lesson's word list: immediate family members.",
      example: [
        {
          speaker: "A",
          text: "Amo ini an akon tatay.",
          translation: "This is my father.",
        },
        {
          speaker: "B",
          text: "Maupay an imo pamilya.",
          translation: "Your family is lovely.",
        },
      ],
    },
    {
      term: "Tatay",
      meaning: "Father",
      pronunciation: "TA-tay",
      usage: "From this lesson's word list: immediate family members.",
      example: [
        {
          speaker: "A",
          text: "Hin-o liwat ini?",
          translation: "Who is this one?",
        },
        {
          speaker: "B",
          text: "Amo ini an akon tatay.",
          translation: "This is my father.",
        },
      ],
    },
    {
      term: "Nanay",
      meaning: "Mother",
      pronunciation: "NA-nay",
      usage: "From this lesson's word list: immediate family members.",
      example: [
        {
          speaker: "A",
          text: "Hin-o ini?",
          translation: "Who is this?",
        },
        {
          speaker: "B",
          text: "Amo ini an akon nanay.",
          translation: "This is my mother.",
        },
      ],
    },
    {
      term: "Kag-anak",
      meaning: "Parents",
      pronunciation: "kag-A-nak",
      usage: "From this lesson's word list: immediate family members.",
    },
    {
      term: "Anak nga lalaki",
      meaning: "Son",
      pronunciation: "A-nak nga la-LA-ki",
      usage: "From this lesson's word list: immediate family members.",
    },
    {
      term: "Anak nga babaye",
      meaning: "Daughter",
      pronunciation: "A-nak nga ba-BA-ye",
      usage: "From this lesson's word list: immediate family members.",
    },
    {
      term: "Anak",
      meaning: "Child",
      pronunciation: "A-nak",
      usage: "From this lesson's word list: immediate family members.",
    },
    {
      term: "Mga anak",
      meaning: "Children",
      pronunciation: "ma-NGA A-nak",
      usage: "From this lesson's word list: immediate family members.",
    },
    {
      term: "Bugto nga lalaki",
      meaning: "Brother",
      pronunciation: "BUG-to nga la-LA-ki",
      usage: "From this lesson's word list: immediate family members.",
      example: [
        {
          speaker: "",
          text: "May usa ako nga bugto nga lalaki.",
          translation: "I have one brother.",
        },
      ],
    },
    {
      term: "Bugto nga babaye",
      meaning: "Sister",
      pronunciation: "BUG-to nga ba-BA-ye",
      usage: "From this lesson's word list: immediate family members.",
      example: [
        {
          speaker: "",
          text: "May usa ako nga bugto nga babaye.",
          translation: "I have one sister.",
        },
      ],
    },
    {
      term: "Bugto",
      meaning: "Sibling",
      pronunciation: "BUG-to",
      usage: "From this lesson's word list: immediate family members.",
      example: [
        {
          speaker: "A",
          text: "May bugto ka ba?",
          translation: "Do you have siblings?",
        },
        {
          speaker: "B",
          text: "Oo, may duha ako nga bugto.",
          translation: "Yes, I have two siblings.",
        },
      ],
    },
    {
      term: "Magurang",
      meaning: "Older sibling",
      pronunciation: "ma-GOO-rang",
      usage: "From this lesson's word list: immediate family members.",
    },
    {
      term: "Manghod",
      meaning: "Younger sibling",
      pronunciation: "MANG-hod",
      usage: "From this lesson's word list: immediate family members.",
    },
    {
      term: "Lolo",
      meaning: "Grandfather",
      pronunciation: "LO-lo",
      usage: "From this lesson's word list: extended family members.",
      example: [
        {
          speaker: "",
          text: "Amo ini an akon lolo.",
          translation: "This is my grandfather.",
        },
      ],
    },
    {
      term: "Lola",
      meaning: "Grandmother",
      pronunciation: "LO-la",
      usage: "From this lesson's word list: extended family members.",
      example: [
        {
          speaker: "",
          text: "Amo ini an akon lola.",
          translation: "This is my grandmother.",
        },
      ],
    },
    {
      term: "Lolo ngan Lola",
      meaning: "Grandparents",
      pronunciation: "LO-lo ngan LO-la",
      usage: "From this lesson's word list: extended family members.",
    },
    {
      term: "Tiyo",
      meaning: "Uncle",
      pronunciation: "TI-yo",
      usage: "From this lesson's word list: extended family members.",
    },
    {
      term: "Tiya",
      meaning: "Aunt",
      pronunciation: "TI-ya",
      usage: "From this lesson's word list: extended family members.",
    },
    {
      term: "Ig-agaw",
      meaning: "Cousin",
      pronunciation: "ig-A-gaw",
      usage: "From this lesson's word list: extended family members.",
    },
    {
      term: "Sobrino",
      meaning: "Nephew",
      pronunciation: "so-BRI-no",
      usage: "From this lesson's word list: extended family members.",
    },
    {
      term: "Sobrina",
      meaning: "Niece",
      pronunciation: "so-BRI-na",
      usage: "From this lesson's word list: extended family members.",
    },
    {
      term: "Apo",
      meaning: "Grandchild",
      pronunciation: "A-po",
      usage: "From this lesson's word list: extended family members.",
    },
    {
      term: "Pariente",
      meaning: "Relative",
      pronunciation: "pa-RYEN-te",
      usage: "From this lesson's word list: extended family members.",
    },
    {
      term: "Bana",
      meaning: "Husband",
      pronunciation: "BA-na",
      usage: "From this lesson's word list: family and relationship vocabulary.",
    },
    {
      term: "Asawa",
      meaning: "Wife",
      pronunciation: "a-SA-wa",
      usage: "From this lesson's word list: family and relationship vocabulary.",
    },
    {
      term: "Kasado",
      meaning: "Married",
      pronunciation: "ka-SA-do",
      usage: "From this lesson's word list: family and relationship vocabulary.",
    },
    {
      term: "Solo",
      meaning: "Single / Unmarried",
      pronunciation: "SO-lo",
      usage: "From this lesson's word list: family and relationship vocabulary.",
    },
    {
      term: "Kapamilya",
      meaning: "Family member",
      pronunciation: "ka-pa-MIL-ya",
      usage: "From this lesson's word list: family and relationship vocabulary.",
    },
    {
      term: "Hinigugma",
      meaning: "Love",
      pronunciation: "hi-ni-GUG-ma",
      usage: "From this lesson's word list: family and relationship vocabulary.",
      example: [
        {
          speaker: "",
          text: "Hinigugma ko an akon pamilya.",
          translation: "I love my family.",
        },
      ],
    },
    {
      term: "Higugmaon",
      meaning: "To love",
      pronunciation: "hi-gug-MA-on",
      usage: "From this lesson's word list: family and relationship vocabulary.",
    },
    {
      term: "Balay",
      meaning: "Home",
      pronunciation: "ba-LAY",
      usage: "From this lesson's word list: family and relationship vocabulary.",
      example: [
        {
          speaker: "",
          text: "Mag-upod kami ha balay.",
          translation: "We are together at home.",
        },
      ],
    },
    {
      term: "Mag-upod",
      meaning: "Together",
      pronunciation: "mag-U-pod",
      usage: "From this lesson's word list: family and relationship vocabulary.",
      example: [
        {
          speaker: "A",
          text: "Nag-uukoy kami ha Samar.",
          translation: "We live in Samar.",
        },
        {
          speaker: "B",
          text: "Maupay nga mag-upod an pamilya.",
          translation: "It is nice for the family to be together.",
        },
      ],
    },
    {
      term: "Akon",
      meaning: "My",
      pronunciation: "a-kon",
      usage: "From the language note \"Important Grammar: My and Your\".",
      example: [
        {
          speaker: "A",
          text: "Amo ini an akon nanay.",
          translation: "This is my mother.",
        },
        {
          speaker: "B",
          text: "Hin-o liwat ini?",
          translation: "Who is this one?",
        },
      ],
    },
    {
      term: "Imo",
      meaning: "Your",
      pronunciation: "i-mo",
      usage: "From the language note \"Important Grammar: My and Your\".",
      example: [
        {
          speaker: "A",
          text: "Amo ini an akon tatay.",
          translation: "This is my father.",
        },
        {
          speaker: "B",
          text: "Maupay an imo pamilya.",
          translation: "Your family is lovely.",
        },
      ],
    },
    {
      term: "Iya",
      meaning: "His / Her",
      pronunciation: "EE-yah",
      usage: "From the language note \"Important Grammar: My and Your\".",
      example: [
        {
          speaker: "",
          text: "Iya bugto",
          translation: "His/Her sibling",
        },
      ],
    },
    {
      term: "Amon",
      meaning: "Our (excluding the listener)",
      pronunciation: "AH-mohn",
      usage: "From the language note \"Important Grammar: My and Your\".",
      example: [
        {
          speaker: "A",
          text: "Damo ba kamo ha pamilya?",
          translation: "Are there many of you in the family?",
        },
        {
          speaker: "B",
          text: "Oo, dako an amon pamilya.",
          translation: "Yes, our family is big.",
        },
      ],
    },
    {
      term: "Aton",
      meaning: "Our (including the listener)",
      pronunciation: "AH-tohn",
      usage: "From the language note \"Important Grammar: My and Your\".",
      example: [
        {
          speaker: "",
          text: "Aton pamilya",
          translation: "Our family (including you)",
        },
      ],
    },
    {
      term: "Ira",
      meaning: "Their",
      pronunciation: "EE-rah",
      usage: "From the language note \"Important Grammar: My and Your\".",
      example: [
        {
          speaker: "",
          text: "Ira lolo",
          translation: "Their grandfather",
        },
      ],
    },
  ],
  greetings: [
    {
      term: "Bana",
      meaning: "Husband",
      pronunciation: "BA-na",
      usage: "From this lesson's word list: family and relationship vocabulary.",
    },
    {
      term: "Asawa",
      meaning: "Wife",
      pronunciation: "a-SA-wa",
      usage: "From this lesson's word list: family and relationship vocabulary.",
    },
    {
      term: "Kasado",
      meaning: "Married",
      pronunciation: "ka-SA-do",
      usage: "From this lesson's word list: family and relationship vocabulary.",
    },
    {
      term: "Solo",
      meaning: "Single / Unmarried",
      pronunciation: "SO-lo",
      usage: "From this lesson's word list: family and relationship vocabulary.",
    },
    {
      term: "Kapamilya",
      meaning: "Family member",
      pronunciation: "ka-pa-MIL-ya",
      usage: "From this lesson's word list: family and relationship vocabulary.",
    },
    {
      term: "Hinigugma",
      meaning: "Love",
      pronunciation: "hi-ni-GUG-ma",
      usage: "From this lesson's word list: family and relationship vocabulary.",
      example: [
        {
          speaker: "",
          text: "Hinigugma ko an akon pamilya.",
          translation: "I love my family.",
        },
      ],
    },
    {
      term: "Higugmaon",
      meaning: "To love",
      pronunciation: "hi-gug-MA-on",
      usage: "From this lesson's word list: family and relationship vocabulary.",
    },
    {
      term: "Balay",
      meaning: "Home",
      pronunciation: "ba-LAY",
      usage: "From this lesson's word list: family and relationship vocabulary.",
      example: [
        {
          speaker: "",
          text: "Mag-upod kami ha balay.",
          translation: "We are together at home.",
        },
      ],
    },
    {
      term: "Mag-upod",
      meaning: "Together",
      pronunciation: "mag-U-pod",
      usage: "From this lesson's word list: family and relationship vocabulary.",
      example: [
        {
          speaker: "A",
          text: "Nag-uukoy kami ha Samar.",
          translation: "We live in Samar.",
        },
        {
          speaker: "B",
          text: "Maupay nga mag-upod an pamilya.",
          translation: "It is nice for the family to be together.",
        },
      ],
    },
  ],
  patterns: [
    {
      label: "Pattern 1: Introducing a Family Member",
      pattern: "Amo ini an akon + Family member.",
      examples: [
        "Amo ini an akon pamilya.",
        "Amo ini an akon tatay.",
        "Amo ini an akon nanay.",
      ],
    },
    {
      label: "Pattern 2: Saying You Have a Sibling",
      pattern: "May bugto ako nga + lalaki / babaye.",
      examples: [
        "May bugto ako nga lalaki.",
        "May bugto ako nga babaye.",
      ],
    },
  ],
  sentences: [
    {
      text: "Amo ini an akon pamilya.",
      meaning: "This is my family.",
      pronunciation: "A-mo I-ni an A-kon pa-MIL-ya",
    },
    {
      text: "Amo ini an akon tatay.",
      meaning: "This is my father.",
      pronunciation: "A-mo I-ni an A-kon TA-tay",
    },
    {
      text: "Amo ini an akon nanay.",
      meaning: "This is my mother.",
      pronunciation: "A-mo I-ni an A-kon NA-nay",
    },
    {
      text: "May usa ako nga bugto nga lalaki.",
      meaning: "I have one brother.",
      pronunciation: "May U-sa A-ko nga BUG-to nga la-LA-ki",
    },
    {
      text: "May usa ako nga bugto nga babaye.",
      meaning: "I have one sister.",
      pronunciation: "May U-sa A-ko nga BUG-to nga ba-BA-ye",
    },
    {
      text: "Pira an imo bugto?",
      meaning: "How many siblings do you have?",
      pronunciation: "PI-ra an I-mo BUG-to?",
    },
    {
      text: "Duha an akon bugto.",
      meaning: "I have two siblings.",
      pronunciation: "DU-ha an A-kon BUG-to",
    },
    {
      text: "May bugto ka ba?",
      meaning: "Do you have brothers or sisters?",
      pronunciation: "May BUG-to ka ba?",
    },
    {
      text: "Hin-o ini?",
      meaning: "Who is this?",
      pronunciation: "HI-no I-ni?",
    },
    {
      text: "Amo ini an akon lola.",
      meaning: "This is my grandmother.",
      pronunciation: "A-mo I-ni an A-kon LO-la",
    },
    {
      text: "Nag-uukoy an akon pamilya ha Samar.",
      meaning: "My family lives in Samar.",
      pronunciation: "nag-U-u-koy an A-kon pa-MIL-ya ha SA-mar",
    },
    {
      text: "Hinigugma ko an akon pamilya.",
      meaning: "I love my family.",
      pronunciation: "hi-ni-GUG-ma ko an A-kon pa-MIL-ya",
    },
    {
      text: "Amo ini an akon lolo.",
      meaning: "This is my grandfather.",
    },
    {
      text: "May bugto ako.",
      meaning: "I have a sibling.",
    },
    {
      text: "May duha ako nga bugto.",
      meaning: "I have two siblings.",
    },
    {
      text: "May bugto ako nga lalaki.",
      meaning: "I have a brother.",
    },
    {
      text: "May bugto ako nga babaye.",
      meaning: "I have a sister.",
    },
    {
      text: "Damo kami ha pamilya.",
      meaning: "There are many of us in the family.",
    },
    {
      text: "Gutiay la an amon pamilya.",
      meaning: "Our family is small.",
    },
    {
      text: "Nag-uukoy kami ha Samar.",
      meaning: "We live in Samar.",
    },
    {
      text: "Mag-upod kami ha balay.",
      meaning: "We are together at home.",
    },
    {
      text: "Akon tatay",
      meaning: "My father",
    },
    {
      text: "Imo nanay",
      meaning: "Your mother",
    },
    {
      text: "Iya bugto",
      meaning: "His/Her sibling",
    },
    {
      text: "Amon pamilya",
      meaning: "Our family (excluding you)",
    },
    {
      text: "Aton pamilya",
      meaning: "Our family (including you)",
    },
    {
      text: "Ira lolo",
      meaning: "Their grandfather",
    },
  ],
  conversations: [
    {
      title: "Conversation 1: Introducing Family Members",
      lines: [
        {
          speaker: "Ana",
          text: "Hin-o ini?",
          translation: "Who is this?",
        },
        {
          speaker: "Ben",
          text: "Amo ini an akon nanay.",
          translation: "This is my mother.",
        },
        {
          speaker: "Ana",
          text: "Hin-o liwat ini?",
          translation: "Who is this one?",
        },
        {
          speaker: "Ben",
          text: "Amo ini an akon tatay.",
          translation: "This is my father.",
        },
        {
          speaker: "Ana",
          text: "Maupay an imo pamilya.",
          translation: "Your family is lovely.",
        },
      ],
      situation: "Ana and Ben: Introducing Family Members.",
    },
    {
      title: "Conversation 2: Asking About Siblings",
      lines: [
        {
          speaker: "Mia",
          text: "May bugto ka ba?",
          translation: "Do you have siblings?",
        },
        {
          speaker: "Carlo",
          text: "Oo, may duha ako nga bugto.",
          translation: "Yes, I have two siblings.",
        },
        {
          speaker: "Mia",
          text: "Lalaki ba hira o babaye?",
          translation: "Are they boys or girls?",
        },
        {
          speaker: "Carlo",
          text: "Usa nga lalaki ngan usa nga babaye.",
          translation: "One boy and one girl.",
        },
        {
          speaker: "Mia",
          text: "Maupay!",
          translation: "Nice!",
        },
      ],
      situation: "Mia and Carlo: Asking About Siblings.",
    },
    {
      title: "Conversation 3: Talking About Family",
      lines: [
        {
          speaker: "Liza",
          text: "Damo ba kamo ha pamilya?",
          translation: "Are there many of you in the family?",
        },
        {
          speaker: "Mark",
          text: "Oo, dako an amon pamilya.",
          translation: "Yes, our family is big.",
        },
        {
          speaker: "Liza",
          text: "Diin kamo nauukoy?",
          translation: "Where do you live?",
        },
        {
          speaker: "Mark",
          text: "Nag-uukoy kami ha Samar.",
          translation: "We live in Samar.",
        },
        {
          speaker: "Liza",
          text: "Maupay nga mag-upod an pamilya.",
          translation: "It is nice for the family to be together.",
        },
      ],
      situation: "Liza and Mark: Talking About Family.",
    },
  ],
  savedLanguageNotes: [
    {
      title: "A. Identifying Family Members",
      body: [
        "To talk about family, begin by learning the words for immediate family members.",
      ],
      examples: [
        {
          text: "Tatay",
          meaning: "Father",
        },
        {
          text: "Nanay",
          meaning: "Mother",
        },
        {
          text: "Anak",
          meaning: "Child",
        },
        {
          text: "Bugto",
          meaning: "Sibling",
        },
        {
          text: "Lolo",
          meaning: "Grandfather",
        },
        {
          text: "Lola",
          meaning: "Grandmother",
        },
      ],
    },
    {
      title: "A. Identifying Family Members",
      body: [
        "In Waray, bugto can refer to a sibling. To specify whether the sibling is male or female, you can use:",
      ],
      examples: [
        {
          text: "Bugto nga lalaki",
          meaning: "Brother",
        },
        {
          text: "Bugto nga babaye",
          meaning: "Sister",
        },
      ],
    },
    {
      title: "A. Identifying Family Members",
      body: [
        "The terms magurang and manghod can help describe the age relationship between siblings:",
      ],
      examples: [
        {
          text: "Magurang",
          meaning: "Older sibling",
        },
        {
          text: "Manghod",
          meaning: "Younger sibling",
        },
      ],
    },
    {
      title: "B. Introducing Your Family",
      body: [
        "You can use the expression:",
      ],
      examples: [
        {
          text: "Amo ini an akon pamilya.",
          meaning: "This is my family.",
        },
      ],
    },
    {
      title: "B. Introducing Your Family",
      body: [
        "To introduce individual family members, replace the final word with the appropriate family term.",
      ],
      examples: [
        {
          text: "Amo ini an akon tatay.",
          meaning: "This is my father.",
        },
        {
          text: "Amo ini an akon nanay.",
          meaning: "This is my mother.",
        },
        {
          text: "Amo ini an akon lolo.",
          meaning: "This is my grandfather.",
        },
        {
          text: "Amo ini an akon lola.",
          meaning: "This is my grandmother.",
        },
      ],
    },
    {
      title: "C. Talking About Your Siblings",
      body: [
        "To tell someone that you have a sibling, you can use the expression:",
      ],
      examples: [
        {
          text: "May bugto ako.",
          meaning: "I have a sibling.",
        },
      ],
    },
    {
      title: "C. Talking About Your Siblings",
      body: [
        "To give more information:",
      ],
      examples: [
        {
          text: "May duha ako nga bugto.",
          meaning: "I have two siblings.",
        },
        {
          text: "May bugto ako nga lalaki.",
          meaning: "I have a brother.",
        },
        {
          text: "May bugto ako nga babaye.",
          meaning: "I have a sister.",
        },
      ],
    },
    {
      title: "C. Talking About Your Siblings",
      body: [
        "You can ask someone about their siblings by saying:",
      ],
      examples: [
        {
          text: "Pira an imo bugto?",
          meaning: "How many siblings do you have?",
        },
      ],
    },
    {
      title: "D. Describing Your Family",
      body: [
        "You can use simple sentences to share information about your family.",
      ],
      examples: [
        {
          text: "Damo kami ha pamilya.",
          meaning: "There are many of us in the family.",
        },
        {
          text: "Gutiay la an amon pamilya.",
          meaning: "Our family is small.",
        },
        {
          text: "Nag-uukoy kami ha Samar.",
          meaning: "We live in Samar.",
        },
        {
          text: "Mag-upod kami ha balay.",
          meaning: "We are together at home.",
        },
      ],
    },
    {
      title: "E. Important Grammar: My and Your",
      body: [
        "In Waray, possessive words help show who owns or is related to something.",
      ],
      table: {
        leftHeading: "English",
        rightHeading: "Waray",
        rows: [
          {
            left: "My",
            right: "Akon",
          },
          {
            left: "Your",
            right: "Imo",
          },
          {
            left: "His / Her",
            right: "Iya",
          },
          {
            left: "Our (excluding the listener)",
            right: "Amon",
          },
          {
            left: "Our (including the listener)",
            right: "Aton",
          },
          {
            left: "Their",
            right: "Ira",
          },
        ],
      },
      examples: [
        {
          text: "Akon tatay",
          meaning: "My father",
        },
        {
          text: "Imo nanay",
          meaning: "Your mother",
        },
        {
          text: "Iya bugto",
          meaning: "His/Her sibling",
        },
        {
          text: "Amon pamilya",
          meaning: "Our family (excluding you)",
        },
        {
          text: "Aton pamilya",
          meaning: "Our family (including you)",
        },
        {
          text: "Ira lolo",
          meaning: "Their grandfather",
        },
      ],
    },
    {
      title: "C. Family and Relationship Vocabulary",
      body: [
        "Note: Some family terms have alternative forms depending on the speaker, context, and locality. The words above are introductory vocabulary candidates for evaluator review.",
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
