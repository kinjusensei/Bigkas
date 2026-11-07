import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";

import { REVIEW_MODE } from "../constant/devFlags";
import {
  requiredActivitiesFor,
  structuredLessonsById,
} from "../data/lessons/structuredLessons";
import { practiceLevels } from "../data/practiceData";
import { getAllLessonCompletions } from "../services/lessonCompletionService";
import { CompletionRecord, isRecordComplete } from "../utils/lessonCompletion";
import {
  canOpenStoryInLevel,
  isStoryLevelOpen as isStoryLevelOpenByRule,
} from "../utils/storyLevels";
import {
  isTieredLessonUnlocked,
  isTierUnlocked,
  TierLanguage,
} from "../utils/lessonTiers";
import { pretestByLessonId } from "../data/pretestData";
import {
  getStoryPracticeRequiredCorrect,
  storyPracticeLevels,
} from "../data/storyPracticeData";
import { StoryChapter } from "../data/storyData";
import { getAllLessonProgress } from "../services/practiceService";
import {
  getAllPretestProgress,
  PretestResult,
} from "../services/Pretestservice";

// Renamed from useStoryProgress. Previously this only checked practice
// completion (correctAnswers >= requiredCorrect), which is what
// story.tsx used. dashboard.tsx had a separate, looser definition
// ("has any lesson_progress row at all"). Both now go through this one
// hook and one combined definition:
//
//   a lesson counts as complete only if the pretest was passed
//   AND the practice threshold was met.
//
// "Finished reading" the story chapter is intentionally NOT part of
// this — reading stays unscored/unlocked, per instruction.

type PracticeProgressMap = Record<
  string,
  { correctAnswers: number; totalQuestions: number }
>;

type PretestProgressMap = Record<string, PretestResult>;

const getPracticeLevel = (lessonId: string) => {
  const levels = lessonId.startsWith("story_")
    ? storyPracticeLevels
    : practiceLevels;

  return levels.find((level) => level.lessonId === lessonId);
};

// Shared by the Story list and Chapters screens so both show the same
// numbers: done = completed chapters, pct = Math.round(done / total * 100).
export function getStoryProgress(
  chapters: StoryChapter[],
  isLessonComplete: (lessonId: string) => boolean,
) {
  const total = chapters.length;
  const done = chapters.filter((chapter) =>
    isLessonComplete(chapter.lessonId),
  ).length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return { done, total, pct };
}

// `chapters` is the list the screen resolved via getChaptersForDialect.
// It defaults to [] because the active dialect loads asynchronously, so
// on first render the caller may not have a list yet; with [] every
// chapter past the first just reads as locked until it arrives.
export function useStoryProgress(chapters: StoryChapter[] = []) {
  const [practiceProgress, setPracticeProgress] = useState<PracticeProgressMap>(
    {},
  );
  const [pretestProgress, setPretestProgress] = useState<PretestProgressMap>(
    {},
  );
  // Structured lessons (sql/lesson_completions.sql). Loaded separately and
  // fail-soft, so a missing table doesn't break other progress.
  const [completions, setCompletions] = useState<
    Record<string, CompletionRecord>
  >({});
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;

      async function loadProgress() {
        setLoading(true);
        // Waited for with the rest, so nothing reads a lesson as locked
        // before its completion has arrived. Never throws (returns {}).
        const completionsPromise = getAllLessonCompletions();
        try {
          const [practiceMap, pretestMap, completionMap] = await Promise.all([
            getAllLessonProgress(),
            getAllPretestProgress(),
            completionsPromise,
          ]);
          if (!cancelled) {
            setPracticeProgress(practiceMap);
            setPretestProgress(pretestMap);
            setCompletions(completionMap);
          }
        } catch (error) {
          console.error("Failed to load lesson/pretest progress:", error);
          // Fail safe: nothing counts as complete until this succeeds.
          if (!cancelled) {
            setPracticeProgress({});
            setPretestProgress({});
            setCompletions(await completionsPromise);
          }
        } finally {
          if (!cancelled) {
            setLoading(false);
          }
        }
      }

      loadProgress();

      return () => {
        cancelled = true;
      };
    }, []),
  );

  const getRequiredCorrect = (lessonId: string): number | null => {
    if (lessonId.startsWith("story_")) {
      return getStoryPracticeRequiredCorrect(lessonId);
    }
    const level = getPracticeLevel(lessonId);
    return level?.requiredCorrect ?? null;
  };

  const isPracticeComplete = (lessonId: string): boolean => {
    const progress = practiceProgress[lessonId];
    const requiredCorrect = getRequiredCorrect(lessonId);
    if (!progress || requiredCorrect === null) return false;
    return progress.correctAnswers >= requiredCorrect;
  };

  const isPretestPassed = (lessonId: string): boolean => {
    // A structured lesson's assessment (components/lesson) is saved as
    // that lesson's pretest result, so it gates completion the same way.
    const hasPretestContent =
      (pretestByLessonId[lessonId]?.length ?? 0) > 0 ||
      (structuredLessonsById[lessonId]?.assessment?.questions.length ?? 0) > 0;
    if (!hasPretestContent) {
      // No pretest authored for this lesson yet (see pretestData.ts) —
      // don't block unlocking on content that doesn't exist. Once real
      // questions are added for a lesson, this starts enforcing
      // normally without any other code changing.
      return true;
    }

    const result = pretestProgress[lessonId];
    if (!result) return false;
    return result.passed;
  };

  // The single definition of "done" both dashboard.tsx and story.tsx
  // should use for unlocking the next level/chapter.
  // Structured lessons (components/lesson) are complete when their saved
  // completion says the assessment was passed (>= 70%) and every required
  // activity was done (speaking may be skipped). That record never goes
  // back, so a lesson is never re-locked.
  const isLessonComplete = (lessonId: string): boolean => {
    const structured = structuredLessonsById[lessonId];
    if (structured) {
      return isRecordComplete(
        completions[lessonId],
        requiredActivitiesFor(structured),
      );
    }
    return isPretestPassed(lessonId) && isPracticeComplete(lessonId);
  };

  // Dialect lessons (tagalog_N, kapampangan_N, waray_N) by level
  // (utils/lessonTiers.ts): Easy is open; Intermediate/Hard open once
  // every lesson of the level before is complete in that language; inside
  // a level lesson N+1 opens once lesson N is complete. Other ids (e.g.
  // story lessons) aren't on the board and are never locked here.
  const isLessonUnlocked = (lessonId: string): boolean =>
    REVIEW_MODE || isTieredLessonUnlocked(lessonId, isLessonComplete);

  // Whether a whole level is open for a language (0 Easy, 1 Intermediate,
  // 2 Hard).
  const isTierOpen = (language: TierLanguage, tierIndex: number): boolean =>
    REVIEW_MODE || isTierUnlocked(language, tierIndex, isLessonComplete);

  // Story levels use the Lessons result above (utils/storyLevels.ts). Review
  // mode opens them through isTierOpen, so LOCKED_STORY_LEVELS still applies.
  const isStoryLevelOpen = (language: TierLanguage, tierIndex: number) =>
    isStoryLevelOpenByRule(language, tierIndex, (tier) =>
      isTierOpen(language, tier),
    );

  // A learner with a saved practice attempt in a story keeps that story.
  const isStoryOpen = (
    story: { tierIndex: number; chapters: StoryChapter[] },
    language: TierLanguage,
  ): boolean =>
    canOpenStoryInLevel(
      language,
      story.tierIndex,
      isStoryLevelOpen(language, story.tierIndex),
      story.chapters.some((chapter) => !!practiceProgress[chapter.lessonId]),
    );

  // XP already given for a structured lesson's activities.
  const getAwardedXp = (lessonId: string): number => {
    const structured = structuredLessonsById[lessonId];
    const record = completions[lessonId];
    if (!structured || !record) return 0;
    return (structured.rewards?.items ?? [])
      .filter((item) => record.xpAwarded.includes(item.section))
      .reduce((sum, item) => sum + item.xp, 0);
  };

  // Change this if you are going to check the data in Story

  // const isChapterUnlocked = (chapterIndex: number): boolean => true;
  const isChapterUnlocked = (chapterIndex: number): boolean =>
    REVIEW_MODE ||
    (chapters ?? [])
      .slice(0, chapterIndex)
      .every((chapter) => isLessonComplete(chapter.lessonId));

  const isChapterComplete = (chapterIndex: number): boolean => {
    const chapter = (chapters ?? [])[chapterIndex];
    return chapter ? isLessonComplete(chapter.lessonId) : false;
  };

  return {
    loading,
    isLessonComplete,
    isLessonUnlocked,
    isTierOpen,
    isStoryLevelOpen,
    isStoryOpen,
    isChapterUnlocked,
    isChapterComplete,
    isPracticeComplete,
    isPretestPassed,
    getRequiredCorrect,
    getAwardedXp,
    getCompletion: (lessonId: string) => completions[lessonId],
  };
}
