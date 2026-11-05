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

// Kapampangan Lesson 5 — copied from "Kapampangan_Lesson_5.docx", a
// translation of the Tagalog Lesson 5. Per the document, the family words
// and sentences are working translations, not checked by a native
// speaker. Instructions, activities and the assessment keep the
// document's English.
//
// The document marks the least certain phrases "(?)". The marks are left
// out of what learners see; the phrases are listed in
// kapampanganReviewItems below.

// Phrases the document marks "(?)", exactly as written (without the mark).
export const kapampanganReviewItems: string[] = [
  // 3. Lesson Introduction
  "Maragul ya ing papel ning pamilya king kultura at aldo-aldo a pamagsalita. Madalas pamagsalitaan ning tau ding magulang, kapatad, apu, kamag-anak, at aliwang kayabe king pamilya istung magpakilala ya o magkuwenta ning karanasan.",
  "Ima – Mother",
  "Tatang – Father",
  "Apung lalaki – Grandfather",
  "Apung babai – Grandmother",
  // 4. Vocabulary
  "Ima",
  "Inang",
  "Tatang",
  "Ama",
  "Magulang",
  "Ding magulang",
  "Ima and tatang are commonly used in everyday conversations.",
  "Inang and ama are also used for mother and father, often in more formal contexts.",
  "Apung lalaki",
  "Apung babai",
  "Apu",
  "Pinsan",
  "Pamangkin",
  "Pamangkin a lalaki",
  "Pamangkin a babai",
  "Biyenan",
  "Bayaw",
  "Hipag",
  "Manugang",
  "Magulang at anak",
  "Panganay",
  "Gitnang anak",
  "Nag-iisang anak",
  "Bahagi ning pamilya",
  "Kayabe king pamilya",
  "Ibig ku ing pamilya ku. – I love my family.",
  "Maragul ya ing pamilya da. – Their family is big.",
  // 5. Useful Phrases and Sentences
  "Pilan la kayung magkakapatad?",
  "Pilan la ding kapatad mu?",
  "Sinu ya ing bunsu keng kayu?",
  "Sinu ya ing panganay?",
  "Maragul ya ing pamilya ku.",
  "Maliit la mu ing pamilya mi.",
  "Apat kami magkakapatad.",
  "Nag-iisang anak ku.",
  "Aku ing panganay.",
  "Matira kami king Angeles City.",
  "Mabait ding magulang ku.",
  "Masaya kami a magkayabe.",
  // 6. Lesson Proper
  "Kapampangan has specific words for a person's position among siblings.",
  "Pangadwa",
  "Pangatlu",
  "Pang-apat",
  "Aku ing panganay keng magkakapatad mi. – I am the eldest among our siblings.",
  "Pangadwa ku keng apat a magkakapatad. – I am the second of four siblings.",
  "Ya ing bunsu king pamilya da. – He/She is the youngest in their family.",
  "Mabait ya ing ima ku. – My mother is kind.",
  "Atiu ya king bale ing kuya mu. – Your older brother is at home.",
  "Masaya ya ing pamilya mi. – Our family is happy.",
  "Use Atin ka bang ... ? to ask whether someone has a particular family member.",
  "Ing lagyu ku ay Ana. Maragul ya ing pamilya ku. Atin kung ima, tatang, metung a kuya, at metung a ate. Aku ing bunsu keng magkakapatad mi. Mabait at masaya ya ing pamilya ku.",
];

// Not marked in the document, but worth checking too.
export const kapampanganLesson5Notes: string[] = [
  'Activity 4 item 4: the tiles are "kapatad / ba / atin / ka" but the answer key is "Atin ka bang kapatad?", so the tile "ba" is shown as "bang".',
  'Activity 3 item 1 reads "Ing inang at ama ya ding mag ____." with the answer "Magulang" (kept as written).',
  "Activity 5: the word bank is lowercase, so the answers use the word bank's spelling; the answer key capitalizes them.",
  'Conversation 3 uses "ding apu mu" for "your grandparents", while the vocabulary gives Apu = Grandchild (kept as written).',
  'Speaking: "Aku ing bunsu king pamilya mi." has no English in the document; "I am the youngest in our family." is inferred.',
  'Speaking: "Matira kami a kayabe ding apu mi." has no English in the document; "We live with our grandparents." is inferred from the Tagalog lesson.',
];

// 4. Vocabulary
const expressionGroups: LessonExpressionGroup[] = [
  {
    title: "A. Immediate Family Members",
    intro: [
      "Ima and tatang are commonly used in everyday conversations. Inang and ama are also used for mother and father, often in more formal contexts.",
      "Kapatad is a general word for a sibling. It does not tell whether the sibling is male or female.",
      "Ate refers to an older sister, while kuya refers to an older brother. These terms are also commonly used as respectful forms of address for older people.",
    ],
    items: words([
      ["Pamilya", "Family", "pa-MIL-ya"],
      ["Ima", "Mother / Mom", "I-ma"],
      ["Inang", "Mother", "I-nang"],
      ["Tatang", "Father / Dad", "TA-tang"],
      ["Ama", "Father", "A-ma"],
      ["Magulang", "Parent", "ma-GU-lang"],
      ["Ding magulang", "Parents", "ding ma-GU-lang"],
      ["Anak", "Child / Son / Daughter", "A-nak"],
      ["Anak a lalaki", "Son", "A-nak a la-LA-ki"],
      ["Anak a babai", "Daughter", "A-nak a ba-BA-i"],
      ["Kapatad", "Sibling / Brother / Sister", "ka-PA-tad"],
      ["Ate", "Older sister", "A-te"],
      ["Kuya", "Older brother", "KU-ya"],
      ["Bunsu", "Youngest child / Sibling", "BUN-su"],
      ["Asawa", "Spouse", "a-SA-wa"],
      ["Asawang lalaki", "Husband", "a-SA-wang la-LA-ki"],
      ["Asawang babai", "Wife", "a-SA-wang ba-BA-i"],
    ]),
  },
  {
    title: "B. Extended Family Members",
    items: words([
      ["Apung lalaki", "Grandfather", "A-pung la-LA-ki"],
      ["Apung babai", "Grandmother", "A-pung ba-BA-i"],
      ["Apu", "Grandchild", "A-pu"],
      ["Tiyu / Tito", "Uncle", "TI-yu / TI-to"],
      ["Tiya / Tita", "Aunt", "TI-ya / TI-ta"],
      ["Pinsan", "Cousin", "PIN-san"],
      ["Pamangkin", "Niece / Nephew", "pa-MANG-kin"],
      ["Pamangkin a lalaki", "Nephew", "pa-MANG-kin a la-LA-ki"],
      ["Pamangkin a babai", "Niece", "pa-MANG-kin a ba-BA-i"],
      ["Biyenan", "Parent-in-law", "bi-YE-nan"],
      ["Bayaw", "Brother-in-law", "ba-YAW"],
      ["Hipag", "Sister-in-law", "HI-pag"],
      ["Manugang", "Son-in-law / Daughter-in-law", "ma-NU-gang"],
    ]),
  },
  {
    title: "C. Family Relationship Vocabulary",
    items: words([
      ["Kamag-anak", "Relative"],
      ["Magkapatad", "Siblings"],
      ["Mag-asawa", "Married couple / Spouses"],
      ["Magulang at anak", "Parent and child"],
      ["Magkakapatad", "Brothers and sisters / Siblings"],
      ["Panganay", "Eldest child"],
      ["Gitnang anak", "Middle child"],
      ["Bunsu", "Youngest child"],
      ["Nag-iisang anak", "Only child"],
      ["Bahagi ning pamilya", "Part of the family"],
      ["Kayabe king pamilya", "Included in the family"],
    ]),
  },
];

// 5. Useful Phrases and Sentences
const situationGroups: LessonExpressionGroup[] = [
  {
    title: "A. Introducing Family Members",
    items: words([
      ["Oyni ing ima ku.", "This is my mother."],
      ["Oyni ing tatang ku.", "This is my father."],
      ["Oyni ing ate ku.", "This is my older sister."],
      ["Oyni ing kuya ku.", "This is my older brother."],
      ["Oyni ing bunsu mi.", "This is our youngest child or sibling."],
      ["Ila ing pamilya ku.", "They are my family."],
      ["Oyni ding kapatad ku.", "These are my siblings."],
    ]),
  },
  {
    title: "B. Asking About Someone's Family",
    items: words([
      [
        "Pilan la kayung magkakapatad?",
        "How many siblings are there in your family?",
      ],
      ["Atin kang kapatad?", "Do you have any siblings?"],
      ["Pilan la ding kapatad mu?", "How many siblings do you have?"],
      ["Atin kang kuya?", "Do you have an older brother?"],
      ["Atin kang ate?", "Do you have an older sister?"],
      ["Sinu ya ing bunsu keng kayu?", "Who is the youngest among you?"],
      ["Sinu ya ing panganay?", "Who is the eldest?"],
      ["Kumusta ya ing pamilya mu?", "How is your family?"],
    ]),
  },
  {
    title: "C. Describing Your Family",
    items: words([
      ["Maragul ya ing pamilya ku.", "My family is big."],
      ["Maliit la mu ing pamilya mi.", "Our family is small."],
      ["Apat kami magkakapatad.", "There are four siblings in our family."],
      ["Nag-iisang anak ku.", "I am an only child."],
      ["Aku ing panganay.", "I am the eldest."],
      ["Aku ing bunsu.", "I am the youngest."],
      ["Matira kami king Angeles City.", "We live in Angeles City."],
      ["Mabait ding magulang ku.", "My parents are kind."],
      ["Masaya kami a magkayabe.", "We are happy together."],
    ]),
  },
];

export const kapampanganLesson5: StructuredLesson = {
  lessonId: "kapampangan_5",
  dialect: "kapampangan",
  dialectLabel: "Kapampangan",
  lessonNumber: 5,
  title: "Family Members and Relationships",
  level: "Beginner",
  unit: "Everyday Vocabulary",

  // 3. Lesson Introduction
  intro: [
    "Maragul ya ing papel ning pamilya king kultura at aldo-aldo a pamagsalita. Madalas pamagsalitaan ning tau ding magulang, kapatad, apu, kamag-anak, at aliwang kayabe king pamilya istung magpakilala ya o magkuwenta ning karanasan.",
    "Keng Kapampangan, atin aliwang lagyu para king miyembru ning pamilya, depende king relasyun at minsan king edad.",
    "For example: Ima – Mother, Tatang – Father, Ate – Older sister, Kuya – Older brother, Bunsu – Youngest child or sibling, Apung lalaki – Grandfather, Apung babai – Grandmother.",
    "Keng leksyun a ini, magpraktis ding mag-aral a gamitan ding salitang ini at gumawa ning simple a pamagsalita tungkul king pamilya da.",
  ],

  // 2. Learning Objectives
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify common family members using their Kapampangan names.",
    "Understand the differences between immediate and extended family relationships.",
    "Use possessive words such as ku, mu, and na when talking about family members.",
    "Introduce and describe their family using simple Kapampangan sentences.",
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
        leftHeading: "Kapampangan",
        rightHeading: "English (example)",
        rows: [
          { left: "Ku", right: "My (Ima ku – My mother)" },
          { left: "Mu", right: "Your (Tatang mu – Your father)" },
          { left: "Na", right: "His / Her (Ate na – His/Her older sister)" },
          {
            left: "Mi",
            right: "Our, excluding the listener (Pamilya mi – Our family)",
          },
          {
            left: "Tamu",
            right: "Our, including the listener (Pamilya tamu – Our family)",
          },
          { left: "Da", right: "Their (Bale da – Their house)" },
        ],
      },
      examples: sentences([
        ["Ibig ku ing pamilya ku.", "I love my family."],
        ["Kumusta ya ing pamilya mu?", "How is your family?"],
        ["Maragul ya ing pamilya da.", "Their family is big."],
      ]),
      remember:
        "Mi is used when the person being spoken to is not included. Tamu is used when the person being spoken to is included.",
    },
    {
      title: "A. Identifying Family Members",
      body: [
        "Learners should understand the basic family relationships before using them in sentences.",
        "Example family structure: Grandparents: Apung lalaki and Apung babai. Parents: Ima and Tatang. Children: Ate, Kuya, and Bunsu.",
        "A family may have different structures and sizes. Not every family has the same number of parents, children, or relatives.",
      ],
      examples: sentences([
        ["Si Ana ing ima ku.", "Ana is my mother."],
        ["Si Pedro ing tatang ku.", "Pedro is my father."],
        ["Si Maria ing ate ku.", "Maria is my older sister."],
        ["Si Juan ing kuya ku.", "Juan is my older brother."],
        ["Si Ben ing bunsu mi.", "Ben is the youngest in our family."],
      ]),
    },
    {
      title: "B. Understanding Family Positions",
      body: [
        "Kapampangan has specific words for a person's position among siblings.",
      ],
      table: {
        leftHeading: "Kapampangan",
        rightHeading: "English",
        rows: [
          { left: "Panganay", right: "Eldest" },
          { left: "Pangadwa", right: "Second" },
          { left: "Pangatlu", right: "Third" },
          { left: "Pang-apat", right: "Fourth" },
          { left: "Bunsu", right: "Youngest" },
        ],
      },
      examples: sentences([
        [
          "Aku ing panganay keng magkakapatad mi.",
          "I am the eldest among our siblings.",
        ],
        [
          "Pangadwa ku keng apat a magkakapatad.",
          "I am the second of four siblings.",
        ],
        [
          "Ya ing bunsu king pamilya da.",
          "He/She is the youngest in their family.",
        ],
      ]),
    },
    {
      title: "C. Using Possessive Words",
      body: [
        "Possessive words are used to show ownership or relationships.",
        "Pattern: Family member + possessive word. Ima ku – My mother, Tatang mu – Your father, Kapatad na – His/Her sibling, Apung lalaki mi – Our grandfather, Pinsan da – Their cousin.",
      ],
      examples: sentences([
        ["Mabait ya ing ima ku.", "My mother is kind."],
        ["Atiu ya king bale ing kuya mu.", "Your older brother is at home."],
        ["Estudyante ya ing kapatad na.", "His/Her sibling is a student."],
        ["Masaya ya ing pamilya mi.", "Our family is happy."],
      ]),
    },
    {
      title: "D. Asking and Answering About Siblings",
      body: [
        "Use Atin ka bang ... ? to ask whether someone has a particular family member.",
      ],
      examples: sentences([
        [
          "Atin kang kapatad? – Wa, atin kung adwang kapatad.",
          "Do you have siblings? Yes, I have two siblings.",
        ],
        [
          "Atin kang kuya? – Alang kuya ku, pero atin kung ate.",
          "Do you have an older brother? I don't have an older brother, but I have an older sister.",
        ],
        [
          "Pilan la kayung magkakapatad? – Atlu kami magkakapatad.",
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
          "Ing lagyu ku ay Ana. Maragul ya ing pamilya ku. Atin kung ima, tatang, metung a kuya, at metung a ate. Aku ing bunsu keng magkakapatad mi. Mabait at masaya ya ing pamilya ku.",
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
        ["Person A", "Atin kang kapatad?", "Do you have siblings?"],
        [
          "Person B",
          "Wa, atin kung adwang kapatad.",
          "Yes, I have two siblings.",
        ],
        ["Person A", "Atin kang kuya?", "Do you have an older brother?"],
        [
          "Person B",
          "Wa, atin kung metung a kuya at metung a ate.",
          "Yes, I have one older brother and one older sister.",
        ],
        ["Person A", "Ika ba ing bunsu?", "Are you the youngest?"],
        [
          "Person B",
          "Wa, aku ing bunsu keng kami.",
          "Yes, I am the youngest among us.",
        ],
      ]),
    },
    {
      situation: "Conversation 2: Introducing Family Members",
      lines: dialogue([
        [
          "Person A",
          "Sinu ya ing kayabe mu king litrato?",
          "Who is with you in the picture?",
        ],
        ["Person B", "Pamilya ku ila.", "They are my family."],
        ["Person A", "Sinu ya ing keng bandi mu?", "Who is beside you?"],
        ["Person B", "Ing ate ku.", "My older sister."],
        ["Person A", "Masaya naman!", "How nice!"],
        [
          "Person B",
          "Wa, masaya kami a magkayabe.",
          "Yes, we are happy together.",
        ],
      ]),
    },
    {
      situation: "Conversation 3: Talking About Grandparents",
      lines: dialogue([
        [
          "Person A",
          "Malapit ka ba keng ding apu mu?",
          "Are you close to your grandparents?",
        ],
        [
          "Person B",
          "Wa, madalas kung bisitan ya.",
          "Yes, I often visit them.",
        ],
        ["Person A", "Nokarin la matira?", "Where do they live?"],
        [
          "Person B",
          "Keng probinsya la matira.",
          "They live in the province.",
        ],
        [
          "Person A",
          "Mayap sigurung bisitan ya.",
          "It must be nice to visit them.",
        ],
      ]),
    },
  ],

  // 8. Activity 1 (answer key: 1 C, 2 A, 3 B, 4 D, 5 E)
  matchActivity: {
    title: "Matching Type",
    instructions:
      "Match the Kapampangan words in Column A with their English meanings in Column B.",
    pairs: matchPairs(
      ["Ima", "Kuya", "Apung babai", "Pinsan", "Bunsu"],
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
        "What is the Kapampangan word for father?",
        ["Ima", "Tatang", "Ate", "Apung babai"],
        "B",
      ),
      choice(
        2,
        "Which word refers to an older sister?",
        ["Bunsu", "Kuya", "Ate", "Pinsan"],
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
        "What is the Kapampangan word for cousin?",
        ["Pamangkin", "Kapatad", "Pinsan", "Asawa"],
        "C",
      ),
      choice(
        5,
        'What does "pamilya ku" mean?',
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
          ["Ing inang at ama ya ding mag ____.", "Magulang"],
          ["Ing kapatad a babai a mas matua keka ya ing ____.", "Ate"],
          ["Ing kapatad a lalaki a mas matua keka ya ing ____.", "Kuya"],
          ["Ing anak ning tiyu o tiya mu ya ing ____ mu.", "Pinsan"],
          ["Ing pekamudang anak king pamilya ya ing ____.", "Bunsu"],
        ],
        {
          title: "Fill in the Blanks",
          instructions:
            "Complete each sentence with the correct Kapampangan word.",
        },
      ),
      ...fills(
        "conversation",
        [
          ["Person A: Atin kang ____?", "kapatad"],
          ["Person B: Wa, atin kung metung a ____.", "kuya"],
          ["Person A: Ika ba ing ____?", "bunsu"],
          ["Person B: Ali, ing ate ku ing ____.", "panganay"],
        ],
        {
          title: "Complete the Conversation",
          instructions: "Fill in the missing words.",
          wordBank: ["panganay", "kapatad", "bunsu", "kuya"],
        },
      ),
    ],
  },

  // 8. Activity 4 (see kapampanganLesson5Notes for item 4)
  arrangeWords: {
    title: "Arrange the Words",
    instructions: "Arrange the words to form a correct Kapampangan sentence.",
    items: [
      arrange("1", "ku / oyni / ima / ing", "Oyni ing ima ku."),
      arrange(
        "2",
        "maragul / pamilya / ku / ing / ya",
        "Maragul ya ing pamilya ku.",
      ),
      arrange("3", "bunsu / aku / ing", "Aku ing bunsu."),
      arrange("4", "kapatad / bang / atin / ka", "Atin ka bang kapatad?"),
      arrange("5", "mabait / magulang / ding / ku", "Mabait ding magulang ku."),
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
        "What is the Kapampangan word for mother?",
        ["Tatang", "Ima", "Kuya", "Apung lalaki"],
        "B",
      ),
      choice(
        2,
        "What does kapatad mean?",
        ["Parent", "Cousin", "Sibling", "Grandparent"],
        "C",
      ),
      choice(
        3,
        "What does bunsu mean?",
        ["Eldest child", "Youngest child", "Only child", "Middle child"],
        "B",
      ),
      choice(
        4,
        "What is the Kapampangan word for grandfather?",
        ["Apung lalaki", "Apung babai", "Tito", "Pinsan"],
        "A",
      ),
      choice(
        5,
        'What does "pamilya ku" mean?',
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
        'How do you say "This is my older brother" in Kapampangan?',
        [
          "Oyni ing ate ku.",
          "Oyni ing kuya ku.",
          "Oyni ing tatang ku.",
          "Oyni ing bunsu ku.",
        ],
        "B",
      ),
      choice(
        9,
        'What does "Pilan la kayung magkakapatad?" mean?',
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
        'What does "Mabait ding magulang ku" mean?',
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
  // meanings are from the vocabulary and phrase tables; two are inferred
  // (see kapampanganLesson5Notes).
  speaking: {
    title: "Listening and Pronunciation",
    instructions: "Listen to the recorded words and repeat them aloud.",
    phrases: phrases([
      ["Ima", "Mother / Mom"],
      ["Tatang", "Father / Dad"],
      ["Kapatad", "Sibling / Brother / Sister"],
      ["Ate", "Older sister"],
      ["Kuya", "Older brother"],
      ["Bunsu", "Youngest child / Sibling"],
      ["Anak", "Child / Son / Daughter"],
      ["Apung lalaki", "Grandfather"],
      ["Apung babai", "Grandmother"],
      ["Pinsan", "Cousin"],
      ["Pamangkin", "Niece / Nephew"],
      ["Tiyu", "Uncle"],
      ["Tiya", "Aunt"],
      ["Biyenan", "Parent-in-law"],
      ["Oyni ing ima ku.", "This is my mother."],
      ["Oyni ing tatang ku.", "This is my father."],
      [
        "Pilan la kayung magkakapatad?",
        "How many siblings are there in your family?",
      ],
      ["Aku ing bunsu king pamilya mi.", "I am the youngest in our family."],
      ["Mabait ding magulang ku.", "My parents are kind."],
      ["Maragul ya ing pamilya ku.", "My family is big."],
      ["Atin kung adwang kapatad.", "I have two siblings."],
      ["Matira kami a kayabe ding apu mi.", "We live with our grandparents."],
      ["Masaya kami a magkayabe.", "We are happy together."],
      ["Ibig ku ing pamilya ku.", "I love my family."],
    ]),
  },

  // 10. Gamification Integration. Same mapping as the Tagalog Lesson 5:
  // family relationship practice = the matching activity; sentence
  // construction = the multiple choice, fill-in and arrange exercises.
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
