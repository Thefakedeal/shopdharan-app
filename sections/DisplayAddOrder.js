import React from "react";
import { Text } from "react-native";
import useFetchCost from "../hooks/useFetchCost";

import CustomSpinner from "../components/CustomSpinner";
import DisplayError from "../components/DisplayError";
import CustomText from "../components/CustomText";
import DisplayCartTable from '../sections/DisplayCartTable'

export default function DisplayCartOrder({cart, address_id}) {
  const { err, loading, result } = useFetchCost({ cart, address_id});

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
        <Text style={{ alignSelf: "center" }}>
          Delivery Charge is Extra for Ordering From Different City.
        </Text>
    </>
  );
}
