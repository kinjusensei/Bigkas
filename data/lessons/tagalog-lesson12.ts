import { StructuredLesson } from "../../types/structuredLesson";

// Tagalog Lesson 12 — imported from "Lesson Plan.pdf", pages 180–202.
// The Tagalog and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.

export const tagalogLesson12: StructuredLesson = {
  lessonId: "tagalog_12",
  dialect: "tagalog",
  dialectLabel: "Tagalog",
  lessonNumber: 12,
  title: "Giving Directions and Locations",
  level: "Intermediate",
  unit: "Unit 1 – Everyday Communication",
  estimatedDuration: "40–50 minutes",
  prerequisite: "Lessons 1–11",
  intro: [
    "Knowing how to ask for and give directions is an important everyday communication skill. People often need directions when visiting unfamiliar places, finding establishments, traveling, or helping someone reach a destination.",
    "In Filipino, expressions such as Saan matatagpuan...?, Paano pumunta sa...?, Lumiko sa kanan, and Dumiretso ka are commonly used when asking for or explaining directions.",
    "This lesson introduces vocabulary for locations, landmarks, transportation, and directional instructions. Learners will also practice describing where places are situated and explaining routes.",
    "Real-life applications:",
    "• Asking where a school, hospital, or store is located.",
    "• Giving directions to visitors.",
    "• Explaining how to reach a destination.",
    "• Understanding signs and location descriptions.",
    "• Describing the position of objects and buildings.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify common Filipino vocabulary related to places, locations, and directions.",
    "Ask for and understand directions to different destinations.",
    "Give simple but clear directions using appropriate expressions.",
    "Describe the location of objects and establishments in relation to other places.",
    "Use directional words and prepositions in complete Filipino sentences.",
    "Participate in conversations involving asking for and giving directions.",
  ],
  expressionGroups: [
    {
      title: "A. Directional Words",
      items: [
        {
          term: "Kanan",
          meaning: "Right",
          pronunciation: "ka-nan",
        },
        {
          term: "Kaliwa",
          meaning: "Left",
          pronunciation: "ka-li-wa",
        },
        {
          term: "Tuwid",
          meaning: "Straight",
          pronunciation: "tu-wid",
        },
        {
          term: "Likod",
          meaning: "Back / Behind",
          pronunciation: "li-kod",
        },
        {
          term: "Harap",
          meaning: "Front",
          pronunciation: "ha-rap",
        },
        {
          term: "Gilid",
          meaning: "Side",
          pronunciation: "gi-lid",
        },
        {
          term: "Itaas",
          meaning: "Above / Upper part",
          pronunciation: "i-ta-as",
        },
        {
          term: "Ibaba",
          meaning: "Below / Lower part",
          pronunciation: "i-ba-ba",
        },
        {
          term: "Loob",
          meaning: "Inside",
          pronunciation: "lo-ob",
        },
        {
          term: "Labas",
          meaning: "Outside",
          pronunciation: "la-bas",
        },
        {
          term: "Hilaga",
          meaning: "North",
          pronunciation: "hi-la-ga",
        },
        {
          term: "Timog",
          meaning: "South",
          pronunciation: "ti-mog",
        },
        {
          term: "Silangan",
          meaning: "East",
          pronunciation: "si-la-ngan",
        },
        {
          term: "Kanluran",
          meaning: "West",
          pronunciation: "ka-nlu-ran",
        },
        {
          term: "Hilagang-silangan",
          meaning: "Northeast",
          pronunciation: "hi-la-gang si-la-ngan",
        },
        {
          term: "Timog-kanluran",
          meaning: "Southwest",
          pronunciation: "ti-mog ka-nlu-ran",
        },
      ],
    },
    {
      title: "B. Location and Position Expressions",
      items: [
        {
          term: "Sa tabi ng",
          meaning: "Beside",
          pronunciation: "sa ta-bi ng",
        },
        {
          term: "Sa harap ng",
          meaning: "In front of",
          pronunciation: "sa ha-rap ng",
        },
        {
          term: "Sa likod ng",
          meaning: "Behind",
          pronunciation: "sa li-kod ng",
        },
        {
          term: "Sa pagitan ng",
          meaning: "Between",
          pronunciation: "sa pag-i-ta-an ng",
        },
        {
          term: "Malapit sa",
          meaning: "Near",
          pronunciation: "ma-la-pit sa",
        },
        {
          term: "Malayo sa",
          meaning: "Far from",
          pronunciation: "ma-la-yo sa",
        },
        {
          term: "Katabi ng",
          meaning: "Next to",
          pronunciation: "ka-ta-bi ng",
        },
        {
          term: "Tapat ng",
          meaning: "Across from / Facing",
          pronunciation: "ta-pat ng",
        },
        {
          term: "Sa kanto",
          meaning: "At the corner",
          pronunciation: "sa kan-to",
        },
        {
          term: "Sa dulo ng",
          meaning: "At the end of",
          pronunciation: "sa du-lo ng",
        },
        {
          term: "Sa loob ng",
          meaning: "Inside",
          pronunciation: "sa lo-ob ng",
        },
        {
          term: "Sa labas ng",
          meaning: "Outside",
          pronunciation: "sa la-bas ng",
        },
        {
          term: "Nasa unahan ng",
          meaning: "In front of / Ahead of",
          pronunciation: "na-sa u-na-han ng",
        },
        {
          term: "Nasa likuran ng",
          meaning: "At the back of",
          pronunciation: "na-sa li-ku-ran ng",
        },
      ],
    },
    {
      title: "C. Common Places and Establishments",
      items: [
        {
          term: "Paaralan",
          meaning: "School",
          pronunciation: "pa-a-ra-lan",
        },
        {
          term: "Ospital",
          meaning: "Hospital",
          pronunciation: "os-pi-tal",
        },
        {
          term: "Palengke",
          meaning: "Public market",
          pronunciation: "pa-leng-ke",
        },
        {
          term: "Simbahan",
          meaning: "Church",
          pronunciation: "sim-ba-han",
        },
        {
          term: "Pamilihan",
          meaning: "Shopping center / Market",
          pronunciation: "pa-mi-li-han",
        },
        {
          term: "Tindahan",
          meaning: "Store",
          pronunciation: "tin-da-han",
        },
        {
          term: "Botika",
          meaning: "Pharmacy",
          pronunciation: "bo-ti-ka",
        },
        {
          term: "Bangko",
          meaning: "Bank",
          pronunciation: "bang-ko",
        },
        {
          term: "Aklatan",
          meaning: "Library",
          pronunciation: "ak-la-tan",
        },
        {
          term: "Istasyon",
          meaning: "Station",
          pronunciation: "is-ta-syon",
        },
        {
          term: "Paliparan",
          meaning: "Airport",
          pronunciation: "pa-li-pa-ran",
        },
        {
          term: "Istasyon ng pulis",
          meaning: "Police station",
          pronunciation: "is-ta-syon ng pu-lis",
        },
        {
          term: "Munisipyo",
          meaning: "Municipal hall",
          pronunciation: "mu-ni-sip-yo",
        },
        {
          term: "Restawran",
          meaning: "Restaurant",
          pronunciation: "res-taw-ran",
        },
        {
          term: "Paradahan",
          meaning: "Parking area",
          pronunciation: "pa-ra-da-han",
        },
        {
          term: "Istasyon ng bus",
          meaning: "Bus station",
          pronunciation: "is-ta-syon ng bus",
        },
      ],
    },
    {
      title: "D. Transportation Vocabulary",
      items: [
        {
          term: "Sasakyan",
          meaning: "Vehicle",
          pronunciation: "sa-sak-yan",
        },
        {
          term: "Jeepney",
          meaning: "Jeepney",
          pronunciation: "jip-ni",
        },
        {
          term: "Bus",
          meaning: "Bus",
          pronunciation: "bas",
        },
        {
          term: "Traysikel",
          meaning: "Tricycle",
          pronunciation: "tray-si-kel",
        },
        {
          term: "Kotse",
          meaning: "Car",
          pronunciation: "kot-se",
        },
        {
          term: "Motorsiklo",
          meaning: "Motorcycle",
          pronunciation: "mo-tor-sik-lo",
        },
        {
          term: "Bisikleta",
          meaning: "Bicycle",
          pronunciation: "bi-si-kle-ta",
        },
        {
          term: "Tren",
          meaning: "Train",
          pronunciation: "tren",
        },
        {
          term: "Taksi",
          meaning: "Taxi",
          pronunciation: "tak-si",
        },
        {
          term: "Lakad",
          meaning: "Walk",
          pronunciation: "la-kad",
        },
        {
          term: "Sakay",
          meaning: "Ride / Board",
          pronunciation: "sa-kay",
        },
        {
          term: "Baba",
          meaning: "Get off / Descend",
          pronunciation: "ba-ba",
        },
        {
          term: "Byahe",
          meaning: "Trip / Journey",
          pronunciation: "bya-he",
        },
        {
          term: "Pamasahe",
          meaning: "Fare",
          pronunciation: "pa-ma-sa-he",
        },
      ],
    },
    {
      title: "E. Directional Action Words",
      items: [
        {
          term: "Dumiretso",
          meaning: "Go straight",
          pronunciation: "du-mi-ret-so",
        },
        {
          term: "Lumiko",
          meaning: "Turn",
          pronunciation: "lu-mi-ko",
        },
        {
          term: "Tumawid",
          meaning: "Cross",
          pronunciation: "tu-ma-wid",
        },
        {
          term: "Sundan",
          meaning: "Follow",
          pronunciation: "sun-dan",
        },
        {
          term: "Dumaan",
          meaning: "Pass through",
          pronunciation: "du-ma-an",
        },
        {
          term: "Pumasok",
          meaning: "Enter",
          pronunciation: "pu-ma-sok",
        },
        {
          term: "Lumabas",
          meaning: "Exit / Go out",
          pronunciation: "lu-ma-bas",
        },
        {
          term: "Umakyat",
          meaning: "Go up",
          pronunciation: "u-mak-yat",
        },
        {
          term: "Bumaba",
          meaning: "Go down",
          pronunciation: "bu-ma-ba",
        },
        {
          term: "Huminto",
          meaning: "Stop",
          pronunciation: "hu-min-to",
        },
        {
          term: "Maglakad",
          meaning: "Walk",
          pronunciation: "mag-la-kad",
        },
        {
          term: "Sumakay",
          meaning: "Ride / Board",
          pronunciation: "su-ma-kay",
        },
      ],
    },
  ],
  languageNotes: [
    {
      title: "A. Understanding Directional Words",
      body: [
        "Directional words help explain where to go or which way to turn.",
      ],
      examples: [
        {
          text: "Kanan",
          meaning: "Right",
        },
        {
          text: "Kaliwa",
          meaning: "Left",
        },
        {
          text: "Tuwid",
          meaning: "Straight",
        },
        {
          text: "Likod",
          meaning: "Behind",
        },
        {
          text: "Harap",
          meaning: "Front",
        },
      ],
    },
    {
      title: "A. Understanding Directional Words",
      body: [
        "Example sentences:",
      ],
      examples: [
        {
          text: "Lumiko ka sa kanan.",
          meaning: "Turn right.",
        },
        {
          text: "Lumiko ka sa kaliwa.",
          meaning: "Turn left.",
        },
        {
          text: "Dumiretso ka hanggang sa kanto.",
          meaning: "Go straight until the corner.",
        },
        {
          text: "Nasa likod ng gusali ang paradahan.",
          meaning: "The parking area is behind the building.",
        },
      ],
    },
    {
      title: "B. Describing the Location of Places",
      body: [
        "Learners can describe the location of an establishment by comparing it with another place.",
        "Common patterns:",
        "• Nasa + location + ang + place.",
        "• Place + ay nasa + location.",
        "• Nasa tabi ng + landmark + ang + place.",
      ],
      examples: [
        {
          text: "Nasa tabi ng paaralan ang aklatan.",
          meaning: "The library is beside the school.",
        },
        {
          text: "Ang ospital ay nasa tapat ng parke.",
          meaning: "The hospital is across from the park.",
        },
        {
          text: "Nasa likod ng tindahan ang paradahan.",
          meaning: "The parking area is behind the store.",
        },
      ],
    },
    {
      title: "C. Giving Step-by-Step Directions",
      body: [
        "When explaining a route, it is useful to give instructions in the order that someone should follow.",
        "Example: How to reach the library",
      ],
      examples: [
        {
          text: "Dumiretso ka sa pangunahing kalsada.",
          meaning: "Go straight along the main road.",
        },
        {
          text: "Lumiko ka sa kanan sa unang kanto.",
          meaning: "Turn right at the first corner.",
        },
        {
          text: "Maglakad ka hanggang sa malaking gusali.",
          meaning: "Walk until you reach the large building.",
        },
        {
          text: "Makikita mo ang aklatan sa tabi ng paaralan.",
          meaning: "You will find the library beside the school.",
        },
      ],
    },
    {
      title: "C. Giving Step-by-Step Directions",
      body: [
        "Useful sequence words:",
      ],
      table: {
        leftHeading: "Filipino",
        rightHeading: "English",
        rows: [
          {
            left: "Una",
            right: "First",
          },
          {
            left: "Sunod",
            right: "Next",
          },
          {
            left: "Pagkatapos",
            right: "After that",
          },
          {
            left: "Pagkaraan",
            right: "Afterwards",
          },
          {
            left: "Sa huli",
            right: "Finally",
          },
        ],
      },
    },
    {
      title: "D. Using “Mula” and “Papunta”",
      body: [
        "The word mula indicates a starting point or origin, while papunta indicates movement toward a destination.",
      ],
      examples: [
        {
          text: "Mula sa bahay, maglakad ka papunta sa paaralan.",
          meaning: "From the house, walk toward the school.",
        },
        {
          text: "Mula rito, sumakay ka ng jeepney papunta sa palengke.",
          meaning: "From here, take a jeepney to the market.",
        },
        {
          text: "Malayo ang ospital mula sa aming bahay.",
          meaning: "The hospital is far from our house.",
        },
      ],
    },
    {
      title: "E. Giving Directions Using Transportation",
      body: [
        "Sometimes reaching a destination requires public transportation.",
      ],
      examples: [
        {
          text: "Sumakay ka ng jeepney papunta sa bayan.",
          meaning: "Ride a jeepney going to the town center.",
        },
        {
          text: "Bumaba ka sa tapat ng munisipyo.",
          meaning: "Get off across from the municipal hall.",
        },
        {
          text: "Maglakad ka mula sa istasyon papunta sa bangko.",
          meaning: "Walk from the station to the bank.",
        },
        {
          text: "Maaari kang sumakay ng traysikel papunta sa palengke.",
          meaning: "You can ride a tricycle to the market.",
        },
      ],
    },
    {
      title: "F. Understanding Simple Maps",
      body: [
        "Learners should practice identifying places using a simple map.",
        "Example map arrangement:",
      ],
      examples: [
        {
          text: "School",
          meaning: "North of the park",
        },
        {
          text: "Hospital",
          meaning: "East of the park",
        },
        {
          text: "Market",
          meaning: "South of the park",
        },
        {
          text: "Bank",
          meaning: "West of the park",
        },
      ],
    },
    {
      title: "F. Understanding Simple Maps",
      body: [
        "Using this arrangement:",
      ],
      examples: [
        {
          text: "Nasa hilaga ng parke ang paaralan.",
          meaning: "The school is north of the park.",
        },
        {
          text: "Nasa silangan ng parke ang ospital.",
          meaning: "The hospital is east of the park.",
        },
        {
          text: "Nasa timog ng parke ang palengke.",
          meaning: "The market is south of the park.",
        },
        {
          text: "Nasa kanluran ng parke ang bangko.",
          meaning: "The bank is west of the park.",
        },
      ],
    },
  ],
  situationsTitle: "Useful Phrases and Sentences",
  situationGroups: [
    {
      title: "A. Asking for Directions",
      items: [
        {
          term: "Saan matatagpuan ang ospital?",
          meaning: "Where is the hospital located?",
        },
        {
          term: "Paano pumunta sa palengke?",
          meaning: "How do I get to the market?",
        },
        {
          term: "Malayo ba ang paaralan mula rito?",
          meaning: "Is the school far from here?",
        },
        {
          term: "Saan ako maaaring sumakay ng jeepney?",
          meaning: "Where can I ride a jeepney?",
        },
        {
          term: "May malapit bang botika rito?",
          meaning: "Is there a pharmacy nearby?",
        },
        {
          term: "Aling daan ang dapat kong tahakin?",
          meaning: "Which road should I take?",
        },
        {
          term: "Ilang minuto ang lakad papunta roon?",
          meaning: "How many minutes is the walk to that place?",
        },
      ],
    },
    {
      title: "B. Giving Directions",
      items: [
        {
          term: "Dumiretso ka lamang.",
          meaning: "Just go straight.",
        },
        {
          term: "Lumiko ka sa kanan.",
          meaning: "Turn right.",
        },
        {
          term: "Lumiko ka sa kaliwa.",
          meaning: "Turn left.",
        },
        {
          term: "Tumawid ka sa kalsada.",
          meaning: "Cross the road.",
        },
        {
          term: "Sundan mo ang daan.",
          meaning: "Follow the road.",
        },
        {
          term: "Nasa tabi ng bangko ang tindahan.",
          meaning: "The store is beside the bank.",
        },
        {
          term: "Nasa tapat ng paaralan ang botika.",
          meaning: "The pharmacy is across from the school.",
        },
        {
          term: "Makikita mo ito sa dulo ng kalsada.",
          meaning: "You will find it at the end of the road.",
        },
        {
          term: "Malapit lamang ito sa palengke.",
          meaning: "It is just near the market.",
        },
      ],
    },
    {
      title: "C. Asking About Distance and Travel Time",
      items: [
        {
          term: "Gaano kalayo ang lugar na iyon?",
          meaning: "How far is that place?",
        },
        {
          term: "Gaano katagal ang biyahe?",
          meaning: "How long is the trip?",
        },
        {
          term: "Ilang minuto ang biyahe?",
          meaning: "How many minutes is the trip?",
        },
        {
          term: "Maaari ba itong lakarin?",
          meaning: "Can this be reached on foot?",
        },
        {
          term: "Kailangan ko bang sumakay ng bus?",
          meaning: "Do I need to take a bus?",
        },
        {
          term: "Malapit lang ba ito?",
          meaning: "Is it nearby?",
        },
      ],
    },
    {
      title: "D. Polite Expressions When Asking for Help",
      items: [
        {
          term: "Paumanhin, maaari po ba akong magtanong?",
          meaning: "Excuse me, may I ask a question?",
        },
        {
          term: "Maaari po bang ituro ninyo ang daan?",
          meaning: "Could you please show me the way?",
        },
        {
          term: "Salamat po sa inyong tulong.",
          meaning: "Thank you for your help.",
        },
        {
          term: "Pasensya na po sa abala.",
          meaning: "Sorry for the inconvenience.",
        },
        {
          term: "Maaari po bang ulitin ang direksiyon?",
          meaning: "Could you repeat the directions?",
        },
      ],
    },
  ],
  conversations: [
    {
      title: "Dialogue 1: Asking for Directions to a Hospital",
      lines: [
        {
          speaker: "Visitor",
          text: "Paumanhin po, maaari po ba akong magtanong?",
          translation: "Excuse me, may I ask a question?",
        },
        {
          speaker: "Resident",
          text: "Opo. Ano po ang kailangan ninyo?",
          translation: "Yes. What do you need?",
        },
        {
          speaker: "Visitor",
          text: "Saan po matatagpuan ang pinakamalapit na ospital?",
          translation: "Where is the nearest hospital?",
        },
        {
          speaker: "Resident",
          text: "Dumiretso po kayo sa kalsadang iyon. Pagdating sa ikalawang kanto, lumiko po kayo sa kanan.",
          translation: "Go straight along that road. When you reach the second corner, turn right.",
        },
        {
          speaker: "Visitor",
          text: "Malayo pa po ba iyon?",
          translation: "Is it still far?",
        },
        {
          speaker: "Resident",
          text: "Hindi naman po. Nasa tabi lamang iyon ng malaking botika.",
          translation: "Not really. It is just beside the large pharmacy.",
        },
        {
          speaker: "Visitor",
          text: "Maraming salamat po sa inyong tulong.",
          translation: "Thank you very much for your help.",
        },
        {
          speaker: "Resident",
          text: "Walang anuman po. Mag-ingat kayo!",
          translation: "You're welcome. Take care!",
        },
      ],
    },
    {
      title: "Dialogue 2: Finding a Public Market",
      lines: [
        {
          speaker: "Ana",
          text: "Mark, alam mo ba kung saan ang palengke?",
          translation: "Mark, do you know where the market is?",
        },
        {
          speaker: "Mark",
          text: "Oo. Bakit mo hinahanap?",
          translation: "Yes. Why are you looking for it?",
        },
        {
          speaker: "Ana",
          text: "Bibili sana ako ng mga gulay at prutas.",
          translation: "I would like to buy some vegetables and fruits.",
        },
        {
          speaker: "Mark",
          text: "Nasa likod ng munisipyo ang palengke.",
          translation: "The market is behind the municipal hall.",
        },
        {
          speaker: "Ana",
          text: "Paano ako makakapunta roon?",
          translation: "How can I get there?",
        },
        {
          speaker: "Mark",
          text: "Maaari kang maglakad mula rito. Dumiretso ka hanggang sa malaking sangandaan, pagkatapos ay lumiko ka sa kaliwa.",
          translation: "You can walk from here. Go straight until the large intersection, then turn left.",
        },
        {
          speaker: "Ana",
          text: "Gaano katagal ang lakad?",
          translation: "How long is the walk?",
        },
        {
          speaker: "Mark",
          text: "Mga sampung minuto lamang.",
          translation: "Only about ten minutes.",
        },
        {
          speaker: "Ana",
          text: "Sige, salamat sa impormasyon!",
          translation: "Okay, thanks for the information!",
        },
      ],
    },
    {
      title: "Dialogue 3: Giving Directions to a Tourist",
      lines: [
        {
          speaker: "Tourist",
          text: "Excuse me. How can I get to the museum?",
          translation: "Excuse me. How can I get to the museum?",
        },
        {
          speaker: "Resident",
          text: "Dumiretso ka sa pangunahing kalsada at tumawid sa pedestrian lane.",
          translation: "Go straight along the main road and cross at the pedestrian lane.",
        },
        {
          speaker: "Tourist",
          text: "Is it near the park?",
          translation: "Is it near the park?",
        },
        {
          speaker: "Resident",
          text: "Oo. Nasa tapat ito ng parke.",
          translation: "Yes. It is across from the park.",
        },
        {
          speaker: "Tourist",
          text: "Can I walk there?",
          translation: "Can I walk there?",
        },
        {
          speaker: "Resident",
          text: "Oo naman. Mga limang minuto lamang ang lakad.",
          translation: "Of course. It is only about a five-minute walk.",
        },
        {
          speaker: "Tourist",
          text: "Thank you!",
          translation: "Thank you!",
        },
        {
          speaker: "Resident",
          text: "Walang anuman!",
          translation: "You're welcome!",
        },
      ],
    },
  ],
  matchActivity: {
    title: "Match the Directional Words",
    instructions: "Match each Filipino word with its English meaning.",
    pairs: [
      {
        id: "1",
        term: "Kanan",
        answer: "Right",
      },
      {
        id: "2",
        term: "Kaliwa",
        answer: "Left",
      },
      {
        id: "3",
        term: "Tuwid",
        answer: "Straight",
      },
      {
        id: "4",
        term: "Likod",
        answer: "Behind",
      },
      {
        id: "5",
        term: "Harap",
        answer: "Front",
      },
      {
        id: "6",
        term: "Hilaga",
        answer: "North",
      },
      {
        id: "7",
        term: "Timog",
        answer: "South",
      },
      {
        id: "8",
        term: "Silangan",
        answer: "East",
      },
      {
        id: "9",
        term: "Kanluran",
        answer: "West",
      },
    ],
  },
  choiceActivity: {
    title: "Choose the Correct Location Expression",
    questions: [
      {
        id: 1,
        prompt: "The store is beside the school.",
        options: [
          {
            key: "A",
            text: "Sa likod ng paaralan",
          },
          {
            key: "B",
            text: "Sa tabi ng paaralan",
          },
          {
            key: "C",
            text: "Sa harap ng paaralan",
          },
          {
            key: "D",
            text: "Sa loob ng paaralan",
          },
        ],
        answerKey: "B",
        title: "Choose the Correct Location Expression",
      },
      {
        id: 2,
        prompt: "The hospital is across from the park.",
        options: [
          {
            key: "A",
            text: "Sa tapat ng parke",
          },
          {
            key: "B",
            text: "Sa loob ng parke",
          },
          {
            key: "C",
            text: "Sa likod ng parke",
          },
          {
            key: "D",
            text: "Sa tabi ng parke",
          },
        ],
        answerKey: "A",
        title: "Choose the Correct Location Expression",
      },
      {
        id: 3,
        prompt: "The parking area is behind the building.",
        options: [
          {
            key: "A",
            text: "Sa harap ng gusali",
          },
          {
            key: "B",
            text: "Sa tabi ng gusali",
          },
          {
            key: "C",
            text: "Sa likod ng gusali",
          },
          {
            key: "D",
            text: "Sa loob ng gusali",
          },
        ],
        answerKey: "C",
        title: "Choose the Correct Location Expression",
      },
      {
        id: 4,
        prompt: "The pharmacy is near the market.",
        options: [
          {
            key: "A",
            text: "Malayo sa palengke",
          },
          {
            key: "B",
            text: "Malapit sa palengke",
          },
          {
            key: "C",
            text: "Sa ilalim ng palengke",
          },
          {
            key: "D",
            text: "Sa ibabaw ng palengke",
          },
        ],
        answerKey: "B",
        title: "Choose the Correct Location Expression",
      },
      {
        id: 5,
        prompt: "You are facing north. You need to go east. Which way should you turn?",
        options: [
          {
            key: "A",
            text: "Kumanan",
          },
          {
            key: "B",
            text: "Kumaliwa",
          },
          {
            key: "C",
            text: "Dumiretso",
          },
          {
            key: "D",
            text: "Huminto",
          },
        ],
        answerKey: "A",
        title: "Identify the Correct Direction",
        instructions: "Read each situation and select the correct instruction.",
      },
      {
        id: 6,
        prompt: "The library is behind the school. How would you describe its location?",
        options: [
          {
            key: "A",
            text: "Nasa harap ng paaralan ang aklatan.",
          },
          {
            key: "B",
            text: "Nasa likod ng paaralan ang aklatan.",
          },
          {
            key: "C",
            text: "Nasa tabi ng paaralan ang aklatan.",
          },
          {
            key: "D",
            text: "Nasa loob ng paaralan ang aklatan.",
          },
        ],
        answerKey: "B",
        title: "Identify the Correct Direction",
        instructions: "Read each situation and select the correct instruction.",
      },
      {
        id: 7,
        prompt: "You need to cross the road. What should you do?",
        options: [
          {
            key: "A",
            text: "Lumiko",
          },
          {
            key: "B",
            text: "Umakyat",
          },
          {
            key: "C",
            text: "Tumawid",
          },
          {
            key: "D",
            text: "Umuwi",
          },
        ],
        answerKey: "C",
        title: "Identify the Correct Direction",
        instructions: "Read each situation and select the correct instruction.",
      },
      {
        id: 8,
        prompt: "The destination is at the end of the road. What expression should you use?",
        options: [
          {
            key: "A",
            text: "Sa tabi ng kalsada",
          },
          {
            key: "B",
            text: "Sa dulo ng kalsada",
          },
          {
            key: "C",
            text: "Sa simula ng kalsada",
          },
          {
            key: "D",
            text: "Sa likod ng kalsada",
          },
        ],
        answerKey: "B",
        title: "Identify the Correct Direction",
        instructions: "Read each situation and select the correct instruction.",
      },
    ],
  },
  fillInBlanks: {
    title: "Fill in the Blanks",
    instructions: "Choose the correct word from the word bank.",
    items: [
      {
        id: "3-1",
        sentence: "Dumiretso ka nang ______ hanggang sa kanto.",
        answer: "tuwid",
        title: "Fill in the Blanks",
        instructions: "Choose the correct word from the word bank.",
        wordBank: [
          "kanan",
          "kaliwa",
          "tuwid",
          "tumawid",
          "tabi",
        ],
      },
      {
        id: "3-2",
        sentence: "Lumiko ka sa ______ upang makarating sa bangko.",
        answer: "kanan",
        title: "Fill in the Blanks",
        instructions: "Choose the correct word from the word bank.",
        wordBank: [
          "kanan",
          "kaliwa",
          "tuwid",
          "tumawid",
          "tabi",
        ],
      },
      {
        id: "3-3",
        sentence: "Nasa ______ ng paaralan ang aklatan.",
        answer: "tabi",
        title: "Fill in the Blanks",
        instructions: "Choose the correct word from the word bank.",
        wordBank: [
          "kanan",
          "kaliwa",
          "tuwid",
          "tumawid",
          "tabi",
        ],
      },
      {
        id: "3-4",
        sentence: "______ ka sa kalsada gamit ang pedestrian lane.",
        answer: "tumawid",
        title: "Fill in the Blanks",
        instructions: "Choose the correct word from the word bank.",
        wordBank: [
          "kanan",
          "kaliwa",
          "tuwid",
          "tumawid",
          "tabi",
        ],
      },
      {
        id: "3-5",
        sentence: "Lumiko ka sa ______ pagkatapos ng tulay.",
        answer: "kaliwa",
        title: "Fill in the Blanks",
        instructions: "Choose the correct word from the word bank.",
        wordBank: [
          "kanan",
          "kaliwa",
          "tuwid",
          "tumawid",
          "tabi",
        ],
      },
    ],
  },
  arrangeWords: {
    title: "Arrange the Words",
    instructions: "Arrange the words to form a correct Filipino sentence.",
    items: [
      {
        id: "1",
        words: [
          "ospital",
          "ang",
          "Saan",
          "matatagpuan",
        ],
        answer: [
          "Saan",
          "matatagpuan",
          "ang",
          "ospital",
        ],
        display: "Saan matatagpuan ang ospital?",
      },
      {
        id: "2",
        words: [
          "kanan",
          "sa",
          "Lumiko",
          "ka",
        ],
        answer: [
          "Lumiko",
          "ka",
          "sa",
          "kanan",
        ],
        display: "Lumiko ka sa kanan.",
      },
      {
        id: "3",
        words: [
          "papunta",
          "jeepney",
          "Sumakay",
          "ng",
          "palengke",
          "sa",
        ],
        answer: [
          "Sumakay",
          "ng",
          "jeepney",
          "papunta",
          "sa",
          "palengke",
        ],
        display: "Sumakay ng jeepney papunta sa palengke.",
      },
      {
        id: "4",
        words: [
          "kalsada",
          "sa",
          "Tumawid",
          "ka",
        ],
        answer: [
          "Tumawid",
          "ka",
          "sa",
          "kalsada",
        ],
        display: "Tumawid ka sa kalsada.",
      },
    ],
  },
  assessment: {
    instructions: "Choose the correct answer.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What does “Kaliwa” mean?",
        options: [
          {
            key: "A",
            text: "Right",
          },
          {
            key: "B",
            text: "Left",
          },
          {
            key: "C",
            text: "Straight",
          },
          {
            key: "D",
            text: "Behind",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "Which expression means “Go straight”?",
        options: [
          {
            key: "A",
            text: "Lumiko",
          },
          {
            key: "B",
            text: "Dumiretso",
          },
          {
            key: "C",
            text: "Tumawid",
          },
          {
            key: "D",
            text: "Huminto",
          },
        ],
        answerKey: "B",
      },
      {
        id: 3,
        prompt: "What does “Sa tapat ng” mean?",
        options: [
          {
            key: "A",
            text: "Behind",
          },
          {
            key: "B",
            text: "Beside",
          },
          {
            key: "C",
            text: "Across from",
          },
          {
            key: "D",
            text: "Inside",
          },
        ],
        answerKey: "C",
      },
      {
        id: 4,
        prompt: "Which sentence means “The pharmacy is beside the school”?",
        options: [
          {
            key: "A",
            text: "Nasa likod ng paaralan ang botika.",
          },
          {
            key: "B",
            text: "Nasa tabi ng paaralan ang botika.",
          },
          {
            key: "C",
            text: "Nasa loob ng paaralan ang botika.",
          },
          {
            key: "D",
            text: "Nasa tapat ng paaralan ang botika.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 5,
        prompt: "What does “Palengke” mean?",
        options: [
          {
            key: "A",
            text: "Hospital",
          },
          {
            key: "B",
            text: "Public market",
          },
          {
            key: "C",
            text: "School",
          },
          {
            key: "D",
            text: "Library",
          },
        ],
        answerKey: "B",
      },
      {
        id: 6,
        prompt: "Which word means “Cross the road”?",
        options: [
          {
            key: "A",
            text: "Tumawid",
          },
          {
            key: "B",
            text: "Lumiko",
          },
          {
            key: "C",
            text: "Dumiretso",
          },
          {
            key: "D",
            text: "Umakyat",
          },
        ],
        answerKey: "A",
      },
      {
        id: 7,
        prompt: "What does “Gaano kalayo?” mean?",
        options: [
          {
            key: "A",
            text: "What time?",
          },
          {
            key: "B",
            text: "How far?",
          },
          {
            key: "C",
            text: "How many?",
          },
          {
            key: "D",
            text: "Who is there?",
          },
        ],
        answerKey: "B",
      },
      {
        id: 8,
        prompt: "Which direction is “Silangan”?",
        options: [
          {
            key: "A",
            text: "North",
          },
          {
            key: "B",
            text: "South",
          },
          {
            key: "C",
            text: "East",
          },
          {
            key: "D",
            text: "West",
          },
        ],
        answerKey: "C",
      },
      {
        id: 9,
        prompt: "Which expression means “Get off at the station”?",
        options: [
          {
            key: "A",
            text: "Sumakay sa istasyon.",
          },
          {
            key: "B",
            text: "Bumaba sa istasyon.",
          },
          {
            key: "C",
            text: "Dumiretso sa istasyon.",
          },
          {
            key: "D",
            text: "Tumawid sa istasyon.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 10,
        prompt: "What does “Mula rito” mean?",
        options: [
          {
            key: "A",
            text: "From here",
          },
          {
            key: "B",
            text: "Over there",
          },
          {
            key: "C",
            text: "Behind it",
          },
          {
            key: "D",
            text: "Near here",
          },
        ],
        answerKey: "A",
      },
    ],
  },
  speaking: {
    title: "Listening and Speaking Practice",
    instructions: "Listen to the recorded directions and repeat them aloud.\nSuggested pronunciation practice:",
    note: "Learners should practice:\n• Recognizing directional words.\n• Pronouncing place names clearly.\n• Understanding instructions in the correct sequence.\n• Repeating complete directions at a natural pace.",
    phrases: [
      {
        id: "1",
        text: "Dumiretso ka sa pangunahing kalsada.",
        meaning: "Go straight along the main road.",
      },
      {
        id: "2",
        text: "Lumiko ka sa kanan.",
        meaning: "Turn right.",
      },
      {
        id: "3",
        text: "Nasa tabi ng paaralan ang botika.",
      },
      {
        id: "4",
        text: "Tumawid ka sa kabilang bahagi ng kalsada.",
      },
      {
        id: "5",
        text: "Sumakay ka ng jeepney papunta sa palengke.",
      },
      {
        id: "6",
        text: "Makikita mo ang ospital sa tapat ng parke.",
      },
    ],
  },
  extraActivities: [
    {
      title: "Arrange the Words",
      kind: "arrange",
      instructions: "Arrange the words to form a correct Filipino sentence.",
      items: [
        "ng / tabi / paaralan / Nasa / aklatan / ang / ang",
      ],
      answers: [
        "Nasa tabi ng paaralan ang aklatan.",
      ],
    },
    {
      title: "Map Navigation Challenge",
      kind: "open",
      instructions: "The application displays a simple interactive map with several establishments.\nStarting Point: Park\nDestination: Hospital\nMap information:",
      items: [
        "School is north of the park.",
        "Bank is west of the park.",
        "Hospital is east of the park.",
        "Market is south of the park.",
      ],
      note: "Learners must identify the correct direction from the starting point to the destination.\nQuestion: Saan matatagpuan ang ospital mula sa parke?\nCorrect Answer: Nasa silangan ng parke ang ospital.\nEnglish: The hospital is east of the park.\nA second activity may ask learners to record a short explanation of how to reach the market from the park.",
    },
  ],
  rewards: {
    items: [
      {
        section: "vocabulary",
        label: "Complete Vocabulary Learning",
        xp: 10,
      },
      {
        section: "conversation",
        label: "Complete Guided Conversations",
        xp: 15,
      },
      {
        section: "sentences",
        label: "Complete Practice Activities",
        xp: 15,
      },
      {
        section: "speaking",
        label: "Complete Listening and Speaking Practice",
        xp: 15,
      },
      {
        section: "assessment",
        label: "Pass Lesson Assessment",
        xp: 15,
      },
    ],
    total: 70,
    badge: {
      name: "Direction Master Badge",
      description: "Awarded to learners who successfully complete the lesson and demonstrate the ability to understand and provide directions in Filipino.",
    },
    completionRequirement: "Finish the vocabulary section. Complete the guided conversations. Complete the practice activities. Obtain at least 70% in the lesson assessment.",
  },
  expectedOutcomes: [
    "Recognize common Filipino directional and location vocabulary.",
    "Ask for and understand directions.",
    "Describe the location of establishments and objects.",
    "Give simple step-by-step directions.",
    "Explain routes involving walking and transportation.",
    "Participate in conversations involving locations and directions.",
  ],
};
