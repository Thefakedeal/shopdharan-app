import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { useFonts } from "expo-font";

import {
  ContinueWithouthLogin,
  useContinueWithoutLogin,
} from "./contexts/ContinueWithouthLogin";

import SplashScreen from "./screens/SplashScreen";
import AuthNav from "./navigations/AuthNav";
import HomePage from './screens/HomePage'

export default function App() {
  return(
    <ContinueWithouthLogin>
        <Container />
    </ContinueWithouthLogin>
  )
}

function Container(){
  let [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Righteous-Regular.ttf"),
  });
  const [continueWithouthLogin] = useContinueWithoutLogin()

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <SplashScreen />
      </View>
    );
  }
  if(continueWithouthLogin){
    return(
      <View style={styles.container}>
        <HomePage />
      </View>
    )
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
