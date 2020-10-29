import React from "react";
import { FlatList, View } from "react-native";
import { List } from "react-native-paper";


const msToTime = (ms) => {
  const minutes = Math.floor((ms / 60000) % 60);
  const hours = Math.floor((ms / 3600000) % 24);
  const days = Math.floor(ms / 86400000);
  if (days > 0) return `${days} day(s) ago`;
  if (hours > 0) return `${hours} hours ${minutes} minute(s) ago`;
  return `${minutes} minute(s) ago`;
};

export default function DisplayOrders({ orders = [] }) {
  return (
    <View style={{flex:1, width:"100%"}}>
  
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
              description={display}
            />
          );
        }}
        keyExtractor={(order) => order.order_id}
      />
    </View>
  );
}
