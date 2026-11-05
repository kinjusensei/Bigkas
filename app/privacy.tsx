import { useLocalSearchParams, useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
  LayoutChangeEvent,
  Linking,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  LEGAL_SOURCES,
  PRIVACY_POLICY_EFFECTIVE,
  PRIVACY_SECTIONS,
  PRIVACY_SUMMARY,
} from "../data/privacyPolicy";
import { acceptPrivacyPolicy } from "../services/privacyConsent";

const PURPLE = "#410FA3";
/** How close (px) to the bottom counts as "reached the end". */
const END_THRESHOLD = 24;

export default function PrivacyPolicyScreen() {
  const router = useRouter();

  // Opened from create-account with ?mode=consent → show the Allow footer.
  // Opened from anywhere else → plain read-only policy, same as before.
  const { mode } = useLocalSearchParams<{ mode?: string }>();
  const consentMode = mode === "consent";

  const [reachedEnd, setReachedEnd] = useState(false);
  const [progress, setProgress] = useState(0);
  const viewportHeight = useRef(0);
  const contentHeight = useRef(0);

  const goBack = () => {
    if (router.canGoBack()) router.back();
    else router.replace((consentMode ? "/create-account" : "/login") as any);
  };

  const markEnd = () => {
    setReachedEnd(true);
    setProgress(1);
  };

  // If the policy is short enough to fit without scrolling, don't trap the user.
  const checkIfFits = () => {
    if (
      viewportHeight.current > 0 &&
      contentHeight.current > 0 &&
      contentHeight.current <= viewportHeight.current + END_THRESHOLD
    ) {
      markEnd();
    }
  };

  const handleLayout = (e: LayoutChangeEvent) => {
    viewportHeight.current = e.nativeEvent.layout.height;
    checkIfFits();
  };

  const handleContentSizeChange = (_w: number, h: number) => {
    contentHeight.current = h;
    checkIfFits();
  };

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (!consentMode || reachedEnd) return;
    const { layoutMeasurement, contentOffset, contentSize } = e.nativeEvent;
    const maxScroll = contentSize.height - layoutMeasurement.height;
    const p =
      maxScroll <= 0
        ? 1
        : Math.min(1, Math.max(0, contentOffset.y / maxScroll));
    setProgress(p);
    if (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - END_THRESHOLD
    ) {
      markEnd();
    }
  };

  const handleAllow = () => {
    if (!reachedEnd) return;
    acceptPrivacyPolicy();
    goBack(); // back to create-account, which now shows the box checked
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <View style={styles.header}>
        <Pressable onPress={goBack} hitSlop={10} style={styles.headerSide}>
          <Text style={styles.backText}>‹ Back</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Privacy Policy</Text>
        <View style={styles.headerSide} />
      </View>

      {consentMode && (
        <View style={styles.progressTrack}>
          <View
            style={[
              styles.progressFill,
              { width: `${Math.round(progress * 100)}%` },
            ]}
          />
        </View>
      )}

      <ScrollView
        contentContainerStyle={[
          styles.scroll,
          consentMode && { paddingBottom: 24 },
        ]}
        onScroll={handleScroll}
        scrollEventThrottle={32}
        onLayout={consentMode ? handleLayout : undefined}
        onContentSizeChange={consentMode ? handleContentSizeChange : undefined}
      >
        <Text style={styles.effective}>
          Effective {PRIVACY_POLICY_EFFECTIVE}
        </Text>

        <View style={styles.summaryBox}>
          <Text style={styles.summaryTitle}>In short</Text>
          <Text style={styles.summaryText}>{PRIVACY_SUMMARY}</Text>
        </View>

        {PRIVACY_SECTIONS.map((section) => (
          <View key={section.heading} style={styles.section}>
            <Text style={styles.sectionHeading}>{section.heading}</Text>
            {section.paragraphs.map((p, i) => (
              <Text key={i} style={styles.paragraph}>
                {p}
              </Text>
            ))}
          </View>
        ))}

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Laws and official guidance</Text>
          <Text style={styles.paragraph}>
            This policy follows these Philippine laws and National Privacy
            Commission issuances. Tap one to read it on the official website.
          </Text>
          {LEGAL_SOURCES.map((source) => (
            <Pressable
              key={source.url}
              onPress={() => Linking.openURL(source.url)}
              accessibilityRole="link"
              style={({ pressed }) => [
                styles.sourceRow,
                pressed && { opacity: 0.6 },
              ]}
            >
              <Text style={styles.sourceText}>{source.label}</Text>
              <Text style={styles.sourceArrow}>↗</Text>
            </Pressable>
          ))}
        </View>

        {consentMode && (
          <Text style={styles.endText}>End of Privacy Policy</Text>
        )}
      </ScrollView>

      {consentMode && (
        <View style={styles.footer}>
          <Text
            style={[styles.footerHint, reachedEnd && styles.footerHintDone]}
          >
            {reachedEnd
              ? "You've reached the end"
              : "↓ Scroll to the end to allow"}
          </Text>
          <Pressable
            onPress={handleAllow}
            disabled={!reachedEnd}
            accessibilityRole="button"
            accessibilityState={{ disabled: !reachedEnd }}
            accessibilityHint={
              reachedEnd
                ? undefined
                : "Scroll to the end of the policy to enable this button"
            }
            style={({ pressed }) => [
              styles.allowBtn,
              !reachedEnd && styles.allowBtnDisabled,
              pressed && reachedEnd && { opacity: 0.85 },
            ]}
          >
            <Text
              style={[
                styles.allowBtnText,
                !reachedEnd && styles.allowBtnTextDisabled,
              ]}
            >
              Allow
            </Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#E5E7EB",
  },
  headerSide: { minWidth: 80 },
  backText: { fontSize: 19, color: PURPLE, fontWeight: "600" },
  headerTitle: { fontSize: 21, fontWeight: "700", color: "#1a1a1a" },

  progressTrack: { height: 3, backgroundColor: "#EFEAF9" },
  progressFill: { height: 3, backgroundColor: PURPLE },

  scroll: { padding: 24, paddingBottom: 48 },
  effective: { fontSize: 17, color: "#4B5563", marginBottom: 16 },

  summaryBox: {
    backgroundColor: "#EFEAF9",
    borderRadius: 14,
    padding: 16,
    marginBottom: 24,
  },
  summaryTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: PURPLE,
    marginBottom: 6,
  },
  summaryText: { fontSize: 19, color: "#1a1a1a", lineHeight: 29 },

  section: { marginBottom: 24 },
  sectionHeading: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 19,
    color: "#1F2937",
    lineHeight: 30,
    marginBottom: 10,
  },

  sourceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 12,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#E5E7EB",
  },
  sourceText: {
    flex: 1,
    fontSize: 18,
    color: PURPLE,
    fontWeight: "600",
    lineHeight: 26,
  },
  sourceArrow: { fontSize: 22, color: PURPLE },

  endText: { fontSize: 17, color: "#4B5563", textAlign: "center" },

  footer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#E5E7EB",
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 12,
    gap: 10,
    backgroundColor: "#FFFFFF",
  },
  footerHint: { fontSize: 17, color: "#4B5563", textAlign: "center" },
  footerHintDone: { color: PURPLE, fontWeight: "600" },
  allowBtn: {
    backgroundColor: PURPLE,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
  },
  allowBtnDisabled: { backgroundColor: "#E5E7EB" },
  allowBtnText: { color: "#FFFFFF", fontSize: 21, fontWeight: "700" },
  allowBtnTextDisabled: { color: "#4B5563" },
});
