import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 25 — imported from "Lesson Plan.pdf", pages 1042–1066.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
// Fields not given by the plan are INFERRED from this lesson's own content and
// listed in docs/waray-inferred-keys.md: usage, example, pronunciation, fill-in, arrange, speaking phrase, respelling, target pitch and mood, example situation, pronunciation tip, badge description, completion requirement.
// The practice answers are INFERRED drafts, not from the PDF. See
// docs/waray-draft-answer-keys.md for each answer and how it was found.

export const warayLesson25: StructuredLesson = {
  lessonId: "waray_25",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 25,
  title: "Verb Forms and Tenses",
  level: "Advanced",
  unit: "LANGUAGE DEVELOPMENT",
  estimatedDuration: "50–60 minutes",
  prerequisite: "Lesson 24 – Advanced Sentence Construction",
  languageVariety: "Verb forms, completed actions, ongoing actions, intended or future actions, time expressions, and verb usage in different contexts.",
  intro: [
    "Verbs are important parts of a sentence because they communicate actions, activities, and events. They help listeners understand what someone does, what someone is doing, and what someone intends to do.",
    "In Waray, verbs may change their forms depending on the action being described, the grammatical construction, and the context of the sentence.",
    "For example, consider these expressions:",
    "These examples demonstrate how changes in verb forms can communicate different time references or aspects of an action.",
    "In this lesson, learners will practice recognizing and using common Waray verb patterns to describe past, present, and future situations.",
    "Consider the following examples:",
    "Waray – English",
    "Nagbabasa ako. – I am reading.",
    "Nagbasa ako kahapon. – I read yesterday.",
    "Magbabasa ako buwas. – I will read tomorrow.",
    "The sentences use the same general action—reading—but communicate different time references.",
    "Notice the changes:",
    "• Nagbabasa describes an ongoing activity.",
    "• Nagbasa describes a completed action.",
    "• Magbabasa describes an intended or future action.",
    "Time expressions such as kahapon (yesterday), yana (today/now), and buwas (tomorrow) also help establish when an action happens.",
    "Understanding these patterns will help learners communicate their daily activities, experiences, and plans more accurately.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify common Waray verbs and their corresponding root forms.",
    "Recognize verb forms used to describe completed actions.",
    "Recognize verb forms used to describe ongoing activities.",
    "Use appropriate verb forms when expressing intended or future actions.",
    "Identify time expressions that provide context for an action.",
    "Construct sentences using appropriate verb forms in different situations.",
  ],
  assessment: {
    instructions: "Choose the correct answer for each question.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "Which sentence describes an ongoing action?",
        options: [
          {
            key: "A",
            text: "Nagbasa ako kahapon.",
          },
          {
            key: "B",
            text: "Nagbabasa ako yana.",
          },
          {
            key: "C",
            text: "Magbabasa ako buwas.",
          },
          {
            key: "D",
            text: "Nagluto hiya kagab-i.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "What does \"Magbabasa ako buwas\" mean?",
        options: [
          {
            key: "A",
            text: "I read yesterday.",
          },
          {
            key: "B",
            text: "I am reading now.",
          },
          {
            key: "C",
            text: "I will read tomorrow.",
          },
          {
            key: "D",
            text: "I finished reading.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 3,
        prompt: "Which time expression means \"yesterday\"?",
        options: [
          {
            key: "A",
            text: "Buwas",
          },
          {
            key: "B",
            text: "Yana",
          },
          {
            key: "C",
            text: "Kahapon",
          },
          {
            key: "D",
            text: "Sunod nga semana",
          },
        ],
        answerKey: "C",
      },
      {
        id: 4,
        prompt: "What is the English meaning of \"Nagbasa ako hin libro\"?",
        options: [
          {
            key: "A",
            text: "I will read a book.",
          },
          {
            key: "B",
            text: "I am reading a book.",
          },
          {
            key: "C",
            text: "I read a book.",
          },
          {
            key: "D",
            text: "I will write a book.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 5,
        prompt: "Which verb means \"to cook\"?",
        options: [
          {
            key: "A",
            text: "Magbasa",
          },
          {
            key: "B",
            text: "Magluto",
          },
          {
            key: "C",
            text: "Magsurat",
          },
          {
            key: "D",
            text: "Maglakat",
          },
        ],
        answerKey: "B",
      },
      {
        id: 6,
        prompt: "Which sentence describes an intended or future action?",
        options: [
          {
            key: "A",
            text: "Nag-aram ako kahapon.",
          },
          {
            key: "B",
            text: "Nag-aadal ako yana.",
          },
          {
            key: "C",
            text: "Mag-aadal ako buwas.",
          },
          {
            key: "D",
            text: "Nagbasa ako hin libro.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 7,
        prompt: "What is the purpose of time expressions in a sentence?",
        options: [
          {
            key: "A",
            text: "To identify the person speaking.",
          },
          {
            key: "B",
            text: "To provide information about when an action happens.",
          },
          {
            key: "C",
            text: "To replace all verbs.",
          },
          {
            key: "D",
            text: "To change a sentence into a question.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 8,
        prompt: "What does \"Nagluto hi Nanay kagab-i\" mean?",
        options: [
          {
            key: "A",
            text: "Mother is cooking now.",
          },
          {
            key: "B",
            text: "Mother will cook tomorrow.",
          },
          {
            key: "C",
            text: "Mother cooked last night.",
          },
          {
            key: "D",
            text: "Mother is going home.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 9,
        prompt: "Which expression means \"What will you do tomorrow?\"",
        options: [
          {
            key: "A",
            text: "Ano an imo ginbuhat kahapon?",
          },
          {
            key: "B",
            text: "Ano an imo ginbubuhat yana?",
          },
          {
            key: "C",
            text: "Ano an imo bubuhaton buwas?",
          },
          {
            key: "D",
            text: "Hain an imo balay?",
          },
        ],
        answerKey: "C",
      },
      {
        id: 10,
        prompt: "Why is it important to learn different Waray verb forms?",
        options: [
          {
            key: "A",
            text: "To make every sentence longer.",
          },
          {
            key: "B",
            text: "To communicate actions and their time references more accurately.",
          },
          {
            key: "C",
            text: "To avoid using time expressions.",
          },
          {
            key: "D",
            text: "To remove verbs from sentences.",
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
        "I am reading a book now.",
        "She cooked dinner last night.",
        "We will study tomorrow.",
        "He wrote a letter yesterday.",
        "They are cleaning the house.",
      ],
    },
    {
      title: "Describe Your Activities",
      kind: "open",
      instructions: "Write six Waray sentences about your activities.\nYour response must include:",
      items: [
        "Two sentences describing completed actions.",
        "Two sentences describing ongoing actions.",
        "Two sentences describing intended or future actions.",
      ],
      note: "Use time expressions such as kahapon, yana, buwas, and sunod nga semana.",
    },
  ],
  matchActivity: {
    title: "Vocabulary Matching",
    instructions: "Match each Waray verb with its English meaning.",
    pairs: [
      {
        id: "1",
        term: "Magbasa",
        answer: "To read",
      },
      {
        id: "2",
        term: "Magsurat",
        answer: "To write",
      },
      {
        id: "3",
        term: "Magluto",
        answer: "To cook",
      },
      {
        id: "4",
        term: "Maglimpyo",
        answer: "To clean",
      },
      {
        id: "5",
        term: "Mag-adal",
        answer: "To study",
      },
    ],
  },
  choiceActivity: {
    title: "Identify the Time Reference",
    questions: [
      {
        id: 1,
        prompt: "Nagbabasa ako hin libro yana.",
        options: [
          {
            key: "C",
            text: "Completed action",
          },
          {
            key: "O",
            text: "Ongoing action",
          },
          {
            key: "F",
            text: "Intended or future action",
          },
        ],
        answerKey: "O",
        title: "Identify the Time Reference",
        instructions: "Identify whether each sentence describes a completed, ongoing, or intended/future action.",
      },
      {
        id: 2,
        prompt: "Nagluto hi Nanay kagab-i.",
        options: [
          {
            key: "C",
            text: "Completed action",
          },
          {
            key: "O",
            text: "Ongoing action",
          },
          {
            key: "F",
            text: "Intended or future action",
          },
        ],
        answerKey: "C",
        title: "Identify the Time Reference",
        instructions: "Identify whether each sentence describes a completed, ongoing, or intended/future action.",
      },
      {
        id: 3,
        prompt: "Magbabasa ako buwas.",
        options: [
          {
            key: "C",
            text: "Completed action",
          },
          {
            key: "O",
            text: "Ongoing action",
          },
          {
            key: "F",
            text: "Intended or future action",
          },
        ],
        answerKey: "F",
        title: "Identify the Time Reference",
        instructions: "Identify whether each sentence describes a completed, ongoing, or intended/future action.",
      },
      {
        id: 4,
        prompt: "Nag-aram kami kahapon.",
        options: [
          {
            key: "C",
            text: "Completed action",
          },
          {
            key: "O",
            text: "Ongoing action",
          },
          {
            key: "F",
            text: "Intended or future action",
          },
        ],
        answerKey: "C",
        title: "Identify the Time Reference",
        instructions: "Identify whether each sentence describes a completed, ongoing, or intended/future action.",
      },
      {
        id: 5,
        prompt: "Magsusurat hiya hin surat.",
        options: [
          {
            key: "C",
            text: "Completed action",
          },
          {
            key: "O",
            text: "Ongoing action",
          },
          {
            key: "F",
            text: "Intended or future action",
          },
        ],
        answerKey: "F",
        title: "Identify the Time Reference",
        instructions: "Identify whether each sentence describes a completed, ongoing, or intended/future action.",
      },
      {
        id: 6,
        prompt: "Naglilimpyo hira han balay yana.",
        options: [
          {
            key: "C",
            text: "Completed action",
          },
          {
            key: "O",
            text: "Ongoing action",
          },
          {
            key: "F",
            text: "Intended or future action",
          },
        ],
        answerKey: "O",
        title: "Identify the Time Reference",
        instructions: "Identify whether each sentence describes a completed, ongoing, or intended/future action.",
      },
      {
        id: 7,
        prompt: "Nagbasa hiya hin libro.",
        options: [
          {
            key: "C",
            text: "Completed action",
          },
          {
            key: "O",
            text: "Ongoing action",
          },
          {
            key: "F",
            text: "Intended or future action",
          },
        ],
        answerKey: "C",
        title: "Identify the Time Reference",
        instructions: "Identify whether each sentence describes a completed, ongoing, or intended/future action.",
      },
      {
        id: 8,
        prompt: "Magluluto kami yana nga gab-i.",
        options: [
          {
            key: "C",
            text: "Completed action",
          },
          {
            key: "O",
            text: "Ongoing action",
          },
          {
            key: "F",
            text: "Intended or future action",
          },
        ],
        answerKey: "F",
        title: "Identify the Time Reference",
        instructions: "Identify whether each sentence describes a completed, ongoing, or intended/future action.",
      },
      {
        id: 9,
        prompt: "__________ ako hin libro yana.",
        options: [
          {
            key: "A",
            text: "Nagbabasa",
          },
          {
            key: "B",
            text: "Nagbasa",
          },
          {
            key: "C",
            text: "Magbabasa",
          },
        ],
        answerKey: "A",
        title: "Complete the Sentences",
        instructions: "Choose the appropriate verb form from the choices.",
      },
      {
        id: 10,
        prompt: "__________ hi Nanay kagab-i.",
        options: [
          {
            key: "A",
            text: "Nagluluto",
          },
          {
            key: "B",
            text: "Nagluto",
          },
          {
            key: "C",
            text: "Magluluto",
          },
        ],
        answerKey: "B",
        title: "Complete the Sentences",
        instructions: "Choose the appropriate verb form from the choices.",
      },
      {
        id: 11,
        prompt: "__________ kami buwas.",
        options: [
          {
            key: "A",
            text: "Nag-aadal",
          },
          {
            key: "B",
            text: "Nag-aram",
          },
          {
            key: "C",
            text: "Mag-aadal",
          },
        ],
        answerKey: "C",
        title: "Complete the Sentences",
        instructions: "Choose the appropriate verb form from the choices.",
      },
      {
        id: 12,
        prompt: "__________ hiya hin surat yana.",
        options: [
          {
            key: "A",
            text: "Nagsusurat",
          },
          {
            key: "B",
            text: "Nagsurat",
          },
          {
            key: "C",
            text: "Magsusurat",
          },
        ],
        answerKey: "A",
        title: "Complete the Sentences",
        instructions: "Choose the appropriate verb form from the choices.",
      },
      {
        id: 13,
        prompt: "__________ hira han balay kahapon.",
        options: [
          {
            key: "A",
            text: "Naglilimpyo",
          },
          {
            key: "B",
            text: "Naglimpyo",
          },
          {
            key: "C",
            text: "Maglilimpyo",
          },
        ],
        answerKey: "B",
        title: "Complete the Sentences",
        instructions: "Choose the appropriate verb form from the choices.",
      },
    ],
  },
  answerKeysInferred: true,
  rewards: {
    items: [
      {
        section: "match",
        label: "Vocabulary Matching",
        xp: 10,
      },
      {
        section: "sentences",
        label: "Identify the Time Reference + Complete the Sentences + Describe Your Activities",
        xp: 35,
      },
      {
        section: "assessment",
        label: "Lesson Assessment",
        xp: 15,
      },
    ],
    total: 60,
    badge: {
      name: "Waray Verb Master Badge",
      description: "Awarded after successfully completing Lesson 25.",
    },
    completionRequirement: "Obtain at least 70% in the lesson assessment. Learners may repeat the activities and assessment if they do not meet the requirement.",
  },
  expectedOutcomes: [
    "Before proceeding to the next lesson, learners should be able to:",
    "Identify common Waray action verbs.",
    "Recognize verb forms describing completed actions.",
    "Recognize verb forms describing ongoing activities.",
    "Recognize verb forms describing intended or future actions.",
    "Use time expressions to provide context.",
    "Construct sentences using appropriate verb forms.",
    "Achieve at least 70% in the lesson assessment.",
  ],
  fillInBlanks: {
    title: "Fill in the Blanks",
    instructions: "Complete each sentence using the appropriate Waray word.",
    items: [
      {
        id: "1",
        sentence: "Nagbasa ako hin libro ___.",
        hint: "I read a book yesterday.",
        answer: "kahapon",
        wordBank: [
          "Magtrabaho",
          "kahapon",
          "Usahay",
          "Turog",
        ],
      },
      {
        id: "2",
        sentence: "Naglimpyo hiya han balay ___.",
        hint: "He cleaned the house earlier.",
        answer: "kanina",
        wordBank: [
          "Mag-adal",
          "Aksyon",
          "kanina",
          "Maglakat",
        ],
      },
      {
        id: "3",
        sentence: "___ ako hin libro.",
        hint: "I am reading a book.",
        answer: "Nagbabasa",
        wordBank: [
          "Maturog",
          "Antes",
          "Nagbabasa",
          "Uyag",
        ],
      },
      {
        id: "4",
        sentence: "Nagsusurat hiya hin ___.",
        hint: "He is writing a letter. / He/She is writing a letter.",
        answer: "surat",
        wordBank: [
          "Kasagaran",
          "Katapos",
          "Uyag",
          "surat",
        ],
      },
      {
        id: "5",
        sentence: "Magbabasa ako ___.",
        hint: "I will read tomorrow.",
        answer: "buwas",
        wordBank: [
          "buwas",
          "Adal",
          "Yana",
          "Turog",
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
          "hin",
          "libro",
          "kahapon",
          "Nagbasa",
          "ako",
        ],
        answer: [
          "Nagbasa",
          "ako",
          "hin",
          "libro",
          "kahapon",
        ],
        display: "Nagbasa ako hin libro kahapon.",
      },
      {
        id: "2",
        words: [
          "kagab-i",
          "Nagluto",
          "hin",
          "panihapon",
          "hiya",
        ],
        answer: [
          "Nagluto",
          "hiya",
          "hin",
          "panihapon",
          "kagab-i",
        ],
        display: "Nagluto hiya hin panihapon kagab-i.",
      },
      {
        id: "3",
        words: [
          "kami",
          "ha",
          "eksam",
          "para",
          "Nag-aram",
        ],
        answer: [
          "Nag-aram",
          "kami",
          "para",
          "ha",
          "eksam",
        ],
        display: "Nag-aram kami para ha eksam.",
      },
      {
        id: "4",
        words: [
          "balay",
          "han",
          "Naglimpyo",
          "hiya",
          "kanina",
        ],
        answer: [
          "Naglimpyo",
          "hiya",
          "han",
          "balay",
          "kanina",
        ],
        display: "Naglimpyo hiya han balay kanina.",
      },
      {
        id: "5",
        words: [
          "hira",
          "Nag-uyag",
          "kahapon",
        ],
        answer: [
          "Nag-uyag",
          "hira",
          "kahapon",
        ],
        display: "Nag-uyag hira kahapon.",
      },
    ],
  },
  speaking: {
    title: "Speaking Practice",
    instructions: "Read the following sentences aloud.",
    note: "Learners should listen to the model pronunciation before recording their own voice.",
    practiceLessonId: "waray_25",
    phrases: [
      {
        id: "1",
        text: "Nagbasa ako hin libro kahapon.",
        respelling: "nag-ba-sa a-ko hin lib-ro ka-ha-pon",
        meaning: "I read a book yesterday.",
      },
      {
        id: "2",
        text: "Nagbabasa ako hin libro.",
        respelling: "nag-ba-ba-sa a-ko hin lib-ro",
        meaning: "I am reading a book.",
      },
      {
        id: "3",
        text: "Magbabasa ako buwas.",
        respelling: "mag-ba-ba-sa a-ko bu-was",
        meaning: "I will read tomorrow.",
      },
      {
        id: "4",
        text: "Ano an imo ginbuhat kahapon?",
        respelling: "a-no an i-mo gin-boo-haht ka-ha-pon",
        meaning: "What did you do yesterday?",
      },
      {
        id: "5",
        text: "Nagbasa ako kahapon.",
        respelling: "nag-ba-sa a-ko ka-ha-pon",
        meaning: "I read yesterday.",
      },
      {
        id: "6",
        text: "Nagluluto hi Nanay.",
        respelling: "nahg-loo-loo-toh hi na-nay",
        meaning: "Mother is cooking.",
      },
      {
        id: "7",
        text: "Nagtrabaho hiya han naglabay nga semana.",
        respelling: "nag-tra-ba-ho hee-yah han nag-la-bay nga se-ma-na",
        meaning: "He/She worked last week.",
      },
    ],
  },
  exampleSituation: {
    description: "Imagine this situation from the lesson: Talking About Yesterday.",
    lead: "You can begin by saying:",
    line: "Ano an imo ginbuhat kahapon?",
    translation: "What did you do yesterday?",
  },
  vocabularyIntro: "Learn the following words and expressions before proceeding to the activities.",
  pronunciationTip: "Read each syllable clearly. Avoid rushing through longer expressions.",
  selfIntroIntro: "Use these patterns and phrases from the lesson.",
  vocabulary: [
    {
      term: "Magbasa",
      meaning: "To read",
      pronunciation: "mag-ba-sa",
      usage: "A common action verb.",
    },
    {
      term: "Magsurat",
      meaning: "To write",
      pronunciation: "mag-su-rat",
      usage: "A common action verb.",
    },
    {
      term: "Mag-adal",
      meaning: "To study",
      pronunciation: "mag-a-dal",
      usage: "A common action verb.",
    },
    {
      term: "Magluto",
      meaning: "To cook",
      pronunciation: "mag-lu-to",
      usage: "A common action verb.",
    },
    {
      term: "Magtrabaho",
      meaning: "To work",
      pronunciation: "mag-tra-ba-ho",
      usage: "A common action verb.",
    },
    {
      term: "Maglimpyo",
      meaning: "To clean",
      pronunciation: "mag-lim-pyo",
      usage: "A common action verb.",
    },
    {
      term: "Maglakat",
      meaning: "To walk",
      pronunciation: "mag-la-kat",
      usage: "A common action verb.",
    },
    {
      term: "Mag-uyag",
      meaning: "To play",
      pronunciation: "mag-u-yag",
      usage: "A common action verb.",
    },
    {
      term: "Maturog",
      meaning: "To sleep",
      pronunciation: "ma-tu-rog",
      usage: "A common action verb.",
    },
    {
      term: "Magpahuway",
      meaning: "To rest",
      pronunciation: "mag-pa-hu-way",
      usage: "A common action verb.",
      example: [
        {
          speaker: "A",
          text: "Nagbabasa ako han amon mga nota ha siyensya.",
          translation: "I am reading our science notes.",
        },
        {
          speaker: "B",
          text: "May panahon ka ba nga magpahuway?",
          translation: "Do you have time to rest?",
        },
      ],
    },
    {
      term: "Kumaon",
      meaning: "To eat",
      pronunciation: "ku-ma-on",
      usage: "A common action verb.",
    },
    {
      term: "Uminom",
      meaning: "To drink",
      pronunciation: "u-mi-nom",
      usage: "A common action verb.",
    },
    {
      term: "Umuli",
      meaning: "To go home",
      pronunciation: "u-mu-li",
      usage: "A common action verb.",
    },
    {
      term: "Bulig",
      meaning: "To help",
      pronunciation: "bu-lig",
      usage: "A common action verb.",
    },
    {
      term: "Pamati",
      meaning: "To listen",
      pronunciation: "pa-ma-ti",
      usage: "A common action verb.",
    },
    {
      term: "Magyakan",
      meaning: "To speak",
      pronunciation: "mag-ya-kan",
      usage: "A common action verb.",
    },
    {
      term: "Kahapon",
      meaning: "Yesterday",
      pronunciation: "ka-ha-pon",
      usage: "A time expression.",
      example: [
        {
          speaker: "A",
          text: "Ano an imo ginbuhat kahapon?",
          translation: "What did you do yesterday?",
        },
        {
          speaker: "B",
          text: "Nagbasa ako hin libro ngan naglimpyo han balay.",
          translation: "I read a book and cleaned the house.",
        },
      ],
    },
    {
      term: "Yana",
      meaning: "Today",
      pronunciation: "ya-na",
      usage: "A time expression.",
      example: [
        {
          speaker: "A",
          text: "Kumusta? Ano an imo ginbubuhat yana?",
          translation: "How are you? What are you doing now?",
        },
        {
          speaker: "B",
          text: "Nag-aadal ako para ha amon eksam.",
          translation: "I am studying for our examination.",
        },
      ],
    },
    {
      term: "Buwas",
      meaning: "Tomorrow",
      pronunciation: "bu-was",
      usage: "A time expression.",
      example: [
        {
          speaker: "A",
          text: "Ano an imo bubuhaton buwas?",
          translation: "What will you do tomorrow?",
        },
        {
          speaker: "B",
          text: "Makadto ako ha balay han akon lolo ngan lola.",
          translation: "I will go to my grandparents' house.",
        },
      ],
    },
    {
      term: "Yana",
      meaning: "Now",
      pronunciation: "ya-na",
      usage: "A time expression.",
      example: [
        {
          speaker: "A",
          text: "Kumusta? Ano an imo ginbubuhat yana?",
          translation: "How are you? What are you doing now?",
        },
        {
          speaker: "B",
          text: "Nag-aadal ako para ha amon eksam.",
          translation: "I am studying for our examination.",
        },
      ],
    },
    {
      term: "Kanina",
      meaning: "Earlier",
      pronunciation: "ka-ni-na",
      usage: "A time expression.",
      example: [
        {
          speaker: "",
          text: "Naglimpyo hiya han balay kanina.",
          translation: "He cleaned the house earlier.",
        },
      ],
    },
    {
      term: "Ha urhi",
      meaning: "Later",
      pronunciation: "ha u-rhi",
      usage: "A time expression.",
      example: [
        {
          speaker: "",
          text: "Magluluto hiya ha urhi.",
          translation: "She will cook later.",
        },
      ],
    },
    {
      term: "Kada adlaw",
      meaning: "Every day",
      pronunciation: "ka-da ad-law",
      usage: "A time expression.",
      example: [
        {
          speaker: "",
          text: "Nag-aadal ako kada adlaw.",
          translation: "I study every day.",
        },
      ],
    },
    {
      term: "Kada aga",
      meaning: "Every morning",
      pronunciation: "ka-da a-ga",
      usage: "A time expression.",
    },
    {
      term: "Kada gab-i",
      meaning: "Every evening",
      pronunciation: "ka-da gab-i",
      usage: "A time expression.",
    },
    {
      term: "Naglabay nga semana",
      meaning: "Last week",
      pronunciation: "nag-la-bay nga se-ma-na",
      usage: "A time expression.",
      example: [
        {
          speaker: "",
          text: "Nagtrabaho hiya han naglabay nga semana.",
          translation: "He/She worked last week.",
        },
      ],
    },
    {
      term: "Sunod nga semana",
      meaning: "Next week",
      pronunciation: "su-nod nga se-ma-na",
      usage: "A time expression.",
      example: [
        {
          speaker: "A",
          text: "Ikaw, ano an imo plano?",
          translation: "What about you? What are your plans?",
        },
        {
          speaker: "B",
          text: "Mag-aadal ako para ha amon eksam ha sunod nga semana.",
          translation: "I will study for our examination next week.",
        },
      ],
    },
    {
      term: "Naglabay nga bulan",
      meaning: "Last month",
      pronunciation: "nag-la-bay nga bu-lan",
      usage: "A time expression.",
    },
    {
      term: "Sunod nga bulan",
      meaning: "Next month",
      pronunciation: "su-nod nga bu-lan",
      usage: "A time expression.",
    },
    {
      term: "Na",
      meaning: "Already",
      pronunciation: "na",
      usage: "An expression related to action and time.",
      example: [
        {
          speaker: "",
          text: "Kinaon ka na ba?",
          translation: "Have you eaten?",
        },
      ],
    },
    {
      term: "Waray pa",
      meaning: "Not yet",
      pronunciation: "wa-ray pa",
      usage: "An expression related to action and time.",
    },
    {
      term: "Gihapon / pa",
      meaning: "Still",
      pronunciation: "gi-ha-pon / pa",
      usage: "An expression related to action and time.",
    },
    {
      term: "Antes",
      meaning: "Before",
      pronunciation: "an-tes",
      usage: "An expression related to action and time.",
    },
    {
      term: "Katapos",
      meaning: "After",
      pronunciation: "ka-ta-pos",
      usage: "An expression related to action and time.",
      example: [
        {
          speaker: "A",
          text: "May panahon ka ba nga magpahuway?",
          translation: "Do you have time to rest?",
        },
        {
          speaker: "B",
          text: "Oo, magpapahuway ako katapos hini nga leksyon.",
          translation: "Yes, I will rest after this lesson.",
        },
      ],
    },
    {
      term: "Agsob",
      meaning: "Frequently",
      pronunciation: "ag-sob",
      usage: "An expression related to action and time.",
    },
    {
      term: "Usahay",
      meaning: "Sometimes",
      pronunciation: "u-sa-hay",
      usage: "An expression related to action and time.",
    },
    {
      term: "Kasagaran",
      meaning: "Usually",
      pronunciation: "ka-sa-ga-ran",
      usage: "An expression related to action and time.",
    },
    {
      term: "Pirme",
      meaning: "Always",
      pronunciation: "pir-me",
      usage: "An expression related to action and time.",
    },
    {
      term: "Diri gud",
      meaning: "Never",
      pronunciation: "di-ri gud",
      usage: "An expression related to action and time.",
    },
    {
      term: "Berbo",
      meaning: "Verb",
      pronunciation: "ber-bo",
      usage: "From this lesson's word list: verb-related terms.",
    },
    {
      term: "Aksyon",
      meaning: "Action",
      pronunciation: "ak-syon",
      usage: "From this lesson's word list: verb-related terms.",
    },
    {
      term: "Pulong nga-ugat",
      meaning: "Root word",
      pronunciation: "pu-long nga-u-gat",
      usage: "From this lesson's word list: verb-related terms.",
    },
    {
      term: "Natapos nga aksyon",
      meaning: "Completed action",
      pronunciation: "na-ta-pos nga ak-syon",
      usage: "From this lesson's word list: verb-related terms.",
    },
    {
      term: "Nagpapadayon nga aksyon",
      meaning: "Ongoing action",
      pronunciation: "nag-pa-pa-da-yon nga ak-syon",
      usage: "From this lesson's word list: verb-related terms.",
    },
    {
      term: "Aksyon nga bubuhaton pa",
      meaning: "Future action",
      pronunciation: "ak-syon nga bu-bu-ha-ton pa",
      usage: "From this lesson's word list: verb-related terms.",
    },
    {
      term: "Oras / panahon",
      meaning: "Time",
      pronunciation: "o-ras / pa-na-hon",
      usage: "From this lesson's word list: verb-related terms.",
      example: [
        {
          speaker: "A",
          text: "Nagbabasa ako han amon mga nota ha siyensya.",
          translation: "I am reading our science notes.",
        },
        {
          speaker: "B",
          text: "May panahon ka ba nga magpahuway?",
          translation: "Do you have time to rest?",
        },
      ],
    },
    {
      term: "Sentensya",
      meaning: "Sentence",
      pronunciation: "sen-ten-sya",
      usage: "From this lesson's word list: verb-related terms.",
    },
    {
      term: "Basa",
      meaning: "Read",
      pronunciation: "ba-sa",
      usage: "From the language note \"Understanding Verb Root Words\".",
    },
    {
      term: "Surat",
      meaning: "Write",
      pronunciation: "su-rat",
      usage: "From the language note \"Understanding Verb Root Words\".",
      example: [
        {
          speaker: "",
          text: "Nagsusurat hiya hin surat.",
          translation: "He is writing a letter. / He/She is writing a letter.",
        },
      ],
    },
    {
      term: "Adal",
      meaning: "Study",
      pronunciation: "a-dal",
      usage: "From the language note \"Understanding Verb Root Words\".",
    },
    {
      term: "Luto",
      meaning: "Cook",
      pronunciation: "lu-to",
      usage: "From the language note \"Understanding Verb Root Words\".",
    },
    {
      term: "Trabaho",
      meaning: "Work",
      pronunciation: "tra-ba-ho",
      usage: "From the language note \"Understanding Verb Root Words\".",
    },
    {
      term: "Limpyo",
      meaning: "Clean",
      pronunciation: "LIM-pyo",
      usage: "From the language note \"Understanding Verb Root Words\".",
    },
    {
      term: "Lakat",
      meaning: "Walk",
      pronunciation: "lah-KAHT",
      usage: "From the language note \"Understanding Verb Root Words\".",
    },
    {
      term: "Uyag",
      meaning: "Play",
      pronunciation: "u-yag",
      usage: "From the language note \"Understanding Verb Root Words\".",
    },
    {
      term: "Turog",
      meaning: "Sleep",
      pronunciation: "tu-rog",
      usage: "From the language note \"Understanding Verb Root Words\".",
    },
    {
      term: "Pahuway",
      meaning: "Rest",
      pronunciation: "pah-HOO-wai",
      usage: "From the language note \"Understanding Verb Root Words\".",
    },
    {
      term: "Nagbabasa",
      meaning: "Reading / Is reading",
      pronunciation: "nag-ba-ba-sa",
      usage: "From the language note \"Understanding Verb Root Words\".",
      example: [
        {
          speaker: "A",
          text: "Ano nga subject an imo gin-aadman?",
          translation: "What subject are you studying?",
        },
        {
          speaker: "B",
          text: "Nagbabasa ako han amon mga nota ha siyensya.",
          translation: "I am reading our science notes.",
        },
      ],
    },
    {
      term: "Nagbasa",
      meaning: "Read / Studied",
      pronunciation: "nag-ba-sa",
      usage: "From the language note \"Understanding Verb Root Words\".",
      example: [
        {
          speaker: "A",
          text: "Nagbasa ako hin libro ngan naglimpyo han balay.",
          translation: "I read a book and cleaned the house.",
        },
        {
          speaker: "B",
          text: "Nag-aram ka ba para ha eksam?",
          translation: "Did you study for the examination?",
        },
      ],
    },
    {
      term: "Magbabasa",
      meaning: "Will read",
      pronunciation: "mag-ba-ba-sa",
      usage: "From the language note \"Understanding Verb Root Words\".",
      example: [
        {
          speaker: "",
          text: "Magbabasa ako buwas.",
          translation: "I will read tomorrow.",
        },
      ],
    },
  ],
  greetings: [
    {
      term: "Kahapon",
      meaning: "Yesterday",
      pronunciation: "ka-ha-pon",
      usage: "A time expression.",
      example: [
        {
          speaker: "A",
          text: "Ano an imo ginbuhat kahapon?",
          translation: "What did you do yesterday?",
        },
        {
          speaker: "B",
          text: "Nagbasa ako hin libro ngan naglimpyo han balay.",
          translation: "I read a book and cleaned the house.",
        },
      ],
    },
    {
      term: "Yana",
      meaning: "Today",
      pronunciation: "ya-na",
      usage: "A time expression.",
      example: [
        {
          speaker: "A",
          text: "Kumusta? Ano an imo ginbubuhat yana?",
          translation: "How are you? What are you doing now?",
        },
        {
          speaker: "B",
          text: "Nag-aadal ako para ha amon eksam.",
          translation: "I am studying for our examination.",
        },
      ],
    },
    {
      term: "Buwas",
      meaning: "Tomorrow",
      pronunciation: "bu-was",
      usage: "A time expression.",
      example: [
        {
          speaker: "A",
          text: "Ano an imo bubuhaton buwas?",
          translation: "What will you do tomorrow?",
        },
        {
          speaker: "B",
          text: "Makadto ako ha balay han akon lolo ngan lola.",
          translation: "I will go to my grandparents' house.",
        },
      ],
    },
    {
      term: "Yana",
      meaning: "Now",
      pronunciation: "ya-na",
      usage: "A time expression.",
      example: [
        {
          speaker: "A",
          text: "Kumusta? Ano an imo ginbubuhat yana?",
          translation: "How are you? What are you doing now?",
        },
        {
          speaker: "B",
          text: "Nag-aadal ako para ha amon eksam.",
          translation: "I am studying for our examination.",
        },
      ],
    },
    {
      term: "Kanina",
      meaning: "Earlier",
      pronunciation: "ka-ni-na",
      usage: "A time expression.",
      example: [
        {
          speaker: "",
          text: "Naglimpyo hiya han balay kanina.",
          translation: "He cleaned the house earlier.",
        },
      ],
    },
    {
      term: "Ha urhi",
      meaning: "Later",
      pronunciation: "ha u-rhi",
      usage: "A time expression.",
      example: [
        {
          speaker: "",
          text: "Magluluto hiya ha urhi.",
          translation: "She will cook later.",
        },
      ],
    },
    {
      term: "Kada adlaw",
      meaning: "Every day",
      pronunciation: "ka-da ad-law",
      usage: "A time expression.",
      example: [
        {
          speaker: "",
          text: "Nag-aadal ako kada adlaw.",
          translation: "I study every day.",
        },
      ],
    },
    {
      term: "Kada aga",
      meaning: "Every morning",
      pronunciation: "ka-da a-ga",
      usage: "A time expression.",
    },
    {
      term: "Kada gab-i",
      meaning: "Every evening",
      pronunciation: "ka-da gab-i",
      usage: "A time expression.",
    },
    {
      term: "Naglabay nga semana",
      meaning: "Last week",
      pronunciation: "nag-la-bay nga se-ma-na",
      usage: "A time expression.",
      example: [
        {
          speaker: "",
          text: "Nagtrabaho hiya han naglabay nga semana.",
          translation: "He/She worked last week.",
        },
      ],
    },
    {
      term: "Sunod nga semana",
      meaning: "Next week",
      pronunciation: "su-nod nga se-ma-na",
      usage: "A time expression.",
      example: [
        {
          speaker: "A",
          text: "Ikaw, ano an imo plano?",
          translation: "What about you? What are your plans?",
        },
        {
          speaker: "B",
          text: "Mag-aadal ako para ha amon eksam ha sunod nga semana.",
          translation: "I will study for our examination next week.",
        },
      ],
    },
    {
      term: "Naglabay nga bulan",
      meaning: "Last month",
      pronunciation: "nag-la-bay nga bu-lan",
      usage: "A time expression.",
    },
    {
      term: "Sunod nga bulan",
      meaning: "Next month",
      pronunciation: "su-nod nga bu-lan",
      usage: "A time expression.",
    },
    {
      term: "Na",
      meaning: "Already",
      pronunciation: "na",
      usage: "An expression related to action and time.",
      example: [
        {
          speaker: "",
          text: "Kinaon ka na ba?",
          translation: "Have you eaten?",
        },
      ],
    },
    {
      term: "Waray pa",
      meaning: "Not yet",
      pronunciation: "wa-ray pa",
      usage: "An expression related to action and time.",
    },
    {
      term: "Gihapon / pa",
      meaning: "Still",
      pronunciation: "gi-ha-pon / pa",
      usage: "An expression related to action and time.",
    },
    {
      term: "Antes",
      meaning: "Before",
      pronunciation: "an-tes",
      usage: "An expression related to action and time.",
    },
    {
      term: "Katapos",
      meaning: "After",
      pronunciation: "ka-ta-pos",
      usage: "An expression related to action and time.",
      example: [
        {
          speaker: "A",
          text: "May panahon ka ba nga magpahuway?",
          translation: "Do you have time to rest?",
        },
        {
          speaker: "B",
          text: "Oo, magpapahuway ako katapos hini nga leksyon.",
          translation: "Yes, I will rest after this lesson.",
        },
      ],
    },
    {
      term: "Agsob",
      meaning: "Frequently",
      pronunciation: "ag-sob",
      usage: "An expression related to action and time.",
    },
    {
      term: "Usahay",
      meaning: "Sometimes",
      pronunciation: "u-sa-hay",
      usage: "An expression related to action and time.",
    },
    {
      term: "Kasagaran",
      meaning: "Usually",
      pronunciation: "ka-sa-ga-ran",
      usage: "An expression related to action and time.",
    },
    {
      term: "Pirme",
      meaning: "Always",
      pronunciation: "pir-me",
      usage: "An expression related to action and time.",
    },
    {
      term: "Diri gud",
      meaning: "Never",
      pronunciation: "di-ri gud",
      usage: "An expression related to action and time.",
    },
  ],
  patterns: [
    {
      label: "Pattern 1: Completed Actions",
      pattern: "Completed verb form + subject + additional information.",
      examples: [
        "Nagbasa + ako + hin libro kahapon.",
      ],
    },
    {
      label: "Pattern 2: Ongoing Actions",
      pattern: "Ongoing verb form + subject + additional information.",
      examples: [
        "Nagbabasa + ako + hin libro yana.",
      ],
    },
    {
      label: "Pattern 3: Intended and Future Actions",
      pattern: "Future or intended verb form + subject + additional information.",
      examples: [
        "Magbabasa + ako + buwas.",
      ],
    },
  ],
  sentences: [
    {
      text: "Nagbasa ako hin libro kahapon.",
      meaning: "I read a book yesterday.",
    },
    {
      text: "Nagluto hiya hin panihapon kagab-i.",
      meaning: "She cooked dinner last night.",
    },
    {
      text: "Nag-aram kami para ha eksam.",
      meaning: "We studied for the examination.",
    },
    {
      text: "Naglimpyo hiya han balay kanina.",
      meaning: "He cleaned the house earlier.",
    },
    {
      text: "Nag-uyag hira kahapon.",
      meaning: "They played yesterday.",
    },
    {
      text: "Nagbabasa ako hin libro.",
      meaning: "I am reading a book.",
    },
    {
      text: "Nagluluto hiya.",
      meaning: "She is cooking.",
    },
    {
      text: "Nag-aadal kami.",
      meaning: "We are studying.",
    },
    {
      text: "Nagsusurat hiya hin surat.",
      meaning: "He is writing a letter. / He/She is writing a letter.",
    },
    {
      text: "Nag-uuyag hira ha gawas.",
      meaning: "They are playing outside.",
    },
    {
      text: "Magbabasa ako buwas.",
      meaning: "I will read tomorrow.",
    },
    {
      text: "Magluluto hiya ha urhi.",
      meaning: "She will cook later.",
    },
    {
      text: "Mag-aadal kami yana nga gab-i.",
      meaning: "We will study tonight.",
    },
    {
      text: "Magsusurat hiya hin surat.",
      meaning: "He will write a letter. / He/She will write a letter.",
    },
    {
      text: "Makadto hira ha ira mga apoy ha sunod nga semana.",
      meaning: "They will visit their grandparents next week.",
    },
    {
      text: "Ano an imo ginbubuhat?",
      meaning: "What are you doing?",
    },
    {
      text: "Ano an imo ginbuhat kahapon?",
      meaning: "What did you do yesterday?",
    },
    {
      text: "Ano an imo bubuhaton buwas?",
      meaning: "What will you do tomorrow?",
    },
    {
      text: "Nag-aadal ka ba yana?",
      meaning: "Are you studying now?",
    },
    {
      text: "Kinaon ka na ba?",
      meaning: "Have you eaten?",
    },
    {
      text: "Ngain ka makadto?",
      meaning: "Where are you going?",
    },
    {
      text: "Nagbasa ako kahapon.",
      meaning: "I read yesterday.",
    },
    {
      text: "Nagluto hi Nanay kagab-i.",
      meaning: "Mother cooked last night.",
    },
    {
      text: "Naglimpyo kami han balay.",
      meaning: "We cleaned the house.",
    },
    {
      text: "Nag-aram hiya para ha eksam.",
      meaning: "He/She studied for the examination.",
    },
    {
      text: "Nagbabasa ako yana.",
      meaning: "I am reading now.",
    },
    {
      text: "Nagluluto hi Nanay.",
      meaning: "Mother is cooking.",
    },
    {
      text: "Nag-aadal hira ha library.",
      meaning: "They are studying in the library.",
    },
    {
      text: "Magluluto hi Nanay yana nga gab-i.",
      meaning: "Mother will cook tonight.",
    },
    {
      text: "Mag-aadal kami para ha eksam.",
      meaning: "We will study for the examination.",
    },
    {
      text: "Nag-aadal ako kada adlaw.",
      meaning: "I study every day.",
    },
    {
      text: "Nagtrabaho hiya han naglabay nga semana.",
      meaning: "He/She worked last week.",
    },
    {
      text: "Maglilimpyo kami buwas.",
      meaning: "We will clean tomorrow.",
    },
    {
      text: "Nagluluto hi Nanay yana.",
      meaning: "Mother is cooking now.",
    },
    {
      text: "Ano an imo ginbubuhat yana?",
      meaning: "What are you doing now?",
    },
    {
      text: "Makadto ka ba buwas?",
      meaning: "Will you go tomorrow?",
    },
  ],
  conversations: [
    {
      title: "Conversation 1: Talking About Yesterday",
      situation: "Two friends discuss what they did the previous day.",
      lines: [
        {
          speaker: "Ana",
          text: "Ano an imo ginbuhat kahapon?",
          translation: "What did you do yesterday?",
        },
        {
          speaker: "Ben",
          text: "Nagbasa ako hin libro ngan naglimpyo han balay.",
          translation: "I read a book and cleaned the house.",
        },
        {
          speaker: "Ana",
          text: "Nag-aram ka ba para ha eksam?",
          translation: "Did you study for the examination?",
        },
        {
          speaker: "Ben",
          text: "Oo, nag-aram ako ha gab-i.",
          translation: "Yes, I studied at night.",
        },
        {
          speaker: "Ana",
          text: "Kapoy ba an imo adlaw?",
          translation: "Was your day tiring?",
        },
        {
          speaker: "Ben",
          text: "Oo, pero nalipay ako kay damu an akon nahimo.",
          translation: "Yes, but I was happy because I accomplished many things.",
        },
      ],
    },
    {
      title: "Conversation 2: Talking About Current Activities",
      situation: "Two classmates meet while one of them is studying.",
      lines: [
        {
          speaker: "Mark",
          text: "Kumusta? Ano an imo ginbubuhat yana?",
          translation: "How are you? What are you doing now?",
        },
        {
          speaker: "Leo",
          text: "Nag-aadal ako para ha amon eksam.",
          translation: "I am studying for our examination.",
        },
        {
          speaker: "Mark",
          text: "Ano nga subject an imo gin-aadman?",
          translation: "What subject are you studying?",
        },
        {
          speaker: "Leo",
          text: "Nagbabasa ako han amon mga nota ha siyensya.",
          translation: "I am reading our science notes.",
        },
        {
          speaker: "Mark",
          text: "May panahon ka ba nga magpahuway?",
          translation: "Do you have time to rest?",
        },
        {
          speaker: "Leo",
          text: "Oo, magpapahuway ako katapos hini nga leksyon.",
          translation: "Yes, I will rest after this lesson.",
        },
        {
          speaker: "Mark",
          text: "Maupay ito. Ayaw kalimti an pagpahuway.",
          translation: "That is good. Do not forget to rest.",
        },
      ],
    },
    {
      title: "Conversation 3: Talking About Future Plans",
      situation: "Two friends discuss their plans for the weekend.",
      lines: [
        {
          speaker: "Ana",
          text: "Ano an imo bubuhaton buwas?",
          translation: "What will you do tomorrow?",
        },
        {
          speaker: "Ben",
          text: "Makadto ako ha balay han akon lolo ngan lola.",
          translation: "I will go to my grandparents' house.",
        },
        {
          speaker: "Ana",
          text: "Ano an iyo bubuhaton didto?",
          translation: "What will you do there?",
        },
        {
          speaker: "Ben",
          text: "Mabulig ako ha ira ngan makig-istorya ha ira.",
          translation: "I will help them and talk with them.",
        },
        {
          speaker: "Ana",
          text: "Maupay ito nga plano.",
          translation: "That is a good plan.",
        },
        {
          speaker: "Ben",
          text: "Ikaw, ano an imo plano?",
          translation: "What about you? What are your plans?",
        },
        {
          speaker: "Ana",
          text: "Mag-aadal ako para ha amon eksam ha sunod nga semana.",
          translation: "I will study for our examination next week.",
        },
      ],
    },
  ],
  savedLanguageNotes: [
    {
      title: "A. Understanding Verb Root Words",
      body: [
        "A root word is the basic form from which related words or verb forms may be constructed.",
      ],
      table: {
        leftHeading: "Root or Base Form",
        rightHeading: "English",
        rows: [
          {
            left: "Basa",
            right: "Read",
          },
          {
            left: "Surat",
            right: "Write",
          },
          {
            left: "Adal",
            right: "Study",
          },
          {
            left: "Luto",
            right: "Cook",
          },
          {
            left: "Trabaho",
            right: "Work",
          },
          {
            left: "Limpyo",
            right: "Clean",
          },
          {
            left: "Lakat",
            right: "Walk",
          },
          {
            left: "Uyag",
            right: "Play",
          },
          {
            left: "Turog",
            right: "Sleep",
          },
          {
            left: "Pahuway",
            right: "Rest",
          },
        ],
      },
    },
    {
      title: "A. Understanding Verb Root Words",
      body: [
        "In Waray, different verb constructions can be formed using these roots.",
        "For example:",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Magbasa",
            right: "To read",
          },
          {
            left: "Nagbabasa",
            right: "Reading / Is reading",
          },
          {
            left: "Nagbasa",
            right: "Read / Studied",
          },
          {
            left: "Magbabasa",
            right: "Will read",
          },
        ],
      },
    },
    {
      title: "A. Understanding Verb Root Words",
      body: [
        "The changes in the beginning and internal parts of a verb can communicate different grammatical meanings.",
        "Important: Not all Waray verbs follow one identical pattern. Some verbs use different constructions, and their forms should be learned through examples and actual usage.",
      ],
    },
    {
      title: "B. Completed Actions",
      body: [
        "Completed actions refer to activities or events that have already happened.",
        "Time expressions such as kahapon, kagab-i, and kanina can help identify when an action was completed.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Nagbasa ako kahapon.",
            right: "I read yesterday.",
          },
          {
            left: "Nagluto hi Nanay kagab-i.",
            right: "Mother cooked last night.",
          },
          {
            left: "Naglimpyo kami han balay.",
            right: "We cleaned the house.",
          },
          {
            left: "Nag-aram hiya para ha eksam.",
            right: "He/She studied for the examination.",
          },
        ],
      },
    },
    {
      title: "B. Completed Actions",
      body: [
        "Pattern to Observe:",
        "Completed verb form + subject + additional information.",
        "Nagbasa + ako + hin libro kahapon.",
        "Read + I + a book yesterday.",
      ],
    },
    {
      title: "C. Ongoing Actions",
      body: [
        "Ongoing actions describe activities that are happening at the time of speaking or continuing during a particular period.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Nagbabasa ako yana.",
            right: "I am reading now.",
          },
          {
            left: "Nagluluto hi Nanay.",
            right: "Mother is cooking.",
          },
          {
            left: "Nag-aadal hira ha library.",
            right: "They are studying in the library.",
          },
          {
            left: "Nagsusurat hiya hin surat.",
            right: "He/She is writing a letter.",
          },
        ],
      },
    },
    {
      title: "C. Ongoing Actions",
      body: [
        "Pattern to Observe:",
        "Ongoing verb form + subject + additional information.",
        "Nagbabasa + ako + hin libro yana.",
        "Am reading + I + a book now.",
      ],
    },
    {
      title: "D. Intended and Future Actions",
      body: [
        "Future or intended actions describe activities that have not happened yet but are expected, planned, or intended to happen.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Magbabasa ako buwas.",
            right: "I will read tomorrow.",
          },
          {
            left: "Magluluto hi Nanay yana nga gab-i.",
            right: "Mother will cook tonight.",
          },
          {
            left: "Mag-aadal kami para ha eksam.",
            right: "We will study for the examination.",
          },
          {
            left: "Magsusurat hiya hin surat.",
            right: "He/She will write a letter.",
          },
        ],
      },
    },
    {
      title: "D. Intended and Future Actions",
      body: [
        "Time expressions such as buwas, sunod nga semana, and yana nga gab-i can provide additional context.",
        "Pattern to Observe:",
        "Future or intended verb form + subject + additional information.",
        "Magbabasa + ako + buwas.",
        "Will read + I + tomorrow.",
      ],
    },
    {
      title: "E. Comparing Different Verb Forms",
      body: [
        "The following table compares common forms using the same general action.",
      ],
      table: {
        leftHeading: "",
        rightHeading: "",
        rows: [
          {
            left: "Action",
            right: "Completed · Ongoing · Intended / Future",
          },
          {
            left: "Read",
            right: "Nagbasa ako. · Nagbabasa ako. · Magbabasa ako.",
          },
          {
            left: "Write",
            right: "Nagsurat ako. · Nagsusurat ako. · Magsusurat ako.",
          },
          {
            left: "Cook",
            right: "Nagluto ako. · Nagluluto ako. · Magluluto ako.",
          },
          {
            left: "Study",
            right: "Nag-aram ako. · Nag-aadal ako. · Mag-aadal ako.",
          },
          {
            left: "Clean",
            right: "Naglimpyo ako. · Naglilimpyo ako. · Maglilimpyo ako.",
          },
        ],
      },
    },
    {
      title: "E. Comparing Different Verb Forms",
      body: [
        "English translations:",
      ],
      table: {
        leftHeading: "",
        rightHeading: "",
        rows: [
          {
            left: "Completed",
            right: "Ongoing · Intended / Future",
          },
          {
            left: "I read.",
            right: "I am reading. · I will read.",
          },
          {
            left: "I wrote.",
            right: "I am writing. · I will write.",
          },
          {
            left: "I cooked.",
            right: "I am cooking. · I will cook.",
          },
          {
            left: "I studied.",
            right: "I am studying. · I will study.",
          },
          {
            left: "I cleaned.",
            right: "I am cleaning. · I will clean.",
          },
        ],
      },
    },
    {
      title: "E. Comparing Different Verb Forms",
      body: [
        "These are teaching examples for observing common patterns. Actual Waray verb forms may differ according to the verb root, construction, and intended meaning.",
      ],
    },
    {
      title: "F. Using Time Expressions with Verbs",
      body: [
        "Time expressions help listeners understand when an activity happens.",
        "Compare:",
      ],
      examples: [
        {
          text: "Nagbasa ako kahapon.",
          meaning: "I read yesterday.",
        },
        {
          text: "Nagbabasa ako yana.",
          meaning: "I am reading now.",
        },
        {
          text: "Magbabasa ako buwas.",
          meaning: "I will read tomorrow.",
        },
      ],
    },
    {
      title: "F. Using Time Expressions with Verbs",
      body: [
        "Other examples:",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Nag-aadal ako kada adlaw.",
            right: "I study every day.",
          },
          {
            left: "Nagtrabaho hiya han naglabay nga semana.",
            right: "He/She worked last week.",
          },
          {
            left: "Maglilimpyo kami buwas.",
            right: "We will clean tomorrow.",
          },
          {
            left: "Nagluluto hi Nanay yana.",
            right: "Mother is cooking now.",
          },
        ],
      },
    },
    {
      title: "G. Asking Questions About Different Actions",
      body: [
        "Questions can help learners practice identifying whether an action has already happened, is currently happening, or is intended for the future.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Ano an imo ginbuhat kahapon?",
            right: "What did you do yesterday?",
          },
          {
            left: "Ano an imo ginbubuhat yana?",
            right: "What are you doing now?",
          },
          {
            left: "Ano an imo bubuhaton buwas?",
            right: "What will you do tomorrow?",
          },
          {
            left: "Nag-aadal ka ba yana?",
            right: "Are you studying now?",
          },
          {
            left: "Makadto ka ba buwas?",
            right: "Will you go tomorrow?",
          },
        ],
      },
    },
    {
      title: "G. Asking Questions About Different Actions",
      body: [
        "Learners should pay attention to both the verb form and the time expression when interpreting a question.",
      ],
    },
    {
      title: "A. Common Action Verbs",
      body: [
        "Note: The table presents common dictionary-style or base expressions. Their forms may change when used in complete sentences.",
      ],
    },
  ],
  inferredFields: [
    "usage",
    "example",
    "pronunciation",
    "fill-in",
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
