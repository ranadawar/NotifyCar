import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppScreen from "../../components/AppScreen";
import { COLORS, FONTS } from "../../constants/theme";

const MaintenanceDetailsScreen = () => {
  const onPressMenu = () => {
    console.log("ewfr");
  };
  return (
    <AppScreen>
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={onPressMenu} style={styles.menuContainer}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require("../../../assets/icons/menu.png")}
          />
        </TouchableOpacity>

        <View style={styles.topContainer}>
          <View style={styles.horizontalContainer}>
            <Text
              numberOfLines={1}
              adjustsFontSizeToFit
              style={styles.screenTitle}
            >
              Modelo veículo
            </Text>
            <TouchableOpacity style={styles.main}>
              <Image
                resizeMode="contain"
                style={{ width: 13, height: 13 }}
                source={require("../../../assets/icons/pencil.png")}
              />
              <Text style={styles.editText}>Editar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.firstContainer}>
          <View style={styles.horizontalBig}>
            <View style={styles.flex1}>
              <Text style={styles.heading}>Tipo de manuteção</Text>
              <Text style={styles.result}>Pastilha de freio</Text>
            </View>
            <View style={styles.flex1}>
              <Text style={styles.heading}>Marca</Text>
              <Text style={styles.result}>Bosch</Text>
            </View>
            <View style={styles.flex1}>
              <Text style={styles.heading}>Densidade</Text>
            </View>
          </View>
          <View style={styles.horizontalBig}>
            <View style={styles.flex1}>
              <Text style={styles.heading}>Km atual</Text>
              <Text style={styles.result}>2.233</Text>
            </View>
            <View style={styles.flex2}>
              <Text style={styles.heading}>Km da próxima troca</Text>
              <Text style={styles.result}>120</Text>
            </View>
          </View>
          <View style={styles.horizontalBig}>
            <View style={styles.flex1}>
              <Text style={styles.heading}>Tipo</Text>
            </View>
          </View>
        </View>
      </View>
    </AppScreen>
  );
};

export default MaintenanceDetailsScreen;

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    flexDirection: "row",
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 13,
    backgroundColor: COLORS.tertary,
  },
  image: {
    width: 30,
    height: 30,
    marginVertical: 10,
    alignSelf: "flex-end",
  },
  menuContainer: {
    padding: 20,
  },
  topContainer: {
    padding: 20,
    paddingTop: -20,
    paddingHorizontal: 40,
  },
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  screenTitle: {
    fontFamily: FONTS.bold,
    fontSize: 30,
    color: COLORS.text,
  },
  editText: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: 12,
    marginLeft: 5,
  },

  firstContainer: {
    padding: 20,
    paddingHorizontal: 40,
  },

  firstContainer: {
    padding: 20,
    paddingHorizontal: 40,
  },
  horizontalBig: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  flex1: {
    flex: 1,
    alignSelf: "flex-start",
  },
  flex2: {
    flex: 2,
  },
  heading: {
    fontFamily: FONTS.light,
    fontSize: 14,
    color: COLORS.text,
  },
  result: {
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLORS.text,
  },
});
