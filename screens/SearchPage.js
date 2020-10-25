import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { ScrollView, FlatList } from "react-native";

import LightScreen from "../components/LightScreen";
import CustomSearch from "../components/CustomSearch";
import CustomButton from "../components/CustomButton";
import CustomSpinner from "../components/CustomSpinner";
import ProductCard from "../components/ProductCard";
import useProductSearch from "../hooks/useProductSearch";
import baseURL from "../defaults/baseurl";


export default function SearchPage() {
  const [product_name, setProductName]= useState("")
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);

  useEffect(()=>{
    if(search === '') setProductName(search)
  },[search])

  useEffect(()=>{
    setPage(0)
  },[product_name])

  const { err, hasMore, loading, products } = useProductSearch({
    product_name: product_name,
    page_no: page,
    available: true,
  });

  return (
    <LightScreen style={styles.container}>
      <CustomSearch
        label={"Search"}
        value={search}
        onChangeText={(value) => {
          setSearch(value);
        }}
        onIconPress={()=>{
          setProductName(search)
        }}
      />
      <CustomButton style={{ margin: 5 }} 
        onPress={()=>{
          setProductName(search)
        }}
      >Search</CustomButton>
      <FlatList
        style={{ width: "100%" }}
        data={products}
        renderItem={({item}) => (
          <ProductCard
            id={item.product_id}
            key={item.product_id}
            title={item.product_name}
            price={item.price}
            imageURI={`${baseURL}/images/${item.image_id}`}
          />
        )}
        keyExtractor={(product) => product.product_id}
        onEndReached={()=>{
          setPage(oldPage=> hasMore?oldPage+1:oldPage)
        }}
      />
      {loading && <CustomSpinner />}
    </LightScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
