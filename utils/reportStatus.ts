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
