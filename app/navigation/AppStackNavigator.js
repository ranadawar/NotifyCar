import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeNavigator from "./app/HomeNavigator";
import MaintenanceDetailsScreen from "../screens/app/MaintenanceDetailsScreen";
import Profile from "../screens/app/Profile";
import AddVehicle from "../screens/app/AddVehicle";
import Setting from "../screens/app/Setting";
import AddMaintenance from "../screens/app/AddMaintenance";
import AddMaintain from "../screens/app/AddMaintain";
import MaintenanceSchedule from "../screens/app/MaintenanceSchedule";
import ToSchedule from "../screens/app/ToSchedule";

const Stack = createNativeStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="sHome" component={HomeNavigator} />
      <Stack.Screen name="sProfile" component={Profile} />
      <Stack.Screen name="sAddVehicle" component={AddVehicle} />
      <Stack.Screen name="sMyVehicle" component={Setting} />
      <Stack.Screen name="sAddMaintenance" component={AddMaintenance} />
      <Stack.Screen name="sAllMaintenance" component={AddMaintain} />
      <Stack.Screen
        name="sMaintenanceSchedule"
        component={MaintenanceSchedule}
      />
      <Stack.Screen name="sToSchedule" component={ToSchedule} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;

const styles = StyleSheet.create({});
