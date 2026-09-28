import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNotifications } from "../hooks/useNotifications";
import type { AppNotification } from "../services/notificationService";
import { timeAgo } from "../utils/reportStatus";

const C = {
  bg: "#F7F8FA",
  surface: "#FFFFFF",
  unreadSurface: "#EEF4FF",
  text: "#1F2937",
  muted: "#6B7280",
  border: "#E5E7EB",
  accent: "#2E5AAC",
  global: "#2E5AAC",
  globalWell: "#E3EBFB",
  report: "#067647",
  reportWell: "#E3F4EA",
};

export default function NotificationsScreen() {
  const router = useRouter();
  const { items, loading, error, unreadCount, refresh, markRead, markAllRead } =
    useNotifications();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const handleBackPress = () => {
    if (router.canGoBack()) router.back();
    else router.replace("/dashboard");
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await refresh();
    setRefreshing(false);
  };

  const handleItemPress = (item: AppNotification) => {
    setExpandedId((prev) => (prev === item.id ? null : item.id));
    if (!item.is_read) markRead(item.id);
  };

  return (
    <SafeAreaView style={styles.screen} edges={["top", "bottom"]}>
      <View style={styles.header}>
        <Pressable onPress={handleBackPress} hitSlop={10} style={styles.backButton}>
          <Text style={styles.backText}>‹ Back</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Notifications</Text>
        <Pressable
          onPress={markAllRead}
          disabled={unreadCount === 0}
          hitSlop={10}
          style={styles.markAllButton}
        >
          <Text style={[styles.markAllText, unreadCount === 0 && styles.disabledText]}>
            Mark all read
          </Text>
        </Pressable>
      </View>

      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator color={C.accent} />
        </View>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          contentContainerStyle={items.length === 0 ? styles.emptyContainer : styles.list}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item }) => (
            <NotificationRow
              item={item}
              expanded={expandedId === item.id}
              onPress={() => handleItemPress(item)}
            />
          )}
          ListEmptyComponent={
            error ? (
              <View style={styles.center}>
                <Text style={styles.emptyTitle}>Couldn't load notifications</Text>
                <Text style={styles.emptyBody}>{error}</Text>
                <Pressable onPress={handleRefresh} style={styles.retryButton}>
                  <Text style={styles.retryText}>Try again</Text>
                </Pressable>
              </View>
            ) : (
              <View style={styles.center}>
                <Ionicons name="notifications-off-outline" size={40} color={C.muted} />
                <Text style={styles.emptyTitle}>No notifications yet</Text>
                <Text style={styles.emptyBody}>
                  Announcements and replies to your bug reports will show up here.
                </Text>
              </View>
            )
          }
        />
      )}
    </SafeAreaView>
  );
}

function NotificationRow({
  item,
  expanded,
  onPress,
}: {
  item: AppNotification;
  expanded: boolean;
  onPress: () => void;
}) {
  const isReport = item.kind === "report_response";

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ expanded }}
      style={({ pressed }) => [
        styles.row,
        !item.is_read && styles.rowUnread,
        pressed && styles.rowPressed,
      ]}
    >
      <View
        style={[styles.iconWell, { backgroundColor: isReport ? C.reportWell : C.globalWell }]}
      >
        <Ionicons
          name={isReport ? "chatbubble-ellipses-outline" : "megaphone-outline"}
          size={20}
          color={isReport ? C.report : C.global}
        />
      </View>

      <View style={styles.rowText}>
        <View style={styles.rowTop}>
          <Text style={styles.kindLabel}>{isReport ? "Report reply" : "Announcement"}</Text>
          <Text style={styles.time}>{timeAgo(item.created_at)}</Text>
        </View>
        <Text
          style={[styles.title, !item.is_read && styles.titleUnread]}
          numberOfLines={expanded ? undefined : 1}
        >
          {item.title}
        </Text>
        <Text style={styles.body} numberOfLines={expanded ? undefined : 2}>
          {item.body}
        </Text>
      </View>

      {!item.is_read && <View style={styles.unreadDot} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: C.bg },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: C.border,
    backgroundColor: C.surface,
  },
  backButton: { minWidth: 90 },
  backText: { fontSize: 16, color: C.accent, fontWeight: "600" },
  headerTitle: { fontSize: 17, fontWeight: "700", color: C.text },
  markAllButton: { minWidth: 90, alignItems: "flex-end" },
  markAllText: { fontSize: 14, color: C.accent, fontWeight: "600" },
  disabledText: { color: "#B0B6BF" },

  list: { paddingVertical: 8 },
  emptyContainer: { flexGrow: 1 },
  separator: { height: StyleSheet.hairlineWidth, backgroundColor: C.border, marginLeft: 72 },

  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: C.surface,
  },
  rowUnread: { backgroundColor: C.unreadSurface },
  rowPressed: { opacity: 0.7 },
  iconWell: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  rowText: { flex: 1 },
  rowTop: { flexDirection: "row", justifyContent: "space-between", marginBottom: 2 },
  kindLabel: { fontSize: 12, color: C.muted, fontWeight: "600" },
  time: { fontSize: 12, color: C.muted },
  title: { fontSize: 15, color: C.text, fontWeight: "500", marginBottom: 2 },
  titleUnread: { fontWeight: "700" },
  body: { fontSize: 14, color: "#4B5563", lineHeight: 20 },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: C.accent,
    marginLeft: 10,
    marginTop: 6,
  },

  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    paddingVertical: 48,
  },
  emptyTitle: { fontSize: 16, fontWeight: "700", color: C.text, marginTop: 12 },
  emptyBody: { fontSize: 14, color: C.muted, textAlign: "center", marginTop: 6, lineHeight: 20 },
  retryButton: {
    marginTop: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: C.accent,
  },
  retryText: { color: "#FFFFFF", fontWeight: "600" },
});
