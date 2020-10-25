import React, { useState } from "react";
import { View, Alert } from "react-native";
import { Snackbar } from "react-native-paper";
import logout from "../helperFunctions/logout";
import CustomButtom from "../components/CustomButton";
import { useRefreshToken } from "../contexts/LoginInfo";

export default function DisplayLogout() {
  const { refreshToken, setRefreshToken } = useRefreshToken();

  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailed, setShowFailed] = useState(false);

  const logoutStart = async () => {
    try {
      const loggedout = await logout(refreshToken);
      if (loggedout) {
        setRefreshToken("");

        setShowSuccess(true);
        return;
      }
      setShowFailed(true);
    } catch (err) {
      setShowFailed(true);
    }
  };

  const promptLogout = () => {
    Alert.alert(
      "Do You Want to Logout?",
      "You Sure?",
      [
        {
          text: "Yes",
          onPress: logoutStart,
        },
        {
          text: "No",
          onPress: () => {},
        },
      ],
      { cancelable: true }
    );
  };
  return (
    <View style={{ flex: 1, alignItems: "center", width: "100%"}}>
      <CustomButtom mode="text"  style={{width: "100%"}} onPress={promptLogout}>
        Logout
      </CustomButtom>
      <Snackbar
        visible={showSuccess}
        onDismiss={() => {
          setShowSuccess(false);
        }}
        duration={3000}
      >
        Successfully Logged Out
      </Snackbar>
      <Snackbar
        visible={showFailed}
        onDismiss={() => {
          setShowFailed(false);
        }}
        duration={3000}
      >
        Failed To Logout
      </Snackbar>
    </View>
  );
}
