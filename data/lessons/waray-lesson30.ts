import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 30 — imported from "Lesson Plan.pdf", pages 1140–1155.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.
// The practice answers are INFERRED drafts, not from the PDF. See
// docs/waray-draft-answer-keys.md for each answer and how it was found.

export const warayLesson30: StructuredLesson = {
  lessonId: "waray_30",
  dialect: "waray",
  dialectLabel: "Waray",
  lessonNumber: 30,
  title: "Comprehensive Language Assessment",
  level: "Advanced",
  unit: "Unit 3 – Real-Life Communication",
  estimatedDuration: "60–90 minutes",
  prerequisite: "Completion of Lessons 1–29",
  languageVariety: "Contemporary Waray spoken in Western Samar",
  intro: [
    "Throughout the Waray course, learners have studied basic vocabulary, greetings, everyday expressions, sentence construction, grammar, and practical conversations.",
    "They have also practiced describing people and places, expressing opinions, giving explanations, narrating experiences, and participating in different real-life situations.",
    "This final lesson evaluates the knowledge and communication skills developed throughout the course.",
    "The comprehensive assessment consists of several activities covering:",
    "• Vocabulary recognition",
    "• Useful expressions",
    "• Grammar and sentence construction",
    "• Reading comprehension",
    "• Conversational understanding",
    "• Practical communication",
    "The purpose of this assessment is to determine how well learners can understand and apply the Waray language in different situations.",
    "Unlike previous lessons, this assessment combines topics from the entire course rather than introducing a new vocabulary set.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Demonstrate their understanding of Waray vocabulary from the Beginner, Intermediate, and Advanced levels.",
    "Recognize and interpret commonly used Waray expressions and sentences.",
    "Apply appropriate grammar and sentence structures when constructing Waray sentences.",
    "Understand short written conversations and narratives.",
    "Respond appropriately to questions and practical communication situations.",
    "Demonstrate their ability to communicate using Waray in different everyday contexts.",
    "Evaluate their learning progress and identify areas that require further improvement.",
  ],
  extraActivities: [
    {
      title: "Lesson Assessment – Part F – Practical Communication Assessment",
      kind: "assessment",
      instructions: "Complete the following tasks by constructing appropriate Waray responses.",
      items: [
        "These activities evaluate the learner's ability to apply the language rather than simply recognize vocabulary.\nTask A: Self-Introduction\nIntroduce yourself using Waray.\nYour introduction should include:\n• Your name.\n• Where you are from.\n• Your age.\n• One thing you like doing.\nTask B: Asking for Information\nImagine that you are visiting an unfamiliar town.\nConstruct a short dialogue in which you:\n• Ask where the terminal is.\n• Ask how much the fare costs.\n• Ask which vehicle goes to your destination.\n• Thank the person who helps you.\nTask C: Expressing an Opinion\nAnswer the following question in Waray:\nQuestion: Kay ano nga importante an pag-aram hin Waray?\nYour answer should:\n• State your opinion.\n• Provide at least one reason.\n• Include an appropriate connector such as kay or tungod kay.\nTask D: Storytelling\nNarrate a short personal experience in Waray.\nYour narrative should include:\n• A beginning.\n• At least three connected events.\n• A description of your experience.\n• An ending.\nUse appropriate sequence expressions such as siyahan, katapos hito, sunod, and ha kataposan.\nTask E: Situational Response\nRespond appropriately to the following situation:\nYour classmate does not understand an assignment and asks you for help. Explain that you can help and ask which part they do not understand.",
      ],
    },
  ],
  assessment: {
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What does salamat mean?",
        options: [
          {
            key: "A",
            text: "Thank you",
          },
          {
            key: "B",
            text: "Goodbye",
          },
          {
            key: "C",
            text: "Welcome",
          },
          {
            key: "D",
            text: "Sorry",
          },
        ],
        answerKey: "A",
        title: "Part A – Vocabulary Assessment",
        instructions: "Choose the correct English meaning of the Waray word or expression.",
      },
      {
        id: 2,
        prompt: "What does bugto mean?",
        options: [
          {
            key: "A",
            text: "Parent",
          },
          {
            key: "B",
            text: "Sibling",
          },
          {
            key: "C",
            text: "Grandparent",
          },
          {
            key: "D",
            text: "Cousin",
          },
        ],
        answerKey: "B",
        title: "Part A – Vocabulary Assessment",
        instructions: "Choose the correct English meaning of the Waray word or expression.",
      },
      {
        id: 3,
        prompt: "What does kan-on mean?",
        options: [
          {
            key: "A",
            text: "Uncooked rice",
          },
          {
            key: "B",
            text: "Cooked rice",
          },
          {
            key: "C",
            text: "Bread",
          },
          {
            key: "D",
            text: "Fish",
          },
        ],
        answerKey: "B",
        title: "Part A – Vocabulary Assessment",
        instructions: "Choose the correct English meaning of the Waray word or expression.",
      },
      {
        id: 4,
        prompt: "What does pira mean?",
        options: [
          {
            key: "A",
            text: "Where",
          },
          {
            key: "B",
            text: "When",
          },
          {
            key: "C",
            text: "How many or how much",
          },
          {
            key: "D",
            text: "Who",
          },
        ],
        answerKey: "C",
        title: "Part A – Vocabulary Assessment",
        instructions: "Choose the correct English meaning of the Waray word or expression.",
      },
      {
        id: 5,
        prompt: "What does eskwelahan mean?",
        options: [
          {
            key: "A",
            text: "Hospital",
          },
          {
            key: "B",
            text: "School",
          },
          {
            key: "C",
            text: "Market",
          },
          {
            key: "D",
            text: "Office",
          },
        ],
        answerKey: "B",
        title: "Part A – Vocabulary Assessment",
        instructions: "Choose the correct English meaning of the Waray word or expression.",
      },
      {
        id: 6,
        prompt: "What does pahuway mean?",
        options: [
          {
            key: "A",
            text: "Rest",
          },
          {
            key: "B",
            text: "Work",
          },
          {
            key: "C",
            text: "Study",
          },
          {
            key: "D",
            text: "Travel",
          },
        ],
        answerKey: "A",
        title: "Part A – Vocabulary Assessment",
        instructions: "Choose the correct English meaning of the Waray word or expression.",
      },
      {
        id: 7,
        prompt: "What does maupay an buot describe?",
        options: [
          {
            key: "A",
            text: "A kind-hearted person",
          },
          {
            key: "B",
            text: "A physically tall person",
          },
          {
            key: "C",
            text: "A hungry person",
          },
          {
            key: "D",
            text: "A wealthy person",
          },
        ],
        answerKey: "A",
        title: "Part A – Vocabulary Assessment",
        instructions: "Choose the correct English meaning of the Waray word or expression.",
      },
      {
        id: 8,
        prompt: "What does buruhaton mean?",
        options: [
          {
            key: "A",
            text: "Task or responsibility",
          },
          {
            key: "B",
            text: "Celebration",
          },
          {
            key: "C",
            text: "Family",
          },
          {
            key: "D",
            text: "Destination",
          },
        ],
        answerKey: "A",
        title: "Part A – Vocabulary Assessment",
        instructions: "Choose the correct English meaning of the Waray word or expression.",
      },
      {
        id: 9,
        prompt: "What does kahapon mean?",
        options: [
          {
            key: "A",
            text: "Tomorrow",
          },
          {
            key: "B",
            text: "Yesterday",
          },
          {
            key: "C",
            text: "Today",
          },
          {
            key: "D",
            text: "Later",
          },
        ],
        answerKey: "B",
        title: "Part A – Vocabulary Assessment",
        instructions: "Choose the correct English meaning of the Waray word or expression.",
      },
      {
        id: 10,
        prompt: "What does matinabangon mean?",
        options: [
          {
            key: "A",
            text: "Helpful",
          },
          {
            key: "B",
            text: "Lazy",
          },
          {
            key: "C",
            text: "Angry",
          },
          {
            key: "D",
            text: "Sleepy",
          },
        ],
        answerKey: "A",
        title: "Part A – Vocabulary Assessment",
        instructions: "Choose the correct English meaning of the Waray word or expression.",
      },
      {
        id: 11,
        prompt: "Kumusta ka?",
        options: [
          {
            key: "A",
            text: "How are you?",
          },
          {
            key: "B",
            text: "What is your name?",
          },
          {
            key: "C",
            text: "Where are you going?",
          },
          {
            key: "D",
            text: "How old are you?",
          },
        ],
        answerKey: "A",
        title: "Part B – Useful Expressions Assessment",
        instructions: "Choose the correct interpretation of each Waray expression.",
      },
      {
        id: 12,
        prompt: "Diri ako maaram.",
        options: [
          {
            key: "A",
            text: "I understand.",
          },
          {
            key: "B",
            text: "I do not know.",
          },
          {
            key: "C",
            text: "I am happy.",
          },
          {
            key: "D",
            text: "I am hungry.",
          },
        ],
        answerKey: "B",
        title: "Part B – Useful Expressions Assessment",
        instructions: "Choose the correct interpretation of each Waray expression.",
      },
      {
        id: 13,
        prompt: "Hain an eskwelahan?",
        options: [
          {
            key: "A",
            text: "Where is the school?",
          },
          {
            key: "B",
            text: "Who is the teacher?",
          },
          {
            key: "C",
            text: "When is the class?",
          },
          {
            key: "D",
            text: "What is the lesson?",
          },
        ],
        answerKey: "A",
        title: "Part B – Useful Expressions Assessment",
        instructions: "Choose the correct interpretation of each Waray expression.",
      },
      {
        id: 14,
        prompt: "Karuyag ko kumaon.",
        options: [
          {
            key: "A",
            text: "I want to eat.",
          },
          {
            key: "B",
            text: "I want to sleep.",
          },
          {
            key: "C",
            text: "I want to study.",
          },
          {
            key: "D",
            text: "I want to leave.",
          },
        ],
        answerKey: "A",
        title: "Part B – Useful Expressions Assessment",
        instructions: "Choose the correct interpretation of each Waray expression.",
      },
      {
        id: 15,
        prompt: "Nauyon ako.",
        options: [
          {
            key: "A",
            text: "I disagree.",
          },
          {
            key: "B",
            text: "I agree.",
          },
          {
            key: "C",
            text: "I am confused.",
          },
          {
            key: "D",
            text: "I am tired.",
          },
        ],
        answerKey: "B",
        title: "Part B – Useful Expressions Assessment",
        instructions: "Choose the correct interpretation of each Waray expression.",
      },
      {
        id: 16,
        prompt: "Ayaw kawad-i hin paglaom.",
        options: [
          {
            key: "A",
            text: "Do not lose hope.",
          },
          {
            key: "B",
            text: "Do not forget your belongings.",
          },
          {
            key: "C",
            text: "Do not go outside.",
          },
          {
            key: "D",
            text: "Do not be late.",
          },
        ],
        answerKey: "A",
        title: "Part B – Useful Expressions Assessment",
        instructions: "Choose the correct interpretation of each Waray expression.",
      },
      {
        id: 17,
        prompt: "Pwede mo ba ako buligan?",
        options: [
          {
            key: "A",
            text: "Can you help me?",
          },
          {
            key: "B",
            text: "Can you hear me?",
          },
          {
            key: "C",
            text: "Can you see this?",
          },
          {
            key: "D",
            text: "Can you teach me?",
          },
        ],
        answerKey: "A",
        title: "Part B – Useful Expressions Assessment",
        instructions: "Choose the correct interpretation of each Waray expression.",
      },
      {
        id: 18,
        prompt: "Nalilipay ako nga makilala ka.",
        options: [
          {
            key: "A",
            text: "I am happy to meet you.",
          },
          {
            key: "B",
            text: "I am going to meet you.",
          },
          {
            key: "C",
            text: "I do not know you.",
          },
          {
            key: "D",
            text: "I want to leave.",
          },
        ],
        answerKey: "A",
        title: "Part B – Useful Expressions Assessment",
        instructions: "Choose the correct interpretation of each Waray expression.",
      },
      {
        id: 19,
        prompt: "Pira an plete?",
        options: [
          {
            key: "A",
            text: "How much is the fare?",
          },
          {
            key: "B",
            text: "Where is the vehicle?",
          },
          {
            key: "C",
            text: "Who is the driver?",
          },
          {
            key: "D",
            text: "When will we arrive?",
          },
        ],
        answerKey: "A",
        title: "Part B – Useful Expressions Assessment",
        instructions: "Choose the correct interpretation of each Waray expression.",
      },
      {
        id: 20,
        prompt: "Natapos ko na an akon trabaho.",
        options: [
          {
            key: "A",
            text: "I have finished my work.",
          },
          {
            key: "B",
            text: "I have not started my work.",
          },
          {
            key: "C",
            text: "I need more work.",
          },
          {
            key: "D",
            text: "I am looking for work.",
          },
        ],
        answerKey: "A",
        title: "Part B – Useful Expressions Assessment",
        instructions: "Choose the correct interpretation of each Waray expression.",
      },
      {
        id: 21,
        prompt: "Which is the correct Waray expression for \"I am studying\"?",
        options: [
          {
            key: "A",
            text: "Nag-aadal ako.",
          },
          {
            key: "B",
            text: "Nag-aadal hiya.",
          },
          {
            key: "C",
            text: "Nagluto ako.",
          },
          {
            key: "D",
            text: "Nagturog ako.",
          },
        ],
        answerKey: "A",
        title: "Part C – Grammar and Sentence Construction",
        instructions: "Choose the sentence or expression that best completes each item.",
      },
      {
        id: 22,
        prompt: "Which pronoun means \"we\" when including the person being addressed?",
        options: [
          {
            key: "A",
            text: "Kami",
          },
          {
            key: "B",
            text: "Kita",
          },
          {
            key: "C",
            text: "Hira",
          },
          {
            key: "D",
            text: "Hiya",
          },
        ],
        answerKey: "B",
        title: "Part C – Grammar and Sentence Construction",
        instructions: "Choose the sentence or expression that best completes each item.",
      },
      {
        id: 23,
        prompt: "Which sentence means \"The house is big\"?",
        options: [
          {
            key: "A",
            text: "Dako an balay.",
          },
          {
            key: "B",
            text: "Matahom an balay.",
          },
          {
            key: "C",
            text: "Hain an balay?",
          },
          {
            key: "D",
            text: "Bag-o an balay.",
          },
        ],
        answerKey: "A",
        title: "Part C – Grammar and Sentence Construction",
        instructions: "Choose the sentence or expression that best completes each item.",
      },
      {
        id: 24,
        prompt: "Which expression introduces a reason?",
        options: [
          {
            key: "A",
            text: "Kay",
          },
          {
            key: "B",
            text: "Pero",
          },
          {
            key: "C",
            text: "O",
          },
          {
            key: "D",
            text: "Ngan",
          },
        ],
        answerKey: "A",
        title: "Part C – Grammar and Sentence Construction",
        instructions: "Choose the sentence or expression that best completes each item.",
      },
      {
        id: 25,
        prompt: "Which sentence expresses disagreement?",
        options: [
          {
            key: "A",
            text: "Nauyon ako.",
          },
          {
            key: "B",
            text: "Diri ako nauyon.",
          },
          {
            key: "C",
            text: "Husto ito.",
          },
          {
            key: "D",
            text: "Tinuod ito.",
          },
        ],
        answerKey: "B",
        title: "Part C – Grammar and Sentence Construction",
        instructions: "Choose the sentence or expression that best completes each item.",
      },
      {
        id: 26,
        prompt: "Which question asks about the number or quantity of something?",
        options: [
          {
            key: "A",
            text: "Hin-o?",
          },
          {
            key: "B",
            text: "Diin?",
          },
          {
            key: "C",
            text: "Pira?",
          },
          {
            key: "D",
            text: "San-o?",
          },
        ],
        answerKey: "C",
        title: "Part C – Grammar and Sentence Construction",
        instructions: "Choose the sentence or expression that best completes each item.",
      },
      {
        id: 27,
        prompt: "Which sentence means \"I will study tomorrow\"?",
        options: [
          {
            key: "A",
            text: "Mag-aadal ako buwas.",
          },
          {
            key: "B",
            text: "Nag-aadal ako yana.",
          },
          {
            key: "C",
            text: "Nag-aram ako kahapon.",
          },
          {
            key: "D",
            text: "Nagluluto ako yana.",
          },
        ],
        answerKey: "A",
        title: "Part C – Grammar and Sentence Construction",
        instructions: "Choose the sentence or expression that best completes each item.",
      },
      {
        id: 28,
        prompt: "Which connector means \"but\"?",
        options: [
          {
            key: "A",
            text: "Ngan",
          },
          {
            key: "B",
            text: "Pero",
          },
          {
            key: "C",
            text: "Kay",
          },
          {
            key: "D",
            text: "Kon",
          },
        ],
        answerKey: "B",
        title: "Part C – Grammar and Sentence Construction",
        instructions: "Choose the sentence or expression that best completes each item.",
      },
      {
        id: 29,
        prompt: "Which sentence means \"While my mother is cooking, I am preparing the table\"?",
        options: [
          {
            key: "A",
            text: "Samtang nagluluto hi Nanay, nag-aandam ako han lamesa.",
          },
          {
            key: "B",
            text: "Nagluto hi Nanay kahapon.",
          },
          {
            key: "C",
            text: "Dako an lamesa.",
          },
          {
            key: "D",
            text: "Hain an akon Nanay?",
          },
        ],
        answerKey: "A",
        title: "Part C – Grammar and Sentence Construction",
        instructions: "Choose the sentence or expression that best completes each item.",
      },
      {
        id: 30,
        prompt: "Which expression asks someone to repeat what they said?",
        options: [
          {
            key: "A",
            text: "Mahimo mo ba utrahon?",
          },
          {
            key: "B",
            text: "Pira an imo edad?",
          },
          {
            key: "C",
            text: "Hain an merkado?",
          },
          {
            key: "D",
            text: "Ano an imo ngaran?",
          },
        ],
        answerKey: "A",
        title: "Part C – Grammar and Sentence Construction",
        instructions: "Choose the sentence or expression that best completes each item.",
      },
      {
        id: 31,
        prompt: "Where did Ana go?",
        options: [
          {
            key: "A",
            text: "Market",
          },
          {
            key: "B",
            text: "School",
          },
          {
            key: "C",
            text: "Hospital",
          },
          {
            key: "D",
            text: "Park",
          },
        ],
        answerKey: "B",
        title: "Part D – Reading Comprehension",
        instructions: "Read the following passage carefully and answer the questions.",
        passage: "An Adlaw ha Eskwelahan\nWaray:\nUsa ka adlaw, sayo nga kinadto hi Ana ha eskwelahan. May importante hira nga proyekto nga kinahanglan ipresentar ha ira maestra.\nHan inabot hiya ha eskwelahan, nakita niya an iya mga sangkay nga nag-aandam han ira mga gamit. Nagbulig hi Ana ha pag-andam han mga dokumento ngan materyales para han presentasyon.\nHa tinikangan, kinulbaan hi Ana kay damu an nanan-aw ha ira. Pero han nagtikang na hira, nagin mas komportable hiya. Iginsaysay han ira grupo an proyekto ngan ginbaton an mga pakiana han ira maestra.\nHa kataposan, nalipay hira kay nahuman nira hin maupay an presentasyon. Nagpasalamat hi Ana ha iya mga sangkay tungod han ira pagbinuligay.\nEnglish Translation:\nOne day, Ana went to school early. They had an important project that they needed to present to their teacher.\nWhen she arrived at school, she saw her friends preparing their materials. Ana helped prepare the documents and materials for the presentation.\nAt first, Ana was nervous because many people were watching them. But when they started, she became more comfortable. Their group explained the project and answered their teacher's questions.\nFinally, they were happy because they completed the presentation successfully. Ana thanked her friends for working together.",
      },
      {
        id: 32,
        prompt: "Why did Ana go to school early?",
        options: [
          {
            key: "A",
            text: "She had an important project presentation.",
          },
          {
            key: "B",
            text: "She wanted to buy food.",
          },
          {
            key: "C",
            text: "She wanted to visit a friend.",
          },
          {
            key: "D",
            text: "She had forgotten her bag.",
          },
        ],
        answerKey: "A",
        title: "Part D – Reading Comprehension",
        instructions: "Read the following passage carefully and answer the questions.",
        passage: "An Adlaw ha Eskwelahan\nWaray:\nUsa ka adlaw, sayo nga kinadto hi Ana ha eskwelahan. May importante hira nga proyekto nga kinahanglan ipresentar ha ira maestra.\nHan inabot hiya ha eskwelahan, nakita niya an iya mga sangkay nga nag-aandam han ira mga gamit. Nagbulig hi Ana ha pag-andam han mga dokumento ngan materyales para han presentasyon.\nHa tinikangan, kinulbaan hi Ana kay damu an nanan-aw ha ira. Pero han nagtikang na hira, nagin mas komportable hiya. Iginsaysay han ira grupo an proyekto ngan ginbaton an mga pakiana han ira maestra.\nHa kataposan, nalipay hira kay nahuman nira hin maupay an presentasyon. Nagpasalamat hi Ana ha iya mga sangkay tungod han ira pagbinuligay.\nEnglish Translation:\nOne day, Ana went to school early. They had an important project that they needed to present to their teacher.\nWhen she arrived at school, she saw her friends preparing their materials. Ana helped prepare the documents and materials for the presentation.\nAt first, Ana was nervous because many people were watching them. But when they started, she became more comfortable. Their group explained the project and answered their teacher's questions.\nFinally, they were happy because they completed the presentation successfully. Ana thanked her friends for working together.",
      },
      {
        id: 33,
        prompt: "What did Ana help prepare?",
        options: [
          {
            key: "A",
            text: "Food and drinks",
          },
          {
            key: "B",
            text: "Documents and presentation materials",
          },
          {
            key: "C",
            text: "Clothes and books",
          },
          {
            key: "D",
            text: "Decorations for a celebration",
          },
        ],
        answerKey: "B",
        title: "Part D – Reading Comprehension",
        instructions: "Read the following passage carefully and answer the questions.",
        passage: "An Adlaw ha Eskwelahan\nWaray:\nUsa ka adlaw, sayo nga kinadto hi Ana ha eskwelahan. May importante hira nga proyekto nga kinahanglan ipresentar ha ira maestra.\nHan inabot hiya ha eskwelahan, nakita niya an iya mga sangkay nga nag-aandam han ira mga gamit. Nagbulig hi Ana ha pag-andam han mga dokumento ngan materyales para han presentasyon.\nHa tinikangan, kinulbaan hi Ana kay damu an nanan-aw ha ira. Pero han nagtikang na hira, nagin mas komportable hiya. Iginsaysay han ira grupo an proyekto ngan ginbaton an mga pakiana han ira maestra.\nHa kataposan, nalipay hira kay nahuman nira hin maupay an presentasyon. Nagpasalamat hi Ana ha iya mga sangkay tungod han ira pagbinuligay.\nEnglish Translation:\nOne day, Ana went to school early. They had an important project that they needed to present to their teacher.\nWhen she arrived at school, she saw her friends preparing their materials. Ana helped prepare the documents and materials for the presentation.\nAt first, Ana was nervous because many people were watching them. But when they started, she became more comfortable. Their group explained the project and answered their teacher's questions.\nFinally, they were happy because they completed the presentation successfully. Ana thanked her friends for working together.",
      },
      {
        id: 34,
        prompt: "How did Ana feel at the beginning?",
        options: [
          {
            key: "A",
            text: "Angry",
          },
          {
            key: "B",
            text: "Nervous",
          },
          {
            key: "C",
            text: "Sleepy",
          },
          {
            key: "D",
            text: "Bored",
          },
        ],
        answerKey: "B",
        title: "Part D – Reading Comprehension",
        instructions: "Read the following passage carefully and answer the questions.",
        passage: "An Adlaw ha Eskwelahan\nWaray:\nUsa ka adlaw, sayo nga kinadto hi Ana ha eskwelahan. May importante hira nga proyekto nga kinahanglan ipresentar ha ira maestra.\nHan inabot hiya ha eskwelahan, nakita niya an iya mga sangkay nga nag-aandam han ira mga gamit. Nagbulig hi Ana ha pag-andam han mga dokumento ngan materyales para han presentasyon.\nHa tinikangan, kinulbaan hi Ana kay damu an nanan-aw ha ira. Pero han nagtikang na hira, nagin mas komportable hiya. Iginsaysay han ira grupo an proyekto ngan ginbaton an mga pakiana han ira maestra.\nHa kataposan, nalipay hira kay nahuman nira hin maupay an presentasyon. Nagpasalamat hi Ana ha iya mga sangkay tungod han ira pagbinuligay.\nEnglish Translation:\nOne day, Ana went to school early. They had an important project that they needed to present to their teacher.\nWhen she arrived at school, she saw her friends preparing their materials. Ana helped prepare the documents and materials for the presentation.\nAt first, Ana was nervous because many people were watching them. But when they started, she became more comfortable. Their group explained the project and answered their teacher's questions.\nFinally, they were happy because they completed the presentation successfully. Ana thanked her friends for working together.",
      },
      {
        id: 35,
        prompt: "What happened at the end?",
        options: [
          {
            key: "A",
            text: "They cancelled the presentation.",
          },
          {
            key: "B",
            text: "They went home without presenting.",
          },
          {
            key: "C",
            text: "They successfully completed the presentation.",
          },
          {
            key: "D",
            text: "They forgot their materials.",
          },
        ],
        answerKey: "C",
        title: "Part D – Reading Comprehension",
        instructions: "Read the following passage carefully and answer the questions.",
        passage: "An Adlaw ha Eskwelahan\nWaray:\nUsa ka adlaw, sayo nga kinadto hi Ana ha eskwelahan. May importante hira nga proyekto nga kinahanglan ipresentar ha ira maestra.\nHan inabot hiya ha eskwelahan, nakita niya an iya mga sangkay nga nag-aandam han ira mga gamit. Nagbulig hi Ana ha pag-andam han mga dokumento ngan materyales para han presentasyon.\nHa tinikangan, kinulbaan hi Ana kay damu an nanan-aw ha ira. Pero han nagtikang na hira, nagin mas komportable hiya. Iginsaysay han ira grupo an proyekto ngan ginbaton an mga pakiana han ira maestra.\nHa kataposan, nalipay hira kay nahuman nira hin maupay an presentasyon. Nagpasalamat hi Ana ha iya mga sangkay tungod han ira pagbinuligay.\nEnglish Translation:\nOne day, Ana went to school early. They had an important project that they needed to present to their teacher.\nWhen she arrived at school, she saw her friends preparing their materials. Ana helped prepare the documents and materials for the presentation.\nAt first, Ana was nervous because many people were watching them. But when they started, she became more comfortable. Their group explained the project and answered their teacher's questions.\nFinally, they were happy because they completed the presentation successfully. Ana thanked her friends for working together.",
      },
      {
        id: 36,
        prompt: "What does B's response mean?",
        options: [
          {
            key: "A",
            text: "It is near the market.",
          },
          {
            key: "B",
            text: "It is inside the school.",
          },
          {
            key: "C",
            text: "It is far from the town.",
          },
          {
            key: "D",
            text: "It is beside the beach.",
          },
        ],
        answerKey: "A",
        title: "Part E – Conversational Understanding",
        instructions: "Read each short dialogue and choose the most appropriate response.",
        passage: "Situation A: Asking for Directions A: Pasayloa ako. Hain an ospital? B: Aada ito hirani ha merkado.",
      },
      {
        id: 37,
        prompt: "What does B offer to do?",
        options: [
          {
            key: "A",
            text: "Explain the instruction.",
          },
          {
            key: "B",
            text: "Leave the room.",
          },
          {
            key: "C",
            text: "Submit the assignment.",
          },
          {
            key: "D",
            text: "Buy something.",
          },
        ],
        answerKey: "A",
        title: "Part E – Conversational Understanding",
        instructions: "Read each short dialogue and choose the most appropriate response.",
        passage: "Situation B: Requesting Assistance A: Diri ko nasasabtan ini nga instruksyon. B: Mahimo ko ini igsaysay ha imo.",
      },
      {
        id: 38,
        prompt: "What does B communicate?",
        options: [
          {
            key: "A",
            text: "Agreement",
          },
          {
            key: "B",
            text: "Disagreement",
          },
          {
            key: "C",
            text: "Confusion",
          },
          {
            key: "D",
            text: "Surprise",
          },
        ],
        answerKey: "A",
        title: "Part E – Conversational Understanding",
        instructions: "Read each short dialogue and choose the most appropriate response.",
        passage: "Situation C: Expressing an Opinion A: Para ha akon, importante an pag-aram hin mga linggwahe. B: Nauyon ako ha imo.",
      },
      {
        id: 39,
        prompt: "What does B mean?",
        options: [
          {
            key: "A",
            text: "The report is already finished.",
          },
          {
            key: "B",
            text: "The report is still being worked on.",
          },
          {
            key: "C",
            text: "The report has been lost.",
          },
          {
            key: "D",
            text: "The report has been submitted.",
          },
        ],
        answerKey: "B",
        title: "Part E – Conversational Understanding",
        instructions: "Read each short dialogue and choose the most appropriate response.",
        passage: "Situation D: Workplace Conversation A: Natapos mo na ba an report? B: Gintatrabaho ko pa ito.",
      },
      {
        id: 40,
        prompt: "What does B mean?",
        options: [
          {
            key: "A",
            text: "Yes, I will come along.",
          },
          {
            key: "B",
            text: "No, I am busy.",
          },
          {
            key: "C",
            text: "I do not understand.",
          },
          {
            key: "D",
            text: "I want to go home.",
          },
        ],
        answerKey: "A",
        title: "Part E – Conversational Understanding",
        instructions: "Read each short dialogue and choose the most appropriate response.",
        passage: "Situation E: Social Invitation A: Karuyag mo ba umupod ha amon? B: Oo, maupod ako.",
      },
    ],
  },
  answerKeysInferred: true,
  rewards: {
    items: [
      {
        section: "assessment",
        label: "Vocabulary Assessment + Expressions and Grammar + Reading and Conversation + Practical Communication + Comprehensive Assessment",
        xp: 60,
      },
    ],
    total: 60,
    badge: {
      name: "Waray Language Master Badge",
      description: "Awarded to learners who successfully complete the Waray language course and demonstrate their understanding of vocabulary, sentence construction, comprehension, and practical communication.",
    },
    completionRequirement: "Complete Lessons 1–29. Complete the comprehensive assessment. Obtain at least 70% in the final assessment.",
  },
};
