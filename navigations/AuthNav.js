import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import  {createStackNavigator} from '@react-navigation/stack'

import authnav from '../defaults/authnav.json'
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen'
import RequestPinScreen from '../screens/RequestPinScreen'
import ResetPasswordScreen from '../screens/ResetPasswordScreen'

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
                <Stack.Screen name={authnav.requestpin} component = {RequestPinScreen}
                options={{
                    headerShown: false}}
                /> 
                <Stack.Screen name={authnav.resetpassword} component = {ResetPasswordScreen}
                options={{
                    headerShown: false}}
                />  
            </Stack.Navigator>
        </NavigationContainer>
    )
}
