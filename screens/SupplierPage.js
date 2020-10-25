import React from "react";
import { ScrollView } from "react-native";


import CustomSpinner from "../components/CustomSpinner";
import SupplierDetails from '../sections/SupplierDetails'
import LightScreen from "../components/LightScreen";
import useFetchSupplier from "../hooks/useFetchSupplier";
import useFetchProducts from '../hooks/useFetchProducts'
import DisplayError from "../components/DisplayError";
import DisplayProducts from '../sections/DisplayProducts'

export default function SupplierPage({ route, navigation }) {
  const supplier_id = route.params.id;
  navigation.setOptions({ title: route.params.title || "Supplier" });
  const { err, loading, result } = useFetchSupplier({ supplier_id });
  const {err: perr, loading: ploading,result: products=[]} = useFetchProducts({supplier_id, available: true})

  if (loading || ploading) return <CustomSpinner />;
  if (err || perr) return <DisplayError errorText={err} />;

  return (
    <LightScreen>
      <ScrollView>
        <SupplierDetails supplier={result}/>
        <DisplayProducts products={products}/>
      </ScrollView>
    </LightScreen>
  );
}
