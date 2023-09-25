import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AppScreen from "../../components/AppScreen";
import { COLORS, FONTS } from "../../constants/theme";
import HomeBtnOne from "../../components/HomeBtnOne";
import MenuComponent from "../../components/MenuComponent";

const vehicles = [
  {
    id: 1,
    name: "Carro 1",
    travelled: "1200",
  },
  {
    id: 2,
    name: "Carro 2",
    travelled: "1200",
  },
  {
    id: 3,
    name: "Carro 3",
    travelled: "1200",
  },
  {
    id: 4,
    name: "Carro 4",
    travelled: "1200",
  },
];

const Setting = ({ navigation }) => {
  return (
    <AppScreen>
      <View style={{ flex: 1, padding: 20 }}>
        <MenuComponent />

        <Text style={styles.titlePage}>Meus veículos</Text>

        <View style={styles.vehicleContainer}>
          <FlatList
            data={vehicles}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: "space-around",
              marginHorizontal: 20,
              marginBottom: 20,
            }}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <HomeBtnOne
                style={{ width: 150, height: 150 }}
                title={item.name}
              />
            )}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("seAddVehicle")}
          style={styles.addVehicleBtn}
        >
          <Image
            resizeMode="contain"
            style={styles.imagee}
            source={require("../../../assets/icons/plus.png")}
          />
          <Text style={styles.addText}>Adicionar veículo</Text>
        </TouchableOpacity>
      </View>
    </AppScreen>
  );
};

export default Setting;

const styles = StyleSheet.create({
  addVehicleBtn: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    borderWidth: 1,
    marginHorizontal: 40,
    padding: 15,
    borderRadius: 10,
    borderColor: COLORS.primary,
  },
  addText: {
    fontFamily: FONTS.semiBold,
    color: COLORS.secondary,
    marginTop: 10,
  },
  image: {
    width: 30,
    height: 30,
    marginVertical: 10,
    alignSelf: "flex-end",
  },
  imagee: {
    width: 30,
    height: 30,
  },
  menuContainer: {
    padding: 20,
  },
  titlePage: {
    fontFamily: FONTS.bold,
    fontSize: 30,
    marginHorizontal: 20,
    color: COLORS.form,
  },
  vehicleContainer: {
    flex: 1,
    marginVertical: 14,
  },
});
