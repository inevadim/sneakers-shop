import { configureStore } from '@reduxjs/toolkit'
import shoppingCartSlice from './shoppingCartSlice'
import searchSlice from './searchSlice'

export const store = configureStore({
  reducer: {
      shoppingCart:shoppingCartSlice,
      search:searchSlice,
  },
})