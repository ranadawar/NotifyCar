import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
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
  firstName: Yup.string().required().label("First Name"),
  lastName: Yup.string().required().label("Last Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  //confirm password must be same as password
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterScreen = () => {
  return (
    <AppScreen>
      <View style={styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require("../../../assets/images/logo.png")}
          />

          <KeyboardAvoidingView style={styles.formContainer}>
            <AppForm
              initialValues={initialValues}
              onSubmit={(values) => console.log(values)}
              validationSchema={validationSchema}
            >
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Primeiro nome</Text>
                <AppFormField name="firstName" placeholder="Paulo" />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Último nome</Text>
                <AppFormField name="lastName" placeholder="da Silva" />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <AppFormField name="email" placeholder="exemplo@email.com" />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Senha</Text>
                <AppFormField
                  name="password"
                  placeholder="*************"
                  secureTextEntry
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Repetir senha</Text>
                <AppFormField
                  name="confirmPassword"
                  placeholder="*************"
                  secureTextEntry
                />
              </View>

              <View style={{ height: 25 }} />

              <SubmitButton title="Cadastrar" />
            </AppForm>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </AppScreen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    marginTop: -40,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginVertical: 10,
  },
  inputContainer: {
    marginVertical: 3,
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
