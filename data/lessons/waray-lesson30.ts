import { StructuredLesson } from "../../types/structuredLesson";

// Waray Lesson 30 — imported from "Lesson Plan.pdf", pages 1140–1155.
// The Waray and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.

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
      title: "Lesson Assessment – Part A – Vocabulary Assessment",
      kind: "assessment",
      instructions: "Choose the correct English meaning of the Waray word or expression.",
      items: [
        "What does salamat mean?\nA. Thank you\nB. Goodbye\nC. Welcome\nD. Sorry",
        "What does bugto mean?\nA. Parent\nB. Sibling\nC. Grandparent\nD. Cousin",
        "What does kan-on mean?\nA. Uncooked rice\nB. Cooked rice\nC. Bread\nD. Fish",
        "What does pira mean?\nA. Where\nB. When\nC. How many or how much\nD. Who",
        "What does eskwelahan mean?\nA. Hospital\nB. School\nC. Market\nD. Office",
        "What does pahuway mean?\nA. Rest\nB. Work\nC. Study\nD. Travel",
        "What does maupay an buot describe?\nA. A kind-hearted person\nB. A physically tall person\nC. A hungry person\nD. A wealthy person",
        "What does buruhaton mean?\nA. Task or responsibility\nB. Celebration\nC. Family\nD. Destination",
        "What does kahapon mean?\nA. Tomorrow\nB. Yesterday\nC. Today\nD. Later",
        "What does matinabangon mean?\nA. Helpful\nB. Lazy\nC. Angry\nD. Sleepy",
      ],
    },
    {
      title: "Lesson Assessment – Part B – Useful Expressions Assessment",
      kind: "assessment",
      instructions: "Choose the correct interpretation of each Waray expression.",
      items: [
        "Kumusta ka?\nA. How are you?\nB. What is your name?\nC. Where are you going?\nD. How old are you?",
        "Diri ako maaram.\nA. I understand.\nB. I do not know.\nC. I am happy.\nD. I am hungry.",
        "Hain an eskwelahan?\nA. Where is the school?\nB. Who is the teacher?\nC. When is the class?\nD. What is the lesson?",
        "Karuyag ko kumaon.\nA. I want to eat.\nB. I want to sleep.\nC. I want to study.\nD. I want to leave.",
        "Nauyon ako.\nA. I disagree.\nB. I agree.\nC. I am confused.\nD. I am tired.",
        "Ayaw kawad-i hin paglaom.\nA. Do not lose hope.\nB. Do not forget your belongings.\nC. Do not go outside.\nD. Do not be late.",
        "Pwede mo ba ako buligan?\nA. Can you help me?\nB. Can you hear me?\nC. Can you see this?\nD. Can you teach me?",
        "Nalilipay ako nga makilala ka.\nA. I am happy to meet you.\nB. I am going to meet you.\nC. I do not know you.\nD. I want to leave.",
        "Pira an plete?\nA. How much is the fare?\nB. Where is the vehicle?\nC. Who is the driver?\nD. When will we arrive?",
        "Natapos ko na an akon trabaho.\nA. I have finished my work.\nB. I have not started my work.\nC. I need more work.\nD. I am looking for work.",
      ],
    },
    {
      title: "Lesson Assessment – Part C – Grammar and Sentence Construction",
      kind: "assessment",
      instructions: "Choose the sentence or expression that best completes each item.",
      items: [
        "Which is the correct Waray expression for \"I am studying\"?\nA. Nag-aadal ako.\nB. Nag-aadal hiya.\nC. Nagluto ako.\nD. Nagturog ako.",
        "Which pronoun means \"we\" when including the person being addressed?\nA. Kami\nB. Kita\nC. Hira\nD. Hiya",
        "Which sentence means \"The house is big\"?\nA. Dako an balay.\nB. Matahom an balay.\nC. Hain an balay?\nD. Bag-o an balay.",
        "Which expression introduces a reason?\nA. Kay\nB. Pero\nC. O\nD. Ngan",
        "Which sentence expresses disagreement?\nA. Nauyon ako.\nB. Diri ako nauyon.\nC. Husto ito.\nD. Tinuod ito.",
        "Which question asks about the number or quantity of something?\nA. Hin-o?\nB. Diin?\nC. Pira?\nD. San-o?",
        "Which sentence means \"I will study tomorrow\"?\nA. Mag-aadal ako buwas.\nB. Nag-aadal ako yana.\nC. Nag-aram ako kahapon.\nD. Nagluluto ako yana.",
        "Which connector means \"but\"?\nA. Ngan\nB. Pero\nC. Kay\nD. Kon",
        "Which sentence means \"While my mother is cooking, I am preparing the table\"?\nA. Samtang nagluluto hi Nanay, nag-aandam ako han lamesa.\nB. Nagluto hi Nanay kahapon.\nC. Dako an lamesa.\nD. Hain an akon Nanay?",
        "Which expression asks someone to repeat what they said?\nA. Mahimo mo ba utrahon?\nB. Pira an imo edad?\nC. Hain an merkado?\nD. Ano an imo ngaran?",
      ],
    },
    {
      title: "Lesson Assessment – Part D – Reading Comprehension",
      kind: "assessment",
      instructions: "Read the following passage carefully and answer the questions.",
      items: [
        "Passage: An Adlaw ha Eskwelahan\nWaray:\nUsa ka adlaw, sayo nga kinadto hi Ana ha eskwelahan. May importante hira nga proyekto nga kinahanglan ipresentar ha ira maestra.\nHan inabot hiya ha eskwelahan, nakita niya an iya mga sangkay nga nag-aandam han ira mga gamit. Nagbulig hi Ana ha pag-andam han mga dokumento ngan materyales para han presentasyon.\nHa tinikangan, kinulbaan hi Ana kay damu an nanan-aw ha ira. Pero han nagtikang na hira, nagin mas komportable hiya. Iginsaysay han ira grupo an proyekto ngan ginbaton an mga pakiana han ira maestra.\nHa kataposan, nalipay hira kay nahuman nira hin maupay an presentasyon. Nagpasalamat hi Ana ha iya mga sangkay tungod han ira pagbinuligay.\nEnglish Translation:\nOne day, Ana went to school early. They had an important project that they needed to present to their teacher.\nWhen she arrived at school, she saw her friends preparing their materials. Ana helped prepare the documents and materials for the presentation.\nAt first, Ana was nervous because many people were watching them. But when they started, she became more comfortable. Their group explained the project and answered their teacher's questions.\nFinally, they were happy because they completed the presentation successfully. Ana thanked her friends for working together.\nComprehension Questions\nWhere did Ana go?\nA. Market\nB. School\nC. Hospital\nD. Park",
        "Passage: An Adlaw ha Eskwelahan\nWaray:\nUsa ka adlaw, sayo nga kinadto hi Ana ha eskwelahan. May importante hira nga proyekto nga kinahanglan ipresentar ha ira maestra.\nHan inabot hiya ha eskwelahan, nakita niya an iya mga sangkay nga nag-aandam han ira mga gamit. Nagbulig hi Ana ha pag-andam han mga dokumento ngan materyales para han presentasyon.\nHa tinikangan, kinulbaan hi Ana kay damu an nanan-aw ha ira. Pero han nagtikang na hira, nagin mas komportable hiya. Iginsaysay han ira grupo an proyekto ngan ginbaton an mga pakiana han ira maestra.\nHa kataposan, nalipay hira kay nahuman nira hin maupay an presentasyon. Nagpasalamat hi Ana ha iya mga sangkay tungod han ira pagbinuligay.\nEnglish Translation:\nOne day, Ana went to school early. They had an important project that they needed to present to their teacher.\nWhen she arrived at school, she saw her friends preparing their materials. Ana helped prepare the documents and materials for the presentation.\nAt first, Ana was nervous because many people were watching them. But when they started, she became more comfortable. Their group explained the project and answered their teacher's questions.\nFinally, they were happy because they completed the presentation successfully. Ana thanked her friends for working together.\nComprehension Questions\nWhy did Ana go to school early?\nA. She had an important project presentation.\nB. She wanted to buy food.\nC. She wanted to visit a friend.\nD. She had forgotten her bag.",
        "Passage: An Adlaw ha Eskwelahan\nWaray:\nUsa ka adlaw, sayo nga kinadto hi Ana ha eskwelahan. May importante hira nga proyekto nga kinahanglan ipresentar ha ira maestra.\nHan inabot hiya ha eskwelahan, nakita niya an iya mga sangkay nga nag-aandam han ira mga gamit. Nagbulig hi Ana ha pag-andam han mga dokumento ngan materyales para han presentasyon.\nHa tinikangan, kinulbaan hi Ana kay damu an nanan-aw ha ira. Pero han nagtikang na hira, nagin mas komportable hiya. Iginsaysay han ira grupo an proyekto ngan ginbaton an mga pakiana han ira maestra.\nHa kataposan, nalipay hira kay nahuman nira hin maupay an presentasyon. Nagpasalamat hi Ana ha iya mga sangkay tungod han ira pagbinuligay.\nEnglish Translation:\nOne day, Ana went to school early. They had an important project that they needed to present to their teacher.\nWhen she arrived at school, she saw her friends preparing their materials. Ana helped prepare the documents and materials for the presentation.\nAt first, Ana was nervous because many people were watching them. But when they started, she became more comfortable. Their group explained the project and answered their teacher's questions.\nFinally, they were happy because they completed the presentation successfully. Ana thanked her friends for working together.\nComprehension Questions\nWhat did Ana help prepare?\nA. Food and drinks\nB. Documents and presentation materials\nC. Clothes and books\nD. Decorations for a celebration",
        "Passage: An Adlaw ha Eskwelahan\nWaray:\nUsa ka adlaw, sayo nga kinadto hi Ana ha eskwelahan. May importante hira nga proyekto nga kinahanglan ipresentar ha ira maestra.\nHan inabot hiya ha eskwelahan, nakita niya an iya mga sangkay nga nag-aandam han ira mga gamit. Nagbulig hi Ana ha pag-andam han mga dokumento ngan materyales para han presentasyon.\nHa tinikangan, kinulbaan hi Ana kay damu an nanan-aw ha ira. Pero han nagtikang na hira, nagin mas komportable hiya. Iginsaysay han ira grupo an proyekto ngan ginbaton an mga pakiana han ira maestra.\nHa kataposan, nalipay hira kay nahuman nira hin maupay an presentasyon. Nagpasalamat hi Ana ha iya mga sangkay tungod han ira pagbinuligay.\nEnglish Translation:\nOne day, Ana went to school early. They had an important project that they needed to present to their teacher.\nWhen she arrived at school, she saw her friends preparing their materials. Ana helped prepare the documents and materials for the presentation.\nAt first, Ana was nervous because many people were watching them. But when they started, she became more comfortable. Their group explained the project and answered their teacher's questions.\nFinally, they were happy because they completed the presentation successfully. Ana thanked her friends for working together.\nComprehension Questions\nHow did Ana feel at the beginning?\nA. Angry\nB. Nervous\nC. Sleepy\nD. Bored",
        "Passage: An Adlaw ha Eskwelahan\nWaray:\nUsa ka adlaw, sayo nga kinadto hi Ana ha eskwelahan. May importante hira nga proyekto nga kinahanglan ipresentar ha ira maestra.\nHan inabot hiya ha eskwelahan, nakita niya an iya mga sangkay nga nag-aandam han ira mga gamit. Nagbulig hi Ana ha pag-andam han mga dokumento ngan materyales para han presentasyon.\nHa tinikangan, kinulbaan hi Ana kay damu an nanan-aw ha ira. Pero han nagtikang na hira, nagin mas komportable hiya. Iginsaysay han ira grupo an proyekto ngan ginbaton an mga pakiana han ira maestra.\nHa kataposan, nalipay hira kay nahuman nira hin maupay an presentasyon. Nagpasalamat hi Ana ha iya mga sangkay tungod han ira pagbinuligay.\nEnglish Translation:\nOne day, Ana went to school early. They had an important project that they needed to present to their teacher.\nWhen she arrived at school, she saw her friends preparing their materials. Ana helped prepare the documents and materials for the presentation.\nAt first, Ana was nervous because many people were watching them. But when they started, she became more comfortable. Their group explained the project and answered their teacher's questions.\nFinally, they were happy because they completed the presentation successfully. Ana thanked her friends for working together.\nComprehension Questions\nWhat happened at the end?\nA. They cancelled the presentation.\nB. They went home without presenting.\nC. They successfully completed the presentation.\nD. They forgot their materials.",
      ],
    },
    {
      title: "Lesson Assessment – Part E – Conversational Understanding",
      kind: "assessment",
      instructions: "Read each short dialogue and choose the most appropriate response.",
      items: [
        "Situation A: Asking for Directions\nA: Pasayloa ako. Hain an ospital?\nB: Aada ito hirani ha merkado.\nWhat does B's response mean?\nA. It is near the market.\nB. It is inside the school.\nC. It is far from the town.\nD. It is beside the beach.",
        "Situation B: Requesting Assistance\nA: Diri ko nasasabtan ini nga instruksyon.\nB: Mahimo ko ini igsaysay ha imo.\nWhat does B offer to do?\nA. Explain the instruction.\nB. Leave the room.\nC. Submit the assignment.\nD. Buy something.",
        "Situation C: Expressing an Opinion\nA: Para ha akon, importante an pag-aram hin mga linggwahe.\nB: Nauyon ako ha imo.\nWhat does B communicate?\nA. Agreement\nB. Disagreement\nC. Confusion\nD. Surprise",
        "Situation D: Workplace Conversation\nA: Natapos mo na ba an report?\nB: Gintatrabaho ko pa ito.\nWhat does B mean?\nA. The report is already finished.\nB. The report is still being worked on.\nC. The report has been lost.\nD. The report has been submitted.",
        "Situation E: Social Invitation\nA: Karuyag mo ba umupod ha amon?\nB: Oo, maupod ako.\nWhat does B mean?\nA. Yes, I will come along.\nB. No, I am busy.\nC. I do not understand.\nD. I want to go home.",
      ],
    },
    {
      title: "Lesson Assessment – Part F – Practical Communication Assessment",
      kind: "assessment",
      instructions: "Complete the following tasks by constructing appropriate Waray responses.",
      items: [
        "These activities evaluate the learner's ability to apply the language rather than simply recognize vocabulary.\nTask A: Self-Introduction\nIntroduce yourself using Waray.\nYour introduction should include:\n• Your name.\n• Where you are from.\n• Your age.\n• One thing you like doing.\nTask B: Asking for Information\nImagine that you are visiting an unfamiliar town.\nConstruct a short dialogue in which you:\n• Ask where the terminal is.\n• Ask how much the fare costs.\n• Ask which vehicle goes to your destination.\n• Thank the person who helps you.\nTask C: Expressing an Opinion\nAnswer the following question in Waray:\nQuestion: Kay ano nga importante an pag-aram hin Waray?\nYour answer should:\n• State your opinion.\n• Provide at least one reason.\n• Include an appropriate connector such as kay or tungod kay.\nTask D: Storytelling\nNarrate a short personal experience in Waray.\nYour narrative should include:\n• A beginning.\n• At least three connected events.\n• A description of your experience.\n• An ending.\nUse appropriate sequence expressions such as siyahan, katapos hito, sunod, and ha kataposan.\nTask E: Situational Response\nRespond appropriately to the following situation:\nYour classmate does not understand an assignment and asks you for help. Explain that you can help and ask which part they do not understand.",
      ],
    },
  ],
  rewards: {
    items: [
      {
        section: "assessment",
        label: "Vocabulary Assessment + Comprehensive Assessment",
        xp: 25,
      },
      {
        section: "vocabulary",
        label: "Expressions and Grammar",
        xp: 10,
      },
      {
        section: "conversation",
        label: "Reading and Conversation",
        xp: 10,
      },
      {
        section: "sentences",
        label: "Practical Communication",
        xp: 15,
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
