import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BugReportCategory, submitBugReport } from "../services/reportService";

// Bug report form. A screenshot is REQUIRED — the Send button stays
// disabled until one is attached, since a report without a picture is
// usually impossible to act on.
//
// Images are requested with base64: true so they can be handed straight
// to Supabase Storage (see services/reportService.ts). quality is
// lowered because base64 inflates payload size by ~33% and full-res
// phone screenshots are needlessly large for this.

const CATEGORIES: { key: BugReportCategory; label: string }[] = [
  { key: "crash", label: "App crashed" },
  { key: "wrong_content", label: "Wrong content" },
  { key: "audio", label: "Audio / mic" },
  { key: "camera", label: "Camera" },
  { key: "ui", label: "Display issue" },
  { key: "other", label: "Something else" },
];

export default function ReportScreen() {
  const router = useRouter();

  const [category, setCategory] = useState<BugReportCategory>("other");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const canSubmit =
    title.trim().length > 0 &&
    description.trim().length > 0 &&
    !!imageBase64 &&
    !submitting;

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

      setImageUri(asset.uri);
      setImageBase64(asset.base64);
    } catch (error) {
      console.error("Image pick failed:", error);
      Alert.alert("Something went wrong", "Couldn't open the picker.");
    }
  };

  const handleSubmit = async () => {
    if (!canSubmit || !imageBase64) return;

    setSubmitting(true);
    try {
      await submitBugReport({
        category,
        title,
        description,
        screenshotBase64: imageBase64,
        deviceInfo: `${Platform.OS} ${Platform.Version}`,
      });

      Alert.alert(
        "Report sent",
        "Thanks — this helps a lot. We'll take a look.",
        [{ text: "OK", onPress: handleBackPress }],
      );
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Please try again.";
      Alert.alert("Couldn't send the report", message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.header}>
          <TouchableOpacity
            onPress={handleBackPress}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Text style={styles.backButtonText}>‹ Back</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.title}>Report a problem</Text>
          <Text style={styles.subtitle}>
            Tell us what went wrong and attach a screenshot so we can see it.
          </Text>

          {/* CATEGORY */}
          <Text style={styles.label}>What kind of problem?</Text>
          <View style={styles.categoryGrid}>
            {CATEGORIES.map((c) => {
              const active = c.key === category;
              return (
                <TouchableOpacity
                  key={c.key}
                  style={[
                    styles.categoryChip,
                    active && styles.categoryChipActive,
                  ]}
                  onPress={() => setCategory(c.key)}
                  activeOpacity={0.85}
                >
                  <Text
                    style={[
                      styles.categoryChipText,
                      active && styles.categoryChipTextActive,
                    ]}
                  >
                    {c.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* TITLE */}
          <Text style={styles.label}>Short summary</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            placeholder="e.g. Mic stops working on the tone step"
            placeholderTextColor="#9CA3AF"
            maxLength={100}
          />

          {/* DESCRIPTION */}
          <Text style={styles.label}>What happened?</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={description}
            onChangeText={setDescription}
            placeholder="What were you doing when it happened? What did you expect instead?"
            placeholderTextColor="#9CA3AF"
            multiline
            textAlignVertical="top"
            maxLength={1000}
          />

          {/* SCREENSHOT — required */}
          <Text style={styles.label}>
            Screenshot <Text style={styles.requiredMark}>* required</Text>
          </Text>

          {imageUri ? (
            <View style={styles.previewWrap}>
              <Image source={{ uri: imageUri }} style={styles.preview} />
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => {
                  setImageUri(null);
                  setImageBase64(null);
                }}
              >
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.pickRow}>
              <TouchableOpacity
                style={styles.pickButton}
                onPress={() => pickImage(false)}
                activeOpacity={0.85}
              >
                <Text style={styles.pickButtonText}>🖼 Choose photo</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.pickButton}
                onPress={() => pickImage(true)}
                activeOpacity={0.85}
              >
                <Text style={styles.pickButtonText}>📷 Take photo</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* SUBMIT */}
          <TouchableOpacity
            style={[styles.submitButton, !canSubmit && styles.submitDisabled]}
            onPress={handleSubmit}
            disabled={!canSubmit}
            activeOpacity={0.85}
          >
            {submitting ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text style={styles.submitButtonText}>Send report</Text>
            )}
          </TouchableOpacity>

          {!canSubmit && !submitting && (
            <Text style={styles.hint}>
              {!imageBase64
                ? "Attach a screenshot to send your report."
                : "Fill in a summary and a description."}
            </Text>
          )}

          <View style={styles.bottomSpace} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9FAFB" },
  flex: { flex: 1 },

  header: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 4,
  },

  backButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#5E3BEE",
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 40,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#410FA3",
  },

  subtitle: {
    marginTop: 6,
    fontSize: 15,
    lineHeight: 21,
    color: "#777",
    marginBottom: 22,
  },

  label: {
    fontSize: 14,
    fontWeight: "800",
    color: "#333",
    marginBottom: 8,
    marginTop: 4,
  },

  requiredMark: {
    fontSize: 12,
    fontWeight: "700",
    color: "#DC2626",
  },

  /* CATEGORY */

  categoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 18,
  },

  categoryChip: {
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#E5E3F0",
  },

  categoryChipActive: {
    backgroundColor: "#5E3BEE",
    borderColor: "#5E3BEE",
  },

  categoryChipText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#6B7280",
  },

  categoryChipTextActive: { color: "#FFFFFF" },

  /* INPUTS */

  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#E5E3F0",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: "#222",
    marginBottom: 18,
  },

  textArea: {
    height: 130,
    paddingTop: 12,
  },

  /* SCREENSHOT */

  pickRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 24,
  },

  pickButton: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#5E3BEE",
    borderStyle: "dashed",
    alignItems: "center",
  },

  pickButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#5E3BEE",
  },

  previewWrap: {
    marginBottom: 24,
    alignItems: "flex-start",
  },

  preview: {
    width: "100%",
    height: 220,
    borderRadius: 14,
    backgroundColor: "#EEE",
    resizeMode: "contain",
  },

  removeButton: {
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: "#FEE2E2",
  },

  removeButtonText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#DC2626",
  },

  /* SUBMIT */

  submitButton: {
    height: 54,
    borderRadius: 14,
    backgroundColor: "#5E3BEE",
    justifyContent: "center",
    alignItems: "center",
  },

  submitDisabled: {
    backgroundColor: "#C7C3E0",
  },

  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },

  hint: {
    marginTop: 10,
    fontSize: 13,
    color: "#888",
    textAlign: "center",
  },

  bottomSpace: { height: 40 },
});
