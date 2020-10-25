import React from "react";
import useFetchSuppliers from "../hooks/useFetchSuppliers";
import CustomText from "./CustomText";
import DisplayError from "./DisplayError";
import CustomSpinner from "./CustomSpinner";
import baseURL from "../defaults/baseurl";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import SupplierCard from "./SupplierCard";

export default function DisplaySupplierByCatagory({ title, id, city_id }) {
  const { err, loading, result = [] } = useFetchSuppliers({
    visible: true,
    city_id: city_id,
    catagory_id: id,
  });

  if (loading) return <CustomSpinner />;
  if (err) return <DisplayError errorText={err} />;
  if (result)
    return (
      <View style={styles.container}>
        <CustomText> {title}</CustomText>
        <ScrollView horizontal={true}>
          {result.map((supplier) => (
            <SupplierCard
              key={supplier.supplier_id}
              id={supplier.supplier_id}
              title={supplier.supplier_name}
              description={supplier.supplier_description}
              imageURI={`${baseURL}/images/${supplier.image_id}`}
            />
          ))}
        </ScrollView>
      </View>
    );
  return null;
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
});
