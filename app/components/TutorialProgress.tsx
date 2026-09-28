import { StyleSheet, Text, View } from "react-native";

type TutorialProgressProps = {
  step: number;
  totalSteps: number;
};

export default function TutorialProgress({
  step,
  totalSteps,
}: TutorialProgressProps) {
  return (
    <>
      <View style={styles.progressContainer}>
        {Array.from({ length: totalSteps }).map((_, index) => (
          <View
            key={index}
            style={[
              styles.progressDot,
              index < step && styles.progressDotActive,
            ]}
          />
        ))}
      </View>

      <Text style={styles.progressText}>
        Step {step} of {totalSteps}
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  progressContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 15,
    justifyContent: "center",
  },

  progressDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#D1D5DB",
    marginHorizontal: 5,
  },

  progressDotActive: {
    backgroundColor: "#410FA3",
  },

  progressText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#888",
    marginBottom: 35,
    textAlign: "center",
  },
});
