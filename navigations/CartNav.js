import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "../defaults/colors.json";
import cartnav from '../defaults/cartnav.json'
import CartPage from '../screens/CartPage'
import CartProductPage from '../screens/CartProductPage'

const Stack = createStackNavigator();

export default function RootNav() {
  return (
    <Stack.Navigator initialRouteName={cartnav.cart}>
      <Stack.Screen
        name={cartnav.cart}
        component={CartPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={cartnav.product}
        component={CartProductPage}
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
