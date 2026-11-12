// Whether the learner has camera hints (expression reading) turned on.
// Remembered across lessons, stories and app restarts: once turned on it
// stays on until the learner turns it off. Every screen using the hook
// sees the same value.
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "bigkas.cameraHints";

let current: boolean | null = null; // null until read from storage
const listeners = new Set<(value: boolean) => void>();
let loading: Promise<boolean> | null = null;

function load(): Promise<boolean> {
  if (current !== null) return Promise.resolve(current);
  if (!loading) {
    loading = AsyncStorage.getItem(STORAGE_KEY)
      .then((value) => value === "on")
      .catch(() => false)
      .then((value) => {
        if (current === null) current = value;
        return current;
      });
  }
  return loading;
}

export function setCameraHintsPreference(value: boolean): void {
  current = value;
  listeners.forEach((listener) => listener(value));
  AsyncStorage.setItem(STORAGE_KEY, value ? "on" : "off").catch(() => {});
}

export function useCameraHintsPreference(): [boolean, (value: boolean) => void] {
  const [value, setValue] = useState(current ?? false);
  useEffect(() => {
    let active = true;
    listeners.add(setValue);
    load().then((stored) => {
      if (active) setValue(stored);
    });
    return () => {
      active = false;
      listeners.delete(setValue);
    };
  }, []);
  const update = useCallback((next: boolean) => setCameraHintsPreference(next), []);
  return [value, update];
}
