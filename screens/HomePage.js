import React from "react";
import { ScrollView } from "react-native";
import CustomSpinner from '../components/CustomSpinner';
import DisplayError from '../components/DisplayError'
import LightScreen from "../components/LightScreen";
import useFetchCatagories from '../hooks/useFetchCatagories'
import DisplaySupplierByCatagory from "../components/DisplaySupplierByCatagory";
import {useSettings, ACTIONS} from '../contexts/Settings'
import CitySelectMenu from '../components/SelectCity'

export default function HomePage({navigation}) {
  const {loading, err, result=[]} = useFetchCatagories()
  const {settings, dispatch} = useSettings()
  if(loading) return <CustomSpinner />
  if(err) return <DisplayError  errorText={err}/>
  return (
    <LightScreen>
      <CitySelectMenu city={settings.city_id}
        setCity={(value)=>{
          dispatch({type: ACTIONS.SETCITY, payload: value})
        }}
      />
      <ScrollView>
          {
            result.map(catagory=>(
              <DisplaySupplierByCatagory 
                key={catagory.catagory_id}
                id={catagory.catagory_id}
                title={catagory.catagory_name}
                city_id={settings.city_id}
              />
            ))
          }
      </ScrollView>
    </LightScreen>
  );
}
