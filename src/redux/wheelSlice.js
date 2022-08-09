import { createSlice } from "@reduxjs/toolkit";

export const campaign_wheels = [
  {
    id: 1,
    image:
      "https://browser-cdn.zarebin.ir/magnix-server-media/Campaign/gifts.svg",
    title: "3 گیگابایتی",
  },
  {
    id: 2,
    image:
      "https://browser-cdn.zarebin.ir/magnix-server-media/Campaign/gift1s.svg",
    title: "5 گیگابایتی",
  },
  {
    id: 3,
    image:
      "https://browser-cdn.zarebin.ir/magnix-server-media/Campaign/gift2s.svg",
    title: "10 گیگابایتی",
  },
  {
    id: 4,
    image:
      "https://browser-cdn.zarebin.ir/magnix-server-media/Campaign/gift3s.svg",
    title: "20 گیگابایتی",
  },
  {
    id: 5,
    image:
      "https://browser-cdn.zarebin.ir/magnix-server-media/Campaign/gift4s.svg",
    title: "50 گیگابایتی",
  },
  {
    id: 6,
    image:
      "https://browser-cdn.zarebin.ir/magnix-server-media/Campaign/gift5s.svg",
    title: "100 گیگابایتی",
  },
];

const initialState = {
  title: "!شانس خود را امتحان کنید",
  description:
    ".گردونه شانس را بچرخانید و بسته یک روزه اینترنت همراه اول جایزه ببرید",
  prizes: [],
  finished: false,
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
  },
});

export const selectPrizes = (state) => state.wheelReducer.prizes;
export const selectIsFinished = (state) => state.wheelReducer.finished;
export const selectTitle = (state) => state.wheelReducer.title;
export const selectDescription = (state) => state.wheelReducer.description;
export const selecButtonText = (state) => state.wheelReducer.buttonText;

export const { setPrize } = wheelSlice.actions;

export default wheelSlice.reducer;
