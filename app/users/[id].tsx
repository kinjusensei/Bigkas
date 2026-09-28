import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { supabase } from '../../services/supabase';

type Profile = {
  id: string;
  display_name: string | null;
  xp: number;
  level: number;
  avatar_url: string | null;
};

const LEVEL_LABELS: Record<number, { label: string; color: string }> = {
  1: { label: 'Beginner',     color: '#6B7280' },
  2: { label: 'Elementary',   color: '#3B82F6' },
  3: { label: 'Intermediate', color: '#8B5CF6' },
  4: { label: 'Advanced',     color: '#F59E0B' },
  5: { label: 'Master',       color: '#EF4444' },
};

const ACHIEVEMENTS = [
  { id: 'first_lesson',   icon: '📖', title: 'First Lesson',     desc: 'Complete your first lesson',          xpRequired: 20   },
  { id: 'level_2',        icon: '⭐', title: 'Level Up!',        desc: 'Reach Level 2',                       xpRequired: 100  },
  { id: 'word_collector', icon: '📝', title: 'Word Collector',   desc: 'Learn 30 words',                      xpRequired: 60   },
  { id: 'level_3',        icon: '🔥', title: 'On Fire!',         desc: 'Reach Level 3',                       xpRequired: 250  },
  { id: 'dedicated',      icon: '💪', title: 'Dedicated',        desc: 'Earn 200 XP',                         xpRequired: 200  },
  { id: 'level_4',        icon: '🚀', title: 'Advanced',         desc: 'Reach Level 4',                       xpRequired: 500  },
  { id: 'scholar',        icon: '🎓', title: 'Scholar',          desc: 'Earn 750 XP',                         xpRequired: 750  },
  { id: 'master',         icon: '👑', title: 'Master',           desc: 'Reach Level 5 — Max level!',          xpRequired: 1000 },
];

const BADGES = [
  { id: 'kapampangan', icon: '🗣️', title: 'Kapampangan',  desc: 'Started Kapampangan lessons', xpRequired: 20  },
  { id: 'tagalog',     icon: '🗣️', title: 'Tagalog',      desc: 'Started Tagalog lessons',     xpRequired: 20  },
  { id: 'waray',       icon: '🗣️', title: 'Waray',        desc: 'Started Waray lessons',       xpRequired: 20  },
  { id: 'trilingual',  icon: '🌍', title: 'Trilingual',   desc: 'Study all 3 dialects',        xpRequired: 500 },
];

export default function UserProfileScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, [id]);

  async function loadProfile() {
    setLoading(true);

    const { data: { user } } = await supabase.auth.getUser();

    if (user?.id === id) {
      router.replace('/user-profile' as any);
      return;
    }

    const { data, error } = await supabase
      .from('profiles')
      .select('id, display_name, xp, level, avatar_url')
      .eq('id', id)
      .single();

    if (error) console.error('Profile fetch error:', error.message);

    setProfile(data ?? null);
    setLoading(false);
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#410FA3" />
        <Text style={styles.loadingText}>Loading profile...</Text>
      </View>
    );
  }

  if (!profile) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={{ fontSize: 40 }}>😕</Text>
        <Text style={styles.loadingText}>Profile not found.</Text>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>Go Back</Text>
        </Pressable>
      </View>
    );
  }

  const levelInfo = LEVEL_LABELS[profile.level] ?? LEVEL_LABELS[1];
  const displayName = profile.display_name ?? 'Unknown';
  const xp = profile.xp ?? 0;
  const earnedAchievements = ACHIEVEMENTS.filter(a => xp >= a.xpRequired);
  const earnedBadges = BADGES.filter(b => xp >= b.xpRequired);

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.back()} hitSlop={8}>
          <Text style={styles.backButtonText}>‹</Text>
        </Pressable>
        <View style={styles.headerText}>
          <Text style={styles.headerTitle}>{displayName}&apos;s Profile</Text>
          <Text style={styles.headerSub}>Achievements & badges</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>

        {/* Profile card */}
        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            {profile.avatar_url ? (
              <Image source={{ uri: profile.avatar_url }} style={styles.avatar} />
            ) : (
              <View style={styles.avatarCircle}>
                <Text style={styles.avatarLetter}>
                  {displayName.charAt(0).toUpperCase()}
                </Text>
              </View>
            )}
          </View>
          <Text style={styles.profileName}>{displayName}</Text>
          <View style={[styles.levelBadge, { backgroundColor: levelInfo.color + '22' }]}>
            <Text style={[styles.levelBadgeText, { color: levelInfo.color }]}>
              Level {profile.level} · {levelInfo.label}
            </Text>
          </View>
          <Text style={styles.xpText}>⭐ {xp} XP total</Text>
        </View>

        {/* Stats row */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statNum}>{earnedAchievements.length}</Text>
            <Text style={styles.statLabel}>Achievements</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNum}>{earnedBadges.length}</Text>
            <Text style={styles.statLabel}>Badges</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNum}>{profile.level}</Text>
            <Text style={styles.statLabel}>Level</Text>
          </View>
        </View>

        {/* Achievements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🏆 Achievements</Text>
          <Text style={styles.sectionSub}>{earnedAchievements.length}/{ACHIEVEMENTS.length} earned</Text>
          {ACHIEVEMENTS.map((achievement) => {
            const earned = xp >= achievement.xpRequired;
            return (
              <View
                key={achievement.id}
                style={[styles.achievementCard, !earned && styles.achievementLocked]}
              >
                <View style={[styles.achievementIcon, { backgroundColor: earned ? '#EEEDFE' : '#F3F4F6' }]}>
                  <Text style={[styles.achievementEmoji, !earned && { opacity: 0.4 }]}>
                    {achievement.icon}
                  </Text>
                </View>
                <View style={styles.achievementInfo}>
                  <Text style={[styles.achievementTitle, !earned && styles.lockedText]}>
                    {achievement.title}
                  </Text>
                  <Text style={styles.achievementDesc}>{achievement.desc}</Text>
                  {!earned && (
                    <Text style={styles.achievementXP}>🔒 {achievement.xpRequired} XP needed</Text>
                  )}
                </View>
                {earned && (
                  <View style={styles.earnedBadge}>
                    <Text style={styles.earnedBadgeText}>✓</Text>
                  </View>
                )}
              </View>
            );
          })}
        </View>

        {/* Badges */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🎖️ Badges</Text>
          <Text style={styles.sectionSub}>{earnedBadges.length}/{BADGES.length} earned</Text>
          <View style={styles.badgesGrid}>
            {BADGES.map((badge) => {
              const earned = xp >= badge.xpRequired;
              return (
                <View
                  key={badge.id}
                  style={[styles.badgeCard, !earned && styles.badgeLocked]}
                >
                  <Text style={[styles.badgeEmoji, !earned && { opacity: 0.4 }]}>
                    {badge.icon}
                  </Text>
                  <Text style={[styles.badgeTitle, !earned && styles.lockedText]}>
                    {badge.title}
                  </Text>
                  <Text style={styles.badgeDesc}>{badge.desc}</Text>
                  {!earned && (
                    <Text style={styles.badgeXP}>{badge.xpRequired} XP</Text>
                  )}
                </View>
              );
            })}
          </View>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F9FAFB', gap: 12 },
  loadingText: { fontSize: 15, color: '#666' },
  container: { flex: 1, backgroundColor: '#F9FAFB' },

  header: { backgroundColor: '#410FA3', paddingHorizontal: 24, paddingTop: 20, paddingBottom: 24, flexDirection: 'row', alignItems: 'center', gap: 12 },
  backButton: { width: 36, height: 36, borderRadius: 18, backgroundColor: 'rgba(255,255,255,0.2)', alignItems: 'center', justifyContent: 'center' },
  backButtonText: { fontSize: 26, color: '#FFFFFF', fontWeight: '300', lineHeight: 30 },
  headerText: { flex: 1, gap: 4 },
  headerTitle: { fontSize: 20, fontWeight: '800', color: '#FFFFFF' },
  headerSub: { fontSize: 14, color: 'rgba(255,255,255,0.75)' },

  scroll: { padding: 16, gap: 16, paddingBottom: 40 },

  profileCard: { backgroundColor: '#FFFFFF', borderRadius: 20, padding: 24, alignItems: 'center', gap: 10, borderWidth: 1, borderColor: '#E5E7EB' },
  avatarContainer: { marginBottom: 4 },
  avatar: { width: 80, height: 80, borderRadius: 999, borderWidth: 3, borderColor: '#410FA3' },
  avatarCircle: { width: 80, height: 80, borderRadius: 999, backgroundColor: '#EEEDFE', borderWidth: 3, borderColor: '#410FA3', alignItems: 'center', justifyContent: 'center' },
  avatarLetter: { fontSize: 32, fontWeight: '800', color: '#410FA3' },
  profileName: { fontSize: 22, fontWeight: '800', color: '#1a1a1a' },
  levelBadge: { paddingHorizontal: 14, paddingVertical: 6, borderRadius: 999 },
  levelBadgeText: { fontSize: 13, fontWeight: '700' },
  xpText: { fontSize: 14, color: '#666', fontWeight: '500' },

  statsRow: { flexDirection: 'row', gap: 10 },
  statCard: { flex: 1, backgroundColor: '#FFFFFF', borderRadius: 14, padding: 14, alignItems: 'center', borderWidth: 1, borderColor: '#E5E7EB', gap: 4 },
  statNum: { fontSize: 24, fontWeight: '800', color: '#410FA3' },
  statLabel: { fontSize: 11, color: '#999', fontWeight: '500' },

  section: { gap: 10 },
  sectionTitle: { fontSize: 17, fontWeight: '800', color: '#1a1a1a' },
  sectionSub: { fontSize: 13, color: '#999', marginTop: -4 },

  achievementCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 14, padding: 14, gap: 12, borderWidth: 1, borderColor: '#E5E7EB' },
  achievementLocked: { opacity: 0.6 },
  achievementIcon: { width: 48, height: 48, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  achievementEmoji: { fontSize: 24 },
  achievementInfo: { flex: 1, gap: 2 },
  achievementTitle: { fontSize: 14, fontWeight: '700', color: '#1a1a1a' },
  achievementDesc: { fontSize: 12, color: '#666' },
  achievementXP: { fontSize: 11, color: '#DC2626', fontWeight: '600', marginTop: 2 },
  lockedText: { color: '#9CA3AF' },
  earnedBadge: { width: 28, height: 28, borderRadius: 999, backgroundColor: '#1D9E75', alignItems: 'center', justifyContent: 'center' },
  earnedBadgeText: { fontSize: 14, color: '#FFFFFF', fontWeight: '800' },

  badgesGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  badgeCard: { width: '47%', backgroundColor: '#FFFFFF', borderRadius: 14, padding: 14, alignItems: 'center', borderWidth: 1, borderColor: '#E5E7EB', gap: 6 },
  badgeLocked: { opacity: 0.5 },
  badgeEmoji: { fontSize: 30 },
  badgeTitle: { fontSize: 13, fontWeight: '700', color: '#1a1a1a', textAlign: 'center' },
  badgeDesc: { fontSize: 11, color: '#999', textAlign: 'center' },
  badgeXP: { fontSize: 11, color: '#DC2626', fontWeight: '600' },

  backBtn: { marginTop: 8, backgroundColor: '#410FA3', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 12 },
  backBtnText: { color: '#fff', fontWeight: '700', fontSize: 15 },
});