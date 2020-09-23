import React from "react";
import { Card } from "react-native-paper";
import homenav from "../defaults/homenav.json"
import {useNavigation} from '@react-navigation/native';

export default function RestaurantCard({ title, description, imageURI, id}) {
  const navigation = useNavigation();

  return (
    <Card
      style={{
        paddingHorizontal: 10,
        paddingTop: 20,
        marginRight: 5,
        marginVertical:3,
      }}
      onPress= {()=>{
        navigation.navigate(homenav.restaurant,{
          id: id,
          title: title 
        })
      }}
      
    >
      <Card.Cover
        source={{ uri: imageURI }}
        resizeMethod="resize"
        resizeMode="contain"
        style={{ resizeMode: "contain", height: 200, width:300 }}
      />
      <Card.Title title={title} subtitle={description} />
    </Card>
  );
}
