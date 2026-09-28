import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "../services/supabase";

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
};

const DIALECTS: Dialect[] = ["Tagalog", "Kapampangan", "Waray"];

const DIALECT_PREFIX: Record<Dialect, string> = {
  Tagalog: "tagalog_",
  Kapampangan: "kapampangan_",
  Waray: "waray_",
};

const DIALECT_SUBTITLE: Record<Dialect, string> = {
  Tagalog: "Top learners in Tagalog",
  Kapampangan: "Top learners in Kapampangan",
  Waray: "Top learners in Waray",
};

const LEVEL_LABELS: Record<number, { label: string; color: string }> = {
  1: {
    label: "Beginner",
    color: "#6B7280",
  },
  2: {
    label: "Elementary",
    color: "#3B82F6",
  },
  3: {
    label: "Intermediate",
    color: "#8B5CF6",
  },
  4: {
    label: "Advanced",
    color: "#F59E0B",
  },
  5: {
    label: "Master",
    color: "#EF4444",
  },
};

const RANK_EMOJIS = ["🥇", "🥈", "🥉"];

const RANK_COLORS = ["#F59E0B", "#9CA3AF", "#D97706"];

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

export default function LeaderboardScreen() {
  const router = useRouter();

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

  useEffect(() => {
    loadLeaderboard();
  }, []);

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

      const { data: progress, error: progressError } = await supabase
        .from("lesson_progress")
        .select("user_id, lesson_id, score")
        .limit(5000);

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

      for (const record of (progress ?? []) as ProgressRecord[]) {
        const dialect = getDialectFromLessonId(record.lesson_id);

        if (!dialect) {
          continue;
        }

        const userId = record.user_id;
        const score = Number(record.score ?? 0);

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

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#410FA3" />

        <Text style={styles.loadingText}>Loading leaderboard...</Text>
      </View>
    );
  }

  const entries = allEntries[selectedDialect];

  const top3 = entries.slice(0, 3);
  const rest = entries.slice(3);

  const currentUserRank =
    entries.findIndex((entry) => entry.id === currentUserId) + 1;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <Pressable
            style={styles.backButton}
            onPress={() => router.replace("/dashboard" as any)}
            hitSlop={8}
          >
            <Text style={styles.backButtonText}>‹</Text>
          </Pressable>

          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle}>Leaderboard</Text>

            <Text style={styles.headerSubtitle}>Compete and keep learning</Text>
          </View>

          <View style={styles.headerSpacer} />
        </View>

        <View style={styles.tabsContainer}>
          {DIALECTS.map((dialect) => {
            const active = selectedDialect === dialect;

            return (
              <Pressable
                key={dialect}
                onPress={() => setSelectedDialect(dialect)}
                style={[styles.tab, active && styles.tabActive]}
              >
                <Text
                  style={[styles.tabText, active && styles.tabTextActive]}
                  numberOfLines={1}
                >
                  {dialect}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.heroCard}>
          <View style={styles.heroDecorationOne} />
          <View style={styles.heroDecorationTwo} />

          <View style={styles.heroTextContainer}>
            <Text style={styles.heroSmallText}>
              {selectedDialect.toUpperCase()}
            </Text>

            <Text style={styles.heroTitle}>Leaderboard</Text>

            <Text style={styles.heroSubtitle}>
              {DIALECT_SUBTITLE[selectedDialect]}
            </Text>
          </View>

          <View style={styles.heroTrophy}>
            <Image
              source={require("../assets/images/leaderboard-trophy.png")}
              style={styles.heroTrophyImage}
              resizeMode="contain"
            />
          </View>
        </View>

        {currentUserRank > 0 && (
          <View style={styles.yourRankCard}>
            <View style={styles.yourRankIcon}>
              <Image
                source={require("../assets/images/leaderboard-crown.png")}
                style={styles.crownImage}
                resizeMode="contain"
              />
            </View>

            <View style={styles.yourRankContent}>
              <Text style={styles.yourRankTitle}>Your Rank</Text>

              <Text style={styles.yourRankMessage}>
                Keep going! You&apos;re doing great!
              </Text>
            </View>

            <Text style={styles.yourRankNumber}>#{currentUserRank}</Text>
          </View>
        )}

        {entries.length === 0 && (
          <View style={styles.emptyCard}>
            <Image
              source={require("../assets/images/leaderboard-trophy.png")}
              style={styles.trophyImage}
              resizeMode="contain"
            />

            <Text style={styles.emptyTitle}>No scores yet</Text>

            <Text style={styles.emptySubtitle}>
              Complete a {selectedDialect} lesson to appear on this leaderboard.
            </Text>
          </View>
        )}

        {top3.length > 0 && (
          <View style={styles.podiumSection}>
            <Text style={styles.sectionTitle}>Top Learners</Text>

            <View style={styles.podium}>
              {top3[1] ? (
                <Pressable
                  style={({ pressed }) => [
                    styles.podiumPerson,
                    styles.secondPlace,
                    pressed && styles.pressed,
                  ]}
                  onPress={() => handleProfilePress(top3[1])}
                >
                  <Text style={styles.medal}>{RANK_EMOJIS[1]}</Text>

                  <View
                    style={[
                      styles.podiumAvatar,
                      {
                        borderColor: RANK_COLORS[1],
                      },
                    ]}
                  >
                    {top3[1].avatar_url ? (
                      <Image
                        source={{
                          uri: top3[1].avatar_url,
                        }}
                        style={styles.avatarImage}
                      />
                    ) : (
                      <Text style={styles.avatarInitial}>
                        {getInitial(top3[1].display_name)}
                      </Text>
                    )}
                  </View>

                  <Text style={styles.podiumName} numberOfLines={1}>
                    {getName(top3[1].display_name)}
                  </Text>

                  <Text style={styles.podiumScore}>{top3[1].score} Score</Text>

                  <View style={[styles.podiumBase, styles.secondBase]}>
                    <Text style={styles.podiumRank}>#2</Text>
                  </View>
                </Pressable>
              ) : (
                <View style={styles.podiumPlaceholder} />
              )}

              {top3[0] && (
                <Pressable
                  style={({ pressed }) => [
                    styles.podiumPerson,
                    styles.firstPlace,
                    pressed && styles.pressed,
                  ]}
                  onPress={() => handleProfilePress(top3[0])}
                >
                  <Image
                    source={require("../assets/images/leaderboard-crown.png")}
                    style={styles.crownImage}
                    resizeMode="contain"
                  />

                  <View
                    style={[
                      styles.podiumAvatar,
                      styles.firstAvatar,
                      {
                        borderColor: RANK_COLORS[0],
                      },
                    ]}
                  >
                    {top3[0].avatar_url ? (
                      <Image
                        source={{
                          uri: top3[0].avatar_url,
                        }}
                        style={styles.avatarImage}
                      />
                    ) : (
                      <Text
                        style={[
                          styles.avatarInitial,
                          {
                            fontSize: 22,
                          },
                        ]}
                      >
                        {getInitial(top3[0].display_name)}
                      </Text>
                    )}
                  </View>

                  <Text style={styles.podiumName} numberOfLines={1}>
                    {getName(top3[0].display_name)}
                  </Text>

                  <Text style={styles.podiumScore}>{top3[0].score} Score</Text>

                  <View style={[styles.podiumBase, styles.firstBase]}>
                    <Text style={styles.podiumRank}>#1</Text>
                  </View>
                </Pressable>
              )}

              {top3[2] ? (
                <Pressable
                  style={({ pressed }) => [
                    styles.podiumPerson,
                    styles.thirdPlace,
                    pressed && styles.pressed,
                  ]}
                  onPress={() => handleProfilePress(top3[2])}
                >
                  <Text style={styles.medal}>{RANK_EMOJIS[2]}</Text>

                  <View
                    style={[
                      styles.podiumAvatar,
                      {
                        borderColor: RANK_COLORS[2],
                      },
                    ]}
                  >
                    {top3[2].avatar_url ? (
                      <Image
                        source={{
                          uri: top3[2].avatar_url,
                        }}
                        style={styles.avatarImage}
                      />
                    ) : (
                      <Text style={styles.avatarInitial}>
                        {getInitial(top3[2].display_name)}
                      </Text>
                    )}
                  </View>

                  <Text style={styles.podiumName} numberOfLines={1}>
                    {getName(top3[2].display_name)}
                  </Text>

                  <Text style={styles.podiumScore}>{top3[2].score} Score</Text>

                  <View style={[styles.podiumBase, styles.thirdBase]}>
                    <Text style={styles.podiumRank}>#3</Text>
                  </View>
                </Pressable>
              ) : (
                <View style={styles.podiumPlaceholder} />
              )}
            </View>
          </View>
        )}

        {rest.length > 0 && (
          <View style={styles.playersSection}>
            <Text style={styles.sectionTitle}>All Learners</Text>

            {rest.map((entry, index) => {
              const rank = index + 4;

              const isCurrentUser = entry.id === currentUserId;

              const levelInfo = LEVEL_LABELS[entry.level] ?? LEVEL_LABELS[1];

              return (
                <Pressable
                  key={entry.id}
                  onPress={() => handleProfilePress(entry)}
                  style={({ pressed }) => [
                    styles.playerCard,
                    isCurrentUser && styles.playerCardCurrent,
                    pressed && styles.pressed,
                  ]}
                >
                  <View style={styles.rankContainer}>
                    <Text style={styles.rankNumber}>{rank}</Text>
                  </View>

                  <View
                    style={[
                      styles.playerAvatar,
                      isCurrentUser && {
                        borderColor: "#410FA3",
                      },
                    ]}
                  >
                    {entry.avatar_url ? (
                      <Image
                        source={{
                          uri: entry.avatar_url,
                        }}
                        style={styles.avatarImage}
                      />
                    ) : (
                      <Text style={styles.avatarInitial}>
                        {getInitial(entry.display_name)}
                      </Text>
                    )}
                  </View>

                  <View style={styles.playerInfo}>
                    <Text
                      style={[
                        styles.playerName,
                        isCurrentUser && {
                          color: "#410FA3",
                        },
                      ]}
                      numberOfLines={1}
                    >
                      {getName(entry.display_name)}

                      {isCurrentUser ? " (you)" : ""}
                    </Text>

                    <Text
                      style={[
                        styles.playerLevel,
                        {
                          color: levelInfo.color,
                        },
                      ]}
                    >
                      Lv.{entry.level} · {levelInfo.label}
                    </Text>
                  </View>

                  <View style={styles.scoreContainer}>
                    <Text style={styles.playerScore}>{entry.score}</Text>

                    <Text style={styles.scoreLabel}>Score</Text>
                  </View>

                  <Text style={styles.chevron}>›</Text>
                </Pressable>
              );
            })}
          </View>
        )}

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9F8FF",
    gap: 12,
  },

  loadingText: {
    fontSize: 15,
    color: "#666666",
    fontWeight: "600",
  },

  container: {
    flex: 1,
    backgroundColor: "#F9F8FF",
  },

  scrollContent: {
    paddingBottom: 20,
  },

  header: {
    minHeight: 92,
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 14,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEAF8",
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0ECFF",
  },

  backButtonText: {
    fontSize: 34,
    lineHeight: 38,
    color: "#410FA3",
    fontWeight: "300",
  },

  headerCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  headerTitle: {
    fontSize: 26,
    fontWeight: "900",
    color: "#16113F",
  },

  headerSubtitle: {
    marginTop: 2,
    fontSize: 12,
    fontWeight: "600",
    color: "#77738F",
  },

  headerSpacer: {
    width: 42,
  },

  tabsContainer: {
    marginHorizontal: 16,
    marginTop: 16,
    height: 58,
    padding: 4,
    borderRadius: 30,
    backgroundColor: "#EEEBFF",
    borderWidth: 1,
    borderColor: "#DDD6F8",
    flexDirection: "row",
    alignItems: "center",
  },

  tab: {
    flex: 1,
    height: 48,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
  },

  tabActive: {
    backgroundColor: "#410FA3",
    shadowColor: "#410FA3",
    shadowOpacity: 0.22,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 4,
  },

  tabText: {
    fontSize: 13,
    fontWeight: "800",
    color: "#410FA3",
    textAlign: "center",
  },

  tabTextActive: {
    color: "#FFFFFF",
  },

  heroCard: {
    marginHorizontal: 16,
    marginTop: 16,
    minHeight: 150,
    borderRadius: 24,
    backgroundColor: "#EAE6FF",
    borderWidth: 1,
    borderColor: "#D9D0FA",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
  },

  heroTextContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 22,
    zIndex: 2,
  },

  heroSmallText: {
    fontSize: 12,
    letterSpacing: 2,
    fontWeight: "800",
    color: "#6257A5",
  },

  heroTitle: {
    marginTop: 4,
    fontSize: 30,
    fontWeight: "900",
    color: "#24166D",
  },

  heroSubtitle: {
    marginTop: 5,
    fontSize: 14,
    lineHeight: 20,
    color: "#625C86",
    fontWeight: "600",
    maxWidth: 230,
  },

  heroTrophy: {
    width: 150,
    height: 150,
    marginRight: 10,
    borderRadius: 52,
    alignItems: "center",
    justifyContent: "center",
  },

  heroTrophyImage: {
    width: 120,
    height: 120,
  },

  heroTrophyText: {
    fontSize: 48,
  },

  heroDecorationOne: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 60,
    left: -55,
    bottom: -65,
    backgroundColor: "rgba(255,255,255,0.35)",
  },

  heroDecorationTwo: {
    position: "absolute",
    width: 85,
    height: 85,
    borderRadius: 42,
    right: 55,
    top: -40,
    backgroundColor: "rgba(255,255,255,0.3)",
  },

  yourRankCard: {
    marginHorizontal: 16,
    marginTop: 14,
    minHeight: 78,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#EDE8FF",
    borderWidth: 1,
    borderColor: "#D7CCFF",
    flexDirection: "row",
    alignItems: "center",
  },

  yourRankIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#DDD3FF",
    alignItems: "center",
    justifyContent: "center",
  },

  yourRankIconText: {
    fontSize: 23,
  },

  yourRankContent: {
    flex: 1,
    marginLeft: 12,
  },

  yourRankTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#410FA3",
  },

  yourRankMessage: {
    marginTop: 2,
    fontSize: 12,
    color: "#68618B",
    fontWeight: "600",
  },

  yourRankNumber: {
    fontSize: 25,
    fontWeight: "900",
    color: "#410FA3",
  },

  emptyCard: {
    marginHorizontal: 16,
    marginTop: 16,
    paddingHorizontal: 32,
    paddingVertical: 48,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E7E3F3",
    alignItems: "center",
  },

  emptyIcon: {
    fontSize: 45,
  },

  emptyTitle: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "900",
    color: "#24166D",
  },

  emptySubtitle: {
    marginTop: 6,
    fontSize: 13,
    lineHeight: 19,
    color: "#77738F",
    textAlign: "center",
  },

  podiumSection: {
    marginTop: 20,
  },

  playersSection: {
    marginTop: 18,
    paddingHorizontal: 16,
  },

  sectionTitle: {
    marginHorizontal: 20,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "900",
    color: "#211653",
  },

  podium: {
    paddingHorizontal: 16,
    minHeight: 300,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 7,
  },

  podiumPerson: {
    flex: 1,
    maxWidth: 125,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  podiumPlaceholder: {
    flex: 1,
    maxWidth: 125,
  },

  firstPlace: {
    zIndex: 3,
  },

  secondPlace: {
    marginBottom: 22,
  },

  thirdPlace: {
    marginBottom: 42,
  },

  medal: {
    fontSize: 27,
    marginBottom: 5,
  },

  crown: {
    fontSize: 27,
    marginBottom: 5,
  },

  podiumAvatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    borderWidth: 3,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  firstAvatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 4,
  },

  avatarImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  avatarInitial: {
    fontSize: 19,
    fontWeight: "900",
    color: "#410FA3",
  },

  podiumName: {
    marginTop: 7,
    maxWidth: 105,
    fontSize: 13,
    fontWeight: "900",
    color: "#211653",
    textAlign: "center",
  },

  podiumScore: {
    marginTop: 2,
    fontSize: 11,
    fontWeight: "700",
    color: "#716B88",
  },

  podiumBase: {
    width: "100%",
    marginTop: 7,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 10,
  },

  firstBase: {
    height: 92,
    backgroundColor: "#F59E0B",
  },

  secondBase: {
    height: 68,
    backgroundColor: "#B8BCC6",
  },

  thirdBase: {
    height: 50,
    backgroundColor: "#D97706",
  },

  podiumRank: {
    fontSize: 20,
    fontWeight: "900",
    color: "#FFFFFF",
  },

  playerCard: {
    minHeight: 72,
    marginBottom: 9,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E7E3F3",
    flexDirection: "row",
    alignItems: "center",
  },

  playerCardCurrent: {
    backgroundColor: "#EEE9FF",
    borderColor: "#C8BCF7",
    borderWidth: 1.5,
  },

  rankContainer: {
    width: 32,
    alignItems: "center",
    justifyContent: "center",
  },

  rankNumber: {
    fontSize: 16,
    fontWeight: "900",
    color: "#77738F",
  },

  playerAvatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    borderWidth: 2,
    borderColor: "#DDD8EA",
    backgroundColor: "#F3F1F8",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  playerInfo: {
    flex: 1,
    marginLeft: 11,
    minWidth: 0,
  },

  playerName: {
    fontSize: 15,
    fontWeight: "900",
    color: "#211653",
  },

  playerLevel: {
    marginTop: 3,
    fontSize: 11,
    fontWeight: "700",
  },

  scoreContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
    marginLeft: 8,
  },

  playerScore: {
    fontSize: 17,
    fontWeight: "900",
    color: "#410FA3",
  },

  scoreLabel: {
    marginTop: 1,
    fontSize: 9,
    fontWeight: "700",
    color: "#88839B",
  },

  chevron: {
    marginLeft: 7,
    fontSize: 25,
    fontWeight: "300",
    color: "#AAA5B7",
  },

  pressed: {
    opacity: 0.72,
  },

  trophyImage: {
    width: 42,
    height: 42,
  },

  crownImage: {
    width: 28,
    height: 28,
  },
});
