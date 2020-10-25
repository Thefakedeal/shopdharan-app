import React from 'react'
import {Image, StyleSheet} from 'react-native'
import { ActivityIndicator, Colors } from 'react-native-paper';

import RedScreen from '../components/RedScreen'
export default function SplashScreen() {
    return (
        <RedScreen>
            <Image  style= {styles.image} source= {require('../assets/shopdharan-white.png')} />
            <ActivityIndicator animating={true} color={Colors.white} />
        </RedScreen>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "80%",
        resizeMode: "contain",
    },
})
