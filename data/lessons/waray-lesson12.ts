import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 12 — imported from "Lesson Plan.pdf", pages 818–830.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
// Fields not given by the plan are INFERRED from this lesson's own content and
// listed in docs/waray-inferred-keys.md: situation, usage, example, pattern, fill-in, arrange, speaking phrase, target pitch and mood, respelling, example situation, pronunciation tip, completion requirement.
// The practice answers are INFERRED drafts, not from the PDF. See
// docs/waray-draft-answer-keys.md for each answer and how it was found.

export const warayLesson12: StructuredLesson = {
  lessonId: "waray_12",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 12,
  title: "Giving Directions and Locations",
  level: "Intermediate",
  unit: "Unit 1 – Everyday Communication",
  estimatedDuration: "40–50 minutes",
  prerequisite: "Lessons 1–11",
  languageVariety: "Waray-Waray",
  intro: [
    "Knowing how to ask for and give directions is an important everyday communication skill. People often need directions when visiting unfamiliar places, looking for establishments, or explaining where something is located.",
    "In Waray, learners can use expressions such as diin, hain, and ngain in location-related questions. They can also use words such as hirani (near), hirayo (far), and atubangan (in front) to describe locations.",
    "In this lesson, you will learn how to ask for directions, explain where places are, and guide someone toward a destination using simple Waray expressions.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Recognize common Waray vocabulary for places and locations.",
    "Ask where familiar places and establishments are located.",
    "Understand and use basic expressions for giving directions.",
    "Describe the relative location of people, objects, and places.",
    "Participate in short conversations involving directions and destinations.",
  ],
  assessment: {
    instructions: "Choose the best answer for each question.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What does \"Hain an merkado?\" mean?",
        options: [
          {
            key: "A",
            text: "Where is the market?",
          },
          {
            key: "B",
            text: "Where is the school?",
          },
          {
            key: "C",
            text: "Who owns the market?",
          },
          {
            key: "D",
            text: "How much is the market?",
          },
        ],
        answerKey: "A",
      },
      {
        id: 2,
        prompt: "Which Waray word means \"near\"?",
        options: [
          {
            key: "A",
            text: "Hirayo",
          },
          {
            key: "B",
            text: "Hirani",
          },
          {
            key: "C",
            text: "Luyo",
          },
          {
            key: "D",
            text: "Gawas",
          },
        ],
        answerKey: "B",
      },
      {
        id: 3,
        prompt: "What does \"Liko ha tuo\" mean?",
        options: [
          {
            key: "A",
            text: "Turn left.",
          },
          {
            key: "B",
            text: "Go straight.",
          },
          {
            key: "C",
            text: "Turn right.",
          },
          {
            key: "D",
            text: "Cross the road.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 4,
        prompt: "Which expression means \"behind\"?",
        options: [
          {
            key: "A",
            text: "Atubangan",
          },
          {
            key: "B",
            text: "Sapit",
          },
          {
            key: "C",
            text: "Luyo",
          },
          {
            key: "D",
            text: "Ibabaw",
          },
        ],
        answerKey: "C",
      },
      {
        id: 5,
        prompt: "What does \"Diretso la\" mean?",
        options: [
          {
            key: "A",
            text: "Just go straight.",
          },
          {
            key: "B",
            text: "Turn left.",
          },
          {
            key: "C",
            text: "Stop here.",
          },
          {
            key: "D",
            text: "Go outside.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 6,
        prompt: "Which Waray expression means \"Is it far from here?\"",
        options: [
          {
            key: "A",
            text: "Hirayo ba ito tikang dinhi?",
          },
          {
            key: "B",
            text: "Hain an imo balay?",
          },
          {
            key: "C",
            text: "Paonan-o ka?",
          },
          {
            key: "D",
            text: "Ano an imo ngaran?",
          },
        ],
        answerKey: "A",
      },
      {
        id: 7,
        prompt: "What does \"Sapit\" mean?",
        options: [
          {
            key: "A",
            text: "Above",
          },
          {
            key: "B",
            text: "Beside",
          },
          {
            key: "C",
            text: "Below",
          },
          {
            key: "D",
            text: "Across",
          },
        ],
        answerKey: "B",
      },
      {
        id: 8,
        prompt: "Which expression means \"Please show me the way\"?",
        options: [
          {
            key: "A",
            text: "Alayon, pakita ha akon an dalan.",
          },
          {
            key: "B",
            text: "Hulat anay.",
          },
          {
            key: "C",
            text: "Mangaon na kita.",
          },
          {
            key: "D",
            text: "Diri ako maaram.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 9,
        prompt: "What does \"Hirayo an ospital\" mean?",
        options: [
          {
            key: "A",
            text: "The hospital is nearby.",
          },
          {
            key: "B",
            text: "The hospital is behind the house.",
          },
          {
            key: "C",
            text: "The hospital is far.",
          },
          {
            key: "D",
            text: "The hospital is beside the market.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 10,
        prompt: "Which expression means \"Turn left\"?",
        options: [
          {
            key: "A",
            text: "Liko ha tuo.",
          },
          {
            key: "B",
            text: "Liko ha wala.",
          },
          {
            key: "C",
            text: "Diretso la.",
          },
          {
            key: "D",
            text: "Tabok ha dalan.",
          },
        ],
        answerKey: "B",
      },
    ],
  },
  extraActivities: [
    {
      title: "Translate into Waray",
      kind: "translate",
      instructions: "Translate each English sentence into Waray.",
      items: [
        "Where is the market?",
        "Turn right.",
        "The school is near the church.",
        "Is the hospital far from here?",
        "Please show me the way.",
      ],
    },
    {
      title: "Give Directions",
      kind: "other",
      instructions: "Imagine that a visitor asks you how to get to a familiar place in your community.\nWrite at least five Waray sentences explaining how to reach the destination. Include:",
      items: [
        "The destination.",
        "At least two direction instructions.",
        "One location expression.",
        "One statement about distance.",
        "A polite closing expression.",
      ],
    },
  ],
  matchActivity: {
    title: "Match the Location Words",
    instructions: "Match each Waray word with its English meaning.",
    pairs: [
      {
        id: "1",
        term: "Hirani",
        answer: "Near",
      },
      {
        id: "2",
        term: "Hirayo",
        answer: "Far",
      },
      {
        id: "3",
        term: "Luyo",
        answer: "Behind",
      },
      {
        id: "4",
        term: "Tuo",
        answer: "Right",
      },
      {
        id: "5",
        term: "Wala",
        answer: "Left",
      },
    ],
  },
  choiceActivity: {
    title: "Complete the Directions",
    questions: [
      {
        id: 1,
        prompt: "______ la. (Go straight.)",
        options: [
          {
            key: "A",
            text: "Diretso",
          },
          {
            key: "B",
            text: "tuo",
          },
          {
            key: "C",
            text: "wala",
          },
          {
            key: "D",
            text: "luyo",
          },
          {
            key: "E",
            text: "Hirayo",
          },
        ],
        answerKey: "A",
        title: "Complete the Directions",
        instructions: "Choose the correct Waray expression to complete each sentence.",
      },
      {
        id: 2,
        prompt: "Liko ha ______. (Turn right.)",
        options: [
          {
            key: "A",
            text: "Diretso",
          },
          {
            key: "B",
            text: "tuo",
          },
          {
            key: "C",
            text: "wala",
          },
          {
            key: "D",
            text: "luyo",
          },
          {
            key: "E",
            text: "Hirayo",
          },
        ],
        answerKey: "B",
        title: "Complete the Directions",
        instructions: "Choose the correct Waray expression to complete each sentence.",
      },
      {
        id: 3,
        prompt: "Liko ha ______. (Turn left.)",
        options: [
          {
            key: "A",
            text: "Diretso",
          },
          {
            key: "B",
            text: "tuo",
          },
          {
            key: "C",
            text: "wala",
          },
          {
            key: "D",
            text: "luyo",
          },
          {
            key: "E",
            text: "Hirayo",
          },
        ],
        answerKey: "C",
        title: "Complete the Directions",
        instructions: "Choose the correct Waray expression to complete each sentence.",
      },
      {
        id: 4,
        prompt: "Aada an tindahan ha ______ han balay. (The store is behind the house.)",
        options: [
          {
            key: "A",
            text: "Diretso",
          },
          {
            key: "B",
            text: "tuo",
          },
          {
            key: "C",
            text: "wala",
          },
          {
            key: "D",
            text: "luyo",
          },
          {
            key: "E",
            text: "Hirayo",
          },
        ],
        answerKey: "D",
        title: "Complete the Directions",
        instructions: "Choose the correct Waray expression to complete each sentence.",
      },
      {
        id: 5,
        prompt: "______ ba ito tikang dinhi? (Is it far from here?)",
        options: [
          {
            key: "A",
            text: "Diretso",
          },
          {
            key: "B",
            text: "tuo",
          },
          {
            key: "C",
            text: "wala",
          },
          {
            key: "D",
            text: "luyo",
          },
          {
            key: "E",
            text: "Hirayo",
          },
        ],
        answerKey: "E",
        title: "Complete the Directions",
        instructions: "Choose the correct Waray expression to complete each sentence.",
      },
      {
        id: 6,
        prompt: "Diretso la.",
        options: [
          {
            key: "A",
            text: "Turn left.",
          },
          {
            key: "B",
            text: "Go straight.",
          },
          {
            key: "C",
            text: "Stop.",
          },
          {
            key: "D",
            text: "Turn right.",
          },
        ],
        answerKey: "B",
        title: "Follow the Directions",
        instructions: "Read each direction and identify the correct action.",
      },
      {
        id: 7,
        prompt: "Liko ha tuo.",
        options: [
          {
            key: "A",
            text: "Turn right.",
          },
          {
            key: "B",
            text: "Turn left.",
          },
          {
            key: "C",
            text: "Go straight.",
          },
          {
            key: "D",
            text: "Go back.",
          },
        ],
        answerKey: "A",
        title: "Follow the Directions",
        instructions: "Read each direction and identify the correct action.",
      },
      {
        id: 8,
        prompt: "Liko ha wala.",
        options: [
          {
            key: "A",
            text: "Stop.",
          },
          {
            key: "B",
            text: "Turn right.",
          },
          {
            key: "C",
            text: "Turn left.",
          },
          {
            key: "D",
            text: "Cross the road.",
          },
        ],
        answerKey: "C",
        title: "Follow the Directions",
        instructions: "Read each direction and identify the correct action.",
      },
      {
        id: 9,
        prompt: "Aada ha luyo han balay.",
        options: [
          {
            key: "A",
            text: "In front of the house.",
          },
          {
            key: "B",
            text: "Beside the house.",
          },
          {
            key: "C",
            text: "Behind the house.",
          },
          {
            key: "D",
            text: "Inside the house.",
          },
        ],
        answerKey: "C",
        title: "Follow the Directions",
        instructions: "Read each direction and identify the correct action.",
      },
      {
        id: 10,
        prompt: "Hirani la ito.",
        options: [
          {
            key: "A",
            text: "It is far.",
          },
          {
            key: "B",
            text: "It is nearby.",
          },
          {
            key: "C",
            text: "It is behind.",
          },
          {
            key: "D",
            text: "It is outside.",
          },
        ],
        answerKey: "B",
        title: "Follow the Directions",
        instructions: "Read each direction and identify the correct action.",
      },
    ],
  },
  answerKeysInferred: true,
  rewards: {
    items: [
      {
        section: "vocabulary",
        label: "Vocabulary Review + Useful Phrases",
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
      name: "Direction Navigator Badge",
      description: "Awarded after successfully completing the lesson assessment with at least 70%.",
    },
    completionRequirement: "Obtain at least 70% in the lesson assessment. Learners may repeat the activities and assessment if they do not meet the requirement.",
  },
  expectedOutcomes: [
    "Identify familiar places and establishments in Waray.",
    "Ask where a destination is located.",
    "Give simple directions using common expressions.",
    "Describe the relative location of places and objects.",
    "Participate in conversations involving directions and destinations.",
    "Complete the vocabulary review.",
    "Study the useful phrases and lesson explanations.",
    "Finish the guided conversation exercises.",
    "Complete the practice activities.",
    "Obtain at least 70% in the lesson assessment.",
  ],
  fillInBlanks: {
    title: "Fill in the Blanks",
    instructions: "Complete each sentence using the appropriate Waray word.",
    items: [
      {
        id: "1",
        sentence: "Hain an ___?",
        hint: "Where is the school?",
        answer: "eskwelahan",
        wordBank: [
          "Hirani",
          "Direksyon",
          "eskwelahan",
          "Gawas",
        ],
      },
      {
        id: "2",
        sentence: "Hain an ___?",
        hint: "Where is the market?",
        answer: "merkado",
        wordBank: [
          "merkado",
          "Dinhi",
          "Kadto",
          "Tulay",
        ],
      },
      {
        id: "3",
        sentence: "Paonan-o ako makadto ___?",
        hint: "How can I get there?",
        answer: "didto",
        wordBank: [
          "didto",
          "Atubangan",
          "Hirani",
          "Sulod",
        ],
      },
      {
        id: "4",
        sentence: "___ ba ito tikang dinhi?",
        hint: "Is it far from here?",
        answer: "Hirayo",
        wordBank: [
          "Ibabaw",
          "Sulod",
          "Parke",
          "Hirayo",
        ],
      },
      {
        id: "5",
        sentence: "___ ba ito?",
        hint: "Is it near?",
        answer: "Hirani",
        wordBank: [
          "Sulod",
          "Kadto",
          "Tulay",
          "Hirani",
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
          "eskwelahan",
          "an",
          "Hain",
        ],
        answer: [
          "Hain",
          "an",
          "eskwelahan",
        ],
        display: "Hain an eskwelahan?",
      },
      {
        id: "2",
        words: [
          "an",
          "Hain",
          "merkado",
        ],
        answer: [
          "Hain",
          "an",
          "merkado",
        ],
        display: "Hain an merkado?",
      },
      {
        id: "3",
        words: [
          "makadto",
          "ako",
          "Paonan-o",
          "didto",
        ],
        answer: [
          "Paonan-o",
          "ako",
          "makadto",
          "didto",
        ],
        display: "Paonan-o ako makadto didto?",
      },
      {
        id: "4",
        words: [
          "ba",
          "dinhi",
          "ito",
          "Hirayo",
          "tikang",
        ],
        answer: [
          "Hirayo",
          "ba",
          "ito",
          "tikang",
          "dinhi",
        ],
        display: "Hirayo ba ito tikang dinhi?",
      },
      {
        id: "5",
        words: [
          "Hirani",
          "ito",
          "ba",
        ],
        answer: [
          "Hirani",
          "ba",
          "ito",
        ],
        display: "Hirani ba ito?",
      },
    ],
  },
  speaking: {
    title: "Speaking Practice",
    instructions: "Read the following sentences aloud.",
    note: "Learners should listen to the model pronunciation before recording their own voice.",
    practiceLessonId: "waray_12",
    phrases: [
      {
        id: "1",
        text: "Hain an eskwelahan?",
        respelling: "HAH-in ahn es-kweh-LAH-hahn",
        meaning: "Where is the school?",
      },
      {
        id: "2",
        text: "Hirani ba ito?",
        respelling: "hee-RAH-nee bah EE-toh",
        meaning: "Is it near?",
      },
      {
        id: "3",
        text: "Aada ito ha sapit han singbahan.",
        respelling: "ah-AH-dah EE-toh hah SAH-peet hahn sing-BAH-hahn",
        meaning: "It is beside the church.",
      },
      {
        id: "4",
        text: "Ginbibiling ko an ospital.",
        respelling: "gin-bee-BEE-ling koh ahn ohs-pee-TAHL",
        meaning: "I am looking for the hospital.",
      },
      {
        id: "5",
        text: "Aada an tindahan ha sapit han merkado.",
        respelling: "a-a-da an tin-dah-hahn ha sah-peet han mehr-kah-doh",
        meaning: "The store is beside the market.",
      },
      {
        id: "6",
        text: "Kadto ha atubangan han eskwelahan.",
        respelling: "kad-to ha ah-too-bah-ngahn han es-kweh-lah-hahn",
        meaning: "Go to the front of the school.",
      },
      {
        id: "7",
        text: "Diri ito hirayo tikang dinhi.",
        respelling: "di-ri i-to hee-rah-yoh tee-kahng deen-hee",
        meaning: "It is not far from here.",
      },
    ],
  },
  exampleSituation: {
    description: "Imagine this situation from the lesson: Finding the Market.",
    lead: "You can begin by saying:",
    line: "Pasayloa ako. Hain an merkado?",
    translation: "Excuse me. Where is the market?",
  },
  vocabularyIntro: "Learn the following words and expressions before proceeding to the activities.",
  pronunciationTip: "Read each syllable clearly. Avoid rushing through longer expressions.",
  selfIntroIntro: "Use these patterns and phrases from the lesson.",
  vocabulary: [
    {
      term: "Balay",
      meaning: "House",
      pronunciation: "BAH-lai",
      usage: "A common place.",
      example: [
        {
          speaker: "A",
          text: "Diri man. Diri ito hirayo.",
          translation: "Not really. It is not far.",
        },
        {
          speaker: "B",
          text: "May tindahan ba hirani ha iyo balay?",
          translation: "Is there a store near your house?",
        },
      ],
      audioUrl: require("../../assets/audio/Lesson Waray/balay.aac"),
    },
    {
      term: "Eskwelahan",
      meaning: "School",
      pronunciation: "es-kweh-LAH-hahn",
      usage: "A common place.",
      example: [
        {
          speaker: "",
          text: "Hain an eskwelahan?",
          translation: "Where is the school?",
        },
      ],
    },
    {
      term: "Singbahan",
      meaning: "Church",
      pronunciation: "sing-BAH-hahn",
      usage: "A common place.",
      example: [
        {
          speaker: "A",
          text: "Pasayloa ako. Hain an merkado?",
          translation: "Excuse me. Where is the market?",
        },
        {
          speaker: "B",
          text: "Aada ito hirani ha singbahan.",
          translation: "It is near the church.",
        },
      ],
    },
    {
      term: "Merkado",
      meaning: "Market",
      pronunciation: "mehr-KAH-doh",
      usage: "A common place.",
      example: [
        {
          speaker: "A",
          text: "Diri, makakadto ka didto pinaagi hin paglakat.",
          translation: "No, you can get there by walking.",
        },
        {
          speaker: "B",
          text: "Ano an akon bubuhaton kon makaabot ako ha merkado?",
          translation: "What should I do when I reach the market?",
        },
      ],
    },
    {
      term: "Ospital",
      meaning: "Hospital",
      pronunciation: "ohs-pee-TAHL",
      usage: "A common place.",
      example: [
        {
          speaker: "A",
          text: "Alayon, hain an ospital?",
          translation: "Please, where is the hospital?",
        },
        {
          speaker: "B",
          text: "Aada ito ha sapit han botika.",
          translation: "It is beside the pharmacy.",
        },
      ],
    },
    {
      term: "Botika",
      meaning: "Pharmacy",
      pronunciation: "boh-TEE-kah",
      usage: "A common place.",
      example: [
        {
          speaker: "A",
          text: "Aada ito ha sapit han botika.",
          translation: "It is beside the pharmacy.",
        },
        {
          speaker: "B",
          text: "Hirayo ba ito?",
          translation: "Is it far?",
        },
      ],
    },
    {
      term: "Restawran",
      meaning: "Restaurant",
      pronunciation: "res-tahw-RAHN",
      usage: "A common place.",
    },
    {
      term: "Tindahan",
      meaning: "Store",
      pronunciation: "tin-DAH-hahn",
      usage: "A common place.",
      example: [
        {
          speaker: "A",
          text: "May tindahan ba hirani ha iyo balay?",
          translation: "Is there a store near your house?",
        },
        {
          speaker: "B",
          text: "Oo, aada an tindahan ha sapit han amon balay.",
          translation: "Yes, the store is beside our house.",
        },
      ],
    },
    {
      term: "Parke",
      meaning: "Park",
      pronunciation: "PAHR-keh",
      usage: "A common place.",
      example: [
        {
          speaker: "",
          text: "Aada an eskwelahan ha atubangan han parke.",
          translation: "The school is in front of the park.",
        },
      ],
    },
    {
      term: "Opisina",
      meaning: "Office",
      pronunciation: "oh-pee-SEE-nah",
      usage: "A common place.",
    },
    {
      term: "Terminal",
      meaning: "Bus terminal",
      pronunciation: "tehr-mee-NAHL",
      usage: "A common place.",
    },
    {
      term: "Dalan",
      meaning: "Road",
      pronunciation: "DAH-lahn",
      usage: "A common place.",
      example: [
        {
          speaker: "",
          text: "Alayon, pakita ha akon an dalan.",
          translation: "Please show me the way.",
        },
      ],
    },
    {
      term: "Tulay",
      meaning: "Bridge",
      pronunciation: "TOO-lai",
      usage: "A common place.",
    },
    {
      term: "Baybayon",
      meaning: "Beach",
      pronunciation: "bai-bah-YOHN",
      usage: "A common place.",
      example: [
        {
          speaker: "A",
          text: "Diin kamo naukoy?",
          translation: "Where do you live?",
        },
        {
          speaker: "B",
          text: "Nauukoy kami hirani ha baybayon.",
          translation: "We live near the beach.",
        },
      ],
    },
    {
      term: "Sentro han bungto",
      meaning: "Town center",
      pronunciation: "SEN-troh hahn BOONG-toh",
      usage: "A common place.",
      example: [
        {
          speaker: "A",
          text: "Nauukoy kami hirani ha baybayon.",
          translation: "We live near the beach.",
        },
        {
          speaker: "B",
          text: "Hirayo ba ito tikang ha sentro han bungto?",
          translation: "Is it far from the town center?",
        },
      ],
    },
    {
      term: "Hirani",
      meaning: "Near",
      pronunciation: "hee-RAH-nee",
      usage: "From this lesson's word list: location and position words.",
      example: [
        {
          speaker: "A",
          text: "Aada ito hirani ha singbahan.",
          translation: "It is near the church.",
        },
        {
          speaker: "B",
          text: "Paonan-o ako makadto didto?",
          translation: "How can I get there?",
        },
      ],
    },
    {
      term: "Hirayo",
      meaning: "Far",
      pronunciation: "hee-RAH-yoh",
      usage: "From this lesson's word list: location and position words.",
      example: [
        {
          speaker: "A",
          text: "Diretso la, katapos liko ha wala.",
          translation: "Just go straight, then turn left.",
        },
        {
          speaker: "B",
          text: "Hirayo ba ito tikang dinhi?",
          translation: "Is it far from here?",
        },
      ],
    },
    {
      term: "Atubangan",
      meaning: "In front",
      pronunciation: "ah-too-BAH-ngahn",
      usage: "From this lesson's word list: location and position words.",
      example: [
        {
          speaker: "",
          text: "Aada ito ha atubangan han eskwelahan.",
          translation: "It is in front of the school.",
        },
      ],
    },
    {
      term: "Luyo",
      meaning: "Behind",
      pronunciation: "LOO-yoh",
      usage: "From this lesson's word list: location and position words.",
      example: [
        {
          speaker: "",
          text: "An tindahan aada ha luyo han balay.",
          translation: "The store is behind the house.",
        },
      ],
    },
    {
      term: "Sapit",
      meaning: "Beside",
      pronunciation: "SAH-peet",
      usage: "From this lesson's word list: location and position words.",
      example: [
        {
          speaker: "A",
          text: "Oo, aada an tindahan ha sapit han amon balay.",
          translation: "Yes, the store is beside our house.",
        },
        {
          speaker: "B",
          text: "Maupay ngay-an an iyo lokasyon.",
          translation: "Your location is nice, then.",
        },
      ],
    },
    {
      term: "Sulod",
      meaning: "Inside",
      pronunciation: "SOO-lod",
      usage: "From this lesson's word list: location and position words.",
    },
    {
      term: "Gawas",
      meaning: "Outside",
      pronunciation: "GAH-wahs",
      usage: "From this lesson's word list: location and position words.",
    },
    {
      term: "Ibabaw",
      meaning: "Above",
      pronunciation: "ee-BAH-bahw",
      usage: "From this lesson's word list: location and position words.",
    },
    {
      term: "Ilarom",
      meaning: "Below",
      pronunciation: "ee-LAH-rom",
      usage: "From this lesson's word list: location and position words.",
    },
    {
      term: "Butnga",
      meaning: "Between",
      pronunciation: "boot-NGAH",
      usage: "From this lesson's word list: location and position words.",
    },
    {
      term: "Tabok",
      meaning: "Across",
      pronunciation: "tah-BOHK",
      usage: "From this lesson's word list: location and position words.",
      example: [
        {
          speaker: "",
          text: "Tabok ha dalan.",
          translation: "Cross the road.",
        },
      ],
    },
    {
      term: "Tuo",
      meaning: "Right",
      pronunciation: "TOO-oh",
      usage: "From this lesson's word list: location and position words.",
      example: [
        {
          speaker: "A",
          text: "Ano an akon bubuhaton kon makaabot ako ha merkado?",
          translation: "What should I do when I reach the market?",
        },
        {
          speaker: "B",
          text: "Liko ha tuo. Makikita mo an ospital.",
          translation: "Turn right. You will see the hospital.",
        },
      ],
    },
    {
      term: "Wala",
      meaning: "Left",
      pronunciation: "WAH-lah",
      usage: "From this lesson's word list: location and position words.",
      example: [
        {
          speaker: "A",
          text: "Paonan-o ako makadto didto?",
          translation: "How can I get there?",
        },
        {
          speaker: "B",
          text: "Diretso la, katapos liko ha wala.",
          translation: "Just go straight, then turn left.",
        },
      ],
    },
    {
      term: "Diretso",
      meaning: "Straight ahead",
      pronunciation: "dee-REHT-soh",
      usage: "From this lesson's word list: location and position words.",
      example: [
        {
          speaker: "A",
          text: "Paonan-o ako makadto didto?",
          translation: "How can I get there?",
        },
        {
          speaker: "B",
          text: "Diretso la, katapos liko ha wala.",
          translation: "Just go straight, then turn left.",
        },
      ],
    },
    {
      term: "Dinhi",
      meaning: "Here",
      pronunciation: "DEEN-hee",
      usage: "From this lesson's word list: location and position words.",
      example: [
        {
          speaker: "A",
          text: "Hirayo ba ito tikang dinhi?",
          translation: "Is it far from here?",
        },
        {
          speaker: "B",
          text: "Diri, hirani la ito.",
          translation: "No, it is just nearby.",
        },
      ],
    },
    {
      term: "Didto",
      meaning: "There",
      pronunciation: "DEED-toh",
      usage: "From this lesson's word list: location and position words.",
      example: [
        {
          speaker: "A",
          text: "Hirayo ba ito?",
          translation: "Is it far?",
        },
        {
          speaker: "B",
          text: "Diri, makakadto ka didto pinaagi hin paglakat.",
          translation: "No, you can get there by walking.",
        },
      ],
    },
    {
      term: "Kadto",
      meaning: "Go",
      pronunciation: "KAHD-toh",
      usage: "From this lesson's word list: direction and movement words.",
      example: [
        {
          speaker: "",
          text: "Kadto ha atubangan han eskwelahan.",
          translation: "Go to the front of the school.",
        },
      ],
    },
    {
      term: "Kadi",
      meaning: "Come",
      pronunciation: "kah-DEE",
      usage: "From this lesson's word list: direction and movement words.",
    },
    {
      term: "Liko",
      meaning: "Turn",
      pronunciation: "lee-KOH",
      usage: "From this lesson's word list: direction and movement words.",
      example: [
        {
          speaker: "A",
          text: "Liko ha tuo. Makikita mo an ospital.",
          translation: "Turn right. You will see the hospital.",
        },
        {
          speaker: "B",
          text: "Salamat ha imo bulig.",
          translation: "Thank you for your help.",
        },
      ],
    },
    {
      term: "Lakat",
      meaning: "Walk",
      pronunciation: "lah-KAHT",
      usage: "From this lesson's word list: direction and movement words.",
    },
    {
      term: "Tabok",
      meaning: "Cross",
      pronunciation: "tah-BOHK",
      usage: "From this lesson's word list: direction and movement words.",
      example: [
        {
          speaker: "",
          text: "Tabok ha dalan.",
          translation: "Cross the road.",
        },
      ],
    },
    {
      term: "Sunod",
      meaning: "Follow",
      pronunciation: "SOO-nod",
      usage: "From this lesson's word list: direction and movement words.",
    },
    {
      term: "Undang",
      meaning: "Stop",
      pronunciation: "oon-DAHNG",
      usage: "From this lesson's word list: direction and movement words.",
    },
    {
      term: "Padayon",
      meaning: "Continue",
      pronunciation: "pah-DAH-yohn",
      usage: "From this lesson's word list: direction and movement words.",
    },
    {
      term: "Sulod",
      meaning: "Enter",
      pronunciation: "SOO-lod",
      usage: "From this lesson's word list: direction and movement words.",
    },
    {
      term: "Gawas",
      meaning: "Exit / Go out",
      pronunciation: "GAH-wahs",
      usage: "From this lesson's word list: direction and movement words.",
    },
    {
      term: "Destinasyon",
      meaning: "Destination",
      pronunciation: "des-tee-nah-SYOHN",
      usage: "From this lesson's word list: direction and movement words.",
    },
    {
      term: "Direksyon",
      meaning: "Direction",
      pronunciation: "dee-rehk-SYOHN",
      usage: "From this lesson's word list: direction and movement words.",
      example: [
        {
          speaker: "",
          text: "Salamat ha paghatag hin direksyon.",
          translation: "Thank you for the directions.",
        },
      ],
    },
  ],
  greetings: [
    {
      term: "Kadto",
      meaning: "Go",
      pronunciation: "KAHD-toh",
      usage: "From this lesson's word list: direction and movement words.",
      example: [
        {
          speaker: "",
          text: "Kadto ha atubangan han eskwelahan.",
          translation: "Go to the front of the school.",
        },
      ],
    },
    {
      term: "Kadi",
      meaning: "Come",
      pronunciation: "kah-DEE",
      usage: "From this lesson's word list: direction and movement words.",
    },
    {
      term: "Liko",
      meaning: "Turn",
      pronunciation: "lee-KOH",
      usage: "From this lesson's word list: direction and movement words.",
      example: [
        {
          speaker: "A",
          text: "Liko ha tuo. Makikita mo an ospital.",
          translation: "Turn right. You will see the hospital.",
        },
        {
          speaker: "B",
          text: "Salamat ha imo bulig.",
          translation: "Thank you for your help.",
        },
      ],
    },
    {
      term: "Lakat",
      meaning: "Walk",
      pronunciation: "lah-KAHT",
      usage: "From this lesson's word list: direction and movement words.",
    },
    {
      term: "Tabok",
      meaning: "Cross",
      pronunciation: "tah-BOHK",
      usage: "From this lesson's word list: direction and movement words.",
      example: [
        {
          speaker: "",
          text: "Tabok ha dalan.",
          translation: "Cross the road.",
        },
      ],
    },
    {
      term: "Sunod",
      meaning: "Follow",
      pronunciation: "SOO-nod",
      usage: "From this lesson's word list: direction and movement words.",
    },
    {
      term: "Undang",
      meaning: "Stop",
      pronunciation: "oon-DAHNG",
      usage: "From this lesson's word list: direction and movement words.",
    },
    {
      term: "Padayon",
      meaning: "Continue",
      pronunciation: "pah-DAH-yohn",
      usage: "From this lesson's word list: direction and movement words.",
    },
    {
      term: "Sulod",
      meaning: "Enter",
      pronunciation: "SOO-lod",
      usage: "From this lesson's word list: direction and movement words.",
    },
    {
      term: "Gawas",
      meaning: "Exit / Go out",
      pronunciation: "GAH-wahs",
      usage: "From this lesson's word list: direction and movement words.",
    },
    {
      term: "Destinasyon",
      meaning: "Destination",
      pronunciation: "des-tee-nah-SYOHN",
      usage: "From this lesson's word list: direction and movement words.",
    },
    {
      term: "Direksyon",
      meaning: "Direction",
      pronunciation: "dee-rehk-SYOHN",
      usage: "From this lesson's word list: direction and movement words.",
      example: [
        {
          speaker: "",
          text: "Salamat ha paghatag hin direksyon.",
          translation: "Thank you for the directions.",
        },
      ],
    },
  ],
  patterns: [
    {
      label: "Pattern 1: Asking Where a Place Is",
      pattern: "Hain an + Place?",
      examples: [
        "Hain an eskwelahan?",
        "Hain an merkado?",
        "Hain an ospital?",
      ],
    },
    {
      label: "Pattern 2: Saying What It Is Beside",
      pattern: "Aada ito ha sapit han + Place.",
      examples: [
        "Aada ito ha sapit han singbahan.",
        "Aada ito ha sapit han botika.",
      ],
    },
    {
      label: "Pattern 3: Giving a Direction",
      pattern: "Liko ha + Direction.",
      examples: [
        "Liko ha tuo.",
        "Liko ha wala.",
      ],
    },
  ],
  sentences: [
    {
      text: "Hain an eskwelahan?",
      meaning: "Where is the school?",
      pronunciation: "HAH-in ahn es-kweh-LAH-hahn",
    },
    {
      text: "Hain an merkado?",
      meaning: "Where is the market?",
      pronunciation: "HAH-in ahn mehr-KAH-doh",
    },
    {
      text: "Paonan-o ako makadto didto?",
      meaning: "How can I get there?",
      pronunciation: "pah-oh-NAHN-oh AH-koh mah-kahd-TOH DEED-toh",
    },
    {
      text: "Hirayo ba ito tikang dinhi?",
      meaning: "Is it far from here?",
      pronunciation: "hee-RAH-yoh bah EE-toh tee-KAHNG DEEN-hee",
    },
    {
      text: "Hirani ba ito?",
      meaning: "Is it near?",
      pronunciation: "hee-RAH-nee bah EE-toh",
    },
    {
      text: "Diretso la.",
      meaning: "Go straight ahead. / Just go straight.",
      pronunciation: "dee-REHT-soh lah",
    },
    {
      text: "Liko ha tuo.",
      meaning: "Turn right.",
      pronunciation: "lee-KOH hah TOO-oh",
    },
    {
      text: "Liko ha wala.",
      meaning: "Turn left.",
      pronunciation: "lee-KOH hah WAH-lah",
    },
    {
      text: "Aada ito ha sapit han singbahan.",
      meaning: "It is beside the church.",
      pronunciation: "ah-AH-dah EE-toh hah SAH-peet hahn sing-BAH-hahn",
    },
    {
      text: "Aada ito ha atubangan han eskwelahan.",
      meaning: "It is in front of the school.",
      pronunciation: "ah-AH-dah EE-toh hah ah-too-BAH-ngahn hahn es-kweh-LAH-hahn",
    },
    {
      text: "An tindahan aada ha luyo han balay.",
      meaning: "The store is behind the house.",
      pronunciation: "ahn tin-DAH-hahn ah-AH-dah hah LOO-yoh hahn BAH-lai",
    },
    {
      text: "Alayon, pakita ha akon an dalan.",
      meaning: "Please show me the way.",
      pronunciation: "ah-LAH-yohn pah-kee-TAH hah AH-kohn ahn DAH-lahn",
    },
    {
      text: "Salamat ha paghatag hin direksyon.",
      meaning: "Thank you for the directions.",
      pronunciation: "sah-LAH-maht hah pahg-HAH-tahg heen dee-rehk-SYOHN",
    },
    {
      text: "Ginbibiling ko an ospital.",
      meaning: "I am looking for the hospital.",
      pronunciation: "gin-bee-BEE-ling koh ahn ohs-pee-TAHL",
    },
    {
      text: "Makadto ako ha merkado.",
      meaning: "I am going to the market.",
      pronunciation: "mah-kahd-TOH AH-koh hah mehr-KAH-doh",
    },
    {
      text: "Hain an ospital?",
      meaning: "Where is the hospital?",
    },
    {
      text: "Diin an imo balay?",
      meaning: "Where is your house?",
    },
    {
      text: "Aada an tindahan ha sapit han merkado.",
      meaning: "The store is beside the market.",
    },
    {
      text: "Aada an eskwelahan ha atubangan han parke.",
      meaning: "The school is in front of the park.",
    },
    {
      text: "Aada an iro ha luyo han balay.",
      meaning: "The dog is behind the house.",
    },
    {
      text: "Hirani an botika ha ospital.",
      meaning: "The pharmacy is near the hospital.",
    },
    {
      text: "Tabok ha dalan.",
      meaning: "Cross the road.",
    },
    {
      text: "Kadto ha atubangan han eskwelahan.",
      meaning: "Go to the front of the school.",
    },
    {
      text: "Hirani la an merkado.",
      meaning: "The market is just nearby.",
    },
    {
      text: "Hirayo an ospital.",
      meaning: "The hospital is far.",
    },
    {
      text: "Hirani ito ha eskwelahan.",
      meaning: "It is near the school.",
    },
    {
      text: "Diri ito hirayo tikang dinhi.",
      meaning: "It is not far from here.",
    },
    {
      text: "Pasayloa ako, nalilito ako ha dalan.",
      meaning: "Excuse me, I am confused about the way.",
    },
    {
      text: "Alayon, buligi ako pamiling han ospital.",
      meaning: "Please help me find the hospital.",
    },
    {
      text: "Diri ako maaram kon diin ako makadto.",
      meaning: "I do not know where to go.",
    },
    {
      text: "Pwede mo ba ako buligan?",
      meaning: "Can you help me?",
      audioUrl: require("../../assets/audio/Lesson Waray/puydi mo ba ako buligan.aac"),
    },
  ],
  conversations: [
    {
      title: "Conversation A: Finding the Market",
      lines: [
        {
          speaker: "Mark",
          text: "Pasayloa ako. Hain an merkado?",
          translation: "Excuse me. Where is the market?",
        },
        {
          speaker: "Resident",
          text: "Aada ito hirani ha singbahan.",
          translation: "It is near the church.",
        },
        {
          speaker: "Mark",
          text: "Paonan-o ako makadto didto?",
          translation: "How can I get there?",
        },
        {
          speaker: "Resident",
          text: "Diretso la, katapos liko ha wala.",
          translation: "Just go straight, then turn left.",
        },
        {
          speaker: "Mark",
          text: "Hirayo ba ito tikang dinhi?",
          translation: "Is it far from here?",
        },
        {
          speaker: "Resident",
          text: "Diri, hirani la ito.",
          translation: "No, it is just nearby.",
        },
        {
          speaker: "Mark",
          text: "Damo nga salamat!",
          translation: "Thank you very much!",
          audioUrl: require("../../assets/audio/Lesson Waray/damo nga salamat.aac"),
        },
        {
          speaker: "Resident",
          text: "Waray sapayan.",
          translation: "You're welcome.",
          audioUrl: require("../../assets/audio/Lesson Waray/waray sapayan.aac"),
        },
      ],
      situation: "Mark and Resident: Finding the Market.",
    },
    {
      title: "Conversation B: Looking for a Hospital",
      lines: [
        {
          speaker: "Ana",
          text: "Alayon, hain an ospital?",
          translation: "Please, where is the hospital?",
        },
        {
          speaker: "Ben",
          text: "Aada ito ha sapit han botika.",
          translation: "It is beside the pharmacy.",
        },
        {
          speaker: "Ana",
          text: "Hirayo ba ito?",
          translation: "Is it far?",
        },
        {
          speaker: "Ben",
          text: "Diri, makakadto ka didto pinaagi hin paglakat.",
          translation: "No, you can get there by walking.",
        },
        {
          speaker: "Ana",
          text: "Ano an akon bubuhaton kon makaabot ako ha merkado?",
          translation: "What should I do when I reach the market?",
        },
        {
          speaker: "Ben",
          text: "Liko ha tuo. Makikita mo an ospital.",
          translation: "Turn right. You will see the hospital.",
        },
        {
          speaker: "Ana",
          text: "Salamat ha imo bulig.",
          translation: "Thank you for your help.",
        },
        {
          speaker: "Ben",
          text: "Waray sapayan. Pag-amping!",
          translation: "You're welcome. Take care!",
        },
      ],
      situation: "Ana and Ben: Looking for a Hospital.",
    },
    {
      title: "Conversation C: Explaining Where a Place Is",
      lines: [
        {
          speaker: "Carlo",
          text: "Diin kamo naukoy?",
          translation: "Where do you live?",
        },
        {
          speaker: "Mia",
          text: "Nauukoy kami hirani ha baybayon.",
          translation: "We live near the beach.",
        },
        {
          speaker: "Carlo",
          text: "Hirayo ba ito tikang ha sentro han bungto?",
          translation: "Is it far from the town center?",
        },
        {
          speaker: "Mia",
          text: "Diri man. Diri ito hirayo.",
          translation: "Not really. It is not far.",
        },
        {
          speaker: "Carlo",
          text: "May tindahan ba hirani ha iyo balay?",
          translation: "Is there a store near your house?",
        },
        {
          speaker: "Mia",
          text: "Oo, aada an tindahan ha sapit han amon balay.",
          translation: "Yes, the store is beside our house.",
        },
        {
          speaker: "Carlo",
          text: "Maupay ngay-an an iyo lokasyon.",
          translation: "Your location is nice, then.",
        },
        {
          speaker: "Mia",
          text: "Oo, masayon la an pagkadto ha bungto.",
          translation: "Yes, it is easy to go to town.",
        },
      ],
      situation: "Carlo and Mia: Explaining Where a Place Is.",
    },
  ],
  languageNotes: [
    {
      title: "A. Asking Where a Place Is Located",
      body: [
        "When asking about the location of a place, you can use hain or diin, depending on the sentence and local usage.",
      ],
      examples: [
        {
          text: "Hain an eskwelahan?",
          meaning: "Where is the school?",
        },
        {
          text: "Hain an merkado?",
          meaning: "Where is the market?",
        },
        {
          text: "Hain an ospital?",
          meaning: "Where is the hospital?",
        },
        {
          text: "Diin an imo balay?",
          meaning: "Where is your house?",
        },
      ],
    },
    {
      title: "A. Asking Where a Place Is Located",
      body: [
        "You can also mention your destination when asking someone for directions.",
        "Pasayloa ako. Hain an botika?",
        "Excuse me. Where is the pharmacy?",
      ],
    },
    {
      title: "B. Describing the Location of Places",
      body: [
        "Use location words to explain where a place or object is situated.",
      ],
      examples: [
        {
          text: "Aada an tindahan ha sapit han merkado.",
          meaning: "The store is beside the market.",
        },
        {
          text: "Aada an eskwelahan ha atubangan han parke.",
          meaning: "The school is in front of the park.",
        },
        {
          text: "Aada an iro ha luyo han balay.",
          meaning: "The dog is behind the house.",
        },
        {
          text: "Hirani an botika ha ospital.",
          meaning: "The pharmacy is near the hospital.",
        },
      ],
    },
    {
      title: "B. Describing the Location of Places",
      body: [
        "The words ha, han, and other linking expressions help connect the location to the place being described. Their usage should be learned through complete examples rather than translated word-for-word.",
      ],
    },
    {
      title: "C. Giving Simple Directions",
      body: [
        "When giving directions, use short instructions that explain where a person should go.",
      ],
      examples: [
        {
          text: "Diretso la.",
          meaning: "Just go straight.",
        },
        {
          text: "Liko ha tuo.",
          meaning: "Turn right.",
        },
        {
          text: "Liko ha wala.",
          meaning: "Turn left.",
        },
        {
          text: "Tabok ha dalan.",
          meaning: "Cross the road.",
        },
        {
          text: "Kadto ha atubangan han eskwelahan.",
          meaning: "Go to the front of the school.",
        },
      ],
    },
    {
      title: "C. Giving Simple Directions",
      body: [
        "You can combine these expressions to provide more detailed directions.",
        "Diretso la, katapos liko ha tuo.",
        "Just go straight, then turn right.",
      ],
    },
    {
      title: "D. Explaining Distance",
      body: [
        "You can use distance-related words to tell someone whether a destination is near or far.",
      ],
      examples: [
        {
          text: "Hirani la an merkado.",
          meaning: "The market is just nearby.",
        },
        {
          text: "Hirayo an ospital.",
          meaning: "The hospital is far.",
        },
        {
          text: "Hirani ito ha eskwelahan.",
          meaning: "It is near the school.",
        },
        {
          text: "Diri ito hirayo tikang dinhi.",
          meaning: "It is not far from here.",
        },
      ],
    },
    {
      title: "D. Explaining Distance",
      body: [
        "These expressions are useful when someone asks whether a place can be reached by walking or needs transportation.",
      ],
    },
    {
      title: "E. Asking for Help When Lost",
      body: [
        "When you do not know where to go, you can politely ask another person for assistance.",
      ],
      examples: [
        {
          text: "Pasayloa ako, nalilito ako ha dalan.",
          meaning: "Excuse me, I am confused about the way.",
        },
        {
          text: "Alayon, buligi ako pamiling han ospital.",
          meaning: "Please help me find the hospital.",
        },
        {
          text: "Diri ako maaram kon diin ako makadto.",
          meaning: "I do not know where to go.",
        },
        {
          text: "Pwede mo ba ako buligan?",
          meaning: "Can you help me?",
        },
      ],
    },
    {
      title: "E. Asking for Help When Lost",
      body: [
        "Remember to use polite greetings and expressions of gratitude when asking strangers for directions.",
      ],
    },
    {
      title: "Useful Phrases and Sentences",
      body: [
        "Study these expressions to learn how to ask about locations and give directions.",
      ],
    },
  ],
  inferredFields: [
    "situation",
    "usage",
    "example",
    "pattern",
    "fill-in",
    "arrange",
    "speaking phrase",
    "target pitch and mood",
    "respelling",
    "example situation",
    "pronunciation tip",
    "completion requirement",
  ],
};
