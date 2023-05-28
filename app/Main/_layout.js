import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "#e63946",
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "Light",
        },
        tabBarStyle: {
          paddingBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="credit"
        options={{
          title: "Crédito",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="coins" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="money"
        options={{
          title: "Movimentar",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="money-bill-wave" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: "Serviços",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="store" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Definições",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
