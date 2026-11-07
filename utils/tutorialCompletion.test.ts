import assert from "node:assert/strict";
import { describe, test } from "node:test";

import { ensureProfileRow, saveTutorialCompleted } from "./tutorialCompletion.ts";

type Row = Record<string, unknown>;
type FakeOptions = {
  rows?: Row[];
  canUpdate?: boolean;
  canInsert?: boolean;
  ignoreWrites?: boolean;
};

// Behaves like PostgREST under RLS: a blocked or unmatched update returns no
// rows and no error; a blocked insert returns error 42501.
function fakeClient(options: FakeOptions) {
  const rows = options.rows ?? [];
  const { canUpdate = true, canInsert = true, ignoreWrites = false } = options;

  const client = {
    from: () => ({
      update: (values: Row) => ({
        eq: (_: string, id: string) => ({
          select: async () => {
            const matched = canUpdate ? rows.filter((r) => r.id === id) : [];
            if (!ignoreWrites) matched.forEach((r) => Object.assign(r, values));
            return { data: matched.map((r) => ({ id: r.id })), error: null };
          },
        }),
      }),
      insert: async (row: Row) => {
        if (!canInsert) {
          return {
            error: {
              code: "42501",
              message: "new row violates row-level security policy",
            },
          };
        }
        if (rows.some((r) => r.id === row.id)) {
          return { error: { code: "23505", message: "duplicate key" } };
        }
        rows.push(row);
        return { error: null };
      },
      select: () => ({
        eq: (_: string, id: string) => ({
          maybeSingle: async () => ({
            data: rows.find((r) => r.id === id) ?? null,
            error: null,
          }),
        }),
      }),
    }),
  };

  return { client: client as any, rows };
}

const user = {
  id: "new-user",
  email: "learner@example.com",
  user_metadata: {
    display_name: "Learner",
    privacy_accepted_at: "2026-11-06T00:00:00.000Z",
    privacy_version: "1",
    age_confirmed: true,
  },
};

describe("ensureProfileRow", () => {
  test("creates the row, with the sign-up details, when it is missing", async () => {
    const { client, rows } = fakeClient({});
    await ensureProfileRow(client, user);
    assert.deepEqual(rows[0], {
      id: user.id,
      email: user.email,
      display_name: "Learner",
      privacy_accepted_at: "2026-11-06T00:00:00.000Z",
      privacy_version: "1",
      age_confirmed: true,
    });
  });

  test("leaves an existing row alone", async () => {
    const existing = { id: user.id, tutorial_completed: true, xp: 50 };
    const { client, rows } = fakeClient({ rows: [{ ...existing }] });
    await ensureProfileRow(client, user);
    assert.deepEqual(rows, [existing]);
  });

  test("throws when RLS blocks creating the row", async () => {
    const { client } = fakeClient({ canInsert: false });
    await assert.rejects(ensureProfileRow(client, user), { code: "42501" });
  });
});

describe("saveTutorialCompleted", () => {
  test("marks an existing profile row as completed", async () => {
    const { client, rows } = fakeClient({
      rows: [{ id: user.id, tutorial_completed: false }],
    });
    await saveTutorialCompleted(client, user);
    assert.equal(rows[0].tutorial_completed, true);
  });

  test("creates the row, with the sign-up details, when it is missing", async () => {
    const { client, rows } = fakeClient({});
    await saveTutorialCompleted(client, user);
    assert.deepEqual(rows[0], {
      id: user.id,
      email: user.email,
      display_name: "Learner",
      privacy_accepted_at: "2026-11-06T00:00:00.000Z",
      privacy_version: "1",
      age_confirmed: true,
      tutorial_completed: true,
    });
  });

  test("throws when RLS blocks creating the row", async () => {
    const { client } = fakeClient({ canInsert: false });
    await assert.rejects(saveTutorialCompleted(client, user), {
      code: "42501",
    });
  });

  test("throws when RLS silently blocks updating an existing row", async () => {
    const { client } = fakeClient({
      rows: [{ id: user.id, tutorial_completed: false }],
      canUpdate: false,
    });
    await assert.rejects(
      saveTutorialCompleted(client, user),
      /could not be updated/,
    );
  });

  test("throws when the value read back is not saved", async () => {
    const { client } = fakeClient({
      rows: [{ id: user.id, tutorial_completed: false }],
      ignoreWrites: true,
    });
    await assert.rejects(saveTutorialCompleted(client, user), /did not save/);
  });
});
