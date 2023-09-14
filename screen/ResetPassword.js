import { ImageBackground, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";
import InlineTextButton from "../components/inlineTextButton";
import AppStyles from "../styles/AppStyles";

export default function ResetPassword({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const bgImg = require("../assets/bgs.jpg");

  return (
    <ImageBackground source={bgImg} style={AppStyles.container}>
      <View style={AppStyles.bacgroundCover}>
        <Text style={[AppStyles.lightText, AppStyles.header]}>Reset Password</Text>
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
           <View style={AppStyles.rowContainer}>
        <Text style={[AppStyles.lightText]}>Don't have an account? </Text>
        <InlineTextButton text='Sign Up' onPress={()=> navigation.navigate("SignUp")}/>
        </View>
        
        <Button title="Reset Password"  />
      </View>
      
    </ImageBackground>
  );
}
