import React from "react";
import { TextInput } from "react-native-paper";
import { StyleSheet } from "react-native";
import colors from "../defaults/colors.json";

export default function CustomInput({
  label,
  value,
  style,
  onChangeText,
  secureTextEntry,
}) {
  return (
    <TextInput
      label={label}
      value={value}
      style={[styles.textBox, style]}
      mode="outlined"
      onChangeText={onChangeText}
      secureTextEntry={false || secureTextEntry}
      theme={{
        colors: {
          primary: colors.PRIMARY_RED,
          placeholder: colors.PRIMARY_RED,
        },
      }}
    />
  );
}

const styles = StyleSheet.create({
  textBox: {
    margin: 10,
    width: "80%",
    height: 40,
    color: colors.PRIMARY_RED,
  },
});
