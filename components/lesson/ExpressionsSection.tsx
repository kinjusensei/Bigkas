import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { LessonExpressionGroup } from "../../types/structuredLesson";
import ExampleDialogue from "./ExampleDialogue";
import { lessonStyles } from "./lessonStyles";
import { LessonAudio } from "./useLessonAudio";
import WordCard from "./WordCard";

type Props = {
  title?: string;
  intro?: string;
  groups: LessonExpressionGroup[];
  audio: LessonAudio;
  // Keeps audio keys apart when two steps use this section.
  keyPrefix?: string;
};

// Vocabulary as groups of expressions (Lessons 2 and 3): each group's word
// cards, then its usage examples. One card is open at a time across all
// groups.
export default function ExpressionsSection({
  title = "Vocabulary and common expressions",
  intro,
  groups,
  audio,
  keyPrefix = "expression",
}: Props) {
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  const toggle = (key: string) =>
    setExpandedKey((current) => (current === key ? null : key));

  return (
    <>
      <View>
        <Text style={lessonStyles.sectionTitle}>{title}</Text>
        <Text style={lessonStyles.sectionIntro}>
          {intro ?? "Tap the speaker to listen to each expression."}
        </Text>
      </View>

      {audio.notice ? (
        <Text style={lessonStyles.notice}>{audio.notice}</Text>
      ) : null}

      {groups.map((group, groupIndex) => (
        <View key={group.title} style={styles.group}>
          <Text style={[lessonStyles.sectionTitle, styles.groupTitle]}>
            {group.title}
          </Text>
          {group.intro?.map((line) => (
            <Text key={line} style={lessonStyles.body}>
              {line}
            </Text>
          ))}

          {group.items
            .filter((item) => item.term.trim())
            .map((item, index) => {
              const key = `${keyPrefix}-${groupIndex}-${index}`;
              return (
                <WordCard
                  key={key}
                  term={item.term}
                  meaning={item.meaning}
                  pronunciation={item.pronunciation}
                  usage={item.usage}
                  example={item.example}
                  open={expandedKey === key}
                  onToggle={() => toggle(key)}
                  playing={audio.playingKey === key}
                  onPlay={() =>
                    audio.play(key, {
                      text: item.term,
                      audioUrl: item.audioUrl,
                    })
                  }
                />
              );
            })}

          {group.examples && group.examples.length > 0 ? (
            <View style={lessonStyles.card}>
              <Text style={lessonStyles.cardTitle}>Usage examples</Text>
              {group.examples.map((lines, index) => (
                <ExampleDialogue key={index} lines={lines} />
              ))}
            </View>
          ) : null}
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  group: { gap: 12 },
  groupTitle: { marginTop: 6, fontSize: 17 },
});
