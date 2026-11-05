import {
  LessonExpressionGroup,
  LessonSpeaking,
  StructuredLesson,
} from "../../types/structuredLesson";

// Tagalog Lesson 2 — copied from "Copy of Lesson Plan.pdf". Only these
// typos were corrected: "Maganda and ideya" → "Maganda ang ideya",
// "Hind ko sinasadya" → "Hindi ko sinasadya", "Hindi ko maintidihan" →
// "Hindi ko maintindihan", "Ano ang kailang mo?" → "Ano ang kailangan
// mo?". Everything else is as written in the document.
//
// The PDF's two-column tables lost their layout, so each Tagalog line was
// paired with the English line in the same position (the counts match in
// every table). The XP values were paired with the activities the same
// way (10, 10, 5, 10, 10, 15 = 60, as in Lesson 1).

// III. Vocabulary and Common Expressions
const expressionGroups: LessonExpressionGroup[] = [
  {
    title: "A. Expressions of Gratitude",
    items: [
      { term: "Salamat.", meaning: "Thank you." },
      { term: "Maraming salamat.", meaning: "Thank you very much." },
      { term: "Walang anuman.", meaning: "You're welcome." },
      { term: "Salamat sa tulong mo.", meaning: "Thank you for your help." },
      { term: "Salamat po.", meaning: "Thank you. (Respectful)" },
    ],
    examples: [
      [
        { speaker: "A", text: "Narito ang iyong libro." },
        { speaker: "B", text: "Maraming salamat!" },
      ],
      [
        { speaker: "A", text: "Salamat po sa inyong tulong." },
        { speaker: "B", text: "Walang anuman." },
      ],
    ],
  },
  {
    title: "B. Expressions of Apology",
    items: [
      { term: "Pasensya na.", meaning: "I'm sorry." },
      { term: "Paumanhin.", meaning: "My apologies." },
      { term: "Patawad.", meaning: "Forgive me." },
      { term: "Hindi ko sinasadya.", meaning: "I didn't mean to." },
      { term: "Pasensya na po.", meaning: "I'm sorry. (Respectful)" },
    ],
    examples: [
      [
        { speaker: "A", text: "Natapakan mo ang paa ko." },
        { speaker: "B", text: "Ay, pasensya na!" },
      ],
      [
        { speaker: "A", text: "Bakit ka nahuli?" },
        {
          speaker: "B",
          text: "Paumanhin po. Nagkaroon ako ng problema sa biyahe.",
        },
      ],
    ],
  },
  {
    title: "C. Expressions of Agreement and Disagreement",
    items: [
      { term: "Oo.", meaning: "Yes." },
      { term: "Hindi.", meaning: "No." },
      { term: "Sige.", meaning: "Okay / Sure." },
      { term: "Tama ka.", meaning: "You're right." },
      { term: "Sang-ayon ako.", meaning: "I agree." },
      { term: "Hindi ako sang-ayon.", meaning: "I disagree." },
      { term: "Siguro.", meaning: "Maybe." },
      { term: "Maaari.", meaning: "Possibly / It is possible." },
    ],
    examples: [
      [
        { speaker: "A", text: "Sasama ka ba sa amin?" },
        { speaker: "B", text: "Oo, sige!" },
      ],
      [
        { speaker: "A", text: "Maganda ang ideya niya." },
        { speaker: "B", text: "Sang-ayon ako." },
      ],
      [
        { speaker: "A", text: "Tama ba ang sagot ko?" },
        { speaker: "B", text: "Oo, tama ka!" },
      ],
    ],
  },
  {
    title: "D. Expressions for Asking Permission and Requesting Help",
    items: [
      { term: "Maaari ba?", meaning: "May I? / Is it possible?" },
      { term: "Puwede ba?", meaning: "Can I? / Is it allowed?" },
      { term: "Pakiusap.", meaning: "Please. / A request." },
      { term: "Pakitulungan ako.", meaning: "Please help me." },
      { term: "Maaari mo ba akong tulungan?", meaning: "Can you help me?" },
      {
        term: "Maaari po ba akong magtanong?",
        meaning: "May I ask a question?",
      },
    ],
    examples: [
      [
        { speaker: "A", text: "Maaari po ba akong lumabas?" },
        { speaker: "B", text: "Oo, maaari." },
      ],
      [
        { speaker: "A", text: "Maaari mo ba akong tulungan?" },
        { speaker: "B", text: "Oo naman!" },
      ],
    ],
  },
  {
    title: "E. Expressions Used in Everyday Conversations",
    items: [
      { term: "Sandali lang.", meaning: "Just a moment." },
      { term: "Hindi ko alam.", meaning: "I don't know." },
      { term: "Naiintindihan ko.", meaning: "I understand." },
      { term: "Hindi ko maintindihan.", meaning: "I don't understand." },
      { term: "Totoo ba?", meaning: "Really? / Is that true?" },
      { term: "Talaga?", meaning: "Really?" },
      { term: "Ingat ka.", meaning: "Take care." },
      { term: "Ayos lang.", meaning: "It's okay." },
      { term: "Walang problema.", meaning: "No problem." },
      { term: "Sige, mamaya na lang", meaning: "Okay, maybe later." },
    ],
  },
];

// VI. Activity 6: Speaking Practice. Meanings come from the vocabulary
// tables, except "Opo, naiintindihan ko po." and "Sige, sasama ako.",
// which are inferred and to be confirmed by the lesson author.
const speaking: LessonSpeaking = {
  title: "Speaking Practice",
  instructions:
    "Listen to the model pronunciation, then repeat the following expressions.",
  note: "Speaking Challenge: Record yourself saying at least five expressions. Try to pronounce each word clearly and naturally.",
  phrases: [
    { id: "1", text: "Maraming salamat.", meaning: "Thank you very much." },
    { id: "2", text: "Walang anuman.", meaning: "You're welcome." },
    { id: "3", text: "Pasensya na po.", meaning: "I'm sorry. (Respectful)" },
    { id: "4", text: "Hindi ko maintindihan.", meaning: "I don't understand." },
    {
      id: "5",
      text: "Maaari po ba akong magtanong?",
      meaning: "May I ask a question?",
    },
    {
      id: "6",
      text: "Opo, naiintindihan ko po.",
      meaning: "Yes, I understand. (Respectful)",
    },
    { id: "7", text: "Sige, sasama ako.", meaning: "Okay, I'll come along." },
    { id: "8", text: "Ingat ka!", meaning: "Take care!" },
  ],
};

export const tagalogLesson2: StructuredLesson = {
  lessonId: "tagalog_2",
  dialect: "tagalog",
  dialectLabel: "Tagalog",
  lessonNumber: 2,
  title: "Common Expressions and Responses",
  level: "Beginner",
  unit: "Fundamentals",

  // II. Lesson Introduction
  intro: [
    "People communicate with one another every day. Aside from greetings and introductions, conversations often involve thanking someone, asking for help, apologizing, agreeing, or responding to questions.",
    'In Tagalog, some expressions are commonly used to show respect and politeness. One example is the word "po," which is often added when speaking respectfully to elders, teachers, and people one wishes to address politely.',
    "In this lesson, you will learn expressions that can help you communicate naturally in everyday situations.",
  ],
  exampleSituation: {
    description: "Your classmate lends you a pen. You want to thank them.",
    lead: "You can say:",
    line: "Maraming salamat!",
  },
  moreExampleSituations: [
    {
      description: "If you accidentally bump into someone, you can say:",
      line: "Pasensya na!",
    },
  ],

  // I. Learning Objectives
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Recognize common Tagalog expressions used in everyday conversations.",
    "Understand and use polite expressions when communicating with others.",
    "Respond appropriately to simple questions and statements.",
    "Express gratitude, apologies, agreement, disagreement, and requests.",
    "Participate in short conversations using appropriate responses.",
  ],

  expressionsIntro:
    "These expressions help make everyday conversations more polite and meaningful. Tap a card to listen.",
  expressionGroups,

  // IV. Important Language Notes
  languageNotes: [
    {
      title: '1. Using "Po" and "Opo"',
      body: [
        "The words po and opo are commonly used to express respect.",
        "Po is generally added to a sentence to make it more respectful.",
        'Opo is a respectful way of saying "yes."',
      ],
      table: {
        leftHeading: "Ordinary Expression",
        rightHeading: "Respectful Expression",
        rows: [
          { left: "Salamat.", right: "Salamat po." },
          { left: "Oo.", right: "Opo." },
          { left: "Pasensya na.", right: "Pasensya na po." },
          { left: "Kumusta ka?", right: "Kumusta po kayo?" },
          { left: "Sige.", right: "Opo, sige po." },
        ],
      },
      remember:
        'Using "po" and "opo" depends on the relationship and situation. They are especially common when speaking to elders, teachers, and unfamiliar adults. They are not required in every conversation.',
    },
    {
      title: '2. Using "Ikaw" and "Kayo"',
      body: [
        'Ikaw – informal singular "you."',
        'Kayo – plural "you," or a respectful form when addressing one person.',
      ],
      examples: [
        { text: "Kumusta ka?", meaning: "How are you?" },
        { text: "Kumusta kayo?", meaning: "How are you all?" },
        { text: "Kumusta po kayo?", meaning: "How are you? (Respectful)" },
      ],
    },
    {
      title: "3. Responding Naturally",
      body: [
        "A conversation does not always require a long response. Sometimes a short expression is enough.",
      ],
      table: {
        leftHeading: "Someone says",
        rightHeading: "You can answer",
        rows: [
          { left: "Salamat!", right: "Walang anuman!" },
          { left: "Pasensya na!", right: "Ayos lang!" },
          { left: "Maaari ba?", right: "Oo, sige!" },
          { left: "Hindi ko alam.", right: "Sige, tutulungan kita." },
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
          text: "Maaari mo ba akong pahiramin ng lapis?",
        },
        { speaker: "Ana", text: "Oo naman. Heto." },
        { speaker: "Maria", text: "Maraming salamat!" },
        { speaker: "Ana", text: "Walang anuman!" },
      ],
    },
    {
      situation: "Situation 2: Apologizing to Someone",
      lines: [
        { speaker: "Juan", text: "Bakit mo tinapon ang tubig?" },
        { speaker: "Pedro", text: "Pasensya na! Hindi ko sinasadya." },
        {
          speaker: "Juan",
          text: "Ayos lang. Mag-ingat ka na lang sa susunod.",
        },
        { speaker: "Pedro", text: "Sige. Salamat sa pag-unawa." },
      ],
    },
    {
      situation: "Situation 3: Asking a Teacher for Permission",
      lines: [
        {
          speaker: "Estudyante",
          text: "Ma'am, maaari po ba akong magtanong?",
        },
        { speaker: "Guro", text: "Oo naman. Ano iyon?" },
        {
          speaker: "Estudyante",
          text: "Hindi ko po maintindihan ang ating aralin.",
        },
        { speaker: "Guro", text: "Sige. Ipaliwanag natin muli." },
        { speaker: "Estudyante", text: "Maraming salamat po!" },
      ],
    },
    {
      situation: "Situation 4: Making Plans with a Friend",
      lines: [
        { speaker: "Ana", text: "Sasama ka ba sa amin mamaya?" },
        { speaker: "Mark", text: "Siguro. Saan kayo pupunta?" },
        { speaker: "Ana", text: "Pupunta kami sa parke." },
        { speaker: "Mark", text: "Sige! Sasama ako." },
        { speaker: "Ana", text: "Ayos! Kita-kits mamaya!" },
      ],
    },
  ],

  // VI. Activity 1 (answers from the document's lettering)
  matchActivity: {
    title: "Match the Expression",
    instructions: "Match each Tagalog expression with its English meaning.",
    pairs: [
      { id: "1", term: "Walang anuman", answer: "You're welcome" },
      { id: "2", term: "Hindi ko alam", answer: "I don't know" },
      { id: "3", term: "Ingat ka", answer: "Take care" },
      { id: "4", term: "Sang-ayon ako", answer: "I agree" },
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
        prompt: 'Someone says, "Maraming salamat!"',
        options: [
          { key: "A", text: "Walang anuman." },
          { key: "B", text: "Hindi ko alam." },
          { key: "C", text: "Paalam" },
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
          { key: "A", text: "Hindi ko alam." },
          { key: "B", text: "Hindi ko maintindihan." },
          { key: "C", text: "Opo, naiintindihan ko po." },
          { key: "D", text: "Pasensya na po." },
        ],
        answerKey: "C",
      },
      {
        id: 4,
        prompt: "You want to ask your teacher a question politely.",
        options: [
          { key: "A", text: "Maaari po ba akong magtanong?" },
          { key: "B", text: "Hindi ko alam." },
          { key: "C", text: "Ingat ka." },
          { key: "D", text: "Walang problema." },
        ],
        answerKey: "A",
      },
      {
        id: 5,
        prompt: "Your friend invites you to join an activity, and you agree.",
        options: [
          { key: "A", text: "Hindi ako sang-ayon." },
          { key: "B", text: "Sige, sasama ako." },
          { key: "C", text: "Paumanhin." },
          { key: "D", text: "Hindi ko maintindihan." },
        ],
        answerKey: "B",
      },
    ],
  },

  // VI. Activity 3 — sentences, hints and word bank as in the document.
  // Answers inferred, to be confirmed by the lesson author (no answer key;
  // "Walang anuman" for item 3 follows the word bank and its hint).
  fillInBlanks: {
    title: "Fill in the Blanks",
    instructions:
      "Choose the appropriate word or expression to complete each sentence.",
    wordBank: ["Salamat", "Pasensya", "Walang anuman", "Maaari", "Ingat"],
    items: [
      {
        id: "1",
        sentence: "Maraming _______ sa iyong tulong.",
        answer: "Salamat",
      },
      {
        id: "2",
        sentence: "________ na! Hindi ko sinasadya.",
        answer: "Pasensya",
      },
      {
        id: "3",
        sentence: "________ naman.",
        hint: "You're welcome.",
        answer: "Walang anuman",
      },
      {
        id: "4",
        sentence: "________ po ba akong magtanong?",
        answer: "Maaari",
      },
      {
        id: "5",
        sentence: "________ ka.",
        hint: "Take care.",
        answer: "Ingat",
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
          { key: "B", text: "Walang anuman" },
          { key: "C", text: "Paumanhin" },
          { key: "D", text: "Ingat ka" },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: 'What is the respectful way of saying "Yes" in Tagalog?',
        options: [
          { key: "A", text: "Hindi" },
          { key: "B", text: "Sige" },
          { key: "C", text: "Opo" },
          { key: "D", text: "Siguro" },
        ],
        answerKey: "C",
      },
      {
        id: 3,
        prompt:
          "Which expression is appropriate when you accidentally hurt someone's feelings?",
        options: [
          { key: "A", text: "Pasensya na" },
          { key: "B", text: "Maraming salamat" },
          { key: "C", text: "Ingat ka" },
          { key: "D", text: "Tama ka" },
        ],
        answerKey: "A",
      },
      {
        id: 4,
        prompt: 'What does "Hindi ko maintindihan" mean?',
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
          { key: "A", text: "Ingat ka." },
          { key: "B", text: "Talaga?" },
          { key: "C", text: "Maaari mo ba akong tulungan?" },
          { key: "D", text: "Walang anuman." },
        ],
        answerKey: "C",
      },
      {
        id: 6,
        prompt: 'What is the purpose of using "po" in Filipino conversations?',
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
          'Someone tells you, "Ingat ka!" What is an appropriate response?',
        options: [
          { key: "A", text: "Ikaw rin!" },
          { key: "B", text: "Hindi ko alam." },
          { key: "C", text: "Pasensya na." },
          { key: "D", text: "Hindi ako sang-ayon." },
        ],
        answerKey: "A",
      },
      {
        id: 8,
        prompt: 'Which expression means "I agree"?',
        options: [
          { key: "A", text: "Hindi ko maintindihan." },
          { key: "B", text: "Pasensya na." },
          { key: "C", text: "Sang-ayon ako." },
          { key: "D", text: "Hindi ko alam." },
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
        "Ana: Maaari mo ba akong tulungan?",
        "Mark: Oo naman! Ano ang kailangan mo?",
        "Ana: Hindi ko maintindihan ang tanong na ito.",
        "Mark: Sige, tulungan kita.",
        "Ana: ___________!",
        "Mark: __________!",
      ],
      note: "Learners should select expressions that appropriately complete the conversation.",
    },
  ],
};
