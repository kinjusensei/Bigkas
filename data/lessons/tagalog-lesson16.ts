import { StructuredLesson } from "../../types/structuredLesson";

// Tagalog Lesson 16 — imported from "Lesson Plan.pdf", pages 273–290.
// The Tagalog and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.

export const tagalogLesson16: StructuredLesson = {
  lessonId: "tagalog_16",
  dialect: "tagalog",
  dialectLabel: "Tagalog",
  lessonNumber: 16,
  title: "Constructing More Complex Sentences",
  level: "Intermediate",
  unit: "Unit 2 – Grammar and Sentence Construction",
  estimatedDuration: "45–55 minutes",
  prerequisite: "Lessons 1–15",
  intro: [
    "In this lesson, learners will practice combining simple sentences to express more complete and meaningful ideas. They will learn how to use connecting words to show relationships between ideas, such as addition, contrast, reason, result, condition, time, and purpose.",
    "By the end of the lesson, learners should be able to construct longer sentences and communicate more detailed thoughts in everyday situations.",
    "In everyday conversations, people often need to explain more than one idea at a time.",
    "For example, instead of saying:",
    "• May pasok ako. (I have classes.)",
    "• Gigising ako nang maaga. (I will wake up early.)",
    "We can combine the ideas:",
    "May pasok ako kaya gigising ako nang maaga.",
    "(I have classes, so I will wake up early.)",
    "The word kaya connects the two ideas and shows their relationship.",
    "Connecting words, also called pang-ugnay or conjunctions in this lesson, help make sentences more natural, complete, and easier to understand.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify the purpose of common Filipino connecting words.",
    "Combine two or more simple sentences into a more complex sentence.",
    "Use connectors to express reasons, results, conditions, contrasts, and time relationships.",
    "Construct sentences using appropriate connecting words.",
    "Communicate more detailed ideas through written and spoken Filipino.",
  ],
  expressionGroups: [
    {
      title: "A. Common Connecting Words",
      items: [
        {
          term: "at",
          meaning: "and",
          usage: "Function: Adds information",
          pronunciation: "aht",
        },
        {
          term: "pero",
          meaning: "but",
          usage: "Function: Shows contrast",
          pronunciation: "peh-roh",
        },
        {
          term: "ngunit",
          meaning: "however/but",
          usage: "Function: Shows contrast; often more formal",
          pronunciation: "ngoo-neet",
        },
        {
          term: "dahil",
          meaning: "because",
          usage: "Function: Gives a reason",
          pronunciation: "dah-heel",
        },
        {
          term: "kaya",
          meaning: "so/therefore",
          usage: "Function: Shows a result",
          pronunciation: "kah-yah",
        },
        {
          term: "kung",
          meaning: "if/whether",
          usage: "Function: Expresses a condition or uncertainty",
          pronunciation: "koong",
        },
        {
          term: "kapag",
          meaning: "when/whenever",
          usage: "Function: Expresses a time or condition",
          pronunciation: "kah-pahg",
        },
        {
          term: "habang",
          meaning: "while",
          usage: "Function: Shows simultaneous actions",
          pronunciation: "hah-bahng",
        },
        {
          term: "bago",
          meaning: "before",
          usage: "Function: Shows an earlier event",
          pronunciation: "bah-goh",
        },
        {
          term: "pagkatapos",
          meaning: "after",
          usage: "Function: Shows a later event",
          pronunciation: "pahg-kah-tah-pos",
        },
        {
          term: "upang",
          meaning: "in order to",
          usage: "Function: Expresses purpose",
          pronunciation: "oo-pahng",
        },
        {
          term: "para",
          meaning: "for/in order to",
          usage: "Function: Expresses purpose or intended use",
          pronunciation: "pah-rah",
        },
        {
          term: "kahit",
          meaning: "even if/even though",
          usage: "Function: Expresses concession",
          pronunciation: "kah-heet",
        },
        {
          term: "kahit na",
          meaning: "although/even if",
          usage: "Function: Expresses concession",
        },
      ],
    },
    {
      title: "B. Additional Useful Words and Expressions",
      items: [
        {
          term: "una",
          meaning: "first",
        },
        {
          term: "pagkatapos nito",
          meaning: "after this",
        },
        {
          term: "sa huli",
          meaning: "finally/in the end",
        },
        {
          term: "samantala",
          meaning: "meanwhile",
          pronunciation: "sah-mahn-tah-lah",
        },
        {
          term: "bukod dito",
          meaning: "in addition",
        },
        {
          term: "sa kabilang banda",
          meaning: "on the other hand",
        },
        {
          term: "halimbawa",
          meaning: "for example",
        },
        {
          term: "sa ganitong paraan",
          meaning: "in this way",
        },
        {
          term: "dahil dito",
          meaning: "because of this",
        },
        {
          term: "sa halip",
          meaning: "instead",
        },
      ],
    },
  ],
  pronunciationTip: "The following are simplified pronunciation guides for learners. They are not a substitute for audio recorded and reviewed by a Filipino language speaker.",
  languageNotes: [
    {
      title: "A. Combining Ideas Using \"At\" (And)",
      body: [
        "Use at to connect two related ideas or actions.",
        "Pattern:",
        "Sentence 1 + at + Sentence 2",
      ],
      examples: [
        {
          text: "Nag-aral ako at gumawa ako ng takdang-aralin.",
          meaning: "I studied and did my homework.",
        },
        {
          text: "Mahilig siyang kumanta at sumayaw.",
          meaning: "He/She likes singing and dancing.",
        },
        {
          text: "Bumili kami ng tinapay at gatas.",
          meaning: "We bought bread and milk.",
        },
      ],
      remember: "Use at when adding information, not when showing a contrast or reason.",
    },
    {
      title: "B. Showing Contrast Using \"Pero\" and \"Ngunit\"",
      body: [
        "Use pero or ngunit when two ideas contrast with one another.",
        "• Pero is common in everyday conversation.",
        "• Ngunit is often used in more formal writing or speech.",
      ],
      examples: [
        {
          text: "Gusto kong sumama, pero marami akong gagawin.",
          meaning: "I want to come along, but I have many things to do.",
        },
        {
          text: "Maliit ang bahay nila, ngunit malinis at maayos ito.",
          meaning: "Their house is small, but it is clean and organized.",
        },
        {
          text: "Pagod ako, pero kailangan ko pa ring mag-aral.",
          meaning: "I am tired, but I still need to study.",
        },
      ],
    },
    {
      title: "C. Expressing Reasons Using \"Dahil\"",
      body: [
        "Use dahil to explain why something happens.",
        "Pattern:",
        "Result or statement + dahil + reason",
      ],
      examples: [
        {
          text: "Hindi ako pumasok dahil may sakit ako.",
          meaning: "I did not attend because I was sick.",
        },
        {
          text: "Masaya siya dahil dumating ang kaniyang kaibigan.",
          meaning: "He/She is happy because his/her friend arrived.",
        },
        {
          text: "Nagdala ako ng payong dahil umuulan.",
          meaning: "I brought an umbrella because it is raining.",
        },
      ],
    },
    {
      title: "C. Expressing Reasons Using \"Dahil\"",
      body: [
        "You can also begin with the reason:",
      ],
      examples: [
        {
          text: "Dahil umuulan, nagdala ako ng payong.",
          meaning: "Because it is raining, I brought an umbrella.",
        },
      ],
    },
    {
      title: "D. Expressing Results Using \"Kaya\"",
      body: [
        "Use kaya to show the result or consequence of an event.",
        "Pattern:",
        "Reason or situation + kaya + result",
      ],
      examples: [
        {
          text: "Malakas ang ulan kaya hindi kami natuloy.",
          meaning: "The rain is heavy, so we did not proceed.",
        },
        {
          text: "Maaga akong natulog kaya maaga rin akong nagising.",
          meaning: "I slept early, so I also woke up early.",
        },
        {
          text: "Nag-ipon siya ng pera kaya nakabili siya ng bagong bag.",
          meaning: "He/She saved money, so he/she was able to buy a new bag.",
        },
      ],
    },
    {
      title: "D. Expressing Results Using \"Kaya\"",
      body: [
        "Remember the difference:",
        "• Dahil introduces a reason.",
        "• Kaya introduces a result.",
      ],
    },
    {
      title: "E. Expressing Conditions Using \"Kung\" and \"Kapag\"",
      body: [
        "Both words can introduce conditions, but they are not always interchangeable.",
        "Kung is commonly used for an uncertain condition or possibility.",
      ],
      examples: [
        {
          text: "Kung may oras ako, tutulungan kita.",
          meaning: "If I have time, I will help you.",
        },
        {
          text: "Kung uulan bukas, hindi kami aalis.",
          meaning: "If it rains tomorrow, we will not leave.",
        },
      ],
    },
    {
      title: "E. Expressing Conditions Using \"Kung\" and \"Kapag\"",
      body: [
        "Kapag often refers to a situation that happens when a condition or event occurs, including repeated or expected situations.",
      ],
      examples: [
        {
          text: "Kapag umuulan, nagdadala ako ng payong.",
          meaning: "When it rains, I bring an umbrella.",
        },
        {
          text: "Kapag natapos ka na, tawagin mo ako.",
          meaning: "When you are finished, call me.",
        },
        {
          text: "Kapag may tanong ka, magtanong ka lamang.",
          meaning: "Whenever you have a question, just ask.",
        },
      ],
    },
    {
      title: "F. Expressing Simultaneous Actions Using \"Habang\"",
      body: [
        "Use habang when two actions happen at the same time.",
      ],
      examples: [
        {
          text: "Nakikinig ako ng musika habang nag-aaral.",
          meaning: "I listen to music while studying.",
        },
        {
          text: "Nagluluto si Nanay habang naglilinis si Ate.",
          meaning: "Mother is cooking while older sister is cleaning.",
        },
        {
          text: "Nag-uusap sila habang naglalakad.",
          meaning: "They are talking while walking.",
        },
      ],
    },
    {
      title: "G. Expressing Time and Sequence Using \"Bago\" and \"Pagkatapos\"",
      body: [
        "Use bago to indicate that something happens earlier than another event.",
      ],
      examples: [
        {
          text: "Maghugas ka ng kamay bago kumain.",
          meaning: "Wash your hands before eating.",
        },
        {
          text: "Nag-review ako bago ang pagsusulit.",
          meaning: "I reviewed before the examination.",
        },
      ],
    },
    {
      title: "G. Expressing Time and Sequence Using \"Bago\" and \"Pagkatapos\"",
      body: [
        "Use pagkatapos to indicate that something happens later.",
      ],
      examples: [
        {
          text: "Nagpahinga ako pagkatapos magtrabaho.",
          meaning: "I rested after working.",
        },
        {
          text: "Pagkatapos ng klase, pupunta kami sa palengke.",
          meaning: "After class, we will go to the market.",
        },
      ],
    },
    {
      title: "H. Expressing Purpose Using \"Para\" and \"Upang\"",
      body: [
        "Use para or upang to explain the purpose of an action.",
        "• Para is common in everyday conversations.",
        "• Upang is generally more formal.",
      ],
      examples: [
        {
          text: "Nag-aaral ako para matuto.",
          meaning: "I study in order to learn.",
        },
        {
          text: "Nag-ipon siya para makabili ng cellphone.",
          meaning: "He/She saved money to buy a cellphone.",
        },
        {
          text: "Nagsisikap sila upang maabot ang kanilang mga pangarap.",
          meaning: "They work hard in order to achieve their dreams.",
        },
      ],
    },
    {
      title: "I. Expressing Concession Using \"Kahit\" and \"Kahit Na\"",
      body: [
        "Use kahit or kahit na to show that something happens despite a situation or difficulty.",
      ],
      examples: [
        {
          text: "Pumasok siya kahit umuulan.",
          meaning: "He/She attended even though it was raining.",
        },
        {
          text: "Kahit pagod ako, tinapos ko ang aking gawain.",
          meaning: "Even though I am tired, I finished my task.",
        },
        {
          text: "Tutuloy kami kahit na mahirap ang biyahe.",
          meaning: "We will continue even if the journey is difficult.",
        },
      ],
    },
    {
      title: "J. Combining Multiple Ideas",
      body: [
        "A sentence can contain more than one connecting word.",
        "Example 1:",
        "Maaga akong gumising dahil may pagsusulit kami kaya nagkaroon ako ng sapat na oras para mag-review.",
        "I woke up early because we had an examination, so I had enough time to review.",
        "Example 2:",
        "Gusto kong maglaro, pero kailangan ko munang tapusin ang aking proyekto bago ako magpahinga.",
        "I want to play, but I need to finish my project first before resting.",
        "Example 3:",
        "Habang nag-aaral ang aking kapatid, naghahanda naman ako ng pagkain para sa aming pamilya.",
        "While my sibling is studying, I am preparing food for our family.",
      ],
    },
    {
      title: "Lesson Summary",
      body: [
        "In this lesson, learners studied how to connect ideas to create more complete sentences.",
      ],
      table: {
        leftHeading: "Connector",
        rightHeading: "Main Function",
        rows: [
          {
            left: "at",
            right: "Addition",
          },
          {
            left: "pero / ngunit",
            right: "Contrast",
          },
          {
            left: "dahil",
            right: "Reason",
          },
          {
            left: "kaya",
            right: "Result",
          },
          {
            left: "kung",
            right: "Condition or possibility",
          },
          {
            left: "kapag",
            right: "Time or recurring condition",
          },
          {
            left: "habang",
            right: "Simultaneous actions",
          },
          {
            left: "bago",
            right: "Earlier event",
          },
          {
            left: "pagkatapos",
            right: "Later event",
          },
          {
            left: "para / upang",
            right: "Purpose",
          },
          {
            left: "kahit / kahit na",
            right: "Concession",
          },
        ],
      },
      remember: "A good sentence does not simply contain many words. It connects ideas clearly and uses the right connecting words to express their relationship.",
    },
  ],
  conversations: [
    {
      title: "Conversation 1: Preparing for an Examination",
      lines: [
        {
          speaker: "Ana",
          text: "Nag-aral ka ba kagabi?",
          translation: "Did you study last night?",
        },
        {
          speaker: "Mark",
          text: "Oo, nag-aral ako dahil may pagsusulit kami ngayon.",
          translation: "Yes, I studied because we have an examination today.",
        },
        {
          speaker: "Ana",
          text: "Nag-aral ka ba nang matagal?",
          translation: "Did you study for a long time?",
        },
        {
          speaker: "Mark",
          text: "Oo, pero nagpahinga rin ako habang nag-aaral.",
          translation: "Yes, but I also rested while studying.",
        },
        {
          speaker: "Ana",
          text: "Mabuti naman. Sana makakuha ka ng mataas na marka.",
          translation: "That's good. I hope you get a high score.",
        },
        {
          speaker: "Mark",
          text: "Salamat! Mag-aaral pa rin ako nang mabuti para mas maintindihan ko ang mga aralin.",
          translation: "Thank you! I will continue studying so that I can understand the lessons better.",
        },
      ],
    },
    {
      title: "Conversation 2: Making Plans",
      lines: [
        {
          speaker: "Lia",
          text: "Sasama ka ba sa amin bukas?",
          translation: "Will you come with us tomorrow?",
        },
        {
          speaker: "Carlo",
          text: "Gusto ko sana, pero may kailangan akong tapusin.",
          translation: "I would like to, but I have something I need to finish.",
        },
        {
          speaker: "Lia",
          text: "Ano ang gagawin mo?",
          translation: "What are you going to do?",
        },
        {
          speaker: "Carlo",
          text: "Tatapusin ko muna ang proyekto namin bago ako sumama.",
          translation: "I will finish our project first before joining you.",
        },
        {
          speaker: "Lia",
          text: "Sige. Tawagan mo kami kapag tapos ka na.",
          translation: "Okay. Call us when you are finished.",
        },
        {
          speaker: "Carlo",
          text: "Oo. Kung maaga akong matapos, pupunta ako agad.",
          translation: "Yes. If I finish early, I will go immediately.",
        },
      ],
    },
    {
      title: "Conversation 3: Explaining a Situation",
      lines: [
        {
          speaker: "Teacher",
          text: "Bakit hindi mo naipasa ang iyong proyekto kahapon?",
          translation: "Why were you unable to submit your project yesterday?",
        },
        {
          speaker: "Student",
          text: "Hindi ko po ito natapos dahil nawalan kami ng kuryente kagabi.",
          translation: "I was unable to finish it because we lost electricity last night.",
        },
        {
          speaker: "Teacher",
          text: "Naiintindihan ko, ngunit kailangan mo pa rin itong ipasa.",
          translation: "I understand, but you still need to submit it.",
        },
        {
          speaker: "Student",
          text: "Opo. Tatapusin ko po ito pagkatapos ng klase upang maipasa ko bukas.",
          translation: "Yes. I will finish it after class so that I can submit it tomorrow.",
        },
        {
          speaker: "Teacher",
          text: "Sige. Siguraduhin mong maayos ang iyong proyekto.",
          translation: "All right. Make sure your project is properly done.",
        },
      ],
    },
  ],
  assessment: {
    instructions: "Choose or provide the correct answer. The assessment contains 15 questions.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "Which connector means \"because\"?",
        options: [
          {
            key: "A",
            text: "Kaya",
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
            text: "Habang",
          },
        ],
        answerKey: "B",
        title: "Part A: Multiple Choice",
      },
      {
        id: 2,
        prompt: "Which connector expresses contrast?",
        options: [
          {
            key: "A",
            text: "At",
          },
          {
            key: "B",
            text: "Para",
          },
          {
            key: "C",
            text: "Ngunit",
          },
          {
            key: "D",
            text: "Pagkatapos",
          },
        ],
        answerKey: "C",
        title: "Part A: Multiple Choice",
      },
      {
        id: 3,
        prompt: "What is the meaning of habang?",
        options: [
          {
            key: "A",
            text: "Before",
          },
          {
            key: "B",
            text: "While",
          },
          {
            key: "C",
            text: "Because",
          },
          {
            key: "D",
            text: "Therefore",
          },
        ],
        answerKey: "B",
        title: "Part A: Multiple Choice",
      },
      {
        id: 4,
        prompt: "Which connector is commonly used to introduce a result?",
        options: [
          {
            key: "A",
            text: "Kaya",
          },
          {
            key: "B",
            text: "Kung",
          },
          {
            key: "C",
            text: "Bago",
          },
          {
            key: "D",
            text: "Kahit",
          },
        ],
        answerKey: "A",
        title: "Part A: Multiple Choice",
      },
      {
        id: 5,
        prompt: "Which connector expresses purpose?",
        options: [
          {
            key: "A",
            text: "Pero",
          },
          {
            key: "B",
            text: "Dahil",
          },
          {
            key: "C",
            text: "Upang",
          },
          {
            key: "D",
            text: "Ngunit",
          },
        ],
        answerKey: "C",
        title: "Part A: Multiple Choice",
      },
    ],
  },
  extraActivities: [
    {
      title: "Identify the Connector",
      kind: "choice",
      instructions: "Choose the correct meaning of each Filipino connecting word.",
      items: [
        "Dahil\nA. Because\nB. Although\nC. Before",
        "Ngunit\nA. And\nB. But\nC. After",
        "Habang\nA. While\nB. If\nC. Therefore",
        "Kaya\nA. Because\nB. So/therefore\nC. Before",
        "Upang\nA. In order to\nB. However\nC. Whenever",
      ],
    },
    {
      title: "Fill in the Blanks",
      kind: "fill",
      instructions: "Choose the appropriate connecting word.",
      items: [
        "Nagdala ako ng payong ______ umuulan.",
        "Gusto niyang sumama, ______ kailangan niyang magtrabaho.",
        "Mag-aaral ako nang mabuti ______ makapasa sa pagsusulit.",
        "______ natapos ka na, maaari ka nang umuwi.",
        "Nagluluto si Nanay ______ nanonood ako ng telebisyon.",
      ],
      choices: [
        "dahil",
        "pero",
        "para",
        "kapag",
        "habang",
      ],
    },
    {
      title: "Combine the Sentences",
      kind: "rewrite",
      instructions: "Combine each pair of sentences using the suggested connecting word.",
      items: [
        "Pagod ako. Kailangan kong tapusin ang proyekto.\nConnector: pero",
        "Umuulan. Hindi kami lumabas.\nConnector: kaya",
        "Nag-aaral siya. Nakikinig siya ng musika.\nConnector: habang",
        "Nag-ipon ako ng pera. Makabili ako ng bagong sapatos.\nConnector: para",
        "May oras ka. Tulungan mo ako.\nConnector: kung",
      ],
    },
    {
      title: "Arrange the Words",
      kind: "arrange",
      instructions: "Arrange the words to form a correct sentence.",
      items: [
        "dahil / hindi / ako / pumasok / may sakit / ako",
        "habang / nagluluto / si Nanay / nag-aaral / ako",
        "pero / gusto / sumama / kong / may trabaho / ako",
        "kaya / maaga / natulog / ako / maaga / nagising / ako",
        "para / nag-aaral / ako / matuto / ng Filipino",
      ],
    },
    {
      title: "Translate into Filipino",
      kind: "translate",
      instructions: "Translate the following sentences.",
      items: [
        "I stayed at home because it was raining.",
        "She wants to join us, but she is busy.",
        "I will call you when I arrive.",
        "He studies hard so that he can pass the examination.",
        "I listen to music while I am cleaning my room.",
      ],
    },
    {
      title: "Create Your Own Sentences",
      kind: "open",
      instructions: "Write five original Filipino sentences using the following connectors:",
      items: [
        "at",
        "dahil",
        "pero",
        "kung",
        "habang",
      ],
      note: "At least two of your sentences should contain two or more complete ideas.",
    },
    {
      title: "Lesson Assessment – Part B: Fill in the Blanks",
      kind: "assessment",
      instructions: "Choose the appropriate connector.",
      items: [
        "Hindi siya pumasok ______ may sakit siya.",
        "Gusto kong bumili ng libro, ______ wala akong sapat na pera.",
        "Mag-aaral ako ______ makapasa sa pagsusulit.",
        "______ dumating ka, tawagan mo ako.",
        "Nagbabasa ako ______ naghihintay sa aking kaibigan.",
      ],
      answers: [
        "dahil",
        "pero",
        "upang / para",
        "Kapag",
        "habang",
      ],
    },
    {
      title: "Lesson Assessment – Part C: Sentence Construction",
      kind: "assessment",
      items: [
        "Combine: Maulan. Nagdala ako ng payong.\nUse: dahil",
        "Combine: Pagod ako. Tatapusin ko ang aking gawain.\nUse: kahit",
        "Construct a sentence using kung.",
        "Construct a sentence using pagkatapos.",
        "Construct a sentence using pero and dahil in one sentence.",
      ],
      answers: [
        "Nagdala ako ng payong dahil maulan.",
        "Kahit pagod ako, tatapusin ko ang aking gawain.",
        "Kung may oras ako, tutulungan kita.",
        "Pagkatapos ng klase, uuwi ako.",
        "Gusto kong sumama dahil masaya ang lakad, pero marami pa akong kailangang gawin.",
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
        label: "Complete the connector exercises + Finish the guided conversation activity + Complete the sentence construction activities",
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
      name: "Complex Sentence Builder Badge",
      description: "Awarded when the learner completes the lesson and successfully constructs sentences using at least five different connecting words.",
    },
    completionRequirement: "Finish all lesson sections. Complete the required practice activities. Obtain at least 70% in the assessment. Complete the sentence construction activity.",
  },
  expectedOutcomes: [
    "Recognize common Filipino connecting words.",
    "Explain how connectors relate two or more ideas.",
    "Combine simple sentences into more detailed sentences.",
    "Express reasons, results, conditions, contrasts, time relationships, and purposes.",
    "Use connecting words in everyday conversations and written communication.",
    "The learner can construct understandable Filipino sentences containing multiple related ideas and use appropriate connecting words to communicate more detailed information.",
  ],
};
