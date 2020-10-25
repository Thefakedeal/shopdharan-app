import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import CustomSpinner from '../components/CustomSpinner';
import DisplayError from '../components/DisplayError'
import LightScreen from "../components/LightScreen";
import useFetchCatagories from '../hooks/useFetchCatagories'
import DisplaySupplierByCatagory from "../components/DisplaySupplierByCatagory";

export default function HomePage({navigation}) {
  const {loading, err, result=[]} = useFetchCatagories()
  if(loading) return <CustomSpinner />
  if(err) return <DisplayError  errorText={err}/>
  return (
    <LightScreen>
      <ScrollView>
          {
            result.map(catagory=>(
              <DisplaySupplierByCatagory 
                key={catagory.catagory_id}
                id={catagory.catagory_id}
                title={catagory.catagory_name}
              />
            ))
          }
      </ScrollView>
    </LightScreen>
  );
}
