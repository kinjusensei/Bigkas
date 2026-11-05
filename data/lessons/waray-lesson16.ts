import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 16 — imported from "Lesson Plan.pdf", pages 870–883.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
// Fields not given by the plan are INFERRED from this lesson's own content and
// listed in docs/waray-inferred-keys.md: situation, usage, example, pattern, match, arrange, wrong options, pass mark, speaking phrase, respelling, target pitch and mood, example situation, pronunciation tip, badge description, completion requirement.
// The practice answers are INFERRED drafts, not from the PDF. See
// docs/waray-draft-answer-keys.md for each answer and how it was found.

export const warayLesson16: StructuredLesson = {
  lessonId: "waray_16",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 16,
  title: "Constructing More Complex Sentences",
  level: "Intermediate",
  unit: "Grammar and Sentence Construction",
  estimatedDuration: "40–50 minutes",
  prerequisite: "Lessons 1–15",
  intro: [
    "In everyday conversations, people often communicate more than one idea at a time. Instead of using several short sentences, speakers connect related thoughts to explain what happened, describe situations, or express reasons.",
    "For example:",
    "Simple sentences:",
    "• Nag-aadal ako. – I am studying.",
    "• May eksam kami buwas. – We have an exam tomorrow.",
    "Combined idea:",
    "Nag-aadal ako kay may eksam kami buwas. I am studying because we have an exam tomorrow.",
    "By connecting ideas, learners can communicate more naturally and provide additional information.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify connecting words used in longer Waray sentences.",
    "Combine two or more simple ideas into a meaningful sentence.",
    "Express reasons, conditions, contrasts, and sequences of events.",
    "Add descriptive and contextual information to basic sentences.",
    "Construct longer Waray sentences for everyday communication.",
  ],
  extraActivities: [
    {
      title: "Combine the Sentences",
      kind: "rewrite",
      instructions: "Combine each pair of sentences using the connecting word indicated.",
      items: [
        "Nag-aadal ako. May eksam kami. (kay)",
        "Karuyag niya kumadto. Waray hiya panahon. (pero)",
        "May panahon ako. Magbabasa ako. (kon)",
        "Nagbabasa ako. Nagsusurat ako. (ngan)",
        "Kapoy hiya. Nagpapadayon hiya. (bisan kon)",
      ],
    },
    {
      title: "Add More Details",
      kind: "rewrite",
      instructions: "Expand each basic sentence by adding the requested information.",
      items: [
        "Nagbabasa ako. (Add a place.)",
        "Nagluluto hi Nanay. (Add a time.)",
        "Nag-aadal hiya. (Add a reason.)",
        "Nag-uuyag an mga bata. (Add a place and time.)",
        "Nagkadto kami. (Add a destination and time.)",
      ],
    },
    {
      title: "Translate into Waray",
      kind: "translate",
      instructions: "Translate the following sentences using the expressions introduced in this lesson.",
      items: [
        "I am studying because we have an exam tomorrow.",
        "I want to go, but I do not have time.",
        "If it rains, we will stay at home.",
        "She is reading a book at the library.",
        "Even though he is tired, he continues working.",
      ],
    },
    {
      title: "Create Your Own Sentences",
      kind: "open",
      instructions: "Write five original Waray sentences. Each sentence must contain at least two related ideas connected by an appropriate connecting word.\nYour sentences should include:",
      items: [
        "One sentence expressing a reason.",
        "One sentence expressing contrast.",
        "One sentence expressing a condition.",
        "One sentence expressing an alternative choice.",
        "One sentence expressing an action despite an obstacle.",
      ],
    },
  ],
  choiceActivity: {
    title: "Identify the Connecting Word",
    instructions: "Identify the Waray connecting word in each sentence and give its English meaning.",
    questions: [
      {
        id: 1,
        prompt: "Nagbabasa ako ngan nagsusurat.",
        options: [
          {
            key: "A",
            text: "ngan (And)",
          },
          {
            key: "B",
            text: "pero (But)",
          },
          {
            key: "C",
            text: "kay (Because)",
          },
          {
            key: "D",
            text: "Kon (If)",
          },
          {
            key: "E",
            text: "Bisan kon (Although / Even though)",
          },
        ],
        answerKey: "A",
      },
      {
        id: 2,
        prompt: "Karuyag ko kumadto, pero waray ako panahon.",
        options: [
          {
            key: "A",
            text: "ngan (And)",
          },
          {
            key: "B",
            text: "pero (But)",
          },
          {
            key: "C",
            text: "kay (Because)",
          },
          {
            key: "D",
            text: "Kon (If)",
          },
          {
            key: "E",
            text: "Bisan kon (Although / Even though)",
          },
        ],
        answerKey: "B",
      },
      {
        id: 3,
        prompt: "Nag-aadal hiya kay may eksam hira.",
        options: [
          {
            key: "A",
            text: "ngan (And)",
          },
          {
            key: "B",
            text: "pero (But)",
          },
          {
            key: "C",
            text: "kay (Because)",
          },
          {
            key: "D",
            text: "Kon (If)",
          },
          {
            key: "E",
            text: "Bisan kon (Although / Even though)",
          },
        ],
        answerKey: "C",
      },
      {
        id: 4,
        prompt: "Kon umuran, magpapabilin kami ha balay.",
        options: [
          {
            key: "A",
            text: "ngan (And)",
          },
          {
            key: "B",
            text: "pero (But)",
          },
          {
            key: "C",
            text: "kay (Because)",
          },
          {
            key: "D",
            text: "Kon (If)",
          },
          {
            key: "E",
            text: "Bisan kon (Although / Even though)",
          },
        ],
        answerKey: "D",
      },
      {
        id: 5,
        prompt: "Bisan kon kapoy ako, magpapadayon ako.",
        options: [
          {
            key: "A",
            text: "ngan (And)",
          },
          {
            key: "B",
            text: "pero (But)",
          },
          {
            key: "C",
            text: "kay (Because)",
          },
          {
            key: "D",
            text: "Kon (If)",
          },
          {
            key: "E",
            text: "Bisan kon (Although / Even though)",
          },
        ],
        answerKey: "E",
      },
    ],
  },
  fillInBlanks: {
    title: "Complete the Sentences",
    instructions: "Choose an appropriate connecting word to complete each sentence.",
    items: [
      {
        id: "1",
        sentence: "Nagluluto ako _____ gutom kami.",
        answer: "kay",
        title: "Complete the Sentences",
        instructions: "Choose an appropriate connecting word to complete each sentence.",
        wordBank: [
          "kay",
          "pero",
          "Kon",
          "ngan",
          "Bisan kon",
        ],
      },
      {
        id: "2",
        sentence: "Karuyag ko kumadto, _____ uran yana.",
        answer: "pero",
        title: "Complete the Sentences",
        instructions: "Choose an appropriate connecting word to complete each sentence.",
        wordBank: [
          "kay",
          "pero",
          "Kon",
          "ngan",
          "Bisan kon",
        ],
      },
      {
        id: "3",
        sentence: "_____ may panahon ako, mabisita ako ha imo.",
        answer: "Kon",
        title: "Complete the Sentences",
        instructions: "Choose an appropriate connecting word to complete each sentence.",
        wordBank: [
          "kay",
          "pero",
          "Kon",
          "ngan",
          "Bisan kon",
        ],
      },
      {
        id: "4",
        sentence: "Nagbabasa hiya _____ nagsusurat.",
        answer: "ngan",
        title: "Complete the Sentences",
        instructions: "Choose an appropriate connecting word to complete each sentence.",
        wordBank: [
          "kay",
          "pero",
          "Kon",
          "ngan",
          "Bisan kon",
        ],
      },
      {
        id: "5",
        sentence: "_____ kapoy hiya, nagtatrabaho hiya gihapon.",
        answer: "Bisan kon",
        title: "Complete the Sentences",
        instructions: "Choose an appropriate connecting word to complete each sentence.",
        wordBank: [
          "kay",
          "pero",
          "Kon",
          "ngan",
          "Bisan kon",
        ],
      },
    ],
  },
  answerKeysInferred: true,
  rewards: {
    items: [
      {
        section: "vocabulary",
        label: "Connecting Word Identification",
        xp: 10,
      },
      {
        section: "sentences",
        label: "Sentence Combination + Sentence Completion + Sentence Expansion and Translation",
        xp: 35,
      },
      {
        section: "conversation",
        label: "Lesson Assessment",
        xp: 15,
      },
    ],
    total: 60,
    badge: {
      name: "Complex Sentence Builder Badge",
      description: "Awarded after successfully completing Lesson 16.",
    },
    completionRequirement: "Obtain at least 70% in the lesson assessment. Learners may repeat the activities and assessment if they do not meet the requirement.",
  },
  matchActivity: {
    title: "Match the Words",
    instructions: "Match the Waray expression with its English meaning.",
    pairs: [
      {
        id: "1",
        term: "Gihapon",
        answer: "Also",
      },
      {
        id: "2",
        term: "Bisan kon",
        answer: "Although / Even though",
      },
      {
        id: "3",
        term: "Tungod kay",
        answer: "Because of / Due to",
      },
      {
        id: "4",
        term: "Kon",
        answer: "If",
      },
      {
        id: "5",
        term: "Pero",
        answer: "But",
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
          "ako",
          "nagsusurat",
          "Nagbabasa",
          "ngan",
        ],
        answer: [
          "Nagbabasa",
          "ako",
          "ngan",
          "nagsusurat",
        ],
        display: "Nagbabasa ako ngan nagsusurat.",
      },
      {
        id: "2",
        words: [
          "pa",
          "ko",
          "Karuyag",
          "pagkaon",
          "pero",
          "waray",
          "kumaon",
        ],
        answer: [
          "Karuyag",
          "ko",
          "kumaon",
          "pero",
          "waray",
          "pa",
          "pagkaon",
        ],
        display: "Karuyag ko kumaon, pero waray pa pagkaon.",
      },
      {
        id: "3",
        words: [
          "kay",
          "Nag-aadal",
          "hira",
          "eksam",
          "may",
          "hiya",
        ],
        answer: [
          "Nag-aadal",
          "hiya",
          "kay",
          "may",
          "eksam",
          "hira",
        ],
        display: "Nag-aadal hiya kay may eksam hira.",
      },
      {
        id: "4",
        words: [
          "makadto",
          "uran",
          "kami",
          "kon",
          "Bisan",
        ],
        answer: [
          "Bisan",
          "kon",
          "uran",
          "makadto",
          "kami",
        ],
        display: "Bisan kon uran, makadto kami.",
      },
      {
        id: "5",
        words: [
          "kay",
          "eksam",
          "may",
          "ako",
          "Nag-aadal",
          "kami",
        ],
        answer: [
          "Nag-aadal",
          "ako",
          "kay",
          "may",
          "eksam",
          "kami",
        ],
        display: "Nag-aadal ako kay may eksam kami.",
      },
    ],
  },
  assessment: {
    instructions: "Choose the correct answer for each question.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What does ngan mean?",
        options: [
          {
            key: "A",
            text: "And",
          },
          {
            key: "B",
            text: "Or",
          },
          {
            key: "C",
            text: "But",
          },
          {
            key: "D",
            text: "Because",
          },
        ],
        answerKey: "A",
      },
      {
        id: 2,
        prompt: "Which Waray word is commonly used to express contrast?",
        options: [
          {
            key: "A",
            text: "Ngan",
          },
          {
            key: "B",
            text: "Pero",
          },
          {
            key: "C",
            text: "Kay",
          },
          {
            key: "D",
            text: "Kon",
          },
        ],
        answerKey: "B",
      },
      {
        id: 3,
        prompt: "What does kay express when connecting two ideas?",
        options: [
          {
            key: "A",
            text: "A contrast",
          },
          {
            key: "B",
            text: "A condition",
          },
          {
            key: "C",
            text: "A reason or explanation",
          },
          {
            key: "D",
            text: "A choice",
          },
        ],
        answerKey: "C",
      },
      {
        id: 4,
        prompt: "What does kon mean in a conditional sentence?",
        options: [
          {
            key: "A",
            text: "But",
          },
          {
            key: "B",
            text: "And",
          },
          {
            key: "C",
            text: "Or",
          },
          {
            key: "D",
            text: "If",
          },
        ],
        answerKey: "D",
      },
      {
        id: 5,
        prompt: "Translate: “I want to go, but I have no time.”",
        options: [
          {
            key: "A",
            text: "Karuyag ko kumadto, pero waray ako panahon.",
          },
          {
            key: "B",
            text: "Kon umuran, magpapabilin kami ha balay.",
          },
          {
            key: "C",
            text: "Nag-aadal ako kay may eksam kami.",
          },
          {
            key: "D",
            text: "Bisan kon uran, makadto ako.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 6,
        prompt: "Translate: “If it rains, we will stay at home.”",
        options: [
          {
            key: "A",
            text: "Karuyag ko kumadto, pero waray ako panahon.",
          },
          {
            key: "B",
            text: "Kon umuran, magpapabilin kami ha balay.",
          },
          {
            key: "C",
            text: "Nag-aadal ako kay may eksam kami.",
          },
          {
            key: "D",
            text: "Bisan kon uran, makadto ako.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 7,
        prompt: "Which expression means “even if” or “although”?",
        options: [
          {
            key: "A",
            text: "Pero",
          },
          {
            key: "B",
            text: "Ngan",
          },
          {
            key: "C",
            text: "Bisan kon",
          },
          {
            key: "D",
            text: "Kay",
          },
        ],
        answerKey: "C",
      },
      {
        id: 8,
        prompt: "Translate: “I am studying because we have an exam.”",
        options: [
          {
            key: "A",
            text: "Karuyag ko kumadto, pero waray ako panahon.",
          },
          {
            key: "B",
            text: "Kon umuran, magpapabilin kami ha balay.",
          },
          {
            key: "C",
            text: "Bisan kon uran, makadto kami.",
          },
          {
            key: "D",
            text: "Nag-aadal ako kay may eksam kami.",
          },
        ],
        answerKey: "D",
      },
      {
        id: 9,
        prompt: "What does o mean?",
        options: [
          {
            key: "A",
            text: "Or",
          },
          {
            key: "B",
            text: "And",
          },
          {
            key: "C",
            text: "But",
          },
          {
            key: "D",
            text: "Because",
          },
        ],
        answerKey: "A",
      },
      {
        id: 10,
        prompt: "Why are connecting words useful when constructing longer sentences?",
        options: [
          {
            key: "A",
            text: "They make every sentence shorter.",
          },
          {
            key: "B",
            text: "They connect related ideas and make sentences more complete and meaningful.",
          },
          {
            key: "C",
            text: "They replace all the verbs.",
          },
          {
            key: "D",
            text: "They are used only in questions.",
          },
        ],
        answerKey: "B",
      },
    ],
  },
  speaking: {
    title: "Speaking Practice",
    instructions: "Read the following sentences aloud.",
    note: "Learners should listen to the model pronunciation before recording their own voice.",
    practiceLessonId: "waray_16",
    phrases: [
      {
        id: "1",
        text: "Nagbabasa ako ngan nagsusurat.",
        respelling: "nag-ba-ba-sa a-ko ngan nag-su-su-rat",
        meaning: "I am reading and writing.",
      },
      {
        id: "2",
        text: "Kapoy ako, pero magtatrabaho ako gihapon.",
        respelling: "ka-poy a-ko pe-ro mag-tat-ra-ba-ho a-ko gee-hah-pohn",
        meaning: "I am tired, but I will still work.",
      },
      {
        id: "3",
        text: "Kay ano nga nag-aadal ka?",
        respelling: "kai a-no nga nahg-ah-ah-dahl ka",
        meaning: "Why are you studying?",
      },
      {
        id: "4",
        text: "Gutiay an balay, pero komportable.",
        respelling: "gu-ti-ay an ba-lay pe-ro kom-por-tab-le",
        meaning: "The house is small, but it is comfortable.",
      },
      {
        id: "5",
        text: "Nag-aadal ako, pero kapoy ako.",
        respelling: "nahg-ah-ah-dahl a-ko pe-ro ka-poy a-ko",
        meaning: "I am studying, but I am tired.",
      },
      {
        id: "6",
        text: "Bisan kon uran, makadto ako.",
        respelling: "bi-san kon u-ran ma-kad-to a-ko",
        meaning: "Even if it rains, I will go.",
      },
      {
        id: "7",
        text: "Nagkadto kami ha merkado kakulop.",
        respelling: "nag-kad-to ka-mi ha mehr-kah-doh ka-ku-lop",
        meaning: "We went to the market yesterday afternoon.",
      },
    ],
  },
  exampleSituation: {
    description: "Imagine this situation from the lesson: Explaining Why You Are Studying.",
    lead: "You can begin by saying:",
    line: "Kay ano nga nag-aadal ka yana?",
    translation: "Why are you studying now?",
  },
  vocabularyIntro: "Learn the following words and expressions before proceeding to the activities.",
  pronunciationTip: "Read each syllable clearly. Avoid rushing through longer expressions.",
  selfIntroIntro: "Use these patterns and phrases from the lesson.",
  vocabulary: [
    {
      term: "Ngan",
      meaning: "And",
      pronunciation: "Ngan",
      usage: "From this lesson's word list: basic connectors.",
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
      usage: "From this lesson's word list: basic connectors.",
      example: [
        {
          speaker: "A",
          text: "Kapoy ka na ba?",
          translation: "Are you tired already?",
        },
        {
          speaker: "B",
          text: "Oo, pero kinahanglan ko magpadayon.",
          translation: "Yes, but I need to continue.",
        },
      ],
    },
    {
      term: "O",
      meaning: "Or",
      pronunciation: "O",
      usage: "From this lesson's word list: basic connectors.",
      example: [
        {
          speaker: "",
          text: "Karuyag mo ba hin tubig o juice?",
          translation: "Do you want water or juice?",
        },
      ],
    },
    {
      term: "Kay",
      meaning: "Because",
      pronunciation: "Kay",
      usage: "From this lesson's word list: basic connectors.",
      example: [
        {
          speaker: "A",
          text: "Kay ano nga nag-aadal ka yana?",
          translation: "Why are you studying now?",
        },
        {
          speaker: "B",
          text: "Nag-aadal ako kay may eksam kami buwas.",
          translation: "I am studying because we have an exam tomorrow.",
        },
      ],
    },
    {
      term: "Tungod kay",
      meaning: "Because of / Due to",
      pronunciation: "Tung-od kay",
      usage: "From this lesson's word list: basic connectors.",
      example: [
        {
          speaker: "",
          text: "Waray kami kumadto tungod kay nag-uran.",
          translation: "We did not go because it rained.",
        },
      ],
    },
    {
      term: "Kon",
      meaning: "If",
      pronunciation: "Kon",
      usage: "From this lesson's word list: basic connectors.",
      example: [
        {
          speaker: "A",
          text: "Oo, pero kinahanglan ko magpadayon.",
          translation: "Yes, but I need to continue.",
        },
        {
          speaker: "B",
          text: "Kon karuyag mo, mahimo kita mag-aram upod.",
          translation: "If you want, we can study together.",
        },
      ],
    },
    {
      term: "Bisan kon",
      meaning: "Although / Even though",
      pronunciation: "Bi-san kon",
      usage: "From this lesson's word list: basic connectors.",
      example: [
        {
          speaker: "A",
          text: "Kon diri umuran, makadto kita.",
          translation: "If it does not rain, we will go.",
        },
        {
          speaker: "B",
          text: "Sige. Bisan kon diri kita makadto ha baybayon, mahimo kita mag-istorya ha balay.",
          translation: "Okay. Even if we do not go to the beach, we can talk at home.",
        },
      ],
    },
    {
      term: "Gihapon",
      meaning: "Also",
      pronunciation: "Gi-ha-pon",
      usage: "From this lesson's word list: basic connectors.",
      example: [
        {
          speaker: "A",
          text: "Sige. Bisan kon diri kita makadto ha baybayon, mahimo kita mag-istorya ha balay.",
          translation: "Okay. Even if we do not go to the beach, we can talk at home.",
        },
        {
          speaker: "B",
          text: "Maupay gihapon ito.",
          translation: "That is still good.",
        },
      ],
    },
  ],
  greetings: [
    {
      term: "Ngan",
      meaning: "And",
      pronunciation: "Ngan",
      usage: "From this lesson's word list: basic connectors.",
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
      usage: "From this lesson's word list: basic connectors.",
      example: [
        {
          speaker: "A",
          text: "Kapoy ka na ba?",
          translation: "Are you tired already?",
        },
        {
          speaker: "B",
          text: "Oo, pero kinahanglan ko magpadayon.",
          translation: "Yes, but I need to continue.",
        },
      ],
    },
    {
      term: "O",
      meaning: "Or",
      pronunciation: "O",
      usage: "From this lesson's word list: basic connectors.",
      example: [
        {
          speaker: "",
          text: "Karuyag mo ba hin tubig o juice?",
          translation: "Do you want water or juice?",
        },
      ],
    },
    {
      term: "Kay",
      meaning: "Because",
      pronunciation: "Kay",
      usage: "From this lesson's word list: basic connectors.",
      example: [
        {
          speaker: "A",
          text: "Kay ano nga nag-aadal ka yana?",
          translation: "Why are you studying now?",
        },
        {
          speaker: "B",
          text: "Nag-aadal ako kay may eksam kami buwas.",
          translation: "I am studying because we have an exam tomorrow.",
        },
      ],
    },
    {
      term: "Tungod kay",
      meaning: "Because of / Due to",
      pronunciation: "Tung-od kay",
      usage: "From this lesson's word list: basic connectors.",
      example: [
        {
          speaker: "",
          text: "Waray kami kumadto tungod kay nag-uran.",
          translation: "We did not go because it rained.",
        },
      ],
    },
    {
      term: "Kon",
      meaning: "If",
      pronunciation: "Kon",
      usage: "From this lesson's word list: basic connectors.",
      example: [
        {
          speaker: "A",
          text: "Oo, pero kinahanglan ko magpadayon.",
          translation: "Yes, but I need to continue.",
        },
        {
          speaker: "B",
          text: "Kon karuyag mo, mahimo kita mag-aram upod.",
          translation: "If you want, we can study together.",
        },
      ],
    },
    {
      term: "Bisan kon",
      meaning: "Although / Even though",
      pronunciation: "Bi-san kon",
      usage: "From this lesson's word list: basic connectors.",
      example: [
        {
          speaker: "A",
          text: "Kon diri umuran, makadto kita.",
          translation: "If it does not rain, we will go.",
        },
        {
          speaker: "B",
          text: "Sige. Bisan kon diri kita makadto ha baybayon, mahimo kita mag-istorya ha balay.",
          translation: "Okay. Even if we do not go to the beach, we can talk at home.",
        },
      ],
    },
    {
      term: "Gihapon",
      meaning: "Also",
      pronunciation: "Gi-ha-pon",
      usage: "From this lesson's word list: basic connectors.",
      example: [
        {
          speaker: "A",
          text: "Sige. Bisan kon diri kita makadto ha baybayon, mahimo kita mag-istorya ha balay.",
          translation: "Okay. Even if we do not go to the beach, we can talk at home.",
        },
        {
          speaker: "B",
          text: "Maupay gihapon ito.",
          translation: "That is still good.",
        },
      ],
    },
  ],
  patterns: [
    {
      label: "Pattern 1: Giving a Reason",
      pattern: "Sentence + kay + Reason.",
      examples: [
        "Nag-aadal ako kay may eksam kami.",
      ],
    },
    {
      label: "Pattern 2: Showing Contrast",
      pattern: "Sentence + pero + Sentence.",
      examples: [
        "Karuyag ko kumadto, pero waray ako panahon.",
        "Kapoy ako, pero magtatrabaho ako gihapon.",
      ],
    },
    {
      label: "Pattern 3: Saying “Even If”",
      pattern: "Bisan kon uran, makadto + Person.",
      examples: [
        "Bisan kon uran, makadto kami.",
        "Bisan kon uran, makadto ako.",
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
      text: "Nag-aadal hiya kay may eksam hira.",
      meaning: "He/She is studying because they have an exam.",
    },
    {
      text: "Makadto ako kon may panahon ako.",
      meaning: "I will go if I have time.",
    },
    {
      text: "Bisan kon uran, makadto kami.",
      meaning: "Even if it rains, we will go.",
    },
    {
      text: "Kapoy ako, pero magtatrabaho ako gihapon.",
      meaning: "I am tired, but I will still work.",
    },
    {
      text: "Nag-aadal ako kay may eksam kami.",
      meaning: "I am studying because we have an exam.",
    },
    {
      text: "Nalilipay hiya kay nakit-an niya an iya sangkay.",
      meaning: "He/She is happy because he/she saw a friend.",
    },
    {
      text: "Nagpahuway ako kay kapoy ako.",
      meaning: "I rested because I was tired.",
    },
    {
      text: "Waray ako kumadto kay may trabaho ako.",
      meaning: "I did not go because I had work.",
    },
    {
      text: "Waray kami kumadto tungod kay nag-uran.",
      meaning: "We did not go because it rained.",
    },
    {
      text: "Nagpahuway hiya tungod kay masakit an iya ulo.",
      meaning: "He/She rested because his/her head hurt.",
    },
    {
      text: "Nalangan ako tungod kay damu an tawo ha dalan.",
      meaning: "I was delayed because there were many people on the road.",
    },
    {
      text: "Kay ano nga nag-aadal ka?",
      meaning: "Why are you studying?",
    },
    {
      text: "Kay ano nga waray ka kumadto?",
      meaning: "Why did you not go?",
    },
    {
      text: "Kay ano nga nalipay hiya?",
      meaning: "Why was he/she happy?",
    },
    {
      text: "Karuyag ko kumadto, pero waray ako panahon.",
      meaning: "I want to go, but I have no time.",
    },
    {
      text: "Mahal an libro, pero mapulsanon ito.",
      meaning: "The book is expensive, but it is useful.",
    },
    {
      text: "Gutiay an balay, pero komportable.",
      meaning: "The house is small, but it is comfortable.",
    },
    {
      text: "Karuyag mo ba hin tubig o juice?",
      meaning: "Do you want water or juice?",
    },
    {
      text: "Magbabasa ka ba o magsusurat?",
      meaning: "Will you read or write?",
    },
    {
      text: "Makadto kita yana o buwas?",
      meaning: "Shall we go today or tomorrow?",
    },
    {
      text: "Nag-aadal ako kay may eksam.",
      meaning: "I am studying because there is an exam.",
    },
    {
      text: "Nag-aadal ako, pero kapoy ako.",
      meaning: "I am studying, but I am tired.",
    },
    {
      text: "Kon may panahon ako, magbabasa ako.",
      meaning: "If I have time, I will read.",
    },
    {
      text: "Kon umuran, magpapabilin kami ha balay.",
      meaning: "If it rains, we will stay at home.",
    },
    {
      text: "Kon gutom ka, kumaon ka anay.",
      meaning: "If you are hungry, eat first.",
    },
    {
      text: "Kon kinahanglan mo hin bulig, sumati ako.",
      meaning: "If you need help, tell me.",
    },
    {
      text: "Bisan kon uran, makadto ako.",
      meaning: "Even if it rains, I will go.",
    },
    {
      text: "Bisan kon kapoy hiya, nagpapadayon hiya.",
      meaning: "Even though he/she is tired, he/she continues.",
    },
    {
      text: "Bisan kon hirayo an eskwelahan, naglalakat ako.",
      meaning: "Even though the school is far, I walk.",
    },
    {
      text: "Bisan kon waray ako panahon, mangalimbasog ako.",
      meaning: "Even if I have no time, I will make an effort.",
    },
    {
      text: "Nag-aadal ako yana nga gab-i.",
      meaning: "I am studying tonight.",
    },
    {
      text: "Nagkadto kami ha merkado kakulop.",
      meaning: "We went to the market yesterday afternoon.",
    },
    {
      text: "Magtatrabaho hiya buwas nga aga.",
      meaning: "He/She will work tomorrow morning.",
    },
    {
      text: "Nagbabasa ako hin libro ha librarya.",
      meaning: "I am reading a book at the library.",
    },
    {
      text: "Nagluluto hi Nanay ha kusina.",
      meaning: "Mother is cooking in the kitchen.",
    },
    {
      text: "Nag-uuyag an mga kabataan ha gawas han balay.",
      meaning: "The children are playing outside the house.",
    },
    {
      text: "Matahom an balay nga hirani ha baybayon.",
      meaning: "The house near the beach is beautiful.",
    },
    {
      text: "Malipayon an bata kay nakakarawat hiya hin regalo.",
      meaning: "The child is happy because he/she received a gift.",
    },
    {
      text: "Daku an merkado ngan damu an namamalit didto.",
      meaning: "The market is big, and many people shop there.",
    },
  ],
  conversations: [
    {
      title: "Conversation A: Explaining Why You Are Studying",
      lines: [
        {
          speaker: "Ana",
          text: "Kay ano nga nag-aadal ka yana?",
          translation: "Why are you studying now?",
        },
        {
          speaker: "Ben",
          text: "Nag-aadal ako kay may eksam kami buwas.",
          translation: "I am studying because we have an exam tomorrow.",
        },
        {
          speaker: "Ana",
          text: "Kapoy ka na ba?",
          translation: "Are you tired already?",
        },
        {
          speaker: "Ben",
          text: "Oo, pero kinahanglan ko magpadayon.",
          translation: "Yes, but I need to continue.",
        },
        {
          speaker: "Ana",
          text: "Kon karuyag mo, mahimo kita mag-aram upod.",
          translation: "If you want, we can study together.",
        },
        {
          speaker: "Ben",
          text: "Maupay ito nga ideya.",
          translation: "That is a good idea.",
        },
      ],
      situation: "Ana and Ben: Explaining Why You Are Studying.",
    },
    {
      title: "Conversation B: Making Plans Despite the Weather",
      lines: [
        {
          speaker: "Carlo",
          text: "Makadto ba kita ha baybayon buwas?",
          translation: "Are we going to the beach tomorrow?",
        },
        {
          speaker: "Mark",
          text: "Karuyag ko, pero bangin umuran.",
          translation: "I want to, but it might rain.",
        },
        {
          speaker: "Carlo",
          text: "Kon diri umuran, makadto kita.",
          translation: "If it does not rain, we will go.",
        },
        {
          speaker: "Mark",
          text: "Sige. Bisan kon diri kita makadto ha baybayon, mahimo kita mag-istorya ha balay.",
          translation: "Okay. Even if we do not go to the beach, we can talk at home.",
        },
        {
          speaker: "Carlo",
          text: "Maupay gihapon ito.",
          translation: "That is still good.",
        },
        {
          speaker: "Mark",
          text: "Kitaay kita buwas.",
          translation: "See you tomorrow.",
          audioUrl: require("../../assets/audio/Lesson Waray/kitaay kita buwas.aac"),
        },
      ],
      situation: "Carlo and Mark: Making Plans Despite the Weather.",
    },
    {
      title: "Conversation C: Describing a School Activity",
      lines: [
        {
          speaker: "Maria",
          text: "Ano an iyo ginbubuhat ha eskwelahan?",
          translation: "What are you doing at school?",
        },
        {
          speaker: "Rosa",
          text: "Naghihimo kami hin proyekto.",
          translation: "We are making a project.",
        },
        {
          speaker: "Maria",
          text: "Makuri ba ito?",
          translation: "Is it difficult?",
        },
        {
          speaker: "Rosa",
          text: "Oo, pero nakakalingaw kay nagbubuligay kami.",
          translation: "Yes, but it is enjoyable because we help one another.",
        },
        {
          speaker: "Maria",
          text: "Maupay ito kay mas masayon an trabaho kon may kaupod.",
          translation: "That is good because work is easier when someone is with you.",
        },
        {
          speaker: "Rosa",
          text: "Tinuod ito.",
          translation: "That is true.",
        },
      ],
      situation: "Maria and Rosa: Describing a School Activity.",
    },
  ],
  languageNotes: [
    {
      title: "Expressing Reasons and Explanations",
      body: [
        "A reason explains why something happens or why someone does something.",
      ],
    },
    {
      title: "A. Using Kay",
      body: [
        "The word kay can introduce a reason.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Nag-aadal ako kay may eksam kami.",
            right: "I am studying because we have an exam.",
          },
          {
            left: "Nalilipay hiya kay nakit-an niya an iya sangkay.",
            right: "He/She is happy because he/she saw a friend.",
          },
          {
            left: "Nagpahuway ako kay kapoy ako.",
            right: "I rested because I was tired.",
          },
          {
            left: "Waray ako kumadto kay may trabaho ako.",
            right: "I did not go because I had work.",
          },
        ],
      },
    },
    {
      title: "B. Using Tungod Kay",
      body: [
        "The expression tungod kay introduces a reason or cause.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Waray kami kumadto tungod kay nag-uran.",
            right: "We did not go because it rained.",
          },
          {
            left: "Nagpahuway hiya tungod kay masakit an iya ulo.",
            right: "He/She rested because his/her head hurt.",
          },
          {
            left: "Nalangan ako tungod kay damu an tawo ha dalan.",
            right: "I was delayed because there were many people on the road.",
          },
        ],
      },
    },
    {
      title: "C. Asking for Reasons",
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Kay ano nga nag-aadal ka?",
            right: "Why are you studying?",
          },
          {
            left: "Kay ano nga waray ka kumadto?",
            right: "Why did you not go?",
          },
          {
            left: "Kay ano nga nalipay hiya?",
            right: "Why was he/she happy?",
          },
        ],
      },
    },
    {
      title: "C. Asking for Reasons",
      body: [
        "Example response:",
        "Kay karuyag ko mahibaro hin bag-o nga mga pulong. Because I want to learn new words.",
      ],
    },
    {
      title: "Expressing Contrast and Alternative Choices",
      body: [
        "Contrast is used when two ideas differ or do not agree with each other.",
      ],
    },
    {
      title: "A. Using Pero",
      body: [
        "Pero means “but” and introduces a contrasting idea.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Karuyag ko kumadto, pero waray ako panahon.",
            right: "I want to go, but I have no time.",
          },
          {
            left: "Mahal an libro, pero mapulsanon ito.",
            right: "The book is expensive, but it is useful.",
          },
          {
            left: "Gutiay an balay, pero komportable.",
            right: "The house is small, but it is comfortable.",
          },
        ],
      },
    },
    {
      title: "B. Using O",
      body: [
        "O means “or” and introduces another choice.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Karuyag mo ba hin tubig o juice?",
            right: "Do you want water or juice?",
          },
          {
            left: "Magbabasa ka ba o magsusurat?",
            right: "Will you read or write?",
          },
          {
            left: "Makadto kita yana o buwas?",
            right: "Shall we go today or tomorrow?",
          },
        ],
      },
    },
    {
      title: "C. Comparing Ideas",
      body: [
        "Consider the difference:",
      ],
      examples: [
        {
          text: "Nag-aadal ako kay may eksam.",
          meaning: "I am studying because there is an exam.",
        },
        {
          text: "Nag-aadal ako, pero kapoy ako.",
          meaning: "I am studying, but I am tired.",
        },
      ],
    },
    {
      title: "C. Comparing Ideas",
      body: [
        "The first sentence explains a reason. The second presents two contrasting ideas.",
      ],
    },
    {
      title: "Expressing Conditions and Possibilities",
      body: [
        "Conditional sentences describe situations in which one action or result depends on another.",
      ],
    },
    {
      title: "A. Using Kon",
      body: [
        "Kon means “if” or “when,” depending on the context.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Kon may panahon ako, magbabasa ako.",
            right: "If I have time, I will read.",
          },
          {
            left: "Kon umuran, magpapabilin kami ha balay.",
            right: "If it rains, we will stay at home.",
          },
          {
            left: "Kon gutom ka, kumaon ka anay.",
            right: "If you are hungry, eat first.",
          },
          {
            left: "Kon kinahanglan mo hin bulig, sumati ako.",
            right: "If you need help, tell me.",
          },
        ],
      },
    },
    {
      title: "B. Using Bisan Kon",
      body: [
        "Bisan kon means “even if” or “although,” depending on the sentence.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Bisan kon uran, makadto ako.",
            right: "Even if it rains, I will go.",
          },
          {
            left: "Bisan kon kapoy hiya, nagpapadayon hiya.",
            right: "Even though he/she is tired, he/she continues.",
          },
          {
            left: "Bisan kon hirayo an eskwelahan, naglalakat ako.",
            right: "Even though the school is far, I walk.",
          },
        ],
      },
    },
    {
      title: "C. Practice Understanding Conditions",
      body: [
        "Compare:",
      ],
      examples: [
        {
          text: "Kon may panahon ako, magbabasa ako.",
          meaning: "If I have time, I will read.",
        },
        {
          text: "Bisan kon waray ako panahon, mangalimbasog ako.",
          meaning: "Even if I have no time, I will make an effort.",
        },
      ],
    },
    {
      title: "C. Practice Understanding Conditions",
      body: [
        "The first expresses a condition. The second expresses an action despite an obstacle.",
      ],
    },
    {
      title: "Adding Details and Descriptions",
      body: [
        "Longer sentences often include information about time, place, manner, or the people involved.",
      ],
    },
    {
      title: "A. Adding Time",
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Nag-aadal ako yana nga gab-i.",
            right: "I am studying tonight.",
          },
          {
            left: "Nagkadto kami ha merkado kakulop.",
            right: "We went to the market yesterday afternoon.",
          },
          {
            left: "Magtatrabaho hiya buwas nga aga.",
            right: "He/She will work tomorrow morning.",
          },
        ],
      },
    },
    {
      title: "B. Adding Place",
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Nagbabasa ako hin libro ha librarya.",
            right: "I am reading a book at the library.",
          },
          {
            left: "Nagluluto hi Nanay ha kusina.",
            right: "Mother is cooking in the kitchen.",
          },
          {
            left: "Nag-uuyag an mga kabataan ha gawas han balay.",
            right: "The children are playing outside the house.",
          },
        ],
      },
    },
    {
      title: "C. Adding Descriptions",
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Matahom an balay nga hirani ha baybayon.",
            right: "The house near the beach is beautiful.",
          },
          {
            left: "Malipayon an bata kay nakakarawat hiya hin regalo.",
            right: "The child is happy because he/she received a gift.",
          },
          {
            left: "Daku an merkado ngan damu an namamalit didto.",
            right: "The market is big, and many people shop there.",
          },
        ],
      },
    },
    {
      title: "D. Combining Multiple Details",
      body: [
        "Nagbabasa hi Maria hin libro ha librarya kay may proyekto hira ha eskwelahan.",
        "Maria is reading a book at the library because they have a project at school.",
        "This sentence includes:",
        "• Action: Nagbabasa",
        "• Subject: Maria",
        "• Object: Hin libro",
        "• Place: Ha librarya",
        "• Reason: Kay may proyekto hira ha eskwelahan",
      ],
    },
    {
      title: "A. Basic Connectors",
      body: [
        "Connecting words, also called conjunctions, join words, phrases, or sentences.",
      ],
    },
  ],
  inferredFields: [
    "situation",
    "usage",
    "example",
    "pattern",
    "match",
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
