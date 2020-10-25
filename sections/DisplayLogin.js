import React, { useState } from "react";
import { View, Alert } from "react-native";
import { Snackbar } from "react-native-paper";
import logout from "../helperFunctions/logout";
import CustomButtom from "../components/CustomButton";
import {useContinueWithoutLogin} from "../contexts/LoginInfo";

export default function DisplayLogin() {

    const {setContinueWithoutLogin} = useContinueWithoutLogin()
  return (
    <View style={{ flex: 1, alignItems: "center", width: "100%"}}>
      <CustomButtom mode="text"  style={{width: "100%"}} onPress={()=>{
          setContinueWithoutLogin(false)
      }}>
        Log In
      </CustomButtom>

    </View>
  );
}
