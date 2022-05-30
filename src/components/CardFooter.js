import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'


const CardFooter = ({desc, title, likes, userLikedProduct}) => {

  const [userLiked, setUserLiked] = useState(userLikedProduct)
  const [counterLike, setCounterLike] = useState(likes)

  const likeDislike = () => {

    userLiked ? setCounterLike(Number(counterLike) - 1) : setCounterLike(Number(counterLike) + 1)

    setUserLiked(!userLiked)
  }


  return (
    <View style={{ flex : 3 }}>

      <View style={{ flex : 2 }}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={{ flex : 6 }}>
        <Text style={styles.describe}>{desc}</Text>
      </View>

      <View style={{ flex : 3, flexDirection : 'row' }}>

        <View style={styles.counterLikes} >

          <Text>{counterLike}</Text>

        </View>

        <View style={styles.imageLiked} >

          <TouchableOpacity onPress={likeDislike} style={styles.buttonLike}>
            <Image source={!userLiked ? require('../../assets/img/like.png') : require('../../assets/img/likefull.png')} style={styles.imageSize} />
          </TouchableOpacity>

        </View>

      </View>

    </View>
  )
}

export default CardFooter

const styles = StyleSheet.create({
  title : {
    fontSize : 12, 
    fontWeight : 'bold'
  },
  describe : {
    overflow : 'hidden', 
    fontSize : 10
  },
  counterLikes : {
    flex : 5, 
    justifyContent : 'center', 
    alignItems : 'flex-end',
    marginEnd : 20
  },
  imageLiked : {
    flex : 1, 
    justifyContent : 'flex-end', 
    alignItems : 'flex-end' 
  },
  buttonLike : { 
    width : '100%', 
    height : '100%', 
    marginEnd : 7 
  },
  imageSize : { 
    width : '100%', 
    height : '100%', 
    resizeMode : 'contain'
  }
})