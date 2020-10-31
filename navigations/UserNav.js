import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "../defaults/colors.json";
import usernav from "../defaults/usernav.json";
import UserScreen from "../screens/UserScreen";
import AddAddressPage from "../screens/AddAddressPage";
import AddressPage from "../screens/AddressPage";
import OrdersScreen from "../screens/OrdersScreen";
import OrderScreen from "../screens/OrderScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";

const Stack = createStackNavigator();

export default function RootNav() {
  return (
    <Stack.Navigator initialRouteName={usernav.main}>
      <Stack.Screen
        name={usernav.main}
        component={UserScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={usernav.addresses}
        component={AddressPage}
        options={{
          title: "All Address",
          headerTintColor: colors.PRIMARY_WHITE,
          headerStyle: {
            backgroundColor: colors.PRIMARY_RED,
          },
        }}
      />

      <Stack.Screen
        name={usernav.addaddress}
        component={AddAddressPage}
        options={{
          title: "Add Address",
          headerTintColor: colors.PRIMARY_WHITE,
          headerStyle: {
            backgroundColor: colors.PRIMARY_RED,
          },
        }}
      />

      <Stack.Screen
        name={usernav.orders}
        component={OrdersScreen}
        options={{
          title: "Orders",
          headerTintColor: colors.PRIMARY_WHITE,
          headerStyle: {
            backgroundColor: colors.PRIMARY_RED,
          },
        }}
      />

      <Stack.Screen
        name={usernav.changepassword}
        component={ChangePasswordScreen}
        options={{
          title: "Change Password",
          headerTintColor: colors.PRIMARY_WHITE,
          headerStyle: {
            backgroundColor: colors.PRIMARY_RED,
          },
        }}
      />

      <Stack.Screen
        name={usernav.order}
        component={OrderScreen}
        options={{
          title: "Order",
          headerTintColor: colors.PRIMARY_WHITE,
          headerStyle: {
            backgroundColor: colors.PRIMARY_RED,
          },
        }}
      />
    </Stack.Navigator>
  );
}
