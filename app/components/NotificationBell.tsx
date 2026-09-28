import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNotifications } from "../../hooks/useNotifications";

type Props = {
  color?: string;
  size?: number;
  /** Match this to the background the bell sits on (e.g. the purple dashboard header). */
  badgeBorderColor?: string;
};

export default function NotificationBell({
  color = "#1F2937",
  size = 26,
  badgeBorderColor = "#FFFFFF",
}: Props) {
  const router = useRouter();
  const { unreadCount } = useNotifications();

  const label =
    unreadCount === 0 ? "Notifications" : `Notifications, ${unreadCount} unread`;

  return (
    <Pressable
      onPress={() => router.push("/notifications" as any)}
      hitSlop={10}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={({ pressed }) => [styles.button, pressed && { opacity: 0.6 }]}
    >
      <Ionicons
        name={unreadCount > 0 ? "notifications" : "notifications-outline"}
        size={size}
        color={color}
      />
      {unreadCount > 0 && (
        <View style={[styles.badge, { borderColor: badgeBorderColor }]}>
          <Text style={styles.badgeText}>{unreadCount > 9 ? "9+" : unreadCount}</Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 4,
  },
  badge: {
    position: "absolute",
    top: 0,
    right: 0,
    minWidth: 18,
    height: 18,
    paddingHorizontal: 4,
    borderRadius: 9,
    backgroundColor: "#D92D20",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "700",
  },
});
