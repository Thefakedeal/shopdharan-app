import React  from 'react'
import { Formik } from 'formik'
import {View} from 'react-native'
import { validatePassword } from "../validations";
import CustomSpinner from "../components/CustomSpinner";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import baseURL from "../defaults/baseurl";
import fetchWithCredentials from "../helperFunctions/fetchWithCredentials";


async function changePassword(old_password, new_password) {
    const url = `${baseURL}/api/user/changepassword`
    const method = 'PUT'
    const response = await fetchWithCredentials(method, url, { old_password, new_password })
    if (!response.ok) throw await response.text() || "Failed To Update"
    return response.ok
}

export default function ChangePasswordForm({ success, fail, failText }) {
    return (
        <Formik
            initialValues={{
                oldpassword: '',
                newpassword: '',
                renewpassword: '',
            }}
            validate={
                (data) => {
                    const errors = {}
                    if (!validatePassword(data.newpassword)) errors.newpassword = "Invalid Password"
                    if (data.newpassword.length === 0) errors.newpassword = "Password Cant be Empty"
                    if (data.renewpassword !== data.newpassword) errors.newpassword = "Passwords Donot Match"
                    return errors
                }
            }
            onSubmit={async (data, { setSubmitting, resetForm }) => {
                setSubmitting(true)
                try {
                    if (await changePassword(data.oldpassword, data.newpassword)) {
                        success()
                        resetForm()
                    }
                } catch (err) {
                    fail()
                    failText(err)
                } finally {
                    setSubmitting(false)
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
                    <View style={{width:"100%", alignItems:"center"}}>
                        {isSubmitting && <CustomSpinner />}
                        <CustomInput
                            label={"Old Password"}
                            value={values.oldpassword}
                            secureTextEntry={true}
                            error={errors.oldpassword ? true : false}
                            errorText={errors.oldpassword}
                            onChangeText={handleChange("oldpassword")}
                            onBlur={handleBlur("oldpassword")}
                        />
                        <CustomInput
                            label={"New Password"}
                            value={values.newpassword}
                            secureTextEntry={true}
                            error={errors.newpassword ? true : false}
                            errorText={errors.newpassword}
                            onChangeText={handleChange("newpassword")}
                            onBlur={handleBlur("newpassword")}
                        />

                        <CustomInput
                            label={"Retype Password"}
                            value={values.renewpassword}
                            secureTextEntry={true}
                            error={errors.renewpassword ? true : false}
                            errorText={errors.renewpassword}
                            onChangeText={handleChange("renewpassword")}
                            onBlur={handleBlur("renewpassword")}
                        />
                        <CustomButton
                            onPress={handleSubmit}
                        >
                            Change Password
                        </CustomButton>
                    </View>
                )}
        </Formik>
    )
}
