import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CardHeader = ({price}) => (

    <View style={styles.containerCardHeader}>
      <Text>{price} €</Text>
    </View>
)

export default CardHeader

const styles = StyleSheet.create({
  containerCardHeader : {
    flex : 0.7, 
    borderBottomWidth : 1, 
    borderColor : '#2699fb', 
    justifyContent : 'center', 
    alignItems : 'flex-end', 
    paddingRight : 10
  }
})