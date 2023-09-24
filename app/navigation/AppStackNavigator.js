import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeNavigator from "./app/HomeNavigator";
import MaintenanceDetailsScreen from "../screens/app/MaintenanceDetailsScreen";

const Stack = createNativeStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="sHome" component={HomeNavigator} />
      <Stack.Screen
        name="maintenanceDetails"
        component={MaintenanceDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;

const styles = StyleSheet.create({});
