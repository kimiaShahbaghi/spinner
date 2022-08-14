import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  description: "",
  prizes: [],
  isValid: false,
  rotate: 0,
  buttonText: "چرخاندن گردونه",
  spinned: false,
  networkError: false,
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
    setRotate: (state, action) => {
      state.rotate = (36 - action.payload + 1) * (360 / state.prizes.length);
      state.buttonText = "...";
    },
    setPrizeContent: (state, action) => {
      state.spinned = true;
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.buttonText = "متوجه شدم";
    },
    setNetworkError: (state, action) => {
      state.networkError = action.payload;
    },
  },
});

export const selectPrizes = (state) => state.wheelReducer.prizes;
export const selectTitle = (state) => state.wheelReducer.title;
export const selectDescription = (state) => state.wheelReducer.description;
export const selecButtonText = (state) => state.wheelReducer.buttonText;
export const selectValid = (state) => state.wheelReducer.isValid;
export const selectRotate = (state) => state.wheelReducer.rotate;
export const selectSpinned = (state) => state.wheelReducer.spinned;
export const selectError = (state) => state.wheelReducer.networkError;

export const {
  setPrize,
  setValid,
  setPrizeContent,
  setRotate,
  setNetworkError,
} = wheelSlice.actions;

export default wheelSlice.reducer;
