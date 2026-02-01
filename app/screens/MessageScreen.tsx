import { Stack } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";
import ConversationList from "../components/ConversationList";

export default function MessageScreen() {
  return (
    <ScrollView style={styles.container}>
      <Stack.Screen
        options={{
          title: "Messages",
          headerStyle: { backgroundColor: "#3B4BFF", },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "700"},
          headerTitleAlign: "center",
        }}
      />

      <ConversationList />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    width: '100%',
    marginBottom: 20,
  },
  imageContainer: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  emoji: {
    fontSize: 100,
  },
  rating: {
    position: "absolute",
    //backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    fontSize: 14,
    marginBottom: 10,
  },
  ratingIcon: {
    marginHorizontal: 2,
    color: "#FFC107",
  },
  ratingIconOff: {
    marginHorizontal: 2,
    color: "#454442",
    opacity: 0.3,
  },
  ratingText: {
    marginLeft: 4,
    fontWeight: "600",
  },
  content: {
    flex: 1, marginBottom: 20,
    padding: 4,
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
    marginTop: 35,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  metaText: {
    fontSize: 18,
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