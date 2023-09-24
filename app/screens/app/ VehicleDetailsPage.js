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

const maintenance = [
  {
    id: 1,
    title: "Troca de óleo",
    date: "10/10/2023",
    km: "2.233",
    status: "Pendente",
  },
  {
    id: 2,
    title: "Troca de óleo",
    date: "10/10/2023",
    km: "2.233",
    status: "Pendente",
  },
  {
    id: 3,
    title: "Troca de óleo",
    date: "10/10/2023",
    km: "2.233",
    status: "Pendente",
  },
  {
    id: 4,
    title: "Troca de óleo",
    date: "10/10/2023",
    km: "2.233",
    status: "Pendente",
  },
];

const VehicleDetailsPage = () => {
  const onPressMenu = () => {
    console.log("ewfr");
  };
  return (
    <AppScreen>
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity onPress={onPressMenu} style={styles.menuContainer}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require("../../../assets/icons/menu.png")}
            />
          </TouchableOpacity>

          <View style={styles.topContainer}>
            <Text style={styles.modelText}>Modelo</Text>
            <View style={styles.horizontalContainer}>
              <Text style={styles.screenTitle}>Modelo veículo</Text>
              <TouchableOpacity style={styles.editBtn}>
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
                <Text style={styles.heading}>Marca</Text>
                <Text style={styles.result}>Marca</Text>
              </View>
              <View style={styles.flex2}>
                <Image
                  source={require("../../../assets/icons/carH.png")}
                  resizeMode="contain"
                  style={styles.carH}
                />
              </View>
            </View>
            <View style={styles.horizontalBig}>
              <View style={styles.flex1}>
                <Text style={styles.heading}>Marca</Text>
                <Text style={styles.result}>Vermelho</Text>
              </View>
              <View style={styles.flex1}>
                <Text style={styles.heading}>Placa</Text>
                <Text style={styles.result}>Xxxxxxx</Text>
              </View>
              <View style={styles.flex1}>
                <Text style={styles.heading}>Ano</Text>
                <Text style={styles.result}>2021</Text>
              </View>
            </View>
            <View style={styles.horizontalBig}>
              <View style={styles.flex1}>
                <Text style={styles.heading}>Km atual</Text>
                <Text style={styles.result}>2.233</Text>
              </View>
              <View style={styles.flex2Text}>
                <Text style={styles.heading}>Média Km semanal</Text>
                <Text style={styles.result}>120</Text>
              </View>
            </View>
          </View>
          <View style={styles.separator} />

          <View style={styles.secondContainer}>
            <View style={styles.headingHorizontal}>
              <Text
                numberOfLines={2}
                adjustsFontSizeToFit
                style={styles.screenTitle2}
              >
                Próximas manutenções
              </Text>
              <TouchableOpacity style={styles.addBtn}>
                <Image
                  resizeMode="contain"
                  style={{ width: 16, height: 16 }}
                  source={require("../../../assets/icons/plusing.png")}
                />
                <Text style={styles.editText}>Adicionar</Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 25 }}>
              <FlatList
                data={maintenance}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity style={styles.maintenanceDate}>
                    <Text style={styles.texts}>{item.title}</Text>
                    <Text style={styles.texts}>{item.date}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </AppScreen>
  );
};

export default VehicleDetailsPage;

const styles = StyleSheet.create({
  editBtn: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: COLORS.tertary,
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 13,
  },
  addBtn: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 13,
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
  modelText: {
    fontFamily: FONTS.light,
    fontSize: 14,
    color: COLORS.texto,
  },
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  screenTitle: {
    fontFamily: FONTS.bold,
    fontSize: 30,
    color: COLORS.text,
  },
  screenTitle2: {
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLORS.text,
    width: Dimensions.get("window").width / 2.2,
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.text,
    marginVertical: 15,
    marginHorizontal: 40,
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
  horizontalBig: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  flex1: {
    flex: 1,
    alignSelf: "flex-start",
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
  flex2: {
    flex: 2,
  },
  flex2Text: {
    flex: 2,
    alignSelf: "flex-start",
  },
  carH: {
    alignSelf: "flex-end",
  },

  headingHorizontal: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  secondContainer: {
    padding: 40,
    paddingTop: 20,
  },
  maintenanceDate: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  texts: {
    fontFamily: FONTS.regular,
    color: COLORS.text,
  },
});
