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

// Tagalog Lesson 5 — copied from "Tagalog 5.pdf". The PDF's tables lost
// their columns, so each Tagalog line was paired with the English and
// pronunciation lines in the same position (the counts match in every
// table). Nothing in the Tagalog was changed.

export const tagalogLesson5ReviewItems = [
  'Possessive words table: "Kanila – Their" has the example "Bahay nila – Their house" (kept as written).',
  'Activity 4 item 5: the tiles "mabait / magulang / ang / ko" have no "mga", but the answer key is "Mabait ang mga magulang ko.", so a "mga" tile was added.',
  'Speaking: "Ako ang bunso sa aming pamilya." has no English in the document; "I am the youngest in our family." is inferred.',
  'Speaking: "Nakatira kami kasama ang aming mga lolo at lola." has no English in the document; "We live with our grandparents." is inferred.',
  'Speaking: "Mahal ko ang aking pamilya." has no English in the document; "I love my family." is inferred from "Mahal ko ang pamilya ko."',
];

// 4. Vocabulary
const expressionGroups: LessonExpressionGroup[] = [
  {
    title: "A. Immediate Family Members",
    intro: [
      "Nanay and tatay are commonly used in everyday conversations. Ina and ama are also used for mother and father, often in more formal or literary contexts.",
      "Kapatid is a general word for a sibling. It does not indicate whether the sibling is male or female.",
      "Ate refers to an older sister, while kuya refers to an older brother. These terms are also commonly used as respectful forms of address for older people.",
    ],
    items: words([
      ["Pamilya", "Family", "pah-MEEL-yah"],
      ["Nanay", "Mother / Mom", "NAH-nay"],
      ["Ina", "Mother", "EE-nah"],
      ["Tatay", "Father / Dad", "TAH-tay"],
      ["Ama", "Father", "AH-mah"],
      ["Magulang", "Parent", "mah-GOO-lang"],
      ["Mga magulang", "Parents", "mah-GOO-lang"],
      ["Anak", "Child / Son / Daughter", "AH-nak"],
      ["Anak na lalaki", "Son", "AH-nak nah lah-LAH-kee"],
      ["Anak na babae", "Daughter", "AH-nak nah bah-BAH-eh"],
      ["Kapatid", "Sibling / Brother / Sister", "kah-PAH-teed"],
      ["Ate", "Older sister", "AH-teh"],
      ["Kuya", "Older brother", "KOO-yah"],
      ["Bunso", "Youngest child / Sibling", "BOON-soh"],
      ["Asawa", "Spouse", "ah-SAH-wah"],
      ["Mister", "Husband", "MEES-ter"],
      ["Misis", "Wife", "MEE-sees"],
    ]),
  },
  {
    title: "B. Extended Family Members",
    items: words([
      ["Lolo", "Grandfather", "LOH-loh"],
      ["Lola", "Grandmother", "LOH-lah"],
      ["Apo", "Grandchild", "AH-poh"],
      ["Tiyo / Tito", "Uncle", "TEE-yoh / TEE-toh"],
      ["Tiya / Tita", "Aunt", "TEE-yah / TEE-tah"],
      ["Pinsan", "Cousin", "PEEN-san"],
      ["Pamangkin", "Niece / Nephew", "pah-MANG-keen"],
      ["Pamangkin na lalaki", "Nephew", "pah-MANG-keen nah lah-LAH-kee"],
      ["Pamangkin na babae", "Niece", "pah-MANG-keen nah bah-BAH-eh"],
      ["Biyenan", "Parent-in-law", "bee-YEH-nan"],
      ["Bayaw", "Brother-in-law", "bah-YAW"],
      ["Hipag", "Sister-in-law", "HEE-pag"],
      ["Manugang", "Son-in-law / Daughter-in-law", "mah-NOO-gang"],
    ]),
  },
  {
    title: "C. Family Relationship Vocabulary",
    items: words([
      ["Kamag-anak", "Relative"],
      ["Magkapatid", "Siblings"],
      ["Mag-asawa", "Married couple / Spouses"],
      ["Magulang at anak", "Parent and child"],
      ["Magkakapatid", "Brothers and sisters / Siblings"],
      ["Panganay", "Eldest child"],
      ["Gitnang anak", "Middle child"],
      ["Bunso", "Youngest child"],
      ["Nag-iisang anak", "Only child"],
      ["Bahagi ng pamilya", "Part of the family"],
      ["Kasama sa pamilya", "Included in the family"],
    ]),
  },
];

// 5. Useful Phrases and Sentences
const situationGroups: LessonExpressionGroup[] = [
  {
    title: "A. Introducing Family Members",
    items: words([
      ["Ito ang nanay ko.", "This is my mother."],
      ["Ito ang tatay ko.", "This is my father."],
      ["Ito ang ate ko.", "This is my older sister."],
      ["Ito ang kuya ko.", "This is my older brother."],
      ["Ito ang bunso namin.", "This is our youngest child or sibling."],
      ["Sila ang pamilya ko.", "They are my family."],
      ["Ito ang mga kapatid ko.", "These are my siblings."],
    ]),
  },
  {
    title: "B. Asking About Someone's Family",
    items: words([
      ["Ilan kayong magkakapatid?", "How many siblings are there in your family?"],
      ["May kapatid ka ba?", "Do you have any siblings?"],
      ["Ilan ang kapatid mo?", "How many siblings do you have?"],
      ["May kuya ka ba?", "Do you have an older brother?"],
      ["May ate ka ba?", "Do you have an older sister?"],
      ["Sino ang bunso sa inyo?", "Who is the youngest among you?"],
      ["Sino ang panganay?", "Who is the eldest?"],
      ["Kumusta ang pamilya mo?", "How is your family?"],
    ]),
  },
  {
    title: "C. Describing Your Family",
    items: words([
      ["Malaki ang pamilya ko.", "My family is big."],
      ["Maliit lang ang pamilya namin.", "Our family is small."],
      ["Apat kaming magkakapatid.", "There are four siblings in our family."],
      ["Nag-iisang anak ako.", "I am an only child."],
      ["Ako ang panganay.", "I am the eldest."],
      ["Ako ang bunso.", "I am the youngest."],
      ["Nakatira kami sa Angeles City.", "We live in Angeles City."],
      ["Mabait ang mga magulang ko.", "My parents are kind."],
      ["Masaya kaming magkakasama.", "We are happy together."],
    ]),
  },
];

export const tagalogLesson5: StructuredLesson = {
  lessonId: "tagalog_5",
  dialect: "tagalog",
  dialectLabel: "Tagalog",
  lessonNumber: 5,
  title: "Family Members and Relationships",
  level: "Beginner",
  unit: "Everyday Vocabulary",

  // 3. Lesson Introduction
  intro: [
    "Family plays an important role in Filipino culture and everyday conversations. People often talk about their parents, siblings, grandparents, relatives, and other family members when introducing themselves or sharing personal experiences.",
    "In Tagalog, there are different words for family members depending on their relationship and sometimes their age.",
    "For example: Nanay – Mother, Tatay – Father, Ate – Older sister, Kuya – Older brother, Bunso – Youngest child or sibling, Lolo – Grandfather, Lola – Grandmother.",
    "In this lesson, learners will practice using these words and constructing simple sentences about their families.",
  ],

  // 2. Learning Objectives
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify common family members using their Tagalog names.",
    "Understand the differences between immediate and extended family relationships.",
    "Use possessive words such as ko, mo, and niya when talking about family members.",
    "Introduce and describe their family using simple Tagalog sentences.",
    "Participate in short conversations about family members and relationships.",
  ],

  expressionsIntro:
    "Tap the speaker to hear each word. Read each syllable clearly.",
  expressionGroups,

  // 4D. Possessive Words and 6. Lesson Proper
  languageNotes: [
    {
      title: "Possessive Words",
      body: [
        "These words help learners express who a family member belongs to or is related to.",
      ],
      table: {
        leftHeading: "Tagalog",
        rightHeading: "English (example)",
        rows: [
          { left: "Ko", right: "My (Nanay ko – My mother)" },
          { left: "Mo", right: "Your (Tatay mo – Your father)" },
          { left: "Niya", right: "His / Her (Ate niya – His/Her older sister)" },
          {
            left: "Namin",
            right: "Our, excluding the listener (Pamilya namin – Our family)",
          },
          {
            left: "Natin",
            right: "Our, including the listener (Pamilya natin – Our family)",
          },
          { left: "Kanila", right: "Their (Bahay nila – Their house)" },
        ],
      },
      examples: sentences([
        ["Mahal ko ang pamilya ko.", "I love my family."],
        ["Kumusta ang pamilya mo?", "How is your family?"],
        ["Malaki ang pamilya nila.", "Their family is big."],
      ]),
      remember:
        "Namin is used when the person being spoken to is not included. Natin is used when the person being spoken to is included.",
    },
    {
      title: "A. Identifying Family Members",
      body: [
        "Learners should understand the basic family relationships before using them in sentences.",
        "Example family structure: Grandparents: Lolo and Lola. Parents: Nanay and Tatay. Children: Ate, Kuya, and Bunso.",
        "A family may have different structures and sizes. Not every family has the same number of parents, children, or relatives.",
      ],
      examples: sentences([
        ["Si Ana ang nanay ko.", "Ana is my mother."],
        ["Si Pedro ang tatay ko.", "Pedro is my father."],
        ["Si Maria ang ate ko.", "Maria is my older sister."],
        ["Si Juan ang kuya ko.", "Juan is my older brother."],
        ["Si Ben ang bunso namin.", "Ben is the youngest in our family."],
      ]),
    },
    {
      title: "B. Understanding Family Positions",
      body: [
        "Filipino has specific words for a person's position among siblings.",
      ],
      table: {
        leftHeading: "Tagalog",
        rightHeading: "English",
        rows: [
          { left: "Panganay", right: "Eldest" },
          { left: "Pangalawa", right: "Second" },
          { left: "Pangatlo", right: "Third" },
          { left: "Pang-apat", right: "Fourth" },
          { left: "Bunso", right: "Youngest" },
        ],
      },
      examples: sentences([
        [
          "Ako ang panganay sa aming magkakapatid.",
          "I am the eldest among our siblings.",
        ],
        [
          "Pangalawa ako sa apat na magkakapatid.",
          "I am the second of four siblings.",
        ],
        [
          "Siya ang bunso sa pamilya nila.",
          "He/She is the youngest in their family.",
        ],
      ]),
    },
    {
      title: "C. Using Possessive Words",
      body: [
        "Possessive words are used to show ownership or relationships.",
        "Pattern: Family member + possessive word. Nanay ko – My mother, Tatay mo – Your father, Kapatid niya – His/Her sibling, Lolo namin – Our grandfather, Pinsan nila – Their cousin.",
      ],
      examples: sentences([
        ["Mabait ang nanay ko.", "My mother is kind."],
        ["Nasa bahay ang kuya mo.", "Your older brother is at home."],
        ["Estudyante ang kapatid niya.", "His/Her sibling is a student."],
        ["Masaya ang pamilya namin.", "Our family is happy."],
      ]),
    },
    {
      title: "D. Asking and Answering About Siblings",
      body: [
        "Use May ... ka ba? to ask whether someone has a particular family member.",
      ],
      examples: sentences([
        [
          "May kapatid ka ba? – Oo, may dalawa akong kapatid.",
          "Do you have siblings? Yes, I have two siblings.",
        ],
        [
          "May kuya ka ba? – Wala akong kuya, pero may ate ako.",
          "Do you have an older brother? I don't have an older brother, but I have an older sister.",
        ],
        [
          "Ilan kayong magkakapatid? – Tatlo kaming magkakapatid.",
          "How many siblings are there in your family? There are three of us.",
        ],
      ]),
    },
    {
      title: "E. Describing Your Family",
      body: [
        "Learners can combine family vocabulary and descriptive words to introduce their families.",
      ],
      examples: sentences([
        [
          "Ang pangalan ko ay Ana. Malaki ang pamilya ko. Mayroon akong nanay, tatay, isang kuya, at isang ate. Ako ang bunso sa aming magkakapatid. Mabait at masayahin ang pamilya ko.",
          "My name is Ana. I have a big family. I have a mother, father, one older brother, and one older sister. I am the youngest among our siblings. My family is kind and cheerful.",
        ],
      ]),
    },
  ],

  situationsTitle: "Useful phrases and sentences",
  situationGroups,

  // 7. Guided Conversations
  conversations: [
    {
      situation: "Conversation 1: Asking About Family",
      lines: dialogue([
        ["Person A", "May kapatid ka ba?", "Do you have siblings?"],
        [
          "Person B",
          "Oo, may dalawa akong kapatid.",
          "Yes, I have two siblings.",
        ],
        ["Person A", "May kuya ka ba?", "Do you have an older brother?"],
        [
          "Person B",
          "Oo, may isa akong kuya at isang ate.",
          "Yes, I have one older brother and one older sister.",
        ],
        ["Person A", "Ikaw ba ang bunso?", "Are you the youngest?"],
        [
          "Person B",
          "Oo, ako ang bunso sa amin.",
          "Yes, I am the youngest among us.",
        ],
      ]),
    },
    {
      situation: "Conversation 2: Introducing Family Members",
      lines: dialogue([
        [
          "Person A",
          "Sino ang kasama mo sa litrato?",
          "Who is with you in the picture?",
        ],
        ["Person B", "Pamilya ko sila.", "They are my family."],
        ["Person A", "Sino ang nasa tabi mo?", "Who is beside you?"],
        ["Person B", "Ang ate ko.", "My older sister."],
        ["Person A", "Ang saya naman!", "How nice!"],
        [
          "Person B",
          "Oo, masaya kaming magkakasama.",
          "Yes, we are happy together.",
        ],
      ]),
    },
    {
      situation: "Conversation 3: Talking About Grandparents",
      lines: dialogue([
        [
          "Person A",
          "Malapit ka ba sa mga lolo at lola mo?",
          "Are you close to your grandparents?",
        ],
        [
          "Person B",
          "Oo, madalas akong bumisita sa kanila.",
          "Yes, I often visit them.",
        ],
        ["Person A", "Saan sila nakatira?", "Where do they live?"],
        [
          "Person B",
          "Sa probinsya sila nakatira.",
          "They live in the province.",
        ],
        [
          "Person A",
          "Ang sarap sigurong bumisita sa kanila.",
          "It must be nice to visit them.",
        ],
      ]),
    },
  ],

  // 8. Activity 1 (answer key: 1 C, 2 A, 3 B, 4 D, 5 E)
  matchActivity: {
    title: "Matching Type",
    instructions:
      "Match the Tagalog words in Column A with their English meanings in Column B.",
    pairs: matchPairs(
      ["Nanay", "Kuya", "Lola", "Pinsan", "Bunso"],
      ["Older brother", "Grandmother", "Mother", "Cousin", "Youngest child"],
      "C A B D E",
    ),
  },

  // 8. Activity 2 (answer key: 1 B, 2 C, 3 B, 4 C, 5 C)
  choiceActivity: {
    title: "Multiple Choice",
    instructions: "Choose the correct answer.",
    questions: [
      choice(
        1,
        "What is the Tagalog word for father?",
        ["Nanay", "Tatay", "Ate", "Lola"],
        "B",
      ),
      choice(
        2,
        "Which word refers to an older sister?",
        ["Bunso", "Kuya", "Ate", "Pinsan"],
        "C",
      ),
      choice(
        3,
        "What does panganay mean?",
        ["Youngest child", "Eldest child", "Cousin", "Grandparent"],
        "B",
      ),
      choice(
        4,
        "What is the Tagalog word for cousin?",
        ["Pamangkin", "Kapatid", "Pinsan", "Asawa"],
        "C",
      ),
      choice(
        5,
        "What does pamilya ko mean?",
        ["Your family", "Their family", "My family", "Our family"],
        "C",
      ),
    ],
  },

  // 8. Activities 3 and 5 share the fill-in step (answers from the
  // document's answer key).
  fillInBlanks: {
    title: "Fill in the Blanks",
    items: [
      ...fills(
        "fill",
        [
          ["Ang ina at ama ay mga ________.", "Magulang"],
          [
            "Ang kapatid na babae na mas matanda sa iyo ay tinatawag na ________.",
            "Ate",
          ],
          [
            "Ang kapatid na lalaki na mas matanda sa iyo ay tinatawag na ________.",
            "Kuya",
          ],
          [
            "Ang anak ng iyong tiyuhin o tiyahin ay iyong ________.",
            "Pinsan",
          ],
          ["Ang pinakabatang anak sa pamilya ay ang ________.", "Bunso"],
        ],
        {
          title: "Fill in the Blanks",
          instructions: "Complete each sentence with the correct Tagalog word.",
        },
      ),
      ...fills(
        "conversation",
        [
          ["Person A: May ________ ka ba?", "kapatid"],
          ["Person B: Oo, may isa akong ________.", "kuya"],
          ["Person A: Ikaw ba ang ________?", "bunso"],
          ["Person B: Hindi, ang ate ko ang ________.", "panganay"],
        ],
        {
          title: "Complete the Conversation",
          instructions: "Fill in the missing words.",
          wordBank: ["panganay", "kapatid", "bunso", "kuya"],
        },
      ),
    ],
  },

  // 8. Activity 4
  arrangeWords: {
    title: "Arrange the Words",
    instructions: "Arrange the words to form a correct Tagalog sentence.",
    items: [
      arrange("1", "ko / ito / nanay / ang", "Ito ang nanay ko."),
      arrange("2", "pamilya / malaki / ko / ang", "Malaki ang pamilya ko."),
      arrange("3", "bunso / ako / ang", "Ako ang bunso."),
      arrange("4", "kapatid / ba / may / ka", "May kapatid ka ba?"),
      arrange(
        "5",
        "mabait / magulang / ang / mga / ko",
        "Mabait ang mga magulang ko.",
      ),
    ],
  },

  // 9. Lesson Assessment (answer key: 1 B, 2 C, 3 B, 4 A, 5 B, 6 B, 7 B,
  // 8 B, 9 C, 10 A)
  assessment: {
    instructions: "Choose the correct answer.",
    passPercent: 70,
    questions: [
      choice(
        1,
        "What is the Tagalog word for mother?",
        ["Tatay", "Nanay", "Kuya", "Lolo"],
        "B",
      ),
      choice(
        2,
        "What does kapatid mean?",
        ["Parent", "Cousin", "Sibling", "Grandparent"],
        "C",
      ),
      choice(
        3,
        "What does bunso mean?",
        ["Eldest child", "Youngest child", "Only child", "Middle child"],
        "B",
      ),
      choice(
        4,
        "What is the Tagalog word for grandfather?",
        ["Lolo", "Lola", "Tito", "Pinsan"],
        "A",
      ),
      choice(
        5,
        "What does pamilya ko mean?",
        ["Your family", "My family", "Their family", "Our family"],
        "B",
      ),
      choice(
        6,
        "Which word refers to a cousin?",
        ["Pamangkin", "Pinsan", "Asawa", "Magulang"],
        "B",
      ),
      choice(
        7,
        "What does panganay mean?",
        ["Youngest", "Eldest", "Cousin", "Sibling"],
        "B",
      ),
      choice(
        8,
        'How do you say "This is my older brother" in Tagalog?',
        [
          "Ito ang ate ko.",
          "Ito ang kuya ko.",
          "Ito ang tatay ko.",
          "Ito ang bunso ko.",
        ],
        "B",
      ),
      choice(
        9,
        "What does Ilan kayong magkakapatid? mean?",
        [
          "How old are you?",
          "Where is your family?",
          "How many siblings are there in your family?",
          "Who is your father?",
        ],
        "C",
      ),
      choice(
        10,
        "What does Mabait ang mga magulang ko mean?",
        [
          "My parents are kind.",
          "My siblings are kind.",
          "My grandparents are kind.",
          "My cousins are kind.",
        ],
        "A",
      ),
    ],
  },

  // 8. Activity 6: Listening and Pronunciation (Parts A–D). English
  // meanings are from the vocabulary and phrase tables; three are
  // inferred (see the review items).
  speaking: {
    title: "Listening and Pronunciation",
    instructions: "Listen to the recorded words and repeat them aloud.",
    phrases: phrases([
      ["Nanay", "Mother / Mom"],
      ["Tatay", "Father / Dad"],
      ["Kapatid", "Sibling / Brother / Sister"],
      ["Ate", "Older sister"],
      ["Kuya", "Older brother"],
      ["Bunso", "Youngest child / Sibling"],
      ["Anak", "Child / Son / Daughter"],
      ["Lolo", "Grandfather"],
      ["Lola", "Grandmother"],
      ["Pinsan", "Cousin"],
      ["Pamangkin", "Niece / Nephew"],
      ["Tiyo", "Uncle"],
      ["Tiya", "Aunt"],
      ["Biyenan", "Parent-in-law"],
      ["Ito ang nanay ko.", "This is my mother."],
      ["Ito ang tatay ko.", "This is my father."],
      ["Ilan kayong magkakapatid?", "How many siblings are there in your family?"],
      ["Ako ang bunso sa aming pamilya.", "I am the youngest in our family."],
      ["Mabait ang mga magulang ko.", "My parents are kind."],
      ["Malaki ang pamilya ko.", "My family is big."],
      ["May dalawa akong kapatid.", "I have two siblings."],
      [
        "Nakatira kami kasama ang aming mga lolo at lola.",
        "We live with our grandparents.",
      ],
      ["Masaya kaming magkakasama.", "We are happy together."],
      ["Mahal ko ang aking pamilya.", "I love my family."],
    ]),
  },

  // 10. Gamification Integration. The document's rows are given to the
  // matching parts of the lesson: family relationship practice = the
  // matching activity; sentence construction = the multiple choice,
  // fill-in and arrange exercises.
  rewards: {
    items: [
      { section: "vocabulary", label: "Vocabulary Review", xp: 10 },
      { section: "match", label: "Family Relationship Practice", xp: 10 },
      { section: "sentences", label: "Sentence Construction", xp: 10 },
      { section: "conversation", label: "Guided Conversation", xp: 10 },
      { section: "assessment", label: "Lesson Assessment", xp: 20 },
    ],
    total: 60,
    badge: {
      name: "Family Connector Badge",
      description:
        "Unlock this badge after completing the lesson assessment with a score of at least 70%.",
    },
    completionRequirement:
      "Finish the vocabulary review, complete the practice activities, and obtain at least 70% in the lesson assessment. Learners who do not reach the passing score may review the lesson and retake the assessment.",
  },
};
