import { View, StyleSheet } from 'react-native'
import React from 'react'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'

const Card = ({data}) => (

    <View style={styles.containerCard}>
        <CardHeader price={data.price} />
        <CardBody picture={data.photo} />
        <CardFooter desc={data.desc} title={data.title} likes={data.likes} userLikedProduct={data.userLike} />
    </View>
)

export default Card

const styles = StyleSheet.create({
  containerCard : {
    height : 370, 
    width : 175, 
    borderWidth: 1, 
    borderColor : '#2699fb', 
    marginTop : 15
  }
})