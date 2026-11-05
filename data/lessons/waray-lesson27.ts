import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 27 — imported from "Lesson Plan.pdf", pages 1081–1100.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
// Fields not given by the plan are INFERRED from this lesson's own content and
// listed in docs/waray-inferred-keys.md: situation, usage, example, pattern, arrange, speaking phrase, respelling, target pitch and mood, example situation, pronunciation tip, completion requirement.
// The practice answers are INFERRED drafts, not from the PDF. See
// docs/waray-draft-answer-keys.md for each answer and how it was found.

export const warayLesson27: StructuredLesson = {
  lessonId: "waray_27",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 27,
  title: "Workplace and School Conversations",
  level: "Advanced",
  unit: "Unit 3 – Real-Life Communication",
  estimatedDuration: "45–60 minutes",
  prerequisite: "Lessons 21–26",
  languageVariety: "Contemporary Waray spoken in Western Samar",
  intro: [
    "Communication is an important part of school and workplace environments. Students communicate with teachers, classmates, and school personnel, while employees interact with colleagues, supervisors, and customers.",
    "These situations require learners to understand instructions, ask questions, explain responsibilities, make requests, and provide updates.",
    "In this lesson, learners will practice using Waray in common academic and professional situations. They will learn expressions for asking assistance, discussing assignments, reporting completed tasks, requesting clarification, and communicating respectfully.",
    "The goal is to help learners use Waray in practical situations rather than simply memorize individual words and phrases.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Recognize common Waray vocabulary used in school and workplace environments.",
    "Ask and answer questions related to academic and professional responsibilities.",
    "Communicate requests, instructions, and concerns politely.",
    "Participate in formal and informal conversations with classmates, teachers, colleagues, and supervisors.",
    "Explain tasks, responsibilities, and schedules using appropriate Waray expressions.",
    "Distinguish between formal and informal communication based on the situation.",
  ],
  assessment: {
    instructions: "Choose the best answer for each question.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What is the Waray word for school?",
        options: [
          {
            key: "A",
            text: "Eskwelahan",
          },
          {
            key: "B",
            text: "Ospital",
          },
          {
            key: "C",
            text: "Merkado",
          },
          {
            key: "D",
            text: "Balay",
          },
        ],
        answerKey: "A",
      },
      {
        id: 2,
        prompt: "What does pakiana mean?",
        options: [
          {
            key: "A",
            text: "Answer",
          },
          {
            key: "B",
            text: "Question",
          },
          {
            key: "C",
            text: "Schedule",
          },
          {
            key: "D",
            text: "Report",
          },
        ],
        answerKey: "B",
      },
      {
        id: 3,
        prompt: "Which expression means \"Can you help me?\"",
        options: [
          {
            key: "A",
            text: "Pwede mo ba ako buligan?",
          },
          {
            key: "B",
            text: "Pira na an imo edad?",
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
        answerKey: "A",
      },
      {
        id: 4,
        prompt: "How do you say \"I have finished my work\"?",
        options: [
          {
            key: "A",
            text: "Natapos ko na an akon trabaho.",
          },
          {
            key: "B",
            text: "Gintatrabaho ko pa an akon trabaho.",
          },
          {
            key: "C",
            text: "Diri ko nasasabtan an trabaho.",
          },
          {
            key: "D",
            text: "Kinahanglan ko hin trabaho.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 5,
        prompt: "Which expression is appropriate when asking a teacher a question?",
        options: [
          {
            key: "A",
            text: "Pwede ba ako magpakiana?",
          },
          {
            key: "B",
            text: "Dako an balay.",
          },
          {
            key: "C",
            text: "Lami an pagkaon.",
          },
          {
            key: "D",
            text: "Malipayon ako.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 6,
        prompt: "What does iskedyul mean?",
        options: [
          {
            key: "A",
            text: "Schedule",
          },
          {
            key: "B",
            text: "Salary",
          },
          {
            key: "C",
            text: "Employee",
          },
          {
            key: "D",
            text: "Customer",
          },
        ],
        answerKey: "A",
      },
      {
        id: 7,
        prompt: "You do not understand an instruction. Which expression should you use?",
        options: [
          {
            key: "A",
            text: "Mahimo mo ba ini igsaysay?",
          },
          {
            key: "B",
            text: "Salamat ha imo panahon.",
          },
          {
            key: "C",
            text: "Maupay nga kulop.",
          },
          {
            key: "D",
            text: "Taga diin ka?",
          },
        ],
        answerKey: "A",
      },
      {
        id: 8,
        prompt: "What does Kinahanglan ko pa hin dugang nga panahon mean?",
        options: [
          {
            key: "A",
            text: "I need additional time.",
          },
          {
            key: "B",
            text: "I have finished my task.",
          },
          {
            key: "C",
            text: "I am going home.",
          },
          {
            key: "D",
            text: "I do not have an assignment.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 9,
        prompt: "Which situation requires respectful communication?",
        options: [
          {
            key: "A",
            text: "Asking a supervisor for clarification.",
          },
          {
            key: "B",
            text: "Talking casually with a close friend.",
          },
          {
            key: "C",
            text: "Playing a game alone.",
          },
          {
            key: "D",
            text: "Reading a book silently.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 10,
        prompt: "Why is it important to communicate clearly at school and work?",
        options: [
          {
            key: "A",
            text: "To avoid misunderstandings and coordinate responsibilities.",
          },
          {
            key: "B",
            text: "To make conversations unnecessarily complicated.",
          },
          {
            key: "C",
            text: "To avoid asking questions.",
          },
          {
            key: "D",
            text: "To prevent people from sharing information.",
          },
        ],
        answerKey: "A",
      },
    ],
  },
  extraActivities: [
    {
      title: "Role-Playing",
      kind: "roleplay",
      instructions: "Work with a partner. Choose one of the following situations and create a short Waray conversation.\nSituation 1: School\nYou are a student asking your teacher about an assignment. Ask about the instructions, deadline, and required materials.\nSituation 2: Group Project\nYou and your classmate are discussing your assigned responsibilities. Explain what you have completed and what still needs to be done.\nSituation 3: Workplace\nYou are an employee reporting your progress to a supervisor. Explain the status of your task and ask for clarification about an instruction.\nSituation 4: Colleague Assistance\nYou need help understanding a document. Politely ask a colleague to explain it.\nEach conversation should contain:",
      items: [
        "At least five exchanges.",
        "At least three expressions from this lesson.",
        "At least one question.",
        "At least one polite request.",
      ],
    },
  ],
  matchActivity: {
    title: "Vocabulary Matching",
    instructions: "Match the Waray vocabulary in Column A with its English meaning in Column B.",
    pairs: [
      {
        id: "1",
        term: "Eskwelahan",
        answer: "School",
      },
      {
        id: "2",
        term: "Buruhaton",
        answer: "Task",
      },
      {
        id: "3",
        term: "Pakiana",
        answer: "Question",
      },
      {
        id: "4",
        term: "Asaynment",
        answer: "Assignment",
      },
      {
        id: "5",
        term: "Iskedyul",
        answer: "Schedule",
      },
    ],
  },
  choiceActivity: {
    title: "Choose the Appropriate Expression",
    instructions: "Select the most appropriate Waray expression for each situation.",
    questions: [
      {
        id: 1,
        prompt: "You want to ask your teacher about an assignment.",
        options: [
          {
            key: "A",
            text: "Pwede ba ako magpakiana?",
          },
          {
            key: "B",
            text: "Dako an balay.",
          },
          {
            key: "C",
            text: "Gutom ako.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 2,
        prompt: "You need assistance with a workplace task.",
        options: [
          {
            key: "A",
            text: "Kinahanglan ko hin bulig hini nga buruhaton.",
          },
          {
            key: "B",
            text: "Ano an imo ngaran?",
          },
          {
            key: "C",
            text: "Lami an pagkaon.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 3,
        prompt: "You want to tell your colleague that your report is finished.",
        options: [
          {
            key: "A",
            text: "Natapos ko na an akon report.",
          },
          {
            key: "B",
            text: "Waray ako maaram.",
          },
          {
            key: "C",
            text: "Taga diin ka?",
          },
        ],
        answerKey: "A",
      },
      {
        id: 4,
        prompt: "You need more time to finish your assignment.",
        options: [
          {
            key: "A",
            text: "Kinahanglan ko pa hin dugang nga panahon.",
          },
          {
            key: "B",
            text: "Maupay nga gab-i.",
          },
          {
            key: "C",
            text: "Hain an eskwelahan?",
          },
        ],
        answerKey: "A",
      },
      {
        id: 5,
        prompt: "You want someone to explain an instruction again.",
        options: [
          {
            key: "A",
            text: "Mahimo mo ba utrahon an instruksyon?",
          },
          {
            key: "B",
            text: "Pira na an imo edad?",
          },
          {
            key: "C",
            text: "Ano an imo karuyag kaunon?",
          },
        ],
        answerKey: "A",
      },
    ],
  },
  fillInBlanks: {
    title: "Complete the Conversation",
    instructions: "Fill in the blanks using the appropriate expressions from the word bank.",
    items: [
      {
        id: "1",
        sentence: "Student: Maestra, __________________________ mahitungod han amon proyekto?",
        answer: "Pwede ba ako magpakiana?",
        title: "Complete the Conversation",
        instructions: "Fill in the blanks using the appropriate expressions from the word bank.",
        wordBank: [
          "Salamat ha imo bulig.",
          "Pwede ba ako magpakiana?",
          "Natapos ko na an akon trabaho.",
          "Kinahanglan ko pa hin panahon.",
          "Mahimo mo ba ini igsaysay?",
        ],
      },
      {
        id: "2",
        sentence: "Student: Diri ko nasasabtan ini nga instruksyon. __________________________",
        answer: "Mahimo mo ba ini igsaysay?",
        title: "Complete the Conversation",
        instructions: "Fill in the blanks using the appropriate expressions from the word bank.",
        wordBank: [
          "Salamat ha imo bulig.",
          "Pwede ba ako magpakiana?",
          "Natapos ko na an akon trabaho.",
          "Kinahanglan ko pa hin panahon.",
          "Mahimo mo ba ini igsaysay?",
        ],
      },
      {
        id: "3",
        sentence: "Employee: Waray ko pa mahuman an report. __________________________",
        answer: "Kinahanglan ko pa hin panahon.",
        title: "Complete the Conversation",
        instructions: "Fill in the blanks using the appropriate expressions from the word bank.",
        wordBank: [
          "Salamat ha imo bulig.",
          "Pwede ba ako magpakiana?",
          "Natapos ko na an akon trabaho.",
          "Kinahanglan ko pa hin panahon.",
          "Mahimo mo ba ini igsaysay?",
        ],
      },
      {
        id: "4",
        sentence: "Employee: __________________________ ngan andam na ako magpasa.",
        answer: "Natapos ko na an akon trabaho.",
        title: "Complete the Conversation",
        instructions: "Fill in the blanks using the appropriate expressions from the word bank.",
        wordBank: [
          "Salamat ha imo bulig.",
          "Pwede ba ako magpakiana?",
          "Natapos ko na an akon trabaho.",
          "Kinahanglan ko pa hin panahon.",
          "Mahimo mo ba ini igsaysay?",
        ],
      },
      {
        id: "5",
        sentence: "Employee: __________________________",
        answer: "Salamat ha imo bulig.",
        title: "Complete the Conversation",
        instructions: "Fill in the blanks using the appropriate expressions from the word bank.",
        wordBank: [
          "Salamat ha imo bulig.",
          "Pwede ba ako magpakiana?",
          "Natapos ko na an akon trabaho.",
          "Kinahanglan ko pa hin panahon.",
          "Mahimo mo ba ini igsaysay?",
        ],
      },
    ],
  },
  answerKeysInferred: true,
  rewards: {
    items: [
      {
        section: "vocabulary",
        label: "Vocabulary Review + Useful Expressions",
        xp: 20,
      },
      {
        section: "conversation",
        label: "Guided Conversations",
        xp: 10,
      },
      {
        section: "sentences",
        label: "Practice Activities",
        xp: 15,
      },
      {
        section: "assessment",
        label: "Lesson Assessment",
        xp: 15,
      },
    ],
    total: 60,
    badge: {
      name: "Professional Communicator Badge",
      description: "Awarded to learners who demonstrate the ability to use appropriate Waray expressions in academic and workplace situations.",
    },
    completionRequirement: "Obtain at least 70% in the lesson assessment. Learners may repeat the activities and assessment if they do not meet the requirement.",
  },
  expectedOutcomes: [
    "Recognize vocabulary used in school and workplace environments.",
    "Ask questions about academic and professional responsibilities.",
    "Request help and clarification politely.",
    "Explain the progress of assigned tasks.",
    "Participate in simple school and workplace conversations.",
    "Adjust their communication based on the situation and the person they are addressing.",
    "Lesson Completion Criteria:",
    "Complete the vocabulary review.",
    "Finish the useful-expression activities.",
    "Complete the guided conversation exercises.",
    "Participate in at least one role-playing activity.",
    "Obtain at least 70% in the lesson assessment.",
    "Earn up to 60 XP and unlock the Professional Communicator Badge.",
  ],
  arrangeWords: {
    title: "Arrange the Words",
    instructions: "Arrange the words to form a correct Waray sentence.",
    items: [
      {
        id: "1",
        words: [
          "ba",
          "mo",
          "buligan",
          "ako",
          "Pwede",
        ],
        answer: [
          "Pwede",
          "mo",
          "ba",
          "ako",
          "buligan",
        ],
        display: "Pwede mo ba ako buligan?",
      },
      {
        id: "2",
        words: [
          "Kinahanglan",
          "hini",
          "ko",
          "nga",
          "hin",
          "bulig",
          "buruhaton",
        ],
        answer: [
          "Kinahanglan",
          "ko",
          "hin",
          "bulig",
          "hini",
          "nga",
          "buruhaton",
        ],
        display: "Kinahanglan ko hin bulig hini nga buruhaton.",
      },
      {
        id: "3",
        words: [
          "akon",
          "Mahimo",
          "mo",
          "igsaysay",
          "ini",
          "ba",
          "ha",
        ],
        answer: [
          "Mahimo",
          "mo",
          "ba",
          "ini",
          "igsaysay",
          "ha",
          "akon",
        ],
        display: "Mahimo mo ba ini igsaysay ha akon?",
      },
      {
        id: "4",
        words: [
          "ko",
          "mga",
          "nasasabtan",
          "instruksyon",
          "Diri",
          "an",
        ],
        answer: [
          "Diri",
          "ko",
          "nasasabtan",
          "an",
          "mga",
          "instruksyon",
        ],
        display: "Diri ko nasasabtan an mga instruksyon.",
      },
      {
        id: "5",
        words: [
          "ito",
          "mo",
          "Mahimo",
          "utrahon",
          "ba",
        ],
        answer: [
          "Mahimo",
          "mo",
          "ba",
          "utrahon",
          "ito",
        ],
        display: "Mahimo mo ba utrahon ito?",
      },
    ],
  },
  speaking: {
    title: "Speaking Practice",
    instructions: "Read the following sentences aloud.",
    note: "Learners should listen to the model pronunciation before recording their own voice.",
    practiceLessonId: "waray_27",
    phrases: [
      {
        id: "1",
        text: "Pwede mo ba ako buligan?",
        respelling: "pweh-deh mo ba? a-ko bu-li-gan",
        meaning: "Can you help me?",
      },
      {
        id: "2",
        text: "Alayon, hinay-hinay la pagyakan.",
        respelling: "a-la-yon hi-nay-hi-nay la pag-ya-kan",
        meaning: "Please speak slowly.",
      },
      {
        id: "3",
        text: "Ipasa ko ito buwas.",
        respelling: "i-pa-sa ko i-to bu-was",
        meaning: "I will submit it tomorrow.",
      },
      {
        id: "4",
        text: "San-o magtitikang an mitin?",
        respelling: "sahn-oh mag-ti-ti-kang an mi-tin",
        meaning: "When will the meeting start?",
      },
      {
        id: "5",
        text: "Alayon, hulat anay hin madaliay.",
        respelling: "a-la-yon hu-lat a-nay hin ma-da-li-ay",
        meaning: "Please wait for a moment.",
      },
      {
        id: "6",
        text: "Ano an akon buruhaton yana?",
        respelling: "a-no an a-kon bu-ru-ha-ton ya-na",
        meaning: "What is my task today?",
      },
      {
        id: "7",
        text: "Natapos ko na an akon buruhaton.",
        respelling: "na-ta-pos ko na an a-kon bu-ru-ha-ton",
        meaning: "I have finished my task.",
      },
    ],
  },
  exampleSituation: {
    description: "Imagine this situation from the lesson: Asking a Teacher About an Assignment.",
    lead: "You can begin by saying:",
    line: "Maupay nga aga, Maestra.",
    translation: "Good morning, Teacher.",
  },
  vocabularyIntro: "Learn the following words and expressions before proceeding to the activities.",
  pronunciationTip: "Read each syllable clearly. Avoid rushing through longer expressions.",
  selfIntroIntro: "Use these patterns and phrases from the lesson.",
  vocabulary: [
    {
      term: "Eskwelahan",
      meaning: "School",
      pronunciation: "Es-kwe-la-han",
      usage: "From this lesson's word list: school vocabulary.",
    },
    {
      term: "Klasehan",
      meaning: "Classroom",
      pronunciation: "Kla-se-han",
      usage: "From this lesson's word list: school vocabulary.",
    },
    {
      term: "Maestra / Maestro",
      meaning: "Teacher",
      pronunciation: "Ma-es-tra / Ma-es-tro",
      usage: "From this lesson's word list: school vocabulary.",
      example: [
        {
          speaker: "A",
          text: "Maupay nga aga, Maestra.",
          translation: "Good morning, Teacher.",
        },
        {
          speaker: "B",
          text: "Maupay nga aga. Ano an imo pakiana?",
          translation: "Good morning. What is your question?",
        },
      ],
    },
    {
      term: "Estudyante",
      meaning: "Student",
      pronunciation: "Es-tu-dyan-te",
      usage: "From this lesson's word list: school vocabulary.",
    },
    {
      term: "Klasmet",
      meaning: "Classmate",
      pronunciation: "Klas-met",
      usage: "From this lesson's word list: school vocabulary.",
    },
    {
      term: "Leksyon",
      meaning: "Lesson",
      pronunciation: "Lek-syon",
      usage: "From this lesson's word list: school vocabulary.",
    },
    {
      term: "Asaynment",
      meaning: "Assignment",
      pronunciation: "A-sayn-ment",
      usage: "From this lesson's word list: school vocabulary.",
      example: [
        {
          speaker: "",
          text: "Ano an aton asaynment?",
          translation: "What is our assignment?",
        },
      ],
    },
    {
      term: "Eksamin / eksam",
      meaning: "Examination",
      pronunciation: "Eks-a-min",
      usage: "From this lesson's word list: school vocabulary.",
      example: [
        {
          speaker: "",
          text: "May eksamin kami buwas.",
          translation: "We have an examination tomorrow.",
        },
      ],
    },
    {
      term: "Proyekto",
      meaning: "Project",
      pronunciation: "Pro-yek-to",
      usage: "From this lesson's word list: school vocabulary.",
      example: [
        {
          speaker: "A",
          text: "Maupay nga aga. Ano an imo pakiana?",
          translation: "Good morning. What is your question?",
        },
        {
          speaker: "B",
          text: "Karuyag ko unta magpakiana mahitungod han amon proyekto.",
          translation: "I would like to ask about our project.",
        },
      ],
    },
    {
      term: "Buruhaton ha balay",
      meaning: "Homework",
      pronunciation: "Bu-ru-ha-ton ha ba-lay",
      usage: "From this lesson's word list: school vocabulary.",
    },
    {
      term: "Libro",
      meaning: "Book",
      pronunciation: "Li-bro",
      usage: "From this lesson's word list: school vocabulary.",
    },
    {
      term: "Kwaderno",
      meaning: "Notebook",
      pronunciation: "Kwa-der-no",
      usage: "From this lesson's word list: school vocabulary.",
    },
    {
      term: "Bolpen",
      meaning: "Pen",
      pronunciation: "Bol-pen",
      usage: "From this lesson's word list: school vocabulary.",
    },
    {
      term: "Pakiana",
      meaning: "Question",
      pronunciation: "Pa-ki-a-na",
      usage: "From this lesson's word list: school vocabulary.",
      example: [
        {
          speaker: "A",
          text: "Maupay nga aga, Maestra.",
          translation: "Good morning, Teacher.",
        },
        {
          speaker: "B",
          text: "Maupay nga aga. Ano an imo pakiana?",
          translation: "Good morning. What is your question?",
        },
      ],
    },
    {
      term: "Baton",
      meaning: "Answer",
      pronunciation: "Ba-ton",
      usage: "From this lesson's word list: school vocabulary.",
    },
    {
      term: "Grado",
      meaning: "Grade",
      pronunciation: "Gra-do",
      usage: "From this lesson's word list: school vocabulary.",
    },
    {
      term: "Iskedyul",
      meaning: "Schedule",
      pronunciation: "Is-ke-dyul",
      usage: "From this lesson's word list: school vocabulary.",
    },
    {
      term: "Asignatura",
      meaning: "Subject",
      pronunciation: "A-sig-na-tu-ra",
      usage: "From this lesson's word list: school vocabulary.",
    },
    {
      term: "Lugar han trabaho",
      meaning: "Workplace",
      pronunciation: "Lu-gar han tra-ba-ho",
      usage: "From this lesson's word list: workplace vocabulary.",
    },
    {
      term: "Opisina",
      meaning: "Office",
      pronunciation: "O-pi-si-na",
      usage: "From this lesson's word list: workplace vocabulary.",
    },
    {
      term: "Empleyado",
      meaning: "Employee",
      pronunciation: "Em-ple-ya-do",
      usage: "From this lesson's word list: workplace vocabulary.",
    },
    {
      term: "Agaron / amo",
      meaning: "Employer",
      pronunciation: "A-ga-ron / A-mo",
      usage: "From this lesson's word list: workplace vocabulary.",
    },
    {
      term: "Superbisor",
      meaning: "Supervisor",
      pronunciation: "Su-per-bi-sor",
      usage: "From this lesson's word list: workplace vocabulary.",
    },
    {
      term: "Manedyer",
      meaning: "Manager",
      pronunciation: "Ma-ne-dyer",
      usage: "From this lesson's word list: workplace vocabulary.",
    },
    {
      term: "Kaupod ha trabaho",
      meaning: "Colleague",
      pronunciation: "Ka-u-pod ha tra-ba-ho",
      usage: "From this lesson's word list: workplace vocabulary.",
    },
    {
      term: "Kustomer / kliyente",
      meaning: "Customer",
      pronunciation: "Kus-to-mer / Kli-yen-te",
      usage: "From this lesson's word list: workplace vocabulary.",
    },
    {
      term: "Mitin",
      meaning: "Meeting",
      pronunciation: "Mi-tin",
      usage: "From this lesson's word list: workplace vocabulary.",
      example: [
        {
          speaker: "A",
          text: "Oo, natapos ko na an report.",
          translation: "Yes, I have finished the report.",
        },
        {
          speaker: "B",
          text: "Mahimo mo ba ini ipakita ha aton mitin?",
          translation: "Can you present it at our meeting?",
        },
      ],
    },
    {
      term: "Reporte",
      meaning: "Report",
      pronunciation: "Re-por-te",
      usage: "From this lesson's word list: workplace vocabulary.",
    },
    {
      term: "Buruhaton",
      meaning: "Task",
      pronunciation: "Bu-ru-ha-ton",
      usage: "From this lesson's word list: workplace vocabulary.",
      example: [
        {
          speaker: "",
          text: "Kinahanglan ko hin bulig hini nga buruhaton.",
          translation: "I need help with this task.",
        },
      ],
    },
    {
      term: "Responsibilidad",
      meaning: "Responsibility",
      pronunciation: "Res-pon-si-bi-li-dad",
      usage: "From this lesson's word list: workplace vocabulary.",
    },
    {
      term: "Takna han pagtapos",
      meaning: "Deadline",
      pronunciation: "Tak-na han pag-ta-pos",
      usage: "From this lesson's word list: workplace vocabulary.",
    },
    {
      term: "Suweldo",
      meaning: "Salary",
      pronunciation: "Su-wel-do",
      usage: "From this lesson's word list: workplace vocabulary.",
    },
    {
      term: "Pahuway",
      meaning: "Break",
      pronunciation: "Pa-hu-way",
      usage: "From this lesson's word list: workplace vocabulary.",
    },
    {
      term: "Presensya",
      meaning: "Attendance",
      pronunciation: "Pre-sen-sya",
      usage: "From this lesson's word list: workplace vocabulary.",
    },
    {
      term: "Aplikasyon",
      meaning: "Application",
      pronunciation: "A-pli-ka-syon",
      usage: "From this lesson's word list: workplace vocabulary.",
    },
    {
      term: "Eksperyensya",
      meaning: "Experience",
      pronunciation: "Eks-per-yen-sya",
      usage: "From this lesson's word list: workplace vocabulary.",
    },
    {
      term: "Magpakiana",
      meaning: "To ask",
      pronunciation: "Mag-pa-ki-a-na",
      usage: "From this lesson's word list: communication and action words.",
      example: [
        {
          speaker: "A",
          text: "Karuyag ko unta magpakiana mahitungod han amon proyekto.",
          translation: "I would like to ask about our project.",
        },
        {
          speaker: "B",
          text: "Sige. Ano man ito?",
          translation: "Certainly. What is it?",
        },
      ],
    },
    {
      term: "Bumaton",
      meaning: "To answer",
      pronunciation: "Bu-ma-ton",
      usage: "From this lesson's word list: communication and action words.",
    },
    {
      term: "Magsaysay",
      meaning: "To explain",
      pronunciation: "Mag-say-say",
      usage: "From this lesson's word list: communication and action words.",
      example: [
        {
          speaker: "A",
          text: "Mahimo mo ba ini ipakita ha aton mitin?",
          translation: "Can you present it at our meeting?",
        },
        {
          speaker: "B",
          text: "Oo, andam na ako magsaysay mahitungod hini.",
          translation: "Yes, I am ready to explain it.",
        },
      ],
    },
    {
      term: "Mamati",
      meaning: "To listen",
      pronunciation: "Ma-ma-ti",
      usage: "From this lesson's word list: communication and action words.",
    },
    {
      term: "Makaintindi / makasabot",
      meaning: "To understand",
      pronunciation: "Ma-ka-in-tin-di / Ma-ka-sa-bot",
      usage: "From this lesson's word list: communication and action words.",
    },
    {
      term: "Bumulig",
      meaning: "To help",
      pronunciation: "Bu-mu-lig",
      usage: "From this lesson's word list: communication and action words.",
    },
    {
      term: "Magpasa",
      meaning: "To submit",
      pronunciation: "Mag-pa-sa",
      usage: "From this lesson's word list: communication and action words.",
      example: [
        {
          speaker: "A",
          text: "Sige. Ano man ito?",
          translation: "Certainly. What is it?",
        },
        {
          speaker: "B",
          text: "Kinahanglan ba namon magpasa hin report upod han proyekto?",
          translation: "Do we need to submit a report together with the project?",
        },
      ],
    },
    {
      term: "Tapuson",
      meaning: "To finish",
      pronunciation: "Ta-pu-son",
      usage: "From this lesson's word list: communication and action words.",
    },
    {
      term: "Mag-andam",
      meaning: "To prepare",
      pronunciation: "Mag-an-dam",
      usage: "From this lesson's word list: communication and action words.",
      example: [
        {
          speaker: "",
          text: "Kinahanglan ba namon mag-andam hin report?",
          translation: "Do we need to prepare a report?",
        },
      ],
    },
    {
      term: "Tumambong",
      meaning: "To attend",
      pronunciation: "Tu-mam-bong",
      usage: "From this lesson's word list: communication and action words.",
    },
    {
      term: "Maghisgot",
      meaning: "To discuss",
      pronunciation: "Mag-his-got",
      usage: "From this lesson's word list: communication and action words.",
    },
    {
      term: "Magtrabaho",
      meaning: "To work",
      pronunciation: "Mag-tra-ba-ho",
      usage: "From this lesson's word list: communication and action words.",
    },
    {
      term: "Mag-adal",
      meaning: "To study",
      pronunciation: "Mag-a-dal",
      usage: "From this lesson's word list: communication and action words.",
    },
    {
      term: "Magtutdo",
      meaning: "To teach",
      pronunciation: "Mag-tut-do",
      usage: "From this lesson's word list: communication and action words.",
    },
    {
      term: "Magpraktis",
      meaning: "To practice",
      pronunciation: "Mag-prak-tis",
      usage: "From this lesson's word list: communication and action words.",
    },
  ],
  greetings: [
    {
      term: "Magpakiana",
      meaning: "To ask",
      pronunciation: "Mag-pa-ki-a-na",
      usage: "From this lesson's word list: communication and action words.",
      example: [
        {
          speaker: "A",
          text: "Karuyag ko unta magpakiana mahitungod han amon proyekto.",
          translation: "I would like to ask about our project.",
        },
        {
          speaker: "B",
          text: "Sige. Ano man ito?",
          translation: "Certainly. What is it?",
        },
      ],
    },
    {
      term: "Bumaton",
      meaning: "To answer",
      pronunciation: "Bu-ma-ton",
      usage: "From this lesson's word list: communication and action words.",
    },
    {
      term: "Magsaysay",
      meaning: "To explain",
      pronunciation: "Mag-say-say",
      usage: "From this lesson's word list: communication and action words.",
      example: [
        {
          speaker: "A",
          text: "Mahimo mo ba ini ipakita ha aton mitin?",
          translation: "Can you present it at our meeting?",
        },
        {
          speaker: "B",
          text: "Oo, andam na ako magsaysay mahitungod hini.",
          translation: "Yes, I am ready to explain it.",
        },
      ],
    },
    {
      term: "Mamati",
      meaning: "To listen",
      pronunciation: "Ma-ma-ti",
      usage: "From this lesson's word list: communication and action words.",
    },
    {
      term: "Makaintindi / makasabot",
      meaning: "To understand",
      pronunciation: "Ma-ka-in-tin-di / Ma-ka-sa-bot",
      usage: "From this lesson's word list: communication and action words.",
    },
    {
      term: "Bumulig",
      meaning: "To help",
      pronunciation: "Bu-mu-lig",
      usage: "From this lesson's word list: communication and action words.",
    },
    {
      term: "Magpasa",
      meaning: "To submit",
      pronunciation: "Mag-pa-sa",
      usage: "From this lesson's word list: communication and action words.",
      example: [
        {
          speaker: "A",
          text: "Sige. Ano man ito?",
          translation: "Certainly. What is it?",
        },
        {
          speaker: "B",
          text: "Kinahanglan ba namon magpasa hin report upod han proyekto?",
          translation: "Do we need to submit a report together with the project?",
        },
      ],
    },
    {
      term: "Tapuson",
      meaning: "To finish",
      pronunciation: "Ta-pu-son",
      usage: "From this lesson's word list: communication and action words.",
    },
    {
      term: "Mag-andam",
      meaning: "To prepare",
      pronunciation: "Mag-an-dam",
      usage: "From this lesson's word list: communication and action words.",
      example: [
        {
          speaker: "",
          text: "Kinahanglan ba namon mag-andam hin report?",
          translation: "Do we need to prepare a report?",
        },
      ],
    },
    {
      term: "Tumambong",
      meaning: "To attend",
      pronunciation: "Tu-mam-bong",
      usage: "From this lesson's word list: communication and action words.",
    },
    {
      term: "Maghisgot",
      meaning: "To discuss",
      pronunciation: "Mag-his-got",
      usage: "From this lesson's word list: communication and action words.",
    },
    {
      term: "Magtrabaho",
      meaning: "To work",
      pronunciation: "Mag-tra-ba-ho",
      usage: "From this lesson's word list: communication and action words.",
    },
    {
      term: "Mag-adal",
      meaning: "To study",
      pronunciation: "Mag-a-dal",
      usage: "From this lesson's word list: communication and action words.",
    },
    {
      term: "Magtutdo",
      meaning: "To teach",
      pronunciation: "Mag-tut-do",
      usage: "From this lesson's word list: communication and action words.",
    },
    {
      term: "Magpraktis",
      meaning: "To practice",
      pronunciation: "Mag-prak-tis",
      usage: "From this lesson's word list: communication and action words.",
    },
  ],
  patterns: [
    {
      label: "Pattern 1: Saying You Finished",
      pattern: "Natapos ko na an akon + Work.",
      examples: [
        "Natapos ko na an akon trabaho.",
        "Natapos ko na an akon buruhaton.",
      ],
    },
    {
      label: "Pattern 2: Saying You Are Still Working",
      pattern: "Gintatrabaho ko pa an + Work.",
      examples: [
        "Gintatrabaho ko pa an report.",
        "Gintatrabaho ko pa an proyekto.",
      ],
    },
    {
      label: "Pattern 3: Thanking Someone",
      pattern: "Salamat ha imo + Thing.",
      examples: [
        "Salamat ha imo bulig.",
        "Salamat ha imo panahon.",
      ],
    },
  ],
  sentences: [
    {
      text: "Pwede mo ba ako buligan?",
      meaning: "Can you help me?",
    },
    {
      text: "Kinahanglan ko hin bulig hini nga buruhaton.",
      meaning: "I need help with this task.",
    },
    {
      text: "Mahimo mo ba ini igsaysay ha akon?",
      meaning: "Can you explain this to me?",
    },
    {
      text: "Diri ko nasasabtan an mga instruksyon.",
      meaning: "I do not understand the instructions.",
    },
    {
      text: "Mahimo mo ba utrahon ito?",
      meaning: "Can you repeat that?",
    },
    {
      text: "Alayon, hinay-hinay la pagyakan.",
      meaning: "Please speak slowly.",
    },
    {
      text: "Ano an aton asaynment?",
      meaning: "What is our assignment?",
    },
    {
      text: "San-o an deadline?",
      meaning: "When is the deadline?",
    },
    {
      text: "Natapos mo na ba an proyekto?",
      meaning: "Have you finished the project?",
    },
    {
      text: "Gintatrabaho ko pa an akon asaynment.",
      meaning: "I am still working on my assignment.",
    },
    {
      text: "Ipasa ko ito buwas.",
      meaning: "I will submit it tomorrow.",
    },
    {
      text: "May eksamin kami buwas.",
      meaning: "We have an examination tomorrow.",
    },
    {
      text: "Ano an akon buruhaton yana nga adlaw?",
      meaning: "What is my task today?",
    },
    {
      text: "Natapos ko na an akon trabaho.",
      meaning: "I have finished my work.",
    },
    {
      text: "Gintatrabaho ko pa an report.",
      meaning: "I am still working on the report.",
    },
    {
      text: "San-o magtitikang an mitin?",
      meaning: "When will the meeting start?",
    },
    {
      text: "Kinahanglan ko pa hin dugang nga panahon.",
      meaning: "I need more time.",
    },
    {
      text: "Tatapuson ko ito yana nga adlaw.",
      meaning: "I will finish it today.",
    },
    {
      text: "Salamat ha imo bulig.",
      meaning: "Thank you for your assistance.",
    },
    {
      text: "Maupay nga aga, Maestra/Maestro.",
      meaning: "Good morning, Teacher.",
    },
    {
      text: "Pasayloa ako.",
      meaning: "Excuse me.",
    },
    {
      text: "Pwede ba ako magpakiana?",
      meaning: "May I ask a question?",
    },
    {
      text: "Alayon, hulat anay hin madaliay.",
      meaning: "Please wait for a moment.",
    },
    {
      text: "Salamat ha imo panahon.",
      meaning: "Thank you for your time.",
    },
    {
      text: "Mapasalamaton ako ha imo bulig.",
      meaning: "I appreciate your help.",
    },
    {
      text: "Pasayloa ako tungod han paglangan.",
      meaning: "I apologize for the delay.",
    },
    {
      text: "Susumaton ko ito ha akon mga nota.",
      meaning: "I will take note of that.",
    },
    {
      text: "Ano an akon buruhaton yana?",
      meaning: "What is my task today?",
    },
    {
      text: "Hin-o an magdudumara han mitin?",
      meaning: "Who will lead the meeting?",
    },
    {
      text: "San-o natatapos an proyekto?",
      meaning: "When will the project be finished?",
    },
    {
      text: "Hain ko ipapasa an akon asaynment?",
      meaning: "Where should I submit my assignment?",
    },
    {
      text: "Kinahanglan ba namon mag-andam hin report?",
      meaning: "Do we need to prepare a report?",
    },
    {
      text: "Natapos ko na an akon buruhaton.",
      meaning: "I have finished my task.",
    },
    {
      text: "Gintatrabaho ko pa an proyekto.",
      meaning: "I am still working on the project.",
    },
    {
      text: "Waray ko pa mahuman an report.",
      meaning: "I have not finished the report yet.",
    },
    {
      text: "Kinahanglan ko pa hin panahon.",
      meaning: "I still need time.",
    },
    {
      text: "Andam na an mga dokumento.",
      meaning: "The documents are ready.",
    },
    {
      text: "Ipapasa ko ini buwas.",
      meaning: "I will submit this tomorrow.",
    },
  ],
  conversations: [
    {
      title: "Conversation A: Asking a Teacher About an Assignment",
      lines: [
        {
          speaker: "Student",
          text: "Maupay nga aga, Maestra.",
          translation: "Good morning, Teacher.",
        },
        {
          speaker: "Teacher",
          text: "Maupay nga aga. Ano an imo pakiana?",
          translation: "Good morning. What is your question?",
        },
        {
          speaker: "Student",
          text: "Karuyag ko unta magpakiana mahitungod han amon proyekto.",
          translation: "I would like to ask about our project.",
        },
        {
          speaker: "Teacher",
          text: "Sige. Ano man ito?",
          translation: "Certainly. What is it?",
        },
        {
          speaker: "Student",
          text: "Kinahanglan ba namon magpasa hin report upod han proyekto?",
          translation: "Do we need to submit a report together with the project?",
        },
        {
          speaker: "Teacher",
          text: "Oo, kinahanglan niyo magpasa hin report.",
          translation: "Yes, you need to submit a report.",
        },
        {
          speaker: "Student",
          text: "Salamat ha pagpatin-aw, Maestra.",
          translation: "Thank you for clarifying, Teacher.",
        },
      ],
      situation: "Student and Teacher: Asking a Teacher About an Assignment.",
    },
    {
      title: "Conversation B: Discussing a Group Project",
      lines: [
        {
          speaker: "Ana",
          text: "Natapos mo na ba an imo bahin han proyekto?",
          translation: "Have you finished your part of the project?",
        },
        {
          speaker: "Ben",
          text: "Waray ko pa mahuman. Gintatrabaho ko pa an report.",
          translation: "I have not finished yet. I am still working on the report.",
        },
        {
          speaker: "Ana",
          text: "San-o mo ini matatapos?",
          translation: "When will you finish it?",
        },
        {
          speaker: "Ben",
          text: "Susubaron ko nga matapos yana nga gab-i.",
          translation: "I will try to finish it tonight.",
        },
        {
          speaker: "Ana",
          text: "Sige. Kinahanglan naton ini ipasa buwas.",
          translation: "All right. We need to submit it tomorrow.",
        },
        {
          speaker: "Ben",
          text: "Nasasabtan ko. Ipapasa ko dayon kon matapos na.",
          translation: "I understand. I will submit it as soon as I finish.",
        },
      ],
      situation: "Ana and Ben: Discussing a Group Project.",
    },
    {
      title: "Conversation C: Workplace Meeting",
      lines: [
        {
          speaker: "Supervisor",
          text: "Maupay nga aga ha iyo ngatanan.",
          translation: "Good morning, everyone.",
        },
        {
          speaker: "Employee",
          text: "Maupay nga aga.",
          translation: "Good morning.",
        },
        {
          speaker: "Supervisor",
          text: "Andam na ba an report para hini nga semana?",
          translation: "Is the report for this week ready?",
        },
        {
          speaker: "Employee",
          text: "Oo, natapos ko na an report.",
          translation: "Yes, I have finished the report.",
        },
        {
          speaker: "Supervisor",
          text: "Mahimo mo ba ini ipakita ha aton mitin?",
          translation: "Can you present it at our meeting?",
        },
        {
          speaker: "Employee",
          text: "Oo, andam na ako magsaysay mahitungod hini.",
          translation: "Yes, I am ready to explain it.",
        },
        {
          speaker: "Supervisor",
          text: "Salamat. Magtitikang na kita.",
          translation: "Thank you. We will begin now.",
        },
      ],
      situation: "Supervisor and Employee: Workplace Meeting.",
    },
    {
      title: "Conversation D: Asking a Colleague for Help",
      lines: [
        {
          speaker: "Carla",
          text: "Pwede ko ba ikaw pakianhan?",
          translation: "May I ask you something?",
        },
        {
          speaker: "Daniel",
          text: "Oo, ano ito?",
          translation: "Yes, what is it?",
        },
        {
          speaker: "Carla",
          text: "Diri ko nasasabtan an pipira nga bahin hini nga dokumento.",
          translation: "I do not understand some parts of this document.",
        },
        {
          speaker: "Daniel",
          text: "Ano nga bahin an kinahanglan mo hin bulig?",
          translation: "Which part do you need help with?",
        },
        {
          speaker: "Carla",
          text: "Ini nga instruksyon. Mahimo mo ba ini igsaysay?",
          translation: "This instruction. Can you explain it?",
        },
        {
          speaker: "Daniel",
          text: "Oo, aton ini paghisgotan.",
          translation: "Yes, let's discuss it.",
        },
        {
          speaker: "Carla",
          text: "Salamat gud ha imo bulig.",
          translation: "Thank you very much for your help.",
        },
      ],
      situation: "Carla and Daniel: Asking a Colleague for Help.",
    },
  ],
  savedLanguageNotes: [
    {
      title: "A. Formal and Informal Communication",
      body: [
        "The way people communicate depends on their relationship with the person they are speaking to and the situation.",
        "Informal communication is commonly used when talking with friends, classmates, and familiar colleagues.",
        "• Waray: Kumusta? Natapos mo na an proyekto?",
        "• English: How are you? Have you finished the project?",
        "More formal or respectful communication is appropriate when addressing teachers, supervisors, or people who are not personally familiar.",
        "• Waray: Maupay nga aga. Pwede ba ako magpakiana mahitungod han amon asaynment?",
        "• English: Good morning. May I ask a question about our assignment?",
        "Waray does not always require a completely different sentence structure for formal communication. Respect can also be communicated through greetings, word choice, tone, and the way a request is delivered.",
      ],
    },
    {
      title: "B. Asking Questions About Responsibilities",
      body: [
        "Learners should be able to ask questions about assigned tasks and responsibilities.",
      ],
      examples: [
        {
          text: "Ano an akon buruhaton yana?",
          meaning: "What is my task today?",
        },
        {
          text: "Hin-o an magdudumara han mitin?",
          meaning: "Who will lead the meeting?",
        },
        {
          text: "San-o natatapos an proyekto?",
          meaning: "When will the project be finished?",
        },
        {
          text: "Hain ko ipapasa an akon asaynment?",
          meaning: "Where should I submit my assignment?",
        },
        {
          text: "Kinahanglan ba namon mag-andam hin report?",
          meaning: "Do we need to prepare a report?",
        },
      ],
    },
    {
      title: "C. Giving Updates About Tasks",
      body: [
        "When communicating in school or at work, learners may need to report their progress.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Natapos ko na an akon buruhaton.",
            right: "I have finished my task.",
          },
          {
            left: "Gintatrabaho ko pa an proyekto.",
            right: "I am still working on the project.",
          },
          {
            left: "Waray ko pa mahuman an report.",
            right: "I have not finished the report yet.",
          },
          {
            left: "Kinahanglan ko pa hin panahon.",
            right: "I still need time.",
          },
          {
            left: "Andam na an mga dokumento.",
            right: "The documents are ready.",
          },
          {
            left: "Ipapasa ko ini buwas.",
            right: "I will submit this tomorrow.",
          },
        ],
      },
    },
    {
      title: "D. Making Requests Politely",
      body: [
        "Requests should be clear and respectful.",
        "Requesting help",
        "• Waray: Pwede mo ba ako buligan hini nga buruhaton?",
        "• English: Can you help me with this task?",
        "Requesting clarification",
        "• Waray: Mahimo mo ba igsaysay utro an instruksyon?",
        "• English: Can you explain the instruction again?",
        "Requesting additional time",
        "• Waray: Pwede ba ako mangaro hin dugang nga panahon?",
        "• English: May I ask for additional time?",
        "Requesting a document",
        "• Waray: Pwede ko ba makita an report?",
        "• English: May I see the report?",
      ],
    },
    {
      title: "C. Communication and Action Words",
      body: [
        "Note: Some vocabulary items are borrowed or adapted from Filipino, Spanish, or English. Their spelling and preferred everyday forms should be checked by a Western Samar language evaluator.",
      ],
    },
  ],
  inferredFields: [
    "situation",
    "usage",
    "example",
    "pattern",
    "arrange",
    "speaking phrase",
    "respelling",
    "target pitch and mood",
    "example situation",
    "pronunciation tip",
    "completion requirement",
  ],
};
