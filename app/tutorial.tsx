import { useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { tutorialSteps } from "../data/tutorialSteps";
import { supabase } from "../services/supabase";
import TutorialButton from "./components/TutorialButton";
import TutorialContent from "./components/TutorialContent";
import TutorialProgress from "./components/TutorialProgress";
export default function TutorialScreen() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [, requestPermission] = useCameraPermissions();
  const totalSteps = tutorialSteps.length;
  const currentStep = tutorialSteps[step - 1];
  const handleNext = async () => {
    // Step 2 - Request camera permission
    if (step === 2) {
      const result = await requestPermission();
      if (result.granted) {
        setStep(step + 1);
      } else {
        Alert.alert(
          "Camera Permission Required",
          "Bigkas uses facial expression recognition to evaluate your pronunciation. Please allow camera access to continue.",
        );
      }

      return;
    }

    // Last tutorial page
    if (step === totalSteps) {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        const { error } = await supabase
          .from("profiles")
          .update({
            tutorial_completed: true,
          })
          .eq("id", user.id);

        if (error) {
          Alert.alert(
            "Error",
            "Unable to save your tutorial progress. Please try again.",
          );
          return;
        }
      }

      router.replace("/dashboard"); // change if your dashboard route is different
      return;
    }

    setStep(step + 1);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TutorialProgress step={step} totalSteps={totalSteps} />

        <TutorialContent step={currentStep} />
      </View>

      <TutorialButton label={currentStep.button} onPress={handleNext} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 40,
  },

  content: {
    flex: 1,
    alignItems: "center",
  },
});
