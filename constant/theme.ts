/**
 * =============================================================
 * BIGKAS DESIGN TOKENS
 * =============================================================
 *
 * Single source of truth for colors, spacing, radius, and
 * shadows used across the app. Import from here instead of
 * hardcoding hex values / numbers in each screen's StyleSheet.
 *
 * Usage:
 *   import { colors, spacing, radius, shadow, typography } from "../constant/theme";
 *
 *   backgroundColor: colors.primary,
 *   borderRadius: radius.md,
 *   padding: spacing.md,
 * =============================================================
 */

export const colors = {
  /* ---------- Brand ---------- */
  primary: "#410FA3",
  primaryLight: "#EAE6FF",
  primarySoft: "#F4F1FB",
  primaryPale: "#F0ECFF",
  primaryMuted: "#EEEBFF",
  primaryBorder: "#DDD6F8",
  primaryBorderSoft: "#E9E3F5",

  /* ---------- Backgrounds ---------- */
  background: "#F9F8FF",
  backgroundAlt: "#F7F7FB",
  surface: "#FFFFFF",
  surfaceMuted: "#F9FAFB",

  /* ---------- Text ---------- */
  textDark: "#16113F",
  textHeading: "#211653",
  textHeadingAlt: "#24166D",
  textBody: "#1A1A1A",
  textMuted: "#77738F",
  textMutedAlt: "#77727F",
  textMutedSoft: "#625C86",
  textFaint: "#88839B",
  textFaintAlt: "#AAA5B7",
  textLabel: "#9A94AA",
  textOnPrimary: "#FFFFFF",
  textOnPrimaryMuted: "rgba(255,255,255,0.75)",

  /* ---------- Borders / dividers ---------- */
  border: "#E7E3F3",
  borderLight: "#EEEAF8",
  borderSoft: "#E5E7EB",
  borderMuted: "#ECEAF5",
  borderStrong: "#DCD3F7",
  borderAccent: "#C8BCF7",
  borderPurple: "#D7CCFF",
  borderPurpleAlt: "#D9D0FA",

  /* ---------- Status ---------- */
  success: "#22C55E",
  successDark: "#16A34A",
  danger: "#EF4444",
  dangerDark: "#DC2626",
  warning: "#F59E0B",

  /* ---------- Rank / podium ---------- */
  gold: "#F59E0B",
  silver: "#9CA3AF",
  silverAlt: "#B8BCC6",
  bronze: "#D97706",

  /* ---------- Neutral grays ---------- */
  gray50: "#F9FAFB",
  gray100: "#F1F1F4",
  gray200: "#E1E1E6",
  gray400: "#999999",
  gray500: "#777777",
  gray600: "#666666",
  gray700: "#716B88",

  /* ---------- Overlays ---------- */
  overlayDark: "rgba(0,0,0,0.3)",
  overlayDarker: "rgba(0,0,0,0.4)",
  overlayWhite: "rgba(255,255,255,0.18)",
  overlayWhiteSoft: "rgba(255,255,255,0.5)",
} as const;

export const radius = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 22,
  xxxl: 24,
  pill: 30,
  round: 999,
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
} as const;

export const typography = {
  weight: {
    regular: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },
  size: {
    xs: 9,
    sm: 11,
    base: 13,
    md: 14,
    lg: 15,
    xl: 16,
    xxl: 18,
    heading: 20,
    display: 26,
    hero: 30,
  },
} as const;

export const shadow = {
  card: {
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },

  cardSoft: {
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  primaryGlow: {
    shadowColor: "#410FA3",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 7,
  },

  successGlow: {
    shadowColor: "#22C55E",
    shadowOpacity: 0.2,
    shadowRadius: 7,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
} as const;
