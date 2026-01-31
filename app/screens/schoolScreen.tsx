import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function SchoolScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Quick Start Conduite",
          headerStyle: { backgroundColor: "#3B4BFF", },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "700"},
          headerTitleAlign: "center",
        }}
      />

      {/* Image / Gradient zone */}
      <View style={styles.imageContainer}>
        <View style={styles.rating}>
          <Ionicons name="star" size={14} color="#FFC107" />
          <Text style={styles.ratingText}>4.6</Text>
        </View>
        <Text style={styles.emoji}>🚗</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Quick Start Conduite Details</Text>
        <Text style={styles.description}>
          Accélérez votre apprentissage avec nos cours intensifs. Parfait pour
          ceux qui veulent prendre la route rapidement...
        </Text>

        <View style={styles.meta}>
          <View style={styles.metaItem}>
            <Ionicons name="location-outline" size={14} color="#3B4BFF" />
            <Text style={styles.metaText}>Quartier Central</Text>
          </View>

          {/* <View style={styles.metaItem}>
            <Ionicons name="time-outline" size={14} color="#3B4BFF" />
            <Text style={styles.metaText}>Lun-Sam 9h-18h</Text>
          </View> */}
        </View>

        <View style={styles.footer}>
          <Text style={styles.price}>25 000 fcfa</Text>
          <Text style={styles.package}>Forfait Minimum</Text>
          <Text style={styles.reviews}>189 avis</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: '100%',
    marginHorizontal: 16,
    marginBottom: 20,
    overflow: "hidden",
    paddingHorizontal: 0,
    elevation: 0,
  },
  imageContainer: {
    height: 140,
    backgroundColor: "#6a8df8",
    justifyContent: "center",
    alignItems: "center",
  },
  emoji: {
    fontSize: 50,
  },
  rating: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  ratingText: {
    marginLeft: 4,
    fontWeight: "600",
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
  },
  description: {
    fontSize: 13,
    color: "#323131",
    marginTop: 6,
  },
  meta: {
    flexDirection: "row",
    marginTop: 10,
    gap: 12,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    color: "#333",
  },
  footer: {
    marginTop: 14,
  },
  price: {
    fontSize: 20,
    fontWeight: "700",
    color: "#3B4BFF",
  },
  package: {
    fontSize: 13,
    color: "#555",
  },
  reviews: {
    position: "absolute",
    right: 0,
    bottom: 0,
    fontSize: 12,
    color: "#999",
  },
});