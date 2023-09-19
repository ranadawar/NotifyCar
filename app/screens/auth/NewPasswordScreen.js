import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../../components/AppScreen";

import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  SubmitButton,
} from "../../components/form/index";
import { COLORS, FONTS } from "../../constants/theme";

const validationSchema = Yup.object().shape({
  newPassword: Yup.string().required().email().label("Email"),
  confirmNewPassword: Yup.string().required().min(4).label("Password"),
});

const initialValues = {
  newPassword: "",
  confirmNewPassword: "",
};

const NewPasswordScreen = ({ navigation }) => {
  return (
    <AppScreen>
      <View style={styles.mainContainer}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../../../assets/images/logo.png")}
        />

        <View style={styles.formContainer}>
          <AppForm
            initialValues={initialValues}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Digite nova senha</Text>
              <AppFormField name="email" placeholder="******************" />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Repita nova senha</Text>
              <AppFormField
                name="password"
                placeholder="******************"
                secureTextEntry
              />
            </View>
            <View style={{ height: 50 }} />
            <SubmitButton title="Salvar" />
          </AppForm>
        </View>
      </View>
    </AppScreen>
  );
};

export default NewPasswordScreen;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginVertical: 50,
    marginBottom: 20,
  },
  inputContainer: {
    marginVertical: 15,
  },
  label: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    marginBottom: 7,
    color: COLORS.border,
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: 30,
  },
  rowAligned: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: -15,
    marginBottom: 40,
  },
  normalText: {
    fontSize: 12,
    fontFamily: FONTS.regular,
  },
  colored: {
    color: COLORS.primary,
    fontFamily: FONTS.medium,
  },
});
