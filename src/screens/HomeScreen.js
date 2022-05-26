import { TextInput, FlatList, StyleSheet, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import listData from '../../assets/data'


const HomeScreen = () => {

  const [text, setText] = useState("")
  const [dataSearch, setDataSearch] = useState([])

  const searchModelData = (textInput) => {
    textInput 
    ? setDataSearch(listData.filter(elt => Number(elt.price) < Number(textInput))) 
    : setDataSearch(listData)
    setText(textInput)
  }

  useEffect(() => {
    setDataSearch(listData)
  }, [])

  return (
    <>
      <TextInput
          style={styles.input}
          onChangeText={ (text) => searchModelData(text) }
          value={text}
          placeholder="Recherche par prix inférieur à :"
          keyboardType='numeric'
      />

      {dataSearch.length > 0 
      ?
        <FlatList 
          numColumns={2}
          columnWrapperStyle={styles.wrapperFlat}
          data={dataSearch}
          renderItem={({item, index}) => <Card key={index} data={item} />}
        />
      :
        <Text>Aucune donnée n'a été trouvée</Text>
      }
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  input : {
    height: 40, 
    margin: 12, 
    borderWidth: 1, 
    padding: 10, 
    borderColor : '#2699fb'
  },
  wrapperFlat : {
    justifyContent : 'space-evenly', 
    flexWrap : 'wrap'
  }
})