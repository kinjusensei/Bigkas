import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 15 — imported from "Lesson Plan.pdf", pages 854–869.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
// Fields not given by the plan are INFERRED from this lesson's own content and
// listed in docs/waray-inferred-keys.md: situation, usage, example, pronunciation, pattern, match, choice, fill-in, wrong options, pass mark, speaking phrase, respelling, target pitch and mood, example situation, pronunciation tip, badge description, completion requirement.
// The practice answers are INFERRED drafts, not from the PDF. See
// docs/waray-draft-answer-keys.md for each answer and how it was found.

export const warayLesson15: StructuredLesson = {
  lessonId: "waray_15",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 15,
  title: "Basic Sentence Structure",
  level: "Intermediate",
  unit: "Grammar and Sentence Construction",
  estimatedDuration: "35–45 minutes",
  prerequisite: "Lessons 1–14",
  intro: [
    "A sentence is a group of words that expresses a complete thought. It usually communicates an action, condition, description, or question.",
    "In Waray, sentences can be arranged in different ways depending on what the speaker wants to emphasize. Some sentences begin with an action or description, while others begin with the person or thing being discussed.",
    "For example:",
    "• Nagbabasa ako hin libro. – I am reading a book.",
    "• Maestra hiya. – He/She is a teacher.",
    "• Diri ako gutom. – I am not hungry.",
    "• Hain an imo libro? – Where is your book?",
    "Understanding sentence structure helps learners communicate more clearly and naturally.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify the basic parts of a Waray sentence.",
    "Recognize common sentence patterns used in everyday communication.",
    "Construct simple affirmative and negative sentences.",
    "Form basic questions using common Waray question words.",
    "Translate simple English sentences into understandable Waray.",
  ],
  extraActivities: [
    {
      title: "Identify the Sentence Parts",
      kind: "choice",
      instructions: "Read each sentence and identify the action or description, subject, and object or additional information when present.",
      items: [
        "Nagbabasa ako hin libro.",
        "Nagluluto hiya ha kusina.",
        "Malipayon an bata.",
        "Nag-aadal kami ha eskwelahan.",
        "Nagkadto hira ha merkado kahapon.",
      ],
    },
    {
      title: "Make the Sentence Negative",
      kind: "rewrite",
      instructions: "Rewrite each affirmative sentence as a negative sentence using diri.",
      items: [
        "Nagbabasa ako.",
        "Nagluluto hiya.",
        "Nag-aadal kami.",
        "Nag-uuyag hira.",
        "Malipayon ako.",
      ],
    },
    {
      title: "Turn Statements into Questions",
      kind: "rewrite",
      instructions: "Rewrite each statement as a yes-or-no question using ba where appropriate.",
      items: [
        "Nag-aadal ka.",
        "Gutom hiya.",
        "Nasasabtan mo ini.",
        "Karuyag mo kumaon.",
        "Nagbabasa hira.",
      ],
    },
    {
      title: "Translate into Waray",
      kind: "translate",
      instructions: "Translate the following sentences using the lesson examples.",
      items: [
        "I am reading a book.",
        "She is not cooking.",
        "Are you studying?",
        "Where is your house?",
        "We will go tomorrow.",
      ],
    },
  ],
  arrangeWords: {
    title: "Arrange the Words",
    instructions: "Arrange the following words into meaningful Waray sentences.",
    items: [
      {
        id: "1",
        words: [
          "ako",
          "Nagbabasa",
          "hin libro",
        ],
        answer: [
          "Nagbabasa",
          "ako",
          "hin libro",
        ],
        display: "Nagbabasa ako hin libro.",
      },
      {
        id: "2",
        words: [
          "hiya",
          "nagluluto",
          "Diri",
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
          "an imo libro",
          "Hain",
        ],
        answer: [
          "Hain",
          "an imo libro",
        ],
        display: "Hain an imo libro?",
      },
      {
        id: "4",
        words: [
          "ha eskwelahan",
          "Nag-aadal",
          "kami",
        ],
        answer: [
          "Nag-aadal",
          "kami",
          "ha eskwelahan",
        ],
        display: "Nag-aadal kami ha eskwelahan.",
      },
      {
        id: "5",
        words: [
          "buwas",
          "Makadto",
          "hira",
        ],
        answer: [
          "Makadto",
          "hira",
          "buwas",
        ],
        display: "Makadto hira buwas.",
      },
    ],
  },
  answerKeysInferred: true,
  rewards: {
    items: [
      {
        section: "sentences",
        label: "Sentence Parts Identification + Negative Sentence Practice + Question Formation",
        xp: 30,
      },
      {
        section: "vocabulary",
        label: "Word Arrangement and Translation",
        xp: 15,
      },
      {
        section: "conversation",
        label: "Lesson Assessment",
        xp: 15,
      },
    ],
    total: 60,
    badge: {
      name: "Sentence Builder Badge",
      description: "Awarded after successfully completing Lesson 15.",
    },
    completionRequirement: "Obtain at least 70% in the lesson assessment. Learners may repeat the activities and assessment if they do not meet the requirement.",
  },
  matchActivity: {
    title: "Match the Words",
    instructions: "Match the Waray expression with its English meaning.",
    pairs: [
      {
        id: "1",
        term: "istorya",
        answer: "a story",
      },
      {
        id: "2",
        term: "surat",
        answer: "a letter",
      },
      {
        id: "3",
        term: "nag-aadal",
        answer: "is studying",
      },
      {
        id: "4",
        term: "Pira",
        answer: "How many / How much",
      },
      {
        id: "5",
        term: "maestra",
        answer: "is a teacher",
      },
    ],
  },
  choiceActivity: {
    title: "Choose the Correct Meaning",
    instructions: "Choose the correct English meaning.",
    questions: [
      {
        id: 1,
        prompt: "What does “O” mean?",
        options: [
          {
            key: "A",
            text: "And",
          },
          {
            key: "B",
            text: "is a teacher",
          },
          {
            key: "C",
            text: "a story",
          },
          {
            key: "D",
            text: "Or",
          },
        ],
        answerKey: "D",
      },
      {
        id: 2,
        prompt: "What does “Paonan-o” mean?",
        options: [
          {
            key: "A",
            text: "How",
          },
          {
            key: "B",
            text: "The student",
          },
          {
            key: "C",
            text: "a story",
          },
          {
            key: "D",
            text: "Who",
          },
        ],
        answerKey: "A",
      },
      {
        id: 3,
        prompt: "What does “Ako” mean?",
        options: [
          {
            key: "A",
            text: "When",
          },
          {
            key: "B",
            text: "I",
          },
          {
            key: "C",
            text: "Why",
          },
          {
            key: "D",
            text: "How many / How much",
          },
        ],
        answerKey: "B",
      },
      {
        id: 4,
        prompt: "What does “Ngan” mean?",
        options: [
          {
            key: "A",
            text: "How many / How much",
          },
          {
            key: "B",
            text: "Who",
          },
          {
            key: "C",
            text: "And",
          },
          {
            key: "D",
            text: "is reading",
          },
        ],
        answerKey: "C",
      },
      {
        id: 5,
        prompt: "What does “maestra” mean?",
        options: [
          {
            key: "A",
            text: "water",
          },
          {
            key: "B",
            text: "food",
          },
          {
            key: "C",
            text: "I",
          },
          {
            key: "D",
            text: "is a teacher",
          },
        ],
        answerKey: "D",
      },
    ],
  },
  fillInBlanks: {
    title: "Fill in the Blanks",
    instructions: "Complete each sentence using the appropriate Waray word.",
    items: [
      {
        id: "1",
        sentence: "Nagbabasa ako ___ nagsusurat.",
        hint: "I am reading and writing.",
        answer: "ngan",
        wordBank: [
          "tubig",
          "Paonan-o",
          "malipayon",
          "ngan",
        ],
      },
      {
        id: "2",
        sentence: "Karuyag ko kumaon, ___ waray pa pagkaon.",
        hint: "I want to eat, but there is no food yet.",
        answer: "pero",
        wordBank: [
          "pagkaon",
          "nagbabasa",
          "nag-aadal",
          "pero",
        ],
      },
      {
        id: "3",
        sentence: "___ may panahon ako, magbabasa ako.",
        hint: "If I have time, I will read.",
        answer: "Kon",
        wordBank: [
          "maestra",
          "Ano",
          "Kon",
          "nagbabasa",
        ],
      },
      {
        id: "4",
        sentence: "Nag-aadal ___ yana.",
        hint: "I am studying now.",
        answer: "ako",
        wordBank: [
          "ako",
          "maestra",
          "Hin-o",
          "tubig",
        ],
      },
      {
        id: "5",
        sentence: "Nagtrabaho ___ kahapon.",
        hint: "He/She worked yesterday.",
        answer: "hiya",
        wordBank: [
          "hiya",
          "Paonan-o",
          "surat",
          "istorya",
        ],
      },
    ],
  },
  assessment: {
    instructions: "Choose the correct answer for each question.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What Waray word is commonly used to make a sentence negative?",
        options: [
          {
            key: "A",
            text: "Ba",
          },
          {
            key: "B",
            text: "Ngan",
          },
          {
            key: "C",
            text: "Kay",
          },
          {
            key: "D",
            text: "Diri",
          },
        ],
        answerKey: "D",
      },
      {
        id: 2,
        prompt: "What particle is commonly used in yes-or-no questions?",
        options: [
          {
            key: "A",
            text: "Ba",
          },
          {
            key: "B",
            text: "Diri",
          },
          {
            key: "C",
            text: "Kay",
          },
          {
            key: "D",
            text: "Ngan",
          },
        ],
        answerKey: "A",
      },
      {
        id: 3,
        prompt: "Translate: “I am reading a book.”",
        options: [
          {
            key: "A",
            text: "Diri ako nagbabasa.",
          },
          {
            key: "B",
            text: "Nagbabasa ako hin libro.",
          },
          {
            key: "C",
            text: "Hain an imo libro?",
          },
          {
            key: "D",
            text: "Malipayon ako.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 4,
        prompt: "Translate: “She is not cooking.”",
        options: [
          {
            key: "A",
            text: "Nagluluto hiya.",
          },
          {
            key: "B",
            text: "Diri ako nagbabasa.",
          },
          {
            key: "C",
            text: "Diri hiya nagluluto.",
          },
          {
            key: "D",
            text: "Gutom hiya.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 5,
        prompt: "What does Ngan mean?",
        options: [
          {
            key: "A",
            text: "Or",
          },
          {
            key: "B",
            text: "Because",
          },
          {
            key: "C",
            text: "But",
          },
          {
            key: "D",
            text: "And",
          },
        ],
        answerKey: "D",
      },
      {
        id: 6,
        prompt: "Translate: “Where is your book?”",
        options: [
          {
            key: "A",
            text: "Hain an imo libro?",
          },
          {
            key: "B",
            text: "Hain an imo balay?",
          },
          {
            key: "C",
            text: "Nagbabasa ako hin libro.",
          },
          {
            key: "D",
            text: "Gutom ka ba?",
          },
        ],
        answerKey: "A",
      },
      {
        id: 7,
        prompt: "Which Waray expression means “because”?",
        options: [
          {
            key: "A",
            text: "Ngan",
          },
          {
            key: "B",
            text: "Kay / Tungod kay",
          },
          {
            key: "C",
            text: "Ba",
          },
          {
            key: "D",
            text: "Diri",
          },
        ],
        answerKey: "B",
      },
      {
        id: 8,
        prompt: "Translate: “We are studying at school.”",
        options: [
          {
            key: "A",
            text: "Nag-aadal hiya ha eskwelahan.",
          },
          {
            key: "B",
            text: "Nagbabasa ako hin libro.",
          },
          {
            key: "C",
            text: "Nag-aadal kami ha eskwelahan.",
          },
          {
            key: "D",
            text: "Makadto kami buwas.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 9,
        prompt: "What does Gutom ka ba? mean?",
        options: [
          {
            key: "A",
            text: "Where is your book?",
          },
          {
            key: "B",
            text: "I am not hungry.",
          },
          {
            key: "C",
            text: "He/She is hungry.",
          },
          {
            key: "D",
            text: "Are you hungry?",
          },
        ],
        answerKey: "D",
      },
      {
        id: 10,
        prompt: "Translate: “They are going tomorrow.”",
        options: [
          {
            key: "A",
            text: "Makadto hira buwas.",
          },
          {
            key: "B",
            text: "Makadto kami buwas.",
          },
          {
            key: "C",
            text: "Sige, magkita kita buwas.",
          },
          {
            key: "D",
            text: "Makadto ako ha imo balay buwas.",
          },
        ],
        answerKey: "A",
      },
    ],
  },
  speaking: {
    title: "Speaking Practice",
    instructions: "Read the following sentences aloud.",
    note: "Learners should listen to the model pronunciation before recording their own voice.",
    practiceLessonId: "waray_15",
    phrases: [
      {
        id: "1",
        text: "Nagbabasa ako ngan nagsusurat.",
        respelling: "nag-ba-ba-sa a-ko ngan nag-su-su-rat",
        meaning: "I am reading and writing.",
      },
      {
        id: "2",
        text: "Makadto kami buwas.",
        respelling: "ma-kad-to ka-mi bu-was",
        meaning: "We will go tomorrow.",
      },
      {
        id: "3",
        text: "Malipayon ako.",
        respelling: "mah-lee-pah-yohn a-ko",
        meaning: "I am happy.",
      },
      {
        id: "4",
        text: "Maestra hiya.",
        respelling: "mah-es-trah hee-yah",
        meaning: "He/She is a teacher.",
      },
      {
        id: "5",
        text: "Nagkadto kami ha merkado kahapon.",
        respelling: "nag-kad-to ka-mi ha mehr-kah-doh ka-ha-pon",
        meaning: "We went to the market yesterday.",
      },
      {
        id: "6",
        text: "Diri hira nag-uuyag.",
        respelling: "di-ri hi-ra nag-u-u-yag",
        meaning: "They are not playing.",
      },
      {
        id: "7",
        text: "Karuyag mo ba kumaon?",
        respelling: "ka-ru-yag mo ba? ku-ma-on",
        meaning: "Do you want to eat?",
      },
    ],
  },
  exampleSituation: {
    description: "Imagine this situation from the lesson: Talking About School.",
    lead: "You can begin by saying:",
    line: "Ano an imo ginbubuhat?",
    translation: "What are you doing?",
  },
  vocabularyIntro: "Learn the following words and expressions before proceeding to the activities.",
  pronunciationTip: "Read each syllable clearly. Avoid rushing through longer expressions.",
  selfIntroIntro: "Use these patterns and phrases from the lesson.",
  vocabulary: [
    {
      term: "Ngan",
      meaning: "And",
      pronunciation: "Ngan",
      usage: "A common connecting word.",
      example: [
        {
          speaker: "",
          text: "Nagbabasa ako ngan nagsusurat.",
          translation: "I am reading and writing.",
        },
      ],
    },
    {
      term: "Pero",
      meaning: "But",
      pronunciation: "Pe-ro",
      usage: "A common connecting word.",
      example: [
        {
          speaker: "",
          text: "Karuyag ko kumaon, pero waray pa pagkaon.",
          translation: "I want to eat, but there is no food yet.",
        },
      ],
    },
    {
      term: "Kay / Tungod kay",
      meaning: "Because",
      pronunciation: "Kay / Tung-od kay",
      usage: "A common connecting word.",
      example: [
        {
          speaker: "A",
          text: "Nag-aadal ka ba para ha eksam?",
          translation: "Are you studying for the exam?",
        },
        {
          speaker: "B",
          text: "Oo, kay may eksam kami buwas.",
          translation: "Yes, because we have an exam tomorrow.",
        },
      ],
    },
    {
      term: "Kon",
      meaning: "If",
      pronunciation: "Kon",
      usage: "A common connecting word.",
      example: [
        {
          speaker: "",
          text: "Kon may panahon ako, magbabasa ako.",
          translation: "If I have time, I will read.",
        },
      ],
    },
    {
      term: "O",
      meaning: "Or",
      pronunciation: "O",
      usage: "A common connecting word.",
    },
    {
      term: "Gihapon",
      meaning: "Also",
      pronunciation: "Gi-ha-pon",
      usage: "A common connecting word.",
    },
    {
      term: "Upod / Kaupod",
      meaning: "With",
      pronunciation: "U-pod / Ka-u-pod",
      usage: "A common connecting word.",
      example: [
        {
          speaker: "A",
          text: "Makadto kita buwas ha aga.",
          translation: "We will go tomorrow morning.",
        },
        {
          speaker: "B",
          text: "Sige, upod ta an iba naton nga sangkay.",
          translation: "Okay, let's bring our other friends.",
        },
      ],
    },
    {
      term: "Ako",
      meaning: "I",
      pronunciation: "A-ko",
      usage: "From the language note \"Subject\".",
      example: [
        {
          speaker: "A",
          text: "Ano an imo ginbubuhat?",
          translation: "What are you doing?",
        },
        {
          speaker: "B",
          text: "Nagbabasa ako hin libro.",
          translation: "I am reading a book.",
        },
      ],
    },
    {
      term: "Hiya",
      meaning: "He / She",
      pronunciation: "HEE-yah",
      usage: "From the language note \"Subject\".",
      example: [
        {
          speaker: "",
          text: "Nagtrabaho hiya kahapon.",
          translation: "He/She worked yesterday.",
        },
      ],
    },
    {
      term: "An bata",
      meaning: "The child",
      pronunciation: "an bah-tah",
      usage: "From the language note \"Subject\".",
    },
    {
      term: "An maestra",
      meaning: "The teacher",
      pronunciation: "an mah-es-trah",
      usage: "From the language note \"Subject\".",
    },
    {
      term: "An estudyante",
      meaning: "The student",
      pronunciation: "an es-too-dyahn-teh",
      usage: "From the language note \"Subject\".",
    },
    {
      term: "nagbabasa",
      meaning: "is reading",
      pronunciation: "nag-ba-ba-sa",
      usage: "From the language note \"Predicate\".",
      example: [
        {
          speaker: "A",
          text: "Nagbabasa ako hin libro.",
          translation: "I am reading a book.",
        },
        {
          speaker: "B",
          text: "Nag-aadal ka ba para ha eksam?",
          translation: "Are you studying for the exam?",
        },
      ],
    },
    {
      term: "nagluluto",
      meaning: "is cooking",
      pronunciation: "nahg-loo-loo-toh",
      usage: "From the language note \"Predicate\".",
      example: [
        {
          speaker: "",
          text: "Nagluluto hiya.",
          translation: "He/She is cooking. / She is cooking.",
        },
      ],
    },
    {
      term: "nag-aadal",
      meaning: "is studying",
      pronunciation: "nahg-ah-ah-dahl",
      usage: "From the language note \"Predicate\".",
      example: [
        {
          speaker: "A",
          text: "Nagbabasa ako hin libro.",
          translation: "I am reading a book.",
        },
        {
          speaker: "B",
          text: "Nag-aadal ka ba para ha eksam?",
          translation: "Are you studying for the exam?",
        },
      ],
    },
    {
      term: "malipayon",
      meaning: "is happy",
      pronunciation: "mah-lee-pah-YOHN",
      usage: "From the language note \"Predicate\".",
      example: [
        {
          speaker: "",
          text: "Malipayon ako.",
          translation: "I am happy.",
        },
      ],
    },
    {
      term: "maestra",
      meaning: "is a teacher",
      pronunciation: "mah-es-trah",
      usage: "From the language note \"Predicate\".",
      example: [
        {
          speaker: "",
          text: "Maestra hiya.",
          translation: "He/She is a teacher.",
        },
      ],
    },
    {
      term: "hin libro",
      meaning: "a book",
      pronunciation: "hin lib-ro",
      usage: "From the language note \"Object\".",
      example: [
        {
          speaker: "A",
          text: "Ano an imo ginbubuhat?",
          translation: "What are you doing?",
        },
        {
          speaker: "B",
          text: "Nagbabasa ako hin libro.",
          translation: "I am reading a book.",
        },
      ],
    },
    {
      term: "pagkaon",
      meaning: "food",
      pronunciation: "pag-ka-ON",
      usage: "From the language note \"Object\".",
      example: [
        {
          speaker: "",
          text: "Karuyag ko kumaon, pero waray pa pagkaon.",
          translation: "I want to eat, but there is no food yet.",
        },
      ],
    },
    {
      term: "tubig",
      meaning: "water",
      pronunciation: "TU-big",
      usage: "From the language note \"Object\".",
    },
    {
      term: "surat",
      meaning: "a letter",
      pronunciation: "su-rat",
      usage: "From the language note \"Object\".",
    },
    {
      term: "istorya",
      meaning: "a story",
      pronunciation: "Is-tor-ya",
      usage: "From the language note \"Object\".",
    },
    {
      term: "Ano",
      meaning: "What",
      pronunciation: "a-no",
      usage: "From this lesson's word list: information questions.",
      example: [
        {
          speaker: "",
          text: "Ano an imo karuyag?",
        },
      ],
    },
    {
      term: "Hin-o",
      meaning: "Who",
      pronunciation: "HIN-oh",
      usage: "From this lesson's word list: information questions.",
      example: [
        {
          speaker: "",
          text: "Hin-o hiya?",
        },
      ],
    },
    {
      term: "San-o",
      meaning: "When",
      pronunciation: "SAHN-oh",
      usage: "From this lesson's word list: information questions.",
      example: [
        {
          speaker: "",
          text: "San-o ka mauli?",
        },
      ],
    },
    {
      term: "Kay ano",
      meaning: "Why",
      pronunciation: "KAI AH-noh",
      usage: "From this lesson's word list: information questions.",
      example: [
        {
          speaker: "",
          text: "Kay ano nga nalilipay ka?",
        },
      ],
    },
    {
      term: "Paonan-o",
      meaning: "How",
      pronunciation: "pah-oh-NAHN-oh",
      usage: "From this lesson's word list: information questions.",
      example: [
        {
          speaker: "",
          text: "Paonan-o ini pagbuhaton?",
        },
      ],
    },
    {
      term: "Pira",
      meaning: "How many / How much",
      pronunciation: "pi-ra",
      usage: "From this lesson's word list: information questions.",
      example: [
        {
          speaker: "",
          text: "Pira ini?",
        },
      ],
    },
  ],
  greetings: [
    {
      term: "Ngan",
      meaning: "And",
      pronunciation: "Ngan",
      usage: "A common connecting word.",
      example: [
        {
          speaker: "",
          text: "Nagbabasa ako ngan nagsusurat.",
          translation: "I am reading and writing.",
        },
      ],
    },
    {
      term: "Pero",
      meaning: "But",
      pronunciation: "Pe-ro",
      usage: "A common connecting word.",
      example: [
        {
          speaker: "",
          text: "Karuyag ko kumaon, pero waray pa pagkaon.",
          translation: "I want to eat, but there is no food yet.",
        },
      ],
    },
    {
      term: "Kay / Tungod kay",
      meaning: "Because",
      pronunciation: "Kay / Tung-od kay",
      usage: "A common connecting word.",
      example: [
        {
          speaker: "A",
          text: "Nag-aadal ka ba para ha eksam?",
          translation: "Are you studying for the exam?",
        },
        {
          speaker: "B",
          text: "Oo, kay may eksam kami buwas.",
          translation: "Yes, because we have an exam tomorrow.",
        },
      ],
    },
    {
      term: "Kon",
      meaning: "If",
      pronunciation: "Kon",
      usage: "A common connecting word.",
      example: [
        {
          speaker: "",
          text: "Kon may panahon ako, magbabasa ako.",
          translation: "If I have time, I will read.",
        },
      ],
    },
    {
      term: "O",
      meaning: "Or",
      pronunciation: "O",
      usage: "A common connecting word.",
    },
    {
      term: "Gihapon",
      meaning: "Also",
      pronunciation: "Gi-ha-pon",
      usage: "A common connecting word.",
    },
    {
      term: "Upod / Kaupod",
      meaning: "With",
      pronunciation: "U-pod / Ka-u-pod",
      usage: "A common connecting word.",
      example: [
        {
          speaker: "A",
          text: "Makadto kita buwas ha aga.",
          translation: "We will go tomorrow morning.",
        },
        {
          speaker: "B",
          text: "Sige, upod ta an iba naton nga sangkay.",
          translation: "Okay, let's bring our other friends.",
        },
      ],
    },
  ],
  patterns: [
    {
      label: "Pattern 1: Describing Someone",
      pattern: "Description + hiya.",
      examples: [
        "Gutom hiya.",
        "Maestra hiya.",
        "Doktor hiya.",
      ],
    },
    {
      label: "Pattern 2: Asking Where",
      pattern: "Hain an imo + Thing?",
      examples: [
        "Hain an imo libro?",
        "Hain an imo balay?",
      ],
    },
    {
      label: "Pattern 3: Negative Sentences",
      pattern: "Diri ako + Word.",
      examples: [
        "Diri ako nagbabasa.",
        "Diri ako gutom.",
      ],
    },
  ],
  sentences: [
    {
      text: "Nagbabasa ako ngan nagsusurat.",
      meaning: "I am reading and writing.",
    },
    {
      text: "Karuyag ko kumaon, pero waray pa pagkaon.",
      meaning: "I want to eat, but there is no food yet.",
    },
    {
      text: "Nalilipay ako kay upod ko an akon pamilya.",
      meaning: "I am happy because my family is with me.",
    },
    {
      text: "Kon may panahon ako, magbabasa ako.",
      meaning: "If I have time, I will read.",
    },
    {
      text: "Nag-aadal ako yana.",
      meaning: "I am studying now.",
    },
    {
      text: "Nagtrabaho hiya kahapon.",
      meaning: "He/She worked yesterday.",
    },
    {
      text: "Makadto kami buwas.",
      meaning: "We will go tomorrow.",
    },
    {
      text: "Nagbabasa hiya ha librarya.",
      meaning: "He/She is reading at the library.",
    },
    {
      text: "Nagbabasa ako.",
      meaning: "I am reading.",
    },
    {
      text: "Nagluluto hiya.",
      meaning: "He/She is cooking. / She is cooking.",
    },
    {
      text: "Nag-aadal kami.",
      meaning: "We are studying.",
    },
    {
      text: "Nag-uuyag hira.",
      meaning: "They are playing.",
    },
    {
      text: "Malipayon ako.",
      meaning: "I am happy.",
    },
    {
      text: "Gutom hiya.",
      meaning: "He/She is hungry.",
    },
    {
      text: "Matahom an lugar.",
      meaning: "The place is beautiful.",
    },
    {
      text: "Dako an balay.",
      meaning: "The house is big.",
    },
    {
      text: "Estudyante ako.",
      meaning: "I am a student.",
    },
    {
      text: "Maestra hiya.",
      meaning: "He/She is a teacher.",
    },
    {
      text: "Doktor hiya.",
      meaning: "He/She is a doctor.",
    },
    {
      text: "Sangkay ko hiya.",
      meaning: "He/She is my friend.",
    },
    {
      text: "Nagbabasa ako ha balay.",
      meaning: "I am reading at home.",
    },
    {
      text: "Nag-aadal hiya ha eskwelahan.",
      meaning: "He/She is studying at school.",
    },
    {
      text: "Nagluluto hi Nanay ha kusina.",
      meaning: "Mother is cooking in the kitchen.",
    },
    {
      text: "Nagkadto kami ha merkado kahapon.",
      meaning: "We went to the market yesterday.",
    },
    {
      text: "Lami an pagkaon.",
      meaning: "The food is delicious.",
    },
    {
      text: "Diri ako nagbabasa.",
      meaning: "I am not reading.",
    },
    {
      text: "Diri hiya nagluluto.",
      meaning: "She is not cooking.",
    },
    {
      text: "Diri kami nag-aadal.",
      meaning: "We are not studying.",
    },
    {
      text: "Diri hira nag-uuyag.",
      meaning: "They are not playing.",
    },
    {
      text: "Diri ako gutom.",
      meaning: "I am not hungry.",
    },
    {
      text: "Nag-aadal ka ba?",
      meaning: "Are you studying?",
    },
    {
      text: "Gutom ka ba?",
      meaning: "Are you hungry?",
    },
    {
      text: "Nagluluto ba hiya?",
      meaning: "Is she cooking?",
    },
    {
      text: "Nasasabtan mo ba?",
      meaning: "Do you understand?",
    },
    {
      text: "Karuyag mo ba kumaon?",
      meaning: "Do you want to eat?",
    },
    {
      text: "Ano an imo ginbubuhat?",
      meaning: "What are you doing?",
    },
    {
      text: "Hain an imo libro?",
      meaning: "Where is your book?",
    },
    {
      text: "Aada ha lamisa.",
      meaning: "It is on the table.",
    },
    {
      text: "Kay ano nga nag-aadal ka?",
      meaning: "Why are you studying?",
    },
    {
      text: "Karuyag ko mahibaro.",
      meaning: "I want to learn.",
    },
  ],
  conversations: [
    {
      title: "Conversation A: Talking About School",
      lines: [
        {
          speaker: "Ana",
          text: "Ano an imo ginbubuhat?",
          translation: "What are you doing?",
        },
        {
          speaker: "Ben",
          text: "Nagbabasa ako hin libro.",
          translation: "I am reading a book.",
        },
        {
          speaker: "Ana",
          text: "Nag-aadal ka ba para ha eksam?",
          translation: "Are you studying for the exam?",
        },
        {
          speaker: "Ben",
          text: "Oo, kay may eksam kami buwas.",
          translation: "Yes, because we have an exam tomorrow.",
        },
        {
          speaker: "Ana",
          text: "Maupod ako ha imo pag-adal.",
          translation: "I will join you in studying.",
        },
        {
          speaker: "Ben",
          text: "Sige, salamat.",
          translation: "Okay, thank you.",
        },
      ],
      situation: "Ana and Ben: Talking About School.",
    },
    {
      title: "Conversation B: Asking About a Place",
      lines: [
        {
          speaker: "Maria",
          text: "Hain an imo balay?",
          translation: "Where is your house?",
        },
        {
          speaker: "Rosa",
          text: "Hirani la ha merkado.",
          translation: "It is just near the market.",
        },
        {
          speaker: "Maria",
          text: "Hirayo ba tikang dinhi?",
          translation: "Is it far from here?",
        },
        {
          speaker: "Rosa",
          text: "Diri, hirani la.",
          translation: "No, it is just nearby.",
        },
        {
          speaker: "Maria",
          text: "Makadto ako ha imo balay buwas.",
          translation: "I will go to your house tomorrow.",
        },
        {
          speaker: "Rosa",
          text: "Sige, magkita kita buwas.",
          translation: "Okay, see you tomorrow.",
        },
      ],
      situation: "Maria and Rosa: Asking About a Place.",
    },
    {
      title: "Conversation C: Making a Simple Plan",
      lines: [
        {
          speaker: "Carlo",
          text: "Karuyag mo ba kumadto ha parke?",
          translation: "Do you want to go to the park?",
        },
        {
          speaker: "Mark",
          text: "Oo, karuyag ko.",
          translation: "Yes, I want to.",
        },
        {
          speaker: "Carlo",
          text: "Makadto kita buwas ha aga.",
          translation: "We will go tomorrow morning.",
        },
        {
          speaker: "Mark",
          text: "Sige, upod ta an iba naton nga sangkay.",
          translation: "Okay, let's bring our other friends.",
        },
        {
          speaker: "Carlo",
          text: "Maupay ito nga ideya.",
          translation: "That is a good idea.",
        },
        {
          speaker: "Mark",
          text: "Kitaay kita buwas.",
          translation: "See you tomorrow.",
        },
      ],
      situation: "Carlo and Mark: Making a Simple Plan.",
    },
  ],
  languageNotes: [
    {
      title: "Parts of a Sentence",
      body: [
        "A basic sentence can contain a subject, a predicate, and sometimes an object or additional information.",
      ],
    },
    {
      title: "A. Subject",
      body: [
        "The subject identifies the person, animal, place, or thing being discussed.",
      ],
      table: {
        leftHeading: "English",
        rightHeading: "Waray",
        rows: [
          {
            left: "I",
            right: "Ako",
          },
          {
            left: "You",
            right: "Ikaw / Ka",
          },
          {
            left: "He / She",
            right: "Hiya",
          },
          {
            left: "The child",
            right: "An bata",
          },
          {
            left: "The teacher",
            right: "An maestra",
          },
          {
            left: "The student",
            right: "An estudyante",
          },
        ],
      },
    },
    {
      title: "B. Predicate",
      body: [
        "The predicate tells something about the subject. It may describe an action, condition, or identity.",
      ],
      table: {
        leftHeading: "English",
        rightHeading: "Waray",
        rows: [
          {
            left: "is reading",
            right: "nagbabasa",
          },
          {
            left: "is cooking",
            right: "nagluluto",
          },
          {
            left: "is studying",
            right: "nag-aadal",
          },
          {
            left: "is happy",
            right: "malipayon",
          },
          {
            left: "is a teacher",
            right: "maestra",
          },
        ],
      },
    },
    {
      title: "C. Object",
      body: [
        "The object identifies the person or thing involved in the action.",
      ],
      table: {
        leftHeading: "English",
        rightHeading: "Waray",
        rows: [
          {
            left: "a book",
            right: "hin libro",
          },
          {
            left: "food",
            right: "pagkaon",
          },
          {
            left: "water",
            right: "tubig",
          },
          {
            left: "a letter",
            right: "surat",
          },
          {
            left: "a story",
            right: "istorya",
          },
        ],
      },
    },
    {
      title: "C. Object",
      body: [
        "Example sentence:",
        "Nagbabasa ako hin libro. I am reading a book.",
      ],
      examples: [
        {
          text: "Nagbabasa",
          meaning: "action",
        },
        {
          text: "Ako",
          meaning: "person performing the action",
        },
        {
          text: "Hin libro",
          meaning: "object or thing being read",
        },
      ],
    },
    {
      title: "Basic Sentence Patterns",
      body: [
        "Waray sentence construction does not always follow one fixed word order. The following are useful introductory patterns.",
      ],
    },
    {
      title: "A. Action + Subject",
      body: [
        "This pattern is commonly seen in sentences that begin with an action or verb expression.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Nagbabasa ako.",
            right: "I am reading.",
          },
          {
            left: "Nagluluto hiya.",
            right: "He/She is cooking.",
          },
          {
            left: "Nag-aadal kami.",
            right: "We are studying.",
          },
          {
            left: "Nag-uuyag hira.",
            right: "They are playing.",
          },
        ],
      },
    },
    {
      title: "B. Description + Subject",
      body: [
        "A descriptive word can be used to tell something about a person or object.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Malipayon ako.",
            right: "I am happy.",
          },
          {
            left: "Gutom hiya.",
            right: "He/She is hungry.",
          },
          {
            left: "Matahom an lugar.",
            right: "The place is beautiful.",
          },
          {
            left: "Dako an balay.",
            right: "The house is big.",
          },
        ],
      },
    },
    {
      title: "C. Noun + Subject Identification",
      body: [
        "This pattern identifies a person or explains what someone is.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Estudyante ako.",
            right: "I am a student.",
          },
          {
            left: "Maestra hiya.",
            right: "He/She is a teacher.",
          },
          {
            left: "Doktor hiya.",
            right: "He/She is a doctor.",
          },
          {
            left: "Sangkay ko hiya.",
            right: "He/She is my friend.",
          },
        ],
      },
    },
    {
      title: "D. Sentence with Additional Information",
      body: [
        "Additional words can tell where, when, or how an action happens.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Nagbabasa ako ha balay.",
            right: "I am reading at home.",
          },
          {
            left: "Nag-aadal hiya ha eskwelahan.",
            right: "He/She is studying at school.",
          },
          {
            left: "Nagluluto hi Nanay ha kusina.",
            right: "Mother is cooking in the kitchen.",
          },
          {
            left: "Nagkadto kami ha merkado kahapon.",
            right: "We went to the market yesterday.",
          },
        ],
      },
    },
    {
      title: "Affirmative and Negative Sentences",
      body: [
        "Affirmative sentences express that something happens or is true. Negative sentences express that something does not happen or is not true.",
      ],
    },
    {
      title: "A. Affirmative Sentences",
      table: {
        leftHeading: "English",
        rightHeading: "Waray",
        rows: [
          {
            left: "I am reading.",
            right: "Nagbabasa ako.",
          },
          {
            left: "She is cooking.",
            right: "Nagluluto hiya.",
          },
          {
            left: "We are studying.",
            right: "Nag-aadal kami.",
          },
          {
            left: "They are playing.",
            right: "Nag-uuyag hira.",
          },
          {
            left: "The food is delicious.",
            right: "Lami an pagkaon.",
          },
        ],
      },
    },
    {
      title: "B. Negative Sentences",
      body: [
        "The word diri is commonly used to make a statement negative.",
      ],
      table: {
        leftHeading: "English",
        rightHeading: "Waray",
        rows: [
          {
            left: "I am not reading.",
            right: "Diri ako nagbabasa.",
          },
          {
            left: "She is not cooking.",
            right: "Diri hiya nagluluto.",
          },
          {
            left: "We are not studying.",
            right: "Diri kami nag-aadal.",
          },
          {
            left: "They are not playing.",
            right: "Diri hira nag-uuyag.",
          },
          {
            left: "I am not hungry.",
            right: "Diri ako gutom.",
          },
        ],
      },
    },
    {
      title: "C. Comparing Affirmative and Negative Sentences",
      table: {
        leftHeading: "",
        rightHeading: "",
        rows: [
          {
            left: "Affirmative",
            right: "Negative",
          },
          {
            left: "Nagbabasa ako.",
            right: "Diri ako nagbabasa.",
          },
          {
            left: "Nagluluto hiya.",
            right: "Diri hiya nagluluto.",
          },
          {
            left: "Malipayon ako.",
            right: "Diri ako malipayon.",
          },
          {
            left: "Estudyante hiya.",
            right: "Diri hiya estudyante.",
          },
        ],
      },
    },
    {
      title: "C. Comparing Affirmative and Negative Sentences",
      body: [
        "Observe how adding diri changes the meaning of the sentence.",
      ],
    },
    {
      title: "Forming Questions",
      body: [
        "Questions are used to ask for information, confirmation, or clarification.",
      ],
    },
    {
      title: "A. Yes-or-No Questions",
      body: [
        "The particle ba is commonly used to form questions that can be answered with yes or no.",
      ],
      table: {
        leftHeading: "English",
        rightHeading: "Waray",
        rows: [
          {
            left: "Are you studying?",
            right: "Nag-aadal ka ba?",
          },
          {
            left: "Are you hungry?",
            right: "Gutom ka ba?",
          },
          {
            left: "Is she cooking?",
            right: "Nagluluto ba hiya?",
          },
          {
            left: "Do you understand?",
            right: "Nasasabtan mo ba?",
          },
          {
            left: "Do you want to eat?",
            right: "Karuyag mo ba kumaon?",
          },
        ],
      },
    },
    {
      title: "B. Information Questions",
      table: {
        leftHeading: "English Question Word",
        rightHeading: "Waray · Example",
        rows: [
          {
            left: "What",
            right: "Ano · Ano an imo karuyag?",
          },
          {
            left: "Who",
            right: "Hin-o · Hin-o hiya?",
          },
          {
            left: "Where",
            right: "Diin / Hain · Diin ka makadto?",
          },
          {
            left: "When",
            right: "San-o · San-o ka mauli?",
          },
          {
            left: "Why",
            right: "Kay ano · Kay ano nga nalilipay ka?",
          },
          {
            left: "How",
            right: "Paonan-o · Paonan-o ini pagbuhaton?",
          },
          {
            left: "How many / How much",
            right: "Pira · Pira ini?",
          },
        ],
      },
    },
    {
      title: "C. Sample Questions and Answers",
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Ano an imo ginbubuhat?",
            right: "What are you doing?",
          },
          {
            left: "Nagbabasa ako.",
            right: "I am reading.",
          },
          {
            left: "Hain an imo libro?",
            right: "Where is your book?",
          },
          {
            left: "Aada ha lamisa.",
            right: "It is on the table.",
          },
          {
            left: "Kay ano nga nag-aadal ka?",
            right: "Why are you studying?",
          },
          {
            left: "Karuyag ko mahibaro.",
            right: "I want to learn.",
          },
        ],
      },
    },
    {
      title: "A. Common Connecting Words",
      body: [
        "Connecting words help join ideas and make sentences more complete.",
      ],
    },
  ],
  inferredFields: [
    "situation",
    "usage",
    "example",
    "pronunciation",
    "pattern",
    "match",
    "choice",
    "fill-in",
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
