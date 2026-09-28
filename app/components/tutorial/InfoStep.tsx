import { StyleSheet, Text, View } from "react-native";

type InfoStepProps = {
  icon: string;
  title: string;
  description: string;
  cardTitle: string;
  cardItems: string[];
};

export default function InfoStep({
  icon,
  title,
  description,
  cardTitle,
  cardItems,
}: InfoStepProps) {
  return (
    <>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>{icon}</Text>
      </View>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.description}>{description}</Text>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>{cardTitle}</Text>

        {cardItems.map((item, index) => (
          <Text key={index} style={styles.infoText}>
            • {item}
          </Text>
        ))}
      </View>
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

  infoCard: {
    width: "92%",
    backgroundColor: "#F8F8FF",
    borderRadius: 18,
    padding: 20,
    marginTop: 25,
  },

  infoTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#410FA3",
    marginBottom: 12,
    textAlign: "center",
  },

  infoText: {
    fontSize: 15,
    color: "#555",
    marginBottom: 8,
    lineHeight: 22,
  },
});
