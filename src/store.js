import { configureStore } from '@reduxjs/toolkit'
import sliceData from './app/redux/Slices'

export const store = configureStore({
  reducer: {
    users: sliceData
  },
})

export default store