import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const BackBtn = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        height: 50,
        paddingHorizontal:5,
        margin: 10,
      }}
      onPress={() => navigation.goBack()}
    >
      <Ionicons name="arrow-back-circle-outline" size={40} color="#000" />
    </TouchableOpacity>
  );
};

export default BackBtn;

const styles = StyleSheet.create({});
