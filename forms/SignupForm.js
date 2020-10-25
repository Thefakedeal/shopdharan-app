import React, { useState } from "react";
import { View } from "react-native";
import { Formik } from "formik";

import { useRefreshToken, useAccessToken } from "../contexts/LoginInfo";
import { validateEmail, validatePassword } from "../validations";
import CustomSpinner from "../components/CustomSpinner";
import CustomInput from "../components/CustomInput";
import DisplayError from "../components/DisplayError";
import CustomButton from "../components/CustomButton";
import baseURL from "../defaults/baseurl";

async function fetchTokens(data) {
  const response = await fetch(`${baseURL}/api/user/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw await response.text();
  }
  return await response.json();
}

export default function SignupForm() {
  const { setRefreshToken } = useRefreshToken();
  const { setAccessToken } = useAccessToken();
  const [err, setErr] = useState("");
  return (
    <Formik
      initialValues={{
        user_name: "",
        email_id: "",
        password: "",
        repassword: "",
        mobile_number: "",
      }}
      validate={(data) => {
        const errors = {};
        if (!validateEmail(data.email_id)) errors.email_id = "Invalid Email";
        if (!validatePassword(data.password))
          errors.password = "Password Too Short";
        if (data.password.length === 0)
          errors.password = "Password Cannot Be Empty";
        if (data.password !== data.repassword)
          errors.repassword = "Passwords Donot Match";
        if (data.mobile_number.length !== 10)
          errors.mobile_number = "Mobile Number Must Be 10 digits long";
        if (!/^\d+$/.test(data.mobile_number))
          errors.mobile_number = "Invalid Mobile number";
        if (data.mobile_number.length === 0)
          errors.mobile_number = "Mobile Number is Required";
        if (data.user_name.length === 0) errors.user_name = "Name is Required";
        return errors;
      }}
      onSubmit={async (data, { setSubmitting }) => {
        try {
          setErr("");
          setSubmitting(true);
          const { accessToken, refreshToken } = fetchTokens(data);
          setAccessToken(accessToken);
          setRefreshToken(refreshToken);
        } catch (err) {
          setErr(err);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({
        values,
        handleSubmit,
        handleBlur,
        handleChange,
        isSubmitting,
        errors,
      }) => (
        <View style={{ width: "100%", alignItems: "center" }}>
          {isSubmitting && <CustomSpinner />}
          {Boolean(err) && <DisplayError errorText={err} />}
          <CustomInput
            label={"Name"}
            value={values.user_name}
            onChangeText={handleChange("user_name")}
            error={errors.user_name ? true : false}
            errorText={errors.user_name}
            onBlur={handleBlur("user_name")}
          />
          <CustomInput
            label={"Email"}
            value={values.email_id}
            error={errors.email_id ? true : false}
            errorText={errors.email_id}
            onBlur={handleBlur("email_id")}
            onChangeText={handleChange("email_id")}
          />
          <CustomInput
            label={"Password"}
            value={values.password}
            secureTextEntry={true}
            error={errors.password ? true : false}
            errorText={errors.password}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
          />
          <CustomInput
            label={"Retype Password"}
            value={values.repassword}
            secureTextEntry={true}
            error={errors.repassword ? true : false}
            errorText={errors.repassword}
            onChangeText={handleChange("repassword")}
            onBlur={handleBlur("repassword")}
          />
          <CustomInput
            label={"Mobile No."}
            value={values.mobile_number}
            error={errors.mobile_number ? true : false}
            errorText={errors.mobile_number}
            onChangeText={handleChange("mobile_number")}
            onBlur={handleBlur("mobile_number")}
          />
          <CustomButton onPress={handleSubmit}>Sign Up</CustomButton>
        </View>
      )}
    </Formik>
  );
}
