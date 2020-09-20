import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import  {createStackNavigator} from '@react-navigation/stack'

import authnav from '../defaults/authnav.json'
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen'

const Stack = createStackNavigator();

export default function AuthNav() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={authnav.login}>
                <Stack.Screen name={authnav.login} component={LoginScreen}
                options={{
                    headerShown: false}}
                />
                <Stack.Screen name={authnav.signup} component = {SignupScreen}
                options={{
                    headerShown: false}}
                /> 
            </Stack.Navigator>
        </NavigationContainer>
    )
}
