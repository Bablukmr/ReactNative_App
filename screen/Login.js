import { ImageBackground, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";
import InlineTextButton from "../components/inlineTextButton";
import AppStyles from "../styles/AppStyles";

export default function LogIn({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const bgImg = require("../assets/bgs.jpg");

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
          placeholder="Email"
          
          value={email}
          onChangeText={setEmail}
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
        <InlineTextButton text='Sign Up' onPress={()=> navigation.navigate("SignUp")}/>
        </View>
        <View style={[AppStyles.rowContainer,AppStyles.marginBottom]}>
        <Text style={[AppStyles.lightText]}>Forgotten your password? </Text>
        <InlineTextButton text='Reset' onPress={()=> navigation.navigate("ResetPassword")}/>
        </View>
        <Button title="LogIN"  />
      </View>
      
    </ImageBackground>
  );
}
