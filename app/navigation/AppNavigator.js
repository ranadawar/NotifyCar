import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/app/Home";
import Profile from "../screens/app/Profile";
import Setting from "../screens/app/Setting";
import Notifications from "../screens/app/Notifications";
import SettingNavigator from "./app/SettingNavigator";
import HomeNavigator from "./app/HomeNavigator";

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused, size }) =>
            focused ? (
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
            ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <Image
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
                source={require("../../assets/icons/profile.png")}
              />
            ) : (
              <Image
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
                source={require("../../assets/icons/profilen.png")}
              />
            ),
        }}
      />
      <Tab.Screen
        name="setting"
        component={SettingNavigator}
        options={{
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <Image
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
                source={require("../../assets/icons/settingn.png")}
              />
            ) : (
              <Image
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
                source={require("../../assets/icons/settingn.png")}
              />
            ),
        }}
      />
      <Tab.Screen
        name="notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <Image
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
                source={require("../../assets/icons/bell.png")}
              />
            ) : (
              <Image
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
                source={require("../../assets/icons/homen.png")}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
