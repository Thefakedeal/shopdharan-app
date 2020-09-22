import React from "react";
import { Card } from "react-native-paper";

export default function RestaurantCard({ title, description, imageURI, onPress }) {
  return (
    <Card
      style={{
        paddingHorizontal: 10,
        paddingTop: 20,
        marginRight: 5,
        marginVertical:3,
      }}
      onPress= {onPress}
      
    >
      <Card.Cover
        source={{ uri: imageURI }}
        resizeMethod="resize"
        resizeMode="contain"
        style={{ resizeMode: "contain", height: 200, width:300 }}
      />
      <Card.Title title={title} subtitle={description} />
    </Card>
  );
}
