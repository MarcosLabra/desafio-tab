import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import COLORS from '../constants/Colors'

const PokemonListScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>PokemonListScreen</Text>
    </View>
  )
}

export default PokemonListScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary
  },
  text: {
    fontFamily: 'OpenSans_400Regular',
    marginBottom: 20,
    color: COLORS.black
  }
})