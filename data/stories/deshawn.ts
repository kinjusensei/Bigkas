import type { SharedChapter, StoryDialect } from "../storyData";

// "Story for Deshawn" — source: docs/Story for deshawn.pdf.
//
// TITLE: working title. Rename the story here only; the list, chapters
// screen and reader all read it through storyData's sharedStories.
export const DESHAWN_STORY_TITLE = "Basic Story";

export const DESHAWN_STORY_ID = "deshawn";

// Chapter ids must be unique across ALL stories (Whispers uses 1–31), so
// this story uses 101–115. The reader shows "Chapter n" from the
// chapter's position in the story, not from this id.
const FIRST_CHAPTER_ID = 101;

// English source. Each sentence is one paragraph, and translations[i] must
// be the dialect version of sentences[i] (same order, same length) for
// Dialect / English / Both to pair up.
const chapters: { title: string; sentences: string[] }[] = [
  {
    title: "The Little Village",
    sentences: [
      "Once upon a time, there was a little village near a magical forest.",
      "A kind girl named Lily lived in a small house with her mother.",
      "Lily loved flowers, animals, and the stars in the sky.",
      "Every night, she looked at the stars before going to sleep.",
      "She dreamed of meeting a real fairy someday.",
    ],
  },
  {
    title: "The Strange Light",
    sentences: [
      "One night, Lily saw a bright light shining near the forest.",
      "She put on her shoes and went outside to look.",
      "The light moved between the trees like a tiny firefly.",
      "Lily followed it carefully because she was curious.",
      "Suddenly, she heard someone crying behind a big tree.",
    ],
  },
  {
    title: "The Little Fairy",
    sentences: [
      "Behind the tree, Lily found a little fairy with golden wings.",
      "The fairy sat on a rock and covered her face with her hands.",
      '"Why are you crying?" Lily asked gently.',
      '"I lost my magic star," the fairy answered.',
      "Without the star, she could not fly back to her home in the sky.",
    ],
  },
  {
    title: "A Promise to Help",
    sentences: [
      "Lily wanted to help the fairy find her lost star.",
      '"My name is Lily, and I will help you," she said with a smile.',
      "The fairy introduced herself as Stella.",
      "Stella told Lily that the star had fallen somewhere in the forest.",
      "Together, they began their search under the moonlight.",
    ],
  },
  {
    title: "The Talking Rabbit",
    sentences: [
      "As they walked, they met a white rabbit sitting beside a bush.",
      "The rabbit could talk because it was a magical animal.",
      '"Have you seen a little shining star?" Lily asked.',
      '"I saw something bright near the river," the rabbit replied.',
      "Lily and Stella thanked the rabbit and hurried toward the river.",
    ],
  },
  {
    title: "The Deep River",
    sentences: [
      "Soon, they reached a wide river with clear blue water.",
      "Lily saw a wooden bridge, but some of its boards were broken.",
      "Stella was too tired to use her wings to cross the river.",
      "Lily found a long branch and used it to help them cross safely.",
      "Stella smiled and thanked Lily for being brave.",
    ],
  },
  {
    title: "The Old Turtle",
    sentences: [
      "On the other side of the river, they met an old turtle.",
      "The turtle was resting beside a large rock.",
      '"I know where your star is," the turtle said slowly.',
      '"It fell near the Dark Mountain, where a giant sleeps."',
      "Lily felt afraid, but she decided not to give up.",
    ],
  },
  {
    title: "The Dark Mountain",
    sentences: [
      "Lily and Stella walked until they reached the Dark Mountain.",
      "Tall trees covered the path, and strange sounds came from the bushes.",
      "Stella held Lily's hand to make her feel safe.",
      "They soon saw a giant sleeping beside a pile of shiny stones.",
      "Among the stones was a small star glowing with golden light.",
    ],
  },
  {
    title: "The Sleeping Giant",
    sentences: [
      "Lily wanted to take the star, but the giant was very close.",
      "She slowly walked toward the pile of stones.",
      "Suddenly, a small rock fell from her pocket and hit the ground.",
      "The giant opened one eye and looked at the two friends.",
      '"Who dares to enter my mountain?" he asked in a loud voice.',
    ],
  },
  {
    title: "The Giant's Wish",
    sentences: [
      "Lily was shaking with fear, but she bravely explained their mission.",
      "Stella told the giant that she needed the star to return home.",
      "The giant looked sad instead of angry.",
      '"I took the star because I have been lonely for many years," he said.',
      "Lily felt sorry for him and wanted to find a way to help.",
    ],
  },
  {
    title: "A Kind Idea",
    sentences: [
      "Lily asked the giant if he wanted to be their friend.",
      "The giant looked surprised because nobody had asked him before.",
      "He smiled and promised to return Stella's star.",
      "Stella thanked him and offered to visit him whenever she could.",
      "For the first time in many years, the giant felt happy.",
    ],
  },
  {
    title: "The Magic Star",
    sentences: [
      "Stella picked up her star, and its golden light filled the mountain.",
      "Her wings began to shine brighter than ever before.",
      "She touched the star and whispered a magical word.",
      "Suddenly, beautiful flowers appeared all around the giant's home.",
      "The giant laughed with joy as he looked at the colorful flowers.",
    ],
  },
  {
    title: "The Journey Home",
    sentences: [
      "Lily and Stella said goodbye to the friendly giant.",
      "The white rabbit and the old turtle joined them on their journey.",
      "When they reached the village, the sun was beginning to rise.",
      "Stella told Lily that she would never forget her kindness.",
      "Lily felt happy because she had made wonderful new friends.",
    ],
  },
  {
    title: "The Fairy's Gift",
    sentences: [
      "Before leaving, Stella gave Lily a tiny silver necklace.",
      "The necklace had a small star that glowed in the dark.",
      '"This is a gift to thank you for helping me," Stella said.',
      "She promised that the necklace would remind Lily of their friendship.",
      "Lily hugged Stella as the little fairy flew into the sky.",
    ],
  },
  {
    title: "Happily Ever After",
    sentences: [
      "From that day on, Lily wore her silver necklace every day.",
      "Whenever she looked at the stars, she remembered her magical adventure.",
      "Stella often visited the village and brought gifts for Lily and her mother.",
      "The giant became their friend and planted flowers around his mountain.",
      "And so, Lily and her friends lived happily ever after.",
    ],
  },
];

// Tappable words per chapter number (1–15):
// [sentence, English, Tagalog, Kapampangan, Waray]. Each word is written as it
// appears in that sentence. These 9 words per chapter are also the chapter's
// practice words (data/story-practice/deshawn.ts); its tests check them.
//
// DRAFT, needs a speaker's review: the pairings were worked out by comparing
// the English with each language's text. Tagalog and Waray come from the
// drafted translations below.
export type DeshawnTermRow = [number, string, string, string, string];

export const deshawnTermRows: Record<number, DeshawnTermRow[]> = {
  1: [
    [0, "village", "nayon", "baryu", "baryo"],
    [0, "forest", "gubat", "gubat", "kagurangan"],
    [1, "mother", "ina", "indu", "nanay"],
    [1, "kind", "mabait", "mabait", "buotan"],
    [1, "house", "bahay", "bale", "balay"],
    [2, "flowers", "bulaklak", "sampaga", "bukad"],
    [2, "sky", "langit", "banua", "langit"],
    [3, "night", "gabi", "bengi", "gab-i"],
    [4, "fairy", "diwata", "lara", "diwata"],
  ],
  2: [
    [0, "light", "ilaw", "sula", "suga"],
    [0, "bright", "maliwanag", "masalang", "masanag"],
    [0, "shining", "kumikinang", "sisila", "nasirak"],
    [1, "shoes", "sapatos", "sapatus", "sapatos"],
    [2, "trees", "puno", "tanaman", "kahoy"],
    [2, "firefly", "alitaptap", "alitaptap", "aninipot"],
    [3, "followed", "sinundan", "Tutukian", "ginsunod"],
    [4, "crying", "umiiyak", "mag-gaga", "nagtatangis"],
    [4, "big", "malaking", "maragul", "dako"],
  ],
  3: [
    [0, "wings", "pakpak", "pakpak", "pako"],
    [0, "fairy", "diwata", "lara", "diwata"],
    [0, "golden", "gintong", "gintu", "bulawan"],
    [1, "rock", "bato", "batu", "bato"],
    [1, "face", "mukha", "lupa", "bayhon"],
    [1, "hands", "kamay", "gamat", "kamot"],
    [3, "star", "bituin", "batwin", "bituon"],
    [4, "fly", "makakalipad", "makasulapo", "makakalupad"],
    [4, "home", "tahanan", "bale", "balay"],
  ],
  4: [
    [0, "help", "tulungan", "saupan", "buligan"],
    [1, "smile", "nakangiti", "maki-gili", "nakangirit"],
    [2, "introduced", "Nagpakilala", "Pinakilala", "Nagpakilala"],
    [3, "fallen", "nahulog", "mabaldug", "nahulog"],
    [3, "star", "bituin", "batwin", "bituon"],
    [3, "forest", "gubat", "gubat", "kagurangan"],
    [4, "search", "paghahanap", "paintunan", "pagbiling"],
    [4, "moonlight", "liwanag ng buwan", "sala ning bulan", "sanag han bulan"],
    [4, "began", "sinimulan", "megumpisa", "nagtikang"],
  ],
  5: [
    [0, "white", "puting", "maputing", "busag"],
    [0, "rabbit", "kuneho", "kunehu", "kuneho"],
    [0, "walked", "naglalakad", "lumalakad", "naglalakat"],
    [1, "animal", "hayop", "animal", "hayop"],
    [1, "magical", "mahiwagang", "madyik", "mahika"],
    [2, "star", "bituin", "batwin", "bituon"],
    [3, "bright", "maliwanag", "masalang", "masanag"],
    [3, "river", "ilog", "ilug", "salog"],
    [4, "thanked", "Nagpasalamat", "Pinasalamatan", "Nagpasalamat"],
  ],
  6: [
    [0, "wide", "malapad", "malapad", "halapad"],
    [0, "water", "tubig", "danum", "tubig"],
    [0, "river", "ilog", "ilug", "salog"],
    [1, "bridge", "tulay", "tulay", "taytay"],
    [1, "broken", "sira", "makasira", "guba"],
    [1, "wooden", "kahoy", "dutung", "kahoy"],
    [2, "wings", "pakpak", "pakpak", "pako"],
    [3, "branch", "sanga", "sanga", "sanga"],
    [3, "long", "mahabang", "makabang", "hataas"],
  ],
  7: [
    [0, "old", "matandang", "matuang", "tigurang"],
    [0, "turtle", "pagong", "pau", "bao"],
    [0, "river", "ilog", "ilug", "salog"],
    [1, "large", "malaking", "maragul", "dako"],
    [1, "resting", "Nagpapahinga", "Magpahingalu", "Nagpapahuway"],
    [1, "rock", "bato", "batu", "bato"],
    [3, "Dark Mountain", "Madilim na Bundok", "Madalumdum a Bunduk", "Madulom nga Bukid"],
    [3, "giant", "higante", "higante", "higante"],
    [4, "afraid", "Natakot", "Takut", "Nahadlok"],
  ],
  8: [
    [1, "Tall", "matataas", "Matas", "hatag-as"],
    [1, "path", "daan", "dalan", "agianan"],
    [1, "trees", "puno", "tanaman", "kahoy"],
    [2, "safe", "ligtas", "ligtas", "luwas"],
    [2, "hand", "kamay", "gamat", "kamot"],
    [3, "shiny", "makikintab", "masalang", "masirak"],
    [3, "stones", "bato", "batu", "bato"],
    [3, "pile", "tumpok", "tumpuk", "tambak"],
    [4, "glowing", "kumikinang", "sisila", "nasirak"],
  ],
  9: [
    [0, "star", "bituin", "batwin", "bituon"],
    [2, "pocket", "bulsa", "bulsa", "bulsa"],
    [2, "ground", "lupa", "gabun", "tuna"],
    [2, "rock", "bato", "batu", "bato"],
    [3, "eye", "mata", "mata", "mata"],
    [3, "opened", "Iminulat", "Biklat", "Ginmuklat"],
    [4, "loud", "malakas", "maragul", "makusog"],
    [4, "voice", "tinig", "boses", "tingog"],
    [4, "mountain", "bundok", "bunduk", "bukid"],
  ],
  10: [
    [0, "fear", "takot", "takut", "kahadlok"],
    [0, "shaking", "Nanginginig", "Gagalgal", "Nagkukurog"],
    [1, "needed", "kailangan", "kailangan", "kinahanglan"],
    [2, "sad", "malungkot", "Malungkot", "Masubo"],
    [2, "angry", "galit", "mimua", "masina"],
    [3, "lonely", "nag-iisa", "malungkutan", "nag-iinusara"],
    [3, "years", "taon", "banua", "katuigan"],
    [4, "sorry", "Naawa", "Melunus", "Naluoy"],
    [4, "way", "paraan", "paralan", "paagi"],
  ],
  11: [
    [0, "friend", "kaibigan", "kaluguran", "sangkay"],
    [0, "asked", "Tinanong", "Kitang", "Ginpakianhan"],
    [0, "giant", "higante", "higante", "higante"],
    [1, "surprised", "Nagulat", "Nabigla", "Nahingangha"],
    [2, "smiled", "Ngumiti", "Mining gili", "Nangirit"],
    [2, "promised", "nangakong", "nangako", "nagsaad"],
    [3, "thanked", "Nagpasalamat", "Pinasalamatan", "Nagpasalamat"],
    [3, "visit", "dadalawin", "bisitan", "bibisitahon"],
    [4, "happy", "masaya", "masaya", "nalipay"],
  ],
  12: [
    [0, "golden light", "gintong liwanag", "gintung sula", "bulawan nga sanag"],
    [0, "star", "bituin", "batwin", "bituon"],
    [1, "wings", "pakpak", "pakpak", "pako"],
    [1, "shine", "kuminang", "sumila", "pagsirak"],
    [2, "word", "salita", "salita", "pulong"],
    [2, "touched", "Hinawakan", "Tinagkilan", "Ginhikap"],
    [3, "beautiful flowers", "magagandang bulaklak", "masampagang sampaga", "mahusay nga mga bukad"],
    [4, "joy", "tuwa", "tula", "kalipay"],
    [4, "colorful", "makukulay", "maki-kuleng", "mabulokon"],
  ],
  13: [
    [0, "goodbye", "Nagpaalam", "Miki-paalam", "Nagpaalam"],
    [1, "journey", "paglalakbay", "panyalungat", "biyahe"],
    [1, "rabbit", "kuneho", "kunehu", "kuneho"],
    [1, "turtle", "pagong", "pau", "bao"],
    [2, "sun", "araw", "aldo", "adlaw"],
    [2, "village", "nayon", "baryu", "baryo"],
    [3, "kindness", "kabutihan", "kabaitan", "pagkabuotan"],
    [3, "forget", "malilimutan", "kalinguan", "makakalimtan"],
    [4, "friends", "kaibigan", "kaluguran", "sangkay"],
  ],
  14: [
    [0, "silver", "pilak", "pilak", "pilak"],
    [0, "necklace", "kuwintas", "kuentas", "kwintas"],
    [0, "gave", "binigyan", "dininan", "ginhatagan"],
    [1, "dark", "dilim", "kadalumduman", "kadudulman"],
    [1, "star", "bituin", "batwin", "bituon"],
    [2, "gift", "Regalo", "Kalo", "Regalo"],
    [3, "promised", "Nangako", "Nangako", "Nagsaad"],
    [4, "hugged", "Niyakap", "Pengulutan", "Ginkugos"],
    [4, "flew", "lumilipad", "susulapo", "nalupad"],
  ],
  15: [
    [0, "every day", "araw-araw", "balang aldau", "kada adlaw"],
    [0, "necklace", "kuwintas", "kuentas", "kwintas"],
    [1, "stars", "mga bituin", "batwin", "mga bituon"],
    [2, "gifts", "regalo", "kalo", "regalo"],
    [2, "visited", "bumisita", "bibisitan", "ginbibisita"],
    [3, "planted", "nagtanim", "tinalam", "nagtanom"],
    [3, "flowers", "bulaklak", "sampaga", "bukad"],
    [3, "mountain", "bundok", "bunduk", "bukid"],
    [4, "happily ever after", "maligaya magpakailanman", "masaya anggang kapilan man", "malipayon ha kadayunan"],
  ],
};

const TERM_COLUMN: Record<StoryDialect, 2 | 3 | 4> = {
  tagalog: 2,
  kapampangan: 3,
  waray: 4,
};

const termsFor = (dialect: StoryDialect) =>
  Object.fromEntries(
    Object.entries(deshawnTermRows).map(([number, list]) => [
      number,
      list.map((row) => {
        const word = row[TERM_COLUMN[dialect]];
        return {
          paragraphIndex: row[0],
          match: row[1],
          dialectMatch: word,
          dialect: word,
          explanation: `"${word}" means "${row[1].toLowerCase()}" in this chapter.`,
        };
      }),
    ]),
  );

export const deshawnTerms: Record<
  StoryDialect,
  Record<number, NonNullable<SharedChapter["byDialect"][StoryDialect]["terms"]>>
> = {
  tagalog: termsFor("tagalog"),
  kapampangan: termsFor("kapampangan"),
  waray: termsFor("waray"),
};

// Dialect text per chapter number (1–15): the chapter title and one
// dialect sentence per English sentence, same order (sentences[i] pairs
// with the English sentences[i]). `needsReview` is stored on the chapter
// as-is.
type DeshawnDialectChapter = {
  title: string;
  sentences: string[];
  needsReview?: boolean;
};

// Kapampangan: transcribed exactly from docs/Story for deshawn kapampangan.pdf
// (see data/stories/story-for-deshawn-kapampangan.txt). Reviewed by the
// project owner, so needsReview is false.
const kapampanganText: Record<number, DeshawnDialectChapter> = {
  1: {
    title: "Ing Malating Baryu",
    sentences: [
      "Gisang panaun, ating metung a malating baryu malapit king gubat a maki-madyik.",
      "Metung a mabait a dalagita a maki-lagyong Lily ing makatuknang king metung a malating bale kayabe ing kayang indu.",
      "Kaluguran neng Lily reng sampaga, animal, ampong reng batwin king banua.",
      "Balang bengi, manyalon la reng batwin bayu ya matudtud.",
      "Paninapan nang makakit yang tutung lara (fairy) balang aldau.",
    ],
  },
  2: {
    title: "Ing Kabaing Sula",
    sentences: [
      "Metung a bengi, ikit nang Lily ing metung a masalang sula a sisila malapit king gubat.",
      "Sinuled no reng kayang sapatus at tinuru ya king lual bang masiat.",
      "Sasalungat ya ing sula king pilatan ding tanaman anti panyalungat ning metung a malating alitaptap.",
      "Tutukian neng masalese Lily uling maki-panandaman ya.",
      "Bigla, mayasag yang gulisak a mag-gaga king dake ning metung a maragul a tanaman.",
    ],
  },
  3: {
    title: "Ing Malating Lara",
    sentences: [
      "King likuran ning tanaman, ikit nang Lily ing metung a malating lara a maki-pakpak a gintu.",
      "Makalukluk ya ing lara king metung a batu at tatakap no reng kayang gamat king kayang lupa.",
      "\"Bakit ka mag-gaga?\" mayamu nang kitang Lily.",
      "\"Ametung ke ing madyik kung batwin,\" saguled ning lara.",
      "Alang batwin, ali ya makasulapo pabalik king kayang bale king banua.",
    ],
  },
  4: {
    title: "Sumpa Tang Magsaup",
    sentences: [
      "Buring saupan nang Lily ing lara bang akit ya ing ametung nang batwin.",
      "\"Lily ing lagyu ku, at saupan daka,\" maki-gili nang sinabi.",
      "Pinakilala ning lara ing kayang sarili bilang Stella.",
      "Sinabi nang Stella kang Lily a ing batwin mabaldug ya nangan king gubat.",
      "Kayabe la, megumpisa reng paintunan king lalam ning sala ning bulan.",
    ],
  },
  5: {
    title: "Ing Kunehung Magsalita",
    sentences: [
      "Kabang lumalakad la, akit da ing metung a maputing kunehu a makalukluk malapit king dutung-dutung.",
      "Makapagsalita ya ing kunehu uling metung yang madyik a animal.",
      "\"Ikit me ing metung a malating masalang batwin?\" kitang Lily.",
      "\"Ating kung ikit a masalang dake malapit king ilug,\" saguled ning kunehu.",
      "Pinasalamatan neng Lily at Stella ing kunehu at mabilis lang minunta king ilug.",
    ],
  },
  6: {
    title: "Ing Malalam a Ilug",
    sentences: [
      "Malyari lang dinatang king metung a malapad a ilug a maki-malinung asul a danum.",
      "Ikit nang Lily ing metung a tulay a dutung, seryu ating mapilang dutung a makasira.",
      "Masayad ne i Stella bang gamitan no reng kayang pakpak para makasna king ilug.",
      "Menakit yang makabang sanga i Lily at ginamit ne iti bang saupan lang makasna king kaligtasan.",
      "Mining gili i Stella at pinasalamatan ne i Lily king kayang tibe-lub.",
    ],
  },
  7: {
    title: "Ing Matuang Pau",
    sentences: [
      "King sumang dake ning ilug, akit da ing metung a matuang pau.",
      "Magpahingalu ya ing pau malapit king maragul a batu.",
      "\"Balung ku nung nuya ing batwin mu,\" bagal nang sinabi ning pau.",
      "\"Mabaldug ya malapit king Madalumdum a Bunduk, nung nuya matudtud ing higante.\"",
      "Takut ya i Lily, seryu ali ya minurung.",
    ],
  },
  8: {
    title: "Ing Madalumdum a Bunduk",
    sentences: [
      "Linalakad la ri Lily at Stella anggang dinatang la king Madalumdum a Bunduk.",
      "Matas lang tanaman ing makatakap king dalan, at kabaing sular ing nangan king tanaman.",
      "Talnan nang Stella ing gamat nang Lily bang paramdam yang ligtas.",
      "Agad dang ikit ing higante a matudtud malapit king tumpuk ding masalang batu.",
      "King pilatan ding batu, ating metung a malating batwin a sisila king gintung sula.",
    ],
  },
  9: {
    title: "Ing Matudtud a Higante",
    sentences: [
      "Buring kuanan nang Lily ing batwin, seryu malapit ya ing higante.",
      "Bagal-bagal yang lualat papunta king tumpuk ding batu.",
      "Bigla, mabaldug ya ing metung a malating batu ibat king kayang bulsa at tinama ya king gabun.",
      "Biklat ne ning higante ing metung nang mata at biniat no reng aduang kaluguran.",
      "\"Ninu ing maki-tibe-lub a lungub king kakung bunduk?\" kitang nang maki-maragul a boses.",
    ],
  },
  10: {
    title: "Ing Aduan ning Higante",
    sentences: [
      "Gagalgal ya king takut i Lily, seryu matibe-lub nang sinalese ing panyalungat da.",
      "Sinabi nang Stella king higante a kailangan ne ing batwin para makabalik king bale.",
      "Malungkot ya ing higante imbes na mimua.",
      "\"Kuanan ku ing batwin uling malungkutan ku king mapilang banua,\" ngat nang sinabi.",
      "Melunus ya i Lily kaya at buring makakit paralan bang saupan ya.",
    ],
  },
  11: {
    title: "Metung a Mabait a Isip",
    sentences: [
      "Kitang nang Lily king higante nung buri neng maging kaluguran da.",
      "Nabigla ya ing higante uling alang ninu mang maki-kutang kaya bayu iti.",
      "Mining gili ya at nangako yang ibalik ya ing batwin nang Stella.",
      "Pinasalamatan ne nang Stella at inaluk neng bisitan ne balang kapilan ya malyari.",
      "King mumunang panaun king mapilang banua, masaya ya ing higante.",
    ],
  },
  12: {
    title: "Ing Madyik a Batwin",
    sentences: [
      "Kuanan nang Stella ing kayang batwin, at ing gintung sula na nitu kinatmu ya king bunduk.",
      "Megumpisa lang sumila reng kayang pakpak a mas masalang nangan bayu iti.",
      "Tinagkilan ne ing batwin at nangan yang madyik a salita.",
      "Bigla, tinubu la reng masampagang sampaga king padurut ning bale ning higante.",
      "Miki-panyalungat yang tula ing higante kabang manyalon no reng maki-kuleng sampaga.",
    ],
  },
  13: {
    title: "Ing Panyalungat Pabalik Bale",
    sentences: [
      "Miki-paalam la ri Lily at Stella king mabait a higante.",
      "Ing maputing kunehu at ing matuang pau miki-yabe la king panyalungat da.",
      "Inyang dinatang la king baryu, megumpisa ne ing panyalungat ning aldo.",
      "Sinabi nang Stella kang Lily a e na kalinguan ing kayang kabaitan.",
      "Masaya ya i Lily uling nakagawa yang bayung masampagang kaluguran.",
    ],
  },
  14: {
    title: "Ing Kalo ning Lara",
    sentences: [
      "Bayu ya mako, dininan neng Stella i Lily king metung a malating kuentas a pilak.",
      "Ing kuentas maki-malating batwin a sisila king kadalumduman.",
      "\"Kalo ini para pasalamatan daka king saup mu kaku,\" ngat nang Stella.",
      "Nangako ya a ing kuentas ipasuala na kaya ing kaluguran da.",
      "Pengulutan nang Lily i Stella kabang ing malating lara susulapo ya king banua.",
    ],
  },
  15: {
    title: "Masayang Pamie-mie Anggang Kapilan man",
    sentences: [
      "Ibat king aldau a ita, suled nang Lily ing kayang kuentas a pilak balang aldau.",
      "Kapilan man manyalon ya king batwin, sasalungat ya ing madyik nang panyalungat.",
      "Madalas neng bibisitan Stella ing baryu at magdalang kalo para kang Lily at king kayang indu.",
      "Ing higante naging kaluguran dala at tinalam yang sampaga padurut king kayang bunduk.",
      "At anti ita, i Lily at reng kayang kaluguran mie lang masaya anggang kapilan man.",
    ],
  },
};

// DRAFT translations written from the English source, because there is no
// Tagalog or Waray source for this story. Not reviewed by a speaker, so they
// are stored with needsReview: true. Replace them when a reviewed text exists.
const tagalogText: Record<number, DeshawnDialectChapter> = {
  1: {
    title: "Ang Munting Nayon",
    sentences: [
      "Noong unang panahon, may isang munting nayon malapit sa isang mahiwagang gubat.",
      "Isang mabait na batang babae na nagngangalang Lily ang nakatira sa isang maliit na bahay kasama ang kanyang ina.",
      "Mahal ni Lily ang mga bulaklak, mga hayop, at ang mga bituin sa langit.",
      "Tuwing gabi, pinagmamasdan niya ang mga bituin bago matulog.",
      "Pangarap niyang makakilala ng isang tunay na diwata balang araw.",
    ],
  },
  2: {
    title: "Ang Kakaibang Liwanag",
    sentences: [
      "Isang gabi, nakita ni Lily ang isang maliwanag na ilaw na kumikinang malapit sa gubat.",
      "Isinuot niya ang kanyang sapatos at lumabas upang tumingin.",
      "Gumagalaw ang liwanag sa pagitan ng mga puno na parang isang munting alitaptap.",
      "Maingat itong sinundan ni Lily dahil siya ay mausisa.",
      "Biglang may narinig siyang umiiyak sa likod ng isang malaking puno.",
    ],
  },
  3: {
    title: "Ang Munting Diwata",
    sentences: [
      "Sa likod ng puno, natagpuan ni Lily ang isang munting diwata na may gintong mga pakpak.",
      "Nakaupo ang diwata sa isang bato at tinatakpan ng mga kamay ang kanyang mukha.",
      "\"Bakit ka umiiyak?\" malumanay na tanong ni Lily.",
      "\"Nawala ang mahiwaga kong bituin,\" sagot ng diwata.",
      "Kung wala ang bituin, hindi siya makakalipad pabalik sa kanyang tahanan sa langit.",
    ],
  },
  4: {
    title: "Isang Pangakong Tumulong",
    sentences: [
      "Nais ni Lily na tulungan ang diwata na hanapin ang nawawala nitong bituin.",
      "\"Ako si Lily, at tutulungan kita,\" nakangiti niyang sabi.",
      "Nagpakilala ang diwata bilang si Stella.",
      "Sinabi ni Stella kay Lily na nahulog ang bituin sa isang bahagi ng gubat.",
      "Magkasama nilang sinimulan ang paghahanap sa ilalim ng liwanag ng buwan.",
    ],
  },
  5: {
    title: "Ang Kunehong Nagsasalita",
    sentences: [
      "Habang naglalakad, may nakita silang puting kuneho na nakaupo sa tabi ng isang palumpong.",
      "Nakakapagsalita ang kuneho dahil isa itong mahiwagang hayop.",
      "\"May nakita ka bang munting kumikinang na bituin?\" tanong ni Lily.",
      "\"May nakita akong maliwanag na bagay malapit sa ilog,\" sagot ng kuneho.",
      "Nagpasalamat sina Lily at Stella sa kuneho at nagmadaling pumunta sa ilog.",
    ],
  },
  6: {
    title: "Ang Malalim na Ilog",
    sentences: [
      "Hindi nagtagal, nakarating sila sa isang malapad na ilog na may malinaw at asul na tubig.",
      "Nakita ni Lily ang isang tulay na kahoy, ngunit sira ang ilan sa mga tabla nito.",
      "Masyadong pagod si Stella para gamitin ang kanyang mga pakpak sa pagtawid sa ilog.",
      "Nakahanap si Lily ng mahabang sanga at ginamit ito upang ligtas silang makatawid.",
      "Ngumiti si Stella at nagpasalamat kay Lily sa kanyang katapangan.",
    ],
  },
  7: {
    title: "Ang Matandang Pagong",
    sentences: [
      "Sa kabilang pampang ng ilog, nakilala nila ang isang matandang pagong.",
      "Nagpapahinga ang pagong sa tabi ng isang malaking bato.",
      "\"Alam ko kung nasaan ang bituin mo,\" dahan-dahang sabi ng pagong.",
      "\"Nahulog ito malapit sa Madilim na Bundok, kung saan natutulog ang isang higante.\"",
      "Natakot si Lily, ngunit nagpasya siyang hindi sumuko.",
    ],
  },
  8: {
    title: "Ang Madilim na Bundok",
    sentences: [
      "Naglakad sina Lily at Stella hanggang sa marating nila ang Madilim na Bundok.",
      "Natatakpan ng matataas na puno ang daan, at may mga kakaibang tunog na nagmumula sa mga palumpong.",
      "Hinawakan ni Stella ang kamay ni Lily upang maramdaman nitong ligtas siya.",
      "Di nagtagal, nakita nila ang isang higanteng natutulog sa tabi ng tumpok ng makikintab na bato.",
      "Sa gitna ng mga bato ay may maliit na bituing kumikinang sa gintong liwanag.",
    ],
  },
  9: {
    title: "Ang Natutulog na Higante",
    sentences: [
      "Gusto ni Lily na kunin ang bituin, ngunit napakalapit ng higante.",
      "Dahan-dahan siyang lumakad papunta sa tumpok ng mga bato.",
      "Biglang nahulog mula sa kanyang bulsa ang isang maliit na bato at tumama sa lupa.",
      "Iminulat ng higante ang isang mata at tiningnan ang magkaibigan.",
      "\"Sino ang nangahas pumasok sa aking bundok?\" tanong niya sa malakas na tinig.",
    ],
  },
  10: {
    title: "Ang Hiling ng Higante",
    sentences: [
      "Nanginginig sa takot si Lily, ngunit buong tapang niyang ipinaliwanag ang kanilang pakay.",
      "Sinabi ni Stella sa higante na kailangan niya ang bituin upang makauwi.",
      "Mukhang malungkot ang higante sa halip na galit.",
      "\"Kinuha ko ang bituin dahil maraming taon na akong nag-iisa at nalulungkot,\" sabi niya.",
      "Naawa si Lily sa kanya at nais niyang humanap ng paraan upang makatulong.",
    ],
  },
  11: {
    title: "Isang Mabuting Ideya",
    sentences: [
      "Tinanong ni Lily ang higante kung gusto nitong maging kaibigan nila.",
      "Nagulat ang higante dahil wala pang nagtanong sa kanya ng ganoon.",
      "Ngumiti siya at nangakong ibabalik ang bituin ni Stella.",
      "Nagpasalamat si Stella at nag-alok na dadalawin siya tuwing makakaya niya.",
      "Sa unang pagkakataon sa loob ng maraming taon, naging masaya ang higante.",
    ],
  },
  12: {
    title: "Ang Mahiwagang Bituin",
    sentences: [
      "Pinulot ni Stella ang kanyang bituin, at pinuno ng gintong liwanag nito ang bundok.",
      "Nagsimulang kuminang ang kanyang mga pakpak nang higit kaysa dati.",
      "Hinawakan niya ang bituin at ibinulong ang isang mahiwagang salita.",
      "Biglang lumitaw ang magagandang bulaklak sa paligid ng tahanan ng higante.",
      "Tumawa sa tuwa ang higante habang pinagmamasdan ang makukulay na bulaklak.",
    ],
  },
  13: {
    title: "Ang Paglalakbay Pauwi",
    sentences: [
      "Nagpaalam sina Lily at Stella sa mabait na higante.",
      "Sumama sa kanilang paglalakbay ang puting kuneho at ang matandang pagong.",
      "Pagdating nila sa nayon, nagsisimula nang sumikat ang araw.",
      "Sinabi ni Stella kay Lily na hinding-hindi niya malilimutan ang kabutihan nito.",
      "Masaya si Lily dahil nagkaroon siya ng mga bago at kahanga-hangang kaibigan.",
    ],
  },
  14: {
    title: "Ang Regalo ng Diwata",
    sentences: [
      "Bago umalis, binigyan ni Stella si Lily ng isang munting kuwintas na pilak.",
      "May maliit na bituin ang kuwintas na kumikinang sa dilim.",
      "\"Regalo ko ito bilang pasasalamat sa pagtulong mo sa akin,\" sabi ni Stella.",
      "Nangako siyang ipapaalala ng kuwintas kay Lily ang kanilang pagkakaibigan.",
      "Niyakap ni Lily si Stella habang lumilipad sa langit ang munting diwata.",
    ],
  },
  15: {
    title: "Maligaya Magpakailanman",
    sentences: [
      "Mula noon, isinusuot ni Lily ang kanyang kuwintas na pilak araw-araw.",
      "Tuwing tumitingin siya sa mga bituin, naaalala niya ang kanyang mahiwagang pakikipagsapalaran.",
      "Madalas bumisita si Stella sa nayon at nagdadala ng mga regalo para kay Lily at sa kanyang ina.",
      "Naging kaibigan nila ang higante at nagtanim siya ng mga bulaklak sa paligid ng kanyang bundok.",
      "At sa gayon, namuhay nang maligaya magpakailanman si Lily at ang kanyang mga kaibigan.",
    ],
  },
};

const warayText: Record<number, DeshawnDialectChapter> = {
  1: {
    title: "An Gutiay nga Baryo",
    sentences: [
      "Hadto nga panahon, may-ada gutiay nga baryo hirani ha mahika nga kagurangan.",
      "Usa nga buotan nga batang babaye nga hi Lily an nag-iistar ha gutiay nga balay upod an iya nanay.",
      "Hinihigugma ni Lily an mga bukad, mga hayop, ngan an mga bituon ha langit.",
      "Kada gab-i, ginkikita niya an mga bituon antes hiya makaturog.",
      "Nangangarap hiya nga makakita hin tinuod nga diwata ha umaabot nga adlaw.",
    ],
  },
  2: {
    title: "An Kataka-taka nga Sanag",
    sentences: [
      "Usa nga gab-i, nakita ni Lily an masanag nga suga nga nasirak hirani ha kagurangan.",
      "Ginsul-ot niya an iya sapatos ngan gumawas hiya basi magkita.",
      "Naglalakat an sanag ha butnga han mga kahoy sugad hin gutiay nga aninipot.",
      "Mainampingon nga ginsunod ito ni Lily tungod kay karuyag hiya makaaram.",
      "Hinanali, may nabatian hiya nga nagtatangis ha luyo han dako nga kahoy.",
    ],
  },
  3: {
    title: "An Gutiay nga Diwata",
    sentences: [
      "Ha luyo han kahoy, nakita ni Lily an gutiay nga diwata nga may bulawan nga mga pako.",
      "Nakalingkod an diwata ha bato ngan gintatabonan han iya mga kamot an iya bayhon.",
      "\"Kay ano nga natangis ka?\" maaghop nga pakiana ni Lily.",
      "\"Nawara an akon mahika nga bituon,\" baton han diwata.",
      "Kon waray an bituon, diri hiya makakalupad pabalik ha iya balay ha langit.",
    ],
  },
  4: {
    title: "An Saad nga Pagbulig",
    sentences: [
      "Karuyag ni Lily buligan an diwata ha pagbiling han iya nawara nga bituon.",
      "\"Ako hi Lily, ngan bubuligan ta ikaw,\" nakangirit nga siring niya.",
      "Nagpakilala an diwata nga hiya hi Stella.",
      "Ginsiring ni Stella kan Lily nga nahulog an bituon ha bisan diin ha kagurangan.",
      "Nag-upod hira nga nagtikang pagbiling ha ilarom han sanag han bulan.",
    ],
  },
  5: {
    title: "An Kuneho nga Nayakan",
    sentences: [
      "Samtang naglalakat hira, nakita nira an busag nga kuneho nga nakalingkod ha kilid han mga tanom.",
      "Nakakayakan an kuneho tungod kay mahika nga hayop ito.",
      "\"Nakita mo ba an gutiay nga nasirak nga bituon?\" pakiana ni Lily.",
      "\"May nakita ako nga masanag nga butang hirani ha salog,\" baton han kuneho.",
      "Nagpasalamat hira Lily ngan Stella ha kuneho ngan nagdali hira pakadto ha salog.",
    ],
  },
  6: {
    title: "An Hilarom nga Salog",
    sentences: [
      "Diri nagdugay, inabot hira ha halapad nga salog nga may matin-aw ngan asul nga tubig.",
      "Nakita ni Lily an taytay nga kahoy, pero guba an iba han mga tabla hito.",
      "Kapoy na kaupay hi Stella basi gamiton an iya mga pako ha pagtabok ha salog.",
      "Nakakita hi Lily hin hataas nga sanga ngan gingamit niya ito basi luwas hira makatabok.",
      "Nangirit hi Stella ngan nagpasalamat kan Lily ha iya kaisog.",
    ],
  },
  7: {
    title: "An Tigurang nga Bao",
    sentences: [
      "Ha pikas nga kilid han salog, nakita nira an tigurang nga bao.",
      "Nagpapahuway an bao ha kilid han dako nga bato.",
      "\"Maaram ako kon hain an imo bituon,\" hinay nga siring han bao.",
      "\"Nahulog ito hirani ha Madulom nga Bukid, diin natutulog an higante.\"",
      "Nahadlok hi Lily, pero naghukom hiya nga diri mag-undang.",
    ],
  },
  8: {
    title: "An Madulom nga Bukid",
    sentences: [
      "Naglakat hira Lily ngan Stella tubtob inabot hira ha Madulom nga Bukid.",
      "Gintatabonan han hatag-as nga mga kahoy an agianan, ngan may mga kataka-taka nga tingog nga nagtitikang ha mga tanom.",
      "Gin-uptan ni Stella an kamot ni Lily basi mabati niya nga luwas hiya.",
      "Diri nagdugay, nakita nira an higante nga natutulog ha kilid han tambak han masirak nga mga bato.",
      "Ha butnga han mga bato, may-ada gutiay nga bituon nga nasirak hin bulawan nga sanag.",
    ],
  },
  9: {
    title: "An Natutulog nga Higante",
    sentences: [
      "Karuyag kuhaon ni Lily an bituon, pero hirani gud an higante.",
      "Hinay-hinay hiya nga naglakat pakadto ha tambak han mga bato.",
      "Hinanali, nahulog tikang ha iya bulsa an gutiay nga bato ngan naigo an tuna.",
      "Ginmuklat han higante an usa nga mata ngan ginkita an duha nga magsangkay.",
      "\"Hin-o an nangahas sumulod ha akon bukid?\" pakiana niya ha makusog nga tingog.",
    ],
  },
  10: {
    title: "An Karuyag han Higante",
    sentences: [
      "Nagkukurog ha kahadlok hi Lily, pero maisog niya nga ginsaysay an ira katuyoan.",
      "Ginsiring ni Stella ha higante nga kinahanglan niya an bituon basi makauli.",
      "Masubo an hitsura han higante, diri masina.",
      "\"Ginkuha ko an bituon tungod kay damo na nga katuigan nga nag-iinusara ako,\" siring niya.",
      "Naluoy hi Lily ha iya ngan karuyag niya makabiling hin paagi basi makabulig.",
    ],
  },
  11: {
    title: "An Maopay nga Hunahuna",
    sentences: [
      "Ginpakianhan ni Lily an higante kon karuyag niya magin sangkay nira.",
      "Nahingangha an higante tungod kay waray pa nagpakiana ha iya hin sugad hito.",
      "Nangirit hiya ngan nagsaad nga ibabalik an bituon ni Stella.",
      "Nagpasalamat hi Stella ngan nagsaad nga bibisitahon hiya kon makakaya niya.",
      "Ha siyahan nga higayon ha sulod hin damo nga katuigan, nalipay an higante.",
    ],
  },
  12: {
    title: "An Mahika nga Bituon",
    sentences: [
      "Ginpurot ni Stella an iya bituon, ngan napuno han bulawan nga sanag hito an bukid.",
      "Nagtikang pagsirak an iya mga pako hin labaw pa ha hadto.",
      "Ginhikap niya an bituon ngan hinay nga ginsiring an usa nga mahika nga pulong.",
      "Hinanali, nagtungha an mahusay nga mga bukad ha palibot han balay han higante.",
      "Nagtawa ha kalipay an higante samtang ginkikita an mabulokon nga mga bukad.",
    ],
  },
  13: {
    title: "An Pagbiyahe Pauli",
    sentences: [
      "Nagpaalam hira Lily ngan Stella ha buotan nga higante.",
      "Nag-upod ha ira biyahe an busag nga kuneho ngan an tigurang nga bao.",
      "Han pag-abot nira ha baryo, nagtitikang na pagsirang an adlaw.",
      "Ginsiring ni Stella kan Lily nga diri gud niya makakalimtan an iya pagkabuotan.",
      "Nalipay hi Lily tungod kay may-ada hiya maopay nga bag-o nga mga sangkay.",
    ],
  },
  14: {
    title: "An Regalo han Diwata",
    sentences: [
      "Antes lumakat, ginhatagan ni Stella hi Lily hin gutiay nga kwintas nga pilak.",
      "May-ada an kwintas gutiay nga bituon nga nasirak ha kadudulman.",
      "\"Regalo ini basi magpasalamat ha imo pagbulig ha akon,\" siring ni Stella.",
      "Nagsaad hiya nga an kwintas makakapahinumdom kan Lily han ira pagsangkay.",
      "Ginkugos ni Lily hi Stella samtang nalupad ngadto ha langit an gutiay nga diwata.",
    ],
  },
  15: {
    title: "Malipay ha Kadayunan",
    sentences: [
      "Tikang hadto nga adlaw, ginsusul-ot ni Lily an iya kwintas nga pilak kada adlaw.",
      "Kada makita niya an mga bituon, nahihinumdoman niya an iya mahika nga pagbiyahe.",
      "Pirme ginbibisita ni Stella an baryo ngan nagdadara hin mga regalo para kan Lily ngan ha iya nanay.",
      "Nagin sangkay nira an higante ngan nagtanom hin mga bukad ha palibot han iya bukid.",
      "Ngan sugad hito, nagkinabuhi hi Lily ngan an iya mga sangkay nga malipayon ha kadayunan.",
    ],
  },
};

const markForReview = (text: Record<number, DeshawnDialectChapter>) =>
  Object.fromEntries(
    Object.entries(text).map(([number, chapter]) => [
      number,
      { ...chapter, needsReview: true },
    ]),
  );

export const deshawnDialectText: Record<
  StoryDialect,
  Record<number, DeshawnDialectChapter>
> = {
  tagalog: markForReview(tagalogText),
  kapampangan: Object.fromEntries(
    Object.entries(kapampanganText).map(([number, chapter]) => [
      number,
      { ...chapter, needsReview: false },
    ]),
  ),
  waray: markForReview(warayText),
};

const DIALECTS: StoryDialect[] = ["tagalog", "kapampangan", "waray"];

export const deshawnChapters: SharedChapter[] = chapters.map(
  (chapter, index) => {
    const number = index + 1;

    return {
      id: FIRST_CHAPTER_ID + index,
      title: chapter.title,
      body: chapter.sentences,
      byDialect: Object.fromEntries(
        DIALECTS.map((dialect) => {
          const text = deshawnDialectText[dialect][number];

          return [
            dialect,
            {
              // Stored as story_<dialect>_deshawn_<n> (see getChaptersForDialect),
              // separate from Whispers' story_<dialect>_<n>.
              lessonId: `${dialect}_deshawn_${number}`,
              ...(text ? { title: text.title } : {}),
              terms: deshawnTerms[dialect][number] ?? [],
              translations: text?.sentences ?? [],
              ...(text?.needsReview !== undefined
                ? { needsReview: text.needsReview }
                : {}),
            },
          ];
        }),
      ) as SharedChapter["byDialect"],
    };
  },
);
