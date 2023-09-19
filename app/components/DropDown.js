import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../constants/theme";

const DropDown = ({
  data,
  onSelectItem,
  placeholder = "Select Item",
  selectedItem,
}) => {
  const [showOptions, setShowOption] = React.useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.dropDownContainer}
        activeOpacity={0.8}
        onPress={() => setShowOption(!showOptions)}
      >
        <View style={styles.firstContainer}>
          <Text style={styles.place}>{placeholder}</Text>

          <Image
            source={require("../../assets/icons/dropdowns.png")}
            style={{ width: 13, height: 13 }}
            resizeMode="contain"
          />
        </View>
        {selectedItem?.name ? (
          <Text style={styles.place1}>{selectedItem.name}</Text>
        ) : (
          <Text style={styles.place1}>{placeholder}</Text>
        )}
      </TouchableOpacity>
      {showOptions && (
        <View style={styles.dropDownList}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {data.map((item) => (
              <TouchableOpacity
                onPress={() => {
                  onSelectItem(item);
                  setShowOption(false);
                }}
              >
                <View style={styles.container}>
                  <Text key={item.id} style={styles.text}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  dropDownContainer: {
    backgroundColor: COLORS.white,
    padding: 10,
    minHeight: 42,
    marginVertical: 10,
  },
  dropDownList: {
    backgroundColor: COLORS.lighter,
    padding: 10,
    borderRadius: 25,
  },
  dropDownText: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.gray,
    marginLeft: 10,
  },

  container: {
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 7,
    minHeight: 35,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 3,
  },
  place: {
    color: COLORS.cho,
    fontFamily: FONTS.medium,
    fontSize: 14,
  },
  place1: {
    color: COLORS.text,
    fontFamily: FONTS.bold,
    fontSize: 16,
  },
  text: {
    fontSize: 12,
    fontFamily: FONTS.regular,
    color: COLORS.cho,
    marginLeft: 10,
  },
  firstContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
