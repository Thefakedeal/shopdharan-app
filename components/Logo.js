import React from 'react'
import {Image, StyleSheet} from 'react-native'

export default function Logo() {
    return (
        <Image source={require('../assets/shopdharan.png')} style={styles.image}/>
    )
}

const styles = StyleSheet.create(
    {
        image: {
            width: "80%",
            padding: 40,
            resizeMode: "contain",
            margin: 40
        },
    }
)
