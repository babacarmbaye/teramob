import { LinearGradient } from "expo-linear-gradient";
import { useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

const CollapsibleHeaderScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  // Interpolate subtitle opacity based on scroll
  const subtitleOpacity = scrollY.interpolate({
    inputRange: [0, 50], // scroll distance
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  // Optionally, you can also shrink title
  const titleScale = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [1, 0.9],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <Animated.View style={styles.header}>
        <Animated.Text style={[styles.title, { transform: [{ scale: titleScale }] }]}>
          Teranga Mobility
        </Animated.Text>
        <Animated.Text style={[styles.subtitle, { opacity: subtitleOpacity }]}>
          Cours de perfectionnement conduite
        </Animated.Text>
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{ paddingTop: 80 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      >
        {/* Example content */}
        {Array.from({ length: 30 }).map((_, i) => (
          <View
            key={i}
            style={{
              height: 100,
              backgroundColor: i % 2 === 0 ? '#eee' : '#ddd',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>Item {i + 1}</Text>
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
};

export default function Header() {
  return (
    <LinearGradient colors={['#063b9f', '#440786']} style={styles.container}>
    {/* <View style={styles.container}> */}
      <Text style={styles.title}>Teranga Mobility</Text>
      <Text style={styles.subtitle}>
        Cours de perfectionnement conduite
      </Text>
    {/* </View> */}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 15,
    paddingLeft: 10,
    width: "100%",
    //backgroundColor: "#3B4BFF",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    color: "#fff",
    //color: "#fd0303",
    fontSize: 20,
    fontWeight: "800",
  },
  subtitle: {
    color: "#bcc4f9",
    marginTop: 6,
    fontSize: 18,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 10,
    zIndex: 10,
  },
});
