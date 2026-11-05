import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 28 — imported from "Lesson Plan.pdf", pages 1101–1118.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
// Fields not given by the plan are INFERRED from this lesson's own content and
// listed in docs/waray-inferred-keys.md: situation, usage, example, pronunciation, pattern, match, choice, speaking phrase, respelling, target pitch and mood, example situation, pronunciation tip, completion requirement.
// The practice answers are INFERRED drafts, not from the PDF. See
// docs/waray-draft-answer-keys.md for each answer and how it was found.

export const warayLesson28: StructuredLesson = {
  lessonId: "waray_28",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 28,
  title: "Storytelling and Narration",
  level: "Advanced",
  unit: "Unit 3 – Real-Life Communication",
  estimatedDuration: "45–60 minutes",
  prerequisite: "Lessons 21–27",
  languageVariety: "Contemporary Waray spoken in Western Samar",
  intro: [
    "Storytelling is one of the ways people share experiences, preserve memories, and communicate ideas. People tell stories about their childhood, family, travels, school experiences, community events, and everyday activities.",
    "A good narrative usually contains a beginning, a series of events, and an ending. It may also include descriptions of the people involved, the place where events happened, and the feelings or lessons connected to the experience.",
    "In this lesson, learners will practice narrating events in Waray. They will learn expressions for introducing a story, describing what happened, connecting events, and explaining how a situation ended.",
    "The lesson will also help learners distinguish between describing an ongoing action and narrating an event that has already happened.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify vocabulary and expressions commonly used in storytelling and narration.",
    "Narrate personal experiences and past events in Waray.",
    "Arrange events in a logical and chronological sequence.",
    "Use appropriate connecting words to link events and ideas.",
    "Describe characters, settings, and actions in a short narrative.",
    "Retell a short story while maintaining its main ideas and sequence of events.",
  ],
  assessment: {
    instructions: "Choose the best answer for each question.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What is the purpose of a narrative?",
        options: [
          {
            key: "A",
            text: "To describe or tell connected events.",
          },
          {
            key: "B",
            text: "To list random vocabulary.",
          },
          {
            key: "C",
            text: "To provide mathematical solutions.",
          },
          {
            key: "D",
            text: "To give only instructions.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 2,
        prompt: "What does Siyahan mean?",
        options: [
          {
            key: "A",
            text: "Finally",
          },
          {
            key: "B",
            text: "First",
          },
          {
            key: "C",
            text: "Suddenly",
          },
          {
            key: "D",
            text: "Yesterday",
          },
        ],
        answerKey: "B",
      },
      {
        id: 3,
        prompt: "Which expression is appropriate for introducing a story?",
        options: [
          {
            key: "A",
            text: "Usa ka adlaw...",
          },
          {
            key: "B",
            text: "Pira ini?",
          },
          {
            key: "C",
            text: "Ano an imo ngaran?",
          },
          {
            key: "D",
            text: "Hain an merkado?",
          },
        ],
        answerKey: "A",
      },
      {
        id: 4,
        prompt: "What does Ha kataposan mean?",
        options: [
          {
            key: "A",
            text: "At the beginning",
          },
          {
            key: "B",
            text: "Suddenly",
          },
          {
            key: "C",
            text: "Finally",
          },
          {
            key: "D",
            text: "Tomorrow",
          },
        ],
        answerKey: "C",
      },
      {
        id: 5,
        prompt: "Which connector means \"while\"?",
        options: [
          {
            key: "A",
            text: "Pero",
          },
          {
            key: "B",
            text: "Kay",
          },
          {
            key: "C",
            text: "Samtang",
          },
          {
            key: "D",
            text: "Ngan",
          },
        ],
        answerKey: "C",
      },
      {
        id: 6,
        prompt: "What is the purpose of the middle part of a narrative?",
        options: [
          {
            key: "A",
            text: "To explain the events and developments.",
          },
          {
            key: "B",
            text: "To introduce only the title.",
          },
          {
            key: "C",
            text: "To provide the answer key.",
          },
          {
            key: "D",
            text: "To end the story immediately.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 7,
        prompt: "Which expression describes an unexpected event?",
        options: [
          {
            key: "A",
            text: "Tigda",
          },
          {
            key: "B",
            text: "Siyahan",
          },
          {
            key: "C",
            text: "Buwas",
          },
          {
            key: "D",
            text: "Kada adlaw",
          },
        ],
        answerKey: "A",
      },
      {
        id: 8,
        prompt: "What does Matahom an lugar mean?",
        options: [
          {
            key: "A",
            text: "The place is crowded.",
          },
          {
            key: "B",
            text: "The place is beautiful.",
          },
          {
            key: "C",
            text: "The place is far away.",
          },
          {
            key: "D",
            text: "The place is dangerous.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 9,
        prompt: "Why are connecting words important in storytelling?",
        options: [
          {
            key: "A",
            text: "They help organize and connect events.",
          },
          {
            key: "B",
            text: "They replace all the characters.",
          },
          {
            key: "C",
            text: "They remove the need for a beginning.",
          },
          {
            key: "D",
            text: "They make the story unrelated.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 10,
        prompt: "Which is the best way to make a narrative understandable?",
        options: [
          {
            key: "A",
            text: "Present events in a clear sequence and provide relevant details.",
          },
          {
            key: "B",
            text: "Mix all events without explanation.",
          },
          {
            key: "C",
            text: "Avoid describing important events.",
          },
          {
            key: "D",
            text: "Use unrelated expressions.",
          },
        ],
        answerKey: "A",
      },
    ],
  },
  extraActivities: [
    {
      title: "Create a Short Narrative",
      kind: "open",
      instructions: "Write a short Waray narrative about one of the following topics:",
      items: [
        "A memorable childhood experience.",
        "A school activity you participated in.",
        "A family trip or gathering.",
        "An unexpected event that happened to you.",
        "A time when someone helped you.",
      ],
      note: "Your narrative should contain:\n• A beginning, middle, and ending.\n• At least five connected sentences.\n• At least three sequence or connecting expressions.\n• A description of at least one person, place, or experience.\n• An English translation.",
    },
  ],
  fillInBlanks: {
    title: "Identify the Correct Connector",
    instructions: "Choose the most appropriate Waray connector to complete each sentence.",
    items: [
      {
        id: "1",
        sentence: "Nagbasa hiya ______ nagsurat hin nota.",
        answer: "ngan",
        title: "Identify the Correct Connector",
        instructions: "Choose the most appropriate Waray connector to complete each sentence.",
        wordBank: [
          "ngan",
          "pero",
          "kay",
          "samtang",
          "katapos",
        ],
      },
      {
        id: "2",
        sentence: "Karuyag ko umupod, ______ waray ako panahon.",
        answer: "pero",
        title: "Identify the Correct Connector",
        instructions: "Choose the most appropriate Waray connector to complete each sentence.",
        wordBank: [
          "ngan",
          "pero",
          "kay",
          "samtang",
          "katapos",
        ],
      },
      {
        id: "3",
        sentence: "Nalipay ako ______ nakita ko an akon pamilya.",
        answer: "kay",
        title: "Identify the Correct Connector",
        instructions: "Choose the most appropriate Waray connector to complete each sentence.",
        wordBank: [
          "ngan",
          "pero",
          "kay",
          "samtang",
          "katapos",
        ],
      },
      {
        id: "4",
        sentence: "______ nagluluto hi Nanay, nag-aandam ako han lamesa.",
        answer: "samtang",
        title: "Identify the Correct Connector",
        instructions: "Choose the most appropriate Waray connector to complete each sentence.",
        wordBank: [
          "ngan",
          "pero",
          "kay",
          "samtang",
          "katapos",
        ],
      },
      {
        id: "5",
        sentence: "______ han klase, kinadto kami ha librarya.",
        answer: "katapos",
        title: "Identify the Correct Connector",
        instructions: "Choose the most appropriate Waray connector to complete each sentence.",
        wordBank: [
          "ngan",
          "pero",
          "kay",
          "samtang",
          "katapos",
        ],
      },
      {
        id: "6",
        sentence: "__________, kinadto kami han akon mga sangkay ha parke.",
        answer: "Usa ka adlaw",
        title: "Complete the Narrative",
        instructions: "Choose the correct expression from the word bank to complete the paragraph.",
        wordBank: [
          "Ha kataposan",
          "Usa ka adlaw",
          "Katapos hito",
          "Tigda",
          "Nalipay kami",
        ],
      },
      {
        id: "7",
        sentence: "__________, nag-uyag kami ngan nag-istorya.",
        answer: "Katapos hito",
        title: "Complete the Narrative",
        instructions: "Choose the correct expression from the word bank to complete the paragraph.",
        wordBank: [
          "Ha kataposan",
          "Usa ka adlaw",
          "Katapos hito",
          "Tigda",
          "Nalipay kami",
        ],
      },
      {
        id: "8",
        sentence: "__________ nga nag-uran, salit kinadto kami ha usa nga tindahan.",
        answer: "Tigda",
        title: "Complete the Narrative",
        instructions: "Choose the correct expression from the word bank to complete the paragraph.",
        wordBank: [
          "Ha kataposan",
          "Usa ka adlaw",
          "Katapos hito",
          "Tigda",
          "Nalipay kami",
        ],
      },
      {
        id: "9",
        sentence: "__________, inuli kami han nahunong na an uran.",
        answer: "Ha kataposan",
        title: "Complete the Narrative",
        instructions: "Choose the correct expression from the word bank to complete the paragraph.",
        wordBank: [
          "Ha kataposan",
          "Usa ka adlaw",
          "Katapos hito",
          "Tigda",
          "Nalipay kami",
        ],
      },
      {
        id: "10",
        sentence: "__________ kay nagkaada kami hin panahon nga mag-upod.",
        answer: "Nalipay kami",
        title: "Complete the Narrative",
        instructions: "Choose the correct expression from the word bank to complete the paragraph.",
        wordBank: [
          "Ha kataposan",
          "Usa ka adlaw",
          "Katapos hito",
          "Tigda",
          "Nalipay kami",
        ],
      },
    ],
  },
  arrangeWords: {
    title: "Arrange the Events",
    instructions: "Arrange the following events in the correct chronological order by writing the appropriate sequence number.",
    items: [
      {
        id: "1",
        words: [
          "Inuli kami katapos han programa.",
          "Nag-andam kami han amon mga gamit.",
          "Nagkatirok kami ha eskwelahan.",
          "Nagpresentar kami han amon proyekto.",
        ],
        answer: [
          "Nag-andam kami han amon mga gamit.",
          "Nagkatirok kami ha eskwelahan.",
          "Nagpresentar kami han amon proyekto.",
          "Inuli kami katapos han programa.",
        ],
        display: "Nag-andam kami han amon mga gamit. Nagkatirok kami ha eskwelahan. Nagpresentar kami han amon proyekto. Inuli kami katapos han programa.",
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
        label: "Sequence Recognition + Guided Narration + Practice Activities",
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
      name: "Storyteller Badge",
      description: "Awarded to learners who demonstrate the ability to organize events and communicate personal experiences through Waray narration.",
    },
    completionRequirement: "Obtain at least 70% in the lesson assessment. Learners may repeat the activities and assessment if they do not meet the requirement.",
  },
  expectedOutcomes: [
    "Recognize vocabulary related to storytelling.",
    "Introduce and narrate personal experiences.",
    "Organize events chronologically.",
    "Use connecting expressions to link ideas.",
    "Describe people, places, and situations.",
    "Retell a short story in a clear and understandable manner.",
    "Lesson Completion Criteria:",
    "Complete the vocabulary review.",
    "Finish the event-sequencing exercises.",
    "Complete the guided narration activities.",
    "Write a short Waray narrative.",
    "Obtain at least 70% in the lesson assessment.",
    "Earn up to 60 XP and unlock the Storyteller Badge.",
  ],
  matchActivity: {
    title: "Match the Words",
    instructions: "Match the Waray expression with its English meaning.",
    pairs: [
      {
        id: "1",
        term: "Leksyon nga nahibaroan",
        answer: "Lesson learned",
      },
      {
        id: "2",
        term: "Karakter",
        answer: "Character",
      },
      {
        id: "3",
        term: "Sunod",
        answer: "Next",
      },
      {
        id: "4",
        term: "Nasusubo",
        answer: "Sad",
      },
      {
        id: "5",
        term: "Hitabo",
        answer: "Event",
      },
    ],
  },
  choiceActivity: {
    title: "Choose the Correct Meaning",
    instructions: "Choose the correct English meaning.",
    questions: [
      {
        id: 1,
        prompt: "What does “Matahom” mean?",
        options: [
          {
            key: "A",
            text: "Beautiful",
          },
          {
            key: "B",
            text: "Finally",
          },
          {
            key: "C",
            text: "Setting",
          },
          {
            key: "D",
            text: "At that time",
          },
        ],
        answerKey: "A",
      },
      {
        id: 2,
        prompt: "What does “Karakter” mean?",
        options: [
          {
            key: "A",
            text: "Setting",
          },
          {
            key: "B",
            text: "Character",
          },
          {
            key: "C",
            text: "After",
          },
          {
            key: "D",
            text: "One day",
          },
        ],
        answerKey: "B",
      },
      {
        id: 3,
        prompt: "What does “Ha urhi” mean?",
        options: [
          {
            key: "A",
            text: "Afraid",
          },
          {
            key: "B",
            text: "Experience",
          },
          {
            key: "C",
            text: "Later",
          },
          {
            key: "D",
            text: "Helpful",
          },
        ],
        answerKey: "C",
      },
      {
        id: 4,
        prompt: "What does “Ha urhi” mean?",
        options: [
          {
            key: "A",
            text: "Easy",
          },
          {
            key: "B",
            text: "Because",
          },
          {
            key: "C",
            text: "Surprised",
          },
          {
            key: "D",
            text: "Eventually",
          },
        ],
        answerKey: "D",
      },
      {
        id: 5,
        prompt: "What does “Tinikangan” mean?",
        options: [
          {
            key: "A",
            text: "Beginning",
          },
          {
            key: "B",
            text: "Later",
          },
          {
            key: "C",
            text: "Event",
          },
          {
            key: "D",
            text: "A long time ago",
          },
        ],
        answerKey: "A",
      },
    ],
  },
  speaking: {
    title: "Speaking Practice",
    instructions: "Read the following sentences aloud.",
    note: "Learners should listen to the model pronunciation before recording their own voice.",
    practiceLessonId: "waray_28",
    phrases: [
      {
        id: "1",
        text: "Karuyag ko magsumat ha imo hin istorya.",
        respelling: "ka-ru-yag ko mag-su-mat ha i-mo hin is-tor-ya",
        meaning: "I want to tell you a story.",
      },
      {
        id: "2",
        text: "Nahitabo ini ha akon hadto.",
        respelling: "nah-hee-tah-boh i-ni ha a-kon had-to",
        meaning: "This happened to me before.",
      },
      {
        id: "3",
        text: "Amo ito an paagi han pagkahitabo hito.",
        respelling: "a-mo i-to an pa-a-gi han pag-ka-hi-ta-bo hi-to",
        meaning: "That was how it happened.",
      },
      {
        id: "4",
        text: "Nalipay gud ako.",
        respelling: "na-li-pay gud a-ko",
        meaning: "I was very happy.",
      },
      {
        id: "5",
        text: "Waray ko laoman nga mahitatabo ito.",
        respelling: "wa-ray ko la-o-man nga ma-hi-ta-ta-bo i-to",
        meaning: "I did not expect that to happen.",
      },
      {
        id: "6",
        text: "Diri ko ito hingangalimtan nga eksperyensya.",
        respelling: "di-ri ko i-to hi-nga-nga-lim-tan nga eks-per-yen-sya",
        meaning: "It was a memorable experience.",
      },
      {
        id: "7",
        text: "Makuri adto nga adlaw.",
        respelling: "ma-ku-ri ad-to nga ad-law",
        meaning: "It was a difficult day.",
      },
    ],
  },
  exampleSituation: {
    description: "Imagine this situation from the lesson: Sharing a Childhood Memory.",
    lead: "You can begin by saying:",
    line: "May hinunumdoman ka ba nga makalilipay nga eksperyensya han imo kabataan?",
    translation: "Do you remember a happy experience from your childhood?",
  },
  vocabularyIntro: "Learn the following words and expressions before proceeding to the activities.",
  pronunciationTip: "Read each syllable clearly. Avoid rushing through longer expressions.",
  selfIntroIntro: "Use these patterns and phrases from the lesson.",
  vocabulary: [
    {
      term: "Istorya",
      meaning: "Story",
      pronunciation: "Is-tor-ya",
      usage: "From this lesson's word list: storytelling vocabulary.",
      example: [
        {
          speaker: "",
          text: "Karuyag ko magsumat ha imo hin istorya.",
          translation: "I want to tell you a story.",
        },
      ],
    },
    {
      term: "Pagsaysay",
      meaning: "Narration",
      pronunciation: "Pag-say-say",
      usage: "From this lesson's word list: storytelling vocabulary.",
    },
    {
      term: "Eksperyensya",
      meaning: "Experience",
      pronunciation: "Eks-per-yen-sya",
      usage: "From this lesson's word list: storytelling vocabulary.",
      example: [
        {
          speaker: "A",
          text: "May hinunumdoman ka ba nga makalilipay nga eksperyensya han imo kabataan?",
          translation: "Do you remember a happy experience from your childhood?",
        },
        {
          speaker: "B",
          text: "Oo. Nahinunumdoman ko han nagkadto kami ha baybayon han akon pamilya.",
          translation: "Yes. I remember when my family and I went to the beach.",
        },
      ],
    },
    {
      term: "Hitabo",
      meaning: "Event",
      pronunciation: "Hi-ta-bo",
      usage: "From this lesson's word list: storytelling vocabulary.",
    },
    {
      term: "Tinikangan",
      meaning: "Beginning",
      pronunciation: "Ti-ni-ka-ngan",
      usage: "From this lesson's word list: storytelling vocabulary.",
    },
    {
      term: "Butnga",
      meaning: "Middle",
      pronunciation: "But-nga",
      usage: "From this lesson's word list: storytelling vocabulary.",
    },
    {
      term: "Kataposan",
      meaning: "Ending",
      pronunciation: "Ka-ta-po-san",
      usage: "From this lesson's word list: storytelling vocabulary.",
      example: [
        {
          speaker: "",
          text: "Ha kataposan...",
          translation: "Finally...",
        },
      ],
    },
    {
      term: "Karakter",
      meaning: "Character",
      pronunciation: "Ka-rak-ter",
      usage: "From this lesson's word list: storytelling vocabulary.",
    },
    {
      term: "Panguna nga karakter",
      meaning: "Main character",
      pronunciation: "Pa-ngu-na nga ka-rak-ter",
      usage: "From this lesson's word list: storytelling vocabulary.",
    },
    {
      term: "Lugar ngan panahon han istorya",
      meaning: "Setting",
      pronunciation: "Lu-gar ngan pa-na-hon han is-tor-ya",
      usage: "From this lesson's word list: storytelling vocabulary.",
    },
    {
      term: "Problema",
      meaning: "Problem",
      pronunciation: "Pro-ble-ma",
      usage: "From this lesson's word list: storytelling vocabulary.",
    },
    {
      term: "Solusyon",
      meaning: "Solution",
      pronunciation: "So-lu-syon",
      usage: "From this lesson's word list: storytelling vocabulary.",
    },
    {
      term: "Hinumdoman",
      meaning: "Memory",
      pronunciation: "Hi-num-do-man",
      usage: "From this lesson's word list: storytelling vocabulary.",
    },
    {
      term: "Leksyon nga nahibaroan",
      meaning: "Lesson learned",
      pronunciation: "Lek-syon nga na-hi-ba-ro-an",
      usage: "From this lesson's word list: storytelling vocabulary.",
    },
    {
      term: "Parasaysay",
      meaning: "Narrator",
      pronunciation: "Pa-ra-say-say",
      usage: "From this lesson's word list: storytelling vocabulary.",
    },
    {
      term: "Kahapon",
      meaning: "Yesterday",
      pronunciation: "Ka-ha-pon",
      usage: "From this lesson's word list: time and sequence vocabulary.",
      example: [
        {
          speaker: "A",
          text: "Ano an nahitabo ha imo kahapon?",
          translation: "What happened to you yesterday?",
        },
        {
          speaker: "B",
          text: "Kinadto ako ha merkado, pero tigda nga nag-uran.",
          translation: "I went to the market, but it suddenly rained.",
        },
      ],
    },
    {
      term: "Yana",
      meaning: "Today",
      pronunciation: "Ya-na",
      usage: "From this lesson's word list: time and sequence vocabulary.",
    },
    {
      term: "Buwas",
      meaning: "Tomorrow",
      pronunciation: "Bu-was",
      usage: "From this lesson's word list: time and sequence vocabulary.",
    },
    {
      term: "Antes",
      meaning: "Before",
      pronunciation: "An-tes",
      usage: "From this lesson's word list: time and sequence vocabulary.",
    },
    {
      term: "Katapos",
      meaning: "After",
      pronunciation: "Ka-ta-pos",
      usage: "From this lesson's word list: time and sequence vocabulary.",
      example: [
        {
          speaker: "A",
          text: "Waray. Salit naghulat anay ako ha tindahan.",
          translation: "No. So I waited at the store for a while.",
        },
        {
          speaker: "B",
          text: "Ano an imo ginbuhat katapos hito?",
          translation: "What did you do after that?",
        },
      ],
    },
    {
      term: "Siyahan",
      meaning: "First",
      pronunciation: "Si-ya-han",
      usage: "From this lesson's word list: time and sequence vocabulary.",
    },
    {
      term: "Sunod",
      meaning: "Next",
      pronunciation: "Su-nod",
      usage: "From this lesson's word list: time and sequence vocabulary.",
    },
    {
      term: "Katapos / Sunod",
      meaning: "Then",
      pronunciation: "Ka-ta-pos / Su-nod",
      usage: "From this lesson's word list: time and sequence vocabulary.",
      example: [
        {
          speaker: "A",
          text: "Ano an imo ginbuhat katapos hito?",
          translation: "What did you do after that?",
        },
        {
          speaker: "B",
          text: "Han humunong na an uran, inuli ako.",
          translation: "When the rain stopped, I went home.",
        },
      ],
    },
    {
      term: "Ha kataposan",
      meaning: "Finally",
      pronunciation: "Ha ka-ta-po-san",
      usage: "From this lesson's word list: time and sequence vocabulary.",
    },
    {
      term: "Tigda",
      meaning: "Suddenly",
      pronunciation: "Tig-da",
      usage: "From this lesson's word list: time and sequence vocabulary.",
      example: [
        {
          speaker: "A",
          text: "Kinadto ako ha merkado, pero tigda nga nag-uran.",
          translation: "I went to the market, but it suddenly rained.",
        },
        {
          speaker: "B",
          text: "May dara ka ba nga payong?",
          translation: "Did you bring an umbrella?",
        },
      ],
    },
    {
      term: "Hito nga panahon",
      meaning: "At that time",
      pronunciation: "Hi-to nga pa-na-hon",
      usage: "From this lesson's word list: time and sequence vocabulary.",
    },
    {
      term: "Hadto pa nga panahon",
      meaning: "A long time ago",
      pronunciation: "Had-to pa nga pa-na-hon",
      usage: "From this lesson's word list: time and sequence vocabulary.",
    },
    {
      term: "Usa ka adlaw",
      meaning: "One day",
      pronunciation: "U-sa ka ad-law",
      usage: "From this lesson's word list: time and sequence vocabulary.",
    },
    {
      term: "Ha urhi",
      meaning: "Later",
      pronunciation: "Ha u-rhi",
      usage: "From this lesson's word list: time and sequence vocabulary.",
    },
    {
      term: "Ha urhi",
      meaning: "Eventually",
      pronunciation: "Ha u-rhi",
      usage: "From this lesson's word list: time and sequence vocabulary.",
    },
    {
      term: "Malipayon",
      meaning: "Happy",
      pronunciation: "Ma-li-pa-yon",
      usage: "From this lesson's word list: descriptive vocabulary.",
    },
    {
      term: "Nasusubo",
      meaning: "Sad",
      pronunciation: "Na-su-su-bo",
      usage: "From this lesson's word list: descriptive vocabulary.",
    },
    {
      term: "Nahahadlok",
      meaning: "Afraid",
      pronunciation: "Na-hahad-lok",
      usage: "From this lesson's word list: descriptive vocabulary.",
    },
    {
      term: "Nahipausa",
      meaning: "Surprised",
      pronunciation: "Na-hi-pa-u-sa",
      usage: "From this lesson's word list: descriptive vocabulary.",
    },
    {
      term: "Eksitado",
      meaning: "Excited",
      pronunciation: "Eks-i-ta-do",
      usage: "From this lesson's word list: descriptive vocabulary.",
    },
    {
      term: "Kapoy",
      meaning: "Tired",
      pronunciation: "Ka-poy",
      usage: "From this lesson's word list: descriptive vocabulary.",
    },
    {
      term: "Matahom",
      meaning: "Beautiful",
      pronunciation: "Ma-ta-hom",
      usage: "From this lesson's word list: descriptive vocabulary.",
    },
    {
      term: "Hilom",
      meaning: "Quiet",
      pronunciation: "Hi-lom",
      usage: "From this lesson's word list: descriptive vocabulary.",
    },
    {
      term: "Matawo",
      meaning: "Crowded",
      pronunciation: "Ma-ta-wo",
      usage: "From this lesson's word list: descriptive vocabulary.",
    },
    {
      term: "Makuri",
      meaning: "Difficult",
      pronunciation: "Ma-ku-ri",
      usage: "From this lesson's word list: descriptive vocabulary.",
      example: [
        {
          speaker: "",
          text: "Makuri adto nga adlaw.",
          translation: "It was a difficult day.",
        },
      ],
    },
    {
      term: "Masayon",
      meaning: "Easy",
      pronunciation: "Ma-sa-yon",
      usage: "From this lesson's word list: descriptive vocabulary.",
    },
    {
      term: "Makapainteres",
      meaning: "Interesting",
      pronunciation: "Ma-ka-pa-in-te-res",
      usage: "From this lesson's word list: descriptive vocabulary.",
    },
    {
      term: "Matinabangon",
      meaning: "Helpful",
      pronunciation: "Ma-ti-na-ba-ngon",
      usage: "From this lesson's word list: descriptive vocabulary.",
    },
    {
      term: "Maisog",
      meaning: "Brave",
      pronunciation: "Ma-i-sog",
      usage: "From this lesson's word list: descriptive vocabulary.",
    },
    {
      term: "Ngan",
      meaning: "And",
      pronunciation: "Ngan",
      usage: "From the language note \"Connecting Events and Ideas\".",
      example: [
        {
          speaker: "",
          text: "Kinadto kami ha merkado ngan namalit hin pagkaon.",
        },
      ],
    },
    {
      term: "Pero",
      meaning: "But",
      pronunciation: "Pe-ro",
      usage: "From the language note \"Connecting Events and Ideas\".",
      example: [
        {
          speaker: "",
          text: "Karuyag ko umupod, pero waray ako panahon.",
        },
      ],
    },
    {
      term: "Kay",
      meaning: "Because",
      pronunciation: "KAI",
      usage: "From the language note \"Connecting Events and Ideas\".",
      example: [
        {
          speaker: "",
          text: "Nalipay ako kay nakita ko an akon mga sangkay.",
        },
      ],
    },
    {
      term: "Kon",
      meaning: "If / When",
      pronunciation: "Kon",
      usage: "From the language note \"Connecting Events and Ideas\".",
      example: [
        {
          speaker: "",
          text: "Kon may panahon ako, kinadto ako ha ira.",
        },
      ],
    },
    {
      term: "Samtang",
      meaning: "While",
      pronunciation: "sam-tang",
      usage: "From the language note \"Connecting Events and Ideas\".",
      example: [
        {
          speaker: "",
          text: "Samtang nagbabasa hiya, namamati ako hin musika.",
        },
      ],
    },
  ],
  greetings: [
    {
      term: "Malipayon",
      meaning: "Happy",
      pronunciation: "Ma-li-pa-yon",
      usage: "From this lesson's word list: descriptive vocabulary.",
    },
    {
      term: "Nasusubo",
      meaning: "Sad",
      pronunciation: "Na-su-su-bo",
      usage: "From this lesson's word list: descriptive vocabulary.",
    },
    {
      term: "Nahahadlok",
      meaning: "Afraid",
      pronunciation: "Na-hahad-lok",
      usage: "From this lesson's word list: descriptive vocabulary.",
    },
    {
      term: "Nahipausa",
      meaning: "Surprised",
      pronunciation: "Na-hi-pa-u-sa",
      usage: "From this lesson's word list: descriptive vocabulary.",
    },
    {
      term: "Eksitado",
      meaning: "Excited",
      pronunciation: "Eks-i-ta-do",
      usage: "From this lesson's word list: descriptive vocabulary.",
    },
    {
      term: "Kapoy",
      meaning: "Tired",
      pronunciation: "Ka-poy",
      usage: "From this lesson's word list: descriptive vocabulary.",
    },
    {
      term: "Matahom",
      meaning: "Beautiful",
      pronunciation: "Ma-ta-hom",
      usage: "From this lesson's word list: descriptive vocabulary.",
    },
    {
      term: "Hilom",
      meaning: "Quiet",
      pronunciation: "Hi-lom",
      usage: "From this lesson's word list: descriptive vocabulary.",
    },
    {
      term: "Matawo",
      meaning: "Crowded",
      pronunciation: "Ma-ta-wo",
      usage: "From this lesson's word list: descriptive vocabulary.",
    },
    {
      term: "Makuri",
      meaning: "Difficult",
      pronunciation: "Ma-ku-ri",
      usage: "From this lesson's word list: descriptive vocabulary.",
      example: [
        {
          speaker: "",
          text: "Makuri adto nga adlaw.",
          translation: "It was a difficult day.",
        },
      ],
    },
    {
      term: "Masayon",
      meaning: "Easy",
      pronunciation: "Ma-sa-yon",
      usage: "From this lesson's word list: descriptive vocabulary.",
    },
    {
      term: "Makapainteres",
      meaning: "Interesting",
      pronunciation: "Ma-ka-pa-in-te-res",
      usage: "From this lesson's word list: descriptive vocabulary.",
    },
    {
      term: "Matinabangon",
      meaning: "Helpful",
      pronunciation: "Ma-ti-na-ba-ngon",
      usage: "From this lesson's word list: descriptive vocabulary.",
    },
    {
      term: "Maisog",
      meaning: "Brave",
      pronunciation: "Ma-i-sog",
      usage: "From this lesson's word list: descriptive vocabulary.",
    },
  ],
  patterns: [
    {
      label: "Pattern 1: Starting a Story",
      pattern: "Story opener + Event.",
      examples: [
        "Usa ka adlaw...",
        "Hadto pa nga panahon...",
      ],
    },
    {
      label: "Pattern 2: Telling Events in Order",
      pattern: "Sequence word + Event.",
      examples: [
        "Siyahan...",
        "Katapos hito...",
        "Sunod...",
        "Ha kataposan...",
      ],
    },
  ],
  sentences: [
    {
      text: "Karuyag ko magsumat ha imo hin istorya.",
      meaning: "I want to tell you a story.",
    },
    {
      text: "Nahitabo ini ha akon hadto.",
      meaning: "This happened to me before.",
    },
    {
      text: "Usa ka adlaw...",
      meaning: "One day...",
    },
    {
      text: "Hadto pa nga panahon...",
      meaning: "A long time ago...",
    },
    {
      text: "Nahinunumdoman ko han...",
      meaning: "I remember when...",
    },
    {
      text: "Susumatan ko ikaw kon ano an nahitabo.",
      meaning: "Let me tell you what happened.",
    },
    {
      text: "Siyahan...",
      meaning: "First...",
    },
    {
      text: "Katapos hito...",
      meaning: "After that...",
    },
    {
      text: "Sunod...",
      meaning: "Then...",
    },
    {
      text: "Tigda...",
      meaning: "Suddenly...",
    },
    {
      text: "Hito nga takna...",
      meaning: "At that moment...",
    },
    {
      text: "Samtang nahitatabo ito...",
      meaning: "While that was happening...",
    },
    {
      text: "Ha kataposan...",
      meaning: "Finally...",
    },
    {
      text: "Amo ito an paagi han pagkahitabo hito.",
      meaning: "That was how it happened.",
    },
    {
      text: "Nalipay gud ako.",
      meaning: "I was very happy.",
    },
    {
      text: "Nahadlok ako.",
      meaning: "I was afraid.",
    },
    {
      text: "Waray ko laoman nga mahitatabo ito.",
      meaning: "I did not expect that to happen.",
    },
    {
      text: "Diri ko ito hingangalimtan nga eksperyensya.",
      meaning: "It was a memorable experience.",
    },
    {
      text: "May nahibaroan ako tikang hito nga eksperyensya.",
      meaning: "I learned something from that experience.",
    },
    {
      text: "Makuri adto nga adlaw.",
      meaning: "It was a difficult day.",
    },
    {
      text: "Nalipay kami ha amon pag-upod.",
      meaning: "We enjoyed our time together.",
    },
  ],
  conversations: [
    {
      title: "Conversation A: Sharing a Childhood Memory",
      lines: [
        {
          speaker: "Ana",
          text: "May hinunumdoman ka ba nga makalilipay nga eksperyensya han imo kabataan?",
          translation: "Do you remember a happy experience from your childhood?",
        },
        {
          speaker: "Ben",
          text: "Oo. Nahinunumdoman ko han nagkadto kami ha baybayon han akon pamilya.",
          translation: "Yes. I remember when my family and I went to the beach.",
        },
        {
          speaker: "Ana",
          text: "Ano an iyo ginbuhat didto?",
          translation: "What did you do there?",
        },
        {
          speaker: "Ben",
          text: "Nag-uyag kami ha baybayon ngan nagkaon hin pagkaon nga amon gindara.",
          translation: "We played at the beach and ate the food we brought.",
        },
        {
          speaker: "Ana",
          text: "Nalipay ba kamo?",
          translation: "Were you happy?",
        },
        {
          speaker: "Ben",
          text: "Oo, makalilipay gud adto nga adlaw.",
          translation: "Yes, that was a very happy day.",
        },
      ],
      situation: "Ana and Ben: Sharing a Childhood Memory.",
    },
    {
      title: "Conversation B: Narrating an Unexpected Event",
      lines: [
        {
          speaker: "Carlo",
          text: "Ano an nahitabo ha imo kahapon?",
          translation: "What happened to you yesterday?",
        },
        {
          speaker: "Dina",
          text: "Kinadto ako ha merkado, pero tigda nga nag-uran.",
          translation: "I went to the market, but it suddenly rained.",
        },
        {
          speaker: "Carlo",
          text: "May dara ka ba nga payong?",
          translation: "Did you bring an umbrella?",
        },
        {
          speaker: "Dina",
          text: "Waray. Salit naghulat anay ako ha tindahan.",
          translation: "No. So I waited at the store for a while.",
        },
        {
          speaker: "Carlo",
          text: "Ano an imo ginbuhat katapos hito?",
          translation: "What did you do after that?",
        },
        {
          speaker: "Dina",
          text: "Han humunong na an uran, inuli ako.",
          translation: "When the rain stopped, I went home.",
        },
      ],
      situation: "Carlo and Dina: Narrating an Unexpected Event.",
    },
    {
      title: "Narrative C: A Memorable School Experience",
      lines: [
        {
          speaker: "",
          text: "Usa ka adlaw, may programa ha amon eskwelahan. Siyahan, nag-andam kami han amon mga kinahanglanon. Katapos hito, nagkatirok an ngatanan nga estudyante ha programa. Nagpresentar kami han amon proyekto ngan namati ha mga presentasyon han iba nga grupo.",
          translation: "One day, there was a program at our school. First, we prepared the things we needed. After that, all the students gathered for the program. We presented our project and listened to the presentations of the other groups.",
        },
        {
          speaker: "",
          text: "Ha tinikangan, kinulbaan ako kay damu an nanan-aw ha amon. Pero han nagtitikang na kami, nagin komportable ako. Ha kataposan, nalipay kami kay nahuman namon an amon presentasyon.",
          translation: "At first, I was nervous because many people were watching us. But when we started, I became comfortable. Finally, we were happy because we finished our presentation.",
        },
      ],
      situation: ": A Memorable School Experience.",
    },
  ],
  savedLanguageNotes: [
    {
      title: "A. Parts of a Narrative",
      body: [
        "A narrative is a spoken or written account of connected events. It usually contains three important parts.",
        "• Beginning",
        "The beginning introduces the characters, setting, and situation.",
        "• Waray: Usa ka adlaw, kinadto kami han akon pamilya ha baybayon.",
        "• English: One day, my family and I went to the beach.",
        "• Middle",
        "The middle explains what happened. It may introduce a problem, an unexpected event, or an important experience.",
        "• Waray: Samtang nag-uuyag kami, tigda nga nag-uran.",
        "• English: While we were playing, it suddenly rained.",
        "• Ending",
        "The ending explains how the events concluded.",
        "• Waray: Ha kataposan, inuli kami nga malipayon bisan nabasa kami han uran.",
        "• English: Finally, we went home happily even though we got wet in the rain.",
      ],
    },
    {
      title: "B. Organizing Events Chronologically",
      body: [
        "A chronological narrative presents events in the order in which they happened.",
        "The following expressions help organize a story:",
      ],
      table: {
        leftHeading: "Expression",
        rightHeading: "Purpose",
        rows: [
          {
            left: "Siyahan",
            right: "Introduces the first event.",
          },
          {
            left: "Katapos hito",
            right: "Introduces an event that follows.",
          },
          {
            left: "Sunod",
            right: "Introduces the next event.",
          },
          {
            left: "Samtang",
            right: "Describes two actions happening at the same time.",
          },
          {
            left: "Tigda",
            right: "Introduces an unexpected event.",
          },
          {
            left: "Ha kataposan",
            right: "Introduces the final event.",
          },
        ],
      },
    },
    {
      title: "B. Organizing Events Chronologically",
      body: [
        "Example Narrative:",
        "• Siyahan, nag-andam kami han amon mga gamit.",
        "• Katapos hito, kinadto kami ha eskwelahan.",
        "• Sunod, nagkita kami han amon mga sangkay.",
        "• Ha kataposan, inuli kami katapos han amon klase.",
        "English Translation:",
        "• First, we prepared our belongings.",
        "• After that, we went to school.",
        "• Next, we met our friends.",
        "• Finally, we went home after our classes.",
      ],
    },
    {
      title: "C. Describing Characters and Settings",
      body: [
        "A story becomes easier to understand when the narrator describes the people and places involved.",
        "Describing a Character",
        "• Buotan hiya ngan matinabangon.",
        "• He/She is kind and helpful.",
        "• Maisog an bata.",
        "• The child is brave.",
        "Describing a Place",
        "• Matahom an lugar.",
        "• The place is beautiful.",
        "• Matawo an merkado.",
        "• The market is crowded.",
        "Describing an Experience",
        "• Makalilipay adto nga adlaw.",
        "• That was a memorable/happy day.",
        "• Makuri adto nga eksperyensya.",
        "• That was a difficult experience.",
      ],
    },
    {
      title: "D. Connecting Events and Ideas",
      body: [
        "Connecting words help make a narrative flow naturally.",
      ],
      table: {
        leftHeading: "Waray Connector",
        rightHeading: "English Meaning · Example",
        rows: [
          {
            left: "Ngan",
            right: "And · Kinadto kami ha merkado ngan namalit hin pagkaon.",
          },
          {
            left: "Pero",
            right: "But · Karuyag ko umupod, pero waray ako panahon.",
          },
          {
            left: "Kay",
            right: "Because · Nalipay ako kay nakita ko an akon mga sangkay.",
          },
          {
            left: "Kon",
            right: "If / When · Kon may panahon ako, kinadto ako ha ira.",
          },
          {
            left: "Samtang",
            right: "While · Samtang nagbabasa hiya, namamati ako hin musika.",
          },
          {
            left: "Katapos",
            right: "After · Katapos han klase, inuli kami.",
          },
        ],
      },
    },
    {
      title: "D. Connecting Events and Ideas",
      body: [
        "English Translation of Examples:",
        "• We went to the market and bought food.",
        "• I wanted to come along, but I did not have time.",
        "• I was happy because I saw my friends.",
        "• If I have time, I will visit them.",
        "• While he/she was reading, I was listening to music.",
        "• After class, we went home.",
      ],
    },
    {
      title: "C. Descriptive Vocabulary",
      body: [
        "Note: The vocabulary includes borrowed and descriptive terms. Some expressions may have alternative forms in Western Samar communities and should be reviewed before implementation.",
      ],
    },
  ],
  inferredFields: [
    "situation",
    "usage",
    "example",
    "pronunciation",
    "pattern",
    "match",
    "choice",
    "speaking phrase",
    "respelling",
    "target pitch and mood",
    "example situation",
    "pronunciation tip",
    "completion requirement",
  ],
};
