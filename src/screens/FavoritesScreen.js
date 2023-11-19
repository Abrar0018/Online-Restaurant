import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

import globalStyles from '../utils/styles/globalstyles'
import Dish from '../components/Dish'

const FavoritesScreen = () => {
  const favDishes = useSelector((store) => store.favorites)

  if (!favDishes || favDishes.length == 0)
    return (
      <View style={globalStyles.container}>
        <Text style={[globalStyles.label, globalStyles.boldText]}>
          You don't have any favorites added ....
        </Text>
      </View>
    )

  return (
    <ScrollView>
      <View style={{ paddingTop: 20, paddingBottom: 70 }}>
        <Text style={[globalStyles.label, globalStyles.boldText]}>
          List of your favorite dishes
        </Text>
        <View style={[globalStyles.flexGap(5)]}>
          {favDishes.map((dish) => {
            return <Dish key={dish.id} {...dish} />
          })}
        </View>
      </View>
    </ScrollView>
  )
}

export default FavoritesScreen
