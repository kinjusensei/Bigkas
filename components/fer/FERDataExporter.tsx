/**
 * FERDataExporter.tsx
 * -------------------------------------------------------------------
 * Dev-only screen (route /fer-data, see app/fer-data.tsx). Shows the face
 * photos the FER collector saved and their labels, and exports the
 * labeled ones as a ZIP for scripts/fer_training/train_fer_model.py:
 *
 *   fer_export/
 *     confused/   *.jpg
 *     engaged/    *.jpg
 *     frustrated/ *.jpg
 *     neutral/    *.jpg
 *
 * Only labels that have photos get a folder (an empty class folder makes
 * training fail). "Delete all" removes every collected photo from the phone.
 * -------------------------------------------------------------------
 */
import { Directory, File, Paths } from "expo-file-system";
import { useCallback, useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Share from "react-native-share";
import { zip } from "react-native-zip-archive";

import { countByLabel, type FERFrameMeta, type FERLabel, uriToPath } from "../../utils/fer";
import { readAllFrameMeta } from "./ferStorage";
import { useFocusEffect } from "expo-router";

const EMOTION_COLORS: Record<FERLabel, string> = {
  engaged: "#4CAF50",
  neutral: "#9E9E9E",
  confused: "#FF9800",
  frustrated: "#F44336",
};

const colorFor = (label?: string) =>
  EMOTION_COLORS[label as FERLabel] ?? "#BDBDBD";

export function FERDataExporter() {
  const [frames, setFrames] = useState<FERFrameMeta[]>([]);
  const [busy, setBusy] = useState(false);
  const counts = countByLabel(frames);
  const labeled = frames.filter((frame) => frame.label);

  const loadFrames = useCallback(async () => {
    try {
      setFrames(await readAllFrameMeta());
    } catch {
      Alert.alert("Error", "Could not load the FER photos.");
    }
  }, []);

  // Re-read on every visit: coming back from "Collect Photos Now" must show
  // the new photos (and enable Export), not the list from the first visit.
  useFocusEffect(
    useCallback(() => {
      loadFrames();
    }, [loadFrames]),
  );

  async function exportForTraining() {
    setBusy(true);
    try {
      const exportDir = new Directory(Paths.cache, "fer_export");
      if (exportDir.exists) exportDir.delete();
      exportDir.create({ intermediates: true });

      let copied = 0;
      for (const frame of labeled) {
        const source = new File(`file://${frame.path}`);
        if (!source.exists) continue;
        const labelDir = new Directory(exportDir, frame.label as string);
        if (!labelDir.exists) labelDir.create();
        source.copy(labelDir);
        copied++;
      }
      if (copied === 0) {
        Alert.alert("Nothing to export", "No labeled photos were found.");
        return;
      }

      const summary = new File(exportDir, "summary.json");
      summary.create();
      summary.write(
        JSON.stringify(
          { counts, totalCopied: copied, exportedAt: new Date().toISOString() },
          null,
          2,
        ),
      );

      const zipFile = new File(Paths.cache, "fer_training_data.zip");
      if (zipFile.exists) zipFile.delete();
      await zip(uriToPath(exportDir.uri), uriToPath(zipFile.uri));

      await Share.open({
        title: "FER Training Data",
        url: zipFile.uri,
        type: "application/zip",
        message: `Bigkas FER training data: ${copied} labeled photos`,
        failOnCancel: false,
      });
    } catch (error) {
      Alert.alert("Export failed", error instanceof Error ? error.message : String(error));
    } finally {
      setBusy(false);
    }
  }

  function deleteAll() {
    Alert.alert(
      "Delete all FER photos?",
      "This removes every collected face photo and label from this phone. It can't be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            const directory = new Directory(Paths.document, "fer_data");
            if (directory.exists) directory.delete();
            setFrames([]);
          },
        },
      ],
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>FER Training Data</Text>

      <View style={styles.countsRow}>
        {Object.entries(counts).map(([label, count]) => (
          <View key={label} style={[styles.countBadge, { backgroundColor: colorFor(label) }]}>
            <Text style={styles.countNum}>{count}</Text>
            <Text style={styles.countLabel}>{label}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.hint}>
        Target: 300 or more labeled photos for each of engaged, neutral,
        confused and frustrated before training.
      </Text>

      <TouchableOpacity
        style={[styles.exportBtn, (busy || !labeled.length) && styles.disabled]}
        onPress={exportForTraining}
        disabled={busy || !labeled.length}
      >
        <Text style={styles.exportBtnText}>
          {busy ? "Exporting…" : `Export ZIP for training (${labeled.length} labeled)`}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteBtn} onPress={deleteAll} disabled={busy}>
        <Text style={styles.deleteText}>Delete all collected photos</Text>
      </TouchableOpacity>

      <Text style={styles.sectionHeader}>Recent photos</Text>
      {frames.length === 0 ? (
        <Text style={styles.frameText}>No photos collected yet.</Text>
      ) : (
        frames
          .slice(-50)
          .reverse()
          .map((frame) => (
            <View key={frame.path} style={styles.frameRow}>
              <View style={[styles.labelDot, { backgroundColor: colorFor(frame.label) }]} />
              <Text style={styles.frameText}>
                {frame.label ?? "unlabeled"} · {frame.sessionId} ·{" "}
                {new Date(frame.timestamp).toLocaleTimeString()}
              </Text>
            </View>
          ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5" },
  content: { padding: 16, paddingBottom: 48 },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 16 },
  countsRow: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 12 },
  countBadge: { borderRadius: 8, padding: 10, alignItems: "center", minWidth: 72 },
  countNum: { fontSize: 24, fontWeight: "700", color: "#FFFFFF" },
  countLabel: { fontSize: 11, color: "#FFFFFF" },
  hint: { fontSize: 12, color: "#666666", marginBottom: 16, lineHeight: 18 },
  exportBtn: {
    backgroundColor: "#1a73e8",
    borderRadius: 10,
    padding: 14,
    alignItems: "center",
    marginBottom: 12,
  },
  disabled: { opacity: 0.5 },
  exportBtnText: { color: "#FFFFFF", fontWeight: "700", fontSize: 15 },
  deleteBtn: { alignItems: "center", padding: 12, marginBottom: 24 },
  deleteText: { color: "#B3261E", fontWeight: "600" },
  sectionHeader: { fontSize: 15, fontWeight: "600", marginBottom: 8 },
  frameRow: { flexDirection: "row", alignItems: "center", paddingVertical: 4 },
  labelDot: { width: 10, height: 10, borderRadius: 5, marginRight: 8 },
  frameText: { fontSize: 12, color: "#333333" },
});
