import { useRouter } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getChaptersForDialect, StoryDialect } from "../data/storyData";
import { useActiveDialect } from "../hooks/useActiveDialect";
import { useStoryProgress } from "../hooks/useStoryProgress";

// Chapter prose lives once in data/storyData.ts and is resolved per
// dialect at runtime (getChaptersForDialect).
//
// DIALECT SWITCHER: the three buttons at the top let the reader browse
// any dialect's version of the story from here, without changing their
// account's active_dialect (that stays whatever the dashboard set).
// The chosen dialect is passed along to the chapter screen as a route
// param so the chapter opens in the same dialect it was tapped in.
//
// UNLOCK RULE: a chapter unlocks only if EVERY earlier chapter is
// complete — not just the one immediately before it. Note lessonIds
// differ per dialect (tagalog_1 vs waray_1), so progress is tracked
// separately per dialect, and switching dialects can change which
// chapters are unlocked.

const DIALECTS: { key: StoryDialect; label: string }[] = [
  { key: "tagalog", label: "Tagalog" },
  { key: "kapampangan", label: "Kapampangan" },
  { key: "waray", label: "Waray" },
];

export default function StoryScreen() {
  const router = useRouter();
  const { dialect: activeDialect, loading: dialectLoading } =
    useActiveDialect();

  // Starts from the account's active dialect, then follows the buttons.
  const [selectedDialect, setSelectedDialect] =
    useState<StoryDialect>(activeDialect);

  // The hook resolves active_dialect asynchronously, so adopt it once
  // it arrives — but only before the reader has tapped a button, so a
  // late-arriving fetch doesn't override their choice.
  const [userPicked, setUserPicked] = useState(false);
  useEffect(() => {
    if (!dialectLoading && !userPicked) {
      setSelectedDialect(activeDialect);
    }
  }, [dialectLoading, activeDialect, userPicked]);

  const chapters = useMemo(
    () => getChaptersForDialect(selectedDialect),
    [selectedDialect],
  );
  const { loading: progressLoading, isChapterUnlocked } =
    useStoryProgress(chapters);

  const loading = dialectLoading || progressLoading;

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/dashboard");
    }
  };

  const handleDialectPress = (dialect: StoryDialect) => {
    setUserPicked(true);
    setSelectedDialect(dialect);
  };

  const handleChapterPress = (index: number) => {
    const chapter = chapters[index];

    if (loading || !isChapterUnlocked(index)) {
      // Button is `disabled` below in this case — safety net only.
      return;
    }

    router.push({
      pathname: "/story/[chapterId]",
      params: {
        chapterId: String(chapter.id),
        dialect: selectedDialect,
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={handleBackPress}
            style={styles.backButton}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Text style={styles.backButtonText}>‹ Back</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          <Text style={styles.title}>Story</Text>

          <Text style={styles.subtitle}>
            Explore stories and continue your learning journey.
          </Text>

          {/* DIALECT SWITCHER */}
          <View style={styles.dialectRow}>
            {DIALECTS.map((d) => {
              const active = d.key === selectedDialect;

              return (
                <TouchableOpacity
                  key={d.key}
                  style={[
                    styles.dialectButton,
                    active && styles.dialectButtonActive,
                  ]}
                  onPress={() => handleDialectPress(d.key)}
                  activeOpacity={0.85}
                >
                  <Text
                    style={[
                      styles.dialectButtonText,
                      active && styles.dialectButtonTextActive,
                    ]}
                    numberOfLines={1}
                  >
                    {d.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {chapters.map((chapter, index) => {
            const unlocked = !loading && isChapterUnlocked(index);

            return (
              <TouchableOpacity
                key={chapter.id}
                style={[
                  styles.chapterButton,
                  !unlocked && styles.chapterButtonLocked,
                ]}
                onPress={() => handleChapterPress(index)}
                disabled={!unlocked}
                activeOpacity={unlocked ? 0.85 : 1}
              >
                <View style={styles.chapterButtonRow}>
                  <Text
                    style={[
                      styles.chapterButtonTitle,
                      !unlocked && styles.chapterButtonTitleLocked,
                    ]}
                  >
                    {chapter.title}
                  </Text>

                  {unlocked ? (
                    <Text style={styles.chevron}>›</Text>
                  ) : (
                    <Text style={styles.lockIcon}>🔒</Text>
                  )}
                </View>

                {!unlocked && (
                  <View style={styles.lockedRow}>
                    {loading ? (
                      <>
                        <ActivityIndicator size="small" color="#9CA3AF" />
                        <Text style={styles.lockedMessage}>
                          Checking your progress...
                        </Text>
                      </>
                    ) : (
                      <Text style={styles.lockedMessage}>
                        Finish &quot;{chapters[index - 1].title}&quot; first to unlock
                        this chapter.
                      </Text>
                    )}
                  </View>
                )}
              </TouchableOpacity>
            );
          })}

          <View style={styles.comingSoonBox}>
            <Text style={styles.comingSoonTitle}>New story soon!</Text>
            <Text style={styles.comingSoonText}>
              More stories are on the way.
            </Text>
          </View>

          <View style={styles.bottomSpace} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },

  screen: {
    flex: 1,
    position: "relative",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 4,
  },

  backButton: {
    alignSelf: "flex-start",
  },

  backButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#5E3BEE",
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 40,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#410FA3",
  },

  subtitle: {
    marginTop: 6,
    fontSize: 15,
    color: "#777777",
    marginBottom: 18,
  },

  /* =========================
     DIALECT SWITCHER
  ========================= */

  dialectRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 22,
  },

  dialectButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#E5E3F0",
    alignItems: "center",
    justifyContent: "center",
  },

  dialectButtonActive: {
    backgroundColor: "#5E3BEE",
    borderColor: "#5E3BEE",
  },

  dialectButtonText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#6B7280",
  },

  dialectButtonTextActive: {
    color: "#FFFFFF",
  },

  /* =========================
     CHAPTER BUTTONS
  ========================= */

  chapterButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    marginBottom: 14,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  chapterButtonLocked: {
    backgroundColor: "#F3F2FA",
    shadowOpacity: 0,
    elevation: 0,
  },

  chapterButtonRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  chapterButtonTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#222",
    flexShrink: 1,
    paddingRight: 10,
  },

  chapterButtonTitleLocked: {
    color: "#9CA3AF",
  },

  chevron: {
    fontSize: 22,
    fontWeight: "700",
    color: "#5E3BEE",
  },

  lockIcon: {
    fontSize: 18,
  },

  lockedRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 10,
  },

  lockedMessage: {
    fontSize: 14,
    color: "#888",
    fontWeight: "600",
    flexShrink: 1,
  },

  comingSoonBox: {
    marginTop: 10,
    padding: 20,
    borderRadius: 16,
    backgroundColor: "#F3F2FA",
    alignItems: "center",
  },

  comingSoonTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#410FA3",
    marginBottom: 6,
  },

  comingSoonText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#666",
    textAlign: "center",
  },

  bottomSpace: {
    height: 40,
  },
});
