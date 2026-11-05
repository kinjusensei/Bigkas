import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useMemo } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import StoryGate from "../../components/story/StoryGate";
import { getStoryForDialect, StoryDialect } from "../../data/storyData";
import { useActiveDialect } from "../../hooks/useActiveDialect";
import {
  getStoryProgress,
  useStoryProgress,
} from "../../hooks/useStoryProgress";
import StoryHeader, { STORY_COLORS } from "../components/Story/StoryHeader";

// CHAPTERS — reached from the Story list (app/story.tsx) with the story id
// and the dialect it was picked in. Opens the chapter reader
// (app/story/[chapterId].tsx) in that same dialect.
//
// UNLOCK RULE: a chapter unlocks only if EVERY earlier chapter in the
// story is complete — not just the one immediately before it.

const C = STORY_COLORS;

const DIALECT_LABELS: Record<StoryDialect, string> = {
  tagalog: "Tagalog",
  kapampangan: "Kapampangan",
  waray: "Waray",
};

export default function StoryChaptersRoute() {
  const { storyId, dialect } = useLocalSearchParams<{
    storyId: string;
    dialect?: string;
  }>();
  return (
    <StoryGate storyId={String(storyId)} dialect={dialect}>
      <StoryChaptersScreen />
    </StoryGate>
  );
}

function StoryChaptersScreen() {
  const router = useRouter();
  const { storyId, dialect: dialectParam } = useLocalSearchParams<{
    storyId: string;
    dialect?: string;
  }>();
  const { dialect: accountDialect, loading: dialectLoading } =
    useActiveDialect();

  // Same fallback as the reader: use the dialect the story was picked in,
  // or the account's active dialect when the param is missing.
  const routeDialect =
    dialectParam && dialectParam in DIALECT_LABELS
      ? (dialectParam as StoryDialect)
      : undefined;
  const dialect = routeDialect ?? accountDialect;

  const story = useMemo(
    () => getStoryForDialect(String(storyId), dialect),
    [storyId, dialect],
  );
  const chapters = useMemo(() => story?.chapters ?? [], [story]);

  const {
    loading: progressLoading,
    isLessonComplete,
    isChapterUnlocked,
    isChapterComplete,
  } = useStoryProgress(chapters);

  const loading = (!routeDialect && dialectLoading) || progressLoading;

  const { done, total, pct } = loading
    ? { done: 0, total: chapters.length, pct: 0 }
    : getStoryProgress(chapters, isLessonComplete);

  // Unknown story id (old link, removed story): back to the list.
  useEffect(() => {
    if (!loading && !story) {
      router.replace("/story");
    }
  }, [loading, story, router]);

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/story");
    }
  };

  const handleChapterPress = (index: number) => {
    const chapter = chapters[index];

    if (loading || !chapter || !isChapterUnlocked(index)) {
      // Locked chapters have no button — safety net only.
      return;
    }

    router.push({
      pathname: "/story/[chapterId]",
      params: {
        chapterId: String(chapter.id),
        dialect,
      },
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={["bottom", "left", "right"]}>
      <StoryHeader
        title="Chapters"
        onBack={handleBackPress}
        backLabel="Back to stories"
        style={styles.header}
      >
        <View style={styles.storyRow}>
          <View style={styles.storyTile}>
            <Ionicons name="book" size={28} color="#FFFFFF" />
          </View>

          <View style={styles.flex}>
            <View style={styles.chipRow}>
              <View style={styles.chip}>
                <Text style={styles.chipText}>{DIALECT_LABELS[dialect]}</Text>
              </View>
              {story?.level && (
                <View style={styles.chip}>
                  <Text style={styles.chipText}>{story.level}</Text>
                </View>
              )}
            </View>
            <Text numberOfLines={2} style={styles.storyTitle}>
              {story?.title ?? ""}
            </Text>
          </View>
        </View>

        <View style={styles.progressRow}>
          <Text style={styles.progressText}>
            {done} of {total} chapters done
          </Text>
          <Text style={styles.progressText}>{pct}%</Text>
        </View>

        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${pct}%` }]} />
        </View>
      </StoryHeader>

      <FlatList
        style={styles.flex}
        contentContainerStyle={styles.listContent}
        data={chapters}
        keyExtractor={(chapter) => String(chapter.id)}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item: chapter, index }) => {
          const unlocked = !loading && isChapterUnlocked(index);
          const completed = !loading && isChapterComplete(index);
          const state = completed ? "done" : unlocked ? "open" : "locked";

          return (
            <View
              style={[
                styles.chapterCard,
                state === "done" && styles.chapterCardDone,
                state === "open" && styles.chapterCardOpen,
                state === "locked" && styles.chapterCardLocked,
              ]}
            >
              <View
                style={[
                  styles.badge,
                  state === "done" && styles.badgeDone,
                  state === "open" && styles.badgeOpen,
                  state === "locked" && styles.badgeLocked,
                ]}
              >
                {state === "done" ? (
                  <Ionicons name="checkmark" size={24} color={C.doneIcon} />
                ) : state === "open" ? (
                  <Text style={styles.badgeNumber}>{index + 1}</Text>
                ) : (
                  <Ionicons
                    name="lock-closed"
                    size={20}
                    color={C.textSecondary}
                  />
                )}
              </View>

              <View style={styles.flex}>
                <Text style={styles.chapterLabel}>Chapter {index + 1}</Text>
                <Text
                  numberOfLines={2}
                  style={[
                    styles.chapterTitle,
                    state === "locked" && styles.chapterTitleLocked,
                  ]}
                >
                  {chapter.title}
                </Text>

                {state === "done" ? (
                  <Text style={styles.chapterStatus}>Completed</Text>
                ) : state === "open" ? (
                  <Text style={styles.chapterStatus}>Ready to read</Text>
                ) : loading ? (
                  <View style={styles.lockedRow}>
                    <ActivityIndicator size="small" color={C.textSecondary} />
                    <Text style={styles.chapterStatus}>
                      Checking your progress...
                    </Text>
                  </View>
                ) : index > 0 ? (
                  <Text style={styles.chapterStatus}>
                    Finish &quot;{chapters[index - 1].title}&quot; first to
                    unlock this chapter.
                  </Text>
                ) : null}
              </View>

              {state === "done" ? (
                <TouchableOpacity
                  style={styles.replayButton}
                  onPress={() => handleChapterPress(index)}
                  accessibilityRole="button"
                >
                  <Text style={styles.replayText}>Replay</Text>
                </TouchableOpacity>
              ) : state === "open" ? (
                <TouchableOpacity
                  style={styles.continueButton}
                  onPress={() => handleChapterPress(index)}
                  accessibilityRole="button"
                >
                  <Text style={styles.continueText}>
                    {done === 0 ? "Start" : "Continue"}
                  </Text>
                </TouchableOpacity>
              ) : null}
            </View>
          );
        }}
      />
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

  /* =========================
     HEADER
  ========================= */

  header: {
    paddingBottom: 24,
  },

  storyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginTop: 18,
  },

  storyTile: {
    width: 60,
    height: 60,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.16)",
  },

  chipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },

  chip: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.22)",
  },

  chipText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  storyTitle: {
    marginTop: 6,
    fontSize: 24,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
    marginBottom: 8,
  },

  progressText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#FFFFFF",
  },

  progressTrack: {
    height: 8,
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.22)",
  },

  progressFill: {
    height: "100%",
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
  },

  /* =========================
     CHAPTER CARDS
  ========================= */

  listContent: {
    padding: 20,
    paddingBottom: 44,
  },

  separator: {
    height: 12,
  },

  chapterCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 14,
    borderRadius: 20,
  },

  chapterCardDone: {
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: C.cardBorder,
  },

  chapterCardOpen: {
    backgroundColor: C.card,
    borderWidth: 2,
    borderColor: C.primary,
    shadowColor: C.primary,
    shadowOpacity: 0.22,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },

  chapterCardLocked: {
    backgroundColor: C.lockedCard,
    borderWidth: 1,
    borderColor: C.lockedBorder,
  },

  badge: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  badgeDone: {
    backgroundColor: C.doneBadge,
  },

  badgeOpen: {
    backgroundColor: C.primary,
  },

  badgeLocked: {
    backgroundColor: C.lockedBadge,
  },

  badgeNumber: {
    fontSize: 17,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  chapterLabel: {
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    color: C.primary,
  },

  chapterTitle: {
    marginTop: 2,
    fontSize: 16,
    fontWeight: "700",
    color: C.text,
  },

  chapterTitleLocked: {
    color: C.lockedTitle,
  },

  chapterStatus: {
    marginTop: 3,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "500",
    color: C.textSecondary,
    flexShrink: 1,
  },

  lockedRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  replayButton: {
    minHeight: 44,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: C.primary,
  },

  replayText: {
    fontSize: 14,
    fontWeight: "700",
    color: C.primary,
  },

  continueButton: {
    minHeight: 44,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: C.primary,
  },

  continueText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});
