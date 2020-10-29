import React, { useState } from "react";
import { View } from "react-native";
import { Button, Menu, Divider, Provider } from "react-native-paper";

import useFetchCities from "../hooks/useFetchCities";
import CustomSpinner from "../components/CustomSpinner";
import DisplayError from "../components/DisplayError";

export default function CitySelect({ city, setCity }) {
  const [visible, setVisible] = useState(true);
  const [cityName, setCityName] = useState("");
  
    const openMenu = () => setVisible(true);
  
    const closeMenu = () => setVisible(false);

  const { loading, result = [], err } = useFetchCities();
  if (loading) return <CustomSpinner />;
  if (err) return <DisplayError errorText={err} />;

  return (
    <Provider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: "row",
          justifyContent: "center",
          elevation: 3,
          zIndex: 3,
        }}
      >
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Button onPress={openMenu}>
              Select City
            </Button>
          }
        >
          {result.map((city) => (
            <Menu.Item
            key={city.city_id}
              onPress={() => {
                setCityName(city.city_name);
                setCity(city.city_id);
                closeMenu();
              }}
              
              title={city.city_name}
            />
          ))}
        </Menu>
      </View>
    </Provider>
  );
}
