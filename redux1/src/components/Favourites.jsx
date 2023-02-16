import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favItems: [],
  favTtotal: 0,
  favTotalAmount: 0,
};
const favSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addToFav(state, action) {
      state.favItems.push(action.payload);
    },
  },
});
export const { addToFav } = favSlice.actions;
export default favSlice.reducer;
