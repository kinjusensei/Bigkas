import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { bigkas, MIN_TAP } from "../../constant/bigkasTheme";
import { LessonHistoryEntry } from "../../services/profileService";

const mascotImage = require("../../assets/images/bigkas-mascot.png");

// One lesson attempt: "L3", title, language and assessment score, the XP
// earned and a Passed / Not passed tag. Used by the Profile screen and the
// full lesson history list.
export function LessonHistoryRow({
  entry,
  last,
}: {
  entry: LessonHistoryEntry;
  last?: boolean;
}) {
  const score = entry.bestScore === null ? "—" : `${entry.bestScore}%`;
  // A passed lesson stays "Passed" even if a later attempt was surrendered.
  const status = entry.passed
    ? "Passed"
    : entry.surrendered
      ? "Surrendered"
      : "Not passed";
  const label = `Lesson ${entry.lessonNumber ?? ""}, ${entry.title}, ${
    entry.dialect ?? ""
  }, assessment score ${entry.bestScore === null ? "not saved" : score}, ${
    entry.xpEarned
  } XP, ${status.toLowerCase()}`;

  return (
    <View
      style={[styles.row, !last && styles.rowDivider]}
      accessible
      accessibilityLabel={label}
    >
      <View style={styles.lessonBox}>
        <Text style={styles.lessonBoxText}>L{entry.lessonNumber ?? "?"}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {entry.title}
        </Text>
        <Text style={styles.meta} numberOfLines={1}>
          {entry.dialect ?? "Lesson"} · assessment score {score}
        </Text>
      </View>

      <View style={styles.right}>
        <Text style={styles.xp}>+{entry.xpEarned} XP</Text>
        <View
          style={[styles.tag, entry.passed ? styles.tagPass : styles.tagFail]}
        >
          <Text
            style={[
              styles.tagText,
              entry.passed ? styles.tagTextPass : styles.tagTextFail,
            ]}
          >
            {status}
          </Text>
        </View>
      </View>
    </View>
  );
}

export function LessonHistoryEmpty() {
  const router = useRouter();
  return (
    <View style={styles.empty}>
      <Image
        source={mascotImage}
        style={styles.emptyImage}
        resizeMode="contain"
        accessibilityIgnoresInvertColors
      />
      <Text style={styles.emptyTitle}>No games yet</Text>
      <Text style={styles.emptyText}>
        Finish a lesson and it will show up here.
      </Text>
      <Pressable
        style={({ pressed }) => [styles.emptyButton, pressed && styles.pressed]}
        onPress={() => router.push("/lessons")}
        accessibilityRole="button"
      >
        <Text style={styles.emptyButtonText}>Go to lessons</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    minHeight: 64,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 10,
  },
  rowDivider: {
    borderBottomWidth: 1,
    borderBottomColor: bigkas.border,
  },
  lessonBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: bigkas.chip,
    alignItems: "center",
    justifyContent: "center",
  },
  lessonBoxText: {
    fontSize: 15,
    fontWeight: "800",
    color: bigkas.primary,
  },
  info: {
    flex: 1,
    minWidth: 0,
  },
  title: {
    fontSize: 15,
    fontWeight: "800",
    color: bigkas.ink,
  },
  meta: {
    marginTop: 2,
    fontSize: 12,
    color: bigkas.muted,
  },
  right: {
    alignItems: "flex-end",
    gap: 4,
  },
  xp: {
    fontSize: 14,
    fontWeight: "800",
    color: bigkas.ink,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  tagPass: {
    backgroundColor: "#E3F5EB",
  },
  tagFail: {
    backgroundColor: bigkas.locked,
  },
  tagText: {
    fontSize: 11,
    fontWeight: "800",
  },
  tagTextPass: {
    color: bigkas.success,
  },
  tagTextFail: {
    color: bigkas.muted,
  },
  empty: {
    alignItems: "center",
    paddingVertical: 16,
  },
  emptyImage: {
    width: 88,
    height: 88,
  },
  emptyTitle: {
    marginTop: 8,
    fontSize: 17,
    fontWeight: "800",
    color: bigkas.ink,
  },
  emptyText: {
    marginTop: 4,
    fontSize: 14,
    textAlign: "center",
    color: bigkas.muted,
  },
  emptyButton: {
    marginTop: 14,
    minHeight: MIN_TAP,
    paddingHorizontal: 20,
    borderRadius: 14,
    backgroundColor: bigkas.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyButtonText: {
    fontSize: 15,
    fontWeight: "800",
    color: bigkas.white,
  },
  pressed: {
    opacity: 0.8,
  },
});
