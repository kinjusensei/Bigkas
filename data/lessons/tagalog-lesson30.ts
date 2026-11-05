import { StructuredLesson } from "../../types/structuredLesson";

// Tagalog Lesson 30 — imported from "Lesson Plan.pdf", pages 606–631.
// The Tagalog and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.

export const tagalogLesson30: StructuredLesson = {
  lessonId: "tagalog_30",
  dialect: "tagalog",
  dialectLabel: "Tagalog",
  lessonNumber: 30,
  title: "Comprehensive Language Assessment",
  level: "Advanced",
  unit: "Unit 3 – Real-Life Communication",
  estimatedDuration: "60–75 minutes",
  prerequisite: "Lessons 1–29",
  intro: [
    "The Comprehensive Language Assessment is designed to evaluate the learner's accumulated knowledge and practical communication skills after completing the 30 lessons in the Filipino language course.",
    "The assessment covers the major learning areas introduced throughout the curriculum, including:",
    "• Vocabulary and expressions.",
    "• Grammar and sentence construction.",
    "• Reading comprehension.",
    "• Listening comprehension.",
    "• Practical communication.",
    "• Storytelling and narration.",
    "Learners will demonstrate their ability to recognize Filipino words, understand written and spoken information, construct meaningful sentences, and communicate appropriately in different situations.",
    "This final assessment also provides an opportunity for learners to review their progress and identify areas that may require additional practice.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Demonstrate knowledge of Filipino vocabulary and commonly used expressions.",
    "Apply appropriate grammar rules and sentence structures.",
    "Understand written Filipino passages and identify important information.",
    "Understand spoken Filipino expressions and conversations.",
    "Construct meaningful sentences and paragraphs.",
    "Participate in practical conversations using appropriate expressions.",
    "Demonstrate their ability to communicate in Filipino across different everyday situations.",
    "Identify their strengths and areas for improvement in language learning.",
  ],
  expressionGroups: [
    {
      title: "A. Everyday Vocabulary",
      intro: [
        "Before beginning the final assessment, learners should review the vocabulary and expressions introduced throughout the course.",
      ],
      items: [
        {
          term: "Pamilya",
          meaning: "Family",
        },
        {
          term: "Kaibigan",
          meaning: "Friend",
        },
        {
          term: "Paaralan",
          meaning: "School",
        },
        {
          term: "Guro",
          meaning: "Teacher",
        },
        {
          term: "Pagkain",
          meaning: "Food",
        },
        {
          term: "Inumin",
          meaning: "Drink",
        },
        {
          term: "Hayop",
          meaning: "Animal",
        },
        {
          term: "Kalikasan",
          meaning: "Nature",
        },
        {
          term: "Trabaho",
          meaning: "Work",
        },
        {
          term: "Tahanan",
          meaning: "Home",
        },
        {
          term: "Pamayanan",
          meaning: "Community",
        },
        {
          term: "Karanasan",
          meaning: "Experience",
        },
      ],
    },
    {
      title: "B. Common Expressions",
      items: [
        {
          term: "Magandang umaga.",
          meaning: "Good morning.",
        },
        {
          term: "Kumusta ka?",
          meaning: "How are you?",
        },
        {
          term: "Maraming salamat.",
          meaning: "Thank you very much.",
        },
        {
          term: "Walang anuman.",
          meaning: "You're welcome.",
        },
        {
          term: "Paumanhin po.",
          meaning: "Excuse me / I apologize.",
        },
        {
          term: "Maaari po ba akong magtanong?",
          meaning: "May I ask a question?",
        },
        {
          term: "Hindi ko nauunawaan.",
          meaning: "I do not understand.",
        },
        {
          term: "Maaari mo bang ulitin?",
          meaning: "Could you repeat that?",
        },
        {
          term: "Sa aking palagay...",
          meaning: "In my opinion...",
        },
        {
          term: "Sang-ayon ako.",
          meaning: "I agree.",
        },
        {
          term: "Gayunpaman...",
          meaning: "However...",
        },
        {
          term: "Sa huli...",
          meaning: "In the end...",
        },
      ],
    },
  ],
  languageNotes: [
    {
      title: "Vocabulary",
      body: [
        "C. Grammar Review",
        "Learners should remember the following concepts:",
        "• Personal pronouns and possessive forms.",
        "• Common verbs and their aspects.",
        "• Sentence construction and word order.",
        "• The use of ang, ng, and sa.",
        "• Connecting words and conjunctions.",
        "• Descriptive words and linkers.",
        "• Question formation.",
        "• Formal and informal expressions.",
        "• Sequencing expressions in narration.",
      ],
    },
    {
      title: "Final Course Summary",
      body: [
        "Congratulations on reaching the final lesson of the Filipino language course!",
        "Throughout the 30 lessons, learners explored different aspects of the Filipino language, beginning with basic greetings and vocabulary and gradually progressing toward more complex communication.",
      ],
    },
    {
      title: "Curriculum Completion Overview",
      table: {
        leftHeading: "Level",
        rightHeading: "Lessons · Main Learning Focus",
        rows: [
          {
            left: "Beginner",
            right: "1–10 · Basic vocabulary, greetings, everyday expressions, and simple communication",
          },
          {
            left: "Intermediate",
            right: "11–20 · Everyday conversations, grammar, sentence construction, and practical communication",
          },
          {
            left: "Advanced",
            right: "21–30 · Complex communication, opinions, explanations, narration, role-playing, and comprehensive assessment",
          },
        ],
      },
    },
    {
      title: "Skills Developed Throughout the Course",
      body: [
        "By completing the curriculum, learners have practiced:",
        "• Recognizing and using common Filipino vocabulary.",
        "• Introducing themselves and other people.",
        "• Asking and answering questions.",
        "• Discussing everyday activities.",
        "• Constructing simple and complex sentences.",
        "• Expressing opinions and feelings.",
        "• Giving explanations and reasons.",
        "• Participating in academic and professional conversations.",
        "• Narrating experiences and telling stories.",
        "• Communicating in different real-life situations.",
      ],
    },
    {
      title: "Final Message",
      body: [
        "\"Congratulations on completing all 30 lessons!",
        "Learning a language is a continuous process. Completing this course is an important achievement, but the best way to improve is to continue practicing Filipino in everyday conversations, reading, listening, and writing.",
        "Keep learning, keep communicating, and continue discovering the richness of the Filipino language!\"",
      ],
    },
  ],
  assessment: {
    passPercent: 80,
    questions: [
      {
        id: 1,
        prompt: "What does \"karanasan\" mean?",
        options: [
          {
            key: "A",
            text: "Responsibility",
          },
          {
            key: "B",
            text: "Experience",
          },
          {
            key: "C",
            text: "Environment",
          },
          {
            key: "D",
            text: "Conversation",
          },
        ],
        answerKey: "B",
        title: "PART A: Vocabulary and Expressions",
        instructions: "Choose the correct English meaning or Filipino expression.",
      },
      {
        id: 2,
        prompt: "What is the Filipino word for \"colleague\"?",
        options: [
          {
            key: "A",
            text: "Kasamahan",
          },
          {
            key: "B",
            text: "Guro",
          },
          {
            key: "C",
            text: "Mag-aaral",
          },
          {
            key: "D",
            text: "Kapamilya",
          },
        ],
        answerKey: "A",
        title: "PART A: Vocabulary and Expressions",
        instructions: "Choose the correct English meaning or Filipino expression.",
      },
      {
        id: 3,
        prompt: "Which expression means \"I would like to clarify something\"?",
        options: [
          {
            key: "A",
            text: "Nais ko pong linawin ang isang bagay.",
          },
          {
            key: "B",
            text: "Maraming salamat po.",
          },
          {
            key: "C",
            text: "Hindi ko sigurado.",
          },
          {
            key: "D",
            text: "Magandang araw po.",
          },
        ],
        answerKey: "A",
        title: "PART A: Vocabulary and Expressions",
        instructions: "Choose the correct English meaning or Filipino expression.",
      },
      {
        id: 4,
        prompt: "What does \"suliranin\" mean?",
        options: [
          {
            key: "A",
            text: "Solution",
          },
          {
            key: "B",
            text: "Problem",
          },
          {
            key: "C",
            text: "Beginning",
          },
          {
            key: "D",
            text: "Achievement",
          },
        ],
        answerKey: "B",
        title: "PART A: Vocabulary and Expressions",
        instructions: "Choose the correct English meaning or Filipino expression.",
      },
      {
        id: 5,
        prompt: "Which expression means \"in the end\"?",
        options: [
          {
            key: "A",
            text: "Samantala",
          },
          {
            key: "B",
            text: "Pagkatapos",
          },
          {
            key: "C",
            text: "Sa huli",
          },
          {
            key: "D",
            text: "Noong una",
          },
        ],
        answerKey: "C",
        title: "PART A: Vocabulary and Expressions",
        instructions: "Choose the correct English meaning or Filipino expression.",
      },
      {
        id: 6,
        prompt: "What is the Filipino word for \"suggestion or proposal\"?",
        options: [
          {
            key: "A",
            text: "Panukala",
          },
          {
            key: "B",
            text: "Pangyayari",
          },
          {
            key: "C",
            text: "Salaysay",
          },
          {
            key: "D",
            text: "Tungkulin",
          },
        ],
        answerKey: "A",
        title: "PART A: Vocabulary and Expressions",
        instructions: "Choose the correct English meaning or Filipino expression.",
      },
      {
        id: 7,
        prompt: "Which word refers to a person who manages or supervises employees?",
        options: [
          {
            key: "A",
            text: "Kawani",
          },
          {
            key: "B",
            text: "Tagapamahala",
          },
          {
            key: "C",
            text: "Mag-aaral",
          },
          {
            key: "D",
            text: "Mamimili",
          },
        ],
        answerKey: "B",
        title: "PART A: Vocabulary and Expressions",
        instructions: "Choose the correct English meaning or Filipino expression.",
      },
      {
        id: 8,
        prompt: "What does \"pagkakaunawaan\" generally refer to?",
        options: [
          {
            key: "A",
            text: "Understanding or mutual understanding",
          },
          {
            key: "B",
            text: "Competition",
          },
          {
            key: "C",
            text: "Disagreement only",
          },
          {
            key: "D",
            text: "Responsibility",
          },
        ],
        answerKey: "A",
        title: "PART A: Vocabulary and Expressions",
        instructions: "Choose the correct English meaning or Filipino expression.",
      },
      {
        id: 9,
        prompt: "Which expression is appropriate when requesting additional information?",
        options: [
          {
            key: "A",
            text: "Wala akong pakialam.",
          },
          {
            key: "B",
            text: "Maaari po ba akong magtanong?",
          },
          {
            key: "C",
            text: "Umalis na tayo.",
          },
          {
            key: "D",
            text: "Hindi ko gusto iyan.",
          },
        ],
        answerKey: "B",
        title: "PART A: Vocabulary and Expressions",
        instructions: "Choose the correct English meaning or Filipino expression.",
      },
      {
        id: 10,
        prompt: "What does \"kasukdulan\" refer to in a story?",
        options: [
          {
            key: "A",
            text: "Setting",
          },
          {
            key: "B",
            text: "Character",
          },
          {
            key: "C",
            text: "Climax",
          },
          {
            key: "D",
            text: "Ending",
          },
        ],
        answerKey: "C",
        title: "PART A: Vocabulary and Expressions",
        instructions: "Choose the correct English meaning or Filipino expression.",
      },
      {
        id: 11,
        prompt: "What is the Filipino word for \"deadline\"?",
        options: [
          {
            key: "A",
            text: "Takdang-oras",
          },
          {
            key: "B",
            text: "Tahanan",
          },
          {
            key: "C",
            text: "Talakayan",
          },
          {
            key: "D",
            text: "Pananaliksik",
          },
        ],
        answerKey: "A",
        title: "PART A: Vocabulary and Expressions",
        instructions: "Choose the correct English meaning or Filipino expression.",
      },
      {
        id: 12,
        prompt: "Which expression means \"I agree with your suggestion\"?",
        options: [
          {
            key: "A",
            text: "Hindi ako kumbinsido.",
          },
          {
            key: "B",
            text: "Sang-ayon ako sa inyong mungkahi.",
          },
          {
            key: "C",
            text: "Hindi ko nauunawaan.",
          },
          {
            key: "D",
            text: "May problema ako.",
          },
        ],
        answerKey: "B",
        title: "PART A: Vocabulary and Expressions",
        instructions: "Choose the correct English meaning or Filipino expression.",
      },
      {
        id: 13,
        prompt: "What does \"kapana-panabik\" mean?",
        options: [
          {
            key: "A",
            text: "Boring",
          },
          {
            key: "B",
            text: "Exciting",
          },
          {
            key: "C",
            text: "Confusing",
          },
          {
            key: "D",
            text: "Difficult",
          },
        ],
        answerKey: "B",
        title: "PART A: Vocabulary and Expressions",
        instructions: "Choose the correct English meaning or Filipino expression.",
      },
      {
        id: 14,
        prompt: "Which expression means \"meanwhile\"?",
        options: [
          {
            key: "A",
            text: "Samantala",
          },
          {
            key: "B",
            text: "Sa huli",
          },
          {
            key: "C",
            text: "Una",
          },
          {
            key: "D",
            text: "Kinabukasan",
          },
        ],
        answerKey: "A",
        title: "PART A: Vocabulary and Expressions",
        instructions: "Choose the correct English meaning or Filipino expression.",
      },
      {
        id: 15,
        prompt: "What does \"magsumite\" mean?",
        options: [
          {
            key: "A",
            text: "To request",
          },
          {
            key: "B",
            text: "To submit",
          },
          {
            key: "C",
            text: "To explain",
          },
          {
            key: "D",
            text: "To organize",
          },
        ],
        answerKey: "B",
        title: "PART A: Vocabulary and Expressions",
        instructions: "Choose the correct English meaning or Filipino expression.",
      },
      {
        id: 16,
        prompt: "Which Filipino word means \"responsibility\"?",
        options: [
          {
            key: "A",
            text: "Tungkulin",
          },
          {
            key: "B",
            text: "Alaala",
          },
          {
            key: "C",
            text: "Tagpuan",
          },
          {
            key: "D",
            text: "Pangyayari",
          },
        ],
        answerKey: "A",
        title: "PART A: Vocabulary and Expressions",
        instructions: "Choose the correct English meaning or Filipino expression.",
      },
      {
        id: 17,
        prompt: "Which expression means \"I do not understand\"?",
        options: [
          {
            key: "A",
            text: "Nauunawaan ko.",
          },
          {
            key: "B",
            text: "Hindi ko nauunawaan.",
          },
          {
            key: "C",
            text: "Sang-ayon ako.",
          },
          {
            key: "D",
            text: "Walang anuman.",
          },
        ],
        answerKey: "B",
        title: "PART A: Vocabulary and Expressions",
        instructions: "Choose the correct English meaning or Filipino expression.",
      },
      {
        id: 18,
        prompt: "What is the Filipino word for \"narrative\"?",
        options: [
          {
            key: "A",
            text: "Salaysay",
          },
          {
            key: "B",
            text: "Suliranin",
          },
          {
            key: "C",
            text: "Kasunduan",
          },
          {
            key: "D",
            text: "Panukala",
          },
        ],
        answerKey: "A",
        title: "PART A: Vocabulary and Expressions",
        instructions: "Choose the correct English meaning or Filipino expression.",
      },
      {
        id: 19,
        prompt: "Which expression is appropriate when asking someone to repeat something politely?",
        options: [
          {
            key: "A",
            text: "Ulitin mo nga.",
          },
          {
            key: "B",
            text: "Maaari po bang ulitin ninyo?",
          },
          {
            key: "C",
            text: "Bilisan mo.",
          },
          {
            key: "D",
            text: "Ano ba iyon?",
          },
        ],
        answerKey: "B",
        title: "PART A: Vocabulary and Expressions",
        instructions: "Choose the correct English meaning or Filipino expression.",
      },
      {
        id: 20,
        prompt: "What does \"pag-unlad\" mean?",
        options: [
          {
            key: "A",
            text: "Progress",
          },
          {
            key: "B",
            text: "Failure",
          },
          {
            key: "C",
            text: "Problem",
          },
          {
            key: "D",
            text: "Beginning",
          },
        ],
        answerKey: "A",
        title: "PART A: Vocabulary and Expressions",
        instructions: "Choose the correct English meaning or Filipino expression.",
      },
      {
        id: 21,
        prompt: "Which sentence correctly introduces a person?",
        options: [
          {
            key: "A",
            text: "Ako pangalan ay Maria.",
          },
          {
            key: "B",
            text: "Ang pangalan ko ay Maria.",
          },
          {
            key: "C",
            text: "Pangalan ako Maria ay.",
          },
          {
            key: "D",
            text: "Maria pangalan ko ang.",
          },
        ],
        answerKey: "B",
        title: "PART B: Grammar and Sentence Construction",
        instructions: "Choose the sentence or expression that is grammatically appropriate.",
      },
      {
        id: 22,
        prompt: "Which sentence uses the correct pronoun for an inclusive group?",
        options: [
          {
            key: "A",
            text: "Kami ay pupunta sa palengke, kasama ka.",
          },
          {
            key: "B",
            text: "Tayo ay pupunta sa palengke.",
          },
          {
            key: "C",
            text: "Siya ay pupunta sa palengke.",
          },
          {
            key: "D",
            text: "Sila ay pupunta sa palengke, ngunit hindi kami kasama.",
          },
        ],
        answerKey: "B",
        title: "PART B: Grammar and Sentence Construction",
        instructions: "Choose the sentence or expression that is grammatically appropriate.",
      },
      {
        id: 23,
        prompt: "Which sentence expresses a completed action?",
        options: [
          {
            key: "A",
            text: "Kumakain ako ngayon.",
          },
          {
            key: "B",
            text: "Kakain ako mamaya.",
          },
          {
            key: "C",
            text: "Kumain ako kahapon.",
          },
          {
            key: "D",
            text: "Kakakain ko lamang bukas.",
          },
        ],
        answerKey: "C",
        title: "PART B: Grammar and Sentence Construction",
        instructions: "Choose the sentence or expression that is grammatically appropriate.",
      },
      {
        id: 24,
        prompt: "Which sentence expresses an ongoing action?",
        options: [
          {
            key: "A",
            text: "Nag-aaral siya ngayon.",
          },
          {
            key: "B",
            text: "Nag-aral siya kahapon.",
          },
          {
            key: "C",
            text: "Mag-aaral siya bukas.",
          },
          {
            key: "D",
            text: "Umalis siya noong Lunes.",
          },
        ],
        answerKey: "A",
        title: "PART B: Grammar and Sentence Construction",
        instructions: "Choose the sentence or expression that is grammatically appropriate.",
      },
      {
        id: 25,
        prompt: "Which sentence uses a connecting word to express a reason?",
        options: [
          {
            key: "A",
            text: "Nag-aral ako dahil may pagsusulit kami bukas.",
          },
          {
            key: "B",
            text: "Nag-aral ako ngunit may pagsusulit kami bukas.",
          },
          {
            key: "C",
            text: "Nag-aral ako o may pagsusulit kami bukas.",
          },
          {
            key: "D",
            text: "Nag-aral ako samantala may pagsusulit kami bukas.",
          },
        ],
        answerKey: "A",
        title: "PART B: Grammar and Sentence Construction",
        instructions: "Choose the sentence or expression that is grammatically appropriate.",
      },
      {
        id: 26,
        prompt: "Which sentence correctly uses \"mas\" for comparison?",
        options: [
          {
            key: "A",
            text: "Mas mataas ang puno kaysa sa halaman.",
          },
          {
            key: "B",
            text: "Mataas mas ang puno halaman kaysa.",
          },
          {
            key: "C",
            text: "Mas kaysa mataas puno ang halaman.",
          },
          {
            key: "D",
            text: "Ang puno kaysa mas mataas na.",
          },
        ],
        answerKey: "A",
        title: "PART B: Grammar and Sentence Construction",
        instructions: "Choose the sentence or expression that is grammatically appropriate.",
      },
      {
        id: 27,
        prompt: "Which sentence correctly expresses a polite request?",
        options: [
          {
            key: "A",
            text: "Bigyan mo ako niyan ngayon.",
          },
          {
            key: "B",
            text: "Maaari po ba akong humingi ng tulong?",
          },
          {
            key: "C",
            text: "Gawin mo iyan agad.",
          },
          {
            key: "D",
            text: "Hindi ko kailangan ng tulong mo.",
          },
        ],
        answerKey: "B",
        title: "PART B: Grammar and Sentence Construction",
        instructions: "Choose the sentence or expression that is grammatically appropriate.",
      },
      {
        id: 28,
        prompt: "Which sentence uses an appropriate question word?",
        options: [
          {
            key: "A",
            text: "Sino ang pangalan ng lugar?",
          },
          {
            key: "B",
            text: "Saan ka nakatira?",
          },
          {
            key: "C",
            text: "Bakit ang kulay nito?",
          },
          {
            key: "D",
            text: "Ilan ang iyong pangalan?",
          },
        ],
        answerKey: "B",
        title: "PART B: Grammar and Sentence Construction",
        instructions: "Choose the sentence or expression that is grammatically appropriate.",
      },
      {
        id: 29,
        prompt: "Which sentence correctly expresses a future action?",
        options: [
          {
            key: "A",
            text: "Nagpunta ako bukas.",
          },
          {
            key: "B",
            text: "Pumupunta ako kahapon.",
          },
          {
            key: "C",
            text: "Pupunta ako bukas.",
          },
          {
            key: "D",
            text: "Pumunta ako ngayon bukas.",
          },
        ],
        answerKey: "C",
        title: "PART B: Grammar and Sentence Construction",
        instructions: "Choose the sentence or expression that is grammatically appropriate.",
      },
      {
        id: 30,
        prompt: "Which sentence is most appropriate for a formal conversation?",
        options: [
          {
            key: "A",
            text: "\"Hoy, ano ang kailangan mo?\"",
          },
          {
            key: "B",
            text: "\"Maaari po ba akong magtanong tungkol sa inyong serbisyo?\"",
          },
          {
            key: "C",
            text: "\"Bilisan mo nga.\"",
          },
          {
            key: "D",
            text: "\"Hindi ko alam, bahala ka.\"",
          },
        ],
        answerKey: "B",
        title: "PART B: Grammar and Sentence Construction",
        instructions: "Choose the sentence or expression that is grammatically appropriate.",
      },
      {
        id: 31,
        prompt: "Which sentence correctly uses \"ng\" in a common possessive construction?",
        options: [
          {
            key: "A",
            text: "Binasa ko ang aklat ng aking kapatid.",
          },
          {
            key: "B",
            text: "Binasa ko sa aklat aking kapatid.",
          },
          {
            key: "C",
            text: "Binasa ko ang aklat si aking kapatid.",
          },
          {
            key: "D",
            text: "Binasa ko ang aklat kay aking kapatid.",
          },
        ],
        answerKey: "A",
        title: "PART B: Grammar and Sentence Construction",
        instructions: "Choose the sentence or expression that is grammatically appropriate.",
      },
      {
        id: 32,
        prompt: "Which expression is commonly used to introduce a contrasting idea?",
        options: [
          {
            key: "A",
            text: "Dahil dito",
          },
          {
            key: "B",
            text: "Gayunpaman",
          },
          {
            key: "C",
            text: "Samakatuwid",
          },
          {
            key: "D",
            text: "Una",
          },
        ],
        answerKey: "B",
        title: "PART B: Grammar and Sentence Construction",
        instructions: "Choose the sentence or expression that is grammatically appropriate.",
      },
      {
        id: 33,
        prompt: "Which sentence correctly uses a descriptive linker?",
        options: [
          {
            key: "A",
            text: "Maganda bahay ang.",
          },
          {
            key: "B",
            text: "Magandang bahay ang nakita ko.",
          },
          {
            key: "C",
            text: "Maganda na bahay ang nakita ko.",
          },
          {
            key: "D",
            text: "Bahay maganda nakita ko ang.",
          },
        ],
        answerKey: "B",
        title: "PART B: Grammar and Sentence Construction",
        instructions: "Choose the sentence or expression that is grammatically appropriate.",
      },
      {
        id: 34,
        prompt: "Which sentence appropriately expresses a suggestion?",
        options: [
          {
            key: "A",
            text: "Maaari nating isaalang-alang ang ibang paraan.",
          },
          {
            key: "B",
            text: "Mali ang lahat ng ginagawa ninyo.",
          },
          {
            key: "C",
            text: "Wala akong pakialam sa plano.",
          },
          {
            key: "D",
            text: "Hindi ko gagawin iyan.",
          },
        ],
        answerKey: "A",
        title: "PART B: Grammar and Sentence Construction",
        instructions: "Choose the sentence or expression that is grammatically appropriate.",
      },
      {
        id: 35,
        prompt: "Which sentence is the best example of a complex sentence?",
        options: [
          {
            key: "A",
            text: "Kumain ako at natulog.",
          },
          {
            key: "B",
            text: "Nag-aral siya dahil may pagsusulit siya kinabukasan.",
          },
          {
            key: "C",
            text: "Maganda ang panahon.",
          },
          {
            key: "D",
            text: "Dumating ang guro.",
          },
        ],
        answerKey: "B",
        title: "PART B: Grammar and Sentence Construction",
        instructions: "Choose the sentence or expression that is grammatically appropriate.",
      },
      {
        id: 36,
        prompt: "Ano ang pangunahing layunin ng gawaing pangkomunidad?",
        options: [
          {
            key: "A",
            text: "Magdaos ng paligsahan.",
          },
          {
            key: "B",
            text: "Makatulong sa pagpapanatili ng kalinisan sa lugar.",
          },
          {
            key: "C",
            text: "Magtayo ng bagong paaralan.",
          },
          {
            key: "D",
            text: "Maghanda para sa pagsusulit.",
          },
        ],
        answerKey: "B",
        title: "PART C: Reading Comprehension",
        instructions: "Read the passage carefully and answer the questions.",
        passage: "Passage: Isang Makabuluhang Karanasan\n\"Noong nakaraang buwan, nagkaroon ng pagkakataon ang mga mag-aaral sa aming paaralan na magsagawa ng isang gawaing pangkomunidad. Layunin ng gawaing ito na makatulong sa pagpapanatili ng kalinisan sa aming lugar.\nMaaga kaming nagtipon sa harap ng paaralan upang pag-usapan ang mga responsibilidad ng bawat pangkat. Ang ilan ay naatasang maglinis ng mga kalsada, samantalang ang iba naman ay nagtanim ng mga puno at halaman.\nSa simula, naging mahirap ang gawain dahil mainit ang panahon at maraming basura ang kailangang pulutin. Gayunpaman, nagtulungan ang lahat upang matapos ang kanilang mga tungkulin.\nNang matapos ang gawain, kapansin-pansin ang pagbabago sa aming kapaligiran. Mas naging malinis at maayos ang lugar. Nagpasalamat ang mga residente sa aming ginawa.\nSa huli, napagtanto namin na hindi kailangang gumawa ng malalaking bagay upang makatulong sa pamayanan. Kahit ang simpleng pagtutulungan ay maaaring magkaroon ng positibong epekto sa ating kapaligiran.\"",
      },
      {
        id: 37,
        prompt: "Saan nagtipon ang mga mag-aaral bago magsimula ang gawain?",
        options: [
          {
            key: "A",
            text: "Sa palengke.",
          },
          {
            key: "B",
            text: "Sa harap ng paaralan.",
          },
          {
            key: "C",
            text: "Sa munisipyo.",
          },
          {
            key: "D",
            text: "Sa parke.",
          },
        ],
        answerKey: "B",
        title: "PART C: Reading Comprehension",
        instructions: "Read the passage carefully and answer the questions.",
        passage: "Passage: Isang Makabuluhang Karanasan\n\"Noong nakaraang buwan, nagkaroon ng pagkakataon ang mga mag-aaral sa aming paaralan na magsagawa ng isang gawaing pangkomunidad. Layunin ng gawaing ito na makatulong sa pagpapanatili ng kalinisan sa aming lugar.\nMaaga kaming nagtipon sa harap ng paaralan upang pag-usapan ang mga responsibilidad ng bawat pangkat. Ang ilan ay naatasang maglinis ng mga kalsada, samantalang ang iba naman ay nagtanim ng mga puno at halaman.\nSa simula, naging mahirap ang gawain dahil mainit ang panahon at maraming basura ang kailangang pulutin. Gayunpaman, nagtulungan ang lahat upang matapos ang kanilang mga tungkulin.\nNang matapos ang gawain, kapansin-pansin ang pagbabago sa aming kapaligiran. Mas naging malinis at maayos ang lugar. Nagpasalamat ang mga residente sa aming ginawa.\nSa huli, napagtanto namin na hindi kailangang gumawa ng malalaking bagay upang makatulong sa pamayanan. Kahit ang simpleng pagtutulungan ay maaaring magkaroon ng positibong epekto sa ating kapaligiran.\"",
      },
      {
        id: 38,
        prompt: "Ano ang ilan sa mga gawaing isinagawa ng mga mag-aaral?",
        options: [
          {
            key: "A",
            text: "Naglaro at namasyal.",
          },
          {
            key: "B",
            text: "Naglinis ng mga kalsada at nagtanim ng mga halaman.",
          },
          {
            key: "C",
            text: "Nagbenta ng pagkain.",
          },
          {
            key: "D",
            text: "Nagdaos ng pagpupulong sa ibang bayan.",
          },
        ],
        answerKey: "B",
        title: "PART C: Reading Comprehension",
        instructions: "Read the passage carefully and answer the questions.",
        passage: "Passage: Isang Makabuluhang Karanasan\n\"Noong nakaraang buwan, nagkaroon ng pagkakataon ang mga mag-aaral sa aming paaralan na magsagawa ng isang gawaing pangkomunidad. Layunin ng gawaing ito na makatulong sa pagpapanatili ng kalinisan sa aming lugar.\nMaaga kaming nagtipon sa harap ng paaralan upang pag-usapan ang mga responsibilidad ng bawat pangkat. Ang ilan ay naatasang maglinis ng mga kalsada, samantalang ang iba naman ay nagtanim ng mga puno at halaman.\nSa simula, naging mahirap ang gawain dahil mainit ang panahon at maraming basura ang kailangang pulutin. Gayunpaman, nagtulungan ang lahat upang matapos ang kanilang mga tungkulin.\nNang matapos ang gawain, kapansin-pansin ang pagbabago sa aming kapaligiran. Mas naging malinis at maayos ang lugar. Nagpasalamat ang mga residente sa aming ginawa.\nSa huli, napagtanto namin na hindi kailangang gumawa ng malalaking bagay upang makatulong sa pamayanan. Kahit ang simpleng pagtutulungan ay maaaring magkaroon ng positibong epekto sa ating kapaligiran.\"",
      },
      {
        id: 39,
        prompt: "Bakit naging mahirap ang gawain sa simula?",
        options: [
          {
            key: "A",
            text: "Walang dumating na mag-aaral.",
          },
          {
            key: "B",
            text: "Mainit ang panahon at maraming basura.",
          },
          {
            key: "C",
            text: "Walang sapat na silid-aralan.",
          },
          {
            key: "D",
            text: "Hindi sila pinayagang maglinis.",
          },
        ],
        answerKey: "B",
        title: "PART C: Reading Comprehension",
        instructions: "Read the passage carefully and answer the questions.",
        passage: "Passage: Isang Makabuluhang Karanasan\n\"Noong nakaraang buwan, nagkaroon ng pagkakataon ang mga mag-aaral sa aming paaralan na magsagawa ng isang gawaing pangkomunidad. Layunin ng gawaing ito na makatulong sa pagpapanatili ng kalinisan sa aming lugar.\nMaaga kaming nagtipon sa harap ng paaralan upang pag-usapan ang mga responsibilidad ng bawat pangkat. Ang ilan ay naatasang maglinis ng mga kalsada, samantalang ang iba naman ay nagtanim ng mga puno at halaman.\nSa simula, naging mahirap ang gawain dahil mainit ang panahon at maraming basura ang kailangang pulutin. Gayunpaman, nagtulungan ang lahat upang matapos ang kanilang mga tungkulin.\nNang matapos ang gawain, kapansin-pansin ang pagbabago sa aming kapaligiran. Mas naging malinis at maayos ang lugar. Nagpasalamat ang mga residente sa aming ginawa.\nSa huli, napagtanto namin na hindi kailangang gumawa ng malalaking bagay upang makatulong sa pamayanan. Kahit ang simpleng pagtutulungan ay maaaring magkaroon ng positibong epekto sa ating kapaligiran.\"",
      },
      {
        id: 40,
        prompt: "Ano ang naging resulta ng kanilang pagtutulungan?",
        options: [
          {
            key: "A",
            text: "Naging mas marumi ang lugar.",
          },
          {
            key: "B",
            text: "Naging malinis at maayos ang kapaligiran.",
          },
          {
            key: "C",
            text: "Natigil ang kanilang mga gawain.",
          },
          {
            key: "D",
            text: "Lumipat ang mga residente.",
          },
        ],
        answerKey: "B",
        title: "PART C: Reading Comprehension",
        instructions: "Read the passage carefully and answer the questions.",
        passage: "Passage: Isang Makabuluhang Karanasan\n\"Noong nakaraang buwan, nagkaroon ng pagkakataon ang mga mag-aaral sa aming paaralan na magsagawa ng isang gawaing pangkomunidad. Layunin ng gawaing ito na makatulong sa pagpapanatili ng kalinisan sa aming lugar.\nMaaga kaming nagtipon sa harap ng paaralan upang pag-usapan ang mga responsibilidad ng bawat pangkat. Ang ilan ay naatasang maglinis ng mga kalsada, samantalang ang iba naman ay nagtanim ng mga puno at halaman.\nSa simula, naging mahirap ang gawain dahil mainit ang panahon at maraming basura ang kailangang pulutin. Gayunpaman, nagtulungan ang lahat upang matapos ang kanilang mga tungkulin.\nNang matapos ang gawain, kapansin-pansin ang pagbabago sa aming kapaligiran. Mas naging malinis at maayos ang lugar. Nagpasalamat ang mga residente sa aming ginawa.\nSa huli, napagtanto namin na hindi kailangang gumawa ng malalaking bagay upang makatulong sa pamayanan. Kahit ang simpleng pagtutulungan ay maaaring magkaroon ng positibong epekto sa ating kapaligiran.\"",
      },
      {
        id: 41,
        prompt: "Ano ang ipinahihiwatig ng salitang \"gayunpaman\" sa ikatlong talata?",
        options: [
          {
            key: "A",
            text: "Pagdaragdag ng halimbawa.",
          },
          {
            key: "B",
            text: "Pagpapakita ng pagsalungat o pagkontra sa naunang ideya.",
          },
          {
            key: "C",
            text: "Pagpapakita ng pagkakasunod-sunod.",
          },
          {
            key: "D",
            text: "Pagbibigay ng dahilan.",
          },
        ],
        answerKey: "B",
        title: "PART C: Reading Comprehension",
        instructions: "Read the passage carefully and answer the questions.",
        passage: "Passage: Isang Makabuluhang Karanasan\n\"Noong nakaraang buwan, nagkaroon ng pagkakataon ang mga mag-aaral sa aming paaralan na magsagawa ng isang gawaing pangkomunidad. Layunin ng gawaing ito na makatulong sa pagpapanatili ng kalinisan sa aming lugar.\nMaaga kaming nagtipon sa harap ng paaralan upang pag-usapan ang mga responsibilidad ng bawat pangkat. Ang ilan ay naatasang maglinis ng mga kalsada, samantalang ang iba naman ay nagtanim ng mga puno at halaman.\nSa simula, naging mahirap ang gawain dahil mainit ang panahon at maraming basura ang kailangang pulutin. Gayunpaman, nagtulungan ang lahat upang matapos ang kanilang mga tungkulin.\nNang matapos ang gawain, kapansin-pansin ang pagbabago sa aming kapaligiran. Mas naging malinis at maayos ang lugar. Nagpasalamat ang mga residente sa aming ginawa.\nSa huli, napagtanto namin na hindi kailangang gumawa ng malalaking bagay upang makatulong sa pamayanan. Kahit ang simpleng pagtutulungan ay maaaring magkaroon ng positibong epekto sa ating kapaligiran.\"",
      },
      {
        id: 42,
        prompt: "Ano ang napagtanto ng mga mag-aaral sa pagtatapos ng gawain?",
        options: [
          {
            key: "A",
            text: "Tanging malalaking proyekto lamang ang makatutulong sa pamayanan.",
          },
          {
            key: "B",
            text: "Hindi mahalaga ang pagtutulungan.",
          },
          {
            key: "C",
            text: "Kahit simpleng pagtutulungan ay maaaring magkaroon ng positibong epekto.",
          },
          {
            key: "D",
            text: "Hindi kailangang pangalagaan ang kapaligiran.",
          },
        ],
        answerKey: "C",
        title: "PART C: Reading Comprehension",
        instructions: "Read the passage carefully and answer the questions.",
        passage: "Passage: Isang Makabuluhang Karanasan\n\"Noong nakaraang buwan, nagkaroon ng pagkakataon ang mga mag-aaral sa aming paaralan na magsagawa ng isang gawaing pangkomunidad. Layunin ng gawaing ito na makatulong sa pagpapanatili ng kalinisan sa aming lugar.\nMaaga kaming nagtipon sa harap ng paaralan upang pag-usapan ang mga responsibilidad ng bawat pangkat. Ang ilan ay naatasang maglinis ng mga kalsada, samantalang ang iba naman ay nagtanim ng mga puno at halaman.\nSa simula, naging mahirap ang gawain dahil mainit ang panahon at maraming basura ang kailangang pulutin. Gayunpaman, nagtulungan ang lahat upang matapos ang kanilang mga tungkulin.\nNang matapos ang gawain, kapansin-pansin ang pagbabago sa aming kapaligiran. Mas naging malinis at maayos ang lugar. Nagpasalamat ang mga residente sa aming ginawa.\nSa huli, napagtanto namin na hindi kailangang gumawa ng malalaking bagay upang makatulong sa pamayanan. Kahit ang simpleng pagtutulungan ay maaaring magkaroon ng positibong epekto sa ating kapaligiran.\"",
      },
      {
        id: 43,
        prompt: "Anong uri ng teksto ang binasa?",
        options: [
          {
            key: "A",
            text: "Salaysay o naratibo.",
          },
          {
            key: "B",
            text: "Listahan ng mga produkto.",
          },
          {
            key: "C",
            text: "Panuto sa pagluluto.",
          },
          {
            key: "D",
            text: "Patalastas.",
          },
        ],
        answerKey: "A",
        title: "PART C: Reading Comprehension",
        instructions: "Read the passage carefully and answer the questions.",
        passage: "Passage: Isang Makabuluhang Karanasan\n\"Noong nakaraang buwan, nagkaroon ng pagkakataon ang mga mag-aaral sa aming paaralan na magsagawa ng isang gawaing pangkomunidad. Layunin ng gawaing ito na makatulong sa pagpapanatili ng kalinisan sa aming lugar.\nMaaga kaming nagtipon sa harap ng paaralan upang pag-usapan ang mga responsibilidad ng bawat pangkat. Ang ilan ay naatasang maglinis ng mga kalsada, samantalang ang iba naman ay nagtanim ng mga puno at halaman.\nSa simula, naging mahirap ang gawain dahil mainit ang panahon at maraming basura ang kailangang pulutin. Gayunpaman, nagtulungan ang lahat upang matapos ang kanilang mga tungkulin.\nNang matapos ang gawain, kapansin-pansin ang pagbabago sa aming kapaligiran. Mas naging malinis at maayos ang lugar. Nagpasalamat ang mga residente sa aming ginawa.\nSa huli, napagtanto namin na hindi kailangang gumawa ng malalaking bagay upang makatulong sa pamayanan. Kahit ang simpleng pagtutulungan ay maaaring magkaroon ng positibong epekto sa ating kapaligiran.\"",
      },
      {
        id: 51,
        prompt: "A stranger asks you where the nearest hospital is. You know the location. What should you say?",
        options: [
          {
            key: "A",
            text: "\"Hindi ko problema iyan.\"",
          },
          {
            key: "B",
            text: "\"Dumiretso po kayo at makikita ninyo ang ospital sa kanan.\"",
          },
          {
            key: "C",
            text: "\"Huwag kang magtanong.\"",
          },
          {
            key: "D",
            text: "\"Wala akong alam.\"",
          },
        ],
        answerKey: "B",
        title: "PART E: Practical Communication",
        instructions: "Choose the most appropriate response for each situation.",
      },
      {
        id: 52,
        prompt: "Your teacher gives an instruction that you do not understand. What should you say?",
        options: [
          {
            key: "A",
            text: "\"Hindi ko gagawin iyan.\"",
          },
          {
            key: "B",
            text: "\"Maaari po ba ninyong ipaliwanag muli ang panuto?\"",
          },
          {
            key: "C",
            text: "\"Bahala na po.\"",
          },
          {
            key: "D",
            text: "\"Ayoko na.\"",
          },
        ],
        answerKey: "B",
        title: "PART E: Practical Communication",
        instructions: "Choose the most appropriate response for each situation.",
      },
      {
        id: 53,
        prompt: "Your colleague suggests a solution during a meeting. You agree with the idea. What should you\nsay?",
        options: [
          {
            key: "A",
            text: "\"Walang saysay iyan.\"",
          },
          {
            key: "B",
            text: "\"Sang-ayon ako sa inyong mungkahi.\"",
          },
          {
            key: "C",
            text: "\"Hindi ko kailangan iyan.\"",
          },
          {
            key: "D",
            text: "\"Huwag na nating pag-usapan.\"",
          },
        ],
        answerKey: "B",
        title: "PART E: Practical Communication",
        instructions: "Choose the most appropriate response for each situation.",
      },
      {
        id: 54,
        prompt: "You accidentally misunderstand someone's statement. What is the most appropriate response?",
        options: [
          {
            key: "A",
            text: "\"Mali ka.\"",
          },
          {
            key: "B",
            text: "\"Pasensya na, mali pala ang pagkaunawa ko.\"",
          },
          {
            key: "C",
            text: "\"Hindi ko pakikinggan iyan.\"",
          },
          {
            key: "D",
            text: "\"Bahala ka.\"",
          },
        ],
        answerKey: "B",
        title: "PART E: Practical Communication",
        instructions: "Choose the most appropriate response for each situation.",
      },
      {
        id: 55,
        prompt: "You are ordering food at a restaurant. Which expression is most appropriate?",
        options: [
          {
            key: "A",
            text: "\"Bigyan mo ako ng pagkain.\"",
          },
          {
            key: "B",
            text: "\"Maaari po akong umorder ng isang plato ng adobo?\"",
          },
          {
            key: "C",
            text: "\"Kumain ka na.\"",
          },
          {
            key: "D",
            text: "\"Wala akong gusto.\"",
          },
        ],
        answerKey: "B",
        title: "PART E: Practical Communication",
        instructions: "Choose the most appropriate response for each situation.",
      },
    ],
  },
  extraActivities: [
    {
      title: "Lesson Assessment – PART D: Listening Comprehension",
      kind: "assessment",
      instructions: "Listen to the audio recording of each dialogue and answer the questions.",
      items: [
        "For application development, the following scripts may be recorded by Filipino speakers and played to learners. Learners should hear the audio without seeing the transcript during the actual assessment.\nAudio Script 1: Asking for Information\n\"Magandang umaga po. Nais ko po sanang magtanong tungkol sa iskedyul ng pagpapatala.\nAng pagtanggap ng mga aplikasyon ay magsisimula sa Lunes at magtatapos sa Biyernes. Kailangan lamang ninyong dalhin ang inyong mga kinakailangang dokumento at punan ang application form.\"\nAno ang nais malaman ng nagsasalita?\nA. Iskedyul ng pagpapatala.\nB. Oras ng pagkain.\nC. Presyo ng mga produkto.\nD. Lugar ng pagpupulong.",
        "For application development, the following scripts may be recorded by Filipino speakers and played to learners. Learners should hear the audio without seeing the transcript during the actual assessment.\nAudio Script 1: Asking for Information\n\"Magandang umaga po. Nais ko po sanang magtanong tungkol sa iskedyul ng pagpapatala.\nAng pagtanggap ng mga aplikasyon ay magsisimula sa Lunes at magtatapos sa Biyernes. Kailangan lamang ninyong dalhin ang inyong mga kinakailangang dokumento at punan ang application form.\"\nKailan matatapos ang pagtanggap ng mga aplikasyon?\nA. Lunes.\nB. Martes.\nC. Biyernes.\nD. Linggo.",
        "For application development, the following scripts may be recorded by Filipino speakers and played to learners. Learners should hear the audio without seeing the transcript during the actual assessment.\nAudio Script 1: Asking for Information\n\"Magandang umaga po. Nais ko po sanang magtanong tungkol sa iskedyul ng pagpapatala.\nAng pagtanggap ng mga aplikasyon ay magsisimula sa Lunes at magtatapos sa Biyernes. Kailangan lamang ninyong dalhin ang inyong mga kinakailangang dokumento at punan ang application form.\"\nAno ang kailangang dalhin ng aplikante?\nA. Pagkain at inumin.\nB. Mga kinakailangang dokumento.\nC. Mga aklat lamang.\nD. Laruan at damit.",
        "Audio Script 2: A Workplace Update\n\"Magandang hapon. Nais ko pong ipaalam na natapos na namin ang unang bahagi ng proyekto. Kasalukuyan naming sinusuri ang mga datos para sa ikalawang bahagi. May ilang impormasyon pa kaming kailangang beripikahin bago maisumite ang pinal na ulat.\"\nAno ang natapos na ng pangkat?\nA. Ang buong proyekto.\nB. Ang unang bahagi ng proyekto.\nC. Ang pinal na ulat.\nD. Ang ikalawang bahagi.",
        "Audio Script 2: A Workplace Update\n\"Magandang hapon. Nais ko pong ipaalam na natapos na namin ang unang bahagi ng proyekto. Kasalukuyan naming sinusuri ang mga datos para sa ikalawang bahagi. May ilang impormasyon pa kaming kailangang beripikahin bago maisumite ang pinal na ulat.\"\nAno ang kasalukuyang ginagawa ng pangkat?\nA. Sinusuri ang mga datos.\nB. Nagpaplano ng bakasyon.\nC. Naghahanda ng pagkain.\nD. Naglilinis ng opisina.",
        "Audio Script 2: A Workplace Update\n\"Magandang hapon. Nais ko pong ipaalam na natapos na namin ang unang bahagi ng proyekto. Kasalukuyan naming sinusuri ang mga datos para sa ikalawang bahagi. May ilang impormasyon pa kaming kailangang beripikahin bago maisumite ang pinal na ulat.\"\nBakit hindi pa maisusumite ang pinal na ulat?\nA. Wala pang nagsisimula ng proyekto.\nB. May impormasyong kailangan pang beripikahin.\nC. Hindi na kailangan ang ulat.\nD. Walang nakatalagang pangkat.",
        "Audio Script 2: A Workplace Update\n\"Magandang hapon. Nais ko pong ipaalam na natapos na namin ang unang bahagi ng proyekto. Kasalukuyan naming sinusuri ang mga datos para sa ikalawang bahagi. May ilang impormasyon pa kaming kailangang beripikahin bago maisumite ang pinal na ulat.\"\nAnong uri ng komunikasyon ang ipinakita sa ikalawang audio script?\nA. Pagkukuwento ng isang alamat.\nB. Pagbibigay ng propesyonal na ulat.\nC. Pag-order ng pagkain.\nD. Paghingi ng direksiyon.",
      ],
      answers: [
        "A",
        "C",
        "B",
        "B",
        "A",
        "B",
        "B",
      ],
    },
    {
      title: "Lesson Assessment – PART F: Writing and Narration",
      kind: "assessment",
      instructions: "Complete the following written tasks.",
      items: [
        "These activities should be evaluated using a rubric rather than exact sentence matching.\nTask 1: Sentence Construction\nWrite five complete Filipino sentences using the following words or expressions:\nKaranasan",
        "These activities should be evaluated using a rubric rather than exact sentence matching.\nTask 1: Sentence Construction\nWrite five complete Filipino sentences using the following words or expressions:\nPamayanan",
        "These activities should be evaluated using a rubric rather than exact sentence matching.\nTask 1: Sentence Construction\nWrite five complete Filipino sentences using the following words or expressions:\nMungkahi",
        "These activities should be evaluated using a rubric rather than exact sentence matching.\nTask 1: Sentence Construction\nWrite five complete Filipino sentences using the following words or expressions:\nGayunpaman",
        "These activities should be evaluated using a rubric rather than exact sentence matching.\nTask 1: Sentence Construction\nWrite five complete Filipino sentences using the following words or expressions:\nPagkatapos\nEach sentence should demonstrate appropriate vocabulary and sentence construction.\nTask 2: Short Narrative\nWrite a short narrative consisting of 8–10 sentences about one of the following topics:\nYour narrative should contain:\nTask 3: Situational Response\nWrite a short Filipino dialogue between two people in one of the following situations:\nYour dialogue should contain at least six exchanges and demonstrate appropriate expressions for the situation.\nIsang hindi malilimutang karanasan.\nIsang araw kasama ang iyong pamilya.\nIsang suliraning nalutas mo.\nIsang karanasang nagturo sa iyo ng mahalagang aral.\nA clear beginning.\nA description of the setting.\nAt least two events arranged in logical order.\nAppropriate sequencing expressions.\nA clear conclusion.\nA student asking a teacher for clarification.\nA customer asking for assistance at a store.\nTwo classmates coordinating a project.\nAn employee reporting a problem to a supervisor.",
      ],
      answers: [
        "B",
        "A",
        "A",
        "B",
        "C",
      ],
    },
  ],
  rewards: {
    items: [
      {
        section: "vocabulary",
        label: "Vocabulary Review + Grammar Review + Reading Comprehension + Listening Comprehension + Practical Communication + Writing and Narration",
        xp: 100,
      },
    ],
    total: 100,
    badge: {
      name: "Filipino Language Master Badge",
    },
    completionRequirement: "Complete all 30 lessons. Complete the Comprehensive Language Assessment. Obtain at least 80% in the final assessment. Submit all required written and practical communication activities.",
  },
};
