import { Ionicons } from "@expo/vector-icons";
import { createAudioPlayer } from "expo-audio";
import * as Speech from "expo-speech";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  BackHandler,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { DialectTermAnnotation, StoryDialect } from "../../../data/storyData";

// Migrated from expo-av (deprecated, removed in a coming SDK) to
// expo-audio. createAudioPlayer is the imperative API, which is what
// this needs — playback is kicked off from a press handler, not tied
// to component render, so the useAudioPlayer hook doesn't fit.
//
// Terms without an `audioUrl` show the unavailable-audio notice below.
//
// Shown as a card pinned to the bottom of the reader (not a full-screen
// modal), so the chapter stays readable behind it.

// Device TTS language support: Filipino/Tagalog is supported by
// Android's speech engine; Kapampangan and Waray are not on any major
// TTS provider's list. Null means "no TTS — recorded audio only".
const TTS_LOCALE_BY_DIALECT: Record<StoryDialect, string | null> = {
  tagalog: "fil-PH",
  kapampangan: null,
  waray: null,
};

const DIALECT_LABELS: Record<StoryDialect, string> = {
  tagalog: "Tagalog",
  kapampangan: "Kapampangan",
  waray: "Waray",
};

type PlaybackAvailability = "recording" | "tts" | "unavailable";

function getPlaybackAvailability(
  term: DialectTermAnnotation,
  dialect: StoryDialect,
): PlaybackAvailability {
  if (term.audioUrl) return "recording";
  if (TTS_LOCALE_BY_DIALECT[dialect]) return "tts";
  return "unavailable";
}

type Props = {
  term: DialectTermAnnotation | null;
  dialect: StoryDialect;
  onClose: () => void;
  // "WORD n OF m" — position of this term among the chapter's
  // highlighted terms. The label is hidden when either is missing.
  wordNumber?: number;
  wordCount?: number;
  // Lets the reader pad its scroll content by the card's height.
  onHeightChange?: (height: number) => void;
};

export default function TermExplanationModal({
  term,
  dialect,
  onClose,
  wordNumber,
  wordCount,
  onHeightChange,
}: Props) {
  const insets = useSafeAreaInsets();
  const [isPlaying, setIsPlaying] = useState(false);
  const appear = useRef(new Animated.Value(0)).current;
  const isOpen = !!term;

  // Quick fade + slide up when the card opens.
  useEffect(() => {
    if (!isOpen) return;

    appear.setValue(0);
    Animated.timing(appear, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  }, [isOpen, appear]);

  // Android back closes the card, as the old Modal's onRequestClose did.
  useEffect(() => {
    if (!isOpen) return;

    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        onClose();
        return true;
      },
    );
    return () => subscription.remove();
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) onHeightChange?.(0);
  }, [isOpen, onHeightChange]);

  if (!term) return null;

  const availability = getPlaybackAvailability(term, dialect);

  const handleSpeakerPress = async () => {
    if (isPlaying || availability === "unavailable") return;
    setIsPlaying(true);

    try {
      if (availability === "recording" && term.audioUrl) {
        const player = createAudioPlayer(term.audioUrl);

        // expo-audio players created this way are NOT auto-released,
        // so remove() has to be called explicitly or the native player
        // leaks. Doing it on finish keeps one-shot playback clean.
        const subscription = player.addListener(
          "playbackStatusUpdate",
          (status) => {
            if (status.didJustFinish) {
              subscription.remove();
              player.remove();
              setIsPlaying(false);
            }
          },
        );

        player.play();
        return;
      }

      const locale = TTS_LOCALE_BY_DIALECT[dialect];
      if (locale) {
        Speech.speak(term.dialect, {
          language: locale,
          onDone: () => setIsPlaying(false),
          onStopped: () => setIsPlaying(false),
          onError: () => setIsPlaying(false),
        });
        return;
      }
    } catch (error) {
      console.error("Failed to play term pronunciation:", error);
      setIsPlaying(false);
    }
  };

  const handleLayout = (event: LayoutChangeEvent) => {
    onHeightChange?.(event.nativeEvent.layout.height);
  };

  const exampleDialect = term.example?.trim();
  const exampleEnglish = term.exampleEnglish?.trim();
  const hasExample = !!exampleDialect || !!exampleEnglish;

  return (
    <Animated.View
      onLayout={handleLayout}
      style={[
        styles.card,
        {
          bottom: insets.bottom + 16,
          opacity: appear,
          transform: [
            {
              translateY: appear.interpolate({
                inputRange: [0, 1],
                outputRange: [16, 0],
              }),
            },
          ],
        },
      ]}
    >
      {/* Row 1: position + close */}
      <View style={styles.topRow}>
        <Text style={styles.wordCount}>
          {wordNumber && wordCount ? `Word ${wordNumber} of ${wordCount}` : ""}
        </Text>

        <TouchableOpacity
          style={styles.closeButton}
          onPress={onClose}
          accessibilityRole="button"
          accessibilityLabel="Close"
        >
          <Ionicons name="close" size={22} color="#5E5A75" />
        </TouchableOpacity>
      </View>

      {/* Row 2: dialect word + speaker */}
      <View style={styles.wordRow}>
        <Text style={styles.word}>{term.dialect}</Text>

        <TouchableOpacity
          style={[
            styles.speakerButton,
            availability === "unavailable" && styles.speakerButtonDisabled,
          ]}
          onPress={handleSpeakerPress}
          disabled={availability === "unavailable" || isPlaying}
          accessibilityRole="button"
          accessibilityLabel="Listen to pronunciation"
          accessibilityState={{
            disabled: availability === "unavailable" || isPlaying,
          }}
        >
          <Ionicons
            name={isPlaying ? "volume-high" : "volume-high-outline"}
            size={22}
            color="#4A3FA0"
          />
        </TouchableOpacity>
      </View>

      {availability === "unavailable" && (
        <Text style={styles.unavailableNote}>
          Pronunciation audio not available yet.
        </Text>
      )}

      {/* Row 3: English meaning */}
      <Text style={styles.meaning}>{term.match}</Text>
      {term.explanation ? (
        <Text style={styles.explanation}>{term.explanation}</Text>
      ) : null}

      {hasExample && (
        <>
          <View style={styles.divider} />

          <Text style={styles.howToTitle}>How to use it</Text>

          {exampleDialect ? (
            <Text style={styles.exampleDialect}>
              {DIALECT_LABELS[dialect]}: {exampleDialect}
            </Text>
          ) : null}

          {exampleEnglish ? (
            <Text style={styles.exampleEnglish}>
              <Text style={styles.exampleEnglishLabel}>English: </Text>
              {exampleEnglish}
            </Text>
          ) : null}
        </>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    left: 16,
    right: 16,
    padding: 16,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "#5B50B0",
    backgroundColor: "#F3F1FC",
    shadowColor: "#2E2670",
    shadowOpacity: 0.2,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: -8,
    marginRight: -8,
  },

  wordCount: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#4A3FA0",
  },

  closeButton: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },

  wordRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  word: {
    flexShrink: 1,
    fontSize: 24,
    fontWeight: "800",
    color: "#3D3290",
  },

  speakerButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

  speakerButtonDisabled: {
    opacity: 0.4,
  },

  unavailableNote: {
    marginTop: 4,
    fontSize: 13,
    fontStyle: "italic",
    color: "#5E5A75",
  },

  meaning: {
    marginTop: 8,
    fontSize: 17,
    fontWeight: "700",
    color: "#1C1A2E",
  },

  explanation: {
    marginTop: 4,
    fontSize: 14,
    lineHeight: 20,
    color: "#5E5A75",
  },

  divider: {
    height: 1,
    marginVertical: 12,
    backgroundColor: "#DCD8EE",
  },

  howToTitle: {
    marginBottom: 6,
    fontSize: 12,
    fontWeight: "700",
    color: "#1C1A2E",
  },

  exampleDialect: {
    fontSize: 15,
    lineHeight: 21,
    color: "#3A3750",
  },

  exampleEnglish: {
    marginTop: 4,
    fontSize: 15,
    lineHeight: 21,
    fontStyle: "italic",
    color: "#5E5A75",
  },

  exampleEnglishLabel: {
    fontStyle: "normal",
  },
});
