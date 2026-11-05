import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 9 — imported from "Lesson Plan.pdf", pages 774–788.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.

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
  expressionGroups: [
    {
      title: "A. Common Question Words",
      items: [
        {
          term: "Ano",
          meaning: "What",
          pronunciation: "AH-noh",
        },
        {
          term: "Hin-o",
          meaning: "Who",
          pronunciation: "HIN-oh",
        },
        {
          term: "Diin",
          meaning: "Where",
          pronunciation: "DEE-in",
        },
        {
          term: "San-o",
          meaning: "When",
          pronunciation: "SAHN-oh",
        },
        {
          term: "Kay ano",
          meaning: "Why",
          pronunciation: "KAI AH-noh",
        },
        {
          term: "Paonan-o",
          meaning: "How",
          pronunciation: "pah-oh-NAHN-oh",
        },
        {
          term: "Pira",
          meaning: "How many / How much",
          pronunciation: "PEE-rah",
        },
        {
          term: "Hain",
          meaning: "Which",
          pronunciation: "HAH-in",
        },
      ],
    },
    {
      title: "B. Common Words Used in Questions",
      items: [
        {
          term: "Ngaran",
          meaning: "Name",
          pronunciation: "NGAH-rahn",
        },
        {
          term: "Edad",
          meaning: "Age",
          pronunciation: "eh-DAHD",
        },
        {
          term: "Lugar",
          meaning: "Place",
          pronunciation: "loo-GAHR",
        },
        {
          term: "Balay",
          meaning: "House / Home",
          pronunciation: "BAH-lai",
        },
        {
          term: "Eskwelahan",
          meaning: "School",
          pronunciation: "es-kweh-LAH-hahn",
        },
        {
          term: "Sangkay",
          meaning: "Friend",
          pronunciation: "SAHNG-kai",
        },
        {
          term: "Maestra / Maestro",
          meaning: "Teacher",
          pronunciation: "mah-ES-trah / mah-ES-troh",
        },
        {
          term: "Estudyante",
          meaning: "Student",
          pronunciation: "es-too-DYAHN-teh",
        },
        {
          term: "Pagkaon",
          meaning: "Food",
          pronunciation: "pahg-kah-OHN",
        },
        {
          term: "Tubig",
          meaning: "Water",
          pronunciation: "TOO-big",
        },
        {
          term: "Yana",
          meaning: "Today",
          pronunciation: "YAH-nah",
        },
        {
          term: "Buwas",
          meaning: "Tomorrow",
          pronunciation: "BOO-wahs",
        },
        {
          term: "Dinhi",
          meaning: "Here",
          pronunciation: "DEEN-hee",
        },
        {
          term: "Didto",
          meaning: "There",
          pronunciation: "DEED-toh",
        },
      ],
    },
    {
      title: "C. Short Answers and Responses",
      items: [
        {
          term: "Oo",
          meaning: "Yes",
          pronunciation: "oh-OH",
        },
        {
          term: "Diri",
          meaning: "No",
          pronunciation: "DEE-ree",
        },
        {
          term: "Dinhi",
          meaning: "Here",
          pronunciation: "DEEN-hee",
        },
        {
          term: "Didto",
          meaning: "There",
          pronunciation: "DEED-toh",
        },
        {
          term: "Maaram ako",
          meaning: "I know",
          pronunciation: "mah-AH-rahm AH-koh",
        },
        {
          term: "Diri ako maaram",
          meaning: "I don't know",
          pronunciation: "DEE-ree AH-koh mah-AH-rahm",
        },
        {
          term: "Nasasabtan ko",
          meaning: "I understand",
          pronunciation: "nah-sah-SAHB-tahn koh",
        },
        {
          term: "Diri ko nasasabtan",
          meaning: "I don't understand",
          pronunciation: "DEE-ree koh nah-sah-SAHB-tahn",
        },
      ],
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
  ],
  situationsTitle: "Useful Phrases and Sentences",
  situationGroups: [
    {
      title: "Useful Phrases and Sentences",
      intro: [
        "Study the following questions and their possible answers.",
        "Note: Some question forms have more than one natural way of being expressed. For example, diin, hain, and ngain can appear in different location-related questions. Their exact usage should be checked with a Western Samar Waray language evaluator.",
      ],
      items: [
        {
          term: "Ano an imo ngaran?",
          meaning: "What is your name?",
          pronunciation: "AH-noh ahn EE-moh NGAH-rahn",
        },
        {
          term: "Hin-o ka?",
          meaning: "Who are you?",
          pronunciation: "HIN-oh kah",
        },
        {
          term: "Taga diin ka?",
          meaning: "Where are you from?",
          pronunciation: "tah-gah DEE-in kah",
        },
        {
          term: "Hain an iyo balay?",
          meaning: "Where is your house?",
          pronunciation: "HAH-in ahn EE-yoh BAH-lai",
        },
        {
          term: "San-o ka makadto?",
          meaning: "When will you go?",
          pronunciation: "SAHN-oh kah mah-kahd-TOH",
        },
        {
          term: "Kay ano nga aada ka dinhi?",
          meaning: "Why are you here?",
          pronunciation: "KAI AH-noh ngah ah-AH-dah kah DEEN-hee",
        },
        {
          term: "Kumusta ka?",
          meaning: "How are you?",
          pronunciation: "koo-MOOS-tah kah",
        },
        {
          term: "Pira na an imo edad?",
          meaning: "How old are you?",
          pronunciation: "PEE-rah nah ahn EE-moh eh-DAHD",
        },
        {
          term: "Pira ini?",
          meaning: "How much is this?",
          pronunciation: "PEE-rah EE-nee",
        },
        {
          term: "Ano an imo karuyag?",
          meaning: "What do you want?",
          pronunciation: "AH-noh ahn EE-moh kah-roo-YAHG",
        },
        {
          term: "Ngain ka makadto?",
          meaning: "Where are you going?",
          pronunciation: "NGAH-in kah mah-kahd-TOH",
        },
        {
          term: "Nasasabtan mo ba?",
          meaning: "Do you understand?",
          pronunciation: "nah-sah-SAHB-tahn moh bah",
        },
      ],
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
    },
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
      title: "Match the Question Words",
      kind: "match",
      instructions: "Match each Waray question word with its correct English meaning.",
      items: [
        "Waray",
        "Ano",
        "Hin-o",
        "Diin",
        "San-o",
        "Pira",
      ],
      choices: [
        "Answer Choices",
        "When",
        "How many / How much",
        "What",
        "Who",
        "Where",
      ],
    },
    {
      title: "Complete the Questions",
      kind: "fill",
      instructions: "Choose the correct Waray question word to complete each sentence.",
      items: [
        "______ an imo ngaran?",
        "______ ka?",
        "Taga ______ ka?",
        "______ ka makadto?",
        "______ ini?",
      ],
      choices: [
        "Ano",
        "Hin-o",
        "Diin",
        "San-o",
        "Pira",
      ],
    },
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
  rewards: {
    items: [
      {
        section: "vocabulary",
        label: "Vocabulary Review + Useful Phrases",
        xp: 20,
      },
      {
        section: "conversation",
        label: "Guided Conversations + Practice Activities",
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
      name: "Question Master Badge",
      description: "Awarded after successfully completing the lesson assessment with at least 70%.",
    },
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
};
