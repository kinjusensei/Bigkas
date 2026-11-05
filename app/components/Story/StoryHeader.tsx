import { Ionicons } from "@expo/vector-icons";
import { ReactNode } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Shared look for the Story list and Chapters screens.
export const STORY_COLORS = {
  primary: "#5B50B0",
  background: "#F5F4FA",
  card: "#FFFFFF",
  text: "#1C1A2E",
  textSecondary: "#5E5A75",
  tileBg: "#EEEBFB",
  dotInactive: "#D9D5EC",
  track: "#EEEBF7",
  cardBorder: "#ECEAF4",
  doneBadge: "#E3F5EA",
  doneIcon: "#16663A",
  lockedCard: "#EEEDF3",
  lockedBorder: "#E2E0EA",
  lockedBadge: "#DEDCE6",
  lockedTitle: "#4A475C",
};

type StoryHeaderProps = {
  title: string;
  onBack: () => void;
  backLabel: string;
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
};

// Purple header with rounded bottom corners that runs up behind the
// status bar: back button, centered title, and optional content below.
export default function StoryHeader({
  title,
  onBack,
  backLabel,
  children,
  style,
}: StoryHeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.header, { paddingTop: insets.top + 12 }, style]}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={onBack}
          style={styles.backButton}
          accessibilityRole="button"
          accessibilityLabel={backLabel}
        >
          <Ionicons name="chevron-back" size={22} color="#FFFFFF" />
        </TouchableOpacity>

        <Text style={styles.title}>{title}</Text>

        <View style={styles.spacer} />
      </View>

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    backgroundColor: STORY_COLORS.primary,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  backButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.16)",
  },

  title: {
    fontSize: 17,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  spacer: {
    width: 44,
  },
});
