import React from "react";

import DialectTerm from "../app/components/Story/DialectTerm";
import { DialectTermAnnotation } from "../data/storyData";

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
): React.ReactNode {
  const relevant = terms.filter((t) => t.paragraphIndex === paragraphIndex);
  if (relevant.length === 0) {
    return paragraph;
  }

  type Match = { start: number; end: number; term: DialectTermAnnotation };
  const matches: Match[] = [];

  relevant.forEach((term) => {
    const idx = paragraph.indexOf(term.match);
    if (idx === -1) return; // no match in this paragraph — skip silently
    matches.push({ start: idx, end: idx + term.match.length, term });
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
        term={m.term}
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
