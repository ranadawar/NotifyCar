import { StyleSheet, Text, View } from "react-native";
import React from "react";

import AppTextInput from "../AppTextInput";
import { COLORS } from "../../constants/theme";
import ErrorMessage from "../ErrorMessage";

import { useFormikContext } from "formik";

function AppFormField({ name, customState, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(value)=>{
            // handleChange(name) 
            // console.log(name, value)
            handleChange(name)(value)
            if(customState){
              customState(value)
            }
          }}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
