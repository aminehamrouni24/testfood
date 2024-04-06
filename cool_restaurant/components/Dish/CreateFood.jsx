import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CreateFood = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingHorizontal: 20,
        marginTop: 50,
      }}
    >
      <Text
        style={{
          
          fontSize: 20,
          margin: 10,
        }}
      >
        The Menu{" "}
      </Text>
      <Text
        style={{
          
          fontSize:18
        }}
      >
        Let's create something awesome
      </Text>
      <TouchableOpacity
        style={{
          margin: 20,
          width: 290,
          height: 45,
          borderWidth: 1,
          borderColor: "#f8cb33",
          alignSelf: "center",
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          backgroundColor: "#f8cb33",
          borderRadius: 10,
        }}
        // onPress={() => navigation.navigate("Product")}
      >
        <AntDesign
          name="pluscircleo"
          size={24}
          color="black"
          style={{
            padding: 5,
          }}
        />
        <Text
          style={{
            padding: 5,
            fontFamily: "Bold",
          }}
        >
          Add Product
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateFood;

const styles = StyleSheet.create({});
