import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 14 — imported from "Lesson Plan.pdf", pages 844–853.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
// Fields not given by the plan are INFERRED from this lesson's own content and
// listed in docs/waray-inferred-keys.md: situation, usage, example, pronunciation, pattern, arrange, wrong options, pass mark, speaking phrase, respelling, target pitch and mood, example situation, pronunciation tip, badge description, completion requirement.
// The practice answers are INFERRED drafts, not from the PDF. See
// docs/waray-draft-answer-keys.md for each answer and how it was found.

export const warayLesson14: StructuredLesson = {
  lessonId: "waray_14",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 14,
  title: "Pronouns and Common Verbs",
  level: "Intermediate",
  unit: "Grammar and Sentence Construction",
  estimatedDuration: "35–45 minutes",
  prerequisite: "Lessons 1–13",
  intro: [
    "Pronouns are words used in place of people's names or nouns. They help speakers avoid repeating names and make conversations more natural.",
    "Verbs express actions, activities, or states. Examples include eating, reading, studying, walking, and working.",
    "In Waray, pronouns and verbs are important for constructing sentences and communicating everyday activities.",
    "For example:",
    "• Ako an nagbabasa. – I am the one reading.",
    "• Nag-aadál ako. – I am studying.",
    "• Nagluluto hiya. – He/She is cooking.",
    "The placement of pronouns and the form of verbs can vary depending on the sentence structure and the intended meaning. This lesson introduces useful examples rather than treating one sentence pattern as universal.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify common personal pronouns in Waray.",
    "Recognize commonly used verbs in everyday communication.",
    "Understand how pronouns and verbs work together in simple Waray sentences.",
    "Construct basic sentences using appropriate pronouns and verbs.",
    "Understand and respond to short conversations involving everyday activities.",
  ],
  extraActivities: [
    {
      title: "Translate into Waray",
      kind: "translate",
      instructions: "Translate the following sentences into Waray using the expressions introduced in this lesson.",
      items: [
        "I am studying.",
        "She is cooking.",
        "They are reading.",
        "We are eating together.",
        "I want to read.",
      ],
    },
    {
      title: "Sentence Creation",
      kind: "other",
      instructions: "Create five original Waray sentences. Each sentence must contain at least one pronoun and one action word.\nExample:\nNagbabasa ako hin libro. – I am reading a book.",
      items: [],
    },
  ],
  matchActivity: {
    title: "Match the Verbs",
    instructions: "Match each English verb with its corresponding Waray word.",
    pairs: [
      {
        id: "1",
        term: "Read",
        answer: "Magbasa",
      },
      {
        id: "2",
        term: "Cook",
        answer: "Magluto",
      },
      {
        id: "3",
        term: "Write",
        answer: "Magsurat",
      },
      {
        id: "4",
        term: "Sleep",
        answer: "Maturog",
      },
      {
        id: "5",
        term: "Study",
        answer: "Mag-adal",
      },
    ],
  },
  choiceActivity: {
    title: "Pronoun Identification",
    instructions: "Choose the correct Waray pronoun based on the English description.",
    questions: [
      {
        id: 1,
        prompt: "I",
        options: [
          {
            key: "A",
            text: "Ako",
          },
          {
            key: "B",
            text: "Hira",
          },
          {
            key: "C",
            text: "Kita",
          },
          {
            key: "D",
            text: "Kamo",
          },
          {
            key: "E",
            text: "Hiya",
          },
          {
            key: "F",
            text: "Kami",
          },
        ],
        answerKey: "A",
      },
      {
        id: 2,
        prompt: "They",
        options: [
          {
            key: "A",
            text: "Ako",
          },
          {
            key: "B",
            text: "Hira",
          },
          {
            key: "C",
            text: "Kita",
          },
          {
            key: "D",
            text: "Kamo",
          },
          {
            key: "E",
            text: "Hiya",
          },
          {
            key: "F",
            text: "Kami",
          },
        ],
        answerKey: "B",
      },
      {
        id: 3,
        prompt: "We, including the listener",
        options: [
          {
            key: "A",
            text: "Ako",
          },
          {
            key: "B",
            text: "Hira",
          },
          {
            key: "C",
            text: "Kita",
          },
          {
            key: "D",
            text: "Kamo",
          },
          {
            key: "E",
            text: "Hiya",
          },
          {
            key: "F",
            text: "Kami",
          },
        ],
        answerKey: "C",
      },
      {
        id: 4,
        prompt: "You, plural",
        options: [
          {
            key: "A",
            text: "Ako",
          },
          {
            key: "B",
            text: "Hira",
          },
          {
            key: "C",
            text: "Kita",
          },
          {
            key: "D",
            text: "Kamo",
          },
          {
            key: "E",
            text: "Hiya",
          },
          {
            key: "F",
            text: "Kami",
          },
        ],
        answerKey: "D",
      },
      {
        id: 5,
        prompt: "He/She",
        options: [
          {
            key: "A",
            text: "Ako",
          },
          {
            key: "B",
            text: "Hira",
          },
          {
            key: "C",
            text: "Kita",
          },
          {
            key: "D",
            text: "Kamo",
          },
          {
            key: "E",
            text: "Hiya",
          },
          {
            key: "F",
            text: "Kami",
          },
        ],
        answerKey: "E",
      },
      {
        id: 6,
        prompt: "We, excluding the listener",
        options: [
          {
            key: "A",
            text: "Ako",
          },
          {
            key: "B",
            text: "Hira",
          },
          {
            key: "C",
            text: "Kita",
          },
          {
            key: "D",
            text: "Kamo",
          },
          {
            key: "E",
            text: "Hiya",
          },
          {
            key: "F",
            text: "Kami",
          },
        ],
        answerKey: "F",
      },
    ],
  },
  fillInBlanks: {
    title: "Complete the Sentences",
    instructions: "Select the appropriate pronoun to complete each sentence.",
    items: [
      {
        id: "1",
        sentence: "Nagbabasa _____ .",
        hint: "I",
        answer: "ako",
        title: "Complete the Sentences",
        instructions: "Select the appropriate pronoun to complete each sentence.",
        wordBank: [
          "ako",
          "hiya",
          "hira",
          "ka",
          "kita",
        ],
      },
      {
        id: "2",
        sentence: "Nagluluto _____ .",
        hint: "He/She",
        answer: "hiya",
        title: "Complete the Sentences",
        instructions: "Select the appropriate pronoun to complete each sentence.",
        wordBank: [
          "ako",
          "hiya",
          "hira",
          "ka",
          "kita",
        ],
      },
      {
        id: "3",
        sentence: "Nagtatrabaho _____ .",
        hint: "They",
        answer: "hira",
        title: "Complete the Sentences",
        instructions: "Select the appropriate pronoun to complete each sentence.",
        wordBank: [
          "ako",
          "hiya",
          "hira",
          "ka",
          "kita",
        ],
      },
      {
        id: "4",
        sentence: "Nag-aadal _____ .",
        hint: "You, singular",
        answer: "ka",
        title: "Complete the Sentences",
        instructions: "Select the appropriate pronoun to complete each sentence.",
        wordBank: [
          "ako",
          "hiya",
          "hira",
          "ka",
          "kita",
        ],
      },
      {
        id: "5",
        sentence: "Nag-uuyag _____ .",
        hint: "We, including the listener",
        answer: "kita",
        title: "Complete the Sentences",
        instructions: "Select the appropriate pronoun to complete each sentence.",
        wordBank: [
          "ako",
          "hiya",
          "hira",
          "ka",
          "kita",
        ],
      },
    ],
  },
  answerKeysInferred: true,
  rewards: {
    items: [
      {
        section: "sentences",
        label: "Pronoun Identification + Sentence Completion + Translation Activity",
        xp: 35,
      },
      {
        section: "match",
        label: "Verb Matching",
        xp: 10,
      },
      {
        section: "conversation",
        label: "Lesson Assessment",
        xp: 15,
      },
    ],
    total: 60,
    badge: {
      name: "Pronoun and Verb Explorer Badge",
      description: "Awarded after successfully completing Lesson 14.",
    },
    completionRequirement: "Obtain at least 70% in the lesson assessment. Learners may repeat the activities and assessment if they do not meet the requirement.",
  },
  expectedOutcomes: [
    "Recognize and use common personal pronouns in Waray.",
    "Identify everyday verbs and their meanings.",
    "Understand simple sentences that combine pronouns and verbs.",
    "Construct basic sentences about their daily activities.",
    "Participate in short conversations using familiar action words.",
  ],
  arrangeWords: {
    title: "Arrange the Words",
    instructions: "Arrange the words to form a correct Waray sentence.",
    items: [
      {
        id: "1",
        words: [
          "ako",
          "Diri",
          "nagbabasa",
        ],
        answer: [
          "Diri",
          "ako",
          "nagbabasa",
        ],
        display: "Diri ako nagbabasa.",
      },
      {
        id: "2",
        words: [
          "hiya",
          "Diri",
          "nagluluto",
        ],
        answer: [
          "Diri",
          "hiya",
          "nagluluto",
        ],
        display: "Diri hiya nagluluto.",
      },
      {
        id: "3",
        words: [
          "Diri",
          "nag-uuyag",
          "kami",
        ],
        answer: [
          "Diri",
          "kami",
          "nag-uuyag",
        ],
        display: "Diri kami nag-uuyag.",
      },
      {
        id: "4",
        words: [
          "Karuyag",
          "kumaon",
          "ko",
        ],
        answer: [
          "Karuyag",
          "ko",
          "kumaon",
        ],
        display: "Karuyag ko kumaon.",
      },
      {
        id: "5",
        words: [
          "magbasa",
          "ko",
          "Karuyag",
        ],
        answer: [
          "Karuyag",
          "ko",
          "magbasa",
        ],
        display: "Karuyag ko magbasa.",
      },
    ],
  },
  assessment: {
    instructions: "Choose the correct answer for each question.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What is the Waray word for “I”?",
        options: [
          {
            key: "A",
            text: "Ikaw",
          },
          {
            key: "B",
            text: "Hira",
          },
          {
            key: "C",
            text: "Ako",
          },
          {
            key: "D",
            text: "Kami",
          },
        ],
        answerKey: "C",
      },
      {
        id: 2,
        prompt: "Which pronoun refers to “we,” including the person being spoken to?",
        options: [
          {
            key: "A",
            text: "Kami",
          },
          {
            key: "B",
            text: "Hira",
          },
          {
            key: "C",
            text: "Ako",
          },
          {
            key: "D",
            text: "Kita",
          },
        ],
        answerKey: "D",
      },
      {
        id: 3,
        prompt: "What is the Waray word for “they”?",
        options: [
          {
            key: "A",
            text: "Hira",
          },
          {
            key: "B",
            text: "Hiya",
          },
          {
            key: "C",
            text: "Kita",
          },
          {
            key: "D",
            text: "Ako",
          },
        ],
        answerKey: "A",
      },
      {
        id: 4,
        prompt: "What does magbasa mean?",
        options: [
          {
            key: "A",
            text: "Write",
          },
          {
            key: "B",
            text: "Read",
          },
          {
            key: "C",
            text: "Cook",
          },
          {
            key: "D",
            text: "Study",
          },
        ],
        answerKey: "B",
      },
      {
        id: 5,
        prompt: "What does magsurat mean?",
        options: [
          {
            key: "A",
            text: "Read",
          },
          {
            key: "B",
            text: "Cook",
          },
          {
            key: "C",
            text: "Write",
          },
          {
            key: "D",
            text: "Study",
          },
        ],
        answerKey: "C",
      },
      {
        id: 6,
        prompt: "Translate: “I am studying.”",
        options: [
          {
            key: "A",
            text: "Nagbabasa ako.",
          },
          {
            key: "B",
            text: "Nagsusurat ako.",
          },
          {
            key: "C",
            text: "Nagluluto hiya.",
          },
          {
            key: "D",
            text: "Nag-aadal ako.",
          },
        ],
        answerKey: "D",
      },
      {
        id: 7,
        prompt: "Translate: “He/She is cooking.”",
        options: [
          {
            key: "A",
            text: "Nagluluto hiya.",
          },
          {
            key: "B",
            text: "Nagbabasa hiya.",
          },
          {
            key: "C",
            text: "Nagsusurat hiya.",
          },
          {
            key: "D",
            text: "Nag-aadal ako.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 8,
        prompt: "What does Diri ako nagbabasa mean?",
        options: [
          {
            key: "A",
            text: "I am reading.",
          },
          {
            key: "B",
            text: "I am not reading.",
          },
          {
            key: "C",
            text: "He/She is not cooking.",
          },
          {
            key: "D",
            text: "We are not playing.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 9,
        prompt: "What does Karuyag ko kumaon mean?",
        options: [
          {
            key: "A",
            text: "I want to read.",
          },
          {
            key: "B",
            text: "He/She wants to study.",
          },
          {
            key: "C",
            text: "I want to eat.",
          },
          {
            key: "D",
            text: "I am not reading.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 10,
        prompt: "Which pronoun refers to “we,” excluding the listener?",
        options: [
          {
            key: "A",
            text: "Kita",
          },
          {
            key: "B",
            text: "Hira",
          },
          {
            key: "C",
            text: "Ikaw",
          },
          {
            key: "D",
            text: "Kami",
          },
        ],
        answerKey: "D",
      },
    ],
  },
  speaking: {
    title: "Speaking Practice",
    instructions: "Read the following sentences aloud.",
    note: "Learners should listen to the model pronunciation before recording their own voice.",
    practiceLessonId: "waray_14",
    phrases: [
      {
        id: "1",
        text: "Nagbabasa ka.",
        respelling: "nag-ba-ba-sa ka",
        meaning: "You are reading.",
      },
      {
        id: "2",
        text: "Nagsusurat hiya.",
        respelling: "nag-su-su-rat hee-yah",
        meaning: "He/She is writing.",
      },
      {
        id: "3",
        text: "Nagtatrabaho kamo.",
        respelling: "nag-tra-tra-ba-ho ka-mo",
        meaning: "You are working.",
      },
      {
        id: "4",
        text: "Nag-uuyag hira.",
        respelling: "nag-u-u-yag hi-ra",
        meaning: "They are playing.",
      },
      {
        id: "5",
        text: "Diri hiya nagluluto.",
        respelling: "di-ri hee-yah nahg-loo-loo-toh",
        meaning: "He/She is not cooking.",
      },
      {
        id: "6",
        text: "Diri kami nag-uuyag.",
        respelling: "di-ri ka-mi nag-u-u-yag",
        meaning: "We are not playing.",
      },
      {
        id: "7",
        text: "Karuyag ko magbasa.",
        respelling: "ka-ru-yag ko mahg-bah-sah",
        meaning: "I want to read.",
      },
    ],
  },
  exampleSituation: {
    description: "Imagine this situation from the lesson: Talking About School Activities.",
    lead: "You can begin by saying:",
    line: "Ano an imo ginbubuhat?",
    translation: "What are you doing?",
  },
  vocabularyIntro: "Learn the following words and expressions before proceeding to the activities.",
  pronunciationTip: "Read each syllable clearly. Avoid rushing through longer expressions.",
  selfIntroIntro: "Use these patterns and phrases from the lesson.",
  vocabulary: [
    {
      term: "Ako",
      meaning: "I",
      pronunciation: "A-ko",
      usage: "From this lesson's word list: basic personal pronouns.",
      example: [
        {
          speaker: "A",
          text: "Ano an imo ginbubuhat?",
          translation: "What are you doing?",
        },
        {
          speaker: "B",
          text: "Nag-aadal ako.",
          translation: "I am studying.",
        },
      ],
    },
    {
      term: "Ikaw / Ka",
      meaning: "You (singular)",
      pronunciation: "I-kaw / Ka",
      usage: "From this lesson's word list: basic personal pronouns.",
      example: [
        {
          speaker: "A",
          text: "Nagluluto ka ba?",
          translation: "Are you cooking?",
        },
        {
          speaker: "B",
          text: "Oo, nagluluto ako.",
          translation: "Yes, I am cooking.",
        },
      ],
    },
    {
      term: "Hiya",
      meaning: "He / She",
      pronunciation: "Hi-ya",
      usage: "From this lesson's word list: basic personal pronouns.",
      example: [
        {
          speaker: "",
          text: "Nagsusurat hiya.",
          translation: "He/She is writing.",
        },
      ],
    },
    {
      term: "Kami",
      meaning: "We (excluding the listener)",
      pronunciation: "Ka-mi",
      usage: "From this lesson's word list: basic personal pronouns.",
      example: [
        {
          speaker: "",
          text: "Nagluluto kami.",
          translation: "We are cooking.",
        },
      ],
    },
    {
      term: "Kita",
      meaning: "We (including the listener)",
      pronunciation: "Ki-ta",
      usage: "From this lesson's word list: basic personal pronouns.",
      example: [
        {
          speaker: "A",
          text: "Oo, karuyag ko.",
          translation: "Yes, I want to.",
        },
        {
          speaker: "B",
          text: "Magbasa kita ha librarya.",
          translation: "Let's read at the library.",
        },
      ],
    },
    {
      term: "Kamo",
      meaning: "You (plural)",
      pronunciation: "Ka-mo",
      usage: "From this lesson's word list: basic personal pronouns.",
      example: [
        {
          speaker: "",
          text: "Nagtatrabaho kamo.",
          translation: "You are working.",
        },
      ],
    },
    {
      term: "Hira",
      meaning: "They",
      pronunciation: "Hi-ra",
      usage: "From this lesson's word list: basic personal pronouns.",
      example: [
        {
          speaker: "",
          text: "Nag-uuyag hira.",
          translation: "They are playing.",
        },
      ],
    },
    {
      term: "Ini",
      meaning: "This",
      pronunciation: "I-ni",
      usage: "From this lesson's word list: demonstrative pronouns.",
      example: [
        {
          speaker: "A",
          text: "Oo, nagluluto ako.",
          translation: "Yes, I am cooking.",
        },
        {
          speaker: "B",
          text: "Para kan kanay ini?",
          translation: "Who is this for?",
        },
      ],
    },
    {
      term: "Ito",
      meaning: "That",
      pronunciation: "I-to",
      usage: "From this lesson's word list: demonstrative pronouns.",
      example: [
        {
          speaker: "A",
          text: "Nagbabasa ako hin libro.",
          translation: "I am reading a book.",
        },
        {
          speaker: "B",
          text: "Maupay ito.",
          translation: "That's good.",
        },
      ],
    },
    {
      term: "Ini nga mga",
      meaning: "These",
      pronunciation: "I-ni nga ma-nga",
      usage: "From this lesson's word list: demonstrative pronouns.",
    },
    {
      term: "Ito nga mga",
      meaning: "Those",
      pronunciation: "I-to nga ma-nga",
      usage: "From this lesson's word list: demonstrative pronouns.",
    },
    {
      term: "Akon",
      meaning: "My / Mine",
      pronunciation: "A-kon",
      usage: "From this lesson's word list: possessive forms.",
    },
    {
      term: "Imo",
      meaning: "Your / Yours",
      pronunciation: "I-mo",
      usage: "From this lesson's word list: possessive forms.",
      example: [
        {
          speaker: "A",
          text: "Nag-aadal ako.",
          translation: "I am studying.",
        },
        {
          speaker: "B",
          text: "Ano an imo gin-aadal?",
          translation: "What are you studying?",
        },
      ],
    },
    {
      term: "Iya",
      meaning: "His / Hers",
      pronunciation: "I-ya",
      usage: "From this lesson's word list: possessive forms.",
    },
    {
      term: "Amon",
      meaning: "Our (excluding listener)",
      pronunciation: "A-mon",
      usage: "From this lesson's word list: possessive forms.",
      example: [
        {
          speaker: "A",
          text: "Para kan kanay ini?",
          translation: "Who is this for?",
        },
        {
          speaker: "B",
          text: "Para ha amon pamilya.",
          translation: "For our family.",
        },
      ],
    },
    {
      term: "Aton",
      meaning: "Our (including listener)",
      pronunciation: "A-ton",
      usage: "From this lesson's word list: possessive forms.",
    },
    {
      term: "Ira",
      meaning: "Their / Theirs",
      pronunciation: "I-ra",
      usage: "From this lesson's word list: possessive forms.",
    },
    {
      term: "Akon ini.",
      meaning: "This is mine.",
      pronunciation: "a-kon i-ni",
      usage: "From this lesson's word list: possessive forms.",
    },
    {
      term: "Imo ito.",
      meaning: "That is yours.",
      pronunciation: "i-mo i-to",
      usage: "From this lesson's word list: possessive forms.",
    },
    {
      term: "Iya an libro.",
      meaning: "The book is his/hers.",
      pronunciation: "ee-yah an lib-ro",
      usage: "From this lesson's word list: possessive forms.",
    },
    {
      term: "Kumaon",
      meaning: "Eat",
      pronunciation: "Ku-ma-on",
      usage: "From this lesson's word list: everyday actions.",
      example: [
        {
          speaker: "",
          text: "Karuyag ko kumaon.",
          translation: "I want to eat.",
        },
      ],
    },
    {
      term: "Uminom",
      meaning: "Drink",
      pronunciation: "U-mi-nom",
      usage: "From this lesson's word list: everyday actions.",
    },
    {
      term: "Magbasa",
      meaning: "Read",
      pronunciation: "Mag-ba-sa",
      usage: "From this lesson's word list: everyday actions.",
      example: [
        {
          speaker: "A",
          text: "Karuyag mo ba magbasa?",
          translation: "Do you want to read?",
        },
        {
          speaker: "B",
          text: "Oo, karuyag ko.",
          translation: "Yes, I want to.",
        },
      ],
    },
    {
      term: "Magsurat",
      meaning: "Write",
      pronunciation: "Mag-su-rat",
      usage: "From this lesson's word list: everyday actions.",
    },
    {
      term: "Mag-adal",
      meaning: "Study",
      pronunciation: "Mag-a-dal",
      usage: "From this lesson's word list: everyday actions.",
      example: [
        {
          speaker: "",
          text: "Karuyag niya mag-adal.",
          translation: "He/She wants to study.",
        },
      ],
    },
    {
      term: "Magluto",
      meaning: "Cook",
      pronunciation: "Mag-lu-to",
      usage: "From this lesson's word list: everyday actions.",
    },
    {
      term: "Magtrabaho",
      meaning: "Work",
      pronunciation: "Mag-tra-ba-ho",
      usage: "From this lesson's word list: everyday actions.",
    },
    {
      term: "Maglimpyo",
      meaning: "Clean",
      pronunciation: "Mag-lim-pyo",
      usage: "From this lesson's word list: everyday actions.",
    },
    {
      term: "Maglakat",
      meaning: "Walk",
      pronunciation: "Mag-la-kat",
      usage: "From this lesson's word list: everyday actions.",
    },
    {
      term: "Mag-uyag",
      meaning: "Play",
      pronunciation: "Mag-u-yag",
      usage: "From this lesson's word list: everyday actions.",
    },
    {
      term: "Maturog",
      meaning: "Sleep",
      pronunciation: "Ma-tu-rog",
      usage: "From this lesson's word list: everyday actions.",
    },
    {
      term: "Pahuway",
      meaning: "Rest",
      pronunciation: "Pa-hu-way",
      usage: "From this lesson's word list: everyday actions.",
    },
    {
      term: "Umuli",
      meaning: "Return home",
      pronunciation: "U-mu-li",
      usage: "From this lesson's word list: everyday actions.",
    },
    {
      term: "Bulig",
      meaning: "Help",
      pronunciation: "Bu-lig",
      usage: "From this lesson's word list: everyday actions.",
    },
    {
      term: "Maaram",
      meaning: "Know",
      pronunciation: "Ma-a-ram",
      usage: "A common descriptive and activity word.",
    },
    {
      term: "Sabot",
      meaning: "Understand",
      pronunciation: "Sa-bot",
      usage: "A common descriptive and activity word.",
    },
    {
      term: "Karuyag",
      meaning: "Want",
      pronunciation: "Ka-ru-yag",
      usage: "A common descriptive and activity word.",
      example: [
        {
          speaker: "A",
          text: "Karuyag mo ba magbasa?",
          translation: "Do you want to read?",
        },
        {
          speaker: "B",
          text: "Oo, karuyag ko.",
          translation: "Yes, I want to.",
        },
      ],
    },
    {
      term: "Hinigugma / Hinigugmaon (context-dependent)",
      meaning: "Like / Love",
      pronunciation: "Hi-ni-gug-ma",
      usage: "A common descriptive and activity word.",
    },
    {
      term: "Kinahanglan",
      meaning: "Need",
      pronunciation: "Ki-nang-ha-lan",
      usage: "A common descriptive and activity word.",
    },
    {
      term: "Magyakan",
      meaning: "Speak / Talk",
      pronunciation: "Mag-ya-kan",
      usage: "A common descriptive and activity word.",
    },
    {
      term: "Pamati",
      meaning: "Listen",
      pronunciation: "Pa-ma-ti",
      usage: "A common descriptive and activity word.",
    },
    {
      term: "Kita",
      meaning: "Watch / Look",
      pronunciation: "Ki-ta",
      usage: "A common descriptive and activity word.",
      example: [
        {
          speaker: "A",
          text: "Magbasa kita ha librarya.",
          translation: "Let's read at the library.",
        },
        {
          speaker: "B",
          text: "Sige, maupod ako.",
          translation: "Okay, I'll come along.",
        },
      ],
    },
    {
      term: "Nag-aadal ako.",
      meaning: "I am studying.",
      pronunciation: "Nag-a-a-dal a-ko",
      usage: "From this lesson's word list: verb forms in everyday sentences.",
      example: [
        {
          speaker: "A",
          text: "Ano an imo ginbubuhat?",
          translation: "What are you doing?",
        },
        {
          speaker: "B",
          text: "Nag-aadal ako.",
          translation: "I am studying.",
        },
      ],
    },
    {
      term: "Nagbabasa ako.",
      meaning: "I am reading.",
      pronunciation: "Nag-ba-ba-sa a-ko",
      usage: "From this lesson's word list: verb forms in everyday sentences.",
      example: [
        {
          speaker: "A",
          text: "Ano an imo gin-aadal?",
          translation: "What are you studying?",
        },
        {
          speaker: "B",
          text: "Nagbabasa ako hin libro.",
          translation: "I am reading a book.",
        },
      ],
    },
    {
      term: "Nagsusurat ako.",
      meaning: "I am writing.",
      pronunciation: "Nag-su-su-rat a-ko",
      usage: "From this lesson's word list: verb forms in everyday sentences.",
    },
    {
      term: "Nagluluto hiya.",
      meaning: "He/She is cooking.",
      pronunciation: "Nag-lu-lu-to hi-ya",
      usage: "From this lesson's word list: verb forms in everyday sentences.",
    },
    {
      term: "Nangaon kita.",
      meaning: "We are eating.",
      pronunciation: "Nang-a-on ki-ta",
      usage: "From this lesson's word list: verb forms in everyday sentences.",
    },
    {
      term: "Nagtatrabaho hira.",
      meaning: "They are working.",
      pronunciation: "Nag-tra-tra-ba-ho hi-ra",
      usage: "From this lesson's word list: verb forms in everyday sentences.",
    },
    {
      term: "Nagbabasa",
      meaning: "reading",
      pronunciation: "nag-ba-ba-sa",
      usage: "From this lesson's word list: observe the sentence.",
      example: [
        {
          speaker: "A",
          text: "Ano an imo gin-aadal?",
          translation: "What are you studying?",
        },
        {
          speaker: "B",
          text: "Nagbabasa ako hin libro.",
          translation: "I am reading a book.",
        },
      ],
    },
    {
      term: "Hin libro",
      meaning: "a book",
      pronunciation: "hin lib-ro",
      usage: "From this lesson's word list: observe the sentence.",
      example: [
        {
          speaker: "A",
          text: "Ano an imo gin-aadal?",
          translation: "What are you studying?",
        },
        {
          speaker: "B",
          text: "Nagbabasa ako hin libro.",
          translation: "I am reading a book.",
        },
      ],
    },
    {
      term: "Nagbabasa hiya.",
      meaning: "He/She is reading.",
      pronunciation: "nag-ba-ba-sa hee-yah",
      usage: "From this lesson's word list: change the subject.",
    },
    {
      term: "Nagbabasa hira.",
      meaning: "They are reading.",
      pronunciation: "nag-ba-ba-sa hi-ra",
      usage: "From this lesson's word list: change the subject.",
    },
  ],
  greetings: [
    {
      term: "Nagbabasa hiya.",
      meaning: "He/She is reading.",
      pronunciation: "nag-ba-ba-sa hee-yah",
      usage: "From this lesson's word list: change the subject.",
    },
    {
      term: "Nagbabasa hira.",
      meaning: "They are reading.",
      pronunciation: "nag-ba-ba-sa hi-ra",
      usage: "From this lesson's word list: change the subject.",
    },
  ],
  patterns: [
    {
      label: "Pattern 1: Sentence Pattern Practice",
      pattern: "Action or verb expression + subject",
      examples: [
        "Nagbabasa + ako",
        "Nagluluto + hiya",
        "Nagtatrabaho + hira",
      ],
    },
    {
      label: "Pattern 2: Negative Sentences",
      pattern: "Diri + Subject + Action.",
      examples: [
        "Diri ako nagbabasa.",
        "Diri hiya nagluluto.",
        "Diri kami nag-uuyag.",
      ],
    },
    {
      label: "Pattern 3: Expressing Wants",
      pattern: "Karuyag ko + Action.",
      examples: [
        "Karuyag ko kumaon.",
        "Karuyag ko magbasa.",
      ],
    },
  ],
  sentences: [
    {
      text: "Nagbabasa ka.",
      meaning: "You are reading.",
    },
    {
      text: "Nagsusurat hiya.",
      meaning: "He/She is writing.",
    },
    {
      text: "Nagluluto kami.",
      meaning: "We are cooking.",
    },
    {
      text: "Nagtatrabaho kamo.",
      meaning: "You are working.",
    },
    {
      text: "Nag-uuyag hira.",
      meaning: "They are playing.",
    },
    {
      text: "Diri ako nagbabasa.",
      meaning: "I am not reading.",
    },
    {
      text: "Diri hiya nagluluto.",
      meaning: "He/She is not cooking.",
    },
    {
      text: "Diri kami nag-uuyag.",
      meaning: "We are not playing.",
    },
    {
      text: "Karuyag ko kumaon.",
      meaning: "I want to eat.",
    },
    {
      text: "Karuyag ko magbasa.",
      meaning: "I want to read.",
    },
    {
      text: "Karuyag niya mag-adal.",
      meaning: "He/She wants to study.",
    },
  ],
  conversations: [
    {
      title: "Conversation A: Talking About School Activities",
      lines: [
        {
          speaker: "Ana",
          text: "Ano an imo ginbubuhat?",
          translation: "What are you doing?",
        },
        {
          speaker: "Ben",
          text: "Nag-aadal ako.",
          translation: "I am studying.",
        },
        {
          speaker: "Ana",
          text: "Ano an imo gin-aadal?",
          translation: "What are you studying?",
        },
        {
          speaker: "Ben",
          text: "Nagbabasa ako hin libro.",
          translation: "I am reading a book.",
        },
        {
          speaker: "Ana",
          text: "Maupay ito.",
          translation: "That's good.",
        },
        {
          speaker: "Ben",
          text: "Salamat.",
          translation: "Thank you.",
        },
      ],
      situation: "Ana and Ben: Talking About School Activities.",
    },
    {
      title: "Conversation B: Talking About Daily Activities",
      lines: [
        {
          speaker: "Maria",
          text: "Nagluluto ka ba?",
          translation: "Are you cooking?",
        },
        {
          speaker: "Rosa",
          text: "Oo, nagluluto ako.",
          translation: "Yes, I am cooking.",
        },
        {
          speaker: "Maria",
          text: "Para kan kanay ini?",
          translation: "Who is this for?",
        },
        {
          speaker: "Rosa",
          text: "Para ha amon pamilya.",
          translation: "For our family.",
        },
        {
          speaker: "Maria",
          text: "Buligan ta ikaw.",
          translation: "Let me help you.",
        },
        {
          speaker: "Rosa",
          text: "Damo nga salamat.",
          translation: "Thank you very much.",
        },
      ],
      situation: "Maria and Rosa: Talking About Daily Activities.",
    },
    {
      title: "Conversation C: Making Plans with Friends",
      lines: [
        {
          speaker: "Carlo",
          text: "Karuyag mo ba magbasa?",
          translation: "Do you want to read?",
        },
        {
          speaker: "Mark",
          text: "Oo, karuyag ko.",
          translation: "Yes, I want to.",
        },
        {
          speaker: "Carlo",
          text: "Magbasa kita ha librarya.",
          translation: "Let's read at the library.",
        },
        {
          speaker: "Mark",
          text: "Sige, maupod ako.",
          translation: "Okay, I'll come along.",
        },
        {
          speaker: "Carlo",
          text: "Kitaay kita buwas.",
          translation: "See you tomorrow.",
        },
        {
          speaker: "Mark",
          text: "Sige, pag-amping.",
          translation: "Okay, take care.",
        },
      ],
      situation: "Carlo and Mark: Making Plans with Friends.",
    },
  ],
  savedLanguageNotes: [
    {
      title: "Constructing Sentences with Pronouns and Verbs",
      body: [
        "Use the following examples to practice combining pronouns and verbs.",
      ],
      table: {
        leftHeading: "English",
        rightHeading: "Waray",
        rows: [
          {
            left: "I am studying.",
            right: "Nag-aadal ako.",
          },
          {
            left: "You are reading.",
            right: "Nagbabasa ka.",
          },
          {
            left: "He/She is writing.",
            right: "Nagsusurat hiya.",
          },
          {
            left: "We are cooking.",
            right: "Nagluluto kami.",
          },
          {
            left: "We are eating together.",
            right: "Nangaon kita.",
          },
          {
            left: "You are working.",
            right: "Nagtatrabaho kamo.",
          },
          {
            left: "They are playing.",
            right: "Nag-uuyag hira.",
          },
        ],
      },
    },
    {
      title: "A. Sentence Pattern Practice",
      body: [
        "A useful introductory pattern is:",
        "Action or verb expression + subject",
        "• Nagbabasa + ako",
        "• Nagluluto + hiya",
        "• Nagtatrabaho + hira",
        "This is a practice pattern, not a rule that applies to every Waray sentence. Other sentence structures may place emphasis on different parts of the sentence.",
      ],
    },
    {
      title: "B. Negative Sentences",
      body: [
        "The word diri is commonly used to express negation.",
      ],
      examples: [
        {
          text: "Diri ako nagbabasa.",
          meaning: "I am not reading.",
        },
        {
          text: "Diri hiya nagluluto.",
          meaning: "He/She is not cooking.",
        },
        {
          text: "Diri kami nag-uuyag.",
          meaning: "We are not playing.",
        },
      ],
    },
    {
      title: "C. Expressing Wants",
      body: [
        "The word karuyag can be used to express wanting or wishing.",
      ],
      examples: [
        {
          text: "Karuyag ko kumaon.",
          meaning: "I want to eat.",
        },
        {
          text: "Karuyag ko magbasa.",
          meaning: "I want to read.",
        },
        {
          text: "Karuyag niya mag-adal.",
          meaning: "He/She wants to study.",
        },
      ],
    },
    {
      title: "A. Basic Personal Pronouns",
      body: [
        "Personal pronouns refer to the speaker, the person being spoken to, or the person being discussed.",
        "Important distinction:",
        "• Kami refers to the speaker and other people, but excludes the listener.",
        "• Kita includes both the speaker and the listener.",
      ],
    },
    {
      title: "B. Demonstrative Pronouns",
      body: [
        "These forms are useful when identifying or referring to people and objects. Their exact use may depend on context.",
      ],
    },
    {
      title: "C. Possessive Forms",
      body: [
        "Examples:",
      ],
    },
    {
      title: "A. Everyday Actions",
      body: [
        "Verbs describe actions or activities. The following are useful verbs for everyday conversations.",
      ],
    },
    {
      title: "B. Common Descriptive and Activity Words",
      body: [
        "Note: Some entries above are root words or dictionary forms rather than ready-to-use verbs in every sentence. For example, bulig means help, while a complete expression may require a different grammatical construction.",
      ],
    },
    {
      title: "Verb Forms in Everyday Sentences",
      body: [
        "Waray verbs may change form depending on the action, time, aspect, and sentence construction. A verb's form should not be selected by simply adding the same prefix to every root word.",
        "The following examples introduce common expressions:",
      ],
    },
    {
      title: "A. Observe the Sentence",
      body: [
        "Consider:",
        "Nagbabasa ako hin libro. I am reading a book.",
        "The sentence tells us who is performing the action and what the person is reading.",
      ],
    },
    {
      title: "B. Change the Subject",
      body: [
        "Compare these examples:",
        "The subject changes while the action remains the same in these examples.",
      ],
    },
  ],
  inferredFields: [
    "situation",
    "usage",
    "example",
    "pronunciation",
    "pattern",
    "arrange",
    "wrong options",
    "pass mark",
    "speaking phrase",
    "respelling",
    "target pitch and mood",
    "example situation",
    "pronunciation tip",
    "badge description",
    "completion requirement",
  ],
};
