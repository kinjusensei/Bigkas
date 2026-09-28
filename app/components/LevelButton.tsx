import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface LevelButtonProps {
  level: number;
  completed: boolean;
  unlocked: boolean;
  selected: boolean;
  stars: number;
  onPress: () => void;
}

export default function LevelButton({
  level,
  completed,
  unlocked,
  selected,
  stars,
  onPress,
}: LevelButtonProps) {
  return (
    <TouchableOpacity
      disabled={!unlocked}
      onPress={onPress}
      style={[
        styles.container,
        selected && styles.selected,
        !unlocked && styles.locked,
      ]}
    >
      <Text style={styles.levelText}>{unlocked ? level : "🔒"}</Text>

      {completed && (
        <View style={styles.stars}>
          {Array.from({ length: stars }).map((_, i) => (
            <Text key={i}>⭐</Text>
          ))}
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 58,
    height: 70,
    borderRadius: 18,
    backgroundColor: "#5B5CFF",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
  },

  selected: {
    borderWidth: 3,
    borderColor: "#22D3EE",
  },

  locked: {
    opacity: 0.4,
  },

  levelText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "800",
  },

  stars: {
    flexDirection: "row",
    marginTop: 5,
  },
});
