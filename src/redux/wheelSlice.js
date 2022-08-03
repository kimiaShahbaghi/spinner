import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  title: "",
  description:'',
  prizes: [],
};
const wheelSlice = createSlice({
  name: "wheel",
  initialState,
  reducers: {
    setPrize: (state, action) => {
      state.prizes = action.payload.prizes;
      state.title = action.payload.title;
      state.description = action.payload.description;
    },
  },
});

export const selectPrizes = (state) => state.wheelReducer.prizes;

export const { setPrize } = wheelSlice.actions;

export default wheelSlice.reducer;
