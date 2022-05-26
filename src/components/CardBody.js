import { View, Image, StyleSheet } from 'react-native'
import React from 'react'

const CardBody = ({picture}) => (

    <View style={styles.containerCardBody}>
      <Image source={picture} style={styles.imageProduct} />
    </View>
)

export default CardBody

const styles = StyleSheet.create({
  containerCardBody : {
    flex : 3.3, 
    borderBottomWidth : 1, 
    borderColor : '#2699fb'
  },
  imageProduct : {
    width : '100%', 
    height : '100%', 
    resizeMode : 'contain'
  }
})