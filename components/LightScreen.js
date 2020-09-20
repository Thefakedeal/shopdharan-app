
import React,{useEffect} from 'react'
import {View, StatusBar, StyleSheet} from 'react-native'
import colors from '../defaults/colors.json'

export default function LightScreen({children, style}) {
    
    useEffect(()=>{
      StatusBar.setBackgroundColor(colors.PRIMARY_WHITE);
      StatusBar.setBarStyle('dark-content')
    },[])

    return (
        <View style= {[styles.container, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:  colors.PRIMARY_WHITE,
        width: "100%"
    }
})