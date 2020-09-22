import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import CustomText from "./CustomText";
import RestaurantCard from "./RestaurantCard";

export default function Restaurants() {
  const restaurants = [
    {
      title: "Mango House",
      description: "Tomfoolery",
      imageURI: "https://picsum.photos/700",
    },
    {
      title: "Star Light",
      description: "Lorem Imspn| Big Brain | Starts",
      imageURI: "https://picsum.photos/700",
    },
    {
      title: "Bad Baddy",
      description: "Cool | Based | Mikel",
      imageURI: "https://picsum.photos/700",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <CustomText>Restaurants</CustomText>
      </View>
      <ScrollView horizontal={true}>
        {restaurants.map((restaurant, index) => (
          <RestaurantCard
            key={index}
            title={restaurant.title}
            description={restaurant.description}
            imageURI={restaurant.imageURI}
          />
        ))}
      </ScrollView>
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
