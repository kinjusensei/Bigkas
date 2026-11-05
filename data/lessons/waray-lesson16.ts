import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 16 — imported from "Lesson Plan.pdf", pages 870–883.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.

export const warayLesson16: StructuredLesson = {
  lessonId: "waray_16",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 16,
  title: "Constructing More Complex Sentences",
  level: "Intermediate",
  unit: "Grammar and Sentence Construction",
  estimatedDuration: "40–50 minutes",
  prerequisite: "Lessons 1–15",
  intro: [
    "In everyday conversations, people often communicate more than one idea at a time. Instead of using several short sentences, speakers connect related thoughts to explain what happened, describe situations, or express reasons.",
    "For example:",
    "Simple sentences:",
    "• Nag-aadal ako. – I am studying.",
    "• May eksam kami buwas. – We have an exam tomorrow.",
    "Combined idea:",
    "Nag-aadal ako kay may eksam kami buwas. I am studying because we have an exam tomorrow.",
    "By connecting ideas, learners can communicate more naturally and provide additional information.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify connecting words used in longer Waray sentences.",
    "Combine two or more simple ideas into a meaningful sentence.",
    "Express reasons, conditions, contrasts, and sequences of events.",
    "Add descriptive and contextual information to basic sentences.",
    "Construct longer Waray sentences for everyday communication.",
  ],
  expressionGroups: [
    {
      title: "A. Basic Connectors",
      intro: [
        "Connecting words, also called conjunctions, join words, phrases, or sentences.",
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
          term: "O",
          meaning: "Or",
          pronunciation: "O",
        },
        {
          term: "Kay",
          meaning: "Because",
          pronunciation: "Kay",
        },
        {
          term: "Tungod kay",
          meaning: "Because of / Due to",
          pronunciation: "Tung-od kay",
        },
        {
          term: "Kon",
          meaning: "If",
          pronunciation: "Kon",
        },
        {
          term: "Bisan kon",
          meaning: "Although / Even though",
          pronunciation: "Bi-san kon",
        },
        {
          term: "Gihapon",
          meaning: "Also",
          pronunciation: "Gi-ha-pon",
        },
      ],
    },
    {
      title: "B. Examples in Sentences",
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
          term: "Nag-aadal hiya kay may eksam hira.",
          meaning: "He/She is studying because they have an exam.",
        },
        {
          term: "Makadto ako kon may panahon ako.",
          meaning: "I will go if I have time.",
        },
        {
          term: "Bisan kon uran, makadto kami.",
          meaning: "Even if it rains, we will go.",
        },
        {
          term: "Kapoy ako, pero magtatrabaho ako gihapon.",
          meaning: "I am tired, but I will still work.",
        },
      ],
    },
  ],
  languageNotes: [
    {
      title: "Expressing Reasons and Explanations",
      body: [
        "A reason explains why something happens or why someone does something.",
      ],
    },
    {
      title: "A. Using Kay",
      body: [
        "The word kay can introduce a reason.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Nag-aadal ako kay may eksam kami.",
            right: "I am studying because we have an exam.",
          },
          {
            left: "Nalilipay hiya kay nakit-an niya an iya sangkay.",
            right: "He/She is happy because he/she saw a friend.",
          },
          {
            left: "Nagpahuway ako kay kapoy ako.",
            right: "I rested because I was tired.",
          },
          {
            left: "Waray ako kumadto kay may trabaho ako.",
            right: "I did not go because I had work.",
          },
        ],
      },
    },
    {
      title: "B. Using Tungod Kay",
      body: [
        "The expression tungod kay introduces a reason or cause.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Waray kami kumadto tungod kay nag-uran.",
            right: "We did not go because it rained.",
          },
          {
            left: "Nagpahuway hiya tungod kay masakit an iya ulo.",
            right: "He/She rested because his/her head hurt.",
          },
          {
            left: "Nalangan ako tungod kay damu an tawo ha dalan.",
            right: "I was delayed because there were many people on the road.",
          },
        ],
      },
    },
    {
      title: "C. Asking for Reasons",
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Kay ano nga nag-aadal ka?",
            right: "Why are you studying?",
          },
          {
            left: "Kay ano nga waray ka kumadto?",
            right: "Why did you not go?",
          },
          {
            left: "Kay ano nga nalipay hiya?",
            right: "Why was he/she happy?",
          },
        ],
      },
    },
    {
      title: "C. Asking for Reasons",
      body: [
        "Example response:",
        "Kay karuyag ko mahibaro hin bag-o nga mga pulong. Because I want to learn new words.",
      ],
    },
    {
      title: "Expressing Contrast and Alternative Choices",
      body: [
        "Contrast is used when two ideas differ or do not agree with each other.",
      ],
    },
    {
      title: "A. Using Pero",
      body: [
        "Pero means “but” and introduces a contrasting idea.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Karuyag ko kumadto, pero waray ako panahon.",
            right: "I want to go, but I have no time.",
          },
          {
            left: "Mahal an libro, pero mapulsanon ito.",
            right: "The book is expensive, but it is useful.",
          },
          {
            left: "Gutiay an balay, pero komportable.",
            right: "The house is small, but it is comfortable.",
          },
        ],
      },
    },
    {
      title: "B. Using O",
      body: [
        "O means “or” and introduces another choice.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Karuyag mo ba hin tubig o juice?",
            right: "Do you want water or juice?",
          },
          {
            left: "Magbabasa ka ba o magsusurat?",
            right: "Will you read or write?",
          },
          {
            left: "Makadto kita yana o buwas?",
            right: "Shall we go today or tomorrow?",
          },
        ],
      },
    },
    {
      title: "C. Comparing Ideas",
      body: [
        "Consider the difference:",
      ],
      examples: [
        {
          text: "Nag-aadal ako kay may eksam.",
          meaning: "I am studying because there is an exam.",
        },
        {
          text: "Nag-aadal ako, pero kapoy ako.",
          meaning: "I am studying, but I am tired.",
        },
      ],
    },
    {
      title: "C. Comparing Ideas",
      body: [
        "The first sentence explains a reason. The second presents two contrasting ideas.",
      ],
    },
    {
      title: "Expressing Conditions and Possibilities",
      body: [
        "Conditional sentences describe situations in which one action or result depends on another.",
      ],
    },
    {
      title: "A. Using Kon",
      body: [
        "Kon means “if” or “when,” depending on the context.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Kon may panahon ako, magbabasa ako.",
            right: "If I have time, I will read.",
          },
          {
            left: "Kon umuran, magpapabilin kami ha balay.",
            right: "If it rains, we will stay at home.",
          },
          {
            left: "Kon gutom ka, kumaon ka anay.",
            right: "If you are hungry, eat first.",
          },
          {
            left: "Kon kinahanglan mo hin bulig, sumati ako.",
            right: "If you need help, tell me.",
          },
        ],
      },
    },
    {
      title: "B. Using Bisan Kon",
      body: [
        "Bisan kon means “even if” or “although,” depending on the sentence.",
      ],
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Bisan kon uran, makadto ako.",
            right: "Even if it rains, I will go.",
          },
          {
            left: "Bisan kon kapoy hiya, nagpapadayon hiya.",
            right: "Even though he/she is tired, he/she continues.",
          },
          {
            left: "Bisan kon hirayo an eskwelahan, naglalakat ako.",
            right: "Even though the school is far, I walk.",
          },
        ],
      },
    },
    {
      title: "C. Practice Understanding Conditions",
      body: [
        "Compare:",
      ],
      examples: [
        {
          text: "Kon may panahon ako, magbabasa ako.",
          meaning: "If I have time, I will read.",
        },
        {
          text: "Bisan kon waray ako panahon, mangalimbasog ako.",
          meaning: "Even if I have no time, I will make an effort.",
        },
      ],
    },
    {
      title: "C. Practice Understanding Conditions",
      body: [
        "The first expresses a condition. The second expresses an action despite an obstacle.",
      ],
    },
    {
      title: "Adding Details and Descriptions",
      body: [
        "Longer sentences often include information about time, place, manner, or the people involved.",
      ],
    },
    {
      title: "A. Adding Time",
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Nag-aadal ako yana nga gab-i.",
            right: "I am studying tonight.",
          },
          {
            left: "Nagkadto kami ha merkado kakulop.",
            right: "We went to the market yesterday afternoon.",
          },
          {
            left: "Magtatrabaho hiya buwas nga aga.",
            right: "He/She will work tomorrow morning.",
          },
        ],
      },
    },
    {
      title: "B. Adding Place",
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Nagbabasa ako hin libro ha librarya.",
            right: "I am reading a book at the library.",
          },
          {
            left: "Nagluluto hi Nanay ha kusina.",
            right: "Mother is cooking in the kitchen.",
          },
          {
            left: "Nag-uuyag an mga kabataan ha gawas han balay.",
            right: "The children are playing outside the house.",
          },
        ],
      },
    },
    {
      title: "C. Adding Descriptions",
      table: {
        leftHeading: "Waray",
        rightHeading: "English",
        rows: [
          {
            left: "Matahom an balay nga hirani ha baybayon.",
            right: "The house near the beach is beautiful.",
          },
          {
            left: "Malipayon an bata kay nakakarawat hiya hin regalo.",
            right: "The child is happy because he/she received a gift.",
          },
          {
            left: "Daku an merkado ngan damu an namamalit didto.",
            right: "The market is big, and many people shop there.",
          },
        ],
      },
    },
    {
      title: "D. Combining Multiple Details",
      body: [
        "Nagbabasa hi Maria hin libro ha librarya kay may proyekto hira ha eskwelahan.",
        "Maria is reading a book at the library because they have a project at school.",
        "This sentence includes:",
        "• Action: Nagbabasa",
        "• Subject: Maria",
        "• Object: Hin libro",
        "• Place: Ha librarya",
        "• Reason: Kay may proyekto hira ha eskwelahan",
      ],
    },
  ],
  conversations: [
    {
      title: "Conversation A: Explaining Why You Are Studying",
      lines: [
        {
          speaker: "Ana",
          text: "Kay ano nga nag-aadal ka yana?",
          translation: "Why are you studying now?",
        },
        {
          speaker: "Ben",
          text: "Nag-aadal ako kay may eksam kami buwas.",
          translation: "I am studying because we have an exam tomorrow.",
        },
        {
          speaker: "Ana",
          text: "Kapoy ka na ba?",
          translation: "Are you tired already?",
        },
        {
          speaker: "Ben",
          text: "Oo, pero kinahanglan ko magpadayon.",
          translation: "Yes, but I need to continue.",
        },
        {
          speaker: "Ana",
          text: "Kon karuyag mo, mahimo kita mag-aram upod.",
          translation: "If you want, we can study together.",
        },
        {
          speaker: "Ben",
          text: "Maupay ito nga ideya.",
          translation: "That is a good idea.",
        },
      ],
    },
    {
      title: "Conversation B: Making Plans Despite the Weather",
      lines: [
        {
          speaker: "Carlo",
          text: "Makadto ba kita ha baybayon buwas?",
          translation: "Are we going to the beach tomorrow?",
        },
        {
          speaker: "Mark",
          text: "Karuyag ko, pero bangin umuran.",
          translation: "I want to, but it might rain.",
        },
        {
          speaker: "Carlo",
          text: "Kon diri umuran, makadto kita.",
          translation: "If it does not rain, we will go.",
        },
        {
          speaker: "Mark",
          text: "Sige. Bisan kon diri kita makadto ha baybayon, mahimo kita mag-istorya ha balay.",
          translation: "Okay. Even if we do not go to the beach, we can talk at home.",
        },
        {
          speaker: "Carlo",
          text: "Maupay gihapon ito.",
          translation: "That is still good.",
        },
        {
          speaker: "Mark",
          text: "Kitaay kita buwas.",
          translation: "See you tomorrow.",
        },
      ],
    },
    {
      title: "Conversation C: Describing a School Activity",
      lines: [
        {
          speaker: "Maria",
          text: "Ano an iyo ginbubuhat ha eskwelahan?",
          translation: "What are you doing at school?",
        },
        {
          speaker: "Rosa",
          text: "Naghihimo kami hin proyekto.",
          translation: "We are making a project.",
        },
        {
          speaker: "Maria",
          text: "Makuri ba ito?",
          translation: "Is it difficult?",
        },
        {
          speaker: "Rosa",
          text: "Oo, pero nakakalingaw kay nagbubuligay kami.",
          translation: "Yes, but it is enjoyable because we help one another.",
        },
        {
          speaker: "Maria",
          text: "Maupay ito kay mas masayon an trabaho kon may kaupod.",
          translation: "That is good because work is easier when someone is with you.",
        },
        {
          speaker: "Rosa",
          text: "Tinuod ito.",
          translation: "That is true.",
        },
      ],
    },
  ],
  extraActivities: [
    {
      title: "Identify the Connecting Word",
      kind: "choice",
      instructions: "Identify the Waray connecting word in each sentence and give its English meaning.",
      items: [
        "Nagbabasa ako ngan nagsusurat.",
        "Karuyag ko kumadto, pero waray ako panahon.",
        "Nag-aadal hiya kay may eksam hira.",
        "Kon umuran, magpapabilin kami ha balay.",
        "Bisan kon kapoy ako, magpapadayon ako.",
      ],
    },
    {
      title: "Combine the Sentences",
      kind: "rewrite",
      instructions: "Combine each pair of sentences using the connecting word indicated.",
      items: [
        "Nag-aadal ako. May eksam kami. (kay)",
        "Karuyag niya kumadto. Waray hiya panahon. (pero)",
        "May panahon ako. Magbabasa ako. (kon)",
        "Nagbabasa ako. Nagsusurat ako. (ngan)",
        "Kapoy hiya. Nagpapadayon hiya. (bisan kon)",
      ],
    },
    {
      title: "Complete the Sentences",
      kind: "fill",
      instructions: "Choose an appropriate connecting word to complete each sentence.",
      items: [
        "Nagluluto ako _____ gutom kami.",
        "Karuyag ko kumadto, _____ uran yana.",
        "_____ may panahon ako, mabisita ako ha imo.",
        "Nagbabasa hiya _____ nagsusurat.",
        "_____ kapoy hiya, nagtatrabaho hiya gihapon.",
      ],
    },
    {
      title: "Add More Details",
      kind: "rewrite",
      instructions: "Expand each basic sentence by adding the requested information.",
      items: [
        "Nagbabasa ako. (Add a place.)",
        "Nagluluto hi Nanay. (Add a time.)",
        "Nag-aadal hiya. (Add a reason.)",
        "Nag-uuyag an mga bata. (Add a place and time.)",
        "Nagkadto kami. (Add a destination and time.)",
      ],
    },
    {
      title: "Translate into Waray",
      kind: "translate",
      instructions: "Translate the following sentences using the expressions introduced in this lesson.",
      items: [
        "I am studying because we have an exam tomorrow.",
        "I want to go, but I do not have time.",
        "If it rains, we will stay at home.",
        "She is reading a book at the library.",
        "Even though he is tired, he continues working.",
      ],
    },
    {
      title: "Create Your Own Sentences",
      kind: "open",
      instructions: "Write five original Waray sentences. Each sentence must contain at least two related ideas connected by an appropriate connecting word.\nYour sentences should include:",
      items: [
        "One sentence expressing a reason.",
        "One sentence expressing contrast.",
        "One sentence expressing a condition.",
        "One sentence expressing an alternative choice.",
        "One sentence expressing an action despite an obstacle.",
      ],
    },
    {
      title: "Lesson Assessment",
      kind: "assessment",
      items: [
        "What does ngan mean?",
        "Which Waray word is commonly used to express contrast?",
        "What does kay express when connecting two ideas?",
        "What does kon mean in a conditional sentence?",
        "Translate: “I want to go, but I have no time.”",
        "Translate: “If it rains, we will stay at home.”",
        "Which expression means “even if” or “although”?",
        "Translate: “I am studying because we have an exam.”",
        "What does o mean?",
        "Why are connecting words useful when constructing longer sentences?",
      ],
      answers: [
        "And",
        "Pero",
        "A reason or explanation",
        "If",
        "Karuyag ko kumadto, pero waray ako panahon.",
        "Kon umuran, magpapabilin kami ha balay.",
        "Bisan kon",
        "Nag-aadal ako kay may eksam kami.",
        "Or",
        "They connect related ideas and make sentences more complete and meaningful.",
      ],
    },
  ],
  rewards: {
    items: [
      {
        section: "vocabulary",
        label: "Connecting Word Identification",
        xp: 10,
      },
      {
        section: "conversation",
        label: "Sentence Combination + Sentence Completion + Sentence Expansion and Translation + Lesson Assessment",
        xp: 50,
      },
    ],
    total: 60,
    badge: {
      name: "Complex Sentence Builder Badge",
    },
  },
};
