import React, { useState } from "react";
import { StatusBar, ImageBackground, Text, View } from "react-native";
import AppStyles from "./styles/AppStyles";
import LogIn from "./screen/LogIns";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "./screen/SignUp";
import ResetPassword from "./screen/ResetPassword";
import { initializeApp } from "firebase/app";
import ToDo from "./screen/ToDo";

const Stack = createStackNavigator();

// const firebaseConfig = {
//   apiKey: "AIzaSyBZq6gNZAD8HZJOVlqzIYcGYbX_uflIJKA",
//   authDomain: "todoapp-560ef.firebaseapp.com",
//   projectId: "todoapp-560ef",
//   storageBucket: "todoapp-560ef.appspot.com",
//   messagingSenderId: "577111528125",
//   appId: "1:577111528125:web:a1f08a77ff39e5eb879dd4",
//   measurementId: "G-4X27R0WGTE"
// };

// const app= initializeApp(firebaseConfig);

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
          <Stack.Screen
            name="ToDo"
            component={ToDo}
            options={{ headerShown: false }} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
  );
}
