import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import {
  LessonHistoryEmpty,
  LessonHistoryRow,
} from "../components/profile/LessonHistoryRow";
import { bigkas, MIN_TAP } from "../constant/bigkasTheme";
import {
  getLessonHistory,
  LessonHistoryEntry,
  PROFILE_DIALECTS,
  ProfileDialect,
} from "../services/profileService";

type Filter = "All" | ProfileDialect;
const FILTERS: Filter[] = ["All", ...PROFILE_DIALECTS];

// Every structured-lesson attempt saved in lesson_completions, newest
// first, opened from "See all" on the Profile screen. (Practice game plays
// are listed separately in app/game-history.tsx.)
export default function LessonHistoryScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [loading, setLoading] = useState(true);
  const [history, setHistory] = useState<LessonHistoryEntry[]>([]);
  const [filter, setFilter] = useState<Filter>("All");

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      getLessonHistory().then((entries) => {
        if (cancelled) return;
        setHistory(entries);
        setLoading(false);
      });
      return () => {
        cancelled = true;
      };
    }, []),
  );

  function goBack() {
    if (router.canGoBack()) router.back();
    else router.replace("/profile" as any);
  }

  const shown =
    filter === "All"
      ? history
      : history.filter((entry) => entry.dialect === filter);

  return (
    <SafeAreaView style={styles.container} edges={["left", "right"]}>
      <View style={[styles.statusBarFill, { height: insets.top }]} />

      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={goBack}
          accessibilityRole="button"
          accessibilityLabel="Back"
          hitSlop={4}
        >
          <Ionicons name="chevron-back" size={24} color={bigkas.white} />
        </Pressable>
        <Text style={styles.headerTitle}>Game history</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: insets.bottom + 32 }}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filters}
          accessibilityRole="tablist"
        >
          {FILTERS.map((name) => {
            const active = filter === name;
            return (
              <Pressable
                key={name}
                style={[styles.filter, active && styles.filterActive]}
                onPress={() => setFilter(name)}
                accessibilityRole="tab"
                accessibilityState={{ selected: active }}
              >
                <Text
                  style={[styles.filterText, active && styles.filterTextActive]}
                >
                  {name}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        <View style={styles.card}>
          {loading ? (
            <ActivityIndicator
              style={styles.loading}
              size="large"
              color={bigkas.primary}
            />
          ) : shown.length === 0 ? (
            <LessonHistoryEmpty />
          ) : (
            shown.map((entry, index) => (
              <LessonHistoryRow
                key={entry.lessonId}
                entry={entry}
                last={index === shown.length - 1}
              />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bigkas.background,
  },
  statusBarFill: {
    backgroundColor: bigkas.primary,
  },
  header: {
    backgroundColor: bigkas.primary,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  backButton: {
    width: MIN_TAP,
    height: MIN_TAP,
    borderRadius: MIN_TAP / 2,
    backgroundColor: "rgba(255,255,255,0.14)",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: bigkas.white,
  },
  filters: {
    paddingHorizontal: 16,
    paddingTop: 16,
    gap: 8,
  },
  filter: {
    minHeight: MIN_TAP,
    paddingHorizontal: 16,
    borderRadius: MIN_TAP / 2,
    borderWidth: 1,
    borderColor: bigkas.border,
    backgroundColor: bigkas.white,
    alignItems: "center",
    justifyContent: "center",
  },
  filterActive: {
    backgroundColor: bigkas.primary,
    borderColor: bigkas.primary,
  },
  filterText: {
    fontSize: 14,
    fontWeight: "700",
    color: bigkas.ink,
  },
  filterTextActive: {
    color: bigkas.white,
  },
  card: {
    marginTop: 14,
    marginHorizontal: 16,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 24,
    backgroundColor: bigkas.white,
    borderWidth: 1,
    borderColor: bigkas.border,
  },
  loading: {
    paddingVertical: 32,
  },
});
