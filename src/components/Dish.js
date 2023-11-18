import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import globalStyles from '../utils/styles/globalstyles'
import { Avatar, Divider } from 'react-native-elements'
import TextWithLabel from './TextWithLabel'

import { useNavigation } from '@react-navigation/native'

const Dish = ({ id, name, imgUrl, price }) => {
  const navigate = useNavigation()

  const handleDishPress = () => {
    navigate.push('Details', { dish: { id, name, imgUrl, price } })
  }
  return (
    <View style={globalStyles.container}>
      <TouchableOpacity
        style={[globalStyles.cardView, globalStyles.boxShadow(20)]}
        onPress={handleDishPress}
      >
        <Avatar
          size='xlarge'
          source={{ uri: imgUrl }}
          containerStyle={styles.avatarContainer}
        />
        <Divider style={styles.divider} />
        <TextWithLabel label='Name' text={name} textAlign='left' />
        <TextWithLabel label='price' text={price} textAlign='left' />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  avatarContainer: {
    alignSelf: 'center',
  },
  divider: {
    marginVertical: 10,
  },
})

export default Dish
