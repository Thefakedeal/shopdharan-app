import React from 'react'
import {Image, StyleSheet, Text} from 'react-native'
import RedScreen from '../components/RedScreen'

export default function SplashScreen() {
    return (
        <RedScreen>
            <Image  style= {styles.image} source= {require('../assets/shopdharan-white.png')} />
            <Text style={styles.text}>Please Wait</Text>
        </RedScreen>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "80%",
        resizeMode: "contain",
    },
    text:{
        color: '#FFF',
        fontStyle: "italic",
        fontWeight: "bold"
    }
})
