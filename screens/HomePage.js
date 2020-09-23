import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import CustomSpinner from '../components/CustomSpinner';
import LightScreen from "../components/LightScreen";
import Restaurants from "../components/Restaurants";
import OurProducts from "../components/OurProducts";

export default function HomePage({navigation}) {
  const [catagories, setCatagories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://192.168.0.104:5000/api/catagories")
      .then((response) => response.json())
      .then((catagories) => {
        setCatagories(catagories);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  },[]);


  function ShowCatagories(){
    if(loading) return <CustomSpinner />
    return (
        catagories.map((catagory) => (
          <OurProducts
            title={catagory.catagory_name}
            key={catagory.catagory_id}
            id= {catagory.catagory_id}
          />)
        )
    )}
  return (
    <LightScreen>
      <ScrollView>
        <Restaurants />
        <ShowCatagories/>   
      </ScrollView>
    </LightScreen>
  );
}
