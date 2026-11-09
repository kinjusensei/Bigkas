// Dev-only: the FER training data screen. In a release build this route
// sends the learner back to the start, so the photos can't be exported there.
import { Redirect, router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FERDataExporter } from "../components/fer/FERDataExporter";

export default function FERDataScreen() {
  if (!__DEV__) return <Redirect href="/" />;
  return (
    <SafeAreaView style={styles.screen}>
      <TouchableOpacity
        style={styles.collectBtn}
        onPress={() => router.push("/fer-collect")}
        accessibilityRole="button"
      >
        <Text style={styles.collectText}>📸 Collect Photos Now</Text>
      </TouchableOpacity>
      <FERDataExporter />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F5F5F5" },
  collectBtn: {
    backgroundColor: "#4f46e5",
    borderRadius: 10,
    minHeight: 48,
    marginHorizontal: 16,
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  collectText: { color: "#FFFFFF", fontWeight: "700", fontSize: 15 },
});
