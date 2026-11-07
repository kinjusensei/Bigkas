import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import * as Haptics from "expo-haptics";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import LevelSelector, {
  LevelCardState,
} from "../components/lessons/LevelSelector";
import LockedLevelPanel from "../components/lessons/LockedLevelPanel";
import {
  getComingSoonStories,
  getStoriesForDialect,
  Story,
  StoryDialect,
} from "../data/storyData";
import { useActiveDialect } from "../hooks/useActiveDialect";
import { getStoryProgress, useStoryProgress } from "../hooks/useStoryProgress";
import { tierLessonIds, TIERS } from "../utils/lessonTiers";
import { highestOpenLevel, storyLevelContent } from "../utils/storyLevels";
import StoryHeader, { STORY_COLORS } from "./components/Story/StoryHeader";

// STORY FLOW: Story list (this screen) → Chapters
// (app/story-chapters/[storyId].tsx) → Chapter reader (app/story/[chapterId].tsx).
//
// Stories and their chapters live once in data/storyData.ts and are
// resolved per dialect at runtime (getStoriesForDialect).
//
// DIALECT SWITCHER: swiping left or right anywhere on the screen (looping
// past either end) lets the reader browse any dialect's stories from here,
// without changing their account's active_dialect (that stays whatever
// the dashboard set). The chosen dialect is passed along as a route param
// so chapters open in the same dialect they were picked in.
//
// Progress is tracked per dialect: lessonIds differ per dialect
// (story_tagalog_1 vs story_waray_1), so switching dialects changes the
// progress shown on each story.

const DIALECTS: { key: StoryDialect; label: string }[] = [
  { key: "tagalog", label: "Tagalog" },
  { key: "kapampangan", label: "Kapampangan" },
  { key: "waray", label: "Waray" },
];

const C = STORY_COLORS;

// LEVELS (utils/storyLevels.ts): the buttons show one level's stories. A
// locked level shows its panel instead, and StoryGate sends locked routes
// back here with ?dialect=&level=.
//
// The last level picked per dialect, kept for this app session.
const sessionLevels: Partial<Record<StoryDialect, number>> = {};

export default function StoryScreen() {
  const router = useRouter();
  const { dialect: activeDialect, loading: dialectLoading } =
    useActiveDialect();
  const params = useLocalSearchParams<{ dialect?: string; level?: string }>();
  const paramDialect = DIALECTS.find((item) => item.key === params.dialect)?.key;
  const paramLevel = TIERS.findIndex((tier) => tier.key === params.level);

  // Start from the route's dialect, or the account's active dialect.
  const [selectedDialect, setSelectedDialect] = useState<StoryDialect>(
    paramDialect ?? activeDialect,
  );
  const [selectedLevels, setSelectedLevels] = useState(sessionLevels);

  // The hook resolves active_dialect asynchronously, so adopt it once
  // it arrives.
  useEffect(() => {
    if (!dialectLoading) {
      setSelectedDialect(paramDialect ?? activeDialect);
    }
  }, [dialectLoading, activeDialect, paramDialect]);

  const selectLevel = useCallback((dialect: StoryDialect, level: number) => {
    sessionLevels[dialect] = level;
    setSelectedLevels({ ...sessionLevels });
  }, []);

  // A locked route landed here: show that level's panel.
  useEffect(() => {
    if (paramDialect && paramLevel >= 0) selectLevel(paramDialect, paramLevel);
  }, [paramDialect, paramLevel, selectLevel]);

  const stories = useMemo(
    () => getStoriesForDialect(selectedDialect),
    [selectedDialect],
  );
  const comingSoonStories = useMemo(
    () => getComingSoonStories(selectedDialect),
    [selectedDialect],
  );
  const {
    loading: progressLoading,
    isLessonComplete,
    isStoryLevelOpen,
    isStoryOpen,
  } = useStoryProgress();

  const loading = dialectLoading || progressLoading;

  // A level with a story the learner already started counts as open.
  const levelStates: LevelCardState[] = TIERS.map((_, index) => {
    const inLevel = stories.filter((story) => story.tierIndex === index);
    const chapters = inLevel.flatMap((story) => story.chapters);
    const content = storyLevelContent(
      inLevel.length,
      comingSoonStories.filter((story) => story.tierIndex === index).length,
    );
    const unlocked =
      !loading &&
      (isStoryLevelOpen(selectedDialect, index) ||
        inLevel.some((story) => isStoryOpen(story, selectedDialect)));
    return {
      unlocked,
      done: loading
        ? 0
        : chapters.filter((chapter) => isLessonComplete(chapter.lessonId))
            .length,
      total: chapters.length,
      status:
        content === "coming-soon"
          ? "Coming soon"
          : content === "empty"
            ? "No stories"
            : undefined,
    };
  });
  const selectedLevel =
    selectedLevels[selectedDialect] ?? highestOpenLevel(levelStates);
  const levelHasStories = stories.some(
    (story) => story.tierIndex === selectedLevel,
  );
  const levelLocked =
    !loading && levelHasStories && !levelStates[selectedLevel].unlocked;
  const levelStories =
    loading || levelLocked
      ? []
      : stories.filter(
          (story) =>
            story.tierIndex === selectedLevel &&
            isStoryOpen(story, selectedDialect),
        );
  const levelComingSoon = comingSoonStories.filter(
    (story) => story.tierIndex === selectedLevel,
  );
  const dialectLabel =
    DIALECTS.find((item) => item.key === selectedDialect)?.label ?? "Tagalog";

  const dialectIndex = DIALECTS.findIndex(
    (dialect) => dialect.key === selectedDialect,
  );

  // Slide + fade for the dialect name, counter and dots on each change.
  const dialectSlide = useRef(new Animated.Value(0)).current;
  const dialectFade = useRef(new Animated.Value(1)).current;

  // direction: 1 = next dialect (swipe left), -1 = previous (swipe right).
  // Functional update, so the gesture never works from a stale dialect.
  const changeDialect = useCallback(
    (direction: 1 | -1) => {
      console.log("[SwipeDebug] changeDialect direction=" + direction);
      setSelectedDialect((current) => {
        const currentIndex = DIALECTS.findIndex(
          (dialect) => dialect.key === current,
        );
        const nextIndex =
          (currentIndex + direction + DIALECTS.length) % DIALECTS.length;
        return DIALECTS[nextIndex].key;
      });

      Haptics.selectionAsync().catch(() => {});

      dialectSlide.setValue(direction * 24);
      dialectFade.setValue(0);
      Animated.parallel([
        Animated.timing(dialectSlide, {
          toValue: 0,
          duration: 220,
          useNativeDriver: true,
        }),
        Animated.timing(dialectFade, {
          toValue: 1,
          duration: 220,
          useNativeDriver: true,
        }),
      ]).start();
    },
    [dialectSlide, dialectFade],
  );

  // The story list's own scrolling, run alongside the swipe so neither
  // blocks the other.
  const listGesture = useMemo(() => Gesture.Native(), []);

  // Whole-screen horizontal swipe. It only activates after 20px sideways
  // and fails after 15px vertical, so taps and vertical scrolls never
  // change the dialect.
  const dialectSwipe = useMemo(
    () =>
      Gesture.Pan()
        .runOnJS(true)
        .activeOffsetX([-20, 20])
        .failOffsetY([-15, 15])
        .simultaneousWithExternalGesture(listGesture)
        // DEBUG(swipe): temporary logs — remove once the swipe is fixed.
        .onBegin(() => console.log("[SwipeDebug] onBegin"))
        .onStart(() => console.log("[SwipeDebug] onStart"))
        .onUpdate((event) =>
          console.log(
            "[SwipeDebug] onUpdate x=" + Math.round(event.translationX),
          ),
        )
        .onFinalize((_, success) =>
          console.log("[SwipeDebug] onFinalize success=" + success),
        )
        .onEnd((event, success) => {
          console.log(
            "[SwipeDebug] onEnd success=" +
              success +
              " x=" +
              Math.round(event.translationX) +
              " vx=" +
              Math.round(event.velocityX),
          );
          if (!success) return;

          const farEnough = Math.abs(event.translationX) > 50;
          const fastEnough = Math.abs(event.velocityX) > 500;
          if (!farEnough && !fastEnough) return;

          const dx = farEnough ? event.translationX : event.velocityX;
          changeDialect(dx < 0 ? 1 : -1);
        }),
    [listGesture, changeDialect],
  );

  const handleBackPress = () => {
    router.replace("/dashboard");
  };

  const handleStoryPress = (story: Story) => {
    if (!isStoryOpen(story, selectedDialect)) {
      selectLevel(selectedDialect, story.tierIndex);
      return;
    }
    router.push({
      pathname: "/story-chapters/[storyId]",
      params: { storyId: story.id, dialect: selectedDialect },
    });
  };

  const handleGoToPreviousLessons = () => {
    router.push({
      pathname: "/lessons",
      params: { dialect: dialectLabel, tier: TIERS[selectedLevel - 1].key },
    } as any);
  };

  return (
    <SafeAreaView style={styles.container} edges={["bottom", "left", "right"]}>
      <GestureDetector gesture={dialectSwipe}>
        <View style={styles.flex} collapsable={false}>
          <StoryHeader
            title="Story"
            onBack={handleBackPress}
            backLabel="Back to dashboard"
            style={styles.header}
          />

          {/* DIALECT CARD */}
          <View style={styles.dialectCard}>
            <View style={styles.dialectTopRow}>
              <View style={styles.dialectTile}>
                <Ionicons name="book" size={24} color={C.primary} />
              </View>

              <Animated.View
                style={[
                  styles.flex,
                  {
                    opacity: dialectFade,
                    transform: [{ translateX: dialectSlide }],
                  },
                ]}
              >
                <Text style={styles.dialectEyebrow}>DIALECT</Text>
                <Text style={styles.dialectName}>
                  {DIALECTS[dialectIndex]?.label}
                </Text>
              </Animated.View>

              <Animated.Text
                style={[styles.dialectCount, { opacity: dialectFade }]}
              >
                {dialectIndex + 1} / {DIALECTS.length}
              </Animated.Text>
            </View>

            <View style={styles.dialectBottomRow}>
              <Animated.View style={[styles.dotRow, { opacity: dialectFade }]}>
                {DIALECTS.map((dialect) => (
                  <View
                    key={dialect.key}
                    style={[
                      styles.dot,
                      dialect.key === selectedDialect && styles.dotActive,
                    ]}
                  />
                ))}
              </Animated.View>

              <Text style={styles.swipeHint}>Swipe to change dialect</Text>
            </View>
          </View>

          {/* STORIES */}
          <GestureDetector gesture={listGesture}>
            <FlatList
              style={styles.flex}
              contentContainerStyle={styles.listContent}
              data={levelStories}
              keyExtractor={(story) => story.id}
              ListHeaderComponent={
                <View style={styles.listHeader}>
                  <LevelSelector
                    selected={selectedLevel}
                    states={levelStates}
                    onSelect={(level) => selectLevel(selectedDialect, level)}
                  />
                  {levelStories.length > 0 && (
                    <Text style={styles.countRow}>
                      {levelStories.length}{" "}
                      {levelStories.length === 1 ? "story" : "stories"}
                    </Text>
                  )}
                </View>
              }
              ListEmptyComponent={
                loading ? (
                  <ActivityIndicator
                    style={styles.loading}
                    size="large"
                    color={C.primary}
                  />
                ) : levelLocked ? (
                  <LockedLevelPanel
                    levelName={TIERS[selectedLevel].name}
                    title={`${TIERS[selectedLevel].name} stories are locked`}
                    previousLevelName={TIERS[selectedLevel - 1].name}
                    previousDone={tierLessonIds(
                      selectedDialect,
                      selectedLevel - 1,
                    ).map(isLessonComplete)}
                    onGoToPrevious={handleGoToPreviousLessons}
                  />
                ) : levelComingSoon.length > 0 ? (
                  <View style={styles.emptyBox}>
                    <Ionicons name="time-outline" size={28} color={C.primary} />
                    <Text style={styles.emptyTitle} accessibilityRole="header">
                      {dialectLabel} version coming soon
                    </Text>
                    <Text style={styles.comingSoonText}>
                      {levelComingSoon.map((story) => story.title).join(", ")}{" "}
                      is still being translated into {dialectLabel}. You don&apos;t
                      need it to move on to the next level.
                    </Text>
                  </View>
                ) : (
                  <View style={styles.emptyBox}>
                    <Ionicons name="book-outline" size={28} color={C.primary} />
                    <Text style={styles.emptyTitle}>No stories here yet</Text>
                  </View>
                )
              }
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              renderItem={({ item: story }) => {
                const { done, total, pct } = loading
                  ? { done: 0, total: story.chapters.length, pct: 0 }
                  : getStoryProgress(story.chapters, isLessonComplete);

                return (
                  <View style={styles.storyCard}>
                    <View style={styles.storyTile}>
                      <Ionicons name="book" size={26} color={C.primary} />
                    </View>

                    <View style={styles.flex}>
                      {story.level && (
                        <View style={styles.levelChip}>
                          <Ionicons
                            name="bar-chart"
                            size={12}
                            color={C.primary}
                          />
                          <Text style={styles.levelChipText}>
                            {story.level}
                          </Text>
                        </View>
                      )}
                      <Text numberOfLines={2} style={styles.storyTitle}>
                        {story.title}
                      </Text>
                      <Text style={styles.storyMeta}>
                        {done} of {total} chapters · {pct}%
                      </Text>
                      <View style={styles.storyTrack}>
                        <View
                          style={[styles.storyFill, { width: `${pct}%` }]}
                        />
                      </View>
                    </View>

                    <TouchableOpacity
                      style={styles.playButton}
                      onPress={() => handleStoryPress(story)}
                      accessibilityRole="button"
                      accessibilityLabel="Open chapters"
                    >
                      <Ionicons name="play" size={20} color="#FFFFFF" />
                    </TouchableOpacity>
                  </View>
                );
              }}
              ListFooterComponent={
                levelStories.length > 0 ? (
                  <View style={styles.comingSoonBox}>
                    <Text style={styles.comingSoonTitle}>New story soon!</Text>
                    <Text style={styles.comingSoonText}>
                      More stories are on the way.
                    </Text>
                  </View>
                ) : null
              }
            />
          </GestureDetector>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: C.background,
  },

  flex: {
    flex: 1,
  },

  header: {
    paddingBottom: 72,
  },

  /* =========================
     DIALECT CARD
  ========================= */

  dialectCard: {
    marginTop: -56,
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 22,
    backgroundColor: C.card,
    shadowColor: C.text,
    shadowOpacity: 0.1,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },

  dialectTopRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  dialectTile: {
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: C.tileBg,
  },

  dialectEyebrow: {
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 0.7,
    color: C.textSecondary,
  },

  dialectName: {
    marginTop: 2,
    fontSize: 20,
    fontWeight: "800",
    color: C.text,
  },

  dialectCount: {
    fontSize: 13,
    fontWeight: "500",
    color: C.textSecondary,
  },

  dialectBottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 14,
  },

  dotRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: C.dotInactive,
  },

  dotActive: {
    width: 22,
    backgroundColor: C.primary,
  },

  swipeHint: {
    fontSize: 12,
    fontWeight: "500",
    color: C.textSecondary,
  },

  /* =========================
     STORY LIST
  ========================= */

  listHeader: {
    marginTop: 16,
  },

  loading: {
    marginTop: 40,
  },

  emptyBox: {
    alignItems: "center",
    gap: 8,
    marginTop: 14,
    paddingVertical: 28,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: C.lockedCard,
  },

  emptyTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: C.text,
    textAlign: "center",
  },

  countRow: {
    marginTop: 18,
    marginBottom: 12,
    fontSize: 15,
    fontWeight: "700",
    color: C.text,
  },

  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 44,
  },

  separator: {
    height: 12,
  },

  storyCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: C.cardBorder,
    backgroundColor: C.card,
  },

  storyTile: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: C.tileBg,
  },

  levelChip: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginBottom: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 999,
    backgroundColor: C.background,
  },

  levelChipText: {
    fontSize: 11,
    fontWeight: "700",
    color: C.primary,
  },

  storyTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: C.text,
  },

  storyMeta: {
    marginTop: 3,
    fontSize: 13,
    fontWeight: "500",
    color: C.textSecondary,
  },

  storyTrack: {
    height: 6,
    marginTop: 8,
    borderRadius: 3,
    overflow: "hidden",
    backgroundColor: C.track,
  },

  storyFill: {
    height: "100%",
    borderRadius: 3,
    backgroundColor: C.primary,
  },

  playButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: C.primary,
  },

  comingSoonBox: {
    marginTop: 12,
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: C.lockedCard,
    alignItems: "center",
  },

  comingSoonTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: C.primary,
    marginBottom: 6,
  },

  comingSoonText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
    color: C.textSecondary,
    textAlign: "center",
  },
});
