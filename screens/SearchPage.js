import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";

import LightScreen from "../components/LightScreen";
import CustomSearch from "../components/CustomSearch";
import CustomButton from "../components/CustomButton";
import CustomSpinner from "../components/CustomSpinner";
import OrderCard from "../components/OrderCard";

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  function ShowProducts() {
    if (loading) return <CustomSpinner />;
    return products.map((product) => (
      <OrderCard
        key={product.product_id}
        title={product.product_name}
        price={product.product_price}
        imageURI={product.image}
      />
    ));
  }

  function searchProduct() {
    if(!search) return;
    setLoading(true);
    fetch(`http://192.168.0.104:5000/api/search?product_name=${search}`)
      .then((resp) => resp.json())
      .then((responseProduct) => {
        setProducts(responseProduct);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <LightScreen style={styles.container}>
      <ScrollView style={{width: "95%"}}>
        <CustomSearch
          label={"Search"}
          value={search}
          onChangeText={(value) => {
            setSearch(value);
          }}
          onIconPress= {searchProduct}
        />
        <CustomButton onPress={searchProduct} style={{margin: 5}} >Search</CustomButton>
        <ShowProducts />
      </ScrollView>
    </LightScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
