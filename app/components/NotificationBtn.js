import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants/theme";

const NotificationBtn = ({
  title = "Hello this is the notification for you",
  date = "22-12-1999",
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <Image
        resizeMode="contain"
        style={styles.leftImage}
        source={require("../../assets/icons/notif.png")}
      />
      <Text style={styles.title} numberOfLines={3}>
        {title}

        {"\n"}

        {date}
      </Text>
    </TouchableOpacity>
  );
};

export default NotificationBtn;

const styles = StyleSheet.create({
  leftImage: {
    width: 40,
    height: 40,
    marginLeft: -15,
  },
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: COLORS.secondary,
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 5,
  },
  title: {
    fontFamily: FONTS.bold,
    marginLeft: 14,
    color: COLORS.secondary,
  },
});
