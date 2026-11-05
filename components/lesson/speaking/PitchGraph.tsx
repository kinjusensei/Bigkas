import { useState } from "react";
import { LayoutChangeEvent, StyleSheet, Text, View } from "react-native";

import { LESSON_COLORS } from "../lessonStyles";
import { PitchPoint } from "./pitch";

type Props = {
  guide: PitchPoint[];
  learner?: PitchPoint[];
  band?: { min: number; max: number };
  height?: number;
  // Shown inside the graph when there's no learner line yet.
  placeholder?: string;
};

const DOT = 4;

// Small pitch graph drawn with plain Views (no chart library): the target
// band, the guide line (dashed) and the learner's line. Log scale, so a
// rise looks the same in a low or high voice.
export default function PitchGraph({
  guide,
  learner,
  band,
  height = 120,
  placeholder,
}: Props) {
  const [width, setWidth] = useState(0);
  const onLayout = (event: LayoutChangeEvent) =>
    setWidth(event.nativeEvent.layout.width);

  const all = [
    ...guide.map((p) => p.hz),
    ...(learner ?? []).map((p) => p.hz),
    ...(band ? [band.min, band.max] : []),
  ];
  const low = Math.log2(Math.max(50, Math.min(...all) * 0.85));
  const high = Math.log2(Math.max(...all) * 1.15);
  const y = (hz: number) =>
    height - ((Math.log2(hz) - low) / Math.max(0.01, high - low)) * height;
  const x = (t: number) => t * Math.max(0, width - DOT);

  // Dashed guide: every other point of a dense resample.
  const guideDots: PitchPoint[] = [];
  for (let i = 0; i < guide.length - 1; i += 1) {
    for (let s = 0; s < 3; s += 1) {
      const f = s / 3;
      guideDots.push({
        t: guide[i].t + (guide[i + 1].t - guide[i].t) * f,
        hz: guide[i].hz + (guide[i + 1].hz - guide[i].hz) * f,
      });
    }
  }

  return (
    <View>
      <View
        style={[styles.graph, { height }]}
        onLayout={onLayout}
        accessibilityLabel="Pitch graph"
      >
        {width > 0 && band ? (
          <View
            style={[
              styles.band,
              { top: y(band.max), height: Math.max(4, y(band.min) - y(band.max)) },
            ]}
          />
        ) : null}
        {width > 0
          ? guideDots
              .filter((_, index) => index % 2 === 0)
              .map((point, index) => (
                <View
                  key={`g-${index}`}
                  style={[
                    styles.guideDot,
                    { left: x(point.t), top: y(point.hz) - 1 },
                  ]}
                />
              ))
          : null}
        {width > 0 && learner
          ? learner.map((point, index) => (
              <View
                key={`l-${index}`}
                style={[
                  styles.learnerDot,
                  { left: x(point.t), top: y(point.hz) - DOT / 2 },
                ]}
              />
            ))
          : null}
        {!learner?.length && placeholder ? (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>{placeholder}</Text>
          </View>
        ) : null}
      </View>
      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.legendSwatch, styles.legendGuide]} />
          <Text style={styles.legendText}>Guide shape</Text>
        </View>
        {learner?.length ? (
          <View style={styles.legendItem}>
            <View style={[styles.legendSwatch, styles.legendLearner]} />
            <Text style={styles.legendText}>You</Text>
          </View>
        ) : null}
        {band ? (
          <View style={styles.legendItem}>
            <View style={[styles.legendSwatch, styles.legendBand]} />
            <Text style={styles.legendText}>Target range</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  graph: {
    overflow: "hidden",
    borderRadius: 12,
    backgroundColor: LESSON_COLORS.page,
  },
  band: {
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: "rgba(91,80,176,0.12)",
  },
  guideDot: {
    position: "absolute",
    width: 6,
    height: 2,
    borderRadius: 1,
    backgroundColor: LESSON_COLORS.textSecondary,
  },
  learnerDot: {
    position: "absolute",
    width: DOT,
    height: DOT,
    borderRadius: DOT / 2,
    backgroundColor: LESSON_COLORS.purple,
  },
  placeholder: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  placeholderText: {
    color: LESSON_COLORS.textSecondary,
    fontSize: 12,
    textAlign: "center",
  },
  legend: { flexDirection: "row", flexWrap: "wrap", gap: 12, marginTop: 6 },
  legendItem: { flexDirection: "row", alignItems: "center", gap: 6 },
  legendSwatch: { width: 14, height: 4, borderRadius: 2 },
  legendGuide: { backgroundColor: LESSON_COLORS.textSecondary },
  legendLearner: { backgroundColor: LESSON_COLORS.purple },
  legendBand: { height: 10, backgroundColor: "rgba(91,80,176,0.2)" },
  legendText: { color: LESSON_COLORS.textSecondary, fontSize: 11 },
});
