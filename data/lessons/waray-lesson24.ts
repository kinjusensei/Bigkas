import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 24 — imported from "Lesson Plan.pdf", pages 1021–1041.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
// Fields not given by the plan are INFERRED from this lesson's own content and
// listed in docs/waray-inferred-keys.md: usage, example, pattern, choice, fill-in, arrange, speaking phrase, respelling, target pitch and mood, example situation, pronunciation tip, badge description, completion requirement.
// The practice answers are INFERRED drafts, not from the PDF. See
// docs/waray-draft-answer-keys.md for each answer and how it was found.

export const warayLesson24: StructuredLesson = {
  lessonId: "waray_24",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 24,
  title: "Advanced Sentence Construction",
  level: "Advanced",
  unit: "LANGUAGE DEVELOPMENT",
  estimatedDuration: "50–60 minutes",
  prerequisite: "Lesson 23 – Agreeing and Disagreeing",
  languageVariety: "Constructing longer sentences, combining related ideas, using descriptive expressions, expressing conditions, and organizing complex thoughts.",
  intro: [
    "As learners advance in their language studies, they need to move beyond short and simple sentences. They should be able to express more detailed thoughts, describe situations, explain relationships between ideas, and communicate information in a logical manner.",
    "In this lesson, learners will practice constructing longer Waray sentences by combining ideas, adding descriptions, expressing conditions, and providing additional information. They will also learn how to use connecting expressions to make their statements more complete and understandable.",
    "Consider the difference between these two sentences:",
    "Simple sentence:",
    "Nagaadál ako. I am studying.",
    "Expanded sentence:",
    "Nag-aadal ako ha balay kada gab-i kay karuyag ko nga magin andam para ha akon eksam. I study at home every evening because I want to be prepared for my examination.",
    "The second sentence communicates more information. It tells us where the person studies, when the activity happens, and why the person studies.",
    "Advanced sentence construction allows learners to express more complete thoughts by adding information and connecting related ideas.",
    "In this lesson, you will practice building sentences that communicate more than one piece of information.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify common expressions used to connect ideas in Waray sentences.",
    "Construct longer sentences by combining related thoughts.",
    "Add descriptive details about people, places, objects, and situations.",
    "Express conditions, contrasts, and additional information.",
    "Organize multiple ideas into coherent paragraphs.",
    "Produce more detailed written and spoken responses using Waray.",
  ],
  assessment: {
    instructions: "Choose the correct answer for each question.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "Which Waray word means \"and\"?",
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
            text: "Kon",
          },
          {
            key: "D",
            text: "Bisan kon",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "Which expression introduces a condition?",
        options: [
          {
            key: "A",
            text: "Kon",
          },
          {
            key: "B",
            text: "Ngan",
          },
          {
            key: "C",
            text: "Pero",
          },
          {
            key: "D",
            text: "Salit",
          },
        ],
        answerKey: "A",
      },
      {
        id: 3,
        prompt: "What does \"Samtang\" mean?",
        options: [
          {
            key: "A",
            text: "Because",
          },
          {
            key: "B",
            text: "Although",
          },
          {
            key: "C",
            text: "While",
          },
          {
            key: "D",
            text: "Finally",
          },
        ],
        answerKey: "C",
      },
      {
        id: 4,
        prompt: "Which expression means \"even if\"?",
        options: [
          {
            key: "A",
            text: "Ngan",
          },
          {
            key: "B",
            text: "Bisan kon",
          },
          {
            key: "C",
            text: "Pero",
          },
          {
            key: "D",
            text: "O",
          },
        ],
        answerKey: "B",
      },
      {
        id: 5,
        prompt: "Which connecting expression is appropriate for showing contrast?",
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
            text: "O",
          },
          {
            key: "D",
            text: "Kon",
          },
        ],
        answerKey: "B",
      },
      {
        id: 6,
        prompt: "What is the purpose of adding descriptive details to a sentence?",
        options: [
          {
            key: "A",
            text: "To make the sentence less understandable.",
          },
          {
            key: "B",
            text: "To remove important information.",
          },
          {
            key: "C",
            text: "To provide more information about the subject or situation.",
          },
          {
            key: "D",
            text: "To change the language being used.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 7,
        prompt: "Which sentence expresses a condition?",
        options: [
          {
            key: "A",
            text: "Nagbabasa ako ngan nagsusurat hiya.",
          },
          {
            key: "B",
            text: "Kon may panahon ako, magbabasa ako.",
          },
          {
            key: "C",
            text: "Matahom an lugar.",
          },
          {
            key: "D",
            text: "Husto ito.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 8,
        prompt: "Which sentence combines two related activities?",
        options: [
          {
            key: "A",
            text: "Nag-aadal ako ngan nagbabasa hin libro.",
          },
          {
            key: "B",
            text: "Diri ako nauyon hito.",
          },
          {
            key: "C",
            text: "Hain an eskwelahan?",
          },
          {
            key: "D",
            text: "Maupay nga aga.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 9,
        prompt: "Why should long sentences be organized properly?",
        options: [
          {
            key: "A",
            text: "To make them as long as possible.",
          },
          {
            key: "B",
            text: "To make ideas clearer and easier to understand.",
          },
          {
            key: "C",
            text: "To avoid using connecting expressions.",
          },
          {
            key: "D",
            text: "To remove all descriptive information.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 10,
        prompt: "Which is the best practice when writing an organized paragraph?",
        options: [
          {
            key: "A",
            text: "Combine unrelated ideas without structure.",
          },
          {
            key: "B",
            text: "Repeat the same sentence several times.",
          },
          {
            key: "C",
            text: "Arrange related ideas logically and use appropriate connecting expressions.",
          },
          {
            key: "D",
            text: "Avoid giving supporting details.",
          },
        ],
        answerKey: "C",
      },
    ],
  },
  extraActivities: [
    {
      title: "Combine the Sentences",
      kind: "rewrite",
      instructions: "Combine each pair of simple sentences into one longer sentence using the suggested connecting expression.",
      items: [
        "Nag-aadal ako. Nagbabasa ako. Use: ngan",
        "Karuyag niya umupod. Waray hiya panahon. Use: pero",
        "Nagluluto hi Nanay. Naglilimpyo hi Tatay. Use: samtang",
        "May panahon ako. Makadto ako ha library. Use: kon",
        "Makuri an buruhaton. Magpapadayon kami. Use: bisan kon",
      ],
    },
    {
      title: "Expand the Sentences",
      kind: "rewrite",
      instructions: "Add at least two descriptive details to each simple sentence.\nExample:\nSimple: Matahom an lugar.\nExpanded: Matahom ngan mahimyang an lugar nga amon ginkadtoan.",
      items: [
        "Dako an balay.",
        "Buotan hiya.",
        "Makuri an leksyon.",
        "Lami an pagkaon.",
        "Importante an pag-aram.",
      ],
    },
    {
      title: "Translate into Waray",
      kind: "translate",
      instructions: "Translate the following English sentences into Waray.",
      items: [
        "I study every day because I want to improve my skills.",
        "If I have time, I will visit my friend.",
        "The place is beautiful and peaceful.",
        "Even if the task is difficult, we will continue working.",
        "My classmates are hardworking, and they help one another.",
      ],
    },
    {
      title: "Paragraph Construction",
      kind: "open",
      instructions: "Choose one topic and write a short Waray paragraph containing at least five connected sentences.\nTopics:",
      items: [
        "My Daily Study Routine",
        "A Place I Want to Visit",
        "The Importance of Learning Languages",
        "How We Complete a Group Project",
        "My Goals for the Future",
        "At least two connecting expressions.",
        "At least one descriptive sentence.",
        "At least one sentence expressing a reason or condition.",
        "A clear beginning, supporting details, and conclusion.",
      ],
      note: "Your paragraph must include:",
    },
  ],
  matchActivity: {
    title: "Vocabulary Matching",
    instructions: "Match each Waray connecting expression with its English meaning.",
    pairs: [
      {
        id: "1",
        term: "Ngan",
        answer: "And",
      },
      {
        id: "2",
        term: "Pero",
        answer: "But",
      },
      {
        id: "3",
        term: "Kon",
        answer: "If",
      },
      {
        id: "4",
        term: "Samtang",
        answer: "While",
      },
      {
        id: "5",
        term: "Bisan kon",
        answer: "Even if",
      },
    ],
  },
  answerKeysInferred: true,
  rewards: {
    items: [
      {
        section: "match",
        label: "Vocabulary Matching + Combine the Sentences + Expand the Sentences + Paragraph Construction",
        xp: 45,
      },
      {
        section: "assessment",
        label: "Lesson Assessment",
        xp: 15,
      },
    ],
    total: 60,
    badge: {
      name: "Advanced Sentence Builder Badge",
      description: "Awarded after successfully completing Lesson 24.",
    },
    completionRequirement: "Obtain at least 70% in the lesson assessment. Learners may repeat the activities and assessment if they do not meet the requirement.",
  },
  expectedOutcomes: [
    "Before proceeding to the next lesson, learners should be able to:",
    "Recognize common connecting expressions.",
    "Combine related ideas into longer sentences.",
    "Add descriptive details to simple statements.",
    "Construct conditional sentences.",
    "Express contrasts and additional information.",
    "Organize connected sentences into a paragraph.",
    "Achieve at least 70% in the lesson assessment.",
  ],
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
            text: "Or",
          },
          {
            key: "B",
            text: "During",
          },
          {
            key: "C",
            text: "Sometimes",
          },
          {
            key: "D",
            text: "Important",
          },
        ],
        answerKey: "A",
      },
      {
        id: 2,
        prompt: "What does “Masayon” mean?",
        options: [
          {
            key: "A",
            text: "Before",
          },
          {
            key: "B",
            text: "Easy",
          },
          {
            key: "C",
            text: "Together",
          },
          {
            key: "D",
            text: "If",
          },
        ],
        answerKey: "B",
      },
      {
        id: 3,
        prompt: "What does “Kasagaran” mean?",
        options: [
          {
            key: "A",
            text: "Or",
          },
          {
            key: "B",
            text: "Helpful",
          },
          {
            key: "C",
            text: "Usually",
          },
          {
            key: "D",
            text: "Because / Due to the fact that",
          },
        ],
        answerKey: "C",
      },
      {
        id: 4,
        prompt: "What does “Makapainteres” mean?",
        options: [
          {
            key: "A",
            text: "On the other hand",
          },
          {
            key: "B",
            text: "While",
          },
          {
            key: "C",
            text: "First",
          },
          {
            key: "D",
            text: "Interesting",
          },
        ],
        answerKey: "D",
      },
      {
        id: 5,
        prompt: "What does “Pirme” mean?",
        options: [
          {
            key: "A",
            text: "Always",
          },
          {
            key: "B",
            text: "While",
          },
          {
            key: "C",
            text: "Important",
          },
          {
            key: "D",
            text: "Useful",
          },
        ],
        answerKey: "A",
      },
    ],
  },
  fillInBlanks: {
    title: "Fill in the Blanks",
    instructions: "Complete each sentence using the appropriate Waray word.",
    items: [
      {
        id: "1",
        sentence: "Kapoy hiya, ___ nagpapadayon hiya ha pagtrabaho.",
        hint: "He is tired, but he continues working.",
        answer: "pero",
        wordBank: [
          "pero",
          "Katapos",
          "Makuri",
          "Mapulsanon",
        ],
      },
      {
        id: "2",
        sentence: "Dako ___ matahom an eskwelahan.",
        hint: "The school is large and beautiful.",
        answer: "ngan",
        wordBank: [
          "Kondi",
          "ngan",
          "Kay",
          "Pero",
        ],
      },
      {
        id: "3",
        sentence: "Makapainteres an libro ___ akon ginpalit kahapon.",
        hint: "The book that I bought yesterday is interesting.",
        answer: "nga",
        wordBank: [
          "Ngan",
          "Matahom",
          "nga",
          "Salit",
        ],
      },
      {
        id: "4",
        sentence: "___ an lugar diin kami nag-aram.",
        hint: "The place where we studied was peaceful.",
        answer: "Mahimyang",
        wordBank: [
          "Siyahan",
          "Importante",
          "Mahimyang",
          "Matawo",
        ],
      },
      {
        id: "5",
        sentence: "___ mag-uran, magpapabilin kita ha balay.",
        hint: "If it rains, we will stay at home.",
        answer: "Kon",
        wordBank: [
          "Ngan",
          "Pananglitan",
          "Samtang",
          "Kon",
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
          "ngan",
          "Dako",
          "eskwelahan",
          "an",
          "matahom",
        ],
        answer: [
          "Dako",
          "ngan",
          "matahom",
          "an",
          "eskwelahan",
        ],
        display: "Dako ngan matahom an eskwelahan.",
      },
      {
        id: "2",
        words: [
          "an",
          "ngan",
          "akon",
          "Buotan",
          "sangkay",
          "maduruto",
        ],
        answer: [
          "Buotan",
          "ngan",
          "maduruto",
          "an",
          "akon",
          "sangkay",
        ],
        display: "Buotan ngan maduruto an akon sangkay.",
      },
      {
        id: "3",
        words: [
          "Makapainteres",
          "akon",
          "ginpalit",
          "nga",
          "kahapon",
          "libro",
          "an",
        ],
        answer: [
          "Makapainteres",
          "an",
          "libro",
          "nga",
          "akon",
          "ginpalit",
          "kahapon",
        ],
        display: "Makapainteres an libro nga akon ginpalit kahapon.",
      },
      {
        id: "4",
        words: [
          "kami",
          "diin",
          "lugar",
          "an",
          "nag-aram",
          "Mahimyang",
        ],
        answer: [
          "Mahimyang",
          "an",
          "lugar",
          "diin",
          "kami",
          "nag-aram",
        ],
        display: "Mahimyang an lugar diin kami nag-aram.",
      },
      {
        id: "5",
        words: [
          "mag-uran",
          "Kon",
          "kita",
          "magpapabilin",
          "ha",
          "balay",
        ],
        answer: [
          "Kon",
          "mag-uran",
          "magpapabilin",
          "kita",
          "ha",
          "balay",
        ],
        display: "Kon mag-uran, magpapabilin kita ha balay.",
      },
    ],
  },
  speaking: {
    title: "Speaking Practice",
    instructions: "Read the following sentences aloud.",
    note: "Learners should listen to the model pronunciation before recording their own voice.",
    practiceLessonId: "waray_24",
    phrases: [
      {
        id: "1",
        text: "Kapoy hiya, pero nagpapadayon hiya ha pagtrabaho.",
        respelling: "ka-poy hee-yah pe-ro nag-pa-pa-da-yon hee-yah ha pag-tra-ba-ho",
        meaning: "He is tired, but he continues working.",
      },
      {
        id: "2",
        text: "Dako ngan matahom an eskwelahan.",
        respelling: "da-ko ngan mah-tah-hohm an es-kweh-lah-hahn",
        meaning: "The school is large and beautiful.",
      },
      {
        id: "3",
        text: "Makapainteres an libro nga akon ginpalit kahapon.",
        respelling: "ma-ka-pin-te-res an lib-ro nga a-kon gin-pa-lit ka-ha-pon",
        meaning: "The book that I bought yesterday is interesting.",
      },
      {
        id: "4",
        text: "Kon mag-uran, magpapabilin kita ha balay.",
        respelling: "kon mag-u-ran mag-pa-pa-bi-lin ki-ta ha ba-lay",
        meaning: "If it rains, we will stay at home.",
      },
      {
        id: "5",
        text: "Kon magbubuligay kita, matatapos naton an proyekto.",
        respelling: "kon mag-bu-bu-li-gay ki-ta ma-ta-ta-pos na-ton an pro-yek-to",
        meaning: "If we work together, we can finish the project.",
      },
      {
        id: "6",
        text: "Matahom an lugar ngan mahimyang liwat ito.",
        respelling: "mah-tah-hohm an loo-gahr ngan ma-him-yang li-wat i-to",
        meaning: "The place is beautiful, and it is also peaceful.",
      },
      {
        id: "7",
        text: "Kon mag-uran, diri kami makakadto.",
        respelling: "kon mag-u-ran di-ri ka-mi ma-ka-kad-to",
        meaning: "If it rains, we cannot go.",
      },
    ],
  },
  exampleSituation: {
    description: "Imagine this situation from the lesson: Discussing Study Habits.",
    lead: "You can begin by saying:",
    line: "Paonan-o ka nag-aandam para ha imo eksam?",
    translation: "How do you prepare for your examination?",
  },
  vocabularyIntro: "Learn the following words and expressions before proceeding to the activities.",
  pronunciationTip: "Read each syllable clearly. Avoid rushing through longer expressions.",
  selfIntroIntro: "Use these patterns and phrases from the lesson.",
  vocabulary: [
    {
      term: "Ngan",
      meaning: "And",
      pronunciation: "ngan",
      usage: "A connecting expression.",
      example: [
        {
          speaker: "A",
          text: "Paonan-o ka nag-aandam para ha imo eksam?",
          translation: "How do you prepare for your examination?",
        },
        {
          speaker: "B",
          text: "Nagbabasa ako hin mga libro ngan naghihimo hin mga nota.",
          translation: "I read books and make notes.",
        },
      ],
    },
    {
      term: "Pero",
      meaning: "But",
      pronunciation: "pe-ro",
      usage: "A connecting expression.",
      example: [
        {
          speaker: "",
          text: "Karuyag ko kumadto, pero kulang an akon panahon.",
          translation: "I want to go, but I do not have enough time.",
        },
      ],
    },
    {
      term: "O",
      meaning: "Or",
      pronunciation: "o",
      usage: "A connecting expression.",
      example: [
        {
          speaker: "",
          text: "Mahimo kita mag-aram ha balay o ha library.",
          translation: "We can study at home or at the library.",
        },
      ],
    },
    {
      term: "Kay",
      meaning: "Because",
      pronunciation: "kay",
      usage: "A connecting expression.",
      example: [
        {
          speaker: "A",
          text: "Kada adlaw ka ba nag-aadal?",
          translation: "Do you study every day?",
        },
        {
          speaker: "B",
          text: "Oo, kay mas masayon ha akon an paghinumdom kon regular ako nga nag-aadal.",
          translation: "Yes, because remembering is easier for me when I study regularly.",
        },
      ],
    },
    {
      term: "Tungod kay",
      meaning: "Because / Due to the fact that",
      pronunciation: "tung-od kay",
      usage: "A connecting expression.",
    },
    {
      term: "Kon",
      meaning: "If",
      pronunciation: "kon",
      usage: "A connecting expression.",
      example: [
        {
          speaker: "A",
          text: "Oo, kay mas masayon ha akon an paghinumdom kon regular ako nga nag-aadal.",
          translation: "Yes, because remembering is easier for me when I study regularly.",
        },
        {
          speaker: "B",
          text: "Maupay ito nga paagi.",
          translation: "That is a good method.",
        },
      ],
    },
    {
      term: "Bisan kon",
      meaning: "Even if",
      pronunciation: "bi-san kon",
      usage: "A connecting expression.",
      example: [
        {
          speaker: "A",
          text: "Kon magbubuligay kita, matatapos naton ini ha husto nga panahon.",
          translation: "If we work together, we can finish this on time.",
        },
        {
          speaker: "B",
          text: "Bisan kon damu an aton buruhaton, mahimo naton ini matapos kon maghihirimo kita hin maopay nga plano.",
          translation: "Even if we have many tasks, we can finish this if we make a good plan.",
        },
      ],
    },
    {
      term: "Bisan pa",
      meaning: "Although",
      pronunciation: "bi-san pa",
      usage: "A connecting expression.",
    },
    {
      term: "Salit",
      meaning: "Therefore / So",
      pronunciation: "sa-lit",
      usage: "A connecting expression.",
      example: [
        {
          speaker: "A",
          text: "Damo ba an mga tawo didto?",
          translation: "Were there many people there?",
        },
        {
          speaker: "B",
          text: "Diri, diri gud damo an mga tawo, salit nakapahuway kami hin maupay.",
          translation: "No, there were not many people, so we were able to rest well.",
        },
      ],
    },
    {
      term: "Gihapon / liwat",
      meaning: "Also",
      pronunciation: "gi-ha-pon / li-wat",
      usage: "A connecting expression.",
      example: [
        {
          speaker: "A",
          text: "Ikaw, ano an imo ginbubuhat?",
          translation: "What about you? What do you do?",
        },
        {
          speaker: "B",
          text: "Nagbabasa ako, ngan nag-aadman ko liwat an mga pakiana tikang ha amon naglabay nga mga leksyon.",
          translation: "I read, and I also review questions from our previous lessons.",
        },
      ],
    },
    {
      term: "Kondi",
      meaning: "However",
      pronunciation: "kon-di",
      usage: "A connecting expression.",
      example: [
        {
          speaker: "",
          text: "Makuri an buruhaton, kondi matatapos naton ito.",
          translation: "The task is difficult; however, we can finish it.",
        },
      ],
    },
    {
      term: "Dugang pa",
      meaning: "In addition",
      pronunciation: "du-gang pa",
      usage: "A connecting expression.",
      example: [
        {
          speaker: "A",
          text: "Mahimo ako maghimo han dokumento samtang kamo nagreresearch.",
          translation: "I can prepare the document while you do the research.",
        },
        {
          speaker: "B",
          text: "Maupay ito nga ideya. Dugang pa, kinahanglan naton repasuhon an resulta antes naton ipasa.",
          translation: "That is a good idea. In addition, we need to review the result before submitting it.",
        },
      ],
    },
    {
      term: "Nga",
      meaning: "Which",
      pronunciation: "nga",
      usage: "An expression for adding details.",
      example: [
        {
          speaker: "A",
          text: "Maupay ito nga paagi.",
          translation: "That is a good method.",
        },
        {
          speaker: "B",
          text: "Ikaw, ano an imo ginbubuhat?",
          translation: "What about you? What do you do?",
        },
      ],
    },
    {
      term: "Nga",
      meaning: "That",
      pronunciation: "nga",
      usage: "An expression for adding details.",
      example: [
        {
          speaker: "A",
          text: "Nagbabasa ako, ngan nag-aadman ko liwat an mga pakiana tikang ha amon naglabay nga mga leksyon.",
          translation: "I read, and I also review questions from our previous lessons.",
        },
        {
          speaker: "B",
          text: "Kon magpadayon kita hini nga mga paagi, mas magigin andam kita para ha eksam.",
          translation: "If we continue these methods, we will be better prepared for the examination.",
        },
      ],
    },
    {
      term: "Kon / Han",
      meaning: "When",
      pronunciation: "kon / han",
      usage: "An expression for adding details.",
      example: [
        {
          speaker: "A",
          text: "Karuyag ko liwat makadto didto.",
          translation: "I also want to visit that place.",
        },
        {
          speaker: "B",
          text: "Kon may panahon ka, maupay kon makadto ka.",
          translation: "If you have time, it would be good for you to visit.",
        },
      ],
    },
    {
      term: "Samtang",
      meaning: "While",
      pronunciation: "sam-tang",
      usage: "An expression for adding details.",
      example: [
        {
          speaker: "A",
          text: "Nauyon ako. Siyahan, kinahanglan naton bahinon an mga buruhaton.",
          translation: "I agree. First, we need to divide the tasks.",
        },
        {
          speaker: "B",
          text: "Mahimo ako maghimo han dokumento samtang kamo nagreresearch.",
          translation: "I can prepare the document while you do the research.",
        },
      ],
    },
    {
      term: "Antes",
      meaning: "Before",
      pronunciation: "an-tes",
      usage: "An expression for adding details.",
      example: [
        {
          speaker: "A",
          text: "Kinahanglan naton tapuson an proyekto antes han kataposan nga petsa.",
          translation: "We need to finish the project before the deadline.",
        },
        {
          speaker: "B",
          text: "Nauyon ako. Siyahan, kinahanglan naton bahinon an mga buruhaton.",
          translation: "I agree. First, we need to divide the tasks.",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/antes.aac"),
    },
    {
      term: "Katapos",
      meaning: "After",
      pronunciation: "ka-ta-pos",
      usage: "An expression for adding details.",
      audioUrl: require("../../assets/audio/Lesson Waray/katapos.aac"),
    },
    {
      term: "Durante",
      meaning: "During",
      pronunciation: "du-ran-te",
      usage: "An expression for adding details.",
    },
    {
      term: "Kada adlaw",
      meaning: "Every day",
      pronunciation: "ka-da ad-law",
      usage: "An expression for adding details.",
      example: [
        {
          speaker: "A",
          text: "Nagbabasa ako hin mga libro ngan naghihimo hin mga nota.",
          translation: "I read books and make notes.",
        },
        {
          speaker: "B",
          text: "Kada adlaw ka ba nag-aadal?",
          translation: "Do you study every day?",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/kada adlaw.aac"),
    },
    {
      term: "Usahay",
      meaning: "Sometimes",
      pronunciation: "u-sa-hay",
      usage: "An expression for adding details.",
    },
    {
      term: "Kasagaran",
      meaning: "Usually",
      pronunciation: "ka-sa-ga-ran",
      usage: "An expression for adding details.",
    },
    {
      term: "Pirme",
      meaning: "Always",
      pronunciation: "pir-me",
      usage: "An expression for adding details.",
    },
    {
      term: "Urosa",
      meaning: "Together",
      pronunciation: "u-ro-sa",
      usage: "An expression for adding details.",
    },
    {
      term: "Matahom",
      meaning: "Beautiful",
      pronunciation: "ma-ta-hom",
      usage: "A descriptive expression.",
      example: [
        {
          speaker: "A",
          text: "Kumusta an lugar nga iyo ginkadtoan?",
          translation: "How was the place you visited?",
        },
        {
          speaker: "B",
          text: "Matahom ngan mahimyang ito.",
          translation: "It was beautiful and peaceful.",
        },
      ],
    },
    {
      term: "Importante",
      meaning: "Important",
      pronunciation: "im-por-tan-te",
      usage: "A descriptive expression.",
    },
    {
      term: "Makuri",
      meaning: "Difficult",
      pronunciation: "ma-ku-ri",
      usage: "A descriptive expression.",
      example: [
        {
          speaker: "",
          text: "Bisan kon makuri, magpapadayon ako pag-aram.",
          translation: "Even if it is difficult, I will continue learning.",
        },
      ],
    },
    {
      term: "Masayon",
      meaning: "Easy",
      pronunciation: "ma-sa-yon",
      usage: "A descriptive expression.",
      example: [
        {
          speaker: "A",
          text: "Kada adlaw ka ba nag-aadal?",
          translation: "Do you study every day?",
        },
        {
          speaker: "B",
          text: "Oo, kay mas masayon ha akon an paghinumdom kon regular ako nga nag-aadal.",
          translation: "Yes, because remembering is easier for me when I study regularly.",
        },
      ],
    },
    {
      term: "Makapainteres",
      meaning: "Interesting",
      pronunciation: "ma-ka-pa-in-te-res",
      usage: "A descriptive expression.",
      example: [
        {
          speaker: "",
          text: "Makapainteres an libro nga akon ginpalit kahapon.",
          translation: "The book that I bought yesterday is interesting.",
        },
      ],
    },
    {
      term: "Mapulsanon",
      meaning: "Useful",
      pronunciation: "ma-pul-sa-non",
      usage: "A descriptive expression.",
    },
    {
      term: "Nakakabulig",
      meaning: "Helpful",
      pronunciation: "na-ka-ka-bu-lig",
      usage: "A descriptive expression.",
    },
    {
      term: "Komportable",
      meaning: "Comfortable",
      pronunciation: "kom-por-tab-le",
      usage: "A descriptive expression.",
    },
    {
      term: "Mahimyang",
      meaning: "Peaceful",
      pronunciation: "ma-him-yang",
      usage: "A descriptive expression.",
      example: [
        {
          speaker: "A",
          text: "Matahom ngan mahimyang ito.",
          translation: "It was beautiful and peaceful.",
        },
        {
          speaker: "B",
          text: "Damo ba an mga tawo didto?",
          translation: "Were there many people there?",
        },
      ],
    },
    {
      term: "Matawo",
      meaning: "Crowded",
      pronunciation: "ma-ta-wo",
      usage: "A descriptive expression.",
    },
    {
      term: "Siyahan",
      meaning: "First",
      pronunciation: "si-ya-han",
      usage: "An expression for organizing ideas.",
      example: [
        {
          speaker: "A",
          text: "Kinahanglan naton tapuson an proyekto antes han kataposan nga petsa.",
          translation: "We need to finish the project before the deadline.",
        },
        {
          speaker: "B",
          text: "Nauyon ako. Siyahan, kinahanglan naton bahinon an mga buruhaton.",
          translation: "I agree. First, we need to divide the tasks.",
        },
      ],
    },
    {
      term: "Sunod",
      meaning: "Next",
      pronunciation: "su-nod",
      usage: "An expression for organizing ideas.",
    },
    {
      term: "Katapos hito",
      meaning: "After that",
      pronunciation: "ka-ta-pos hi-to",
      usage: "An expression for organizing ideas.",
    },
    {
      term: "Pananglitan",
      meaning: "For example",
      pronunciation: "pa-nang-li-tan",
      usage: "An expression for organizing ideas.",
    },
    {
      term: "Ha luyo nga bahin",
      meaning: "On the other hand",
      pronunciation: "ha lu-yo nga ba-hin",
      usage: "An expression for organizing ideas.",
    },
    {
      term: "Ha kataposan",
      meaning: "Finally",
      pronunciation: "ha ka-ta-po-san",
      usage: "An expression for organizing ideas.",
    },
    {
      term: "Ha kabug-osan",
      meaning: "In general",
      pronunciation: "ha ka-bu-go-san",
      usage: "An expression for organizing ideas.",
    },
  ],
  greetings: [
    {
      term: "Ngan",
      meaning: "And",
      pronunciation: "ngan",
      usage: "A connecting expression.",
      example: [
        {
          speaker: "A",
          text: "Paonan-o ka nag-aandam para ha imo eksam?",
          translation: "How do you prepare for your examination?",
        },
        {
          speaker: "B",
          text: "Nagbabasa ako hin mga libro ngan naghihimo hin mga nota.",
          translation: "I read books and make notes.",
        },
      ],
    },
    {
      term: "Pero",
      meaning: "But",
      pronunciation: "pe-ro",
      usage: "A connecting expression.",
      example: [
        {
          speaker: "",
          text: "Karuyag ko kumadto, pero kulang an akon panahon.",
          translation: "I want to go, but I do not have enough time.",
        },
      ],
    },
    {
      term: "O",
      meaning: "Or",
      pronunciation: "o",
      usage: "A connecting expression.",
      example: [
        {
          speaker: "",
          text: "Mahimo kita mag-aram ha balay o ha library.",
          translation: "We can study at home or at the library.",
        },
      ],
    },
    {
      term: "Kay",
      meaning: "Because",
      pronunciation: "kay",
      usage: "A connecting expression.",
      example: [
        {
          speaker: "A",
          text: "Kada adlaw ka ba nag-aadal?",
          translation: "Do you study every day?",
        },
        {
          speaker: "B",
          text: "Oo, kay mas masayon ha akon an paghinumdom kon regular ako nga nag-aadal.",
          translation: "Yes, because remembering is easier for me when I study regularly.",
        },
      ],
    },
    {
      term: "Tungod kay",
      meaning: "Because / Due to the fact that",
      pronunciation: "tung-od kay",
      usage: "A connecting expression.",
    },
    {
      term: "Kon",
      meaning: "If",
      pronunciation: "kon",
      usage: "A connecting expression.",
      example: [
        {
          speaker: "A",
          text: "Oo, kay mas masayon ha akon an paghinumdom kon regular ako nga nag-aadal.",
          translation: "Yes, because remembering is easier for me when I study regularly.",
        },
        {
          speaker: "B",
          text: "Maupay ito nga paagi.",
          translation: "That is a good method.",
        },
      ],
    },
    {
      term: "Bisan kon",
      meaning: "Even if",
      pronunciation: "bi-san kon",
      usage: "A connecting expression.",
      example: [
        {
          speaker: "A",
          text: "Kon magbubuligay kita, matatapos naton ini ha husto nga panahon.",
          translation: "If we work together, we can finish this on time.",
        },
        {
          speaker: "B",
          text: "Bisan kon damu an aton buruhaton, mahimo naton ini matapos kon maghihirimo kita hin maopay nga plano.",
          translation: "Even if we have many tasks, we can finish this if we make a good plan.",
        },
      ],
    },
    {
      term: "Bisan pa",
      meaning: "Although",
      pronunciation: "bi-san pa",
      usage: "A connecting expression.",
    },
    {
      term: "Salit",
      meaning: "Therefore / So",
      pronunciation: "sa-lit",
      usage: "A connecting expression.",
      example: [
        {
          speaker: "A",
          text: "Damo ba an mga tawo didto?",
          translation: "Were there many people there?",
        },
        {
          speaker: "B",
          text: "Diri, diri gud damo an mga tawo, salit nakapahuway kami hin maupay.",
          translation: "No, there were not many people, so we were able to rest well.",
        },
      ],
    },
    {
      term: "Gihapon / liwat",
      meaning: "Also",
      pronunciation: "gi-ha-pon / li-wat",
      usage: "A connecting expression.",
      example: [
        {
          speaker: "A",
          text: "Ikaw, ano an imo ginbubuhat?",
          translation: "What about you? What do you do?",
        },
        {
          speaker: "B",
          text: "Nagbabasa ako, ngan nag-aadman ko liwat an mga pakiana tikang ha amon naglabay nga mga leksyon.",
          translation: "I read, and I also review questions from our previous lessons.",
        },
      ],
    },
    {
      term: "Kondi",
      meaning: "However",
      pronunciation: "kon-di",
      usage: "A connecting expression.",
      example: [
        {
          speaker: "",
          text: "Makuri an buruhaton, kondi matatapos naton ito.",
          translation: "The task is difficult; however, we can finish it.",
        },
      ],
    },
    {
      term: "Dugang pa",
      meaning: "In addition",
      pronunciation: "du-gang pa",
      usage: "A connecting expression.",
      example: [
        {
          speaker: "A",
          text: "Mahimo ako maghimo han dokumento samtang kamo nagreresearch.",
          translation: "I can prepare the document while you do the research.",
        },
        {
          speaker: "B",
          text: "Maupay ito nga ideya. Dugang pa, kinahanglan naton repasuhon an resulta antes naton ipasa.",
          translation: "That is a good idea. In addition, we need to review the result before submitting it.",
        },
      ],
    },
    {
      term: "Nga",
      meaning: "Which",
      pronunciation: "nga",
      usage: "An expression for adding details.",
      example: [
        {
          speaker: "A",
          text: "Maupay ito nga paagi.",
          translation: "That is a good method.",
        },
        {
          speaker: "B",
          text: "Ikaw, ano an imo ginbubuhat?",
          translation: "What about you? What do you do?",
        },
      ],
    },
    {
      term: "Nga",
      meaning: "That",
      pronunciation: "nga",
      usage: "An expression for adding details.",
      example: [
        {
          speaker: "A",
          text: "Nagbabasa ako, ngan nag-aadman ko liwat an mga pakiana tikang ha amon naglabay nga mga leksyon.",
          translation: "I read, and I also review questions from our previous lessons.",
        },
        {
          speaker: "B",
          text: "Kon magpadayon kita hini nga mga paagi, mas magigin andam kita para ha eksam.",
          translation: "If we continue these methods, we will be better prepared for the examination.",
        },
      ],
    },
    {
      term: "Kon / Han",
      meaning: "When",
      pronunciation: "kon / han",
      usage: "An expression for adding details.",
      example: [
        {
          speaker: "A",
          text: "Karuyag ko liwat makadto didto.",
          translation: "I also want to visit that place.",
        },
        {
          speaker: "B",
          text: "Kon may panahon ka, maupay kon makadto ka.",
          translation: "If you have time, it would be good for you to visit.",
        },
      ],
    },
    {
      term: "Samtang",
      meaning: "While",
      pronunciation: "sam-tang",
      usage: "An expression for adding details.",
      example: [
        {
          speaker: "A",
          text: "Nauyon ako. Siyahan, kinahanglan naton bahinon an mga buruhaton.",
          translation: "I agree. First, we need to divide the tasks.",
        },
        {
          speaker: "B",
          text: "Mahimo ako maghimo han dokumento samtang kamo nagreresearch.",
          translation: "I can prepare the document while you do the research.",
        },
      ],
    },
    {
      term: "Antes",
      meaning: "Before",
      pronunciation: "an-tes",
      usage: "An expression for adding details.",
      example: [
        {
          speaker: "A",
          text: "Kinahanglan naton tapuson an proyekto antes han kataposan nga petsa.",
          translation: "We need to finish the project before the deadline.",
        },
        {
          speaker: "B",
          text: "Nauyon ako. Siyahan, kinahanglan naton bahinon an mga buruhaton.",
          translation: "I agree. First, we need to divide the tasks.",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/antes.aac"),
    },
    {
      term: "Katapos",
      meaning: "After",
      pronunciation: "ka-ta-pos",
      usage: "An expression for adding details.",
      audioUrl: require("../../assets/audio/Lesson Waray/katapos.aac"),
    },
    {
      term: "Durante",
      meaning: "During",
      pronunciation: "du-ran-te",
      usage: "An expression for adding details.",
    },
    {
      term: "Kada adlaw",
      meaning: "Every day",
      pronunciation: "ka-da ad-law",
      usage: "An expression for adding details.",
      example: [
        {
          speaker: "A",
          text: "Nagbabasa ako hin mga libro ngan naghihimo hin mga nota.",
          translation: "I read books and make notes.",
        },
        {
          speaker: "B",
          text: "Kada adlaw ka ba nag-aadal?",
          translation: "Do you study every day?",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/kada adlaw.aac"),
    },
    {
      term: "Usahay",
      meaning: "Sometimes",
      pronunciation: "u-sa-hay",
      usage: "An expression for adding details.",
    },
    {
      term: "Kasagaran",
      meaning: "Usually",
      pronunciation: "ka-sa-ga-ran",
      usage: "An expression for adding details.",
    },
    {
      term: "Pirme",
      meaning: "Always",
      pronunciation: "pir-me",
      usage: "An expression for adding details.",
    },
    {
      term: "Urosa",
      meaning: "Together",
      pronunciation: "u-ro-sa",
      usage: "An expression for adding details.",
    },
    {
      term: "Matahom",
      meaning: "Beautiful",
      pronunciation: "ma-ta-hom",
      usage: "A descriptive expression.",
      example: [
        {
          speaker: "A",
          text: "Kumusta an lugar nga iyo ginkadtoan?",
          translation: "How was the place you visited?",
        },
        {
          speaker: "B",
          text: "Matahom ngan mahimyang ito.",
          translation: "It was beautiful and peaceful.",
        },
      ],
    },
    {
      term: "Importante",
      meaning: "Important",
      pronunciation: "im-por-tan-te",
      usage: "A descriptive expression.",
    },
    {
      term: "Makuri",
      meaning: "Difficult",
      pronunciation: "ma-ku-ri",
      usage: "A descriptive expression.",
      example: [
        {
          speaker: "",
          text: "Bisan kon makuri, magpapadayon ako pag-aram.",
          translation: "Even if it is difficult, I will continue learning.",
        },
      ],
    },
    {
      term: "Masayon",
      meaning: "Easy",
      pronunciation: "ma-sa-yon",
      usage: "A descriptive expression.",
      example: [
        {
          speaker: "A",
          text: "Kada adlaw ka ba nag-aadal?",
          translation: "Do you study every day?",
        },
        {
          speaker: "B",
          text: "Oo, kay mas masayon ha akon an paghinumdom kon regular ako nga nag-aadal.",
          translation: "Yes, because remembering is easier for me when I study regularly.",
        },
      ],
    },
    {
      term: "Makapainteres",
      meaning: "Interesting",
      pronunciation: "ma-ka-pa-in-te-res",
      usage: "A descriptive expression.",
      example: [
        {
          speaker: "",
          text: "Makapainteres an libro nga akon ginpalit kahapon.",
          translation: "The book that I bought yesterday is interesting.",
        },
      ],
    },
    {
      term: "Mapulsanon",
      meaning: "Useful",
      pronunciation: "ma-pul-sa-non",
      usage: "A descriptive expression.",
    },
    {
      term: "Nakakabulig",
      meaning: "Helpful",
      pronunciation: "na-ka-ka-bu-lig",
      usage: "A descriptive expression.",
    },
    {
      term: "Komportable",
      meaning: "Comfortable",
      pronunciation: "kom-por-tab-le",
      usage: "A descriptive expression.",
    },
    {
      term: "Mahimyang",
      meaning: "Peaceful",
      pronunciation: "ma-him-yang",
      usage: "A descriptive expression.",
      example: [
        {
          speaker: "A",
          text: "Matahom ngan mahimyang ito.",
          translation: "It was beautiful and peaceful.",
        },
        {
          speaker: "B",
          text: "Damo ba an mga tawo didto?",
          translation: "Were there many people there?",
        },
      ],
    },
    {
      term: "Matawo",
      meaning: "Crowded",
      pronunciation: "ma-ta-wo",
      usage: "A descriptive expression.",
    },
    {
      term: "Siyahan",
      meaning: "First",
      pronunciation: "si-ya-han",
      usage: "An expression for organizing ideas.",
      example: [
        {
          speaker: "A",
          text: "Kinahanglan naton tapuson an proyekto antes han kataposan nga petsa.",
          translation: "We need to finish the project before the deadline.",
        },
        {
          speaker: "B",
          text: "Nauyon ako. Siyahan, kinahanglan naton bahinon an mga buruhaton.",
          translation: "I agree. First, we need to divide the tasks.",
        },
      ],
    },
    {
      term: "Sunod",
      meaning: "Next",
      pronunciation: "su-nod",
      usage: "An expression for organizing ideas.",
    },
    {
      term: "Katapos hito",
      meaning: "After that",
      pronunciation: "ka-ta-pos hi-to",
      usage: "An expression for organizing ideas.",
    },
    {
      term: "Pananglitan",
      meaning: "For example",
      pronunciation: "pa-nang-li-tan",
      usage: "An expression for organizing ideas.",
    },
    {
      term: "Ha luyo nga bahin",
      meaning: "On the other hand",
      pronunciation: "ha lu-yo nga ba-hin",
      usage: "An expression for organizing ideas.",
    },
    {
      term: "Ha kataposan",
      meaning: "Finally",
      pronunciation: "ha ka-ta-po-san",
      usage: "An expression for organizing ideas.",
    },
    {
      term: "Ha kabug-osan",
      meaning: "In general",
      pronunciation: "ha ka-bu-go-san",
      usage: "An expression for organizing ideas.",
    },
  ],
  patterns: [
    {
      label: "Pattern 1: Showing Contrast",
      pattern: "Sentence + pero + Sentence.",
      examples: [
        "Karuyag ko kumadto, pero kulang an akon panahon.",
        "Kapoy hiya, pero nagpapadayon hiya ha pagtrabaho.",
      ],
    },
    {
      label: "Pattern 2: Adding Description",
      pattern: "Word + ngan + Word + Subject.",
      examples: [
        "Dako ngan matahom an eskwelahan.",
        "Buotan ngan maduruto an akon sangkay.",
      ],
    },
    {
      label: "Pattern 3: Expressing Conditions",
      pattern: "Kon + Condition, + Result.",
      examples: [
        "Kon may panahon ako, magbabasa ako hin libro.",
        "Kon mag-uran, magpapabilin kita ha balay.",
      ],
    },
  ],
  sentences: [
    {
      text: "Nag-aadal ako ngan nagbabasa hin mga libro kada adlaw.",
      meaning: "I study and read books every day.",
    },
    {
      text: "Nagluluto hiya samtang naglilimpyo an iya bugto han balay.",
      meaning: "She cooks while her brother cleans the house.",
    },
    {
      text: "Karuyag ko kumadto, pero kulang an akon panahon.",
      meaning: "I want to go, but I do not have enough time.",
    },
    {
      text: "Mahimo kita mag-aram ha balay o ha library.",
      meaning: "We can study at home or at the library.",
    },
    {
      text: "Kapoy hiya, pero nagpapadayon hiya ha pagtrabaho.",
      meaning: "He is tired, but he continues working.",
    },
    {
      text: "Dako ngan matahom an eskwelahan.",
      meaning: "The school is large and beautiful.",
    },
    {
      text: "Buotan ngan maduruto an akon sangkay.",
      meaning: "My friend is kind and hardworking.",
    },
    {
      text: "Makapainteres an libro nga akon ginpalit kahapon.",
      meaning: "The book that I bought yesterday is interesting.",
    },
    {
      text: "Mahimyang an lugar diin kami nag-aram.",
      meaning: "The place where we studied was peaceful.",
    },
    {
      text: "Lami an pagkaon nga igin-andam han akon nanay.",
      meaning: "The food prepared by my mother was delicious.",
    },
    {
      text: "Kon may panahon ako, magbabasa ako hin libro.",
      meaning: "If I have time, I will read a book.",
    },
    {
      text: "Kon mag-uran, magpapabilin kita ha balay.",
      meaning: "If it rains, we will stay at home.",
    },
    {
      text: "Bisan kon makuri, magpapadayon ako pag-aram.",
      meaning: "Even if it is difficult, I will continue learning.",
    },
    {
      text: "Kon kinahanglan mo hin bulig, mahimo ka magpakiana ha akon.",
      meaning: "If you need help, you can ask me.",
    },
    {
      text: "Kon magbubuligay kita, matatapos naton an proyekto.",
      meaning: "If we work together, we can finish the project.",
    },
    {
      text: "Karuyag ko an pagbasa, pero mas karuyag han akon bugto an pagsurat.",
      meaning: "I like reading, but my brother prefers writing.",
    },
    {
      text: "Makuri an buruhaton, kondi matatapos naton ito.",
      meaning: "The task is difficult; however, we can finish it.",
    },
    {
      text: "Nag-aadal ako kada adlaw, ngan nagbubuhat liwat ako hin pagpraktis ha pagyakan.",
      meaning: "I study every day, and I also practice speaking.",
    },
    {
      text: "Matahom an lugar ngan mahimyang liwat ito.",
      meaning: "The place is beautiful, and it is also peaceful.",
    },
    {
      text: "Dugang pa ha pag-aram, nabulig ako ha akon pamilya.",
      meaning: "In addition to studying, I help my family.",
    },
    {
      text: "Kon may panahon ako, magbabasa ako.",
      meaning: "If I have time, I will read.",
    },
    {
      text: "Kon mag-uran, diri kami makakadto.",
      meaning: "If it rains, we cannot go.",
    },
    {
      text: "Kon magpraktis ka, mag-uuswag an imo abilidad.",
      meaning: "If you practice, your ability will improve.",
    },
  ],
  conversations: [
    {
      title: "Conversation 1: Discussing Study Habits",
      situation: "Two classmates discuss their study routines and how they prepare for examinations.",
      lines: [
        {
          speaker: "Ana",
          text: "Paonan-o ka nag-aandam para ha imo eksam?",
          translation: "How do you prepare for your examination?",
        },
        {
          speaker: "Ben",
          text: "Nagbabasa ako hin mga libro ngan naghihimo hin mga nota.",
          translation: "I read books and make notes.",
        },
        {
          speaker: "Ana",
          text: "Kada adlaw ka ba nag-aadal?",
          translation: "Do you study every day?",
        },
        {
          speaker: "Ben",
          text: "Oo, kay mas masayon ha akon an paghinumdom kon regular ako nga nag-aadal.",
          translation: "Yes, because remembering is easier for me when I study regularly.",
        },
        {
          speaker: "Ana",
          text: "Maupay ito nga paagi.",
          translation: "That is a good method.",
        },
        {
          speaker: "Ben",
          text: "Ikaw, ano an imo ginbubuhat?",
          translation: "What about you? What do you do?",
        },
        {
          speaker: "Ana",
          text: "Nagbabasa ako, ngan nag-aadman ko liwat an mga pakiana tikang ha amon naglabay nga mga leksyon.",
          translation: "I read, and I also review questions from our previous lessons.",
        },
        {
          speaker: "Ben",
          text: "Kon magpadayon kita hini nga mga paagi, mas magigin andam kita para ha eksam.",
          translation: "If we continue these methods, we will be better prepared for the examination.",
        },
      ],
    },
    {
      title: "Conversation 2: Describing a Place",
      situation: "Two friends discuss a place they visited during their vacation.",
      lines: [
        {
          speaker: "Mark",
          text: "Kumusta an lugar nga iyo ginkadtoan?",
          translation: "How was the place you visited?",
        },
        {
          speaker: "Leo",
          text: "Matahom ngan mahimyang ito.",
          translation: "It was beautiful and peaceful.",
        },
        {
          speaker: "Mark",
          text: "Damo ba an mga tawo didto?",
          translation: "Were there many people there?",
        },
        {
          speaker: "Leo",
          text: "Diri, diri gud damo an mga tawo, salit nakapahuway kami hin maupay.",
          translation: "No, there were not many people, so we were able to rest well.",
        },
        {
          speaker: "Mark",
          text: "Ano an iyo ginbuhat didto?",
          translation: "What did you do there?",
        },
        {
          speaker: "Leo",
          text: "Naglakat-lakat kami, nagkuha hin mga litrato, ngan nagkaon hin mga pagkaon nga lokal.",
          translation: "We walked around, took pictures, and ate local food.",
        },
        {
          speaker: "Mark",
          text: "Karuyag ko liwat makadto didto.",
          translation: "I also want to visit that place.",
        },
        {
          speaker: "Leo",
          text: "Kon may panahon ka, maupay kon makadto ka.",
          translation: "If you have time, it would be good for you to visit.",
        },
      ],
    },
    {
      title: "Conversation 3: Planning a Group Project",
      situation: "Students discuss how to finish their group project.",
      lines: [
        {
          speaker: "Ana",
          text: "Kinahanglan naton tapuson an proyekto antes han kataposan nga petsa.",
          translation: "We need to finish the project before the deadline.",
        },
        {
          speaker: "Ben",
          text: "Nauyon ako. Siyahan, kinahanglan naton bahinon an mga buruhaton.",
          translation: "I agree. First, we need to divide the tasks.",
        },
        {
          speaker: "Mark",
          text: "Mahimo ako maghimo han dokumento samtang kamo nagreresearch.",
          translation: "I can prepare the document while you do the research.",
        },
        {
          speaker: "Ana",
          text: "Maupay ito nga ideya. Dugang pa, kinahanglan naton repasuhon an resulta antes naton ipasa.",
          translation: "That is a good idea. In addition, we need to review the result before submitting it.",
        },
        {
          speaker: "Ben",
          text: "Kon magbubuligay kita, matatapos naton ini ha husto nga panahon.",
          translation: "If we work together, we can finish this on time.",
        },
        {
          speaker: "Mark",
          text: "Bisan kon damu an aton buruhaton, mahimo naton ini matapos kon maghihirimo kita hin maopay nga plano.",
          translation: "Even if we have many tasks, we can finish this if we make a good plan.",
        },
        {
          speaker: "Ana",
          text: "Sige, tikangan na naton.",
          translation: "All right, let us begin.",
        },
      ],
    },
  ],
  languageNotes: [
    {
      title: "A. Combining Two or More Ideas",
      body: [
        "A sentence can communicate several related ideas when appropriate connecting expressions are used.",
        "The following expressions can help:",
      ],
      examples: [
        {
          text: "Ngan",
          meaning: "and",
        },
        {
          text: "Pero",
          meaning: "but",
        },
        {
          text: "O",
          meaning: "or",
        },
        {
          text: "Samtang",
          meaning: "while",
        },
      ],
    },
    {
      title: "A. Combining Two or More Ideas",
      body: [
        "Nagbabasa ako ngan nagsusurat hiya. I am reading, and he/she is writing.",
        "Karuyag ko umupod, pero may buruhaton pa ako. I want to join, but I still have something to do.",
        "Nagluluto hi Nanay samtang naglilimpyo hi Tatay. Mother is cooking while Father is cleaning.",
        "Important: Connecting expressions should be selected according to the relationship between the ideas. Use ngan to add information, pero to show contrast, and o to present alternatives.",
      ],
    },
    {
      title: "B. Adding Descriptive Details",
      body: [
        "A simple sentence can be expanded by including information about the subject, object, place, or activity.",
        "Simple: Matahom an lugar. The place is beautiful.",
        "Expanded: Matahom ngan mahimyang an lugar nga amon ginkadtoan han bakasyon. The place we visited during the vacation was beautiful and peaceful.",
        "Another example:",
        "Simple: Buotan hiya. He/She is kind.",
        "Expanded: Buotan ngan matinabangon hiya ha iya mga sangkay. He/She is kind and helpful to his/her friends.",
      ],
    },
    {
      title: "C. Expressing Conditions",
      body: [
        "Conditional sentences describe situations that depend on another event or action.",
        "The expression kon can introduce a condition.",
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
            left: "Kon mag-uran, diri kami makakadto.",
            right: "If it rains, we cannot go.",
          },
          {
            left: "Kon magpraktis ka, mag-uuswag an imo abilidad.",
            right: "If you practice, your ability will improve.",
          },
        ],
      },
    },
    {
      title: "C. Expressing Conditions",
      body: [
        "The expression bisan kon can introduce a situation that does not prevent another action.",
        "Bisan kon makuri an leksyon, magpapadayon ako pag-aram. Even if the lesson is difficult, I will continue studying.",
        "Bisan kon malayo an eskwelahan, regular hiya nga naeskwela. Even if the school is far away, he/she regularly attends school.",
      ],
    },
    {
      title: "D. Showing Contrast Between Ideas",
      body: [
        "Sometimes, two ideas are related but express different or opposing information.",
        "You can use:",
      ],
      examples: [
        {
          text: "Pero",
          meaning: "but",
        },
        {
          text: "Kondi",
          meaning: "however / but",
        },
        {
          text: "Bisan pa",
          meaning: "even so / although, depending on construction",
        },
      ],
    },
    {
      title: "D. Showing Contrast Between Ideas",
      body: [
        "Gutiay an balay, pero dako an amon kalipay. The house is small, but our happiness is great.",
        "Kapoy hiya, kondi nagpapadayon hiya pagtrabaho. He/She is tired; however, he/she continues working.",
        "Damo an buruhaton, bisan pa hito, natapos namon an proyekto. There was a lot of work; even so, we finished the project.",
      ],
    },
    {
      title: "E. Organizing Multiple Sentences into a Paragraph",
      body: [
        "Advanced communication also requires organizing sentences so that they form a clear paragraph.",
        "A paragraph should have a central idea supported by related information.",
        "Waray:",
        "Importante ha akon an pag-aram hin mga yinaknan. Nakakabulig ini ha pakigkomunikar ha iba nga mga tawo. Dugang pa, pinaagi hini, mas nakikilala naton an kultura han usa nga lugar. Pananglitan, pinaagi ha pag-aram hin Waray, mas nasasabtan naton an mga pulong ngan mga ekspresyon nga ginagamit han mga tawo ha Western Samar. Salit, karuyag ko nga padayon nga mag-aram ngan magpraktis.",
        "English:",
        "Learning languages is important to me. It helps with communicating with other people. In addition, through this, we become more familiar with the culture of a place. For example, by learning Waray, we better understand the words and expressions used by people in Western Samar. Therefore, I want to continue learning and practicing.",
      ],
    },
    {
      title: "F. Improving Sentence Clarity",
      body: [
        "Long sentences should still be understandable. Adding too many unrelated ideas can make a sentence confusing.",
        "Compare:",
        "Less clear:",
        "Nag-aadal ako ngan nagbabasa ako ngan nagluluto hi Nanay ngan may eksam kami buwas.",
        "Clearer:",
        "Nag-aadal ako ngan nagbabasa hin libro kay may eksam kami buwas. Samtang nag-aadal ako, nagluluto hi Nanay ha kusina.",
        "The second version separates the ideas according to their relationship.",
        "Remember:",
        "• Keep related ideas together.",
        "• Use appropriate connecting expressions.",
        "• Avoid adding unnecessary information.",
        "• Divide very long statements into shorter sentences when needed.",
      ],
    },
  ],
  inferredFields: [
    "usage",
    "example",
    "pattern",
    "choice",
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
