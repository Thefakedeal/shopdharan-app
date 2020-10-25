import React, {useState} from "react";
import useFetchProduct from "../hooks/useFetchProduct";
import { ScrollView, StyleSheet, View } from "react-native";

import colors from '../defaults/colors.json'
import CustomText from '../components/CustomText'
import ProductDetails from "../sections/ProductDetails";
import CustomButton from "../components/CustomButton";
import CustomSpinner from "../components/CustomSpinner";
import LightScreen from "../components/LightScreen";
import DisplayError from "../components/DisplayError";
import { useCart } from "../contexts/Cart";

export default function ProductPage({ route, navigation }) {
  const product_id = route.params.id;
  navigation.setOptions({ title: route.params.title || "Product" });
  const { err, loading, result } = useFetchProduct({ product_id });

  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const increaseQuantity = () => {
    if (quantity < 99) setQuantity(quantity + 1);
  };

  if (loading) return <CustomSpinner />;
  if (err) return <DisplayError errorText={err} />;
  return (
    <LightScreen>
      <ScrollView>
        <ProductDetails product={result} />

        <View style={styles.quantity}>
          <CustomButton mode={"text"} onPress={decreaseQuantity} color={colors.PRIMARY_RED}>
            -
          </CustomButton>
          <CustomText fontSize={20}>{quantity}</CustomText>
          <CustomButton mode={"text"} onPress={increaseQuantity} color={colors.PRIMARY_RED}>
            +
          </CustomButton>
        </View>

        <View style={{ flex: 1 }}>
          <CustomButton
            onPress={() => {
              addToCart({ product_id }, quantity);
            }}
            mode="text"
          >
            Add To Cart
          </CustomButton>
        </View>
      </ScrollView>
    </LightScreen>
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
