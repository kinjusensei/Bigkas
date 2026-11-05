import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import LevelSelector from "../components/lessons/LevelSelector";
import LockedLevelPanel from "../components/lessons/LockedLevelPanel";
import { structuredLessonsById } from "../data/lessons/structuredLessons";
import {
  kapampanganPracticeLevels,
  practiceLevels,
  warayPracticeLevels,
} from "../data/practiceData";
import { useLevelUnlockCelebration } from "../hooks/useLevelUnlockCelebration";
import { useStoryProgress } from "../hooks/useLessonProgress";
import { PracticeLevel } from "../types/practice";
import { levelProgress } from "../utils/lessonCompletion";
import {
  countCompleteInTier,
  currentTierIndex,
  TierLanguage,
  tierLessonIds,
  TIERS,
} from "../utils/lessonTiers";
import { openLesson, UNLOCK_ALL_LESSONS } from "../utils/openLesson";
import AppScreen from "./components/AppScreen";

// LESSON BOARD — the one Lessons screen (Lessons tab, LessonGate's
// locked redirect and "Go to lessons" all land here). Lessons come from
// data/practiceData.ts, grouped in levels of 10 (utils/lessonTiers.ts):
// Easy 1–10, Intermediate 11–20, Hard 21–30. A lesson without content
// shows as "Coming soon".
//
// UNLOCK RULE (utils/lessonTiers.ts, via useStoryProgress): Easy is open;
// a level opens once all 10 lessons of the level before are complete in
// this language; inside a level, lesson N+1 opens once lesson N is
// complete (the shared isLessonComplete definition).
//
// LEVEL: each dialect has its own level, earned from the lessons finished
// in that dialect. Lessons pair up on a level requirement (1–2 → Lv.1,
// 3–4 → Lv.2, …) and pay more XP the higher they sit, so finishing a pair
// always reaches the level the next pair needs.

const unlockedImage = require("../assets/images/unlocked.png");
const completedImage = require("../assets/images/completed.png");

const TAGALOG_LESSONS = practiceLevels.filter((level) =>
  level.lessonId.startsWith("tagalog_"),
);

// Swipe order: left goes forward through this list, right goes back, and
// both wrap around at the ends.
const LESSON_DIALECTS = ["Tagalog", "Waray", "Kapampangan"] as const;
type LessonDialect = (typeof LESSON_DIALECTS)[number];

// The swiper pages through a copy of the list with the last dialect added
// before the first and the first added after the last. Landing on either
// copy jumps silently to the real page, so swiping never hits an end.
const LOOPED_DIALECTS = [
  LESSON_DIALECTS[LESSON_DIALECTS.length - 1],
  ...LESSON_DIALECTS,
  LESSON_DIALECTS[0],
];

const LESSONS_BY_DIALECT: Record<LessonDialect, PracticeLevel[]> = {
  Kapampangan: kapampanganPracticeLevels,
  Tagalog: TAGALOG_LESSONS,
  Waray: warayPracticeLevels,
};

// UNLOCK_ALL_LESSONS (review mode) now lives in utils/openLesson.ts so the
// dashboard follows it too.

// XP shown for a lesson: a structured lesson's reward total, otherwise the
// old per-lesson value (10 + 10 per pair of lessons).
const getLessonXp = (lesson: PracticeLevel) =>
  structuredLessonsById[lesson.lessonId]?.rewards?.total ??
  10 + 10 * (Math.floor((lesson.id - 1) / 2) + 1);

const getLevelTitle = (level: number) =>
  level >= 10
    ? "Expert"
    : level >= 6
      ? "Advanced"
      : level >= 3
        ? "Intermediate"
        : "Beginner";

const countWords = (lesson: PracticeLevel) => {
  // Lessons without a practice game count their vocabulary instead.
  if (lesson.phrases.length === 0) {
    return (structuredLessonsById[lesson.lessonId]?.expressionGroups ?? []).reduce(
      (total, group) => total + group.items.length,
      0,
    );
  }
  return lesson.phrases.reduce(
    (total, phrase) => total + (phrase.words?.length || 1),
    0,
  );
};

export default function LessonsScreen() {
  const router = useRouter();
  const {
    loading,
    isLessonComplete,
    isLessonUnlocked: isLessonUnlockedById,
    isTierOpen,
    getAwardedXp,
  } = useStoryProgress();

  // Opens "New level unlocked" once after Easy/Intermediate is finished.
  useLevelUnlockCelebration({ loading, isTierOpen });

  // LessonGate sends a locked deep link here with ?dialect=&tier= so the
  // locked panel for that level shows.
  const params = useLocalSearchParams<{ dialect?: string; tier?: string }>();
  const paramDialect = LESSON_DIALECTS.find((name) => name === params.dialect);
  const paramTier = TIERS.findIndex((tier) => tier.key === params.tier);

  const [selectedDialect, setSelectedDialect] = useState<LessonDialect>(
    paramDialect ?? "Tagalog",
  );
  // The chosen level per language; unset = the highest open level.
  const [selectedTiers, setSelectedTiers] = useState<
    Partial<Record<LessonDialect, number>>
  >(paramDialect && paramTier >= 0 ? { [paramDialect]: paramTier } : {});

  // A new locked redirect while this screen is already open.
  useEffect(() => {
    if (paramDialect && paramTier >= 0) {
      setSelectedDialect(paramDialect);
      setSelectedTiers((prev) => ({ ...prev, [paramDialect]: paramTier }));
    }
  }, [paramDialect, paramTier]);
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);

  // Do not reveal lesson data automatically. The learner must enter a lesson
  // from the level board first.
  useEffect(() => {
    setSelectedLessonId(null);
  }, [selectedDialect]);

  // DIALECT PAGER — the whole screen is a native horizontal paging scroll
  // view with one page per dialect, so a sideways swipe anywhere changes
  // the dialect while each page still scrolls up and down on its own.
  const pagerRef = useRef<ScrollView>(null);
  const [pagerSize, setPagerSize] = useState({ width: 0, height: 0 });

  const scrollPagerToPage = (page: number) =>
    pagerRef.current?.scrollTo({ x: page * pagerSize.width, animated: false });

  // Show the selected dialect once the pager's width is known.
  useEffect(() => {
    if (pagerSize.width > 0) {
      scrollPagerToPage(LESSON_DIALECTS.indexOf(selectedDialect) + 1);
    }
    // Only on width changes; swipes already leave the pager on the right page.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagerSize.width]);

  const handlePagerEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (pagerSize.width === 0) return;

    const page = Math.round(
      event.nativeEvent.contentOffset.x / pagerSize.width,
    );
    const lastPage = LOOPED_DIALECTS.length - 1;

    if (page === 0) {
      scrollPagerToPage(LESSON_DIALECTS.length);
    } else if (page === lastPage) {
      scrollPagerToPage(1);
    }

    setSelectedDialect(LOOPED_DIALECTS[page]);
  };

  const renderDialectPage = (dialect: LessonDialect, page: number) => {
    const lessons = LESSONS_BY_DIALECT[dialect];

    const finishedLessons = loading
      ? []
      : lessons.filter((lesson) => isLessonComplete(lesson.lessonId));
    // This dialect's XP: what a structured lesson actually gave (each
    // activity once), or a finished lesson's XP for the others. Level uses
    // the shared formula (100 XP per level).
    const totalXp = loading
      ? 0
      : lessons.reduce(
          (total, lesson) =>
            total +
            (structuredLessonsById[lesson.lessonId]
              ? getAwardedXp(lesson.lessonId)
              : isLessonComplete(lesson.lessonId)
                ? getLessonXp(lesson)
                : 0),
          0,
        );
    const {
      level,
      intoLevel: xpIntoLevel,
      perLevel: xpPerLevel,
      fraction: xpFraction,
    } = levelProgress(totalXp);

    // LEVELS — open/locked and progress for this language.
    const language = dialect.toLowerCase() as TierLanguage;
    const complete = (lessonId: string) =>
      !loading && isLessonComplete(lessonId);
    const tierStates = TIERS.map((_, index) => ({
      unlocked: !loading && isTierOpen(language, index),
      done: countCompleteInTier(language, index, complete),
      total: tierLessonIds(language, index).length,
    }));
    const tierIndex =
      selectedTiers[dialect] ?? currentTierIndex(language, complete);
    const tier = TIERS[tierIndex];
    const tierOpen = UNLOCK_ALL_LESSONS || tierStates[tierIndex].unlocked;
    // This level's 10 lessons; null where the content doesn't exist yet.
    const tierLessons = tierLessonIds(language, tierIndex).map((lessonId) => ({
      lessonId,
      number: Number(lessonId.split("_")[1]),
      lesson: lessons.find((item) => item.lessonId === lessonId) ?? null,
    }));
    const selectTier = (index: number) =>
      setSelectedTiers((prev) => ({ ...prev, [dialect]: index }));

    // Same rule as the lesson routes (hooks/useStoryProgress.ts).
    const isLessonUnlocked = (lessonId: string): boolean =>
      UNLOCK_ALL_LESSONS || isLessonUnlockedById(lessonId);

    const getLockReason = (lessonNumber: number): string =>
      `Finish Lesson ${Math.max(lessonNumber - 1, 1)} first`;

    return (
      <ScrollView
        key={`${dialect}-${page}`}
        style={{ width: pagerSize.width, height: pagerSize.height }}
        contentContainerStyle={styles.page}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}

        <View style={styles.header}>
          <Text style={styles.headerTitle}>Lessons</Text>
          <Text style={styles.headerSubtitle}>
            Learn Filipino dialects step by step
          </Text>
        </View>

        {/* LEVEL CARD */}

        <View style={styles.levelCard}>
          <View style={styles.levelCardTop}>
            <View style={{ flex: 1 }}>
              <Text style={styles.levelEyebrow}>
                YOUR {dialect.toUpperCase()} LEVEL
              </Text>
              <Text style={styles.levelName}>
                Level {level} —{" "}
                <Text style={styles.levelRank}>{getLevelTitle(level)}</Text>
              </Text>
            </View>

            <View style={styles.xpPill}>
              <Text style={styles.xpPillText}>{totalXp} XP</Text>
            </View>
          </View>

          <View style={styles.xpTrack}>
            <View style={[styles.xpFill, { width: `${xpFraction * 100}%` }]} />
          </View>

          <View style={styles.levelCardBottom}>
            <Text style={styles.finishedText}>
              {loading
                ? "Loading progress…"
                : `${finishedLessons.length} / ${lessons.length} lessons finished`}
            </Text>
            {loading ? null : (
              <Text style={styles.xpCaption}>
                {xpIntoLevel} / {xpPerLevel} XP to Level {level + 1}
              </Text>
            )}
          </View>
        </View>

        {/* DIALECT INDICATOR */}

        <View style={styles.dialectSwiper}>
          <View style={styles.swiperPage}>
            <Text style={styles.swiperChevron}>‹</Text>
            <Text style={styles.swiperName}>{dialect}</Text>
            <Text style={styles.swiperChevron}>›</Text>
          </View>

          <View style={styles.dotRow}>
            {LESSON_DIALECTS.map((dotDialect) => (
              <View
                key={dotDialect}
                style={[styles.dot, dotDialect === dialect && styles.dotActive]}
              />
            ))}
          </View>
        </View>

        <Text style={styles.swipeHint}>
          Swipe left or right anywhere to change dialect
        </Text>

        {/* LESSON LIST */}

        {/* LEVEL SELECTOR */}

        <LevelSelector
          selected={tierIndex}
          states={tierStates}
          onSelect={selectTier}
        />

        {!loading && !tierOpen ? (
          <LockedLevelPanel
            levelName={tier.name}
            previousLevelName={TIERS[tierIndex - 1]?.name ?? "Easy"}
            previousDone={tierLessonIds(language, tierIndex - 1).map(complete)}
            onGoToPrevious={() => selectTier(Math.max(tierIndex - 1, 0))}
          />
        ) : (
          <View style={[styles.sectionHeader, styles.sectionHeaderTier]}>
            <Text style={styles.sectionTitle}>
              {dialect} · {tier.name}
            </Text>
            <Text style={styles.sectionCount}>
              {tierStates[tierIndex].done} of {tierLessons.length} done
            </Text>
          </View>
        )}

        {loading ? (
          <ActivityIndicator
            size="large"
            color="#410FA3"
            style={styles.boardLoading}
          />
        ) : !tierOpen ? null : lessons.length === 0 ? (
          <View style={styles.emptyLessons}>
            <Text style={styles.emptyLessonsTitle}>
              {dialect} lessons are coming soon
            </Text>
            <Text style={styles.emptyLessonsText}>
              We&apos;re preparing practice lessons for this dialect.
            </Text>
          </View>
        ) : (
          tierLessons.map(({ lessonId, number, lesson }) => {
            // No content for this lesson yet: shown, never tappable.
            if (!lesson) {
              return (
                <View
                  key={lessonId}
                  style={[styles.lessonCard, styles.lessonCardLocked]}
                  accessible
                  accessibilityLabel={`Lesson ${number}, coming soon`}
                >
                  <View style={[styles.lessonIcon, styles.lessonIconLocked]}>
                    <Ionicons name="time-outline" size={20} color="#5E5A75" />
                  </View>
                  <View style={styles.lessonBody}>
                    <Text
                      numberOfLines={1}
                      style={[styles.lessonCardTitle, styles.lessonTextLocked]}
                    >
                      Lesson {number}
                    </Text>
                    <Text style={[styles.lessonMeta, styles.statusLocked]}>
                      Coming soon
                    </Text>
                  </View>
                </View>
              );
            }

            const unlocked = isLessonUnlocked(lesson.lessonId);
            const completed = isLessonComplete(lesson.lessonId);
            const isSelected = lesson.lessonId === selectedLessonId;

            return (
              <TouchableOpacity
                key={lesson.lessonId}
                activeOpacity={0.8}
                onPress={() => {
                  if (openLesson(router, lesson.lessonId, { unlocked })) {
                    setSelectedLessonId(lesson.lessonId);
                  }
                }}
                style={[
                  styles.lessonCard,
                  isSelected && styles.lessonCardSelected,
                  !unlocked && styles.lessonCardLocked,
                ]}
              >
                <View
                  style={[
                    styles.lessonIcon,
                    completed
                      ? styles.lessonIconCompleted
                      : !unlocked && styles.lessonIconLocked,
                  ]}
                >
                  {completed || unlocked ? (
                    <Image
                      source={completed ? completedImage : unlockedImage}
                      style={styles.lessonIconImage}
                    />
                  ) : (
                    <Ionicons name="lock-closed" size={20} color="#5E5A75" />
                  )}
                </View>

                <View style={styles.lessonBody}>
                  <Text
                    numberOfLines={1}
                    style={[
                      styles.lessonCardTitle,
                      !unlocked && styles.lessonTextLocked,
                    ]}
                  >
                    {structuredLessonsById[lesson.lessonId]?.title ??
                      lesson.title}
                  </Text>
                  {/* The old practice subtitle doesn't describe a
                      structured lesson, so it is left out for those. */}
                  {lesson.subtitle &&
                  !structuredLessonsById[lesson.lessonId] ? (
                    <Text
                      numberOfLines={2}
                      style={[
                        styles.lessonCardSubtitle,
                        !unlocked && styles.lessonTextLocked,
                      ]}
                    >
                      {lesson.subtitle}
                    </Text>
                  ) : null}
                  <Text style={styles.lessonMeta}>
                    {countWords(lesson)} words {getLessonXp(lesson)} XP ·{" "}
                    <Text
                      style={
                        completed
                          ? styles.statusCompleted
                          : unlocked
                            ? styles.statusUnlocked
                            : styles.statusLocked
                      }
                    >
                      {completed ? (
                        <>
                          <Image
                            source={completedImage}
                            style={styles.statusImage}
                          />{" "}
                          Completed
                        </>
                      ) : unlocked ? (
                        <>
                          <Image
                            source={unlockedImage}
                            style={styles.statusImage}
                          />{" "}
                          Current
                        </>
                      ) : (
                        getLockReason(number)
                      )}
                    </Text>
                  </Text>
                </View>

                {unlocked ? (
                  <Text style={styles.lessonArrow}>→</Text>
                ) : (
                  <View style={styles.levelBadge}>
                    <Ionicons name="lock-closed" size={14} color="#5E5A75" />
                  </View>
                )}
              </TouchableOpacity>
            );
          })
        )}
      </ScrollView>
    );
  };

  return (
    <AppScreen showBottomNav active="lessons" topInsetColor="#410FA3">
      <View
        style={styles.pageScroll}
        onLayout={(event) => {
          const { width, height } = event.nativeEvent.layout;
          setPagerSize({ width, height });
        }}
      >
        {pagerSize.width > 0 ? (
          <ScrollView
            ref={pagerRef}
            horizontal
            pagingEnabled
            nestedScrollEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={handlePagerEnd}
          >
            {LOOPED_DIALECTS.map(renderDialectPage)}
          </ScrollView>
        ) : null}
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  // AppScreen pads its content by 20; pull the scroll view back out to the
  // screen edges (a negative margin on the content container gets clipped
  // by the scroll view, which is what left the gap around the header).
  pageScroll: {
    flex: 1,
    marginHorizontal: -20,
    marginTop: -20,
    marginBottom: -32,
    backgroundColor: "#F4F7FA",
  },

  page: {
    paddingHorizontal: 20,
    paddingBottom: 140,
  },

  /* =========================
     HEADER
  ========================= */

  header: {
    marginHorizontal: -20,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 60,
    backgroundColor: "#410FA3",
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  headerSubtitle: {
    marginTop: 6,
    fontSize: 15,
    color: "rgba(255,255,255,0.8)",
  },

  /* =========================
     LEVEL CARD
  ========================= */

  levelCard: {
    marginTop: -40,
    marginBottom: 20,
    padding: 18,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },

  levelCardTop: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  levelEyebrow: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.8,
    color: "#7A7F8C",
  },

  levelName: {
    marginTop: 4,
    fontSize: 20,
    fontWeight: "800",
    color: "#1F2230",
  },

  levelRank: {
    color: "#5E6577",
  },

  xpPill: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 16,
    backgroundColor: "#ECEEFB",
  },

  xpPillText: {
    fontSize: 14,
    fontWeight: "800",
    color: "#2B2A6B",
  },

  xpTrack: {
    height: 8,
    marginTop: 18,
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: "#EEF1F5",
  },

  xpFill: {
    height: "100%",
    borderRadius: 4,
    backgroundColor: "#5B39D6",
  },

  levelCardBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    marginTop: 12,
  },

  finishedText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#5B39D6",
  },

  xpCaption: {
    fontSize: 13,
    color: "#7A7F8C",
  },

  /* =========================
     DIALECT TABS
  ========================= */

  dialectSwiper: {
    overflow: "hidden",
    marginBottom: 8,
    paddingBottom: 10,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "#E89A6E",
    backgroundColor: "#FBE9E1",
  },

  swiperChevron: {
    width: 24,
    textAlign: "center",
    fontSize: 28,
    color: "#C2571F",
  },

  swiperPage: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingTop: 12,
  },

  swiperName: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "800",
    color: "#8A3410",
  },

  dotRow: {
    flexDirection: "row",
    alignSelf: "center",
    gap: 6,
    marginTop: 6,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#EBC3AE",
  },

  dotActive: {
    width: 18,
    backgroundColor: "#C2571F",
  },

  swipeHint: {
    marginBottom: 16,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "600",
    color: "#9AA1AD",
  },

  /* =========================
     LESSON LIST
  ========================= */

  sectionHeaderTier: {
    marginTop: 14,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 58,
    marginBottom: 16,
    paddingHorizontal: 18,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "#E89A6E",
    backgroundColor: "#FBE9E1",
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#8A3410",
  },

  sectionCount: {
    fontSize: 14,
    fontWeight: "700",
    color: "#8A3410",
  },

  boardLoading: {
    marginVertical: 30,
  },

  emptyLessons: {
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 20,
  },

  emptyLessonsTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#26242D",
    textAlign: "center",
  },

  emptyLessonsText: {
    marginTop: 6,
    fontSize: 13,
    lineHeight: 19,
    color: "#74747C",
    textAlign: "center",
  },

  lessonCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginBottom: 14,
    padding: 16,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E3E8EE",
    backgroundColor: "#FFFFFF",
  },

  lessonCardSelected: {
    borderColor: "#5B39D6",
  },

  lessonCardLocked: {
    backgroundColor: "#FAFBFC",
    borderColor: "#E6F0EA",
  },

  lessonIcon: {
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    backgroundColor: "#FBE9E1",
  },

  lessonIconCompleted: {
    backgroundColor: "#DDF4E6",
  },

  lessonIconLocked: {
    backgroundColor: "#EEF3F6",
  },

  lessonIconText: {
    fontSize: 28,
  },

  lessonBody: {
    flex: 1,
  },

  lessonCardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1F2230",
  },

  lessonCardSubtitle: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 18,
    color: "#5E6577",
  },

  lessonTextLocked: {
    color: "#A9B2BC",
  },

  lessonMeta: {
    marginTop: 6,
    fontSize: 12,
    color: "#8B93A0",
  },

  lessonIconImage: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },

  statusImage: {
    width: 13,
    height: 13,
    resizeMode: "contain",
  },

  statusUnlocked: {
    fontWeight: "700",
    color: "#C2571F",
  },

  statusCompleted: {
    fontWeight: "700",
    color: "#1E8A4C",
  },

  statusLocked: {
    fontWeight: "700",
    color: "#D9534F",
  },

  lessonArrow: {
    fontSize: 20,
    fontWeight: "700",
    color: "#C2571F",
  },

  levelBadge: {
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: "#EFECFB",
  },

  /* =========================
     LESSON INTRO
  ========================= */

  lessonHero: {
    alignItems: "center",
    marginTop: 0,
    marginBottom: 2,
  },

  heroImage: {
    width: 96,
    height: 96,
  },

  badgeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 0,
  },

  badge: {
    paddingHorizontal: 11,
    paddingVertical: 5,
    borderRadius: 14,
    backgroundColor: "#EEE9FC",
  },

  badgeText: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.5,
    color: "#5B39D6",
  },

  intro: {
    alignItems: "center",

    marginBottom: 14,
  },

  lessonTitle: {
    fontSize: 25,
    lineHeight: 30,
    fontWeight: "800",

    color: "#26242D",

    textAlign: "center",
  },

  lessonSubtitle: {
    marginTop: 4,

    fontSize: 15,
    lineHeight: 20,

    color: "#74747C",

    textAlign: "center",
  },

  /* =========================
     PHRASE CARD
  ========================= */

  phraseCard: {
    flexDirection: "row",

    backgroundColor: "#FFFFFF",

    borderRadius: 14,

    padding: 16,

    marginBottom: 14,

    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.05,
    shadowRadius: 7,

    elevation: 2,
  },

  phraseNumberContainer: {
    width: 32,
    height: 32,

    borderRadius: 16,

    backgroundColor: "#EEE9FC",

    alignItems: "center",
    justifyContent: "center",

    marginRight: 13,
  },

  phraseNumber: {
    fontSize: 15,
    fontWeight: "800",

    color: "#5B39D6",
  },

  phraseContent: {
    flex: 1,
  },

  phraseHeadingRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },

  phrase: {
    flex: 1,
    fontSize: 19,
    lineHeight: 25,
    fontWeight: "800",

    color: "#26242D",

    marginBottom: 12,
  },

  speakerButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3F0FF",
  },

  wordSpeakerButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 6,
    marginTop: -5,
  },

  speakerButtonActive: {
    backgroundColor: "#E2D9FF",
  },

  divider: {
    height: 1,

    backgroundColor: "#E5E5EA",

    marginBottom: 11,
  },

  /* =========================
     WORD EXPLANATIONS
  ========================= */

  wordRow: {
    flexDirection: "row",

    alignItems: "flex-start",

    marginBottom: 7,
  },

  word: {
    width: 95,

    fontSize: 15,
    fontWeight: "700",

    color: "#5B39D6",
  },

  meaning: {
    flex: 1,

    fontSize: 15,
    lineHeight: 20,

    color: "#74747C",
  },

  /* =========================
     PRACTICE BUTTON
  ========================= */

  practiceButton: {
    height: 52,

    backgroundColor: "#5B39D6",

    borderRadius: 14,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    marginTop: 6,

    shadowColor: "#5B39D6",

    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.2,
    shadowRadius: 8,

    elevation: 4,
  },

  playImage: {
    width: 28,
    height: 28,
    marginRight: 10,
  },

  practiceDisabled: {
    opacity: 0.6,
  },

  practiceText: {
    fontSize: 17,
    fontWeight: "800",

    color: "#FFFFFF",
  },

  practiceContent: {
    alignItems: "flex-start",
  },

  practiceSubtext: {
    marginTop: 2,
    fontSize: 11,
    fontWeight: "600",
    color: "rgba(255,255,255,0.78)",
  },

  practiceArrow: {
    fontSize: 21,
    fontWeight: "700",

    color: "#FFFFFF",

    marginLeft: 9,
  },
  vocabCard: {
    alignItems: "center",
    padding: 26,
    marginBottom: 14,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#B9B1E2",
    backgroundColor: "#F5F3FC",
  },
  vocabProgress: {
    color: "#5B50B0",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.2,
  },
  vocabPhrase: {
    marginTop: 18,
    color: "#5145A1",
    fontSize: 28,
    lineHeight: 36,
    fontWeight: "800",
    textAlign: "center",
  },
  vocabAudio: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 12,
    padding: 6,
  },
  vocabAudioText: { color: "#74747C", fontSize: 14, fontWeight: "600" },
  vocabDivider: {
    alignSelf: "stretch",
    height: 1,
    marginVertical: 20,
    backgroundColor: "#DDD9EA",
  },
  vocabMeaning: {
    color: "#292733",
    fontSize: 22,
    lineHeight: 29,
    fontWeight: "800",
    textAlign: "center",
  },
  supportCard: {
    padding: 17,
    marginBottom: 12,
    borderRadius: 16,
    backgroundColor: "#F3F1FA",
  },
  supportHeading: { flexDirection: "row", alignItems: "center", gap: 8 },
  supportTitle: { color: "#292733", fontSize: 16, fontWeight: "800" },
  supportText: { marginTop: 9, color: "#625E6D", fontSize: 15, lineHeight: 22 },
  exampleCard: {
    padding: 17,
    marginBottom: 14,
    borderLeftWidth: 4,
    borderLeftColor: "#5B50B0",
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
  },
  exampleText: {
    marginTop: 10,
    color: "#5145A1",
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "700",
  },
  exampleMeaning: {
    marginTop: 5,
    color: "#77727F",
    fontSize: 14,
    lineHeight: 20,
    fontStyle: "italic",
  },
  phraseNavigation: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 12,
    marginHorizontal: -20,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E3E0EA",
  },
  previousPhrase: {
    minWidth: 125,
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#5B50B0",
  },
  phraseDisabled: { opacity: 0.4 },
  previousPhraseText: { color: "#5B50B0", fontSize: 15, fontWeight: "800" },
  nextPhrase: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 12,
    backgroundColor: "#5B50B0",
  },
  nextPhraseText: { color: "#FFFFFF", fontSize: 16, fontWeight: "800" },
  noPhrases: {
    padding: 20,
    color: "#74747C",
    fontSize: 15,
    textAlign: "center",
  },
});
