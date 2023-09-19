import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../../components/AppScreen";
import { AppForm, AppFormField, SubmitButton } from "../../components/form";

import * as Yup from "yup";
import { COLORS, FONTS } from "../../constants/theme";

const initialValues = {
  email: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
});

const RecoverAccount = ({ navigation }) => {
  return (
    <AppScreen>
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require("../../../assets/images/logo.png")}
          />
        </View>
        <View style={styles.formContainer}>
          <AppForm
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={(values) => navigation.navigate("newPass")}
          >
            <Text style={styles.label}>Email</Text>
            <AppFormField name="email" placeholder="example@gmail.com" />
            <View style={{ height: 70 }} />
            <SubmitButton title="Recuperar" />
          </AppForm>
        </View>
      </View>
    </AppScreen>
  );
};

export default RecoverAccount;

const styles = StyleSheet.create({
  formContainer: {},
  image: {
    width: 150,
    height: 150,
  },
  topContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 50,
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: 30,
  },
  label: {
    fontSize: 14,
    fontFamily: FONTS.medium,
    marginBottom: 7,
    color: COLORS.border,
  },
});
