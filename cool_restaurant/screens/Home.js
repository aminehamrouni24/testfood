import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Product from './Product/Product'
const Home = () => {
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 20,
        margin: 15,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* intro */}

        <View
          style={{
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Dancing",
              fontSize: 18,
            }}
          >
            Welcome back we are happy to have you
          </Text>
        </View>
        {/* Home component structure */}
        {/* logo part */}
        <Image
          source={require("../assets/chef.png")}
          style={{
            width: 80,
            height: 80,
            alignSelf: "center",
            margin: 10,
          }}
        />
        <Text
          style={{
            textAlign: "center",
            fontFamily: "Vibes",
            fontSize: 22,
            letterSpacing: 2,
            color: "#F39200",
          }}
        >
          Restaurant's name
        </Text>
        {/* End logo part */}

        {/* description part */}
        <View>
          <Text>Food types , specialties , etc</Text>
          <Text>restaurant address</Text>
          <Text>restaurant phone number</Text>
          <Image/>
          <Text>
            Image part
          </Text>
          <Text>
            Availability
          </Text>
          <Text>
            Working Time
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home

const styles = StyleSheet.create({})