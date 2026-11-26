import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Slices/Auth.js'

export const Store = configureStore({
  reducer: {
    auth: authReducer
  }
})