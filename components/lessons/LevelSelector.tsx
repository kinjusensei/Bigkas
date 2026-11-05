import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { bigkas } from "../../constant/bigkasTheme";
import { TIERS } from "../../utils/lessonTiers";

export type LevelCardState = {
  unlocked: boolean;
  done: number;
  total: number;
  // Replaces the "x of y done" text.
  status?: string;
};

type Props = {
  selected: number;
  states: LevelCardState[];
  onSelect: (tierIndex: number) => void;
};

// Easy / Intermediate / Hard cards. Selecting a locked level only shows
// its locked panel; it never opens a lesson.
export default function LevelSelector({ selected, states, onSelect }: Props) {
  return (
    <View style={styles.row} accessibilityRole="tablist">
      {TIERS.map((tier, index) => {
        const state = states[index];
        const isSelected = index === selected;
        const status = !state.unlocked
          ? "Locked"
          : state.status ??
            (state.done >= state.total
              ? "All done"
              : `${state.done} of ${state.total} done`);
        return (
          <Pressable
            key={tier.key}
            onPress={() => onSelect(index)}
            style={[styles.card, isSelected && styles.cardSelected]}
            accessibilityRole="tab"
            accessibilityLabel={`${tier.name} level, ${status}`}
            accessibilityState={{ selected: isSelected }}
          >
            {!state.unlocked && (
              <View style={styles.lock}>
                <Ionicons name="lock-closed" size={12} color={bigkas.muted} />
              </View>
            )}
            <Bars count={tier.bars} active={state.unlocked} />
            <Text
              style={[styles.name, !state.unlocked && styles.nameLocked]}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              {tier.name}
            </Text>
            <Text style={styles.status} numberOfLines={1}>
              {status}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

function Bars({ count, active }: { count: number; active: boolean }) {
  return (
    <View style={styles.bars}>
      {[0, 1, 2].map((index) => (
        <View
          key={index}
          style={[
            styles.bar,
            { height: 6 + index * 5 },
            index < count
              ? { backgroundColor: active ? bigkas.primary : bigkas.muted }
              : styles.barOff,
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 8,
  },

  card: {
    flex: 1,
    minHeight: 92,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: bigkas.border,
    backgroundColor: bigkas.white,
    padding: 10,
    gap: 4,
  },

  cardSelected: {
    backgroundColor: bigkas.chip,
    borderWidth: 2,
    borderColor: bigkas.primary,
  },

  lock: {
    position: "absolute",
    top: 8,
    right: 8,
  },

  bars: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 3,
    height: 16,
    marginBottom: 4,
  },

  bar: {
    width: 5,
    borderRadius: 2,
  },

  barOff: {
    backgroundColor: bigkas.border,
  },

  name: {
    fontSize: 14,
    fontWeight: "800",
    color: bigkas.ink,
  },

  nameLocked: {
    color: bigkas.muted,
  },

  status: {
    fontSize: 11,
    fontWeight: "600",
    color: bigkas.muted,
  },
});
