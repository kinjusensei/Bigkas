import { useRouter } from "expo-router";
import { useMemo } from "react";

import { getStoriesForDialect, StoryDialect } from "../../data/storyData";
import { useStoryProgress } from "../../hooks/useStoryProgress";
import type { PracticeTypeResult } from "../../utils/storyPractice";
import PracticeResultView from "./PracticeResultView";

type Props = {
  storyLessonId: string;
  dialect: string;
  chapterId: string;
  correct: number;
  total: number;
  passMark: number;
  passed: boolean;
  rows: PracticeTypeResult[];
  // Left out when nothing was awarded (the save failed).
  xpEarned?: number;
  onRetrySave?: () => void;
};

// The result of every story practice: works out the chapter and where each
// button goes. Shown by /lesson/result, and by the practice screen when the
// result couldn't be saved.
export default function StoryPracticeResult({
  storyLessonId,
  dialect,
  chapterId,
  correct,
  total,
  passMark,
  passed,
  rows,
  xpEarned,
  onRetrySave,
}: Props) {
  const router = useRouter();
  const dialectKey = dialect as StoryDialect;

  const story = useMemo(
    () =>
      getStoriesForDialect(dialectKey).find((item) =>
        item.chapters.some((chapter) => String(chapter.id) === chapterId),
      ),
    [dialectKey, chapterId],
  );
  const chapters = useMemo(() => story?.chapters ?? [], [story]);
  const { loading, isChapterUnlocked } = useStoryProgress(chapters);
  const chapterIndex = chapters.findIndex(
    (chapter) => String(chapter.id) === chapterId,
  );
  const nextChapter = chapters[chapterIndex + 1];
  const language = dialectKey.charAt(0).toUpperCase() + dialectKey.slice(1);

  // The next chapter this result still leaves locked, if any.
  const lockedIndex = chapterIndex + (passed ? 2 : 1);
  const showLocked =
    !loading && !!chapters[lockedIndex] && !isChapterUnlocked(lockedIndex);

  const toChapters = () =>
    story
      ? router.replace({
          pathname: "/story-chapters/[storyId]",
          params: { storyId: story.id, dialect: dialectKey },
        })
      : router.replace("/story");

  return (
    <PracticeResultView
      title={`${language} · Chapter ${chapterIndex + 1}`}
      chapterNumber={chapterIndex + 1}
      lockedChapterNumber={showLocked ? lockedIndex + 1 : undefined}
      rows={rows}
      xpEarned={xpEarned}
      correct={correct}
      total={total}
      passMark={passMark}
      passed={passed}
      isLastChapter={!nextChapter}
      onRetrySave={onRetrySave}
      onNextChapter={() =>
        nextChapter
          ? router.replace({
              pathname: "/story/[chapterId]",
              params: { chapterId: String(nextChapter.id), dialect: dialectKey },
            })
          : toChapters()
      }
      onBackToChapters={toChapters}
      onTryAgain={() =>
        router.replace({
          pathname: "/lesson/pretest",
          params: { storyLessonId, dialect: dialectKey, chapterId },
        })
      }
      onReviewStory={() =>
        router.canGoBack()
          ? router.back()
          : router.replace({
              pathname: "/story/[chapterId]",
              params: { chapterId, dialect: dialectKey },
            })
      }
    />
  );
}
