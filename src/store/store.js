import { configureStore } from '@reduxjs/toolkit'
import restaurantReducer from './slice'

export const store = configureStore({
  reducer: restaurantReducer,
})
