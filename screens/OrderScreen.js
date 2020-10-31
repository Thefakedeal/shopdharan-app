import React, { useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { ScrollView, Alert } from "react-native";
import { Snackbar } from "react-native-paper";
import LightScreen from "../components/LightScreen";
import CustomButton from "../components/CustomButton";
import useFetchOrder from "../hooks/useFetchOrder";
import DisplayError from "../components/DisplayError";
import CustomSpinner from "../components/CustomSpinner";
import OrderTable from "../sections/OrderTable";
import DisplayOrder from "../sections/DisplayOrder";
import DisplayCost from "../sections/DisplayCost";
import AddressSection from "../sections/AddressSection";
import cancelOrder from "../helperFunctions/cancelOrder";

export default function OrderScreen() {
  const route = useRoute();
  const { order_id } = route.params;
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [failText, setFailText] = useState("");
  const navigation = useNavigation();
  const { err, loading, result, reloadResources } = useFetchOrder({ order_id });
  navigation.setOptions({ title: order_id });

  const promptCancel = () => {
    Alert.alert("Do You Want To Cancel Order", "Press Yes To Continue", [
      {
        text: "Yes",
        onPress: async () => {
          try {
            if (await cancelOrder(order_id)) return setSuccess(true);
          } catch (err) {
            setFailText(err);
            setFail(true);
          }
        },
      },
      {
        text: "No",
        onPress: () => {},
      },
    ]);
  };

  if (loading) return <CustomSpinner />;
  if (err) return <DisplayError errorText={err} />;
  return (
    <LightScreen>
      <ScrollView style={{ width: "100%", flex: 1 }}>
        <DisplayOrder order={result.order} />
        <AddressSection address={result.address} />
        <CustomButton mode="text" onPress={reloadResources}>
          {" "}
          Reload{" "}
        </CustomButton>
        <OrderTable orders={result.ordered_items} />
        <DisplayCost
          numOfSuppliers={result.numOfSuppliers}
          deliveryCharge={result.deliveryCharge}
          total={result.total}
        />
        <CustomButton
          disabled={result.order.order_status !== "processing" ? true : false}
          onPress={promptCancel}
          mode="text"
        >
          {" "}
          Cancel Order{" "}
        </CustomButton>
      </ScrollView>
      <Snackbar
        visible={success}
        onDismiss={() => {
          setSuccess(false);
        }}
        duration={3000}
      >
        Order Cancelled Successfully
      </Snackbar>
      <Snackbar
        visible={fail}
        onDismiss={() => {
          setFail(false);
        }}
        duration={3000}
      >
        {failText || "Something Went Wrong"}
      </Snackbar>
    </LightScreen>
  );
}
