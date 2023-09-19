import React from "react";
import AppButton from "../AppButton";

import { useFormikContext } from "formik";

const SubmitButton = ({ title, color, textColor, ...otherProps }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      title={title}
      onPress={handleSubmit}
      color={color}
      textColor={textColor}
      {...otherProps}
    />
  );
};

export default SubmitButton;
