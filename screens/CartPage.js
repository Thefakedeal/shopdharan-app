import React from "react";
import { ScrollView, Text } from "react-native";
import { DataTable, Button } from "react-native-paper";
import useFetchCost from "../hooks/useFetchCost";

import CustomSpinner from "../components/CustomSpinner";
import DisplayError from "../components/DisplayError";
import LightScreen from "../components/LightScreen";
import CustomText from "../components/CustomText";
import { useCart } from "../contexts/Cart";
import DisplayCartTable from '../sections/DisplayCartTable'
export default function CartPage() {
  const { cart } = useCart();
  const { err, loading, result } = useFetchCost({ cart });

  if (loading) return <CustomSpinner />;
  if (err) return <DisplayError errorText={err} />;
  return (
    <LightScreen>
      <ScrollView style={{ width: "100%" }}>
        <CustomText style={{ margin: 10 }}>Cart</CustomText>
        <Text style={{ alignSelf: "center" }}>
          Click On The Row To Edit Item.
        </Text>
       <DisplayCartTable orders={result.cart_orders}/>
        <CustomText style={{ alignSelf: "center" }} >
          {`Net Total: ${result.total}`}
        </CustomText>
        <Text style={{ alignSelf: "center" }}>
          {`Delivery Charge extra, Rs.${result.deliveryCharge} for ${result.suppliers} suppler(s).`}
        </Text>
      </ScrollView>
    </LightScreen>
  );
}
