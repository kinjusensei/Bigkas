import { StructuredLesson } from "../../types/structuredLesson";

// Tagalog Lesson 23 — imported from "Lesson Plan.pdf", pages 432–455.
// The Tagalog and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.

export const tagalogLesson23: StructuredLesson = {
  lessonId: "tagalog_23",
  dialect: "tagalog",
  dialectLabel: "Tagalog",
  lessonNumber: 23,
  title: "Agreeing and Disagreeing",
  level: "Advanced",
  unit: "Unit 1 – Advanced Communication",
  estimatedDuration: "45–55 minutes",
  prerequisite: "Completion of Lessons 1–22",
  intro: [
    "People do not always share the same opinions. In conversations, discussions, and debates, individuals may agree with one another, have different perspectives, or partially agree with certain ideas.",
    "For example, two students may discuss whether technology makes learning easier. One may believe that technology provides convenient access to information, while another may think that it can also distract students.",
    "Both viewpoints can be discussed respectfully.",
    "In Filipino, there are different ways to express agreement and disagreement.",
    "Examples:",
    "• Sang-ayon ako sa iyong sinabi. – I agree with what you said.",
    "• Tama ka sa puntong iyan. – You are right about that point.",
    "• May punto ka, ngunit may iba akong pananaw. – You have a point, but I have a different perspective.",
    "• Hindi ako lubos na sumasang-ayon. – I do not entirely agree.",
    "• Iginagalang ko ang iyong opinyon. – I respect your opinion.",
    "Being able to agree or disagree appropriately is an important communication skill. It allows people to exchange ideas, explain their reasoning, and understand perspectives different from their own.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify common Filipino expressions for agreement and disagreement.",
    "Express complete, partial, and respectful disagreement.",
    "Support their opinions with reasons and examples.",
    "Respond appropriately to different viewpoints during conversations.",
    "Recognize the differences between agreeing, disagreeing, and remaining neutral.",
    "Use appropriate expressions to acknowledge another person's perspective.",
    "Participate in discussions and debates using clear and respectful Filipino.",
  ],
  expressionGroups: [
    {
      title: "A. Expressions of Agreement",
      items: [
        {
          term: "Sang-ayon",
          meaning: "Agree",
          pronunciation: "sang-a-yon",
        },
        {
          term: "Sumasang-ayon",
          meaning: "Agreeing",
          pronunciation: "su-ma-sang-a-yon",
        },
        {
          term: "Lubos",
          meaning: "Completely / Fully",
          pronunciation: "lu-bos",
        },
        {
          term: "Totoo",
          meaning: "True",
          pronunciation: "to-to-o",
        },
        {
          term: "Tama",
          meaning: "Correct / Right",
          pronunciation: "ta-ma",
        },
        {
          term: "Wasto",
          meaning: "Correct / Proper",
          pronunciation: "was-to",
        },
        {
          term: "Eksakto",
          meaning: "Exactly",
          pronunciation: "ek-sak-to",
        },
        {
          term: "Kapareho",
          meaning: "Same / Similar",
          pronunciation: "ka-pa-re-ho",
        },
        {
          term: "Sinusuportahan",
          meaning: "Supporting",
          pronunciation: "si-nu-su-por-ta-han",
        },
        {
          term: "Sumasang-ayon ako",
          meaning: "I agree",
          pronunciation: "su-ma-sang-a-yon a-ko",
        },
      ],
    },
    {
      title: "B. Expressions of Disagreement",
      items: [
        {
          term: "Hindi sang-ayon",
          meaning: "Disagree",
          pronunciation: "hin-di sang-a-yon",
        },
        {
          term: "Sumasalungat",
          meaning: "Opposing / Contradicting",
          pronunciation: "su-ma-sa-lu-ngat",
        },
        {
          term: "Tumututol",
          meaning: "Objecting",
          pronunciation: "tu-mu-tu-tol",
        },
        {
          term: "Salungat",
          meaning: "Opposite / Contrary",
          pronunciation: "sa-lu-ngat",
        },
        {
          term: "Magkaiba",
          meaning: "Different",
          pronunciation: "mag-ka-i-ba",
        },
        {
          term: "Kabaligtaran",
          meaning: "Opposite",
          pronunciation: "ka-ba-lig-ta-ran",
        },
        {
          term: "Pagtutol",
          meaning: "Objection",
          pronunciation: "pag-tu-tol",
        },
        {
          term: "Pagsalungat",
          meaning: "Opposition",
          pronunciation: "pag-sa-lu-ngat",
        },
        {
          term: "Hindi kumbinsido",
          meaning: "Not convinced",
          pronunciation: "hin-di kum-bin-si-do",
        },
        {
          term: "May pag-aalinlangan",
          meaning: "Having doubts",
          pronunciation: "may pag-a-a-lin-la-ngan",
        },
      ],
    },
    {
      title: "C. Expressions for Acknowledging Another Viewpoint",
      items: [
        {
          term: "Nauunawaan ko ang iyong punto.",
          meaning: "I understand your point.",
        },
        {
          term: "May punto ka.",
          meaning: "You have a point.",
        },
        {
          term: "Naiintindihan ko ang iyong pananaw.",
          meaning: "I understand your perspective.",
        },
        {
          term: "Makatuwiran ang iyong paliwanag.",
          meaning: "Your explanation is reasonable.",
        },
        {
          term: "Isinasaalang-alang ko ang iyong opinyon.",
          meaning: "I am considering your opinion.",
        },
        {
          term: "Maganda ang iyong punto.",
          meaning: "You make a good point.",
        },
        {
          term: "Tama ka sa bahaging iyon.",
          meaning: "You are right about that part.",
        },
        {
          term: "Nakikita ko ang iyong dahilan.",
          meaning: "I see your reason.",
        },
      ],
    },
    {
      title: "D. Expressions for Presenting an Alternative Viewpoint",
      items: [
        {
          term: "Gayunpaman",
          meaning: "Nevertheless / However",
        },
        {
          term: "Subalit",
          meaning: "However",
        },
        {
          term: "Ngunit",
          meaning: "But",
        },
        {
          term: "Sa kabilang banda",
          meaning: "On the other hand",
        },
        {
          term: "Iba ang aking pananaw.",
          meaning: "I have a different perspective.",
        },
        {
          term: "May nais akong idagdag.",
          meaning: "I would like to add something.",
        },
        {
          term: "Maaari ring tingnan ito sa ibang paraan.",
          meaning: "This can also be viewed another way.",
        },
        {
          term: "Hindi lamang iyan ang dapat isaalang-alang.",
          meaning: "That is not the only thing that should be considered.",
        },
        {
          term: "May isa pa akong punto.",
          meaning: "I have another point.",
        },
        {
          term: "Mas mainam kung...",
          meaning: "It would be better if...",
        },
      ],
    },
    {
      title: "E. Words Used in Discussions and Debates",
      items: [
        {
          term: "Pananaw",
          meaning: "Perspective / Viewpoint",
        },
        {
          term: "Opinyon",
          meaning: "Opinion",
        },
        {
          term: "Pangangatwiran",
          meaning: "Reasoning / Argumentation",
        },
        {
          term: "Katwiran",
          meaning: "Reason / Justification",
        },
        {
          term: "Pahayag",
          meaning: "Statement",
        },
        {
          term: "Katibayan",
          meaning: "Evidence",
        },
        {
          term: "Patunay",
          meaning: "Proof",
        },
        {
          term: "Argumento",
          meaning: "Argument",
        },
        {
          term: "Talakayan",
          meaning: "Discussion",
        },
        {
          term: "Pagtatalo",
          meaning: "Debate / Disagreement",
        },
        {
          term: "Kontraargumento",
          meaning: "Counterargument",
        },
        {
          term: "Konklusyon",
          meaning: "Conclusion",
        },
        {
          term: "Pagkakasundo",
          meaning: "Agreement",
        },
        {
          term: "Hindi pagkakasundo",
          meaning: "Disagreement",
        },
        {
          term: "Kompromiso",
          meaning: "Compromise",
        },
      ],
    },
  ],
  languageNotes: [
    {
      title: "A. Understanding Agreement and Disagreement",
      body: [
        "Agreement happens when someone accepts or supports another person's statement, opinion, or suggestion.",
        "Disagreement happens when someone has a different viewpoint or does not accept a particular statement or idea.",
        "Consider this example:",
        "Person A: Sa palagay ko, mahalaga ang paggamit ng teknolohiya sa edukasyon.",
        "In my opinion, using technology in education is important.",
        "Person B: Sang-ayon ako dahil nakatutulong ito sa paghahanap ng impormasyon.",
        "I agree because it helps in finding information.",
        "Person B expresses agreement and provides a reason.",
        "Now consider a different response:",
        "Person B: Nauunawaan ko ang iyong punto, ngunit sa palagay ko ay may mga pagkakataong nakagagambala rin ang teknolohiya sa pag-aaral.",
        "I understand your point, but I think there are situations when technology can also distract students from studying.",
        "Person B expresses disagreement respectfully and explains an alternative perspective.",
      ],
    },
    {
      title: "B. Expressing Complete Agreement",
      body: [
        "Complete agreement means that you fully support or accept another person's viewpoint.",
        "Common expressions include:",
        "• Lubos akong sumasang-ayon.",
        "• Tama ang iyong sinabi.",
        "• Iyan din ang aking paniniwala.",
        "• Pareho tayo ng pananaw.",
        "• Lubos akong sumasang-ayon na mahalaga ang edukasyon.",
        "• Tama ka. Dapat nating pangalagaan ang ating kapaligiran.",
        "• Pareho tayo ng pananaw tungkol sa kahalagahan ng pagtutulungan.",
        "You may also strengthen your agreement by providing an explanation.",
        "Lubos akong sumasang-ayon sa iyong mungkahi dahil makatutulong ito upang mas mapadali ang proseso.",
        "I completely agree with your suggestion because it can help make the process easier.",
      ],
    },
    {
      title: "C. Expressing Partial Agreement",
      body: [
        "Sometimes, you agree with one part of an argument but disagree with another.",
        "This is called partial agreement.",
        "Useful expressions:",
        "• May punto ka, ngunit...",
        "• Sumasang-ayon ako sa ilang bahagi ng iyong sinabi.",
        "• Tama ka sa isang aspeto, pero...",
        "• Nauunawaan ko ang iyong pananaw, gayunpaman...",
        "Sumasang-ayon ako na nakatutulong ang teknolohiya sa pag-aaral. Gayunpaman, hindi natin dapat kalimutan ang kahalagahan ng aktuwal na pakikipag-ugnayan sa guro at kapwa mag-aaral.",
        "I agree that technology helps learning. Nevertheless, we should not forget the importance of actual interaction with teachers and fellow students.",
        "Another example:",
        "May punto ka na nakatitipid ng oras ang online classes, ngunit hindi lahat ng mag-aaral ay may maaasahang koneksiyon sa internet.",
        "You have a point that online classes save time, but not all students have reliable internet connections.",
      ],
    },
    {
      title: "D. Expressing Respectful Disagreement",
      body: [
        "Disagreement does not have to be rude or confrontational.",
        "A respectful disagreement should:",
        "• Acknowledge the other person's viewpoint.",
        "• Clearly state that you have a different opinion.",
        "• Explain your reasons.",
        "• Avoid personal attacks.",
        "• Remain open to further discussion.",
        "Useful sentence pattern:",
        "Acknowledgment + Different Viewpoint + Reason",
        "Nauunawaan ko ang iyong pananaw, ngunit hindi ako lubos na sumasang-ayon dahil may iba pang salik na dapat isaalang-alang.",
        "I understand your perspective, but I do not entirely agree because there are other factors that should be considered.",
        "More examples:",
        "• Iginagalang ko ang iyong opinyon, ngunit sa tingin ko ay may mas angkop na paraan.",
        "• Naiintindihan ko kung bakit iyan ang iyong paniniwala. Gayunpaman, iba ang aking karanasan.",
        "• Hindi ako kumbinsido sa ideyang iyan dahil kulang pa ang mga ebidensiyang sumusuporta rito.",
      ],
    },
    {
      title: "E. Supporting Your Position with Reasons",
      body: [
        "An opinion becomes more convincing when supported by logical explanations and evidence.",
        "A useful structure is:",
        "Position + Reason + Supporting Example + Conclusion",
        "Hindi ako sumasang-ayon na dapat ganap na ipagbawal ang paggamit ng teknolohiya sa silid-aralan. Mahalaga ito dahil maraming kagamitang panturo ang makatutulong sa pag-aaral. Halimbawa, maaaring gumamit ng mga interaktibong aplikasyon upang mas maunawaan ng mga mag-aaral ang kanilang mga aralin. Samakatuwid, mas mainam na turuan ang mga mag-aaral kung paano gamitin ang teknolohiya nang responsable.",
        "English:",
        "I disagree that technology use should be completely prohibited in the classroom. It is important because many educational tools can help with learning. For example, interactive applications can be used to help students better understand their lessons. Therefore, it would be better to teach students how to use technology responsibly.",
      ],
    },
    {
      title: "F. Asking Questions During a Discussion",
      body: [
        "Asking questions allows you to understand another person's reasoning and examine their arguments.",
        "• Asking for clarification",
      ],
      examples: [
        {
          text: "Ano ang ibig mong sabihin?",
          meaning: "What do you mean?",
        },
        {
          text: "Maaari mo bang ipaliwanag pa ang bahaging iyon?",
          meaning: "Could you explain that part further?",
        },
      ],
    },
    {
      title: "F. Asking Questions During a Discussion",
      body: [
        "• Asking for supporting reasons",
      ],
      examples: [
        {
          text: "Ano ang batayan ng iyong pahayag?",
          meaning: "What is the basis of your statement?",
        },
        {
          text: "Mayroon ka bang halimbawa upang suportahan ang iyong ideya?",
          meaning: "Do you have an example to support your idea?",
        },
      ],
    },
    {
      title: "F. Asking Questions During a Discussion",
      body: [
        "• Asking about alternatives",
      ],
      examples: [
        {
          text: "May iba pa bang paraan upang malutas ito?",
          meaning: "Is there another way to solve this?",
        },
        {
          text: "Ano ang maaaring maging alternatibong solusyon?",
          meaning: "What could be an alternative solution?",
        },
      ],
    },
    {
      title: "G. Reaching an Agreement or Compromise",
      body: [
        "Not every discussion needs to end with one person being completely right and the other being wrong.",
        "Sometimes, people can identify common ground or reach a compromise.",
        "Useful expressions:",
      ],
      examples: [
        {
          text: "Maaari tayong magkasundo sa puntong ito.",
          meaning: "We can agree on this point.",
        },
        {
          text: "Humanap tayo ng solusyong kapwa natin matatanggap.",
          meaning: "Let us find a solution that both of us can accept.",
        },
        {
          text: "Maaari nating pagsamahin ang ating mga ideya.",
          meaning: "We can combine our ideas.",
        },
        {
          text: "May pagkakatulad ang ating mga pananaw.",
          meaning: "Our perspectives have similarities.",
        },
        {
          text: "Magkakaroon tayo ng mas mabuting resulta kung magtutulungan tayo.",
          meaning: "We will achieve a better result if we work together.",
        },
      ],
    },
    {
      title: "G. Reaching an Agreement or Compromise",
      body: [
        "Magkaiba man ang ating pananaw, pareho naman nating nais na mapabuti ang proyekto. Kaya maaari nating pagsamahin ang ating mga mungkahi upang makabuo ng mas angkop na plano.",
        "Although our perspectives differ, we both want to improve the project. Therefore, we can combine our suggestions to create a more suitable plan.",
      ],
    },
    {
      title: "H. Understanding Neutral Responses",
      body: [
        "There are times when you may not completely agree or disagree because you need more information.",
        "These responses help communicate uncertainty or neutrality.",
      ],
      examples: [
        {
          text: "Hindi pa ako nakapagpapasya tungkol dito.",
          meaning: "I have not made a decision about this yet.",
        },
        {
          text: "Kailangan ko munang pag-isipan ang iyong sinabi.",
          meaning: "I need to think about what you said first.",
        },
        {
          text: "Wala pa akong sapat na impormasyon upang makapagbigay ng opinyon.",
          meaning: "I do not yet have enough information to give an opinion.",
        },
        {
          text: "Parehong may kalakasan at kahinaan ang dalawang panig.",
          meaning: "Both sides have strengths and weaknesses.",
        },
        {
          text: "Depende ito sa sitwasyon.",
          meaning: "It depends on the situation.",
        },
      ],
    },
    {
      title: "H. Understanding Neutral Responses",
      body: [
        "These expressions are useful when you want to avoid making an unsupported judgment.",
      ],
    },
  ],
  situationsTitle: "Useful Phrases and Sentences",
  situationGroups: [
    {
      title: "A. Expressing Complete Agreement",
      items: [
        {
          term: "Lubos akong sumasang-ayon sa iyo.",
          meaning: "I completely agree with you.",
        },
        {
          term: "Sang-ayon ako sa iyong sinabi.",
          meaning: "I agree with what you said.",
        },
        {
          term: "Tama ang iyong punto.",
          meaning: "Your point is correct.",
        },
        {
          term: "Iyan din ang aking pananaw.",
          meaning: "That is also my perspective.",
        },
        {
          term: "Pareho tayo ng iniisip tungkol dito.",
          meaning: "We think alike about this.",
        },
        {
          term: "Sinusuportahan ko ang iyong mungkahi.",
          meaning: "I support your suggestion.",
        },
      ],
    },
    {
      title: "B. Expressing Partial Agreement",
      items: [
        {
          term: "Sumasang-ayon ako sa ilang bahagi ng iyong sinabi.",
          meaning: "I agree with some parts of what you said.",
        },
        {
          term: "May punto ka, ngunit may iba pa akong nais idagdag.",
          meaning: "You have a point, but I have something else to add.",
        },
        {
          term: "Tama ka sa bahaging iyon, pero...",
          meaning: "You are right about that part, but...",
        },
        {
          term: "Nauunawaan ko ang iyong pananaw, gayunpaman...",
          meaning: "I understand your perspective; nevertheless...",
        },
        {
          term: "Sang-ayon ako sa ideya, ngunit may ilang bagay na dapat isaalang-alang.",
          meaning: "I agree with the idea, but there are some things to consider.",
        },
      ],
    },
    {
      title: "C. Expressing Disagreement Politely",
      items: [
        {
          term: "Iginagalang ko ang iyong opinyon, ngunit hindi ako sumasang-ayon.",
          meaning: "I respect your opinion, but I disagree.",
        },
        {
          term: "May iba akong pananaw tungkol dito.",
          meaning: "I have a different perspective about this.",
        },
        {
          term: "Hindi ako lubos na kumbinsido sa ideyang iyan.",
          meaning: "I am not entirely convinced by that idea.",
        },
        {
          term: "Sa palagay ko, may mas angkop na solusyon.",
          meaning: "In my opinion, there is a more suitable solution.",
        },
        {
          term: "Nauunawaan ko ang iyong punto, subalit hindi ako sang-ayon sa konklusyon.",
          meaning: "I understand your point, but I disagree with the conclusion.",
        },
      ],
    },
    {
      title: "D. Asking About Someone's Viewpoint",
      items: [
        {
          term: "Ano ang iyong pananaw tungkol dito?",
          meaning: "What is your perspective about this?",
        },
        {
          term: "Bakit iyan ang iyong paniniwala?",
          meaning: "Why do you believe that?",
        },
        {
          term: "Maaari mo bang ipaliwanag ang iyong punto?",
          meaning: "Could you explain your point?",
        },
        {
          term: "Ano ang batayan ng iyong opinyon?",
          meaning: "What is the basis of your opinion?",
        },
        {
          term: "May iba ka pa bang dahilan?",
          meaning: "Do you have another reason?",
        },
        {
          term: "Paano mo nasabi iyan?",
          meaning: "What makes you say that?",
        },
      ],
    },
  ],
  conversations: [
    {
      title: "Conversation 1: Discussing Technology in Education",
      lines: [
        {
          speaker: "Mia",
          text: "Sa palagay ko, nakatutulong ang teknolohiya upang mapadali ang pag-aaral.",
          translation: "I think technology helps make learning easier.",
        },
        {
          speaker: "Carlo",
          text: "Lubos akong sumasang-ayon. Mas mabilis nang nakakahanap ng impormasyon ang mga estudyante.",
          translation: "I completely agree. Students can find information more quickly now.",
        },
        {
          speaker: "Mia",
          text: "Tama. Bukod dito, may mga aplikasyon na nagbibigay ng interaktibong pagsasanay.",
          translation: "That's right. In addition, there are applications that provide interactive exercises.",
        },
        {
          speaker: "Carlo",
          text: "Gayunpaman, sa tingin ko ay may ilang panganib din ito.",
          translation: "Nevertheless, I think it also has some risks.",
        },
        {
          speaker: "Mia",
          text: "Anong uri ng panganib?",
          translation: "What kind of risks?",
        },
        {
          speaker: "Carlo",
          text: "Halimbawa, maaaring masyadong maabala ang mga estudyante sa mga laro at social media.",
          translation: "For example, students may become too distracted by games and social media.",
        },
        {
          speaker: "Mia",
          text: "May punto ka. Kaya mahalagang gamitin ito nang may disiplina.",
          translation: "You have a point. That is why it is important to use it with discipline.",
        },
      ],
    },
    {
      title: "Conversation 2: Disagreeing About a Group Project",
      lines: [
        {
          speaker: "Ana",
          text: "Sa palagay ko, isang tao na lang ang dapat gumawa ng buong proyekto upang mas mabilis itong matapos.",
          translation: "I think only one person should do the entire project so that it can be finished faster.",
        },
        {
          speaker: "Ben",
          text: "Nauunawaan ko ang iyong punto, ngunit hindi ako sumasang-ayon.",
          translation: "I understand your point, but I disagree.",
        },
        {
          speaker: "Ana",
          text: "Bakit naman?",
          translation: "Why?",
        },
        {
          speaker: "Ben",
          text: "Dahil mas magiging patas kung hahatiin natin ang mga gawain ayon sa kakayahan ng bawat miyembro.",
          translation: "Because it would be fairer if we divided the tasks according to each member's abilities.",
        },
        {
          speaker: "Ana",
          text: "Pero paano kung may hindi tumupad sa kaniyang responsibilidad?",
          translation: "But what if someone does not fulfill their responsibility?",
        },
        {
          speaker: "Ben",
          text: "Maaari tayong magtakda ng malinaw na gawain at iskedyul para sa bawat isa.",
          translation: "We can set clear tasks and schedules for everyone.",
        },
        {
          speaker: "Ana",
          text: "May punto ka. Sa ganitong paraan, masusubaybayan natin ang progreso ng grupo.",
          translation: "You have a point. In this way, we can monitor the group's progress.",
        },
        {
          speaker: "Ben",
          text: "Tama. Mas magiging maayos ang proyekto kung lahat ay may ambag.",
          translation: "That's right. The project will be more organized if everyone contributes.",
        },
      ],
    },
    {
      title: "Conversation 3: Reaching a Compromise",
      lines: [
        {
          speaker: "Ella",
          text: "Mas gusto kong gawin nang personal ang ating presentasyon kaysa gumamit ng recorded video.",
          translation: "I prefer presenting in person rather than using a recorded video.",
        },
        {
          speaker: "Francis",
          text: "Mas gusto ko naman ang recorded video dahil maaari natin itong i-edit bago ipasa.",
          translation: "I prefer a recorded video because we can edit it before submitting it.",
        },
        {
          speaker: "Ella",
          text: "Nauunawaan ko ang iyong dahilan. Pero mas natural para sa akin ang personal na presentasyon.",
          translation: "I understand your reason. But an in-person presentation feels more natural to me.",
        },
        {
          speaker: "Francis",
          text: "May punto ka rin. Maaari nating pagsamahin ang dalawang paraan.",
          translation: "You also have a point. We can combine both methods.",
        },
        {
          speaker: "Ella",
          text: "Paano natin gagawin iyon?",
          translation: "How can we do that?",
        },
        {
          speaker: "Francis",
          text: "Maaari tayong magpakita ng maikling recorded video bilang panimula, pagkatapos ay ipagpatuloy ang presentasyon nang personal.",
          translation: "We can show a short recorded video as an introduction, then continue the presentation in person.",
        },
        {
          speaker: "Ella",
          text: "Magandang ideya iyan. Pareho nating magagamit ang ating mga mungkahi.",
          translation: "That's a good idea. We can both use our suggestions.",
        },
        {
          speaker: "Francis",
          text: "Sang-ayon ako. Sa ganitong paraan, mas magiging kawili-wili ang presentasyon.",
          translation: "I agree. In this way, the presentation will become more interesting.",
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
        prompt: "What does sang-ayon mean?",
        options: [
          {
            key: "A",
            text: "Disagree",
          },
          {
            key: "B",
            text: "Agree",
          },
          {
            key: "C",
            text: "Explain",
          },
          {
            key: "D",
            text: "Question",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "Which expression communicates complete agreement?",
        options: [
          {
            key: "A",
            text: "Hindi ako kumbinsido.",
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
            text: "Kailangan ko pang mag-isip.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 3,
        prompt: "What does may punto ka mean?",
        options: [
          {
            key: "A",
            text: "You are wrong.",
          },
          {
            key: "B",
            text: "You have a point.",
          },
          {
            key: "C",
            text: "I do not understand.",
          },
          {
            key: "D",
            text: "I disagree completely.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 4,
        prompt: "Which expression communicates partial agreement?",
        options: [
          {
            key: "A",
            text: "Sumasang-ayon ako sa ilang bahagi ng iyong sinabi.",
          },
          {
            key: "B",
            text: "Lubos akong sumasang-ayon sa lahat.",
          },
          {
            key: "C",
            text: "Wala akong pakialam.",
          },
          {
            key: "D",
            text: "Hindi ko narinig.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 5,
        prompt: "Which is the most respectful way to disagree?",
        options: [
          {
            key: "A",
            text: "Mali ka at wala kang alam.",
          },
          {
            key: "B",
            text: "Iginagalang ko ang iyong opinyon, ngunit iba ang aking pananaw.",
          },
          {
            key: "C",
            text: "Huwag kang magsalita.",
          },
          {
            key: "D",
            text: "Walang saysay ang sinabi mo.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 6,
        prompt: "What does katibayan mean?",
        options: [
          {
            key: "A",
            text: "Evidence",
          },
          {
            key: "B",
            text: "Feeling",
          },
          {
            key: "C",
            text: "Agreement",
          },
          {
            key: "D",
            text: "Suggestion",
          },
        ],
        answerKey: "A",
      },
      {
        id: 7,
        prompt: "Which expression is used to ask for someone's reason?",
        options: [
          {
            key: "A",
            text: "Ano ang batayan ng iyong opinyon?",
          },
          {
            key: "B",
            text: "Kumusta ka?",
          },
          {
            key: "C",
            text: "Saan ka pupunta?",
          },
          {
            key: "D",
            text: "Anong oras na?",
          },
        ],
        answerKey: "A",
      },
      {
        id: 8,
        prompt: "What does kompromiso mean?",
        options: [
          {
            key: "A",
            text: "Argument",
          },
          {
            key: "B",
            text: "Compromise",
          },
          {
            key: "C",
            text: "Disagreement",
          },
          {
            key: "D",
            text: "Evidence",
          },
        ],
        answerKey: "B",
      },
      {
        id: 9,
        prompt: "Which response shows neutrality?",
        options: [
          {
            key: "A",
            text: "Lubos akong sumasang-ayon.",
          },
          {
            key: "B",
            text: "Hindi ako sang-ayon.",
          },
          {
            key: "C",
            text: "Kailangan ko munang pag-isipan ito.",
          },
          {
            key: "D",
            text: "Tama ang lahat ng sinabi mo.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 10,
        prompt: "Which expression introduces an alternative viewpoint?",
        options: [
          {
            key: "A",
            text: "Sa kabilang banda",
          },
          {
            key: "B",
            text: "Magandang umaga",
          },
          {
            key: "C",
            text: "Walang anuman",
          },
          {
            key: "D",
            text: "Maraming salamat",
          },
        ],
        answerKey: "A",
      },
      {
        id: 11,
        prompt: "Which sentence is an example of respectful disagreement?",
        options: [
          {
            key: "A",
            text: "Hindi mo alam ang iyong sinasabi.",
          },
          {
            key: "B",
            text: "Nauunawaan ko ang iyong punto, ngunit may iba akong pananaw.",
          },
          {
            key: "C",
            text: "Hindi kita pakikinggan.",
          },
          {
            key: "D",
            text: "Mali ang lahat ng ideya mo.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 12,
        prompt: "What should you do when presenting a disagreement?",
        options: [
          {
            key: "A",
            text: "Attack the person.",
          },
          {
            key: "B",
            text: "Ignore the other person's explanation.",
          },
          {
            key: "C",
            text: "Explain your viewpoint and provide reasons.",
          },
          {
            key: "D",
            text: "Raise your voice to win the argument.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 13,
        prompt: "Which expression means “I am not entirely convinced”?",
        options: [
          {
            key: "A",
            text: "Hindi ako lubos na kumbinsido.",
          },
          {
            key: "B",
            text: "Lubos akong sumasang-ayon.",
          },
          {
            key: "C",
            text: "Tama ka.",
          },
          {
            key: "D",
            text: "Iyan din ang iniisip ko.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 14,
        prompt: "What is the purpose of acknowledging another person's viewpoint?",
        options: [
          {
            key: "A",
            text: "To end the discussion immediately.",
          },
          {
            key: "B",
            text: "To show that you understand their perspective.",
          },
          {
            key: "C",
            text: "To prove that they are wrong.",
          },
          {
            key: "D",
            text: "To avoid explaining your ideas.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 15,
        prompt: "What is a good way to resolve a disagreement?",
        options: [
          {
            key: "A",
            text: "Refuse to listen.",
          },
          {
            key: "B",
            text: "Insist that only one person is correct.",
          },
          {
            key: "C",
            text: "Find common ground and consider a compromise.",
          },
          {
            key: "D",
            text: "Stop communicating.",
          },
        ],
        answerKey: "C",
      },
    ],
  },
  extraActivities: [
    {
      title: "Vocabulary Matching",
      kind: "match",
      instructions: "Match each Filipino expression with its English meaning.",
      items: [
        "Filipino",
        "Sang-ayon",
        "Pagtutol",
        "Pananaw",
        "Kompromiso",
        "Katibayan",
      ],
      choices: [
        "Choices",
        "Compromise",
        "Agree",
        "Objection",
        "Perspective",
        "Evidence",
      ],
    },
    {
      title: "Identify the Response",
      kind: "choice",
      instructions: "Classify each statement as Complete Agreement, Partial Agreement, Disagreement, or Neutral Response.",
      items: [
        "Lubos akong sumasang-ayon sa iyong mungkahi.",
        "May punto ka, ngunit may iba pa akong nais idagdag.",
        "Hindi ako sang-ayon sa iyong konklusyon.",
        "Kailangan ko munang pag-isipan ang iyong sinabi.",
        "Tama ka. Iyan din ang aking pananaw.",
        "Nauunawaan ko ang iyong punto, pero iba ang aking karanasan.",
      ],
    },
    {
      title: "Complete the Sentences",
      kind: "fill",
      instructions: "Choose the appropriate expression from the word bank.",
      items: [
        "__________ sa iyong sinabi dahil sinusuportahan ito ng malinaw na paliwanag.",
        "Maganda ang iyong mungkahi. __________, may ilang bagay pa tayong dapat isaalang-alang.",
        "Sa __________, maaaring may ibang paraan upang malutas ang problema.",
        "Dapat nating __________ ang opinyon ng ibang tao.",
        "Maaari tayong humanap ng __________ upang pareho tayong makinabang.",
      ],
      choices: [
        "lubos akong sumasang-ayon",
        "gayunpaman",
        "sa kabilang banda",
        "igalang",
        "kompromiso",
      ],
    },
    {
      title: "Choose the Most Appropriate Response",
      kind: "choice",
      items: [
        "Your classmate presents an idea that you completely support. What should you say?\nA. Wala akong pakialam.\nB. Lubos akong sumasang-ayon sa iyong mungkahi.\nC. Mali ang iyong ideya.\nD. Hindi kita pakikinggan.",
        "You agree with part of someone's argument but have another point to add.\nA. May punto ka, ngunit may nais pa akong idagdag.\nB. Wala kang alam.\nC. Mali ang lahat ng sinabi mo.\nD. Hindi ako interesado.",
        "Someone asks why you disagree with their suggestion.\nA. Dahil ayoko lang.\nB. Hindi mo maiintindihan.\nC. Hindi ako sumasang-ayon dahil may ibang salik na dapat isaalang-alang.\nD. Tumigil ka na.",
        "You do not have enough information to make a decision.\nA. Tiyak na mali iyan.\nB. Hindi pa ako makapagpapasya dahil kailangan ko pa ng impormasyon.\nC. Lubos akong sumasang-ayon.\nD. Wala akong pakialam.",
        "Two people have different opinions but want to work together.\nA. Humanap tayo ng solusyong kapwa natin matatanggap.\nB. Huwag na tayong mag-usap.\nC. Dapat ikaw lang ang masunod.\nD. Hindi mahalaga ang iyong opinyon.",
      ],
    },
    {
      title: "Arrange the Words",
      kind: "arrange",
      instructions: "Arrange the words to form a complete Filipino sentence.",
      items: [
        "ako / sumasang-ayon / lubos / sa / iyo",
        "pananaw / aking / iba / ay / dito",
        "ko / nauunawaan / iyong / punto / ang",
        "tayo / kompromiso / humanap / ng / maaari",
        "opinyon / dapat / iba / igalang / ang / natin",
      ],
    },
    {
      title: "Translate into Filipino",
      kind: "translate",
      instructions: "Translate the following sentences into Filipino.",
      items: [
        "I completely agree with your suggestion.",
        "I understand your point, but I have a different perspective.",
        "I respect your opinion even though I disagree.",
        "We can combine our ideas to find a better solution.",
        "I need more information before making a decision.",
      ],
    },
    {
      title: "Discussion Challenge",
      kind: "open",
      instructions: "Choose ONE topic and prepare a short discussion in Filipino.\nTopics:",
      items: [
        "Should students be allowed to use smartphones during class?",
        "Is online learning as effective as face-to-face learning?",
        "Should students learn local Philippine languages in school?",
        "Is teamwork more important than individual achievement?",
        "Should technology replace some traditional classroom activities?",
      ],
      note: "Requirements:\n• Write at least 8–10 dialogue exchanges.\n• Include at least one complete agreement.\n• Include at least one partial agreement.\n• Include at least one respectful disagreement.\n• Support each viewpoint with a reason or example.\n• Include at least one question asking for clarification.\n• End the discussion with a conclusion, common ground, or compromise.",
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
      name: "Respectful Debater Badge",
    },
    completionRequirement: "Finish the vocabulary and lesson proper sections. Complete the guided conversation activities. Complete the required practice exercises. Obtain at least 70% in the lesson assessment.",
  },
  expectedOutcomes: [
    "Advanced Level Progress: Lesson 23 of 30.",
    "Unit 1 Milestone: Completion of Advanced Communication Lessons 21–23.",
    "Learners are now prepared to move into Unit 2 – Language Development, where they will work on more advanced sentence construction, verb forms, tenses, and idiomatic expressions.",
  ],
};
