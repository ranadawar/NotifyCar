import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants/theme";

const HomeBtnOne = ({
  image = require("../../assets/icons/car.png"),
  title,
}) => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <Image source={image} resizeMode="contain" style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default HomeBtnOne;

const styles = StyleSheet.create({
  mainContainer: {
    width: 128,
    height: 128,
    borderWidth: 1,
    borderColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginRight: 10,
  },
  image: {
    width: 45,
    height: 45,
  },
  title: {
    fontSize: 12,
    color: COLORS.secondary,
    marginTop: 10,
    fontFamily: FONTS.medium,
  },
});
