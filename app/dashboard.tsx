import { usePathname, useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, radius, shadow, spacing, typography } from "../constant/theme";
import { updateDailyStreak } from "../services/streak";
import { supabase } from "../services/supabase";
import { resolveAvatarSource } from "../utils/avatars";
import AvatarPicker from "./components/AvatarPicker";
import NotificationBell from "./components/NotificationBell";

const logoutIcon = require("../assets/images/logout.png");
const trophyIcon = require("../assets/images/leaderboard-trophy.png");
const mascotImage = require("../assets/images/bigkas-mascot.png");

function Avatar({
  size,
  textSize,
  photoUri,
  uploadingPhoto,
  avatarLetter,
}: {
  size: number;
  textSize: number;
  photoUri: string | null;
  uploadingPhoto: boolean;
  avatarLetter: string;
}) {
  const circleStyle = {
    width: size,
    height: size,
    borderRadius: size,
    borderWidth: 3,
    borderColor: "rgba(255,255,255,0.5)",
  };

  if (uploadingPhoto) {
    return (
      <View style={[circleStyle, styles.avatarCircle]}>
        <ActivityIndicator size="small" color="#FFFFFF" />
      </View>
    );
  }

  if (photoUri) {
    // resolveAvatarSource handles both bundled presets
    // ("preset:tarsier_boy") and uploaded photo URLs — a plain { uri }
    // renders blank for presets.
    return (
      <Image
        source={resolveAvatarSource(photoUri)}
        style={[circleStyle, { resizeMode: "cover" }]}
      />
    );
  }

  return (
    <View style={[circleStyle, styles.avatarCircle]}>
      <Text style={[styles.avatarText, { fontSize: textSize }]}>
        {avatarLetter}
      </Text>
    </View>
  );
}

export default function HomeScreen() {
  const router = useRouter();
  const pathname = usePathname();

  const [displayName, setDisplayName] = useState("");
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [currentStreak, setCurrentStreak] = useState(0);
  const [currentWinningStreak, setCurrentWinningStreak] = useState(0);

  const [menuVisible, setMenuVisible] = useState(false);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);

  // Opens the avatar picker (presets + custom upload). Replaces the old
  // handlePickPhoto, which went straight to the photo library.
  const [pickerVisible, setPickerVisible] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const [selectedDialect, setSelectedDialect] = useState(0);
  const [selectedLevel, setSelectedLevel] = useState(0);

  const [dialects, setDialects] = useState([
    {
      id: 0,
      name: "Tagalog",
      lesson: "Basic Greetings",
      subtitle: "Learn how to greet people in Tagalog.",
      difficulty: "Beginner",
      duration: "5–10 min",
      levels: [
        { id: 1, lessonId: "tagalog_1", completed: false },
        { id: 2, lessonId: "tagalog_2", completed: false },
        { id: 3, lessonId: "tagalog_3", completed: false },
        { id: 4, lessonId: "tagalog_4", completed: false },
        { id: 5, lessonId: "tagalog_5", completed: false },
      ],
    },

    {
      id: 1,
      name: "Kapampangan",
      lesson: "Pangumusta",
      subtitle: "Learn basic greetings in Kapampangan.",
      levels: [
        { id: 1, lessonId: "kapampangan_1", completed: false },
        { id: 2, lessonId: "kapampangan_2", completed: false },
        { id: 3, lessonId: "kapampangan_3", completed: false },
        { id: 4, lessonId: "kapampangan_4", completed: false },
        { id: 5, lessonId: "kapampangan_5", completed: false },
      ],
    },

    {
      id: 2,
      name: "Waray",
      lesson: "Maupay nga Aga",
      subtitle: "Learn basic greetings in Waray.",
      levels: [
        { id: 1, lessonId: "waray_1", completed: false },
        { id: 2, lessonId: "waray_2", completed: false },
        { id: 3, lessonId: "waray_3", completed: false },
        { id: 4, lessonId: "waray_4", completed: false },
        { id: 5, lessonId: "waray_5", completed: false },
      ],
    },
  ]);

  const currentDialect = dialects[selectedDialect];

  function nextDialect() {
    setSelectedDialect((prev) => (prev + 1) % dialects.length);
  }

  function previousDialect() {
    setSelectedDialect((prev) => (prev === 0 ? dialects.length - 1 : prev - 1));
  }

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    setSelectedLevel(0);
  }, [selectedDialect]);

  function openMenu() {
    setMenuVisible(true);

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  }

  function closeMenu() {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => setMenuVisible(false));
  }

  async function loadUser() {
    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.replace("/" as any);
      return;
    }

    const streak = await updateDailyStreak(user.id);

    if (streak) {
      setCurrentStreak(streak.current_streak);
    }

    const { data: winningStreak, error: winningStreakError } = await supabase
      .from("winning_streaks")
      .select("current_streak")
      .eq("user_id", user.id)
      .maybeSingle();

    if (winningStreakError) {
      console.error("🏆 Winning streak load error:", winningStreakError);
    }

    setCurrentWinningStreak(winningStreak?.current_streak ?? 0);

    const { data: profile } = await supabase
      .from("profiles")
      .select("display_name, avatar_url, tutorial_completed")
      .eq("id", user.id)
      .single();

    const { data: lessonProgress, error: lessonError } = await supabase
      .from("lesson_progress")
      .select("lesson_id")
      .eq("user_id", user.id);

    if (lessonError) {
      console.error("Lesson progress load error:", lessonError);
    }

    const completedLessons = new Set(
      (lessonProgress ?? []).map((lesson) => lesson.lesson_id),
    );

    setDialects((prevDialects) =>
      prevDialects.map((dialect) => ({
        ...dialect,
        levels: dialect.levels.map((level) => ({
          ...level,
          completed: completedLessons.has(level.lessonId),
        })),
      })),
    );

    setDisplayName(profile?.display_name ?? "Learner");
    setPhotoUri(profile?.avatar_url ?? null);

    if (!profile?.tutorial_completed) {
      router.replace("/tutorial");
      return;
    }

    setLoading(false);
  }

  async function handleLogout() {
    closeMenu();

    await supabase.auth.signOut();

    router.replace("/" as any);
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#410FA3" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  const avatarLetter = (displayName ?? "L").charAt(0).toUpperCase();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <Pressable
            onPress={() => router.push("/user-profile" as any)}
            style={styles.avatarWrapper}
          >
            <Avatar
              size={60}
              textSize={24}
              photoUri={photoUri}
              uploadingPhoto={uploadingPhoto}
              avatarLetter={avatarLetter}
            />
          </Pressable>

          <View style={styles.headerLeft}>
            <Text style={styles.welcomeText}>Welcome back!</Text>

            <Text style={styles.nameText}>{displayName}</Text>
          </View>

          <View style={styles.headerActions}>
            <Pressable
              onPress={() => router.push("/leaderboard" as any)}
              style={styles.trophyBtn}
            >
              <Image
                source={trophyIcon}
                style={styles.trophyIcon}
                resizeMode="contain"
              />
            </Pressable>

            <View style={styles.bellWrapper}>
              <NotificationBell
                color={colors.textOnPrimary}
                size={26}
                badgeBorderColor={colors.primary}
              />
            </View>

            <Pressable onPress={openMenu} style={styles.menuBtn}>
              <View style={styles.menuDot} />
              <View style={styles.menuDot} />
              <View style={styles.menuDot} />
            </Pressable>
          </View>

          {/* TEMP: TONE TEST BUTTON — remove after testing */}
          {/*
          <Pressable
            onPress={() => router.push("/tone-test" as any)}
            style={{
              width: 42,
              height: 42,
              borderRadius: 21,
              backgroundColor: "#22C55E",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 18 }}>🎤</Text>
          </Pressable>*/}
        </View>

        {/* STREAKS */}
        <View style={styles.streakRow}>
          {currentStreak > 0 && (
            <View style={styles.streakPill}>
              <Text style={styles.streakText}>
                🔥 {currentStreak} {currentStreak === 1 ? "day" : "days"}
              </Text>
            </View>
          )}

          <View style={styles.streakPill}>
            <Text style={styles.streakText}>
              🏆 {currentWinningStreak}{" "}
              {currentWinningStreak === 1 ? "win" : "wins"}
            </Text>
          </View>
        </View>

        {/* GAME / LESSON CARD */}
        <View style={styles.gameCard}>
          {/* DIALECT */}
          <View style={styles.dialectHeader}>
            <TouchableOpacity
              style={styles.arrowButton}
              onPress={previousDialect}
              activeOpacity={0.75}
            >
              <Image
                source={require("../assets/images/next-left.png")}
                style={styles.arrowImage}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <View style={styles.dialectTitleContainer}>
              <Text style={styles.dialectSmallLabel}>LEARNING</Text>

              <Text style={styles.dialectTitle}>{currentDialect.name}</Text>
            </View>

            <TouchableOpacity
              style={styles.arrowButton}
              onPress={nextDialect}
              activeOpacity={0.75}
            >
              <Image
                source={require("../assets/images/next-right.png")}
                style={styles.arrowImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          {/* LEVEL PROGRESS */}
          <View style={styles.progressHeader}>
            <Text style={styles.levelLabel}>Lesson Progress</Text>

            <Text style={styles.progressHint}>
              {currentDialect.levels.filter((level) => level.completed).length}/
              {currentDialect.levels.length}
            </Text>
          </View>

          <View style={styles.levelRow}>
            {currentDialect.levels.map((level, index) => {
              const unlocked =
                index === 0 || currentDialect.levels[index - 1].completed;

              const selected = index === selectedLevel;

              return (
                <TouchableOpacity
                  key={level.id}
                  disabled={!unlocked}
                  onPress={() => setSelectedLevel(index)}
                  activeOpacity={0.8}
                  style={[
                    selected
                      ? styles.levelActive
                      : level.completed
                        ? styles.levelCompleted
                        : unlocked
                          ? styles.levelUnlocked
                          : styles.levelLocked,
                  ]}
                >
                  <Text
                    style={
                      selected
                        ? styles.levelActiveText
                        : level.completed
                          ? styles.levelCompletedText
                          : unlocked
                            ? styles.levelText
                            : styles.lockText
                    }
                  >
                    {level.completed ? "✓" : unlocked ? level.id : "🔒"}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* HERO */}
          <View style={styles.heroContainer}>
            <View style={styles.mascotGlow}>
              <Image
                source={mascotImage}
                style={styles.heroImage}
                resizeMode="contain"
              />
            </View>

            <Text style={styles.lessonTitle}>{currentDialect.lesson}</Text>

            <Text style={styles.lessonSubtitle}>{currentDialect.subtitle}</Text>

            <View style={styles.lessonInfoRow}>
              <View style={styles.lessonBadge}>
                <Text style={styles.lessonBadgeText}>
                  🟢 {currentDialect.difficulty}
                </Text>
              </View>

              <View style={styles.lessonBadge}>
                <Text style={styles.lessonBadgeText}>
                  ⏱ {currentDialect.duration}
                </Text>
              </View>
            </View>

            {/* START PRACTICE */}
            <TouchableOpacity
              style={styles.playButton}
              activeOpacity={0.85}
              onPress={() =>
                router.push({
                  pathname: "/lesson/pretest",
                  params: {
                    lessonId: currentDialect.levels[selectedLevel].lessonId,
                  },
                } as any)
              }
            >
              <View style={styles.playIconCircle}>
                <Image
                  source={require("../assets/images/play.png")}
                  style={styles.playImage}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.playButtonContent}>
                <Text style={styles.playTitle}>START PRACTICE</Text>

                <Text style={styles.playSubtitle}>Continue your lesson</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* BOTTOM NAVIGATION */}
        <View style={styles.bottomNav}>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => router.push("/lessons" as any)}
            activeOpacity={0.7}
          >
            <Image
              source={
                pathname === "/lessons"
                  ? require("../assets/images/Lessons on click.png")
                  : require("../assets/images/Lessons.png")
              }
              style={styles.navImage}
              resizeMode="contain"
            />

            <Text style={styles.navText}>Lessons</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => router.push("/story" as any)}
            activeOpacity={0.7}
          >
            <Image
              source={
                pathname === "/story"
                  ? require("../assets/images/Story on click.png")
                  : require("../assets/images/Story.png")
              }
              style={styles.navImage}
              resizeMode="contain"
            />

            <Text style={styles.navText}>Story</Text>
          </TouchableOpacity>
        </View>

        {/* DROPDOWN MENU */}
        {menuVisible && (
          <Modal
            transparent
            visible
            animationType="none"
            onRequestClose={closeMenu}
          >
            <TouchableOpacity
              style={styles.backdrop}
              activeOpacity={1}
              onPress={closeMenu}
            >
              <Animated.View style={[styles.dropdown, { opacity: fadeAnim }]}>
                <View style={styles.dropdownArrow} />

                <View style={styles.dropdownMenu}>
                  <View style={styles.dropdownHeader}>
                    <View style={styles.dropdownAvatar}>
                      <Avatar
                        size={40}
                        textSize={18}
                        photoUri={photoUri}
                        uploadingPhoto={uploadingPhoto}
                        avatarLetter={avatarLetter}
                      />
                    </View>

                    <View>
                      <Text style={styles.dropdownName}>{displayName}</Text>

                      <Text style={styles.dropdownRole}>Bigkas Learner</Text>
                    </View>
                  </View>

                  <View style={styles.dropdownDivider} />

                  {[
                    {
                      icon: "",
                      label: "My profile",
                      onPress: () => {
                        closeMenu();

                        router.push("/user-profile" as any);
                      },
                    },
                    {
                      icon: "",
                      label: "Change profile photo",
                      onPress: () => {
                        closeMenu();

                        setPickerVisible(true);
                      },
                    },
                    {
                      icon: "",
                      label: "Report",
                      onPress: () => {
                        closeMenu();

                        router.push("/report" as any);
                      },
                    },
                  ].map(({ icon, label, onPress }) => (
                    <TouchableOpacity
                      key={label}
                      style={styles.dropdownItem}
                      onPress={onPress}
                    >
                      <Text style={styles.dropdownItemIcon}>{icon}</Text>

                      <Text style={styles.dropdownItemText}>{label}</Text>
                    </TouchableOpacity>
                  ))}

                  <View style={styles.dropdownDivider} />

                  <TouchableOpacity
                    style={styles.dropdownItem}
                    onPress={handleLogout}
                  >
                    <Image source={logoutIcon} style={styles.logoutIcon} />

                    <Text
                      style={[styles.dropdownItemText, styles.dropdownLogout]}
                    >
                      Log out
                    </Text>
                  </TouchableOpacity>
                </View>
              </Animated.View>
            </TouchableOpacity>
          </Modal>
        )}
      </ScrollView>

      {/* Avatar picker lives OUTSIDE the ScrollView — a modal nested in
          a scroll view can misbehave with scroll gestures. */}
      <AvatarPicker
        visible={pickerVisible}
        currentAvatarUrl={photoUri}
        onClose={() => setPickerVisible(false)}
        onChange={(newUrl) => setPhotoUri(newUrl)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.surface,
    gap: spacing.md,
  },

  loadingText: {
    fontSize: typography.size.md,
    color: colors.gray600,
  },

  container: {
    flex: 1,
    backgroundColor: colors.backgroundAlt,
  },

  scroll: {
    flexGrow: 1,
    paddingBottom: 120,
  },

  /* ---------------- HEADER ---------------- */

  header: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.xxl,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xl,

    flexDirection: "row",
    alignItems: "center",
    gap: spacing.lg,
  },

  headerLeft: {
    flex: 1,
    gap: spacing.xs,
  },

  welcomeText: {
    fontSize: typography.size.md,
    color: colors.textOnPrimaryMuted,
    fontWeight: typography.weight.regular,
  },

  nameText: {
    fontSize: typography.size.display,
    fontWeight: typography.weight.extrabold,
    color: colors.textOnPrimary,
  },

  headerActions: {
    flexDirection: "row",
    alignItems: "center",
  },

  bellWrapper: {
    marginLeft: spacing.md,
    marginRight: spacing.sm,
  },

  trophyBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0,
  },

  trophyIcon: {
    width: 40,
    height: 40,
    marginLeft: spacing.sm,
    resizeMode: "contain",
  },

  avatarWrapper: {
    position: "relative",
  },

  avatarCircle: {
    backgroundColor: colors.overlayWhite,
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    fontWeight: typography.weight.extrabold,
    color: colors.textOnPrimary,
  },

  menuBtn: {
    width: 32,
    height: 40,
    gap: spacing.xs,
    alignItems: "center",
    justifyContent: "center",
  },

  menuDot: {
    width: 4,
    height: 4,
    borderRadius: radius.round,
    backgroundColor: colors.textOnPrimary,
  },

  /* ---------------- STREAK ---------------- */

  streakRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: spacing.md - 2,
    marginBottom: 2,
    gap: spacing.sm,
  },

  streakPill: {
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: radius.xl,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.borderLight,
    ...shadow.cardSoft,
  },

  streakText: {
    fontSize: typography.size.base,
    fontWeight: typography.weight.bold,
    color: "#6B4B00", // one-off gold-brown accent, only used here
  },

  /* ---------------- GAME CARD ---------------- */

  gameCard: {
    backgroundColor: "rgba(255,255,255,0.94)", // intentional translucency over background
    marginHorizontal: spacing.xl - 2,
    marginTop: spacing.lg,
    borderRadius: radius.xxxl + 4,
    paddingHorizontal: spacing.xl - 2,
    paddingTop: spacing.xl - 2,
    paddingBottom: spacing.xxl - 2,
    borderWidth: 1,
    borderColor: colors.borderMuted,

    // unique shadow tint (purple-black), not the standard shadow.card
    shadowColor: "#2D1B69",
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 7 },
    elevation: 5,
  },

  /* ---------------- DIALECT ---------------- */

  dialectHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.lg,
  },

  dialectTitleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  dialectSmallLabel: {
    fontSize: typography.size.xs + 0,
    fontWeight: typography.weight.extrabold,
    letterSpacing: 1.5,
    color: colors.textLabel,
    marginBottom: 2,
  },

  dialectTitle: {
    textAlign: "center",
    fontSize: 23,
    fontWeight: typography.weight.extrabold,
    color: colors.primary,
  },

  arrowButton: {
    width: 42,
    height: 42,
    borderRadius: radius.sm,
    backgroundColor: colors.primarySoft,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.primaryBorderSoft,
  },

  arrowImage: {
    width: 22,
    height: 22,
  },

  /* ---------------- LEVEL PROGRESS ---------------- */

  progressHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.md - 2,
  },

  levelLabel: {
    fontSize: typography.size.base,
    fontWeight: typography.weight.bold,
    color: "#777185", // close to textMutedSoft but distinct enough to leave as-is
  },

  progressHint: {
    fontSize: typography.size.sm + 1,
    fontWeight: typography.weight.bold,
    color: colors.primary,
    backgroundColor: colors.primarySoft,
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: radius.sm - 2,
  },

  levelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  levelActive: {
    width: 55,
    height: 55,
    borderRadius: radius.lg,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: colors.surface,
    ...shadow.primaryGlow,
    shadowOpacity: 0.28,
    shadowRadius: 9,
    shadowOffset: { width: 0, height: 5 },
  },

  levelUnlocked: {
    width: 55,
    height: 55,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: colors.borderStrong,
    ...shadow.cardSoft,
    shadowOpacity: 0.06,
    shadowRadius: 4,
  },

  levelCompleted: {
    width: 55,
    height: 55,
    borderRadius: radius.lg,
    backgroundColor: colors.success,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: colors.successDark,
    ...shadow.successGlow,
  },

  levelLocked: {
    width: 55,
    height: 55,
    borderRadius: radius.lg,
    backgroundColor: colors.gray100,
    borderWidth: 1,
    borderColor: colors.gray200,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.7,
  },

  levelText: {
    color: colors.primary,
    fontWeight: typography.weight.black,
    fontSize: 20,
    lineHeight: 24,
    textAlign: "center",
    includeFontPadding: false,
  },

  levelActiveText: {
    color: colors.textOnPrimary,
    fontWeight: typography.weight.black,
    fontSize: 20,
    lineHeight: 24,
    textAlign: "center",
    includeFontPadding: false,
  },

  levelCompletedText: {
    color: colors.textOnPrimary,
    fontWeight: typography.weight.black,
    fontSize: 20,
    lineHeight: 24,
    textAlign: "center",
    includeFontPadding: false,
  },

  lockText: {
    fontSize: typography.size.xxl,
    opacity: 0.7,
  },

  /* ---------------- HERO ---------------- */

  heroContainer: {
    alignItems: "center",
    marginTop: spacing.xxl,
    paddingTop: 2,
  },

  mascotGlow: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignItems: "center",
    justifyContent: "center",
  },

  heroImage: {
    width: 135,
    height: 135,
  },

  lessonTitle: {
    fontSize: typography.size.display,
    fontWeight: typography.weight.extrabold,
    marginTop: spacing.xl - 2,
    color: "#202020",
    textAlign: "center",
  },

  lessonSubtitle: {
    marginTop: 7,
    color: colors.textMutedAlt,
    textAlign: "center",
    paddingHorizontal: spacing.lg,
    fontSize: typography.size.md,
    lineHeight: 20,
  },

  lessonInfoRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: spacing.sm,
    marginTop: 15,
    marginBottom: 3,
  },

  lessonBadge: {
    backgroundColor: colors.primarySoft,
    paddingHorizontal: spacing.md,
    paddingVertical: 7,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.primaryBorderSoft,
  },

  lessonBadgeText: {
    color: "#5A477C", // one-off, close to primary but muted
    fontWeight: typography.weight.bold,
    fontSize: typography.size.base - 1,
  },

  /* --------------- PLAY BUTTON ---------------- */

  playButton: {
    width: "100%",
    marginTop: spacing.xxl - 2,
    backgroundColor: colors.primary,
    borderRadius: radius.xl - 1,
    paddingVertical: 13,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    ...shadow.primaryGlow,
  },

  playIconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.overlayWhite,
    alignItems: "center",
    justifyContent: "center",
  },

  playImage: {
    width: 20,
    height: 20,
  },

  playButtonContent: {
    flex: 1,
    marginLeft: spacing.md,
  },

  playTitle: {
    color: colors.textOnPrimary,
    fontWeight: typography.weight.extrabold,
    fontSize: typography.size.xl,
    letterSpacing: 0.3,
  },

  playSubtitle: {
    color: "rgba(255,255,255,0.72)",
    marginTop: 2,
    fontSize: typography.size.sm,
    fontWeight: typography.weight.regular,
  },

  playArrow: {
    color: colors.textOnPrimary,
    fontSize: 23,
    fontWeight: "600",
    marginRight: 3,
  },

  /* ---------------- BOTTOM NAV ---------------- */

  bottomNav: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: colors.surface,
    borderRadius: radius.xxxl + 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: spacing.lg,
    ...shadow.card,
  },

  navItem: {
    flex: 1,
    alignItems: "center",
  },

  navText: {
    marginTop: 5,
    fontWeight: typography.weight.bold,
    color: colors.primary,
  },

  navImage: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },

  /* ---------------- DROPDOWN ---------------- */

  backdrop: {
    flex: 1,
    backgroundColor: colors.overlayDark,
  },

  dropdown: {
    position: "absolute",
    top: 100,
    right: 16,
    width: 240,
  },

  dropdownArrow: {
    width: 12,
    height: 12,
    backgroundColor: colors.surface,
    transform: [{ rotate: "45deg" }],
    alignSelf: "flex-end",
    marginRight: spacing.lg,
    marginBottom: -6,
    borderTopLeftRadius: 2,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: colors.borderSoft,
  },

  dropdownMenu: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.borderSoft,
  },

  dropdownHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    padding: spacing.lg,
    backgroundColor: colors.surfaceMuted,
  },

  dropdownAvatar: {
    width: 40,
    height: 40,
    borderRadius: radius.round,
    overflow: "hidden",
  },

  dropdownName: {
    fontSize: typography.size.lg,
    fontWeight: typography.weight.bold,
    color: colors.textBody,
  },

  dropdownRole: {
    fontSize: typography.size.sm,
    color: colors.gray400,
  },

  dropdownDivider: {
    height: 1,
    backgroundColor: colors.borderSoft,
  },

  dropdownItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: 14,
  },

  dropdownItemIcon: {
    fontSize: typography.size.xxl,
  },

  dropdownItemText: {
    fontSize: typography.size.lg,
    color: colors.textBody,
    fontWeight: typography.weight.regular,
  },

  dropdownLogout: {
    color: colors.dangerDark,
  },

  logoutIcon: {
    width: 20,
    height: 20,
  },

  /* ---------------- EXISTING UNUSED MODAL STYLES ---------------- */

  modalOverlay: {
    flex: 1,
    backgroundColor: colors.overlayDarker,
    justifyContent: "flex-end",
  },

  sheet: {
    backgroundColor: colors.background,
    borderTopLeftRadius: radius.xxxl + 6,
    borderTopRightRadius: radius.xxxl + 6,
    padding: 25,
  },

  sheetTitle: {
    fontSize: typography.size.display,
    fontWeight: typography.weight.extrabold,
    textAlign: "center",
    color: colors.textBody,
  },

  sheetSubtitle: {
    textAlign: "center",
    marginTop: 6,
    marginBottom: 25,
    color: colors.gray500,
  },

  dialectCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.lg + 2,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    ...shadow.cardSoft,
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  cardEmoji: {
    fontSize: 34,
  },

  cardText: {
    flex: 1,
    marginLeft: spacing.lg - 1,
  },

  cardTitle: {
    fontSize: typography.size.xxl,
    fontWeight: typography.weight.bold,
  },

  cardSub: {
    color: colors.gray500,
    marginTop: 2,
  },

  cardLessons: {
    marginTop: 6,
    color: "#5B5CFF", // one-off accent used only in unused legacy styles
    fontWeight: typography.weight.semibold,
  },

  cardArrow: {
    fontSize: 32,
    color: "#5B5CFF",
  },

  cancelButton: {
    marginTop: spacing.xl,
    backgroundColor: colors.primary,
    paddingVertical: spacing.lg,
    borderRadius: radius.md - 1,
    alignItems: "center",
  },

  cancelText: {
    color: colors.textOnPrimary,
    fontWeight: typography.weight.bold,
    fontSize: typography.size.xl,
  },

  /* Existing compatibility styles */

  levelSelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 25,
  },

  levelButton: {
    width: 52,
    height: 52,
    borderRadius: radius.lg - 2,
    backgroundColor: "#3D1A83", // one-off legacy color
    justifyContent: "center",
    alignItems: "center",
  },

  levelButtonActive: {
    backgroundColor: "#5B5CFF",
    borderWidth: 2,
    borderColor: "#22D3EE",
  },

  levelButtonLocked: {
    opacity: 0.4,
  },

  levelButtonText: {
    color: colors.textOnPrimary,
    fontWeight: typography.weight.extrabold,
    fontSize: typography.size.xxl,
  },

  levelButtonTextActive: {
    color: colors.textOnPrimary,
  },

  playButtonText: {
    color: colors.textOnPrimary,
    fontSize: typography.size.lg,
    fontWeight: typography.weight.extrabold,
  },
});
