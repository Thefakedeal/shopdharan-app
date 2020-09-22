import React, {useState,useEffect} from "react";
import CustomText from "./CustomText";
import CustomSpinner from './CustomSpinner';
import { View, StyleSheet } from "react-native";
import OrderCard from './OrderCard'
import { ScrollView } from "react-native-gesture-handler";

export default function OurProducts({ title, id }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://192.168.0.104:5000/api/products?catagory_id=${id}`)
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        // setLoading(false);
      });
  }, []);

  function ShowProducts(){
      if(loading) return <CustomSpinner />
      return (
          products.map((product)=> (
              <OrderCard title={product.product_name}
              price={product.product_price}
              key={product.product_id}
              imageURI={product.image}
              />
          ))
      )
  }

  return (
    <View style={styles.container}>
      <CustomText> {title}</CustomText>
      <ScrollView horizontal={true}>
            <ShowProducts />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
});
