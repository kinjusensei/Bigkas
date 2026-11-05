import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 29 — imported from "Lesson Plan.pdf", pages 1119–1139.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
// Fields not given by the plan are INFERRED from this lesson's own content and
// listed in docs/waray-inferred-keys.md: situation, usage, example, pattern, match, arrange, speaking phrase, respelling, target pitch and mood, example situation, pronunciation tip, completion requirement.
// The practice answers are INFERRED drafts, not from the PDF. See
// docs/waray-draft-answer-keys.md for each answer and how it was found.

export const warayLesson29: StructuredLesson = {
  lessonId: "waray_29",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 29,
  title: "Situational Dialogues and Role-Playing",
  level: "Advanced",
  unit: "Unit 3 – Real-Life Communication",
  estimatedDuration: "45–60 minutes",
  prerequisite: "Lessons 21–28",
  languageVariety: "Contemporary Waray spoken in Western Samar",
  intro: [
    "Language learning becomes more meaningful when learners can use what they have learned in actual situations.",
    "Knowing vocabulary and grammar is important, but learners must also know how to respond when someone asks for directions, when they need assistance, when they meet unfamiliar people, or when they encounter unexpected situations.",
    "In this lesson, learners will practice Waray through situational dialogues and role-playing activities. Each scenario presents a practical communication challenge that requires learners to understand the situation, choose appropriate expressions, and respond naturally.",
    "The activities are designed to help learners become more confident using Waray in everyday conversations.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Apply previously learned Waray vocabulary and expressions in realistic situations.",
    "Participate in conversations involving travel, emergencies, social interactions, and community activities.",
    "Ask and answer questions appropriately depending on the situation.",
    "Make requests, provide information, and explain problems using Waray.",
    "Demonstrate appropriate conversational responses through role-playing activities.",
    "Communicate more independently using complete sentences and context-appropriate expressions.",
  ],
  assessment: {
    instructions: "Choose the best answer for each question.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What does Pira an plete? mean?",
        options: [
          {
            key: "A",
            text: "How much is the fare?",
          },
          {
            key: "B",
            text: "Where is the terminal?",
          },
          {
            key: "C",
            text: "When will we arrive?",
          },
          {
            key: "D",
            text: "Who is the driver?",
          },
        ],
        answerKey: "A",
      },
      {
        id: 2,
        prompt: "Which expression means \"I need help\"?",
        options: [
          {
            key: "A",
            text: "Kinahanglan ko hin bulig.",
          },
          {
            key: "B",
            text: "Nalilipay ako.",
          },
          {
            key: "C",
            text: "Maupay nga aga.",
          },
          {
            key: "D",
            text: "Dako an balay.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 3,
        prompt: "What does Nawara ako mean?",
        options: [
          {
            key: "A",
            text: "I am lost.",
          },
          {
            key: "B",
            text: "I am hungry.",
          },
          {
            key: "C",
            text: "I am tired.",
          },
          {
            key: "D",
            text: "I am happy.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 4,
        prompt: "Which expression is appropriate when meeting someone new?",
        options: [
          {
            key: "A",
            text: "Nalilipay ako nga makilala ka.",
          },
          {
            key: "B",
            text: "Pira an plete?",
          },
          {
            key: "C",
            text: "Hain an ospital?",
          },
          {
            key: "D",
            text: "May aksidente nga nahitabo.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 5,
        prompt: "What does Sige, maupod ako mean?",
        options: [
          {
            key: "A",
            text: "All right, I will come along.",
          },
          {
            key: "B",
            text: "I do not understand.",
          },
          {
            key: "C",
            text: "I need more time.",
          },
          {
            key: "D",
            text: "I am going home.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 6,
        prompt: "Which expression asks for the location of the nearest hospital?",
        options: [
          {
            key: "A",
            text: "Hain an pinakahirani nga ospital?",
          },
          {
            key: "B",
            text: "Pira an imo edad?",
          },
          {
            key: "C",
            text: "Ano an imo karuyag?",
          },
          {
            key: "D",
            text: "San-o an mitin?",
          },
        ],
        answerKey: "A",
      },
      {
        id: 7,
        prompt: "What should you do when you do not understand someone's response?",
        options: [
          {
            key: "A",
            text: "Politely ask the person to repeat or explain.",
          },
          {
            key: "B",
            text: "Ignore the person.",
          },
          {
            key: "C",
            text: "Change the subject immediately.",
          },
          {
            key: "D",
            text: "End the conversation without explanation.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 8,
        prompt: "Which situation requires immediate and clear communication?",
        options: [
          {
            key: "A",
            text: "Reporting an accident.",
          },
          {
            key: "B",
            text: "Discussing a favorite color.",
          },
          {
            key: "C",
            text: "Describing a book.",
          },
          {
            key: "D",
            text: "Talking about a hobby.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 9,
        prompt: "Why should learners practice situational dialogues?",
        options: [
          {
            key: "A",
            text: "To apply language skills in realistic conversations.",
          },
          {
            key: "B",
            text: "To memorize unrelated words.",
          },
          {
            key: "C",
            text: "To avoid speaking with other people.",
          },
          {
            key: "D",
            text: "To eliminate the need for listening.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 10,
        prompt: "What is an important part of a successful conversation?",
        options: [
          {
            key: "A",
            text: "Listening and responding appropriately.",
          },
          {
            key: "B",
            text: "Speaking without considering the situation.",
          },
          {
            key: "C",
            text: "Avoiding all questions.",
          },
          {
            key: "D",
            text: "Using the same response in every situation.",
          },
        ],
        answerKey: "A",
      },
    ],
  },
  extraActivities: [
    {
      title: "Identify the Situation",
      kind: "choice",
      instructions: "Read each situation and identify the most appropriate communication goal.",
      items: [
        "You are visiting an unfamiliar town and need to find the bus terminal.",
        "You see someone injured after an accident.",
        "You are introduced to a new neighbor.",
        "You want to participate in a community clean-up activity.",
        "You lost your wallet and want to ask someone for assistance.",
      ],
      note: "Choose from:\n• Asking for directions\n• Requesting emergency assistance\n• Introducing yourself\n• Participating in a community activity\n• Reporting a lost belonging",
    },
    {
      title: "Situational Role-Playing",
      kind: "roleplay",
      instructions: "Work with a partner. Choose one scenario and create a Waray dialogue.\nScenario 1: Tourist Asking for Directions\nOne learner acts as a visitor, while the other acts as a local resident. The visitor asks about a destination, transportation, and fare.\nScenario 2: Reporting an Emergency\nOne learner explains an emergency situation, while the other responds by asking relevant questions and helping identify where assistance is needed.\nScenario 3: Meeting New People\nTwo learners meet at a community gathering. They introduce themselves, ask about each other, and discuss the activity.\nScenario 4: Community Participation\nOne learner acts as an organizer, while the other acts as a volunteer. They discuss responsibilities, materials, and schedules.\nScenario 5: Lost Belongings\nOne learner has lost an important belonging and asks another person for help finding it.\nEach role-play should include:",
      items: [
        "At least six exchanges.",
        "At least five expressions from this lesson.",
        "At least two follow-up questions.",
        "Appropriate greetings and responses.",
        "A clear conclusion to the conversation.",
      ],
    },
  ],
  choiceActivity: {
    title: "Choose the Appropriate Response",
    instructions: "Select the best response for each situation.",
    questions: [
      {
        id: 1,
        prompt: "Someone asks, \"Hain an terminal?\"",
        options: [
          {
            key: "A",
            text: "Aada ito hirani ha merkado.",
          },
          {
            key: "B",
            text: "Lami an pagkaon.",
          },
          {
            key: "C",
            text: "Malipayon ako.",
          },
          {
            key: "D",
            text: "Pira an imo edad?",
          },
        ],
        answerKey: "A",
      },
      {
        id: 2,
        prompt: "You need help because someone is injured.",
        options: [
          {
            key: "A",
            text: "Kinahanglan namon hin bulig. May usa nga nasamaran.",
          },
          {
            key: "B",
            text: "Karuyag ko kumaon.",
          },
          {
            key: "C",
            text: "Maupay nga gab-i.",
          },
          {
            key: "D",
            text: "Hain an eskwelahan?",
          },
        ],
        answerKey: "A",
      },
      {
        id: 3,
        prompt: "Someone invites you to a community activity.",
        options: [
          {
            key: "A",
            text: "Sige, maupod ako.",
          },
          {
            key: "B",
            text: "Diri ako maaram han imo ngaran.",
          },
          {
            key: "C",
            text: "Pira ini?",
          },
          {
            key: "D",
            text: "Waray ako pagkaon.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 4,
        prompt: "You want to ask how much transportation costs.",
        options: [
          {
            key: "A",
            text: "Pira an plete?",
          },
          {
            key: "B",
            text: "Hain an imo balay?",
          },
          {
            key: "C",
            text: "Ano an imo trabaho?",
          },
          {
            key: "D",
            text: "San-o an imo birthday?",
          },
        ],
        answerKey: "A",
      },
      {
        id: 5,
        prompt: "You want someone to repeat what they said.",
        options: [
          {
            key: "A",
            text: "Mahimo mo ba utrahon?",
          },
          {
            key: "B",
            text: "Nalilipay ako.",
          },
          {
            key: "C",
            text: "Salamat ha pagkaon.",
          },
          {
            key: "D",
            text: "Taga diin ka?",
          },
        ],
        answerKey: "A",
      },
    ],
  },
  fillInBlanks: {
    title: "Complete the Dialogue",
    instructions: "Complete each dialogue using the expressions from the word bank.",
    items: [
      {
        id: "1",
        sentence: "A: Maupay nga kulop! Bag-o ka ba dinhi? B: Oo, bag-o pa la ako dinhi. __________________________",
        answer: "Nalilipay ako nga makilala ka.",
        title: "Complete the Dialogue",
        instructions: "Complete each dialogue using the expressions from the word bank.",
        wordBank: [
          "Hain an pinakahirani nga ospital?",
          "Sige, maupod ako.",
          "Pira an plete?",
          "Kinahanglan ko hin bulig.",
          "Nalilipay ako nga makilala ka.",
        ],
      },
      {
        id: "2",
        sentence: "A: Karuyag mo ba umupod ha amon ha programa? B: __________________________",
        answer: "Sige, maupod ako.",
        title: "Complete the Dialogue",
        instructions: "Complete each dialogue using the expressions from the word bank.",
        wordBank: [
          "Hain an pinakahirani nga ospital?",
          "Sige, maupod ako.",
          "Pira an plete?",
          "Kinahanglan ko hin bulig.",
          "Nalilipay ako nga makilala ka.",
        ],
      },
      {
        id: "3",
        sentence: "A: Paonan-o ka makadto ha bungto? B: Sakay ako hin traysikol. __________________________",
        answer: "Pira an plete?",
        title: "Complete the Dialogue",
        instructions: "Complete each dialogue using the expressions from the word bank.",
        wordBank: [
          "Hain an pinakahirani nga ospital?",
          "Sige, maupod ako.",
          "Pira an plete?",
          "Kinahanglan ko hin bulig.",
          "Nalilipay ako nga makilala ka.",
        ],
      },
      {
        id: "4",
        sentence: "A: Ano an nahitabo? B: Nawara an akon pitaka. __________________________",
        answer: "Kinahanglan ko hin bulig.",
        title: "Complete the Dialogue",
        instructions: "Complete each dialogue using the expressions from the word bank.",
        wordBank: [
          "Hain an pinakahirani nga ospital?",
          "Sige, maupod ako.",
          "Pira an plete?",
          "Kinahanglan ko hin bulig.",
          "Nalilipay ako nga makilala ka.",
        ],
      },
      {
        id: "5",
        sentence: "A: May usa nga nasamaran. Diin kami makakadto? B: __________________________",
        answer: "Hain an pinakahirani nga ospital?",
        title: "Complete the Dialogue",
        instructions: "Complete each dialogue using the expressions from the word bank.",
        wordBank: [
          "Hain an pinakahirani nga ospital?",
          "Sige, maupod ako.",
          "Pira an plete?",
          "Kinahanglan ko hin bulig.",
          "Nalilipay ako nga makilala ka.",
        ],
      },
    ],
  },
  answerKeysInferred: true,
  rewards: {
    items: [
      {
        section: "vocabulary",
        label: "Vocabulary Review",
        xp: 10,
      },
      {
        section: "sentences",
        label: "Situation Recognition",
        xp: 10,
      },
      {
        section: "conversation",
        label: "Guided Conversations + Role-Playing Activities",
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
      name: "Real-Life Communicator Badge",
      description: "Awarded to learners who demonstrate the ability to apply Waray expressions in practical, everyday situations.",
    },
    completionRequirement: "Obtain at least 70% in the lesson assessment. Learners may repeat the activities and assessment if they do not meet the requirement.",
  },
  expectedOutcomes: [
    "Apply Waray vocabulary in realistic situations.",
    "Ask for directions and travel information.",
    "Request assistance and communicate basic emergency information.",
    "Participate in social and community conversations.",
    "Respond appropriately to questions and invitations.",
    "Maintain conversations using relevant expressions and follow-up questions.",
    "Lesson Completion Criteria:",
    "Complete the vocabulary review.",
    "Finish all situation-recognition activities.",
    "Complete the guided conversation exercises.",
    "Participate in at least one role-playing activity.",
    "Obtain at least 70% in the lesson assessment.",
    "Earn up to 60 XP and unlock the Real-Life Communicator Badge.",
  ],
  matchActivity: {
    title: "Match the Words",
    instructions: "Match the Waray expression with its English meaning.",
    pairs: [
      {
        id: "1",
        term: "Bulig",
        answer: "Help",
      },
      {
        id: "2",
        term: "Tumawag",
        answer: "To call",
      },
      {
        id: "3",
        term: "Kalayo",
        answer: "Fire",
      },
      {
        id: "4",
        term: "Pamiling",
        answer: "To look for",
      },
      {
        id: "5",
        term: "Komunidad",
        answer: "Community",
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
          "an",
          "Hain",
          "terminal",
        ],
        answer: [
          "Hain",
          "an",
          "terminal",
        ],
        display: "Hain an terminal?",
      },
      {
        id: "2",
        words: [
          "ako",
          "didto",
          "Paonan-o",
          "makakadto",
        ],
        answer: [
          "Paonan-o",
          "ako",
          "makakadto",
          "didto",
        ],
        display: "Paonan-o ako makakadto didto?",
      },
      {
        id: "3",
        words: [
          "plete",
          "Pira",
          "an",
        ],
        answer: [
          "Pira",
          "an",
          "plete",
        ],
        display: "Pira an plete?",
      },
      {
        id: "4",
        words: [
          "lumusad",
          "Hain",
          "dapat",
          "ako",
        ],
        answer: [
          "Hain",
          "ako",
          "dapat",
          "lumusad",
        ],
        display: "Hain ako dapat lumusad?",
      },
      {
        id: "5",
        words: [
          "ako",
          "makaabot",
          "Alayon",
          "kita",
          "na",
          "kon",
          "sumati",
        ],
        answer: [
          "Alayon",
          "sumati",
          "ako",
          "kon",
          "makaabot",
          "na",
          "kita",
        ],
        display: "Alayon, sumati ako kon makaabot na kita.",
      },
    ],
  },
  speaking: {
    title: "Speaking Practice",
    instructions: "Read the following sentences aloud.",
    note: "Learners should listen to the model pronunciation before recording their own voice.",
    practiceLessonId: "waray_29",
    phrases: [
      {
        id: "1",
        text: "Hain an terminal?",
        respelling: "hah-in an tehr-mee-nahl",
        meaning: "Where is the terminal?",
      },
      {
        id: "2",
        text: "Alayon, sumati ako kon makaabot na kita.",
        respelling: "a-la-yon su-ma-ti a-ko kon ma-ka-a-bot na ki-ta",
        meaning: "Please tell me when we arrive.",
      },
      {
        id: "3",
        text: "May aksidente nga nahitabo.",
        respelling: "may ak-si-den-te nga nah-hee-tah-boh",
        meaning: "There has been an accident.",
      },
      {
        id: "4",
        text: "Nawara ako.",
        respelling: "na-wa-ra a-ko",
        meaning: "I am lost.",
      },
      {
        id: "5",
        text: "Kay ano nga aanhi ka?",
        respelling: "kai a-no nga a-an-hi ka",
        meaning: "What brings you here?",
      },
      {
        id: "6",
        text: "Sulod la, alayon.",
        respelling: "soo-lod la a-la-yon",
        meaning: "Please come in.",
      },
      {
        id: "7",
        text: "Kinahanglan namon hin mga boluntaryo.",
        respelling: "kee-nahng-lahn na-mon hin ma-nga bo-lun-tar-yo",
        meaning: "We need volunteers.",
      },
    ],
  },
  exampleSituation: {
    description: "Imagine this situation from the lesson: Asking for Directions.",
    lead: "You can begin by saying:",
    line: "Pasayloa ako. Hain an terminal?",
    translation: "Excuse me. Where is the terminal?",
  },
  vocabularyIntro: "Learn the following words and expressions before proceeding to the activities.",
  pronunciationTip: "Read each syllable clearly. Avoid rushing through longer expressions.",
  selfIntroIntro: "Use these patterns and phrases from the lesson.",
  vocabulary: [
    {
      term: "Biyahe",
      meaning: "Travel",
      pronunciation: "Bi-ya-he",
      usage: "From this lesson's word list: travel and transportation.",
    },
    {
      term: "Pasahero",
      meaning: "Passenger",
      pronunciation: "Pa-sa-he-ro",
      usage: "From this lesson's word list: travel and transportation.",
    },
    {
      term: "Drayber",
      meaning: "Driver",
      pronunciation: "Dray-ber",
      usage: "From this lesson's word list: travel and transportation.",
      example: [
        {
          speaker: "A",
          text: "Salamat. Pira an plete ngadto ha sentro han bungto?",
          translation: "Thank you. How much is the fare to the town center?",
        },
        {
          speaker: "B",
          text: "Mas maupay nga pakianhan mo an drayber.",
          translation: "It would be better to ask the driver.",
        },
      ],
    },
    {
      term: "Salakyan",
      meaning: "Vehicle",
      pronunciation: "Sa-lak-yan",
      usage: "From this lesson's word list: travel and transportation.",
      example: [
        {
          speaker: "",
          text: "Makadto ba ini nga salakyan ha sentro han bungto?",
          translation: "Does this vehicle go to the town center?",
        },
      ],
    },
    {
      term: "Bus",
      meaning: "Bus",
      pronunciation: "Bus",
      usage: "From this lesson's word list: travel and transportation.",
    },
    {
      term: "Dyip",
      meaning: "Jeepney",
      pronunciation: "Dyip",
      usage: "From this lesson's word list: travel and transportation.",
    },
    {
      term: "Traysikol",
      meaning: "Tricycle",
      pronunciation: "Tray-si-kol",
      usage: "From this lesson's word list: travel and transportation.",
    },
    {
      term: "Sakayan / baroto",
      meaning: "Boat",
      pronunciation: "Sa-ka-yan / Ba-ro-to",
      usage: "From this lesson's word list: travel and transportation.",
    },
    {
      term: "Tiket",
      meaning: "Ticket",
      pronunciation: "Ti-ket",
      usage: "From this lesson's word list: travel and transportation.",
    },
    {
      term: "Plete",
      meaning: "Fare",
      pronunciation: "Ple-te",
      usage: "From this lesson's word list: travel and transportation.",
      example: [
        {
          speaker: "A",
          text: "Oo, diri ito hirayo.",
          translation: "Yes, it is not far.",
        },
        {
          speaker: "B",
          text: "Salamat. Pira an plete ngadto ha sentro han bungto?",
          translation: "Thank you. How much is the fare to the town center?",
        },
      ],
    },
    {
      term: "Destinasyon",
      meaning: "Destination",
      pronunciation: "Des-ti-na-syon",
      usage: "From this lesson's word list: travel and transportation.",
    },
    {
      term: "Terminal",
      meaning: "Terminal",
      pronunciation: "Ter-mi-nal",
      usage: "From this lesson's word list: travel and transportation.",
      example: [
        {
          speaker: "A",
          text: "Pasayloa ako. Hain an terminal?",
          translation: "Excuse me. Where is the terminal?",
        },
        {
          speaker: "B",
          text: "Aada ito hirani ha merkado.",
          translation: "It is near the market.",
        },
      ],
    },
    {
      term: "Pagbiyahe",
      meaning: "Departure",
      pronunciation: "Pag-bi-ya-he",
      usage: "From this lesson's word list: travel and transportation.",
    },
    {
      term: "Pag-abot",
      meaning: "Arrival",
      pronunciation: "Pag-a-bot",
      usage: "From this lesson's word list: travel and transportation.",
    },
    {
      term: "Dalan",
      meaning: "Road",
      pronunciation: "Da-lan",
      usage: "From this lesson's word list: travel and transportation.",
    },
    {
      term: "Emerhensya",
      meaning: "Emergency",
      pronunciation: "E-mer-hen-sya",
      usage: "From this lesson's word list: emergency and assistance.",
    },
    {
      term: "Bulig",
      meaning: "Help",
      pronunciation: "Bu-lig",
      usage: "From this lesson's word list: emergency and assistance.",
      example: [
        {
          speaker: "A",
          text: "Alayon, kinahanglan ko hin bulig.",
          translation: "Please, I need help.",
        },
        {
          speaker: "B",
          text: "Ano an nahitabo?",
          translation: "What happened?",
        },
      ],
    },
    {
      term: "Ospital",
      meaning: "Hospital",
      pronunciation: "Os-pi-tal",
      usage: "From this lesson's word list: emergency and assistance.",
      example: [
        {
          speaker: "",
          text: "Hain an pinakahirani nga ospital?",
          translation: "Where is the nearest hospital?",
        },
      ],
    },
    {
      term: "Klinika",
      meaning: "Clinic",
      pronunciation: "Kli-ni-ka",
      usage: "From this lesson's word list: emergency and assistance.",
    },
    {
      term: "Pulis",
      meaning: "Police",
      pronunciation: "Pu-lis",
      usage: "From this lesson's word list: emergency and assistance.",
      example: [
        {
          speaker: "",
          text: "Alayon, tawagi an pulis.",
          translation: "Please call the police.",
        },
      ],
    },
    {
      term: "Kalayo",
      meaning: "Fire",
      pronunciation: "Ka-la-yo",
      usage: "From this lesson's word list: emergency and assistance.",
    },
    {
      term: "Aksidente",
      meaning: "Accident",
      pronunciation: "Ak-si-den-te",
      usage: "From this lesson's word list: emergency and assistance.",
      example: [
        {
          speaker: "",
          text: "May aksidente nga nahitabo.",
          translation: "There has been an accident.",
        },
      ],
    },
    {
      term: "Samad",
      meaning: "Injury",
      pronunciation: "Sa-mad",
      usage: "From this lesson's word list: emergency and assistance.",
    },
    {
      term: "Nawara",
      meaning: "Lost",
      pronunciation: "Na-wa-ra",
      usage: "From this lesson's word list: emergency and assistance.",
      example: [
        {
          speaker: "A",
          text: "Ano an nahitabo?",
          translation: "What happened?",
        },
        {
          speaker: "B",
          text: "Nawara an akon pitaka.",
          translation: "My wallet is missing.",
        },
      ],
    },
    {
      term: "Bulong",
      meaning: "Medicine",
      pronunciation: "Bu-long",
      usage: "From this lesson's word list: emergency and assistance.",
    },
    {
      term: "Doktor",
      meaning: "Doctor",
      pronunciation: "Dok-tor",
      usage: "From this lesson's word list: emergency and assistance.",
      example: [
        {
          speaker: "",
          text: "May doktor ba dinhi?",
          translation: "Is there a doctor here?",
        },
      ],
    },
    {
      term: "Telepono",
      meaning: "Telephone",
      pronunciation: "Te-le-po-no",
      usage: "From this lesson's word list: emergency and assistance.",
    },
    {
      term: "Adres",
      meaning: "Address",
      pronunciation: "Ad-res",
      usage: "From this lesson's word list: emergency and assistance.",
    },
    {
      term: "Luwas",
      meaning: "Safe",
      pronunciation: "Lu-was",
      usage: "From this lesson's word list: emergency and assistance.",
    },
    {
      term: "Peligro",
      meaning: "Danger",
      pronunciation: "Pe-lig-ro",
      usage: "From this lesson's word list: emergency and assistance.",
    },
    {
      term: "Sangkay-balay / amyaw",
      meaning: "Neighbor",
      pronunciation: "Sang-kay-ba-lay / Am-yaw",
      usage: "From this lesson's word list: social and community interactions.",
    },
    {
      term: "Bisita",
      meaning: "Visitor",
      pronunciation: "Bi-si-ta",
      usage: "From this lesson's word list: social and community interactions.",
      example: [
        {
          speaker: "A",
          text: "Oo, karuyag ko umupod.",
          translation: "Yes, I would like to join.",
        },
        {
          speaker: "B",
          text: "Sige. Ipapakilala ko ikaw ha iba nga mga bisita.",
          translation: "All right. I will introduce you to the other guests.",
        },
      ],
    },
    {
      term: "Bisita",
      meaning: "Guest",
      pronunciation: "Bi-si-ta",
      usage: "From this lesson's word list: social and community interactions.",
      example: [
        {
          speaker: "A",
          text: "Oo, karuyag ko umupod.",
          translation: "Yes, I would like to join.",
        },
        {
          speaker: "B",
          text: "Sige. Ipapakilala ko ikaw ha iba nga mga bisita.",
          translation: "All right. I will introduce you to the other guests.",
        },
      ],
    },
    {
      term: "Komunidad",
      meaning: "Community",
      pronunciation: "Ko-mu-ni-dad",
      usage: "From this lesson's word list: social and community interactions.",
      example: [
        {
          speaker: "",
          text: "Taga dinhi ka ba nga komunidad?",
          translation: "Are you from this community?",
        },
      ],
    },
    {
      term: "Selebrasyon",
      meaning: "Celebration",
      pronunciation: "Se-le-bra-syon",
      usage: "From this lesson's word list: social and community interactions.",
    },
    {
      term: "Katitirok",
      meaning: "Gathering",
      pronunciation: "Ka-ti-ti-rok",
      usage: "From this lesson's word list: social and community interactions.",
    },
    {
      term: "Imbitasyon",
      meaning: "Invitation",
      pronunciation: "Im-bi-ta-syon",
      usage: "From this lesson's word list: social and community interactions.",
    },
    {
      term: "Kooperasyon",
      meaning: "Cooperation",
      pronunciation: "Ko-o-pe-ra-syon",
      usage: "From this lesson's word list: social and community interactions.",
    },
    {
      term: "Anunsyo",
      meaning: "Announcement",
      pronunciation: "A-nun-syo",
      usage: "From this lesson's word list: social and community interactions.",
    },
    {
      term: "Mitin",
      meaning: "Meeting",
      pronunciation: "Mi-tin",
      usage: "From this lesson's word list: social and community interactions.",
      example: [
        {
          speaker: "",
          text: "Hain pagdudumaraon an mitin?",
          translation: "Where will the meeting be held?",
        },
      ],
    },
    {
      term: "Bulig",
      meaning: "Assistance",
      pronunciation: "Bu-lig",
      usage: "From this lesson's word list: social and community interactions.",
      example: [
        {
          speaker: "A",
          text: "Aton pakianhan an parabaligya.",
          translation: "Let us ask the seller.",
        },
        {
          speaker: "B",
          text: "Salamat gud ha imo bulig.",
          translation: "Thank you very much for your help.",
        },
      ],
    },
    {
      term: "Respeto",
      meaning: "Respect",
      pronunciation: "Res-pe-to",
      usage: "From this lesson's word list: social and community interactions.",
    },
    {
      term: "Magpakiana",
      meaning: "To ask",
      pronunciation: "Mag-pa-ki-a-na",
      usage: "From this lesson's word list: useful action words.",
    },
    {
      term: "Bumaton",
      meaning: "To answer",
      pronunciation: "Bu-ma-ton",
      usage: "From this lesson's word list: useful action words.",
    },
    {
      term: "Magsaysay",
      meaning: "To explain",
      pronunciation: "Mag-say-say",
      usage: "From this lesson's word list: useful action words.",
    },
    {
      term: "Bilingon / bilngon",
      meaning: "To find",
      pronunciation: "Bi-ling-on / Bil-ngon",
      usage: "From this lesson's word list: useful action words.",
    },
    {
      term: "Pamiling",
      meaning: "To look for",
      pronunciation: "Pa-mi-ling",
      usage: "From this lesson's word list: useful action words.",
    },
    {
      term: "Maghulat",
      meaning: "To wait",
      pronunciation: "Mag-hu-lat",
      usage: "From this lesson's word list: useful action words.",
    },
    {
      term: "Umupod",
      meaning: "To accompany",
      pronunciation: "U-mu-pod",
      usage: "From this lesson's word list: useful action words.",
      example: [
        {
          speaker: "A",
          text: "Nalilipay liwat ako nga makilala ka.",
          translation: "I am also happy to meet you.",
        },
        {
          speaker: "B",
          text: "May programa kami yana. Karuyag mo ba umupod?",
          translation: "We have a program today. Would you like to join us?",
        },
      ],
    },
    {
      term: "Mag-imbitar",
      meaning: "To invite",
      pronunciation: "Mag-im-bi-tar",
      usage: "From this lesson's word list: useful action words.",
    },
    {
      term: "Tumawag",
      meaning: "To call",
      pronunciation: "Tu-ma-wag",
      usage: "From this lesson's word list: useful action words.",
    },
    {
      term: "Magreport",
      meaning: "To report",
      pronunciation: "Mag-re-port",
      usage: "From this lesson's word list: useful action words.",
    },
    {
      term: "Maggiya",
      meaning: "To guide",
      pronunciation: "Mag-gi-ya",
      usage: "From this lesson's word list: useful action words.",
    },
    {
      term: "Bumulig",
      meaning: "To assist",
      pronunciation: "Bu-mu-lig",
      usage: "From this lesson's word list: useful action words.",
    },
  ],
  greetings: [
    {
      term: "Magpakiana",
      meaning: "To ask",
      pronunciation: "Mag-pa-ki-a-na",
      usage: "From this lesson's word list: useful action words.",
    },
    {
      term: "Bumaton",
      meaning: "To answer",
      pronunciation: "Bu-ma-ton",
      usage: "From this lesson's word list: useful action words.",
    },
    {
      term: "Magsaysay",
      meaning: "To explain",
      pronunciation: "Mag-say-say",
      usage: "From this lesson's word list: useful action words.",
    },
    {
      term: "Bilingon / bilngon",
      meaning: "To find",
      pronunciation: "Bi-ling-on / Bil-ngon",
      usage: "From this lesson's word list: useful action words.",
    },
    {
      term: "Pamiling",
      meaning: "To look for",
      pronunciation: "Pa-mi-ling",
      usage: "From this lesson's word list: useful action words.",
    },
    {
      term: "Maghulat",
      meaning: "To wait",
      pronunciation: "Mag-hu-lat",
      usage: "From this lesson's word list: useful action words.",
    },
    {
      term: "Umupod",
      meaning: "To accompany",
      pronunciation: "U-mu-pod",
      usage: "From this lesson's word list: useful action words.",
      example: [
        {
          speaker: "A",
          text: "Nalilipay liwat ako nga makilala ka.",
          translation: "I am also happy to meet you.",
        },
        {
          speaker: "B",
          text: "May programa kami yana. Karuyag mo ba umupod?",
          translation: "We have a program today. Would you like to join us?",
        },
      ],
    },
    {
      term: "Mag-imbitar",
      meaning: "To invite",
      pronunciation: "Mag-im-bi-tar",
      usage: "From this lesson's word list: useful action words.",
    },
    {
      term: "Tumawag",
      meaning: "To call",
      pronunciation: "Tu-ma-wag",
      usage: "From this lesson's word list: useful action words.",
    },
    {
      term: "Magreport",
      meaning: "To report",
      pronunciation: "Mag-re-port",
      usage: "From this lesson's word list: useful action words.",
    },
    {
      term: "Maggiya",
      meaning: "To guide",
      pronunciation: "Mag-gi-ya",
      usage: "From this lesson's word list: useful action words.",
    },
    {
      term: "Bumulig",
      meaning: "To assist",
      pronunciation: "Bu-mu-lig",
      usage: "From this lesson's word list: useful action words.",
    },
  ],
  patterns: [
    {
      label: "Pattern 1: Asking Where",
      pattern: "Hain an + Place?",
      examples: [
        "Hain an terminal?",
        "Hain an pinakahirani nga ospital?",
      ],
    },
    {
      label: "Pattern 2: Asking for Help",
      pattern: "Alayon, + Request.",
      examples: [
        "Alayon, buligi ako!",
        "Alayon, tawagi an pulis.",
        "Alayon, kalma la anay.",
      ],
    },
    {
      label: "Pattern 3: Thanking Someone",
      pattern: "Salamat ha + Thing.",
      examples: [
        "Salamat ha pag-imbitar ha akon.",
        "Salamat ha iyo pag-apil.",
      ],
    },
  ],
  sentences: [
    {
      text: "Hain an terminal?",
      meaning: "Where is the terminal?",
    },
    {
      text: "Paonan-o ako makakadto didto?",
      meaning: "How can I get there?",
    },
    {
      text: "Pira an plete?",
      meaning: "How much is the fare?",
    },
    {
      text: "Makadto ba ini nga salakyan ha sentro han bungto?",
      meaning: "Does this vehicle go to the town center?",
    },
    {
      text: "Hain ako dapat lumusad?",
      meaning: "Where should I get off?",
    },
    {
      text: "Alayon, sumati ako kon makaabot na kita.",
      meaning: "Please tell me when we arrive.",
    },
    {
      text: "Ginbibiling ko ini nga lugar.",
      meaning: "I am looking for this place.",
    },
    {
      text: "Alayon, buligi ako!",
      meaning: "Please help me!",
    },
    {
      text: "Kinahanglan ko hin bulig.",
      meaning: "I need help.",
    },
    {
      text: "May aksidente nga nahitabo.",
      meaning: "There has been an accident.",
    },
    {
      text: "Alayon, tawagi an pulis.",
      meaning: "Please call the police.",
    },
    {
      text: "Hain an pinakahirani nga ospital?",
      meaning: "Where is the nearest hospital?",
    },
    {
      text: "May usa nga nasamaran.",
      meaning: "Someone is injured.",
    },
    {
      text: "Nawara ako.",
      meaning: "I am lost.",
    },
    {
      text: "May doktor ba dinhi?",
      meaning: "Is there a doctor here?",
    },
    {
      text: "Alayon, kalma la anay.",
      meaning: "Please stay calm.",
    },
    {
      text: "Nalilipay ako nga makilala ka.",
      meaning: "Nice to meet you.",
    },
    {
      text: "Taga dinhi ka ba nga komunidad?",
      meaning: "Are you from this community?",
    },
    {
      text: "Kay ano nga aanhi ka?",
      meaning: "What brings you here?",
    },
    {
      text: "Karuyag mo ba umupod ha amon?",
      meaning: "Would you like to join us?",
    },
    {
      text: "Salamat ha pag-imbitar ha akon.",
      meaning: "Thank you for inviting me.",
    },
    {
      text: "Nalilipay ako nga aanhi ako.",
      meaning: "I am happy to be here.",
    },
    {
      text: "Sulod la, alayon.",
      meaning: "Please come in.",
    },
    {
      text: "Pagpahayahay la.",
      meaning: "Make yourself comfortable.",
    },
    {
      text: "Kitaay kita utro.",
      meaning: "See you again.",
    },
    {
      text: "Pira na an oras nga magtitikang an aktibidad?",
      meaning: "What time will the activity start?",
    },
    {
      text: "Hain pagdudumaraon an mitin?",
      meaning: "Where will the meeting be held?",
    },
    {
      text: "Kinahanglan namon hin mga boluntaryo.",
      meaning: "We need volunteers.",
    },
    {
      text: "Makakabulig ako ha pag-andam.",
      meaning: "I can help with the preparation.",
    },
    {
      text: "Ano an akon dad-on?",
      meaning: "What should I bring?",
    },
    {
      text: "Magbinuligay kita.",
      meaning: "Let us work together.",
    },
    {
      text: "Salamat ha iyo pag-apil.",
      meaning: "Thank you for participating.",
    },
  ],
  conversations: [
    {
      title: "Conversation A: Asking for Directions",
      lines: [
        {
          speaker: "Ana",
          text: "Pasayloa ako. Hain an terminal?",
          translation: "Excuse me. Where is the terminal?",
        },
        {
          speaker: "Local Resident",
          text: "Aada ito hirani ha merkado.",
          translation: "It is near the market.",
        },
        {
          speaker: "Ana",
          text: "Hirani la ba ito kon maglakat ako?",
          translation: "Is it nearby if I walk?",
        },
        {
          speaker: "Local Resident",
          text: "Oo, diri ito hirayo.",
          translation: "Yes, it is not far.",
        },
        {
          speaker: "Ana",
          text: "Salamat. Pira an plete ngadto ha sentro han bungto?",
          translation: "Thank you. How much is the fare to the town center?",
        },
        {
          speaker: "Local Resident",
          text: "Mas maupay nga pakianhan mo an drayber.",
          translation: "It would be better to ask the driver.",
        },
        {
          speaker: "Ana",
          text: "Sige. Salamat gud.",
          translation: "All right. Thank you very much.",
        },
      ],
      situation: "Ana and Local Resident: Asking for Directions.",
    },
    {
      title: "Conversation B: Asking for Help",
      lines: [
        {
          speaker: "Ben",
          text: "Alayon, kinahanglan ko hin bulig.",
          translation: "Please, I need help.",
        },
        {
          speaker: "Carlo",
          text: "Ano an nahitabo?",
          translation: "What happened?",
        },
        {
          speaker: "Ben",
          text: "Nawara an akon pitaka.",
          translation: "My wallet is missing.",
        },
        {
          speaker: "Carlo",
          text: "Diin mo ito katapos nga nakita?",
          translation: "Where did you last see it?",
        },
        {
          speaker: "Ben",
          text: "Nakita ko ito ha tindahan.",
          translation: "I saw it at the store.",
        },
        {
          speaker: "Carlo",
          text: "Aton pakianhan an parabaligya.",
          translation: "Let us ask the seller.",
        },
        {
          speaker: "Ben",
          text: "Salamat gud ha imo bulig.",
          translation: "Thank you very much for your help.",
        },
      ],
      situation: "Ben and Carlo: Asking for Help.",
    },
    {
      title: "Conversation C: Meeting Someone at a Community Gathering",
      lines: [
        {
          speaker: "Dina",
          text: "Maupay nga kulop! Taga diin ka?",
          translation: "Good afternoon! Where are you from?",
        },
        {
          speaker: "Ella",
          text: "Taga Samar ako, pero bag-o pa la ako dinhi.",
          translation: "I am from Samar, but I am new here.",
        },
        {
          speaker: "Dina",
          text: "Nalilipay ako nga makilala ka.",
          translation: "I am happy to meet you.",
        },
        {
          speaker: "Ella",
          text: "Nalilipay liwat ako nga makilala ka.",
          translation: "I am also happy to meet you.",
        },
        {
          speaker: "Dina",
          text: "May programa kami yana. Karuyag mo ba umupod?",
          translation: "We have a program today. Would you like to join us?",
        },
        {
          speaker: "Ella",
          text: "Oo, karuyag ko umupod.",
          translation: "Yes, I would like to join.",
        },
        {
          speaker: "Dina",
          text: "Sige. Ipapakilala ko ikaw ha iba nga mga bisita.",
          translation: "All right. I will introduce you to the other guests.",
        },
      ],
      situation: "Dina and Ella: Meeting Someone at a Community Gathering.",
    },
    {
      title: "Conversation D: Participating in a Community Activity",
      lines: [
        {
          speaker: "Organizer",
          text: "Maupay nga aga. Andam na ba kamo para han aktibidad?",
          translation: "Good morning. Are you ready for the activity?",
        },
        {
          speaker: "Volunteer",
          text: "Oo. Ano an amon buruhaton?",
          translation: "Yes. What is our task?",
        },
        {
          speaker: "Organizer",
          text: "Kinahanglan naton limpyohan an palibot.",
          translation: "We need to clean the surroundings.",
        },
        {
          speaker: "Volunteer",
          text: "Sige. Ano an kinahanglan namon dad-on?",
          translation: "All right. What do we need to bring?",
        },
        {
          speaker: "Organizer",
          text: "Magdara kamo hin silhig ngan sako para han basura.",
          translation: "Bring brooms and sacks for the garbage.",
        },
        {
          speaker: "Volunteer",
          text: "Nasasabtan namon. Magtitikang na kami.",
          translation: "We understand. We will begin now.",
        },
        {
          speaker: "Organizer",
          text: "Salamat ha iyo pagbulig.",
          translation: "Thank you for your help.",
        },
      ],
      situation: "Organizer and Volunteer: Participating in a Community Activity.",
    },
  ],
  languageNotes: [
    {
      title: "A. Understanding the Situation Before Responding",
      body: [
        "Before answering someone, learners should identify the situation and understand what information is needed.",
        "Consider these examples:",
      ],
      table: {
        leftHeading: "",
        rightHeading: "",
        rows: [
          {
            left: "Situation",
            right: "Communication Goal · Appropriate Response",
          },
          {
            left: "Asking for directions",
            right: "Find a location · Hain an terminal?",
          },
          {
            left: "Asking about transportation",
            right: "Confirm a destination · Makadto ba ini ha sentro han bungto?",
          },
          {
            left: "Requesting emergency assistance",
            right: "Explain a problem · Kinahanglan ko hin bulig.",
          },
          {
            left: "Meeting someone new",
            right: "Introduce yourself · Nalilipay ako nga makilala ka.",
          },
          {
            left: "Joining a community activity",
            right: "Ask about participation · Karuyag ko ba umupod ha iyo?",
          },
        ],
      },
    },
    {
      title: "A. Understanding the Situation Before Responding",
      body: [
        "The same expression may not be appropriate in every situation. Learners should consider the person they are speaking to, the urgency of the situation, and the information they need.",
      ],
    },
    {
      title: "B. Asking Follow-Up Questions",
      body: [
        "A conversation often requires more than one question. Asking follow-up questions helps learners obtain complete information.",
        "Example: Asking About Transportation",
        "• Hain an terminal?",
        "• Where is the terminal?",
        "• Pira an plete?",
        "• How much is the fare?",
        "• San-o maabot an salakyan?",
        "• When will the vehicle arrive?",
        "• Makadto ba ini ha sentro han bungto?",
        "• Does this go to the town center?",
      ],
    },
    {
      title: "C. Responding to Unexpected Situations",
      body: [
        "Learners should know how to communicate clearly when something unexpected happens.",
        "Example: Reporting a Lost Belonging",
        "• Waray: Nawara an akon bag.",
        "• English: My bag is missing.",
        "• Waray: Hain ko ini mahimo ireport?",
        "• English: Where can I report this?",
        "• Waray: May sulod ito nga importante nga mga dokumento.",
        "• English: It contains important documents.",
        "Example: Asking for Emergency Assistance",
        "• Waray: Kinahanglan namon hin bulig. May usa nga nasamaran.",
        "• English: We need help. Someone has been injured.",
        "• Waray: Hain an pinakahirani nga ospital?",
        "• English: Where is the nearest hospital?",
        "In an actual emergency, learners should prioritize contacting appropriate emergency services or nearby authorities. Language exercises are not a substitute for emergency procedures.",
      ],
    },
    {
      title: "D. Maintaining a Conversation",
      body: [
        "A successful conversation involves listening, responding, and asking relevant follow-up questions.",
        "Useful expressions include:",
        "• Oo, nasasabtan ko.",
        "• Yes, I understand.",
        "• Diri ko nasasabtan.",
        "• I do not understand.",
        "• Mahimo mo ba utrahon?",
        "• Can you repeat that?",
        "• Salamat ha impormasyon.",
        "• Thank you for the information.",
        "• Sige, maupod ako.",
        "• All right, I will come along.",
      ],
    },
    {
      title: "D. Useful Action Words",
      body: [
        "Note: Some terms are borrowed or have alternative regional forms. The vocabulary should be reviewed by a Western Samar Waray evaluator, especially terms for transportation, neighbors, and actions.",
      ],
    },
  ],
  inferredFields: [
    "situation",
    "usage",
    "example",
    "pattern",
    "match",
    "arrange",
    "speaking phrase",
    "respelling",
    "target pitch and mood",
    "example situation",
    "pronunciation tip",
    "completion requirement",
  ],
};
