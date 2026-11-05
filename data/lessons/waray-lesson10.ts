import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 10 — imported from "Lesson Plan.pdf", pages 789–804.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.

export const warayLesson10: StructuredLesson = {
  lessonId: "waray_10",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 10,
  title: "Introducing Other People",
  level: "Beginner",
  unit: "Unit 3 – Basic Communication",
  estimatedDuration: "35–45 minutes",
  prerequisite: "Lessons 1–9",
  languageVariety: "Waray-Waray",
  intro: [
    "Introducing people is a common part of everyday communication. You may introduce a friend to your family, introduce a classmate to another student, or introduce a relative to someone you have just met.",
    "In Waray, you can use expressions such as \"Amo ini hi...\" and \"Hiya hi...\" when introducing or identifying someone.",
    "In this lesson, you will learn how to introduce other people, explain how you know them, and share simple information about them.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Recognize common Waray expressions used when introducing other people.",
    "Introduce friends, family members, classmates, and acquaintances.",
    "Describe a person's basic relationship to them.",
    "Ask and answer simple questions about someone being introduced.",
    "Participate in a short conversation involving introductions.",
  ],
  expressionGroups: [
    {
      title: "A. People and Relationships",
      items: [
        {
          term: "Tawo",
          meaning: "Person",
          pronunciation: "TAH-woh",
        },
        {
          term: "Sangkay",
          meaning: "Friend",
          pronunciation: "SAHNG-kai",
        },
        {
          term: "Pamilya",
          meaning: "Family",
          pronunciation: "pah-MEEL-yah",
        },
        {
          term: "Tatay",
          meaning: "Father",
          pronunciation: "TAH-tai",
        },
        {
          term: "Nanay",
          meaning: "Mother",
          pronunciation: "NAH-nai",
        },
        {
          term: "Bugto",
          meaning: "Brother / Sister",
          pronunciation: "BOOG-toh",
        },
        {
          term: "Magurang",
          meaning: "Older sibling",
          pronunciation: "mah-GOO-rahng",
        },
        {
          term: "Manghod",
          meaning: "Younger sibling",
          pronunciation: "MAHNG-hod",
        },
        {
          term: "Lolo",
          meaning: "Grandfather",
          pronunciation: "LOH-loh",
        },
        {
          term: "Lola",
          meaning: "Grandmother",
          pronunciation: "LOH-lah",
        },
        {
          term: "Klasmet",
          meaning: "Classmate",
          pronunciation: "KLAHS-met",
        },
        {
          term: "Maestro / Maestra",
          meaning: "Teacher",
          pronunciation: "mah-ES-troh / mah-ES-trah",
        },
        {
          term: "Estudyante",
          meaning: "Student",
          pronunciation: "es-too-DYAHN-teh",
        },
        {
          term: "Siring-balay",
          meaning: "Neighbor",
          pronunciation: "SEE-ring BAH-lai",
        },
        {
          term: "Pariente",
          meaning: "Relative",
          pronunciation: "pah-RYEN-teh",
        },
      ],
    },
    {
      title: "B. Words Used When Introducing People",
      items: [
        {
          term: "Ini",
          meaning: "This",
          pronunciation: "EE-nee",
        },
        {
          term: "Ito",
          meaning: "That",
          pronunciation: "EE-toh",
        },
        {
          term: "Hiya",
          meaning: "He / She",
          pronunciation: "HEE-yah",
        },
        {
          term: "Akon",
          meaning: "My",
          pronunciation: "AH-kohn",
        },
        {
          term: "Imo",
          meaning: "Your",
          pronunciation: "EE-moh",
        },
        {
          term: "Iya",
          meaning: "His / Her",
          pronunciation: "EE-yah",
        },
        {
          term: "Amon",
          meaning: "Our (exclusive)",
          pronunciation: "AH-mohn",
        },
        {
          term: "Aton",
          meaning: "Our (inclusive)",
          pronunciation: "AH-tohn",
        },
        {
          term: "Ira",
          meaning: "Their",
          pronunciation: "EE-rah",
        },
        {
          term: "Ngaran",
          meaning: "Name",
          pronunciation: "NGAH-rahn",
        },
        {
          term: "Gihapon",
          meaning: "Also",
          pronunciation: "gee-HAH-pohn",
        },
        {
          term: "Mag-upod",
          meaning: "Together",
          pronunciation: "mahg-OO-pod",
        },
        {
          term: "Kilala",
          meaning: "Know / Be familiar with",
          pronunciation: "kee-LAH-lah",
        },
      ],
    },
    {
      title: "C. Descriptive Words",
      items: [
        {
          term: "Buotan",
          meaning: "Kind",
          pronunciation: "boo-OH-tahn",
        },
        {
          term: "Mahigalaon",
          meaning: "Friendly",
          pronunciation: "mah-hee-gah-LAH-ohn",
        },
        {
          term: "Mabination",
          meaning: "Helpful",
          pronunciation: "mah-bee-nah-TEE-ohn",
        },
        {
          term: "Makalilipay",
          meaning: "Funny",
          pronunciation: "mah-kah-lee-lee-PAI",
        },
        {
          term: "Maabilidad",
          meaning: "Intelligent",
          pronunciation: "mah-ah-ah-bee-lee-DAHD",
        },
        {
          term: "Maduruto",
          meaning: "Hardworking",
          pronunciation: "mah-doo-ROO-toh",
        },
        {
          term: "Bata",
          meaning: "Young",
          pronunciation: "BAH-tah",
        },
        {
          term: "Lagas",
          meaning: "Old / Elderly",
          pronunciation: "lah-GAHS",
        },
        {
          term: "Malipayon",
          meaning: "Happy",
          pronunciation: "mah-lee-pah-YOHN",
        },
        {
          term: "Matahom",
          meaning: "Beautiful",
          pronunciation: "mah-tah-HOHM",
        },
      ],
    },
  ],
  languageNotes: [
    {
      title: "A. Introducing Someone",
      body: [
        "When introducing a person, learners can identify the person and explain their relationship to them.",
      ],
      examples: [
        {
          text: "Sangkay ko ini.",
          meaning: "This is my friend.",
        },
        {
          text: "Nanay ko ini.",
          meaning: "This is my mother.",
        },
        {
          text: "Tatay ko ini.",
          meaning: "This is my father.",
        },
        {
          text: "Bugto ko ini.",
          meaning: "This is my brother or sister.",
        },
      ],
    },
    {
      title: "A. Introducing Someone",
      body: [
        "The word ko indicates possession or relationship to the speaker in these examples.",
      ],
    },
    {
      title: "B. Identifying a Person",
      body: [
        "Use hiya when referring to a person who is being discussed.",
      ],
      examples: [
        {
          text: "Sangkay ko hiya.",
          meaning: "He or she is my friend.",
        },
        {
          text: "Klasmet ko hiya.",
          meaning: "He or she is my classmate.",
        },
        {
          text: "Maestra ko hiya.",
          meaning: "She is my teacher.",
        },
      ],
    },
    {
      title: "B. Identifying a Person",
      body: [
        "Waray commonly uses the same pronoun, hiya, for both he and she. The person's identity or the surrounding conversation helps clarify who is being discussed.",
      ],
    },
    {
      title: "C. Sharing Someone's Name",
      body: [
        "When introducing a person by name, use a simple sentence identifying their name.",
      ],
      examples: [
        {
          text: "Juan an iya ngaran.",
          meaning: "His name is Juan.",
        },
        {
          text: "Ana an iya ngaran.",
          meaning: "Her name is Ana.",
        },
        {
          text: "Maria an ngaran han akon nanay.",
          meaning: "My mother's name is Maria.",
        },
      ],
    },
    {
      title: "D. Describing Other People",
      body: [
        "You can add simple descriptions when introducing someone.",
      ],
      examples: [
        {
          text: "Buotan hiya.",
          meaning: "He or she is kind.",
        },
        {
          text: "Mahigalaon hiya.",
          meaning: "He or she is friendly.",
        },
        {
          text: "Maduruto hiya.",
          meaning: "He or she is hardworking.",
        },
        {
          text: "Malipayon hiya.",
          meaning: "He or she is happy.",
        },
      ],
    },
    {
      title: "D. Describing Other People",
      body: [
        "Descriptions provide additional information and help make introductions more meaningful.",
      ],
    },
    {
      title: "E. Asking About Someone",
      body: [
        "You can ask questions to learn more about a person.",
      ],
      examples: [
        {
          text: "Hin-o hiya?",
          meaning: "Who is he or she?",
        },
        {
          text: "Ano an iya ngaran?",
          meaning: "What is his or her name?",
        },
        {
          text: "Kilala mo ba hiya?",
          meaning: "Do you know him or her?",
        },
        {
          text: "Ano an iyo relasyon?",
          meaning: "What is your relationship?",
        },
      ],
    },
    {
      title: "E. Asking About Someone",
      body: [
        "Possible responses:",
      ],
      examples: [
        {
          text: "Sangkay ko hiya.",
          meaning: "He or she is my friend.",
        },
        {
          text: "Juan an iya ngaran.",
          meaning: "His name is Juan.",
        },
        {
          text: "Oo, kilala ko hiya.",
          meaning: "Yes, I know him or her.",
        },
        {
          text: "Bugto ko hiya.",
          meaning: "He or she is my sibling.",
        },
      ],
    },
  ],
  situationsTitle: "Useful Phrases and Sentences",
  situationGroups: [
    {
      title: "Useful Phrases and Sentences",
      intro: [
        "Study these expressions for introducing people and describing relationships.",
      ],
      items: [
        {
          term: "Sangkay ko ini.",
          meaning: "This is my friend.",
          pronunciation: "SAHNG-kai koh EE-nee",
        },
        {
          term: "Nanay ko ini.",
          meaning: "This is my mother.",
          pronunciation: "NAH-nai koh EE-nee",
        },
        {
          term: "Tatay ko ini.",
          meaning: "This is my father.",
          pronunciation: "TAH-tai koh EE-nee",
        },
        {
          term: "Bugto ko ini.",
          meaning: "This is my brother/sister.",
          pronunciation: "BOOG-toh koh EE-nee",
        },
        {
          term: "Sangkay ko hiya.",
          meaning: "He is my friend.",
          pronunciation: "SAHNG-kai koh HEE-yah",
        },
        {
          term: "Bugto ko hiya.",
          meaning: "She is my sister.",
          pronunciation: "BOOG-toh koh HEE-yah",
        },
        {
          term: "Juan an iya ngaran.",
          meaning: "His name is Juan.",
          pronunciation: "HOO-ahn ahn EE-yah NGAH-rahn",
        },
        {
          term: "Ana an iya ngaran.",
          meaning: "Her name is Ana.",
          pronunciation: "AH-nah ahn EE-yah NGAH-rahn",
        },
        {
          term: "Klasmet ko hiya.",
          meaning: "He is my classmate.",
          pronunciation: "KLAHS-met koh HEE-yah",
        },
        {
          term: "Maestra ko hiya.",
          meaning: "She is my teacher.",
          pronunciation: "mah-ES-trah koh HEE-yah",
        },
        {
          term: "Buotan hiya.",
          meaning: "He is kind.",
          pronunciation: "boo-OH-tahn HEE-yah",
        },
        {
          term: "Mahigalaon hiya.",
          meaning: "She is friendly.",
          pronunciation: "mah-hee-gah-LAH-ohn HEE-yah",
        },
        {
          term: "Kilala mo ba hiya?",
          meaning: "Do you know him/her?",
          pronunciation: "kee-LAH-lah moh bah HEE-yah",
        },
        {
          term: "Oo, kilala ko hiya.",
          meaning: "Yes, I know him/her.",
          pronunciation: "oh-OH kee-LAH-lah koh HEE-yah",
        },
        {
          term: "Diri ko hiya kilala.",
          meaning: "I don't know him/her.",
          pronunciation: "DEE-ree koh HEE-yah kee-LAH-lah",
        },
        {
          term: "Nalilipay ako nga makilala ka.",
          meaning: "Nice to meet you.",
          pronunciation: "nah-lee-lee-PAI AH-koh ngah mah-kee-LAH-lah kah",
        },
      ],
    },
  ],
  conversations: [
    {
      title: "Conversation A: Introducing a Friend",
      lines: [
        {
          speaker: "Ana",
          text: "Ben, pakilala ko ha imo an akon sangkay.",
          translation: "Ben, let me introduce my friend to you.",
        },
        {
          speaker: "Ben",
          text: "Sige.",
          translation: "Okay.",
        },
        {
          speaker: "Ana",
          text: "Sangkay ko ini hi Maria.",
          translation: "This is my friend Maria.",
        },
        {
          speaker: "Maria",
          text: "Maupay nga adlaw!",
          translation: "Good day!",
        },
        {
          speaker: "Ben",
          text: "Maupay nga adlaw! Ben an akon ngaran.",
          translation: "Good day! My name is Ben.",
        },
        {
          speaker: "Maria",
          text: "Nalilipay ako nga makilala ka.",
          translation: "I am happy to meet you.",
        },
      ],
    },
    {
      title: "Conversation B: Introducing a Family Member",
      lines: [
        {
          speaker: "Carlo",
          text: "Hin-o ini?",
          translation: "Who is this?",
        },
        {
          speaker: "Mia",
          text: "Nanay ko ini.",
          translation: "This is my mother.",
        },
        {
          speaker: "Carlo",
          text: "Ano an iya ngaran?",
          translation: "What is her name?",
        },
        {
          speaker: "Mia",
          text: "Maria an iya ngaran.",
          translation: "Her name is Maria.",
        },
        {
          speaker: "Carlo",
          text: "Maupay nga adlaw, Maria!",
          translation: "Good day, Maria!",
        },
        {
          speaker: "Maria",
          text: "Maupay nga adlaw!",
          translation: "Good day!",
        },
      ],
    },
    {
      title: "Conversation C: Talking About a Classmate",
      lines: [
        {
          speaker: "Liza",
          text: "Hin-o an lalaki nga imo kaupod?",
          translation: "Who is the boy with you?",
        },
        {
          speaker: "Mark",
          text: "Sangkay ko hiya nga hi Daniel.",
          translation: "He is my friend, Daniel.",
        },
        {
          speaker: "Liza",
          text: "Ano an iya kinaiya?",
          translation: "What is his personality like?",
        },
        {
          speaker: "Mark",
          text: "Buotan ngan maduruto hiya.",
          translation: "He is kind and hardworking.",
        },
        {
          speaker: "Liza",
          text: "Kilala ko hiya.",
          translation: "I know him.",
        },
        {
          speaker: "Mark",
          text: "Oo, klasmet naton hiya.",
          translation: "Yes, he is our classmate.",
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
        prompt: "What does \"Sangkay ko ini\" mean?",
        options: [
          {
            key: "A",
            text: "This is my teacher.",
          },
          {
            key: "B",
            text: "This is my friend.",
          },
          {
            key: "C",
            text: "This is my mother.",
          },
          {
            key: "D",
            text: "This is my classmate.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "Which Waray word means \"mother\"?",
        options: [
          {
            key: "A",
            text: "Tatay",
          },
          {
            key: "B",
            text: "Bugto",
          },
          {
            key: "C",
            text: "Nanay",
          },
          {
            key: "D",
            text: "Sangkay",
          },
        ],
        answerKey: "C",
      },
      {
        id: 3,
        prompt: "What does \"Buotan hiya\" mean?",
        options: [
          {
            key: "A",
            text: "He or she is kind.",
          },
          {
            key: "B",
            text: "He or she is angry.",
          },
          {
            key: "C",
            text: "He or she is young.",
          },
          {
            key: "D",
            text: "He or she is tired.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 4,
        prompt: "Which expression means \"What is his or her name?\"",
        options: [
          {
            key: "A",
            text: "Hin-o hiya?",
          },
          {
            key: "B",
            text: "Ano an iya ngaran?",
          },
          {
            key: "C",
            text: "Taga diin ka?",
          },
          {
            key: "D",
            text: "Pira an imo edad?",
          },
        ],
        answerKey: "B",
      },
      {
        id: 5,
        prompt: "What does \"Klasmet ko hiya\" mean?",
        options: [
          {
            key: "A",
            text: "He or she is my sibling.",
          },
          {
            key: "B",
            text: "He or she is my neighbor.",
          },
          {
            key: "C",
            text: "He or she is my classmate.",
          },
          {
            key: "D",
            text: "He or she is my teacher.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 6,
        prompt: "Which Waray pronoun can refer to both \"he\" and \"she\"?",
        options: [
          {
            key: "A",
            text: "Ako",
          },
          {
            key: "B",
            text: "Ikaw",
          },
          {
            key: "C",
            text: "Hiya",
          },
          {
            key: "D",
            text: "Hira",
          },
        ],
        answerKey: "C",
      },
      {
        id: 7,
        prompt: "What does \"Kilala mo ba hiya?\" mean?",
        options: [
          {
            key: "A",
            text: "Do you know him or her?",
          },
          {
            key: "B",
            text: "Where is he or she?",
          },
          {
            key: "C",
            text: "What is his or her name?",
          },
          {
            key: "D",
            text: "How old is he or she?",
          },
        ],
        answerKey: "A",
      },
      {
        id: 8,
        prompt: "Which sentence means \"She is friendly\"?",
        options: [
          {
            key: "A",
            text: "Mahigalaon hiya.",
          },
          {
            key: "B",
            text: "Buotan hiya.",
          },
          {
            key: "C",
            text: "Maduruto hiya.",
          },
          {
            key: "D",
            text: "Malipayon hiya.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 9,
        prompt: "What is the Waray equivalent of \"This is my father\"?",
        options: [
          {
            key: "A",
            text: "Nanay ko ini.",
          },
          {
            key: "B",
            text: "Tatay ko ini.",
          },
          {
            key: "C",
            text: "Bugto ko ini.",
          },
          {
            key: "D",
            text: "Sangkay ko ini.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 10,
        prompt: "Which sentence introduces someone as a sibling?",
        options: [
          {
            key: "A",
            text: "Sangkay ko ini.",
          },
          {
            key: "B",
            text: "Klasmet ko hiya.",
          },
          {
            key: "C",
            text: "Bugto ko ini.",
          },
          {
            key: "D",
            text: "Maestra ko hiya.",
          },
        ],
        answerKey: "C",
      },
    ],
  },
  extraActivities: [
    {
      title: "Match the Vocabulary",
      kind: "match",
      instructions: "Match each Waray word with its correct English meaning.",
      items: [
        "Waray",
        "Sangkay",
        "Nanay",
        "Bugto",
        "Klasmet",
        "Tatay",
      ],
      choices: [
        "Answer Choices",
        "Mother",
        "Classmate",
        "Friend",
        "Brother or sister",
        "Father",
      ],
    },
    {
      title: "Complete the Sentences",
      kind: "fill",
      instructions: "Choose the appropriate Waray word to complete each sentence.",
      items: [
        "______ ko ini. (This is my friend.)",
        "______ ko ini. (This is my mother.)",
        "Buotan ______. (He or she is kind.)",
        "Ano an iya ______? (What is his or her name?)",
        "______ mo ba hiya? (Do you know him or her?)",
      ],
      choices: [
        "Sangkay",
        "Nanay",
        "hiya",
        "ngaran",
        "Kilala",
      ],
    },
    {
      title: "Translate into Waray",
      kind: "translate",
      instructions: "Translate each English sentence into Waray.",
      items: [
        "This is my father.",
        "She is my friend.",
        "What is her name?",
        "He is kind.",
        "Do you know him?",
      ],
    },
    {
      title: "Introduce Someone",
      kind: "open",
      instructions: "Choose a person you know, such as a friend, family member, or classmate. Introduce that person in Waray using at least five sentences.\nInclude the following information:",
      items: [
        "The person's name.",
        "Your relationship with the person.",
        "One or two descriptions of the person.",
        "A simple statement about something you do together.",
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
      name: "People Introducer Badge",
      description: "Awarded after successfully completing the lesson assessment with at least 70%.",
    },
  },
  expectedOutcomes: [
    "Introduce friends and family members in Waray.",
    "Identify people and describe their relationships.",
    "Share basic information about someone.",
    "Ask and answer simple questions about other people.",
    "Participate in short conversations involving introductions.",
    "Complete the vocabulary review.",
    "Study the useful phrases and lesson explanations.",
    "Finish the guided conversation and practice activities.",
    "Complete the lesson assessment.",
    "Obtain at least 70% to pass.",
    "Basic greetings and self-introduction.",
    "Common expressions and responses.",
    "Numbers and counting.",
    "Days, months, and time.",
    "Family members and relationships.",
    "Food and drinks.",
    "Colors and shapes.",
    "Animals and nature.",
    "Asking and answering simple questions.",
    "Introducing other people.",
  ],
};
