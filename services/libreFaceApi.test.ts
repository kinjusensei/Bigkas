// API tests for the app's LibreFace call (services/libreFaceApi.ts): what
// the app does with each kind of server reply. `fetch` is replaced by a fake
// server, so no network or PC server is needed.
import assert from "node:assert/strict";
import { afterEach, describe, test } from "node:test";

import { analyzeFrame } from "./libreFaceApi.ts";

const realFetch = globalThis.fetch;
afterEach(() => {
  globalThis.fetch = realFetch;
});

type Call = { url: string; init: RequestInit };

function fakeServer(reply: (call: Call) => Response | Promise<Response>): Call[] {
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

describe("analyzeFrame (POST /analyze)", () => {
  test("sends the frame to /analyze with the ngrok header", async () => {
    const calls = fakeServer(() => json({ expression: "Neutral" }));
    await analyzeFrame("file:///cache/frame.jpg");
    assert.equal(calls.length, 1);
    assert.match(calls[0].url, /\/analyze$/);
    assert.equal(calls[0].init.method, "POST");
    const headers = calls[0].init.headers as Record<string, string>;
    assert.equal(headers["ngrok-skip-browser-warning"], "true");
    assert.ok(calls[0].init.body instanceof FormData);
  });

  test("200: LibreFace's expression becomes a reading", async () => {
    fakeServer(() =>
      json({ expression: "Happiness", head_pose: { pitch: 1 }, action_units: {} }),
    );
    assert.deepEqual(await analyzeFrame("file:///f.jpg"), {
      status: "ok",
      reading: "happy",
      raw: "Happiness",
    });
  });

  test("200 with an expression the app doesn't know: no reading", async () => {
    fakeServer(() => json({ expression: "Sleepy" }));
    const result = await analyzeFrame("file:///f.jpg");
    assert.equal(result.status, "ok");
    assert.equal(result.status === "ok" && result.reading, null);
  });

  test("401: wrong access key", async () => {
    fakeServer(() => json({ detail: "Invalid or missing access key." }, 401));
    assert.deepEqual(await analyzeFrame("file:///f.jpg"), { status: "unauthorized" });
  });

  test("422: no face in the frame (the server is still online)", async () => {
    fakeServer(() => json({ detail: "Analysis failed: no face" }, 422));
    assert.deepEqual(await analyzeFrame("file:///f.jpg"), { status: "no-face" });
  });

  test("ngrok's error page when the PC server is down counts as offline", async () => {
    fakeServer(() => new Response("<html>ERR_NGROK_3200</html>", { status: 404 }));
    assert.deepEqual(await analyzeFrame("file:///f.jpg"), {
      status: "offline",
      why: "HTTP 404",
    });
    fakeServer(() => new Response("bad gateway", { status: 502 }));
    assert.deepEqual(await analyzeFrame("file:///f.jpg"), {
      status: "offline",
      why: "HTTP 502",
    });
  });

  test("200 that isn't JSON counts as offline", async () => {
    fakeServer(() => new Response("<html>warning page</html>", { status: 200 }));
    assert.deepEqual(await analyzeFrame("file:///f.jpg"), {
      status: "offline",
      why: "not JSON",
    });
  });

  test("no connection counts as offline, never throws", async () => {
    fakeServer(() => {
      throw new TypeError("Network request failed");
    });
    assert.deepEqual(await analyzeFrame("file:///f.jpg"), {
      status: "offline",
      why: "no connection",
    });
  });

  test("a server that doesn't answer in time counts as offline", async () => {
    fakeServer(
      ({ init }) =>
        new Promise<Response>((_, reject) => {
          init.signal?.addEventListener("abort", () =>
            reject(Object.assign(new Error("aborted"), { name: "AbortError" })),
          );
        }),
    );
    assert.deepEqual(await analyzeFrame("file:///f.jpg", 30), {
      status: "offline",
      why: "timed out",
    });
  });
});
