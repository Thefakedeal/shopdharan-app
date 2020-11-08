import React from "react";

import LightScreen from "../components/LightScreen";
import Logo from "../components/Logo";
import RequestPasswordForm from '../forms/ResetPasswordForm'

export default function LoginScreen() {
  return (
    <LightScreen style={{ alignItems: "center" }}>
      <Logo />
      <RequestPasswordForm />
    </LightScreen>
  );
}
