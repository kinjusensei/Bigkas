import { structuredLessonsById } from "../data/lessons/structuredLessons";
import { practiceLevels } from "../data/practiceData";
import { retryOnJwtIssuedAtFuture, supabase } from "./supabase";

// Read-only data for the Profile and Lesson history screens. Nothing here
// writes: XP, level, streaks and completions are saved elsewhere
// (services/lessonCompletionService.ts, services/streak.ts,
// services/winningStreak.ts).

export type ProfileDialect = "Tagalog" | "Kapampangan" | "Waray";
export const PROFILE_DIALECTS: ProfileDialect[] = [
  "Tagalog",
  "Kapampangan",
  "Waray",
];

// One lesson_completions row (sql/lesson_completions.sql). The table keeps
// one row per lesson with the best assessment score, so "attempts" are
// lessons, ordered by their last save.
export type LessonHistoryEntry = {
  lessonId: string;
  dialect: ProfileDialect | null;
  lessonNumber: number | null;
  title: string;
  bestScore: number | null;
  passed: boolean;
  // The latest attempt was surrendered (lesson_completions.status; false
  // until that column exists).
  surrendered: boolean;
  // XP already added for this lesson's activities (xp_awarded × the
  // lesson's reward table).
  xpEarned: number;
  completedAt: string | null;
  updatedAt: string | null;
};

export type ProfileStats = {
  displayName: string;
  avatarUrl: string | null;
  totalXp: number;
  dailyStreak: number;
  winStreak: number;
};

export const PASS_PERCENT = 70;

export function dialectFromLessonId(lessonId: string): ProfileDialect | null {
  const prefix = lessonId.split("_")[0]?.toLowerCase();
  return (
    PROFILE_DIALECTS.find((dialect) => dialect.toLowerCase() === prefix) ?? null
  );
}

export function lessonNumberFromId(lessonId: string): number | null {
  const number = Number(lessonId.split("_")[1]);
  return Number.isFinite(number) && number > 0 ? number : null;
}

export function lessonTitle(lessonId: string): string {
  return (
    structuredLessonsById[lessonId]?.title ??
    practiceLevels.find((level) => level.lessonId === lessonId)?.title ??
    lessonId
  );
}

// XP already given for a lesson: the reward rows whose section is in
// xp_awarded (same rule as useStoryProgress.getAwardedXp).
function awardedXp(lessonId: string, xpAwarded: string[]): number {
  return (structuredLessonsById[lessonId]?.rewards?.items ?? [])
    .filter((item) => xpAwarded.includes(item.section))
    .reduce((sum, item) => sum + item.xp, 0);
}

async function getUserId(): Promise<string | null> {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return session?.user?.id ?? null;
}

type CompletionRow = {
  lesson_id: string;
  best_score: number | null;
  passed: boolean | null;
  xp_awarded: string[] | null;
  completed_at: string | null;
  updated_at: string | null;
  status?: string | null;
};

// The current user's lesson_completions rows, newest first. Returns [] on
// any error so the screens still render.
export async function getLessonHistory(): Promise<LessonHistoryEntry[]> {
  try {
    const userId = await getUserId();
    if (!userId) return [];
    const columns =
      "lesson_id, best_score, passed, xp_awarded, completed_at, updated_at";
    const read = (select: string) =>
      supabase
        .from("lesson_completions")
        .select(select)
        .eq("user_id", userId)
        .order("updated_at", { ascending: false });
    const rows = await retryOnJwtIssuedAtFuture(async () => {
      // status is optional (sql/lesson_completions.sql section 4): read
      // without it if the column isn't there yet.
      let { data, error } = await read(`${columns}, status`);
      if (error) ({ data, error } = await read(columns));
      if (error) throw error;
      return (data ?? []) as unknown as CompletionRow[];
    });
    return rows.map((row) => ({
      lessonId: row.lesson_id,
      dialect: dialectFromLessonId(row.lesson_id),
      lessonNumber: lessonNumberFromId(row.lesson_id),
      title: lessonTitle(row.lesson_id),
      bestScore: typeof row.best_score === "number" ? row.best_score : null,
      // Only a passed assessment counts: a surrendered attempt can save a
      // partial score of 70%+ without passing.
      passed: !!row.passed,
      surrendered: row.status === "surrendered",
      xpEarned: awardedXp(row.lesson_id, row.xp_awarded ?? []),
      completedAt: row.completed_at,
      updatedAt: row.updated_at,
    }));
  } catch (error) {
    console.warn("Unable to load lesson history:", error);
    return [];
  }
}

// Name, avatar, XP and both streaks. Each read is fail-soft.
export async function getProfileStats(): Promise<ProfileStats | null> {
  const userId = await getUserId();
  if (!userId) return null;

  const [profile, daily, wins] = await Promise.all([
    supabase
      .from("profiles")
      .select("display_name, avatar_url, xp")
      .eq("id", userId)
      .maybeSingle(),
    // Read only — the dashboard updates the daily streak on open.
    supabase
      .from("daily_streaks")
      .select("current_streak")
      .eq("user_id", userId)
      .maybeSingle(),
    supabase
      .from("winning_streaks")
      .select("current_streak")
      .eq("user_id", userId)
      .maybeSingle(),
  ]);

  if (profile.error) console.warn("Profile load error:", profile.error.message);
  if (daily.error)
    console.warn("Daily streak load error:", daily.error.message);
  if (wins.error) console.warn("Win streak load error:", wins.error.message);

  return {
    displayName: profile.data?.display_name ?? "Learner",
    avatarUrl: profile.data?.avatar_url ?? null,
    totalXp: profile.data?.xp ?? 0,
    dailyStreak: daily.data?.current_streak ?? 0,
    winStreak: wins.data?.current_streak ?? 0,
  };
}

// The user's leaderboard score in one language, with the same rule as
// app/leaderboard.tsx: per lesson the higher of score and
// leaderboard_score from lesson_progress, plus lesson_completions'
// leaderboard_score. Returns null if the scores can't be read.
export async function getLeaderboardScore(
  dialect: ProfileDialect,
): Promise<number | null> {
  try {
    const userId = await getUserId();
    if (!userId) return null;
    const prefix = `${dialect.toLowerCase()}_`;

    const withBonus = await supabase
      .from("lesson_progress")
      .select("lesson_id, score, leaderboard_score")
      .eq("user_id", userId);
    let progress: {
      lesson_id: string;
      score: number | null;
      leaderboard_score?: number | null;
    }[] = withBonus.data ?? [];
    if (withBonus.error) {
      const plain = await supabase
        .from("lesson_progress")
        .select("lesson_id, score")
        .eq("user_id", userId);
      if (plain.error) return null;
      progress = plain.data ?? [];
    }

    const { data: completions } = await supabase
      .from("lesson_completions")
      .select("lesson_id, leaderboard_score")
      .eq("user_id", userId)
      .gt("leaderboard_score", 0);

    const records = [
      ...progress,
      ...(completions ?? []).map((row) => ({ ...row, score: 0 })),
    ];
    return records
      .filter((record) => record.lesson_id.toLowerCase().startsWith(prefix))
      .reduce(
        (sum, record) =>
          sum +
          Math.max(
            Number(record.score ?? 0),
            Number(record.leaderboard_score ?? 0),
          ),
        0,
      );
  } catch (error) {
    console.warn("Unable to load leaderboard score:", error);
    return null;
  }
}
