import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../constants/theme";

const Quiz = ({ question, options, onOptionSelect, selectedOption }) => {
  const handleOptionSelect = (optionIndex) => {
    onOptionSelect(optionIndex);
  };

  return (
    <View>
      <Text>{question}</Text>
      <View style={{ flexDirection: "row" }}>
        {options.map((option, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
              marginRight: 30,
              marginVertical: 18,
              alignSelf: "center",
            }}
          >
            <Checkbox
              value={selectedOption === index}
              onValueChange={() => handleOptionSelect(index)}
              style={{ marginRight: 5, borderRadius: "50%" }}
              color={selectedOption === index ? COLORS.primary : COLORS.form}
            />
            <Text adjustsFontSizeToFit numberOfLines={1} style={styles.text}>
              {option}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  text: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    color: COLORS.text,
  },
});
