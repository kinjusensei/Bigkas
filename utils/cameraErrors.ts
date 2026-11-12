// Sorts camera start-up errors into the few cases the app explains
// differently. VisionCamera v5 reports Android's CameraState errors as plain
// Errors, so this reads the message. No React Native imports: tested with
// plain `node --test` (utils/cameraErrors.test.ts).

export type CameraProblem =
  | "disabled" // privacy switch ("Camera access" off) or a device/school policy
  | "in-use" // another app is using the camera, or too many cameras open
  | "permission" // the app isn't allowed to use the camera
  | "no-device" // no front camera found
  | "other";

export function classifyCameraError(error: unknown): CameraProblem {
  const text = String(
    (error as { message?: unknown } | null)?.message ?? error ?? "",
  ).toLowerCase();
  if (/disabled|device policy|restricted|camera-is-restricted/.test(text)) {
    return "disabled";
  }
  if (/in use|in-use|already|max(imum)? (number of )?cameras|max_cameras|do not disturb/.test(text)) {
    return "in-use";
  }
  if (/permission|not allowed|not-allowed|denied/.test(text)) {
    return "permission";
  }
  if (/no (camera )?device|device-not-found|no camera/.test(text)) {
    return "no-device";
  }
  return "other";
}

export const CAMERA_PROBLEM_TEXT: Record<CameraProblem, { title: string; body: string }> = {
  disabled: {
    title: "Camera access is turned off",
    body:
      "Camera access is disabled by your device settings or privacy toggle. Please enable Camera Access in your Android Quick Settings or Device Settings to continue.",
  },
  "in-use": {
    title: "The camera is busy",
    body:
      "Another app is using the camera. Close it (for example a video call or the camera app), then tap Retry.",
  },
  permission: {
    title: "Camera permission is off",
    body:
      "Bigkas isn't allowed to use the camera. Allow it in Settings, then tap Retry.",
  },
  "no-device": {
    title: "No front camera found",
    body: "This phone doesn't have a front camera Bigkas can use.",
  },
  other: {
    title: "The camera couldn't start",
    body: "Something stopped the camera from starting. Tap Retry, or continue without it.",
  },
};
