import React from "react";
import colors from "../defaults/colors.json";
import authnav from "../defaults/authnav.json";
import LightScreen from "../components/LightScreen";
import Logo from "../components/Logo";

import CustomText from "../components/CustomText";
import LoginForm from '../forms/LoginForm'
import { useContinueWithoutLogin } from "../contexts/LoginInfo";


export default function LoginScreen({ navigation }) {

  const { setContinueWithoutLogin } = useContinueWithoutLogin();

  return (
    <LightScreen style={{ alignItems: "center" }}>
      <Logo />
      <LoginForm />
      <CustomText
        color={colors.PRIMARY_RED}
        onPress={() => {
          navigation.navigate(authnav.signup);
        }}
      >
        Not A User?
      </CustomText>
      <CustomText
        color={colors.PRIMARY_RED}
        onPress={() => {
          navigation.navigate(authnav.requestpin);
        }}
      >
        Forgot Password?
      </CustomText>
      <CustomText
        color={colors.PRIMARY_RED}
        onPress={() => {
          setContinueWithoutLogin(true);
        }}
      >
        Continue Without Login
      </CustomText>
    </LightScreen>
  );
}
