import React from "react";
import {StyleSheet } from "react-native";

import authnav from '../defaults/authnav.json'
import colors from '../defaults/colors.json'
import LightScreen from "../components/LightScreen";
import Logo from "../components/Logo";
import CustomText from '../components/CustomText';
import SignupForm from '../forms/SignupForm'
export default function SignupScreen({navigation}) {
  
  return (
    <LightScreen style={{alignItems:"center"}}>
      <Logo />
      <SignupForm />
      <CustomText
      color={colors.PRIMARY_RED}
      onPress={()=>{
            navigation.navigate(authnav.login)
        }}> Already A User? </CustomText>
    </LightScreen>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    width: "100%",
  },
});
