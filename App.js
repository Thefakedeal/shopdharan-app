
import React from "react";
import { StyleSheet, Text, View, StatusBar} from "react-native";
import { useFonts } from "expo-font";

import SplashScreen from "./screens/SplashScreen";
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import AuthNav from './navigations/AuthNav'

export default function App() {
  let [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Righteous-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <SplashScreen />
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
    width:"100%",
    marginTop: StatusBar.currentHeight,
  },
});
