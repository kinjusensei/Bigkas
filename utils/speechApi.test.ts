// API tests for the app's Sapin-sapin call (utils/speech.ts checkSpeech and
// secondOpinion): what the app sends and what it does with each server
// reply. `fetch` is replaced by a fake server; no network needed.
import assert from "node:assert/strict";
import { afterEach, describe, test } from "node:test";

import { checkSpeech, secondOpinion } from "./speech.ts";

const realFetch = globalThis.fetch;
afterEach(() => {
  globalThis.fetch = realFetch;
});

type Call = { url: string; init: RequestInit };

function fakeServer(reply: (call: Call) => Response): Call[] {
  const calls: Call[] = [];
  globalThis.fetch = (async (url: string, init: RequestInit) => {
    const call = { url: String(url), init };
    calls.push(call);
    return reply(call);
  }) as typeof fetch;
  return calls;
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });

describe("checkSpeech (POST /transcribe)", () => {
  test("sends the recording, language and target", async () => {
    const calls = fakeServer(() =>
      json({ language: "kapampangan", transcript: "mayap a bengi" }),
    );
    await checkSpeech("file:///rec.wav", "kapampangan", "mayap a bengi");
    assert.equal(calls.length, 1);
    assert.match(calls[0].url, /\/transcribe$/);
    assert.equal(calls[0].init.method, "POST");
    const form = calls[0].init.body as FormData;
    assert.equal(form.get("language"), "kapampangan");
    assert.equal(form.get("target"), "mayap a bengi");
    assert.ok(form.has("file"));
    const headers = calls[0].init.headers as Record<string, string>;
    assert.equal(headers["ngrok-skip-browser-warning"], "true");
  });

  test("a matching transcript counts as a match", async () => {
    fakeServer(() => json({ language: "tagalog", transcript: "Kumusta po" }));
    const result = await checkSpeech("file:///rec.wav", "tagalog", "kumusta");
    assert.equal(result.transcript, "Kumusta po");
    assert.equal(result.matched, true);
  });

  test("a different word doesn't match", async () => {
    fakeServer(() => json({ language: "tagalog", transcript: "salamat" }));
    const result = await checkSpeech("file:///rec.wav", "tagalog", "kumusta");
    assert.equal(result.matched, false);
  });

  test("an empty transcript doesn't match", async () => {
    fakeServer(() => json({ language: "waray", transcript: "" }));
    assert.equal((await checkSpeech("file:///r.wav", "waray", "maupay")).matched, false);
  });

  test("401 says the access key was rejected", async () => {
    fakeServer(() => json({ detail: "Invalid or missing access key." }, 401));
    await assert.rejects(
      checkSpeech("file:///rec.wav", "tagalog", "kumusta"),
      /rejected the access key/,
    );
  });

  test("503 passes the server's reason on", async () => {
    fakeServer(() => json({ detail: "Speech server is offline." }, 503));
    await assert.rejects(
      checkSpeech("file:///rec.wav", "tagalog", "kumusta"),
      /Speech server is offline/,
    );
  });

  test("no connection gives a readable error", async () => {
    globalThis.fetch = (async () => {
      throw new TypeError("Network request failed");
    }) as typeof fetch;
    await assert.rejects(
      checkSpeech("file:///rec.wav", "tagalog", "kumusta"),
      /Cannot reach the speech server/,
    );
  });
});

describe("secondOpinion (never blocks the lesson)", () => {
  test("returns the result when the server answers", async () => {
    fakeServer(() => json({ transcript: "mayap a abak" }));
    const result = await secondOpinion("file:///r.wav", "kapampangan", "mayap a abak");
    assert.equal(result?.matched, true);
  });

  test("returns null instead of throwing when offline", async () => {
    globalThis.fetch = (async () => {
      throw new TypeError("Network request failed");
    }) as typeof fetch;
    assert.equal(await secondOpinion("file:///r.wav", "tagalog", "kumusta"), null);
  });

  test("returns null on a server error", async () => {
    fakeServer(() => json({ detail: "Transcription failed" }, 500));
    assert.equal(await secondOpinion("file:///r.wav", "tagalog", "kumusta"), null);
  });
});
