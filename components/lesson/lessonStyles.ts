import { StyleSheet } from "react-native";

import { colors } from "../../constant/theme";

// Shared look for the structured lesson steps — same purples and card
// shapes as the reading screen (app/lesson/[lessonId].tsx).
export const LESSON_COLORS = {
  purple: "#5B50B0",
  darkPurple: "#4F3B9C",
  lavender: "#EFECFB",
  text: "#1C1A2E",
  textSecondary: "#5E5A75",
  page: colors.backgroundAlt,
  surface: colors.surface,
  border: colors.borderMuted,
  borderPurple: colors.primaryBorder,
  green: "#16A34A",
  greenSoft: "#E7F7EC",
  red: "#DC2626",
  redSoft: "#FDECEC",
  tipBackground: "#FFF7DB",
  tipTitle: "#8A5A1E",
  tipBody: "#6B5532",
};

export const MIN_TOUCH = 44;

export const lessonStyles = StyleSheet.create({
  card: {
    padding: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: LESSON_COLORS.border,
    backgroundColor: LESSON_COLORS.surface,
  },
  cardHighlighted: {
    borderWidth: 1.5,
    borderColor: LESSON_COLORS.purple,
    backgroundColor: LESSON_COLORS.lavender,
  },
  sectionTitle: {
    color: LESSON_COLORS.text,
    fontSize: 20,
    fontWeight: "800",
  },
  sectionIntro: {
    marginTop: 4,
    color: LESSON_COLORS.textSecondary,
    fontSize: 14,
    lineHeight: 20,
  },
  cardTitle: {
    color: LESSON_COLORS.text,
    fontSize: 16,
    fontWeight: "800",
  },
  body: {
    color: LESSON_COLORS.textSecondary,
    fontSize: 15,
    lineHeight: 22,
  },
  label: {
    color: LESSON_COLORS.purple,
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.2,
  },
  term: {
    color: LESSON_COLORS.darkPurple,
    fontSize: 17,
    fontWeight: "800",
  },
  meaning: {
    marginTop: 2,
    color: LESSON_COLORS.textSecondary,
    fontSize: 14,
  },
  tipCard: {
    padding: 18,
    borderRadius: 16,
    backgroundColor: LESSON_COLORS.tipBackground,
  },
  tipTitle: {
    color: LESSON_COLORS.tipTitle,
    fontSize: 16,
    fontWeight: "800",
  },
  tipBody: {
    marginTop: 8,
    color: LESSON_COLORS.tipBody,
    fontSize: 15,
    lineHeight: 22,
  },
  iconTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  notice: {
    color: LESSON_COLORS.textSecondary,
    fontSize: 12,
    textAlign: "center",
  },
});
