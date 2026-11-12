import assert from "node:assert/strict";
import { describe, test } from "node:test";

import {
  countByLabel,
  describeReading,
  FER_MODEL_CLASSES,
  FER_SELF_REPORT_OPTIONS,
  interpretScores,
  pixelsToFloatRgb,
  pushConfirmation,
  libreFaceToReading,
  readingNeedsHelp,
  uriToPath,
} from "./fer.ts";

// Run with: npm test

describe("FER model helpers", () => {
  test("the model classes are self-report labels, in folder (alphabetical) order", () => {
    const labels = FER_SELF_REPORT_OPTIONS.map((option) => option.label);
    for (const label of FER_MODEL_CLASSES) assert.ok(labels.includes(label), label);
    assert.deepEqual([...FER_MODEL_CLASSES], [...FER_MODEL_CLASSES].sort());
    assert.equal(new Set(FER_MODEL_CLASSES).size, FER_MODEL_CLASSES.length);
  });

  test("the model has all four self-report labels", () => {
    const labels = FER_SELF_REPORT_OPTIONS.map((option) => option.label);
    assert.deepEqual([...FER_MODEL_CLASSES], [...labels].sort());
  });

  test("picks the confident top class and ignores mismatched outputs", () => {
    const result = interpretScores([0.1, 0.7, 0.1, 0.1]);
    assert.equal(result?.emotion, "engaged");
    assert.equal(result?.confidence, 0.7);
    assert.equal(interpretScores([0.3, 0.3, 0.2, 0.2]), null); // below 0.6
    assert.equal(interpretScores([0.2, 0.8]), null); // 2 scores, 4 classes
  });

  test("confirms only after three agreeing predictions in a row", () => {
    let state = pushConfirmation([], "confused");
    state = pushConfirmation(state.recent, "confused");
    assert.equal(state.confirmed, false);
    state = pushConfirmation(state.recent, "confused");
    assert.equal(state.confirmed, true);
    state = pushConfirmation(state.recent, "neutral");
    assert.equal(state.confirmed, false);
    assert.equal(state.recent.length, 3);
  });

  test("converts RGBA and BGRA pixels to 0–1 RGB floats", () => {
    const close = (actual: Float32Array, expected: number[]) =>
      expected.forEach((value, i) => assert.ok(Math.abs(actual[i] - value) < 1e-6));
    close(pixelsToFloatRgb(new Uint8Array([255, 0, 51, 255]), 1, 1, "RGBA"), [1, 0, 0.2]);
    close(pixelsToFloatRgb(new Uint8Array([51, 0, 255, 255]), 1, 1, "BGRA"), [1, 0, 0.2]);
    assert.equal(pixelsToFloatRgb(new Uint8Array(3), 1, 1, "RGB").length, 3);
    assert.throws(() => pixelsToFloatRgb(new Uint8Array(4), 2, 2, "RGBA"));
  });

  test("describes readings from either FER and knows when to offer help", () => {
    assert.equal(describeReading("confused"), "a little confused");
    assert.equal(describeReading("engaged"), "engaged");
    assert.equal(describeReading("happy"), "happy"); // ML Kit fallback
    for (const r of ["confused", "frustrated", "sad", "angry"]) assert.ok(readingNeedsHelp(r), r);
    for (const r of ["engaged", "neutral", "happy", "unknown", null]) assert.ok(!readingNeedsHelp(r), String(r));
  });

  test("counts frames per label and turns file URIs into paths", () => {
    const counts = countByLabel([
      { path: "a", sessionId: "s", timestamp: 1, label: "engaged" },
      { path: "b", sessionId: "s", timestamp: 2 },
    ]);
    assert.deepEqual(counts, { engaged: 1, unlabeled: 1 });
    assert.equal(uriToPath("file:///data/my%20app/x.jpg"), "/data/my app/x.jpg");
  });
});

describe("libreFaceToReading", () => {
  test("maps LibreFace's eight expressions to learner-friendly words", () => {
    assert.equal(libreFaceToReading("Neutral"), "neutral");
    assert.equal(libreFaceToReading("Happiness"), "happy");
    assert.equal(libreFaceToReading("Sadness"), "sad");
    assert.equal(libreFaceToReading("Surprise"), "surprised");
    assert.equal(libreFaceToReading("Fear"), "worried");
    assert.equal(libreFaceToReading("Disgust"), "frustrated");
    assert.equal(libreFaceToReading("Anger"), "frustrated");
    assert.equal(libreFaceToReading("Contempt"), "frustrated");
  });

  test("is case- and space-tolerant, and rejects anything else", () => {
    assert.equal(libreFaceToReading("  happiness "), "happy");
    assert.equal(libreFaceToReading(""), null);
    assert.equal(libreFaceToReading("sleepy"), null);
    assert.equal(libreFaceToReading(null), null);
    assert.equal(libreFaceToReading(3), null);
  });

  test("the help readings include LibreFace's worried and sad", () => {
    assert.ok(readingNeedsHelp(libreFaceToReading("Fear")));
    assert.ok(readingNeedsHelp(libreFaceToReading("Sadness")));
    assert.ok(!readingNeedsHelp(libreFaceToReading("Happiness")));
  });
});
