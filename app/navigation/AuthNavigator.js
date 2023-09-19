import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import NewPasswordScreen from "../screens/auth/NewPasswordScreen";
import RecoverAccount from "../screens/auth/RecoverAccount";
import WelcomeScreen from "../screens/auth/WelcomeScreen";
import AppNavigator from "./AppNavigator";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
      <Stack.Screen name="recovery" component={RecoverAccount} />
      <Stack.Screen name="newPass" component={NewPasswordScreen} />
      <Stack.Screen name="app" component={AppNavigator} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
