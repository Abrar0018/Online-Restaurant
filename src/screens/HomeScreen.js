import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

import globalStyles from '../utils/styles/globalstyles'
import Dish from '../components/Dish'

const HomeScreen = ({ navigation }) => {
  const dishes = useSelector((store) => store.dishes)

  return (
    <ScrollView>
      <View style={{ paddingTop: 20, paddingBottom: 70 }}>
        <Text style={[globalStyles.label, globalStyles.boldText]}>
          Welcome to our Online Restaurant{' '}
        </Text>
        <View style={[globalStyles.flexGap(5)]}>
          {dishes.map((dish) => {
            return <Dish key={dish.id} {...dish} />
          })}
        </View>
      </View>
    </ScrollView>
  )
}

export default HomeScreen
