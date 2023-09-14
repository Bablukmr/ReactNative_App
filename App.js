import React, { useState } from "react";
import { StatusBar, ImageBackground, Text, View } from "react-native";
import AppStyles from "./styles/AppStyles";
import LogIn from "./screen/LogIn";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "./screen/SignUp";
import ResetPassword from "./screen/ResetPassword";

const Stack = createStackNavigator();

export default function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const bgImg = require("./assets/bgs.jpg");

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LogIn"
            component={LogIn}
            options={{ headerShown: false }} />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }} />
          <Stack.Screen
            name="ResetPassword"
            component={ResetPassword}
            options={{ headerShown: false }} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
  );
}
