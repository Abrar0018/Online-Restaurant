import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaView } from 'react-native'
import { useDispatch } from 'react-redux'

import { DetailsScreen } from './screens'
import TabNavigator from './navigators/TabNavigator'
import { loadDataFromAsyncStorage } from './store/slice'

const Stack = createStackNavigator()

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadDataFromAsyncStorage())
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 40 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Tab' component={TabNavigator} />
          <Stack.Screen name='Details' component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App
