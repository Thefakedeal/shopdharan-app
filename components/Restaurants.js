import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import CustomText from "./CustomText";
import SupplierCard from "./SupplierCard";
import CustomSpinner from './CustomSpinner';

export default function Restaurants() {
  // const restaurants = [
  //   {
  //     title: "Mango House",
  //     description: "Tomfoolery",
  //     imageURI: "https://picsum.photos/700",
  //   },
  //   {
  //     title: "Star Light",
  //     description: "Lorem Imspn| Big Brain | Starts",
  //     imageURI: "https://picsum.photos/700",
  //   },
  //   {
  //     title: "Bad Baddy",
  //     description: "Cool | Based | Mikel",
  //     imageURI: "https://picsum.photos/700",
  //   },
  // ];

  const [loading, setLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://192.168.0.104:5000/api/restaurants")
      .then((response) => response.json())
      .then((restaurantList) => {
        setRestaurants(restaurantList);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  function ShowRestaurants() {
    if (loading) return <CustomSpinner />;
    return (
      <ScrollView horizontal={true}>
        {restaurants.map((restaurant, index) => (
          <SupplierCard
            key={restaurant.restaurant_id}
            title={restaurant.restaurant_name}
            description={restaurant.description}
            imageURI={restaurant.image}
            id={restaurant.restaurant_id}
          />
        ))}
      </ScrollView>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <CustomText>Restaurants</CustomText>
      </View>
      <ShowRestaurants />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  textContainer: {
    margin: 5,
    marginLeft: 10,
  },
});
