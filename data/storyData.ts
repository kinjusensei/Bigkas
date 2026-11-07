// =========================================================
// STORY CONTENT — "Whispers" (31 chapters)
// =========================================================
import { TIERS } from "../utils/lessonTiers";
import { isStoryComingSoon, storyTierIndex } from "../utils/storyLevels";
import { tagalogTermsByChapter } from "./Whispers_Tagalo_Terms_Chapters_2-31";
import {
  DESHAWN_STORY_ID,
  DESHAWN_STORY_TITLE,
  deshawnChapters,
} from "./stories/deshawn";
import {
  OLD_HOUSE_DIALECTS,
  OLD_HOUSE_KAPAMPANGAN_TITLE,
  OLD_HOUSE_STORY_ID,
  OLD_HOUSE_STORY_TITLE,
  OLD_HOUSE_TAGALOG_TITLE,
  OLD_HOUSE_WARAY_TITLE,
  oldHouseChapters,
} from "./stories/oldHouse";
import { kapampanganVocabularyByChapter } from "./story-practice/kapampangan";
import { tagalogStoryPracticeChapters } from "./story-practice/tagalog";

// English prose is written ONCE and shared by all three dialects.
// Only the per-dialect bits live in `byDialect`:
//   - lessonId  (tagalog_1 / kapampangan_1 / waray_1, etc.)
//   - terms     (tappable word annotations + translations)
//
// So a typo fix in the prose is a one-place edit, not three.
// Use getChaptersForDialect(dialect) to get the resolved chapter list.
//
// TERM ANNOTATIONS: Chapter 1 is authored here; Tagalog Chapters 2–31
// receive their annotations from the dedicated vocabulary module below.
// Each annotation's `match` must be an exact substring of
// body[paragraphIndex], or it's silently skipped.
//
// TRANSLATIONS: `translations[i]` is the dialect version of `body[i]`.
// The reader shows the English paragraph in parentheses with the
// dialect translation beneath it. Some source translations are still
// incomplete; missing entries render as English only.

export type StoryDialect = "tagalog" | "kapampangan" | "waray";

const ALL_STORY_DIALECTS: StoryDialect[] = ["tagalog", "kapampangan", "waray"];

export type DialectTermAnnotation = {
  paragraphIndex: number;
  match: string; // must be an exact substring of body[paragraphIndex]
  // Exact substring in translations[paragraphIndex], when the translated
  // text has a verified equivalent that can be highlighted in Dialect mode.
  dialectMatch?: string;
  dialect: string; // the translation shown to the user
  explanation: string;
  /** IDs of exact-match story practice questions for this vocabulary term. */
  practiceQuestionIds?: number[];
  // A chapter practice word: gold style, highlighted in the dialect text
  // only (never the English), at dialectStart in translations[paragraphIndex].
  practiceWord?: boolean;
  dialectStart?: number;
  audioUrl?: string | number; // pre-recorded pronunciation; without it the app
  // falls back to device TTS, which only supports Tagalog
  // Optional "How to use it" lines in the word popup; hidden when absent.
  example?: string; // example sentence in the dialect
  exampleEnglish?: string; // its English translation
};

function normalizePracticeText(value: string): string {
  return value
    .trim()
    .toLocaleLowerCase()
    .replace(/[“”"'?!,.:;()]/g, " ")
    .replace(/\bmga\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function questionMatchValues(question: {
  type: string;
  word?: string;
  correctMeaning?: string;
  meaning?: string;
  correctWord?: string;
  prompt?: string;
}): string[] {
  if (question.type === "fill_blank") {
    return [question.meaning, question.correctWord].filter(
      (value): value is string => Boolean(value),
    );
  }
  if (question.type === "expression") return [];
  return [question.word, question.correctMeaning, question.prompt].filter(
    (value): value is string => Boolean(value),
  );
}

function practiceValuesMatch(left: string, right: string): boolean {
  if (left === right) return true;
  if (left.length < 4 || right.length < 4) return false;
  return left.includes(right) || right.includes(left);
}

function linkTagalogPracticeQuestions(
  chapter: number,
  terms: DialectTermAnnotation[] | undefined,
): DialectTermAnnotation[] | undefined {
  if (!terms) return terms;
  const questions = tagalogStoryPracticeChapters.find(
    (item) => item.chapter === chapter,
  )?.questions;
  if (!questions?.length) return terms;

  return terms.map((term) => {
    const termValues = [term.match, term.dialectMatch]
      .filter((value): value is string => Boolean(value))
      .map(normalizePracticeText);
    const practiceQuestionIds = questions
      .filter((question) =>
        questionMatchValues(question).some((value) =>
          termValues.some((termValue) =>
            practiceValuesMatch(normalizePracticeText(value), termValue),
          ),
        ),
      )
      .map((question) => question.id);

    return practiceQuestionIds.length ? { ...term, practiceQuestionIds } : term;
  });
}

type DialectChapterData = {
  lessonId: string;
  title?: string;
  terms?: DialectTermAnnotation[];
  // One translated paragraph per entry in the chapter's `body`, SAME
  // ORDER, SAME LENGTH. Leave an entry as "" (or omit the array) for
  // paragraphs not translated yet — those render as English only.
  // See the note at the bottom of this file.
  translations?: string[];
  // true = dialect text is an unchecked draft; false = reviewed.
  needsReview?: boolean;
};

export type SharedChapter = {
  id: number;
  title: string;
  body: string[];
  byDialect: Record<StoryDialect, DialectChapterData>;
};

export type StoryChapter = {
  id: number;
  title: string;
  englishTitle: string;
  body: string[];
  lessonId: string;
  dialect: StoryDialect;
  terms?: DialectTermAnnotation[];
  translations?: string[];
  needsReview?: boolean;
};

const sharedChapters: SharedChapter[] = [
  {
    id: 1,
    title: "Chapter 1",
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
        terms: linkTagalogPracticeQuestions(1, [
          {
            paragraphIndex: 4,
            match: "morning",
            dialectMatch: "umaga",
            dialect: "Umaga",
            explanation:
              'Umaga means "morning" in Tagalog — as in the greeting Magandang umaga, "good morning."',
          },
          {
            paragraphIndex: 6,
            match: "slowly",
            dialectMatch: "Dahan-dahan",
            dialect: "Dahan-dahan",
            explanation:
              'Dahan-dahan means "slowly" or "carefully" — often said to mean "take it easy."',
          },
          {
            paragraphIndex: 7,
            match: "village",
            dialectMatch: "nayon",
            dialect: "Nayon",
            explanation:
              'Nayon is the Tagalog word for "village" or "hometown."',
          },
          {
            paragraphIndex: 0,
            match: "posthumous",
            dialectMatch: "pumanaw",
            dialect: "Tagalog",
            explanation: 'Pumanaw means "passed away" or "died."',
          },
          {
            paragraphIndex: 1,
            match: "Mist",
            dialectMatch: "hamog",
            dialect: "Tagalog",
            explanation: 'Hamog means "mist" or "fog."',
          },
          {
            paragraphIndex: 11,
            match: "Reputation",
            dialectMatch: "reputasyon",
            dialect: "Tagalog",
            explanation:
              'Reputasyon means "reputation," referring to the public standing, honor, or good name of the family.',
          },
        ]),
        translations: [
          "Ang lupain ng mga Vale ay may paraan upang iparamdam sa mga nabubuhay na tila sila ay pumanaw na rin.",
          "Unang dumating si Lucien Vale, gaya ng lagi niyang ginagawa kapag may kailangang kunin o bawiin. Nakatayo siya sa bakal na gate habang nakataas ang kuwelyo laban sa hangin ng Oktubre, pinapanood ang mansiyon na lumitaw mula sa hamog. Para itong isang masamang alaala na umaahon mula sa tulog—pamilyar, mali, at imposibleng hindi pansinin. Nawalan na naman ng isang bintana ang silangang tore. Nilamon na ng baging ang pader ng hardin. Unti-unting kinakain ng bahay ang sarili nito, at matagal na itong nangyayari.",
          "Gaganapin ang libing ng kanyang lola sa loob ng mansiyon, alinsunod sa sinaunang tradisyon ng pamilya na sarilinin ang lahat ng pighati.",
          "Dumating si Selene pagkaraan ng isang oras sakay ng arkiladong kotse. Nakabutones ang kanyang maitim na amerikana hanggang sa lalamunan, at may leather na bag sa kanyang balikat na tila ba dumarating siya para makipag-ayos sa isang pagsasanib ng kumpanya. Tiningnan niya si Lucien—isang mapanuring tingin, maingat—at hinalikan ito ng isang beses sa bawat pisngi nang walang init.",
          '"Kaninang umaga ka pa nagmaneho papunta rito?" tanong niya.',
          '"Kagabi pa," sagot ni Lucien. "Gusto kong makita ang lugar."',
          "Dahan-dahang tumango si Selene. Alam niya ang ibig sabihin niyon—naglilista na si Lucien ng mga ari-arian.",
          "Huling dumating si Elias, naglakad lamang mula sa nayon dahil naiwan niya ang huling koneksyon ng tren at walang perang pambayad sa taksi. Mas payat siya ngayon kaysa sa natatandaan ng dalawa. May tila pasa sa paligid ng kanyang mga mata, isang ligaw na kislap na maaaring dahil sa pighati o sa isang bagay na mas mababa ang dignidad. Niyakap niya si Selene nang napakahigpit at kinamayan si Lucien gamit ang magkabilang kamay.",
          '"Hinanap niya kayong dalawa," sabi ni Elias. "Sa huling sandali. Ako lang ang nandito."',
          "Walang sumagot.",
          "Nagpatuloy ang libing sa malaking bulwagan ng mansiyon, na dinaluhan ng tatlong pinsan, dalawang matatandang kasambahay, at isang abogado na nagngangalang G. Harwick na nagmaneho pa mula sa lungsod at umalis agad matapos basahin ang huling habilin. Mukha siyang nakahinga nang maluwag nang makaalis. Ang dokumentong iniwan niya ay isang pahina lamang, sulat-kamay sa tumpak na panulat ng kanilang lola, may mga saksi, notaryado, at pinal.",
          "“Ang pamana ng pamilya Vale, lahat ng ari-arian, hawak na kumpanya, trust fund, at titulo, ay mapupunta sa sinumang tagapagmana na makapagbabalik ng pampublikong reputasyon ng pamilya. Reputasyon ang tanging salapi na nananatili. Ang tagapagmanang magbabalik ng dignidad sa pangalang Vale ang makatatanggap ng lahat. Kung walang tagapagmana ang magtagumpay sa loob ng tatlong taon, ang pamana ay mapupunta sa isang irrevocable trust na hinding-hindi na maipapamahagi kailanman. Pinalaki kayo para maunawaan ang kahulugan ng pangalang ito. Patunayan ninyo.”",
          "Dalawang beses nila itong binasa nang tahimik. Sa labas, may nahanap na maluwag na bintana ang hangin at nagsimula itong kalampagin nang may ritmo.",
          '"Ginawa niya itong isang paligsahan," sa wakas ay sabi ni Elias.',
          '"Ginawa niya itong isang pamantayan," pagwawasto ni Lucien. "May pagkakaiba iyon."',
          'Maingat na itiniklop ni Selene ang papel. "Nawasak na ang reputasyon ng pamilya. Isang dekada na. Bumabagsak ang mga negosyo. Ang mga tsismis ng korapsyon. Ang demanda na hindi man lang umabot sa paglilitis." Tiningnan niya ang kanyang mga pinsan. "Halos imposible ito."',
          '"Halos," sabi ni Lucien.',
          "Nang gabing iyon, nagising si Selene sa ikatlo ng madaling araw mula sa isang panaginip na agad niyang nalimutan. Nahiga siya sa dilim habang nakikinig sa bahay—sa mga tubo nito, sa lumalutong na kahoy, sa lumang wika ng daing nito—at pagkatapos ay may narinig siyang ibang bagay sa ilalim ng lahat ng iyon.",
          "Isang tinig, malapit at pribado, na tila ba nanggagaling sa isang lugar sa likod ng kanyang dibdib:",
          "Akin ka. (You belong to me)",
          "Napaupo siya nang tuwid. Walang tao sa silid. Ang pasilyo sa labas ng pinto ay madilim at tahimik. Isinalalay niya ang kanyang likod sa uluhan ng kama at huminga nang dahan-dahan hanggang sa bumalik ang tibok ng kanyang puso sa normal.",
          "Sinabi niya sa sarili na ingay lang iyon ng bahay. Ang mga lumang lugar ay may mga tunog. Masyado lang niyang binibigyan ng kahulugan ang ari-arian ng isang pumanaw na babae.",
          "Hindi niya ito binanggit sa almusal.",
          "Ganoon din si Elias.",
          "Ganoon din si Lucien.",
        ],
      },
      kapampangan: {
        lessonId: "kapampangan_1",
        title: "Kapitulu 1",
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
        translations: [
          "Atin yang sariling kaparalanan ing mansyon da reng Vale ba lang gawang mukhang mete reng mabie karin. I Lucien Vale ing mumunang miras, anti king gawan na nung atin bage kailangan ipaglaban. Makatindeg ya king siping ning bakal a pasamanu, makatiklop ya ing kolar ning kayang koti uli ning angin ning Oktubre, kabang tatanawan ne ing bale a unti-unting masisira king pamilabas ning banua. Ing aslagang tore mewalan ne naman salaming bintana, at ding baging kinuku no reng pader ning tanaman.",
          "Agpang king matuang tradisyun ning pamilya, ing burol ning karelang lola gawan de king kilub mansyon mu, ba ping karin na mu mairas ing pamanangis ning pamilya.",
          "Kaibat ning metung a oras, miras ya i Selene sakay king arkilang saken, makasara ing madalumdum nang koti angga king batal. Atin yang satchel king abaga na a parang makasadyang makipagnegosiasyun. Kinatiman ya kang Lucien at siningilan ne king balang pisngi nang alang pamigsalat.",
          '"Miras ka ngening abak?" kutang na.',
          '"Kagabi pa," ngan nang Lucien. "Buri ke kasing akit ing mabilug a lugal."',
          "Kinatango ya nang maluat i Selene uling balu na nung nanu ang buri nang sabyan: mag-iimbentaryu ya i Lucien kareng pibandian.",
          "I Elias ing tauling miras; naglakad ya mu ibat king baryu uling elakwan ne ing tauling tren at e ne agyung mag-arkilang saken. Mas mapayat ya kesa king kasanayan dang akit. Atin yang bakas ning pagal kareng mata na, a puring ibat king pamanangis o nanu mang bage. Inakap ne i Selene nang masyadung mahigpit at kinamkam no ring aduang gamat nang Lucien.",
          '"Miyabe-yabe tana mu rin ditak," ngan nang Elias. "Aku na mu ing laging makatagan keni."',
          "Alang sinabat kaya.",
          "Mitatag ya ing pamipon king maragul a bulwagan ning mansyon. Naroon la naman ding atlung pinsan, aduang matuang opisyal, at metung a abogado a i Mr. Harwick, a mabilis minalis kayari nang binasa ing testamento. Ing dokumentung inakwan na metung ya mu kapirasong papel, sinulat king gamat ning karelang lola, maki saksi, notarizadu, at pinal.",
          "Agpang king testamento, ing pamanang i-Vale—ding pibandian, trust fund, at titulo—mapunta ya king ninu mang tagapagmana a makapagbalik king dangal ning pamilya king publiku. Ing reputasyun na mu ing natatagan a kayamanan. Nung ala mang magtagumpe kilub ning atlung banua, ing pamana mapunta ya king metung a irrevocable trust a e na mibie kapilan man.",
          "Tahimik de pinaras binasa iti nang aduang besis.",
          '"Gewa neng kompetisyun ning lola," ngan nang Elias.',
          '"Gewa neng pamantayan," pibayu ne i Lucien. "Atin yang pamiyaliwa ita."',
          'Maingat neng tiniklop ni Selene ing pahina. "Ing reputasyun ning pamilya wasak ya metung a dekada na, uli da ring tsismis king korupsyun at ding kasung e man miras king husgado." Tinitigan no reng pinsan na. "Masyadung mabayat iting paralan."',
          'Maselan neng tiklip Selene ing bulung. "Ing repu-tasyun ning pamilya sira na. Metung neng dekada. Memagsara la reng negosyu. Deng bali-balita tungkul king korapsyun. Ing demanda a e na mitalakad king ukuman." Lawen nala reng pinsan na. "Alos impusible ini."',
          'Maselan neng tiklip Selene ing bulung. "Ing repu-tasyun ning pamilya sira na. Metung neng dekada. Memagsara la reng negosyu. Deng bali-balita tungkul king korapsyun. Ing demanda a e na mitalakad king ukuman." Lawen nala reng pinsan na. "Alos impusible ini."',
          '"Alos," ngat nang Lucien.',
          "Kanitang benging ita, nagising ya i Selene king a-tres ning abak ibat king panenapun a sadyang kalingwan na na. Kakarungut ya king kasaluman, pakiramdaman ne ing bale—reng tubu na, reng mangalantang dutung, ing matuang amanu ning kayang daing—at kaybat, ating aliwang bage a naramdam na king lalam na nitang anggu.",
          "Metung a siwala, malapit at pansarili, antimong manibat king nangan king lalam ning kayang pusu:",
          "Kaku ka.",
          "Mipalukluk ya. Alang laman ing silid. Ing pasilyu king lual ning pasulut madalumdum at tahimik. Siningda ne ing kayang uanan king dulo ning tumpalan at dinalas ya anggang mibalik king kadawit ing tibuk ning kayang pusu.",
          "Sinabi na king sarili na bale mu ita. Reng matuang lukal ating katun. Masydung dakal ing babasan na tungkul king pibandian ning matatangkang babai.",
          "E na ne binalu ita king pamangan abak.",
          "Ali mu naman i Elias.",
          "Ali mu naman i Lucien.",
        ],
      },
      waray: {
        lessonId: "waray_1",
        title: "An Lubong",
        terms: [
          {
            paragraphIndex: 4,
            match: "morning",
            dialectMatch: "aga",
            dialect: "Aga",
            explanation: 'Aga means "morning" in Waray.', // TODO: verify
          },
          {
            paragraphIndex: 7,
            match: "village",
            dialectMatch: "baryo",
            dialect: "Baryo",
            explanation: 'Baryo means "village" in Waray.', // TODO: verify
          },
        ],
        translations: [
          "An panimalay han pamilya Vale may paagi nga an mga buhi naabat nga baga hin mga patay na.",
          "Hi Lucien Vale an siyahan nga inabot, sugad han iya pirme ginbubuhat kon may butang nga kinahanglan niya angkonon. Natindog hiya ha ganghaan nga puthaw, nakatindog an kwelyo han iya bado tungod han mahagkot nga hangin han Oktubre. Ginkikita niya an dako nga balay nga hinay-hinay nga nakikita tikang ha dampog, sugad hin maraot nga hinumdoman nga nabalik ha hunahuna tikang ha pagkaturog, pamilyar, diri-mao, ngan diri na gud mawara ha paniplat. May usa na liwat nga bintana nga nawara ha este nga tore. Natakpan na han mga tanom nga ivy an pader han hardin. Baga hin ginkakaon na han balay an kalugaringon hito, ngan maiha na nga sugad hito an nahitatabo.",
          "Didto ha sulod hito bubuhaton an lubong han iya lola, sumala han daaan na nga batasan han ira pamilya nga taguon ha publiko an ira kasurob-on.",
          "Inabot hi Selene paglabay hin usa ka oras sakay hin ginpletehan nga awto, an iya maitom nga amerikana nakabutones tubtob ha liog, ngan may dara hiya nga bag nga panit ha usa nga sugnong, sugad hin tikadto hiya basi makipagsabot hin negosyo. Ginkita niya hi Lucien hin madaliay, baga hin gin-aadman gud niya hiya, antes hiya humarok hin makausa ha tagsa nga pisngi nga waray ngani mag paso.",
          "“Yana ka ba nga aga nagbiyahe tipakadi?” pakiana niya.",
          "“Kagab-i,” baton niya. “Karuyag ko makita an lugar.”",
          "Hinay-hinay nga tinango hiya. Maaram hiya kon ano an karuyag sidngon hito. Nag-iimbentaryo na hi Lucien han mga butang ha ira.",
          "Hi Elias an urhi nga inabot. Naglakat la hiya tikang ha baryo kay waray na niya maabti an sunod nga koneksyon han tren, ngan waray hiya kwarta para mag-arkila hin awto. Mas nagpayat hiya kay han ira kataposan nga pagkita ha iya. Baga hin may bun-og an palibot han iya mga mata, ngan may pagkuri ngan kapaso an iya pagkinita nga mahimo tungod han kasurob-on tungod han iba nga butang nga diri angayan ipakita. Ginhangkop niya hi Selene hin sobra kahugot, ngan ginkamayan hi Lucien gamit an iya duha nga kamot.",
          "“Ginbiling kamo nga duha ni Lola,” siring ni Elias. “Han hirani na hiya mamatay. Ako la an nakada.”",
          "Waray bisan hino ha ira bumaton.",
          "Ginpahigayon an lubong ha daku nga pasilyo han mansyon. Tulo nga patod, duha nga lagas na nga surugoon, ngan usa nga abogado nga hi Mr. Harwick an tinambong. Nagbiyahe hiya tikang ha syudad, pero lumakat dayon katapos basahon an testamento. Baga hin nalipay pa hiya nga makagawas na. Usa la ka pahina an dokumento nga iya ginbilin, sinurat mismo han ira lola ha iya maopay ngan klaro nga agi han pagsurat, may mga testigo, may notaryo, ngan pinal na.",
          "An panurundon han pamilya Vale—upod an ngatanan nga propyedad, mga panag-iya, pondo, ngan titulo—mapapasa ha bisan hin-o nga manurunod nga makakapakita nga naibalik niya an maopay nga ngaran han pamilya ha paniplat han publiko. An maopay nga reputasyon amo la an bahandi nga nagpapabilin ha kadayonan. An manurunod nga makakabalik han dungog han ngaran nga Vale makakakarawat han ngatanan. Kon waray bisan hin-o nga maglampos sulod hin tulo ka tuig, an ngatanan nga panurundon ibubutang ha usa nga pondo nga diri na gud mahimo kuhaon o bahin-bahinon. Gintutdoan kamo samtang nagtutubo pa nga masabtan kon ano an kahulogan han aton ngaran. Pamatuod-i ito.",
          "Duhá ka beses nira ito ginbasa nga waray nagyakan. Ha gawas, may bahin han bintana nga diri sarado hin maupay, ngan an hangin padayon nga nag-uuyog hito ha pariho nga agi.",
          "“Ginhimo niya ini nga kompetisyon,” siring ni Elias ha urhi.",
          "“Ginhimo niya ini nga sukol nga kinahanglan naton maabot,” pagtadong ni Lucien. “Diri ito pariho nga butang.”",
          "Maopay ngan husto nga gintupi ni Selene an papel.",
          "“Guba na gud an reputasyon han aton pamilya. Napulo ka tuig na nga sugad hini. Napapakyas an mga negosyo. May mga sumat mahitungod han korapsyon. Ngan adto nga kaso nga waray gud makaabot ha husgado.” Ginkita niya an iya mga patod. “Haros imposible ini.”",
          "“Haros,” siring ni Lucien.",
          "Hito nga gab-i, nagmata hi Selene han alas tres han kaagahon tungod hin usa nga inop nga dayon niya nakalimtan. Nahigda hiya ha kasisidman samtang namamati ha mga tunog han balay—an mga tubo, an mga kahoy nga hinay-hinay nga nauuswag tungod han pagbag-o han temperatura, ngan an daan nga mga tunog nga sugad hin nagrereklamo an balay.",
          "Katapos, may iba hiya nga nabatian ha ilarom hito ngatanan.",
          "Usa nga tingog, hirani gud ngan para la ha iya, sugad hin tikang ito ha sulod han iya dughan.",
          "Akon ka.",
          "Lingkod dayon hiya ha higdaan. Waray tawo ha kwarto. Maitom ngan hilom an pasilyo ha luyo han purtahan. Ginsandig niya an iya taludtod ha ulonan han higdaan ngan hinay-hinay nga nagginhawa tubtob nga bumalik ha haros normal an pitik han iya kasingkasing.",
          "Ginsidngan niya an iya kalugaringon nga tikang la ito ha balay. May mga tunog an mga daan nga lugar. Bangin sobra la hiya paghunahuna mahitungod han panurundon han usa nga babaye nga hirani na mamatay.",
          "Waray niya ito igsumat han pamahaw.",
          "Waray liwat sumiring hi Elias.",
          "Ngan waray liwat hi Lucien.",
        ],
      },
    },
  },
  {
    id: 2,
    title: "Chapter 2",
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
        terms: linkTagalogPracticeQuestions(2, tagalogTermsByChapter[2]),
        translations: [
          "Ang bahay ay may mga patakaran na walang sinuman ang nag-abala pang isulat.",
          "“Huwag bubuksan ang pinto ng bodega (cellar) kapag madilim na. Huwag tatanungin si Maren, ang matandang tagapamahala ng bahay, tungkol sa silangang pakpak (east wing). Huwag titingnan nang matagal ang mga larawan sa pangunahing pasilyo; may kakaiba sa mga ipinintang mata na nagbibigay ng impresyon na sinusuri nila ang sinumang dumaan sa ilalim nila.”",
          "Si Selene, na walang tiwala sa mga hindi nakasulat na patakaran gaya ng kawalan niya ng tiwala sa lahat ng anyo ng panlipunang kontrol, ay nagsimulang labagin ang mga ito sa sistematikong paraan.",
          "Ang pasilyo ng silangang pakpak ay selyado ng isang padlock na kinalawang na sa isang permanenteng itsura. Para sa kanya, mukha itong bago pa lamang; ang kalawang, sa tingin niya, ay palabas lamang. May nagnais na magmukha itong mas matanda kaysa sa totoong edad nito. Kumuha siya ng bolt cutter mula sa bodega ng tagapangalaga ng bakuran at pagbalik niya ay nakita niyang naghihintay si Lucien sa pasilyo.",
          '"Imumungkahi ko sana na gawin natin ito nang magkasama," sabi ni Lucien.',
          '"Imumungkahi mo ba iyan bago o pagkatapos mo nang makapasok sa loob?" tanong ni Selene.',
          'Ngumiti si Lucien, nang tapat at saglit. "Magkatulad na magkatulad tayo, ikaw at ako."',
          '"Huwag," sabi ni Selene, at pinutol ang selyo.',
          "Madilim ang pasilyo sa loob at amoy basang kahoy na may iba pang amoy sa ilalim niyon—isang kemikal at nakakapangamba, tulad ng amoy ng lumang takot kapag wala itong mapuntahan. Sabay-sabay silang naglakad sa loob habang hawak ang kanilang mga telepono bilang sulo.",
          "Mas malala ang mga larawan dito kaysa sa pangunahing bahay. May bumalik sa bawat canvass gamit ang isang matalim na kagamitan at ginilitan ang bawat mukha—hindi basta-basta, kundi sa sistematikong paraan, mukha bawat mukha, na tila ba tinatapos ang isang mahalagang gawaing pampangasiwaan. Ang mga mata ang laging huling sinisira. Makikita mo ang pagkakasunod-sunod nito kung titingnan mong mabuti. Hindi tumingin nang mabuti si Selene.",
          "Ang mga talaarawan (journals) ay nakatago sa isang baon na may mga kuwelyong gawa sa katad na nangitim at tumigas na tila ba naging balat ng mummy. Karamihan sa mga pahina ay sinunog habang nasa loob pa; ang sinumang gumawa nito ay nagsimula ng apoy at tila ba nagbago ang isip, dahil ang mga talaarawan ay kalahating sunog lamang at hindi tuluyang nawasak. Ang partikular na anyo ng hindi pagtatapos na ito ay may malaking kahulugan para kay Selene. Ito ang gawi ng isang taong gustong makalimot ngunit hindi kayang panindigan ang pagbura.",
          "Si Elias ang nakatuklas sa bahagi ng wallpaper. Ipinatong niya ang kanyang kamay sa pader sa dulo ng pasilyo at naramdaman ang pag-alon nito, ang paraan ng pag-angat nito mula sa plaster, at hinila ito. Sa likod ng nanilaw na papel ay may mantsa na kulay lumang kalawang, tuyung-tuyo na ngayon, sapat na matanda upang dumaan sa iba't ibang yugto ng pagkabulok at dumating sa kulay na malapit sa kayumanggi. Hindi malaki—kasinglaki ng dalawang kamay na nakalapat nang patag.",
          "Walang sinuman sa kanila ang nagsabi kung ano iyon.",
          "Iniwan nila ang silangang pakpak at walang sinuman sa kanila ang nakatulog nang maayos pagkatapos niyon.",
          "Nang gabing iyon, mas lumakas ang mga bulong.",
        ],
      },
      kapampangan: {
        lessonId: "kapampangan_2",
        title: "Kapitulu 2",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Ing bale atin yang tuntunung e naman mika-sulat. E ka lalapit king pasamanu potang madalumdum na, e me kukutangan i Maren—ing matuang katiwala—tungkul king aslagan a pakpak, at e mo tatanawan mang maluat reng litratu king tungkuan, uling reng matang pinintura karin balamu tatalukan da ing balang lalakad king lalam da.",
          "I Selene, a e titiwala kareng tuntunung ala naman sulat, sinimulan nang pabaak reti ban usiran.",
          "Ing pinto ning aslagan a pakpak makasusi ya king padlock a miki kalawang. Napansin nang Selene a bayu pa la ring kalawang, na parang sinadya mu ban maging mukhang matua. Kinu no reng pantbas king bodega ning talapamasiadu ban siran ya iti kabang tatanawan ne i Lucien.",
          '"Isipen ku balamu ibari me iting pinto nung sabyan ku keka gawan taya ini," ngan nang Lucien.',
          '"Sinabi mu ba kaku ini bayu ka pa sinubsub keni o kaibat na?"',
          'Ngumisi ya i Lucien nang saguli. "Magkamukha tami talaga, ikami at ikaw."',
          '"E mu na ku kakausapan," ngan nang Selene, at tinbas ne ing padlock.',
          "Ing pasaman king kilub madalumdum ya at mabanglu king lumang kayo at kemikal, amoy ning takut a makasalikut. Lalakad lang tatlo gagamit karing cellphone da billing sulu.",
          "Deng litratu karin mas makatakut la kesa kareng atyu king sala. Atin taung kinudkod king canvas gagamit matarum a kasangkapan ban siran ing balang lupa, dapot deng mata mu ing iniang buklat. E ne tinitigan masyadu ni Selene.",
          "Deng journal makasalikut la king kahang balat. Dakal kareng bulung ding miki bakas ning silab, parang atin taung sinindit api dapot minaliwa ya isip. Ini ing patune ning e tapus a pamagbura king nakaraan a ikit nang Selene.",
          "I Elias naman, atin yang akit king wallpaper—lalam ning plaster, atin dungis a kule kalawang a naging brown na king katua. Bakas ya ning daya dapot alang sinabi nung kaninu ini.",
          "Linual la king aslagan a pakpak, at ala karelang mika masanting a tudtud ketang benging ita.",
        ],
      },
      waray: {
        lessonId: "waray_2",
        title: "An Nakatrangka nga Dapit ha Sinirangan",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "An balay may mga surundon nga waray bisan hin-o nga naghunahuna nga isurat.",
          "Ayaw abrihi an purtahan han bodega ha ilarom han balay kon gab-i na. Ayaw pakiana hi Maren, an lagas nga nagmamangno han balay, mahitungod han dapit ha sinirangan. Ayaw pagkinita hin maiha ha mga letrato ha daku nga pasilyo, kay may usa nga butang ha mga mata han mga tawo nga iginpintura dida hito nga naghahatag hin pagbati nga gin-uusisa nira an tagsa nga naagi ha ilarom hito.",
          "Hi Selene, nga diri nasarig ha mga surundon nga waray iginsusurat, sugad man ha ngatanan nga klase hin pagkontrol ha mga tawo, nagtikang pagtalapas hini hin usa-usa ngan may plano.",
          "An pasilyo tipakadto ha dapit ha sinirangan ginsirad-an hin kandado nga tungod han taya baga na hin permanente nga nagkukunot. Para kan Selene, baga hin bag-o pa la an taya. Naghunahuna hiya nga gintuyo nga ipakita nga mas daan ito kay han tinuod nga edad hito. May usa nga karuyag nga maghunahuna an iba nga maiha na ito nga sirado. Ginkuha niya an pamutol hin kandado ha bodega han tawo nga nagmamangno han tuna, ngan han pagbalik niya, nakadto na hi Lucien ha pasilyo.",
          "“Karuyag ko unta nga magkaupod kita pagbuhat hini,” siring niya.",
          "“Antes ka ba magsiring hito o katapos mo na makasulod?”",
          "Mamingaw nga humiyom hiya, ngan ha madaliay la. “Magkapariho gud kita, ikaw ngan ako.”",
          "“Ayaw,” siring niya, ngan gin-utod an kandado.",
          "Maitom an pasilyo ha luyo hito, ngan may baho hin basa nga kahoy ngan hin iba pa nga baho ha ilarom hito—usa nga kemikal nga baho nga hirani gud, pariho han baho han daan nga kahadlok kon waray na ito iba nga lugar nga mapupuy-an. Naglakat hira nga tulo dida ha pasilyo, nga an mga telepono an ira ginagamit nga suga.",
          "Mas makaharadlok an mga letrato dida kay han mga letrato ha iba nga bahin han balay. May usa nga nagbalik ha tagsa nga dibuho ngan gin-ukaran an ngatanan nga nawong gamit an matarom nga gamit. Diri basta-basta la nga pag-ukad, kundi sunod-sunod ngan may kaayohan, nawong ha nawong, sugad hin may importante nga buruhaton nga kinahanglan tapuson. An mga mata an pirme urhi nga gin-ukaran. Makikita mo an pagkasunod-sunod kon usisahon mo hin maopay. Pero waray pag-usisa hin maopay hi Selene.",
          "An mga journal nakatago ha sulod hin usa nga kahon nga an mga higot nga panit nag-itom ngan nagmatig-a na, sugad hin panit han patay nga lawas nga maiha na nga nahubas. Kadam-an han mga pahina nasunog samtang aada pa ha sulod han mga journal. Bisan hin-o man an nagbuhat hito, gintikangan niya an sunog pero baga hin nagbag-o an iya hunahuna, kay katunga la an naguba han mga journal, diri bug-os. Para kan Selene, may kahulogan ini. Sugad",
          "ito han buhat han usa nga tawo nga karuyag maglimot hin usa nga butang pero diri gud niya kaya tapuson an pagwara hito.",
          "Hi Elias an nakadiskobre han bahin han dingding nga natabonan hin papel. Iginbutang niya an iya kamot ha bungbong ha pinakahirayo nga bahin han pasilyo ngan inabat niya nga maluya ito, sugad hin natutanggal na an papel tikang ha plaster. Ginkaptan niya ito ngan gin-utod. Ha luyo han nanilaw na nga papel may mantsa nga pariho han kolor han daan nga taya. Uga na gud ito yana, ngan maiha na nga panahon an naglabay tikang han nahitabo ito. Baga hin nalabyan na hito an iba-iba nga pagbag-o han pagkadunot tubtob nga nagin kolor brown na ito. Diri daku an mantsa. Pariho la kadaku han duha nga kamot kon igdidiin nga nakabuklad ha dingding.",
          "Waray bisan hin-o ha ira magsiring kon ano ito.",
          "Binaya hira ha dapit ha sinirangan, ngan waray bisan hin-o ha ira an nakaturog hin maopay katapos hito.",
          "Hito nga gab-i, mas nagtikakusog an mga hagunghong.",
        ],
      },
    },
  },
  {
    id: 3,
    title: "Chapter 3",
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
        terms: linkTagalogPracticeQuestions(3, tagalogTermsByChapter[3]),
        translations: [
          "Ang pagbagsak ng pamilya Vale mula sa biyaya ay hindi naging dramatiko. Mas madali sana iyong baligtarin—ang isang solong iskandalo ay kayang lampasan gamit ang sapat na panahon at mga donasyon. Sa halip, ang pagbaba ay naging unti-unti at madikit, nagpapatong-patong sa loob ng dalawang dekada: isang alitan sa paggawa noong 1998 na hindi maayos na hinarap ng pamilya, isang serye ng mga legal na aksyon noong dekada 2000 na tahimik na naayos ngunit hindi sapat na tahimik, mga tsismis ng pakikialam sa politika, at dalawang nabigong negosyo na nagpabagsak din sa mas maliliit na lokal na kumpanya.",
          "Ang bayan ng Hallow's Reach, na lumaki sa lilim ng lupain ng mga Vale sa loob ng tatlong siglo, ay lumipat mula sa paggalang patungo sa pag-aalinlangan, at ngayon ay patungo sa isang bagay na malapit sa paghamak. Ang pangalan ng pamilya, na dating nakasulat sa itaas ng mga pinto ng aklatan ng bayan, ng pakpak ng ospital, at ng saradong pamilihan, ay tahimik na tinanggal sa bawat isa.",
          "Nagpupulong ang mga pinsan sa aklatan tuwing umaga upang magplano.",
          '"Pampublikong proyekto," sabi ni Lucien. "Magrehistro tayo ng isang bagay na nakikita. Ang lumang tulay, marahil. Ang plasa ng bayan."',
          '"Kawanggawa," sabi ni Selene. "Personal na pakikipag-ugnayan. Kailangan nating makita ng mga tao, hindi lang ang pera natin."',
          '"Kailangan nating makipag-usap sa mga tao," sabi ni Elias, na may kaunting hiya ng isang taong nagsasabi ng isang bagay na itinuturing ng lahat na masyadong halata para sabihin pa. "Kausapin lang talaga sila. Ang lola ko ay hindi kailanman umalis sa bahay na ito."',
          "Hinati nila ang trabaho ayon sa kanilang mga ugali. Tumawag si Lucien, ginamit ang mga lumang koneksyon, at kumuha ng mga pangako para sa isang grant sa food bank. Nagsimulang dumalo si Selene sa mga pulong ng konseho ng bayan, nagtitiis sa dalawang oras ng mga pamamaraang mosyon tuwing Huwebes ng gabi nang may pokus ng isang taong sumasailalim sa physical therapy. Nagboluntaryo si Elias sa community center, tinuturuan ang mga bata na maglaro ng chess tuwing Martes ng hapon nang may kahinahunan na ikinagulat ng lahat, kabilang ang kanyang sarili.",
          "Sa loob ng dalawang linggo, tila gumagana ito.",
          "Pagkatapos ay lumabas ang artikulo sa rehiyonal na pahayagan, isang hindi kilalang pagsusumite, na kahit papaano ay may hawak ng mga panloob na dokumentong pinansyal na nagpapatunay na ang Vale Foundation ay naglipat ng pera ng grant noong dekada 1980. Nagpatawag ng pagsusuri ang konseho ng bayan. Tinanggihan ng food bank ang grant. Dumating si Elias sa community center isang Martes at nakitang nakakandado ang silid at may nakadikit na sulat-kamay na tala sa pinto na humihiling na huwag na siyang bumalik.",
          '"May naglalabas ng impormasyon laban sa atin," sabi ni Lucien nang gabing iyon. Napakatahimik niya sa kanyang upuan.',
          '"Isang tao na may access sa apatnapung taong gulang na mga dokumentong pinansyal?" sabi ni Selene.',
          '"Ang bahay na ito ay puno ng mga apatnapung taong gulang na dokumento."',
          "Nagtinginan sila sa isa't isa sa kabila ng talahanayan ng aklatan. Ang apoy sa apuyan ay humina na. Mula sa kung saan sa bahay, mula sa ilang direksyon nang sabay-sabay, tila ba ang mga bulong ay gumalaw sa mga pader tulad ng tubig na dumadaloy sa mga lumang tubo.",
        ],
      },
      kapampangan: {
        lessonId: "kapampangan_3",
        title: "Kapitulu 3 Ing Pabor ning Kekalubupan",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Ing pamaglinis king lagyu ning pamilyang Vale e meging madali. Ing karelang eskandalu mekatumpak kilub ning adwang pulu a banwa—manibat king gulo king obra kanitang 1998, serye da reng kaso kanitang dekada 2000, isyu king pulitika, at adwang negosyung mibagsak.",
          "Ing balen ning Hallow's Reach, a tinas lalam ning lando ning pampamilang Vale king kilub ning atlung dinalan a banwa, unti-unting nawalan ning galang karela. Ing apelyidu ning pamilya unt-unti ring tinikas kareng pampublikung gusali anti king library at ospital.",
          "Deng pinsan magkikit la king library balang abak para milplanu.",
          '"Public works," ngan nang Lucien. "Ayusin taya ing lumang tulay o ing plasa."',
          '"Charity," ngan nang Selene. "Kailangan dakatang akit deng tau king personal a saup, ali mung pamilako pera."',
          '"Kailangan tang makipag-usap kareng ordinaryung tau," ngan nang Elias.',
          "Migdake la king obra agpang king karelang ugali. I Lucien nakipag-text ya kareng lumang kakilala para king grant ning food bank. I Selene naman memun yang dinaras karing miting ning town council. I Elias naman meging volunteer king community center ban mamialung chess kareng anak.",
          "Dapot kaibat ning adwang simana, mika-artikulu king regional paper, metung a anonyumung sulat a miki hawak financial documents. Patutubu na nung makananung ing Vale Foundation miglipat pera kanitang dekada 1980. Binawi ning food bank ing grant, at anyang miras ya i Elias king community center, makakandado ne ing kuartu at miki sulat a nakapikit king pasbul a pakiusap na e na pasibayu munta.",
          '"Atin mang-leak laban kekatamu," ngan nang Lucien kanitang bengi habang mag-isa yang makalukluk king silya.',
          '"Ing tau a maki access king apatpulung banwang dokumentu?" kutang nang Selene.',
          '"Ing baleng ini mapnu yang eganaganang dokumentu," pakibat nang Lucien.',
        ],
      },
      waray: {
        lessonId: "waray_3",
        title: "Kapitulo 3: An Pabor han Katawhan",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "An pagkahulog han pamilya Vale tikang ha grasya waray pa gud magin makatirigamnan. Haros mas madali unta adto nga mabaliktad — an usa la nga iskandalo pwede ma-antos, kun gintagan hin igo nga oras ngan mga donasyon. Lugod an paglugsong hinay-hinay ngan nadukot, nagtitirok hin mga sapaw-patong ha sulod hin duha ka dekada; usa nga away ha pagtrabaho han 1998 nga malain an pag-asikaso han pamilya, usa nga sunod-sunod nga mga legal nga mga aksyon ha dekada 2000 nga nag-upay hin hilom kondi diri igo nga hilom, mga hurob-hurob hin duha nga gudtiay nga mga kompanya nga may-ada mga kapakyasan ha politika, upod ha ira.",
          "An bungto han Hallow’s Reach, nga nagtubo ha lambong han tuna han Vale ha sulod hin tulo ka siglo, binalhin tikang ha pagtahod ngadto ha pagin mabinantayon ngadto ha usa nga butang nga nagtitikahirani ha pagtamay. An ngaran han pamily, nga hadto naka-stencil ha igbaw han mga purtahan han librarya han bungto, ha dapit han ospital, natatabonan nga merkado, hilom nga ginkuha ha kada tagsa.",
          "An mga magparatod nagkirigta ha librarya kada aga basi magplano.",
          "“Mga buhat publiko,” siring ni Lucien. “Nagpapahiuli kami hin nakikita. An daan nga tulay, bangin. An plasa han bungto.”",
          "“Kalooy,” siring ni Selene. “Personal nga pakig-upod. Kinahanglan naton makita, diri la an aton kwarta.”",
          "“Kinahanglan naton makig-istorya ha mga tawo,” siring ni Elias, nga mayda maluya nga kaawod hin usa nga nagyayakan hin usa nga butang nga ginhuhunahuna han ngatanan nga iba nga sobra ka klaro nga igyayakan. “Basta, pakiistorya talaga ha ira. Waray gud gumawas hini nga balay an akon lola.”",
          "Ginbahin-bahin nira an buruhaton uyon ha ira mga kinaiya. Nagtawag hi Lucien, nag aprobetsar hin daan nga koneksyon, nagseguro hin mga saad para hin hatag ha bangko hin pagkaon. Nagtikang hi Selene pagtambong han mga katitirok han konseho han bungto, nag-aantos pinaagi hin duha ka oras nga mga mosyon ha pamaagi kada Huwebes han kulop nga may-ada nakapokus nga pag-antos hin usa nga nag-aagi hin pisikal nga terapiya. Nagboluntaryo hi Elias ha sentro han komunidad, gintututdoan an kabataan nga mag-uyag hin chess ha Martes han kulop nga may pagkamalumo nga nakapahipausa ha ngatanan, pati na hiya.",
          "Ha sulod hin duha ka semana, baga hin nagtrabaho ito.",
          "Katapos, an artikulo gumawas ha rehiyonal nga papel, usa nga diri nagpapakkilala nga pagsumiter, bisan paano may-ada mga pansulod nga mga dokumento pinansyal nga nagpapamatuod nga an Vale Foundation nag-redirect han grant nga kwarta dida han dekada 1980. Nagpanawagan an konseho han bungto hin pagrepaso. Ginbalibaran han bangko han",
          "pagkaon an grant. Inabot hi Elias ha sentro han komunidad han Martes ngan nakita niya nga nakatrangka an kwarto ngan may sinurat-han-kamot nga surat nga igin-tape ha purtahan nga naghahangyo ha iya nga diri na bumalik.",
          "“Mayda nagtuturo kontra ha aton,” siring ni Lucien hadto nga kulop. Duro an iya pag-ukoy ha iya lingkuran.",
          "“Usa nga may akses ha mga dokumento ha pinansyal nga buruhaton nga kwarenta ka tuig na an naglabay?” pakiana ni Selene.",
          "“Puno ini nga balay hin mga dokumento nga kwarenta na ka tuig.”",
          "Nagkinitaay hira ha tabok han lamesa han librarya. Nag-ubos na an kalayo ha rehas. Tikang ha usa nga lugar ha balay, tikang ha pipira nga direksyon hin usa ka bese, baga hin, an mga huring-huring nagkikiwa ha mga bungbong pariho hin tubig nga nagkikiwa ha daan nga tubo.",
        ],
      },
    },
  },
  {
    id: 4,
    title: "Chapter 4",
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
        terms: linkTagalogPracticeQuestions(4, tagalogTermsByChapter[4]),
        translations: [
          "Nasa kusina si Elias sa ikatlo ng madaling araw, hindi makatulog, nang ang tinig ay naging isang bagay na higit pa sa isang bulong.",
          "Nasanay na siya, sa mga nakaraang linggo, sa paligid na bulung-bulungan—ang paraan ng bahay na tila ba humihinga ng wika, ang mga kahulugan na patuloy na nabubuo sa ilalim ng pag-unawa, ang paraan ng kung minsan ay nakakahuli siya ng isang salita o parirala na parang nakikita sa gilid ng mata: naroon at biglang mawawala. Sinabi niya sa kanyang sarili na stress lamang ito. Ang utang ay seryoso—hindi niya sinabi sa kanyang mga pinsan kung gaano kaseryoso—at ang isip sa ilalim ng malubhang presyon ay lumilikha ng mga pandinig na ilusyon. Nabasa na niya ito.",
          "Ang tinig na nagising sa kanya ay hindi isang ilusyon.",
          "Malinaw ito at maayos at nagsalita nang may pagtitiyaga ng isang taong matagal nang naghihintay na mapakinggan:",
          "Unang papatayin ka ng mga pinsan mo.",
          "Idiniin ni Elias ang kanyang likod sa counter ng kusina. Madilim ang silid maliban sa pilot light ng kalan, na nagbibigay ng maputlang asul na liwanag sa lahat ng bagay. Nag-iisa lang siya.",
          "Ang mas matanda ay nagpaplano na. Ang babae ay nagpapasya. Ikaw ang pinakamapakinabangan sa kanila ngayon, at kapag huminto ka na sa pagiging kapaki-pakinabang—",
          '"Tigil," sabi ni Elias.',
          "Huminto ang tinig.",
          "Kumislap ang pilot light.",
          "Nakatayo siya sa madilim na kusina nang matagal, humihinga. Pagkatapos ay binuksan niya ang drower ng kutsilyo—para sa ganap na makatwiran at normal na mga dahilan, sinabi niya sa sarili—at kinuha ang maliit na paring knife at isinubo ito sa bulsa ng kanyang balabal.",
          "Natulog siya kasama iyon sa ilalim ng kanyang unan nang gabing iyon.",
          "Kinabukasan bumili siya ng tatlo pa, mula sa tindahan ng hardware sa bayan, at inilagay ang mga ito sa iba't ibang drower sa paligid ng kanyang silid nang may kaswal na kaayusan ng isang tao na nasisiyahan lamang na may mga pagpipilian.",
        ],
      },
      kapampangan: {
        lessonId: "kapampangan_4",
        title: "Kapitulu 4 Ing Mumunang Pagsira",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Misinubsub ya king kusina i Elias bandang alas kuatro ning matas a bengi, e makatulug, anyang ing boses sinambut ya at meging aliwa na kesa king pabulalas mu.",
          "Nasanayan na ne, karing milabas a simana, ing mahinang ungol ning paligid — ing kapaparalanan nung makananung parang mamhinge yang amanu ing bale, ing kapaparalanan nung makananung ding kabaldugan tatalakad la mu babo ning pamanisip, ing kapaparalanan nung misan makakimut yang amanu o talindug king kapamilatan ning pamanakit king gilid: atyu karin at kaibat mewala ya. Sinabi na king sarili na stress ya mu ini. Mabayat ya ing utang na, e na sinabi karing pinsan na nung makananung kabayat ya, at ing kaisipan lalam ning masikan a panga-ipit lumalang yang pikalaman a pamamamdeng. Makabasa ya tungkul keni.",
          "Ing boses a nung nu ya naging gising aliwa ya mung pikalaman.",
          "Malino ya at paimosan at memamalita ya maki pasensya ning metung a tau a makapagasik a maragul a panaun bang pakiramdaman ya:",
          "Paten da ka murin ding pinsan mu king unahang.",
          "Inisuld nang Elias ing likod na king mesa ning kusina. Madalumdum ya ing kuarto nung e mu pauli ning munting api king kalan, a migpalual king burik a asul king eganaganang bage. Mag-isa ya mu.",
          "Ing mas matua paplano na ne ini. Ing babai kapasyu na ne. Ikaw ing mas makasuyu kareng kekaming ngeni, at nung e na ka na makasuyu—",
          '"Tuknang," ngan nang Elias.',
          "Metung ya mung tinuknang ing boses.",
          "Megningas ya ing munting api.",
          "Tinduk ya king madalumdum a kusina kilub ning maragul a panaun, mamhinge. Kaibat binuklat ne ing drawer da ring kutsilyo, para king marapat at normal a sangkan, sinabi na king sarili na, at sinikap ne ing malating kutsilyo panglasas at inilub ne king bulsa ning kayang gamit.",
          "Mikatulug ya a atyu iti king lalam ning kayang ulunan king benging ita.",
          "Ing tutuki aldo sinambut yang atlu pa, manibat king hardware king balen, at inilub no ring detake king aliwang drawer king kayang kuarto king e kakailang a ayos ning metung a lalaking buri na mu ing maki pipamilian.",
        ],
      },
      waray: {
        lessonId: "waray_4",
        title: "An Siyahan nga Pagkaruba han Hunahuna",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Nakadto hi Elias ha kusina han alas kwatro han aga, diri nakakaturog, han an tingog nagin iba labot la hin paghuring.",
          "Nahigara na hiya, han naglabay nga mga semana, han palibot nga pagngurob — an paagi han pagginhawa han balay hin yinaknan, an paagi han mga kahulogan nga padayon nga nagtitirok ha ubos la han pagsabot, an paagi nga usahay nadadakop niya an usa nga pulong o pulong an paagii han pagdakop han usa nga butang nga ginsiplatan ha palibot; aada ito, ngan katapos waray na. Ginsidngan niya an iya kalugaringon nga tungod la ito han stress. Seryoso an iya utang, ngan waray pa niya isumat ha iya mga patod kon ano ito kaseryoso, ngan an hunahuna nga ginuuruos hin seryoso nga problema, naghihimo hin mga boses nga diri tinuod. Nakabasa na hiya tungod hini.",
          "Pero an tingog nga nakapukaw ha iya diri hinimo-himo la han iya hunahuna.",
          "Klaro ito ngan kalmado, ngan nagyakan nga may pagpailob sugad hin maiha na nga panahon nga naghihinulat basi pamation:",
          "Papatayon ka anay han imo mga patod.",
          "Ginsandig ni Elias an iya likod ha lamesa ha kusina. Maitom an kwarto, gawas la han gutiay nga siga ha kalan nga naghatag hin mapusyaw nga asul nga suga ha ngatanan nga butang. Nag-uusahan hiya.",
          "Nagpaplano na hito an magurang. An babaye nagdidesisyon pa. Ikaw an pinakagamit nira yana, ngan kon diri ka na nira magagamit—",
          "“Undang,” siring ni Elias.",
          "Nahunong an tingog.",
          "Nagkidlát an gutiay nga siga ha kalan.",
          "Maiha nga tinindog hiya ha maitom nga kusina, nga nag-iinopay hin pagginhawa. Katapos, iya gin-abrihan an drawer han mga kutsilyo. May mga rason hiya nga para ha iya mismo makatadunganon ngan normal gud, siring niya ha iya kalugaringon. Ginkuha niya an gutiay nga kutsilyo nga ginagamit ha pagbalat hin prutas ngan iginsulod ha bulsa han iya bado ha pagturog.",
          "Hito nga gab-i, naturog hiya nga nakatago an kutsilyo ha ilarom han iya unlan.",
          "Kinabuwasan, namalit hiya hin tulo pa nga kutsilyo ha tindahan hin mga gamit ha bungto, ngan iginbutang ito ha magkalain-lain nga drawer ha iya kwarto, nga waray pagtagad nga pagbutang sugad hin usa la hiya nga tawo nga naruruyag nga may mga mapipilian.",
        ], // TODO: one translated paragraph per body entry
      },
    },
  },
  {
    id: 5,
    title: "Chapter 5",
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
        terms: linkTagalogPracticeQuestions(5, tagalogTermsByChapter[5]),
        translations: [
          "Nahanap ito ni Selene sa likod ng wainscoting sa silangang pakpak.",
          "Nagbalik siyang mag-isa, nang may mas magandang liwanag at isang sistematikong diskarte, kinukuhanan ng larawan ang bawat nasirang talaarawan bago ito hawakan.",
          "Ang likas na hilig sa archive, sa tingin niya. Ang ugali ng isang consultant sa politika na ituring ang bawat piraso ng impormasyon bilang parehong ebidensya at leverage.",
          "Ang talaarawan sa likod ng wainscoting ay naiiba sa iba. Mas bago ito, marahil pitumpu o walumpung taong gulang, hindi tatlong siglo, at ito ay itinago sa halip na sunugin. May pagkakaiba sa layunin. Ang iba pang mga talaarawan ay nawasak ng isang taong gumagawa ng isang desisyon. Ang isang ito ay itinago ng isang taong gumagawa ng isang plano.",
          'Isinulat ito ng isang babaeng nagngangalang Gwendolen Vale, na gumugol ng apat na taon noong dekada 1940 sa pagtatangkang maunawaan ang kasaysayan ng tinatawag niyang "Ang Tinig" (the Voice). Ang kanyang metodolohiya ay kahanga-hanga, ang kanyang sulat-kamay ay masikip at unti-unting nagiging ligaw, ang kanyang mga konklusyon ay sopistikado. Nahanap niya ang pattern—ang paraan ng pagtindi ng mga bulong kapag bumababa ang pampublikong reputasyon ng pamilya, ang paraan ng pagbago nito upang maasinta ang partikular na pagkabalisa ng bawat tagapagmana, ang paraan ng paghubog nito sa mga desisyon ng pamilya sa kabila ng mga henerasyon nang may tahimik na katapatan ng isang agos na muling humuhubog sa isang baybayin.',
          "Malapit na siya. Malapit na malapit.",
          "Ang huling entry ay nagsasaad: “Ang pinakamalala rito ay ito: sa tuwing tinitingnan ko ito nang direkta, sa tuwing ginagawa ko itong paksa ng pag-aaral sa halip na hayaan itong manatiling bahagi ng paligid, lalo itong lumalakas. Naniniwala ako ngayon na ang atensyon ang pagkain nito. Naniniwala ako na ang kilos ng paglutas dito ay hindi naiiba sa pagpapakain dito. Hindi siya nakakulong sa bahay na ito. Hindi siya nakabilanggo sa linyang ito ng dugo. Nanonood siya sa pamamagitan ng ating—”",
          "Nagwakas ang talaarawan doon, sa gitna ng pangungusap, ang guhit ng panulat ay naging isang mahabang mantsa kung saan ito nabitawan o nahila.",
          "Nang gabing iyon, nagising si Selene sa ikalawa ng madaling araw sa isang tunog na hindi niya matukoy kung saan nanggagaling—isang mataas, matagal na tunog, tulad ng umaawit na buto. Nahanap niya ang kanyang daan patungo sa banyo sa pamamagitan ng pakiramdam at tumayo sa harap ng lababo upang magwisik ng malamig na tubig sa kanyang mukha. Nang tumingin siya sa itaas, ang salamin sa itaas ng lababo ay may lamat na tumatakbo mula sa itaas na sulok patungo sa ibabang sulok, malinis tulad ng isang hiwa ng operasyon.",
          "Naglakad siya patungo sa silid ni Lucien at kumatok. Binuksan agad ni Lucien ang pinto—hindi rin ito nakakatulog.",
          '"Ang salamin ko," sabi niya.',
          '"Lahat ng mga ito," sabi ni Lucien. "Halika at tingnan mo."',
          "Bawat salamin sa mansiyon ay nagka-lamat sa magdamag. Ang bawat lamat ay natatangi sa pattern nito ngunit magkapareho sa kalidad nito—tumpak, kabuuan, na tila ba nagpasya ang salamin, nang sabay-sabay, na hindi na nito gustong ipakita ang mundo pabalik sa sarili nito.",
        ],
      },
      kapampangan: {
        lessonId: "kapampangan_5",
        title: "Kapitulu 5 Ing Diary",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "I Selene ing mika-akit kaniti king likuran ning wainscoting king aslagan a pakpak.",
          "Sinubli yang mag-isa, maki masanting a sala at masusing paralan, kinulitan ne ing balang dake ning masirang dyornal bayu ne tagkalan. Ing ugali ning pamag-arsibu, inisip na. Ing kasanayan ning metung a talapanyunung pampulitika a nung nu ing balang pirasung impormasyon gagamitan yang antimong patune at paralan ban maki-upaya.",
          "Ing dyornal king likuran ning wainscoting aliwa ya karing aliwa. Bayu-bayu ya pa, siguru pitung pulu o walung pulung banua na, aliwa king atlung dinalan a banua ang katua, at mas mitalakad yang makasalikut kesa king pamilako o pamanulid gagamit api. Atin pami-aliwa king kapagnasan. Deng aliwang dyornal mialako la uli ning metung a taung mika desisyon. Ini naman mitalikut ya uli ning metung a taung mika plano.",
          "Sinulat ne ning metung a babai a mipalagyuan kang Gwendolen Vale, a nung nu milabas ya apat a banua kanitang dekada 1940 ban pilit a aintindihan ing kasalesayan ning inaus nang Boses. Ing paralan na masanting ya, ing sulat-gamat na makipit at unti-unting mika-kabit, at ding konklusyun na makalalam la. Akit na ing porma, ing paralan nung ninu ding bulong pamilala la potang ing pampublikung kalalagyan ning pamilya mibabagsak ya, ing paralan nung makananung mialiwa la reti para ttargetan ing espesyal a panga-balisa ning balang tagapagmana, ing paralan nung makananung binalitad da reng desisyon ning pamilya kareng henerasyun maki kalmado at tahimik a katatagan ning metung a pamanasik a binalitad ne ing pader ning tanaman.",
          "Malapit ya. Malapit ya karing eganagana.",
          "Ing tauling sulat ngana:",
          "Ing pekamalala keti iyapin ini: king balang ukdu a pinaras kung linawan iti nang diretsu, king balang ukdu a gewa ke iting obhetu ning pamagaral imbes na pamilako king kalalagyan ning paligid, lalo ya pang mipag-matas. Maniuala naku ngeni a ing pamanatung iya ing pamangan na. Maniuala naku a ing paralan ning pamaglutas kaniti e ya miyayaliwa king pamagpakain kaniti. Alis ya makasusi kening bale. Alis ya makakulung kening dayang ini. Manalbe ya kapamilatan da reng kekatamung—",
          "Tinuknang ing dyornal karin, king kapitnaan ning pangungusap, ing gulis ning bolpen mika-matsing makaba nung nu ya mitalak o mig-gulis.",
          "Ketang bengi, migising ya i Selene king alas dos ning abak king metung a ingay a e na mitalakad nung nokarin ya ibat, metung a matas at makabang nota, antimong butul a magkanta. Ikit na ing paralan papunta king banyo gagamit pamagkap kapamilatan ning palad na at tinindeg ya babo ning sink ban pamilako marimlang danum king lupa na. Anyang tiniman ya king babo, ing salamin mika-biyak manibat king babong sepu angga king lalam sepu, malinis anti king gawa ning metung a pamanyuri.",
          "Linalad ya papunta king kuarto nang Lucien at kinatuk ya. Binuklat ne agad i Lucien, uling ali ya naman makatutudtud ketang bengi.",
          '"Ing salamin ku," ngan na.',
          '"Eganagana," ngan nang Lucien. "Ume ka keni, lawan me."',
          "Anggan eganaganang salamin king mansyun mika-biyak ketang benging ita. Ang balang panga-biyak maki sadyang porma dapot pareu la kalidad, matulid, mabilug, anti mong sinabi ning salamin, a sabla-sabla, na ala na yang buring ipakit ing yatu king sarili na.",
        ],
      },
      waray: {
        lessonId: "waray_5",
        title: "An Journal",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Nakit-an ni Selene an journal ha luyo han kahoy nga taklob ha ubos nga bahin han bungbong ha pakpak ha dapit ha sinirangan.",
          "Binalik hiya didto nga nag-uusahan, nga may-ada mas maupay nga suga ngan klaro nga paagi, ginletrato an tagsa nga nadaot nga journal antes ito kaptan. An kinaiya han arkibo, hunahuna niya. An batasan han konsultant ha politika nga gin tratrato an kada impormasyon nga ebidensya ngan pahimulos.",
          "An journal ha luyo han wainscoting naiiba ha iba. Mas bag-o ito, bangin setenta o otsenta ka tuig na, diri tulo ka siglo, ngan gintago ito imbes nga sunugon. Mayda kaibahan an panuyo. An iba nga mga journal ginbungkag na han usa nga nagdesisyon. Ini nga usa gintago na han usa nga naghihimo hin plano.",
          "Ginsurat ini hin usa nga babaye nga hi Gwendolen Vale, nga naggasto hin upat ka tuig han dekada 1940 ha pagsari nga masabtan an kasaysayan han iya gintawag nga Tingog. Darayawon gud an iya pamaagi, haligot ngan nagtitikaduro an iya sinurat, sopistikado an iya mga konklusyon. Nabilngan niya an surubdan, an paagi han pagkusog han mga huring-huring han ngatikaguti an tindog ha publiko han pamilya, an paagi han ira pagbag-o basi puntiryahon an espisipiko nga kabaraka han kada nga manurunod, an paagi han ira pagporma han mga desisyon han pamilya ha bug-os nga mga henerasyon nga may-ada mahimyang nga pag-undang han paghuyod han pagporma utro han usa nga baybayon.",
          "Nagin duok hiya hadto. Harani gud.",
          "An urhi nga entrada mababasa:",
          "An pinakamaraot hini amo ini; kada ginhimo ko ini ginkita hin direkta, kada ginhimo ko ini nga butang nga pag-aadman imbes nga pabay-an nga magpabilin ini nga atmospera ngan palibot, nagtikakusog ini. Natuod ak yana nga an atensyon an pagkaon hini. Natuod ako nga an buhat han pagsolbar hini diri maiiba ha pagpakaon hini. Diri hiya na-kukulong hini nga balay. Diri hiya napriso hini nga dugo. Ginbantayan niya pinaagi han aton—",
          "Natapos didto an journal, ha butnga han tudling-pulong, an haplos han bolpen nag-uundong ngadto ha hilaba nga pahid kun diin ito iginhulog o gin-guyod.",
          "Hito nga gab-i, nagmata hi Selene hin alas dos han aga ha tunog nga diri niya nabibiling, usa nga hitaas ngan nagpapadayon nga nota, pariho hin pagkanta hin tul-an. Nabilngan niya an dalan ngadto ha banyo pinaagi hin paghikap ngan tumindog ha igbaw han lababo basi magsablig hin matugnaw nga tubig ha iya nawong. Han naghangad hiya, an espiho ha igbaw han vanidad may-ada gutak tikang igbaw nga kanto ngadto ha ubos nga kanto, malimpyo pariho hin operasyon nga tunga.",
          "Naglakat hiya ngadto ha kwarto ni Lucien ngan nagtuktok. Gin-abrihan dayon niya an purtahan, waray liwat hiya katurog.",
          "“An akin espiho,” siring niya.",
          "“Ngatanan hira,” siring niya. “Kadi kitaa.”",
          "An kada mga espiho ha mansyon nag-gutak ha usa la kagab-i. An kada mga gutak naiiba ha surubdan hito kondi pariho ha kalidad hit, eksakto, kabug-osan, nga baga hin nagdesisyon an baso, hin usa ka beses, nga diri na hito karuyag ipakita an kalibotan tipabalik ha iya kalugaringon.",
        ],
      },
    },
  },
  {
    id: 6,
    title: "Chapter 6",
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
        terms: linkTagalogPracticeQuestions(6, tagalogTermsByChapter[6]),
        translations: [
          "Inayos ni Lucien ang kawanggawang hapunan nang may katumpakan ng isang tao na naniniwalang ang tamang pagkakasunod-sunod ng mga pampagana ay kayang magbaligtad sa tatlongpung taon ng bumababang tiwala ng publiko. Kumuha siya ng alak mula sa isang lokal na ubasan, nag-arkila ng pinakamahusay na caterer sa kondado, nagpadala ng mga personal na imbitasyon sa apatnapu't pitong pinakamaimpluwensyang pigura ng bayan at nakatanggap ng mga pagtanggap mula sa tatlongpu't isa.",
          "Nagsimula ito nang maayos. Umikot si Selene sa silid nang may propesyonal na init na may kapalit para sa kanya—nararamdaman niya ang pagsisikap nito, ang patuloy na pagsasalin sa pagitan ng kung ano talaga ang iniisip niya at kung ano ang sinasabi niya, ang panlipunang pagganap ng pagiging kabilang sa isang pamilya na hindi niya tiyak kung gusto niyang kabilangan. Ngunit naging mainit ang mga tao. Masarap ang alak. Tumawa ang alkalde sa isang bagay na sinabi ni Lucien.",
          "Nagbago ang alak pagkaraan ng isang oras sa gabi.",
          "Si Maren mismo ang nagdala nito, isang pangalawang bote para sa pangunahing talahanayan, at nang isalin niya ito sa baso ni Konsehal Aldred, lumabas itong madilim. Hindi pulang-madilim, gaya ng magandang alak sa liwanag ng kandila. Madilim sa paraan na ang isang bagay na napakatanda ay madilim, ang paraan ng malalim na tubig ay madilim, ang paraan ng kulay ay may lalim na ang mata ay patuloy na nadudulas. Tumitig si Aldred sa kanyang baso at walang sinabi. Ang kanyang asawa ay umabot sa kabila at hinawakan ang kanyang bisig.",
          "Pagkatapos ay nagsimula ang pagtili mula sa kabilang dulo ng silid.",
          "Isang politiko, isang kinatawan ng partido na kanina pa tumitingin kay Selene nang may kalkuladong interes sa buong gabi, ang tumayo mula sa kanyang upuan at itinuro ang mga bakanteng upuan sa kanlurang dulo ng talahanayan, at ang kanyang tinig, nang dumating ito, ay tinig ng isang tao na nag-uulat ng isang bagay na nararanasan niya sa kabila ng kanyang sariling tapat na pagtutol sa karanasan: may mga tao doon. Sa mga upuang itinuturo niya. Nakaupo at tahimik. At mula sa mga ekspresyon sa mga mukha sa paligid niya, nakikita rin sila ng iba, at ang karamihan ay hindi, at ang kalituhan nito—kung sino ang nakakakita at kung sino ang hindi—ay mas nakakatakot kaysa sa anumang solong ibinahaging guni-guni.",
          "Inabandona ng mga caterer ang kusina. Dalawang panauhin ang umalis nang walang mga amerikana. Ang alkalde ay nagsabi ng isang maikli at pormal na bagay tungkol sa pakikipag-ugnayan sa lalong madaling panahon at nawala sa loob ng apat na minuto.",
          "Nakatayo si Selene sa pintuan ng walang laman na kainan pagkatapos niyon, tinitingnan ang talahanayan, ang mga kalahating kinain na pagkain, ang mga madidilim na bilog kung saan nakatayo ang mga baso, ang mga nakakalat na upuan.",
          'Lumitaw si Lucien sa tabi niya. "May naglagay ng kung ano sa alak," sabi niya. "Isang hallucinogen. Ipa-test ko ito."',
          '"Lucien—"',
          '"Ipa-test ko ito."',
          "Hinayaan niya ito. Kailangan ni Lucien na maniwala sa mga paliwanag na maaari niyang aksyunan. Nauunawaan niya ito, kahit na nauunawaan niyang mali ito.",
        ],
      },
      kapampangan: {
        lessonId: "kapampangan_6",
        title: "Kapitulu 6",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Inorganisa nang Lucien ing dinner king charity a atin alang kalang-alang a kapresisyunan ning métung a taung maniwala a ing ustung pamanuntun kareng appetizer malyari nang balikid ing tatlung pulung banwang papababa ning kaperdisyan ning tiwala ning publiku.",
          "Menikua siyang alak king lokal a mula da ring ubas, kinuang pekamagaling a caterer king probinsya, minie personal a imbitasyon kareng apat a pulu't pitung pekainfluensyang tau king balen at mekatanggap siyang tanggap ibat kareng tatlung pulu't métung.",
          "Medyu masanting ing pamag-umpisa.",
          "Inatupan nang Selene ing kuartu a atin propesyonal a kalyat a atin bayad — naramdam ne ing sakripisyo kaniti, ing tuloy-tuloy a pamanalin king tunay nang pag-isipan at king panyabyan na, ing social a pamanigtig ban maging kayanib ning pamilyang e na siguradung buri nang kayaniban.",
          "Pero ding tau megpainat la.",
          "Masanting ing alak.",
          "Ing alkalde memaglayag ya king sinabi nang Lucien.",
          "Ing alak meging pilang oras ne king bengi.",
          "Inatala nang Maren ing kaduang bote para king ulu ning lamesa, at anyang binuhos ne king basu nang Councillor Aldred, lumwal yang madulum.",
          "Aliwa itang malutu-madulum, ing paraan a ing masanting a alak madulum ya king sulu ning kandila.",
          "Madulum ya king paraan ning métung a bage a kaluwat-luwat nang madulum, ing paraan a ing malalam a danum madulum ya, ing paraan a ing kulay atin kalalaman a ing mata sadyang dadalakit ya.",
          "Inagtal nang Aldred ing basu na at ala yang sinabi.",
          "Ing asawa na tinuki ya king takde na at kinalbit ya.",
          "Saka meg-umpisa ing kulyat ibat king mauling dase ning kuartu.",
          "Ing métung a pulitiko, métung a diputadu ning partido a gagamitan nang paniwalang matulid i Selene king buung bengi, minundag ya king luklukan na at tinuru ya kareng alang laman a luklukan king albugan ning lamesa, at ing boses na, anyang datang ya, boses ya ning métung a taung mag-report king métung a bage a e na a-iiwasan lipat ning sarili nang masidhing pamananggi king karanasan: Atin tau karin.",
          "Kareng luklukan a tuturu na.",
          "Makalukluk la at makatuknang.",
          "At ibat kareng panyipag da ring tau king paligid na, ding aliwa akakit da la naman, at ding dakal aliwa da la akakit, at ing kaguluhan kaniti, ninu ing makakit at ninu ing aliwa, mas nakakatakot ya kaysa king métung a milusuk a pangasumpal nang hallucination.",
          "Ding caterer tinakip la king kusina.",
          "Denuang bisita meko la a alang baro.",
          "Ing alkalde minie yang malagkas at pormal a pamanabi tungkul king pamagbisita king e malawat at meko ya kilub ning apat a minutu.",
          "Karin metalanga i Selene king pasbul ning alang laman a dining room paitukituki, mamagkit king lamesa, ding kapitnang kakanan, ding madulum a bilog nung nu makatindag ding basu, ding nakalat a luklukan.",
          "Mekit ya i Lucien king siping na.",
          '"Atin minyira king alak," ngana. "Métung a hallucinogen. Ipasuri ku ya."',
          '"Lucien—"',
          '"Ipasuri ku ya."',
          "Peyagdan ne nang bagya.",
          "Kailangan nang maniwala kareng paliwanag a malyari nang daptan.",
          "A-a-intindihan ne ini, anggang a-a-intindihan na a mali ya ini.",
        ],
      },
      waray: {
        lessonId: "waray_6",
        title: "Pangiklop Upod an mga Multo",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Gin-organisar ni Lucien an pangiklop ha paghatag hin kalooy nga may katukma hin usa nga natood nga an tama nga pagkasunod-sunod han mga pan-abang makakabaliktad hin traynta ka tuig nga nagtitikaguti nga pagtapod han publiko. Ginkuha niya an bino tikang hin usa nga lokal nga urusbasan, nagkuha han gimaupayi nga parag-ataman hin pagkaon ha condado, nagpadara hin personal nga mga imbitasyon ngadto hin kwarenta i siyete han pinaka-impluwensya nga mga tawo han bungto ngan nakakarawat hin mga pagkarawat tikang hin katloan trenta i uno.",
          "Nagtikang ito hin maopay. Gintrabaho ni Selene an kwarto nga mayda propesyonal nga kapaso nga mayda propesyonal nga kapaso nga mayda niya gastos—naabat niya an paningkamot hini, an padayon nga paghubad ha butnga han iya aktuwal nga ginhuhunahuna ngan han iya ginsisiring, an sosyal nga pasundayag han pagin kaapi hin usa nga pamilya nga diri hiya sigurado nga karuyag niya magin kaapi. Pero nagpaso an mga tawo. Maupay an bino. Ginkatawa han alkalde an usa nga butang nga ginsiring ni Lucien.",
          "An bino nag-usa ka oras ngadto ha gab-i.",
          "Hi Maren mismo an nagdara, ikaduha nga botelya para ha lamesa han mga bisita nga importante, ngan han iya ini ginbuhos ha baso ni konsehal Aldred, gumawas nga madulom. Diri la dapit ha pula nga kadulom, sugad han klase han maopay nga bino kon natatamaan han kalamrag han kandila. Madulom ha paagi nga an usa nga butang nga daan hinduro madulom, ha paagi nga madulom an hilarom nga tubig, ha paagi nga an kolor nagkakapot hin kahilarom nga padayon nga nagdadalagan an mata. Nagtutok hi Aldred ha iya baso ngan waray magyakan. Inabot an iya asawa ha tabok ngan ginkaptan an iya butkon.",
          "Katapos, nagtikang an paguliat tikang ha hirayo nga bahin han kwarto.",
          "Usa nga politiko, usa nga deputado han partido nga nagkikinita kan Selene nga may kalkulado nga interes ha bug-os nga kulop, binuhat tikang han iya lingkuran nga gintudlok an mga bakante nga lingkuran ha katundan nga bahin han lamesa, ngan an iya tingog, han pag-abot hini, amo an tingog hin usa nga tawo nga nagsusumat hin usa nga butang nga iya naeksperyensyahan bisan pa han iya kalugaringon nga eksperyensya didto an mga tawo nga sinsero nga pagkontra. Ha mga lingkuran nga iya gintutudlok. Nalingkod ngan waray pagkiwa. Ngan tikang han mga ekspresyon han mga bayhon ha iya palibot, mayda iba pa nga nakakakita liwat ha ira, ngan kadam-an hin diri nakakakita, ngan an kagupong hini, kun hin-o an nakakakita hini ngan kun hin-o an diri, mas makaharadlok kaysa hin bisan ano nga usa nga gin-aambit nga halusinasyon.",
          "Gin bayaan han mga katerer an kusina. Duha nga bisita an ginbayan nga waray an ira mga amerikana. May-ada ginyakan an alkalde nga halipot ngan pormal mahitungod han pakipag-istorya utro ha sunod ngan waray pag-iha gumikan ta hin upat la ka minuto.",
          "Nabakdaw hi Selene ha purtahan han waray tawo nga pangaonan katapos hito, nagkikinita ha lamesa, an mga plato nga katunga an kinaon, an masirom nga baga nga mga singsing kun diin gintindogan han mga baso, an nagsasarang nga mga lingkoran.",
          "Nagpakita hi Lucien ha iya sapit. “Mayda nag-agaw han bino,” sering niya. “Usa nga halusino. Ipapasari ko ini.”",
          "“Lucien—”",
          "“Ipapatest ko ini.”",
          "Ginpabay-an niya ito. Kinahanglan niya tumood ha mga pagsaysay nga iya mahihimo. Nasabtan niya ini, bisan sugad han iya pagsabot nga sayop ito.",
        ],
      },
    },
  },
  {
    id: 7,
    title: "Chapter 7",
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
        terms: linkTagalogPracticeQuestions(7, tagalogTermsByChapter[7]),
        translations: [
          "Ang kapilya ay pagtuklas ni Elias, bagaman nahanap niya ito sa paraan na kung minsan ay nahahanap ng mga tao ang mga bagay na pilit nilang iniiwasan—sa pamamagitan ng paghinto, sa wakas, sa pag-iwas.",
          "Napansin niya ang mga hagdang bato sa likod ng nakakandado na pinto ng bodega ng silangang pakpak dahil napapansin na niya ang halos lahat ng bagay tungkol sa bahay ngayon; pinapatalas ng paranoya ang paningin sa gilid. Ang mga hagdan ay bumaba lampas sa antas ng bodega, lampas sa mga pundasyon, sa isang bagay na mas matanda kaysa sa bahay na nakatayo sa itaas.",
          "Mas matanda pa sa lahat ang kapilya. Ang bato ay may ibang kulay, ibang bigat, mula sa isang tibagan na naubos na bago pa itinayo ang kasalukuyang lupain ng mga Vale. Isa itong pabilog na silid na halos hindi sapat ang laki para sa isang kongregasyon, may mababang arko na kisame at isang sahig na inukit—hindi ginamitan ng kagamitan kundi inukit, maingat, sa loob ng marahil ay maraming taon.",
          "Mga pangalan. Daan-daang pangalan. Nakaayos sa mga pabilog na singsing na umaikot paitaas mula sa gitna ng sahig, at sa tabi ng bawat pangalan, isang tala: inihandog (offered).",
          "May mga pangalang nakilala si Selene mula sa mga puno ng pamilya na pinag-aaralan niya, ang mga rekord ng kasaysayan ng pamilya na kinuha niya sa mga archive upang maunawaan ang kasaysayan ng pamana. Mga pangalan mula noong dekada 1700 at 1800, patungo sa dekada 1900. Inihandog sa tabi ng bawat isa.",
          "Hindi isinakripisyo. Hindi pinatay. Inihandog.",
          '"Para saan?" tanong ni Elias.',
          "Idiniin ni Selene ang kanyang kamay sa gitnang inskripsiyon, na mas matanda kaysa sa iba—Latin, sirang-sira na, karamihan ay hindi mabasa. Nahuli niya ang legatum—pamana—at perpetuo—magpakailanman—at isang salita na kailangan niyang hanapin sa diksyunaryo ng kanyang telepono dahil luma na ito kahit para sa Latin: alendum.",
          "Upang pakainin. (To be fed).",
          "Tumayo siya at tiningnan ang kanyang pinsan at hindi sinagot ang kanyang tanong, dahil ang sagot ay tila napakalaki para sa silid.",
        ],
      },
      kapampangan: {
        lessonId: "kapampangan_7",
        title: "Kapitulo 7",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Ing kapilya natin natuklasan nang Elias, nabang a-apansin ne king paraan a ding tau pamutaktak dang a-apansin ding bage a lalayo da, king pamagtuknang, king wakas, king pamaglualu.",
          "A-apansin na ding tuktukan a batu king likuran ning makakunci a pasbul ning east wing's cellar uling a-apansin na ing balang bage tungkul king bale ngeni, ing paraan a ing paranoia tatacas ya king pangasipat ning panimanman.",
          "Ding tuktukan minatras la king cellar level, lagpas king foundation, king métung a bage a mas matuwa kaysa king bale a makatindag king babao.",
          "Ing kapilya mas matuwa ya king sablang bage.",
          "Ing batu aliwa ing kulay na, aliwa ing pabigat na, ibat king métung a tibagan a na-exhaust na bayu ing salukuyan a Vale estate mepundar.",
          "Métung yang bilog a kuartu a sapat mu para king congregacion, a atin mababa at vultadong kisame at lantai a me-carve, aliwa incised king gamit no man me-carve, maselan, king pabalik-balik a banwa.",
          "Ding lagyu.",
          "Daan-daan a lagyu.",
          "Makasunod-sunod king concentrico a bilog a papaituk king gitna ning lantai, at king siping ning balang lagyu, atin anotasyon: offered.",
          "Atin ding lagyu a a-akilala nang Selene ibat kareng genealogy ning pamilya a pinagaralan na, ding rekord ning angkan a inabyas na ibat kareng arkibo ban maintindihan ing amlat ning mana.",
          "Ding lagyu ibat king 1700s at 1800s, tutuki king 1900s.",
          "Offered king siping ning balang métung.",
          "Aliwa iniyain.",
          "Aliwa petey.",
          "Offered.",
          '"Keng nanu?" nganang Elias.',
          "Inatala nang Selene ing gamat na king gitnang inscriptyon, a mas matuwa kaysa king aliwa — Latin, mesira king panaun, ing kadaklan na e ne mabasa.",
          "A-akua na ing legatum — mana — at perpetuo — pabalik-balik — at ing métung a salita a kailangan nang panintunan king diksyonaryo ning phone na uling amano yang matuwa pati na king Latin: alendum.",
          "Ban pakanin.",
          "Minundag ya at liningap ya king pinsan na at e na inabutan ing kutang na, uling ing pakibatu meging mas maragul ya para king kuartu.",
        ],
      },
      waray: {
        lessonId: "waray_7",
        title: "Kapitulo 7",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Gin-organisar ni Lucien an pangiklop ha paghatag hin kalooy nga may katukma hin usa nga natood nga an tama nga pagkasunod-sunod han mga pan-abang makakabaliktad hin traynta ka tuig nga nagtitikaguti nga pagtapod han publiko. Ginkuha niya an bino tikang hin usa nga lokal nga urusbasan, nagkuha han gimaupayi nga parag-ataman hin pagkaon ha condado, nagpadara hin personal nga mga imbitasyon ngadto hin kwarenta i siyete han pinaka-impluwensya nga mga tawo han bungto ngan nakakarawat hin mga pagkarawat tikang hin katloan trenta i uno.",
          "Nagtikang ito hin maopay. Gintrabaho ni Selene an kwarto nga mayda propesyonal nga kapaso nga mayda propesyonal nga kapaso nga mayda niya gastos—naabat niya an paningkamot hini, an padayon nga paghubad ha butnga han iya aktuwal nga ginhuhunahuna ngan han iya ginsisiring, an sosyal nga pasundayag han pagin kaapi hin usa nga pamilya nga diri hiya sigurado nga karuyag niya magin kaapi. Pero nagpaso an mga tawo. Maupay an bino. Ginkatawa han alkalde an usa nga butang nga ginsiring ni Lucien.",
          "An bino nag-usa ka oras ngadto ha gab-i.",
          "Hi Maren mismo an nagdara, ikaduha nga botelya para ha lamesa han mga bisita nga importante, ngan han iya ini ginbuhos ha baso ni konsehal Aldred, gumawas nga madulom. Diri la dapit ha pula nga kadulom, sugad han klase han maopay nga bino kon natatamaan han kalamrag han kandila. Madulom ha paagi nga an usa nga butang nga daan hinduro madulom, ha paagi nga madulom an hilarom nga tubig, ha paagi nga an kolor nagkakapot hin kahilarom nga padayon nga nagdadalagan an mata. Nagtutok hi Aldred ha iya baso ngan waray magyakan. Inabot an iya asawa ha tabok ngan ginkaptan an iya butkon.",
          "Katapos, nagtikang an paguliat tikang ha hirayo nga bahin han kwarto.",
          "Usa nga politiko, usa nga deputado han partido nga nagkikinita kan Selene nga may kalkulado nga interes ha bug-os nga kulop, binuhat tikang han iya lingkuran nga gintudlok an mga bakante nga lingkuran ha katundan nga bahin han lamesa, ngan an iya tingog, han pag-abot hini, amo an tingog hin usa nga tawo nga nagsusumat hin usa nga butang nga iya naeksperyensyahan bisan pa han iya kalugaringon nga eksperyensya didto an mga tawo nga sinsero nga pagkontra. Ha mga lingkuran nga iya gintutudlok. Nalingkod ngan waray pagkiwa. Ngan tikang han mga ekspresyon han mga bayhon ha iya palibot, mayda iba pa nga nakakakita liwat ha ira, ngan kadam-an hin diri nakakakita, ngan an kagupong hini, kun hin-o an nakakakita hini ngan kun hin-o an diri, mas makaharadlok kaysa hin bisan ano nga usa nga gin-aambit nga halusinasyon.",
          "Gin bayaan han mga katerer an kusina. Duha nga bisita an ginbayan nga waray an ira mga amerikana. May-ada ginyakan an alkalde nga halipot ngan pormal mahitungod han pakipag-istorya utro ha sunod ngan waray pag-iha gumikan ta hin upat la ka minuto.",
          "Nabakdaw hi Selene ha purtahan han waray tawo nga pangaonan katapos hito, nagkikinita ha lamesa, an mga plato nga katunga an kinaon, an masirom nga baga nga mga singsing kun diin gintindogan han mga baso, an nagsasarang nga mga lingkoran.",
          "Nagpakita hi Lucien ha iya sapit. “Mayda nag-agaw han bino,” sering niya. “Usa nga halusino. Ipapasari ko ini.”",
          "“Lucien—”",
          "“Ipapatest ko ini.”",
          "Ginpabay-an niya ito. Kinahanglan niya tumood ha mga pagsaysay nga iya mahihimo. Nasabtan niya ini, bisan sugad han iya pagsabot nga sayop ito.",
        ],
      },
    },
  },
  {
    id: 8,
    title: "Chapter 8",
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
        terms: linkTagalogPracticeQuestions(8, tagalogTermsByChapter[8]),
        translations: [
          "Si Elias ang pormal na nagpangalan dito nang malakas, na ikinagulat ng iba, dahil si Elias ang pinaka-atubili na pag-usapan nang direkta ang mga tinig.",
          '"Hindi siya kailanman nagsisinungaling," sabi ni Elias.',
          "Nasa aklatan sila. Tatlong linggo na sa Disyembre ngayon, hindi sapat ang pagpainit, silang tatlo ay nagpapatong-patong ng damit. Naghahambing sila ng mga tala sa unang pagkakataon, talagang naghahambing, hindi ang mga maingat na binagong bersyon na ibinabahagi nila, at ang gawain ay may malungkot at naglilinaw na kalidad ng isang awtopsiya.",
          '"Isipin mo," patuloy ni Elias. "Lahat ng sinabi niya sa akin ay teknikal na totoo. Maaaring gusto ng mga pinsan ko na mawala ako, pareho ninyong gusto ang pamana, at nakaharang ako. Bumagsak ang reputasyon ng pamilya. Wala siyang inimbento. Siya lang—" Huminto si Elias, pinipili nang maingat ang kanyang salita. "Nangangasiwa siya." (He curates).',
          '"Pinipili niya ang pinaka-nakakagulong interpretasyon," sabi ni Selene.',
          '"At ipinapakita ito bilang tanging interpretasyon," sabi ni Lucien, nang may isang uri ng madilim na pagpapahalaga. "Medyo elegante iyon."',
          '"Dahil doon ay mas mapanganib siya," sabi ni Selene. "Hindi mas mababa. Ang isang kasinungalingan ay maaaring pabulaanan. Ang isang bahagyang katotohanan ay lumalason lamang sa buong balon."',
          '"Nang gabing sabihin niya sa akin na papatayin mo ako," sabi ni Elias, na tumitingin kay Lucien nang walang paumanhin, "alam kong hindi iyon imposible. At ang malaman na hindi iyon imposible ay sapat na. Hindi ko na maialis sa isip ko iyon."',
          "Lumatapak ang apoy. Isang troso ng pino ang nahulog sa apuyan.",
          '"Kaya hindi natin sinusubukang patunayan na mali siya," dahan-dahang sabi ni Selene. "Dahil hindi natin kaya. Kinikilala lang natin—na ang pinipili niya ay totoo, at ang kanyang pagpili ay laging dinisenyo upang sirain tayo."',
          '"At pagkatapos ay ano?" tanong ni Elias.',
          "Walang sinuman ang may sagot para sa bahaging iyon.",
        ],
      },
      kapampangan: {
        lessonId: "kapampangan_8",
        title: "Kapitulu 8",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "I Elias ing katataulian a minubus nang minyabi king masalita, a mekasorpresa kareng aliwa, uling i Elias ing peka-ayaw magsalita tungkul kareng boses nang direkta.",
          '"E ya man kailanman maglaram," nganang Elias.',
          "Atyu la king libraria.",
          "Tatlung linggu na king Disyembre ngeni, ing papainit e sapat, ding tatlu magsuat la pang bayung sapin.",
          "Megparisan la note king primeru na, talagang magparisan la, aliwa ing maingat a pinedit a dase a pipagparisan da, at ing latihan atin yang malat, lilinaw a kualidad ning autopsya.",
          '"Isipan mu," patuloy nang Elias.',
          '"Ing sablang sinabi na kaku technically katotohanan ya.',
          "Ding pinsan ku buri da ku sang mako, ikayung adua buri yue ing mana, at aku ing makasalabat.",
          "Ing reputasyon ning pamilya mabagsak ya.",
          "Alang inimbentu na.",
          'Sadyang—" Tinalakad ya i Elias, pinili nang maingat ing salita na.',
          '"Gagawan nang curation."',
          '"Pipilian na ing pekamakayaliwang interpretasyon," nganang Selene.',
          '"At ipapatalad na bilang tanging interpretasyon," nganang Lucien, a atin madulum a pamananggap.',
          '"Medyu elegante ya ita."',
          '"Uli na nita mas mapanganib ya," nganang Selene.',
          '"Aliwa mas bagya."',
          "Ing laram malyari yang ipatunayan a mali.",
          'Ing kapitnang katotohanan sisiraan na ing buung telabangan."',
          '"Ing bengi a sinabi na kaku a patayan mu ku," nganang Elias, liliningap ya kay Lucien a alang patawad, "balu ku a e imposible.',
          "At ing pabalung e imposible sapat na.",
          'E ku ne a-un-know."',
          "Ing api kinulapnit ya.",
          "Ing kaye ning pine mebalag ya king bakal.",
          '"Kaya e ta panintunan a ipatunayan a mali ya," nganang Selene king mabagal a boses.',
          '"Uling e ta malyari.',
          'Sadyang — a-akilala ta a ing pipilian na katotohanan ya, at ing pamanatili na parating me-disenyo ban siran kitamu."',
          '"At kaibat nanu?" nganang Elias.',
          "Alang atin pakibatu para king dase a ita.",
        ],
      },
      waray: {
        lessonId: "waray_8",
        title: "An Balaud han Huring",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Hi Elias an ha kataposan an nagyakan mahitungod hito ha daku nga tingog, ngan nakapatingala ito ha iba kay hi Elias an pinakamarig-on nga diri karuyag makig-istorya hin direkta mahitungod han mga tingog.",
          "“Diri gud hiya naghihimo hin buwa,” siring ni Elias.",
          "Aadto hira ha library. Tulo na ka semana han Disyembre, diri igo an pagpapaso han balay, ngan an tulo ha ira nagsusul-ot hin dugang nga mga bado. Siyahan pa la nira hadto nga nagkumpara han ira mga nota, an tinuod gud nga pagkumpara, diri la an mga pagikmat nga mga pinili nga mga bersyon nga ira iginpapaangbit, ngan adto nga binuhat may-ada madulom ngan nagpapaklaronga kalidad sugad hin usa nga autopsiya.",
          "“Hunahuna-a la,” padayon ni Elias. “An ngatanan nga iya ginsumat ha akon teknikal nga ungod. Bangin karuyag han akon mga patod nga mawara ako, karuyag niyo nga duha an panurundon, ngan ako an nakakaulang ha iyo. Nagkakaguba an reputasyon han pamilya. Waray hiya ginhimo-himo. Hiya la—” Humuyo hi Elias, ginpili hin maupay an iya mga yayaknon. “Nag-aasikaso hiya.”",
          "“Ginpipili niya an interpretasyon nga magpapakaguba han aton paghunahuna,” siring ni Selene.",
          "“Ngan iginpapakita niya ito sugad hin amo la ito an posible nga interpretasyon,” siring ni Lucien, nga may madulom nga pagdayaw ha iya tingog. “Maopay gud an iya pamaagi.”",
          "“Amo iton an nakakahimo ha iya nga mas delikado,” nasiring hi Selene. “Diri kulang. An buwa puydi mapamatud-an. An usa nga bahin nga kamatuoran nakakahilo la han bug-os nga atabay.”",
          "“Han gab-i nga ginsidngan niya ako nga papatayon niyo ako,” siring ni Elias, nga ginkikinitian hi Lucien nga waray pangaro hin pasaylo, “maaram ako nga diri ito impossible. Ngan an paghibaro nga diri ito imposible igo na. Ngan han an maaram la ak nga may posibilidad sakto na. Diri ko na ito mahihingalimtan.”",
          "Nagpitik an kalayo. Usa nga troso nga pino an nahulog ha rehas.",
          "“Salit diri kami naniningkamot nga pamatud-an nga sayop hiya,” hinay-hinay nga siring ni Selene. “Kay diri kami makakahimo. Nakilala la namon – nga an iya ginpipili an tinuod, ngan nga an iya pagpili an pirme gindisensyo para bungkagon kita.”",
          "“Ngan tapos ano?” pakiana ni Elias.",
          "Waray bisan hin-o ha ira an may baton hito nga bahin.",
        ],
      },
    },
  },
  {
    id: 9,
    title: "Chapter 9",
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
        terms: linkTagalogPracticeQuestions(9, tagalogTermsByChapter[9]),
        translations: [
          "Ang mga itinalagang manyika (effigies) ay lumitaw noong isang Lunes.",
          "May tatlo sa kanila, nakasabit sa bakal na bakod sa perimeter ng lupain, mga magaspang na anyo na gawa sa dayami at lumang tela, na binigyan ng mga natatanging marka gamit ang magaspang na pintura. Ang pinakamatangkad ay may maliit na tanda na nagsasaad ng LUCIEN. Ang katabi nito, SELENE. Ang pinakamaliit, ELIAS.",
          "Isang karamihan ang nagtipon upang manood sa oras na nakita sila ni Lucien mula sa bintana sa itaas. Hindi malaking karamihan, dalawangpu, dalawangpu't limang tao, ngunit ang kalidad ng panonood ay makabuluhan. Walang sumisigaw o humiyaw. Nakatayo lamang sila. Ang tahimik, matiyagang paghamak na ito ay kahit papaano ay mas malala pa kaysa sa galit.",
          '"Huwag kang lalabas," sabi ni Selene nang magsimulang maglakad si Lucien patungo sa pinto.',
          '"Nasa bakod natin sila."',
          '"At ang paglabas ay ginagawa itong isang paghaharap, na ginagawa itong isang kuwento, na ginagawa itong mas malala. Gumugol ako ng labing-limang taon sa politika. Magtiwala ka sa akin."',
          "Huminto siya sa pinto. Ang kanyang kamay ay patag sa kahoy. Pinanood ni Selene ang likod ng kanyang leeg at tinangkang basahin ito—ang tensyon doon, ang mga lumang senyales ng isang pinsan na kilala niya mula pa noong pagkabata, ang mga paraan na kaya at hindi niya kayang hulaan ito.",
          "Mula sa kaibuturan ng bahay, ang pagbulong ay naging isang bagay na paligid at pare-pareho, ang paraan ng ingay sa tainga (tinnitus) ay nagiging paligid at pare-pareho—hindi naririnig nang labis kundi nalalaman, ang paraan ng pagkaalam mo sa isang sugat nang hindi sinasadyang nararamdaman ito bawat sandali.",
          "Nakatayo at tumingin ang karamihan at sa huli ay umuwi. Nanatili ang mga manyika sa bakod sa loob ng tatlong araw bago ang isang tao—si Elias, malamang, sa gitna ng gabi—ay nagbaba sa kanila. Walang sinuman ang bumanggit nito.",
        ],
      },
      kapampangan: {
        lessonId: "kapampangan_9",
        title: "Kapitulu 9",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Ding effigy linitao la king Lunes.",
          "Atin tatlu karela, makasabit king bakal a bakud ning perimeter ning estate, ding taung gawa king ere at inutang a basahan, binian da la marks king bagya-bagyang pintura.",
          "Ing peka-matsing atin yang mangagundang markahan a babasa LUCIEN.",
          "Ing king siping na, SELENE.",
          "Ing peka-malati, ELIAS.",
          "Ing métung a lipun ding tau megkumpol la ban mantabe anyang akit no nang Lucien ibat king bintana king babao.",
          "Aliwa maragul a lipun, tatlung pulu, aduang pulu't lima a tau, pero ing kualidad ning pamangitil makabuluhan ya.",
          "Alang kumuliat o manikwas.",
          "Sadyang makatindag la.",
          "Ining tahimik, pasensyong pamanamak meging mas marok ya kaysa king galit sana.",
          '"E ka lulual," nganang Selene anyang meg-umpisa yang lumwal i Lucien king pasbul.',
          '"Atyu la king bakud tamu."',
          '"At ing pamaglual gawan na yang pamanharap, a gawan na yang kuentu, a gawan na yang mas marok.',
          "Makalabas na kung labing-limang banwa king pulitika.",
          'Tiwala ka kaku."',
          "Tuknang ya king pasbul.",
          "Ing gamat na patag ya king kayo.",
          "Linatag nang Selene ing likuran ning leig na at sinubuk nang basan ini, ing pangatatag karin, ding lumang senyas ning pinsan a balu na manibat king kayanakan, ding paraan a a-a-predict na at e na a-a-predict.",
          "Ibat king malalam ning bale, ing bulung meging ambient at constante ya, ing paraan a ing tinnitus maging ambient at constante ya, aliwa paramdam kundi balu na, ing paraan a balu mu ing sugat a alang conscienteng paramdam king balang sandali.",
          "Ing lipun makatindag ya at liningap ya at king wakas muli la.",
          "Ding effigy melakat la king bakud kilub ning tatlung aldo bayu atin tau, i Elias, peka-malyari, king kalibudtan ning bengi, inugse no la.",
          "Alang minyabi tungkul kaniti.",
        ],
      },
      waray: {
        lessonId: "waray_9",
        title: "Kaaway han Publiko",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "An mga ladawan nagpakita dida hin usa ka Lunes.",
          "May-ada tulo hito, nga nakabitay ha ginhimo nga puthaw nga kudal ha palibot han katunaan, mga magasa nga mga ladawan nga hinimo ha dagami ngan ginsalbar nga tela, nga gintagan hin mga marka nga nagpapakilala ga magasa nga pintura. An pinakahitaas mayda gutiay nga karatola nga nakasurat nga LUCIEN. An sapit naman hini, SELENE. An pinakagutiay, ELIAS.",
          "Usa nga kadam-an an nagkatitirok basi magkita han nakit-an hira ni Lucien tikang bintana ha igbaw. Diri damo nga kadam-an, batnte, baynte i singko ka tawo, pero mahinungdanon an kalidad han pagkita. Waray nag-aawit o naguliat. Nakabakdaw la hira. Inin hilom, ngan mapailubon nga pagtamay ha anoman nga paagi mas maraot pa kaysa han kasina unta.",
          "“Ayaw paggawas,” siring ni Selene han magtikang hi Lucien tipakadto ha purtahan.",
          "“Aadto hira ha aton kodal.”",
          "“Ngan an paggawas an nakakahimo hini nga komprontasyon, nga nakakahimo hini nga istorya, nga nakakamo hini nga mas malain. Kinse ka tuig na ako ha politika. Tapod ha akon.”",
          "Humuyo hiya ha purtahan. An iya kamot patag ha kahoy. Ginkikinitaan ni Selene an luyo han iya liog ngan ginsarihan niya nga basahon, an tensyon didto, an mga daan nga senyales hin usa nga umangkon nga iya kilala tikang pa han kabata, an mga paagi nga iya kaya ngan diri hiya matatag-an.",
          "Tikang ha kahiladman han balay, an paghuring-huring nagin usa nga butang nga palibot ngan pirme, an paagi han tinnitus nga nagigin palibot ngan pirme, diri nababatian sugad han nahibabaroan, an paagi nga nahibabaro ka mahitungod hin samad nga diri mo mahunahunaon nga inaabat ito kada tagna.",
          "An kadam-an nabakdaw ngan nagkinita tubtob nga ha kataposan inuli hira. Nagpabilin an mga ladawan ha kodal ha sulod hin tulo ka adlaw antes may-ada usa, hi Elias, nga posible gud, ha katutnga han gab-i, nga nagsulod hito. Waray bisan hin-o ha ira an nagyakan hito.",
        ],
      },
    },
  },
  {
    id: 10,
    title: "Chapter 10",
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
        terms: linkTagalogPracticeQuestions(10, tagalogTermsByChapter[10]),
        translations: [
          "Ang larawan ni Lord Aurelius Vale ay nakasabit sa pangunahing pasilyo nang napakatagal na nakamit na nito ang isang uri ng invisibility sa paligid, bahagi ng mga nakapirming kasangkapan ng bahay, napapansin sa paraan na ang magandang liwanag ay napapansin, ibig sabihin ay hindi napapansin hanggang sa mawala ito.",
          "Nagsimula silang mapansin ito noong unang bahagi ng Disyembre.",
          "Ang mga pagbabago ay banayad sa una. Isang kaunting hilig ng ulo na halos natitiyak ni Selene na wala doon noon. Isang anino na lumipat sa kaliwang bahagi ng mukha sa pagitan ng isang umaga at ng susunod. Kunan niya ito ng larawan noong isang Miyerkules at inihambing ang larawan sa isa pa na kinuha niya sa panahon ng kanyang paunang dokumentasyon ng silangang pakpak. Hindi sila magkapareho.",
          "Si Elias ay walang ganoong analytical na diskarte.",
          "Nauupo lamang si Elias sa harap nito sa loob ng maraming oras, kung minsan ay nagsasalita nang malakas.",
          '"Kinausap niya ito," sabi ni Lucien kay Selene, ang kanyang tinig ay mababa at neutral sa paraan na nagiging ganoon kapag nagpapasya siya kung gaano dapat mabahala.',
          '"Kinausap niya siya," sabi ni Selene. "Iyon ang tamang parirala, tila ba."',
          '"Ano ang sinasabi niya?"',
          '"Mga piraso lamang ang nahuhuli ko. Tinatanong niya si Aurelius tungkol sa sumpa. Tungkol sa kung paano ito nagsimula. Iniisip niya na kung nauunawaan niya ang pinagmulan ay maaari niyang—hindi ko alam. Makipag-ayos."',
          '"Makipag-ayos." Inulit ito ni Lucien nang may patag na tinig ng isang tao na nakakahanap ng isang estruktural na depekto sa isang argumento.',
          '"Palaging naniniwala si Elias na ang tamang pag-uusap ay kayang umayos sa anumang bagay," sabi ni Selene. "Ito ang kanyang pinakamahusay na katangian at ang kanyang pinakamalala."',
          '"At ang mga mata?" sabi ni Lucien.',
          '"Gumagalaw," kumpirmasyon ni Selene.',
          "Nakita niya ito mismo, nakatayo mag-isa sa pasilyo sa takipsilim. Ang mga ipinintang mata ay sumunod sa kanya, ang paraan ng mga mata ng isang buhay na tao ay sumusunod sa paggalaw, at naglakad siya palayo sa isang bilis na tumanggi siyang tawaging pagtakbo at hindi na bumalik sa pasilyo nang walang kasama mula noon.",
        ],
      },
      kapampangan: {
        lessonId: "kapampangan_10",
        title: "Kapitulu 10",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Ing retratu nang Lord Aurelius Vale makasabit ya king pangulong koridor king kaluwat-luwat na nung nu mekaabot ya king métung a uri ning environmental invisibility, dase ning fixed furniture ning bale, a-apansin ya king paraan a ing masanting a sagi apansin, nung sabian e man angga king mawala ya.",
          "Meg-umpisa yang apansin de ketang mumuna ning Disyembre.",
          "Ding pamagbabago medyu malati la king primeru.",
          "Medyu malating pakaliwa ning ulta a si Selene siguradu ya a e pa atyu karing minuna.",
          "Metung a anino a miglakwas king wanan a dase ning mukha king piamatag a aldo at king sumnuk.",
          "Kinua neng litratu ketang Myerkoles at inikumpara ne ing litratu king metung a kinwa na ketang primeru nang pamanala king east wing.",
          "Aliwa la pareho.",
          "I Elias ala yang anting metung a analitikang paraan.",
          "I Elias sadyang makalukluk ya king arap na king oras-oras, atin pang sasalita.",
          '"Makisabi ya keti," nganang Lucien kang Selene, ing boses na mababa at neutral king dase nung nu pinasya na kung nnu kakaba.',
          '"Makisabi ya kaya," nganang Selene.',
          '"Ita ing ustong pamanabi, bage."',
          '"Nanu ing sasabian na?"',
          '"Pilang dake mu ing akua ku.',
          "He's asking Aurelius about the curse.",
          "Kutang na kay Aurelius tungkul king sumpa.",
          "Paniwala na nung maintindihan na ing pinanibatan malyari na — e ku balu.",
          'Manamasan."',
          '"Manamasan." Inulit nenang Lucien ini king flatness ning taung makakita king malating sira king argumento.',
          '"I Elias parating maniwala a ing ustung pamisabi malyari yang ayusin ing sablang bage," nganang Selene.',
          '"Ita ing pekamasanting at pekamarok na."',
          '"At ding mata?" nganang Lucien.',
          '"Lalipat," pinaris nanang tinmu.',
          "Akit ne ini ning sarili na, makatindag a magisa king koridor king malulum.",
          "Ding matang makapinta linagad la kaya, king paraan a ding mata ning byeng tau lumagad king galit, at minalis ya king lakad a ayaw nang tawagin a pamaglaru at e na sinubling muli king koridor a walang kasama manibat keta.",
        ],
      },
      waray: {
        lessonId: "waray_10",
        title: "An Letrato",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "An letrato ni Lord Aurelius Vale maiha na nga nakabitay ha panguna nga pasilyo nga nakab-ot hini an usa nga klase hin diri pagkita han kalibungan, bahin han waray pagbag-o nga muwebles han balay, nakapansin han paagi nga napapansin an maupay nga suga, nga karuyag sidngon diri gud tubtob nga waray na ini.",
          "Nagtikang hira pag-obserbar hito temprano han Disyembre.",
          "Diri gud klaro an mga pagbag-o ha tinikangan. An gutiay nga pagkiling han ulo nga haros sigurado ni Selene nga waray pa hadto. Usa nga lambong nga nagbalhin ha wala nga bahin han nawong ha butnga han usa nga aga ngan han sunod. Ginletrato niya ini hin usa nga Miyerkules ngan ginkumpara an letrato ha usa pa nga iya ginkuha dida han iya una nga pagdokumento han sinirangan nga pako. Diri hira magkapariho.",
          "Waray sugad nga pag-analisar nga paagi hi Elias.",
          "Nalingkod la hi Elias ha atubangan hito hin damu ka oras, usahay nagyayakan ha daku nga tingog.",
          '"Nakikiistorya hiya hini," siring ni Lucien kan Selene, an iya tingog hamubo ngan neutral ha paagi nga naabot ini han nagdidesisyon hiya kun ano an iya pag-aalarma.',
          '"Nakikiistorya hiya ha iya," siring ni Selene. "Amo iton an tama nga pagpulong, baga."',
          '"Ano an iya siring?"',
          '"Mga tipik la an akon nadakop. Ginpapakianhan niya hi Aurelius mahitungod han sumpa. Mahitungod han kun paonan-o ini nagtikang. Naghuhunahuna hiya kun nasasabtan niya an gintikangan mahimo niya — diri ako maaram. Makig-negosyar."',
          '"Pakigsabot." Gin-utro ini ni Lucien nga may pagkapatag hin tawo nga nakakabiling hin depekto ha istraktura ha usa nga argumento.',
          '"Danay natoo hi Elias nga an tama nga pag-uruistorya an makakaayos hin bisan ano," sering ni Selene. "Ito an iya pinakamaupay nga kalidad ngan an iya pinakamaraot."',
          '"Ngan an mga mata?" Siring ni Lucien.',
          '"Balhin," kumpirma niya.',
          "Nakita niya ito mismo, nga natindog nga nag-uusahan ha pasilyo han kasisidman. An mga mata nga ginpinta in nagsubay ha iya, an paagi han pagsubay han mga mata han buhi nga tawo tipakadto ha pagkiwa, ngan naglakat hiya ha kalaksi nga diri niya karuyag tawagon nga pagdalagan ngan waray na hiya bumalik ha pasilyo nga waray kaupod tikang hadto.",
        ],
      },
    },
  },
  {
    id: 11,
    title: "Chapter 11",
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
        terms: linkTagalogPracticeQuestions(11, tagalogTermsByChapter[11]),
        translations: [
          "Nahanap ni Lucien ang pagkakaiba sa mga talaan ng pamilya (genealogical records) sa isang gabi na hindi siya makatulog, nakaupo sa silid ng archive na may mga dokumentong nakakalat sa tatlong talahanayan at isang lumalaking paniniwala na ang puno ng pamilya ay sadyang pinasimple.",
          "Ang linya ng Vale ay nagpakita ng tatlong sangay sa pamamagitan ng ikalabing-siyam na siglo, isang malinaw, maayos na dokumentadong pagbaba sa pamamagitan ng tatlong hanay ng mga pinsan sa kasalukuyang henerasyon. Ang dokumentasyon ay masusing, pare-pareho, at kumpleto.",
          "Masyado itong kumpleto. Gumugol si Lucien ng sapat na oras sa pagsusuri ng mga corporate filings upang makilala kung kailan ang isang rekord ay inihanda sa halip na basta itinago lamang. Ang mga totoong archive ay may mga puwang, hindi pagkakapare-pareho, mga pagwawasto at mga susog. Ito ay malinis sa paraan na ang isang sanitized account ay malinis.",
          "Nahanap niya ang pang-apat na sangay sa gilid ng isang 1887 na mapa ng ari-arian, isang tala sa ibang sulat-kamay, bahagyang nabura ngunit nababasa pa rin sa ilalim ng magnifying glass: Silangang Kubo—ang mga anak na Dunmore, ayon sa kaayusan ni Aurelius.",
          "Ang pangalang Dunmore ay hindi lumitaw saanman sa puno ng pamilya Vale.",
          "Naghahanap si Lucien sa loob ng apat na araw, kumukuha ng mga mapagkukunan na tila ba ang archive ay nag-aalis ng kanyang pansin palayo. Nahanap niya, sa huli, ang isang rekord ng binyag sa rehistro ng simbahan, isang tala sa file ng isang abogado mula noong 1891, at isang balita sa pahayagan noong 1936 tungkol sa isang sunog sa bahay sa nayon kung saan ang isang babaeng nagngangalang Agnes Dunmore-Vale ay inilarawan bilang isang kaanak ng pamilya Vale sa pamamagitan ng isang hindi kinikilalang sangay.",
          "Nakaligtas si Agnes sa sunog. Nagkaroon siya ng mga anak.",
          "Kung ang mga anak na iyon, o ang kanilang mga anak, ay buhay pa, kung mayroong isang pang-apat na pinsan sa kung saan, isang tunay na tagapagmana na may mas malakas na claim, hindi pa alam ni Lucien.",
          "Maingat niyang itinago ang mga dokumento at walang sinabi sa sinuman.",
        ],
      },
      kapampangan: {
        lessonId: "kapampangan_11",
        title: "Kapitulu 11 Ing Mawalang Taginwa",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "A-akit nang Lucien ing aliwa king genealogical records king metung a bengi a e makatulog, makalukluk king archive room a atin documentu king tatlong lamesa at atin matas a paniguro a ing family tree sadyang me-simplify ya.",
          "Ing Vale line papakit ya ding tatlong sanga king nineteenth century, malino at mayayos a pamagbaba karing tatlong sets ning pinsan angga king present generation.",
          "Ing documentation sapat, constante, at kumpleto ya.",
          "Mas kumpleto ya.",
          "I Lucien miglala yang oras king pamanala karing corporate filings ban akilala nung ing record migawa ya kaysa king miligtas mu.",
          "Ding tunay a archive atin gaps, inconsistencies, corrections at amendments.",
          "Ini malinis ya king paraan a ing sanitized account malinis ya.",
          "A-akit ne ing pangapat a sanga king margin ning 1887 estate map, metung a notation king aliwang gamat, medyu me-erase pero mabasa pa king magnifying glass: East Cottage — ding anakan a Dunmore, ayon king pamanayos ni Aurelius.",
          "Ing lagyung Dunmore e mepapadit karing kahit nokarin king Vale family tree.",
          "I Lucien menintun ya king apat a aldo, mamuklat source a ing archive gagamitan ne ban ilayo ing atensyon na.",
          "A-akit ne ring tawli, ing baptismal record king church registry, metung a note king solicitor's file manibat 1891, at newspaper item manibat 1936 tungkul king sunog king bale king balen nung nu ing babai a ngang Agnes Dunmore-Vale mepalarawan a descendant ning Vale family ibat king aliwawa sanga.",
          "Si Agnes meligtas ya king sunog.",
          "Atin yang anakan.",
          "Nung ding anak a ita, o ding anak da, byebi pa la, nung atin pang pangapat a pinsan karin, metung a tunay a heir a atin mas maragul a claim, e pa balu nang Lucien.",
          "Inuli na ding documentu king maingat at ala yang sinabi karing ninu man.",
        ],
      },
      waray: {
        lessonId: "waray_11",
        title: "An Nawawara nga Manurunod",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Nakita ni Lucien an pagkaiba-iba han mga rekord han katulinan ha gab-i nga diri hiya nakakaturog, nga nalingkod ha kwarto han arkibo nga may mga dokumento nga nagsasarang ha tulo nga lamesa ngan nagtitikadamu nga kombiksyon nga tinuyo nga ginpasimple an puno han pamilya.",
          "An linya han Vale nagpakita hin tulo nga sanga pinaagi han ika-napulo kag siyam nga siglo, usa nga klaro, dokumentado hin maupay nga katulinan pinaagi han tulo nga hugpo hin mga umangkon ngadto han yana nga henerasyon. An dokumentasyon bug-os, diri-nabag-o, ngan kompleto.",
          "Sobra ka kompleto ito. Naggasto hi Lucien hin igo nga panahon ha pagrepaso han mga file han korporasyon basi hibaroan kon san-o igin-andam an usa nga rekord imbes nga gintipigan la. An tinuod nga mga archibo mayda mga gap, diri pagkaka-uruyon, mga pagtadong ngan mga pag-amyenda. Malimpyo ini ha paagi nga malimpyo an ginsanitize nga account.",
          "Nakit-an niya an ika-upat nga sanga ha ligid han 1887 nga mapa han katunaan, usa nga notasyon ha iba nga kamot, nga bahin nga ginpara pero mababasa pa gihapon ha ilarom han lupa: East Cottage — an mga anak nga Dunmore, per arrangement ni Aurelius.",
          "An ngaran nga Dunmore waray makita bisan diin ha puno han pamilya han Vale.",
          "Namiling hi Lucien hin upat ka adlaw, ginkukuha an mga surok nga baga hin gin-iistraktura han arkibo an iya atensyon. Nakit-an niya, ha urhe, an rekord han bunyag ha rehistro han singbahan, usa nga nota ha file han usa nga abogado tikang han 1891, ngan usa nga butang ha peryodiko tikang han 1936 mahitungod hin sunog hin balay ha baryo nga diin usa nga babaye nga hi Agnes Dunmore-Vale ginhulagway nga tulin han pamilya Vale han usa nga unach.",
          "Nakatalwas na hi Agnes ha sunog. May mga anak na hiya.",
          "Kun buhi pa ba adto nga mga anak, o an ira mga anak, kun mayda ba ikaupat nga umangkon ha usa nga lugar, tinuod nga manurunod nga mayda mas makusog nga pag-angkon, diri pa maaram hi Lucien.",
          "Ginbutang niya hin maopay an mga dokumento ngan waray magyakan ha bisan hin-o.",
        ],
      },
    },
  },
  {
    id: 12,
    title: "Chapter 12",
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
        terms: linkTagalogPracticeQuestions(12, tagalogTermsByChapter[12]),
        translations: [
          "Nasunog ang timog na silid ng archive sa isang gabi kung kailan ang hangin ay patungo sa hilagang-silangan at ang tatlong pinsan ay dapat na nasa kama na.",
          "Nagising si Selene sa amoy—ang pagsunog ng lumang papel ay may partikular na kalidad, isang tamis sa ilalim ng nakakasulasok—at nahanap ang apoy na naitatag na nang marating niya ang pasilyo, sabik na kumakain sa loob ng mga dekada ng mga dokumento. Hinila niya ang alarma sa sunog at kinuha ang extinguisher sa bulwagan, at habang nakatayo siya sa pasilyo, pinamamahalaan ang sunog nang may propesyonal na kakayahan sa krisis na binuo niya sa loob ng labing-limang taon ng mga pampulitikang krisis, nakita niya si Lucien sa dulo ng pasilyo.",
          "Nakatayo itong napakatahimik. Nanonood. Sa orange na liwanag ng apoy, ang kanyang mukha ay malinaw at walang bantay sa paraan na hindi niya nakita sa loob ng maraming taon, marahil sa mga dekada; ang maayos na pangkabuuang maskara na isinusuot niya palagi ay tinanggal ng isang bagay, at ang nakita niya sa ilalim nito ay isang ekspresyon na hindi niya lubos na mabasa. Isang bagay sa pagitan ng kaluwagan at kagalakan.",
          "Napansin niya ang pagkapansin ni Selene at bumalik agad ang maskara, perpektong nakalapat.",
          '"Narinig ko ang alarma," sabi niya. "Papunta ako para tumulong."',
          '"Napakatahimik mo para sa isang taong paparating para tumulong."',
          '"Nagsusuri ako."',
          "Dumating mabilis ang departamento ng bumberu at ang pinsala ay napigilan. Kalahati ng timog na archive ay nawala. Karamihan sa natira ay napinsala ng tubig na hindi na mababawi.",
          "Sa umaga, sinabi sa kanila ni Lucien ang kanyang narinig: sinasabi sa kanya ni Aurelius na sunugin ito, sinasabi sa kanya na ang ilang mga kasaysayan ay nahawaan at ang nahawang materyal ay kailangang tanggalin bago ito kumalat. Sinabi niya ito sa kanila nang mahinahon, na tila ba nag-uulat ng isang bagay na nangyari sa ibang tao.",
          '"Naniniwala ka ba doon?" tanong ni Elias.',
          '"Naniniwala akong narinig ko ito," maingat na sabi ni Lucien. "Hindi ko alam kung kumilos ako ayon doon."',
          "Walang sinumang pinsan ang nagsabi ng halatang bagay. Ang halatang bagay ay nauupo sa silid kasama nila tulad ng isang pang-apat na partido.",
        ],
      },
      kapampangan: {
        lessonId: "kapampangan_12",
        title: "Kapitulu 12",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Ing south archive room sinulu ya king bengi a ing angin lumalipat northeast at ding tatlong pinsan makapahingalay.",
          "Si Selene migising ya king amoy, ing lumang papel a masulu atin yang specific quality, malisangan king lalam ning acrid, at akit na ing api makapwestu na pagdating na king koridor, mangasira king dekada-dekadang documentu.",
          "Pinindut ne ing fire alarm at kinwa ne ing extinguisher king hall, at akit na si Lucien king dase ning hallway habang makatindag ya king koridor, gigwanan ing api king professional crisis-competence a gawa na king labing-limang banwa ning political emergency.",
          "Makatindag ya a tahimik.",
          "Mamtabe.",
          "King orange light ning api ing mukha na malino at walang maskara king paraan a e na akit king pilang banwa, baka dekada, ing strategic mask a gagamit na tatalnan na melako na ning metung a bage, at akit na king lalam ay expression a e na masabi.",
          "Metung king baet at rapture.",
          "Akit na na akit ne at ing maskara mibalik ya aganaka, perpektu ing pangkabit.",
          '"Nung dingal ku ing alarm," ngana.',
          '"Munta ku ban mamulus."',
          '"Medyu tahimik ka para king taung mumulus."',
          '"Ayuya ku."',
          "Ing fire department datang ya aganaka at ing damage me-contain ya.",
          "Ing kapitnan ning south archive mawala ya.",
          "Ing dakal karing milako mesira na king danum a e na malyari bayuhin.",
          "King abak, sinabi ni Lucien ing dingal na: si Aurelius sasabian na a sunulun ne, sasabian na a ding history atin infection at ing infected material kailangan ilako bayu lumaganap.",
          "Sinabi na ini king kalmado, parang mag-report king bage a milyari king aliwang tau.",
          '"Maniwala ka keta?" kutang ni Elias.',
          '"Maniwala ku na dingal ke," nganang Lucien king maingat.',
          '"E ku balu nung dinesisyunan ke."',
          "Alang pinsan sinabi ing obvious.",
          "Ing obvious makalukluk king kuartu karing kasamasama anting ika-apeng party.",
        ],
      },
      waray: {
        lessonId: "waray_12",
        title: "An Kalayo",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Nasunog an kwarto han arkibo ha sur ha usa nga gab-i han an hangin nagkikiwa tipa-amihanan-este ngan an tulo nga magparatod kuno ha higdaan.",
          "Nagmata hi Selene han baho, an daan nga papel nga pagsunod mayda partikular nga kalidad, usa nga katam-is ha ilarom han maaslom, ngan naabtan an kalayo nga naestablisar na han pag-abot niya ha pasilyo, nga madasignon nga nakaon pinaagi hin mga dekada hin mga dokumento. Ginkuha niya an alarma han kalayo ngan kinadto para han paraparong ha pasilyo, ngan samtang natindog hiya ha pasilyo, nagaasikaso han sunog gamit an propesyonal nga krisis-kapasidad nga iya naamdan ha sulod hin kinse ka tuig nga mga emerhensya ha politika, didto nakit-an niya hi Lucien ha hirayo nga parte han pasilyo.",
          "Nakabakdaw hiya nga waray gud pagkiwa. Nagbabantay. Ha kolor-kahel nga kapawa han kalayo an iya nawong klaro ngan waray niya makita ha sulod hin mga tuig, bangin ha sulod pa hin nga dekada, an ginkomposo nga estratehiko nga maskara nga iya pirme ginsusul-ot nga baga han ginkuha han kun ano, ngan an iya nakita ha ilarom hini usa nga ekspresyon nga diri niya gud mababasa. May ada ha butnga han pagginhawa ngan pag-agaw.",
          "Napansin niya an iya pag-obserba ngan bumalik dayon an maskara, perpekti an pagkakaangay.",
          "“Nabatian ko an alarma,” sering niya. “Kumanhi kunta ako pagbulig.”",
          "“Nag-ukoy ka gud para hin tawo nga maabot pagbulig.”",
          "“Nag-usisa ako.”",
          "Dagmit nga umabot an mga bombero ngan napugnan an danyos. Waray na an katunga han arkibo ha sur. Kadam-an han nahibliin an nadaot han tubog nga diri na mabawi.",
          "Han aga, ginsumatan hira ni Lucien han iya nabatian; Ginsumatan hiya ni Aurelius nga sunugon ini, ginsidngan hiya nga mayda mga kasaysayan nga natapnan ngan kinahanglan utdon an natapnan nga materyal antis ini magsarang. Kalmado nga ginsumatan niya ini ha ira, nga baga hin nagsusumat hin nahitabo ha iba nga tawo.",
          "“Natood ka ba hito?” pakiana ni Elias.",
          "“Natood ak nga nabatian ko ini,” mabinantayon nga sirin ni Lucien. “Diri ako maaram nga nag-akto ak hito.”",
          "Waray bisan usa ha magparaptod an nagyakan han klaro nga butang. An klaro nga butang nakalingkod ha kwarto upod nira nga baga hin ikaupat nga partido.",
        ],
      },
    },
  },
  {
    id: 13,
    title: "Chapter 13",
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
        terms: linkTagalogPracticeQuestions(13, tagalogTermsByChapter[13]),
        translations: [
          "Ang pista ay ideya ni Selene, at pinlano niya ito nang may masusing pag-iingat na, sa pagbabalik-tanaw, ay isang anyo ng mahiwagang pag-iisip—ang paniniwala na ang sapat na kakayahan ay kayang dumaig sa anuman ang patuloy na nagpapawalang-bisa sa kanilang mga pagtatangka sa katubusan.",
          "Nakipag-ugnayan siya sa komite ng mga kaganapan sa bayan, nag-arkila ng mga entertainer, nag-ayos ng mga tindahan ng pagkain, kumuha ng seguro. Pinamahalaan niya ang bawat variable ng logistika na maaari niyang matukoy. Hindi niya mapamahalaan ang hindi niya nakikita.",
          "Unang nawala ang mga ilaw, ang mga string ng mga bombilya na isinabit sa pagitan ng mga tindahan sa pamilihan ay pumutok ang mga fuse sa ikalabing-isa ng umaga, dalawang oras bago magbukas ang kaganapan, iniwan ang plasa na nililiwanagan lamang ng patag na langit ng Nobyembre. Hindi mahanap ng mga elektrisyan ang sira.",
          "Pagkatapos ay ang mga bata. Tatlo sa kanila ang nawala sa loob ng apatnapung minuto sa maagang hapon—nagdulot ng ligaw na paghahanap, mga babala sa radyo, ang mga mukha ng mga magulang na dumaan sa takot patungo sa galit, bago sila nahanap sa simbahan, perpektong mahinahon, nakaupo sa harapang upuan. Nang tanungin kung ano ang kanilang ginagawa, silang tatlo ay nagsabi, nang may kaunting pagkakaiba, na may isang lalaking humiling sa kanila na pumasok sa loob dahil uulan. Hindi umulan.",
          "Namatay nang tahimik ang mga hayop, nakakalat sa buong kaganapan: isang aso ang bumagsak malapit sa gate ng pasukan, dalawang kabayo na inaakay sa isang demonstrasyon ay sabay na nahulog sa kalye, isang tindahan na nagbebenta ng mga kuneho ay nahanap ang lahat ng apat na hayop nito na tahimik at malamig bago matapos ang hapon. Walang malinaw na sanhi ang naitatag.",
          "Hindi sinisi ang pamilya Vale para sa anuman sa mga ito sa anumang partikular, naaaksyunang paraan. Sinisi sila sa mas matagal na paraan, ang paraan na hindi nangangailangan ng ebidensya dahil ito ay pinananatili ng kapaligiran sa halip na argumento: sinisi sila dahil nandoon sila, dahil sila ang nag-ayos nito, dahil nagkakaroon ng masamang bagay kapag ang mga Vale ay kasangkot. Ito ang ibig sabihin ng isinumpa (cursed), sa wika ng bayan. Hindi supernatural. Basta, maaasahang malas. O isang bagay na mas malala pa sa malas.",
          "Korap, isinulat ng isang tao sa bakod. Korap sa dugo.",
        ],
      },
      kapampangan: {
        lessonId: "kapampangan_13",
        title: "Kapitulu 13",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Ing festival idea ni Selene, at pinlano na ito king thoroughness a retrospective, dase ning magical thinking, paniwala a ing sapat a competence malyari na i-override ing sablang magpabagu karing attempt da king redemption.",
          "Mekipag-coordinate ya king town events committee, kinuwaran ding entertainer, pinlano ding food stalls, siniguradu ing insurance.",
          "Mene-manage ne ing balang logistical variable a akit na.",
          "E na pwedeng manage ing e na akit.",
          "Ing sagi mumuna mawala ya, ding strings of bulbs a makasabit king market stalls mipasira king fuse king alas onsi ning abak, aduang oras bayu mag-buklat ing event, malating liwanag mu king November sky.",
          "Ding electrician e de akit ing sira.",
          "Saka ding anakan.",
          "Tatlu karela mawala la king apatpulu minutos king abak — dadala king pamanintun, radio alerts, mukha ning pengari manibat terror hanggang fury, bayu de akit king simbahang, kalmadong-kalmado, makalukluk king harap.",
          "Nung kutang nnu ing gewa ra, ding tatlu sinabi da, na atin manang sinabi karing lumapit uling ulan ya.",
          "E ulan.",
          "Ding ayup mete la king tahimik, kakalat king event: metung a asu me-collapse king entrance gate, aduang kabayu sabayang me-lapat king dalan, metung a tindahan a magtindang kuneho akit na ding apat na ayup mete na sila bayu matapos ing hapon.",
          "Alang clear cause a akit.",
          "Ing Vale family e me-blame karing ninu man king specific, actionable way.",
          "Me-blame la king mas durable, ing paraan a e kailangan evidence uling uli na ning atmosphere kaysa argument: me-blame la uling atyu la karin, uling inorganisa de, uling ding bage me-mali neng atyu ding Vale.",
          "Ini ing buri sabian ning cursed, king vocabulary ning balen.",
          "Aliwa supernatural.",
          "Sadyang, unlucky.",
          "O metung a marok pa sa unlucky.",
          "Corrupted, sinabi ning metung king bakud.",
          "Corrupted king daya.",
        ],
      },
      waray: {
        lessonId: "waray_13",
        title: "An Patron ha Bungto",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "An patron amo an ideya ni Selene, ngan iya ini ginplano nga mayda kabug-os nga, ha pag-usisa, usa nga klase hin mahika nga panhunahuna, an pagtuod nga an husto nga kaabante an makakalabaw han bisan ano nga padayon nga nagbubuklad han ira mga pagsari hin katalwasan.",
          "Nakig-ordinar hiya ha komite han mga panhitabo ha bungto, nagkuha hin mga paralingaw, nag-areglo han mga tindahan hin pagkaon, nagseguro han seguro. Gindumara niya an tagsa nga lohistika nga iya nakikilala. Waray niya makontrol an diri niya nakikita.",
          "Una an mga suga nga nawara, an mga bombilya nga iginkabit ha butnga han mga puwesto ha merkado napalong an mga fuse han alas onse han aga, duha ka oras antes mag-abri an kalihokan. Tungod hito, an kwadrado nalamragan na la han patag nga kalangitan han Nobyembre. Waray mabilngi han mga elektrisyan an sayop.",
          "Katapos an mga kabataan. Tulo ha ira an nawara hin kwarenta minutos han temprano nga kulop—nga nagin hinungdan han pagkalisang nga pagbiling, an mga alerto han radyo, an mga nawong han mga kag-anak nga tikang ha hinduro nga kahadlok ngan nagtikang magpakita hin kasina, bag-o nira hira mabilngan ha simbahan, kalmado gudla, ngan nakalinkod ha atubangan nga bangko. Han ginpakianhan kon ano an ira ginbubuhat didto, nagsiring hira nga tulo—bisan may gutiay nga pagbag-o—nga may lalaki nga nagsugo ha ira nga sumulod kay mauran kuno. Pero waray man umuran.",
          "Waray aringasa nga namatay an mga hayop, nga nakasarang ha bug-os nga panhitabo: usa nga ayam an natumba hirani ha trangkahan, duha nga kabayo nga gintutugwayan h usa nga pasundayag an dungan nga natumba ha kalsada, an usa nga tindahan nga nagbabaligya hin mga kuneho nabilngan nga an upat niya nga mga hayop nga diri na nagkikiwa ngan mahagkot bag-o matapos an adlaw. Waray klaro nga hinungdan nga napamatud-an.",
          "Diri man direkta nga ginsala an pamilya Vale ha bisan ano hini nga mga nahitabo. Ginsasala hira ha mas marig-on nga paagi, an klase nga diri na kinahanglan hin kamatuoran o ebidensya kay ginpapadayon la gihapon ini han panuyo han palibot kaysa han rason; ginsasala hira tungod kay nakadto hira, tungod kay ira ito gin-organisar, tungod kaykakaraut an ngatanan basta kaupod an mga Vale. Amo ini an karuyag sidngon han sumpa, ha bokabularyo han bungto. Diri man tikang ha diri sugad ha aton. O mas maraot pa kaysa han malas.",
          "Dunot, may-ada nagsurat ha kudal. Donut ha dugo.",
        ],
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
        terms: linkTagalogPracticeQuestions(14, tagalogTermsByChapter[14]),
        translations: [
          "Si Selene ang unang nakapansin sa paraan ng pagsasalita.",
          "Palaging nagsasalita si Elias nang may isang tiyak na tapat na kawalan ng tumpak, ang wika ng isang tao na ang mga ideya ay gumagalaw nang mas mabilis kaysa sa kanyang kakayahang pormalin ang mga ito—malawak at may mainit na puso at kung minsan ay napakatalino. Minahal niya ito tungkol sa kanya noong bata pa sila. Minaliit niya ito bilang isang matanda. Siya ngayon, pinapanood itong mawala, muling binubuo ang halaga nito nang may kalinawan ng pagbabalik-tanaw ng isang tao na nawalan ng isang bagay bago maunawaan kung ano iyon.",
          "Nagsimula siyang gumamit ng ibang mga konstruksyon. Mga sinaunang pormulasyon na nakaupo nang kakaiba sa kanyang bibig: hinihingi ito ng dugo kung saan dati niyang sasabihin kailangan nating; ang tamang kaayusan ng pamilya kung saan sasabihin niya kung ano ang patas. Ang wika ng pamana at linyang ng dugo at legacy, ang wika ni Aurelius.",
          "Nagbago ang kanyang sulat-kamay. Nakahanap siya ng isang tala na iniwan niya sa talahanayan ng kusina at tumayong hawak ito sa loob ng ilang segundo, natitiyak na ito ay isang bagay na nahanap niya sa archive, bago kilalanin ang kanyang pangalan sa ibaba.",
          "Ang tinig ang huling nagbago, at ang pinaka-nakakagambala. Nangyari ito ng dalawang beses sa kanyang harapan, at parehong mabilis, isang paglipat ng rehistro, isang kaunting pagbabago ng indayog, isang bagay na pumapasok at umaalis sa paraan ng panahon na gumagalaw sa isang bukas na silid. Si Elias mismo ay tila walang kamalayan dito. Hihinto siya sa gitna ng pangungusap, magpapatuloy, magpapatuloy na tila walang nangyari, habang si Selene ay nakaupo sa kabila niya at nagtatrabaho nang husto upang panatilihing maayos ang kanyang mukha.",
          "Pumunta siya sa silid ni Lucien nang gabing iyon.",
          '"Sinasapian siya," sabi niya.',
          '"Nagkakaroon siya ng isang sikolohikal na yugto," sabi ni Lucien. "Sa ilalim ng pambihirang stress, ang mga tao—"',
          '"Lucien. Ang kanyang sulat-kamay."',
          "Isang katahimikan.",
          '"Alam ko," sabi niya. "Napansin ko."',
          '"At?"',
          '"At hindi ko alam kung ano ang gagawin tungkol dito na hindi nagpapalala rito. Sa tuwing nakikipag-ugnayan tayo dito nang direkta, tumitindi ito. Nabasa mo ang talaarawan ni Gwendolen."',
          "Tumitig si Selene sa pader. Ang mga bulong ay gumalaw sa buong bahay tulad ng isang agos na natutunan ang floor plan.",
        ],
      },
      kapampangan: {
        lessonId: "kapampangan_14",
        title: "Kapitulu 14",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Si Selene ing mumunang apansin ing phrasing.",
          "I Elias parating magsalita king earnest imprecision, ing language ning taung ing ideas maliksi pa sa capacity na, sprawling at warmhearted at occasional brilliant.",
          "Buri ne ini neng kayanakan da.",
          "Mataas ing panimanman na neng matua na.",
          "Ngeni, akit na mawala ya, bibilog ne ing value king retrospective clarity ning taung mawalan bage bayu ne a-intindihan.",
          "Meg-umpisa yang gumamit aliwang construction.",
          "Archaic formulations a e angkop king simod na: ing blood demands it nung nu dating sinabi na kailangan ta; ing family's proper order nung nu sinabi na nnu ing fair.",
          "Ing vocabulary ning inheritance at bloodline at legacy, ing vocabulary ni Aurelius.",
          "Ing handwriting na minaliwa ya.",
          "Akit ne ing note a in Lako na king kitchen table at tinnalakad ya king seconds, siguradu a ninu karing archive, bayu ne akit ing lagyu na king lalam.",
          "Ing boses ing tawling minaliwa, at pekamalungkut.",
          "Milyari aduang beses king arap na, at aduang beses man brief, register shift, malating alteration king cadence, metung a sumuk at milako anting panahon a lumalipat king bukas a kuartu.",
          "I Elias e na balu.",
          "Tuknang ya king mid-sentence, mibalik, magpatuloy anting alang milyari, habang si Selene makalukluk king arap na at magpilit na e papakit ing emosyon.",
          "Munta ya king room ni Lucien ketang bengi.",
          '"Magging possessed ya," ngana.',
          '"Atin yang psychological episode," nganang Lucien.',
          '"King extraordinary stress, ding tau—"',
          '"Lucien.',
          'Ing handwriting na."',
          "Metung a tahimik.",
          '"Balu ku," ngana.',
          '"Apansin ke."',
          '"At?"',
          '"At e ku balu nung nnu ing gawan a e mas marok.',
          "Balang beses mag-engage kita direct, mage-escalate ya.",
          'Binasa mu ing journal ni Gwendolen."',
          "Si Selene linad lad king pader.",
          "Ding bulung milipat king bale anting tide a me-aral ing floor plan.",
        ],
      },
      waray: {
        lessonId: "waray_14",
        title: "An Tinikangan han Pagbag-o ni Elias",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Hi Selene an una nga nakapansin dida han pagyakan.",
          "Pirme nagyayakan hi Elias nga may-ada nga sinsero nga kawaray-eksakto, an yinaknan han usa nga an mga huna-huna mas malaksi nga nagkikiwa kaysa han iya kapasidad ha pagpormal hito, nagsasarang ngan mahigugmaon ngan danay dati liwat. Mao gud ini an karuyag ni Selene ha iya han kabattan pa hira. Han nagdagku na hira gintatamayan niya ini. Yana, samtang nakikita niya nga nawawari ini, ginhuhuna-huna niya utro an pulos hito pinaagi han husto nga pagsabot han usa nga tawo nga may nawara antes pa man niya mabaruan kon ano adto.",
          "Nagtikang hi Elias gumamit hin iba nga mga porma han mga yakan. Mga kadaan nga pormulasyon nga baga hin diri angayan ha iya baba: kinahanglan in han aton dugo an iya ginyayakan imes nga kinahanglan nton in buhaton; an husto nga kahimtang han pamilya imbes nga an oatas nga butang nga angay buhaton. An bokabularyo han panurundon ngan han dugo ngan panurundon, an bokabularyo ni Aurelius.",
          "Nagbag-o liwat an agi han iya pagsurat. Nakakita hi Selene hin usa nga nota nga iya ginbilin ha lamesa ha kusina ngan nakabakdaw nga iya ini ginkaptan mga pipira ka segundo, sidurado hiya nga mao ini iya naagian ha arkibo, bag-o niya nakilala an nakasurat nga ngaran ha ubos.",
          "An iya tingog an urhi nga nagbag-o, ngan amo liwat an pinakamakaharadlok. Duha ka beses ini nahitabo ha atubangan ni Selene, ngan kada usa madali la. Baga hin tigda nga nagbag-o an tono ngan ritmo han iya pagyakan, sugad hin may usa nga nasulod ngan binaya pariho han panahon nga nasulod ha usa nga kwart nga abrido an bintana. Hi Elias mismo baga han diri maaram ha mga nahihitabo ha iya. Naundang hiya ha butnga han iya ginyayakan, ngan katapos nagpapadayon na la, sugad hin waray nahitabo. Samtang nakalingkod hi Selene ha iya atubangan, nangalimbasog gud hiya nga diri magpakita han iya inaabat.",
          "Hadto nga gab-i, kinadto hiya ha kwarto ni Lucien.",
          "“Ginsasaniban na hiya,” siring niya.",
          "“Nagkakaada hiya hin sikolohikal nga krisis,” baton ni Lucien. “Kon sobra na an istress han usa ka tawo—”",
          "“Lucien. An iya agi.”",
          "“Maaram ako,” baton niya. “Napansin ko na liwat.”",
          "“Ngan?”",
          "“Ngan diri ako maaram kon ano an angay naton buhaton nga diri makapasamok pa han sitwasyon. Kada pakig-atubang naton hini hin direkta, mas nagtitikadako. Nabasa mo an journal ni Gwendolen.”",
          "Tumutok hi Selene ha bungbong. An mga huring naglilibot ha balay sugad hin pagtaob han dagat nga nahibaro na han plano han mga kwarto.",
        ],
      },
    },
  },
  {
    id: 15,
    title: "Chapter 15",
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
        terms: linkTagalogPracticeQuestions(15, tagalogTermsByChapter[15]),
        translations: [
          "Nahanap nila ang ibabaw ng lawa na perpektong tahimik sa umaga na tinawid nila ito.",
          "Isang lokal na mapa, bago ang 1900, mula sa koleksyon ng simbahan, ang nagmarka ng isang pamilyang vault sa ilalim ng hilagang dulo ng lawa na may tala na lumubog sa panahon ng baha noong 1852. Ang hindi maihahatid ng mapa ay ang kalidad ng tubig sa partikular na lugar na ito, ang paraan ng paglamig nito bigla at pananatiling malamig, ang paraan ng walang lumalago sa ilalim, ang paraan ng liwanag na tila bumabaluktot nang kaunti dito na tila ba ang geometry ng lugar ay banayad na mali.",
          "Nag-arkila si Elias ng kagamitan sa pag-dive mula sa isang tindahan na may dalawang bayan ang layo at bumaba nang mag-isa, na natuklasan lamang ng iba pagkatapos niyon. Nasa ilalim siya ng tubig sa loob ng dalawangpu't dalawang minuto at nang sumulpot siya, ang kanyang mukha ay may ekspresyon ng isang tao na nakakita ng isang bagay na permanenteng nagbago sa kanyang pakiramdam kung ano ang nilalaman ng mundo.",
          "Sa loob ng libingan, sinabi niya sa kanila, ay isang batong sarcophagus na inukit kasama ang Vale crest. Bukas ang takip. Ang loob ay walang laman maliban sa isang haba ng kadena, mabibigat na link, lumang bakal, na nakakabit sa bato sa magkabilang dulo, na nakakurba sa hugis ng isang katawan na wala na doon.",
          '"Ang kadena ay hindi nagpipigil sa anumang bagay," sabi ni Elias. "Inayos ito nang napaka-ingat para sa pagpipigil. Ito ay, seremonyal. Parang isang marka. Parang kung saan may inilagay na bagay na hindi na kailangang ilagay doon."',
          '"Dahil nandito na ito," sabi ni Selene.',
          "Walang sinuman sa kanila ang nagtanong kung ano ang ibig niyang sabihin sa dito. Naunawaan nila ito nang perpekto.",
        ],
      },
      kapampangan: {
        lessonId: "kapampangan_15",
        title: "Kapitulu 15",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Akit de ing surface ning danum perpektong tahimik king abak a in tawid de.",
          "Local map, pre-1900, king church collection, atin vault king lalam ning north end a atin annotation submerged king flood ning 1852.",
          "Ing map e na pwedeng sabian ing quality ning danum king spot a ini, ing minalis marok at manatiling malammi, ala mayap king lalam, ing liwanag medyu mibaliu anteng ing geometry malako.",
          "I Elias kinuang diving equipment king shop aduang balen at sinubling mag-isa, a ding aliwa akit de mu king tawli.",
          "Atyu king lalam ning danum king bayntis-dos minutos at anyang mibangon ne ing mukha na atin expression ning taung akit na ing bage a mig-redistribute king sense na king tatalnan ning mundo.",
          "King lalam ning crypt, sinabi na, atin stone sarcophagus carved king Vale crest.",
          "Ing takip bukas ya.",
          "Ing lalam ala kundi rantas, heavy links, lumang bakal, fixed king stone king aduang dase, curved king shape ning katawan a ala na.",
          '"Ing rantas e na pamanigid ninu man," nganang Elias.',
          '"Medyu carefully pinlano para king restraint.',
          "Ceremonial ya.",
          "Anting marking.",
          'Anting nung nu pwestu ing bage a e na kailangan keti."',
          '"Uling atyu na keti," nganang Selene.',
          "Alang kutang nnu ing buri sabian na king keti.",
          "A-intindihan de na pwedeng perpekto.",
        ],
      },
      waray: {
        lessonId: "waray_15",
        title: "An Kripta",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Naabtan nira nga hingpit nga waray kiwa an tubig ha lanaw han aga nga tinabok hira.",
          "Usa nga lokal nga mapa, antes han 1900, tikang ha koleksyon han simbahan, an nagtigaman hin usa nga bodega han pamilya ha ilarom han norte nga kataposan han danaw nga may anotasyon nga nalunod durante han baha han 1852. An waray maipaabot han mapa amo an kalidad pagtugnaw hito tigda nga nagtikatugnaw, baga hin medyo naiiba an pagduko han kapawa dinhi nga baga hin diri klaro nga sayop an geometrya han lugar.",
          "Nagplete hi Elias hin mga garamiton ha pag-dive ha usa nga tindahan nga duha ka bungto an kahirayo ngan lumusad nga nag-uusahan, nga nadiskobrehan la han iba katapos hito. Nakadto hiya ha ilarom han tubig hin baynte-dos minutos ngan han pag-alsa niya an iya nawong mayda ekspresyon hin usa nga tawo nga nakakita hin usa nga butang nga permanente nga nag-apod-apod utro han iya pag-abat kun ano an sulod han kalibuta.",
          "Ha sulod han kripta, siring niya ha ira, may-ada sarkopago nga bato nga gin-ukit nga may-ada pungka han Vale. Abrido an taklob. Waray sulod an sulod labot la hin usa nga kahilaba nga kadena, mabug-at nga mga sumpay, daan nga puthaw, nga nakadukot ha bato ha duha nga kataposan, ngan kurbado ha porma hin lawas nga waray na.",
          "“Waray ginpupugngan an kadena,” siring ni Elias. “Gin-areglo ini hin sobra ka-ikmat para hin pagpugong. Ito, seremonya. Sugad hin pagmarka. Sugad hin kun diin mayda ginbutan nga diri na kinahanglan ibutang didto.”",
          "“Kay aadi na ini,” siring ni Selene.",
          "Waray ha ira nagpakiana kon ano an iya karuyag sidngon dinhi. Nasabtan gud nira hiya.",
        ],
      },
    },
  },
  {
    id: 16,
    title: "Chapter 16",
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
        terms: linkTagalogPracticeQuestions(16, tagalogTermsByChapter[16]),
        translations: [
          "Dumating ang pari nang walang babala noong isang Martes at tumangging umalis hangga't walang nakikipag-usap sa kanya.",
          "Napakatanda na niya, na may mga detalye ng kanyang denominasyon na hindi malinaw; tama ang kanyang kuwelyo ngunit may isang bagay tungkol sa kanya, ang kanyang ekonomiya ng paggalaw, ang kanyang katahimikan, ay nagmungkahi ng isang kaugnayan sa isang mas matandang institusyonal na alaala kaysa sa anumang kasalukuyang simbahan na maaaring i-claim. Nauupo siya sa harapang parlor at ininom ang tsaa na dinala sa kanya ni Maren at naghintay.",
          "Sinabi niya sa kanila ang kanyang nalalaman sa simpleng wika na tumangging gawing dramatiko o nakakatitiyak ang sarili.",
          "Ang sumpa, sabi niya, ay hindi isang bagay na ginawa sa pamilya Vale. Ito ay isang bagay na ginawa ng pamilya Vale. Itinayo ito ni Lord Aurelius, hindi sa pamamagitan ng seremonya, hindi sa pamamagitan ng anumang theatrical, kundi sa pamamagitan ng layunin at pag-uulit, ang patuloy na kilos ng pagtuturo sa bawat henerasyon na ang takot ang naaangkop na konteksto para sa katapatan, na ang banta ang naaangkop na mekanismo ng pagkakaisa. Ang mga bulong ay ang nalalabi ng pagtuturong iyon. Sa tuwing naniniwala ang isang tagapagmana ng Vale sa mga bulong, sa tuwing kumikilos sila ayon sa mga ito, binabago nila ang pattern. Sa tuwing sinusubukan nilang talunin ito, nakikipag-ugnayan sila dito nang mas malalim, na isang anyo ng parehong bagay.",
          '"Kung tatalikuran ng pamilya ang pamana," sabi ng pari, "at talagang tinalikuran ito, naglakad palayo, walang ginawang claim, hinayaan ang pangalan na matunaw, ang mga bulong ay maaaring huminto. Walang garantiya. Ngunit ang pagpapakain ay hihinto."',
          "Tiningnan niya ang bawat isa sa kanila.",
          '"Maaari," tala ni Selene.',
          '"Maaari," kumpirmasyon ng pari.',
          "Walang sinuman ang nagsalita sa loob ng mahabang panahon pagkatapos niyon. Lumalatak ang apoy. Sa labas, ang hapon ay naging kulay-abo sa paraan na ang mga hapon ng Disyembre sa bahaging ito ng bansa ay nagiging kulay-abo—ganap at walang drama at tila ba hindi kailanman naging iba pa.",
          '"Hindi," sa huli ay sabi ni Lucien.',
          '"Hindi ko kaya," sabi ni Elias.',
          "Walang sinabi si Selene, na isang kakaibang uri ng sagot.",
          "Tumayo ang pari, isinuot ang kanyang amerikana, at umalis. Hindi siya nag-iwan ng card. Hindi na nila siya nakitang muli.",
        ],
      },
      kapampangan: {
        lessonId: "kapampangan_16",
        title: "Kapitulu",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Mekatandag ya ing pari a alang pauna king Martes at e ne minako anggang atin makisabi kaya.",
          "Matuwa ne relies, e malino ing sekta na, ustung-ustu ing kola na pero atin bage kaya, ing lambat ning kilos na, ing tahimik na, a magpalarawan king mas matuwang pamanatili kaysa king kahit nukarin a simbahang ngeni.",
          "Minalukluk ya king arapan a parlor at mininum tea a inala nang Maren at minagaw.",
          "Sinabi na karing sinabi na king simpleng salita a ayaw maging dramatiko o magpakalina.",
          "Ing sumpa, ngana, aliwa ya bage a me-gawa king Vale family.",
          "Bage ya a me-gawa ning Vale family.",
          "Si Lord Aurelius inusuk ne ini, aliwa king seremonya, aliwa king theatrical, kundi king intention at pamanulit, ing gawi ning pamagtuturo king balang henerasyon a ing takut ing ustung context para king katapatan, a ing banta ing ustung mekanismo ning pamagkasundo.",
          "Ding bulung ila ing natira king pamagtuturong ita.",
          "Balang beses a ing heir ning Vale maniwala ya karing bulung, balang beses dang dinesisyunan ini, ibayuhan de ing pattern.",
          "Balang beses dang sinubuk a siran ini, mas malalam ing pamanalubung da, a katumbas mu ning parehong bage.",
          '"Nung ing pamilya lakwan ne ing mana," nganang pari, "at talagang lakwan ne, mako ya, alang hinging karapatan, paburen ing lagyu mawala, ding bulung malyari lang tumuknang.',
          "Alang garantiya.",
          'Pero ing pamanilako pakanin tumuknang ya."',
          "Liningap ne ing balang metung karela.",
          '"Malyari," nganang Selene.',
          '"Malyari," pinaris nang tinmu.',
          "Alang minyabi karela king malawat a panaun kaibat nita.",
          "Ing api kinulapnit ya.",
          "King lual, ing hapon meging abu ya king paraan a ing hapon ning Disyembre king dase a ini ning bansa maging abu ya, buo at alang drama at anting e ne meging aliwa.",
          '"Ali," nganang Lucien king tawli.',
          '"E ku malyari," nganang Elias.',
          "Si Selene ala yang sinabi, a aliwang uri ning pakibatu.",
          "Minundag ya ing pari, sinuat ne ing kapa na, at meko ya.",
          "E ya minlako card.",
          "E de ne akit ulit.",
        ],
      },
      waray: {
        lessonId: "waray_16",
        title: "An Sabut",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Inabot an padi nga waray ipahibaro ha usa ka Martes ngan nagdumiri paggikan tubtob nga may maki-istorya ha iya.",
          "Lagas na hiya hin duro, nga an mga partikularidad han iya denominasyon in diri klaro, an iya kwelyo in tama pero mayda mahitungod ha iya, an iya ekonomiya hin pagkiwa, an iya paghilom, nagsusuhestyon hin pagkaapil hin mas daan nga institusyonal nga hinumduman kaysa han bisan ano nga yana nga singbahan nga makakag-angkon. Nalingkod hiya ha atubangan nga parlor ngan ininom han tsa nga gindara ha iya ni Maren ngan naghulat.",
          "Ginsumatan niya hira han iya hinbabaroan ha simple nga yinaknan nga nagdumiri nga magin dramatiko o makapasarig.",
          "An sumpa, sering niya, in diri usa nga butang nga ginbuhat ha pamilya Vale. Usa ito nga butang nga ginbuhat han pamilya Vale. Gintukod ini ni Ginoo Aurelius, diri pinaagi hin seremonya, diri pinaagi hin bisan ano nga teatro, kundi pinaagi hin panuyo ngan pag-utro, an nagpapadayon nga buhat hin pagtutdo ha kada henerasyon nga an kahadlok amo an kaangayan nga konteksto para han pagkamaunungon, nga an tarhog amo an kaangayan nga mekanismo han pagkaurosa. An mga huring-huring amo an salin hito nga katutdoan. Kada pagtoo han usa nga manurunod han Vale han mga huring-huring, kada pagbuhat nira hito, ira ginbabag-o an surubdan. Ha kada pagsari nira nga pirdihon ito, mas hilarom an ira pakig-away hito, nga usa nga porma han pariho nga butang.",
          '"Kun ginbayaan han pamilya an panurundon," siring han padi, "ngan tinuod nga ginbayaan ini, naglakat, waray mag-angkon, pabay-i nga matunaw an ngaran, bangin umundang an mga huring. Waray garantiya. Pero maundang an pagpakaon."',
          "Ginkita niya an kada usa ha ira.",
          '"Bangin," siring ni Selene.',
          '"Bangin," iya ginkumpirma.',
          "Waray ha ira nagyakan hin maiha katapos hito. Nag-uwang an kalayo. Ha gawas, an kulop nagin abohon na ha paagi han pag-abohon han mga kulop han Disyembre hini nga bahin han nasud, nga bug-os ngan waray drama ngan baga hin waray pa gud hira iba.",
          '"Diri," siring ni Lucien ha urhi.',
          '"Diri ako makakahimo," siring ni Elias.',
          "Waray magyakan hi Selene, nga iba nga klase hin baton.",
          "Tinindog an padi, ginsul-ot an iya bado, ngan binaya. Waray hiya magbilin hin kard. Waray na nira hiya makita utro.",
        ],
      },
    },
  },
  {
    id: 17,
    title: "Chapter 17",
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
        terms: linkTagalogPracticeQuestions(17, tagalogTermsByChapter[17]),
        translations: [
          "Ang mga dokumento ay nakatago sa silangang pakpak, sa isang cabinet na nakaligtaan niya sa panahon ng kanyang paunang paghahanap dahil itinayo ito sa pader upang magmukhang isang bahagi ng wainscoting. Nahanap niya ito nang lumuwag ang panel isang gabi habang nakasandal siya dito.",
          "May apatnapung taon ng mga file. Marahil higit pa.",
          "Ang sistematikong pagtatala ng pribadong impormasyon, mga relasyon, mga utang, mga kasaysayan ng medikal, mga propesyonal na kabiguan, para magamit laban sa mga institusyon ng bayan. Laban sa mga miyembro ng konseho na sumubok na panagutin ang pamilya. Laban sa mga mamamahayag na nag-imbestiga. Laban sa lokal na hukom na nakaiskedyul na duminig sa isang kaso laban sa pamilya noong 1971 bago biglang nag-withdraw mula rito at hindi kailanman nagpaliwanag kung bakit.",
          "Ang pampublikong reputasyon ng pamilya Vale—ang bagay na tinawag ng kanilang lola bilang tanging salapi na nananatili, ang bagay na kinakailangan ng pamana na ibalik nila—ay itinayo nang buo sa kakayahang gawing takot ang mga tao. Hindi paghanga. Takot, na inilapat nang tama.",
          "Nauupo si Selene sa sahig ng silangang pakpak kasama ang mga file na nakakalat sa paligid niya at naramdaman ang partikular na pagkasuklam ng nhận mukha na nagtatrabaho ka patungo sa muling pagtatayo ng isang bagay na hindi dapat muling itayo.",
          "Kunan niya ng larawan ang lahat. Lahat ng ito. Inilagay niya ang mga larawan sa isang encrypted drive at itinago ang drive. Nauupo siya kasama ang kanyang isinasaalang-alang sa loob ng dalawang linggo, kung saan ang pagbulong ay nag-alok sa kanya ng labing-isang magkakaibang interpretasyon kung bakit hindi niya dapat gawin ito—lahat ng mga ito ay teknikal na totoo, lahat ng mga ito ay nagsisilbi kay Aurelius.",
          "Nagsimula siyang mag-draft ng isang hindi kilalang pagsusumite sa rehiyonal na pahayagan.",
        ],
      },
      kapampangan: {
        lessonId: "kapampangan_17",
        title: "Kapitulu 17",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Ding documentu makatago la king east wing, king cabinet a e na apansin king mumunang pamanintun uling me-bawas ya king pader ban kaparis ning dase ning wainscoting.",
          "Akit ne anyang ing panel me-luag ya king metung a bengi habang makasandal ya keti.",
          "Atin apatpulum banwang files.",
          "Baka mas dakal pa.",
          "Ing sistematikong pamanulat king pribadong impormasyon, affairs, utang, medical history, professional failure, ban gagamitan laban karing institusyon ning balen.",
          "Laban karing council members a sinubuk panaligan ing pamilya.",
          "Laban karing mamahayag a minimbestiga.",
          "Laban king lokal a hues a makatakda ban makirandam kaso laban king pamilya noong 1971 bayu minatras king aganaka at alang pampaliwanag nung bakit.",
          "Ing pampublikong katayuan ning Vale family, ing bage a sinabi ning ima da a tanging salapi a manatili, ing bage a kailangan dang ibalik king mana, meusuk ya buo king abilidad a magpatakut karing tau.",
          "Aliwa pamanhanga.",
          "Takut, ustung me-gamit.",
          "Si Selene makalukluk ya king lantai ning east wing a ding files kakalat king paligid na at naramdam ne ing pagsisi a a-intindihan mu a magtrabaho ka para king pamanibayu ning bage a e sukat ibayu.",
          "Kinuang litratu na ing sabla.",
          "Buo nita.",
          "Bilyan na ding litratu king encrypted drive at tinago ne ing drive.",
          "Minalukluk ya king iniisip na king aduang linggu, nung nu ing bulung minye labing-metung a aliwang interpretasyon nung bakit e na dapat gawan, sabla technically katotohanan, sabla magserbisyo kay Aurelius.",
          "Meg-umpisa yang sumulat anonymous submission king regional paper.",
        ],
      },
      waray: {
        lessonId: "waray_17",
        title: "An mga Papeles han Pamuga",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "An mga dokumento ginbutang ha este nga pako, ha usa nga kabinet nga iya ginbalewaray durante han iya siyahan nga pagbiling tungod kay iginbutang ito ha bungbong basi magin pariho hin bahin han wainscoting. Naabtan niya ito han mahubas an panel usa ka kulop samtang nakasandig hiya hito.",
          "Mayda kwarenta ka tuig nga mga file. Bangin mas damu pa.",
          "An sistematiko nga pagrekord han mga pribado nga impormasyon, mga buruhaton, mga utang, mga kasaysayan ha medisina, mga kapakyasan ha propesyon, para gamiton kontra ha mga institusyon han bungto. Kontra han mga miyembro han konseho nga nagsari nga pabatunon an pamilya. Kontra han mga peryodista nga nag-imbestigar. Kontra ha lokal nga huwes nga nakatalaan na nga mamati hin kaso kontra ha pamilya han 1971 antes tigda nga umatras tikang hito ngan waray gud magsaysay kon kay ano.",
          "An tindog han pamilya Vale ha publiko, an butang nga ginngaranan han ira lola sugad nga amo la nga salapi nga nagpadayon, an butang nga ginkikinahanglan han panurundon nga ira ibalik, gintukod hin bug-os ha abilidad ha pagpahadlok ha mga tawo. Diri pagdayaw. Kahadlok, husto nga igin-aplikar.",
          "Nalingkod hi Selene ha salog han sinirangan nga pako nga an mga file nagsasarang ha iya palibot ngan inabat niya an partikular nga kasukaon ha pagsantop nga nagtrabaho ka para ha pagtukod utro hin usa nga butang nga diri sadang tukuron utro.",
          "Ginletrato niya an ngatanan. Tanan hito. Ginbutang niya an mga letrato ha enkriptodo nga drayb ngan gintago an drayb. Nalingkod hiya upod han iya ginhuhunahuna hin duha ka semana, nga ha tabok hini an paghungit naghatag ha iya hin onse nga magkalainlain nga mga interpretasyon kun kay ano nga diri niya ini angay buhaton, ngatanan hini tinuod ha teknikal, ngatanan hini nagseserbi kan Aurelius.",
          "Nagtikang hiya paghimo hin diri nagpapakilala nga pagsumiter ngadto han rehiyon nga papel.",
        ],
      },
    },
  },
  {
    id: 18,
    title: "Chapter 18",
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
        terms: linkTagalogPracticeQuestions(18, tagalogTermsByChapter[18]),
        translations: [
          "Lumalim ang buwan ng Disyembre at nagsimulang magbago ng anyo ang bahay.",
          "Hindi sa marahas na paraan, o hindi naman laging marahas. Kung minsan, isa lamang itong nakabukas na pinto na natitiyak mong isinara mo. Kung minsan, tila nag-iba ang sukat ng isang silid kaysa sa iyong natatandaan—medyo mas mababa ang kisame, o kaya'y naiba ang posisyon ng bintana kumpara sa mesa. Kung minsan naman, papasok ka sa isang silid at makikitang iba ang mga muwebles, mapapansin mo ang pagkakaiba, kukurap ka, at sa ikalawang tingin ay babalik na ito sa dati nitong ayos.",
          "Paunti-unti at walang kaukulang oras kung magpakita ang mga patay. Tatlong beses na nakita ni Selene ang kanyang lola sa dulo ng pasilyo—nakatayo at nanonood, kasintiyaga ng isang nakapintrang larawan. Tumanggi naman si Lucien na ilarawan ang kanyang mga nakikita. Si Elias, taglay ang prangkang pag-uugali na nagsisimula nang maging katangian niya, ay nagsabing nakikita niya si Aurelius na nakatayo sa kanyang silid sa ilang umaga, sa paanan ng kama. Kung minsan ay nag-uusap pa sila hanggang sa hindi na maging malinaw kung gising ba siya o tulog habang nagaganap ang pag-uusap, at sinabi rin niyang kawili-wili ang kanilang mga talakayan.",
          "Ang tunay na katanungan na walang sinuman sa kanila ang makasagot nang tiyak ay kung alin ang bahay at alin ang kanilang sarili. Kung ang mga silid ba ang nagbabago o ang kanilang paningin sa mga silid ang nag-iiba. Kung ang mga patay ba ay talagang nasa mga pasilyo o nasa loob lamang ng kanilang isipan—at kung may praktikal pa ba itong kahalagahan sa puntong ito.",
          "Maingat na nagtatala si Selene. Pinagtatugma niya ang kanyang mga isinusulat sa mga tala ni Elias, tuwing mapapakiusapan si Elias na ibahagi ang mga ito. Ang mga pagkakatulad ay mas nakatatakot kaysa sa mga pagkakaiba. May mga bagay na pareho nilang nakikita sa magkakatulad na oras, na hindi pa nila napag-uusapan kailanman.",
          "Nakatulong ang mga tala upang mabawasan ang kanyang takot. Batid niyang ang pakiramdam na hindi gaanong natatakot ay hindi nangangahulugang ligtas ka na sa takot, ngunit kinuha na niya ang anumang aliw na maidudulot nito.",
        ],
      },
      kapampangan: {
        lessonId: "kapampangan_18",
        title: "Kapitulu 18",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Ing Disyembre lumalam ya at ing bale inausuk ne ing sarili na.",
          "Aliwa dramatiko, o aliwa parating dramatiko.",
          "Sadyang atin pasbul a makabukas a siguradu kang pinasara mu.",
          "Sadyang ing kuartu aliwa ing sukat na kaysa king tandan mu, ing kisame medyu mababa, ing bintana aliwa ing pwestu kaysa desk.",
          "Sadyang lulual ka king kuartu at akit mung aliwa ing gamit, akilala ing aliwa, kumutap, at akit mung mibalik ya king normal a sukat king kaduang tingik.",
          "Ding mete linitao la king e regular a panaun.",
          "Akit nang Selene ing ima na king dase ning koridor nang tatlong beses, makatindag at mamtabe, pasensyo anting retratu.",
          "I Lucien ayaw nang sabian nnu ing akakit na.",
          "I Elias, king katapatan a meg-umpisa nang katangian na, sinabi na akit ne si Aurelius makatindag king kuartu na karing abak, king lalam ning kama, at minsan makisabi la anggang e na malino nung makatulog ya o makagising king pamisabi, at ing pamisabi interesante ya.",
          "Ing tunay a kutang, ing e da malyaring ipaku, nnu ing bale at nnu ing sarili da.",
          "Nung ding kuartu magbago la o ing pag-isip karing kuartu magbago ya.",
          "Nung ding mete atyu la king koridor o king isip da, at nung ing aliwang ita atin pa bang practical significance.",
          "Si Selene minaliksin notes.",
          "Inikumpara na ding sinulat na karing kay Elias, nung nu si Elias malyari yang payagan na ibagi la.",
          "Ding parehong dase mas nakakatakot la kaysa karing aliwa.",
          "Atin bage a pareho dang akakit, king parehong panaun, a e da pinag-isipan karing metung at metung.",
          "Ding notes sumopan de ban bawas ing takut na.",
          "A-intindihan na a ing pakiramdam a bawas takut aliwa ya pareho king pagiging bawas takut, pero kinwa na pa rin ing comfort.",
        ],
      },
      waray: {
        lessonId: "waray_18",
        title: "An mga Halusinasyon",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Nagtikahilarom an Disyembre ngan nag-areglo utro an balay.",
          "Diri ha drama, o diri pirme ha drama. Usahay usa la ito nga purtahan nga abrido nga sigurado ka nga imo ginsara. Usahay an usa nga kwarto inabat nga iba an proporsyon kay han imo nahinunumdoman, an kisame mas ubos hin gutiay, an bintana iba an posisyon kon ikukumpara ha lamesa. Usahay nasulod ka ha usa nga kwarto ngan nakikita mo nga iba an gamit hito, nakilala mo an kaibahan, nagpipiyong, ngan nakikita mo nga nahibalik ito ha normal nga kahimtang ha ikaduha nga pagkita.",
          "An mga patay nagpapakita ha diri regular nga mga lat-ang. Tulo ka beses nga nakita ni Selene an iya lola ha katapusan han pasilyo, nga natindog ngan nagkikinita, mapailubon sugad hin letrato. Nagdumiri hi Lucien paghulagway han iya nakikita. Hi Elias, nga mayda pagkadirekta nga nagtikang na magpakilala ha iya, nagsiring nga naabtan niya hi Aurelius nga natindog ha iya kwarto hin pira ka aga, ha tiilan han higdaan, ngan usahay nag-iistorya hira tubtob nga diri na klaro kun nakaturog hiya o nagmamata durante han pag-istorya, ngan makaruruyag an mga pag-istorya.",
          "An tinuod nga pakiana, an waray ha ira makakag-angkla, amo an kon ano an balay ngan kon ano an ira kalugaringon. Nagbabag-o man an mga kwarto o nagbabag-o an panlantaw han mga kwarto. Kon an mga patay aada ha mga pasilyo o ha ira hunahuna, ngan kon ito nga kaibahan may-ada nahibibilin nga praktikal nga kahulogan.",
          "Hi Selene nagtitipig hin makuti nga mga nota. Gin-urusa niya an iya mga entrada ha kanan Elias, diin mahimo makombinse hi Elias nga isumat ito. Mas makaharadlok an mga pag-atake kay han mga pagkaiba-iba. May mga butang nga ira pareho nakikita, ha pareho nga mga panahon, nga waray nira pag-istoryahi ha kada tagsa.",
          "An mga nota nakabulig ha iya nga diri na gud mahadlok. Nasabtan niya nga an pag-abat hin diri sugad kahadlok diri pariho ha pagin diri sugad kahadlok, kondi ginkarawat niya an pagliaw bisan pa hito.",
        ],
      },
    },
  },
  {
    id: 19,
    title: "Chapter 19",
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
        terms: linkTagalogPracticeQuestions(19, tagalogTermsByChapter[19]),
        translations: [
          "Marcus Hale ang pangalan ng binata. Dalawampu't tatlong taong gulang siya, at isa siyang pribadong imbestigador na itinalaga ng isang mamamahayag na nakatuklas na ang pinakamalaking trust fund ng pamilyang Vale noong dekada 1980 ay itinayo sa serye ng mga panloloko sa ari-arian (estate fraud).",
          "Dalawampu't limang taong gulang naman si Lucien noon. Pumunta si Marcus Hale sa ari-arian upang kumuha ng larawan ng mga dokumento ngunit nahuli siya habang ginagawa ito. Ang paghaharap sa hilagang hagdanan ay tumagal nang mas mababa sa dalawang minuto at nagtapos sa trahedya. Noong mga unang sandali matapos ang pangyayari, madaling paniwalaan na isa lamang itong aksidente. Matarik ang mga hagdan. Pumasok ang ulan sa bukas na bintana. Nangyayari ang mga ganitong bagay.",
          "Binawi ng mamamahayag ang kuwento. Isinara ang imbestigasyon. Itinalang isang aksidente ang pagkamatay ni Marcus Hale at hindi na muling binuksan ang kaso.",
          "Anim na taon na itong hindi binabanggit ni Lucien sa kanino man. Naging napakahusay niya sa hindi pagpapakita nito, at kalaunan ay naging mahusay sa hindi pag-iisip tungkol dito. Sa paglipas ng panahon, natutunan niyang itabi ang alaalang ito sa isang bahagi ng kanyang sarili na hiwalay sa bahaging humaharap sa pang-araw-araw na buhay.",
          "Natuklasan ito ni Aurelius sa kanyang ikalawang gabi sa bahay.",
          "Hindi nagbabanta ang tinig. Nagpapaalala lamang ito. At taglay ang tila mekanismong ritmo ng isang napakatiyagang uri ng pagpapahirap, ibinabalik siya nito sa hilagang hagdanan—sa eksaktong anggulo ng sandaling iyon, sa tiyak na direksyon ng pagkahulog. Nangyayari ito sa mga oras na hindi niya mahuhulaan at hindi niya mapaghahandaan: sa araw, sa mga pagpupulong, sa hapunan, sa ikatlo ng madaling araw, at sa mismong mga hagdanan kapag hindi niya maiwasang daanan ang mga ito.",
          "Nagsimula na siyang magtanong sa sarili kung karapat-dapat ba siya rito.",
          "Nagsimula na siyang mag-isip kung ang kanyang nararanasan ay isang sumpa, o kung ito ba ay ang kanyang sariling budhi na nakahanap ng mas mabisang paraan upang iparamdam ang sarili nito.",
        ],
      },
      kapampangan: {
        lessonId: "kapampangan_19",
        title: "Kapitulu 19",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Ing lagyu ning anakan si Marcus Hale, at bayntis-tres banwa ya, at metung yang private investigator a inutang ning mamahayag a nakadiscurbe a ing pekamaragull trust fund ning Vale family me-usuk ya, noong 1980s, king pattern ning estate fraud.",
          "I Lucien bayntis-singko ya.",
          "Si Marcus Hale minunta ya king estate ban kumuang litratu karing documentu, akit de gigwanan ini, at ing pamanharap king north staircase minukiat ya kulang aduang minutos at meyari king marok.",
          "Malyari sana, king kaibatan, maniwala a aksidente ya.",
          "Ding tuktukan matas la.",
          "Ing ulan linub ya king bukas a bintana.",
          "Ding bage a ini milyari la.",
          "Ing mamahayag inatras ne ing kuentu.",
          "Ing imbestigasyon mesara ya.",
          "Si Marcus Hale me-rehistro ya bilang aksidente at ing kaso e ne nabuklat.",
          "I Lucien e ne sinabi ini karing ninu man king anambanwa.",
          "Maging magaling ya king e pamagsalita kaniti, at kaibat magaling king e pamag-isip kaniti, at kaibat, king panaun, magaling king pamanaluk keti king dase ning sarili na a makayaliwa king dase a lalakad king aldo-aldo.",
          "Akit ne ni Aurelius king kaduang bengi na king bale.",
          "Ing boses e ya nagbanta.",
          "Sadyang nagpa-alala ya.",
          "King metronomic consistency ning pasensyong uri ning torture, inuli ne king north staircase, king tiyak a geometry ning sandali, king tiyak a anggulo ning mebalag, king panaun a e na a-predict at e na ma-idefend, king aldo, king miting, king hapunan, king alas tres ning abak, king tuktukan mismu neng e na malyaring iwasan ing pamaglakwas keti.",
          "Meg-umpisa yang magkutang nung karapat-dapat ya keti.",
          "Meg-umpisa yang magkutang nung ing pagmaraketan na sumpa ya o konsensya a nakadiscubre mas epektibong delivery mechanism.",
        ],
      },
      waray: {
        lessonId: "waray_19",
        title: "Sekreto ni Lucien",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "An ngaran han bata amo hi Marcus Hale, ngan baynte-tres anyos na hiya, ngan usa hiya nga pribado nga imbestigador nga ginsuholan hin usa nga peryodista nga bisan paano nakadiskobre nga an gidako-i nga pundo hin pagtapod han pamilya Vale gintukod, han dekada 1980, ha usa nga surubdan hin panlimbong ha propyedad.",
          "Baynte-singko anyos na hi Lucien. Hi Marcus Hale kinadto ha katunaan basi magletrato hin mga dokumento, nakit-an nga nagbubuhat hito, ngan an komprontasyon ha norte nga hagdan waray mag-iha hin duha ka minuto ngan natapos hin maraot. Nagin posible na, katapos gud hito, nga tumoo nga aksidente ito. Hagdan an hagdan. Sumulod na an uran pinaagi han abrido nga bintana. Nahitabo ini nga mga butang.",
          "Ginbawi na han peryodista an istorya. Nagsara na an imbestigasyon. Hi Marcus Hale in nakalista nga aksidente ngan waray gud abrihi an kaso.",
          "Waray pa ito igsumat hi Lucien ha bisan hin-o ha sulod hin unom ka tuig. Nagin maupay na gud hiya ha diri pagyakan hini, ngan katapos, maupay na gud ha diri paghunahuna hini, ngan katapos, ha paglabay han panahon, maupay na gud hiya ha pagbiling hini ha usa nga bahin han iya kalugaringon nga bulag tikang han bahin nga nahitatabo ha adlaw-adlaw nga kinabuhi.",
          "Nakit-an ito ni Aurelius ha ikaduha niya nga gab-i ha balay.",
          "Waray magtarhog an tingog. Nagpahinumdom la ito. Upod han metronomic nga pagkamakanunayon hin usa nga partikular nga mapailubon nga porma hin pagpasakit, ini in nagbalik ha iya ngadto ha amihanan nga hagdan, ngadto han espisipiko nga heometriya han takna, ngadto han partikular nga anggulo han pagkahulog, ha mga lat-ang nga diri niya matatag-an ngan diri niya madepensahan kontra, ha adlaw, ha mga katitirok, ha panihapon, ha alas tres han aga diri hiya makatabok ha ira.",
          "Nagtikang na hiya paghunahuna kon takos ba hiya hini.",
          "Nagtikang na hiya paghunahuna kon sumpa ba an iya naieksperyensyahan o konsensya nga nakabiling hin mas epektibo nga paagi ha paghatag.",
        ],
      },
    },
  },
  {
    id: 20,
    title: "Chapter 20",
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
        terms: linkTagalogPracticeQuestions(20, tagalogTermsByChapter[20]),
        translations: [
          "Si Elias ang nakarinig nito mula sa tubig, ngunit si Selene ang nakatagpo ng opisyal na rekord.",
          'Isang lumang archive ng kondado na binuksan sa pamamagitan ng internet sa kalaliman ng gabi ang naglalaman ng isang dokumento ng pagsusuri noong 1967. Binanggit doon ang isang kakaibang bagay sa heolohiya ng lawa: ang pagkakadiskubre, habang nagsusuri para sa patuyuan ng tubig, ng isang tila lumubog na istruktura na naglalaman ng maraming labi ng tao. Itinigil ang pagsusuri at itinago ang dokumento sa ilalim ng isang klasipikasyon na inabot ng tatlong araw si Selene bago naunawaan na ang ibig sabihin pala nito sa batas ay: "hindi para sa pagsusuri ng publiko."',
          "Anim na labi ng tao. Lahat ay nasa iisang lugar, malapit sa piitan (crypt). Lahat sila, ayon sa maiikling tala na isinulat ng pangkat bago sila pinatigil, ay nagpapakita ng mga patunay na sadyang inilagay doon.",
          "Magkakagapos sa pamamagitan ng kadena.",
          "Itinala sa dokumento ang tinatayang panahon kung kailan sila inilagay doon base sa lalim at latak ng lupa. Sumasakop ito sa tatlong siglo. Isa mula noong dekada 1700. Dalawa mula noong dekada 1800. Tatlo mula sa ikadalawampung siglo—ang pinakabago ay tinatayang noong huling bahagi pa ng dekada 1950.",
          "Hindi ito agad sinabi ni Selene kina Elias o Lucien. Inilihim niya muna ito nang dalawang araw habang muling isinasaayos ang kanyang mga nalalaman sa kasaysayan ng pamilya. Ang kasunduan sa kapilya na kusang inialok. Ang mga rekord na nahanap niya tungkol sa mga tagapagmana na bigla na lang nawala sa puno ng pamilya (family tree) na idinahilan na lamang sa migrasyon o karamdaman. Ang ikaapat na sangay na tuluyang binura.",
          "Ang bulong ng lawa na inilarawan ni Elias bilang isang koro—maraming tinig, matiyaga at malalim—ay ang tunog, na pinaniniwalaan niya ngayon, ng mga taong ipinapakain sa bagay na ito sa loob ng tatlong daang taon.",
          "Sinabi niya ito sa kanyang mga pinsan noong gabi ng Miyerkules. Tinanggap ni Elias ang impormasyon nang may matinding kalmado na unti-unti nang pumapalit sa dati niyang pagiging emosyonal. Tinanggap naman ito ni Lucien nang walang anumang ekspresyon sa mukha.",
          '"Ilan pa ang nasa ilalim?" tanong ni Elias.',
          '"Anim ang nahanap sa pagsusuri," ani Selene. "Noong 1967 pa iyon. At pinatigil sila."',
        ],
      },
      kapampangan: {
        lessonId: "kapampangan_20",
        title: "Kapitulu 20",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Si Elias ing nakadingal king danum, pero si Selene ing nakadiscurbe king opisyal a rehistro.",
          "Metung a county archive, me-access remotely, kalibudtan ning bengi, atin surveying document manibat 1967 a nagsabi anomaly king geology ning danum: ing pamanuklas, king drainage survey, ning bage a mukhang submerged structure a atin dakal a tirang pampamilya ning tau.",
          "Ing survey me-terminate ya at ing documentu me-file king designation a kailangan nang Selene tatlong aldo ban i-decode bilang administrative equivalent ning aliwa para king pampublikong pamanala.",
          "Anam a tirang pampamilya.",
          "Sabla king parehong lugar, malapit king crypt.",
          "Sabla papakit, ayon king malating notes a inurat ning surveying team bayu tinuknang, katibayan ning sadyang pamanakip.",
          "Makataik sama-sama.",
          "Ing documentu inurat ne ing probable dates da, me-calculate king lalam at sedimentation, a mamakiat tatlong sigla.",
          "Metung manibat 1700s.",
          "Adua manibat 1800s.",
          "Tatlu manibat twentieth century, ing pekamagbayu me-estimate mga 1950s.",
          "E na sinabi kay Elias o Lucien ini aganaka.",
          "Minalukluk ya keti king aduang aldo, inusuk ne ulit ing a-intindihan na tungkul king amlat ning pamilya.",
          "Ing kontrata king kapilya, offered.",
          "Ding rehistro a akit na karing heirs a sadyang tinuknang mepapadit king family tree, tinakda king emigration o sakit.",
          "Ing pangapat a sanga, me-erase.",
          "Ing bulung ning danum, a inusuk ni Elias bilang choir, dakal a boses, pasensyo at malalam, ing tunog ya, maniwala na ya ngeni, da ring tau a me-pakanin king bage a ini king tatlong daan banwa.",
          "Sinabi na karing pinsan na king Myerkoles a bengi.",
          "Si Elias tinanggap ne ing impormasyon king nakatutok a kalmado a palit king dati nang emosyon.",
          "Si Lucien tinanggap ne a alang panyipag a akit.",
          '"Pilan pa ing atyu king lalam?" nganang Elias.',
          '"Ing survey akit na anam," nganang Selene.',
          '"Ita 1967 mu.',
          'Tinuknang la."',
        ],
      },
      waray: {
        lessonId: "waray_20",
        title: "An tingog ha Ilarom han Danaw",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Hi Elias an nakabati hito tikang ha tubig, kondi hi Selene an nakabiling han opisyal nga rekord.",
          "Usa nga archive han condado, nga ma-access ha harayo, ha gab-i, mayda dokumento hin pagsurbey tikang han 1967 nga nag-unabi hin anomaliya ha heolohiya han danaw: an pagdiskobre, dida hin usa nga surbey han pag-awas, han baga hin nalunod nga istraktura nga mayda damo nga mga patay nga lawas hin tawo. Gintapos na an surbey ngan an dokumento in iginsalawad ilarum hin usa nga pagtawag nga kinahanglan ni Selene hin tulo ka adlaw para ma-decode komo katugbang han administratibo nga diri para han pagrepaso han publiko.",
          "Unom an nahibilin. Tanan ha pariho nga lugar, hirani ha kripta. An ngatanan nga nagpapakita, sumala ha halipot nga mga nota nga iginrekord han grupo nga nagsurbey antes umundang, ebidensya han tinuyo nga pagbutang.",
          "Ginkadenahan nga magkaupod.",
          "Iginlista han dokumento an ira posible nga mga petsa, nga ginkuwenta tikang ha kahilarom ngan pag-ubos, sugad nga nag-abot hin tulo ka siglo. Usa tikang han dekada 1700. Duha tikang han dekada 1800. Tulo tikang han ika-beinte nga siglo, an pinakabag-o nga ginbanabana nga urhi na han dekada 1950.",
          "Waray dayon niya isumat ini kanda Elias o Lucien. Nalingkod hiya upod hito ha sulod hin duha ka adlaw, gin-aayos utro an iya nasasabtan mahitungod han kasaysayan han pamilya. An kontrata ha kapilya, iginhalad. An mga rekord nga iya hin-agian han mga manurunod nga waray na la magpakita ha puno han pamilya, nga iginpapahinungod ha pagbalhin o sakit. An ikaupat nga sanga, ginpara.",
          "An paghungit han danaw, nga iginhulagway ni Elias nga usa nga koro, damo nga mga tingog, mapailubon ngan hilarom, amo an tunog, iya yana gintotoohan, han mga tawo nga ginpakaon hini nga butang ha tabok hin tulo ka gatos ka tuig.",
          "Ginsumatan niya an iya mga umangkon han Miyerkules han kulop. Nakarawat ni Elias an impormasyon nga may-ada nakapokus nga kalmado nga nagtikadamu nga nagsaliwan han iya emosyonalismo hadto. Ginkarawat ito ni Lucien nga waray gud nakikita nga ekspresyon.",
          '"Pira pa an aada ha ubos?" Sugad ni Elias.',
          '"An surbey in nakabiling hin unom," sering ni Selene. "1967 la adto. Naundang hira."',
        ],
      },
    },
  },
  {
    id: 21,
    title: "Chapter 21",
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
        terms: linkTagalogPracticeQuestions(21, tagalogTermsByChapter[21]),
        translations: [
          "Carver ang pangalan ng mamamahayag, at dalawang taon siyang nagtrabaho sa pag-imbestiga sa pamilyang Vale bago siya nagkaroon ng sapat na ebidensya upang maglathala.",
          "Lumabas ang sulatin sa loob ng apat na araw sa lokal na pahayagan, at sabay na kinuha ng dalawang pambansang outlet na nagbigay dito ng lawak na hindi na kayang pigilan ng pamilya. Ito ay komprehensibo, may mga pinagkunan, at halos banayad sa paglalahad ng mga konklusyon nito: ang mga blackmail file, ang panloloko sa ari-arian, ang pakikialam sa politika, at ang pagkaipon ng mga ugnayan sa mga institusyon na itinayo sa pananakot sa halip na sa legal na paraan. Ang prosa ni Carver ay sukat at tiyak, at hinayaan niya ang mga katotohanan na gumawa ng trabaho na hindi kayang gawin ng labis na drama.",
          "Ang tugon ng pamilya ay pinamahalaan ni Lucien sa loob ng pitumpu't dalawang oras na walang tulog. Nagpaunlak sila sa isang panayam. Nagbigay sila ng mga donasyon—malalaki at hayag sa publiko. Nagpalabas sila ng pahayag ng pagsisisi na isinulat ni Selene, binago ni Elias, at inaprubahan ni Lucien nang may mga pagwawasto. Kumuha sila ng isang kompanya para sa pamamahala ng krisis (crisis management firm). Magkakasama silang humarap sa tatlong pampublikong kaganapan taglay ang sanay na pagkakaisa ng mga taong nagkasundo sa iisang kuwento.",
          "Ngunit lahat ay nabigo.",
          "Hindi dahil mali ang naging tugon—sa tingin ni Selene ay mabuti naman ang naging tugon kung pagbabasehan ang propesyonal na aspeto. Nabigo ito dahil ang publiko ay wala nang interes sa rehabilitasyon. Ang naipong bigat ng mga nakaraang buwan—ang nabigong hapunan, ang mapaminsalang pagdiriwang, ang mga effigy, ang mga protesta, at ang pangkalahatang pakiramdam na ang pamilya ay gumagalaw bilang isang sentro ng kamalasan—ay lumampas na sa hangganan. Hindi na tinitimbang ng mga tao ang ebidensya. Nakarating na sila sa isang hatol.",
          "Nagdaos ang bayan ng isang pampublikong pagpupulong. Hindi isinama ang pamilyang Vale. Ilang miyembro ng konseho ang dumalo na hindi pa kailanman dumalo sa mga pampublikong pagpupulong sa anumang paksa noon.",
          "Sa loob ng ari-arian, ang mga bulong ay naging napakadalas na anupa't ang katahimikan ay tila presensya ng isang bagay, hindi ang kawalan nito. Lahat sila ay huminto na sa pagpansin dito. Ito ay naging bahagi na lamang ng panahon, ang natural na tunog ng kanilang mga buhay.",
        ],
      },
      kapampangan: {
        lessonId: "kapampangan_21",
        title: "Kapitulu 21",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Ing lagyu ning mamahayag si Carver, at nagtrabaho ya king Vale family king aduang banwa bayu atin sapat ban i-publish.",
          "Ing kuentu linual ya king apat a aldo king regional paper, sabayang kinwa ning aduang national outlets a minye sakop a e kaya pamanagatan ning pamilya.",
          "Buo ya, atin source, at halos pino king pamanaluk ning konklusyon na, ding blackmail files, ing estate fraud, ing political interference, ing pamanipon ning institusyonal a relasyon a me-usuk king leverage kaysa legitimacy.",
          "Ing pamanulat ni Carver me-sukat at tiyak at piburen na ding katotohanan gawan ing trabaho a ing melodrama gawan na sana a mas e epektibo.",
          "Ing pakibatu ning pamilya inusuk ni Lucien king pitung-pulu't aduang oras a alang tulog.",
          "Minye lang interview.",
          "Minye lang donation, maragul at pampubliko.",
          "Inutang da ing statement ning pagsisi a inulat ni Selene at in-modify ni Elias at in-approve ni Lucien a atin pagbago.",
          "Inutang da ing crisis management firm.",
          "Linitao la sama-sama king tatlong pampublikong event king me-sanay a pagkasundo da ring tau a nagkasundo king metung a kuentu.",
          "Ing sabla me-backfire.",
          "Aliwa uling ing pakibatu mali ya, isip ni Selene ing pakibatu magaling ya, professionally speaking.",
          "Me-backfire ya uling ing publiko e na interesado king rehabilitasyon.",
          "Ing me-ipon a pabalat ning minunang bulan, ing failed dinner, ing disastrous festival, ding effigies, ding protest, ing pangkalahatang pakiramdam ning pamilyang nagtrabaho bilang zone ning concentrated ill fortune, minasikwas ya king threshold.",
          "Ding tau e na tinimbang ing katibayan.",
          "Makarandaman na silang hatol.",
          "Ing balen atin pampublikong miting.",
          "Ing Vale family e me-imbita.",
          "Pilang council members linub la a e pa kailanman linub pampublikong miting king kahit nukarin a bage.",
          "King estate, ding bulung meging constante la a ing tahimik naramdam anting pamanatili ning bage, aliwa ing kawalan na.",
          "Sabla sila tinuknang mag-comment keti.",
          "Sadyang panahon na ya ngeni, ing acoustics ning bye da.",
        ],
      },
      waray: {
        lessonId: "waray_21",
        title: "An Pagbista ha Publiko",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Carver an ngaran han peryodista, ngan duha ka tuig na hiya nga nagtatrabaho ha pamilya Vale antes hiya magkaada hin igo nga maipublikar.",
          "An piraso in nagdalagan hin upat ka adlaw ha rehiyonal nga papel, nga dungan nga ginkuha hin duha nga nasudnon nga mga tindahan nga naghatag hini hin pag-abot nga diri mapupugngan han pamilya. Komprehensibo ini, gintikangan, ngan haros malumo ha iya pagpresenta han iya konklusyon, an mga file han pan-ipit, an panlimbong ha panag-iya, an politikal nga panginginlabot, an pagtirok han mga relasyon ha institusyon nga gintukod ha leverage imbes nga lehitimo. Ginsukol ngan eksakto an prosa ni Carver ngan ginpabay-an niya an mga kamatuoran nga magbuhat han trabaho nga diri unta epektibo an pagbuhat han melodrama.",
          "An baton han pamilya in gin-orkestra ni Lucien ha sakob hin kapitoan kag dos ka oras nga waray katurog. Naghatag hira hin interbyu. Naghatag hira hin mga donasyon, dagku ngan publiko. Nagpagawas hira hin pahayag hin pagbasol nga iginsurat ni Selene ngan ginbag-o ni Elias ngan gin-aprobahan ni Lucien nga may mga pagbag-o. Nagkuha hira hin kompanya nga nagdudumara hin krisis. Magkaupod hira nga nagpakita ha tulo nga pampubliko nga mga panhitabo nga mayda ginpraktis nga pakig-usa han mga tawo nga nagkasarabutan hin usa nga istorya.",
          "Nagbaliktad an ngatanan.",
          "Diri tungod kay sayop an baton, nahunahuna ni Selene nga maopay gud an baton, ha propesyonal nga pagyakan. Backfired ini tungod kay diri na interesado an publiko ha rehabilitasyon. An natirok nga kabug-aton han naglabay nga mga bulan, an pakyas nga panihapon, an makaharadlok nga piyesta, an mga ladawan, an mga protesta, an pankabug-osan nga pag-abat han usa nga pamilya nga nagios sugad nga sona han konsentrado nga maraot nga kapalaran, in nakatabok na hin pipira nga tubtoban. Diri na gintitimbang han mga tawo an ebidensya. Nakaabot na hira hin desisyon.",
          "Nagdumara hin katitirok publiko an bungto. Waray imbitara an pamilya Vale. Pira nga mga miyembro han konseho an tinambong nga waray pa gud tumambong hadto hin mga katitirok publiko mahitungod hin bisan ano nga topiko.",
          "Ha katunaan, nagin pirme na an mga huring-huring salit an kahilom baga hin may-ada presensya, diri kawaray hito. Hira ngatanan inundang na ha pagkomento hito. Panahon la adto yana, an akustika han ira kinabuhi.",
        ],
      },
    },
  },
  {
    id: 22,
    title: "Chapter 22",
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
        terms: linkTagalogPracticeQuestions(22, tagalogTermsByChapter[22]),
        translations: [
          'Ang talaarawan (journal) na nagsasabi ng katotohanan tungkol kay Aurelius ay wala sa loob ng bahay. Ito ay nasa rehistro ng simbahan, sa isang bahaging may markang "pastoral correspondence, private" na pinahintulutan ng kura na suriin ni Selene bilang bahagi ng iniisip nitong makasaysayang pananaliksik. Ang liham ay nakatugon sa isang',
          "klerigo na naglingkod sa parokya noong panahon ni Aurelius, mula sa isang miyembro ng pamilya na ang relasyon sa sambahayan ay itinala bilang kalihim ng Panginoon.",
          "Nasaksihan ng kalihim ang unang pagtatayo. Hindi ng isang sumpa, kundi ng isang sistema.",
          "Naniniwala si Lord Aurelius Vale, taglay ang paninindigan ng isang taong nagtayo ng imperyo sa pamamagitan ng estratehikong takot, na ang pag-ibig ay hindi sapat bilang mekanismo ng katapatan sa pamilya. Ang pag-ibig ay may mga kondisyon, emosyonal, at hindi maaasahan. Ang takot ay istruktural. Ang isang pamilya na natatakot sa sarili nitong pagkasira, na nakakarinig sa mga dingding ng mga tinig ng mga nabigong ninuno, na pamilyar sa malalim na sikolohikal na presyur na ang paglihis sa mga prinsipyo ng pamilya ay nangangahulugan ng matinding kahihinatnan—ang gayong pamilya ay mananatiling buo sa bawat henerasyon sa paraang hindi kailanman magagawa ng pagmamahal.",
          "Hindi siya sinumpa. Siya ang nagdisenyo ng sumpa. Itinuro niya ito sa kanyang mga anak, itinuro naman ito ng kanyang mga anak sa kanilang naging mga anak, at ang pagtuturong iyon ay naging napakatindi at matagal na pinagsanayan kaya lumampas ito sa simpleng aral at naging isang bagay na namamana, isang bagay na nakatatak na sa emosyonal na katangian ng lahing Vale.",
          "Naniniwala siyang may ginagawa siyang mabuti.",
          "Naniwala siya rito nang lubusan kaya ang mismong paniniwalang iyon ay naging bahagi na rin ng ipinamana sa mga sumunod na lahi.",
          "Dalawang beses na binasa ni Selene ang liham at pagkatapos ay naupo muna sa loob ng simbahan nang ilang sandali, iniisip kung ano ang ibig sabihin ng labis na pagmamahal sa isang bagay na anupa't kaya mo itong gawing kakila-kilabot upang maprotektahan lamang ito.",
        ],
      },
      kapampangan: {
        lessonId: "kapampangan_22",
        title: "Kapitulu 22",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Ing journal a minyabi king katotohanan tungkul kay Aurelius aliwa ya atyu king bale.",
          "Atyu ya king rehistro ning simbahan, king dase a me-labelang *pastoral correspondence, private* a pinayagan ning bikaryo kay Selene ban pamasang dase ning a-intindihan na anting historical research. Ing sulat me-ipapadala ya king pari a nagsilbi king parokya king panaun ni Aurelius, ibat king kasapi ning pamilya a ing relasyon na king bale inulat da anting kalihim ning Lord.",
          "Ing kalihim mekataksi ya king mumunang pamanusuk. Aliwa ning sumpa, ning sistema.",
          "Si Lord Aurelius Vale maniwala ya, king paniguro ning taung megbangon empire sa pamamagitan ning strategic fear, a ing sinta e sapat anting mekanismo ning katapatan ning pamilya. Ing sinta nakadepende ya, emosyonal, e mapagkakatiwalaan. Ing takut struktural ya. Ing pamilyang tatakut king sariling pamagsira, a makaramdam karing pader karing boses da ring mekulang a ninuno, a balu sa pamamagitan ning malalam a atmospheric pressure a ing pamanalindang karing halagahan ning pamilya katumbas ya ning psychological consequence, ing anting pamilya manatili yang makasundo karing henerasyon king paraan a e kailanman apalual ning sinta.",
          "E ya me-sumpa. In-disenyo ne ing sumpa. Tinuru ne ini karing anak na, ding anak na tinuru de karing anak da, at ing pamagtuturo meging maragul at malawat nang me-sanay a minasikwas ya king turo at meging bage a mana, bage a nakakodigo king tiyak a emosyonal a gramatika ning daya ning Vale.",
          "Maniwala ya a magtrabaho ya king bage a masanting.",
          "Maniwala ya buo a ing paniwalang ita mismu meging dase ne ning mipasa king lalam.",
          "Binasa nang Selene ing sulat aduang beses at minalukluk ya king simbahan king sandali, mag-isip tungkul king buri sabian ning pamanlupig king bage a sobra-sobra a gawan mung takutan ban protektahan ini.",
        ],
      },
      waray: {
        lessonId: "waray_22",
        title: "An Kamatuoran han Kaapoy-apoyan",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Waray ha balay an journal nga nagsusumat han kamatuoran mahitungod kan Aurelius.",
          "Didto ha rehistro han singbahan, ha seksyon nga may marka nga surat han mga magbarantay, pribado nga gintugotan han vikaryo hi Selene nga usisahon sugad nga bahin han iya nasasabtan sugad nga pagsaliksik ha kasaysayan. An surat in ginpakadto ha usa nga klerigo nga nagserbe han parokya han panahon ni Aurelius, tikang hin usa nga membro han pamilya nga an relasyon han panimalay in nahisurat nga sekretaryo han Ginoo.",
          "Nakita han sekretaryo an orihinal nga pagtukod. Diri hin sumpa, hin sistema.",
          "Hi Ginoo Aurelius Vale natoo hadto, nga may kombiksyon hin usa nga tawo nga nagtukod hin imperyo pinaagi hin estratehiko nga kahadlok, nga an gugma in diri igo komo usa nga mekanismo hin pagkamaunungon ha pamilya. An gugma diri-nalalaoman, emosyonal, diri masasarigan. An kahadlok may-ada istraktura. Usa nga pamilya nga nahadlok han iya kalugaringon nga pagkabungkag, nga nakabati ha mga bungbong han mga tingog han nasusubo nga mga kaapoy-apoyan, nga maaram pinaagi hin pipira nga hilarom nga pag-ipit han palibot nga an pagsimang tikang ha mga prinsipyo han pamilya nangangahulogan hin sikolohikal nga resulta, an sugad nga pamilya magpapabilin nga nagkakaurosa ha bug-os nga mga henerasyon ha paagi nga diri gud maibubunga han gugma.",
          "Waray pa hiya sumpaa. Hiya an nagdisenyo han sumpa. Gintutdo niya ito ha iya mga anak, igintutdo ito han iya mga anak ha ira, ngan an katutdoan nagin bug-os hinduro ngan maiha na nga ginbubuhat salit nalabaw ito ha pagtutdo ngan nagin usa nga butang nga napanunod, usa nga butang nga ginkodigo ha espisipiko nga emosyonal nga gramatika han tulin han dugo han Vale.",
          "Natoo hiya hadto nga may ginbubuhat hiya nga maopay.",
          "Bug-os gud hiya nga natoo hito salit an gintotoohan mismo nagin bahin na han iginpasa.",
          "Ginbasa ni Selene an surat hin duha ka beses ngan katapos linmingkod hin madaliay ha singbahan, naghuhunahuna kon ano an kahulogan han paghigugma hinduro ha usa nga butang salit ginhihimo mo nga makaharadlok an pagpanalipod hito.",
        ],
      },
    },
  },
  {
    id: 23,
    title: "Chapter 23",
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
        terms: linkTagalogPracticeQuestions(23, tagalogTermsByChapter[23]),
        translations: [
          "Ipinadala niya ang mga file noong gabi ng Huwebes gamit ang isang hiniram na kompyuter sa pamamagitan ng isang anonymizing service. Ang mga rekord ng blackmail. Ang mga dokumento ng panloloko sa ari-arian. Ang pagsusuri sa lawa. Ang lahat ng kanyang natagpuan sa loob ng apat na buwan sa bahay na ito.",
          "Hindi niya sinabi sa kanyang sarili na may ginagawa siyang kabayanihan. Matagal na siya sa politika upang maunawaan ang masalimuot na takbo ng isang desisyon—ang halo ng prinsipyo, pansariling interes, pagkapagod, at ang simpleng pagnanais na matapos na ang lahat, anuman ang maging hantungan nito. Ipinadala niya ang mga file dahil nararapat lamang na maipadala ang mga ito, dahil hindi na niya kayang makibahagi sa pagtatago ng mga ito, at dahil ang isang bahagi ng kanyang sarili ay pagod na rin sa bahay na ito, sa pamilyang ito, at sa kompetisyong ito, at nais na niyang wakasan ito sa pamamagitan ng paggawa sa premyo na walang halaga.",
          "Nasa loob siya ng kanyang silid nang matagpuan siya ni Lucien. Nakita nito ang kumpirmasyon ng pagpapadala sa nakabahaging archive computer, na hindi naisipang burahin ni Selene.",
          "Ang pisikal na karahasan ay mabilis at kontrolado, at mas lalong naging malala dahil sa pagiging kontrolado nito; ang malamig na kahusayan nito ay nagpapahiwatig na matagal na nitong pinipigilan ang udyok na ito at sa wakas ay nakagawa na ng kalkulasyon tungkol sa kapalit. Nasa sahig na siya nang dumating si Elias.",
          "Hindi malaki si Elias, at hindi rin ito agresibo, at dumaan ito sa ilang linggong estado na palihim nilang tinatasa ni Lucien bilang mahina ang pag-iisip. Gayunman, sa sandaling iyon, siya ay ganap na gising at tiyak sa paraan ng mga tao kapag nasa gitna ng totoong emergency, kung kailan ang lahat ng kalituhan ay tuluyang napapawi.",
          "Inilagay niya ang sarili sa pagitan ng dalawa. Hindi siya nagsalita nang malakas.",
          "Tiningnan ni Lucien silang dalawa—si Selene na nasa sahig, at si Elias na nakatayo sa pagitan nilang dalawa—at ang ekspresyon sa mukha nito ay kakila-kilabot tignan. Hindi galit. Isang bagay na higit pa sa galit. Umalis ito sa silid.",
          "Tinulungan ni Elias si Selene na tumayo. Walang nagsalita sa kanila sa loob ng mahabang sandali.",
          '"Alam kong malalaman niya," ani Selene.',
          '"Alam ko," sagot ni Elias.',
          '"Ipinadala ko pa rin ang mga ito."',
          '"Alam ko," muling sabi nito, at may kung ano sa kanyang tinig na nagpatitig kay Selene sa kanya—isang bagay na hindi eksaktong sarili nitong boses, o boses niya na may nakapatong sa ilalim nito. Tiningnan niya ang mukha nito para sa mga palatandaan ng pagsapi ngunit hindi siya makasiguro sa kanyang nakikita.',
          '"Ayos ka lang ba?" tanong niya.',
          '"Hindi ko alam," tapat na sagot nito. "Ikaw ba?"',
        ],
      },
      kapampangan: {
        lessonId: "kapampangan_23",
        title: "Kapitulu 23",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "In-padala na ding file king Huwebes a bengi, ibat king inhiram a kompyuter, sa pamamagitan ning anonymizing service. Deng rekord ning blackmail. Ing dokumentu ning estate fraud. Ing survey ning danum. Sabla naining apulot na king apat a bulan keti king bale.",
          "E na sinabi king sarili na na magpapakabayani ya. Matagal na ya king pulitika para akilala ing kumpletok ekolohiya ning desisyon, ing pamisalamu ning prinsipi at sariling kapakanan at kapagal at ing payapang pakiramdam a buri ne nang mayari, maski nokarin ya mabili. In-padala na ding file uling sukat dang ipadala, at uling e na malyaring makisali pa king pamagtago da, at uling atin dake na rin ning sarili na a mibugnot na keti king bale at karing pamilya at karing kompetensya at buri ne nang tapusan sa pamamagitan ning gawan ing premyu na e na sapat gagamitan.",
          "Atyu ya king kuartu na anyang apulot ne ni Lucien. Akit ne ing kumpirmasyon ning paman-padala king pangkalahatang archive computer, a e na inisip i-clear.",
          "Ing pamagkontra king katawan matalik ya at makontrol at lalon marok uling makontrol, ing malam a bisa na, ing pakiramdam a pinuwalan ne ing pagnasa a ini king malambat a panaun at king wakas migdesisyon na king gastos. Atyu na king lantai anyang sinubling datang i Elias.",
          "Si Elias e maragul, at e ya marahas, at makalabas ne king pilang simbu king kabilyan a si iya at si Lucien pigtutuliran dang psychologically compromised. Atin ya rin, king sandali a ita, malinaw a panimanman at tiyak king paraan a ding tau magiging malinaw king tunay a emergency, sabla lumalabas.",
          "Inulit ne ing sarili na karing pamilya. E ya kumuliat.",
          "Liningap ne ni Lucien ing adua, si Selene king lantai, si Elias makatindag king asbuk na at siping na, at ing hitsura ning mukha na marok a akit. Aliwa galit. Mas marok pa king galit. Meko ya king kuartu.",
          "In-alwan ne ni Elias si Selene. Alang sinabi karela king malawat a panaun.",
          '"Balu ku a akit na," ngana. "Balu ku," nganang Elias. "In-padala ko pa rin." "Balu ku," ngana ulit, at atin bage king boses na a pinag-isip ne kaya, bage a aliwa king boses na, o boses na at atin nakalutang king lalam na, at liningap ne ing mukha na para karing senyas ning possession at e siguradung akakit na. "Maayos ka ba?" ngana. "E ku balu," nganang tapat. "Ika ba?"',
        ],
      },
      waray: {
        lessonId: "waray_23",
        title: "Gintraydor Hira ni Selene",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Ginpadara niya an mga file han Huwebes han kulop, tikang ha ginhuram nga kompyuter, pinaagi hin serbisyo nga diri nagpapakilala. An mga rekord han pan-ipit. An dokumento han panlimbong ha panag-iya. An pagsurbey han danaw. An ngatanan nga iya hin-agian ha sulod hin upat ka bulan hini nga balay.",
          "Waray niya sidnga an iya kalugaringon nga may ginbubuhat hiya nga bayanihan. Maiha na hiya ha politika para makilala an komplikado nga ekolohiya hin usa nga desisyon, an pagsagol han prinsipyo ngan kalugaringon nga interes ngan kakapoy ngan an simple nga hingyap nga matapos na ini, bisan pa man ini matapos. Ginpadara niya an mga file tungod kay angay ini ipadara, ngan tungod kay diri na hiya makakaapi han ira pagpugong, ngan tungod kay mayda parte ha iya nga masakit liwat hini nga balay ngan hini nga pamilya ngan hini nga kompetisyon ngan karuyag niya tapuson ini pinaagi hin paghimo han premyo nga diri angay magkaada.",
          "Nakadto hiya ha iya kwarto han naabtan hiya ni Lucien. Nakita niya an kumpirmasyon han pagpadara ha kompyuter han gin-aambit nga arkibo, nga waray niya hunahunaa nga malimpyohan.",
          "An pisikal nga kamadarahog halipot ngan kontrolado ngan haros mas maraot para han pagkontrol, an matugnaw nga kahusayan hini, an pag-abat nga maiha na gud niya nga gindudumara ini nga pag-aghat ngan ha kataposan naghimo hin karkulasyon mahitungod han gastos. Nakada na hiya ha salog han pag-abot ni Elias.",
          "Diri dako hi Elias, ngan diri hiya agresibo, ngan nag-ukoy hiya hin pira ka semana ha estado nga iya ngan ni Lucien pribado nga ginkategoriya nga sikolohikal nga kompromiso. Hiya liwat, hito nga takna, bug-os nga klaro-an-mata ngan espisipiko ha paagi nga an mga tawo nagigin ha tinuod nga mga emerhensya, an ngatanan nga kawaray-klaro nasunog.",
          "Ginbutang niya an iya kalugaringon ha butnga nira. Waray hiya magyakan hin makusog.",
          "Ginkita hira ni Lucien nga duha, hi Selene ha salog, hi Elias nga natindog ha butnga niya ngan niya, ngan makaharadlok pagkit-on an ekspresyon han iya nawong. Diri kasina. Usa nga butang nga naglabay ha kasina. Gumawas hiya ha kwarto.",
          "Ginbuligan ni Elias hi Selene pagbangon. Maiha nga waray hira magyakan hin bisan ano.",
          '"Maaram ako nga mahibabaroan niya," siring niya.',
          '"Maaram ako," siring ni Elias.',
          '"Ginpadara ko hira bisan pa man."',
          '"Maaram ako," siring niya utro, ngan mayda ha iya tingog nga nagpakita ha iya, usa nga butang nga diri gud iya tingog, o amo an iya tingog ngan usa nga butang nga nakapatong ha ilarom hini, ngan ginkita niya an iya nawong para hin mga tigaman hin pag-angkon ngan diri hiya makakasiguro han iya nakikita.',
          '"Okay ka ba?" siring niya.',
          '"Diri ako maaram," tangkod nga siring niya. "Ikaw ba?"',
        ],
      },
    },
  },
  {
    id: 24,
    title: "Chapter 24",
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
        terms: linkTagalogPracticeQuestions(24, tagalogTermsByChapter[24]),
        translations: [
          "Matapos sirain ng paglalantad ni Selene ang huling natitirang dangal ng pamilya sa publiko, ang mga bulong ay hindi na nanatiling paisa-isa.",
          "Mahirap itong ilarawan nang tumpak, at magkakaiba ang naging paglalarawan nilang tatlo, ngunit ang napagkasunduan ay tila ganito: si Aurelius ay isang solista noon. Ang dumating ngayon ay hindi isang koro sa maayos na kahulugan kundi isang malaking pangkat ng mga tao—mga nagpapatong-patong na tinig, nag-aagawang mga indayog, at ang tiyak na magkakapatong na ingay ng maraming presensya na sabay-sabay na nagsasalita sa isang espasyong hindi naman idinisenyo para sa kanila. Tila ba ang naipong transmisyon ng bawat henerasyon ay sabay-sabay na pinagana.",
          "Mukhang may buhay ang bahay. Hindi sa matalinghagang paraan. Ang mga dingding ay may kalidad ng patuloy na panginginig na mararamdaman mo sa iyong palad kung ilalapat mo ito nang patag sa plaster, katulad ng panginginig ng tumatakbong makina na nararamdaman mo sa sahig ng kotse.",
          "Walang sinuman sa kanila ang nakatulog.",
          "Nagpalakad-lakad si Lucien. Nagtrabaho si Selene. Naupo naman si Elias sa pasilyo ng mga larawan at nakinig.",
          '"Lumalala ba ito?" minsan ay tanong ni Lucien sa kanya, sa loob ng kusina noong ikaapat ng madaling araw.',
          '"Lalong kumakapal," ani Selene. "Na hindi naman pareho doon. Bagaman maaari itong humantong sa parehong bagay."',
          "Nakatayo ito sa bintana, nakatingin sa madilim na bakuran, kung saan ang lawa ay bahagyang kumikinang sa likod ng hanay ng mga puno.",
          '"Nagawa ko namang kumilos dati," sabi nito, sa tinig na nagpipilit na maging kaswal ngunit hindi lubusang nagtatagumpay. "Kahit may mga bulong. Nagagawa ko itong ihiwalay. Nagagawa ko—" Huminto ito. "Hindi ko na alam kung saan nagtatapos ang tinig at kung saan ako nagsisimula."',
          "Tiningnan ni Selene ang kanyang pinsan sa liwanag ng kusina at nakita ang isang bagay na ilang linggo na niyang tinatanggihang makita: natatakot ito. Hindi sa estratehikong paraan, hindi rin para magpaawa. Natatakot talaga. Sa paraang natatakot ka kapag ang istruktura ng iyong pagkakakilanlan ay nagsisimula nang mawalan ng mga pader na sumusuporta rito.",
          "Ipinatong niya ang kanyang kamay sa braso nito.",
          "Tiningnan ito ni Lucien. Hindi ito lumayo.",
        ],
      },
      kapampangan: {
        lessonId: "kapampangan_24",
        title: "Kapitulu 24",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Kaibat ning paman-leak ni Selene a sinira king huling pampublikong pangasikat ning pamilya, ding bulung tinuknang la nang maging indibidwal.",
          "Marawak a ilarawan king tiyak, at ding tatlu in-larawan de king aliwang paraan, pero ing kasunduan parang: si Aurelius solista ya. Ing dating ngeni aliwa chorus king kahit nokarin a harmonious kundi lipun, makasalamu a boses, maglaban a cadence, ing tiyak a nakalutang a ingay ning dakal a presensya a sablang makasabi king sablang sandali king espasyu a e para karing pamilya. Anting ing balang henerasyon a ipinasa magsabay-sabay.",
          "Ing bale meging bye ya. Aliwa metaphor. Ding pader atin kualidad ning vibration a akit mu king palad mu neng ipidpit mu ya king plaster, ing paraan a akit mu ing motor lalakad king chassis ning sasakyan.",
          "Alang makatulog.",
          "Si Lucien lalakad. Si Selene magobra. Si Elias minalukluk king portrait corridor at kiniramdam.",
          '"Lalon marok ba?" kutang ni Lucien kaya, king kusina king alas kuartu ning abak. "Lalon makakapal ya," ngana. "Aba aliwa ya pareho. Maski katumbas mu ning pareho." Makatindag ya king bintana mamagkit king madulum a labuad, ing danum makislap king gilid ning punung linya. "Dating malyari kung gumawa," ngana, king boses a sumubangkali a maging matter-of-fact at e makapasa. "Maski karing bulung. Malyari kung i-compartmentalize. Malyari kung—" Tinuknang ya. "E ku ne balu nung nokarin mag-umpisa ing boses at nokarin ku mag-umpisa ngeni." Liningap nang Selene ing pinsan na king silaw ning kusina at akit ne ing bage a ayaw nang akitin king pilang simbu: takutan ya. Aliwa strategy, aliwa performance. Takutan ya. King paraan a tatakut ka neng ing architecture ning identity mu mag-umpisa nang mawalan load-bearing walls. In-aplak ne ing gamat na king takde na. Liningap ne. E tinulid.',
        ],
      },
      waray: {
        lessonId: "waray_24",
        title: "An Koro han Huring",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Kahuman han pagtagas ni Selene nga nabungkag han urhi nga pagtindog han pamilya ha publiko, an mga huring-huring in umundang nga magin indibidwal.",
          "Makuri ito ighulagway hin eksakto, ngan iba-iba an ira paghulagway hito nga tulo, kondi an ginkasarabutan sugad hini: Hi Aurelius nagin soloista hadto. An inabot yana diri koro ha bisan ano nga nagkakauruyon nga kahulogan kondi usa nga kadam-an, nagsasapaw nga mga tingog, nagkukumpetensya nga mga kadensa, an espisipiko nga mga layer nga aringasa han damu nga presensya nga ngatanan nagyayakan ha pariho nga panahon ha espasyo nga diri gindisenyo para ha ira. Sugad hin dungan nga gin-aktibo an natirok nga pagpasa han tagsa nga henerasyon.",
          "Buhi an tunog han balay. Diri ha metapora nga paagi. An mga bungbong may-ada kalidad han nagpapadayon nga pag-uyog nga maabat mo pinaagi han imo palad kon imo ito ipipirit hin patag ha yestada, pariho han imo inaabat nga motor nga naagi ha tsasis han awto.",
          "Waray ha ira nakaturog.",
          "Naglakat hi Lucien. Nagtrabaho hi Selene. Nalingkod hi Elias ha pasilyo han mga letrato ngan namamati.",
          '"Nagtitikaraot ba?" pakiana ni Lucien ha iya hin makausa, ha kusina alas kwatro han aga.',
          '"Nagtitikadamo ini," sering niya. "Nga diri pareho nga butang. Bisan kun bangin pareho an kantidad."',
          "Natindog hiya ha bintana nga nagkikinita ha masirom nga nataran, an danaw nagkikinang hin maluya ha luyo han linya han mga kahoy.",
          '"Nakakag-function ako hadto," sering niya, ha tingog nga nag-aatentar nga magin butang-hin-kamatuoran ngan diri gud naglalampos. "Bisan ha mga huring-huring. Pwede ako mag-kompartment. Pwede ko—" Humunong hiya. "Diri ako maaram kun diin natapos an tingog ngan kun diin ako nagtitikang."',
          "Ginkita ni Selene an iya umangkon ha suga han kusina ngan may nakita hiya nga pira na ka semana nga iya gindudumiri nga makita: nahadlok hiya. Diri ha estratehiko, diri ha pasundayag. Nahadlok. Ha paagi nga nahahadlok ka kun an arkitektura han imo pangilal-an nagtitikang na mawad-an hin mga bungbong nga nagdadara hin karga.",
          "Ginbutang niya an iya kamot ha iya butkon.",
          "Ginkita niya ito. Waray hiya bumaya.",
        ],
      },
    },
  },
  {
    id: 25,
    title: "Chapter 25",
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
        terms: linkTagalogPracticeQuestions(25, tagalogTermsByChapter[25]),
        translations: [
          "Ang kasunduan ay nasa ilalim ng kapilya sa lupa.",
          "Natagpuan ito ni Elias dahil mas maraming oras ang ginugugol niya sa kapilya kaysa sa nalalaman ng sinuman—higit pa sa kung ano ang masasabing makabubuti. Nagsisimula na niyang mapagtanto na ang kapilya ay nagbibigay sa kanya ng kalmado sa paraang hindi nagagawa ng ibang bahagi ng bahay, at may sapat siyang talino upang malaman na ang pagpapakalma sa isang silid na itinayo para sa alay ng mga ninuno ay isang nakababahalang palatandaan, ngunit totoo ang kalmado at kailangan niya ito.",
          "Ang dokumento ay nakabaon sa ilalim ng gitnang bato—hindi naman nakatago nang husto, ngunit nakalagay sa lugar kung saan ang isang taong may alam lamang kung saan titingin, o isang taong ginabayan, ang makakahanap nito.",
          "Bawat henerasyon. Bawat tagapagmana. Isang lagda, at isang petsa. Nagmumula sa unang sulat ni Aurelius hanggang sa isang lagda na may petsang 1987—labing-walong taon bago ipanganak ang mga kasalukuyang magpipinsan, na isinulat sa kamay ng kanilang lola.",
          "Tinatanggap ko ang mga tuntunin ng pamana at ipinagpapatuloy ang paglaan nito.",
          "Sinabihan sila na sila ay sinumpa. Lumaki sila sa kuwentong iyon, silang tatlo, sa iba't ibang antas ng pagiging direkta. Ang multo, ang kabaliwan ng pamilya, ang mga tinig sa dingding—ito ang kuwentong kanilang namana kasabay ng kanilang pangalan.",
          "Ang sinasabi ng kasunduan ay mas simple at mas kasuklam-suklam: bawat henerasyon ay nakaalam, o natuto, at pumili pa rin. Lumagda, nagpatuloy, at ipinamana ang ari-arian kasama ang mga tuntunin nito.",
          "Walang sinuman ang na-trap. Lahat ay pumili.",
          '"Nilagdaan niya ito," sabi ni Elias habang hawak ang pahina. "Si Lola."',
          '"Labing-walong taon bago tayo ipanganak," ani Selene. "Alam niya kung ano ang ating kakaharapin."',
          '"Iniwan niya sa atin ang isang testamento na ginawa itong isang kompetisyon," napaka-flat ng tinig ni Lucien. "Pinag-away niya tayo sa simula pa lamang. Pinakakain niya ito. Kahit sa huling sandali."',
          "",
        ],
      },
      kapampangan: {
        lessonId: "kapampangan_25",
        title: "Kapitulu 25",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Ing kontrata atyu king underground chapel.",
          "Akit ne ni Elias uling dakal ya oras king chapel kaysa ninu mang balu — mas dakal kaysa, baka, makasulat. Meg-umpisa yang akit ing chapel a kalmado king paraan a ing aliwang dase ning bale eya, at atin ya ring kamalayan a ing pamanakit king kuartu a gawa para king ancestral sacrifice a kalmado data point ya ning pamag-alala, pero ing kalma tutu ya at kailangan na.",
          "Ing dokumentu makasiksik ya king lalam ning central stone, aliwa makatago, kundi mibali nung nokarin ing tau a balu nang manintun, o tau a mibabo, akit na.",
          "Balang henerasyon. Balang heir. Signature, at petsa. Manibat king mumunang inscriptyon ni Aurelius anggang signature king 1987, labing-walung banwa bayu ding kasalukuyang pinsan mebaitan, king gamat ning ima da.",
          "Tatanggap ku king terms ning legacy at ituloy ing provision.",
          "Pigsabyan da la a me-sumpa la. Mebaitan la king kuwentung ita, ding tatlu, karing aliwang uri ning diretso. Ing multu, ing pamaliwa ning pamilya, ding boses karing pader, narrative ya a tiningnan da kasama ning lagyu.",
          "Ing sinabi ning kontrata mas simpling bage at marok: balang henerasyon balu na, o tinuru, at migdesisyon na. Mig-sign, migtuloy, inulit ing mana kasama ning terms na.",
          "Alang me-trap. Sabla migdesisyon.",
          '"In-sign ne ini," nganang Elias, tatalnan ing page. "Ima." "Labing-walung banwa bayu ta mebaitan," nganang Selene. "In-atdu natamung will a gawa keti competition," nganang Lucien, ing boses malalam. "Pinlano na tatamu laban karing metung at metung manibat king mumuna. Pakanin na ne. Maski king tawli." Ing api king single remaining sconce ning chapel mate ya. Ing madulum buo ya.',
        ],
      },
      waray: {
        lessonId: "waray_25",
        title: "An Nakatago nga Kontrata",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "An kontrata aada ha ilarom han tuna nga kapilya.",
          "Nabilngan ini ni Elias tungod kay mas damo an iya oras ha kapilya kaysa han hinbabaroan han bisan hin-o — labaw pa han, bangin, istrikto nga angay sagdonan. Nagtikang na hiya pagbiling han kapilya nga nagpapakalma ha paagi nga an iba nga bahin han balay diri, ngan mayda niya pipira nga intelektuwal nga pag-abat nga an pagbiling hin kwarto nga gintukod para hin pagpakalma han halad han mga kaapoy-apoyan in usa nga punto hin datos nga ginkakabarak-an, pero an pagkakalma in tinuod ngan kinahanglan niya ini.",
          "An dokumento iginbutang ha ilarom han butnga nga bato, diri gintago, eksakto, kondi iginbutang ha lugar nga usa la nga maaram magkita, o usa nga gingiyahan, an makakabiling hito.",
          "Kada henerasyon. Kada manurunod. Usa nga pirma, ngan usa nga petsa. Naunat tikang ha orihinal nga inskripsyon ni Aurelius ngadto ha pirma nga ginpetsahan han 1987, napulo kag walo ka tuig antes matawo an yana nga mga umangkon, ha kamot han ira lola.",
          "Ginkakarawat ko an mga kondisyon han panurundon ngan iginpapadayon an pagtagana hito.",
          "Ginsumatan na hira nga ginsumpa hira. Ginpadaku hira hito nga istorya, hira nga tulo, ha magkalainlain nga sukol han pagkadirekta. An aswang, an kabuangan han pamilya, an mga tingog ha mga pader, amo adto an pagsaysay nga ira napanunod upod an ngaran.",
          "Mas simple ngan mas makangingirhat an ginsiring han kontrata: an tagsa nga henerasyon nahibaro, o nahibaro, ngan nagpili bisan pa man. Nagpirma na, nagpadayon, nagpasa han panurundon upod han mga kondisyon hito.",
          "Waray pa gud tawo nga na-trap. An ngatanan nagpili na.",
          '"Iya ini ginpirmahan," siring ni Elias nga ginkakaptan an pahina. "Lola."',
          '"Napulo kag walo ka tuig antis kami matawo," sering ni Selene. "Maaram hiya kun ano an amon gin-aagi-an."',
          '"Nagbilin hiya hin testamento ha amon nga naghimo hini nga kompetisyon," siring ni Lucien, patag hinduro an iya tingog. "Gin-set niya kami kontra ha kada tagsa tikang pa han tinikangan. Ginpapakaon niya ito. Bisan ha katapusan."',
          "Napatay an kalayo ha usa la nga nahibilin nga sconce han kapilya. Bug-os na an kasisidman.",
        ],
      },
    },
  },
  {
    id: 26,
    title: "Chapter 26",
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
        terms: linkTagalogPracticeQuestions(26, tagalogTermsByChapter[26]),
        translations: [
          "Ang pagbabago ay hindi biglaan. Iyon ang dahilan kung bakit napakahirap tugunin nito; walang iisang sandali ng pagbabagong-loob, walang madulang bago at pagkatapos. Ito ay ang mabagal na pagpapalit ng isang direksyon patungo sa isa pa, tulad ng pagbabago ng ruta ng isang barko sa pamamagitan ng paunti-unting anggulo hanggang sa ito ay patungo na sa isang lugar na ganap na kakaiba sa pinagmulan nito.",
          "Nagsimulang makipagtalo si Elias para kay Aurelius.",
          "Hindi para sa karahasan o sa panloloko o sa lawa, naging maingat siya sa pagtukoy nito. Kundi para sa prinsipyo, ang pinagbabatayang paninindigan na ang isang pamilya ay nangangailangan ng isang istruktura ng kahihinatnan, na ang pag-ibig ay hindi sapat, na ang matibay na pagpapanatili ng pagkakakilanlan sa bawat henerasyon ay nangangailangan ng isang anyo ng presyur na hindi kayang ibigay ng ordinaryong pagmamahal.",
          '"Mali siya sa mga pamamaraan," ani Elias, sa panahon ng naging gabi-gabi na nilang talakayan sa kusina. "Ngunit mali ba siya tungkol sa problema?"',
          '"Oo," sabi ni Selene.',
          '"Isipin mong mabuti. Tingnan mo ang alinmang pamilya na nakaligtas sa bawat siglo bilang isang institusyon. Tingnan mo kung ano ang kinakailangan upang mapanatili ang pagkakakilanlan sa bawat henerasyon. Ang mga tao ay naliligaw. Ang mga tao ay nagiging mapagsarili. Ang mga tao ay nakakalimot. May ilang mekanismo ng—"',
          '"Takot," ani Selene. "Ang mekanismo ay takot. Ipinaglalaban mo ang takot."',
          '"Ipinaglalaban ko ang pamana," sabi ni Elias. Napakatahimik niya. "Ang takot ang nagpapanatili sa pamilya na matatag."',
          "Ang parirala ay pumatak sa silid taglay ang isang tiyak na bigat. Kinilala ito ni Selene. Ito ay mula sa mga talaarawan. Ito ay mula sa isang liham na isinulat ni Aurelius noong 1802.",
          '"Elias," sabi niya.',
          "Sinalubong nito ang kanyang mga mata. Ang mga mata nito ay malinaw, nakatutok, at sigurado sa paraang mas nakatatakot para sa kanya kaysa sa anumang pagkabaliw na naobserbahan niya rito noon.",
          '"Nag-iisa siya," ani Elias. "Iyan ang bagay na walang sinuman ang nagsasabi tungkol sa kanya. Itinayo niya ang lahat ng ito dahil takot na takot siyang makalimutan."',
        ],
      },
      kapampangan: {
        lessonId: "kapampangan_26",
        title: "Kapitulu 26",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Ing pamanaliwa e sapat. Ita ing gawa king masakit pakibatan, alang mumunang conversion, alang dramatic before at after. Sadyang mabagal a pamanaliwa king aliwa, ing paraan a ing barko magbago kursu king degrees anggang mambabaw ya karing aliwang bage kaysa nung nokarin meg-umpisa.",
          "Si Elias meg-umpisa yang makipag-argue para kay Aurelius.",
          "Aliwa para king kabahasan o fraud o ing danum, malinaw yang sinabi. Para king prinsipi, ing nakalutang a paniguro a ing pamilya kailangan na ring structure ning consequence, a ing sinta e sapat, a ing sikat a transmission ning identity karing henerasyon kailangan na ring uri ning pressure a ing ordinaryong sinta e apalual.",
          '"Mali ya king methods," nganang Elias, karing gawa ning nightly kitchen discussions. "Pero mali ba ya king problem?" "Wa," nganang Selene. "Isipan mu pang mayap. Lawen mu ing pamilyang byebi karing centuries anting institusyon. Lawen mu ing kailangan para mapanatili ing identity karing henerasyon. Ding tau maligaw. Ding tau maging individual. Ding tau malimot. Metung a mechanism of—" "Takut," nganang Selene. "Ing mechanism takut ya. Makipag-argue ka para king takut." "Makipag-argue ku para king inheritance," nganang Elias. Kalmado ya. "Ing takut patibayan na ing pamilya." Ing salita me-bagsak king kuartu king tiyak a gravity. Akit ne ni Selene. Ibat ya karing journal. Ibat ya king sulat a inurat ni Aurelius noong 1802. "Elias," ngana. Liningap ne ing mata na. Ing mata na malinaw at nakatutok at tiyak king paraan a mas nakakatakot kaysa dissociation a akit na kaya dati. "Metung yang mag-isa," nganang Elias. "Ita ing aliwang sasabian tungkul kaya. Inusuk ne ini sabla uling tatakut ya a malimot."',
        ],
      },
      waray: {
        lessonId: "waray_26",
        title: "Ginkarawat ni Elias hi Aurelio",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Diri tigda nga nahitabo an pagbag-o. Amo adto an nagpakuri gud pagbaton, waray bisan usa nga takna hin pagkakombertir, waray dramatiko antes ngan katapos. Amo ito an mahinay nga pagliwan han usa nga oryentasyon hin iba, an paagi han pagbag-o han barko ha mga grado tubtob nga tipakadto ito ha lugar nga naiiba gud tikang ha gintikangan hito.",
          "Nagtikang makiglantugi hi Elias para kan Aurelio.",
          "Diri para han kamadarahog o han panlimbong o han danaw, nag-ikmat hiya ha pag-espisipiko. Para han prinsipyo, an nagpapailarum nga kombiksyon nga an pamilya in nagkikinahanglan hin istraktura hin konsekwensya, nga an gugma in kulang, nga an makusog nga pagpasa hin pangilal-an ha mga henerasyon in nagkikinahanglan hin porma hin pag-ipit nga diri maihahatag han ordinaryo nga gugma.",
          '"Nagsayop hiya han mga pamaagi," sering ni Elias, durante han nagin ira gab-i nga mga paghisgot ha kusina. "Pero nagsayop ba hiya han problema?"',
          '"Oo," siring ni Selene.',
          '"Hunahunaa hin maupay. Kitaa an bisan ano nga pamilya nga nakatalwas ha bug-os nga mga siglo komo usa nga institusyon. Kitaa kun ano an ginkikinahanglan ha pagtipig han pangilal-an ha bug-os nga mga henerasyon. An mga tawo nag-aanod. An mga tawo nag-iindibidwal. An mga tawo nangangalimtan. An pipira nga mekanismo han—"',
          '"Kahadlok," siring ni Selene. "An mekanismo amo an kahadlok. Nakikiglantugi ka tungod han kahadlok."',
          '"Nangangatadongan ako para han panurundon," siring ni Elias. Kalmado gud hiya. "An kahadlok an nagpapabilin nga makusog an mga pamilya." Nahulog an pulong ha kwarto nga may-ada espisipiko nga grabidad. Nakilala ito ni Selene. Tikang ito ha mga magasin. Tikang ito ha surat ni Aurelius han 1802.',
          '"Elias," siring niya.',
          "Natapo niya an iya mga mata. An iya mga klaro ngan nakapokus ngan sigurado ha paagi nga iya nakita nga mas makaharadlok kay han bisan ano nga pagbulag nga iya naobserbahan ha iya hadto.",
          '"Nag-uusahan hiya," siring ni Elias. "Amo iton an waray nasiring ha iya. Gintukod niya ini ngatanan kay nahadlok hiya nga mahikalimtan."',
        ],
      },
    },
  },
  {
    id: 27,
    title: "Chapter 27",
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
        terms: linkTagalogPracticeQuestions(27, tagalogTermsByChapter[27]),
        translations: [
          "Dumating ang mga mamamayan ng bayan noong unang araw ng Enero, sa gitna ng malamig at madilim na bagong taon.",
          "Hindi naman eksaktong marahas na pangkat, may organisasyon dito at may pagkakasundo. May nag-ugnay sa kanila. Marahil ay maraming tao. Dumating sila na may dalang mga sulo sa halip na mga telepono, na nagpapahiwatig ng tila dulaan o kaya'y pakiramdam na ang apoy ang nararapat sa okasyon, at sapat ang kanilang bilang upang ang bakuran ng ari-arian ay madali silang magkasya, ang karamihan ay kumalat sa buong damuhan na parang lagay ng panahon.",
          "Mayroon lamang halos apatnapung minuto ng babala ang pamilyang Vale. Ginugol ito ni Selene sa telepono sa pakikipag-usap sa mga pulis, na nagsabi sa kanya na batid nila ang sitwasyon at tutugon nang naaangkop. Ginugol naman ito ni Lucien sa pagtayo sa bintana sa isang estado na hindi na kayang tukuyin ni Selene—catatonia, o isang bagay na hindi kaiba rito. Nagtimpla ng tsaa si Elias.",
          "Nagsimula ang apoy sa silangang bahagi, na nasunog na rito noon at tila alam na kung paano gagawin.",
          "Nasunog ang bahay sa paraang tila nakikipagtulungan, matandang kahoy, tuyo matapos ang isang dekada ng kapabayaan, nakatuon sa gawain. Ang apoy ay kumilos sa silangang bahagi patungo sa timog na pasilyo at pagkatapos ang bahay ay naging puro usok na lamang, ang mga magpipinsan ay umaatras sa bawat silid habang ang bawat isa ay hindi na matitirhan, hanggang sa sila ay nasa pangunahing bulwagan na may apoy sa tatlong panig at ang pintuan sa harap sa likod nila at ang mga tao sa labas.",
          "Naging tahimik ang mga tao. Ang apoy ay gumagawa ng sapat na ingay para sa lahat.",
          '"Kailangan nating lumabas," ani Selene.',
          '"Kung lalabas tayo," sabi ni Lucien mula sa kanyang bintana, "tapos na."',
          '"Tapos na naman talaga," sagot niya.',
        ],
      },
      kapampangan: {
        lessonId: "kapampangan_27",
        title: "Kapitulu 27",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Ding tau ning balen dinatang la king mumuna ning Enero, king malalam at madulum ning bayung banwa.",
          "Aliwa mob, mayayos ya, atin organisasyon. Atin mig-coordinate. Baka dakal a tau. Dinatang la bitbit torch kaysa phone, a magpalarawan king sense ning theater o sense a ing api angkop king okasyon, at dinatang la karing damla a ing estate grounds atian da la, ing lipun milalako karing lawn anting panahon.",
          "Ing Vale family atin mga apatpulu minutos a pauna. In-gagamit na ni Selene king phone karing pulis, a sinabi ra kaya a balu ra ing sitwasyon at pakibatan da. In-gagamit na ni Lucien king pagtindag king bintana king kabilyan a e na malyari i-diagnose, catatonia, o aliwa. Si Elias gumawang tea.",
          "Ing api meg-umpisa king east wing, a sinulu na dati at balu na ing gawan.",
          "Ing bale sinulu king paraan a cooperative, lumang kahoy, malangi kaibat ning dekada ning kawalan, tutuknang king trabaho. Ing api linub king east wing at king south corridor at ing bale meging asuk na, ding pinsan lumipat room by room kaysa maging untenable, anggang atyu la king main hall a atin api king tatlong dase at ing pasbul king likuran at ing lipun king lual.",
          "Ing lipun tahimik na. Ing api gagawan na ing paraan para karing sabla.",
          '"Kailangan tatang lual," nganang Selene. "Nung lual kata," nganang Lucien, ibat king bintana na, "tapos na." "Tapos na," ngana.',
        ],
      },
      waray: {
        lessonId: "waray_27",
        title: "An Pagrebelde han Bungto",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "An mga bungtohanon umabot han una han Enero, ha katugnaw ngan kasisidman han bag-o nga tuig.",
          "Diri usa nga grupo, eksakto, may-ada organisasyon hito, usa nga tinuyo. Mayda nagkoordinar. Bangin damu nga tawo. Inabot hira nga may dara nga mga sulo imbes nga mga telepono, nga nagsusuhestyon hin pag-abat hin teatro o pag-abat nga an kalayo in angay ha okasyon, ngan inabot hira hin igo nga kadamo nga madali hira makapugong han nataran han katunaan, an kadam-an nagsasarang ha mga balilihan sugad hin panahon.",
          "An pamilya Vale bangin may-ada kwarenta minutos nga pahamangno. Gin-gasto hira ni Selene ha telepono ha mga pulis, nga nagsumat ha iya nga maaram hira han kahimtang ngan mabaton kon angayan. Gin-gamit hira ni Lucien nga natindog ha bintana ha kahimtang nga diri na niya mahibabaroan, katatonia, o usa nga butang nga diri maiiba hito. Naghimo hin tsa hi Elias.",
          "Nagtikang an kalayo ha sinirangan nga pako, nga nasunog na hadto ngan baga hin maaram kon paonan-o.",
          "Nasunog an balay ha paagi nga baga hin haros nagbuburublig, daan nga kahoy, uga katapos hin usa ka dekada nga pagpasibaya, komitido ha buruhaton. An kalayo in nag-agi ha sinirangan nga pako ngan ngadto ha sur nga pasilyo ngan katapos an balay nagin panguna nga aso, an mga umangkon in nag-atras hin kwarto-kwarto samtang an kada usa in nagigin diri na matitindog, tubtob nga nakadto hira ha panguna nga hall nga an kalayo ha tulo nga ligid ngan an purtahan ha atubangan ha ira luyo ngan an kadam-an ha gawas.",
          "Nahilom na an kadam-an. Igo na an aringasa han kalayo para ha ngatanan.",
          '"Kinahanglan naton gumawas," siring ni Selene.',
          '"Kun gumawas kita," siring ni Lucien, tikang han iya bintana, "tapos na."',
          '"Tapos na," siring niya.',
        ],
      },
    },
  },
  {
    id: 28,
    title: "Chapter 28",
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
        title: "Kapitulu 28:",
        terms: linkTagalogPracticeQuestions(28, tagalogTermsByChapter[28]),
        translations: [
          "Sumubok pa rin sila, kahit noon.",
          "Ideya ito ni Lucien at lahat sila ay nakibahagi dahil wala nang natitira pang mawawala at dahil ang kawalan ng pag-asa ay may sarili nitong lohika. Napagpasyahan niya, taglay ang kalinawan ng isang taong apat na araw nang gising at naubusan na ng mas masalimuot na pagsusuri, na ang sumpa ay materyal, na ito ay nabubuhay sa mga bagay na naglalaman nito, at ang pagsira sa mga bagay na iyon ay makasisira rito.",
          "Ang mga nakapintrang larawan muna. Nasunog ang mga ito. Ang usok mula sa kanila ay mas madilim kaysa sa dapat, na may organikong kalidad, at ang mga mukha sa ilalim ng mga binurang mukha ay panandaliang nakita bago naging abo—mga mukha ng mga taong kahawig ng pamilya, ang parehong mga buto sa loob ng dalawang siglo, na may magkakaibang ekspresyon.",
          "Ang mga talaarawan. Ang kasunduan. Ang inukit na batong sahig ng kapilya, na pinag-uukol nila ng martilyo ngunit hindi nila mabasag.",
          "Muling lumitaw ang mga nakapintrang larawan sa mga dingding.",
          "Hindi ang parehong mga canvass, ang mga iyon ay abo na. Mga bagong canvass, na tila ba nandoon na sila palagi, ang pintura ay tuyo at may mga gulis ng katandaan. Tumayo si Selene sa pasilyong puno ng usok at tinitigan ang pagpipinta kay Aurelius at naunawaan, taglay ang ganap na pakiramdam na tila malamig na tubig, na tama si Gwendolen. Na ang sumpa ay wala sa mga bagay. Na ang mga bagay ay paraan lamang kung paano ito nagpapahayag ng sarili nito. Na ang kanilang ipinaglalaban ay nasa tiyak na anyo na ibinigay sa kanilang mga isipan ng tatlong daang taon ng pagiging pamilyang ito—ang paraan ng pagharap sa banta, ang paraan ng pag-unawa sa katapatan, ang paraan ng pakikinig sa salitang pamana at pakiramdam nito bilang isang bagay na mahalaga at kakila-kilabot nang sabay.",
          "Hindi mo maaaring sunugin ang isang gawi ng pag-iisip. Hindi mo maaaring tibagin ang pedagogya ng mga ninuno sa pamamagitan ng martilyo.",
          "Hindi nabasag ang sahig ng kapilya. Ibinaba nila ang mga martilyo at tumayo sa usok na ang kanilang mga kamay ay nasa kanilang gilid.",
        ],
      },
      kapampangan: {
        lessonId: "kapampangan_28",
        title: "Kapitulu 28",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Ding tau ning balen dinatang la king mumuna ning Enero, king malalam at madulum ning bayung banwa.",
          "Aliwa mob, mayayos ya, atin organisasyon. Atin mig-coordinate. Baka dakal a tau. Dinatang la bitbit torch kaysa phone, a magpalarawan king sense ning theater o sense a ing api angkop king okasyon, at dinatang la karing damla a ing estate grounds atian da la, ing lipun milalako karing lawn anting panahon.",
          "Ing Vale family atin mga apatpulu minutos a pauna. In-gagamit na ni Selene king phone karing pulis, a sinabi ra kaya a balu ra ing sitwasyon at pakibatan da. In-gagamit na ni Lucien king pagtindag king bintana king kabilyan a e na malyari i-diagnose, catatonia, o aliwa. Si Elias gumawang tea.",
          "Ing api meg-umpisa king east wing, a sinulu na dati at balu na ing gawan.",
          "Ing bale sinulu king paraan a cooperative, lumang kahoy, malangi kaibat ning dekada ning kawalan, tutuknang king trabaho. Ing api linub king east wing at king south corridor at ing bale meging asuk na, ding pinsan lumipat room by room kaysa maging untenable, anggang atyu la king main hall a atin api king tatlong dase at ing pasbul king likuran at ing lipun king lual.",
          "Ing lipun tahimik na. Ing api gagawan na ing paraan para karing sabla.",
          '"Kailangan tatang lual," nganang Selene. "Nung lual kata," nganang Lucien, ibat king bintana na, "tapos na." "Tapos na," ngana.',
        ],
      },
      waray: {
        lessonId: "waray_28",
        title: "An Kataposan nga Pagsari",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Ginsarihan nira, bisan hadto.",
          "Ideya adto ni Lucien ngan hira ngatanan in umapi tungod kay waray na nahibilin nga mawawad-an ngan tungod kay an pagkadesperado amo an kalugaringon nga nagkakasumpay nga lohika. Natapos na niya, nga may katin-awan han usa nga tawo nga upat ka adlaw na nga nagmamata ngan naubos na an mas detalyado nga mga analitikal nga mga balangkas, nga an sumpa materyal, nga nabubuhi ito ha mga butang nga nagkokode hito, ngan an pagbungkag hito nga mga butang magbubungkag hito.",
          "An mga letrato una. Nasunog hira. An aso tikang ha ira mas madulom kay han angay unta, nga may-ada organiko nga kalidad, ngan an mga nawong ha ilarom han mga gin-iskor nga mga nawong nakikita hin madaliay antes hira magin abo, an mga nawong han mga tawo nga kapariho han pamilya, an pariho nga mga tul-an ha bug-os nga duha ka siglo, nga nagsusul-ot hin magkalainlain nga mga ekspresyon.",
          "An mga magasin. An kontrata. An inukit nga bato nga salog han kapilya, nga ira gin-atake pinaagi hin mga martilyo ngan waray mabari.",
          "Nagpakita utro an mga letrato ha mga bungbong.",
          "Diri pareho nga mga kanbas, abo adto. Bag-o nga mga kanbas, nga baga hin pirme na aadto, an pintura namamara ngan naglilitik tungod han edad. Nagtindog hi Selene ha pasilyo nga madakmol hin aso ngan ginkinita an pintura ni Aurelius ngan nasabtan niya, nga may pagkakumpleto nga baga hin mahagkot nga tubig, nga husto hi Gwendolen. Nga an sumpa waray ha mga butang. Nga an mga butang amo la an paagi han pagpahayag hito. Nga an ira gin-aatohan aada ha espisipiko nga porma nga iginhatag han ira mga hunahuna han tulo ka gatos ka tuig nga pagin ini nga pamilya, an paagi han ira pagproseso han tarhug, an paagi han ira pagsabot han pagkamaunungon, an paagi han ira pamati han pulong nga panurundon ngan pag-abat hito sugad nga usa nga butang nga birilhon ngan usa nga butang nga makangingirhat nga dungan.",
          "Diri mo masusunog an usa nga batasan han hunahuna. Diri ka makakag-chip ha pedagohiya han mga kaapoy-apoyan pinaagi hin martilyo.",
          "Waray mabari an salog han kapilya. Ira iginbutang an mga martilyo ngan tinindog ha aso nga an ira mga kamot aada ha ira mga ligid.",
        ],
      },
    },
  },
  {
    id: 29,
    title: "Chapter 29",
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
        terms: linkTagalogPracticeQuestions(29, tagalogTermsByChapter[29]),
        translations: [
          "Nasira siya sa umaga ng ikalawang araw.",
          "Ang apoy ay napigilan, hindi naman eksaktong napatay, kundi napagkasunduan, nabawasan sa ilang bahagi ng bahay na nasusunog pa habang ang departamento ng bumbero ay nagtatrabaho at ang mga magpipinsan ay sumakop sa kuwarto ng mga katulong na naligtas. Hindi natulog si Lucien. Hindi rin, ayon sa naobserbahan ni Selene, huminto sa pakikipag-usap sa mga tinig mula noong gabi ng sunog.",
          "Pumunta siya para kay Elias dala ang fireplace poker mula sa silid-pasyalan ng mga katulong, sa ikapito ng umaga, sa tiyak at nakatutok na paraan ng isang taong nagsasakatuparan ng isang planong napagpasyahan nila at walang balak na magpaawat. Sinabihan siya, ani niya, na si Elias ay wala na—na ang nakaupo sa upuan ni Elias na may mukha ni Elias ay ang pagpapatuloy ni Aurelius, at ito ang solusyon na hindi nakikita ng pamilya.",
          "Hawak ni Selene ang shotgun. Ito ay sa kanyang lola, mula sa cabinet sa cottage ng tagapamahala ng bakuran, na may kargang birdshot. Ginamit niya ito at hindi nag-atubili.",
          "Tinamaan si Lucien sa balikat at napasubsob sa sahig, at nahiga siya sa sahig ng silid-pasyalan ng mga katulong na gumagawa ng mga tunog na hindi wika sa loob ng ilang minuto, at lumuhod si Elias sa tabi niya at hinawakan ang kanyang walang sugat na braso at tahimik na sinabi ang kanyang pangalan hanggang sa ang mga tunog ay maging parang pag-iyak, na mas mabuti, na isang bagay na nakikilala at makatao na maaaring gawan ng paraan.",
          "Naupo si Selene sa armchair na ang baril ay nasa kanyang mga tuhod.",
          "Inisip niya na hindi siya natakot habang ginagawa ito. Mas nagpatakot iyon sa kanya kaysa sa mismong ginawa niya.",
        ],
      },
      kapampangan: {
        lessonId: "kapampangan_29",
        title: "Kapitulu 29: Mililigalig ya i Lucien",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Mewala ya king abak ning kaduang aldo.",
          "Ing api me-contain ya, aliwa me-pate, kundi negosasyon, mibawas karing pilang dase ning bale a sinulu habang ing fire department magobra at ding pinsan makapahingalay king servants' quarters, a miligtas. Si Lucien e makatulog. E na, agpang kay Selene, tinuknang makisabi karing boses manibat king bengi ning api.",
          "Dinatang ya kay Elias king fireplace poker ning servants' sitting room, king alas syete ning abak, king tiyak a paraan ning taung gawa plan a e na buri mawala. Sinabi na kaya, a si Elias mako na — a ing makalukluk king siping ni Elias at gagamit sa mukha ni Elias pamanulid ya ni Aurelius, at ini ing solusyon a ing pamilya e akit.",
          "Si Selene atin shotgun. Ing ima na ya, ibat king cabinet ning groundskeeper's cottage, loaded king birdshot. In-gagamit na at e min-bili.",
          "Ing shot in-abot ne si Lucien king takde at pinalubog ne at minalukluk king lantai ning servants' sitting room gagawan sound a aliwa language king pilang minuto, at si Elias linuhod king siping na at tinalnan ne ing non-injured arm na at in-sabianing mahinhin ing lagyu na anggang ing sound meging parang pamanangis, a mas mayap, a pwedeng gawan.",
          "Si Selene minalukluk king armchair a atin gun king tuhod na.",
          "E ya, isip na, tatakut neng gewa na ini. Mas tatakut ne kaysa king gawa.",
        ],
      },
      waray: {
        lessonId: "waray_29",
        title: "Nalurong hi Lucien",
        terms: [], // TODO: add tappable word annotationsS
        translations: [
          "Nabungkag hiya han aga han ikaduha nga adlaw.",
          "Napugngan na an kalayo, waray maparong, eksakto, kundi gin-negosyar, gin-ibanan ngadto hin pira nga seksyon han balay nga naglalaga pa samtang nagtatrabaho an mga bombero ngan gin-okupar han mga umangkon an mga kwarto han mga surugoon, nga ginluwas. Waray pa makaturog hi Lucien. Waray unta, kutob han naobserbahan ni Selene, umundang ha pakiistorya ha mga tingog tikang han gab-i han sunog.",
          "Kinadto hiya para kan Elias dara an pugon nga poker tikang ha lingkoran han mga surugoon, ha alas-syete han aga, ha espisipiko nga nakapokus nga paagi han usa nga nagtutuman hin plano nga ira gindesisyonan ngan diri nira tuyo nga pugngan. Ginsumatan na hiya, siring niya, nga waray na hi Elias — nga an nalingkod ha lingkuranan ni Elias nga nakasul-ot han nawong ni Elias, padayon ni Aurelius, ngan amo ini an solusyon nga waray na makita han pamilya.",
          "Hi Selene an mayda pusil. Kanan iya lola adto, tikang ha kabinet ha balay han parabantay han uma, nga puno hin birdshot. Gin-gamit niya ito ngan waray mag-alang.",
          "An pusil nakadakop kan Lucien ha abaga ngan iginbutang hiya ngan nahigda hiya ha salog han lingkoran han mga surugoon nga naghihimo hin mga tunog nga diri yinaknan ha sulod hin pira ka minuto, ngan hi Elias linmuhod ha iya sapit ngan ginkaptan an iya diri nasamad nga butkon ngan ginsiring an iya ngaran hin hilom tubtob nga an mga tunog nagin usa nga butang nga mas sugad hin c, pagtrabahoan.",
          "Nalingkod hi Selene ha lingkuran nga an pusil nakatabok ha iya mga tuhod.",
          "Waray hiya, hunahuna niya, mahadlok samtang ginbubuhat niya ito. Mas nahadlok hiya hito kay han buhat.",
        ],
      },
    },
  },
  {
    id: 30,
    title: "Chapter 30",
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

        terms: linkTagalogPracticeQuestions(30, tagalogTermsByChapter[30]),
        translations: [
          "Ang tinig, hindi na bulong ngayon, hindi na koro, kundi isang tinig lamang, nag-iisa at malinaw, ay nag-alok ng kasunduan sa madaling araw.",
          "Hindi sa marahas na paraan. Hindi sa pamamagitan ng seremonya. Ito ay naging isang bagay na alam ng bawat isa sa kanila, tulad ng alam mo ang pagbabago sa panahon bago mo mapangalanan kung ano ang nagbago, ang tiyak na paglipat sa atmospera ng bahay mula sa pagiging pagalit patungo sa umaasa, na tila ba may isang tanong na itinanong at naghihintay ng sagot nito.",
          "Ang isa sa inyo ay magpapatuloy sa dinastiya. Ang isa sa inyo ay magiging susunod na tinig, ang susunod na transmisyon, ang susunod na tagapangalaga ng pamana. Ang isang iyon ang magmamana ng lahat at mabubuhay. Ang dalawa pa ay palalayain. O kaya'y kayong tatlo ay magwawakas dito, hindi kilala, nakalimutan, ang dinastiya ay tuluyang mabubuwag. Pumili.",
          "Naramdaman ni Selene ang ikalawang opsyon nang may pisikal na kalinawan, ang malinis na pakiramdam ng isang pintong may markang exit, ang ginhawa nito, ang kasimplihan. Pagod na pagod na siya. Buwan-buwan na siyang nakikipaglaban at natalo sa bawat labanan at hindi niya makita, mula sa kung saan siya nakaupo, ang isang bersyon ng tagumpay na maaari pa ring makuha. Naisip niya ang paglalakad palabas ng bahay na ito at hindi na muling babalik. Naisip niya kung ano ang ibig sabihin nito para sa mga file ng blackmail na ipinadala niya, ang katotohanan na inilabas niya sa mundo, kung ito ba ay makatatayo sa sarili nitong mga paa, kung kailangan nito ang kanyang patuloy na presensya upang mangahulugan ng anuman.",
          "Naisip niya na malamang ay kaya naman.",
          "Nais ng kaligtasan ni Lucien. Palagi niyang nais ang kaligtasan, sa ilalim ng estratehiya, ambisyon, at dangal ng pamilya, mayroong isang lalaki na nais lamang, sa simpleng paraan, na magpatuloy. Ang manatili rito. Ang pamana ay isang paraan lamang para doon, wala nang iba pa.",
          "Naupo si Elias sa tabi ng bintana na ang liwanag ng madaling araw ay nasa kanyang mukha at ang kanyang ekspresyon ay payapa sa paraan na ang pagpapasya ay payapa, na iba sa kaligayahan. Gumugol siya ng apat na buwan kasama si Aurelius sa loob ng kanyang ulo at naunawaan ang mga bagay tungkol sa ninunu na hindi naunawaan ng iba—ang kalungkutan na pinangalanan ni Elias, ang takot sa pagkasira na nagtayo ng isang makina na may tatlong daang taon upang pigilan ito. Naunawaan niya ito dahil kinilala niya ito. Siya ay dalawampu't apat na taong gulang at nalulunod sa utang at palaging naniniwala na ang tamang pakikipag-usap ay maaaring umayos sa anumang bagay, at ang kanyang natagpuan sa halip ay ang mga bagay na pinakamamahal mo ang siyang ganap na makasisira sa iyo.",
          "Humarap siya mula sa bintana.",
          '"Ako ang gagawa," ani niya.',
        ],
      },
      kapampangan: {
        lessonId: "kapampangan_30",
        title: "Kapitulu 30",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Ing boses, aliwa bulung ngeni, aliwa choir, sadyang boses, single at malinaw, minye bargain king abak.",
          "Aliwa dramatic. Aliwa seremonya. Maging bage ya a balu na ring balang metung, ing paraan a balu mu ing pamanaliwa ning panahon bayu mo sabian nnu ing mibali, ing tiyak a pamanaliwa ning atmosphere ning bale manibat hostile to expectant, anting kutang me-kutang at manaya pakibatu.",
          "Metung kangkong magpatuloy king dynasty. Metung kangkong maging susunod a boses, ing susunod a transmission, ing susunod a keeper ning legacy. Ita ing in-inherit ing sabla at byebi. Ding adua mako la. O ing tatlu kangkong tapusan keti, e balu, malimot, ing dynasty mawala. Mampe ka.",
          "Naramdam nang Selene ing kaduang option king physical linaw, ing malinis a pakiramdam ning pasbul marked exit, ing relief na, ing simple. Pagal na ya. Maglaban ya karing bulan at milako sabla at e na pwedeng makilala ing version ning victory a atyu pa. In-isip na ing lumwal keti king bale at e na muli. In-isip na ing buri sabian para karing blackmail files a in-padala na, ing katotohanan a in-bili na king yatu, nung pwedeng manatili, nung kailangan ne ing continuing presence na para maging kahulugan na.",
          "In-isip na pwedengwa.",
          "Buri nang Lucien ing byebi. Buri na ing byebi, king lalam ning strategy at ambition at pamilyang pride, atin tau a buri, simple, manatili. Mag-byebi. Ing inheritance paraan ya mu para keti, ala na.",
          "Si Elias minalukluk king bintana king abak silaw king mukha na at ing hitsura na kalmado king paraan a ing resolution kalmado ya, a aliwa king saya. Atyu ya king apat a bulan kay Aurelius king isip na at a-intindihan na ding bage tungkul king ancestor a ding aliwa e akit, ing loneliness a in-sabian ni Elias, ing takut ning pamagsira a mig-bangon three-hundred-year machine para i-prevent ini. A-intindihan na uling akilala ne. Bayntis-kuat ya at mapagal king utang at parating maniwala a ing ustung pamisabi ayusin ne ing sabla, at ing apulot na keti ing bage a buri mung balu ing pwedeng magpabagsak keka.",
          'Mibalik ya king bintana. "Gawan ku ya," ngana.',
        ],
      },
      waray: {
        lessonId: "waray_30",
        title: "An Pagpili",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "An tingog, diri bulong yana, diri koro, tingog la, usa ngan klaro, an nagtanyag han baratilyo ha kaagahon.",
          "Diri ha dramatiko nga paagi. Diri nga may seremonya. Nagin usa la ito nga butang nga hinbabaroan han kada usa ha ira, an paagi nga maaram ka hin pagbag-o han panahon antes mo ngaranan an nagbag-o, an partikular nga pagbalhin han palibot han balay tikang ha pagin mabangis ngadto ha pagin naglalaom, nga baga hin may-ada pakiana nga iginpakiana ngan naghuhulat han baton hito.",
          "Usa ha iyo an nagpapadayon han dinastiya. Usa ha iyo an nagigin sunod nga tingog, sunod nga pagpasa, sunod nga magtipig han panurundon. Ito nga usa nakapanunod han ngatanan ngan nabubuhi. An duha pa ginbubuhian. O kamo nga tulo matapos dinhi, diri kilala, nahingangalimtan, nabungkag an dinastiya. Pagpili.",
          "Inabat ni Selene an ikaduha nga kapilian nga may pisikal nga katin-awan, an malimpyo nga pag-abat hin purtahan nga may marka nga paggawas, an pagginhawa hito, an kasimplehan. Kapoy gud hiya. Pipira na ka bulan hiya nga nakikig-away ngan napirde ha kada away ngan diri niya, tikang han iya ginlilingkoran, mahibabaroan an usa nga bersyon han kadaogan nga aada pa. Nahunahuna niya nga gumawas hini nga balay ngan diri na bumalik. Ginhunahuna niya kun ano an kahulugan hini para han mga file hin pan-ipit nga iya iginpadara, an kamatuoran nga iya iginbutang ha kalibutan, kun makakatindog ba ito ha iya kalugaringon, kun kinahanglan ba hini an iya padayon nga presensya nga magkahulugan hin bisan ano.",
          "Nahunahuna niya nga bangin mahimo ito.",
          "Karuyag ni Lucien nga mabuhi. Pirme niya karuyag nga mabuhi, ha ilarom han estratehiya ngan han ambisyon ngan han garbo han pamilya, mayda tawo nga karuyag, ha simple hinduro nga paagi, nga magpadayon. Para aadi. An panurundon usa nga paagi hito, waray labaw pa hito.",
          "Nalingkod hi Elias ha may bintana nga mayda kapawa han kaagahon ha iya nawong ngan mamurayaw an iya ekspresyon ha paagi nga mamurayaw an resolusyon, nga naiiba ha kalipay. Upat ka bulan na hiya nga kaupod hi Aurelius ha sulod han iya ulo ngan nasasabtan niya an mga butang mahitungod han kaapoy-apoyan nga waray masabti han iba, an kamingaw nga ginngaranan ni Elias, an kahadlok han pagkabungkag nga naghimo hin tulo ka gatos ka tuig nga makina basi mapugngan ini. Nasabtan na niya ito tungod kay nakilala niya ito. Baynte-kwatro anyos hiya ngan nalumos ha utang ngan pirme natoo nga an husto nga pag-istorya makakaayos hin bisan ano, ngan an iya hin-agian lugod amo nga an mga butang nga imo hinigugma gud amo an mga makakahimo hin bug-os nga pag-undo ha imo.",
          "Liningi hiya tikang ha bintana.",
          '"Bubuhaton ko ito," siring niya.',
        ],
      },
    },
  },
  {
    id: 31,
    title: "Chapter 31",
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
        terms: linkTagalogPracticeQuestions(31, tagalogTermsByChapter[31]),
        translations: [
          "Tinupok ng apoy ang natitirang bahagi ng bahay bago mag-gabi.",
          "Umatras ang departamento ng bumbero nang matiyak na wala nang natitirang tao sa loob. Ang mga tao ay nagkahiwa-hiwalay sa madaling araw matapos ang drama ng nakaraang gabi ay nalutas sa ordinaryong tanawin ng isang nasusunog na gusali; kahanga-hanga sa malayo, nakatatamad sa malapitan. Sa tanghali, ang ari-arian ng Vale ay isang kontroladong sunog sa istruktura na sistematikong tumutupok sa sarili nitong kasaysayan.",
          "Natagpuan sina Selene at Lucien sa tabi ng daan sa gilid ng ari-arian, kinilala ng mga rumespondeng pulis, tinanong, ginamot para sa kaunting usok na nalanghap, at kalaunan ay pinalaya. Ang sugat sa balikat ni Lucien ay ginamot sa ospital ng kondado. Nagbigay siya ng salaysay na totoo sa mga katotohanan nito at kulang sa konteksto nito, at ang kakulangan ay hindi kailanman iniimbestigahan.",
          "Hindi natagpuan si Elias.",
          "Itinala sa ulat ng sunog ang timog na bahagi bilang ang pinakamalalang napinsalang lugar at nagtapos na ang kumpletong pagtutuos sa mga nilalaman ng ari-arian ay imposible dahil sa lawak ng pagkasira. Isang ulat para sa nawawalang tao ang inihain para kay Elias Vale, dalawampu't apat na taong gulang, na huling nakita sa ari-arian. Nanatiling bukas ang kaso sa loob ng tatlong taon bago ito administratibong isinantabi.",
          "Umalis ng bansa si Selene.",
          "Dala niya ang kanyang encrypted drive at ang pananaliksik na ginawa niya sa loob ng apat na buwan, at dinala niya ang kaalaman kung ano talaga ang pamilyang iyon. Inilathala niya ang mga bahaging maaaring ilathala at ibinigay ang natitira sa mga institusyon na mas makagagamit nito kaysa sa kanya. Hindi niya dinala ang pangalang Vale saan man siya pumunta. Hindi siya sigurado kung tuluyan na niyang naiwan ang mga bulong; paminsan-minsan, sa ganap na ikatlo ng madaling araw, sa mga apartment sa mga lungsod na walang kinalaman sa lahat ng ito, may naririnig siya sa arkitektura. Ang natatanging tunog ng isang bahay na nag-iisip.",
          "Huminga siya nang malalim para lagpasan ito. Natulog siya.",
          "Nagpatayo muli si Lucien. Hindi ang ari-arian, dahil hindi na iyon maibabalik, kundi ang iba pang mga bagay: ang mga negosyong nakaligtas, ang mga ari-ariang hindi nasunog, ang tahimik na pag-ipon ng salapi at impluwensya na palagi niyang mas nauunawaan kaysa sa pag-unawa sa mga tao. Hindi na niya naririnig si Aurelius. Hindi siya sigurado kung ito ba ay dahil may natapos na o dahil sa wakas, sa ganap na paraan, ay naging kung ano ang palaging hinuhubog ni Aurelius na maging bunga ng pamilya—isang lalaki na hindi na kailangan ang mga bulong dahil isinasabuhay na niya ang leksyon nang buong-buo.",
          "Hindi na niya hinabol ang katanungang ito.",
          "Pitong taon matapos ang sunog, isang bata sa isang malaki at maunlad na pamilya sa hilaga ng bansa ang nagsimulang magising sa ganap na ikatlo ng madaling araw mula sa mga panaginip na hindi niya matandaan. Labing-isang taong gulang siya. Hindi pa niya naririnig ang pangalang Vale. Hindi niya masasabi kung saan nanggagaling ang tinig—kung sa bahay ba, o sa dugo, o sa partikular na paraan kung paano siya tinuruan ng kanyang pamilya na unawain kung ano ang ibig sabihin ng maging bahagi ng isang bagay.",
          "Nagmamay-ari kita, anito.",
          "Hinaltak niya ang kanyang kumot nang mas mahigpit.",
          "Hindi niya ito sinabi sa kanino man.",
          "Ang tinig, matiyaga gaya ng pamana, ay naghandang magsimula muli.",
          "Nanatili ang legasiya.",
        ], // TODO: one translated paragraph per body entry
      },
      kapampangan: {
        lessonId: "kapampangan_31",
        title: "Kapitulu 31",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Ing api in-tinda ne ing natira king bale bayu mag-hapon.",
          "Ing fire department minako neng akit da a alang mitalakad king lual. Ing lipun milalako king abak, kaibat ning drama ning minunang bengi meging ordinaryong spectacle ning gagamit a bale; impressive king malaut, tedious king malapit. King ugtu, ing Vale estate contained structural fire ya, gagamit king sariling amlat.",
          "Si Selene atin si Lucien apulot da king gilid ning kalsada ning estate, akilala ning pulis, kutang, tinaid para king minor smoke inhalation, at minalis. Ing takde ni Lucien tinaid king county hospital. Minye ya statement a totoo karing facts at e buo king context, at ing e buo e neng in-investigate.",
          "Si Elias e apulot.",
          "Ing fire report in-lista ne ing south wing anting pinakamarok a dase at sinabi na ing buung accounting karing contents ning estate e malyari uling king lakas ning pamanira. Missing person report me-file para kay Elias Vale, bayntis-kuat, huling akit king property. Ing kaso manatili king tatlong banwa bayu suspended administratively.",
          "Minalis si Selene king bansa.",
          "In-dala na ing encrypted drive na at ing research a gewa na karing apat a bulan at in-dala na ing balu king bage a pamilya, at in-publish na ing pwedeng i-publish at in-bili na ing natira karing institutions a mas gawan na kaysa kaya. E na in-dala ing lagyung Vale king nokarin man munta. E siguradung tinuknang karing bulung, minsan, king alas tres ning abak, karing apartment karing balen a ala karing bage, makarandam ya bage king architecture. Ing tiyak a tunog ning bale a mag-isip.",
          "Miyapse ya. Minatulog ya.",
          "Mibangun si Lucien. Aliwa ing estate, malaut na king recovery, kundi ding aliwang bage: ding negosyo a miligtas, ding holdings a e sinulu, ding tahimik a tipun ning pera at impluwensya a balu na kaysa karing tau. E na neng dirinig si Aurelius. E siguradung uling atin miyari o uling mig-maging ya, fully, ing bage a parating gawan ni Aurelius king pamilya, ing taung e na kailangan ding bulung uling in-internalize ne ing lesson.",
          "E na kutang ing kutang a ini.",
          "Pitung banwa kaibat ning api, ing anakan king maragul, mayap a pamilya king north ning bansa meg-umpisa yang magising king alas tres ning abak karing pangarap a e na tanda. Onse ya kaibat banwa. E na dirinig ing lagyung Vale. E na pwedeng sabian nnu ing pinanibatan ning boses — king bale, o king daya, o king tiyak a paraan a ing pamilya tinuru na kaya ing buri sabian ning pagiging kayanib ning bage.",
          "Kayanib ka kaku, ngana. In-aplak na ing kumot na. E na sinabi karing ninu man. Ing boses, pasensyo anting inheritance, gawang mag-umpisa ulit. Ing legacy manatili.",
        ],
      },
      waray: {
        lessonId: "waray_31",
        title: "An Kataposan nga Huring",
        terms: [], // TODO: add tappable word annotations
        translations: [
          "Ginkuha han kalayo an iba pa nga bahin han balay antes magkulop.",
          "Nag-atras an bombero han ma-establisar nga waray na tawo nga nahibilin ha sakob. Nagsarang na an kadam-an ha temprano nga oras han aga, katapos magsulbad an drama han naglabay nga gab-i ngadto ha ordinaryo nga kiritaon han nasusunog nga tinukod; makaruruyag ha hirayo, makapoy ha hirani. Han udto, an tuna han Vale usa nga kalayo nga may sulod nga istraktura, nga metodiko nga nag-uubos han iya kalugaringon nga kasaysayan.",
          "Nakit-an hira Selene ngan Lucien ha ligid han kalsada ha ligid han katunaan, ginkilala han binaton nga mga pulis, gin-usisa, gintambal tungod han gutiay nga pagginhawa hin aso, ngan ha urhi ginbuhian. Gintambalan an samad ha abaga ni Lucien ha ospital han probinsya. Naghatag hiya hin pahayag nga totoo ha mga kamatuoran hito ngan diri kompleto ha konteksto hito, ngan waray gud usisaha an pagkadiri-kompleto.",
          "Waray hiagii hi Elias.",
          "Ginlista han report han sunog an sur nga pako komo an pinaka-grabe nga nadaot nga lugar ngan nagtapos nga imposible an bug-os nga pag-akusar han mga sulod han katunaan tungod han kadako han kabungkagan. Ginsalawad an report hin nawara para kan Elias Vale, baynte-kwatro anyos, nga urhi nga nakit-an ha mao nga propyedad. Nagpabilin nga abrido an kaso hin tulo katuig ugsa ini suspendido administratibo.",
          "Binaya hi Selene ha nasud.",
          "Ginkuha niya an iya encrypted drive ngan an pagsaliksik nga iya ginhimo ha sakob hin upat ka bulan ngan ginkuha niya an hibaro kun ano an pamilya hadto, ngan iya iginpublikar an pwede igpublikar ngan iginhatag an iba ngadto han mga institusyon nga makakagamit hini hin mas maupay kaysa ha iya. Waray niya dad-a an ngaran nga Vale bisan diin hiya kumadto. Diri hiya sigurado nga bug-os niya nga ginbayaan an mga huring-huring, panalagsa, alas tres han aga, ha mga apartment ha mga syudad nga waray kalabotan ha bisan ano hito, may-ada hiya mababatian ha arkitektura. An partikular nga tunog han usa nga balay nga naghuhunahuna.",
          "Ginhinga niya ito. Nakaturog hiya.",
          "Gintukod utro ni Lucien. Diri an katunaan, nga diri na mabawi, kundi an iba nga mga butang: an mga negosyo nga nakatalwas, an mga ginkakaptan nga waray masunog, an mahimyang nga mga pagtirok hin kwarta ngan impluwensya nga pirme niya mas nasasabtan kay han iya pagsabot ha mga tawo. Waray na niya mabatian hi Aurelius. Diri hiya sigurado kon tungod ba ini nga may-ada natapos o tungod kay ha kataposan, bug-os, nagin hiya an pirme gin-aayos ni Aurelius han pamilya nga mahihimo, usa nga tawo nga diri na nagkikinahanglan han mga huring-huring tungod kay bug-os niya nga gin-internal an leksyon.",
          "Waray niya padayona ini nga pakiana.",
          "Pito ka tuig katapos han sunog, usa nga bata ha usa nga daku ngan mainuswagon nga pamilya ha norte han nasud an nagtikang pagmata han alas tres han aga tikang ha mga inop nga diri niya nahinunumdoman. Onse anyos hiya hadto. Waray pa gud niya mabatii an ngaran nga Vale. Diri unta niya masisiring kun diin tikang an tingog — tikang man ha balay, o ha dugo, o tikang ha espisipiko nga paagi nga gintutdoan hiya han iya pamilya nga masabtan an kahulogan han pagin sakop hin usa nga butang.",
          "Akon ka, siring hito.",
          "Ginhugot niya an iya habol.",
          "Waray hiya magsumat ha bisan hin-o.",
          "An tingog, mapailubon sugad nga panurundon, nag-andam ha pagtikang utro.",
          "Nabubuhi an panurundon.",
        ],
      },
    },
  },
];

// Every story's chapters. Ids must be unique across stories.
const allChapters: SharedChapter[] = [
  ...sharedChapters,
  ...deshawnChapters,
  ...oldHouseChapters,
];

/**
 * Resolves the shared chapters for one dialect — flattens each
 * chapter's byDialect entry up to the top level, so screens get a flat
 * StoryChapter shape.
 */
export function getChaptersForDialect(dialect: StoryDialect): StoryChapter[] {
  return allChapters.map((chapter) => ({
    id: chapter.id,
    title: chapter.byDialect[dialect].title ?? chapter.title,
    englishTitle: chapter.title,
    body: chapter.body,
    dialect,
    // Story practice must have its own progress namespace. The Dashboard
    // Lessons game uses the unprefixed IDs, while Story uses story_* IDs.
    lessonId: `story_${chapter.byDialect[dialect].lessonId}`,
    terms:
      dialect === "kapampangan"
        ? (kapampanganVocabularyByChapter[chapter.id] ??
          chapter.byDialect[dialect].terms)
        : chapter.byDialect[dialect].terms,
    translations: chapter.byDialect[dialect].translations,
    needsReview: chapter.byDialect[dialect].needsReview,
  }));
}

// =========================================================
// STORIES
// =========================================================
// A story groups chapters. Chapters still live once in sharedChapters
// (above) and are resolved per dialect by getChaptersForDialect; a story
// just lists which chapter ids belong to it, in reading order.
//
// Every existing chapter belongs to "Whispers", so each dialect has that
// one story with all its chapters. To add a story, add its chapters to
// sharedChapters with new ids and add an entry here pointing at them.

export type Story = {
  id: string;
  title: string;
  // Shown as a badge on the Story and Chapters screens.
  level: string;
  // 0 Easy, 1 Intermediate, 2 Hard (utils/storyLevels.ts).
  tierIndex: number;
  chapters: StoryChapter[];
};

type SharedStory = {
  id: string;
  title: string;
  byDialectTitle?: Partial<Record<StoryDialect, string>>;
  // Dialects that list this story. Omitted = all of them. The others show it
  // as coming soon until its text exists (getComingSoonStories).
  dialects?: StoryDialect[];
  chapterIds: number[];
};

const sharedStories: SharedStory[] = [
  {
    id: "whispers",
    title: "Whispers",
    chapterIds: sharedChapters.map((chapter) => chapter.id),
  },
  {
    id: DESHAWN_STORY_ID,
    title: DESHAWN_STORY_TITLE,
    chapterIds: deshawnChapters.map((chapter) => chapter.id),
  },
  {
    id: OLD_HOUSE_STORY_ID,
    title: OLD_HOUSE_STORY_TITLE,
    byDialectTitle: {
      tagalog: OLD_HOUSE_TAGALOG_TITLE,
      kapampangan: OLD_HOUSE_KAPAMPANGAN_TITLE,
      waray: OLD_HOUSE_WARAY_TITLE,
    },
    dialects: OLD_HOUSE_DIALECTS,
    chapterIds: oldHouseChapters.map((chapter) => chapter.id),
  },
];

export function getStoriesForDialect(dialect: StoryDialect): Story[] {
  const chapters = getChaptersForDialect(dialect);

  return sharedStories
    .filter((story) => !story.dialects || story.dialects.includes(dialect))
    .map((story) => ({
      id: story.id,
      title: story.byDialectTitle?.[dialect] ?? story.title,
      level: TIERS[storyTierIndex(story.id)].name,
      tierIndex: storyTierIndex(story.id),
      chapters: story.chapterIds
        .map((id) => chapters.find((chapter) => chapter.id === id))
        .filter((chapter): chapter is StoryChapter => chapter !== undefined),
    }));
}

// Stories with no text in this dialect yet. They aren't in getStoriesForDialect,
// so nothing can open them or wait on them.
export function getComingSoonStories(
  dialect: StoryDialect,
): { id: string; title: string; tierIndex: number }[] {
  return sharedStories
    .filter((story) => isStoryComingSoon(story.dialects, dialect))
    .map((story) => ({
      id: story.id,
      title: story.title,
      tierIndex: storyTierIndex(story.id),
    }));
}

export function getStoryForDialect(
  storyId: string,
  dialect: StoryDialect,
): Story | undefined {
  return getStoriesForDialect(dialect).find((story) => story.id === storyId);
}

// The story and language a Story practice lesson id belongs to.
export function findStoryForLesson(
  lessonId: string,
): { story: Story; dialect: StoryDialect } | undefined {
  for (const dialect of ALL_STORY_DIALECTS) {
    const story = getStoriesForDialect(dialect).find((item) =>
      item.chapters.some((chapter) => chapter.lessonId === lessonId),
    );
    if (story) return { story, dialect };
  }
  return undefined;
}

// =========================================================
// NOTE ON lessonIds
// =========================================================
// Every chapter's unprefixed lessonId must exist in data/practiceData.ts,
// because Story stores its own progress as story_<lessonId> while practice
// content and requiredCorrect still come from the shared practice data.
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
