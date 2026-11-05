import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 13 — imported from "Lesson Plan.pdf", pages 831–843.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
// Fields not given by the plan are INFERRED from this lesson's own content and
// listed in docs/waray-inferred-keys.md: situation, usage, example, pattern, arrange, speaking phrase, target pitch and mood, respelling, example situation, pronunciation tip, completion requirement.
// The practice answers are INFERRED drafts, not from the PDF. See
// docs/waray-draft-answer-keys.md for each answer and how it was found.

export const warayLesson13: StructuredLesson = {
  lessonId: "waray_13",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 13,
  title: "Asking for Information",
  level: "Intermediate",
  unit: "Unit 1 – Everyday Communication",
  estimatedDuration: "40–50 minutes",
  prerequisite: "Lessons 1–12",
  languageVariety: "Waray-Waray",
  intro: [
    "People ask questions every day to learn new information, understand instructions, and solve problems. Whether you are asking about a school schedule, checking the price of an item, or requesting details about an event, knowing how to ask questions clearly is important.",
    "At the Beginner Level, you learned basic question words such as ano (what), hin-o (who), diin (where), and san-o (when). In the previous lesson, you practiced using questions to ask for directions.",
    "In this lesson, you will expand those skills by learning how to request more specific information, ask follow-up questions, and clarify details in Waray.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Recognize common Waray expressions used when requesting information.",
    "Ask questions to obtain specific details about people, places, events, and activities.",
    "Request clarification when they do not understand something.",
    "Provide relevant answers to information-seeking questions.",
    "Participate in conversations involving inquiries and explanations.",
  ],
  assessment: {
    instructions: "Choose the best answer for each question.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What does \"May pakiana ako\" mean?",
        options: [
          {
            key: "A",
            text: "I have an answer.",
          },
          {
            key: "B",
            text: "I have a question.",
          },
          {
            key: "C",
            text: "I need directions.",
          },
          {
            key: "D",
            text: "I am going home.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "Which Waray word means \"answer\"?",
        options: [
          {
            key: "A",
            text: "Baton",
          },
          {
            key: "B",
            text: "Pakiana",
          },
          {
            key: "C",
            text: "Rason",
          },
          {
            key: "D",
            text: "Presyo",
          },
        ],
        answerKey: "A",
      },
      {
        id: 3,
        prompt: "What does \"Ano an kahulogan hini?\" mean?",
        options: [
          {
            key: "A",
            text: "Where is this?",
          },
          {
            key: "B",
            text: "Who owns this?",
          },
          {
            key: "C",
            text: "What does this mean?",
          },
          {
            key: "D",
            text: "How much is this?",
          },
        ],
        answerKey: "C",
      },
      {
        id: 4,
        prompt: "Which expression asks someone to repeat what they said?",
        options: [
          {
            key: "A",
            text: "Mahimo mo ba utrahon ito?",
          },
          {
            key: "B",
            text: "Pira ini?",
          },
          {
            key: "C",
            text: "Hain an balay?",
          },
          {
            key: "D",
            text: "San-o ka makadto?",
          },
        ],
        answerKey: "A",
      },
      {
        id: 5,
        prompt: "What does \"Kay\" mean in the examples presented?",
        options: [
          {
            key: "A",
            text: "But",
          },
          {
            key: "B",
            text: "Because",
          },
          {
            key: "C",
            text: "Where",
          },
          {
            key: "D",
            text: "When",
          },
        ],
        answerKey: "B",
      },
      {
        id: 6,
        prompt: "Which expression means \"I don't understand\"?",
        options: [
          {
            key: "A",
            text: "Nasasabtan ko na.",
          },
          {
            key: "B",
            text: "Diri ko nasasabtan.",
          },
          {
            key: "C",
            text: "Maaram ako.",
          },
          {
            key: "D",
            text: "Husto ito.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 7,
        prompt: "What does \"Pira an bayad?\" mean?",
        options: [
          {
            key: "A",
            text: "Who will pay?",
          },
          {
            key: "B",
            text: "Where can I pay?",
          },
          {
            key: "C",
            text: "How much is the payment?",
          },
          {
            key: "D",
            text: "When will you pay?",
          },
        ],
        answerKey: "C",
      },
      {
        id: 8,
        prompt: "Which Waray word means \"information\"?",
        options: [
          {
            key: "A",
            text: "Impormasyon",
          },
          {
            key: "B",
            text: "Pananglitan",
          },
          {
            key: "C",
            text: "Baton",
          },
          {
            key: "D",
            text: "Detalye",
          },
        ],
        answerKey: "A",
      },
      {
        id: 9,
        prompt: "What should you say if you want someone to explain an instruction?",
        options: [
          {
            key: "A",
            text: "Mahimo mo ba ini igsaysay?",
          },
          {
            key: "B",
            text: "Mangaon na kita.",
          },
          {
            key: "C",
            text: "Pag-amping.",
          },
          {
            key: "D",
            text: "Diretso la.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 10,
        prompt: "Which expression means \"Thank you for the explanation\"?",
        options: [
          {
            key: "A",
            text: "Salamat ha pagsaysay.",
          },
          {
            key: "B",
            text: "Waray sapayan.",
          },
          {
            key: "C",
            text: "Hulat anay.",
          },
          {
            key: "D",
            text: "Kitaay kita buwas.",
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
      instructions: "Translate the following English expressions into Waray.",
      items: [
        "May I ask something?",
        "Can you repeat that?",
        "What is the reason?",
        "I need more details.",
        "Thank you for the information.",
      ],
    },
    {
      title: "Information-Seeking Role-Play",
      kind: "roleplay",
      instructions: "Imagine that you are visiting a school office to ask about an upcoming activity.\nCreate a conversation in Waray that includes:",
      items: [
        "Asking about the date and time.",
        "Asking where the activity will be held.",
        "Asking what materials are required.",
        "Requesting clarification about one instruction.",
        "Thanking the person for providing the information.",
      ],
      note: "Write at least eight exchanges between the speakers.",
    },
  ],
  matchActivity: {
    title: "Match the Vocabulary",
    instructions: "Match each Waray word with its correct English meaning.",
    pairs: [
      {
        id: "1",
        term: "Pakiana",
        answer: "Question",
      },
      {
        id: "2",
        term: "Baton",
        answer: "Answer",
      },
      {
        id: "3",
        term: "Kahulogan",
        answer: "Meaning",
      },
      {
        id: "4",
        term: "Presyo",
        answer: "Price",
      },
      {
        id: "5",
        term: "Pagsaysay",
        answer: "Explanation",
      },
    ],
  },
  choiceActivity: {
    title: "Choose the Appropriate Response",
    instructions: "Select the best response for each situation.",
    questions: [
      {
        id: 1,
        prompt: "Someone asks you, \"San-o an programa?\"",
        options: [
          {
            key: "A",
            text: "Buwas ha alas-nuwebe han aga.",
          },
          {
            key: "B",
            text: "Hirani la ito.",
          },
          {
            key: "C",
            text: "Sangkay ko hiya.",
          },
          {
            key: "D",
            text: "Diri ako maaram magluto.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 2,
        prompt: "You do not understand what someone said. What should you say?",
        options: [
          {
            key: "A",
            text: "Mangaon na kita.",
          },
          {
            key: "B",
            text: "Diri ko nasasabtan.",
          },
          {
            key: "C",
            text: "Pag-amping.",
          },
          {
            key: "D",
            text: "Taga Samar ako.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 3,
        prompt: "You want someone to explain an unfamiliar instruction.",
        options: [
          {
            key: "A",
            text: "Mahimo mo ba ini igsaysay?",
          },
          {
            key: "B",
            text: "Pira na an imo edad?",
          },
          {
            key: "C",
            text: "Hain an merkado?",
          },
          {
            key: "D",
            text: "Kumusta ka?",
          },
        ],
        answerKey: "A",
      },
      {
        id: 4,
        prompt: "Someone gives you useful information. What should you say?",
        options: [
          {
            key: "A",
            text: "Salamat ha impormasyon.",
          },
          {
            key: "B",
            text: "Liko ha tuo.",
          },
          {
            key: "C",
            text: "Waray pa.",
          },
          {
            key: "D",
            text: "Hulat anay.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 5,
        prompt: "You want to ask how much something costs.",
        options: [
          {
            key: "A",
            text: "Hin-o ini?",
          },
          {
            key: "B",
            text: "Pira an bayad?",
          },
          {
            key: "C",
            text: "San-o ito?",
          },
          {
            key: "D",
            text: "Diin ka naukoy?",
          },
        ],
        answerKey: "B",
      },
    ],
  },
  fillInBlanks: {
    title: "Complete the Expressions",
    instructions: "Choose the correct word to complete each sentence.",
    items: [
      {
        id: "1",
        sentence: "May ______ ako.",
        hint: "I have a question.",
        answer: "pakiana",
        title: "Complete the Expressions",
        instructions: "Choose the correct word to complete each sentence.",
        wordBank: [
          "pakiana",
          "kahulogan",
          "tagan",
          "nasasabtan",
          "pagsaysay",
        ],
      },
      {
        id: "2",
        sentence: "Ano an ______ hini?",
        hint: "What is the meaning of this?",
        answer: "kahulogan",
        title: "Complete the Expressions",
        instructions: "Choose the correct word to complete each sentence.",
        wordBank: [
          "pakiana",
          "kahulogan",
          "tagan",
          "nasasabtan",
          "pagsaysay",
        ],
      },
      {
        id: "3",
        sentence: "Mahimo mo ba ako ______ hin impormasyon?",
        hint: "Can you give me information?",
        answer: "tagan",
        title: "Complete the Expressions",
        instructions: "Choose the correct word to complete each sentence.",
        wordBank: [
          "pakiana",
          "kahulogan",
          "tagan",
          "nasasabtan",
          "pagsaysay",
        ],
      },
      {
        id: "4",
        sentence: "Diri ko ______.",
        hint: "I don't understand.",
        answer: "nasasabtan",
        title: "Complete the Expressions",
        instructions: "Choose the correct word to complete each sentence.",
        wordBank: [
          "pakiana",
          "kahulogan",
          "tagan",
          "nasasabtan",
          "pagsaysay",
        ],
      },
      {
        id: "5",
        sentence: "Salamat ha imo ______.",
        hint: "Thank you for your explanation.",
        answer: "pagsaysay",
        title: "Complete the Expressions",
        instructions: "Choose the correct word to complete each sentence.",
        wordBank: [
          "pakiana",
          "kahulogan",
          "tagan",
          "nasasabtan",
          "pagsaysay",
        ],
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
      name: "Information Seeker Badge",
      description: "Awarded after successfully completing the lesson assessment with at least 70%.",
    },
    completionRequirement: "Obtain at least 70% in the lesson assessment. Learners may repeat the activities and assessment if they do not meet the requirement.",
  },
  expectedOutcomes: [
    "Ask for general and specific information.",
    "Request explanations and additional details.",
    "Clarify unfamiliar words and instructions.",
    "Give relevant answers to information-seeking questions.",
    "Participate in conversations that involve inquiries and explanations.",
    "Complete the vocabulary review.",
    "Study the useful phrases and lesson explanations.",
    "Finish the guided conversation exercises.",
    "Complete all practice activities.",
    "Obtain at least 70% in the lesson assessment.",
  ],
  arrangeWords: {
    title: "Arrange the Words",
    instructions: "Arrange the words to form a correct Waray sentence.",
    items: [
      {
        id: "1",
        words: [
          "ako",
          "pakiana",
          "May",
        ],
        answer: [
          "May",
          "pakiana",
          "ako",
        ],
        display: "May pakiana ako.",
      },
      {
        id: "2",
        words: [
          "ba",
          "Pwede",
          "ako",
          "magpakiana",
        ],
        answer: [
          "Pwede",
          "ba",
          "ako",
          "magpakiana",
        ],
        display: "Pwede ba ako magpakiana?",
      },
      {
        id: "3",
        words: [
          "Mahimo",
          "mo",
          "hin",
          "impormasyon",
          "ba",
          "ako",
          "tagan",
        ],
        answer: [
          "Mahimo",
          "mo",
          "ba",
          "ako",
          "tagan",
          "hin",
          "impormasyon",
        ],
        display: "Mahimo mo ba ako tagan hin impormasyon?",
      },
      {
        id: "4",
        words: [
          "Ano",
          "kahulogan",
          "hini",
          "an",
        ],
        answer: [
          "Ano",
          "an",
          "kahulogan",
          "hini",
        ],
        display: "Ano an kahulogan hini?",
      },
      {
        id: "5",
        words: [
          "ini",
          "igsaysay",
          "ba",
          "Mahimo",
          "mo",
        ],
        answer: [
          "Mahimo",
          "mo",
          "ba",
          "ini",
          "igsaysay",
        ],
        display: "Mahimo mo ba ini igsaysay?",
      },
    ],
  },
  speaking: {
    title: "Speaking Practice",
    instructions: "Read the following sentences aloud.",
    note: "Learners should listen to the model pronunciation before recording their own voice.",
    practiceLessonId: "waray_13",
    phrases: [
      {
        id: "1",
        text: "May pakiana ako.",
        respelling: "MAI pah-kee-AH-nah AH-koh",
        meaning: "I have a question.",
      },
      {
        id: "2",
        text: "Ano an kahulogan hini?",
        respelling: "AH-noh ahn kah-hoo-LOH-gahn HEE-nee",
        meaning: "What does this mean?",
      },
      {
        id: "3",
        text: "Alayon, hinay-hinay la an pagyakan.",
        respelling: "ah-LAH-yohn HEE-nai HEE-nai lah ahn pahg-YAH-kahn",
        meaning: "Please speak slowly.",
      },
      {
        id: "4",
        text: "Diin ako makakakuha hin dugang nga impormasyon?",
        respelling: "DEE-in AH-koh mah-kah-koo-HAH heen doo-GAHNG ngah im-por-mah-SYOHN",
        meaning: "Where can I get more information?",
      },
      {
        id: "5",
        text: "Ano ini?",
        respelling: "a-no i-ni",
        meaning: "What is this?",
      },
      {
        id: "6",
        text: "Pira an bayad?",
        respelling: "pi-ra an ba-yad",
        meaning: "How much is the payment?",
      },
      {
        id: "7",
        text: "Ano an karuyag mo sidngon?",
        respelling: "a-no an ka-ru-yag mo sing-on",
        meaning: "What do you mean?",
      },
    ],
  },
  exampleSituation: {
    description: "Imagine this situation from the lesson: Asking About a School Program.",
    lead: "You can begin by saying:",
    line: "May pakiana ako mahitungod han programa.",
    translation: "I have a question about the program.",
  },
  vocabularyIntro: "Learn the following words and expressions before proceeding to the activities.",
  pronunciationTip: "Read each syllable clearly. Avoid rushing through longer expressions.",
  selfIntroIntro: "Use these patterns and phrases from the lesson.",
  vocabulary: [
    {
      term: "Impormasyon",
      meaning: "Information",
      pronunciation: "im-por-mah-SYOHN",
      usage: "From this lesson's word list: information and details.",
      example: [
        {
          speaker: "A",
          text: "Oo, pagdara hin notebook ngan bolpen.",
          translation: "Yes, bring a notebook and a pen.",
        },
        {
          speaker: "B",
          text: "Salamat ha impormasyon!",
          translation: "Thank you for the information!",
        },
      ],
    },
    {
      term: "Detalye",
      meaning: "Detail",
      pronunciation: "deh-TAHL-yeh",
      usage: "From this lesson's word list: information and details.",
      example: [
        {
          speaker: "",
          text: "Kinahanglan ko hin dugang nga detalye.",
          translation: "I need more details.",
        },
      ],
    },
    {
      term: "Pakiana",
      meaning: "Question",
      pronunciation: "pah-kee-AH-nah",
      usage: "From this lesson's word list: information and details.",
      example: [
        {
          speaker: "A",
          text: "May pakiana ako mahitungod han programa.",
          translation: "I have a question about the program.",
        },
        {
          speaker: "B",
          text: "Ano ito nga pakiana?",
          translation: "What is your question?",
        },
      ],
    },
    {
      term: "Baton",
      meaning: "Answer",
      pronunciation: "BAH-tohn",
      usage: "From this lesson's word list: information and details.",
    },
    {
      term: "Pagsaysay",
      meaning: "Explanation",
      pronunciation: "pahg-sah-SAI",
      usage: "From this lesson's word list: information and details.",
      example: [
        {
          speaker: "A",
          text: "Waray, libre la an pagsulod.",
          translation: "No, admission is free.",
        },
        {
          speaker: "B",
          text: "Salamat ha imo pagsaysay.",
          translation: "Thank you for explaining.",
        },
      ],
    },
    {
      term: "Rason",
      meaning: "Reason",
      pronunciation: "rah-SOHN",
      usage: "From this lesson's word list: information and details.",
      example: [
        {
          speaker: "",
          text: "Ano an rason?",
          translation: "What is the reason?",
        },
      ],
    },
    {
      term: "Kahulogan",
      meaning: "Meaning",
      pronunciation: "kah-hoo-LOH-gahn",
      usage: "From this lesson's word list: information and details.",
      example: [
        {
          speaker: "",
          text: "Ano an kahulogan hini?",
          translation: "What does this mean?",
        },
      ],
    },
    {
      term: "Pananglitan",
      meaning: "Example",
      pronunciation: "pah-nahng-LEE-tahn",
      usage: "From this lesson's word list: information and details.",
    },
    {
      term: "Instruksyon",
      meaning: "Instruction",
      pronunciation: "in-strook-SYOHN",
      usage: "From this lesson's word list: information and details.",
      example: [
        {
          speaker: "A",
          text: "Pasayloa ako, diri ko nasasabtan an instruksyon.",
          translation: "Excuse me, I don't understand the instruction.",
        },
        {
          speaker: "B",
          text: "Hain nga bahin an diri mo nasasabtan?",
          translation: "Which part don't you understand?",
        },
      ],
    },
    {
      term: "Anunsyo",
      meaning: "Announcement",
      pronunciation: "ah-NOON-syoh",
      usage: "From this lesson's word list: information and details.",
    },
    {
      term: "Iskedyul",
      meaning: "Schedule",
      pronunciation: "is-keh-DYOOL",
      usage: "From this lesson's word list: information and details.",
    },
    {
      term: "Kinahanglanon",
      meaning: "Requirement",
      pronunciation: "kee-nahng-LAHN-on",
      usage: "From this lesson's word list: information and details.",
    },
    {
      term: "Presyo",
      meaning: "Price",
      pronunciation: "PREHS-yoh",
      usage: "From this lesson's word list: information and details.",
    },
    {
      term: "Petsa",
      meaning: "Date",
      pronunciation: "PEHT-sah",
      usage: "From this lesson's word list: information and details.",
      example: [
        {
          speaker: "",
          text: "San-o an petsa han programa?",
          translation: "When is the date of the program?",
        },
      ],
    },
    {
      term: "Oras",
      meaning: "Time",
      pronunciation: "OH-rahs",
      usage: "From this lesson's word list: information and details.",
    },
    {
      term: "Ano",
      meaning: "What",
      pronunciation: "AH-noh",
      usage: "A question and clarification expression.",
      example: [
        {
          speaker: "A",
          text: "Ano ito nga pakiana?",
          translation: "What is your question?",
        },
        {
          speaker: "B",
          text: "San-o an programa?",
          translation: "When is the program?",
        },
      ],
    },
    {
      term: "Hin-o",
      meaning: "Who",
      pronunciation: "HIN-oh",
      usage: "A question and clarification expression.",
      example: [
        {
          speaker: "",
          text: "Hin-o an magtututdo han klase?",
          translation: "Who will teach the class?",
        },
      ],
    },
    {
      term: "Diin",
      meaning: "Where",
      pronunciation: "DEE-in",
      usage: "A question and clarification expression.",
      example: [
        {
          speaker: "A",
          text: "Buwas ha alas-nuwebe han aga.",
          translation: "Tomorrow at nine in the morning.",
        },
        {
          speaker: "B",
          text: "Diin ini paghihimoon?",
          translation: "Where will it be held?",
        },
      ],
    },
    {
      term: "San-o",
      meaning: "When",
      pronunciation: "SAHN-oh",
      usage: "A question and clarification expression.",
      example: [
        {
          speaker: "A",
          text: "San-o an programa?",
          translation: "When is the program?",
        },
        {
          speaker: "B",
          text: "Buwas ha alas-nuwebe han aga.",
          translation: "Tomorrow at nine in the morning.",
        },
      ],
    },
    {
      term: "Kay ano",
      meaning: "Why",
      pronunciation: "KAI AH-noh",
      usage: "A question and clarification expression.",
    },
    {
      term: "Paonan-o",
      meaning: "How",
      pronunciation: "pah-oh-NAHN-oh",
      usage: "A question and clarification expression.",
    },
    {
      term: "Hain",
      meaning: "Which",
      pronunciation: "HAH-in",
      usage: "A question and clarification expression.",
      example: [
        {
          speaker: "A",
          text: "Hain nga bahin an diri mo nasasabtan?",
          translation: "Which part don't you understand?",
        },
        {
          speaker: "B",
          text: "Ini nga bahin. Mahimo mo ba igsaysay?",
          translation: "This part. Can you explain it?",
        },
      ],
    },
    {
      term: "Pira",
      meaning: "How many / How much",
      pronunciation: "PEE-rah",
      usage: "A question and clarification expression.",
      example: [
        {
          speaker: "",
          text: "Pira an bayad?",
          translation: "How much is the payment?",
        },
      ],
    },
    {
      term: "Ano nga klase",
      meaning: "What kind",
      pronunciation: "AH-noh ngah KLAH-seh",
      usage: "A question and clarification expression.",
      example: [
        {
          speaker: "",
          text: "Ano nga klase hin dokumento an kinahanglan?",
          translation: "What kind of document is needed?",
        },
      ],
    },
    {
      term: "Para hin ano",
      meaning: "What for",
      pronunciation: "PAH-rah heen AH-noh",
      usage: "A question and clarification expression.",
    },
    {
      term: "Ano an kahulogan hini?",
      meaning: "What does it mean?",
      pronunciation: "AH-noh ahn kah-hoo-LOH-gahn HEE-nee",
      usage: "A question and clarification expression.",
    },
    {
      term: "Mahimo mo ba igsaysay?",
      meaning: "Can you explain?",
      pronunciation: "mah-HEE-moh moh bah ig-sah-SAI",
      usage: "A question and clarification expression.",
      example: [
        {
          speaker: "A",
          text: "Ini nga bahin. Mahimo mo ba igsaysay?",
          translation: "This part. Can you explain it?",
        },
        {
          speaker: "B",
          text: "Kinahanglan mo anay basahon an mga pakiana, katapos batonon ito.",
          translation: "You need to read the questions first, then answer them.",
        },
      ],
    },
    {
      term: "Mahimo mo ba utrahon?",
      meaning: "Can you repeat?",
      pronunciation: "mah-HEE-moh moh bah oo-trah-HOHN",
      usage: "A question and clarification expression.",
      example: [
        {
          speaker: "A",
          text: "Kinahanglan mo anay basahon an mga pakiana, katapos batonon ito.",
          translation: "You need to read the questions first, then answer them.",
        },
        {
          speaker: "B",
          text: "Mahimo mo ba utrahon an kataposan nga bahin?",
          translation: "Can you repeat the last part?",
        },
      ],
    },
    {
      term: "Diri ko nasasabtan",
      meaning: "I don't understand",
      pronunciation: "DEE-ree koh nah-sah-SAHB-tahn",
      usage: "A question and clarification expression.",
      example: [
        {
          speaker: "A",
          text: "Pasayloa ako, diri ko nasasabtan an instruksyon.",
          translation: "Excuse me, I don't understand the instruction.",
        },
        {
          speaker: "B",
          text: "Hain nga bahin an diri mo nasasabtan?",
          translation: "Which part don't you understand?",
        },
      ],
    },
    {
      term: "Alayon, igsaysay",
      meaning: "Please explain",
      pronunciation: "ah-LAH-yohn ig-sah-SAI",
      usage: "A question and clarification expression.",
    },
    {
      term: "Kay",
      meaning: "Because",
      pronunciation: "KAI",
      usage: "From this lesson's word list: useful response words.",
      example: [
        {
          speaker: "",
          text: "Kay may klase ako.",
          translation: "Because I have a class.",
        },
      ],
    },
    {
      term: "Salit",
      meaning: "Therefore / So",
      pronunciation: "sah-LEET",
      usage: "From this lesson's word list: useful response words.",
    },
    {
      term: "Gihapon",
      meaning: "Also",
      pronunciation: "gee-HAH-pohn",
      usage: "From this lesson's word list: useful response words.",
    },
    {
      term: "La",
      meaning: "Only",
      pronunciation: "lah",
      usage: "From this lesson's word list: useful response words.",
      example: [
        {
          speaker: "A",
          text: "May bayad ba an pagsulod?",
          translation: "Is there an entrance fee?",
        },
        {
          speaker: "B",
          text: "Waray, libre la an pagsulod.",
          translation: "No, admission is free.",
        },
      ],
    },
    {
      term: "Bangin",
      meaning: "Maybe",
      pronunciation: "bah-NGEEN",
      usage: "From this lesson's word list: useful response words.",
    },
    {
      term: "Sigurado",
      meaning: "Certainly",
      pronunciation: "see-goo-RAH-doh",
      usage: "From this lesson's word list: useful response words.",
    },
    {
      term: "Husto",
      meaning: "Correct",
      pronunciation: "HOOS-toh",
      usage: "From this lesson's word list: useful response words.",
    },
    {
      term: "Sayop",
      meaning: "Incorrect",
      pronunciation: "SAH-yop",
      usage: "From this lesson's word list: useful response words.",
    },
    {
      term: "Igo",
      meaning: "Enough",
      pronunciation: "EE-goh",
      usage: "From this lesson's word list: useful response words.",
    },
    {
      term: "Dugang",
      meaning: "More",
      pronunciation: "doo-GAHNG",
      usage: "From this lesson's word list: useful response words.",
      example: [
        {
          speaker: "",
          text: "Diin ako makakakuha hin dugang nga impormasyon?",
          translation: "Where can I get more information?",
        },
      ],
    },
    {
      term: "Kulang",
      meaning: "Less",
      pronunciation: "KOO-lahng",
      usage: "From this lesson's word list: useful response words.",
    },
    {
      term: "Pariho",
      meaning: "Same",
      pronunciation: "pah-REE-hoh",
      usage: "From this lesson's word list: useful response words.",
    },
    {
      term: "Iba",
      meaning: "Different",
      pronunciation: "EE-bah",
      usage: "From this lesson's word list: useful response words.",
      example: [
        {
          speaker: "",
          text: "May iba pa ba ako nga kinahanglan hibaroan?",
          translation: "Is there anything else I need to know?",
        },
      ],
    },
    {
      term: "May-ada",
      meaning: "Available",
      pronunciation: "mah-yah-DAH",
      usage: "From this lesson's word list: useful response words.",
    },
  ],
  greetings: [
    {
      term: "Ano",
      meaning: "What",
      pronunciation: "AH-noh",
      usage: "A question and clarification expression.",
      example: [
        {
          speaker: "A",
          text: "Ano ito nga pakiana?",
          translation: "What is your question?",
        },
        {
          speaker: "B",
          text: "San-o an programa?",
          translation: "When is the program?",
        },
      ],
    },
    {
      term: "Hin-o",
      meaning: "Who",
      pronunciation: "HIN-oh",
      usage: "A question and clarification expression.",
      example: [
        {
          speaker: "",
          text: "Hin-o an magtututdo han klase?",
          translation: "Who will teach the class?",
        },
      ],
    },
    {
      term: "Diin",
      meaning: "Where",
      pronunciation: "DEE-in",
      usage: "A question and clarification expression.",
      example: [
        {
          speaker: "A",
          text: "Buwas ha alas-nuwebe han aga.",
          translation: "Tomorrow at nine in the morning.",
        },
        {
          speaker: "B",
          text: "Diin ini paghihimoon?",
          translation: "Where will it be held?",
        },
      ],
    },
    {
      term: "San-o",
      meaning: "When",
      pronunciation: "SAHN-oh",
      usage: "A question and clarification expression.",
      example: [
        {
          speaker: "A",
          text: "San-o an programa?",
          translation: "When is the program?",
        },
        {
          speaker: "B",
          text: "Buwas ha alas-nuwebe han aga.",
          translation: "Tomorrow at nine in the morning.",
        },
      ],
    },
    {
      term: "Kay ano",
      meaning: "Why",
      pronunciation: "KAI AH-noh",
      usage: "A question and clarification expression.",
    },
    {
      term: "Paonan-o",
      meaning: "How",
      pronunciation: "pah-oh-NAHN-oh",
      usage: "A question and clarification expression.",
    },
    {
      term: "Hain",
      meaning: "Which",
      pronunciation: "HAH-in",
      usage: "A question and clarification expression.",
      example: [
        {
          speaker: "A",
          text: "Hain nga bahin an diri mo nasasabtan?",
          translation: "Which part don't you understand?",
        },
        {
          speaker: "B",
          text: "Ini nga bahin. Mahimo mo ba igsaysay?",
          translation: "This part. Can you explain it?",
        },
      ],
    },
    {
      term: "Pira",
      meaning: "How many / How much",
      pronunciation: "PEE-rah",
      usage: "A question and clarification expression.",
      example: [
        {
          speaker: "",
          text: "Pira an bayad?",
          translation: "How much is the payment?",
        },
      ],
    },
    {
      term: "Ano nga klase",
      meaning: "What kind",
      pronunciation: "AH-noh ngah KLAH-seh",
      usage: "A question and clarification expression.",
      example: [
        {
          speaker: "",
          text: "Ano nga klase hin dokumento an kinahanglan?",
          translation: "What kind of document is needed?",
        },
      ],
    },
    {
      term: "Para hin ano",
      meaning: "What for",
      pronunciation: "PAH-rah heen AH-noh",
      usage: "A question and clarification expression.",
    },
    {
      term: "Ano an kahulogan hini?",
      meaning: "What does it mean?",
      pronunciation: "AH-noh ahn kah-hoo-LOH-gahn HEE-nee",
      usage: "A question and clarification expression.",
    },
    {
      term: "Mahimo mo ba igsaysay?",
      meaning: "Can you explain?",
      pronunciation: "mah-HEE-moh moh bah ig-sah-SAI",
      usage: "A question and clarification expression.",
      example: [
        {
          speaker: "A",
          text: "Ini nga bahin. Mahimo mo ba igsaysay?",
          translation: "This part. Can you explain it?",
        },
        {
          speaker: "B",
          text: "Kinahanglan mo anay basahon an mga pakiana, katapos batonon ito.",
          translation: "You need to read the questions first, then answer them.",
        },
      ],
    },
    {
      term: "Mahimo mo ba utrahon?",
      meaning: "Can you repeat?",
      pronunciation: "mah-HEE-moh moh bah oo-trah-HOHN",
      usage: "A question and clarification expression.",
      example: [
        {
          speaker: "A",
          text: "Kinahanglan mo anay basahon an mga pakiana, katapos batonon ito.",
          translation: "You need to read the questions first, then answer them.",
        },
        {
          speaker: "B",
          text: "Mahimo mo ba utrahon an kataposan nga bahin?",
          translation: "Can you repeat the last part?",
        },
      ],
    },
    {
      term: "Diri ko nasasabtan",
      meaning: "I don't understand",
      pronunciation: "DEE-ree koh nah-sah-SAHB-tahn",
      usage: "A question and clarification expression.",
      example: [
        {
          speaker: "A",
          text: "Pasayloa ako, diri ko nasasabtan an instruksyon.",
          translation: "Excuse me, I don't understand the instruction.",
        },
        {
          speaker: "B",
          text: "Hain nga bahin an diri mo nasasabtan?",
          translation: "Which part don't you understand?",
        },
      ],
    },
    {
      term: "Alayon, igsaysay",
      meaning: "Please explain",
      pronunciation: "ah-LAH-yohn ig-sah-SAI",
      usage: "A question and clarification expression.",
    },
    {
      term: "Kay",
      meaning: "Because",
      pronunciation: "KAI",
      usage: "From this lesson's word list: useful response words.",
      example: [
        {
          speaker: "",
          text: "Kay may klase ako.",
          translation: "Because I have a class.",
        },
      ],
    },
    {
      term: "Salit",
      meaning: "Therefore / So",
      pronunciation: "sah-LEET",
      usage: "From this lesson's word list: useful response words.",
    },
    {
      term: "Gihapon",
      meaning: "Also",
      pronunciation: "gee-HAH-pohn",
      usage: "From this lesson's word list: useful response words.",
    },
    {
      term: "La",
      meaning: "Only",
      pronunciation: "lah",
      usage: "From this lesson's word list: useful response words.",
      example: [
        {
          speaker: "A",
          text: "May bayad ba an pagsulod?",
          translation: "Is there an entrance fee?",
        },
        {
          speaker: "B",
          text: "Waray, libre la an pagsulod.",
          translation: "No, admission is free.",
        },
      ],
    },
    {
      term: "Bangin",
      meaning: "Maybe",
      pronunciation: "bah-NGEEN",
      usage: "From this lesson's word list: useful response words.",
    },
    {
      term: "Sigurado",
      meaning: "Certainly",
      pronunciation: "see-goo-RAH-doh",
      usage: "From this lesson's word list: useful response words.",
    },
    {
      term: "Husto",
      meaning: "Correct",
      pronunciation: "HOOS-toh",
      usage: "From this lesson's word list: useful response words.",
    },
    {
      term: "Sayop",
      meaning: "Incorrect",
      pronunciation: "SAH-yop",
      usage: "From this lesson's word list: useful response words.",
    },
    {
      term: "Igo",
      meaning: "Enough",
      pronunciation: "EE-goh",
      usage: "From this lesson's word list: useful response words.",
    },
    {
      term: "Dugang",
      meaning: "More",
      pronunciation: "doo-GAHNG",
      usage: "From this lesson's word list: useful response words.",
      example: [
        {
          speaker: "",
          text: "Diin ako makakakuha hin dugang nga impormasyon?",
          translation: "Where can I get more information?",
        },
      ],
    },
    {
      term: "Kulang",
      meaning: "Less",
      pronunciation: "KOO-lahng",
      usage: "From this lesson's word list: useful response words.",
    },
    {
      term: "Pariho",
      meaning: "Same",
      pronunciation: "pah-REE-hoh",
      usage: "From this lesson's word list: useful response words.",
    },
    {
      term: "Iba",
      meaning: "Different",
      pronunciation: "EE-bah",
      usage: "From this lesson's word list: useful response words.",
      example: [
        {
          speaker: "",
          text: "May iba pa ba ako nga kinahanglan hibaroan?",
          translation: "Is there anything else I need to know?",
        },
      ],
    },
    {
      term: "May-ada",
      meaning: "Available",
      pronunciation: "mah-yah-DAH",
      usage: "From this lesson's word list: useful response words.",
    },
  ],
  patterns: [
    {
      label: "Pattern 1: Saying What Your Question Is About",
      pattern: "May pakiana ako mahitungod han + Topic.",
      examples: [
        "May pakiana ako mahitungod han programa.",
        "May pakiana ako mahitungod han piyesta.",
      ],
    },
    {
      label: "Pattern 2: Asking When",
      pattern: "San-o an + Event?",
      examples: [
        "San-o an programa?",
        "San-o an piyesta?",
      ],
    },
    {
      label: "Pattern 3: Making a Request",
      pattern: "Mahimo mo ba + Action?",
      examples: [
        "Mahimo mo ba igsaysay?",
        "Mahimo mo ba utrahon?",
      ],
    },
  ],
  sentences: [
    {
      text: "May pakiana ako.",
      meaning: "I have a question.",
      pronunciation: "MAI pah-kee-AH-nah AH-koh",
    },
    {
      text: "Pwede ba ako magpakiana?",
      meaning: "May I ask something?",
      pronunciation: "PWEH-deh bah AH-koh mahg-pah-kee-AH-nah",
    },
    {
      text: "Mahimo mo ba ako tagan hin impormasyon?",
      meaning: "Can you give me information?",
      pronunciation: "mah-HEE-moh moh bah AH-koh tah-GAHN heen im-por-mah-SYOHN",
    },
    {
      text: "Ano an kahulogan hini?",
      meaning: "What does this mean?",
      pronunciation: "AH-noh ahn kah-hoo-LOH-gahn HEE-nee",
    },
    {
      text: "Mahimo mo ba ini igsaysay?",
      meaning: "Can you explain it? / Can you explain this?",
      pronunciation: "mah-HEE-moh moh bah EE-nee ig-sah-SAI",
    },
    {
      text: "Mahimo mo ba utrahon ito?",
      meaning: "Can you repeat that?",
      pronunciation: "mah-HEE-moh moh bah oo-trah-HOHN EE-toh",
    },
    {
      text: "Alayon, hinay-hinay la an pagyakan.",
      meaning: "Please speak slowly.",
      pronunciation: "ah-LAH-yohn HEE-nai HEE-nai lah ahn pahg-YAH-kahn",
    },
    {
      text: "Waray ko ikaw mabatii.",
      meaning: "I did not hear you.",
      pronunciation: "wah-RAI koh EE-kahw mah-bah-TEE-ee",
    },
    {
      text: "Ano an rason?",
      meaning: "What is the reason?",
      pronunciation: "AH-noh ahn rah-SOHN",
    },
    {
      text: "Diin ako makakakuha hin dugang nga impormasyon?",
      meaning: "Where can I get more information?",
      pronunciation: "DEE-in AH-koh mah-kah-koo-HAH heen doo-GAHNG ngah im-por-mah-SYOHN",
    },
    {
      text: "May iba pa ba ako nga kinahanglan hibaroan?",
      meaning: "Is there anything else I need to know?",
      pronunciation: "MAI EE-bah pah bah AH-koh ngah kee-nahng-LAHN hee-bah-ROH-ahn",
    },
    {
      text: "Salamat ha pagsaysay.",
      meaning: "Thank you for the explanation.",
      pronunciation: "sah-LAH-maht hah pahg-sah-SAI",
    },
    {
      text: "Nasasabtan ko na yana.",
      meaning: "I understand now.",
      pronunciation: "nah-sah-SAHB-tahn koh nah YAH-nah",
    },
    {
      text: "Kinahanglan ko hin dugang nga detalye.",
      meaning: "I need more details.",
      pronunciation: "kee-nahng-LAHN koh heen doo-GAHNG ngah deh-TAHL-yeh",
    },
    {
      text: "Ano ini?",
      meaning: "What is this?",
    },
    {
      text: "Diin ako makakakuha hin impormasyon?",
      meaning: "Where can I get information?",
    },
    {
      text: "Ano nga klase hin dokumento an kinahanglan?",
      meaning: "What kind of document is needed?",
    },
    {
      text: "Pira an bayad?",
      meaning: "How much is the payment?",
    },
    {
      text: "San-o an petsa han programa?",
      meaning: "When is the date of the program?",
    },
    {
      text: "Hin-o an magtututdo han klase?",
      meaning: "Who will teach the class?",
    },
    {
      text: "Ano an karuyag mo sidngon?",
      meaning: "What do you mean?",
    },
    {
      text: "Kay may klase ako.",
      meaning: "Because I have a class.",
    },
    {
      text: "Kay hirayo an amon balay.",
      meaning: "Because our house is far.",
    },
    {
      text: "Kay kinahanglan ko mag-adal.",
      meaning: "Because I need to study.",
    },
  ],
  conversations: [
    {
      title: "Conversation A: Asking About a School Program",
      lines: [
        {
          speaker: "Ana",
          text: "May pakiana ako mahitungod han programa.",
          translation: "I have a question about the program.",
        },
        {
          speaker: "Teacher",
          text: "Ano ito nga pakiana?",
          translation: "What is your question?",
        },
        {
          speaker: "Ana",
          text: "San-o an programa?",
          translation: "When is the program?",
        },
        {
          speaker: "Teacher",
          text: "Buwas ha alas-nuwebe han aga.",
          translation: "Tomorrow at nine in the morning.",
        },
        {
          speaker: "Ana",
          text: "Diin ini paghihimoon?",
          translation: "Where will it be held?",
        },
        {
          speaker: "Teacher",
          text: "Ha sulod han eskwelahan.",
          translation: "Inside the school.",
        },
        {
          speaker: "Ana",
          text: "May kinahanglan ba kami dad-on?",
          translation: "Do we need to bring anything?",
        },
        {
          speaker: "Teacher",
          text: "Oo, pagdara hin notebook ngan bolpen.",
          translation: "Yes, bring a notebook and a pen.",
        },
        {
          speaker: "Ana",
          text: "Salamat ha impormasyon!",
          translation: "Thank you for the information!",
        },
        {
          speaker: "Teacher",
          text: "Waray sapayan.",
          translation: "You're welcome.",
        },
      ],
      situation: "Ana and Teacher: Asking About a School Program.",
    },
    {
      title: "Conversation B: Requesting Clarification",
      lines: [
        {
          speaker: "Mark",
          text: "Pasayloa ako, diri ko nasasabtan an instruksyon.",
          translation: "Excuse me, I don't understand the instruction.",
        },
        {
          speaker: "Liza",
          text: "Hain nga bahin an diri mo nasasabtan?",
          translation: "Which part don't you understand?",
        },
        {
          speaker: "Mark",
          text: "Ini nga bahin. Mahimo mo ba igsaysay?",
          translation: "This part. Can you explain it?",
        },
        {
          speaker: "Liza",
          text: "Kinahanglan mo anay basahon an mga pakiana, katapos batonon ito.",
          translation: "You need to read the questions first, then answer them.",
        },
        {
          speaker: "Mark",
          text: "Mahimo mo ba utrahon an kataposan nga bahin?",
          translation: "Can you repeat the last part?",
        },
        {
          speaker: "Liza",
          text: "Oo. Basaha anay an mga pakiana, katapos batonon.",
          translation: "Yes. Read the questions first, then answer them.",
        },
        {
          speaker: "Mark",
          text: "Nasasabtan ko na. Salamat!",
          translation: "I understand now. Thank you!",
        },
        {
          speaker: "Liza",
          text: "Waray sapayan.",
          translation: "You're welcome.",
        },
      ],
      situation: "Mark and Liza: Requesting Clarification.",
    },
    {
      title: "Conversation C: Asking About an Event",
      lines: [
        {
          speaker: "Carlo",
          text: "May pakiana ako mahitungod han piyesta.",
          translation: "I have a question about the festival.",
        },
        {
          speaker: "Resident",
          text: "Ano man ito?",
          translation: "What is it?",
        },
        {
          speaker: "Carlo",
          text: "San-o an piyesta?",
          translation: "When is the festival?",
        },
        {
          speaker: "Resident",
          text: "Ha sunod nga semana.",
          translation: "Next week.",
        },
        {
          speaker: "Carlo",
          text: "Diin ini paghihimoon?",
          translation: "Where will it be held?",
        },
        {
          speaker: "Resident",
          text: "Ha sentro han bungto.",
          translation: "At the town center.",
        },
        {
          speaker: "Carlo",
          text: "May bayad ba an pagsulod?",
          translation: "Is there an entrance fee?",
        },
        {
          speaker: "Resident",
          text: "Waray, libre la an pagsulod.",
          translation: "No, admission is free.",
        },
        {
          speaker: "Carlo",
          text: "Salamat ha imo pagsaysay.",
          translation: "Thank you for explaining.",
        },
        {
          speaker: "Resident",
          text: "Waray sapayan.",
          translation: "You're welcome.",
        },
      ],
      situation: "Carlo and Resident: Asking About an Event.",
    },
  ],
  languageNotes: [
    {
      title: "A. Asking for General Information",
      body: [
        "When you need information about something, begin with a clear question.",
      ],
      examples: [
        {
          text: "Ano ini?",
          meaning: "What is this?",
        },
        {
          text: "Ano an kahulogan hini?",
          meaning: "What does this mean?",
        },
        {
          text: "Diin ako makakakuha hin impormasyon?",
          meaning: "Where can I get information?",
        },
        {
          text: "May pakiana ako.",
          meaning: "I have a question.",
        },
      ],
    },
    {
      title: "A. Asking for General Information",
      body: [
        "You can use these expressions when speaking with teachers, classmates, employees, or other people who can provide the information you need.",
      ],
    },
    {
      title: "B. Asking for Specific Details",
      body: [
        "Sometimes a general answer is not enough. You may need to ask additional questions to obtain more specific details.",
      ],
      examples: [
        {
          text: "Ano nga klase hin dokumento an kinahanglan?",
          meaning: "What kind of document is needed?",
        },
        {
          text: "Pira an bayad?",
          meaning: "How much is the payment?",
        },
        {
          text: "San-o an petsa han programa?",
          meaning: "When is the date of the program?",
        },
        {
          text: "Hin-o an magtututdo han klase?",
          meaning: "Who will teach the class?",
        },
      ],
    },
    {
      title: "B. Asking for Specific Details",
      body: [
        "Follow-up questions help make sure that the information you receive is complete.",
      ],
    },
    {
      title: "C. Requesting Clarification",
      body: [
        "When you do not understand a statement, you can politely ask the speaker to repeat or explain it.",
      ],
      examples: [
        {
          text: "Diri ko nasasabtan.",
          meaning: "I don't understand.",
        },
        {
          text: "Mahimo mo ba utrahon ito?",
          meaning: "Can you repeat that?",
        },
        {
          text: "Mahimo mo ba ini igsaysay?",
          meaning: "Can you explain this?",
        },
        {
          text: "Ano an karuyag mo sidngon?",
          meaning: "What do you mean?",
        },
      ],
    },
    {
      title: "C. Requesting Clarification",
      body: [
        "When asking for clarification, speak politely and give the other person enough time to explain.",
      ],
    },
    {
      title: "D. Explaining Reasons",
      body: [
        "When someone asks why something happened, you can provide a reason using kay (because).",
      ],
      examples: [
        {
          text: "Kay may klase ako.",
          meaning: "Because I have a class.",
        },
        {
          text: "Kay hirayo an amon balay.",
          meaning: "Because our house is far.",
        },
        {
          text: "Kay kinahanglan ko mag-adal.",
          meaning: "Because I need to study.",
        },
      ],
    },
    {
      title: "D. Explaining Reasons",
      body: [
        "You can also ask:",
        "Kay ano nga waray ka kumadto?",
        "Why didn't you go?",
      ],
    },
    {
      title: "E. Giving Complete Answers",
      body: [
        "An effective response should answer the question directly and provide relevant details when necessary.",
        "Question: San-o an iyo programa?",
        "When is your program?",
        "Short answer: Buwas.",
        "Tomorrow.",
        "More complete answer: Buwas ha alas-nuwebe han aga an amon programa.",
        "Our program is tomorrow at nine in the morning.",
        "Another example:",
        "Question: Diin ako makakakuha hin impormasyon?",
        "Where can I get information?",
        "Answer: Makakakuha ka hin impormasyon ha opisina han eskwelahan.",
        "You can get information at the school office.",
      ],
    },
    {
      title: "Useful Phrases and Sentences",
      body: [
        "Study the following expressions for asking questions and requesting additional information.",
      ],
    },
  ],
  inferredFields: [
    "situation",
    "usage",
    "example",
    "pattern",
    "arrange",
    "speaking phrase",
    "target pitch and mood",
    "respelling",
    "example situation",
    "pronunciation tip",
    "completion requirement",
  ],
};
