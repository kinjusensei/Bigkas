import React from "react";

import DialectTerm from "../app/components/Story/DialectTerm";
import { DialectTermAnnotation } from "../data/storyData";

type WarayVocabularyEntry = DialectTermAnnotation & { dialectMatch: string };

const WARAY_VOCABULARY: WarayVocabularyEntry[] = [
  {
    paragraphIndex: 0,
    match: "household",
    dialectMatch: "Panimalay",
    dialect: "Waray",
    explanation: 'Panimalay means "household" or "home."',
    audioUrl: require("../assets/audio/waray/panimalay.aac"),
  },
  // Audio recordings are not yet available for the remaining Waray entries.
  {
    paragraphIndex: 0,
    match: "estate",
    dialectMatch: "katunaan",
    dialect: "Waray",
    explanation: "Katunaan means an estate or a large property.",
    audioUrl: require("../assets/audio/waray/katunaan.aac"),
  },
  {
    paragraphIndex: 0,
    match: "gate",
    dialectMatch: "ganghaan",
    dialect: "Waray",
    explanation: "Ganghaan means gate or entrance.",
    audioUrl: require("../assets/audio/waray/ganghaan.aac"),
  },
  {
    paragraphIndex: 0,
    match: "cousin",
    dialectMatch: "Patud",
    dialect: "Waray",
    explanation: "Patud means cousin.",
    audioUrl: require("../assets/audio/waray/patud.aac"),
  },
  {
    paragraphIndex: 0,
    match: "cousins",
    dialectMatch: "mag paratud",
    dialect: "Waray",
    explanation: "Mag paratud means cousins.",
    audioUrl: require("../assets/audio/waray/mag paratud.aac"),
  },
  {
    paragraphIndex: 0,
    match: "cold",
    dialectMatch: "mahagkot",
    dialect: "Waray",
    explanation: "Mahagkot means cold or chilly.",
    audioUrl: require("../assets/audio/waray/mahagkot.aac"),
  },
  {
    paragraphIndex: 0,
    match: "fog",
    dialectMatch: "hamo-og",
    dialect: "Waray",
    explanation: "Hamo-og means fog.",
    audioUrl: require("../assets/audio/waray/hamo-og.aac"),
  },
  {
    paragraphIndex: 0,
    match: "grief",
    dialectMatch: "kasurob-on",
    dialect: "Waray",
    explanation: "Kasurob-on means sadness or grief.",
    audioUrl: require("../assets/audio/waray/kasurob-on.aac"),
  },
  {
    paragraphIndex: 0,
    match: "inheritance",
    dialectMatch: "panurundon",
    dialect: "Waray",
    explanation: "Panurundon means inheritance or legacy.",
    audioUrl: require("../assets/audio/waray/panurundon.aac"),
  },
  {
    paragraphIndex: 0,
    match: "honor",
    dialectMatch: "dungog",
    dialect: "Waray",
    explanation: "Dungog means honor or dignity.",
    audioUrl: require("../assets/audio/waray/dungog.aac"),
  },
  {
    paragraphIndex: 0,
    match: "reputation",
    dialectMatch: "reputasyon",
    dialect: "Waray",
    explanation: "Reputasyon means reputation or public standing.",
    audioUrl: require("../assets/audio/waray/reputasyon.aac"),
  },
  {
    paragraphIndex: 0,
    match: "custom",
    dialectMatch: "batasan",
    dialect: "Waray",
    explanation: "Batasan means a custom, habit, or usual practice.",
    audioUrl: require("../assets/audio/waray/batasan.aac"),
  },
  {
    paragraphIndex: 0,
    match: "fear",
    dialectMatch: "kahadlok",
    dialect: "Waray",
    explanation: "Kahadlok means fear.",
    audioUrl: require("../assets/audio/waray/kahadlok.aac"),
  },
  {
    paragraphIndex: 0,
    match: "murmurs",
    dialectMatch: "Huring-huring",
    dialect: "Waray",
    explanation: "Huring-huring means murmurs or quiet repeated sounds.",
    audioUrl: require("../assets/audio/waray/huring-huring.aac"),
  },
  {
    paragraphIndex: 0,
    match: "whisper",
    dialectMatch: "huring",
    dialect: "Waray",
    explanation: "Huring means whisper.",
    audioUrl: require("../assets/audio/waray/huring.aac"),
  },
  {
    paragraphIndex: 0,
    match: "breakfast",
    dialectMatch: "pamahaw",
    dialect: "Waray",
    explanation: "Pamahaw means breakfast.",
    audioUrl: require("../assets/audio/waray/pamahaw.aac"),
  },
  {
    paragraphIndex: 0,
    match: "dinner",
    dialectMatch: "paniklop",
    dialect: "Waray",
    explanation: "Paniklop means dinner, the evening meal.",
    audioUrl: require("../assets/audio/waray/paniklop.aac"),
  },
  {
    paragraphIndex: 0,
    match: "village",
    dialectMatch: "baryo",
    dialect: "Waray",
    explanation: "Baryo means village.",
    audioUrl: require("../assets/audio/waray/baryo.aac"),
  },
  {
    paragraphIndex: 0,
    match: "door",
    dialectMatch: "purtahan",
    dialect: "Waray",
    explanation: "Purtahan means door.",
    audioUrl: require("../assets/audio/waray/purtahan.aac"),
  },
  {
    paragraphIndex: 0,
    match: "window",
    dialectMatch: "bintana",
    dialect: "Waray",
    explanation: "Bintana means window.",
    audioUrl: require("../assets/audio/waray/bintana.aac"),
  },
  {
    paragraphIndex: 0,
    match: "wall",
    dialectMatch: "Bungbong",
    dialect: "Waray",
    explanation: "Bungbong means wall.",
    audioUrl: require("../assets/audio/waray/bungbong.aac"),
  },
  {
    paragraphIndex: 0,
    match: "wall",
    dialectMatch: "pader",
    dialect: "Waray",
    explanation: "Pader means wall.",
    audioUrl: require("../assets/audio/waray/pader.aac"),
  },
  {
    paragraphIndex: 0,
    match: "fire",
    dialectMatch: "kalayo",
    dialect: "Waray",
    explanation: "Kalayo means fire.",
    audioUrl: require("../assets/audio/waray/kalayo.aac"),
  },
  {
    paragraphIndex: 0,
    match: "water",
    dialectMatch: "tubig",
    dialect: "Waray",
    explanation: "Tubig means water.",
    audioUrl: require("../assets/audio/waray/tubig.aac"),
  },
  {
    paragraphIndex: 0,
    match: "truth",
    dialectMatch: "Kamatuoran",
    dialect: "Waray",
    explanation: "Kamatuoran means truth.",
    audioUrl: require("../assets/audio/waray/kamatuoran.aac"),
  },
  {
    paragraphIndex: 0,
    match: "truth",
    dialectMatch: "kamatuoron",
    dialect: "Waray",
    explanation: "Kamatuoron means truth.",
    audioUrl: require("../assets/audio/waray/kamatuoron.aac"),
  },
  {
    paragraphIndex: 0,
    match: "silence",
    dialectMatch: "kahilom",
    dialect: "Waray",
    explanation: "Kahilom means silence or quietness.",
    audioUrl: require("../assets/audio/waray/kahilom.aac"),
  },
  {
    paragraphIndex: 0,
    match: "hope",
    dialectMatch: "paglaom",
    dialect: "Waray",
    explanation: "Paglaom means hope.",
    audioUrl: require("../assets/audio/waray/paglaom.aac"),
  },
  {
    paragraphIndex: 0,
    match: "handwritten",
    dialectMatch: "agi",
    dialect: "Waray",
    explanation: "Agi refers to handwriting or a written hand.",
    audioUrl: require("../assets/audio/waray/agi.mp3"),
  },
  {
    paragraphIndex: 0,
    match: "None of them answered",
    dialectMatch: "Waray bisan hino ha ira bumaton",
    dialect: "Waray",
    explanation:
      'Waray bisan hino ha ira bumaton means "None of them answered."',
    audioUrl: require("../assets/audio/waray/Phrase_1.aac"),
  },
  {
    paragraphIndex: 0,
    match: "Lucien was already taking inventory of their belongings.",
    dialectMatch: "Nag-iimbentaryo na hi Lucien han mga butang ha ira.",
    dialect: "Waray",
    explanation:
      "This means that Lucien was already making an inventory of their belongings.",
    audioUrl: require("../assets/audio/waray/Nag-iimbentaryo na hi Lucien han mga butang ha ira.aac"),
  },
  {
    paragraphIndex: 0,
    match:
      "Don’t open the basement door under the house when it is already nighttime.",
    dialectMatch:
      "Ayaw abrihi an purtahan han bodega ha ilarom han balay kon gab-i na.",
    dialect: "Waray",
    explanation: "This is a warning not to open the basement door at night.",
    audioUrl: require("../assets/audio/waray/Ayaw abrihi an purtahan han bodega ha ilarom han balay kon gab-i na.aac"),
  },
  {
    paragraphIndex: 0,
    match: "A lie can be refuted",
    dialectMatch: "An buwa puydi mapamatud-an",
    dialect: "Waray",
    explanation: "This means that a lie can be disproved or shown to be false.",
    audioUrl: require("../assets/audio/waray/An buwa puydi mapamatud-an.aac"),
  },
  {
    paragraphIndex: 0,
    match: "The whispers might stop",
    dialectMatch: "Bangin umundang an mga huring",
    dialect: "Waray",
    explanation: "This means that the whispers might stop.",
    audioUrl: require("../assets/audio/waray/Bangin umundang an mga huring.aac"),
  },
];

function isWordCharacter(value: string | undefined): boolean {
  return (
    Boolean(value) &&
    (/[0-9]/.test(value!) ||
      value!.toLocaleUpperCase() !== value!.toLocaleLowerCase())
  );
}

function escapedRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Renders Waray source text with presentation-only vocabulary highlights. */
export function renderWarayHighlights(
  text: string,
  onTermPress: (term: DialectTermAnnotation) => void,
  existingTerms: DialectTermAnnotation[] = [],
  paragraphIndex = 0,
  // Off for a story whose highlighted words are exactly its own term list.
  includeSharedVocabulary = true,
): React.ReactNode {
  const candidates: {
    start: number;
    end: number;
    term: DialectTermAnnotation;
  }[] = [];

  const existingTermFor = (
    matchedText: string,
  ): DialectTermAnnotation | undefined => {
    const normalized = matchedText.toLocaleLowerCase();
    return existingTerms.find(
      (term) =>
        (term.dialectMatch ?? term.match).toLocaleLowerCase() === normalized,
    );
  };

  const termFor = (matchedText: string): DialectTermAnnotation => {
    const entry = WARAY_VOCABULARY.find(
      (candidate) =>
        candidate.dialectMatch.toLocaleLowerCase() ===
        matchedText.toLocaleLowerCase(),
    );
    const existing = existingTermFor(matchedText);
    if (existing) {
      return entry?.audioUrl
        ? { ...existing, audioUrl: entry.audioUrl }
        : existing;
    }

    return entry
      ? { ...entry, paragraphIndex }
      : {
          paragraphIndex,
          match: matchedText,
          dialectMatch: matchedText,
          dialect: "Waray",
          explanation:
            "No vocabulary entry is available for this source match yet.",
        };
  };

  const chapterWords = existingTerms.flatMap((term) =>
    term.dialectMatch ? [term.dialectMatch] : [],
  );
  [
    ...chapterWords,
    ...(includeSharedVocabulary
      ? WARAY_VOCABULARY.map((entry) => entry.dialectMatch)
      : []),
  ]
    .sort((left, right) => right.length - left.length)
    .forEach((term) => {
      const expression = new RegExp(escapedRegExp(term), "gi");
      let match: RegExpExecArray | null;
      while ((match = expression.exec(text)) !== null) {
        const start = match.index;
        const end = start + match[0].length;
        const first = text[start - 1];
        const last = text[end];
        const needsBoundary =
          isWordCharacter(term[0]) && isWordCharacter(term[term.length - 1]);
        if (
          (!needsBoundary ||
            (!isWordCharacter(first) && !isWordCharacter(last))) &&
          !candidates.some(
            (existing) => start < existing.end && end > existing.start,
          )
        ) {
          candidates.push({
            start,
            end,
            term: termFor(match[0]),
          });
        }
      }
    });

  if (candidates.length === 0) return text;

  candidates.sort((left, right) => left.start - right.start);
  const nodes: React.ReactNode[] = [];
  let cursor = 0;
  candidates.forEach((match, index) => {
    if (match.start > cursor) nodes.push(text.slice(cursor, match.start));
    nodes.push(
      <DialectTerm
        key={`waray-highlight-${index}`}
        term={{ ...match.term, match: text.slice(match.start, match.end) }}
        onPress={() => onTermPress(match.term)}
      />,
    );
    cursor = match.end;
  });
  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

// Splits a paragraph string into plain text + tappable DialectTerm
// pieces, based on `terms` annotations matching this paragraph's index.
// A `match` that doesn't literally appear in the paragraph is silently
// skipped (not thrown) — likely means a typo in match vs. the actual
// paragraph text, worth checking storyData.ts if a term seems to be
// missing rather than a crash to chase.

export function renderAnnotatedParagraph(
  paragraph: string,
  paragraphIndex: number,
  terms: DialectTermAnnotation[],
  onTermPress: (term: DialectTermAnnotation) => void,
  getMatch: (term: DialectTermAnnotation) => string = (term) => term.match,
): React.ReactNode {
  const relevant = terms.filter((t) => t.paragraphIndex === paragraphIndex);
  if (relevant.length === 0) {
    return paragraph;
  }

  type Match = {
    start: number;
    end: number;
    term: DialectTermAnnotation;
    displayMatch: string;
  };
  const matches: Match[] = [];

  relevant.forEach((term) => {
    const match = getMatch(term);
    const idx = term.dialectStart ?? paragraph.indexOf(match);
    if (idx === -1) return; // no match in this paragraph — skip silently
    matches.push({
      start: idx,
      end: idx + match.length,
      term,
      displayMatch: match,
    });
  });

  matches.sort((a, b) => a.start - b.start);

  const nodes: React.ReactNode[] = [];
  let cursor = 0;

  matches.forEach((m, i) => {
    if (m.start < cursor) return; // overlapping match — skip, first one wins
    if (m.start > cursor) {
      nodes.push(paragraph.slice(cursor, m.start));
    }
    nodes.push(
      <DialectTerm
        key={`term-${paragraphIndex}-${i}`}
        term={{ ...m.term, match: m.displayMatch }}
        onPress={() => onTermPress(m.term)}
      />,
    );
    cursor = m.end;
  });

  if (cursor < paragraph.length) {
    nodes.push(paragraph.slice(cursor));
  }

  return nodes;
}

// =========================================================
// Sentence pairing — for the line-by-line reading format
// =========================================================
// Splits an English paragraph and its dialect translation into
// sentences and pairs them up, so the reader can show one English
// sentence with its translation directly beneath.
//
// If the two don't split into the same number of sentences (different
// punctuation, a merged or split sentence in translation), this falls
// back to ONE pair holding the whole paragraph — better a long pair
// than sentences silently paired with the wrong translation.

export type SentencePair = {
  english: string;
  translated?: string;
};

function splitSentences(text: string): string[] {
  // Break after . ! ? when followed by whitespace and an opening
  // capital/quote. Keeps abbreviations like "Mr. Harwick" intact
  // because the following token is lowercase or part of the name.
  const parts = text.split(/(?<=[.!?])\s+(?=[A-ZÁÉÍÓÚÑ"'])/);
  return parts.map((p) => p.trim()).filter(Boolean);
}

export function pairSentences(
  paragraph: string,
  translation?: string,
): SentencePair[] {
  const trimmed = translation?.trim();

  if (!trimmed) {
    // No translation for this paragraph yet — still split the English
    // so the layout stays consistent with translated paragraphs.
    return splitSentences(paragraph).map((english) => ({ english }));
  }

  const en = splitSentences(paragraph);
  const tl = splitSentences(trimmed);

  if (en.length !== tl.length) {
    return [{ english: paragraph, translated: trimmed }];
  }

  return en.map((english, i) => ({ english, translated: tl[i] }));
}
