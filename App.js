import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'

const App = () => (

  <SafeAreaView style={styles.container}>

      <HomeScreen />

  </SafeAreaView>
)

export default App

const styles = StyleSheet.create({
  container : {
    flex : 1, 
    marginBottom : 10,
  }
})