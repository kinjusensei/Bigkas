import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 23 — imported from "Lesson Plan.pdf", pages 1001–1020.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
// Fields not given by the plan are INFERRED from this lesson's own content and
// listed in docs/waray-inferred-keys.md: usage, example, pattern, arrange, speaking phrase, respelling, target pitch and mood, example situation, pronunciation tip, badge description, completion requirement.
// The practice answers are INFERRED drafts, not from the PDF. See
// docs/waray-draft-answer-keys.md for each answer and how it was found.

export const warayLesson23: StructuredLesson = {
  lessonId: "waray_23",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 23,
  title: "Agreeing and Disagreeing",
  level: "Advanced",
  unit: "ADVANCED COMMUNICATION",
  estimatedDuration: "45–60 minutes",
  prerequisite: "Lesson 22 – Giving Explanations and Reasons",
  languageVariety: "Expressing agreement, disagreement, opinions, preferences, and respectful responses during conversations and discussions.",
  intro: [
    "In everyday conversations, people have different opinions, preferences, and beliefs. Sometimes, we agree with what another person says. At other times, we may have a different point of view.",
    "Learning how to agree and disagree respectfully is an important communication skill. It allows people to participate in discussions, explain their opinions, and consider different perspectives without creating unnecessary conflict.",
    "In this lesson, learners will practice Waray expressions for showing agreement, expressing disagreement, asking for clarification, and supporting their opinions with reasons.",
    "Imagine that your classmates are discussing whether students should have more time for extracurricular activities.",
    "One student might say:",
    "Para ha akon, importante an mga buruhaton ha eskwelahan. For me, school activities are important.",
    "Another student may agree:",
    "Nauyon ako ha imo. I agree with you.",
    "However, someone else may have a different opinion:",
    "Diri ako bug-os nga nauyon ha imo. I do not completely agree with you.",
    "Both responses are acceptable ways to participate in a discussion. The important thing is to express your thoughts clearly and respectfully.",
    "In this lesson, you will learn how to communicate these responses naturally in Waray.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify common Waray expressions used to agree or disagree.",
    "Express agreement with another person's statement or opinion.",
    "Politely communicate a different opinion.",
    "Provide reasons to support their agreement or disagreement.",
    "Respond appropriately to different viewpoints during conversations.",
    "Participate in short discussions using appropriate Waray expressions.",
  ],
  assessment: {
    instructions: "Choose the correct answer for each question.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What does \"Nauyon ako ha imo\" mean?",
        options: [
          {
            key: "A",
            text: "I disagree with you.",
          },
          {
            key: "B",
            text: "I agree with you.",
          },
          {
            key: "C",
            text: "I do not understand you.",
          },
          {
            key: "D",
            text: "I am asking you.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "Which expression means \"I disagree\"?",
        options: [
          {
            key: "A",
            text: "Husto ka.",
          },
          {
            key: "B",
            text: "Tinuod ito.",
          },
          {
            key: "C",
            text: "Diri ako nauyon.",
          },
          {
            key: "D",
            text: "Amo gud.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 3,
        prompt: "What does \"Iba an akon panhunahuna\" mean?",
        options: [
          {
            key: "A",
            text: "I have a different opinion.",
          },
          {
            key: "B",
            text: "I have the same opinion.",
          },
          {
            key: "C",
            text: "I understand your explanation.",
          },
          {
            key: "D",
            text: "I agree completely.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 4,
        prompt: "Which expression is appropriate when politely disagreeing?",
        options: [
          {
            key: "A",
            text: "Diri ka maaram.",
          },
          {
            key: "B",
            text: "Nasasabtan ko, pero iba an akon panhunahuna.",
          },
          {
            key: "C",
            text: "Diri ko karuyag mamati.",
          },
          {
            key: "D",
            text: "Sayop ka gud.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 5,
        prompt: "What does \"Husto ka\" mean?",
        options: [
          {
            key: "A",
            text: "You are wrong.",
          },
          {
            key: "B",
            text: "You are confused.",
          },
          {
            key: "C",
            text: "You are right.",
          },
          {
            key: "D",
            text: "You are late.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 6,
        prompt: "Which word means \"opinion\"?",
        options: [
          {
            key: "A",
            text: "Rason",
          },
          {
            key: "B",
            text: "Opinyon",
          },
          {
            key: "C",
            text: "Resulta",
          },
          {
            key: "D",
            text: "Hinungdan",
          },
        ],
        answerKey: "B",
      },
      {
        id: 7,
        prompt: "Which sentence expresses agreement with a reason?",
        options: [
          {
            key: "A",
            text: "Diri ako nauyon hito.",
          },
          {
            key: "B",
            text: "Iba an akon panhunahuna.",
          },
          {
            key: "C",
            text: "Nauyon ako kay nakakabulig ito ha mga estudyante.",
          },
          {
            key: "D",
            text: "Diri ko nasasabtan.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 8,
        prompt: "What is the purpose of explaining your reason when agreeing or disagreeing?",
        options: [
          {
            key: "A",
            text: "To make the conversation longer without purpose.",
          },
          {
            key: "B",
            text: "To help others understand your viewpoint.",
          },
          {
            key: "C",
            text: "To prevent others from speaking.",
          },
          {
            key: "D",
            text: "To avoid answering the discussion.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 9,
        prompt: "Which expression means \"I understand your point\"?",
        options: [
          {
            key: "A",
            text: "Nasasabtan ko an imo punto.",
          },
          {
            key: "B",
            text: "Hain an imo balay?",
          },
          {
            key: "C",
            text: "Pira ini?",
          },
          {
            key: "D",
            text: "Ano an imo ngaran?",
          },
        ],
        answerKey: "A",
      },
      {
        id: 10,
        prompt: "What should you do when someone expresses an opinion different from yours?",
        options: [
          {
            key: "A",
            text: "Ignore the person.",
          },
          {
            key: "B",
            text: "Insult the person's opinion.",
          },
          {
            key: "C",
            text: "Listen and respond respectfully.",
          },
          {
            key: "D",
            text: "Stop the discussion immediately.",
          },
        ],
        answerKey: "C",
      },
    ],
  },
  extraActivities: [
    {
      title: "Translate into Waray",
      kind: "translate",
      instructions: "Translate the following English sentences into Waray.",
      items: [
        "I agree with your opinion.",
        "I do not agree with that idea.",
        "I understand your point, but I have a different opinion.",
        "In my opinion, learning languages is important.",
        "I agree because it helps students.",
      ],
    },
    {
      title: "Express Your Opinion",
      kind: "open",
      instructions: "Read each statement and write a Waray response. You may agree or disagree, but you must provide a reason.",
      items: [
        "Learning a local language is important.",
        "Students should use technology in their studies.",
        "Communities should organize environmental activities.",
        "Reading books is better than spending too much time on social media.",
        "Everyone should learn at least one Philippine language aside from Filipino.",
      ],
      note: "Your response should include:\n• An expression of agreement or disagreement.\n• At least one reason.\n• At least one supporting example or detail.",
    },
  ],
  matchActivity: {
    title: "Vocabulary Matching",
    instructions: "Match each Waray expression with its correct English meaning.",
    pairs: [
      {
        id: "1",
        term: "Nauyon ako",
        answer: "I agree",
      },
      {
        id: "2",
        term: "Diri ako nauyon",
        answer: "I disagree",
      },
      {
        id: "3",
        term: "Iba an akon panhunahuna",
        answer: "I have a different opinion",
      },
      {
        id: "4",
        term: "Husto ka",
        answer: "You are right",
      },
      {
        id: "5",
        term: "Opinyon",
        answer: "Opinion",
      },
    ],
  },
  choiceActivity: {
    title: "Identify the Response",
    instructions: "Read each statement and identify whether the response expresses agreement or disagreement.",
    questions: [
      {
        id: 1,
        prompt: "Nauyon ako ha imo.",
        options: [
          {
            key: "A",
            text: "Agreement",
          },
          {
            key: "B",
            text: "Disagreement",
          },
        ],
        answerKey: "A",
      },
      {
        id: 2,
        prompt: "Diri ako nauyon hito.",
        options: [
          {
            key: "A",
            text: "Agreement",
          },
          {
            key: "B",
            text: "Disagreement",
          },
        ],
        answerKey: "B",
      },
      {
        id: 3,
        prompt: "Husto ka.",
        options: [
          {
            key: "A",
            text: "Agreement",
          },
          {
            key: "B",
            text: "Disagreement",
          },
        ],
        answerKey: "A",
      },
      {
        id: 4,
        prompt: "Iba an akon panhunahuna.",
        options: [
          {
            key: "A",
            text: "Agreement",
          },
          {
            key: "B",
            text: "Disagreement",
          },
        ],
        answerKey: "B",
      },
      {
        id: 5,
        prompt: "Tinuod ito.",
        options: [
          {
            key: "A",
            text: "Agreement",
          },
          {
            key: "B",
            text: "Disagreement",
          },
        ],
        answerKey: "A",
      },
      {
        id: 6,
        prompt: "Diri ako bug-os nga nauyon.",
        options: [
          {
            key: "A",
            text: "Agreement",
          },
          {
            key: "B",
            text: "Disagreement",
          },
        ],
        answerKey: "B",
      },
      {
        id: 7,
        prompt: "Amo gud ito an akon panhunahuna.",
        options: [
          {
            key: "A",
            text: "Agreement",
          },
          {
            key: "B",
            text: "Disagreement",
          },
        ],
        answerKey: "A",
      },
      {
        id: 8,
        prompt: "Nasasabtan ko, pero iba an akon pagtan-aw hito.",
        options: [
          {
            key: "A",
            text: "Agreement",
          },
          {
            key: "B",
            text: "Disagreement",
          },
        ],
        answerKey: "B",
      },
    ],
  },
  fillInBlanks: {
    title: "Complete the Sentences",
    instructions: "Choose the correct expression from the word bank.",
    items: [
      {
        id: "1",
        sentence: "__________, importante an pag-aram hin mga yinaknan.",
        answer: "Para ha akon",
        title: "Complete the Sentences",
        instructions: "Choose the correct expression from the word bank.",
        wordBank: [
          "Nauyon ako",
          "Diri ako nauyon",
          "kay",
          "Para ha akon",
          "Pananglitan",
        ],
      },
      {
        id: "2",
        sentence: "__________ ha imo kay husto an imo ginsiring.",
        answer: "Nauyon ako",
        title: "Complete the Sentences",
        instructions: "Choose the correct expression from the word bank.",
        wordBank: [
          "Nauyon ako",
          "Diri ako nauyon",
          "kay",
          "Para ha akon",
          "Pananglitan",
        ],
      },
      {
        id: "3",
        sentence: "__________ hito nga ideya kay may iba pa nga solusyon.",
        answer: "Diri ako nauyon",
        title: "Complete the Sentences",
        instructions: "Choose the correct expression from the word bank.",
        wordBank: [
          "Nauyon ako",
          "Diri ako nauyon",
          "kay",
          "Para ha akon",
          "Pananglitan",
        ],
      },
      {
        id: "4",
        sentence: "Importante an pagpraktis __________ nakakabulig ito ha pagpauswag han aton abilidad.",
        answer: "kay",
        title: "Complete the Sentences",
        instructions: "Choose the correct expression from the word bank.",
        wordBank: [
          "Nauyon ako",
          "Diri ako nauyon",
          "kay",
          "Para ha akon",
          "Pananglitan",
        ],
      },
      {
        id: "5",
        sentence: "__________, mahimo kita magbasa hin mga libro kada adlaw.",
        answer: "Pananglitan",
        title: "Complete the Sentences",
        instructions: "Choose the correct expression from the word bank.",
        wordBank: [
          "Nauyon ako",
          "Diri ako nauyon",
          "kay",
          "Para ha akon",
          "Pananglitan",
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
      name: "Respectful Communicator Badge",
      description: "Awarded after successfully completing Lesson 23.",
    },
    completionRequirement: "Obtain at least 70% in the lesson assessment. Learners may repeat the activities and assessment if they do not meet the requirement.",
  },
  expectedOutcomes: [
    "Before proceeding to the next lesson, learners should be able to:",
    "Recognize common expressions of agreement.",
    "Recognize common expressions of disagreement.",
    "Express agreement with another person's opinion.",
    "Politely communicate a different viewpoint.",
    "Provide reasons to support their opinions.",
    "Participate in short discussions using Waray.",
    "Achieve at least 70% in the lesson assessment.",
  ],
  arrangeWords: {
    title: "Arrange the Words",
    instructions: "Arrange the words to form a correct Waray sentence.",
    items: [
      {
        id: "1",
        words: [
          "ha",
          "opinyon",
          "Nauyon",
          "ako",
          "imo",
        ],
        answer: [
          "Nauyon",
          "ako",
          "ha",
          "imo",
          "opinyon",
        ],
        display: "Nauyon ako ha imo opinyon.",
      },
      {
        id: "2",
        words: [
          "hito",
          "mahitungod",
          "Husto",
          "ka",
        ],
        answer: [
          "Husto",
          "ka",
          "mahitungod",
          "hito",
        ],
        display: "Husto ka mahitungod hito.",
      },
      {
        id: "3",
        words: [
          "akon",
          "liwat",
          "importante",
          "ito",
          "Para",
          "ha",
        ],
        answer: [
          "Para",
          "ha",
          "akon",
          "importante",
          "liwat",
          "ito",
        ],
        display: "Para ha akon, importante liwat ito.",
      },
      {
        id: "4",
        words: [
          "panhunahuna",
          "an",
          "akon",
          "Pariho",
        ],
        answer: [
          "Pariho",
          "an",
          "akon",
          "panhunahuna",
        ],
        display: "Pariho an akon panhunahuna.",
      },
      {
        id: "5",
        words: [
          "Nasuporta",
          "ako",
          "imo",
          "ha",
          "suhestyon",
        ],
        answer: [
          "Nasuporta",
          "ako",
          "ha",
          "imo",
          "suhestyon",
        ],
        display: "Nasuporta ako ha imo suhestyon.",
      },
    ],
  },
  speaking: {
    title: "Speaking Practice",
    instructions: "Read the following sentences aloud.",
    note: "Learners should listen to the model pronunciation before recording their own voice.",
    practiceLessonId: "waray_23",
    phrases: [
      {
        id: "1",
        text: "Nauyon ako ha imo opinyon.",
        respelling: "na-u-yon a-ko ha i-mo o-pin-yon",
        meaning: "I agree with your opinion.",
      },
      {
        id: "2",
        text: "Tinuod ito.",
        respelling: "ti-nu-od i-to",
        meaning: "That is true.",
      },
      {
        id: "3",
        text: "Pariho an akon panhunahuna.",
        respelling: "pa-ri-ho an a-kon pan-hu-na-hu-na",
        meaning: "I have the same opinion.",
      },
      {
        id: "4",
        text: "Diri ako nauyon hito nga ideya.",
        respelling: "di-ri a-ko na-u-yon hi-to nga i-de-ya",
        meaning: "I do not agree with that idea.",
      },
      {
        id: "5",
        text: "Bangin diri ito pirme tinuod.",
        respelling: "ba-ngin di-ri i-to peer-meh ti-nu-od",
        meaning: "That may not always be true.",
      },
      {
        id: "6",
        text: "Nauyon ako hito nga ideya.",
        respelling: "na-u-yon a-ko hi-to nga i-de-ya",
        meaning: "I agree with that idea.",
      },
      {
        id: "7",
        text: "Diri ako nauyon hito.",
        respelling: "di-ri a-ko na-u-yon hi-to",
        meaning: "I do not agree with that.",
      },
    ],
  },
  exampleSituation: {
    description: "Imagine this situation from the lesson: Discussing the Importance of Learning Languages.",
    lead: "You can begin by saying:",
    line: "Para ha imo, importante ba an pag-aram hin mga yinaknan ha Pilipinas?",
    translation: "In your opinion, is learning Philippine languages important?",
  },
  vocabularyIntro: "Learn the following words and expressions before proceeding to the activities.",
  pronunciationTip: "Read each syllable clearly. Avoid rushing through longer expressions.",
  selfIntroIntro: "Use these patterns and phrases from the lesson.",
  vocabulary: [
    {
      term: "Nauyon ako",
      meaning: "I agree",
      pronunciation: "na-u-yon a-ko",
      usage: "An expression of agreement.",
      example: [
        {
          speaker: "A",
          text: "Husto ka. Pero may mga bentaha liwat an online learning.",
          translation: "You are right. But online learning also has advantages.",
        },
        {
          speaker: "B",
          text: "Nauyon ako hito. Para ha akon, kinahanglan tagdon an kahimtang han kada estudyante.",
          translation: "I agree with that. In my opinion, we need to consider each student's situation.",
        },
      ],
    },
    {
      term: "Nauyon ako ha imo",
      meaning: "I agree with you",
      pronunciation: "na-u-yon a-ko ha i-mo",
      usage: "An expression of agreement.",
      example: [
        {
          speaker: "A",
          text: "Para ha akon, kinahanglan mag-organisa kita hin tree-planting activity ha aton komunidad.",
          translation: "In my opinion, we should organize a tree-planting activity in our community.",
        },
        {
          speaker: "B",
          text: "Nauyon ako ha imo ideya.",
          translation: "I agree with your idea.",
        },
      ],
    },
    {
      term: "Husto ito",
      meaning: "That is correct",
      pronunciation: "hus-to i-to",
      usage: "An expression of agreement.",
    },
    {
      term: "Tinuod ito",
      meaning: "That is true",
      pronunciation: "ti-nu-od i-to",
      usage: "An expression of agreement.",
      example: [
        {
          speaker: "A",
          text: "Kay nakakabulig ito ha aton pakigkomunikar ha iba nga mga tawo.",
          translation: "Because it helps us communicate with other people.",
        },
        {
          speaker: "B",
          text: "Tinuod ito. Kinahanglan naton tipigan an aton mga yinaknan.",
          translation: "That is true. We need to preserve our languages.",
        },
      ],
    },
    {
      term: "Amo gud",
      meaning: "Exactly",
      pronunciation: "a-mo gud",
      usage: "An expression of agreement.",
      example: [
        {
          speaker: "A",
          text: "Tinuod ito. Kinahanglan naton tipigan an aton mga yinaknan.",
          translation: "That is true. We need to preserve our languages.",
        },
        {
          speaker: "B",
          text: "Amo gud.",
          translation: "Exactly.",
        },
      ],
    },
    {
      term: "Syempre",
      meaning: "Of course",
      pronunciation: "syem-pre",
      usage: "An expression of agreement.",
      audioUrl: require("../../assets/audio/Lesson Waray/syempre.aac"),
    },
    {
      term: "Amo liwat an akon panhunahuna",
      meaning: "I think so too",
      pronunciation: "a-mo li-wat an a-kon pan-hu-na-hu-na",
      usage: "An expression of agreement.",
    },
    {
      term: "Husto ka",
      meaning: "You are right",
      pronunciation: "hus-to ka",
      usage: "An expression of agreement.",
      example: [
        {
          speaker: "A",
          text: "Kay may mga estudyante nga waray maopay nga koneksyon ha internet.",
          translation: "Because some students do not have a good internet connection.",
        },
        {
          speaker: "B",
          text: "Husto ka. Pero may mga bentaha liwat an online learning.",
          translation: "You are right. But online learning also has advantages.",
        },
      ],
    },
    {
      term: "Pariho an akon panhunahuna",
      meaning: "I have the same opinion",
      pronunciation: "pa-ri-ho an a-kon pan-hu-na-hu-na",
      usage: "An expression of agreement.",
    },
    {
      term: "Nasuporta ako ha imo ideya",
      meaning: "I support your idea",
      pronunciation: "na-su-por-ta a-ko ha i-mo i-de-ya",
      usage: "An expression of agreement.",
    },
    {
      term: "Diri ako nauyon",
      meaning: "I disagree",
      pronunciation: "di-ri a-ko na-u-yon",
      usage: "An expression of disagreement.",
      example: [
        {
          speaker: "",
          text: "Diri ako nauyon hito nga ideya.",
          translation: "I do not agree with that idea.",
        },
      ],
    },
    {
      term: "Diri ako nauyon ha imo",
      meaning: "I do not agree with you",
      pronunciation: "di-ri a-ko na-u-yon ha i-mo",
      usage: "An expression of disagreement.",
    },
    {
      term: "Diri sugad an akon panhunahuna",
      meaning: "I do not think so",
      pronunciation: "di-ri su-gad an a-kon pan-hu-na-hu-na",
      usage: "An expression of disagreement.",
    },
    {
      term: "Iba an akon panhunahuna",
      meaning: "I have a different opinion",
      pronunciation: "i-ba an a-kon pan-hu-na-hu-na",
      usage: "An expression of disagreement.",
      example: [
        {
          speaker: "",
          text: "Nasasabtan ko, pero iba an akon panhunahuna.",
          translation: "I understand, but I have a different opinion.",
        },
      ],
    },
    {
      term: "Diri man kinahanglan nga sugad",
      meaning: "Not necessarily",
      pronunciation: "di-ri man ki-nang-ha-lan nga su-gad",
      usage: "An expression of disagreement.",
    },
    {
      term: "Iba an akon pagtan-aw hito",
      meaning: "I see it differently",
      pronunciation: "i-ba an a-kon pag-ta-naw hi-to",
      usage: "An expression of disagreement.",
      example: [
        {
          speaker: "",
          text: "Nasasabtan ko, pero iba an akon pagtan-aw hito.",
          translation: "I understand, but I see it differently.",
        },
      ],
    },
    {
      term: "Diri pirme nga tinuod ito",
      meaning: "That is not always true",
      pronunciation: "di-ri pir-me nga ti-nu-od i-to",
      usage: "An expression of disagreement.",
    },
    {
      term: "Diri pa ako bug-os nga kombinsido",
      meaning: "I am not completely convinced",
      pronunciation: "di-ri pa a-ko bu-gos nga kom-bin-si-do",
      usage: "An expression of disagreement.",
    },
    {
      term: "Para ha akon",
      meaning: "In my opinion",
      pronunciation: "pa-ra ha a-kon",
      usage: "An expression for respectful discussion.",
      example: [
        {
          speaker: "A",
          text: "Para ha akon, mas masayon an online learning.",
          translation: "In my opinion, online learning is easier.",
        },
        {
          speaker: "B",
          text: "Diri ako bug-os nga nauyon ha imo.",
          translation: "I do not completely agree with you.",
        },
      ],
    },
    {
      term: "Ha akon pagsabot",
      meaning: "In my understanding",
      pronunciation: "ha a-kon pag-sa-bot",
      usage: "An expression for respectful discussion.",
    },
    {
      term: "Nasasabtan ko an imo punto",
      meaning: "I understand your point",
      pronunciation: "na-sa-sab-tan ko an i-mo pun-to",
      usage: "An expression for respectful discussion.",
    },
    {
      term: "Ginrirespeto ko an imo opinyon",
      meaning: "I respect your opinion",
      pronunciation: "gin-ri-res-pe-to ko an i-mo o-pin-yon",
      usage: "An expression for respectful discussion.",
    },
    {
      term: "Mahimo ba ako maghatag han akon opinyon?",
      meaning: "May I share my opinion?",
      pronunciation: "ma-hi-mo ba a-ko mag-ha-tag han a-kon o-pin-yon",
      usage: "An expression for respectful discussion.",
    },
    {
      term: "Tugoti ako nga magsaysay",
      meaning: "Let me explain",
      pronunciation: "tu-go-ti a-ko nga mag-say-say",
      usage: "An expression for respectful discussion.",
    },
    {
      term: "May pakiana ako",
      meaning: "I have a question",
      pronunciation: "may pa-ki-a-na a-ko",
      usage: "An expression for respectful discussion.",
    },
    {
      term: "Ano an imo rason?",
      meaning: "What is your reason?",
      pronunciation: "a-no an i-mo ra-son",
      usage: "An expression for respectful discussion.",
    },
    {
      term: "Nasasabtan ko, pero...",
      meaning: "I understand, but...",
      pronunciation: "na-sa-sab-tan ko pe-ro",
      usage: "An expression for respectful discussion.",
      example: [
        {
          speaker: "",
          text: "Nasasabtan ko, pero iba an akon pagtan-aw hito.",
          translation: "I understand, but I see it differently.",
        },
      ],
    },
    {
      term: "Salamat ha pagpaangbit han imo opinyon",
      meaning: "Thank you for sharing your opinion",
      pronunciation: "sa-la-mat ha pag-pa-ang-bit han i-mo o-pin-yon",
      usage: "An expression for respectful discussion.",
    },
    {
      term: "Opinyon",
      meaning: "Opinion",
      pronunciation: "o-pin-yon",
      usage: "Used in discussions.",
      example: [
        {
          speaker: "",
          text: "Nauyon ako ha imo opinyon.",
          translation: "I agree with your opinion.",
        },
      ],
    },
    {
      term: "Ideya",
      meaning: "Idea",
      pronunciation: "i-de-ya",
      usage: "Used in discussions.",
      example: [
        {
          speaker: "A",
          text: "Nauyon ako ha imo ideya.",
          translation: "I agree with your idea.",
        },
        {
          speaker: "B",
          text: "Kay ano nga nasuporta ka hito?",
          translation: "Why do you support it?",
        },
      ],
    },
    {
      term: "Rason",
      meaning: "Reason",
      pronunciation: "ra-son",
      usage: "Used in discussions.",
      example: [
        {
          speaker: "",
          text: "Usa nga rason amo nga nakakatipid ini hin panahon.",
          translation: "One reason is that it saves time.",
        },
      ],
    },
    {
      term: "Ebidensya",
      meaning: "Evidence",
      pronunciation: "e-bi-den-sya",
      usage: "Used in discussions.",
    },
    {
      term: "Diskusyon",
      meaning: "Discussion",
      pronunciation: "dis-ku-syon",
      usage: "Used in discussions.",
    },
    {
      term: "Pagtan-aw",
      meaning: "Point of view",
      pronunciation: "pag-ta-naw",
      usage: "Used in discussions.",
      example: [
        {
          speaker: "",
          text: "Nasasabtan ko, pero iba an akon pagtan-aw hito.",
          translation: "I understand, but I see it differently.",
        },
      ],
    },
    {
      term: "Pilion",
      meaning: "Choice",
      pronunciation: "pi-li-on",
      usage: "Used in discussions.",
    },
    {
      term: "Kaayohan",
      meaning: "Advantage",
      pronunciation: "ka-a-yo-han",
      usage: "Used in discussions.",
    },
    {
      term: "Kakulangan",
      meaning: "Disadvantage",
      pronunciation: "ka-ku-lang-an",
      usage: "Used in discussions.",
    },
    {
      term: "Desisyon",
      meaning: "Decision",
      pronunciation: "de-sis-yon",
      usage: "Used in discussions.",
    },
  ],
  greetings: [
    {
      term: "Nauyon ako",
      meaning: "I agree",
      pronunciation: "na-u-yon a-ko",
      usage: "An expression of agreement.",
      example: [
        {
          speaker: "A",
          text: "Husto ka. Pero may mga bentaha liwat an online learning.",
          translation: "You are right. But online learning also has advantages.",
        },
        {
          speaker: "B",
          text: "Nauyon ako hito. Para ha akon, kinahanglan tagdon an kahimtang han kada estudyante.",
          translation: "I agree with that. In my opinion, we need to consider each student's situation.",
        },
      ],
    },
    {
      term: "Nauyon ako ha imo",
      meaning: "I agree with you",
      pronunciation: "na-u-yon a-ko ha i-mo",
      usage: "An expression of agreement.",
      example: [
        {
          speaker: "A",
          text: "Para ha akon, kinahanglan mag-organisa kita hin tree-planting activity ha aton komunidad.",
          translation: "In my opinion, we should organize a tree-planting activity in our community.",
        },
        {
          speaker: "B",
          text: "Nauyon ako ha imo ideya.",
          translation: "I agree with your idea.",
        },
      ],
    },
    {
      term: "Husto ito",
      meaning: "That is correct",
      pronunciation: "hus-to i-to",
      usage: "An expression of agreement.",
    },
    {
      term: "Tinuod ito",
      meaning: "That is true",
      pronunciation: "ti-nu-od i-to",
      usage: "An expression of agreement.",
      example: [
        {
          speaker: "A",
          text: "Kay nakakabulig ito ha aton pakigkomunikar ha iba nga mga tawo.",
          translation: "Because it helps us communicate with other people.",
        },
        {
          speaker: "B",
          text: "Tinuod ito. Kinahanglan naton tipigan an aton mga yinaknan.",
          translation: "That is true. We need to preserve our languages.",
        },
      ],
    },
    {
      term: "Amo gud",
      meaning: "Exactly",
      pronunciation: "a-mo gud",
      usage: "An expression of agreement.",
      example: [
        {
          speaker: "A",
          text: "Tinuod ito. Kinahanglan naton tipigan an aton mga yinaknan.",
          translation: "That is true. We need to preserve our languages.",
        },
        {
          speaker: "B",
          text: "Amo gud.",
          translation: "Exactly.",
        },
      ],
    },
    {
      term: "Syempre",
      meaning: "Of course",
      pronunciation: "syem-pre",
      usage: "An expression of agreement.",
      audioUrl: require("../../assets/audio/Lesson Waray/syempre.aac"),
    },
    {
      term: "Amo liwat an akon panhunahuna",
      meaning: "I think so too",
      pronunciation: "a-mo li-wat an a-kon pan-hu-na-hu-na",
      usage: "An expression of agreement.",
    },
    {
      term: "Husto ka",
      meaning: "You are right",
      pronunciation: "hus-to ka",
      usage: "An expression of agreement.",
      example: [
        {
          speaker: "A",
          text: "Kay may mga estudyante nga waray maopay nga koneksyon ha internet.",
          translation: "Because some students do not have a good internet connection.",
        },
        {
          speaker: "B",
          text: "Husto ka. Pero may mga bentaha liwat an online learning.",
          translation: "You are right. But online learning also has advantages.",
        },
      ],
    },
    {
      term: "Pariho an akon panhunahuna",
      meaning: "I have the same opinion",
      pronunciation: "pa-ri-ho an a-kon pan-hu-na-hu-na",
      usage: "An expression of agreement.",
    },
    {
      term: "Nasuporta ako ha imo ideya",
      meaning: "I support your idea",
      pronunciation: "na-su-por-ta a-ko ha i-mo i-de-ya",
      usage: "An expression of agreement.",
    },
    {
      term: "Diri ako nauyon",
      meaning: "I disagree",
      pronunciation: "di-ri a-ko na-u-yon",
      usage: "An expression of disagreement.",
      example: [
        {
          speaker: "",
          text: "Diri ako nauyon hito nga ideya.",
          translation: "I do not agree with that idea.",
        },
      ],
    },
    {
      term: "Diri ako nauyon ha imo",
      meaning: "I do not agree with you",
      pronunciation: "di-ri a-ko na-u-yon ha i-mo",
      usage: "An expression of disagreement.",
    },
    {
      term: "Diri sugad an akon panhunahuna",
      meaning: "I do not think so",
      pronunciation: "di-ri su-gad an a-kon pan-hu-na-hu-na",
      usage: "An expression of disagreement.",
    },
    {
      term: "Iba an akon panhunahuna",
      meaning: "I have a different opinion",
      pronunciation: "i-ba an a-kon pan-hu-na-hu-na",
      usage: "An expression of disagreement.",
      example: [
        {
          speaker: "",
          text: "Nasasabtan ko, pero iba an akon panhunahuna.",
          translation: "I understand, but I have a different opinion.",
        },
      ],
    },
    {
      term: "Diri man kinahanglan nga sugad",
      meaning: "Not necessarily",
      pronunciation: "di-ri man ki-nang-ha-lan nga su-gad",
      usage: "An expression of disagreement.",
    },
    {
      term: "Iba an akon pagtan-aw hito",
      meaning: "I see it differently",
      pronunciation: "i-ba an a-kon pag-ta-naw hi-to",
      usage: "An expression of disagreement.",
      example: [
        {
          speaker: "",
          text: "Nasasabtan ko, pero iba an akon pagtan-aw hito.",
          translation: "I understand, but I see it differently.",
        },
      ],
    },
    {
      term: "Diri pirme nga tinuod ito",
      meaning: "That is not always true",
      pronunciation: "di-ri pir-me nga ti-nu-od i-to",
      usage: "An expression of disagreement.",
    },
    {
      term: "Diri pa ako bug-os nga kombinsido",
      meaning: "I am not completely convinced",
      pronunciation: "di-ri pa a-ko bu-gos nga kom-bin-si-do",
      usage: "An expression of disagreement.",
    },
    {
      term: "Para ha akon",
      meaning: "In my opinion",
      pronunciation: "pa-ra ha a-kon",
      usage: "An expression for respectful discussion.",
      example: [
        {
          speaker: "A",
          text: "Para ha akon, mas masayon an online learning.",
          translation: "In my opinion, online learning is easier.",
        },
        {
          speaker: "B",
          text: "Diri ako bug-os nga nauyon ha imo.",
          translation: "I do not completely agree with you.",
        },
      ],
    },
    {
      term: "Ha akon pagsabot",
      meaning: "In my understanding",
      pronunciation: "ha a-kon pag-sa-bot",
      usage: "An expression for respectful discussion.",
    },
    {
      term: "Nasasabtan ko an imo punto",
      meaning: "I understand your point",
      pronunciation: "na-sa-sab-tan ko an i-mo pun-to",
      usage: "An expression for respectful discussion.",
    },
    {
      term: "Ginrirespeto ko an imo opinyon",
      meaning: "I respect your opinion",
      pronunciation: "gin-ri-res-pe-to ko an i-mo o-pin-yon",
      usage: "An expression for respectful discussion.",
    },
    {
      term: "Mahimo ba ako maghatag han akon opinyon?",
      meaning: "May I share my opinion?",
      pronunciation: "ma-hi-mo ba a-ko mag-ha-tag han a-kon o-pin-yon",
      usage: "An expression for respectful discussion.",
    },
    {
      term: "Tugoti ako nga magsaysay",
      meaning: "Let me explain",
      pronunciation: "tu-go-ti a-ko nga mag-say-say",
      usage: "An expression for respectful discussion.",
    },
    {
      term: "May pakiana ako",
      meaning: "I have a question",
      pronunciation: "may pa-ki-a-na a-ko",
      usage: "An expression for respectful discussion.",
    },
    {
      term: "Ano an imo rason?",
      meaning: "What is your reason?",
      pronunciation: "a-no an i-mo ra-son",
      usage: "An expression for respectful discussion.",
    },
    {
      term: "Nasasabtan ko, pero...",
      meaning: "I understand, but...",
      pronunciation: "na-sa-sab-tan ko pe-ro",
      usage: "An expression for respectful discussion.",
      example: [
        {
          speaker: "",
          text: "Nasasabtan ko, pero iba an akon pagtan-aw hito.",
          translation: "I understand, but I see it differently.",
        },
      ],
    },
    {
      term: "Salamat ha pagpaangbit han imo opinyon",
      meaning: "Thank you for sharing your opinion",
      pronunciation: "sa-la-mat ha pag-pa-ang-bit han i-mo o-pin-yon",
      usage: "An expression for respectful discussion.",
    },
    {
      term: "Opinyon",
      meaning: "Opinion",
      pronunciation: "o-pin-yon",
      usage: "Used in discussions.",
      example: [
        {
          speaker: "",
          text: "Nauyon ako ha imo opinyon.",
          translation: "I agree with your opinion.",
        },
      ],
    },
    {
      term: "Ideya",
      meaning: "Idea",
      pronunciation: "i-de-ya",
      usage: "Used in discussions.",
      example: [
        {
          speaker: "A",
          text: "Nauyon ako ha imo ideya.",
          translation: "I agree with your idea.",
        },
        {
          speaker: "B",
          text: "Kay ano nga nasuporta ka hito?",
          translation: "Why do you support it?",
        },
      ],
    },
    {
      term: "Rason",
      meaning: "Reason",
      pronunciation: "ra-son",
      usage: "Used in discussions.",
      example: [
        {
          speaker: "",
          text: "Usa nga rason amo nga nakakatipid ini hin panahon.",
          translation: "One reason is that it saves time.",
        },
      ],
    },
    {
      term: "Ebidensya",
      meaning: "Evidence",
      pronunciation: "e-bi-den-sya",
      usage: "Used in discussions.",
    },
    {
      term: "Diskusyon",
      meaning: "Discussion",
      pronunciation: "dis-ku-syon",
      usage: "Used in discussions.",
    },
    {
      term: "Pagtan-aw",
      meaning: "Point of view",
      pronunciation: "pag-ta-naw",
      usage: "Used in discussions.",
      example: [
        {
          speaker: "",
          text: "Nasasabtan ko, pero iba an akon pagtan-aw hito.",
          translation: "I understand, but I see it differently.",
        },
      ],
    },
    {
      term: "Pilion",
      meaning: "Choice",
      pronunciation: "pi-li-on",
      usage: "Used in discussions.",
    },
    {
      term: "Kaayohan",
      meaning: "Advantage",
      pronunciation: "ka-a-yo-han",
      usage: "Used in discussions.",
    },
    {
      term: "Kakulangan",
      meaning: "Disadvantage",
      pronunciation: "ka-ku-lang-an",
      usage: "Used in discussions.",
    },
    {
      term: "Desisyon",
      meaning: "Decision",
      pronunciation: "de-sis-yon",
      usage: "Used in discussions.",
    },
  ],
  patterns: [
    {
      label: "Pattern 1: Agreeing",
      pattern: "Nauyon ako ha imo + Thing.",
      examples: [
        "Nauyon ako ha imo opinyon.",
        "Nauyon ako ha imo ideya.",
      ],
    },
    {
      label: "Pattern 2: Supporting an Idea",
      pattern: "Nasuporta ako ha imo + Thing.",
      examples: [
        "Nasuporta ako ha imo suhestyon.",
        "Nasuporta ako ha imo ideya",
      ],
    },
    {
      label: "Pattern 3: Saying What You Think",
      pattern: "Word + an akon panhunahuna.",
      examples: [
        "Pariho an akon panhunahuna",
        "Iba an akon panhunahuna.",
      ],
    },
  ],
  sentences: [
    {
      text: "Nauyon ako ha imo opinyon.",
      meaning: "I agree with your opinion.",
    },
    {
      text: "Husto ka mahitungod hito.",
      meaning: "You are right about that.",
    },
    {
      text: "Tinuod ito.",
      meaning: "That is true.",
    },
    {
      text: "Para ha akon, importante liwat ito.",
      meaning: "I also think that it is important.",
    },
    {
      text: "Pariho an akon panhunahuna.",
      meaning: "I have the same opinion.",
    },
    {
      text: "Nasuporta ako ha imo suhestyon.",
      meaning: "I support your suggestion.",
    },
    {
      text: "Diri ako nauyon hito nga ideya.",
      meaning: "I do not agree with that idea.",
    },
    {
      text: "Iba an akon panhunahuna.",
      meaning: "I have a different opinion.",
    },
    {
      text: "Nasasabtan ko, pero iba an akon pagtan-aw hito.",
      meaning: "I understand, but I see it differently.",
    },
    {
      text: "Diri ako bug-os nga nauyon.",
      meaning: "I do not completely agree.",
    },
    {
      text: "Para ha akon, may iba pa nga paagi.",
      meaning: "I think there is another way. / In my opinion, there is another way. / In my opinion, there is another way.",
    },
    {
      text: "Bangin diri ito pirme tinuod.",
      meaning: "That may not always be true.",
    },
    {
      text: "Nauyon ako kay makakabulig ito.",
      meaning: "I agree because it is helpful.",
    },
    {
      text: "Diri ako nauyon kay may iba pa nga solusyon.",
      meaning: "I disagree because there is another solution.",
    },
    {
      text: "Para ha akon, importante ini kay nakakabulig ini ha mga estudyante.",
      meaning: "I think this is important because it helps students.",
    },
    {
      text: "Usa nga rason amo nga nakakatipid ini hin panahon.",
      meaning: "One reason is that it saves time.",
    },
    {
      text: "Pananglitan, mahimo mag-aram an mga estudyante ha balay.",
      meaning: "For example, students can study at home.",
    },
    {
      text: "Nauyon ako hito nga ideya.",
      meaning: "I agree with that idea.",
    },
    {
      text: "Amo gud ito an akon panhunahuna.",
      meaning: "That is exactly what I think.",
    },
    {
      text: "Diri ako nauyon hito.",
      meaning: "I do not agree with that.",
    },
    {
      text: "Nasasabtan ko, pero iba an akon panhunahuna.",
      meaning: "I understand, but I have a different opinion.",
    },
    {
      text: "Respeto ko an imo opinyon.",
      meaning: "I respect your opinion.",
    },
  ],
  conversations: [
    {
      title: "Conversation 1: Discussing the Importance of Learning Languages",
      situation: "Two classmates discuss the importance of learning Philippine languages.",
      lines: [
        {
          speaker: "Ana",
          text: "Para ha imo, importante ba an pag-aram hin mga yinaknan ha Pilipinas?",
          translation: "In your opinion, is learning Philippine languages important?",
        },
        {
          speaker: "Ben",
          text: "Oo, importante ito kay kabahin ito han aton kultura.",
          translation: "Yes, it is important because it is part of our culture.",
        },
        {
          speaker: "Ana",
          text: "Nauyon liwat ako ha imo.",
          translation: "I also agree with you.",
        },
        {
          speaker: "Ben",
          text: "Kay ano nga nauyon ka?",
          translation: "Why do you agree?",
        },
        {
          speaker: "Ana",
          text: "Kay nakakabulig ito ha aton pakigkomunikar ha iba nga mga tawo.",
          translation: "Because it helps us communicate with other people.",
        },
        {
          speaker: "Ben",
          text: "Tinuod ito. Kinahanglan naton tipigan an aton mga yinaknan.",
          translation: "That is true. We need to preserve our languages.",
        },
        {
          speaker: "Ana",
          text: "Amo gud.",
          translation: "Exactly.",
        },
      ],
    },
    {
      title: "Conversation 2: Different Opinions About Online Learning",
      situation: "Two students discuss whether online learning is better than face-to-face classes.",
      lines: [
        {
          speaker: "Mark",
          text: "Para ha akon, mas masayon an online learning.",
          translation: "In my opinion, online learning is easier.",
        },
        {
          speaker: "Leo",
          text: "Diri ako bug-os nga nauyon ha imo.",
          translation: "I do not completely agree with you.",
        },
        {
          speaker: "Mark",
          text: "Kay ano man?",
          translation: "Why is that?",
        },
        {
          speaker: "Leo",
          text: "Kay may mga estudyante nga waray maopay nga koneksyon ha internet.",
          translation: "Because some students do not have a good internet connection.",
        },
        {
          speaker: "Mark",
          text: "Husto ka. Pero may mga bentaha liwat an online learning.",
          translation: "You are right. But online learning also has advantages.",
        },
        {
          speaker: "Leo",
          text: "Nauyon ako hito. Para ha akon, kinahanglan tagdon an kahimtang han kada estudyante.",
          translation: "I agree with that. In my opinion, we need to consider each student's situation.",
        },
        {
          speaker: "Mark",
          text: "Maopay nga punto ito.",
          translation: "That is a good point.",
        },
      ],
    },
    {
      title: "Conversation 3: Discussing a Community Project",
      situation: "Two friends discuss whether their community should organize a tree-planting activity.",
      lines: [
        {
          speaker: "Ana",
          text: "Para ha akon, kinahanglan mag-organisa kita hin tree-planting activity ha aton komunidad.",
          translation: "In my opinion, we should organize a tree-planting activity in our community.",
        },
        {
          speaker: "Ben",
          text: "Nauyon ako ha imo ideya.",
          translation: "I agree with your idea.",
        },
        {
          speaker: "Ana",
          text: "Kay ano nga nasuporta ka hito?",
          translation: "Why do you support it?",
        },
        {
          speaker: "Ben",
          text: "Kay nakakabulig an mga kahoy ha pagpanalipod han aton palibot.",
          translation: "Because trees help protect our environment.",
        },
        {
          speaker: "Ana",
          text: "May iba ka pa nga suhestyon?",
          translation: "Do you have another suggestion?",
        },
        {
          speaker: "Ben",
          text: "Oo. Mahimo liwat kita mag-organisa hin paglimpyo ha komunidad.",
          translation: "Yes. We can also organize a community clean-up.",
        },
        {
          speaker: "Ana",
          text: "Maupay ito nga ideya.",
          translation: "That is a good idea.",
        },
        {
          speaker: "Ben",
          text: "Salamat. Nalilipay ako nga nauyon ka.",
          translation: "Thank you. I am glad that you agree.",
        },
      ],
    },
  ],
  languageNotes: [
    {
      title: "A. Expressing Agreement",
      body: [
        "Agreement means that you share or accept another person's opinion or statement.",
        "You can use nauyon ako to express that you agree.",
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
            left: "Nauyon ako hito nga ideya.",
            right: "I agree with that idea.",
          },
          {
            left: "Husto ka.",
            right: "You are right.",
          },
          {
            left: "Tinuod ito.",
            right: "That is true.",
          },
          {
            left: "Amo gud ito an akon panhunahuna.",
            right: "That is exactly what I think.",
          },
        ],
      },
    },
    {
      title: "A. Expressing Agreement",
      body: [
        "Example Conversation:",
        "A: Importante an pag-aram hin mga yinaknan. Learning languages is important.",
        "B: Nauyon ako ha imo kay nakakabulig ito ha pakigkomunikar. I agree with you because it helps with communication.",
      ],
    },
    {
      title: "B. Expressing Disagreement",
      body: [
        "Disagreement means that you do not share the same opinion as another person.",
        "You can use diri ako nauyon to express disagreement.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Diri ako nauyon hito.",
            right: "I do not agree with that.",
          },
          {
            left: "Iba an akon panhunahuna.",
            right: "I have a different opinion.",
          },
          {
            left: "Diri ako bug-os nga nauyon.",
            right: "I do not completely agree.",
          },
          {
            left: "Para ha akon, may iba pa nga paagi.",
            right: "In my opinion, there is another way.",
          },
        ],
      },
    },
    {
      title: "B. Expressing Disagreement",
      body: [
        "When disagreeing, it is helpful to explain your reason instead of simply rejecting another person's opinion.",
        "Diri ako nauyon kay kinahanglan liwat naton hunahunaon an iba nga posibilidad.",
        "I disagree because we also need to consider other possibilities.",
      ],
    },
    {
      title: "C. Disagreeing Respectfully",
      body: [
        "People may have different opinions, but disagreement does not need to become an argument.",
        "You can acknowledge another person's viewpoint before explaining your own.",
        "Useful expressions:",
      ],
      examples: [
        {
          text: "Nasasabtan ko an imo punto.",
          meaning: "I understand your point.",
        },
        {
          text: "Nasasabtan ko, pero iba an akon panhunahuna.",
          meaning: "I understand, but I have a different opinion.",
        },
        {
          text: "Respeto ko an imo opinyon.",
          meaning: "I respect your opinion.",
        },
        {
          text: "Para ha akon, may iba pa nga paagi.",
          meaning: "In my opinion, there is another way.",
        },
      ],
    },
    {
      title: "C. Disagreeing Respectfully",
      body: [
        "A: Mas maupay kon online la an ngatanan nga klase. It would be better if all classes were online.",
        "B: Nasasabtan ko an imo punto, pero mas karuyag ko an kombinasyon han online ngan personal nga klase. I understand your point, but I prefer a combination of online and face-to-face classes.",
      ],
    },
    {
      title: "D. Supporting Your Opinion with Reasons",
      body: [
        "A strong opinion is easier to understand when it includes a reason or example.",
        "You can use expressions from the previous lesson, such as kay, tungod kay, and pananglitan.",
        "• Nauyon ako kay nakakabulig ito ha mga estudyante. I agree because it helps students.",
        "• Diri ako nauyon tungod kay may iba pa nga kinahanglan tagdon. I disagree because there are other things that need to be considered.",
        "• Para ha akon, importante an pagpraktis. Pananglitan, mahimo kita mag-istorya kada adlaw. In my opinion, practice is important. For example, we can have conversations every day.",
      ],
    },
    {
      title: "E. Participating in a Discussion",
      body: [
        "During a discussion, learners should know how to:",
        "• Listen to another person's opinion.",
        "• Identify whether they agree or disagree.",
        "• Express their response respectfully.",
        "• Explain their reason.",
        "• Allow others to share their viewpoints.",
        "A simple discussion pattern is:",
        "Opinion → Agreement or Disagreement → Reason → Example",
        "Opinion: Importante an paggamit hin teknolohiya ha pag-aram. Using technology in learning is important.",
        "Response: Nauyon ako hito. I agree with that.",
        "Reason: Kay nakakabulig ito ha pagkuha hin impormasyon. Because it helps us obtain information.",
        "Example: Pananglitan, mahimo kita gumamit hin mga aplikasyon ha pag-aram hin yinaknan. For example, we can use applications to learn a language.",
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
