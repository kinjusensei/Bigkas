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

// Tagalog Lesson 9 — copied from "Tagalog 9.pdf". The PDF's tables lost
// some of their columns, so each Filipino line was paired with the
// English and pronunciation lines in the same position (the counts match
// in every table). The dialogues' English translations are listed after
// each dialogue in the document and were paired line by line. Nothing in
// the Filipino was changed.

export const tagalogLesson9ReviewItems = [
  "Activities 2 and 4 (both multiple choice) share the practice choice step; Activity 4's questions start with its instruction so they read as responses to choose.",
  'Speaking: "Ano ang paborito mong pagkain?" has no English in this document; "What is your favorite food?" is from Lesson 6.',
];

// 4. Vocabulary
const expressionGroups: LessonExpressionGroup[] = [
  {
    title: "A. Common Question Words",
    items: words([
      ["Ano", "What", "a-no"],
      ["Sino", "Who", "si-no"],
      ["Saan", "Where", "sa-an"],
      ["Kailan", "When", "ka-i-lan"],
      ["Bakit", "Why", "ba-kit"],
      ["Paano", "How", "pa-a-no"],
      ["Alin", "Which", "a-lin"],
      ["Ilan", "How many", "i-lan"],
      ["Magkano", "How much", "mag-ka-no"],
      ["Gaano", "How much / To what extent", "ga-a-no"],
      ["Kanino", "Whose / To whom", "ka-ni-no"],
      ["Anong oras", "What time", "a-nong o-ras"],
    ]),
  },
  {
    title: "B. Common Words Used in Questions and Answers",
    items: words([
      ["Tanong", "Question", "ta-nong"],
      ["Sagot", "Answer", "sa-got"],
      ["Sagutin", "To answer", "sa-gu-tin"],
      ["Itanong", "To ask", "i-ta-nong"],
      ["Impormasyon", "Information", "im-por-ma-syon"],
      ["Pangalan", "Name", "pa-nga-lan"],
      ["Edad", "Age", "e-dad"],
      ["Tirahan", "Address / Residence", "ti-ra-han"],
      ["Lugar", "Place", "lu-gar"],
      ["Oras", "Time / Hour", "o-ras"],
      ["Dahilan", "Reason", "da-hi-lan"],
      ["Paraan", "Method / Way", "pa-ra-an"],
      ["Kaibigan", "Friend", "ka-i-bi-gan"],
      ["Paaralan", "School", "pa-a-ra-lan"],
      ["Trabaho", "Work / Job", "tra-ba-ho"],
    ]),
  },
  {
    title: "C. Common Question and Answer Expressions",
    items: words([
      ["Oo", "Yes", "o-o"],
      ["Hindi", "No / Not", "hin-di"],
      ["Siguro", "Maybe", "si-gu-ro"],
      ["Hindi ko alam", "I do not know", "hin-di ko a-lam"],
      ["Alam ko", "I know", "a-lam ko"],
      ["Sa palagay ko", "In my opinion / I think", "sa pa-la-gay ko"],
      ["Dahil sa...", "Because of...", "da-hil sa"],
      ["Para sa akin", "For me", "pa-ra sa a-kin"],
      ["Sandali lang", "Just a moment", "san-da-li lang"],
      [
        "Maaari bang ulitin?",
        "Can you repeat that?",
        "ma-a-a-ri bang u-li-tin",
      ],
      [
        "Hindi ko maintindihan",
        "I do not understand",
        "hin-di ko ma-in-tin-di-han",
      ],
      [
        "Pakiulit, pakiusap",
        "Please repeat it",
        "pa-ki-u-lit pa-ki-u-sap",
      ],
    ]),
  },
];

// 5. Useful Phrases and Sentences
const situationGroups: LessonExpressionGroup[] = [
  {
    title: "A. Asking About People",
    items: words([
      ["Ano ang pangalan mo?", "What is your name?"],
      ["Ilang taon ka na?", "How old are you?"],
      ["Saan ka nakatira?", "Where do you live?"],
      ["Saan ka nagmula?", "Where are you from?"],
      ["Sino ang kaibigan mo?", "Who is your friend?"],
      ["Ano ang trabaho mo?", "What is your job?"],
      ["Saan ka nag-aaral?", "Where do you study?"],
    ]),
  },
  {
    title: "B. Asking About Objects and Places",
    items: words([
      ["Ano ito?", "What is this?"],
      ["Ano ang tawag dito?", "What is this called?"],
      ["Nasaan ang libro ko?", "Where is my book?"],
      ["Alin dito ang gusto mo?", "Which one do you like?"],
      ["Kanino ang bag na ito?", "Whose bag is this?"],
      ["Saan matatagpuan ang paaralan?", "Where is the school located?"],
    ]),
  },
  {
    title: "C. Asking About Time and Quantity",
    items: words([
      ["Anong oras na?", "What time is it?"],
      ["Kailan ang iyong kaarawan?", "When is your birthday?"],
      ["Ilan ang mga libro mo?", "How many books do you have?"],
      ["Magkano ito?", "How much is this?"],
      ["Gaano katagal ang biyahe?", "How long is the trip?"],
    ]),
  },
  {
    title: "D. Asking About Reasons and Methods",
    items: words([
      ["Bakit ka masaya?", "Why are you happy?"],
      ["Bakit ka malungkot?", "Why are you sad?"],
      ["Paano mo ginawa ito?", "How did you do this?"],
      ["Paano pumunta sa paaralan?", "How do you get to school?"],
      [
        "Bakit ka nag-aaral ng Filipino?",
        "Why are you studying Filipino?",
      ],
    ]),
  },
];

const RESPONSE = "Choose the most appropriate response:";

export const tagalogLesson9: StructuredLesson = {
  lessonId: "tagalog_9",
  dialect: "tagalog",
  dialectLabel: "Tagalog",
  lessonNumber: 9,
  title: "Asking and Answering Simple Questions",
  level: "Beginner",
  unit: "Basic Communication",

  // 3. Lesson Introduction
  intro: [
    "Asking questions is an important part of everyday communication. People ask questions to get information, understand situations, meet new people, and learn about their surroundings.",
    "In Filipino, questions can begin with words such as ano, sino, saan, kailan, bakit, and paano. Learning these words allows learners to ask for information and respond appropriately in different situations.",
    "Real-life applications: asking someone's name and age, asking where a person lives, asking about the time or date, asking about an object or place, asking why something happened, and asking how to do something.",
  ],

  // 2. Learning Objectives
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Recognize common Filipino question words.",
    "Ask simple questions about people, objects, places, time, and activities.",
    "Understand and respond to basic questions.",
    "Construct simple questions using appropriate Filipino sentence patterns.",
    "Participate in short conversations by asking and answering questions.",
    "Use polite expressions when asking for information.",
  ],

  expressionsIntro:
    "Tap the speaker to hear each word. Read each syllable clearly.",
  expressionGroups,

  // 6. Lesson Proper
  languageNotes: [
    {
      title: "A. Understanding Filipino Question Words",
      body: [
        "Question words help identify the information being requested.",
      ],
      table: {
        leftHeading: "Question word",
        rightHeading: "Used to ask about · Example",
        rows: [
          { left: "Ano", right: "Things or information · Ano ang pangalan mo?" },
          { left: "Sino", right: "People · Sino siya?" },
          { left: "Saan", right: "Places or locations · Saan ka nakatira?" },
          {
            left: "Kailan",
            right: "Time or dates · Kailan ang iyong kaarawan?",
          },
          { left: "Bakit", right: "Reasons · Bakit ka nandito?" },
          {
            left: "Paano",
            right: "Methods or conditions · Paano mo ito ginawa?",
          },
          { left: "Alin", right: "Choices · Alin ang gusto mo?" },
          { left: "Ilan", right: "Number or quantity · Ilan ang kapatid mo?" },
          { left: "Magkano", right: "Price · Magkano ito?" },
          { left: "Kanino", right: "Ownership or recipient · Kanino ito?" },
        ],
      },
    },
    {
      title: "B. Forming Simple Questions",
      body: [
        "Filipino questions can be formed using a question word followed by the information being requested.",
        "Pattern 1: Question Word + Subject. Pattern 2: Question Word + Subject + Verb or Description. Pattern 3: Yes-or-No Questions Using \"Ba\" – the word ba is commonly used to form questions that can be answered with yes or no.",
      ],
      examples: sentences([
        ["Ano ang pangalan mo?", "What is your name?"],
        ["Sino ang guro mo?", "Who is your teacher?"],
        ["Saan ang paaralan?", "Where is the school?"],
        ["Saan ka nakatira?", "Where do you live?"],
        ["Bakit ka umiiyak?", "Why are you crying?"],
        ["Paano ka pumunta rito?", "How did you get here?"],
        ["May alaga ka bang aso?", "Do you have a pet dog?"],
        ["Estudyante ka ba?", "Are you a student?"],
        ["Gusto mo ba ng pagkain?", "Do you want food?"],
        ["Masaya ka ba?", "Are you happy?"],
      ]),
      remember:
        "The placement of ba depends on the sentence structure. Learners should practice complete examples instead of assuming that it can be inserted anywhere.",
    },
    {
      title: "C. Answering Questions",
      body: [
        "A good response should provide the information requested by the question.",
      ],
      table: {
        leftHeading: "Question",
        rightHeading: "Possible answer",
        rows: [
          { left: "Ano ang pangalan mo?", right: "Ang pangalan ko ay Ana." },
          { left: "Saan ka nakatira?", right: "Nakatira ako sa Angeles City." },
          { left: "Ilang taon ka na?", right: "Labingwalong taong gulang ako." },
          { left: "Sino ang kaibigan mo?", right: "Si Maria ang kaibigan ko." },
          { left: "Kailan ang kaarawan mo?", right: "Sa ika-10 ng Mayo." },
          { left: "Bakit ka nag-aaral?", right: "Nag-aaral ako upang matuto." },
          { left: "Magkano ito?", right: "Isang daang piso ito." },
        ],
      },
    },
    {
      title: "D. Answering Yes-or-No Questions",
      body: [
        "Filipino speakers commonly use oo and hindi to answer yes-or-no questions.",
      ],
      examples: sentences([
        [
          "Estudyante ka ba? – Oo, estudyante ako.",
          "Are you a student? Yes, I am a student.",
        ],
        [
          "May alaga ka bang pusa? – Wala akong alagang pusa.",
          "Do you have a pet cat? I do not have a pet cat.",
        ],
        [
          "Gusto mo ba ng kape? – Hindi, mas gusto ko ang tubig.",
          "Do you want coffee? No, I prefer water.",
        ],
      ]),
    },
    {
      title: "E. Making Questions More Polite",
      body: [
        "When speaking with strangers, older people, teachers, or people in formal situations, learners can use polite expressions.",
      ],
      table: {
        leftHeading: "Casual expression",
        rightHeading: "More polite expression",
        rows: [
          { left: "Ano ang pangalan mo?", right: "Ano po ang pangalan ninyo?" },
          { left: "Saan ka nakatira?", right: "Saan po kayo nakatira?" },
          { left: "Magkano ito?", right: "Magkano po ito?" },
          { left: "Puwede bang magtanong?", right: "Maaari po bang magtanong?" },
          { left: "Ulitin mo.", right: "Maaari po bang ulitin ninyo?" },
        ],
      },
      remember:
        "The use of po and opo is a common way of showing respect in Filipino conversations.",
    },
  ],

  situationsTitle: "Useful phrases and sentences",
  situationGroups,

  // 7. Guided Conversations
  conversations: [
    {
      situation: "Dialogue 1: Meeting a New Classmate",
      lines: dialogue([
        [
          "Anna",
          "Kumusta! Ano ang pangalan mo?",
          "Hello! What is your name?",
        ],
        ["Mark", "Ako si Mark. Ikaw?", "I am Mark. What about you?"],
        [
          "Anna",
          "Ako naman si Anna. Ilang taon ka na?",
          "I am Anna. How old are you?",
        ],
        [
          "Mark",
          "Labingwalong taong gulang ako. Ikaw?",
          "I am eighteen years old. What about you?",
        ],
        [
          "Anna",
          "Labimpito naman ako. Saan ka nakatira?",
          "I am seventeen. Where do you live?",
        ],
        ["Mark", "Nakatira ako sa Angeles City.", "I live in Angeles City."],
      ]),
    },
    {
      situation: "Dialogue 2: Asking for Information at School",
      lines: dialogue([
        [
          "Student",
          "Magandang umaga po. Maaari po bang magtanong?",
          "Good morning. May I ask a question?",
        ],
        [
          "Teacher",
          "Magandang umaga rin. Ano ang itatanong mo?",
          "Good morning to you too. What would you like to ask?",
        ],
        [
          "Student",
          "Saan po matatagpuan ang silid-aklatan?",
          "Where is the library located?",
        ],
        ["Teacher", "Nasa ikalawang palapag ito.", "It is on the second floor."],
        [
          "Student",
          "Anong oras po ito nagsasara?",
          "What time does it close?",
        ],
        [
          "Teacher",
          "Nagsasara ito nang alas-singko ng hapon.",
          "It closes at five in the afternoon.",
        ],
        ["Student", "Maraming salamat po!", "Thank you very much!"],
      ]),
    },
    {
      situation: "Dialogue 3: Asking About a Friend",
      lines: dialogue([
        ["Leo", "Bakit ka masaya ngayon?", "Why are you happy today?"],
        [
          "Mia",
          "Masaya ako dahil kaarawan ko ngayon.",
          "I am happy because it is my birthday today.",
        ],
        [
          "Leo",
          "Talaga? Ilang taon ka na?",
          "Really? How old are you now?",
        ],
        ["Mia", "Labinsiyam na ako.", "I am nineteen."],
        ["Leo", "May plano ka ba mamaya?", "Do you have plans later?"],
        [
          "Mia",
          "Oo. Magdiriwang kami kasama ang aking pamilya.",
          "Yes. We will celebrate with my family.",
        ],
        ["Leo", "Saan kayo magdiriwang?", "Where will you celebrate?"],
        ["Mia", "Sa bahay namin.", "At our house."],
      ]),
    },
  ],

  // 8. Activity 1 (answer key: 1 F, 2 B, 3 H, 4 E, 5 D, 6 C, 7 G, 8 A)
  matchActivity: {
    title: "Match the Question Words",
    instructions: "Match each Filipino question word with its English meaning.",
    pairs: matchPairs(
      ["Ano", "Sino", "Saan", "Kailan", "Bakit", "Paano", "Ilan", "Magkano"],
      ["How much", "Who", "How", "Why", "When", "What", "How many", "Where"],
      "F B H E D C G A",
    ),
  },

  // 8. Activities 2 and 4 (answer keys: 1 B, 2 A, 3 C, 4 A, 5 B and
  // 1 B, 2 A, 3 B, 4 B, 5 C)
  choiceActivity: {
    title: "Choose the Correct Question Word",
    instructions:
      "Complete each sentence using the correct question word. Then choose the most appropriate response to each question.",
    questions: [
      choice(1, "______ ang pangalan mo?", ["Sino", "Ano", "Saan", "Bakit"], "B"),
      choice(
        2,
        "______ ka nakatira?",
        ["Saan", "Kailan", "Ilan", "Magkano"],
        "A",
      ),
      choice(3, "______ ang kaibigan mo?", ["Bakit", "Paano", "Sino", "Ano"], "C"),
      choice(
        4,
        "______ ang kaarawan mo?",
        ["Kailan", "Saan", "Sino", "Magkano"],
        "A",
      ),
      choice(5, "______ ito?", ["Ilan", "Magkano", "Bakit", "Sino"], "B"),
      choice(
        6,
        `${RESPONSE} Ano ang pangalan mo?`,
        [
          "Nakatira ako sa Maynila.",
          "Ang pangalan ko ay Carlo.",
          "Labingwalong taong gulang ako.",
          "Masaya ako.",
        ],
        "B",
      ),
      choice(
        7,
        `${RESPONSE} Saan ka nag-aaral?`,
        [
          "Nag-aaral ako sa paaralan.",
          "Si Ana ang kaibigan ko.",
          "Bukas ang pasok ko.",
          "Dalawang libro ang dala ko.",
        ],
        "A",
      ),
      choice(
        8,
        `${RESPONSE} Bakit ka nag-aaral ng Filipino?`,
        [
          "Sa Angeles City.",
          "Dahil gusto kong matuto.",
          "Alas-otso ng umaga.",
          "Si Maria.",
        ],
        "B",
      ),
      choice(
        9,
        `${RESPONSE} Ilan ang kapatid mo?`,
        ["Sa bahay.", "Dalawa ang kapatid ko.", "Labingwalo.", "Bukas."],
        "B",
      ),
      choice(
        10,
        `${RESPONSE} Magkano ang bag na ito?`,
        ["Sa tindahan.", "Kay Ana.", "Limang daang piso.", "Malaki ito."],
        "C",
      ),
    ],
  },

  // 8. Activity 3 (answers from the document's answer key)
  fillInBlanks: {
    title: "Fill in the Blanks",
    items: fills(
      "fill",
      [
        ["______ ang guro mo?", "Sino"],
        ["______ ka pumunta rito?", "Paano"],
        ["______ ang mga kapatid mo?", "Ilan"],
        ["______ ka malungkot?", "Bakit"],
        ["______ ang iyong kaarawan?", "Kailan"],
      ],
      {
        title: "Fill in the Blanks",
        instructions: "Choose the correct answer from the word bank.",
        wordBank: ["Bakit", "Paano", "Ilan", "Sino", "Kailan"],
      },
    ),
  },

  // 8. Activity 5
  arrangeWords: {
    title: "Arrange the Words",
    instructions: "Arrange the words to form a correct Filipino question.",
    items: [
      arrange("1", "pangalan / ang / Ano / mo", "Ano ang pangalan mo?"),
      arrange("2", "nakatira / ka / Saan", "Saan ka nakatira?"),
      arrange("3", "kaarawan / Kailan / ang / mo", "Kailan ang kaarawan mo?"),
      arrange("4", "ang / Sino / guro / mo", "Sino ang guro mo?"),
      arrange("5", "ito / Magkano", "Magkano ito?"),
    ],
  },

  // 9. Lesson Assessment (answer key: 1 B, 2 C, 3 B, 4 C, 5 C, 6 A, 7 B,
  // 8 C, 9 A, 10 C)
  assessment: {
    instructions: "Choose the correct answer.",
    passPercent: 70,
    questions: [
      choice(
        1,
        'Which Filipino word means "Who"?',
        ["Ano", "Sino", "Saan", "Bakit"],
        "B",
      ),
      choice(
        2,
        "Which question asks about a location?",
        [
          "Kailan ka aalis?",
          "Bakit ka aalis?",
          "Saan ka pupunta?",
          "Sino ang kasama mo?",
        ],
        "C",
      ),
      choice(
        3,
        'What does "Magkano ito?" mean?',
        ["What is this?", "How much is this?", "Where is this?", "Who owns this?"],
        "B",
      ),
      choice(
        4,
        "Which question word is used to ask about a reason?",
        ["Paano", "Sino", "Bakit", "Alin"],
        "C",
      ),
      choice(
        5,
        'Choose the correct answer to "Ilang taon ka na?"',
        [
          "Nakatira ako sa Pampanga.",
          "Si Ana ang kaibigan ko.",
          "Labingwalong taong gulang ako.",
          "Alas-dos na.",
        ],
        "C",
      ),
      choice(
        6,
        "Which word is commonly used to form yes-or-no questions?",
        ["Ba", "Ng", "Sa", "Ang"],
        "A",
      ),
      choice(
        7,
        'What is the polite way to ask "Where do you live?"',
        [
          "Saan ka nakatira?",
          "Saan po kayo nakatira?",
          "Bakit ka nakatira?",
          "Sino ang nakatira?",
        ],
        "B",
      ),
      choice(
        8,
        "Which question asks about the time of an event?",
        [
          "Sino ang pupunta?",
          "Bakit ka pupunta?",
          "Kailan ang programa?",
          "Magkano ang programa?",
        ],
        "C",
      ),
      choice(
        9,
        'Choose the correct answer to "Bakit ka masaya?"',
        [
          "Dahil nakapasa ako sa pagsusulit.",
          "Sa paaralan.",
          "Si Mark.",
          "Limang piso.",
        ],
        "A",
      ),
      choice(
        10,
        'What does "Kanino ang bag na ito?" mean?',
        [
          "Where is this bag?",
          "How much is this bag?",
          "Whose bag is this?",
          "What is inside this bag?",
        ],
        "C",
      ),
    ],
  },

  // 8. Activity 6: Listening and Speaking Practice.
  speaking: {
    title: "Listening and Speaking Practice",
    instructions:
      "Listen to each recorded question and choose or say an appropriate answer.",
    note: "Listen carefully to the complete question, identify the question word, understand what information is being requested, and respond using a complete Filipino sentence at a natural pace.",
    phrases: phrases([
      ["Ano ang pangalan mo?", "What is your name?"],
      ["Saan ka nakatira?", "Where do you live?"],
      ["Ilang taon ka na?", "How old are you?"],
      ["Ano ang paborito mong pagkain?", "What is your favorite food?"],
      [
        "Bakit ka nag-aaral ng Filipino?",
        "Why are you studying Filipino?",
      ],
    ]),
  },

  // 8. Activity 7 (random prompt with the learner's own answer; no screen
  // yet).
  extraActivities: [
    {
      title: "Ask and Answer",
      instructions:
        "The application displays a random question. Learners must select or record an appropriate response.",
      items: [
        "Ano ang paborito mong hayop?",
        "Saan mo gustong pumunta?",
        "Sino ang pinakamatalik mong kaibigan?",
        "Anong pagkain ang gusto mo?",
        "Bakit mo gustong matuto ng Filipino?",
      ],
      note: "Learners may use their own answers rather than memorizing a single response.",
    },
  ],

  // 10. Gamification Integration. Practice activities = the multiple
  // choice, fill-in and arrange exercises; the matching activity has no
  // XP row in the document.
  rewards: {
    items: [
      { section: "vocabulary", label: "Complete Vocabulary Learning", xp: 10 },
      {
        section: "conversation",
        label: "Complete Guided Conversations",
        xp: 10,
      },
      { section: "sentences", label: "Complete Practice Activities", xp: 15 },
      {
        section: "speaking",
        label: "Complete Listening and Speaking Practice",
        xp: 10,
      },
      { section: "assessment", label: "Pass Lesson Assessment", xp: 15 },
    ],
    total: 60,
    badge: {
      name: "Curious Communicator Badge",
      description:
        "Awarded to learners who successfully complete the lesson and demonstrate their ability to ask and answer simple questions in Filipino.",
    },
    completionRequirement:
      "Finish the vocabulary section, complete the guided conversations, complete the practice activities, and obtain at least 70% in the lesson assessment.",
  },
};
