import React, { useState } from "react";
import { Card, Button } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import CustomText from "./CustomText";
import CustomButton from "./CustomButton";
import colors from "../defaults/colors.json";

export default function OrderCard({
  title,
  price,
  imageURI,
}) {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const increaseQuantity = () => {
    if (quantity < 99) setQuantity(quantity + 1);
  };
  return (
    <Card
      style={{
        paddingHorizontal: 10,
        width: 320,
        marginRight: 5,
        marginVertical:3,
      }}
    > 
      <Card.Title title={title} subtitle={`Rs. ${price}`} />
      <Card.Cover
        source={{ uri: imageURI }}
        resizeMethod="resize"
        resizeMode="contain"
        style={{ resizeMode: "contain", height: 200, width: 300 }}
      />
      <Card.Content>
        <View style={styles.quantity}>
          <Button onPress={decreaseQuantity} color={colors.PRIMARY_RED}>
            -
          </Button>
          <CustomText fontSize={20}>{quantity}</CustomText>
          <Button onPress={increaseQuantity} color={colors.PRIMARY_RED}>
            +
          </Button>
        </View>

        <CustomButton>Add To Cart</CustomButton>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  quantity: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 5,
  },
});
