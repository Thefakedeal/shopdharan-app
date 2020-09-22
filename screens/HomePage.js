import React from 'react'
import {ScrollView} from "react-native"
import LightScreen from '../components/LightScreen'
import Restaurants from '../components/Restaurants'
import OrderCard from '../components/OrderCard'

export default function HomePage() {
    return (
        <LightScreen >
            <ScrollView>
            <Restaurants />
            <OrderCard title={"Brinjal"} price={50}  unit={"Joules"} imageURI={"https://picsum.photos/700"}/>
            </ScrollView>
        </LightScreen>        
    )
}
