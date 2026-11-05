import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import {
  LessonGreeting,
  LessonVocabularyItem,
} from "../../types/structuredLesson";
import { lessonStyles } from "./lessonStyles";
import { LessonAudio } from "./useLessonAudio";
import WordCard from "./WordCard";

type Props = {
  greetings: LessonGreeting[];
  // Vocabulary that isn't one of the greetings, listed under "More words
  // and expressions". Hidden when empty.
  moreWords?: LessonVocabularyItem[];
  audio: LessonAudio;
};

// Step 3 — greeting cards, then the rest of the vocabulary, all as
// WordCards. One card is open at a time across both lists.
export default function GreetingsSection({
  greetings,
  moreWords = [],
  audio,
}: Props) {
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  const toggle = (key: string) =>
    setExpandedKey((current) => (current === key ? null : key));

  return (
    <>
      <View>
        <Text style={lessonStyles.sectionTitle}>
          Common greetings and their usage
        </Text>
        <Text style={lessonStyles.sectionIntro}>
          Tap a card to see an example.
        </Text>
      </View>

      {audio.notice ? (
        <Text style={lessonStyles.notice}>{audio.notice}</Text>
      ) : null}

      {greetings.map((greeting, index) => {
        const key = `greeting-${index}`;
        return (
          <WordCard
            key={key}
            term={greeting.term}
            meaning={greeting.meaning}
            usage={greeting.usage}
            example={greeting.example}
            open={expandedKey === key}
            onToggle={() => toggle(key)}
            playing={audio.playingKey === key}
            onPlay={() =>
              audio.play(key, {
                text: greeting.term,
                audioUrl: greeting.audioUrl,
              })
            }
          />
        );
      })}

      {moreWords.length > 0 ? (
        <Text style={[lessonStyles.sectionTitle, styles.moreTitle]}>
          More words and expressions
        </Text>
      ) : null}

      {moreWords.map((word, index) => {
        const key = `more-word-${index}`;
        return (
          <WordCard
            key={key}
            term={word.term}
            meaning={word.meaning}
            usage={word.usage}
            pronunciation={word.pronunciation}
            example={word.example}
            open={expandedKey === key}
            onToggle={() => toggle(key)}
            playing={audio.playingKey === key}
            onPlay={() =>
              audio.play(key, { text: word.term, audioUrl: word.audioUrl })
            }
          />
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  moreTitle: { marginTop: 10 },
});
