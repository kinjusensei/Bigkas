import { useFocusEffect } from "expo-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { supabase } from "../services/supabase";
import {
  AppNotification,
  errorMessage,
  getMyNotifications,
  markAllNotificationsRead,
  markNotificationsRead,
} from "../services/notificationService";

/**
 * Loads the current user's notifications, refreshes whenever the screen
 * using it gains focus, and live-updates when a new notification is inserted.
 */
export function useNotifications() {
  const [items, setItems] = useState<AppNotification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Unique per hook instance: the bell and the inbox screen can both be
  // mounted at once, and two channels with the same name conflict.
  const channelName = useRef(`notifications-${Math.random().toString(36).slice(2)}`);

  const refresh = useCallback(async () => {
    try {
      const data = await getMyNotifications();
      setItems(data);
      setError(null);
    } catch (e) {
      setError(errorMessage(e, "Couldn't load notifications."));
    } finally {
      setLoading(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      refresh();
    }, [refresh])
  );

  useEffect(() => {
    const channel = supabase
      .channel(channelName.current)
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "notifications" },
        () => {
          refresh();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [refresh]);

  const markRead = useCallback(
    async (id: string) => {
      setItems((prev) => prev.map((n) => (n.id === id ? { ...n, is_read: true } : n)));
      try {
        await markNotificationsRead([id]);
      } catch {
        refresh();
      }
    },
    [refresh]
  );

  const markAllRead = useCallback(async () => {
    setItems((prev) => prev.map((n) => ({ ...n, is_read: true })));
    try {
      await markAllNotificationsRead();
    } catch {
      refresh();
    }
  }, [refresh]);

  const unreadCount = useMemo(() => items.filter((n) => !n.is_read).length, [items]);

  return { items, loading, error, unreadCount, refresh, markRead, markAllRead };
}
