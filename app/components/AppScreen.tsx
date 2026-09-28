import { ReactNode } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BottomNav from "./BottomNav";

type AppScreenProps = {
  children: ReactNode;
  showBottomNav?: boolean;
  active?: "lessons" | "home" | "story";
};

export default function AppScreen({
  children,
  showBottomNav = false,
  active,
}: AppScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom", "left", "right"]}>
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
