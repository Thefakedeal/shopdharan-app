import React, { useState } from "react";
import { View } from "react-native";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { validateEmail, validatePassword } from "../validations";
import CustomSpinner from "../components/CustomSpinner";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import DisplayError from "../components/DisplayError";
import baseURL from "../defaults/baseurl";
import authnav from "../defaults/authnav.json";
import CustomText from "../components/CustomText";

async function resetPassword(data) {
  const response = await fetch(`${baseURL}/api/user/resetpassword`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw await response.text();
  }
  return response.ok;
}

export default function LoginForm() {
  const navigation = useNavigation();
  const [err, setErr] = useState("");
  return (
    <Formik
      initialValues={{
        email_id: "",
        new_password: "",
        renew_password: "",
        pin: "",
      }}
      validate={(data) => {
        const errors = {};
        if (!validateEmail(data.email_id)) errors.email_id = "Invalid Email";
        if (!validatePassword(data.new_password))
          errors.new_password = "Password Must Be Atleast 6 characters";
        if (data.new_password !== data.renew_password)
          errors.renew_password = "Passwords Donot Match";
        return errors;
      }}
      onSubmit={async (data, { setSubmitting }) => {
        try {
          setSubmitting(true);
          const success = await resetPassword(data);
          if (success) navigation.navigate(authnav.login);
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
            label={"Email"}
            value={values.email_id}
            secureTextEntry={true}
            error={errors.email_id ? true : false}
            errorText={errors.email_id}
            onBlur={handleBlur("email_id")}
            onChangeText={handleChange("email_id")}
          />
          <CustomInput
            label={"Password"}
            value={values.new_password}
            secureTextEntry={true}
            error={errors.new_password ? true : false}
            errorText={errors.new_password}
            onChangeText={handleChange("new_password")}
            onBlur={handleBlur("new_password")}
          />
          <CustomInput
            label={"Retype Password"}
            value={values.renew_password}
            secureTextEntry={true}
            error={errors.renew_password ? true : false}
            errorText={errors.renew_password}
            onChangeText={handleChange("renew_password")}
            onBlur={handleBlur("renew_password")}
          />
          <CustomInput
            label={"Pin"}
            value={values.pin}
            secureTextEntry={true}
            error={errors.pin ? true : false}
            errorText={errors.pin}
            onChangeText={handleChange("pin")}
            onBlur={handleBlur("pin")}
          />
          <CustomButton onPress={handleSubmit}>Reset Password</CustomButton>
          <CustomText
            onPress={() => {
              navigation.navigate(authnav.requestpin);
            }}
          >
            Didn't Receive Pin?
          </CustomText>
          <CustomText
            onPress={() => {
              navigation.navigate(authnav.login);
            }}
          >
            Back To Login
          </CustomText>
        </View>
      )}
    </Formik>
  );
}
