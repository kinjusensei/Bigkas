import { deshawnTermRows, type DeshawnTermRow } from "../stories/deshawn.ts";
import type { StoryDialect } from "../storyData";
import type { ExpectedPracticeExpression } from "../../types/practice";
import type { StoryPracticeChapter, StoryPracticeQuestion } from "./types";

// "Story for Deshawn" chapter practice, in the same 10-question format as
// "The Secret Behind the Old House" (data/story-practice/oldHouse.ts).
// The earlier comprehension questions are kept in ./deshawnComprehension.ts.
//
// A chapter's 9 practice words are its 9 tap-to-explain words: each entry's
// `english` names a row in deshawnTermRows (data/stories/deshawn.ts), which
// holds the words in each language, so the two can't drift apart.
//
// DRAFT, needs a speaker's review: see docs/deshawn-practice-review.md.
// Regenerate it with: node scripts/generate-deshawn-practice-review.mjs
export type DeshawnPracticeWord = {
  // The row's English column, as written in the sentence.
  english: string;
  // Typed answers for Fill It In, both the written and the plain English form.
  acceptedAnswers: string[];
  // Three wrong options, each a word from elsewhere in the story.
  distractors: string[];
  // The card's form where it isn't the sentence's form lowercased, for example
  // without a linker ("puting" shows as "puti") or keeping a name's capitals.
  plain?: Partial<Record<StoryDialect, string>>;
};

export type DeshawnChapterPractice = {
  chapter: number;
  // Q1-4 Match Cards, Q5 Speak It, Q6 Translate, Q7 Fill It In, Q8 Translate,
  // Q9 Fill It In. Words with a space in any language stay in Q1-5, because
  // Q6-9 are the "this word" questions.
  words: DeshawnPracticeWord[];
  // Q10. The camera is optional and never affects the score.
  showIt: {
    prompt: string;
    expectedExpression: ExpectedPracticeExpression;
  };
};

const COLUMN: Record<StoryDialect, 2 | 3 | 4> = {
  tagalog: 2,
  kapampangan: 3,
  waray: 4,
};

export const deshawnWordRow = (
  chapter: number,
  english: string,
): DeshawnTermRow | undefined =>
  deshawnTermRows[chapter]?.find((row) => row[1] === english);

// The word as written in the chapter's sentence.
export const deshawnWrittenWord = (
  chapter: number,
  word: DeshawnPracticeWord,
  dialect: StoryDialect,
): string => deshawnWordRow(chapter, word.english)?.[COLUMN[dialect]] ?? "";

// The word as shown on the question card.
export const deshawnCardWord = (
  chapter: number,
  word: DeshawnPracticeWord,
  dialect: StoryDialect,
): string =>
  word.plain?.[dialect] ??
  deshawnWrittenWord(chapter, word, dialect).toLocaleLowerCase();

const capitalize = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

const choices = (word: DeshawnPracticeWord) => [
  capitalize(word.english),
  ...word.distractors.map(capitalize),
];

export const deshawnPractice: DeshawnChapterPractice[] = [
  {
    chapter: 1,
    words: [
      {
        english: "village",
        acceptedAnswers: ["village"],
        distractors: ["friends", "dark", "face"],
      },
      {
        english: "forest",
        acceptedAnswers: ["forest", "woods"],
        distractors: ["fear", "gift", "hand"],
      },
      {
        english: "mother",
        acceptedAnswers: ["mother"],
        distractors: ["firefly", "giant", "gifts"],
      },
      {
        english: "kind",
        acceptedAnswers: ["kind"],
        distractors: ["surprised", "angry", "large"],
      },
      {
        english: "flowers",
        acceptedAnswers: ["flowers", "flower"],
        distractors: ["kindness", "mountain", "hands"],
      },
      {
        english: "house",
        acceptedAnswers: ["house"],
        distractors: ["animal", "journey", "branch"],
      },
      {
        english: "sky",
        acceptedAnswers: ["sky", "heaven"],
        distractors: ["light", "river", "shoes"],
      },
      {
        english: "fairy",
        acceptedAnswers: ["fairy"],
        distractors: ["bridge", "friend", "ground"],
      },
      {
        english: "night",
        acceptedAnswers: ["night", "evening", "nighttime"],
        distractors: ["necklace", "pocket", "rabbit"],
      },
    ],
    showIt: {
      prompt: "Show how Lily felt when she dreamed of meeting a real fairy.",
      expectedExpression: "happy",
    },
  },
  {
    chapter: 2,
    words: [
      {
        english: "light",
        acceptedAnswers: ["light"],
        distractors: ["home", "path", "pile"],
      },
      {
        english: "shoes",
        acceptedAnswers: ["shoes"],
        distractors: ["flowers", "eye", "joy"],
      },
      {
        english: "firefly",
        acceptedAnswers: ["firefly"],
        distractors: ["fairy", "house", "night"],
      },
      {
        english: "bright",
        acceptedAnswers: ["bright"],
        distractors: ["colorful", "magical", "happy"],
        plain: { kapampangan: "masala" },
      },
      {
        english: "shining",
        acceptedAnswers: ["shining"],
        distractors: ["thanked", "touched", "fly"],
      },
      {
        english: "followed",
        acceptedAnswers: ["followed"],
        distractors: ["hugged", "opened", "smiled"],
      },
      {
        english: "trees",
        acceptedAnswers: ["trees", "tree"],
        distractors: ["stars", "voice", "moonlight"],
      },
      {
        english: "crying",
        acceptedAnswers: ["crying"],
        distractors: ["needed", "walked", "introduced"],
      },
      {
        english: "big",
        acceptedAnswers: ["big", "large"],
        distractors: ["afraid", "broken", "kind"],
        plain: { tagalog: "malaki" },
      },
    ],
    showIt: {
      prompt: "Show how Lily felt when she saw a strange light near the forest.",
      expectedExpression: "confused",
    },
  },
  {
    chapter: 3,
    words: [
      {
        english: "wings",
        acceptedAnswers: ["wings", "wing"],
        distractors: ["word", "trees", "water"],
      },
      {
        english: "fairy",
        acceptedAnswers: ["fairy"],
        distractors: ["years", "forest", "sky"],
      },
      {
        english: "golden",
        acceptedAnswers: ["golden"],
        distractors: ["lonely", "silver", "wooden"],
        plain: { tagalog: "ginto" },
      },
      {
        english: "face",
        acceptedAnswers: ["face"],
        distractors: ["sun", "way", "mother"],
      },
      {
        english: "star",
        acceptedAnswers: ["star", "stars"],
        distractors: ["stones", "turtle", "village"],
      },
      {
        english: "rock",
        acceptedAnswers: ["rock", "stone"],
        distractors: ["necklace", "moonlight", "journey"],
      },
      {
        english: "hands",
        acceptedAnswers: ["hands", "hand"],
        distractors: ["kindness", "mountain", "firefly"],
      },
      {
        english: "fly",
        acceptedAnswers: ["fly"],
        distractors: ["promised", "planted", "crying"],
      },
      {
        english: "home",
        acceptedAnswers: ["home", "house"],
        distractors: ["mother", "pocket", "rabbit"],
      },
    ],
    showIt: {
      prompt: "Show how the fairy felt when she lost her magic star.",
      expectedExpression: "sad",
    },
  },
  {
    chapter: 4,
    words: [
      {
        english: "help",
        acceptedAnswers: ["help"],
        distractors: ["asked", "shine", "visit"],
      },
      {
        english: "smile",
        acceptedAnswers: ["smile"],
        distractors: ["followed", "glowing", "goodbye"],
      },
      {
        english: "introduced",
        acceptedAnswers: ["introduced"],
        distractors: ["flew", "gave", "forget"],
      },
      {
        english: "fallen",
        acceptedAnswers: ["fallen"],
        distractors: ["visited", "resting", "shaking"],
      },
      {
        english: "moonlight",
        acceptedAnswers: ["moonlight"],
        distractors: ["wings", "rock", "turtle"],
      },
      {
        english: "search",
        acceptedAnswers: ["search"],
        distractors: ["shining", "flew", "gave"],
      },
      {
        english: "star",
        acceptedAnswers: ["star", "stars"],
        distractors: ["dark", "face", "fear"],
      },
      {
        english: "began",
        acceptedAnswers: ["began"],
        distractors: ["resting", "shaking", "shining"],
      },
      {
        english: "forest",
        acceptedAnswers: ["forest", "woods"],
        distractors: ["gift", "hand", "home"],
      },
    ],
    showIt: {
      prompt: "Show how Lily felt when she offered to help Stella.",
      expectedExpression: "happy",
    },
  },
  {
    chapter: 5,
    words: [
      {
        english: "white",
        acceptedAnswers: ["white"],
        distractors: ["long", "loud", "safe"],
        plain: { tagalog: "puti", kapampangan: "maputi" },
      },
      {
        english: "walked",
        acceptedAnswers: ["walked"],
        distractors: ["help", "began", "smile"],
      },
      {
        english: "thanked",
        acceptedAnswers: ["thanked"],
        distractors: ["fallen", "search", "touched"],
      },
      {
        english: "magical",
        acceptedAnswers: ["magical"],
        distractors: ["shiny", "sorry", "tall"],
        plain: { tagalog: "mahiwaga" },
      },
      {
        english: "animal",
        acceptedAnswers: ["animal"],
        distractors: ["eye", "joy", "sky"],
      },
      {
        english: "bright",
        acceptedAnswers: ["bright"],
        distractors: ["big", "old", "sad"],
        plain: { kapampangan: "masala" },
      },
      {
        english: "rabbit",
        acceptedAnswers: ["rabbit", "bunny"],
        distractors: ["flowers", "path", "pile"],
      },
      {
        english: "star",
        acceptedAnswers: ["star", "stars"],
        distractors: ["rock", "word", "fairy"],
      },
      {
        english: "river",
        acceptedAnswers: ["river"],
        distractors: ["branch", "friend", "ground"],
      },
    ],
    showIt: {
      prompt: "Show how Lily felt when she met a rabbit that could talk.",
      expectedExpression: "shocked",
    },
  },
  {
    chapter: 6,
    words: [
      {
        english: "wide",
        acceptedAnswers: ["wide"],
        distractors: ["white", "bright", "magical"],
      },
      {
        english: "wooden",
        acceptedAnswers: ["wooden"],
        distractors: ["golden", "surprised", "colorful"],
      },
      {
        english: "long",
        acceptedAnswers: ["long"],
        distractors: ["afraid", "bright", "lonely"],
        plain: { tagalog: "mahaba", kapampangan: "makaba" },
      },
      {
        english: "broken",
        acceptedAnswers: ["broken"],
        distractors: ["kind", "loud", "safe"],
      },
      {
        english: "branch",
        acceptedAnswers: ["branch"],
        distractors: ["star", "giant", "gifts"],
      },
      {
        english: "bridge",
        acceptedAnswers: ["bridge"],
        distractors: ["friends", "village", "star"],
      },
      {
        english: "water",
        acceptedAnswers: ["water"],
        distractors: ["hands", "house", "light"],
      },
      {
        english: "wings",
        acceptedAnswers: ["wings", "wing"],
        distractors: ["night", "shoes", "stars"],
      },
      {
        english: "river",
        acceptedAnswers: ["river"],
        distractors: ["animal", "forest", "stones"],
      },
    ],
    showIt: {
      prompt: "Show how Stella felt when Lily helped her cross the river.",
      expectedExpression: "happy",
    },
  },
  {
    chapter: 7,
    words: [
      {
        english: "Dark Mountain",
        acceptedAnswers: ["dark mountain"],
        distractors: ["wide river", "little village", "magic star"],
        plain: { tagalog: "Madilim na Bundok", kapampangan: "Madalumdum a Bunduk", waray: "Madulom nga Bukid" },
      },
      {
        english: "afraid",
        acceptedAnswers: ["afraid"],
        distractors: ["wide", "silver", "wooden"],
      },
      {
        english: "large",
        acceptedAnswers: ["large"],
        distractors: ["broken", "angry", "happy"],
        plain: { tagalog: "malaki" },
      },
      {
        english: "resting",
        acceptedAnswers: ["resting"],
        distractors: ["fly", "visited", "asked"],
      },
      {
        english: "giant",
        acceptedAnswers: ["giant"],
        distractors: ["bridge", "trees", "voice"],
      },
      {
        english: "old",
        acceptedAnswers: ["old"],
        distractors: ["long", "golden", "sad"],
        plain: { tagalog: "matanda", kapampangan: "matua" },
      },
      {
        english: "turtle",
        acceptedAnswers: ["turtle", "tortoise"],
        distractors: ["water", "wings", "years"],
      },
      {
        english: "rock",
        acceptedAnswers: ["rock", "stone"],
        distractors: ["sun", "way", "firefly"],
      },
      {
        english: "river",
        acceptedAnswers: ["river"],
        distractors: ["village", "dark", "face"],
      },
    ],
    showIt: {
      prompt: "Show how Lily felt when the turtle told her where the giant sleeps.",
      expectedExpression: "shocked",
    },
  },
  {
    chapter: 8,
    words: [
      {
        english: "Tall",
        acceptedAnswers: ["tall"],
        distractors: ["sorry", "white", "old"],
      },
      {
        english: "shiny",
        acceptedAnswers: ["shiny"],
        distractors: ["large", "angry", "happy"],
        plain: { kapampangan: "masala" },
      },
      {
        english: "pile",
        acceptedAnswers: ["pile"],
        distractors: ["river", "flowers", "friends"],
      },
      {
        english: "glowing",
        acceptedAnswers: ["glowing"],
        distractors: ["goodbye", "promised", "help"],
      },
      {
        english: "stones",
        acceptedAnswers: ["stones"],
        distractors: ["fairy", "giant", "gifts"],
      },
      {
        english: "path",
        acceptedAnswers: ["path"],
        distractors: ["hands", "house", "light"],
      },
      {
        english: "hand",
        acceptedAnswers: ["hand", "hands"],
        distractors: ["necklace", "eye", "joy"],
      },
      {
        english: "safe",
        acceptedAnswers: ["safe"],
        distractors: ["wide", "lonely", "silver"],
      },
      {
        english: "trees",
        acceptedAnswers: ["trees", "tree"],
        distractors: ["animal", "bridge", "night"],
      },
    ],
    showIt: {
      prompt: "Show how Lily felt when she saw the giant sleeping beside the stones.",
      expectedExpression: "shocked",
    },
  },
  {
    chapter: 9,
    words: [
      {
        english: "loud",
        acceptedAnswers: ["loud"],
        distractors: ["tall", "shiny", "kind"],
      },
      {
        english: "opened",
        acceptedAnswers: ["opened"],
        distractors: ["planted", "introduced", "shine"],
      },
      {
        english: "star",
        acceptedAnswers: ["star", "stars"],
        distractors: ["fear", "gift", "hand"],
      },
      {
        english: "pocket",
        acceptedAnswers: ["pocket"],
        distractors: ["kindness", "sky", "sun"],
      },
      {
        english: "voice",
        acceptedAnswers: ["voice"],
        distractors: ["river", "shoes", "stars"],
      },
      {
        english: "ground",
        acceptedAnswers: ["ground"],
        distractors: ["home", "path", "pile"],
      },
      {
        english: "eye",
        acceptedAnswers: ["eye", "eyes"],
        distractors: ["mother", "rabbit", "stones"],
      },
      {
        english: "mountain",
        acceptedAnswers: ["mountain", "mountains"],
        distractors: ["word", "moonlight", "trees"],
      },
      {
        english: "rock",
        acceptedAnswers: ["rock", "stone"],
        distractors: ["branch", "friend", "journey"],
      },
    ],
    showIt: {
      prompt: "Show how the giant looked when he asked who dared to enter his mountain.",
      expectedExpression: "angry",
    },
  },
  {
    chapter: 10,
    words: [
      {
        english: "shaking",
        acceptedAnswers: ["shaking"],
        distractors: ["crying", "fallen", "hugged"],
      },
      {
        english: "needed",
        acceptedAnswers: ["needed"],
        distractors: ["glowing", "began", "smile"],
      },
      {
        english: "sorry",
        acceptedAnswers: ["sorry"],
        distractors: ["big", "afraid", "bright"],
      },
      {
        english: "angry",
        acceptedAnswers: ["angry"],
        distractors: ["broken", "golden", "wooden"],
      },
      {
        english: "lonely",
        acceptedAnswers: ["lonely"],
        distractors: ["colorful", "large", "shiny"],
      },
      {
        english: "fear",
        acceptedAnswers: ["fear"],
        distractors: ["rock", "star", "mountain"],
      },
      {
        english: "sad",
        acceptedAnswers: ["sad", "unhappy"],
        distractors: ["surprised", "white", "big"],
      },
      {
        english: "way",
        acceptedAnswers: ["way"],
        distractors: ["voice", "water", "wings"],
      },
      {
        english: "years",
        acceptedAnswers: ["years", "year"],
        distractors: ["forest", "ground", "pocket"],
      },
    ],
    showIt: {
      prompt: "Show how the giant felt when he said he had been lonely for many years.",
      expectedExpression: "sad",
    },
  },
  {
    chapter: 11,
    words: [
      {
        english: "smiled",
        acceptedAnswers: ["smiled"],
        distractors: ["forget", "followed", "opened"],
      },
      {
        english: "promised",
        acceptedAnswers: ["promised"],
        distractors: ["needed", "walked", "flew"],
        plain: { tagalog: "nangako" },
      },
      {
        english: "asked",
        acceptedAnswers: ["asked"],
        distractors: ["search", "resting", "fly"],
      },
      {
        english: "surprised",
        acceptedAnswers: ["surprised"],
        distractors: ["magical", "old", "sad"],
      },
      {
        english: "happy",
        acceptedAnswers: ["happy"],
        distractors: ["sorry", "long", "loud"],
      },
      {
        english: "giant",
        acceptedAnswers: ["giant"],
        distractors: ["way", "years", "turtle"],
      },
      {
        english: "friend",
        acceptedAnswers: ["friend", "friends"],
        distractors: ["animal", "branch", "bridge"],
      },
      {
        english: "thanked",
        acceptedAnswers: ["thanked"],
        distractors: ["shaking", "shining", "began"],
      },
      {
        english: "visit",
        acceptedAnswers: ["visit", "visits", "visiting"],
        distractors: ["followed", "crying", "shine"],
      },
    ],
    showIt: {
      prompt: "Show how the giant felt when Lily asked to be his friend.",
      expectedExpression: "shocked",
    },
  },
  {
    chapter: 12,
    words: [
      {
        english: "golden light",
        acceptedAnswers: ["golden light"],
        distractors: ["silver necklace", "white rabbit", "blue water"],
      },
      {
        english: "beautiful flowers",
        acceptedAnswers: ["beautiful flowers"],
        distractors: ["wooden bridge", "shiny stones", "old turtle"],
      },
      {
        english: "touched",
        acceptedAnswers: ["touched"],
        distractors: ["visit", "thanked", "smiled"],
      },
      {
        english: "shine",
        acceptedAnswers: ["shine"],
        distractors: ["walked", "goodbye", "introduced"],
      },
      {
        english: "colorful",
        acceptedAnswers: ["colorful"],
        distractors: ["safe", "tall", "lonely"],
      },
      {
        english: "joy",
        acceptedAnswers: ["joy"],
        distractors: ["journey", "fairy", "giant"],
      },
      {
        english: "star",
        acceptedAnswers: ["star", "stars"],
        distractors: ["pocket", "rabbit", "stones"],
      },
      {
        english: "word",
        acceptedAnswers: ["word"],
        distractors: ["kindness", "mountain", "moonlight"],
      },
      {
        english: "wings",
        acceptedAnswers: ["wings", "wing"],
        distractors: ["village", "mother", "turtle"],
      },
    ],
    showIt: {
      prompt: "Show how the giant felt when he saw the colorful flowers.",
      expectedExpression: "happy",
    },
  },
  {
    chapter: 13,
    words: [
      {
        english: "goodbye",
        acceptedAnswers: ["goodbye"],
        distractors: ["asked", "smile", "thanked"],
      },
      {
        english: "kindness",
        acceptedAnswers: ["kindness"],
        distractors: ["forest", "friend", "ground"],
      },
      {
        english: "journey",
        acceptedAnswers: ["journey"],
        distractors: ["dark", "face", "fear"],
      },
      {
        english: "forget",
        acceptedAnswers: ["forget"],
        distractors: ["promised", "visit", "touched"],
      },
      {
        english: "rabbit",
        acceptedAnswers: ["rabbit", "bunny"],
        distractors: ["eye", "joy", "sky"],
      },
      {
        english: "village",
        acceptedAnswers: ["village"],
        distractors: ["firefly", "flowers", "way"],
      },
      {
        english: "sun",
        acceptedAnswers: ["sun"],
        distractors: ["necklace", "gifts", "hands"],
      },
      {
        english: "turtle",
        acceptedAnswers: ["turtle", "tortoise"],
        distractors: ["gift", "hand", "home"],
      },
      {
        english: "friends",
        acceptedAnswers: ["friends", "friend"],
        distractors: ["path", "pile", "star"],
      },
    ],
    showIt: {
      prompt: "Show how Lily felt when she made wonderful new friends.",
      expectedExpression: "happy",
    },
  },
  {
    chapter: 14,
    words: [
      {
        english: "silver",
        acceptedAnswers: ["silver"],
        distractors: ["wide", "angry", "happy"],
      },
      {
        english: "gave",
        acceptedAnswers: ["gave"],
        distractors: ["planted", "fallen", "forget"],
      },
      {
        english: "promised",
        acceptedAnswers: ["promised"],
        distractors: ["help", "needed", "opened"],
      },
      {
        english: "flew",
        acceptedAnswers: ["flew"],
        distractors: ["search", "smiled", "glowing"],
      },
      {
        english: "necklace",
        acceptedAnswers: ["necklace"],
        distractors: ["friends", "sun", "rock"],
      },
      {
        english: "dark",
        acceptedAnswers: ["dark"],
        distractors: ["word", "house", "light"],
      },
      {
        english: "star",
        acceptedAnswers: ["star", "stars"],
        distractors: ["night", "river", "shoes"],
      },
      {
        english: "hugged",
        acceptedAnswers: ["hugged"],
        distractors: ["visited", "shaking", "shining"],
      },
      {
        english: "gift",
        acceptedAnswers: ["gift", "present"],
        distractors: ["stars", "trees", "voice"],
      },
    ],
    showIt: {
      prompt: "Show how Lily felt when Stella gave her the silver necklace.",
      expectedExpression: "happy",
    },
  },
  {
    chapter: 15,
    words: [
      {
        english: "every day",
        acceptedAnswers: ["every day"],
        distractors: ["many years", "one night", "first time"],
      },
      {
        english: "stars",
        acceptedAnswers: ["stars"],
        distractors: ["water", "wings", "years"],
        plain: { tagalog: "bituin", waray: "bituon" },
      },
      {
        english: "happily ever after",
        acceptedAnswers: ["happily ever after"],
        distractors: ["once upon a time", "without the star", "under the moonlight"],
      },
      {
        english: "visited",
        acceptedAnswers: ["visited"],
        distractors: ["gave", "hugged", "introduced"],
      },
      {
        english: "necklace",
        acceptedAnswers: ["necklace"],
        distractors: ["journey", "firefly", "kindness"],
      },
      {
        english: "planted",
        acceptedAnswers: ["planted"],
        distractors: ["asked", "began", "shine"],
      },
      {
        english: "flowers",
        acceptedAnswers: ["flowers", "flower"],
        distractors: ["stones", "turtle", "fairy"],
      },
      {
        english: "gifts",
        acceptedAnswers: ["gifts"],
        distractors: ["friends", "moonlight", "eye"],
      },
      {
        english: "mountain",
        acceptedAnswers: ["mountain", "mountains"],
        distractors: ["joy", "sky", "sun"],
      },
    ],
    showIt: {
      prompt: "Show how Lily felt when she looked at the stars and remembered her adventure.",
      expectedExpression: "happy",
    },
  },
];

export function buildDeshawnQuestions(
  practice: DeshawnChapterPractice,
  dialect: StoryDialect,
): StoryPracticeQuestion[] {
  const shown = (word: DeshawnPracticeWord) =>
    deshawnCardWord(practice.chapter, word, dialect);
  const [a, b, c, d, speak, translate1, fill1, translate2, fill2] =
    practice.words;
  const card = (id: number, word: DeshawnPracticeWord): StoryPracticeQuestion => ({
    id,
    type: "card_match",
    word: shown(word),
    correctMeaning: capitalize(word.english),
    options: choices(word),
  });
  const translate = (
    id: number,
    word: DeshawnPracticeWord,
  ): StoryPracticeQuestion => ({
    id,
    type: "multiple_choice",
    word: shown(word),
    correctMeaning: capitalize(word.english),
    options: choices(word),
  });
  const fill = (id: number, word: DeshawnPracticeWord): StoryPracticeQuestion => ({
    id,
    type: "fill_blank",
    meaning: shown(word),
    correctWord: word.english,
    acceptedAnswers: word.acceptedAnswers,
  });

  return [
    card(1, a),
    card(2, b),
    card(3, c),
    card(4, d),
    { id: 5, type: "speak", word: shown(speak), micOptional: true },
    translate(6, translate1),
    fill(7, fill1),
    translate(8, translate2),
    fill(9, fill2),
    {
      id: 10,
      type: "expression",
      prompt: practice.showIt.prompt,
      expectedExpression: practice.showIt.expectedExpression,
      countsAsCompleted: true,
    },
  ];
}

export const DESHAWN_REQUIRED_CORRECT = 7;

const DIALECTS: StoryDialect[] = ["tagalog", "kapampangan", "waray"];

export const deshawnStoryPracticeChapters: StoryPracticeChapter[] =
  DIALECTS.flatMap((dialect) =>
    deshawnPractice.map((practice) => ({
      dialect,
      chapter: practice.chapter,
      lessonId: `story_${dialect}_deshawn_${practice.chapter}`,
      questions: buildDeshawnQuestions(practice, dialect),
      requiredCorrect: DESHAWN_REQUIRED_CORRECT,
      shuffleOptions: true,
    })),
  );
