import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useLessonAudio } from "../components/lesson/useLessonAudio";
import ProfileMenu, { MenuAnchor } from "../components/ProfileMenu";
import { bigkas, MIN_TAP } from "../constant/bigkasTheme";
import { spacing, typography } from "../constant/theme";
import { structuredLessonsById } from "../data/lessons/structuredLessons";
import { practiceLevels } from "../data/practiceData";
import { useLevelUnlockCelebration } from "../hooks/useLevelUnlockCelebration";
import { useSeenBadges } from "../hooks/useSeenBadges";
import { useStoryProgress } from "../hooks/useStoryProgress";
import { saveActiveDialect, toLearnerDialect } from "../services/learnerProfile";
import { getDailyStreak } from "../services/streak";
import { retryOnJwtIssuedAtFuture, supabase } from "../services/supabase";
import { LessonDialect, StructuredLesson } from "../types/structuredLesson";
import { resolveAvatarSource } from "../utils/avatars";
import { levelProgress } from "../utils/lessonCompletion";
import {
  currentTierIndex,
  LESSONS_PER_TIER,
  TierLanguage,
  tierLessonIds,
  TIERS,
} from "../utils/lessonTiers";
import { openLesson, UNLOCK_ALL_LESSONS } from "../utils/openLesson";
import AvatarPicker from "./components/AvatarPicker";
import BottomNav, {
  BOTTOM_NAV_GAP,
  BOTTOM_NAV_HEIGHT,
} from "./components/BottomNav";
import NotificationBell from "./components/NotificationBell";

const mascotImage = require("../assets/images/bigkas-mascot.png");

// Lessons shown on the Home path at a time.
const PATH_LENGTH = 5;

// Activities with a screen in the structured flow, plus the ones kept as
// extra activities (Tagalog Lesson 1: match, fill in, arrange, speaking
// and self-introduction = 5).
function countActivities(lesson: StructuredLesson): number {
  let count = 0;
  if (lesson.matchActivity?.pairs.length) count += 1;
  if (lesson.choiceActivity?.questions.length) count += 1;
  const fillItems = lesson.fillInBlanks?.items ?? [];
  if (fillItems.length) {
    // Lessons with several titled fill-in activities in one step.
    const titles = new Set(fillItems.map((item) => item.title).filter(Boolean));
    count += Math.max(1, titles.size);
  }
  if (lesson.arrangeWords?.items.length) count += 1;
  if (lesson.speaking?.phrases.length) count += 1;
  return count + (lesson.extraActivities?.length ?? 0);
}

// What the hero card shows for a lesson, read from the lesson data.
function getLessonSummary(lessonId: string, lessonNumber: number) {
  const practice = practiceLevels.find((level) => level.lessonId === lessonId);
  const structured = structuredLessonsById[lessonId];
  const vocabulary = structured
    ? structured.vocabulary?.length ||
      (structured.expressionGroups ?? []).reduce(
        (sum, group) => sum + group.items.length,
        0,
      )
    : (practice?.phrases.length ?? 0);

  return {
    title: structured?.title ?? practice?.title ?? null,
    subtitle: practice?.subtitle ?? null,
    firstPhrase: practice?.phrases[0] ?? null,
    vocabulary,
    // Lessons without the structured flow: pretest + practice game.
    activities: structured ? countActivities(structured) : 2,
    // Same XP rule as the lessons board (app/lessons.tsx).
    xp:
      structured?.rewards?.total ??
      10 + 10 * (Math.floor(((practice?.id ?? lessonNumber) - 1) / 2) + 1),
  };
}

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

// The signed-in learner's name and photo, kept for this app session so
// coming back to Home shows it straight away while it refreshes.
let knownProfile: {
  userId: string;
  displayName: string;
  avatarUrl: string | null;
} | null = null;

export default function HomeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const {
    loading: progressLoading,
    isLessonComplete,
    isLessonUnlocked,
    isTierOpen,
    getCompletion,
  } = useStoryProgress();

  // Opens "New level unlocked" once after Easy/Intermediate is finished.
  useLevelUnlockCelebration({ loading: progressLoading, isTierOpen });

  const [displayName, setDisplayName] = useState("");
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [currentStreak, setCurrentStreak] = useState(0);
  const [currentWinningStreak, setCurrentWinningStreak] = useState(0);
  const [totalXp, setTotalXp] = useState(0);

  const [userId, setUserId] = useState<string | null>(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState<MenuAnchor | null>(null);
  const menuButtonRef = useRef<View>(null);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);

  // Opens the avatar picker (presets + custom upload). Replaces the old
  // handlePickPhoto, which went straight to the photo library.
  const [pickerVisible, setPickerVisible] = useState(false);

  // Badges = lessons with a passed assessment (same rule as the Profile
  // screen), from the progress already loaded for the lesson cards.
  const earnedBadgeIds = progressLoading
    ? []
    : practiceLevels
        .filter((level) => getCompletion(level.lessonId)?.passed)
        .map((level) => level.lessonId);
  const { newCount: newBadgeCount, markAllSeen: markBadgesSeen } =
    useSeenBadges(progressLoading ? null : userId, earnedBadgeIds);

  const [selectedDialect, setSelectedDialect] = useState(0);
  // Node picked on the path; null = the next lesson to do.
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

  const [dialects] = useState([
    {
      id: 0,
      name: "Tagalog",
      lesson: "Basic Greetings",
      subtitle: "Learn how to greet people in Tagalog.",
      duration: "5–10 min",
    },

    {
      id: 1,
      name: "Kapampangan",
      lesson: "Pangumusta",
      subtitle: "Learn basic greetings in Kapampangan.",
    },

    {
      id: 2,
      name: "Waray",
      lesson: "Maupay nga Aga",
      subtitle: "Learn basic greetings in Waray.",
    },
  ]);

  const currentDialect = dialects[selectedDialect];

  // Remember the language card the learner settles on (profiles.active_dialect),
  // so Story opens in it and the admin sees it. Not on first load.
  const firstDialectRender = useRef(true);
  useEffect(() => {
    if (firstDialectRender.current) {
      firstDialectRender.current = false;
      return;
    }
    const dialect = toLearnerDialect(dialects[selectedDialect]?.name);
    if (!dialect) return;
    const timer = setTimeout(() => void saveActiveDialect(dialect), 800);
    return () => clearTimeout(timer);
  }, [dialects, selectedDialect]);

  // Pronunciation for the hero card's first phrase (TTS for Tagalog;
  // Kapampangan and Waray show "Audio coming soon").
  const audio = useLessonAudio(
    currentDialect.name.toLowerCase() as LessonDialect,
  );
  const stopAudio = audio.stop;

  // Language carousel: one page per dialect, kept in sync with
  // selectedDialect (language button, swipe and dots all use it).
  const carouselRef = useRef<ScrollView>(null);
  const [pageWidth, setPageWidth] = useState(0);

  function nextDialect() {
    setSelectedDialect((prev) => (prev + 1) % dialects.length);
  }

  function previousDialect() {
    setSelectedDialect((prev) => (prev === 0 ? dialects.length - 1 : prev - 1));
  }

  useEffect(() => {
    loadUser();
  }, []);

  // XP, level and win streak, reloaded whenever the dashboard comes back
  // into view (e.g. after finishing a lesson).
  const loadStats = useCallback(async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    const userId = session?.user?.id;
    if (!userId) return;

    const { data: profile } = await supabase
      .from("profiles")
      .select("xp")
      .eq("id", userId)
      .maybeSingle();
    setTotalXp(profile?.xp ?? 0);

    // Day streak: read only. It goes up when a lesson or story is finished
    // (services/streak.ts), not when the app is opened.
    setCurrentStreak(await getDailyStreak(userId));

    // Wins in a row (+1 per win, 0 after a loss).
    const { data: winningStreak, error: winningStreakError } = await supabase
      .from("winning_streaks")
      .select("current_streak")
      .eq("user_id", userId)
      .maybeSingle();
    if (winningStreakError) {
      console.error("🏆 Winning streak load error:", winningStreakError);
    }
    setCurrentWinningStreak(winningStreak?.current_streak ?? 0);
  }, []);

  useFocusEffect(
    useCallback(() => {
      void loadStats();
    }, [loadStats]),
  );

  useEffect(() => {
    setSelectedLevel(null);
  }, [selectedDialect]);

  // Stop the phrase audio when the shown lesson changes.
  useEffect(() => {
    stopAudio();
  }, [stopAudio, selectedDialect, selectedLevel]);

  // Move the carousel when the dialect changes from the language button.
  useEffect(() => {
    if (pageWidth > 0) {
      carouselRef.current?.scrollTo({
        x: selectedDialect * pageWidth,
        animated: true,
      });
    }
  }, [selectedDialect, pageWidth]);

  function handleCarouselEnd(event: NativeSyntheticEvent<NativeScrollEvent>) {
    if (pageWidth <= 0) return;
    const page = Math.round(event.nativeEvent.contentOffset.x / pageWidth);
    const index = Math.min(Math.max(page, 0), dialects.length - 1);
    if (index !== selectedDialect) setSelectedDialect(index);
  }

  // Measures the three-dot button so the menu's arrow points at it.
  function openMenu() {
    const button = menuButtonRef.current;
    if (!button) {
      setMenuVisible(true);
      return;
    }
    button.measureInWindow((x, y, width, height) => {
      setMenuAnchor({ x, y, width, height });
      setMenuVisible(true);
    });
  }

  const closeMenu = useCallback(() => setMenuVisible(false), []);

  async function loadUser() {
    setLoadError(null);

    // Read from the phone, not the server: no wait before Home shows.
    const {
      data: { session },
    } = await supabase.auth.getSession();
    const user = session?.user;

    if (!user) {
      router.replace("/" as any);
      return;
    }

    setUserId(user.id);

    // Seen this session (so the tutorial is done): show it now and refresh
    // below without the loading screen.
    const known = knownProfile?.userId === user.id ? knownProfile : null;
    if (known) {
      setDisplayName(known.displayName);
      setPhotoUri(known.avatarUrl);
      setLoading(false);
    } else {
      setLoading(true);
    }

    // A failed read must not look like an unfinished tutorial, or the user is
    // sent back to step 1. No row (null, no error) does mean not finished.
    let profile: {
      display_name: string | null;
      avatar_url: string | null;
      tutorial_completed: boolean | null;
    } | null;
    try {
      profile = await retryOnJwtIssuedAtFuture(async () => {
        const { data, error } = await supabase
          .from("profiles")
          .select("display_name, avatar_url, tutorial_completed")
          .eq("id", user.id)
          .maybeSingle();
        if (error) throw error;
        return data;
      });
    } catch (error) {
      // Already showing this session's profile: keep it rather than an error.
      if (known) return;
      setLoadError(String((error as { message?: unknown })?.message ?? error));
      setLoading(false);
      return;
    }

    setDisplayName(profile?.display_name ?? "Learner");
    setPhotoUri(profile?.avatar_url ?? null);

    if (!profile?.tutorial_completed) {
      knownProfile = null;
      router.replace("/tutorial");
      return;
    }

    knownProfile = {
      userId: user.id,
      displayName: profile?.display_name ?? "Learner",
      avatarUrl: profile?.avatar_url ?? null,
    };
    setLoading(false);
  }

  // Home path for a language: the highest open level (Easy → Intermediate
  // → Hard), shown as the 5-lesson half that holds the next lesson to do.
  function pathFor(languageName: string) {
    const language = languageName.toLowerCase() as TierLanguage;
    const tierIndex = currentTierIndex(language, isLessonComplete);
    const ids = tierLessonIds(language, tierIndex);
    const nextInTier = ids.findIndex((id) => !isLessonComplete(id));
    const half = nextInTier >= PATH_LENGTH ? 1 : 0;
    const levels = ids
      .slice(half * PATH_LENGTH, half * PATH_LENGTH + PATH_LENGTH)
      .map((lessonId) => ({
        id: Number(lessonId.split("_")[1]),
        lessonId,
        hasContent: practiceLevels.some((item) => item.lessonId === lessonId),
      }));
    const next = levels.findIndex((item) => !isLessonComplete(item.lessonId));
    return {
      tierIndex,
      levels,
      nextIndex: next < 0 ? levels.length - 1 : next,
      tierDone: ids.filter(isLessonComplete).length,
    };
  }

  // Called from the log out sheet, after the menu has closed.
  async function handleLogout() {
    await supabase.auth.signOut();

    router.replace("/" as any);
  }

  if (loadError) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>
          Couldn&apos;t load your profile. Please check your connection and try
          again.
        </Text>
        <Text style={styles.loadingText}>{loadError}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={loadUser}>
          <Text style={styles.retryButtonText}>Try again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (loading || progressLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={bigkas.primary} />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  const avatarLetter = (displayName ?? "L").charAt(0).toUpperCase();
  const xpLevel = levelProgress(totalXp);
  const nextDialectName =
    dialects[(selectedDialect + 1) % dialects.length].name;
  const bottomSpace =
    BOTTOM_NAV_HEIGHT + BOTTOM_NAV_GAP + insets.bottom + spacing.xxl;

  return (
    <SafeAreaView style={styles.container} edges={["left", "right"]}>
      {/* Paint the status-bar strip the header color so the purple header
          runs all the way to the top of the screen with no gap. */}
      <View style={[styles.statusBarFill, { height: insets.top }]} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scroll, { paddingBottom: bottomSpace }]}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <Pressable
            onPress={() =>
              router.push({
                pathname: "/profile",
                params: { dialect: currentDialect.name },
              } as any)
            }
            style={styles.avatarWrapper}
            accessibilityRole="button"
            accessibilityLabel="Open my profile"
          >
            <Avatar
              size={52}
              textSize={22}
              photoUri={photoUri}
              uploadingPhoto={uploadingPhoto}
              avatarLetter={avatarLetter}
            />
          </Pressable>

          <View style={styles.headerLeft}>
            <Text style={styles.welcomeText}>Welcome back</Text>

            <Text style={styles.nameText} numberOfLines={1}>
              {displayName}
            </Text>
          </View>

          <View style={styles.headerActions}>
            <Pressable
              onPress={() => router.push("/leaderboard" as any)}
              style={styles.headerButton}
              accessibilityRole="button"
              accessibilityLabel="Open leaderboard"
              hitSlop={4}
            >
              <Ionicons name="trophy" size={22} color={bigkas.gold} />
            </Pressable>

            <View style={styles.headerButton}>
              <NotificationBell
                color={bigkas.white}
                size={24}
                badgeBorderColor={bigkas.primary}
              />
            </View>

            <Pressable
              ref={menuButtonRef}
              collapsable={false}
              onPress={openMenu}
              style={styles.headerButton}
              accessibilityRole="button"
              accessibilityLabel="Open menu"
              accessibilityState={{ expanded: menuVisible }}
              hitSlop={4}
            >
              <Ionicons
                name="ellipsis-vertical"
                size={20}
                color={bigkas.white}
              />
            </Pressable>
          </View>
        </View>

        {/* LEVEL / XP — overlaps the header */}
        <View
          style={styles.levelCard}
          accessible
          accessibilityLabel={`Level ${xpLevel.level}, ${xpLevel.intoLevel} of ${xpLevel.perLevel} XP, ${totalXp} XP total`}
        >
          <View style={styles.levelTop}>
            <View style={styles.lvlBadge}>
              <Text style={styles.lvlBadgeLabel}>LVL</Text>
              <Text style={styles.lvlBadgeNumber}>{xpLevel.level}</Text>
            </View>

            <View style={styles.levelInfo}>
              <Text style={styles.levelXp}>
                {xpLevel.intoLevel} / {xpLevel.perLevel} XP
              </Text>
              <Text style={styles.levelTotal}>{totalXp} XP total</Text>
            </View>
          </View>

          <View style={styles.xpTrack}>
            <View
              style={[styles.xpFill, { width: `${xpLevel.fraction * 100}%` }]}
            />
          </View>
        </View>

        {/* STREAKS */}
        <View style={styles.chipRow}>
          <View style={styles.chip}>
            <Ionicons name="flame" size={16} color={bigkas.podiumGold} />
            <Text style={styles.chipText}>{currentStreak} day streak</Text>
          </View>

          <View style={styles.chip}>
            <Ionicons name="trophy" size={15} color={bigkas.primary} />
            <Text style={styles.chipText}>
              {currentWinningStreak}{" "}
              {currentWinningStreak === 1 ? "win in a row" : "wins in a row"}
            </Text>
          </View>
        </View>

        {/* LANGUAGE CARD */}
        <View style={styles.languageCard}>
          <View style={styles.languageTop}>
            <TouchableOpacity
              style={styles.languageButton}
              onPress={nextDialect}
              activeOpacity={0.85}
              accessibilityRole="button"
              accessibilityLabel={`Language: ${currentDialect.name}. Tap to switch to ${nextDialectName}`}
              accessibilityActions={[
                { name: "increment", label: "Next language" },
                { name: "decrement", label: "Previous language" },
              ]}
              onAccessibilityAction={(event) => {
                if (event.nativeEvent.actionName === "increment") nextDialect();
                if (event.nativeEvent.actionName === "decrement")
                  previousDialect();
              }}
            >
              <Ionicons name="globe-outline" size={18} color={bigkas.white} />
              <Text style={styles.languageButtonText} numberOfLines={1}>
                {currentDialect.name}
              </Text>
              <Ionicons name="swap-horizontal" size={16} color={bigkas.gold} />
            </TouchableOpacity>

            <Text style={styles.languageCount}>
              {selectedDialect + 1} of {dialects.length} languages
            </Text>
          </View>

          <View
            style={styles.carousel}
            onLayout={(event) => setPageWidth(event.nativeEvent.layout.width)}
          >
            {pageWidth > 0 && (
              <ScrollView
                ref={carouselRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={handleCarouselEnd}
                contentOffset={{ x: selectedDialect * pageWidth, y: 0 }}
              >
                {dialects.map((dialect, dialectIndex) => {
                  const isCurrent = dialectIndex === selectedDialect;
                  // The path follows the highest open level of this
                  // language: the 5 lessons around the next one to do.
                  const path = pathFor(dialect.name);
                  const pageLevel =
                    isCurrent && selectedLevel !== null
                      ? selectedLevel
                      : path.nextIndex;
                  const level = path.levels[pageLevel];
                  const completedCount = path.levels.filter((item) =>
                    isLessonComplete(item.lessonId),
                  ).length;
                  const summary = getLessonSummary(level.lessonId, level.id);
                  const inProgress =
                    !isLessonComplete(level.lessonId) &&
                    !!getCompletion(level.lessonId);
                  const phrase = summary.firstPhrase;
                  const phraseKey = `${level.lessonId}:first`;
                  const playing = isCurrent && audio.playingKey === phraseKey;
                  // Line runs between the first and last node centres.
                  const fillFraction =
                    completedCount > 0
                      ? Math.min(completedCount / (path.levels.length - 1), 1)
                      : 0;

                  return (
                    <View
                      key={dialect.id}
                      style={{ width: pageWidth }}
                      accessibilityElementsHidden={!isCurrent}
                      importantForAccessibility={
                        isCurrent ? "auto" : "no-hide-descendants"
                      }
                    >
                      {/* PATH */}
                      <View style={styles.pathHeader}>
                        <Text style={styles.pathTitle} numberOfLines={1}>
                          {dialect.name} · {TIERS[path.tierIndex].name}
                        </Text>
                        <View style={styles.pathPill}>
                          <Text style={styles.pathPillText}>
                            {path.tierDone} of {LESSONS_PER_TIER} done
                          </Text>
                        </View>
                      </View>

                      <View style={styles.nodeRow}>
                        <View style={styles.nodeLine}>
                          <View
                            style={[
                              styles.nodeLineFill,
                              { width: `${fillFraction * 100}%` },
                            ]}
                          />
                        </View>

                        {path.levels.map((item, index) => {
                          const completed = isLessonComplete(item.lessonId);
                          // Same rule as the lessons board and the lesson
                          // routes.
                          const unlocked =
                            UNLOCK_ALL_LESSONS ||
                            isLessonUnlocked(item.lessonId);
                          const selected = index === pageLevel;

                          return (
                            <TouchableOpacity
                              key={item.id}
                              disabled={!unlocked || !isCurrent}
                              onPress={() => setSelectedLevel(index)}
                              activeOpacity={0.8}
                              style={styles.nodeSlot}
                              accessibilityRole="button"
                              accessibilityState={{
                                selected,
                                disabled: !unlocked,
                              }}
                              accessibilityLabel={`Lesson ${item.id}, ${
                                completed
                                  ? "completed"
                                  : unlocked
                                    ? "available"
                                    : "locked"
                              }`}
                            >
                              <View
                                style={[
                                  styles.node,
                                  completed && styles.nodeDone,
                                  !completed &&
                                    unlocked &&
                                    styles.nodeAvailable,
                                  !unlocked && styles.nodeLocked,
                                  selected && styles.nodeSelected,
                                ]}
                              >
                                {completed ? (
                                  <Ionicons
                                    name="checkmark"
                                    size={selected ? 22 : 18}
                                    color={bigkas.white}
                                  />
                                ) : unlocked ? (
                                  <Text
                                    style={[
                                      styles.nodeText,
                                      selected && styles.nodeTextSelected,
                                    ]}
                                  >
                                    {item.id}
                                  </Text>
                                ) : (
                                  <Ionicons
                                    name="lock-closed"
                                    size={16}
                                    color={bigkas.muted}
                                  />
                                )}
                              </View>
                            </TouchableOpacity>
                          );
                        })}
                      </View>

                      {/* HERO */}
                      <View style={styles.heroCard}>
                        <View style={styles.heroCircleOne} />
                        <View style={styles.heroCircleTwo} />
                        <Image
                          source={mascotImage}
                          style={styles.heroMascot}
                          resizeMode="contain"
                          accessibilityIgnoresInvertColors
                        />

                        <View style={styles.heroHeading}>
                          <Text style={styles.heroLessonLabel}>
                            LESSON {level.id}
                          </Text>
                          <Text style={styles.heroTitle}>
                            {summary.title ?? dialect.lesson}
                          </Text>
                          <Text style={styles.heroSubtitle}>
                            {summary.subtitle ?? dialect.subtitle}
                          </Text>
                        </View>

                        {phrase && (
                          <View style={styles.phraseBox}>
                            <View style={styles.phraseText}>
                              <Text style={styles.phraseLabel}>
                                FIRST PHRASE
                              </Text>
                              <Text style={styles.phrase}>{phrase.text}</Text>
                              <Text style={styles.phraseMeaning}>
                                {phrase.example}
                              </Text>
                            </View>

                            <TouchableOpacity
                              style={styles.speakerButton}
                              onPress={() =>
                                audio.play(phraseKey, { text: phrase.text })
                              }
                              activeOpacity={0.85}
                              accessibilityRole="button"
                              accessibilityLabel={
                                playing
                                  ? "Stop pronunciation"
                                  : `Play pronunciation of ${phrase.text}`
                              }
                            >
                              <Ionicons
                                name={playing ? "stop" : "volume-high"}
                                size={22}
                                color={bigkas.white}
                              />
                            </TouchableOpacity>
                          </View>
                        )}

                        {isCurrent && audio.notice ? (
                          <Text
                            style={styles.audioNotice}
                            accessibilityLiveRegion="polite"
                          >
                            {audio.notice}
                          </Text>
                        ) : null}

                        <View style={styles.statRow}>
                          {[
                            {
                              icon: "book-outline" as const,
                              value: summary.vocabulary,
                              label: "Vocabulary",
                            },
                            {
                              icon: "extension-puzzle-outline" as const,
                              value: summary.activities,
                              label: "Activities",
                            },
                            {
                              icon: "star-outline" as const,
                              value: summary.xp,
                              label: "XP",
                            },
                          ].map((stat) => (
                            <View
                              key={stat.label}
                              style={styles.statTile}
                              accessible
                              accessibilityLabel={`${stat.value} ${stat.label}`}
                            >
                              <Ionicons
                                name={stat.icon}
                                size={18}
                                color={bigkas.gold}
                              />
                              <Text style={styles.statValue}>{stat.value}</Text>
                              <Text style={styles.statLabel} numberOfLines={1}>
                                {stat.label}
                              </Text>
                            </View>
                          ))}
                        </View>

                        {/* START PRACTICE */}
                        <TouchableOpacity
                          style={styles.ctaButton}
                          activeOpacity={0.85}
                          accessibilityRole="button"
                          onPress={() => {
                            stopAudio();
                            // Same entry as the lessons board: the
                            // structured flow when the lesson has one,
                            // otherwise the reading → pretest → practice
                            // flow.
                            const lessonId = level.lessonId;
                            // Not written yet (e.g. Hard): show the level
                            // on the Lessons screen instead.
                            if (!level.hasContent) {
                              router.push({
                                pathname: "/lessons",
                                params: {
                                  dialect: dialect.name,
                                  tier: TIERS[path.tierIndex].key,
                                },
                              } as any);
                              return;
                            }
                            openLesson(router, lessonId, {
                              unlocked: isLessonUnlocked(lessonId),
                            });
                          }}
                        >
                          <Text style={styles.ctaText}>
                            {inProgress
                              ? "Continue your lesson"
                              : "Start practice"}
                          </Text>
                          <Ionicons
                            name="arrow-forward"
                            size={20}
                            color={bigkas.ink}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                })}
              </ScrollView>
            )}
          </View>

          {/* DOTS */}
          <View style={styles.dotsRow}>
            {dialects.map((dialect, index) => (
              <Pressable
                key={dialect.id}
                onPress={() => setSelectedDialect(index)}
                style={styles.dotHit}
                accessibilityRole="button"
                accessibilityLabel={`Show ${dialect.name}`}
                accessibilityState={{ selected: index === selectedDialect }}
              >
                <View
                  style={[
                    styles.dot,
                    index === selectedDialect && styles.dotActive,
                  ]}
                />
              </Pressable>
            ))}
          </View>
          <Text style={styles.swipeHint}>Swipe for {nextDialectName}</Text>
        </View>
      </ScrollView>

      {/* BOTTOM NAVIGATION — shared with the other main screens */}
      <BottomNav active="home" respectSafeArea />

      {/* Three-dot menu. Like the avatar picker, kept OUTSIDE the
          ScrollView. */}
      <ProfileMenu
        visible={menuVisible}
        anchor={menuAnchor}
        onClose={closeMenu}
        displayName={displayName}
        photoUri={photoUri}
        uploadingPhoto={uploadingPhoto}
        languageName={currentDialect.name}
        totalXp={totalXp}
        dayStreak={currentStreak}
        badgeCount={earnedBadgeIds.length}
        newBadgeCount={newBadgeCount}
        onOpenProfile={() => router.push("/user-profile" as any)}
        onOpenAchievements={() => {
          markBadgesSeen();
          router.push({
            pathname: "/profile",
            params: { dialect: currentDialect.name, section: "achievements" },
          } as any);
        }}
        onChangePhoto={() => setPickerVisible(true)}
        onReport={() => router.push("/report" as any)}
        onLogout={handleLogout}
      />

      {/* Avatar picker lives OUTSIDE the ScrollView — a modal nested in
          a scroll view can misbehave with scroll gestures. */}
      <AvatarPicker
        visible={pickerVisible}
        currentAvatarUrl={photoUri}
        onClose={() => setPickerVisible(false)}
        onChange={(newUrl) => {
          setPhotoUri(newUrl);
          if (knownProfile) knownProfile = { ...knownProfile, avatarUrl: newUrl };
        }}
      />
    </SafeAreaView>
  );
}

const NODE = 38;
const NODE_SELECTED = 48;

const styles = StyleSheet.create({
  retryButton: {
    backgroundColor: bigkas.primary,
    borderRadius: 16,
    minHeight: MIN_TAP,
    paddingHorizontal: spacing.xl,
    alignItems: "center",
    justifyContent: "center",
  },
  retryButtonText: { color: "#FFFFFF", fontSize: 18, fontWeight: "700" },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: bigkas.background,
    gap: spacing.md,
  },

  loadingText: {
    fontSize: typography.size.md,
    color: bigkas.muted,
  },

  container: {
    flex: 1,
    backgroundColor: bigkas.background,
  },

  scroll: {
    flexGrow: 1,
  },

  /* ---------------- HEADER ---------------- */

  statusBarFill: {
    backgroundColor: bigkas.primary,
  },

  header: {
    backgroundColor: bigkas.primary,
    paddingHorizontal: 16,
    paddingTop: 16,
    // Room for the level card, which overlaps the header by 40.
    paddingBottom: 56,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  avatarWrapper: {
    borderRadius: 30,
  },

  avatarCircle: {
    backgroundColor: bigkas.accent,
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    color: bigkas.white,
    fontWeight: "800",
  },

  headerLeft: {
    flex: 1,
    minWidth: 0,
  },

  welcomeText: {
    fontSize: 13,
    color: "rgba(255,255,255,0.78)",
    fontWeight: "600",
  },

  nameText: {
    marginTop: 2,
    fontSize: 20,
    fontWeight: "800",
    color: bigkas.white,
  },

  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  headerButton: {
    width: MIN_TAP,
    height: MIN_TAP,
    borderRadius: MIN_TAP / 2,
    backgroundColor: "rgba(255,255,255,0.14)",
    alignItems: "center",
    justifyContent: "center",
  },

  /* ---------------- LEVEL CARD ---------------- */

  levelCard: {
    marginTop: -40,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 22,
    backgroundColor: bigkas.white,
    borderWidth: 1,
    borderColor: bigkas.border,
    shadowColor: bigkas.ink,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 4,
  },

  levelTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  lvlBadge: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: bigkas.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  lvlBadgeLabel: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
    color: bigkas.gold,
  },

  lvlBadgeNumber: {
    fontSize: 20,
    fontWeight: "800",
    color: bigkas.white,
    lineHeight: 24,
  },

  levelInfo: {
    flex: 1,
  },

  levelXp: {
    fontSize: 18,
    fontWeight: "800",
    color: bigkas.ink,
  },

  levelTotal: {
    marginTop: 2,
    fontSize: 13,
    fontWeight: "600",
    color: bigkas.muted,
  },

  xpTrack: {
    marginTop: 14,
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

  chipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 12,
    marginHorizontal: 16,
  },

  chip: {
    minHeight: 36,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 12,
    borderRadius: 18,
    backgroundColor: bigkas.chip,
  },

  chipText: {
    fontSize: 13,
    fontWeight: "700",
    color: bigkas.ink,
  },

  /* ---------------- LANGUAGE CARD ---------------- */

  languageCard: {
    marginTop: 16,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 24,
    backgroundColor: bigkas.white,
    borderWidth: 1,
    borderColor: bigkas.border,
  },

  languageTop: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 10,
  },

  languageButton: {
    minHeight: MIN_TAP,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 14,
    borderRadius: MIN_TAP / 2,
    backgroundColor: bigkas.primary,
    maxWidth: "100%",
  },

  languageButtonText: {
    fontSize: 15,
    fontWeight: "800",
    color: bigkas.white,
    flexShrink: 1,
  },

  languageCount: {
    fontSize: 13,
    fontWeight: "600",
    color: bigkas.muted,
  },

  carousel: {
    marginTop: 16,
  },

  pathHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },

  pathTitle: {
    flex: 1,
    fontSize: 17,
    fontWeight: "800",
    color: bigkas.ink,
  },

  pathPill: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    backgroundColor: bigkas.chip,
  },

  pathPillText: {
    fontSize: 12,
    fontWeight: "800",
    color: bigkas.primary,
  },

  nodeRow: {
    marginTop: 14,
    height: NODE_SELECTED + 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  nodeLine: {
    position: "absolute",
    left: NODE_SELECTED / 2,
    right: NODE_SELECTED / 2,
    height: 4,
    borderRadius: 2,
    backgroundColor: bigkas.locked,
  },

  nodeLineFill: {
    height: "100%",
    borderRadius: 2,
    backgroundColor: bigkas.success,
  },

  nodeSlot: {
    width: NODE_SELECTED,
    height: NODE_SELECTED,
    alignItems: "center",
    justifyContent: "center",
  },

  node: {
    width: NODE,
    height: NODE,
    borderRadius: NODE / 2,
    alignItems: "center",
    justifyContent: "center",
  },

  nodeDone: {
    backgroundColor: bigkas.success,
  },

  nodeAvailable: {
    backgroundColor: bigkas.white,
    borderWidth: 2,
    borderColor: bigkas.primary,
  },

  nodeLocked: {
    backgroundColor: bigkas.locked,
  },

  nodeSelected: {
    width: NODE_SELECTED,
    height: NODE_SELECTED,
    borderRadius: NODE_SELECTED / 2,
    borderWidth: 4,
    borderColor: bigkas.chip,
    backgroundColor: bigkas.primary,
  },

  nodeText: {
    fontSize: 15,
    fontWeight: "800",
    color: bigkas.primary,
  },

  nodeTextSelected: {
    fontSize: 18,
    color: bigkas.white,
  },

  /* ---------------- HERO ---------------- */

  heroCard: {
    marginTop: 16,
    padding: 18,
    borderRadius: 22,
    backgroundColor: bigkas.primary,
    overflow: "hidden",
  },

  heroCircleOne: {
    position: "absolute",
    top: -50,
    right: -40,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "rgba(255,255,255,0.08)",
  },

  heroCircleTwo: {
    position: "absolute",
    top: 40,
    right: -60,
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "rgba(255,255,255,0.06)",
  },

  heroMascot: {
    position: "absolute",
    top: 12,
    right: 10,
    width: 64,
    height: 64,
  },

  heroHeading: {
    paddingRight: 64,
  },

  heroLessonLabel: {
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1.2,
    color: bigkas.gold,
  },

  heroTitle: {
    marginTop: 4,
    fontSize: 24,
    fontWeight: "800",
    color: bigkas.white,
    lineHeight: 30,
  },

  heroSubtitle: {
    marginTop: 6,
    fontSize: 14,
    lineHeight: 20,
    color: "rgba(255,255,255,0.82)",
  },

  phraseBox: {
    marginTop: 16,
    padding: 14,
    borderRadius: 16,
    backgroundColor: bigkas.white,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  phraseText: {
    flex: 1,
  },

  phraseLabel: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1,
    color: bigkas.muted,
  },

  phrase: {
    marginTop: 4,
    fontSize: 18,
    fontWeight: "800",
    color: bigkas.ink,
  },

  phraseMeaning: {
    marginTop: 2,
    fontSize: 13,
    color: bigkas.muted,
  },

  speakerButton: {
    width: MIN_TAP + 4,
    height: MIN_TAP + 4,
    borderRadius: (MIN_TAP + 4) / 2,
    backgroundColor: bigkas.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  audioNotice: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: "600",
    color: bigkas.gold,
  },

  statRow: {
    marginTop: 14,
    flexDirection: "row",
    gap: 8,
  },

  statTile: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 4,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.12)",
    alignItems: "center",
  },

  statValue: {
    marginTop: 4,
    fontSize: 18,
    fontWeight: "800",
    color: bigkas.white,
  },

  statLabel: {
    fontSize: 11,
    fontWeight: "600",
    color: "rgba(255,255,255,0.8)",
  },

  ctaButton: {
    marginTop: 16,
    minHeight: 52,
    borderRadius: 16,
    backgroundColor: bigkas.gold,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingHorizontal: 16,
  },

  ctaText: {
    fontSize: 16,
    fontWeight: "800",
    color: bigkas.ink,
  },

  dotsRow: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "center",
  },

  dotHit: {
    minWidth: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: bigkas.border,
  },

  dotActive: {
    width: 24,
    backgroundColor: bigkas.primary,
  },

  swipeHint: {
    marginTop: 2,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "600",
    color: bigkas.muted,
  },
});
