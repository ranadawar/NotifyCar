import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { COLORS, FONTS } from "../constants/theme";

const HorizontalTouchableList = ({ items, onPressItem }) => {
  const [itemsPerRow, setItemsPerRow] = useState(1);

  useEffect(() => {
    const screenWidth = Dimensions.get("window").width;
    const padding = 8;
    const borderRadius = 10;

    const calculateMaxItemWidth = () => {
      const maxItemWidth =
        (screenWidth - (itemsPerRow + 1) * padding) / itemsPerRow;
      return maxItemWidth;
    };

    const calculateItemsPerRow = () => {
      const maxItemWidth = calculateMaxItemWidth();
      const newItemsPerRow = Math.floor(screenWidth / (maxItemWidth + padding));
      return newItemsPerRow > 0 ? newItemsPerRow : 1;
    };

    const newItemsPerRow = calculateItemsPerRow();
    setItemsPerRow(newItemsPerRow);
  }, [itemsPerRow]);

  const renderItems = () => {
    const rows = [];
    for (let i = 0; i < items.length; i += itemsPerRow) {
      const rowItems = items.slice(i, i + itemsPerRow);
      const row = (
        <View key={i} style={styles.row}>
          {rowItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onPressItem(item)}
              style={styles.item}
            >
              <Text style={styles.texto}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
      rows.push(row);
    }
    return rows;
  };

  return <View>{renderItems()}</View>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  item: {
    backgroundColor: COLORS.themes,
    paddingVertical: 5,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginRight: 10,
  },
  texto: {
    fontFamily: FONTS.medium,
    fontSize: 12,
    color: COLORS.white,
  },
});

export default HorizontalTouchableList;
