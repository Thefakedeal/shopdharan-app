import React from "react";
import { FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { List } from "react-native-paper";
import usernav from "../defaults/usernav.json";
import { msToTime } from "../helperFunctions/msToTime";

export default function DisplayOrders({ orders = [] }) {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <FlatList
        data={orders}
        renderItem={({ item }) => {
          const orderedTime = Date.parse(item.ordered_time);
          const currentTime = Date.now();
          const timePassed = currentTime - orderedTime;
          const display = msToTime(timePassed);
          return (
            <List.Item
              title={item.order_id}
              description={`${item.order_status}  ${display}`}
              onPress={() => {
                navigation.navigate(usernav.order, {
                  order_id: item.order_id,
                });
              }}
            />
          );
        }}
        keyExtractor={(order) => order.order_id}
      />
    </View>
  );
}
