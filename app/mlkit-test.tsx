import {
    FaceDetectionProvider,
    useFaceDetection,
} from "@infinitered/react-native-mlkit-face-detection";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

function MLKitTestContent() {
  const detector = useFaceDetection();

  const [status, setStatus] = useState("Checking...");

  useEffect(() => {
    setStatus(detector.status);
  }, [detector.status]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>ML Kit Test</Text>

      <Text style={{ marginTop: 20 }}>Detector status:</Text>

      <Text
        style={{
          marginTop: 10,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        {status}
      </Text>
    </View>
  );
}

export default function MLKitTest() {
  return (
    <FaceDetectionProvider>
      <MLKitTestContent />
    </FaceDetectionProvider>
  );
}
