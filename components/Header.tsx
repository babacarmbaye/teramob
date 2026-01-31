import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TERANGA MOBILITY</Text>
      <Text style={styles.subtitle}>
        Perfectionner votre conduite avec nos partenaires auto-écoles
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 15,
    paddingLeft: 10,
    width: "100%",
    //backgroundColor: "#3B4BFF",
    color: "#3B4BFF",
    marginBottom: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    //color: "#fff",
    //color: "#fd0303",
    fontSize: 20,
    fontWeight: "800",
  },
  subtitle: {
    //color: "#909ffc",
    marginTop: 6,
    fontSize: 12,
  },
});
