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
  unit = "kg",
  minimum = 1,
  maximum = 99,
  step = 1,
}) {
  const [quantity, setQuantity] = useState(minimum);

  const decreaseQuantity = () => {
    if (quantity > minimum) setQuantity(quantity - step);
  };
  const increaseQuantity = () => {
    if (quantity < maximum) setQuantity(quantity + step);
  };
  return (
    <Card
      style={{
        paddingHorizontal: 10,
        paddingTop: 20,
        width: 320,
        marginRight: 5,
        marginVertical:3,
      }}
    >
      <Card.Title title={title} subtitle={`Rs. ${price} per ${unit}`} />
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
