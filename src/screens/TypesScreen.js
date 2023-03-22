import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import COLORS from '../constants/Colors'

const TypesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>TypesScreen</Text>
    </View>
  )
}

export default TypesScreen

const styles = StyleSheet.create({
  screen: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary
  },
  text: {
    fontFamily: 'OpenSans_400Regular',
    color: COLORS.black
  }
})