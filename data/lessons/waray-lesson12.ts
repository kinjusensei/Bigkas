import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 12 — imported from "Lesson Plan.pdf", pages 818–830.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.

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
  expressionGroups: [
    {
      title: "A. Common Places",
      items: [
        {
          term: "Balay",
          meaning: "House",
          pronunciation: "BAH-lai",
        },
        {
          term: "Eskwelahan",
          meaning: "School",
          pronunciation: "es-kweh-LAH-hahn",
        },
        {
          term: "Singbahan",
          meaning: "Church",
          pronunciation: "sing-BAH-hahn",
        },
        {
          term: "Merkado",
          meaning: "Market",
          pronunciation: "mehr-KAH-doh",
        },
        {
          term: "Ospital",
          meaning: "Hospital",
          pronunciation: "ohs-pee-TAHL",
        },
        {
          term: "Botika",
          meaning: "Pharmacy",
          pronunciation: "boh-TEE-kah",
        },
        {
          term: "Restawran",
          meaning: "Restaurant",
          pronunciation: "res-tahw-RAHN",
        },
        {
          term: "Tindahan",
          meaning: "Store",
          pronunciation: "tin-DAH-hahn",
        },
        {
          term: "Parke",
          meaning: "Park",
          pronunciation: "PAHR-keh",
        },
        {
          term: "Opisina",
          meaning: "Office",
          pronunciation: "oh-pee-SEE-nah",
        },
        {
          term: "Terminal",
          meaning: "Bus terminal",
          pronunciation: "tehr-mee-NAHL",
        },
        {
          term: "Dalan",
          meaning: "Road",
          pronunciation: "DAH-lahn",
        },
        {
          term: "Tulay",
          meaning: "Bridge",
          pronunciation: "TOO-lai",
        },
        {
          term: "Baybayon",
          meaning: "Beach",
          pronunciation: "bai-bah-YOHN",
        },
        {
          term: "Sentro han bungto",
          meaning: "Town center",
          pronunciation: "SEN-troh hahn BOONG-toh",
        },
      ],
    },
    {
      title: "B. Location and Position Words",
      items: [
        {
          term: "Hirani",
          meaning: "Near",
          pronunciation: "hee-RAH-nee",
        },
        {
          term: "Hirayo",
          meaning: "Far",
          pronunciation: "hee-RAH-yoh",
        },
        {
          term: "Atubangan",
          meaning: "In front",
          pronunciation: "ah-too-BAH-ngahn",
        },
        {
          term: "Luyo",
          meaning: "Behind",
          pronunciation: "LOO-yoh",
        },
        {
          term: "Sapit",
          meaning: "Beside",
          pronunciation: "SAH-peet",
        },
        {
          term: "Sulod",
          meaning: "Inside",
          pronunciation: "SOO-lod",
        },
        {
          term: "Gawas",
          meaning: "Outside",
          pronunciation: "GAH-wahs",
        },
        {
          term: "Ibabaw",
          meaning: "Above",
          pronunciation: "ee-BAH-bahw",
        },
        {
          term: "Ilarom",
          meaning: "Below",
          pronunciation: "ee-LAH-rom",
        },
        {
          term: "Butnga",
          meaning: "Between",
          pronunciation: "boot-NGAH",
        },
        {
          term: "Tabok",
          meaning: "Across",
          pronunciation: "tah-BOHK",
        },
        {
          term: "Tuo",
          meaning: "Right",
          pronunciation: "TOO-oh",
        },
        {
          term: "Wala",
          meaning: "Left",
          pronunciation: "WAH-lah",
        },
        {
          term: "Diretso",
          meaning: "Straight ahead",
          pronunciation: "dee-REHT-soh",
        },
        {
          term: "Dinhi",
          meaning: "Here",
          pronunciation: "DEEN-hee",
        },
        {
          term: "Didto",
          meaning: "There",
          pronunciation: "DEED-toh",
        },
      ],
    },
    {
      title: "C. Direction and Movement Words",
      items: [
        {
          term: "Kadto",
          meaning: "Go",
          pronunciation: "KAHD-toh",
        },
        {
          term: "Kadi",
          meaning: "Come",
          pronunciation: "kah-DEE",
        },
        {
          term: "Liko",
          meaning: "Turn",
          pronunciation: "lee-KOH",
        },
        {
          term: "Lakat",
          meaning: "Walk",
          pronunciation: "lah-KAHT",
        },
        {
          term: "Tabok",
          meaning: "Cross",
          pronunciation: "tah-BOHK",
        },
        {
          term: "Sunod",
          meaning: "Follow",
          pronunciation: "SOO-nod",
        },
        {
          term: "Undang",
          meaning: "Stop",
          pronunciation: "oon-DAHNG",
        },
        {
          term: "Padayon",
          meaning: "Continue",
          pronunciation: "pah-DAH-yohn",
        },
        {
          term: "Sulod",
          meaning: "Enter",
          pronunciation: "SOO-lod",
        },
        {
          term: "Gawas",
          meaning: "Exit / Go out",
          pronunciation: "GAH-wahs",
        },
        {
          term: "Destinasyon",
          meaning: "Destination",
          pronunciation: "des-tee-nah-SYOHN",
        },
        {
          term: "Direksyon",
          meaning: "Direction",
          pronunciation: "dee-rehk-SYOHN",
        },
      ],
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
  ],
  situationsTitle: "Useful Phrases and Sentences",
  situationGroups: [
    {
      title: "Useful Phrases and Sentences",
      intro: [
        "Study these expressions to learn how to ask about locations and give directions.",
      ],
      items: [
        {
          term: "Hain an eskwelahan?",
          meaning: "Where is the school?",
          pronunciation: "HAH-in ahn es-kweh-LAH-hahn",
        },
        {
          term: "Hain an merkado?",
          meaning: "Where is the market?",
          pronunciation: "HAH-in ahn mehr-KAH-doh",
        },
        {
          term: "Paonan-o ako makadto didto?",
          meaning: "How can I get there?",
          pronunciation: "pah-oh-NAHN-oh AH-koh mah-kahd-TOH DEED-toh",
        },
        {
          term: "Hirayo ba ito tikang dinhi?",
          meaning: "Is it far from here?",
          pronunciation: "hee-RAH-yoh bah EE-toh tee-KAHNG DEEN-hee",
        },
        {
          term: "Hirani ba ito?",
          meaning: "Is it near?",
          pronunciation: "hee-RAH-nee bah EE-toh",
        },
        {
          term: "Diretso la.",
          meaning: "Go straight ahead.",
          pronunciation: "dee-REHT-soh lah",
        },
        {
          term: "Liko ha tuo.",
          meaning: "Turn right.",
          pronunciation: "lee-KOH hah TOO-oh",
        },
        {
          term: "Liko ha wala.",
          meaning: "Turn left.",
          pronunciation: "lee-KOH hah WAH-lah",
        },
        {
          term: "Aada ito ha sapit han singbahan.",
          meaning: "It is beside the church.",
          pronunciation: "ah-AH-dah EE-toh hah SAH-peet hahn sing-BAH-hahn",
        },
        {
          term: "Aada ito ha atubangan han eskwelahan.",
          meaning: "It is in front of the school.",
          pronunciation: "ah-AH-dah EE-toh hah ah-too-BAH-ngahn hahn es-kweh-LAH-hahn",
        },
        {
          term: "An tindahan aada ha luyo han balay.",
          meaning: "The store is behind the house.",
          pronunciation: "ahn tin-DAH-hahn ah-AH-dah hah LOO-yoh hahn BAH-lai",
        },
        {
          term: "Alayon, pakita ha akon an dalan.",
          meaning: "Please show me the way.",
          pronunciation: "ah-LAH-yohn pah-kee-TAH hah AH-kohn ahn DAH-lahn",
        },
        {
          term: "Salamat ha paghatag hin direksyon.",
          meaning: "Thank you for the directions.",
          pronunciation: "sah-LAH-maht hah pahg-HAH-tahg heen dee-rehk-SYOHN",
        },
        {
          term: "Ginbibiling ko an ospital.",
          meaning: "I am looking for the hospital.",
          pronunciation: "gin-bee-BEE-ling koh ahn ohs-pee-TAHL",
        },
        {
          term: "Makadto ako ha merkado.",
          meaning: "I am going to the market.",
          pronunciation: "mah-kahd-TOH AH-koh hah mehr-KAH-doh",
        },
      ],
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
        },
        {
          speaker: "Resident",
          text: "Waray sapayan.",
          translation: "You're welcome.",
        },
      ],
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
    },
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
      title: "Match the Location Words",
      kind: "match",
      instructions: "Match each Waray word with its English meaning.",
      items: [
        "Waray",
        "Hirani",
        "Hirayo",
        "Luyo",
        "Tuo",
        "Wala",
      ],
      choices: [
        "Answer Choices",
        "Behind",
        "Right",
        "Near",
        "Far",
        "Left",
      ],
    },
    {
      title: "Complete the Directions",
      kind: "fill",
      instructions: "Choose the correct Waray expression to complete each sentence.",
      items: [
        "______ la. (Go straight.)",
        "Liko ha ______. (Turn right.)",
        "Liko ha ______. (Turn left.)",
        "Aada an tindahan ha ______ han balay. (The store is behind the house.)",
        "______ ba ito tikang dinhi? (Is it far from here?)",
      ],
      choices: [
        "Diretso",
        "tuo",
        "wala",
        "luyo",
        "Hirayo",
      ],
    },
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
      title: "Follow the Directions",
      kind: "other",
      instructions: "Read each direction and identify the correct action.",
      items: [
        "Diretso la.\nA. Turn left.\nB. Go straight.\nC. Stop.\nD. Turn right.",
        "Liko ha tuo.\nA. Turn right.\nB. Turn left.\nC. Go straight.\nD. Go back.",
        "Liko ha wala.\nA. Stop.\nB. Turn right.\nC. Turn left.\nD. Cross the road.",
        "Aada ha luyo han balay.\nA. In front of the house.\nB. Beside the house.\nC. Behind the house.\nD. Inside the house.",
        "Hirani la ito.\nA. It is far.\nB. It is nearby.\nC. It is behind.\nD. It is outside.",
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
  rewards: {
    items: [
      {
        section: "vocabulary",
        label: "Vocabulary Review + Useful Phrases",
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
      name: "Direction Navigator Badge",
      description: "Awarded after successfully completing the lesson assessment with at least 70%.",
    },
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
};
