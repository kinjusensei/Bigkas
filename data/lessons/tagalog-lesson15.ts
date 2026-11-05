import { StructuredLesson } from "../../types/structuredLesson";

// Tagalog Lesson 15 — imported from "Lesson Plan.pdf", pages 250–272.
// The Tagalog and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.

export const tagalogLesson15: StructuredLesson = {
  lessonId: "tagalog_15",
  dialect: "tagalog",
  dialectLabel: "Tagalog",
  lessonNumber: 15,
  title: "Basic Sentence Structure",
  level: "Intermediate",
  unit: "Unit 2 – Grammar and Sentence Construction",
  estimatedDuration: "45–55 minutes",
  prerequisite: "Lessons 1–14",
  intro: [
    "A sentence is a group of words that expresses a complete thought. To communicate effectively, learners must understand how words are arranged and how different parts of a sentence work together.",
    "Filipino sentence structure can differ from English. For example, English commonly uses the Subject–Verb–Object (SVO) pattern:",
    "• Maria eats an apple.",
    "Filipino commonly uses a Verb–Subject–Object (VSO) pattern in many ordinary action sentences:",
    "• Kumakain si Maria ng mansanas.",
    "However, Filipino also allows other sentence arrangements depending on emphasis, grammatical construction, and context.",
    "In this lesson, learners will explore basic Filipino sentence patterns and practice constructing sentences that communicate clear ideas.",
    "Real-life applications:",
    "• Describing people and objects.",
    "• Talking about everyday activities.",
    "• Expressing likes and dislikes.",
    "• Asking and answering questions.",
    "• Giving information and explaining situations.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify the basic components of Filipino sentences.",
    "Distinguish between the topic and predicate of a sentence.",
    "Recognize common Filipino sentence patterns.",
    "Construct sentences using nouns, pronouns, verbs, and descriptive words.",
    "Use common Filipino markers such as ang, ng, and sa.",
    "Form affirmative, negative, and interrogative sentences.",
    "Construct complete sentences to communicate everyday ideas.",
  ],
  expressionGroups: [
    {
      title: "A. Common Sentence Components",
      items: [
        {
          term: "Pangungusap",
          meaning: "Sentence",
          pronunciation: "pa-ngu-ngu-sap",
        },
        {
          term: "Paksa",
          meaning: "Topic / Subject matter",
          pronunciation: "pak-sa",
        },
        {
          term: "Panaguri",
          meaning: "Predicate",
          pronunciation: "pa-na-gu-ri",
        },
        {
          term: "Pangngalan",
          meaning: "Noun",
          pronunciation: "pang-nga-lan",
        },
        {
          term: "Panghalip",
          meaning: "Pronoun",
          pronunciation: "pang-ha-lip",
        },
        {
          term: "Pandiwa",
          meaning: "Verb",
          pronunciation: "pan-di-wa",
        },
        {
          term: "Pang-uri",
          meaning: "Adjective",
          pronunciation: "pang-u-ri",
        },
        {
          term: "Pang-abay",
          meaning: "Adverb",
          pronunciation: "pang-a-bay",
        },
        {
          term: "Pananda",
          meaning: "Marker",
          pronunciation: "pa-nan-da",
        },
        {
          term: "Salita",
          meaning: "Word",
          pronunciation: "sa-li-ta",
        },
        {
          term: "Parirala",
          meaning: "Phrase",
          pronunciation: "pa-ra-i-la",
        },
        {
          term: "Diwa",
          meaning: "Thought / Meaning",
          pronunciation: "di-wa",
        },
      ],
    },
    {
      title: "B. Common Filipino Markers",
      items: [
        {
          term: "Filipino",
          meaning: "General Function",
          usage: "Example",
        },
        {
          term: "Ang",
          meaning: "Marks a prominent noun phrase or topic",
          usage: "Ang bata ay masaya.",
        },
        {
          term: "Ng",
          meaning: "Marks a non-topic noun phrase, often an object or possessor",
          usage: "Kumain siya ng mansanas.",
        },
        {
          term: "Sa",
          meaning: "Marks location, direction, or recipient in many constructions",
          usage: "Pumunta siya sa paaralan.",
        },
        {
          term: "Si",
          meaning: "Marks a personal name in a common topic or actor phrase",
          usage: "Si Ana ay nag-aaral.",
        },
        {
          term: "Ni",
          meaning: "Marks a personal name in certain non-topic or possessive constructions",
          usage: "Aklat ni Ana ito.",
        },
        {
          term: "Kay",
          meaning: "Marks a person as recipient or reference in certain constructions",
          usage: "Ibinigay ko ito kay Ana.",
        },
        {
          term: "Mga",
          meaning: "Marks plural nouns",
          usage: "Mga bata",
        },
        {
          term: "Ay",
          meaning: "Links a topic or subject phrase to its predicate in a common sentence pattern",
          usage: "Ang bata ay nagbabasa.",
        },
      ],
    },
    {
      title: "C. Common Descriptive Words",
      items: [
        {
          term: "Mabait",
          meaning: "Kind",
          pronunciation: "ma-ba-it",
        },
        {
          term: "Matalino",
          meaning: "Intelligent",
          pronunciation: "ma-ta-li-no",
        },
        {
          term: "Maganda",
          meaning: "Beautiful",
          pronunciation: "ma-gan-da",
        },
        {
          term: "Malaki",
          meaning: "Big",
          pronunciation: "ma-la-ki",
        },
        {
          term: "Maliit",
          meaning: "Small",
          pronunciation: "ma-li-it",
        },
        {
          term: "Mabilis",
          meaning: "Fast",
          pronunciation: "ma-bi-lis",
        },
        {
          term: "Mabagal",
          meaning: "Slow",
          pronunciation: "ma-ba-gal",
        },
        {
          term: "Malinis",
          meaning: "Clean",
          pronunciation: "ma-li-nis",
        },
        {
          term: "Marumi",
          meaning: "Dirty",
          pronunciation: "ma-ru-mi",
        },
        {
          term: "Masarap",
          meaning: "Delicious",
          pronunciation: "ma-sa-rap",
        },
        {
          term: "Mahirap",
          meaning: "Difficult",
          pronunciation: "ma-hi-rap",
        },
        {
          term: "Madali",
          meaning: "Easy",
          pronunciation: "ma-da-li",
        },
        {
          term: "Tahimik",
          meaning: "Quiet",
          pronunciation: "ta-hi-mik",
        },
        {
          term: "Maingay",
          meaning: "Noisy",
          pronunciation: "ma-i-ngay",
        },
        {
          term: "Bago",
          meaning: "New",
          pronunciation: "ba-go",
        },
        {
          term: "Luma",
          meaning: "Old",
          pronunciation: "lu-ma",
        },
      ],
    },
    {
      title: "D. Common Connecting and Negating Words",
      items: [
        {
          term: "At",
          meaning: "And",
        },
        {
          term: "Ngunit",
          meaning: "But / However",
        },
        {
          term: "Pero",
          meaning: "But",
        },
        {
          term: "Dahil",
          meaning: "Because",
        },
        {
          term: "Kaya",
          meaning: "So / Therefore",
        },
        {
          term: "O",
          meaning: "Or",
        },
        {
          term: "Kung",
          meaning: "If",
        },
        {
          term: "Kapag",
          meaning: "When / Whenever",
        },
        {
          term: "Hindi",
          meaning: "Not / No",
        },
        {
          term: "Huwag",
          meaning: "Do not",
        },
        {
          term: "Wala",
          meaning: "None / There is no",
        },
        {
          term: "May",
          meaning: "There is / Has",
        },
      ],
    },
  ],
  languageNotes: [
    {
      title: "A. Understanding the Two Main Parts of a Sentence",
      body: [
        "A basic Filipino sentence can be analyzed into two broad parts:",
        "• Paksa (Topic)",
        "The person, thing, or idea being discussed.",
        "• Panaguri (Predicate)",
        "The part that tells something about the topic.",
        "Ang bata ay nagbabasa ng libro.",
        "• Paksa: Ang bata",
        "• Panaguri: ay nagbabasa ng libro",
        "English: The child is reading a book.",
        "Another example:",
        "Masaya ang mga mag-aaral.",
        "• Paksa: ang mga mag-aaral",
        "• Panaguri: masaya",
        "English: The students are happy.",
      ],
    },
    {
      title: "B. Common Filipino Sentence Patterns",
      body: [
        "Filipino sentence structure is flexible. The following are useful patterns for intermediate learners.",
        "Pattern 1: Verb + Actor + Object",
        "This is a common pattern in action sentences.",
        "Structure:",
        "Pandiwa + Actor + Object",
        "• Kumakain si Ana ng mansanas.",
        "• Nagbabasa ang bata ng libro.",
        "• Nagsusulat si Pedro ng liham.",
        "English:",
        "• Ana is eating an apple.",
        "• The child is reading a book.",
        "• Pedro is writing a letter.",
        "Pattern 2: Topic + Ay + Predicate",
        "This pattern places the topic before the predicate.",
        "Structure:",
        "Topic + ay + Predicate",
        "• Si Ana ay nag-aaral.",
        "• Ang bata ay masaya.",
        "• Ang mga mag-aaral ay nagbabasa.",
        "English:",
        "• Ana is studying.",
        "• The child is happy.",
        "• The students are reading.",
      ],
      remember: "The use of ay is common in this arrangement, but it is not required in every Filipino sentence.",
    },
    {
      title: "B. Common Filipino Sentence Patterns",
      body: [
        "Pattern 3: Predicate + Topic",
        "In ordinary conversation, the predicate often comes before the topic.",
        "• Masaya ang bata.",
        "• Mabait si Ana.",
        "• Malinis ang bahay.",
        "English:",
        "• The child is happy.",
        "• Ana is kind.",
        "• The house is clean.",
      ],
    },
    {
      title: "C. Understanding “Ang,” “Ng,” and “Sa”",
      body: [
        "These markers are important because they help show the grammatical relationship between words.",
        "• Ang",
        "Ang marks a prominent noun phrase, often the topic or a phrase associated with the sentence's focus.",
        "• Ang bata ay nag-aaral.",
        "• Binasa ng bata ang libro.",
        "• Masarap ang pagkain.",
        "• Ng",
        "Ng commonly marks a non-topic noun phrase, including objects and possessors.",
        "• Kumain ako ng tinapay.",
        "• Nagbasa siya ng libro.",
        "• Bahay ng kaibigan ko iyon.",
        "• Sa",
        "Sa commonly indicates location, direction, or a recipient.",
        "• Nasa paaralan siya.",
        "• Pumunta kami sa palengke.",
        "• Ibinigay niya ang regalo sa bata.",
        "Important: These markers do not have exact one-to-one English equivalents. Their use depends on the grammatical construction.",
      ],
    },
    {
      title: "D. Constructing Sentences with Descriptive Words",
      body: [
        "Descriptive words help explain the qualities or characteristics of people, places, and things.",
        "• Mabait ang aking kaibigan.",
        "• Malaki ang kanilang bahay.",
        "• Malinis ang aming silid-aralan.",
        "• Masarap ang nilutong pagkain.",
        "Learners can add descriptive words to make their sentences more informative.",
        "Basic sentence:",
        "• Ang aso ay tumatakbo.",
        "Expanded sentence:",
        "• Ang malaking aso ay mabilis na tumatakbo sa bakuran.",
        "English:",
        "• The big dog is running quickly in the yard.",
      ],
    },
    {
      title: "E. Forming Negative Sentences",
      body: [
        "Negative sentences express that something is not true, does not happen, or should not be done.",
        "Using Hindi",
        "Hindi is commonly used to negate statements and actions.",
        "• Hindi ako nag-aaral ngayon.",
        "• Hindi siya masaya.",
        "• Hindi kami pupunta bukas.",
        "Using Wala",
        "Wala expresses absence or nonexistence.",
        "• Wala akong pera.",
        "• Walang tao sa silid.",
        "• Wala siyang dalang pagkain.",
        "Using Huwag",
        "Huwag expresses prohibition or tells someone not to do something.",
        "• Huwag kang maingay.",
        "• Huwag tumakbo sa pasilyo.",
        "• Huwag mong kalimutan ang iyong bag.",
      ],
    },
    {
      title: "F. Forming Questions",
      body: [
        "Questions can be formed by using question words or the marker ba.",
        "Using Ba",
        "• Pupunta ka ba?",
        "• Masarap ba ang pagkain?",
        "• Nag-aaral ba siya?",
        "Using Question Words",
        "• Ano ang ginagawa mo?",
        "• Saan kayo pupunta?",
        "• Kailan magsisimula ang klase?",
        "• Bakit siya umalis?",
      ],
      remember: "The placement of ba depends on the sentence construction. Learners should practice complete expressions rather than inserting it randomly.",
    },
    {
      title: "G. Connecting Ideas in a Sentence",
      body: [
        "Connecting words help combine ideas and create more complete sentences.",
      ],
      table: {
        leftHeading: "Connector",
        rightHeading: "Function · Example",
        rows: [
          {
            left: "At",
            right: "Adds information · Nag-aaral ako at nagtatrabaho siya.",
          },
          {
            left: "Pero",
            right: "Shows contrast · Gusto kong sumama, pero wala akong oras.",
          },
          {
            left: "Dahil",
            right: "Gives a reason · Hindi ako pumasok dahil may sakit ako.",
          },
          {
            left: "Kaya",
            right: "Shows a result · Umulan nang malakas kaya nanatili kami sa bahay.",
          },
          {
            left: "Kung",
            right: "Introduces a condition · Tutulong ako kung kaya ko.",
          },
        ],
      },
    },
  ],
  situationsTitle: "Useful Phrases and Sentences",
  situationGroups: [
    {
      title: "A. Sentences Using Nouns and Descriptive Words",
      items: [
        {
          term: "Ang bahay ay malaki.",
          meaning: "The house is big.",
        },
        {
          term: "Mabait ang guro.",
          meaning: "The teacher is kind.",
        },
        {
          term: "Malinis ang silid.",
          meaning: "The room is clean.",
        },
        {
          term: "Masarap ang pagkain.",
          meaning: "The food is delicious.",
        },
        {
          term: "Matalino ang bata.",
          meaning: "The child is intelligent.",
        },
      ],
    },
    {
      title: "B. Sentences Using Verbs",
      items: [
        {
          term: "Nag-aaral si Ana.",
          meaning: "Ana is studying.",
        },
        {
          term: "Nagluluto ang aking ina.",
          meaning: "My mother is cooking.",
        },
        {
          term: "Kumakain ng mansanas ang bata.",
          meaning: "The child is eating an apple.",
        },
        {
          term: "Naglalaro sila sa parke.",
          meaning: "They are playing in the park.",
        },
        {
          term: "Nagsusulat ako ng liham.",
          meaning: "I am writing a letter.",
        },
      ],
    },
    {
      title: "C. Negative Sentences",
      items: [
        {
          term: "Hindi ako gutom.",
          meaning: "I am not hungry.",
        },
        {
          term: "Hindi siya pumunta sa paaralan.",
          meaning: "He/She did not go to school.",
        },
        {
          term: "Wala akong dalang payong.",
          meaning: "I do not have an umbrella with me.",
        },
        {
          term: "Hindi masarap ang pagkain.",
          meaning: "The food is not delicious.",
        },
        {
          term: "Huwag kang tumakbo rito.",
          meaning: "Do not run here.",
        },
      ],
    },
    {
      title: "D. Interrogative Sentences",
      items: [
        {
          term: "Kumain ka na ba?",
          meaning: "Have you eaten?",
        },
        {
          term: "Saan ka pupunta?",
          meaning: "Where are you going?",
        },
        {
          term: "Sino ang guro mo?",
          meaning: "Who is your teacher?",
        },
        {
          term: "Maganda ba ang lugar?",
          meaning: "Is the place beautiful?",
        },
        {
          term: "Bakit ka nalulungkot?",
          meaning: "Why are you sad?",
        },
      ],
    },
  ],
  conversations: [
    {
      title: "Dialogue 1: Describing a Classroom",
      lines: [
        {
          speaker: "Teacher",
          text: "Ano ang masasabi ninyo tungkol sa ating silid-aralan?",
          translation: "What can you say about our classroom?",
        },
        {
          speaker: "Student",
          text: "Malinis at maayos po ang ating silid-aralan.",
          translation: "Our classroom is clean and organized.",
        },
        {
          speaker: "Teacher",
          text: "Sino ang naglinis nito?",
          translation: "Who cleaned it?",
        },
        {
          speaker: "Student",
          text: "Kami po ang naglinis bago magsimula ang klase.",
          translation: "We cleaned it before class started.",
        },
        {
          speaker: "Teacher",
          text: "Bakit ninyo ito nilinis?",
          translation: "Why did you clean it?",
        },
        {
          speaker: "Student",
          text: "Dahil nais naming magkaroon ng maayos na lugar para mag-aral.",
          translation: "Because we want to have a good place to study.",
        },
      ],
    },
    {
      title: "Dialogue 2: Talking About Food",
      lines: [
        {
          speaker: "Mia",
          text: "Masarap ba ang niluto mong pagkain?",
          translation: "Is the food you cooked delicious?",
        },
        {
          speaker: "Ella",
          text: "Oo, masarap naman. Nagluto ako ng adobo.",
          translation: "Yes, it is. I cooked adobo.",
        },
        {
          speaker: "Mia",
          text: "Ikaw ba ang naghanda ng lahat ng sangkap?",
          translation: "Did you prepare all the ingredients?",
        },
        {
          speaker: "Ella",
          text: "Oo, pero tinulungan ako ng kapatid ko.",
          translation: "Yes, but my sibling helped me.",
        },
        {
          speaker: "Mia",
          text: "Gusto ko ring matutong magluto ng adobo.",
          translation: "I also want to learn how to cook adobo.",
        },
        {
          speaker: "Ella",
          text: "Tuturuan kita kapag may oras ako.",
          translation: "I will teach you when I have time.",
        },
      ],
    },
    {
      title: "Dialogue 3: Making Plans",
      lines: [
        {
          speaker: "Rico",
          text: "Pupunta ka ba sa paligsahan bukas?",
          translation: "Are you going to the competition tomorrow?",
        },
        {
          speaker: "Liza",
          text: "Oo, pupunta ako dahil sasali ang aming pangkat.",
          translation: "Yes, I am going because our group will participate.",
        },
        {
          speaker: "Rico",
          text: "Ano ang ihahanda ninyo?",
          translation: "What will you prepare?",
        },
        {
          speaker: "Liza",
          text: "Maghahanda kami ng isang maikling pagtatanghal.",
          translation: "We will prepare a short presentation.",
        },
        {
          speaker: "Rico",
          text: "Maaari ba akong manood?",
          translation: "Can I watch?",
        },
        {
          speaker: "Liza",
          text: "Siyempre! Maaari kang sumama sa amin.",
          translation: "Of course! You can join us.",
        },
      ],
    },
  ],
  choiceActivity: {
    title: "Complete the Sentence",
    instructions: "Choose the correct word to complete each sentence.",
    questions: [
      {
        id: 1,
        prompt: "______ ako ng libro tuwing gabi.",
        options: [
          {
            key: "A",
            text: "Nagbabasa",
          },
          {
            key: "B",
            text: "Malaki",
          },
          {
            key: "C",
            text: "Masarap",
          },
          {
            key: "D",
            text: "Tahimik",
          },
        ],
        answerKey: "A",
      },
      {
        id: 2,
        prompt: "Hindi ______ gutom ngayon.",
        options: [
          {
            key: "A",
            text: "ako",
          },
          {
            key: "B",
            text: "ng",
          },
          {
            key: "C",
            text: "sa",
          },
          {
            key: "D",
            text: "ang",
          },
        ],
        answerKey: "A",
      },
      {
        id: 3,
        prompt: "Malinis ______ silid-aralan.",
        options: [
          {
            key: "A",
            text: "ng",
          },
          {
            key: "B",
            text: "ang",
          },
          {
            key: "C",
            text: "sa",
          },
          {
            key: "D",
            text: "mga",
          },
        ],
        answerKey: "B",
      },
      {
        id: 4,
        prompt: "Pumunta kami ______ palengke.",
        options: [
          {
            key: "A",
            text: "ang",
          },
          {
            key: "B",
            text: "ng",
          },
          {
            key: "C",
            text: "sa",
          },
          {
            key: "D",
            text: "mga",
          },
        ],
        answerKey: "C",
      },
      {
        id: 5,
        prompt: "Gusto kong sumama, ______ marami pa akong gagawin.",
        options: [
          {
            key: "A",
            text: "at",
          },
          {
            key: "B",
            text: "pero",
          },
          {
            key: "C",
            text: "dahil",
          },
          {
            key: "D",
            text: "o",
          },
        ],
        answerKey: "B",
      },
    ],
  },
  fillInBlanks: {
    title: "Choose the Correct Marker",
    instructions: "Choose between ang, ng, and sa.",
    items: [
      {
        id: "2-1",
        sentence: "Kumain ako ______ mansanas.",
        answer: "ng",
        title: "Choose the Correct Marker",
        instructions: "Choose between ang, ng, and sa.",
        wordBank: [
          "ng",
          "Ang",
          "sa",
        ],
      },
      {
        id: "2-2",
        sentence: "______ bata ay nag-aaral.",
        answer: "Ang",
        title: "Choose the Correct Marker",
        instructions: "Choose between ang, ng, and sa.",
        wordBank: [
          "ng",
          "Ang",
          "sa",
        ],
      },
      {
        id: "2-3",
        sentence: "Pumunta sila ______ paaralan.",
        answer: "sa",
        title: "Choose the Correct Marker",
        instructions: "Choose between ang, ng, and sa.",
        wordBank: [
          "ng",
          "Ang",
          "sa",
        ],
      },
      {
        id: "2-4",
        sentence: "Nagbabasa siya ______ libro.",
        answer: "ng",
        title: "Choose the Correct Marker",
        instructions: "Choose between ang, ng, and sa.",
        wordBank: [
          "ng",
          "Ang",
          "sa",
        ],
      },
      {
        id: "2-5",
        sentence: "Ibinigay ko ang regalo ______ aking kaibigan.",
        answer: "sa",
        title: "Choose the Correct Marker",
        instructions: "Choose between ang, ng, and sa.",
        wordBank: [
          "ng",
          "Ang",
          "sa",
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
          "ang",
          "Masarap",
          "pagkain",
        ],
        answer: [
          "Masarap",
          "ang",
          "pagkain",
        ],
        display: "Masarap ang pagkain.",
      },
      {
        id: "2",
        words: [
          "nag-aaral",
          "Si Ana",
        ],
        answer: [
          "nag-aaral",
          "Si Ana",
        ],
        display: "Nag-aaral si Ana.",
      },
      {
        id: "3",
        words: [
          "ba",
          "Pupunta",
          "bukas",
          "ka",
        ],
        answer: [
          "Pupunta",
          "ka",
          "ba",
          "bukas",
        ],
        display: "Pupunta ka ba bukas?",
      },
    ],
  },
  assessment: {
    instructions: "Choose the correct answer.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What is a pangungusap?",
        options: [
          {
            key: "A",
            text: "A letter",
          },
          {
            key: "B",
            text: "A sentence",
          },
          {
            key: "C",
            text: "A number",
          },
          {
            key: "D",
            text: "A sound",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "Which part of a sentence tells something about the topic?",
        options: [
          {
            key: "A",
            text: "Panaguri",
          },
          {
            key: "B",
            text: "Pangngalan",
          },
          {
            key: "C",
            text: "Panghalip",
          },
          {
            key: "D",
            text: "Pang-abay",
          },
        ],
        answerKey: "A",
      },
      {
        id: 3,
        prompt: "Which sentence means “The child is eating an apple”?",
        options: [
          {
            key: "A",
            text: "Kumakain ng mansanas ang bata.",
          },
          {
            key: "B",
            text: "Ang mansanas ay natutulog.",
          },
          {
            key: "C",
            text: "Kumakain ang bata sa paaralan.",
          },
          {
            key: "D",
            text: "Ang bata ay malungkot.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 4,
        prompt: "Which marker commonly indicates location or direction?",
        options: [
          {
            key: "A",
            text: "Ang",
          },
          {
            key: "B",
            text: "Ng",
          },
          {
            key: "C",
            text: "Sa",
          },
          {
            key: "D",
            text: "Si",
          },
        ],
        answerKey: "C",
      },
      {
        id: 5,
        prompt: "Which sentence is negative?",
        options: [
          {
            key: "A",
            text: "Nag-aaral ako.",
          },
          {
            key: "B",
            text: "Hindi ako gutom.",
          },
          {
            key: "C",
            text: "Masaya siya.",
          },
          {
            key: "D",
            text: "Pupunta kami.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 6,
        prompt: "What does “Huwag kang tumakbo” mean?",
        options: [
          {
            key: "A",
            text: "You are running.",
          },
          {
            key: "B",
            text: "Do not run.",
          },
          {
            key: "C",
            text: "You ran.",
          },
          {
            key: "D",
            text: "You will run.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 7,
        prompt: "Which word expresses contrast?",
        options: [
          {
            key: "A",
            text: "At",
          },
          {
            key: "B",
            text: "Dahil",
          },
          {
            key: "C",
            text: "Pero",
          },
          {
            key: "D",
            text: "Kaya",
          },
        ],
        answerKey: "C",
      },
      {
        id: 8,
        prompt: "Which sentence is interrogative?",
        options: [
          {
            key: "A",
            text: "Masarap ang pagkain.",
          },
          {
            key: "B",
            text: "Nag-aaral siya.",
          },
          {
            key: "C",
            text: "Hindi ako aalis.",
          },
          {
            key: "D",
            text: "Pupunta ka ba?",
          },
        ],
        answerKey: "D",
      },
      {
        id: 9,
        prompt: "Which sentence correctly uses “ng”?",
        options: [
          {
            key: "A",
            text: "Kumain ako ng tinapay.",
          },
          {
            key: "B",
            text: "Kumain ako sa tinapay.",
          },
          {
            key: "C",
            text: "Kumain ako ang tinapay.",
          },
          {
            key: "D",
            text: "Kumain ako si tinapay.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 10,
        prompt: "Which sentence means “I did not go to school because I was sick”?",
        options: [
          {
            key: "A",
            text: "Pumasok ako dahil masaya ako.",
          },
          {
            key: "B",
            text: "Hindi ako pumasok dahil may sakit ako.",
          },
          {
            key: "C",
            text: "Pumunta ako sa paaralan.",
          },
          {
            key: "D",
            text: "Nag-aaral ako at nagtatrabaho siya.",
          },
        ],
        answerKey: "B",
      },
    ],
  },
  extraActivities: [
    {
      title: "Identify the Topic and Predicate",
      kind: "choice",
      instructions: "Identify the topic and predicate in each sentence.",
      items: [
        "Ang bata ay nagbabasa ng libro.",
        "Masarap ang pagkain.",
        "Si Maria ay nagluluto ng hapunan.",
        "Malinis ang aming silid-aralan.",
        "Naglalaro ang mga bata sa parke.",
      ],
      answers: [
        "Topic: Ang bata | Predicate: ay nagbabasa ng libro",
        "Topic: ang pagkain | Predicate: masarap",
        "Topic: Si Maria | Predicate: ay nagluluto ng hapunan",
        "Topic: ang aming silid-aralan | Predicate: malinis",
        "Topic: ang mga bata | Predicate: naglalaro sa parke",
      ],
    },
    {
      title: "Identify the Sentence Type",
      kind: "choice",
      instructions: "Identify whether each sentence is affirmative, negative, or interrogative.",
      items: [
        "Nag-aaral ako araw-araw.",
        "Hindi siya pumasok kahapon.",
        "Pupunta ka ba sa palengke?",
        "Masarap ang pagkain.",
        "Wala akong dalang payong.",
      ],
      answers: [
        "Affirmative",
        "Negative",
        "Interrogative",
        "Affirmative",
        "Negative",
      ],
    },
    {
      title: "Arrange the Words",
      kind: "arrange",
      instructions: "Arrange the words to form correct Filipino sentences.",
      items: [
        "ng / Kumain / bata / mansanas / ang",
        "kami / sa / Pumunta / parke / ang",
      ],
      answers: [
        "Kumakain ng mansanas ang bata.",
        "Pumunta kami sa parke.",
      ],
    },
    {
      title: "Expand the Sentence",
      kind: "rewrite",
      instructions: "Add more information to make each sentence more descriptive.\nExample:\nBasic: Nagbabasa ako.\nExpanded: Nagbabasa ako ng libro sa aming silid tuwing gabi.\nNow expand these sentences:",
      items: [
        "Nagluluto si Ana.",
        "Naglalaro ang mga bata.",
        "Nag-aaral kami.",
        "Tumakbo ang aso.",
        "Nagsusulat siya.",
      ],
    },
    {
      title: "Translate the Sentences",
      kind: "translate",
      instructions: "Translate the following sentences into Filipino.",
      items: [
        "The child is reading a book.",
        "My mother is cooking dinner.",
        "I am not hungry.",
        "Are you going to school?",
        "We are studying because we have an examination.",
      ],
      answers: [
        "Nagbabasa ng libro ang bata.",
        "Nagluluto ng hapunan ang aking ina.",
        "Hindi ako gutom.",
        "Pupunta ka ba sa paaralan?",
        "Nag-aaral tayo dahil may pagsusulit tayo.",
      ],
    },
    {
      title: "Sentence Construction Challenge",
      kind: "open",
      instructions: "Create five original Filipino sentences using the following requirements:",
      items: [
        "One sentence using a pronoun.",
        "One sentence using a common verb.",
        "One sentence using a descriptive word.",
        "One negative sentence.",
        "One sentence using a connecting word.",
      ],
      note: "Learners should submit their answers for automatic checking or instructor review.",
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
        label: "Complete Sentence Structure Exercises + Complete Sentence Construction Challenge",
        xp: 30,
      },
      {
        section: "assessment",
        label: "Pass Lesson Assessment",
        xp: 15,
      },
    ],
    total: 70,
    badge: {
      name: "Sentence Builder Badge",
      description: "Awarded to learners who successfully construct understandable Filipino sentences using appropriate markers, pronouns, verbs, and descriptive words.",
    },
    completionRequirement: "Complete the vocabulary section. Finish the guided conversations. Complete the practice activities. Obtain at least 70% in the lesson assessment.",
  },
  expectedOutcomes: [
    "Identify the basic components of Filipino sentences.",
    "Recognize common Filipino sentence patterns.",
    "Use ang, ng, and sa in familiar constructions.",
    "Construct affirmative, negative, and interrogative sentences.",
    "Use descriptive words and connecting expressions.",
    "Organize words into understandable sentences.",
    "Express simple but complete ideas in Filipino.",
  ],
};
