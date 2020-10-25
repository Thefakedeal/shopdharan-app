import React, { useState } from "react";
import { Card, Button } from "react-native-paper";
import {useNavigation} from '@react-navigation/native'
import { StyleSheet, View } from "react-native";
import CustomText from "./CustomText";
import CustomButton from "./CustomButton";
import colors from "../defaults/colors.json";
import { useCart } from "../contexts/Cart";

import homenav from '../defaults/homenav.json'

export default function ProductCard({ id, title, price, imageURI }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const navigation = useNavigation()

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
        marginRight: 5,
        marginVertical: 3,
      }}
      onPress= {()=>{
        navigation.navigate(homenav.product,{
          id: id,
          title: title 
        })
      }}
    >
      <Card.Title title={title} subtitle={`Rs. ${price}`} />
      <Card.Cover
        source={{ uri: imageURI }}
        resizeMethod="resize"
        resizeMode="contain"
        style={{
          resizeMode: "contain",
          height: 200,
          width: 300,
          alignSelf: "center",
        }}
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
        <View style={{ flex: 1 }}>
          <CustomButton
            onPress={() => {
              addToCart({ product_id: id }, quantity);
              setQuantity(1)
            }}
          >
            Add To Cart
          </CustomButton>
        </View>
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
