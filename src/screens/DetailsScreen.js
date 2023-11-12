import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import globalStyles from '../utils/styles/globalstyles'

const DetailsScreen = ({ navigation, route }) => {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.cardView}>
        <Text style={globalStyles.text()}>
          Recipe Details will be shown here
        </Text>
        <TouchableOpacity style={globalStyles.btn}>
          <Text style={globalStyles.text()}>Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.btn}>
          <Text style={globalStyles.text()}>Add to favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalStyles.btn}
          onPress={() => navigation.pop()}
        >
          <Text style={globalStyles.text()}>Go back</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DetailsScreen
