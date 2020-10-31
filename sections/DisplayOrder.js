import React from "react";
import { View } from "react-native";
import { capitalizeEachWord } from "../helperFunctions/capitalize";
import { msToTime } from "../helperFunctions/msToTime";
import CustomText from "../components/CustomText";

export default function DisplayOrder({ order }) {
  const orderedTime = Date.parse(order.ordered_time);
  const currentTime = Date.now();
  const timePassed = currentTime - orderedTime;
  const displayTimePassed = msToTime(timePassed);
  return (
    <View style={{width:"100%", alignItems: "center"}}>
      <CustomText >
        Order Status: {capitalizeEachWord(order.order_status)}
      </CustomText>
      <CustomText>
        Ordered: {capitalizeEachWord(displayTimePassed)}
      </CustomText>
    </View>
  );
}
