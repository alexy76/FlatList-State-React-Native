import { View, Text } from 'react-native'
import React from 'react'

const CardFooter = ({desc, title}) => {

  return (
    <View style={{ flex : 3 }}>

      <View style={{ flex : 2, backgroundColor : '' }}>
        <Text style={{ fontSize : 12, fontWeight : 'bold' }}>{title}</Text>
      </View>

      <View style={{ flex : 6, backgroundColor : '' }}>
        <Text style={{ overflow : 'hidden', fontSize : 10 }}>{desc}</Text>
      </View>

      <View style={{ flex : 3, backgroundColor : '' }}>
        <Text>like</Text>
      </View>

    </View>
  )
}

export default CardFooter