import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Screens } from "../screens";
import * as icons from "@expo/vector-icons";
import { MAIN_COLOR } from "../utils";

const Tab = createBottomTabNavigator();

export const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // headerShown: false,
        // headerBackground: MAIN_COLOR,
        headerStyle: {
          backgroundColor: MAIN_COLOR,
        },
        headerTitleStyle: {
          color: "#fff",
          fontFamily: "Poppins_500Medium",
        },
        headerTitleAlign: "center",
        headerStatusBarHeight: 30,
        tabBarActiveTintColor: MAIN_COLOR,
        tabBarInactiveTintColor: "grey",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Screens.HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <icons.FontAwesome5 name="indent" color={color} size={size} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Screens.Profile}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <icons.MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
