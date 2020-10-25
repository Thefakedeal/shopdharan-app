import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "../defaults/colors.json";
import homenav from "../defaults/homenav.json";
import HomePage from "../screens/HomePage";
import SupplierPage from "../screens/SupplierPage";
import ProductPage from "../screens/ProductPage";

const Stack = createStackNavigator();

export default function RootNav() {
  return (
    <Stack.Navigator initialRouteName={homenav.main}>
      <Stack.Screen
        name={homenav.main}
        component={HomePage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={homenav.restaurant}
        component={SupplierPage}
        options={{
          title: "Supplier",
          headerTintColor: colors.PRIMARY_WHITE,
          headerStyle: {
            backgroundColor: colors.PRIMARY_RED,
          },
        }}
      />

      <Stack.Screen
        name={homenav.product}
        component={ProductPage}
        options={{
          title: "Product",
          headerTintColor: colors.PRIMARY_WHITE,
          headerStyle: {
            backgroundColor: colors.PRIMARY_RED,
          },
        }}
      />
    </Stack.Navigator>
  );
}
