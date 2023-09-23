import {
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
import AppTextInputSecond from "../../components/AppTextInputSecond";
import AppForm from "../../components/form/AppForm";

import * as Yup from "yup";
import AppFormFieldSecond from "../../components/form/AppFormFieldSecond";
import AppFormDropdown from "../../components/form/AppFormDropDown";
import Dropdown from "../../components/ToggleDropDown";
import FormBtn from "../../components/FormBtn";
import SubmitSmallButton from "../../components/form/SubmitSmallBtn";

const validationSchema = Yup.object().shape({
  plate: Yup.string().required().label("Placa"),
  brand: Yup.object().required().nullable().label("Marca"),
  model: Yup.object().required().nullable().label("Modelo"),
  car: Yup.object().required().nullable().label("Carro"),
  ano: Yup.object().required().nullable().label("Ano"),
  kms: Yup.string().required().label("Kms"),
  average: Yup.string().required().label("Média"),
});

const initialValues = {
  plate: "",
  brand: null,
  model: null,
  car: null,
  ano: null,
  kms: null,
  average: null,
};

const AddVehicle = () => {
  return (
    <AppScreen>
      <View style={styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity style={styles.menuContainer}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require("../../../assets/icons/menu.png")}
            />
          </TouchableOpacity>

          <Text style={styles.screenTitle}>Cadastrar Veículo</Text>

          <View style={styles.formContainer}>
            <AppForm
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => console.log(values)}
            >
              <View style={styles.horizontal}>
                <View style={styles.box}>
                  <AppFormFieldSecond
                    name="plate"
                    placeholder="Placa*"
                    originalPlaceholder=""
                  />
                </View>
                <View style={styles.box}>
                  <Dropdown label="Cor" placeholder="Selecione a cor" />
                </View>
              </View>
              <View style={styles.horizontal}>
                <View style={styles.box}>
                  <Dropdown label="Marca" placeholder="Marca" />
                </View>
                <View style={styles.box}>
                  <Dropdown label="Modelo" placeholder="Modelo" />
                </View>
              </View>
              <View style={styles.horizontal}>
                <View style={styles.box}>
                  <Dropdown label="Ano" placeholder="Ano" />
                </View>
                <View style={styles.box}>
                  <AppFormFieldSecond
                    name="km"
                    placeholder="Km*"
                    originalPlaceholder=""
                  />
                </View>
              </View>

              <View>
                <AppFormFieldSecond
                  name="plate"
                  placeholder="Média em Km semanal*"
                  originalPlaceholder=""
                />
              </View>

              <View style={styles.formBtnsContainer}>
                <FormBtn title="cancelar" color={COLORS.secondary} />
                <SubmitSmallButton title="Salvar" />
              </View>
            </AppForm>
          </View>
        </ScrollView>
      </View>
    </AppScreen>
  );
};

export default AddVehicle;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    marginHorizontal: 5,
  },
  formContainer: {
    flex: 1,
  },
  formBtnsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    marginTop: 80,
  },
  horizontal: {
    flexDirection: "row",
    marginVertical: 15,
    alignItems: "center",
  },
  image: {
    width: 30,
    height: 30,
    marginVertical: 10,
    alignSelf: "flex-end",
  },

  mainContainer: {
    flex: 1,
    padding: 25,
  },
  screenTitle: {
    fontFamily: FONTS.bold,
    fontSize: 30,
    color: COLORS.secondary,
    width: "55%",
  },
});
