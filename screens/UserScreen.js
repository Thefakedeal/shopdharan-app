import React from "react";
import LightScreen from "../components/LightScreen";
import DisplayLogout from "../sections/DisplayLogout";
import DisplayLogin from "../sections/DisplayLogin";
import { useIsLoggedIn } from "../contexts/LoginInfo";

export default function UserPage() {
  const isLoggedIn = useIsLoggedIn();
  return (
    <LightScreen>
      {isLoggedIn ? <DisplayLogout /> : <DisplayLogin />}
    </LightScreen>
  );
}
