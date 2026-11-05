import { StructuredLesson } from "../../types/structuredLesson";

// Tagalog Lesson 14 — imported from "Lesson Plan.pdf", pages 227–249.
// The Tagalog and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.

export const tagalogLesson14: StructuredLesson = {
  lessonId: "tagalog_14",
  dialect: "tagalog",
  dialectLabel: "Tagalog",
  lessonNumber: 14,
  title: "Pronouns and Common Verbs",
  level: "Intermediate",
  unit: "Unit 2 – Grammar and Sentence Construction",
  estimatedDuration: "45–55 minutes",
  prerequisite: "Lessons 1–13",
  intro: [
    "Pronouns and verbs are important parts of everyday communication. Pronouns replace nouns or refer to people, while verbs express actions, events, and states.",
    "For example:",
    "• Si Maria ay nag-aaral. – Maria is studying.",
    "• Siya ay nag-aaral. – She is studying.",
    "In the second sentence, siya replaces the name Maria.",
    "Filipino also has pronouns that express distinctions not always found in English. One important example is the difference between kami and tayo. Both can mean “we,” but they differ in whether the person being spoken to is included.",
    "In this lesson, learners will study personal pronouns, common verbs, and basic sentence patterns that help them communicate more naturally.",
    "Real-life applications:",
    "• Talking about yourself and other people.",
    "• Describing daily activities.",
    "• Explaining what someone is doing.",
    "• Discussing plans and responsibilities.",
    "• Constructing sentences in everyday conversations.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify common Filipino personal pronouns.",
    "Distinguish between pronouns used as subjects and pronouns used in other grammatical roles.",
    "Understand the difference between inclusive and exclusive first-person plural pronouns.",
    "Recognize commonly used Filipino verbs.",
    "Use common verbs in simple sentences.",
    "Construct sentences using appropriate pronouns and verbs.",
    "Apply pronouns and verbs in everyday conversations.",
  ],
  expressionGroups: [
    {
      title: "A. Personal Pronouns",
      intro: [
        "• Subject Pronouns",
        "These pronouns commonly identify the person or people performing an action or being discussed.",
        "Important distinction:",
        "Examples:",
        "• Other Common Pronoun Forms",
        "Note: Filipino pronouns change form depending on their grammatical role. For example, ako and ko may both refer to “I,” but they are not interchangeable in every sentence.",
      ],
      items: [
        {
          term: "Ako",
          meaning: "I",
          pronunciation: "a-ko",
        },
        {
          term: "Ikaw",
          meaning: "You",
          pronunciation: "i-kaw",
        },
        {
          term: "Ka",
          meaning: "You",
          pronunciation: "ka",
        },
        {
          term: "Siya",
          meaning: "He / She",
          pronunciation: "si-ya",
        },
        {
          term: "Kami",
          meaning: "We (excluding the listener)",
          pronunciation: "ka-mi",
        },
        {
          term: "Tayo",
          meaning: "We (including the listener)",
          pronunciation: "ta-yo",
        },
        {
          term: "Kayo",
          meaning: "You (plural or respectful singular)",
          pronunciation: "ka-yo",
        },
        {
          term: "Sila",
          meaning: "They",
          pronunciation: "si-la",
        },
        {
          term: "Kami",
          meaning: "The speaker refers to themselves and other people, but excludes the person being spoken to.",
        },
        {
          term: "Tayo",
          meaning: "The speaker includes the person being spoken to.",
        },
        {
          term: "Kami ay pupunta sa palengke.",
          meaning: "We are going to the market. (The listener is not included.)",
        },
        {
          term: "Tayo ay pupunta sa palengke.",
          meaning: "We are going to the market. (The listener is included.)",
        },
        {
          term: "Ko",
          meaning: "My / By me",
          usage: "Example: Aklat ko ito.",
        },
        {
          term: "Mo",
          meaning: "Your / By you",
          usage: "Example: Aklat mo ito.",
        },
        {
          term: "Niya",
          meaning: "His / Her / By him or her",
          usage: "Example: Aklat niya ito.",
        },
        {
          term: "Namin",
          meaning: "Our (excluding listener)",
          usage: "Example: Bahay namin ito.",
        },
        {
          term: "Natin",
          meaning: "Our (including listener)",
          usage: "Example: Bahay natin ito.",
        },
        {
          term: "Ninyo",
          meaning: "Your (plural or respectful)",
          usage: "Example: Opinyon ninyo.",
        },
        {
          term: "Kanila",
          meaning: "Their / Theirs",
          usage: "Example: Bahay nila ito.",
        },
        {
          term: "Kanya",
          meaning: "His / Hers",
          usage: "Example: Para sa kanya ito.",
        },
        {
          term: "Amin",
          meaning: "Ours (excluding listener)",
          usage: "Example: Ang bahay na ito ay amin.",
        },
        {
          term: "Atin",
          meaning: "Ours (including listener)",
          usage: "Example: Ang tagumpay na ito ay atin.",
        },
      ],
    },
    {
      title: "B. Common Everyday Verbs",
      items: [
        {
          term: "Kumain",
          meaning: "Eat",
          pronunciation: "ku-ma-in",
        },
        {
          term: "Uminom",
          meaning: "Drink",
          pronunciation: "u-mi-nom",
        },
        {
          term: "Matulog",
          meaning: "Sleep",
          pronunciation: "ma-tu-log",
        },
        {
          term: "Gumising",
          meaning: "Wake up",
          pronunciation: "gu-mi-sing",
        },
        {
          term: "Mag-aral",
          meaning: "Study",
          pronunciation: "mag-a-ral",
        },
        {
          term: "Magtrabaho",
          meaning: "Work",
          pronunciation: "mag-tra-ba-ho",
        },
        {
          term: "Magluto",
          meaning: "Cook",
          pronunciation: "mag-lu-to",
        },
        {
          term: "Maglinis",
          meaning: "Clean",
          pronunciation: "mag-li-nis",
        },
        {
          term: "Magbasa",
          meaning: "Read",
          pronunciation: "mag-ba-sa",
        },
        {
          term: "Magsulat",
          meaning: "Write",
          pronunciation: "mag-su-lat",
        },
        {
          term: "Maglakad",
          meaning: "Walk",
          pronunciation: "mag-la-kad",
        },
        {
          term: "Tumakbo",
          meaning: "Run",
          pronunciation: "tu-mak-bo",
        },
        {
          term: "Pumunta",
          meaning: "Go",
          pronunciation: "pu-mun-ta",
        },
        {
          term: "Dumating",
          meaning: "Arrive",
          pronunciation: "du-ma-ting",
        },
        {
          term: "Umalis",
          meaning: "Leave",
          pronunciation: "u-ma-lis",
        },
        {
          term: "Bumili",
          meaning: "Buy",
          pronunciation: "bu-mi-li",
        },
        {
          term: "Magdala",
          meaning: "Bring",
          pronunciation: "mag-da-la",
        },
        {
          term: "Magbigay",
          meaning: "Give",
          pronunciation: "mag-bi-gay",
        },
        {
          term: "Makinig",
          meaning: "Listen",
          pronunciation: "ma-ki-nig",
        },
        {
          term: "Magsalita",
          meaning: "Speak",
          pronunciation: "mag-sa-li-ta",
        },
        {
          term: "Manood",
          meaning: "Watch",
          pronunciation: "ma-no-od",
        },
        {
          term: "Maglaro",
          meaning: "Play",
          pronunciation: "mag-la-ro",
        },
        {
          term: "Magtanong",
          meaning: "Ask",
          pronunciation: "mag-ta-nong",
        },
        {
          term: "Sumagot",
          meaning: "Answer",
          pronunciation: "su-ma-got",
        },
        {
          term: "Tumulong",
          meaning: "Help",
          pronunciation: "tu-mu-long",
        },
      ],
    },
    {
      title: "C. Common Descriptive and State Words",
      intro: [
        "Some words describe conditions or states rather than actions.",
        "Examples:",
      ],
      items: [
        {
          term: "Masaya",
          meaning: "Happy",
        },
        {
          term: "Malungkot",
          meaning: "Sad",
        },
        {
          term: "Pagod",
          meaning: "Tired",
        },
        {
          term: "Gutom",
          meaning: "Hungry",
        },
        {
          term: "Uhaw",
          meaning: "Thirsty",
        },
        {
          term: "Abala",
          meaning: "Busy",
        },
        {
          term: "Handa",
          meaning: "Ready",
        },
        {
          term: "Tahimik",
          meaning: "Quiet",
        },
        {
          term: "Aktibo",
          meaning: "Active",
        },
        {
          term: "May sakit",
          meaning: "Sick",
        },
        {
          term: "Pagod ako.",
          meaning: "I am tired.",
        },
        {
          term: "Masaya siya.",
          meaning: "He/She is happy.",
        },
        {
          term: "Abala kami ngayon.",
          meaning: "We are busy today.",
        },
      ],
    },
  ],
  languageNotes: [
    {
      title: "A. Understanding Personal Pronouns",
      body: [
        "Personal pronouns replace the names of people or identify the participants in a conversation.",
        "• Si Pedro ay nag-aaral. → Siya ay nag-aaral.",
        "• Si Ana at si Liza ay nagluluto. → Sila ay nagluluto.",
        "• Ako at ang aking kapatid ay pupunta roon. → Kami ay pupunta roon.",
        "Using pronouns avoids repeating names unnecessarily.",
      ],
    },
    {
      title: "B. Understanding the Difference Between “Kami” and “Tayo”",
      body: [
        "This is one of the most important distinctions in Filipino pronouns.",
      ],
      table: {
        leftHeading: "",
        rightHeading: "",
        rows: [
          {
            left: "Pronoun",
            right: "Meaning · Includes Listener?",
          },
          {
            left: "Kami",
            right: "We / Us · No",
          },
          {
            left: "Tayo",
            right: "We / Us · Yes",
          },
          {
            left: "Namin",
            right: "Our / Ours · No",
          },
          {
            left: "Natin",
            right: "Our / Ours · Yes",
          },
          {
            left: "Amin",
            right: "Ours · No",
          },
          {
            left: "Atin",
            right: "Ours · Yes",
          },
        ],
      },
    },
    {
      title: "B. Understanding the Difference Between “Kami” and “Tayo”",
      body: [
        "Example 1: Kami",
        "A: Pupunta ba kayo sa palengke?",
        "B: Oo, kami ay pupunta roon.",
        "The speaker and their companions are going to the market, but the listener is not included.",
        "Example 2: Tayo",
        "A: Mag-aaral ba tayo mamaya?",
        "B: Oo, mag-aaral tayo mamaya.",
        "The speaker is including the listener in the activity.",
      ],
    },
    {
      title: "C. Understanding “Ako,” “Ko,” and “Akin”",
      body: [
        "All three forms can refer to the speaker, but they serve different grammatical purposes.",
      ],
      table: {
        leftHeading: "",
        rightHeading: "",
        rows: [
          {
            left: "Form",
            right: "Common Use · Example",
          },
          {
            left: "Ako",
            right: "Subject form · Ako ang magluluto.",
          },
          {
            left: "Ko",
            right: "Possessive or agent form · Aklat ko ito.",
          },
          {
            left: "Akin",
            right: "Independent possessive form · Akin ang aklat na ito.",
          },
        ],
      },
      examples: [
        {
          text: "Ako ang bibili ng pagkain.",
          meaning: "I will buy the food.",
        },
        {
          text: "Binili ko ang pagkain.",
          meaning: "I bought the food.",
        },
        {
          text: "Akin ang pagkaing ito.",
          meaning: "This food is mine.",
        },
      ],
    },
    {
      title: "D. Understanding Common Filipino Verbs",
      body: [
        "A verb expresses an action or event.",
        "In Filipino, verbs can change form to indicate different aspects of an action.",
        "For beginner and intermediate learners, the application can introduce three useful forms:",
      ],
      table: {
        leftHeading: "",
        rightHeading: "",
        rows: [
          {
            left: "Aspect",
            right: "General Meaning · Example",
          },
          {
            left: "Completed (Perpektibo)",
            right: "Action has been completed · Kumain ako.",
          },
          {
            left: "Incompleted (Imperpektibo)",
            right: "Action is ongoing or habitual · Kumakain ako.",
          },
          {
            left: "Contemplated (Kontemplatibo)",
            right: "Action is intended or not yet started · Kakain ako.",
          },
        ],
      },
    },
    {
      title: "D. Understanding Common Filipino Verbs",
      body: [
        "Example using “kain”:",
      ],
      examples: [
        {
          text: "Kumain ako ng almusal.",
          meaning: "I ate breakfast.",
        },
        {
          text: "Kumakain ako ng almusal.",
          meaning: "I am eating breakfast.",
        },
        {
          text: "Kakain ako ng almusal.",
          meaning: "I will eat breakfast.",
        },
      ],
    },
    {
      title: "D. Understanding Common Filipino Verbs",
      body: [
        "Example using “basa”:",
      ],
      examples: [
        {
          text: "Nagbasa ako ng libro.",
          meaning: "I read a book.",
        },
        {
          text: "Nagbabasa ako ng libro.",
          meaning: "I am reading a book.",
        },
        {
          text: "Magbabasa ako ng libro.",
          meaning: "I will read a book.",
        },
      ],
    },
    {
      title: "D. Understanding Common Filipino Verbs",
      body: [
        "Important: Filipino verb forms do not always correspond exactly to English tenses. They also express the aspect of an action. More detailed verb patterns will be introduced in Lesson 25.",
      ],
    },
    {
      title: "E. Constructing Simple Sentences",
      body: [
        "A basic Filipino sentence can be formed using a pronoun and a verb.",
        "Pattern 1: Pronoun + Verb",
        "• Ako ay nag-aaral.",
        "• Siya ay natutulog.",
        "• Sila ay naglalaro.",
        "Pattern 2: Verb + Pronoun",
        "• Nag-aaral ako.",
        "• Natutulog siya.",
        "• Naglalaro sila.",
        "Both patterns can be correct. The second pattern is common in everyday conversation.",
      ],
    },
    {
      title: "F. Adding Objects and Additional Information",
      body: [
        "Sentences can be expanded by adding objects, places, or time expressions.",
      ],
      examples: [
        {
          text: "Nagbabasa ako.",
          meaning: "I am reading.",
        },
        {
          text: "Nagbabasa ako ng libro.",
          meaning: "I am reading a book.",
        },
        {
          text: "Nagbabasa ako ng libro sa silid.",
          meaning: "I am reading a book in the room.",
        },
        {
          text: "Nagbabasa ako ng libro sa silid tuwing gabi.",
          meaning: "I read a book in the room every evening.",
        },
      ],
    },
    {
      title: "F. Adding Objects and Additional Information",
      body: [
        "This allows learners to express more detailed thoughts using familiar vocabulary.",
      ],
    },
  ],
  situationsTitle: "Useful Phrases and Sentences",
  situationGroups: [
    {
      title: "A. Using Pronouns",
      items: [
        {
          term: "Ako ay nag-aaral.",
          meaning: "I am studying.",
        },
        {
          term: "Ikaw ang aking kaibigan.",
          meaning: "You are my friend.",
        },
        {
          term: "Siya ay nagtatrabaho.",
          meaning: "He/She is working.",
        },
        {
          term: "Kami ay magkakasama.",
          meaning: "We are together. (Excluding the listener.)",
        },
        {
          term: "Tayo ay mag-aaral.",
          meaning: "We will study. (Including the listener.)",
        },
        {
          term: "Kayo ay malugod na tinatanggap.",
          meaning: "You are warmly welcomed.",
        },
        {
          term: "Sila ay naglalaro.",
          meaning: "They are playing.",
        },
      ],
    },
    {
      title: "B. Using Possessive Pronouns",
      items: [
        {
          term: "Akin ang bag na ito.",
          meaning: "This bag is mine.",
        },
        {
          term: "Iyo ba ang aklat na ito?",
          meaning: "Is this book yours?",
        },
        {
          term: "Kanya ang pulang payong.",
          meaning: "The red umbrella is his/hers.",
        },
        {
          term: "Aklat ko ito.",
          meaning: "This is my book.",
        },
        {
          term: "Bahay nila iyon.",
          meaning: "That is their house.",
        },
        {
          term: "Kaibigan namin siya.",
          meaning: "He/She is our friend. (Excluding the listener.)",
        },
      ],
    },
    {
      title: "C. Using Common Verbs",
      items: [
        {
          term: "Kumakain ako ng almusal.",
          meaning: "I am eating breakfast.",
        },
        {
          term: "Umiinom siya ng tubig.",
          meaning: "He/She is drinking water.",
        },
        {
          term: "Nag-aaral kami araw-araw.",
          meaning: "We study every day.",
        },
        {
          term: "Nagbabasa sila ng libro.",
          meaning: "They are reading a book.",
        },
        {
          term: "Nagtatrabaho ang aking ama.",
          meaning: "My father works.",
        },
        {
          term: "Nagluluto si Ana ng hapunan.",
          meaning: "Ana is cooking dinner.",
        },
        {
          term: "Tumutulong tayo sa isa't isa.",
          meaning: "We help one another.",
        },
      ],
    },
  ],
  conversations: [
    {
      title: "Dialogue 1: Talking About Daily Activities",
      lines: [
        {
          speaker: "Marco",
          text: "Ano ang ginagawa mo tuwing umaga?",
          translation: "What do you do every morning?",
        },
        {
          speaker: "Lea",
          text: "Gumigising ako nang maaga at naghahanda ng almusal.",
          translation: "I wake up early and prepare breakfast.",
        },
        {
          speaker: "Marco",
          text: "Ikaw ba ang nagluluto para sa pamilya mo?",
          translation: "Are you the one who cooks for your family?",
        },
        {
          speaker: "Lea",
          text: "Minsan, pero ang nanay ko ang kadalasang nagluluto.",
          translation: "Sometimes, but my mother usually cooks.",
        },
        {
          speaker: "Marco",
          text: "Ano naman ang ginagawa ng kapatid mo?",
          translation: "What does your sibling do?",
        },
        {
          speaker: "Lea",
          text: "Nag-aaral siya bago pumasok sa paaralan.",
          translation: "He/She studies before going to school.",
        },
        {
          speaker: "Marco",
          text: "Kami naman ay sabay-sabay na naghahanda bago umalis.",
          translation: "As for us, we prepare together before leaving.",
        },
      ],
    },
    {
      title: "Dialogue 2: Making Plans with Friends",
      lines: [
        {
          speaker: "Nina",
          text: "May plano ba kayo ngayong Sabado?",
          translation: "Do you have any plans this Saturday?",
        },
        {
          speaker: "Paolo",
          text: "Oo, pupunta kami sa parke kasama ang aming mga kaibigan.",
          translation: "Yes, we are going to the park with our friends.",
        },
        {
          speaker: "Nina",
          text: "Maaari ba akong sumama?",
          translation: "Can I come along?",
        },
        {
          speaker: "Paolo",
          text: "Siyempre! Maaari kang sumama sa amin.",
          translation: "Of course! You can join us.",
        },
        {
          speaker: "Nina",
          text: "Anong oras tayo aalis?",
          translation: "What time will we leave?",
        },
        {
          speaker: "Paolo",
          text: "Aalis tayo nang alas-otso ng umaga.",
          translation: "We will leave at eight in the morning.",
        },
        {
          speaker: "Nina",
          text: "Sige, magkikita tayo sa harap ng paaralan.",
          translation: "Okay, we will meet in front of the school.",
        },
      ],
    },
    {
      title: "Dialogue 3: Discussing School Responsibilities",
      lines: [
        {
          speaker: "Teacher",
          text: "Sino ang gumawa ng proyekto?",
          translation: "Who made the project?",
        },
        {
          speaker: "Student",
          text: "Ako po at ang mga kaklase ko ang gumawa nito.",
          translation: "My classmates and I made it.",
        },
        {
          speaker: "Teacher",
          text: "Kayo ba ang naghanda ng lahat ng materyales?",
          translation: "Did you prepare all the materials?",
        },
        {
          speaker: "Student",
          text: "Opo. Kami po ang bumili at naghanda ng mga materyales.",
          translation: "Yes. We bought and prepared the materials.",
        },
        {
          speaker: "Teacher",
          text: "Magaling. Sino naman ang magpapaliwanag ng inyong proyekto?",
          translation: "Good. Who will explain your project?",
        },
        {
          speaker: "Student",
          text: "Si Ana po ang magsasalita, at kami naman ang tutulong sa kanya.",
          translation: "Ana will speak, and we will help her.",
        },
      ],
    },
  ],
  matchActivity: {
    title: "Match the Pronouns",
    instructions: "Match the Filipino pronoun with its English meaning.",
    pairs: [
      {
        id: "1",
        term: "Ako",
        answer: "I",
      },
      {
        id: "2",
        term: "Ikaw",
        answer: "Yours / Your (depending on context)",
      },
      {
        id: "3",
        term: "Siya",
        answer: "He / She",
      },
      {
        id: "4",
        term: "Kami",
        answer: "We, excluding the listener",
      },
      {
        id: "5",
        term: "Tayo",
        answer: "We, including the listener",
      },
      {
        id: "6",
        term: "Kayo",
        answer: "You (plural or respectful singular)",
      },
      {
        id: "7",
        term: "Sila",
        answer: "They",
      },
      {
        id: "8",
        term: "Namin",
        answer: "Our, excluding the listener",
      },
      {
        id: "9",
        term: "Natin",
        answer: "Ours, including the listener",
      },
      {
        id: "10",
        term: "Akin",
        answer: "Mine",
      },
    ],
  },
  choiceActivity: {
    title: "Choose the Correct Pronoun",
    questions: [
      {
        id: 1,
        prompt: "______ ay nag-aaral para sa pagsusulit.",
        options: [
          {
            key: "A",
            text: "Ako",
          },
          {
            key: "B",
            text: "Namin",
          },
          {
            key: "C",
            text: "Akin",
          },
          {
            key: "D",
            text: "Kanila",
          },
        ],
        answerKey: "A",
        title: "Choose the Correct Pronoun",
      },
      {
        id: 2,
        prompt: "Sina Pedro at Ana ay magkapatid. ______ ay nakatira sa Maynila.",
        options: [
          {
            key: "A",
            text: "Kami",
          },
          {
            key: "B",
            text: "Sila",
          },
          {
            key: "C",
            text: "Ikaw",
          },
          {
            key: "D",
            text: "Tayo",
          },
        ],
        answerKey: "B",
        title: "Choose the Correct Pronoun",
      },
      {
        id: 3,
        prompt: "Ikaw at ako ay pupunta sa aklatan. ______ ay mag-aaral doon.",
        options: [
          {
            key: "A",
            text: "Kami",
          },
          {
            key: "B",
            text: "Sila",
          },
          {
            key: "C",
            text: "Tayo",
          },
          {
            key: "D",
            text: "Namin",
          },
        ],
        answerKey: "C",
        title: "Choose the Correct Pronoun",
      },
      {
        id: 4,
        prompt: "Ang bag na ito ay pag-aari ko. ______ ang bag na ito.",
        options: [
          {
            key: "A",
            text: "Akin",
          },
          {
            key: "B",
            text: "Nila",
          },
          {
            key: "C",
            text: "Namin",
          },
          {
            key: "D",
            text: "Kanya",
          },
        ],
        answerKey: "A",
        title: "Choose the Correct Pronoun",
      },
      {
        id: 5,
        prompt: "Ako at ang aking mga kaibigan ay aalis, ngunit hindi ka kasama. ______ ay aalis mamaya.",
        options: [
          {
            key: "A",
            text: "Tayo",
          },
          {
            key: "B",
            text: "Kami",
          },
          {
            key: "C",
            text: "Kayo",
          },
          {
            key: "D",
            text: "Siya",
          },
        ],
        answerKey: "B",
        title: "Choose the Correct Pronoun",
      },
      {
        id: 6,
        prompt: "______ ako ng almusal tuwing umaga.",
        options: [
          {
            key: "A",
            text: "Kumain",
          },
          {
            key: "B",
            text: "Kumakain",
          },
          {
            key: "C",
            text: "Matulog",
          },
          {
            key: "D",
            text: "Tumakbo",
          },
        ],
        answerKey: "B",
        title: "Identify the Correct Verb",
        instructions: "Choose the correct verb to complete each sentence.",
      },
      {
        id: 7,
        prompt: "______ siya ng tubig pagkatapos mag-ehersisyo.",
        options: [
          {
            key: "A",
            text: "Umiinom",
          },
          {
            key: "B",
            text: "Nagbabasa",
          },
          {
            key: "C",
            text: "Natutulog",
          },
          {
            key: "D",
            text: "Nagsusulat",
          },
        ],
        answerKey: "A",
        title: "Identify the Correct Verb",
        instructions: "Choose the correct verb to complete each sentence.",
      },
      {
        id: 8,
        prompt: "______ sila ng libro sa aklatan.",
        options: [
          {
            key: "A",
            text: "Nagbabasa",
          },
          {
            key: "B",
            text: "Nagluluto",
          },
          {
            key: "C",
            text: "Tumatakbo",
          },
          {
            key: "D",
            text: "Umalis",
          },
        ],
        answerKey: "A",
        title: "Identify the Correct Verb",
        instructions: "Choose the correct verb to complete each sentence.",
      },
      {
        id: 9,
        prompt: "______ kami ng aming silid tuwing Sabado.",
        options: [
          {
            key: "A",
            text: "Naglilinis",
          },
          {
            key: "B",
            text: "Kumakain",
          },
          {
            key: "C",
            text: "Umiinom",
          },
          {
            key: "D",
            text: "Dumating",
          },
        ],
        answerKey: "A",
        title: "Identify the Correct Verb",
        instructions: "Choose the correct verb to complete each sentence.",
      },
      {
        id: 10,
        prompt: "______ ako ng liham para sa aking kaibigan.",
        options: [
          {
            key: "A",
            text: "Nagsusulat",
          },
          {
            key: "B",
            text: "Natutulog",
          },
          {
            key: "C",
            text: "Naglalakad",
          },
          {
            key: "D",
            text: "Sumakay",
          },
        ],
        answerKey: "A",
        title: "Identify the Correct Verb",
        instructions: "Choose the correct verb to complete each sentence.",
      },
      {
        id: 11,
        prompt: "Kumain ako ng tanghalian.",
        options: [
          {
            key: "A",
            text: "Completed",
          },
          {
            key: "B",
            text: "Ongoing",
          },
          {
            key: "C",
            text: "Contemplated",
          },
        ],
        answerKey: "A",
        title: "Identify the Verb Aspect",
        instructions: "Choose whether the sentence expresses a completed, ongoing/habitual, or contemplated action.",
      },
      {
        id: 12,
        prompt: "Nagbabasa siya ng libro.",
        options: [
          {
            key: "A",
            text: "Completed",
          },
          {
            key: "B",
            text: "Ongoing",
          },
          {
            key: "C",
            text: "Contemplated",
          },
        ],
        answerKey: "B",
        title: "Identify the Verb Aspect",
        instructions: "Choose whether the sentence expresses a completed, ongoing/habitual, or contemplated action.",
      },
      {
        id: 13,
        prompt: "Pupunta kami sa paaralan bukas.",
        options: [
          {
            key: "A",
            text: "Completed",
          },
          {
            key: "B",
            text: "Ongoing",
          },
          {
            key: "C",
            text: "Contemplated",
          },
        ],
        answerKey: "C",
        title: "Identify the Verb Aspect",
        instructions: "Choose whether the sentence expresses a completed, ongoing/habitual, or contemplated action.",
      },
      {
        id: 14,
        prompt: "Uminom sila ng tubig.",
        options: [
          {
            key: "A",
            text: "Completed",
          },
          {
            key: "B",
            text: "Ongoing",
          },
          {
            key: "C",
            text: "Contemplated",
          },
        ],
        answerKey: "A",
        title: "Identify the Verb Aspect",
        instructions: "Choose whether the sentence expresses a completed, ongoing/habitual, or contemplated action.",
      },
      {
        id: 15,
        prompt: "Mag-aaral tayo mamaya.",
        options: [
          {
            key: "A",
            text: "Completed",
          },
          {
            key: "B",
            text: "Ongoing",
          },
          {
            key: "C",
            text: "Contemplated",
          },
        ],
        answerKey: "C",
        title: "Identify the Verb Aspect",
        instructions: "Choose whether the sentence expresses a completed, ongoing/habitual, or contemplated action.",
      },
    ],
  },
  fillInBlanks: {
    title: "Fill in the Blanks",
    instructions: "Choose the correct word from the word bank.",
    items: [
      {
        id: "5-1",
        sentence: "______ ay magkaibigan mula pagkabata.",
        answer: "Siya",
        title: "Fill in the Blanks",
        instructions: "Choose the correct word from the word bank.",
        wordBank: [
          "Siya",
          "Kami",
          "Tayo",
          "Nag-aaral",
          "Kumakain",
        ],
      },
      {
        id: "5-2",
        sentence: "______ ay pupunta sa parke.",
        hint: "The speaker includes the listener.",
        answer: "Tayo",
        title: "Fill in the Blanks",
        instructions: "Choose the correct word from the word bank.",
        wordBank: [
          "Siya",
          "Kami",
          "Tayo",
          "Nag-aaral",
          "Kumakain",
        ],
      },
      {
        id: "5-3",
        sentence: "______ ako para sa pagsusulit.",
        answer: "Nag-aaral",
        title: "Fill in the Blanks",
        instructions: "Choose the correct word from the word bank.",
        wordBank: [
          "Siya",
          "Kami",
          "Tayo",
          "Nag-aaral",
          "Kumakain",
        ],
      },
      {
        id: "5-4",
        sentence: "______ ng almusal ang aking kapatid.",
        answer: "Kumakain",
        title: "Fill in the Blanks",
        instructions: "Choose the correct word from the word bank.",
        wordBank: [
          "Siya",
          "Kami",
          "Tayo",
          "Nag-aaral",
          "Kumakain",
        ],
      },
      {
        id: "5-5",
        sentence: "______ ay aalis mamaya.",
        hint: "The speaker excludes the listener.",
        answer: "Kami",
        title: "Fill in the Blanks",
        instructions: "Choose the correct word from the word bank.",
        wordBank: [
          "Siya",
          "Kami",
          "Tayo",
          "Nag-aaral",
          "Kumakain",
        ],
      },
    ],
  },
  arrangeWords: {
    title: "Arrange the Words",
    instructions: "Arrange the words to form correct Filipino sentences.",
    items: [
      {
        id: "1",
        words: [
          "ako",
          "Nag-aaral",
          "araw-araw",
        ],
        answer: [
          "Nag-aaral",
          "ako",
          "araw-araw",
        ],
        display: "Nag-aaral ako araw-araw.",
      },
      {
        id: "2",
        words: [
          "ng",
          "Umiinom",
          "tubig",
          "siya",
        ],
        answer: [
          "Umiinom",
          "siya",
          "ng",
          "tubig",
        ],
        display: "Umiinom siya ng tubig.",
      },
      {
        id: "3",
        words: [
          "sa",
          "kami",
          "Pumunta",
          "palengke",
        ],
        answer: [
          "Pumunta",
          "kami",
          "sa",
          "palengke",
        ],
        display: "Pumunta kami sa palengke.",
      },
      {
        id: "4",
        words: [
          "tayo",
          "maglalaro",
          "Mamaya",
        ],
        answer: [
          "maglalaro",
          "tayo",
          "Mamaya",
        ],
        display: "Maglalaro tayo mamaya.",
      },
    ],
  },
  assessment: {
    instructions: "Choose the correct answer.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "Which pronoun means “I”?",
        options: [
          {
            key: "A",
            text: "Siya",
          },
          {
            key: "B",
            text: "Ako",
          },
          {
            key: "C",
            text: "Kami",
          },
          {
            key: "D",
            text: "Sila",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "Which pronoun includes the person being spoken to?",
        options: [
          {
            key: "A",
            text: "Kami",
          },
          {
            key: "B",
            text: "Namin",
          },
          {
            key: "C",
            text: "Tayo",
          },
          {
            key: "D",
            text: "Amin",
          },
        ],
        answerKey: "C",
      },
      {
        id: 3,
        prompt: "What is the correct pronoun when referring to a person whose gender is not specified?",
        options: [
          {
            key: "A",
            text: "Siya",
          },
          {
            key: "B",
            text: "Kami",
          },
          {
            key: "C",
            text: "Tayo",
          },
          {
            key: "D",
            text: "Kayo",
          },
        ],
        answerKey: "A",
      },
      {
        id: 4,
        prompt: "Which sentence means “I am eating breakfast”?",
        options: [
          {
            key: "A",
            text: "Kumain ako ng almusal.",
          },
          {
            key: "B",
            text: "Kumakain ako ng almusal.",
          },
          {
            key: "C",
            text: "Kakain ako ng almusal.",
          },
          {
            key: "D",
            text: "Natutulog ako ng almusal.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 5,
        prompt: "Which word means “They”?",
        options: [
          {
            key: "A",
            text: "Ikaw",
          },
          {
            key: "B",
            text: "Siya",
          },
          {
            key: "C",
            text: "Sila",
          },
          {
            key: "D",
            text: "Ako",
          },
        ],
        answerKey: "C",
      },
      {
        id: 6,
        prompt: "Which sentence uses a completed-action verb form?",
        options: [
          {
            key: "A",
            text: "Kumakain ako.",
          },
          {
            key: "B",
            text: "Kakain ako.",
          },
          {
            key: "C",
            text: "Kumain ako.",
          },
          {
            key: "D",
            text: "Kumakanta ako.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 7,
        prompt: "What does “Akin ang bag na ito” mean?",
        options: [
          {
            key: "A",
            text: "This bag is yours.",
          },
          {
            key: "B",
            text: "This bag is mine.",
          },
          {
            key: "C",
            text: "This bag is theirs.",
          },
          {
            key: "D",
            text: "This bag is ours.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 8,
        prompt: "Which sentence correctly expresses “We will study together,” including the listener?",
        options: [
          {
            key: "A",
            text: "Kami ay mag-aaral nang sama-sama.",
          },
          {
            key: "B",
            text: "Tayo ay mag-aaral nang sama-sama.",
          },
          {
            key: "C",
            text: "Sila ay mag-aaral nang sama-sama.",
          },
          {
            key: "D",
            text: "Siya ay mag-aaral nang sama-sama.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 9,
        prompt: "Which sentence means “She is drinking water”?",
        options: [
          {
            key: "A",
            text: "Umiinom siya ng tubig.",
          },
          {
            key: "B",
            text: "Kumakain siya ng tubig.",
          },
          {
            key: "C",
            text: "Nagbabasa siya ng tubig.",
          },
          {
            key: "D",
            text: "Natutulog siya ng tubig.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 10,
        prompt: "Which pronoun form commonly expresses “our” while excluding the listener?",
        options: [
          {
            key: "A",
            text: "Natin",
          },
          {
            key: "B",
            text: "Atin",
          },
          {
            key: "C",
            text: "Namin",
          },
          {
            key: "D",
            text: "Amin",
          },
        ],
        answerKey: "C",
      },
    ],
  },
  extraActivities: [
    {
      title: "Arrange the Words",
      kind: "arrange",
      instructions: "Arrange the words to form correct Filipino sentences.",
      items: [
        "ang / Akin / aklat / ito",
      ],
      answers: [
        "Akin ang aklat na ito.",
      ],
    },
    {
      title: "Translate the Sentences",
      kind: "translate",
      instructions: "Translate the following sentences into Filipino.",
      items: [
        "I am reading a book.",
        "She is cooking dinner.",
        "We are going to school. (Including the listener.)",
        "They are playing outside.",
        "This bag is mine.",
      ],
      answers: [
        "Nagbabasa ako ng libro.",
        "Nagluluto siya ng hapunan.",
        "Pumupunta tayo sa paaralan.",
        "Naglalaro sila sa labas.",
        "Akin ang bag na ito.",
      ],
    },
    {
      title: "Speaking Practice",
      kind: "other",
      instructions: "Learners should record themselves answering the following questions in Filipino.",
      items: [
        "Ano ang ginagawa mo tuwing umaga?",
        "Ano ang ginagawa mo pagkatapos ng klase?",
        "Sino ang kasama mo sa bahay?",
        "Ano ang ginagawa ninyo ng iyong mga kaibigan?",
        "Ano ang plano ninyo ngayong linggo?",
      ],
      note: "Encourage learners to use at least three different pronouns and five different verbs throughout their answers.",
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
        label: "Complete Guided Conversations + Complete Speaking Practice",
        xp: 30,
      },
      {
        section: "sentences",
        label: "Complete Pronoun and Verb Exercises",
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
      name: "Grammar Builder Badge",
      description: "Awarded to learners who successfully demonstrate their understanding of Filipino pronouns and common verbs.",
    },
    completionRequirement: "Complete the vocabulary section. Finish the guided conversations. Complete the practice activities. Obtain at least 70% in the lesson assessment.",
  },
  expectedOutcomes: [
    "Identify and use common Filipino personal pronouns.",
    "Explain the difference between kami and tayo.",
    "Distinguish between ako, ko, and akin in common sentence patterns.",
    "Recognize and use frequently encountered Filipino verbs.",
    "Identify basic completed, ongoing, and contemplated verb forms.",
    "Construct simple sentences using pronouns and verbs.",
    "Apply the lesson's vocabulary and grammar in everyday conversations.",
  ],
};
