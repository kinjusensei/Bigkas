import { StyleSheet, Text, TouchableOpacity } from "react-native";

type TutorialButtonProps = {
  label: string;
  onPress: () => void;
};

export default function TutorialButton({
  label,
  onPress,
}: TutorialButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#410FA3",
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
});
