import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
  category: 0,
  visibleCatalog: false,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchPost: (state, action) => {
      state.value = action.payload;
    },
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
    visible(state, action) {
      state.visibleCatalog = action.payload;
    },
  },
});

export const { searchPost, changeCategory, visible } = searchSlice.actions;

export default searchSlice.reducer;
