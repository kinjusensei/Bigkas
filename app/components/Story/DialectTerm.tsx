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
  return (
    <Text
      onPress={onPress}
      suppressHighlighting
      style={{
        color: "#5E3BEE",
        fontWeight: "700",
        textDecorationLine: "underline",
      }}
    >
      {term.match}
    </Text>
  );
}

// Unused import kept out: TouchableOpacity isn't needed since Text's own
// onPress gives a tap target without breaking inline text flow.
void TouchableOpacity;
