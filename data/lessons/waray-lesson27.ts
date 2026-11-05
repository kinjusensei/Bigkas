import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 27 — imported from "Lesson Plan.pdf", pages 1081–1100.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.

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
  expressionGroups: [
    {
      title: "A. School Vocabulary",
      items: [
        {
          term: "Eskwelahan",
          meaning: "School",
          pronunciation: "Es-kwe-la-han",
        },
        {
          term: "Klasehan",
          meaning: "Classroom",
          pronunciation: "Kla-se-han",
        },
        {
          term: "Maestra / Maestro",
          meaning: "Teacher",
          pronunciation: "Ma-es-tra / Ma-es-tro",
        },
        {
          term: "Estudyante",
          meaning: "Student",
          pronunciation: "Es-tu-dyan-te",
        },
        {
          term: "Klasmet",
          meaning: "Classmate",
          pronunciation: "Klas-met",
        },
        {
          term: "Leksyon",
          meaning: "Lesson",
          pronunciation: "Lek-syon",
        },
        {
          term: "Asaynment",
          meaning: "Assignment",
          pronunciation: "A-sayn-ment",
        },
        {
          term: "Eksamin / eksam",
          meaning: "Examination",
          pronunciation: "Eks-a-min",
        },
        {
          term: "Proyekto",
          meaning: "Project",
          pronunciation: "Pro-yek-to",
        },
        {
          term: "Buruhaton ha balay",
          meaning: "Homework",
          pronunciation: "Bu-ru-ha-ton ha ba-lay",
        },
        {
          term: "Libro",
          meaning: "Book",
          pronunciation: "Li-bro",
        },
        {
          term: "Kwaderno",
          meaning: "Notebook",
          pronunciation: "Kwa-der-no",
        },
        {
          term: "Bolpen",
          meaning: "Pen",
          pronunciation: "Bol-pen",
        },
        {
          term: "Pakiana",
          meaning: "Question",
          pronunciation: "Pa-ki-a-na",
        },
        {
          term: "Baton",
          meaning: "Answer",
          pronunciation: "Ba-ton",
        },
        {
          term: "Grado",
          meaning: "Grade",
          pronunciation: "Gra-do",
        },
        {
          term: "Iskedyul",
          meaning: "Schedule",
          pronunciation: "Is-ke-dyul",
        },
        {
          term: "Asignatura",
          meaning: "Subject",
          pronunciation: "A-sig-na-tu-ra",
        },
      ],
    },
    {
      title: "B. Workplace Vocabulary",
      items: [
        {
          term: "Lugar han trabaho",
          meaning: "Workplace",
          pronunciation: "Lu-gar han tra-ba-ho",
        },
        {
          term: "Opisina",
          meaning: "Office",
          pronunciation: "O-pi-si-na",
        },
        {
          term: "Empleyado",
          meaning: "Employee",
          pronunciation: "Em-ple-ya-do",
        },
        {
          term: "Agaron / amo",
          meaning: "Employer",
          pronunciation: "A-ga-ron / A-mo",
        },
        {
          term: "Superbisor",
          meaning: "Supervisor",
          pronunciation: "Su-per-bi-sor",
        },
        {
          term: "Manedyer",
          meaning: "Manager",
          pronunciation: "Ma-ne-dyer",
        },
        {
          term: "Kaupod ha trabaho",
          meaning: "Colleague",
          pronunciation: "Ka-u-pod ha tra-ba-ho",
        },
        {
          term: "Kustomer / kliyente",
          meaning: "Customer",
          pronunciation: "Kus-to-mer / Kli-yen-te",
        },
        {
          term: "Mitin",
          meaning: "Meeting",
          pronunciation: "Mi-tin",
        },
        {
          term: "Reporte",
          meaning: "Report",
          pronunciation: "Re-por-te",
        },
        {
          term: "Buruhaton",
          meaning: "Task",
          pronunciation: "Bu-ru-ha-ton",
        },
        {
          term: "Responsibilidad",
          meaning: "Responsibility",
          pronunciation: "Res-pon-si-bi-li-dad",
        },
        {
          term: "Takna han pagtapos",
          meaning: "Deadline",
          pronunciation: "Tak-na han pag-ta-pos",
        },
        {
          term: "Suweldo",
          meaning: "Salary",
          pronunciation: "Su-wel-do",
        },
        {
          term: "Pahuway",
          meaning: "Break",
          pronunciation: "Pa-hu-way",
        },
        {
          term: "Presensya",
          meaning: "Attendance",
          pronunciation: "Pre-sen-sya",
        },
        {
          term: "Aplikasyon",
          meaning: "Application",
          pronunciation: "A-pli-ka-syon",
        },
        {
          term: "Eksperyensya",
          meaning: "Experience",
          pronunciation: "Eks-per-yen-sya",
        },
      ],
    },
    {
      title: "C. Communication and Action Words",
      intro: [
        "Note: Some vocabulary items are borrowed or adapted from Filipino, Spanish, or English. Their spelling and preferred everyday forms should be checked by a Western Samar language evaluator.",
      ],
      items: [
        {
          term: "Magpakiana",
          meaning: "To ask",
          pronunciation: "Mag-pa-ki-a-na",
        },
        {
          term: "Bumaton",
          meaning: "To answer",
          pronunciation: "Bu-ma-ton",
        },
        {
          term: "Magsaysay",
          meaning: "To explain",
          pronunciation: "Mag-say-say",
        },
        {
          term: "Mamati",
          meaning: "To listen",
          pronunciation: "Ma-ma-ti",
        },
        {
          term: "Makaintindi / makasabot",
          meaning: "To understand",
          pronunciation: "Ma-ka-in-tin-di / Ma-ka-sa-bot",
        },
        {
          term: "Bumulig",
          meaning: "To help",
          pronunciation: "Bu-mu-lig",
        },
        {
          term: "Magpasa",
          meaning: "To submit",
          pronunciation: "Mag-pa-sa",
        },
        {
          term: "Tapuson",
          meaning: "To finish",
          pronunciation: "Ta-pu-son",
        },
        {
          term: "Mag-andam",
          meaning: "To prepare",
          pronunciation: "Mag-an-dam",
        },
        {
          term: "Tumambong",
          meaning: "To attend",
          pronunciation: "Tu-mam-bong",
        },
        {
          term: "Maghisgot",
          meaning: "To discuss",
          pronunciation: "Mag-his-got",
        },
        {
          term: "Magtrabaho",
          meaning: "To work",
          pronunciation: "Mag-tra-ba-ho",
        },
        {
          term: "Mag-adal",
          meaning: "To study",
          pronunciation: "Mag-a-dal",
        },
        {
          term: "Magtutdo",
          meaning: "To teach",
          pronunciation: "Mag-tut-do",
        },
        {
          term: "Magpraktis",
          meaning: "To practice",
          pronunciation: "Mag-prak-tis",
        },
      ],
    },
  ],
  languageNotes: [
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
  ],
  situationsTitle: "Useful Phrases and Expressions",
  situationGroups: [
    {
      title: "A. Asking for Assistance",
      items: [
        {
          term: "Pwede mo ba ako buligan?",
          meaning: "Can you help me?",
        },
        {
          term: "Kinahanglan ko hin bulig hini nga buruhaton.",
          meaning: "I need help with this task.",
        },
        {
          term: "Mahimo mo ba ini igsaysay ha akon?",
          meaning: "Can you explain this to me?",
        },
        {
          term: "Diri ko nasasabtan an mga instruksyon.",
          meaning: "I do not understand the instructions.",
        },
        {
          term: "Mahimo mo ba utrahon ito?",
          meaning: "Can you repeat that?",
        },
        {
          term: "Alayon, hinay-hinay la pagyakan.",
          meaning: "Please speak slowly.",
        },
      ],
    },
    {
      title: "B. Discussing School Responsibilities",
      items: [
        {
          term: "Ano an aton asaynment?",
          meaning: "What is our assignment?",
        },
        {
          term: "San-o an deadline?",
          meaning: "When is the deadline?",
        },
        {
          term: "Natapos mo na ba an proyekto?",
          meaning: "Have you finished the project?",
        },
        {
          term: "Gintatrabaho ko pa an akon asaynment.",
          meaning: "I am still working on my assignment.",
        },
        {
          term: "Ipasa ko ito buwas.",
          meaning: "I will submit it tomorrow.",
        },
        {
          term: "May eksamin kami buwas.",
          meaning: "We have an examination tomorrow.",
        },
      ],
    },
    {
      title: "C. Discussing Workplace Responsibilities",
      items: [
        {
          term: "Ano an akon buruhaton yana nga adlaw?",
          meaning: "What is my task today?",
        },
        {
          term: "Natapos ko na an akon trabaho.",
          meaning: "I have finished my work.",
        },
        {
          term: "Gintatrabaho ko pa an report.",
          meaning: "I am still working on the report.",
        },
        {
          term: "San-o magtitikang an mitin?",
          meaning: "When will the meeting start?",
        },
        {
          term: "Kinahanglan ko pa hin dugang nga panahon.",
          meaning: "I need more time.",
        },
        {
          term: "Tatapuson ko ito yana nga adlaw.",
          meaning: "I will finish it today.",
        },
        {
          term: "Salamat ha imo bulig.",
          meaning: "Thank you for your assistance.",
        },
      ],
    },
    {
      title: "D. Polite and Professional Expressions",
      items: [
        {
          term: "Maupay nga aga, Maestra/Maestro.",
          meaning: "Good morning, Teacher.",
        },
        {
          term: "Pasayloa ako.",
          meaning: "Excuse me.",
        },
        {
          term: "Pwede ba ako magpakiana?",
          meaning: "May I ask a question?",
        },
        {
          term: "Alayon, hulat anay hin madaliay.",
          meaning: "Please wait for a moment.",
        },
        {
          term: "Salamat ha imo panahon.",
          meaning: "Thank you for your time.",
        },
        {
          term: "Mapasalamaton ako ha imo bulig.",
          meaning: "I appreciate your help.",
        },
        {
          term: "Pasayloa ako tungod han paglangan.",
          meaning: "I apologize for the delay.",
        },
        {
          term: "Susumaton ko ito ha akon mga nota.",
          meaning: "I will take note of that.",
        },
      ],
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
    },
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
      title: "Vocabulary Matching",
      kind: "match",
      instructions: "Match the Waray vocabulary in Column A with its English meaning in Column B.",
      items: [
        "Eskwelahan",
        "Buruhaton",
        "Pakiana",
        "Asaynment",
        "Iskedyul",
      ],
      choices: [
        "Assignment",
        "School",
        "Task",
        "Question",
        "Schedule",
      ],
    },
    {
      title: "Choose the Appropriate Expression",
      kind: "choice",
      instructions: "Select the most appropriate Waray expression for each situation.",
      items: [
        "You want to ask your teacher about an assignment.\nA. Pwede ba ako magpakiana?\nB. Dako an balay.\nC. Gutom ako.",
        "You need assistance with a workplace task.\nA. Kinahanglan ko hin bulig hini nga buruhaton.\nB. Ano an imo ngaran?\nC. Lami an pagkaon.",
        "You want to tell your colleague that your report is finished.\nA. Natapos ko na an akon report.\nB. Waray ako maaram.\nC. Taga diin ka?",
        "You need more time to finish your assignment.\nA. Kinahanglan ko pa hin dugang nga panahon.\nB. Maupay nga gab-i.\nC. Hain an eskwelahan?",
        "You want someone to explain an instruction again.\nA. Mahimo mo ba utrahon an instruksyon?\nB. Pira na an imo edad?\nC. Ano an imo karuyag kaunon?",
      ],
    },
    {
      title: "Complete the Conversation",
      kind: "roleplay",
      instructions: "Fill in the blanks using the appropriate expressions from the word bank.\nWord Bank:",
      items: [
        "Salamat ha imo bulig.",
        "Pwede ba ako magpakiana?",
        "Natapos ko na an akon trabaho.",
        "Kinahanglan ko pa hin panahon.",
        "Mahimo mo ba ini igsaysay?",
        "Student: Maestra, __________________________ mahitungod han amon proyekto?",
        "Student: Diri ko nasasabtan ini nga instruksyon. __________________________",
        "Employee: Waray ko pa mahuman an report. __________________________",
        "Employee: __________________________ ngan andam na ako magpasa.",
        "Employee: __________________________",
      ],
    },
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
  rewards: {
    items: [
      {
        section: "vocabulary",
        label: "Vocabulary Review + Useful Expressions",
        xp: 20,
      },
      {
        section: "conversation",
        label: "Guided Conversations + Practice Activities",
        xp: 25,
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
};
