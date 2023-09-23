import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Setting from "../../screens/app/Setting";
import AddVehicle from "../../screens/app/AddVehicle";

const Stack = createNativeStackNavigator();

const SettingNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="sesetting" component={Setting} />
      <Stack.Screen name="seAddVehicle" component={AddVehicle} />
    </Stack.Navigator>
  );
};

export default SettingNavigator;

const styles = StyleSheet.create({});
