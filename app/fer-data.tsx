// Dev-only: the FER training data screen. In a release build this route
// sends the learner back to the start, so the photos can't be exported there.
import { Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { FERDataExporter } from "../components/fer/FERDataExporter";

export default function FERDataScreen() {
  if (!__DEV__) return <Redirect href="/" />;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <FERDataExporter />
    </SafeAreaView>
  );
}
