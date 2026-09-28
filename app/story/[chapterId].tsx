import { useLocalSearchParams, useRouter } from "expo-router";
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

import {
  DialectTermAnnotation,
  getChaptersForDialect,
  StoryDialect,
} from "../../data/storyData";
import { useActiveDialect } from "../../hooks/useActiveDialect";
import { useStoryProgress } from "../../hooks/useStoryProgress";
import { pairSentences, renderAnnotatedParagraph } from "../../utils/storyText";
import TermExplanationModal from "../components/Story/TermExplanationModal";

// Reached from app/story.tsx by tapping an unlocked chapter button.
//
// READING FORMAT: sentence by sentence — each English sentence with
// its dialect translation directly beneath it. Splitting happens at
// render time (see pairSentences in utils/storyText.tsx), so the data
// stays stored per paragraph and nothing has to be re-authored.
//
// If a paragraph and its translation don't split into the same number
// of sentences, that paragraph falls back to a single whole-paragraph
// pair rather than risking mismatched lines. A paragraph with no
// translation yet renders as English only.
//
// Lock re-check: every earlier chapter must be complete, not just the
// immediately preceding one.

export default function StoryChapterScreen() {
  const router = useRouter();
  const { chapterId, dialect: dialectParam } = useLocalSearchParams<{
    chapterId: string;
    dialect?: string;
  }>();
  const { dialect: accountDialect, loading: dialectLoading } =
    useActiveDialect();

  // The story list passes the dialect the reader was browsing in, so a
  // chapter opens in the same dialect it was tapped in. Falling back to
  // the account's active dialect covers entry points that don't pass
  // the param (a direct link, or an older navigation call).
  const VALID: StoryDialect[] = ["tagalog", "kapampangan", "waray"];
  const dialect: StoryDialect = VALID.includes(dialectParam as StoryDialect)
    ? (dialectParam as StoryDialect)
    : accountDialect;

  const chapters = useMemo(() => getChaptersForDialect(dialect), [dialect]);
  const { loading: progressLoading, isChapterUnlocked } =
    useStoryProgress(chapters);

  const [selectedTerm, setSelectedTerm] =
    useState<DialectTermAnnotation | null>(null);

  const loading = dialectLoading || progressLoading;

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

  if (loading || !chapter) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#5E3BEE" />
      </SafeAreaView>
    );
  }

  const handlePracticePress = () => {
    router.push({
      pathname: "/lesson/practice",
      params: { lessonId: chapter.lessonId },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Text style={styles.backButtonText}>‹ Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>{chapter.title}</Text>

        {chapter.body.map((paragraph: string, index: number) => {
          const pairs = pairSentences(paragraph, chapter.translations?.[index]);

          return (
            <View key={index} style={styles.paragraphBlock}>
              {pairs.map((pair, sentenceIndex) => {
                // Term annotations are stored against the paragraph, so
                // keep only the ones whose text actually appears in this
                // sentence, and point them at this sentence instead.
                const sentenceTerms = (chapter.terms ?? [])
                  .filter(
                    (t) =>
                      t.paragraphIndex === index &&
                      pair.english.includes(t.match),
                  )
                  .map((t) => ({ ...t, paragraphIndex: 0 }));

                return (
                  <View key={sentenceIndex} style={styles.sentenceBlock}>
                    <Text style={styles.englishParagraph}>
                      {renderAnnotatedParagraph(
                        pair.english,
                        0,
                        sentenceTerms,
                        setSelectedTerm,
                      )}
                    </Text>

                    {pair.translated ? (
                      <Text style={styles.dialectParagraph}>
                        {pair.translated}
                      </Text>
                    ) : null}
                  </View>
                );
              })}
            </View>
          );
        })}

        <TouchableOpacity
          style={styles.practiceButton}
          onPress={handlePracticePress}
          activeOpacity={0.85}
        >
          <Text style={styles.practiceButtonText}>Practice This Lesson</Text>
        </TouchableOpacity>

        {chapterIndex === chapters.length - 1 && (
          <View style={styles.comingSoonBox}>
            <Text style={styles.comingSoonTitle}>New story soon!</Text>
            <Text style={styles.comingSoonText}>
              You&apos;ve reached the end of Whispers. More stories are on the way.
            </Text>
          </View>
        )}

        <View style={styles.bottomSpace} />
      </ScrollView>

      <TermExplanationModal
        term={selectedTerm}
        dialect={chapter.dialect}
        onClose={() => setSelectedTerm(null)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },

  loadingContainer: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 60,
  },

  backButton: {
    alignSelf: "flex-start",
    marginBottom: 16,
  },

  backButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#5E3BEE",
  },

  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#410FA3",
    marginBottom: 18,
  },

  /* =========================
     PARAGRAPHS / SENTENCES
     Each sentence: English line, dialect translation beneath it.
     The size/weight/color difference is what tells the two apart.
     paragraphBlock keeps a bigger gap between paragraphs than
     sentenceBlock leaves between sentences.
  ========================= */

  paragraphBlock: {
    marginBottom: 20,
  },

  sentenceBlock: {
    marginBottom: 12,
  },

  englishParagraph: {
    fontSize: 15,
    lineHeight: 22,
    color: "#888",
  },

  dialectParagraph: {
    fontSize: 17,
    lineHeight: 26,
    color: "#222",
    fontWeight: "600",
    marginTop: 6,
  },

  practiceButton: {
    marginTop: 12,
    height: 52,
    borderRadius: 14,
    backgroundColor: "#5E3BEE",
    justifyContent: "center",
    alignItems: "center",
  },

  practiceButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },

  comingSoonBox: {
    marginTop: 24,
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
