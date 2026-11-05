import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";

import { REVIEW_MODE } from "../constant/devFlags";
import { supabase } from "../services/supabase";
import { TIER_LANGUAGES, TierLanguage, TIERS } from "../utils/lessonTiers";

// Opens the "New level unlocked" screen once per unlock (per user,
// language and level). The flag is kept on the device. The first time a
// user is checked, levels that are already open are recorded without a
// celebration, so it only appears for unlocks that happen from now on.

function storageKey(userId: string) {
  return `bigkas:celebratedTiers:${userId}`;
}

export function useLevelUnlockCelebration({
  loading,
  isTierOpen,
}: {
  loading: boolean;
  isTierOpen: (language: TierLanguage, tierIndex: number) => boolean;
}) {
  const router = useRouter();
  const checking = useRef(false);

  // Which levels are open right now, e.g. "tagalog:1".
  const openKeys: string[] = [];
  if (!loading) {
    for (const language of TIER_LANGUAGES) {
      for (let tier = 1; tier < TIERS.length; tier += 1) {
        if (isTierOpen(language, tier)) openKeys.push(`${language}:${tier}`);
      }
    }
  }
  const openSignature = loading ? null : openKeys.join(",");

  useEffect(() => {
    // Review mode opens every level, which isn't a real unlock. Recording those
    // would use up the celebrations for when the levels really open.
    if (REVIEW_MODE || openSignature === null || checking.current) return;
    checking.current = true;
    (async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        const userId = session?.user?.id;
        if (!userId) return;

        const open = openSignature ? openSignature.split(",") : [];
        const raw = await AsyncStorage.getItem(storageKey(userId));
        if (raw === null) {
          await AsyncStorage.setItem(storageKey(userId), JSON.stringify(open));
          return;
        }
        const celebrated = new Set<string>(JSON.parse(raw) as string[]);
        const fresh = open.find((key) => !celebrated.has(key));
        if (!fresh) return;

        celebrated.add(fresh);
        await AsyncStorage.setItem(
          storageKey(userId),
          JSON.stringify([...celebrated]),
        );
        const [language, tier] = fresh.split(":");
        router.push({
          pathname: "/level-unlocked",
          params: {
            dialect: language.charAt(0).toUpperCase() + language.slice(1),
            tier: TIERS[Number(tier)].key,
          },
        } as any);
      } catch (error) {
        console.warn("Level unlock check failed:", error);
      } finally {
        checking.current = false;
      }
    })();
    // router is stable enough; re-run only when the open levels change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openSignature]);
}
