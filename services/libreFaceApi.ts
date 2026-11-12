// The LibreFace API call (POST /analyze on the Bigkas server), on its own so
// `node --test` can check it (services/libreFaceApi.test.ts). The hook that
// captures frames is services/libreFace.ts.
import { BIGKAS_SERVER_HEADERS, BIGKAS_SERVER_URL } from "../constant/server.ts";
import { type FERReading, libreFaceToReading } from "../utils/fer.ts";

// Short, so a stopped server switches to the phone FER within seconds.
const REQUEST_TIMEOUT_MS = 6000;

export type FrameResult =
  | { status: "ok"; reading: FERReading | null; raw: string }
  | { status: "no-face" }
  | { status: "offline"; why: string }
  | { status: "unauthorized" };

/** Send one saved JPEG to LibreFace. Never throws. */
export async function analyzeFrame(
  uri: string,
  timeoutMs = REQUEST_TIMEOUT_MS,
): Promise<FrameResult> {
  const form = new FormData();
  form.append("file", { uri, name: "frame.jpg", type: "image/jpeg" } as any);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(`${BIGKAS_SERVER_URL}/analyze`, {
      method: "POST",
      headers: BIGKAS_SERVER_HEADERS,
      body: form,
      signal: controller.signal,
    });
    if (res.status === 401) return { status: "unauthorized" };
    if (res.status === 422) return { status: "no-face" };
    // ngrok answers 404/502 with its own page when the PC side is down.
    if (!res.ok) return { status: "offline", why: `HTTP ${res.status}` };
    const data = await res.json().catch(() => null);
    if (!data || typeof data !== "object") return { status: "offline", why: "not JSON" };
    const raw = String((data as any).expression ?? "");
    return { status: "ok", reading: libreFaceToReading(raw), raw };
  } catch (error) {
    const aborted = (error as Error)?.name === "AbortError";
    return { status: "offline", why: aborted ? "timed out" : "no connection" };
  } finally {
    clearTimeout(timer);
  }
}
