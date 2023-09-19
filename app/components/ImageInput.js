import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { COLORS, FONTS } from "../constants/theme";

function ImageInput({ imageUri, onChangeImage, newImage, defaultImageUri }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };

  const handlePress = () => {
    console.log("handlePress", imageUri, defaultImageUri);
    if (imageUri == defaultImageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        {
          text: "Yes",
          onPress: () => {
            onChangeImage(defaultImageUri);
            newImage(null);
          },
        },
        { text: "No" },
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.canceled) {
        onChangeImage(result.assets[0].uri);
        newImage(result.assets[0]);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          // <MaterialCommunityIcons
          //   color={COLORS.lightGray}
          //   name="camera"
          //   size={40}
          // />
          <>
            <Image
              resizeMode="contain"
              // ../../../assets/images/man.jpg
              // source={require("../../assets/images/man.jpg")}
              source={require("../../assets/icons/plusImage.png")}
              style={{ width: 36, height: 36, marginTop: 10 }}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 12,
              }}
            >
              <Image
                source={require("../../assets/icons/gallerys.png")}
                style={{ width: 13, height: 13 }}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  fontSize: 15,
                  color: COLORS.primary,
                  marginLeft: 5,
                }}
              >
                Add Photo
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#E8F3F4",
                paddingHorizontal: 15,
                paddingVertical: 6,
                borderRadius: 20,
              }}
            >
              <Text style={{ fontFamily: FONTS.regular, fontSize: 11 }}>
                Using 1/12 Images
              </Text>
            </View>
          </>
        )}
        {imageUri && (
          <>
            <Image resizeMode="cover" source={imageUri} style={styles.imagee} />
            <View style={styles.deleteView}>
              <Image
                resizeMode="contain"
                source={require("../../assets/icons/del.png")}
                style={{ width: 10, height: 10 }}
              />
            </View>
            <View style={styles.secondContainer}>
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 10,
                  fontFamily: FONTS.bold,
                }}
              >
                Cover Photo
              </Text>
            </View>
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // backgroundColor: COLORS.bg,
    // borderRadius: 15,
    height: 137,
    justifyContent: "center",
    marginVertical: 10,
    overflow: "hidden",
    width: 137,
    borderWidth: 1,
    borderColor: "#D0E8EB",
    borderRadius: 20,
  },
  deleteView: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: COLORS.orange,
    zIndex: +21,
    padding: 10,
    borderRadius: 100,
  },
  imagee: {
    height: "100%",
    width: "100%",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  secondContainer: {
    backgroundColor: COLORS.primary,
    position: "absolute",
    bottom: 10,
    width: 127,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 7,
    opacity: 0.7,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default ImageInput;
