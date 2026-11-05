import type { StoryDialect } from "../storyData";
import type { StoryPracticeChapter, StoryPracticeQuestion } from "./types";

// NOT USED BY THE APP. These are the 3 comprehension questions per chapter that
// "Story for Deshawn" used before its 10-question format
// (data/story-practice/deshawn.ts). Kept so they can be brought back: point
// data/story-practice/index.ts at deshawnComprehensionChapters.
//
// The question is in English, and each
// language page shows the answers in its own language. Progress is saved per
// language (story_<dialect>_deshawn_<n>).
//
// Each answer row is [English, Tagalog, Kapampangan, Waray], and a question's
// first row is the correct answer. English is kept only so reviewers can see
// the meaning.
//
// DRAFT, needs a speaker's review:
// - Kapampangan correct answers follow the wording of the reviewed story text
//   (docs/Story for deshawn kapampangan.pdf). The wrong answers are drafted.
// - All Tagalog and Waray answers are drafted, like their story text.
type AnswerRow = [string, string, string, string];

const COLUMN: Record<StoryDialect, number> = {
  tagalog: 1,
  kapampangan: 2,
  waray: 3,
};

type DeshawnQuestion = { word: string; answers: AnswerRow[] };

const q = (word: string, ...answers: AnswerRow[]): DeshawnQuestion => ({
  word,
  answers,
});

export const deshawnQuestions: DeshawnQuestion[][] = [
  // Chapter 1
  [
    q(
      "Where was the little village?",
      ["Near a magical forest", "Malapit sa mahiwagang gubat", "Malapit king gubat a maki-madyik", "Hirani ha mahika nga kagurangan"],
      ["By the sea", "Sa tabi ng dagat", "King gilid ning dagat", "Ha kilid han dagat"],
      ["On a mountain", "Sa bundok", "King bunduk", "Ha bukid"],
      ["In a big city", "Sa malaking lungsod", "King maragul a siudad", "Ha dako nga syudad"],
    ),
    q(
      "Who did Lily live with?",
      ["Her mother", "Ang kanyang ina", "Ing kayang indu", "An iya nanay"],
      ["Her grandfather", "Ang kanyang lolo", "Ing kayang ingkung", "An iya lolo"],
      ["A fairy", "Isang diwata", "Metung a lara", "Usa nga diwata"],
      ["Her brother", "Ang kanyang kapatid na lalaki", "Ing kayang kapatad a lalaki", "An iya bugto nga lalaki"],
    ),
    q(
      "What did Lily dream of?",
      ["Meeting a real fairy", "Makakilala ng tunay na diwata", "Makakit tutung lara", "Makakita hin tinuod nga diwata"],
      ["Flying a kite", "Magpalipad ng saranggola", "Magpasulapo saranggola", "Magpalupad hin saranggola"],
      ["Finding gold", "Makahanap ng ginto", "Makakit gintu", "Makakita hin bulawan"],
      ["Visiting the city", "Bumisita sa lungsod", "Bisitan ing siudad", "Bumisita ha syudad"],
    ),
  ],
  // Chapter 2
  [
    q(
      "What did Lily see near the forest?",
      ["A bright light", "Isang maliwanag na ilaw", "Metung a masalang sula", "Masanag nga suga"],
      ["A big dog", "Isang malaking aso", "Metung a maragul a asu", "Dako nga ayam"],
      ["A tall house", "Isang mataas na bahay", "Metung a matas a bale", "Hataas nga balay"],
      ["A red bird", "Isang pulang ibon", "Metung a malutung ayup", "Pula nga tamsi"],
    ),
    q(
      "What did the light look like?",
      ["A tiny firefly", "Munting alitaptap", "Malating alitaptap", "Gutiay nga aninipot"],
      ["A falling leaf", "Nahuhulog na dahon", "Mabaldug a bulung", "Nahuhulog nga dahon"],
      ["A small fish", "Maliit na isda", "Malating asan", "Gutiay nga isda"],
      ["A paper boat", "Bangkang papel", "Bangkang papel", "Sakayan nga papel"],
    ),
    q(
      "What did Lily hear behind a big tree?",
      ["Someone crying", "May umiiyak", "Gulisak a mag-gaga", "May nagtatangis"],
      ["A song", "Isang awit", "Metung a kanta", "Usa nga kanta"],
      ["A bell", "Isang kampana", "Metung a kampana", "Usa nga lingganay"],
      ["Someone laughing", "May tumatawa", "Gulisak a tumatawa", "May nagtatawa"],
    ),
  ],
  // Chapter 3
  [
    q(
      "What color were the fairy's wings?",
      ["Golden", "Ginto", "Gintu", "Bulawan"],
      ["Blue", "Asul", "Asul", "Asul"],
      ["Green", "Berde", "Maluntiang", "Lunhaw"],
      ["Black", "Itim", "Matuling", "Itom"],
    ),
    q(
      "What did the fairy lose?",
      ["Her magic star", "Ang mahiwaga niyang bituin", "Ing madyik nang batwin", "An iya mahika nga bituon"],
      ["Her shoes", "Ang kanyang sapatos", "Reng kayang sapatus", "An iya sapatos"],
      ["Her necklace", "Ang kanyang kuwintas", "Ing kayang kuentas", "An iya kwintas"],
      ["Her wand", "Ang kanyang mahiwagang patpat", "Ing kayang madyik a patpat", "An iya mahika nga sungkod"],
    ),
    q(
      "Why could the fairy not go home?",
      ["She could not fly without the star", "Hindi siya makakalipad kung wala ang bituin", "Ali ya makasulapo alang batwin", "Diri hiya makakalupad kon waray an bituon"],
      ["It was raining", "Umuulan noon", "Mauran", "Nauran"],
      ["She was hungry", "Gutom siya", "Danup ya", "Gutom hiya"],
      ["The gate was locked", "Nakakandado ang tarangkahan", "Makakandadu ya ing pasbul", "Nakakandado an ganghaan"],
    ),
  ],
  // Chapter 4
  [
    q(
      "What was the fairy's name?",
      ["Stella", "Stella", "Stella", "Stella"],
      ["Lily", "Lily", "Lily", "Lily"],
      ["Luna", "Luna", "Luna", "Luna"],
      ["Rosa", "Rosa", "Rosa", "Rosa"],
    ),
    q(
      "Where did the star fall?",
      ["Somewhere in the forest", "Sa isang bahagi ng gubat", "Nangan king gubat", "Ha bisan diin ha kagurangan"],
      ["Into the sea", "Sa dagat", "King dagat", "Ha dagat"],
      ["On the roof", "Sa bubong", "King atap", "Ha atop"],
      ["In the village", "Sa nayon", "King baryu", "Ha baryo"],
    ),
    q(
      "When did they begin their search?",
      ["Under the moonlight", "Sa ilalim ng liwanag ng buwan", "King lalam ning sala ning bulan", "Ha ilarom han sanag han bulan"],
      ["At noon", "Sa tanghali", "King ugtu", "Ha kaudtohon"],
      ["In the morning", "Sa umaga", "King abak", "Ha aga"],
      ["After lunch", "Pagkatapos ng tanghalian", "Kaibat ning pamangan", "Katapos han paniudto"],
    ),
  ],
  // Chapter 5
  [
    q(
      "What animal did they meet?",
      ["A white rabbit", "Isang puting kuneho", "Metung a maputing kunehu", "Busag nga kuneho"],
      ["A brown dog", "Isang kayumangging aso", "Metung a kayumangging asu", "Kayumanggi nga ayam"],
      ["A black cat", "Isang itim na pusa", "Metung a matuling pusa", "Itom nga uding"],
      ["An old owl", "Isang matandang kuwago", "Metung a matuang kuago", "Tigurang nga kuwago"],
    ),
    q(
      "Why could the rabbit talk?",
      ["It was a magical animal", "Isa itong mahiwagang hayop", "Metung yang madyik a animal", "Mahika nga hayop ito"],
      ["It went to school", "Nag-aral ito sa paaralan", "Minyaral ya king eskwela", "Nag-eskwela ito"],
      ["Lily taught it", "Tinuruan ito ni Lily", "Tinuru ne i Lily", "Gintutdoan ito ni Lily"],
      ["It was a fairy", "Diwata ito", "Lara ya", "Usa ito nga diwata"],
    ),
    q(
      "Where did the rabbit see something bright?",
      ["Near the river", "Malapit sa ilog", "Malapit king ilug", "Hirani ha salog"],
      ["On the mountain", "Sa bundok", "King bunduk", "Ha bukid"],
      ["In the village", "Sa nayon", "King baryu", "Ha baryo"],
      ["Under a rock", "Sa ilalim ng bato", "King lalam ning batu", "Ha ilarom han bato"],
    ),
  ],
  // Chapter 6
  [
    q(
      "What was wrong with the bridge?",
      ["Some boards were broken", "Sira ang ilang tabla", "Ating mapilang dutung a makasira", "Guba an iba nga mga tabla"],
      ["It was on fire", "Nasusunog ito", "Durukut ya", "Nasusunog ito"],
      ["It was too high", "Napakataas nito", "Matas ya masyadu", "Hataas hin duro"],
      ["It was made of glass", "Gawa ito sa salamin", "Gawa ya king salamin", "Hinimo ito ha salamin"],
    ),
    q(
      "Why did Stella not fly across?",
      ["She was too tired", "Masyado siyang pagod", "Masayad ne", "Kapoy na kaupay hiya"],
      ["She was scared", "Natatakot siya", "Takut ya", "Nahahadlok hiya"],
      ["It was dark", "Madilim noon", "Madalumdum", "Madulom"],
      ["Her wings were wet", "Basa ang kanyang mga pakpak", "Mabasa la reng kayang pakpak", "Basa an iya mga pako"],
    ),
    q(
      "What did Lily use to help them cross?",
      ["A long branch", "Mahabang sanga", "Makabang sanga", "Hataas nga sanga"],
      ["A rope", "Lubid", "Lubid", "Lubid"],
      ["A boat", "Bangka", "Bangka", "Sakayan"],
      ["A ladder", "Hagdan", "Agdan", "Hagdan"],
    ),
  ],
  // Chapter 7
  [
    q(
      "Who did they meet across the river?",
      ["An old turtle", "Isang matandang pagong", "Metung a matuang pau", "Tigurang nga bao"],
      ["A white rabbit", "Isang puting kuneho", "Metung a maputing kunehu", "Busag nga kuneho"],
      ["A giant", "Isang higante", "Metung a higante", "Usa nga higante"],
      ["A frog", "Isang palaka", "Metung a tugak", "Usa nga baki"],
    ),
    q(
      "Where did the star fall?",
      ["Near the Dark Mountain", "Malapit sa Madilim na Bundok", "Malapit king Madalumdum a Bunduk", "Hirani ha Madulom nga Bukid"],
      ["In the river", "Sa ilog", "King ilug", "Ha salog"],
      ["In Lily's garden", "Sa hardin ni Lily", "King hardin nang Lily", "Ha hardin ni Lily"],
      ["On the bridge", "Sa tulay", "King tulay", "Ha taytay"],
    ),
    q(
      "Who sleeps on the Dark Mountain?",
      ["A giant", "Isang higante", "Metung a higante", "Usa nga higante"],
      ["A dragon", "Isang dragon", "Metung a dragon", "Usa nga dragon"],
      ["A fairy", "Isang diwata", "Metung a lara", "Usa nga diwata"],
      ["A bear", "Isang oso", "Metung a oso", "Usa nga oso"],
    ),
  ],
  // Chapter 8
  [
    q(
      "What covered the path?",
      ["Tall trees", "Matataas na puno", "Matas lang tanaman", "Hatag-as nga mga kahoy"],
      ["Snow", "Niyebe", "Niyebe", "Niyebe"],
      ["Big rocks", "Malalaking bato", "Maragul lang batu", "Dagku nga mga bato"],
      ["Water", "Tubig", "Danum", "Tubig"],
    ),
    q(
      "What did Stella do to help Lily feel safe?",
      ["Held her hand", "Hinawakan ang kanyang kamay", "Talnan ne ing gamat nang Lily", "Gin-uptan an iya kamot"],
      ["Sang a song", "Kumanta ng awit", "Kinanta yang metung a kanta", "Nagkanta hin kanta"],
      ["Gave her a lamp", "Binigyan siya ng ilawan", "Dininan neng sulu", "Ginhatagan hiya hin suga"],
      ["Told a joke", "Nagkuwento ng biro", "Minyabi yang biru", "Nagsumat hin biro"],
    ),
    q(
      "Where was the star?",
      ["Among the shiny stones", "Sa gitna ng makikintab na bato", "King pilatan ding masalang batu", "Ha butnga han masirak nga mga bato"],
      ["In a tree", "Sa isang puno", "King metung a tanaman", "Ha kahoy"],
      ["In the river", "Sa ilog", "King ilug", "Ha salog"],
      ["In a box", "Sa isang kahon", "King metung a kaha", "Ha kahon"],
    ),
  ],
  // Chapter 9
  [
    q(
      "What fell from Lily's pocket?",
      ["A small rock", "Maliit na bato", "Malating batu", "Gutiay nga bato"],
      ["A coin", "Barya", "Barya", "Sinsilyo"],
      ["A flower", "Bulaklak", "Sampaga", "Bukad"],
      ["A key", "Susi", "Susi", "Yabi"],
    ),
    q(
      "What did the giant open?",
      ["One eye", "Isang mata", "Metung a mata", "Usa nga mata"],
      ["A door", "Pinto", "Pasbul", "Pultahan"],
      ["His mouth", "Ang kanyang bibig", "Ing kayang asbuk", "An iya baba"],
      ["A box", "Isang kahon", "Metung a kaha", "Usa nga kahon"],
    ),
    q(
      "How did the giant ask his question?",
      ["In a loud voice", "Sa malakas na tinig", "Maki-maragul a boses", "Ha makusog nga tingog"],
      ["In a whisper", "Pabulong", "Pabulung", "Hinay nga paghuring"],
      ["With a song", "Sa pamamagitan ng awit", "King kanta", "Pinaagi hin kanta"],
      ["In a letter", "Sa isang liham", "King metung a sulat", "Ha sulat"],
    ),
  ],
  // Chapter 10
  [
    q(
      "How did the giant look?",
      ["Sad instead of angry", "Malungkot sa halip na galit", "Malungkot imbes na mimua", "Masubo, diri masina"],
      ["Happy and excited", "Masaya at sabik", "Masaya at sabik", "Malipay ngan nahihinamhinam"],
      ["Angry and loud", "Galit at maingay", "Mimua at maingay", "Masina ngan maaringasa"],
      ["Sleepy and bored", "Inaantok at naiinip", "Aantuk at mayinip", "Inaantok ngan naiinip"],
    ),
    q(
      "Why did the giant take the star?",
      ["He had been lonely", "Matagal na siyang nag-iisa at malungkot", "Malungkutan ya king mapilang banua", "Damo na nga katuigan nga nag-iinusara hiya"],
      ["He was hungry", "Gutom siya", "Danup ya", "Gutom hiya"],
      ["He wanted to sell it", "Gusto niya itong ibenta", "Buri neng ipagbili", "Karuyag niya ibaligya"],
      ["He was cold", "Giniginaw siya", "Marimlan ya", "Nahahagkot hiya"],
    ),
    q(
      "How did Lily feel about the giant?",
      ["Sorry for him", "Naawa siya sa kanya", "Melunus ya kaya", "Naluoy hiya ha iya"],
      ["Angry at him", "Nagalit siya sa kanya", "Mimua ya kaya", "Nasina hiya ha iya"],
      ["Scared of him", "Natakot siya sa kanya", "Takut ya kaya", "Nahadlok hiya ha iya"],
      ["Bored by him", "Nainip siya sa kanya", "Yinip ya kaya", "Naiinip hiya ha iya"],
    ),
  ],
  // Chapter 11
  [
    q(
      "What did Lily ask the giant?",
      ["If he wanted to be their friend", "Kung gusto niyang maging kaibigan nila", "Nung buri neng maging kaluguran da", "Kon karuyag niya magin sangkay nira"],
      ["If he was hungry", "Kung gutom siya", "Nung danup ya", "Kon gutom hiya"],
      ["Where he lived", "Kung saan siya nakatira", "Nung nuya ya makatuknang", "Kon diin hiya nag-iistar"],
      ["How old he was", "Kung ilang taon na siya", "Nung pilan nang banua", "Kon pira na an iya edad"],
    ),
    q(
      "What did the giant promise?",
      ["To return Stella's star", "Ibabalik ang bituin ni Stella", "Ibalik ing batwin nang Stella", "Ibalik an bituon ni Stella"],
      ["To leave the mountain", "Aalis sa bundok", "Mako king bunduk", "Bayaan an bukid"],
      ["To build a bridge", "Gagawa ng tulay", "Gawa yang tulay", "Maghimo hin taytay"],
      ["To sing a song", "Aawit ng kanta", "Kumanta", "Magkanta"],
    ),
    q(
      "How did the giant feel at the end?",
      ["Happy", "Masaya", "Masaya", "Malipay"],
      ["Lonely", "Nalulumbay", "Malungkot", "Nag-iinusara"],
      ["Angry", "Galit", "Mimua", "Masina"],
      ["Tired", "Pagod", "Masayad", "Kapoy"],
    ),
  ],
  // Chapter 12
  [
    q(
      "What filled the mountain?",
      ["The star's golden light", "Ang gintong liwanag ng bituin", "Ing gintung sula ning batwin", "An bulawan nga sanag han bituon"],
      ["Dark clouds", "Maiitim na ulap", "Madalumdum a ulap", "Maiitom nga dampog"],
      ["Cold water", "Malamig na tubig", "Marimlang danum", "Mahagkot nga tubig"],
      ["Loud music", "Malakas na tugtog", "Maingay a musika", "Makusog nga musika"],
    ),
    q(
      "What did Stella whisper?",
      ["A magical word", "Isang mahiwagang salita", "Metung a madyik a salita", "Usa nga mahika nga pulong"],
      ["A secret name", "Isang lihim na pangalan", "Metung a lingid a lagyu", "Usa nga tago nga ngaran"],
      ["A song", "Isang awit", "Metung a kanta", "Usa nga kanta"],
      ["A wish for food", "Isang hiling na pagkain", "Metung a aduan para king pamangan", "Usa nga hangyo hin pagkaon"],
    ),
    q(
      "What appeared around the giant's home?",
      ["Beautiful flowers", "Magagandang bulaklak", "Masampagang sampaga", "Mahusay nga mga bukad"],
      ["Tall trees", "Matataas na puno", "Matas lang tanaman", "Hatag-as nga mga kahoy"],
      ["Big rocks", "Malalaking bato", "Maragul lang batu", "Dagku nga mga bato"],
      ["New houses", "Mga bagong bahay", "Bayung bale", "Bag-o nga mga balay"],
    ),
  ],
  // Chapter 13
  [
    q(
      "Who joined them on the journey?",
      ["The rabbit and the turtle", "Ang kuneho at ang pagong", "Ing kunehu at ing pau", "An kuneho ngan an bao"],
      ["The giant", "Ang higante", "Ing higante", "An higante"],
      ["Lily's mother", "Ang ina ni Lily", "Ing indu nang Lily", "An nanay ni Lily"],
      ["Another fairy", "Isa pang diwata", "Aliwang lara", "Iba nga diwata"],
    ),
    q(
      "What was the sun doing when they reached the village?",
      ["Beginning to rise", "Nagsisimulang sumikat", "Megumpisa ne ing panyalungat", "Nagtitikang pagsirang"],
      ["Setting", "Lumulubog", "Lulubug ya", "Nasalop"],
      ["Hiding behind clouds", "Nagtatago sa likod ng ulap", "Makubli ya king likuran ning ulap", "Natago ha luyo han dampog"],
      ["Shining at noon", "Kumikinang sa tanghali", "Sisila king ugtu", "Nasirak ha kaudtohon"],
    ),
    q(
      "Why did Lily feel happy?",
      ["She made wonderful new friends", "Nagkaroon siya ng mga bago at kahanga-hangang kaibigan", "Nakagawa yang bayung masampagang kaluguran", "May-ada hiya maopay nga bag-o nga mga sangkay"],
      ["She found gold", "Nakahanap siya ng ginto", "Mekakit yang gintu", "Nakakita hiya hin bulawan"],
      ["She got a new house", "Nagkaroon siya ng bagong bahay", "Ating yang bayung bale", "May-ada hiya bag-o nga balay"],
      ["She learned to fly", "Natuto siyang lumipad", "Miyaral yang sumulapo", "Nakat-on hiya lumupad"],
    ),
  ],
  // Chapter 14
  [
    q(
      "What did Stella give Lily?",
      ["A tiny silver necklace", "Isang munting kuwintas na pilak", "Metung a malating kuentas a pilak", "Gutiay nga kwintas nga pilak"],
      ["A golden ring", "Isang gintong singsing", "Metung a gintung singsing", "Bulawan nga singsing"],
      ["A magic wand", "Isang mahiwagang patpat", "Metung a madyik a patpat", "Mahika nga sungkod"],
      ["A flower crown", "Isang koronang bulaklak", "Metung a koronang sampaga", "Korona nga bukad"],
    ),
    q(
      "What did the necklace have?",
      ["A star that glowed in the dark", "Bituing kumikinang sa dilim", "Malating batwin a sisila king kadalumduman", "Bituon nga nasirak ha kadudulman"],
      ["A red stone", "Pulang bato", "Malutung batu", "Pula nga bato"],
      ["A tiny bell", "Munting kampana", "Malating kampana", "Gutiay nga lingganay"],
      ["A heart", "Puso", "Pusu", "Kasingkasing"],
    ),
    q(
      "Where did the fairy fly?",
      ["Into the sky", "Sa langit", "King banua", "Ngadto ha langit"],
      ["Into the river", "Sa ilog", "King ilug", "Ngadto ha salog"],
      ["To the mountain", "Sa bundok", "King bunduk", "Ngadto ha bukid"],
      ["To the village", "Sa nayon", "King baryu", "Ngadto ha baryo"],
    ),
  ],
  // Chapter 15
  [
    q(
      "How often did Lily wear her necklace?",
      ["Every day", "Araw-araw", "Balang aldau", "Kada adlaw"],
      ["Only at night", "Sa gabi lamang", "King bengi mu", "Ha gab-i la"],
      ["Once a year", "Isang beses sa isang taon", "Misan king metung a banua", "Usa ka beses kada tuig"],
      ["Never", "Hindi kailanman", "E kapilan man", "Diri gud"],
    ),
    q(
      "What did Stella bring when she visited?",
      ["Gifts for Lily and her mother", "Mga regalo para kay Lily at sa kanyang ina", "Kalo para kang Lily at king kayang indu", "Mga regalo para kan Lily ngan ha iya nanay"],
      ["Food for the giant", "Pagkain para sa higante", "Pamangan para king higante", "Pagkaon para ha higante"],
      ["A new star", "Isang bagong bituin", "Metung a bayung batwin", "Bag-o nga bituon"],
      ["Flowers for the rabbit", "Mga bulaklak para sa kuneho", "Sampaga para king kunehu", "Mga bukad para ha kuneho"],
    ),
    q(
      "What did the giant plant around his mountain?",
      ["Flowers", "Mga bulaklak", "Sampaga", "Mga bukad"],
      ["Trees", "Mga puno", "Tanaman", "Mga kahoy"],
      ["Vegetables", "Mga gulay", "Gule", "Mga utan"],
      ["Grass", "Damo", "Dikut", "Mga ruot"],
    ),
  ],
];

// The pretest screen shows options in the given order, so the correct
// answer's position rotates from question to question.
const buildQuestions = (
  dialect: StoryDialect,
  chapterIndex: number,
): StoryPracticeQuestion[] =>
  deshawnQuestions[chapterIndex].map((question, index) => {
    const [correctMeaning, ...wrong] = question.answers.map(
      (row) => row[COLUMN[dialect]],
    );
    const options = [...wrong];
    options.splice((chapterIndex * 3 + index) % 4, 0, correctMeaning);

    return {
      id: index + 1,
      type: "multiple_choice",
      word: question.word,
      correctMeaning,
      options,
      comprehension: true,
    };
  });

const DIALECTS: StoryDialect[] = ["tagalog", "kapampangan", "waray"];

export const deshawnComprehensionChapters: StoryPracticeChapter[] =
  DIALECTS.flatMap((dialect) =>
    deshawnQuestions.map((_, index) => ({
      dialect,
      chapter: index + 1,
      lessonId: `story_${dialect}_deshawn_${index + 1}`,
      questions: buildQuestions(dialect, index),
      // Matches the pretest screen's pass mark (60% of 3 = 2), so a
      // "won" result also unlocks the next chapter.
      requiredCorrect: 2,
    })),
  );
