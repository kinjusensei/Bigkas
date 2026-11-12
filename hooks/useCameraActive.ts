import { useIsFocused } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { AppState } from "react-native";

// Whether a camera on this screen should run: the screen is focused and the
// app is in the foreground. Pausing otherwise frees the camera for other
// apps and avoids errors when Android takes it away in the background.
//
// `onResume` runs when the app comes back to the foreground, e.g. after the
// learner turned Camera access back on in Settings, so the screen can retry.
export function useCameraActive(onResume?: () => void): boolean {
  const focused = useIsFocused();
  const [appActive, setAppActive] = useState(AppState.currentState === "active");
  const onResumeRef = useRef(onResume);
  onResumeRef.current = onResume;

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (state) => {
      const active = state === "active";
      setAppActive((was) => {
        if (active && !was) onResumeRef.current?.();
        return active;
      });
    });
    return () => subscription.remove();
  }, []);

  return focused && appActive;
}
