
import React from "react";
import { StyleSheet, Text, View, StatusBar} from "react-native";
import { useFonts } from "expo-font";

import SplashScreen from "./screens/SplashScreen";
import LoginScreen from './screens/LoginScreen'

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
        <LoginScreen/>
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width:"100%",
    marginTop: StatusBar.currentHeight,
  },
});
