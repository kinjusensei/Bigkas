import { useRouter } from "expo-router";
import { ReactNode, useState } from "react";
import {
  ActivityIndicator,
  Image,
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
import { PRIVACY_POLICY_VERSION } from "../data/privacyPolicy";
import { supabase } from "../services/supabase";

export default function CreateAccountScreen() {
  const router = useRouter();

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Consent — both are required by the Data Privacy Act before we collect data.
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [confirmedAge, setConfirmedAge] = useState(false);
  const consentGiven = agreedToPrivacy && confirmedAge;

  const openPrivacyPolicy = () => router.push("/privacy" as any);

  async function handleRegister() {
    if (!displayName.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!agreedToPrivacy) {
      setError("Please read and agree to the Privacy Policy.");
      return;
    }
    if (!confirmedAge) {
      setError(
        "Please confirm your age, or ask your parent or guardian to agree.",
      );
      return;
    }

    setLoading(true);
    setError("");

    // Recorded as proof of consent (the Data Privacy Act requires consent to
    // be evidenced). Saved in the auth metadata AND the profile, so it's kept
    // even if the profile insert below has to wait for email confirmation.
    const consentAt = new Date().toISOString();

    const { data, error: signUpError } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: {
          display_name: displayName.trim(),
          privacy_accepted_at: consentAt,
          privacy_version: PRIVACY_POLICY_VERSION,
          age_confirmed: true,
        },
      },
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    if (data.user) {
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Check if profile already exists (to avoid duplicate insert)
      const { data: existing } = await supabase
        .from("profiles")
        .select("id")
        .eq("id", data.user.id)
        .single();

      if (!existing) {
        const { error: profileError } = await supabase.from("profiles").insert({
          id: data.user.id,
          display_name: displayName.trim(),
          email: email.trim().toLowerCase(),
          role: "user",
          xp: 0,
          level: 1,
          active_dialect: "tagalog",
          studying_dialects: ["tagalog"],
          daily_goal_minutes: 10,
          privacy_accepted_at: consentAt,
          privacy_version: PRIVACY_POLICY_VERSION,
          age_confirmed: true,
        });

        if (profileError) {
          setError(profileError.message);
          setLoading(false);
          return;
        }
      } else {
        // Profile exists but display_name / consent might be missing — update it
        const { error: updateError } = await supabase
          .from("profiles")
          .update({
            display_name: displayName.trim(),
            privacy_accepted_at: consentAt,
            privacy_version: PRIVACY_POLICY_VERSION,
            age_confirmed: true,
          })
          .eq("id", data.user.id);

        if (updateError) {
          setError(updateError.message);
          setLoading(false);
          return;
        }
      }
    }

    setLoading(false);

    if (data.session) {
      router.replace("/dashboard" as any);
    } else {
      setError("Account created! Check your email to confirm, then log in.");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
        >
          {/* Logo */}
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.heading}>Create account</Text>
            <Text style={styles.subheading}>
              Save your progress and learn anywhere
            </Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            {/* Display Name */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Your name</Text>
              <TextInput
                style={styles.input}
                placeholder="In Game Name"
                placeholderTextColor="#999"
                value={displayName}
                onChangeText={setDisplayName}
                autoCapitalize="words"
                autoCorrect={false}
              />
              <Text style={styles.hint}>
                This is the name shown on your profile and leaderboard.
              </Text>
            </View>

            {/* Email */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            {/* Password */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.passwordRow}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="At least 6 characters"
                  placeholderTextColor="#999"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="oneTimeCode" // disables iOS strong password suggestion
                />
                <Pressable
                  style={styles.eyeButton}
                  onPress={() => setShowPassword((prev) => !prev)}
                >
                  <Image
                    source={
                      showPassword
                        ? require("../assets/images/visible.png")
                        : require("../assets/images/hide.png")
                    }
                    style={styles.eyeImage}
                    resizeMode="contain"
                  />
                </Pressable>
              </View>
            </View>

            {/* Confirm Password */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Re-enter Password</Text>
              <View
                style={[
                  styles.passwordRow,
                  confirmPassword.length > 0 && {
                    borderColor:
                      confirmPassword === password ? "#1D9E75" : "#DC2626",
                  },
                ]}
              >
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Re-enter your password"
                  placeholderTextColor="#999"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showConfirmPassword}
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="oneTimeCode"
                />
                <Pressable
                  style={styles.eyeButton}
                  onPress={() => setShowConfirmPassword((prev) => !prev)}
                >
                  <Image
                    source={
                      showConfirmPassword
                        ? require("../assets/images/visible.png")
                        : require("../assets/images/hide.png")
                    }
                    style={styles.eyeImage}
                    resizeMode="contain"
                  />
                </Pressable>
              </View>
              {/* Live match indicator */}
              {confirmPassword.length > 0 && (
                <Text
                  style={[
                    styles.matchText,
                    {
                      color:
                        confirmPassword === password ? "#1D9E75" : "#DC2626",
                    },
                  ]}
                >
                  {confirmPassword === password
                    ? "✓ Passwords match"
                    : "✗ Passwords do not match"}
                </Text>
              )}
            </View>

            {/* Consent */}
            <View style={styles.consentGroup}>
              <ConsentCheckbox
                checked={agreedToPrivacy}
                onToggle={() => setAgreedToPrivacy((v) => !v)}
                accessibilityLabel="I have read and agree to the Privacy Policy"
              >
                I have read and agree to the{" "}
                <Text style={styles.consentLink} onPress={openPrivacyPolicy}>
                  Privacy Policy
                </Text>
                , and I consent to Bigkas processing my data as described there.
              </ConsentCheckbox>

              <ConsentCheckbox
                checked={confirmedAge}
                onToggle={() => setConfirmedAge((v) => !v)}
                accessibilityLabel="I am 18 or older, or my parent or guardian has agreed"
              >
                I am 18 or older, or my parent or guardian has read the Privacy
                Policy and agrees to it.
              </ConsentCheckbox>
            </View>

            {error !== "" && (
              <View style={styles.errorBox}>
                <Text style={styles.errorText}>{error}</Text>
              </View>
            )}

            <Pressable
              style={[
                styles.submitBtn,
                (loading || !consentGiven) && { opacity: 0.5 },
              ]}
              onPress={handleRegister}
              disabled={loading || !consentGiven}
              accessibilityState={{ disabled: loading || !consentGiven }}
            >
              {loading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text style={styles.submitBtnText}>Confirm Register</Text>
              )}
            </Pressable>

            <Pressable
              style={styles.loginLink}
              onPress={() => router.push("/login" as any)}
            >
              <Text style={styles.loginLinkText}>
                Already have an account? Log in
              </Text>
            </Pressable>
          </View>

          <Text style={styles.privacy}>
            Your data is safe. We never sell your information.{" "}
            <Text style={styles.privacyLink} onPress={openPrivacyPolicy}>
              Privacy Policy
            </Text>
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function ConsentCheckbox({
  checked,
  onToggle,
  accessibilityLabel,
  children,
}: {
  checked: boolean;
  onToggle: () => void;
  accessibilityLabel: string;
  children: ReactNode;
}) {
  return (
    <Pressable
      onPress={onToggle}
      style={styles.consentRow}
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
      accessibilityLabel={accessibilityLabel}
      hitSlop={4}
    >
      <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
        {checked && <Text style={styles.checkmark}>✓</Text>}
      </View>
      {/* Text (not View) so the "Privacy Policy" link can sit inline. */}
      <Text style={styles.consentText}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  scroll: { padding: 24, gap: 24 },
  logoContainer: { alignItems: "center", marginTop: 16 },
  logo: { width: 120, height: 120 },
  header: { gap: 8, alignItems: "center" },
  heading: { fontSize: 28, fontWeight: "800", color: "#1a1a1a" },
  subheading: { fontSize: 15, color: "#666" },
  form: { gap: 16 },
  inputGroup: { gap: 6 },
  label: { fontSize: 14, fontWeight: "600", color: "#1a1a1a" },
  hint: { fontSize: 12, color: "#9CA3AF", marginTop: 2 },
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
  passwordRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 16,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 15,
    color: "#1a1a1a",
  },
  eyeButton: { paddingLeft: 10, paddingVertical: 14 },
  eyeImage: { width: 22, height: 22 },
  matchText: { fontSize: 12, fontWeight: "600", marginTop: 4 },

  consentGroup: { gap: 14, marginTop: 4 },
  consentRow: { flexDirection: "row", alignItems: "flex-start", gap: 12 },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#C4C0D0",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 1,
  },
  checkboxChecked: { backgroundColor: "#410FA3", borderColor: "#410FA3" },
  checkmark: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 16,
  },
  consentText: { flex: 1, fontSize: 14, color: "#374151", lineHeight: 21 },
  consentLink: {
    color: "#410FA3",
    fontWeight: "700",
    textDecorationLine: "underline",
  },

  errorBox: { backgroundColor: "#FEE2E2", borderRadius: 10, padding: 12 },
  errorText: { color: "#DC2626", fontSize: 14, fontWeight: "500" },
  submitBtn: {
    backgroundColor: "#410FA3",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 8,
  },
  submitBtnText: { color: "#FFFFFF", fontSize: 17, fontWeight: "700" },
  loginLink: { alignItems: "center", paddingVertical: 12 },
  loginLinkText: { fontSize: 15, color: "#410FA3", fontWeight: "600" },
  privacy: { fontSize: 12, color: "#999", textAlign: "center" },
  privacyLink: {
    color: "#410FA3",
    fontWeight: "600",
    textDecorationLine: "underline",
  },
});
