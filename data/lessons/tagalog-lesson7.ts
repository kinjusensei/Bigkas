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

// Tagalog Lesson 7 — copied from "Tagalog 7.pdf". The PDF's tables lost
// their columns, so each Tagalog line was paired with the English and
// pronunciation lines in the same position (the counts match in every
// table). Nothing in the Tagalog was changed.

export const tagalogLesson7ReviewItems = [
  'Activity 4: the tile "ay" (items 1 and 5) is not in the answer key\'s sentences ("Pula ang bola.", "Maliit ang kahon."), so it was left out.',
  'Speaking: "Dilaw ang kulay ng aking lapis." has no English in the document; "My pencil is yellow." is inferred from "Dilaw ang aking lapis."',
  'Speaking: "Bilog ang hugis ng orasan." has no English in the document; "The clock is round." is inferred from "Bilog ang orasan."',
];

// 4. Vocabulary
const expressionGroups: LessonExpressionGroup[] = [
  {
    title: "A. Common Colors",
    intro: [
      "Asul and bughaw are both used for blue. Berde and luntian are both used for green.",
      "Some color names have different everyday and formal or literary uses.",
    ],
    items: words([
      ["Pula", "Red", "POO-lah"],
      ["Asul", "Blue", "AH-sool"],
      ["Bughaw", "Blue", "BOOG-haw"],
      ["Dilaw", "Yellow", "dee-LAW"],
      ["Berde", "Green", "BEHR-deh"],
      ["Luntian", "Green", "loon-TEE-ahn"],
      ["Itim", "Black", "EE-teem"],
      ["Puti", "White", "POO-tee"],
      ["Kahel", "Orange", "KAH-hel"],
      ["Lila", "Purple", "LEE-lah"],
      ["Rosas", "Pink", "ROH-sas"],
      ["Kayumanggi", "Brown", "kah-yoo-MANG-gee"],
      ["Abo", "Gray", "AH-boh"],
      ["Ginto", "Gold", "GEEN-toh"],
      ["Pilak", "Silver", "PEE-lak"],
    ]),
  },
  {
    title: "B. Shades and Color Descriptions",
    intro: [
      "Examples: Mapusyaw na asul – Light blue, Madilim na berde – Dark green, Matingkad na pula – Bright red, Matingkad na rosas – Bright pink.",
    ],
    items: words([
      ["Mapusyaw", "Light / Pale"],
      ["Madilim", "Dark"],
      ["Matingkad", "Vivid / Bright"],
      ["Malinaw", "Clear"],
      ["Makulay", "Colorful"],
      ["Maputla", "Pale"],
      ["Maitim", "Dark-colored"],
      ["Maputi", "White / Fair-colored, depending on context"],
    ]),
  },
  {
    title: "C. Basic Shapes",
    items: words([
      ["Bilog", "Circle / Round", "BEE-log"],
      ["Kuwadrado", "Square", "koo-wah-DRAH-doh"],
      ["Parihaba", "Rectangle", "pah-ree-HAH-bah"],
      ["Tatsulok", "Triangle", "taht-SOO-lok"],
      ["Oval", "Oval", "OH-val"],
      ["Diyamante", "Diamond", "dee-yah-MAHN-teh"],
      ["Bituin", "Star", "bee-TOO-een"],
      ["Puso", "Heart", "POO-soh"],
      ["Gasuklay", "Crescent", "gah-soo-KLIE"],
      ["Pentagono", "Pentagon", "pehn-tah-GOH-noh"],
      ["Hexagono", "Hexagon", "hehk-sah-GOH-noh"],
    ]),
  },
  {
    title: "D. Descriptive Vocabulary",
    items: words([
      ["Kulay", "Color"],
      ["Hugis", "Shape"],
      ["Sukat", "Size / Measurement"],
      ["Malaki", "Big"],
      ["Maliit", "Small"],
      ["Mahaba", "Long"],
      ["Maikli", "Short"],
      ["Malapad", "Wide"],
      ["Makitid", "Narrow"],
      ["Pantay", "Even / Level"],
      ["Makinis", "Smooth"],
      ["Magaspang", "Rough"],
      ["Bagay", "Object / Thing"],
      ["Larawan", "Picture"],
      ["Guhit", "Line / Drawing"],
      ["Disenyo", "Design"],
    ]),
  },
  {
    title: "E. Common Objects and Their Colors or Shapes",
    items: words([
      ["Bola", "Ball"],
      ["Aklat", "Book"],
      ["Papel", "Paper"],
      ["Lapis", "Pencil"],
      ["Mesa", "Table"],
      ["Pinto", "Door"],
      ["Bintana", "Window"],
      ["Orasan", "Clock"],
      ["Barya", "Coin"],
      ["Kahon", "Box"],
      ["Bandila", "Flag"],
      ["Bituin", "Star"],
    ]),
  },
];

// 5. Useful Phrases and Sentences
const situationGroups: LessonExpressionGroup[] = [
  {
    title: "A. Asking About Colors",
    items: words([
      ["Anong kulay ito?", "What color is this?"],
      ["Pula ang kulay nito.", "Its color is red."],
      ["Anong kulay ang paborito mo?", "What is your favorite color?"],
      ["Paborito ko ang asul.", "My favorite color is blue."],
      ["Gusto ko ang kulay berde.", "I like the color green."],
      ["Mayroon ka bang pulang lapis?", "Do you have a red pencil?"],
    ]),
  },
  {
    title: "B. Asking About Shapes",
    items: words([
      ["Anong hugis ito?", "What shape is this?"],
      ["Bilog ang hugis nito.", "Its shape is round."],
      ["Ano ang hugis ng bola?", "What is the shape of a ball?"],
      ["Kuwadrado ang hugis ng kahon.", "The box is square-shaped."],
      [
        "Ilang gilid mayroon ang tatsulok?",
        "How many sides does a triangle have?",
      ],
    ]),
  },
  {
    title: "C. Describing Objects",
    items: words([
      ["Malaki ang pulang bola.", "The red ball is big."],
      ["Maliit ang asul na kahon.", "The blue box is small."],
      ["Bilog ang orasan.", "The clock is round."],
      ["Parihaba ang pinto.", "The door is rectangular."],
      ["Dilaw ang aking lapis.", "My pencil is yellow."],
      ["Mayroon akong itim na bag.", "I have a black bag."],
    ]),
  },
];

export const tagalogLesson7: StructuredLesson = {
  lessonId: "tagalog_7",
  dialect: "tagalog",
  dialectLabel: "Tagalog",
  lessonNumber: 7,
  title: "Colors and Shapes",
  level: "Beginner",
  unit: "Everyday Vocabulary",

  // 3. Lesson Introduction
  intro: [
    "Colors and shapes are part of our everyday surroundings. We see them in clothes, school supplies, buildings, food, toys, and many other objects.",
    "In Tagalog, colors are called mga kulay, while shapes are called mga hugis.",
    "For example: Pula – Red, Asul – Blue, Dilaw – Yellow, Bilog – Circle, Kuwadrado – Square, Tatsulok – Triangle.",
    "Learning these words helps learners describe objects and communicate what they see around them.",
  ],

  // 2. Learning Objectives
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify and pronounce common colors in Tagalog.",
    "Recognize basic geometric shapes using their Tagalog names.",
    "Describe the colors and shapes of familiar objects.",
    "Ask and answer simple questions about colors and shapes.",
    "Construct basic sentences using descriptive words.",
  ],

  expressionsIntro:
    "Tap the speaker to hear each word. Read each syllable clearly.",
  expressionGroups,

  // 6. Lesson Proper
  languageNotes: [
    {
      title: "A. Identifying Colors",
      body: [
        "To ask about an object's color, use: Anong kulay ito? To answer, use: [Color] ang kulay nito.",
        "Learners can also place the color before the object when describing it: Pulang bola – Red ball, Asul na bag – Blue bag, Dilaw na lapis – Yellow pencil, Itim na sapatos – Black shoes.",
      ],
      examples: sentences([
        ["Pula ang kulay nito.", "Its color is red."],
        ["Dilaw ang kulay nito.", "Its color is yellow."],
        ["Berde ang kulay nito.", "Its color is green."],
      ]),
      remember:
        "When a color word comes before a noun, its form may change depending on the ending of the word: Pula + bola = Pulang bola, Asul + bag = Asul na bag, Dilaw + lapis = Dilaw na lapis. The linking word na is commonly used between descriptive words and nouns. Some words ending in a vowel use -ng instead.",
    },
    {
      title: "B. Identifying Shapes",
      body: [
        "To ask about the shape of an object, use: Anong hugis ito? To answer, use: [Shape] ang hugis nito.",
        "Learners should also recognize the basic properties of common shapes.",
      ],
      table: {
        leftHeading: "Shape",
        rightHeading: "Number of sides · Description",
        rows: [
          { left: "Bilog", right: "0 straight sides · Round, with no corners" },
          { left: "Tatsulok", right: "3 · Three sides and three corners" },
          { left: "Kuwadrado", right: "4 · Four equal sides" },
          { left: "Parihaba", right: "4 · Four sides, with opposite sides equal" },
          { left: "Pentagono", right: "5 · Five sides" },
          { left: "Hexagono", right: "6 · Six sides" },
        ],
      },
      examples: sentences([
        ["Bilog ang hugis nito.", "Its shape is round."],
        ["Kuwadrado ang hugis nito.", "Its shape is square."],
        ["Tatsulok ang hugis nito.", "Its shape is triangular."],
      ]),
    },
    {
      title: "C. Describing Objects Using Colors and Shapes",
      body: [
        "Learners can combine color and shape vocabulary to describe familiar objects.",
      ],
      examples: sentences([
        [
          "Pula ang bola at bilog ang hugis nito.",
          "The ball is red and round.",
        ],
        [
          "Parihaba ang papel at puti ang kulay nito.",
          "The paper is rectangular and white.",
        ],
        ["Dilaw ang bituin sa larawan.", "The star in the picture is yellow."],
        ["Itim ang bag ko at malaki ito.", "My bag is black and big."],
        ["Maliit ang asul na kahon.", "The blue box is small."],
      ]),
    },
    {
      title: "D. Using Descriptive Words",
      body: [
        "Descriptive words help learners provide additional information about an object: Malaking mesa – Big table, Maliit na bola – Small ball, Mahabang lapis – Long pencil, Maikling guhit – Short line, Malapad na pinto – Wide door, Makitid na daan – Narrow road.",
      ],
      examples: sentences([
        ["Malaki ang mesa namin.", "Our table is big."],
        ["Maliit ang aking lapis.", "My pencil is small."],
        ["Mahaba ang ruler ko.", "My ruler is long."],
      ]),
    },
  ],

  situationsTitle: "Useful phrases and sentences",
  situationGroups,

  // 7. Guided Conversations
  conversations: [
    {
      situation: "Conversation 1: Asking About a Favorite Color",
      lines: dialogue([
        [
          "Person A",
          "Anong kulay ang paborito mo?",
          "What is your favorite color?",
        ],
        ["Person B", "Paborito ko ang asul.", "My favorite color is blue."],
        ["Person A", "Bakit mo gusto ang asul?", "Why do you like blue?"],
        [
          "Person B",
          "Dahil maganda ito sa paningin ko.",
          "Because it looks beautiful to me.",
        ],
        ["Person A", "Gusto ko rin ang asul!", "I also like blue!"],
      ]),
    },
    {
      situation: "Conversation 2: Identifying Shapes",
      lines: dialogue([
        ["Person A", "Anong hugis ito?", "What shape is this?"],
        ["Person B", "Tatsulok ang hugis nito.", "It is triangular."],
        ["Person A", "Ilang gilid mayroon ito?", "How many sides does it have?"],
        ["Person B", "Mayroon itong tatlong gilid.", "It has three sides."],
        ["Person A", "Tama!", "That's right!"],
      ]),
    },
    {
      situation: "Conversation 3: Describing Objects",
      lines: dialogue([
        ["Person A", "Ano ang nasa mesa?", "What is on the table?"],
        [
          "Person B",
          "May pulang bola at asul na kahon.",
          "There is a red ball and a blue box.",
        ],
        ["Person A", "Anong hugis ng bola?", "What is the shape of the ball?"],
        ["Person B", "Bilog ang hugis nito.", "It is round."],
        ["Person A", "Paano naman ang kahon?", "How about the box?"],
        ["Person B", "Kuwadrado ang hugis nito.", "It is square-shaped."],
      ]),
    },
  ],

  // 8. Activity 1 (answer key: 1 C, 2 D, 3 B, 4 E, 5 A)
  matchActivity: {
    title: "Matching Type",
    instructions:
      "Match the Tagalog words in Column A with their English meanings in Column B.",
    pairs: matchPairs(
      ["Pula", "Dilaw", "Asul", "Bilog", "Tatsulok"],
      ["Triangle", "Blue", "Red", "Yellow", "Circle"],
      "C D B E A",
    ),
  },

  // 8. Activity 2 (answer key: 1 B, 2 C, 3 B, 4 C, 5 C)
  choiceActivity: {
    title: "Multiple Choice",
    instructions: "Choose the correct answer.",
    questions: [
      choice(
        1,
        "What is the Tagalog word for green?",
        ["Pula", "Berde", "Dilaw", "Itim"],
        "B",
      ),
      choice(
        2,
        "Which shape has three sides?",
        ["Bilog", "Kuwadrado", "Tatsulok", "Parihaba"],
        "C",
      ),
      choice(
        3,
        "What does puti mean?",
        ["Black", "White", "Gray", "Brown"],
        "B",
      ),
      choice(
        4,
        "What is the Tagalog word for rectangle?",
        ["Bilog", "Tatsulok", "Parihaba", "Kuwadrado"],
        "C",
      ),
      choice(
        5,
        "What does malaki mean?",
        ["Small", "Long", "Big", "Narrow"],
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
          ["Ang kulay ng saging ay karaniwang ________.", "Dilaw"],
          ["Ang kulay ng uling ay ________.", "Itim"],
          ["Ang hugis na may tatlong gilid ay ________.", "Tatsulok"],
          ["Ang hugis na walang tuwid na gilid ay ________.", "Bilog"],
          ["Ang kabaligtaran ng malaki ay ________.", "Maliit"],
        ],
        {
          title: "Fill in the Blanks",
          instructions: "Complete each sentence using the correct Tagalog word.",
        },
      ),
      ...fills(
        "object",
        [
          ["A coin ________", "Bilog"],
          ["A triangular road warning sign ________", "Tatsulok"],
          ["A standard rectangular sheet of paper ________", "Parihaba"],
          ["A square floor tile ________", "Kuwadrado"],
          ["A round wall clock ________", "Bilog"],
        ],
        {
          title: "Identify the Object",
          instructions: "Choose the most appropriate shape for each object.",
          wordBank: ["Bilog", "Tatsulok", "Parihaba", "Kuwadrado"],
        },
      ),
    ],
  },

  // 8. Activity 4 (see the review items for the left-out tiles)
  arrangeWords: {
    title: "Arrange the Words",
    instructions: "Arrange the words to form a correct Tagalog sentence.",
    items: [
      arrange("1", "pula / bola / ang", "Pula ang bola."),
      arrange("2", "kulay / ito / anong", "Anong kulay ito?"),
      arrange("3", "hugis / bilog / ang / nito", "Bilog ang hugis nito."),
      arrange("4", "ko / asul / bag / ang", "Asul ang bag ko."),
      arrange("5", "maliit / kahon / ang", "Maliit ang kahon."),
    ],
  },

  // 9. Lesson Assessment (answer key: 1 B, 2 C, 3 D, 4 B, 5 A, 6 C, 7 B,
  // 8 B, 9 A, 10 C)
  assessment: {
    instructions: "Choose the correct answer.",
    passPercent: 70,
    questions: [
      choice(
        1,
        "What is the Tagalog word for red?",
        ["Dilaw", "Pula", "Berde", "Asul"],
        "B",
      ),
      choice(2, "What does itim mean?", ["White", "Brown", "Black", "Gray"], "C"),
      choice(
        3,
        "Which shape has four equal sides?",
        ["Parihaba", "Tatsulok", "Bilog", "Kuwadrado"],
        "D",
      ),
      choice(
        4,
        "What does Anong kulay ito? mean?",
        [
          "What shape is this?",
          "What color is this?",
          "How big is this?",
          "What is this called?",
        ],
        "B",
      ),
      choice(
        5,
        "What is the Tagalog word for circle?",
        ["Bilog", "Kuwadrado", "Tatsulok", "Parihaba"],
        "A",
      ),
      choice(6, "What does maliit mean?", ["Big", "Wide", "Small", "Long"], "C"),
      choice(
        7,
        "Which word means purple?",
        ["Kahel", "Lila", "Rosas", "Abo"],
        "B",
      ),
      choice(
        8,
        "What does Tatsulok ang hugis nito mean?",
        [
          "Its color is yellow.",
          "It is triangular in shape.",
          "It is round in shape.",
          "Its shape is rectangular.",
        ],
        "B",
      ),
      choice(
        9,
        "What is the Tagalog word for colorful?",
        ["Makulay", "Malaki", "Makitid", "Makinis"],
        "A",
      ),
      choice(
        10,
        "What does Paborito ko ang asul mean?",
        [
          "I dislike blue.",
          "I want a blue object.",
          "My favorite is blue.",
          "My favorite shape is a circle.",
        ],
        "C",
      ),
    ],
  },

  // 8. Activity 6: Listening and Pronunciation (Parts A–D). English
  // meanings are from the vocabulary and phrase tables; two are inferred
  // (see the review items).
  speaking: {
    title: "Listening and Pronunciation",
    instructions: "Listen to the recorded words and repeat them aloud.",
    phrases: phrases([
      ["Pula", "Red"],
      ["Asul", "Blue"],
      ["Dilaw", "Yellow"],
      ["Berde", "Green"],
      ["Itim", "Black"],
      ["Puti", "White"],
      ["Kahel", "Orange"],
      ["Lila", "Purple"],
      ["Bilog", "Circle / Round"],
      ["Kuwadrado", "Square"],
      ["Parihaba", "Rectangle"],
      ["Tatsulok", "Triangle"],
      ["Oval", "Oval"],
      ["Bituin", "Star"],
      ["Puso", "Heart"],
      ["Anong kulay ito?", "What color is this?"],
      ["Anong hugis ito?", "What shape is this?"],
      ["Paborito ko ang asul.", "My favorite color is blue."],
      ["Bilog ang hugis nito.", "Its shape is round."],
      ["Malaki ang pulang bola.", "The red ball is big."],
      ["Dilaw ang kulay ng aking lapis.", "My pencil is yellow."],
      ["Mayroon akong itim na bag.", "I have a black bag."],
      ["Bilog ang hugis ng orasan.", "The clock is round."],
      ["Maliit ang asul na kahon.", "The blue box is small."],
      [
        "Pula ang bola at bilog ang hugis nito.",
        "The ball is red and round.",
      ],
    ]),
  },

  // 10. Gamification Integration. The document's rows are given to the
  // matching parts of the lesson: color identification = the matching
  // activity; shape identification = the multiple choice, fill-in and
  // arrange exercises.
  rewards: {
    items: [
      { section: "vocabulary", label: "Vocabulary Review", xp: 10 },
      { section: "match", label: "Color Identification", xp: 10 },
      { section: "sentences", label: "Shape Identification", xp: 10 },
      { section: "conversation", label: "Guided Conversation", xp: 10 },
      { section: "assessment", label: "Lesson Assessment", xp: 20 },
    ],
    total: 60,
    badge: {
      name: "Color and Shape Explorer Badge",
      description:
        "Unlock this badge after successfully completing the lesson assessment with a score of at least 70%.",
    },
    completionRequirement:
      "Finish the vocabulary review, complete the practice activities, and obtain at least 70% in the lesson assessment. Learners who do not reach the passing score may review the lesson and retake the assessment.",
  },
};
