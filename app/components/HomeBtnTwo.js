import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants/theme";

const HomeBtnTwo = ({
  newTitle = "26 março",
  year = "2023",
  onPress,
  rightText = "Troca de óleo",
  title,
  icon = require("../../assets/icons/gaso.png"),
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
      <View style={styles.leftContainer}>
        <Text style={styles.leftTitle}>{newTitle}</Text>
        <Text style={styles.leftSubtitle}>{year}</Text>
      </View>
      <View style={styles.middleContainer} />
      <View style={styles.rightContainer}>
        <Image source={icon} resizeMode="contain" style={styles.icon} />
        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.rightText}>
          {rightText}
        </Text>
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
  leftTitle: {
    fontFamily: FONTS.medium,
    color: COLORS.secondary,
    marginBottom: 2,
    fontSize: 14,
  },
  leftSubtitle: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    color: COLORS.secondary,
    textAlign: "center",
  },
  rightText: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: COLORS.secondary,
    marginTop: 5,
  },
});
