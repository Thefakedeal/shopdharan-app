import React, { useState } from "react";
import { Snackbar } from "react-native-paper";

import LightScreen from "../components/LightScreen";
import ChangePasswordForm from '../forms/ChangePasswordForm'

export default function ChangePasswordScreen() {
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [failText, setFailText] = useState("");

  return (
    <LightScreen>
        <ChangePasswordForm success={()=>setSuccess(true)}
            fail={()=>setFail(true)}
            failText={(val)=>setFailText(val)}
        />
      <Snackbar
        visible={success}
        onDismiss={() => {
          setSuccess(false);
        }}
        duration={3000}
      >
        Password Changed
      </Snackbar>
      <Snackbar
        visible={fail}
        onDismiss={() => {
          setFail(false);
        }}
        duration={3000}
      >
        {failText || "Something Went Wrong"}
      </Snackbar>
    </LightScreen>
  );
}
