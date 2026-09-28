import { useRouter } from "expo-router";
import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  LEGAL_SOURCES,
  PRIVACY_POLICY_EFFECTIVE,
  PRIVACY_SECTIONS,
  PRIVACY_SUMMARY,
} from "../data/privacyPolicy";

const PURPLE = "#410FA3";

export default function PrivacyPolicyScreen() {
  const router = useRouter();

  const handleBackPress = () => {
    if (router.canGoBack()) router.back();
    else router.replace("/login" as any);
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <View style={styles.header}>
        <Pressable onPress={handleBackPress} hitSlop={10} style={styles.headerSide}>
          <Text style={styles.backText}>‹ Back</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Privacy Policy</Text>
        <View style={styles.headerSide} />
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.effective}>Effective {PRIVACY_POLICY_EFFECTIVE}</Text>

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
            This policy follows these Philippine laws and National Privacy Commission issuances.
            Tap one to read it on the official website.
          </Text>
          {LEGAL_SOURCES.map((source) => (
            <Pressable
              key={source.url}
              onPress={() => Linking.openURL(source.url)}
              accessibilityRole="link"
              style={({ pressed }) => [styles.sourceRow, pressed && { opacity: 0.6 }]}
            >
              <Text style={styles.sourceText}>{source.label}</Text>
              <Text style={styles.sourceArrow}>↗</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
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
  headerSide: { minWidth: 70 },
  backText: { fontSize: 16, color: PURPLE, fontWeight: "600" },
  headerTitle: { fontSize: 17, fontWeight: "700", color: "#1a1a1a" },

  scroll: { padding: 24, paddingBottom: 48 },
  effective: { fontSize: 13, color: "#6B7280", marginBottom: 16 },

  summaryBox: {
    backgroundColor: "#EFEAF9",
    borderRadius: 14,
    padding: 16,
    marginBottom: 24,
  },
  summaryTitle: { fontSize: 15, fontWeight: "700", color: PURPLE, marginBottom: 6 },
  summaryText: { fontSize: 15, color: "#1a1a1a", lineHeight: 22 },

  section: { marginBottom: 24 },
  sectionHeading: { fontSize: 17, fontWeight: "700", color: "#1a1a1a", marginBottom: 8 },
  paragraph: { fontSize: 15, color: "#374151", lineHeight: 23, marginBottom: 10 },

  sourceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 12,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#E5E7EB",
  },
  sourceText: { flex: 1, fontSize: 14, color: PURPLE, fontWeight: "600", lineHeight: 20 },
  sourceArrow: { fontSize: 16, color: PURPLE },
});
