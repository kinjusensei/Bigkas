import { StructuredLesson } from "../../types/structuredLesson";

// Tagalog Lesson 19 — imported from "Lesson Plan.pdf", pages 339–362.
// The Tagalog and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.

export const tagalogLesson19: StructuredLesson = {
  lessonId: "tagalog_19",
  dialect: "tagalog",
  dialectLabel: "Tagalog",
  lessonNumber: 19,
  title: "Talking About Daily Activities",
  level: "Intermediate",
  unit: "Unit 3 – Practical Conversations",
  estimatedDuration: "40–50 minutes",
  prerequisite: "Lessons 1–18",
  intro: [
    "This lesson teaches learners how to describe their daily routines, habits, responsibilities, and activities in Filipino. Learners will practice talking about what they do in the morning, afternoon, and evening, as well as explaining how frequently they perform certain activities.",
    "They will also learn how to describe routines in chronological order, compare daily schedules, and ask other people about their everyday activities.",
    "Everyone follows a daily routine. Some people wake up early, prepare breakfast, attend school, go to work, or complete household responsibilities.",
    "Being able to describe these activities helps learners communicate about their everyday lives.",
    "For example:",
    "Tuwing umaga, maaga akong gumigising. Pagkatapos, naghahanda ako ng almusal at naliligo. Pumapasok ako sa paaralan bago mag-alas otso. Sa hapon, umuuwi ako at ginagawa ang aking mga takdang-aralin.",
    "English Translation:",
    "Every morning, I wake up early. Afterward, I prepare breakfast and take a bath. I go to school before eight o'clock. In the afternoon, I go home and do my homework.",
    "In this lesson, you will learn how to describe your own routine and understand how other people spend their day.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify common Filipino vocabulary related to daily activities and routines.",
    "Describe personal routines using appropriate verbs and time expressions.",
    "Explain the order in which daily activities happen.",
    "Express how frequently they perform certain activities.",
    "Ask and answer questions about other people's schedules and habits.",
    "Construct sentences and short paragraphs describing everyday activities.",
  ],
  expressionGroups: [
    {
      title: "A. Common Daily Activities",
      items: [
        {
          term: "gumising",
          meaning: "to wake up",
          pronunciation: "goo-mee-sing",
        },
        {
          term: "bumangon",
          meaning: "to get out of bed",
          pronunciation: "boo-mah-ngon",
        },
        {
          term: "matulog",
          meaning: "to sleep",
        },
        {
          term: "maligo",
          meaning: "to take a bath",
        },
        {
          term: "magsipilyo",
          meaning: "to brush one's teeth",
          pronunciation: "mahg-see-peel-yoh",
        },
        {
          term: "maghilamos",
          meaning: "to wash one's face",
          pronunciation: "mahg-hee-lah-mos",
        },
        {
          term: "magbihis",
          meaning: "to get dressed",
          pronunciation: "mahg-bee-hees",
        },
        {
          term: "maghanda",
          meaning: "to prepare",
          pronunciation: "mahg-hahn-dah",
        },
        {
          term: "magluto",
          meaning: "to cook",
        },
        {
          term: "kumain",
          meaning: "to eat",
        },
        {
          term: "uminom",
          meaning: "to drink",
        },
        {
          term: "maglinis",
          meaning: "to clean",
        },
        {
          term: "maghugas",
          meaning: "to wash",
        },
        {
          term: "mag-aral",
          meaning: "to study",
        },
        {
          term: "pumasok",
          meaning: "to attend or go to school/work",
        },
        {
          term: "magtrabaho",
          meaning: "to work",
        },
        {
          term: "magbasa",
          meaning: "to read",
        },
        {
          term: "magsulat",
          meaning: "to write",
        },
        {
          term: "magpahinga",
          meaning: "to rest",
          pronunciation: "mahg-pah-hee-ngah",
        },
        {
          term: "mag-ehersisyo",
          meaning: "to exercise",
          pronunciation: "mahg-eh-her-see-syoh",
        },
        {
          term: "maglakad",
          meaning: "to walk",
        },
        {
          term: "tumakbo",
          meaning: "to run",
        },
        {
          term: "mamili",
          meaning: "to shop",
        },
        {
          term: "mamasyal",
          meaning: "to go sightseeing or take a leisure trip",
        },
        {
          term: "manood",
          meaning: "to watch",
        },
        {
          term: "makinig",
          meaning: "to listen",
        },
        {
          term: "makipag-usap",
          meaning: "to talk or converse",
        },
        {
          term: "maglaro",
          meaning: "to play",
        },
        {
          term: "gumawa ng takdang-aralin",
          meaning: "to do homework",
        },
        {
          term: "maghanda ng gamit",
          meaning: "to prepare one's things",
        },
        {
          term: "umuwi",
          meaning: "to go home",
        },
      ],
    },
    {
      title: "B. Time Expressions",
      items: [
        {
          term: "tuwing umaga",
          meaning: "every morning",
        },
        {
          term: "tuwing tanghali",
          meaning: "every noon",
        },
        {
          term: "tuwing hapon",
          meaning: "every afternoon",
        },
        {
          term: "tuwing gabi",
          meaning: "every evening",
        },
        {
          term: "araw-araw",
          meaning: "every day",
          pronunciation: "ah-rahw-ah-rahw",
        },
        {
          term: "tuwing Lunes",
          meaning: "every Monday",
        },
        {
          term: "tuwing katapusan ng linggo",
          meaning: "every weekend",
        },
        {
          term: "kanina",
          meaning: "earlier",
        },
        {
          term: "mamaya",
          meaning: "later",
        },
        {
          term: "ngayon",
          meaning: "now/today",
        },
        {
          term: "bukas",
          meaning: "tomorrow",
        },
        {
          term: "kahapon",
          meaning: "yesterday",
        },
        {
          term: "madaling-araw",
          meaning: "dawn or very early morning",
        },
        {
          term: "umaga",
          meaning: "morning",
        },
        {
          term: "tanghali",
          meaning: "noon",
        },
        {
          term: "hapon",
          meaning: "afternoon",
        },
        {
          term: "gabi",
          meaning: "evening/night",
        },
        {
          term: "hatinggabi",
          meaning: "midnight",
        },
        {
          term: "bago mag-alas otso",
          meaning: "before eight o'clock",
        },
        {
          term: "pagkatapos ng klase",
          meaning: "after class",
        },
        {
          term: "bago matulog",
          meaning: "before sleeping",
        },
      ],
    },
    {
      title: "C. Frequency Expressions",
      items: [
        {
          term: "palagi",
          meaning: "always",
          pronunciation: "pah-lah-gee",
        },
        {
          term: "madalas",
          meaning: "often",
          pronunciation: "mah-dah-lahs",
        },
        {
          term: "karaniwan",
          meaning: "usually",
        },
        {
          term: "minsan",
          meaning: "sometimes",
        },
        {
          term: "paminsan-minsan",
          meaning: "occasionally",
          pronunciation: "pah-meen-sahn-meen-sahn",
        },
        {
          term: "bihira",
          meaning: "rarely",
          pronunciation: "bee-hee-rah",
        },
        {
          term: "halos araw-araw",
          meaning: "almost every day",
        },
        {
          term: "araw-araw",
          meaning: "every day",
          pronunciation: "ah-rahw-ah-rahw",
        },
        {
          term: "linggu-linggo",
          meaning: "every week",
        },
        {
          term: "buwan-buwan",
          meaning: "every month",
        },
        {
          term: "hindi kailanman",
          meaning: "never",
        },
      ],
    },
    {
      title: "D. Household and School Responsibilities",
      items: [
        {
          term: "gawaing-bahay",
          meaning: "household chores",
          pronunciation: "gah-wah-eeng-bah-hahy",
        },
        {
          term: "paghuhugas ng pinggan",
          meaning: "washing the dishes",
        },
        {
          term: "pagwawalis",
          meaning: "sweeping",
        },
        {
          term: "pagpupunas",
          meaning: "wiping",
        },
        {
          term: "paglalaba",
          meaning: "doing the laundry",
        },
        {
          term: "pagtitiklop ng damit",
          meaning: "folding clothes",
        },
        {
          term: "pagtatapon ng basura",
          meaning: "throwing away the trash",
        },
        {
          term: "paglilinis ng kuwarto",
          meaning: "cleaning the room",
        },
        {
          term: "pag-aayos ng higaan",
          meaning: "making the bed",
        },
        {
          term: "takdang-aralin",
          meaning: "homework",
        },
        {
          term: "proyekto",
          meaning: "project",
        },
        {
          term: "pagsusulit",
          meaning: "examination",
        },
        {
          term: "pagbabasa",
          meaning: "reading",
        },
        {
          term: "pagsasanay",
          meaning: "practice",
        },
        {
          term: "pahinga",
          meaning: "rest",
        },
      ],
    },
    {
      title: "E. Useful Expressions",
      items: [
        {
          term: "Ano ang ginagawa mo araw-araw?",
          meaning: "What do you do every day?",
        },
        {
          term: "Anong oras ka gumigising?",
          meaning: "What time do you wake up?",
        },
        {
          term: "Ano ang karaniwan mong ginagawa sa umaga?",
          meaning: "What do you usually do in the morning?",
        },
        {
          term: "Gaano kadalas kang mag-ehersisyo?",
          meaning: "How often do you exercise?",
        },
        {
          term: "Tuwing umaga akong nag-aaral.",
          meaning: "I study every morning.",
        },
        {
          term: "Karaniwan akong natutulog nang maaga.",
          meaning: "I usually sleep early.",
        },
        {
          term: "Wala akong masyadong ginagawa ngayon.",
          meaning: "I am not doing much right now.",
        },
        {
          term: "Marami akong ginagawa ngayon.",
          meaning: "I have a lot to do right now.",
        },
        {
          term: "Pagkatapos nito, magpapahinga ako.",
          meaning: "After this, I will rest.",
        },
        {
          term: "Iba-iba ang aking iskedyul.",
          meaning: "My schedule varies.",
        },
      ],
    },
  ],
  pronunciationTip: "These are simplified pronunciation guides. They should be supplemented with audio recordings reviewed by Filipino language speakers.",
  languageNotes: [
    {
      title: "A. Describing Morning Activities",
      body: [
        "Morning routines usually include waking up, preparing for the day, eating breakfast, and getting ready for school or work.",
      ],
      examples: [
        {
          text: "Maaga akong gumigising tuwing umaga.",
          meaning: "I wake up early every morning.",
        },
        {
          text: "Nagsisipilyo ako pagkatapos kumain.",
          meaning: "I brush my teeth after eating.",
        },
        {
          text: "Naliligo ako bago pumasok sa paaralan.",
          meaning: "I take a bath before going to school.",
        },
        {
          text: "Naghahanda ako ng almusal para sa aking pamilya.",
          meaning: "I prepare breakfast for my family.",
        },
      ],
    },
    {
      title: "B. Describing Afternoon Activities",
      body: [
        "Afternoon activities may include attending classes, working, eating lunch, completing assignments, or resting.",
      ],
      examples: [
        {
          text: "Kumakain ako ng tanghalian kasama ang aking mga kaklase.",
          meaning: "I eat lunch with my classmates.",
        },
        {
          text: "Gumagawa ako ng takdang-aralin pagkatapos ng klase.",
          meaning: "I do my homework after class.",
        },
        {
          text: "Nagpapahinga ako kapag pagod na ako.",
          meaning: "I rest when I am already tired.",
        },
        {
          text: "Tumutulong ako sa mga gawaing-bahay sa hapon.",
          meaning: "I help with household chores in the afternoon.",
        },
      ],
    },
    {
      title: "C. Describing Evening Activities",
      body: [
        "Evening routines may include eating dinner, spending time with family, studying, or preparing for the next day.",
      ],
      examples: [
        {
          text: "Naghahapunan kami nang sama-sama.",
          meaning: "We eat dinner together.",
        },
        {
          text: "Nag-aaral ako sa gabi kapag may pagsusulit.",
          meaning: "I study at night when there is an examination.",
        },
        {
          text: "Inihahanda ko ang aking mga gamit bago matulog.",
          meaning: "I prepare my things before sleeping.",
        },
        {
          text: "Natutulog ako nang alas diyes ng gabi.",
          meaning: "I sleep at ten o'clock in the evening.",
        },
      ],
    },
    {
      title: "D. Expressing How Frequently You Do Something",
      body: [
        "Frequency expressions help explain how often an activity happens.",
      ],
      table: {
        leftHeading: "",
        rightHeading: "",
        rows: [
          {
            left: "Frequency",
            right: "Filipino Sentence · English Translation",
          },
          {
            left: "Always",
            right: "Palagi akong nag-aalmusal. · I always eat breakfast.",
          },
          {
            left: "Often",
            right: "Madalas akong magbasa. · I often read.",
          },
          {
            left: "Usually",
            right: "Karaniwan akong naglalakad papunta sa tindahan. · I usually walk to the store.",
          },
          {
            left: "Sometimes",
            right: "Minsan akong nagluluto. · I sometimes cook.",
          },
          {
            left: "Occasionally",
            right: "Paminsan-minsan akong nanonood ng pelikula. · I occasionally watch movies.",
          },
          {
            left: "Rarely",
            right: "Bihira akong matulog nang hapon. · I rarely sleep in the afternoon.",
          },
          {
            left: "Never",
            right: "Hindi ako umiinom ng kape sa gabi. · I never drink coffee at night.",
          },
        ],
      },
    },
    {
      title: "D. Expressing How Frequently You Do Something",
      body: [
        "Note: Frequency words can appear in different positions depending on the sentence. The examples above are useful patterns, not the only acceptable sentence structures.",
      ],
    },
    {
      title: "E. Explaining the Order of Activities",
      body: [
        "You can use time and sequence expressions to explain what you do first, next, and last.",
        "Useful expressions:",
      ],
      examples: [
        {
          text: "Una",
          meaning: "First",
        },
        {
          text: "Pagkatapos",
          meaning: "Afterward",
        },
        {
          text: "Sunod",
          meaning: "Next",
        },
        {
          text: "Pagkaraan nito",
          meaning: "After this",
        },
        {
          text: "Sa huli",
          meaning: "Finally",
        },
      ],
    },
    {
      title: "E. Explaining the Order of Activities",
      body: [
        "Una, gumigising ako nang alas sais ng umaga. Pagkatapos, nagsisipilyo ako at naliligo. Sunod, kumakain ako ng almusal. Sa huli, naghahanda ako para pumasok sa paaralan.",
        "English Translation:",
        "First, I wake up at six in the morning. Afterward, I brush my teeth and take a bath. Next, I eat breakfast. Finally, I get ready to go to school.",
      ],
    },
    {
      title: "F. Talking About Habits and Routines",
      body: [
        "A habit is an activity that a person regularly performs.",
      ],
      examples: [
        {
          text: "Mahilig akong magbasa bago matulog.",
          meaning: "I like reading before sleeping.",
        },
        {
          text: "Nakaugalian kong mag-ehersisyo tuwing umaga.",
          meaning: "I have made it a habit to exercise every morning.",
        },
        {
          text: "Hindi ako sanay gumising nang hapon.",
          meaning: "I am not used to waking up in the afternoon.",
        },
        {
          text: "Tuwing Linggo, naglilinis kami ng bahay.",
          meaning: "Every Sunday, we clean the house.",
        },
      ],
    },
    {
      title: "G. Talking About Changes in Your Routine",
      body: [
        "Sometimes, daily schedules change because of school, work, special events, or personal responsibilities.",
      ],
      examples: [
        {
          text: "Karaniwan akong gumigising nang alas sais, pero ngayong Linggo ay mas matagal akong natulog.",
          meaning: "I usually wake up at six, but this Sunday I slept longer.",
        },
        {
          text: "Dati akong naglalakad papunta sa paaralan, ngunit ngayon ay sumasakay na ako ng jeep.",
          meaning: "I used to walk to school, but now I ride a jeepney.",
        },
        {
          text: "Ngayong linggo, mas marami akong gawain dahil malapit na ang pagsusumite ng proyekto.",
          meaning: "This week, I have more tasks because the project submission is approaching.",
        },
      ],
    },
    {
      title: "H. Important Grammar: Habitual and Ongoing Actions",
      body: [
        "Filipino verbs change form depending on the aspect of the action. This lesson introduces two useful patterns.",
        "• Habitual or repeated actions",
      ],
      examples: [
        {
          text: "Gumigising ako nang maaga araw-araw.",
          meaning: "I wake up early every day.",
        },
        {
          text: "Nag-aaral siya tuwing gabi.",
          meaning: "He/She studies every evening.",
        },
        {
          text: "Naglilinis kami ng bahay tuwing Sabado.",
          meaning: "We clean the house every Saturday.",
        },
      ],
    },
    {
      title: "H. Important Grammar: Habitual and Ongoing Actions",
      body: [
        "• Ongoing actions",
      ],
      examples: [
        {
          text: "Gumigising ako ngayon.",
          meaning: "I am waking up now.",
        },
        {
          text: "Nag-aaral siya ngayon.",
          meaning: "He/She is studying now.",
        },
        {
          text: "Naglilinis kami ng bahay ngayon.",
          meaning: "We are cleaning the house now.",
        },
      ],
      remember: "Context matters. Filipino verb forms can express different aspects, and the same form may have different interpretations depending on the sentence. The examples here are introductory patterns rather than a complete explanation of Filipino verb grammar.",
    },
    {
      title: "I. Asking Other People About Their Routines",
      body: [
        "Useful questions:",
      ],
      examples: [
        {
          text: "Anong oras ka gumigising?",
          meaning: "What time do you wake up?",
        },
        {
          text: "Ano ang ginagawa mo pagkatapos ng klase?",
          meaning: "What do you do after class?",
        },
        {
          text: "Gaano kadalas kang mag-ehersisyo?",
          meaning: "How often do you exercise?",
        },
        {
          text: "Ano ang ginagawa mo tuwing katapusan ng linggo?",
          meaning: "What do you do every weekend?",
        },
        {
          text: "Anong oras ka natutulog?",
          meaning: "What time do you sleep?",
        },
      ],
    },
    {
      title: "I. Asking Other People About Their Routines",
      body: [
        "Possible responses:",
        "• Gumigising ako nang alas singko ng umaga.",
        "• Nag-aaral ako pagkatapos ng klase.",
        "• Minsan lang akong mag-ehersisyo.",
        "• Namamasyal kami tuwing Linggo.",
        "• Karaniwan akong natutulog nang alas diyes.",
      ],
    },
    {
      title: "Lesson Summary",
      body: [
        "This lesson introduced vocabulary and expressions for discussing daily activities and routines.",
      ],
      table: {
        leftHeading: "Filipino Expression",
        rightHeading: "English Meaning",
        rows: [
          {
            left: "Gumigising ako nang maaga.",
            right: "I wake up early.",
          },
          {
            left: "Tuwing umaga",
            right: "Every morning",
          },
          {
            left: "Araw-araw",
            right: "Every day",
          },
          {
            left: "Madalas akong mag-aral.",
            right: "I often study.",
          },
          {
            left: "Paminsan-minsan",
            right: "Occasionally",
          },
          {
            left: "Pagkatapos ng klase",
            right: "After class",
          },
          {
            left: "Bago matulog",
            right: "Before sleeping",
          },
          {
            left: "Nagpapahinga ako.",
            right: "I am resting.",
          },
          {
            left: "Tumutulong ako sa gawaing-bahay.",
            right: "I help with household chores.",
          },
          {
            left: "Anong oras ka gumigising?",
            right: "What time do you wake up?",
          },
        ],
      },
      remember: "When describing your daily routine, use time expressions to explain when activities happen and frequency expressions to explain how often you do them. Arrange your ideas in a clear order so that other people can easily understand your schedule.",
    },
  ],
  conversations: [
    {
      title: "Conversation 1: Talking About Morning Routines",
      lines: [
        {
          speaker: "Ana",
          text: "Anong oras ka gumigising araw-araw?",
          translation: "What time do you wake up every day?",
        },
        {
          speaker: "Mark",
          text: "Karaniwan akong gumigising nang alas sais ng umaga.",
          translation: "I usually wake up at six in the morning.",
        },
        {
          speaker: "Ana",
          text: "Ano ang ginagawa mo pagkatapos gumising?",
          translation: "What do you do after waking up?",
        },
        {
          speaker: "Mark",
          text: "Nagsisipilyo ako, naliligo, at kumakain ng almusal.",
          translation: "I brush my teeth, take a bath, and eat breakfast.",
        },
        {
          speaker: "Ana",
          text: "Anong oras ka pumapasok sa paaralan?",
          translation: "What time do you go to school?",
        },
        {
          speaker: "Mark",
          text: "Umaalis ako ng bahay nang alas siyete.",
          translation: "I leave the house at seven.",
        },
        {
          speaker: "Ana",
          text: "Maaga ka palang gumigising!",
          translation: "So you wake up early!",
        },
        {
          speaker: "Mark",
          text: "Oo, dahil ayaw kong mahuli sa klase.",
          translation: "Yes, because I do not want to be late for class.",
        },
      ],
    },
    {
      title: "Conversation 2: Talking About Daily Responsibilities",
      lines: [
        {
          speaker: "Lia",
          text: "Ano ang ginagawa mo pagkatapos ng klase?",
          translation: "What do you do after class?",
        },
        {
          speaker: "Carlo",
          text: "Umuuwi ako at nagpapahinga muna.",
          translation: "I go home and rest first.",
        },
        {
          speaker: "Lia",
          text: "Tinutulungan mo rin ba ang pamilya mo sa bahay?",
          translation: "Do you also help your family at home?",
        },
        {
          speaker: "Carlo",
          text: "Oo. Minsan, naghuhugas ako ng pinggan at nagwawalis.",
          translation: "Yes. Sometimes, I wash the dishes and sweep the floor.",
        },
        {
          speaker: "Lia",
          text: "Paano mo nagagawa ang mga gawain mo sa paaralan?",
          translation: "How do you manage your schoolwork?",
        },
        {
          speaker: "Carlo",
          text: "Gumagawa ako ng takdang-aralin sa gabi pagkatapos kong matapos ang mga gawaing-bahay.",
          translation: "I do my homework at night after finishing the household chores.",
        },
      ],
    },
    {
      title: "Conversation 3: Comparing Weekend Routines",
      lines: [
        {
          speaker: "Mia",
          text: "Ano ang ginagawa mo tuwing Linggo?",
          translation: "What do you do every Sunday?",
        },
        {
          speaker: "Josh",
          text: "Karaniwan akong natutulog nang mas matagal at tumutulong sa paglilinis ng bahay.",
          translation: "I usually sleep longer and help clean the house.",
        },
        {
          speaker: "Mia",
          text: "Ako naman, madalas kaming namamasyal ng pamilya ko.",
          translation: "As for me, my family and I often go out.",
        },
        {
          speaker: "Josh",
          text: "Gaano kadalas kayong namamasyal?",
          translation: "How often do you go out?",
        },
        {
          speaker: "Mia",
          text: "Halos tuwing katapusan ng linggo, kung wala kaming ibang gawain.",
          translation: "Almost every weekend, if we do not have other activities.",
        },
        {
          speaker: "Josh",
          text: "Masaya iyon! Ako naman, minsan ay naglalaro ako ng basketball kasama ang mga kaibigan ko.",
          translation: "That sounds fun! As for me, sometimes I play basketball with my friends.",
        },
      ],
    },
  ],
  assessment: {
    instructions: "Answer all 15 questions.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What does gumising mean?",
        options: [
          {
            key: "A",
            text: "To sleep",
          },
          {
            key: "B",
            text: "To wake up",
          },
          {
            key: "C",
            text: "To eat",
          },
          {
            key: "D",
            text: "To walk",
          },
        ],
        answerKey: "B",
        title: "Part A: Multiple Choice",
      },
      {
        id: 2,
        prompt: "What is the meaning of araw-araw?",
        options: [
          {
            key: "A",
            text: "Every week",
          },
          {
            key: "B",
            text: "Every month",
          },
          {
            key: "C",
            text: "Every day",
          },
          {
            key: "D",
            text: "Every night",
          },
        ],
        answerKey: "C",
        title: "Part A: Multiple Choice",
      },
      {
        id: 3,
        prompt: "Which expression means \"rarely\"?",
        options: [
          {
            key: "A",
            text: "Palagi",
          },
          {
            key: "B",
            text: "Madalas",
          },
          {
            key: "C",
            text: "Bihira",
          },
          {
            key: "D",
            text: "Araw-araw",
          },
        ],
        answerKey: "C",
        title: "Part A: Multiple Choice",
      },
      {
        id: 4,
        prompt: "What does pagkatapos ng klase mean?",
        options: [
          {
            key: "A",
            text: "Before class",
          },
          {
            key: "B",
            text: "During class",
          },
          {
            key: "C",
            text: "After class",
          },
          {
            key: "D",
            text: "Tomorrow's class",
          },
        ],
        answerKey: "C",
        title: "Part A: Multiple Choice",
      },
      {
        id: 5,
        prompt: "Which word means \"to rest\"?",
        options: [
          {
            key: "A",
            text: "Magpahinga",
          },
          {
            key: "B",
            text: "Maglinis",
          },
          {
            key: "C",
            text: "Magluto",
          },
          {
            key: "D",
            text: "Magbihis",
          },
        ],
        answerKey: "A",
        title: "Part A: Multiple Choice",
      },
    ],
  },
  extraActivities: [
    {
      title: "Match the Vocabulary",
      kind: "match",
      instructions: "Match each Filipino word with its English meaning.",
      items: [
        "Gumising",
        "Magpahinga",
        "Maglinis",
        "Mag-aral",
        "Matulog",
      ],
      choices: [
        "To rest",
        "To wake up",
        "To study",
        "To clean",
        "To sleep",
      ],
    },
    {
      title: "Identify the Frequency Expression",
      kind: "choice",
      instructions: "Choose the correct English meaning.",
      items: [
        "Palagi\nA. Rarely\nB. Always\nC. Sometimes",
        "Madalas\nA. Often\nB. Never\nC. Once",
        "Bihira\nA. Always\nB. Usually\nC. Rarely",
        "Paminsan-minsan\nA. Occasionally\nB. Every day\nC. Never",
        "Araw-araw\nA. Every week\nB. Every day\nC. Every month",
      ],
    },
    {
      title: "Fill in the Blanks",
      kind: "fill",
      instructions: "Choose the appropriate word or expression.",
      items: [
        "______ akong maaga dahil may pasok ako.",
        "______ ng klase, umuuwi ako.",
        "______ akong nag-aalmusal bago pumasok.",
        "Gusto kong ______ pagkatapos magtrabaho.",
        "Nag-aaral ako tuwing ______.",
      ],
      choices: [
        "gumigising",
        "pagkatapos",
        "palagi",
        "magpahinga",
        "gabi",
      ],
    },
    {
      title: "Arrange the Words",
      kind: "arrange",
      instructions: "Arrange the words to form a correct Filipino sentence.",
      items: [
        "ako / umaga / gumigising / tuwing / maaga",
        "pagkatapos / ako / ng / nag-aaral / klase",
        "palagi / ng / ako / almusal / kumakain",
        "bahay / tumutulong / ako / sa / paglilinis / ng",
        "matulog / maaga / karaniwan / ako / nang",
      ],
    },
    {
      title: "Translate into Filipino",
      kind: "translate",
      instructions: "Translate the following sentences.",
      items: [
        "I wake up at six every morning.",
        "I usually study at night.",
        "After class, I go home and rest.",
        "My family and I clean the house every Sunday.",
        "I sometimes exercise with my friends.",
      ],
    },
    {
      title: "Describe Your Daily Routine",
      kind: "open",
      instructions: "Write a short paragraph in Filipino describing your daily routine.\nYour paragraph should include:",
      items: [
        "What time you wake up.",
        "What you do in the morning.",
        "What you do during the afternoon.",
        "What you do in the evening.",
        "What time you usually sleep.",
      ],
      note: "Use at least five vocabulary words and three time or frequency expressions from the lesson.\nSuggested opening:\nTuwing umaga, gumigising ako nang alas...\nLearners should write at least five complete sentences.",
    },
    {
      title: "Lesson Assessment – Part B: Fill in the Blanks",
      kind: "assessment",
      instructions: "Choose the correct expression.",
      items: [
        "______ akong gumigising nang alas sais tuwing umaga.",
        "Nag-aaral ako ______ gabi.",
        "______ ng klase, umuuwi ako.",
        "______ akong naglalaro ng basketball kapag may libreng oras.",
        "Gusto kong ______ pagkatapos ng mahabang araw.",
      ],
      answers: [
        "Palagi / Karaniwan",
        "tuwing",
        "Pagkatapos",
        "Minsan / Paminsan-minsan",
        "magpahinga",
      ],
    },
    {
      title: "Lesson Assessment – Part C: Sentence Construction",
      kind: "assessment",
      items: [
        "Write a Filipino sentence describing what you do every morning.",
        "Write a Filipino sentence using madalas.",
        "Write a Filipino sentence explaining what you do after class.",
        "Write a Filipino sentence using bago matulog.",
        "Write a short paragraph of at least three sentences describing your daily activities.",
      ],
      answers: [
        "Gumigising ako nang alas sais tuwing umaga.",
        "Madalas akong magbasa ng libro.",
        "Pagkatapos ng klase, umuuwi ako at gumagawa ng takdang-aralin.",
        "Nagsisipilyo ako bago matulog.",
        "Answers will vary. Accept responses that describe daily activities using understandable Filipino sentences and appropriate time expressions.",
      ],
    },
  ],
  rewards: {
    items: [
      {
        section: "vocabulary",
        label: "Complete the vocabulary lesson",
        xp: 10,
      },
      {
        section: "conversation",
        label: "Complete the daily routine exercises + Finish the guided conversation activity + Complete the personal routine paragraph",
        xp: 40,
      },
      {
        section: "assessment",
        label: "Pass the lesson assessment",
        xp: 20,
      },
    ],
    total: 70,
    badge: {
      name: "Daily Routine Master Badge",
      description: "Awarded when the learner completes the lesson and successfully describes a personal daily routine using appropriate Filipino vocabulary and time expressions.",
    },
    completionRequirement: "Finish all lesson sections. Complete the required practice activities. Obtain at least 70% in the assessment. Submit a short paragraph describing their daily routine.",
  },
  expectedOutcomes: [
    "Identify common daily activity vocabulary.",
    "Describe morning, afternoon, and evening routines.",
    "Explain how frequently they perform certain activities.",
    "Arrange activities in chronological order.",
    "Ask and answer questions about daily schedules.",
    "Write a short paragraph about their everyday lives.",
    "The learner can describe personal routines and everyday responsibilities using appropriate Filipino verbs, time expressions, and frequency words.",
  ],
};
