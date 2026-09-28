import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface GameCardProps {
  title: string;
  subtitle: string;
  dialect: string;
  difficulty: string;
}

export default function GameCard({
  title,
  subtitle,
  dialect,
  difficulty,
}: GameCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>{subtitle}</Text>

      <View style={styles.badges}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{difficulty}</Text>
        </View>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>{dialect}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    minHeight: 250,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 5,
  },

  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#222",
    marginTop: 20,
    textAlign: "center",
  },

  subtitle: {
    marginTop: 10,
    textAlign: "center",
    color: "#777",
    fontSize: 15,
  },

  badges: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    gap: 12,
  },

  badge: {
    backgroundColor: "#ECEBFF",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },

  badgeText: {
    color: "#410FA3",
    fontWeight: "700",
  },
});
