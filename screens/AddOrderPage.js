import React, { useState } from "react";
import { ScrollView, Alert } from "react-native";
import { Snackbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import tabnav from '../defaults/tabnav.json'
import usernav from "../defaults/usernav.json";
import addOrder from "../helperFunctions/addOrder";
import LightScreen from "../components/LightScreen";
import DisplayCartOrder from "../sections/DisplayCartOrder";
import SelectAddress from "../sections/SelectAddress";
import CustomButton from "../components/CustomButton";
import { useCart } from "../contexts/Cart";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function AddOrderPage() {
  const navigation = useNavigation();
  const { cart = [] } = useCart();
  const [address, setAddress] = useState("");

  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const onSuccess = () => setSuccess(true);
  const onFail = () => setFail(true);

  const promptAddOrder = () => {
    Alert.alert(
      "Do You Want To Order?",
      "Press Yes To Order",
      [
        {
          text: "Yes",
          onPress: async () => {
            try {
              const order = await addOrder(cart, address);
              order.order_id ? onSuccess() : onFail();
              const pause = await sleep(1000)
              navigation.goBack();
            } catch (err) {
              onFail();
            }
          },
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
    <LightScreen>
      <ScrollView style={{ width: "100%" }}>
        <SelectAddress address={address} setAddress={setAddress} />
        <CustomButton
          mode="text"
          onPress={() => {
            navigation.navigate(tabnav.User, {screen: usernav.addaddress});
          }}
        >
          Add Address
        </CustomButton>
        <DisplayCartOrder cart={cart} />
        <CustomButton
          mode="text"
          disabled={address && cart.length !== 0 ? false : true}
          onPress={promptAddOrder}
        >
          Add Order
        </CustomButton>
      </ScrollView>
      <Snackbar
        visible={success}
        onDismiss={() => {
          setSuccess(false);
        }}
        duration={3000}
      >
        Order Added Successfully
      </Snackbar>
      <Snackbar
        visible={fail}
        onDismiss={() => {
          setFail(false);
        }}
        duration={3000}
      >
        Failed To Order Try Again Later
      </Snackbar>
    </LightScreen>
  );
}
