import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/app/Home";
import AddVehicle from "../../screens/app/AddVehicle";
import AddMaintain from "../../screens/app/AddMaintain";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="hhome" component={Home} />
      <Stack.Screen name="addVehicle" component={AddVehicle} />
      <Stack.Screen name="addMaintenance" component={AddMaintain} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({});
