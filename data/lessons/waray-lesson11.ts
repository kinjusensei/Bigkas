import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 11 — imported from "Lesson Plan.pdf", pages 805–817.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
// Fields not given by the plan are INFERRED from this lesson's own content and
// listed in docs/waray-inferred-keys.md: situation, usage, example, pattern, choice, arrange, speaking phrase, target pitch and mood, respelling, example situation, pronunciation tip, completion requirement.
// The practice answers are INFERRED drafts, not from the PDF. See
// docs/waray-draft-answer-keys.md for each answer and how it was found.

export const warayLesson11: StructuredLesson = {
  lessonId: "waray_11",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 11,
  title: "Common Daily Conversations",
  level: "Intermediate",
  unit: "Unit 1 – Everyday Communication",
  estimatedDuration: "40–50 minutes",
  prerequisite: "Beginner Level (Lessons 1–10)",
  languageVariety: "Waray-Waray",
  intro: [
    "Everyday conversations allow people to exchange information, share experiences, and maintain relationships. These conversations may happen at home, in school, at work, in public places, or while spending time with friends.",
    "At the Beginner Level, you learned how to greet people, introduce yourself, and ask simple questions. In this lesson, you will build on those skills by learning how to maintain a conversation beyond a single question and answer.",
    "You will practice expressions for asking about someone's day, talking about activities, making plans, inviting someone, and responding naturally.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Recognize common Waray expressions used in everyday conversations.",
    "Understand and respond to questions about daily activities.",
    "Describe familiar routines and activities using simple connected sentences.",
    "Make and respond to invitations and suggestions.",
    "Participate in longer conversations in familiar everyday situations.",
  ],
  assessment: {
    instructions: "Choose the best answer for each question.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What does \"Kumusta an imo adlaw?\" mean?",
        options: [
          {
            key: "A",
            text: "Where are you going?",
          },
          {
            key: "B",
            text: "How was your day?",
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
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "Which expression means \"I am studying\"?",
        options: [
          {
            key: "A",
            text: "Nag-aadal ako.",
          },
          {
            key: "B",
            text: "Nagluluto ako.",
          },
          {
            key: "C",
            text: "Nagpapahuway ako.",
          },
          {
            key: "D",
            text: "Naglalakat ako.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 3,
        prompt: "What does \"Usahay\" mean?",
        options: [
          {
            key: "A",
            text: "Always",
          },
          {
            key: "B",
            text: "Never",
          },
          {
            key: "C",
            text: "Sometimes",
          },
          {
            key: "D",
            text: "Tomorrow",
          },
        ],
        answerKey: "C",
      },
      {
        id: 4,
        prompt: "Which expression means \"Have you eaten?\"",
        options: [
          {
            key: "A",
            text: "Ano an imo ngaran?",
          },
          {
            key: "B",
            text: "Kinaon ka na?",
          },
          {
            key: "C",
            text: "San-o ka makadto?",
          },
          {
            key: "D",
            text: "Hain an imo balay?",
          },
        ],
        answerKey: "B",
      },
      {
        id: 5,
        prompt: "What is the meaning of \"Waray pa\"?",
        options: [
          {
            key: "A",
            text: "Already",
          },
          {
            key: "B",
            text: "Not yet",
          },
          {
            key: "C",
            text: "Always",
          },
          {
            key: "D",
            text: "Later",
          },
        ],
        answerKey: "B",
      },
      {
        id: 6,
        prompt: "Which expression is an invitation to eat?",
        options: [
          {
            key: "A",
            text: "Hulat anay.",
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
            text: "Diri ako maaram.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 7,
        prompt: "What does \"Ano an imo ginbubuhat?\" mean?",
        options: [
          {
            key: "A",
            text: "What are you doing?",
          },
          {
            key: "B",
            text: "What did you eat?",
          },
          {
            key: "C",
            text: "Where are you from?",
          },
          {
            key: "D",
            text: "Who is your friend?",
          },
        ],
        answerKey: "A",
      },
      {
        id: 8,
        prompt: "Which expression means \"Take care\"?",
        options: [
          {
            key: "A",
            text: "Salamat.",
          },
          {
            key: "B",
            text: "Pag-amping.",
          },
          {
            key: "C",
            text: "Sige.",
          },
          {
            key: "D",
            text: "Tinuod?",
          },
        ],
        answerKey: "B",
      },
      {
        id: 9,
        prompt: "What is the best response to an invitation if you agree to come along?",
        options: [
          {
            key: "A",
            text: "Diri ako maaram.",
          },
          {
            key: "B",
            text: "Waray pa.",
          },
          {
            key: "C",
            text: "Sige, maupod ako.",
          },
          {
            key: "D",
            text: "Pasayloa ako.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 10,
        prompt: "What does \"Kitaay kita buwas\" mean?",
        options: [
          {
            key: "A",
            text: "Let's eat now.",
          },
          {
            key: "B",
            text: "See you tomorrow.",
          },
          {
            key: "C",
            text: "Wait for me.",
          },
          {
            key: "D",
            text: "I am going home.",
          },
        ],
        answerKey: "B",
      },
    ],
  },
  extraActivities: [
    {
      title: "Translate into Waray",
      kind: "translate",
      instructions: "Translate the following English sentences into Waray.",
      items: [
        "What are you doing?",
        "I am studying.",
        "Have you eaten?",
        "Let's go together.",
        "I will do it later.",
      ],
    },
    {
      title: "Conversation Completion",
      kind: "roleplay",
      instructions: "Complete the conversation using appropriate Waray expressions.\nAna: Maupay nga aga, Ben! Kumusta an imo adlaw?\nBen: ______________________________\nAna: Ano an imo ginbubuhat yana?\nBen: ______________________________\nAna: Karuyag mo ba umupod ha akon?\nBen: ______________________________\nAna: Sige, kitaay kita ha urhi!\nBen: ______________________________",
      items: [],
    },
    {
      title: "Create an Everyday Conversation",
      kind: "roleplay",
      instructions: "Create a conversation between two people who meet during an ordinary day.\nYour conversation must include:",
      items: [
        "A greeting.",
        "A question about someone's day.",
        "A question about an activity.",
        "An invitation or suggestion.",
        "An appropriate response.",
        "A closing expression.",
      ],
      note: "Write at least eight exchanges between the speakers.",
    },
  ],
  matchActivity: {
    title: "Match the Expressions",
    instructions: "Match each Waray expression with its correct English meaning.",
    pairs: [
      {
        id: "1",
        term: "Usahay",
        answer: "Sometimes",
      },
      {
        id: "2",
        term: "Pag-amping",
        answer: "Take care",
      },
      {
        id: "3",
        term: "Hulat anay",
        answer: "Wait a moment",
      },
      {
        id: "4",
        term: "Mangaon na kita",
        answer: "Let's eat",
      },
    ],
  },
  fillInBlanks: {
    title: "Complete the Sentences",
    instructions: "Choose the correct word or expression to complete each sentence.",
    items: [
      {
        id: "1",
        sentence: "Kumusta an imo ______?",
        hint: "How was your day?",
        answer: "adlaw",
        title: "Complete the Sentences",
        instructions: "Choose the correct word or expression to complete each sentence.",
        wordBank: [
          "adlaw",
          "Nag-aadal",
          "Mangaon",
          "Waray",
          "Hulat",
        ],
      },
      {
        id: "2",
        sentence: "______ ako kada adlaw.",
        hint: "I study every day.",
        answer: "Nag-aadal",
        title: "Complete the Sentences",
        instructions: "Choose the correct word or expression to complete each sentence.",
        wordBank: [
          "adlaw",
          "Nag-aadal",
          "Mangaon",
          "Waray",
          "Hulat",
        ],
      },
      {
        id: "3",
        sentence: "______ kita.",
        hint: "Let's eat.",
        answer: "Mangaon",
        title: "Complete the Sentences",
        instructions: "Choose the correct word or expression to complete each sentence.",
        wordBank: [
          "adlaw",
          "Nag-aadal",
          "Mangaon",
          "Waray",
          "Hulat",
        ],
      },
      {
        id: "4",
        sentence: "______ pa.",
        hint: "Not yet.",
        answer: "Waray",
        title: "Complete the Sentences",
        instructions: "Choose the correct word or expression to complete each sentence.",
        wordBank: [
          "adlaw",
          "Nag-aadal",
          "Mangaon",
          "Waray",
          "Hulat",
        ],
      },
      {
        id: "5",
        sentence: "______ anay.",
        hint: "Wait a moment.",
        answer: "Hulat",
        title: "Complete the Sentences",
        instructions: "Choose the correct word or expression to complete each sentence.",
        wordBank: [
          "adlaw",
          "Nag-aadal",
          "Mangaon",
          "Waray",
          "Hulat",
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
      name: "Everyday Communicator Badge",
      description: "Awarded after successfully completing the lesson assessment with at least 70%.",
    },
    completionRequirement: "Obtain at least 70% in the lesson assessment. Learners may repeat the activities and assessment if they do not meet the requirement.",
  },
  expectedOutcomes: [
    "Start and maintain simple everyday conversations.",
    "Ask about another person's day and activities.",
    "Describe familiar routines.",
    "Invite someone to participate in an activity.",
    "Respond appropriately to common conversational expressions.",
    "Complete the vocabulary review.",
    "Study the useful phrases and lesson explanations.",
    "Finish the guided conversation exercises.",
    "Complete all practice activities.",
    "Obtain at least 70% in the lesson assessment.",
  ],
  choiceActivity: {
    title: "Choose the Correct Meaning",
    instructions: "Choose the correct English meaning.",
    questions: [
      {
        id: 1,
        prompt: "What does “Kahapon” mean?",
        options: [
          {
            key: "A",
            text: "Wake up",
          },
          {
            key: "B",
            text: "Let's eat",
          },
          {
            key: "C",
            text: "That's good",
          },
          {
            key: "D",
            text: "Yesterday",
          },
        ],
        answerKey: "D",
      },
      {
        id: 2,
        prompt: "What does “Maglakat” mean?",
        options: [
          {
            key: "A",
            text: "Walk",
          },
          {
            key: "B",
            text: "Return",
          },
          {
            key: "C",
            text: "Every morning",
          },
          {
            key: "D",
            text: "Sometimes",
          },
        ],
        answerKey: "A",
      },
      {
        id: 3,
        prompt: "What does “Magtrabaho” mean?",
        options: [
          {
            key: "A",
            text: "That's right",
          },
          {
            key: "B",
            text: "Work",
          },
          {
            key: "C",
            text: "Rest",
          },
          {
            key: "D",
            text: "Read",
          },
        ],
        answerKey: "B",
      },
      {
        id: 4,
        prompt: "What does “Syempre” mean?",
        options: [
          {
            key: "A",
            text: "Play",
          },
          {
            key: "B",
            text: "Now",
          },
          {
            key: "C",
            text: "Of course",
          },
          {
            key: "D",
            text: "Walk",
          },
        ],
        answerKey: "C",
      },
      {
        id: 5,
        prompt: "What does “Kanina” mean?",
        options: [
          {
            key: "A",
            text: "Let's go",
          },
          {
            key: "B",
            text: "Always",
          },
          {
            key: "C",
            text: "Already",
          },
          {
            key: "D",
            text: "Earlier",
          },
        ],
        answerKey: "D",
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
          "an",
          "imo",
          "adlaw",
          "Kumusta",
        ],
        answer: [
          "Kumusta",
          "an",
          "imo",
          "adlaw",
        ],
        display: "Kumusta an imo adlaw?",
      },
      {
        id: "2",
        words: [
          "imo",
          "an",
          "yana",
          "nga",
          "ginbuhat",
          "adlaw",
          "Ano",
        ],
        answer: [
          "Ano",
          "an",
          "imo",
          "ginbuhat",
          "yana",
          "nga",
          "adlaw",
        ],
        display: "Ano an imo ginbuhat yana nga adlaw?",
      },
      {
        id: "3",
        words: [
          "ginbubuhat",
          "imo",
          "an",
          "Ano",
        ],
        answer: [
          "Ano",
          "an",
          "imo",
          "ginbubuhat",
        ],
        display: "Ano an imo ginbubuhat?",
      },
      {
        id: "4",
        words: [
          "ako",
          "na",
          "Mauuli",
        ],
        answer: [
          "Mauuli",
          "na",
          "ako",
        ],
        display: "Mauuli na ako.",
      },
      {
        id: "5",
        words: [
          "eskwelahan",
          "Makadto",
          "ako",
          "ha",
        ],
        answer: [
          "Makadto",
          "ako",
          "ha",
          "eskwelahan",
        ],
        display: "Makadto ako ha eskwelahan.",
      },
    ],
  },
  speaking: {
    title: "Speaking Practice",
    instructions: "Read the following sentences aloud.",
    note: "Learners should listen to the model pronunciation before recording their own voice.",
    practiceLessonId: "waray_11",
    phrases: [
      {
        id: "1",
        text: "Kumusta an imo adlaw?",
        respelling: "koo-MOOS-tah ahn EE-moh AHD-lahw",
        meaning: "How was your day?",
      },
      {
        id: "2",
        text: "Nagluluto ako.",
        respelling: "nahg-loo-LOO-toh AH-koh",
        meaning: "I am cooking.",
      },
      {
        id: "3",
        text: "Oo, kinaon na ako.",
        respelling: "oh-OH kee-NAH-ohn nah AH-koh",
        meaning: "Yes, I have already eaten.",
      },
      {
        id: "4",
        text: "Salamat ha pag-imbitar ha akon.",
        respelling: "sah-LAH-maht hah pahg-im-bee-TAHR hah AH-kohn",
        meaning: "Thank you for inviting me.",
      },
      {
        id: "5",
        text: "Nakamata ako hin temprano.",
        respelling: "na-ka-ma-ta a-ko hin tem-pra-no",
        meaning: "I woke up early.",
      },
      {
        id: "6",
        text: "Nahuman mo na an imo buruhaton?",
        respelling: "na-hu-man mo na an i-mo bu-ru-ha-ton",
        meaning: "Have you finished your task?",
      },
      {
        id: "7",
        text: "Pasayloa ako, busy ako yana.",
        respelling: "pa-say-lo-a a-ko bee-zee a-ko ya-na",
        meaning: "Sorry, I am busy right now.",
      },
    ],
  },
  exampleSituation: {
    description: "Imagine this situation from the lesson: Asking About a Friend's Day.",
    lead: "You can begin by saying:",
    line: "Maupay nga kulop, Maria!",
    translation: "Good afternoon, Maria!",
  },
  vocabularyIntro: "Learn the following words and expressions before proceeding to the activities.",
  pronunciationTip: "Read each syllable clearly. Avoid rushing through longer expressions.",
  selfIntroIntro: "Use these patterns and phrases from the lesson.",
  vocabulary: [
    {
      term: "Mata",
      meaning: "Wake up",
      pronunciation: "MAH-tah",
      usage: "From this lesson's word list: everyday activities.",
    },
    {
      term: "Katurog",
      meaning: "Sleep",
      pronunciation: "kah-too-ROHG",
      usage: "From this lesson's word list: everyday activities.",
    },
    {
      term: "Kumaon",
      meaning: "Eat",
      pronunciation: "koo-mah-OHN",
      usage: "From this lesson's word list: everyday activities.",
    },
    {
      term: "Uminom",
      meaning: "Drink",
      pronunciation: "oo-mee-NOHM",
      usage: "From this lesson's word list: everyday activities.",
    },
    {
      term: "Magluto",
      meaning: "Cook",
      pronunciation: "mahg-LOO-toh",
      usage: "From this lesson's word list: everyday activities.",
    },
    {
      term: "Mag-adal",
      meaning: "Study",
      pronunciation: "mahg-AH-dahl",
      usage: "From this lesson's word list: everyday activities.",
    },
    {
      term: "Magbasa",
      meaning: "Read",
      pronunciation: "mahg-BAH-sah",
      usage: "From this lesson's word list: everyday activities.",
    },
    {
      term: "Magsurat",
      meaning: "Write",
      pronunciation: "mahg-SOO-raht",
      usage: "From this lesson's word list: everyday activities.",
    },
    {
      term: "Magtrabaho",
      meaning: "Work",
      pronunciation: "mahg-trah-BAH-hoh",
      usage: "From this lesson's word list: everyday activities.",
    },
    {
      term: "Maglimpyo",
      meaning: "Clean",
      pronunciation: "mahg-LEEM-pyoh",
      usage: "From this lesson's word list: everyday activities.",
    },
    {
      term: "Maglakat",
      meaning: "Walk",
      pronunciation: "mahg-lah-KAHT",
      usage: "From this lesson's word list: everyday activities.",
    },
    {
      term: "Mag-uyag",
      meaning: "Play",
      pronunciation: "mahg-OO-yahg",
      usage: "From this lesson's word list: everyday activities.",
    },
    {
      term: "Pahuway",
      meaning: "Rest",
      pronunciation: "pah-HOO-wai",
      usage: "From this lesson's word list: everyday activities.",
    },
    {
      term: "Umuli",
      meaning: "Go home",
      pronunciation: "oo-MOO-lee",
      usage: "From this lesson's word list: everyday activities.",
    },
    {
      term: "Bumalik",
      meaning: "Return",
      pronunciation: "boo-mah-LEEK",
      usage: "From this lesson's word list: everyday activities.",
    },
    {
      term: "Kada adlaw",
      meaning: "Every day",
      pronunciation: "KAH-dah AHD-lahw",
      usage: "A time and frequency expression.",
      example: [
        {
          speaker: "",
          text: "Nag-aadal ako kada adlaw.",
          translation: "I study every day.",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/kada adlaw.aac"),
    },
    {
      term: "Kada aga",
      meaning: "Every morning",
      pronunciation: "KAH-dah AH-gah",
      usage: "A time and frequency expression.",
      example: [
        {
          speaker: "A",
          text: "Ano an imo ginbubuhat kada aga?",
          translation: "What do you do every morning?",
        },
        {
          speaker: "B",
          text: "Nakamata ako hin temprano ngan nangungudkod.",
          translation: "I wake up early and brush my teeth.",
        },
      ],
    },
    {
      term: "Kada gab-i",
      meaning: "Every night",
      pronunciation: "KAH-dah GAH-bee",
      usage: "A time and frequency expression.",
    },
    {
      term: "Usahay",
      meaning: "Sometimes",
      pronunciation: "oo-sah-HAI",
      usage: "A time and frequency expression.",
    },
    {
      term: "Pirme",
      meaning: "Always",
      pronunciation: "PEER-meh",
      usage: "A time and frequency expression.",
    },
    {
      term: "Kasagaran",
      meaning: "Usually",
      pronunciation: "kah-sah-gah-RAHN",
      usage: "A time and frequency expression.",
    },
    {
      term: "Agsob",
      meaning: "Often",
      pronunciation: "AHG-sob",
      usage: "A time and frequency expression.",
    },
    {
      term: "Yana",
      meaning: "Now",
      pronunciation: "YAH-nah",
      usage: "A time and frequency expression.",
      example: [
        {
          speaker: "A",
          text: "Ano an imo ginbubuhat yana?",
          translation: "What are you doing now?",
        },
        {
          speaker: "B",
          text: "Nagpapahuway la ako.",
          translation: "I am just resting.",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/yana.aac"),
    },
    {
      term: "Ha urhi",
      meaning: "Later",
      pronunciation: "hah OOR-hee",
      usage: "A time and frequency expression.",
      example: [
        {
          speaker: "A",
          text: "Sige, maupod ako.",
          translation: "Okay, I will come along.",
        },
        {
          speaker: "B",
          text: "Maopay! Kitaay kita ha urhi.",
          translation: "Great! See you later.",
        },
      ],
    },
    {
      term: "Kanina",
      meaning: "Earlier",
      pronunciation: "kah-NEE-nah",
      usage: "A time and frequency expression.",
    },
    {
      term: "Kahapon",
      meaning: "Yesterday",
      pronunciation: "kah-hah-POHN",
      usage: "A time and frequency expression.",
    },
    {
      term: "Buwas",
      meaning: "Tomorrow",
      pronunciation: "BOO-wahs",
      usage: "A time and frequency expression.",
      example: [
        {
          speaker: "",
          text: "Kitaay kita buwas.",
          translation: "See you tomorrow.",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/buwas.aac"),
    },
    {
      term: "Na",
      meaning: "Already",
      pronunciation: "nah",
      usage: "A time and frequency expression.",
      example: [
        {
          speaker: "",
          text: "Mauuli na ako.",
          translation: "I am going home.",
        },
      ],
    },
    {
      term: "Waray pa",
      meaning: "Not yet",
      pronunciation: "wah-RAI pah",
      usage: "A time and frequency expression.",
      example: [
        {
          speaker: "",
          text: "Waray pa ako makadto.",
          translation: "I have not gone yet.",
        },
      ],
    },
    {
      term: "Kumusta an imo adlaw?",
      meaning: "How was your day?",
      pronunciation: "koo-MOOS-tah ahn EE-moh AHD-lahw",
      usage: "A conversation expression.",
      example: [
        {
          speaker: "A",
          text: "Maupay nga kulop, Ana!",
          translation: "Good afternoon, Ana!",
        },
        {
          speaker: "B",
          text: "Kumusta an imo adlaw?",
          translation: "How was your day?",
        },
      ],
    },
    {
      term: "Ano an imo ginbubuhat?",
      meaning: "What are you doing?",
      pronunciation: "AH-noh ahn EE-moh gin-boo-BOO-haht",
      usage: "A conversation expression.",
      example: [
        {
          speaker: "A",
          text: "Nakamata ako hin temprano ngan nangungudkod.",
          translation: "I wake up early and brush my teeth.",
        },
        {
          speaker: "B",
          text: "Katapos hito, ano an imo ginbubuhat?",
          translation: "After that, what do you do?",
        },
      ],
    },
    {
      term: "Ano an nahitabo?",
      meaning: "What happened?",
      pronunciation: "AH-noh ahn nah-hee-TAH-boh",
      usage: "A conversation expression.",
    },
    {
      term: "Maupay ito",
      meaning: "That's good",
      pronunciation: "mah-OO-pai EE-toh",
      usage: "A conversation expression.",
      example: [
        {
          speaker: "A",
          text: "Nagbasa ako hin libro ha Waray.",
          translation: "I read a book in Waray.",
        },
        {
          speaker: "B",
          text: "Maupay ito!",
          translation: "That's good!",
        },
      ],
    },
    {
      term: "Husto ito",
      meaning: "That's right",
      pronunciation: "HOOS-toh EE-toh",
      usage: "A conversation expression.",
    },
    {
      term: "Tinuod?",
      meaning: "Really?",
      pronunciation: "tee-noo-OHD",
      usage: "A conversation expression.",
      audioUrl: require("../../assets/audio/Lesson Waray/tinuod.aac"),
    },
    {
      term: "Syempre",
      meaning: "Of course",
      pronunciation: "SHYEM-preh",
      usage: "A conversation expression.",
      audioUrl: require("../../assets/audio/Lesson Waray/syempre.aac"),
    },
    {
      term: "Kadto na kita",
      meaning: "Let's go",
      pronunciation: "KAHD-toh nah KEE-tah",
      usage: "A conversation expression.",
    },
    {
      term: "Mangaon na kita",
      meaning: "Let's eat",
      pronunciation: "mah-ngah-OHN nah KEE-tah",
      usage: "A conversation expression.",
    },
    {
      term: "Hulat anay",
      meaning: "Wait a moment",
      pronunciation: "HOO-laht AH-nai",
      usage: "A conversation expression.",
      audioUrl: require("../../assets/audio/Lesson Waray/hulat anay.aac"),
    },
    {
      term: "Kitaay kita ha urhi",
      meaning: "See you later",
      pronunciation: "kee-TAH-ai KEE-tah hah OOR-hee",
      usage: "A conversation expression.",
      example: [
        {
          speaker: "A",
          text: "Maopay! Kitaay kita ha urhi.",
          translation: "Great! See you later.",
        },
        {
          speaker: "B",
          text: "Sige, pag-amping!",
          translation: "Okay, take care!",
        },
      ],
    },
    {
      term: "Pag-amping",
      meaning: "Take care",
      pronunciation: "pahg-AHM-ping",
      usage: "A conversation expression.",
      example: [
        {
          speaker: "A",
          text: "Maopay! Kitaay kita ha urhi.",
          translation: "Great! See you later.",
        },
        {
          speaker: "B",
          text: "Sige, pag-amping!",
          translation: "Okay, take care!",
        },
      ],
    },
  ],
  greetings: [
    {
      term: "Kada adlaw",
      meaning: "Every day",
      pronunciation: "KAH-dah AHD-lahw",
      usage: "A time and frequency expression.",
      example: [
        {
          speaker: "",
          text: "Nag-aadal ako kada adlaw.",
          translation: "I study every day.",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/kada adlaw.aac"),
    },
    {
      term: "Kada aga",
      meaning: "Every morning",
      pronunciation: "KAH-dah AH-gah",
      usage: "A time and frequency expression.",
      example: [
        {
          speaker: "A",
          text: "Ano an imo ginbubuhat kada aga?",
          translation: "What do you do every morning?",
        },
        {
          speaker: "B",
          text: "Nakamata ako hin temprano ngan nangungudkod.",
          translation: "I wake up early and brush my teeth.",
        },
      ],
    },
    {
      term: "Kada gab-i",
      meaning: "Every night",
      pronunciation: "KAH-dah GAH-bee",
      usage: "A time and frequency expression.",
    },
    {
      term: "Usahay",
      meaning: "Sometimes",
      pronunciation: "oo-sah-HAI",
      usage: "A time and frequency expression.",
    },
    {
      term: "Pirme",
      meaning: "Always",
      pronunciation: "PEER-meh",
      usage: "A time and frequency expression.",
    },
    {
      term: "Kasagaran",
      meaning: "Usually",
      pronunciation: "kah-sah-gah-RAHN",
      usage: "A time and frequency expression.",
    },
    {
      term: "Agsob",
      meaning: "Often",
      pronunciation: "AHG-sob",
      usage: "A time and frequency expression.",
    },
    {
      term: "Yana",
      meaning: "Now",
      pronunciation: "YAH-nah",
      usage: "A time and frequency expression.",
      example: [
        {
          speaker: "A",
          text: "Ano an imo ginbubuhat yana?",
          translation: "What are you doing now?",
        },
        {
          speaker: "B",
          text: "Nagpapahuway la ako.",
          translation: "I am just resting.",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/yana.aac"),
    },
    {
      term: "Ha urhi",
      meaning: "Later",
      pronunciation: "hah OOR-hee",
      usage: "A time and frequency expression.",
      example: [
        {
          speaker: "A",
          text: "Sige, maupod ako.",
          translation: "Okay, I will come along.",
        },
        {
          speaker: "B",
          text: "Maopay! Kitaay kita ha urhi.",
          translation: "Great! See you later.",
        },
      ],
    },
    {
      term: "Kanina",
      meaning: "Earlier",
      pronunciation: "kah-NEE-nah",
      usage: "A time and frequency expression.",
    },
    {
      term: "Kahapon",
      meaning: "Yesterday",
      pronunciation: "kah-hah-POHN",
      usage: "A time and frequency expression.",
    },
    {
      term: "Buwas",
      meaning: "Tomorrow",
      pronunciation: "BOO-wahs",
      usage: "A time and frequency expression.",
      example: [
        {
          speaker: "",
          text: "Kitaay kita buwas.",
          translation: "See you tomorrow.",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/buwas.aac"),
    },
    {
      term: "Na",
      meaning: "Already",
      pronunciation: "nah",
      usage: "A time and frequency expression.",
      example: [
        {
          speaker: "",
          text: "Mauuli na ako.",
          translation: "I am going home.",
        },
      ],
    },
    {
      term: "Waray pa",
      meaning: "Not yet",
      pronunciation: "wah-RAI pah",
      usage: "A time and frequency expression.",
      example: [
        {
          speaker: "",
          text: "Waray pa ako makadto.",
          translation: "I have not gone yet.",
        },
      ],
    },
    {
      term: "Kumusta an imo adlaw?",
      meaning: "How was your day?",
      pronunciation: "koo-MOOS-tah ahn EE-moh AHD-lahw",
      usage: "A conversation expression.",
      example: [
        {
          speaker: "A",
          text: "Maupay nga kulop, Ana!",
          translation: "Good afternoon, Ana!",
        },
        {
          speaker: "B",
          text: "Kumusta an imo adlaw?",
          translation: "How was your day?",
        },
      ],
    },
    {
      term: "Ano an imo ginbubuhat?",
      meaning: "What are you doing?",
      pronunciation: "AH-noh ahn EE-moh gin-boo-BOO-haht",
      usage: "A conversation expression.",
      example: [
        {
          speaker: "A",
          text: "Nakamata ako hin temprano ngan nangungudkod.",
          translation: "I wake up early and brush my teeth.",
        },
        {
          speaker: "B",
          text: "Katapos hito, ano an imo ginbubuhat?",
          translation: "After that, what do you do?",
        },
      ],
    },
    {
      term: "Ano an nahitabo?",
      meaning: "What happened?",
      pronunciation: "AH-noh ahn nah-hee-TAH-boh",
      usage: "A conversation expression.",
    },
    {
      term: "Maupay ito",
      meaning: "That's good",
      pronunciation: "mah-OO-pai EE-toh",
      usage: "A conversation expression.",
      example: [
        {
          speaker: "A",
          text: "Nagbasa ako hin libro ha Waray.",
          translation: "I read a book in Waray.",
        },
        {
          speaker: "B",
          text: "Maupay ito!",
          translation: "That's good!",
        },
      ],
    },
    {
      term: "Husto ito",
      meaning: "That's right",
      pronunciation: "HOOS-toh EE-toh",
      usage: "A conversation expression.",
    },
    {
      term: "Tinuod?",
      meaning: "Really?",
      pronunciation: "tee-noo-OHD",
      usage: "A conversation expression.",
      audioUrl: require("../../assets/audio/Lesson Waray/tinuod.aac"),
    },
    {
      term: "Syempre",
      meaning: "Of course",
      pronunciation: "SHYEM-preh",
      usage: "A conversation expression.",
      audioUrl: require("../../assets/audio/Lesson Waray/syempre.aac"),
    },
    {
      term: "Kadto na kita",
      meaning: "Let's go",
      pronunciation: "KAHD-toh nah KEE-tah",
      usage: "A conversation expression.",
    },
    {
      term: "Mangaon na kita",
      meaning: "Let's eat",
      pronunciation: "mah-ngah-OHN nah KEE-tah",
      usage: "A conversation expression.",
    },
    {
      term: "Hulat anay",
      meaning: "Wait a moment",
      pronunciation: "HOO-laht AH-nai",
      usage: "A conversation expression.",
      audioUrl: require("../../assets/audio/Lesson Waray/hulat anay.aac"),
    },
    {
      term: "Kitaay kita ha urhi",
      meaning: "See you later",
      pronunciation: "kee-TAH-ai KEE-tah hah OOR-hee",
      usage: "A conversation expression.",
      example: [
        {
          speaker: "A",
          text: "Maopay! Kitaay kita ha urhi.",
          translation: "Great! See you later.",
        },
        {
          speaker: "B",
          text: "Sige, pag-amping!",
          translation: "Okay, take care!",
        },
      ],
    },
    {
      term: "Pag-amping",
      meaning: "Take care",
      pronunciation: "pahg-AHM-ping",
      usage: "A conversation expression.",
      example: [
        {
          speaker: "A",
          text: "Maopay! Kitaay kita ha urhi.",
          translation: "Great! See you later.",
        },
        {
          speaker: "B",
          text: "Sige, pag-amping!",
          translation: "Okay, take care!",
        },
      ],
    },
  ],
  patterns: [
    {
      label: "Pattern 1: Saying How Often",
      pattern: "Kada + Time",
      examples: [
        "Kada adlaw",
        "Kada aga",
        "Kada gab-i",
      ],
    },
    {
      label: "Pattern 2: Asking About an Activity",
      pattern: "Ano an imo + Action?",
      examples: [
        "Ano an imo ginbubuhat?",
        "Ano an imo gin-adalan?",
      ],
    },
    {
      label: "Pattern 3: Inviting Someone",
      pattern: "Action + na kita.",
      examples: [
        "Kadto na kita",
        "Mangaon na kita.",
      ],
    },
  ],
  sentences: [
    {
      text: "Kumusta an imo adlaw?",
      meaning: "How was your day?",
      pronunciation: "koo-MOOS-tah ahn EE-moh AHD-lahw",
    },
    {
      text: "Ano an imo ginbuhat yana nga adlaw?",
      meaning: "What did you do today?",
      pronunciation: "AH-noh ahn EE-moh gin-boo-HAHT YAH-nah ngah AHD-lahw",
    },
    {
      text: "Ano an imo ginbubuhat?",
      meaning: "What are you doing?",
      pronunciation: "AH-noh ahn EE-moh gin-boo-BOO-haht",
    },
    {
      text: "Nag-aadal ako.",
      meaning: "I am studying.",
      pronunciation: "nahg-ah-AH-dahl AH-koh",
    },
    {
      text: "Nagluluto ako.",
      meaning: "I am cooking.",
      pronunciation: "nahg-loo-LOO-toh AH-koh",
    },
    {
      text: "Mauuli na ako.",
      meaning: "I am going home.",
      pronunciation: "mah-oo-OO-lee nah AH-koh",
    },
    {
      text: "Makadto ako ha eskwelahan.",
      meaning: "I am going to school.",
      pronunciation: "mah-kahd-TOH AH-koh hah es-kweh-LAH-hahn",
    },
    {
      text: "Kinaon ka na?",
      meaning: "Have you eaten?",
      pronunciation: "kee-NAH-ohn kah nah",
    },
    {
      text: "Waray pa.",
      meaning: "Not yet.",
      pronunciation: "wah-RAI pah",
    },
    {
      text: "Oo, kinaon na ako.",
      meaning: "Yes, I have already eaten.",
      pronunciation: "oh-OH kee-NAH-ohn nah AH-koh",
    },
    {
      text: "Karuyag mo ba umupod ha akon?",
      meaning: "Would you like to come with me?",
      pronunciation: "kah-roo-YAHG moh bah oo-oo-MOO-pod hah AH-kohn",
    },
    {
      text: "Mag-upod kita.",
      meaning: "Let's go together.",
      pronunciation: "mahg-OO-pod KEE-tah",
    },
    {
      text: "Busy ako yana.",
      meaning: "I am busy right now.",
      pronunciation: "BEE-zee AH-koh YAH-nah",
    },
    {
      text: "Bubuhaton ko ito ha urhi.",
      meaning: "I will do it later.",
      pronunciation: "boo-boo-HAH-tohn koh EE-toh hah OOR-hee",
    },
    {
      text: "Salamat ha pag-imbitar ha akon.",
      meaning: "Thank you for inviting me.",
      pronunciation: "sah-LAH-maht hah pahg-im-bee-TAHR hah AH-kohn",
    },
    {
      text: "Kitaay kita buwas.",
      meaning: "See you tomorrow.",
      pronunciation: "kee-TAH-ai KEE-tah BOO-wahs",
      audioUrl: require("../../assets/audio/Lesson Waray/kitaay kita buwas.aac"),
    },
    {
      text: "Kumusta ka yana?",
      meaning: "How are you today?",
    },
    {
      text: "Maupay man an akon adlaw.",
      meaning: "My day is good too.",
    },
    {
      text: "Maopay man ako.",
      meaning: "I am doing well.",
    },
    {
      text: "Nakamata ako hin temprano.",
      meaning: "I woke up early.",
    },
    {
      text: "Nag-aadal ako kada adlaw.",
      meaning: "I study every day.",
    },
    {
      text: "Nagluluto hi Nanay ha aga.",
      meaning: "Mother cooks in the morning.",
    },
    {
      text: "Nagpapahuway ako katapos han akon buruhaton.",
      meaning: "I rest after my activities.",
    },
    {
      text: "Nakadto ka na ha eskwelahan?",
      meaning: "Have you gone to school?",
    },
    {
      text: "Nahuman mo na an imo buruhaton?",
      meaning: "Have you finished your task?",
    },
    {
      text: "Waray pa ako makadto.",
      meaning: "I have not gone yet.",
    },
    {
      text: "Oo, nahuman ko na.",
      meaning: "Yes, I have finished.",
    },
    {
      text: "Kadto kita ha merkado.",
      meaning: "Let's go to the market.",
    },
    {
      text: "Sige, maupod ako.",
      meaning: "Okay, I will come along.",
    },
    {
      text: "Pasayloa ako, busy ako yana.",
      meaning: "Sorry, I am busy right now.",
    },
    {
      text: "Bangin ha urhi.",
      meaning: "Maybe later.",
    },
    {
      text: "Nasasabtan ko.",
      meaning: "I understand.",
    },
    {
      text: "Diri ko nasasabtan.",
      meaning: "I don't understand.",
      audioUrl: require("../../assets/audio/Lesson Waray/diri ko nasasabtan.aac"),
    },
    {
      text: "Pakiusara, utraha daw.",
      meaning: "Please repeat that.",
    },
  ],
  conversations: [
    {
      title: "Conversation A: Asking About a Friend's Day",
      lines: [
        {
          speaker: "Ana",
          text: "Maupay nga kulop, Maria!",
          translation: "Good afternoon, Maria!",
        },
        {
          speaker: "Maria",
          text: "Maupay nga kulop, Ana!",
          translation: "Good afternoon, Ana!",
        },
        {
          speaker: "Ana",
          text: "Kumusta an imo adlaw?",
          translation: "How was your day?",
        },
        {
          speaker: "Maria",
          text: "Maupay man. Nag-adal ako ha balay.",
          translation: "It was good. I studied at home.",
        },
        {
          speaker: "Ana",
          text: "Ano an imo gin-adalan?",
          translation: "What did you study?",
        },
        {
          speaker: "Maria",
          text: "Nagbasa ako hin libro ha Waray.",
          translation: "I read a book in Waray.",
        },
        {
          speaker: "Ana",
          text: "Maupay ito!",
          translation: "That's good!",
        },
        {
          speaker: "Maria",
          text: "Ikaw, kumusta man an imo adlaw?",
          translation: "How about you? How was your day?",
        },
        {
          speaker: "Ana",
          text: "Maupay liwat. Nagbulig ako ha balay.",
          translation: "It was good too. I helped at home.",
        },
      ],
      situation: "Ana and Maria: Asking About a Friend's Day.",
    },
    {
      title: "Conversation B: Inviting a Friend",
      lines: [
        {
          speaker: "Carlo",
          text: "Ano an imo ginbubuhat yana?",
          translation: "What are you doing now?",
        },
        {
          speaker: "Ben",
          text: "Nagpapahuway la ako.",
          translation: "I am just resting.",
        },
        {
          speaker: "Carlo",
          text: "Karuyag mo ba umupod ha akon ha merkado?",
          translation: "Would you like to come with me to the market?",
        },
        {
          speaker: "Ben",
          text: "San-o kita makadto?",
          translation: "When will we go?",
        },
        {
          speaker: "Carlo",
          text: "Yana nga kulop.",
          translation: "This afternoon.",
          audioUrl: require("../../assets/audio/Lesson Waray/yana nga kulop.aac"),
        },
        {
          speaker: "Ben",
          text: "Sige, maupod ako.",
          translation: "Okay, I will come along.",
        },
        {
          speaker: "Carlo",
          text: "Maopay! Kitaay kita ha urhi.",
          translation: "Great! See you later.",
        },
        {
          speaker: "Ben",
          text: "Sige, pag-amping!",
          translation: "Okay, take care!",
        },
      ],
      situation: "Carlo and Ben: Inviting a Friend.",
    },
    {
      title: "Conversation C: Talking About Daily Routines",
      lines: [
        {
          speaker: "Liza",
          text: "Ano an imo ginbubuhat kada aga?",
          translation: "What do you do every morning?",
        },
        {
          speaker: "Mark",
          text: "Nakamata ako hin temprano ngan nangungudkod.",
          translation: "I wake up early and brush my teeth.",
        },
        {
          speaker: "Liza",
          text: "Katapos hito, ano an imo ginbubuhat?",
          translation: "After that, what do you do?",
        },
        {
          speaker: "Mark",
          text: "Nangangaon ako hin pamahaw.",
          translation: "I eat breakfast.",
        },
        {
          speaker: "Liza",
          text: "Ngan katapos?",
          translation: "And after that?",
        },
        {
          speaker: "Mark",
          text: "Nakadto ako ha eskwelahan.",
          translation: "I go to school.",
        },
        {
          speaker: "Liza",
          text: "Damo ngay-an an imo buruhaton kada aga!",
          translation: "You really have many activities every morning!",
        },
        {
          speaker: "Mark",
          text: "Oo, importante ha akon nga magin andam temprano.",
          translation: "Yes, it is important to me to be ready early.",
        },
      ],
      situation: "Liza and Mark: Talking About Daily Routines.",
    },
  ],
  languageNotes: [
    {
      title: "A. Starting an Everyday Conversation",
      body: [
        "A conversation usually begins with a greeting or a question about another person's condition or activities.",
      ],
      examples: [
        {
          text: "Kumusta an imo adlaw?",
          meaning: "How was your day?",
        },
        {
          text: "Kumusta ka yana?",
          meaning: "How are you today?",
        },
        {
          text: "Ano an imo ginbubuhat?",
          meaning: "What are you doing?",
        },
      ],
    },
    {
      title: "A. Starting an Everyday Conversation",
      body: [
        "Possible responses:",
      ],
      examples: [
        {
          text: "Maupay man an akon adlaw.",
          meaning: "My day is good too.",
        },
        {
          text: "Maopay man ako.",
          meaning: "I am doing well.",
        },
        {
          text: "Nag-aadal ako.",
          meaning: "I am studying.",
        },
      ],
    },
    {
      title: "A. Starting an Everyday Conversation",
      body: [
        "A good conversation does not end with a single answer. You can ask another question or share related information to keep the conversation going.",
      ],
    },
    {
      title: "B. Talking About Daily Routines",
      body: [
        "When describing daily activities, learners can use familiar action words and time expressions.",
      ],
      examples: [
        {
          text: "Nakamata ako hin temprano.",
          meaning: "I woke up early.",
        },
        {
          text: "Nag-aadal ako kada adlaw.",
          meaning: "I study every day.",
        },
        {
          text: "Nagluluto hi Nanay ha aga.",
          meaning: "Mother cooks in the morning.",
        },
        {
          text: "Nagpapahuway ako katapos han akon buruhaton.",
          meaning: "I rest after my activities.",
        },
      ],
    },
    {
      title: "B. Talking About Daily Routines",
      body: [
        "Time expressions such as kada adlaw, ha aga, and ha gab-i help explain when an activity happens.",
      ],
    },
    {
      title: "C. Asking Whether Someone Has Done Something",
      body: [
        "You can ask about an activity someone has already completed.",
      ],
      examples: [
        {
          text: "Kinaon ka na?",
          meaning: "Have you eaten?",
        },
        {
          text: "Nakadto ka na ha eskwelahan?",
          meaning: "Have you gone to school?",
        },
        {
          text: "Nahuman mo na an imo buruhaton?",
          meaning: "Have you finished your task?",
        },
      ],
    },
    {
      title: "C. Asking Whether Someone Has Done Something",
      body: [
        "Possible responses:",
      ],
      examples: [
        {
          text: "Oo, kinaon na ako.",
          meaning: "Yes, I have already eaten.",
        },
        {
          text: "Waray pa ako makadto.",
          meaning: "I have not gone yet.",
        },
        {
          text: "Oo, nahuman ko na.",
          meaning: "Yes, I have finished.",
        },
      ],
    },
    {
      title: "D. Making Invitations and Suggestions",
      body: [
        "You can invite someone to join an activity or suggest doing something together.",
      ],
      examples: [
        {
          text: "Mangaon na kita.",
          meaning: "Let's eat.",
        },
        {
          text: "Mag-upod kita.",
          meaning: "Let's go together.",
        },
        {
          text: "Karuyag mo ba umupod ha akon?",
          meaning: "Would you like to come with me?",
        },
        {
          text: "Kadto kita ha merkado.",
          meaning: "Let's go to the market.",
        },
      ],
    },
    {
      title: "D. Making Invitations and Suggestions",
      body: [
        "Possible responses:",
      ],
      examples: [
        {
          text: "Sige, maupod ako.",
          meaning: "Okay, I will come along.",
        },
        {
          text: "Pasayloa ako, busy ako yana.",
          meaning: "Sorry, I am busy right now.",
        },
        {
          text: "Bangin ha urhi.",
          meaning: "Maybe later.",
        },
      ],
    },
    {
      title: "E. Responding Naturally in Conversations",
      body: [
        "People use short expressions to show that they are listening, agreeing, or asking for clarification.",
      ],
      examples: [
        {
          text: "Tinuod?",
          meaning: "Really?",
        },
        {
          text: "Maupay ito.",
          meaning: "That's good.",
        },
        {
          text: "Husto ito.",
          meaning: "That's right.",
        },
        {
          text: "Nasasabtan ko.",
          meaning: "I understand.",
        },
        {
          text: "Diri ko nasasabtan.",
          meaning: "I don't understand.",
        },
        {
          text: "Pakiusara, utraha daw.",
          meaning: "Please repeat that.",
        },
      ],
    },
    {
      title: "E. Responding Naturally in Conversations",
      body: [
        "Using these expressions makes conversations more interactive and helps learners respond appropriately.",
      ],
    },
    {
      title: "Useful Phrases and Sentences",
      body: [
        "Study the following expressions and their meanings.",
      ],
    },
  ],
  inferredFields: [
    "situation",
    "usage",
    "example",
    "pattern",
    "choice",
    "arrange",
    "speaking phrase",
    "target pitch and mood",
    "respelling",
    "example situation",
    "pronunciation tip",
    "completion requirement",
  ],
};
