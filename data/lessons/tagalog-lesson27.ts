import { StructuredLesson } from "../../types/structuredLesson";

// Tagalog Lesson 27 — imported from "Lesson Plan.pdf", pages 534–556.
// The Tagalog and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.

export const tagalogLesson27: StructuredLesson = {
  lessonId: "tagalog_27",
  dialect: "tagalog",
  dialectLabel: "Tagalog",
  lessonNumber: 27,
  title: "Workplace and School Conversations",
  level: "Advanced",
  unit: "Unit 3 – Real-Life Communication",
  estimatedDuration: "50–60 minutes",
  prerequisite: "Lessons 1–26",
  intro: [
    "Communication in school and the workplace requires more than knowing vocabulary and forming sentences. Learners must also understand how to adjust their language depending on the person they are speaking to and the situation they are in.",
    "In this lesson, learners will practice professional and academic conversations, including asking teachers for clarification, coordinating group projects, providing progress updates, participating in discussions, and expressing concerns respectfully.",
    "They will also learn the difference between formal, polite, and casual expressions in Filipino.",
    "Why Is Professional Communication Important?",
    "People communicate differently depending on their environment. The way someone talks with friends may not be appropriate when speaking with a teacher, supervisor, or someone they have just met.",
    "For example:",
    "Talking to a friend:",
    "\"Uy, tulungan mo naman ako rito.\"",
    "Talking to a teacher:",
    "\"Ma'am, maaari po ba akong humingi ng tulong tungkol dito?\"",
    "Both expressions communicate a request for assistance, but the second is more appropriate in a formal academic setting.",
    "In Filipino, politeness can be expressed through word choice, sentence construction, tone, and expressions such as po and opo.",
    "However, professional communication does not always need to sound extremely formal. The appropriate language depends on the relationship between the speakers, the environment, and the purpose of the conversation.",
    "Situations Covered in This Lesson",
    "• Speaking with teachers and instructors.",
    "• Coordinating school assignments and group projects.",
    "• Participating in classroom discussions.",
    "• Communicating with supervisors and colleagues.",
    "• Giving project or task updates.",
    "• Asking for clarification.",
    "• Expressing concerns and suggesting solutions.",
    "• Discussing deadlines and responsibilities.",
  ],
  objectivesIntro: "At the end of this lesson, learners should be able to:",
  objectives: [
    "Identify common Filipino vocabulary and expressions used in academic and professional environments.",
    "Distinguish between formal, polite, and informal communication.",
    "Ask questions and request assistance appropriately.",
    "Provide updates about assignments, projects, and workplace responsibilities.",
    "Express opinions, suggestions, and concerns respectfully.",
    "Participate in school and workplace discussions.",
    "Construct appropriate responses in different academic and professional situations.",
  ],
  expressionGroups: [
    {
      title: "A. Academic Vocabulary",
      items: [
        {
          term: "Paaralan",
          meaning: "School",
          usage: "Example: Malapit ang paaralan namin sa palengke.",
        },
        {
          term: "Guro",
          meaning: "Teacher",
          usage: "Example: Mabait ang aming guro.",
        },
        {
          term: "Mag-aaral",
          meaning: "Student",
          usage: "Example: Masipag siyang mag-aaral.",
        },
        {
          term: "Klase",
          meaning: "Class",
          usage: "Example: Magsisimula na ang klase.",
        },
        {
          term: "Aralin",
          meaning: "Lesson",
          usage: "Example: Mahirap ang aralin ngayon.",
        },
        {
          term: "Takdang-aralin",
          meaning: "Assignment/Homework",
          usage: "Example: Kailangan kong tapusin ang takdang-aralin.",
        },
        {
          term: "Pagsusulit",
          meaning: "Examination/Quiz",
          usage: "Example: May pagsusulit kami bukas.",
        },
        {
          term: "Proyekto",
          meaning: "Project",
          usage: "Example: Malapit na naming matapos ang proyekto.",
        },
        {
          term: "Pangkat",
          meaning: "Group",
          usage: "Example: Ako ang pinuno ng aming pangkat.",
        },
        {
          term: "Talakayan",
          meaning: "Discussion",
          usage: "Example: Makikilahok ako sa talakayan.",
        },
        {
          term: "Pananaliksik",
          meaning: "Research",
          usage: "Example: Gumagawa kami ng pananaliksik.",
        },
        {
          term: "Presentasyon",
          meaning: "Presentation",
          usage: "Example: Bukas ang aming presentasyon.",
        },
      ],
    },
    {
      title: "B. Workplace Vocabulary",
      items: [
        {
          term: "Trabaho",
          meaning: "Work/Job",
          usage: "Example: Marami akong trabaho ngayon.",
        },
        {
          term: "Opisina",
          meaning: "Office",
          usage: "Example: Nasa opisina ang aking superbisor.",
        },
        {
          term: "Kawani",
          meaning: "Employee/Staff member",
          usage: "Example: Nagtatrabaho siya bilang kawani.",
        },
        {
          term: "Tagapamahala",
          meaning: "Manager/Supervisor",
          usage: "Example: Kinausap ako ng tagapamahala.",
        },
        {
          term: "Kasamahan",
          meaning: "Colleague/Co-worker",
          usage: "Example: Tutulong ang aking mga kasamahan.",
        },
        {
          term: "Pulong",
          meaning: "Meeting",
          usage: "Example: May pulong kami mamayang hapon.",
        },
        {
          term: "Tungkulin",
          meaning: "Responsibility/Duty",
          usage: "Example: Alam ko ang aking mga tungkulin.",
        },
        {
          term: "Takdang-oras",
          meaning: "Deadline",
          usage: "Example: Malapit na ang takdang-oras ng proyekto.",
        },
        {
          term: "Ulat",
          meaning: "Report",
          usage: "Example: Isusumite ko ang aking ulat.",
        },
        {
          term: "Gawain",
          meaning: "Task/Activity",
          usage: "Example: Natapos ko na ang aking gawain.",
        },
        {
          term: "Pag-unlad",
          meaning: "Progress/Development",
          usage: "Example: Maganda ang pag-unlad ng proyekto.",
        },
        {
          term: "Panukala",
          meaning: "Proposal/Suggestion",
          usage: "Example: May panukala akong nais ibahagi.",
        },
      ],
    },
    {
      title: "C. Polite and Professional Expressions",
      items: [
        {
          term: "Maaari po ba akong magtanong?",
          meaning: "May I ask a question?",
          usage: "Purpose: Asking permission",
        },
        {
          term: "Maaari po ba akong humingi ng tulong?",
          meaning: "May I ask for assistance?",
          usage: "Purpose: Requesting help",
        },
        {
          term: "Nais ko pong linawin ang isang bagay.",
          meaning: "I would like to clarify something.",
          usage: "Purpose: Clarification",
        },
        {
          term: "Paumanhin po sa abala.",
          meaning: "I apologize for the inconvenience.",
          usage: "Purpose: Apologizing",
        },
        {
          term: "Salamat po sa inyong paglilinaw.",
          meaning: "Thank you for your clarification.",
          usage: "Purpose: Expressing gratitude",
        },
        {
          term: "Nais ko pong ipaalam na...",
          meaning: "I would like to inform you that...",
          usage: "Purpose: Giving information",
        },
        {
          term: "Kaugnay nito...",
          meaning: "In connection with this...",
          usage: "Purpose: Connecting ideas",
        },
        {
          term: "Ayon sa aming napag-usapan...",
          meaning: "According to what we discussed...",
          usage: "Purpose: Referring to an agreement",
        },
        {
          term: "Sa aking palagay...",
          meaning: "In my opinion...",
          usage: "Purpose: Expressing an opinion",
        },
        {
          term: "Maaari nating isaalang-alang...",
          meaning: "We may consider...",
          usage: "Purpose: Suggesting an option",
        },
        {
          term: "Sang-ayon po ako.",
          meaning: "I agree.",
          usage: "Purpose: Expressing agreement",
        },
        {
          term: "Nauunawaan ko po.",
          meaning: "I understand.",
          usage: "Purpose: Acknowledging information",
        },
        {
          term: "Maaari po bang ulitin ninyo?",
          meaning: "Could you repeat that?",
          usage: "Purpose: Asking for repetition",
        },
        {
          term: "Maraming salamat po sa inyong oras.",
          meaning: "Thank you very much for your time.",
          usage: "Purpose: Ending a formal conversation",
        },
      ],
    },
    {
      title: "D. Expressions for Updates and Responsibilities",
      items: [
        {
          term: "Kasalukuyan ko pong ginagawa ang gawain.",
          meaning: "I am currently working on the task.",
        },
        {
          term: "Natapos ko na po ang unang bahagi.",
          meaning: "I have finished the first part.",
        },
        {
          term: "Hindi ko pa po natatapos ang ulat.",
          meaning: "I have not finished the report yet.",
        },
        {
          term: "May ilang bahagi pa pong kailangang baguhin.",
          meaning: "There are still some parts that need to be revised.",
        },
        {
          term: "Nais ko pong humingi ng karagdagang oras.",
          meaning: "I would like to request additional time.",
        },
        {
          term: "Natukoy na po namin ang problema.",
          meaning: "We have already identified the problem.",
        },
        {
          term: "May mungkahi po akong solusyon.",
          meaning: "I have a suggested solution.",
        },
        {
          term: "Ipapasa ko po ito bago ang takdang-oras.",
          meaning: "I will submit this before the deadline.",
        },
      ],
    },
    {
      title: "E. Useful Verbs",
      items: [
        {
          term: "Magpaliwanag",
          meaning: "To explain",
        },
        {
          term: "Magtanong",
          meaning: "To ask",
        },
        {
          term: "Magmungkahi",
          meaning: "To suggest",
        },
        {
          term: "Makilahok",
          meaning: "To participate",
        },
        {
          term: "Mag-ulat",
          meaning: "To report",
        },
        {
          term: "Magsumite",
          meaning: "To submit",
        },
        {
          term: "Magplano",
          meaning: "To plan",
        },
        {
          term: "Magtalaga",
          meaning: "To assign",
        },
        {
          term: "Magtulungan",
          meaning: "To cooperate",
        },
        {
          term: "Magrebisa",
          meaning: "To revise",
        },
        {
          term: "Magpulong",
          meaning: "To hold a meeting",
        },
        {
          term: "Magpaalam",
          meaning: "To inform or ask permission, depending on context",
        },
        {
          term: "Maglinaw",
          meaning: "To clarify",
        },
        {
          term: "Mag-ayos",
          meaning: "To fix or arrange",
        },
      ],
    },
  ],
  languageNotes: [
    {
      title: "A. Understanding Formal, Polite, and Informal Language",
      body: [
        "Filipino communication changes depending on the situation and the relationship between speakers.",
        "• Informal Communication",
        "Informal language is commonly used when speaking with friends, close classmates, or people you know well.",
        "• \"May tanong ako.\"",
        "• \"Tapos mo na ba?\"",
        "• \"Tulungan mo ako rito.\"",
        "• \"Ano ang plano natin?\"",
        "These expressions are suitable for casual conversations but may need adjustment when speaking with teachers or supervisors.",
        "• Polite Communication",
        "Polite expressions show consideration and respect toward another person.",
        "• \"May tanong po ako.\"",
        "• \"Natapos na po ba ninyo?\"",
        "• \"Maaari po ba akong humingi ng tulong?\"",
        "• \"Ano po ang susunod nating gagawin?\"",
        "The use of po and opo is common when speaking respectfully, especially with elders, teachers, and people in positions of authority.",
        "• Formal Communication",
        "Formal language is commonly used in official discussions, professional correspondence, presentations, and institutional settings.",
        "• \"Nais ko pong humingi ng karagdagang impormasyon tungkol sa proyektong ito.\"",
        "• \"Ipinababatid ko po na natapos na ang unang yugto ng gawain.\"",
        "• \"Nais ko pong ipahayag ang aking saloobin tungkol sa panukala.\"",
        "Formal expressions should still sound natural and clear. Using unnecessarily complicated words does not automatically make communication more professional.",
      ],
    },
    {
      title: "B. Asking for Clarification",
      body: [
        "Sometimes instructions or explanations are unclear. Instead of pretending to understand, learners should ask questions politely.",
        "Useful expressions:",
        "• \"Maaari po ba ninyong ipaliwanag muli?\"",
        "• \"Nais ko pong linawin ang bahaging ito.\"",
        "• \"Tama po ba ang pagkaunawa ko?\"",
        "• \"Maaari po ba kayong magbigay ng halimbawa?\"",
        "• \"Aling bahagi po ang dapat kong unahin?\"",
        "Teacher: \"Siguraduhin ninyong maisasama ang lahat ng kinakailangang impormasyon sa inyong pananaliksik.\"",
        "Student: \"Ma'am, nais ko pong linawin kung kailangan din naming isama ang mga resulta ng aming panayam.\"",
        "Teacher: \"Oo. Isama ninyo ang mga resulta ng panayam at ang inyong pagsusuri.\"",
        "Student: \"Nauunawaan ko na po. Maraming salamat po.\"",
      ],
    },
    {
      title: "C. Giving Progress Updates",
      body: [
        "In school and professional environments, people are often expected to report the status of their assigned tasks.",
        "A useful progress update usually includes:",
        "• The task being completed.",
        "• The current progress.",
        "• Any problems encountered.",
        "• The next action or expected completion.",
        "\"Natapos ko na po ang unang bahagi ng ulat. Kasalukuyan ko pong inaayos ang ikalawang bahagi. May ilang datos pa po akong kailangang beripikahin bago ko ito maisumite.\"",
        "English:",
        "\"I have finished the first part of the report. I am currently working on the second part. There are still some data that I need to verify before submitting it.\"",
      ],
    },
    {
      title: "D. Participating in Discussions and Meetings",
      body: [
        "When participating in a classroom discussion or workplace meeting, learners should know how to:",
        "• Share their opinions.",
        "• Agree or disagree respectfully.",
        "• Ask questions.",
        "• Present suggestions.",
        "• Respond to other people's ideas.",
        "Useful expressions:",
        "Sharing an opinion",
        "• \"Sa aking palagay...\"",
        "• \"Batay sa aking pagkaunawa...\"",
        "• \"Naniniwala akong...\"",
        "Agreeing",
        "• \"Sang-ayon ako sa mungkahing iyan.\"",
        "• \"Maganda ang inyong punto.\"",
        "• \"Sumasang-ayon ako sa inyong paliwanag.\"",
        "Disagreeing respectfully",
        "• \"Nauunawaan ko ang inyong punto, ngunit may iba akong pananaw.\"",
        "• \"May bahagi po akong nais linawin.\"",
        "• \"Maaari rin nating isaalang-alang ang ibang paraan.\"",
        "Making suggestions",
        "• \"Maaari nating subukan ang paraang ito.\"",
        "• \"Iminumungkahi kong baguhin natin ang iskedyul.\"",
        "• \"Mas magiging maayos siguro kung hahatiin natin ang mga gawain.\"",
      ],
    },
    {
      title: "E. Expressing Concerns Professionally",
      body: [
        "There may be situations when learners encounter problems, misunderstandings, or difficulties with their responsibilities.",
        "Instead of expressing frustration aggressively, they should explain the concern clearly and suggest a possible solution.",
        "Less appropriate: \"Hindi ko matatapos iyan dahil napakarami ninyong ipinagawa.\"",
        "More appropriate: \"May ilang gawain pa po akong kailangang tapusin. Maaari po ba nating pag-usapan kung alin ang dapat unahin upang matapos ko ang mga ito sa takdang-oras?\"",
        "The second expression communicates the problem while maintaining a respectful tone.",
      ],
    },
    {
      title: "F. Discussing Schedules and Deadlines",
      body: [
        "Useful expressions:",
        "• \"Kailan po ang takdang-oras ng pagsusumite?\"",
        "• \"Maaari po ba nating baguhin ang iskedyul?\"",
        "• \"Anong oras magsisimula ang pulong?\"",
        "• \"Handa na po ba ang lahat para sa presentasyon?\"",
        "• \"Maaari po ba akong humingi ng karagdagang oras?\"",
        "\"Kung maaari, nais ko pong humingi ng isang araw na karagdagang oras upang masuri ko nang mabuti ang ulat bago ito isumite.\"",
      ],
    },
    {
      title: "Lesson Summary",
      body: [
        "In this lesson, learners explored how Filipino is used in academic and professional environments. They learned vocabulary related to school, work, meetings, responsibilities, and deadlines.",
        "They also practiced formal and polite expressions, asking for assistance, giving updates, participating in discussions, and expressing concerns respectfully.",
        "Key Takeaway:",
        "Effective communication is not only about choosing the correct words. It is also about understanding the situation, respecting the people involved, and expressing ideas clearly and appropriately.",
      ],
    },
  ],
  conversations: [
    {
      title: "Dialogue 1: Asking a Teacher for Clarification",
      lines: [
        {
          speaker: "Student",
          text: "Magandang umaga po, Ma'am.",
        },
        {
          speaker: "Teacher",
          text: "Magandang umaga rin. Ano ang maitutulong ko sa iyo?",
        },
        {
          speaker: "Student",
          text: "Nais ko po sanang linawin ang mga panuto para sa aming takdang-aralin.",
        },
        {
          speaker: "Teacher",
          text: "Aling bahagi ang hindi mo naunawaan?",
        },
        {
          speaker: "Student",
          text: "Hindi ko po lubos na nauunawaan kung kailangan naming magsumite ng nakasulat na ulat kasama ng presentasyon.",
        },
        {
          speaker: "Teacher",
          text: "Oo. Kailangan ninyong magsumite ng ulat at maghanda ng presentasyon.",
        },
        {
          speaker: "Student",
          text: "Nauunawaan ko na po. Maraming salamat po sa paglilinaw.",
        },
        {
          speaker: "Teacher",
          text: "Walang anuman. Kung may iba ka pang tanong, maaari kang magtanong.",
        },
      ],
    },
    {
      title: "Dialogue 2: Coordinating a Group Project",
      lines: [
        {
          speaker: "Ana",
          text: "Kumusta na ang ating proyekto? Malapit na ang takdang-oras ng pagsusumite.",
        },
        {
          speaker: "Mark",
          text: "Natapos ko na ang aking bahagi tungkol sa pananaliksik. Ipinadala ko na rin ito sa ating pangkat.",
        },
        {
          speaker: "Ana",
          text: "Mabuti naman. Paano naman ang bahagi ng presentasyon?",
        },
        {
          speaker: "Mark",
          text: "Hindi pa iyon tapos. Sa palagay ko, kailangan nating magpulong upang mapag-usapan ang pagkakasunod-sunod ng mga paksa.",
        },
        {
          speaker: "Ana",
          text: "Sang-ayon ako. Maaari ba tayong magpulong bukas ng hapon?",
        },
        {
          speaker: "Mark",
          text: "Oo. Ipaalam natin sa iba nating mga kasapi.",
        },
        {
          speaker: "Ana",
          text: "Sige. Sisiguraduhin kong makadadalo ang lahat.",
        },
      ],
    },
    {
      title: "Dialogue 3: Giving a Workplace Progress Update",
      lines: [
        {
          speaker: "Supervisor",
          text: "Kumusta na ang ulat na ipinagawa ko sa iyo?",
        },
        {
          speaker: "Employee",
          text: "Magandang umaga po. Natapos ko na po ang unang dalawang bahagi ng ulat.",
        },
        {
          speaker: "Supervisor",
          text: "Kumpleto na ba ang mga datos?",
        },
        {
          speaker: "Employee",
          text: "Karamihan po ay kumpleto na. May ilang impormasyon pa po akong kailangang beripikahin.",
        },
        {
          speaker: "Supervisor",
          text: "Kailan mo inaasahang matatapos?",
        },
        {
          speaker: "Employee",
          text: "Kung walang magiging problema, maipapasa ko po ito bukas ng umaga.",
        },
        {
          speaker: "Supervisor",
          text: "Mabuti. Ipaalam mo sa akin kung may kailangan kang tulong.",
        },
        {
          speaker: "Employee",
          text: "Opo. Maraming salamat po.",
        },
      ],
    },
    {
      title: "Dialogue 4: Raising a Concern During a Meeting",
      lines: [
        {
          speaker: "Manager",
          text: "May iba pa ba kayong mungkahi tungkol sa iskedyul ng proyekto?",
        },
        {
          speaker: "Employee 1",
          text: "May nais po sana akong imungkahi.",
        },
        {
          speaker: "Manager",
          text: "Sige. Ano iyon?",
        },
        {
          speaker: "Employee 1",
          text: "Sa aking palagay, mas magiging maayos kung hahatiin natin ang unang yugto ng proyekto sa dalawang bahagi.",
        },
        {
          speaker: "Employee 2",
          text: "Nauunawaan ko ang mungkahi mo, ngunit maaaring madagdagan ang oras na kakailanganin natin.",
        },
        {
          speaker: "Employee 1",
          text: "Tama ka. Gayunpaman, makatutulong ito upang masuri natin ang bawat bahagi bago magpatuloy.",
        },
        {
          speaker: "Manager",
          text: "Magandang punto. Pag-aralan natin ang mungkahing iyan bago gumawa ng pinal na desisyon.",
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
        prompt: "What is the Filipino word for \"meeting\"?",
        options: [
          {
            key: "A",
            text: "Ulat",
          },
          {
            key: "B",
            text: "Pulong",
          },
          {
            key: "C",
            text: "Gawain",
          },
          {
            key: "D",
            text: "Takdang-aralin",
          },
        ],
        answerKey: "B",
        title: "Part A: Vocabulary and Expressions",
      },
      {
        id: 2,
        prompt: "What does \"takdang-oras\" mean?",
        options: [
          {
            key: "A",
            text: "Schedule or deadline",
          },
          {
            key: "B",
            text: "Employee",
          },
          {
            key: "C",
            text: "Classroom",
          },
          {
            key: "D",
            text: "Discussion",
          },
        ],
        answerKey: "A",
        title: "Part A: Vocabulary and Expressions",
      },
      {
        id: 3,
        prompt: "Which expression means \"I would like to clarify something\"?",
        options: [
          {
            key: "A",
            text: "Sang-ayon ako.",
          },
          {
            key: "B",
            text: "Nais ko pong linawin ang isang bagay.",
          },
          {
            key: "C",
            text: "Maraming salamat po.",
          },
          {
            key: "D",
            text: "Magandang umaga.",
          },
        ],
        answerKey: "B",
        title: "Part A: Vocabulary and Expressions",
      },
      {
        id: 4,
        prompt: "What is the meaning of \"panukala\"?",
        options: [
          {
            key: "A",
            text: "Assignment",
          },
          {
            key: "B",
            text: "Suggestion or proposal",
          },
          {
            key: "C",
            text: "Report",
          },
          {
            key: "D",
            text: "Responsibility",
          },
        ],
        answerKey: "B",
        title: "Part A: Vocabulary and Expressions",
      },
      {
        id: 5,
        prompt: "Which word refers to a colleague or co-worker?",
        options: [
          {
            key: "A",
            text: "Guro",
          },
          {
            key: "B",
            text: "Mag-aaral",
          },
          {
            key: "C",
            text: "Kasamahan",
          },
          {
            key: "D",
            text: "Tagapamahala",
          },
        ],
        answerKey: "C",
        title: "Part A: Vocabulary and Expressions",
      },
      {
        id: 6,
        prompt: "You want to ask your instructor to repeat an explanation. What should you say?",
        options: [
          {
            key: "A",
            text: "Ulitin mo nga.",
          },
          {
            key: "B",
            text: "Hindi ko narinig.",
          },
          {
            key: "C",
            text: "Maaari po bang ulitin ninyo?",
          },
          {
            key: "D",
            text: "Bahala na po.",
          },
        ],
        answerKey: "C",
        title: "Part B: Appropriate Communication",
      },
      {
        id: 7,
        prompt: "Which expression is appropriate when giving a professional progress update?",
        options: [
          {
            key: "A",
            text: "Wala pa akong nagagawa.",
          },
          {
            key: "B",
            text: "Natapos ko na po ang unang bahagi ng gawain.",
          },
          {
            key: "C",
            text: "Hindi ko alam kung ano ang gagawin.",
          },
          {
            key: "D",
            text: "Mamaya na lang.",
          },
        ],
        answerKey: "B",
        title: "Part B: Appropriate Communication",
      },
      {
        id: 8,
        prompt: "Which expression respectfully introduces a suggestion?",
        options: [
          {
            key: "A",
            text: "Mali ang ginagawa ninyo.",
          },
          {
            key: "B",
            text: "Ayoko niyan.",
          },
          {
            key: "C",
            text: "Maaari nating isaalang-alang ang ibang paraan.",
          },
          {
            key: "D",
            text: "Hindi iyan gagana.",
          },
        ],
        answerKey: "C",
        title: "Part B: Appropriate Communication",
      },
      {
        id: 9,
        prompt: "What should you do if you do not understand an instruction?",
        options: [
          {
            key: "A",
            text: "Ignore the instruction.",
          },
          {
            key: "B",
            text: "Pretend that you understand.",
          },
          {
            key: "C",
            text: "Ask for clarification politely.",
          },
          {
            key: "D",
            text: "Blame the person explaining it.",
          },
        ],
        answerKey: "C",
        title: "Part B: Appropriate Communication",
      },
      {
        id: 10,
        prompt: "Which expression is commonly used to show agreement?",
        options: [
          {
            key: "A",
            text: "Hindi ako kumbinsido.",
          },
          {
            key: "B",
            text: "Sang-ayon ako sa mungkahing iyan.",
          },
          {
            key: "C",
            text: "Hindi ko nauunawaan.",
          },
          {
            key: "D",
            text: "Paumanhin po.",
          },
        ],
        answerKey: "B",
        title: "Part B: Appropriate Communication",
      },
      {
        id: 11,
        prompt: "Your supervisor asks about your progress. You have completed half of your assigned task.\nWhich response is most appropriate?",
        options: [
          {
            key: "A",
            text: "\"Hindi pa tapos. Mamaya na.\"",
          },
          {
            key: "B",
            text: "\"Kalahati na po ng gawain ang natapos ko. Ipinagpapatuloy ko na po ang natitirang bahagi.\"",
          },
          {
            key: "C",
            text: "\"Bahala na po.\"",
          },
          {
            key: "D",
            text: "\"Hindi ko alam.\"",
          },
        ],
        answerKey: "B",
        title: "Part C: Application",
      },
      {
        id: 12,
        prompt: "During a meeting, you disagree with a suggestion. Which response is most appropriate?",
        options: [
          {
            key: "A",
            text: "\"Mali ang sinabi mo.\"",
          },
          {
            key: "B",
            text: "\"Walang saysay ang mungkahi mo.\"",
          },
          {
            key: "C",
            text: "\"Nauunawaan ko ang inyong punto, ngunit may iba akong pananaw.\"",
          },
          {
            key: "D",
            text: "\"Ayoko niyan.\"",
          },
        ],
        answerKey: "C",
        title: "Part C: Application",
      },
      {
        id: 13,
        prompt: "You need additional time to finish an assignment. What should you do?",
        options: [
          {
            key: "A",
            text: "Request additional time and explain your reason respectfully.",
          },
          {
            key: "B",
            text: "Ignore the deadline.",
          },
          {
            key: "C",
            text: "Submit incomplete work without explanation.",
          },
          {
            key: "D",
            text: "Refuse to complete the assignment.",
          },
        ],
        answerKey: "A",
        title: "Part C: Application",
      },
      {
        id: 14,
        prompt: "Which statement is most appropriate when ending a formal conversation?",
        options: [
          {
            key: "A",
            text: "\"Sige, alis na ako.\"",
          },
          {
            key: "B",
            text: "\"Bahala na kayo.\"",
          },
          {
            key: "C",
            text: "\"Maraming salamat po sa inyong oras.\"",
          },
          {
            key: "D",
            text: "\"Tama na iyan.\"",
          },
        ],
        answerKey: "C",
        title: "Part C: Application",
      },
      {
        id: 15,
        prompt: "Why is it important to adjust your language in academic and professional environments?",
        options: [
          {
            key: "A",
            text: "To use complicated words in every conversation.",
          },
          {
            key: "B",
            text: "To avoid communicating with other people.",
          },
          {
            key: "C",
            text: "To communicate respectfully and appropriately depending on the situation.",
          },
          {
            key: "D",
            text: "To make every conversation sound exactly the same.",
          },
        ],
        answerKey: "C",
        title: "Part C: Application",
      },
    ],
  },
  extraActivities: [
    {
      title: "Identify the Appropriate Expression",
      kind: "choice",
      instructions: "Choose the most appropriate expression for each situation.",
      items: [
        "You want to ask your teacher to explain an instruction again.\nA. Ulitin mo nga.\nB. Maaari po ba ninyong ipaliwanag muli?\nC. Hindi ko alam iyan.",
        "You are reporting your progress to your supervisor.\nA. Tapos na ako, okay?\nB. Wala akong ginawa.\nC. Natapos ko na po ang unang bahagi ng gawain.",
        "You want to suggest another approach during a meeting.\nA. Mali ang plano ninyo.\nB. Maaari rin nating isaalang-alang ang ibang paraan.\nC. Ayoko ng plano iyan.",
        "You want to thank someone for explaining an instruction.\nA. Salamat po sa inyong paglilinaw.\nB. Sige na.\nC. Bahala na.",
        "You need to ask about a submission deadline.\nA. Kailan ang deadline?\nB. Kailan po ang takdang-oras ng pagsusumite?\nC. Bakit kailangan iyan?",
      ],
    },
    {
      title: "Complete the Sentences",
      kind: "fill",
      instructions: "Fill in the blanks using the appropriate words or expressions.\nWord Bank:",
      items: [
        "mungkahi",
        "paglilinaw",
        "takdang-oras",
        "gawain",
        "pulong",
        "tulong",
        "ulat",
        "Maaari po ba akong humingi ng ______ tungkol sa proyektong ito?",
        "Malapit na ang ______ ng pagsusumite.",
        "May ______ po akong nais ibahagi sa ating pangkat.",
        "Natapos ko na ang aking ______ para sa araw na ito.",
        "Magkakaroon kami ng ______ bukas ng umaga.",
        "Maaari po ba akong humingi ng ______ sa bahaging ito?",
        "Isusumite ko na bukas ang aking ______.",
      ],
    },
    {
      title: "Choose the Appropriate Register",
      kind: "choice",
      instructions: "Identify whether each expression is informal, polite, or formal.",
      items: [
        "\"Uy, tapos mo na ba ang proyekto?\"",
        "\"Maaari po ba akong magtanong tungkol sa takdang-aralin?\"",
        "\"Nais ko pong ipabatid na natapos na ang unang yugto ng proyekto.\"",
        "\"Tulungan mo naman ako rito.\"",
        "\"Maraming salamat po sa inyong oras at paliwanag.\"",
      ],
    },
    {
      title: "Arrange the Conversation",
      kind: "roleplay",
      instructions: "Arrange the following statements in the correct order to create a natural conversation.\nA. \"Maraming salamat po sa inyong paglilinaw.\"\nB. \"Magandang umaga po, Sir. Maaari po ba akong magtanong?\"\nC. \"Sige. Ano ang nais mong malaman?\"\nD. \"Nais ko pong linawin ang takdang-oras ng aming proyekto.\"\nE. \"Ang pagsusumite ay sa susunod na Biyernes.\"",
      items: [],
    },
    {
      title: "Correct the Expression",
      kind: "rewrite",
      instructions: "Rewrite each statement to make it more appropriate for an academic or professional setting.",
      items: [
        "\"Hindi ko gets ang sinabi mo.\"",
        "\"Bigyan mo ako ng dagdag na oras.\"",
        "\"Mali ang ginawa ninyo.\"",
        "\"Hindi ko matatapos iyan.\"",
        "\"Ulitin mo nga ang sinabi mo.\"",
      ],
    },
    {
      title: "Role-Playing Activity",
      kind: "roleplay",
      instructions: "Choose one situation and create a short conversation using appropriate Filipino expressions.\nSituation A: Asking a Teacher for Help\nYou are having difficulty understanding an assignment. Approach your teacher and ask for clarification.\nSituation B: Group Project Coordination\nYou and your classmates need to divide responsibilities and agree on a schedule for your project.\nSituation C: Workplace Progress Report\nYour supervisor asks about the progress of an assigned task. Explain what you have completed and what remains unfinished.\nSituation D: Expressing a Concern\nDuring a meeting, you notice that the proposed schedule may not give everyone enough time to complete their responsibilities. Explain your concern and suggest an alternative.",
      items: [],
    },
    {
      title: "Professional Message Writing",
      kind: "open",
      instructions: "Write a short professional message in Filipino based on the following situation:\nYou are a student who needs to inform your instructor that you cannot submit your project today because you still need to verify some information. Politely explain the situation and request additional time.\nYour message should include:",
      items: [
        "A polite greeting.",
        "A brief explanation.",
        "A respectful request.",
        "A closing expression.",
      ],
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
        label: "Lesson Proper + Guided Conversations + Practice Activities",
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
      name: "Professional Communicator Badge",
    },
    completionRequirement: "Review the academic and workplace vocabulary. Understand the differences between informal, polite, and formal communication. Complete the guided conversation exercises. Finish the seven practice activities. Obtain at least 70% in the lesson assessment.",
  },
};
