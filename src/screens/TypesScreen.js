import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import COLORS from '../constants/Colors'
import TYPES from '../data/types'

import TypesCard from '../components/TypesCard'

const TypesScreen = () => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={TYPES}
        renderItem={({ item }) => <TypesCard types={item} />}
        keyExtractor={item => item.type}
      />
    </View>
  )
}

export default TypesScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary
  },
  text: {
    fontFamily: 'OpenSans_400Regular',
    color: COLORS.black
  }
})