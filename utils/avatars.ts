import { ImageSourcePropType } from "react-native";

// =========================================================
// Preset avatars + resolver
// =========================================================
// Presets are stored in profiles.avatar_url as "preset:<id>" rather
// than a URL, so one column handles both presets and custom uploads
// with no schema change.
//
// TODO: all four presets currently point at the same mascot image.
// Replace with distinct tarsier art (boy / girl / student / scholar)
// in assets/images/ — the ids below don't need to change, so any
// avatar already saved on a profile keeps working.

export const PRESET_PREFIX = "preset:";

export type PresetAvatar = {
  id: string;
  label: string;
  source: ImageSourcePropType;
};

export const PRESET_AVATARS: PresetAvatar[] = [
  {
    id: "tarsier_boy",
    label: "Tarsier Boy",
    source: require("../assets/images/Tarsier Boy.png"),
  },
  {
    id: "tarsier_girl",
    label: "Tarsier Girl",
    source: require("../assets/images/Tarsier Girl.png"),
  },
  {
    id: "tarsier_student",
    label: "Student",
    source: require("../assets/images/Tarsier Student.png"),
  },
  {
    id: "tarsier_scholar",
    label: "Scholar",
    source: require("../assets/images/Tarsier Scholar.png"),
  },
];

/** Builds the string stored in profiles.avatar_url for a preset. */
export function presetValue(id: string): string {
  return `${PRESET_PREFIX}${id}`;
}

/** True if an avatar_url value refers to a bundled preset. */
export function isPreset(avatarUrl?: string | null): boolean {
  return !!avatarUrl && avatarUrl.startsWith(PRESET_PREFIX);
}

export function findPreset(
  avatarUrl?: string | null,
): PresetAvatar | undefined {
  if (!isPreset(avatarUrl)) return undefined;
  const id = avatarUrl!.slice(PRESET_PREFIX.length);
  return PRESET_AVATARS.find((p) => p.id === id);
}

// Resolves whatever is stored in profiles.avatar_url into something an
// <Image source={...}> can use. Three cases:
//   "preset:tarsier_boy"  -> the bundled image
//   "https://.../x.jpg"   -> a remote uploaded photo
//   null / unknown preset -> the fallback preset
//
// The unknown-preset case matters: if a preset is renamed or removed
// from this file, existing profiles still hold the old id. Falling back
// keeps those accounts showing something instead of a blank avatar.
export function resolveAvatarSource(
  avatarUrl?: string | null,
): ImageSourcePropType {
  if (isPreset(avatarUrl)) {
    const preset = findPreset(avatarUrl);
    if (preset) return preset.source;
    return PRESET_AVATARS[0].source;
  }

  if (avatarUrl) {
    return { uri: avatarUrl };
  }

  return PRESET_AVATARS[0].source;
}
