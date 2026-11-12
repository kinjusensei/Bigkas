// The Bigkas server: LibreFace (/analyze) and, through it, the Sapin-sapin
// speech server (/transcribe). One address and access key for both, so it
// works from any Wi-Fi through ngrok. Set in .env.local / eas.json:
//   EXPO_PUBLIC_FER_SERVER_URL   e.g. https://your-name.ngrok-free.dev
//   EXPO_PUBLIC_FER_SERVER_HOST  or only a PC IP on the same Wi-Fi
//   EXPO_PUBLIC_FER_API_KEY      must match FER_API_KEY on the server
export const BIGKAS_SERVER_URL = (
  process.env.EXPO_PUBLIC_FER_SERVER_URL ??
  `http://${process.env.EXPO_PUBLIC_FER_SERVER_HOST ?? "192.168.100.110"}:8000`
).replace(/\/+$/, "");

const API_KEY = process.env.EXPO_PUBLIC_FER_API_KEY ?? "";

export const BIGKAS_SERVER_HEADERS: Record<string, string> = {
  // ngrok's free plan shows a warning page instead of the API unless asked not to.
  "ngrok-skip-browser-warning": "true",
  ...(API_KEY ? { "X-API-Key": API_KEY } : {}),
};
