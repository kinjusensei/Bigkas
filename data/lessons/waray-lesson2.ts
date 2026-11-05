import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 2 — imported from "Lesson Plan.pdf", pages 650–674.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.

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
  expressionGroups: [
    {
      title: "A. Basic Responses",
      intro: [
        "The following vocabulary words and expressions are commonly useful in everyday communication.",
      ],
      items: [
        {
          term: "Oo",
          meaning: "Yes",
          pronunciation: "o-o",
        },
        {
          term: "Diri",
          meaning: "No",
          pronunciation: "di-ri",
        },
        {
          term: "Sige",
          meaning: "Okay",
          pronunciation: "si-ge",
        },
        {
          term: "Diri okay",
          meaning: "Not okay",
          pronunciation: "di-ri o-key",
        },
        {
          term: "Bangin",
          meaning: "Maybe",
          pronunciation: "ba-ngin",
        },
        {
          term: "Syempre",
          meaning: "Of course",
          pronunciation: "syem-pre",
        },
        {
          term: "Tinuod?",
          meaning: "Really?",
          pronunciation: "ti-nu-od",
        },
        {
          term: "Husto ito.",
          meaning: "That's right.",
          pronunciation: "hus-to i-to",
        },
        {
          term: "Sayop ito.",
          meaning: "That's wrong.",
          pronunciation: "sa-yop i-to",
        },
        {
          term: "Nauyon ako.",
          meaning: "I agree.",
          pronunciation: "na-u-yon a-ko",
        },
      ],
    },
    {
      title: "B. Expressions of Politeness",
      items: [
        {
          term: "Alayon",
          meaning: "Please",
          pronunciation: "a-la-yon",
        },
        {
          term: "Salamat",
          meaning: "Thank you",
          pronunciation: "sa-la-mat",
        },
        {
          term: "Damo nga salamat",
          meaning: "Thank you very much",
          pronunciation: "da-mo nga sa-la-mat",
        },
        {
          term: "Waray sapayan",
          meaning: "You're welcome",
          pronunciation: "wa-ray sa-pa-yan",
        },
        {
          term: "Pasayloa ako",
          meaning: "I'm sorry",
          pronunciation: "pa-say-lo-a a-ko",
        },
        {
          term: "Pasaylo",
          meaning: "Excuse me",
          pronunciation: "pa-say-lo",
        },
        {
          term: "Okay la",
          meaning: "It's okay",
          pronunciation: "o-key la",
        },
        {
          term: "Alayon, hulat anay",
          meaning: "Please wait",
          pronunciation: "a-la-yon hu-lat a-nay",
        },
      ],
    },
    {
      title: "C. Expressions for Understanding",
      items: [
        {
          term: "Nasasabtan ko.",
          meaning: "I understand.",
          pronunciation: "na-sa-sab-tan ko",
        },
        {
          term: "Diri ko nasasabtan.",
          meaning: "I don't understand.",
          pronunciation: "di-ri ko na-sa-sab-tan",
        },
        {
          term: "Maaram ako.",
          meaning: "I know.",
          pronunciation: "ma-a-ram a-ko",
        },
        {
          term: "Diri ako maaram.",
          meaning: "I don't know.",
          pronunciation: "di-ri a-ko ma-a-ram",
        },
        {
          term: "Nahinunumdoman ko.",
          meaning: "I remember.",
          pronunciation: "na-hi-nu-num-do-man ko",
        },
        {
          term: "Nahingalimot ako.",
          meaning: "I forgot.",
          pronunciation: "na-hin-ga-li-mot a-ko",
        },
        {
          term: "Kahuna ko.",
          meaning: "I think so.",
          pronunciation: "ka-hu-na ko",
        },
        {
          term: "Diri ako naghuhunahuna hin sugad.",
          meaning: "I don't think so.",
          pronunciation: "di-ri a-ko nag-hu-hu-na-hu-na hin su-gad",
        },
      ],
    },
    {
      title: "D. Words Used in Simple Requests",
      intro: [
        "Learning Note:",
        "Some Waray expressions may change depending on the sentence and situation. For example, a word used as a command may require additional words to sound polite.",
      ],
      items: [
        {
          term: "Hulat",
          meaning: "Wait",
          pronunciation: "hu-lat",
        },
        {
          term: "Kadi",
          meaning: "Come",
          pronunciation: "ka-di",
        },
        {
          term: "Kadto",
          meaning: "Go",
          pronunciation: "kad-to",
        },
        {
          term: "Kita",
          meaning: "Look",
          pronunciation: "ki-ta",
        },
        {
          term: "Pamati",
          meaning: "Listen",
          pronunciation: "pa-ma-ti",
        },
        {
          term: "Pakiistorya",
          meaning: "Speak",
          pronunciation: "pa-ki-is-tor-ya",
        },
        {
          term: "Hinay-hinay",
          meaning: "Slowly",
          pronunciation: "hi-nay hi-nay",
        },
        {
          term: "Utro",
          meaning: "Again",
          pronunciation: "ut-ro",
        },
        {
          term: "Didi",
          meaning: "Here",
          pronunciation: "di-di",
        },
        {
          term: "Didto",
          meaning: "There",
          pronunciation: "did-to",
        },
      ],
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
  ],
  situationsTitle: "USEFUL PHRASES AND SENTENCES",
  situationGroups: [
    {
      title: "A. Agreeing and Disagreeing",
      intro: [
        "These expressions will help you respond to other people and communicate your needs.",
        "Pattern to Remember:",
        "The word Oo is used to express agreement or give a positive answer, while Diri is used to express disagreement or give a negative answer.",
        "Examples:",
        "• English: Yes, I agree.",
        "• Waray: Oo, nauyon ako.",
        "• English: No, I don't agree.",
        "• Waray: Diri, diri ako nauyon.",
      ],
      items: [
        {
          term: "Oo, husto ito.",
          meaning: "Yes, that's right.",
        },
        {
          term: "Diri, diri ito husto.",
          meaning: "No, that's not right.",
        },
        {
          term: "Nauyon ako.",
          meaning: "I agree.",
        },
        {
          term: "Diri ako nauyon.",
          meaning: "I don't agree.",
        },
        {
          term: "Tinuod ito.",
          meaning: "That's true.",
        },
        {
          term: "Diri ito tinuod.",
          meaning: "That's not true.",
        },
        {
          term: "Bangin.",
          meaning: "Maybe.",
        },
      ],
    },
    {
      title: "B. Accepting and Refusing",
      intro: [
        "Example:",
        "A: Karuyag mo ba ini?",
        "B: Oo, karuyag ko ini.",
        "English:",
        "A: Do you want this?",
        "B: Yes, I want this.",
      ],
      items: [
        {
          term: "Oo, karuyag ko ito.",
          meaning: "Yes, I want it.",
        },
        {
          term: "Diri, diri ko karuyag ito.",
          meaning: "No, I don't want it.",
        },
        {
          term: "Oo, kaya ko.",
          meaning: "Yes, I can.",
        },
        {
          term: "Diri, diri ko kaya.",
          meaning: "No, I can't.",
        },
        {
          term: "Okay la.",
          meaning: "That's okay.",
        },
        {
          term: "Maupay la.",
          meaning: "That's fine.",
        },
      ],
    },
    {
      title: "C. Asking for Clarification",
      intro: [
        "Example:",
        "A: (Says something in Waray.)",
        "B: Pasaylo, diri ko nasasabtan.",
        "A: Pwede ko ba ito utrohon?",
        "English:",
        "A: (Says something in Waray.)",
        "B: Excuse me, I don't understand.",
        "A: Can I repeat it?",
      ],
      items: [
        {
          term: "Ano an imo ginyakan?",
          meaning: "What did you say?",
        },
        {
          term: "Pwede mo ba ito utrohon?",
          meaning: "Can you repeat that?",
        },
        {
          term: "Alayon, hinay-hinay la pagyakan.",
          meaning: "Please speak slowly.",
        },
        {
          term: "Ano an kahulogan hito?",
          meaning: "What does that mean?",
        },
        {
          term: "Diri ko nasasabtan.",
          meaning: "I don't understand.",
        },
        {
          term: "Pwede mo ba ito isaysay?",
          meaning: "Can you explain it?",
        },
      ],
    },
    {
      title: "D. Asking for Help",
      items: [
        {
          term: "Pwede mo ba ako buligan?",
          meaning: "Can you help me?",
        },
        {
          term: "Alayon, buligi ako.",
          meaning: "Please help me.",
        },
        {
          term: "Kinahanglan ko hin bulig.",
          meaning: "I need help.",
        },
        {
          term: "Salamat ha pagbulig ha akon.",
          meaning: "Thank you for helping me.",
        },
        {
          term: "Pwede mo ba ipakita ha akon?",
          meaning: "Can you show me?",
        },
      ],
    },
    {
      title: "E. Everyday Responses",
      items: [
        {
          term: "Maaram ako.",
          meaning: "I know.",
        },
        {
          term: "Diri ako maaram.",
          meaning: "I don't know.",
        },
        {
          term: "Nasasabtan ko na.",
          meaning: "I understand now.",
        },
        {
          term: "Diri pa.",
          meaning: "Not yet.",
        },
        {
          term: "Hulat anay.",
          meaning: "Wait a moment.",
        },
        {
          term: "Kadi ngadi.",
          meaning: "Come here.",
        },
        {
          term: "Kadto didto.",
          meaning: "Go there.",
        },
        {
          term: "Kadto na kita.",
          meaning: "Let's go.",
        },
      ],
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
        {
          speaker: "",
          text: "Lesson Focus:",
        },
        {
          speaker: "",
          text: "Accepting an offer.",
        },
        {
          speaker: "",
          text: "Expressing gratitude.",
        },
        {
          speaker: "",
          text: "Responding politely.",
        },
      ],
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
        {
          speaker: "",
          text: "Lesson Focus:",
        },
        {
          speaker: "",
          text: "Asking for clarification.",
        },
        {
          speaker: "",
          text: "Expressing understanding.",
        },
        {
          speaker: "",
          text: "Responding to repeated information.",
        },
      ],
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
        {
          speaker: "",
          text: "Lesson Focus:",
        },
        {
          speaker: "",
          text: "Asking for help.",
        },
        {
          speaker: "",
          text: "Expressing difficulty understanding something.",
        },
        {
          speaker: "",
          text: "Thanking someone for assistance.",
        },
      ],
    },
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
      title: "Vocabulary Matching",
      kind: "match",
      instructions: "Match each English expression in Column A with its correct Waray translation in Column B.",
      items: [
        "Yes",
        "Thank you",
        "No",
        "You're welcome",
        "I don't know",
      ],
      choices: [
        "Waray sapayan",
        "Diri",
        "Salamat",
        "Oo",
        "Diri ako maaram",
      ],
    },
    {
      title: "Multiple Choice",
      kind: "choice",
      instructions: "Choose the correct Waray translation of each English expression.",
      items: [
        "How do you say \"I don't understand\" in Waray?\nA. Nasasabtan ko.\nB. Diri ko nasasabtan.\nC. Maaram ako.\nD. Salamat.",
        "What does \"Alayon, hinay-hinay la pagyakan\" mean?\nA. Please speak slowly.\nB. Please come here.\nC. Thank you very much.\nD. I don't know.",
        "Which expression means \"I agree\"?\nA. Diri ako maaram.\nB. Nauyon ako.\nC. Waray sapayan.\nD. Hulat anay.",
        "What does \"Hulat anay\" mean?\nA. Let's go.\nB. Come here.\nC. Wait a moment.\nD. I understand.",
        "Which expression means \"Can you help me?\"\nA. Pwede mo ba ako buligan?\nB. Ano an imo ngaran?\nC. Taga diin ka?\nD. Kumusta ka?",
      ],
    },
    {
      title: "Fill in the Blanks",
      kind: "fill",
      instructions: "Complete each sentence using the correct word or expression from the choices.",
      items: [
        "_____, nauyon ako.",
        "_____ ako nauyon.",
        "Damo nga _____!",
        "_____ anay, alayon.",
        "_____ ako hini nga pulong.",
      ],
      choices: [
        "Oo – Diri – Salamat – Hulat – Maaram",
      ],
    },
    {
      title: "Choose the Appropriate Response",
      kind: "choice",
      instructions: "Read each situation and choose the most appropriate Waray response.",
      items: [
        "Someone gives you a glass of water. What should you say?\nA. Diri ako maaram.\nB. Damo nga salamat.\nC. Hulat anay.\nD. Ano an imo ngaran?",
        "Someone says something you cannot understand. What should you say?\nA. Diri ko nasasabtan.\nB. Oo, maupay.\nC. Waray sapayan.\nD. Kadto didto.",
        "Someone asks if you agree with their statement, and you agree. What should you say?\nA. Diri ako nauyon.\nB. Oo, nauyon ako.\nC. Diri ako maaram.\nD. Pasayloa ako.",
        "You need someone to wait for a moment. What should you say?\nA. Hulat anay.\nB. Salamat.\nC. Babay.\nD. Maupay nga aga.",
        "Someone helps you carry something. What should you say?\nA. Diri ko kaya.\nB. Damo nga salamat.\nC. Diri ako maaram.\nD. Taga Samar ako.",
      ],
    },
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
  rewards: {
    items: [
      {
        section: "vocabulary",
        label: "Vocabulary Practice + Useful Phrases Practice",
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
      name: "Waray nga Makigkomunikar Badge",
    },
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
};
