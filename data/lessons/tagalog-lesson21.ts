import { StructuredLesson } from "../../types/structuredLesson";

// Tagalog Lesson 21 — imported from "Lesson Plan.pdf", pages 388–406.
// The Tagalog and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.

export const tagalogLesson21: StructuredLesson = {
  lessonId: "tagalog_21",
  dialect: "tagalog",
  dialectLabel: "Tagalog",
  lessonNumber: 21,
  title: "Expressing Opinions and Feelings",
  level: "Advanced",
  unit: "Unit 1 – Advanced Communication",
  estimatedDuration: "45–55 minutes",
  prerequisite: "Completion of Beginner Lessons 1–10 and Intermediate Lessons 11–20",
  intro: [
    "In everyday communication, people often share what they think, how they feel, and what they believe about different situations. They express opinions when discussing school activities, community issues, personal experiences, entertainment, and other topics.",
    "In Filipino, there are several expressions that help communicate these ideas.",
    "For example:",
    "• Sa palagay ko, mahalaga ang edukasyon. – In my opinion, education is important.",
    "• Masaya ako dahil nakapasa ako sa pagsusulit. – I am happy because I passed the examination.",
    "• Hindi ako sang-ayon sa ideyang iyon. – I do not agree with that idea.",
    "• Nauunawaan ko ang iyong pananaw. – I understand your point of view.",
    "Expressing an opinion is not simply stating whether something is good or bad. A good speaker can explain the reason behind their viewpoint, acknowledge other perspectives, and communicate disagreement respectfully.",
    "In this lesson, learners will practice expressing opinions and feelings in different situations.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify common Filipino expressions used to communicate personal opinions and feelings.",
    "Express agreement, disagreement, preferences, and personal viewpoints.",
    "Explain the reasons behind their opinions using appropriate Filipino expressions.",
    "Describe emotional experiences and personal reactions in complete sentences.",
    "Distinguish between statements of fact, personal opinions, and emotional responses.",
    "Participate in conversations involving different perspectives.",
    "Express opinions politely while respecting the views of others.",
  ],
  expressionGroups: [
    {
      title: "A. Expressions for Giving Opinions",
      items: [
        {
          term: "Sa palagay ko",
          meaning: "In my opinion",
          pronunciation: "sa pa-la-gay ko",
        },
        {
          term: "Para sa akin",
          meaning: "For me / In my view",
          pronunciation: "pa-ra sa a-kin",
        },
        {
          term: "Sa tingin ko",
          meaning: "I think",
          pronunciation: "sa ti-ngin ko",
        },
        {
          term: "Naniniwala ako",
          meaning: "I believe",
          pronunciation: "na-ni-ni-wa-la a-ko",
        },
        {
          term: "Para sa pananaw ko",
          meaning: "From my perspective",
          pronunciation: "pa-ra sa pa-na-naw ko",
        },
        {
          term: "Sa aking opinyon",
          meaning: "In my opinion",
          pronunciation: "sa a-king o-pi-nyon",
        },
        {
          term: "Kung ako ang tatanungin",
          meaning: "If you ask me",
          pronunciation: "kung a-ko ang ta-ta-nung-in",
        },
        {
          term: "Ang masasabi ko",
          meaning: "What I can say",
          pronunciation: "ang ma-sa-sa-bi ko",
        },
        {
          term: "Sa pagkakaintindi ko",
          meaning: "As I understand it",
          pronunciation: "sa pag-ka-ka-in-tin-di ko",
        },
        {
          term: "Para sa akin, mas mabuti",
          meaning: "For me, it is better",
          pronunciation: "pa-ra sa a-kin mas ma-bu-ti",
        },
      ],
    },
    {
      title: "B. Expressions for Feelings and Emotions",
      items: [
        {
          term: "Masaya",
          meaning: "Happy",
          pronunciation: "ma-sa-ya",
        },
        {
          term: "Malungkot",
          meaning: "Sad",
          pronunciation: "ma-lung-kot",
        },
        {
          term: "Nasasabik",
          meaning: "Excited / Looking forward to something",
          pronunciation: "na-sa-sa-bik",
        },
        {
          term: "Kinakabahan",
          meaning: "Nervous",
          pronunciation: "ki-na-ka-ba-han",
        },
        {
          term: "Nag-aalala",
          meaning: "Worried",
          pronunciation: "nag-a-a-la-la",
        },
        {
          term: "Nadidismaya",
          meaning: "Disappointed",
          pronunciation: "na-di-dis-ma-ya",
        },
        {
          term: "Naiinis",
          meaning: "Annoyed",
          pronunciation: "na-i-i-nis",
        },
        {
          term: "Galit",
          meaning: "Angry",
          pronunciation: "ga-lit",
        },
        {
          term: "Nagulat",
          meaning: "Surprised",
          pronunciation: "nag-u-lat",
        },
        {
          term: "Nahihiya",
          meaning: "Embarrassed / Shy",
          pronunciation: "na-hi-hi-ya",
        },
        {
          term: "Nagpapasalamat",
          meaning: "Grateful",
          pronunciation: "nag-pa-pa-sa-la-mat",
        },
        {
          term: "Nasiyahan",
          meaning: "Pleased / Satisfied",
          pronunciation: "na-si-ya-han",
        },
        {
          term: "Nababahala",
          meaning: "Concerned",
          pronunciation: "na-ba-ba-ha-la",
        },
        {
          term: "Panatag",
          meaning: "At ease / Assured",
          pronunciation: "pa-na-tag",
        },
        {
          term: "Nasisiyahan",
          meaning: "Satisfied",
          pronunciation: "na-si-si-ya-han",
        },
      ],
    },
    {
      title: "C. Expressions for Agreement and Disagreement",
      items: [
        {
          term: "Sang-ayon ako.",
          meaning: "I agree.",
        },
        {
          term: "Lubos akong sumasang-ayon.",
          meaning: "I completely agree.",
        },
        {
          term: "Tama ka.",
          meaning: "You are right.",
        },
        {
          term: "Ganoon din ang iniisip ko.",
          meaning: "I think so too.",
        },
        {
          term: "May punto ka.",
          meaning: "You have a point.",
        },
        {
          term: "Hindi ako sang-ayon.",
          meaning: "I disagree.",
        },
        {
          term: "May ibang pananaw ako.",
          meaning: "I have a different perspective.",
        },
        {
          term: "Hindi ako lubos na sumasang-ayon.",
          meaning: "I do not entirely agree.",
        },
        {
          term: "Naiintindihan ko ang punto mo, pero...",
          meaning: "I understand your point, but...",
        },
        {
          term: "Iginagalang ko ang iyong opinyon.",
          meaning: "I respect your opinion.",
        },
      ],
    },
    {
      title: "D. Words for Explaining Opinions",
      items: [
        {
          term: "Dahil",
          meaning: "Because",
        },
        {
          term: "Sapagkat",
          meaning: "Because / Since",
        },
        {
          term: "Samakatuwid",
          meaning: "Therefore",
        },
        {
          term: "Gayunpaman",
          meaning: "However / Nevertheless",
        },
        {
          term: "Bukod dito",
          meaning: "Furthermore / In addition",
        },
        {
          term: "Sa kabilang banda",
          meaning: "On the other hand",
        },
        {
          term: "Halimbawa",
          meaning: "For example",
        },
        {
          term: "Bunga nito",
          meaning: "As a result",
        },
        {
          term: "Kaya naman",
          meaning: "Therefore / Because of this",
        },
        {
          term: "Bagama't",
          meaning: "Although",
        },
        {
          term: "Sa madaling salita",
          meaning: "In other words",
        },
        {
          term: "Sa kabuuan",
          meaning: "Overall / In summary",
        },
      ],
    },
    {
      title: "E. Words for Describing Personal Reactions",
      items: [
        {
          term: "Nakakatuwa",
          meaning: "Delightful / Amusing",
        },
        {
          term: "Nakakainis",
          meaning: "Annoying",
        },
        {
          term: "Nakakagulat",
          meaning: "Surprising",
        },
        {
          term: "Nakakabahala",
          meaning: "Concerning",
        },
        {
          term: "Nakakapagod",
          meaning: "Tiring",
        },
        {
          term: "Nakakainspire",
          meaning: "Inspiring",
        },
        {
          term: "Nakakadismaya",
          meaning: "Disappointing",
        },
        {
          term: "Nakakatulong",
          meaning: "Helpful",
        },
        {
          term: "Makabuluhan",
          meaning: "Meaningful",
        },
        {
          term: "Mahalaga",
          meaning: "Important",
        },
        {
          term: "Nakaaapekto",
          meaning: "Affects / Has an impact",
        },
        {
          term: "Kapana-panabik",
          meaning: "Exciting / Thrilling",
        },
      ],
    },
  ],
  languageNotes: [
    {
      title: "A. Understanding Opinions and Feelings",
      body: [
        "An opinion is a personal belief, judgment, or viewpoint about a particular subject. It may be influenced by personal experiences, knowledge, values, or preferences.",
        "A feeling refers to an emotional response or personal experience.",
        "Compare the following:",
        "Opinion:",
        "Sa palagay ko, mas epektibo ang pag-aaral kapag may aktuwal na pagsasanay.",
        "In my opinion, studying is more effective when there is practical application.",
        "Feeling:",
        "Masaya ako dahil natapos ko ang aking proyekto.",
        "I am happy because I finished my project.",
        "Opinion and Feeling Together:",
        "Sa palagay ko, kapaki-pakinabang ang proyektong ito, at masaya akong naging bahagi ako nito.",
        "In my opinion, this project is useful, and I am happy to have been part of it.",
        "Understanding the difference helps learners communicate their thoughts more clearly.",
      ],
    },
    {
      title: "B. Expressing Opinions Using Different Sentence Patterns",
      body: [
        "There are several ways to introduce an opinion.",
        "• Sa palagay ko...",
        "Used to introduce a personal viewpoint.",
        "• Sa palagay ko, mahalaga ang pagbabasa.",
        "• Sa palagay ko, dapat pangalagaan ang ating wika.",
        "• Sa tingin ko...",
        "A common expression for introducing what you think about something.",
        "• Sa tingin ko, kailangan natin ng mas maayos na plano.",
        "• Sa tingin ko, mas madaling matutuhan ang isang wika kapag palagi itong ginagamit.",
        "• Para sa akin...",
        "Used when emphasizing a personal perspective or preference.",
        "• Para sa akin, mahalaga ang oras kasama ang pamilya.",
        "• Para sa akin, mas mabuting maghanda nang maaga.",
        "• Naniniwala ako na...",
        "Used to express a belief or conviction.",
        "• Naniniwala ako na mahalaga ang pagkakaisa.",
        "• Naniniwala ako na may kakayahan ang bawat isa na matuto.",
        "• Kung ako ang tatanungin...",
        "Used when responding to a question asking for a personal opinion.",
        "• Kung ako ang tatanungin, dapat nating unahin ang kaligtasan.",
        "• Kung ako ang tatanungin, mas mabuting pag-usapan muna natin ang problema.",
      ],
    },
    {
      title: "C. Expressing the Intensity of Feelings",
      body: [
        "Feelings can be expressed with different degrees of intensity.",
      ],
      table: {
        leftHeading: "Filipino",
        rightHeading: "English",
        rows: [
          {
            left: "Medyo kinakabahan ako.",
            right: "I am a little nervous.",
          },
          {
            left: "Kinakabahan ako.",
            right: "I am nervous.",
          },
          {
            left: "Sobrang kinakabahan ako.",
            right: "I am extremely nervous.",
          },
          {
            left: "Talagang masaya ako.",
            right: "I am truly happy.",
          },
          {
            left: "Labis akong nagpapasalamat.",
            right: "I am very grateful.",
          },
        ],
      },
    },
    {
      title: "C. Expressing the Intensity of Feelings",
      body: [
        "Other expressions:",
      ],
      examples: [
        {
          text: "Hindi ako mapakali sa sobrang kaba.",
          meaning: "I cannot stay calm because I am so nervous.",
        },
        {
          text: "Lubos akong nasiyahan sa resulta.",
          meaning: "I was very satisfied with the result.",
        },
        {
          text: "Medyo nababahala ako sa sitwasyon.",
          meaning: "I am somewhat concerned about the situation.",
        },
      ],
      remember: "Words such as medyo, sobrang, talagang, and lubos help communicate the degree or intensity of a feeling.",
    },
    {
      title: "D. Supporting an Opinion with Reasons",
      body: [
        "A well-developed opinion usually includes an explanation.",
        "One useful structure is:",
        "Opinion + Reason + Example or Explanation",
        "Sa palagay ko, mahalaga ang pag-aaral ng mga katutubong wika dahil bahagi ang mga ito ng ating kultura. Halimbawa, naipapasa sa pamamagitan ng wika ang mga kuwento, tradisyon, at kaalaman ng isang pamayanan.",
        "English:",
        "In my opinion, learning indigenous languages is important because they are part of our culture. For example, stories, traditions, and knowledge of a community are passed down through language.",
        "Another example:",
        "Naniniwala ako na makatutulong ang teknolohiya sa edukasyon sapagkat mas maraming mapagkukunan ng impormasyon ang mga mag-aaral. Gayunpaman, mahalaga pa ring gamitin ito nang responsable.",
        "English:",
        "I believe technology can help education because students have access to more sources of information. Nevertheless, it is still important to use it responsibly.",
      ],
    },
    {
      title: "E. Agreeing and Disagreeing Politely",
      body: [
        "When discussing different viewpoints, it is important to communicate respectfully.",
        "Agreeing:",
        "• Sang-ayon ako sa iyong sinabi.",
        "• Tama ka. Mahalaga nga ang bagay na iyan.",
        "• Lubos akong sumasang-ayon dahil malinaw ang iyong paliwanag.",
        "Partially Agreeing:",
        "• May punto ka, ngunit may iba pa akong nais idagdag.",
        "• Sumasang-ayon ako sa ilang bahagi ng iyong sinabi.",
        "• Nauunawaan ko ang iyong pananaw, pero may isa pa akong konsiderasyon.",
        "Disagreeing:",
        "• Iginagalang ko ang iyong opinyon, ngunit iba ang aking pananaw.",
        "• Hindi ako lubos na sumasang-ayon dahil may ilang bagay na dapat isaalang-alang.",
        "• Sa palagay ko, may mas angkop na paraan upang malutas ang suliranin.",
        "A respectful disagreement focuses on the idea rather than attacking the person.",
      ],
    },
    {
      title: "F. Distinguishing Facts, Opinions, and Feelings",
      body: [
        "Understanding these differences helps prevent misunderstandings.",
      ],
      table: {
        leftHeading: "Type",
        rightHeading: "Description · Example",
        rows: [
          {
            left: "Fact",
            right: "A statement that can be verified · Ang Pilipinas ay isang kapuluan.",
          },
          {
            left: "Opinion",
            right: "A personal viewpoint · Sa palagay ko, mas masarap ang lutong-bahay.",
          },
          {
            left: "Feeling",
            right: "An emotional response · Masaya ako sa aming paglalakbay.",
          },
        ],
      },
    },
    {
      title: "F. Distinguishing Facts, Opinions, and Feelings",
      body: [
        "Practice identifying the type:",
      ],
      examples: [
        {
          text: "Ang Maynila ang kabisera ng Pilipinas.",
          meaning: "Fact",
        },
        {
          text: "Mas maganda ang pag-aaral sa umaga.",
          meaning: "Opinion",
        },
        {
          text: "Nalulungkot ako sa balita.",
          meaning: "Feeling",
        },
      ],
    },
    {
      title: "G. Building a Longer Opinion Statement",
      body: [
        "At the advanced level, learners should be able to combine multiple ideas into a coherent response.",
        "Consider this structure:",
        "• Introduce your opinion.",
        "• Explain your reason.",
        "• Provide an example.",
        "• Acknowledge another perspective.",
        "• End with a conclusion.",
        "Example topic: Should students learn local Philippine languages?",
        "Sa palagay ko, mahalagang matutuhan ng mga mag-aaral ang mga lokal na wika sa Pilipinas. Bahagi ng ating pagkakakilanlan at kultura ang mga wikang ito. Halimbawa, sa pamamagitan ng pag-aaral ng isang lokal na wika, mas nauunawaan natin ang mga tradisyon at karanasan ng mga taong gumagamit nito.",
        "Maaaring sabihin ng ilan na sapat na ang pag-aaral ng mga pangunahing wikang ginagamit sa paaralan at trabaho. Nauunawaan ko ang pananaw na iyon, ngunit naniniwala akong hindi dapat kalimutan ang mga lokal na wika. Sa kabuuan, mahalagang magkaroon ng balanse sa pag-aaral ng iba't ibang wika.",
        "English:",
        "In my opinion, it is important for students to learn local Philippine languages. These languages are part of our identity and culture. For example, by learning a local language, we can better understand the traditions and experiences of the people who use it.",
        "Some may say that learning the main languages used in school and work is enough. I understand that perspective, but I believe local languages should not be forgotten. Overall, it is important to maintain a balance in learning different languages.",
      ],
    },
  ],
  situationsTitle: "Useful Phrases and Sentences",
  situationGroups: [
    {
      title: "A. Expressing Personal Opinions",
      items: [
        {
          term: "Sa palagay ko, magandang ideya ito.",
          meaning: "In my opinion, this is a good idea.",
        },
        {
          term: "Para sa akin, mahalaga ang edukasyon.",
          meaning: "For me, education is important.",
        },
        {
          term: "Sa tingin ko, kailangan natin itong pag-isipan.",
          meaning: "I think we need to think about this.",
        },
        {
          term: "Naniniwala akong makatutulong ito sa mga estudyante.",
          meaning: "I believe this will help students.",
        },
        {
          term: "Kung ako ang tatanungin, pipiliin ko ang unang opsyon.",
          meaning: "If you ask me, I would choose the first option.",
        },
      ],
    },
    {
      title: "B. Expressing Feelings",
      items: [
        {
          term: "Masaya ako sa naging resulta.",
          meaning: "I am happy with the result.",
        },
        {
          term: "Medyo kinakabahan ako tungkol sa pagsusulit.",
          meaning: "I am a little nervous about the examination.",
        },
        {
          term: "Nalulungkot ako sa nangyari.",
          meaning: "I feel sad about what happened.",
        },
        {
          term: "Nagpapasalamat ako sa inyong tulong.",
          meaning: "I am grateful for your help.",
        },
        {
          term: "Nasasabik akong matuto ng bagong bagay.",
          meaning: "I am excited to learn something new.",
        },
      ],
    },
    {
      title: "C. Explaining Reasons",
      items: [
        {
          term: "Sang-ayon ako dahil makatutulong ito sa lahat.",
          meaning: "I agree because this will help everyone.",
        },
        {
          term: "Hindi ako sang-ayon sapagkat may ilang suliranin pa.",
          meaning: "I disagree because there are still some problems.",
        },
        {
          term: "Mahalaga ito dahil nakaaapekto ito sa ating kinabukasan.",
          meaning: "This is important because it affects our future.",
        },
        {
          term: "Pinili ko ito dahil mas angkop ito sa aking pangangailangan.",
          meaning: "I chose this because it is more suitable for my needs.",
        },
      ],
    },
    {
      title: "D. Responding to Different Perspectives",
      items: [
        {
          term: "Nauunawaan ko ang iyong punto.",
          meaning: "I understand your point.",
        },
        {
          term: "May punto ka rin naman.",
          meaning: "You also have a point.",
        },
        {
          term: "Iginagalang ko ang iyong pananaw.",
          meaning: "I respect your perspective.",
        },
        {
          term: "Maaari mo bang ipaliwanag pa?",
          meaning: "Could you explain further?",
        },
        {
          term: "Bakit ganoon ang iyong palagay?",
          meaning: "Why do you think so?",
        },
        {
          term: "Maganda ang iyong paliwanag.",
          meaning: "Your explanation is good.",
        },
      ],
    },
  ],
  conversations: [
    {
      title: "Conversation 1: Sharing an Opinion About Education",
      lines: [
        {
          speaker: "Mia",
          text: "Sa palagay mo, mahalaga ba ang pagkakaroon ng mga gawaing panggrupo sa paaralan?",
          translation: "In your opinion, are group activities in school important?",
        },
        {
          speaker: "Leo",
          text: "Oo, sa tingin ko ay mahalaga ang mga ito dahil natututo ang mga estudyante na makipagtulungan.",
          translation: "Yes, I think they are important because students learn how to cooperate.",
        },
        {
          speaker: "Mia",
          text: "Sang-ayon ako. Nakakatulong din ito sa paglinang ng kakayahan sa pakikipag-usap.",
          translation: "I agree. They also help develop communication skills.",
        },
        {
          speaker: "Leo",
          text: "Tama. Gayunpaman, dapat magkaroon ng pantay na partisipasyon ang bawat miyembro.",
          translation: "That's right. However, every member should participate equally.",
        },
        {
          speaker: "Mia",
          text: "May punto ka. Mas nagiging makabuluhan ang gawain kapag lahat ay may ambag.",
          translation: "You have a point. The activity becomes more meaningful when everyone contributes.",
        },
      ],
    },
    {
      title: "Conversation 2: Expressing Feelings About an Achievement",
      lines: [
        {
          speaker: "Carla",
          text: "Kumusta ang pakiramdam mo pagkatapos mong maipasa ang iyong proyekto?",
          translation: "How do you feel after submitting your project?",
        },
        {
          speaker: "Daniel",
          text: "Masaya at magaan ang pakiramdam ko. Matagal ko rin itong pinaghandaan.",
          translation: "I feel happy and relieved. I prepared for it for a long time.",
        },
        {
          speaker: "Carla",
          text: "Siguro ay nakakapagod ang proseso.",
          translation: "The process must have been tiring.",
        },
        {
          speaker: "Daniel",
          text: "Oo, pero sulit naman ang lahat ng pagsisikap ko.",
          translation: "Yes, but all my efforts were worth it.",
        },
        {
          speaker: "Carla",
          text: "Ipinagmamalaki mo ba ang naging resulta?",
          translation: "Are you proud of the result?",
        },
        {
          speaker: "Daniel",
          text: "Oo. Nagpapasalamat din ako sa mga taong tumulong sa akin.",
          translation: "Yes. I am also grateful to the people who helped me.",
        },
      ],
    },
    {
      title: "Conversation 3: Respectfully Disagreeing",
      lines: [
        {
          speaker: "Ella",
          text: "Sa tingin ko, dapat puro online activities na lang ang gamitin sa pag-aaral.",
          translation: "I think only online activities should be used for learning.",
        },
        {
          speaker: "Francis",
          text: "Naiintindihan ko ang iyong punto, pero hindi ako lubos na sumasang-ayon.",
          translation: "I understand your point, but I do not entirely agree.",
        },
        {
          speaker: "Ella",
          text: "Bakit naman?",
          translation: "Why?",
        },
        {
          speaker: "Francis",
          text: "Dahil may mga estudyanteng mas natututo kapag may aktuwal na talakayan at personal na pakikipag-ugnayan.",
          translation: "Because some students learn better through actual discussions and personal interaction.",
        },
        {
          speaker: "Ella",
          text: "May punto ka. Pero nakakatulong din naman ang online activities sa mga estudyanteng malayo sa paaralan.",
          translation: "You have a point. But online activities can also help students who live far from school.",
        },
        {
          speaker: "Francis",
          text: "Sang-ayon ako roon. Sa palagay ko, mas mabuting pagsamahin ang dalawang paraan.",
          translation: "I agree with that. In my opinion, it would be better to combine both methods.",
        },
        {
          speaker: "Ella",
          text: "Magandang ideya iyan. Mas maraming estudyante ang maaaring makinabang.",
          translation: "That's a good idea. More students could benefit.",
        },
      ],
    },
  ],
  assessment: {
    instructions: "Choose the correct answer.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What does Sa palagay ko mean?",
        options: [
          {
            key: "A",
            text: "I am worried.",
          },
          {
            key: "B",
            text: "In my opinion.",
          },
          {
            key: "C",
            text: "I disagree.",
          },
          {
            key: "D",
            text: "I am happy.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "Which expression means “I completely agree”?",
        options: [
          {
            key: "A",
            text: "Hindi ako sang-ayon.",
          },
          {
            key: "B",
            text: "Lubos akong sumasang-ayon.",
          },
          {
            key: "C",
            text: "May iba akong pananaw.",
          },
          {
            key: "D",
            text: "Hindi ko alam.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 3,
        prompt: "Which sentence expresses a feeling?",
        options: [
          {
            key: "A",
            text: "Sa tingin ko, mahalaga ang edukasyon.",
          },
          {
            key: "B",
            text: "Ang Pilipinas ay isang kapuluan.",
          },
          {
            key: "C",
            text: "Kinakabahan ako sa pagsusulit.",
          },
          {
            key: "D",
            text: "Naniniwala ako sa kahalagahan ng wika.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 4,
        prompt: "What does gayunpaman mean?",
        options: [
          {
            key: "A",
            text: "For example",
          },
          {
            key: "B",
            text: "Therefore",
          },
          {
            key: "C",
            text: "Nevertheless",
          },
          {
            key: "D",
            text: "Because",
          },
        ],
        answerKey: "C",
      },
      {
        id: 5,
        prompt: "Which expression introduces a personal belief?",
        options: [
          {
            key: "A",
            text: "Naniniwala ako na...",
          },
          {
            key: "B",
            text: "Malungkot ako.",
          },
          {
            key: "C",
            text: "Dahil dito...",
          },
          {
            key: "D",
            text: "Halimbawa...",
          },
        ],
        answerKey: "A",
      },
      {
        id: 6,
        prompt: "Which response demonstrates respectful disagreement?",
        options: [
          {
            key: "A",
            text: "Wala kang alam.",
          },
          {
            key: "B",
            text: "Mali ang lahat ng sinabi mo.",
          },
          {
            key: "C",
            text: "Iginagalang ko ang iyong opinyon, ngunit iba ang aking pananaw.",
          },
          {
            key: "D",
            text: "Hindi kita pakikinggan.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 7,
        prompt: "Which sentence gives a reason for an opinion?",
        options: [
          {
            key: "A",
            text: "Masaya ako ngayon.",
          },
          {
            key: "B",
            text: "Sang-ayon ako dahil makatutulong ito sa lahat.",
          },
          {
            key: "C",
            text: "Maganda ang araw.",
          },
          {
            key: "D",
            text: "Tahimik ang silid.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 8,
        prompt: "What does nag-aalala mean?",
        options: [
          {
            key: "A",
            text: "Excited",
          },
          {
            key: "B",
            text: "Worried",
          },
          {
            key: "C",
            text: "Happy",
          },
          {
            key: "D",
            text: "Surprised",
          },
        ],
        answerKey: "B",
      },
      {
        id: 9,
        prompt: "Which statement is a fact?",
        options: [
          {
            key: "A",
            text: "Mas masarap ang adobo kaysa sinigang.",
          },
          {
            key: "B",
            text: "Sa tingin ko, maganda ang pelikula.",
          },
          {
            key: "C",
            text: "Ang Pilipinas ay matatagpuan sa Timog-Silangang Asya.",
          },
          {
            key: "D",
            text: "Nakakatuwa ang palabas.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 10,
        prompt: "Which expression means “I understand your point”?",
        options: [
          {
            key: "A",
            text: "Hindi kita maintindihan.",
          },
          {
            key: "B",
            text: "Nauunawaan ko ang iyong punto.",
          },
          {
            key: "C",
            text: "Hindi ako sang-ayon.",
          },
          {
            key: "D",
            text: "Ano ang ginagawa mo?",
          },
        ],
        answerKey: "B",
      },
      {
        id: 11,
        prompt: "What is the purpose of using dahil in an opinion statement?",
        options: [
          {
            key: "A",
            text: "To introduce a reason",
          },
          {
            key: "B",
            text: "To describe a person",
          },
          {
            key: "C",
            text: "To ask a question",
          },
          {
            key: "D",
            text: "To express a greeting",
          },
        ],
        answerKey: "A",
      },
      {
        id: 12,
        prompt: "Which sentence combines an opinion and a reason?",
        options: [
          {
            key: "A",
            text: "Masaya ako ngayon.",
          },
          {
            key: "B",
            text: "Sa palagay ko, mahalaga ang pagbabasa dahil nagpapalawak ito ng kaalaman.",
          },
          {
            key: "C",
            text: "Maganda ang bahay.",
          },
          {
            key: "D",
            text: "Malungkot siya kahapon.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 13,
        prompt: "What does sa kabilang banda mean?",
        options: [
          {
            key: "A",
            text: "In the morning",
          },
          {
            key: "B",
            text: "On the other hand",
          },
          {
            key: "C",
            text: "In my opinion",
          },
          {
            key: "D",
            text: "As a result",
          },
        ],
        answerKey: "B",
      },
      {
        id: 14,
        prompt: "Which expression is appropriate when asking someone to explain further?",
        options: [
          {
            key: "A",
            text: "Maaari mo bang ipaliwanag pa?",
          },
          {
            key: "B",
            text: "Tumigil ka na.",
          },
          {
            key: "C",
            text: "Mali ka.",
          },
          {
            key: "D",
            text: "Ayoko sa ideya mo.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 15,
        prompt: "Which is the best structure for presenting a well-supported opinion?",
        options: [
          {
            key: "A",
            text: "Opinion, reason, example, and conclusion.",
          },
          {
            key: "B",
            text: "Random words without explanation.",
          },
          {
            key: "C",
            text: "A feeling without context.",
          },
          {
            key: "D",
            text: "A statement that criticizes other people.",
          },
        ],
        answerKey: "A",
      },
    ],
  },
  extraActivities: [
    {
      title: "Vocabulary Matching",
      kind: "match",
      instructions: "Match each Filipino expression with its correct English meaning.",
      items: [
        "Filipino",
        "Sa palagay ko",
        "Nag-aalala ako",
        "Sang-ayon ako",
        "Hindi ako sang-ayon",
        "Gayunpaman",
      ],
      choices: [
        "Choices",
        "I am worried",
        "In my opinion",
        "I disagree",
        "I agree",
        "Nevertheless",
      ],
    },
    {
      title: "Identify the Statement",
      kind: "choice",
      instructions: "Identify whether each statement is a Fact, Opinion, or Feeling.",
      items: [
        "Masaya ako sa aking natanggap na regalo.",
        "Ang Pilipinas ay matatagpuan sa Timog-Silangang Asya.",
        "Sa palagay ko, mas epektibo ang pag-aaral sa umaga.",
        "Kinakabahan ako sa aking presentasyon.",
        "Naniniwala ako na dapat pangalagaan ang mga lokal na wika.",
      ],
    },
    {
      title: "Complete the Sentences",
      kind: "fill",
      instructions: "Choose an appropriate expression to complete each sentence.",
      items: [
        "__________, mahalaga ang pagtutulungan sa isang pangkat.",
        "__________ ako sa iyong paliwanag dahil malinaw ito.",
        "__________, may iba pa akong pananaw tungkol sa paksa.",
        "__________ ako dahil bukas na ang aming pagsusulit.",
        "__________, dapat nating isaalang-alang ang lahat ng panig.",
      ],
      choices: [
        "Sa palagay ko",
        "Sang-ayon",
        "Gayunpaman",
        "Kinakabahan",
        "Sa kabuuan",
      ],
    },
    {
      title: "Choose the Most Respectful Response",
      kind: "choice",
      items: [
        "Your classmate expresses an opinion different from yours. What should you say? A. Mali ka at wala kang alam. B. Iginagalang ko ang iyong pananaw, ngunit iba ang aking opinyon. C. Huwag ka nang magsalita. D. Walang saysay ang sinabi mo.",
        "Someone asks why you support a school activity. A. Dahil lang. B. Wala akong pakialam. C. Sang-ayon ako dahil nakatutulong ito sa pagtutulungan ng mga estudyante. D. Hindi ko alam.",
        "You want to ask someone to explain their opinion further. A. Maaari mo bang ipaliwanag pa ang iyong pananaw? B. Tumahimik ka na. C. Mali ang iyong sinabi. D. Ayoko nang makinig.",
      ],
    },
    {
      title: "Arrange the Words",
      kind: "arrange",
      instructions: "Arrange the words to create a complete Filipino sentence.",
      items: [
        "ko / sa / mahalaga / palagay / edukasyon / ang",
        "ako / dahil / masaya / nakapasa / ako",
        "sang-ayon / hindi / ako / iyong / sa / opinyon",
        "pananaw / ang / ko / igalang / iyong / ko",
        "dahil / mahalaga / wika / kultura / ang / ating / bahagi / ito / ng",
      ],
    },
    {
      title: "Translate into Filipino",
      kind: "translate",
      instructions: "Translate the following sentences into Filipino.",
      items: [
        "In my opinion, education is important.",
        "I am nervous about my presentation.",
        "I agree with your explanation.",
        "I respect your opinion, but I have a different perspective.",
        "I believe that learning local languages helps preserve culture.",
      ],
    },
    {
      title: "Opinion Writing Challenge",
      kind: "open",
      instructions: "Choose ONE topic and write a paragraph expressing your opinion.\nTopics:",
      items: [
        "Should students learn Philippine local languages?",
        "Is technology helpful in education?",
        "Should students participate in community activities?",
        "Is teamwork important in achieving a goal?",
        "Should schools provide more opportunities for creative activities?",
      ],
      note: "Requirements:\n• Write at least 6–8 complete Filipino sentences.\n• Begin with an expression of opinion.\n• Include at least two supporting reasons.\n• Provide at least one example.\n• Use at least two connecting expressions.\n• Acknowledge a different perspective or possible opposing opinion.\n• End with a clear concluding statement.",
    },
  ],
  rewards: {
    items: [
      {
        section: "vocabulary",
        label: "Complete the vocabulary section",
        xp: 10,
      },
      {
        section: "conversation",
        label: "Complete the lesson proper + Finish Activities 1–3 + Finish Activities 4–7",
        xp: 50,
      },
      {
        section: "assessment",
        label: "Pass the lesson assessment",
        xp: 20,
      },
    ],
    total: 80,
    badge: {
      name: "Thoughtful Communicator Badge",
    },
    completionRequirement: "Finish the vocabulary and lesson proper sections. Complete the guided conversation activities. Complete the required practice exercises. Obtain at least 70% in the lesson assessment.",
  },
  expectedOutcomes: [
    "Advanced Level Progress: Lesson 21 of 30.",
    "The next lesson will develop these skills further by teaching learners how to give explanations, clarify ideas, and present reasons using more complex Filipino expressions.",
  ],
};
