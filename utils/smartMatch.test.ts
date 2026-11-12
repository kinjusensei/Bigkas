import assert from "node:assert/strict";
import { describe, test } from "node:test";
import {
  editDistance,
  normalizeWord,
  soundKey,
  wordsMatch,
} from "./smartMatch.ts";

describe("normalizeWord", () => {
  test("lowercases", () => {
    assert.equal(normalizeWord("Kumusta"), "kumusta");
  });

  test("removes accents and punctuation", () => {
    assert.equal(normalizeWord("kumustá!"), "kumusta");
    assert.equal(normalizeWord("Niño"), "nino");
  });

  test("removes hyphens and apostrophes", () => {
    assert.equal(normalizeWord("kasurob-on"), "kasurobon");
    assert.equal(normalizeWord("'tay"), "tay");
  });

  test("cleans up spaces", () => {
    assert.equal(normalizeWord("  Maupay   nga  Aga. "), "maupay nga aga");
  });

  test("handles empty text", () => {
    assert.equal(normalizeWord(""), "");
  });
  describe("soundKey", () => {
    test("o/u and e/i sound alike", () => {
      assert.equal(soundKey("kumusta"), soundKey("komusta"));
      assert.equal(soundKey("bengi"), soundKey("bingi"));
    });

    test("Spanish-style spellings match Filipino ones", () => {
      assert.equal(soundKey("cumusta"), soundKey("kumusta"));
      assert.equal(soundKey("chinelas"), soundKey("tsinelas"));
      assert.equal(soundKey("Queso"), soundKey("keso"));
    });

    test("doubled letters collapse", () => {
      assert.equal(soundKey("maaga"), soundKey("maga"));
    });

    test("different words stay different", () => {
      assert.notEqual(soundKey("kamusta"), soundKey("kumusta")); // Step 3 handles this
      assert.notEqual(soundKey("bahay"), soundKey("buhay"));
    });
  });
});

describe("editDistance", () => {
  test("counts substitutions, insertions and deletions", () => {
    assert.equal(editDistance("kamosta", "komosta"), 1); // substitute
    assert.equal(editDistance("salamat", "salamata"), 1); // insert
    assert.equal(editDistance("maupay", "mapay"), 1); // delete
    assert.equal(editDistance("abc", "abc"), 0);
    assert.equal(editDistance("", "abc"), 3);
  });
});

describe("wordsMatch", () => {
  test("accepts variants the speech service gives", () => {
    assert.ok(wordsMatch("kamusta", "kumusta"));
    assert.ok(wordsMatch("Kumustá!", "kumusta"));
    assert.ok(wordsMatch("komusta", "kumusta"));
  });

  test("short words must match exactly (after the sound key)", () => {
    assert.ok(!wordsMatch("bahay", "buhay"));
    assert.ok(!wordsMatch("aso", "ako"));
  });

  test("clearly different words don't match", () => {
    assert.ok(!wordsMatch("salamat", "kumusta"));
    assert.ok(!wordsMatch("", "kumusta"));
  });
});
