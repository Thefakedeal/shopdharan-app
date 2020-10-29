import React from "react";
import { View, Picker} from "react-native";
import colors from "../defaults/colors.json";
import CustomText from "../components/CustomText";
import { HelperText } from "react-native-paper";
import CustomSpinner from "../components/CustomSpinner";
import DisplayError from "../components/DisplayError";
import useFetchCities from "../hooks/useFetchCities";

export default function SelectCity({ city, setCity, error, errorText }) {

  const { loading, result = [], err } = useFetchCities();
  if (loading) return <CustomSpinner />;
  if (err) return <DisplayError errorText={"Failed To Display Cities Try Again Later."} />;

  if(!city) setCity(result[0].city_id)
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
      }}
    >
      <HelperText type="error" visible={error}>
        {errorText}
      </HelperText>
      <CustomText>
        Select City
      </CustomText>

      <Picker
            selectedValue={city}
            onValueChange={(value, index)=>{
              setCity(value)
            }}
            style={
              {
                color: colors.PRIMARY_RED
              }
            }
          >
            
            {
              result.map(city=>(
                <Picker.Item 
                key={city.city_id}
                label={city.city_name}
                value={city.city_id}
                color={colors.PRIMARY_RED}
                />
            ))
            }

          </Picker>

    </View>
  );
}
