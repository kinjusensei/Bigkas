import { StructuredLesson } from "../../types/structuredLesson";

// Tagalog Lesson 29 — imported from "Lesson Plan.pdf", pages 584–605.
// The Tagalog and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.

export const tagalogLesson29: StructuredLesson = {
  lessonId: "tagalog_29",
  dialect: "tagalog",
  dialectLabel: "Tagalog",
  lessonNumber: 29,
  title: "Situational Dialogues and Role-Playing",
  level: "Advanced",
  unit: "Unit 3 – Real-Life Communication",
  estimatedDuration: "50–60 minutes",
  prerequisite: "Lessons 1–28",
  intro: [
    "Learning a language involves more than memorizing vocabulary and understanding grammar. Learners must also be able to use the language in actual conversations.",
    "Situational dialogues allow learners to practice how they would communicate in different environments, such as public places, schools, workplaces, restaurants, and emergency situations.",
    "Role-playing provides an opportunity to apply vocabulary, sentence construction, pronunciation, and conversational skills in simulated real-life situations.",
    "In this lesson, learners will practice responding appropriately, asking questions, explaining situations, making requests, and resolving misunderstandings.",
    "What Are Situational Dialogues?",
    "Situational dialogues are conversations created around specific situations that people may encounter in everyday life.",
    "For example, a person may need to:",
    "• Ask for directions when visiting an unfamiliar place.",
    "• Order food at a restaurant.",
    "• Ask for information at a school.",
    "• Report a lost item.",
    "• Request assistance from another person.",
    "• Explain a problem to a supervisor.",
    "• Communicate during an emergency.",
    "Each situation requires different vocabulary and expressions.",
    "What Is Role-Playing?",
    "Role-playing is an activity in which learners act as different characters in a simulated situation.",
    "For example, one learner may act as a customer while another acts as a store employee.",
    "Through role-playing, learners can practice how to:",
    "• Start a conversation.",
    "• Ask and answer questions.",
    "• Make requests.",
    "• Explain problems.",
    "• Respond to unexpected situations.",
    "• End conversations appropriately.",
    "Why Is It Important?",
    "Role-playing helps learners move beyond memorizing expressions and begin using Filipino in meaningful conversations.",
    "It also allows learners to practice communication strategies when they do not immediately know the correct word or expression.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Recognize common expressions used in different real-life situations.",
    "Participate in conversations using appropriate Filipino vocabulary and sentence structures.",
    "Adjust their communication style depending on the situation and the person they are speaking with.",
    "Respond appropriately to questions, requests, and unexpected situations.",
    "Use clarification and conversational expressions to maintain communication.",
    "Construct realistic dialogues based on given scenarios.",
    "Demonstrate conversational skills through written and spoken role-playing activities.",
  ],
  expressionGroups: [
    {
      title: "A. Starting and Maintaining Conversations",
      items: [
        {
          term: "Magandang araw!",
          meaning: "Good day!",
        },
        {
          term: "Kumusta ka?",
          meaning: "How are you?",
        },
        {
          term: "Maaari ba akong magtanong?",
          meaning: "May I ask a question?",
        },
        {
          term: "May maitutulong ba ako?",
          meaning: "Is there anything I can help with?",
        },
        {
          term: "Maaari mo bang ipaliwanag?",
          meaning: "Could you explain?",
        },
        {
          term: "Ano ang ibig mong sabihin?",
          meaning: "What do you mean?",
        },
        {
          term: "Maaari mo bang ulitin?",
          meaning: "Could you repeat that?",
        },
        {
          term: "Nauunawaan ko.",
          meaning: "I understand.",
        },
        {
          term: "Sandali lamang.",
          meaning: "Just a moment.",
        },
        {
          term: "Ipagpaumanhin mo.",
          meaning: "Excuse me / Please forgive me.",
        },
        {
          term: "Salamat sa iyong tulong.",
          meaning: "Thank you for your help.",
        },
        {
          term: "Hanggang sa muli!",
          meaning: "Until next time!",
        },
      ],
    },
    {
      title: "B. Asking for Assistance",
      items: [
        {
          term: "Maaari mo ba akong tulungan?",
          meaning: "Can you help me?",
        },
        {
          term: "Kailangan ko ng tulong.",
          meaning: "I need help.",
        },
        {
          term: "Maaari mo ba akong samahan?",
          meaning: "Can you accompany me?",
        },
        {
          term: "Hindi ko alam kung saan pupunta.",
          meaning: "I do not know where to go.",
        },
        {
          term: "Maaari mo ba akong turuan?",
          meaning: "Can you teach me?",
        },
        {
          term: "Sino ang maaari kong lapitan?",
          meaning: "Whom can I approach?",
        },
        {
          term: "Saan ako maaaring magtanong?",
          meaning: "Where can I ask for information?",
        },
      ],
    },
    {
      title: "C. Explaining Problems",
      items: [
        {
          term: "May problema po ako.",
          meaning: "I have a problem.",
        },
        {
          term: "Hindi ko po makita ang aking gamit.",
          meaning: "I cannot find my belongings.",
        },
        {
          term: "Nagkaroon po ng hindi pagkakaunawaan.",
          meaning: "A misunderstanding occurred.",
        },
        {
          term: "Hindi po gumagana ang aparatong ito.",
          meaning: "This device is not working.",
        },
        {
          term: "Hindi ko po inaasahan ang nangyari.",
          meaning: "I did not expect what happened.",
        },
        {
          term: "Maaari po ba nating pag-usapan ito?",
          meaning: "Can we discuss this?",
        },
        {
          term: "Nais ko pong ipaliwanag ang sitwasyon.",
          meaning: "I would like to explain the situation.",
        },
      ],
    },
    {
      title: "D. Responding to Unexpected Situations",
      items: [
        {
          term: "Ano ang nangyari?",
          meaning: "What happened?",
        },
        {
          term: "Ayos ka lang ba?",
          meaning: "Are you okay?",
        },
        {
          term: "Huwag kang mag-alala.",
          meaning: "Do not worry.",
        },
        {
          term: "Tatawag ako ng tulong.",
          meaning: "I will call for help.",
        },
        {
          term: "Sandali, aalamin ko muna.",
          meaning: "Wait, I will check first.",
        },
        {
          term: "Hindi ko sigurado.",
          meaning: "I am not sure.",
        },
        {
          term: "Tingnan natin kung ano ang maaari nating gawin.",
          meaning: "Let us see what we can do.",
        },
        {
          term: "Kailangan nating kumilos agad.",
          meaning: "We need to act immediately.",
        },
      ],
    },
    {
      title: "E. Ending a Conversation",
      items: [
        {
          term: "Maraming salamat sa iyong tulong.",
          meaning: "Thank you very much for your help.",
        },
        {
          term: "Ikinagagalak kitang makilala.",
          meaning: "It is a pleasure to meet you.",
        },
        {
          term: "Paalam muna.",
          meaning: "Goodbye for now.",
        },
        {
          term: "Magkita tayo muli.",
          meaning: "See you again.",
        },
        {
          term: "Ingat ka!",
          meaning: "Take care!",
        },
        {
          term: "Sana ay magkita tayong muli.",
          meaning: "I hope we meet again.",
        },
      ],
    },
  ],
  languageNotes: [
    {
      title: "A. Choosing the Appropriate Language for a Situation",
      body: [
        "Not every conversation should use the same expressions.",
        "The language used when talking to a close friend may differ from the language used when speaking to a teacher, customer, or stranger.",
        "Consider these examples:",
      ],
      table: {
        leftHeading: "",
        rightHeading: "",
        rows: [
          {
            left: "Situation",
            right: "Informal Expression · Polite Expression",
          },
          {
            left: "Asking for help",
            right: "\"Tulungan mo ako.\" · \"Maaari po ba akong humingi ng tulong?\"",
          },
          {
            left: "Asking someone to repeat",
            right: "\"Ano ulit?\" · \"Maaari po bang ulitin ninyo?\"",
          },
          {
            left: "Asking for directions",
            right: "\"Saan ang palengke?\" · \"Maaari po bang malaman kung saan ang palengke?\"",
          },
          {
            left: "Requesting permission",
            right: "\"Puwede ba akong pumasok?\" · \"Maaari po ba akong pumasok?\"",
          },
          {
            left: "Asking for information",
            right: "\"Ano ang oras?\" · \"Maaari ko po bang malaman ang oras?\"",
          },
        ],
      },
    },
    {
      title: "A. Choosing the Appropriate Language for a Situation",
      body: [
        "The appropriate expression depends on the relationship between the speakers and the situation.",
      ],
    },
    {
      title: "B. Starting a Conversation",
      body: [
        "A good conversation usually begins with an appropriate greeting or opening expression.",
        "Casual conversation:",
        "\"Uy! Kumusta ka na?\"",
        "Polite conversation:",
        "\"Magandang umaga po. Maaari po ba akong magtanong?\"",
        "Professional conversation:",
        "\"Magandang araw po. Nais ko sanang humingi ng impormasyon tungkol sa serbisyong inyong iniaalok.\"",
        "A suitable opening helps establish a comfortable and respectful conversation.",
      ],
    },
    {
      title: "C. Asking Follow-Up Questions",
      body: [
        "A conversation should not consist only of one question and one answer. Follow-up questions help people understand information more clearly.",
        "Person A: Saan ka pupunta?",
        "Person B: Pupunta ako sa munisipyo.",
        "Person A: Ano ang gagawin mo roon?",
        "Person B: Magtatanong ako tungkol sa isang dokumento.",
        "Person A: Anong dokumento ang kailangan mo?",
        "Person B: Kailangan ko ng sertipiko para sa aking aplikasyon.",
        "Useful follow-up expressions:",
        "• \"Bakit naman?\"",
        "• \"Paano nangyari iyon?\"",
        "• \"Ano ang sumunod na nangyari?\"",
        "• \"Maaari mo pa bang ipaliwanag?\"",
        "• \"May iba ka pa bang kailangan?\"",
      ],
    },
    {
      title: "D. Handling Misunderstandings",
      body: [
        "Misunderstandings can happen when people hear something incorrectly or interpret a statement differently.",
        "Instead of immediately arguing, learners should clarify the information.",
        "Person A: Akala ko ay sa Lunes ang ating pagpupulong.",
        "Person B: Hindi, sa Martes pala ito.",
        "Person A: Pasensya na. Mali pala ang pagkaunawa ko.",
        "Person B: Ayos lang. Ipinadala ko rin naman ang pagbabago sa iskedyul.",
        "Useful expressions:",
        "• \"Pasensya na, mali ang pagkaunawa ko.\"",
        "• \"Iba yata ang pagkaunawa ko sa sinabi mo.\"",
        "• \"Maaari ba nating linawin ang napag-usapan?\"",
        "• \"Salamat sa pagwawasto.\"",
        "• \"Ngayon ay malinaw na sa akin.\"",
      ],
    },
    {
      title: "E. Responding Naturally",
      body: [
        "Natural communication requires learners to respond according to the meaning and context of a conversation.",
        "For example:",
        "Question: \"Maaari mo ba akong tulungan?\"",
        "An appropriate response may be:",
        "• \"Siyempre. Ano ang kailangan mo?\"",
        "• \"Oo naman. Ano ang maitutulong ko?\"",
        "• \"Pasensya na, may ginagawa pa ako ngayon. Maaari ba kitang tulungan mamaya?\"",
        "A response does not always have to be a direct yes or no. Learners should be able to explain their answers when necessary.",
      ],
    },
    {
      title: "F. Maintaining a Conversation When You Do Not Know a Word",
      body: [
        "Language learners may sometimes forget a word or fail to understand an expression.",
        "They can use communication strategies to continue the conversation.",
        "Asking for another explanation:",
        "\"Maaari mo bang sabihin iyon sa ibang paraan?\"",
        "Describing an unfamiliar object:",
        "\"Hindi ko alam ang tawag dito, pero ito ang ginagamit sa pagsusulat.\"",
        "Confirming information:",
        "\"Ibig mo bang sabihin ay kailangan kong pumunta roon bukas?\"",
        "Asking for a translation:",
        "\"Ano ang tawag dito sa Filipino?\"",
        "These expressions help learners maintain communication even when their vocabulary is limited.",
      ],
    },
    {
      title: "Lesson Summary",
      body: [
        "In this lesson, learners practiced using Filipino in different everyday situations through guided dialogues and role-playing activities.",
        "They learned how to begin conversations, ask questions, request assistance, explain problems, clarify misunderstandings, and respond appropriately to different situations.",
        "Key Takeaway:",
        "Language becomes useful when learners can apply it in real situations. The ability to communicate effectively means knowing not only what to say, but also how and when to say it.",
      ],
    },
  ],
  conversations: [
    {
      title: "Situation 1: Asking for Directions",
      lines: [
        {
          speaker: "Characters",
          text: "Tourist and Local Resident",
        },
        {
          speaker: "Tourist",
          text: "Magandang umaga po. Maaari po ba akong magtanong?",
        },
        {
          speaker: "Resident",
          text: "Magandang umaga rin. Ano po iyon?",
        },
        {
          speaker: "Tourist",
          text: "Saan po matatagpuan ang pinakamalapit na istasyon ng bus?",
        },
        {
          speaker: "Resident",
          text: "Dumiretso po kayo sa kalsadang iyon, pagkatapos ay lumiko sa kanan. Makikita ninyo ang istasyon sa tabi ng palengke.",
        },
        {
          speaker: "Tourist",
          text: "Malayo po ba iyon mula rito?",
        },
        {
          speaker: "Resident",
          text: "Hindi naman po. Mga limang minutong lakad lamang.",
        },
        {
          speaker: "Tourist",
          text: "Maraming salamat po sa inyong tulong.",
        },
        {
          speaker: "Resident",
          text: "Walang anuman po. Ingat sa paglalakad!",
        },
      ],
    },
    {
      title: "Situation 2: Ordering Food at a Restaurant",
      lines: [
        {
          speaker: "Characters",
          text: "Customer and Server",
        },
        {
          speaker: "Server",
          text: "Magandang hapon po! Ano po ang maaari kong ihain sa inyo?",
        },
        {
          speaker: "Customer",
          text: "Magandang hapon din po. Maaari ko po bang makita ang menu?",
        },
        {
          speaker: "Server",
          text: "Opo. Narito po ang menu.",
        },
        {
          speaker: "Customer",
          text: "Ano po ang mairerekomenda ninyo?",
        },
        {
          speaker: "Server",
          text: "Subukan ninyo po ang aming sinigang na baboy. Isa po iyon sa mga paborito ng aming mga customer.",
        },
        {
          speaker: "Customer",
          text: "Sige po. Isang sinigang na baboy at isang basong tubig.",
        },
        {
          speaker: "Server",
          text: "Opo. May iba pa po ba kayong nais?",
        },
        {
          speaker: "Customer",
          text: "Wala na po. Maraming salamat.",
        },
      ],
    },
    {
      title: "Situation 3: Asking for Information at School",
      lines: [
        {
          speaker: "Characters",
          text: "Student and School Staff Member",
        },
        {
          speaker: "Student",
          text: "Magandang umaga po. Nais ko po sanang magtanong tungkol sa pagpapatala.",
        },
        {
          speaker: "Staff",
          text: "Magandang umaga rin. Ano po ang nais ninyong malaman?",
        },
        {
          speaker: "Student",
          text: "Ano-ano po ang mga dokumentong kailangan kong isumite?",
        },
        {
          speaker: "Staff",
          text: "Kailangan ninyo ng kopya ng inyong katibayan ng pagtatapos, talaan ng mga marka, at iba pang kinakailangang dokumento.",
        },
        {
          speaker: "Student",
          text: "May takdang-oras po ba ang pagsusumite?",
        },
        {
          speaker: "Staff",
          text: "Opo. Hanggang Biyernes lamang ang pagtanggap namin ng mga dokumento.",
        },
        {
          speaker: "Student",
          text: "Nauunawaan ko po. Maraming salamat sa impormasyon.",
        },
      ],
    },
    {
      title: "Situation 4: Reporting a Lost Item",
      lines: [
        {
          speaker: "Characters",
          text: "Student and Security Personnel",
        },
        {
          speaker: "Student",
          text: "Magandang hapon po. Maaari po ba akong humingi ng tulong?",
        },
        {
          speaker: "Security Personnel",
          text: "Magandang hapon. Ano ang nangyari?",
        },
        {
          speaker: "Student",
          text: "Nawala ko po ang aking pitaka. Huling nakita ko po ito sa silid-aklatan.",
        },
        {
          speaker: "Security Personnel",
          text: "Kailan mo ito huling nakita?",
        },
        {
          speaker: "Student",
          text: "Kaninang umaga po, bago ako umalis sa silid-aklatan.",
        },
        {
          speaker: "Security Personnel",
          text: "Ano ang itsura ng pitaka?",
        },
        {
          speaker: "Student",
          text: "Kulay itim po ito at may maliit na pulang disenyo sa harap.",
        },
        {
          speaker: "Security Personnel",
          text: "Sige. Itatala natin ang iyong ulat at susuriin kung may nakapagsauli nito.",
        },
        {
          speaker: "Student",
          text: "Maraming salamat po sa inyong tulong.",
        },
      ],
    },
    {
      title: "Situation 5: Handling a Workplace Problem",
      lines: [
        {
          speaker: "Characters",
          text: "Employee and Supervisor",
        },
        {
          speaker: "Employee",
          text: "Magandang umaga po. May nais po sana akong ipaalam tungkol sa aming gawain.",
        },
        {
          speaker: "Supervisor",
          text: "Magandang umaga. Ano ang problema?",
        },
        {
          speaker: "Employee",
          text: "Hindi po gumagana nang maayos ang programang ginagamit namin para sa pagproseso ng datos.",
        },
        {
          speaker: "Supervisor",
          text: "Kailan nagsimula ang problema?",
        },
        {
          speaker: "Employee",
          text: "Nagsimula po ito kahapon ng hapon. Sinubukan na po naming ayusin, ngunit hindi pa rin ito gumagana.",
        },
        {
          speaker: "Supervisor",
          text: "Naipaalam na ba ninyo ito sa pangkat ng teknikal na suporta?",
        },
        {
          speaker: "Employee",
          text: "Opo. Naghihintay na lamang po kami ng kanilang tugon.",
        },
        {
          speaker: "Supervisor",
          text: "Mabuti. Ipaalam ninyo sa akin kapag may pagbabago na.",
        },
        {
          speaker: "Employee",
          text: "Opo. Maraming salamat po.",
        },
      ],
    },
  ],
  assessment: {
    instructions: "Select the correct answer for each question.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What does \"Maaari ba akong magtanong?\" mean?",
        options: [
          {
            key: "A",
            text: "May I ask a question?",
          },
          {
            key: "B",
            text: "May I leave?",
          },
          {
            key: "C",
            text: "Can I eat?",
          },
          {
            key: "D",
            text: "Can I sleep?",
          },
        ],
        answerKey: "A",
        title: "Part A: Vocabulary and Expressions",
      },
      {
        id: 2,
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
            text: "Maraming salamat.",
          },
          {
            key: "D",
            text: "Walang anuman.",
          },
        ],
        answerKey: "B",
        title: "Part A: Vocabulary and Expressions",
      },
      {
        id: 3,
        prompt: "What does \"Nais ko pong ipaliwanag ang sitwasyon\" mean?",
        options: [
          {
            key: "A",
            text: "I want to leave the situation.",
          },
          {
            key: "B",
            text: "I would like to explain the situation.",
          },
          {
            key: "C",
            text: "I do not know the situation.",
          },
          {
            key: "D",
            text: "I want to change the situation.",
          },
        ],
        answerKey: "B",
        title: "Part A: Vocabulary and Expressions",
      },
      {
        id: 4,
        prompt: "Which expression is appropriate when thanking someone?",
        options: [
          {
            key: "A",
            text: "Ano ang nangyari?",
          },
          {
            key: "B",
            text: "Sandali lamang.",
          },
          {
            key: "C",
            text: "Maraming salamat sa inyong tulong.",
          },
          {
            key: "D",
            text: "Hindi ko sigurado.",
          },
        ],
        answerKey: "C",
        title: "Part A: Vocabulary and Expressions",
      },
      {
        id: 5,
        prompt: "What is the meaning of \"Nagkaroon ng hindi pagkakaunawaan\"?",
        options: [
          {
            key: "A",
            text: "An agreement was reached.",
          },
          {
            key: "B",
            text: "A misunderstanding occurred.",
          },
          {
            key: "C",
            text: "Someone arrived.",
          },
          {
            key: "D",
            text: "A meeting started.",
          },
        ],
        answerKey: "B",
        title: "Part A: Vocabulary and Expressions",
      },
      {
        id: 6,
        prompt: "You need to ask a stranger for directions. Which is the most appropriate opening?",
        options: [
          {
            key: "A",
            text: "\"Hoy, saan ang daan?\"",
          },
          {
            key: "B",
            text: "\"Magandang araw po. Maaari po ba akong magtanong?\"",
          },
          {
            key: "C",
            text: "\"Bilisan mo.\"",
          },
          {
            key: "D",
            text: "\"Alis na ako.\"",
          },
        ],
        answerKey: "B",
        title: "Part B: Situational Communication",
      },
      {
        id: 7,
        prompt: "Someone gives you instructions that you do not understand. What should you do?",
        options: [
          {
            key: "A",
            text: "Ignore the instructions.",
          },
          {
            key: "B",
            text: "Pretend to understand.",
          },
          {
            key: "C",
            text: "Ask the person to explain again.",
          },
          {
            key: "D",
            text: "End the conversation immediately.",
          },
        ],
        answerKey: "C",
        title: "Part B: Situational Communication",
      },
      {
        id: 8,
        prompt: "Your colleague tells you about a problem at work. Which response is most appropriate?",
        options: [
          {
            key: "A",
            text: "\"Hindi ko problema iyan.\"",
          },
          {
            key: "B",
            text: "\"Nauunawaan ko. Tingnan natin kung paano natin ito malulutas.\"",
          },
          {
            key: "C",
            text: "\"Bahala ka na.\"",
          },
          {
            key: "D",
            text: "\"Huwag mo akong kausapin.\"",
          },
        ],
        answerKey: "B",
        title: "Part B: Situational Communication",
      },
      {
        id: 9,
        prompt: "You want to explain that you lost your bag. Which statement is correct?",
        options: [
          {
            key: "A",
            text: "\"Nawala ko po ang aking bag.\"",
          },
          {
            key: "B",
            text: "\"Bibili po ako ng bag.\"",
          },
          {
            key: "C",
            text: "\"Nasa bahay ang aking bag.\"",
          },
          {
            key: "D",
            text: "\"Gusto ko po ng bag.\"",
          },
        ],
        answerKey: "A",
        title: "Part B: Situational Communication",
      },
      {
        id: 10,
        prompt: "What is the purpose of asking follow-up questions?",
        options: [
          {
            key: "A",
            text: "To interrupt the conversation.",
          },
          {
            key: "B",
            text: "To make the conversation longer without reason.",
          },
          {
            key: "C",
            text: "To understand information more clearly and maintain communication.",
          },
          {
            key: "D",
            text: "To avoid answering questions.",
          },
        ],
        answerKey: "C",
        title: "Part B: Situational Communication",
      },
      {
        id: 11,
        prompt: "A person asks you for help, but you are currently busy. Which response is most appropriate?",
        options: [
          {
            key: "A",
            text: "\"Ayoko.\"",
          },
          {
            key: "B",
            text: "\"Huwag mo akong istorbohin.\"",
          },
          {
            key: "C",
            text: "\"Pasensya na, may ginagawa ako ngayon. Maaari ba kitang tulungan mamaya?\"",
          },
          {
            key: "D",
            text: "\"Bahala ka.\"",
          },
        ],
        answerKey: "C",
        title: "Part C: Application",
      },
      {
        id: 12,
        prompt: "You realize that you misunderstood someone's instructions. What should you say?",
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
            text: "\"Wala akong pakialam.\"",
          },
        ],
        answerKey: "B",
        title: "Part C: Application",
      },
      {
        id: 13,
        prompt: "Which is an important characteristic of a good situational dialogue?",
        options: [
          {
            key: "A",
            text: "It uses unrelated sentences.",
          },
          {
            key: "B",
            text: "It ignores the situation.",
          },
          {
            key: "C",
            text: "It contains appropriate expressions and responses based on the context.",
          },
          {
            key: "D",
            text: "It repeats the same words.",
          },
        ],
        answerKey: "C",
        title: "Part C: Application",
      },
      {
        id: 14,
        prompt: "Why is role-playing useful in language learning?",
        options: [
          {
            key: "A",
            text: "It allows learners to practice realistic communication situations.",
          },
          {
            key: "B",
            text: "It eliminates the need to learn vocabulary.",
          },
          {
            key: "C",
            text: "It prevents learners from speaking.",
          },
          {
            key: "D",
            text: "It focuses only on memorization.",
          },
        ],
        answerKey: "A",
        title: "Part C: Application",
      },
      {
        id: 15,
        prompt: "What should learners do when they do not know a particular Filipino word during a\nconversation?",
        options: [
          {
            key: "A",
            text: "Stop communicating immediately.",
          },
          {
            key: "B",
            text: "Change the topic without explanation.",
          },
          {
            key: "C",
            text: "Use descriptions, ask for clarification, or request the correct word.",
          },
          {
            key: "D",
            text: "Pretend they know the word.",
          },
        ],
        answerKey: "C",
        title: "Part C: Application",
      },
    ],
  },
  extraActivities: [
    {
      title: "Match the Situation with the Appropriate Expression",
      kind: "match",
      instructions: "Match each situation in Column A with the most appropriate expression in Column B.",
      items: [
        "You need to ask someone for directions.",
        "You did not understand what someone said.",
        "You want to thank someone for helping you.",
        "You want to explain a problem.",
        "You want to ask someone to repeat information.",
      ],
      choices: [
        "\"Maaari po bang ulitin ninyo?\"",
        "\"Saan po matatagpuan ang istasyon?\"",
        "\"Maraming salamat sa inyong tulong.\"",
        "\"Nais ko pong ipaliwanag ang sitwasyon.\"",
        "\"May problema po ako.\"",
      ],
    },
    {
      title: "Complete the Dialogue",
      kind: "roleplay",
      instructions: "Fill in the blanks with the most appropriate expressions from the word bank.\nWord Bank:",
      items: [
        "Ano ang nangyari?",
        "Maraming salamat po.",
        "Maaari po ba akong magtanong?",
        "Nawala ko po ang aking bag.",
        "Kailan ninyo ito huling nakita?",
      ],
      note: "Dialogue:\nStudent: Magandang umaga po. (1) ________\nStaff: Magandang umaga rin. Sige, ano iyon?\nStudent: (2) ________\nStaff: (3) ________\nStudent: Kaninang umaga po, sa silid-aralan.\nStaff: Sige, tutulungan kitang hanapin ito.\nStudent: (4) ________",
    },
    {
      title: "Identify the Appropriate Response",
      kind: "choice",
      instructions: "Choose the best response for each situation.",
      items: [
        "Someone asks you for directions.\nA. \"Hindi ko alam ang lahat.\"\nB. \"Dumiretso ka at lumiko sa kanan.\"\nC. \"Ayoko.\"",
        "You did not understand an instruction.\nA. \"Maaari po ba ninyo itong ipaliwanag muli?\"\nB. \"Wala akong pakialam.\"\nC. \"Sige na.\"",
        "Someone thanks you for helping them.\nA. \"Walang anuman.\"\nB. \"Bakit?\"\nC. \"Hindi ko alam.\"",
        "Your colleague explains a problem.\nA. \"Hindi iyan mahalaga.\"\nB. \"Nauunawaan ko. Tingnan natin kung ano ang maaari nating gawin.\"\nC. \"Ikaw ang bahala.\"",
        "You need to politely end a conversation.\nA. \"Umalis ka na.\"\nB. \"Sige, bahala ka.\"\nC. \"Maraming salamat po. Ingat po kayo!\"",
      ],
    },
    {
      title: "Arrange the Dialogue",
      kind: "roleplay",
      instructions: "Arrange the statements in the correct order to create a natural conversation.\nA. \"Maraming salamat po sa inyong tulong.\"\nB. \"Magandang umaga po. Maaari po ba akong magtanong?\"\nC. \"Saan po kayo pupunta?\"\nD. \"Nais ko po sanang malaman kung saan matatagpuan ang munisipyo.\"\nE. \"Dumiretso po kayo at lumiko sa kaliwa.\"",
      items: [],
    },
    {
      title: "Choose the Appropriate Communication Style",
      kind: "choice",
      instructions: "Identify whether the expression is most appropriate for an informal or polite/formal situation.",
      items: [
        "\"Uy, saan ka pupunta?\"",
        "\"Maaari po ba akong humingi ng tulong?\"",
        "\"Ano ba ang nangyari sa iyo?\"",
        "\"Nais ko po sanang magtanong tungkol sa inyong serbisyo.\"",
        "\"Tara, kumain tayo!\"",
      ],
    },
    {
      title: "Role-Playing Challenge",
      kind: "roleplay",
      instructions: "Choose one scenario and create a dialogue with at least 8–10 exchanges.\nScenario A: At the Hospital\nYou are accompanying a family member to a hospital. Ask the receptionist about the registration process and where to wait.\nScenario B: At a School Office\nYou need to ask about an application requirement. Speak with a school staff member and clarify the necessary documents.\nScenario C: At a Transportation Terminal\nYou want to travel to another town. Ask about the available vehicles, departure time, and ticket price.\nScenario D: At the Workplace\nYou encounter a problem with an assigned task. Explain the situation to your supervisor and ask for guidance.\nScenario E: Meeting Someone New\nYou meet a person at a community event. Introduce yourself, ask questions, and maintain a friendly conversation.\nYour dialogue should include:",
      items: [
        "An appropriate greeting.",
        "A clear purpose for the conversation.",
        "At least three questions.",
        "Appropriate responses.",
        "At least one expression of clarification or explanation.",
        "A suitable closing statement.",
      ],
    },
    {
      title: "Unexpected Situation Response",
      kind: "other",
      instructions: "Read each situation and write an appropriate Filipino response.",
      items: [
        "Someone accidentally bumps into you and apologizes.",
        "A stranger asks you where the nearest hospital is, but you are unsure of its exact location.",
        "Your classmate misunderstands your instructions.",
        "A customer reports that the item they purchased is damaged.",
        "Your friend suddenly tells you that they have lost their phone.",
      ],
      note: "Your responses should be clear, respectful, and appropriate to the situation.",
    },
  ],
  rewards: {
    items: [
      {
        section: "vocabulary",
        label: "Vocabulary Review",
        xp: 10,
      },
      {
        section: "conversation",
        label: "Lesson Proper + Guided Situational Dialogues + Practice Activities",
        xp: 40,
      },
      {
        section: "assessment",
        label: "Lesson Assessment",
        xp: 30,
      },
    ],
    total: 80,
    badge: {
      name: "Real-Life Communicator Badge",
    },
    completionRequirement: "Review the situational vocabulary and expressions. Understand how to adjust communication according to context. Complete the guided dialogue exercises. Finish the seven practice activities. Obtain at least 70% in the lesson assessment.",
  },
};
