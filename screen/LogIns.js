import { ImageBackground, Text, View, TextInput, Button } from "react-native";
import React,{ useState } from "react";
import InlineTextButton from "../components/inlineTextButton";
import AppStyles from "../styles/AppStyles";
// import { signInWithEmailAndPassword,getAuth, onAuthStateChanged } from "firebase/auth";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export default function LogIn({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const bgImg = require("../assets/bgs.jpg");
const [errorMessage,setErrorMessage]=useState("")

if (auth.currentUser) {
  navigation.navigate("ToDo");
} else {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigation.navigate("ToDo");
    }
  });
}

  let handleLogin=()=>{
    if(email !== "" && password !== ""){
      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    navigation.navigate('ToDo',{user: userCredential.user})

  })
  .catch((error) => {
    setErrorMessage(error.message)
  });
    }else{
      setErrorMessage("Please enter an Email and Password")
    }
  }
  return (
    <ImageBackground source={bgImg} style={AppStyles.container}>
      <View style={AppStyles.bacgroundCover}>
        <Text style={[AppStyles.lightText, AppStyles.header]}>LogIn</Text>
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
        <Button title="LogIN" onPress={handleLogin} />
      </View>
      
    </ImageBackground>
  );
}
