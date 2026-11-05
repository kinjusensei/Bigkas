export type AuthCallbackResult =
  | { kind: "session"; accessToken: string; refreshToken: string }
  | { kind: "error"; code: string | null; description: string | null }
  | { kind: "none" };

function decode(value: string): string {
  const spaced = value.replace(/\+/g, " ");
  try {
    return decodeURIComponent(spaced);
  } catch {
    return spaced;
  }
}

// React Native's URLSearchParams is incomplete, so this splits by hand.
function parseParams(text: string): Record<string, string> {
  const params: Record<string, string> = {};
  for (const pair of text.split("&")) {
    const separator = pair.indexOf("=");
    if (separator > 0) {
      params[pair.slice(0, separator)] = decode(pair.slice(separator + 1));
    }
  }
  return params;
}

// Reads the result Supabase puts on the confirmation link's redirect, e.g.
// bigkas://auth-callback#access_token=...&refresh_token=...&type=signup
// or bigkas://auth-callback#error=access_denied&error_code=otp_expired&...
export function parseAuthCallbackUrl(
  url: string | null | undefined,
): AuthCallbackResult {
  if (!url) return { kind: "none" };

  const hashStart = url.indexOf("#");
  const beforeHash = hashStart < 0 ? url : url.slice(0, hashStart);
  const hash = hashStart < 0 ? "" : url.slice(hashStart + 1);
  const queryStart = beforeHash.indexOf("?");
  const query = queryStart < 0 ? "" : beforeHash.slice(queryStart + 1);

  const params = { ...parseParams(query), ...parseParams(hash) };

  if (params.error || params.error_code) {
    return {
      kind: "error",
      code: params.error_code ?? params.error ?? null,
      description: params.error_description ?? null,
    };
  }
  if (params.access_token && params.refresh_token) {
    return {
      kind: "session",
      accessToken: params.access_token,
      refreshToken: params.refresh_token,
    };
  }
  return { kind: "none" };
}
