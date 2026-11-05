import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { bigkas, MIN_TAP } from "../constant/bigkasTheme";
import { supabase } from "../services/supabase";
import { resolveAvatarSource } from "../utils/avatars";

type Dialect = "Tagalog" | "Kapampangan" | "Waray";

type LeaderboardEntry = {
  id: string;
  display_name: string | null;
  score: number;
  level: number;
  avatar_url: string | null;
};

type ProgressRecord = {
  user_id: string;
  lesson_id: string;
  score: number | null;
  // Best score with the win-streak bonus (sql/lesson_completions.sql).
  leaderboard_score?: number | null;
};

const DIALECTS: Dialect[] = ["Tagalog", "Kapampangan", "Waray"];

// Podium places in display order (2nd, 1st, 3rd).
const PODIUM = [
  { place: 2, height: 84, color: bigkas.podiumSilver },
  { place: 1, height: 124, color: bigkas.podiumGold },
  { place: 3, height: 60, color: bigkas.podiumBronze },
];

const INVITE_MESSAGE =
  "Learn Tagalog, Kapampangan and Waray with me on Bigkas, and let's see who tops the leaderboard!";

function getInitial(name: string | null): string {
  return (name ?? "?").charAt(0).toUpperCase();
}

function getName(name: string | null): string {
  return name ?? "Unknown";
}

function getDialectFromLessonId(lessonId: string): Dialect | null {
  const lower = lessonId.toLowerCase();

  if (lower.startsWith("tagalog_")) {
    return "Tagalog";
  }

  if (lower.startsWith("kapampangan_")) {
    return "Kapampangan";
  }

  if (lower.startsWith("waray_")) {
    return "Waray";
  }

  return null;
}

function EntryAvatar({
  entry,
  size,
  ring,
}: {
  entry: LeaderboardEntry;
  size: number;
  ring?: string;
}) {
  const circle = {
    width: size,
    height: size,
    borderRadius: size / 2,
    borderWidth: ring ? 3 : 0,
    borderColor: ring,
  };

  if (entry.avatar_url) {
    // Handles bundled presets ("preset:...") as well as photo URLs.
    return (
      <Image
        source={resolveAvatarSource(entry.avatar_url)}
        style={[circle, styles.avatarImage]}
      />
    );
  }

  return (
    <View style={[circle, styles.avatarFallback]}>
      <Text style={[styles.avatarInitial, { fontSize: size * 0.4 }]}>
        {getInitial(entry.display_name)}
      </Text>
    </View>
  );
}

export default function LeaderboardScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [selectedDialect, setSelectedDialect] = useState<Dialect>("Tagalog");

  const [allEntries, setAllEntries] = useState<
    Record<Dialect, LeaderboardEntry[]>
  >({
    Tagalog: [],
    Kapampangan: [],
    Waray: [],
  });

  const [loading, setLoading] = useState(true);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  // For the stat cards below the list.
  const [currentUserLevel, setCurrentUserLevel] = useState(1);
  const [winStreak, setWinStreak] = useState(0);

  useEffect(() => {
    loadLeaderboard();
  }, []);

  // Wins in a row, same read as the dashboard. Fail-soft.
  useEffect(() => {
    if (!currentUserId) return;
    supabase
      .from("winning_streaks")
      .select("current_streak")
      .eq("user_id", currentUserId)
      .maybeSingle()
      .then(({ data, error }) => {
        if (error) {
          console.warn("Leaderboard streak unavailable:", error.message);
        }
        setWinStreak(data?.current_streak ?? 0);
      });
  }, [currentUserId]);

  async function loadLeaderboard() {
    setLoading(true);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setCurrentUserId(user?.id ?? null);

      const { data: profiles, error: profilesError } = await supabase
        .from("profiles")
        .select("id, display_name, level, avatar_url")
        .limit(500);

      if (profilesError) {
        console.error(
          "Leaderboard profiles fetch error:",
          profilesError.message,
        );

        setAllEntries({
          Tagalog: [],
          Kapampangan: [],
          Waray: [],
        });

        setLoading(false);
        return;
      }

      setCurrentUserLevel(
        (profiles ?? []).find((profile) => profile.id === user?.id)?.level ?? 1,
      );

      // Practice games: the best score, or the best score with its
      // win-streak bonus when that is higher. Falls back to the plain score
      // if the bonus column hasn't been added yet.
      const withBonus = await supabase
        .from("lesson_progress")
        .select("user_id, lesson_id, score, leaderboard_score")
        .limit(5000);
      let progress: ProgressRecord[] | null = withBonus.data;
      let progressError = withBonus.error;

      if (progressError) {
        console.warn(
          "Leaderboard bonus scores unavailable:",
          progressError.message,
        );
        const plain = await supabase
          .from("lesson_progress")
          .select("user_id, lesson_id, score")
          .limit(5000);
        progress = plain.data;
        progressError = plain.error;
      }

      if (progressError) {
        console.error("Leaderboard score fetch error:", progressError.message);

        setAllEntries({
          Tagalog: [],
          Kapampangan: [],
          Waray: [],
        });

        setLoading(false);
        return;
      }

      const scores: Record<Dialect, Record<string, number>> = {
        Tagalog: {},
        Kapampangan: {},
        Waray: {},
      };

      // Structured lessons (e.g. Tagalog Lesson 1): the best assessment
      // score with its win-streak bonus. Skipped if unavailable.
      const { data: completions, error: completionsError } = await supabase
        .from("lesson_completions")
        .select("user_id, lesson_id, leaderboard_score")
        .gt("leaderboard_score", 0)
        .limit(5000);

      if (completionsError) {
        console.warn(
          "Leaderboard lesson scores unavailable:",
          completionsError.message,
        );
      }

      const records = [
        ...((progress ?? []) as ProgressRecord[]),
        ...((completions ?? []) as ProgressRecord[]).map((record) => ({
          ...record,
          score: 0,
        })),
      ];

      for (const record of records) {
        const dialect = getDialectFromLessonId(record.lesson_id);

        if (!dialect) {
          continue;
        }

        const userId = record.user_id;
        const score = Math.max(
          Number(record.score ?? 0),
          Number(record.leaderboard_score ?? 0),
        );

        scores[dialect][userId] = (scores[dialect][userId] ?? 0) + score;
      }

      const newLeaderboards: Record<Dialect, LeaderboardEntry[]> = {
        Tagalog: [],
        Kapampangan: [],
        Waray: [],
      };

      for (const dialect of DIALECTS) {
        newLeaderboards[dialect] = (profiles ?? [])
          .map((profile) => ({
            id: profile.id,
            display_name: profile.display_name,
            score: scores[dialect][profile.id] ?? 0,
            level: profile.level ?? 1,
            avatar_url: profile.avatar_url,
          }))
          .filter((entry) => entry.score > 0)
          .sort((a, b) => b.score - a.score);
      }

      setAllEntries(newLeaderboards);
    } catch (error) {
      console.error("Leaderboard load error:", error);

      setAllEntries({
        Tagalog: [],
        Kapampangan: [],
        Waray: [],
      });
    } finally {
      setLoading(false);
    }
  }

  function handleProfilePress(entry: LeaderboardEntry) {
    if (entry.id === currentUserId) {
      router.push("/user-profile" as any);
    } else {
      router.push(`/users/${entry.id}` as any);
    }
  }

  async function handleInvite() {
    try {
      await Share.share({ message: INVITE_MESSAGE });
    } catch (error) {
      console.warn("Invite share failed:", error);
    }
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={bigkas.primary} />

        <Text style={styles.loadingText}>Loading leaderboard...</Text>
      </View>
    );
  }

  const entries = allEntries[selectedDialect];

  const top3 = entries.slice(0, 3);
  const rest = entries.slice(3);

  const currentUserRank =
    entries.findIndex((entry) => entry.id === currentUserId) + 1;
  const currentUserScore =
    entries.find((entry) => entry.id === currentUserId)?.score ?? 0;

  return (
    <SafeAreaView style={styles.container} edges={["left", "right"]}>
      <View style={[styles.statusBarFill, { height: insets.top }]} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: insets.bottom + 32 }}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <Pressable
              style={styles.backButton}
              onPress={() => router.replace("/dashboard" as any)}
              hitSlop={8}
              accessibilityRole="button"
              accessibilityLabel="Back to dashboard"
            >
              <Ionicons name="chevron-back" size={24} color={bigkas.white} />
            </Pressable>

            <View style={styles.headerCenter}>
              <Text style={styles.headerTitle}>Leaderboard</Text>

              <Text style={styles.headerSubtitle}>
                Compete and keep learning
              </Text>
            </View>
          </View>

          <View style={styles.tabsContainer} accessibilityRole="tablist">
            {DIALECTS.map((dialect) => {
              const active = selectedDialect === dialect;

              return (
                <Pressable
                  key={dialect}
                  onPress={() => setSelectedDialect(dialect)}
                  style={[styles.tab, active && styles.tabActive]}
                  accessibilityRole="tab"
                  accessibilityState={{ selected: active }}
                  accessibilityLabel={`${dialect} leaderboard`}
                >
                  <Text
                    style={[styles.tabText, active && styles.tabTextActive]}
                    numberOfLines={1}
                    adjustsFontSizeToFit
                  >
                    {dialect}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        {/* YOUR RANK */}
        <View
          style={styles.yourRankCard}
          accessible
          accessibilityLabel={
            currentUserRank > 0
              ? `Your rank in ${selectedDialect}: ${currentUserRank}`
              : `You are not ranked in ${selectedDialect} yet`
          }
        >
          <View style={styles.yourRankIcon}>
            <Image
              source={require("../assets/images/leaderboard-crown.png")}
              style={styles.yourRankCrown}
              resizeMode="contain"
            />
          </View>

          <View style={styles.yourRankContent}>
            <Text style={styles.yourRankTitle} numberOfLines={1}>
              YOUR RANK · {selectedDialect.toUpperCase()}
            </Text>

            <Text style={styles.yourRankMessage}>
              {currentUserRank > 0
                ? "Keep going! You're doing great!"
                : `Complete a ${selectedDialect} lesson to appear on this leaderboard.`}
            </Text>
          </View>

          <Text style={styles.yourRankNumber}>
            {currentUserRank > 0 ? `#${currentUserRank}` : "–"}
          </Text>
        </View>

        {/* PODIUM */}
        <View style={styles.podiumCard}>
          <Text style={styles.sectionTitle}>Top learners</Text>

          <View style={styles.podium}>
            {PODIUM.map(({ place, height, color }) => {
              const entry = top3[place - 1];
              const first = place === 1;

              if (!entry) {
                return (
                  <View
                    key={place}
                    style={styles.podiumColumn}
                    accessible
                    accessibilityLabel={`Place ${place}, open spot`}
                  >
                    <View
                      style={[styles.openSpot, first && styles.openSpotFirst]}
                    >
                      <Ionicons name="add" size={22} color={bigkas.muted} />
                    </View>
                    <Text style={styles.openSpotText}>Open spot</Text>
                    <View
                      style={[
                        styles.podiumBase,
                        { height, backgroundColor: color },
                      ]}
                    >
                      <Text style={styles.podiumRank}>{place}</Text>
                    </View>
                  </View>
                );
              }

              return (
                <Pressable
                  key={place}
                  style={({ pressed }) => [
                    styles.podiumColumn,
                    pressed && styles.pressed,
                  ]}
                  onPress={() => handleProfilePress(entry)}
                  accessibilityRole="button"
                  accessibilityLabel={`Place ${place}, ${getName(
                    entry.display_name,
                  )}, ${entry.score} score`}
                >
                  {first && (
                    <Image
                      source={require("../assets/images/leaderboard-crown.png")}
                      style={styles.podiumCrown}
                      resizeMode="contain"
                    />
                  )}
                  <EntryAvatar
                    entry={entry}
                    size={first ? 68 : 52}
                    ring={first ? bigkas.podiumGold : undefined}
                  />
                  <Text style={styles.podiumName} numberOfLines={1}>
                    {getName(entry.display_name)}
                  </Text>
                  <View style={styles.scorePill}>
                    <Text style={styles.scorePillText} numberOfLines={1}>
                      {entry.score} score
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.podiumBase,
                      { height, backgroundColor: color },
                    ]}
                  >
                    <Text style={styles.podiumRank}>{place}</Text>
                  </View>
                </Pressable>
              );
            })}
          </View>

          {entries.length === 0 && (
            <Text style={styles.emptyText}>
              No scores yet. Complete a {selectedDialect} lesson to appear on
              this leaderboard.
            </Text>
          )}
        </View>

        {/* EVERYONE ELSE */}
        {rest.length > 0 && (
          <View style={styles.listCard}>
            <Text style={styles.sectionTitle}>All learners</Text>

            {rest.map((entry, index) => {
              const rank = index + 4;
              const isCurrentUser = entry.id === currentUserId;

              return (
                <Pressable
                  key={entry.id}
                  onPress={() => handleProfilePress(entry)}
                  style={({ pressed }) => [
                    styles.listRow,
                    isCurrentUser && styles.listRowCurrent,
                    pressed && styles.pressed,
                  ]}
                  accessibilityRole="button"
                  accessibilityLabel={`Rank ${rank}, ${getName(
                    entry.display_name,
                  )}${isCurrentUser ? ", you" : ""}, ${entry.score} score`}
                >
                  <Text style={styles.listRank}>{rank}</Text>

                  <EntryAvatar entry={entry} size={40} />

                  <View style={styles.listInfo}>
                    <Text style={styles.listName} numberOfLines={1}>
                      {getName(entry.display_name)}
                      {isCurrentUser ? " (you)" : ""}
                    </Text>
                    <Text style={styles.listLevel}>Level {entry.level}</Text>
                  </View>

                  <Text style={styles.listScore}>{entry.score}</Text>
                </Pressable>
              );
            })}
          </View>
        )}

        {/* MY STATS */}
        <View style={styles.statRow}>
          {[
            {
              icon: "star" as const,
              value: currentUserScore,
              label: "Score",
            },
            {
              icon: "trending-up" as const,
              value: currentUserLevel,
              label: "Level",
            },
            {
              icon: "flame" as const,
              value: winStreak,
              label: "Streak",
            },
          ].map((stat) => (
            <View
              key={stat.label}
              style={styles.statCard}
              accessible
              accessibilityLabel={`${stat.label}: ${stat.value}`}
            >
              <Ionicons name={stat.icon} size={20} color={bigkas.primary} />
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* INVITE */}
        <Pressable
          style={({ pressed }) => [
            styles.inviteButton,
            pressed && styles.pressed,
          ]}
          onPress={handleInvite}
          accessibilityRole="button"
        >
          <Ionicons
            name="person-add-outline"
            size={20}
            color={bigkas.primary}
          />
          <Text style={styles.inviteText}>Invite a friend to compete</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: bigkas.background,
    gap: 12,
  },

  loadingText: {
    fontSize: 15,
    color: bigkas.muted,
    fontWeight: "600",
  },

  container: {
    flex: 1,
    backgroundColor: bigkas.background,
  },

  statusBarFill: {
    backgroundColor: bigkas.primary,
  },

  pressed: {
    opacity: 0.75,
  },

  /* ---------------- HEADER ---------------- */

  header: {
    backgroundColor: bigkas.primary,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  backButton: {
    width: MIN_TAP,
    height: MIN_TAP,
    borderRadius: MIN_TAP / 2,
    backgroundColor: "rgba(255,255,255,0.14)",
    alignItems: "center",
    justifyContent: "center",
  },

  headerCenter: {
    flex: 1,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: bigkas.white,
  },

  headerSubtitle: {
    marginTop: 2,
    fontSize: 13,
    fontWeight: "600",
    color: "rgba(255,255,255,0.78)",
  },

  tabsContainer: {
    marginTop: 16,
    flexDirection: "row",
    gap: 6,
    padding: 4,
    borderRadius: 26,
    backgroundColor: "rgba(255,255,255,0.14)",
  },

  tab: {
    flex: 1,
    minHeight: MIN_TAP,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 6,
  },

  tabActive: {
    backgroundColor: bigkas.white,
  },

  tabText: {
    fontSize: 14,
    fontWeight: "700",
    color: bigkas.white,
  },

  tabTextActive: {
    color: bigkas.primary,
    fontWeight: "800",
  },

  /* ---------------- YOUR RANK ---------------- */

  yourRankCard: {
    marginTop: 16,
    marginHorizontal: 16,
    padding: 14,
    borderRadius: 20,
    backgroundColor: bigkas.white,
    borderWidth: 1,
    borderColor: bigkas.border,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  yourRankIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: bigkas.gold,
    alignItems: "center",
    justifyContent: "center",
  },

  yourRankCrown: {
    width: 28,
    height: 28,
  },

  yourRankContent: {
    flex: 1,
  },

  yourRankTitle: {
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 0.8,
    color: bigkas.muted,
  },

  yourRankMessage: {
    marginTop: 2,
    fontSize: 14,
    fontWeight: "600",
    color: bigkas.ink,
  },

  yourRankNumber: {
    fontSize: 30,
    fontWeight: "800",
    color: bigkas.primary,
  },

  /* ---------------- PODIUM ---------------- */

  podiumCard: {
    marginTop: 16,
    marginHorizontal: 16,
    padding: 16,
    paddingBottom: 0,
    borderRadius: 24,
    backgroundColor: bigkas.white,
    borderWidth: 1,
    borderColor: bigkas.border,
    overflow: "hidden",
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: bigkas.ink,
  },

  podium: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
  },

  podiumColumn: {
    flex: 1,
    alignItems: "center",
  },

  podiumCrown: {
    width: 30,
    height: 24,
    marginBottom: 2,
  },

  podiumName: {
    marginTop: 6,
    maxWidth: "100%",
    fontSize: 13,
    fontWeight: "800",
    color: bigkas.ink,
  },

  scorePill: {
    marginTop: 4,
    marginBottom: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    backgroundColor: bigkas.chip,
    maxWidth: "100%",
  },

  scorePillText: {
    fontSize: 11,
    fontWeight: "800",
    color: bigkas.primary,
  },

  podiumBase: {
    alignSelf: "stretch",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    alignItems: "center",
    paddingTop: 8,
  },

  podiumRank: {
    fontSize: 20,
    fontWeight: "800",
    color: bigkas.ink,
  },

  openSpot: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: bigkas.border,
    alignItems: "center",
    justifyContent: "center",
  },

  openSpotFirst: {
    width: 68,
    height: 68,
    borderRadius: 34,
  },

  openSpotText: {
    marginTop: 6,
    marginBottom: 8,
    fontSize: 12,
    fontWeight: "700",
    color: bigkas.muted,
  },

  emptyText: {
    paddingVertical: 14,
    textAlign: "center",
    fontSize: 13,
    fontWeight: "600",
    color: bigkas.muted,
  },

  /* ---------------- LIST ---------------- */

  listCard: {
    marginTop: 16,
    marginHorizontal: 16,
    padding: 12,
    borderRadius: 24,
    backgroundColor: bigkas.white,
    borderWidth: 1,
    borderColor: bigkas.border,
    gap: 4,
  },

  listRow: {
    minHeight: 56,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 14,
  },

  listRowCurrent: {
    backgroundColor: bigkas.chip,
  },

  listRank: {
    width: 26,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "800",
    color: bigkas.muted,
  },

  listInfo: {
    flex: 1,
    minWidth: 0,
  },

  listName: {
    fontSize: 15,
    fontWeight: "700",
    color: bigkas.ink,
  },

  listLevel: {
    fontSize: 12,
    color: bigkas.muted,
  },

  listScore: {
    fontSize: 16,
    fontWeight: "800",
    color: bigkas.primary,
  },

  /* ---------------- AVATARS ---------------- */

  avatarImage: {
    resizeMode: "cover",
  },

  avatarFallback: {
    backgroundColor: bigkas.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  avatarInitial: {
    color: bigkas.white,
    fontWeight: "800",
  },

  /* ---------------- STATS / INVITE ---------------- */

  statRow: {
    marginTop: 16,
    marginHorizontal: 16,
    flexDirection: "row",
    gap: 8,
  },

  statCard: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 18,
    backgroundColor: bigkas.white,
    borderWidth: 1,
    borderColor: bigkas.border,
    alignItems: "center",
  },

  statValue: {
    marginTop: 4,
    fontSize: 20,
    fontWeight: "800",
    color: bigkas.ink,
  },

  statLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: bigkas.muted,
  },

  inviteButton: {
    marginTop: 16,
    marginHorizontal: 16,
    minHeight: 52,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: bigkas.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingHorizontal: 16,
  },

  inviteText: {
    fontSize: 15,
    fontWeight: "800",
    color: bigkas.primary,
  },
});
