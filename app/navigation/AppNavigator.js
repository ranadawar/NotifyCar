import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/app/Home";
import Profile from "../screens/app/Profile";
import Setting from "../screens/app/Setting";
import Notifications from "../screens/app/Notifications";

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size }) =>
            ({ focused } ? (
              <Image
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
                source={require("../../assets/icons/home.png")}
              />
            ) : (
              <Image
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
                source={require("../../assets/icons/homen.png")}
              />
            )),
        }}
      />
      <Tab.Screen name="profile" component={Profile} />
      <Tab.Screen name="setting" component={Setting} />
      <Tab.Screen name="notifications" component={Notifications} />
    </Tab.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
