import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shopItems: JSON.parse(localStorage.getItem('localShopState')) || [],
};

export const shoppingCartSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    addShopItems: (state, action) => {
      if (state.shopItems.findIndex(e => e.id === action.payload.id) > -1) {
        //Проверяем совпадение payload id с id в state
        state.shopItems.forEach(i => {
          if (i.id === action.payload.id) return i.count++;
        });
      } else state.shopItems.push(action.payload);
    },

    removeShopItems: (state, action) => {
      state.shopItems = state.shopItems.filter(e => e.id !== action.payload.id);
    },

    decrementShopItems: (state, action) => {
      let index = state.shopItems.findIndex(e => e.id === action.payload.id);
      let elem = state.shopItems[index];
      if (elem.count > 1) {
        elem.count--;
      } else {
        state.shopItems = state.shopItems.filter(e => e.id !== action.payload.id);
      }
    },

    incrementShopItems: (state, action) => {
      let index = state.shopItems.findIndex(e => e.id === action.payload.id);
      let elem = state.shopItems[index];

      elem.count++;
    },
  },
});

export const { addShopItems, decrementShopItems, incrementShopItems, removeShopItems } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
