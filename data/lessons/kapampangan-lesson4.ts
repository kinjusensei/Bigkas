import {
  LessonExpressionGroup,
  StructuredLesson,
} from "../../types/structuredLesson";
import {
  arrange,
  choice,
  dialogue,
  fills,
  matchPairs,
  phrases,
  sentences,
  words,
} from "./lessonHelpers";

// Kapampangan Lesson 4 — copied from "Kapampangan_Lesson_4.docx", a
// translation of the Tagalog Lesson 4. Per the document, days and months
// follow the Kapampangan Wikibook; all other words and sentences are
// working translations. Nothing was corrected. Instructions, activities
// and the assessment keep the document's English.
//
// The document marks some phrases "(?)" — to be checked by a native
// Kapampangan speaker. The marks are left out of what learners see; the
// phrases are listed in kapampanganReviewItems below.

// Phrases the document marks "(?)", exactly as written (without the mark).
export const kapampanganReviewItems: string[] = [
  // II. Lesson Introduction
  "Ing oras ya ing mapilan a bageng pamagkomunikasyun king aldo-aldo. Gagamitan da ding tau ding aldo, bulan, petsa, at oras istung gagawa ya ning plano, makiyabe king iskedyul, mag-aral, o mikita.",
  // III. Vocabulary
  "Ding aldo ning linggu means days of the week.",
  "Linggu can mean week, and Dominggu means Sunday.",
  "Ding bulan ning banua means months of the year.",
  "Kalagitnaan ning bengi",
  "Kaybengi",
  "Kanyan",
  "Mamaya",
  "Mamaya ning abak",
  "Milabas a linggu",
  "Susunud a linggu",
  "Susunud a bulan",
  "Milabas a bulan",
  "Kaarawan",
  // V. Lesson Proper
  "Learners may also encounter direct numerical expressions such as alas-tres at atlung pulung minutu.",
  "Milabas a aldo",
  "Susunud a aldo",
];

// Not marked in the document, but worth checking too.
export const kapampanganLesson4Notes: string[] = [
  'Speaking: "Abala ku ngeni ning gatpanapun." has no English in the document; "I am busy this afternoon." is inferred from "Abala ku ngeni ning abak. – I am busy this morning."',
];

// III. Vocabulary
const expressionGroups: LessonExpressionGroup[] = [
  {
    title: "A. Days of the Week",
    intro: [
      "Aldo means day. Ding aldo ning linggu means days of the week.",
      "Linggu can mean week, and Dominggu means Sunday.",
    ],
    items: words([
      ["Lunes", "Monday", "LU-nes"],
      ["Martes", "Tuesday", "MAR-tes"],
      ["Miyerkules", "Wednesday", "mi-YER-ku-les"],
      ["Huebes", "Thursday", "hu-E-bes"],
      ["Biernes", "Friday", "bi-ER-nes"],
      ["Sabadu", "Saturday", "sa-BA-du"],
      ["Dominggu", "Sunday", "do-MING-gu"],
    ]),
  },
  {
    title: "B. Months of the Year",
    intro: [
      "Bulan means month. Ding bulan ning banua means months of the year. Banua means year.",
    ],
    items: words([
      ["Eneru", "January", "e-NE-ru"],
      ["Pebreru", "February", "pe-BRE-ru"],
      ["Marsu", "March", "MAR-su"],
      ["Abril", "April", "a-BRIL"],
      ["Mayu", "May", "MA-yu"],
      ["Huniu", "June", "HU-niu"],
      ["Huliu", "July", "HU-liu"],
      ["Agostu", "August", "a-GOS-tu"],
      ["Septiembri", "September", "sep-TIEM-bri"],
      ["Uktubri", "October", "uk-TU-bri"],
      ["Nobiembri", "November", "no-BIEM-bri"],
      ["Disiembri", "December", "di-SIEM-bri"],
    ]),
  },
  {
    title: "C. Time-Related Vocabulary",
    items: words([
      ["Oras", "Time / Hour", "O-ras"],
      ["Minutu", "Minute", "mi-NU-tu"],
      ["Segundu", "Second", "se-GUN-du"],
      ["Alas", "O'clock", "A-las"],
      ["Abak", "Morning", "a-BAK", require("../../assets/audio/kapampangan/Abak.m4a")],
      ["Ugtu", "Noon", "ug-TU"],
      ["Gatpanapun", "Afternoon", "gat-pa-NA-pun"],
      ["Bengi", "Evening / Night", "BE-ngi", require("../../assets/audio/kapampangan/Bengi.m4a")],
      ["Kalagitnaan ning bengi", "Midnight", "ka-la-git-NA-an ning BE-ngi"],
      ["Ngeni", "Now / Today", "NGE-ni"],
      ["Kaybengi", "Yesterday", "kay-BE-ngi"],
      ["Bukas", "Tomorrow", "bu-KAS"],
      ["Kanyan", "Earlier", "KAN-yan"],
      ["Mamaya", "Later", "ma-MA-ya"],
      [
        "Mamaya ning abak",
        "Later this morning (depending on context)",
        "ma-MA-ya ning a-BAK",
      ],
    ]),
  },
  {
    title: "D. Date-Related Vocabulary",
    items: words([
      ["Petsa", "Date"],
      ["Kalendaryu", "Calendar"],
      ["Ngeni a aldo", "Today"],
      ["Milabas a linggu", "Last week"],
      ["Susunud a linggu", "Next week"],
      ["Ngeni a bulan", "This month"],
      ["Susunud a bulan", "Next month"],
      ["Milabas a bulan", "Last month"],
      ["Kaarawan", "Birthday"],
      ["Bakasyun", "Vacation"],
      ["Iskedyul", "Schedule"],
    ]),
  },
];

// IV. Useful Phrases and Sentences
const situationGroups: LessonExpressionGroup[] = [
  {
    title: "A. Asking About the Day",
    items: words([
      ["Nanung aldo ya ngeni?", "What day is it today?"],
      ["Lunes ya ngeni.", "Today is Monday."],
      ["Nanung aldo ya bukas?", "What day is tomorrow?"],
      ["Martes ya bukas.", "Tomorrow is Tuesday."],
      ["Nanung aldo tamu magkikita?", "What day will we meet?"],
      ["Keng Sabadu tamu magkikita.", "We will meet on Saturday."],
    ]),
  },
  {
    title: "B. Asking About the Date",
    items: words([
      ["Nanung petsa ya ngeni?", "What is the date today?"],
      ["Ika-metung ning Nobiembri ya ngeni.", "Today is the first of November."],
      ["Kapilan ya ing kaarawan mu?", "When is your birthday?"],
      ["Keng Mayu ya ing kaarawan ku.", "My birthday is in May."],
      ["Nanung bulan na ngeni?", "What month is it now?"],
      ["Nobiembri na ngeni.", "It is November now."],
    ]),
  },
  {
    title: "C. Asking About the Time",
    items: words([
      ["Nanung oras na?", "What time is it?"],
      ["Alas-otsu na.", "It is eight o'clock."],
      ["Alas-dies na ning abak.", "It is ten in the morning."],
      ["Alas-dose na ning ugtu.", "It is twelve noon."],
      ["Nanung oras ya ing klase mu?", "What time is your class?"],
      [
        "Alas-siyete ning abak ya ing klase ku.",
        "My class is at seven in the morning.",
      ],
      ["Nanung oras tamu mialis?", "What time will we leave?"],
      ["Mialis tamu mamaya ning gatpanapun.", "We will leave this afternoon."],
    ]),
  },
  {
    title: "D. Talking About Schedules",
    items: words([
      ["Atin kung klase keng Lunes.", "I have class on Monday."],
      ["Alang pasok ku keng Dominggu.", "I have no classes or work on Sunday."],
      [
        "Atin kamung pagsusulit keng Biernes.",
        "We have an examination on Friday.",
      ],
      ["Magkikita tamu bukas.", "We will meet tomorrow."],
      ["Abala ku ngeni ning abak.", "I am busy this morning."],
      ["Atin kung gagawan mamaya.", "I have something to do later."],
    ]),
  },
];

export const kapampanganLesson4: StructuredLesson = {
  lessonId: "kapampangan_4",
  dialect: "kapampangan",
  dialectLabel: "Kapampangan",
  lessonNumber: 4,
  title: "Days, Months, and Time",
  level: "Beginner",
  unit: "Fundamentals",

  // II. Lesson Introduction
  intro: [
    "Ing oras ya ing mapilan a bageng pamagkomunikasyun king aldo-aldo. Gagamitan da ding tau ding aldo, bulan, petsa, at oras istung gagawa ya ning plano, makiyabe king iskedyul, mag-aral, o mikita.",
    "Keng Kapampangan, magamit ding mag-aral ding sumusunud a pamagsalita: Nanung aldo ya ngeni? – What day is it today? Nanung petsa ya ngeni? – What is the date today? Nanung oras na? – What time is it? Bukas na la. – Let's do it tomorrow instead. Keng Lunes tamu magkikita. – Let's meet on Monday.",
    "Keng leksyun a ini, magpraktis ding mag-aral a makilala at gamitan ding pamagsalita a ini king simple a pamagsalitaan.",
  ],

  // I. Learning Objectives
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify and pronounce the seven days of the week in Kapampangan.",
    "Recognize and use the twelve months of the year in Kapampangan.",
    "Ask and answer simple questions about the current day, date, and time.",
    "Understand common Kapampangan expressions related to schedules and daily routines.",
    "Construct simple sentences about when an activity takes place.",
  ],

  expressionsIntro:
    "Tap the speaker to hear each word. Read each syllable clearly.",
  expressionGroups,

  // V. Lesson Proper
  languageNotes: [
    {
      title: "A. Talking About the Days of the Week",
      body: [
        "To ask what day it is, use: Nanung aldo ya ngeni? To answer, use: [Day] ya ngeni.",
        "To talk about a future day, learners can use bukas (tomorrow). To mention the day when an activity will happen, use keng before the day.",
      ],
      examples: sentences([
        ["Lunes ya ngeni.", "Today is Monday."],
        ["Miyerkules ya ngeni.", "Today is Wednesday."],
        ["Sabadu ya ngeni.", "Today is Saturday."],
        ["Martes ya bukas.", "Tomorrow is Tuesday."],
        ["Dominggu ya bukas.", "Tomorrow is Sunday."],
        ["Keng Lunes ku papasok.", "I will go to school or work on Monday."],
        ["Keng Biernes ya ing pagsusulit mi.", "Our examination is on Friday."],
        ["Keng Dominggu kami bibisita.", "We will visit on Sunday."],
      ]),
    },
    {
      title: "B. Talking About the Months",
      body: [
        "To ask what month it is, use: Nanung bulan na ngeni?",
        "To mention an event happening in a particular month, use keng before the month.",
      ],
      examples: sentences([
        ["Eneru na ngeni.", "It is January now."],
        ["Huniu na ngeni.", "It is June now."],
        ["Disiembri na ngeni.", "It is December now."],
        ["Keng Mayu ya ing kaarawan ku.", "My birthday is in May."],
        ["Keng Agostu magumpisa ya ing klase.", "Classes will start in August."],
        ["Keng Disiembri ya ing bakasyun mi.", "Our vacation is in December."],
      ]),
    },
    {
      title: "C. Talking About Dates",
      body: [
        "In everyday Kapampangan, dates can be expressed using the month and a number: Eneru 5 – January 5, Marsu 12 – March 12, Huniu 25 – June 25, Disiembri 31 – December 31.",
        "The expression ika- can also be used for ordinal dates.",
      ],
      examples: sentences([
        ["Ika-metung ning Eneru", "January 1"],
        ["Ika-lima ning Marsu", "March 5"],
        ["Ika-adwampulu ning Huniu", "June 20"],
      ]),
      remember:
        "Everyday speakers commonly use both the month-and-number format and ordinal expressions.",
    },
    {
      title: "D. Telling the Time",
      body: [
        "Kapampangan commonly uses ala/alas (from Spanish) when telling the time.",
        "To specify the time of day, add: ning abak – in the morning, ning ugtu – at noon, ning gatpanapun – in the afternoon, ning bengi – at night.",
      ],
      table: {
        leftHeading: "Time",
        rightHeading: "Kapampangan",
        rows: [
          { left: "1:00", right: "Ala-una" },
          { left: "2:00", right: "Alas-dos" },
          { left: "3:00", right: "Alas-tres" },
          { left: "4:00", right: "Alas-kuatro" },
          { left: "5:00", right: "Alas-singku" },
          { left: "6:00", right: "Alas-sais" },
          { left: "7:00", right: "Alas-siyete" },
          { left: "8:00", right: "Alas-otsu" },
          { left: "9:00", right: "Alas-nuebe" },
          { left: "10:00", right: "Alas-dies" },
          { left: "11:00", right: "Alas-onse" },
          { left: "12:00", right: "Alas-dose" },
        ],
      },
      examples: sentences([
        ["Alas-siyete ning abak.", "Seven in the morning."],
        ["Alas-dos ning gatpanapun.", "Two in the afternoon."],
        ["Alas-otsu ning bengi.", "Eight in the evening."],
        ["Alas-tres y medya.", "3:30"],
        ["Alas-kuatro y kinse.", "4:15"],
        ["Alas-singku y kuarenta y singku.", "5:45"],
      ]),
      remember:
        "These expressions are commonly used in conversational Kapampangan. Learners may also encounter direct numerical expressions such as alas-tres at atlung pulung minutu.",
    },
    {
      title: "E. Talking About Past and Future Time",
      body: [
        "Some common expressions help learners discuss when something happened or will happen.",
      ],
      table: {
        leftHeading: "Kapampangan",
        rightHeading: "English",
        rows: [
          { left: "Kaybengi", right: "Yesterday" },
          { left: "Ngeni", right: "Today / Now" },
          { left: "Bukas", right: "Tomorrow" },
          { left: "Kanyan", right: "Earlier" },
          { left: "Mamaya", right: "Later" },
          { left: "Milabas a aldo", right: "The previous day" },
          { left: "Susunud a aldo", right: "The following day" },
        ],
      },
      examples: sentences([
        ["Nag-aral ku kaybengi.", "I studied yesterday."],
        ["Nag-aaral ku ngeni.", "I am studying now."],
        ["Mag-aaral ku bukas.", "I will study tomorrow."],
        ["Atin kung klase mamaya.", "I have class later."],
      ]),
    },
  ],

  situationsTitle: "Useful phrases and sentences",
  situationGroups,

  // VI. Guided Conversations
  conversations: [
    {
      situation: "Conversation 1: Asking About the Day",
      lines: dialogue([
        ["Person A", "Nanung aldo ya ngeni?", "What day is it today?"],
        ["Person B", "Miyerkules ya ngeni.", "Today is Wednesday."],
        ["Person A", "Nanung aldo ya bukas?", "What day is tomorrow?"],
        ["Person B", "Huebes ya bukas.", "Tomorrow is Thursday."],
      ]),
    },
    {
      situation: "Conversation 2: Asking About a Birthday",
      lines: dialogue([
        ["Person A", "Kapilan ya ing kaarawan mu?", "When is your birthday?"],
        ["Person B", "Keng Uktubri 15.", "On October 15."],
        [
          "Person A",
          "Pilan pang aldo bayu ing kaarawan mu?",
          "How many days until your birthday?",
        ],
        ["Person B", "Limang aldo na la!", "Just five more days!"],
      ]),
    },
    {
      situation: "Conversation 3: Asking About the Time",
      lines: dialogue([
        ["Person A", "Nanung oras na?", "What time is it?"],
        [
          "Person B",
          "Alas-siyete na ning abak.",
          "It is already seven in the morning.",
        ],
        ["Person A", "Nanung oras ya ing klase mu?", "What time is your class?"],
        ["Person B", "Alas-otsu ya ing klase ku.", "My class is at eight."],
        ["Person A", "Kailangan mu nang mialis!", "You need to leave now!"],
      ]),
    },
    {
      situation: "Conversation 4: Making Plans",
      lines: dialogue([
        [
          "Person A",
          "Atin kang gagawan keng Sabadu?",
          "Do you have anything to do on Saturday?",
        ],
        ["Person B", "Alang atin. Obat?", "Nothing in particular. Why?"],
        [
          "Person A",
          "Buri mu bang munta king parke?",
          "Would you like to go to the park?",
        ],
        [
          "Person B",
          "Sige! Nanung oras tamu magkikita?",
          "Sure! What time will we meet?",
        ],
        ["Person A", "Alas-tres ning gatpanapun.", "At three in the afternoon."],
        [
          "Person B",
          "Ayos! Kikitan tamu keng Sabadu.",
          "Great! See you on Saturday.",
        ],
      ]),
    },
  ],

  // VII. Activity 1 (answer key: 1 C, 2 D, 3 A, 4 B, 5 E)
  matchActivity: {
    title: "Matching Type",
    instructions:
      "Match the Kapampangan words in Column A with their English meanings in Column B.",
    pairs: matchPairs(
      ["Lunes", "Miyerkules", "Biernes", "Dominggu", "Sabadu"],
      ["Friday", "Sunday", "Monday", "Wednesday", "Saturday"],
      "C D A B E",
    ),
  },

  // VII. Activity 2 (answer key: 1 B, 2 C, 3 C, 4 D, 5 B)
  choiceActivity: {
    title: "Multiple Choice",
    instructions: "Choose the correct answer.",
    questions: [
      choice(
        1,
        "What is the Kapampangan word for Thursday?",
        ["Martes", "Huebes", "Biernes", "Lunes"],
        "B",
      ),
      choice(
        2,
        "Which month means September?",
        ["Agostu", "Uktubri", "Septiembri", "Nobiembri"],
        "C",
      ),
      choice(
        3,
        'What does "Nanung oras na?" mean?',
        [
          "What day is it?",
          "What month is it?",
          "What time is it?",
          "What is your birthday?",
        ],
        "C",
      ),
      choice(
        4,
        "What is the Kapampangan word for tomorrow?",
        ["Kaybengi", "Ngeni", "Mamaya", "Bukas"],
        "D",
      ),
      choice(
        5,
        'What does "Alas-dose ning ugtu" mean?',
        [
          "Twelve midnight",
          "Twelve noon",
          "Twelve in the morning",
          "Twelve in the evening",
        ],
        "B",
      ),
    ],
  },

  // VII. Activity 3 (answers from the document's answer key)
  fillInBlanks: {
    title: "Fill in the Blanks",
    items: fills(
      "fill",
      [
        ["Ing aldo pegkatapus ning Lunes ya ing ___.", "Martes"],
        ["Ing bulan pegkatapus ning Abril ya ing ___.", "Mayu"],
        ["Ing aldo bayu ing Dominggu ya ing ___.", "Sabadu"],
        ["The Kapampangan word for yesterday is ____.", "Kaybengi"],
        ["The Kapampangan word for month is ___.", "Bulan"],
      ],
      {
        title: "Fill in the Blanks",
        instructions:
          "Complete each sentence using the correct Kapampangan word.",
      },
    ),
  },

  // VII. Activity 4
  arrangeWords: {
    title: "Arrange the Words",
    instructions: "Arrange the words to form a correct Kapampangan sentence.",
    items: [
      arrange("1", "ngeni / Lunes / ya", "Lunes ya ngeni."),
      arrange(
        "2",
        "kaarawan / Mayu / keng / ku / ing / ya",
        "Keng Mayu ya ing kaarawan ku.",
      ),
      arrange(
        "3",
        "klase / alas-otsu / ing / ku / ya",
        "Alas-otsu ya ing klase ku.",
      ),
      arrange("4", "bukas / magkikita / tamu", "Magkikita tamu bukas."),
      arrange("5", "ngeni / petsa / nanung / ya", "Nanung petsa ya ngeni?"),
    ],
  },

  // VIII. Lesson Assessment (answer key: 1 B, 2 C, 3 C, 4 C, 5 C, 6 B,
  // 7 D, 8 B, 9 B, 10 C)
  assessment: {
    instructions: "Choose the correct answer.",
    passPercent: 70,
    questions: [
      choice(
        1,
        "What is the Kapampangan word for Tuesday?",
        ["Lunes", "Martes", "Huebes", "Sabadu"],
        "B",
      ),
      choice(
        2,
        "What is the Kapampangan word for December?",
        ["Nobiembri", "Uktubri", "Disiembri", "Septiembri"],
        "C",
      ),
      choice(
        3,
        "What does Kaybengi mean?",
        ["Tomorrow", "Today", "Yesterday", "Later"],
        "C",
      ),
      choice(
        4,
        "How do you ask someone what time it is?",
        [
          "Nanung aldo ya ngeni?",
          "Nanung bulan na ngeni?",
          "Nanung oras na?",
          "Kapilan ya ing kaarawan mu?",
        ],
        "C",
      ),
      choice(
        5,
        "What does Alas-otsu ning bengi mean?",
        [
          "Eight in the morning",
          "Eight in the afternoon",
          "Eight in the evening",
          "Eight at noon",
        ],
        "C",
      ),
      choice(
        6,
        "Which day comes before Friday?",
        ["Miyerkules", "Huebes", "Sabadu", "Dominggu"],
        "B",
      ),
      choice(
        7,
        "What is the Kapampangan word for month?",
        ["Aldo", "Banua", "Oras", "Bulan"],
        "D",
      ),
      choice(
        8,
        'What does "Nanung petsa ya ngeni?" mean?',
        [
          "What day is it today?",
          "What is the date today?",
          "What time is it?",
          "What month is it?",
        ],
        "B",
      ),
      choice(
        9,
        'What does "Keng Mayu ya ing kaarawan ku" mean?',
        [
          "My birthday was in May.",
          "My birthday is in May.",
          "My birthday is tomorrow.",
          "My birthday is today.",
        ],
        "B",
      ),
      choice(
        10,
        "What does Alas-tres ning gatpanapun mean?",
        [
          "Three in the morning",
          "Three at noon",
          "Three in the afternoon",
          "Three at midnight",
        ],
        "C",
      ),
    ],
  },

  // VII. Activity 5: Listening and Pronunciation (Parts A–D). English
  // meanings are from the vocabulary and phrase tables; one is inferred
  // (see kapampanganLesson4Notes).
  speaking: {
    title: "Listening and Pronunciation",
    instructions:
      "Listen to the recorded words and phrases, then repeat them aloud.",
    phrases: phrases([
      ["Lunes", "Monday"],
      ["Martes", "Tuesday"],
      ["Miyerkules", "Wednesday"],
      ["Huebes", "Thursday"],
      ["Biernes", "Friday"],
      ["Sabadu", "Saturday"],
      ["Dominggu", "Sunday"],
      ["Eneru", "January"],
      ["Pebreru", "February"],
      ["Marsu", "March"],
      ["Abril", "April"],
      ["Mayu", "May"],
      ["Huniu", "June"],
      ["Huliu", "July"],
      ["Agostu", "August"],
      ["Septiembri", "September"],
      ["Uktubri", "October"],
      ["Nobiembri", "November"],
      ["Disiembri", "December"],
      ["Nanung aldo ya ngeni?", "What day is it today?"],
      ["Nanung petsa ya ngeni?", "What is the date today?"],
      ["Nanung oras na?", "What time is it?"],
      ["Kapilan ya ing kaarawan mu?", "When is your birthday?"],
      ["Nanung oras ya ing klase mu?", "What time is your class?"],
      ["Atin kung klase keng Lunes.", "I have class on Monday."],
      ["Keng Disiembri ya ing bakasyun mi.", "Our vacation is in December."],
      [
        "Alas-siyete ning abak ya ing klase ku.",
        "My class is at seven in the morning.",
      ],
      ["Magkikita tamu bukas.", "We will meet tomorrow."],
      ["Abala ku ngeni ning gatpanapun.", "I am busy this afternoon."],
    ]),
  },

  // V. Practice (no answer key in the document).
  extraActivities: [
    {
      title: "Practice: Translate into Kapampangan",
      instructions: "Translate the following into Kapampangan:",
      items: ["January 10", "April 15", "August 20", "December 25"],
      note: "The document gives no answers for this practice.",
    },
  ],

  // IX. Gamification Integration. Same mapping as the Tagalog Lesson 4:
  // days and months practice = the matching activity; time expression
  // practice = the multiple choice, fill-in and arrange exercises.
  rewards: {
    items: [
      { section: "vocabulary", label: "Vocabulary Review", xp: 10 },
      { section: "match", label: "Days and Months Practice", xp: 10 },
      { section: "sentences", label: "Time Expression Practice", xp: 10 },
      { section: "conversation", label: "Guided Conversation", xp: 10 },
      { section: "assessment", label: "Lesson Assessment", xp: 20 },
    ],
    total: 60,
    badge: {
      name: "Timekeeper Badge",
      description:
        "Unlock this badge after successfully completing the lesson assessment and obtaining at least 70%.",
    },
    completionRequirement:
      "Finish the vocabulary review, complete the practice activities, and obtain at least 70% in the lesson assessment. Learners who do not reach the passing score may review the lesson and retake the assessment.",
  },
};
