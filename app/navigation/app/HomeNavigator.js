import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/app/Home";
import AddVehicle from "../../screens/app/AddVehicle";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShowm: false }}>
      <Stack.Screen name="hhome" component={Home} />
      <Stack.Screen name="addVehicle" component={AddVehicle} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({});
