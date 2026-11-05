import { Ionicons } from "@expo/vector-icons";
import { ReactNode, useEffect, useRef, useState } from "react";
import {
  LayoutChangeEvent,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { colors } from "../../constant/theme";
import { LESSON_COLORS, MIN_TOUCH } from "./lessonStyles";

// Frame shared by every structured lesson step: purple header (back,
// title, step subtitle, XP pill), progress bar, scrolling content and a
// fixed bottom bar. The content is padded by the bar's measured height
// plus the Android navigation inset so nothing hides behind them.

export const SURRENDER_RED = "#B3261E";

export type LessonFooterButton = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  accessibilityLabel?: string;
};

type Props = {
  title: string;
  subtitle: string;
  progress: number;
  xpEarned?: number;
  xpTotal?: number;
  onBack: () => void;
  // Once the lesson has started the back button becomes "Surrender".
  onSurrender?: () => void;
  // Changing this scrolls the content back to the top.
  scrollKey: string;
  previous?: LessonFooterButton;
  primary: LessonFooterButton;
  children: ReactNode;
};

export default function LessonShell({
  title,
  subtitle,
  progress,
  xpEarned,
  xpTotal,
  onBack,
  onSurrender,
  scrollKey,
  previous,
  primary,
  children,
}: Props) {
  const insets = useSafeAreaInsets();
  const scrollRef = useRef<ScrollView>(null);
  const [footerHeight, setFooterHeight] = useState(88);
  const bottomInset = Math.max(insets.bottom, 12);

  useEffect(() => {
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }, [scrollKey]);

  const handleFooterLayout = (event: LayoutChangeEvent) => {
    setFooterHeight(event.nativeEvent.layout.height);
  };

  const clampedProgress = Math.min(Math.max(progress, 0), 1);

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
      <View style={styles.screen}>
        <View style={styles.header}>
          {onSurrender ? (
            <TouchableOpacity
              style={styles.surrenderButton}
              onPress={onSurrender}
              accessibilityRole="button"
              accessibilityLabel="Surrender this lesson"
            >
              <Ionicons name="flag-outline" size={16} color={SURRENDER_RED} />
              <Text style={styles.surrenderText}>Surrender</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.backButton}
              onPress={onBack}
              accessibilityRole="button"
              accessibilityLabel="Leave lesson"
            >
              <Ionicons name="arrow-back" size={21} color={colors.textOnPrimary} />
            </TouchableOpacity>
          )}

          <View style={styles.headerTitleGroup}>
            <Text style={styles.headerTitle} numberOfLines={1}>
              {title}
            </Text>
            <Text style={styles.headerSubtitle} numberOfLines={1}>
              {subtitle}
            </Text>
          </View>

          {xpTotal ? (
            <View
              style={styles.xpPill}
              accessibilityLabel={`${xpEarned ?? 0} of ${xpTotal} XP earned`}
            >
              <Text style={styles.xpText}>
                {xpEarned ?? 0} / {xpTotal} XP
              </Text>
            </View>
          ) : null}
        </View>

        <View style={styles.progressTrack}>
          <View
            style={[
              styles.progressFill,
              { width: `${clampedProgress * 100}%` },
            ]}
          />
        </View>

        <ScrollView
          ref={scrollRef}
          style={styles.scroll}
          contentContainerStyle={[
            styles.scrollContent,
            { paddingBottom: footerHeight + 24 },
          ]}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {children}
        </ScrollView>

        <View
          style={[styles.bottomBar, { paddingBottom: bottomInset }]}
          onLayout={handleFooterLayout}
        >
          {previous ? (
            <Pressable
              style={[
                styles.previousButton,
                previous.disabled && styles.disabledButton,
              ]}
              onPress={previous.onPress}
              disabled={previous.disabled}
              accessibilityRole="button"
              accessibilityLabel={previous.accessibilityLabel ?? previous.label}
              accessibilityState={{ disabled: !!previous.disabled }}
            >
              <Ionicons name="arrow-back" size={16} color={LESSON_COLORS.purple} />
              <Text style={styles.previousText}>{previous.label}</Text>
            </Pressable>
          ) : null}
          <Pressable
            style={[
              styles.nextButton,
              primary.disabled && styles.disabledButton,
            ]}
            onPress={primary.onPress}
            disabled={primary.disabled}
            accessibilityRole="button"
            accessibilityLabel={primary.accessibilityLabel ?? primary.label}
            accessibilityState={{ disabled: !!primary.disabled }}
          >
            <Text style={styles.nextText}>{primary.label}</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: LESSON_COLORS.purple },
  screen: { flex: 1, backgroundColor: LESSON_COLORS.page },
  header: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 64,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: LESSON_COLORS.purple,
  },
  backButton: {
    width: MIN_TOUCH,
    height: MIN_TOUCH,
    borderRadius: MIN_TOUCH / 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.overlayWhite,
  },
  surrenderButton: {
    minHeight: MIN_TOUCH,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 12,
    borderRadius: MIN_TOUCH / 2,
    borderWidth: 1.5,
    borderColor: SURRENDER_RED,
    backgroundColor: "#FFFFFF",
  },
  surrenderText: { color: SURRENDER_RED, fontSize: 14, fontWeight: "800" },
  headerTitleGroup: { flex: 1, marginHorizontal: 12 },
  headerTitle: {
    color: colors.textOnPrimary,
    fontSize: 17,
    fontWeight: "800",
  },
  headerSubtitle: {
    marginTop: 2,
    color: colors.textOnPrimaryMuted,
    fontSize: 13,
    fontWeight: "600",
  },
  xpPill: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.18)",
  },
  xpText: { color: colors.textOnPrimary, fontSize: 12, fontWeight: "800" },
  progressTrack: { height: 6, backgroundColor: colors.primaryBorder },
  progressFill: { height: "100%", backgroundColor: LESSON_COLORS.darkPurple },
  scroll: { flex: 1 },
  scrollContent: { padding: 16, gap: 14 },
  bottomBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 16,
    paddingTop: 12,
    backgroundColor: LESSON_COLORS.surface,
    borderTopWidth: 1,
    borderTopColor: LESSON_COLORS.border,
  },
  previousButton: {
    minWidth: 124,
    minHeight: 50,
    flexDirection: "row",
    gap: 6,
    paddingHorizontal: 16,
    borderRadius: 13,
    borderWidth: 1.5,
    borderColor: LESSON_COLORS.purple,
    alignItems: "center",
    justifyContent: "center",
  },
  previousText: {
    color: LESSON_COLORS.purple,
    fontSize: 15,
    fontWeight: "800",
  },
  nextButton: {
    flex: 1,
    minHeight: 50,
    paddingHorizontal: 12,
    borderRadius: 13,
    backgroundColor: LESSON_COLORS.purple,
    alignItems: "center",
    justifyContent: "center",
  },
  nextText: { color: colors.textOnPrimary, fontSize: 16, fontWeight: "800" },
  disabledButton: { opacity: 0.4 },
});
