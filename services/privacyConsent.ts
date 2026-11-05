import { useSyncExternalStore } from "react";

/**
 * Tiny in-memory store that carries the user's Privacy Policy agreement
 * from the privacy screen back to create-account.tsx.
 *
 * create-account stays mounted underneath the privacy screen, so when the
 * user taps "Allow" and we call router.back(), it re-renders with the new
 * value immediately.
 */

type ConsentState = {
  accepted: boolean;
  /** When the user tapped Allow — used as the consent timestamp. */
  acceptedAt: string | null;
};

let state: ConsentState = { accepted: false, acceptedAt: null };
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot() {
  return state;
}

export function acceptPrivacyPolicy() {
  state = { accepted: true, acceptedAt: new Date().toISOString() };
  emit();
}

export function resetPrivacyConsent() {
  state = { accepted: false, acceptedAt: null };
  emit();
}

export function usePrivacyConsent() {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
