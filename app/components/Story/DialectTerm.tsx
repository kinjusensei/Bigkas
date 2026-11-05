import { Text, TouchableOpacity } from "react-native";

import { DialectTermAnnotation } from "../../../data/storyData";

type Props = {
  term: DialectTermAnnotation;
  onPress: () => void;
};

// Tappable inline word rendered inside a story paragraph by
// utils/storyText.tsx's renderAnnotatedParagraph. Tapping it opens
// TermExplanationModal with this same `term`.
export default function DialectTerm({ term, onPress }: Props) {
  if (term.practiceWord) {
    return (
      <Text
        onPress={onPress}
        suppressHighlighting
        // Chapter practice word. Inline text can't take padding or rounded
        // corners in React Native, so narrow no-break spaces give the
        // background its padding.
        style={{
          color: "#2A0A66",
          backgroundColor: "rgba(255, 224, 138, 0.6)",
          fontWeight: "700",
          textDecorationLine: "underline",
          textDecorationColor: "rgba(42, 10, 102, 0.45)",
        }}
      >
        {`\u202F${term.match}\u202F`}
      </Text>
    );
  }

  return (
    <Text
      onPress={onPress}
      suppressHighlighting
      // Soft highlight for the Story reader: light purple background,
      // main purple text. Inherits the surrounding font size and family.
      style={{
        color: "#5B50B0",
        backgroundColor: "#EEEBFB",
        fontWeight: "700",
      }}
    >
      {term.match}
    </Text>
  );
}

// Unused import kept out: TouchableOpacity isn't needed since Text's own
// onPress gives a tap target without breaking inline text flow.
void TouchableOpacity;
