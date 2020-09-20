
import React,{useEffect} from 'react'
import {View, StatusBar, StyleSheet} from 'react-native'
import colors from '../defaults/colors.json'

export default function RedScreen({children}) {
    
    useEffect(()=>{
      StatusBar.setBackgroundColor(colors.PRIMARY_RED);
      StatusBar.setBarStyle('light-content')
    },[])

    return (
        <View style= {styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:  colors.PRIMARY_RED,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    }
})