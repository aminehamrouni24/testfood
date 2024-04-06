import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Location from "expo-location";

export default function LocationScreen() {
  const [address, setAddress] = useState(null);

  const handleSetLocation = async () => {
    try {
      // Request permission to access device location
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Location permission not granted");
        return;
      }

      // Get current device location
      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      // Perform reverse geocoding to get address
      const addressResponse = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      const formattedAddress = formatAddress(addressResponse);
      setAddress(formattedAddress);
    } catch (error) {
      console.error("Error fetching location and address:", error);
    }
  };

  const formatAddress = (addressResponse) => {
    if (!addressResponse || addressResponse.length === 0) {
      return "Address not found";
    }
    const { street, city, region, country } = addressResponse[0];
    return `${street}, ${city}, ${region}, ${country}`;
  };

  return (
    <View
      style={{
        alignSelf: "center",
        alignItems: "center",
        flexDirection: "row",
        alignContent: "center",

        justifyContent: "space-between",
        padding: 10,
        width: 300,
        backgroundColor: "#fff",
        borderRadius: 10,
        height: 60,
      }}
    >
      <TouchableOpacity
        onPress={handleSetLocation}
        style={{
          padding: 10,
          backgroundColor: "#eee",
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 20  }}>
          📍
        </Text>
      </TouchableOpacity>
      {address && (
        <View>
          <Text style={{ fontFamily: "Philosopher", fontSize: 18 }}>
            Address : {address}
          </Text>
        </View>
      )}
    </View>
  );
}
