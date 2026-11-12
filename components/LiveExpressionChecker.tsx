import { CameraView, useCameraPermissions } from "expo-camera";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useCameraActive } from "../hooks/useCameraActive";
import {
  CAMERA_PROBLEM_TEXT,
  classifyCameraError,
} from "../utils/cameraErrors";

// ---------------------------------------------------------------------------
// Live expression check with LibreFace, hands-free.
//
// While this screen is open (and not paused), the camera preview is shown and
// a frame is grabbed silently (no shutter sound, no animation) and sent to the
// LibreFace server, one at a time. Nothing to press: it starts when the screen
// opens, stops when the learner leaves the screen or the app goes to the
// background, and starts again when they come back.
//
// Frames are only sent while the preview is visible, and the server deletes
// each one after analysis. The learner can pause at any time.
// ---------------------------------------------------------------------------

// Where the LibreFace server is (set in .env.local, and in eas.json for builds):
//   EXPO_PUBLIC_FER_SERVER_URL  full address, e.g. https://your-name.ngrok-free.app
//                               (works from any Wi-Fi or mobile data)
//   EXPO_PUBLIC_FER_SERVER_HOST only an IP on the same Wi-Fi, e.g. 192.168.100.110
//                               (used when no URL is set; port 8000, http)
//   EXPO_PUBLIC_FER_API_KEY     must match FER_API_KEY on the server, if set
const SERVER_URL = (
  process.env.EXPO_PUBLIC_FER_SERVER_URL ??
  `http://${process.env.EXPO_PUBLIC_FER_SERVER_HOST ?? "192.168.1.50"}:8000`
).replace(/\/+$/, "");
const API_URL = `${SERVER_URL}/analyze`;
const API_KEY = process.env.EXPO_PUBLIC_FER_API_KEY ?? "";
const REQUEST_HEADERS: Record<string, string> = {
  // ngrok's free plan shows a warning page instead of the API unless asked not to.
  "ngrok-skip-browser-warning": "true",
  ...(API_KEY ? { "X-API-Key": API_KEY } : {}),
};
const THROTTLE_MS = 300; // pause after each answer before the next frame
const SMOOTHING_WINDOW = 3; // recent results blended into what's shown
const JPEG_QUALITY = 0.5; // smaller upload, faster; enough for a face
const FIRST_TIMEOUT_MS = 45000; // LibreFace loads its models on the first frame
const TIMEOUT_MS = 15000;
const RETRY_MIN_MS = 2000; // server offline: wait, then try again
const RETRY_MAX_MS = 10000;
const AU_MAX = 5; // LibreFace AU intensities run about 0–5

const INK = "#1F2A5C";
const GOLD = "#E0A526";
const GREEN = "#16A34A";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type NumberMap = Record<string, number>;

export interface Analysis {
  expression: string | null;
  pose: NumberMap;
  aus: NumberMap;
}

type PostResult =
  | { ok: true; analysis: Analysis }
  | { ok: false; detail: string };

const sleep = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

// ---------------------------------------------------------------------------
// Response helpers. The server returns { expression, head_pose, action_units };
// a few other key spellings are accepted so a small rename won't break the UI.
// ---------------------------------------------------------------------------
function numericMap(value: unknown): NumberMap {
  if (!value || typeof value !== "object") return {};
  if (Array.isArray(value)) {
    const names = ["pitch", "yaw", "roll"];
    return value.length === 3 && value.every((v) => typeof v === "number")
      ? Object.fromEntries(value.map((v: number, i) => [names[i], v]))
      : {};
  }
  const out: NumberMap = {};
  for (const [key, v] of Object.entries(value as Record<string, unknown>)) {
    if (typeof v === "number" && Number.isFinite(v)) out[key] = v;
    else if (typeof v === "boolean") out[key] = v ? 1 : 0;
  }
  return out;
}

function normalize(data: unknown): Analysis {
  const d = (data ?? {}) as Record<string, unknown>;
  const raw = d.expression ?? d.facial_expression ?? d.emotion ?? null;
  let label: unknown = raw;
  if (raw && typeof raw === "object") {
    const r = raw as Record<string, unknown>;
    label = r.label ?? r.name ?? r.expression ?? null;
  }
  // Older server format: pitch/yaw/roll and au_intensities at the top level.
  const pose = d.head_pose ??
    d.pose ?? { pitch: d.pitch, yaw: d.yaw, roll: d.roll };
  return {
    expression: label ? String(label) : null,
    pose: numericMap(pose),
    aus: numericMap(d.action_units ?? d.aus ?? d.au_intensities),
  };
}

function averageMaps(maps: NumberMap[]): NumberMap {
  const sums: NumberMap = {};
  const counts: NumberMap = {};
  for (const map of maps) {
    for (const [key, v] of Object.entries(map)) {
      sums[key] = (sums[key] ?? 0) + v;
      counts[key] = (counts[key] ?? 0) + 1;
    }
  }
  return Object.fromEntries(
    Object.keys(sums).map((k) => [k, sums[k] / counts[k]]),
  );
}

// Majority vote for the expression (ties go to the most recent result);
// plain average for pose angles and AU intensities.
function smooth(history: Analysis[]): Analysis {
  const counts = new Map<string, number>();
  for (const h of history) {
    if (h.expression)
      counts.set(h.expression, (counts.get(h.expression) ?? 0) + 1);
  }
  let expression: string | null = null;
  let best = 0;
  for (const h of [...history].reverse()) {
    const c = h.expression ? (counts.get(h.expression) ?? 0) : 0;
    if (c > best) {
      best = c;
      expression = h.expression;
    }
  }
  return {
    expression,
    pose: averageMaps(history.map((h) => h.pose)),
    aus: averageMaps(history.map((h) => h.aus)),
  };
}

async function postFrame(
  uri: string,
  signal: AbortSignal,
): Promise<PostResult> {
  const form = new FormData();
  // React Native's FormData accepts a { uri, name, type } descriptor as a file.
  // Don't set Content-Type yourself; fetch adds the multipart boundary.
  form.append("file", {
    uri,
    name: "frame.jpg",
    type: "image/jpeg",
  } as unknown as Blob);

  // Content-Type is left out on purpose: fetch adds the multipart boundary.
  const res = await fetch(API_URL, {
    method: "POST",
    body: form,
    headers: REQUEST_HEADERS,
    signal,
  });
  if (res.status === 401) {
    return {
      ok: false,
      detail: "The server refused the access key. Check EXPO_PUBLIC_FER_API_KEY.",
    };
  }
  if (!res.ok) {
    // The server answered but couldn't analyze this frame (e.g. no face).
    let detail = `The server couldn't analyze this frame (HTTP ${res.status}).`;
    try {
      const body = (await res.json()) as Record<string, unknown>;
      if (typeof body.detail === "string") detail = body.detail;
      else if (typeof body.error === "string") detail = body.error;
    } catch {
      // not JSON
    }
    return { ok: false, detail };
  }
  return { ok: true, analysis: normalize(await res.json()) };
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function LiveExpressionChecker({
  onResult,
}: {
  onResult?: (result: Analysis) => void;
}) {
  const [permission, requestPermission] = useCameraPermissions();

  // The learner's own pause; everything else is automatic.
  const [paused, setPaused] = useState(false);
  // The camera itself can't run (privacy switch off, policy, busy…).
  const [cameraProblem, setCameraProblem] = useState<string | null>(null);
  // Bumped to remount <CameraView> after a camera problem is fixed.
  const [cameraKey, setCameraKey] = useState(0);

  // Screen focused and app in the foreground. Coming back from Settings
  // clears a camera problem so it tries again.
  const screenActive = useCameraActive(() => {
    setCameraProblem((problem) => {
      if (problem) setCameraKey((k) => k + 1);
      return null;
    });
  });

  const granted = permission?.granted ?? false;
  const cameraOn = screenActive && granted && !paused && !cameraProblem;

  const cameraRef = useRef<CameraView>(null);
  const runIdRef = useRef<number | null>(null); // the running loop; null = stopped
  const runCounterRef = useRef(0);
  const abortRef = useRef<AbortController | null>(null);
  const historyRef = useRef<Analysis[]>([]);
  const firstFrameRef = useRef(true);
  const mountedRef = useRef(true);
  const onResultRef = useRef(onResult);
  onResultRef.current = onResult;

  const [detecting, setDetecting] = useState(false); // loop running
  const [processing, setProcessing] = useState(false); // a frame is being analyzed
  const [serverOffline, setServerOffline] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [result, setResult] = useState<Analysis | null>(null);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      runIdRef.current = null;
      abortRef.current?.abort();
    };
  }, []);

  // Ask for the camera automatically the first time (no button to press).
  useEffect(() => {
    if (
      screenActive &&
      permission &&
      !permission.granted &&
      permission.canAskAgain
    ) {
      requestPermission().catch(() => {});
    }
  }, [screenActive, permission, requestPermission]);

  const stopLoop = useCallback(() => {
    runIdRef.current = null;
    abortRef.current?.abort();
    abortRef.current = null;
    if (mountedRef.current) {
      setDetecting(false);
      setProcessing(false);
    }
  }, []);

  // Camera off for any reason (paused, left the screen, background): stop.
  useEffect(() => {
    if (!cameraOn) stopLoop();
  }, [cameraOn, stopLoop]);

  // Sequential loop: grab a frame → send → wait for the answer → short pause.
  // Only one request is ever in flight.
  const runLoop = useCallback(async (runId: number) => {
    let retryDelay = RETRY_MIN_MS;
    while (runIdRef.current === runId) {
      setProcessing(true);
      let wait = THROTTLE_MS;
      try {
        const photo = await cameraRef.current
          ?.takePictureAsync({
            quality: JPEG_QUALITY,
            skipProcessing: false, // upright photo; true can arrive sideways
            exif: false,
            shutterSound: false, // silent
          })
          .catch(() => null);
        if (runIdRef.current !== runId) return;

        if (!photo) {
          setNotice("Couldn't grab a frame. Trying again…");
        } else {
          const controller = new AbortController();
          abortRef.current = controller;
          const timer = setTimeout(
            () => controller.abort(),
            firstFrameRef.current ? FIRST_TIMEOUT_MS : TIMEOUT_MS,
          );
          let outcome: PostResult;
          try {
            outcome = await postFrame(photo.uri, controller.signal);
          } finally {
            clearTimeout(timer);
          }
          if (runIdRef.current !== runId) return;

          firstFrameRef.current = false;
          setServerOffline(false);
          retryDelay = RETRY_MIN_MS;
          if (outcome.ok) {
            historyRef.current = [
              ...historyRef.current,
              outcome.analysis,
            ].slice(-SMOOTHING_WINDOW);
            const smoothed = smooth(historyRef.current);
            setResult(smoothed);
            onResultRef.current?.(smoothed);
            setNotice(null);
          } else {
            // Usually "no face detected": keep detecting, keep the last result.
            setNotice(outcome.detail);
          }
        }
      } catch {
        if (runIdRef.current !== runId) return; // stopped on purpose
        // Unreachable or too slow: keep the camera on and retry with a growing
        // delay instead of giving up.
        setServerOffline(true);
        wait = retryDelay;
        retryDelay = Math.min(retryDelay * 2, RETRY_MAX_MS);
      } finally {
        if (runIdRef.current === runId && mountedRef.current)
          setProcessing(false);
      }
      await sleep(wait);
    }
  }, []);

  // The preview is ready: start detecting right away.
  const handleCameraReady = useCallback(() => {
    if (!cameraOn || runIdRef.current !== null) return;
    historyRef.current = [];
    const runId = ++runCounterRef.current;
    runIdRef.current = runId;
    setDetecting(true);
    void runLoop(runId);
  }, [cameraOn, runLoop]);

  const ausSorted = result
    ? Object.entries(result.aus).sort((a, b) => b[1] - a[1])
    : [];

  // ── Status shown at the top ────────────────────────────────────────────
  let statusText: string;
  let statusColor = INK;
  if (!granted) {
    statusText = "Camera permission needed";
  } else if (cameraProblem) {
    statusText = "Camera unavailable";
  } else if (paused) {
    statusText = "Paused";
  } else if (serverOffline) {
    statusText = "Server offline — retrying…";
    statusColor = "#B45309";
  } else if (detecting) {
    statusText = "Detecting automatically";
    statusColor = GREEN;
  } else {
    statusText = "Starting camera…";
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.statusPill} accessibilityLiveRegion="polite">
          <View style={[styles.dot, { backgroundColor: statusColor }]} />
          <Text style={[styles.statusPillText, { color: statusColor }]}>
            {statusText}
          </Text>
        </View>
        {granted && !cameraProblem ? (
          <Pressable
            accessibilityRole="button"
            onPress={() => setPaused((p) => !p)}
            style={({ pressed }) => [
              styles.button,
              paused ? styles.buttonStart : styles.buttonStop,
              pressed && styles.buttonDim,
            ]}
          >
            <Text style={[styles.buttonText, !paused && { color: INK }]}>
              {paused ? "Resume" : "Pause"}
            </Text>
          </Pressable>
        ) : null}
      </View>

      {/* Camera permission refused for good: explain and offer Settings. */}
      {permission && !granted && !permission.canAskAgain ? (
        <View style={styles.errorBox} accessibilityRole="alert">
          <Text style={styles.errorTitle}>Camera permission is off</Text>
          <Text style={styles.errorBody}>
            Allow camera access for Bigkas in Settings to use the expression
            check.
          </Text>
          <Pressable
            onPress={() => Linking.openSettings().catch(() => {})}
            style={styles.settingsButton}
            accessibilityRole="button"
          >
            <Text style={styles.settingsButtonText}>Open Settings</Text>
          </Pressable>
        </View>
      ) : null}

      {cameraProblem ? (
        <View style={styles.errorBox} accessibilityRole="alert">
          <Text style={styles.errorTitle}>Camera unavailable</Text>
          <Text style={styles.errorBody}>{cameraProblem}</Text>
          <View style={styles.errorButtons}>
            <Pressable
              onPress={() => {
                setCameraProblem(null);
                setCameraKey((k) => k + 1);
              }}
              style={styles.settingsButton}
              accessibilityRole="button"
            >
              <Text style={styles.settingsButtonText}>Retry</Text>
            </Pressable>
            <Pressable
              onPress={() => Linking.openSettings().catch(() => {})}
              style={styles.settingsButton}
              accessibilityRole="button"
            >
              <Text style={styles.settingsButtonText}>Open Settings</Text>
            </Pressable>
          </View>
        </View>
      ) : null}

      {serverOffline ? (
        <View style={styles.warnBox}>
          <Text style={styles.warnText}>
            Can&apos;t reach the analysis server at {API_URL}. Check that the
            server and ngrok are running on the PC and the PC is online (with a
            local IP: same Wi-Fi and port 8000 allowed in Windows Firewall). It
            keeps retrying by itself.
          </Text>
        </View>
      ) : null}

      <View style={styles.cameraBox}>
        {cameraOn ? (
          <CameraView
            key={cameraKey}
            ref={cameraRef}
            style={StyleSheet.absoluteFill}
            facing="front"
            animateShutter={false}
            onCameraReady={handleCameraReady}
            onMountError={(event) => {
              const problem = classifyCameraError(event?.message);
              setCameraProblem(CAMERA_PROBLEM_TEXT[problem].body);
            }}
          />
        ) : (
          <Text style={styles.cameraPlaceholder}>
            {paused ? "Paused. Tap Resume to continue." : "The camera is off."}
          </Text>
        )}
        {cameraOn && result?.expression ? (
          <View style={styles.liveChip} pointerEvents="none">
            <Text style={styles.liveChipText}>{result.expression}</Text>
          </View>
        ) : null}
      </View>

      <View style={styles.statusRow}>
        {detecting && processing ? (
          <>
            <ActivityIndicator size="small" color={GOLD} />
            <Text style={styles.statusText}>
              {firstFrameRef.current
                ? "Loading the models (first frame is slow)…"
                : "Analyzing…"}
            </Text>
          </>
        ) : null}
      </View>
      {notice ? <Text style={styles.notice}>{notice}</Text> : null}

      {!result ? (
        <Text style={styles.empty}>
          Look at the camera. Your expression, head pose and action units appear
          here automatically.
        </Text>
      ) : (
        <View style={styles.results}>
          <View>
            <Text style={styles.label}>Expression</Text>
            <Text style={styles.expression}>
              {result.expression ?? "Not detected"}
            </Text>
            <Text style={styles.hint}>
              Smoothed over the last {SMOOTHING_WINDOW} results
            </Text>
          </View>

          <View>
            <Text style={styles.sectionTitle}>Head pose</Text>
            {Object.keys(result.pose).length === 0 ? (
              <Text style={styles.hint}>No head pose returned.</Text>
            ) : (
              <View style={styles.poseRow}>
                {Object.entries(result.pose).map(([name, value]) => (
                  <View key={name} style={styles.poseCell}>
                    <Text style={styles.poseName}>{name}</Text>
                    <Text style={styles.poseValue}>{value.toFixed(1)}°</Text>
                  </View>
                ))}
              </View>
            )}
          </View>

          <View>
            <Text style={styles.sectionTitle}>Action units</Text>
            {ausSorted.length === 0 ? (
              <Text style={styles.hint}>No action units returned.</Text>
            ) : (
              ausSorted.map(([name, value]) => {
                const pct = Math.max(0, Math.min(100, (value / AU_MAX) * 100));
                return (
                  <View key={name} style={styles.auRow}>
                    <Text style={styles.auName} numberOfLines={1}>
                      {name}
                    </Text>
                    <View style={styles.auTrack}>
                      <View style={[styles.auFill, { width: `${pct}%` }]} />
                    </View>
                    <Text style={styles.auValue}>{value.toFixed(2)}</Text>
                  </View>
                );
              })
            )}
          </View>
        </View>
      )}

      <Text style={styles.privacy}>
        While the camera is on, a frame is sent about every second to the
        analysis server (encrypted when the address starts with https) and
        deleted after analysis. Nothing is saved. Tap Pause to stop.
      </Text>
    </ScrollView>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------
const styles = StyleSheet.create({
  container: { padding: 16, gap: 14 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  statusPill: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    minHeight: 40,
  },
  dot: { width: 10, height: 10, borderRadius: 5 },
  statusPillText: { fontSize: 15, fontWeight: "700" },

  button: {
    borderRadius: 999,
    paddingHorizontal: 18,
    minHeight: 44,
    justifyContent: "center",
  },
  buttonStart: { backgroundColor: INK },
  buttonStop: { backgroundColor: "#FFFFFF", borderWidth: 2, borderColor: INK },
  buttonDim: { opacity: 0.7 },
  buttonText: { color: "#FFFFFF", fontSize: 14, fontWeight: "700" },

  errorBox: {
    borderWidth: 1,
    borderColor: "#FCA5A5",
    backgroundColor: "#FEF2F2",
    borderRadius: 10,
    padding: 12,
    gap: 4,
  },
  errorTitle: { color: "#7F1D1D", fontWeight: "700" },
  errorBody: { color: "#7F1D1D", fontSize: 13 },
  errorButtons: { flexDirection: "row", gap: 8, flexWrap: "wrap" },
  settingsButton: {
    alignSelf: "flex-start",
    marginTop: 6,
    minHeight: 40,
    paddingHorizontal: 14,
    borderRadius: 999,
    borderWidth: 1.5,
    borderColor: "#7F1D1D",
    justifyContent: "center",
  },
  settingsButtonText: { color: "#7F1D1D", fontWeight: "700", fontSize: 13 },

  warnBox: {
    borderWidth: 1,
    borderColor: "#FCD34D",
    backgroundColor: "#FFFBEB",
    borderRadius: 10,
    padding: 12,
  },
  warnText: { color: "#92400E", fontSize: 13, lineHeight: 18 },

  cameraBox: {
    aspectRatio: 3 / 4,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: INK,
    alignItems: "center",
    justifyContent: "center",
  },
  cameraPlaceholder: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 24,
  },
  liveChip: {
    position: "absolute",
    bottom: 12,
    alignSelf: "center",
    backgroundColor: "rgba(17,24,39,0.75)",
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  liveChipText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
    textTransform: "capitalize",
  },

  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    minHeight: 24,
  },
  statusText: { color: INK, fontSize: 14 },
  notice: { color: "#92400E", fontSize: 14 },
  empty: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "rgba(31,42,92,0.3)",
    borderRadius: 12,
    padding: 16,
    color: "rgba(31,42,92,0.7)",
    fontSize: 14,
  },

  results: { gap: 22 },
  label: { color: "rgba(31,42,92,0.7)", fontSize: 14 },
  expression: {
    color: INK,
    fontSize: 44,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  hint: { color: "rgba(31,42,92,0.6)", fontSize: 12, marginTop: 2 },
  sectionTitle: {
    color: INK,
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },

  poseRow: { flexDirection: "row", gap: 10 },
  poseCell: {
    flex: 1,
    backgroundColor: "rgba(31,42,92,0.06)",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  poseName: {
    color: "rgba(31,42,92,0.7)",
    fontSize: 12,
    textTransform: "capitalize",
  },
  poseValue: {
    color: INK,
    fontSize: 18,
    fontWeight: "600",
    fontVariant: ["tabular-nums"],
  },

  auRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 6,
  },
  auName: { width: 72, color: INK, fontSize: 13 },
  auTrack: {
    flex: 1,
    height: 8,
    borderRadius: 999,
    overflow: "hidden",
    backgroundColor: "rgba(31,42,92,0.1)",
  },
  auFill: { height: "100%", borderRadius: 999, backgroundColor: GOLD },
  auValue: {
    width: 44,
    textAlign: "right",
    color: INK,
    fontSize: 13,
    fontVariant: ["tabular-nums"],
  },

  privacy: {
    color: "rgba(31,42,92,0.6)",
    fontSize: 12,
    lineHeight: 17,
    marginTop: 4,
  },
});
