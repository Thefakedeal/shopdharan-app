import React, { useState } from "react";

import colors from '../defaults/colors.json'
import authnav from '../defaults/authnav.json'
import LightScreen from "../components/LightScreen";
import Logo from "../components/Logo";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import CustomText from "../components/CustomText"

export default function LoginScreen({navigation}) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const setEmail = (value) => {
    setCredentials((credentials) => {
      return { email: value, password: credentials.password };
    });
  };

  const setPassword = (value) => {
    setCredentials((credentials) => {
      return { email: credentials.email, password: value };
    });
  };
  return (
    <LightScreen>
      <Logo />
      <CustomInput
        label={"Email"}
        value={credentials.email}
        onChangeText={setEmail}
      />
      <CustomInput
        label={"Password"}
        value={credentials.password}
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <CustomButton
        onPress={() => {
          setCredentials({ email: "", password: "" });
        }}
      >
        Login
      </CustomButton>
        <CustomText
        color={colors.PRIMARY_RED}
        onPress={()=>{
            navigation.navigate(authnav.signup)
        }}> Not A User? </CustomText>
    </LightScreen>
  );
}


