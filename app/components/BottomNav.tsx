import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type BottomNavProps = {
  active?: "lessons" | "home" | "story";
};

export default function BottomNav({ active }: BottomNavProps) {
  const router = useRouter();

  return (
    <View style={styles.bottomNav}>
      {/* LESSONS */}
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => router.replace("/lessons")}
        activeOpacity={0.8}
      >
        <Image
          source={
            active === "lessons"
              ? require("../../assets/images/Lessons on click.png")
              : require("../../assets/images/Lessons.png")
          }
          style={styles.navImage}
          resizeMode="contain"
        />

        <Text
          style={[styles.navText, active === "lessons" && styles.activeText]}
        >
          Lessons
        </Text>
      </TouchableOpacity>

      {/* HOME */}
      <TouchableOpacity
        style={styles.homeButtonContainer}
        onPress={() => router.replace("/dashboard")}
        activeOpacity={0.85}
      >
        <Image
          source={require("../../assets/images/home botton.png")}
          style={styles.homeButtonImage}
          resizeMode="contain"
        />
      </TouchableOpacity>

      {/* STORY */}
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => router.replace("/story")}
        activeOpacity={0.8}
      >
        <Image
          source={
            active === "story"
              ? require("../../assets/images/Story on click.png")
              : require("../../assets/images/Story.png")
          }
          style={styles.navImage}
          resizeMode="contain"
        />

        <Text style={[styles.navText, active === "story" && styles.activeText]}>
          Story
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    position: "absolute",
    bottom: 18,
    left: 34,
    right: 34,

    height: 88,

    backgroundColor: "#FFFFFF",

    borderRadius: 28,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",

    paddingHorizontal: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.12,
    shadowRadius: 12,

    elevation: 12,

    zIndex: 100,
  },

  navItem: {
    flex: 1,

    height: 88,

    alignItems: "center",
    justifyContent: "center",
  },

  navImage: {
    width: 34,
    height: 34,
  },

  navText: {
    marginTop: 4,

    fontSize: 12,
    fontWeight: "700",

    color: "#777777",
  },

  activeText: {
    color: "#410FA3",
  },

  homeButtonContainer: {
    width: 76,
    height: 76,

    borderRadius: 38,

    backgroundColor: "#410FA3",

    alignItems: "center",
    justifyContent: "center",

    marginTop: -36,

    shadowColor: "#410FA3",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,

    elevation: 12,

    zIndex: 10,
  },

  homeButtonImage: {
    width: 43,
    height: 43,
  },
});
