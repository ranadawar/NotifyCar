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
import AppForm from "../../components/form/AppForm";

import * as Yup from "yup";
import AppFormFieldSecond from "../../components/form/AppFormFieldSecond";

import FormBtn from "../../components/FormBtn";
import SubmitSmallButton from "../../components/form/SubmitSmallBtn";
import Quiz from "../../components/Quiz";
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

const quizOptions = ["Sintético", "Semissintético", "Mineral"];

const AddMaintenance = ({ navigation }) => {
  const [selectedOption, onSelectedOption] = React.useState("");

  const onOptionSelect = (option) => {
    onSelectedOption(option);
  };
  const onPressMenu = () => {
    navigation.navigate("mainSche");
  };
  return (
    <AppScreen>
      <View style={styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <MenuComponent />

          <Text style={styles.screenTitle}>Cadastrar Manutenção</Text>

          <View style={styles.formContainer}>
            <AppForm
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => console.log(values)}
            >
              <AppFormFieldSecond
                name="plate"
                placeholder="Tipo de manutenção*"
                originalPlaceholder=""
              />
              <AppFormFieldSecond
                name="plate"
                placeholder="Marca*"
                originalPlaceholder=""
              />
              <AppFormFieldSecond
                name="plate"
                placeholder="Densidade"
                originalPlaceholder=""
              />
              <View style={styles.horizontal}>
                <View style={styles.box}>
                  <AppFormFieldSecond
                    name="plate"
                    placeholder="Média em Km semanal*"
                    originalPlaceholder=""
                  />
                </View>
                <View>
                  <AppFormFieldSecond
                    name="plate"
                    placeholder="Média em Km semanal*"
                    originalPlaceholder=""
                  />
                </View>
              </View>

              <Quiz
                options={quizOptions}
                onOptionSelect={onOptionSelect}
                question="Tipo"
                selectedOption={selectedOption}
              />

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

export default AddMaintenance;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    marginHorizontal: 5,
  },
  formContainer: {
    flex: 1,
    marginTop: 35,
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
