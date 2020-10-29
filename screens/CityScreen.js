import React, {useState} from 'react'
import { Text } from 'react-native'
import {useSettings, ACTIONS} from '../contexts/Settings'
import CustomButton from '../components/CustomButton'
import SelectCity from '../components/SelectCity'
import LightScreen from '../components/LightScreen'

export default function CityScreen() {
    const {settings, dispatch} = useSettings()
    const [city, setCity] = useState(settings.city_id)
    
    return (
        <LightScreen>
            <Text> Select Your City</Text>
            <SelectCity city={city} setCity={setCity}/>
            <CustomButton
                onPress={()=>{
                    dispatch({type: ACTIONS.SETCITY, payload: city})
                }}
                mode="text"
            > Confirm </CustomButton>
        </LightScreen>    
    )
}
