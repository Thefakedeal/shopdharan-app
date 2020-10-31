import React from "react";
import { Text, View, Alert } from "react-native";
import CustomText from "../components/CustomText";
import CustomButton from "../components/CustomButton";
import deleteAddress from "../helperFunctions/deleteAddress";

export default function DisplayAddress({ address }) {
  return (
    <View style={{ width: "100%", alignItems: "center", flex: 1 }}>
      <CustomText> Address: {`${address.street_name}, ${address.city_name}`}</CustomText>
    </View>
  );
}
