import React from "react";
import { ScrollView, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import cartnav from "../defaults/cartnav.json";
import DisplayCartOrder from '../sections/DisplayCartOrder'
import useFetchCost from "../hooks/useFetchCost";
import CustomButton from "../components/CustomButton";
import CustomSpinner from "../components/CustomSpinner";
import DisplayError from "../components/DisplayError";
import LightScreen from "../components/LightScreen";
import CustomText from "../components/CustomText";
import {useIsLoggedIn} from '../contexts/LoginInfo'
import { useCart } from "../contexts/Cart";
import DisplayCartTable from "../sections/DisplayCartTable";

export default function CartPage() {
  const { cart, clearCart } = useCart();
  const isLoggedIn = useIsLoggedIn()
  const navigation = useNavigation();


  const promptClearCart = () => {
    Alert.alert(
      "Do You Want To Clear Cart?",
      "Are You Sure?",
      [
        {
          text: "Yes",
          onPress: clearCart,
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
        <CustomText style={{ margin: 10 }}>Cart</CustomText>
        <DisplayCartOrder cart={cart}/>
       {isLoggedIn && <CustomButton
          onPress={() => {
            navigation.navigate(cartnav.addorder);
          }}
          mode="text"
        >
          Add To Order
        </CustomButton>}

        <CustomButton mode="text" onPress={promptClearCart}>
          Clear Cart
        </CustomButton>
      </ScrollView>
    </LightScreen>
  );
}
