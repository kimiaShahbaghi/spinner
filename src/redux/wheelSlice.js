import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  description: "",
  prizes: [],
  isValid: false,
  finished: false,
  rotate: 0,
  prizeIndex: undefined,
  buttonText: "چرخاندن گردونه",
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
  },
});

export const selectPrizes = (state) => state.wheelReducer.prizes;
export const selectIsFinished = (state) => state.wheelReducer.finished;
export const selectTitle = (state) => state.wheelReducer.title;
export const selectDescription = (state) => state.wheelReducer.description;
export const selecButtonText = (state) => state.wheelReducer.buttonText;
export const selectValid = (state) => state.wheelReducer.isValid;
export const selectRotate = (state) => state.wheelReducer.rotate;

export const { setPrize, setValid, setPrizeIndex } = wheelSlice.actions;

export default wheelSlice.reducer;
