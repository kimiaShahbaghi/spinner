import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  description: "",
  prizes: [],
  isValid: true,
  rotate: 0,
  prizeIndex: undefined,
  buttonText: "چرخاندن گردونه",
  spinned: false,
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
    setValid: (state, action) => {
      state.isValid = action.payload;
    },
    setPrizeIndex: (state, action) => {
      state.prizeIndex = action.payload;
    },
    setRotate: (state, action) => {
      state.rotate = action.payload;
      state.isValid = false;
    },
  },
});

export const selectPrizes = (state) => state.wheelReducer.prizes;
export const selectTitle = (state) => state.wheelReducer.title;
export const selectDescription = (state) => state.wheelReducer.description;
export const selecButtonText = (state) => state.wheelReducer.buttonText;
export const selectValid = (state) => state.wheelReducer.isValid;
export const selectRotate = (state) => state.wheelReducer.rotate;
export const selectPrizeIndex = (state) => state.wheelReducer.prizeIndex;


export const { setPrize, setValid, setPrizeIndex, setRotate } =
  wheelSlice.actions;

export default wheelSlice.reducer;
