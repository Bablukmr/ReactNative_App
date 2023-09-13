import { StatusBar } from "expo-status-bar";
import { ImageBackground, Text, View, TextInput, Button } from "react-native";
import AppStyles from "./styles/AppStyles";
import { useState } from "react";
import InlineTextButton from "./components/inlineTextButton";

export default function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const bgImg = require("./assets/bgs.jpg");

  return (
    <ImageBackground source={bgImg} style={AppStyles.container}>
      <View style={AppStyles.bacgroundCover}>
        <Text style={[AppStyles.lightText, AppStyles.header]}>LogIn</Text>
        <TextInput
          style={[
            AppStyles.lightText,
            AppStyles.textInput,
            AppStyles.lightTextInput,
          ]}
          placeholderTextColor="#fff"
          placeholder="Username"
          value={userName}
          onChangeText={setUserName}
        />
        <TextInput
          style={[
            AppStyles.lightText,
            AppStyles.textInput,
            AppStyles.lightTextInput,
          ]}
          placeholderTextColor="#fff"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
        <View style={AppStyles.rowContainer}>
        <Text style={[AppStyles.lightText]}>Don't have an account? </Text>
        <InlineTextButton text='Sign Up'/>
        </View>
        <View style={[AppStyles.rowContainer,AppStyles.marginBottom]}>
        <Text style={[AppStyles.lightText]}>Forgotten your password? </Text>
        <InlineTextButton text='Reset'/>
        </View>
        <Button title="LogIN"  />
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}
