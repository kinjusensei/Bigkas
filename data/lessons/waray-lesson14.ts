import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 14 — imported from "Lesson Plan.pdf", pages 844–853.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.

export const warayLesson14: StructuredLesson = {
  lessonId: "waray_14",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 14,
  title: "Pronouns and Common Verbs",
  level: "Intermediate",
  unit: "Grammar and Sentence Construction",
  estimatedDuration: "35–45 minutes",
  prerequisite: "Lessons 1–13",
  intro: [
    "Pronouns are words used in place of people's names or nouns. They help speakers avoid repeating names and make conversations more natural.",
    "Verbs express actions, activities, or states. Examples include eating, reading, studying, walking, and working.",
    "In Waray, pronouns and verbs are important for constructing sentences and communicating everyday activities.",
    "For example:",
    "• Ako an nagbabasa. – I am the one reading.",
    "• Nag-aadál ako. – I am studying.",
    "• Nagluluto hiya. – He/She is cooking.",
    "The placement of pronouns and the form of verbs can vary depending on the sentence structure and the intended meaning. This lesson introduces useful examples rather than treating one sentence pattern as universal.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify common personal pronouns in Waray.",
    "Recognize commonly used verbs in everyday communication.",
    "Understand how pronouns and verbs work together in simple Waray sentences.",
    "Construct basic sentences using appropriate pronouns and verbs.",
    "Understand and respond to short conversations involving everyday activities.",
  ],
  expressionGroups: [
    {
      title: "A. Basic Personal Pronouns",
      intro: [
        "Personal pronouns refer to the speaker, the person being spoken to, or the person being discussed.",
        "Important distinction:",
        "• Kami refers to the speaker and other people, but excludes the listener.",
        "• Kita includes both the speaker and the listener.",
      ],
      items: [
        {
          term: "Ako",
          meaning: "I",
          pronunciation: "A-ko",
        },
        {
          term: "Ikaw / Ka",
          meaning: "You (singular)",
          pronunciation: "I-kaw / Ka",
        },
        {
          term: "Hiya",
          meaning: "He / She",
          pronunciation: "Hi-ya",
        },
        {
          term: "Kami",
          meaning: "We (excluding the listener)",
          pronunciation: "Ka-mi",
        },
        {
          term: "Kita",
          meaning: "We (including the listener)",
          pronunciation: "Ki-ta",
        },
        {
          term: "Kamo",
          meaning: "You (plural)",
          pronunciation: "Ka-mo",
        },
        {
          term: "Hira",
          meaning: "They",
          pronunciation: "Hi-ra",
        },
      ],
    },
    {
      title: "B. Demonstrative Pronouns",
      intro: [
        "These forms are useful when identifying or referring to people and objects. Their exact use may depend on context.",
      ],
      items: [
        {
          term: "Ini",
          meaning: "This",
          pronunciation: "I-ni",
        },
        {
          term: "Ito",
          meaning: "That",
          pronunciation: "I-to",
        },
        {
          term: "Ini nga mga",
          meaning: "These",
          pronunciation: "I-ni nga ma-nga",
        },
        {
          term: "Ito nga mga",
          meaning: "Those",
          pronunciation: "I-to nga ma-nga",
        },
      ],
    },
    {
      title: "C. Possessive Forms",
      intro: [
        "Examples:",
      ],
      items: [
        {
          term: "Akon",
          meaning: "My / Mine",
          pronunciation: "A-kon",
        },
        {
          term: "Imo",
          meaning: "Your / Yours",
          pronunciation: "I-mo",
        },
        {
          term: "Iya",
          meaning: "His / Hers",
          pronunciation: "I-ya",
        },
        {
          term: "Amon",
          meaning: "Our (excluding listener)",
          pronunciation: "A-mon",
        },
        {
          term: "Aton",
          meaning: "Our (including listener)",
          pronunciation: "A-ton",
        },
        {
          term: "Ira",
          meaning: "Their / Theirs",
          pronunciation: "I-ra",
        },
        {
          term: "Akon ini.",
          meaning: "This is mine.",
        },
        {
          term: "Imo ito.",
          meaning: "That is yours.",
        },
        {
          term: "Iya an libro.",
          meaning: "The book is his/hers.",
        },
      ],
    },
    {
      title: "A. Everyday Actions",
      intro: [
        "Verbs describe actions or activities. The following are useful verbs for everyday conversations.",
      ],
      items: [
        {
          term: "Kumaon",
          meaning: "Eat",
          pronunciation: "Ku-ma-on",
        },
        {
          term: "Uminom",
          meaning: "Drink",
          pronunciation: "U-mi-nom",
        },
        {
          term: "Magbasa",
          meaning: "Read",
          pronunciation: "Mag-ba-sa",
        },
        {
          term: "Magsurat",
          meaning: "Write",
          pronunciation: "Mag-su-rat",
        },
        {
          term: "Mag-adal",
          meaning: "Study",
          pronunciation: "Mag-a-dal",
        },
        {
          term: "Magluto",
          meaning: "Cook",
          pronunciation: "Mag-lu-to",
        },
        {
          term: "Magtrabaho",
          meaning: "Work",
          pronunciation: "Mag-tra-ba-ho",
        },
        {
          term: "Maglimpyo",
          meaning: "Clean",
          pronunciation: "Mag-lim-pyo",
        },
        {
          term: "Maglakat",
          meaning: "Walk",
          pronunciation: "Mag-la-kat",
        },
        {
          term: "Mag-uyag",
          meaning: "Play",
          pronunciation: "Mag-u-yag",
        },
        {
          term: "Maturog",
          meaning: "Sleep",
          pronunciation: "Ma-tu-rog",
        },
        {
          term: "Pahuway",
          meaning: "Rest",
          pronunciation: "Pa-hu-way",
        },
        {
          term: "Umuli",
          meaning: "Return home",
          pronunciation: "U-mu-li",
        },
        {
          term: "Bulig",
          meaning: "Help",
          pronunciation: "Bu-lig",
        },
      ],
    },
    {
      title: "B. Common Descriptive and Activity Words",
      intro: [
        "Note: Some entries above are root words or dictionary forms rather than ready-to-use verbs in every sentence. For example, bulig means help, while a complete expression may require a different grammatical construction.",
      ],
      items: [
        {
          term: "Maaram",
          meaning: "Know",
          pronunciation: "Ma-a-ram",
        },
        {
          term: "Sabot",
          meaning: "Understand",
          pronunciation: "Sa-bot",
        },
        {
          term: "Karuyag",
          meaning: "Want",
          pronunciation: "Ka-ru-yag",
        },
        {
          term: "Hinigugma / Hinigugmaon (context-dependent)",
          meaning: "Like / Love",
          pronunciation: "Hi-ni-gug-ma",
        },
        {
          term: "Kinahanglan",
          meaning: "Need",
          pronunciation: "Ki-nang-ha-lan",
        },
        {
          term: "Magyakan",
          meaning: "Speak / Talk",
          pronunciation: "Mag-ya-kan",
        },
        {
          term: "Pamati",
          meaning: "Listen",
          pronunciation: "Pa-ma-ti",
        },
        {
          term: "Kita",
          meaning: "Watch / Look",
          pronunciation: "Ki-ta",
        },
      ],
    },
    {
      title: "Verb Forms in Everyday Sentences",
      intro: [
        "Waray verbs may change form depending on the action, time, aspect, and sentence construction. A verb's form should not be selected by simply adding the same prefix to every root word.",
        "The following examples introduce common expressions:",
      ],
      items: [
        {
          term: "Nag-aadal ako.",
          meaning: "I am studying.",
          pronunciation: "Nag-a-a-dal a-ko",
        },
        {
          term: "Nagbabasa ako.",
          meaning: "I am reading.",
          pronunciation: "Nag-ba-ba-sa a-ko",
        },
        {
          term: "Nagsusurat ako.",
          meaning: "I am writing.",
          pronunciation: "Nag-su-su-rat a-ko",
        },
        {
          term: "Nagluluto hiya.",
          meaning: "He/She is cooking.",
          pronunciation: "Nag-lu-lu-to hi-ya",
        },
        {
          term: "Nangaon kita.",
          meaning: "We are eating.",
          pronunciation: "Nang-a-on ki-ta",
        },
        {
          term: "Nagtatrabaho hira.",
          meaning: "They are working.",
          pronunciation: "Nag-tra-tra-ba-ho hi-ra",
        },
      ],
    },
    {
      title: "A. Observe the Sentence",
      intro: [
        "Consider:",
        "Nagbabasa ako hin libro. I am reading a book.",
        "The sentence tells us who is performing the action and what the person is reading.",
      ],
      items: [
        {
          term: "Nagbabasa",
          meaning: "reading",
        },
        {
          term: "Ako",
          meaning: "I",
        },
        {
          term: "Hin libro",
          meaning: "a book",
        },
      ],
    },
    {
      title: "B. Change the Subject",
      intro: [
        "Compare these examples:",
        "The subject changes while the action remains the same in these examples.",
      ],
      items: [
        {
          term: "Nagbabasa ako.",
          meaning: "I am reading.",
        },
        {
          term: "Nagbabasa hiya.",
          meaning: "He/She is reading.",
        },
        {
          term: "Nagbabasa hira.",
          meaning: "They are reading.",
        },
      ],
    },
  ],
  languageNotes: [
    {
      title: "Constructing Sentences with Pronouns and Verbs",
      body: [
        "Use the following examples to practice combining pronouns and verbs.",
      ],
      table: {
        leftHeading: "English",
        rightHeading: "Waray",
        rows: [
          {
            left: "I am studying.",
            right: "Nag-aadal ako.",
          },
          {
            left: "You are reading.",
            right: "Nagbabasa ka.",
          },
          {
            left: "He/She is writing.",
            right: "Nagsusurat hiya.",
          },
          {
            left: "We are cooking.",
            right: "Nagluluto kami.",
          },
          {
            left: "We are eating together.",
            right: "Nangaon kita.",
          },
          {
            left: "You are working.",
            right: "Nagtatrabaho kamo.",
          },
          {
            left: "They are playing.",
            right: "Nag-uuyag hira.",
          },
        ],
      },
    },
    {
      title: "A. Sentence Pattern Practice",
      body: [
        "A useful introductory pattern is:",
        "Action or verb expression + subject",
        "• Nagbabasa + ako",
        "• Nagluluto + hiya",
        "• Nagtatrabaho + hira",
        "This is a practice pattern, not a rule that applies to every Waray sentence. Other sentence structures may place emphasis on different parts of the sentence.",
      ],
    },
    {
      title: "B. Negative Sentences",
      body: [
        "The word diri is commonly used to express negation.",
      ],
      examples: [
        {
          text: "Diri ako nagbabasa.",
          meaning: "I am not reading.",
        },
        {
          text: "Diri hiya nagluluto.",
          meaning: "He/She is not cooking.",
        },
        {
          text: "Diri kami nag-uuyag.",
          meaning: "We are not playing.",
        },
      ],
    },
    {
      title: "C. Expressing Wants",
      body: [
        "The word karuyag can be used to express wanting or wishing.",
      ],
      examples: [
        {
          text: "Karuyag ko kumaon.",
          meaning: "I want to eat.",
        },
        {
          text: "Karuyag ko magbasa.",
          meaning: "I want to read.",
        },
        {
          text: "Karuyag niya mag-adal.",
          meaning: "He/She wants to study.",
        },
      ],
    },
  ],
  conversations: [
    {
      title: "Conversation A: Talking About School Activities",
      lines: [
        {
          speaker: "Ana",
          text: "Ano an imo ginbubuhat?",
          translation: "What are you doing?",
        },
        {
          speaker: "Ben",
          text: "Nag-aadal ako.",
          translation: "I am studying.",
        },
        {
          speaker: "Ana",
          text: "Ano an imo gin-aadal?",
          translation: "What are you studying?",
        },
        {
          speaker: "Ben",
          text: "Nagbabasa ako hin libro.",
          translation: "I am reading a book.",
        },
        {
          speaker: "Ana",
          text: "Maupay ito.",
          translation: "That's good.",
        },
        {
          speaker: "Ben",
          text: "Salamat.",
          translation: "Thank you.",
        },
      ],
    },
    {
      title: "Conversation B: Talking About Daily Activities",
      lines: [
        {
          speaker: "Maria",
          text: "Nagluluto ka ba?",
          translation: "Are you cooking?",
        },
        {
          speaker: "Rosa",
          text: "Oo, nagluluto ako.",
          translation: "Yes, I am cooking.",
        },
        {
          speaker: "Maria",
          text: "Para kan kanay ini?",
          translation: "Who is this for?",
        },
        {
          speaker: "Rosa",
          text: "Para ha amon pamilya.",
          translation: "For our family.",
        },
        {
          speaker: "Maria",
          text: "Buligan ta ikaw.",
          translation: "Let me help you.",
        },
        {
          speaker: "Rosa",
          text: "Damo nga salamat.",
          translation: "Thank you very much.",
        },
      ],
    },
    {
      title: "Conversation C: Making Plans with Friends",
      lines: [
        {
          speaker: "Carlo",
          text: "Karuyag mo ba magbasa?",
          translation: "Do you want to read?",
        },
        {
          speaker: "Mark",
          text: "Oo, karuyag ko.",
          translation: "Yes, I want to.",
        },
        {
          speaker: "Carlo",
          text: "Magbasa kita ha librarya.",
          translation: "Let's read at the library.",
        },
        {
          speaker: "Mark",
          text: "Sige, maupod ako.",
          translation: "Okay, I'll come along.",
        },
        {
          speaker: "Carlo",
          text: "Kitaay kita buwas.",
          translation: "See you tomorrow.",
        },
        {
          speaker: "Mark",
          text: "Sige, pag-amping.",
          translation: "Okay, take care.",
        },
      ],
    },
  ],
  extraActivities: [
    {
      title: "Pronoun Identification",
      kind: "other",
      instructions: "Choose the correct Waray pronoun based on the English description.",
      items: [
        "I",
        "They",
        "We, including the listener",
        "You, plural",
        "He/She",
        "We, excluding the listener",
      ],
    },
    {
      title: "Match the Verbs",
      kind: "match",
      instructions: "Match each English verb with its corresponding Waray word.",
      items: [
        "Read",
        "Cook",
        "Write",
        "Sleep",
        "Study",
      ],
      choices: [
        "Magluto",
        "Magbasa",
        "Maturog",
        "Magsurat",
        "Mag-adal",
      ],
    },
    {
      title: "Complete the Sentences",
      kind: "fill",
      instructions: "Select the appropriate pronoun to complete each sentence.",
      items: [
        "Nagbabasa _____ . (I)",
        "Nagluluto _____ . (He/She)",
        "Nagtatrabaho _____ . (They)",
        "Nag-aadal _____ . (You, singular)",
        "Nag-uuyag _____ . (We, including the listener)",
      ],
    },
    {
      title: "Translate into Waray",
      kind: "translate",
      instructions: "Translate the following sentences into Waray using the expressions introduced in this lesson.",
      items: [
        "I am studying.",
        "She is cooking.",
        "They are reading.",
        "We are eating together.",
        "I want to read.",
      ],
    },
    {
      title: "Sentence Creation",
      kind: "other",
      instructions: "Create five original Waray sentences. Each sentence must contain at least one pronoun and one action word.\nExample:\nNagbabasa ako hin libro. – I am reading a book.",
      items: [],
    },
    {
      title: "Lesson Assessment",
      kind: "assessment",
      items: [
        "What is the Waray word for “I”?",
        "Which pronoun refers to “we,” including the person being spoken to?",
        "What is the Waray word for “they”?",
        "What does magbasa mean?",
        "What does magsurat mean?",
        "Translate: “I am studying.”",
        "Translate: “He/She is cooking.”",
        "What does Diri ako nagbabasa mean?",
        "What does Karuyag ko kumaon mean?",
        "Which pronoun refers to “we,” excluding the listener?",
      ],
      answers: [
        "Ako",
        "Kita",
        "Hira",
        "Read",
        "Write",
        "Nag-aadal ako.",
        "Nagluluto hiya.",
        "I am not reading.",
        "I want to eat.",
        "Kami",
      ],
    },
  ],
  rewards: {
    items: [
      {
        section: "conversation",
        label: "Pronoun Identification + Verb Matching + Sentence Completion + Translation Activity + Lesson Assessment",
        xp: 60,
      },
    ],
    total: 60,
    badge: {
      name: "Pronoun and Verb Explorer Badge",
    },
  },
  expectedOutcomes: [
    "Recognize and use common personal pronouns in Waray.",
    "Identify everyday verbs and their meanings.",
    "Understand simple sentences that combine pronouns and verbs.",
    "Construct basic sentences about their daily activities.",
    "Participate in short conversations using familiar action words.",
  ],
};
