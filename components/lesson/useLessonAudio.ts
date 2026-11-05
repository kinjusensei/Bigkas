import { createAudioPlayer } from "expo-audio";
import * as Speech from "expo-speech";
import { useCallback, useEffect, useRef, useState } from "react";

import { LessonDialect } from "../../types/structuredLesson";

// Same playback rules as the story term card
// (app/components/Story/TermExplanationModal.tsx) and the reading screen:
// a recorded `audioUrl` plays through expo-audio; otherwise Tagalog falls
// back to device TTS. Kapampangan and Waray have no TTS voice, so without
// a recording they show "Audio coming soon".

const TTS_LOCALE_BY_DIALECT: Record<LessonDialect, string | null> = {
  tagalog: "fil-PH",
  kapampangan: null,
  waray: null,
};

export interface LessonAudioClip {
  text: string;
  audioUrl?: string;
}

export function useLessonAudio(dialect: LessonDialect) {
  // Key of the button that is playing, so only that one shows as active.
  const [playingKey, setPlayingKey] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const playerRef = useRef<ReturnType<typeof createAudioPlayer> | null>(null);
  const subscriptionRef = useRef<{ remove: () => void } | null>(null);
  const noticeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Bumped on every stop so callbacks from an older sequence are ignored.
  const runRef = useRef(0);

  const releasePlayer = () => {
    subscriptionRef.current?.remove();
    subscriptionRef.current = null;
    playerRef.current?.remove();
    playerRef.current = null;
  };

  const stop = useCallback(() => {
    runRef.current += 1;
    Speech.stop().catch(() => {});
    releasePlayer();
    setPlayingKey(null);
  }, []);

  useEffect(() => {
    return () => {
      runRef.current += 1;
      Speech.stop().catch(() => {});
      releasePlayer();
      if (noticeTimeoutRef.current) clearTimeout(noticeTimeoutRef.current);
    };
  }, []);

  const showNotice = (message: string) => {
    setNotice(message);
    if (noticeTimeoutRef.current) clearTimeout(noticeTimeoutRef.current);
    noticeTimeoutRef.current = setTimeout(() => {
      setNotice(null);
      noticeTimeoutRef.current = null;
    }, 2500);
  };

  // Plays the clips one after another; tapping the same key again stops.
  const playSequence = (key: string, clips: LessonAudioClip[]) => {
    if (playingKey === key) {
      stop();
      return;
    }

    const playable = clips.filter((clip) => clip.text.trim());
    const locale = TTS_LOCALE_BY_DIALECT[dialect];
    if (
      playable.length === 0 ||
      (!locale && playable.some((clip) => !clip.audioUrl))
    ) {
      showNotice("Audio coming soon");
      return;
    }

    stop();
    setNotice(null);
    const run = runRef.current;
    setPlayingKey(key);

    const playAt = (index: number) => {
      if (runRef.current !== run) return;
      if (index >= playable.length) {
        setPlayingKey(null);
        return;
      }

      const clip = playable[index];
      try {
        if (clip.audioUrl) {
          const player = createAudioPlayer({ uri: clip.audioUrl });
          playerRef.current = player;
          subscriptionRef.current = player.addListener(
            "playbackStatusUpdate",
            (status) => {
              if (status.didJustFinish) {
                releasePlayer();
                playAt(index + 1);
              }
            },
          );
          player.play();
          return;
        }

        Speech.speak(clip.text, {
          language: locale ?? undefined,
          onDone: () => playAt(index + 1),
          onStopped: () => {
            if (runRef.current === run) setPlayingKey(null);
          },
          onError: () => {
            if (runRef.current !== run) return;
            setPlayingKey(null);
            showNotice("Pronunciation is unavailable right now.");
          },
        });
      } catch (error) {
        console.error("Failed to play lesson audio:", error);
        setPlayingKey(null);
        showNotice("Pronunciation is unavailable right now.");
      }
    };

    playAt(0);
  };

  const play = (key: string, clip: LessonAudioClip) =>
    playSequence(key, [clip]);

  return { play, playSequence, stop, playingKey, notice };
}

export type LessonAudio = ReturnType<typeof useLessonAudio>;
