import React from "react";

import LightScreen from "../components/LightScreen";
import Logo from "../components/Logo";
import RequestPinForm from '../forms/RequestPinForm'

export default function LoginScreen() {
  return (
    <LightScreen style={{ alignItems: "center" }}>
      <Logo />
      <RequestPinForm />
    </LightScreen>
  );
}
