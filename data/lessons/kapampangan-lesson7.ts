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

// Kapampangan Lesson 7 — copied from "Kapampangan_Lesson_7.docx", a
// translation of the Tagalog Lesson 7. The color, shape and sentence
// translations are working translations, not checked by a native speaker.
// Nothing was corrected. Instructions, activities and the assessment keep
// the document's English.
//
// The document marks some phrases "(?)" — the least certain ones, to be
// checked by a native Kapampangan speaker. The marks are left out of what
// learners see; the phrases are listed in kapampanganReviewItems below.

// Phrases the document marks "(?)", exactly as written (without the mark),
// in the document's order.
export const kapampanganReviewItems: string[] = [
  "Ing kulay at hugis bayu la ning aldo-aldo a kapaligiran tamu. Makit tamu la king damit, gamit king eskwela, bale, pamangan, laruan, at aliwang bagay.",
  "Keng Kapampangan, ding kulay ila ding kulay, at ding hugis ila ding hugis.",
  "Bughaw",
  "Luntian",
  "Maitim",
  "Ginto / Bulawan",
  "Mapusyaw a asul – Light blue",
  "Madilim a berde – Dark green",
  "Matingkad a pula – Bright red",
  "Matingkad a rosas – Bright pink",
  "Pusu",
  "Nanung kulay ini?",
  "Pula ing kulay na.",
  "Nanung kulay ing paburitu mu?",
  "Paburitu ku ing asul.",
  "Buri ku ing kulay berde.",
  "Atin kang pulang lapis?",
  "Nanung hugis ini?",
  "Bilog ing hugis na.",
  "Nanu ing hugis ning bula?",
  "Kuwadrado ing hugis ning kahun.",
  "Pilan a gilid ing atin ing tatsulok?",
  "Maragul ya ing pulang bula.",
  "Maliit ya ing asul a kahun.",
  "Bilog ya ing orasan.",
  "Parihaba ya ing pintu.",
  "Dilaw ya ing lapis ku.",
  "Atin kung maitim a bag.",
  "To ask about an object's color, use: Nanung kulay ini?",
  "To answer, use: [Color] ing kulay na.",
  "Pula ing kulay na. – Its color is red.",
  "Dilaw ing kulay na. – Its color is yellow.",
  "Berde ing kulay na. – Its color is green.",
  "Pulang bula – Red ball",
  "Asul a bag – Blue bag",
  "Dilaw a lapis – Yellow pencil",
  "Maitim a sapatus – Black shoes",
  "To ask about the shape of an object, use: Nanung hugis ini?",
  "To answer, use: [Shape] ing hugis na.",
  "Bilog ing hugis na. – Its shape is round.",
  "Kuwadrado ing hugis na. – Its shape is square.",
  "Tatsulok ing hugis na. – Its shape is triangular.",
  "Pula ya ing bula at bilog ing hugis na. – The ball is red and round.",
  "Parihaba ya ing papel at puti ing kulay na. – The paper is rectangular and white.",
  "Dilaw ya ing bituin king larawan. – The star in the picture is yellow.",
  "Maitim ya ing bag ku at maragul ya. – My bag is black and big.",
  "Maliit ya ing asul a kahun. – The blue box is small.",
  "Maragul a mesa – Big table",
  "Maliit a bula – Small ball",
  "Mahabang lapis – Long pencil",
  "Maikling guhit – Short line",
  "Malapad a pintu – Wide door",
  "Makitid a dalan – Narrow road",
  "Maragul ya ing mesa mi. – Our table is big.",
  "Maliit ya ing lapis ku. – My pencil is small.",
  "Mahaba ya ing ruler ku. – My ruler is long.",
];

// Not marked in the document, but worth checking too.
export const kapampanganLesson7Notes: string[] = [
  'Introduction: "Keng Kapampangan, ding kulay ila ding kulay, at ding hugis ila ding hugis." reads as "colors are colors, shapes are shapes" — kept as written (the Tagalog says colors are called mga kulay and shapes mga hugis).',
  'Vocabulary: "Maitim" is given as both Black (Common Colors) and Dark-colored (Shades).',
  'Speaking: "Dilaw ing kulay ning lapis ku." has no English in the document; "My pencil is yellow." is inferred from "Dilaw ya ing lapis ku."',
  'Speaking: "Bilog ing hugis ning orasan." has no English in the document; "The clock is round." is inferred from "Bilog ya ing orasan."',
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
      ["Pula", "Red", "PU-la"],
      ["Asul", "Blue", "A-sul"],
      ["Bughaw", "Blue", "BUG-haw"],
      ["Dilaw", "Yellow", "di-LAW"],
      ["Berde", "Green", "BER-de"],
      ["Luntian", "Green", "lun-TI-an"],
      ["Maitim", "Black", "ma-I-tim"],
      ["Puti", "White", "PU-ti"],
      ["Kahel", "Orange", "KA-hel"],
      ["Lila", "Purple", "LI-la"],
      ["Rosas", "Pink", "RO-sas"],
      ["Kayumanggi", "Brown", "ka-yu-MANG-gi"],
      ["Abu", "Gray", "A-bu"],
      ["Ginto / Bulawan", "Gold", "GIN-to / bu-LA-wan"],
      ["Pilak", "Silver", "PI-lak"],
    ]),
  },
  {
    title: "B. Shades and Color Descriptions",
    intro: [
      "Examples: Mapusyaw a asul – Light blue, Madilim a berde – Dark green, Matingkad a pula – Bright red, Matingkad a rosas – Bright pink.",
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
      ["Bilog", "Circle / Round", "BI-log"],
      ["Kuwadrado", "Square", "ku-wa-DRA-do"],
      ["Parihaba", "Rectangle", "pa-ri-HA-ba"],
      ["Tatsulok", "Triangle", "tat-SU-lok"],
      ["Oval", "Oval", "O-val"],
      ["Diyamante", "Diamond", "di-ya-MAN-te"],
      ["Bituin", "Star", "bi-TU-in"],
      ["Pusu", "Heart", "PU-su"],
      ["Gasuklay", "Crescent", "ga-suk-LAY"],
      ["Pentagono", "Pentagon", "pen-ta-GO-no"],
      ["Hexagono", "Hexagon", "hek-sa-GO-no"],
    ]),
  },
  {
    title: "D. Descriptive Vocabulary",
    items: words([
      ["Kulay", "Color"],
      ["Hugis", "Shape"],
      ["Sukat", "Size / Measurement"],
      ["Maragul", "Big"],
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
      ["Bula", "Ball"],
      ["Libru", "Book"],
      ["Papel", "Paper"],
      ["Lapis", "Pencil"],
      ["Mesa", "Table"],
      ["Pintu", "Door"],
      ["Bintana", "Window"],
      ["Orasan", "Clock"],
      ["Barya", "Coin"],
      ["Kahun", "Box"],
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
      ["Nanung kulay ini?", "What color is this?"],
      ["Pula ing kulay na.", "Its color is red."],
      ["Nanung kulay ing paburitu mu?", "What is your favorite color?"],
      ["Paburitu ku ing asul.", "My favorite color is blue."],
      ["Buri ku ing kulay berde.", "I like the color green."],
      ["Atin kang pulang lapis?", "Do you have a red pencil?"],
    ]),
  },
  {
    title: "B. Asking About Shapes",
    items: words([
      ["Nanung hugis ini?", "What shape is this?"],
      ["Bilog ing hugis na.", "Its shape is round."],
      ["Nanu ing hugis ning bula?", "What is the shape of a ball?"],
      ["Kuwadrado ing hugis ning kahun.", "The box is square-shaped."],
      [
        "Pilan a gilid ing atin ing tatsulok?",
        "How many sides does a triangle have?",
      ],
    ]),
  },
  {
    title: "C. Describing Objects",
    items: words([
      ["Maragul ya ing pulang bula.", "The red ball is big."],
      ["Maliit ya ing asul a kahun.", "The blue box is small."],
      ["Bilog ya ing orasan.", "The clock is round."],
      ["Parihaba ya ing pintu.", "The door is rectangular."],
      ["Dilaw ya ing lapis ku.", "My pencil is yellow."],
      ["Atin kung maitim a bag.", "I have a black bag."],
    ]),
  },
];

export const kapampanganLesson7: StructuredLesson = {
  lessonId: "kapampangan_7",
  dialect: "kapampangan",
  dialectLabel: "Kapampangan",
  lessonNumber: 7,
  title: "Colors and Shapes",
  level: "Beginner",
  unit: "Everyday Vocabulary",

  // 3. Lesson Introduction
  intro: [
    "Ing kulay at hugis bayu la ning aldo-aldo a kapaligiran tamu. Makit tamu la king damit, gamit king eskwela, bale, pamangan, laruan, at aliwang bagay.",
    "Keng Kapampangan, ding kulay ila ding kulay, at ding hugis ila ding hugis.",
    "For example: Pula – Red, Asul – Blue, Dilaw – Yellow, Bilog – Circle, Kuwadrado – Square, Tatsulok – Triangle.",
    "Ing pamag-aral ning salitang ini makatulung king pamaglawe ning bagay at pamagsalita tungkul king nakikit tamu.",
  ],

  // 2. Learning Objectives
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify and pronounce common colors in Kapampangan.",
    "Recognize basic geometric shapes using their Kapampangan names.",
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
        "To ask about an object's color, use: Nanung kulay ini? To answer, use: [Color] ing kulay na.",
        "Learners can also place the color before the object when describing it: Pulang bula – Red ball, Asul a bag – Blue bag, Dilaw a lapis – Yellow pencil, Maitim a sapatus – Black shoes.",
      ],
      examples: sentences([
        ["Pula ing kulay na.", "Its color is red."],
        ["Dilaw ing kulay na.", "Its color is yellow."],
        ["Berde ing kulay na.", "Its color is green."],
      ]),
      remember:
        "When a color word comes before a noun, its form may change depending on the ending of the word: Pula + bula = Pulang bula, Asul + bag = Asul a bag, Dilaw + lapis = Dilaw a lapis. The linker a is used between descriptive words and nouns. Words ending in a vowel use -ng instead. (This is the same linker pattern as in Tagalog, with a replacing na.)",
    },
    {
      title: "B. Identifying Shapes",
      body: [
        "To ask about the shape of an object, use: Nanung hugis ini? To answer, use: [Shape] ing hugis na.",
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
        ["Bilog ing hugis na.", "Its shape is round."],
        ["Kuwadrado ing hugis na.", "Its shape is square."],
        ["Tatsulok ing hugis na.", "Its shape is triangular."],
      ]),
    },
    {
      title: "C. Describing Objects Using Colors and Shapes",
      examples: sentences([
        [
          "Pula ya ing bula at bilog ing hugis na.",
          "The ball is red and round.",
        ],
        [
          "Parihaba ya ing papel at puti ing kulay na.",
          "The paper is rectangular and white.",
        ],
        [
          "Dilaw ya ing bituin king larawan.",
          "The star in the picture is yellow.",
        ],
        ["Maitim ya ing bag ku at maragul ya.", "My bag is black and big."],
        ["Maliit ya ing asul a kahun.", "The blue box is small."],
      ]),
    },
    {
      title: "D. Using Descriptive Words",
      body: [
        "Maragul a mesa – Big table, Maliit a bula – Small ball, Mahabang lapis – Long pencil, Maikling guhit – Short line, Malapad a pintu – Wide door, Makitid a dalan – Narrow road.",
      ],
      examples: sentences([
        ["Maragul ya ing mesa mi.", "Our table is big."],
        ["Maliit ya ing lapis ku.", "My pencil is small."],
        ["Mahaba ya ing ruler ku.", "My ruler is long."],
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
          "Nanung kulay ing paburitu mu?",
          "What is your favorite color?",
        ],
        ["Person B", "Paburitu ku ing asul.", "My favorite color is blue."],
        ["Person A", "Nanung dahilan buri mu ing asul?", "Why do you like blue?"],
        [
          "Person B",
          "Uling magaganda ya king mata ku.",
          "Because it looks beautiful to me.",
        ],
        ["Person A", "Buri ku mu ing asul!", "I also like blue!"],
      ]),
    },
    {
      situation: "Conversation 2: Identifying Shapes",
      lines: dialogue([
        ["Person A", "Nanung hugis ini?", "What shape is this?"],
        ["Person B", "Tatsulok ing hugis na.", "It is triangular."],
        [
          "Person A",
          "Pilan a gilid ing atin ya?",
          "How many sides does it have?",
        ],
        ["Person B", "Atin yang atlung gilid.", "It has three sides."],
        ["Person A", "Tutu!", "That's right!"],
      ]),
    },
    {
      situation: "Conversation 3: Describing Objects",
      lines: dialogue([
        ["Person A", "Nanu ing atiu king mesa?", "What is on the table?"],
        [
          "Person B",
          "Atin pulang bula at asul a kahun.",
          "There is a red ball and a blue box.",
        ],
        [
          "Person A",
          "Nanung hugis ning bula?",
          "What is the shape of the ball?",
        ],
        ["Person B", "Bilog ing hugis na.", "It is round."],
        ["Person A", "Nung ing kahun?", "How about the box?"],
        ["Person B", "Kuwadrado ing hugis na.", "It is square-shaped."],
      ]),
    },
  ],

  // 8. Activity 1 (answer key: 1 C, 2 D, 3 B, 4 E, 5 A)
  matchActivity: {
    title: "Matching Type",
    instructions:
      "Match the Kapampangan words in Column A with their English meanings in Column B.",
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
        "What is the Kapampangan word for green?",
        ["Pula", "Berde", "Dilaw", "Maitim"],
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
        "What is the Kapampangan word for rectangle?",
        ["Bilog", "Tatsulok", "Parihaba", "Kuwadrado"],
        "C",
      ),
      choice(
        5,
        "What does maragul mean?",
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
          ["Ing kulay ning saging ya ing ____.", "Dilaw"],
          ["Ing kulay ning uling ya ing ____.", "Maitim"],
          ["Ing hugis a atin atlung gilid ya ing ____.", "Tatsulok"],
          ["Ing hugis a alang tuwid a gilid ya ing ____.", "Bilog"],
          ["Ing kabaligtaran ning maragul ya ing ____.", "Maliit"],
        ],
        {
          title: "Fill in the Blanks",
          instructions:
            "Complete each sentence using the correct Kapampangan word.",
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

  // 8. Activity 4
  arrangeWords: {
    title: "Arrange the Words",
    instructions: "Arrange the words to form a correct Kapampangan sentence.",
    items: [
      arrange("1", "pula / bula / ing / ya", "Pula ya ing bula."),
      arrange("2", "kulay / ini / nanung", "Nanung kulay ini?"),
      arrange("3", "hugis / bilog / ing / na", "Bilog ing hugis na."),
      arrange("4", "ku / asul / bag / ing", "Asul ing bag ku."),
      arrange("5", "maliit / kahun / ing / ya", "Maliit ya ing kahun."),
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
        "What is the Kapampangan word for red?",
        ["Dilaw", "Pula", "Berde", "Asul"],
        "B",
      ),
      choice(
        2,
        "What does maitim mean?",
        ["White", "Brown", "Black", "Gray"],
        "C",
      ),
      choice(
        3,
        "Which shape has four equal sides?",
        ["Parihaba", "Tatsulok", "Bilog", "Kuwadrado"],
        "D",
      ),
      choice(
        4,
        "What does Nanung kulay ini? mean?",
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
        "What is the Kapampangan word for circle?",
        ["Bilog", "Kuwadrado", "Tatsulok", "Parihaba"],
        "A",
      ),
      choice(
        6,
        "What does maliit mean?",
        ["Big", "Wide", "Small", "Long"],
        "C",
      ),
      choice(
        7,
        "Which word means purple?",
        ["Kahel", "Lila", "Rosas", "Abu"],
        "B",
      ),
      choice(
        8,
        "What does Tatsulok ing hugis na mean?",
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
        "What is the Kapampangan word for colorful?",
        ["Makulay", "Maragul", "Makitid", "Makinis"],
        "A",
      ),
      choice(
        10,
        "What does Paburitu ku ing asul mean?",
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
  // (see kapampanganLesson7Notes).
  speaking: {
    title: "Listening and Pronunciation",
    instructions: "Listen to the recorded words and repeat them aloud.",
    phrases: phrases([
      ["Pula", "Red"],
      ["Asul", "Blue"],
      ["Dilaw", "Yellow"],
      ["Berde", "Green"],
      ["Maitim", "Black"],
      ["Puti", "White"],
      ["Kahel", "Orange"],
      ["Lila", "Purple"],
      ["Bilog", "Circle / Round"],
      ["Kuwadrado", "Square"],
      ["Parihaba", "Rectangle"],
      ["Tatsulok", "Triangle"],
      ["Oval", "Oval"],
      ["Bituin", "Star"],
      ["Pusu", "Heart"],
      ["Nanung kulay ini?", "What color is this?"],
      ["Nanung hugis ini?", "What shape is this?"],
      ["Paburitu ku ing asul.", "My favorite color is blue."],
      ["Bilog ing hugis na.", "Its shape is round."],
      ["Maragul ya ing pulang bula.", "The red ball is big."],
      ["Dilaw ing kulay ning lapis ku.", "My pencil is yellow."],
      ["Atin kung maitim a bag.", "I have a black bag."],
      ["Bilog ing hugis ning orasan.", "The clock is round."],
      ["Maliit ya ing asul a kahun.", "The blue box is small."],
      [
        "Pula ya ing bula at bilog ing hugis na.",
        "The ball is red and round.",
      ],
    ]),
  },

  // 10. Gamification Integration. Same mapping as the Tagalog Lesson 7:
  // color identification = the matching activity; shape identification =
  // the multiple choice, fill-in and arrange exercises.
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
