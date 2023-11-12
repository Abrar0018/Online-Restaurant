import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import globalStyles from '../utils/styles/globalstyles'

const OrderHistoryScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={[globalStyles.container, globalStyles.flexGap(10)]}>
        <Text style={globalStyles.text()}>
          Order History will be shown here
        </Text>
        {[1, 2, 3].map((el) => {
          return (
            <View key={el} style={[globalStyles.cardView]}>
              <Text style={globalStyles.text()}>Recipe Name: Name</Text>
              <Text style={globalStyles.text()}>Recipe Count: 2</Text>
              <Text style={globalStyles.text()}>Order price : $</Text>
            </View>
          )
        })}
      </View>
    </ScrollView>
  )
}

export default OrderHistoryScreen
