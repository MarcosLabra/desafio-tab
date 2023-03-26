import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import COLORS from '../constants/Colors'
import POKEMONS from '../data/pokemons'
import PokemonCard from '../components/PokemonCard'


const PokemonListScreen = ({ navigation }) => {

  return (
    <View style={styles.screen}>
      <FlatList
        numColumns={2}
        data={POKEMONS}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        keyExtractor={item => item.id}
      />
    </View >
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