import React,{ useState } from "react";
import { View, Text,Button } from "react-native";
import AppStyles from "../styles/AppStyles";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function ToDo({ navigation, route }) {
 
  let loout=()=>{
    signOut(auth).then(()=>{
      navigation.popToTop()
    })
  }
  return (
    <View style={AppStyles.container}>
      <Text>ToDo</Text>
      <Button title="logout" onPress={loout}/>
     
    </View>
  );
}
