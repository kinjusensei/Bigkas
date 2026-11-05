// Timestamp display helpers. Supabase returns UTC ISO strings; new Date()
// parses them and every getter/toLocale* call below works in the device's
// local time zone, so no manual offset math is needed. No explicit locale
// is passed, so formatting follows the device's language/region settings.

const MINUTE = 60;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function parse(iso: string): Date | null {
  const date = new Date(iso);
  return Number.isNaN(date.getTime()) ? null : date;
}

// Whole calendar days between two dates in local time, so "Yesterday"
// means the previous calendar day rather than "24–48 hours ago".
function calendarDaysBetween(earlier: Date, later: Date): number {
  const a = new Date(earlier.getFullYear(), earlier.getMonth(), earlier.getDate());
  const b = new Date(later.getFullYear(), later.getMonth(), later.getDate());
  return Math.round((b.getTime() - a.getTime()) / (DAY * 1000));
}

/**
 * Short, list-friendly timestamp: "Just now", "5m ago", "3h ago",
 * "Yesterday", "4 days ago", then an absolute date past a week
 * ("Mar 14", or "Mar 14, 2025" when it isn't the current year).
 */
export function formatTimestamp(iso: string): string {
  const date = parse(iso);
  if (!date) return "";

  const now = new Date();
  // Clamp so a slightly-ahead server clock reads "Just now", not negative.
  const seconds = Math.max(0, Math.floor((now.getTime() - date.getTime()) / 1000));

  if (seconds < MINUTE) return "Just now";
  if (seconds < HOUR) return `${Math.floor(seconds / MINUTE)}m ago`;
  if (seconds < DAY) return `${Math.floor(seconds / HOUR)}h ago`;

  const days = calendarDaysBetween(date, now);
  if (days <= 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;

  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    ...(date.getFullYear() !== now.getFullYear() && { year: "numeric" }),
  });
}

/** Full date and time for a detail view, e.g. "Mar 14, 2026, 3:42 PM". */
export function formatFullTimestamp(iso: string): string {
  const date = parse(iso);
  if (!date) return "";

  return date.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}
