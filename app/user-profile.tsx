import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { MAX_LEVEL, XP_PER_LEVEL } from "../constant/gameConstants";
import { supabase } from "../services/supabase";
import { resolveAvatarSource } from "../utils/avatars";
import AvatarPicker from "./components/AvatarPicker";
import BottomNav from "./components/BottomNav";

type Profile = {
  display_name: string;
  avatar_url: string | null;
  xp: number;
  level: number;
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

const ACHIEVEMENTS = [
  {
    id: "first_lesson",
    icon: "📖",
    title: "First Lesson",
    desc: "Complete your first lesson",
    xpRequired: 20,
  },
  {
    id: "level_2",
    icon: "⭐",
    title: "Level Up!",
    desc: "Reach Level 2",
    xpRequired: 100,
  },
  {
    id: "word_collector",
    icon: "📝",
    title: "Word Collector",
    desc: "Learn 30 words",
    xpRequired: 60,
  },
  {
    id: "level_3",
    icon: "🔥",
    title: "On Fire!",
    desc: "Reach Level 3",
    xpRequired: 250,
  },
  {
    id: "dedicated",
    icon: "💪",
    title: "Dedicated",
    desc: "Earn 200 XP",
    xpRequired: 200,
  },
  {
    id: "level_4",
    icon: "🚀",
    title: "Advanced",
    desc: "Reach Level 4",
    xpRequired: 500,
  },
  {
    id: "scholar",
    icon: "🎓",
    title: "Scholar",
    desc: "Earn 750 XP",
    xpRequired: 750,
  },
  {
    id: "master",
    icon: "👑",
    title: "Master",
    desc: "Reach Level 5 — Max level!",
    xpRequired: 1000,
  },
];

const BADGES = [
  {
    id: "kapampangan",
    icon: "🗣️",
    title: "Kapampangan",
    desc: "Started Kapampangan lessons",
    xpRequired: 20,
  },
  {
    id: "tagalog",
    icon: "🗣️",
    title: "Tagalog",
    desc: "Started Tagalog lessons",
    xpRequired: 20,
  },
  {
    id: "waray",
    icon: "🗣️",
    title: "Waray",
    desc: "Started Waray lessons",
    xpRequired: 20,
  },
  {
    id: "trilingual",
    icon: "🌍",
    title: "Trilingual",
    desc: "Study all 3 dialects",
    xpRequired: 500,
  },
];

export default function UserProfileScreen() {
  const router = useRouter();

  const [profile, setProfile] = useState<Profile | null>(null);

  const [loading, setLoading] = useState(true);

  // Controls the avatar picker sheet (presets + custom upload).
  const [pickerVisible, setPickerVisible] = useState(false);

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setLoading(false);
      return;
    }

    const { data } = await supabase
      .from("profiles")
      .select("display_name, avatar_url, xp, level")
      .eq("id", user.id)
      .single();

    setProfile(data ?? null);
    setLoading(false);
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#410FA3" />

        <Text style={styles.loadingText}>Loading profile...</Text>
      </View>
    );
  }

  if (!profile) {
    return null;
  }

  const levelInfo = LEVEL_LABELS[profile.level] ?? LEVEL_LABELS[1];

  const avatarLetter = profile.display_name.charAt(0).toUpperCase();

  const earnedAchievements = ACHIEVEMENTS.filter(
    (achievement) => profile.xp >= achievement.xpRequired,
  );

  const earnedBadges = BADGES.filter((badge) => profile.xp >= badge.xpRequired);

  const isMaxLevel = profile.level >= MAX_LEVEL;

  const levelStartXP = (profile.level - 1) * XP_PER_LEVEL;

  const nextLevelXP = profile.level * XP_PER_LEVEL;

  const xpToNextLevel = Math.max(0, nextLevelXP - profile.xp);

  const xpProgress = isMaxLevel
    ? 100
    : Math.min(
        100,
        Math.max(0, ((profile.xp - levelStartXP) / XP_PER_LEVEL) * 100),
      );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {/* Profile Card */}
        <View style={styles.profileCard}>
          {/* Tapping the avatar opens the picker. resolveAvatarSource
              handles both bundled presets ("preset:tarsier_boy") and
              uploaded photo URLs — a plain { uri } would render blank
              for presets. */}
          <TouchableOpacity
            style={styles.avatarContainer}
            onPress={() => setPickerVisible(true)}
            activeOpacity={0.85}
          >
            {profile.avatar_url ? (
              <Image
                source={resolveAvatarSource(profile.avatar_url)}
                style={styles.avatar}
              />
            ) : (
              <View style={styles.avatarCircle}>
                <Text style={styles.avatarLetter}>{avatarLetter}</Text>
              </View>
            )}

            {/* Without this there's nothing signalling the avatar is
                tappable at all. */}
            <View style={styles.avatarEditBadge}>
              <Text style={styles.avatarEditIcon}>✎</Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.profileName}>{profile.display_name}</Text>

          <View
            style={[
              styles.levelBadge,
              {
                backgroundColor: levelInfo.color + "22",
              },
            ]}
          >
            <Text
              style={[
                styles.levelBadgeText,
                {
                  color: levelInfo.color,
                },
              ]}
            >
              Level {profile.level} · {levelInfo.label}
            </Text>
          </View>

          {/* XP Progress */}
          <View style={styles.xpProgressCard}>
            <View style={styles.xpProgressHeader}>
              <Text style={styles.xpLevelText}>LEVEL {profile.level}</Text>

              <Text style={styles.xpValueText}>
                {isMaxLevel
                  ? `${profile.xp} XP`
                  : `${profile.xp} / ${nextLevelXP} XP`}
              </Text>
            </View>

            <View style={styles.xpProgressTrack}>
              <View
                style={[
                  styles.xpProgressFill,
                  {
                    width: `${xpProgress}%`,
                  },
                ]}
              />
            </View>

            <Text style={styles.xpProgressHint}>
              {isMaxLevel
                ? "Max level reached"
                : `${xpToNextLevel} XP to Level ${profile.level + 1}`}
            </Text>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statNum}>{earnedAchievements.length}</Text>

            <Text style={styles.statLabel}>Achievements</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNum}>{earnedBadges.length}</Text>

            <Text style={styles.statLabel}>Badges</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNum}>{profile.level}</Text>

            <Text style={styles.statLabel}>Level</Text>
          </View>
        </View>

        {/* Game History */}
        <TouchableOpacity
          style={styles.historyButton}
          onPress={() => router.push("/game-history" as any)}
          activeOpacity={0.8}
        >
          <View style={styles.historyButtonIcon}>
            <Image
              source={require("../assets/images/history.png")}
              style={styles.historyButtonImage}
              resizeMode="contain"
            />
          </View>

          <View style={styles.historyButtonTextContainer}>
            <Text style={styles.historyButtonTitle}>Game History</Text>

            <Text style={styles.historyButtonSubtitle}>
              View your previous game results
            </Text>
          </View>

          <Text style={styles.historyButtonArrow}>›</Text>
        </TouchableOpacity>

        {/* Achievements */}
        <View style={styles.section}>
          <View style={styles.achievementSectionHeader}>
            <Image
              source={require("../assets/images/Achievement verified.png")}
              style={styles.achievementHeaderIcon}
              resizeMode="contain"
            />

            <Text style={styles.sectionTitle}>Achievements</Text>
          </View>

          <Text style={styles.sectionSub}>
            {earnedAchievements.length}/{ACHIEVEMENTS.length} earned
          </Text>

          {ACHIEVEMENTS.map((achievement) => {
            const earned = profile.xp >= achievement.xpRequired;

            return (
              <View
                key={achievement.id}
                style={[
                  styles.achievementCard,
                  !earned && styles.achievementLocked,
                ]}
              >
                <View
                  style={[
                    styles.achievementIcon,
                    {
                      backgroundColor: earned ? "#EEEDFE" : "#F3F4F6",
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.achievementEmoji,
                      !earned && {
                        opacity: 0.4,
                      },
                    ]}
                  >
                    {achievement.icon}
                  </Text>
                </View>

                <View style={styles.achievementInfo}>
                  <Text
                    style={[
                      styles.achievementTitle,
                      !earned && styles.lockedText,
                    ]}
                  >
                    {achievement.title}
                  </Text>

                  <Text style={styles.achievementDesc}>{achievement.desc}</Text>

                  {!earned && (
                    <Text style={styles.achievementXP}>
                      🔒 {achievement.xpRequired} XP needed
                    </Text>
                  )}
                </View>

                {earned && (
                  <View style={styles.earnedBadge}>
                    <Image
                      source={require("../assets/images/Achieved.png")}
                      style={styles.achievedIcon}
                      resizeMode="contain"
                    />
                  </View>
                )}
              </View>
            );
          })}
        </View>

        {/* Badges */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🎖️ Badges</Text>

          <Text style={styles.sectionSub}>
            {earnedBadges.length}/{BADGES.length} earned
          </Text>

          <View style={styles.badgesGrid}>
            {BADGES.map((badge) => {
              const earned = profile.xp >= badge.xpRequired;

              return (
                <View
                  key={badge.id}
                  style={[styles.badgeCard, !earned && styles.badgeLocked]}
                >
                  <Text
                    style={[
                      styles.badgeEmoji,
                      !earned && {
                        opacity: 0.4,
                      },
                    ]}
                  >
                    {badge.icon}
                  </Text>

                  <Text
                    style={[styles.badgeTitle, !earned && styles.lockedText]}
                  >
                    {badge.title}
                  </Text>

                  <Text style={styles.badgeDesc}>{badge.desc}</Text>

                  {!earned && (
                    <Text style={styles.badgeXP}>{badge.xpRequired} XP</Text>
                  )}
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>

      {/* YOUR EXISTING BottomNav */}
      <BottomNav />

      <AvatarPicker
        visible={pickerVisible}
        currentAvatarUrl={profile.avatar_url}
        onClose={() => setPickerVisible(false)}
        onChange={(newUrl) =>
          setProfile((prev) => (prev ? { ...prev, avatar_url: newUrl } : prev))
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9FAFB",
    gap: 12,
  },

  loadingText: {
    fontSize: 15,
    color: "#666",
  },

  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },

  scroll: {
    flexGrow: 1,
    paddingBottom: 150,
    padding: 16,
    gap: 16,
  },

  /* Header */

  header: {
    backgroundColor: "#410FA3",
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 24,
  },

  headerText: {
    flex: 1,
    gap: 4,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  headerSub: {
    fontSize: 14,
    color: "rgba(255,255,255,0.75)",
  },

  /* Profile */

  profileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    gap: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  // position: relative so the edit badge can anchor to its corner.
  avatarContainer: {
    marginBottom: 4,
    position: "relative",
  },

  avatarEditBadge: {
    position: "absolute",
    right: -2,
    bottom: -2,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#410FA3",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },

  avatarEditIcon: {
    fontSize: 13,
    color: "#FFFFFF",
    fontWeight: "800",
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 999,
    borderWidth: 3,
    borderColor: "#410FA3",
  },

  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: 999,
    backgroundColor: "#EEEDFE",
    borderWidth: 3,
    borderColor: "#410FA3",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarLetter: {
    fontSize: 32,
    fontWeight: "800",
    color: "#410FA3",
  },

  profileName: {
    fontSize: 22,
    fontWeight: "800",
    color: "#1a1a1a",
  },

  levelBadge: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
  },

  levelBadgeText: {
    fontSize: 13,
    fontWeight: "700",
  },

  xpProgressCard: {
    width: "100%",
    backgroundColor: "#F8F8FF",
    borderRadius: 14,
    padding: 14,
    gap: 8,
    marginTop: 2,
  },

  xpProgressHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },

  xpLevelText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#410FA3",
  },

  xpValueText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1a1a1a",
  },

  xpProgressTrack: {
    height: 10,
    borderRadius: 999,
    backgroundColor: "#EEEDFE",
    overflow: "hidden",
  },

  xpProgressFill: {
    height: "100%",
    borderRadius: 999,
    backgroundColor: "#410FA3",
  },

  xpProgressHint: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
    textAlign: "left",
  },

  /* Stats */

  statsRow: {
    flexDirection: "row",
    gap: 10,
  },

  statCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    gap: 4,
  },

  statNum: {
    fontSize: 24,
    fontWeight: "800",
    color: "#410FA3",
  },

  statLabel: {
    fontSize: 11,
    color: "#999",
    fontWeight: "500",
  },

  /* Game History */

  historyButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 1,
  },

  historyButtonIcon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: "#EEEDFE",
    alignItems: "center",
    justifyContent: "center",
  },

  historyButtonTextContainer: {
    flex: 1,
    marginLeft: 12,
  },

  historyButtonTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#1B1B1F",
  },

  historyButtonSubtitle: {
    marginTop: 3,
    fontSize: 12,
    color: "#777777",
  },

  historyButtonArrow: {
    fontSize: 25,
    color: "#999999",
    fontWeight: "300",
  },

  /* Sections */

  section: {
    gap: 10,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#1a1a1a",
  },

  sectionSub: {
    fontSize: 13,
    color: "#999",
    marginTop: -4,
  },

  /* Achievements */

  achievementCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 14,
    gap: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  achievementLocked: {
    opacity: 0.6,
  },

  achievementEmoji: {
    fontSize: 24,
  },

  achievementInfo: {
    flex: 1,
    gap: 2,
  },

  achievementTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1a1a1a",
  },

  achievementDesc: {
    fontSize: 12,
    color: "#666",
  },

  achievementXP: {
    fontSize: 11,
    color: "#DC2626",
    fontWeight: "600",
    marginTop: 2,
  },

  lockedText: {
    color: "#9CA3AF",
  },

  earnedBadge: {
    width: 28,
    height: 28,
    borderRadius: 999,
    backgroundColor: "#1D9E75",
    alignItems: "center",
    justifyContent: "center",
  },

  earnedBadgeText: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "800",
  },

  /* Badges */

  badgesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  badgeCard: {
    width: "47%",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    gap: 6,
  },

  badgeLocked: {
    opacity: 0.5,
  },

  badgeEmoji: {
    fontSize: 30,
  },

  badgeTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#1a1a1a",
    textAlign: "center",
  },

  badgeDesc: {
    fontSize: 11,
    color: "#999",
    textAlign: "center",
  },

  badgeXP: {
    fontSize: 11,
    color: "#DC2626",
    fontWeight: "600",
  },

  historyButtonImage: {
    width: 28,
    height: 28,
  },
  achievedIcon: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },

  achievementRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  achievementIcon: {
    width: 42,
    height: 42,
    resizeMode: "contain",
  },

  achievementText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "800",
    color: "#211653",
  },

  achievementSectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },

  achievementHeaderIcon: {
    width: 42,
    height: 42,
    marginRight: 10,
  },
});
