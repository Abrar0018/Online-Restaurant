import React from 'react'
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { store } from './src/store/store'
import RestaurantApp from './src'

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <RestaurantApp />
      </Provider>
    </SafeAreaProvider>
  )
}

export default App
