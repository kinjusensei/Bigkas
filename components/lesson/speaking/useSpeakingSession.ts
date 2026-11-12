import {
  ExpoSpeechRecognitionModule,
  useSpeechRecognitionEvent,
} from "expo-speech-recognition";
import { useCallback, useEffect, useRef, useState } from "react";

import { secondOpinion, toDialect } from "../../../utils/speech";
import { analyzeRecording, deleteRecording, PitchAnalysis } from "./pitch";
import { matchWords } from "./wordMatch";

// One recording take for the speaking activity: speech recognition (words,
// live) with the audio saved to a file on the phone (Android 13+), the
// voice level from the recognizer, and pitch worked out from the file
// after Stop. Every failure ends in "done" with a friendly notice instead
// of an error, so the lesson can always continue.

export type SpeakingStatus =
  | "idle"
  | "starting"
  | "recording"
  | "processing"
  | "done";

const MAX_RECORDING_MS = 15000;

// How many target words a transcript gets right.
const countMatched = (target: string, heard: string) =>
  matchWords(target, heard).filter((word) => word.status === "matched").length;

// Who supplied the words shown: the phone's recognizer, or Sapin-sapin AI
// (the Bigkas speech server) when it heard more of the phrase.
export type HeardBy = "phone" | "sapin-sapin";

// language: the lesson's dialect, for the Sapin-sapin second opinion.
export function useSpeakingSession(language?: string) {
  const [status, setStatus] = useState<SpeakingStatus>("idle");
  const [transcript, setTranscript] = useState("");
  const [volume, setVolume] = useState(0); // 0..1
  const [audioUri, setAudioUri] = useState<string | null>(null);
  const [pitch, setPitch] = useState<PitchAnalysis | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [heardBy, setHeardBy] = useState<HeardBy>("phone");
  // The language Sapin-sapin is checking in, while it checks (else null).
  const [sapinChecking, setSapinChecking] = useState<string | null>(null);

  const languageRef = useRef(language);
  languageRef.current = language;
  const targetRef = useRef(""); // the phrase for this take
  const latestTextRef = useRef(""); // what the phone shows as heard
  const takeRef = useRef(0); // bumps on reset, so a late reply is ignored

  const activeRef = useRef(false);
  const finalTextRef = useRef("");
  const uriRef = useRef<string | null>(null);
  const finishingRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Every file made this activity, deleted when the learner leaves it.
  const filesRef = useRef<Set<string>>(new Set());
  const mountedRef = useRef(true);

  const clearTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
  };

  const finish = useCallback(async () => {
    if (finishingRef.current) return;
    finishingRef.current = true;
    activeRef.current = false;
    clearTimer();
    setStatus("processing");
    setVolume(0);

    // audioend can arrive just after end; give it a moment.
    if (!uriRef.current) {
      await new Promise((resolve) => setTimeout(resolve, 400));
    }
    const uri = uriRef.current;
    const take = takeRef.current;
    let analysis: PitchAnalysis | null = null;
    if (uri) {
      try {
        analysis = await analyzeRecording(uri);
      } catch (error) {
        console.warn("Pitch analysis failed:", error);
      }
    }

    // The phone missed some words: ask Sapin-sapin about the same recording
    // and keep its words if it heard more of the phrase. Offline → skipped.
    const dialect = toDialect(languageRef.current);
    const target = targetRef.current;
    const phoneText = latestTextRef.current;
    const targetWords = target.split(/\s+/).filter(Boolean).length;
    if (uri && dialect && target && countMatched(target, phoneText) < targetWords) {
      setSapinChecking(dialect);
      const result = await secondOpinion(uri, dialect, target);
      if (!mountedRef.current || take !== takeRef.current) return;
      setSapinChecking(null);
      if (
        result?.transcript &&
        countMatched(target, result.transcript) > countMatched(target, phoneText)
      ) {
        setTranscript(result.transcript);
        setHeardBy("sapin-sapin");
      }
    }
    if (!mountedRef.current || take !== takeRef.current) return;
    setAudioUri(uri);
    setPitch(analysis);
    setStatus("done");
  }, []);

  useSpeechRecognitionEvent("start", () => {
    if (activeRef.current) setStatus("recording");
  });

  useSpeechRecognitionEvent("result", (event) => {
    if (!activeRef.current) return;
    const text = event.results[0]?.transcript?.trim() ?? "";
    if (event.isFinal) {
      finalTextRef.current = `${finalTextRef.current} ${text}`.trim();
      latestTextRef.current = finalTextRef.current;
      setTranscript(finalTextRef.current);
    } else {
      latestTextRef.current = `${finalTextRef.current} ${text}`.trim();
      setTranscript(latestTextRef.current);
    }
  });

  useSpeechRecognitionEvent("volumechange", (event) => {
    if (!activeRef.current) return;
    setVolume(Math.min(1, Math.max(0, (event.value + 2) / 12)));
  });

  useSpeechRecognitionEvent("audioend", (event) => {
    if (event.uri) {
      uriRef.current = event.uri;
      filesRef.current.add(event.uri);
    }
  });

  useSpeechRecognitionEvent("error", (event) => {
    if (!activeRef.current) return;
    if (event.error === "no-speech") {
      setNotice("We didn't catch that. You can try again or skip.");
    } else if (event.error === "not-allowed") {
      setNotice("Microphone permission is off. You can skip this phrase.");
    } else if (event.error !== "aborted") {
      console.warn("Speech recognition error:", event.error, event.message);
      setNotice(
        "Speech recognition isn't working right now. You can try again or skip.",
      );
    }
    void finish();
  });

  useSpeechRecognitionEvent("end", () => {
    if (activeRef.current) void finish();
  });

  const reset = useCallback(() => {
    if (activeRef.current) {
      activeRef.current = false;
      try {
        ExpoSpeechRecognitionModule.abort();
      } catch {}
    }
    clearTimer();
    takeRef.current += 1;
    finishingRef.current = false;
    finalTextRef.current = "";
    latestTextRef.current = "";
    setHeardBy("phone");
    setSapinChecking(null);
    uriRef.current = null;
    setTranscript("");
    setVolume(0);
    setAudioUri(null);
    setPitch(null);
    setNotice(null);
    setStatus("idle");
  }, []);

  // Deletes every recording made so far (leaving the activity).
  const discardRecordings = useCallback(() => {
    filesRef.current.forEach((uri) => void deleteRecording(uri));
    filesRef.current.clear();
  }, []);

  // Asks for the microphone only now, when the learner taps Start.
  // target: the phrase the learner should say (for the second opinion).
  const start = useCallback(async (target = ""): Promise<boolean> => {
    // A new take replaces the previous one.
    if (uriRef.current) {
      filesRef.current.delete(uriRef.current);
      void deleteRecording(uriRef.current);
    }
    reset();
    targetRef.current = target;
    try {
      if (!ExpoSpeechRecognitionModule.isRecognitionAvailable()) {
        setNotice(
          "Speech recognition isn't available on this phone. You can skip this phrase.",
        );
        return false;
      }
      const permission =
        await ExpoSpeechRecognitionModule.requestPermissionsAsync();
      if (!permission.granted) {
        setNotice(
          "No problem — without the microphone you can skip the speaking practice and still finish the lesson.",
        );
        return false;
      }

      activeRef.current = true;
      setStatus("starting");
      ExpoSpeechRecognitionModule.start({
        lang: "fil-PH",
        interimResults: true,
        continuous: true,
        recordingOptions: { persist: true },
        volumeChangeEventOptions: { enabled: true, intervalMillis: 120 },
      });
      // Don't wait for the "start" event to enable Stop.
      setStatus("recording");
      timeoutRef.current = setTimeout(() => {
        if (activeRef.current) ExpoSpeechRecognitionModule.stop();
      }, MAX_RECORDING_MS);
      return true;
    } catch (error) {
      console.warn("Unable to start speaking practice:", error);
      activeRef.current = false;
      setStatus("idle");
      setNotice(
        "Recording couldn't start. You can try again or skip this phrase.",
      );
      return false;
    }
  }, [reset]);

  const stop = useCallback(() => {
    if (!activeRef.current) return;
    setStatus("processing");
    try {
      ExpoSpeechRecognitionModule.stop();
    } catch {
      void finish();
    }
  }, [finish]);

  useEffect(() => {
    mountedRef.current = true;
    const files = filesRef.current;
    return () => {
      mountedRef.current = false;
      if (activeRef.current) {
        activeRef.current = false;
        try {
          ExpoSpeechRecognitionModule.abort();
        } catch {}
      }
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      files.forEach((uri) => void deleteRecording(uri));
      files.clear();
    };
  }, []);

  return {
    status,
    transcript,
    volume,
    audioUri,
    pitch,
    notice,
    heardBy,
    sapinChecking,
    start,
    stop,
    reset,
    discardRecordings,
  };
}
