import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import { supabase } from "../../services/supabase";
import { updateWinningStreak } from "../../services/winningStreak";

export default function ResultScreen() {
  const router = useRouter();

  const { score, correct, total, accuracy, xp, won } = useLocalSearchParams();

  const streakSavedRef = useRef(false);

  useEffect(() => {
    if (streakSavedRef.current) return;

    if (won !== "true" && won !== "false") return;

    streakSavedRef.current = true;

    const saveWinningStreak = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      await updateWinningStreak(user.id, won === "true");
    };

    saveWinningStreak();
  }, [won]);

  const accuracyValue = Number(accuracy);

  const getStars = (accuracy: number) => {
    if (accuracy >= 90) return "★★★★★";
    if (accuracy >= 80) return "★★★★☆";
    if (accuracy >= 70) return "★★★☆☆";
    if (accuracy >= 60) return "★★☆☆☆";
    return "★☆☆☆☆";
  };

  const stars = getStars(accuracyValue);

  const getPerformance = (accuracy: number) => {
    if (accuracy >= 90)
      return {
        label: "Excellent!",
        color: "#22C55E",
        icon: "trophy-award",
      };

    if (accuracy >= 80)
      return {
        label: "Great Job!",
        color: "#3B82F6",
        icon: "medal",
      };

    if (accuracy >= 70)
      return {
        label: "Good Effort!",
        color: "#F59E0B",
        icon: "star-circle",
      };

    return {
      label: "Keep Practicing!",
      color: "#EF4444",
      icon: "book-open-page-variant",
    };
  };

  const performance = getPerformance(accuracyValue);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <ConfettiCannon count={500} origin={{ x: 200, y: 0 }} />
      {/* Trophy */}
      <View style={styles.hero}>
        <MaterialCommunityIcons name="trophy" size={90} color="#FBBF24" />

        <Text style={styles.title}>Practice Complete!</Text>

        <Text style={styles.subtitle}>
          Fantastic work! Keep practicing to master your pronunciation.
        </Text>

        <Text style={styles.stars}>{stars}</Text>

        <View
          style={[
            styles.badge,
            {
              backgroundColor: performance.color,
            },
          ]}
        >
          <MaterialCommunityIcons
            name={performance.icon as any}
            size={20}
            color="white"
          />

          <Text style={styles.badgeText}>{performance.label}</Text>
        </View>
      </View>

      {/* Statistics */}
      <View style={styles.cardRow}>
        <View style={styles.card}>
          <MaterialCommunityIcons name="star" size={36} color="#FBBF24" />

          <Text style={styles.cardTitle}>Score</Text>

          <Text style={styles.cardValue}>{score}</Text>
        </View>

        <View style={styles.card}>
          <MaterialCommunityIcons name="target" size={36} color="#EF4444" />

          <Text style={styles.cardTitle}>Accuracy</Text>

          <Text style={styles.cardValue}>{accuracy}%</Text>
        </View>
      </View>

      <View style={styles.cardRow}>
        <View style={styles.card}>
          <MaterialCommunityIcons
            name="check-circle"
            size={36}
            color="#22C55E"
          />

          <Text style={styles.cardTitle}>Correct</Text>

          <Text style={styles.cardValue}>
            {correct}/{total}
          </Text>
        </View>

        <View style={styles.card}>
          <MaterialCommunityIcons
            name="lightning-bolt"
            size={36}
            color="#8B5CF6"
          />

          <Text style={styles.cardTitle}>XP Earned</Text>

          <Text style={styles.cardValue}>+{xp}</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => router.replace("/lesson/practice")}
      >
        <MaterialCommunityIcons name="refresh" size={22} color="white" />

        <Text style={styles.primaryButtonText}>Practice Again</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => router.replace("/dashboard")}
      >
        <MaterialCommunityIcons name="home" size={22} color="#5E3BEE" />

        <Text style={styles.secondaryButtonText}>Return to Dashboard</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F5F3FF",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 40,
    alignItems: "center",
  },

  hero: {
    width: "100%",
    alignItems: "center",
    marginBottom: 25,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#5E3BEE",
    marginTop: 18,
  },

  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 24,
    paddingHorizontal: 20,
  },

  stars: {
    marginTop: 18,
    fontSize: 36,
    color: "#FBBF24",
    letterSpacing: 3,
  },

  badge: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 30,
    marginTop: 18,
  },

  badgeText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 8,
  },

  cardRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  card: {
    width: "47%",
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    paddingVertical: 24,
    paddingHorizontal: 12,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 5,
    },

    elevation: 6,
  },

  cardTitle: {
    marginTop: 12,
    color: "#6B7280",
    fontSize: 15,
    fontWeight: "600",
  },

  cardValue: {
    marginTop: 10,
    fontSize: 28,
    fontWeight: "bold",
    color: "#5E3BEE",
  },

  primaryButton: {
    width: "100%",
    height: 58,
    marginTop: 25,
    backgroundColor: "#5E3BEE",
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#5E3BEE",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },

    elevation: 8,
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 10,
  },

  secondaryButton: {
    width: "100%",
    height: 58,
    marginTop: 15,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#5E3BEE",
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  secondaryButtonText: {
    color: "#5E3BEE",
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 10,
  },
});
