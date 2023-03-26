import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Colors from '../constants/Colors'

const PokemonCard = ({ pokemon }) => {

    return (
        <View style={styles.card}>
            <Image
                style={styles.image}
                source={{
                    uri: pokemon.sprite,
                }}
            />
            <Text>{pokemon.name}</Text>
        </View>
    )
}

export default PokemonCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.accent,
        borderRadius: 10,
        width: 120,
        height: 150,
        alignItems: 'center',
        margin: 20
    },
    image: {
        width: 120,
        height: 120
    },
})