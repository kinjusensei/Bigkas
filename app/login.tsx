import { useRouter } from 'expo-router';
import { useState } from 'react';
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
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { supabase } from '../services/supabase';

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  async function handleLogin() {
    if (!email.trim()) { setError('Please enter your email.'); return; }
    if (!password.trim()) { setError('Please enter your password.'); return; }

    setLoading(true);
    setError('');

    const { error: loginError } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (loginError) {
      setError(loginError.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    router.replace('/dashboard' as any);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
        >
          {/* Logo */}
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.heading}>Welcome back</Text>
            <Text style={styles.subheading}>Log in to continue learning</Text>
          </View>

          {/* Form */}
          <View style={styles.form}>

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
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.passwordRow}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Enter your password"
                  placeholderTextColor="#999"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                />
                <Pressable
                  style={styles.eyeButton}
                  onPress={() => setShowPassword((prev) => !prev)}
                >
                  <Image
                    source={
                      showPassword
                        ? require('../assets/images/visible.png')
                        : require('../assets/images/hide.png')
                    }
                    style={styles.eyeImage}
                    resizeMode="contain"
                  />
                </Pressable>
              </View>
            </View>

            {error !== '' && (
              <View style={styles.errorBox}>
                <Text style={styles.errorText}>{error}</Text>
              </View>
            )}

            <Pressable
              style={styles.submitBtn}
              onPress={handleLogin}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text style={styles.submitBtnText}>Log in</Text>
              )}
            </Pressable>

            <Pressable
              style={styles.forgotBtn}
              onPress={() => router.push('/forgot-password' as any)}
            >
              <Text style={styles.forgotText}>Forgot password?</Text>
            </Pressable>

            <Pressable
              style={styles.registerLink}
              onPress={() => router.push('/create-account' as any)}
            >
              <Text style={styles.registerLinkText}>Don&apos;t have an account? Register</Text>
            </Pressable>

          </View>

          <Text style={styles.privacy}>
            Your data is safe. We never sell your information.
          </Text>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  scroll: { padding: 24, gap: 24 },
  logoContainer: { alignItems: 'center', marginTop: 16 },
  logo: { width: 120, height: 120 },
  header: { gap: 8, alignItems: 'center' },
  heading: { fontSize: 28, fontWeight: '800', color: '#1a1a1a' },
  subheading: { fontSize: 15, color: '#666' },
  form: { gap: 16 },
  inputGroup: { gap: 6 },
  label: { fontSize: 14, fontWeight: '600', color: '#1a1a1a' },
  input: { borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 14, fontSize: 15, color: '#1a1a1a', backgroundColor: '#FAFAFA' },
  passwordRow: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 12, backgroundColor: '#FAFAFA', paddingHorizontal: 16 },
  passwordInput: { flex: 1, paddingVertical: 14, fontSize: 15, color: '#1a1a1a' },
  eyeButton: { paddingLeft: 10, paddingVertical: 14 },
  eyeImage: { width: 22, height: 22 },
  errorBox: { backgroundColor: '#FEE2E2', borderRadius: 10, padding: 12 },
  errorText: { color: '#DC2626', fontSize: 14, fontWeight: '500' },
  submitBtn: { backgroundColor: '#410FA3', paddingVertical: 16, borderRadius: 16, alignItems: 'center', marginTop: 8 },
  submitBtnText: { color: '#FFFFFF', fontSize: 17, fontWeight: '700' },
  forgotBtn: { alignItems: 'center', paddingVertical: 12 },
  forgotText: { fontSize: 15, color: '#410FA3', fontWeight: '600' },
  registerLink: { alignItems: 'center', paddingVertical: 4 },
  registerLinkText: { fontSize: 15, color: '#410FA3', fontWeight: '600' },
  privacy: { fontSize: 12, color: '#999', textAlign: 'center' },
});