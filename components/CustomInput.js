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
  keyboardType
}) {
  return (
    <TextInput
      label={label}
      value={value}
      style={[styles.textBox, style]}
      mode="outlined"
      onChangeText={onChangeText}
      keyboardType= {keyboardType}
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
    marginBottom:5,
    width: "80%",
    height: 40,
    color: colors.PRIMARY_RED,
  },
});
