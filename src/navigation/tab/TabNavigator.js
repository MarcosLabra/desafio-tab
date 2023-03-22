import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import PokemonListScreen from "../../screens/PokemonListScreen";
import TypesScreen from "../../screens/TypesScreen";
import SearchScreen from "../../screens/SearchScreen";

import COLORS from "../../constants/Colors";

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator
        initialRouteName="Pokemons"
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.primary
          },
          headerTintColor: COLORS.white,
          headerTitleStyle: {
            fontFamily: 'OpenSans_700Bold'
          },
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: COLORS.accent,
          tabBarInactiveTintColor: COLORS.green

        }}
      >
        <BottomTabs.Screen name="Pokemons"
          options={{
            title: "Pokemons",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="pokeball" size={size} color={color} />
            )
          }}
          component={PokemonListScreen} />
        <BottomTabs.Screen
          name="PokemonTypes"
          component={TypesScreen}
          options={{
            title: "Types",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="format-list-bulleted-type" size={size} color={color} />
            )
          }}
        />
        <BottomTabs.Screen
          name="SearchPokemon"
          component={SearchScreen}
          options={{
            title: "Search",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="search" size={size} color={color} />
            )
          }}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>

  )
}

export default TabNavigator

const styles = StyleSheet.create({
  tabBar: {
    height: 80,
    paddingBottom: 20,
    backgroundColor: COLORS.primary,
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  }
})