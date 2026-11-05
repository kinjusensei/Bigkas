import { StructuredLesson } from "../../types/structuredLesson";

// Tagalog Lesson 11 — imported from "Lesson Plan.pdf", pages 161–179.
// The Tagalog and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.

export const tagalogLesson11: StructuredLesson = {
  lessonId: "tagalog_11",
  dialect: "tagalog",
  dialectLabel: "Tagalog",
  lessonNumber: 11,
  title: "Common Daily Conversations",
  level: "Intermediate",
  unit: "Unit 1 – Everyday Communication",
  estimatedDuration: "40–50 minutes",
  prerequisite: "Completion of Beginner Level (Lessons 1–10)",
  intro: [
    "Everyday conversations allow people to share information, express their thoughts, ask questions, and build relationships. In Filipino, conversations often include expressions that make interactions more natural, such as Talaga?, Ganoon ba?, Siyempre, and Ayos lang.",
    "At the Beginner Level, learners practiced introducing themselves, asking basic questions, and identifying familiar words. In this lesson, they will apply those skills in more realistic situations.",
    "Learners will practice conversations involving greetings, daily activities, school, work, personal interests, invitations, and making plans.",
    "Real-life applications:",
    "• Talking with friends and classmates.",
    "• Discussing daily activities.",
    "• Sharing personal experiences.",
    "• Accepting or declining invitations.",
    "• Expressing preferences and opinions.",
    "• Maintaining conversations through follow-up questions.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Understand and use common Filipino expressions in everyday situations.",
    "Participate in conversations involving daily routines, personal experiences, and familiar activities.",
    "Respond appropriately to statements, questions, and invitations.",
    "Express preferences, plans, and simple opinions.",
    "Use conversational expressions to maintain a natural conversation.",
    "Construct longer responses instead of relying only on short answers.",
  ],
  expressionGroups: [
    {
      title: "A. Common Conversational Expressions",
      items: [
        {
          term: "Talaga?",
          meaning: "Really?",
          pronunciation: "ta-la-ga",
        },
        {
          term: "Ganoon ba?",
          meaning: "Is that so?",
          pronunciation: "ga-no-on ba",
        },
        {
          term: "Siyempre",
          meaning: "Of course",
          pronunciation: "si-yem-pre",
        },
        {
          term: "Sigurado",
          meaning: "Sure / Certain",
          pronunciation: "si-gu-ra-do",
        },
        {
          term: "Ayos lang",
          meaning: "It's okay / Fine",
          pronunciation: "a-yos lang",
        },
        {
          term: "Walang problema",
          meaning: "No problem",
          pronunciation: "wa-lang pro-ble-ma",
        },
        {
          term: "Naku!",
          meaning: "Oh! / Goodness!",
          pronunciation: "na-ku",
        },
        {
          term: "Aba!",
          meaning: "Oh! / Well!",
          pronunciation: "a-ba",
        },
        {
          term: "Sayang naman",
          meaning: "That's unfortunate / What a shame",
          pronunciation: "sa-yang na-man",
        },
        {
          term: "Buti naman",
          meaning: "That's good / Fortunately",
          pronunciation: "bu-ti na-man",
        },
        {
          term: "Sige",
          meaning: "Okay / Go ahead",
          pronunciation: "si-ge",
        },
        {
          term: "Sandali lang",
          meaning: "Just a moment",
          pronunciation: "san-da-li lang",
        },
        {
          term: "Hindi bale",
          meaning: "Never mind / It's okay",
          pronunciation: "hin-di ba-le",
        },
        {
          term: "Oo nga",
          meaning: "That's true / Yes, indeed",
          pronunciation: "o-o nga",
        },
        {
          term: "Tama ka",
          meaning: "You're right",
          pronunciation: "ta-ma ka",
        },
        {
          term: "Hindi ako sigurado",
          meaning: "I'm not sure",
          pronunciation: "hin-di a-ko si-gu-ra-do",
        },
      ],
    },
    {
      title: "B. Daily Activities",
      items: [
        {
          term: "Gumising",
          meaning: "To wake up",
          pronunciation: "gu-mi-sing",
        },
        {
          term: "Maligo",
          meaning: "To take a bath",
          pronunciation: "ma-li-go",
        },
        {
          term: "Maghanda",
          meaning: "To prepare",
          pronunciation: "mag-han-da",
        },
        {
          term: "Mag-almusal",
          meaning: "To eat breakfast",
          pronunciation: "mag-al-mu-sal",
        },
        {
          term: "Pumasok",
          meaning: "To go to school / work",
          pronunciation: "pu-ma-sok",
        },
        {
          term: "Mag-aral",
          meaning: "To study",
          pronunciation: "mag-a-ral",
        },
        {
          term: "Magtrabaho",
          meaning: "To work",
          pronunciation: "mag-tra-ba-ho",
        },
        {
          term: "Magpahinga",
          meaning: "To rest",
          pronunciation: "mag-pa-hi-nga",
        },
        {
          term: "Maglinis",
          meaning: "To clean",
          pronunciation: "mag-li-nis",
        },
        {
          term: "Magluto",
          meaning: "To cook",
          pronunciation: "mag-lu-to",
        },
        {
          term: "Mamili",
          meaning: "To shop",
          pronunciation: "ma-mi-li",
        },
        {
          term: "Maglakad",
          meaning: "To walk",
          pronunciation: "mag-la-kad",
        },
        {
          term: "Umuwi",
          meaning: "To go home",
          pronunciation: "u-mu-wi",
        },
        {
          term: "Matulog",
          meaning: "To sleep",
          pronunciation: "ma-tu-log",
        },
      ],
    },
    {
      title: "C. Time and Frequency Expressions",
      items: [
        {
          term: "Araw-araw",
          meaning: "Every day",
          pronunciation: "a-raw-a-raw",
        },
        {
          term: "Tuwing umaga",
          meaning: "Every morning",
          pronunciation: "tu-wing u-ma-ga",
        },
        {
          term: "Tuwing hapon",
          meaning: "Every afternoon",
          pronunciation: "tu-wing ha-pon",
        },
        {
          term: "Tuwing gabi",
          meaning: "Every evening",
          pronunciation: "tu-wing ga-bi",
        },
        {
          term: "Kadalasan",
          meaning: "Usually",
          pronunciation: "ka-da-la-san",
        },
        {
          term: "Madalas",
          meaning: "Often",
          pronunciation: "ma-da-las",
        },
        {
          term: "Paminsan-minsan",
          meaning: "Sometimes",
          pronunciation: "pa-min-san-min-san",
        },
        {
          term: "Bihira",
          meaning: "Rarely",
          pronunciation: "bi-hi-ra",
        },
        {
          term: "Palagi",
          meaning: "Always",
          pronunciation: "pa-la-gi",
        },
        {
          term: "Kamakailan",
          meaning: "Recently",
          pronunciation: "ka-ma-ka-i-lan",
        },
        {
          term: "Mamaya",
          meaning: "Later",
          pronunciation: "ma-ma-ya",
        },
        {
          term: "Kanina",
          meaning: "Earlier",
          pronunciation: "ka-ni-na",
        },
        {
          term: "Ngayon",
          meaning: "Now",
          pronunciation: "nga-yon",
        },
        {
          term: "Bukas",
          meaning: "Tomorrow",
          pronunciation: "bu-kas",
        },
        {
          term: "Noong nakaraan",
          meaning: "Previously / In the past",
          pronunciation: "no-ong na-ka-ra-an",
        },
      ],
    },
    {
      title: "D. Expressions for Plans and Activities",
      items: [
        {
          term: "May plano ako",
          meaning: "I have a plan",
          pronunciation: "may pla-no a-ko",
        },
        {
          term: "Wala pa akong plano",
          meaning: "I don't have plans yet",
          pronunciation: "wa-la pa a-kong pla-no",
        },
        {
          term: "Sasama ako",
          meaning: "I will come along",
          pronunciation: "sa-sa-ma a-ko",
        },
        {
          term: "Hindi ako makakasama",
          meaning: "I cannot come along",
          pronunciation: "hin-di a-ko ma-ka-ka-sa-ma",
        },
        {
          term: "Tara na!",
          meaning: "Let's go!",
          pronunciation: "ta-ra na",
        },
        {
          term: "Saan tayo pupunta?",
          meaning: "Where are we going?",
          pronunciation: "sa-an ta-yo pu-pun-ta",
        },
        {
          term: "Anong gagawin natin?",
          meaning: "What are we going to do?",
          pronunciation: "a-nong ga-ga-win na-tin",
        },
        {
          term: "Magkita tayo mamaya",
          meaning: "Let's meet later",
          pronunciation: "mag-ki-ta ta-yo ma-ma-ya",
        },
        {
          term: "Kita-kits!",
          meaning: "See you!",
          pronunciation: "ki-ta-kits",
        },
        {
          term: "Sa susunod na lang",
          meaning: "Maybe next time",
          pronunciation: "sa su-su-nod na lang",
        },
      ],
    },
    {
      title: "E. Useful Connecting Words",
      items: [
        {
          term: "Dahil",
          meaning: "Because",
          pronunciation: "da-hil",
        },
        {
          term: "Pero",
          meaning: "But",
          pronunciation: "pe-ro",
        },
        {
          term: "Kaya",
          meaning: "So / Therefore",
          pronunciation: "ka-ya",
        },
        {
          term: "At",
          meaning: "And",
          pronunciation: "at",
        },
        {
          term: "O",
          meaning: "Or",
          pronunciation: "o",
        },
        {
          term: "Kapag",
          meaning: "When / Whenever / If",
          pronunciation: "ka-pag",
        },
        {
          term: "Kung",
          meaning: "If / Whether",
          pronunciation: "kung",
        },
        {
          term: "Habang",
          meaning: "While",
          pronunciation: "ha-bang",
        },
        {
          term: "Bago",
          meaning: "Before",
          pronunciation: "ba-go",
        },
        {
          term: "Pagkatapos",
          meaning: "After",
          pronunciation: "pag-ka-ta-pos",
        },
        {
          term: "Bukod dito",
          meaning: "Aside from this / Furthermore",
          pronunciation: "bu-kod di-to",
        },
        {
          term: "Sa halip",
          meaning: "Instead",
          pronunciation: "sa ha-lip",
        },
      ],
    },
  ],
  languageNotes: [
    {
      title: "A. Keeping a Conversation Going",
      body: [
        "A natural conversation does not end after one question and one answer. Speakers usually respond, react, and ask follow-up questions.",
        "Consider the following example:",
        "Person A: Kumusta ang araw mo?",
        "Person B: Mabuti naman. Marami akong natapos na gawain.",
        "Person A: Talaga? Ano ang mga ginawa mo?",
        "Person B: Nag-aral ako at tumulong sa bahay.",
        "Person A: Buti naman! May gagawin ka pa ba mamaya?",
        "This conversation demonstrates how a speaker can use reactions and follow-up questions to continue an interaction.",
        "Useful expressions:",
      ],
      examples: [
        {
          text: "Talaga?",
          meaning: "Really?",
        },
        {
          text: "Ganoon ba?",
          meaning: "Is that so?",
        },
        {
          text: "Buti naman!",
          meaning: "That's good!",
        },
        {
          text: "Ano pa?",
          meaning: "What else?",
        },
        {
          text: "Pagkatapos noon?",
          meaning: "What happened after that?",
        },
      ],
    },
    {
      title: "B. Talking About Daily Routines",
      body: [
        "When discussing daily activities, learners can use verbs and time expressions to describe their routines.",
      ],
      examples: [
        {
          text: "Gumigising ako nang alas-sais ng umaga.",
          meaning: "I wake up at six in the morning.",
        },
        {
          text: "Naliligo ako bago pumasok.",
          meaning: "I take a bath before going to school or work.",
        },
        {
          text: "Nag-aaral ako tuwing hapon.",
          meaning: "I study every afternoon.",
        },
        {
          text: "Nagpapahinga ako pagkatapos kumain.",
          meaning: "I rest after eating.",
        },
      ],
    },
    {
      title: "B. Talking About Daily Routines",
      body: [
        "Useful sentence pattern:",
        "Subject + Verb + Additional Information",
        "Nag-aaral ako tuwing gabi.",
      ],
      examples: [
        {
          text: "Nag-aaral",
          meaning: "Study",
        },
        {
          text: "Ako",
          meaning: "I",
        },
        {
          text: "Tuwing gabi",
          meaning: "Every evening",
        },
      ],
    },
    {
      title: "C. Talking About Past Experiences",
      body: [
        "Learners can use verbs and time expressions to describe something that already happened.",
      ],
      examples: [
        {
          text: "Nag-aral ako kahapon.",
          meaning: "I studied yesterday.",
        },
        {
          text: "Bumili ako ng pagkain kanina.",
          meaning: "I bought food earlier.",
        },
        {
          text: "Nakipagkita ako sa kaibigan ko noong Linggo.",
          meaning: "I met my friend last Sunday.",
        },
        {
          text: "Nanood kami ng pelikula kagabi.",
          meaning: "We watched a movie last night.",
        },
      ],
    },
    {
      title: "C. Talking About Past Experiences",
      body: [
        "The time expressions help clarify when an activity happened.",
      ],
    },
    {
      title: "D. Talking About Future Plans",
      body: [
        "Filipino speakers can use future-oriented verb forms and expressions to discuss plans.",
      ],
      examples: [
        {
          text: "Mag-aaral ako mamaya.",
          meaning: "I will study later.",
        },
        {
          text: "Pupunta kami sa palengke bukas.",
          meaning: "We will go to the market tomorrow.",
        },
        {
          text: "Makikipagkita ako sa kaibigan ko sa Sabado.",
          meaning: "I will meet my friend on Saturday.",
        },
        {
          text: "Magpapahinga ako pagkatapos ng trabaho.",
          meaning: "I will rest after work.",
        },
      ],
    },
    {
      title: "E. Expressing Opinions and Preferences",
      body: [
        "Learners can share their thoughts using expressions such as:",
      ],
      examples: [
        {
          text: "Para sa akin...",
          meaning: "For me...",
        },
        {
          text: "Sa tingin ko...",
          meaning: "I think...",
        },
        {
          text: "Mas gusto ko...",
          meaning: "I prefer...",
        },
        {
          text: "Para sa akin, mahalaga ang pag-aaral.",
          meaning: "For me, studying is important.",
        },
        {
          text: "Sa tingin ko, masarap ang pagkaing ito.",
          meaning: "I think this food is delicious.",
        },
        {
          text: "Mas gusto ko ang maglakad kaysa sumakay ng sasakyan.",
          meaning: "I prefer walking rather than riding a vehicle.",
        },
      ],
    },
    {
      title: "F. Accepting and Declining Invitations",
      body: [
        "When someone invites you somewhere, you can respond positively or politely decline.",
        "Accepting:",
        "A: Gusto mo bang kumain sa labas mamaya?",
        "B: Oo, sasama ako. Salamat sa pag-imbita!",
        "Declining:",
        "A: Gusto mo bang sumama sa amin bukas?",
        "B: Pasensya na, hindi ako makakasama dahil may kailangan akong tapusin.",
        "It is helpful to provide a brief reason when declining an invitation, especially in polite or formal situations.",
      ],
    },
  ],
  situationsTitle: "Useful Phrases and Sentences",
  situationGroups: [
    {
      title: "A. Starting a Conversation",
      items: [
        {
          term: "Kumusta ang araw mo?",
          meaning: "How is your day?",
        },
        {
          term: "Ano ang pinagkakaabalahan mo?",
          meaning: "What have you been busy with?",
        },
        {
          term: "Anong balita?",
          meaning: "What's the news?",
        },
        {
          term: "Matagal na tayong hindi nagkita.",
          meaning: "We haven't seen each other in a long time.",
        },
        {
          term: "Kumusta na ang pag-aaral mo?",
          meaning: "How is your studying going?",
        },
        {
          term: "Ano ang ginagawa mo ngayon?",
          meaning: "What are you doing now?",
        },
      ],
    },
    {
      title: "B. Talking About Daily Activities",
      items: [
        {
          term: "Maaga akong gumigising araw-araw.",
          meaning: "I wake up early every day.",
        },
        {
          term: "Karaniwan akong nag-aalmusal bago pumasok.",
          meaning: "I usually eat breakfast before going to school or work.",
        },
        {
          term: "Pagkatapos ng klase, umuuwi ako.",
          meaning: "After class, I go home.",
        },
        {
          term: "Nag-aaral ako tuwing gabi.",
          meaning: "I study every evening.",
        },
        {
          term: "Nagpapahinga ako kapag wala akong pasok.",
          meaning: "I rest when I don't have classes.",
        },
        {
          term: "Tinutulungan ko ang pamilya ko sa gawaing-bahay.",
          meaning: "I help my family with household chores.",
        },
      ],
    },
    {
      title: "C. Sharing Experiences",
      items: [
        {
          term: "Masaya ang araw ko ngayon.",
          meaning: "My day is enjoyable today.",
        },
        {
          term: "Marami akong ginawa kahapon.",
          meaning: "I did many things yesterday.",
        },
        {
          term: "Kamakailan ay bumisita ako sa aking kaibigan.",
          meaning: "I recently visited my friend.",
        },
        {
          term: "Matagal ko nang gustong subukan iyon.",
          meaning: "I've wanted to try that for a long time.",
        },
        {
          term: "Hindi ko inaasahan ang nangyari.",
          meaning: "I didn't expect what happened.",
        },
        {
          term: "Masaya akong natuto ng bagong bagay.",
          meaning: "I'm happy that I learned something new.",
        },
      ],
    },
    {
      title: "D. Expressing Preferences and Opinions",
      items: [
        {
          term: "Mas gusto ko ang tahimik na lugar.",
          meaning: "I prefer quiet places.",
        },
        {
          term: "Para sa akin, magandang ideya iyon.",
          meaning: "For me, that is a good idea.",
        },
        {
          term: "Sa tingin ko, mas madaling gawin ito.",
          meaning: "I think this is easier to do.",
        },
        {
          term: "Hindi ko gaanong gusto ang maingay na lugar.",
          meaning: "I don't particularly like noisy places.",
        },
        {
          term: "Pareho silang maganda.",
          meaning: "Both of them are good.",
        },
        {
          term: "Mas interesado ako sa pag-aaral ng wika.",
          meaning: "I am more interested in learning languages.",
        },
      ],
    },
    {
      title: "E. Accepting and Declining Invitations",
      items: [
        {
          term: "Gusto mo bang sumama sa amin?",
          meaning: "Would you like to come with us?",
        },
        {
          term: "Oo, sasama ako.",
          meaning: "Yes, I'll come along.",
        },
        {
          term: "Sige, magandang ideya iyan.",
          meaning: "Sure, that's a good idea.",
        },
        {
          term: "Pasensya na, hindi ako makakasama.",
          meaning: "Sorry, I cannot come along.",
        },
        {
          term: "May kailangan akong tapusin.",
          meaning: "I have something I need to finish.",
        },
        {
          term: "Maaari ba nating ipagpaliban?",
          meaning: "Can we postpone it?",
        },
        {
          term: "Sa susunod na lang ako sasama.",
          meaning: "I'll join next time instead.",
        },
      ],
    },
  ],
  conversations: [
    {
      title: "Dialogue 1: Catching Up With a Friend",
      lines: [
        {
          speaker: "Ana",
          text: "Uy, Mark! Kumusta ka na? Matagal na tayong hindi nagkita.",
          translation: "Hey, Mark! How have you been? We haven't seen each other in a long time.",
        },
        {
          speaker: "Mark",
          text: "Mabuti naman ako. Ikaw, kumusta?",
          translation: "I'm doing well. How about you?",
        },
        {
          speaker: "Ana",
          text: "Ayos lang. Medyo abala lang sa pag-aaral.",
          translation: "I'm fine. I've just been a little busy with studying.",
        },
        {
          speaker: "Mark",
          text: "Ganoon ba? Marami ba kayong gawain?",
          translation: "Is that so? Do you have a lot of assignments?",
        },
        {
          speaker: "Ana",
          text: "Oo, lalo na ngayong malapit na ang pagsusulit.",
          translation: "Yes, especially now that the examination is approaching.",
        },
        {
          speaker: "Mark",
          text: "Naiintindihan ko. Huwag mong kalimutang magpahinga.",
          translation: "I understand. Don't forget to rest.",
        },
        {
          speaker: "Ana",
          text: "Siyempre! Ikaw naman, ano ang pinagkakaabalahan mo?",
          translation: "Of course! What about you, what have you been busy with?",
        },
        {
          speaker: "Mark",
          text: "Naghahanda ako para sa isang proyekto sa paaralan.",
          translation: "I'm preparing for a school project.",
        },
      ],
    },
    {
      title: "Dialogue 2: Making Plans",
      lines: [
        {
          speaker: "Carlo",
          text: "May plano ka ba sa Sabado?",
          translation: "Do you have plans on Saturday?",
        },
        {
          speaker: "Mia",
          text: "Wala pa. Bakit mo natanong?",
          translation: "Not yet. Why do you ask?",
        },
        {
          speaker: "Carlo",
          text: "Balak naming pumunta sa parke. Gusto mo bang sumama?",
          translation: "We're planning to go to the park. Would you like to come along?",
        },
        {
          speaker: "Mia",
          text: "Sige! Anong oras kayo aalis?",
          translation: "Sure! What time are you leaving?",
        },
        {
          speaker: "Carlo",
          text: "Mga alas-nuwebe ng umaga.",
          translation: "Around nine in the morning.",
        },
        {
          speaker: "Mia",
          text: "Ayos! Magkikita na lang tayo roon.",
          translation: "Great! Let's just meet there.",
        },
        {
          speaker: "Carlo",
          text: "Sige, magkita tayo sa Sabado!",
          translation: "Okay, see you on Saturday!",
        },
      ],
    },
    {
      title: "Dialogue 3: Talking About Daily Routines",
      lines: [
        {
          speaker: "Lara",
          text: "Anong oras ka karaniwang gumigising?",
          translation: "What time do you usually wake up?",
        },
        {
          speaker: "Joshua",
          text: "Karaniwan akong gumigising nang alas-singko at kalahati ng umaga.",
          translation: "I usually wake up at five-thirty in the morning.",
        },
        {
          speaker: "Lara",
          text: "Ang aga naman! Ano ang ginagawa mo pagkatapos gumising?",
          translation: "That's early! What do you do after waking up?",
        },
        {
          speaker: "Joshua",
          text: "Naliligo ako, naghahanda, at nag-aalmusal.",
          translation: "I take a bath, get ready, and eat breakfast.",
        },
        {
          speaker: "Lara",
          text: "Anong oras ka pumapasok?",
          translation: "What time do you go to school?",
        },
        {
          speaker: "Joshua",
          text: "Alas-siyete ang pasok ko.",
          translation: "My classes start at seven.",
        },
        {
          speaker: "Lara",
          text: "Ano naman ang ginagawa mo pagkatapos ng klase?",
          translation: "What do you do after class?",
        },
        {
          speaker: "Joshua",
          text: "Umuuwi ako, nagpapahinga, at gumagawa ng aking mga takdang-aralin.",
          translation: "I go home, rest, and do my assignments.",
        },
      ],
    },
  ],
  matchActivity: {
    title: "Match the Expressions",
    instructions: "Match each Filipino expression with its English meaning.",
    pairs: [
      {
        id: "1",
        term: "Talaga?",
        answer: "Really?",
      },
      {
        id: "2",
        term: "Siyempre",
        answer: "Of course",
      },
      {
        id: "3",
        term: "Sayang naman",
        answer: "That's unfortunate",
      },
      {
        id: "4",
        term: "Buti naman",
        answer: "That's good / Fortunately",
      },
      {
        id: "5",
        term: "Walang problema",
        answer: "No problem",
      },
      {
        id: "6",
        term: "Paminsan-minsan",
        answer: "Sometimes",
      },
      {
        id: "7",
        term: "Kadalasan",
        answer: "Usually",
      },
      {
        id: "8",
        term: "Sa susunod na lang",
        answer: "Maybe next time",
      },
    ],
  },
  choiceActivity: {
    title: "Choose the Correct Expression",
    questions: [
      {
        id: 1,
        prompt: "Your friend tells you that they passed an examination. What would be an appropriate response?",
        options: [
          {
            key: "A",
            text: "Sayang naman!",
          },
          {
            key: "B",
            text: "Buti naman!",
          },
          {
            key: "C",
            text: "Hindi bale!",
          },
          {
            key: "D",
            text: "Naku!",
          },
        ],
        answerKey: "B",
        title: "Choose the Correct Expression",
      },
      {
        id: 2,
        prompt: "Someone invites you to join them, and you agree. What can you say?",
        options: [
          {
            key: "A",
            text: "Sasama ako.",
          },
          {
            key: "B",
            text: "Hindi ako makakasama.",
          },
          {
            key: "C",
            text: "Wala akong alam.",
          },
          {
            key: "D",
            text: "Hindi ko gusto.",
          },
        ],
        answerKey: "A",
        title: "Choose the Correct Expression",
      },
      {
        id: 3,
        prompt: "Your friend tells you something surprising. What can you say?",
        options: [
          {
            key: "A",
            text: "Talaga?",
          },
          {
            key: "B",
            text: "Paalam.",
          },
          {
            key: "C",
            text: "Salamat.",
          },
          {
            key: "D",
            text: "Sandali lang.",
          },
        ],
        answerKey: "A",
        title: "Choose the Correct Expression",
      },
      {
        id: 4,
        prompt: "You cannot attend an event because you have something important to finish. What is an\nappropriate response?",
        options: [
          {
            key: "A",
            text: "Siyempre, sasama ako.",
          },
          {
            key: "B",
            text: "Pasensya na, hindi ako makakasama.",
          },
          {
            key: "C",
            text: "Tara na!",
          },
          {
            key: "D",
            text: "Walang problema.",
          },
        ],
        answerKey: "B",
        title: "Choose the Correct Expression",
      },
      {
        id: 5,
        prompt: "Your friend asks if you have plans tomorrow, but you have not decided yet. What can you say?",
        options: [
          {
            key: "A",
            text: "May plano na ako.",
          },
          {
            key: "B",
            text: "Wala pa akong plano.",
          },
          {
            key: "C",
            text: "Sigurado ako.",
          },
          {
            key: "D",
            text: "Bukas na lang.",
          },
        ],
        answerKey: "B",
        title: "Choose the Correct Expression",
      },
      {
        id: 6,
        prompt: "Your friend says, “Marami akong natapos na gawain ngayon.”",
        options: [
          {
            key: "A",
            text: "Buti naman!",
          },
          {
            key: "B",
            text: "Magkano iyon?",
          },
          {
            key: "C",
            text: "Saan ka nakatira?",
          },
          {
            key: "D",
            text: "Ilan ang libro mo?",
          },
        ],
        answerKey: "A",
        title: "Identify the Appropriate Response",
        instructions: "Read each situation and choose the most appropriate answer.",
      },
      {
        id: 7,
        prompt: "Someone asks, “Gusto mo bang sumama sa amin?” You want to accept.",
        options: [
          {
            key: "A",
            text: "Hindi ako makakasama.",
          },
          {
            key: "B",
            text: "Oo, sasama ako.",
          },
          {
            key: "C",
            text: "Hindi ko alam.",
          },
          {
            key: "D",
            text: "Sa susunod na lang.",
          },
        ],
        answerKey: "B",
        title: "Identify the Appropriate Response",
        instructions: "Read each situation and choose the most appropriate answer.",
      },
      {
        id: 8,
        prompt: "Your friend says, “Hindi ako makakapunta bukas dahil may sakit ako.”",
        options: [
          {
            key: "A",
            text: "Buti naman!",
          },
          {
            key: "B",
            text: "Sana ay gumaling ka agad.",
          },
          {
            key: "C",
            text: "Magkano ang pamasahe?",
          },
          {
            key: "D",
            text: "Tara na!",
          },
        ],
        answerKey: "B",
        title: "Identify the Appropriate Response",
        instructions: "Read each situation and choose the most appropriate answer.",
      },
      {
        id: 9,
        prompt: "Someone asks, “Anong ginagawa mo tuwing gabi?”",
        options: [
          {
            key: "A",
            text: "Nag-aaral ako tuwing gabi.",
          },
          {
            key: "B",
            text: "Sa Angeles City.",
          },
          {
            key: "C",
            text: "Si Maria.",
          },
          {
            key: "D",
            text: "Limang piso.",
          },
        ],
        answerKey: "A",
        title: "Identify the Appropriate Response",
        instructions: "Read each situation and choose the most appropriate answer.",
      },
    ],
  },
  fillInBlanks: {
    title: "Fill in the Blanks",
    instructions: "Choose the correct word from the word bank.",
    items: [
      {
        id: "3-1",
        sentence: "______ akong gumigising nang maaga.",
        answer: "Kadalasan",
        title: "Fill in the Blanks",
        instructions: "Choose the correct word from the word bank.",
        wordBank: [
          "Dahil",
          "Pero",
          "Mamaya",
          "Kadalasan",
          "Pagkatapos",
        ],
      },
      {
        id: "3-2",
        sentence: "Mag-aaral ako ______ pagkatapos kumain.",
        answer: "Mamaya",
        title: "Fill in the Blanks",
        instructions: "Choose the correct word from the word bank.",
        wordBank: [
          "Dahil",
          "Pero",
          "Mamaya",
          "Kadalasan",
          "Pagkatapos",
        ],
      },
      {
        id: "3-3",
        sentence: "Gusto kong sumama, ______ marami pa akong gagawin.",
        answer: "Pero",
        title: "Fill in the Blanks",
        instructions: "Choose the correct word from the word bank.",
        wordBank: [
          "Dahil",
          "Pero",
          "Mamaya",
          "Kadalasan",
          "Pagkatapos",
        ],
      },
      {
        id: "3-4",
        sentence: "Nagpapahinga ako ______ ng trabaho.",
        answer: "Pagkatapos",
        title: "Fill in the Blanks",
        instructions: "Choose the correct word from the word bank.",
        wordBank: [
          "Dahil",
          "Pero",
          "Mamaya",
          "Kadalasan",
          "Pagkatapos",
        ],
      },
      {
        id: "3-5",
        sentence: "Hindi ako nakapunta ______ umulan nang malakas.",
        answer: "Dahil",
        title: "Fill in the Blanks",
        instructions: "Choose the correct word from the word bank.",
        wordBank: [
          "Dahil",
          "Pero",
          "Mamaya",
          "Kadalasan",
          "Pagkatapos",
        ],
      },
    ],
  },
  arrangeWords: {
    title: "Arrange the Words",
    instructions: "Arrange the words to form a correct Filipino sentence.",
    items: [
      {
        id: "1",
        words: [
          "mamaya",
          "Mag-aaral",
          "ako",
        ],
        answer: [
          "Mag-aaral",
          "ako",
          "mamaya",
        ],
        display: "Mag-aaral ako mamaya.",
      },
      {
        id: "2",
        words: [
          "tayo",
          "Sabado",
          "sa",
          "Magkita",
        ],
        answer: [
          "Magkita",
          "tayo",
          "sa",
          "Sabado",
        ],
        display: "Magkita tayo sa Sabado.",
      },
    ],
  },
  assessment: {
    instructions: "Choose the correct answer.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What does “Talaga?” mean?",
        options: [
          {
            key: "A",
            text: "Never mind",
          },
          {
            key: "B",
            text: "Really?",
          },
          {
            key: "C",
            text: "Goodbye",
          },
          {
            key: "D",
            text: "Thank you",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "Which expression means “Usually”?",
        options: [
          {
            key: "A",
            text: "Kadalasan",
          },
          {
            key: "B",
            text: "Bihira",
          },
          {
            key: "C",
            text: "Mamaya",
          },
          {
            key: "D",
            text: "Kanina",
          },
        ],
        answerKey: "A",
      },
      {
        id: 3,
        prompt: "Which sentence means “I wake up early every day”?",
        options: [
          {
            key: "A",
            text: "Maaga akong gumigising araw-araw.",
          },
          {
            key: "B",
            text: "Natutulog ako buong araw.",
          },
          {
            key: "C",
            text: "Nag-aaral ako tuwing gabi.",
          },
          {
            key: "D",
            text: "Mamaya akong uuwi.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 4,
        prompt: "What is an appropriate response when accepting an invitation?",
        options: [
          {
            key: "A",
            text: "Hindi ako makakasama.",
          },
          {
            key: "B",
            text: "Sasama ako.",
          },
          {
            key: "C",
            text: "Sayang naman.",
          },
          {
            key: "D",
            text: "Hindi ko alam.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 5,
        prompt: "What does “Paminsan-minsan” mean?",
        options: [
          {
            key: "A",
            text: "Always",
          },
          {
            key: "B",
            text: "Rarely",
          },
          {
            key: "C",
            text: "Sometimes",
          },
          {
            key: "D",
            text: "Never",
          },
        ],
        answerKey: "C",
      },
      {
        id: 6,
        prompt: "Which expression is used to share an opinion?",
        options: [
          {
            key: "A",
            text: "Sa tingin ko...",
          },
          {
            key: "B",
            text: "Sandali lang...",
          },
          {
            key: "C",
            text: "Paalam...",
          },
          {
            key: "D",
            text: "Saan ka...",
          },
        ],
        answerKey: "A",
      },
      {
        id: 7,
        prompt: "What does “Pagkatapos” mean?",
        options: [
          {
            key: "A",
            text: "Before",
          },
          {
            key: "B",
            text: "After",
          },
          {
            key: "C",
            text: "During",
          },
          {
            key: "D",
            text: "Tomorrow",
          },
        ],
        answerKey: "B",
      },
      {
        id: 8,
        prompt: "Which sentence correctly expresses a future plan?",
        options: [
          {
            key: "A",
            text: "Nag-aral ako kahapon.",
          },
          {
            key: "B",
            text: "Mag-aaral ako mamaya.",
          },
          {
            key: "C",
            text: "Nag-aaral ako ngayon.",
          },
          {
            key: "D",
            text: "Natulog ako kagabi.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 9,
        prompt: "Your friend says they are sick. What is an appropriate response?",
        options: [
          {
            key: "A",
            text: "Sana ay gumaling ka agad.",
          },
          {
            key: "B",
            text: "Talaga? Magkano?",
          },
          {
            key: "C",
            text: "Tara na!",
          },
          {
            key: "D",
            text: "Sige, aalis na ako.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 10,
        prompt: "Which expression means “Maybe next time”?",
        options: [
          {
            key: "A",
            text: "Siyempre",
          },
          {
            key: "B",
            text: "Sa susunod na lang",
          },
          {
            key: "C",
            text: "Walang problema",
          },
          {
            key: "D",
            text: "Buti naman",
          },
        ],
        answerKey: "B",
      },
    ],
  },
  speaking: {
    title: "Listening and Speaking Practice",
    instructions: "Listen to the recorded expressions and repeat them aloud.\nSuggested practice sentences:",
    note: "Learners should practice:\n• Recognizing conversational expressions.\n• Responding with appropriate phrases.\n• Speaking at a natural pace.\n• Connecting words and sentences smoothly.",
    phrases: [
      {
        id: "1",
        text: "Kumusta ang araw mo?",
        meaning: "How is your day?",
      },
      {
        id: "2",
        text: "Marami akong ginawa kahapon.",
        meaning: "I did many things yesterday.",
      },
      {
        id: "3",
        text: "Wala pa akong plano para bukas.",
      },
      {
        id: "4",
        text: "Gusto mo bang sumama sa amin?",
        meaning: "Would you like to come with us?",
      },
      {
        id: "5",
        text: "Sa tingin ko, magandang ideya iyon.",
      },
      {
        id: "6",
        text: "Pasensya na, hindi ako makakasama.",
        meaning: "Sorry, I cannot come along.",
      },
      {
        id: "7",
        text: "Nag-aaral ako tuwing gabi.",
        meaning: "I study every evening.",
      },
      {
        id: "8",
        text: "Magkita tayo sa susunod na linggo.",
      },
    ],
  },
  extraActivities: [
    {
      title: "Arrange the Words",
      kind: "arrange",
      instructions: "Arrange the words to form a correct Filipino sentence.",
      items: [
        "ako / araw-araw / Maaga / gumigising",
        "ko / Mas / gusto / tahimik / ang / lugar",
        "dahil / makakasama / Hindi / ako / may / gawain / akong",
      ],
      answers: [
        "Maaga akong gumigising araw-araw.",
        "Mas gusto ko ang tahimik na lugar.",
        "Hindi ako makakasama dahil may gawain akong kailangan tapusin.",
      ],
    },
    {
      title: "Conversation Simulation",
      kind: "roleplay",
      instructions: "The application presents a short everyday situation. Learners must select or record an appropriate response.\nScenario 1: Meeting a Friend\nYour friend asks how you have been.\nPrompt: Kumusta ka na?\nExpected response: Mabuti naman ako. Medyo abala lang sa pag-aaral.\nScenario 2: Making Plans\nA friend invites you to eat outside.\nPrompt: Gusto mo bang kumain sa labas mamaya?\nExpected response: Oo, gusto ko. Anong oras tayo aalis?\nScenario 3: Sharing an Experience\nYour friend asks what you did yesterday.\nPrompt: Ano ang ginawa mo kahapon?\nExpected response: Nag-aral ako at tumulong sa mga gawaing-bahay.\nThe learner may provide other appropriate answers. The application should accept valid responses rather than requiring exact memorization.",
      items: [],
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
        label: "Complete Guided Conversations",
        xp: 15,
      },
      {
        section: "sentences",
        label: "Complete Practice Activities",
        xp: 15,
      },
      {
        section: "speaking",
        label: "Complete Listening and Speaking Practice",
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
      name: "Everyday Communicator Badge",
      description: "Awarded to learners who successfully complete the lesson and demonstrate the ability to participate in common everyday conversations.",
    },
    completionRequirement: "Finish the vocabulary section. Complete the guided conversations. Complete the practice activities. Obtain at least 70% in the lesson assessment.",
  },
  expectedOutcomes: [
    "Understand common Filipino conversational expressions.",
    "Discuss daily routines and activities.",
    "Share basic personal experiences.",
    "Express preferences and opinions.",
    "Accept or decline invitations politely.",
    "Maintain conversations through appropriate responses and follow-up questions.",
  ],
};
