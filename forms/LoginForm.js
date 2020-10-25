import React, { useState } from "react";
import { View } from "react-native";
import { Formik } from "formik";

import { useRefreshToken, useAccessToken } from "../contexts/LoginInfo";
import CustomSpinner from "../components/CustomSpinner";
import CustomInput from "../components/CustomInput";
import CustomButton from '../components/CustomButton'
import DisplayError from "../components/DisplayError";
import baseURL from "../defaults/baseurl";

async function fetchTokens(data) {
  const response = await fetch(`${baseURL}/api/user/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw await response.text() || "Something Went wrong";
  }
  return await response.json();
}

export default function LoginForm() {
  const { setRefreshToken } = useRefreshToken();
  const { setAccessToken } = useAccessToken();
  const [err, setErr] = useState("");
  return (
    <Formik
      initialValues={{
        email_id: "",
        password: "",
      }}
      validate={
        (data)=>{
          const errors = {}
          if(data.email_id.length === 0) errors.email_id = "Email Cannot Be Empty"
          if(data.password.length === 0) errors.password = "Password Cannot Be Empty"
          return errors;
        }
      }
      onSubmit={async (data, { setSubmitting }) => {
        try {
          setErr("");
          setSubmitting(true);
          const { accessToken, refreshToken } = await fetchTokens(data);
          setAccessToken(accessToken);
          setRefreshToken(refreshToken);
        } catch (err) {
          setErr(err);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ values, handleSubmit, handleBlur, handleChange, isSubmitting,errors }) => (
        <View style={{width:"100%", alignItems: "center"}}>
          {isSubmitting && <CustomSpinner />}
          {Boolean(err) && <DisplayError errorText={err} />}
          <CustomInput
            label={"Email"}
            value={values.email_id}
            error={errors.email_id?true:false}
            errorText={errors.email_id}
            onBlur={handleBlur("email_id")}
            onChangeText={handleChange("email_id")}
          />
          <CustomInput
            label={"Password"}
            value={values.password}
            secureTextEntry={true}
            error={errors.password?true:false}
            errorText={errors.password}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
          />
          <CustomButton onPress={handleSubmit}>Login</CustomButton>
        </View>
      )}
    </Formik>
  );
}
