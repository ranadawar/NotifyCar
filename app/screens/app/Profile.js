import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppScreen from "../../components/AppScreen";
import ImageInput from "../../components/ImageInput";

import * as Yup from "yup";
import AppForm from "../../components/form/AppForm";
import AppFormFieldSecond from "../../components/form/AppFormFieldSecond";
import FormBtn from "../../components/FormBtn";
import SubmitSmallButton from "../../components/form/SubmitSmallBtn";
import { COLORS } from "../../constants/theme";
import CheckboxWithText from "../../components/CheckboxWithText";
import AppTextInput from "../../components/AppTextInput";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  surname: Yup.string().required().label("Surname"),
  email: Yup.string().required().email().label("Email"),
});

const initialValues = {
  name: "",
  surname: "",
  email: "",
};

const Profile = ({ navigation }) => {
  const [uri, setUri] = React.useState(null);

  const [name, setName] = React.useState("");
  const [surname, setSurName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [notificationEnabled, setNotificationEnabled] = React.useState(false);
  const [messagesEnabled, setMessagesEnabled] = React.useState(false);

  const onChangeImage = (uriMe) => {
    setUri(uriMe);
  };

  const handleMessagesChange = () => {
    setMessagesEnabled(!messagesEnabled);
  };

  const handleNotificationChange = () => {
    setNotificationEnabled(!notificationEnabled);
  };
  return (
    <AppScreen>
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require("../../../assets/icons/chevL.png")}
          />
        </TouchableOpacity>

        <View style={styles.imageContainer}>
          <ImageInput imageUri={uri} onChangeImage={onChangeImage} />
        </View>

        <View style={styles.formContainer}>
          <AppForm
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={(values) => console.log(values)}
          >
            <AppTextInput
              placeholder="Nome*"
              value={name}
              onChange={(text) => setName(text)}
            />
            <AppTextInput
              placeholder="Sobrenome*"
              value={surname}
              onChange={(text) => setSurName(text)}
            />
            <AppTextInput
              placeholder="E-mail*"
              value={email}
              onChange={(text) => setEmail(text)}
            />

            <View style={styles.checkBoxes}>
              <CheckboxWithText
                label="Receber notificações"
                checked={notificationEnabled}
                onChange={handleNotificationChange}
              />
              <CheckboxWithText
                label="Mensagens"
                checked={messagesEnabled}
                onChange={handleMessagesChange}
              />
            </View>

            <View style={styles.formBtnsContainer}>
              <FormBtn title="cancelar" color={COLORS.secondary} />
              <SubmitSmallButton title="Salvar" />
            </View>
          </AppForm>
        </View>
      </View>
    </AppScreen>
  );
};

export default Profile;

const styles = StyleSheet.create({
  checkBoxes: {
    padding: 20,
  },

  formBtnsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  formContainer: {
    flex: 1,
    marginTop: 35,
  },
  image: {
    width: 27,
    height: 27,
    marginTop: 15,
  },
  imageContainer: {
    alignSelf: "center",
    marginTop: 20,
  },

  mainContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
});
