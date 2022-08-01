import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  message: '',
  isLoading: false,
};
const sentimentSlice = createSlice({
  name: "sentiment",
  initialState,
  reducers: {
    setQuestion: (state, action) => {
      state.question = action.payload;
    },

    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    clearQuestion: (state) => {
      state.question = {};
    },
  },
});

export const selectLoading = (state) => state.sentimentReducer.isLoading;
export const selectQuestion = (state) => state.sentimentReducer.question;

export const {
  previousHandler,
  sentimentHandler,
  setQuestion,
  setLoading,
  clearQuestion,
} = sentimentSlice.actions;

export default sentimentSlice.reducer;