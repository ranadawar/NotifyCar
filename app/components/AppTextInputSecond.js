import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../constants/theme";

const AppTextInputSecond = ({
  placeholder,
  size = 24,
  onPressIcon,
  onChange,
  value,
  isPassword = false,
  showPassword,
  height,
  originalPlaceholder = "Email",
  inputStyle,
  placeholderTextColor = "#969696",
  optional = false,
  ...otherProps
}) => {
  return (
    <View style={[styles.mainContainer, { height: height }]}>
      <Text style={styles.placeholder}>{placeholder}</Text>
      <TextInput
        onChangeText={onChange}
        style={[styles.input, inputStyle]}
        value={value}
        placeholder={originalPlaceholder}
        placeholderTextColor={placeholderTextColor}
        autoCapitalize="none"
        autoComplete="off"
        {...otherProps}
      />
    </View>
  );
};

export default AppTextInputSecond;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 10,
    color: COLORS.form,
  },
  mainContainer: {
    borderRadius: 7,
    marginBottom: 12,
    borderColor: COLORS.form,
    borderBottomWidth: 0.5,
    marginVertical: 10,
  },
  placeholder: {
    marginBottom: 5,
    marginHorizontal: 14,
    color: COLORS.form,
  },
});
