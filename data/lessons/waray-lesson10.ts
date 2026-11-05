import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 10 — imported from "Lesson Plan.pdf", pages 789–804.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
// Fields not given by the plan are INFERRED from this lesson's own content and
// listed in docs/waray-inferred-keys.md: situation, usage, example, pattern, fill-in, arrange, speaking phrase, target pitch and mood, respelling, example situation, pronunciation tip, completion requirement.
// The practice answers are INFERRED drafts, not from the PDF. See
// docs/waray-draft-answer-keys.md for each answer and how it was found.

export const warayLesson10: StructuredLesson = {
  lessonId: "waray_10",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 10,
  title: "Introducing Other People",
  level: "Beginner",
  unit: "Unit 3 – Basic Communication",
  estimatedDuration: "35–45 minutes",
  prerequisite: "Lessons 1–9",
  languageVariety: "Waray-Waray",
  intro: [
    "Introducing people is a common part of everyday communication. You may introduce a friend to your family, introduce a classmate to another student, or introduce a relative to someone you have just met.",
    "In Waray, you can use expressions such as \"Amo ini hi...\" and \"Hiya hi...\" when introducing or identifying someone.",
    "In this lesson, you will learn how to introduce other people, explain how you know them, and share simple information about them.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Recognize common Waray expressions used when introducing other people.",
    "Introduce friends, family members, classmates, and acquaintances.",
    "Describe a person's basic relationship to them.",
    "Ask and answer simple questions about someone being introduced.",
    "Participate in a short conversation involving introductions.",
  ],
  assessment: {
    instructions: "Choose the best answer for each question.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What does \"Sangkay ko ini\" mean?",
        options: [
          {
            key: "A",
            text: "This is my teacher.",
          },
          {
            key: "B",
            text: "This is my friend.",
          },
          {
            key: "C",
            text: "This is my mother.",
          },
          {
            key: "D",
            text: "This is my classmate.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "Which Waray word means \"mother\"?",
        options: [
          {
            key: "A",
            text: "Tatay",
          },
          {
            key: "B",
            text: "Bugto",
          },
          {
            key: "C",
            text: "Nanay",
          },
          {
            key: "D",
            text: "Sangkay",
          },
        ],
        answerKey: "C",
      },
      {
        id: 3,
        prompt: "What does \"Buotan hiya\" mean?",
        options: [
          {
            key: "A",
            text: "He or she is kind.",
          },
          {
            key: "B",
            text: "He or she is angry.",
          },
          {
            key: "C",
            text: "He or she is young.",
          },
          {
            key: "D",
            text: "He or she is tired.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 4,
        prompt: "Which expression means \"What is his or her name?\"",
        options: [
          {
            key: "A",
            text: "Hin-o hiya?",
          },
          {
            key: "B",
            text: "Ano an iya ngaran?",
          },
          {
            key: "C",
            text: "Taga diin ka?",
          },
          {
            key: "D",
            text: "Pira an imo edad?",
          },
        ],
        answerKey: "B",
      },
      {
        id: 5,
        prompt: "What does \"Klasmet ko hiya\" mean?",
        options: [
          {
            key: "A",
            text: "He or she is my sibling.",
          },
          {
            key: "B",
            text: "He or she is my neighbor.",
          },
          {
            key: "C",
            text: "He or she is my classmate.",
          },
          {
            key: "D",
            text: "He or she is my teacher.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 6,
        prompt: "Which Waray pronoun can refer to both \"he\" and \"she\"?",
        options: [
          {
            key: "A",
            text: "Ako",
          },
          {
            key: "B",
            text: "Ikaw",
          },
          {
            key: "C",
            text: "Hiya",
          },
          {
            key: "D",
            text: "Hira",
          },
        ],
        answerKey: "C",
      },
      {
        id: 7,
        prompt: "What does \"Kilala mo ba hiya?\" mean?",
        options: [
          {
            key: "A",
            text: "Do you know him or her?",
          },
          {
            key: "B",
            text: "Where is he or she?",
          },
          {
            key: "C",
            text: "What is his or her name?",
          },
          {
            key: "D",
            text: "How old is he or she?",
          },
        ],
        answerKey: "A",
      },
      {
        id: 8,
        prompt: "Which sentence means \"She is friendly\"?",
        options: [
          {
            key: "A",
            text: "Mahigalaon hiya.",
          },
          {
            key: "B",
            text: "Buotan hiya.",
          },
          {
            key: "C",
            text: "Maduruto hiya.",
          },
          {
            key: "D",
            text: "Malipayon hiya.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 9,
        prompt: "What is the Waray equivalent of \"This is my father\"?",
        options: [
          {
            key: "A",
            text: "Nanay ko ini.",
          },
          {
            key: "B",
            text: "Tatay ko ini.",
          },
          {
            key: "C",
            text: "Bugto ko ini.",
          },
          {
            key: "D",
            text: "Sangkay ko ini.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 10,
        prompt: "Which sentence introduces someone as a sibling?",
        options: [
          {
            key: "A",
            text: "Sangkay ko ini.",
          },
          {
            key: "B",
            text: "Klasmet ko hiya.",
          },
          {
            key: "C",
            text: "Bugto ko ini.",
          },
          {
            key: "D",
            text: "Maestra ko hiya.",
          },
        ],
        answerKey: "C",
      },
    ],
  },
  extraActivities: [
    {
      title: "Translate into Waray",
      kind: "translate",
      instructions: "Translate each English sentence into Waray.",
      items: [
        "This is my father.",
        "She is my friend.",
        "What is her name?",
        "He is kind.",
        "Do you know him?",
      ],
    },
    {
      title: "Introduce Someone",
      kind: "open",
      instructions: "Choose a person you know, such as a friend, family member, or classmate. Introduce that person in Waray using at least five sentences.\nInclude the following information:",
      items: [
        "The person's name.",
        "Your relationship with the person.",
        "One or two descriptions of the person.",
        "A simple statement about something you do together.",
      ],
    },
  ],
  matchActivity: {
    title: "Match the Vocabulary",
    instructions: "Match each Waray word with its correct English meaning.",
    pairs: [
      {
        id: "1",
        term: "Sangkay",
        answer: "Friend",
      },
      {
        id: "2",
        term: "Nanay",
        answer: "Mother",
      },
      {
        id: "3",
        term: "Bugto",
        answer: "Brother or sister",
      },
      {
        id: "4",
        term: "Klasmet",
        answer: "Classmate",
      },
      {
        id: "5",
        term: "Tatay",
        answer: "Father",
      },
    ],
  },
  choiceActivity: {
    title: "Complete the Sentences",
    instructions: "Choose the appropriate Waray word to complete each sentence.",
    questions: [
      {
        id: 1,
        prompt: "______ ko ini. (This is my friend.)",
        options: [
          {
            key: "A",
            text: "Sangkay",
          },
          {
            key: "B",
            text: "Nanay",
          },
          {
            key: "C",
            text: "hiya",
          },
          {
            key: "D",
            text: "ngaran",
          },
          {
            key: "E",
            text: "Kilala",
          },
        ],
        answerKey: "A",
      },
      {
        id: 2,
        prompt: "______ ko ini. (This is my mother.)",
        options: [
          {
            key: "A",
            text: "Sangkay",
          },
          {
            key: "B",
            text: "Nanay",
          },
          {
            key: "C",
            text: "hiya",
          },
          {
            key: "D",
            text: "ngaran",
          },
          {
            key: "E",
            text: "Kilala",
          },
        ],
        answerKey: "B",
      },
      {
        id: 3,
        prompt: "Buotan ______. (He or she is kind.)",
        options: [
          {
            key: "A",
            text: "Sangkay",
          },
          {
            key: "B",
            text: "Nanay",
          },
          {
            key: "C",
            text: "hiya",
          },
          {
            key: "D",
            text: "ngaran",
          },
          {
            key: "E",
            text: "Kilala",
          },
        ],
        answerKey: "C",
      },
      {
        id: 4,
        prompt: "Ano an iya ______? (What is his or her name?)",
        options: [
          {
            key: "A",
            text: "Sangkay",
          },
          {
            key: "B",
            text: "Nanay",
          },
          {
            key: "C",
            text: "hiya",
          },
          {
            key: "D",
            text: "ngaran",
          },
          {
            key: "E",
            text: "Kilala",
          },
        ],
        answerKey: "D",
      },
      {
        id: 5,
        prompt: "______ mo ba hiya? (Do you know him or her?)",
        options: [
          {
            key: "A",
            text: "Sangkay",
          },
          {
            key: "B",
            text: "Nanay",
          },
          {
            key: "C",
            text: "hiya",
          },
          {
            key: "D",
            text: "ngaran",
          },
          {
            key: "E",
            text: "Kilala",
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
      name: "People Introducer Badge",
      description: "Awarded after successfully completing the lesson assessment with at least 70%.",
    },
    completionRequirement: "Obtain at least 70% in the lesson assessment. Learners may repeat the activities and assessment if they do not meet the requirement.",
  },
  expectedOutcomes: [
    "Introduce friends and family members in Waray.",
    "Identify people and describe their relationships.",
    "Share basic information about someone.",
    "Ask and answer simple questions about other people.",
    "Participate in short conversations involving introductions.",
    "Complete the vocabulary review.",
    "Study the useful phrases and lesson explanations.",
    "Finish the guided conversation and practice activities.",
    "Complete the lesson assessment.",
    "Obtain at least 70% to pass.",
    "Basic greetings and self-introduction.",
    "Common expressions and responses.",
    "Numbers and counting.",
    "Days, months, and time.",
    "Family members and relationships.",
    "Food and drinks.",
    "Colors and shapes.",
    "Animals and nature.",
    "Asking and answering simple questions.",
    "Introducing other people.",
  ],
  fillInBlanks: {
    title: "Fill in the Blanks",
    instructions: "Complete each sentence using the appropriate Waray word.",
    items: [
      {
        id: "1",
        sentence: "___ ko ini.",
        hint: "This is my friend.",
        answer: "Sangkay",
        wordBank: [
          "Kilala",
          "Bugto",
          "Ngaran",
          "Sangkay",
        ],
      },
      {
        id: "2",
        sentence: "___ ko ini.",
        hint: "This is my mother.",
        answer: "Nanay",
        wordBank: [
          "Buotan",
          "Estudyante",
          "Nanay",
          "Aton",
        ],
      },
      {
        id: "3",
        sentence: "___ ko ini.",
        hint: "This is my father.",
        answer: "Tatay",
        wordBank: [
          "Imo",
          "Buotan",
          "Tatay",
          "Mag-upod",
        ],
      },
      {
        id: "4",
        sentence: "___ ko ini.",
        hint: "This is my brother/sister. / This is my brother or sister.",
        answer: "Bugto",
        wordBank: [
          "Bugto",
          "Kilala",
          "Pariente",
          "Matahom",
        ],
      },
      {
        id: "5",
        sentence: "Sangkay ko ___.",
        hint: "He is my friend. / He or she is my friend. / He or she is my friend.",
        answer: "hiya",
        wordBank: [
          "hiya",
          "Tawo",
          "Maabilidad",
          "Kilala",
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
          "Sangkay",
          "ini",
          "ko",
        ],
        answer: [
          "Sangkay",
          "ko",
          "ini",
        ],
        display: "Sangkay ko ini.",
      },
      {
        id: "2",
        words: [
          "ini",
          "ko",
          "Nanay",
        ],
        answer: [
          "Nanay",
          "ko",
          "ini",
        ],
        display: "Nanay ko ini.",
      },
      {
        id: "3",
        words: [
          "ini",
          "ko",
          "Tatay",
        ],
        answer: [
          "Tatay",
          "ko",
          "ini",
        ],
        display: "Tatay ko ini.",
      },
      {
        id: "4",
        words: [
          "ko",
          "Bugto",
          "ini",
        ],
        answer: [
          "Bugto",
          "ko",
          "ini",
        ],
        display: "Bugto ko ini.",
      },
      {
        id: "5",
        words: [
          "ko",
          "Sangkay",
          "hiya",
        ],
        answer: [
          "Sangkay",
          "ko",
          "hiya",
        ],
        display: "Sangkay ko hiya.",
      },
    ],
  },
  speaking: {
    title: "Speaking Practice",
    instructions: "Read the following sentences aloud.",
    note: "Learners should listen to the model pronunciation before recording their own voice.",
    practiceLessonId: "waray_10",
    phrases: [
      {
        id: "1",
        text: "Sangkay ko ini.",
        respelling: "SAHNG-kai koh EE-nee",
        meaning: "This is my friend.",
      },
      {
        id: "2",
        text: "Bugto ko ini.",
        respelling: "BOOG-toh koh EE-nee",
        meaning: "This is my brother/sister. / This is my brother or sister.",
      },
      {
        id: "3",
        text: "Juan an iya ngaran.",
        respelling: "HOO-ahn ahn EE-yah NGAH-rahn",
        meaning: "His name is Juan.",
      },
      {
        id: "4",
        text: "Maestra ko hiya.",
        respelling: "mah-ES-trah koh HEE-yah",
        meaning: "She is my teacher.",
      },
      {
        id: "5",
        text: "Kilala mo ba hiya?",
        respelling: "kee-LAH-lah moh bah HEE-yah",
        meaning: "Do you know him/her? / Do you know him or her?",
      },
      {
        id: "6",
        text: "Nalilipay ako nga makilala ka.",
        respelling: "nah-lee-lee-PAI AH-koh ngah mah-kee-LAH-lah kah",
        meaning: "Nice to meet you.",
      },
      {
        id: "7",
        text: "Malipayon hiya.",
        respelling: "mah-lee-pah-yohn hee-yah",
        meaning: "He or she is happy.",
      },
    ],
  },
  exampleSituation: {
    description: "Imagine this situation from the lesson: Introducing a Friend.",
    lead: "You can begin by saying:",
    line: "Ben, pakilala ko ha imo an akon sangkay.",
    translation: "Ben, let me introduce my friend to you.",
  },
  vocabularyIntro: "Learn the following words and expressions before proceeding to the activities.",
  pronunciationTip: "Read each syllable clearly. Avoid rushing through longer expressions.",
  selfIntroIntro: "Use these patterns and phrases from the lesson.",
  vocabulary: [
    {
      term: "Tawo",
      meaning: "Person",
      pronunciation: "TAH-woh",
      usage: "From this lesson's word list: people and relationships.",
    },
    {
      term: "Sangkay",
      meaning: "Friend",
      pronunciation: "SAHNG-kai",
      usage: "From this lesson's word list: people and relationships.",
      example: [
        {
          speaker: "A",
          text: "Ben, pakilala ko ha imo an akon sangkay.",
          translation: "Ben, let me introduce my friend to you.",
        },
        {
          speaker: "B",
          text: "Sige.",
          translation: "Okay.",
        },
      ],
    },
    {
      term: "Pamilya",
      meaning: "Family",
      pronunciation: "pah-MEEL-yah",
      usage: "From this lesson's word list: people and relationships.",
    },
    {
      term: "Tatay",
      meaning: "Father",
      pronunciation: "TAH-tai",
      usage: "From this lesson's word list: people and relationships.",
      example: [
        {
          speaker: "",
          text: "Tatay ko ini.",
          translation: "This is my father.",
        },
      ],
    },
    {
      term: "Nanay",
      meaning: "Mother",
      pronunciation: "NAH-nai",
      usage: "From this lesson's word list: people and relationships.",
      example: [
        {
          speaker: "A",
          text: "Hin-o ini?",
          translation: "Who is this?",
        },
        {
          speaker: "B",
          text: "Nanay ko ini.",
          translation: "This is my mother.",
        },
      ],
    },
    {
      term: "Bugto",
      meaning: "Brother / Sister",
      pronunciation: "BOOG-toh",
      usage: "From this lesson's word list: people and relationships.",
      example: [
        {
          speaker: "",
          text: "Bugto ko ini.",
          translation: "This is my brother/sister. / This is my brother or sister.",
        },
      ],
    },
    {
      term: "Magurang",
      meaning: "Older sibling",
      pronunciation: "mah-GOO-rahng",
      usage: "From this lesson's word list: people and relationships.",
    },
    {
      term: "Manghod",
      meaning: "Younger sibling",
      pronunciation: "MAHNG-hod",
      usage: "From this lesson's word list: people and relationships.",
    },
    {
      term: "Lolo",
      meaning: "Grandfather",
      pronunciation: "LOH-loh",
      usage: "From this lesson's word list: people and relationships.",
    },
    {
      term: "Lola",
      meaning: "Grandmother",
      pronunciation: "LOH-lah",
      usage: "From this lesson's word list: people and relationships.",
    },
    {
      term: "Klasmet",
      meaning: "Classmate",
      pronunciation: "KLAHS-met",
      usage: "From this lesson's word list: people and relationships.",
      example: [
        {
          speaker: "A",
          text: "Kilala ko hiya.",
          translation: "I know him.",
        },
        {
          speaker: "B",
          text: "Oo, klasmet naton hiya.",
          translation: "Yes, he is our classmate.",
        },
      ],
    },
    {
      term: "Maestro / Maestra",
      meaning: "Teacher",
      pronunciation: "mah-ES-troh / mah-ES-trah",
      usage: "From this lesson's word list: people and relationships.",
      example: [
        {
          speaker: "",
          text: "Maestra ko hiya.",
          translation: "She is my teacher.",
        },
      ],
    },
    {
      term: "Estudyante",
      meaning: "Student",
      pronunciation: "es-too-DYAHN-teh",
      usage: "From this lesson's word list: people and relationships.",
    },
    {
      term: "Siring-balay",
      meaning: "Neighbor",
      pronunciation: "SEE-ring BAH-lai",
      usage: "From this lesson's word list: people and relationships.",
    },
    {
      term: "Pariente",
      meaning: "Relative",
      pronunciation: "pah-RYEN-teh",
      usage: "From this lesson's word list: people and relationships.",
    },
    {
      term: "Ini",
      meaning: "This",
      pronunciation: "EE-nee",
      usage: "Used when introducing people.",
      example: [
        {
          speaker: "A",
          text: "Sige.",
          translation: "Okay.",
        },
        {
          speaker: "B",
          text: "Sangkay ko ini hi Maria.",
          translation: "This is my friend Maria.",
        },
      ],
    },
    {
      term: "Ito",
      meaning: "That",
      pronunciation: "EE-toh",
      usage: "Used when introducing people.",
    },
    {
      term: "Hiya",
      meaning: "He / She",
      pronunciation: "HEE-yah",
      usage: "Used when introducing people.",
      example: [
        {
          speaker: "A",
          text: "Hin-o an lalaki nga imo kaupod?",
          translation: "Who is the boy with you?",
        },
        {
          speaker: "B",
          text: "Sangkay ko hiya nga hi Daniel.",
          translation: "He is my friend, Daniel.",
        },
      ],
    },
    {
      term: "Akon",
      meaning: "My",
      pronunciation: "AH-kohn",
      usage: "Used when introducing people.",
      example: [
        {
          speaker: "A",
          text: "Maupay nga adlaw!",
          translation: "Good day!",
        },
        {
          speaker: "B",
          text: "Maupay nga adlaw! Ben an akon ngaran.",
          translation: "Good day! My name is Ben.",
        },
      ],
    },
    {
      term: "Imo",
      meaning: "Your",
      pronunciation: "EE-moh",
      usage: "Used when introducing people.",
      example: [
        {
          speaker: "A",
          text: "Ben, pakilala ko ha imo an akon sangkay.",
          translation: "Ben, let me introduce my friend to you.",
        },
        {
          speaker: "B",
          text: "Sige.",
          translation: "Okay.",
        },
      ],
    },
    {
      term: "Iya",
      meaning: "His / Her",
      pronunciation: "EE-yah",
      usage: "Used when introducing people.",
      example: [
        {
          speaker: "A",
          text: "Nanay ko ini.",
          translation: "This is my mother.",
        },
        {
          speaker: "B",
          text: "Ano an iya ngaran?",
          translation: "What is her name?",
        },
      ],
    },
    {
      term: "Amon",
      meaning: "Our (exclusive)",
      pronunciation: "AH-mohn",
      usage: "Used when introducing people.",
    },
    {
      term: "Aton",
      meaning: "Our (inclusive)",
      pronunciation: "AH-tohn",
      usage: "Used when introducing people.",
    },
    {
      term: "Ira",
      meaning: "Their",
      pronunciation: "EE-rah",
      usage: "Used when introducing people.",
    },
    {
      term: "Ngaran",
      meaning: "Name",
      pronunciation: "NGAH-rahn",
      usage: "Used when introducing people.",
      example: [
        {
          speaker: "A",
          text: "Maupay nga adlaw! Ben an akon ngaran.",
          translation: "Good day! My name is Ben.",
        },
        {
          speaker: "B",
          text: "Nalilipay ako nga makilala ka.",
          translation: "I am happy to meet you.",
        },
      ],
    },
    {
      term: "Gihapon",
      meaning: "Also",
      pronunciation: "gee-HAH-pohn",
      usage: "Used when introducing people.",
    },
    {
      term: "Mag-upod",
      meaning: "Together",
      pronunciation: "mahg-OO-pod",
      usage: "Used when introducing people.",
    },
    {
      term: "Kilala",
      meaning: "Know / Be familiar with",
      pronunciation: "kee-LAH-lah",
      usage: "Used when introducing people.",
      example: [
        {
          speaker: "A",
          text: "Buotan ngan maduruto hiya.",
          translation: "He is kind and hardworking.",
        },
        {
          speaker: "B",
          text: "Kilala ko hiya.",
          translation: "I know him.",
        },
      ],
    },
    {
      term: "Buotan",
      meaning: "Kind",
      pronunciation: "boo-OH-tahn",
      usage: "From this lesson's word list: descriptive words.",
      example: [
        {
          speaker: "A",
          text: "Ano an iya kinaiya?",
          translation: "What is his personality like?",
        },
        {
          speaker: "B",
          text: "Buotan ngan maduruto hiya.",
          translation: "He is kind and hardworking.",
        },
      ],
    },
    {
      term: "Mahigalaon",
      meaning: "Friendly",
      pronunciation: "mah-hee-gah-LAH-ohn",
      usage: "From this lesson's word list: descriptive words.",
      example: [
        {
          speaker: "",
          text: "Mahigalaon hiya.",
          translation: "She is friendly. / He or she is friendly.",
        },
      ],
    },
    {
      term: "Mabination",
      meaning: "Helpful",
      pronunciation: "mah-bee-nah-TEE-ohn",
      usage: "From this lesson's word list: descriptive words.",
    },
    {
      term: "Makalilipay",
      meaning: "Funny",
      pronunciation: "mah-kah-lee-lee-PAI",
      usage: "From this lesson's word list: descriptive words.",
    },
    {
      term: "Maabilidad",
      meaning: "Intelligent",
      pronunciation: "mah-ah-ah-bee-lee-DAHD",
      usage: "From this lesson's word list: descriptive words.",
    },
    {
      term: "Maduruto",
      meaning: "Hardworking",
      pronunciation: "mah-doo-ROO-toh",
      usage: "From this lesson's word list: descriptive words.",
      example: [
        {
          speaker: "A",
          text: "Ano an iya kinaiya?",
          translation: "What is his personality like?",
        },
        {
          speaker: "B",
          text: "Buotan ngan maduruto hiya.",
          translation: "He is kind and hardworking.",
        },
      ],
    },
    {
      term: "Bata",
      meaning: "Young",
      pronunciation: "BAH-tah",
      usage: "From this lesson's word list: descriptive words.",
    },
    {
      term: "Lagas",
      meaning: "Old / Elderly",
      pronunciation: "lah-GAHS",
      usage: "From this lesson's word list: descriptive words.",
    },
    {
      term: "Malipayon",
      meaning: "Happy",
      pronunciation: "mah-lee-pah-YOHN",
      usage: "From this lesson's word list: descriptive words.",
      example: [
        {
          speaker: "",
          text: "Malipayon hiya.",
          translation: "He or she is happy.",
        },
      ],
    },
    {
      term: "Matahom",
      meaning: "Beautiful",
      pronunciation: "mah-tah-HOHM",
      usage: "From this lesson's word list: descriptive words.",
    },
  ],
  greetings: [
    {
      term: "Ini",
      meaning: "This",
      pronunciation: "EE-nee",
      usage: "Used when introducing people.",
      example: [
        {
          speaker: "A",
          text: "Sige.",
          translation: "Okay.",
        },
        {
          speaker: "B",
          text: "Sangkay ko ini hi Maria.",
          translation: "This is my friend Maria.",
        },
      ],
    },
    {
      term: "Ito",
      meaning: "That",
      pronunciation: "EE-toh",
      usage: "Used when introducing people.",
    },
    {
      term: "Hiya",
      meaning: "He / She",
      pronunciation: "HEE-yah",
      usage: "Used when introducing people.",
      example: [
        {
          speaker: "A",
          text: "Hin-o an lalaki nga imo kaupod?",
          translation: "Who is the boy with you?",
        },
        {
          speaker: "B",
          text: "Sangkay ko hiya nga hi Daniel.",
          translation: "He is my friend, Daniel.",
        },
      ],
    },
    {
      term: "Akon",
      meaning: "My",
      pronunciation: "AH-kohn",
      usage: "Used when introducing people.",
      example: [
        {
          speaker: "A",
          text: "Maupay nga adlaw!",
          translation: "Good day!",
        },
        {
          speaker: "B",
          text: "Maupay nga adlaw! Ben an akon ngaran.",
          translation: "Good day! My name is Ben.",
        },
      ],
    },
    {
      term: "Imo",
      meaning: "Your",
      pronunciation: "EE-moh",
      usage: "Used when introducing people.",
      example: [
        {
          speaker: "A",
          text: "Ben, pakilala ko ha imo an akon sangkay.",
          translation: "Ben, let me introduce my friend to you.",
        },
        {
          speaker: "B",
          text: "Sige.",
          translation: "Okay.",
        },
      ],
    },
    {
      term: "Iya",
      meaning: "His / Her",
      pronunciation: "EE-yah",
      usage: "Used when introducing people.",
      example: [
        {
          speaker: "A",
          text: "Nanay ko ini.",
          translation: "This is my mother.",
        },
        {
          speaker: "B",
          text: "Ano an iya ngaran?",
          translation: "What is her name?",
        },
      ],
    },
    {
      term: "Amon",
      meaning: "Our (exclusive)",
      pronunciation: "AH-mohn",
      usage: "Used when introducing people.",
    },
    {
      term: "Aton",
      meaning: "Our (inclusive)",
      pronunciation: "AH-tohn",
      usage: "Used when introducing people.",
    },
    {
      term: "Ira",
      meaning: "Their",
      pronunciation: "EE-rah",
      usage: "Used when introducing people.",
    },
    {
      term: "Ngaran",
      meaning: "Name",
      pronunciation: "NGAH-rahn",
      usage: "Used when introducing people.",
      example: [
        {
          speaker: "A",
          text: "Maupay nga adlaw! Ben an akon ngaran.",
          translation: "Good day! My name is Ben.",
        },
        {
          speaker: "B",
          text: "Nalilipay ako nga makilala ka.",
          translation: "I am happy to meet you.",
        },
      ],
    },
    {
      term: "Gihapon",
      meaning: "Also",
      pronunciation: "gee-HAH-pohn",
      usage: "Used when introducing people.",
    },
    {
      term: "Mag-upod",
      meaning: "Together",
      pronunciation: "mahg-OO-pod",
      usage: "Used when introducing people.",
    },
    {
      term: "Kilala",
      meaning: "Know / Be familiar with",
      pronunciation: "kee-LAH-lah",
      usage: "Used when introducing people.",
      example: [
        {
          speaker: "A",
          text: "Buotan ngan maduruto hiya.",
          translation: "He is kind and hardworking.",
        },
        {
          speaker: "B",
          text: "Kilala ko hiya.",
          translation: "I know him.",
        },
      ],
    },
  ],
  patterns: [
    {
      label: "Pattern 1: Saying How You Know Someone",
      pattern: "Relationship + ko ini.",
      examples: [
        "Sangkay ko ini.",
        "Nanay ko ini.",
        "Tatay ko ini.",
      ],
    },
    {
      label: "Pattern 2: Saying Someone’s Name",
      pattern: "Name + an iya ngaran.",
      examples: [
        "Juan an iya ngaran.",
        "Ana an iya ngaran.",
        "Maria an iya ngaran.",
      ],
    },
    {
      label: "Pattern 3: Describing Someone",
      pattern: "Description + hiya.",
      examples: [
        "Buotan hiya.",
        "Mahigalaon hiya.",
        "Malipayon hiya.",
      ],
    },
  ],
  sentences: [
    {
      text: "Sangkay ko ini.",
      meaning: "This is my friend.",
      pronunciation: "SAHNG-kai koh EE-nee",
    },
    {
      text: "Nanay ko ini.",
      meaning: "This is my mother.",
      pronunciation: "NAH-nai koh EE-nee",
    },
    {
      text: "Tatay ko ini.",
      meaning: "This is my father.",
      pronunciation: "TAH-tai koh EE-nee",
    },
    {
      text: "Bugto ko ini.",
      meaning: "This is my brother/sister. / This is my brother or sister.",
      pronunciation: "BOOG-toh koh EE-nee",
    },
    {
      text: "Sangkay ko hiya.",
      meaning: "He is my friend. / He or she is my friend. / He or she is my friend.",
      pronunciation: "SAHNG-kai koh HEE-yah",
    },
    {
      text: "Bugto ko hiya.",
      meaning: "She is my sister. / He or she is my sibling.",
      pronunciation: "BOOG-toh koh HEE-yah",
    },
    {
      text: "Juan an iya ngaran.",
      meaning: "His name is Juan.",
      pronunciation: "HOO-ahn ahn EE-yah NGAH-rahn",
    },
    {
      text: "Ana an iya ngaran.",
      meaning: "Her name is Ana.",
      pronunciation: "AH-nah ahn EE-yah NGAH-rahn",
    },
    {
      text: "Klasmet ko hiya.",
      meaning: "He is my classmate. / He or she is my classmate.",
      pronunciation: "KLAHS-met koh HEE-yah",
    },
    {
      text: "Maestra ko hiya.",
      meaning: "She is my teacher.",
      pronunciation: "mah-ES-trah koh HEE-yah",
    },
    {
      text: "Buotan hiya.",
      meaning: "He is kind. / He or she is kind.",
      pronunciation: "boo-OH-tahn HEE-yah",
    },
    {
      text: "Mahigalaon hiya.",
      meaning: "She is friendly. / He or she is friendly.",
      pronunciation: "mah-hee-gah-LAH-ohn HEE-yah",
    },
    {
      text: "Kilala mo ba hiya?",
      meaning: "Do you know him/her? / Do you know him or her?",
      pronunciation: "kee-LAH-lah moh bah HEE-yah",
    },
    {
      text: "Oo, kilala ko hiya.",
      meaning: "Yes, I know him/her. / Yes, I know him or her.",
      pronunciation: "oh-OH kee-LAH-lah koh HEE-yah",
    },
    {
      text: "Diri ko hiya kilala.",
      meaning: "I don't know him/her.",
      pronunciation: "DEE-ree koh HEE-yah kee-LAH-lah",
    },
    {
      text: "Nalilipay ako nga makilala ka.",
      meaning: "Nice to meet you.",
      pronunciation: "nah-lee-lee-PAI AH-koh ngah mah-kee-LAH-lah kah",
    },
    {
      text: "Maria an ngaran han akon nanay.",
      meaning: "My mother's name is Maria.",
    },
    {
      text: "Maduruto hiya.",
      meaning: "He or she is hardworking.",
    },
    {
      text: "Malipayon hiya.",
      meaning: "He or she is happy.",
    },
    {
      text: "Hin-o hiya?",
      meaning: "Who is he or she?",
    },
    {
      text: "Ano an iya ngaran?",
      meaning: "What is his or her name?",
    },
    {
      text: "Ano an iyo relasyon?",
      meaning: "What is your relationship?",
    },
  ],
  conversations: [
    {
      title: "Conversation A: Introducing a Friend",
      lines: [
        {
          speaker: "Ana",
          text: "Ben, pakilala ko ha imo an akon sangkay.",
          translation: "Ben, let me introduce my friend to you.",
        },
        {
          speaker: "Ben",
          text: "Sige.",
          translation: "Okay.",
        },
        {
          speaker: "Ana",
          text: "Sangkay ko ini hi Maria.",
          translation: "This is my friend Maria.",
        },
        {
          speaker: "Maria",
          text: "Maupay nga adlaw!",
          translation: "Good day!",
        },
        {
          speaker: "Ben",
          text: "Maupay nga adlaw! Ben an akon ngaran.",
          translation: "Good day! My name is Ben.",
        },
        {
          speaker: "Maria",
          text: "Nalilipay ako nga makilala ka.",
          translation: "I am happy to meet you.",
        },
      ],
      situation: "Ana and Ben and Maria: Introducing a Friend.",
    },
    {
      title: "Conversation B: Introducing a Family Member",
      lines: [
        {
          speaker: "Carlo",
          text: "Hin-o ini?",
          translation: "Who is this?",
        },
        {
          speaker: "Mia",
          text: "Nanay ko ini.",
          translation: "This is my mother.",
        },
        {
          speaker: "Carlo",
          text: "Ano an iya ngaran?",
          translation: "What is her name?",
        },
        {
          speaker: "Mia",
          text: "Maria an iya ngaran.",
          translation: "Her name is Maria.",
        },
        {
          speaker: "Carlo",
          text: "Maupay nga adlaw, Maria!",
          translation: "Good day, Maria!",
        },
        {
          speaker: "Maria",
          text: "Maupay nga adlaw!",
          translation: "Good day!",
        },
      ],
      situation: "Carlo and Mia and Maria: Introducing a Family Member.",
    },
    {
      title: "Conversation C: Talking About a Classmate",
      lines: [
        {
          speaker: "Liza",
          text: "Hin-o an lalaki nga imo kaupod?",
          translation: "Who is the boy with you?",
        },
        {
          speaker: "Mark",
          text: "Sangkay ko hiya nga hi Daniel.",
          translation: "He is my friend, Daniel.",
        },
        {
          speaker: "Liza",
          text: "Ano an iya kinaiya?",
          translation: "What is his personality like?",
        },
        {
          speaker: "Mark",
          text: "Buotan ngan maduruto hiya.",
          translation: "He is kind and hardworking.",
        },
        {
          speaker: "Liza",
          text: "Kilala ko hiya.",
          translation: "I know him.",
        },
        {
          speaker: "Mark",
          text: "Oo, klasmet naton hiya.",
          translation: "Yes, he is our classmate.",
        },
      ],
      situation: "Liza and Mark: Talking About a Classmate.",
    },
  ],
  languageNotes: [
    {
      title: "A. Introducing Someone",
      body: [
        "When introducing a person, learners can identify the person and explain their relationship to them.",
      ],
      examples: [
        {
          text: "Sangkay ko ini.",
          meaning: "This is my friend.",
        },
        {
          text: "Nanay ko ini.",
          meaning: "This is my mother.",
        },
        {
          text: "Tatay ko ini.",
          meaning: "This is my father.",
        },
        {
          text: "Bugto ko ini.",
          meaning: "This is my brother or sister.",
        },
      ],
    },
    {
      title: "A. Introducing Someone",
      body: [
        "The word ko indicates possession or relationship to the speaker in these examples.",
      ],
    },
    {
      title: "B. Identifying a Person",
      body: [
        "Use hiya when referring to a person who is being discussed.",
      ],
      examples: [
        {
          text: "Sangkay ko hiya.",
          meaning: "He or she is my friend.",
        },
        {
          text: "Klasmet ko hiya.",
          meaning: "He or she is my classmate.",
        },
        {
          text: "Maestra ko hiya.",
          meaning: "She is my teacher.",
        },
      ],
    },
    {
      title: "B. Identifying a Person",
      body: [
        "Waray commonly uses the same pronoun, hiya, for both he and she. The person's identity or the surrounding conversation helps clarify who is being discussed.",
      ],
    },
    {
      title: "C. Sharing Someone's Name",
      body: [
        "When introducing a person by name, use a simple sentence identifying their name.",
      ],
      examples: [
        {
          text: "Juan an iya ngaran.",
          meaning: "His name is Juan.",
        },
        {
          text: "Ana an iya ngaran.",
          meaning: "Her name is Ana.",
        },
        {
          text: "Maria an ngaran han akon nanay.",
          meaning: "My mother's name is Maria.",
        },
      ],
    },
    {
      title: "D. Describing Other People",
      body: [
        "You can add simple descriptions when introducing someone.",
      ],
      examples: [
        {
          text: "Buotan hiya.",
          meaning: "He or she is kind.",
        },
        {
          text: "Mahigalaon hiya.",
          meaning: "He or she is friendly.",
        },
        {
          text: "Maduruto hiya.",
          meaning: "He or she is hardworking.",
        },
        {
          text: "Malipayon hiya.",
          meaning: "He or she is happy.",
        },
      ],
    },
    {
      title: "D. Describing Other People",
      body: [
        "Descriptions provide additional information and help make introductions more meaningful.",
      ],
    },
    {
      title: "E. Asking About Someone",
      body: [
        "You can ask questions to learn more about a person.",
      ],
      examples: [
        {
          text: "Hin-o hiya?",
          meaning: "Who is he or she?",
        },
        {
          text: "Ano an iya ngaran?",
          meaning: "What is his or her name?",
        },
        {
          text: "Kilala mo ba hiya?",
          meaning: "Do you know him or her?",
        },
        {
          text: "Ano an iyo relasyon?",
          meaning: "What is your relationship?",
        },
      ],
    },
    {
      title: "E. Asking About Someone",
      body: [
        "Possible responses:",
      ],
      examples: [
        {
          text: "Sangkay ko hiya.",
          meaning: "He or she is my friend.",
        },
        {
          text: "Juan an iya ngaran.",
          meaning: "His name is Juan.",
        },
        {
          text: "Oo, kilala ko hiya.",
          meaning: "Yes, I know him or her.",
        },
        {
          text: "Bugto ko hiya.",
          meaning: "He or she is my sibling.",
        },
      ],
    },
    {
      title: "Useful Phrases and Sentences",
      body: [
        "Study these expressions for introducing people and describing relationships.",
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
