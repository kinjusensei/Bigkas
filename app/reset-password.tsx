import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { supabase } from '../services/supabase';

export default function ResetPasswordScreen() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'PASSWORD_RECOVERY' || session) {
          setReady(true);
        }
      }
    );
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  async function handleUpdatePassword() {
    if (!password.trim()) {
      setError('Please enter a new password.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    setError('');

    const { error: updateError } = await supabase.auth.updateUser({
      password: password,
    });

    if (updateError) {
      setError(updateError.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    setDone(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        {/* Icon */}
        <View style={styles.iconCircle}>
          <Text style={styles.iconText}>🔐</Text>
        </View>

        {/* Waiting */}
        {!ready && !done && (
          <View style={styles.waitingBox}>
            <ActivityIndicator size="large" color="#410FA3" />
            <Text style={styles.waitingText}>
              Verifying your code...
            </Text>
            <Text style={styles.waitingNote}>
              Please wait a moment
            </Text>
          </View>
        )}

        {/* Password form */}
        {ready && !done && (
          <>
            <View style={styles.header}>
              <Text style={styles.heading}>Set new password</Text>
              <Text style={styles.subheading}>
                Your new password must be at least 6 characters long.
              </Text>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>New password</Text>
              <TextInput
                style={styles.input}
                placeholder="At least 6 characters"
                placeholderTextColor="#999"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoFocus
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Confirm password</Text>
              <TextInput
                style={styles.input}
                placeholder="Type password again"
                placeholderTextColor="#999"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
              />
            </View>

            {error !== '' && (
              <View style={styles.errorBox}>
                <Text style={styles.errorText}>{error}</Text>
              </View>
            )}

            <Pressable
              style={styles.submitBtn}
              onPress={handleUpdatePassword}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text style={styles.submitBtnText}>Update password</Text>
              )}
            </Pressable>
          </>
        )}

        {/* Success */}
        {done && (
          <>
            <View style={styles.successBox}>
              <Text style={styles.successEmoji}>✅</Text>
              <Text style={styles.successTitle}>Password updated!</Text>
              <Text style={styles.successText}>
                Your password has been changed successfully.
                You can now log in with your new password.
              </Text>
            </View>

            <Pressable
              style={styles.submitBtn}
              onPress={() => router.push('/create-account' as any)}
            >
              <Text style={styles.submitBtnText}>Go to log in</Text>
            </Pressable>
          </>
        )}

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 24,
    gap: 20,
  },
  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: 999,
    backgroundColor: '#EEEDFE',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 8,
  },
  iconText: {
    fontSize: 32,
  },
  waitingBox: {
    alignItems: 'center',
    gap: 12,
    marginTop: 40,
  },
  waitingText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  waitingNote: {
    fontSize: 14,
    color: '#999',
  },
  header: {
    gap: 8,
  },
  heading: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1a1a1a',
  },
  subheading: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
  },
  inputGroup: {
    gap: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: '#1a1a1a',
    backgroundColor: '#FAFAFA',
  },
  errorBox: {
    backgroundColor: '#FEE2E2',
    borderRadius: 10,
    padding: 12,
  },
  errorText: {
    color: '#DC2626',
    fontSize: 14,
    fontWeight: '500',
  },
  submitBtn: {
    backgroundColor: '#410FA3',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  submitBtnText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
  successBox: {
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  successEmoji: {
    fontSize: 48,
  },
  successTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1a1a1a',
  },
  successText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
});