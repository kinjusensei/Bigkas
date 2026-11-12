// utils/speech.ts
// Sends a recording to the Bigkas speech server (Sapin-sapin AI's Whisper
// models, utils/speech_server.py) and scores the answer.
//
// The app reaches it through the LibreFace server's /transcribe, so it uses
// the same address and access key as the expression check (ngrok works from
// any Wi-Fi). Set in .env.local / eas.json:
//   EXPO_PUBLIC_FER_SERVER_URL   e.g. https://your-name.ngrok-free.dev
//   EXPO_PUBLIC_FER_API_KEY      must match FER_API_KEY on the server
// EXPO_PUBLIC_SPEECH_API_URL still works to talk to port 8001 directly.

import { matchPhrase, type SpeechLanguage } from "./smartMatch.ts";

export type Dialect = SpeechLanguage;

const DIRECT_URL = process.env.EXPO_PUBLIC_SPEECH_API_URL;
const FER_URL =
  process.env.EXPO_PUBLIC_FER_SERVER_URL ??
  (process.env.EXPO_PUBLIC_FER_SERVER_HOST
    ? `http://${process.env.EXPO_PUBLIC_FER_SERVER_HOST}:8000`
    : undefined);

export const SPEECH_API_URL = (
  DIRECT_URL ??
  FER_URL ??
  "http://192.168.100.110:8001"
).replace(/\/+$/, "");

const API_KEY = process.env.EXPO_PUBLIC_FER_API_KEY ?? "";
const REQUEST_HEADERS: Record<string, string> = {
  // ngrok's free plan shows a warning page instead of the API unless asked not to.
  "ngrok-skip-browser-warning": "true",
  ...(API_KEY ? { "X-API-Key": API_KEY } : {}),
};

// The first request for a language loads its model on the server.
const TIMEOUT_MS = 30000;

export type SpeechResult = {
  transcript: string;
  /** 0 to 1. Lenient: ignores spelling variants such as c/k and o/u. */
  score: number;
  /** True when every expected word was heard, or the score is high enough. */
  matched: boolean;
};

const DIALECTS: Dialect[] = ["tagalog", "kapampangan", "waray"];

/** The lesson's dialect key as a speech language, or null if unsupported. */
export function toDialect(value: string | null | undefined): Dialect | null {
  const key = (value ?? "").trim().toLowerCase();
  return (DIALECTS as string[]).includes(key) ? (key as Dialect) : null;
}

/** Lowercase, strip punctuation, and fold common Filipino spelling variants. */
export function looseNormalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/’/g, "'")
    .replace(/[^\p{L}\p{N}\s']/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/c(?!h)/g, "k") // abac = abak
    .replace(/o/g, "u") //      komusta = kumusta
    .replace(/e/g, "i"); //     spelling variants of i/e
}

function levenshtein(a: string, b: string): number {
  const dp: number[] = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = dp[j];
      dp[j] =
        a[i - 1] === b[j - 1] ? prev : 1 + Math.min(prev, dp[j], dp[j - 1]);
      prev = tmp;
    }
  }
  return dp[b.length];
}

/** Similarity from 0 to 1 between what was heard and what should be said. */
export function similarity(heard: string, target: string): number {
  const a = looseNormalize(heard);
  const b = looseNormalize(target);
  if (!a && !b) return 1;
  if (!a || !b) return 0;
  return 1 - levenshtein(a, b) / Math.max(a.length, b.length);
}

export const MATCH_THRESHOLD = 0.8;

/** Judge a transcript against the target word or phrase. */
export function scoreTranscript(
  transcript: string,
  target: string,
  language: Dialect,
): SpeechResult {
  const score = similarity(transcript, target);
  const matched =
    !!transcript.trim() &&
    (matchPhrase(transcript, target, language).matched ||
      score >= MATCH_THRESHOLD);
  return { transcript, score, matched };
}

function audioType(uri: string): { name: string; type: string } {
  const ext = uri.split("?")[0].split(".").pop()?.toLowerCase();
  if (ext === "wav") return { name: "speech.wav", type: "audio/wav" };
  if (ext === "mp4" || ext === "m4a")
    return { name: "speech.m4a", type: "audio/m4a" };
  if (ext === "3gp") return { name: "speech.3gp", type: "audio/3gpp" };
  return { name: "speech.wav", type: "audio/wav" };
}

/**
 * Upload a recording and compare it with the target word.
 * Throws an Error with a readable message if the server cannot be reached.
 */
export async function checkSpeech(
  uri: string,
  language: Dialect,
  target: string,
): Promise<SpeechResult> {
  const form = new FormData();
  form.append("file", { uri, ...audioType(uri) } as any);
  form.append("language", language);
  form.append("target", target);

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  let res: Response;
  try {
    // Do not set Content-Type yourself; fetch adds the multipart boundary.
    res = await fetch(`${SPEECH_API_URL}/transcribe`, {
      method: "POST",
      headers: REQUEST_HEADERS,
      body: form,
      signal: controller.signal,
    });
  } catch {
    throw new Error("Cannot reach the speech server. Check your connection.");
  } finally {
    clearTimeout(timer);
  }

  const data = await res.json().catch(() => ({}));
  if (res.status === 401) {
    throw new Error("The speech server rejected the access key.");
  }
  if (!res.ok) {
    throw new Error(data?.detail ?? "The speech server returned an error.");
  }

  return scoreTranscript(String(data.transcript ?? ""), target, language);
}

/**
 * Second opinion for a word the phone's recognizer missed. Never throws:
 * returns null when the server is unreachable, so the lesson carries on.
 */
export async function secondOpinion(
  uri: string,
  language: Dialect,
  target: string,
): Promise<SpeechResult | null> {
  try {
    return await checkSpeech(uri, language, target);
  } catch (error) {
    console.log("🎤 Sapin-sapin check skipped:", (error as Error)?.message);
    return null;
  }
}
