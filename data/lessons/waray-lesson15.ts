import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 15 — imported from "Lesson Plan.pdf", pages 854–869.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.

export const warayLesson15: StructuredLesson = {
  lessonId: "waray_15",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 15,
  title: "Basic Sentence Structure",
  level: "Intermediate",
  unit: "Grammar and Sentence Construction",
  estimatedDuration: "35–45 minutes",
  prerequisite: "Lessons 1–14",
  intro: [
    "A sentence is a group of words that expresses a complete thought. It usually communicates an action, condition, description, or question.",
    "In Waray, sentences can be arranged in different ways depending on what the speaker wants to emphasize. Some sentences begin with an action or description, while others begin with the person or thing being discussed.",
    "For example:",
    "• Nagbabasa ako hin libro. – I am reading a book.",
    "• Maestra hiya. – He/She is a teacher.",
    "• Diri ako gutom. – I am not hungry.",
    "• Hain an imo libro? – Where is your book?",
    "Understanding sentence structure helps learners communicate more clearly and naturally.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify the basic parts of a Waray sentence.",
    "Recognize common sentence patterns used in everyday communication.",
    "Construct simple affirmative and negative sentences.",
    "Form basic questions using common Waray question words.",
    "Translate simple English sentences into understandable Waray.",
  ],
  expressionGroups: [
    {
      title: "A. Common Connecting Words",
      intro: [
        "Connecting words help join ideas and make sentences more complete.",
      ],
      items: [
        {
          term: "Ngan",
          meaning: "And",
          pronunciation: "Ngan",
        },
        {
          term: "Pero",
          meaning: "But",
          pronunciation: "Pe-ro",
        },
        {
          term: "Kay / Tungod kay",
          meaning: "Because",
          pronunciation: "Kay / Tung-od kay",
        },
        {
          term: "Kon",
          meaning: "If",
          pronunciation: "Kon",
        },
        {
          term: "O",
          meaning: "Or",
          pronunciation: "O",
        },
        {
          term: "Gihapon",
          meaning: "Also",
          pronunciation: "Gi-ha-pon",
        },
        {
          term: "Upod / Kaupod",
          meaning: "With",
          pronunciation: "U-pod / Ka-u-pod",
        },
      ],
    },
    {
      title: "B. Sentence Examples",
      items: [
        {
          term: "Nagbabasa ako ngan nagsusurat.",
          meaning: "I am reading and writing.",
        },
        {
          term: "Karuyag ko kumaon, pero waray pa pagkaon.",
          meaning: "I want to eat, but there is no food yet.",
        },
        {
          term: "Nalilipay ako kay upod ko an akon pamilya.",
          meaning: "I am happy because my family is with me.",
        },
        {
          term: "Kon may panahon ako, magbabasa ako.",
          meaning: "If I have time, I will read.",
        },
      ],
    },
    {
      title: "C. Adding Time and Place",
      items: [
        {
          term: "Nag-aadal ako yana.",
          meaning: "I am studying now.",
        },
        {
          term: "Nagtrabaho hiya kahapon.",
          meaning: "He/She worked yesterday.",
        },
        {
          term: "Makadto kami buwas.",
          meaning: "We will go tomorrow.",
        },
        {
          term: "Nagbabasa hiya ha librarya.",
          meaning: "He/She is reading at the library.",
        },
      ],
    },
  ],
  languageNotes: [
    {
      title: "Parts of a Sentence",
      body: [
        "A basic sentence can contain a subject, a predicate, and sometimes an object or additional information.",
      ],
    },
    {
      title: "A. Subject",
      body: [
        "The subject identifies the person, animal, place, or thing being discussed.",
      ],
      table: {
        leftHeading: "English",
        rightHeading: "Waray",
        rows: [
          {
            left: "I",
            right: "Ako",
          },
          {
            left: "You",
            right: "Ikaw / Ka",
          },
          {
            left: "He / She",
            right: "Hiya",
          },
          {
            left: "The child",
            right: "An bata",
          },
          {
            left: "The teacher",
            right: "An maestra",
          },
          {
            left: "The student",
            right: "An estudyante",
          },
        ],
      },
    },
    {
      title: "B. Predicate",
      body: [
        "The predicate tells something about the subject. It may describe an action, condition, or identity.",
      ],
      table: {
        leftHeading: "English",
        rightHeading: "Waray",
        rows: [
          {
            left: "is reading",
            right: "nagbabasa",
          },
          {
            left: "is cooking",
            right: "nagluluto",
          },
          {
            left: "is studying",
            right: "nag-aadal",
          },
          {
            left: "is happy",
            right: "malipayon",
          },
          {
            left: "is a teacher",
            right: "maestra",
          },
        ],
      },
    },
    {
      title: "C. Object",
      body: [
        "The object identifies the person or thing involved in the action.",
      ],
      table: {
        leftHeading: "English",
        rightHeading: "Waray",
        rows: [
          {
            left: "a book",
            right: "hin libro",
          },
          {
            left: "food",
            right: "pagkaon",
          },
          {
            left: "water",
            right: "tubig",
          },
          {
            left: "a letter",
            right: "surat",
          },
          {
            left: "a story",
            right: "istorya",
          },
        ],
      },
    },
    {
      title: "C. Object",
      body: [
        "Example sentence:",
        "Nagbabasa ako hin libro. I am reading a book.",
      ],
      examples: [
        {
          text: "Nagbabasa",
          meaning: "action",
        },
        {
          text: "Ako",
          meaning: "person performing the action",
        },
        {
          text: "Hin libro",
          meaning: "object or thing being read",
        },
      ],
    },
    {
      title: "Basic Sentence Patterns",
      body: [
        "Waray sentence construction does not always follow one fixed word order. The following are useful introductory patterns.",
      ],
    },
    {
      title: "A. Action + Subject",
      body: [
        "This pattern is commonly seen in sentences that begin with an action or verb expression.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Nagbabasa ako.",
            right: "I am reading.",
          },
          {
            left: "Nagluluto hiya.",
            right: "He/She is cooking.",
          },
          {
            left: "Nag-aadal kami.",
            right: "We are studying.",
          },
          {
            left: "Nag-uuyag hira.",
            right: "They are playing.",
          },
        ],
      },
    },
    {
      title: "B. Description + Subject",
      body: [
        "A descriptive word can be used to tell something about a person or object.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Malipayon ako.",
            right: "I am happy.",
          },
          {
            left: "Gutom hiya.",
            right: "He/She is hungry.",
          },
          {
            left: "Matahom an lugar.",
            right: "The place is beautiful.",
          },
          {
            left: "Dako an balay.",
            right: "The house is big.",
          },
        ],
      },
    },
    {
      title: "C. Noun + Subject Identification",
      body: [
        "This pattern identifies a person or explains what someone is.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Estudyante ako.",
            right: "I am a student.",
          },
          {
            left: "Maestra hiya.",
            right: "He/She is a teacher.",
          },
          {
            left: "Doktor hiya.",
            right: "He/She is a doctor.",
          },
          {
            left: "Sangkay ko hiya.",
            right: "He/She is my friend.",
          },
        ],
      },
    },
    {
      title: "D. Sentence with Additional Information",
      body: [
        "Additional words can tell where, when, or how an action happens.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Nagbabasa ako ha balay.",
            right: "I am reading at home.",
          },
          {
            left: "Nag-aadal hiya ha eskwelahan.",
            right: "He/She is studying at school.",
          },
          {
            left: "Nagluluto hi Nanay ha kusina.",
            right: "Mother is cooking in the kitchen.",
          },
          {
            left: "Nagkadto kami ha merkado kahapon.",
            right: "We went to the market yesterday.",
          },
        ],
      },
    },
    {
      title: "Affirmative and Negative Sentences",
      body: [
        "Affirmative sentences express that something happens or is true. Negative sentences express that something does not happen or is not true.",
      ],
    },
    {
      title: "A. Affirmative Sentences",
      table: {
        leftHeading: "English",
        rightHeading: "Waray",
        rows: [
          {
            left: "I am reading.",
            right: "Nagbabasa ako.",
          },
          {
            left: "She is cooking.",
            right: "Nagluluto hiya.",
          },
          {
            left: "We are studying.",
            right: "Nag-aadal kami.",
          },
          {
            left: "They are playing.",
            right: "Nag-uuyag hira.",
          },
          {
            left: "The food is delicious.",
            right: "Lami an pagkaon.",
          },
        ],
      },
    },
    {
      title: "B. Negative Sentences",
      body: [
        "The word diri is commonly used to make a statement negative.",
      ],
      table: {
        leftHeading: "English",
        rightHeading: "Waray",
        rows: [
          {
            left: "I am not reading.",
            right: "Diri ako nagbabasa.",
          },
          {
            left: "She is not cooking.",
            right: "Diri hiya nagluluto.",
          },
          {
            left: "We are not studying.",
            right: "Diri kami nag-aadal.",
          },
          {
            left: "They are not playing.",
            right: "Diri hira nag-uuyag.",
          },
          {
            left: "I am not hungry.",
            right: "Diri ako gutom.",
          },
        ],
      },
    },
    {
      title: "C. Comparing Affirmative and Negative Sentences",
      table: {
        leftHeading: "",
        rightHeading: "",
        rows: [
          {
            left: "Affirmative",
            right: "Negative",
          },
          {
            left: "Nagbabasa ako.",
            right: "Diri ako nagbabasa.",
          },
          {
            left: "Nagluluto hiya.",
            right: "Diri hiya nagluluto.",
          },
          {
            left: "Malipayon ako.",
            right: "Diri ako malipayon.",
          },
          {
            left: "Estudyante hiya.",
            right: "Diri hiya estudyante.",
          },
        ],
      },
    },
    {
      title: "C. Comparing Affirmative and Negative Sentences",
      body: [
        "Observe how adding diri changes the meaning of the sentence.",
      ],
    },
    {
      title: "Forming Questions",
      body: [
        "Questions are used to ask for information, confirmation, or clarification.",
      ],
    },
    {
      title: "A. Yes-or-No Questions",
      body: [
        "The particle ba is commonly used to form questions that can be answered with yes or no.",
      ],
      table: {
        leftHeading: "English",
        rightHeading: "Waray",
        rows: [
          {
            left: "Are you studying?",
            right: "Nag-aadal ka ba?",
          },
          {
            left: "Are you hungry?",
            right: "Gutom ka ba?",
          },
          {
            left: "Is she cooking?",
            right: "Nagluluto ba hiya?",
          },
          {
            left: "Do you understand?",
            right: "Nasasabtan mo ba?",
          },
          {
            left: "Do you want to eat?",
            right: "Karuyag mo ba kumaon?",
          },
        ],
      },
    },
    {
      title: "B. Information Questions",
      table: {
        leftHeading: "English Question Word",
        rightHeading: "Waray · Example",
        rows: [
          {
            left: "What",
            right: "Ano · Ano an imo karuyag?",
          },
          {
            left: "Who",
            right: "Hin-o · Hin-o hiya?",
          },
          {
            left: "Where",
            right: "Diin / Hain · Diin ka makadto?",
          },
          {
            left: "When",
            right: "San-o · San-o ka mauli?",
          },
          {
            left: "Why",
            right: "Kay ano · Kay ano nga nalilipay ka?",
          },
          {
            left: "How",
            right: "Paonan-o · Paonan-o ini pagbuhaton?",
          },
          {
            left: "How many / How much",
            right: "Pira · Pira ini?",
          },
        ],
      },
    },
    {
      title: "C. Sample Questions and Answers",
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Ano an imo ginbubuhat?",
            right: "What are you doing?",
          },
          {
            left: "Nagbabasa ako.",
            right: "I am reading.",
          },
          {
            left: "Hain an imo libro?",
            right: "Where is your book?",
          },
          {
            left: "Aada ha lamisa.",
            right: "It is on the table.",
          },
          {
            left: "Kay ano nga nag-aadal ka?",
            right: "Why are you studying?",
          },
          {
            left: "Karuyag ko mahibaro.",
            right: "I want to learn.",
          },
        ],
      },
    },
  ],
  conversations: [
    {
      title: "Conversation A: Talking About School",
      lines: [
        {
          speaker: "Ana",
          text: "Ano an imo ginbubuhat?",
          translation: "What are you doing?",
        },
        {
          speaker: "Ben",
          text: "Nagbabasa ako hin libro.",
          translation: "I am reading a book.",
        },
        {
          speaker: "Ana",
          text: "Nag-aadal ka ba para ha eksam?",
          translation: "Are you studying for the exam?",
        },
        {
          speaker: "Ben",
          text: "Oo, kay may eksam kami buwas.",
          translation: "Yes, because we have an exam tomorrow.",
        },
        {
          speaker: "Ana",
          text: "Maupod ako ha imo pag-adal.",
          translation: "I will join you in studying.",
        },
        {
          speaker: "Ben",
          text: "Sige, salamat.",
          translation: "Okay, thank you.",
        },
      ],
    },
    {
      title: "Conversation B: Asking About a Place",
      lines: [
        {
          speaker: "Maria",
          text: "Hain an imo balay?",
          translation: "Where is your house?",
        },
        {
          speaker: "Rosa",
          text: "Hirani la ha merkado.",
          translation: "It is just near the market.",
        },
        {
          speaker: "Maria",
          text: "Hirayo ba tikang dinhi?",
          translation: "Is it far from here?",
        },
        {
          speaker: "Rosa",
          text: "Diri, hirani la.",
          translation: "No, it is just nearby.",
        },
        {
          speaker: "Maria",
          text: "Makadto ako ha imo balay buwas.",
          translation: "I will go to your house tomorrow.",
        },
        {
          speaker: "Rosa",
          text: "Sige, magkita kita buwas.",
          translation: "Okay, see you tomorrow.",
        },
      ],
    },
    {
      title: "Conversation C: Making a Simple Plan",
      lines: [
        {
          speaker: "Carlo",
          text: "Karuyag mo ba kumadto ha parke?",
          translation: "Do you want to go to the park?",
        },
        {
          speaker: "Mark",
          text: "Oo, karuyag ko.",
          translation: "Yes, I want to.",
        },
        {
          speaker: "Carlo",
          text: "Makadto kita buwas ha aga.",
          translation: "We will go tomorrow morning.",
        },
        {
          speaker: "Mark",
          text: "Sige, upod ta an iba naton nga sangkay.",
          translation: "Okay, let's bring our other friends.",
        },
        {
          speaker: "Carlo",
          text: "Maupay ito nga ideya.",
          translation: "That is a good idea.",
        },
        {
          speaker: "Mark",
          text: "Kitaay kita buwas.",
          translation: "See you tomorrow.",
        },
      ],
    },
  ],
  extraActivities: [
    {
      title: "Identify the Sentence Parts",
      kind: "choice",
      instructions: "Read each sentence and identify the action or description, subject, and object or additional information when present.",
      items: [
        "Nagbabasa ako hin libro.",
        "Nagluluto hiya ha kusina.",
        "Malipayon an bata.",
        "Nag-aadal kami ha eskwelahan.",
        "Nagkadto hira ha merkado kahapon.",
      ],
    },
    {
      title: "Make the Sentence Negative",
      kind: "rewrite",
      instructions: "Rewrite each affirmative sentence as a negative sentence using diri.",
      items: [
        "Nagbabasa ako.",
        "Nagluluto hiya.",
        "Nag-aadal kami.",
        "Nag-uuyag hira.",
        "Malipayon ako.",
      ],
    },
    {
      title: "Turn Statements into Questions",
      kind: "rewrite",
      instructions: "Rewrite each statement as a yes-or-no question using ba where appropriate.",
      items: [
        "Nag-aadal ka.",
        "Gutom hiya.",
        "Nasasabtan mo ini.",
        "Karuyag mo kumaon.",
        "Nagbabasa hira.",
      ],
    },
    {
      title: "Arrange the Words",
      kind: "arrange",
      instructions: "Arrange the following words into meaningful Waray sentences.",
      items: [
        "ako / Nagbabasa / hin libro",
        "hiya / nagluluto / Diri",
        "an imo libro / Hain",
        "ha eskwelahan / Nag-aadal / kami",
        "buwas / Makadto / hira",
      ],
    },
    {
      title: "Translate into Waray",
      kind: "translate",
      instructions: "Translate the following sentences using the lesson examples.",
      items: [
        "I am reading a book.",
        "She is not cooking.",
        "Are you studying?",
        "Where is your house?",
        "We will go tomorrow.",
      ],
    },
    {
      title: "Lesson Assessment",
      kind: "assessment",
      items: [
        "What Waray word is commonly used to make a sentence negative?",
        "What particle is commonly used in yes-or-no questions?",
        "Translate: “I am reading a book.”",
        "Translate: “She is not cooking.”",
        "What does Ngan mean?",
        "Translate: “Where is your book?”",
        "Which Waray expression means “because”?",
        "Translate: “We are studying at school.”",
        "What does Gutom ka ba? mean?",
        "Translate: “They are going tomorrow.”",
      ],
      answers: [
        "Diri",
        "Ba",
        "Nagbabasa ako hin libro.",
        "Diri hiya nagluluto.",
        "And",
        "Hain an imo libro?",
        "Kay / Tungod kay",
        "Nag-aadal kami ha eskwelahan.",
        "Are you hungry?",
        "Makadto hira buwas.",
      ],
    },
  ],
  rewards: {
    items: [
      {
        section: "conversation",
        label: "Sentence Parts Identification + Negative Sentence Practice + Question Formation + Lesson Assessment",
        xp: 45,
      },
      {
        section: "vocabulary",
        label: "Word Arrangement and Translation",
        xp: 15,
      },
    ],
    total: 60,
    badge: {
      name: "Sentence Builder Badge",
    },
  },
};
