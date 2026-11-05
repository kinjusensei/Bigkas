import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import ProblemTypeCard from "../components/report/ProblemTypeCard";
import ReportSentView from "../components/report/ReportSentView";
import {
  PROBLEM_TYPES,
  problemTypeLabel,
  report,
} from "../components/report/reportTheme";
import ScreenshotPicker, {
  PickedScreenshot,
} from "../components/report/ScreenshotPicker";
import { BugReportCategory, submitBugReport } from "../services/reportService";
import { supabase } from "../services/supabase";

// Bug report form. A screenshot is REQUIRED — the Send button stays
// disabled until one is attached, since a report without a picture is
// usually impossible to act on.
//
// Images are requested with base64: true so they can be handed straight
// to Supabase Storage (see services/reportService.ts). quality is
// lowered because base64 inflates payload size by ~33% and full-res
// phone screenshots are needlessly large for this.

const SUMMARY_MAX = 80;
const DETAILS_MAX = 500;

export default function ReportScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [category, setCategory] = useState<BugReportCategory | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [screenshot, setScreenshot] = useState<PickedScreenshot | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState<{ type: string; summary: string } | null>(
    null,
  );
  const [focused, setFocused] = useState<"summary" | "details" | null>(null);
  const [name, setName] = useState("");

  // First name for the "Report sent" thank-you.
  useEffect(() => {
    (async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;
      const { data } = await supabase
        .from("profiles")
        .select("display_name")
        .eq("id", user.id)
        .maybeSingle();
      setName(data?.display_name ?? "");
    })();
  }, []);

  // The first missing field, shown under the disabled Send button.
  const missing = !category
    ? "Choose what kind of problem it is."
    : !title.trim()
      ? "Add a short summary."
      : !description.trim()
        ? "Say what happened."
        : !screenshot
          ? "Attach a screenshot to send your report."
          : null;
  const canSubmit = !missing && !submitting;

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/dashboard");
    }
  };

  const pickImage = async (fromCamera: boolean) => {
    try {
      const permission = fromCamera
        ? await ImagePicker.requestCameraPermissionsAsync()
        : await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permission.granted) {
        Alert.alert(
          "Permission needed",
          fromCamera
            ? "Camera access is needed to take a photo."
            : "Photo access is needed to attach a screenshot.",
        );
        return;
      }

      const result = fromCamera
        ? await ImagePicker.launchCameraAsync({
            quality: 0.5,
            base64: true,
          })
        : await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.5,
            base64: true,
          });

      if (result.canceled) return;

      const asset = result.assets?.[0];
      if (!asset?.base64) {
        Alert.alert("Couldn't read that image", "Please try another one.");
        return;
      }

      setScreenshot({
        uri: asset.uri,
        base64: asset.base64,
        fileName:
          asset.fileName ?? asset.uri.split("/").pop() ?? "screenshot.jpg",
        // fileSize isn't always given; base64 is 4 chars per 3 bytes.
        sizeBytes: asset.fileSize ?? Math.round((asset.base64.length * 3) / 4),
      });
    } catch (pickError) {
      console.error("Image pick failed:", pickError);
      Alert.alert("Something went wrong", "Couldn't open the picker.");
    }
  };

  const handleSubmit = async () => {
    if (!canSubmit || !category || !screenshot) return;

    setSubmitting(true);
    setError(null);
    try {
      await submitBugReport({
        category,
        title,
        description,
        screenshotBase64: screenshot.base64,
        deviceInfo: `${Platform.OS} ${Platform.Version}`,
      });
      // Only reached when the upload and the insert both succeeded.
      setSent({ type: problemTypeLabel(category), summary: title.trim() });
    } catch (submitError) {
      // Everything typed stays; the learner can retry.
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  function resetForm() {
    setCategory(null);
    setTitle("");
    setDescription("");
    setScreenshot(null);
    setError(null);
    setSent(null);
  }

  if (sent) {
    return (
      <ReportSentView
        name={name}
        typeLabel={sent.type}
        summary={sent.summary}
        onHome={() => router.replace("/dashboard")}
        onReportAnother={resetForm}
      />
    );
  }

  const rows = [PROBLEM_TYPES.slice(0, 3), PROBLEM_TYPES.slice(3, 6)];

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
        >
          {/* HEADER */}
          <View style={[styles.header, { paddingTop: insets.top + 12 }]}>
            <Pressable
              onPress={handleBackPress}
              style={styles.backButton}
              accessibilityRole="button"
              accessibilityLabel="Back"
            >
              <Ionicons name="arrow-back" size={22} color={report.white} />
            </Pressable>
            <Text style={styles.headerTitle} accessibilityRole="header">
              Report a problem
            </Text>
            <Text style={styles.headerSubtitle}>
              Tell us what went wrong and we will look into it
            </Text>
          </View>

          <View style={styles.content}>
            {/* CATEGORY */}
            <Text style={styles.label}>What kind of problem?</Text>
            <View style={styles.grid} accessibilityRole="radiogroup">
              {rows.map((row, index) => (
                <View key={index} style={styles.gridRow}>
                  {row.map((type) => (
                    <ProblemTypeCard
                      key={type.key}
                      label={type.label}
                      icon={type.icon}
                      selected={category === type.key}
                      disabled={submitting}
                      onPress={() => setCategory(type.key)}
                    />
                  ))}
                </View>
              ))}
            </View>

            {/* SUMMARY */}
            <View style={styles.labelRow}>
              <Text style={styles.label}>Short summary</Text>
              <Text style={styles.counter}>
                {title.length} / {SUMMARY_MAX}
              </Text>
            </View>
            <TextInput
              style={[
                styles.input,
                focused === "summary" && styles.inputFocused,
              ]}
              value={title}
              onChangeText={setTitle}
              onFocus={() => setFocused("summary")}
              onBlur={() => setFocused(null)}
              editable={!submitting}
              placeholder="e.g. Mic stops working on the tone step"
              placeholderTextColor="#9C97B5"
              maxLength={SUMMARY_MAX}
              returnKeyType="next"
              accessibilityLabel="Short summary"
              accessibilityHint={`Up to ${SUMMARY_MAX} characters`}
            />

            {/* DETAILS */}
            <View style={styles.labelRow}>
              <Text style={styles.label}>What happened?</Text>
              <Text style={styles.counter}>
                {description.length} / {DETAILS_MAX}
              </Text>
            </View>
            <TextInput
              style={[
                styles.input,
                styles.textArea,
                focused === "details" && styles.inputFocused,
              ]}
              value={description}
              onChangeText={setDescription}
              onFocus={() => setFocused("details")}
              onBlur={() => setFocused(null)}
              editable={!submitting}
              placeholder="What were you doing when it happened?"
              placeholderTextColor="#9C97B5"
              multiline
              textAlignVertical="top"
              maxLength={DETAILS_MAX}
              accessibilityLabel="What happened"
              accessibilityHint={`Up to ${DETAILS_MAX} characters`}
            />
            <Text style={styles.helper}>
              Tip: say what you were doing and what you expected to happen.
            </Text>

            {/* SCREENSHOT — required */}
            <View style={[styles.labelRow, styles.screenshotLabel]}>
              <Text style={styles.label}>Screenshot</Text>
              <View style={styles.requiredPill}>
                <Text style={styles.requiredText}>Required</Text>
              </View>
            </View>
            <ScreenshotPicker
              screenshot={screenshot}
              disabled={submitting}
              onChoose={() => pickImage(false)}
              onTake={() => pickImage(true)}
              onRemove={() => setScreenshot(null)}
            />

            {/* INFO — matches what submitBugReport sends besides the form:
                the account email and Platform.OS + Platform.Version. */}
            <View style={styles.note}>
              <Ionicons
                name="information-circle-outline"
                size={18}
                color={report.primary}
              />
              <Text style={styles.noteText}>
                We also send your account email and your phone&apos;s system and
                its version so we can fix it faster. Nothing else is shared.
              </Text>
            </View>

            {error && (
              <View style={styles.error} accessibilityLiveRegion="polite">
                <Ionicons name="alert-circle" size={20} color={report.red} />
                <Text style={styles.errorText}>
                  Couldn&apos;t send the report. {error}
                </Text>
                <Pressable
                  onPress={handleSubmit}
                  disabled={submitting}
                  style={styles.retry}
                  accessibilityRole="button"
                  accessibilityLabel="Retry sending the report"
                >
                  <Text style={styles.retryText}>Retry</Text>
                </Pressable>
              </View>
            )}
          </View>
        </ScrollView>

        {/* SEND BAR */}
        <View style={[styles.bar, { paddingBottom: insets.bottom + 12 }]}>
          {missing && !submitting && (
            <Text style={styles.barHint}>{missing}</Text>
          )}
          <Pressable
            onPress={handleSubmit}
            disabled={!canSubmit}
            style={({ pressed }) => [
              styles.send,
              !canSubmit && !submitting && styles.sendDisabled,
              pressed && styles.sendPressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel={submitting ? "Sending report" : "Send report"}
            accessibilityState={{ disabled: !canSubmit, busy: submitting }}
          >
            {submitting ? (
              <ActivityIndicator color={report.white} />
            ) : (
              <>
                <Ionicons name="send" size={18} color={report.white} />
                <Text style={styles.sendText}>Send report</Text>
              </>
            )}
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: report.background },
  flex: { flex: 1 },

  scroll: {
    paddingBottom: 24,
  },

  /* HEADER */
  header: {
    backgroundColor: report.primary,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 20,
    paddingBottom: 24,
  },

  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(255,255,255,0.18)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: report.white,
  },

  headerSubtitle: {
    marginTop: 4,
    fontSize: 14,
    lineHeight: 20,
    color: "rgba(255,255,255,0.85)",
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  label: {
    fontSize: 15,
    fontWeight: "800",
    color: report.ink,
    marginBottom: 8,
  },

  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },

  counter: {
    fontSize: 12,
    fontWeight: "600",
    color: report.muted,
    marginBottom: 8,
  },

  /* CATEGORY */
  grid: {
    gap: 10,
    marginBottom: 20,
  },

  gridRow: {
    flexDirection: "row",
    gap: 10,
  },

  /* INPUTS */
  input: {
    backgroundColor: report.white,
    borderWidth: 1.5,
    borderColor: report.border,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    minHeight: 48,
    fontSize: 16,
    color: report.ink,
    marginBottom: 18,
  },

  inputFocused: {
    borderWidth: 2,
    borderColor: report.primary,
  },

  textArea: {
    minHeight: 110,
    marginBottom: 6,
  },

  helper: {
    fontSize: 12,
    color: report.muted,
    marginBottom: 20,
  },

  /* SCREENSHOT */
  screenshotLabel: {
    justifyContent: "flex-start",
  },

  requiredPill: {
    backgroundColor: report.redBg,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginBottom: 8,
  },

  requiredText: {
    fontSize: 11,
    fontWeight: "800",
    color: report.red,
  },

  /* NOTE */
  note: {
    flexDirection: "row",
    gap: 8,
    marginTop: 20,
    padding: 14,
    borderRadius: 14,
    backgroundColor: report.chip,
  },

  noteText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 19,
    color: report.ink,
  },

  /* ERROR */
  error: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 14,
    padding: 12,
    borderRadius: 14,
    backgroundColor: report.redBg,
  },

  errorText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 18,
    color: report.red,
  },

  retry: {
    minWidth: 64,
    minHeight: 44,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: report.red,
    alignItems: "center",
    justifyContent: "center",
  },

  retryText: {
    fontSize: 14,
    fontWeight: "800",
    color: report.red,
  },

  /* SEND BAR */
  bar: {
    backgroundColor: report.white,
    borderTopWidth: 1,
    borderTopColor: report.border,
    paddingHorizontal: 20,
    paddingTop: 10,
    gap: 8,
  },

  barHint: {
    fontSize: 13,
    color: report.muted,
    textAlign: "center",
  },

  send: {
    height: 54,
    borderRadius: 14,
    backgroundColor: report.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  sendDisabled: {
    backgroundColor: report.primaryDisabled,
  },

  sendPressed: {
    opacity: 0.85,
  },

  sendText: {
    fontSize: 17,
    fontWeight: "800",
    color: report.white,
  },
});
