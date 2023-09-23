import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants/theme";

const FormBtn = ({
  onPress,
  title = "Btn",
  style,
  textStyle,
  color = COLORS.primary,
  textColor = COLORS.white,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.mainContainer, style, { backgroundColor: color }]}
    >
      <Text style={[styles.title, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FormBtn;

const styles = StyleSheet.create({
  title: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: COLORS.white,
  },
  mainContainer: {
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 17,
    paddingVertical: 10,
    borderRadius: 12,
  },
});
