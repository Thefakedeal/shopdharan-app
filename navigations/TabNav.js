import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import colors from "../defaults/colors.json";
import tabnav from "../defaults/tabnav.json";
import HomeNav from "./HomeNav";
import SearchPage from '../screens/SearchPage'
import SplashScreen from "../screens/SplashScreen";

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch(route.name){
                case tabnav.Home:
                    iconName='home'
                    break;
                case tabnav.Search:
                    iconName='search1'
                    break;
                case tabnav.Cart:
                    iconName='shoppingcart'
                    break;
                case tabnav.User:
                    iconName='user'
                    break;
                default:
                    iconName='smile-circle'
            }

            // You can return any component that you like here!
            return <AntDesign name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.PRIMARY_RED,
          inactiveTintColor: colors.PRIMARY_DARK,
        }}
      >
        <Tab.Screen name={tabnav.Home} component={HomeNav} />
        <Tab.Screen name={tabnav.Search} component={SearchPage} />
        <Tab.Screen name={tabnav.Cart} component={SplashScreen} />
        <Tab.Screen name={tabnav.User} component={SplashScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
