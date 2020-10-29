import React, { useState } from "react";
import { View } from "react-native";
import {useNavigation} from '@react-navigation/native'
import DisplayErr from "../components/DisplayError";
import CustomSpinner from "../components/CustomSpinner";
import { Formik } from "formik";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import SelectCity from "../components/SelectCity";
import baseURL from "../defaults/baseurl";
import fetchWithCredentials from "../helperFunctions/fetchWithCredentials";

async function addAddress(data) {
  const url = `${baseURL}/api/user/address/add`;
  const method = "POST";
  const response = await fetchWithCredentials(method, url, data);
  if (!response.ok) throw (await response.text()) || "Something Went Wrong";
  return response.ok;
}

export default function AddressForm() {
  const [err, setErr] = useState(err);
  const navigation = useNavigation()
  return (
    <Formik
      initialValues={{
        city_id: "",
        street_name: "",
        details: "",
      }}
      validate={(data) => {
        const errors = {};
        if (!data.city_id) errors.city_id = "Select A City";
        if (!data.street_name)
          errors.street_name = "Streen Name Must Be Provided";
        return errors;
      }}
      onSubmit={async (data, { setSubmitting }) => {
        try {
          setSubmitting(true);
          const success = await addAddress(data);
          if(success){
            navigation.goBack()
          } 
        } catch (err) {
          setErr(err);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({
        values,
        isSubmitting,
        handleSubmit,
        handleChange,
        handleBlur,
        errors,
      }) => (
        <View style={{ width: "100%", alignItems: "center" }}>
          {isSubmitting && <CustomSpinner />}
          {err ? <DisplayErr errorText={err} /> : null}
          <SelectCity
            city={values.city_id}
            setCity={handleChange("city_id")}
            error={errors.city_id ? true : false}
            errorText={errors.city_id}
          />
          <CustomInput
            label={"Street Name"}
            value={values.street_name}
            onChangeText={handleChange("street_name")}
            onBlur={handleBlur("street_name")}
            error={errors.street_name ? true : false}
            errorText={errors.street_name}
          />
          <CustomInput
            label={"Some Additional Details"}
            value={values.details}
            onBlur={handleBlur("details")}
            onChangeText={handleChange("details")}
            multiline={true}
            numberOfLines={5}
          />
          <CustomButton onPress={handleSubmit}>Add</CustomButton>
        </View>
      )}
    </Formik>
  );
}
