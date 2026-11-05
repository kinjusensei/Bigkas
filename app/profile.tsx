import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import { ComponentProps, useCallback, useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import {
  LessonHistoryEmpty,
  LessonHistoryRow,
} from "../components/profile/LessonHistoryRow";
import { bigkas, MIN_TAP } from "../constant/bigkasTheme";
import { structuredLessonsById } from "../data/lessons/structuredLessons";
import { practiceLevels } from "../data/practiceData";
import { useActiveDialect } from "../hooks/useActiveDialect";
import {
  getLeaderboardScore,
  getLessonHistory,
  getProfileStats,
  LessonHistoryEntry,
  PROFILE_DIALECTS,
  ProfileDialect,
  ProfileStats,
} from "../services/profileService";
import { supabase } from "../services/supabase";
import { resolveAvatarSource } from "../utils/avatars";
import { levelProgress } from "../utils/lessonCompletion";
import AvatarPicker from "./components/AvatarPicker";

type IconName = ComponentProps<typeof Ionicons>["name"];

const HISTORY_LIMIT = 5;
const MEDALLION = 68;

type Badge = {
  lessonId: string;
  lessonNumber: number;
  lessonTitle: string;
  name: string;
  earned: boolean;
  entry: LessonHistoryEntry | null;
};

// Each earned badge gets its own shape and icon, so they differ without
// relying on colour: circle + star, rounded square + speech bubble,
// hexagon + "123", then repeating.
const MEDALLION_DESIGNS: {
  shape: "circle" | "square" | "hexagon";
  icon?: IconName;
  text?: string;
  color: string;
}[] = [
  { shape: "circle", icon: "star", color: bigkas.primary },
  { shape: "square", icon: "chatbubbles", color: bigkas.accent },
  { shape: "hexagon", text: "123", color: bigkas.success },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString([], {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function Hexagon({ size, color }: { size: number; color: string }) {
  // Three rotated rectangles make a regular hexagon (side = size / 2).
  const side = size / 2;
  const height = side * Math.sqrt(3);
  return (
    <View style={[styles.hexagon, { width: size, height }]}>
      {[0, 60, 120].map((angle) => (
        <View
          key={angle}
          style={{
            position: "absolute",
            width: side,
            height,
            backgroundColor: color,
            transform: [{ rotate: `${angle}deg` }],
          }}
        />
      ))}
    </View>
  );
}

function Medallion({ badge }: { badge: Badge }) {
  if (!badge.earned) {
    return (
      <View style={styles.lockedMedallion}>
        <Ionicons name="lock-closed" size={24} color={bigkas.muted} />
      </View>
    );
  }

  const design =
    MEDALLION_DESIGNS[(badge.lessonNumber - 1) % MEDALLION_DESIGNS.length];
  const content = design.icon ? (
    <Ionicons name={design.icon} size={28} color={bigkas.gold} />
  ) : (
    <Text style={styles.medallionText}>{design.text}</Text>
  );

  if (design.shape === "hexagon") {
    return (
      <View style={styles.medallionBox}>
        <Hexagon size={MEDALLION} color={design.color} />
        <View style={styles.medallionContent}>{content}</View>
      </View>
    );
  }

  return (
    <View
      style={[
        styles.medallion,
        {
          backgroundColor: design.color,
          borderRadius: design.shape === "circle" ? MEDALLION / 2 : 18,
        },
      ]}
    >
      {content}
    </View>
  );
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: IconName;
  value: string;
  label: string;
}) {
  return (
    <View
      style={styles.statCard}
      accessible
      accessibilityLabel={`${label}: ${value}`}
    >
      <View style={styles.statIcon}>
        <Ionicons name={icon} size={20} color={bigkas.primary} />
      </View>
      <View style={styles.statText}>
        <Text style={styles.statValue} numberOfLines={1}>
          {value}
        </Text>
        <Text style={styles.statLabel} numberOfLines={2}>
          {label}
        </Text>
      </View>
    </View>
  );
}

export default function ProfileScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  // The dashboard passes the language it is showing; otherwise use the
  // saved active dialect.
  const params = useLocalSearchParams<{ dialect?: string; section?: string }>();
  const { dialect: activeDialect } = useActiveDialect();
  const dialect: ProfileDialect =
    PROFILE_DIALECTS.find((name) => name === params.dialect) ??
    PROFILE_DIALECTS.find((name) => name.toLowerCase() === activeDialect) ??
    "Tagalog";

  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<ProfileStats | null>(null);
  const [leaderboardScore, setLeaderboardScore] = useState<number | null>(null);
  const [history, setHistory] = useState<LessonHistoryEntry[]>([]);
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [pickerVisible, setPickerVisible] = useState(false);
  // The dashboard menu's "Achievements" row opens this screen with
  // section=achievements; scroll there once, after the first layout.
  const scrollRef = useRef<ScrollView>(null);
  const scrolledToSection = useRef(false);

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      (async () => {
        const [nextStats, nextHistory, nextScore] = await Promise.all([
          getProfileStats(),
          getLessonHistory(),
          getLeaderboardScore(dialect),
        ]);
        if (cancelled) return;
        if (!nextStats) {
          router.replace("/");
          return;
        }
        setStats(nextStats);
        setHistory(nextHistory);
        setLeaderboardScore(nextScore);
        setLoading(false);
      })();
      return () => {
        cancelled = true;
      };
    }, [dialect, router]),
  );

  function goBack() {
    if (router.canGoBack()) router.back();
    else router.replace("/dashboard");
  }

  function confirmLogout() {
    Alert.alert("Log out?", "You can log back in any time.", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Log out",
        style: "destructive",
        onPress: async () => {
          await supabase.auth.signOut();
          router.replace("/" as any);
        },
      },
    ]);
  }

  function openFromSettings(path: string) {
    setSettingsVisible(false);
    router.push(path as any);
  }

  if (loading || !stats) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={bigkas.primary} />
        <Text style={styles.loadingText}>Loading profile...</Text>
      </View>
    );
  }

  const xpLevel = levelProgress(stats.totalXp);
  const xpToNext = xpLevel.perLevel - xpLevel.intoLevel;
  const avatarLetter = (stats.displayName || "L").charAt(0).toUpperCase();

  // One badge per lesson of this language. Earned with a saved assessment
  // score of at least 70%.
  const historyById = new Map(history.map((entry) => [entry.lessonId, entry]));
  const badges: Badge[] = practiceLevels
    .filter((level) => level.lessonId.startsWith(`${dialect.toLowerCase()}_`))
    .map((level, index) => {
      const entry = historyById.get(level.lessonId) ?? null;
      const lessonNumber = index + 1;
      return {
        lessonId: level.lessonId,
        lessonNumber,
        lessonTitle:
          structuredLessonsById[level.lessonId]?.title ?? level.title,
        name:
          structuredLessonsById[level.lessonId]?.rewards?.badge?.name ??
          `Lesson ${lessonNumber} badge`,
        earned: !!entry?.passed,
        entry,
      };
    });
  const earnedCount = badges.filter((badge) => badge.earned).length;
  const recentHistory = history.slice(0, HISTORY_LIMIT);

  return (
    <SafeAreaView style={styles.container} edges={["left", "right"]}>
      <View style={[styles.statusBarFill, { height: insets.top }]} />

      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: insets.bottom + 32 }}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <Pressable
            style={styles.headerButton}
            onPress={goBack}
            accessibilityRole="button"
            accessibilityLabel="Back"
            hitSlop={4}
          >
            <Ionicons name="chevron-back" size={24} color={bigkas.white} />
          </Pressable>
          <Text style={styles.headerTitle}>Profile</Text>
          <Pressable
            style={styles.headerButton}
            onPress={() => setSettingsVisible(true)}
            accessibilityRole="button"
            accessibilityLabel="Settings"
            hitSlop={4}
          >
            <Ionicons name="settings-outline" size={22} color={bigkas.white} />
          </Pressable>
        </View>

        {/* IDENTITY */}
        <View style={styles.identityCard}>
          <View style={styles.identityTop}>
            {stats.avatarUrl ? (
              <Image
                source={resolveAvatarSource(stats.avatarUrl)}
                style={styles.avatar}
                accessibilityIgnoresInvertColors
              />
            ) : (
              <View style={[styles.avatar, styles.avatarFallback]}>
                <Text style={styles.avatarLetter}>{avatarLetter}</Text>
              </View>
            )}

            <View style={styles.identityInfo}>
              <Text style={styles.name} numberOfLines={1}>
                {stats.displayName}
              </Text>
              <View style={styles.pillRow}>
                <View style={styles.pill}>
                  <Text style={styles.pillText}>Level {xpLevel.level}</Text>
                </View>
                <View style={styles.pill}>
                  <Text style={styles.pillText} numberOfLines={1}>
                    Learning {dialect}
                  </Text>
                </View>
              </View>
            </View>

            <Pressable
              style={styles.editButton}
              onPress={() => setPickerVisible(true)}
              accessibilityRole="button"
              accessibilityLabel="Change profile photo"
            >
              <Ionicons name="pencil" size={18} color={bigkas.primary} />
            </Pressable>
          </View>

          <View
            style={styles.xpRow}
            accessible
            accessibilityLabel={`${xpLevel.intoLevel} of ${xpLevel.perLevel} XP. ${xpToNext} XP to Level ${xpLevel.level + 1}`}
          >
            <Text style={styles.xpText}>
              {xpLevel.intoLevel} / {xpLevel.perLevel} XP
            </Text>
            <Text style={styles.xpNext}>
              {xpToNext} XP to Level {xpLevel.level + 1}
            </Text>
          </View>
          <View style={styles.xpTrack}>
            <View
              style={[styles.xpFill, { width: `${xpLevel.fraction * 100}%` }]}
            />
          </View>
        </View>

        {/* STATS */}
        <View style={styles.statsGrid}>
          <View style={styles.statsRow}>
            <StatCard icon="star" value={`${stats.totalXp}`} label="Total XP" />
            <StatCard
              icon="podium"
              value={leaderboardScore === null ? "—" : `${leaderboardScore}`}
              label={`Leaderboard score · ${dialect}`}
            />
          </View>
          <View style={styles.statsRow}>
            <StatCard
              icon="flame"
              value={`${stats.dailyStreak} ${stats.dailyStreak === 1 ? "day" : "days"}`}
              label="Current streak"
            />
            <StatCard
              icon="trophy"
              value={`${stats.winStreak} in a row`}
              label="Wins in a row"
            />
          </View>
        </View>

        {/* ACHIEVEMENTS */}
        <View
          style={styles.sectionHeader}
          onLayout={(event) => {
            if (params.section !== "achievements" || scrolledToSection.current)
              return;
            scrolledToSection.current = true;
            scrollRef.current?.scrollTo({
              y: Math.max(0, event.nativeEvent.layout.y - 12),
              animated: true,
            });
          }}
        >
          <Text style={styles.sectionTitle}>Achievements</Text>
          <View style={styles.countPill}>
            <Text style={styles.countPillText}>
              {earnedCount} of {badges.length} badges
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.badgeGrid}>
            {badges.map((badge) => {
              // Locked badges don't give away their name yet.
              const shownName = badge.earned
                ? badge.name
                : `Lesson ${badge.lessonNumber} badge`;
              return (
                <Pressable
                  key={badge.lessonId}
                  style={styles.badgeCell}
                  disabled={!badge.earned}
                  onPress={() => setSelectedBadge(badge)}
                  accessibilityRole={badge.earned ? "button" : undefined}
                  accessibilityLabel={`${shownName}, ${badge.earned ? "earned" : "locked"}`}
                  accessibilityHint={
                    badge.earned ? "Shows badge details" : undefined
                  }
                >
                  <Medallion badge={badge} />
                  <Text style={styles.badgeName} numberOfLines={2}>
                    {shownName}
                  </Text>
                  <Text style={styles.badgeCaption} numberOfLines={1}>
                    {badge.earned
                      ? `Earned · Lesson ${badge.lessonNumber}`
                      : `Finish Lesson ${badge.lessonNumber}`}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        {/* GAME HISTORY */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Game history</Text>
          <Pressable
            style={styles.seeAll}
            onPress={() => router.push("/lesson-history" as any)}
            accessibilityRole="button"
            accessibilityLabel="See all game history"
          >
            <Text style={styles.seeAllText}>See all</Text>
          </Pressable>
        </View>
        <View style={styles.card}>
          {recentHistory.length === 0 ? (
            <LessonHistoryEmpty />
          ) : (
            recentHistory.map((entry, index) => (
              <LessonHistoryRow
                key={entry.lessonId}
                entry={entry}
                last={index === recentHistory.length - 1}
              />
            ))
          )}
        </View>

        {/* ACTIONS */}
        <Pressable
          style={({ pressed }) => [
            styles.primaryButton,
            pressed && styles.pressed,
          ]}
          onPress={() => router.push("/leaderboard" as any)}
          accessibilityRole="button"
        >
          <Ionicons name="podium" size={20} color={bigkas.white} />
          <Text style={styles.primaryButtonText}>View leaderboard</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.logoutButton,
            pressed && styles.pressed,
          ]}
          onPress={confirmLogout}
          accessibilityRole="button"
        >
          <Ionicons name="log-out-outline" size={20} color={DANGER} />
          <Text style={styles.logoutText}>Log out</Text>
        </Pressable>
      </ScrollView>

      {/* BADGE DETAILS */}
      <Modal
        visible={!!selectedBadge}
        transparent
        animationType="slide"
        onRequestClose={() => setSelectedBadge(null)}
      >
        <Pressable
          style={styles.sheetBackdrop}
          onPress={() => setSelectedBadge(null)}
          accessibilityLabel="Close badge details"
        />
        {selectedBadge && (
          <View style={[styles.sheet, { paddingBottom: insets.bottom + 20 }]}>
            <View style={styles.sheetHandle} />
            <Medallion badge={selectedBadge} />
            <Text style={styles.sheetTitle}>{selectedBadge.name}</Text>
            <Text style={styles.sheetLine}>
              Lesson {selectedBadge.lessonNumber} · {selectedBadge.lessonTitle}
            </Text>
            <Text style={styles.sheetLine}>
              {selectedBadge.entry?.xpEarned ?? 0} XP earned
            </Text>
            {selectedBadge.entry?.completedAt ? (
              <Text style={styles.sheetLine}>
                Earned {formatDate(selectedBadge.entry.completedAt)}
              </Text>
            ) : null}
            <Pressable
              style={styles.sheetButton}
              onPress={() => setSelectedBadge(null)}
              accessibilityRole="button"
            >
              <Text style={styles.sheetButtonText}>Close</Text>
            </Pressable>
          </View>
        )}
      </Modal>

      {/* SETTINGS */}
      <Modal
        visible={settingsVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setSettingsVisible(false)}
      >
        <Pressable
          style={styles.sheetBackdrop}
          onPress={() => setSettingsVisible(false)}
          accessibilityLabel="Close settings"
        />
        <View style={[styles.sheet, { paddingBottom: insets.bottom + 20 }]}>
          <View style={styles.sheetHandle} />
          <Text style={styles.sheetTitle}>Settings</Text>
          {[
            {
              icon: "person-circle-outline" as const,
              label: "Account details",
              path: "/user-profile",
            },
            {
              icon: "notifications-outline" as const,
              label: "Notifications",
              path: "/notifications",
            },
            {
              icon: "shield-checkmark-outline" as const,
              label: "Privacy policy",
              path: "/privacy",
            },
            {
              icon: "flag-outline" as const,
              label: "Report a problem",
              path: "/report",
            },
          ].map((item) => (
            <Pressable
              key={item.path}
              style={styles.settingsRow}
              onPress={() => openFromSettings(item.path)}
              accessibilityRole="button"
            >
              <Ionicons name={item.icon} size={22} color={bigkas.primary} />
              <Text style={styles.settingsText}>{item.label}</Text>
              <Ionicons name="chevron-forward" size={18} color={bigkas.muted} />
            </Pressable>
          ))}
        </View>
      </Modal>

      <AvatarPicker
        visible={pickerVisible}
        currentAvatarUrl={stats.avatarUrl}
        onClose={() => setPickerVisible(false)}
        onChange={(newUrl) =>
          setStats((prev) => (prev ? { ...prev, avatarUrl: newUrl } : prev))
        }
      />
    </SafeAreaView>
  );
}

const DANGER = "#C62828";

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    backgroundColor: bigkas.background,
  },
  loadingText: {
    fontSize: 15,
    fontWeight: "600",
    color: bigkas.muted,
  },
  container: {
    flex: 1,
    backgroundColor: bigkas.background,
  },
  statusBarFill: {
    backgroundColor: bigkas.primary,
  },
  pressed: {
    opacity: 0.8,
  },

  /* HEADER */
  header: {
    backgroundColor: bigkas.primary,
    paddingHorizontal: 16,
    paddingTop: 12,
    // Room for the identity card, which overlaps the header by 54.
    paddingBottom: 54 + 16,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerButton: {
    width: MIN_TAP,
    height: MIN_TAP,
    borderRadius: MIN_TAP / 2,
    backgroundColor: "rgba(255,255,255,0.14)",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: bigkas.white,
  },

  /* IDENTITY */
  identityCard: {
    marginTop: -54,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 24,
    backgroundColor: bigkas.white,
    borderWidth: 1,
    borderColor: bigkas.border,
    shadowColor: bigkas.ink,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 4,
  },
  identityTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 3,
    borderColor: bigkas.gold,
  },
  avatarFallback: {
    backgroundColor: bigkas.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarLetter: {
    fontSize: 28,
    fontWeight: "800",
    color: bigkas.white,
  },
  identityInfo: {
    flex: 1,
    minWidth: 0,
  },
  name: {
    fontSize: 20,
    fontWeight: "800",
    color: bigkas.ink,
  },
  pillRow: {
    marginTop: 6,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  pill: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: bigkas.chip,
    maxWidth: "100%",
  },
  pillText: {
    fontSize: 12,
    fontWeight: "800",
    color: bigkas.primary,
  },
  editButton: {
    width: MIN_TAP,
    height: MIN_TAP,
    borderRadius: MIN_TAP / 2,
    borderWidth: 1.5,
    borderColor: bigkas.border,
    alignItems: "center",
    justifyContent: "center",
  },
  xpRow: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    flexWrap: "wrap",
    gap: 6,
  },
  xpText: {
    fontSize: 16,
    fontWeight: "800",
    color: bigkas.ink,
  },
  xpNext: {
    fontSize: 13,
    fontWeight: "600",
    color: bigkas.muted,
  },
  xpTrack: {
    marginTop: 8,
    height: 10,
    borderRadius: 5,
    backgroundColor: bigkas.chip,
    overflow: "hidden",
  },
  xpFill: {
    height: "100%",
    borderRadius: 5,
    backgroundColor: bigkas.accent,
  },

  /* STATS */
  statsGrid: {
    marginTop: 16,
    marginHorizontal: 16,
    gap: 10,
  },
  statsRow: {
    flexDirection: "row",
    gap: 10,
  },
  statCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 12,
    borderRadius: 18,
    backgroundColor: bigkas.white,
    borderWidth: 1,
    borderColor: bigkas.border,
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: bigkas.chip,
    alignItems: "center",
    justifyContent: "center",
  },
  statText: {
    flex: 1,
    minWidth: 0,
  },
  statValue: {
    fontSize: 16,
    fontWeight: "800",
    color: bigkas.ink,
  },
  statLabel: {
    fontSize: 11,
    fontWeight: "600",
    color: bigkas.muted,
  },

  /* SECTIONS */
  sectionHeader: {
    marginTop: 24,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: bigkas.ink,
  },
  countPill: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: bigkas.chip,
  },
  countPillText: {
    fontSize: 12,
    fontWeight: "800",
    color: bigkas.primary,
  },
  seeAll: {
    minHeight: MIN_TAP,
    minWidth: MIN_TAP,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: "800",
    color: bigkas.primary,
  },
  card: {
    marginTop: 10,
    marginHorizontal: 16,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 24,
    backgroundColor: bigkas.white,
    borderWidth: 1,
    borderColor: bigkas.border,
  },

  /* BADGES */
  badgeGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  badgeCell: {
    width: "33.33%",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  medallion: {
    width: MEDALLION,
    height: MEDALLION,
    alignItems: "center",
    justifyContent: "center",
  },
  medallionBox: {
    width: MEDALLION,
    height: MEDALLION,
    alignItems: "center",
    justifyContent: "center",
  },
  medallionContent: {
    position: "absolute",
  },
  medallionText: {
    fontSize: 18,
    fontWeight: "800",
    color: bigkas.gold,
  },
  hexagon: {
    alignItems: "center",
    justifyContent: "center",
  },
  lockedMedallion: {
    width: MEDALLION,
    height: MEDALLION,
    borderRadius: MEDALLION / 2,
    backgroundColor: bigkas.locked,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: bigkas.border,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeName: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: "800",
    textAlign: "center",
    color: bigkas.ink,
  },
  badgeCaption: {
    marginTop: 2,
    fontSize: 11,
    textAlign: "center",
    color: bigkas.muted,
  },

  /* ACTIONS */
  primaryButton: {
    marginTop: 24,
    marginHorizontal: 16,
    minHeight: 52,
    borderRadius: 16,
    backgroundColor: bigkas.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: "800",
    color: bigkas.white,
  },
  logoutButton: {
    marginTop: 12,
    marginHorizontal: 16,
    minHeight: 52,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: DANGER,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "800",
    color: DANGER,
  },

  /* SHEETS */
  sheetBackdrop: {
    flex: 1,
    backgroundColor: "rgba(27,19,64,0.4)",
  },
  sheet: {
    paddingHorizontal: 20,
    paddingTop: 12,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    backgroundColor: bigkas.white,
    alignItems: "center",
  },
  sheetHandle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    marginBottom: 16,
    backgroundColor: bigkas.border,
  },
  sheetTitle: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "800",
    color: bigkas.ink,
    textAlign: "center",
  },
  sheetLine: {
    marginTop: 6,
    fontSize: 14,
    color: bigkas.muted,
    textAlign: "center",
  },
  sheetButton: {
    marginTop: 18,
    alignSelf: "stretch",
    minHeight: 48,
    borderRadius: 14,
    backgroundColor: bigkas.chip,
    alignItems: "center",
    justifyContent: "center",
  },
  sheetButtonText: {
    fontSize: 15,
    fontWeight: "800",
    color: bigkas.primary,
  },
  settingsRow: {
    alignSelf: "stretch",
    minHeight: 52,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: bigkas.border,
  },
  settingsText: {
    flex: 1,
    fontSize: 15,
    fontWeight: "700",
    color: bigkas.ink,
  },
});
