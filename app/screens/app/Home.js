import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AppScreen from "../../components/AppScreen";
import { COLORS, FONTS } from "../../constants/theme";
import HomeBtnOne from "../../components/HomeBtnOne";
import Dropdown from "../../components/ToggleDropDown";
import HomeBtnTwo from "../../components/HomeBtnTwo";
import HorizontalTouchableList from "../../components/HorizontalTouchableComponent";

const itemss = [
  "Troca de óleo",
  "Freio",
  "Pneu",
  "Suspensão",
  "Motor",
  "Lataria",
  "Luzes",
];

const cars = [
  {
    id: 1,
    name: "Carro 1",
    image: require("../../../assets/images/cars.jpg"),
    price: 100,
    priceUnit: "R$",
    time: "1h",
    timeUnit: "min",
    status: "Em andamento",
    statusColor: COLORS.primary,
  },
  {
    id: 2,
    name: "Carro 2",
    image: require("../../../assets/images/cars.jpg"),
    price: 200,
    priceUnit: "R$",
    time: "2h",
    timeUnit: "min",
    status: "Em andamento",
    statusColor: COLORS.primary,
  },
];

const Home = ({ navigation }) => {
  const [name, setName] = React.useState("Dawar");

  const onPressSmallText = () => {
    console.log("View all vehicles");
  };

  const onPressItem = (item) => {
    console.log(item);
  };

  return (
    <AppScreen>
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.menuContainer}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require("../../../assets/icons/menu.png")}
          />
        </TouchableOpacity>

        <Text numberOfLines={2} style={styles.name}>
          Olá {name}
        </Text>
        <View style={styles.rowTexts}>
          <Text style={styles.bigText}>Meus veículos</Text>
          <Text onPress={onPressSmallText} style={styles.smallText}>
            Ver todos
          </Text>
        </View>

        <View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={styles.rowContainer}
          >
            <FlatList
              data={cars}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <HomeBtnOne
                  onPress={() => navigation.navigate("vehicleDetails")}
                  title={item.name}
                />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
            <HomeBtnOne
              title="Adicionar veículo"
              image={require("../../../assets/icons/plus.png")}
              onPress={() => navigation.navigate("addVehicle")}
            />
          </ScrollView>
        </View>

        <Text style={styles.bigText}>Próximas manutenções</Text>

        <View style={styles.rowSecondBtn}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <FlatList
              data={cars}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <HomeBtnTwo
                  onPress={() =>
                    navigation.navigate("maintenanceDetailsScreen")
                  }
                />
              )}
            />
            <HomeBtnTwo
              title="Adicionar veículo"
              icon={require("../../../assets/icons/plus.png")}
              onPress={() => navigation.navigate("addM")}
            />
          </ScrollView>
        </View>
        <Text style={[styles.bigText, { marginBottom: 20 }]}>
          Manutenções cadastradas
        </Text>
        <HorizontalTouchableList
          onPressItem={(item) => onPressItem(item)}
          items={itemss}
        />
      </View>
    </AppScreen>
  );
};

export default Home;

const styles = StyleSheet.create({
  bigText: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    color: COLORS.secondary,
  },
  image: {
    width: 30,
    height: 30,
    marginVertical: 10,
    alignSelf: "flex-end",
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  name: {
    fontFamily: FONTS.bold,
    fontSize: 30,
    marginVertical: 20,
    width: Dimensions.get("window").width / 3,
    color: COLORS.secondary,
  },
  smallText: {
    fontFamily: FONTS.medium,
    fontSize: 12,
    color: COLORS.secondary,
  },
  rowTexts: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowContainer: {
    flexDirection: "row",
    marginVertical: 20,
  },

  rowSecondBtn: {
    flexDirection: "row",
    marginVertical: 13,
  },
});
