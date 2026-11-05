import { StructuredLesson } from "../../types/structuredLesson";

// Tagalog Lesson 28 — imported from "Lesson Plan.pdf", pages 557–583.
// The Tagalog and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.

export const tagalogLesson28: StructuredLesson = {
  lessonId: "tagalog_28",
  dialect: "tagalog",
  dialectLabel: "Tagalog",
  lessonNumber: 28,
  title: "Storytelling and Narration",
  level: "Advanced",
  unit: "Unit 3 – Real-Life Communication",
  estimatedDuration: "50–60 minutes",
  prerequisite: "Lessons 1–27",
  intro: [
    "Storytelling is an important part of communication. People use stories to share experiences, describe events, explain what happened, entertain others, and preserve memories and traditions.",
    "In Filipino, effective storytelling involves more than connecting sentences. Learners must organize events in a logical order, select appropriate verb forms, describe people and places, and use expressions that help listeners follow the story.",
    "In this lesson, learners will explore the basic elements of narration and practice telling stories about personal experiences, memorable events, and imagined situations.",
    "What Is Storytelling and Narration?",
    "Storytelling is the act of sharing events or experiences through spoken or written language.",
    "Narration focuses on presenting events in a sequence so that the listener or reader can understand what happened.",
    "People use narration in different situations:",
    "• Sharing childhood memories.",
    "• Telling friends about a recent trip.",
    "• Describing an unforgettable experience.",
    "• Retelling a traditional story.",
    "• Explaining how an event happened.",
    "• Writing short stories or personal accounts.",
    "Consider the following examples.",
    "Simple statement:",
    "\"Nagpunta ako sa palengke.\"",
    "\"I went to the market.\"",
    "Narrative statement:",
    "\"Noong Sabado, maaga akong gumising upang samahan ang aking ina sa palengke. Pagdating namin doon, marami nang taong namimili. Bumili kami ng mga gulay at prutas bago umuwi.\"",
    "\"Last Saturday, I woke up early to accompany my mother to the market. When we arrived, many people were already shopping. We bought vegetables and fruits before going home.\"",
    "The second example provides additional information about the time, people involved, events, and sequence of actions.",
    "Elements of a Narrative",
    "Most stories contain the following elements:",
    "Element – Filipino Term – Description",
    "Characters – Mga tauhan – The people or individuals involved in the story",
    "Setting – Tagpuan – The time and place where the events happen",
    "Beginning – Simula – Introduces the characters and situation",
    "Rising events – Papataas na mga pangyayari – Events that develop the story",
    "Conflict – Suliranin – The problem or challenge encountered",
    "Climax – Kasukdulan – The most intense or important moment",
    "Resolution – Kalutasan – How the problem is addressed",
    "Ending – Wakas – How the story concludes",
    "Not every personal narrative needs a dramatic conflict or climax. These elements are especially useful when constructing fictional stories.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify common Filipino vocabulary and expressions used in storytelling.",
    "Recognize the basic elements of a narrative.",
    "Organize events using appropriate sequencing expressions.",
    "Use appropriate verb forms when narrating past and ongoing events.",
    "Describe characters, settings, actions, and experiences.",
    "Construct coherent paragraphs and short stories in Filipino.",
    "Retell personal experiences and fictional events using appropriate expressions.",
  ],
  expressionGroups: [
    {
      title: "A. Words Related to Storytelling",
      items: [
        {
          term: "Kuwento",
          meaning: "Story",
          usage: "Example: Mahilig akong magbasa ng kuwento.",
        },
        {
          term: "Salaysay",
          meaning: "Narrative/Account",
          usage: "Example: Isinulat niya ang salaysay ng kanyang karanasan.",
        },
        {
          term: "Pangyayari",
          meaning: "Event",
          usage: "Example: Hindi ko malilimutan ang pangyayaring iyon.",
        },
        {
          term: "Karanasan",
          meaning: "Experience",
          usage: "Example: Marami akong natutuhan mula sa karanasang iyon.",
        },
        {
          term: "Alaala",
          meaning: "Memory",
          usage: "Example: Mahalagang alaala iyon para sa akin.",
        },
        {
          term: "Tauhan",
          meaning: "Character",
          usage: "Example: Mabait ang pangunahing tauhan.",
        },
        {
          term: "Tagpuan",
          meaning: "Setting",
          usage: "Example: Sa isang maliit na bayan naganap ang kuwento.",
        },
        {
          term: "Simula",
          meaning: "Beginning",
          usage: "Example: Maganda ang simula ng kuwento.",
        },
        {
          term: "Wakas",
          meaning: "Ending",
          usage: "Example: Hindi ko inaasahan ang wakas nito.",
        },
        {
          term: "Suliranin",
          meaning: "Problem",
          usage: "Example: Hinarap ng tauhan ang isang malaking suliranin.",
        },
        {
          term: "Kasukdulan",
          meaning: "Climax",
          usage: "Example: Naging kapana-panabik ang kasukdulan ng kuwento.",
        },
        {
          term: "Kalutasan",
          meaning: "Resolution",
          usage: "Example: Nakahanap sila ng kalutasan sa problema.",
        },
      ],
    },
    {
      title: "B. Expressions for Sequencing Events",
      intro: [
        "These expressions help arrange events in chronological or logical order.",
      ],
      items: [
        {
          term: "Una",
          meaning: "First",
        },
        {
          term: "Sa simula",
          meaning: "At the beginning",
        },
        {
          term: "Noong una",
          meaning: "At first",
        },
        {
          term: "Pagkatapos",
          meaning: "Afterward",
        },
        {
          term: "Pagkaraan",
          meaning: "After some time",
        },
        {
          term: "Sumunod",
          meaning: "Next",
        },
        {
          term: "Kasunod nito",
          meaning: "Following this",
        },
        {
          term: "Samantala",
          meaning: "Meanwhile",
        },
        {
          term: "Habang",
          meaning: "While",
        },
        {
          term: "Nang maglaon",
          meaning: "Later on",
        },
        {
          term: "Sa huli",
          meaning: "Finally/In the end",
        },
        {
          term: "Sa pagtatapos",
          meaning: "At the conclusion",
        },
      ],
    },
    {
      title: "C. Expressions for Describing Time and Events",
      items: [
        {
          term: "Noong nakaraang araw",
          meaning: "The other day",
        },
        {
          term: "Noong isang linggo",
          meaning: "One week ago",
        },
        {
          term: "Isang umaga",
          meaning: "One morning",
        },
        {
          term: "Kinabukasan",
          meaning: "The following day",
        },
        {
          term: "Kinagabihan",
          meaning: "That evening",
        },
        {
          term: "Makalipas ang ilang oras",
          meaning: "After several hours",
        },
        {
          term: "Hindi nagtagal",
          meaning: "Before long",
        },
        {
          term: "Sa pagkakataong iyon",
          meaning: "At that moment",
        },
        {
          term: "Bigla na lamang",
          meaning: "All of a sudden",
        },
        {
          term: "Sa hindi inaasahang pagkakataon",
          meaning: "Unexpectedly",
        },
      ],
    },
    {
      title: "D. Expressions for Describing Feelings and Reactions",
      items: [
        {
          term: "Natuwa ako",
          meaning: "I was happy",
        },
        {
          term: "Nalungkot ako",
          meaning: "I became sad",
        },
        {
          term: "Kinabahan ako",
          meaning: "I became nervous",
        },
        {
          term: "Nagulat ako",
          meaning: "I was surprised",
        },
        {
          term: "Natakot ako",
          meaning: "I became frightened",
        },
        {
          term: "Namangha ako",
          meaning: "I was amazed",
        },
        {
          term: "Nahiya ako",
          meaning: "I felt embarrassed",
        },
        {
          term: "Nainis ako",
          meaning: "I became annoyed",
        },
        {
          term: "Naramdaman ko",
          meaning: "I felt",
        },
        {
          term: "Hindi ko malilimutan",
          meaning: "I will never forget",
        },
      ],
    },
    {
      title: "E. Useful Descriptive Words",
      items: [
        {
          term: "Tahimik",
          meaning: "Quiet",
        },
        {
          term: "Maingay",
          meaning: "Noisy",
        },
        {
          term: "Masaya",
          meaning: "Happy",
        },
        {
          term: "Malungkot",
          meaning: "Sad",
        },
        {
          term: "Nakakatakot",
          meaning: "Frightening",
        },
        {
          term: "Kapana-panabik",
          meaning: "Exciting",
        },
        {
          term: "Hindi inaasahan",
          meaning: "Unexpected",
        },
        {
          term: "Makulay",
          meaning: "Colorful",
        },
        {
          term: "Malawak",
          meaning: "Wide/Spacious",
        },
        {
          term: "Madilim",
          meaning: "Dark",
        },
        {
          term: "Maliwanag",
          meaning: "Bright",
        },
        {
          term: "Mapayapa",
          meaning: "Peaceful",
        },
        {
          term: "Abala",
          meaning: "Busy",
        },
        {
          term: "Kamangha-mangha",
          meaning: "Amazing",
        },
      ],
    },
    {
      title: "F. Verbs Commonly Used in Narration",
      items: [
        {
          term: "Naglakad",
          meaning: "Walked",
        },
        {
          term: "Tumakbo",
          meaning: "Ran",
        },
        {
          term: "Dumating",
          meaning: "Arrived",
        },
        {
          term: "Umalis",
          meaning: "Left",
        },
        {
          term: "Nakita",
          meaning: "Saw",
        },
        {
          term: "Narinig",
          meaning: "Heard",
        },
        {
          term: "Nagsalita",
          meaning: "Spoke",
        },
        {
          term: "Sumagot",
          meaning: "Answered",
        },
        {
          term: "Nagtanong",
          meaning: "Asked",
        },
        {
          term: "Naghintay",
          meaning: "Waited",
        },
        {
          term: "Naghanda",
          meaning: "Prepared",
        },
        {
          term: "Nagsimula",
          meaning: "Began",
        },
        {
          term: "Nagpatuloy",
          meaning: "Continued",
        },
        {
          term: "Natapos",
          meaning: "Finished",
        },
        {
          term: "Nakahanap",
          meaning: "Found",
        },
        {
          term: "Nakatulong",
          meaning: "Helped",
        },
        {
          term: "Naranasan",
          meaning: "Experienced",
        },
      ],
    },
  ],
  languageNotes: [
    {
      title: "A. Organizing Events in a Narrative",
      body: [
        "A good narrative presents events in a way that readers or listeners can easily follow.",
        "One common approach is chronological order, where events are presented according to when they happened.",
        "Consider this example:",
        "Unorganized statements:",
        "• Umuwi kami sa bahay.",
        "• Pumunta kami sa parke.",
        "• Kumain kami ng tanghalian.",
        "• Naglakad kami sa paligid.",
        "Organized narrative:",
        "\"Maaga kaming gumising noong Linggo. Una, naghanda kami ng pagkain para sa aming pamamasyal. Pagkatapos, pumunta kami sa parke at naglakad sa paligid. Nang maglaon, kumain kami ng tanghalian bago umuwi.\"",
        "The sequencing expressions make the story easier to understand.",
      ],
    },
    {
      title: "B. Using Verb Forms in Narration",
      body: [
        "When telling a story, learners often describe completed actions, ongoing events, and actions that are about to happen.",
        "Filipino verbs change form depending on their aspect and the focus of the sentence.",
        "For this lesson, learners will review three commonly taught aspects.",
        "• Completed Aspect (Naganap)",
        "Used when describing an action that has already happened.",
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
            left: "Naglakad siya.",
            right: "He/She walked.",
          },
          {
            left: "Dumating sila.",
            right: "They arrived.",
          },
          {
            left: "Nagsimula ang programa.",
            right: "The program started.",
          },
        ],
      },
    },
    {
      title: "B. Using Verb Forms in Narration",
      body: [
        "• Ongoing Aspect (Nagaganap)",
        "Used when describing an action that is happening or was in progress, depending on the sentence context.",
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
            left: "Naglalakad siya.",
            right: "He/She is walking.",
          },
          {
            left: "Dumarating sila.",
            right: "They are arriving.",
          },
          {
            left: "Nagsisimula ang programa.",
            right: "The program is starting.",
          },
        ],
      },
    },
    {
      title: "B. Using Verb Forms in Narration",
      body: [
        "• Contemplated Aspect (Magaganap)",
        "Used when describing an action that has not yet started or is intended to happen.",
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
            left: "Maglalakad siya.",
            right: "He/She will walk.",
          },
          {
            left: "Darating sila.",
            right: "They will arrive.",
          },
          {
            left: "Magsisimula ang programa.",
            right: "The program will start.",
          },
        ],
      },
    },
    {
      title: "B. Using Verb Forms in Narration",
      body: [
        "Important Reminder:",
        "Filipino verb forms are not simply equivalent to English past, present, and future tenses. They express aspect and interact with focus, affixes, and sentence context. These examples are introductory patterns rather than complete verb conjugation rules.",
      ],
    },
    {
      title: "C. Describing Characters and Settings",
      body: [
        "A story becomes more interesting when the narrator describes the people, places, and situations involved.",
        "Compare the following:",
        "Basic description:",
        "\"May nakita akong bahay.\"",
        "\"I saw a house.\"",
        "Detailed description:",
        "\"May nakita akong lumang bahay sa dulo ng isang makitid na daan. Tahimik ang paligid, at napapalibutan ito ng matataas na puno.\"",
        "\"I saw an old house at the end of a narrow road. The surroundings were quiet, and it was surrounded by tall trees.\"",
        "The second description gives readers a clearer picture of the setting.",
        "Useful descriptive patterns:",
        "• \"Ang pangunahing tauhan ay...\"",
        "• \"Matatagpuan ang lugar sa...\"",
        "• \"Napapalibutan ito ng...\"",
        "• \"Kilala ang lugar dahil sa...\"",
        "• \"May kakaibang katangian ang...\"",
        "• \"Sa unang pagkakataon, nakita ko ang...\"",
      ],
    },
    {
      title: "D. Using Dialogue in Stories",
      body: [
        "Dialogue allows characters to communicate directly with one another. It makes a story more engaging and helps readers understand the characters' thoughts and reactions.",
        "Ana: \"Saan ka pupunta?\"",
        "Ben: \"Pupunta ako sa tindahan. May bibilhin lang ako.\"",
        "Ana: \"Maaari ba akong sumama?\"",
        "Ben: \"Oo naman. Tara na!\"",
        "When writing dialogue, remember to:",
        "• Use quotation marks to indicate spoken words.",
        "• Identify the speaker when necessary.",
        "• Keep conversations natural.",
        "• Make sure the dialogue is relevant to the situation.",
        "• Avoid including unnecessary conversations that interrupt the narrative.",
      ],
    },
    {
      title: "E. Creating a Coherent Narrative",
      body: [
        "A coherent story connects its sentences and paragraphs logically.",
        "Consider the following expressions:",
        "Adding information:",
        "• Bukod dito...",
        "• Dagdag pa rito...",
        "• Gayundin...",
        "Showing contrast:",
        "• Gayunpaman...",
        "• Subalit...",
        "• Ngunit...",
        "Showing cause and effect:",
        "• Dahil dito...",
        "• Bunga nito...",
        "• Kaya naman...",
        "Concluding a story:",
        "• Sa huli...",
        "• Mula noon...",
        "• Dahil sa karanasang iyon...",
        "• Hindi ko malilimutan ang araw na iyon.",
      ],
    },
    {
      title: "F. Sample Narrative",
      body: [
        "Title: Isang Hindi Malilimutang Araw",
        "\"Noong nakaraang Sabado, nagkaroon kami ng pagkakataong mamasyal ng aking pamilya. Maaga kaming gumising upang makapaghanda bago umalis.",
        "Una, nagtungo kami sa isang parke na matatagpuan sa labas ng aming bayan. Pagdating namin doon, napansin naming maraming tao ang naglalakad at naglalaro. Tahimik at malinis ang paligid, kaya naging komportable kaming mamasyal.",
        "Habang naglalakad kami, bigla naming napansin ang isang maliit na aso na tila nawawala. Nilapitan namin ito at sinubukang alamin kung sino ang may-ari nito.",
        "Makalipas ang ilang minuto, may isang batang lumapit sa amin. Hinahanap pala niya ang kanyang alagang aso. Nang makita niya ito, labis siyang natuwa at nagpasalamat sa amin.",
        "Sa huli, ipinagpatuloy namin ang aming pamamasyal. Bagama't simple lamang ang nangyari, naging makabuluhan ang araw na iyon dahil nagkaroon kami ng pagkakataong makatulong sa ibang tao.",
        "Hindi ko malilimutan ang karanasang iyon dahil ipinakita nito na kahit ang maliliit na pagtulong ay maaaring magdulot ng malaking kaligayahan sa iba.\"",
        "Narrative Elements:",
      ],
      table: {
        leftHeading: "",
        rightHeading: "",
        rows: [
          {
            left: "Element",
            right: "Example from the Story",
          },
          {
            left: "Characters",
            right: "The narrator, family, and child",
          },
          {
            left: "Setting",
            right: "A park outside their town",
          },
          {
            left: "Beginning",
            right: "The family prepares for a trip",
          },
          {
            left: "Rising Events",
            right: "They arrive at the park and notice a lost dog",
          },
          {
            left: "Conflict",
            right: "The dog appears to be lost",
          },
          {
            left: "Climax",
            right: "The child finds the dog",
          },
          {
            left: "Resolution",
            right: "The dog is reunited with its owner",
          },
          {
            left: "Ending",
            right: "The family continues their trip",
          },
        ],
      },
    },
    {
      title: "Lesson Summary",
      body: [
        "In this lesson, learners explored storytelling and narration as important forms of communication. They learned how to identify narrative elements, organize events, describe characters and settings, use dialogue, and construct coherent stories.",
        "They also practiced sharing personal experiences and creating narratives through written and spoken activities.",
        "Key Takeaway:",
        "A good story does not simply tell readers what happened. It helps them understand the people, places, feelings, and events that make the experience meaningful.",
      ],
    },
  ],
  conversations: [
    {
      title: "Dialogue 1: Sharing a Personal Experience",
      lines: [
        {
          speaker: "Mia",
          text: "May ikukuwento ako sa iyo tungkol sa nangyari noong nakaraang linggo.",
        },
        {
          speaker: "Lara",
          text: "Talaga? Ano ang nangyari?",
        },
        {
          speaker: "Mia",
          text: "Noong Biyernes, sumali ako sa isang paligsahan sa aming paaralan.",
        },
        {
          speaker: "Lara",
          text: "Kumusta naman ang naging karanasan mo?",
        },
        {
          speaker: "Mia",
          text: "Kinabahan ako noong una, pero naging masaya rin ako dahil nakilala ko ang maraming bagong tao.",
        },
        {
          speaker: "Lara",
          text: "Nanalo ka ba?",
        },
        {
          speaker: "Mia",
          text: "Hindi man ako nanalo, marami naman akong natutuhan mula sa karanasang iyon.",
        },
      ],
    },
    {
      title: "Dialogue 2: Retelling an Unexpected Event",
      lines: [
        {
          speaker: "Carlo",
          text: "Alam mo ba ang nangyari kahapon?",
        },
        {
          speaker: "Jessa",
          text: "Ano iyon?",
        },
        {
          speaker: "Carlo",
          text: "Pauwi na ako nang biglang umulan nang malakas.",
        },
        {
          speaker: "Jessa",
          text: "Ano ang ginawa mo?",
        },
        {
          speaker: "Carlo",
          text: "Sumilong muna ako sa isang tindahan. Habang naghihintay, nakilala ko ang isang matandang lalaki na naghihintay rin ng paghina ng ulan.",
        },
        {
          speaker: "Jessa",
          text: "Ano ang pinag-usapan ninyo?",
        },
        {
          speaker: "Carlo",
          text: "Nagkuwentuhan kami tungkol sa buhay sa aming bayan. Hindi ko namalayang tumigil na pala ang ulan.",
        },
        {
          speaker: "Jessa",
          text: "Mukhang naging kawili-wili ang karanasan mo!",
        },
      ],
    },
    {
      title: "Dialogue 3: Retelling a Traditional Story",
      lines: [
        {
          speaker: "Teacher",
          text: "Sino ang maaaring magbahagi ng isang kuwentong-bayan na alam niya?",
        },
        {
          speaker: "Student",
          text: "Maaari po ba akong magbahagi ng kuwento tungkol kay Juan Tamad?",
        },
        {
          speaker: "Teacher",
          text: "Siyempre. Simulan mo na.",
        },
        {
          speaker: "Student",
          text: "Ang kuwento ay tungkol sa isang lalaking kilala sa pagiging tamad. Sa halip na magsikap upang matapos ang kanyang mga gawain, madalas siyang naghahanap ng pinakamadaling paraan upang maiwasan ang mga ito.",
        },
        {
          speaker: "Teacher",
          text: "Ano ang aral na makukuha natin sa kuwento?",
        },
        {
          speaker: "Student",
          text: "Ipinapakita nito na mahalagang maging masipag at responsable sa ating mga tungkulin.",
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
        prompt: "What is the Filipino word for \"character\" in a story?",
        options: [
          {
            key: "A",
            text: "Tagpuan",
          },
          {
            key: "B",
            text: "Tauhan",
          },
          {
            key: "C",
            text: "Wakas",
          },
          {
            key: "D",
            text: "Salaysay",
          },
        ],
        answerKey: "B",
        title: "Part A: Vocabulary and Concepts",
      },
      {
        id: 2,
        prompt: "What does \"suliranin\" mean?",
        options: [
          {
            key: "A",
            text: "Resolution",
          },
          {
            key: "B",
            text: "Setting",
          },
          {
            key: "C",
            text: "Problem",
          },
          {
            key: "D",
            text: "Beginning",
          },
        ],
        answerKey: "C",
        title: "Part A: Vocabulary and Concepts",
      },
      {
        id: 3,
        prompt: "Which element identifies where and when a story happens?",
        options: [
          {
            key: "A",
            text: "Tagpuan",
          },
          {
            key: "B",
            text: "Tauhan",
          },
          {
            key: "C",
            text: "Wakas",
          },
          {
            key: "D",
            text: "Kasukdulan",
          },
        ],
        answerKey: "A",
        title: "Part A: Vocabulary and Concepts",
      },
      {
        id: 4,
        prompt: "What does \"salaysay\" mean?",
        options: [
          {
            key: "A",
            text: "Conversation",
          },
          {
            key: "B",
            text: "Narrative or account",
          },
          {
            key: "C",
            text: "Question",
          },
          {
            key: "D",
            text: "Description",
          },
        ],
        answerKey: "B",
        title: "Part A: Vocabulary and Concepts",
      },
      {
        id: 5,
        prompt: "Which expression means \"all of a sudden\"?",
        options: [
          {
            key: "A",
            text: "Sa huli",
          },
          {
            key: "B",
            text: "Bigla na lamang",
          },
          {
            key: "C",
            text: "Pagkatapos",
          },
          {
            key: "D",
            text: "Noong una",
          },
        ],
        answerKey: "B",
        title: "Part A: Vocabulary and Concepts",
      },
      {
        id: 6,
        prompt: "Which expression is commonly used to introduce the first event in a sequence?",
        options: [
          {
            key: "A",
            text: "Sa huli",
          },
          {
            key: "B",
            text: "Una",
          },
          {
            key: "C",
            text: "Gayunpaman",
          },
          {
            key: "D",
            text: "Dahil dito",
          },
        ],
        answerKey: "B",
        title: "Part B: Story Organization and Grammar",
      },
      {
        id: 7,
        prompt: "Which verb expresses a completed action?",
        options: [
          {
            key: "A",
            text: "Kakain",
          },
          {
            key: "B",
            text: "Kumakain",
          },
          {
            key: "C",
            text: "Kumain",
          },
          {
            key: "D",
            text: "Kakakain",
          },
        ],
        answerKey: "C",
        title: "Part B: Story Organization and Grammar",
      },
      {
        id: 8,
        prompt: "Which sentence describes an ongoing action?",
        options: [
          {
            key: "A",
            text: "Naglakad siya kahapon.",
          },
          {
            key: "B",
            text: "Maglalakad siya bukas.",
          },
          {
            key: "C",
            text: "Naglalakad siya ngayon.",
          },
          {
            key: "D",
            text: "Naglakad sila noong Linggo.",
          },
        ],
        answerKey: "C",
        title: "Part B: Story Organization and Grammar",
      },
      {
        id: 9,
        prompt: "Which expression is appropriate for concluding a narrative?",
        options: [
          {
            key: "A",
            text: "Sa huli",
          },
          {
            key: "B",
            text: "Samantala",
          },
          {
            key: "C",
            text: "Habang",
          },
          {
            key: "D",
            text: "Noong una",
          },
        ],
        answerKey: "A",
        title: "Part B: Story Organization and Grammar",
      },
      {
        id: 10,
        prompt: "Why are sequencing expressions important in storytelling?",
        options: [
          {
            key: "A",
            text: "They make the story longer without adding meaning.",
          },
          {
            key: "B",
            text: "They help organize events and make the narrative easier to follow.",
          },
          {
            key: "C",
            text: "They replace all verbs in a story.",
          },
          {
            key: "D",
            text: "They identify the characters.",
          },
        ],
        answerKey: "B",
        title: "Part B: Story Organization and Grammar",
      },
      {
        id: 11,
        prompt: "Which sentence provides the most descriptive setting?",
        options: [
          {
            key: "A",
            text: "May bahay doon.",
          },
          {
            key: "B",
            text: "Nakakita ako ng lugar.",
          },
          {
            key: "C",
            text: "May isang lumang bahay sa tabi ng tahimik at makitid na daan.",
          },
          {
            key: "D",
            text: "Pumunta ako roon.",
          },
        ],
        answerKey: "C",
        title: "Part C: Application",
      },
      {
        id: 12,
        prompt: "Which sentence shows an appropriate use of dialogue?",
        options: [
          {
            key: "A",
            text: "\"Saan ka pupunta?\" tanong ni Ana.",
          },
          {
            key: "B",
            text: "Ana saan pupunta tanong.",
          },
          {
            key: "C",
            text: "Saan ka pupunta Ana.",
          },
          {
            key: "D",
            text: "Tanong pupunta Ana saan.",
          },
        ],
        answerKey: "A",
        title: "Part C: Application",
      },
      {
        id: 13,
        prompt: "Which sentence correctly uses a sequencing expression?",
        options: [
          {
            key: "A",
            text: "Sa huli, una kaming nagising.",
          },
          {
            key: "B",
            text: "Una, naghanda kami bago umalis.",
          },
          {
            key: "C",
            text: "Pagkatapos, bago pa nangyari ang lahat.",
          },
          {
            key: "D",
            text: "Samantala, kaya naman, una.",
          },
        ],
        answerKey: "B",
        title: "Part C: Application",
      },
      {
        id: 14,
        prompt: "Which of the following is the best way to develop a personal narrative?",
        options: [
          {
            key: "A",
            text: "List unrelated words.",
          },
          {
            key: "B",
            text: "Describe events without explaining their order.",
          },
          {
            key: "C",
            text: "Organize the events, describe the experience, and provide a clear conclusion.",
          },
          {
            key: "D",
            text: "Repeat the same sentence several times.",
          },
        ],
        answerKey: "C",
        title: "Part C: Application",
      },
      {
        id: 15,
        prompt: "What is the main purpose of storytelling and narration?",
        options: [
          {
            key: "A",
            text: "To share and organize events or experiences through spoken or written language.",
          },
          {
            key: "B",
            text: "To memorize vocabulary without using it.",
          },
          {
            key: "C",
            text: "To translate every sentence word for word.",
          },
          {
            key: "D",
            text: "To avoid describing people and places.",
          },
        ],
        answerKey: "A",
        title: "Part C: Application",
      },
    ],
  },
  extraActivities: [
    {
      title: "Vocabulary Matching",
      kind: "match",
      instructions: "Match each Filipino word with its correct English meaning.",
      items: [
        "Salaysay",
        "Tauhan",
        "Alaala",
        "Suliranin",
        "Kalutasan",
      ],
      choices: [
        "Character",
        "Memory",
        "Narrative",
        "Resolution",
        "Problem",
      ],
    },
    {
      title: "Sequencing Events",
      kind: "arrange",
      instructions: "Arrange the following events in chronological order.\nA. Umuwi kami matapos ang pamamasyal.\nB. Naghanda kami ng pagkain bago umalis.\nC. Nagpunta kami sa parke.\nD. Naglakad kami sa paligid at kumuha ng mga larawan.\nE. Kumain kami ng tanghalian.",
      items: [],
    },
    {
      title: "Complete the Narrative",
      kind: "fill",
      instructions: "Fill in the blanks using the correct expressions from the word bank.\nWord Bank:",
      items: [
        "Sa huli",
        "Pagkatapos",
        "Una",
        "Nang maglaon",
        "Samantala",
      ],
      note: "\"Isang Linggo, nagpasya kaming mamasyal ng aking mga kaibigan.\n(1) ________, nagkita-kita kami sa harap ng aming paaralan.\n(2) ________, sumakay kami ng sasakyan papunta sa parke.\n(3) ________, naglakad kami sa paligid habang ang iba naming kaibigan ay naghahanda ng pagkain.\n(4) ________, nagsama-sama kami upang kumain at magkuwentuhan.\n(5) ________, umuwi kaming masaya dahil naging matagumpay ang aming pamamasyal.\"",
    },
    {
      title: "Identify the Verb Aspect",
      kind: "choice",
      instructions: "Identify whether the underlined verb expresses completed, ongoing, or contemplated aspect.",
      items: [
        "Kahapon ay naglakad kami sa parke.",
        "Kumakain ang bata habang nanonood ng telebisyon.",
        "Darating ang aking kaibigan bukas.",
        "Nagsulat siya ng isang kuwento.",
        "Maghahanda kami para sa programa.",
      ],
    },
    {
      title: "Improve the Narrative",
      kind: "rewrite",
      instructions: "Rewrite the following basic narrative by adding sequencing expressions and descriptive details.\n\"Nagpunta kami sa dagat. Lumangoy kami. Kumain kami. Umuwi kami.\"\nYour improved narrative should:",
      items: [
        "Include at least three sequencing expressions.",
        "Describe the location.",
        "Include at least one feeling or reaction.",
        "Have at least five complete sentences.",
      ],
    },
    {
      title: "Storytelling Challenge",
      kind: "open",
      instructions: "Choose one topic and create a short narrative containing 8–10 sentences.\nTopic A: A Memorable School Experience\nTell a story about an unforgettable experience at school.\nTopic B: An Unexpected Encounter\nDescribe a time when you met someone unexpectedly.\nTopic C: A Family Trip\nNarrate an experience during a trip with your family.\nTopic D: A Difficult Situation\nDescribe a problem you encountered and how it was resolved.\nYour narrative must include:",
      items: [
        "A clear beginning.",
        "At least two characters or individuals involved.",
        "A description of the setting.",
        "At least four sequencing expressions.",
        "A clear ending.",
      ],
    },
    {
      title: "Oral Storytelling",
      kind: "other",
      instructions: "Record yourself narrating a short story in Filipino.\nChoose one of the following:",
      items: [
        "A childhood memory.",
        "A memorable celebration.",
        "An experience that taught you an important lesson.",
        "An interesting event you witnessed.",
        "Narrate for approximately 1–2 minutes.",
        "Use appropriate verb forms.",
        "Include sequencing expressions.",
        "Speak clearly and naturally.",
        "Maintain a logical sequence of events.",
      ],
      note: "Speaking Requirements:",
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
        label: "Lesson Proper + Guided Conversations + Practice Activities",
        xp: 40,
      },
      {
        section: "assessment",
        label: "Lesson Assessment",
        xp: 30,
      },
    ],
    total: 80,
    badge: {
      name: "Master Storyteller Badge",
    },
    completionRequirement: "Review the storytelling vocabulary. Understand the basic elements of a narrative. Complete the sequencing and grammar exercises. Finish the storytelling practice activities. Obtain at least 70% in the lesson assessment.",
  },
};
