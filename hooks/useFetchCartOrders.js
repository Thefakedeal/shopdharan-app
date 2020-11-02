import React, { useState, useEffect } from "react";
import baseURL from "../defaults/baseurl";

export default function useFetchCost({ cart = []}) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({
    cart_orders: [],
    deliveryCharge: 0,
    suppliers: 0,
    total: 0,
  });
  const [err, setErr] = useState();

  useEffect(() => {
    if (cart.length === 0) {
      setResult({
        cart_orders: [],
        deliveryCharge: 0,
        suppliers: 0,
        total: 0,
      });
      return;
    }
    setLoading(true);
    fetch(`${baseURL}/api/user/orders/getproductcost`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        orders: cart,
      }),
    })
      .then(async (response) => {
        if (!response.ok)
          throw (await response.text()) || "Something Went Wrong";
        return response.json();
      })
      .then((res) => {
        setResult(res);
      })
      .catch((err) => {
        setErr(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [cart]);

  return { err, loading, result };
}
