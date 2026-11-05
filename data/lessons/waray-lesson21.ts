import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 21 — imported from "Lesson Plan.pdf", pages 965–980.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
// Fields not given by the plan are INFERRED from this lesson's own content and
// listed in docs/waray-inferred-keys.md: usage, example, pattern, arrange, speaking phrase, respelling, target pitch and mood, example situation, pronunciation tip, badge description, completion requirement.
// The practice answers are INFERRED drafts, not from the PDF. See
// docs/waray-draft-answer-keys.md for each answer and how it was found.

export const warayLesson21: StructuredLesson = {
  lessonId: "waray_21",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 21,
  title: "Expressing Opinions and Feelings",
  level: "Advanced",
  unit: "ADVANCED COMMUNICATION",
  estimatedDuration: "45–60 minutes",
  prerequisite: "Completion of the Intermediate Level (Lessons 11–20)",
  languageVariety: "Expressing opinions, describing feelings, communicating preferences, giving reasons, and responding to other people's viewpoints.",
  intro: [
    "Expressing opinions and feelings is an important part of meaningful communication. People regularly share what they think about different topics, explain their preferences, and communicate how they feel about particular situations.",
    "In this lesson, learners will practice expressing personal opinions and feelings using common Waray vocabulary and sentence patterns. They will also learn how to agree or disagree politely, explain their reasons, and respond appropriately during conversations.",
    "Imagine that a friend asks what you think about a movie, a school activity, or a particular place.",
    "You might say that you enjoyed the movie, that a school activity was interesting, or that you prefer studying at home because it is quieter.",
    "You may also want to explain how a situation makes you feel.",
    "In Waray, some useful expressions include:",
    "• Para ha akon... – In my opinion...",
    "• Ha akon paghunahuna... – In my opinion / As I think about it...",
    "• Nalilipay ako. – I am happy.",
    "• Nasusubo ako. – I am sad.",
    "• Nauyon ako. – I agree.",
    "• Diri ako nauyon. – I disagree.",
    "• Tungod kay... – Because...",
    "These expressions will help you communicate more than simple facts. They allow you to explain your thoughts, reactions, and personal perspectives.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify common Waray expressions used to communicate opinions and feelings.",
    "Express personal thoughts about familiar topics.",
    "Describe different emotions and personal reactions.",
    "Agree or disagree with another person's opinion politely.",
    "Explain the reasons behind their opinions and preferences.",
    "Participate in conversations involving personal viewpoints and feelings.",
  ],
  assessment: {
    instructions: "Choose the correct answer for each question.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What does \"Para ha akon\" mean?",
        options: [
          {
            key: "A",
            text: "Because of me",
          },
          {
            key: "B",
            text: "In my opinion",
          },
          {
            key: "C",
            text: "I agree",
          },
          {
            key: "D",
            text: "I am happy",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "Which expression means \"I agree\"?",
        options: [
          {
            key: "A",
            text: "Diri ako nauyon.",
          },
          {
            key: "B",
            text: "Nasusubo ako.",
          },
          {
            key: "C",
            text: "Nauyon ako.",
          },
          {
            key: "D",
            text: "Nabababaraka ako.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 3,
        prompt: "What does \"Nalilipay ako\" mean?",
        options: [
          {
            key: "A",
            text: "I am angry.",
          },
          {
            key: "B",
            text: "I am happy.",
          },
          {
            key: "C",
            text: "I am worried.",
          },
          {
            key: "D",
            text: "I am afraid.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 4,
        prompt: "Which expression means \"because\"?",
        options: [
          {
            key: "A",
            text: "Tungod kay",
          },
          {
            key: "B",
            text: "Para ha akon",
          },
          {
            key: "C",
            text: "Nauyon ako",
          },
          {
            key: "D",
            text: "Tinuod",
          },
        ],
        answerKey: "A",
      },
      {
        id: 5,
        prompt: "What does \"Diri ako nauyon\" mean?",
        options: [
          {
            key: "A",
            text: "I am happy.",
          },
          {
            key: "B",
            text: "I understand.",
          },
          {
            key: "C",
            text: "I disagree.",
          },
          {
            key: "D",
            text: "I am surprised.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 6,
        prompt: "Which expression is used to describe sadness?",
        options: [
          {
            key: "A",
            text: "Nalilipay ako.",
          },
          {
            key: "B",
            text: "Nasusubo ako.",
          },
          {
            key: "C",
            text: "Eksitado ako.",
          },
          {
            key: "D",
            text: "Mapasalamaton ako.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 7,
        prompt: "Which sentence expresses an opinion?",
        options: [
          {
            key: "A",
            text: "Pira ini?",
          },
          {
            key: "B",
            text: "Para ha akon, importante an edukasyon.",
          },
          {
            key: "C",
            text: "Hain an eskwelahan?",
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
        prompt: "What does \"Nabababaraka ako\" mean?",
        options: [
          {
            key: "A",
            text: "I am worried.",
          },
          {
            key: "B",
            text: "I am excited.",
          },
          {
            key: "C",
            text: "I am thankful.",
          },
          {
            key: "D",
            text: "I am calm.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 9,
        prompt: "Which expression politely communicates that you have a different opinion?",
        options: [
          {
            key: "A",
            text: "Diri ako maaram.",
          },
          {
            key: "B",
            text: "Iba an akon opinyon.",
          },
          {
            key: "C",
            text: "Pira ini?",
          },
          {
            key: "D",
            text: "Maupay nga aga.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 10,
        prompt: "Why is giving a reason important when expressing an opinion?",
        options: [
          {
            key: "A",
            text: "It makes the conversation longer without purpose.",
          },
          {
            key: "B",
            text: "It prevents other people from sharing their thoughts.",
          },
          {
            key: "C",
            text: "It helps explain and support your viewpoint.",
          },
          {
            key: "D",
            text: "It changes an opinion into a question.",
          },
        ],
        answerKey: "C",
      },
    ],
  },
  extraActivities: [
    {
      title: "Express Your Opinion",
      kind: "open",
      instructions: "Answer the following questions using complete Waray sentences.",
      items: [
        "Do you think learning another language is important? Why?",
        "What is your opinion about reading books?",
        "Do you prefer studying alone or with friends? Explain your answer.",
        "What makes you happy?",
        "What is one thing that worries you, and why?",
      ],
    },
    {
      title: "Opinion and Feeling Speaking Challenge",
      kind: "open",
      instructions: "Choose one topic and record a short response in Waray.\nTopics:",
      items: [
        "The importance of education.",
        "Learning Philippine languages.",
        "Spending time with family.",
        "Using technology in education.",
        "Helping other people.",
        "An expression introducing your opinion.",
        "At least one statement describing your feelings.",
        "At least one reason supporting your opinion.",
        "A closing statement.",
      ],
      note: "Your response must include:\nChallenge: Speak for approximately 30–60 seconds without reading a prepared script.",
    },
  ],
  matchActivity: {
    title: "Vocabulary Matching",
    instructions: "Match each Waray expression with its correct English meaning.",
    pairs: [
      {
        id: "1",
        term: "Nalilipay",
        answer: "Happy",
      },
      {
        id: "2",
        term: "Nasusubo",
        answer: "Sad",
      },
      {
        id: "3",
        term: "Nabababaraka",
        answer: "Worried",
      },
      {
        id: "4",
        term: "Nauyon ako",
        answer: "I agree",
      },
      {
        id: "5",
        term: "Tungod kay",
        answer: "Because",
      },
    ],
  },
  choiceActivity: {
    title: "Identify the Feeling",
    instructions: "Read each situation and choose the most appropriate Waray expression.",
    questions: [
      {
        id: 1,
        prompt: "You received good news from your family.",
        options: [
          {
            key: "A",
            text: "Nasusubo ako.",
          },
          {
            key: "B",
            text: "Nalilipay ako.",
          },
          {
            key: "C",
            text: "Nasisina ako.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "You lost something important.",
        options: [
          {
            key: "A",
            text: "Nasusubo ako.",
          },
          {
            key: "B",
            text: "Eksitado ako.",
          },
          {
            key: "C",
            text: "Nalilipay ako.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 3,
        prompt: "You are worried about an upcoming examination.",
        options: [
          {
            key: "A",
            text: "Nabababaraka ako.",
          },
          {
            key: "B",
            text: "Malipayon ako.",
          },
          {
            key: "C",
            text: "Nauyon ako.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 4,
        prompt: "You are afraid of a dangerous situation.",
        options: [
          {
            key: "A",
            text: "Nahahadlok ako.",
          },
          {
            key: "B",
            text: "Nalilipay ako.",
          },
          {
            key: "C",
            text: "Nasisina ako.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 5,
        prompt: "You are angry because someone damaged your belongings.",
        options: [
          {
            key: "A",
            text: "Nasusubo ako.",
          },
          {
            key: "B",
            text: "Nasisina ako.",
          },
          {
            key: "C",
            text: "Mapasalamaton ako.",
          },
        ],
        answerKey: "B",
      },
    ],
  },
  fillInBlanks: {
    title: "Complete the Sentences",
    instructions: "Choose the correct expression from the word bank to complete each sentence.",
    items: [
      {
        id: "1",
        sentence: "______, importante an pag-adal.",
        answer: "Para ha akon",
        title: "Complete the Sentences",
        instructions: "Choose the correct expression from the word bank to complete each sentence.",
        wordBank: [
          "Nauyon ako",
          "Nalilipay ako",
          "Tungod kay",
          "Diri ako nauyon",
          "Para ha akon",
        ],
      },
      {
        id: "2",
        sentence: "______ ha imo opinyon.",
        answer: "Nauyon ako",
        title: "Complete the Sentences",
        instructions: "Choose the correct expression from the word bank to complete each sentence.",
        wordBank: [
          "Nauyon ako",
          "Nalilipay ako",
          "Tungod kay",
          "Diri ako nauyon",
          "Para ha akon",
        ],
      },
      {
        id: "3",
        sentence: "______ nga may bag-o ako nga nahibabaroan.",
        answer: "Nalilipay ako",
        title: "Complete the Sentences",
        instructions: "Choose the correct expression from the word bank to complete each sentence.",
        wordBank: [
          "Nauyon ako",
          "Nalilipay ako",
          "Tungod kay",
          "Diri ako nauyon",
          "Para ha akon",
        ],
      },
      {
        id: "4",
        sentence: "______ importante ini.",
        answer: "Tungod kay",
        title: "Complete the Sentences",
        instructions: "Choose the correct expression from the word bank to complete each sentence.",
        wordBank: [
          "Nauyon ako",
          "Nalilipay ako",
          "Tungod kay",
          "Diri ako nauyon",
          "Para ha akon",
        ],
      },
      {
        id: "5",
        sentence: "______ hito nga ideya.",
        answer: "Diri ako nauyon",
        title: "Complete the Sentences",
        instructions: "Choose the correct expression from the word bank to complete each sentence.",
        wordBank: [
          "Nauyon ako",
          "Nalilipay ako",
          "Tungod kay",
          "Diri ako nauyon",
          "Para ha akon",
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
      name: "Opinion Explorer Badge",
      description: "Awarded after successfully completing Lesson 21.",
    },
    completionRequirement: "Obtain at least 70% in the lesson assessment. Learners may repeat the activities and assessment if they do not meet the requirement.",
  },
  expectedOutcomes: [
    "Before proceeding to the next lesson, learners should be able to:",
    "Recognize common expressions for giving opinions.",
    "Describe different feelings and emotions.",
    "Express agreement and disagreement politely.",
    "Give reasons to support personal opinions.",
    "Participate in conversations involving different viewpoints.",
    "Construct sentences combining opinions, feelings, and explanations.",
    "Achieve at least 70% in the lesson assessment.",
  ],
  arrangeWords: {
    title: "Arrange the Words",
    instructions: "Arrange the words to form a correct Waray sentence.",
    items: [
      {
        id: "1",
        words: [
          "maupay",
          "Para",
          "ha",
          "akon",
          "ini",
        ],
        answer: [
          "Para",
          "ha",
          "akon",
          "maupay",
          "ini",
        ],
        display: "Para ha akon, maupay ini.",
      },
      {
        id: "2",
        words: [
          "ini",
          "Para",
          "ha",
          "akon",
          "importante",
        ],
        answer: [
          "Para",
          "ha",
          "akon",
          "importante",
          "ini",
        ],
        display: "Para ha akon, importante ini.",
      },
      {
        id: "3",
        words: [
          "an",
          "nga",
          "Natoo",
          "edukasyon",
          "ako",
          "importante",
        ],
        answer: [
          "Natoo",
          "ako",
          "nga",
          "importante",
          "an",
          "edukasyon",
        ],
        display: "Natoo ako nga importante an edukasyon.",
      },
      {
        id: "4",
        words: [
          "buruhaton",
          "ini",
          "ha",
          "makapainteres",
          "nga",
          "Para",
          "akon",
        ],
        answer: [
          "Para",
          "ha",
          "akon",
          "makapainteres",
          "ini",
          "nga",
          "buruhaton",
        ],
        display: "Para ha akon, makapainteres ini nga buruhaton.",
      },
      {
        id: "5",
        words: [
          "Mas",
          "ko",
          "pag-adal",
          "an",
          "balay",
          "ha",
          "karuyag",
        ],
        answer: [
          "Mas",
          "karuyag",
          "ko",
          "an",
          "pag-adal",
          "ha",
          "balay",
        ],
        display: "Mas karuyag ko an pag-adal ha balay.",
      },
    ],
  },
  speaking: {
    title: "Speaking Practice",
    instructions: "Read the following sentences aloud.",
    note: "Learners should listen to the model pronunciation before recording their own voice.",
    practiceLessonId: "waray_21",
    phrases: [
      {
        id: "1",
        text: "Para ha akon, maupay ini.",
        respelling: "pah-rah ha a-kon ma-u-pay i-ni",
        meaning: "In my opinion, this is good.",
      },
      {
        id: "2",
        text: "Diri ko karuyag ini nga ideya.",
        respelling: "di-ri ko ka-ru-yag i-ni nga i-de-ya",
        meaning: "I do not like this idea.",
      },
      {
        id: "3",
        text: "Eksitado ako.",
        respelling: "ek-si-ta-do a-ko",
        meaning: "I am excited.",
      },
      {
        id: "4",
        text: "Diri ako nauyon.",
        respelling: "di-ri a-ko na-u-yon",
        meaning: "I disagree.",
      },
      {
        id: "5",
        text: "Magkaiba an aton mga opinyon.",
        respelling: "mag-ka-i-ba an ah-tohn ma-nga o-pin-yon",
        meaning: "We have different opinions.",
      },
      {
        id: "6",
        text: "Amo ito an akon rason.",
        respelling: "a-mo i-to an a-kon rah-sohn",
        meaning: "That is my reason.",
      },
      {
        id: "7",
        text: "Nabababaraka ako ha akon eksam.",
        respelling: "na-ba-ba-ba-ra-ka a-ko ha a-kon ek-sam",
        meaning: "I am worried about my examination.",
      },
    ],
  },
  exampleSituation: {
    description: "Imagine this situation from the lesson: Sharing an Opinion About Education.",
    lead: "You can begin by saying:",
    line: "Para ha imo, importante ba an edukasyon?",
    translation: "In your opinion, is education important?",
  },
  vocabularyIntro: "Learn the following words and expressions before proceeding to the activities.",
  pronunciationTip: "Read each syllable clearly. Avoid rushing through longer expressions.",
  selfIntroIntro: "Use these patterns and phrases from the lesson.",
  vocabulary: [
    {
      term: "Opinyon",
      meaning: "Opinion",
      pronunciation: "o-pin-yon",
      usage: "An expression for giving opinions.",
      example: [
        {
          speaker: "A",
          text: "Tungod kay nakakagbinuligay kami kon may diri nasasabtan.",
          translation: "Because we can help one another when something is not understood.",
        },
        {
          speaker: "B",
          text: "Nasasabtan ko an imo opinyon, pero mas karuyag ko an pag-adal nga ako la.",
          translation: "I understand your opinion, but I prefer studying alone.",
        },
      ],
    },
    {
      term: "Hunahuna",
      meaning: "Thought / Idea",
      pronunciation: "hu-na-hu-na",
      usage: "An expression for giving opinions.",
    },
    {
      term: "Para ha akon",
      meaning: "In my opinion",
      pronunciation: "pa-ra ha a-kon",
      usage: "An expression for giving opinions.",
      example: [
        {
          speaker: "A",
          text: "Para ha akon, mas maupay an pag-adal upod an mga sangkay.",
          translation: "In my opinion, studying with friends is better.",
        },
        {
          speaker: "B",
          text: "Kay ano man?",
          translation: "Why?",
        },
      ],
    },
    {
      term: "Ha akon paghunahuna",
      meaning: "In my understanding / thinking",
      pronunciation: "ha a-kon pag-hu-na-hu-na",
      usage: "An expression for giving opinions.",
    },
    {
      term: "Para ha akon / Naghuhunahuna ako nga...",
      meaning: "I think",
      pronunciation: "pa-ra ha a-kon / nag-hu-hu-na-hu-na a-ko nga",
      usage: "An expression for giving opinions.",
      example: [
        {
          speaker: "A",
          text: "Para ha akon, mas maupay an pag-adal upod an mga sangkay.",
          translation: "In my opinion, studying with friends is better.",
        },
        {
          speaker: "B",
          text: "Kay ano man?",
          translation: "Why?",
        },
      ],
    },
    {
      term: "Natoo ako nga...",
      meaning: "I believe",
      pronunciation: "na-to-o a-ko nga",
      usage: "An expression for giving opinions.",
      example: [
        {
          speaker: "",
          text: "Natoo ako nga importante an edukasyon.",
          translation: "I believe that education is important.",
        },
      ],
    },
    {
      term: "Nauyon ako",
      meaning: "I agree",
      pronunciation: "na-u-yon a-ko",
      usage: "An expression for giving opinions.",
      example: [
        {
          speaker: "A",
          text: "Tungod kay nakakabulig ini ha aton kabubuwason.",
          translation: "Because it helps our future.",
        },
        {
          speaker: "B",
          text: "Nauyon ako ha imo.",
          translation: "I agree with you.",
        },
      ],
    },
    {
      term: "Diri ako nauyon",
      meaning: "I disagree",
      pronunciation: "di-ri a-ko na-u-yon",
      usage: "An expression for giving opinions.",
      example: [
        {
          speaker: "",
          text: "Diri ako nauyon hito nga ideya.",
          translation: "I disagree with that idea.",
        },
      ],
    },
    {
      term: "Mas karuyag ko",
      meaning: "I prefer",
      pronunciation: "mas ka-ru-yag ko",
      usage: "An expression for giving opinions.",
      example: [
        {
          speaker: "A",
          text: "Nasasabtan ko an imo opinyon, pero mas karuyag ko an pag-adal nga ako la.",
          translation: "I understand your opinion, but I prefer studying alone.",
        },
        {
          speaker: "B",
          text: "Kay ano nga mas karuyag mo ito?",
          translation: "Why do you prefer that?",
        },
      ],
    },
    {
      term: "Karuyag ko",
      meaning: "I like",
      pronunciation: "ka-ru-yag ko",
      usage: "An expression for giving opinions.",
      example: [
        {
          speaker: "A",
          text: "Tungod kay nakakagbinuligay kami kon may diri nasasabtan.",
          translation: "Because we can help one another when something is not understood.",
        },
        {
          speaker: "B",
          text: "Nasasabtan ko an imo opinyon, pero mas karuyag ko an pag-adal nga ako la.",
          translation: "I understand your opinion, but I prefer studying alone.",
        },
      ],
    },
    {
      term: "Diri ko karuyag",
      meaning: "I do not like",
      pronunciation: "di-ri ko ka-ru-yag",
      usage: "An expression for giving opinions.",
      example: [
        {
          speaker: "",
          text: "Diri ko karuyag ini nga ideya.",
          translation: "I do not like this idea.",
        },
      ],
    },
    {
      term: "Tinuod ini",
      meaning: "It is true",
      pronunciation: "ti-nu-od i-ni",
      usage: "An expression for giving opinions.",
    },
    {
      term: "Husto ito",
      meaning: "That is correct",
      pronunciation: "hus-to i-to",
      usage: "An expression for giving opinions.",
    },
    {
      term: "Bangin",
      meaning: "Perhaps / Maybe",
      pronunciation: "ba-ngin",
      usage: "An expression for giving opinions.",
    },
    {
      term: "Malipayon",
      meaning: "Happy",
      pronunciation: "ma-li-pa-yon",
      usage: "From this lesson's word list: feelings and emotions.",
    },
    {
      term: "Nasusubo",
      meaning: "Sad",
      pronunciation: "na-su-su-bo",
      usage: "From this lesson's word list: feelings and emotions.",
      example: [
        {
          speaker: "",
          text: "Nasusubo ako.",
          translation: "I am sad.",
        },
      ],
    },
    {
      term: "Nasisina",
      meaning: "Angry",
      pronunciation: "na-si-si-na",
      usage: "From this lesson's word list: feelings and emotions.",
      example: [
        {
          speaker: "",
          text: "Nasisina ako.",
          translation: "I am angry.",
        },
      ],
    },
    {
      term: "Nahahadlok",
      meaning: "Afraid",
      pronunciation: "na-hahad-lok",
      usage: "From this lesson's word list: feelings and emotions.",
      example: [
        {
          speaker: "",
          text: "Nahahadlok ako.",
          translation: "I am afraid.",
        },
      ],
    },
    {
      term: "Nabababaraka",
      meaning: "Worried",
      pronunciation: "na-ba-ba-ba-ra-ka",
      usage: "From this lesson's word list: feelings and emotions.",
      example: [
        {
          speaker: "",
          text: "Nabababaraka ako.",
          translation: "I am worried.",
        },
      ],
    },
    {
      term: "Eksitado",
      meaning: "Excited",
      pronunciation: "ek-si-ta-do",
      usage: "From this lesson's word list: feelings and emotions.",
      example: [
        {
          speaker: "",
          text: "Eksitado ako.",
          translation: "I am excited.",
        },
      ],
    },
    {
      term: "Nahipausa",
      meaning: "Surprised",
      pronunciation: "na-hi-pa-u-sa",
      usage: "From this lesson's word list: feelings and emotions.",
      example: [
        {
          speaker: "",
          text: "Nahipausa ako.",
          translation: "I am surprised.",
        },
      ],
    },
    {
      term: "Kapoy",
      meaning: "Tired",
      pronunciation: "ka-poy",
      usage: "From this lesson's word list: feelings and emotions.",
      example: [
        {
          speaker: "",
          text: "Kapoy ako.",
          translation: "I am tired.",
        },
      ],
    },
    {
      term: "Kinukulbaan",
      meaning: "Nervous",
      pronunciation: "ki-nu-kul-ba-an",
      usage: "From this lesson's word list: feelings and emotions.",
      example: [
        {
          speaker: "",
          text: "Kinukulbaan ako.",
          translation: "I am nervous.",
        },
      ],
    },
    {
      term: "Nasasagmuyo",
      meaning: "Disappointed",
      pronunciation: "na-sa-sag-mu-yo",
      usage: "From this lesson's word list: feelings and emotions.",
    },
    {
      term: "Proud / Mapasigarbohon",
      meaning: "Proud",
      pronunciation: "praud / ma-pa-si-gar-bo-hon",
      usage: "From this lesson's word list: feelings and emotions.",
    },
    {
      term: "Kalmado",
      meaning: "Calm",
      pronunciation: "kal-ma-do",
      usage: "From this lesson's word list: feelings and emotions.",
    },
    {
      term: "Komportable",
      meaning: "Comfortable",
      pronunciation: "kom-por-tab-le",
      usage: "From this lesson's word list: feelings and emotions.",
    },
    {
      term: "Nalilibog",
      meaning: "Confused",
      pronunciation: "na-li-li-bog",
      usage: "From this lesson's word list: feelings and emotions.",
    },
    {
      term: "Mapasalamaton",
      meaning: "Thankful",
      pronunciation: "ma-pa-sa-la-ma-ton",
      usage: "From this lesson's word list: feelings and emotions.",
      example: [
        {
          speaker: "",
          text: "Mapasalamaton ako.",
          translation: "I am thankful.",
        },
      ],
    },
    {
      term: "Kay / Tungod kay",
      meaning: "Because",
      pronunciation: "kay / tung-od kay",
      usage: "From this lesson's word list: reasons and explanations.",
      example: [
        {
          speaker: "A",
          text: "Oo, importante gud ini.",
          translation: "Yes, it is very important.",
        },
        {
          speaker: "B",
          text: "Kay ano nga importante ini para ha imo?",
          translation: "Why is it important to you?",
        },
      ],
    },
    {
      term: "Rason",
      meaning: "Reason",
      pronunciation: "ra-son",
      usage: "From this lesson's word list: reasons and explanations.",
      example: [
        {
          speaker: "",
          text: "Amo ito an akon rason.",
          translation: "That is my reason.",
        },
      ],
    },
    {
      term: "Pagsaysay",
      meaning: "Explanation",
      pronunciation: "pag-say-say",
      usage: "From this lesson's word list: reasons and explanations.",
    },
    {
      term: "Importante",
      meaning: "Important",
      pronunciation: "im-por-tan-te",
      usage: "From this lesson's word list: reasons and explanations.",
      example: [
        {
          speaker: "A",
          text: "Para ha imo, importante ba an edukasyon?",
          translation: "In your opinion, is education important?",
        },
        {
          speaker: "B",
          text: "Oo, importante gud ini.",
          translation: "Yes, it is very important.",
        },
      ],
    },
    {
      term: "Kinahanglanon",
      meaning: "Necessary",
      pronunciation: "ki-nang-ha-non",
      usage: "From this lesson's word list: reasons and explanations.",
    },
    {
      term: "Mapulsanon",
      meaning: "Helpful",
      pronunciation: "ma-pul-sa-non",
      usage: "From this lesson's word list: reasons and explanations.",
      example: [
        {
          speaker: "",
          text: "Tungod kay mapulsanon ini.",
          translation: "Because it is helpful.",
        },
      ],
    },
    {
      term: "Makuri",
      meaning: "Difficult",
      pronunciation: "ma-ku-ri",
      usage: "From this lesson's word list: reasons and explanations.",
      example: [
        {
          speaker: "A",
          text: "Nalilipay ako kay natapos na namon an proyekto.",
          translation: "I am happy because we have finished the project.",
        },
        {
          speaker: "B",
          text: "Makuri ba an iyo proyekto?",
          translation: "Was your project difficult?",
        },
      ],
    },
    {
      term: "Masayon",
      meaning: "Easy",
      pronunciation: "ma-sa-yon",
      usage: "From this lesson's word list: reasons and explanations.",
    },
    {
      term: "Makapainteres",
      meaning: "Interesting",
      pronunciation: "ma-ka-pin-te-res",
      usage: "From this lesson's word list: reasons and explanations.",
      example: [
        {
          speaker: "",
          text: "Para ha akon, makapainteres ini nga buruhaton.",
          translation: "I think this activity is interesting.",
        },
      ],
    },
    {
      term: "Makalilipay",
      meaning: "Enjoyable",
      pronunciation: "ma-ka-li-li-pay",
      usage: "From this lesson's word list: reasons and explanations.",
      example: [
        {
          speaker: "",
          text: "Karuyag ko magbasa kay makalilipay ini.",
          translation: "I like reading because it is enjoyable.",
        },
      ],
    },
    {
      term: "Mapulsanon",
      meaning: "Useful",
      pronunciation: "ma-pul-sa-non",
      usage: "From this lesson's word list: reasons and explanations.",
      example: [
        {
          speaker: "",
          text: "Tungod kay mapulsanon ini.",
          translation: "Because it is helpful.",
        },
      ],
    },
    {
      term: "Problema",
      meaning: "Problem",
      pronunciation: "pro-ble-ma",
      usage: "From this lesson's word list: reasons and explanations.",
      example: [
        {
          speaker: "",
          text: "Nasisina ako tungod han problema.",
          translation: "I am angry because of the problem.",
        },
      ],
    },
    {
      term: "Solusyon",
      meaning: "Solution",
      pronunciation: "so-lus-yon",
      usage: "From this lesson's word list: reasons and explanations.",
    },
    {
      term: "Eksperyensya",
      meaning: "Experience",
      pronunciation: "eks-per-yen-sya",
      usage: "From this lesson's word list: reasons and explanations.",
    },
    {
      term: "Tinuod?",
      meaning: "Really?",
      pronunciation: "ti-nu-od",
      usage: "From this lesson's word list: responses during conversations.",
      example: [
        {
          speaker: "A",
          text: "Importante liwat nga magpadayon kita ha pag-aram.",
          translation: "It is also important that we continue learning.",
        },
        {
          speaker: "B",
          text: "Tinuod. Damo pa kita hin mahimo nga mahibaroan.",
          translation: "True. There are still many things we can learn.",
        },
      ],
    },
    {
      term: "Amo ba?",
      meaning: "Is that so?",
      pronunciation: "a-mo ba",
      usage: "From this lesson's word list: responses during conversations.",
    },
    {
      term: "Nasasabtan ko",
      meaning: "I understand",
      pronunciation: "na-sa-sab-tan ko",
      usage: "From this lesson's word list: responses during conversations.",
      example: [
        {
          speaker: "A",
          text: "Tungod kay nakakagbinuligay kami kon may diri nasasabtan.",
          translation: "Because we can help one another when something is not understood.",
        },
        {
          speaker: "B",
          text: "Nasasabtan ko an imo opinyon, pero mas karuyag ko an pag-adal nga ako la.",
          translation: "I understand your opinion, but I prefer studying alone.",
        },
      ],
    },
    {
      term: "Diri ko nasasabtan",
      meaning: "I do not understand",
      pronunciation: "di-ri ko na-sa-sab-tan",
      usage: "From this lesson's word list: responses during conversations.",
    },
    {
      term: "Nauyon ako ha imo",
      meaning: "I agree with you",
      pronunciation: "na-u-yon a-ko ha i-mo",
      usage: "From this lesson's word list: responses during conversations.",
      example: [
        {
          speaker: "A",
          text: "Nauyon ako ha imo.",
          translation: "I agree with you.",
        },
        {
          speaker: "B",
          text: "Importante liwat nga magpadayon kita ha pag-aram.",
          translation: "It is also important that we continue learning.",
        },
      ],
    },
    {
      term: "Diri ako nauyon ha imo",
      meaning: "I do not agree with you",
      pronunciation: "di-ri a-ko na-u-yon ha i-mo",
      usage: "From this lesson's word list: responses during conversations.",
    },
    {
      term: "Maupay ito nga ideya",
      meaning: "That is a good idea",
      pronunciation: "ma-u-pay i-to nga i-de-ya",
      usage: "From this lesson's word list: responses during conversations.",
    },
    {
      term: "Nasasabtan ko an imo punto",
      meaning: "I understand your point",
      pronunciation: "na-sa-sab-tan ko an i-mo pun-to",
      usage: "From this lesson's word list: responses during conversations.",
    },
    {
      term: "Salamat ha imo pagpaambit",
      meaning: "Thank you for sharing",
      pronunciation: "sa-la-mat ha i-mo pag-pa-am-bit",
      usage: "From this lesson's word list: responses during conversations.",
    },
    {
      term: "Tugoti ako nga magsaysay",
      meaning: "Let me explain",
      pronunciation: "tu-go-ti a-ko nga mag-say-say",
      usage: "From this lesson's word list: responses during conversations.",
    },
  ],
  greetings: [
    {
      term: "Opinyon",
      meaning: "Opinion",
      pronunciation: "o-pin-yon",
      usage: "An expression for giving opinions.",
      example: [
        {
          speaker: "A",
          text: "Tungod kay nakakagbinuligay kami kon may diri nasasabtan.",
          translation: "Because we can help one another when something is not understood.",
        },
        {
          speaker: "B",
          text: "Nasasabtan ko an imo opinyon, pero mas karuyag ko an pag-adal nga ako la.",
          translation: "I understand your opinion, but I prefer studying alone.",
        },
      ],
    },
    {
      term: "Hunahuna",
      meaning: "Thought / Idea",
      pronunciation: "hu-na-hu-na",
      usage: "An expression for giving opinions.",
    },
    {
      term: "Para ha akon",
      meaning: "In my opinion",
      pronunciation: "pa-ra ha a-kon",
      usage: "An expression for giving opinions.",
      example: [
        {
          speaker: "A",
          text: "Para ha akon, mas maupay an pag-adal upod an mga sangkay.",
          translation: "In my opinion, studying with friends is better.",
        },
        {
          speaker: "B",
          text: "Kay ano man?",
          translation: "Why?",
        },
      ],
    },
    {
      term: "Ha akon paghunahuna",
      meaning: "In my understanding / thinking",
      pronunciation: "ha a-kon pag-hu-na-hu-na",
      usage: "An expression for giving opinions.",
    },
    {
      term: "Para ha akon / Naghuhunahuna ako nga...",
      meaning: "I think",
      pronunciation: "pa-ra ha a-kon / nag-hu-hu-na-hu-na a-ko nga",
      usage: "An expression for giving opinions.",
      example: [
        {
          speaker: "A",
          text: "Para ha akon, mas maupay an pag-adal upod an mga sangkay.",
          translation: "In my opinion, studying with friends is better.",
        },
        {
          speaker: "B",
          text: "Kay ano man?",
          translation: "Why?",
        },
      ],
    },
    {
      term: "Natoo ako nga...",
      meaning: "I believe",
      pronunciation: "na-to-o a-ko nga",
      usage: "An expression for giving opinions.",
      example: [
        {
          speaker: "",
          text: "Natoo ako nga importante an edukasyon.",
          translation: "I believe that education is important.",
        },
      ],
    },
    {
      term: "Nauyon ako",
      meaning: "I agree",
      pronunciation: "na-u-yon a-ko",
      usage: "An expression for giving opinions.",
      example: [
        {
          speaker: "A",
          text: "Tungod kay nakakabulig ini ha aton kabubuwason.",
          translation: "Because it helps our future.",
        },
        {
          speaker: "B",
          text: "Nauyon ako ha imo.",
          translation: "I agree with you.",
        },
      ],
    },
    {
      term: "Diri ako nauyon",
      meaning: "I disagree",
      pronunciation: "di-ri a-ko na-u-yon",
      usage: "An expression for giving opinions.",
      example: [
        {
          speaker: "",
          text: "Diri ako nauyon hito nga ideya.",
          translation: "I disagree with that idea.",
        },
      ],
    },
    {
      term: "Mas karuyag ko",
      meaning: "I prefer",
      pronunciation: "mas ka-ru-yag ko",
      usage: "An expression for giving opinions.",
      example: [
        {
          speaker: "A",
          text: "Nasasabtan ko an imo opinyon, pero mas karuyag ko an pag-adal nga ako la.",
          translation: "I understand your opinion, but I prefer studying alone.",
        },
        {
          speaker: "B",
          text: "Kay ano nga mas karuyag mo ito?",
          translation: "Why do you prefer that?",
        },
      ],
    },
    {
      term: "Karuyag ko",
      meaning: "I like",
      pronunciation: "ka-ru-yag ko",
      usage: "An expression for giving opinions.",
      example: [
        {
          speaker: "A",
          text: "Tungod kay nakakagbinuligay kami kon may diri nasasabtan.",
          translation: "Because we can help one another when something is not understood.",
        },
        {
          speaker: "B",
          text: "Nasasabtan ko an imo opinyon, pero mas karuyag ko an pag-adal nga ako la.",
          translation: "I understand your opinion, but I prefer studying alone.",
        },
      ],
    },
    {
      term: "Diri ko karuyag",
      meaning: "I do not like",
      pronunciation: "di-ri ko ka-ru-yag",
      usage: "An expression for giving opinions.",
      example: [
        {
          speaker: "",
          text: "Diri ko karuyag ini nga ideya.",
          translation: "I do not like this idea.",
        },
      ],
    },
    {
      term: "Tinuod ini",
      meaning: "It is true",
      pronunciation: "ti-nu-od i-ni",
      usage: "An expression for giving opinions.",
    },
    {
      term: "Husto ito",
      meaning: "That is correct",
      pronunciation: "hus-to i-to",
      usage: "An expression for giving opinions.",
    },
    {
      term: "Bangin",
      meaning: "Perhaps / Maybe",
      pronunciation: "ba-ngin",
      usage: "An expression for giving opinions.",
    },
    {
      term: "Tinuod?",
      meaning: "Really?",
      pronunciation: "ti-nu-od",
      usage: "From this lesson's word list: responses during conversations.",
      example: [
        {
          speaker: "A",
          text: "Importante liwat nga magpadayon kita ha pag-aram.",
          translation: "It is also important that we continue learning.",
        },
        {
          speaker: "B",
          text: "Tinuod. Damo pa kita hin mahimo nga mahibaroan.",
          translation: "True. There are still many things we can learn.",
        },
      ],
    },
    {
      term: "Amo ba?",
      meaning: "Is that so?",
      pronunciation: "a-mo ba",
      usage: "From this lesson's word list: responses during conversations.",
    },
    {
      term: "Nasasabtan ko",
      meaning: "I understand",
      pronunciation: "na-sa-sab-tan ko",
      usage: "From this lesson's word list: responses during conversations.",
      example: [
        {
          speaker: "A",
          text: "Tungod kay nakakagbinuligay kami kon may diri nasasabtan.",
          translation: "Because we can help one another when something is not understood.",
        },
        {
          speaker: "B",
          text: "Nasasabtan ko an imo opinyon, pero mas karuyag ko an pag-adal nga ako la.",
          translation: "I understand your opinion, but I prefer studying alone.",
        },
      ],
    },
    {
      term: "Diri ko nasasabtan",
      meaning: "I do not understand",
      pronunciation: "di-ri ko na-sa-sab-tan",
      usage: "From this lesson's word list: responses during conversations.",
    },
    {
      term: "Nauyon ako ha imo",
      meaning: "I agree with you",
      pronunciation: "na-u-yon a-ko ha i-mo",
      usage: "From this lesson's word list: responses during conversations.",
      example: [
        {
          speaker: "A",
          text: "Nauyon ako ha imo.",
          translation: "I agree with you.",
        },
        {
          speaker: "B",
          text: "Importante liwat nga magpadayon kita ha pag-aram.",
          translation: "It is also important that we continue learning.",
        },
      ],
    },
    {
      term: "Diri ako nauyon ha imo",
      meaning: "I do not agree with you",
      pronunciation: "di-ri a-ko na-u-yon ha i-mo",
      usage: "From this lesson's word list: responses during conversations.",
    },
    {
      term: "Maupay ito nga ideya",
      meaning: "That is a good idea",
      pronunciation: "ma-u-pay i-to nga i-de-ya",
      usage: "From this lesson's word list: responses during conversations.",
    },
    {
      term: "Nasasabtan ko an imo punto",
      meaning: "I understand your point",
      pronunciation: "na-sa-sab-tan ko an i-mo pun-to",
      usage: "From this lesson's word list: responses during conversations.",
    },
    {
      term: "Salamat ha imo pagpaambit",
      meaning: "Thank you for sharing",
      pronunciation: "sa-la-mat ha i-mo pag-pa-am-bit",
      usage: "From this lesson's word list: responses during conversations.",
    },
    {
      term: "Tugoti ako nga magsaysay",
      meaning: "Let me explain",
      pronunciation: "tu-go-ti a-ko nga mag-say-say",
      usage: "From this lesson's word list: responses during conversations.",
    },
  ],
  patterns: [
    {
      label: "Pattern 1: Explaining the Reasons Behind Your Opinions",
      pattern: "Opinion + Reason",
      examples: [
        "Para ha akon, importante ini.",
        "Tungod kay importante ini.",
      ],
    },
    {
      label: "Pattern 2: Giving an Opinion",
      pattern: "Para ha akon, + Opinion.",
      examples: [
        "Para ha akon, maupay ini.",
        "Para ha akon, importante ini.",
      ],
    },
    {
      label: "Pattern 3: Giving a Reason",
      pattern: "Tungod kay + Reason.",
      examples: [
        "Tungod kay importante ini.",
        "Tungod kay mapulsanon ini.",
        "Tungod kay makuri ini.",
      ],
    },
  ],
  sentences: [
    {
      text: "Para ha akon, maupay ini.",
      meaning: "In my opinion, this is good.",
    },
    {
      text: "Para ha akon, importante ini.",
      meaning: "I think this is important.",
    },
    {
      text: "Natoo ako nga importante an edukasyon.",
      meaning: "I believe that education is important.",
    },
    {
      text: "Para ha akon, makapainteres ini nga buruhaton.",
      meaning: "I think this activity is interesting.",
    },
    {
      text: "Mas karuyag ko an pag-adal ha balay.",
      meaning: "I prefer studying at home.",
    },
    {
      text: "Karuyag ko ini nga ideya.",
      meaning: "I like this idea.",
    },
    {
      text: "Diri ko karuyag ini nga ideya.",
      meaning: "I do not like this idea.",
    },
    {
      text: "Nalilipay ako.",
      meaning: "I am happy.",
    },
    {
      text: "Nasusubo ako.",
      meaning: "I am sad.",
    },
    {
      text: "Nasisina ako.",
      meaning: "I am angry.",
    },
    {
      text: "Nahahadlok ako.",
      meaning: "I am afraid.",
    },
    {
      text: "Nabababaraka ako.",
      meaning: "I am worried.",
    },
    {
      text: "Eksitado ako.",
      meaning: "I am excited.",
    },
    {
      text: "Nahipausa ako.",
      meaning: "I am surprised.",
    },
    {
      text: "Kapoy ako.",
      meaning: "I am tired.",
    },
    {
      text: "Kinukulbaan ako.",
      meaning: "I am nervous.",
    },
    {
      text: "Mapasalamaton ako.",
      meaning: "I am thankful.",
    },
    {
      text: "Nauyon ako.",
      meaning: "I agree.",
    },
    {
      text: "Diri ako nauyon.",
      meaning: "I disagree.",
    },
    {
      text: "Nauyon ako ha imo opinyon.",
      meaning: "I agree with your opinion.",
    },
    {
      text: "Nasasabtan ko an imo opinyon.",
      meaning: "I understand your opinion.",
    },
    {
      text: "Maupay ito nga punto.",
      meaning: "That is a good point.",
    },
    {
      text: "Iba an akon opinyon.",
      meaning: "I have a different opinion.",
    },
    {
      text: "Ginrirespeto ko an imo opinyon.",
      meaning: "I respect your opinion.",
    },
    {
      text: "Magkaiba an aton mga opinyon.",
      meaning: "We have different opinions.",
    },
    {
      text: "Tungod kay importante ini.",
      meaning: "Because it is important.",
    },
    {
      text: "Tungod kay mapulsanon ini.",
      meaning: "Because it is helpful.",
    },
    {
      text: "Tungod kay makuri ini.",
      meaning: "Because it is difficult.",
    },
    {
      text: "Tungod kay nalilipay ako hini.",
      meaning: "Because I enjoy it.",
    },
    {
      text: "Tungod kay kinahanglan ko ini.",
      meaning: "Because I need it.",
    },
    {
      text: "Amo ito an akon rason.",
      meaning: "That is my reason.",
    },
    {
      text: "May rason ako kon kay ano nga nasiring ako hito.",
      meaning: "I have a reason for saying that.",
    },
    {
      text: "Para ha akon, importante an edukasyon.",
      meaning: "In my opinion, education is important.",
    },
    {
      text: "Para ha akon, makuri ini nga buruhaton.",
      meaning: "In my opinion, this activity is difficult.",
    },
    {
      text: "Para ha akon, mas maupay an pagbasa hin libro.",
      meaning: "In my opinion, reading books is better.",
    },
    {
      text: "Nalilipay ako ha akon pamilya.",
      meaning: "I am happy with my family.",
    },
    {
      text: "Nasusubo ako tungod han nahitabo.",
      meaning: "I am sad because of what happened.",
    },
    {
      text: "Nasisina ako tungod han problema.",
      meaning: "I am angry because of the problem.",
    },
    {
      text: "Nabababaraka ako ha akon eksam.",
      meaning: "I am worried about my examination.",
    },
    {
      text: "Nahahadlok ako ha makusog nga bagyo.",
      meaning: "I am afraid of the strong storm.",
    },
    {
      text: "Nalilipay ako nga nakabulig ako.",
      meaning: "I am happy that I was able to help.",
    },
    {
      text: "Diri ako nauyon hito nga ideya.",
      meaning: "I disagree with that idea.",
    },
    {
      text: "Iba an akon paghunahuna mahitungod hini.",
      meaning: "I think differently about this.",
    },
    {
      text: "Karuyag ko magbasa kay makalilipay ini.",
      meaning: "I like reading because it is enjoyable.",
    },
    {
      text: "Importante an edukasyon tungod kay nakakabulig ini ha kabubuwason.",
      meaning: "Education is important because it helps with the future.",
    },
    {
      text: "Nalilipay ako tungod kay nakaupod ko an akon pamilya.",
      meaning: "I am happy because I spent time with my family.",
    },
    {
      text: "Makuri ini kay damo an kinahanglan buhaton.",
      meaning: "This is difficult because there are many things to do.",
    },
  ],
  conversations: [
    {
      title: "Conversation 1: Sharing an Opinion About Education",
      situation: "Two classmates discuss the importance of education.",
      lines: [
        {
          speaker: "Ana",
          text: "Para ha imo, importante ba an edukasyon?",
          translation: "In your opinion, is education important?",
        },
        {
          speaker: "Ben",
          text: "Oo, importante gud ini.",
          translation: "Yes, it is very important.",
        },
        {
          speaker: "Ana",
          text: "Kay ano nga importante ini para ha imo?",
          translation: "Why is it important to you?",
        },
        {
          speaker: "Ben",
          text: "Tungod kay nakakabulig ini ha aton kabubuwason.",
          translation: "Because it helps our future.",
        },
        {
          speaker: "Ana",
          text: "Nauyon ako ha imo.",
          translation: "I agree with you.",
        },
        {
          speaker: "Ben",
          text: "Importante liwat nga magpadayon kita ha pag-aram.",
          translation: "It is also important that we continue learning.",
        },
        {
          speaker: "Ana",
          text: "Tinuod. Damo pa kita hin mahimo nga mahibaroan.",
          translation: "True. There are still many things we can learn.",
        },
      ],
    },
    {
      title: "Conversation 2: Expressing Feelings",
      situation: "A friend asks another friend how they feel after completing a difficult school project.",
      lines: [
        {
          speaker: "Mark",
          text: "Kumusta ka yana?",
          translation: "How are you today?",
        },
        {
          speaker: "Leo",
          text: "Nalilipay ako kay natapos na namon an proyekto.",
          translation: "I am happy because we have finished the project.",
        },
        {
          speaker: "Mark",
          text: "Makuri ba an iyo proyekto?",
          translation: "Was your project difficult?",
        },
        {
          speaker: "Leo",
          text: "Oo, makuri gud, pero damu kami hin nahibaroan.",
          translation: "Yes, it was difficult, but we learned a lot.",
        },
        {
          speaker: "Mark",
          text: "Nalilipay ako para ha iyo.",
          translation: "I am happy for you.",
        },
        {
          speaker: "Leo",
          text: "Salamat. Nalilipay liwat ako kay nagbulig an akon mga sangkay.",
          translation: "Thank you. I am also happy because my friends helped.",
        },
      ],
    },
    {
      title: "Conversation 3: Agreeing and Disagreeing",
      situation: "Two friends discuss whether studying alone or studying with friends is better.",
      lines: [
        {
          speaker: "Ana",
          text: "Para ha akon, mas maupay an pag-adal upod an mga sangkay.",
          translation: "In my opinion, studying with friends is better.",
        },
        {
          speaker: "Ben",
          text: "Kay ano man?",
          translation: "Why?",
        },
        {
          speaker: "Ana",
          text: "Tungod kay nakakagbinuligay kami kon may diri nasasabtan.",
          translation: "Because we can help one another when something is not understood.",
        },
        {
          speaker: "Ben",
          text: "Nasasabtan ko an imo opinyon, pero mas karuyag ko an pag-adal nga ako la.",
          translation: "I understand your opinion, but I prefer studying alone.",
        },
        {
          speaker: "Ana",
          text: "Kay ano nga mas karuyag mo ito?",
          translation: "Why do you prefer that?",
        },
        {
          speaker: "Ben",
          text: "Mas nakakakonsentrar ako kon ako la.",
          translation: "I can concentrate better when I am alone.",
        },
        {
          speaker: "Ana",
          text: "Maupay liwat ito. Magkaiba la an aton paagi han pag-adal.",
          translation: "That is also good. We simply have different ways of studying.",
        },
        {
          speaker: "Ben",
          text: "Oo, importante nga mahibaro kita ha aton kalugaringon nga paagi.",
          translation: "Yes, it is important that we learn in our own ways.",
        },
      ],
    },
  ],
  savedLanguageNotes: [
    {
      title: "A. Expressing Personal Opinions",
      body: [
        "An opinion is a personal belief or viewpoint about a particular subject. When expressing an opinion, you communicate what you think rather than simply stating an objective fact.",
        "A useful expression is Para ha akon, which means \"In my opinion.\"",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Para ha akon, maupay ini.",
            right: "In my opinion, this is good.",
          },
          {
            left: "Para ha akon, importante an edukasyon.",
            right: "In my opinion, education is important.",
          },
          {
            left: "Para ha akon, makuri ini nga buruhaton.",
            right: "In my opinion, this activity is difficult.",
          },
          {
            left: "Para ha akon, mas maupay an pagbasa hin libro.",
            right: "In my opinion, reading books is better.",
          },
        ],
      },
    },
    {
      title: "A. Expressing Personal Opinions",
      body: [
        "You may also use Natoo ako nga... when expressing a belief.",
        "Natoo ako nga importante an pag-aram hin mga yinaknan.",
        "I believe that learning languages is important.",
      ],
    },
    {
      title: "B. Expressing Feelings",
      body: [
        "Feelings communicate how you personally react to an experience or situation.",
        "In Waray, you can use expressions such as Nalilipay ako, Nasusubo ako, and Nasisina ako to describe different emotional experiences.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Nalilipay ako ha akon pamilya.",
            right: "I am happy with my family.",
          },
          {
            left: "Nasusubo ako tungod han nahitabo.",
            right: "I am sad because of what happened.",
          },
          {
            left: "Nasisina ako tungod han problema.",
            right: "I am angry because of the problem.",
          },
          {
            left: "Nabababaraka ako ha akon eksam.",
            right: "I am worried about my examination.",
          },
          {
            left: "Nahahadlok ako ha makusog nga bagyo.",
            right: "I am afraid of the strong storm.",
          },
          {
            left: "Nalilipay ako nga nakabulig ako.",
            right: "I am happy that I was able to help.",
          },
        ],
      },
    },
    {
      title: "B. Expressing Feelings",
      body: [
        "Feelings can also change depending on the situation. Learners should practice explaining not only what they feel but also why they feel that way.",
      ],
    },
    {
      title: "C. Agreeing and Disagreeing Politely",
      body: [
        "During conversations, people may have different opinions. It is important to communicate agreement or disagreement respectfully.",
        "Useful expressions include:",
      ],
      examples: [
        {
          text: "Nauyon ako.",
          meaning: "I agree.",
        },
        {
          text: "Diri ako nauyon.",
          meaning: "I disagree.",
        },
        {
          text: "Nasasabtan ko an imo opinyon.",
          meaning: "I understand your opinion.",
        },
        {
          text: "Iba an akon opinyon.",
          meaning: "I have a different opinion.",
        },
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Nauyon ako ha imo.",
            right: "I agree with you.",
          },
          {
            left: "Diri ako nauyon hito nga ideya.",
            right: "I disagree with that idea.",
          },
          {
            left: "Nasasabtan ko an imo punto.",
            right: "I understand your point.",
          },
          {
            left: "Iba an akon paghunahuna mahitungod hini.",
            right: "I think differently about this.",
          },
        ],
      },
    },
    {
      title: "C. Agreeing and Disagreeing Politely",
      body: [
        "When disagreeing, learners should avoid using expressions that sound unnecessarily harsh. A respectful response can acknowledge the other person's viewpoint before explaining a different opinion.",
      ],
    },
    {
      title: "D. Explaining the Reasons Behind Your Opinions",
      body: [
        "Giving reasons makes an opinion clearer and more meaningful.",
        "The expressions kay and tungod kay can introduce a reason.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Karuyag ko magbasa kay makalilipay ini.",
            right: "I like reading because it is enjoyable.",
          },
          {
            left: "Importante an edukasyon tungod kay nakakabulig ini ha kabubuwason.",
            right: "Education is important because it helps with the future.",
          },
          {
            left: "Nalilipay ako tungod kay nakaupod ko an akon pamilya.",
            right: "I am happy because I spent time with my family.",
          },
          {
            left: "Makuri ini kay damo an kinahanglan buhaton.",
            right: "This is difficult because there are many things to do.",
          },
        ],
      },
    },
    {
      title: "D. Explaining the Reasons Behind Your Opinions",
      body: [
        "A useful sentence pattern is:",
        "Opinion + Reason",
        "Para ha akon, importante an pag-adal hin Waray tungod kay bahin ini han aton kultura.",
        "In my opinion, learning Waray is important because it is part of our culture.",
      ],
    },
    {
      title: "E. Combining Opinions and Feelings in Conversations",
      body: [
        "In longer conversations, people often express an opinion, describe a feeling, and explain their reasons.",
        "Para ha akon, makalilipay an pag-adal hin bag-o nga yinaknan. Nalilipay ako kon may bag-o ako nga nahibabaroan tungod kay nakakabulig ini ha akon pakigkomunikar ha iba nga tawo.",
        "In my opinion, learning a new language is enjoyable. I feel happy when I learn something new because it helps me communicate with other people.",
        "Learners should practice combining these expressions to produce more complete and meaningful responses.",
      ],
    },
    {
      title: "A. Expressing Opinions",
      body: [
        "The following expressions can help learners communicate their thoughts and feelings.",
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
