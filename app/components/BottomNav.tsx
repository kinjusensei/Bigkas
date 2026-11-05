import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { bigkas, MIN_TAP } from "../../constant/bigkasTheme";

type BottomNavProps = {
  active?: "lessons" | "home" | "story";
  // Lift the bar above the device's navigation bar. Screens whose
  // SafeAreaView already pads the bottom edge leave this off.
  respectSafeArea?: boolean;
};

// Height of the bar itself; screens add this (plus the bottom offset) to
// their scroll padding so the last card isn't hidden behind it.
export const BOTTOM_NAV_HEIGHT = 64;
export const BOTTOM_NAV_GAP = 12;

const ITEMS = [
  {
    key: "lessons",
    label: "Lessons",
    icon: "book-outline",
    activeIcon: "book",
    route: "/lessons",
  },
  {
    key: "home",
    label: "Home",
    icon: "home-outline",
    activeIcon: "home",
    route: "/dashboard",
  },
  {
    key: "story",
    label: "Story",
    icon: "map-outline",
    activeIcon: "map",
    route: "/story",
  },
] as const;

export default function BottomNav({
  active,
  respectSafeArea = false,
}: BottomNavProps) {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const bottom = BOTTOM_NAV_GAP + (respectSafeArea ? insets.bottom : 0);

  return (
    <View style={[styles.bottomNav, { bottom }]}>
      {ITEMS.map((item) => {
        const isActive = active === item.key;
        return (
          <TouchableOpacity
            key={item.key}
            style={[styles.navItem, isActive && styles.navItemActive]}
            // Already on this screen — don't reload it.
            onPress={() => {
              if (!isActive) router.replace(item.route);
            }}
            activeOpacity={0.8}
            accessibilityRole="tab"
            accessibilityState={{ selected: isActive }}
            accessibilityLabel={item.label}
          >
            <Ionicons
              name={isActive ? item.activeIcon : item.icon}
              size={22}
              color={isActive ? bigkas.white : bigkas.muted}
            />
            <Text
              style={[styles.navText, isActive && styles.activeText]}
              numberOfLines={1}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    position: "absolute",
    left: 16,
    right: 16,
    height: BOTTOM_NAV_HEIGHT,
    paddingHorizontal: 8,
    backgroundColor: bigkas.white,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: bigkas.border,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    shadowColor: bigkas.ink,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 14,
    elevation: 12,
    zIndex: 100,
  },
  navItem: {
    flex: 1,
    minHeight: MIN_TAP + 4,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
  },
  navItemActive: {
    backgroundColor: bigkas.primary,
  },
  navText: {
    marginTop: 2,
    fontSize: 12,
    fontWeight: "700",
    color: bigkas.muted,
  },
  activeText: {
    color: bigkas.white,
  },
});
