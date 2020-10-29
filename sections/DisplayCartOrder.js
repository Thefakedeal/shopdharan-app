import React from "react";
import { Text } from "react-native";
import useFetchCost from "../hooks/useFetchCost";

import CustomSpinner from "../components/CustomSpinner";
import DisplayError from "../components/DisplayError";
import CustomText from "../components/CustomText";
import { useCart } from "../contexts/Cart";
import DisplayCartTable from '../sections/DisplayCartTable'

export default function DisplayCartOrder({cart}) {
  const { err, loading, result } = useFetchCost({ cart });

  if (loading) return <CustomSpinner />;
  if (err) return <DisplayError errorText={err} />;
  return (
    <>
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
    </>
  );
}
