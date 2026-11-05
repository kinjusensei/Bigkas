import { Ionicons } from "@expo/vector-icons";

import { BugReportCategory } from "../../services/reportService";

// Colors for the Report a problem screen.
export const report = {
  primary: "#4A14A8",
  primaryDisabled: "#B9A6E3",
  ink: "#1B1340",
  background: "#F6F4FD",
  chip: "#EDE7FC",
  border: "#D9D0F2",
  gold: "#FFE08A",
  green: "#1E9E5A",
  red: "#B3261E",
  redBg: "#FDECEC",
  muted: "#5E5A7A",
  white: "#FFFFFF",
} as const;

// Category values are the ones the backend already stores; only the
// labels and icons are for the UI.
export const PROBLEM_TYPES: {
  key: BugReportCategory;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
}[] = [
  { key: "crash", label: "App crashed", icon: "warning-outline" },
  {
    key: "wrong_content",
    label: "Wrong content",
    icon: "document-text-outline",
  },
  { key: "audio", label: "Audio / mic", icon: "mic-outline" },
  { key: "camera", label: "Camera", icon: "camera-outline" },
  { key: "ui", label: "Display issue", icon: "phone-portrait-outline" },
  { key: "other", label: "Something else", icon: "help-circle-outline" },
];

export function problemTypeLabel(key: BugReportCategory | null): string {
  return PROBLEM_TYPES.find((type) => type.key === key)?.label ?? "";
}
