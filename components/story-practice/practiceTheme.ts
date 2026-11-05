import { bigkas } from "../../constant/bigkasTheme";
import { LESSON_COLORS } from "../lesson/lessonStyles";

// "Bigkas Lesson Flow" colors for Story chapter practice. The purple is the
// one the Story and lesson screens already use.
export const FLOW = {
  purple: LESSON_COLORS.purple,
  deepPurple: "#3F2FA0",
  ink: "#1B1A3A",
  muted: "#4A4968",
  mutedLight: "#6B6A85",
  page: "#F7F6FD",
  tint: "#EEEDFB",
  lightPurple: "#E4E0FA",
  border: "#E4E2F3",
  optionBorder: "#D9D5F5",
  badge: "#F1F0F8",
  white: "#FFFFFF",
  success: bigkas.success,
  successTint: "#E3F6EC",
  successText: "#0F5B33",
  successDark: "#14633A",
  amber: "#B7791F",
  amberTint: "#FFF6D6",
  amberDark: "#7A4A00",
  error: "#B3261E",
  errorTint: "#FDECEC",
  errorText: "#7A1A14",
  disabled: "#C9C6E3",
  pillBorder: "#CFCAF0",
  track: "#DDD9F4",
  cameraBackground: "#2B2748",
  cameraFace: "#8B80C9",
} as const;

export const FLOW_MIN_TAP = 44;
