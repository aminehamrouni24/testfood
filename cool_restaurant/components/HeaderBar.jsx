import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LocationScreen from './LocationScreen'

const HeaderBar = () => {
  return (
    <SafeAreaView>
      <View>
        <LocationScreen/>
        <View>
            <Image 
            source={require('../assets/images/1.png')}
            />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HeaderBar

const styles = StyleSheet.create({})