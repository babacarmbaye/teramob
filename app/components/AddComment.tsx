import React from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

export default function AddComment() {
  const onPressContact = () => {
    // Example actions:
    // 1) Call:
    // Linking.openURL("tel:+123456789");

    // 2) Email:
    // Linking.openURL("mailto:school@example.com");

    // 3) Or just show alert for now:
    Alert.alert("Contact", "Contacting the school...");
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPressContact}>
        <Text style={styles.buttonText}>Donner votre avis sur cette école</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  button: {
    backgroundColor: "#3B4BFF",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
