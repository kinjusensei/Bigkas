import {
  LessonExpressionGroup,
  LessonSpeaking,
  StructuredLesson,
} from "../../types/structuredLesson";

// Kapampangan Lesson 2 — copied from "Kapampangan_Lesson_2.pdf", a
// translation of the Tagalog Lesson 2. Nothing was corrected. Lesson
// content is in Kapampangan; instructions, activities and the assessment
// keep the document's English.
//
// The document marks some phrases "(?)" — to be checked by a native
// Kapampangan speaker. The marks are left out of what learners see; the
// phrases are listed in kapampanganReviewItems below.

// Phrases the document marks "(?)", exactly as written (without the mark).
export const kapampanganReviewItems: string[] = [
  // II. Lesson Introduction
  "Mamagsalita ya ing tau king aldo-aldo. Aliwa pa king pamagbati at pamagpakilala, madalas mamagpasalamat, mamagpakiusap, mamagsori, mamagsang-ayon, o mamagsagut king tanung.",
  'Keng Kapampangan, atin salitang gamit para magpakit ning respetu at kabaitan. Metung kareni ing "pu", a madalas idagdag nung magsalita ka kareng matatwa, guru, at tau a gustu mung respetuhan.',
  // III. Vocabulary and Common Expressions
  "Alang nanuman.",
  "Salamat king saup mu.",
  "Patawad.",
  "Patawaran mu ku.",
  "E ku misadya.",
  "Obat ya ing huli ka?",
  "Patawad pu. Atin kung problema king biyahe.",
  "Tutu ka.",
  "Mayasa ku.",
  "E ku mayasa.",
  "Mapalyari.",
  "Mapalyari ba?",
  "Saupan mu ku.",
  "Mapalyari mu ba kung saupan?",
  "Mapalyari pu ba kung magtanung?",
  "Antabayan mu.",
  "Sige, mamaya na la.",
  // V. Guided Conversation, Situation 2
  "Obat mu pinabuak ing danum?",
];

// Lesson details the StructuredLesson type has no field for, kept here so
// they are in the code with the lesson.
export const kapampanganLesson2Details = {
  prerequisite: "Lesson 1 – Basic Greetings and Self-Introduction",
  completionCriteria: [
    "Complete the vocabulary section.",
    "Review the language notes.",
    "Finish the guided conversations.",
    "Complete the interactive exercises.",
    "Attempt the speaking activity.",
    "Obtain at least 70% in the assessment.",
  ],
  learningOutcome:
    "After completing this lesson, learners should be able to use common Kapampangan expressions in everyday conversations, respond appropriately to simple statements and questions, and demonstrate politeness when expressing gratitude, apologizing, agreeing, disagreeing, and requesting assistance.",
};

// III. Vocabulary and Common Expressions
const expressionGroups: LessonExpressionGroup[] = [
  {
    title: "A. Expressions of Gratitude",
    items: [
      { term: "Salamat.", meaning: "Thank you." },
      { term: "Dakal a salamat.", meaning: "Thank you very much." },
      { term: "Alang nanuman.", meaning: "You're welcome." },
      { term: "Salamat king saup mu.", meaning: "Thank you for your help." },
      { term: "Salamat pu.", meaning: "Thank you. (Respectful)" },
    ],
    examples: [
      [
        { speaker: "A", text: "Oyni ing libro mu." },
        { speaker: "B", text: "Dakal a salamat!" },
      ],
      [
        { speaker: "A", text: "Salamat pu king saup yu." },
        { speaker: "B", text: "Alang nanuman." },
      ],
    ],
  },
  {
    title: "B. Expressions of Apology",
    items: [
      { term: "Pasensya na.", meaning: "I'm sorry." },
      { term: "Patawad.", meaning: "My apologies." },
      { term: "Patawaran mu ku.", meaning: "Forgive me." },
      { term: "E ku misadya.", meaning: "I didn't mean to." },
      { term: "Pasensya na pu.", meaning: "I'm sorry. (Respectful)" },
    ],
    examples: [
      [
        { speaker: "A", text: "Natapakan mu ing paa ku." },
        { speaker: "B", text: "Ay, pasensya na!" },
      ],
      [
        { speaker: "A", text: "Obat ya ing huli ka?" },
        { speaker: "B", text: "Patawad pu. Atin kung problema king biyahe." },
      ],
    ],
  },
  {
    title: "C. Expressions of Agreement and Disagreement",
    items: [
      { term: "Wa.", meaning: "Yes." },
      { term: "Alì.", meaning: "No." },
      { term: "Sige.", meaning: "Okay / Sure." },
      { term: "Tutu ka.", meaning: "You're right." },
      { term: "Mayasa ku.", meaning: "I agree." },
      { term: "E ku mayasa.", meaning: "I disagree." },
      { term: "Siguru.", meaning: "Maybe." },
      { term: "Mapalyari.", meaning: "Possibly / It is possible." },
    ],
    examples: [
      [
        { speaker: "A", text: "Sasama ka ba keng amin?" },
        { speaker: "B", text: "Wa, sige!" },
      ],
      [
        { speaker: "A", text: "Mayap ya ing ideya na." },
        { speaker: "B", text: "Mayasa ku." },
      ],
      [
        { speaker: "A", text: "Tutu ba ing sagut ku?" },
        { speaker: "B", text: "Wa, tutu ka!" },
      ],
    ],
  },
  {
    title: "D. Expressions for Asking Permission and Requesting Help",
    items: [
      { term: "Mapalyari ba?", meaning: "May I? / Is it possible?" },
      { term: "Pwede ba?", meaning: "Can I? / Is it allowed?" },
      { term: "Pakiusap.", meaning: "Please. / A request." },
      { term: "Saupan mu ku.", meaning: "Please help me." },
      { term: "Mapalyari mu ba kung saupan?", meaning: "Can you help me?" },
      {
        term: "Mapalyari pu ba kung magtanung?",
        meaning: "May I ask a question?",
      },
    ],
    examples: [
      [
        { speaker: "A", text: "Mapalyari pu ba kung lumwal?" },
        { speaker: "B", text: "Wa, mapalyari." },
      ],
      [
        { speaker: "A", text: "Mapalyari mu ba kung saupan?" },
        { speaker: "B", text: "Wa naman!" },
      ],
    ],
  },
  {
    title: "E. Expressions Used in Everyday Conversations",
    items: [
      { term: "Antabayan mu.", meaning: "Just a moment." },
      { term: "E ku balu.", meaning: "I don't know." },
      { term: "Intindian ku.", meaning: "I understand." },
      { term: "E ku intindian.", meaning: "I don't understand." },
      { term: "Tutu ba?", meaning: "Really? / Is that true?" },
      { term: "Talaga?", meaning: "Really?" },
      { term: "Mag-ingat ka.", meaning: "Take care." },
      { term: "Ayos la.", meaning: "It's okay." },
      { term: "Alang problema.", meaning: "No problem." },
      { term: "Sige, mamaya na la.", meaning: "Okay, maybe later." },
    ],
  },
];

// VI. Activity 6: Speaking Practice. Meanings come from the vocabulary
// tables; "Wa pu, intindian ku pu." and "Sige, sasama ku." aren't in the
// tables, so they show no meaning.
const speaking: LessonSpeaking = {
  title: "Speaking Practice",
  instructions:
    "Listen to the model pronunciation, then repeat the following expressions.",
  note: "Speaking Challenge: Record yourself saying at least five expressions. Try to pronounce each word clearly and naturally.",
  phrases: [
    { id: "1", text: "Dakal a salamat.", meaning: "Thank you very much." },
    { id: "2", text: "Alang nanuman.", meaning: "You're welcome." },
    { id: "3", text: "Pasensya na pu.", meaning: "I'm sorry. (Respectful)" },
    { id: "4", text: "E ku intindian.", meaning: "I don't understand." },
    {
      id: "5",
      text: "Mapalyari pu ba kung magtanung?",
      meaning: "May I ask a question?",
    },
    { id: "6", text: "Wa pu, intindian ku pu." },
    { id: "7", text: "Sige, sasama ku." },
    { id: "8", text: "Mag-ingat ka!", meaning: "Take care." },
  ],
};

export const kapampanganLesson2: StructuredLesson = {
  lessonId: "kapampangan_2",
  dialect: "kapampangan",
  dialectLabel: "Kapampangan",
  lessonNumber: 2,
  title: "Common Expressions and Responses",
  level: "Beginner",
  unit: "Fundamentals",

  // II. Lesson Introduction
  intro: [
    "Mamagsalita ya ing tau king aldo-aldo. Aliwa pa king pamagbati at pamagpakilala, madalas mamagpasalamat, mamagpakiusap, mamagsori, mamagsang-ayon, o mamagsagut king tanung.",
    'Keng Kapampangan, atin salitang gamit para magpakit ning respetu at kabaitan. Metung kareni ing "pu", a madalas idagdag nung magsalita ka kareng matatwa, guru, at tau a gustu mung respetuhan.',
    "Keng leksyun a ini, mamamag-aral ka ning pamagsalita a makatulung king natural a pamagkomunikasyun king aldo-aldo.",
  ],
  exampleSituation: {
    description:
      "Pinahiram ka ning lapis ning kaklase mu. Gustu mung magpasalamat.",
    lead: "Pwede mung sabian:",
    line: "Dakal a salamat!",
  },
  moreExampleSituations: [
    {
      description: "Nung mabunggu mu ing metung a tau, pwede mung sabian:",
      line: "Pasensya na!",
    },
  ],

  // I. Learning Objectives
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Recognize common Kapampangan expressions used in everyday conversations.",
    "Understand and use polite expressions when communicating with others.",
    "Respond appropriately to simple questions and statements.",
    "Express gratitude, apologies, agreement, disagreement, and requests.",
    "Participate in short conversations using appropriate responses.",
  ],

  expressionsIntro:
    "Ding pamagsalita a ini makatulung para maging mapitagan at makabuluhan ing pamagsalita.",
  expressionGroups,

  // IV. Important Language Notes
  languageNotes: [
    {
      title: '1. Using "Pu" and "Wa pu"',
      body: [
        "Ing pu at wa pu ay madalas gamitan para magpakit ning respetu.",
        "Pu ing idagdag king pamagsalita para maging mapitagan.",
        'Wa pu ing mapitagan a paralan ning pamagsabi ning "wa" (yes).',
      ],
      table: {
        leftHeading: "Ordinary Expression",
        rightHeading: "Respectful Expression",
        rows: [
          { left: "Salamat.", right: "Salamat pu." },
          { left: "Wa.", right: "Wa pu." },
          { left: "Pasensya na.", right: "Pasensya na pu." },
          { left: "Kumusta ka?", right: "Kumusta pu kayu?" },
          { left: "Sige.", right: "Wa pu, sige pu." },
        ],
      },
      remember:
        'Ing gamit ning "pu" at "wa pu" ay depende king relasyun at situasyun. Madalas gamitan kareng matatwa, guru, at e kilalang matwa. E ya kailangan king balang pamagsalita.',
    },
    {
      title: '2. Using "Ika" and "Kayu"',
      body: [
        'Ika – informal singular "you."',
        'Kayu – plural "you," or a respectful form when addressing one person.',
      ],
      examples: [
        { text: "Kumusta ka?", meaning: "How are you?" },
        { text: "Kumusta kayu?", meaning: "How are you all?" },
        { text: "Kumusta pu kayu?", meaning: "How are you? (Respectful)" },
      ],
    },
    {
      title: "3. Responding Naturally",
      body: [
        "Ing metung a pamagsalita ay e kailangang mahaba. Minsan sapat na ing maiklung salita.",
      ],
      table: {
        leftHeading: "Someone says",
        rightHeading: "You can answer",
        rows: [
          { left: "Salamat!", right: "Alang nanuman!" },
          { left: "Pasensya na!", right: "Ayos la!" },
          { left: "Mapalyari ba?", right: "Wa, sige!" },
          { left: "E ku balu.", right: "Sige, saupan daka." },
        ],
      },
    },
  ],

  // V. Guided Conversation
  conversations: [
    {
      situation: "Situation 1: Thanking a Classmate",
      lines: [
        {
          speaker: "Maria",
          text: "Mapalyari mu ba kung pahiramin ning lapis?",
        },
        { speaker: "Ana", text: "Wa naman. Oyni." },
        { speaker: "Maria", text: "Dakal a salamat!" },
        { speaker: "Ana", text: "Alang nanuman!" },
      ],
    },
    {
      situation: "Situation 2: Apologizing to Someone",
      lines: [
        { speaker: "Juan", text: "Obat mu pinabuak ing danum?" },
        { speaker: "Pedro", text: "Pasensya na! E ku misadya." },
        {
          speaker: "Juan",
          text: "Ayos la. Mag-ingat ka na la king susunud.",
        },
        { speaker: "Pedro", text: "Sige. Salamat king pamagpatawad." },
      ],
    },
    {
      situation: "Situation 3: Asking a Teacher for Permission",
      lines: [
        {
          speaker: "Estudyante",
          text: "Ma'am, mapalyari pu ba kung magtanung?",
        },
        { speaker: "Guro", text: "Wa naman. Nanu ya iyan?" },
        { speaker: "Estudyante", text: "E ku intindian ing aralin tamu." },
        { speaker: "Guro", text: "Sige. Ulitan tamung pasibayu." },
        { speaker: "Estudyante", text: "Dakal a salamat pu!" },
      ],
    },
    {
      situation: "Situation 4: Making Plans with a Friend",
      lines: [
        { speaker: "Ana", text: "Sasama ka ba keng amin mamaya?" },
        { speaker: "Mark", text: "Siguru. Nokarin kayu mamunta?" },
        { speaker: "Ana", text: "Mamunta kami king parke." },
        { speaker: "Mark", text: "Sige! Sasama ku." },
        { speaker: "Ana", text: "Ayos! Magkikita tamu mamaya!" },
      ],
    },
  ],

  // VI. Activity 1 (answers from the document's lettering:
  // 1 B, 2 A, 3 D, 4 C, 5 E)
  matchActivity: {
    title: "Match the Expression",
    instructions: "Match each Kapampangan expression with its English meaning.",
    pairs: [
      { id: "1", term: "Alang nanuman", answer: "You're welcome" },
      { id: "2", term: "E ku balu", answer: "I don't know" },
      { id: "3", term: "Mag-ingat ka", answer: "Take care" },
      { id: "4", term: "Mayasa ku", answer: "I agree" },
      { id: "5", term: "Pasensya na", answer: "I'm sorry" },
    ],
  },

  // VI. Activity 2 — the document has no answer key for this activity.
  // Answers inferred, to be confirmed by the lesson author.
  choiceActivity: {
    title: "Choose the Appropriate Response",
    instructions: "Select the most appropriate response.",
    questions: [
      {
        id: 1,
        prompt: 'Someone says, "Dakal a salamat!"',
        options: [
          { key: "A", text: "Alang nanuman." },
          { key: "B", text: "E ku balu." },
          { key: "C", text: "Adiyos" },
          { key: "D", text: "Pasensya na." },
        ],
        answerKey: "A",
      },
      {
        id: 2,
        prompt: "You accidentally step on someone's foot.",
        options: [
          { key: "A", text: "Sige." },
          { key: "B", text: "Pasensya na." },
          { key: "C", text: "Salamat." },
          { key: "D", text: "Talaga?" },
        ],
        answerKey: "B",
      },
      {
        id: 3,
        prompt: "Your teacher asks if you understand the lesson, and you do.",
        options: [
          { key: "A", text: "E ku balu." },
          { key: "B", text: "E ku intindian." },
          { key: "C", text: "Wa pu, intindian ku pu." },
          { key: "D", text: "Pasensya na pu." },
        ],
        answerKey: "C",
      },
      {
        id: 4,
        prompt: "You want to ask your teacher a question politely.",
        options: [
          { key: "A", text: "Mapalyari pu ba kung magtanung?" },
          { key: "B", text: "E ku balu." },
          { key: "C", text: "Mag-ingat ka." },
          { key: "D", text: "Alang problema." },
        ],
        answerKey: "A",
      },
      {
        id: 5,
        prompt: "Your friend invites you to join an activity, and you agree.",
        options: [
          { key: "A", text: "E ku mayasa." },
          { key: "B", text: "Sige, sasama ku." },
          { key: "C", text: "Patawad." },
          { key: "D", text: "E ku intindian." },
        ],
        answerKey: "B",
      },
    ],
  },

  // VI. Activity 3 — sentences, hints and word bank as in the document.
  // Answers inferred, to be confirmed by the lesson author (no answer key).
  // Item 3 reads "Alang nanuman naman." with the word-bank answer, which
  // doesn't match the hint "You're welcome." — kept as written.
  fillInBlanks: {
    title: "Fill in the Blanks",
    instructions:
      "Choose the appropriate word or expression to complete each sentence.",
    wordBank: [
      "Salamat",
      "Pasensya",
      "Alang nanuman",
      "Mapalyari",
      "Mag-ingat",
    ],
    items: [
      {
        id: "1",
        sentence: "Dakal a _______ king saup mu.",
        answer: "Salamat",
      },
      {
        id: "2",
        sentence: "_______ na! E ku misadya.",
        answer: "Pasensya",
      },
      {
        id: "3",
        sentence: "_______ naman.",
        hint: "You're welcome.",
        answer: "Alang nanuman",
      },
      {
        id: "4",
        sentence: "_______ pu ba kung magtanung?",
        answer: "Mapalyari",
      },
      {
        id: "5",
        sentence: "_______ ka.",
        hint: "Take care.",
        answer: "Mag-ingat",
      },
    ],
  },

  // VII. Lesson Assessment (answer key: 1 B, 2 C, 3 A, 4 B, 5 C, 6 B,
  // 7 A, 8 C)
  assessment: {
    instructions: "Choose the correct answer.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: 'Which expression means "You\'re welcome"?',
        options: [
          { key: "A", text: "Salamat" },
          { key: "B", text: "Alang nanuman" },
          { key: "C", text: "Patawad" },
          { key: "D", text: "Mag-ingat ka" },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: 'What is the respectful way of saying "Yes" in Kapampangan?',
        options: [
          { key: "A", text: "Alì" },
          { key: "B", text: "Sige" },
          { key: "C", text: "Wa pu" },
          { key: "D", text: "Siguru" },
        ],
        answerKey: "C",
      },
      {
        id: 3,
        prompt:
          "Which expression is appropriate when you accidentally hurt someone's feelings?",
        options: [
          { key: "A", text: "Pasensya na" },
          { key: "B", text: "Dakal a salamat" },
          { key: "C", text: "Mag-ingat ka" },
          { key: "D", text: "Tutu ka" },
        ],
        answerKey: "A",
      },
      {
        id: 4,
        prompt: 'What does "E ku intindian" mean?',
        options: [
          { key: "A", text: "I don't know you." },
          { key: "B", text: "I don't understand." },
          { key: "C", text: "I don't agree." },
          { key: "D", text: "I don't want it." },
        ],
        answerKey: "B",
      },
      {
        id: 5,
        prompt: "Which expression politely asks for someone's help?",
        options: [
          { key: "A", text: "Mag-ingat ka." },
          { key: "B", text: "Tutu ba?" },
          { key: "C", text: "Mapalyari mu ba kung saupan?" },
          { key: "D", text: "Alang nanuman." },
        ],
        answerKey: "C",
      },
      {
        id: 6,
        prompt:
          'What is the purpose of using "pu" in Kapampangan conversations?',
        options: [
          { key: "A", text: "To express anger." },
          { key: "B", text: "To show respect or politeness." },
          { key: "C", text: "To indicate the past tense." },
          { key: "D", text: "To ask for directions." },
        ],
        answerKey: "B",
      },
      {
        id: 7,
        prompt:
          'Someone tells you, "Mag-ingat ka!" What is an appropriate response?',
        options: [
          { key: "A", text: "Ika din!" },
          { key: "B", text: "E ku balu." },
          { key: "C", text: "Pasensya na." },
          { key: "D", text: "E ku mayasa." },
        ],
        answerKey: "A",
      },
      {
        id: 8,
        prompt: 'Which expression means "I agree"?',
        options: [
          { key: "A", text: "E ku intindian." },
          { key: "B", text: "Pasensya na." },
          { key: "C", text: "Mayasa ku." },
          { key: "D", text: "E ku balu." },
        ],
        answerKey: "C",
      },
    ],
  },

  speaking,

  // VIII. Gamification and Reward
  rewards: {
    items: [
      { section: "vocabulary", label: "Complete vocabulary learning", xp: 10 },
      {
        section: "conversation",
        label: "Finished guided conversations",
        xp: 10,
      },
      { section: "match", label: "Complete matching activity", xp: 5 },
      { section: "sentences", label: "Complete sentence exercise", xp: 10 },
      { section: "speaking", label: "Complete speaking practice", xp: 10 },
      { section: "assessment", label: "Pass lesson assessment", xp: 15 },
    ],
    total: 60,
    badge: {
      name: "Polite Communicator Badge",
      description:
        "Awarded after completing the lesson and passing the assessment.",
    },
    completionRequirement:
      "At least 70% in the lesson assessment. Learners who do not reach the required score may review the vocabulary, language notes, and conversations before retaking the assessment.",
  },

  // VI. Activities 4 and 5 — no screen yet (the document gives no choices
  // or answers for them).
  extraActivities: [
    {
      title: "Identify the Situation",
      instructions:
        "Identify which expression is most appropriate for each situation.",
      items: [
        "You want to thank your teacher.",
        "You accidentally break your friend's pencil.",
        "You do not understand a question.",
        "Someone asks you if you agree with an idea.",
        "Your friend is about to go home.",
      ],
    },
    {
      title: "Complete the Conversation",
      instructions: "Fill in the missing expressions.",
      items: [
        "Ana: Mapalyari mu ba kung saupan?",
        "Mark: Wa naman! Nanu ya ing kailangan mu?",
        "Ana: E ku intindian ing tanung a ini.",
        "Mark: Sige, saupan daka.",
        "Ana: ___________!",
        "Mark: __________!",
      ],
      note: "Learners should select expressions that appropriately complete the conversation.",
    },
  ],
};
