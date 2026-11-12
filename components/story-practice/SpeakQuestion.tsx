import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useLessonAudio } from "../lesson/useLessonAudio";
import FeedbackStrip from "./FeedbackStrip";
import PracticeBottomBar from "./PracticeBottomBar";
import { FLOW, FLOW_MIN_TAP } from "./practiceTheme";
import QuestionCard from "./QuestionCard";

type Props = {
  label: string;
  instruction: string;
  word: string;
  dialect: string;
  listening: boolean;
  // Waiting for the speech server's second opinion on a miss.
  checking?: boolean;
  heard: string | null;
  matched: boolean;
  micUnavailable: boolean;
  // Whether skipping with no mic still gives the point (the question's rule).
  skipStillCounts: boolean;
  onStart: () => void;
  onStop: () => void;
  onContinue: () => void;
  // A working mic: no point. No mic: the word still counts (the screen
  // decides, in handleSkip).
  onSkip: () => void;
};

// Speak It. Listening runs in the practice screen's existing speech code;
// this only shows its state.
export default function SpeakQuestion({
  label,
  instruction,
  word,
  dialect,
  listening,
  checking = false,
  heard,
  matched,
  micUnavailable,
  skipStillCounts,
  onStart,
  onStop,
  onContinue,
  onSkip,
}: Props) {
  // Only Tagalog has a device voice; other languages have no word audio.
  const canHear = dialect === "tagalog";
  const { playingKey, play, stop } = useLessonAudio("tagalog");

  // Skip appears once they've tried and nothing was heard.
  const [attempted, setAttempted] = useState(false);

  const pulse = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    if (!listening) {
      pulse.setValue(1);
      return;
    }
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1.04,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(pulse, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
      ]),
    );
    loop.start();
    return () => loop.stop();
  }, [listening, pulse]);

  const hasResult = heard !== null || matched;
  const showHearIt = canHear && !listening;
  const startListening = () => {
    stop();
    setAttempted(true);
    onStart();
  };

  return (
    <>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <QuestionCard label={label} instruction={instruction} word={word} />

        {showHearIt ? (
          <Pressable
            onPress={() => play("word", { text: word })}
            style={styles.hearIt}
            accessibilityRole="button"
            accessibilityLabel={`Hear ${word}`}
            accessibilityState={{ busy: playingKey === "word" }}
          >
            <Ionicons name="volume-medium-outline" size={22} color={FLOW.deepPurple} />
            <Text style={styles.hearItText}>Hear it</Text>
          </Pressable>
        ) : null}

        {micUnavailable ? (
          <View style={styles.notice} accessibilityLiveRegion="polite">
            <Ionicons name="mic-off-outline" size={24} color={FLOW.purple} />
            <Text style={styles.noticeText}>
              {skipStillCounts
                ? "The microphone isn't available. You can skip this word and it still counts."
                : "The microphone isn't available. You can skip this word."}
            </Text>
          </View>
        ) : (
          <View style={[styles.micArea, showHearIt && styles.micAreaUnderHear]}>
            <View style={listening ? styles.micStageListening : styles.micStage}>
              {listening ? (
                <>
                  <Animated.View
                    pointerEvents="none"
                    style={[
                      styles.ringOuter,
                      { transform: [{ scale: pulse }] },
                    ]}
                  />
                  <Animated.View
                    pointerEvents="none"
                    style={[
                      styles.ringInner,
                      { transform: [{ scale: pulse }] },
                    ]}
                  />
                </>
              ) : null}
              <Pressable
                onPress={listening ? onStop : startListening}
                disabled={matched || checking}
                style={[styles.mic, matched && styles.micDone]}
                accessibilityRole="button"
                accessibilityLabel={
                  listening
                    ? "Listening. Tap to stop."
                    : hasResult
                      ? "Speak again"
                      : "Tap to speak"
                }
                accessibilityState={{ disabled: matched || checking }}
              >
                <Ionicons
                  name={matched ? "checkmark" : "mic-outline"}
                  size={38}
                  color={FLOW.white}
                />
              </Pressable>
            </View>

            {listening || checking || !hasResult ? (
              <Text style={styles.status} accessibilityLiveRegion="polite">
                {listening
                  ? "Listening..."
                  : checking
                    ? "Checking your pronunciation..."
                    : "Tap to speak"}
              </Text>
            ) : null}

            {heard !== null && !checking ? (
              <Text style={styles.heard} accessibilityLiveRegion="polite">
                We heard: <Text style={styles.heardText}>{heard}</Text>
              </Text>
            ) : null}

            {heard !== null && !matched && !listening && !checking ? (
              <Pressable
                onPress={startListening}
                style={styles.link}
                accessibilityRole="button"
                accessibilityLabel="Try again"
              >
                <Text style={styles.linkText}>Try again</Text>
              </Pressable>
            ) : null}
          </View>
        )}

        {matched ? <FeedbackStrip correct>Correct!</FeedbackStrip> : null}
      </ScrollView>

      {micUnavailable ? (
        <PracticeBottomBar label="Skip" onPress={onSkip} />
      ) : (
        <PracticeBottomBar
          label="Continue"
          disabled={!hasResult || listening || checking}
          success={matched}
          onPress={onContinue}
          textLabel={attempted && !hasResult && !checking ? "Skip" : undefined}
          onTextPress={onSkip}
          textAccessibilityLabel="Skip this word"
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1 },

  content: { padding: 20, paddingTop: 16 },

  hearIt: {
    alignSelf: "center",
    minHeight: 44,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
    paddingHorizontal: 20,
    borderRadius: 22,
    backgroundColor: FLOW.tint,
  },

  hearItText: { fontSize: 15, fontWeight: "800", color: FLOW.deepPurple },

  micArea: { alignItems: "center", marginTop: 20 },

  micAreaUnderHear: { marginTop: 12 },

  micStage: { alignItems: "center", justifyContent: "center" },

  micStageListening: {
    width: 120,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
  },

  ringOuter: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "rgba(91,80,176,0.12)",
  },

  ringInner: {
    position: "absolute",
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: "rgba(91,80,176,0.3)",
  },

  mic: {
    width: 84,
    height: 84,
    borderRadius: 42,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: FLOW.purple,
    shadowColor: FLOW.purple,
    shadowOpacity: 0.35,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
  },

  micDone: { backgroundColor: FLOW.success, shadowColor: FLOW.success },

  status: {
    marginTop: 14,
    fontSize: 16,
    fontWeight: "700",
    color: FLOW.deepPurple,
    textAlign: "center",
  },

  heard: {
    marginTop: 12,
    fontSize: 15,
    color: FLOW.mutedLight,
    textAlign: "center",
  },

  heardText: { fontWeight: "800", color: FLOW.ink },

  link: {
    minHeight: FLOW_MIN_TAP,
    minWidth: 88,
    alignItems: "center",
    justifyContent: "center",
  },

  linkText: {
    fontSize: 14,
    fontWeight: "700",
    color: FLOW.purple,
  },

  notice: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 18,
    padding: 16,
    borderRadius: 16,
    backgroundColor: FLOW.white,
    borderWidth: 1,
    borderColor: FLOW.border,
  },

  noticeText: { flex: 1, fontSize: 14, lineHeight: 20, color: FLOW.muted },
});
