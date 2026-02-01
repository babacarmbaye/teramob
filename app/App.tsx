import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { StyleSheet } from "react-native";
import { AuthProvider, useAuth } from "./context/AuthContext";
import AccountScreen from "./screens/AccountScreen";
import ChatScreen from "./screens/ChatScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import MessageScreen from "./screens/MessageScreen";
import SchoolScreen from "./screens/SchoolScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeMain" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="SchoolScreen"
        component={SchoolScreen}
        options={({ route }: any) => ({
          title: route.params?.title ?? "Details",
        })}
      />
    </Stack.Navigator>
  );
}

function AccountStack() {
  const { isLoggedIn } = useAuth();

  return (
    <Stack.Navigator>
      {!isLoggedIn ? (
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      ) : (
        <>
          <Stack.Screen 
            name="AccountMain" 
            component={AccountScreen} 
            options={({ route }: any) => ({
              title: route.params?.title ?? "Mon Compte",
            })}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

function MessagesStack() {
  const { isLoggedIn } = useAuth();

  return (
    <Stack.Navigator>
      {!isLoggedIn ? (
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      ) : (
        <>
          <Stack.Screen 
            name="MessagesMain" 
            component={MessageScreen} 
            options={({ route }: any) => ({
              title: route.params?.title ?? "Messages",
            })}
          />
          <Stack.Screen
            name="ChatScreen"
            component={ChatScreen}
            options={({ route }: any) => ({ title: route.params?.title ?? "Messages" })}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

function TabsLayout() {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#007bff', // Blue active tab
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          //height: 60,
          paddingBottom: 30,
          //marginBottom: 30,
          //shadowColor: '#000',
          //shadowOpacity: 0.1,
          //shadowRadius: 6,
          //shadowOffset: { width: 0, height: -3 },
          //elevation: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let IconComponent = MaterialIcons;

          if (route.name === 'Accueil') {
            iconName = focused ? 'home' : 'home-filled';
          } else if (route.name === 'Messages') {
            iconName = focused ? 'message' : 'message';
            IconComponent = MaterialCommunityIcons;
            //IconComponent = FontAwesome5;
          } else if (route.name === 'Compte') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <IconComponent name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Accueil" component={HomeStack} />
      <Tab.Screen name="Messages" component={MessagesStack} />
      <Tab.Screen name="Compte" component={AccountStack} />
    </Tab.Navigator>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* Tabs as main screen */}
          <Stack.Screen
            name="Tabs"
            component={TabsLayout}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
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