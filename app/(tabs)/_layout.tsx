// app/_layout.tsx
import { IconSymbol } from "@/components/ui/icon-symbol";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title ?? route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            style={[styles.item, isFocused && styles.active]}
          >
            {options.tabBarIcon && options.tabBarIcon({ focused: isFocused, color: isFocused ? "#fff" : "#777", size: 28 })}
            <Text style={isFocused ? styles.activeText : styles.text}>{label}</Text>
            {/* {options.hasNotification && <View style={styles.dot} />} */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Accueil",
          tabBarIcon: ({ color, size }) => <IconSymbol size={size} name="house.fill" color={color} />,
          //hasNotification: true,
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          title: "Messages",
          tabBarIcon: ({ color, size }) => <IconSymbol size={size} name="paperplane.fill" color={color} />,
          //hasNotification: true,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Compte",
          tabBarIcon: ({ color, size }) => <IconSymbol size={size} name="manage-accounts" color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 4,
    backgroundColor: "#F8F9FF",
    borderTopWidth: 1,
    borderTopColor: "#EEE",
    marginBottom: 30,
  },
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    backgroundColor: "#3B4BFF",
    marginHorizontal: 25,
    borderRadius: 6,
    paddingVertical: 4,
  },
  text: {
    fontSize: 14,
    marginTop: 4,
    color: "#777",
  },
  activeText: {
    fontSize: 14,
    marginTop: 4,
    color: "#fff",
    fontWeight: "600",
  },
  dot: {
    position: "absolute",
    top: 8,
    right: 30,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "red",
  },
});
