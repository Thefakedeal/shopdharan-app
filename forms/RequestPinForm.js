import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";

import {validateEmail} from '../validations'
import baseURL from '../defaults/baseurl'
import CustomText from "../components/CustomText";
import DisplayError from "../components/DisplayError";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import authnav from "../defaults/authnav.json";
import CustomSpinner from "../components/CustomSpinner";

async function requestPin(data) {
  const response = await fetch(`${baseURL}/api/user/requestpin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.ok;
}

export default function RequestPinForm() {
  const navigation = useNavigation();
  const [err, setErr] = useState("");

  return (

      <Formik
        initialValues={{ email_id: "" }}
        validate={(data)=>{
          const errors = {}
          if(!validateEmail(data.email_id)) errors.email_id = "Enter A Valid Email"
          return errors
        }}
        onSubmit={async (data, { setSubmitting }) => {
          try {
            setSubmitting(true);
            const success = await requestPin(data);
            if (success) {
              return navigation.navigate(authnav.resetpassword);
            }
            alert("Failed To Send Email Please Try Again");
          } catch (err) {
            setErr(err);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, handleSubmit, handleChange, handleBlur, values, errors }) => (
          <>
            { isSubmitting && <CustomSpinner />}
            {err?<DisplayError errorText={err}/>:null}
            <CustomInput
              label="Email"
              value={values.email_id}
              error={errors.email_id?true:false}
              errorText={errors.email_id}
              onChangeText={handleChange("email_id")}
              onBlur={handleBlur("email_id")}
            />

            <CustomButton onPress={handleSubmit}>
              Request Reset Pin From Email
            </CustomButton>

            <CustomText onPress={() => {
                navigation.navigate(authnav.resetpassword)
            }}> Already Have A Pin? </CustomText>

            <CustomText
              onPress={() => {
                navigation.navigate(authnav.login)
              }}
            >
              {" "}
              Back To Login{" "}
            </CustomText>
          </>
        )}
      </Formik>
  );
}
