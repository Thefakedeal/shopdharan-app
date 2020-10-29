import React from "react";
import useFetchOrderStatuses from "../hooks/useFetchOrderStatuses";
import { View, Picker } from "react-native";
import {capitalizeEachWord} from '../helperFunctions/capitalize'
import colors from "../defaults/colors.json";
import CustomSpinner from "../components/CustomSpinner";
import DisplayError from "../components/DisplayError";

export default function SelectOrderStatus({ orderStatus, setOrderStatus }) {
  const { err, loading, result } = useFetchOrderStatuses();

  if (err) return <DisplayError errorText={err} />;
  if (loading) return <CustomSpinner />;

  return (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Picker
        selectedValue={orderStatus}
        onValueChange={(value, index) => {
          setOrderStatus(value);
        }}
        style={{
          color: colors.PRIMARY_RED,
        }}
      >
        <Picker.Item key={"All"} label={`All`} value={''} color={colors.PRIMARY_RED} />
        {result.map((status) => (
          <Picker.Item
            key={status}
            label={`${capitalizeEachWord(status)}`}
            value={status}
            color={colors.PRIMARY_RED}
          />
        ))}
      </Picker>
    </View>
  );
}
