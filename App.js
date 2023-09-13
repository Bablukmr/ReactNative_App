import { StatusBar } from "expo-status-bar";
import { ImageBackground, Text, View, TextInput, Button } from "react-native";
import AppStyles from "./styles/AppStyles";
import { useState } from "react";
import InlineTextButton from "./components/inlineTextButton";
import LogIn from "./screen/Login";

export default function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const bgImg = require("./assets/bgs.jpg");

  return (
    <View source={bgImg} style={AppStyles.container}>
     <LogIn/>
      <StatusBar style="auto" />
    </View>
  );
}
