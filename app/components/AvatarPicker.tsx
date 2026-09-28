import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { supabase } from "../../services/supabase";
import {
  PRESET_AVATARS,
  presetValue,
  resolveAvatarSource,
} from "../../utils/avatars";

// Avatar picker: the tarsier art is the whole appeal here, so it gets
// the space — two across at 140px rather than four tiny circles.
//
// The custom-photo option sits in the same grid as a fifth card rather
// than behind a divider and a dashed button: it's one decision ("which
// picture?"), so it reads better as one set of options.
//
// onChange fires with the new avatar_url value after it's saved, so the
// parent updates without re-fetching the profile.

type Props = {
  visible: boolean;
  currentAvatarUrl?: string | null;
  onClose: () => void;
  onChange: (newAvatarUrl: string) => void;
};

export default function AvatarPicker({
  visible,
  currentAvatarUrl,
  onClose,
  onChange,
}: Props) {
  // Tracks WHICH card is saving, not just that something is — so the
  // spinner appears on the card you tapped instead of over everything.
  const [savingId, setSavingId] = useState<string | null>(null);

  const busy = savingId !== null;
  const hasCustomPhoto =
    !!currentAvatarUrl && !currentAvatarUrl.startsWith("preset:");

  const saveToProfile = async (value: string) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) throw new Error("You need to be signed in.");

    const { error } = await supabase
      .from("profiles")
      .update({ avatar_url: value })
      .eq("id", user.id);

    if (error) throw error;
  };

  const handlePresetPress = async (id: string) => {
    if (busy) return;
    setSavingId(id);
    try {
      const value = presetValue(id);
      await saveToProfile(value);
      onChange(value);
      onClose();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Try again in a moment.";
      Alert.alert("Couldn't save that avatar", message);
    } finally {
      setSavingId(null);
    }
  };

  const handleUploadPress = async () => {
    if (busy) return;

    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Photo access is off",
        "Turn on photo access in Settings to use your own picture.",
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (result.canceled) return;

    setSavingId("__upload__");
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) throw new Error("You need to be signed in.");

      const uri = result.assets[0].uri;
      const fileName = `${user.id}-${Date.now()}.jpg`;

      const response = await fetch(uri);
      const arrayBuffer = await response.arrayBuffer();

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(fileName, arrayBuffer, {
          contentType: "image/jpeg",
          upsert: true,
        });

      if (uploadError) throw uploadError;

      const {
        data: { publicUrl },
      } = supabase.storage.from("avatars").getPublicUrl(fileName);

      await saveToProfile(publicUrl);

      // Cache-buster for the local display only — the stored value
      // stays clean so it doesn't collect query strings over time.
      onChange(`${publicUrl}?t=${Date.now()}`);
      onClose();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Try again in a moment.";
      Alert.alert("Upload didn't finish", message);
    } finally {
      setSavingId(null);
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable style={styles.backdrop} onPress={onClose}>
        <Pressable style={styles.sheet} onPress={() => {}}>
          <View style={styles.grabber} />

          <Text style={styles.title}>Pick your avatar</Text>
          <Text style={styles.subtitle}>
            Choose a tarsier or use a photo of your own.
          </Text>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            <View style={styles.grid}>
              {PRESET_AVATARS.map((preset) => {
                const selected = currentAvatarUrl === presetValue(preset.id);
                const isSaving = savingId === preset.id;

                return (
                  <TouchableOpacity
                    key={preset.id}
                    style={[styles.card, selected && styles.cardSelected]}
                    onPress={() => handlePresetPress(preset.id)}
                    disabled={busy}
                    activeOpacity={0.9}
                  >
                    <View style={styles.artWell}>
                      <Image source={preset.source} style={styles.art} />

                      {isSaving && (
                        <View style={styles.cardSpinner}>
                          <ActivityIndicator size="small" color="#410FA3" />
                        </View>
                      )}
                    </View>

                    <Text
                      style={[
                        styles.cardLabel,
                        selected && styles.cardLabelSelected,
                      ]}
                      numberOfLines={1}
                    >
                      {preset.label}
                    </Text>

                    {selected && (
                      <View style={styles.check}>
                        <Text style={styles.checkMark}>✓</Text>
                      </View>
                    )}
                  </TouchableOpacity>
                );
              })}

              {/* Custom photo sits in the grid as a peer of the presets,
                  showing the current photo when there is one so it's
                  clear which option is active. */}
              <TouchableOpacity
                style={[styles.card, hasCustomPhoto && styles.cardSelected]}
                onPress={handleUploadPress}
                disabled={busy}
                activeOpacity={0.9}
              >
                <View style={styles.artWell}>
                  {hasCustomPhoto ? (
                    <Image
                      source={resolveAvatarSource(currentAvatarUrl)}
                      style={styles.art}
                    />
                  ) : (
                    <View style={styles.uploadGlyph}>
                      <Text style={styles.uploadGlyphIcon}>＋</Text>
                    </View>
                  )}

                  {savingId === "__upload__" && (
                    <View style={styles.cardSpinner}>
                      <ActivityIndicator size="small" color="#410FA3" />
                    </View>
                  )}
                </View>

                <Text
                  style={[
                    styles.cardLabel,
                    hasCustomPhoto && styles.cardLabelSelected,
                  ]}
                  numberOfLines={1}
                >
                  {hasCustomPhoto ? "Change photo" : "Your photo"}
                </Text>

                {hasCustomPhoto && (
                  <View style={styles.check}>
                    <Text style={styles.checkMark}>✓</Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </ScrollView>

          <TouchableOpacity
            style={styles.cancel}
            onPress={onClose}
            disabled={busy}
            activeOpacity={0.7}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const PURPLE = "#410FA3";
const PURPLE_LIGHT = "#5E3BEE";
const PURPLE_WASH = "#F2EFFD";

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(26,14,56,0.55)",
    justifyContent: "flex-end",
  },

  sheet: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    maxHeight: "88%",
  },

  grabber: {
    width: 44,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#DFDAF2",
    alignSelf: "center",
    marginBottom: 18,
  },

  title: {
    fontSize: 22,
    fontWeight: "800",
    color: PURPLE,
    letterSpacing: -0.3,
  },

  subtitle: {
    marginTop: 5,
    fontSize: 14,
    lineHeight: 20,
    color: "#7B7490",
    marginBottom: 18,
  },

  scrollContent: {
    paddingBottom: 6,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  /* Cards — two across, art-forward. */

  card: {
    width: "48%",
    backgroundColor: "#FAF9FE",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#EDEAF8",
    paddingVertical: 16,
    paddingHorizontal: 12,
    alignItems: "center",
    marginBottom: 14,
    position: "relative",
  },

  cardSelected: {
    backgroundColor: PURPLE_WASH,
    borderColor: PURPLE_LIGHT,
  },

  artWell: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  art: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  cardSpinner: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255,255,255,0.8)",
    alignItems: "center",
    justifyContent: "center",
  },

  cardLabel: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: "700",
    color: "#6B6480",
  },

  cardLabelSelected: {
    color: PURPLE,
  },

  check: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: PURPLE_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  checkMark: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "800",
  },

  /* Custom photo placeholder */

  uploadGlyph: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: PURPLE_WASH,
    alignItems: "center",
    justifyContent: "center",
  },

  uploadGlyphIcon: {
    fontSize: 28,
    lineHeight: 32,
    color: PURPLE_LIGHT,
    fontWeight: "600",
  },

  cancel: {
    marginTop: 4,
    paddingVertical: 14,
    alignItems: "center",
  },

  cancelText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#8B84A0",
  },
});
