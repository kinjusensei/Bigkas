import { StructuredLesson } from "../../types/structuredLesson";

// Tagalog Lesson 22 — imported from "Lesson Plan.pdf", pages 407–431.
// The Tagalog and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.

export const tagalogLesson22: StructuredLesson = {
  lessonId: "tagalog_22",
  dialect: "tagalog",
  dialectLabel: "Tagalog",
  lessonNumber: 22,
  title: "Giving Explanations and Reasons",
  level: "Advanced",
  unit: "Unit 1 – Advanced Communication",
  estimatedDuration: "45–55 minutes",
  prerequisite: "Completion of Lessons 1–21",
  intro: [
    "In everyday conversations, people are often asked to explain why something happened, how something works, or why they made a particular decision.",
    "For example:",
    "• Why did you choose that course?",
    "• Why is learning a local language important?",
    "• How does technology help students?",
    "• What caused the problem?",
    "• What can be done to solve it?",
    "Answering these questions requires more than giving a short response. A good explanation presents the main idea, provides reasons, and uses examples or supporting information.",
    "In Filipino, several expressions can help learners organize their explanations.",
    "Examples:",
    "• Dahil nag-aral ako nang mabuti, nakapasa ako sa pagsusulit. – Because I studied hard, I passed the examination.",
    "• Ito ay mahalaga sapagkat nakatutulong ito sa mga mag-aaral. – This is important because it helps students.",
    "• Bunga nito, naging mas maayos ang proseso. – As a result, the process became more organized.",
    "• Halimbawa, maaaring gamitin ang teknolohiya upang mapadali ang pag-aaral. – For example, technology can be used to make learning easier.",
    "In this lesson, learners will practice explaining situations, supporting their ideas, and presenting information in a logical sequence.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify Filipino expressions used to explain ideas, reasons, and situations.",
    "Explain the causes and results of different events.",
    "Use appropriate conjunctions and transitional expressions when presenting explanations.",
    "Provide examples and supporting details to clarify statements.",
    "Distinguish between causes, reasons, results, and conclusions.",
    "Organize explanations into logical and understandable paragraphs.",
    "Participate in conversations that require giving explanations and justifications.",
  ],
  expressionGroups: [
    {
      title: "A. Expressions for Giving Reasons",
      items: [
        {
          term: "Dahil",
          meaning: "Because",
          pronunciation: "da-hil",
        },
        {
          term: "Sapagkat",
          meaning: "Because / Since",
          pronunciation: "sa-pag-kat",
        },
        {
          term: "Palibhasa",
          meaning: "Because / Since (often implying a reason)",
          pronunciation: "pa-lib-ha-sa",
        },
        {
          term: "Yamang",
          meaning: "Since / Given that",
          pronunciation: "ya-mang",
        },
        {
          term: "Dahilan",
          meaning: "Reason",
          pronunciation: "da-hi-lan",
        },
        {
          term: "Sanhi",
          meaning: "Cause",
          pronunciation: "sa-nyi",
        },
        {
          term: "Paliwanag",
          meaning: "Explanation",
          pronunciation: "pa-li-wa-nag",
        },
        {
          term: "Batayan",
          meaning: "Basis / Foundation",
          pronunciation: "ba-ta-yan",
        },
        {
          term: "Layunin",
          meaning: "Purpose / Objective",
          pronunciation: "la-yu-nin",
        },
        {
          term: "Motibo",
          meaning: "Motive",
          pronunciation: "mo-ti-bo",
        },
        {
          term: "Kaugnay",
          meaning: "Related",
          pronunciation: "ka-ug-nay",
        },
        {
          term: "Isinasaalang-alang",
          meaning: "Taking into consideration",
          pronunciation: "i-si-na-sa-a-lang-a-lang",
        },
      ],
    },
    {
      title: "B. Expressions for Explaining and Clarifying",
      items: [
        {
          term: "Ibig sabihin",
          meaning: "It means",
        },
        {
          term: "Nangangahulugan ito na",
          meaning: "This means that",
        },
        {
          term: "Sa madaling salita",
          meaning: "In other words",
        },
        {
          term: "Ang ibig kong sabihin",
          meaning: "What I mean is",
        },
        {
          term: "Upang maging malinaw",
          meaning: "To make it clear",
        },
        {
          term: "Bilang paglilinaw",
          meaning: "By way of clarification",
        },
        {
          term: "Masasabi nating",
          meaning: "We can say that",
        },
        {
          term: "Ayon sa paliwanag",
          meaning: "According to the explanation",
        },
        {
          term: "Upang maunawaan",
          meaning: "In order to understand",
        },
        {
          term: "Sa ganitong paraan",
          meaning: "In this way",
        },
      ],
    },
    {
      title: "C. Expressions for Providing Examples",
      items: [
        {
          term: "Halimbawa",
          meaning: "For example",
        },
        {
          term: "Bilang halimbawa",
          meaning: "As an example",
        },
        {
          term: "Gaya ng",
          meaning: "Such as / Like",
        },
        {
          term: "Tulad ng",
          meaning: "Such as / Like",
        },
        {
          term: "Partikular na",
          meaning: "Particularly",
        },
        {
          term: "Kabilang dito ang",
          meaning: "Included among these are",
        },
        {
          term: "Isa na rito ang",
          meaning: "One example is",
        },
        {
          term: "Makikita ito sa",
          meaning: "This can be seen in",
        },
        {
          term: "Sa isang sitwasyon",
          meaning: "In one situation",
        },
        {
          term: "Halimbawa nito ay",
          meaning: "An example of this is",
        },
      ],
    },
    {
      title: "D. Expressions for Showing Results and Consequences",
      items: [
        {
          term: "Kaya",
          meaning: "So / Therefore",
        },
        {
          term: "Kaya naman",
          meaning: "Therefore / As a result",
        },
        {
          term: "Bunga nito",
          meaning: "As a result",
        },
        {
          term: "Bilang resulta",
          meaning: "As a result",
        },
        {
          term: "Dahil dito",
          meaning: "Because of this",
        },
        {
          term: "Samakatuwid",
          meaning: "Therefore",
        },
        {
          term: "Sa gayon",
          meaning: "Thus / In that way",
        },
        {
          term: "Nagdulot ito ng",
          meaning: "This resulted in",
        },
        {
          term: "Naging sanhi ito ng",
          meaning: "This caused",
        },
        {
          term: "Humantong ito sa",
          meaning: "This led to",
        },
      ],
    },
    {
      title: "E. Expressions for Organizing Explanations",
      items: [
        {
          term: "Una",
          meaning: "First",
        },
        {
          term: "Ikalawa",
          meaning: "Second",
        },
        {
          term: "Ikatlo",
          meaning: "Third",
        },
        {
          term: "Bukod dito",
          meaning: "Furthermore",
        },
        {
          term: "Dagdag pa rito",
          meaning: "In addition",
        },
        {
          term: "Gayundin",
          meaning: "Likewise",
        },
        {
          term: "Samantala",
          meaning: "Meanwhile",
        },
        {
          term: "Sa kabilang banda",
          meaning: "On the other hand",
        },
        {
          term: "Sa huli",
          meaning: "Finally",
        },
        {
          term: "Sa kabuuan",
          meaning: "Overall",
        },
      ],
    },
  ],
  languageNotes: [
    {
      title: "A. Understanding Causes and Reasons",
      body: [
        "A cause is something that produces an event or result. A reason explains why someone performs an action, makes a decision, or holds a particular belief.",
        "In Filipino, the words sanhi and dahilan are often used when discussing these concepts.",
        "Cause:",
        "Ang malakas na ulan ang sanhi ng pagbaha.",
        "The heavy rain caused the flooding.",
        "Reason:",
        "Hindi ako nakapasok dahil masama ang aking pakiramdam.",
        "I could not attend because I was not feeling well.",
        "Decision and Reason:",
        "Pinili kong mag-aral ng Computer Science dahil interesado ako sa teknolohiya at paglutas ng mga problema.",
        "I chose to study Computer Science because I am interested in technology and problem-solving.",
        "Remember:",
        "• Sanhi commonly refers to the cause of an event or condition.",
        "• Dahilan commonly refers to the reason behind an action, decision, or situation.",
        "Their meanings can overlap depending on context.",
      ],
    },
    {
      title: "B. Using Dahil and Sapagkat",
      body: [
        "Both dahil and sapagkat can introduce reasons.",
        "• Dahil",
        "This is commonly used in everyday conversations and both informal and formal writing.",
        "• Masaya siya dahil nakapasa siya sa pagsusulit.",
        "• Hindi kami natuloy dahil umulan nang malakas.",
        "• Nag-aral siya nang mabuti dahil gusto niyang makakuha ng mataas na marka.",
        "• Sapagkat",
        "This is generally more formal and commonly appears in written explanations or formal discussions.",
        "• Mahalaga ang edukasyon sapagkat nagbibigay ito ng mga oportunidad.",
        "• Dapat pangalagaan ang kalikasan sapagkat nakasalalay dito ang ating kinabukasan.",
        "• Kailangan ang pagtutulungan sapagkat hindi lahat ng gawain ay kayang tapusin ng isang tao lamang.",
        "Comparison:",
        "• Nagpahinga ako dahil pagod ako.",
        "• Nagpahinga ako sapagkat pagod ako.",
        "Both sentences mean:",
        "I rested because I was tired.",
      ],
    },
    {
      title: "C. Using Dahil sa and Dahil",
      body: [
        "These expressions are related but are commonly used in different sentence structures.",
        "Dahil introduces a reason or clause.",
        "Nahuli siya dahil mabagal ang biyahe.",
        "He/She was late because the journey was slow.",
        "Dahil sa commonly introduces a noun or noun phrase.",
        "Nahuli siya dahil sa mabagal na biyahe.",
        "He/She was late because of the slow journey.",
        "More examples:",
      ],
      examples: [
        {
          text: "Nasira ang kagamitan dahil hindi ito naalagaan.",
          meaning: "The equipment broke because it was not maintained.",
        },
        {
          text: "Nasira ang kagamitan dahil sa kakulangan ng pangangalaga.",
          meaning: "The equipment broke because of the lack of maintenance.",
        },
      ],
    },
    {
      title: "D. Explaining Results Using Bunga Nito, Kaya, and Samakatuwid",
      body: [
        "When explaining a situation, you may also describe what happened as a result.",
        "• Bunga nito",
        "Used to introduce a consequence or result.",
        "Hindi naging maayos ang komunikasyon ng pangkat. Bunga nito, naantala ang kanilang proyekto.",
        "Communication within the group was not effective. As a result, their project was delayed.",
        "• Kaya / Kaya naman",
        "Used to connect a reason or situation with its consequence.",
        "Maaga kaming nagsimula, kaya natapos namin ang gawain sa oras.",
        "We started early, so we finished the activity on time.",
        "• Samakatuwid",
        "Used to introduce a conclusion based on previously presented information.",
        "Maraming benepisyo ang pagbabasa. Samakatuwid, mahalagang ugaliin ito araw-araw.",
        "Reading has many benefits. Therefore, it is important to make it a daily habit.",
        "Important distinction:",
        "• Dahil introduces a reason.",
        "• Kaya introduces a result.",
        "• Bunga nito emphasizes a consequence.",
        "• Samakatuwid introduces a conclusion.",
      ],
    },
    {
      title: "E. Explaining Processes Step by Step",
      body: [
        "Some explanations describe how something is completed or how a system operates.",
        "For this purpose, use sequence expressions.",
      ],
      table: {
        leftHeading: "Filipino",
        rightHeading: "English",
        rows: [
          {
            left: "Una",
            right: "First",
          },
          {
            left: "Pagkatapos",
            right: "Afterward",
          },
          {
            left: "Susunod",
            right: "Next",
          },
          {
            left: "Kasunod nito",
            right: "Following this",
          },
          {
            left: "Pagkaraan",
            right: "After some time",
          },
          {
            left: "Sa huli",
            right: "Finally",
          },
        ],
      },
    },
    {
      title: "E. Explaining Processes Step by Step",
      body: [
        "Example: Explaining How to Complete an Online Activity",
        "Una, buksan ang aplikasyon gamit ang iyong account. Pagkatapos, piliin ang aralin na nais mong tapusin. Susunod, basahin ang mga panuto at sagutin ang mga pagsasanay. Kapag natapos mo na ang lahat ng gawain, isumite ang iyong mga sagot. Sa huli, makikita mo ang resulta ng iyong pagsusulit.",
        "English:",
        "First, open the application using your account. Afterward, select the lesson you want to complete. Next, read the instructions and answer the exercises. Once you have finished all the activities, submit your answers. Finally, you will see your assessment results.",
      ],
    },
    {
      title: "F. Clarifying and Rephrasing an Explanation",
      body: [
        "Sometimes, people do not immediately understand what you mean. You may need to explain the same idea in a simpler or clearer way.",
        "Useful expressions:",
      ],
      examples: [
        {
          text: "Ang ibig kong sabihin ay...",
          meaning: "What I mean is...",
        },
        {
          text: "Sa madaling salita...",
          meaning: "In other words...",
        },
        {
          text: "Ibig sabihin nito...",
          meaning: "This means...",
        },
        {
          text: "Upang maging malinaw...",
          meaning: "To make it clear...",
        },
        {
          text: "Hayaan mong ipaliwanag ko...",
          meaning: "Allow me to explain...",
        },
        {
          text: "Ang nais kong ipahiwatig ay...",
          meaning: "What I want to convey is...",
        },
      ],
    },
    {
      title: "F. Clarifying and Rephrasing an Explanation",
      body: [
        "Original explanation:",
        "Dapat nating gamitin nang wasto ang teknolohiya.",
        "We should use technology properly.",
        "Clarification:",
        "Ang ibig kong sabihin ay hindi sapat na gamitin lamang ang teknolohiya. Dapat din nating tiyakin na kapaki-pakinabang at ligtas ang paggamit nito.",
        "What I mean is that simply using technology is not enough. We should also make sure that its use is beneficial and safe.",
      ],
    },
    {
      title: "G. Providing Examples and Supporting Details",
      body: [
        "An explanation becomes clearer when supported by examples.",
        "You can introduce examples using:",
        "• Halimbawa",
        "• Bilang halimbawa",
        "• Gaya ng",
        "• Tulad ng",
        "• Isa na rito ang",
        "Maraming paraan upang mapangalagaan ang isang wika. Halimbawa, maaari itong gamitin sa pang-araw-araw na pakikipag-usap. Maaari rin itong ituro sa mga bata at gamitin sa mga kuwentong pambata. Isa na rito ang paglikha ng mga kagamitang panturo na gumagamit ng lokal na wika.",
        "English:",
        "There are many ways to preserve a language. For example, it can be used in everyday conversations. It can also be taught to children and used in children's stories. One example is creating instructional materials that use a local language.",
      ],
    },
    {
      title: "H. Constructing a Complete Explanation",
      body: [
        "A complete explanation should have a clear beginning, supporting details, and a conclusion.",
        "Use the following structure:",
        "• Main idea: Introduce the subject.",
        "• Reason: Explain why something happens or matters.",
        "• Supporting details: Provide examples or additional information.",
        "• Result or implication: Describe the possible outcome.",
        "• Conclusion: Summarize the explanation.",
        "Example Topic: Why Is Learning a Local Language Important?",
        "Ang pag-aaral ng mga lokal na wika ay mahalaga dahil bahagi ang mga ito ng ating kultura at pagkakakilanlan. Sa pamamagitan ng mga wikang ito, naipapahayag ng mga tao ang kanilang mga karanasan, paniniwala, at tradisyon.",
        "Halimbawa, ang mga kuwento at kasabihan sa isang pamayanan ay maaaring maglaman ng mahahalagang aral tungkol sa kanilang kasaysayan. Bukod dito, nakatutulong ang paggamit ng lokal na wika upang mapalakas ang komunikasyon sa loob ng isang komunidad.",
        "Bunga nito, nagkakaroon ng mas maraming pagkakataon na maipasa ang kaalaman mula sa isang henerasyon patungo sa susunod. Samakatuwid, mahalagang patuloy na gamitin, pag-aralan, at pangalagaan ang mga lokal na wika.",
        "English:",
        "Learning local languages is important because they are part of our culture and identity. Through these languages, people express their experiences, beliefs, and traditions.",
        "For example, stories and sayings in a community may contain important lessons about its history. Furthermore, using a local language helps strengthen communication within a community.",
        "As a result, there are more opportunities to pass knowledge from one generation to the next. Therefore, it is important to continue using, studying, and preserving local languages.",
      ],
    },
  ],
  situationsTitle: "Useful Phrases and Sentences",
  situationGroups: [
    {
      title: "A. Explaining Why Something Happened",
      items: [
        {
          term: "Nangyari ito dahil sa malakas na ulan.",
          meaning: "This happened because of the heavy rain.",
        },
        {
          term: "Hindi siya nakadalo sapagkat may mahalaga siyang gawain.",
          meaning: "He/She could not attend because of an important task.",
        },
        {
          term: "Naantala ang programa dahil sa problema sa kagamitan.",
          meaning: "The program was delayed because of an equipment problem.",
        },
        {
          term: "Ito ang dahilan kung bakit kami nagpasya na maghintay.",
          meaning: "This is the reason why we decided to wait.",
        },
        {
          term: "Naging matagumpay ang proyekto dahil sa pagtutulungan.",
          meaning: "The project became successful because of cooperation.",
        },
      ],
    },
    {
      title: "B. Explaining How Something Works",
      items: [
        {
          term: "Gumagana ito sa pamamagitan ng pagkonekta sa internet.",
          meaning: "It works by connecting to the internet.",
        },
        {
          term: "Una, kailangang buksan ang aplikasyon.",
          meaning: "First, the application needs to be opened.",
        },
        {
          term: "Pagkatapos nito, piliin ang nais na opsyon.",
          meaning: "After this, select the desired option.",
        },
        {
          term: "Sa ganitong paraan, mas madaling matatapos ang proseso.",
          meaning: "In this way, the process can be completed more easily.",
        },
        {
          term: "Nangangailangan ito ng wastong pagsunod sa mga hakbang.",
          meaning: "It requires proper following of the steps.",
        },
      ],
    },
    {
      title: "C. Giving Examples",
      items: [
        {
          term: "Halimbawa, maaaring gumamit ng mga larawan sa pagtuturo.",
          meaning: "For example, pictures can be used in teaching.",
        },
        {
          term: "Isa na rito ang paggamit ng mga lokal na wika.",
          meaning: "One example is the use of local languages.",
        },
        {
          term: "Makikita ito sa mga gawaing panggrupo.",
          meaning: "This can be seen in group activities.",
        },
        {
          term: "Gaya ng pagbabasa, nakatutulong din ang pagsusulat sa pagkatuto.",
          meaning: "Like reading, writing also helps in learning.",
        },
      ],
    },
    {
      title: "D. Explaining Results",
      items: [
        {
          term: "Bunga nito, naging mas maayos ang gawain.",
          meaning: "As a result, the activity became more organized.",
        },
        {
          term: "Dahil dito, mas maraming tao ang nakinabang.",
          meaning: "Because of this, more people benefited.",
        },
        {
          term: "Kaya naman, nagkaroon kami ng mas magandang resulta.",
          meaning: "Therefore, we achieved a better result.",
        },
        {
          term: "Humantong ito sa mas mahabang talakayan.",
          meaning: "This led to a longer discussion.",
        },
      ],
    },
  ],
  conversations: [
    {
      title: "Conversation 1: Explaining a Decision",
      lines: [
        {
          speaker: "Mara",
          text: "Bakit mo piniling sumali sa paligsahan?",
          translation: "Why did you choose to join the competition?",
        },
        {
          speaker: "Noel",
          text: "Sumali ako dahil gusto kong subukan ang aking kakayahan.",
          translation: "I joined because I wanted to test my abilities.",
        },
        {
          speaker: "Mara",
          text: "Hindi ka ba kinakabahan?",
          translation: "Aren't you nervous?",
        },
        {
          speaker: "Noel",
          text: "Medyo kinakabahan ako, ngunit naniniwala akong magandang pagkakataon ito para matuto.",
          translation: "I am a little nervous, but I believe this is a good opportunity to learn.",
        },
        {
          speaker: "Mara",
          text: "Tama ka. Ano ang inaasahan mong makamit?",
          translation: "You're right. What do you hope to achieve?",
        },
        {
          speaker: "Noel",
          text: "Umaasa akong magkaroon ng bagong karanasan at matuto mula sa ibang kalahok.",
          translation: "I hope to gain new experiences and learn from the other participants.",
        },
      ],
    },
    {
      title: "Conversation 2: Explaining a Problem",
      lines: [
        {
          speaker: "Ella",
          text: "Bakit hindi gumagana ang kompyuter?",
          translation: "Why isn't the computer working?",
        },
        {
          speaker: "Rico",
          text: "Posibleng dahil sa problema sa koneksiyon ng kuryente.",
          translation: "It may be because of a problem with the electrical connection.",
        },
        {
          speaker: "Ella",
          text: "Ano ang maaari nating gawin?",
          translation: "What can we do?",
        },
        {
          speaker: "Rico",
          text: "Una, suriin natin ang kable at saksakan. Pagkatapos, tiyaking maayos ang pagkakakonekta ng mga ito.",
          translation: "First, let's check the cable and outlet. Afterward, make sure they are properly connected.",
        },
        {
          speaker: "Ella",
          text: "Paano kung hindi pa rin gumana?",
          translation: "What if it still doesn't work?",
        },
        {
          speaker: "Rico",
          text: "Kung ganoon, maaaring may problema na sa mismong kagamitan. Kailangan na natin itong ipasuri sa teknisyan.",
          translation: "In that case, there may be a problem with the equipment itself. We need to have it checked by a technician.",
        },
      ],
    },
    {
      title: "Conversation 3: Explaining the Importance of Language",
      lines: [
        {
          speaker: "Ana",
          text: "Bakit sa palagay mo mahalagang pag-aralan ang mga lokal na wika?",
          translation: "Why do you think it is important to study local languages?",
        },
        {
          speaker: "Ben",
          text: "Mahalaga ang mga ito sapagkat bahagi ang mga ito ng ating kultura.",
          translation: "They are important because they are part of our culture.",
        },
        {
          speaker: "Ana",
          text: "Maaari mo bang ipaliwanag pa?",
          translation: "Could you explain further?",
        },
        {
          speaker: "Ben",
          text: "Halimbawa, ginagamit ang mga lokal na wika upang maipahayag ang mga kuwento, tradisyon, at karanasan ng isang pamayanan.",
          translation: "For example, local languages are used to express the stories, traditions, and experiences of a community.",
        },
        {
          speaker: "Ana",
          text: "Ano naman ang maaaring mangyari kung hindi na ito gagamitin?",
          translation: "What might happen if they are no longer used?",
        },
        {
          speaker: "Ben",
          text: "Maaaring unti-unting mawala ang kaalaman at mga tradisyong naipapasa sa pamamagitan ng wikang iyon.",
          translation: "The knowledge and traditions passed down through that language may gradually disappear.",
        },
        {
          speaker: "Ana",
          text: "Kaya mahalagang patuloy natin itong gamitin at ituro sa susunod na henerasyon.",
          translation: "That is why it is important to continue using and teaching it to the next generation.",
        },
        {
          speaker: "Ben",
          text: "Tama. Sa ganitong paraan, mas mapangangalagaan natin ang ating pamana.",
          translation: "That's right. In this way, we can better preserve our heritage.",
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
        prompt: "What does dahilan mean?",
        options: [
          {
            key: "A",
            text: "Result",
          },
          {
            key: "B",
            text: "Reason",
          },
          {
            key: "C",
            text: "Example",
          },
          {
            key: "D",
            text: "Conclusion",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "Which expression means “because”?",
        options: [
          {
            key: "A",
            text: "Samakatuwid",
          },
          {
            key: "B",
            text: "Dahil",
          },
          {
            key: "C",
            text: "Bunga nito",
          },
          {
            key: "D",
            text: "Sa huli",
          },
        ],
        answerKey: "B",
      },
      {
        id: 3,
        prompt: "What does bunga nito mean?",
        options: [
          {
            key: "A",
            text: "For example",
          },
          {
            key: "B",
            text: "As a result",
          },
          {
            key: "C",
            text: "In other words",
          },
          {
            key: "D",
            text: "First",
          },
        ],
        answerKey: "B",
      },
      {
        id: 4,
        prompt: "Which expression is generally more formal for introducing a reason?",
        options: [
          {
            key: "A",
            text: "Sapagkat",
          },
          {
            key: "B",
            text: "Naku",
          },
          {
            key: "C",
            text: "Siyempre",
          },
          {
            key: "D",
            text: "Ayos lang",
          },
        ],
        answerKey: "A",
      },
      {
        id: 5,
        prompt: "Which expression is used to clarify an explanation?",
        options: [
          {
            key: "A",
            text: "Sa madaling salita",
          },
          {
            key: "B",
            text: "Dahil",
          },
          {
            key: "C",
            text: "Kaya",
          },
          {
            key: "D",
            text: "Halimbawa",
          },
        ],
        answerKey: "A",
      },
      {
        id: 6,
        prompt: "Which sentence correctly explains a reason?",
        options: [
          {
            key: "A",
            text: "Masaya ako dahil nakapasa ako.",
          },
          {
            key: "B",
            text: "Bunga nito dahil ako.",
          },
          {
            key: "C",
            text: "Halimbawa ako sa pagsusulit.",
          },
          {
            key: "D",
            text: "Samakatuwid dahil masaya.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 7,
        prompt: "What is the purpose of samakatuwid?",
        options: [
          {
            key: "A",
            text: "To introduce a greeting",
          },
          {
            key: "B",
            text: "To introduce a conclusion",
          },
          {
            key: "C",
            text: "To ask a question",
          },
          {
            key: "D",
            text: "To describe an object",
          },
        ],
        answerKey: "B",
      },
      {
        id: 8,
        prompt: "Which expression introduces an example?",
        options: [
          {
            key: "A",
            text: "Halimbawa",
          },
          {
            key: "B",
            text: "Dahil",
          },
          {
            key: "C",
            text: "Samakatuwid",
          },
          {
            key: "D",
            text: "Kaya",
          },
        ],
        answerKey: "A",
      },
      {
        id: 9,
        prompt: "What does sanhi commonly mean?",
        options: [
          {
            key: "A",
            text: "Cause",
          },
          {
            key: "B",
            text: "Opinion",
          },
          {
            key: "C",
            text: "Feeling",
          },
          {
            key: "D",
            text: "Description",
          },
        ],
        answerKey: "A",
      },
      {
        id: 10,
        prompt: "Which sentence uses dahil sa appropriately?",
        options: [
          {
            key: "A",
            text: "Hindi kami natuloy dahil sa malakas na ulan.",
          },
          {
            key: "B",
            text: "Hindi kami natuloy dahil sa umulan.",
          },
          {
            key: "C",
            text: "Hindi kami dahil sa natuloy.",
          },
          {
            key: "D",
            text: "Dahil sa kami ay umulan.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 11,
        prompt: "Which expression is used to explain a process in sequence?",
        options: [
          {
            key: "A",
            text: "Una",
          },
          {
            key: "B",
            text: "Marahil",
          },
          {
            key: "C",
            text: "Malungkot",
          },
          {
            key: "D",
            text: "Sang-ayon",
          },
        ],
        answerKey: "A",
      },
      {
        id: 12,
        prompt: "Which sentence introduces a result?",
        options: [
          {
            key: "A",
            text: "Bunga nito, naging mas maayos ang proseso.",
          },
          {
            key: "B",
            text: "Halimbawa, may mga estudyante.",
          },
          {
            key: "C",
            text: "Dahil pagod ako.",
          },
          {
            key: "D",
            text: "Sa palagay ko, maganda ito.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 13,
        prompt: "Which statement is an appropriate clarification?",
        options: [
          {
            key: "A",
            text: "Ang ibig kong sabihin ay kailangan nating suriin ang impormasyon.",
          },
          {
            key: "B",
            text: "Hindi ko na sasabihin.",
          },
          {
            key: "C",
            text: "Mali ang lahat ng sinabi mo.",
          },
          {
            key: "D",
            text: "Wala akong pakialam.",
          },
        ],
        answerKey: "A",
      },
      {
        id: 14,
        prompt: "Which is the best order for explaining a process?",
        options: [
          {
            key: "A",
            text: "Conclusion, example, first step, main idea.",
          },
          {
            key: "B",
            text: "First step, next step, following step, final step.",
          },
          {
            key: "C",
            text: "Random steps without sequence.",
          },
          {
            key: "D",
            text: "Example, unrelated opinion, greeting, conclusion.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 15,
        prompt: "What makes an explanation effective?",
        options: [
          {
            key: "A",
            text: "Using complicated words without context.",
          },
          {
            key: "B",
            text: "Giving only a conclusion.",
          },
          {
            key: "C",
            text: "Presenting a clear idea, supporting reasons, examples, and logical organization.",
          },
          {
            key: "D",
            text: "Repeating the same sentence several times.",
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
        "Dahilan",
        "Bunga nito",
        "Paliwanag",
        "Samakatuwid",
        "Halimbawa",
      ],
      choices: [
        "Choices",
        "As a result",
        "Explanation",
        "Reason",
        "Therefore",
        "For example",
      ],
    },
    {
      title: "Identify the Function",
      kind: "choice",
      instructions: "Identify whether each expression is used for Reason, Result, Example, Clarification, or Conclusion.",
      items: [
        "Dahil",
        "Bunga nito",
        "Halimbawa",
        "Sa madaling salita",
        "Samakatuwid",
        "Sapagkat",
        "Bilang halimbawa",
        "Kaya naman",
      ],
    },
    {
      title: "Complete the Sentences",
      kind: "fill",
      instructions: "Choose the appropriate expression from the word bank.",
      items: [
        "Hindi kami nakapunta sa parke __________ umulan nang malakas.",
        "Maaga silang naghanda. __________, naging maayos ang programa.",
        "Maraming paraan upang matuto ng wika. __________, maaaring makinig sa mga kuwentong pasalita.",
        "Mahalaga ang wastong paggamit ng teknolohiya. __________, dapat itong gamitin nang responsable.",
        "Una, basahin ang panuto. __________, sagutan ang mga tanong.",
      ],
      choices: [
        "dahil",
        "bunga nito",
        "halimbawa",
        "samakatuwid",
        "pagkatapos",
      ],
    },
    {
      title: "Choose the Correct Explanation",
      kind: "rewrite",
      items: [
        "Why do people use the expression dahil? A. To introduce a reason. B. To introduce a greeting. C. To describe someone's appearance. D. To ask for directions.",
        "Which expression introduces a result? A. Halimbawa B. Bunga nito C. Dahil D. Una",
        "Which expression is used to clarify an idea? A. Sa madaling salita B. Sa huli C. Dahil D. Susunod",
        "Which expression is generally more formal when introducing a reason? A. Siyempre B. Sapagkat C. Naku D. Ayos lang",
        "Which expression introduces a conclusion? A. Halimbawa B. Samakatuwid C. Dahil D. Gaya ng",
      ],
    },
    {
      title: "Arrange the Words",
      kind: "arrange",
      instructions: "Arrange the words to form a complete Filipino sentence.",
      items: [
        "dahil / ako / nag-aral / nakapasa / mabuti",
        "nito / bunga / naging / maayos / ang / programa",
        "mahalaga / edukasyon / sapagkat / kaalaman / nagbibigay / ito / ng",
        "salita / madaling / sa / ibig / sabihin / nito",
        "teknolohiya / makatutulong / sa / pag-aaral / halimbawa / ang",
      ],
    },
    {
      title: "Translate into Filipino",
      kind: "translate",
      instructions: "Translate the following sentences into Filipino.",
      items: [
        "I passed the examination because I studied hard.",
        "As a result, the activity became successful.",
        "For example, students can use technology to learn.",
        "In other words, we need to work together.",
        "Therefore, protecting local languages is important.",
      ],
    },
    {
      title: "Explanation Writing Challenge",
      kind: "open",
      instructions: "Choose ONE topic and write an explanatory paragraph in Filipino.\nTopics:",
      items: [
        "Why is education important?",
        "Why should people protect the environment?",
        "How does technology help students learn?",
        "Why is teamwork important in completing a project?",
        "Why should local Philippine languages be preserved?",
      ],
      note: "Requirements:\n• Write at least 8–10 complete Filipino sentences.\n• Introduce the main idea clearly.\n• Provide at least three reasons or supporting details.\n• Include at least one example.\n• Use at least four transitional expressions from this lesson.\n• Include a conclusion.\n• Make sure your ideas follow a logical sequence.",
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
      name: "Clear Explainer Badge",
    },
    completionRequirement: "Finish the vocabulary and lesson proper sections. Complete the guided conversation activities. Complete the required practice exercises. Obtain at least 70% in the lesson assessment.",
  },
  expectedOutcomes: [
    "Advanced Level Progress: Lesson 22 of 30.",
    "Learners should now be more capable of providing clear explanations in everyday conversations, academic discussions, and practical communication situations.",
  ],
};
