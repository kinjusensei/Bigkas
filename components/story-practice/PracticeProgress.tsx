import { Animated, StyleSheet, Text, View } from "react-native";

import { FLOW } from "./practiceTheme";

type Props = {
  index: number; // current question, from 0
  total: number;
  // Width of the bar's fill, as a percentage value.
  barWidth: Animated.AnimatedInterpolation<string | number>;
};

export default function PracticeProgress({ index, total, barWidth }: Props) {
  return (
    <View>
      <View style={styles.track}>
        <Animated.View style={[styles.fill, { width: barWidth }]} />
      </View>

      <View
        style={styles.row}
        accessible
        accessibilityLabel={`Question ${index + 1} of ${total}`}
      >
        <Text style={styles.count}>
          QUESTION {index + 1} OF {total}
        </Text>
        <View style={styles.segments}>
          {Array.from({ length: total }, (_, i) => (
            <View
              key={i}
              style={[styles.segment, i <= index && styles.segmentOn]}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  track: { height: 6, backgroundColor: FLOW.track },

  fill: { height: 6, backgroundColor: FLOW.purple },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 20,
    paddingTop: 15,
  },

  count: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "800",
    letterSpacing: 1.2,
    color: FLOW.purple,
  },

  // Fills the row with 10 questions; fewer stay the same size, on the right.
  segments: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 4,
  },

  segment: {
    flex: 1,
    maxWidth: 17,
    height: 6,
    borderRadius: 3,
    backgroundColor: FLOW.track,
  },

  segmentOn: { backgroundColor: FLOW.purple },
});
