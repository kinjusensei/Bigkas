import { Ionicons } from "@expo/vector-icons";
import { createAudioPlayer } from "expo-audio";
import { useLocalSearchParams, useRouter } from "expo-router";
import * as Speech from "expo-speech";
import { useEffect, useRef, useState } from "react";
import {
  Image,
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

import LessonGate from "../../components/lesson/LessonGate";
import StructuredLessonFlow from "../../components/lesson/StructuredLessonFlow";
import { colors } from "../../constant/theme";
import { structuredLessonsById } from "../../data/lessons/structuredLessons";
import { practiceLevels } from "../../data/practiceData";
import { pretestByLessonId } from "../../data/pretestData";
import { useStoryProgress } from "../../hooks/useLessonProgress";
import { useLogLessonStart } from "../../hooks/useLogLessonStart";
import { supabase } from "../../services/supabase";
import { resolveAvatarSource } from "../../utils/avatars";

// LESSON READING — one phrase at a time, opened from the lesson board
// (app/lessons.tsx). The final "Start Lesson" continues to the pretest
// (if one is authored and not yet passed) or straight to practice.
// Lessons with structured content (data/lessons/structuredLessons.ts)
// show the step-by-step lesson flow instead.

const PURPLE = "#5B50B0";
const DARK_PURPLE = "#4F3B9C";
const CARD_LAVENDER = "#EFECFB";
const PAGE_BACKGROUND = colors.backgroundAlt;
const BOTTOM_BAR_HEIGHT = 76;

// A locked lesson (previous one not complete) doesn't open, however the
// route was reached.
export default function LessonRoute() {
  const { lessonId } = useLocalSearchParams<{ lessonId?: string }>();
  return (
    <LessonGate lessonId={lessonId}>
      <LessonDetailsScreen />
    </LessonGate>
  );
}

function LessonDetailsScreen() {
  const router = useRouter();
  const { lessonId } = useLocalSearchParams<{ lessonId?: string }>();
  useLogLessonStart(lessonId, "lesson");
  const structuredLesson = lessonId
    ? structuredLessonsById[lessonId]
    : undefined;

  if (structuredLesson) {
    const exitLesson = () => {
      if (router.canGoBack()) router.back();
      else router.replace("/lessons");
    };
    return (
      <StructuredLessonFlow
        key={structuredLesson.lessonId}
        lesson={structuredLesson}
        onExit={exitLesson}
      />
    );
  }

  return <PhraseReadingScreen />;
}

function PhraseReadingScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { lessonId } = useLocalSearchParams<{ lessonId?: string }>();
  const { isPretestPassed } = useStoryProgress();

  // This screen can be the only one in the stack (the root layout restores
  // the last /lesson/... route on launch), so back has nowhere to go then.
  const goBack = () => {
    if (router.canGoBack()) router.back();
    else router.replace("/lessons");
  };
  const lesson = practiceLevels.find((item) => item.lessonId === lessonId);
  // Placeholder phrases (empty text) are not readable yet.
  const phrases = lesson?.phrases.filter((phrase) => phrase.text.trim()) ?? [];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const [audioNotice, setAudioNotice] = useState<string | null>(null);
  const audioPlayerRef = useRef<ReturnType<typeof createAudioPlayer> | null>(
    null,
  );
  const playbackSubscriptionRef = useRef<{ remove: () => void } | null>(null);
  const noticeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    setPhraseIndex(0);
  }, [lessonId]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }, [phraseIndex]);

  useEffect(() => {
    let mounted = true;

    async function loadAvatar() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data } = await supabase
        .from("profiles")
        .select("avatar_url")
        .eq("id", user.id)
        .maybeSingle();

      if (mounted) {
        setAvatarUrl(data?.avatar_url ?? null);
      }
    }

    loadAvatar().catch((error) => {
      console.warn("Unable to load lesson avatar:", error);
    });

    return () => {
      mounted = false;
    };
  }, []);

  const stopPronunciation = () => {
    Speech.stop().catch(() => {});
    playbackSubscriptionRef.current?.remove();
    playbackSubscriptionRef.current = null;
    audioPlayerRef.current?.remove();
    audioPlayerRef.current = null;
    setPlaying(false);
  };

  useEffect(() => {
    return () => {
      Speech.stop().catch(() => {});
      playbackSubscriptionRef.current?.remove();
      audioPlayerRef.current?.remove();
      if (noticeTimeoutRef.current) {
        clearTimeout(noticeTimeoutRef.current);
      }
    };
  }, []);

  const showAudioNotice = (message: string) => {
    setAudioNotice(message);
    if (noticeTimeoutRef.current) {
      clearTimeout(noticeTimeoutRef.current);
    }
    noticeTimeoutRef.current = setTimeout(() => {
      setAudioNotice(null);
      noticeTimeoutRef.current = null;
    }, 2500);
  };

  const currentPhrase = phrases[phraseIndex] ?? phrases[0];

  if (!lesson || !currentPhrase) {
    return (
      <SafeAreaView style={styles.emptySafeArea}>
        <TouchableOpacity
          style={styles.emptyBackButton}
          onPress={goBack}
        >
          <Text style={styles.previousText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.notFound}>
          {lesson
            ? "Lesson content is not available yet."
            : "Lesson not found."}
        </Text>
      </SafeAreaView>
    );
  }

  const totalPhrases = phrases.length;
  const isFinalPhrase = phraseIndex >= totalPhrases - 1;
  const dialect = lesson.lessonId.split("_")[0];
  const dialectLabel = dialect.charAt(0).toUpperCase() + dialect.slice(1);
  const lessonLabel = lesson.title
    .replace(/^Basic /, "")
    .replace(/ and Politeness$/, "");
  const filledWords =
    currentPhrase.words?.filter(
      (word) => word.word.trim() && word.meaning.trim(),
    ) ?? [];
  const translation =
    currentPhrase.example?.trim() ||
    currentPhrase.meaning?.trim() ||
    filledWords.map((word) => word.meaning.trim()).join(" / ");
  const usageNote =
    currentPhrase.howToUse?.trim() ||
    filledWords.map((word) => `${word.word}: ${word.meaning}`).join(" • ");
  const exampleSentence = currentPhrase.exampleSentence?.trim();
  // Only pairs with authored howToUse text; the word-list fallback is
  // already English.
  const howToUseTranslation = currentPhrase.howToUse?.trim()
    ? currentPhrase.howToUseTranslation?.trim()
    : undefined;
  const exampleTranslation = currentPhrase.exampleTranslation?.trim();
  const subTranslation = currentPhrase.subTranslation?.trim();
  const pronunciation = currentPhrase.pronunciation?.trim();
  const pronunciationTip = currentPhrase.pronunciationTip?.trim();
  const progress = (phraseIndex + 1) / totalPhrases;

  const handleStart = () => {
    // Lessons with an authored pretest go through it first (it continues
    // on to practice); passing it is part of completing the lesson.
    const needsPretest =
      (pretestByLessonId[lesson.lessonId]?.length ?? 0) > 0 &&
      !isPretestPassed(lesson.lessonId);

    router.push({
      pathname: needsPretest ? "/lesson/pretest" : "/lesson/practice",
      params: { lessonId: lesson.lessonId },
    } as any);
  };

  const handleNext = () => {
    stopPronunciation();

    if (isFinalPhrase) {
      handleStart();
      return;
    }

    setPhraseIndex((index) => index + 1);
  };

  const handlePrevious = () => {
    if (phraseIndex === 0) return;
    stopPronunciation();
    setPhraseIndex((index) => index - 1);
  };

  const handlePronunciation = () => {
    const text = currentPhrase.text.trim();
    if (!text) {
      showAudioNotice("Pronunciation is not available for this item.");
      return;
    }

    if (dialect !== "tagalog" && !currentPhrase.audioUrl) {
      showAudioNotice("Audio coming soon");
      return;
    }

    stopPronunciation();
    setAudioNotice(null);
    setPlaying(true);

    try {
      if (currentPhrase.audioUrl) {
        const player = createAudioPlayer(
          typeof currentPhrase.audioUrl === "string"
            ? { uri: currentPhrase.audioUrl }
            : currentPhrase.audioUrl,
        );
        audioPlayerRef.current = player;
        const subscription = player.addListener(
          "playbackStatusUpdate",
          (status) => {
            if (status.didJustFinish) {
              subscription.remove();
              playbackSubscriptionRef.current = null;
              player.remove();
              audioPlayerRef.current = null;
              setPlaying(false);
            }
          },
        );
        playbackSubscriptionRef.current = subscription;
        player.play();
        return;
      }

      Speech.speak(text, {
        language: "fil-PH",
        onDone: () => setPlaying(false),
        onStopped: () => setPlaying(false),
        onError: () => {
          setPlaying(false);
          showAudioNotice("Pronunciation is unavailable right now.");
        },
      });
    } catch (error) {
      console.error("Failed to play lesson pronunciation:", error);
      setPlaying(false);
      showAudioNotice("Pronunciation is unavailable right now.");
    }
  };

  const bottomInset = Math.max(insets.bottom, 12);

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
      <View style={styles.screen}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={goBack}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel="Go back"
          >
            <Ionicons name="arrow-back" size={21} color={colors.textOnPrimary} />
          </TouchableOpacity>

          <View style={styles.headerTitleGroup}>
            <Text style={styles.headerTitle} numberOfLines={1}>
              {dialectLabel} · {lessonLabel}
            </Text>
            <Text style={styles.headerSubtitle}>
              Reading · {phraseIndex + 1} of {totalPhrases}
            </Text>
          </View>

          {avatarUrl ? (
            <Image
              source={resolveAvatarSource(avatarUrl)}
              style={styles.avatar}
            />
          ) : null}
        </View>

        <View style={styles.progressTrack}>
          <View
            style={[styles.progressFill, { width: `${progress * 100}%` }]}
          />
        </View>

        <ScrollView
          ref={scrollRef}
          style={styles.scroll}
          contentContainerStyle={[
            styles.scrollContent,
            { paddingBottom: BOTTOM_BAR_HEIGHT + bottomInset + 24 },
          ]}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.wordCard}>
            <Text style={styles.wordLabel}>
              WORD {phraseIndex + 1} OF {totalPhrases}
            </Text>
            <Text style={styles.wordText}>{currentPhrase.text}</Text>
            {subTranslation ? (
              <Text style={styles.subTranslation}>{subTranslation}</Text>
            ) : null}

            <TouchableOpacity
              style={styles.pronunciationButton}
              onPress={handlePronunciation}
              hitSlop={8}
              accessibilityRole="button"
              accessibilityLabel={`Play pronunciation for ${currentPhrase.text}`}
            >
              <Ionicons
                name={playing ? "volume-high" : "volume-high-outline"}
                size={22}
                color={PURPLE}
              />
              <Text style={styles.pronunciationText}>
                {pronunciation || "Listen to pronunciation"}
              </Text>
            </TouchableOpacity>

            {audioNotice ? (
              <Text style={styles.audioNotice}>{audioNotice}</Text>
            ) : null}

            {translation ? (
              <>
                <View style={styles.divider} />
                <Text style={styles.translation}>{translation}</Text>
              </>
            ) : null}
          </View>

          {usageNote ? (
            <View style={styles.usageCard}>
              <Text style={styles.cardTitle}>💡 How to use it</Text>
              <Text style={styles.cardBody}>
                {currentPhrase.howToUse?.trim() ? (
                  <Text style={styles.cardBodyLabel}>{dialectLabel}: </Text>
                ) : null}
                {usageNote}
              </Text>
              {howToUseTranslation ? (
                <Text style={styles.exampleTranslation}>
                  <Text style={styles.translationLabel}>English: </Text>
                  {howToUseTranslation}
                </Text>
              ) : null}
            </View>
          ) : null}

          {exampleSentence ? (
            <View style={styles.exampleCard}>
              <Text style={styles.exampleLabel}>📝 Example sentence</Text>
              <Text style={styles.exampleText}>{exampleSentence}</Text>
              {exampleTranslation ? (
                <Text style={styles.exampleTranslation}>
                  {exampleTranslation}
                </Text>
              ) : null}
            </View>
          ) : null}

          {pronunciationTip ? (
            <View style={styles.tipCard}>
              <Text style={styles.tipTitle}>💬 Pronunciation tip</Text>
              <Text style={styles.tipBody}>{pronunciationTip}</Text>
            </View>
          ) : null}
        </ScrollView>

        <View style={[styles.bottomBar, { paddingBottom: bottomInset }]}>
          <Pressable
            style={[
              styles.previousButton,
              phraseIndex === 0 && styles.disabledButton,
            ]}
            onPress={handlePrevious}
            disabled={phraseIndex === 0}
            accessibilityRole="button"
            accessibilityLabel="Previous phrase"
          >
            <Text style={styles.previousText}>← Previous</Text>
          </Pressable>
          <Pressable
            style={styles.nextButton}
            onPress={handleNext}
            accessibilityRole="button"
            accessibilityLabel={isFinalPhrase ? "Start lesson" : "Next phrase"}
          >
            <Text style={styles.nextText}>
              {isFinalPhrase ? "Start Lesson" : "Next →"}
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Top safe-area edge shows the header colour; the bottom bar handles the
  // bottom inset itself so it stays white down to the system nav.
  safeArea: { flex: 1, backgroundColor: PURPLE },
  emptySafeArea: { flex: 1, backgroundColor: PAGE_BACKGROUND },
  screen: { flex: 1, backgroundColor: PAGE_BACKGROUND },
  header: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 64,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: PURPLE,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.overlayWhite,
  },
  headerTitleGroup: { flex: 1, marginHorizontal: 12 },
  headerTitle: {
    color: colors.textOnPrimary,
    fontSize: 18,
    fontWeight: "800",
  },
  headerSubtitle: {
    marginTop: 3,
    color: colors.textOnPrimaryMuted,
    fontSize: 13,
    fontWeight: "600",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.65)",
  },
  progressTrack: {
    height: 6,
    backgroundColor: colors.primaryBorder,
  },
  progressFill: {
    height: "100%",
    backgroundColor: DARK_PURPLE,
  },
  scroll: { flex: 1 },
  scrollContent: { padding: 16, gap: 14 },
  wordCard: {
    alignItems: "center",
    paddingHorizontal: 22,
    paddingVertical: 28,
    borderRadius: 22,
    borderWidth: 1.5,
    borderColor: PURPLE,
    backgroundColor: CARD_LAVENDER,
  },
  wordLabel: {
    color: PURPLE,
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.2,
  },
  wordText: {
    marginTop: 14,
    color: DARK_PURPLE,
    fontSize: 32,
    fontWeight: "800",
    textAlign: "center",
  },
  subTranslation: {
    marginTop: 4,
    color: colors.textMuted,
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },
  pronunciationButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 12,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  pronunciationText: {
    color: colors.textMuted,
    fontSize: 15,
    fontWeight: "600",
  },
  audioNotice: {
    marginTop: 4,
    color: colors.textMuted,
    fontSize: 12,
    textAlign: "center",
  },
  divider: {
    width: "100%",
    height: 1,
    marginVertical: 20,
    backgroundColor: colors.primaryBorder,
  },
  translation: {
    color: colors.textBody,
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
  },
  usageCard: {
    padding: 18,
    borderRadius: 16,
    backgroundColor: colors.gray100,
  },
  cardTitle: { color: colors.textHeading, fontSize: 16, fontWeight: "800" },
  cardBody: {
    marginTop: 8,
    color: colors.textMutedSoft,
    fontSize: 15,
    lineHeight: 22,
  },
  cardBodyLabel: { color: colors.textHeading, fontWeight: "800" },
  translationLabel: {
    color: colors.textHeading,
    fontWeight: "800",
    fontStyle: "normal",
  },
  exampleCard: {
    padding: 18,
    borderRadius: 16,
    borderLeftWidth: 4,
    borderLeftColor: PURPLE,
    backgroundColor: colors.surface,
  },
  exampleLabel: { color: colors.textMuted, fontSize: 13, fontWeight: "700" },
  exampleText: {
    marginTop: 8,
    color: DARK_PURPLE,
    fontSize: 17,
    fontWeight: "700",
    lineHeight: 24,
  },
  exampleTranslation: {
    marginTop: 4,
    color: colors.textMuted,
    fontSize: 14,
    fontStyle: "italic",
    lineHeight: 20,
  },
  tipCard: {
    padding: 18,
    borderRadius: 16,
    backgroundColor: "#FFF7DB",
  },
  tipTitle: { color: "#8A5A1E", fontSize: 16, fontWeight: "800" },
  tipBody: {
    marginTop: 8,
    color: "#6B5532",
    fontSize: 15,
    lineHeight: 22,
  },
  bottomBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 16,
    paddingTop: 12,
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.borderMuted,
  },
  previousButton: {
    minWidth: 124,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 13,
    borderWidth: 1.5,
    borderColor: PURPLE,
    alignItems: "center",
  },
  disabledButton: { opacity: 0.4 },
  previousText: { color: PURPLE, fontSize: 15, fontWeight: "800" },
  nextButton: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 13,
    backgroundColor: PURPLE,
    alignItems: "center",
  },
  nextText: { color: colors.textOnPrimary, fontSize: 16, fontWeight: "800" },
  notFound: { padding: 20, color: colors.textBody, fontSize: 18 },
  emptyBackButton: { margin: 20, alignSelf: "flex-start" },
});
