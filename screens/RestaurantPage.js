import React, { useState, useEffect } from "react";
import { View, Image, Dimensions, ScrollView } from "react-native";

import OrderCard from '../components/OrderCard'
import CustomText from "../components/CustomText";
import CustomSpinner from "../components/CustomSpinner";
import colors from "../defaults/colors.json";
import LightScreen from "../components/LightScreen";

export default function RestaurantPage({ route, navigation }) {
  const restaurant_id = route.params.id;
  navigation.setOptions({ title: route.params.title || "Restaurant" });

  const [loading, setLoading] = useState(true);
  const [restaurant, setRestaurant] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getRestaurants = fetch(
      `http://192.168.0.104:5000/api/restaurant?restaurant_id=${restaurant_id}`
    );
    const getProducts = fetch(
      `http://192.168.0.104:5000/api/restaurant/products?restaurant_id=${restaurant_id}`
    );

    Promise.all([getRestaurants, getProducts])
      .then(([res, prod]) => {
        return Promise.all([res.json(), prod.json()]);
      })
      .then(([restaurantResp, productsResp]) => {
        setRestaurant({ ...restaurantResp });
        setProducts(productsResp);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  function RestaurantDetails() {
    if (loading) return <CustomSpinner />;
    return (
      <View>
        <Image
          source={{ uri: restaurant.image }}
          style={{
            width: Dimensions.get("screen").width,
            height: (Dimensions.get("screen").width / 3) * 2,
          }}
        />
        <CustomText color={colors.PRIMARY_DARK} fontSize={20}>
          {restaurant.description}
        </CustomText>
      </View>
    );
  }

  function ShowProducts(){
    return products.map(product=>(
      <OrderCard key={product.product_id}
      title={product.product_name}
      price={product.product_price}
      imageURI={product.image}
      />
    ))
  }

  return (
    <LightScreen>
      <ScrollView>
        <RestaurantDetails />
        <ShowProducts />
      </ScrollView>
    </LightScreen>
  );
}
