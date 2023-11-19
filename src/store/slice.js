import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { dishes } from '../utils/constants/data'

const initialState = {
  dishes: dishes,
  favorites: [],
  orderHistory: [],
}

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addToFav.fulfilled, (state, action) => {
      state.favorites = action.payload
    }),
      builder.addCase(removeFromFav.fulfilled, (state, action) => {
        state.favorites = action.payload
      }),
      builder.addCase(placeOrder.fulfilled, (state, action) => {
        state.orderHistory = action.payload
      }),
      builder.addCase(loadDataFromAsyncStorage.fulfilled, (state, action) => {
        state.orderHistory = action.payload.orderHistory || []
        state.favorites = action.payload.favorites || []
      })
  },
  reducers: {
    getAllFav: (state) => {
      return state.favorites
    },
    getOrderHistory: (state) => {
      return state.orderHistory
    },
  },
})

export const addToFav = createAsyncThunk(
  'slice/addToFav',
  async ({ dishId }, { getState }) => {
    try {
      const state = getState()
      const dish = state.dishes.find((dish) => dish.id === dishId)
      let favorites = [...state['favorites']]
      favorites.push(dish)

      await AsyncStorage.setItem('favorites', JSON.stringify(favorites))

      return favorites
    } catch (error) {
      console.error('Error saving favorites:', error)
    }
  }
)

export const removeFromFav = createAsyncThunk(
  'slice/removeFromFav',
  async ({ dishId }, { getState }) => {
    try {
      const state = getState()
      const newFavorites = state.favorites.filter((dish) => dish.id !== dishId)

      await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites))

      return newFavorites
    } catch (error) {
      console.error('Error removing from favorites:', error)
    }
  }
)

export const placeOrder = createAsyncThunk(
  'slice/placeOrder',
  async ({ orderDetails }, { getState }) => {
    try {
      const state = getState()
      let orderHistory = [...state['orderHistory']]
      orderHistory.push(orderDetails)

      await AsyncStorage.setItem('orderHistory', JSON.stringify(orderHistory))

      return orderHistory
    } catch (error) {
      console.error('Error in placing order', error)
    }
  }
)

export const loadDataFromAsyncStorage = createAsyncThunk(
  'slice/loadDataFromAsyncStorage',
  async () => {
    try {
      const favoritesString = await AsyncStorage.getItem('favorites')
      const favorites = JSON.parse(favoritesString)

      const orderHistoryString = await AsyncStorage.getItem('orderHistory')
      const orderHistory = JSON.parse(orderHistoryString)

      return { favorites, orderHistory }
    } catch (error) {
      console.error('Error in placing order', error)
    }
  }
)

export const { getAllFav, getOrderHistory } = restaurantSlice.actions

export default restaurantSlice.reducer
