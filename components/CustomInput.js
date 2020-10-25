import React from "react";
import { TextInput, HelperText } from "react-native-paper";
import { StyleSheet } from "react-native";
import colors from "../defaults/colors.json";

export default function CustomInput({
  label,
  value,
  style,
  error,
  errorText,
  onChangeText,
  onBlur,
  secureTextEntry,
  keyboardType,
  ...fields
}) {
  return (
    <>
      <TextInput
        accessibilityLabel={label}
        label={label}
        value={value}
        onBlur={onBlur}
        errorText={errorText}
        style={[styles.textBox, style]}
        mode="outlined"
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={false || secureTextEntry}
        {...fields}
        theme={{
          colors: {
            primary: colors.PRIMARY_RED,
            placeholder: colors.PRIMARY_RED,
          },
        }}
      />
      {error ? (
        <HelperText type="error" visible={error}>
          {errorText}
        </HelperText>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  textBox: {
    marginBottom: 5,
    width: "80%",
    height: 40,
    color: colors.PRIMARY_RED,
  },
});
