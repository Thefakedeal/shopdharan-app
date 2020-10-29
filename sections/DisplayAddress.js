import React from "react";
import { Text, View, Alert} from "react-native";
import CustomText from "../components/CustomText";
import CustomButton from "../components/CustomButton";
import deleteAddress from "../helperFunctions/deleteAddress";

export default function DisplayAddress({
  address,
  onSuccess,
  onFail,
}) {

  const deleteStart = async () => {
    try {
      const success = await deleteAddress(address.address_id);
      success?onSuccess():onFail();
    } catch (err) {
      onFail()
    }
  };

  const promptDelete = () => {
    Alert.alert(
      "Do You Want to Delete This Address?",
      "Press Yes To Confirm",
      [
        {
          text: "Yes",
          onPress: deleteStart,
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
    <View style={{ width: "100%", alignItems: "center", flex: 1 }}>
      <CustomText>{`${address.street_name}, ${address.city_name}`}</CustomText>
      {address.details ? <Text style={{textAlign: "center", }}>{address.details}</Text> : null}
      <CustomButton mode="text" style={{ width: "100%" }}
        onPress={promptDelete}
      >
        Delete Address
      </CustomButton>
    </View>
  );
}
