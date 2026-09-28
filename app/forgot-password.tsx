import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "../services/supabase";

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleResetPassword() {
    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    setLoading(true);
    setError("");

    const { error: resetError } = await supabase.auth.resetPasswordForEmail(
      email.trim(),
    );

    if (resetError) {
      setError(resetError.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    router.push({
      pathname: "/otp-verify" as any,
      params: { email: email.trim() },
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Back button */}
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Back</Text>
        </Pressable>

        {/* Image */}
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/forgot-password.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.heading}>Forgot password?</Text>
          <Text style={styles.subheading}>
            No worries! Enter your email and we will send you a 6 digit reset
            code.
          </Text>
        </View>

        {/* Email input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoFocus
          />
        </View>

        {/* Error */}
        {error !== "" && (
          <View style={styles.errorBox}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}

        {/* Send code button */}
        <Pressable
          style={styles.submitBtn}
          onPress={handleResetPassword}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.submitBtnText}>Send reset code</Text>
          )}
        </Pressable>

        {/* Back to login */}
        <Pressable
          style={styles.backToLoginBtn}
          onPress={() => router.push("/login" as any)}
        >
          <Text style={styles.backToLoginText}>Back to log in</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  content: { flex: 1, padding: 24, gap: 20 },
  backBtn: { marginBottom: 8 },
  backText: { fontSize: 15, color: "#410FA3", fontWeight: "600" },
  imageContainer: { alignItems: "center" },
  image: { width: 180, height: 180 },
  header: { gap: 8 },
  heading: { fontSize: 28, fontWeight: "800", color: "#1a1a1a" },
  subheading: { fontSize: 15, color: "#666", lineHeight: 22 },
  inputGroup: { gap: 6 },
  label: { fontSize: 14, fontWeight: "600", color: "#1a1a1a" },
  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: "#1a1a1a",
    backgroundColor: "#FAFAFA",
  },
  errorBox: { backgroundColor: "#FEE2E2", borderRadius: 10, padding: 12 },
  errorText: { color: "#DC2626", fontSize: 14, fontWeight: "500" },
  submitBtn: {
    backgroundColor: "#410FA3",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
  },
  submitBtnText: { color: "#FFFFFF", fontSize: 17, fontWeight: "700" },
  backToLoginBtn: { alignItems: "center", paddingVertical: 12 },
  backToLoginText: { fontSize: 15, color: "#410FA3", fontWeight: "600" },
});
