// Structured lesson content (overview → vocabulary → greetings →
// self-introduction → conversation → activity → assessment → complete).
// Rendered by components/lesson/StructuredLessonFlow.tsx from
// app/lesson/[lessonId].tsx. Every section is optional: a section (or a
// card inside one) without data is skipped instead of shown empty, so
// other dialects can fill in only what they have.

export type LessonDialect = "tagalog" | "kapampangan" | "waray";

// One line of a short dialogue. `speaker` is shown as written ("A", "B",
// "Ana", "Mark").
// A single example sentence leaves `speaker` empty and may carry its
// English `translation`.
export interface LessonDialogueLine {
  speaker: string;
  text: string;
  translation?: string;
  audioUrl?: string;
}

export interface LessonVocabularyItem {
  term: string;
  meaning: string;
  // Syllable respelling, e.g. "ma-gan-dang u-ma-ga".
  pronunciation?: string;
  // "How to use it" card.
  usage?: string;
  example?: LessonDialogueLine[];
  audioUrl?: string;
}

export interface LessonGreeting {
  term: string;
  meaning: string;
  // Syllable respelling, e.g. "la-bing-i-sa".
  pronunciation?: string;
  usage?: string;
  example?: LessonDialogueLine[];
  audioUrl?: string;
}

export interface LessonSentencePattern {
  label: string;
  pattern: string;
  examples?: string[];
}

export interface LessonSentence {
  text: string;
  meaning: string;
  audioUrl?: string;
}

// A group of expressions (e.g. "Expressions of Gratitude") shown as word
// cards, with the group's usage examples underneath.
export interface LessonExpressionGroup {
  title: string;
  // Shown under the title, e.g. the pattern a group follows.
  intro?: string[];
  items: LessonGreeting[];
  examples?: LessonDialogueLine[][];
}

// One language note: paragraphs, an optional two-column table (e.g.
// ordinary → respectful), single examples, and a "Remember" tip.
export interface LessonLanguageNote {
  title: string;
  body?: string[];
  table?: {
    leftHeading: string;
    rightHeading: string;
    rows: { left: string; right: string }[];
  };
  examples?: LessonSentence[];
  remember?: string;
}

export interface LessonConversation {
  // Shown above the situation when a lesson has several conversations.
  title?: string;
  instructions?: string;
  situation?: string;
  lines: LessonDialogueLine[];
  comprehensionQuestions?: string[];
}

export interface LessonMatchPair {
  id: string;
  term: string;
  answer: string;
}

export interface LessonMatchActivity {
  title: string;
  instructions?: string;
  pairs: LessonMatchPair[];
}

export interface LessonAssessmentOption {
  key: string;
  text: string;
}

export interface LessonAssessmentQuestion {
  id: number;
  prompt: string;
  options: LessonAssessmentOption[];
  answerKey: string;
  // Several activities or assessment parts can share one choice step: a
  // question's own title and instructions are shown above it. `passage` is
  // the reading text or short dialogue the question is about.
  title?: string;
  instructions?: string;
  passage?: string;
}

// A practice multiple-choice activity (e.g. "Choose the Appropriate
// Response"): same screen as the assessment, but not scored for passing.
export interface LessonChoiceActivity {
  title: string;
  instructions?: string;
  questions: LessonAssessmentQuestion[];
}

export interface LessonAssessment {
  instructions?: string;
  // Percentage (0–100) needed to complete the lesson.
  passPercent: number;
  questions: LessonAssessmentQuestion[];
}

// Fill in the Blanks: `sentence` holds one "___" gap (any run of
// underscores); `hint` is the English cue shown after it.
export interface LessonFillBlankItem {
  id: string;
  sentence: string;
  hint?: string;
  answer: string;
  // Several activities can share one fill-in step (Lesson 3): an item's
  // own title, instructions and word bank replace the activity's. Items
  // with the same title are numbered together.
  title?: string;
  instructions?: string;
  wordBank?: string[];
}

export interface LessonFillBlanks {
  title: string;
  instructions?: string;
  // Chips offered for every item; defaults to all items' answers.
  wordBank?: string[];
  items: LessonFillBlankItem[];
}

// Arrange the Words: `words` are the tiles in the order the document
// lists them; `answer` is the tile order of the correct sentence and
// `display` the finished sentence as shown (capitals, punctuation).
export interface LessonArrangeItem {
  id: string;
  words: string[];
  answer: string[];
  display: string;
}

export interface LessonArrangeWords {
  title: string;
  instructions?: string;
  items: LessonArrangeItem[];
}

// Speaking practice (components/lesson/speaking). Target expression and
// pitch are not stored here: they come from the practice data
// (data/practiceData.ts, `practiceLessonId`) for phrases whose text
// matches, and the chips stay hidden for the rest.
export interface LessonSpeakingPhrase {
  id: string;
  text: string;
  // Syllable respelling; hidden when missing.
  respelling?: string;
  // English meaning; hidden when missing.
  meaning?: string;
  // Recorded model audio; without it "Listen" uses TTS.
  audioUrl?: string;
}

export interface LessonSpeaking {
  title: string;
  instructions?: string;
  note?: string;
  practiceLessonId?: string;
  phrases: LessonSpeakingPhrase[];
}

// Which part of the lesson earns a reward row. "sentences" and "speaking"
// are earned outside the 8-step flow (speaking = the practice screen).
export type LessonRewardSection =
  | "vocabulary"
  | "conversation"
  | "match"
  | "sentences"
  | "speaking"
  | "assessment"
  // Language notes have no XP; "notes" only marks them as reviewed.
  | "notes";

export interface LessonReward {
  section: LessonRewardSection;
  label: string;
  xp: number;
}

export interface LessonRewards {
  items: LessonReward[];
  total: number;
  badge?: { name: string; description?: string };
  completionRequirement?: string;
}

// Activities from the content document that have no screen yet; kept so
// they can be built later without re-copying the text.
export interface LessonExtraActivity {
  title: string;
  // What screen it would need: typed answers (translate, rewrite), the
  // learner's own words (open, roleplay), an existing kind whose answer
  // key is missing (match, choice, fill, arrange), or an assessment
  // question that isn't scored (assessment).
  kind?:
    | "translate"
    | "rewrite"
    | "roleplay"
    | "open"
    | "match"
    | "choice"
    | "fill"
    | "arrange"
    | "speaking"
    | "assessment"
    | "other";
  instructions?: string;
  // A multiple-choice item keeps its choices on the lines under its prompt.
  items: string[];
  // Shared answer choices or word bank.
  choices?: string[];
  // The document's answers, same order as `items`; "" where it has none.
  // Left out when the document has no answer key for the activity.
  answers?: string[];
  note?: string;
}

export interface LessonExampleSituation {
  description: string;
  lead?: string;
  line: string;
  translation?: string;
}

export interface StructuredLesson {
  // Matches PracticeLevel.lessonId in data/practiceData.ts.
  lessonId: string;
  dialect: LessonDialect;
  dialectLabel: string;
  lessonNumber: number;
  title: string;
  level?: string;
  unit?: string;
  // From the document's lesson information; not shown yet.
  estimatedDuration?: string;
  prerequisite?: string;
  languageVariety?: string;
  expectedOutcomes?: string[];
  intro?: string[];
  objectivesIntro?: string;
  objectives?: string[];
  exampleSituation?: LessonExampleSituation;
  // Further example situations, shown after the first.
  moreExampleSituations?: LessonExampleSituation[];
  vocabularyIntro?: string;
  vocabulary?: LessonVocabularyItem[];
  pronunciationTip?: string;
  greetings?: LessonGreeting[];
  // Grouped expressions (Lesson 2); their step counts as the vocabulary.
  expressionsIntro?: string;
  expressionGroups?: LessonExpressionGroup[];
  // A second set of groups shown after the language notes (Lesson 3:
  // numbers in everyday situations).
  situationsTitle?: string;
  situationsIntro?: string;
  situationGroups?: LessonExpressionGroup[];
  languageNotes?: LessonLanguageNote[];
  selfIntroIntro?: string;
  patterns?: LessonSentencePattern[];
  sentences?: LessonSentence[];
  conversation?: LessonConversation;
  // Several conversations, shown one at a time (used instead of
  // `conversation`).
  conversations?: LessonConversation[];
  matchActivity?: LessonMatchActivity;
  choiceActivity?: LessonChoiceActivity;
  fillInBlanks?: LessonFillBlanks;
  arrangeWords?: LessonArrangeWords;
  assessment?: LessonAssessment;
  speaking?: LessonSpeaking;
  rewards?: LessonRewards;
  extraActivities?: LessonExtraActivity[];
}
