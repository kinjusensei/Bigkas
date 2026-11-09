/**
 * FERAdminButton.tsx
 * Drop this anywhere in your app to access the FER data screen.
 * Only visible in dev builds (__DEV__).
 *
 * Usage — paste anywhere, e.g. your home screen or settings:
 *   import { FERAdminButton } from "../components/fer/FERAdminButton";
 *   ...
 *   <FERAdminButton />
 */

import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function FERAdminButton() {
  if (!__DEV__) return null;

  return (
    <View style={styles.wrap}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => router.push("/fer-data")}
        activeOpacity={0.8}
      >
        <Text style={styles.icon}>🧠</Text>
        <Text style={styles.label}>FER Training Data</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: "center",
    marginVertical: 8,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#1a1a2e",
    borderColor: "#4f46e5",
    borderWidth: 1.5,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 18,
    minHeight: 44,
  },
  icon: { fontSize: 18 },
  label: { color: "#a5b4fc", fontWeight: "600", fontSize: 14 },
});
