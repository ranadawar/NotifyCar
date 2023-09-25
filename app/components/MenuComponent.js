import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";

const MenuComponent = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const navigation = useNavigation();

  const onPressMenu = () => {
    setShowMenu(!showMenu);
  };

  const onPressProfile = () => {
    navigation.navigate("sProfile");
    setShowMenu(false);
  };

  const onPressCada = () => {
    navigation.navigate("sAddVehicle");
    setShowMenu(false);
  };

  const onPressMyVehicles = () => {
    navigation.navigate("sMyVehicle");
    setShowMenu(false);
  };

  const onPressAddMaintenance = () => {
    navigation.navigate("sAddMaintenance");
    setShowMenu(false);
  };

  const onPressAllMaintenance = () => {
    navigation.navigate("sAllMaintenance");
    setShowMenu(false);
  };

  const onPressMaintenanceSchedule = () => {
    navigation.navigate("sMaintenanceSchedule");
    setShowMenu(false);
  };

  const onPressToSchedule = () => {
    navigation.navigate("sToSchedule");
    setShowMenu(false);
  };

  return (
    <>
      <TouchableOpacity onPress={onPressMenu}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../../assets/icons/menu.png")}
        />
      </TouchableOpacity>
      {showMenu && (
        <View style={styles.menuContainer}>
          <View style={styles.menuItems}>
            <Text onPress={onPressProfile} style={styles.menuText}>
              Perfil
            </Text>
            <Text onPress={onPressCada} style={styles.menuText}>
              cadastrar veículo
            </Text>
            <Text onPress={onPressMyVehicles} style={styles.menuText}>
              Meus veículos
            </Text>
            <Text onPress={onPressAddMaintenance} style={styles.menuText}>
              Cadastrar Manutenções
            </Text>
            <Text onPress={onPressAllMaintenance} style={styles.menuText}>
              Manutenções
            </Text>
            <Text onPress={onPressMaintenanceSchedule} style={styles.menuText}>
              Agenda de Manutenções
            </Text>
            <Text onPress={onPressToSchedule} style={styles.menuText}>
              Agendar
            </Text>
            <Text onPress={onPressProfile} style={styles.menuText}>
              Logout
            </Text>
          </View>
        </View>
      )}
    </>
  );
};

export default MenuComponent;

const styles = StyleSheet.create({
  menuContainer: {
    position: "absolute",
    top: 40,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 10, // Use a higher zIndex to overlay other content
    // Semi-transparent black background
  },
  menuItems: {
    padding: 20,
    backgroundColor: COLORS.bg,
    borderRadius: 8,
  },
  menuText: {
    marginVertical: 10,
    color: "#1E1E1E",
    fontFamily: FONTS.regular,
    fontSize: 16,
  },
  image: {
    width: 30,
    height: 30,
    marginVertical: 10,
    alignSelf: "flex-end",
  },
});
