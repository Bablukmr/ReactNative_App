import { ImageBackground, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";
import InlineTextButton from "../components/inlineTextButton";
import AppStyles from "../styles/AppStyles";

export default function SignUp({navigation}) {
  const bgImg = require("../assets/bgs.jpg");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confornmPassword, setConformPassword] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

let validateAndSet=(value,valueToCompare,setValue)=>{
  if(value !== valueToCompare){
    setValidationMessage("Password do not Match")
  }
  else{
    setValidationMessage("")
  }
  setValue(value)
}
  return (
    <ImageBackground source={bgImg} style={AppStyles.container}>
      <View style={AppStyles.bacgroundCover}>
        <Text style={[AppStyles.lightText, AppStyles.header]}>Sign Up</Text>
        <Text style={{color:"red"}}>{validationMessage}</Text>
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
          onChangeText={(value)=>validateAndSet(value,confornmPassword,setPassword)}
        />
        <TextInput
          style={[
            AppStyles.lightText,
            AppStyles.textInput,
            AppStyles.lightTextInput,
          ]}
          placeholderTextColor="#fff"
          placeholder="Password"
          value={confornmPassword}
          onChangeText={(value)=>validateAndSet(value,password,setConformPassword)}
        />
        <View style={[AppStyles.rowContainer,AppStyles.marginBottom]}>
        <Text style={[AppStyles.lightText]}>Already have an account </Text>
        <InlineTextButton text='Lonin' onPress={()=> navigation.popToTop()}/>
        </View>
        <Button title="Sign Up"  />
      </View>
    </ImageBackground>
  );
}
