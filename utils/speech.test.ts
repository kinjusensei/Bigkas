import assert from "node:assert/strict";
import { describe, test } from "node:test";

import { looseNormalize, scoreTranscript, similarity, toDialect } from "./speech.ts";

describe("toDialect", () => {
  test("accepts the three lesson languages in any case", () => {
    assert.equal(toDialect("tagalog"), "tagalog");
    assert.equal(toDialect(" Kapampangan "), "kapampangan");
    assert.equal(toDialect("waray"), "waray");
  });

  test("rejects anything else", () => {
    assert.equal(toDialect("english"), null);
    assert.equal(toDialect(""), null);
    assert.equal(toDialect(undefined), null);
  });
});

describe("scoreTranscript", () => {
  test("Whisper's capitals and punctuation don't matter", () => {
    assert.equal(scoreTranscript("Kumusta.", "kumusta", "tagalog").matched, true);
  });

  test("extra words around the target are fine (smart matching)", () => {
    assert.equal(scoreTranscript("kumusta po kayo", "kumusta", "tagalog").matched, true);
  });

  test("accepted variants count", () => {
    assert.equal(scoreTranscript("kamusta", "kumusta", "tagalog").matched, true);
  });

  test("phrases need every word, in order", () => {
    assert.equal(scoreTranscript("magandang umaga", "magandang umaga", "tagalog").matched, true);
    assert.equal(scoreTranscript("umaga", "magandang umaga", "tagalog").matched, false);
  });

  test("a different word or silence doesn't count", () => {
    assert.equal(scoreTranscript("salamat", "kumusta", "tagalog").matched, false);
    assert.equal(scoreTranscript("", "kumusta", "tagalog").matched, false);
    assert.equal(scoreTranscript("   ", "kumusta", "kapampangan").matched, false);
  });

  test("keeps the transcript and a 0..1 score", () => {
    const r = scoreTranscript("mayap a bengi", "Mayap a bengi", "kapampangan");
    assert.equal(r.transcript, "mayap a bengi");
    assert.equal(r.score, 1);
    assert.equal(r.matched, true);
  });
});

describe("similarity", () => {
  test("folds Filipino spelling variants", () => {
    assert.equal(looseNormalize("Komusta!"), "kumusta");
    assert.equal(similarity("abac", "abak"), 1);
  });
});
