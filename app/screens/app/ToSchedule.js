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
import MenuComponent from "../../components/MenuComponent";

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

const ToSchedule = () => {
  return (
    <AppScreen>
      <View style={styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <MenuComponent />

          <Text style={styles.screenTitle}>Agendar</Text>

          <View style={styles.formContainer}>
            <AppForm
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => console.log(values)}
            >
              <View style={{ height: 50 }} />
              <View style={styles.horizontal}>
                <View style={styles.box}>
                  <Dropdown label="Veículo" placeholder="Veículo" />
                </View>
                <View style={styles.box}>
                  <Dropdown label="ListBox title" placeholder="Manutenção" />
                </View>
              </View>

              <View>
                <AppFormFieldSecond
                  name="plate"
                  placeholder="Data*"
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

export default ToSchedule;

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
    marginTop: 40,
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
