import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './src/navigators/TabNavigator'
import { DetailsScreen } from './src/screens'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaView } from 'react-native'

const Stack = createStackNavigator()

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 20 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name='Tab'
            component={TabNavigator}
            options={{ animation: 'slide_from_bottom' }}
          />
          <Stack.Screen
            name='Details'
            component={DetailsScreen}
            options={{ animation: 'slide_from_bottom' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App
