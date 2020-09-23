import React from 'react'
import  {createStackNavigator} from '@react-navigation/stack'

import colors from '../defaults/colors.json'
import homenav from '../defaults/homenav.json'
import HomePage from '../screens/HomePage'
import RestaurantPage from '../screens/RestaurantPage'

const Stack = createStackNavigator();

export default function RootNav() {
    return (
            <Stack.Navigator initialRouteName={homenav.main}>
                <Stack.Screen name={homenav.main} component={HomePage}
                options={{
                    headerShown: false}}
                />
                <Stack.Screen name={homenav.restaurant} component = {RestaurantPage}
                options={{
                    title: "Restaurant",
                    headerTintColor: colors.PRIMARY_WHITE,
                    headerStyle:{
                        backgroundColor: colors.PRIMARY_RED
                    }
                }
                }
                /> 
            </Stack.Navigator>
    )
}
