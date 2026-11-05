import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 29 — imported from "Lesson Plan.pdf", pages 1119–1139.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.

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
  expressionGroups: [
    {
      title: "A. Travel and Transportation",
      items: [
        {
          term: "Biyahe",
          meaning: "Travel",
          pronunciation: "Bi-ya-he",
        },
        {
          term: "Pasahero",
          meaning: "Passenger",
          pronunciation: "Pa-sa-he-ro",
        },
        {
          term: "Drayber",
          meaning: "Driver",
          pronunciation: "Dray-ber",
        },
        {
          term: "Salakyan",
          meaning: "Vehicle",
          pronunciation: "Sa-lak-yan",
        },
        {
          term: "Bus",
          meaning: "Bus",
          pronunciation: "Bus",
        },
        {
          term: "Dyip",
          meaning: "Jeepney",
          pronunciation: "Dyip",
        },
        {
          term: "Traysikol",
          meaning: "Tricycle",
          pronunciation: "Tray-si-kol",
        },
        {
          term: "Sakayan / baroto",
          meaning: "Boat",
          pronunciation: "Sa-ka-yan / Ba-ro-to",
        },
        {
          term: "Tiket",
          meaning: "Ticket",
          pronunciation: "Ti-ket",
        },
        {
          term: "Plete",
          meaning: "Fare",
          pronunciation: "Ple-te",
        },
        {
          term: "Destinasyon",
          meaning: "Destination",
          pronunciation: "Des-ti-na-syon",
        },
        {
          term: "Terminal",
          meaning: "Terminal",
          pronunciation: "Ter-mi-nal",
        },
        {
          term: "Pagbiyahe",
          meaning: "Departure",
          pronunciation: "Pag-bi-ya-he",
        },
        {
          term: "Pag-abot",
          meaning: "Arrival",
          pronunciation: "Pag-a-bot",
        },
        {
          term: "Dalan",
          meaning: "Road",
          pronunciation: "Da-lan",
        },
      ],
    },
    {
      title: "B. Emergency and Assistance",
      items: [
        {
          term: "Emerhensya",
          meaning: "Emergency",
          pronunciation: "E-mer-hen-sya",
        },
        {
          term: "Bulig",
          meaning: "Help",
          pronunciation: "Bu-lig",
        },
        {
          term: "Ospital",
          meaning: "Hospital",
          pronunciation: "Os-pi-tal",
        },
        {
          term: "Klinika",
          meaning: "Clinic",
          pronunciation: "Kli-ni-ka",
        },
        {
          term: "Pulis",
          meaning: "Police",
          pronunciation: "Pu-lis",
        },
        {
          term: "Kalayo",
          meaning: "Fire",
          pronunciation: "Ka-la-yo",
        },
        {
          term: "Aksidente",
          meaning: "Accident",
          pronunciation: "Ak-si-den-te",
        },
        {
          term: "Samad",
          meaning: "Injury",
          pronunciation: "Sa-mad",
        },
        {
          term: "Nawara",
          meaning: "Lost",
          pronunciation: "Na-wa-ra",
        },
        {
          term: "Bulong",
          meaning: "Medicine",
          pronunciation: "Bu-long",
        },
        {
          term: "Doktor",
          meaning: "Doctor",
          pronunciation: "Dok-tor",
        },
        {
          term: "Telepono",
          meaning: "Telephone",
          pronunciation: "Te-le-po-no",
        },
        {
          term: "Adres",
          meaning: "Address",
          pronunciation: "Ad-res",
        },
        {
          term: "Luwas",
          meaning: "Safe",
          pronunciation: "Lu-was",
        },
        {
          term: "Peligro",
          meaning: "Danger",
          pronunciation: "Pe-lig-ro",
        },
      ],
    },
    {
      title: "C. Social and Community Interactions",
      items: [
        {
          term: "Sangkay-balay / amyaw",
          meaning: "Neighbor",
          pronunciation: "Sang-kay-ba-lay / Am-yaw",
        },
        {
          term: "Bisita",
          meaning: "Visitor",
          pronunciation: "Bi-si-ta",
        },
        {
          term: "Bisita",
          meaning: "Guest",
          pronunciation: "Bi-si-ta",
        },
        {
          term: "Komunidad",
          meaning: "Community",
          pronunciation: "Ko-mu-ni-dad",
        },
        {
          term: "Selebrasyon",
          meaning: "Celebration",
          pronunciation: "Se-le-bra-syon",
        },
        {
          term: "Katitirok",
          meaning: "Gathering",
          pronunciation: "Ka-ti-ti-rok",
        },
        {
          term: "Imbitasyon",
          meaning: "Invitation",
          pronunciation: "Im-bi-ta-syon",
        },
        {
          term: "Kooperasyon",
          meaning: "Cooperation",
          pronunciation: "Ko-o-pe-ra-syon",
        },
        {
          term: "Anunsyo",
          meaning: "Announcement",
          pronunciation: "A-nun-syo",
        },
        {
          term: "Mitin",
          meaning: "Meeting",
          pronunciation: "Mi-tin",
        },
        {
          term: "Bulig",
          meaning: "Assistance",
          pronunciation: "Bu-lig",
        },
        {
          term: "Respeto",
          meaning: "Respect",
          pronunciation: "Res-pe-to",
        },
      ],
    },
    {
      title: "D. Useful Action Words",
      intro: [
        "Note: Some terms are borrowed or have alternative regional forms. The vocabulary should be reviewed by a Western Samar Waray evaluator, especially terms for transportation, neighbors, and actions.",
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
          term: "Bilingon / bilngon",
          meaning: "To find",
          pronunciation: "Bi-ling-on / Bil-ngon",
        },
        {
          term: "Pamiling",
          meaning: "To look for",
          pronunciation: "Pa-mi-ling",
        },
        {
          term: "Maghulat",
          meaning: "To wait",
          pronunciation: "Mag-hu-lat",
        },
        {
          term: "Umupod",
          meaning: "To accompany",
          pronunciation: "U-mu-pod",
        },
        {
          term: "Mag-imbitar",
          meaning: "To invite",
          pronunciation: "Mag-im-bi-tar",
        },
        {
          term: "Tumawag",
          meaning: "To call",
          pronunciation: "Tu-ma-wag",
        },
        {
          term: "Magreport",
          meaning: "To report",
          pronunciation: "Mag-re-port",
        },
        {
          term: "Maggiya",
          meaning: "To guide",
          pronunciation: "Mag-gi-ya",
        },
        {
          term: "Bumulig",
          meaning: "To assist",
          pronunciation: "Bu-mu-lig",
        },
      ],
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
  ],
  situationsTitle: "Useful Phrases and Expressions",
  situationGroups: [
    {
      title: "A. Asking for Directions and Travel Information",
      items: [
        {
          term: "Hain an terminal?",
          meaning: "Where is the terminal?",
        },
        {
          term: "Paonan-o ako makakadto didto?",
          meaning: "How can I get there?",
        },
        {
          term: "Pira an plete?",
          meaning: "How much is the fare?",
        },
        {
          term: "Makadto ba ini nga salakyan ha sentro han bungto?",
          meaning: "Does this vehicle go to the town center?",
        },
        {
          term: "Hain ako dapat lumusad?",
          meaning: "Where should I get off?",
        },
        {
          term: "Alayon, sumati ako kon makaabot na kita.",
          meaning: "Please tell me when we arrive.",
        },
        {
          term: "Ginbibiling ko ini nga lugar.",
          meaning: "I am looking for this place.",
        },
      ],
    },
    {
      title: "B. Asking for Help During Emergencies",
      items: [
        {
          term: "Alayon, buligi ako!",
          meaning: "Please help me!",
        },
        {
          term: "Kinahanglan ko hin bulig.",
          meaning: "I need help.",
        },
        {
          term: "May aksidente nga nahitabo.",
          meaning: "There has been an accident.",
        },
        {
          term: "Alayon, tawagi an pulis.",
          meaning: "Please call the police.",
        },
        {
          term: "Hain an pinakahirani nga ospital?",
          meaning: "Where is the nearest hospital?",
        },
        {
          term: "May usa nga nasamaran.",
          meaning: "Someone is injured.",
        },
        {
          term: "Nawara ako.",
          meaning: "I am lost.",
        },
        {
          term: "May doktor ba dinhi?",
          meaning: "Is there a doctor here?",
        },
        {
          term: "Alayon, kalma la anay.",
          meaning: "Please stay calm.",
        },
      ],
    },
    {
      title: "C. Social Interactions",
      items: [
        {
          term: "Nalilipay ako nga makilala ka.",
          meaning: "Nice to meet you.",
        },
        {
          term: "Taga dinhi ka ba nga komunidad?",
          meaning: "Are you from this community?",
        },
        {
          term: "Kay ano nga aanhi ka?",
          meaning: "What brings you here?",
        },
        {
          term: "Karuyag mo ba umupod ha amon?",
          meaning: "Would you like to join us?",
        },
        {
          term: "Salamat ha pag-imbitar ha akon.",
          meaning: "Thank you for inviting me.",
        },
        {
          term: "Nalilipay ako nga aanhi ako.",
          meaning: "I am happy to be here.",
        },
        {
          term: "Sulod la, alayon.",
          meaning: "Please come in.",
        },
        {
          term: "Pagpahayahay la.",
          meaning: "Make yourself comfortable.",
        },
        {
          term: "Kitaay kita utro.",
          meaning: "See you again.",
        },
      ],
    },
    {
      title: "D. Community Activities",
      items: [
        {
          term: "Pira na an oras nga magtitikang an aktibidad?",
          meaning: "What time will the activity start?",
        },
        {
          term: "Hain pagdudumaraon an mitin?",
          meaning: "Where will the meeting be held?",
        },
        {
          term: "Kinahanglan namon hin mga boluntaryo.",
          meaning: "We need volunteers.",
        },
        {
          term: "Makakabulig ako ha pag-andam.",
          meaning: "I can help with the preparation.",
        },
        {
          term: "Ano an akon dad-on?",
          meaning: "What should I bring?",
        },
        {
          term: "Magbinuligay kita.",
          meaning: "Let us work together.",
        },
        {
          term: "Salamat ha iyo pag-apil.",
          meaning: "Thank you for participating.",
        },
      ],
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
    },
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
      title: "Choose the Appropriate Response",
      kind: "choice",
      instructions: "Select the best response for each situation.",
      items: [
        "Someone asks, \"Hain an terminal?\"\nA. Aada ito hirani ha merkado.\nB. Lami an pagkaon.\nC. Malipayon ako.\nD. Pira an imo edad?",
        "You need help because someone is injured.\nA. Kinahanglan namon hin bulig. May usa nga nasamaran.\nB. Karuyag ko kumaon.\nC. Maupay nga gab-i.\nD. Hain an eskwelahan?",
        "Someone invites you to a community activity.\nA. Sige, maupod ako.\nB. Diri ako maaram han imo ngaran.\nC. Pira ini?\nD. Waray ako pagkaon.",
        "You want to ask how much transportation costs.\nA. Pira an plete?\nB. Hain an imo balay?\nC. Ano an imo trabaho?\nD. San-o an imo birthday?",
        "You want someone to repeat what they said.\nA. Mahimo mo ba utrahon?\nB. Nalilipay ako.\nC. Salamat ha pagkaon.\nD. Taga diin ka?",
      ],
    },
    {
      title: "Complete the Dialogue",
      kind: "roleplay",
      instructions: "Complete each dialogue using the expressions from the word bank.\nWord Bank:",
      items: [
        "Hain an pinakahirani nga ospital?",
        "Sige, maupod ako.",
        "Pira an plete?",
        "Kinahanglan ko hin bulig.",
        "Nalilipay ako nga makilala ka.",
        "A: Maupay nga kulop! Bag-o ka ba dinhi? B: Oo, bag-o pa la ako dinhi. __________________________",
        "A: Karuyag mo ba umupod ha amon ha programa? B: __________________________",
        "A: Paonan-o ka makadto ha bungto? B: Sakay ako hin traysikol. __________________________",
        "A: Ano an nahitabo? B: Nawara an akon pitaka. __________________________",
        "A: May usa nga nasamaran. Diin kami makakadto? B: __________________________",
      ],
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
  rewards: {
    items: [
      {
        section: "vocabulary",
        label: "Vocabulary Review",
        xp: 10,
      },
      {
        section: "conversation",
        label: "Situation Recognition + Guided Conversations + Role-Playing Activities",
        xp: 35,
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
};
