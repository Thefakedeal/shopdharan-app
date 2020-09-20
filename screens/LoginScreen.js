import React, { useState } from 'react'
import {TextInput} from 'react-native-paper'
import { StyleSheet} from 'react-native'

import LightScreen from '../components/LightScreen'
import Logo from '../components/Logo'
import fonts from '../defaults/fontname.json'
import colors from '../defaults/colors.json'

export default function LoginScreen() {
    const [credentials, setCredentials] = useState({email:'', password:''});

    const setEmail = (value) =>{
        setCredentials((credentials)=>{
            return {email: value, password: credentials.password}
        })
    }

    const setPassword = (value)=>{
        setCredentials((credentials)=>{
            return {email: credentials.email, password: value}
        })
    }
    return (
        <LightScreen style={styles.container}>
            <Logo />
            <TextInput label="Email" 
            value={credentials.email}
            style={styles.textBox}
            mode="outlined" 
            onChangeText={setEmail}
            />
            <TextInput label="Password" 
            value={credentials.password}
            style={styles.textBox}
            mode="outlined" 
            secureTextEntry={true}
            onChangeText={setPassword}
        underlineColor={'red'}
            />
        </LightScreen>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            alignItems: "center"
        },
        textBox:{
            margin: 10,
    
        }
    }
)


