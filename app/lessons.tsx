import { useRouter } from "expo-router";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import AppScreen from "./components/AppScreen";

export default function LessonsScreen() {
  const router = useRouter();

  return (
    <AppScreen showBottomNav active="lessons">
          {/* HEADER */}

          <View style={styles.header}>
            <Text style={styles.headerTitle}>LESSON</Text>

            <View style={styles.languageSelector}>
              <TouchableOpacity
                style={styles.arrowButton}
                activeOpacity={0.7}
                disabled
              >
                <Text style={styles.arrow}>‹</Text>
              </TouchableOpacity>

              <Text style={styles.languageName}>TAGALOG</Text>

              <TouchableOpacity
                style={styles.arrowButton}
                activeOpacity={0.7}
                disabled
              >
                <Text style={styles.arrow}>›</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* LESSON INTRO */}

          <View style={styles.intro}>
            <Text style={styles.lessonTitle}>Basic Greetings</Text>

            <Text style={styles.lessonSubtitle}>
              Learn the words used in these sentences.
            </Text>
          </View>

          {/* PHRASE 1 */}

          <View style={styles.phraseCard}>
            <View style={styles.phraseNumberContainer}>
              <Text style={styles.phraseNumber}>1</Text>
            </View>

            <View style={styles.phraseContent}>
              <Text style={styles.phrase}>Magandang Umaga</Text>

              <View style={styles.divider} />

              <View style={styles.wordRow}>
                <Text style={styles.word}>Magandang</Text>

                <Text style={styles.meaning}>good / beautiful</Text>
              </View>

              <View style={styles.wordRow}>
                <Text style={styles.word}>Umaga</Text>

                <Text style={styles.meaning}>morning</Text>
              </View>
            </View>
          </View>

          {/* PHRASE 2 */}

          <View style={styles.phraseCard}>
            <View style={styles.phraseNumberContainer}>
              <Text style={styles.phraseNumber}>2</Text>
            </View>

            <View style={styles.phraseContent}>
              <Text style={styles.phrase}>Kumusta Ka?</Text>

              <View style={styles.divider} />

              <View style={styles.wordRow}>
                <Text style={styles.word}>Kumusta</Text>

                <Text style={styles.meaning}>how are you / how</Text>
              </View>

              <View style={styles.wordRow}>
                <Text style={styles.word}>Ka</Text>

                <Text style={styles.meaning}>you</Text>
              </View>
            </View>
          </View>

          {/* PHRASE 3 */}

          <View style={styles.phraseCard}>
            <View style={styles.phraseNumberContainer}>
              <Text style={styles.phraseNumber}>3</Text>
            </View>

            <View style={styles.phraseContent}>
              <Text style={styles.phrase}>Paalam</Text>

              <View style={styles.divider} />

              <View style={styles.wordRow}>
                <Text style={styles.word}>Paalam</Text>

                <Text style={styles.meaning}>goodbye</Text>
              </View>
            </View>
          </View>

          {/* PRACTICE BUTTON */}

          <TouchableOpacity
            style={styles.practiceButton}
            activeOpacity={0.85}
            onPress={() =>
              router.push({
                pathname: "/lesson/practice",
                params: {
                  lessonId: "tagalog_1",
                },
              } as any)
            }
          >
            <Text style={styles.practiceText}>Start Practice</Text>

            <Text style={styles.practiceArrow}>→</Text>
          </TouchableOpacity>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  /* =========================
     HEADER
  ========================= */

  header: {
    alignItems: "center",
    marginBottom: 22,
  },

  headerTitle: {
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 2,

    color: "#410FA3",

    marginBottom: 12,
  },

  languageSelector: {
    width: "100%",
    height: 62,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#FFFFFF",

    borderRadius: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,

    elevation: 3,
  },

  arrowButton: {
    width: 60,
    height: 62,

    alignItems: "center",
    justifyContent: "center",
  },

  arrow: {
    fontSize: 34,
    fontWeight: "400",

    color: "#410FA3",
  },

  languageName: {
    flex: 1,

    textAlign: "center",

    fontSize: 20,
    fontWeight: "800",

    color: "#202124",

    letterSpacing: 0.5,
  },

  /* =========================
     LESSON INTRO
  ========================= */

  intro: {
    alignItems: "center",

    marginBottom: 20,
  },

  lessonTitle: {
    fontSize: 26,
    fontWeight: "800",

    color: "#202124",

    textAlign: "center",
  },

  lessonSubtitle: {
    marginTop: 6,

    fontSize: 14,
    lineHeight: 20,

    color: "#777777",

    textAlign: "center",
  },

  /* =========================
     PHRASE CARD
  ========================= */

  phraseCard: {
    flexDirection: "row",

    backgroundColor: "#FFFFFF",

    borderRadius: 20,

    padding: 17,

    marginBottom: 14,

    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.05,
    shadowRadius: 8,

    elevation: 3,
  },

  phraseNumberContainer: {
    width: 32,
    height: 32,

    borderRadius: 16,

    backgroundColor: "#EDE7FA",

    alignItems: "center",
    justifyContent: "center",

    marginRight: 13,
  },

  phraseNumber: {
    fontSize: 13,
    fontWeight: "800",

    color: "#410FA3",
  },

  phraseContent: {
    flex: 1,
  },

  phrase: {
    fontSize: 21,
    fontWeight: "800",

    color: "#202124",

    marginBottom: 12,
  },

  divider: {
    height: 1,

    backgroundColor: "#EEEEF2",

    marginBottom: 11,
  },

  /* =========================
     WORD EXPLANATIONS
  ========================= */

  wordRow: {
    flexDirection: "row",

    alignItems: "flex-start",

    marginBottom: 7,
  },

  word: {
    width: 105,

    fontSize: 14,
    fontWeight: "700",

    color: "#410FA3",
  },

  meaning: {
    flex: 1,

    fontSize: 14,
    lineHeight: 20,

    color: "#666666",
  },

  /* =========================
     PRACTICE BUTTON
  ========================= */

  practiceButton: {
    height: 55,

    backgroundColor: "#410FA3",

    borderRadius: 17,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    marginTop: 8,

    shadowColor: "#410FA3",

    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.2,
    shadowRadius: 8,

    elevation: 4,
  },

  practiceText: {
    fontSize: 16,
    fontWeight: "800",

    color: "#FFFFFF",
  },

  practiceArrow: {
    fontSize: 21,
    fontWeight: "700",

    color: "#FFFFFF",

    marginLeft: 9,
  },

});
