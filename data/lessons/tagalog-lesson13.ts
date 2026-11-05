import { StructuredLesson } from "../../types/structuredLesson";

// Tagalog Lesson 13 — imported from "Lesson Plan.pdf", pages 203–226.
// The Tagalog and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.

export const tagalogLesson13: StructuredLesson = {
  lessonId: "tagalog_13",
  dialect: "tagalog",
  dialectLabel: "Tagalog",
  lessonNumber: 13,
  title: "Asking for Information",
  level: "Intermediate",
  unit: "Unit 1 – Everyday Communication",
  estimatedDuration: "40–50 minutes",
  prerequisite: "Lessons 1–12",
  intro: [
    "People ask questions every day to learn something, solve problems, or understand situations. They may need to ask about schedules, prices, directions, requirements, services, or other important details.",
    "In Filipino, questions can be formed using words such as ano, sino, saan, kailan, bakit, paano, magkano, and alin. Polite expressions such as Maaari po bang magtanong? and Puwede po bang malaman...? help make conversations more respectful.",
    "In this lesson, learners will practice requesting information in everyday situations, such as asking about school enrollment, checking business hours, inquiring about transportation, and requesting details about an event.",
    "Real-life applications:",
    "• Asking about school schedules and requirements.",
    "• Inquiring about the price of products.",
    "• Requesting information about public services.",
    "• Asking about appointments and events.",
    "• Clarifying instructions and unfamiliar information.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Recognize common Filipino words and expressions used to request information.",
    "Ask questions about people, places, schedules, prices, services, and events.",
    "Form polite and understandable information-seeking questions.",
    "Ask follow-up questions to obtain more specific details.",
    "Clarify information when a response is unclear.",
    "Participate in conversations involving requests for information.",
  ],
  expressionGroups: [
    {
      title: "A. Question Words",
      items: [
        {
          term: "Ano",
          meaning: "What",
          pronunciation: "a-no",
        },
        {
          term: "Sino",
          meaning: "Who",
          pronunciation: "si-no",
        },
        {
          term: "Saan",
          meaning: "Where",
          pronunciation: "sa-an",
        },
        {
          term: "Kailan",
          meaning: "When",
          pronunciation: "ka-i-lan",
        },
        {
          term: "Bakit",
          meaning: "Why",
          pronunciation: "ba-kit",
        },
        {
          term: "Paano",
          meaning: "How",
          pronunciation: "pa-a-no",
        },
        {
          term: "Alin",
          meaning: "Which",
          pronunciation: "a-lin",
        },
        {
          term: "Ilan",
          meaning: "How many",
          pronunciation: "i-lan",
        },
        {
          term: "Magkano",
          meaning: "How much",
          pronunciation: "mag-ka-no",
        },
        {
          term: "Gaano",
          meaning: "How / To what extent",
          pronunciation: "ga-a-no",
        },
        {
          term: "Kanino",
          meaning: "Whose / To whom",
          pronunciation: "ka-ni-no",
        },
        {
          term: "Anong oras",
          meaning: "What time",
          pronunciation: "a-nong o-ras",
        },
        {
          term: "Hanggang kailan",
          meaning: "Until when",
          pronunciation: "hang-gang ka-i-lan",
        },
        {
          term: "Mula saan",
          meaning: "From where",
          pronunciation: "mu-la sa-an",
        },
      ],
    },
    {
      title: "B. Words Used When Requesting Information",
      items: [
        {
          term: "Impormasyon",
          meaning: "Information",
          pronunciation: "im-por-ma-syon",
        },
        {
          term: "Detalye",
          meaning: "Details",
          pronunciation: "de-tal-ye",
        },
        {
          term: "Paliwanag",
          meaning: "Explanation",
          pronunciation: "pa-li-wa-nag",
        },
        {
          term: "Sagot",
          meaning: "Answer",
          pronunciation: "sa-got",
        },
        {
          term: "Tanong",
          meaning: "Question",
          pronunciation: "ta-nong",
        },
        {
          term: "Dahilan",
          meaning: "Reason",
          pronunciation: "da-hi-lan",
        },
        {
          term: "Layunin",
          meaning: "Purpose",
          pronunciation: "la-yu-nin",
        },
        {
          term: "Proseso",
          meaning: "Process",
          pronunciation: "pro-se-so",
        },
        {
          term: "Kinakailangan",
          meaning: "Required / Necessary",
          pronunciation: "ki-na-ka-i-la-ngan",
        },
        {
          term: "Iskedyul",
          meaning: "Schedule",
          pronunciation: "is-ke-dyul",
        },
        {
          term: "Presyo",
          meaning: "Price",
          pronunciation: "pres-yo",
        },
        {
          term: "Bayad",
          meaning: "Payment",
          pronunciation: "ba-yad",
        },
        {
          term: "Oras",
          meaning: "Time / Hour",
          pronunciation: "o-ras",
        },
        {
          term: "Petsa",
          meaning: "Date",
          pronunciation: "pet-sa",
        },
        {
          term: "Lugar",
          meaning: "Place",
          pronunciation: "lu-gar",
        },
        {
          term: "Kundisyon",
          meaning: "Condition",
          pronunciation: "kun-dis-yon",
        },
        {
          term: "Panuntunan",
          meaning: "Rule / Guideline",
          pronunciation: "pa-nun-tu-nan",
        },
      ],
    },
    {
      title: "C. Polite Expressions",
      items: [
        {
          term: "Maaari po ba akong magtanong?",
          meaning: "May I ask a question?",
          pronunciation: "ma-a-a-ri po ba a-kong mag-ta-nong",
        },
        {
          term: "Puwede po bang malaman...?",
          meaning: "May I know...?",
          pronunciation: "pu-we-de po bang ma-la-man",
        },
        {
          term: "Maaari po bang ipaliwanag ninyo?",
          meaning: "Could you explain it?",
          pronunciation: "ma-a-a-ri po bang i-pa-li-wa-nag nin-yo",
        },
        {
          term: "Pasensya na po, hindi ko naintindihan.",
          meaning: "Sorry, I did not understand.",
          pronunciation: "pa-sen-sya na po hin-di ko na-in-tin-di-han",
        },
        {
          term: "Maaari po bang ulitin?",
          meaning: "Could you repeat that?",
          pronunciation: "ma-a-a-ri po bang u-li-tin",
        },
        {
          term: "Ano po ang ibig sabihin nito?",
          meaning: "What does this mean?",
          pronunciation: "a-no po ang i-big sa-bi-hin ni-to",
        },
        {
          term: "Saan po ako maaaring magtanong?",
          meaning: "Where may I ask for information?",
          pronunciation: "sa-an po a-ko ma-a-a-ring mag-ta-nong",
        },
        {
          term: "Maraming salamat po sa impormasyon.",
          meaning: "Thank you very much for the information.",
          pronunciation: "ma-ra-ming sa-la-mat po sa im-por-ma-syon",
        },
      ],
    },
    {
      title: "D. Common Response Expressions",
      items: [
        {
          term: "Ayon sa impormasyon...",
          meaning: "According to the information...",
        },
        {
          term: "Ang alam ko ay...",
          meaning: "As far as I know...",
        },
        {
          term: "Sa pagkakaalam ko...",
          meaning: "To my knowledge...",
        },
        {
          term: "Hindi ako sigurado.",
          meaning: "I am not sure.",
        },
        {
          term: "Maaari mong tingnan...",
          meaning: "You can check...",
        },
        {
          term: "Kailangan mong...",
          meaning: "You need to...",
        },
        {
          term: "Ang dahilan ay...",
          meaning: "The reason is...",
        },
        {
          term: "Depende sa sitwasyon.",
          meaning: "It depends on the situation.",
        },
        {
          term: "Narito ang mga detalye.",
          meaning: "Here are the details.",
        },
        {
          term: "Wala akong sapat na impormasyon.",
          meaning: "I do not have enough information.",
        },
      ],
    },
  ],
  languageNotes: [
    {
      title: "A. Using Question Words",
      body: [
        "Question words help identify the type of information a speaker wants to obtain.",
      ],
      table: {
        leftHeading: "Question Word",
        rightHeading: "Purpose · Example",
        rows: [
          {
            left: "Ano",
            right: "Asking about things or information · Ano ang pangalan ng programa?",
          },
          {
            left: "Sino",
            right: "Asking about people · Sino ang tagapagsalita?",
          },
          {
            left: "Saan",
            right: "Asking about places · Saan gaganapin ang programa?",
          },
          {
            left: "Kailan",
            right: "Asking about time or date · Kailan ito magsisimula?",
          },
          {
            left: "Bakit",
            right: "Asking for a reason · Bakit ito ipinagpaliban?",
          },
          {
            left: "Paano",
            right: "Asking about a process or method · Paano magparehistro?",
          },
          {
            left: "Alin",
            right: "Asking someone to identify a choice · Alin ang dapat kong piliin?",
          },
          {
            left: "Ilan",
            right: "Asking about quantity · Ilan ang kalahok?",
          },
          {
            left: "Magkano",
            right: "Asking about price or cost · Magkano ang bayad?",
          },
          {
            left: "Gaano",
            right: "Asking about degree, extent, or duration · Gaano ito katagal?",
          },
        ],
      },
      examples: [
        {
          text: "Ano ang kailangan kong dalhin?",
          meaning: "What do I need to bring?",
        },
        {
          text: "Sino ang maaaring tumulong sa akin?",
          meaning: "Who can help me?",
        },
        {
          text: "Kailan ang huling araw ng pagpapasa?",
          meaning: "When is the last day for submission?",
        },
        {
          text: "Bakit kailangang magparehistro?",
          meaning: "Why is registration necessary?",
        },
        {
          text: "Paano makakakuha ng sertipiko?",
          meaning: "How can I get a certificate?",
        },
      ],
    },
    {
      title: "B. Forming Polite Questions",
      body: [
        "When requesting information, it is important to consider the person you are speaking with and the situation.",
        "The expressions po and opo are commonly used to show respect, especially when speaking with elders, teachers, staff, and unfamiliar people.",
        "Common question patterns:",
        "• Maaari po ba akong + verb?",
        "• Puwede po bang + verb?",
        "• Maaari po bang malaman + information?",
        "• Ano po ang + information?",
        "• Saan po matatagpuan + place?",
        "• Maaari po ba akong magtanong tungkol sa programa?",
        "• Puwede po bang malaman ang iskedyul?",
        "• Maaari po bang malaman kung magkano ang bayad?",
        "• Ano po ang mga kinakailangang dokumento?",
        "• Saan po matatagpuan ang tanggapan?",
      ],
      remember: "Politeness can also be shown through respectful tone and appropriate wording. The word po does not need to appear in every sentence.",
    },
    {
      title: "C. Asking Follow-up Questions",
      body: [
        "Sometimes the first answer does not provide all the information needed. A follow-up question helps obtain more details.",
        "First Question:",
        "• Kailan magsisimula ang programa?",
        "• When will the program start?",
        "Response:",
        "• Sa Lunes.",
        "• On Monday.",
        "Follow-up Question:",
        "• Anong oras po ito magsisimula?",
        "• What time will it start?",
        "Response:",
        "• Alas-otso ng umaga.",
        "• Eight o'clock in the morning.",
        "Another example:",
        "First Question:",
        "• Magkano ang bayad?",
        "• How much is the fee?",
        "Response:",
        "• Limang daang piso.",
        "• Five hundred pesos.",
        "Follow-up Question:",
        "• Kasama na po ba rito ang mga materyales?",
        "• Are the materials already included in that amount?",
      ],
    },
    {
      title: "D. Clarifying Information",
      body: [
        "Clarification is necessary when a response is unclear, incomplete, or unfamiliar.",
        "Useful expressions:",
      ],
      examples: [
        {
          text: "Maaari po bang ulitin?",
          meaning: "Could you repeat that?",
        },
        {
          text: "Maaari po bang magsalita nang mas mabagal?",
          meaning: "Could you speak more slowly?",
        },
        {
          text: "Ano po ang ibig sabihin ng salitang iyon?",
          meaning: "What does that word mean?",
        },
        {
          text: "Tama po ba ang pagkaintindi ko?",
          meaning: "Is my understanding correct?",
        },
        {
          text: "Maaari po bang magbigay ng halimbawa?",
          meaning: "Could you give an example?",
        },
      ],
    },
    {
      title: "D. Clarifying Information",
      body: [
        "Example Conversation:",
        "Person A: Kailangan mong isumite ang mga dokumento bago ang takdang petsa.",
        "Person B: Pasensya na po, maaari po bang ulitin kung kailan ang takdang petsa?",
        "Person A: Sa ika-labinlima ng Nobyembre.",
        "Person B: Salamat po. Tama po ba na personal kong isusumite ang mga dokumento?",
        "Person A: Opo, personal ninyo itong kailangang isumite.",
      ],
    },
    {
      title: "E. Distinguishing “Ano,” “Alin,” and “Ilan”",
      body: [
        "These question words are sometimes confused by beginners.",
      ],
      examples: [
        {
          text: "Ano",
          meaning: "What",
        },
      ],
    },
    {
      title: "E. Distinguishing “Ano,” “Alin,” and “Ilan”",
      body: [
        "Used when asking for information or identifying something.",
        "Example: Ano ang pangalan ng paaralan?",
      ],
      examples: [
        {
          text: "Alin",
          meaning: "Which",
        },
      ],
    },
    {
      title: "E. Distinguishing “Ano,” “Alin,” and “Ilan”",
      body: [
        "Used when choosing or identifying one or more items from a known group of options.",
        "Example: Alin sa mga kursong ito ang gusto mong kunin?",
      ],
      examples: [
        {
          text: "Ilan",
          meaning: "How many",
        },
      ],
    },
    {
      title: "E. Distinguishing “Ano,” “Alin,” and “Ilan”",
      body: [
        "Used when asking about quantity.",
        "Example: Ilan ang kailangan kong dalhin?",
      ],
    },
    {
      title: "F. Asking About Processes and Instructions",
      body: [
        "Questions about processes often use paano.",
      ],
      examples: [
        {
          text: "Paano magbukas ng account?",
          meaning: "How do I open an account?",
        },
        {
          text: "Paano mag-apply para sa scholarship?",
          meaning: "How do I apply for a scholarship?",
        },
        {
          text: "Paano makakuha ng kopya ng dokumento?",
          meaning: "How can I get a copy of the document?",
        },
        {
          text: "Paano ko malalaman ang resulta?",
          meaning: "How will I know the result?",
        },
      ],
    },
    {
      title: "F. Asking About Processes and Instructions",
      body: [
        "A complete answer may include instructions in sequence:",
        "• Una, punan ang application form.",
        "• Pagkatapos, ihanda ang mga kinakailangang dokumento.",
        "• Sunod, isumite ang lahat sa tanggapan.",
        "• Sa huli, hintayin ang kumpirmasyon.",
        "English:",
        "• First, fill out the application form.",
        "• After that, prepare the required documents.",
        "• Next, submit everything to the office.",
        "• Finally, wait for confirmation.",
      ],
    },
  ],
  situationsTitle: "Useful Phrases and Sentences",
  situationGroups: [
    {
      title: "A. Asking About People",
      items: [
        {
          term: "Sino ang namamahala rito?",
          meaning: "Who is in charge here?",
        },
        {
          term: "Sino ang maaari kong kausapin?",
          meaning: "Whom can I speak with?",
        },
        {
          term: "Sino ang nagturo sa inyo?",
          meaning: "Who taught you?",
        },
        {
          term: "Kanino ko maaaring ibigay ito?",
          meaning: "To whom can I give this?",
        },
        {
          term: "Sino ang may alam tungkol dito?",
          meaning: "Who knows about this?",
        },
      ],
    },
    {
      title: "B. Asking About Places and Services",
      items: [
        {
          term: "Saan ako maaaring magparehistro?",
          meaning: "Where can I register?",
        },
        {
          term: "Saan matatagpuan ang tanggapan?",
          meaning: "Where is the office located?",
        },
        {
          term: "Mayroon ba kayong ibang sangay?",
          meaning: "Do you have another branch?",
        },
        {
          term: "Saan maaaring kumuha ng impormasyon?",
          meaning: "Where can I get information?",
        },
        {
          term: "Aling opisina ang dapat kong puntahan?",
          meaning: "Which office should I visit?",
        },
      ],
    },
    {
      title: "C. Asking About Schedules and Events",
      items: [
        {
          term: "Kailan magsisimula ang programa?",
          meaning: "When will the program start?",
        },
        {
          term: "Anong oras ang pagbubukas?",
          meaning: "What time does it open?",
        },
        {
          term: "Hanggang kailan bukas ang opisina?",
          meaning: "Until when is the office open?",
        },
        {
          term: "May nakatakda bang pagpupulong bukas?",
          meaning: "Is there a scheduled meeting tomorrow?",
        },
        {
          term: "Gaano katagal ang programa?",
          meaning: "How long is the program?",
        },
      ],
    },
    {
      title: "D. Asking About Prices and Requirements",
      items: [
        {
          term: "Magkano ang bayad?",
          meaning: "How much is the fee?",
        },
        {
          term: "Ano ang mga kinakailangan?",
          meaning: "What are the requirements?",
        },
        {
          term: "May karagdagang bayad ba?",
          meaning: "Is there an additional fee?",
        },
        {
          term: "Anong mga dokumento ang kailangan?",
          meaning: "What documents are needed?",
        },
        {
          term: "Paano ako makakapagbayad?",
          meaning: "How can I pay?",
        },
      ],
    },
    {
      title: "E. Asking for Clarification",
      items: [
        {
          term: "Maaari po bang ipaliwanag ninyo nang mas malinaw?",
          meaning: "Could you explain it more clearly?",
        },
        {
          term: "Ano po ang ibig ninyong sabihin?",
          meaning: "What do you mean?",
        },
        {
          term: "Tama po ba ang pagkaintindi ko?",
          meaning: "Is my understanding correct?",
        },
        {
          term: "Maaari po bang magbigay kayo ng halimbawa?",
          meaning: "Could you give an example?",
        },
        {
          term: "Ibig sabihin po ba nito ay...?",
          meaning: "Does this mean that...?",
        },
      ],
    },
  ],
  conversations: [
    {
      title: "Dialogue 1: Asking About School Enrollment",
      lines: [
        {
          speaker: "Student",
          text: "Magandang umaga po. Maaari po ba akong magtanong tungkol sa pagpapatala?",
          translation: "Good morning. May I ask about enrollment?",
        },
        {
          speaker: "Staff",
          text: "Magandang umaga rin. Ano ang nais mong malaman?",
          translation: "Good morning to you too. What would you like to know?",
        },
        {
          speaker: "Student",
          text: "Ano-ano po ang mga kinakailangang dokumento?",
          translation: "What are the required documents?",
        },
        {
          speaker: "Staff",
          text: "Kailangan mo ng birth certificate, report card, at application form.",
          translation: "You need a birth certificate, report card, and application form.",
        },
        {
          speaker: "Student",
          text: "Kailan po ang huling araw ng pagpapatala?",
          translation: "When is the last day of enrollment?",
        },
        {
          speaker: "Staff",
          text: "Sa katapusan ng buwan.",
          translation: "At the end of the month.",
        },
        {
          speaker: "Student",
          text: "May bayad po ba sa pagpapatala?",
          translation: "Is there an enrollment fee?",
        },
        {
          speaker: "Staff",
          text: "Wala. Libre ang pagpapatala.",
          translation: "No. Enrollment is free.",
        },
        {
          speaker: "Student",
          text: "Maraming salamat po sa impormasyon.",
          translation: "Thank you very much for the information.",
        },
      ],
    },
    {
      title: "Dialogue 2: Asking About a Scholarship",
      lines: [
        {
          speaker: "Mika",
          text: "Excuse me, may I ask about the scholarship program?",
          translation: "Excuse me, may I ask about the scholarship program?",
        },
        {
          speaker: "Staff",
          text: "Of course. What would you like to know?",
          translation: "Of course. What would you like to know?",
        },
        {
          speaker: "Mika",
          text: "Ano po ang mga kwalipikasyon para makapag-apply?",
          translation: "What are the qualifications for applying?",
        },
        {
          speaker: "Staff",
          text: "Kailangang kasalukuyang mag-aaral ka at matugunan ang mga itinakdang pamantayan.",
          translation: "You must currently be a student and meet the established criteria.",
        },
        {
          speaker: "Mika",
          text: "Paano po ako makakapag-apply?",
          translation: "How can I apply?",
        },
        {
          speaker: "Staff",
          text: "Maaari kang kumuha ng application form sa aming opisina.",
          translation: "You can get an application form from our office.",
        },
        {
          speaker: "Mika",
          text: "Kailan po malalaman ang resulta?",
          translation: "When will the results be announced?",
        },
        {
          speaker: "Staff",
          text: "Iaanunsyo ang resulta pagkatapos suriin ang lahat ng aplikasyon.",
          translation: "The results will be announced after all applications have been reviewed.",
        },
        {
          speaker: "Mika",
          text: "Salamat po sa inyong oras.",
          translation: "Thank you for your time.",
        },
      ],
    },
    {
      title: "Dialogue 3: Asking About an Event",
      lines: [
        {
          speaker: "Carlo",
          text: "Alam mo ba kung kailan gaganapin ang paligsahan?",
          translation: "Do you know when the competition will be held?",
        },
        {
          speaker: "Lena",
          text: "Sa Sabado raw.",
          translation: "I heard it will be on Saturday.",
        },
        {
          speaker: "Carlo",
          text: "Anong oras ito magsisimula?",
          translation: "What time will it start?",
        },
        {
          speaker: "Lena",
          text: "Alas-nuwebe ng umaga.",
          translation: "At nine in the morning.",
        },
        {
          speaker: "Carlo",
          text: "Saan ito gaganapin?",
          translation: "Where will it be held?",
        },
        {
          speaker: "Lena",
          text: "Sa bulwagan ng paaralan.",
          translation: "At the school auditorium.",
        },
        {
          speaker: "Carlo",
          text: "Kailangan ba nating magparehistro?",
          translation: "Do we need to register?",
        },
        {
          speaker: "Lena",
          text: "Oo. Kailangan nating magparehistro bago ang Biyernes.",
          translation: "Yes. We need to register before Friday.",
        },
        {
          speaker: "Carlo",
          text: "Sige, salamat sa impormasyon!",
          translation: "Okay, thanks for the information!",
        },
      ],
    },
  ],
  matchActivity: {
    title: "Match the Question Words",
    instructions: "Match each Filipino question word with its English meaning.",
    pairs: [
      {
        id: "1",
        term: "Ano",
        answer: "What",
      },
      {
        id: "2",
        term: "Sino",
        answer: "Who",
      },
      {
        id: "3",
        term: "Saan",
        answer: "Where",
      },
      {
        id: "4",
        term: "Kailan",
        answer: "When",
      },
      {
        id: "5",
        term: "Bakit",
        answer: "Why",
      },
      {
        id: "6",
        term: "Paano",
        answer: "How",
      },
      {
        id: "7",
        term: "Alin",
        answer: "Which",
      },
      {
        id: "8",
        term: "Ilan",
        answer: "How many",
      },
      {
        id: "9",
        term: "Magkano",
        answer: "How much",
      },
      {
        id: "10",
        term: "Gaano",
        answer: "To what extent / How long",
      },
    ],
  },
  choiceActivity: {
    title: "Choose the Correct Question",
    questions: [
      {
        id: 1,
        prompt: "You want to know the price of a product. What should you ask?",
        options: [
          {
            key: "A",
            text: "Saan ito matatagpuan?",
          },
          {
            key: "B",
            text: "Magkano ito?",
          },
          {
            key: "C",
            text: "Sino ang bumili nito?",
          },
          {
            key: "D",
            text: "Kailan ito dumating?",
          },
        ],
        answerKey: "B",
        title: "Choose the Correct Question",
      },
      {
        id: 2,
        prompt: "You want to know the date of an event. What should you ask?",
        options: [
          {
            key: "A",
            text: "Bakit ito gaganapin?",
          },
          {
            key: "B",
            text: "Sino ang dadalo?",
          },
          {
            key: "C",
            text: "Kailan ito gaganapin?",
          },
          {
            key: "D",
            text: "Magkano ang bayad?",
          },
        ],
        answerKey: "C",
        title: "Choose the Correct Question",
      },
      {
        id: 3,
        prompt: "You want to know the person in charge. What should you ask?",
        options: [
          {
            key: "A",
            text: "Sino ang namamahala rito?",
          },
          {
            key: "B",
            text: "Ano ang pangalan nito?",
          },
          {
            key: "C",
            text: "Saan ito matatagpuan?",
          },
          {
            key: "D",
            text: "Paano ito ginagawa?",
          },
        ],
        answerKey: "A",
        title: "Choose the Correct Question",
      },
      {
        id: 4,
        prompt: "You want to know the steps of a process. What should you ask?",
        options: [
          {
            key: "A",
            text: "Ilan ang kailangan?",
          },
          {
            key: "B",
            text: "Paano ito ginagawa?",
          },
          {
            key: "C",
            text: "Kanino ito ibibigay?",
          },
          {
            key: "D",
            text: "Kailan ito natapos?",
          },
        ],
        answerKey: "B",
        title: "Choose the Correct Question",
      },
      {
        id: 5,
        prompt: "You want to ask a teacher about an assignment.",
        options: [
          {
            key: "A",
            text: "Hoy, ano iyon?",
          },
          {
            key: "B",
            text: "Maaari po ba akong magtanong tungkol sa takdang-aralin?",
          },
          {
            key: "C",
            text: "Hindi ko alam iyan.",
          },
          {
            key: "D",
            text: "Bilisan ninyo.",
          },
        ],
        answerKey: "B",
        title: "Identify the Polite Expression",
        instructions: "Choose the most appropriate expression for each situation.",
      },
      {
        id: 6,
        prompt: "You did not understand the instructions.",
        options: [
          {
            key: "A",
            text: "Bahala na.",
          },
          {
            key: "B",
            text: "Ayoko nang makinig.",
          },
          {
            key: "C",
            text: "Pasensya na po, maaari po bang ulitin ang mga tagubilin?",
          },
          {
            key: "D",
            text: "Hindi mahalaga.",
          },
        ],
        answerKey: "C",
        title: "Identify the Polite Expression",
        instructions: "Choose the most appropriate expression for each situation.",
      },
      {
        id: 7,
        prompt: "You want someone to explain a word.",
        options: [
          {
            key: "A",
            text: "Ano po ang ibig sabihin ng salitang ito?",
          },
          {
            key: "B",
            text: "Sino ang nagsabi nito?",
          },
          {
            key: "C",
            text: "Kailan ito sinabi?",
          },
          {
            key: "D",
            text: "Saan ito nanggaling?",
          },
        ],
        answerKey: "A",
        title: "Identify the Polite Expression",
        instructions: "Choose the most appropriate expression for each situation.",
      },
      {
        id: 8,
        prompt: "Initial Question: Kailan magsisimula ang programa?\nResponse: Sa Lunes.",
        options: [
          {
            key: "A",
            text: "Magkano ang bayad?",
          },
          {
            key: "B",
            text: "Anong oras ito magsisimula?",
          },
          {
            key: "C",
            text: "Sino ang bumili nito?",
          },
          {
            key: "D",
            text: "Saan ang palengke?",
          },
        ],
        answerKey: "B",
        title: "Identify the Correct Follow-up Question",
        instructions: "Read the initial question and response. Choose the most appropriate follow-up question.",
      },
      {
        id: 9,
        prompt: "Initial Question: Magkano ang bayad sa seminar?\nResponse: Limang daang piso.",
        options: [
          {
            key: "A",
            text: "Kasama na ba rito ang mga materyales?",
          },
          {
            key: "B",
            text: "Sino ang nagturo sa iyo?",
          },
          {
            key: "C",
            text: "Kailan ka umuwi?",
          },
          {
            key: "D",
            text: "Saan ka nakatira?",
          },
        ],
        answerKey: "A",
        title: "Identify the Correct Follow-up Question",
        instructions: "Read the initial question and response. Choose the most appropriate follow-up question.",
      },
      {
        id: 10,
        prompt: "Initial Question: Saan matatagpuan ang opisina?\nResponse: Sa ikalawang palapag.",
        options: [
          {
            key: "A",
            text: "Bakit ito mahal?",
          },
          {
            key: "B",
            text: "Ilan ang dumalo?",
          },
          {
            key: "C",
            text: "Paano magbayad?",
          },
          {
            key: "D",
            text: "Aling hagdan ang maaari kong gamitin?",
          },
        ],
        answerKey: "D",
        title: "Identify the Correct Follow-up Question",
        instructions: "Read the initial question and response. Choose the most appropriate follow-up question.",
      },
    ],
  },
  fillInBlanks: {
    title: "Fill in the Blanks",
    instructions: "Choose the correct word from the word bank.",
    items: [
      {
        id: "3-1",
        sentence: "______ ang namamahala sa opisina?",
        answer: "Sino",
        title: "Fill in the Blanks",
        instructions: "Choose the correct word from the word bank.",
        wordBank: [
          "Sino",
          "Kailan",
          "Magkano",
          "Paano",
          "Bakit",
        ],
      },
      {
        id: "3-2",
        sentence: "______ magsisimula ang programa?",
        answer: "Kailan",
        title: "Fill in the Blanks",
        instructions: "Choose the correct word from the word bank.",
        wordBank: [
          "Sino",
          "Kailan",
          "Magkano",
          "Paano",
          "Bakit",
        ],
      },
      {
        id: "3-3",
        sentence: "______ ang bayad sa pagpapatala?",
        answer: "Magkano",
        title: "Fill in the Blanks",
        instructions: "Choose the correct word from the word bank.",
        wordBank: [
          "Sino",
          "Kailan",
          "Magkano",
          "Paano",
          "Bakit",
        ],
      },
      {
        id: "3-4",
        sentence: "______ ako makakapag-apply?",
        answer: "Paano",
        title: "Fill in the Blanks",
        instructions: "Choose the correct word from the word bank.",
        wordBank: [
          "Sino",
          "Kailan",
          "Magkano",
          "Paano",
          "Bakit",
        ],
      },
      {
        id: "3-5",
        sentence: "______ ipinagpaliban ang pagpupulong?",
        answer: "Bakit",
        title: "Fill in the Blanks",
        instructions: "Choose the correct word from the word bank.",
        wordBank: [
          "Sino",
          "Kailan",
          "Magkano",
          "Paano",
          "Bakit",
        ],
      },
    ],
  },
  arrangeWords: {
    title: "Arrange the Words",
    instructions: "Arrange the words to form a correct Filipino question or sentence.",
    items: [
      {
        id: "1",
        words: [
          "pangalan",
          "Ano",
          "programa",
          "ng",
          "ang",
        ],
        answer: [
          "Ano",
          "ang",
          "pangalan",
          "ng",
          "programa",
        ],
        display: "Ano ang pangalan ng programa?",
      },
      {
        id: "2",
        words: [
          "gaganapin",
          "Saan",
          "ang",
          "paligsahan",
        ],
        answer: [
          "Saan",
          "gaganapin",
          "ang",
          "paligsahan",
        ],
        display: "Saan gaganapin ang paligsahan?",
      },
      {
        id: "3",
        words: [
          "bayad",
          "Magkano",
          "ang",
        ],
        answer: [
          "Magkano",
          "ang",
          "bayad",
        ],
        display: "Magkano ang bayad?",
      },
      {
        id: "4",
        words: [
          "ulitin",
          "bang",
          "Maaari",
          "po",
        ],
        answer: [
          "Maaari",
          "po",
          "bang",
          "ulitin",
        ],
        display: "Maaari po bang ulitin?",
      },
    ],
  },
  assessment: {
    instructions: "Choose the correct answer.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "Which Filipino word means “Where”?",
        options: [
          {
            key: "A",
            text: "Sino",
          },
          {
            key: "B",
            text: "Saan",
          },
          {
            key: "C",
            text: "Kailan",
          },
          {
            key: "D",
            text: "Bakit",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "What does “Magkano ang bayad?” mean?",
        options: [
          {
            key: "A",
            text: "Where is the payment?",
          },
          {
            key: "B",
            text: "Who will pay?",
          },
          {
            key: "C",
            text: "How much is the fee?",
          },
          {
            key: "D",
            text: "When is the payment?",
          },
        ],
        answerKey: "C",
      },
      {
        id: 3,
        prompt: "Which question asks for a reason?",
        options: [
          {
            key: "A",
            text: "Bakit ito nangyari?",
          },
          {
            key: "B",
            text: "Saan ito nangyari?",
          },
          {
            key: "C",
            text: "Kailan ito nangyari?",
          },
          {
            key: "D",
            text: "Sino ang naroon?",
          },
        ],
        answerKey: "A",
      },
      {
        id: 4,
        prompt: "Which is an appropriate polite expression when asking for information?",
        options: [
          {
            key: "A",
            text: "Hoy, sabihin mo nga.",
          },
          {
            key: "B",
            text: "Maaari po ba akong magtanong?",
          },
          {
            key: "C",
            text: "Wala akong pakialam.",
          },
          {
            key: "D",
            text: "Bilisan mo.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 5,
        prompt: "Which word means “Which”?",
        options: [
          {
            key: "A",
            text: "Alin",
          },
          {
            key: "B",
            text: "Ilan",
          },
          {
            key: "C",
            text: "Ano",
          },
          {
            key: "D",
            text: "Kanino",
          },
        ],
        answerKey: "A",
      },
      {
        id: 6,
        prompt: "Someone gives you instructions that you do not understand. What should you say?",
        options: [
          {
            key: "A",
            text: "Ayoko na.",
          },
          {
            key: "B",
            text: "Maaari po bang ulitin ang mga tagubilin?",
          },
          {
            key: "C",
            text: "Hindi kita papansinin.",
          },
          {
            key: "D",
            text: "Bahala ka na.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 7,
        prompt: "Which question asks about the number of participants?",
        options: [
          {
            key: "A",
            text: "Sino ang kalahok?",
          },
          {
            key: "B",
            text: "Kailan ang kalahok?",
          },
          {
            key: "C",
            text: "Ilan ang kalahok?",
          },
          {
            key: "D",
            text: "Saan ang kalahok?",
          },
        ],
        answerKey: "C",
      },
      {
        id: 8,
        prompt: "What does “Paano ako makakapag-apply?” mean?",
        options: [
          {
            key: "A",
            text: "Who can apply?",
          },
          {
            key: "B",
            text: "How can I apply?",
          },
          {
            key: "C",
            text: "Where is the application?",
          },
          {
            key: "D",
            text: "When can I apply?",
          },
        ],
        answerKey: "B",
      },
      {
        id: 9,
        prompt: "Which question is the most appropriate follow-up after someone tells you that an event will begin\non Monday?",
        options: [
          {
            key: "A",
            text: "Anong oras ito magsisimula?",
          },
          {
            key: "B",
            text: "Magkano ang pagkain?",
          },
          {
            key: "C",
            text: "Sino ang may-ari nito?",
          },
          {
            key: "D",
            text: "Bakit ka umalis?",
          },
        ],
        answerKey: "A",
      },
      {
        id: 10,
        prompt: "What does “Tama po ba ang pagkaintindi ko?” mean?",
        options: [
          {
            key: "A",
            text: "Do I have the correct address?",
          },
          {
            key: "B",
            text: "Is my understanding correct?",
          },
          {
            key: "C",
            text: "Can I ask another question?",
          },
          {
            key: "D",
            text: "Where should I go?",
          },
        ],
        answerKey: "B",
      },
    ],
  },
  extraActivities: [
    {
      title: "Arrange the Words",
      kind: "arrange",
      instructions: "Arrange the words to form a correct Filipino question or sentence.",
      items: [
        "maaaring / Sino / ko / kausapin",
      ],
      answers: [
        "Sino ang maaari kong kausapin?",
      ],
    },
    {
      title: "Information-Seeking Role-Play",
      kind: "roleplay",
      instructions: "Learners will be presented with different situations. They must ask at least three relevant questions and respond appropriately.\nSituation A: School Enrollment\nYou want to enroll in a school. Ask about:",
      items: [
        "Enrollment requirements.",
        "Registration deadline.",
        "Enrollment fees.",
        "Office location.",
        "Available transportation.",
        "Departure schedule.",
        "Fare.",
        "Travel duration.",
        "Event date.",
        "Starting time.",
        "Venue.",
        "Registration requirements.",
      ],
      note: "Situation B: Public Transportation\nYou want to travel to another town. Ask about:\nSituation C: Community Event\nYou want to attend a community event. Ask about:\nThe learner may record their spoken responses or participate in an interactive simulated conversation.",
    },
  ],
  rewards: {
    items: [
      {
        section: "vocabulary",
        label: "Complete Vocabulary Learning",
        xp: 10,
      },
      {
        section: "conversation",
        label: "Complete Guided Conversations + Complete Information-Seeking Role-Play",
        xp: 30,
      },
      {
        section: "sentences",
        label: "Complete Practice Activities",
        xp: 15,
      },
      {
        section: "assessment",
        label: "Pass Lesson Assessment",
        xp: 15,
      },
    ],
    total: 70,
    badge: {
      name: "Information Seeker Badge",
      description: "Awarded to learners who successfully demonstrate the ability to ask questions, request information, and clarify details in Filipino.",
    },
    completionRequirement: "Complete the vocabulary section. Finish the guided conversations. Complete the practice activities. Obtain at least 70% in the lesson assessment.",
  },
  expectedOutcomes: [
    "Use common Filipino question words correctly.",
    "Request information politely.",
    "Ask questions about people, places, schedules, prices, and requirements.",
    "Ask follow-up questions to obtain additional details.",
    "Clarify information when something is unclear.",
    "Participate in everyday conversations that involve requesting information.",
  ],
};
