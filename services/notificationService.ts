import { supabase } from "./supabase";

export type NotificationKind = "global" | "report_response";

export type AppNotification = {
  id: string;
  kind: NotificationKind;
  title: string;
  body: string;
  report_id: string | null;
  created_at: string;
  is_read: boolean;
};

export async function getMyNotifications(limit = 50): Promise<AppNotification[]> {
  const { data, error } = await supabase.rpc("get_my_notifications", {
    p_limit: limit,
  });
  if (error) throw error;
  return (data ?? []) as AppNotification[];
}

export async function markNotificationsRead(ids: string[]): Promise<void> {
  if (ids.length === 0) return;
  const { error } = await supabase.rpc("mark_notifications_read", { p_ids: ids });
  if (error) throw error;
}

export async function markAllNotificationsRead(): Promise<void> {
  const { error } = await supabase.rpc("mark_all_notifications_read");
  if (error) throw error;
}

/** Supabase errors aren't always `instanceof Error`, so read .message defensively. */
export function errorMessage(e: unknown, fallback: string): string {
  const msg = (e as { message?: unknown } | null)?.message;
  return typeof msg === "string" && msg.length > 0 ? msg : fallback;
}
