import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
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

export default function OtpVerifyScreen() {
  const router = useRouter();
  const { email } = useLocalSearchParams<{ email: string }>();

  const [code, setCode] = useState(['', '', '', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  const inputs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function handleCodeChange(text: string, index: number) {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 7) {
      inputs.current[index + 1]?.focus();
    }
  }

  function handleKeyPress(key: string, index: number) {
    if (key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  }

  async function handleVerify() {
    const fullCode = code.join('');

    if (fullCode.length < 8) {
      setError('Please enter the full 8 digit code.');
      return;
    }

    setLoading(true);
    setError('');

    const { error: verifyError } = await supabase.auth.verifyOtp({
      email: email,
      token: fullCode,
      type: 'email',
    });

    if (verifyError) {
      setError('Invalid or expired code. Please try again.');
      setLoading(false);
      return;
    }

    setLoading(false);
    router.push('/reset-password' as any);
  }

  async function handleResend() {
    setCanResend(false);
    setTimer(60);
    setError('');
    setCode(['', '', '', '', '', '', '', '']);
    inputs.current[0]?.focus();

    await supabase.auth.resetPasswordForEmail(email);

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        {/* Back button */}
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Back</Text>
        </Pressable>

        {/* Icon */}
        <View style={styles.iconCircle}>
          <Text style={styles.iconText}>📧</Text>
        </View>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.heading}>Check your email</Text>
          <Text style={styles.subheading}>
            We sent an 8 digit code to:
          </Text>
          <Text style={styles.emailText}>{email}</Text>
        </View>

        {/* OTP boxes - 8 boxes */}
        <View style={styles.codeRow}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => { inputs.current[index] = ref; }}
              style={[
                styles.codeBox,
                digit ? styles.codeBoxFilled : null,
              ]}
              value={digit}
              onChangeText={(text) => handleCodeChange(text.slice(-1), index)}
              onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent.key, index)}
              keyboardType="number-pad"
              maxLength={1}
              selectTextOnFocus
              autoFocus={index === 0}
            />
          ))}
        </View>

        {/* Error */}
        {error !== '' && (
          <View style={styles.errorBox}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}

        {/* Verify button */}
        <Pressable
          style={styles.submitBtn}
          onPress={handleVerify}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.submitBtnText}>Verify code</Text>
          )}
        </Pressable>

        {/* Resend */}
        {canResend ? (
          <Pressable style={styles.resendBtn} onPress={handleResend}>
            <Text style={styles.resendText}>Resend code</Text>
          </Pressable>
        ) : (
          <Text style={styles.timerText}>
            Resend code in {timer}s
          </Text>
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
  backBtn: {
    marginBottom: 8,
  },
  backText: {
    fontSize: 15,
    color: '#410FA3',
    fontWeight: '600',
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
  header: {
    alignItems: 'center',
    gap: 6,
  },
  heading: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1a1a1a',
    textAlign: 'center',
  },
  subheading: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
  },
  emailText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#410FA3',
    textAlign: 'center',
  },
  codeRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginVertical: 8,
  },
  codeBox: {
    width: 38,
    height: 50,
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
    backgroundColor: '#FAFAFA',
  },
  codeBoxFilled: {
    borderColor: '#410FA3',
    backgroundColor: '#EEEDFE',
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
    textAlign: 'center',
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
  resendBtn: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  resendText: {
    fontSize: 15,
    color: '#410FA3',
    fontWeight: '600',
  },
  timerText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    paddingVertical: 12,
  },
});