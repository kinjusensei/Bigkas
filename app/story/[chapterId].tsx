import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  isValidElement,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  ActivityIndicator,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

import StoryGate from "../../components/story/StoryGate";
import {
  DialectTermAnnotation,
  getStoriesForDialect,
  getStoryForDialect,
  StoryDialect,
} from "../../data/storyData";
import { useActiveDialect } from "../../hooks/useActiveDialect";
import { useStoryProgress } from "../../hooks/useStoryProgress";
import {
  renderAnnotatedParagraph,
  renderWarayHighlights,
} from "../../utils/storyText";
import TermExplanationModal from "../components/Story/TermExplanationModal";

// Reached from the Chapters screen (app/story-chapters/[storyId].tsx).
//
// READING FORMAT: the whole chapter as one vertical scroll, paragraph by
// paragraph. In Both mode each dialect paragraph has its English source
// directly beneath it.
//
// HIGHLIGHTED WORDS: each paragraph gets the chapter's term annotations
// for that paragraph, rendered by renderWarayHighlights (Waray) or
// renderAnnotatedParagraph (other dialects). Tapping one opens
// TermExplanationModal.
//
// READING MODE: Dialect / English / Both, saved under one AsyncStorage key
// so it carries across chapters and app restarts.
//
// Lock re-check: every earlier chapter must be complete, not just the
// immediately preceding one.

type ReadingMode = "dialect" | "english" | "both";

const READING_MODE_KEY = "story_reading_mode";

const READING_MODES: { key: ReadingMode; label: string }[] = [
  { key: "dialect", label: "Dialect" },
  { key: "english", label: "English" },
  { key: "both", label: "Both" },
];

const DIALECT_LABELS: Record<StoryDialect, string> = {
  tagalog: "Tagalog",
  kapampangan: "Kapampangan",
  waray: "Waray",
};

const C = {
  primary: "#5B50B0",
  text: "#1C1A2E",
  textSecondary: "#5E5A75",
  tabSelectedText: "#2E2670",
  tabText: "#F1EFFF",
  subtitle: "#E6E2FF",
};

const SERIF = Platform.select({ ios: "Georgia", default: "serif" });

function isReadingMode(value: unknown): value is ReadingMode {
  return value === "dialect" || value === "english" || value === "both";
}

export default function StoryChapterRoute() {
  const { chapterId, dialect } = useLocalSearchParams<{
    chapterId: string;
    dialect?: string;
  }>();
  return (
    <StoryGate chapterId={String(chapterId)} dialect={dialect}>
      <StoryChapterScreen />
    </StoryGate>
  );
}

function StoryChapterScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { chapterId, dialect: dialectParam } = useLocalSearchParams<{
    chapterId: string;
    dialect?: string;
  }>();
  const { dialect: accountDialect, loading: dialectLoading } =
    useActiveDialect();

  // The Chapters screen passes the dialect the reader was browsing in, so
  // a chapter opens in the same dialect it was tapped in. Falling back to
  // the account's active dialect covers entry points that don't pass the
  // param (a direct link, or an older navigation call).
  const validDialects: StoryDialect[] = ["tagalog", "kapampangan", "waray"];
  const routeDialect = validDialects.includes(dialectParam as StoryDialect)
    ? (dialectParam as StoryDialect)
    : undefined;

  const dialect = routeDialect ?? accountDialect;

  // Only the chapters of the story this chapter belongs to: the unlock
  // check and "Chapter n" are per story, not across every story.
  const story = useMemo(
    () =>
      getStoriesForDialect(dialect).find((s) =>
        s.chapters.some((c) => String(c.id) === chapterId),
      ),
    [dialect, chapterId],
  );
  const chapters = useMemo(() => story?.chapters ?? [], [story]);
  const {
    loading: progressLoading,
    isChapterUnlocked,
    isLessonComplete,
    isStoryOpen,
  } = useStoryProgress(chapters);

  const [selectedTerm, setSelectedTerm] =
    useState<DialectTermAnnotation | null>(null);

  const [readingMode, setReadingMode] = useState<ReadingMode>("both");
  const [readingModeLoading, setReadingModeLoading] = useState(true);
  const [readProgress, setReadProgress] = useState(0);
  const [popupHeight, setPopupHeight] = useState(0);

  const handleTermClose = useCallback(() => setSelectedTerm(null), []);

  useEffect(() => {
    AsyncStorage.getItem(READING_MODE_KEY)
      .then((stored) => {
        if (isReadingMode(stored)) setReadingMode(stored);
      })
      .catch((error) => {
        console.warn("Failed to load story reading mode:", error);
      })
      .finally(() => setReadingModeLoading(false));
  }, []);

  const handleReadingModePress = (mode: ReadingMode) => {
    setReadingMode(mode);
    AsyncStorage.setItem(READING_MODE_KEY, mode).catch((error) => {
      console.warn("Failed to save story reading mode:", error);
    });
  };

  const loading = dialectLoading || progressLoading || readingModeLoading;

  const chapterIndex = chapters.findIndex((c) => String(c.id) === chapterId);
  const chapter = chapterIndex >= 0 ? chapters[chapterIndex] : undefined;

  useEffect(() => {
    if (loading) return; // wait for data before deciding anything

    if (!chapter) {
      router.replace("/story");
      return;
    }

    if (!isChapterUnlocked(chapterIndex)) {
      router.replace("/story");
    }
  }, [loading, chapter, chapterIndex]);

  // Fills the header bar as the reader scrolls toward the end.
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, contentSize, layoutMeasurement } =
      event.nativeEvent;
    const scrollable = contentSize.height - layoutMeasurement.height;
    const next =
      scrollable > 0 ? Math.min(1, Math.max(0, contentOffset.y / scrollable)) : 1;

    if (Math.abs(next - readProgress) > 0.005 || next === 0 || next === 1) {
      setReadProgress(next);
    }
  };

  const handleClosePress = () => {
    if (router.canGoBack()) {
      router.back();
    } else if (story) {
      router.replace({
        pathname: "/story-chapters/[storyId]",
        params: { storyId: story.id, dialect },
      });
    } else {
      router.replace("/story");
    }
  };

  if (loading || !chapter) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={C.primary} />
      </SafeAreaView>
    );
  }

  // English needs English text, Dialect needs dialect text, and Both
  // needs both. Without one of them, fall back to the other and grey out
  // the tabs that can't be shown (e.g. a story with no translations yet).
  const englishAvailable = chapter.body.some((p) => !!p?.trim());
  const dialectAvailable = (chapter.translations ?? []).some(
    (t) => !!t?.trim(),
  );
  const isModeAvailable = (m: ReadingMode) =>
    m === "english"
      ? englishAvailable
      : m === "dialect"
        ? dialectAvailable || !englishAvailable
        : englishAvailable && dialectAvailable;
  const mode: ReadingMode = isModeAvailable(readingMode)
    ? readingMode
    : englishAvailable
      ? "english"
      : "dialect";

  // When this dialect has no text for the chapter but another dialect does
  // (e.g. "Story for Deshawn" opened from the Tagalog page, where only
  // Kapampangan is translated), Dialect and Both switch the reader to that
  // dialect instead of staying greyed out. Only dialects where this
  // chapter is already unlocked are offered, so the lock check never
  // bounces the reader back to the list.
  const fallbackDialect =
    !dialectAvailable && story
      ? (Object.keys(DIALECT_LABELS) as StoryDialect[]).find((other) => {
          if (other === chapter.dialect) return false;

          const otherStory = getStoryForDialect(story.id, other);
          const otherChapter = otherStory?.chapters[chapterIndex];
          if (!otherStory || !otherChapter) return false;

          const hasText = (otherChapter.translations ?? []).some(
            (t) => !!t?.trim(),
          );
          const unlocked =
            isStoryOpen(otherStory, other) &&
            otherStory.chapters
              .slice(0, chapterIndex)
              .every((c) => isLessonComplete(c.lessonId));
          return hasText && unlocked;
        })
      : undefined;

  const switchesDialect = (m: ReadingMode) =>
    !isModeAvailable(m) &&
    fallbackDialect !== undefined &&
    (m === "dialect" || (m === "both" && englishAvailable));

  const handleTabPress = (m: ReadingMode) => {
    if (switchesDialect(m) && fallbackDialect) {
      router.setParams({ dialect: fallbackDialect });
    }
    handleReadingModePress(m);
  };

  const paragraphs = chapter.body.map((paragraph: string, index: number) => {
    const english = paragraph?.trim();
    const translated = chapter.translations?.[index]?.trim();
    // Dialect mode falls back to the English source when this
    // paragraph has no translation. That also keeps its term
    // annotations available to tap.
    const showDialect = mode !== "english" && !!translated;
    const showEnglish = !!english && (mode !== "dialect" || !translated);

    // Term annotations for this paragraph whose text actually
    // appears in it (English) or in its translation (dialect).
    const englishTerms = (chapter.terms ?? []).filter((t) => {
      if (t.paragraphIndex !== index || t.practiceWord) return false;

      const match = t.match.trim();
      return (
        match.length > 0 &&
        paragraph.toLowerCase().includes(match.toLowerCase())
      );
    });

    const dialectTerms = (chapter.terms ?? []).filter((t) => {
      if (t.paragraphIndex !== index || !t.dialectMatch) return false;

      return (
        translated
          ?.toLocaleLowerCase()
          .includes(t.dialectMatch.toLocaleLowerCase()) ?? false
      );
    });

    const dialectNodes = showDialect
      ? chapter.dialect === "waray"
        ? renderWarayHighlights(
            translated!,
            setSelectedTerm,
            dialectTerms,
            index,
            // Deshawn highlights only its 9 practice words per chapter.
            !chapter.lessonId.includes("_deshawn_"),
          )
        : renderAnnotatedParagraph(
            translated!,
            index,
            dialectTerms,
            setSelectedTerm,
            (term) => term.dialectMatch ?? term.match,
          )
      : null;

    const englishNodes = showEnglish
      ? renderAnnotatedParagraph(
          paragraph,
          index,
          englishTerms,
          setSelectedTerm,
        )
      : null;

    return {
      index,
      both: showDialect && showEnglish,
      dialectNodes,
      englishNodes,
    };
  });

  // "WORD n OF m" in the popup: the distinct highlighted terms currently
  // on screen, in reading order. Read from what the render helpers above
  // produced (each highlight is a DialectTerm element carrying its term).
  const highlightedTerms: string[] = [];
  const termKey = (t: DialectTermAnnotation) =>
    `${t.dialect}|${t.explanation}`.toLocaleLowerCase();
  const collectTerms = (node: ReactNode) => {
    if (Array.isArray(node)) {
      node.forEach(collectTerms);
    } else if (isValidElement<{ term?: DialectTermAnnotation }>(node)) {
      const term = node.props.term;
      if (term && !highlightedTerms.includes(termKey(term))) {
        highlightedTerms.push(termKey(term));
      }
    }
  };
  paragraphs.forEach((p) => {
    collectTerms(p.dialectNodes);
    collectTerms(p.englishNodes);
  });
  const selectedWordIndex = selectedTerm
    ? highlightedTerms.indexOf(termKey(selectedTerm))
    : -1;

  const handlePracticePress = () => {
    router.push({
      pathname: "/lesson/pretest",
      params: {
        // `chapter.lessonId` comes from byDialect[dialect].lessonId in
        // storyData.ts. Story practice uses this ID in its own data source.
        storyLessonId: chapter.lessonId,
        dialect: chapter.dialect,
        chapterId: String(chapter.id),
      },
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={["left", "right"]}>
      {/* HEADER */}
      <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
        <View style={styles.progressTrack}>
          <View
            style={[styles.progressFill, { width: `${readProgress * 100}%` }]}
          />
        </View>

        <View style={styles.headerRow}>
          <TouchableOpacity
            onPress={handleClosePress}
            style={styles.closeButton}
            accessibilityRole="button"
            accessibilityLabel="Close chapter"
          >
            <Ionicons name="close" size={24} color="#FFFFFF" />
          </TouchableOpacity>

          <View style={styles.headerCenter}>
            <Text numberOfLines={1} style={styles.headerTitle}>
              {story?.title ?? "Story"} · Chapter {chapterIndex + 1}
            </Text>
          </View>

          <View style={styles.spacer} />
        </View>

        {/* READING MODE TABS */}
        <View style={styles.tabs}>
          {READING_MODES.map((m) => {
            const active = m.key === mode;
            const disabled = !isModeAvailable(m.key) && !switchesDialect(m.key);

            return (
              <TouchableOpacity
                key={m.key}
                style={[
                  styles.tab,
                  active && styles.tabActive,
                  disabled && styles.tabDisabled,
                ]}
                onPress={() => handleTabPress(m.key)}
                disabled={disabled}
                activeOpacity={0.85}
                accessibilityRole="button"
                accessibilityState={{ selected: active, disabled }}
              >
                <Text
                  style={[styles.tabText, active && styles.tabTextActive]}
                  numberOfLines={1}
                >
                  {m.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Says which dialect this is, so greyed-out tabs read as
            "not translated yet" rather than broken. */}
        {!dialectAvailable && englishAvailable ? (
          <Text style={styles.tabNotice}>
            {fallbackDialect
              ? `No ${DIALECT_LABELS[chapter.dialect]} text yet — tap Dialect to read in ${DIALECT_LABELS[fallbackDialect]}.`
              : `No ${DIALECT_LABELS[chapter.dialect]} text for this chapter yet — showing English.`}
          </Text>
        ) : null}
      </View>

      {/* CHAPTER TEXT */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.content,
          // While the word popup is open, leave room for it so the last
          // lines can still scroll into view above it.
          {
            paddingBottom:
              insets.bottom + 40 + (selectedTerm ? popupHeight + 16 : 0),
          },
        ]}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={32}
      >
        <Text style={styles.chapterTitle}>
          {mode === "english" ? chapter.englishTitle : chapter.title}
        </Text>

        {paragraphs.map((p) => (
          <View key={p.index} style={styles.paragraphBlock}>
            {p.dialectNodes !== null ? (
              <Text style={styles.dialectText}>{p.dialectNodes}</Text>
            ) : null}

            {p.englishNodes !== null ? (
              <Text style={p.both ? styles.englishBoth : styles.englishText}>
                {p.englishNodes}
              </Text>
            ) : null}
          </View>
        ))}

        <TouchableOpacity
          style={styles.practiceButton}
          onPress={handlePracticePress}
          activeOpacity={0.85}
          accessibilityRole="button"
        >
          <Ionicons name="school" size={20} color="#FFFFFF" />
          <Text style={styles.practiceButtonText}>Practice This Lesson</Text>
        </TouchableOpacity>

        {chapterIndex === chapters.length - 1 && (
          <View style={styles.comingSoonBox}>
            <Text style={styles.comingSoonTitle}>New story soon!</Text>
            <Text style={styles.comingSoonText}>
              You&apos;ve reached the end of {story?.title ?? "this story"}.
              More stories are on the way.
            </Text>
          </View>
        )}
      </ScrollView>

      <TermExplanationModal
        term={selectedTerm}
        dialect={chapter.dialect}
        onClose={handleTermClose}
        wordNumber={selectedWordIndex >= 0 ? selectedWordIndex + 1 : undefined}
        wordCount={highlightedTerms.length}
        onHeightChange={setPopupHeight}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  loadingContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  /* =========================
     HEADER
  ========================= */

  header: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: C.primary,
  },

  progressTrack: {
    height: 4,
    borderRadius: 2,
    overflow: "hidden",
    marginBottom: 14,
    backgroundColor: "rgba(255,255,255,0.25)",
  },

  progressFill: {
    height: "100%",
    borderRadius: 2,
    backgroundColor: "#FFFFFF",
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },

  closeButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.12)",
  },

  headerCenter: {
    flex: 1,
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: C.subtitle,
  },

  spacer: {
    width: 44,
  },

  tabs: {
    flexDirection: "row",
    marginTop: 14,
    padding: 5,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.10)",
  },

  tab: {
    flex: 1,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },

  tabActive: {
    backgroundColor: "#FFFFFF",
  },

  tabDisabled: {
    opacity: 0.4,
  },

  tabText: {
    fontSize: 15,
    fontWeight: "700",
    color: C.tabText,
  },

  tabNotice: {
    marginTop: 10,
    fontSize: 13,
    textAlign: "center",
    color: C.subtitle,
  },

  tabTextActive: {
    color: C.tabSelectedText,
  },

  /* =========================
     CHAPTER TEXT
  ========================= */

  scroll: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },

  chapterTitle: {
    fontFamily: SERIF,
    fontSize: 26,
    lineHeight: 34,
    fontWeight: "700",
    color: C.text,
    marginBottom: 20,
  },

  paragraphBlock: {
    marginBottom: 18,
  },

  dialectText: {
    fontFamily: SERIF,
    fontSize: 24,
    lineHeight: 36,
    fontWeight: "600",
    color: C.text,
  },

  // English on its own (English mode, or Dialect-mode fallback).
  englishText: {
    fontFamily: SERIF,
    fontSize: 24,
    lineHeight: 36,
    fontWeight: "600",
    color: C.text,
  },

  // English under the dialect paragraph in Both mode.
  englishBoth: {
    marginTop: 8,
    fontSize: 17,
    lineHeight: 26,
    fontWeight: "500",
    color: C.textSecondary,
  },

  practiceButton: {
    marginTop: 14,
    minHeight: 52,
    borderRadius: 14,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: C.primary,
  },

  practiceButtonText: {
    fontSize: 17,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  comingSoonBox: {
    marginTop: 16,
    padding: 18,
    borderRadius: 16,
    backgroundColor: "#EEEBFB",
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
    color: C.textSecondary,
    textAlign: "center",
  },
});
