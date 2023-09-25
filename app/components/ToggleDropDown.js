import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { COLORS } from "../constants/theme";

import { MaterialCommunityIcons } from "@expo/vector-icons";

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
  placeholder = "Placeholder",
  label = "Label",
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
        <Text style={styles.label}>{label}</Text>
        <View
          style={{
            minWidth: 140,
          }}
        >
          <View style={styles.bordering}>
            <Text
              numberOfLines={1}
              adjustsFontSizeToFit
              style={styles.placeholderColor}
            >
              {selectedItem || placeholder}
            </Text>
            <MaterialCommunityIcons
              name="chevron-down"
              size={13}
              color={COLORS.secondary}
            />
          </View>
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

const styles = StyleSheet.create({
  bordering: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderRadius: 8,
    padding: 12,
  },
  label: {
    color: COLORS.secondary,
    marginTop: 5,
    marginBottom: 5,
  },
  texto: {
    color: COLORS.secondary,
    fontSize: 16,
    paddingVertical: 10,
    borderWidth: 0.5,
    borderColor: COLORS.secondary,
    borderRadius: 8,
  },
  placeholderColor: {
    color: COLORS.secondary,
  },
});
