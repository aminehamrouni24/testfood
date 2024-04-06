import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from "@expo/vector-icons";
const ImagePickerComponent = () => {
  const [status, requestPermission] = ImagePicker.useCameraPermissions();

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity
        onPress={pickImage}
        style={{
          

          alignContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <View
          style={{
            alignContent: "center",
            alignItems: "center",
            width: 130,
            height: 130,
            borderWidth: 1,
            borderColor: "#bbb",
            borderRadius: 70,
            borderStyle: "dashed",
            marginTop:5
          }}
        >
          <FontAwesome
            name="photo"
            size={75}
            color="#bbb"
            style={{
              padding: 25,
            }}
          />
        </View>
      </TouchableOpacity>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
};

export default ImagePickerComponent;
