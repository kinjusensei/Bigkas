// TODO: set UNLOCK_ALL_CONTENT to false once the content review is finished.
//
// Review mode, for checking the content inside every lesson, chapter and level.
// While it's on, in a development build:
// - Every lesson, story chapter and level (Easy / Intermediate / Hard) opens,
//   whatever the saved progress says. The lock rules themselves are unchanged
//   and only bypassed (hooks/useStoryProgress.ts is the main place).
// - Playing saves nothing: no progress, scores, XP, streaks or leaderboard
//   scores are written, so the review can't change an account. Results on
//   screen, including XP earned, are only for that attempt.
// - The "New level unlocked" screen doesn't appear and isn't marked as seen.
//
// Turn it off: set UNLOCK_ALL_CONTENT to false and reload the app.
const UNLOCK_ALL_CONTENT = false;

// __DEV__ is false in release builds, so review mode can't reach learners even
// if the flag above is left on.
export const REVIEW_MODE = __DEV__ && UNLOCK_ALL_CONTENT;
