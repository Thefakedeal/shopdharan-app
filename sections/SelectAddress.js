import React from "react";
import { View, Picker} from "react-native";
import colors from "../defaults/colors.json";
import CustomText from "../components/CustomText";
import CustomButton from '../components/CustomButton'

import CustomSpinner from "../components/CustomSpinner";
import DisplayError from "../components/DisplayError";


import useFetchAddress from '../hooks/useFetchAddress'

export default function SelectAddress({address, setAddress}) {
    const {err, loading, result=[], reloadResources} = useFetchAddress()

    if(loading) return <CustomSpinner />
    if(err) return <DisplayError errorText="Something Went Wrong"/>
    
    if(!address && result.length>0) setAddress(result[0].address_id)
    return (
        <View
          style={{
            width: "100%",
            justifyContent: "center",
          }}

        >
          <CustomText>
            Select Address
          </CustomText>
         
          <Picker
            selectedValue={address}
            onValueChange={(value, index)=>{
              setAddress(value)
            }}
            style={
              {
                color: colors.PRIMARY_RED
              }
            }
          >
          {
            result.map(address=>(
              <Picker.Item
              key={address.address_id}
              label={`${address.street_name}, ${address.city_name}`}
              value={address.address_id}
              color={colors.PRIMARY_RED}
              />
            ))
          }
           
          </Picker>
          <CustomButton
            mode="text"
            onPress={reloadResources}
          >
            Reload
          </CustomButton>
        </View>
      );
}
