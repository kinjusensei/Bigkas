import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 2 — imported from "Lesson Plan.pdf", pages 650–674.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
// Fields not given by the plan are INFERRED from this lesson's own content and
// listed in docs/waray-inferred-keys.md: usage, example, pattern, arrange, speaking phrase, respelling, target pitch and mood, example situation, pronunciation tip, badge description, completion requirement.
// The practice answers are INFERRED drafts, not from the PDF. See
// docs/waray-draft-answer-keys.md for each answer and how it was found.

export const warayLesson2: StructuredLesson = {
  lessonId: "waray_2",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 2,
  title: "Common Expressions and Responses",
  level: "Beginner",
  unit: "Unit 1 – Fundamentals",
  estimatedDuration: "25–30 minutes",
  prerequisite: "Lesson 1 – Basic Greetings and Self-Introduction",
  languageVariety: "Western Samar Waray",
  intro: [
    "Lesson Description:",
    "In this lesson, learners will study common Waray expressions used in everyday conversations. They will learn how to agree or disagree, accept or refuse something, ask for clarification, make simple requests, and respond politely to other people.",
    "These expressions are useful in different situations, such as talking with friends, asking for assistance, responding to questions, and communicating with people in Waray-speaking communities.",
    "A. Why Learn Common Expressions?",
    "Everyday conversations involve more than greetings and introductions. People regularly ask questions, make requests, express opinions, agree or disagree, and respond to different situations.",
    "Learning common expressions helps you communicate more naturally and understand what other people are saying.",
    "For example, when someone offers you something, you should know how to accept or politely refuse it. When you do not understand a statement, you should also know how to ask the speaker to repeat it.",
    "B. What You Will Learn",
    "In this lesson, you will learn how to say:",
    "• Yes and no.",
    "• Okay and not okay.",
    "• I understand and I don't understand.",
    "• Thank you and you're welcome.",
    "• Please and excuse me.",
    "• I'm sorry.",
    "• Can you repeat that?",
    "• Please speak slowly.",
    "• I don't know.",
    "• That's right and that's wrong.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify common Waray expressions used in everyday communication.",
    "Use appropriate expressions when agreeing or disagreeing.",
    "Accept or refuse simple requests and offers.",
    "Express gratitude and apologize when necessary.",
    "Ask someone to repeat or clarify a statement.",
    "Respond appropriately to simple questions and statements.",
    "Participate in short conversations using common Waray expressions.",
  ],
  assessment: {
    instructions: "Choose the best answer. Each question is worth one point.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What is the Waray word for \"Yes\"?",
        options: [
          {
            key: "A",
            text: "Diri",
          },
          {
            key: "B",
            text: "Oo",
          },
          {
            key: "C",
            text: "Sige",
          },
          {
            key: "D",
            text: "Hulat",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "What does \"Diri ako maaram\" mean?",
        options: [
          {
            key: "A",
            text: "I understand.",
          },
          {
            key: "B",
            text: "I agree.",
          },
          {
            key: "C",
            text: "I don't know.",
          },
          {
            key: "D",
            text: "I am fine.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 3,
        prompt: "Which expression means \"Thank you very much\"?",
        options: [
          {
            key: "A",
            text: "Waray sapayan.",
          },
          {
            key: "B",
            text: "Damo nga salamat.",
          },
          {
            key: "C",
            text: "Hulat anay.",
          },
          {
            key: "D",
            text: "Diri ko nasasabtan.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 4,
        prompt: "What should you say when you do not understand someone?",
        options: [
          {
            key: "A",
            text: "Diri ko nasasabtan.",
          },
          {
            key: "B",
            text: "Oo, nauyon ako.",
          },
          {
            key: "C",
            text: "Waray sapayan.",
          },
          {
            key: "D",
            text: "Salamat.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 5,
        prompt: "What does \"Hulat anay\" mean?",
        options: [
          {
            key: "A",
            text: "Come here.",
          },
          {
            key: "B",
            text: "Wait a moment.",
          },
          {
            key: "C",
            text: "Go there.",
          },
          {
            key: "D",
            text: "Let's go.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 6,
        prompt: "Which expression means \"I agree\"?",
        options: [
          {
            key: "A",
            text: "Diri ako maaram.",
          },
          {
            key: "B",
            text: "Nauyon ako.",
          },
          {
            key: "C",
            text: "Diri ako nauyon.",
          },
          {
            key: "D",
            text: "Diri ko nasasabtan.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 7,
        prompt: "What is the Waray expression for \"Can you help me?\"",
        options: [
          {
            key: "A",
            text: "Pwede mo ba ako buligan?",
          },
          {
            key: "B",
            text: "Ano an imo ngaran?",
          },
          {
            key: "C",
            text: "Taga diin ka?",
          },
          {
            key: "D",
            text: "Kumusta ka?",
          },
        ],
        answerKey: "A",
      },
      {
        id: 8,
        prompt: "What does \"Waray sapayan\" mean?",
        options: [
          {
            key: "A",
            text: "Thank you.",
          },
          {
            key: "B",
            text: "I'm sorry.",
          },
          {
            key: "C",
            text: "You're welcome.",
          },
          {
            key: "D",
            text: "I don't know.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 9,
        prompt: "Which expression should you use when asking someone to speak slowly?",
        options: [
          {
            key: "A",
            text: "Alayon, hinay-hinay la pagyakan.",
          },
          {
            key: "B",
            text: "Hulat anay.",
          },
          {
            key: "C",
            text: "Damo nga salamat.",
          },
          {
            key: "D",
            text: "Kadto didto.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 10,
        prompt: "Someone helps you with a difficult task. What is the most appropriate response?",
        options: [
          {
            key: "A",
            text: "Diri ako maaram.",
          },
          {
            key: "B",
            text: "Damo nga salamat.",
          },
          {
            key: "C",
            text: "Diri ko nasasabtan.",
          },
          {
            key: "D",
            text: "Ano an imo ginyakan?",
          },
        ],
        answerKey: "B",
      },
    ],
  },
  extraActivities: [
    {
      title: "Complete the Conversation",
      kind: "roleplay",
      instructions: "Complete the following conversation by choosing the appropriate expressions.\nMaria: Pasaylo, __________________________?\nAna: Oo, ano an imo kinahanglan?\nMaria: __________________________ ini nga pulong.\nAna: Sige, isaysay ko ha imo.\nMaria: __________________________!\nAna: __________________________.",
      items: [],
      choices: [
        "Diri ko nasasabtan – Pwede mo ba ako buligan – Damo nga salamat – Waray sapayan",
      ],
    },
    {
      title: "Everyday Expression Practice",
      kind: "other",
      instructions: "Translate the following English sentences into Waray.",
      items: [
        "Yes, I agree.",
        "No, I don't know.",
        "Please wait a moment.",
        "I don't understand.",
        "Thank you very much.",
      ],
    },
  ],
  matchActivity: {
    title: "Vocabulary Matching",
    instructions: "Match each English expression in Column A with its correct Waray translation in Column B.",
    pairs: [
      {
        id: "1",
        term: "Yes",
        answer: "Oo",
      },
      {
        id: "2",
        term: "Thank you",
        answer: "Salamat",
      },
      {
        id: "3",
        term: "No",
        answer: "Diri",
      },
      {
        id: "4",
        term: "You're welcome",
        answer: "Waray sapayan",
      },
      {
        id: "5",
        term: "I don't know",
        answer: "Diri ako maaram",
      },
    ],
  },
  choiceActivity: {
    title: "Multiple Choice",
    questions: [
      {
        id: 1,
        prompt: "How do you say \"I don't understand\" in Waray?",
        options: [
          {
            key: "A",
            text: "Nasasabtan ko.",
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
            text: "Salamat.",
          },
        ],
        answerKey: "B",
        title: "Multiple Choice",
        instructions: "Choose the correct Waray translation of each English expression.",
      },
      {
        id: 2,
        prompt: "What does \"Alayon, hinay-hinay la pagyakan\" mean?",
        options: [
          {
            key: "A",
            text: "Please speak slowly.",
          },
          {
            key: "B",
            text: "Please come here.",
          },
          {
            key: "C",
            text: "Thank you very much.",
          },
          {
            key: "D",
            text: "I don't know.",
          },
        ],
        answerKey: "A",
        title: "Multiple Choice",
        instructions: "Choose the correct Waray translation of each English expression.",
      },
      {
        id: 3,
        prompt: "Which expression means \"I agree\"?",
        options: [
          {
            key: "A",
            text: "Diri ako maaram.",
          },
          {
            key: "B",
            text: "Nauyon ako.",
          },
          {
            key: "C",
            text: "Waray sapayan.",
          },
          {
            key: "D",
            text: "Hulat anay.",
          },
        ],
        answerKey: "B",
        title: "Multiple Choice",
        instructions: "Choose the correct Waray translation of each English expression.",
      },
      {
        id: 4,
        prompt: "What does \"Hulat anay\" mean?",
        options: [
          {
            key: "A",
            text: "Let's go.",
          },
          {
            key: "B",
            text: "Come here.",
          },
          {
            key: "C",
            text: "Wait a moment.",
          },
          {
            key: "D",
            text: "I understand.",
          },
        ],
        answerKey: "C",
        title: "Multiple Choice",
        instructions: "Choose the correct Waray translation of each English expression.",
      },
      {
        id: 5,
        prompt: "Which expression means \"Can you help me?\"",
        options: [
          {
            key: "A",
            text: "Pwede mo ba ako buligan?",
          },
          {
            key: "B",
            text: "Ano an imo ngaran?",
          },
          {
            key: "C",
            text: "Taga diin ka?",
          },
          {
            key: "D",
            text: "Kumusta ka?",
          },
        ],
        answerKey: "A",
        title: "Multiple Choice",
        instructions: "Choose the correct Waray translation of each English expression.",
      },
      {
        id: 6,
        prompt: "Someone gives you a glass of water. What should you say?",
        options: [
          {
            key: "A",
            text: "Diri ako maaram.",
          },
          {
            key: "B",
            text: "Damo nga salamat.",
          },
          {
            key: "C",
            text: "Hulat anay.",
          },
          {
            key: "D",
            text: "Ano an imo ngaran?",
          },
        ],
        answerKey: "B",
        title: "Choose the Appropriate Response",
        instructions: "Read each situation and choose the most appropriate Waray response.",
      },
      {
        id: 7,
        prompt: "Someone says something you cannot understand. What should you say?",
        options: [
          {
            key: "A",
            text: "Diri ko nasasabtan.",
          },
          {
            key: "B",
            text: "Oo, maupay.",
          },
          {
            key: "C",
            text: "Waray sapayan.",
          },
          {
            key: "D",
            text: "Kadto didto.",
          },
        ],
        answerKey: "A",
        title: "Choose the Appropriate Response",
        instructions: "Read each situation and choose the most appropriate Waray response.",
      },
      {
        id: 8,
        prompt: "Someone asks if you agree with their statement, and you agree. What should you say?",
        options: [
          {
            key: "A",
            text: "Diri ako nauyon.",
          },
          {
            key: "B",
            text: "Oo, nauyon ako.",
          },
          {
            key: "C",
            text: "Diri ako maaram.",
          },
          {
            key: "D",
            text: "Pasayloa ako.",
          },
        ],
        answerKey: "B",
        title: "Choose the Appropriate Response",
        instructions: "Read each situation and choose the most appropriate Waray response.",
      },
      {
        id: 9,
        prompt: "You need someone to wait for a moment. What should you say?",
        options: [
          {
            key: "A",
            text: "Hulat anay.",
          },
          {
            key: "B",
            text: "Salamat.",
          },
          {
            key: "C",
            text: "Babay.",
          },
          {
            key: "D",
            text: "Maupay nga aga.",
          },
        ],
        answerKey: "A",
        title: "Choose the Appropriate Response",
        instructions: "Read each situation and choose the most appropriate Waray response.",
      },
      {
        id: 10,
        prompt: "Someone helps you carry something. What should you say?",
        options: [
          {
            key: "A",
            text: "Diri ko kaya.",
          },
          {
            key: "B",
            text: "Damo nga salamat.",
          },
          {
            key: "C",
            text: "Diri ako maaram.",
          },
          {
            key: "D",
            text: "Taga Samar ako.",
          },
        ],
        answerKey: "B",
        title: "Choose the Appropriate Response",
        instructions: "Read each situation and choose the most appropriate Waray response.",
      },
    ],
  },
  fillInBlanks: {
    title: "Fill in the Blanks",
    instructions: "Complete each sentence using the correct word or expression from the choices.",
    items: [
      {
        id: "1",
        sentence: "_____, nauyon ako.",
        answer: "Oo",
        title: "Fill in the Blanks",
        instructions: "Complete each sentence using the correct word or expression from the choices.",
        wordBank: [
          "Oo",
          "Diri",
          "Salamat",
          "Hulat",
          "Maaram",
        ],
      },
      {
        id: "2",
        sentence: "_____ ako nauyon.",
        answer: "Diri",
        title: "Fill in the Blanks",
        instructions: "Complete each sentence using the correct word or expression from the choices.",
        wordBank: [
          "Oo",
          "Diri",
          "Salamat",
          "Hulat",
          "Maaram",
        ],
      },
      {
        id: "3",
        sentence: "Damo nga _____!",
        answer: "Salamat",
        title: "Fill in the Blanks",
        instructions: "Complete each sentence using the correct word or expression from the choices.",
        wordBank: [
          "Oo",
          "Diri",
          "Salamat",
          "Hulat",
          "Maaram",
        ],
      },
      {
        id: "4",
        sentence: "_____ anay, alayon.",
        answer: "Hulat",
        title: "Fill in the Blanks",
        instructions: "Complete each sentence using the correct word or expression from the choices.",
        wordBank: [
          "Oo",
          "Diri",
          "Salamat",
          "Hulat",
          "Maaram",
        ],
      },
      {
        id: "5",
        sentence: "_____ ako hini nga pulong.",
        answer: "Maaram",
        title: "Fill in the Blanks",
        instructions: "Complete each sentence using the correct word or expression from the choices.",
        wordBank: [
          "Oo",
          "Diri",
          "Salamat",
          "Hulat",
          "Maaram",
        ],
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
      name: "Waray nga Makigkomunikar Badge",
      description: "Awarded after successfully completing Lesson 2.",
    },
    completionRequirement: "Obtain at least 70% in the lesson assessment. Learners may repeat the activities and assessment if they do not meet the requirement.",
  },
  expectedOutcomes: [
    "To complete Lesson 2, learners should:",
    "Review the vocabulary list.",
    "Practice the useful expressions and sentences.",
    "Read and understand the guided conversations.",
    "Complete the required practice activities.",
    "Achieve at least 70% in the lesson assessment.",
    "In this lesson, you learned common Waray expressions used in everyday communication.",
    "You learned how to:",
    "Agree and disagree.",
    "Accept and refuse offers.",
    "Express gratitude and apologize.",
    "Ask someone to repeat or explain something.",
    "Ask for help.",
    "Respond appropriately in simple conversations.",
  ],
  arrangeWords: {
    title: "Arrange the Words",
    instructions: "Arrange the words to form a correct Waray sentence.",
    items: [
      {
        id: "1",
        words: [
          "ito",
          "Oo",
          "husto",
        ],
        answer: [
          "Oo",
          "husto",
          "ito",
        ],
        display: "Oo, husto ito.",
      },
      {
        id: "2",
        words: [
          "ako",
          "nauyon",
          "Diri",
        ],
        answer: [
          "Diri",
          "ako",
          "nauyon",
        ],
        display: "Diri ako nauyon.",
      },
      {
        id: "3",
        words: [
          "tinuod",
          "ito",
          "Diri",
        ],
        answer: [
          "Diri",
          "ito",
          "tinuod",
        ],
        display: "Diri ito tinuod.",
      },
      {
        id: "4",
        words: [
          "Oo",
          "ko",
          "karuyag",
          "ito",
        ],
        answer: [
          "Oo",
          "karuyag",
          "ko",
          "ito",
        ],
        display: "Oo, karuyag ko ito.",
      },
      {
        id: "5",
        words: [
          "kaya",
          "Oo",
          "ko",
        ],
        answer: [
          "Oo",
          "kaya",
          "ko",
        ],
        display: "Oo, kaya ko.",
      },
    ],
  },
  speaking: {
    title: "Speaking Practice",
    instructions: "Read the following sentences aloud.",
    note: "Learners should listen to the model pronunciation before recording their own voice.",
    practiceLessonId: "waray_2",
    phrases: [
      {
        id: "1",
        text: "Oo, husto ito.",
        respelling: "o-o hus-to i-to",
        meaning: "Yes, that's right.",
      },
      {
        id: "2",
        text: "Tinuod ito.",
        respelling: "ti-nu-od i-to",
        meaning: "That's true.",
      },
      {
        id: "3",
        text: "Oo, kaya ko.",
        respelling: "o-o ka-ya ko",
        meaning: "Yes, I can.",
      },
      {
        id: "4",
        text: "Pwede mo ba ito utrohon?",
        respelling: "pweh-deh mo ba? i-to ut-ro-hon",
        meaning: "Can you repeat that?",
      },
      {
        id: "5",
        text: "Pwede mo ba ito isaysay?",
        respelling: "pweh-deh mo ba? i-to i-say-say",
        meaning: "Can you explain it?",
      },
      {
        id: "6",
        text: "Pwede mo ba ipakita ha akon?",
        respelling: "pweh-deh mo ba? i-pa-ki-ta ha a-kon",
        meaning: "Can you show me?",
      },
      {
        id: "7",
        text: "Diri pa.",
        respelling: "di-ri pah",
        meaning: "Not yet.",
      },
    ],
  },
  exampleSituation: {
    description: "Imagine this situation from the lesson: Accepting an Offer.",
    lead: "You can begin by saying:",
    line: "Karuyag mo ba hin tubig?",
    translation: "Do you want some water?",
  },
  vocabularyIntro: "Learn the following words and expressions before proceeding to the activities.",
  pronunciationTip: "Read each syllable clearly. Avoid rushing through longer expressions.",
  selfIntroIntro: "Use these patterns and phrases from the lesson.",
  vocabulary: [
    {
      term: "Oo",
      meaning: "Yes",
      pronunciation: "o-o",
      usage: "From this lesson's word list: basic responses.",
      example: [
        {
          speaker: "A",
          text: "Karuyag mo ba hin tubig?",
          translation: "Do you want some water?",
        },
        {
          speaker: "B",
          text: "Oo, karuyag ko.",
          translation: "Yes, I do.",
        },
      ],
    },
    {
      term: "Diri",
      meaning: "No",
      pronunciation: "di-ri",
      usage: "From this lesson's word list: basic responses.",
      example: [
        {
          speaker: "A",
          text: "Pakadto kita ha eskwelahan buwas.",
          translation: "Let's go to school tomorrow.",
        },
        {
          speaker: "B",
          text: "Ano? Diri ko nasasabtan.",
          translation: "What? I don't understand.",
        },
      ],
    },
    {
      term: "Sige",
      meaning: "Okay",
      pronunciation: "si-ge",
      usage: "From this lesson's word list: basic responses.",
      example: [
        {
          speaker: "A",
          text: "Ah, nasasabtan ko na.",
          translation: "Ah, I understand now.",
        },
        {
          speaker: "B",
          text: "Sige, kitaay kita buwas.",
          translation: "Okay, see you tomorrow.",
        },
      ],
    },
    {
      term: "Diri okay",
      meaning: "Not okay",
      pronunciation: "di-ri o-key",
      usage: "From this lesson's word list: basic responses.",
    },
    {
      term: "Bangin",
      meaning: "Maybe",
      pronunciation: "ba-ngin",
      usage: "From this lesson's word list: basic responses.",
    },
    {
      term: "Syempre",
      meaning: "Of course",
      pronunciation: "syem-pre",
      usage: "From this lesson's word list: basic responses.",
    },
    {
      term: "Tinuod?",
      meaning: "Really?",
      pronunciation: "ti-nu-od",
      usage: "From this lesson's word list: basic responses.",
      example: [
        {
          speaker: "",
          text: "Tinuod ito.",
          translation: "That's true.",
        },
      ],
    },
    {
      term: "Husto ito.",
      meaning: "That's right.",
      pronunciation: "hus-to i-to",
      usage: "From this lesson's word list: basic responses.",
      example: [
        {
          speaker: "",
          text: "Oo, husto ito.",
          translation: "Yes, that's right.",
        },
      ],
    },
    {
      term: "Sayop ito.",
      meaning: "That's wrong.",
      pronunciation: "sa-yop i-to",
      usage: "From this lesson's word list: basic responses.",
    },
    {
      term: "Nauyon ako.",
      meaning: "I agree.",
      pronunciation: "na-u-yon a-ko",
      usage: "From this lesson's word list: basic responses.",
    },
    {
      term: "Alayon",
      meaning: "Please",
      pronunciation: "a-la-yon",
      usage: "An expression of politeness.",
      example: [
        {
          speaker: "",
          text: "Alayon, hinay-hinay la pagyakan.",
          translation: "Please speak slowly.",
        },
      ],
    },
    {
      term: "Salamat",
      meaning: "Thank you",
      pronunciation: "sa-la-mat",
      usage: "An expression of politeness.",
      example: [
        {
          speaker: "A",
          text: "Ini, para ha imo.",
          translation: "Here, this is for you.",
        },
        {
          speaker: "B",
          text: "Damo nga salamat!",
          translation: "Thank you very much!",
        },
      ],
    },
    {
      term: "Damo nga salamat",
      meaning: "Thank you very much",
      pronunciation: "da-mo nga sa-la-mat",
      usage: "An expression of politeness.",
      example: [
        {
          speaker: "A",
          text: "Damo nga salamat!",
          translation: "Thank you very much!",
        },
        {
          speaker: "B",
          text: "Waray sapayan.",
          translation: "You're welcome.",
        },
      ],
    },
    {
      term: "Waray sapayan",
      meaning: "You're welcome",
      pronunciation: "wa-ray sa-pa-yan",
      usage: "An expression of politeness.",
      example: [
        {
          speaker: "A",
          text: "Damo nga salamat!",
          translation: "Thank you very much!",
        },
        {
          speaker: "B",
          text: "Waray sapayan.",
          translation: "You're welcome.",
        },
      ],
    },
    {
      term: "Pasayloa ako",
      meaning: "I'm sorry",
      pronunciation: "pa-say-lo-a a-ko",
      usage: "An expression of politeness.",
    },
    {
      term: "Pasaylo",
      meaning: "Excuse me",
      pronunciation: "pa-say-lo",
      usage: "An expression of politeness.",
      example: [
        {
          speaker: "A",
          text: "Pasaylo, pwede mo ba ako buligan?",
          translation: "Excuse me, can you help me?",
        },
        {
          speaker: "B",
          text: "Oo, ano an imo kinahanglan?",
          translation: "Yes, what do you need?",
        },
      ],
    },
    {
      term: "Okay la",
      meaning: "It's okay",
      pronunciation: "o-key la",
      usage: "An expression of politeness.",
    },
    {
      term: "Alayon, hulat anay",
      meaning: "Please wait",
      pronunciation: "a-la-yon hu-lat a-nay",
      usage: "An expression of politeness.",
    },
    {
      term: "Nasasabtan ko.",
      meaning: "I understand.",
      pronunciation: "na-sa-sab-tan ko",
      usage: "An expression for understanding.",
      example: [
        {
          speaker: "A",
          text: "Pakadto kita ha eskwelahan buwas.",
          translation: "Let's go to school tomorrow.",
        },
        {
          speaker: "B",
          text: "Ah, nasasabtan ko na.",
          translation: "Ah, I understand now.",
        },
      ],
    },
    {
      term: "Diri ko nasasabtan.",
      meaning: "I don't understand.",
      pronunciation: "di-ri ko na-sa-sab-tan",
      usage: "An expression for understanding.",
      example: [
        {
          speaker: "A",
          text: "Ano? Diri ko nasasabtan.",
          translation: "What? I don't understand.",
        },
        {
          speaker: "B",
          text: "Pakadto kita ha eskwelahan buwas.",
          translation: "Let's go to school tomorrow.",
        },
      ],
    },
    {
      term: "Maaram ako.",
      meaning: "I know.",
      pronunciation: "ma-a-ram a-ko",
      usage: "An expression for understanding.",
    },
    {
      term: "Diri ako maaram.",
      meaning: "I don't know.",
      pronunciation: "di-ri a-ko ma-a-ram",
      usage: "An expression for understanding.",
    },
    {
      term: "Nahinunumdoman ko.",
      meaning: "I remember.",
      pronunciation: "na-hi-nu-num-do-man ko",
      usage: "An expression for understanding.",
    },
    {
      term: "Nahingalimot ako.",
      meaning: "I forgot.",
      pronunciation: "na-hin-ga-li-mot a-ko",
      usage: "An expression for understanding.",
    },
    {
      term: "Kahuna ko.",
      meaning: "I think so.",
      pronunciation: "ka-hu-na ko",
      usage: "An expression for understanding.",
    },
    {
      term: "Diri ako naghuhunahuna hin sugad.",
      meaning: "I don't think so.",
      pronunciation: "di-ri a-ko nag-hu-hu-na-hu-na hin su-gad",
      usage: "An expression for understanding.",
    },
    {
      term: "Hulat",
      meaning: "Wait",
      pronunciation: "hu-lat",
      usage: "Used in simple requests.",
      example: [
        {
          speaker: "",
          text: "Hulat anay.",
          translation: "Wait a moment.",
        },
      ],
    },
    {
      term: "Kadi",
      meaning: "Come",
      pronunciation: "ka-di",
      usage: "Used in simple requests.",
      example: [
        {
          speaker: "",
          text: "Kadi ngadi.",
          translation: "Come here.",
        },
      ],
    },
    {
      term: "Kadto",
      meaning: "Go",
      pronunciation: "kad-to",
      usage: "Used in simple requests.",
      example: [
        {
          speaker: "",
          text: "Kadto didto.",
          translation: "Go there.",
        },
      ],
    },
    {
      term: "Kita",
      meaning: "Look",
      pronunciation: "ki-ta",
      usage: "Used in simple requests.",
      example: [
        {
          speaker: "A",
          text: "Pakadto kita ha eskwelahan buwas.",
          translation: "Let's go to school tomorrow.",
        },
        {
          speaker: "B",
          text: "Ano? Diri ko nasasabtan.",
          translation: "What? I don't understand.",
        },
      ],
    },
    {
      term: "Pamati",
      meaning: "Listen",
      pronunciation: "pa-ma-ti",
      usage: "Used in simple requests.",
    },
    {
      term: "Pakiistorya",
      meaning: "Speak",
      pronunciation: "pa-ki-is-tor-ya",
      usage: "Used in simple requests.",
    },
    {
      term: "Hinay-hinay",
      meaning: "Slowly",
      pronunciation: "hi-nay hi-nay",
      usage: "Used in simple requests.",
      example: [
        {
          speaker: "",
          text: "Alayon, hinay-hinay la pagyakan.",
          translation: "Please speak slowly.",
        },
      ],
    },
    {
      term: "Utro",
      meaning: "Again",
      pronunciation: "ut-ro",
      usage: "Used in simple requests.",
    },
    {
      term: "Didi",
      meaning: "Here",
      pronunciation: "di-di",
      usage: "Used in simple requests.",
    },
    {
      term: "Didto",
      meaning: "There",
      pronunciation: "did-to",
      usage: "Used in simple requests.",
      example: [
        {
          speaker: "",
          text: "Kadto didto.",
          translation: "Go there.",
        },
      ],
    },
  ],
  greetings: [
    {
      term: "Oo",
      meaning: "Yes",
      pronunciation: "o-o",
      usage: "From this lesson's word list: basic responses.",
      example: [
        {
          speaker: "A",
          text: "Karuyag mo ba hin tubig?",
          translation: "Do you want some water?",
        },
        {
          speaker: "B",
          text: "Oo, karuyag ko.",
          translation: "Yes, I do.",
        },
      ],
    },
    {
      term: "Diri",
      meaning: "No",
      pronunciation: "di-ri",
      usage: "From this lesson's word list: basic responses.",
      example: [
        {
          speaker: "A",
          text: "Pakadto kita ha eskwelahan buwas.",
          translation: "Let's go to school tomorrow.",
        },
        {
          speaker: "B",
          text: "Ano? Diri ko nasasabtan.",
          translation: "What? I don't understand.",
        },
      ],
    },
    {
      term: "Sige",
      meaning: "Okay",
      pronunciation: "si-ge",
      usage: "From this lesson's word list: basic responses.",
      example: [
        {
          speaker: "A",
          text: "Ah, nasasabtan ko na.",
          translation: "Ah, I understand now.",
        },
        {
          speaker: "B",
          text: "Sige, kitaay kita buwas.",
          translation: "Okay, see you tomorrow.",
        },
      ],
    },
    {
      term: "Diri okay",
      meaning: "Not okay",
      pronunciation: "di-ri o-key",
      usage: "From this lesson's word list: basic responses.",
    },
    {
      term: "Bangin",
      meaning: "Maybe",
      pronunciation: "ba-ngin",
      usage: "From this lesson's word list: basic responses.",
    },
    {
      term: "Syempre",
      meaning: "Of course",
      pronunciation: "syem-pre",
      usage: "From this lesson's word list: basic responses.",
    },
    {
      term: "Tinuod?",
      meaning: "Really?",
      pronunciation: "ti-nu-od",
      usage: "From this lesson's word list: basic responses.",
      example: [
        {
          speaker: "",
          text: "Tinuod ito.",
          translation: "That's true.",
        },
      ],
    },
    {
      term: "Husto ito.",
      meaning: "That's right.",
      pronunciation: "hus-to i-to",
      usage: "From this lesson's word list: basic responses.",
      example: [
        {
          speaker: "",
          text: "Oo, husto ito.",
          translation: "Yes, that's right.",
        },
      ],
    },
    {
      term: "Sayop ito.",
      meaning: "That's wrong.",
      pronunciation: "sa-yop i-to",
      usage: "From this lesson's word list: basic responses.",
    },
    {
      term: "Nauyon ako.",
      meaning: "I agree.",
      pronunciation: "na-u-yon a-ko",
      usage: "From this lesson's word list: basic responses.",
    },
    {
      term: "Alayon",
      meaning: "Please",
      pronunciation: "a-la-yon",
      usage: "An expression of politeness.",
      example: [
        {
          speaker: "",
          text: "Alayon, hinay-hinay la pagyakan.",
          translation: "Please speak slowly.",
        },
      ],
    },
    {
      term: "Salamat",
      meaning: "Thank you",
      pronunciation: "sa-la-mat",
      usage: "An expression of politeness.",
      example: [
        {
          speaker: "A",
          text: "Ini, para ha imo.",
          translation: "Here, this is for you.",
        },
        {
          speaker: "B",
          text: "Damo nga salamat!",
          translation: "Thank you very much!",
        },
      ],
    },
    {
      term: "Damo nga salamat",
      meaning: "Thank you very much",
      pronunciation: "da-mo nga sa-la-mat",
      usage: "An expression of politeness.",
      example: [
        {
          speaker: "A",
          text: "Damo nga salamat!",
          translation: "Thank you very much!",
        },
        {
          speaker: "B",
          text: "Waray sapayan.",
          translation: "You're welcome.",
        },
      ],
    },
    {
      term: "Waray sapayan",
      meaning: "You're welcome",
      pronunciation: "wa-ray sa-pa-yan",
      usage: "An expression of politeness.",
      example: [
        {
          speaker: "A",
          text: "Damo nga salamat!",
          translation: "Thank you very much!",
        },
        {
          speaker: "B",
          text: "Waray sapayan.",
          translation: "You're welcome.",
        },
      ],
    },
    {
      term: "Pasayloa ako",
      meaning: "I'm sorry",
      pronunciation: "pa-say-lo-a a-ko",
      usage: "An expression of politeness.",
    },
    {
      term: "Pasaylo",
      meaning: "Excuse me",
      pronunciation: "pa-say-lo",
      usage: "An expression of politeness.",
      example: [
        {
          speaker: "A",
          text: "Pasaylo, pwede mo ba ako buligan?",
          translation: "Excuse me, can you help me?",
        },
        {
          speaker: "B",
          text: "Oo, ano an imo kinahanglan?",
          translation: "Yes, what do you need?",
        },
      ],
    },
    {
      term: "Okay la",
      meaning: "It's okay",
      pronunciation: "o-key la",
      usage: "An expression of politeness.",
    },
    {
      term: "Alayon, hulat anay",
      meaning: "Please wait",
      pronunciation: "a-la-yon hu-lat a-nay",
      usage: "An expression of politeness.",
    },
    {
      term: "Nasasabtan ko.",
      meaning: "I understand.",
      pronunciation: "na-sa-sab-tan ko",
      usage: "An expression for understanding.",
      example: [
        {
          speaker: "A",
          text: "Pakadto kita ha eskwelahan buwas.",
          translation: "Let's go to school tomorrow.",
        },
        {
          speaker: "B",
          text: "Ah, nasasabtan ko na.",
          translation: "Ah, I understand now.",
        },
      ],
    },
    {
      term: "Diri ko nasasabtan.",
      meaning: "I don't understand.",
      pronunciation: "di-ri ko na-sa-sab-tan",
      usage: "An expression for understanding.",
      example: [
        {
          speaker: "A",
          text: "Ano? Diri ko nasasabtan.",
          translation: "What? I don't understand.",
        },
        {
          speaker: "B",
          text: "Pakadto kita ha eskwelahan buwas.",
          translation: "Let's go to school tomorrow.",
        },
      ],
    },
    {
      term: "Maaram ako.",
      meaning: "I know.",
      pronunciation: "ma-a-ram a-ko",
      usage: "An expression for understanding.",
    },
    {
      term: "Diri ako maaram.",
      meaning: "I don't know.",
      pronunciation: "di-ri a-ko ma-a-ram",
      usage: "An expression for understanding.",
    },
    {
      term: "Nahinunumdoman ko.",
      meaning: "I remember.",
      pronunciation: "na-hi-nu-num-do-man ko",
      usage: "An expression for understanding.",
    },
    {
      term: "Nahingalimot ako.",
      meaning: "I forgot.",
      pronunciation: "na-hin-ga-li-mot a-ko",
      usage: "An expression for understanding.",
    },
    {
      term: "Kahuna ko.",
      meaning: "I think so.",
      pronunciation: "ka-hu-na ko",
      usage: "An expression for understanding.",
    },
    {
      term: "Diri ako naghuhunahuna hin sugad.",
      meaning: "I don't think so.",
      pronunciation: "di-ri a-ko nag-hu-hu-na-hu-na hin su-gad",
      usage: "An expression for understanding.",
    },
    {
      term: "Hulat",
      meaning: "Wait",
      pronunciation: "hu-lat",
      usage: "Used in simple requests.",
      example: [
        {
          speaker: "",
          text: "Hulat anay.",
          translation: "Wait a moment.",
        },
      ],
    },
    {
      term: "Kadi",
      meaning: "Come",
      pronunciation: "ka-di",
      usage: "Used in simple requests.",
      example: [
        {
          speaker: "",
          text: "Kadi ngadi.",
          translation: "Come here.",
        },
      ],
    },
    {
      term: "Kadto",
      meaning: "Go",
      pronunciation: "kad-to",
      usage: "Used in simple requests.",
      example: [
        {
          speaker: "",
          text: "Kadto didto.",
          translation: "Go there.",
        },
      ],
    },
    {
      term: "Kita",
      meaning: "Look",
      pronunciation: "ki-ta",
      usage: "Used in simple requests.",
      example: [
        {
          speaker: "A",
          text: "Pakadto kita ha eskwelahan buwas.",
          translation: "Let's go to school tomorrow.",
        },
        {
          speaker: "B",
          text: "Ano? Diri ko nasasabtan.",
          translation: "What? I don't understand.",
        },
      ],
    },
    {
      term: "Pamati",
      meaning: "Listen",
      pronunciation: "pa-ma-ti",
      usage: "Used in simple requests.",
    },
    {
      term: "Pakiistorya",
      meaning: "Speak",
      pronunciation: "pa-ki-is-tor-ya",
      usage: "Used in simple requests.",
    },
    {
      term: "Hinay-hinay",
      meaning: "Slowly",
      pronunciation: "hi-nay hi-nay",
      usage: "Used in simple requests.",
      example: [
        {
          speaker: "",
          text: "Alayon, hinay-hinay la pagyakan.",
          translation: "Please speak slowly.",
        },
      ],
    },
    {
      term: "Utro",
      meaning: "Again",
      pronunciation: "ut-ro",
      usage: "Used in simple requests.",
    },
    {
      term: "Didi",
      meaning: "Here",
      pronunciation: "di-di",
      usage: "Used in simple requests.",
    },
    {
      term: "Didto",
      meaning: "There",
      pronunciation: "did-to",
      usage: "Used in simple requests.",
      example: [
        {
          speaker: "",
          text: "Kadto didto.",
          translation: "Go there.",
        },
      ],
    },
  ],
  patterns: [
    {
      label: "Pattern 1: Saying What You Do Not Agree With or Know",
      pattern: "Diri ako + Word.",
      examples: [
        "Diri ako nauyon.",
        "Diri ako maaram.",
      ],
    },
    {
      label: "Pattern 2: Asking for Clarification",
      pattern: "Pwede mo ba ito + Action?",
      examples: [
        "Pwede mo ba ito utrohon?",
        "Pwede mo ba ito isaysay?",
      ],
    },
    {
      label: "Pattern 3: Saying If Something Is Right",
      pattern: "Word + ito.",
      examples: [
        "Tinuod ito.",
        "Husto ito.",
        "Sayop ito.",
      ],
    },
  ],
  sentences: [
    {
      text: "Oo, husto ito.",
      meaning: "Yes, that's right.",
    },
    {
      text: "Diri, diri ito husto.",
      meaning: "No, that's not right.",
    },
    {
      text: "Nauyon ako.",
      meaning: "I agree.",
    },
    {
      text: "Diri ako nauyon.",
      meaning: "I don't agree.",
    },
    {
      text: "Tinuod ito.",
      meaning: "That's true.",
    },
    {
      text: "Diri ito tinuod.",
      meaning: "That's not true.",
    },
    {
      text: "Bangin.",
      meaning: "Maybe.",
    },
    {
      text: "Oo, karuyag ko ito.",
      meaning: "Yes, I want it.",
    },
    {
      text: "Diri, diri ko karuyag ito.",
      meaning: "No, I don't want it.",
    },
    {
      text: "Oo, kaya ko.",
      meaning: "Yes, I can.",
    },
    {
      text: "Diri, diri ko kaya.",
      meaning: "No, I can't.",
    },
    {
      text: "Okay la.",
      meaning: "That's okay.",
    },
    {
      text: "Maupay la.",
      meaning: "That's fine.",
    },
    {
      text: "Ano an imo ginyakan?",
      meaning: "What did you say?",
    },
    {
      text: "Pwede mo ba ito utrohon?",
      meaning: "Can you repeat that?",
    },
    {
      text: "Alayon, hinay-hinay la pagyakan.",
      meaning: "Please speak slowly.",
    },
    {
      text: "Ano an kahulogan hito?",
      meaning: "What does that mean?",
    },
    {
      text: "Diri ko nasasabtan.",
      meaning: "I don't understand.",
    },
    {
      text: "Pwede mo ba ito isaysay?",
      meaning: "Can you explain it?",
    },
    {
      text: "Pwede mo ba ako buligan?",
      meaning: "Can you help me?",
    },
    {
      text: "Alayon, buligi ako.",
      meaning: "Please help me.",
    },
    {
      text: "Kinahanglan ko hin bulig.",
      meaning: "I need help.",
    },
    {
      text: "Salamat ha pagbulig ha akon.",
      meaning: "Thank you for helping me.",
    },
    {
      text: "Pwede mo ba ipakita ha akon?",
      meaning: "Can you show me?",
    },
    {
      text: "Maaram ako.",
      meaning: "I know.",
    },
    {
      text: "Diri ako maaram.",
      meaning: "I don't know.",
    },
    {
      text: "Nasasabtan ko na.",
      meaning: "I understand now.",
    },
    {
      text: "Diri pa.",
      meaning: "Not yet.",
    },
    {
      text: "Hulat anay.",
      meaning: "Wait a moment.",
    },
    {
      text: "Kadi ngadi.",
      meaning: "Come here.",
    },
    {
      text: "Kadto didto.",
      meaning: "Go there.",
    },
    {
      text: "Kadto na kita.",
      meaning: "Let's go.",
    },
  ],
  conversations: [
    {
      title: "Conversation 1: Accepting an Offer",
      lines: [
        {
          speaker: "Ana",
          text: "Karuyag mo ba hin tubig?",
          translation: "Do you want some water?",
        },
        {
          speaker: "Maria",
          text: "Oo, karuyag ko.",
          translation: "Yes, I do.",
        },
        {
          speaker: "Ana",
          text: "Ini, para ha imo.",
          translation: "Here, this is for you.",
        },
        {
          speaker: "Maria",
          text: "Damo nga salamat!",
          translation: "Thank you very much!",
        },
        {
          speaker: "Ana",
          text: "Waray sapayan.",
          translation: "You're welcome.",
        },
      ],
      situation: "Accepting an offer. Expressing gratitude. Responding politely.",
    },
    {
      title: "Conversation 2: Asking Someone to Repeat",
      lines: [
        {
          speaker: "Juan",
          text: "Pakadto kita ha eskwelahan buwas.",
          translation: "Let's go to school tomorrow.",
        },
        {
          speaker: "Pedro",
          text: "Ano? Diri ko nasasabtan.",
          translation: "What? I don't understand.",
        },
        {
          speaker: "Juan",
          text: "Pakadto kita ha eskwelahan buwas.",
          translation: "Let's go to school tomorrow.",
        },
        {
          speaker: "Pedro",
          text: "Ah, nasasabtan ko na.",
          translation: "Ah, I understand now.",
        },
        {
          speaker: "Juan",
          text: "Sige, kitaay kita buwas.",
          translation: "Okay, see you tomorrow.",
        },
      ],
      situation: "Asking for clarification. Expressing understanding. Responding to repeated information.",
    },
    {
      title: "Conversation 3: Asking for Help",
      lines: [
        {
          speaker: "Maria",
          text: "Pasaylo, pwede mo ba ako buligan?",
          translation: "Excuse me, can you help me?",
        },
        {
          speaker: "Ana",
          text: "Oo, ano an imo kinahanglan?",
          translation: "Yes, what do you need?",
        },
        {
          speaker: "Maria",
          text: "Diri ko nasasabtan ini nga pulong.",
          translation: "I don't understand this word.",
        },
        {
          speaker: "Ana",
          text: "Sige, isaysay ko ha imo.",
          translation: "Okay, I'll explain it to you.",
        },
        {
          speaker: "Maria",
          text: "Damo nga salamat!",
          translation: "Thank you very much!",
        },
        {
          speaker: "Ana",
          text: "Waray sapayan.",
          translation: "You're welcome.",
        },
      ],
      situation: "Asking for help. Expressing difficulty understanding something. Thanking someone for assistance.",
    },
  ],
  languageNotes: [
    {
      title: "A. Expressing Agreement and Disagreement",
      body: [
        "When talking with someone, you may need to express whether you agree or disagree with what they are saying.",
        "In Waray, Oo and Diri are two basic words that help communicate positive and negative responses.",
        "• Agreeing: A: Taga Samar ka? B: Oo. English: A: Are you from Samar? B: Yes.",
        "• Disagreeing: A: Taga Manila ka? B: Diri. English: A: Are you from Manila? B: No.",
      ],
    },
    {
      title: "B. Accepting and Refusing an Offer",
      body: [
        "When someone offers you something, you can accept or refuse politely.",
      ],
      examples: [
        {
          text: "Example 1",
          meaning: "Accepting an Offer",
        },
      ],
    },
    {
      title: "B. Accepting and Refusing an Offer",
      body: [
        "A: Karuyag mo ba hin tubig?",
        "B: Oo, karuyag ko.",
        "English:",
        "A: Do you want some water?",
        "B: Yes, I do.",
      ],
      examples: [
        {
          text: "Example 2",
          meaning: "Refusing an Offer",
        },
      ],
    },
    {
      title: "B. Accepting and Refusing an Offer",
      body: [
        "A: Karuyag mo ba hin pagkaon?",
        "B: Diri, salamat.",
        "English:",
        "A: Do you want some food?",
        "B: No, thank you.",
      ],
    },
    {
      title: "C. Asking Someone to Repeat",
      body: [
        "Sometimes, you may not hear or understand what another person says. Instead of guessing, you can politely ask the speaker to repeat the statement.",
        "Useful Expressions:",
      ],
      examples: [
        {
          text: "Diri ko nasasabtan.",
          meaning: "I don't understand.",
        },
        {
          text: "Ano an imo ginyakan?",
          meaning: "What did you say?",
        },
        {
          text: "Pwede mo ba ito utrohon?",
          meaning: "Can you repeat that?",
        },
        {
          text: "Alayon, hinay-hinay la pagyakan.",
          meaning: "Please speak slowly.",
        },
      ],
    },
    {
      title: "C. Asking Someone to Repeat",
      body: [
        "A: Pakadto kita ha merkado buwas.",
        "B: Pasaylo, diri ko nasasabtan. Pwede mo ba ito utrohon?",
        "A: Pakadto kita ha merkado buwas.",
        "English:",
        "A: Let's go to the market tomorrow.",
        "B: Excuse me, I don't understand. Can you repeat that?",
        "A: Let's go to the market tomorrow.",
      ],
    },
    {
      title: "D. Asking for Assistance",
      body: [
        "When you need help, you can use simple expressions to communicate your request.",
        "A: Pasaylo, pwede mo ba ako buligan?",
        "B: Oo, ano an imo kinahanglan?",
        "A: Kinahanglan ko hin bulig hini.",
        "B: Sige, buligan ta ikaw.",
        "English:",
        "A: Excuse me, can you help me?",
        "B: Yes, what do you need?",
        "A: I need help with this.",
        "B: Okay, I will help you.",
      ],
    },
    {
      title: "E. Responding Politely",
      body: [
        "Polite expressions help make conversations more respectful and friendly.",
        "For example:",
        "A: Salamat ha imo bulig.",
        "B: Waray sapayan.",
        "English:",
        "A: Thank you for your help.",
        "B: You're welcome.",
        "Remember to use expressions of gratitude when someone helps you or does something kind for you.",
      ],
    },
    {
      title: "A. Basic Responses",
      body: [
        "The following vocabulary words and expressions are commonly useful in everyday communication.",
      ],
    },
    {
      title: "D. Words Used in Simple Requests",
      body: [
        "Learning Note:",
        "Some Waray expressions may change depending on the sentence and situation. For example, a word used as a command may require additional words to sound polite.",
      ],
    },
    {
      title: "A. Agreeing and Disagreeing",
      body: [
        "These expressions will help you respond to other people and communicate your needs.",
        "Pattern to Remember:",
        "The word Oo is used to express agreement or give a positive answer, while Diri is used to express disagreement or give a negative answer.",
        "Examples:",
        "• English: Yes, I agree.",
        "• Waray: Oo, nauyon ako.",
        "• English: No, I don't agree.",
        "• Waray: Diri, diri ako nauyon.",
      ],
    },
    {
      title: "B. Accepting and Refusing",
      body: [
        "Example:",
        "A: Karuyag mo ba ini?",
        "B: Oo, karuyag ko ini.",
        "English:",
        "A: Do you want this?",
        "B: Yes, I want this.",
      ],
    },
    {
      title: "C. Asking for Clarification",
      body: [
        "Example:",
        "A: (Says something in Waray.)",
        "B: Pasaylo, diri ko nasasabtan.",
        "A: Pwede ko ba ito utrohon?",
        "English:",
        "A: (Says something in Waray.)",
        "B: Excuse me, I don't understand.",
        "A: Can I repeat it?",
      ],
    },
  ],
  inferredFields: [
    "usage",
    "example",
    "pattern",
    "arrange",
    "speaking phrase",
    "respelling",
    "target pitch and mood",
    "example situation",
    "pronunciation tip",
    "badge description",
    "completion requirement",
  ],
};
