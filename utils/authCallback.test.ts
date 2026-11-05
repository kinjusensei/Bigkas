import assert from "node:assert/strict";
import { describe, test } from "node:test";

import { parseAuthCallbackUrl } from "./authCallback.ts";

describe("parseAuthCallbackUrl", () => {
  test("reads the tokens from a confirmed link", () => {
    assert.deepEqual(
      parseAuthCallbackUrl(
        "bigkas://auth-callback#access_token=abc.def&expires_in=3600&refresh_token=xyz&token_type=bearer&type=signup",
      ),
      { kind: "session", accessToken: "abc.def", refreshToken: "xyz" },
    );
  });

  test("reads the error from the expired-link redirect Supabase really sends", () => {
    assert.deepEqual(
      parseAuthCallbackUrl(
        "bigkas://auth-callback#error=access_denied&error_code=otp_expired&error_description=Email+link+is+invalid+or+has+expired&sb=",
      ),
      {
        kind: "error",
        code: "otp_expired",
        description: "Email link is invalid or has expired",
      },
    );
  });

  test("returns none for a link with nothing to read", () => {
    assert.deepEqual(parseAuthCallbackUrl("bigkas://auth-callback"), {
      kind: "none",
    });
    assert.deepEqual(parseAuthCallbackUrl(null), { kind: "none" });
  });

  test("does not treat half a session as a session", () => {
    assert.deepEqual(
      parseAuthCallbackUrl("bigkas://auth-callback#access_token=abc"),
      { kind: "none" },
    );
  });
});
