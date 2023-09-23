import React from "react";
import AppButton from "../AppButton";

import { useFormikContext } from "formik";
import FormBtn from "../FormBtn";

const SubmitSmallButton = ({ title, color, textColor, ...otherProps }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <FormBtn
      title={title}
      onPress={handleSubmit}
      color={color}
      textColor={textColor}
      {...otherProps}
    />
  );
};

export default SubmitSmallButton;
