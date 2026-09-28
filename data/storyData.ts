// =========================================================
// STORY CONTENT — "Whispers" (31 chapters)
// =========================================================
// English prose is written ONCE and shared by all three dialects.
// Only the per-dialect bits live in `byDialect`:
//   - lessonId  (tagalog_1 / kapampangan_1 / waray_1, etc.)
//   - terms     (tappable word annotations + translations)
//
// So a typo fix in the prose is a one-place edit, not three.
// Use getChaptersForDialect(dialect) to get the resolved chapter list.
//
// TERM ANNOTATIONS: only Chapter 1 has them so far. Every other chapter
// has an empty `terms: []`, which renders fine (no tappable words) —
// fill them in as you go. Each annotation's `match` must be an exact
// substring of body[paragraphIndex], or it's silently skipped.
//
// TRANSLATIONS: `translations[i]` is the dialect version of `body[i]`.
// The reader shows the English paragraph in parentheses with the
// dialect translation beneath it. Every array is currently empty —
// paragraphs with no translation render as English only, so the app
// works fine while this is being filled in.

export type StoryDialect = "tagalog" | "kapampangan" | "waray";

export type DialectTermAnnotation = {
  paragraphIndex: number;
  match: string; // must be an exact substring of body[paragraphIndex]
  dialect: string; // the translation shown to the user
  explanation: string;
  audioUrl?: string; // pre-recorded pronunciation; without it the app
  // falls back to device TTS, which only supports Tagalog
};

type DialectChapterData = {
  lessonId: string;
  terms?: DialectTermAnnotation[];
  // One translated paragraph per entry in the chapter's `body`, SAME
  // ORDER, SAME LENGTH. Leave an entry as "" (or omit the array) for
  // paragraphs not translated yet — those render as English only.
  // See the note at the bottom of this file.
  translations?: string[];
};

type SharedChapter = {
  id: number;
  title: string;
  body: string[];
  byDialect: Record<StoryDialect, DialectChapterData>;
};

export type StoryChapter = {
  id: number;
  title: string;
  body: string[];
  lessonId: string;
  dialect: StoryDialect;
  terms?: DialectTermAnnotation[];
  translations?: string[];
};

const sharedChapters: SharedChapter[] = [
  {
    id: 1,
    title: "Chapter 1: The Funeral",
    body: [
      "The Vale estate had a way of making the living feel posthumous.",
      "Lucien Vale arrived first, as he always did when something needed to be claimed. He stood at the iron gate with his collar turned against the October wind, watching the manor emerge from the fog the way a bad memory emerges from sleep, familiar, wrong, and impossible to unsee. The east tower had lost another window. Ivy had swallowed the garden wall. The house was eating itself, and it had been for years.",
      "His grandmother's funeral would be held inside, per the family's ancient tradition of conducting grief entirely in private.",
      "Selene arrived an hour later by hired car, her dark coat buttoned to the throat, a leather satchel over one shoulder as though she'd come to negotiate a merger. She gave Lucien one look, measuring, careful, and kissed him once on each cheek without warmth.",
      '"You drove up this morning?" she asked.',
      '"Last night," he said. "Wanted to see the place."',
      "She nodded slowly. She knew what that meant. He'd been taking inventory.",
      "Elias came last, arriving on foot from the village because he'd missed the last train connection and couldn't afford a cab. He looked thinner than either of them remembered. There was a bruised quality to his eyes, a frantic brightness that could have been grief or could have been something less dignified. He hugged Selene too tightly and shook Lucien's hand with both of his own.",
      '"She asked for you both," Elias said. "At the end. I was the only one here."',
      "Nobody replied.",
      "The funeral proceeded in the mansion's great hall, attended by three cousins, two elderly servants, and a solicitor named Mr. Harwick who drove from the city and left immediately after reading the will. He seemed relieved to go. The document he left behind was a single page, handwritten in their grandmother's precise script, witnessed and notarized and final.",
      "The Vale inheritance, all properties, holdings, trusts, and titles, shall pass to whichever heir demonstrates the restoration of the family's public standing. Reputation is the only currency that endures. The heir who returns dignity to the Vale name shall receive everything. Should no heir succeed within three years, the inheritance shall pass into an irrevocable trust, never to be disbursed. You were raised to understand what the name means. Prove it.",
      "They read it twice in silence. Outside, the wind found a loose shutter somewhere and began pulling at it rhythmically.",
      '"She made it a competition," Elias said finally.',
      '"She made it a standard," Lucien corrected. "There\'s a difference."',
      'Selene folded the page precisely. "The family\'s reputation is in ruins. Has been for a decade. Businesses failing. The corruption rumors. The lawsuit that never quite went to trial." She looked at her cousins. "This is nearly impossible."',
      '"Nearly," Lucien said.',
      "That night, Selene woke at three in the morning from a dream she immediately forgot. She lay in the dark listening to the house, its pipes, its settling timbers, its old vocabulary of complaint, and then heard something else beneath all of it.",
      "A voice, close and private, as though it were originating from somewhere behind her sternum:",
      "You belong to me.",
      "She sat upright. The room was empty. The hallway beyond the door was dark and silent. She pressed her back against the headboard and breathed slowly until her heart returned to something like its normal pace.",
      "She told herself it was the house. Old places had sounds. She had been reading too much into a dying woman's estate.",
      "She did not mention it at breakfast.",
      "Neither did Elias.",
      "Neither did Lucien.",
    ],
    byDialect: {
      tagalog: {
        lessonId: "tagalog_1",
        terms: [
          {
            paragraphIndex: 4,
            match: "morning",
            dialect: "Umaga",
            explanation:
              'Umaga means "morning" in Tagalog — as in the greeting Magandang umaga, "good morning."',
          },
          {
            paragraphIndex: 6,
            match: "slowly",
            dialect: "Dahan-dahan",
            explanation:
              'Dahan-dahan means "slowly" or "carefully" — often said to mean "take it easy."',
          },
          {
            paragraphIndex: 7,
            match: "village",
            dialect: "Nayon",
            explanation:
              'Nayon is the Tagalog word for "village" or "hometown."',
          },
        ],
        translations: [
          "Ang ari-arian ng Vale ay may paraan upang madama ang buhay pagkatapos ng kamatayan.",
          "Naunang dumating si Lucien Vale, gaya ng lagi niyang ginagawa kapag may kailangang kunin. Nakatayo siya sa bakal na tarangkahan habang ang kwelyo ay nakatalikod sa hangin ng Oktubre, pinagmamasdan ang manor na lumabas mula sa fog kung paanong ang isang masamang alaala ay lumabas mula sa pagtulog, pamilyar, mali, at imposibleng hindi makita. Ang silangang tore ay nawalan ng isa pang bintana. Napalunok na si Ivy sa dingding ng hardin. Ang bahay ay kumakain sa sarili, at ito ay sa loob ng maraming taon.",
          "Ang libing ng kanyang lola ay gaganapin sa loob, ayon sa sinaunang tradisyon ng pamilya sa pagsasagawa ng kalungkutan nang pribado.",
          "Dumating si Selene makalipas ang isang oras sakay ng inupahang kotse, ang kanyang maitim na amerikana ay naka-button sa lalamunan, isang leather satchel sa isang balikat na para bang darating siya para makipag-ayos sa isang merger. Binigyan niya ng isang tingin si Lucien, sumusukat, maingat, at hinalikan siya ng isang beses sa bawat pisngi nang walang init.",
          '"Nagdrive ka kaninang umaga?" tanong niya.',
          '"Kagabi," sabi niya. "Gusto kong makita ang lugar."',
          "Marahan siyang tumango. Alam niya ang ibig sabihin noon. Nag-imbentaryo siya.",
          "Huling dumating si Elias, na naglalakad mula sa nayon dahil nalampasan niya ang huling koneksyon ng tren at hindi niya kayang bumili ng taksi. Mukha siyang mas payat kaysa naalala ng dalawa. May bugbog na kalidad sa kanyang mga mata, isang galit na galit na ningning na maaaring kalungkutan o maaaring isang bagay na hindi gaanong marangal. Niyakap niya ng sobrang higpit si Selene at nakipagkamay kay Lucien gamit ang dalawa niyang kamay.",
          '"She asked for you both," sabi ni Elias. "At the end. Ako lang mag-isa dito."',
          "Walang sumagot.",
          "Ang libing ay nagpatuloy sa malaking bulwagan ng mansyon, na dinaluhan ng tatlong pinsan, dalawang matatandang tagapaglingkod, at isang abogado na nagngangalang Mr. Harwick na nagmaneho mula sa lungsod at umalis kaagad pagkatapos basahin ang testamento. Mukhang nakahinga siya ng maluwag. Ang dokumentong iniwan niya ay isang pahina, sulat-kamay sa tiyak na script ng kanilang lola, nasaksihan at notarized at pinal.",
          "Ang mana ng Vale, lahat ng ari-arian, pag-aari, pinagkakatiwalaan, at mga titulo, ay ipapasa sa sinumang tagapagmana na nagpapakita ng pagpapanumbalik ng pampublikong katayuan ng pamilya. Ang reputasyon ay ang tanging pera na tumatagal. Ang tagapagmana na nagbabalik ng dignidad sa pangalan ng Vale ay tatanggap ng lahat. Kung walang tagapagmana na magtagumpay sa loob ng tatlong taon, ang mana ay mapapasa sa isang hindi na mababawi na tiwala, na hindi na ibibigay. Pinalaki ka upang maunawaan kung ano ang ibig sabihin ng pangalan. Patunayan mo.",
          "Binasa nila ito ng dalawang beses nang tahimik. Sa labas, ang hangin ay nakakita ng maluwag na shutter sa isang lugar at nagsimulang hilahin ito nang may ritmo.",
          '"Ginawa niya itong kumpetisyon," huling sabi ni Elias.',
          '"Ginawa niya itong pamantayan," pagwawasto ni Lucien. "May pagkakaiba."',
          'Eksaktong tiniklop ni Selene ang pahina. "Ang reputasyon ng pamilya ay nasisira. Isang dekada na. Ang mga negosyo ay bumagsak. Ang mga alingawngaw ng katiwalian. Ang demanda na hindi kailanman napunta sa paglilitis." Napatingin siya sa mga pinsan niya. "Ito ay halos imposible."',
          '"Malapit na," sabi ni Lucien.',
          "Nang gabing iyon, nagising si Selene ng alas tres ng madaling araw mula sa isang panaginip na agad niyang nakalimutan. Nakahiga siya sa dilim na nakikinig sa bahay, sa mga tubo nito, sa mga tabing kahoy nito, sa lumang bokabularyo ng pagrereklamo, at pagkatapos ay narinig ang ibang bagay sa ilalim ng lahat ng ito.",
          "Isang boses, malapit at pribado, na parang nagmula sa isang lugar sa likod ng kanyang sternum:",
          "Pag-aari mo ako.",
          "Umupo siya ng tuwid. Walang laman ang kwarto. Madilim at tahimik ang pasilyo sa kabila ng pinto. Idiniin niya ang kanyang likod sa headboard at huminga nang dahan-dahan hanggang sa bumalik ang kanyang puso sa normal na bilis nito.",
          "Sinabi niya sa sarili niya na ito ang bahay. Ang mga lumang lugar ay may mga tunog. Siya ay nagbabasa ng masyadong maraming tungkol sa isang naghihingalong ari-arian ng babae.",
          "Hindi niya ito binanggit sa almusal.",
          "Hindi rin si Elias.",
          "Ganun din si Lucien.",
        ],
      },
      kapampangan: {
        lessonId: "kapampangan_1",
        terms: [
          {
            paragraphIndex: 4,
            match: "morning",
            dialect: "Abak",
            explanation: 'Abak means "morning" in Kapampangan.', // TODO: verify
          },
          {
            paragraphIndex: 7,
            match: "village",
            dialect: "Balen",
            explanation: 'Balen means "town" or "village" in Kapampangan.', // TODO: verify
          },
        ],
        translations: [], // TODO: one translated paragraph per body entry
      },
      waray: {
        lessonId: "waray_1",
        terms: [
          {
            paragraphIndex: 4,
            match: "morning",
            dialect: "Aga",
            explanation: 'Aga means "morning" in Waray.', // TODO: verify
          },
          {
            paragraphIndex: 7,
            match: "village",
            dialect: "Baryo",
            explanation: 'Baryo means "village" in Waray.', // TODO: verify
          },
        ],
        translations: [], // TODO: one translated paragraph per body entry
      },
    },
  },
  {
    id: 2,
    title: "Chapter 2: The Locked East Wing",
    body: [
      "The house had rules that nobody had bothered to write down.",
      "Don't open the cellar door after dark. Don't ask Maren, the old housekeeper, about the east wing. Don't look at the portraits in the main corridor for too long, something about the quality of the painted eyes gave the impression they were conducting their own private assessments of whoever passed beneath them.",
      "Selene, who distrusted unwritten rules in the way she distrusted all forms of social control, set about breaking them methodically.",
      "The east wing's corridor was sealed by a padlock that had rusted into a permanent grimace. This struck her as recent, the rust, she thought, was performative. Someone had wanted it to look older than it was. She fetched bolt cutters from the groundskeeper's shed and returned to find Lucien waiting in the corridor.",
      '"I was going to suggest we do this together," he said.',
      '"Were you going to suggest it before or after you\'d already been inside?"',
      'He smiled, genuinely, briefly. "We\'re very alike, you and I."',
      '"Don\'t," she said, and cut the lock.',
      "The hallway beyond was dark and smelled of damp wood and something underneath that, something chemical and close, the way old fear smells when it has nowhere to go. The three of them moved through it together, holding up their phones as torches.",
      "The portraits were worse than those in the main house. Someone had returned to each canvas with a sharp instrument and scored out every face, not haphazardly, but methodically, face after face, as though completing an important administrative task. The eyes were always the last to go. You could see the order of it if you looked closely. Selene did not look closely.",
      "The journals were stored in a chest whose leather straps had blackened and hardened into something resembling mummified skin. Most of the pages had been burned while still inside, whoever had done it had started the fire and then apparently had second thoughts, because the journals were half-gone, not wholly destroyed. This particular form of incompleteness struck Selene as significant. It was the posture of a person who wanted to forget something but couldn't quite commit to the erasure.",
      "Elias was the one who found the wallpaper section. He pressed his hand against the wall at the corridor's far end and felt the give of it, the way it was lifting away from the plaster, and pulled. Behind the yellowed paper was a stain the color of old rust, dried entirely now, old enough that it had passed through the various shades of decomposition and arrived at something near brown. Not large. The size of both hands pressed flat.",
      "None of them said what it was.",
      "They left the east wing and none of them slept well afterward.",
      "That night, the whispering was louder.",
    ],
    byDialect: {
      tagalog: {
        lessonId: "tagalog_2",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      kapampangan: {
        lessonId: "kapampangan_2",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      waray: {
        lessonId: "waray_2",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
    },
  },
  {
    id: 3,
    title: "Chapter 3: Favor of the People",
    body: [
      "The Vale family's fall from grace had not been dramatic. That would almost have been easier to reverse — a single scandal could be weathered, given sufficient time and donations. Instead the descent had been gradual and adhesive, accreting layer by layer across two decades: a labor dispute in 1998 that the family had handled badly, a series of legal actions in the 2000s that had been settled quietly but not quietly enough, rumors of political interference, two failed business ventures that had taken smaller local companies down with them.",
      "The town of Hallow's Reach, which had grown in the Vale estate's shadow for three centuries, had moved from deference to wariness to something approaching contempt. The family name, once stenciled above the doors of the town library, the hospital wing, the covered market, had been quietly removed from each.",
      "The cousins met in the library each morning to plan.",
      '"Public works," Lucien said. "We restore something visible. The old bridge, perhaps. The town square."',
      '"Charity," said Selene. "Personal engagement. We need to be seen, not just our money."',
      '"We need to talk to people," Elias said, with the faint embarrassment of someone stating something everyone else considers too obvious to say. "Just, actually talk to them. My grandmother never left this house."',
      "They divided the work according to their natures. Lucien made calls, leveraged old connections, secured commitments for a food bank grant. Selene began attending the town council meetings, suffering through two hours of procedural motions each Thursday evening with the focused tolerance of someone undergoing physical therapy. Elias volunteered at the community center, teaching children to play chess on Tuesday afternoons with a gentleness that surprised everyone, including himself.",
      "For two weeks, it seemed to be working.",
      "Then the article appeared in the regional paper, an anonymous submission, somehow in possession of internal financial documents proving the Vale Foundation had redirected grant money in the 1980s. The town council called for a review. The food bank declined the grant. Elias arrived at the community center on a Tuesday to find the room locked and a handwritten note taped to the door asking him not to return.",
      '"Someone is leaking against us," Lucien said that evening. He was very still in his chair.',
      '"Someone who has access to forty-year-old financial documents?" Selene said.',
      '"This house is full of forty-year-old documents."',
      "They looked at each other across the library table. The fire in the grate had gone low. From somewhere in the house, from several directions at once, it seemed, the whispers moved through the walls like water moving through old pipes.",
    ],
    byDialect: {
      tagalog: {
        lessonId: "tagalog_3",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      kapampangan: {
        lessonId: "kapampangan_3",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      waray: {
        lessonId: "waray_3",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
    },
  },
  {
    id: 4,
    title: "Chapter 4: The First Breakdown",
    body: [
      "Elias was in the kitchen at four in the morning, unable to sleep, when the voice became something other than a whisper.",
      "He had grown accustomed, over the preceding weeks, to the ambient murmur — the way the house seemed to breathe language, the way meanings kept assembling themselves just below comprehension, the way he sometimes caught a word or phrase the way one catches something glimpsed peripherally: there and then gone. He had told himself it was stress. The debt was serious, he had not told his cousins quite how serious, and the mind under serious pressure created auditory artifacts. He had read about this.",
      "The voice that woke him was not an artifact.",
      "It was clear and composed and it spoke with the patience of someone who has been waiting a very long time to be heard:",
      "Your cousins will kill you first.",
      "Elias pressed his back against the kitchen counter. The room was dark except for the pilot light on the stove, which threw everything in pale blue. He was alone.",
      "The older one is already planning it. The girl is deciding. You are the one who is most useful to them now, and when you stop being useful—",
      '"Stop," Elias said.',
      "The voice stopped.",
      "The pilot light flickered.",
      "He stood in the dark kitchen for a long time, breathing. Then he opened the knife drawer, for entirely rational, normal reasons, he told himself, and took out the small paring knife and put it in the pocket of his robe.",
      "He slept with it under his pillow that night.",
      "The next day he bought three more, from the hardware store in town, and placed them in various drawers around his room with the casual arrangement of a man who simply enjoys having options.",
    ],
    byDialect: {
      tagalog: {
        lessonId: "tagalog_4",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      kapampangan: {
        lessonId: "kapampangan_4",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      waray: {
        lessonId: "waray_4",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
    },
  },
  {
    id: 5,
    title: "Chapter 5: The Journal",
    body: [
      "Selene found it behind the wainscoting in the east wing.",
      "She had returned alone, with better light and a methodical approach, photographing each damaged journal before touching it. The archive instinct, she thought. The political consultant's habit of treating every piece of information as both evidence and leverage.",
      "The journal behind the wainscoting was different from the others. It was newer, perhaps seventy or eighty years old, not three centuries, and it had been hidden rather than burned. There was a difference in the intent. The other journals had been destroyed by someone making a decision. This one had been concealed by someone making a plan.",
      "It was written by a woman named Gwendolen Vale, who had spent four years in the 1940s attempting to understand the history of what she called the Voice. Her methodology was admirable, her handwriting cramped and increasingly frantic, her conclusions sophisticated. She had found the pattern, the way the whispers intensified when the family's public standing declined, the way they modulated to target each heir's specific anxiety, the way they had shaped the family's decisions across generations with the quiet constancy of a tide reshaping a coastline.",
      "She had been close. Very close.",
      "The last entry read:",
      "The worst of it is this: every time I have looked directly at it, every time I have made it the object of study rather than letting it remain atmospheric and ambient, it has grown stronger. I believe now that attention is its food. I believe that the act of solving it is indistinguishable from feeding it. He is not trapped in this house. He is not imprisoned in this bloodline. He watches through our—",
      "The journal ended there, mid-sentence, the pen stroke trailing into a long smear where it had been dropped or dragged.",
      "That night, Selene woke at two in the morning to a sound she could not locate , a high, sustained note, like bone singing. She found her way to the bathroom by touch and stood over the sink to splash cold water on her face. When she looked up, the mirror above the vanity had a crack running from upper corner to lower corner, clean as a surgical incision.",
      "She walked to Lucien's room and knocked. He opened the door immediately, he had not been sleeping either.",
      '"My mirror," she said.',
      '"All of them," he said. "Come look."',
      "Every mirror in the mansion had cracked overnight. Each break was unique in its pattern but identical in its quality, precise, total, as though the glass had decided, all at once, that it no longer wished to show the world back to itself.",
    ],
    byDialect: {
      tagalog: {
        lessonId: "tagalog_5",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      kapampangan: {
        lessonId: "kapampangan_5",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      waray: {
        lessonId: "waray_5",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
    },
  },
  {
    id: 6,
    title: "Chapter 6: Dinner with Ghosts",
    body: [
      "Lucien organized the charity dinner with the precision of someone who believed that the correct sequencing of appetizers could reverse thirty years of declining public trust. He sourced the wine from a local vineyard, hired the best caterer in the county, sent personal invitations to forty-seven of the town's most influential figures and received acceptances from thirty-one.",
      "It began well. Selene worked the room with a professional warmth that cost her something — she could feel the effort of it, the continuous translation between what she actually thought and what she said, the social performance of belonging to a family she was not certain she wanted to belong to. But people warmed. The wine was good. The mayor laughed at something Lucien said.",
      "The wine turned an hour into the evening.",
      "Maren brought it in herself, a second bottle for the head table, and when she poured it into Councillor Aldred's glass, it came out dark. Not red-dark, the way good wine is dark in candlelight. Dark in the way that something very old is dark, the way deep water is dark, the way the color held a depth that the eye kept sliding off of. Aldred stared at his glass and said nothing. His wife reached across and touched his arm.",
      "Then the screaming started from the far end of the room.",
      "A politician, a party deputy who'd been eyeing Selene with calculated interest all evening, rose from his chair and pointed at the empty seats at the table's western end, and his voice, when it came, was the voice of a man reporting something he was experiencing despite his own sincere opposition to the experience: there are people there. In the seats he was pointing at. Seated and still. And from the expressions on the faces around him, some others could see them too, and most couldn't, and the confusion of this, who was seeing it and who wasn't, was more terrifying than any single shared hallucination would have been.",
      "The caterers abandoned the kitchen. Two guests left without their coats. The mayor said something clipped and formal about checking in soon and was gone in four minutes.",
      "Selene stood in the doorway of the empty dining room afterward, looking at the table, the half-eaten plates, the dark rings where glasses had stood, the scattered chairs.",
      'Lucien appeared beside her. "Someone tampered with the wine," he said. "A hallucinogen. I\'ll have it tested."',
      '"Lucien—"',
      '"I\'ll have it tested."',
      "She let it go. He needed to believe in explanations he could act on. She understood this, even as she understood it was wrong.",
    ],
    byDialect: {
      tagalog: {
        lessonId: "tagalog_6",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      kapampangan: {
        lessonId: "kapampangan_6",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      waray: {
        lessonId: "waray_6",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
    },
  },
  {
    id: 7,
    title: "Chapter 7: The Underground Chapel",
    body: [
      "The chapel was Elias's discovery, though he found it in the way that people sometimes find things they've been avoiding, by stopping, finally, avoiding.",
      "He had noticed the stone steps behind the east wing's locked cellar door because he'd noticed almost everything about the house by now, the way paranoia sharpens peripheral vision. The steps went down past the cellar level, past the foundations, to something older than the house that stood above.",
      "The chapel predated everything. The stone was a different color, a different weight, from a quarry that had been exhausted before the current Vale estate was built. It was a circular room barely large enough for a congregation, with a low vaulted ceiling and a floor that had been carved, not incised with a tool but carved, carefully, over what must have been years.",
      "Names. Hundreds of names. Arranged in concentric rings spiraling out from the center of the floor, and beside each name, an annotation: offered.",
      "There were names Selene recognized from the family trees she'd been studying, the genealogical records she'd pulled from the archives to understand the inheritance's history. Names from the 1700s and 1800s, trailing into the 1900s. Offered beside each one.",
      "Not sacrificed. Not killed. Offered.",
      '"To what?" Elias said.',
      "Selene ran her hand over the central inscription, which was older than the rest — Latin, badly weathered, most of it illegible. She caught legatum — legacy — and perpetuo — perpetually — and a word she had to look up in her phone's dictionary because it was archaic even for Latin: alendum.",
      "To be fed.",
      "She stood up and looked at her cousin and did not answer his question, because the answer seemed too large for the room.",
    ],
    byDialect: {
      tagalog: {
        lessonId: "tagalog_7",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      kapampangan: {
        lessonId: "kapampangan_7",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      waray: {
        lessonId: "waray_7",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
    },
  },
  {
    id: 8,
    title: "Chapter 8: The Whisper Rule",
    body: [
      "It was Elias who finally named it aloud, which surprised the others, because Elias had been the most reluctant to discuss the voices directly.",
      '"He never actually lies," Elias said.',
      "They were in the library. Three weeks into December now, the heating inadequate, all three of them wearing extra layers. They had been comparing notes for the first time, really comparing them, not the careful edited versions they'd been sharing, and the exercise had the grim, clarifying quality of an autopsy.",
      '"Think about it," Elias continued. "Everything he\'s told me has been technically true. My cousins might want me gone, you both want the inheritance, and I\'m in the way. The family reputation is collapsing. He hasn\'t fabricated anything. He just—" Elias paused, choosing his word carefully. "He curates."',
      '"He selects for the most destabilizing interpretation," Selene said.',
      '"And presents it as the only interpretation," Lucien said, with a kind of dark appreciation. "That\'s rather elegant."',
      '"That makes him more dangerous," Selene said. "Not less. A lie can be refuted. A partial truth just poisons the whole well."',
      "\"The night he told me you'd kill me,\" Elias said, looking at Lucien without apology, \"I knew it wasn't impossible. And knowing it wasn't impossible was enough. I couldn't unknow it.\"",
      "The fire snapped. A pine log fell against the grate.",
      '"So we don\'t try to prove him wrong," Selene said slowly. "Because we can\'t. We just — recognize that what he\'s selecting from is real, and that his selection is always designed to destroy us."',
      '"And then what?" Elias said.',
      "Nobody had an answer for that part.",
    ],
    byDialect: {
      tagalog: {
        lessonId: "tagalog_8",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      kapampangan: {
        lessonId: "kapampangan_8",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      waray: {
        lessonId: "waray_8",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
    },
  },
  {
    id: 9,
    title: "Chapter 9: Public Enemy",
    body: [
      "The effigies appeared on a Monday.",
      "There were three of them, hung from the wrought-iron fence at the estate's perimeter, rough figures made of straw and salvaged cloth, given distinguishing marks in rough paint. The tallest had a small sign that read LUCIEN. The one beside it, SELENE. The smallest, ELIAS.",
      "A crowd had gathered to watch by the time Lucien saw them from the upstairs window. Not a large crowd, twenty, twenty-five people, but the quality of the watching was significant. Nobody was chanting or yelling. They were simply standing. This silent, patient contempt was somehow worse than fury would have been.",
      '"Don\'t go out," Selene said when Lucien started for the door.',
      '"They\'re on our fence."',
      '"And going out makes it a confrontation, which makes it a story, which makes it worse. I\'ve spent fifteen years in politics. Trust me."',
      "He stopped at the door. His hand was flat against the wood. Selene watched the back of his neck and tried to read it, the tension there, the old signals of a cousin she'd known since childhood, the ways she could and couldn't predict him.",
      "From deep in the house, the whispering had become something ambient and constant, the way tinnitus becomes ambient and constant, not heard so much as known, the way you know about a wound without consciously feeling it every moment.",
      "The crowd stood and looked and eventually went home. The effigies stayed on the fence for three days before someone, Elias, most likely, in the middle of the night, took them down. Nobody mentioned it.",
    ],
    byDialect: {
      tagalog: {
        lessonId: "tagalog_9",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      kapampangan: {
        lessonId: "kapampangan_9",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      waray: {
        lessonId: "waray_9",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
    },
  },
  {
    id: 10,
    title: "Chapter 10: The Painting",
    body: [
      "The portrait of Lord Aurelius Vale had hung in the main corridor for so long that it had achieved a kind of environmental invisibility, part of the house's fixed furniture, noticed the way good lighting is noticed, which is to say not at all until it's gone.",
      "They began noticing it in early December.",
      "The changes were subtle at first. A slight tilt of the head that Selene was nearly certain had not been there before. A shadow that had migrated across the left side of the face between one morning and the next. She photographed it on a Wednesday and compared the photograph to another she'd taken during her initial documentation of the east wing. They were not identical.",
      "Elias had no such analytical approach.",
      "Elias simply sat in front of it for hours at a time, sometimes speaking aloud.",
      '"He talks to it," Lucien told Selene, his voice pitched low and neutral in the way it got when he was deciding how alarmed to be.',
      '"He talks to him," Selene said. "That\'s the correct phrasing, apparently."',
      '"What does he say?"',
      "\"I've only caught fragments. He's asking Aurelius about the curse. About how it started. He thinks if he understands the origin he can — I don't know. Negotiate.\"",
      '"Negotiate." Lucien repeated this with the flatness of a man finding a structural flaw in an argument.',
      '"Elias has always believed that the right conversation can fix anything," Selene said. "It\'s his best quality and his worst one."',
      '"And the eyes?" Lucien said.',
      '"Move," she confirmed.',
      "She had seen it herself, standing alone in the corridor at dusk. The painted eyes had tracked to her, the way a living person's eyes track toward motion, and she had walked away at a pace she refused to call running and had not returned to the corridor without company since.",
    ],
    byDialect: {
      tagalog: {
        lessonId: "tagalog_10",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      kapampangan: {
        lessonId: "kapampangan_10",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      waray: {
        lessonId: "waray_10",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
    },
  },
  {
    id: 11,
    title: "Chapter 11: The Missing Heir",
    body: [
      "Lucien found the discrepancy in the genealogical records on a night he couldn't sleep, sitting in the archive room with documents spread across three tables and a growing conviction that the family tree had been deliberately simplified.",
      "The Vale line showed three branches through the nineteenth century,  a clear, well-documented descent through the three sets of cousins into the present generation. The documentation was thorough, consistent, and complete.",
      "It was too complete. Lucien had spent enough time reviewing corporate filings to recognize when a record had been prepared rather than merely kept. Real archives had gaps, inconsistencies, corrections and amendments. This was clean in the way that a sanitized account is clean.",
      "He found the fourth branch in the margin of an 1887 estate map, a notation in a different hand, partially erased but still legible under the magnifying glass: East Cottage — the Dunmore children, per Aurelius's arrangement.",
      "The Dunmore name did not appear anywhere in the Vale family tree.",
      "Lucien searched for four days, pulling sources the archive seemed to be structuring his attention away from. He found, eventually, a baptismal record in the church registry, a note in a solicitor's file from 1891, and a newspaper item from 1936 about a house fire in the village in which a woman named Agnes Dunmore-Vale was described as a descendant of the Vale family by an unacknowledged branch.",
      "Agnes had survived the fire. She'd had children.",
      "Whether those children, or their children, were still alive, whether there was a fourth cousin somewhere, a true heir with a stronger claim, Lucien did not yet know.",
      "He put the documents away carefully and said nothing to anyone.",
    ],
    byDialect: {
      tagalog: {
        lessonId: "tagalog_11",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      kapampangan: {
        lessonId: "kapampangan_11",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      waray: {
        lessonId: "waray_11",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
    },
  },
  {
    id: 12,
    title: "Chapter 12: The Fire",
    body: [
      "The south archive room burned on a night when the wind was moving northeast and all three cousins were supposedly in bed.",
      "Selene woke to the smell, old paper burning has a specific quality, a sweetness underneath the acrid, and found the fire already established when she reached the corridor, eating eagerly through decades of documents. She pulled the fire alarm and went for the extinguisher in the hall, and it was while she was standing in the corridor, managing the fire with the professional crisis-competence she'd developed across fifteen years of political emergencies, that she saw Lucien at the far end of the hallway.",
      "He was standing very still. Watching. In the orange light of the fire his face was clear and unguarded in a way she had not seen it in years, perhaps in decades, the composed strategic mask he wore constantly had been removed by something, and what she saw underneath it was an expression she could not quite read. Something between relief and rapture.",
      "He noticed her noticing and the mask came back immediately, perfectly fitted.",
      '"I heard the alarm," he said. "I was coming to help."',
      '"You were very still for someone coming to help."',
      '"I was assessing."',
      "The fire department came quickly and the damage was contained. Half the south archive was gone. Most of what remained was water-damaged beyond recovery.",
      "In the morning, Lucien told them what he'd heard: Aurelius telling him to burn it, telling him that certain histories were infected and that the infected material needed to be excised before it could spread. He told them this calmly, as though reporting something that had happened to another person.",
      '"Do you believe that?" Elias asked.',
      '"I believe I heard it," Lucien said carefully. "I don\'t know that I acted on it."',
      "Neither cousin said the obvious thing. The obvious thing sat in the room with them like a fourth party.",
    ],
    byDialect: {
      tagalog: {
        lessonId: "tagalog_12",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      kapampangan: {
        lessonId: "kapampangan_12",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      waray: {
        lessonId: "waray_12",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
    },
  },
  {
    id: 13,
    title: "Chapter 13: The Town Festival",
    body: [
      "The festival was Selene's idea, and she planned it with a thoroughness that was, in retrospect, a form of magical thinking, the belief that sufficient competence could override whatever it was that kept unraveling their attempts at redemption.",
      "She coordinated with the town events committee, hired the entertainers, arranged the food stalls, secured the insurance. She managed every logistical variable she could identify. She could not manage what she could not see.",
      "The lights went first, the strings of bulbs that had been hung between the market stalls blowing their fuses at eleven in the morning, two hours before the event opened, leaving the square lit only by the flat November sky. The electricians couldn't find the fault.",
      "Then the children. Three of them went missing for forty minutes in the early afternoon — causing the frantic searching, the radioed alerts, the parents' faces cycling through terror toward fury, before they were found in the church, perfectly calm, sitting in the front pew. When asked what they'd been doing, all three said, with small variations, that a man had asked them to come inside because it was going to rain. It did not rain.",
      "The animals died quietly, distributed across the event: a dog collapsed near the entrance gate, two horses being led in a demonstration fell simultaneously in the street, a stand selling rabbits found all four of its animals still and cold before the afternoon was over. No clear cause was established.",
      "The Vale family was not blamed for any of this in any specific, actionable way. They were blamed in the more durable way, the way that requires no evidence because it is sustained by atmosphere rather than argument: they were blamed because they were there, because they had organized it, because things went wrong when the Vales were involved. This was what cursed meant, in the town's vocabulary. Not supernatural. Just, reliably unlucky. Or something worse than unlucky.",
      "Corrupted, someone wrote on the fence. Corrupted in the blood.",
    ],
    byDialect: {
      tagalog: {
        lessonId: "tagalog_13",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      kapampangan: {
        lessonId: "kapampangan_13",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      waray: {
        lessonId: "waray_13",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
    },
  },
  {
    id: 14,
    title: "Chapter 14: Elias Starts Changing",
    body: [
      "It was Selene who first noticed the phrasing.",
      "Elias had always spoken with a certain earnest imprecision, the language of someone whose ideas moved faster than his capacity to formalize them, sprawling and warmhearted and occasionally brilliant. She had loved this about him when they were children. She had condescended to it as an adult. She was now, watching it disappear, reconstructing its value with the retrospective clarity of someone who has lost something before understanding what it was.",
      "He began using different constructions. Archaic formulations that sat oddly in his mouth: the blood demands it where he would previously have said we have to; the family's proper order where he would have said what's fair. The vocabulary of inheritance and bloodline and legacy, the vocabulary of Aurelius.",
      "His handwriting changed. She found a note he'd left on the kitchen table and stood holding it for several seconds, certain it was something she'd found in the archive, before recognizing his name at the bottom.",
      "The voice was the last to change, and the most disturbing. It happened twice in her presence, and both times briefly, a register shift, a slight alteration of cadence, something entering and departing the way weather moves through an open room. Elias himself seemed unaware of it. He would stop mid-sentence, resume, continue as if nothing had happened, while Selene sat across from him and worked very hard to keep her face composed.",
      "She went to Lucien's room that night.",
      '"He\'s being possessed," she said.',
      '"He\'s having a psychological episode," Lucien said. "Under extraordinary stress, people—"',
      '"Lucien. His handwriting."',
      "A silence.",
      '"I know," he said. "I\'ve noticed."',
      '"And?"',
      "\"And I don't know what to do about it that doesn't make it worse. Every time we engage with this directly, it escalates. You read Gwendolen's journal.\"",
      "Selene stared at the wall. The whispers moved through the house like a tide that had learned the floor plan.",
    ],
    byDialect: {
      tagalog: {
        lessonId: "tagalog_14",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      kapampangan: {
        lessonId: "kapampangan_14",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      waray: {
        lessonId: "waray_14",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
    },
  },
  {
    id: 15,
    title: "Chapter 15: The Crypt",
    body: [
      "They found the lake's surface perfectly still on the morning they crossed it.",
      "A local map, pre-1900, from the church's collection, marked a family vault beneath the lake's north end with the annotation submerged during the flood of 1852. What the map could not convey was the quality of the water at this particular spot, the way it went cold suddenly and stayed cold, the way nothing grew at the bottom, the way the light seemed to bend slightly differently here as though the geometry of the place was subtly wrong.",
      "Elias rented diving equipment from a shop two towns over and went down alone, which the others only discovered afterward. He was underwater for twenty-two minutes and when he surfaced his face had the expression of someone who had seen something that had permanently redistributed his sense of what the world contained.",
      "Inside the crypt, he told them, was a stone sarcophagus carved with the Vale crest. The lid was open. The interior was empty except for a length of chain, heavy links, old iron, fixed to the stone at both ends, curved in the shape of a body that was no longer there.",
      '"The chain wasn\'t restraining anything," Elias said. "It was arranged too carefully for restraint. It was, ceremonial. Like a marking. Like where something had been placed that no longer needed to be placed there."',
      '"Because it\'s already here," Selene said.',
      "None of them asked what she meant by here. They understood her perfectly.",
    ],
    byDialect: {
      tagalog: {
        lessonId: "tagalog_15",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      kapampangan: {
        lessonId: "kapampangan_15",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      waray: {
        lessonId: "waray_15",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
    },
  },
  {
    id: 16,
    title: "Chapter 16: The Bargain",
    body: [
      "The priest arrived unannounced on a Tuesday and refused to leave until someone spoke with him.",
      "He was very old, with the specifics of his denomination unclear, his collar was right but something about him, his economy of movement, his stillness, suggested an affiliation with an older institutional memory than any current church could claim. He sat in the front parlor and drank the tea Maren brought him and waited.",
      "He told them what he knew in plain language that declined to make itself either dramatic or reassuring.",
      "The curse, he said, was not a thing that had been done to the Vale family. It was a thing the Vale family had done. Lord Aurelius had constructed it, not with ceremony, not with anything theatrical, but with intention and reiteration, the sustained act of teaching every generation that fear was the appropriate context for loyalty, that threat was the appropriate mechanism of cohesion. The whispers were the residue of that teaching. Every time a Vale heir believed the whispers, every time they acted on them, they renewed the pattern. Every time they tried to defeat it, they engaged with it more deeply, which was a form of the same thing.",
      '"If the family abandoned the inheritance," the priest said, "and truly abandoned it, walked away, made no claim, let the name dissolve, the whispers might stop. There is no guarantee. But the feeding would cease."',
      "He looked at each of them.",
      '"Might," Selene noted.',
      '"Might," he confirmed.',
      "None of them spoke for a long time after that. The fire crackled. Outside, the afternoon had gone gray in the way December afternoons in this part of the country go gray, which is completely and without drama and as though they had never been anything else.",
      '"No," Lucien said eventually.',
      '"I can\'t," Elias said.',
      "Selene said nothing, which was a different kind of answer.",
      "The priest stood, put on his coat, and left. He did not leave a card. They did not see him again.",
    ],
    byDialect: {
      tagalog: {
        lessonId: "tagalog_16",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      kapampangan: {
        lessonId: "kapampangan_16",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      waray: {
        lessonId: "waray_16",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
    },
  },
  {
    id: 17,
    title: "Chapter 17: The Blackmail Files",
    body: [
      "The documents were stored in the east wing, in a cabinet she had overlooked during her initial search because it had been built into the wall to resemble a section of wainscoting. She found it when the panel came loose one evening while she was leaning against it.",
      "There were forty years of files. Perhaps more.",
      "The systematic recording of private information, affairs, debts, medical histories, professional failures, for use against the town's institutions. Against the council members who had tried to hold the family accountable. Against the journalists who had investigated. Against the local judge who had been scheduled to hear a case against the family in 1971 before withdrawing from it abruptly and never explaining why.",
      "The Vale family's public standing, the thing their grandmother had named as the only currency that endured, the thing the inheritance required them to restore, had been constructed entirely on the ability to make people afraid. Not admiration. Fear, correctly applied.",
      "Selene sat on the floor of the east wing with the files spread around her and felt the particular nausea of realizing that you have been working toward the reconstruction of something that should not be reconstructed.",
      "She photographed everything. All of it. She put the photographs on an encrypted drive and hid the drive. She sat with what she was considering for two weeks, across which the whispering offered her eleven different interpretations of why she should not do it, all of them technically true, all of them serving Aurelius.",
      "She began drafting an anonymous submission to the regional paper.",
    ],
    byDialect: {
      tagalog: {
        lessonId: "tagalog_17",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      kapampangan: {
        lessonId: "kapampangan_17",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      waray: {
        lessonId: "waray_17",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
    },
  },
  {
    id: 18,
    title: "Chapter 18: The Hallucinations",
    body: [
      "December deepened and the house rearranged itself.",
      "Not dramatically, or not always dramatically. Sometimes it was simply a door standing open that you were certain you had shut. Sometimes a room felt differently proportioned than you remembered it, the ceiling slightly lower, the window in a different position relative to the desk. Sometimes you walked into a room and found it furnished differently, recognized the difference, blinked, and found it restored to its normal configuration in the second look.",
      "The dead appeared at irregular intervals. Selene saw her grandmother at the end of the corridor three times, standing and watching, patient as a portrait. Lucien refused to describe what he was seeing. Elias, with the directness that had begun to characterize him, said he found Aurelius standing in his room some mornings, at the foot of the bed, and that they sometimes spoke until it became unclear whether he'd been asleep or awake during the conversation, and that the conversations were interesting.",
      "The real question, the one none of them could anchor, was what was the house and what was themselves. Whether the rooms were changing or the perception of rooms was changing. Whether the dead were in the hallways or in their minds, and whether that distinction had any remaining practical significance.",
      "Selene kept meticulous notes. She cross-referenced her entries with Elias's, where Elias could be persuaded to share them. The overlaps were more frightening than the divergences. There were things they were both seeing, at similar times, that they had not discussed with each other.",
      "The notes helped her feel less afraid. She understood that feeling less afraid was not the same as being less afraid, but she took the comfort anyway.",
    ],
    byDialect: {
      tagalog: {
        lessonId: "tagalog_18",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      kapampangan: {
        lessonId: "kapampangan_18",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      waray: {
        lessonId: "waray_18",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
    },
  },
  {
    id: 19,
    title: "Chapter 19: Lucien's Secret",
    body: [
      "The boy's name had been Marcus Hale, and he had been twenty-three years old, and he had been a private investigator hired by a journalist who had somehow discovered that the Vale family's largest trust fund had been built, in the 1980s, on a pattern of estate fraud.",
      "Lucien had been twenty-five. Marcus Hale had come to the estate to photograph documents, had been found doing so, and the confrontation on the north staircase had lasted less than two minutes and had ended badly. It had been, in the immediate aftermath, possible to believe it was an accident. The stairs were steep. The rain had come in through the open window. These things happened.",
      "The journalist had withdrawn the story. The investigation had closed. Marcus Hale was listed as an accident and the case was never opened.",
      "Lucien had not spoken of it to anyone in six years. He had become very good at not speaking of it, and then very good at not thinking of it, and then, over time, very good at locating it in a part of himself that was separate from the part that went about daily life.",
      "Aurelius had found it on his second night in the house.",
      "The voice did not threaten. It simply reminded. With the metronomic consistency of a particularly patient form of torture, it returned him to the north staircase, to the specific geometry of the moment, to the particular angle of the fall, at intervals he could not predict and could not defend against, during the day, in meetings, at dinner, at three in the morning, on the stairs themselves when he could not avoid crossing them.",
      "He had begun to wonder whether he deserved this.",
      "He had begun to wonder whether what he was experiencing was a curse or a conscience that had found a more effective delivery mechanism.",
    ],
    byDialect: {
      tagalog: {
        lessonId: "tagalog_19",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      kapampangan: {
        lessonId: "kapampangan_19",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      waray: {
        lessonId: "waray_19",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
    },
  },
  {
    id: 20,
    title: "Chapter 20: The Voice Beneath the Lake",
    body: [
      "Elias was the one who heard it from the water, but Selene was the one who found the official record.",
      "A county archive, accessed remotely, late at night, contained a surveying document from 1967 citing an anomaly in the lake's geology: the discovery, during a drainage survey, of what appeared to be a submerged structure containing multiple human remains. The survey had been terminated and the document filed under a designation that Selene needed three days to decode as the administrative equivalent of not for public review.",
      "Six remains. All in the same area, near the crypt. All exhibiting, according to the brief notes the surveying team had recorded before stopping, evidence of deliberate placement.",
      "Chained together.",
      "The document listed their probable dates, calculated from depth and sedimentation, as spanning three centuries. One from the 1700s. Two from the 1800s. Three from the twentieth century, the most recent estimated as late as the 1950s.",
      "She did not tell Elias or Lucien about this immediately. She sat with it for two days, reordering what she understood about the family's history. The contract in the chapel, offered. The records she'd found of heirs who had simply stopped appearing in the family tree, attributed to emigration or illness. The fourth branch, erased.",
      "The lake's whisper, which Elias described as a choir, many voices, patient and deep, was the sound, she now believed, of the people who had been fed to this thing across three hundred years.",
      "She told her cousins on a Wednesday evening. Elias received the information with the focused calm that had increasingly replaced his former emotionalism. Lucien received it with no visible expression at all.",
      '"How many more are down there?" Elias said.',
      '"The survey found six," Selene said. "That\'s only 1967. They stopped."',
    ],
    byDialect: {
      tagalog: {
        lessonId: "tagalog_20",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      kapampangan: {
        lessonId: "kapampangan_20",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      waray: {
        lessonId: "waray_20",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
    },
  },
  {
    id: 21,
    title: "Chapter 21: The Public Trial",
    body: [
      "The journalist's name was Carver, and he had been working on the Vale family for two years before he had enough to publish.",
      "The piece ran across four days in the regional paper, simultaneously picked up by two national outlets that gave it the reach the family could not contain. It was comprehensive, sourced, and almost gentle in its presentation of its conclusion, the blackmail files, the estate fraud, the political interference, the accumulation of institutional relationships built on leverage rather than legitimacy. Carver's prose was measured and precise and he let the facts do the work that melodrama would have done less effectively.",
      "The family's response was orchestrated by Lucien over seventy-two sleepless hours. They gave an interview. They made donations, large and public. They released a statement of contrition that Selene wrote and Elias modified and Lucien approved with changes. They hired a crisis management firm. They appeared together at three public events with the practiced solidarity of people who have agreed on a story.",
      "Everything backfired.",
      "Not because the response was wrong, Selene thought the response was actually good, professionally speaking. It backfired because the public was no longer interested in rehabilitation. The accumulated weight of the preceding months, the failed dinner, the disastrous festival, the effigies, the protests, the general sense of a family that operated as a zone of concentrated ill fortune, had crossed some threshold. People were no longer weighing the evidence. They had reached a verdict.",
      "The town held a public meeting. The Vale family was not invited. Several council members attended who had never previously attended public meetings on any subject.",
      "In the estate, the whispers had become so constant that silence felt like the presence of something, not its absence. They had all stopped remarking on it. It was simply weather now, the acoustics of their lives.",
    ],
    byDialect: {
      tagalog: {
        lessonId: "tagalog_21",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      kapampangan: {
        lessonId: "kapampangan_21",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      waray: {
        lessonId: "waray_21",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
    },
  },
  {
    id: 22,
    title: "Chapter 22: The Ancestor's Truth",
    body: [
      "The journal that told the truth about Aurelius was not in the house.",
      "It was in the church registry, in a section labeled pastoral correspondence, private that the vicar had permitted Selene to examine as part of what he understood as historical research. The letter was addressed to a clergyman who had served the parish in Aurelius's time, from a family member whose relationship to the household was recorded as secretary to the Lord.",
      "The secretary had witnessed the original construction. Not of a curse, of a system.",
      "Lord Aurelius Vale had believed, with the conviction of a man who had built an empire through strategic fear, that love was insufficient as a mechanism of family loyalty. Love was contingent, emotional, unreliable. Fear was structural. A family that feared its own dissolution, that heard in the walls the voices of disappointed ancestors, that knew through some deep atmospheric pressure that deviation from the family's values meant psychological consequence, such a family would remain cohesive across generations in a way that affection could never produce.",
      "He had not been cursed. He had designed the curse. He had taught it to his children, his children had taught it to theirs, and the teaching had become so thorough and so long-practiced that it had transcended instruction and become something inherited, something coded into the specific emotional grammar of the Vale bloodline.",
      "He had believed he was doing something good.",
      "He had believed it so completely that the belief itself had become part of what was passed down.",
      "Selene read the letter twice and then sat in the church for a while, thinking about what it means to love something so much that you make it terrible to protect it.",
    ],
    byDialect: {
      tagalog: {
        lessonId: "tagalog_22",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      kapampangan: {
        lessonId: "kapampangan_22",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      waray: {
        lessonId: "waray_22",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
    },
  },
  {
    id: 23,
    title: "Chapter 23: Selene Betrays Them",
    body: [
      "She sent the files on a Thursday evening, from a borrowed computer, through an anonymizing service. The blackmail records. The estate fraud documentation. The survey of the lake. Everything she had found over four months in this house.",
      "She did not tell herself she was doing something heroic. She had been in politics long enough to recognize the complex ecology of a decision, the mix of principle and self-interest and exhaustion and the simple desire to have it be over, however it ended. She sent the files because they deserved to be sent, and because she could no longer participate in their suppression, and because some part of her was also sick of this house and this family and this competition and wanted to end it by making the prize not worth having.",
      "She was in her room when Lucien found her. He had seen the sending confirmation on the shared archive computer, which she had not thought to clear.",
      "The physical violence was brief and controlled and almost worse for being controlled, the cold efficiency of it, the sense that he had been managing this impulse for a very long time and had finally made a calculation about cost. She was on the floor by the time Elias arrived.",
      "Elias was not large, and he was not aggressive, and he had spent several weeks in a state she and Lucien had privately categorized as psychologically compromised. He was also, in that moment, entirely clear-eyed and specific in the way that people become in genuine emergencies, all the ambiguity burned off.",
      "He put himself between them. He did not speak loudly.",
      "Lucien looked at the two of them, Selene on the floor, Elias upright between her and him, and the expression on his face was terrible to see. Not anger. Something past anger. He left the room.",
      "Elias helped Selene up. Neither of them said anything for a long time.",
      '"I knew he would find out," she said.',
      '"I know," Elias said.',
      '"I sent them anyway."',
      '"I know," he said again, and something in his voice made her look at him, something that was not quite his voice, or was his voice and something layered underneath it, and she looked at his face for signs of possession and could not be certain what she was seeing.',
      '"Are you all right?" she said.',
      '"I don\'t know," he said honestly. "Are you?"',
    ],
    byDialect: {
      tagalog: {
        lessonId: "tagalog_23",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      kapampangan: {
        lessonId: "kapampangan_23",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      waray: {
        lessonId: "waray_23",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
    },
  },
  {
    id: 24,
    title: "Chapter 24: The Whisper Choir",
    body: [
      "After Selene's leaking broke the last of the family's public standing, the whispers stopped being individual.",
      "It was hard to describe precisely, and all three of them described it differently, but the consensus was something like: Aurelius had been a soloist. What came now was not a chorus in any harmonious sense but a crowd, overlapping voices, competing cadences, the specific layered noise of many presences all speaking at the same time in a space not designed for them. As though every generation's accumulated transmission had been activated simultaneously.",
      "The house sounded alive. Not metaphorically. The walls had a quality of sustained vibration that you could feel through your palm if you pressed it flat against the plaster, the way you feel a motor running through a car's chassis.",
      "None of them slept.",
      "Lucien paced. Selene worked. Elias sat in the portrait corridor and listened.",
      '"Is it getting worse?" Lucien asked her once, in the kitchen at four in the morning.',
      '"It\'s getting denser," she said. "Which is not the same thing. Though it might amount to the same thing."',
      "He stood at the window looking out at the dark grounds, the lake glinting faintly beyond the tree line.",
      '"I used to be able to function," he said, in a voice that was attempting to be matter-of-fact and not quite succeeding. "Even with the whispers. I could compartmentalize. I could—" He stopped. "I don\'t know where the voice ends and where I begin anymore."',
      "Selene looked at her cousin in the kitchen light and saw something she had been refusing to see for weeks: he was frightened. Not strategically, not performatively. Frightened. In the way that you are frightened when the architecture of your identity starts losing its load-bearing walls.",
      "She put her hand on his arm.",
      "He looked at it. He did not pull away.",
    ],
    byDialect: {
      tagalog: {
        lessonId: "tagalog_24",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      kapampangan: {
        lessonId: "kapampangan_24",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      waray: {
        lessonId: "waray_24",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
    },
  },
  {
    id: 25,
    title: "Chapter 25: The Hidden Contract",
    body: [
      "The contract was in the underground chapel.",
      "Elias found it because he had been spending more time in the chapel than anyone knew — more than was, perhaps, strictly advisable. He had begun to find the chapel calming in a way that the rest of the house was not, and he had some intellectual awareness that finding a room constructed for ancestral sacrifice calming was a data point of concern, but the calm was real and he needed it.",
      "The document was inlaid beneath the central stone, not hidden, exactly, but placed where only someone who knew to look, or someone who had been guided, would find it.",
      "Every generation. Every heir. A signature, and a date. Stretching from Aurelius's original inscription to a signature dated 1987, eighteen years before the current cousins had been born, in their grandmother's hand.",
      "I accept the terms of the legacy and continue its provision.",
      "They had been told they were cursed. They had been raised on that story, all three of them, in different degrees of directness. The ghost, the family madness, the voices in the walls, it was the narrative they had inherited along with the name.",
      "What the contract said was simpler and more appalling: every generation had known, or learned, and had chosen anyway. Had signed, had continued, had passed the inheritance down along with its terms.",
      "Nobody had been trapped. Everyone had chosen.",
      '"She signed this," Elias said, holding the page. "Grandmother."',
      '"Eighteen years before we were born," Selene said. "She knew what we were coming into."',
      '"She left us a will that made it a competition," Lucien said, his voice very flat. "She set us against each other from the beginning. She was feeding it. Even at the end."',
      "The fire in the chapel's single remaining sconce went out. The darkness was complete.",
    ],
    byDialect: {
      tagalog: {
        lessonId: "tagalog_25",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      kapampangan: {
        lessonId: "kapampangan_25",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      waray: {
        lessonId: "waray_25",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
    },
  },
  {
    id: 26,
    title: "Chapter 26: Elias Accepts Aurelius",
    body: [
      "The change was not sudden. That was what made it so difficult to respond to, there was no single moment of conversion, no dramatic before and after. It was the slow replacement of one orientation with another, the way a ship changes course by degrees until it's heading somewhere entirely different from where it began.",
      "Elias began arguing for Aurelius.",
      "Not for the violence or the fraud or the lake, he was careful to specify. For the principle, the underlying conviction that a family required a structure of consequence, that love was insufficient, that the strong transmission of identity across generations required a form of pressure that ordinary affection couldn't provide.",
      '"He was wrong about the methods," Elias said, during what had become their nightly kitchen discussions. "But was he wrong about the problem?"',
      '"Yes," Selene said.',
      '"Think about it carefully. Look at any family that survived across centuries as an institution. Look at what it takes to maintain identity across generations. People drift. People individualize. People forget. Some mechanism of—"',
      '"Fear," Selene said. "The mechanism is fear. You\'re arguing for fear."',
      '"I\'m arguing for inheritance," Elias said. He was very calm. "Fear keeps families strong."',
      "The phrase fell into the room with a specific gravity. Selene recognized it. It was from the journals. It was from a letter Aurelius had written in 1802.",
      '"Elias," she said.',
      "He met her eyes. His were clear and focused and certain in a way that she found more frightening than any dissociation she'd observed in him previously.",
      '"He was lonely," Elias said. "That\'s what nobody says about him. He built all of this because he was terrified of being forgotten."',
    ],
    byDialect: {
      tagalog: {
        lessonId: "tagalog_26",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      kapampangan: {
        lessonId: "kapampangan_26",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      waray: {
        lessonId: "waray_26",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
    },
  },
  {
    id: 27,
    title: "Chapter 27: The Town Revolt",
    body: [
      "The townspeople came on the first of January, in the new year's cold and dark.",
      "Not a mob, exactly, there was organization to it, a deliberateness. Someone had coordinated. Perhaps many people. They came with torches rather than phones, which suggested either a sense of theater or a sense that fire was appropriate to the occasion, and they came in enough numbers that the estate's grounds held them easily, the crowd spreading across the lawns like weather.",
      "The Vale family had perhaps forty minutes of warning. Selene spent them on the phone to the police, who told her they were aware of the situation and would respond as appropriate. Lucien spent them standing at the window in a state she could no longer diagnose, catatonia, or something indistinguishable from it. Elias made tea.",
      "The fire started in the east wing, which had burned before and seemed to know how.",
      "The house burned in a way that seemed almost cooperative, old wood, dry after a decade of neglect, committed to the task. The fire moved through the east wing and into the south corridor and then the house became primarily smoke, the cousins retreating room by room as each became untenable, until they were in the main hall with the fire on three sides and the front door behind them and the crowd outside.",
      "The crowd had gone quiet. The fire was making noise enough for everyone.",
      '"We have to go out," Selene said.',
      '"If we go out," Lucien said, from his window, "it\'s over."',
      '"It\'s already over," she said.',
    ],
    byDialect: {
      tagalog: {
        lessonId: "tagalog_27",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      kapampangan: {
        lessonId: "kapampangan_27",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      waray: {
        lessonId: "waray_27",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
    },
  },
  {
    id: 28,
    title: "Chapter 28: The Final Attempt",
    body: [
      "They tried, even then.",
      "It was Lucien's idea and they all participated because there was nothing left to lose and because desperation is its own coherent logic. He had concluded, with the clarity of a man who had been awake for four days and had run out of more nuanced analytical frameworks, that the curse was material, that it lived in the objects that encoded it, and that destroying those objects would destroy it.",
      "The portraits first. They burned. The smoke from them was darker than it should have been, with an organic quality, and the faces beneath the scored-out faces were briefly visible before they went to ash, the faces of people the family resembled, the same bones across two centuries, wearing different expressions.",
      "The journals. The contract. The carved stone floor of the chapel, which they attacked with hammers and could not break.",
      "The portraits reappeared on the walls.",
      "Not the same canvases, those were ash. New canvases, as though they had always been there, the paint dry and cracked with age. Selene stood in the smoke-thick corridor and looked at the painting of Aurelius and understood, with a completeness that felt like cold water, that Gwendolen had been right. That the curse was not in the objects. That the objects were just the way it expressed itself. That what they were fighting was in the specific shape their minds had been given by three hundred years of being this family, the way they processed threat, the way they understood loyalty, the way they heard the word inheritance and felt it as something precious and something terrible simultaneously.",
      "You could not burn a habit of mind. You could not chip through ancestral pedagogy with a hammer.",
      "The chapel floor did not break. They put down the hammers and stood in the smoke with their hands at their sides.",
    ],
    byDialect: {
      tagalog: {
        lessonId: "tagalog_28",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      kapampangan: {
        lessonId: "kapampangan_28",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      waray: {
        lessonId: "waray_28",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
    },
  },
  {
    id: 29,
    title: "Chapter 29: Lucien Goes Mad",
    body: [
      "He broke on the morning of the second day.",
      "The fire had been contained, not extinguished, exactly, but negotiated with, reduced to a few sections of the house still burning while the fire department worked and the cousins occupied the servants' quarters, which had been spared. Lucien had not slept. Had not, as far as Selene could observe, stopped talking to the voices since the night of the fire.",
      "He came for Elias with the fireplace poker from the servants' sitting room, at seven in the morning, in the specific focused manner of someone executing a plan they have decided on and do not intend to be dissuaded from. He had been told, he said, that Elias was already gone — that what sat in Elias's chair wearing Elias's face was a continuation of Aurelius, and that this was the solution the family had been failing to see.",
      "Selene had the shotgun. It was her grandmother's, from the cabinet in the groundskeeper's cottage, loaded with birdshot. She used it and did not hesitate.",
      "The shot caught Lucien in the shoulder and put him down and he lay on the floor of the servants' sitting room making sounds that were not language for several minutes, and Elias knelt beside him and held his non-injured arm and said his name quietly until the sounds became something more like crying, which was better, which was something recognizable and human that could be worked with.",
      "Selene sat in the armchair with the gun across her knees.",
      "She had not, she thought, been afraid while she did it. That frightened her more than the act had.",
    ],
    byDialect: {
      tagalog: {
        lessonId: "tagalog_29",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      kapampangan: {
        lessonId: "kapampangan_29",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      waray: {
        lessonId: "waray_29",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
    },
  },
  {
    id: 30,
    title: "Chapter 30: The Choice",
    body: [
      "The voice, not a whisper now, not a choir, simply a voice, single and clear, offered the bargain at dawn.",
      "Not dramatically. Not with ceremony. It simply became something that each of them knew, the way you know a change in the weather before you can name what's changed, the particular shift in the house's atmosphere from hostile to expectant, as though a question had been asked and was awaiting its answer.",
      "One of you continues the dynasty. One of you becomes the next voice, the next transmission, the next keeper of the legacy. That one inherits everything and lives. The other two are released. Or all three of you end here, unknown, forgotten, the dynasty dissolved. Choose.",
      "Selene felt the second option with a physical clarity, the clean sensation of a door marked exit, the relief of it, the simplicity. She was so tired. She had been fighting for months and had lost every battle and she could not, from where she was sitting, identify a version of victory that was still available. She thought about walking out of this house and never coming back. She thought about what it would mean for the blackmail files she'd sent, the truth she'd put into the world, whether that could stand on its own, whether it needed her ongoing presence to mean anything.",
      "She thought it probably could.",
      "Lucien wanted survival. He had always wanted survival, underneath the strategy and the ambition and the family pride, there was a man who wanted, very simply, to continue. To be here. The inheritance was a means to that, nothing more.",
      "Elias sat by the window with the dawn light on his face and his expression was peaceful in the way that resolution is peaceful, which is different from happiness. He had spent four months with Aurelius inside his head and had understood things about the ancestor that the others hadn't, the loneliness that Elias had named, the terror of dissolution that had built a three-hundred-year machine to prevent it. He had understood it because he recognized it. He was twenty-four and drowning in debt and had always believed that the right conversation could fix anything, and what he had found instead was that the things you love the most are the ones that can most completely undo you.",
      "He turned from the window.",
      '"I\'ll do it," he said.',
    ],
    byDialect: {
      tagalog: {
        lessonId: "tagalog_30",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      kapampangan: {
        lessonId: "kapampangan_30",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      waray: {
        lessonId: "waray_30",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
    },
  },
  {
    id: 31,
    title: "Chapter 31: The Last Whisper",
    body: [
      "The fire took the rest of the house before evening.",
      "The fire department withdrew once it was established that there was nobody remaining inside. The crowd had dispersed in the early morning hours, after the drama of the previous night had resolved into the ordinary spectacle of a burning building; impressive at a distance, tedious up close. By noon, the Vale estate was a contained structural fire, methodically consuming its own history.",
      "Selene and Lucien were found by the road at the estate's edge, identified by the responding police, questioned, treated for minor smoke inhalation, and eventually released. Lucien's shoulder wound was treated at the county hospital. He gave a statement that was truthful in its facts and incomplete in its context, and the incompleteness was never investigated.",
      "Elias was not found.",
      "The fire report listed the south wing as the most severely damaged area and concluded that a complete accounting of the estate's contents was impossible given the extent of the destruction. A missing person report was filed for Elias Vale, twenty-four, last seen at the property. The case remained open for three years before being administratively suspended.",
      "Selene left the country.",
      "She took her encrypted drive and the research she had done over four months and she took the knowledge of what the family had been, and she published what could be published and gave the rest to institutions that could use it better than she could. She did not take the Vale name with her anywhere she went. She was not certain she had entirely left the whispers behind, occasionally, at three in the morning, in apartments in cities that had nothing to do with any of it, she would hear something in the architecture. The particular sound of a house thinking.",
      "She breathed through it. She slept.",
      "Lucien rebuilt. Not the estate, that was beyond recovery, but the other things: the businesses that had survived, the holdings that had not burned, the quiet accumulations of money and influence that he had always understood better than he understood people. He did not hear Aurelius anymore. He was not certain whether this was because something had ended or because he had finally, fully, become what Aurelius had always been grooming the family to produce, a man who no longer needed the whispers because he had internalized the lesson completely.",
      "He did not pursue this question.",
      "Seven years after the fire, a child in a large, prosperous family in the north of the country started waking at three in the morning from dreams she couldn't remember. She was eleven years old. She had never heard the name Vale. She could not have said where the voice came from — whether from the house, or from the blood, or from the specific way her family had taught her to understand what it meant to belong to something.",
      "You belong to me, it said.",
      "She pulled her blanket tighter.",
      "She did not tell anyone.",
      "The voice, patient as inheritance, prepared to begin again.",
      "Legacy survives.",
    ],
    byDialect: {
      tagalog: {
        lessonId: "tagalog_31",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      kapampangan: {
        lessonId: "kapampangan_31",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
      waray: {
        lessonId: "waray_31",
        terms: [], // TODO: add tappable word annotations
        translations: [], // TODO: one translated paragraph per body entry
      },
    },
  },
];

/**
 * Resolves the shared chapters for one dialect — flattens each
 * chapter's byDialect entry up to the top level, so screens get a flat
 * StoryChapter shape.
 */
export function getChaptersForDialect(dialect: StoryDialect): StoryChapter[] {
  return sharedChapters.map((chapter) => ({
    id: chapter.id,
    title: chapter.title,
    body: chapter.body,
    dialect,
    lessonId: chapter.byDialect[dialect].lessonId,
    terms: chapter.byDialect[dialect].terms,
    translations: chapter.byDialect[dialect].translations,
  }));
}

// =========================================================
// NOTE ON lessonIds
// =========================================================
// Every chapter's lessonId must exist in data/practiceData.ts, because
// the unlock check looks up `requiredCorrect` by lessonId. If a lesson
// is missing there, getRequiredCorrect() falls back to 0.
//
// 31 chapters x 3 dialects = 93 lesson entries for full coverage.
// Until those exist, chapters beyond the lessons you've actually
// authored stay locked (no progress row -> not complete), so nothing
// breaks — they're just not reachable yet.

// =========================================================
// NOTE ON TRANSLATIONS
// =========================================================
// `translations` must line up index-for-index with `body`:
//   body[3]         -> the English paragraph
//   translations[3] -> its dialect translation
//
// A shorter array is fine — missing entries render as English only.
// An empty string "" is also fine, same result. This lets you translate
// a chapter a few paragraphs at a time without breaking the screen.
//
// Scale check: 31 chapters x ~15 paragraphs x 3 dialects is roughly
// 1,400 paragraph translations. These need a fluent speaker per
// dialect — machine translation of literary prose into Kapampangan and
// Waray in particular will not hold up.
