import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../constants/theme";

const HomeBtnTwo = ({
  newTitle = "26 março",
  year = "2023",
  onPress,
  rightText = "Troca de óleo",
  title,
  icon = require("../../assets/icons/gaso.png"),
}) => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <View style={styles.leftContainer}>
        <Text>{newTitle}</Text>
        <Text>{year}</Text>
      </View>
      <View style={styles.middleContainer} />
      <View style={styles.rightContainer}>
        <Image source={icon} resizeMode="contain" style={styles.icon} />
        <Text>{rightText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeBtnTwo;

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
  },
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 202,
    height: 125,
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: 12,
    borderRadius: 12,
    marginRight: 12,
  },
  middleContainer: {
    height: 76,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  rightContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
