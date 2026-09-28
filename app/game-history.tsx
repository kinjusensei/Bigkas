import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
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

type HistoryRecord = {
  id: string;
  lesson_id: string;
  score: number;
  correct_answers: number;
  total_questions: number;
  accuracy: number;
  xp_earned: number;
  stars: number;
  badge: string | null;
  played_at: string;
};

function formatDate(dateString: string) {
  const date = new Date(dateString);

  const today = new Date();

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const isToday = date.toDateString() === today.toDateString();

  const isYesterday = date.toDateString() === yesterday.toDateString();

  const time = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  if (isToday) {
    return `Today • ${time}`;
  }

  if (isYesterday) {
    return `Yesterday • ${time}`;
  }

  return `${date.toLocaleDateString([], {
    month: "short",
    day: "numeric",
    year: "numeric",
  })} • ${time}`;
}

function getLessonName(lessonId: string) {
  if (!lessonId) {
    return "Game";
  }

  return lessonId
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function renderStars(stars: number) {
  const safeStars = Math.max(0, Math.min(Number(stars) || 0, 5));

  return "★".repeat(safeStars) + "☆".repeat(5 - safeStars);
}

export default function GameHistoryScreen() {
  const router = useRouter();

  const [history, setHistory] = useState<HistoryRecord[]>([]);

  const [loading, setLoading] = useState(true);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    loadGameHistory();
  }, []);

  async function loadGameHistory() {
    try {
      setLoading(true);
      setErrorMessage(null);

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) {
        throw userError;
      }

      if (!user) {
        throw new Error("User not authenticated.");
      }

      const { data, error } = await supabase
        .from("practice_history")
        .select(
          `
            id,
            lesson_id,
            score,
            correct_answers,
            total_questions,
            accuracy,
            xp_earned,
            stars,
            badge,
            played_at
          `,
        )
        .eq("user_id", user.id)
        .order("played_at", {
          ascending: false,
        });

      if (error) {
        throw error;
      }

      setHistory(data ?? []);
    } catch (error) {
      console.error("Game history loading error:", error);

      setErrorMessage("Unable to load your game history.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <View style={styles.loadingIcon}>
            <Image
              source={require("../assets/images/history.png")}
              style={styles.loadingImage}
              resizeMode="contain"
            />
          </View>

          <ActivityIndicator size="small" color="#410FA3" />

          <Text style={styles.loadingText}>Loading game history...</Text>
        </View>
      </SafeAreaView>
    );
  }

  const totalXP = history.reduce(
    (total, game) => total + Number(game.xp_earned ?? 0),
    0,
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Header */}
        <View style={styles.header}>
          <Pressable
            style={styles.backButton}
            onPress={() => {
              if (router.canGoBack()) {
                router.back();
              } else {
                router.replace("/user-profile");
              }
            }}
            hitSlop={8}
          >
            <Text style={styles.backButtonText}>‹</Text>
          </Pressable>

          <View style={styles.headerIcon}>
            <Image
              source={require("../assets/images/history.png")}
              style={styles.headerImage}
              resizeMode="contain"
            />
          </View>

          <View style={styles.headerText}>
            <Text style={styles.headerTitle}>Game History</Text>

            <Text style={styles.headerSubtitle}>
              Your previous game results
            </Text>
          </View>
        </View>

        {/* Error */}
        {errorMessage ? (
          <View style={styles.messageContainer}>
            <View style={styles.messageIconBox}>
              <Text style={styles.messageIcon}>⚠️</Text>
            </View>

            <Text style={styles.messageTitle}>Something went wrong</Text>

            <Text style={styles.messageText}>{errorMessage}</Text>

            <Pressable style={styles.retryButton} onPress={loadGameHistory}>
              <Text style={styles.retryButtonText}>Try Again</Text>
            </Pressable>
          </View>
        ) : history.length === 0 ? (
          /* Empty State */
          <View style={styles.emptyContainer}>
            <View style={styles.emptyImageContainer}>
              <Image
                source={require("../assets/images/history.png")}
                style={styles.emptyImage}
                resizeMode="contain"
              />
            </View>

            <Text style={styles.emptyTitle}>No Game History Yet</Text>

            <Text style={styles.emptyText}>
              Complete a game and your results will appear here.
            </Text>

            <Pressable
              style={styles.playButton}
              onPress={() => router.replace("/dashboard")}
            >
              <Text style={styles.playButtonText}>Play a Game</Text>
            </Pressable>
          </View>
        ) : (
          <>
            {/* Summary */}
            <View style={styles.summaryCard}>
              <View style={styles.summaryItem}>
                <View style={styles.summaryIconBox}>
                  <Image
                    source={require("../assets/images/history.png")}
                    style={styles.summaryImage}
                    resizeMode="contain"
                  />
                </View>

                <Text style={styles.summaryValue}>{history.length}</Text>

                <Text style={styles.summaryLabel}>Games Played</Text>
              </View>

              <View style={styles.summaryDivider} />

              <View style={styles.summaryItem}>
                <View style={styles.xpIconBox}>
                  <Text style={styles.xpIcon}>XP</Text>
                </View>

                <Text style={styles.summaryValue}>{totalXP}</Text>

                <Text style={styles.summaryLabel}>XP Earned</Text>
              </View>
            </View>

            {/* Section Header */}
            <View style={styles.sectionHeader}>
              <View>
                <Text style={styles.sectionTitle}>Recent Games</Text>

                <Text style={styles.sectionSubtitle}>
                  Your latest recorded results
                </Text>
              </View>

              <View style={styles.sectionCount}>
                <Text style={styles.sectionCountText}>{history.length}</Text>
              </View>
            </View>

            {/* History */}
            {history.map((game) => (
              <View key={game.id} style={styles.historyCard}>
                {/* Card Header */}
                <View style={styles.cardHeader}>
                  <View style={styles.gameIcon}>
                    <Image
                      source={require("../assets/images/history.png")}
                      style={styles.gameHistoryImage}
                      resizeMode="contain"
                    />
                  </View>

                  <View style={styles.gameInfo}>
                    <Text style={styles.gameTitle} numberOfLines={1}>
                      {getLessonName(game.lesson_id)}
                    </Text>

                    <Text style={styles.playedAt}>
                      {formatDate(game.played_at)}
                    </Text>
                  </View>

                  {/* Score */}
                  <View style={styles.scoreBox}>
                    <Text style={styles.scoreLabel}>SCORE</Text>

                    <Text style={styles.scoreValue}>
                      {Number(game.score ?? 0)}
                    </Text>
                  </View>
                </View>

                {/* Stats */}
                <View style={styles.statsContainer}>
                  <View style={styles.statItem}>
                    <Text style={styles.statValue}>
                      {Number(game.correct_answers ?? 0)}/
                      {Number(game.total_questions ?? 0)}
                    </Text>

                    <Text style={styles.statLabel}>Correct</Text>
                  </View>

                  <View style={styles.statDivider} />

                  <View style={styles.statItem}>
                    <Text style={styles.statValue}>
                      {Number(game.accuracy ?? 0).toFixed(0)}%
                    </Text>

                    <Text style={styles.statLabel}>Accuracy</Text>
                  </View>

                  <View style={styles.statDivider} />

                  <View style={styles.statItem}>
                    <Text style={styles.starValue}>
                      {renderStars(Number(game.stars ?? 0))}
                    </Text>

                    <Text style={styles.statLabel}>Stars</Text>
                  </View>

                  <View style={styles.statDivider} />

                  <View style={styles.statItem}>
                    <Text style={styles.xpValue}>
                      +{Number(game.xp_earned ?? 0)}
                    </Text>

                    <Text style={styles.statLabel}>XP</Text>
                  </View>
                </View>

                {/* Badge */}
                {game.badge ? (
                  <View style={styles.badgeContainer}>
                    <View style={styles.badgeIconBox}>
                      <Text style={styles.badgeIcon}>🏅</Text>
                    </View>

                    <View>
                      <Text style={styles.badgeSmallLabel}>BADGE EARNED</Text>

                      <Text style={styles.badgeText}>{game.badge}</Text>
                    </View>
                  </View>
                ) : null}
              </View>
            ))}

            <View style={styles.bottomSpace} />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7FB",
  },

  content: {
    padding: 16,
    paddingBottom: 40,
  },

  /* Loading */

  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  loadingIcon: {
    width: 68,
    height: 68,
    borderRadius: 22,
    backgroundColor: "#EEEDFE",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },

  loadingImage: {
    width: 38,
    height: 38,
  },

  loadingText: {
    fontSize: 14,
    color: "#777777",
    fontWeight: "600",
  },

  /* Header */

  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 14,
    marginBottom: 16,

    borderWidth: 1,
    borderColor: "#E8E7EF",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#F1F0FB",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  backButtonText: {
    color: "#410FA3",
    fontSize: 30,
    fontWeight: "300",
    lineHeight: 34,
    marginTop: -2,
  },

  headerIcon: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: "#EEEDFE",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  headerImage: {
    width: 32,
    height: 32,
  },

  headerText: {
    flex: 1,
  },

  headerTitle: {
    color: "#1B1B1F",
    fontSize: 21,
    fontWeight: "900",
  },

  headerSubtitle: {
    marginTop: 3,
    color: "#85838D",
    fontSize: 12,
    fontWeight: "500",
  },

  /* Summary */

  summaryCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 18,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E8E7EF",
    marginBottom: 22,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },

  summaryItem: {
    flex: 1,
    alignItems: "center",
  },

  summaryIconBox: {
    width: 34,
    height: 34,
    borderRadius: 11,
    backgroundColor: "#EEEDFE",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },

  summaryImage: {
    width: 21,
    height: 21,
  },

  xpIconBox: {
    width: 34,
    height: 34,
    borderRadius: 11,
    backgroundColor: "#FFF4D9",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },

  xpIcon: {
    fontSize: 11,
    fontWeight: "900",
    color: "#B77900",
  },

  summaryValue: {
    fontSize: 21,
    fontWeight: "900",
    color: "#410FA3",
  },

  summaryLabel: {
    marginTop: 2,
    fontSize: 11,
    color: "#85838D",
    fontWeight: "600",
  },

  summaryDivider: {
    width: 1,
    height: 58,
    backgroundColor: "#E8E7EF",
  },

  /* Section */

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#1B1B1F",
  },

  sectionSubtitle: {
    marginTop: 3,
    fontSize: 11,
    color: "#8A8892",
    fontWeight: "500",
  },

  sectionCount: {
    minWidth: 32,
    height: 32,
    paddingHorizontal: 8,
    borderRadius: 16,
    backgroundColor: "#EEEDFE",
    alignItems: "center",
    justifyContent: "center",
  },

  sectionCountText: {
    color: "#410FA3",
    fontSize: 12,
    fontWeight: "900",
  },

  /* History Card */

  historyCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 15,
    marginBottom: 12,

    borderWidth: 1,
    borderColor: "#E8E7EF",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.035,
    shadowRadius: 8,
    elevation: 2,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  gameIcon: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: "#EEEDFE",
    alignItems: "center",
    justifyContent: "center",
  },

  gameHistoryImage: {
    width: 30,
    height: 30,
  },

  gameInfo: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },

  gameTitle: {
    fontSize: 15,
    fontWeight: "900",
    color: "#1B1B1F",
  },

  playedAt: {
    marginTop: 5,
    fontSize: 11,
    color: "#85838D",
    fontWeight: "500",
  },

  /* Score */

  scoreBox: {
    minWidth: 66,
    alignItems: "flex-end",
    justifyContent: "center",
  },

  scoreLabel: {
    fontSize: 8,
    fontWeight: "900",
    color: "#A09EA7",
    letterSpacing: 0.8,
    marginBottom: 1,
  },

  scoreValue: {
    fontSize: 25,
    fontWeight: "900",
    color: "#410FA3",
  },

  /* Stats */

  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: "#EEEEF2",
  },

  statItem: {
    flex: 1,
    alignItems: "center",
    minWidth: 0,
  },

  statDivider: {
    width: 1,
    height: 28,
    backgroundColor: "#EEEEF2",
  },

  statValue: {
    fontSize: 13,
    fontWeight: "900",
    color: "#333238",
  },

  starValue: {
    fontSize: 10,
    color: "#F5B800",
    letterSpacing: -1,
  },

  xpValue: {
    fontSize: 13,
    fontWeight: "900",
    color: "#1D9E75",
  },

  statLabel: {
    marginTop: 3,
    fontSize: 9,
    color: "#929098",
    fontWeight: "600",
  },

  /* Badge */

  badgeContainer: {
    marginTop: 14,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#EEEEF2",
    flexDirection: "row",
    alignItems: "center",
  },

  badgeIconBox: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#FFF4D9",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  badgeIcon: {
    fontSize: 15,
  },

  badgeSmallLabel: {
    fontSize: 8,
    fontWeight: "900",
    color: "#B77900",
    letterSpacing: 0.6,
  },

  badgeText: {
    marginTop: 2,
    fontSize: 12,
    fontWeight: "800",
    color: "#755000",
  },

  /* Empty/Error */

  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingTop: 80,
  },

  emptyImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 36,
    backgroundColor: "#EEEDFE",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 22,
  },

  emptyImage: {
    width: 72,
    height: 72,
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: "#1B1B1F",
    textAlign: "center",
  },

  emptyText: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
    color: "#85838D",
    textAlign: "center",
    maxWidth: 290,
  },

  playButton: {
    marginTop: 22,
    backgroundColor: "#410FA3",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 14,
  },

  playButtonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "900",
  },

  messageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 35,
    paddingTop: 80,
  },

  messageIconBox: {
    width: 72,
    height: 72,
    borderRadius: 22,
    backgroundColor: "#FFF4E5",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  messageIcon: {
    fontSize: 32,
  },

  messageTitle: {
    fontSize: 19,
    fontWeight: "900",
    color: "#222222",
    textAlign: "center",
  },

  messageText: {
    marginTop: 7,
    fontSize: 14,
    lineHeight: 20,
    color: "#777777",
    textAlign: "center",
  },

  retryButton: {
    marginTop: 18,
    backgroundColor: "#410FA3",
    paddingHorizontal: 22,
    paddingVertical: 11,
    borderRadius: 12,
  },

  retryButtonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "800",
  },

  bottomSpace: {
    height: 30,
  },
});
