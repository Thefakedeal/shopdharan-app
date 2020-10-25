import React from "react";
import { View, Image, Dimensions } from "react-native";

import baseURL from "../defaults/baseurl";
import CustomText from "../components/CustomText";

import colors from "../defaults/colors.json";


export default function ProductDetails({product}) {
    return (
      <View>
        <Image
          source={{ uri: `${baseURL}/images/${product.image_id}` }}
          style={{
            width: Dimensions.get("screen").width,
            height: (Dimensions.get("screen").width / 3) * 2,
          }}
        />
        <CustomText color={colors.PRIMARY_DARK} fontSize={20}>
          {product.price}
        </CustomText>
        <CustomText color={colors.PRIMARY_DARK} fontSize={15}>
          {product.product_description}
        </CustomText>
      </View>
    );
  }
