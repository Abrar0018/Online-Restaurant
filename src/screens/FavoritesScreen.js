import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import globalStyles from '../utils/styles/globalstyles'

const FavoritesScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={[globalStyles.container, globalStyles.flexGap(10)]}>
        <Text style={globalStyles.text()}>
          A List of favorite recipes will appear here
        </Text>
        {[1, 2, 3].map((el) => {
          return (
            <TouchableOpacity
              key={el}
              style={[globalStyles.cardView]}
              onPress={() => navigation.push('Details')}
            >
              <Text style={globalStyles.text()}>Recipe Content</Text>
            </TouchableOpacity>
          )
        })}
      </View>
    </ScrollView>
  )
}

export default FavoritesScreen
