import { Ionicons } from "@expo/vector-icons";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { report } from "./reportTheme";

type Props = {
  name: string;
  typeLabel: string;
  summary: string;
  onHome: () => void;
  onReportAnother: () => void;
};

// Shown only after submitBugReport resolved, i.e. the row was inserted.
export default function ReportSentView({
  name,
  typeLabel,
  summary,
  onHome,
  onReportAnother,
}: Props) {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={[
        styles.content,
        { paddingTop: insets.top + 48, paddingBottom: insets.bottom + 24 },
      ]}
    >
      <View style={styles.checkCircle}>
        <View style={styles.checkInner}>
          <Ionicons name="checkmark" size={44} color={report.white} />
        </View>
      </View>

      <Text style={styles.title} accessibilityRole="header">
        Report sent
      </Text>
      <Text style={styles.body}>
        Thank you{name ? `, ${name}` : ""}. Your report helps make Bigkas better
        for every learner.
      </Text>

      <View style={styles.card}>
        <View style={styles.cardRow}>
          <Text style={styles.cardLabel}>Type</Text>
          <Text style={styles.cardValue}>{typeLabel}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.cardRow}>
          <Text style={styles.cardLabel}>Summary</Text>
          <Text style={styles.cardValue} numberOfLines={2}>
            {summary}
          </Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.cardRow}>
          <Text style={styles.cardLabel}>Status</Text>
          <View style={styles.statusPill}>
            <Text style={styles.statusText}>Received</Text>
          </View>
        </View>
      </View>

      <Pressable
        onPress={onHome}
        style={({ pressed }) => [styles.primary, pressed && styles.pressed]}
        accessibilityRole="button"
        accessibilityLabel="Back to home"
      >
        <Text style={styles.primaryText}>Back to home</Text>
      </Pressable>
      <Pressable
        onPress={onReportAnother}
        style={({ pressed }) => [styles.outlined, pressed && styles.pressed]}
        accessibilityRole="button"
        accessibilityLabel="Report another problem"
      >
        <Text style={styles.outlinedText}>Report another problem</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: report.background,
  },

  content: {
    paddingHorizontal: 20,
    alignItems: "center",
  },

  checkCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: report.chip,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  checkInner: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: report.green,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 26,
    fontWeight: "800",
    color: report.ink,
  },

  body: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
    color: report.muted,
    textAlign: "center",
    marginBottom: 24,
  },

  card: {
    alignSelf: "stretch",
    backgroundColor: report.white,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: report.border,
    paddingHorizontal: 16,
    marginBottom: 24,
  },

  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    minHeight: 52,
  },

  cardLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: report.muted,
  },

  cardValue: {
    flex: 1,
    textAlign: "right",
    fontSize: 14,
    fontWeight: "700",
    color: report.ink,
  },

  divider: {
    height: 1,
    backgroundColor: report.border,
  },

  statusPill: {
    backgroundColor: "#E3F5EB",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },

  statusText: {
    fontSize: 12,
    fontWeight: "800",
    color: report.green,
  },

  primary: {
    alignSelf: "stretch",
    height: 54,
    borderRadius: 14,
    backgroundColor: report.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  primaryText: {
    fontSize: 16,
    fontWeight: "800",
    color: report.white,
  },

  outlined: {
    alignSelf: "stretch",
    height: 54,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: report.primary,
    backgroundColor: report.white,
    alignItems: "center",
    justifyContent: "center",
  },

  outlinedText: {
    fontSize: 16,
    fontWeight: "800",
    color: report.primary,
  },

  pressed: {
    opacity: 0.85,
  },
});
