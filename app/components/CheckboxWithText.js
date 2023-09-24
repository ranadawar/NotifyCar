import Checkbox from "expo-checkbox";
import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../constants/theme";

const CheckboxWithText = ({
  label,
  checked = false,
  onChange,
  containerStyle,
  checkboxStyle,
  labelStyle,
}) => {
  const handleCheckboxChange = () => {
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <TouchableOpacity
      onPress={handleCheckboxChange}
      style={[styles.container, containerStyle]}
    >
      <Checkbox
        value={checked}
        onValueChange={handleCheckboxChange}
        style={[styles.checkbox, checkboxStyle]}
        color={checked ? COLORS.primary : COLORS.form}
      />
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkbox: {
    marginRight: 10,
    borderColor: COLORS.form,
  },
  label: {
    fontSize: 16,
    color: COLORS.form,
    fontFamily: FONTS.medium,
    marginLeft: 5,
  },
});

export default CheckboxWithText;
