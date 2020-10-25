import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { useFonts } from "expo-font";

import {
  LoginInfo,
  useIsLoggedIn,
  useLoading,
  useContinueWithoutLogin,
} from "./contexts/LoginInfo";
import {
  Settings,
  useLoading as useSettingsLoading,
} from "./contexts/Settings";
import { Cart, useLoading as useCartLoading } from "./contexts/Cart";

import SplashScreen from "./screens/SplashScreen";
import AuthNav from "./navigations/AuthNav";
import TabNav from "./navigations/TabNav";

export default function App() {
  return (
    <Cart>
      <Settings>
        <LoginInfo>
          <Container />
        </LoginInfo>
      </Settings>
    </Cart>
  );
}

function Container() {
  let [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Righteous-Regular.ttf"),
  });
  const { continueWithoutLogin } = useContinueWithoutLogin();
  const cartLoading = useCartLoading();
  const loading = useLoading();
  const settingsLoading = useSettingsLoading();
  const loggedIn = useIsLoggedIn();
  if (!fontsLoaded || loading || settingsLoading || cartLoading) {
    return (
      <View style={styles.container}>
        <SplashScreen />
      </View>
    );
  }
  if (continueWithoutLogin || loggedIn) {
    return (
      <View style={styles.container}>
        <TabNav />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <AuthNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: StatusBar.currentHeight,
  },
});
