import { useRouter } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>

      {/* Logo area */}
      <View style={styles.logoArea}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.appName}>Bigkas</Text>
        <Text style={styles.tagline}>
          Learn Philippine dialects through{'\n'}fun and interactive lessons
        </Text>

        {/* Dialect row */}
        <View style={styles.dialectRow}>
          <Text style={[styles.dialectItem, { color: '#F0997B' }]}>
            Kapampangan
          </Text>
          <Text style={styles.dialectDivider}>·</Text>
          <Text style={[styles.dialectItem, { color: '#5DCAA5' }]}>
            Tagalog
          </Text>
          <Text style={styles.dialectDivider}>·</Text>
          <Text style={[styles.dialectItem, { color: '#AFA9EC' }]}>
            Waray
          </Text>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonArea}>
        <Pressable
          style={styles.primaryButton}
          onPress={() => router.push('/intro-slides' as any)}
        >
          <Text style={styles.primaryButtonText}>Get started</Text>
        </Pressable>
        <Pressable
          style={styles.secondaryButton}
          onPress={() => router.push('/login' as any)}
        >
          <Text style={styles.secondaryButtonText}>
            I already have an account
          </Text>
        </Pressable>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#410FA3',
    paddingHorizontal: 24,
    paddingBottom: 24,
    justifyContent: 'space-between',
  },
  logoArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 8,
  },
  appName: {
    fontSize: 38,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -0.5,
  },
  tagline: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.70)',
    textAlign: 'center',
    lineHeight: 22,
  },
  dialectRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 999,
    marginTop: 4,
  },
  dialectItem: {
    fontSize: 14,
    fontWeight: '700',
  },
  dialectDivider: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.4)',
    fontWeight: '700',
  },
  buttonArea: {
    gap: 12,
    marginBottom: 16,
  },
  primaryButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
  },
  primaryButtonText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#410FA3',
  },
  secondaryButton: {
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.85)',
  },
  footer: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.4)',
    textAlign: 'center',
  },
});