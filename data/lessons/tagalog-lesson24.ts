import { StructuredLesson } from "../../types/structuredLesson";

// Tagalog Lesson 24 — imported from "Lesson Plan.pdf", pages 456–479.
// The Tagalog and English text is copied as written, including likely
// typos, which are listed in docs/import-issues.md. Activities without an
// answer key or a screen are in extraActivities.

export const tagalogLesson24: StructuredLesson = {
  lessonId: "tagalog_24",
  dialect: "tagalog",
  dialectLabel: "Tagalog",
  lessonNumber: 24,
  title: "Advanced Sentence Construction",
  level: "Advanced",
  unit: "Unit 2 – Language Development",
  estimatedDuration: "50–60 minutes",
  prerequisite: "Completion of Lessons 1–23",
  intro: [
    "In everyday conversations, simple sentences are often enough to communicate basic information. However, when explaining ideas, presenting arguments, writing reports, or telling detailed stories, we often need more complex sentences.",
    "Consider these examples:",
    "Simple sentences:",
    "• Nag-aral si Ana.",
    "• Nagsanay siya araw-araw.",
    "• Gumaling siya sa pagsasalita.",
    "Combined sentence:",
    "Nag-aral si Ana at nagsanay siya araw-araw kaya gumaling siya sa pagsasalita.",
    "The combined sentence communicates the relationship between Ana's actions and their result. Instead of presenting three separate statements, we connect them to create a more complete idea.",
    "In this lesson, you will learn how to construct more advanced Filipino sentences by combining ideas, expressing relationships between clauses, and organizing information clearly.",
    "Real-life applications:",
    "• Writing research papers and academic reports.",
    "• Explaining procedures and instructions.",
    "• Presenting opinions and supporting arguments.",
    "• Describing events and experiences.",
    "• Communicating complicated ideas in conversations.",
  ],
  objectivesIntro: "By the end of this lesson, learners should be able to:",
  objectives: [
    "Identify independent and dependent clauses in Filipino sentences.",
    "Distinguish compound sentences from complex sentences.",
    "Combine simple sentences using appropriate conjunctions and linking expressions.",
    "Construct sentences expressing conditions, contrast, concession, cause and effect, and purpose.",
    "Use relative clauses to provide additional information about people, places, and things.",
    "Maintain parallel structure when presenting related ideas.",
    "Organize complex sentences to improve clarity, coherence, and meaning.",
    "Adjust sentence construction according to formal and informal communication contexts.",
  ],
  expressionGroups: [
    {
      title: "Vocabulary and Important Expressions",
      intro: [
        "Additional terms:",
      ],
      items: [
        {
          term: "Bagaman",
          meaning: "Although",
          usage: "Usage: Introduces a contrasting or unexpected condition",
        },
        {
          term: "Kahit na",
          meaning: "Even though",
          usage: "Usage: Expresses concession",
        },
        {
          term: "Samantalang",
          meaning: "Whereas / While",
          usage: "Usage: Compares contrasting situations",
        },
        {
          term: "Habang",
          meaning: "While",
          usage: "Usage: Expresses simultaneous actions or conditions",
        },
        {
          term: "Upang",
          meaning: "In order to",
          usage: "Usage: Expresses purpose",
        },
        {
          term: "Maliban kung",
          meaning: "Unless",
          usage: "Usage: Expresses an exception or condition",
        },
        {
          term: "Sa kabila ng",
          meaning: "Despite",
          usage: "Usage: Introduces a contrasting circumstance",
        },
        {
          term: "Sa halip na",
          meaning: "Instead of",
          usage: "Usage: Expresses an alternative",
        },
        {
          term: "Bukod dito",
          meaning: "Furthermore",
          usage: "Usage: Adds information",
        },
        {
          term: "Samantala",
          meaning: "Meanwhile",
          usage: "Usage: Introduces another situation or point",
        },
        {
          term: "Dahil dito",
          meaning: "Because of this",
          usage: "Usage: Introduces a consequence",
        },
        {
          term: "Kung kaya",
          meaning: "Therefore / As a result",
          usage: "Usage: Introduces a result",
        },
        {
          term: "Hindi lamang... kundi... rin",
          meaning: "Not only... but also",
          usage: "Usage: Connects two related ideas",
        },
        {
          term: "Maging... o...",
          meaning: "Whether... or",
          usage: "Usage: Presents alternatives",
        },
        {
          term: "Gayunpaman",
          meaning: "Nevertheless",
          usage: "Usage: Introduces a contrasting point",
        },
        {
          term: "Sa madaling salita",
          meaning: "In other words",
          usage: "Usage: Restates an idea",
        },
        {
          term: "Pangungusap",
          meaning: "Sentence",
        },
        {
          term: "Sugnay",
          meaning: "Clause",
        },
        {
          term: "Sugnay na makapag-iisa",
          meaning: "Independent clause",
        },
        {
          term: "Sugnay na di-makapag-iisa",
          meaning: "Dependent clause",
        },
        {
          term: "Pangatnig",
          meaning: "Conjunction",
        },
        {
          term: "Panuring",
          meaning: "Modifier",
        },
        {
          term: "Diwa",
          meaning: "Thought or meaning",
        },
        {
          term: "Pagkakaugnay-ugnay",
          meaning: "Coherence or connection",
        },
        {
          term: "Sanhi",
          meaning: "Cause",
        },
        {
          term: "Bunga",
          meaning: "Effect or result",
        },
        {
          term: "Kondisyon",
          meaning: "Condition",
        },
        {
          term: "Paghahambing",
          meaning: "Comparison",
        },
      ],
    },
  ],
  languageNotes: [
    {
      title: "A. Understanding Clauses",
      body: [
        "A clause, or sugnay, is a group of words that contains a subject and a predicate or expresses a complete or incomplete thought.",
        "There are two important types of clauses:",
        "• Independent Clause (Sugnay na Makapag-iisa)",
        "An independent clause expresses a complete thought and can stand as a sentence.",
        "• Nag-aaral si Marco.",
        "• Dumating ang mga bisita.",
        "• Naghanda ang mga mag-aaral para sa pagsusulit.",
        "Each example communicates a complete idea.",
        "• Dependent Clause (Sugnay na Di-Makapag-iisa)",
        "A dependent clause does not express a complete thought on its own. It needs another clause to complete its meaning.",
        "• Dahil umuulan nang malakas...",
        "• Kung matatapos namin ang proyekto...",
        "• Bagaman pagod na siya...",
        "These expressions make the reader expect additional information.",
        "Combined examples:",
      ],
      table: {
        leftHeading: "",
        rightHeading: "",
        rows: [
          {
            left: "Dependent Clause",
            right: "Independent Clause · Complete Sentence",
          },
          {
            left: "Dahil umuulan nang malakas",
            right: "Hindi kami natuloy sa palengke · Dahil umuulan nang malakas, hindi kami natuloy sa palengke.",
          },
          {
            left: "Kung matatapos namin ang proyekto",
            right: "Ipapasa namin ito bukas · Kung matatapos namin ang proyekto, ipapasa namin ito bukas.",
          },
          {
            left: "Bagaman pagod na siya",
            right: "Tinapos pa rin niya ang gawain · Bagaman pagod na siya, tinapos pa rin niya ang gawain.",
          },
        ],
      },
      remember: "A dependent clause usually needs an independent clause to communicate a complete message.",
    },
    {
      title: "B. Compound Sentences",
      body: [
        "A compound sentence combines two or more independent clauses. Each clause can communicate a complete thought on its own.",
        "Common conjunctions include:",
      ],
      examples: [
        {
          text: "At",
          meaning: "And",
        },
        {
          text: "Ngunit",
          meaning: "But",
        },
        {
          text: "Subalit",
          meaning: "However / But",
        },
        {
          text: "O",
          meaning: "Or",
        },
      ],
    },
    {
      title: "B. Compound Sentences",
      body: [
        "• Nag-aral si Liza at naghanda siya para sa pagsusulit.",
        "• Gusto kong sumama, ngunit marami pa akong kailangang gawin.",
        "• Maaari kang magbasa ng aklat o manood ng dokumentaryo.",
        "• Natapos nila ang proyekto, subalit kailangan pa itong suriin.",
        "Sentence breakdown:",
        "Gusto kong sumama, ngunit marami pa akong kailangang gawin.",
        "• Independent clause 1: Gusto kong sumama.",
        "• Conjunction: Ngunit",
        "• Independent clause 2: Marami pa akong kailangang gawin.",
        "The conjunction ngunit connects two complete ideas that contrast with each other.",
      ],
    },
    {
      title: "C. Complex Sentences",
      body: [
        "A complex sentence contains an independent clause and at least one dependent clause.",
        "Common connecting expressions include:",
      ],
      examples: [
        {
          text: "Dahil",
          meaning: "Because",
        },
        {
          text: "Sapagkat",
          meaning: "Because / For",
        },
        {
          text: "Kung",
          meaning: "If",
        },
        {
          text: "Kapag",
          meaning: "When / Whenever",
        },
        {
          text: "Bagaman",
          meaning: "Although",
        },
        {
          text: "Kahit na",
          meaning: "Even though",
        },
        {
          text: "Habang",
          meaning: "While",
        },
        {
          text: "Upang",
          meaning: "In order to",
        },
      ],
    },
    {
      title: "C. Complex Sentences",
      body: [
        "• Hindi siya nakapasok dahil masama ang kaniyang pakiramdam.",
        "• Kung magsasanay ka araw-araw, mas mapauunlad mo ang iyong kasanayan.",
        "• Bagaman mahirap ang gawain, natapos nila ito sa oras.",
        "• Nag-ipon siya upang makabili ng bagong laptop.",
        "• Nagbabasa si Ana habang naghihintay ng kaniyang kaibigan.",
        "Sentence breakdown:",
        "Kung magsasanay ka araw-araw, mas mapauunlad mo ang iyong kasanayan.",
        "• Dependent clause: Kung magsasanay ka araw-araw",
        "• Independent clause: Mas mapauunlad mo ang iyong kasanayan.",
        "• Relationship: Condition and result.",
        "Important distinction:",
      ],
      table: {
        leftHeading: "",
        rightHeading: "",
        rows: [
          {
            left: "Compound Sentence",
            right: "Complex Sentence",
          },
          {
            left: "Combines independent clauses",
            right: "Combines an independent clause with one or more dependent clauses",
          },
          {
            left: "Both clauses can stand alone",
            right: "At least one clause cannot stand alone",
          },
        ],
      },
    },
    {
      title: "C. Complex Sentences",
      table: {
        leftHeading: "Example: Nag-aral siya at pumasa siya.",
        rightHeading: "Example: Pumasa siya dahil nag-aral siya.",
        rows: [],
      },
    },
    {
      title: "D. Expressing Conditions",
      body: [
        "Conditional sentences describe situations in which one event or outcome depends on another.",
        "Common expressions:",
      ],
      table: {
        leftHeading: "Expression",
        rightHeading: "Meaning",
        rows: [
          {
            left: "Kung",
            right: "If",
          },
          {
            left: "Kapag",
            right: "When / Whenever",
          },
          {
            left: "Maliban kung",
            right: "Unless",
          },
          {
            left: "Kung sakali",
            right: "In case / If it happens",
          },
          {
            left: "Kung hindi",
            right: "If not",
          },
        ],
      },
    },
    {
      title: "D. Expressing Conditions",
      body: [
        "• Kung mag-aaral ka nang mabuti, mas mauunawaan mo ang aralin.",
        "• Kapag umulan bukas, sa bahay na lamang kami magpupulong.",
        "• Maliban kung may pagbabago sa iskedyul, magsisimula ang programa sa alas-otso.",
        "• Kung sakaling kailangan mo ng tulong, maaari mo akong tawagan.",
        "Kung vs. Kapag",
        "These expressions are related but are not always interchangeable.",
        "• Kung commonly introduces a condition or possibility.",
        "• Kapag commonly introduces a condition expected to occur or a recurring situation.",
        "Compare:",
        "• Kung mananalo kami, magdiriwang kami. (If we win, we will celebrate.)",
        "• Kapag natatapos ang klase, umuuwi na ang mga mag-aaral. (When class ends, the students go home.)",
      ],
    },
    {
      title: "E. Expressing Contrast and Concession",
      body: [
        "These constructions communicate differences between ideas or acknowledge something that does not prevent another event from happening.",
        "Contrast shows that two ideas differ.",
        "Common expressions:",
        "• Ngunit",
        "• Subalit",
        "• Samantalang",
        "• Gayunpaman",
        "• Mahilig siyang magbasa, samantalang mas gusto naman ng kapatid niya ang pagsusulat.",
        "• Mataas ang marka niya; gayunpaman, patuloy pa rin siyang nagsisikap.",
        "• Gusto kong sumali, ngunit hindi ako makadadalo.",
        "Concession acknowledges a circumstance but emphasizes that another action or result still happens.",
        "Common expressions:",
        "• Bagaman",
        "• Kahit na",
        "• Sa kabila ng",
        "• Bagaman mahirap ang pagsusulit, sinubukan niyang sagutin ang lahat ng tanong.",
        "• Kahit na malayo ang paaralan, araw-araw siyang pumapasok.",
        "• Sa kabila ng maraming pagsubok, ipinagpatuloy nila ang kanilang proyekto.",
      ],
      remember: "Contrast and concession are related, but concession specifically emphasizes that an outcome happens despite an opposing circumstance.",
    },
    {
      title: "F. Expressing Cause and Effect",
      body: [
        "Cause-and-effect sentences explain why something happens and what happens as a result.",
      ],
      table: {
        leftHeading: "Expression",
        rightHeading: "Function",
        rows: [
          {
            left: "Dahil",
            right: "Introduces a reason",
          },
          {
            left: "Sapagkat",
            right: "Introduces a reason",
          },
          {
            left: "Dahil sa",
            right: "Introduces a cause, commonly followed by a noun or noun phrase",
          },
          {
            left: "Bunga nito",
            right: "Introduces a result",
          },
          {
            left: "Dahil dito",
            right: "Introduces a consequence",
          },
          {
            left: "Kaya",
            right: "Connects a reason and result",
          },
          {
            left: "Kung kaya",
            right: "Introduces a conclusion or result",
          },
        ],
      },
    },
    {
      title: "F. Expressing Cause and Effect",
      body: [
        "• Hindi natuloy ang palaro dahil malakas ang ulan.",
        "• Naantala ang biyahe dahil sa pagbaha.",
        "• Hindi sapat ang oras para sa paghahanda; bunga nito, kinailangang baguhin ang iskedyul.",
        "• Nagsikap siyang mabuti kaya nakamit niya ang kaniyang layunin.",
        "• Maraming mag-aaral ang lumahok sa programa; dahil dito, naging matagumpay ang gawain.",
        "Remember the difference:",
        "• Dahil commonly introduces a clause or reason.",
        "• Dahil sa commonly introduces a noun or noun phrase.",
        "• Hindi siya nakapasok dahil may sakit siya.",
        "• Hindi siya nakapasok dahil sa kaniyang karamdaman.",
      ],
    },
    {
      title: "G. Constructing Relative Clauses",
      body: [
        "A relative clause provides additional information about a person, place, object, or idea.",
        "In Filipino, the linker na or -ng commonly connects a noun with a descriptive phrase or clause.",
        "• Ang aklat na binili ko kahapon ay tungkol sa kasaysayan.",
        "• Ang estudyanteng nanalo sa paligsahan ay mula sa aming paaralan.",
        "• Ang bahay na matatagpuan sa tabi ng ilog ay pag-aari ng aking lolo.",
        "• Ang guro na nagtuturo ng Filipino ay nagbigay ng bagong gawain.",
        "Sentence breakdown:",
        "Ang aklat na binili ko kahapon ay tungkol sa kasaysayan.",
        "• Main noun: Ang aklat",
        "• Relative clause: na binili ko kahapon",
        "• Additional information: The clause explains which book is being discussed.",
        "Using question-related words to introduce additional information:",
      ],
      examples: [
        {
          text: "Kung saan",
          meaning: "Where",
        },
        {
          text: "Kung kailan",
          meaning: "When",
        },
        {
          text: "Kung sino",
          meaning: "Who",
        },
        {
          text: "Kung paano",
          meaning: "How",
        },
      ],
    },
    {
      title: "G. Constructing Relative Clauses",
      body: [
        "• Hindi ko alam kung saan matatagpuan ang bagong gusali.",
        "• Ikinuwento niya kung paano niya natapos ang proyekto.",
        "• Ipinaliwanag ng guro kung kailan dapat ipasa ang gawain.",
        "• Hindi pa malinaw kung sino ang mamumuno sa pangkat.",
        "Important note about na and -ng:",
        "The word na has different grammatical functions depending on the sentence. It can serve as a linker between words or phrases, or as a conjunction in other constructions. Its function should be identified through context.",
        "Compare:",
        "• Ang batang masipag ay ginagantimpalaan. (Na is used as a linker in batang masipag.)",
        "• Sinabi niyang aalis na siya. (Na appears in a different grammatical construction.)",
        "Do not assume that every occurrence of na performs the same function.",
      ],
    },
    {
      title: "H. Parallel Sentence Construction",
      body: [
        "Parallel construction means presenting related ideas using consistent grammatical patterns.",
        "This makes sentences easier to read and understand.",
      ],
      examples: [
        {
          text: "Example 1",
          meaning: "Incorrect or awkward parallel structure:",
        },
      ],
    },
    {
      title: "H. Parallel Sentence Construction",
      body: [
        "Gusto niyang magbasa, pagsusulat, at makinig sa musika.",
        "Improved:",
        "Gusto niyang magbasa, magsulat, at makinig sa musika.",
        "The activities now follow a more consistent verb pattern.",
        "Example 2:",
        "Hindi lamang siya mahusay magsalita kundi mahusay din siyang magsulat.",
        "Both parts communicate related abilities using a similar construction.",
        "Additional examples:",
        "• Layunin ng programa na turuan, gabayan, at hikayatin ang mga mag-aaral.",
        "• Mahalaga ang pagbabasa, pagsusulat, at pakikinig sa pag-aaral ng wika.",
        "• Ang isang mahusay na pinuno ay marunong makinig, magpasiya, at umunawa sa iba.",
      ],
    },
    {
      title: "I. Organizing Complex Sentences for Clarity",
      body: [
        "Advanced sentence construction is not simply about making sentences longer. It is about communicating relationships between ideas clearly.",
        "Compare the following:",
        "Unclear version:",
        "Nag-aral siya dahil may pagsusulit at gusto niyang pumasa kaya nagbasa siya ng mga aklat na hiniram niya sa kaibigan niya na nasa silid-aklatan.",
        "Improved version:",
        "Nag-aral siya dahil may pagsusulit kinabukasan. Nagbasa rin siya ng mga aklat na hiniram niya sa kaniyang kaibigan. Nais niyang makapaghanda nang mabuti upang makapasa sa pagsusulit.",
        "The improved version divides the information into manageable sentences while preserving the connections between ideas.",
        "Tips for improving complex sentences:",
        "• Identify the main idea before adding supporting details.",
        "• Use conjunctions that accurately represent the relationship between clauses.",
        "• Avoid connecting too many unrelated ideas in one sentence.",
        "• Use punctuation to separate ideas when appropriate.",
        "• Check whether each pronoun has a clear reference.",
        "• Avoid repeating the same connecting expression unnecessarily.",
        "• Choose words and sentence structures appropriate for the audience.",
      ],
    },
    {
      title: "J. Formal and Informal Sentence Construction",
      body: [
        "Sentence construction also changes depending on the communication setting.",
        "Informal:",
        "Ang galing ng proyekto nila! Marami silang nagawa kahit kaunti lang ang oras.",
        "More formal:",
        "Kapansin-pansin ang kalidad ng kanilang proyekto. Marami silang naisakatuparan sa kabila ng limitadong oras.",
        "Additional examples:",
      ],
      table: {
        leftHeading: "",
        rightHeading: "",
        rows: [
          {
            left: "Informal Expression",
            right: "More Formal Expression",
          },
          {
            left: "Ang dami nilang ginawa.",
            right: "Marami silang naisakatuparan.",
          },
          {
            left: "Kaya hindi natuloy.",
            right: "Dahil dito, hindi natuloy ang gawain.",
          },
          {
            left: "Pero may problema pa rin.",
            right: "Gayunpaman, mayroon pa ring suliranin.",
          },
          {
            left: "Gusto nilang matapos agad.",
            right: "Nais nilang matapos ang gawain sa lalong madaling panahon.",
          },
        ],
      },
    },
    {
      title: "J. Formal and Informal Sentence Construction",
      body: [
        "Formal expressions are useful in academic writing, professional communication, and research presentations. Informal expressions are appropriate in many everyday conversations.",
      ],
    },
    {
      title: "Review and Preparation for the Next Lesson",
      body: [
        "Before proceeding, learners should remember:",
        "• Compound sentences combine independent clauses.",
        "• Complex sentences contain independent and dependent clauses.",
        "• Connectors communicate relationships such as condition, cause, effect, contrast, concession, and purpose.",
        "• Relative clauses provide additional information.",
        "• Parallel construction helps maintain consistency.",
        "• Clear communication is more important than simply making sentences longer.",
      ],
    },
  ],
  situationsTitle: "Useful Phrases and Sentences",
  situationGroups: [
    {
      title: "Useful Phrases and Sentences",
      intro: [
        "Practice reading and understanding the following examples.",
      ],
      items: [
        {
          term: "Bagaman mahirap ang gawain, hindi kami sumuko.",
          meaning: "Although the task was difficult, we did not give up.",
        },
        {
          term: "Kung magtutulungan tayo, mas mabilis nating matatapos ang proyekto.",
          meaning: "If we work together, we can finish the project faster.",
        },
        {
          term: "Hindi lamang siya mahusay magsalita kundi mahusay din siyang magsulat.",
          meaning: "She is not only good at speaking but also good at writing.",
        },
        {
          term: "Nag-aral siya nang mabuti upang makapasa sa pagsusulit.",
          meaning: "He studied hard in order to pass the examination.",
        },
        {
          term: "Ang aklat na hiniram ko sa silid-aklatan ay lubhang kapaki-pakinabang.",
          meaning: "The book I borrowed from the library is very useful.",
        },
        {
          term: "Sa kabila ng mga suliranin, ipinagpatuloy nila ang kanilang pananaliksik.",
          meaning: "Despite the problems, they continued their research.",
        },
        {
          term: "Hindi natuloy ang programa dahil sa masamang panahon.",
          meaning: "The program did not push through because of the bad weather.",
        },
        {
          term: "Samantalang naghahanda ang mga guro, inaayos naman ng mga mag-aaral ang silid.",
          meaning: "While the teachers are preparing, the students are arranging the room.",
        },
        {
          term: "Kung hindi natin pag-iigihan ang ating gawain, maaaring hindi natin makamit ang inaasahang resulta.",
          meaning: "If we do not work diligently, we may not achieve the expected result.",
        },
        {
          term: "Bukod dito, mahalagang isaalang-alang ang mga mungkahi ng bawat kasapi.",
          meaning: "Furthermore, it is important to consider the suggestions of every member.",
        },
      ],
    },
  ],
  conversations: [
    {
      title: "Conversation 1: Explaining a Complicated Process",
      instructions: "Context: Two students are discussing how they will complete a school project.",
      lines: [
        {
          speaker: "Mika",
          text: "Paano natin matatapos ang proyekto kung kaunti na lamang ang oras natin?",
        },
        {
          speaker: "Daniel",
          text: "Kung hahatiin natin ang mga gawain, mas mabilis natin itong matatapos.",
        },
        {
          speaker: "Mika",
          text: "Tama ka. Bagaman marami pa tayong kailangang gawin, maaari naman nating unahin ang pinakamahahalagang bahagi.",
        },
        {
          speaker: "Daniel",
          text: "Sang-ayon ako. Ako na ang gagawa ng pananaliksik samantalang ikaw naman ang maghahanda ng presentasyon.",
        },
        {
          speaker: "Mika",
          text: "Mabuti iyan. Bukod dito, kailangan nating suriin ang lahat ng impormasyon upang matiyak na tama ang ating mga datos.",
        },
        {
          speaker: "Daniel",
          text: "Oo. Kapag natapos natin ang bawat bahagi, pagsasamahin natin ang mga ito at rerepasuhin ang buong proyekto.",
        },
      ],
    },
    {
      title: "Conversation 2: Discussing a Research Issue",
      instructions: "Context: A student asks a research adviser about a problem encountered during development.",
      lines: [
        {
          speaker: "Estudyante",
          text: "May problema po kami sa pagkilala ng mga ekspresyon ng mukha sa aming aplikasyon.",
        },
        {
          speaker: "Tagapayo",
          text: "Ano ang posibleng dahilan nito?",
        },
        {
          speaker: "Estudyante",
          text: "Maaaring hindi sapat ang liwanag sa silid kaya nahihirapan ang sistema na makuha ang malinaw na larawan.",
        },
        {
          speaker: "Tagapayo",
          text: "Kung gayon, subukan ninyong suriin ang sistema sa iba't ibang kondisyon ng pag-iilaw.",
        },
        {
          speaker: "Estudyante",
          text: "Opo. Bukod dito, nais din naming tiyaking hindi nakaaapekto ang pagkilala ng ekspresyon sa marka ng mga mag-aaral.",
        },
        {
          speaker: "Tagapayo",
          text: "Mabuti iyan. Dapat na opsyonal ang paggamit ng kamera at hindi dapat ituring na tiyak na sukatan ng pag-unawa o emosyon ng isang tao.",
        },
      ],
    },
    {
      title: "Conversation 3: Presenting a Structured Argument",
      instructions: "Context: Two classmates are discussing the importance of learning local languages.",
      lines: [
        {
          speaker: "Carlo",
          text: "Sa palagay ko, mahalagang pag-aralan ang mga katutubong wika dahil bahagi ang mga ito ng ating kultura.",
        },
        {
          speaker: "Lea",
          text: "Sumasang-ayon ako. Gayunpaman, may mga kabataang hindi na gaanong gumagamit ng kanilang sariling wika.",
        },
        {
          speaker: "Carlo",
          text: "Tama. Kung hindi natin ito bibigyang-pansin, maaaring unti-unting mabawasan ang paggamit ng ilang wika.",
        },
        {
          speaker: "Lea",
          text: "Sa kabila nito, maaari pa rin nating hikayatin ang mga kabataan sa pamamagitan ng makabagong paraan ng pag-aaral.",
        },
        {
          speaker: "Carlo",
          text: "Hindi lamang nito mapadadali ang pag-aaral kundi makatutulong din ito sa pagpapanatili ng ating mga wika.",
        },
        {
          speaker: "Lea",
          text: "Kung kaya, mahalagang pagsamahin ang teknolohiya at ang aktibong pakikilahok ng mga komunidad.",
        },
      ],
    },
  ],
  assessment: {
    instructions: "Choose the correct answer for each question.",
    passPercent: 70,
    questions: [
      {
        id: 1,
        prompt: "What is an independent clause?",
        options: [
          {
            key: "A",
            text: "A group of words that cannot express a complete thought",
          },
          {
            key: "B",
            text: "A clause that expresses a complete thought",
          },
          {
            key: "C",
            text: "A word used to connect two sentences",
          },
          {
            key: "D",
            text: "A phrase without a predicate",
          },
        ],
        answerKey: "B",
      },
      {
        id: 2,
        prompt: "Which sentence is a compound sentence?",
        options: [
          {
            key: "A",
            text: "Hindi siya pumasok dahil may sakit siya.",
          },
          {
            key: "B",
            text: "Kung uulan, mananatili kami sa bahay.",
          },
          {
            key: "C",
            text: "Nag-aral siya at pumasa siya sa pagsusulit.",
          },
          {
            key: "D",
            text: "Bagaman pagod siya, nagpatuloy siya.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 3,
        prompt: "Which expression commonly introduces a condition?",
        options: [
          {
            key: "A",
            text: "Kung",
          },
          {
            key: "B",
            text: "Bukod dito",
          },
          {
            key: "C",
            text: "Gayunpaman",
          },
          {
            key: "D",
            text: "Samantala",
          },
        ],
        answerKey: "A",
      },
      {
        id: 4,
        prompt: "What is the function of bagaman?",
        options: [
          {
            key: "A",
            text: "To express addition",
          },
          {
            key: "B",
            text: "To express concession",
          },
          {
            key: "C",
            text: "To express purpose",
          },
          {
            key: "D",
            text: "To express sequence",
          },
        ],
        answerKey: "B",
      },
      {
        id: 5,
        prompt: "Which sentence expresses cause and effect?",
        options: [
          {
            key: "A",
            text: "Nagbasa siya habang naghihintay.",
          },
          {
            key: "B",
            text: "Gusto niyang sumali, ngunit wala siyang oras.",
          },
          {
            key: "C",
            text: "Nag-aral siya kaya pumasa siya.",
          },
          {
            key: "D",
            text: "Maaari kang pumili ng aklat o magasin.",
          },
        ],
        answerKey: "C",
      },
      {
        id: 6,
        prompt: "Which expression means “in order to”?",
        options: [
          {
            key: "A",
            text: "Upang",
          },
          {
            key: "B",
            text: "Subalit",
          },
          {
            key: "C",
            text: "Samantalang",
          },
          {
            key: "D",
            text: "Maliban kung",
          },
        ],
        answerKey: "A",
      },
      {
        id: 7,
        prompt: "What does a relative clause do?",
        options: [
          {
            key: "A",
            text: "Repeats the main idea",
          },
          {
            key: "B",
            text: "Provides additional information about a noun or referent",
          },
          {
            key: "C",
            text: "Removes the subject from a sentence",
          },
          {
            key: "D",
            text: "Expresses only a question",
          },
        ],
        answerKey: "B",
      },
      {
        id: 8,
        prompt: "Which sentence uses parallel construction correctly?",
        options: [
          {
            key: "A",
            text: "Gusto niyang magbasa, pagsusulat, at makinig.",
          },
          {
            key: "B",
            text: "Gusto niyang magbasa, magsulat, at makinig.",
          },
          {
            key: "C",
            text: "Gusto niyang pagbabasa, magsulat, at pakikinig.",
          },
          {
            key: "D",
            text: "Gusto niyang magbasa, pagsusulat, at pakikinig.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 9,
        prompt: "Which expression is commonly used to introduce an exception?",
        options: [
          {
            key: "A",
            text: "Maliban kung",
          },
          {
            key: "B",
            text: "Bukod dito",
          },
          {
            key: "C",
            text: "Dahil dito",
          },
          {
            key: "D",
            text: "Sa madaling salita",
          },
        ],
        answerKey: "A",
      },
      {
        id: 10,
        prompt: "Which sentence expresses concession?",
        options: [
          {
            key: "A",
            text: "Nag-aral siya at nagsanay siya.",
          },
          {
            key: "B",
            text: "Bagaman umuulan, nagpatuloy ang palaro.",
          },
          {
            key: "C",
            text: "Nag-aral siya dahil may pagsusulit.",
          },
          {
            key: "D",
            text: "Nagbasa siya habang naghihintay.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 11,
        prompt: "Which sentence uses dahil sa appropriately?",
        options: [
          {
            key: "A",
            text: "Hindi siya pumasok dahil sa may sakit siya.",
          },
          {
            key: "B",
            text: "Hindi siya pumasok dahil sa kaniyang karamdaman.",
          },
          {
            key: "C",
            text: "Hindi siya pumasok dahil sa siya ay pagod.",
          },
          {
            key: "D",
            text: "Hindi siya pumasok dahil sa kailangan niyang magpahinga.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 12,
        prompt: "Which sentence uses a relative clause?",
        options: [
          {
            key: "A",
            text: "Nag-aaral ang bata.",
          },
          {
            key: "B",
            text: "Ang aklat na binili ko kahapon ay bago.",
          },
          {
            key: "C",
            text: "Malakas ang ulan.",
          },
          {
            key: "D",
            text: "Pumunta sila sa paaralan.",
          },
        ],
        answerKey: "B",
      },
      {
        id: 13,
        prompt: "Which expression introduces an additional point?",
        options: [
          {
            key: "A",
            text: "Bukod dito",
          },
          {
            key: "B",
            text: "Maliban kung",
          },
          {
            key: "C",
            text: "Sa halip na",
          },
          {
            key: "D",
            text: "Bagaman",
          },
        ],
        answerKey: "A",
      },
      {
        id: 14,
        prompt: "What is the primary purpose of using appropriate connectors in complex sentences?",
        options: [
          {
            key: "A",
            text: "To make every sentence longer",
          },
          {
            key: "B",
            text: "To remove supporting information",
          },
          {
            key: "C",
            text: "To show the relationship between ideas",
          },
          {
            key: "D",
            text: "To avoid using punctuation",
          },
        ],
        answerKey: "C",
      },
      {
        id: 15,
        prompt: "Which sentence is the clearest and most appropriately constructed?",
        options: [
          {
            key: "A",
            text: "Kung mag-aaral siya at dahil nagsanay siya kaya pumasa.",
          },
          {
            key: "B",
            text: "Bagaman marami siyang gawain, tinapos niya ang proyekto sa oras.",
          },
          {
            key: "C",
            text: "Dahil dito at habang nag-aaral siya kaya natapos.",
          },
          {
            key: "D",
            text: "Nais niyang magbasa, pagsusulat, at makinig.",
          },
        ],
        answerKey: "B",
      },
    ],
  },
  extraActivities: [
    {
      title: "Identify the Clause Relationship",
      kind: "choice",
      instructions: "Identify whether each sentence is a compound sentence or a complex sentence.",
      items: [
        "Nag-aral si Ben at naghanda siya para sa pagsusulit.",
        "Hindi kami natuloy dahil umulan nang malakas.",
        "Gusto niyang sumali, ngunit wala siyang sapat na oras.",
        "Kung magsisikap ka, makakamit mo ang iyong layunin.",
        "Naglinis ang mga mag-aaral habang naghahanda ang kanilang guro.",
      ],
    },
    {
      title: "Choose the Appropriate Connector",
      kind: "choice",
      instructions: "Choose the most appropriate expression to complete each sentence.",
      items: [
        "______ mahirap ang gawain, ipinagpatuloy nila ito.\nA. Bagaman\nB. Dahil dito\nC. Bukod dito",
        "Hindi siya nakapasok ______ siya ay may sakit.\nA. samantalang\nB. dahil\nC. maliban kung",
        "______ magsasanay ka araw-araw, mas mapauunlad mo ang iyong kakayahan.\nA. Kung\nB. Subalit\nC. Gayunpaman",
        "Nagtipid siya ______ makabili ng bagong kagamitan.\nA. upang\nB. ngunit\nC. samantala",
        "Maraming mag-aaral ang dumalo sa programa; ______, naging matagumpay ang gawain.\nA. sa halip na\nB. bunga nito\nC. maliban kung",
      ],
    },
    {
      title: "Combine the Sentences",
      kind: "rewrite",
      instructions: "Combine each pair of sentences using the connector indicated.",
      items: [
        "Malakas ang ulan. Natuloy pa rin ang programa. Use: Bagaman",
        "Nag-aral si Ana araw-araw. Pumasa siya sa pagsusulit. Use: Dahil",
        "Kailangan nating magtulungan. Matatapos natin ang proyekto. Use: Kung",
        "Nais niyang matuto ng bagong wika. Nagpatala siya sa isang kurso. Use: Kaya",
        "Nagsasaliksik ang mga mag-aaral. Naghahanda ang kanilang guro ng mga materyales. Use: Habang",
      ],
    },
    {
      title: "Complete the Relative Clauses",
      kind: "fill",
      instructions: "Complete each sentence with an appropriate phrase.",
      items: [
        "Ang aklat na ____________________ ay tungkol sa agham.",
        "Ang estudyanteng ____________________ ang siyang nanalo sa paligsahan.",
        "Ang paaralan na ____________________ ay malapit sa aming tahanan.",
        "Ang guro na ____________________ ay nagtuturo ng Filipino.",
        "Ang proyektong ____________________ ay kailangang suriin muli.",
      ],
    },
    {
      title: "Improve the Sentence",
      kind: "rewrite",
      instructions: "Rewrite each sentence to improve its clarity and construction.",
      items: [
        "Nag-aaral siya at dahil gusto niyang pumasa kaya nagbabasa siya araw-araw.",
        "Gusto niyang magbasa, pagsusulat, at makinig sa mga talakayan.",
        "Bagaman marami siyang ginagawa at pagod na siya kaya tinapos niya ang proyekto.",
        "Hindi natuloy ang programa dahil umulan at may baha kaya kinansela ito.",
        "Ang mga mag-aaral na nag-aaral nang mabuti at sila ay nagsasanay araw-araw ay mas handa.",
      ],
    },
    {
      title: "Rewrite in a Formal Style",
      kind: "rewrite",
      instructions: "Rewrite the following sentences using a more formal style.",
      items: [
        "Ang dami nilang nagawang gawain kahit konti lang ang oras.",
        "Gusto naming matapos agad ang proyekto para hindi kami mahuli.",
        "Pero may problema pa rin sa sistema.",
        "Kaya kailangan naming ayusin ang mga kulang.",
        "Maraming tao ang sumali kaya naging maganda ang programa.",
      ],
    },
    {
      title: "Paragraph Construction",
      kind: "open",
      instructions: "Write a paragraph consisting of 5–7 sentences about one of the following topics:",
      items: [
        "The importance of learning Philippine languages.",
        "The benefits and challenges of using technology in education.",
        "The importance of teamwork in completing a school project.",
        "At least one conditional sentence.",
        "At least one sentence expressing cause and effect.",
        "At least one sentence expressing contrast or concession.",
        "At least one compound or complex sentence.",
        "At least two different connecting expressions.",
      ],
      note: "Your paragraph must include:\nExample response:\nMahalagang pag-aralan ang mga wikang ginagamit sa iba't ibang bahagi ng Pilipinas dahil bahagi ang mga ito ng ating pagkakakilanlan. Kung bibigyan natin ng sapat na pansin ang mga wikang ito, mas maraming kabataan ang magkakaroon ng pagkakataong matutuhan ang mga ito. Bagaman may ilang kabataang mas gumagamit ng ibang wika, maaari pa rin silang mahikayat sa pamamagitan ng mga makabagong kagamitan sa pag-aaral. Bukod dito, makatutulong ang teknolohiya upang maging mas madaling ma-access ang mga aralin. Dahil dito, mas maraming tao ang maaaring magkaroon ng pagkakataong pag-aralan at gamitin ang mga wikang Pilipino.",
    },
  ],
  rewards: {
    items: [
      {
        section: "vocabulary",
        label: "Vocabulary and expression review",
        xp: 10,
      },
      {
        section: "conversation",
        label: "Clause identification + Sentence combination activities + Connector and relative clause exercises + Paragraph construction",
        xp: 55,
      },
      {
        section: "assessment",
        label: "Lesson assessment",
        xp: 15,
      },
    ],
    total: 80,
    badge: {
      name: "Master Sentence Architect",
    },
    completionRequirement: "Review the vocabulary and connecting expressions. Complete the clause identification activity. Complete the sentence construction exercises. Submit the paragraph construction activity. Obtain at least 70% on the lesson assessment.",
  },
};
