import { useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { tutorialSteps } from "../data/tutorialSteps";
import { retryOnJwtIssuedAtFuture, supabase } from "../services/supabase";
import { saveTutorialCompleted } from "../utils/tutorialCompletion";
import TutorialButton from "./components/TutorialButton";
import TutorialContent from "./components/TutorialContent";
import TutorialProgress from "./components/TutorialProgress";
export default function TutorialScreen() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [, requestPermission] = useCameraPermissions();
  const [saving, setSaving] = useState(false);
  const savingRef = useRef(false);
  const totalSteps = tutorialSteps.length;
  const currentStep = tutorialSteps[step - 1];
  const handleNext = async () => {
    // Step 3 - Request camera permission. The camera is optional, so the
    // tutorial carries on whatever the answer is.
    if (step === 3) {
      const result = await requestPermission();
      if (!result.granted) {
        Alert.alert(
          "Continuing without the camera",
          "That's okay. You can still use Bigkas without the camera, and you can allow it later in your phone's settings.",
        );
      }
      setStep(step + 1);
      return;
    }

    // Last tutorial page
    if (step === totalSteps) {
      if (savingRef.current) return;
      savingRef.current = true;
      setSaving(true);

      try {
        await retryOnJwtIssuedAtFuture(async () => {
          const {
            data: { user },
            error: userError,
          } = await supabase.auth.getUser();

          if (userError) throw userError;
          if (!user) throw new Error("You are not logged in.");

          await saveTutorialCompleted(supabase, user);
        });
      } catch (error) {
        const reason =
          (error as { message?: unknown })?.message ?? "Unknown error";
        Alert.alert(
          "Couldn't save your progress",
          `Please check your connection and try again.\n\n${String(reason)}`,
        );
        savingRef.current = false;
        setSaving(false);
        return;
      }

      // Only reached once the saved value has been read back.
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

      <TutorialButton
        label={saving ? "Saving..." : currentStep.button}
        onPress={handleNext}
      />
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
