import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 5 — imported from "Lesson Plan.pdf", pages 715–728.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.

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
  expressionGroups: [
    {
      title: "A. Immediate Family Members",
      items: [
        {
          term: "Pamilya",
          meaning: "Family",
          pronunciation: "pa-MIL-ya",
        },
        {
          term: "Tatay",
          meaning: "Father",
          pronunciation: "TA-tay",
        },
        {
          term: "Nanay",
          meaning: "Mother",
          pronunciation: "NA-nay",
        },
        {
          term: "Kag-anak",
          meaning: "Parents",
          pronunciation: "kag-A-nak",
        },
        {
          term: "Anak nga lalaki",
          meaning: "Son",
          pronunciation: "A-nak nga la-LA-ki",
        },
        {
          term: "Anak nga babaye",
          meaning: "Daughter",
          pronunciation: "A-nak nga ba-BA-ye",
        },
        {
          term: "Anak",
          meaning: "Child",
          pronunciation: "A-nak",
        },
        {
          term: "Mga anak",
          meaning: "Children",
          pronunciation: "ma-NGA A-nak",
        },
        {
          term: "Bugto nga lalaki",
          meaning: "Brother",
          pronunciation: "BUG-to nga la-LA-ki",
        },
        {
          term: "Bugto nga babaye",
          meaning: "Sister",
          pronunciation: "BUG-to nga ba-BA-ye",
        },
        {
          term: "Bugto",
          meaning: "Sibling",
          pronunciation: "BUG-to",
        },
        {
          term: "Magurang",
          meaning: "Older sibling",
          pronunciation: "ma-GOO-rang",
        },
        {
          term: "Manghod",
          meaning: "Younger sibling",
          pronunciation: "MANG-hod",
        },
      ],
    },
    {
      title: "B. Extended Family Members",
      items: [
        {
          term: "Lolo",
          meaning: "Grandfather",
          pronunciation: "LO-lo",
        },
        {
          term: "Lola",
          meaning: "Grandmother",
          pronunciation: "LO-la",
        },
        {
          term: "Lolo ngan Lola",
          meaning: "Grandparents",
          pronunciation: "LO-lo ngan LO-la",
        },
        {
          term: "Tiyo",
          meaning: "Uncle",
          pronunciation: "TI-yo",
        },
        {
          term: "Tiya",
          meaning: "Aunt",
          pronunciation: "TI-ya",
        },
        {
          term: "Ig-agaw",
          meaning: "Cousin",
          pronunciation: "ig-A-gaw",
        },
        {
          term: "Sobrino",
          meaning: "Nephew",
          pronunciation: "so-BRI-no",
        },
        {
          term: "Sobrina",
          meaning: "Niece",
          pronunciation: "so-BRI-na",
        },
        {
          term: "Apo",
          meaning: "Grandchild",
          pronunciation: "A-po",
        },
        {
          term: "Pariente",
          meaning: "Relative",
          pronunciation: "pa-RYEN-te",
        },
      ],
    },
    {
      title: "C. Family and Relationship Vocabulary",
      intro: [
        "Note: Some family terms have alternative forms depending on the speaker, context, and locality. The words above are introductory vocabulary candidates for evaluator review.",
      ],
      items: [
        {
          term: "Bana",
          meaning: "Husband",
          pronunciation: "BA-na",
        },
        {
          term: "Asawa",
          meaning: "Wife",
          pronunciation: "a-SA-wa",
        },
        {
          term: "Kasado",
          meaning: "Married",
          pronunciation: "ka-SA-do",
        },
        {
          term: "Solo",
          meaning: "Single / Unmarried",
          pronunciation: "SO-lo",
        },
        {
          term: "Kapamilya",
          meaning: "Family member",
          pronunciation: "ka-pa-MIL-ya",
        },
        {
          term: "Pariente",
          meaning: "Relative",
          pronunciation: "pa-RYEN-te",
        },
        {
          term: "Hinigugma",
          meaning: "Love",
          pronunciation: "hi-ni-GUG-ma",
        },
        {
          term: "Higugmaon",
          meaning: "To love",
          pronunciation: "hi-gug-MA-on",
        },
        {
          term: "Balay",
          meaning: "Home",
          pronunciation: "ba-LAY",
        },
        {
          term: "Mag-upod",
          meaning: "Together",
          pronunciation: "mag-U-pod",
        },
      ],
    },
  ],
  languageNotes: [
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
  ],
  situationsTitle: "Useful Phrases and Sentences",
  situationGroups: [
    {
      title: "Useful Phrases and Sentences",
      items: [
        {
          term: "Amo ini an akon pamilya.",
          meaning: "This is my family.",
          pronunciation: "A-mo I-ni an A-kon pa-MIL-ya",
        },
        {
          term: "Amo ini an akon tatay.",
          meaning: "This is my father.",
          pronunciation: "A-mo I-ni an A-kon TA-tay",
        },
        {
          term: "Amo ini an akon nanay.",
          meaning: "This is my mother.",
          pronunciation: "A-mo I-ni an A-kon NA-nay",
        },
        {
          term: "May usa ako nga bugto nga lalaki.",
          meaning: "I have one brother.",
          pronunciation: "May U-sa A-ko nga BUG-to nga la-LA-ki",
        },
        {
          term: "May usa ako nga bugto nga babaye.",
          meaning: "I have one sister.",
          pronunciation: "May U-sa A-ko nga BUG-to nga ba-BA-ye",
        },
        {
          term: "Pira an imo bugto?",
          meaning: "How many siblings do you have?",
          pronunciation: "PI-ra an I-mo BUG-to?",
        },
        {
          term: "Duha an akon bugto.",
          meaning: "I have two siblings.",
          pronunciation: "DU-ha an A-kon BUG-to",
        },
        {
          term: "May bugto ka ba?",
          meaning: "Do you have brothers or sisters?",
          pronunciation: "May BUG-to ka ba?",
        },
        {
          term: "Hin-o ini?",
          meaning: "Who is this?",
          pronunciation: "HI-no I-ni?",
        },
        {
          term: "Amo ini an akon lola.",
          meaning: "This is my grandmother.",
          pronunciation: "A-mo I-ni an A-kon LO-la",
        },
        {
          term: "Nag-uukoy an akon pamilya ha Samar.",
          meaning: "My family lives in Samar.",
          pronunciation: "nag-U-u-koy an A-kon pa-MIL-ya ha SA-mar",
        },
        {
          term: "Hinigugma ko an akon pamilya.",
          meaning: "I love my family.",
          pronunciation: "hi-ni-GUG-ma ko an A-kon pa-MIL-ya",
        },
      ],
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
    },
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
        ],
        answerKey: "A",
      },
    ],
  },
  extraActivities: [
    {
      title: "Match the Family Members",
      kind: "match",
      instructions: "Match each English word with its correct Waray equivalent.",
      items: [
        "Father",
        "Mother",
        "Brother",
        "Grandmother",
        "Younger sibling",
      ],
      choices: [
        "Nanay",
        "Manghod",
        "Lola",
        "Tatay",
        "Bugto nga lalaki",
      ],
    },
    {
      title: "Choose the Correct Answer",
      kind: "rewrite",
      instructions: "Select the correct Waray word.",
      items: [
        "What is the Waray word for family?\nA. Balay\nB. Pamilya\nC. Bugto",
        "What does magurang mean?\nA. Older sibling\nB. Younger sibling\nC. Grandfather",
        "What is the Waray word for grandmother?\nA. Tiya\nB. Lola\nC. Nanay",
        "What does akon mean?\nA. Your\nB. Their\nC. My",
      ],
    },
    {
      title: "Complete the Sentences",
      kind: "fill",
      instructions: "Choose the correct word to complete each sentence.",
      items: [
        "Amo ini an ______ tatay.\nA. akon\nB. imo\nC. ira",
        "May duha ako nga ______.\nA. bulan\nB. bugto\nC. adlaw",
        "Hinigugma ko an akon ______.\nA. pamilya\nB. oras\nC. semana",
      ],
    },
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
  rewards: {
    items: [
      {
        section: "vocabulary",
        label: "Vocabulary Practice + Phrase Recognition",
        xp: 20,
      },
      {
        section: "conversation",
        label: "Guided Conversation + Practice Activities",
        xp: 25,
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
  },
  expectedOutcomes: [
    "Identify common immediate and extended family members in Waray.",
    "Recognize basic family relationship vocabulary.",
    "Introduce their parents, siblings, and relatives.",
    "Ask and answer simple questions about family members.",
    "Use possessive words such as akon, imo, and iya in basic sentences.",
  ],
};
