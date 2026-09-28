export type ReportStatus = "open" | "in_progress" | "resolved" | "closed";

export const REPORT_STATUSES: ReportStatus[] = ["open", "in_progress", "resolved", "closed"];

export const STATUS_LABEL: Record<ReportStatus, string> = {
  open: "Open",
  in_progress: "In progress",
  resolved: "Resolved",
  closed: "Closed",
};

export const STATUS_COLOR: Record<ReportStatus, { bg: string; fg: string }> = {
  open: { bg: "#FDECEC", fg: "#B42318" },
  in_progress: { bg: "#FEF4E6", fg: "#B54708" },
  resolved: { bg: "#E8F6EE", fg: "#067647" },
  closed: { bg: "#EEF0F3", fg: "#475467" },
};

export function timeAgo(iso: string): string {
  const seconds = Math.max(0, Math.floor((Date.now() - new Date(iso).getTime()) / 1000));
  if (seconds < 60) return "Just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return new Date(iso).toLocaleDateString();
}
