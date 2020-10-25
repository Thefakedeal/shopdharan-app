import React from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet } from "react-native";
import colors from "../defaults/colors.json";


export default function CustomSearch({label,style, value, onChangeText, onIconPress}) {
  return (
    <Searchbar
      placeholder={label}
      autoFocus={true}
      style={[styles.searchBox,style]}
      value={value}
      theme={{
        colors: {
          primary: colors.PRIMARY_RED,
          placeholder: colors.PRIMARY_RED,
        },
      }}
      iconColor={colors.PRIMARY_RED}
      onChangeText={onChangeText}
     
      onIconPress={onIconPress}
    />
  );
}
const styles = StyleSheet.create({
    searchBox: {
      marginBottom: 10,
      width: "100%",
      height: 40,
      color: colors.PRIMARY_RED,
    },
  });