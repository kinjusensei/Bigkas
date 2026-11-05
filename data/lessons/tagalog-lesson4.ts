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

// Tagalog Lesson 4 — copied from "Tagalog 4.pdf". The PDF's tables lost
// their columns, so each Tagalog line was paired with the English and
// pronunciation lines in the same position (the counts match in every
// table). Corrected typos, listed in tagalogLesson4ReviewItems.

export const tagalogLesson4ReviewItems = [
  'English "Semptember" → "September" (months table).',
  'English "It is December no," → "It is December now." (Lesson Proper B).',
  'Activity 2 question 3: "Anong ora na?" → "Anong oras na?".',
  'Activity 5 Part B: "Diyembre" → "Disyembre" (as in the months table).',
  'Activity 5 Part D: "Sa disyembre" → "Sa Disyembre".',
  'Phrases B: "Anong buwan na ngayon." ends with a period in the document (kept as written; it is a question).',
  'Activity 4: the tiles "ay" (item 1) and "ng" (item 5) are not in the answer key\'s sentences, so they were left out.',
  'Speaking: "Abala ako ngayong hapon." has no English in the document; "I am busy this afternoon." is inferred from "Abala ako ngayong umaga."',
];

// III. Vocabulary
const expressionGroups: LessonExpressionGroup[] = [
  {
    title: "A. Days of the Week",
    intro: [
      "Araw means day. Mga araw ng linggo means days of the week.",
      "Linggo can mean Sunday or week, depending on the context.",
    ],
    items: words([
      ["Lunes", "Monday", "LOO-nes"],
      ["Martes", "Tuesday", "MAR-tes"],
      ["Miyerkules", "Wednesday", "myehr-KOO-less"],
      ["Huwebes", "Thursday", "hoo-WEH-bes"],
      ["Biyernes", "Friday", "bee-YEHR-nes"],
      ["Sabado", "Saturday", "sah-Bah-do"],
      ["Linggo", "Sunday", "LEENG-goh"],
    ]),
  },
  {
    title: "B. Months of the Year",
    intro: [
      "Buwan means month. Mga buwan ng taon means months of the year. Taon means year.",
    ],
    items: words([
      ["Enero", "January", "eh-NEH-roh"],
      ["Pebrero", "February", "pe-BREH-roh"],
      ["Marso", "March", "MAR-soh"],
      ["Abril", "April", "AH-bril"],
      ["Mayo", "May", "MAH-yoh"],
      ["Hunyo", "June", "HOON-yoh"],
      ["Hulyo", "July", "HOOL-yoh"],
      ["Agosto", "August", "ah-GOS-toh"],
      ["Setyembre", "September", "seht-YEHM-breh"],
      ["Oktubre", "October", "ok-TOO-breh"],
      ["Nobyembre", "November", "noh-BYEHM-breh"],
      ["Disyembre", "December", "dees-YEHM-breh"],
    ]),
  },
  {
    title: "C. Time-Related Vocabulary",
    items: words([
      ["Oras", "Time / Hour", "OH-ras"],
      ["Minuto", "Minute", "me-NOO-toh"],
      ["Segundo", "Second", "seh-GOON-doh"],
      ["Alas", "O'clock", "AH-las"],
      ["Umaga", "Morning", "oo-MAH-gah"],
      ["Tanghali", "Noon", "tahng-HAH-lee"],
      ["Hapon", "Afternoon", "HAH-pon"],
      ["Gabi", "Evening / Night", "GAH-bee"],
      ["Hatinggabi", "Midnight", "hah-ting-GAH-bee"],
      ["Ngayon", "Now / Today", "ngah-YON"],
      ["Kahapon", "Yesterday", "kah-HAH-pon"],
      ["Bukas", "Tomorrow", "boo-KAS"],
      ["Kanina", "Earlier", "kah-NEE-nah"],
      ["Mamaya", "Later", "mah-MAH-yah"],
      [
        "Mamayang umaga",
        "Tomorrow morning / Later this morning, depending on context",
        "mah-MAH-yang oo-MAH-gah",
      ],
    ]),
  },
  {
    title: "D. Date-Related Vocabulary",
    items: words([
      ["Petsa", "Date"],
      ["Kalendaryo", "Calendar"],
      ["Ngayong araw", "Today"],
      ["Noong nakaraang linggo", "Last week"],
      ["Sa susunod na linggo", "Next week"],
      ["Ngayong buwan", "This month"],
      ["Sa susunod na buwan", "Next month"],
      ["Noong nakaraang buwan", "Last month"],
      ["Kaarawan", "Birthday"],
      ["Bakasyon", "Vacation"],
      ["Iskedyul", "Schedule"],
    ]),
  },
];

// IV. Useful Phrases and Sentences
const situationGroups: LessonExpressionGroup[] = [
  {
    title: "A. Asking About the Day",
    items: words([
      ["Anong araw ngayon?", "What day is it today?"],
      ["Lunes ngayon.", "Today is Monday."],
      ["Anong araw bukas?", "What day is tomorrow?"],
      ["Martes bukas.", "Tomorrow is Tuesday."],
      ["Anong araw tayo magkikita?", "What day will we meet?"],
      ["Sa Sabado tayo magkikita.", "We will meet on Saturday."],
    ]),
  },
  {
    title: "B. Asking About the Date",
    items: words([
      ["Anong petsa ngayon?", "What is the date today?"],
      ["Ika-isa ng Nobyembre ngayon.", "Today is the first of November."],
      ["Kailan ang kaarawan mo?", "When is your birthday?"],
      ["Sa Mayo ang kaarawan ko.", "My birthday is in May."],
      ["Anong buwan na ngayon.", "What month is it now?"],
      ["Nobyembre na ngayon.", "It is November now."],
    ]),
  },
  {
    title: "C. Asking About the Time",
    items: words([
      ["Anong oras na?", "What time is it?"],
      ["Alas-otso na.", "It is eight o'clock."],
      ["Alas-diyes na ng umaga.", "It is ten in the morning."],
      ["Alas-dose na ng tanghali.", "It is twelve noon."],
      ["Anong oras ang klase mo?", "What time is your class?"],
      [
        "Alas-siyete ng umaga ang klase ko.",
        "My class is at seven in the morning.",
      ],
      ["Anong oras tayo aalis?", "What time will we leave?"],
      ["Aalis tayo mamayang hapon.", "We will leave this afternoon."],
    ]),
  },
  {
    title: "D. Talking About Schedules",
    items: words([
      ["May klase ako sa Lunes.", "I have class on Monday."],
      ["Wala akong pasok sa Linggo.", "I have no classes or work on Sunday."],
      ["May pagsusulit kami sa Biyernes.", "We have an examination on Friday."],
      ["Magkikita tayo bukas.", "We will meet tomorrow."],
      ["Abala ako ngayong umaga.", "I am busy this morning."],
      ["May gagawin ako mamaya.", "I have something to do later."],
    ]),
  },
];

export const tagalogLesson4: StructuredLesson = {
  lessonId: "tagalog_4",
  dialect: "tagalog",
  dialectLabel: "Tagalog",
  lessonNumber: 4,
  title: "Days, Months, and Time",
  level: "Beginner",
  unit: "Fundamentals",

  // II. Lesson Introduction
  intro: [
    "Time is an important part of everyday communication. People use days, months, dates, and hours when making plans, discussing schedules, attending school, or arranging meetings.",
    "In Tagalog, learners can use expressions such as: Anong araw ngayon? – What day is it today? Anong petsa ngayon? – What is the date today? Anong oras na? – What time is it? Bukas na lang. – Let's do it tomorrow instead. Sa Lunes tayo magkita. – Let's meet on Monday.",
    "In this lesson, learners will practice recognizing and using these expressions in simple conversations.",
  ],

  // I. Learning Objectives
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify and pronounce the seven days of the week in Tagalog.",
    "Recognize and use the twelve months of the year in Tagalog.",
    "Ask and answer simple questions about the current day, date, and time.",
    "Understand common Tagalog expressions related to schedules and daily routines.",
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
        "To ask what day it is, use: Anong araw ngayon? To answer, use: [Day] ngayon.",
        "To talk about a future day, learners can use bukas (tomorrow). To mention the day when an activity will happen, use sa before the day.",
      ],
      examples: sentences([
        ["Lunes ngayon.", "Today is Monday."],
        ["Miyerkules ngayon.", "Today is Wednesday."],
        ["Sabado ngayon.", "Today is Saturday."],
        ["Martes bukas.", "Tomorrow is Tuesday."],
        ["Linggo bukas.", "Tomorrow is Sunday."],
        ["Sa Lunes ako papasok.", "I will go to school or work on Monday."],
        ["Sa Biyernes ang pagsusulit namin.", "Our examination is on Friday."],
        ["Sa Linggo kami bibisita.", "We will visit on Sunday."],
      ]),
    },
    {
      title: "B. Talking About the Months",
      body: [
        "To ask what month it is, use: Anong buwan na ngayon?",
        "To mention an event happening in a particular month, use sa before the month.",
      ],
      examples: sentences([
        ["Enero na ngayon.", "It is January now."],
        ["Hunyo na ngayon.", "It is June now."],
        ["Disyembre na ngayon.", "It is December now."],
        ["Sa Mayo ang kaarawan ko.", "My birthday is in May."],
        ["Sa Agosto magsisimula ang klase.", "Classes will start in August."],
        ["Sa Disyembre ang aming bakasyon.", "Our vacation is in December."],
      ]),
    },
    {
      title: "C. Talking About Dates",
      body: [
        "In everyday Tagalog, dates can be expressed using numbers and the month: Enero 5 – January 5, Marso 12 – March 12, Hunyo 25 – June 25, Disyembre 31 – December 31.",
        "The expression ika- can also be used when expressing ordinal dates.",
      ],
      examples: sentences([
        ["Ika-isa ng Enero", "January 1"],
        ["Ika-lima ng Marso", "March 5"],
        ["Ika-dalawampu ng Hunyo", "June 20"],
      ]),
      remember:
        "Everyday speakers commonly use both number-and-month formats and ordinal expressions.",
    },
    {
      title: "D. Telling the Time",
      body: [
        "Tagalog commonly uses ala/s when telling the time.",
        "To specify the time of day, add: ng umaga – in the morning, ng tanghali – at noon, ng hapon – in the afternoon, ng gabi – at night.",
      ],
      table: {
        leftHeading: "Time",
        rightHeading: "Tagalog",
        rows: [
          { left: "1:00", right: "Ala-una" },
          { left: "2:00", right: "Alas-dos" },
          { left: "3:00", right: "Alas-tres" },
          { left: "4:00", right: "Alas-kuwatro" },
          { left: "5:00", right: "Alas-singko" },
          { left: "6:00", right: "Alas-sais" },
          { left: "7:00", right: "Alas-siyete" },
          { left: "8:00", right: "Alas-otso" },
          { left: "9:00", right: "Alas-nuwebe" },
          { left: "10:00", right: "Alas-diyes" },
          { left: "11:00", right: "Alas-onse" },
          { left: "12:00", right: "Alas-dose" },
        ],
      },
      examples: sentences([
        ["Alas-siyete ng umaga.", "Seven in the morning."],
        ["Alas-dos ng hapon.", "Two in the afternoon."],
        ["Alas-otso ng gabi.", "Eight in the evening."],
        ["Alas-tres y medya.", "3:30"],
        ["Alas-kuwatro y kinse.", "4:15"],
        ["Alas-singko y kuwarenta y singko.", "5:45"],
      ]),
      remember:
        "These expressions are commonly used in conversational Filipino. Learners may also encounter direct numerical expressions such as alas-tres at tatlumpung minuto.",
    },
    {
      title: "E. Talking About Past and Future Time",
      body: [
        "Some common expressions help learners discuss when something happened or will happen.",
      ],
      table: {
        leftHeading: "Tagalog",
        rightHeading: "English",
        rows: [
          { left: "Kahapon", right: "Yesterday" },
          { left: "Ngayon", right: "Today / Now" },
          { left: "Bukas", right: "Tomorrow" },
          { left: "Kanina", right: "Earlier" },
          { left: "Mamaya", right: "Later" },
          { left: "Noong nakaraang araw", right: "The previous day" },
          { left: "Sa susunod na araw", right: "The following day" },
        ],
      },
      examples: sentences([
        ["Nag-aral ako kahapon.", "I studied yesterday."],
        ["Nag-aaral ako ngayon.", "I am studying now."],
        ["Mag-aaral ako bukas.", "I will study tomorrow."],
        ["May klase ako mamaya.", "I have class later."],
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
        ["Person A", "Anong araw ngayon?", "What day is it today?"],
        ["Person B", "Miyerkules ngayon.", "Today is Wednesday."],
        ["Person A", "Anong araw bukas?", "What day is tomorrow?"],
        ["Person B", "Huwebes bukas.", "Tomorrow is Thursday."],
      ]),
    },
    {
      situation: "Conversation 2: Asking About a Birthday",
      lines: dialogue([
        ["Person A", "Kailan ang kaarawan mo?", "When is your birthday?"],
        ["Person B", "Sa Oktubre 15.", "On October 15."],
        [
          "Person A",
          "Ilang araw na lang bago ang kaarawan mo?",
          "How many days until your birthday?",
        ],
        ["Person B", "Limang araw na lang!", "Just five more days!"],
      ]),
    },
    {
      situation: "Conversation 3: Asking About the Time",
      lines: dialogue([
        ["Person A", "Anong oras na?", "What time is it?"],
        [
          "Person B",
          "Alas-siyete na ng umaga.",
          "It is already seven in the morning.",
        ],
        ["Person A", "Anong oras ang klase mo?", "What time is your class?"],
        ["Person B", "Alas-otso ang klase ko.", "My class is at eight."],
        ["Person A", "Kailangan mo nang umalis!", "You need to leave now!"],
      ]),
    },
    {
      situation: "Conversation 4: Making Plans",
      lines: dialogue([
        [
          "Person A",
          "May gagawin ka ba sa Sabado?",
          "Do you have anything to do on Saturday?",
        ],
        ["Person B", "Wala naman. Bakit?", "Nothing in particular. Why?"],
        [
          "Person A",
          "Gusto mo bang pumunta sa parke?",
          "Would you like to go to the park?",
        ],
        [
          "Person B",
          "Sige! Anong oras tayo magkikita?",
          "Sure! What time will we meet?",
        ],
        ["Person A", "Alas-tres ng hapon.", "At three in the afternoon."],
        ["Person B", "Ayos! Kita tayo sa Sabado.", "Great! See you on Saturday."],
      ]),
    },
  ],

  // VII. Activity 1 (answer key: 1 C, 2 D, 3 A, 4 B, 5 E)
  matchActivity: {
    title: "Matching Type",
    instructions:
      "Match the Tagalog words in Column A with their English meanings in Column B.",
    pairs: matchPairs(
      ["Lunes", "Miyerkules", "Biyernes", "Linggo", "Sabado"],
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
        "What is the Tagalog word for Thursday?",
        ["Martes", "Huwebes", "Biyernes", "Lunes"],
        "B",
      ),
      choice(
        2,
        "Which month means September?",
        ["Agosto", "Oktubre", "Setyembre", "Nobyembre"],
        "C",
      ),
      choice(
        3,
        "What does Anong oras na? mean?",
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
        "What is the Tagalog word for tomorrow?",
        ["Kahapon", "Ngayon", "Mamaya", "Bukas"],
        "D",
      ),
      choice(
        5,
        "What does Alas-dose ng tanghali mean?",
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
        ["Ang araw pagkatapos ng Lunes ay _______.", "Martes"],
        ["Ang buwan pagkatapos ng Abril ay _______.", "Mayo"],
        ["Ang araw bago ang Linggo ay _______.", "Sabado"],
        ["Ang Tagalog word for yesterday is ________.", "Kahapon"],
        ["Ang Tagalog word for month is _______.", "Buwan"],
      ],
      {
        title: "Fill in the Blanks",
        instructions: "Complete each sentence using the correct Tagalog word.",
      },
    ),
  },

  // VII. Activity 4 (see the review items for the left-out tiles)
  arrangeWords: {
    title: "Arrange the Words",
    instructions: "Arrange the words to form a correct Tagalog sentence.",
    items: [
      arrange("1", "ngayon / Lunes", "Lunes ngayon."),
      arrange("2", "kaarawan / Mayo / sa / ko / ang", "Sa Mayo ang kaarawan ko."),
      arrange("3", "klase / alas-otso / ang / ko", "Alas-otso ang klase ko."),
      arrange("4", "bukas / magkikita / tayo", "Magkikita tayo bukas."),
      arrange("5", "ngayon / petsa / anong", "Anong petsa ngayon?"),
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
        "What is the Tagalog word for Tuesday?",
        ["Lunes", "Martes", "Huwebes", "Sabado"],
        "B",
      ),
      choice(
        2,
        "What is the Tagalog word for December?",
        ["Nobyembre", "Oktubre", "Disyembre", "Setyembre"],
        "C",
      ),
      choice(
        3,
        "What does Kahapon mean?",
        ["Tomorrow", "Today", "Yesterday", "Later"],
        "C",
      ),
      choice(
        4,
        "How do you ask someone what time it is?",
        [
          "Anong araw ngayon?",
          "Anong buwan na ngayon?",
          "Anong oras na?",
          "Kailan ang kaarawan mo?",
        ],
        "C",
      ),
      choice(
        5,
        "What does Alas-otso ng gabi mean?",
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
        ["Miyerkules", "Huwebes", "Sabado", "Linggo"],
        "B",
      ),
      choice(
        7,
        "What is the Tagalog word for month?",
        ["Araw", "Taon", "Oras", "Buwan"],
        "D",
      ),
      choice(
        8,
        "What does Anong petsa ngayon? mean?",
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
        "What does Sa Mayo ang kaarawan ko mean?",
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
        "What does Alas-tres ng hapon mean?",
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
  // meanings are from the vocabulary and phrase tables.
  speaking: {
    title: "Listening and Pronunciation",
    instructions:
      "Listen to the recorded words and phrases, then repeat them aloud.",
    phrases: phrases([
      ["Lunes", "Monday"],
      ["Martes", "Tuesday"],
      ["Miyerkules", "Wednesday"],
      ["Huwebes", "Thursday"],
      ["Biyernes", "Friday"],
      ["Sabado", "Saturday"],
      ["Linggo", "Sunday"],
      ["Enero", "January"],
      ["Pebrero", "February"],
      ["Marso", "March"],
      ["Abril", "April"],
      ["Mayo", "May"],
      ["Hunyo", "June"],
      ["Hulyo", "July"],
      ["Agosto", "August"],
      ["Setyembre", "September"],
      ["Oktubre", "October"],
      ["Nobyembre", "November"],
      ["Disyembre", "December"],
      ["Anong araw ngayon?", "What day is it today?"],
      ["Anong petsa ngayon?", "What is the date today?"],
      ["Anong oras na?", "What time is it?"],
      ["Kailan ang kaarawan mo?", "When is your birthday?"],
      ["Anong oras ang klase mo?", "What time is your class?"],
      ["May klase ako sa Lunes.", "I have class on Monday."],
      ["Sa Disyembre ang aming bakasyon.", "Our vacation is in December."],
      [
        "Alas-siyete ng umaga ang klase ko.",
        "My class is at seven in the morning.",
      ],
      ["Magkikita tayo bukas.", "We will meet tomorrow."],
      ["Abala ako ngayong hapon.", "I am busy this afternoon."],
    ]),
  },

  // V. Practice (no answer key in the document).
  extraActivities: [
    {
      title: "Practice: Translate into Tagalog",
      instructions: "Translate the following into Tagalog:",
      items: ["January 10", "April 15", "August 20", "December 25"],
      note: "The document gives no answers for this practice.",
    },
  ],

  // IX. Gamification Integration. The document's rows are given to the
  // matching parts of the lesson: days and months practice = the matching
  // activity (days of the week); time expression practice = the multiple
  // choice, fill-in and arrange exercises.
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
