import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackBtn from '../../components/BackBtn/BackBtn'

const ProductDetails = () => {
  return (
    <SafeAreaView style={{
        paddingHorizontal:10,
        marginTop:40
    }}>
      <BackBtn/>
    </SafeAreaView>
  )
}

export default ProductDetails

const styles = StyleSheet.create({})