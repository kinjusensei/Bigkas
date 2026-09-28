import { createAudioPlayer } from "expo-audio";
import * as Speech from "expo-speech";
import { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { DialectTermAnnotation, StoryDialect } from "../../../data/storyData";

// Migrated from expo-av (deprecated, removed in a coming SDK) to
// expo-audio. createAudioPlayer is the imperative API, which is what
// this needs — playback is kicked off from a press handler, not tied
// to component render, so the useAudioPlayer hook doesn't fit.
//
// Note this path only runs for terms that have an `audioUrl`. None do
// yet, so in practice every playable term currently goes through
// device TTS below.

// Device TTS language support: Filipino/Tagalog is supported by
// Android's speech engine; Kapampangan and Waray are not on any major
// TTS provider's list. Null means "no TTS — recorded audio only".
const TTS_LOCALE_BY_DIALECT: Record<StoryDialect, string | null> = {
  tagalog: "fil-PH",
  kapampangan: null,
  waray: null,
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
};

export default function TermExplanationModal({
  term,
  dialect,
  onClose,
}: Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!term) return null;

  const availability = getPlaybackAvailability(term, dialect);

  const handleSpeakerPress = async () => {
    if (isPlaying || availability === "unavailable") return;
    setIsPlaying(true);

    try {
      if (availability === "recording" && term.audioUrl) {
        const player = createAudioPlayer({ uri: term.audioUrl });

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

  return (
    <Modal
      visible={!!term}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.backdrop} onPress={onClose}>
        {/* Stop taps inside the card from closing the modal */}
        <Pressable style={styles.card} onPress={() => {}}>
          <Text style={styles.englishWord}>{term.match}</Text>

          <View style={styles.arrowRow}>
            <Text style={styles.arrow}>↓</Text>
          </View>

          <View style={styles.dialectRow}>
            <Text style={styles.dialectWord}>{term.dialect}</Text>

            <TouchableOpacity
              style={[
                styles.speakerButton,
                availability === "unavailable" && styles.speakerButtonDisabled,
              ]}
              onPress={handleSpeakerPress}
              disabled={availability === "unavailable" || isPlaying}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Text style={styles.speakerIcon}>{isPlaying ? "🔊" : "🔈"}</Text>
            </TouchableOpacity>
          </View>

          {availability === "unavailable" && (
            <Text style={styles.unavailableNote}>
              Pronunciation audio coming soon for this dialect.
            </Text>
          )}

          <Text style={styles.explanation}>{term.explanation}</Text>

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },

  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
  },

  englishWord: {
    fontSize: 18,
    fontWeight: "700",
    color: "#444",
  },

  arrowRow: {
    marginVertical: 4,
  },

  arrow: {
    fontSize: 18,
    color: "#9CA3AF",
  },

  dialectRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 14,
  },

  dialectWord: {
    fontSize: 28,
    fontWeight: "800",
    color: "#5E3BEE",
  },

  speakerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F3F2FA",
    justifyContent: "center",
    alignItems: "center",
  },

  speakerButtonDisabled: {
    opacity: 0.4,
  },

  speakerIcon: {
    fontSize: 18,
  },

  unavailableNote: {
    fontSize: 12,
    color: "#9CA3AF",
    fontStyle: "italic",
    marginBottom: 10,
    textAlign: "center",
  },

  explanation: {
    fontSize: 14,
    lineHeight: 20,
    color: "#666",
    textAlign: "center",
    marginBottom: 18,
  },

  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 12,
    backgroundColor: "#5E3BEE",
  },

  closeButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
  },
});
