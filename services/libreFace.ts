// LibreFace expression reading for lessons and stories.
//
// Takes a photo from the camera that's already on screen (PracticeCamera's
// extra photo output, via ferCapture), sends it to the Bigkas server's
// /analyze (libreface_server.py) and turns LibreFace's expression into a
// reading (utils/fer.ts libreFaceToReading). One request at a time; the
// frame file is deleted right after. Never scored.
//
// `online` tells the caller whether the server answered, so it can switch
// to the on-phone model while it's offline (services/expressionReader.ts).
import { File, Paths } from "expo-file-system";
import { useEffect, useRef, useState } from "react";
import type { CameraPhotoOutput } from "react-native-vision-camera";

import { LIBREFACE_INTERVAL_MS, LIBREFACE_RETRY_MS } from "../constant/fer";
import { type FERReading, uriToPath } from "../utils/fer";
import { captureFaceImage } from "./ferCapture";
import { analyzeFrame, type FrameResult } from "./libreFaceApi";

export { analyzeFrame, type FrameResult };

// LibreFace finds and aligns the face itself, so send a bigger square than
// the on-phone model's 224 px.
const FRAME_SIZE = 448;
// A reading counts once this many frames in a row agree.
const CONFIRM_FRAMES = 2;

let frameCount = 0;

async function captureFrameFile(photoOutput: CameraPhotoOutput): Promise<File | null> {
  const image = await captureFaceImage(photoOutput, FRAME_SIZE);
  if (!image) return null;
  frameCount = (frameCount + 1) % 1000;
  const file = new File(Paths.cache, `libreface_${Date.now()}_${frameCount}.jpg`);
  await image.saveToFileAsync(uriToPath(file.uri), "jpg", 80);
  return file;
}

type Options = {
  enabled: boolean;
  photoOutput: CameraPhotoOutput;
};

export function useLibreFace({ enabled, photoOutput }: Options) {
  // Confirmed reading (CONFIRM_FRAMES agreeing frames) and when it changed.
  const [reading, setReading] = useState<FERReading | null>(null);
  const [timestamp, setTimestamp] = useState(0);
  // null = not asked yet, true = answering, false = unreachable.
  const [online, setOnline] = useState<boolean | null>(null);
  const [unauthorized, setUnauthorized] = useState(false);
  // Development readout: what the last frame did, and how many were sent.
  const [lastStatus, setLastStatus] = useState("starting");
  const [frames, setFrames] = useState(0);
  const recentRef = useRef<FERReading[]>([]);

  useEffect(() => {
    if (!enabled) return;
    let cancelled = false;
    recentRef.current = [];
    const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    (async () => {
      // Give the camera a moment to start.
      await wait(800);
      while (!cancelled) {
        let file: File | null = null;
        let result: FrameResult | null = null;
        try {
          file = await captureFrameFile(photoOutput);
          if (!file) setLastStatus("camera busy");
          if (file && !cancelled) result = await analyzeFrame(file.uri);
        } catch (error) {
          // camera busy or not ready yet: try the next frame
          setLastStatus(`capture failed: ${String((error as Error)?.message ?? error).slice(0, 60)}`);
        } finally {
          try {
            file?.delete();
          } catch {}
        }
        if (cancelled) break;
        if (result) {
          setFrames((n) => n + 1);
          setLastStatus(
            result.status === "ok"
              ? `ok "${result.raw}"`
              : result.status === "offline"
                ? `offline (${result.why})`
                : result.status,
          );
          if (__DEV__) console.log("[LibreFace]", result);
        }

        if (result?.status === "offline" || result?.status === "unauthorized") {
          setOnline(false);
          setUnauthorized(result.status === "unauthorized");
          recentRef.current = [];
          await wait(LIBREFACE_RETRY_MS);
          continue;
        }
        if (result) {
          setOnline(true);
          setUnauthorized(false);
        }
        if (result?.status === "ok" && result.reading) {
          const recent = [...recentRef.current, result.reading].slice(-CONFIRM_FRAMES);
          recentRef.current = recent;
          if (recent.length === CONFIRM_FRAMES && recent.every((r) => r === recent[0])) {
            setReading(recent[0]);
            setTimestamp(Date.now());
          }
        }
        await wait(LIBREFACE_INTERVAL_MS);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [enabled, photoOutput]);

  // Keep the last reading while paused; forget the server state so the next
  // start checks it again.
  useEffect(() => {
    if (!enabled) setOnline(null);
  }, [enabled]);

  return { reading, timestamp, online, unauthorized, lastStatus, frames };
}
