import { StyleSheet, Text, View } from "react-native";

type WelcomeStepProps = {
  icon: string;
  title: string;
  description: string;
};

export default function WelcomeStep({
  icon,
  title,
  description,
}: WelcomeStepProps) {
  return (
    <>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>{icon}</Text>
      </View>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.description}>{description}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },

  logo: {
    fontSize: 70,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#410FA3",
    textAlign: "center",
  },

  description: {
    marginTop: 18,
    fontSize: 17,
    textAlign: "center",
    color: "#666",
    lineHeight: 28,
  },
});
