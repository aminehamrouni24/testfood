import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import React from "react";
import BackBtn from "../../components/BackBtn/BackBtn";
import Categories from "./Categories";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ImagePicker from "./ImagePicker";
import { useNavigation } from "@react-navigation/native";

const Product = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 20,
        marginTop: 30,
        backgroundColor: "#fff",
      }}
    >
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <BackBtn />
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              
              fontSize: 16,
            }}
          >
            Are you ready for a new creation ?{" "}
          </Text>
          <Image
            source={require("../../assets/chef.png")}
            style={{
              width: 70,
              height: 70,
            }}
          />
        </View>
        {/* **************** */}
        <View>
          <Text
            style={{
              margin: 10,

              color: "#00e21d",
              fontFamily: "Philosopher_Bold",
              fontSize: 16,
            }}
          >
            Category
          </Text>
          <Categories />
          <Text
            style={{
              margin: 10,
              fontFamily: "Philosopher_Bold",
              fontSize: 16,
              color: "#00e21d",
            }}
          >
            Dish Name
          </Text>
          <TextInput
            placeholder=""
            style={{
              width: 320,
              borderWidth: 1,
              height: 54,
              borderColor: "#bbb",
              borderRadius: 15,
              alignSelf: "center",
            }}
          />
          <View
            style={{
              margin: 20,
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "space-between",
              width: 300,
            }}
          >
            <Text
              style={{
                
                margin: 5,
                fontSize: 16,
                color: "#00e21d",
              }}
            >
              Dish Pictures
            </Text>
          </View>
        </View>
        <ImagePicker />
        <View style={{}}>
          <Text
            style={{
               
              margin: 10,
              fontSize: 16,
              color: "#00e21d",
            }}
          >
            Description
          </Text>
          <TextInput
            placeholder=""
            style={{
              width: 320,
              borderWidth: 1,
              height: 100,
              borderColor: "#ccc",
              borderRadius: 15,
              alignSelf: "center",
            }}
          />
          <Text
            style={{
              
              margin: 10,
              fontSize: 16,
              color: "#00e21d",
            }}
          >
            Price
          </Text>
          <TextInput
            placeholder=""
            style={{
              width: 320,
              borderWidth: 1,
              height: 40,
              borderColor: "#ccc",
              borderRadius: 15,
              alignSelf: "center",
            }}
          />
        </View>
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
            backgroundColor: "#F49619",
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("ProductDetails")}
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
           
              fontSize: 18,
            }}
          >
            Add Product
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Product;

const styles = StyleSheet.create({});
