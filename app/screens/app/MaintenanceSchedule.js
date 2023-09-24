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
import CheckboxWithText from "../../components/CheckboxWithText";
import MenuComponent from "../../components/MenuComponent";

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

const MaintenanceSchedule = () => {
  return (
    <AppScreen>
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.menuContainer}>
            <MenuComponent />
          </View>

          <View style={styles.topContainer}>
            <View style={styles.horizontalContainer}>
              <Text style={styles.screenTitle}>Agenda de Manutenções</Text>
              <TouchableOpacity style={styles.addBtn}>
                <Image
                  resizeMode="contain"
                  style={{ width: 16, height: 16 }}
                  source={require("../../../assets/icons/plusing.png")}
                />
                <Text style={styles.editText}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.firstContainer}>
            <View style={styles.headingHorizontal}>
              <Text
                numberOfLines={2}
                adjustsFontSizeToFit
                style={styles.screenTitle2}
              >
                Manutenções concluídas
              </Text>
              <TouchableOpacity style={styles.newer}>
                <Text style={styles.newerText}>Ver todos</Text>
                <Image
                  style={{ width: 14, height: 14 }}
                  resizeMode="contain"
                  source={require("../../../assets/icons/chevRight.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 20 }}>
              <FlatList
                data={maintenance}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View style={styles.hori}>
                    <CheckboxWithText
                      label={item.title}
                      onChange={() => console.log("onChang")}
                      checked={false}
                    />
                    <Text style={styles.textLabel}>{item.date}</Text>
                  </View>
                )}
              />
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
                Manutenções concluídas
              </Text>
              <TouchableOpacity style={styles.newer}>
                <Text style={styles.newerText}>Ver todos</Text>
                <Image
                  style={{ width: 14, height: 14 }}
                  resizeMode="contain"
                  source={require("../../../assets/icons/chevRight.png")}
                />
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

export default MaintenanceSchedule;

const styles = StyleSheet.create({
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
    justifyContent: "space-between",
  },
  newer: {
    flexDirection: "row",
    alignItems: "center",
  },
  newerText: {
    fontFamily: FONTS.semiBold,
    color: COLORS.text,
    marginRight: 10,
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
  hori: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textLabel: {
    fontFamily: FONTS.regular,
    color: COLORS.text,
  },
});
