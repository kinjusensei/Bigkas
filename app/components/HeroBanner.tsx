import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface HeroBannerProps {
  image: any;
  title: string;
  subtitle: string;
  difficulty: string;
  dialect: string;
}

export default function HeroBanner({
  image,
  title,
  subtitle,
  difficulty,
  dialect,
}: HeroBannerProps) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>{subtitle}</Text>

      <View style={styles.infoRow}>
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
    alignItems: "center",
    paddingVertical: 20,
  },

  image: {
    width: 220,
    height: 220,
    resizeMode: "contain",
  },

  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#1A1A1A",
    marginTop: 15,
  },

  subtitle: {
    textAlign: "center",
    color: "#777",
    marginTop: 8,
    paddingHorizontal: 20,
  },

  infoRow: {
    flexDirection: "row",
    marginTop: 18,
    gap: 10,
  },

  badge: {
    backgroundColor: "#ECEBFF",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  badgeText: {
    color: "#5B5CFF",
    fontWeight: "700",
  },
});
