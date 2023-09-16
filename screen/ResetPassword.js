import { ImageBackground, Text, View, TextInput, Button } from "react-native";
import React,{ useState } from "react";
import InlineTextButton from "../components/inlineTextButton";
import AppStyles from "../styles/AppStyles";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";


export default function ResetPassword({navigation}) {
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const bgImg = require("../assets/bgs.jpg");
  let [errorMessage, setErrorMessage] = React.useState("");

  let handleReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        navigation.popToTop();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }

  return (
    <ImageBackground source={bgImg} style={AppStyles.container}>
      <View style={AppStyles.bacgroundCover}>
        <Text style={[AppStyles.lightText, AppStyles.header]}>Reset Password</Text>
        <Text style={{ color: "red" }}>{errorMessage}</Text>
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
        
        <Button title="Reset Password" onPress={handleReset} />
      </View>
      
    </ImageBackground>
  );
}
