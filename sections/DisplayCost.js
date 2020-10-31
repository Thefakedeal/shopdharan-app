import React from "react";
import { Text } from "react-native";
import CustomText from "../components/CustomText";


export default function DisplayCost({total, deliveryCharge, numOfSuppliers}) {
  return (
    <>
      <CustomText style={{ alignSelf: "center" }}>
        {`Net Total: ${total}`}
      </CustomText>
      <Text style={{ alignSelf: "center" }}>
        {`Delivery Charge extra, Rs.${deliveryCharge} for ${numOfSuppliers} suppler(s).`}
      </Text>
    </>
  );
}
