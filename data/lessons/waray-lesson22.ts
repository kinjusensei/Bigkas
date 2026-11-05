import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 22 — imported from "Lesson Plan.pdf", pages 981–1000.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
// Fields not given by the plan are INFERRED from this lesson's own content and
// listed in docs/waray-inferred-keys.md: usage, example, pronunciation, pattern, choice, arrange, speaking phrase, respelling, target pitch and mood, example situation, pronunciation tip, badge description, completion requirement.
// The practice answers are INFERRED drafts, not from the PDF. See
// docs/waray-draft-answer-keys.md for each answer and how it was found.

export const warayLesson22: StructuredLesson = {
  lessonId: "waray_22",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 22,
  title: "Giving Explanations and Reasons",
  level: "Advanced",
  unit: "ADVANCED COMMUNICATION",
  estimatedDuration: "45–60 minutes",
  prerequisite: "Lesson 21 – Expressing Opinions and Feelings",
  languageVariety: "Explaining situations, expressing causes and effects, providing reasons, giving examples, and clarifying information.",
  intro: [
    "In everyday communication, people often need to explain why something happened, provide reasons for their decisions, or clarify information when someone does not understand.",
    "Being able to give clear explanations helps learners communicate more effectively in conversations, discussions, school activities, and everyday situations.",
    "In this lesson, learners will practice using Waray expressions to explain causes, describe results, provide examples, and clarify their statements. They will also learn how to organize their explanations into complete and understandable responses.",
    "Imagine that your teacher asks why you were unable to attend class, or a friend asks why you prefer studying at home.",
    "A short answer may not always provide enough information. You may need to explain the situation, give a reason, and describe what happened as a result.",
    "For example:",
    "• Waray ako nakaeskwela kay masakit ako. – I could not attend school because I was sick.",
    "• Nag-uran, salit nabasa an dalan. – It rained, so the road became wet.",
    "• Kinahanglan kita mag-aram kay importante an edukasyon. – We need to study because education is important.",
    "• Pananglitan, mahimo kita magbasa hin libro. – For example, we can read a book.",
    "These expressions help learners provide more complete answers rather than relying only on short statements.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify common Waray expressions used to explain reasons and situations.",
    "Explain the causes of everyday events and circumstances.",
    "Describe the results or consequences of particular actions.",
    "Provide examples and supporting details when explaining an idea.",
    "Clarify information and respond to requests for explanations.",
    "Construct connected sentences that communicate reasons and explanations clearly.",
  ],
  assessment: {
    instructions: "Choose the correct answer for each question.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What does \"Hinungdan\" mean?",
        options: [
          {
            key: "A",
            text: "Example",
          },
          {
            key: "B",
            text: "Cause or reason",
          },
          {
            key: "C",
            text: "Result",
          },
          {
            key: "D",
            text: "Purpose",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "Which word can be used to introduce a result?",
        options: [
          {
            key: "A",
            text: "Salit",
          },
          {
            key: "B",
            text: "Pananglitan",
          },
          {
            key: "C",
            text: "Siyahan",
          },
          {
            key: "D",
            text: "Diri",
          },
        ],
        answerKey: "A",
      },
      {
        id: 3,
        prompt: "What does \"Pananglitan\" mean?",
        options: [
          {
            key: "A",
            text: "Because",
          },
          {
            key: "B",
            text: "Finally",
          },
          {
            key: "C",
            text: "For example",
          },
          {
            key: "D",
            text: "Therefore",
          },
        ],
        answerKey: "C",
      },
      {
        id: 4,
        prompt: "Which expression means \"because\"?",
        options: [
          {
            key: "A",
            text: "Hain",
          },
          {
            key: "B",
            text: "Tungod kay",
          },
          {
            key: "C",
            text: "Sugad han",
          },
          {
            key: "D",
            text: "Ha kataposan",
          },
        ],
        answerKey: "B",
      },
      {
        id: 5,
        prompt: "What is the meaning of \"Pagsaysay\"?",
        options: [
          {
            key: "A",
            text: "Explanation",
          },
          {
            key: "B",
            text: "Celebration",
          },
          {
            key: "C",
            text: "Comparison",
          },
          {
            key: "D",
            text: "Question",
          },
        ],
        answerKey: "A",
      },
      {
        id: 6,
        prompt: "Which sentence explains a reason?",
        options: [
          {
            key: "A",
            text: "Nag-uran, salit nabasa an dalan.",
          },
          {
            key: "B",
            text: "Nagpahuway ako kay kapoy ako.",
          },
          {
            key: "C",
            text: "Pananglitan, magbasa kita.",
          },
          {
            key: "D",
            text: "Ha kataposan, umuli kami.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 7,
        prompt: "What does \"Siyahan\" mean?",
        options: [
          {
            key: "A",
            text: "Finally",
          },
          {
            key: "B",
            text: "Next",
          },
          {
            key: "C",
            text: "First",
          },
          {
            key: "D",
            text: "Again",
          },
        ],
        answerKey: "C",
      },
      {
        id: 8,
        prompt: "Which expression asks someone to explain something?",
        options: [
          {
            key: "A",
            text: "Pira ini?",
          },
          {
            key: "B",
            text: "Mahimo mo ba igsaysay?",
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
        id: 9,
        prompt: "What is the purpose of giving examples when explaining an idea?",
        options: [
          {
            key: "A",
            text: "To make information more confusing.",
          },
          {
            key: "B",
            text: "To avoid answering questions.",
          },
          {
            key: "C",
            text: "To help clarify and support the explanation.",
          },
          {
            key: "D",
            text: "To change the subject.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 10,
        prompt: "Which sentence shows a cause and its result?",
        options: [
          {
            key: "A",
            text: "Nalilipay ako yana.",
          },
          {
            key: "B",
            text: "Dako an balay.",
          },
          {
            key: "C",
            text: "Nag-uran, salit nabasa an dalan.",
          },
          {
            key: "D",
            text: "Maupay nga aga.",
          },
        ],
        answerKey: "C",
      },
    ],
  },
  extraActivities: [
    {
      title: "Identify the Cause and Effect",
      kind: "choice",
      instructions: "Read each sentence and identify its cause and effect.",
      items: [
        "Nag-uran, salit waray kami makagawas.",
        "Waray hiya magkaon, salit ginugutom hiya.",
        "Nag-aram hiya hin maupay, salit nakapasar hiya ha eksam.",
        "Waray koryente, salit diri kami nakakagamit han kompyuter.",
        "Nagpraktis hira kada adlaw, salit nag-uswag an ira abilidad.",
      ],
      note: "For each sentence, identify:\n• Cause: Why did the situation happen?\n• Effect: What happened as a result?",
      answers: [
        "Cause: Nag-uran. Effect: waray kami makagawas.",
        "Cause: Waray hiya magkaon. Effect: ginugutom hiya.",
        "Cause: Nag-aram hiya hin maupay. Effect: nakapasar hiya ha eksam.",
        "Cause: Waray koryente. Effect: diri kami nakakagamit han kompyuter.",
        "Cause: Nagpraktis hira kada adlaw. Effect: nag-uswag an ira abilidad.",
      ],
    },
    {
      title: "Translate into Waray",
      kind: "translate",
      instructions: "Translate the following English sentences into Waray.",
      items: [
        "I stayed at home because I was sick.",
        "It rained, so the road became wet.",
        "For example, we can read books.",
        "I study because I want to learn.",
        "Can you explain your answer?",
      ],
    },
    {
      title: "Explain a Situation",
      kind: "open",
      instructions: "Choose one situation and explain what happened, why it happened, and what the result was.\nSituations:",
      items: [
        "A student arrives late at school.",
        "A family prepares for a celebration.",
        "A person misses an important appointment.",
        "A group successfully completes a project.",
        "A community experiences heavy rainfall.",
        "At least one reason expression.",
        "At least one result expression.",
        "At least one supporting detail or example.",
        "At least three complete Waray sentences.",
      ],
      note: "Your explanation must include:",
    },
  ],
  matchActivity: {
    title: "Vocabulary Matching",
    instructions: "Match each Waray word or expression with its correct English meaning.",
    pairs: [
      {
        id: "1",
        term: "Hinungdan",
        answer: "Reason / Cause",
      },
      {
        id: "2",
        term: "Salit",
        answer: "Therefore / So",
      },
      {
        id: "3",
        term: "Pananglitan",
        answer: "Example",
      },
      {
        id: "4",
        term: "Pagsaysay",
        answer: "Explanation",
      },
      {
        id: "5",
        term: "Katuyoan",
        answer: "Purpose",
      },
    ],
  },
  fillInBlanks: {
    title: "Complete the Sentences",
    instructions: "Choose the correct expression from the word bank.",
    items: [
      {
        id: "1",
        sentence: "Nagpahuway ako ______ kapoy ako.",
        answer: "kay",
        title: "Complete the Sentences",
        instructions: "Choose the correct expression from the word bank.",
        wordBank: [
          "kay",
          "salit",
          "pananglitan",
          "tungod kay",
          "siyahan",
        ],
      },
      {
        id: "2",
        sentence: "Nag-uran, ______ nabasa an akon bado.",
        answer: "salit",
        title: "Complete the Sentences",
        instructions: "Choose the correct expression from the word bank.",
        wordBank: [
          "kay",
          "salit",
          "pananglitan",
          "tungod kay",
          "siyahan",
        ],
      },
      {
        id: "3",
        sentence: "______, kinahanglan naton mag-andam.",
        answer: "siyahan",
        title: "Complete the Sentences",
        instructions: "Choose the correct expression from the word bank.",
        wordBank: [
          "kay",
          "salit",
          "pananglitan",
          "tungod kay",
          "siyahan",
        ],
      },
      {
        id: "4",
        sentence: "______, mahimo kita magbasa hin libro.",
        answer: "pananglitan",
        title: "Complete the Sentences",
        instructions: "Choose the correct expression from the word bank.",
        wordBank: [
          "kay",
          "salit",
          "pananglitan",
          "tungod kay",
          "siyahan",
        ],
      },
      {
        id: "5",
        sentence: "Importante ini ______ nakakabulig ini ha aton.",
        answer: "tungod kay",
        title: "Complete the Sentences",
        instructions: "Choose the correct expression from the word bank.",
        wordBank: [
          "kay",
          "salit",
          "pananglitan",
          "tungod kay",
          "siyahan",
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
      name: "Clear Explanation Badge",
      description: "Awarded after successfully completing Lesson 22.",
    },
    completionRequirement: "Obtain at least 70% in the lesson assessment. Learners may repeat the activities and assessment if they do not meet the requirement.",
  },
  expectedOutcomes: [
    "Before proceeding to the next lesson, learners should be able to:",
    "Recognize expressions used to explain reasons and results.",
    "Explain why everyday situations happen.",
    "Describe the results of particular events.",
    "Provide examples and supporting details.",
    "Organize explanations in a logical order.",
    "Respond to requests for clarification.",
    "Achieve at least 70% in the lesson assessment.",
  ],
  choiceActivity: {
    title: "Choose the Correct Meaning",
    instructions: "Choose the correct English meaning.",
    questions: [
      {
        id: 1,
        prompt: "What does “Pagbag-o” mean?",
        options: [
          {
            key: "A",
            text: "Happened",
          },
          {
            key: "B",
            text: "Purpose",
          },
          {
            key: "C",
            text: "Change",
          },
          {
            key: "D",
            text: "In addition",
          },
        ],
        answerKey: "C",
      },
      {
        id: 2,
        prompt: "What does “Sunod” mean?",
        options: [
          {
            key: "A",
            text: "Reason",
          },
          {
            key: "B",
            text: "Purpose",
          },
          {
            key: "C",
            text: "Another",
          },
          {
            key: "D",
            text: "Next",
          },
        ],
        answerKey: "D",
      },
      {
        id: 3,
        prompt: "What does “Resulta” mean?",
        options: [
          {
            key: "A",
            text: "Effect / Result",
          },
          {
            key: "B",
            text: "Next",
          },
          {
            key: "C",
            text: "Because",
          },
          {
            key: "D",
            text: "Specifically",
          },
        ],
        answerKey: "A",
      },
      {
        id: 4,
        prompt: "What does “Iba pa” mean?",
        options: [
          {
            key: "A",
            text: "Cause",
          },
          {
            key: "B",
            text: "Another",
          },
          {
            key: "C",
            text: "To need",
          },
          {
            key: "D",
            text: "Detail",
          },
        ],
        answerKey: "B",
      },
      {
        id: 5,
        prompt: "What does “Katuyoan” mean?",
        options: [
          {
            key: "A",
            text: "Specifically",
          },
          {
            key: "B",
            text: "Cause",
          },
          {
            key: "C",
            text: "Purpose",
          },
          {
            key: "D",
            text: "Such as",
          },
        ],
        answerKey: "C",
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
          "kay",
          "karuyag",
          "ako",
          "mahibaro",
          "Nag-aadal",
          "ko",
        ],
        answer: [
          "Nag-aadal",
          "ako",
          "kay",
          "karuyag",
          "ko",
          "mahibaro",
        ],
        display: "Nag-aadal ako kay karuyag ko mahibaro.",
      },
      {
        id: "2",
        words: [
          "hin",
          "Kinahanglan",
          "mapaso",
          "naton",
          "kay",
          "tubig",
        ],
        answer: [
          "Kinahanglan",
          "naton",
          "hin",
          "tubig",
          "kay",
          "mapaso",
        ],
        display: "Kinahanglan naton hin tubig kay mapaso.",
      },
      {
        id: "3",
        words: [
          "an",
          "Nag-uran",
          "salit",
          "dalan",
          "nabasa",
        ],
        answer: [
          "Nag-uran",
          "salit",
          "nabasa",
          "an",
          "dalan",
        ],
        display: "Nag-uran, salit nabasa an dalan.",
      },
      {
        id: "4",
        words: [
          "kami",
          "Binaha",
          "salit",
          "an",
          "diri",
          "nakalabay",
          "dalan",
        ],
        answer: [
          "Binaha",
          "an",
          "dalan",
          "salit",
          "diri",
          "kami",
          "nakalabay",
        ],
        display: "Binaha an dalan, salit diri kami nakalabay.",
      },
      {
        id: "5",
        words: [
          "magbasa",
          "kita",
          "mga",
          "hin",
          "libro",
          "mahimo",
          "Pananglitan",
        ],
        answer: [
          "Pananglitan",
          "mahimo",
          "kita",
          "magbasa",
          "hin",
          "mga",
          "libro",
        ],
        display: "Pananglitan, mahimo kita magbasa hin mga libro.",
      },
    ],
  },
  speaking: {
    title: "Speaking Practice",
    instructions: "Read the following sentences aloud.",
    note: "Learners should listen to the model pronunciation before recording their own voice.",
    practiceLessonId: "waray_22",
    phrases: [
      {
        id: "1",
        text: "Nagpabilin ako ha balay kay masakit ako.",
        respelling: "nag-pa-bi-lin a-ko ha ba-lay kai ma-sa-kit a-ko",
        meaning: "I stayed at home because I was sick.",
      },
      {
        id: "2",
        text: "Diri ako makakadto kay sagipo ako.",
        respelling: "di-ri a-ko ma-ka-kad-to kai sa-gi-po a-ko",
        meaning: "I cannot go because I am busy.",
      },
      {
        id: "3",
        text: "Pananglitan, mahimo kita magbasa hin mga libro.",
        respelling: "pah-nahng-lee-tahn mah-hee-moh ki-ta mahg-bah-sah hin ma-nga lib-ro",
        meaning: "For example, we can read books.",
      },
      {
        id: "4",
        text: "Nasasabtan ko an imo pagsaysay.",
        respelling: "na-sa-sab-tan ko an i-mo pahg-sah-sai",
        meaning: "I understand your explanation.",
      },
      {
        id: "5",
        text: "Alayon, igsaysay utro.",
        respelling: "a-la-yon ig-say-say ut-ro",
        meaning: "Please explain it again.",
      },
      {
        id: "6",
        text: "Tugoti ako nga magsaysay.",
        respelling: "tu-go-ti a-ko nga mag-say-say",
        meaning: "Let me explain.",
      },
      {
        id: "7",
        text: "Diri ako nakadto kay urhi na ako.",
        respelling: "di-ri a-ko na-kad-to kai ur-hi na a-ko",
        meaning: "I did not go because I was already late.",
      },
    ],
  },
  exampleSituation: {
    description: "Imagine this situation from the lesson: Explaining an Absence.",
    lead: "You can begin by saying:",
    line: "Kay ano nga waray ka umiskwela kahapon?",
    translation: "Why did you not attend school yesterday?",
  },
  vocabularyIntro: "Learn the following words and expressions before proceeding to the activities.",
  pronunciationTip: "Read each syllable clearly. Avoid rushing through longer expressions.",
  selfIntroIntro: "Use these patterns and phrases from the lesson.",
  vocabulary: [
    {
      term: "Kay",
      meaning: "Because",
      pronunciation: "kay",
      usage: "An expression for giving reasons.",
      example: [
        {
          speaker: "A",
          text: "Kay ano nga waray ka umiskwela kahapon?",
          translation: "Why did you not attend school yesterday?",
        },
        {
          speaker: "B",
          text: "Waray ako umiskwela kay masakit ako.",
          translation: "I did not attend school because I was sick.",
        },
      ],
    },
    {
      term: "Tungod kay",
      meaning: "Because / Due to the fact that",
      pronunciation: "tung-od kay",
      usage: "An expression for giving reasons.",
    },
    {
      term: "Rason",
      meaning: "Reason",
      pronunciation: "ra-son",
      usage: "An expression for giving reasons.",
      example: [
        {
          speaker: "A",
          text: "Importante ini kay nakakabulig ha aton pakigkomunikar.",
          translation: "It is important because it helps us communicate.",
        },
        {
          speaker: "B",
          text: "May iba ka pa nga rason?",
          translation: "Do you have another reason?",
        },
      ],
    },
    {
      term: "Katuyoan",
      meaning: "Purpose",
      pronunciation: "ka-tu-yo-an",
      usage: "An expression for giving reasons.",
    },
    {
      term: "Hinungdan",
      meaning: "Cause",
      pronunciation: "hi-nung-dan",
      usage: "An expression for giving reasons.",
    },
    {
      term: "Pagsaysay",
      meaning: "Explanation",
      pronunciation: "pag-say-say",
      usage: "An expression for giving reasons.",
      example: [
        {
          speaker: "",
          text: "Nasasabtan ko an imo pagsaysay.",
          translation: "I understand your explanation.",
        },
      ],
    },
    {
      term: "Magsaysay",
      meaning: "To explain",
      pronunciation: "mag-say-say",
      usage: "An expression for giving reasons.",
      example: [
        {
          speaker: "",
          text: "Tugoti ako nga magsaysay.",
          translation: "Let me explain.",
        },
      ],
    },
    {
      term: "Sabot",
      meaning: "To understand",
      pronunciation: "sa-bot",
      usage: "An expression for giving reasons.",
    },
    {
      term: "Maaram",
      meaning: "To know",
      pronunciation: "ma-a-ram",
      usage: "An expression for giving reasons.",
      example: [
        {
          speaker: "A",
          text: "Mahimo ka ba maghatag hin pananglitan?",
          translation: "Can you give an example?",
        },
        {
          speaker: "B",
          text: "Pananglitan, kon maaram kita mag-Waray, mas masayon kita makig-istorya ha mga tawo nga nagyayakan hini nga yinaknan.",
          translation: "For example, if we know how to speak Waray, it is easier for us to communicate with people who speak this language.",
        },
      ],
    },
    {
      term: "Kinahanglan",
      meaning: "To need",
      pronunciation: "ki-nang-ha-lan",
      usage: "An expression for giving reasons.",
      example: [
        {
          speaker: "",
          text: "Kinahanglan naton hin tubig kay mapaso.",
          translation: "We need water because it is hot.",
        },
      ],
    },
    {
      term: "Kinahanglanon",
      meaning: "Necessary",
      pronunciation: "ki-nang-ha-non",
      usage: "An expression for giving reasons.",
    },
    {
      term: "Salit",
      meaning: "Therefore",
      pronunciation: "sa-lit",
      usage: "An expression for showing results.",
      example: [
        {
          speaker: "A",
          text: "Kay ano nga urhi ka nakaabot?",
          translation: "Why did you arrive late?",
        },
        {
          speaker: "B",
          text: "Mabug-at an trapiko, salit nadugay ako.",
          translation: "The traffic was heavy, so I was delayed.",
        },
      ],
    },
    {
      term: "Sugad nga resulta",
      meaning: "As a result",
      pronunciation: "su-gad nga re-sul-ta",
      usage: "An expression for showing results.",
    },
    {
      term: "Tungod hito",
      meaning: "Because of that",
      pronunciation: "tung-od hi-to",
      usage: "An expression for showing results.",
    },
    {
      term: "Amo ito an hinungdan",
      meaning: "That is why",
      pronunciation: "a-mo i-to an hi-nung-dan",
      usage: "An expression for showing results.",
    },
    {
      term: "Sanglit",
      meaning: "So / Thus",
      pronunciation: "sang-lit",
      usage: "An expression for showing results.",
      example: [
        {
          speaker: "",
          text: "Kapoy hiya, sanglit nagpahuway hiya.",
          translation: "She was tired; therefore, she rested.",
        },
      ],
    },
    {
      term: "Sugad hito",
      meaning: "Consequently",
      pronunciation: "su-gad hi-to",
      usage: "An expression for showing results.",
    },
    {
      term: "Resulta",
      meaning: "Effect / Result",
      pronunciation: "re-sul-ta",
      usage: "An expression for showing results.",
    },
    {
      term: "Nahitabo",
      meaning: "Happened",
      pronunciation: "na-hi-ta-bo",
      usage: "An expression for showing results.",
    },
    {
      term: "Pagbag-o",
      meaning: "Change",
      pronunciation: "pag-ba-go",
      usage: "An expression for showing results.",
    },
    {
      term: "Resulta",
      meaning: "Outcome",
      pronunciation: "re-sul-ta",
      usage: "An expression for showing results.",
    },
    {
      term: "Pananglitan",
      meaning: "For example",
      pronunciation: "pa-nang-li-tan",
      usage: "An expression for providing examples and details.",
      example: [
        {
          speaker: "A",
          text: "Oo. Nakakabulig liwat ini ha pagpreserbar han aton kultura.",
          translation: "Yes. It also helps preserve our culture.",
        },
        {
          speaker: "B",
          text: "Mahimo ka ba maghatag hin pananglitan?",
          translation: "Can you give an example?",
        },
      ],
    },
    {
      term: "Sugad han",
      meaning: "Such as",
      pronunciation: "su-gad han",
      usage: "An expression for providing examples and details.",
      example: [
        {
          speaker: "",
          text: "Damo nga yinaknan ha Pilipinas, sugad han Waray ngan Kapampangan.",
          translation: "There are many Philippine languages, such as Waray and Kapampangan.",
        },
      ],
    },
    {
      term: "Ha espisipiko nga paagi",
      meaning: "Specifically",
      pronunciation: "ha es-pi-si-pi-ko nga pa-a-gi",
      usage: "An expression for providing examples and details.",
    },
    {
      term: "Dugang pa",
      meaning: "In addition",
      pronunciation: "du-gang pa",
      usage: "An expression for providing examples and details.",
    },
    {
      term: "Gihapon / liwat",
      meaning: "Also",
      pronunciation: "gi-ha-pon / li-wat",
      usage: "An expression for providing examples and details.",
      example: [
        {
          speaker: "A",
          text: "May iba ka pa nga rason?",
          translation: "Do you have another reason?",
        },
        {
          speaker: "B",
          text: "Oo. Nakakabulig liwat ini ha pagpreserbar han aton kultura.",
          translation: "Yes. It also helps preserve our culture.",
        },
      ],
    },
    {
      term: "Iba pa",
      meaning: "Another",
      pronunciation: "i-ba pa",
      usage: "An expression for providing examples and details.",
    },
    {
      term: "Siyahan",
      meaning: "First",
      pronunciation: "si-ya-han",
      usage: "An expression for providing examples and details.",
    },
    {
      term: "Sunod",
      meaning: "Next",
      pronunciation: "su-nod",
      usage: "An expression for providing examples and details.",
    },
    {
      term: "Ha kataposan",
      meaning: "Finally",
      pronunciation: "ha ka-ta-po-san",
      usage: "An expression for providing examples and details.",
    },
    {
      term: "Detalye",
      meaning: "Detail",
      pronunciation: "de-tal-ye",
      usage: "An expression for providing examples and details.",
    },
    {
      term: "Katapos",
      meaning: "Afterward",
      pronunciation: "ka-TA-pos",
      usage: "From the language note \"Organizing Explanations\".",
    },
  ],
  greetings: [
    {
      term: "Kay",
      meaning: "Because",
      pronunciation: "kay",
      usage: "An expression for giving reasons.",
      example: [
        {
          speaker: "A",
          text: "Kay ano nga waray ka umiskwela kahapon?",
          translation: "Why did you not attend school yesterday?",
        },
        {
          speaker: "B",
          text: "Waray ako umiskwela kay masakit ako.",
          translation: "I did not attend school because I was sick.",
        },
      ],
    },
    {
      term: "Tungod kay",
      meaning: "Because / Due to the fact that",
      pronunciation: "tung-od kay",
      usage: "An expression for giving reasons.",
    },
    {
      term: "Rason",
      meaning: "Reason",
      pronunciation: "ra-son",
      usage: "An expression for giving reasons.",
      example: [
        {
          speaker: "A",
          text: "Importante ini kay nakakabulig ha aton pakigkomunikar.",
          translation: "It is important because it helps us communicate.",
        },
        {
          speaker: "B",
          text: "May iba ka pa nga rason?",
          translation: "Do you have another reason?",
        },
      ],
    },
    {
      term: "Katuyoan",
      meaning: "Purpose",
      pronunciation: "ka-tu-yo-an",
      usage: "An expression for giving reasons.",
    },
    {
      term: "Hinungdan",
      meaning: "Cause",
      pronunciation: "hi-nung-dan",
      usage: "An expression for giving reasons.",
    },
    {
      term: "Pagsaysay",
      meaning: "Explanation",
      pronunciation: "pag-say-say",
      usage: "An expression for giving reasons.",
      example: [
        {
          speaker: "",
          text: "Nasasabtan ko an imo pagsaysay.",
          translation: "I understand your explanation.",
        },
      ],
    },
    {
      term: "Magsaysay",
      meaning: "To explain",
      pronunciation: "mag-say-say",
      usage: "An expression for giving reasons.",
      example: [
        {
          speaker: "",
          text: "Tugoti ako nga magsaysay.",
          translation: "Let me explain.",
        },
      ],
    },
    {
      term: "Sabot",
      meaning: "To understand",
      pronunciation: "sa-bot",
      usage: "An expression for giving reasons.",
    },
    {
      term: "Maaram",
      meaning: "To know",
      pronunciation: "ma-a-ram",
      usage: "An expression for giving reasons.",
      example: [
        {
          speaker: "A",
          text: "Mahimo ka ba maghatag hin pananglitan?",
          translation: "Can you give an example?",
        },
        {
          speaker: "B",
          text: "Pananglitan, kon maaram kita mag-Waray, mas masayon kita makig-istorya ha mga tawo nga nagyayakan hini nga yinaknan.",
          translation: "For example, if we know how to speak Waray, it is easier for us to communicate with people who speak this language.",
        },
      ],
    },
    {
      term: "Kinahanglan",
      meaning: "To need",
      pronunciation: "ki-nang-ha-lan",
      usage: "An expression for giving reasons.",
      example: [
        {
          speaker: "",
          text: "Kinahanglan naton hin tubig kay mapaso.",
          translation: "We need water because it is hot.",
        },
      ],
    },
    {
      term: "Kinahanglanon",
      meaning: "Necessary",
      pronunciation: "ki-nang-ha-non",
      usage: "An expression for giving reasons.",
    },
    {
      term: "Salit",
      meaning: "Therefore",
      pronunciation: "sa-lit",
      usage: "An expression for showing results.",
      example: [
        {
          speaker: "A",
          text: "Kay ano nga urhi ka nakaabot?",
          translation: "Why did you arrive late?",
        },
        {
          speaker: "B",
          text: "Mabug-at an trapiko, salit nadugay ako.",
          translation: "The traffic was heavy, so I was delayed.",
        },
      ],
    },
    {
      term: "Sugad nga resulta",
      meaning: "As a result",
      pronunciation: "su-gad nga re-sul-ta",
      usage: "An expression for showing results.",
    },
    {
      term: "Tungod hito",
      meaning: "Because of that",
      pronunciation: "tung-od hi-to",
      usage: "An expression for showing results.",
    },
    {
      term: "Amo ito an hinungdan",
      meaning: "That is why",
      pronunciation: "a-mo i-to an hi-nung-dan",
      usage: "An expression for showing results.",
    },
    {
      term: "Sanglit",
      meaning: "So / Thus",
      pronunciation: "sang-lit",
      usage: "An expression for showing results.",
      example: [
        {
          speaker: "",
          text: "Kapoy hiya, sanglit nagpahuway hiya.",
          translation: "She was tired; therefore, she rested.",
        },
      ],
    },
    {
      term: "Sugad hito",
      meaning: "Consequently",
      pronunciation: "su-gad hi-to",
      usage: "An expression for showing results.",
    },
    {
      term: "Resulta",
      meaning: "Effect / Result",
      pronunciation: "re-sul-ta",
      usage: "An expression for showing results.",
    },
    {
      term: "Nahitabo",
      meaning: "Happened",
      pronunciation: "na-hi-ta-bo",
      usage: "An expression for showing results.",
    },
    {
      term: "Pagbag-o",
      meaning: "Change",
      pronunciation: "pag-ba-go",
      usage: "An expression for showing results.",
    },
    {
      term: "Resulta",
      meaning: "Outcome",
      pronunciation: "re-sul-ta",
      usage: "An expression for showing results.",
    },
    {
      term: "Pananglitan",
      meaning: "For example",
      pronunciation: "pa-nang-li-tan",
      usage: "An expression for providing examples and details.",
      example: [
        {
          speaker: "A",
          text: "Oo. Nakakabulig liwat ini ha pagpreserbar han aton kultura.",
          translation: "Yes. It also helps preserve our culture.",
        },
        {
          speaker: "B",
          text: "Mahimo ka ba maghatag hin pananglitan?",
          translation: "Can you give an example?",
        },
      ],
    },
    {
      term: "Sugad han",
      meaning: "Such as",
      pronunciation: "su-gad han",
      usage: "An expression for providing examples and details.",
      example: [
        {
          speaker: "",
          text: "Damo nga yinaknan ha Pilipinas, sugad han Waray ngan Kapampangan.",
          translation: "There are many Philippine languages, such as Waray and Kapampangan.",
        },
      ],
    },
    {
      term: "Ha espisipiko nga paagi",
      meaning: "Specifically",
      pronunciation: "ha es-pi-si-pi-ko nga pa-a-gi",
      usage: "An expression for providing examples and details.",
    },
    {
      term: "Dugang pa",
      meaning: "In addition",
      pronunciation: "du-gang pa",
      usage: "An expression for providing examples and details.",
    },
    {
      term: "Gihapon / liwat",
      meaning: "Also",
      pronunciation: "gi-ha-pon / li-wat",
      usage: "An expression for providing examples and details.",
      example: [
        {
          speaker: "A",
          text: "May iba ka pa nga rason?",
          translation: "Do you have another reason?",
        },
        {
          speaker: "B",
          text: "Oo. Nakakabulig liwat ini ha pagpreserbar han aton kultura.",
          translation: "Yes. It also helps preserve our culture.",
        },
      ],
    },
    {
      term: "Iba pa",
      meaning: "Another",
      pronunciation: "i-ba pa",
      usage: "An expression for providing examples and details.",
    },
    {
      term: "Siyahan",
      meaning: "First",
      pronunciation: "si-ya-han",
      usage: "An expression for providing examples and details.",
    },
    {
      term: "Sunod",
      meaning: "Next",
      pronunciation: "su-nod",
      usage: "An expression for providing examples and details.",
    },
    {
      term: "Ha kataposan",
      meaning: "Finally",
      pronunciation: "ha ka-ta-po-san",
      usage: "An expression for providing examples and details.",
    },
    {
      term: "Detalye",
      meaning: "Detail",
      pronunciation: "de-tal-ye",
      usage: "An expression for providing examples and details.",
    },
  ],
  patterns: [
    {
      label: "Pattern 1: Explaining Results and Consequences",
      pattern: "Cause + Result Connector + Effect",
      examples: [
        "Nag-uran + salit + nabasa an dalan.",
      ],
    },
    {
      label: "Pattern 2: Giving a Reason",
      pattern: "Action + kay + Reason.",
      examples: [
        "Nagpabilin ako ha balay kay masakit ako.",
        "Nag-aadal ako kay karuyag ko mahibaro.",
      ],
    },
    {
      label: "Pattern 3: Showing a Result",
      pattern: "Cause, salit + Result.",
      examples: [
        "Nag-uran, salit nabasa an dalan.",
        "Binaha an dalan, salit diri kami nakalabay.",
      ],
    },
  ],
  sentences: [
    {
      text: "Nagpabilin ako ha balay kay masakit ako.",
      meaning: "I stayed at home because I was sick.",
    },
    {
      text: "Nag-aadal ako kay karuyag ko mahibaro.",
      meaning: "I study because I want to learn.",
    },
    {
      text: "Nalilipay ako kay nakapasar ako ha eksam.",
      meaning: "I am happy because I passed the examination.",
    },
    {
      text: "Kinahanglan naton hin tubig kay mapaso.",
      meaning: "We need water because it is hot.",
    },
    {
      text: "Diri ako makakadto kay sagipo ako.",
      meaning: "I cannot go because I am busy.",
    },
    {
      text: "Nag-uran, salit nabasa an dalan.",
      meaning: "It rained, so the road became wet.",
    },
    {
      text: "Nag-aram ako hin maupay, salit nakapasar ako ha eksam.",
      meaning: "I studied hard, so I passed the examination.",
    },
    {
      text: "Kapoy hiya, sanglit nagpahuway hiya.",
      meaning: "She was tired; therefore, she rested.",
    },
    {
      text: "Binaha an dalan, salit diri kami nakalabay.",
      meaning: "The road was flooded, so we could not pass.",
    },
    {
      text: "Waray hiya mag-andam, salit nagkaada hiya hin kakurian.",
      meaning: "He did not prepare, so he had difficulty.",
    },
    {
      text: "Pananglitan, mahimo kita magbasa hin mga libro.",
      meaning: "For example, we can read books.",
    },
    {
      text: "Damo nga yinaknan ha Pilipinas, sugad han Waray ngan Kapampangan.",
      meaning: "There are many Philippine languages, such as Waray and Kapampangan.",
    },
    {
      text: "Usa nga pananglitan amo an pag-aram hin bag-o nga pulong.",
      meaning: "One example is learning a new word.",
    },
    {
      text: "Usa pa nga pananglitan amo an pagpraktis hin mga pag-istorya.",
      meaning: "Another example is practicing conversations.",
    },
    {
      text: "Ini nga mga buruhaton nakakabulig ha mga nag-aadal nga mag-uswag.",
      meaning: "These activities help learners improve.",
    },
    {
      text: "Ano an imo karuyag sidngon hito?",
      meaning: "What do you mean by that?",
    },
    {
      text: "Mahimo mo ba igsaysay an imo baton?",
      meaning: "Can you explain your answer?",
    },
    {
      text: "Iginsasaysay ko utro ini.",
      meaning: "I will explain it again.",
    },
    {
      text: "Nasasabtan ko an imo pagsaysay.",
      meaning: "I understand your explanation.",
    },
    {
      text: "Alayon, tagi ako hin pananglitan.",
      meaning: "Please give me an example.",
    },
    {
      text: "Amo ito an rason.",
      meaning: "That is the reason.",
    },
    {
      text: "Ano an imo karuyag sidngon?",
      meaning: "What do you mean?",
      pronunciation: "a-no an i-mo ka-ru-yag sing-on",
    },
    {
      text: "Mahimo mo ba igsaysay?",
      meaning: "Can you explain?",
      pronunciation: "ma-hi-mo mo ba ig-say-say",
    },
    {
      text: "Alayon, igsaysay utro.",
      meaning: "Please explain it again.",
      pronunciation: "a-la-yon ig-say-say ut-ro",
    },
    {
      text: "Diri ko nasasabtan.",
      meaning: "I do not understand.",
      pronunciation: "di-ri ko na-sa-sab-tan",
    },
    {
      text: "Nasasabtan ko na yana.",
      meaning: "I understand now.",
      pronunciation: "na-sa-sab-tan ko na ya-na",
    },
    {
      text: "Amo ito an akon karuyag sidngon.",
      meaning: "That is what I mean.",
      pronunciation: "a-mo i-to an a-kon ka-ru-yag sing-on",
    },
    {
      text: "Tugoti ako nga magsaysay.",
      meaning: "Let me explain.",
      pronunciation: "tu-go-ti a-ko nga mag-say-say",
    },
    {
      text: "Mahimo ka ba maghatag hin pananglitan?",
      meaning: "Can you give an example?",
      pronunciation: "ma-hi-mo ka ba mag-ha-tag hin pa-nang-li-tan",
    },
    {
      text: "Klaro ba ito?",
      meaning: "Is that clear?",
      pronunciation: "kla-ro ba i-to",
    },
    {
      text: "Salamat ha pagsaysay.",
      meaning: "Thank you for explaining.",
      pronunciation: "sa-la-mat ha pag-say-say",
    },
    {
      text: "Diri ako nakadto kay urhi na ako.",
      meaning: "I did not go because I was already late.",
    },
    {
      text: "Nagpahuway hiya kay kapoy hiya.",
      meaning: "He/She rested because he/she was tired.",
    },
    {
      text: "Nalilipay kami kay nagkita kami utro.",
      meaning: "We are happy because we met again.",
    },
    {
      text: "Nag-aram hiya kay may eksam buwas.",
      meaning: "He/She studied because there is an examination tomorrow.",
    },
    {
      text: "Nag-uran, salit nabasa an akon bado.",
      meaning: "It rained, so my clothes became wet.",
    },
    {
      text: "Waray kami hin tubig, salit namalit kami ha tindahan.",
      meaning: "We had no water, so we bought some at the store.",
    },
    {
      text: "Waray hiya mag-andam, salit nakurian hiya ha eksam.",
      meaning: "He/She did not prepare, so he/she had difficulty with the examination.",
    },
  ],
  conversations: [
    {
      title: "Conversation 1: Explaining an Absence",
      situation: "A student explains to a classmate why they were absent from school.",
      lines: [
        {
          speaker: "Ana",
          text: "Kay ano nga waray ka umiskwela kahapon?",
          translation: "Why did you not attend school yesterday?",
        },
        {
          speaker: "Ben",
          text: "Waray ako umiskwela kay masakit ako.",
          translation: "I did not attend school because I was sick.",
        },
        {
          speaker: "Ana",
          text: "Ano an imo ginbati?",
          translation: "What did you feel?",
        },
        {
          speaker: "Ben",
          text: "May hilanat ako ngan sakit an akon ulo.",
          translation: "I had a fever and my head hurt.",
        },
        {
          speaker: "Ana",
          text: "Amo ba? Nagpahuway ka ba ha balay?",
          translation: "Is that so? Did you rest at home?",
        },
        {
          speaker: "Ben",
          text: "Oo, ngan nag-inom ako hin medisina.",
          translation: "Yes, and I took medicine.",
        },
        {
          speaker: "Ana",
          text: "Maupay kay nagpapahuway ka na.",
          translation: "It is good that you are resting now.",
        },
        {
          speaker: "Ben",
          text: "Salamat ha imo pagpakiana.",
          translation: "Thank you for asking.",
        },
      ],
    },
    {
      title: "Conversation 2: Explaining the Importance of Learning Languages",
      situation: "Two classmates discuss why learning local languages is important.",
      lines: [
        {
          speaker: "Mark",
          text: "Kay ano nga importante an pag-aram hin mga yinaknan?",
          translation: "Why is learning languages important?",
        },
        {
          speaker: "Leo",
          text: "Importante ini kay nakakabulig ha aton pakigkomunikar.",
          translation: "It is important because it helps us communicate.",
        },
        {
          speaker: "Mark",
          text: "May iba ka pa nga rason?",
          translation: "Do you have another reason?",
        },
        {
          speaker: "Leo",
          text: "Oo. Nakakabulig liwat ini ha pagpreserbar han aton kultura.",
          translation: "Yes. It also helps preserve our culture.",
        },
        {
          speaker: "Mark",
          text: "Mahimo ka ba maghatag hin pananglitan?",
          translation: "Can you give an example?",
        },
        {
          speaker: "Leo",
          text: "Pananglitan, kon maaram kita mag-Waray, mas masayon kita makig-istorya ha mga tawo nga nagyayakan hini nga yinaknan.",
          translation: "For example, if we know how to speak Waray, it is easier for us to communicate with people who speak this language.",
        },
        {
          speaker: "Mark",
          text: "Nasasabtan ko na.",
          translation: "I understand now.",
        },
        {
          speaker: "Leo",
          text: "Maupay kon padayon kita nga mag-aram.",
          translation: "It is good if we continue learning.",
        },
      ],
    },
    {
      title: "Conversation 3: Explaining a Problem and Its Result",
      situation: "Two friends discuss why they arrived late at a meeting.",
      lines: [
        {
          speaker: "Ana",
          text: "Kay ano nga urhi ka nakaabot?",
          translation: "Why did you arrive late?",
        },
        {
          speaker: "Ben",
          text: "Mabug-at an trapiko, salit nadugay ako.",
          translation: "The traffic was heavy, so I was delayed.",
        },
        {
          speaker: "Ana",
          text: "Waray ka ba mag-andam hin mas temprano?",
          translation: "Did you not prepare earlier?",
        },
        {
          speaker: "Ben",
          text: "Nag-andam ako, pero damo an sarakyan ha dalan.",
          translation: "I prepared, but there were many vehicles on the road.",
        },
        {
          speaker: "Ana",
          text: "Nasasabtan ko.",
          translation: "I understand.",
        },
        {
          speaker: "Ben",
          text: "Pasayloa ako ha akon pag-urhi.",
          translation: "I am sorry for being late.",
        },
        {
          speaker: "Ana",
          text: "Waray problema. Importante nga nakaabot ka.",
          translation: "No problem. What matters is that you arrived.",
        },
      ],
    },
  ],
  languageNotes: [
    {
      title: "A. Explaining Why Something Happens",
      body: [
        "When explaining an event or situation, learners need to identify its cause or reason.",
        "The expressions kay and tungod kay can introduce reasons.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Diri ako nakadto kay urhi na ako.",
            right: "I did not go because I was already late.",
          },
          {
            left: "Nagpahuway hiya kay kapoy hiya.",
            right: "He/She rested because he/she was tired.",
          },
          {
            left: "Nalilipay kami kay nagkita kami utro.",
            right: "We are happy because we met again.",
          },
          {
            left: "Nag-aram hiya kay may eksam buwas.",
            right: "He/She studied because there is an examination tomorrow.",
          },
        ],
      },
    },
    {
      title: "A. Explaining Why Something Happens",
      body: [
        "Important: A reason explains why something happens or why someone makes a particular decision.",
      ],
    },
    {
      title: "B. Explaining Results and Consequences",
      body: [
        "Sometimes, an explanation needs to describe what happened after a particular event.",
        "The word salit can connect a cause with its result.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Nag-uran, salit nabasa an akon bado.",
            right: "It rained, so my clothes became wet.",
          },
          {
            left: "Waray kami hin tubig, salit namalit kami ha tindahan.",
            right: "We had no water, so we bought some at the store.",
          },
          {
            left: "Waray hiya mag-andam, salit nakurian hiya ha eksam.",
            right: "He/She did not prepare, so he/she had difficulty with the examination.",
          },
        ],
      },
    },
    {
      title: "B. Explaining Results and Consequences",
      body: [
        "A simple structure to remember is:",
        "Cause + Result Connector + Effect",
        "Nag-uran + salit + nabasa an dalan.",
        "It rained, so the road became wet.",
      ],
    },
    {
      title: "C. Providing Examples and Supporting Details",
      body: [
        "When explaining an idea, examples help make information easier to understand.",
        "The word pananglitan introduces an example.",
        "• Importante an pag-aram hin yinaknan. Pananglitan, mahimo kita mag-aram hin Waray. Learning a language is important. For example, we can learn Waray.",
        "• Damo nga paagi ha pagpraktis. Pananglitan, mahimo kita magbasa, magsurat, ngan mag-istorya. There are many ways to practice. For example, we can read, write, and speak.",
        "You can also use sugad han when mentioning specific examples.",
        "May mga yinaknan ha Pilipinas nga sugad han Waray, Kapampangan, ngan Filipino.",
        "There are languages in the Philippines such as Waray, Kapampangan, and Filipino.",
      ],
    },
    {
      title: "D. Organizing Explanations",
      body: [
        "Longer explanations are easier to understand when information is presented in an organized order.",
        "You may use expressions such as:",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Siyahan",
            right: "First",
          },
          {
            left: "Sunod",
            right: "Next",
          },
          {
            left: "Katapos",
            right: "Afterward",
          },
          {
            left: "Dugang pa",
            right: "In addition",
          },
          {
            left: "Ha kataposan",
            right: "Finally",
          },
        ],
      },
    },
    {
      title: "D. Organizing Explanations",
      body: [
        "Siyahan, kinahanglan naton mag-andam. Sunod, kinahanglan naton magpraktis. Ha kataposan, mahimo na naton ipakita an aton nahibaroan.",
        "First, we need to prepare. Next, we need to practice. Finally, we can demonstrate what we have learned.",
      ],
    },
    {
      title: "E. Responding to Requests for Explanations",
      body: [
        "During conversations, another person may ask you to explain something more clearly.",
        "Useful expressions include:",
      ],
      examples: [
        {
          text: "Ano an imo karuyag sidngon?",
          meaning: "What do you mean?",
        },
        {
          text: "Mahimo mo ba igsaysay?",
          meaning: "Can you explain?",
        },
        {
          text: "Alayon, igsaysay utro.",
          meaning: "Please explain it again.",
        },
        {
          text: "Mahimo ka ba maghatag hin pananglitan?",
          meaning: "Can you give an example?",
        },
      ],
    },
    {
      title: "E. Responding to Requests for Explanations",
      body: [
        "When responding, try to provide a direct explanation followed by a supporting example.",
        "Question: Kay ano nga importante an pag-aram hin Waray?",
        "Answer: Importante ini tungod kay nakakabulig ini ha aton pakigkomunikar ngan ha pagpreserbar han aton yinaknan.",
        "Why is learning Waray important?",
        "It is important because it helps us communicate and preserve our language.",
      ],
    },
  ],
  inferredFields: [
    "usage",
    "example",
    "pronunciation",
    "pattern",
    "choice",
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
