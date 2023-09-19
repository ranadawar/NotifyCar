import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../../components/AppScreen";
import AppButton from "../../components/AppButton";
import { COLORS } from "../../constants/theme";

const WelcomeScreen = ({ navigation }) => {
  return (
    <AppScreen>
      <ImageBackground
        style={styles.imageBg}
        resizeMode="cover"
        source={require("../../../assets/images/cars.jpg")}
        blurRadius={10}
      >
        <View style={styles.topContainer}>
          <Image
            resizeMode="contain"
            source={require("../../../assets/images/logo.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.bottomContainer}>
          <AppButton
            title="Register"
            onPress={() => navigation.navigate("register")}
          />
          <AppButton
            title="Login"
            style={{ backgroundColor: COLORS.secondary }}
            onPress={() => navigation.navigate("login")}
          />
        </View>
      </ImageBackground>
    </AppScreen>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  bottomContainer: {
    position: "absolute",
    bottom: 45,
    left: 20,
    right: 20,
  },
  imageBg: {
    flex: 1,
    zIndex: -1,
  },
  logo: {
    width: 200,
    height: 200,
  },
  topContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
