import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  BackHandler,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { bigkas, MIN_TAP } from "../constant/bigkasTheme";
import { resolveAvatarSource } from "../utils/avatars";
import { levelProgress, MAX_LEVEL } from "../utils/lessonCompletion";
import LogoutConfirmSheet from "./LogoutConfirmSheet";

// The three-dot menu on the Home header: a profile card, stats, menu rows
// and log out (which asks first, in LogoutConfirmSheet).

export type MenuAnchor = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type Props = {
  visible: boolean;
  // Where the three-dot button is on screen (from measureInWindow).
  anchor: MenuAnchor | null;
  onClose: () => void;

  displayName: string;
  photoUri: string | null;
  uploadingPhoto: boolean;
  languageName: string;
  totalXp: number;
  dayStreak: number;
  badgeCount: number;
  newBadgeCount: number;

  onOpenProfile: () => void;
  onOpenAchievements: () => void;
  onChangePhoto: () => void;
  onReport: () => void;
  // Only called after the learner confirms in the sheet.
  onLogout: () => void;
};

const SCRIM = "rgba(27,19,64,0.55)";
const PANEL_WIDTH = 318;
const ARROW = 14;
const DANGER = "#B3261E";
const DANGER_BG = "#FDECEC";
const DURATION = 150;

const APP_VERSION = Constants.expoConfig?.version ?? null;

export default function ProfileMenu(props: Props) {
  const { visible, anchor, onClose } = props;
  const insets = useSafeAreaInsets();
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();

  // Kept mounted while the close animation runs.
  const [mounted, setMounted] = useState(visible);
  const [logoutSheetVisible, setLogoutSheetVisible] = useState(false);
  const progress = useRef(new Animated.Value(0)).current;
  // Runs once the menu has finished closing, so a second modal (photo
  // picker, log out sheet) never opens on top of this one.
  const afterClose = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (visible) {
      setMounted(true);
      Animated.timing(progress, {
        toValue: 1,
        duration: DURATION,
        useNativeDriver: true,
      }).start();
    } else if (mounted) {
      Animated.timing(progress, {
        toValue: 0,
        duration: DURATION,
        useNativeDriver: true,
      }).start(() => {
        setMounted(false);
        const action = afterClose.current;
        afterClose.current = null;
        action?.();
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  // Android back closes the menu (Modal's onRequestClose covers most
  // devices; this covers the close animation window too).
  useEffect(() => {
    if (!visible) return;
    const sub = BackHandler.addEventListener("hardwareBackPress", () => {
      onClose();
      return true;
    });
    return () => sub.remove();
  }, [visible, onClose]);

  function closeThen(action: () => void) {
    afterClose.current = action;
    onClose();
  }

  const panelWidth = Math.min(PANEL_WIDTH, screenWidth - 32);
  const anchorRight = anchor ? anchor.x + anchor.width : screenWidth - 16;
  const right = Math.max(16, screenWidth - anchorRight);
  const top = (anchor ? anchor.y + anchor.height : insets.top + 56) + 4;
  // Arrow points at the middle of the three-dot button.
  const arrowRight = anchor
    ? Math.max(12, anchorRight - anchor.width / 2 - ARROW / 2 - right)
    : 18;
  const maxHeight = Math.min(
    screenHeight * 0.85,
    screenHeight - top - ARROW / 2 - insets.bottom - 16,
  );

  const xpLevel = levelProgress(props.totalXp);
  const atMax = xpLevel.level >= MAX_LEVEL;
  const intoLevel = Math.min(xpLevel.intoLevel, xpLevel.perLevel);
  const xpToNext = xpLevel.perLevel - intoLevel;
  const avatarLetter = (props.displayName || "L").charAt(0).toUpperCase();

  const rows: {
    icon: keyof typeof Ionicons.glyphMap;
    label: string;
    subtitle: string;
    onPress: () => void;
    pill?: number;
  }[] = [
    {
      icon: "person-outline",
      label: "My profile",
      subtitle: "Stats, game history, badges",
      onPress: () => closeThen(props.onOpenProfile),
    },
    {
      icon: "ribbon-outline",
      label: "Achievements",
      subtitle: "Badges and milestones",
      onPress: () => closeThen(props.onOpenAchievements),
      pill: props.newBadgeCount,
    },
    {
      icon: "camera-outline",
      label: "Change profile photo",
      subtitle: "Pick an avatar or upload one",
      onPress: () => closeThen(props.onChangePhoto),
    },
    // No Settings row: the app has no settings screen yet.
    {
      icon: "flag-outline",
      label: "Report a problem",
      subtitle: "Tell us what went wrong",
      onPress: () => closeThen(props.onReport),
    },
  ];

  const stats: {
    icon: keyof typeof Ionicons.glyphMap;
    value: number;
    label: string;
  }[] = [
    { icon: "flame", value: props.dayStreak, label: "Day streak" },
    { icon: "star", value: props.totalXp, label: "Total XP" },
    { icon: "medal", value: props.badgeCount, label: "Badges" },
  ];

  const animatedStyle = {
    opacity: progress,
    transform: [
      {
        translateY: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [-8, 0],
        }),
      },
      {
        scale: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0.96, 1],
        }),
      },
    ],
  };

  return (
    <>
      {mounted && (
        <Modal
          transparent
          visible
          animationType="none"
          statusBarTranslucent
          onRequestClose={onClose}
        >
          <Animated.View
            style={[
              StyleSheet.absoluteFill,
              styles.scrim,
              { opacity: progress },
            ]}
          >
            <Pressable
              style={StyleSheet.absoluteFill}
              onPress={onClose}
              accessibilityRole="button"
              accessibilityLabel="Close menu"
            />
          </Animated.View>

          <Animated.View
            style={[
              styles.panelWrap,
              { top, right, width: panelWidth },
              animatedStyle,
            ]}
          >
            <View style={[styles.arrow, { right: arrowRight }]} />

            <View
              style={[styles.panel, { maxHeight }]}
              accessibilityRole="menu"
              accessibilityLabel="Profile menu"
            >
              <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
                {/* HEADER CARD */}
                <View style={styles.headerCard}>
                  <View style={styles.headerCircle} />

                  <View style={styles.headerTop}>
                    <View style={styles.avatarWrap}>
                      <MenuAvatar
                        photoUri={props.photoUri}
                        uploading={props.uploadingPhoto}
                        letter={avatarLetter}
                      />
                      <Pressable
                        style={styles.cameraHit}
                        onPress={() => closeThen(props.onChangePhoto)}
                        accessibilityRole="button"
                        accessibilityLabel="Change profile photo"
                      >
                        <View style={styles.cameraBadge}>
                          <Ionicons
                            name="camera"
                            size={13}
                            color={bigkas.primary}
                          />
                        </View>
                      </Pressable>
                    </View>

                    <View style={styles.headerText}>
                      <Text style={styles.name} numberOfLines={1}>
                        {props.displayName}
                      </Text>
                      <Text style={styles.subtitle} numberOfLines={1}>
                        Bigkas Learner · {props.languageName}
                      </Text>
                    </View>

                    <View
                      style={styles.levelPill}
                      accessible
                      accessibilityLabel={`Level ${xpLevel.level}`}
                    >
                      <Text style={styles.levelPillText}>
                        LVL {xpLevel.level}
                      </Text>
                    </View>
                  </View>

                  <View
                    accessible
                    accessibilityLabel={
                      atMax
                        ? `Level ${xpLevel.level}, maximum level`
                        : `${intoLevel} of ${xpLevel.perLevel} XP, ${xpToNext} XP to level ${xpLevel.level + 1}`
                    }
                  >
                    <View style={styles.xpLabels}>
                      <Text style={styles.xpLeft}>
                        {intoLevel} / {xpLevel.perLevel} XP
                      </Text>
                      <Text style={styles.xpRight}>
                        {atMax
                          ? "Max level"
                          : `${xpToNext} XP to Level ${xpLevel.level + 1}`}
                      </Text>
                    </View>
                    <View style={styles.xpTrack}>
                      <View
                        style={[
                          styles.xpFill,
                          { width: `${(atMax ? 1 : xpLevel.fraction) * 100}%` },
                        ]}
                      />
                    </View>
                  </View>
                </View>

                {/* STATS */}
                <View style={styles.statsStrip}>
                  {stats.map((stat) => (
                    <View
                      key={stat.label}
                      style={styles.statCard}
                      accessible
                      accessibilityLabel={`${stat.label}: ${stat.value}`}
                    >
                      <Ionicons
                        name={stat.icon}
                        size={18}
                        color={bigkas.primary}
                      />
                      <Text style={styles.statValue}>{stat.value}</Text>
                      <Text style={styles.statLabel} numberOfLines={1}>
                        {stat.label}
                      </Text>
                    </View>
                  ))}
                </View>

                {/* ROWS */}
                <View style={styles.rows}>
                  {rows.map((row) => (
                    <Pressable
                      key={row.label}
                      onPress={row.onPress}
                      style={({ pressed }) => [
                        styles.row,
                        pressed && styles.rowPressed,
                      ]}
                      accessibilityRole="menuitem"
                      accessibilityLabel={
                        row.pill ? `${row.label}, ${row.pill} new` : row.label
                      }
                      accessibilityHint={row.subtitle}
                    >
                      <View style={styles.rowIcon}>
                        <Ionicons
                          name={row.icon}
                          size={20}
                          color={bigkas.primary}
                        />
                      </View>
                      <View style={styles.rowText}>
                        <Text style={styles.rowLabel}>{row.label}</Text>
                        <Text style={styles.rowSubtitle} numberOfLines={1}>
                          {row.subtitle}
                        </Text>
                      </View>
                      {!!row.pill && row.pill > 0 && (
                        <View style={styles.newPill}>
                          <Text style={styles.newPillText}>{row.pill} new</Text>
                        </View>
                      )}
                      <Ionicons
                        name="chevron-forward"
                        size={18}
                        color={bigkas.muted}
                      />
                    </Pressable>
                  ))}
                </View>

                {/* FOOTER */}
                <View style={styles.footer}>
                  <Pressable
                    onPress={() => closeThen(() => setLogoutSheetVisible(true))}
                    style={({ pressed }) => [
                      styles.logoutButton,
                      pressed && { opacity: 0.8 },
                    ]}
                    accessibilityRole="button"
                    accessibilityLabel="Log out"
                  >
                    <Ionicons name="log-out-outline" size={20} color={DANGER} />
                    <Text style={styles.logoutText}>Log out</Text>
                  </Pressable>
                  {APP_VERSION && (
                    <Text style={styles.version}>Bigkas v{APP_VERSION}</Text>
                  )}
                </View>
              </ScrollView>
            </View>
          </Animated.View>
        </Modal>
      )}

      <LogoutConfirmSheet
        visible={logoutSheetVisible}
        onStay={() => setLogoutSheetVisible(false)}
        onLogout={() => {
          setLogoutSheetVisible(false);
          props.onLogout();
        }}
      />
    </>
  );
}

function MenuAvatar({
  photoUri,
  uploading,
  letter,
}: {
  photoUri: string | null;
  uploading: boolean;
  letter: string;
}) {
  if (uploading) {
    return (
      <View style={[styles.avatar, styles.avatarFallback]}>
        <ActivityIndicator size="small" color={bigkas.primary} />
      </View>
    );
  }
  if (photoUri) {
    return (
      <Image source={resolveAvatarSource(photoUri)} style={styles.avatar} />
    );
  }
  return (
    <View style={[styles.avatar, styles.avatarFallback]}>
      <Text style={styles.avatarLetter}>{letter}</Text>
    </View>
  );
}

const AVATAR = 56;

const styles = StyleSheet.create({
  scrim: {
    backgroundColor: SCRIM,
  },

  panelWrap: {
    position: "absolute",
  },

  arrow: {
    position: "absolute",
    top: 0,
    width: ARROW,
    height: ARROW,
    backgroundColor: bigkas.primary,
    borderRadius: 3,
    transform: [{ rotate: "45deg" }],
  },

  panel: {
    marginTop: ARROW / 2,
    backgroundColor: bigkas.white,
    borderRadius: 24,
    overflow: "hidden",
    shadowColor: bigkas.ink,
    shadowOpacity: 0.28,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 12 },
    elevation: 16,
  },

  /* Header card */
  headerCard: {
    backgroundColor: bigkas.primary,
    padding: 16,
    gap: 14,
    overflow: "hidden",
  },

  headerCircle: {
    position: "absolute",
    top: -60,
    right: -50,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: bigkas.accent,
  },

  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  // Larger than the avatar so the camera button's 44x44 touch area stays
  // inside it (Android ignores touches outside a parent's bounds).
  avatarWrap: {
    width: AVATAR + 8,
    height: AVATAR + 8,
  },

  avatar: {
    width: AVATAR,
    height: AVATAR,
    borderRadius: AVATAR / 2,
    borderWidth: 3,
    borderColor: bigkas.white,
    resizeMode: "cover",
  },

  avatarFallback: {
    backgroundColor: bigkas.gold,
    alignItems: "center",
    justifyContent: "center",
  },

  avatarLetter: {
    fontSize: 24,
    fontWeight: "800",
    color: bigkas.primary,
  },

  // 44x44 touch area; the 24px badge sits in its bottom-right corner,
  // over the avatar's bottom-right edge.
  cameraHit: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: MIN_TAP,
    height: MIN_TAP,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },

  cameraBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: bigkas.white,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: bigkas.ink,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    elevation: 3,
  },

  headerText: {
    flex: 1,
  },

  name: {
    fontSize: 19,
    fontWeight: "800",
    color: bigkas.white,
  },

  subtitle: {
    fontSize: 12,
    color: "rgba(255,255,255,0.8)",
    marginTop: 2,
  },

  levelPill: {
    backgroundColor: bigkas.gold,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },

  levelPillText: {
    fontSize: 12,
    fontWeight: "800",
    color: bigkas.ink,
  },

  xpLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },

  xpLeft: {
    fontSize: 12,
    fontWeight: "600",
    color: bigkas.white,
  },

  xpRight: {
    fontSize: 12,
    fontWeight: "700",
    color: bigkas.gold,
  },

  xpTrack: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,0.25)",
    overflow: "hidden",
  },

  xpFill: {
    height: "100%",
    borderRadius: 4,
    backgroundColor: bigkas.gold,
  },

  /* Stats */
  statsStrip: {
    flexDirection: "row",
    gap: 8,
    padding: 12,
    backgroundColor: bigkas.background,
  },

  statCard: {
    flex: 1,
    alignItems: "center",
    gap: 2,
    paddingVertical: 10,
    borderRadius: 14,
    backgroundColor: bigkas.white,
  },

  statValue: {
    fontSize: 16,
    fontWeight: "800",
    color: bigkas.ink,
  },

  statLabel: {
    fontSize: 11,
    color: bigkas.muted,
  },

  /* Rows */
  rows: {
    paddingVertical: 6,
  },

  row: {
    minHeight: 56,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  rowPressed: {
    backgroundColor: bigkas.background,
  },

  rowIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: bigkas.chip,
    alignItems: "center",
    justifyContent: "center",
  },

  rowText: {
    flex: 1,
  },

  rowLabel: {
    fontSize: 15,
    fontWeight: "700",
    color: bigkas.ink,
  },

  rowSubtitle: {
    fontSize: 12,
    color: bigkas.muted,
    marginTop: 1,
  },

  newPill: {
    backgroundColor: bigkas.gold,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },

  newPillText: {
    fontSize: 11,
    fontWeight: "800",
    color: bigkas.ink,
  },

  /* Footer */
  footer: {
    borderTopWidth: 1,
    borderTopColor: bigkas.border,
    padding: 16,
    paddingBottom: 12,
    gap: 10,
  },

  logoutButton: {
    height: 48,
    borderRadius: 14,
    backgroundColor: DANGER_BG,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  logoutText: {
    fontSize: 15,
    fontWeight: "700",
    color: DANGER,
  },

  version: {
    textAlign: "center",
    fontSize: 11,
    color: bigkas.muted,
  },
});
