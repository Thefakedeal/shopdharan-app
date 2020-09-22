import React from "react";
import { Text } from "react-native";
import font from "../defaults/fontname.json";
import colors from '../defaults/colors.json'

export default function CustomText({ children, fontSize, color, onPress, style }) {
  return (
    <Text
      style={[{
        fontFamily: font.Righteous,
        fontSize: fontSize || 20,
        color: color || colors.PRIMARY_RED,
        marginVertical:1,
      },style]}
      onPress={onPress}
    >
      {children}
    </Text>
  );
}
