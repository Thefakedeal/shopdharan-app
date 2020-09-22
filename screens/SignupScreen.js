import React, { useState, useReducer } from "react";
import { ScrollView, StyleSheet } from "react-native";

import authnav from '../defaults/authnav.json'
import colors from '../defaults/colors.json'
import LightScreen from "../components/LightScreen";
import Logo from "../components/Logo";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import CustomText from '../components/CustomText';

const ACTIONS = {
  SETNAME: "setName",
  SETEMAIL: "setEmail",
  SETPASSWORD: "setPassword",
  SETREPASSWORD: "setRepassword",
  SETNUMBER: "setNumber",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SETNAME:
      return { ...state, name: action.payload };
    case ACTIONS.SETEMAIL:
      return { ...state, email: action.payload };
    case ACTIONS.SETPASSWORD:
      return { ...state, password: action.payload };
    case ACTIONS.SETREPASSWORD:
      return { ...state, repassword: action.repayload };
    case ACTIONS.SETNUMBER:
      return { ...state, number: action.payload };
    default:
      return state;
  }
}

export default function SignupScreen({navigation}) {
  const [credentials, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
    password: "",
    repassword: "",
    number: "",
  });

  const setName = (value) => {
    dispatch({ type: ACTIONS.SETNAME, payload: value });
  };
  const setEmail = (value) => {
    dispatch({ type: ACTIONS.SETEMAIL, payload: value });
  };
  const setPassword = (value) => {
    dispatch({ type: ACTIONS.SETPASSWORD, payload: value });
  };
  const setRepassword = (value) => {
    dispatch({ type: ACTIONS.SETREPASSWORD, payload: value });
  };
  const setNumber = (value) => {
    dispatch({ type: ACTIONS.SETNUMBER, payload: value });
  };
  return (
    <LightScreen style={{alignItems:"center"}}>
      <Logo />
      <CustomInput
        label="Name"
        value={credentials.name}
        onChangeText={setName}
      />
      <CustomInput
        label="Email"
        value={credentials.email}
        onChangeText={setEmail}
      />
      <CustomInput
        label="Password"
        value={credentials.password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <CustomInput
        label="Re-Password"
        value={credentials.repassword}
        onChangeText={setRepassword}
        secureTextEntry={true}
      />
      <CustomInput
        label="Mobile No."
        value={credentials.number}
        onChangeText={setNumber}
        keyboardType={"phone-pad"}
      />
      <CustomButton>Signup</CustomButton>
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
