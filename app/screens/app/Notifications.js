import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AppScreen from "../../components/AppScreen";
import { COLORS, FONTS } from "../../constants/theme";
import NotificationBtn from "../../components/NotificationBtn";

const notifications = [
  {
    id: 1,
    title: "Hello this is the notification for you",
  },
  {
    id: 2,
    title: "Hello this is the notification for you",
  },
  {
    id: 3,
    title: "Hello this is the notification for you",
  },
  {
    id: 4,
    title: "Hello this is the notification for you",
  },
];

const Notifications = ({ navigation }) => {
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

        <Text style={styles.heading}>Notificações</Text>
        <View style={styles.listContainer}>
          <FlatList
            data={notifications}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <NotificationBtn />}
          />
        </View>
      </View>
    </AppScreen>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  heading: {
    fontFamily: FONTS.bold,
    fontSize: 30,
    color: COLORS.secondary,
    marginVertical: 30,
    marginLeft: 20,
  },
  image: {
    width: 27,
    height: 27,
    marginTop: 15,
  },
});
