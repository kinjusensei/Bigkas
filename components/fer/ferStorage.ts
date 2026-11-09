// Where the FER collector saves face photos and their labels, on this phone
// only. The exporter reads them from here.
import { Directory, File, Paths } from "expo-file-system";

import type { FERFrameMeta } from "../../utils/fer";

export function ferDataDirectory(): Directory {
  const directory = new Directory(Paths.document, "fer_data");
  if (!directory.exists) directory.create({ intermediates: true });
  return directory;
}

export function writeFrameMeta(sessionId: string, frames: FERFrameMeta[]) {
  const file = new File(ferDataDirectory(), `${sessionId}_${Date.now()}_meta.json`);
  file.create();
  file.write(JSON.stringify(frames));
}

export async function readAllFrameMeta(): Promise<FERFrameMeta[]> {
  const directory = new Directory(Paths.document, "fer_data");
  if (!directory.exists) return [];
  const frames: FERFrameMeta[] = [];
  for (const entry of directory.list()) {
    if (entry instanceof File && entry.name.endsWith("_meta.json")) {
      try {
        frames.push(...(JSON.parse(await entry.text()) as FERFrameMeta[]));
      } catch {
        // skip an unreadable file
      }
    }
  }
  return frames;
}
