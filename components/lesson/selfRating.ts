import AsyncStorage from "@react-native-async-storage/async-storage";

// The learner's own rating of the speaking activity — the only thing the
// lesson's comfort features save. Kept on the device; never uploaded and
// never used for scores, XP or pass/fail.

export type LessonSelfRating = "easy" | "difficult" | "enjoyable";

const SELF_RATINGS_KEY = "lessonSelfRatings";

type StoredRatings = Record<string, { rating: LessonSelfRating; ratedAt: string }>;

export async function saveLessonSelfRating(
  lessonId: string,
  rating: LessonSelfRating,
): Promise<void> {
  const raw = await AsyncStorage.getItem(SELF_RATINGS_KEY);
  let ratings: StoredRatings = {};
  try {
    ratings = raw ? (JSON.parse(raw) as StoredRatings) : {};
  } catch {
    ratings = {};
  }
  ratings[lessonId] = { rating, ratedAt: new Date().toISOString() };
  await AsyncStorage.setItem(SELF_RATINGS_KEY, JSON.stringify(ratings));
}
