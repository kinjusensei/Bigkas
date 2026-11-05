// =========================================================
// IMPORT PATH: confirm this matches what practiceService.ts uses.
// =========================================================
import { decode } from "base64-arraybuffer";
import { supabase } from "./supabase";

export type BugReportCategory =
  | "crash"
  | "wrong_content"
  | "audio"
  | "camera"
  | "ui"
  | "other";

export type BugReportInput = {
  category: BugReportCategory;
  title: string;
  description: string;
  // Required — the screen won't let a report through without one.
  screenshotBase64: string;
  appVersion?: string;
  deviceInfo?: string;
};

/**
 * Uploads the screenshot to the private `bug-reports` bucket, then
 * writes the report row referencing it.
 *
 * Upload happens FIRST on purpose: if the image fails, no orphaned row
 * is created. The reverse order could leave rows whose screenshot_path
 * points at nothing, and the column is NOT NULL for a reason — a report
 * without its screenshot is the thing we're trying to avoid.
 */
export async function submitBugReport(input: BugReportInput): Promise<void> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("You need to be signed in to send a report.");
  }

  // Path must start with the user's id — the storage RLS policy checks
  // the first folder segment against auth.uid().
  const fileName = `${user.id}/${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 10)}.jpg`;

  const { error: uploadError } = await supabase.storage
    .from("bug-reports")
    .upload(fileName, decode(input.screenshotBase64), {
      contentType: "image/jpeg",
      upsert: false,
    });

  if (uploadError) {
    throw new Error(`Couldn't upload the screenshot: ${uploadError.message}`);
  }

  const { error: insertError } = await supabase.from("bug_reports").insert({
    user_id: user.id,
    user_email: user.email ?? null,
    category: input.category,
    title: input.title.trim(),
    description: input.description.trim(),
    screenshot_path: fileName,
    app_version: input.appVersion ?? null,
    device_info: input.deviceInfo ?? null,
  });

  if (insertError) {
    // Clean up the orphaned image so the bucket doesn't accumulate
    // uploads for reports that were never actually filed.
    await supabase.storage.from("bug-reports").remove([fileName]);
    throw new Error(`Couldn't send the report: ${insertError.message}`);
  }
}

export type BugReportRow = {
  id: string;
  category: string;
  title: string;
  description: string;
  status: string;
  created_at: string;
};

/** The current user's own reports, newest first. */
export async function getMyBugReports(): Promise<BugReportRow[]> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from("bug_reports")
    .select("id, category, title, description, status, created_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data ?? [];
}

export type BugReportMessage = {
  id: string;
  sender_role: "user" | "admin";
  body: string;
  created_at: string;
};

export type BugReportThread = {
  report: BugReportRow;
  messages: BugReportMessage[];
  // When an admin last opened the report (sql/report_seen.sql). Null if never,
  // or if that script hasn't been run yet.
  adminSeenAt: string | null;
};

/** One of the current user's reports plus every message on it, oldest first. */
export async function getBugReportThread(reportId: string): Promise<BugReportThread> {
  const [reportRes, messagesRes, seenRes] = await Promise.all([
    supabase
      .from("bug_reports")
      .select("id, category, title, description, status, created_at")
      .eq("id", reportId)
      .single(),
    supabase
      .from("bug_report_messages")
      .select("id, sender_role, body, created_at")
      .eq("report_id", reportId)
      .order("created_at", { ascending: true }),
    // Separate query so the thread still opens before report_seen.sql is run.
    supabase.from("bug_reports").select("admin_seen_at").eq("id", reportId).maybeSingle(),
  ]);

  if (reportRes.error) throw reportRes.error;
  if (messagesRes.error) throw messagesRes.error;

  return {
    report: reportRes.data,
    messages: (messagesRes.data ?? []) as BugReportMessage[],
    adminSeenAt: seenRes.error ? null : (seenRes.data?.admin_seen_at ?? null),
  };
}

/** Lets the admins see the user has read their replies. Failures are ignored on purpose. */
export async function markBugReportThreadSeen(reportId: string): Promise<void> {
  await supabase.rpc("mark_bug_report_seen_by_user", { p_report_id: reportId });
}

/** Sends a follow-up from the report's owner to the admins. */
export async function replyToBugReport(reportId: string, message: string): Promise<void> {
  const { error } = await supabase.rpc("reply_to_bug_report", {
    p_report_id: reportId,
    p_message: message,
  });
  if (error) throw error;
}
