import { ReactNode } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import BottomNav from "./BottomNav";

type AppScreenProps = {
  children: ReactNode;
  showBottomNav?: boolean;
  active?: "lessons" | "home" | "story";
  // Paints the status-bar area this color so a colored page header runs
  // all the way to the top of the screen.
  topInsetColor?: string;
};

export default function AppScreen({
  children,
  showBottomNav = false,
  active,
  topInsetColor,
}: AppScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={
        topInsetColor
          ? ["bottom", "left", "right"]
          : ["top", "bottom", "left", "right"]
      }
    >
      {topInsetColor ? (
        <View style={{ height: insets.top, backgroundColor: topInsetColor }} />
      ) : null}
      <View style={styles.screen}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>

        {showBottomNav ? (
          <View style={styles.bottomNavArea}>
            <BottomNav active={active} />
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  screen: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 32,
  },
  bottomNavArea: {
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});
