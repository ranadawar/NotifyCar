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
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const initialValues = {
  email: "",
  password: "",
};

const LoginScreen = ({ navigation }) => {
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
            onSubmit={(values) => navigation.navigate("app")}
            validationSchema={validationSchema}
          >
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <AppFormField name="email" placeholder="example@gmail.com" />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Senha</Text>
              <AppFormField
                name="password"
                placeholder="Senha"
                secureTextEntry
              />
            </View>
            <View style={styles.rowAligned}>
              <Text style={styles.normalText}>Esqueci a senha</Text>
              <Text
                onPress={() => navigation.navigate("recovery")}
                style={styles.colored}
              >
                Cadastre-se
              </Text>
            </View>

            <SubmitButton title="Entrar" />
          </AppForm>
        </View>
      </View>
    </AppScreen>
  );
};

export default LoginScreen;

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
