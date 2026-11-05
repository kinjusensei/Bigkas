import { useEffect } from "react";

import { LessonStartKind, logLessonStart } from "../services/activityLogService";

// Logs one start each time a lesson screen opens.
export function useLogLessonStart(
  lessonId: string | undefined,
  kind: LessonStartKind,
) {
  useEffect(() => {
    if (lessonId) void logLessonStart(lessonId, kind);
  }, [lessonId, kind]);
}
