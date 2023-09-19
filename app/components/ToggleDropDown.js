import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

const Dropdown = ({
  items = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
  ],
  placeholder = "Place",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };

  const selectItem = (item) => {
    setSelectedItem(item);
    setIsVisible(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleDropdown}>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "gray",
            paddingVertical: 10,
            minWidth: 140,
            marginHorizontal: 20,
          }}
        >
          <Text>{selectedItem || placeholder}</Text>
        </View>
      </TouchableOpacity>

      {isVisible && (
        <ScrollView style={{ maxHeight: 180, backgroundColor: "white" }}>
          {items.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => selectItem(item)}>
              <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
                <Text>{item}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Dropdown;
