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

// Kapampangan Lesson 10 — copied from "Kapampangan_Lesson_10.docx", a
// translation of the Tagalog Lesson 10. The words and sentences are
// working translations, not checked by a native speaker. Nothing was
// corrected. Instructions, activities and the assessment keep the
// document's English.
//
// The document marks some phrases "(?)" — the least certain ones, to be
// checked by a native Kapampangan speaker. The marks are left out of what
// learners see; the phrases are listed in kapampanganReviewItems below.

// Phrases the document marks "(?)", exactly as written (without the mark),
// in the document's order.
export const kapampanganReviewItems: string[] = [
  "Ing pamagpakilala king aliwa metung yang kabilang a bage king aldo-aldo a pamagsalita. Istung makilala ke ing abe, magpasyal king eskwelahan, bisitan ing kamag-anak, o salihan ing bayung grupu, ing pamagpakilala makatulung bang gumawa ning relasyun.",
  "Keng Kapampangan, magamit da ding pamagsalita nang Oyni si..., Ya ing..., at Ipakilala ku keka si... istung magpakilala o magsalita tungkul king aliwang tau.",
  "Magulang",
  "Ima",
  "Tatang",
  "Pinsan",
  "Apung lalaki",
  "Apung babai",
  "Kapitbale / Kapit-bale",
  "Edad / Banua",
  "Tiranan",
  "Keya",
  "Ila ya",
  "Ya",
  "Mayap / Mabait",
  "Ipakilala ku keka si Mark.",
  "Ya ing abe ku.",
  "Ya ing kapatad ku.",
  "Ipakilala ku ing pamilya ku.",
  "Makilala mu si Maria.",
  "Ya ing kaklase ku.",
  "Labingwalu a banua ya.",
  "Matira ya king Pampanga.",
  "Mag-aral ya king kolehiyo.",
  "Mikakaluguran yang magbasa.",
  "Ing paburitu nang kulay ya ing asul.",
  "Mayap ya.",
  "Masaya yang tau.",
  "Masipag yang mag-aral.",
  "Mikakaluguran yang tumulung king aliwa.",
  "Tahimik ya pero palakaibigan.",
  "Masaya ku a makilala ka.",
  "Masaya ku mu a makilala ka.",
  "Nukarin ka mibye?",
  "Sana magiging abe tamu.",
  "Salamat king pamagpakilala.",
  "One common way to introduce someone is by using: Oyni si + person's name.",
  "Oyni ing abe kung si Ana. – This is my friend Ana.",
  "Oyni ing kapatad kung si Mark. – This is my sibling Mark.",
  "The word ya is a pronoun that can refer to either a male or female person. Like Tagalog, Kapampangan does not distinguish between \"he\" and \"she\" through this pronoun.",
  "Ya ing maestra ku. – He/She is my teacher.",
  "Mayap ya. – He/She is kind.",
  "Matira ya king Angeles City. – He/She lives in Angeles City.",
  "Example: Abe ku si Ana. Masaya ya. – Ana is my friend. She is cheerful.",
  "Abe na si Ana. – Ana is his/her friend.",
  "Paburitu na ing adobo. – Adobo is his/her favorite.",
  "Ima na si Maria. – Maria is his/her mother.",
  "Oyni ing ima ku. – This is my mother.",
  "Oyni ing tatang ku. – This is my father.",
  "Ya ing ate ku. – She is my older sister.",
  "Ya ing kuya ku. – He is my older brother.",
  "Oyni ing bunsu mung kapatad. – This is our youngest sibling.",
  "Mayap si Carlo. – Carlo is kind.",
  "Masaya si Ana. – Ana is cheerful.",
  "Masipag ing kapatad ku. – My sibling is hardworking.",
  "Tahimik pero matalino si Mark. – Mark is quiet but intelligent.",
  "The word ila refers to two or more people.",
  "Ila ding abe ku. – They are my friends.",
  "Magkaklase la si Ana at Mark. – Ana and Mark are classmates.",
  "Mayap la ding magkapatad. – They are kind siblings.",
  "Matira la king Pampanga. – They live in Pampanga.",
  "Magkaklase kami. – We are classmates. (The listener is not included.)",
  "Magkaabe tamu. – We are friends. (The listener is included.)",
  "Sample Answer: Oyni si Maria. Abe ku ya. Labingsiyam a banua na ya. Matira ya king Angeles City. Estudyante ya king kolehiyo. Palakaibigan at masipag ya.",
];

// Not marked in the document, but worth checking too.
export const kapampanganLesson10Notes: string[] = [
  "Activities 2 and 5 (both multiple choice) share the practice choice step.",
  'Activity 3 item 1: "Si Ana ay __ ku." uses the Tagalog "ay" — kept as written.',
  'Lesson Proper D: "Oyni ing bunsu mung kapatad." is translated "This is our youngest sibling.", but mu is "your" — kept as written.',
  'Speaking: "Ipakilala" has no English in the vocabulary tables; "To introduce" is inferred from "Ipakilala ku keka si Mark. – I will introduce Mark to you."',
  "The document's Beginner Level summary and suggested final assessment are not part of this lesson and were not added.",
];

// 4. Vocabulary
const expressionGroups: LessonExpressionGroup[] = [
  {
    title: "A. People and Relationships",
    items: words([
      ["Tau", "Person", "ta-u"],
      ["Abe / Kaibigan", "Friend", "a-be"],
      ["Kaklase", "Classmate", "kak-la-se"],
      ["Maestru / Maestra", "Teacher", "ma-es-tru"],
      ["Estudyante", "Student", "es-tu-dyan-te"],
      ["Kamag-anak", "Relative", "ka-mag-a-nak"],
      ["Pamilya", "Family", "pa-mil-ya"],
      ["Magulang", "Parent", "ma-gu-lang"],
      ["Ima", "Mother", "i-ma"],
      ["Tatang", "Father", "ta-tang"],
      ["Kapatad", "Sibling", "ka-pa-tad"],
      ["Ate", "Older sister", "a-te"],
      ["Kuya", "Older brother", "ku-ya"],
      ["Bunsu", "Youngest sibling / Child", "bun-su"],
      ["Pinsan", "Cousin", "pin-san"],
      ["Apung lalaki", "Grandfather", "a-pung la-la-ki"],
      ["Apung babai", "Grandmother", "a-pung ba-ba-i"],
      ["Asawa", "Spouse", "a-sa-wa"],
      ["Anak", "Child / Son / Daughter", "a-nak"],
      ["Kapitbale / Kapit-bale", "Neighbor", "ka-pit-ba-le"],
    ]),
  },
  {
    title: "B. Personal Information",
    items: words([
      ["Lagyu", "Name", "lag-yu"],
      ["Edad / Banua", "Age", "e-dad"],
      ["Tiranan", "Residence / Address", "ti-ra-nan"],
      ["Hanapbuhay", "Occupation / Livelihood", "ha-nap-bu-hay"],
      ["Trabahu", "Work / Job", "tra-ba-hu"],
      ["Eskwelahan", "School", "es-kwe-la-han"],
      ["Bansa", "Country", "ban-sa"],
      ["Lungsod", "City", "lung-sod"],
      ["Lalawigan / Probinsya", "Province", "la-la-wi-gan"],
      ["Hilig", "Interest / Hobby", "hi-lig"],
      ["Paburitu", "Favorite", "pa-bu-ri-tu"],
      ["Abe / Kaibigan", "Friend", "a-be"],
    ]),
  },
  {
    title: "C. Pronouns and Expressions",
    items: words([
      ["Ya", "He / She", "ya"],
      ["Ila", "They", "i-la"],
      ["Na", "His / Her", "na"],
      ["Da", "Their / Theirs", "da"],
      ["Keya", "His / Hers (to him/her)", "ke-ya"],
      ["Kami", "We (excluding the listener)", "ka-mi"],
      ["Tamu", "We (including the listener)", "ta-mu"],
      ["Ini / Oyni", "This", "i-ni"],
      ["Ita", "That", "i-ta"],
      ["Ila ya", "They are", "i-la ya"],
      ["Ya", "He / She is", "ya"],
    ]),
  },
  {
    title: "D. Words Used to Describe People",
    items: words([
      ["Mayap / Mabait", "Kind", "ma-yap"],
      ["Masaya", "Cheerful", "ma-sa-ya"],
      ["Tahimik", "Quiet", "ta-hi-mik"],
      ["Palakaibigan", "Friendly", "pa-la-ka-i-bi-gan"],
      ["Masipag", "Hardworking", "ma-si-pag"],
      ["Matulungin", "Helpful", "ma-tu-lu-ngin"],
      ["Matalino", "Intelligent", "ma-ta-li-no"],
      ["Malikhain", "Creative", "ma-lik-ha-in"],
      ["Mapagkakatiwalaan", "Trustworthy", "ma-pag-ka-ka-ti-wa-la-an"],
      ["Mahiyain", "Shy", "ma-hi-ya-in"],
      ["Palakausap", "Easy to talk to", "pa-la-ka-u-sap"],
      ["Masayahin", "Cheerful", "ma-sa-ya-hin"],
    ]),
  },
];

// 5. Useful Phrases and Sentences
const situationGroups: LessonExpressionGroup[] = [
  {
    title: "A. Introducing Someone",
    items: words([
      ["Oyni si Ana.", "This is Ana."],
      ["Ipakilala ku keka si Mark.", "I will introduce Mark to you."],
      ["Ya ing abe ku.", "He/She is my friend."],
      ["Ya ing kapatad ku.", "He/She is my sibling."],
      ["Ipakilala ku ing pamilya ku.", "I am introducing my family."],
      ["Makilala mu si Maria.", "Meet Maria."],
      ["Ya ing kaklase ku.", "He/She is my classmate."],
    ]),
  },
  {
    title: "B. Sharing Information About Someone",
    items: words([
      ["Ing lagyu na ya Carlo.", "His/Her name is Carlo."],
      ["Labingwalu a banua ya.", "He/She is eighteen years old."],
      ["Matira ya king Pampanga.", "He/She lives in Pampanga."],
      ["Estudyante ya.", "He/She is a student."],
      ["Mag-aral ya king kolehiyo.", "He/She studies in college."],
      ["Mikakaluguran yang magbasa.", "He/She likes reading."],
      [
        "Ing paburitu nang kulay ya ing asul.",
        "His/Her favorite color is blue.",
      ],
    ]),
  },
  {
    title: "C. Describing Someone",
    items: words([
      ["Mayap ya.", "He/She is kind."],
      ["Masaya yang tau.", "He/She is a cheerful person."],
      ["Masipag yang mag-aral.", "He/She studies hard."],
      [
        "Mikakaluguran yang tumulung king aliwa.",
        "He/She likes helping others.",
      ],
      ["Tahimik ya pero palakaibigan.", "He/She is quiet but friendly."],
      ["Matalino at malikhain ya.", "He/She is intelligent and creative."],
    ]),
  },
  {
    title: "D. Responding to an Introduction",
    items: words([
      ["Masaya ku a makilala ka.", "Nice to meet you."],
      ["Masaya ku mu a makilala ka.", "Nice to meet you too."],
      ["Kumusta ka?", "How are you?"],
      ["Nanu ing lagyu mu?", "What is your name?"],
      ["Nukarin ka mibye?", "Where are you from?"],
      ["Sana magiging abe tamu.", "I hope we can become friends."],
      ["Salamat king pamagpakilala.", "Thank you for the introduction."],
    ]),
  },
];

export const kapampanganLesson10: StructuredLesson = {
  lessonId: "kapampangan_10",
  dialect: "kapampangan",
  dialectLabel: "Kapampangan",
  lessonNumber: 10,
  title: "Introducing Other People",
  level: "Beginner",
  unit: "Basic Communication",

  // 3. Lesson Introduction
  intro: [
    "Ing pamagpakilala king aliwa metung yang kabilang a bage king aldo-aldo a pamagsalita. Istung makilala ke ing abe, magpasyal king eskwelahan, bisitan ing kamag-anak, o salihan ing bayung grupu, ing pamagpakilala makatulung bang gumawa ning relasyun.",
    "Keng Kapampangan, magamit da ding pamagsalita nang Oyni si..., Ya ing..., at Ipakilala ku keka si... istung magpakilala o magsalita tungkul king aliwang tau.",
    "Ing leksyun a ini makapokus king pamagpakilala ning pamilya, abe, kaklase, at kakilala, kayabe ning simple a impormasyun tungkul keya.",
    "Real-life applications: introducing a friend to another person, introducing family members to visitors, introducing classmates and teachers, describing someone using basic information, and talking about relationships and occupations.",
  ],

  // 2. Learning Objectives
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Introduce another person using simple Kapampangan expressions.",
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
      title: 'A. Introducing Another Person Using "Oyni si..."',
      body: [
        "One common way to introduce someone is by using: Oyni si + person's name.",
        "The expression Oyni si... is commonly used when introducing a person who is present or nearby.",
      ],
      examples: sentences([
        ["Oyni si Ana.", "This is Ana."],
        ["Oyni si Carlo.", "This is Carlo."],
        ["Oyni si Maria.", "This is Maria."],
        ["Oyni ing abe kung si Ana.", "This is my friend Ana."],
        ["Oyni ing kapatad kung si Mark.", "This is my sibling Mark."],
      ]),
    },
    {
      title: 'B. Talking About Someone Using "Ya"',
      body: [
        'The word ya is a pronoun that can refer to either a male or female person. Like Tagalog, Kapampangan does not distinguish between "he" and "she" through this pronoun.',
        "Learners can use ya to avoid repeatedly mentioning a person's name.",
      ],
      examples: sentences([
        ["Estudyante ya.", "He/She is a student."],
        ["Ya ing maestra ku.", "He/She is my teacher."],
        ["Mayap ya.", "He/She is kind."],
        ["Matira ya king Angeles City.", "He/She lives in Angeles City."],
        [
          "Abe ku si Ana. Masaya ya.",
          "Ana is my friend. She is cheerful.",
        ],
      ]),
    },
    {
      title: 'C. Using "Na" to Show Possession or Relationship',
      body: ['The word na can mean "his" or "her", depending on context.'],
      examples: sentences([
        ["Ing lagyu na ya Mark.", "His/Her name is Mark."],
        ["Abe na si Ana.", "Ana is his/her friend."],
        ["Paburitu na ing adobo.", "Adobo is his/her favorite."],
        ["Ima na si Maria.", "Maria is his/her mother."],
      ]),
    },
    {
      title: "D. Introducing Family Members",
      examples: sentences([
        ["Oyni ing ima ku.", "This is my mother."],
        ["Oyni ing tatang ku.", "This is my father."],
        ["Ya ing ate ku.", "She is my older sister."],
        ["Ya ing kuya ku.", "He is my older brother."],
        ["Oyni ing bunsu mung kapatad.", "This is our youngest sibling."],
      ]),
    },
    {
      title: "E. Describing Someone Using Adjectives",
      examples: sentences([
        ["Mayap si Carlo.", "Carlo is kind."],
        ["Masaya si Ana.", "Ana is cheerful."],
        ["Masipag ing kapatad ku.", "My sibling is hardworking."],
        ["Tahimik pero matalino si Mark.", "Mark is quiet but intelligent."],
      ]),
      remember:
        "Learners should remember that descriptions should be respectful and appropriate.",
    },
    {
      title: 'F. Using "Ila" When Introducing More Than One Person',
      body: ["The word ila refers to two or more people."],
      examples: sentences([
        ["Ila ding abe ku.", "They are my friends."],
        ["Magkaklase la si Ana at Mark.", "Ana and Mark are classmates."],
        ["Mayap la ding magkapatad.", "They are kind siblings."],
        ["Matira la king Pampanga.", "They live in Pampanga."],
      ]),
    },
    {
      title: 'G. Difference Between "Kami" and "Tamu"',
      body: ['Both kami and tamu mean "we", but they are used differently.'],
      table: {
        leftHeading: "Kapampangan",
        rightHeading: "Usage",
        rows: [
          { left: "Kami (We)", right: "Excludes the person being spoken to" },
          { left: "Tamu (We)", right: "Includes the person being spoken to" },
        ],
      },
      examples: sentences([
        [
          "Magkaklase kami.",
          "We are classmates. (The listener is not included.)",
        ],
        ["Magkaabe tamu.", "We are friends. (The listener is included.)"],
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
          "Mark, atin kung buring ipakilala keka.",
          "Mark, I want to introduce someone to you.",
        ],
        ["Mark", "Sinu ya?", "Who is he?"],
        [
          "Anna",
          "Oyni si Carlo. Abe ku ya.",
          "This is Carlo. He is my friend.",
        ],
        [
          "Carlo",
          "Kumusta, Mark! Masaya ku a makilala ka.",
          "Hello, Mark! Nice to meet you.",
        ],
        [
          "Mark",
          "Kumusta mu, Carlo. Masaya ku mu a makilala ka.",
          "Hello too, Carlo. Nice to meet you too.",
        ],
        ["Anna", "Magkaklase kami ni Carlo.", "Carlo and I are classmates."],
        [
          "Mark",
          "Ah, ganyan ba? Nukarin kayu mag-aral?",
          "Oh, is that so? What school do you attend?",
        ],
        [
          "Carlo",
          "Mag-aral kami king metung a kolehiyo.",
          "We study at the same college.",
        ],
      ]),
    },
    {
      situation: "Dialogue 2: Introducing Family Members",
      lines: dialogue([
        [
          "Mia",
          "Oyni ing pamilya ku. Ila ding magulang ku.",
          "This is my family. They are my parents.",
        ],
        [
          "Lara",
          "Masaya naman! Sinu ing atiu king bandi mu?",
          "How nice! Who is beside you?",
        ],
        [
          "Mia",
          "Ya ing kuya ku. Ing lagyu na ya Daniel.",
          "He is my older brother. His name is Daniel.",
        ],
        ["Lara", "Pilan na ya banua?", "How old is he?"],
        [
          "Mia",
          "Duang pulu't adwang banua na ya.",
          "He is twenty-two years old.",
        ],
        ["Lara", "Nanu ing gagawan na?", "What does he do?"],
        [
          "Mia",
          "Magtrabahu ya king metung a kompanya.",
          "He works at a company.",
        ],
        [
          "Lara",
          "Masaya ku a makilala ing pamilya mu.",
          "I am happy to meet your family.",
        ],
      ]),
    },
    {
      situation: "Dialogue 3: Introducing a Classmate",
      lines: dialogue([
        [
          "Teacher",
          "Mayap a abak, klase. Atin tamung bayung kaklase ngeni.",
          "Good morning, class. We have a new classmate today.",
        ],
        ["Students", "Mayap a abak, pu!", "Good morning!"],
        [
          "Teacher",
          "Ipakilala tamu ya. Nanu ing lagyu mu?",
          "Let's introduce him. What is your name?",
        ],
        ["New Student", "Aku pu si Joshua.", "I am Joshua."],
        [
          "Teacher",
          "Pilan na ka banua, Joshua?",
          "How old are you, Joshua?",
        ],
        ["Joshua", "Labingwalu a banua ku, pu.", "I am eighteen years old."],
        ["Teacher", "Nukarin ka mibye?", "Where are you from?"],
        ["Joshua", "Mibye ku pu king Tarlac.", "I am from Tarlac."],
        [
          "Teacher",
          "Mayap. Sana magiging abe kayu.",
          "Good. I hope you become friends.",
        ],
        ["Students", "Maligayang pagdatang, Joshua!", "Welcome, Joshua!"],
      ]),
    },
  ],

  // 8. Activity 1 (answer key: 1 C, 2 F, 3 D, 4 G, 5 A, 6 H, 7 E, 8 B)
  matchActivity: {
    title: "Match the Vocabulary",
    instructions: "Match each Kapampangan word with its English meaning.",
    pairs: matchPairs(
      ["Abe", "Kaklase", "Magulang", "Pinsan", "Kapitbale", "Ya", "Ila", "Masipag"],
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
          "Oyni ing abe ku.",
          "Nukarin ya ing abe ku?",
          "Obat ing abe ku?",
          "Kapilan ing abe ku?",
        ],
        "A",
      ),
      choice(
        2,
        'Which pronoun means "He" or "She"?',
        ["Ila", "Kami", "Ya", "Tamu"],
        "C",
      ),
      choice(
        3,
        'What does "Na" mean in the appropriate possessive context?',
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
          "Ya ing abe ku.",
          "Ila ding abe ku.",
          "Oyni ing abe ku.",
          "Kami ing abe na.",
        ],
        "B",
      ),
      choice(
        6,
        "You want to introduce your friend Ana to Mark.",
        [
          "Oyni si Ana, abe ku.",
          "Nukarin ya si Ana?",
          "Obat si Ana?",
          "Pilan si Ana?",
        ],
        "A",
      ),
      choice(
        7,
        "You want to introduce your older brother.",
        [
          "Oyni ing kuya ku.",
          "Oyni ing kapitbale ku.",
          "Oyni ing maestru ku.",
          "Oyni ing pinsan ku.",
        ],
        "A",
      ),
      choice(
        8,
        "You want to describe your friend as kind.",
        [
          "Mayap ya ing abe ku.",
          "Malayu ya ing abe ku.",
          "Mamahal ya ing abe ku.",
          "Matas ya ing abe ku.",
        ],
        "A",
      ),
      choice(
        9,
        "You are introducing two classmates.",
        [
          "Ya ing kaklase ku.",
          "Ila ding kaklase ku.",
          "Oyni ing kaklase ku.",
          "Ya ing kaklase na.",
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
        ["Si Ana ay __ ku.", "Abe"],
        ["__ ing kapatad ku.", "Ya"],
        ["__ ding kaklase ku.", "Ila"],
        ["__ yang mag-aral aldo-aldo.", "Masipag"],
        ["Ing lagyu __ ya Mark.", "Na"],
      ],
      {
        title: "Fill in the Blanks",
        instructions: "Choose the correct word from the word bank.",
        wordBank: ["Ya", "Ila", "Abe", "Masipag", "Na"],
      },
    ),
  },

  // 8. Activity 4
  arrangeWords: {
    title: "Arrange the Words",
    instructions: "Arrange the words to form a correct Kapampangan sentence.",
    items: [
      arrange("1", "si / Oyni / Ana", "Oyni si Ana."),
      arrange("2", "ku / Ya / abe / ing", "Ya ing abe ku."),
      arrange("3", "Mayap / Carlo / si", "Mayap si Carlo."),
      arrange("4", "ing / Ila / pamilya / ku", "Ila ing pamilya ku."),
      arrange(
        "5",
        "lagyu / na / Ing / Maria / ya",
        "Ing lagyu na ya Maria.",
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
        'What does "Abe" mean?',
        ["Teacher", "Friend", "Neighbor", "Relative"],
        "B",
      ),
      choice(
        2,
        'Which Kapampangan pronoun means "They"?',
        ["Ya", "Kami", "Ila", "Na"],
        "C",
      ),
      choice(
        3,
        "What is the correct expression for introducing someone named Ana?",
        ["Oyni si Ana.", "Nukarin ya si Ana?", "Obat si Ana?", "Kapilan si Ana?"],
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
          "Ya ing kapatad ku.",
          "Ya ing maestra ku.",
          "Ya ing kapitbale ku.",
          "Ya ing abe ku.",
        ],
        "A",
      ),
      choice(
        6,
        "Which pronoun excludes the person being spoken to?",
        ["Tamu", "Kami", "Ila", "Ya"],
        "B",
      ),
      choice(
        7,
        'What does "Ing lagyu na ya Carlo" mean?',
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
          "Antabayan yu.",
          "Masaya ku a makilala ka.",
          "Ali ku asabi.",
        ],
        "C",
      ),
      choice(
        9,
        "Which sentence correctly describes a friendly person?",
        [
          "Masaya ya ing bale.",
          "Palakaibigan ya.",
          "Maragul ya ing punu.",
          "Mabilis ya ing sasakyan.",
        ],
        "B",
      ),
      choice(
        10,
        'Which sentence means "They are my classmates"?',
        [
          "Ya ing kaklase ku.",
          "Ila ding kaklase ku.",
          "Oyni ing maestru ku.",
          "Kami ding maestru da.",
        ],
        "B",
      ),
    ],
  },

  // 8. Activity 6: Listening and Pronunciation. English meanings are from
  // the vocabulary and phrase tables; one is inferred (see
  // kapampanganLesson10Notes).
  speaking: {
    title: "Listening and Pronunciation",
    instructions:
      "Listen to the recorded words and sentences, then repeat them aloud.",
    note: "Focus on clear pronunciation of each syllable, proper pacing, correct use of ya and ila, and natural pronunciation of complete sentences.",
    phrases: phrases([
      ["Kamag-anak", "Relative"],
      ["Kapitbale", "Neighbor"],
      ["Palakaibigan", "Friendly"],
      ["Mapagkakatiwalaan", "Trustworthy"],
      ["Ipakilala", "To introduce"],
      ["Oyni ing abe ku.", "This is my friend."],
      ["Ya ing kapatad ku.", "He/She is my sibling."],
      ["Masaya ku a makilala ka.", "Nice to meet you."],
    ]),
  },

  // 8. Activity 7 (profile card with the learner's own sentences; no
  // screen yet).
  extraActivities: [
    {
      title: "Introduce Someone",
      instructions:
        "The application displays a character or profile card containing basic information. Learners must introduce Maria using at least three Kapampangan sentences.",
      items: [
        "Name: Maria",
        "Age: 19",
        "Relationship: Friend",
        "Location: Angeles City",
        "Occupation: College Student",
        "Personality: Friendly and hardworking",
      ],
      note: "Sample answer: Oyni si Maria. Abe ku ya. Labingsiyam a banua na ya. Matira ya king Angeles City. Estudyante ya king kolehiyo. Palakaibigan at masipag ya. (This is Maria. She is my friend. She is nineteen years old. She lives in Angeles City. She is a college student. She is friendly and hardworking.)",
    },
  ],

  // 10. Gamification Integration. Same mapping as the Tagalog Lesson 10:
  // practice activities = the multiple choice, fill-in and arrange
  // exercises; the matching activity has no XP row in the document.
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
