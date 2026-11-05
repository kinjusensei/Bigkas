import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";

// Which earned badges the learner has already looked at, kept on the
// device (no network call). The first time, every badge earned so far
// counts as seen, so only badges earned after that show up as "new".
function storageKey(userId: string) {
  return `bigkas:seenBadges:${userId}`;
}

export function useSeenBadges(userId: string | null, earnedIds: string[]) {
  const [seen, setSeen] = useState<Set<string> | null>(null);
  const earnedKey = earnedIds.join(",");

  useEffect(() => {
    if (!userId) return;
    let cancelled = false;
    (async () => {
      let stored: string[] | null = null;
      try {
        const raw = await AsyncStorage.getItem(storageKey(userId));
        stored = raw ? (JSON.parse(raw) as string[]) : null;
      } catch {
        stored = null;
      }
      if (cancelled) return;
      if (stored) {
        setSeen(new Set(stored));
      } else {
        const initial = earnedKey ? earnedKey.split(",") : [];
        setSeen(new Set(initial));
        AsyncStorage.setItem(storageKey(userId), JSON.stringify(initial)).catch(
          () => {},
        );
      }
    })();
    return () => {
      cancelled = true;
    };
    // Only on first load for this user; later badges must stay "new".
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const newCount = seen ? earnedIds.filter((id) => !seen.has(id)).length : 0;

  const markAllSeen = useCallback(() => {
    if (!userId) return;
    const next = new Set(earnedKey ? earnedKey.split(",") : []);
    setSeen(next);
    AsyncStorage.setItem(storageKey(userId), JSON.stringify([...next])).catch(
      () => {},
    );
  }, [userId, earnedKey]);

  return { newCount, markAllSeen };
}
