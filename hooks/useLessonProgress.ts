import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";

import { practiceLevels } from "../data/practiceData";
import { pretestByLessonId } from "../data/pretestData";
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
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;

      async function loadProgress() {
        setLoading(true);
        try {
          const [practiceMap, pretestMap] = await Promise.all([
            getAllLessonProgress(),
            getAllPretestProgress(),
          ]);
          if (!cancelled) {
            setPracticeProgress(practiceMap);
            setPretestProgress(pretestMap);
          }
        } catch (error) {
          console.error("Failed to load lesson/pretest progress:", error);
          // Fail safe: nothing counts as complete until this succeeds.
          if (!cancelled) {
            setPracticeProgress({});
            setPretestProgress({});
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

  const getRequiredCorrect = (lessonId: string): number => {
    const level = practiceLevels.find((l) => l.lessonId === lessonId);
    return level?.requiredCorrect ?? 0;
  };

  const isPracticeComplete = (lessonId: string): boolean => {
    const progress = practiceProgress[lessonId];
    if (!progress) return false;
    return progress.correctAnswers >= getRequiredCorrect(lessonId);
  };

  const isPretestPassed = (lessonId: string): boolean => {
    const hasPretestContent = (pretestByLessonId[lessonId]?.length ?? 0) > 0;
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
  const isLessonComplete = (lessonId: string): boolean =>
    isPretestPassed(lessonId) && isPracticeComplete(lessonId);

  // A chapter unlocks only once EVERY earlier chapter is complete — not
  // just the one immediately before it. Checking only the immediate
  // predecessor let a chapter unlock on old/unrelated progress (e.g. a
  // later lesson already passed from testing, before an earlier one was)
  // even though an earlier chapter was still incomplete.
  const isChapterUnlocked = (chapterIndex: number): boolean =>
    (chapters ?? [])
      .slice(0, chapterIndex)
      .every((chapter) => isLessonComplete(chapter.lessonId));

  return {
    loading,
    isLessonComplete,
    isChapterUnlocked,
    isPracticeComplete,
    isPretestPassed,
    getRequiredCorrect,
  };
}
