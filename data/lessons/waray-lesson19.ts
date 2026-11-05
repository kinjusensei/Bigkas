import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 19 — imported from "Lesson Plan.pdf", pages 921–941.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
// Fields not given by the plan are INFERRED from this lesson's own content and
// listed in docs/waray-inferred-keys.md: usage, example, pattern, choice, arrange, speaking phrase, respelling, target pitch and mood, example situation, unit, pronunciation tip, badge description, completion requirement.
// The practice answers are INFERRED drafts, not from the PDF. See
// docs/waray-draft-answer-keys.md for each answer and how it was found.

export const warayLesson19: StructuredLesson = {
  lessonId: "waray_19",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 19,
  title: "Talking About Daily Activities",
  level: "Intermediate",
  estimatedDuration: "45–60 minutes",
  prerequisite: "Lesson 18 – Shopping and Buying",
  languageVariety: "Daily routines, common activities, time expressions, frequency, and describing everyday schedules.",
  intro: [
    "Daily activities are part of everyday communication. People often talk about what they do in the morning, afternoon, and evening, as well as their routines at home, school, or work.",
    "In this lesson, learners will develop the ability to describe their daily routines using common Waray words and expressions. They will practice talking about activities, asking others about their schedules, and explaining how frequently they perform certain tasks.",
    "Think about your typical day. You wake up, prepare for school or work, eat meals, complete your responsibilities, and eventually rest.",
    "These activities can be described in Waray using common verbs and time expressions.",
    "For example:",
    "• Nabuhát ako hin aga. – I wake up early.",
    "• Nag-aadál ako. – I study.",
    "• Nagluluto hi Nanay. – Mother is cooking.",
    "• Nagtatrabaho hiya. – He/She is working.",
    "• Matuturog na ako. – I am going to sleep.",
    "In this lesson, you will learn how to describe these activities and use them in everyday conversations.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify common Waray vocabulary related to daily activities.",
    "Describe personal routines using simple Waray sentences.",
    "Use time expressions to explain when activities happen.",
    "Ask and answer questions about another person's daily schedule.",
    "Express how frequently they perform certain activities.",
    "Participate in conversations about everyday routines.",
  ],
  assessment: {
    instructions: "Choose the correct answer for each question.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What does \"Pahuway\" mean?",
        options: [
          {
            key: "A",
            text: "To eat",
          },
          {
            key: "B",
            text: "To rest",
          },
          {
            key: "C",
            text: "To study",
          },
          {
            key: "D",
            text: "To walk",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "What is the Waray word for \"morning\"?",
        options: [
          {
            key: "A",
            text: "Gab-i",
          },
          {
            key: "B",
            text: "Kulop",
          },
          {
            key: "C",
            text: "Aga",
          },
          {
            key: "D",
            text: "Buwas",
          },
        ],
        answerKey: "C",
      },
      {
        id: 3,
        prompt: "Which word means \"sometimes\"?",
        options: [
          {
            key: "A",
            text: "Pirme",
          },
          {
            key: "B",
            text: "Usahay",
          },
          {
            key: "C",
            text: "Kada adlaw",
          },
          {
            key: "D",
            text: "Yana",
          },
        ],
        answerKey: "B",
      },
      {
        id: 4,
        prompt: "What does \"Nagbabasa ako\" mean?",
        options: [
          {
            key: "A",
            text: "I am writing.",
          },
          {
            key: "B",
            text: "I am cooking.",
          },
          {
            key: "C",
            text: "I am reading.",
          },
          {
            key: "D",
            text: "I am sleeping.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 5,
        prompt: "Which expression means \"every day\"?",
        options: [
          {
            key: "A",
            text: "Kada adlaw",
          },
          {
            key: "B",
            text: "Ha gab-i",
          },
          {
            key: "C",
            text: "Ha urhi",
          },
          {
            key: "D",
            text: "Kahapon",
          },
        ],
        answerKey: "A",
      },
      {
        id: 6,
        prompt: "What does \"Magtatrabaho ako buwas\" mean?",
        options: [
          {
            key: "A",
            text: "I worked yesterday.",
          },
          {
            key: "B",
            text: "I will work tomorrow.",
          },
          {
            key: "C",
            text: "I am studying today.",
          },
          {
            key: "D",
            text: "I am resting now.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 7,
        prompt: "Which expression asks \"What do you do every day?\"",
        options: [
          {
            key: "A",
            text: "Pira ini?",
          },
          {
            key: "B",
            text: "Ano an imo ginbubuhat kada adlaw?",
          },
          {
            key: "C",
            text: "Hain an imo balay?",
          },
          {
            key: "D",
            text: "Ano an imo ngaran?",
          },
        ],
        answerKey: "B",
      },
      {
        id: 8,
        prompt: "What does \"Pirme\" mean?",
        options: [
          {
            key: "A",
            text: "Never",
          },
          {
            key: "B",
            text: "Rarely",
          },
          {
            key: "C",
            text: "Always",
          },
          {
            key: "D",
            text: "Tomorrow",
          },
        ],
        answerKey: "C",
      },
      {
        id: 9,
        prompt: "Which Waray word means \"to cook\"?",
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
            text: "Maglakat",
          },
          {
            key: "D",
            text: "Magsurat",
          },
        ],
        answerKey: "B",
      },
      {
        id: 10,
        prompt: "What is the English meaning of \"Nag-aadal ako ha gab-i\"?",
        options: [
          {
            key: "A",
            text: "I study in the morning.",
          },
          {
            key: "B",
            text: "I study at night.",
          },
          {
            key: "C",
            text: "I work in the afternoon.",
          },
          {
            key: "D",
            text: "I sleep at night.",
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
      instructions: "Translate the following sentences into Waray.",
      items: [
        "I study every day.",
        "I read a book at night.",
        "I help my family.",
        "I sometimes exercise in the morning.",
        "What do you do every day?",
      ],
    },
    {
      title: "Describe Your Daily Routine",
      kind: "open",
      instructions: "Write five to seven sentences describing your typical daily routine in Waray.\nYour description should include:",
      items: [
        "At least three daily activities.",
        "At least two time expressions.",
        "At least one frequency expression.",
        "At least one sentence connecting two activities.",
        "In the morning, I...",
        "Every day, I...",
        "Sometimes, I...",
        "In the afternoon, I...",
        "At night, I...",
      ],
      note: "Example Structure:",
    },
    {
      title: "Daily Routine Speaking Practice",
      kind: "other",
      instructions: "Record yourself describing your daily routine in Waray.\nYour recording should:",
      items: [
        "Introduce your typical day.",
        "Describe what you do in the morning.",
        "Explain your afternoon activities.",
        "Describe what you do at night.",
        "End with a statement about your daily routine.",
      ],
      note: "Focus on clear pronunciation and complete sentences.",
    },
  ],
  matchActivity: {
    title: "Vocabulary Matching",
    instructions: "Match each Waray word with its correct English meaning.",
    pairs: [
      {
        id: "1",
        term: "Mata",
        answer: "To wake up",
      },
      {
        id: "2",
        term: "Magluto",
        answer: "To cook",
      },
      {
        id: "3",
        term: "Pahuway",
        answer: "To rest",
      },
      {
        id: "4",
        term: "Mag-adal",
        answer: "To study",
      },
      {
        id: "5",
        term: "Maglakat",
        answer: "To walk",
      },
    ],
  },
  fillInBlanks: {
    title: "Complete the Sentences",
    instructions: "Choose the correct word from the word bank to complete each sentence.",
    items: [
      {
        id: "1",
        sentence: "Nag-aadal ako ha ______.",
        answer: "aga",
        title: "Complete the Sentences",
        instructions: "Choose the correct word from the word bank to complete each sentence.",
        wordBank: [
          "aga",
          "gab-i",
          "usahay",
          "pirme",
          "buwas",
        ],
      },
      {
        id: "2",
        sentence: "Natuturog ako ha ______.",
        answer: "gab-i",
        title: "Complete the Sentences",
        instructions: "Choose the correct word from the word bank to complete each sentence.",
        wordBank: [
          "aga",
          "gab-i",
          "usahay",
          "pirme",
          "buwas",
        ],
      },
      {
        id: "3",
        sentence: "______ ako nagbabasa hin libro, pero diri kada adlaw.",
        answer: "usahay",
        title: "Complete the Sentences",
        instructions: "Choose the correct word from the word bank to complete each sentence.",
        wordBank: [
          "aga",
          "gab-i",
          "usahay",
          "pirme",
          "buwas",
        ],
      },
      {
        id: "4",
        sentence: "______ ako nabulig ha akon pamilya.",
        answer: "pirme",
        title: "Complete the Sentences",
        instructions: "Choose the correct word from the word bank to complete each sentence.",
        wordBank: [
          "aga",
          "gab-i",
          "usahay",
          "pirme",
          "buwas",
        ],
      },
      {
        id: "5",
        sentence: "Magtatrabaho ako ______.",
        answer: "buwas",
        title: "Complete the Sentences",
        instructions: "Choose the correct word from the word bank to complete each sentence.",
        wordBank: [
          "aga",
          "gab-i",
          "usahay",
          "pirme",
          "buwas",
        ],
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
        label: "Complete the Sentences + Practice Activities",
        xp: 25,
      },
      {
        section: "conversation",
        label: "Guided Conversation",
        xp: 10,
      },
      {
        section: "assessment",
        label: "Lesson Assessment",
        xp: 15,
      },
    ],
    total: 60,
    badge: {
      name: "Daily Routine Master Badge",
      description: "Awarded after successfully completing Lesson 19.",
    },
    completionRequirement: "Obtain at least 70% in the lesson assessment. Learners may repeat the activities and assessment if they do not meet the requirement.",
  },
  expectedOutcomes: [
    "Before proceeding to the next lesson, learners should be able to:",
    "Recognize common daily activity vocabulary.",
    "Describe their morning, afternoon, and evening routines.",
    "Use time expressions in sentences.",
    "Express how frequently they perform activities.",
    "Ask questions about another person's daily schedule.",
    "Participate in a conversation about everyday activities.",
    "Achieve at least 70% in the lesson assessment.",
  ],
  choiceActivity: {
    title: "Choose the Correct Meaning",
    instructions: "Choose the correct English meaning.",
    questions: [
      {
        id: 1,
        prompt: "What does “Kada adlaw” mean?",
        options: [
          {
            key: "A",
            text: "Work",
          },
          {
            key: "B",
            text: "Now",
          },
          {
            key: "C",
            text: "Early",
          },
          {
            key: "D",
            text: "Every day",
          },
        ],
        answerKey: "D",
      },
      {
        id: 2,
        prompt: "What does “Sayo” mean?",
        options: [
          {
            key: "A",
            text: "Early",
          },
          {
            key: "B",
            text: "Water",
          },
          {
            key: "C",
            text: "Kitchen",
          },
          {
            key: "D",
            text: "Food",
          },
        ],
        answerKey: "A",
      },
      {
        id: 3,
        prompt: "What does “Aga” mean?",
        options: [
          {
            key: "A",
            text: "Not yet",
          },
          {
            key: "B",
            text: "Morning",
          },
          {
            key: "C",
            text: "Study",
          },
          {
            key: "D",
            text: "Early",
          },
        ],
        answerKey: "B",
      },
      {
        id: 4,
        prompt: "What does “Gab-i” mean?",
        options: [
          {
            key: "A",
            text: "Not yet",
          },
          {
            key: "B",
            text: "Kitchen",
          },
          {
            key: "C",
            text: "Night",
          },
          {
            key: "D",
            text: "Sometimes",
          },
        ],
        answerKey: "C",
      },
      {
        id: 5,
        prompt: "What does “Libro” mean?",
        options: [
          {
            key: "A",
            text: "Clean",
          },
          {
            key: "B",
            text: "Study",
          },
          {
            key: "C",
            text: "Bag",
          },
          {
            key: "D",
            text: "Book",
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
          "kada",
          "imo",
          "adlaw",
          "ginbubuhat",
          "Ano",
          "an",
        ],
        answer: [
          "Ano",
          "an",
          "imo",
          "ginbubuhat",
          "kada",
          "adlaw",
        ],
        display: "Ano an imo ginbubuhat kada adlaw?",
      },
      {
        id: "2",
        words: [
          "nabuhat",
          "ka",
          "San-o",
        ],
        answer: [
          "San-o",
          "ka",
          "nabuhat",
        ],
        display: "San-o ka nabuhat?",
      },
      {
        id: "3",
        words: [
          "hin",
          "Nabuhat",
          "ako",
          "sayo",
        ],
        answer: [
          "Nabuhat",
          "ako",
          "hin",
          "sayo",
        ],
        display: "Nabuhat ako hin sayo.",
      },
      {
        id: "4",
        words: [
          "pamahaw",
          "Nangungumaon",
          "ako",
          "hin",
        ],
        answer: [
          "Nangungumaon",
          "ako",
          "hin",
          "pamahaw",
        ],
        display: "Nangungumaon ako hin pamahaw.",
      },
      {
        id: "5",
        words: [
          "eskwelahan",
          "ako",
          "Makanhi",
          "ha",
        ],
        answer: [
          "Makanhi",
          "ako",
          "ha",
          "eskwelahan",
        ],
        display: "Makanhi ako ha eskwelahan.",
      },
    ],
  },
  speaking: {
    title: "Speaking Practice",
    instructions: "Read the following sentences aloud.",
    note: "Learners should listen to the model pronunciation before recording their own voice.",
    practiceLessonId: "waray_19",
    phrases: [
      {
        id: "1",
        text: "Ano an imo ginbubuhat kada adlaw?",
        respelling: "a-no an i-mo gin-boo-boo-haht ka-da ad-law",
        meaning: "What do you do every day?",
      },
      {
        id: "2",
        text: "Nagbabasa ako hin libro.",
        respelling: "nag-ba-ba-sa a-ko hin lib-ro",
        meaning: "I read a book.",
      },
      {
        id: "3",
        text: "Napahuway ako ha kulop.",
        respelling: "na-pa-hu-way a-ko ha ku-lop",
        meaning: "I rest in the afternoon.",
      },
      {
        id: "4",
        text: "Nag-aadal ako.",
        respelling: "nahg-ah-AH-dahl AH-koh",
        meaning: "I am studying.",
      },
      {
        id: "5",
        text: "Nag-aadal ako ha aga.",
        respelling: "nahg-ah-ah-dahl a-ko ha a-ga",
        meaning: "I study in the morning.",
      },
      {
        id: "6",
        text: "Ha gab-i",
        respelling: "ha gab-i",
        meaning: "In the evening",
      },
      {
        id: "7",
        text: "Diri gud ako nag-aabyan.",
        respelling: "di-ri gud a-ko nag-a-ab-yan",
        meaning: "I never skip.",
      },
    ],
  },
  exampleSituation: {
    description: "Imagine this situation from the lesson: Asking About a Friend's Routine.",
    lead: "You can begin by saying:",
    line: "Kumusta an imo adlaw?",
    translation: "How is your day?",
  },
  unit: "Practical Conversations",
  vocabularyIntro: "Learn the following words and expressions before proceeding to the activities.",
  pronunciationTip: "Read each syllable clearly. Avoid rushing through longer expressions.",
  selfIntroIntro: "Use these patterns and phrases from the lesson.",
  vocabulary: [
    {
      term: "Mata",
      meaning: "Wake up",
      pronunciation: "ma-ta",
      usage: "A common daily activity.",
    },
    {
      term: "Bumuhát",
      meaning: "Get up",
      pronunciation: "bu-mu-hat",
      usage: "A common daily activity.",
    },
    {
      term: "Katurog",
      meaning: "Sleep",
      pronunciation: "ka-tu-rog",
      usage: "A common daily activity.",
    },
    {
      term: "Kumaon",
      meaning: "Eat",
      pronunciation: "ku-ma-on",
      usage: "A common daily activity.",
      example: [
        {
          speaker: "A",
          text: "Ano an imo ginbubuhat katapos han klase?",
          translation: "What do you do after class?",
        },
        {
          speaker: "B",
          text: "Umuli ako ngan kumaon.",
          translation: "I go home and eat.",
        },
      ],
    },
    {
      term: "Uminom",
      meaning: "Drink",
      pronunciation: "u-mi-nom",
      usage: "A common daily activity.",
    },
    {
      term: "Magluto",
      meaning: "Cook",
      pronunciation: "mag-lu-to",
      usage: "A common daily activity.",
    },
    {
      term: "Mag-adal",
      meaning: "Study",
      pronunciation: "mag-a-dal",
      usage: "A common daily activity.",
    },
    {
      term: "Magbasa",
      meaning: "Read",
      pronunciation: "mag-ba-sa",
      usage: "A common daily activity.",
    },
    {
      term: "Magsurat",
      meaning: "Write",
      pronunciation: "mag-su-rat",
      usage: "A common daily activity.",
    },
    {
      term: "Magtrabaho",
      meaning: "Work",
      pronunciation: "mag-tra-ba-ho",
      usage: "A common daily activity.",
    },
    {
      term: "Maglimpyo",
      meaning: "Clean",
      pronunciation: "mag-lim-pyo",
      usage: "A common daily activity.",
    },
    {
      term: "Maglakat",
      meaning: "Walk",
      pronunciation: "mag-la-kat",
      usage: "A common daily activity.",
    },
    {
      term: "Mag-uyag",
      meaning: "Play",
      pronunciation: "mag-u-yag",
      usage: "A common daily activity.",
    },
    {
      term: "Pahuway",
      meaning: "Rest",
      pronunciation: "pa-hu-way",
      usage: "A common daily activity.",
    },
    {
      term: "Maligo",
      meaning: "Take a bath",
      pronunciation: "ma-li-go",
      usage: "A common daily activity.",
    },
    {
      term: "Maglaba",
      meaning: "Wash clothes",
      pronunciation: "mag-la-ba",
      usage: "A common daily activity.",
    },
    {
      term: "Manghugas hin pinggan",
      meaning: "Wash dishes",
      pronunciation: "mang-hu-gas hin ping-gan",
      usage: "A common daily activity.",
    },
    {
      term: "Umuli",
      meaning: "Go home",
      pronunciation: "u-mu-li",
      usage: "A common daily activity.",
      example: [
        {
          speaker: "A",
          text: "Umuli ako ngan kumaon.",
          translation: "I go home and eat.",
        },
        {
          speaker: "B",
          text: "Nag-aadal ka pa ba ha gab-i?",
          translation: "Do you still study at night?",
        },
      ],
    },
    {
      term: "Mag-ehersisyo",
      meaning: "Exercise",
      pronunciation: "mag-e-her-sis-yo",
      usage: "A common daily activity.",
    },
    {
      term: "Mag-ampo",
      meaning: "Pray",
      pronunciation: "mag-am-po",
      usage: "A common daily activity.",
    },
    {
      term: "Aga",
      meaning: "Morning",
      pronunciation: "a-ga",
      usage: "A time expression.",
      example: [
        {
          speaker: "A",
          text: "Maupay man. Ikaw?",
          translation: "It is good. How about you?",
        },
        {
          speaker: "B",
          text: "Maupay man. Ano an imo ginbubuhat kada aga?",
          translation: "Good as well. What do you do every morning?",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/aga.aac"),
    },
    {
      term: "Kulop",
      meaning: "Afternoon",
      pronunciation: "ku-lop",
      usage: "A time expression.",
      example: [
        {
          speaker: "",
          text: "Napahuway ako ha kulop.",
          translation: "I rest in the afternoon.",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/kulop.aac"),
    },
    {
      term: "Gab-i",
      meaning: "Evening",
      pronunciation: "gab-i",
      usage: "A time expression.",
      example: [
        {
          speaker: "A",
          text: "Nag-aadal ka pa ba ha gab-i?",
          translation: "Do you still study at night?",
        },
        {
          speaker: "B",
          text: "Oo, usahay nagbabasa ako han akon mga leksyon.",
          translation: "Yes, sometimes I read my lessons.",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/gab-i.aac"),
    },
    {
      term: "Gab-i",
      meaning: "Night",
      pronunciation: "gab-i",
      usage: "A time expression.",
      example: [
        {
          speaker: "A",
          text: "Maupay ito para ha imo lawas.",
          translation: "That is good for your body.",
        },
        {
          speaker: "B",
          text: "Ano an imo ginbubuhat ha gab-i?",
          translation: "What do you do at night?",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/gab-i.aac"),
    },
    {
      term: "Yana",
      meaning: "Today",
      pronunciation: "ya-na",
      usage: "A time expression.",
      example: [
        {
          speaker: "",
          text: "Waray ako panahon yana.",
          translation: "I do not have time today.",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/yana.aac"),
    },
    {
      term: "Buwas",
      meaning: "Tomorrow",
      pronunciation: "bu-was",
      usage: "A time expression.",
      example: [
        {
          speaker: "A",
          text: "Ano man an imo ginbubuhat antes maturog?",
          translation: "What do you do before sleeping?",
        },
        {
          speaker: "B",
          text: "Nag-aandam ako han akon mga gamit para buwas.",
          translation: "I prepare my things for tomorrow.",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/buwas.aac"),
    },
    {
      term: "Kahapon",
      meaning: "Yesterday",
      pronunciation: "ka-ha-pon",
      usage: "A time expression.",
      example: [
        {
          speaker: "",
          text: "Nagluto kami kahapon.",
          translation: "We cooked yesterday.",
        },
      ],
    },
    {
      term: "Sayo",
      meaning: "Early",
      pronunciation: "sa-yo",
      usage: "A time expression.",
      example: [
        {
          speaker: "A",
          text: "Maupay man. Ano an imo ginbubuhat kada aga?",
          translation: "Good as well. What do you do every morning?",
        },
        {
          speaker: "B",
          text: "Nabuhat ako hin sayo ngan nag-aandam para ha eskwelahan.",
          translation: "I wake up early and prepare for school.",
        },
      ],
    },
    {
      term: "Urhi",
      meaning: "Late",
      pronunciation: "ur-hi",
      usage: "A time expression.",
      audioUrl: require("../../assets/audio/Lesson Waray/urhi.aac"),
    },
    {
      term: "Kada adlaw",
      meaning: "Every day",
      pronunciation: "ka-da ad-law",
      usage: "A time expression.",
      example: [
        {
          speaker: "",
          text: "Ano an imo ginbubuhat kada adlaw?",
          translation: "What do you do every day?",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/kada adlaw.aac"),
    },
    {
      term: "Kada aga",
      meaning: "Every morning",
      pronunciation: "ka-da a-ga",
      usage: "A time expression.",
      example: [
        {
          speaker: "A",
          text: "Maupay man. Ikaw?",
          translation: "It is good. How about you?",
        },
        {
          speaker: "B",
          text: "Maupay man. Ano an imo ginbubuhat kada aga?",
          translation: "Good as well. What do you do every morning?",
        },
      ],
    },
    {
      term: "Kada gab-i",
      meaning: "Every night",
      pronunciation: "ka-da gab-i",
      usage: "A time expression.",
    },
    {
      term: "Antes",
      meaning: "Before",
      pronunciation: "an-tes",
      usage: "A time expression.",
      example: [
        {
          speaker: "A",
          text: "Oo, usahay nagbabasa ako han akon mga leksyon.",
          translation: "Yes, sometimes I read my lessons.",
        },
        {
          speaker: "B",
          text: "Ano man an imo ginbubuhat antes maturog?",
          translation: "What do you do before sleeping?",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/antes.aac"),
    },
    {
      term: "Katapos",
      meaning: "After",
      pronunciation: "ka-ta-pos",
      usage: "A time expression.",
      example: [
        {
          speaker: "A",
          text: "Nag-aandam ako para ha eskwelahan.",
          translation: "I prepare for school.",
        },
        {
          speaker: "B",
          text: "Ano an imo ginbubuhat katapos han klase?",
          translation: "What do you do after class?",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/katapos.aac"),
    },
    {
      term: "Ha urhi",
      meaning: "Later",
      pronunciation: "ha ur-hi",
      usage: "A time expression.",
    },
    {
      term: "Yana",
      meaning: "Now",
      pronunciation: "ya-na",
      usage: "A time expression.",
      example: [
        {
          speaker: "",
          text: "Waray ako panahon yana.",
          translation: "I do not have time today.",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/yana.aac"),
    },
    {
      term: "Pirme",
      meaning: "Always",
      pronunciation: "pir-me",
      usage: "From this lesson's word list: frequency and routine words.",
      example: [
        {
          speaker: "A",
          text: "Nagdudula ka ba hin mga uyag?",
          translation: "Do you play games?",
        },
        {
          speaker: "B",
          text: "Oo, pero diri pirme.",
          translation: "Yes, but not always.",
        },
      ],
    },
    {
      term: "Kasagaran",
      meaning: "Usually",
      pronunciation: "ka-sa-ga-ran",
      usage: "From this lesson's word list: frequency and routine words.",
      example: [
        {
          speaker: "",
          text: "Kasagaran nag-aadal hiya ha gab-i.",
          translation: "He/She usually studies at night.",
        },
      ],
    },
    {
      term: "Agsob",
      meaning: "Often",
      pronunciation: "ag-sob",
      usage: "From this lesson's word list: frequency and routine words.",
    },
    {
      term: "Usahay",
      meaning: "Sometimes",
      pronunciation: "u-sa-hay",
      usage: "From this lesson's word list: frequency and routine words.",
      example: [
        {
          speaker: "A",
          text: "Ano an imo ginbubuhat kon waray ka klase?",
          translation: "What do you do when you have no classes?",
        },
        {
          speaker: "B",
          text: "Usahay nagbabasa ako hin libro.",
          translation: "Sometimes I read books.",
        },
      ],
    },
    {
      term: "Talagsa",
      meaning: "Rarely",
      pronunciation: "ta-lag-sa",
      usage: "From this lesson's word list: frequency and routine words.",
      example: [
        {
          speaker: "",
          text: "Talagsa la ako nagkikita hin salida.",
          translation: "I rarely watch movies.",
        },
      ],
    },
    {
      term: "Diri gud",
      meaning: "Never",
      pronunciation: "di-ri gud",
      usage: "From this lesson's word list: frequency and routine words.",
      example: [
        {
          speaker: "",
          text: "Diri gud ako nag-aabyan.",
          translation: "I never skip.",
        },
      ],
    },
    {
      term: "Utro",
      meaning: "Again",
      pronunciation: "ut-ro",
      usage: "From this lesson's word list: frequency and routine words.",
    },
    {
      term: "Na",
      meaning: "Already",
      pronunciation: "na",
      usage: "From this lesson's word list: frequency and routine words.",
    },
    {
      term: "Waray pa",
      meaning: "Not yet",
      pronunciation: "wa-ray pa",
      usage: "From this lesson's word list: frequency and routine words.",
    },
    {
      term: "Kada",
      meaning: "Every",
      pronunciation: "ka-da",
      usage: "From this lesson's word list: frequency and routine words.",
      example: [
        {
          speaker: "A",
          text: "Maupay man. Ikaw?",
          translation: "It is good. How about you?",
        },
        {
          speaker: "B",
          text: "Maupay man. Ano an imo ginbubuhat kada aga?",
          translation: "Good as well. What do you do every morning?",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/kada.aac"),
    },
    {
      term: "Panalagsa",
      meaning: "Sometimes / Occasionally",
      pronunciation: "pa-na-lag-sa",
      usage: "From this lesson's word list: frequency and routine words.",
    },
    {
      term: "Balay",
      meaning: "House / Home",
      pronunciation: "ba-lay",
      usage: "From this lesson's word list: everyday places and objects.",
      example: [
        {
          speaker: "A",
          text: "Nabuhat ako hin sayo ngan nag-aandam para ha eskwelahan.",
          translation: "I wake up early and prepare for school.",
        },
        {
          speaker: "B",
          text: "Nag-aadál ka ba ha balay?",
          translation: "Do you study at home?",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/balay.aac"),
    },
    {
      term: "Eskwelahan",
      meaning: "School",
      pronunciation: "es-kwe-la-han",
      usage: "From this lesson's word list: everyday places and objects.",
      example: [
        {
          speaker: "A",
          text: "Ano an imo ginbubuhat ha aga?",
          translation: "What do you do in the morning?",
        },
        {
          speaker: "B",
          text: "Nag-aandam ako para ha eskwelahan.",
          translation: "I prepare for school.",
        },
      ],
    },
    {
      term: "Trabaho",
      meaning: "Workplace",
      pronunciation: "tra-ba-ho",
      usage: "From this lesson's word list: everyday places and objects.",
      example: [
        {
          speaker: "",
          text: "Makanhi ako ha trabaho.",
          translation: "I go to work.",
        },
      ],
    },
    {
      term: "Sulod-klase",
      meaning: "Classroom",
      pronunciation: "su-lod kla-se",
      usage: "From this lesson's word list: everyday places and objects.",
    },
    {
      term: "Kusina",
      meaning: "Kitchen",
      pronunciation: "ku-si-na",
      usage: "From this lesson's word list: everyday places and objects.",
    },
    {
      term: "Kwarto",
      meaning: "Bedroom",
      pronunciation: "kwar-to",
      usage: "From this lesson's word list: everyday places and objects.",
    },
    {
      term: "Banyo",
      meaning: "Bathroom",
      pronunciation: "ban-yo",
      usage: "From this lesson's word list: everyday places and objects.",
    },
    {
      term: "Libro",
      meaning: "Book",
      pronunciation: "lib-ro",
      usage: "From this lesson's word list: everyday places and objects.",
      example: [
        {
          speaker: "A",
          text: "Nag-aadál ka ba ha balay?",
          translation: "Do you study at home?",
        },
        {
          speaker: "B",
          text: "Oo. Nagbabasa ako hin mga libro.",
          translation: "Yes. I read books.",
        },
      ],
    },
    {
      term: "Kwaderno",
      meaning: "Notebook",
      pronunciation: "kwa-der-no",
      usage: "From this lesson's word list: everyday places and objects.",
      example: [
        {
          speaker: "",
          text: "Nagsusurat ako ha akon kwaderno.",
          translation: "I write in my notebook.",
        },
      ],
    },
    {
      term: "Pagkaon",
      meaning: "Food",
      pronunciation: "pag-ka-on",
      usage: "From this lesson's word list: everyday places and objects.",
      example: [
        {
          speaker: "",
          text: "Nagluluto ako hin pagkaon.",
          translation: "I cook food.",
        },
      ],
    },
    {
      term: "Tubig",
      meaning: "Water",
      pronunciation: "tu-big",
      usage: "From this lesson's word list: everyday places and objects.",
    },
    {
      term: "Bado / Baro",
      meaning: "Clothes",
      pronunciation: "ba-do / ba-ro",
      usage: "From this lesson's word list: everyday places and objects.",
    },
    {
      term: "Hiligdaan",
      meaning: "Bed",
      pronunciation: "hi-lig-da-an",
      usage: "From this lesson's word list: everyday places and objects.",
    },
    {
      term: "Selpon",
      meaning: "Phone",
      pronunciation: "sel-pon",
      usage: "From this lesson's word list: everyday places and objects.",
    },
    {
      term: "Bag",
      meaning: "Bag",
      pronunciation: "bag",
      usage: "From this lesson's word list: everyday places and objects.",
    },
  ],
  greetings: [
    {
      term: "Aga",
      meaning: "Morning",
      pronunciation: "a-ga",
      usage: "A time expression.",
      example: [
        {
          speaker: "A",
          text: "Maupay man. Ikaw?",
          translation: "It is good. How about you?",
        },
        {
          speaker: "B",
          text: "Maupay man. Ano an imo ginbubuhat kada aga?",
          translation: "Good as well. What do you do every morning?",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/aga.aac"),
    },
    {
      term: "Kulop",
      meaning: "Afternoon",
      pronunciation: "ku-lop",
      usage: "A time expression.",
      example: [
        {
          speaker: "",
          text: "Napahuway ako ha kulop.",
          translation: "I rest in the afternoon.",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/kulop.aac"),
    },
    {
      term: "Gab-i",
      meaning: "Evening",
      pronunciation: "gab-i",
      usage: "A time expression.",
      example: [
        {
          speaker: "A",
          text: "Nag-aadal ka pa ba ha gab-i?",
          translation: "Do you still study at night?",
        },
        {
          speaker: "B",
          text: "Oo, usahay nagbabasa ako han akon mga leksyon.",
          translation: "Yes, sometimes I read my lessons.",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/gab-i.aac"),
    },
    {
      term: "Gab-i",
      meaning: "Night",
      pronunciation: "gab-i",
      usage: "A time expression.",
      example: [
        {
          speaker: "A",
          text: "Maupay ito para ha imo lawas.",
          translation: "That is good for your body.",
        },
        {
          speaker: "B",
          text: "Ano an imo ginbubuhat ha gab-i?",
          translation: "What do you do at night?",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/gab-i.aac"),
    },
    {
      term: "Yana",
      meaning: "Today",
      pronunciation: "ya-na",
      usage: "A time expression.",
      example: [
        {
          speaker: "",
          text: "Waray ako panahon yana.",
          translation: "I do not have time today.",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/yana.aac"),
    },
    {
      term: "Buwas",
      meaning: "Tomorrow",
      pronunciation: "bu-was",
      usage: "A time expression.",
      example: [
        {
          speaker: "A",
          text: "Ano man an imo ginbubuhat antes maturog?",
          translation: "What do you do before sleeping?",
        },
        {
          speaker: "B",
          text: "Nag-aandam ako han akon mga gamit para buwas.",
          translation: "I prepare my things for tomorrow.",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/buwas.aac"),
    },
    {
      term: "Kahapon",
      meaning: "Yesterday",
      pronunciation: "ka-ha-pon",
      usage: "A time expression.",
      example: [
        {
          speaker: "",
          text: "Nagluto kami kahapon.",
          translation: "We cooked yesterday.",
        },
      ],
    },
    {
      term: "Sayo",
      meaning: "Early",
      pronunciation: "sa-yo",
      usage: "A time expression.",
      example: [
        {
          speaker: "A",
          text: "Maupay man. Ano an imo ginbubuhat kada aga?",
          translation: "Good as well. What do you do every morning?",
        },
        {
          speaker: "B",
          text: "Nabuhat ako hin sayo ngan nag-aandam para ha eskwelahan.",
          translation: "I wake up early and prepare for school.",
        },
      ],
    },
    {
      term: "Urhi",
      meaning: "Late",
      pronunciation: "ur-hi",
      usage: "A time expression.",
      audioUrl: require("../../assets/audio/Lesson Waray/urhi.aac"),
    },
    {
      term: "Kada adlaw",
      meaning: "Every day",
      pronunciation: "ka-da ad-law",
      usage: "A time expression.",
      example: [
        {
          speaker: "",
          text: "Ano an imo ginbubuhat kada adlaw?",
          translation: "What do you do every day?",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/kada adlaw.aac"),
    },
    {
      term: "Kada aga",
      meaning: "Every morning",
      pronunciation: "ka-da a-ga",
      usage: "A time expression.",
      example: [
        {
          speaker: "A",
          text: "Maupay man. Ikaw?",
          translation: "It is good. How about you?",
        },
        {
          speaker: "B",
          text: "Maupay man. Ano an imo ginbubuhat kada aga?",
          translation: "Good as well. What do you do every morning?",
        },
      ],
    },
    {
      term: "Kada gab-i",
      meaning: "Every night",
      pronunciation: "ka-da gab-i",
      usage: "A time expression.",
    },
    {
      term: "Antes",
      meaning: "Before",
      pronunciation: "an-tes",
      usage: "A time expression.",
      example: [
        {
          speaker: "A",
          text: "Oo, usahay nagbabasa ako han akon mga leksyon.",
          translation: "Yes, sometimes I read my lessons.",
        },
        {
          speaker: "B",
          text: "Ano man an imo ginbubuhat antes maturog?",
          translation: "What do you do before sleeping?",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/antes.aac"),
    },
    {
      term: "Katapos",
      meaning: "After",
      pronunciation: "ka-ta-pos",
      usage: "A time expression.",
      example: [
        {
          speaker: "A",
          text: "Nag-aandam ako para ha eskwelahan.",
          translation: "I prepare for school.",
        },
        {
          speaker: "B",
          text: "Ano an imo ginbubuhat katapos han klase?",
          translation: "What do you do after class?",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/katapos.aac"),
    },
    {
      term: "Ha urhi",
      meaning: "Later",
      pronunciation: "ha ur-hi",
      usage: "A time expression.",
    },
    {
      term: "Yana",
      meaning: "Now",
      pronunciation: "ya-na",
      usage: "A time expression.",
      example: [
        {
          speaker: "",
          text: "Waray ako panahon yana.",
          translation: "I do not have time today.",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/yana.aac"),
    },
  ],
  patterns: [
    {
      label: "Pattern 1: Asking About a Routine",
      pattern: "Ano an imo ginbubuhat ha + Time?",
      examples: [
        "Ano an imo ginbubuhat ha aga?",
        "Ano an imo ginbubuhat ha gab-i?",
      ],
    },
    {
      label: "Pattern 2: Saying Where You Go",
      pattern: "Makanhi ako ha + Place.",
      examples: [
        "Makanhi ako ha eskwelahan.",
        "Makanhi ako ha trabaho.",
      ],
    },
    {
      label: "Pattern 3: Saying How Often",
      pattern: "Kada + Time",
      examples: [
        "Kada adlaw",
        "Kada aga",
        "Kada gab-i",
      ],
    },
  ],
  sentences: [
    {
      text: "Ano an imo ginbubuhat kada adlaw?",
      meaning: "What do you do every day?",
    },
    {
      text: "San-o ka nabuhat?",
      meaning: "What time do you wake up? / When do you wake up?",
    },
    {
      text: "Nabuhat ako hin sayo.",
      meaning: "I wake up early.",
    },
    {
      text: "Nangungumaon ako hin pamahaw.",
      meaning: "I eat breakfast.",
    },
    {
      text: "Makanhi ako ha eskwelahan.",
      meaning: "I go to school.",
    },
    {
      text: "Nag-aadal ako kada adlaw.",
      meaning: "I study every day.",
    },
    {
      text: "Nagbabasa ako hin libro.",
      meaning: "I read a book.",
    },
    {
      text: "Nagsusurat ako ha akon kwaderno.",
      meaning: "I write in my notebook.",
    },
    {
      text: "Naglilimpyo ako han balay.",
      meaning: "I clean the house.",
    },
    {
      text: "Nagluluto ako hin pagkaon.",
      meaning: "I cook food.",
    },
    {
      text: "Makanhi ako ha trabaho.",
      meaning: "I go to work.",
    },
    {
      text: "Nag-ehersisyo ako ha aga.",
      meaning: "I exercise in the morning.",
    },
    {
      text: "Napahuway ako ha kulop.",
      meaning: "I rest in the afternoon.",
    },
    {
      text: "Natuturog ako ha gab-i.",
      meaning: "I sleep at night.",
    },
    {
      text: "Usahay nagkikita ako hin telebisyon.",
      meaning: "I sometimes watch television.",
    },
    {
      text: "Pirme ako nabulig ha akon pamilya.",
      meaning: "I always help my family.",
    },
    {
      text: "Waray ako panahon yana.",
      meaning: "I do not have time today.",
    },
    {
      text: "Sagipo ako yana.",
      meaning: "I am busy today.",
    },
    {
      text: "Nag-aadal ako.",
      meaning: "I am studying.",
    },
    {
      text: "Nagbabasa ako.",
      meaning: "I am reading.",
    },
    {
      text: "Nagsusurat ako.",
      meaning: "I am writing.",
    },
    {
      text: "Nagluluto hi Nanay.",
      meaning: "Mother is cooking.",
    },
    {
      text: "Nagtatrabaho hi Tatay.",
      meaning: "Father is working.",
    },
    {
      text: "Naglilimpyo hiya.",
      meaning: "He/She is cleaning.",
    },
    {
      text: "Nag-aadal ako ha aga.",
      meaning: "I study in the morning.",
    },
    {
      text: "Nagbabasa ako ha gab-i.",
      meaning: "I read in the evening.",
    },
    {
      text: "Magtatrabaho ako buwas.",
      meaning: "I will work tomorrow.",
    },
    {
      text: "Nagluto kami kahapon.",
      meaning: "We cooked yesterday.",
    },
    {
      text: "Ha aga",
      meaning: "In the morning",
    },
    {
      text: "Ha kulop",
      meaning: "In the afternoon",
    },
    {
      text: "Ha gab-i",
      meaning: "In the evening",
    },
    {
      text: "Yana nga adlaw",
      meaning: "Today",
    },
    {
      text: "Pirme ako nagbabasa.",
      meaning: "I always read.",
    },
    {
      text: "Kasagaran nag-aadal hiya ha gab-i.",
      meaning: "He/She usually studies at night.",
    },
    {
      text: "Usahay nagdudula ako.",
      meaning: "I sometimes play.",
    },
    {
      text: "Talagsa la ako nagkikita hin salida.",
      meaning: "I rarely watch movies.",
    },
    {
      text: "Diri gud ako nag-aabyan.",
      meaning: "I never skip.",
    },
    {
      text: "Ano an imo ginbubuhat ha aga?",
      meaning: "What do you do in the morning?",
    },
    {
      text: "Nag-aadal ka ba kada adlaw?",
      meaning: "Do you study every day?",
    },
    {
      text: "Ano an imo ginbubuhat ha gab-i?",
      meaning: "What do you do at night?",
    },
    {
      text: "Pira ka oras ka nag-aadal?",
      meaning: "How many hours do you study?",
    },
    {
      text: "Nag-aadal ako ngan nagbabasa hin libro.",
      meaning: "I study and read a book.",
    },
    {
      text: "Nagluluto hi Nanay ngan naghuhugas hi Tatay hin pinggan.",
      meaning: "Mother cooks and Father washes dishes.",
    },
    {
      text: "Nagtatrabaho hiya ngan nabulig ha pamilya.",
      meaning: "He/She works and helps the family.",
    },
  ],
  conversations: [
    {
      title: "Conversation 1: Asking About a Friend's Routine",
      situation: "Two friends talk about their everyday activities.",
      lines: [
        {
          speaker: "Ana",
          text: "Kumusta an imo adlaw?",
          translation: "How is your day?",
        },
        {
          speaker: "Ben",
          text: "Maupay man. Ikaw?",
          translation: "It is good. How about you?",
        },
        {
          speaker: "Ana",
          text: "Maupay man. Ano an imo ginbubuhat kada aga?",
          translation: "Good as well. What do you do every morning?",
        },
        {
          speaker: "Ben",
          text: "Nabuhat ako hin sayo ngan nag-aandam para ha eskwelahan.",
          translation: "I wake up early and prepare for school.",
        },
        {
          speaker: "Ana",
          text: "Nag-aadál ka ba ha balay?",
          translation: "Do you study at home?",
        },
        {
          speaker: "Ben",
          text: "Oo. Nagbabasa ako hin mga libro.",
          translation: "Yes. I read books.",
        },
        {
          speaker: "Ana",
          text: "Maupay ito.",
          translation: "That is good.",
        },
        {
          speaker: "Ben",
          text: "Ikaw, ano an imo ginbubuhat?",
          translation: "What about you? What do you do?",
        },
        {
          speaker: "Ana",
          text: "Nabulig ako ha mga buruhaton ha balay.",
          translation: "I help with household chores.",
        },
      ],
    },
    {
      title: "Conversation 2: Talking About a Daily Schedule",
      situation: "A student explains her daily schedule to a classmate.",
      lines: [
        {
          speaker: "Maria",
          text: "Ano an imo ginbubuhat ha aga?",
          translation: "What do you do in the morning?",
        },
        {
          speaker: "Liza",
          text: "Nag-aandam ako para ha eskwelahan.",
          translation: "I prepare for school.",
        },
        {
          speaker: "Maria",
          text: "Ano an imo ginbubuhat katapos han klase?",
          translation: "What do you do after class?",
        },
        {
          speaker: "Liza",
          text: "Umuli ako ngan kumaon.",
          translation: "I go home and eat.",
        },
        {
          speaker: "Maria",
          text: "Nag-aadal ka pa ba ha gab-i?",
          translation: "Do you still study at night?",
        },
        {
          speaker: "Liza",
          text: "Oo, usahay nagbabasa ako han akon mga leksyon.",
          translation: "Yes, sometimes I read my lessons.",
        },
        {
          speaker: "Maria",
          text: "Ano man an imo ginbubuhat antes maturog?",
          translation: "What do you do before sleeping?",
        },
        {
          speaker: "Liza",
          text: "Nag-aandam ako han akon mga gamit para buwas.",
          translation: "I prepare my things for tomorrow.",
        },
      ],
    },
    {
      title: "Conversation 3: Comparing Daily Activities",
      situation: "Two classmates discuss how they spend their free time.",
      lines: [
        {
          speaker: "Carlo",
          text: "Ano an imo ginbubuhat kon waray ka klase?",
          translation: "What do you do when you have no classes?",
        },
        {
          speaker: "Mark",
          text: "Usahay nagbabasa ako hin libro.",
          translation: "Sometimes I read books.",
        },
        {
          speaker: "Carlo",
          text: "Nagdudula ka ba hin mga uyag?",
          translation: "Do you play games?",
        },
        {
          speaker: "Mark",
          text: "Oo, pero diri pirme.",
          translation: "Yes, but not always.",
        },
        {
          speaker: "Carlo",
          text: "Ako naman, nabulig ha balay ngan nag-eehersisyo.",
          translation: "As for me, I help at home and exercise.",
        },
        {
          speaker: "Mark",
          text: "Maupay ito para ha imo lawas.",
          translation: "That is good for your body.",
        },
        {
          speaker: "Carlo",
          text: "Ano an imo ginbubuhat ha gab-i?",
          translation: "What do you do at night?",
        },
        {
          speaker: "Mark",
          text: "Nag-aadal ako ngan katapos natuturog.",
          translation: "I study and then sleep.",
        },
      ],
    },
  ],
  languageNotes: [
    {
      title: "A. Describing Daily Activities",
      body: [
        "To describe daily activities, learners need to become familiar with common verbs and how they are used in sentences.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Nag-aadal ako.",
            right: "I am studying.",
          },
          {
            left: "Nagbabasa ako.",
            right: "I am reading.",
          },
          {
            left: "Nagsusurat ako.",
            right: "I am writing.",
          },
          {
            left: "Nagluluto hi Nanay.",
            right: "Mother is cooking.",
          },
          {
            left: "Nagtatrabaho hi Tatay.",
            right: "Father is working.",
          },
          {
            left: "Naglilimpyo hiya.",
            right: "He/She is cleaning.",
          },
        ],
      },
    },
    {
      title: "A. Describing Daily Activities",
      body: [
        "Notice that the verb form may change depending on the action and how it is being described. Learners should practice these expressions as complete phrases rather than assuming that every verb follows exactly the same pattern.",
      ],
    },
    {
      title: "B. Talking About Time",
      body: [
        "Time expressions help explain when an activity happens.",
      ],
      examples: [
        {
          text: "Ha aga",
          meaning: "In the morning",
        },
        {
          text: "Ha kulop",
          meaning: "In the afternoon",
        },
        {
          text: "Ha gab-i",
          meaning: "In the evening",
        },
        {
          text: "Yana nga adlaw",
          meaning: "Today",
        },
        {
          text: "Buwas",
          meaning: "Tomorrow",
        },
        {
          text: "Kahapon",
          meaning: "Yesterday",
        },
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Nag-aadal ako ha aga.",
            right: "I study in the morning.",
          },
          {
            left: "Napahuway ako ha kulop.",
            right: "I rest in the afternoon.",
          },
          {
            left: "Nagbabasa ako ha gab-i.",
            right: "I read in the evening.",
          },
          {
            left: "Magtatrabaho ako buwas.",
            right: "I will work tomorrow.",
          },
          {
            left: "Nagluto kami kahapon.",
            right: "We cooked yesterday.",
          },
        ],
      },
    },
    {
      title: "C. Describing How Often You Do Something",
      body: [
        "Frequency expressions explain how regularly an activity happens.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Pirme ako nagbabasa.",
            right: "I always read.",
          },
          {
            left: "Kasagaran nag-aadal hiya ha gab-i.",
            right: "He/She usually studies at night.",
          },
          {
            left: "Usahay nagdudula ako.",
            right: "I sometimes play.",
          },
          {
            left: "Talagsa la ako nagkikita hin salida.",
            right: "I rarely watch movies.",
          },
          {
            left: "Diri gud ako nag-aabyan.",
            right: "I never skip.",
          },
        ],
      },
    },
    {
      title: "C. Describing How Often You Do Something",
      body: [
        "The last example is included only as a tentative construction and should be replaced or corrected by a language evaluator before use.",
      ],
    },
    {
      title: "D. Asking About Daily Routines",
      body: [
        "You can ask another person about their everyday activities using simple questions.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Ano an imo ginbubuhat kada adlaw?",
            right: "What do you do every day?",
          },
          {
            left: "Ano an imo ginbubuhat ha aga?",
            right: "What do you do in the morning?",
          },
          {
            left: "San-o ka nabuhat?",
            right: "When do you wake up?",
          },
          {
            left: "Nag-aadal ka ba kada adlaw?",
            right: "Do you study every day?",
          },
          {
            left: "Ano an imo ginbubuhat ha gab-i?",
            right: "What do you do at night?",
          },
          {
            left: "Pira ka oras ka nag-aadal?",
            right: "How many hours do you study?",
          },
        ],
      },
    },
    {
      title: "E. Connecting Daily Activities",
      body: [
        "A daily routine often consists of several activities performed one after another.",
        "You can use ngan to connect activities or ideas.",
      ],
      examples: [
        {
          text: "Nag-aadal ako ngan nagbabasa hin libro.",
          meaning: "I study and read a book.",
        },
        {
          text: "Nagluluto hi Nanay ngan naghuhugas hi Tatay hin pinggan.",
          meaning: "Mother cooks and Father washes dishes.",
        },
        {
          text: "Nagtatrabaho hiya ngan nabulig ha pamilya.",
          meaning: "He/She works and helps the family.",
        },
      ],
    },
    {
      title: "E. Connecting Daily Activities",
      body: [
        "You can also use time expressions to organize activities in a routine.",
        "Ha aga, nag-aadal ako. Ha kulop, napahuway ako. Ha gab-i, nagbabasa ako hin libro.",
        "In the morning, I study. In the afternoon, I rest. In the evening, I read a book.",
      ],
    },
    {
      title: "USEFUL PHRASES AND SENTENCES",
      body: [
        "The following expressions can help learners talk about their daily routines.",
        "Note: The sentences above are learning examples. Some verb forms and expressions may vary across Western Samar communities and should be checked by a native speaker.",
      ],
    },
  ],
  inferredFields: [
    "usage",
    "example",
    "pattern",
    "choice",
    "arrange",
    "speaking phrase",
    "respelling",
    "target pitch and mood",
    "example situation",
    "unit",
    "pronunciation tip",
    "badge description",
    "completion requirement",
  ],
};
