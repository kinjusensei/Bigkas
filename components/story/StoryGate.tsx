import { useRouter } from "expo-router";
import { ReactNode, useEffect, useMemo, useRef } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import {
  findStoryForLesson,
  getStoriesForDialect,
  getStoryForDialect,
  Story,
  StoryDialect,
} from "../../data/storyData";
import { useActiveDialect } from "../../hooks/useActiveDialect";
import { useStoryProgress } from "../../hooks/useStoryProgress";
import { TIERS } from "../../utils/lessonTiers";
import { LESSON_COLORS } from "../lesson/lessonStyles";

const DIALECTS: StoryDialect[] = ["tagalog", "kapampangan", "waray"];

type Props = {
  // One of these identifies the story. With none (a route that isn't Story
  // practice) the children are shown as they are.
  storyId?: string;
  chapterId?: string;
  lessonId?: string;
  dialect?: string;
  children: ReactNode;
};

// Guards the chapter list, the reader and Story practice: a story in a
// locked level goes back to the Story page with that level's locked panel,
// however it was reached (a card, a restored route, a link). Waits for
// saved progress first so an open story never flashes as locked.
export default function StoryGate({
  storyId,
  chapterId,
  lessonId,
  dialect: dialectParam,
  children,
}: Props) {
  const router = useRouter();
  const { dialect: accountDialect, loading: dialectLoading } =
    useActiveDialect();
  const { loading: progressLoading, isStoryOpen } = useStoryProgress();
  // Progress reloads when the screen comes back into view; once a story
  // has opened it stays open, so its place isn't lost.
  const openedRef = useRef<string | null>(null);

  const routeDialect = DIALECTS.find((item) => item === dialectParam);
  const hasTarget = !!(storyId || chapterId || lessonId);
  const dialectKnown = !!lessonId || !!routeDialect || !dialectLoading;

  const target = useMemo((): { story: Story; dialect: StoryDialect } | null => {
    if (lessonId) return findStoryForLesson(lessonId) ?? null;
    const dialect = routeDialect ?? accountDialect;
    const story = storyId
      ? getStoryForDialect(storyId, dialect)
      : getStoriesForDialect(dialect).find((item) =>
          item.chapters.some((chapter) => String(chapter.id) === chapterId),
        );
    return story ? { story, dialect } : null;
  }, [lessonId, storyId, chapterId, routeDialect, accountDialect]);

  const key = target ? `${target.story.id}:${target.dialect}` : null;
  const waiting = progressLoading || !dialectKnown;
  const locked =
    !waiting &&
    !!target &&
    openedRef.current !== key &&
    !isStoryOpen(target.story, target.dialect);

  useEffect(() => {
    if (!locked || !target) return;
    router.replace({
      pathname: "/story",
      params: {
        dialect: target.dialect,
        level: TIERS[target.story.tierIndex]?.key ?? "easy",
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locked]);

  if (!hasTarget || openedRef.current === key) return <>{children}</>;

  if (waiting || locked) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={LESSON_COLORS.purple} />
      </View>
    );
  }

  // An unknown story is handled by the screen itself.
  if (key) openedRef.current = key;
  return <>{children}</>;
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: LESSON_COLORS.page,
  },
});
