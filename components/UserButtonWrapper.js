import React from "react";
import {View} from 'react-native'
import CustomButton from '../components/CustomButton'

export default function UserButtonWrapper({onPress, text, ...props}) {
  return (
    <View style={{ flex: 1, alignItems: "center", width: "100%" }}>
      <CustomButton
        mode="text"
        style={{ width: "100%" }}
        onPress={onPress}
        {...props}
      >
        {text}
      </CustomButton>
    </View>
  );
}
