import React, { useState } from "react";

import LightScreen from "../components/LightScreen";
import Logo from "../components/Logo";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

export default function LoginScreen() {
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
    <LightScreen style={styles.container}>
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
    </LightScreen>
  );
}


