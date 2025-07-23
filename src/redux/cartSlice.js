import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
   AddItem: (state, action) => {
  let existItem = state.find(item => item.id === action.payload.id);
  if (existItem) {
    existItem.qty += 1;
  } else {
    state.push({ ...action.payload, qty: 1 }); // ✅ this now includes image
  }
},

    RemoveItem: (state, action) => {
      let { id } = action.payload;
      return state.filter(item => item.id !== id);
    },

    DecreaseItem: (state, action) => {
      let { id } = action.payload;
      let item = state.find(item => item.id === id);
      if (item && item.qty > 1) {
        item.qty -= 1;
      } else {
        return state.filter(item => item.id !== id);
      }
    }
  }
});

export const { AddItem, RemoveItem, DecreaseItem } = cartSlice.actions;
export default cartSlice.reducer;
