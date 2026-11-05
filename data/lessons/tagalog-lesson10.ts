import {
  LessonExpressionGroup,
  StructuredLesson,
} from "../../types/structuredLesson";
import {
  arrange,
  choice,
  dialogue,
  fills,
  matchPairs,
  phrases,
  sentences,
  words,
} from "./lessonHelpers";

// Tagalog Lesson 10 — copied from "Tagalog 10.pdf". The PDF's tables lost
// some of their columns, so each Filipino line was paired with the
// English and pronunciation lines in the same position (the counts match
// in every table). The dialogues' English translations are listed after
// each dialogue in the document and were paired line by line. Nothing in
// the Filipino was changed.

export const tagalogLesson10ReviewItems = [
  'Vocabulary D lists "Masayahin – Cheerful" twice; it is shown once.',
  "Activities 2 and 5 (both multiple choice) share the practice choice step.",
  'Speaking: "Ipakikilala" has no English in the vocabulary tables; "Will introduce" is inferred from "Ipakikilala ko sa iyo si Mark. – I will introduce Mark to you."',
  "The document's Beginner Level summary and suggested final assessment are not part of this lesson and were not added.",
];

// 4. Vocabulary
const expressionGroups: LessonExpressionGroup[] = [
  {
    title: "A. People and Relationships",
    items: words([
      ["Tao", "Person", "ta-o"],
      ["Kaibigan", "Friend", "ka-i-bi-gan"],
      ["Kaklase", "Classmate", "kak-la-se"],
      ["Guro", "Teacher", "gu-ro"],
      ["Estudyante", "Student", "es-tu-dyan-te"],
      ["Kamag-anak", "Relative", "ka-mag-a-nak"],
      ["Pamilya", "Family", "pa-mil-ya"],
      ["Magulang", "Parent", "ma-gu-lang"],
      ["Nanay", "Mother", "na-nay"],
      ["Tatay", "Father", "ta-tay"],
      ["Kapatid", "Sibling", "ka-pa-tid"],
      ["Ate", "Older sister", "a-te"],
      ["Kuya", "Older brother", "ku-ya"],
      ["Bunso", "Youngest sibling / Child", "bun-so"],
      ["Pinsan", "Cousin", "pin-san"],
      ["Lolo", "Grandfather", "lo-lo"],
      ["Lola", "Grandmother", "lo-la"],
      ["Asawa", "Spouse", "a-sa-wa"],
      ["Anak", "Child / Son / Daughter", "a-nak"],
      ["Kapitbahay", "Neighbor", "ka-pit-ba-hay"],
    ]),
  },
  {
    title: "B. Personal Information",
    items: words([
      ["Pangalan", "Name", "pa-nga-lan"],
      ["Edad", "Age", "e-dad"],
      ["Tirahan", "Residence / Address", "ti-ra-han"],
      ["Hanapbuhay", "Occupation / Livelihood", "ha-nap-bu-hay"],
      ["Trabaho", "Work / Job", "tra-ba-ho"],
      ["Paaralan", "School", "pa-a-ra-lan"],
      ["Bansa", "Country", "ban-sa"],
      ["Lungsod", "City", "lung-sod"],
      ["Lalawigan", "Province", "la-la-wi-gan"],
      ["Hilig", "Interest / Hobby", "hi-lig"],
      ["Paborito", "Favorite", "pa-bo-ri-to"],
      ["Kaibigan", "Friend", "ka-i-bi-gan"],
    ]),
  },
  {
    title: "C. Pronouns and Expressions",
    items: words([
      ["Siya", "He / She", "si-ya"],
      ["Sila", "They", "si-la"],
      ["Niya", "His / Her", "ni-ya"],
      ["Kanila", "Their / Theirs", "ka-ni-la"],
      ["Kanya", "His / Hers", "kan-ya"],
      ["Kami", "We (excluding the listener)", "ka-mi"],
      ["Tayo", "We (including the listener)", "ta-yo"],
      ["Ito", "This", "i-to"],
      ["Iyon", "That", "i-yon"],
      ["Sila ay", "They are", "si-la ay"],
      ["Siya ay", "He / She is", "si-ya ay"],
    ]),
  },
  {
    title: "D. Words Used to Describe People",
    items: words([
      ["Mabait", "Kind", "ma-ba-it"],
      ["Masayahin", "Cheerful", "ma-sa-ya-hin"],
      ["Tahimik", "Quiet", "ta-hi-mik"],
      ["Palakaibigan", "Friendly", "pa-la-ka-i-bi-gan"],
      ["Masipag", "Hardworking", "ma-si-pag"],
      ["Matulungin", "Helpful", "ma-tu-lu-ngin"],
      ["Matalino", "Intelligent", "ma-ta-li-no"],
      ["Malikhain", "Creative", "ma-lik-ha-in"],
      ["Mapagkakatiwalaan", "Trustworthy", "ma-pag-ka-ka-ti-wa-la-an"],
      ["Mahiyain", "Shy", "ma-hi-ya-in"],
      ["Palakausap", "Easy to talk to", "pa-la-ka-u-sap"],
    ]),
  },
];

// 5. Useful Phrases and Sentences
const situationGroups: LessonExpressionGroup[] = [
  {
    title: "A. Introducing Someone",
    items: words([
      ["Ito si Ana.", "This is Ana."],
      ["Ipakikilala ko sa iyo si Mark.", "I will introduce Mark to you."],
      ["Siya ang kaibigan ko.", "He/She is my friend."],
      ["Siya ang aking kapatid.", "He/She is my sibling."],
      ["Ipinapakilala ko ang aking pamilya.", "I am introducing my family."],
      ["Kilalanin mo si Maria.", "Meet Maria."],
      ["Siya ang aking kaklase.", "He/She is my classmate."],
    ]),
  },
  {
    title: "B. Sharing Information About Someone",
    items: words([
      ["Ang pangalan niya ay Carlo.", "His/Her name is Carlo."],
      ["Labingwalong taong gulang siya.", "He/She is eighteen years old."],
      ["Nakatira siya sa Pampanga.", "He/She lives in Pampanga."],
      ["Estudyante siya.", "He/She is a student."],
      ["Nag-aaral siya sa kolehiyo.", "He/She studies in college."],
      ["Mahilig siyang magbasa.", "He/She likes reading."],
      ["Paborito niya ang kulay asul.", "His/Her favorite color is blue."],
    ]),
  },
  {
    title: "C. Describing Someone",
    items: words([
      ["Mabait siya.", "He/She is kind."],
      ["Masayahin siyang tao.", "He/She is a cheerful person."],
      ["Masipag siyang mag-aral.", "He/She studies hard."],
      ["Mahilig siyang tumulong sa iba.", "He/She likes helping others."],
      ["Tahimik siya ngunit palakaibigan.", "He/She is quiet but friendly."],
      ["Matalino at malikhain siya.", "He/She is intelligent and creative."],
    ]),
  },
  {
    title: "D. Responding to an Introduction",
    items: words([
      ["Ikinagagalak kitang makilala.", "Nice to meet you."],
      ["Ikinagagalak ko rin na makilala ka.", "Nice to meet you too."],
      ["Kumusta ka?", "How are you?"],
      ["Ano ang iyong pangalan?", "What is your name?"],
      ["Saan ka nagmula?", "Where are you from?"],
      ["Sana ay maging magkaibigan tayo.", "I hope we can become friends."],
      ["Salamat sa pagpapakilala.", "Thank you for the introduction."],
    ]),
  },
];

export const tagalogLesson10: StructuredLesson = {
  lessonId: "tagalog_10",
  dialect: "tagalog",
  dialectLabel: "Tagalog",
  lessonNumber: 10,
  title: "Introducing Other People",
  level: "Beginner",
  unit: "Basic Communication",

  // 3. Lesson Introduction
  intro: [
    "Introducing people is a common part of everyday communication. Whether meeting friends, attending school, visiting relatives, or joining a new group, knowing how to introduce someone helps establish connections and build relationships.",
    "In Filipino, learners can use expressions such as Ito si..., Siya ang..., and Ipakikilala ko sa iyo si... when introducing or talking about another person.",
    "This lesson focuses on introducing family members, friends, classmates, and acquaintances while sharing simple information about them.",
  ],

  // 2. Learning Objectives
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Introduce another person using simple Filipino expressions.",
    "Identify and use words referring to family members, friends, classmates, and other people.",
    "Share basic information about someone, such as their name, age, occupation, and place of residence.",
    "Describe a person's basic characteristics.",
    "Use appropriate pronouns and expressions when talking about other people.",
    "Participate in short conversations involving introductions.",
  ],

  expressionsIntro:
    "Tap the speaker to hear each word. Read each syllable clearly.",
  expressionGroups,

  // 6. Lesson Proper
  languageNotes: [
    {
      title: 'A. Introducing Another Person Using "Ito si..."',
      body: [
        "One common way to introduce someone in Filipino is by using: Ito si + person's name.",
        "The expression Ito si... is commonly used when introducing a person who is present or nearby.",
      ],
      examples: sentences([
        ["Ito si Ana.", "This is Ana."],
        ["Ito si Carlo.", "This is Carlo."],
        ["Ito si Maria.", "This is Maria."],
        ["Ito ang kaibigan kong si Ana.", "This is my friend Ana."],
        ["Ito ang kapatid kong si Mark.", "This is my sibling Mark."],
      ]),
    },
    {
      title: 'B. Talking About Someone Using "Siya"',
      body: [
        "The word siya is a Filipino pronoun that can refer to either a male or female person. Filipino does not distinguish between he and she through this pronoun.",
        "Learners can use siya to avoid repeatedly mentioning a person's name.",
      ],
      examples: sentences([
        ["Siya ay estudyante.", "He/She is a student."],
        ["Siya ang guro ko.", "He/She is my teacher."],
        ["Mabait siya.", "He/She is kind."],
        ["Nakatira siya sa Angeles City.", "He/She lives in Angeles City."],
        [
          "Si Ana ay kaibigan ko. Siya ay masayahin.",
          "Ana is my friend. She is cheerful.",
        ],
      ]),
    },
    {
      title: 'C. Using "Niya" to Show Possession or Relationship',
      body: ["The word niya can mean his or her, depending on context."],
      examples: sentences([
        ["Ang pangalan niya ay Mark.", "His/Her name is Mark."],
        ["Kaibigan niya si Ana.", "Ana is his/her friend."],
        ["Paborito niya ang adobo.", "Adobo is his/her favorite."],
        ["Nanay niya si Maria.", "Maria is his/her mother."],
      ]),
    },
    {
      title: "D. Introducing Family Members",
      body: [
        "Learners can introduce family members using familiar relationship words.",
      ],
      examples: sentences([
        ["Ito ang nanay ko.", "This is my mother."],
        ["Ito ang tatay ko.", "This is my father."],
        ["Siya ang ate ko.", "She is my older sister."],
        ["Siya ang kuya ko.", "He is my older brother."],
        ["Ito ang bunso naming kapatid.", "This is our youngest sibling."],
      ]),
    },
    {
      title: "E. Describing Someone Using Adjectives",
      body: [
        "Adjectives can be used to describe a person's personality or characteristics.",
      ],
      examples: sentences([
        ["Mabait si Carlo.", "Carlo is kind."],
        ["Masayahin si Ana.", "Ana is cheerful."],
        ["Masipag ang aking kapatid.", "My sibling is hardworking."],
        ["Tahimik ngunit matalino si Mark.", "Mark is quiet but intelligent."],
      ]),
      remember:
        "Learners should remember that descriptions should be respectful and appropriate.",
    },
    {
      title: 'F. Using "Sila" When Introducing More Than One Person',
      body: ["The word sila refers to two or more people."],
      examples: sentences([
        ["Sila ang mga kaibigan ko.", "They are my friends."],
        ["Sila Ana at Mark ay magkaklase.", "Ana and Mark are classmates."],
        ["Mabait silang magkakapatid.", "They are kind siblings."],
        ["Nakatira sila sa Pampanga.", "They live in Pampanga."],
      ]),
    },
    {
      title: 'G. Difference Between "Kami" and "Tayo"',
      body: ['Both kami and tayo mean "we," but they are used differently.'],
      table: {
        leftHeading: "Filipino",
        rightHeading: "Usage",
        rows: [
          { left: "Kami (We)", right: "Excludes the person being spoken to" },
          { left: "Tayo (We)", right: "Includes the person being spoken to" },
        ],
      },
      examples: sentences([
        [
          "Kami ay magkakaklase.",
          "We are classmates. (The listener is not included.)",
        ],
        [
          "Tayo ay magkakaibigan.",
          "We are friends. (The listener is included.)",
        ],
      ]),
    },
  ],

  situationsTitle: "Useful phrases and sentences",
  situationGroups,

  // 7. Guided Conversations
  conversations: [
    {
      situation: "Dialogue 1: Introducing a Friend",
      lines: dialogue([
        [
          "Anna",
          "Mark, may gusto akong ipakilala sa iyo.",
          "Mark, I want to introduce someone to you.",
        ],
        ["Mark", "Sino siya?", "Who is he?"],
        [
          "Anna",
          "Ito si Carlo. Kaibigan ko siya.",
          "This is Carlo. He is my friend.",
        ],
        [
          "Carlo",
          "Kumusta, Mark! Ikinagagalak kitang makilala.",
          "Hello, Mark! Nice to meet you.",
        ],
        [
          "Mark",
          "Kumusta rin, Carlo. Ikinagagalak ko ring makilala ka.",
          "Hello too, Carlo. Nice to meet you too.",
        ],
        ["Anna", "Magkaklase kami ni Carlo.", "Carlo and I are classmates."],
        [
          "Mark",
          "Ah, ganoon ba? Saang paaralan kayo nag-aaral?",
          "Oh, is that so? What school do you attend?",
        ],
        [
          "Carlo",
          "Nag-aaral kami sa parehong kolehiyo.",
          "We study at the same college.",
        ],
      ]),
    },
    {
      situation: "Dialogue 2: Introducing Family Members",
      lines: dialogue([
        [
          "Mia",
          "Ito ang aking pamilya. Sila ang aking mga magulang.",
          "This is my family. They are my parents.",
        ],
        [
          "Lara",
          "Ang saya naman! Sino ang nasa tabi mo?",
          "How nice! Who is beside you?",
        ],
        [
          "Mia",
          "Siya ang kuya ko. Ang pangalan niya ay Daniel.",
          "He is my older brother. His name is Daniel.",
        ],
        ["Lara", "Ilang taon na siya?", "How old is he?"],
        [
          "Mia",
          "Dalawampu't dalawang taong gulang na siya.",
          "He is twenty-two years old.",
        ],
        ["Lara", "Ano naman ang ginagawa niya?", "What does he do?"],
        [
          "Mia",
          "Nagtatrabaho siya sa isang kompanya.",
          "He works at a company.",
        ],
        [
          "Lara",
          "Masaya akong makilala ang pamilya mo.",
          "I am happy to meet your family.",
        ],
      ]),
    },
    {
      situation: "Dialogue 3: Introducing a Classmate",
      lines: dialogue([
        [
          "Teacher",
          "Magandang umaga, klase. May bago tayong kaklase ngayon.",
          "Good morning, class. We have a new classmate today.",
        ],
        ["Students", "Magandang umaga po!", "Good morning!"],
        [
          "Teacher",
          "Ipakilala natin siya. Ano ang pangalan mo?",
          "Let's introduce him. What is your name?",
        ],
        ["New Student", "Ako po si Joshua.", "I am Joshua."],
        ["Teacher", "Ilang taon ka na, Joshua?", "How old are you, Joshua?"],
        [
          "Joshua",
          "Labingwalong taong gulang po ako.",
          "I am eighteen years old.",
        ],
        ["Teacher", "Saan ka nagmula?", "Where are you from?"],
        ["Joshua", "Nagmula po ako sa Tarlac.", "I am from Tarlac."],
        [
          "Teacher",
          "Mabuti. Sana ay maging magkaibigan kayo.",
          "Good. I hope you become friends.",
        ],
        ["Students", "Maligayang pagdating, Joshua!", "Welcome, Joshua!"],
      ]),
    },
  ],

  // 8. Activity 1 (answer key: 1 C, 2 F, 3 D, 4 G, 5 A, 6 H, 7 E, 8 B)
  matchActivity: {
    title: "Match the Vocabulary",
    instructions: "Match each Filipino word with its English meaning.",
    pairs: matchPairs(
      [
        "Kaibigan",
        "Kaklase",
        "Magulang",
        "Pinsan",
        "Kapitbahay",
        "Siya",
        "Sila",
        "Masipag",
      ],
      [
        "Neighbor",
        "Hardworking",
        "Friend",
        "Parent",
        "They",
        "Classmate",
        "Cousin",
        "He / She",
      ],
      "C F D G A H E B",
    ),
  },

  // 8. Activities 2 and 5 (answer keys: 1 A, 2 C, 3 B, 4 C, 5 B and
  // 1 A, 2 A, 3 A, 4 B)
  choiceActivity: {
    title: "Choose the Correct Expression",
    instructions:
      "Choose the correct expression. For each situation, choose the most appropriate expression.",
    questions: [
      choice(
        1,
        'Which expression means "This is my friend"?',
        [
          "Ito ang kaibigan ko.",
          "Saan ang kaibigan ko?",
          "Bakit ang kaibigan ko?",
          "Kailan ang kaibigan ko?",
        ],
        "A",
      ),
      choice(
        2,
        'Which pronoun means "He" or "She"?',
        ["Sila", "Kami", "Siya", "Tayo"],
        "C",
      ),
      choice(
        3,
        'What does "Niya" mean in the appropriate possessive context?',
        ["My", "His / Her", "Their", "Our"],
        "B",
      ),
      choice(
        4,
        "Which word describes someone who is hardworking?",
        ["Tahimik", "Mahiyain", "Masipag", "Mabagal"],
        "C",
      ),
      choice(
        5,
        'Which expression means "They are my friends"?',
        [
          "Siya ang kaibigan ko.",
          "Sila ang mga kaibigan ko.",
          "Ito ang kaibigan ko.",
          "Kami ang kaibigan niya.",
        ],
        "B",
      ),
      choice(
        6,
        "You want to introduce your friend Ana to Mark.",
        [
          "Ito si Ana, kaibigan ko.",
          "Saan si Ana?",
          "Bakit si Ana?",
          "Ilan si Ana?",
        ],
        "A",
      ),
      choice(
        7,
        "You want to introduce your older brother.",
        [
          "Ito ang kuya ko.",
          "Ito ang kapitbahay ko.",
          "Ito ang guro ko.",
          "Ito ang pinsan ko.",
        ],
        "A",
      ),
      choice(
        8,
        "You want to describe your friend as kind.",
        [
          "Mabait ang kaibigan ko.",
          "Malayo ang kaibigan ko.",
          "Mahal ang kaibigan ko.",
          "Mataas ang kaibigan ko.",
        ],
        "A",
      ),
      choice(
        9,
        "You are introducing two classmates.",
        [
          "Siya ang kaklase ko.",
          "Sila ang mga kaklase ko.",
          "Ito ang kaklase ko.",
          "Siya ay kaklase niya.",
        ],
        "B",
      ),
    ],
  },

  // 8. Activity 3 (answers from the document's answer key)
  fillInBlanks: {
    title: "Fill in the Blanks",
    items: fills(
      "fill",
      [
        ["Si Ana ay ______ ko.", "Kaibigan"],
        ["______ ang aking kapatid.", "Siya"],
        ["______ ang mga kaklase ko.", "Sila"],
        ["______ siyang mag-aral araw-araw.", "Masipag"],
        ["Ang pangalan ______ ay Mark.", "Niya"],
      ],
      {
        title: "Fill in the Blanks",
        instructions: "Choose the correct word from the word bank.",
        wordBank: ["Siya", "Sila", "Kaibigan", "Masipag", "Niya"],
      },
    ),
  },

  // 8. Activity 4
  arrangeWords: {
    title: "Arrange the Words",
    instructions: "Arrange the words to form a correct Filipino sentence.",
    items: [
      arrange("1", "si / Ito / Ana", "Ito si Ana."),
      arrange("2", "ko / Siya / kaibigan / ang", "Siya ang kaibigan ko."),
      arrange("3", "Mabait / Carlo / si", "Mabait si Carlo."),
      arrange("4", "ang / Sila / pamilya / ko", "Sila ang pamilya ko."),
      arrange(
        "5",
        "pangalan / niya / Ang / Maria / ay",
        "Ang pangalan niya ay Maria.",
      ),
    ],
  },

  // 9. Lesson Assessment (answer key: 1 B, 2 C, 3 A, 4 C, 5 A, 6 B, 7 B,
  // 8 C, 9 B, 10 B)
  assessment: {
    instructions: "Choose the correct answer.",
    passPercent: 70,
    questions: [
      choice(
        1,
        'What does "Kaibigan" mean?',
        ["Teacher", "Friend", "Neighbor", "Relative"],
        "B",
      ),
      choice(
        2,
        'Which Filipino pronoun means "They"?',
        ["Siya", "Kami", "Sila", "Niya"],
        "C",
      ),
      choice(
        3,
        "What is the correct expression for introducing someone named Ana?",
        ["Ito si Ana.", "Saan si Ana?", "Bakit si Ana?", "Kailan si Ana?"],
        "A",
      ),
      choice(
        4,
        'What does "Masipag" mean?',
        ["Lazy", "Quiet", "Hardworking", "Shy"],
        "C",
      ),
      choice(
        5,
        'Which sentence means "He/She is my sibling"?',
        [
          "Siya ang aking kapatid.",
          "Siya ang aking guro.",
          "Siya ang aking kapitbahay.",
          "Siya ang aking kaibigan.",
        ],
        "A",
      ),
      choice(
        6,
        "Which pronoun excludes the person being spoken to?",
        ["Tayo", "Kami", "Sila", "Siya"],
        "B",
      ),
      choice(
        7,
        'What does "Ang pangalan niya ay Carlo" mean?',
        [
          "My name is Carlo.",
          "His/Her name is Carlo.",
          "Their names are Carlo.",
          "Carlo is my friend.",
        ],
        "B",
      ),
      choice(
        8,
        'Which expression is used to say "Nice to meet you"?',
        [
          "Paalam.",
          "Sandali lang.",
          "Ikinagagalak kitang makilala.",
          "Hindi ko alam.",
        ],
        "C",
      ),
      choice(
        9,
        "Which sentence correctly describes a friendly person?",
        [
          "Masaya ang bahay.",
          "Palakaibigan siya.",
          "Malaki ang puno.",
          "Mabilis ang sasakyan.",
        ],
        "B",
      ),
      choice(
        10,
        'Which sentence means "They are my classmates"?',
        [
          "Siya ang kaklase ko.",
          "Sila ang mga kaklase ko.",
          "Ito ang guro ko.",
          "Kami ang kanilang guro.",
        ],
        "B",
      ),
    ],
  },

  // 8. Activity 6: Listening and Pronunciation. English meanings are from
  // the vocabulary and phrase tables; one is inferred (see the review
  // items).
  speaking: {
    title: "Listening and Pronunciation",
    instructions:
      "Listen to the recorded words and sentences, then repeat them aloud.",
    note: "Focus on clear pronunciation of each syllable, proper pacing, correct use of siya and sila, and natural pronunciation of complete sentences.",
    phrases: phrases([
      ["Kamag-anak", "Relative"],
      ["Kapitbahay", "Neighbor"],
      ["Palakaibigan", "Friendly"],
      ["Mapagkakatiwalaan", "Trustworthy"],
      ["Ipakikilala", "Will introduce"],
      ["Ito ang kaibigan ko.", "This is my friend."],
      ["Siya ang aking kapatid.", "He/She is my sibling."],
      ["Ikinagagalak kitang makilala.", "Nice to meet you."],
    ]),
  },

  // 8. Activity 7 (profile card with the learner's own sentences; no
  // screen yet).
  extraActivities: [
    {
      title: "Introduce Someone",
      instructions:
        "The application displays a character or profile card containing basic information. Learners must introduce Maria using at least three Filipino sentences.",
      items: [
        "Name: Maria",
        "Age: 19",
        "Relationship: Friend",
        "Location: Angeles City",
        "Occupation: College Student",
        "Personality: Friendly and hardworking",
      ],
      note: "Sample answer: Ito si Maria. Kaibigan ko siya. Labinsiyam na taong gulang siya. Nakatira siya sa Angeles City. Estudyante siya sa kolehiyo. Palakaibigan at masipag siya. (This is Maria. She is my friend. She is nineteen years old. She lives in Angeles City. She is a college student. She is friendly and hardworking.)",
    },
  ],

  // 10. Gamification Integration. Practice activities = the multiple
  // choice, fill-in and arrange exercises; the matching activity has no
  // XP row in the document.
  rewards: {
    items: [
      { section: "vocabulary", label: "Complete Vocabulary Learning", xp: 10 },
      {
        section: "conversation",
        label: "Complete Guided Conversations",
        xp: 10,
      },
      { section: "sentences", label: "Complete Practice Activities", xp: 15 },
      {
        section: "speaking",
        label: "Complete Listening and Speaking Practice",
        xp: 10,
      },
      { section: "assessment", label: "Pass Lesson Assessment", xp: 15 },
    ],
    total: 60,
    badge: {
      name: "Social Connector Badge",
      description:
        "Awarded to learners who successfully complete the lesson and demonstrate the ability to introduce people and share basic information about them.",
    },
    completionRequirement:
      "Finish the vocabulary section, complete the guided conversations, complete the practice activities, and obtain at least 70% in the lesson assessment.",
  },
};
