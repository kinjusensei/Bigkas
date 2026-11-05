import { Ionicons } from "@expo/vector-icons";
import type { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

import { FLOW } from "./practiceTheme";

type Props = {
  correct: boolean;
  children: ReactNode;
};

// Right or wrong after checking an answer: always an icon plus text.
export default function FeedbackStrip({ correct, children }: Props) {
  return (
    <View
      style={[styles.strip, correct ? styles.good : styles.bad]}
      accessibilityLiveRegion="polite"
    >
      <View
        style={[
          styles.circle,
          { backgroundColor: correct ? FLOW.success : FLOW.error },
        ]}
      >
        <Ionicons
          name={correct ? "checkmark" : "close"}
          size={17}
          color={FLOW.white}
        />
      </View>
      <Text
        style={[
          styles.text,
          { color: correct ? FLOW.successText : FLOW.errorText },
        ]}
      >
        {children}
      </Text>
    </View>
  );
}

export function FeedbackBold({ children }: { children: ReactNode }) {
  return <Text style={styles.bold}>{children}</Text>;
}

const styles = StyleSheet.create({
  strip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 15,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 16,
  },

  good: { backgroundColor: FLOW.successTint },

  bad: { backgroundColor: FLOW.errorTint },

  circle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },

  text: { flex: 1, fontSize: 15, lineHeight: 21, fontWeight: "700" },

  bold: { fontWeight: "800" },
});
