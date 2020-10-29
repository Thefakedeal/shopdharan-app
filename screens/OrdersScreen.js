import React, { useState } from "react";
import LightScreen from "../components/LightScreen";
import CustomSpinner from '../components/CustomSpinner'
import DisplayError from '../components/DisplayError'
import useFetchOrders from "../hooks/useFetchOrders";
import SelectOrderStatus from "../sections/SelectOrderStatus";
import DisplayOrders from '../sections/DisplayOrders'

export default function OrdersScreen() {
  const [orderStatus, setOrderStatus] = useState("");
  const { err, loading, result } = useFetchOrders({
    order_status: orderStatus,
  });

  return (
    <LightScreen>
      <SelectOrderStatus
        orderStatus={orderStatus}
        setOrderStatus={setOrderStatus}
      />
      {loading && <CustomSpinner />}
      {err? <DisplayError errorText={err}/>: null}
      {result.length>0 && <DisplayOrders orders={result}/>}
    </LightScreen>
  );
}
