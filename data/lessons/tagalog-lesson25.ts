import { StructuredLesson } from "../../types/structuredLesson";

// Tagalog Lesson 25 — imported from "Lesson Plan.pdf", pages 480–508.
// The Tagalog and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.

export const tagalogLesson25: StructuredLesson = {
  lessonId: "tagalog_25",
  dialect: "tagalog",
  dialectLabel: "Tagalog",
  lessonNumber: 25,
  title: "Verb Forms and Tenses",
  level: "Advanced",
  unit: "Unit 2 – Language Development",
  estimatedDuration: "50–60 minutes",
  prerequisite: "Completion of Lessons 1–24",
  intro: [
    "Verbs are words that express actions, events, or states. In Filipino, verbs are especially important because their forms change depending on the aspect of an action, the grammatical focus of the sentence, and the context in which they are used.",
    "In English, verbs commonly change according to tense:",
    "• Eat",
    "• Ate",
    "• Will eat",
    "In Filipino, verb forms commonly express aspect rather than tense alone. Aspect tells us whether an action has been completed, is ongoing, or is contemplated.",
    "Consider the following examples:",
    "Filipino – English",
    "Kumain si Ana. – Ana ate.",
    "Kumakain si Ana. – Ana is eating.",
    "Kakain si Ana. – Ana will eat.",
    "The verb changes depending on the stage of the action.",
    "Understanding these patterns will help learners communicate more accurately when discussing experiences, routines, plans, instructions, and events.",
    "Real-life applications:",
    "• Describing completed activities and personal experiences.",
    "• Talking about daily routines.",
    "• Explaining what someone is currently doing.",
    "• Discussing future plans and responsibilities.",
    "• Writing stories and narratives.",
    "• Giving instructions and explaining procedures.",
  ],
  objectivesIntro: "By the end of this lesson, learners should be able to:",
  objectives: [
    "Identify the root words and affixes used in common Filipino verbs.",
    "Distinguish completed, ongoing, and contemplated verb aspects.",
    "Construct verb forms using common Filipino affixes and patterns.",
    "Use appropriate verb forms when describing past, present, and future situations.",
    "Recognize how context and time expressions contribute to the meaning of a sentence.",
    "Distinguish between actor-focused and object-focused verb constructions.",
    "Apply appropriate verb forms in conversations, narratives, explanations, and formal writing.",
    "Identify and correct common errors in Filipino verb construction.",
  ],
  expressionGroups: [
    {
      title: "A. Important Grammar Terms",
      items: [
        {
          term: "Pandiwa",
          meaning: "Verb",
        },
        {
          term: "Salitang-ugat",
          meaning: "Root word",
        },
        {
          term: "Panlapi",
          meaning: "Affix",
        },
        {
          term: "Aspekto ng pandiwa",
          meaning: "Verb aspect",
        },
        {
          term: "Naganap",
          meaning: "Completed aspect",
        },
        {
          term: "Nagaganap",
          meaning: "Ongoing or incompleted aspect",
        },
        {
          term: "Magaganap",
          meaning: "Contemplated or prospective aspect",
        },
        {
          term: "Pokus ng pandiwa",
          meaning: "Verb focus",
        },
        {
          term: "Tagaganap",
          meaning: "Actor or doer",
        },
        {
          term: "Layon",
          meaning: "Object or patient",
        },
        {
          term: "Panahunan",
          meaning: "Tense or time reference",
        },
        {
          term: "Kilos",
          meaning: "Action",
        },
        {
          term: "Pangyayari",
          meaning: "Event",
        },
        {
          term: "Gawain",
          meaning: "Activity",
        },
        {
          term: "Layunin",
          meaning: "Purpose",
        },
      ],
    },
    {
      title: "B. Common Filipino Verbs",
      items: [
        {
          term: "Kumain",
          meaning: "To eat",
        },
        {
          term: "Uminom",
          meaning: "To drink",
        },
        {
          term: "Matulog",
          meaning: "To sleep",
        },
        {
          term: "Gumising",
          meaning: "To wake up",
        },
        {
          term: "Mag-aral",
          meaning: "To study",
        },
        {
          term: "Magtrabaho",
          meaning: "To work",
        },
        {
          term: "Magluto",
          meaning: "To cook",
        },
        {
          term: "Maglinis",
          meaning: "To clean",
        },
        {
          term: "Magbasa",
          meaning: "To read",
        },
        {
          term: "Magsulat",
          meaning: "To write",
        },
        {
          term: "Tumakbo",
          meaning: "To run",
        },
        {
          term: "Maglakad",
          meaning: "To walk",
        },
        {
          term: "Pumunta",
          meaning: "To go",
        },
        {
          term: "Dumating",
          meaning: "To arrive",
        },
        {
          term: "Umalis",
          meaning: "To leave",
        },
        {
          term: "Bumili",
          meaning: "To buy",
        },
        {
          term: "Magdala",
          meaning: "To bring",
        },
        {
          term: "Magbigay",
          meaning: "To give",
        },
        {
          term: "Makinig",
          meaning: "To listen",
        },
        {
          term: "Magsalita",
          meaning: "To speak",
        },
        {
          term: "Manood",
          meaning: "To watch",
        },
        {
          term: "Maglaro",
          meaning: "To play",
        },
        {
          term: "Magtanong",
          meaning: "To ask",
        },
        {
          term: "Sumagot",
          meaning: "To answer",
        },
        {
          term: "Tumulong",
          meaning: "To help",
        },
      ],
    },
    {
      title: "C. Time Expressions",
      intro: [
        "These expressions help establish when an action takes place. They should be used together with the appropriate verb form and sentence context.",
      ],
      items: [
        {
          term: "Kahapon",
          meaning: "Yesterday",
        },
        {
          term: "Kanina",
          meaning: "Earlier",
        },
        {
          term: "Noong nakaraan",
          meaning: "Previously",
        },
        {
          term: "Ngayon",
          meaning: "Now",
        },
        {
          term: "Sa kasalukuyan",
          meaning: "At present",
        },
        {
          term: "Araw-araw",
          meaning: "Every day",
        },
        {
          term: "Tuwing umaga",
          meaning: "Every morning",
        },
        {
          term: "Mamaya",
          meaning: "Later",
        },
        {
          term: "Bukas",
          meaning: "Tomorrow",
        },
        {
          term: "Sa susunod na linggo",
          meaning: "Next week",
        },
        {
          term: "Sa hinaharap",
          meaning: "In the future",
        },
        {
          term: "Mamayang gabi",
          meaning: "Later tonight",
        },
      ],
    },
  ],
  languageNotes: [
    {
      title: "A. Understanding Filipino Verb Structure",
      body: [
        "Many Filipino verbs are formed by combining a root word with an affix.",
        "A root word carries the basic meaning, while an affix helps form a verb and may indicate its grammatical properties.",
      ],
      table: {
        leftHeading: "Root Word",
        rightHeading: "Verb · English Meaning",
        rows: [
          {
            left: "kain",
            right: "kumain · To eat",
          },
          {
            left: "sulat",
            right: "sumulat · To write",
          },
          {
            left: "bili",
            right: "bumili · To buy",
          },
          {
            left: "basa",
            right: "magbasa · To read",
          },
          {
            left: "laro",
            right: "maglaro · To play",
          },
          {
            left: "linis",
            right: "maglinis · To clean",
          },
          {
            left: "aral",
            right: "mag-aral · To study",
          },
          {
            left: "luto",
            right: "magluto · To cook",
          },
        ],
      },
    },
    {
      title: "A. Understanding Filipino Verb Structure",
      body: [
        "Example breakdown:",
        "• Root word: kain",
        "• Verb form: kumain",
        "• Meaning: To eat",
        "Another example:",
        "• Root word: sulat",
        "• Verb form: sumulat",
        "• Meaning: To write",
        "Important: Filipino verb formation is not limited to simply adding one prefix or suffix. Different affixes and patterns may be used depending on the verb, its focus, and its intended meaning.",
      ],
    },
    {
      title: "B. The Three Common Verb Aspects",
      body: [
        "Filipino grammar commonly teaches three major aspects of verbs:",
      ],
      examples: [
        {
          text: "Naganap",
          meaning: "Completed",
        },
        {
          text: "Nagaganap",
          meaning: "Ongoing or incompleted",
        },
        {
          text: "Magaganap",
          meaning: "Contemplated or prospective",
        },
      ],
    },
    {
      title: "B. The Three Common Verb Aspects",
      body: [
        "These are sometimes introduced to learners as past, present, and future forms. However, they are more accurately described as aspects because they indicate the stage of an action rather than relying on tense alone.",
      ],
      examples: [
        {
          text: "Naganap",
          meaning: "Completed Aspect",
        },
      ],
    },
    {
      title: "B. The Three Common Verb Aspects",
      body: [
        "The completed aspect indicates that an action has already happened or reached completion.",
      ],
      table: {
        leftHeading: "Filipino",
        rightHeading: "English",
        rows: [
          {
            left: "Kumain ako.",
            right: "I ate.",
          },
          {
            left: "Uminom siya ng tubig.",
            right: "He/She drank water.",
          },
          {
            left: "Nag-aral kami kagabi.",
            right: "We studied last night.",
          },
          {
            left: "Bumili sila ng pagkain.",
            right: "They bought food.",
          },
          {
            left: "Naglinis si Ana ng silid.",
            right: "Ana cleaned the room.",
          },
        ],
      },
    },
    {
      title: "B. The Three Common Verb Aspects",
      body: [
        "Example breakdown:",
        "Kumain ako kahapon.",
        "• Verb: Kumain",
        "• Subject: Ako",
        "• Time expression: Kahapon",
        "• Meaning: I ate yesterday.",
        "Other examples:",
        "• Natapos ko na ang aking gawain.",
        "• Dumating ang mga bisita kanina.",
        "• Nagsulat siya ng liham noong nakaraang linggo.",
      ],
      examples: [
        {
          text: "Nagaganap",
          meaning: "Ongoing Aspect",
        },
      ],
    },
    {
      title: "B. The Three Common Verb Aspects",
      body: [
        "The ongoing aspect indicates that an action is currently happening or was happening during a particular period.",
      ],
      table: {
        leftHeading: "Filipino",
        rightHeading: "English",
        rows: [
          {
            left: "Kumakain ako.",
            right: "I am eating.",
          },
          {
            left: "Umiinom siya ng tubig.",
            right: "He/She is drinking water.",
          },
          {
            left: "Nag-aaral kami.",
            right: "We are studying.",
          },
          {
            left: "Bumibili sila ng pagkain.",
            right: "They are buying food.",
          },
          {
            left: "Naglilinis si Ana ng silid.",
            right: "Ana is cleaning the room.",
          },
        ],
      },
    },
    {
      title: "B. The Three Common Verb Aspects",
      body: [
        "Example breakdown:",
        "Kumakain ako ngayon.",
        "• Verb: Kumakain",
        "• Subject: Ako",
        "• Time expression: Ngayon",
        "• Meaning: I am eating now.",
        "Other examples:",
        "• Nagsusulat siya ng kaniyang takdang-aralin.",
        "• Nagbabasa ang mga mag-aaral.",
        "• Naghahanda ang guro para sa klase.",
        "The ongoing aspect can also describe an action that was happening in the past when the sentence provides the appropriate context.",
      ],
      examples: [
        {
          text: "Magaganap",
          meaning: "Contemplated or Prospective Aspect",
        },
      ],
    },
    {
      title: "B. The Three Common Verb Aspects",
      body: [
        "The contemplated aspect indicates an action that is expected, planned, intended, or yet to happen.",
      ],
      table: {
        leftHeading: "Filipino",
        rightHeading: "English",
        rows: [
          {
            left: "Kakain ako.",
            right: "I will eat.",
          },
          {
            left: "Iinom siya ng tubig.",
            right: "He/She will drink water.",
          },
          {
            left: "Mag-aaral kami bukas.",
            right: "We will study tomorrow.",
          },
          {
            left: "Bibili sila ng pagkain.",
            right: "They will buy food.",
          },
          {
            left: "Maglilinis si Ana ng silid.",
            right: "Ana will clean the room.",
          },
        ],
      },
    },
    {
      title: "B. The Three Common Verb Aspects",
      body: [
        "Example breakdown:",
        "Mag-aaral kami bukas.",
        "• Verb: Mag-aaral",
        "• Subject: Kami",
        "• Time expression: Bukas",
        "• Meaning: We will study tomorrow.",
        "Other examples:",
        "• Magsusulat ako ng ulat mamaya.",
        "• Pupunta sila sa paaralan sa Lunes.",
        "• Maghahanda kami para sa programa.",
      ],
    },
    {
      title: "C. Comparing the Three Aspects",
      body: [
        "Observe how the same root word changes according to the aspect.",
      ],
      table: {
        leftHeading: "",
        rightHeading: "",
        rows: [
          {
            left: "Root Word",
            right: "Completed · Ongoing · Contemplated",
          },
          {
            left: "kain",
            right: "kumain · kumakain · kakain",
          },
          {
            left: "inom",
            right: "uminom · umiinom · iinom",
          },
          {
            left: "sulat",
            right: "sumulat · sumusulat · susulat",
          },
          {
            left: "bili",
            right: "bumili · bumibili · bibili",
          },
          {
            left: "basa",
            right: "nagbasa · nagbabasa · magbabasa",
          },
          {
            left: "laro",
            right: "naglaro · naglalaro · maglalaro",
          },
          {
            left: "linis",
            right: "naglinis · naglilinis · maglilinis",
          },
          {
            left: "luto",
            right: "nagluto · nagluluto · magluluto",
          },
          {
            left: "aral",
            right: "nag-aral · nag-aaral · mag-aaral",
          },
        ],
      },
    },
    {
      title: "C. Comparing the Three Aspects",
      body: [
        "Notice:",
        "Different verb groups use different patterns. For example:",
      ],
      examples: [
        {
          text: "Kumain",
          meaning: "kumakain – kakain",
        },
        {
          text: "Nag-aral",
          meaning: "nag-aaral – mag-aaral",
        },
      ],
    },
    {
      title: "C. Comparing the Three Aspects",
      body: [
        "Do not assume that all Filipino verbs follow one identical formation rule.",
      ],
    },
    {
      title: "D. Understanding Common Verb Affixes",
      body: [
        "Filipino uses different affixes to form verbs. The choice of affix can depend on the root word and the intended focus or meaning.",
        "Some commonly encountered affixes include:",
      ],
      table: {
        leftHeading: "",
        rightHeading: "",
        rows: [
          {
            left: "Affix",
            right: "Example · General Function",
          },
          {
            left: "-um-",
            right: "Kumain · Forms certain actor-focused verbs",
          },
          {
            left: "mag-",
            right: "Mag-aral · Forms verbs associated with an actor performing an action",
          },
          {
            left: "nag-",
            right: "Nag-aral · Commonly used for completed actions in the mag- verb group",
          },
          {
            left: "ma-",
            right: "Matulog · Forms certain verbs expressing actions or states",
          },
          {
            left: "-in-",
            right: "Binili · Commonly appears in certain object-focused verb forms",
          },
          {
            left: "i-",
            right: "Ibigay · Commonly appears in certain object-focused constructions",
          },
        ],
      },
      examples: [
        {
          text: "Kumain",
          meaning: "Kumakain – Kakain",
        },
        {
          text: "Mag-aral",
          meaning: "Nag-aral – Mag-aaral",
        },
        {
          text: "Matulog",
          meaning: "Natulog – Matutulog",
        },
        {
          text: "Bumili",
          meaning: "Bumibili – Bibili",
        },
        {
          text: "Binigay",
          meaning: "Ibinibigay – Ibibigay",
        },
      ],
    },
    {
      title: "D. Understanding Common Verb Affixes",
      body: [
        "The last example illustrates a different verb pattern from the first four. The form ibinigay is commonly used for a completed object-focused construction, while ibinibigay and ibibigay express ongoing and contemplated forms.",
        "Important: Affixes do not always have one fixed English equivalent. Their functions depend on the verb pattern and sentence construction.",
      ],
    },
    {
      title: "E. Understanding Verb Focus",
      body: [
        "One important feature of Filipino verbs is verb focus, which indicates the grammatical relationship emphasized in a sentence.",
        "For this lesson, we will focus on two common patterns:",
        "• Actor focus",
        "• Object or patient focus",
        "• Actor Focus",
        "Actor-focused constructions emphasize the person or thing performing the action.",
        "Kumain ng mangga si Ana.",
        "• Verb: Kumain",
        "• Actor: Si Ana",
        "• Object: Ng mangga",
        "English: Ana ate a mango.",
        "Other examples:",
        "• Bumili ng pagkain si Marco.",
        "• Sumulat ng liham ang estudyante.",
        "• Nagluto ng hapunan ang nanay.",
        "• Object or Patient Focus",
        "Object-focused constructions emphasize the object or patient affected by the action.",
        "Kinain ni Ana ang mangga.",
        "• Verb: Kinain",
        "• Actor: Ni Ana",
        "• Object or patient: Ang mangga",
        "English: The mango was eaten by Ana.",
        "Other examples:",
        "• Binili ni Marco ang pagkain.",
        "• Isinulat ng estudyante ang liham.",
        "• Niluto ng nanay ang hapunan.",
        "Comparison:",
      ],
      table: {
        leftHeading: "",
        rightHeading: "",
        rows: [
          {
            left: "Actor-Focused",
            right: "Object-Focused",
          },
          {
            left: "Kumain ng mangga si Ana.",
            right: "Kinain ni Ana ang mangga.",
          },
          {
            left: "Bumili ng pagkain si Marco.",
            right: "Binili ni Marco ang pagkain.",
          },
          {
            left: "Sumulat ng liham ang estudyante.",
            right: "Isinulat ng estudyante ang liham.",
          },
        ],
      },
      remember: "These sentences do not simply differ in word order. Their verb forms and grammatical markers also change. Filipino focus and voice involve more grammatical detail than the basic distinction presented here.",
    },
    {
      title: "F. Using Verb Aspects with Time Expressions",
      body: [
        "Time expressions help establish when an action happens. The verb aspect and the surrounding context work together to communicate meaning.",
        "Completed actions:",
        "• Kahapon ay nag-aral ako.",
        "• Kanina ay bumili siya ng pagkain.",
        "• Noong nakaraang linggo ay bumisita kami sa aming mga kamag-anak.",
        "Ongoing actions:",
        "• Nag-aaral ako ngayon.",
        "• Kasalukuyang naghahanda ang mga guro.",
        "• Naglalaro ang mga bata sa labas.",
        "Contemplated actions:",
        "• Mag-aaral ako bukas.",
        "• Bibili kami ng bagong kagamitan sa susunod na linggo.",
        "• Pupunta sila sa paaralan mamaya.",
        "Important observation:",
        "The verb form alone does not always establish the exact time. Context and time expressions can help clarify whether an action happened in the past, is happening now, or is expected to happen later.",
      ],
    },
    {
      title: "G. Using Verbs in Longer Sentences",
      body: [
        "Verb forms become more useful when combined with connectors and additional information.",
        "Completed action:",
        "Nag-aral siya nang mabuti dahil may pagsusulit kinabukasan.",
        "Ongoing action:",
        "Nagbabasa ang mga mag-aaral habang naghihintay sa kanilang guro.",
        "Contemplated action:",
        "Maghahanda kami ng presentasyon upang maipaliwanag nang maayos ang aming pananaliksik.",
        "Combined actions:",
        "Pagkatapos niyang kumain, naglinis siya ng mesa at naghanda para sa susunod na gawain.",
        "Narrative example:",
        "Kahapon, pumunta si Maria sa silid-aklatan upang manghiram ng mga aklat. Habang naghahanap siya ng mga babasahin, nakita niya ang kaniyang kaklase. Nag-usap sila tungkol sa kanilang proyekto at nagpasiyang mag-aral nang magkasama. Bukas, babalik sila sa silid-aklatan upang ipagpatuloy ang kanilang pananaliksik.",
        "Notice how the verbs help communicate the sequence of events.",
      ],
    },
    {
      title: "H. Common Verb Construction Errors",
      body: [
        "Learners should avoid the following mistakes.",
      ],
      table: {
        leftHeading: "",
        rightHeading: "",
        rows: [
          {
            left: "Incorrect or Awkward",
            right: "Improved Form · Explanation",
          },
          {
            left: "Kahapon ay kumakain ako ng almusal.",
            right: "Kahapon ay kumain ako ng almusal. · Use the completed form when reporting a finished action.",
          },
          {
            left: "Bukas ay kumain ako sa paaralan.",
            right: "Bukas ay kakain ako sa paaralan. · Use a contemplated form for an expected future action.",
          },
          {
            left: "Ngayon ay kakain ako kahapon.",
            right: "Kahapon ay kumain ako. · The verb and time expression should agree with the intended meaning.",
          },
          {
            left: "Nag-aaral ako bukas kahapon.",
            right: "Mag-aaral ako bukas. · Remove conflicting time references.",
          },
          {
            left: "Kinain si Ana ng mangga.",
            right: "Kumain si Ana ng mangga. · Use an appropriate actor-focused construction for the intended meaning.",
          },
        ],
      },
      remember: "Some sentences may be grammatically possible in special contexts even if they seem unusual in ordinary conversation. Always consider the intended meaning, time reference, and verb focus before correcting a sentence.",
    },
    {
      title: "Review and Preparation for the Next Lesson",
      body: [
        "Before proceeding, learners should remember:",
        "• Filipino verbs are called pandiwa.",
        "• The root word is called salitang-ugat.",
        "• Affixes are called panlapi.",
        "• Naganap expresses a completed action.",
        "• Nagaganap expresses an ongoing action.",
        "• Magaganap expresses a contemplated or prospective action.",
        "• Filipino verbs use different formation patterns.",
        "• Verb focus helps establish the grammatical relationship emphasized in a sentence.",
        "• Time expressions and context help clarify when an action takes place.",
      ],
    },
  ],
  situationsTitle: "Useful Phrases and Sentences",
  situationGroups: [
    {
      title: "Useful Phrases and Sentences",
      intro: [
        "Practice reading the following sentences and identifying their verb forms.",
      ],
      items: [
        {
          term: "Nag-aral ako kagabi para sa pagsusulit.",
          meaning: "I studied last night for the examination.",
        },
        {
          term: "Nag-aaral siya ngayon sa silid-aklatan.",
          meaning: "He/She is studying in the library now.",
        },
        {
          term: "Mag-aaral kami bukas para sa aming proyekto.",
          meaning: "We will study tomorrow for our project.",
        },
        {
          term: "Naghanda ang mga mag-aaral para sa paligsahan.",
          meaning: "The students prepared for the competition.",
        },
        {
          term: "Naghahanda ang mga guro para sa programa.",
          meaning: "The teachers are preparing for the program.",
        },
        {
          term: "Maghahanda kami ng mga kagamitan mamaya.",
          meaning: "We will prepare the materials later.",
        },
        {
          term: "Binili ni Ana ang bagong aklat.",
          meaning: "Ana bought the new book.",
        },
        {
          term: "Binibili niya ang mga kailangan para sa proyekto.",
          meaning: "He/She is buying the things needed for the project.",
        },
        {
          term: "Ibibili niya ng pagkain ang kaniyang pamilya.",
          meaning: "He/She will buy food for the family.",
        },
        {
          term: "Natapos na namin ang aming gawain.",
          meaning: "We have already finished our task.",
        },
      ],
    },
  ],
  conversations: [
    {
      title: "Conversation 1: Talking About Past Activities",
      instructions: "Context: Two classmates are discussing what they did yesterday.",
      lines: [
        {
          speaker: "Lara",
          text: "Ano ang ginawa mo kahapon?",
        },
        {
          speaker: "Miguel",
          text: "Nag-aral ako sa bahay dahil may pagsusulit kami ngayon.",
        },
        {
          speaker: "Lara",
          text: "Nagbasa ka rin ba ng mga aklat?",
        },
        {
          speaker: "Miguel",
          text: "Oo. Nagbasa ako ng ilang kabanata at nagsulat ng mga tala.",
        },
        {
          speaker: "Lara",
          text: "Mabuti naman. Ako naman ay tumulong sa aming pamilya at naglinis ng bahay.",
        },
        {
          speaker: "Miguel",
          text: "Mukhang naging abala tayong dalawa kahapon.",
        },
      ],
    },
    {
      title: "Conversation 2: Discussing Current Activities",
      instructions: "Context: Two students are working on a group project.",
      lines: [
        {
          speaker: "Paolo",
          text: "Ano ang ginagawa mo ngayon?",
        },
        {
          speaker: "Rina",
          text: "Naghahanda ako ng mga larawan para sa aming presentasyon.",
        },
        {
          speaker: "Paolo",
          text: "Ako naman ay nagsusulat ng paliwanag para sa bawat bahagi.",
        },
        {
          speaker: "Rina",
          text: "Natatapos mo na ba ang iyong gawain?",
        },
        {
          speaker: "Paolo",
          text: "Oo, halos tapos na. Inaayos ko na lamang ang ilang detalye.",
        },
        {
          speaker: "Rina",
          text: "Mabuti. Pagkatapos nito, rerepasuhin natin ang buong presentasyon.",
        },
      ],
    },
    {
      title: "Conversation 3: Talking About Future Plans",
      instructions: "Context: Two friends are planning their activities for the following week.",
      lines: [
        {
          speaker: "Ella",
          text: "Ano ang gagawin mo sa susunod na linggo?",
        },
        {
          speaker: "Nico",
          text: "Pupunta ako sa paaralan upang makipagkita sa aming tagapayo.",
        },
        {
          speaker: "Ella",
          text: "Ano ang pag-uusapan ninyo?",
        },
        {
          speaker: "Nico",
          text: "Tatalakayin namin ang mga susunod na hakbang para sa aming pananaliksik.",
        },
        {
          speaker: "Ella",
          text: "Sasama rin ako dahil kailangan naming maghanda para sa pagsusuri ng proyekto.",
        },
        {
          speaker: "Nico",
          text: "Mabuti. Pagkatapos ng pagpupulong, magtutulungan tayo sa pag-aayos ng mga dokumento.",
        },
      ],
    },
  ],
  assessment: {
    instructions: "Choose the correct answer for each question.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What is a verb called in Filipino?",
        options: [
          {
            key: "A",
            text: "Pangngalan",
          },
          {
            key: "B",
            text: "Pang-uri",
          },
          {
            key: "C",
            text: "Pandiwa",
          },
          {
            key: "D",
            text: "Pang-abay",
          },
        ],
        answerKey: "C",
      },
      {
        id: 2,
        prompt: "What does naganap indicate?",
        options: [
          {
            key: "A",
            text: "An action that is completed",
          },
          {
            key: "B",
            text: "An action that is currently happening",
          },
          {
            key: "C",
            text: "An action that has not yet happened",
          },
          {
            key: "D",
            text: "A description of a person",
          },
        ],
        answerKey: "A",
      },
      {
        id: 3,
        prompt: "Which verb expresses an ongoing action?",
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
            text: "Kakain",
          },
          {
            key: "D",
            text: "Kainin",
          },
        ],
        answerKey: "B",
      },
      {
        id: 4,
        prompt: "Which verb expresses a contemplated action?",
        options: [
          {
            key: "A",
            text: "Nag-aral",
          },
          {
            key: "B",
            text: "Nag-aaral",
          },
          {
            key: "C",
            text: "Mag-aaral",
          },
          {
            key: "D",
            text: "Nagbasa",
          },
        ],
        answerKey: "C",
      },
      {
        id: 5,
        prompt: "What is the root word of sumulat?",
        options: [
          {
            key: "A",
            text: "Sulat",
          },
          {
            key: "B",
            text: "Sumulat",
          },
          {
            key: "C",
            text: "Sulatan",
          },
          {
            key: "D",
            text: "Sumusulat",
          },
        ],
        answerKey: "A",
      },
      {
        id: 6,
        prompt: "Which sentence describes a completed action?",
        options: [
          {
            key: "A",
            text: "Nagluluto si Ana ngayon.",
          },
          {
            key: "B",
            text: "Magluluto si Ana bukas.",
          },
          {
            key: "C",
            text: "Nagluto si Ana kahapon.",
          },
          {
            key: "D",
            text: "Magluto si Ana mamaya.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 7,
        prompt: "Which sentence uses an appropriate verb form for a future activity?",
        options: [
          {
            key: "A",
            text: "Bukas ay bumili ako ng pagkain.",
          },
          {
            key: "B",
            text: "Bukas ay bibili ako ng pagkain.",
          },
          {
            key: "C",
            text: "Kahapon ay bibili ako ng pagkain.",
          },
          {
            key: "D",
            text: "Ngayon ay bumili ako bukas.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 8,
        prompt: "Which sentence uses an appropriate ongoing verb form?",
        options: [
          {
            key: "A",
            text: "Nagbabasa siya ngayon.",
          },
          {
            key: "B",
            text: "Nagbasa siya bukas.",
          },
          {
            key: "C",
            text: "Magbabasa siya kahapon.",
          },
          {
            key: "D",
            text: "Babasa siya kahapon.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 9,
        prompt: "Which sentence is actor-focused?",
        options: [
          {
            key: "A",
            text: "Kinain ni Ana ang mansanas.",
          },
          {
            key: "B",
            text: "Binili ni Marco ang aklat.",
          },
          {
            key: "C",
            text: "Kumain ng mansanas si Ana.",
          },
          {
            key: "D",
            text: "Isinulat ng bata ang liham.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 10,
        prompt: "Which sentence is object-focused?",
        options: [
          {
            key: "A",
            text: "Bumili ng sapatos si Liza.",
          },
          {
            key: "B",
            text: "Tumakbo ang bata.",
          },
          {
            key: "C",
            text: "Nagluto ng pagkain ang tatay.",
          },
          {
            key: "D",
            text: "Binili ni Liza ang sapatos.",
          },
        ],
        answerKey: "D",
      },
      {
        id: 11,
        prompt: "Which time expression means “next week”?",
        options: [
          {
            key: "A",
            text: "Kahapon",
          },
          {
            key: "B",
            text: "Sa susunod na linggo",
          },
          {
            key: "C",
            text: "Kanina",
          },
          {
            key: "D",
            text: "Noong nakaraan",
          },
        ],
        answerKey: "B",
      },
      {
        id: 12,
        prompt: "Which verb form completes the sentence correctly?\nTuwing umaga, ______ ako ng tubig.",
        options: [
          {
            key: "A",
            text: "uminom",
          },
          {
            key: "B",
            text: "iinom",
          },
          {
            key: "C",
            text: "umiinom",
          },
          {
            key: "D",
            text: "ininom",
          },
        ],
        answerKey: "C",
      },
      {
        id: 13,
        prompt: "Which statement about Filipino verbs is most accurate?",
        options: [
          {
            key: "A",
            text: "All verbs use exactly the same affix pattern.",
          },
          {
            key: "B",
            text: "Filipino verbs can express aspect through different forms.",
          },
          {
            key: "C",
            text: "Verb forms never change according to their grammatical focus.",
          },
          {
            key: "D",
            text: "Time expressions are unnecessary in Filipino sentences.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 14,
        prompt: "Which sentence correctly uses a completed object-focused verb?",
        options: [
          {
            key: "A",
            text: "Kinain ni Pedro ang tinapay.",
          },
          {
            key: "B",
            text: "Kumakain ni Pedro ang tinapay.",
          },
          {
            key: "C",
            text: "Kakain ni Pedro ang tinapay.",
          },
          {
            key: "D",
            text: "Kain ni Pedro ang tinapay.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 15,
        prompt: "Why is understanding verb aspects important?",
        options: [
          {
            key: "A",
            text: "It helps learners identify only the subject.",
          },
          {
            key: "B",
            text: "It makes every sentence longer.",
          },
          {
            key: "C",
            text: "It helps communicate whether an action is completed, ongoing, or contemplated.",
          },
          {
            key: "D",
            text: "It removes the need for time expressions.",
          },
        ],
        answerKey: "C",
      },
    ],
  },
  extraActivities: [
    {
      title: "Identify the Verb Aspect",
      kind: "choice",
      instructions: "Identify whether the underlined verb expresses a completed, ongoing, or contemplated action.",
      items: [
        "<underline>Nag-aral</underline> si Ana kagabi.",
        "<underline>Kumakain</underline> ang bata ngayon.",
        "<underline>Maglilinis</underline> kami ng silid bukas.",
        "<underline>Bumili</underline> siya ng bagong sapatos.",
        "<underline>Nagsusulat</underline> ang estudyante ng kaniyang sanaysay.",
        "<underline>Pupunta</underline> sila sa palengke mamaya.",
        "<underline>Natulog</underline> ako nang maaga kagabi.",
        "<underline>Nagluluto</underline> ang nanay sa kusina.",
        "<underline>Magbabasa</underline> ako ng aklat mamayang gabi.",
        "<underline>Sumagot</underline> ang guro sa tanong ng mag-aaral.",
      ],
    },
    {
      title: "Choose the Correct Verb Form",
      kind: "rewrite",
      instructions: "Select the appropriate verb form to complete each sentence.",
      items: [
        "Kahapon, ______ ako ng almusal bago pumasok.\nA. kumakain\nB. kumain\nC. kakain",
        "Sa kasalukuyan, ______ ang mga mag-aaral sa silid-aklatan.\nA. nag-aaral\nB. nag-aral\nC. mag-aaral",
        "Bukas, ______ kami sa aming tagapayo.\nA. nakipagkita\nB. nakikipagkita\nC. makikipagkita",
        "Noong nakaraang linggo, ______ siya ng liham.\nA. sumusulat\nB. sumulat\nC. susulat",
        "Mamaya, ______ ako ng bagong aklat.\nA. bibili\nB. bumili\nC. bumibili",
        "Tuwing umaga, ______ siya ng kape.\nA. uminom\nB. umiinom\nC. iinom",
        "Noong isang araw, ______ ang mga bata sa parke.\nA. naglaro\nB. naglalaro\nC. maglalaro",
        "Sa susunod na buwan, ______ kami ng aming proyekto.\nA. ipinasa\nB. ipinapasa\nC. ipapasa",
      ],
    },
    {
      title: "Identify the Root Word and Affix",
      kind: "choice",
      instructions: "Identify the root word and the affix used in each verb. If the form involves a change in the root or a more complex pattern, describe the pattern briefly.",
      items: [
        "Verb | Root Word | Affix or Pattern",
        "1. Kumain | ______ | ______",
        "2. Mag-aral | ______ | ______",
        "3. Bumili | ______ | ______",
        "4. Magluto | ______ | ______",
        "5. Sumulat | ______ | ______",
        "6. Maglinis | ______ | ______",
        "7. Matulog | ______ | ______",
        "8. Magbasa | ______ | ______",
      ],
    },
    {
      title: "Transform the Verb",
      kind: "rewrite",
      instructions: "Write the completed, ongoing, and contemplated forms of each verb.",
      items: [
        "Root or Verb Group | Completed | Ongoing | Contemplated",
        "Kain | ______ | ______ | ______",
        "Inom | ______ | ______ | ______",
        "Sulat | ______ | ______ | ______",
        "Aral | ______ | ______ | ______",
        "Luto | ______ | ______ | ______",
        "Linis | ______ | ______ | ______",
        "Basa | ______ | ______ | ______",
        "Laro | ______ | ______ | ______",
      ],
    },
    {
      title: "Identify the Verb Focus",
      kind: "choice",
      instructions: "Identify whether each sentence is actor-focused or object-focused.",
      items: [
        "Kumain ng mangga si Ana.",
        "Kinain ni Ana ang mangga.",
        "Bumili ng pagkain si Marco.",
        "Binili ni Marco ang pagkain.",
        "Sumulat ng liham ang estudyante.",
        "Isinulat ng estudyante ang liham.",
      ],
    },
    {
      title: "Correct the Sentence",
      kind: "rewrite",
      instructions: "Rewrite each sentence using an appropriate verb form and time expression.",
      items: [
        "Kahapon ay kakain ako sa bahay.",
        "Bukas ay nag-aral kami para sa pagsusulit.",
        "Ngayon ay naglinis ako ng silid kahapon.",
        "Mamaya ay bumili siya ng bagong bag.",
        "Noong nakaraang linggo ay magbabasa sila ng aklat.",
      ],
    },
    {
      title: "Write Your Own Sentences",
      kind: "open",
      instructions: "Construct six original Filipino sentences using the following requirements:",
      items: [
        "Two sentences describing completed actions.",
        "Two sentences describing ongoing actions.",
        "Two sentences describing contemplated actions.",
        "A correctly formed verb.",
        "A subject or actor where appropriate.",
        "A suitable time expression.",
        "Additional information that makes the sentence meaningful.",
      ],
      note: "Each sentence must contain:\nExample:\nCompleted: Naglinis ako ng aking silid kahapon.\nOngoing: Nagsusulat ang aking kaklase ng kaniyang ulat ngayon.\nContemplated: Bibisita kami sa aming mga kamag-anak bukas.",
    },
  ],
  rewards: {
    items: [
      {
        section: "vocabulary",
        label: "Vocabulary and grammar review + Root word and affix identification",
        xp: 20,
      },
      {
        section: "conversation",
        label: "Verb aspect identification + Verb form transformation + Sentence correction and construction",
        xp: 40,
      },
      {
        section: "assessment",
        label: "Lesson assessment",
        xp: 20,
      },
    ],
    total: 80,
    badge: {
      name: "Verb Master Badge",
    },
    completionRequirement: "Review the vocabulary and grammar explanations. Complete the verb aspect identification activity. Complete the verb transformation exercises. Identify the root words and affixes in the given examples. Complete the sentence correction and construction activities. Obtain at least 70% on the lesson assessment.",
  },
};
