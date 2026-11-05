import { Ionicons } from "@expo/vector-icons";
import { FaceDetectionProvider } from "@infinitered/react-native-mlkit-face-detection";
import { useState } from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import { useCameraPermission } from "react-native-vision-camera";

import PracticeCamera from "../../../app/components/Practice/PracticeCamera";
import {
  ExpectedPracticeExpression,
  ExpectedTone,
  PracticeExpression,
} from "../../../types/practice";
import { LessonSpeakingPhrase } from "../../../types/structuredLesson";
import { LESSON_COLORS, lessonStyles, MIN_TOUCH } from "../lessonStyles";
import { LessonAudio } from "../useLessonAudio";
import PitchGraph from "./PitchGraph";
import { comparePitch, guideContour, TONE_BANDS } from "./pitch";
import { useSpeakingSession } from "./useSpeakingSession";
import { matchWords, normalizeWord, syllabify } from "./wordMatch";

export type SpeakingPhase = "setup" | "recording" | "feedback";

type Props = {
  phase: SpeakingPhase;
  phrase: LessonSpeakingPhrase;
  index: number;
  total: number;
  targetTone?: ExpectedTone;
  targetExpression?: ExpectedPracticeExpression;
  respellings: Record<string, string>;
  session: ReturnType<typeof useSpeakingSession>;
  audio: LessonAudio;
  micEnabled: boolean;
  onMicEnabledChange: (value: boolean) => void;
  cameraHints: boolean;
  onCameraHintsChange: (value: boolean) => void;
  expression: PracticeExpression | null;
  onExpression: (expression: PracticeExpression) => void;
  // Changes per take so the camera starts a fresh expression reading.
  takeKey: number;
};

const TONE_LABELS: Record<ExpectedTone, string> = {
  low: "Low pitch",
  medium: "Medium pitch",
  high: "High pitch",
};

// Speaking practice: setup → recording → feedback for one phrase. The
// flow owns the session and the bottom bar. Expression is a practice
// insight only; voice and pitch are feedback, never a score.
export default function SpeakingSection(props: Props) {
  if (props.phase === "recording") return <RecordingView {...props} />;
  if (props.phase === "feedback") return <FeedbackView {...props} />;
  return <SetupView {...props} />;
}

function PhraseHeader({
  phrase,
  index,
  total,
}: Pick<Props, "phrase" | "index" | "total">) {
  return (
    <Text style={lessonStyles.label}>
      PHRASE {index + 1} OF {total}
    </Text>
  );
}

function SetupView({
  phrase,
  index,
  total,
  targetTone,
  targetExpression,
  session,
  audio,
  micEnabled,
  onMicEnabledChange,
  cameraHints,
  onCameraHintsChange,
}: Props) {
  const { hasPermission, requestPermission } = useCameraPermission();
  const [cameraNotice, setCameraNotice] = useState<string | null>(null);
  const cameraOn = cameraHints && hasPermission;
  const modelKey = `speak-model-${phrase.id}`;

  // Camera permission is asked only when the learner turns this on.
  const handleCameraToggle = async (value: boolean) => {
    setCameraNotice(null);
    if (!value) {
      onCameraHintsChange(false);
      return;
    }
    let granted = hasPermission;
    if (!granted) {
      try {
        granted = await requestPermission();
      } catch (error) {
        console.warn("Camera permission request failed:", error);
      }
    }
    if (granted) {
      onCameraHintsChange(true);
    } else {
      onCameraHintsChange(false);
      setCameraNotice(
        "Camera not allowed — that's fine, you can practise without it.",
      );
    }
  };

  return (
    <>
      <PhraseHeader phrase={phrase} index={index} total={total} />

      <View style={styles.phraseCard}>
        <Text style={styles.phraseText}>{phrase.text}</Text>
        {phrase.respelling ? (
          <Text style={styles.respelling}>{phrase.respelling}</Text>
        ) : null}
        {phrase.meaning ? (
          <Text style={styles.meaning}>{phrase.meaning}</Text>
        ) : null}
        {targetTone || targetExpression ? (
          <View style={styles.chipRow}>
            {targetTone ? (
              <View style={styles.chip}>
                <Ionicons name="pulse-outline" size={14} color={LESSON_COLORS.purple} />
                <Text style={styles.chipText}>{TONE_LABELS[targetTone]}</Text>
              </View>
            ) : null}
            {targetExpression ? (
              <View style={styles.chip}>
                <Ionicons name="happy-outline" size={14} color={LESSON_COLORS.purple} />
                <Text style={styles.chipText}>Mood: {targetExpression}</Text>
              </View>
            ) : null}
          </View>
        ) : null}
      </View>

      <View style={lessonStyles.card}>
        <TouchableOpacity
          style={styles.listenButton}
          onPress={() =>
            audio.play(modelKey, { text: phrase.text, audioUrl: phrase.audioUrl })
          }
          accessibilityRole="button"
          accessibilityLabel="Listen to the model"
        >
          <Ionicons
            name={audio.playingKey === modelKey ? "stop" : "volume-high"}
            size={20}
            color="#FFFFFF"
          />
          <Text style={styles.listenText}>Listen to the model</Text>
        </TouchableOpacity>
        {audio.notice ? (
          <Text style={[lessonStyles.notice, styles.gapTop]}>{audio.notice}</Text>
        ) : null}
        <View style={styles.gapTop}>
          <PitchGraph
            guide={guideContour(phrase.text, targetTone)}
            band={targetTone ? TONE_BANDS[targetTone] : undefined}
            height={70}
          />
        </View>
      </View>

      <View style={lessonStyles.card}>
        <SwitchRow
          icon="mic-outline"
          title="Microphone"
          body="Needed to hear your words and pitch."
          value={micEnabled}
          onChange={onMicEnabledChange}
        />
        <View style={styles.divider} />
        <SwitchRow
          icon="camera-outline"
          title="Camera hints"
          body="Optional. Shows your expression as a practice insight. Never scored."
          value={cameraOn}
          onChange={handleCameraToggle}
        />
        {cameraNotice ? (
          <Text style={[lessonStyles.notice, styles.gapTop]}>{cameraNotice}</Text>
        ) : null}
      </View>

      <View style={styles.privacy}>
        <Ionicons name="lock-closed-outline" size={16} color={LESSON_COLORS.textSecondary} />
        <Text style={styles.privacyText}>
          Camera images stay on this phone and are never saved. Your
          recording is kept only so you can hear yourself, and is deleted
          when you leave this activity. Speech recognition uses your phone&apos;s
          speech service. Feedback here never changes your score.
        </Text>
      </View>

      {session.notice ? (
        <Text style={styles.notice}>{session.notice}</Text>
      ) : null}
    </>
  );
}

function SwitchRow({
  icon,
  title,
  body,
  value,
  onChange,
}: {
  icon: "mic-outline" | "camera-outline";
  title: string;
  body: string;
  value: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <View style={styles.switchRow}>
      <Ionicons name={icon} size={20} color={LESSON_COLORS.textSecondary} />
      <View style={styles.switchText}>
        <Text style={styles.switchTitle}>{title}</Text>
        <Text style={styles.switchBody}>{body}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={onChange}
        trackColor={{ true: LESSON_COLORS.purple, false: "#D1D5DB" }}
        thumbColor="#FFFFFF"
        accessibilityLabel={title}
      />
    </View>
  );
}

function ExpressionChip({
  expression,
}: {
  expression: PracticeExpression | null;
}) {
  return (
    <View style={styles.expressionChip}>
      <Ionicons name="happy-outline" size={14} color={LESSON_COLORS.textSecondary} />
      <Text style={styles.expressionChipText}>
        {expression && expression !== "unknown"
          ? `Expression: ${expression}`
          : "Reading expression…"}
      </Text>
      <View style={styles.notScored}>
        <Text style={styles.notScoredText}>Not scored</Text>
      </View>
    </View>
  );
}

function RecordingView({
  phrase,
  index,
  total,
  targetTone,
  session,
  cameraHints,
  expression,
  onExpression,
  takeKey,
}: Props) {
  const { hasPermission } = useCameraPermission();
  const cameraOn = cameraHints && hasPermission;
  const words = matchWords(phrase.text, session.transcript);

  return (
    <>
      <PhraseHeader phrase={phrase} index={index} total={total} />

      {cameraOn ? (
        <View>
          <FaceDetectionProvider
            options={{ performanceMode: "fast", classificationMode: true }}
          >
            <PracticeCamera
              phraseId={takeKey}
              onExpressionConfirmed={(result) => onExpression(result.expression)}
            />
          </FaceDetectionProvider>
          <View style={styles.faceGuide} pointerEvents="none" />
          <View style={styles.onDeviceLabel} pointerEvents="none">
            <Ionicons name="phone-portrait-outline" size={12} color="#FFFFFF" />
            <Text style={styles.onDeviceText}>Stays on this phone</Text>
          </View>
          <View style={styles.gapTop}>
            <ExpressionChip expression={expression} />
          </View>
        </View>
      ) : null}

      <View style={[styles.phraseCard, !cameraOn && styles.phraseCardLarge]}>
        <Text style={styles.statusLabel}>
          {session.status === "starting"
            ? "Starting microphone…"
            : session.status === "processing"
              ? "Checking your recording…"
              : "Listening — say the phrase"}
        </Text>
        <View style={styles.wordRow}>
          {words.map((word, wordIndex) => (
            <Text
              key={`${word.word}-${wordIndex}`}
              style={[
                styles.liveWord,
                !cameraOn && styles.liveWordLarge,
                word.status !== "missed" && styles.liveWordHeard,
              ]}
            >
              {word.word}
            </Text>
          ))}
        </View>
        {session.transcript ? (
          <Text style={styles.heard}>Heard: “{session.transcript}”</Text>
        ) : null}
      </View>

      <View style={lessonStyles.card}>
        <Text style={styles.cardLabel}>Voice level</Text>
        <View style={styles.levelTrack}>
          <View
            style={[styles.levelFill, { width: `${Math.round(session.volume * 100)}%` }]}
          />
        </View>
      </View>

      <View style={lessonStyles.card}>
        <Text style={styles.cardLabel}>Pitch</Text>
        <PitchGraph
          guide={guideContour(phrase.text, targetTone)}
          band={targetTone ? TONE_BANDS[targetTone] : undefined}
          height={cameraOn ? 90 : 130}
          placeholder="Your pitch line appears when you stop."
        />
      </View>
    </>
  );
}

function FeedbackView({
  phrase,
  index,
  total,
  targetTone,
  respellings,
  session,
  audio,
  expression,
}: Props) {
  const words = matchWords(phrase.text, session.transcript);
  const heardAnything = !!session.transcript.trim();
  const comparison = session.pitch
    ? comparePitch(session.pitch, phrase.text, targetTone)
    : null;
  const modelKey = `speak-model-${phrase.id}`;
  const selfKey = `speak-self-${phrase.id}`;

  return (
    <>
      <PhraseHeader phrase={phrase} index={index} total={total} />

      <View style={lessonStyles.card}>
        <Text style={lessonStyles.cardTitle}>Your words</Text>
        {heardAnything ? (
          <View style={styles.wordList}>
            {words.map((word, wordIndex) => {
              const good = word.status === "matched";
              const syllables =
                respellings[normalizeWord(word.word)] ?? syllabify(word.word);
              return (
                <View key={`${word.word}-${wordIndex}`} style={styles.wordFeedback}>
                  <View style={[styles.wordPill, good ? styles.pillGood : styles.pillWork]}>
                    <Ionicons
                      name={good ? "checkmark" : "refresh"}
                      size={14}
                      color={good ? LESSON_COLORS.green : "#B45309"}
                    />
                    <Text style={[styles.wordPillText, !good && styles.wordPillWorkText]}>
                      {word.word}
                    </Text>
                  </View>
                  <Text style={styles.syllableTip}>
                    {good ? syllables : `Try it slowly: ${syllables}`}
                  </Text>
                </View>
              );
            })}
          </View>
        ) : (
          <Text style={[lessonStyles.body, styles.gapTop]}>
            {session.notice ?? "We didn't catch any words this time."}
          </Text>
        )}
      </View>

      <View style={lessonStyles.card}>
        <Text style={lessonStyles.cardTitle}>Your pitch</Text>
        <View style={styles.gapTop}>
          <PitchGraph
            guide={guideContour(phrase.text, targetTone)}
            learner={session.pitch?.points}
            band={targetTone ? TONE_BANDS[targetTone] : undefined}
            placeholder={
              session.audioUri
                ? "Not enough voice to draw a pitch line."
                : "Pitch needs Android 13 or newer to save the recording."
            }
          />
        </View>
        <Text style={[lessonStyles.body, styles.gapTop]}>
          {comparison?.comment ??
            "No pitch line this time — that's okay. The guide is only there to help."}
        </Text>
      </View>

      {expression && expression !== "unknown" ? (
        <View style={lessonStyles.card}>
          <View style={styles.rowBetween}>
            <Text style={lessonStyles.cardTitle}>Expression</Text>
            <View style={styles.notScored}>
              <Text style={styles.notScoredText}>Not scored</Text>
            </View>
          </View>
          <Text style={[lessonStyles.body, styles.gapTop]}>
            The camera read your expression as {expression}. This is just a
            practice insight — it doesn&apos;t show how well you understand.
          </Text>
        </View>
      ) : null}

      <View style={styles.playRow}>
        <TouchableOpacity
          style={styles.playButton}
          onPress={() =>
            audio.play(modelKey, { text: phrase.text, audioUrl: phrase.audioUrl })
          }
          accessibilityRole="button"
        >
          <Ionicons
            name={audio.playingKey === modelKey ? "stop" : "volume-high-outline"}
            size={18}
            color={LESSON_COLORS.purple}
          />
          <Text style={styles.playText}>Hear the model</Text>
        </TouchableOpacity>
        {session.audioUri ? (
          <TouchableOpacity
            style={styles.playButton}
            onPress={() =>
              audio.play(selfKey, {
                text: phrase.text,
                audioUrl: session.audioUri ?? undefined,
              })
            }
            accessibilityRole="button"
          >
            <Ionicons
              name={audio.playingKey === selfKey ? "stop" : "person-outline"}
              size={18}
              color={LESSON_COLORS.purple}
            />
            <Text style={styles.playText}>Hear yourself</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      {audio.notice ? (
        <Text style={lessonStyles.notice}>{audio.notice}</Text>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  gapTop: { marginTop: 10 },
  phraseCard: {
    alignItems: "center",
    padding: 20,
    borderRadius: 22,
    borderWidth: 1.5,
    borderColor: LESSON_COLORS.purple,
    backgroundColor: LESSON_COLORS.lavender,
  },
  phraseCardLarge: { paddingVertical: 32 },
  phraseText: {
    color: LESSON_COLORS.darkPurple,
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
  },
  respelling: {
    marginTop: 6,
    color: LESSON_COLORS.textSecondary,
    fontSize: 15,
    fontWeight: "600",
  },
  meaning: {
    marginTop: 8,
    color: LESSON_COLORS.text,
    fontSize: 17,
    fontWeight: "800",
    textAlign: "center",
  },
  chipRow: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 12 },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    backgroundColor: LESSON_COLORS.surface,
  },
  chipText: {
    color: LESSON_COLORS.purple,
    fontSize: 12,
    fontWeight: "800",
    textTransform: "capitalize",
  },
  listenButton: {
    minHeight: MIN_TOUCH,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 12,
    backgroundColor: LESSON_COLORS.purple,
  },
  listenText: { color: "#FFFFFF", fontSize: 15, fontWeight: "800" },
  divider: {
    height: 1,
    marginVertical: 12,
    backgroundColor: LESSON_COLORS.border,
  },
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    minHeight: MIN_TOUCH,
  },
  switchText: { flex: 1 },
  switchTitle: { color: LESSON_COLORS.text, fontSize: 15, fontWeight: "800" },
  switchBody: {
    marginTop: 2,
    color: LESSON_COLORS.textSecondary,
    fontSize: 12,
    lineHeight: 17,
  },
  privacy: { flexDirection: "row", gap: 8, paddingHorizontal: 4 },
  privacyText: {
    flex: 1,
    color: LESSON_COLORS.textSecondary,
    fontSize: 12,
    lineHeight: 17,
  },
  notice: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: LESSON_COLORS.tipBackground,
    color: LESSON_COLORS.tipBody,
    fontSize: 14,
    lineHeight: 20,
  },
  faceGuide: {
    position: "absolute",
    top: 40,
    alignSelf: "center",
    width: 150,
    height: 190,
    borderRadius: 95,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "rgba(255,255,255,0.7)",
  },
  onDeviceLabel: {
    position: "absolute",
    right: 10,
    top: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  onDeviceText: { color: "#FFFFFF", fontSize: 11, fontWeight: "700" },
  expressionChip: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: LESSON_COLORS.surface,
    borderWidth: 1,
    borderColor: LESSON_COLORS.border,
  },
  expressionChipText: {
    color: LESSON_COLORS.text,
    fontSize: 12,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  notScored: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    backgroundColor: LESSON_COLORS.page,
  },
  notScoredText: {
    color: LESSON_COLORS.textSecondary,
    fontSize: 10,
    fontWeight: "800",
  },
  statusLabel: {
    color: LESSON_COLORS.purple,
    fontSize: 12,
    fontWeight: "800",
  },
  wordRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
    marginTop: 10,
  },
  liveWord: {
    color: LESSON_COLORS.textSecondary,
    fontSize: 24,
    fontWeight: "800",
  },
  liveWordLarge: { fontSize: 30 },
  liveWordHeard: { color: LESSON_COLORS.green },
  heard: {
    marginTop: 10,
    color: LESSON_COLORS.textSecondary,
    fontSize: 13,
    fontStyle: "italic",
    textAlign: "center",
  },
  cardLabel: {
    marginBottom: 8,
    color: LESSON_COLORS.text,
    fontSize: 14,
    fontWeight: "800",
  },
  levelTrack: {
    height: 10,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: LESSON_COLORS.page,
  },
  levelFill: {
    height: "100%",
    borderRadius: 5,
    backgroundColor: LESSON_COLORS.purple,
  },
  wordList: { marginTop: 10, gap: 10 },
  wordFeedback: { flexDirection: "row", alignItems: "center", gap: 10 },
  wordPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
  },
  pillGood: { backgroundColor: LESSON_COLORS.greenSoft },
  pillWork: { backgroundColor: "#FEF3C7" },
  wordPillText: {
    color: LESSON_COLORS.green,
    fontSize: 15,
    fontWeight: "800",
  },
  wordPillWorkText: { color: "#B45309" },
  syllableTip: {
    flex: 1,
    color: LESSON_COLORS.textSecondary,
    fontSize: 13,
  },
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  playRow: { flexDirection: "row", gap: 10 },
  playButton: {
    flex: 1,
    minHeight: MIN_TOUCH,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: LESSON_COLORS.purple,
    backgroundColor: LESSON_COLORS.surface,
  },
  playText: {
    color: LESSON_COLORS.purple,
    fontSize: 14,
    fontWeight: "800",
  },
});
