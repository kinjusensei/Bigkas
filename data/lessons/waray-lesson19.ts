import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 19 — imported from "Lesson Plan.pdf", pages 921–941.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.

export const warayLesson19: StructuredLesson = {
  lessonId: "waray_19",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 19,
  title: "Talking About Daily Activities",
  level: "Intermediate",
  estimatedDuration: "45–60 minutes",
  prerequisite: "Lesson 18 – Shopping and Buying",
  languageVariety: "Daily routines, common activities, time expressions, frequency, and describing everyday schedules.",
  intro: [
    "Daily activities are part of everyday communication. People often talk about what they do in the morning, afternoon, and evening, as well as their routines at home, school, or work.",
    "In this lesson, learners will develop the ability to describe their daily routines using common Waray words and expressions. They will practice talking about activities, asking others about their schedules, and explaining how frequently they perform certain tasks.",
    "Think about your typical day. You wake up, prepare for school or work, eat meals, complete your responsibilities, and eventually rest.",
    "These activities can be described in Waray using common verbs and time expressions.",
    "For example:",
    "• Nabuhát ako hin aga. – I wake up early.",
    "• Nag-aadál ako. – I study.",
    "• Nagluluto hi Nanay. – Mother is cooking.",
    "• Nagtatrabaho hiya. – He/She is working.",
    "• Matuturog na ako. – I am going to sleep.",
    "In this lesson, you will learn how to describe these activities and use them in everyday conversations.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify common Waray vocabulary related to daily activities.",
    "Describe personal routines using simple Waray sentences.",
    "Use time expressions to explain when activities happen.",
    "Ask and answer questions about another person's daily schedule.",
    "Express how frequently they perform certain activities.",
    "Participate in conversations about everyday routines.",
  ],
  expressionGroups: [
    {
      title: "A. Common Daily Activities",
      items: [
        {
          term: "Mata",
          meaning: "Wake up",
          pronunciation: "ma-ta",
        },
        {
          term: "Bumuhát",
          meaning: "Get up",
          pronunciation: "bu-mu-hat",
        },
        {
          term: "Katurog",
          meaning: "Sleep",
          pronunciation: "ka-tu-rog",
        },
        {
          term: "Kumaon",
          meaning: "Eat",
          pronunciation: "ku-ma-on",
        },
        {
          term: "Uminom",
          meaning: "Drink",
          pronunciation: "u-mi-nom",
        },
        {
          term: "Magluto",
          meaning: "Cook",
          pronunciation: "mag-lu-to",
        },
        {
          term: "Mag-adal",
          meaning: "Study",
          pronunciation: "mag-a-dal",
        },
        {
          term: "Magbasa",
          meaning: "Read",
          pronunciation: "mag-ba-sa",
        },
        {
          term: "Magsurat",
          meaning: "Write",
          pronunciation: "mag-su-rat",
        },
        {
          term: "Magtrabaho",
          meaning: "Work",
          pronunciation: "mag-tra-ba-ho",
        },
        {
          term: "Maglimpyo",
          meaning: "Clean",
          pronunciation: "mag-lim-pyo",
        },
        {
          term: "Maglakat",
          meaning: "Walk",
          pronunciation: "mag-la-kat",
        },
        {
          term: "Mag-uyag",
          meaning: "Play",
          pronunciation: "mag-u-yag",
        },
        {
          term: "Pahuway",
          meaning: "Rest",
          pronunciation: "pa-hu-way",
        },
        {
          term: "Maligo",
          meaning: "Take a bath",
          pronunciation: "ma-li-go",
        },
        {
          term: "Maglaba",
          meaning: "Wash clothes",
          pronunciation: "mag-la-ba",
        },
        {
          term: "Manghugas hin pinggan",
          meaning: "Wash dishes",
          pronunciation: "mang-hu-gas hin ping-gan",
        },
        {
          term: "Umuli",
          meaning: "Go home",
          pronunciation: "u-mu-li",
        },
        {
          term: "Mag-ehersisyo",
          meaning: "Exercise",
          pronunciation: "mag-e-her-sis-yo",
        },
        {
          term: "Mag-ampo",
          meaning: "Pray",
          pronunciation: "mag-am-po",
        },
      ],
    },
    {
      title: "B. Time Expressions",
      items: [
        {
          term: "Aga",
          meaning: "Morning",
          pronunciation: "a-ga",
        },
        {
          term: "Kulop",
          meaning: "Afternoon",
          pronunciation: "ku-lop",
        },
        {
          term: "Gab-i",
          meaning: "Evening",
          pronunciation: "gab-i",
        },
        {
          term: "Gab-i",
          meaning: "Night",
          pronunciation: "gab-i",
        },
        {
          term: "Yana",
          meaning: "Today",
          pronunciation: "ya-na",
        },
        {
          term: "Buwas",
          meaning: "Tomorrow",
          pronunciation: "bu-was",
        },
        {
          term: "Kahapon",
          meaning: "Yesterday",
          pronunciation: "ka-ha-pon",
        },
        {
          term: "Sayo",
          meaning: "Early",
          pronunciation: "sa-yo",
        },
        {
          term: "Urhi",
          meaning: "Late",
          pronunciation: "ur-hi",
        },
        {
          term: "Kada adlaw",
          meaning: "Every day",
          pronunciation: "ka-da ad-law",
        },
        {
          term: "Kada aga",
          meaning: "Every morning",
          pronunciation: "ka-da a-ga",
        },
        {
          term: "Kada gab-i",
          meaning: "Every night",
          pronunciation: "ka-da gab-i",
        },
        {
          term: "Antes",
          meaning: "Before",
          pronunciation: "an-tes",
        },
        {
          term: "Katapos",
          meaning: "After",
          pronunciation: "ka-ta-pos",
        },
        {
          term: "Ha urhi",
          meaning: "Later",
          pronunciation: "ha ur-hi",
        },
        {
          term: "Yana",
          meaning: "Now",
          pronunciation: "ya-na",
        },
      ],
    },
    {
      title: "C. Frequency and Routine Words",
      items: [
        {
          term: "Pirme",
          meaning: "Always",
          pronunciation: "pir-me",
        },
        {
          term: "Kasagaran",
          meaning: "Usually",
          pronunciation: "ka-sa-ga-ran",
        },
        {
          term: "Agsob",
          meaning: "Often",
          pronunciation: "ag-sob",
        },
        {
          term: "Usahay",
          meaning: "Sometimes",
          pronunciation: "u-sa-hay",
        },
        {
          term: "Talagsa",
          meaning: "Rarely",
          pronunciation: "ta-lag-sa",
        },
        {
          term: "Diri gud",
          meaning: "Never",
          pronunciation: "di-ri gud",
        },
        {
          term: "Utro",
          meaning: "Again",
          pronunciation: "ut-ro",
        },
        {
          term: "Na",
          meaning: "Already",
          pronunciation: "na",
        },
        {
          term: "Waray pa",
          meaning: "Not yet",
          pronunciation: "wa-ray pa",
        },
        {
          term: "Kada",
          meaning: "Every",
          pronunciation: "ka-da",
        },
        {
          term: "Panalagsa",
          meaning: "Sometimes / Occasionally",
          pronunciation: "pa-na-lag-sa",
        },
      ],
    },
    {
      title: "D. Everyday Places and Objects",
      items: [
        {
          term: "Balay",
          meaning: "House / Home",
          pronunciation: "ba-lay",
        },
        {
          term: "Eskwelahan",
          meaning: "School",
          pronunciation: "es-kwe-la-han",
        },
        {
          term: "Trabaho",
          meaning: "Workplace",
          pronunciation: "tra-ba-ho",
        },
        {
          term: "Sulod-klase",
          meaning: "Classroom",
          pronunciation: "su-lod kla-se",
        },
        {
          term: "Kusina",
          meaning: "Kitchen",
          pronunciation: "ku-si-na",
        },
        {
          term: "Kwarto",
          meaning: "Bedroom",
          pronunciation: "kwar-to",
        },
        {
          term: "Banyo",
          meaning: "Bathroom",
          pronunciation: "ban-yo",
        },
        {
          term: "Libro",
          meaning: "Book",
          pronunciation: "lib-ro",
        },
        {
          term: "Kwaderno",
          meaning: "Notebook",
          pronunciation: "kwa-der-no",
        },
        {
          term: "Pagkaon",
          meaning: "Food",
          pronunciation: "pag-ka-on",
        },
        {
          term: "Tubig",
          meaning: "Water",
          pronunciation: "tu-big",
        },
        {
          term: "Bado / Baro",
          meaning: "Clothes",
          pronunciation: "ba-do / ba-ro",
        },
        {
          term: "Hiligdaan",
          meaning: "Bed",
          pronunciation: "hi-lig-da-an",
        },
        {
          term: "Selpon",
          meaning: "Phone",
          pronunciation: "sel-pon",
        },
        {
          term: "Bag",
          meaning: "Bag",
          pronunciation: "bag",
        },
      ],
    },
  ],
  languageNotes: [
    {
      title: "A. Describing Daily Activities",
      body: [
        "To describe daily activities, learners need to become familiar with common verbs and how they are used in sentences.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Nag-aadal ako.",
            right: "I am studying.",
          },
          {
            left: "Nagbabasa ako.",
            right: "I am reading.",
          },
          {
            left: "Nagsusurat ako.",
            right: "I am writing.",
          },
          {
            left: "Nagluluto hi Nanay.",
            right: "Mother is cooking.",
          },
          {
            left: "Nagtatrabaho hi Tatay.",
            right: "Father is working.",
          },
          {
            left: "Naglilimpyo hiya.",
            right: "He/She is cleaning.",
          },
        ],
      },
    },
    {
      title: "A. Describing Daily Activities",
      body: [
        "Notice that the verb form may change depending on the action and how it is being described. Learners should practice these expressions as complete phrases rather than assuming that every verb follows exactly the same pattern.",
      ],
    },
    {
      title: "B. Talking About Time",
      body: [
        "Time expressions help explain when an activity happens.",
      ],
      examples: [
        {
          text: "Ha aga",
          meaning: "In the morning",
        },
        {
          text: "Ha kulop",
          meaning: "In the afternoon",
        },
        {
          text: "Ha gab-i",
          meaning: "In the evening",
        },
        {
          text: "Yana nga adlaw",
          meaning: "Today",
        },
        {
          text: "Buwas",
          meaning: "Tomorrow",
        },
        {
          text: "Kahapon",
          meaning: "Yesterday",
        },
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Nag-aadal ako ha aga.",
            right: "I study in the morning.",
          },
          {
            left: "Napahuway ako ha kulop.",
            right: "I rest in the afternoon.",
          },
          {
            left: "Nagbabasa ako ha gab-i.",
            right: "I read in the evening.",
          },
          {
            left: "Magtatrabaho ako buwas.",
            right: "I will work tomorrow.",
          },
          {
            left: "Nagluto kami kahapon.",
            right: "We cooked yesterday.",
          },
        ],
      },
    },
    {
      title: "C. Describing How Often You Do Something",
      body: [
        "Frequency expressions explain how regularly an activity happens.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Pirme ako nagbabasa.",
            right: "I always read.",
          },
          {
            left: "Kasagaran nag-aadal hiya ha gab-i.",
            right: "He/She usually studies at night.",
          },
          {
            left: "Usahay nagdudula ako.",
            right: "I sometimes play.",
          },
          {
            left: "Talagsa la ako nagkikita hin salida.",
            right: "I rarely watch movies.",
          },
          {
            left: "Diri gud ako nag-aabyan.",
            right: "I never skip.",
          },
        ],
      },
    },
    {
      title: "C. Describing How Often You Do Something",
      body: [
        "The last example is included only as a tentative construction and should be replaced or corrected by a language evaluator before use.",
      ],
    },
    {
      title: "D. Asking About Daily Routines",
      body: [
        "You can ask another person about their everyday activities using simple questions.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Ano an imo ginbubuhat kada adlaw?",
            right: "What do you do every day?",
          },
          {
            left: "Ano an imo ginbubuhat ha aga?",
            right: "What do you do in the morning?",
          },
          {
            left: "San-o ka nabuhat?",
            right: "When do you wake up?",
          },
          {
            left: "Nag-aadal ka ba kada adlaw?",
            right: "Do you study every day?",
          },
          {
            left: "Ano an imo ginbubuhat ha gab-i?",
            right: "What do you do at night?",
          },
          {
            left: "Pira ka oras ka nag-aadal?",
            right: "How many hours do you study?",
          },
        ],
      },
    },
    {
      title: "E. Connecting Daily Activities",
      body: [
        "A daily routine often consists of several activities performed one after another.",
        "You can use ngan to connect activities or ideas.",
      ],
      examples: [
        {
          text: "Nag-aadal ako ngan nagbabasa hin libro.",
          meaning: "I study and read a book.",
        },
        {
          text: "Nagluluto hi Nanay ngan naghuhugas hi Tatay hin pinggan.",
          meaning: "Mother cooks and Father washes dishes.",
        },
        {
          text: "Nagtatrabaho hiya ngan nabulig ha pamilya.",
          meaning: "He/She works and helps the family.",
        },
      ],
    },
    {
      title: "E. Connecting Daily Activities",
      body: [
        "You can also use time expressions to organize activities in a routine.",
        "Ha aga, nag-aadal ako. Ha kulop, napahuway ako. Ha gab-i, nagbabasa ako hin libro.",
        "In the morning, I study. In the afternoon, I rest. In the evening, I read a book.",
      ],
    },
  ],
  situationsTitle: "USEFUL PHRASES AND SENTENCES",
  situationGroups: [
    {
      title: "USEFUL PHRASES AND SENTENCES",
      intro: [
        "The following expressions can help learners talk about their daily routines.",
        "Note: The sentences above are learning examples. Some verb forms and expressions may vary across Western Samar communities and should be checked by a native speaker.",
      ],
      items: [
        {
          term: "Ano an imo ginbubuhat kada adlaw?",
          meaning: "What do you do every day?",
        },
        {
          term: "San-o ka nabuhat?",
          meaning: "What time do you wake up?",
        },
        {
          term: "Nabuhat ako hin sayo.",
          meaning: "I wake up early.",
        },
        {
          term: "Nangungumaon ako hin pamahaw.",
          meaning: "I eat breakfast.",
        },
        {
          term: "Makanhi ako ha eskwelahan.",
          meaning: "I go to school.",
        },
        {
          term: "Nag-aadal ako kada adlaw.",
          meaning: "I study every day.",
        },
        {
          term: "Nagbabasa ako hin libro.",
          meaning: "I read a book.",
        },
        {
          term: "Nagsusurat ako ha akon kwaderno.",
          meaning: "I write in my notebook.",
        },
        {
          term: "Naglilimpyo ako han balay.",
          meaning: "I clean the house.",
        },
        {
          term: "Nagluluto ako hin pagkaon.",
          meaning: "I cook food.",
        },
        {
          term: "Makanhi ako ha trabaho.",
          meaning: "I go to work.",
        },
        {
          term: "Nag-ehersisyo ako ha aga.",
          meaning: "I exercise in the morning.",
        },
        {
          term: "Napahuway ako ha kulop.",
          meaning: "I rest in the afternoon.",
        },
        {
          term: "Natuturog ako ha gab-i.",
          meaning: "I sleep at night.",
        },
        {
          term: "Usahay nagkikita ako hin telebisyon.",
          meaning: "I sometimes watch television.",
        },
        {
          term: "Pirme ako nabulig ha akon pamilya.",
          meaning: "I always help my family.",
        },
        {
          term: "Waray ako panahon yana.",
          meaning: "I do not have time today.",
        },
        {
          term: "Sagipo ako yana.",
          meaning: "I am busy today.",
        },
      ],
    },
  ],
  conversations: [
    {
      title: "Conversation 1: Asking About a Friend's Routine",
      situation: "Two friends talk about their everyday activities.",
      lines: [
        {
          speaker: "Ana",
          text: "Kumusta an imo adlaw?",
          translation: "How is your day?",
        },
        {
          speaker: "Ben",
          text: "Maupay man. Ikaw?",
          translation: "It is good. How about you?",
        },
        {
          speaker: "Ana",
          text: "Maupay man. Ano an imo ginbubuhat kada aga?",
          translation: "Good as well. What do you do every morning?",
        },
        {
          speaker: "Ben",
          text: "Nabuhat ako hin sayo ngan nag-aandam para ha eskwelahan.",
          translation: "I wake up early and prepare for school.",
        },
        {
          speaker: "Ana",
          text: "Nag-aadál ka ba ha balay?",
          translation: "Do you study at home?",
        },
        {
          speaker: "Ben",
          text: "Oo. Nagbabasa ako hin mga libro.",
          translation: "Yes. I read books.",
        },
        {
          speaker: "Ana",
          text: "Maupay ito.",
          translation: "That is good.",
        },
        {
          speaker: "Ben",
          text: "Ikaw, ano an imo ginbubuhat?",
          translation: "What about you? What do you do?",
        },
        {
          speaker: "Ana",
          text: "Nabulig ako ha mga buruhaton ha balay.",
          translation: "I help with household chores.",
        },
      ],
    },
    {
      title: "Conversation 2: Talking About a Daily Schedule",
      situation: "A student explains her daily schedule to a classmate.",
      lines: [
        {
          speaker: "Maria",
          text: "Ano an imo ginbubuhat ha aga?",
          translation: "What do you do in the morning?",
        },
        {
          speaker: "Liza",
          text: "Nag-aandam ako para ha eskwelahan.",
          translation: "I prepare for school.",
        },
        {
          speaker: "Maria",
          text: "Ano an imo ginbubuhat katapos han klase?",
          translation: "What do you do after class?",
        },
        {
          speaker: "Liza",
          text: "Umuli ako ngan kumaon.",
          translation: "I go home and eat.",
        },
        {
          speaker: "Maria",
          text: "Nag-aadal ka pa ba ha gab-i?",
          translation: "Do you still study at night?",
        },
        {
          speaker: "Liza",
          text: "Oo, usahay nagbabasa ako han akon mga leksyon.",
          translation: "Yes, sometimes I read my lessons.",
        },
        {
          speaker: "Maria",
          text: "Ano man an imo ginbubuhat antes maturog?",
          translation: "What do you do before sleeping?",
        },
        {
          speaker: "Liza",
          text: "Nag-aandam ako han akon mga gamit para buwas.",
          translation: "I prepare my things for tomorrow.",
        },
      ],
    },
    {
      title: "Conversation 3: Comparing Daily Activities",
      situation: "Two classmates discuss how they spend their free time.",
      lines: [
        {
          speaker: "Carlo",
          text: "Ano an imo ginbubuhat kon waray ka klase?",
          translation: "What do you do when you have no classes?",
        },
        {
          speaker: "Mark",
          text: "Usahay nagbabasa ako hin libro.",
          translation: "Sometimes I read books.",
        },
        {
          speaker: "Carlo",
          text: "Nagdudula ka ba hin mga uyag?",
          translation: "Do you play games?",
        },
        {
          speaker: "Mark",
          text: "Oo, pero diri pirme.",
          translation: "Yes, but not always.",
        },
        {
          speaker: "Carlo",
          text: "Ako naman, nabulig ha balay ngan nag-eehersisyo.",
          translation: "As for me, I help at home and exercise.",
        },
        {
          speaker: "Mark",
          text: "Maupay ito para ha imo lawas.",
          translation: "That is good for your body.",
        },
        {
          speaker: "Carlo",
          text: "Ano an imo ginbubuhat ha gab-i?",
          translation: "What do you do at night?",
        },
        {
          speaker: "Mark",
          text: "Nag-aadal ako ngan katapos natuturog.",
          translation: "I study and then sleep.",
        },
      ],
    },
  ],
  assessment: {
    instructions: "Choose the correct answer for each question.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What does \"Pahuway\" mean?",
        options: [
          {
            key: "A",
            text: "To eat",
          },
          {
            key: "B",
            text: "To rest",
          },
          {
            key: "C",
            text: "To study",
          },
          {
            key: "D",
            text: "To walk",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "What is the Waray word for \"morning\"?",
        options: [
          {
            key: "A",
            text: "Gab-i",
          },
          {
            key: "B",
            text: "Kulop",
          },
          {
            key: "C",
            text: "Aga",
          },
          {
            key: "D",
            text: "Buwas",
          },
        ],
        answerKey: "C",
      },
      {
        id: 3,
        prompt: "Which word means \"sometimes\"?",
        options: [
          {
            key: "A",
            text: "Pirme",
          },
          {
            key: "B",
            text: "Usahay",
          },
          {
            key: "C",
            text: "Kada adlaw",
          },
          {
            key: "D",
            text: "Yana",
          },
        ],
        answerKey: "B",
      },
      {
        id: 4,
        prompt: "What does \"Nagbabasa ako\" mean?",
        options: [
          {
            key: "A",
            text: "I am writing.",
          },
          {
            key: "B",
            text: "I am cooking.",
          },
          {
            key: "C",
            text: "I am reading.",
          },
          {
            key: "D",
            text: "I am sleeping.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 5,
        prompt: "Which expression means \"every day\"?",
        options: [
          {
            key: "A",
            text: "Kada adlaw",
          },
          {
            key: "B",
            text: "Ha gab-i",
          },
          {
            key: "C",
            text: "Ha urhi",
          },
          {
            key: "D",
            text: "Kahapon",
          },
        ],
        answerKey: "A",
      },
      {
        id: 6,
        prompt: "What does \"Magtatrabaho ako buwas\" mean?",
        options: [
          {
            key: "A",
            text: "I worked yesterday.",
          },
          {
            key: "B",
            text: "I will work tomorrow.",
          },
          {
            key: "C",
            text: "I am studying today.",
          },
          {
            key: "D",
            text: "I am resting now.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 7,
        prompt: "Which expression asks \"What do you do every day?\"",
        options: [
          {
            key: "A",
            text: "Pira ini?",
          },
          {
            key: "B",
            text: "Ano an imo ginbubuhat kada adlaw?",
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
        answerKey: "B",
      },
      {
        id: 8,
        prompt: "What does \"Pirme\" mean?",
        options: [
          {
            key: "A",
            text: "Never",
          },
          {
            key: "B",
            text: "Rarely",
          },
          {
            key: "C",
            text: "Always",
          },
          {
            key: "D",
            text: "Tomorrow",
          },
        ],
        answerKey: "C",
      },
      {
        id: 9,
        prompt: "Which Waray word means \"to cook\"?",
        options: [
          {
            key: "A",
            text: "Magbasa",
          },
          {
            key: "B",
            text: "Magluto",
          },
          {
            key: "C",
            text: "Maglakat",
          },
          {
            key: "D",
            text: "Magsurat",
          },
        ],
        answerKey: "B",
      },
      {
        id: 10,
        prompt: "What is the English meaning of \"Nag-aadal ako ha gab-i\"?",
        options: [
          {
            key: "A",
            text: "I study in the morning.",
          },
          {
            key: "B",
            text: "I study at night.",
          },
          {
            key: "C",
            text: "I work in the afternoon.",
          },
          {
            key: "D",
            text: "I sleep at night.",
          },
        ],
        answerKey: "B",
      },
    ],
  },
  extraActivities: [
    {
      title: "Vocabulary Matching",
      kind: "match",
      instructions: "Match each Waray word with its correct English meaning.",
      items: [
        "No. | Waray | Choices",
        "1 | Mata | A. To cook",
        "2 | Magluto | B. To wake up",
        "3 | Pahuway | C. To study",
        "4 | Mag-adal | D. To rest",
        "5 | Maglakat | E. To walk",
      ],
    },
    {
      title: "Complete the Sentences",
      kind: "fill",
      instructions: "Choose the correct word from the word bank to complete each sentence.",
      items: [
        "Nag-aadal ako ha ______.",
        "Natuturog ako ha ______.",
        "______ ako nagbabasa hin libro, pero diri kada adlaw.",
        "______ ako nabulig ha akon pamilya.",
        "Magtatrabaho ako ______.",
      ],
      choices: [
        "aga",
        "gab-i",
        "usahay",
        "pirme",
        "buwas",
      ],
    },
    {
      title: "Translate into Waray",
      kind: "translate",
      instructions: "Translate the following sentences into Waray.",
      items: [
        "I study every day.",
        "I read a book at night.",
        "I help my family.",
        "I sometimes exercise in the morning.",
        "What do you do every day?",
      ],
    },
    {
      title: "Describe Your Daily Routine",
      kind: "open",
      instructions: "Write five to seven sentences describing your typical daily routine in Waray.\nYour description should include:",
      items: [
        "At least three daily activities.",
        "At least two time expressions.",
        "At least one frequency expression.",
        "At least one sentence connecting two activities.",
        "In the morning, I...",
        "Every day, I...",
        "Sometimes, I...",
        "In the afternoon, I...",
        "At night, I...",
      ],
      note: "Example Structure:",
    },
    {
      title: "Daily Routine Speaking Practice",
      kind: "other",
      instructions: "Record yourself describing your daily routine in Waray.\nYour recording should:",
      items: [
        "Introduce your typical day.",
        "Describe what you do in the morning.",
        "Explain your afternoon activities.",
        "Describe what you do at night.",
        "End with a statement about your daily routine.",
      ],
      note: "Focus on clear pronunciation and complete sentences.",
    },
  ],
  rewards: {
    items: [
      {
        section: "conversation",
        label: "Vocabulary Matching + Complete the Sentences + Guided Conversation + Practice Activities",
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
      name: "Daily Routine Master Badge",
    },
  },
  expectedOutcomes: [
    "Before proceeding to the next lesson, learners should be able to:",
    "Recognize common daily activity vocabulary.",
    "Describe their morning, afternoon, and evening routines.",
    "Use time expressions in sentences.",
    "Express how frequently they perform activities.",
    "Ask questions about another person's daily schedule.",
    "Participate in a conversation about everyday activities.",
    "Achieve at least 70% in the lesson assessment.",
  ],
};
