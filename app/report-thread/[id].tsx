import { useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { errorMessage } from "../../services/notificationService";
import {
  BugReportThread,
  getBugReportThread,
  markBugReportThreadSeen,
  replyToBugReport,
} from "../../services/reportService";
import { supabase } from "../../services/supabase";
import { formatFullTimestamp, formatTimestamp } from "../../utils/formatDate";
import {
  ReportStatus,
  STATUS_COLOR,
  STATUS_LABEL,
} from "../../utils/reportStatus";

const MAX_LENGTH = 2000;

const C = {
  bg: "#F7F8FA",
  surface: "#FFFFFF",
  text: "#1F2937",
  muted: "#4B5563",
  border: "#E5E7EB",
  accent: "#2E5AAC",
  adminBubble: "#FFFFFF",
  userBubble: "#2E5AAC",
  error: "#B42318",
};

export default function ReportThreadScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const [thread, setThread] = useState<BugReportThread | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const scrollRef = useRef<ScrollView>(null);

  const load = useCallback(async () => {
    if (!id) return;
    try {
      setThread(await getBugReportThread(id));
      setLoadError(null);
      // The user is looking at the thread, so the admin's replies count as seen.
      markBugReportThreadSeen(id).catch(() => {});
    } catch (e) {
      setLoadError(errorMessage(e, "Couldn't load this report."));
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    load();
  }, [load]);

  // Show a new admin reply as soon as it arrives.
  useEffect(() => {
    if (!id) return;
    const channel = supabase
      .channel(`report-thread-${id}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "bug_report_messages",
          filter: `report_id=eq.${id}`,
        },
        () => {
          load();
        }
      )
      // An admin opening the report moves admin_seen_at, which shows "Seen".
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "bug_reports",
          filter: `id=eq.${id}`,
        },
        () => {
          load();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [id, load]);

  const handleBackPress = () => {
    if (router.canGoBack()) router.back();
    else router.replace("/notifications" as any);
  };

  const handleSend = async () => {
    const message = draft.trim();
    if (!id || message.length === 0 || sending) return;

    setSending(true);
    setSendError(null);
    try {
      await replyToBugReport(id, message);
      setDraft("");
      await load();
    } catch (e) {
      setSendError(errorMessage(e, "Couldn't send your reply. Please try again."));
    } finally {
      setSending(false);
    }
  };

  const status = thread?.report.status as ReportStatus | undefined;
  const statusColor = status ? STATUS_COLOR[status] : undefined;
  const canSend = draft.trim().length > 0 && !sending;

  // "Seen" goes under the user's newest message (or the report itself if they
  // haven't written since), once an admin has opened the report after it.
  const lastUserMessage = thread
    ? [...thread.messages].reverse().find((m) => m.sender_role === "user")
    : undefined;
  const lastUserAt = lastUserMessage?.created_at ?? thread?.report.created_at;
  const seenByAdmin =
    !!thread?.adminSeenAt &&
    !!lastUserAt &&
    new Date(thread.adminSeenAt) >= new Date(lastUserAt);

  return (
    <SafeAreaView style={styles.screen} edges={["top", "bottom"]}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.header}>
          <Pressable onPress={handleBackPress} hitSlop={10} style={styles.headerSide}>
            <Text style={styles.backText}>‹ Back</Text>
          </Pressable>
          <Text style={styles.headerTitle}>Your report</Text>
          <View style={styles.headerSide} />
        </View>

        {loading ? (
          <View style={styles.center}>
            <ActivityIndicator color={C.accent} />
          </View>
        ) : loadError || !thread ? (
          <View style={styles.center}>
            <Text style={styles.emptyTitle}>{"Couldn't open this report"}</Text>
            <Text style={styles.emptyBody}>{loadError}</Text>
            <Pressable onPress={load} style={styles.retryButton}>
              <Text style={styles.retryText}>Try again</Text>
            </Pressable>
          </View>
        ) : (
          <>
            <ScrollView
              ref={scrollRef}
              contentContainerStyle={styles.scroll}
              onContentSizeChange={() => scrollRef.current?.scrollToEnd({ animated: false })}
              keyboardShouldPersistTaps="handled"
            >
              <View style={styles.reportCard}>
                <View style={styles.reportTop}>
                  <Text style={styles.reportDate}>
                    Sent {formatFullTimestamp(thread.report.created_at)}
                  </Text>
                  {status && statusColor && (
                    <View style={[styles.statusChip, { backgroundColor: statusColor.bg }]}>
                      <Text style={[styles.statusText, { color: statusColor.fg }]}>
                        {STATUS_LABEL[status] ?? thread.report.status}
                      </Text>
                    </View>
                  )}
                </View>
                <Text style={styles.reportTitle}>{thread.report.title}</Text>
                <Text style={styles.reportBody}>{thread.report.description}</Text>
                {!lastUserMessage && <SeenReceipt seen={seenByAdmin} />}
              </View>

              {thread.messages.length === 0 ? (
                <Text style={styles.noMessages}>
                  No replies yet. You can add more details below.
                </Text>
              ) : (
                thread.messages.map((m) => {
                  const fromUser = m.sender_role === "user";
                  return (
                    <View
                      key={m.id}
                      style={[styles.messageRow, fromUser && styles.messageRowUser]}
                    >
                      <Text style={[styles.sender, fromUser && styles.senderUser]}>
                        {fromUser ? "You" : "Bigkas team"} · {formatTimestamp(m.created_at)}
                      </Text>
                      <View style={[styles.bubble, fromUser ? styles.bubbleUser : styles.bubbleAdmin]}>
                        <Text style={[styles.bubbleText, fromUser && styles.bubbleTextUser]}>
                          {m.body}
                        </Text>
                      </View>
                      {m.id === lastUserMessage?.id && <SeenReceipt seen={seenByAdmin} />}
                    </View>
                  );
                })
              )}
            </ScrollView>

            <View style={styles.composer}>
              {sendError && <Text style={styles.sendError}>{sendError}</Text>}
              <View style={styles.composerRow}>
                <TextInput
                  value={draft}
                  onChangeText={setDraft}
                  placeholder="Write a reply…"
                  placeholderTextColor="#6B7280"
                  multiline
                  maxLength={MAX_LENGTH}
                  style={styles.input}
                  accessibilityLabel="Reply to the Bigkas team"
                />
                <Pressable
                  onPress={handleSend}
                  disabled={!canSend}
                  accessibilityRole="button"
                  style={[styles.sendButton, !canSend && styles.sendButtonDisabled]}
                >
                  {sending ? (
                    <ActivityIndicator color="#FFFFFF" />
                  ) : (
                    <Text style={styles.sendText}>Send</Text>
                  )}
                </Pressable>
              </View>
            </View>
          </>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function SeenReceipt({ seen }: { seen: boolean }) {
  return (
    <Text style={[styles.receipt, seen && styles.receiptSeen]}>
      {seen ? "✓✓ Seen by the Bigkas team" : "✓ Sent"}
    </Text>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: C.bg },
  flex: { flex: 1 },
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
  headerSide: { minWidth: 90 },
  backText: { fontSize: 18, color: C.accent, fontWeight: "600" },
  headerTitle: { fontSize: 18, fontWeight: "700", color: C.text },

  scroll: { padding: 16, paddingBottom: 24 },

  reportCard: {
    backgroundColor: C.surface,
    borderRadius: 14,
    padding: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: C.border,
    marginBottom: 20,
  },
  reportTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  reportDate: { fontSize: 15, color: C.muted },
  statusChip: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 999 },
  statusText: { fontSize: 15, fontWeight: "700" },
  reportTitle: { fontSize: 18, fontWeight: "700", color: C.text, marginBottom: 6 },
  reportBody: { fontSize: 15, color: C.muted, lineHeight: 22 },

  noMessages: { fontSize: 15, color: C.muted, textAlign: "center", marginTop: 8 },

  messageRow: { marginBottom: 16, alignItems: "flex-start" },
  messageRowUser: { alignItems: "flex-end" },
  sender: { fontSize: 15, color: C.muted, marginBottom: 4 },
  senderUser: { textAlign: "right" },
  bubble: { maxWidth: "88%", borderRadius: 16, paddingHorizontal: 14, paddingVertical: 10 },
  bubbleAdmin: {
    backgroundColor: C.adminBubble,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: C.border,
  },
  bubbleUser: { backgroundColor: C.userBubble },
  bubbleText: { fontSize: 18, color: C.text, lineHeight: 26 },
  bubbleTextUser: { color: "#FFFFFF" },
  receipt: { fontSize: 15, color: C.muted, marginTop: 4, textAlign: "right" },
  receiptSeen: { color: C.accent, fontWeight: "600" },

  composer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: C.border,
    backgroundColor: C.surface,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  sendError: { fontSize: 15, color: C.error, marginBottom: 8 },
  composerRow: { flexDirection: "row", alignItems: "flex-end", gap: 10 },
  input: {
    flex: 1,
    minHeight: 48,
    maxHeight: 140,
    fontSize: 18,
    color: C.text,
    backgroundColor: C.bg,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: C.border,
    paddingHorizontal: 14,
    paddingTop: 12,
    paddingBottom: 12,
  },
  sendButton: {
    minHeight: 48,
    minWidth: 80,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: C.accent,
    alignItems: "center",
    justifyContent: "center",
  },
  sendButtonDisabled: { backgroundColor: "#B0B6BF" },
  sendText: { fontSize: 18, color: "#FFFFFF", fontWeight: "700" },

  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    paddingVertical: 48,
  },
  emptyTitle: { fontSize: 18, fontWeight: "700", color: C.text },
  emptyBody: { fontSize: 15, color: C.muted, textAlign: "center", marginTop: 6 },
  retryButton: {
    marginTop: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: C.accent,
  },
  retryText: { fontSize: 18, color: "#FFFFFF", fontWeight: "600" },
});
