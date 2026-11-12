export const SERVER_URL = "http://192.168.100.110:8000";

export type ExpressionResult = {
  expression: string;
  head_pose: { pitch?: number; yaw?: number; roll?: number };
  action_units: Record<string, number>;
};

export async function analyzeFrame(uri: string): Promise<ExpressionResult> {
  const form = new FormData();
  form.append("file", { uri, name: "frame.jpg", type: "image/jpeg" } as any);

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  try {
    const res = await fetch(`${SERVER_URL}/analyze`, {
      method: "POST",
      body: form,
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(await res.text());
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}
