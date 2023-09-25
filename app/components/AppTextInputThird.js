import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

import { COLORS } from "../constants/theme";

const AppTextInputThird = ({
  placeholder = "",
  size = 24,
  onPressIcon,
  onChange,
  label = "Label",
  value,
  isPassword = false,
  showPassword,
  height,
  inputStyle,
  placeholderTextColor = "#969696",
  ...otherProps
}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onChangeText={onChange}
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        autoCapitalize="none"
        autoComplete="off"
        {...otherProps}
      />
    </View>
  );
};

export default AppTextInputThird;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    paddingVertical: 0, // Remove paddingVertical to ensure text is visible
    flex: 1,
  },
  label: {
    color: COLORS.text,
  },
  mainContainer: {
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 7,
    marginBottom: 12,
    borderColor: COLORS.form,
    borderBottomWidth: 0.5,
    height: "auto", // Let the height adjust automatically based on content
  },
});
