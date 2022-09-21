import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MainNavigation } from "./mainNavigation";
import { Screens } from "../screens";
import { useSelector } from "react-redux";
import { MAIN_COLOR } from "../utils";

const Stack = createStackNavigator();

export const AppNavigator = () => {
  const { isLoggedin } = useSelector((state) => state.Auth);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: MAIN_COLOR,
        },
        headerTitleStyle: {
          color: "#fff",
          fontFamily: "Poppins_500Medium",
        },
        headerTitleAlign: "center",
        headerStatusBarHeight: 30,
      }}
    >
      {isLoggedin ? (
        <>
          <Stack.Screen name="Main" component={MainNavigation} />
          <Stack.Screen name="TakeImage" component={Screens.ScanLeaf} />
          <Stack.Screen
            name="AddUser"
            component={Screens.AddUser}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Report"
            component={Screens.Report}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Users"
            component={Screens.Users}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="UserDetails"
            component={Screens.UserDetails}
            options={{ headerShown: true, title: "User Details" }}
          />
          <Stack.Screen
            name="Other"
            component={Screens.Other}
            options={{ headerShown: true, title: "Term & Privacy" }}
          />
          <Stack.Screen
            name="Approving"
            component={Screens.Approving}
            options={{ headerShown: true, title: "Comment" }}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Screens.Login} />
          <Stack.Screen name="Signup" component={Screens.Signup} />
        </>
      )}
    </Stack.Navigator>
  );
};
