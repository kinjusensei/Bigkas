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

// Kapampangan Lesson 9 — copied from "Kapampangan_Lesson_9.docx", a
// translation of the Tagalog Lesson 9. The question words and sentences
// are working translations, not checked by a native speaker (the document
// singles out kapilan, obat and kananu). Nothing was corrected.
// Instructions, activities and the assessment keep the document's English.
//
// The document marks some phrases "(?)" — the least certain ones, to be
// checked by a native Kapampangan speaker. The marks are left out of what
// learners see; the phrases are listed in kapampanganReviewItems below.

// Phrases the document marks "(?)", exactly as written (without the mark),
// in the document's order.
export const kapampanganReviewItems: string[] = [
  "Ing pamagtanung metung yang maragul a bagay king aldo-aldo a pamagsalita. Magtanung la ding tau bang magkaroon ning impormasyun, maintindian ing kalagayan, makilala ing bayung tau, at maklaman ing kapaligiran da.",
  "Keng Kapampangan, ding tanung masimulan deng salitang cabang nanu, sinu, nukarin, kapilan, obat, at kananu. Ing pamag-aral king salitang ini makatulung bang magtanung at sumagut king aliwang kalagayan.",
  "Kapilan",
  "Obat",
  "Kananu / Makananu",
  "Nu / Ninu",
  "Gaanu",
  "Nokanyan / Kanino",
  "Tiranan",
  "Ali / Alaut",
  "Ali ku asabi",
  "Asabi ku",
  "Kung kanyaku",
  "Uling...",
  "Para keka / Para kanaku",
  "Antabayanan yu",
  "Pwede bang ulitan?",
  "Ali ku maintindian",
  "Paki-ulitan, pu",
  "Pilan na ka banua?",
  "Nukarin ka matira?",
  "Nukarin ka mibye?",
  "Sinu ing abe mu?",
  "Nanu ing trabahu mu?",
  "Nukarin ka mag-aral?",
  "Nanu ing tawag keni?",
  "Nukarin ya ing libru ku?",
  "Nu keni ing buri mu?",
  "Nokanyan ing bag a ini?",
  "Nukarin ya ing eskwelahan?",
  "Nanung oras na?",
  "Kapilan ing kaarawan mu?",
  "Pilan la ding libru mu?",
  "Gaanung tagal ing biyahe?",
  "Obat masaya ka?",
  "Obat malungkut ka?",
  "Kananu mu ginawa ini?",
  "Kananu mu pupunta king eskwelahan?",
  "Obat mag-aral ka ning Kapampangan?",
  "Questions can be formed using a question word followed by the information being requested.",
  "Sinu ing maestra mu? – Who is your teacher?",
  "Nukarin ya ing eskwelahan? – Where is the school?",
  "Nukarin ka matira? – Where do you live?",
  "Obat ka umiyak? – Why are you crying?",
  "Kananu ka miparita keni? – How did you get here?",
  "The word ba is commonly used to form questions that can be answered with yes or no.",
  "Atin kang alagang aso? – Do you have a pet dog?",
  "Buri mu ba ing pamangan? – Do you want food?",
  "Obat mag-aral ka?",
  "Kapampangan speakers commonly use wa (yes) and ali (no) to answer yes-or-no questions.",
  "English: Do you have a pet cat? I do not have a pet cat.",
  "English: Do you want coffee? No, I prefer water.",
  "The use of pu is a common way of showing respect in Kapampangan conversations. Use kayu and yu (instead of ka and mu) when speaking to someone older or to several people.",
];

// Not marked in the document, but worth checking too.
export const kapampanganLesson9Notes: string[] = [
  "Activities 2 and 4 (both multiple choice) share the practice choice step; Activity 4's questions start with its instruction so they read as responses to choose.",
  'Speaking: "Nanu ing paburitu mung pamangan?" has no English in this document; "What is your favorite food?" is from Lesson 6.',
  'Lesson Proper B, Pattern 3: the example "Atin kang alagang aso?" for yes-or-no questions with ba has no ba in it — kept as written.',
];

const RESPONSE = "Choose the most appropriate response:";

// 4. Vocabulary
const expressionGroups: LessonExpressionGroup[] = [
  {
    title: "A. Common Question Words",
    items: words([
      ["Nanu", "What", "na-nu"],
      ["Sinu", "Who", "si-nu"],
      ["Nukarin / Nokarin", "Where", "nu-ka-rin"],
      ["Kapilan", "When", "ka-pi-lan"],
      ["Obat", "Why", "o-bat"],
      ["Kananu / Makananu", "How", "ka-na-nu"],
      ["Nu / Ninu", "Which", "nu"],
      ["Pilan", "How many", "pi-lan"],
      ["Magkanu", "How much", "mag-ka-nu"],
      ["Gaanu", "How much / To what extent", "ga-a-nu"],
      ["Nokanyan / Kanino", "Whose / To whom", "ka-ni-nu"],
      ["Nanung oras", "What time", "na-nung o-ras"],
    ]),
  },
  {
    title: "B. Common Words Used in Questions and Answers",
    items: words([
      ["Tanung", "Question", "ta-nung"],
      ["Sagut", "Answer", "sa-gut"],
      ["Sumagut", "To answer", "su-ma-gut"],
      ["Magtanung", "To ask", "mag-ta-nung"],
      ["Impormasyun", "Information", "im-por-ma-syun"],
      ["Lagyu", "Name", "lag-yu", require("../../assets/audio/kapampangan/Lagyu.m4a")],
      ["Edad", "Age", "e-dad"],
      ["Tiranan", "Address / Residence", "ti-ra-nan"],
      ["Lugar", "Place", "lu-gar"],
      ["Oras", "Time / Hour", "o-ras"],
      ["Dahilan", "Reason", "da-hi-lan"],
      ["Paraan", "Method / Way", "pa-ra-an"],
      ["Abe / Kaibigan", "Friend", "a-be"],
      ["Eskwelahan", "School", "es-kwe-la-han"],
      ["Trabahu", "Work / Job", "tra-ba-hu"],
    ]),
  },
  {
    title: "C. Common Question and Answer Expressions",
    items: words([
      ["Wa", "Yes", "wa", require("../../assets/audio/kapampangan/Wa.m4a")],
      ["Ali / Alaut", "No / Not", "a-li"],
      ["Siguru", "Maybe", "si-gu-ru"],
      ["Ali ku asabi", "I do not know", "a-li ku a-sa-bi"],
      ["Asabi ku", "I know", "a-sa-bi ku"],
      ["Kung kanyaku", "In my opinion / I think", "kung kan-ya-ku"],
      ["Uling...", "Because of...", "u-ling"],
      ["Para keka / Para kanaku", "For me", "pa-ra ka-na-ku"],
      ["Antabayanan yu", "Just a moment", "an-ta-ba-ya-nan yu"],
      ["Pwede bang ulitan?", "Can you repeat that?", "pwe-de bang u-li-tan"],
      ["Ali ku maintindian", "I do not understand", "a-li ku ma-in-tin-di-an"],
      ["Paki-ulitan, pu", "Please repeat it", "pa-ki-u-li-tan pu"],
    ]),
  },
];

// 5. Useful Phrases and Sentences
const situationGroups: LessonExpressionGroup[] = [
  {
    title: "A. Asking About People",
    items: words([
      ["Nanu ing lagyu mu?", "What is your name?"],
      ["Pilan na ka banua?", "How old are you?"],
      ["Nukarin ka matira?", "Where do you live?"],
      ["Nukarin ka mibye?", "Where are you from?"],
      ["Sinu ing abe mu?", "Who is your friend?"],
      ["Nanu ing trabahu mu?", "What is your job?"],
      ["Nukarin ka mag-aral?", "Where do you study?"],
    ]),
  },
  {
    title: "B. Asking About Objects and Places",
    items: words([
      ["Nanu ini?", "What is this?"],
      ["Nanu ing tawag keni?", "What is this called?"],
      ["Nukarin ya ing libru ku?", "Where is my book?"],
      ["Nu keni ing buri mu?", "Which one do you like?"],
      ["Nokanyan ing bag a ini?", "Whose bag is this?"],
      ["Nukarin ya ing eskwelahan?", "Where is the school located?"],
    ]),
  },
  {
    title: "C. Asking About Time and Quantity",
    items: words([
      ["Nanung oras na?", "What time is it?"],
      ["Kapilan ing kaarawan mu?", "When is your birthday?"],
      ["Pilan la ding libru mu?", "How many books do you have?"],
      ["Magkanu ini?", "How much is this?"],
      ["Gaanung tagal ing biyahe?", "How long is the trip?"],
    ]),
  },
  {
    title: "D. Asking About Reasons and Methods",
    items: words([
      ["Obat masaya ka?", "Why are you happy?"],
      ["Obat malungkut ka?", "Why are you sad?"],
      ["Kananu mu ginawa ini?", "How did you do this?"],
      ["Kananu mu pupunta king eskwelahan?", "How do you get to school?"],
      [
        "Obat mag-aral ka ning Kapampangan?",
        "Why are you studying Kapampangan?",
      ],
    ]),
  },
];

export const kapampanganLesson9: StructuredLesson = {
  lessonId: "kapampangan_9",
  dialect: "kapampangan",
  dialectLabel: "Kapampangan",
  lessonNumber: 9,
  title: "Asking and Answering Simple Questions",
  level: "Beginner",
  unit: "Basic Communication",

  // 3. Lesson Introduction
  intro: [
    "Ing pamagtanung metung yang maragul a bagay king aldo-aldo a pamagsalita. Magtanung la ding tau bang magkaroon ning impormasyun, maintindian ing kalagayan, makilala ing bayung tau, at maklaman ing kapaligiran da.",
    "Keng Kapampangan, ding tanung masimulan deng salitang cabang nanu, sinu, nukarin, kapilan, obat, at kananu. Ing pamag-aral king salitang ini makatulung bang magtanung at sumagut king aliwang kalagayan.",
    "Real-life applications: asking someone's name and age, asking where a person lives, asking about the time or date, asking about an object or place, asking why something happened, and asking how to do something.",
  ],

  // 2. Learning Objectives
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Recognize common Kapampangan question words.",
    "Ask simple questions about people, objects, places, time, and activities.",
    "Understand and respond to basic questions.",
    "Construct simple questions using appropriate Kapampangan sentence patterns.",
    "Participate in short conversations by asking and answering questions.",
    "Use polite expressions when asking for information.",
  ],

  expressionsIntro:
    "Tap the speaker to hear each word. Read each syllable clearly.",
  expressionGroups,

  // 6. Lesson Proper
  languageNotes: [
    {
      title: "A. Understanding Kapampangan Question Words",
      body: [
        "Question words help identify the information being requested.",
      ],
      table: {
        leftHeading: "Question word",
        rightHeading: "Used to ask about · Example",
        rows: [
          { left: "Nanu", right: "Things or information · Nanu ing lagyu mu?" },
          { left: "Sinu", right: "People · Sinu ya?" },
          { left: "Nukarin", right: "Places or locations · Nukarin ka matira?" },
          {
            left: "Kapilan",
            right: "Time or dates · Kapilan ing kaarawan mu?",
          },
          { left: "Obat", right: "Reasons · Obat atiu ka keni?" },
          {
            left: "Kananu",
            right: "Methods or conditions · Kananu mu ginawa ini?",
          },
          { left: "Nu", right: "Choices · Nu ing buri mu?" },
          {
            left: "Pilan",
            right: "Number or quantity · Pilan la ding kapatad mu?",
          },
          { left: "Magkanu", right: "Price · Magkanu ini?" },
          { left: "Nokanyan", right: "Ownership or recipient · Nokanyan ini?" },
        ],
      },
    },
    {
      title: "B. Forming Simple Questions",
      body: [
        "Questions can be formed using a question word followed by the information being requested.",
        'Pattern 1: Question Word + Subject. Pattern 2: Question Word + Subject + Verb or Description. Pattern 3: Yes-or-No Questions Using "Ba" – the word ba is commonly used to form questions that can be answered with yes or no.',
      ],
      examples: sentences([
        ["Nanu ing lagyu mu?", "What is your name?"],
        ["Sinu ing maestra mu?", "Who is your teacher?"],
        ["Nukarin ya ing eskwelahan?", "Where is the school?"],
        ["Nukarin ka matira?", "Where do you live?"],
        ["Obat ka umiyak?", "Why are you crying?"],
        ["Kananu ka miparita keni?", "How did you get here?"],
        ["Atin kang alagang aso?", "Do you have a pet dog?"],
        ["Estudyante ka ba?", "Are you a student?"],
        ["Buri mu ba ing pamangan?", "Do you want food?"],
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
          { left: "Nanu ing lagyu mu?", right: "Ing lagyu ku ya Ana." },
          { left: "Nukarin ka matira?", right: "Matira ku king Angeles City." },
          { left: "Pilan na ka banua?", right: "Labingwalu a banua ku." },
          { left: "Sinu ing abe mu?", right: "Si Maria ing abe ku." },
          { left: "Kapilan ing kaarawan mu?", right: "Keng ika-10 ning Mayu." },
          { left: "Obat mag-aral ka?", right: "Mag-aral ku bang matuto." },
          { left: "Magkanu ini?", right: "Metung a dinalan a pesu ini." },
        ],
      },
    },
    {
      title: "D. Answering Yes-or-No Questions",
      body: [
        "Kapampangan speakers commonly use wa (yes) and ali (no) to answer yes-or-no questions.",
      ],
      examples: sentences([
        [
          "Estudyante ka ba? – Wa, estudyante ku.",
          "Are you a student? Yes, I am a student.",
        ],
        [
          "Atin kang alagang pusa? – Alang alagang pusa ku.",
          "Do you have a pet cat? I do not have a pet cat.",
        ],
        [
          "Buri mu ba ing kape? – Ali, mas buri ku ing danum.",
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
          { left: "Nanu ing lagyu mu?", right: "Nanu pu ing lagyu yu?" },
          { left: "Nukarin ka matira?", right: "Nukarin pu kayu matira?" },
          { left: "Magkanu ini?", right: "Magkanu pu ini?" },
          { left: "Pwede bang magtanung?", right: "Pwede pu bang magtanung?" },
          { left: "Ulitan mu.", right: "Pwede pu bang ulitan yu?" },
        ],
      },
      remember:
        "The use of pu is a common way of showing respect in Kapampangan conversations. Use kayu and yu (instead of ka and mu) when speaking to someone older or to several people.",
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
          "Kumusta ka! Nanu ing lagyu mu?",
          "Hello! What is your name?",
        ],
        ["Mark", "Aku ya si Mark. Ika?", "I am Mark. What about you?"],
        [
          "Anna",
          "Aku ya si Anna. Pilan na ka banua?",
          "I am Anna. How old are you?",
        ],
        [
          "Mark",
          "Labingwalu a banua ku. Ika?",
          "I am eighteen years old. What about you?",
        ],
        [
          "Anna",
          "Labingpitu ku. Nukarin ka matira?",
          "I am seventeen. Where do you live?",
        ],
        ["Mark", "Matira ku king Angeles City.", "I live in Angeles City."],
      ]),
    },
    {
      situation: "Dialogue 2: Asking for Information at School",
      lines: dialogue([
        [
          "Student",
          "Mayap a abak, pu. Pwede pu bang magtanung?",
          "Good morning. May I ask a question?",
        ],
        [
          "Teacher",
          "Mayap a abak mu. Nanu ing itanung mu?",
          "Good morning to you too. What would you like to ask?",
        ],
        [
          "Student",
          "Nukarin pu ya ing silid-aklatan?",
          "Where is the library located?",
        ],
        [
          "Teacher",
          "Atiu ya king ikaduang palapag.",
          "It is on the second floor.",
        ],
        ["Student", "Nanung oras pu ya magsara?", "What time does it close?"],
        [
          "Teacher",
          "Magsara ya king alas singku ning gatpanapun.",
          "It closes at five in the afternoon.",
        ],
        ["Student", "Dakal a salamat, pu!", "Thank you very much!"],
      ]),
    },
    {
      situation: "Dialogue 3: Asking About a Friend",
      lines: dialogue([
        ["Leo", "Obat masaya ka ngeni?", "Why are you happy today?"],
        [
          "Mia",
          "Masaya ku uling kaarawan ku ngeni.",
          "I am happy because it is my birthday today.",
        ],
        ["Leo", "Tutu? Pilan na ka banua?", "Really? How old are you now?"],
        ["Mia", "Labingsiyam na ku.", "I am nineteen."],
        ["Leo", "Atin kang plano mamaya?", "Do you have plans later?"],
        [
          "Mia",
          "Wa. Magdiriwang kami a kayabe ding pamilya ku.",
          "Yes. We will celebrate with my family.",
        ],
        ["Leo", "Nukarin kayu magdiriwang?", "Where will you celebrate?"],
        ["Mia", "Keng bale mi.", "At our house."],
      ]),
    },
  ],

  // 8. Activity 1 (answer key: 1 F, 2 B, 3 H, 4 E, 5 D, 6 C, 7 G, 8 A)
  matchActivity: {
    title: "Match the Question Words",
    instructions:
      "Match each Kapampangan question word with its English meaning.",
    pairs: matchPairs(
      ["Nanu", "Sinu", "Nukarin", "Kapilan", "Obat", "Kananu", "Pilan", "Magkanu"],
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
      choice(1, "__ ing lagyu mu?", ["Sinu", "Nanu", "Nukarin", "Obat"], "B"),
      choice(
        2,
        "__ ka matira?",
        ["Nukarin", "Kapilan", "Pilan", "Magkanu"],
        "A",
      ),
      choice(3, "__ ing abe mu?", ["Obat", "Kananu", "Sinu", "Nanu"], "C"),
      choice(
        4,
        "__ ing kaarawan mu?",
        ["Kapilan", "Nukarin", "Sinu", "Magkanu"],
        "A",
      ),
      choice(5, "__ ini?", ["Pilan", "Magkanu", "Obat", "Sinu"], "B"),
      choice(
        6,
        `${RESPONSE} Nanu ing lagyu mu?`,
        [
          "Matira ku king Maynila.",
          "Ing lagyu ku ya Carlo.",
          "Labingwalu a banua ku.",
          "Masaya ku.",
        ],
        "B",
      ),
      choice(
        7,
        `${RESPONSE} Nukarin ka mag-aral?`,
        [
          "Mag-aral ku king eskwelahan.",
          "Si Ana ing abe ku.",
          "Bukas ing pasok ku.",
          "Adwang libru ing dala ku.",
        ],
        "A",
      ),
      choice(
        8,
        `${RESPONSE} Obat mag-aral ka ning Kapampangan?`,
        [
          "Keng Angeles City.",
          "Uling buri kung matuto.",
          "Alas otso ning abak.",
          "Si Maria.",
        ],
        "B",
      ),
      choice(
        9,
        `${RESPONSE} Pilan la ding kapatad mu?`,
        ["Keng bale.", "Adwa la ding kapatad ku.", "Labingwalu.", "Bukas."],
        "B",
      ),
      choice(
        10,
        `${RESPONSE} Magkanu ing bag a ini?`,
        ["Keng tindahan.", "Keng Ana.", "Limang dinalan a pesu.", "Maragul ya."],
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
        ["__ ing maestra mu?", "Sinu"],
        ["__ ka pupunta keni?", "Kananu"],
        ["__ la ding kapatad mu?", "Pilan"],
        ["__ ka malungkut?", "Obat"],
        ["__ ing kaarawan mu?", "Kapilan"],
      ],
      {
        title: "Fill in the Blanks",
        instructions: "Choose the correct answer from the word bank.",
        wordBank: ["Obat", "Kananu", "Pilan", "Sinu", "Kapilan"],
      },
    ),
  },

  // 8. Activity 5
  arrangeWords: {
    title: "Arrange the Words",
    instructions: "Arrange the words to form a correct Kapampangan question.",
    items: [
      arrange("1", "lagyu / ing / Nanu / mu", "Nanu ing lagyu mu?"),
      arrange("2", "matira / ka / Nukarin", "Nukarin ka matira?"),
      arrange(
        "3",
        "kaarawan / Kapilan / ing / mu",
        "Kapilan ing kaarawan mu?",
      ),
      arrange("4", "ing / Sinu / maestra / mu", "Sinu ing maestra mu?"),
      arrange("5", "ini / Magkanu", "Magkanu ini?"),
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
        'Which Kapampangan word means "Who"?',
        ["Nanu", "Sinu", "Nukarin", "Obat"],
        "B",
      ),
      choice(
        2,
        "Which question asks about a location?",
        [
          "Kapilan ka mawala?",
          "Obat ka mawala?",
          "Nukarin ka munta?",
          "Sinu ing kayabe mu?",
        ],
        "C",
      ),
      choice(
        3,
        'What does "Magkanu ini?" mean?',
        ["What is this?", "How much is this?", "Where is this?", "Who owns this?"],
        "B",
      ),
      choice(
        4,
        "Which question word is used to ask about a reason?",
        ["Kananu", "Sinu", "Obat", "Nu"],
        "C",
      ),
      choice(
        5,
        'Choose the correct answer to "Pilan na ka banua?"',
        [
          "Matira ku king Pampanga.",
          "Si Ana ing abe ku.",
          "Labingwalu a banua ku.",
          "Alas dua na.",
        ],
        "C",
      ),
      choice(
        6,
        "Which word is commonly used to form yes-or-no questions?",
        ["Ba", "Ning", "King", "Ing"],
        "A",
      ),
      choice(
        7,
        'What is the polite way to ask "Where do you live?"',
        [
          "Nukarin ka matira?",
          "Nukarin pu kayu matira?",
          "Obat ka matira?",
          "Sinu ing matira?",
        ],
        "B",
      ),
      choice(
        8,
        "Which question asks about the time of an event?",
        [
          "Sinu ing munta?",
          "Obat ka munta?",
          "Kapilan ing programa?",
          "Magkanu ing programa?",
        ],
        "C",
      ),
      choice(
        9,
        'Choose the correct answer to "Obat masaya ka?"',
        [
          "Uling mipasa ku king pagsusulit.",
          "Keng eskwelahan.",
          "Si Mark.",
          "Limang pesu.",
        ],
        "A",
      ),
      choice(
        10,
        'What does "Nokanyan ing bag a ini?" mean?',
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

  // 8. Activity 6: Listening and Speaking Practice. English meanings are
  // from the phrase tables; one is from Lesson 6 (see
  // kapampanganLesson9Notes).
  speaking: {
    title: "Listening and Speaking Practice",
    instructions:
      "Listen to each recorded question and choose or say an appropriate answer.",
    note: "Listen carefully to the complete question, identify the question word, understand what information is being requested, and respond using a complete Kapampangan sentence at a natural pace.",
    phrases: phrases([
      ["Nanu ing lagyu mu?", "What is your name?"],
      ["Nukarin ka matira?", "Where do you live?"],
      ["Pilan na ka banua?", "How old are you?"],
      ["Nanu ing paburitu mung pamangan?", "What is your favorite food?"],
      [
        "Obat mag-aral ka ning Kapampangan?",
        "Why are you studying Kapampangan?",
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
        "Nanu ing paburitu mung ayup?",
        "Nukarin mu buring munta?",
        "Sinu ing pekamatalik mung abe?",
        "Nanung pamangan ing buri mu?",
        "Obat buri mung matuto ning Kapampangan?",
      ],
      note: "Learners may use their own answers rather than memorizing a single response.",
    },
  ],

  // 10. Gamification Integration. Same mapping as the Tagalog Lesson 9:
  // practice activities = the multiple choice, fill-in and arrange
  // exercises; the matching activity has no XP row in the document.
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
        "Awarded to learners who successfully complete the lesson and demonstrate their ability to ask and answer simple questions in Kapampangan.",
    },
    completionRequirement:
      "Finish the vocabulary section, complete the guided conversations, complete the practice activities, and obtain at least 70% in the lesson assessment.",
  },
};
