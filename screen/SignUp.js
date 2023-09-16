import React, { useState } from "react";
import { ImageBackground, Text, View, TextInput, Button } from "react-native";
import AppStyles from "../styles/AppStyles";
import InlineTextButton from "../components/inlineTextButton";
import { auth } from "../firebase";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";


export default function SignUp({ navigation }) {
  const bgImg = require("../assets/bgs.jpg");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  let validateAndSet = (value, valueToCompare, setValue) => {
    if (value !== valueToCompare) {
      setValidationMessage("Passwords do not match");
    } else {
      setValidationMessage("");
    }
    setValue(value);
  };

  let handleSignUp = () => {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        sendEmailVerification(auth.currentUser);
        navigation.navigate("ToDo", { user: userCredential.user });
      })
      .catch((error) => {
        setValidationMessage(error.message);
      });
    }
  }

  return (
    <ImageBackground source={bgImg} style={AppStyles.container}>
      <View style={AppStyles.bacgroundCover}>
        <Text style={[AppStyles.lightText, AppStyles.header]}>Sign Up</Text>
        <Text style={{ color: "red" }}>{validationMessage}</Text>
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
          secureTextEntry={true}
          value={password}
          onChangeText={(value) =>
            validateAndSet(value, confirmPassword, setPassword)
          }
        />
        <TextInput
          style={[
            AppStyles.lightText,
            AppStyles.textInput,
            AppStyles.lightTextInput,
          ]}
          placeholderTextColor="#fff"
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(value) =>
            validateAndSet(value, password, setConfirmPassword)
          }
        />
        <View style={[AppStyles.rowContainer, AppStyles.marginBottom]}>
          <Text style={[AppStyles.lightText]}>Already have an account </Text>
          <InlineTextButton text="Login" onPress={() => navigation.popToTop()} />
        </View>
        <Button title="Sign Up" onPress={handleSignUp} />
      </View>
    </ImageBackground>
  );
}
